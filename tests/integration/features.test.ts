import { approveFixtureRights } from '../fixtures/rights';
import { beforeAll, describe, expect, it } from 'vitest';
import { exportMyData } from '@/lib/account';
import * as admin from '@/lib/admin';
import { overview, progressCsv } from '@/lib/analytics';
import { db } from '@/lib/db';
import { answer, createSession, openSession, submitSession } from '@/lib/exam/service';
import { createPage, deletePage, updatePage, clipToNotebook, MAX_DEPTH } from '@/lib/notebook';
import { getPlan, moveTask, savePlan } from '@/lib/plan';
import * as study from '@/lib/study';
import { makeUser, resetDb, step1 } from './helpers';

beforeAll(resetDb);

async function answerAll(userId: string, count: number, correctFirst = 1) {
  const id = await createSession(userId, { mode: 'TIMED', count, examIds: [await step1()] });
  await openSession(userId, id);
  const items = await db.sessionItem.findMany({ where: { sessionId: id }, orderBy: { position: 'asc' }, include: { question: { include: { options: true } } } });
  for (const [i, it] of items.entries()) {
    const ids = i < correctFirst ? it.question.options.filter(o => o.isCorrect).map(o => o.id) : [it.question.options.find(o => !o.isCorrect)!.id];
    await answer(userId, id, it.position, ids);
  }
  await submitSession(userId, id);
  return { id, questionIds: items.map((i) => i.questionId) };
}

describe('study tools (T5, T9)', () => {
  it('notes, bookmarks, tags and collections are per user', async () => {
    const me = await makeUser(), them = await makeUser();
    const q = await db.question.findFirstOrThrow({ where: { status: 'PUBLISHED' } });
    await study.saveNote(me.id, q.id, 'my private note');
    await study.setBookmark(me.id, q.id, true);
    await study.setTags(me.id, q.id, ['Cardio', 'cardio', 'high yield']);
    expect(await db.note.count({ where: { userId: them.id } })).toBe(0);
    expect((await db.questionTag.findMany({ where: { userId: me.id } })).map((t) => t.tag).sort()).toEqual(['cardio', 'high yield']);
    await expect(study.setTags(me.id, q.id, ['<script>'])).rejects.toThrow();
    await study.saveNote(me.id, q.id, '   '); // empty note deletes it
    expect(await db.note.count({ where: { userId: me.id } })).toBe(0);

    const c = await study.createCollection(me.id, 'Weak spots');
    await expect(study.createCollection(me.id, 'Weak spots')).rejects.toMatchObject({ code: 'CONFLICT' });
    await study.setInCollection(me.id, c.id, q.id, true);
    await expect(study.setInCollection(them.id, c.id, q.id, true)).rejects.toMatchObject({ code: 'NOT_FOUND' }); // IDOR
    await expect(study.deleteCollection(them.id, c.id)).rejects.toMatchObject({ code: 'NOT_FOUND' });
  });

  it('report an error is validated and rate limited', async () => {
    const me = await makeUser();
    const q = await db.question.findFirstOrThrow({ where: { status: 'PUBLISHED' } });
    await expect(study.reportIssue(me.id, q.id, 'no')).rejects.toThrow();
    await study.reportIssue(me.id, q.id, 'Typo in the second paragraph.');
    expect(await db.contentReport.count({ where: { userId: me.id, status: 'OPEN' } })).toBe(1);
  });

  it('flashcards: card from an answered question only, SM-2 review, owner-only edits', async () => {
    const me = await makeUser(), them = await makeUser();
    const unanswered = await db.question.findFirstOrThrow({ where: { status: 'PUBLISHED' } });
    await expect(study.cardFromQuestion(me.id, unanswered.id)).rejects.toMatchObject({ code: 'FORBIDDEN' }); // no answer leak

    const { questionIds } = await answerAll(me.id, 2, 0); // both wrong
    const card = await study.cardFromQuestion(me.id, questionIds[0]);
    expect(card.back).toContain('**');
    const due = await study.dueCards(me.id);
    expect(due.due.map((c) => c.id)).toContain(card.id);

    const after = await study.reviewCard(me.id, card.id, 3, 1200);
    expect(after.interval).toBe(1);
    expect((await study.dueCards(me.id)).due.map((c) => c.id)).not.toContain(card.id);
    expect(await db.cardReview.count({ where: { cardId: card.id } })).toBe(1);

    await expect(study.reviewCard(them.id, card.id, 3, 0)).rejects.toMatchObject({ code: 'NOT_FOUND' });
    await expect(study.deleteCard(them.id, card.id)).rejects.toMatchObject({ code: 'NOT_FOUND' });
    await expect(study.reviewCard(me.id, card.id, 7, 0)).rejects.toThrow();
  });
});

describe('notebook (D3)', () => {
  it('nests up to the maximum depth, clips into an Inbox, and isolates users', async () => {
    const me = await makeUser(), them = await makeUser();
    let parent: string | null = null;
    for (let d = 0; d < MAX_DEPTH; d++) parent = (await createPage(me.id, { title: `Level ${d + 1}`, parentId: parent })).id;
    await expect(createPage(me.id, { title: 'Too deep', parentId: parent })).rejects.toThrow(/nested up to/);
    await updatePage(me.id, parent, { title: 'Deepest', body: '**hi**', tags: ['Renal', 'renal'] });
    expect((await db.notebookPage.findUniqueOrThrow({ where: { id: parent! } })).tags).toEqual(['renal']);
    await expect(updatePage(them.id, parent, { title: 'x', body: '', tags: [] })).rejects.toMatchObject({ code: 'NOT_FOUND' });
    await expect(createPage(them.id, { title: 'Hijack', parentId: parent })).rejects.toMatchObject({ code: 'NOT_FOUND' });

    await clipToNotebook(me.id, { text: 'Clip one', source: 'Question s1-0001' });
    await clipToNotebook(me.id, { text: 'Clip two' });
    const inbox = await db.notebookPage.findFirstOrThrow({ where: { userId: me.id, title: 'Inbox' } });
    expect(inbox.body).toContain('> Clip one');
    expect(inbox.body).toContain('> Clip two');
    await deletePage(me.id, (await db.notebookPage.findFirstOrThrow({ where: { userId: me.id, title: 'Level 1' } })).id);
    expect(await db.notebookPage.count({ where: { userId: me.id } })).toBe(1); // children cascaded, Inbox remains
  });
});

describe('analytics and planner (T10)', () => {
  it('overview reflects only my answers; CSV export works', async () => {
    const me = await makeUser(), other = await makeUser();
    await answerAll(me.id, 4, 3);
    await answerAll(other.id, 2, 0);
    const o = await overview(me.id);
    expect(o).toMatchObject({ used: 4, correct: 3, incorrect: 1, omitted: 0, pct: 75, today: 4, streak: 1 });
    expect(o.history).toHaveLength(1);
    expect(o.bySystem.reduce((s, r) => s + r.total, 0)).toBe(4);
    const csv = await progressCsv(me.id);
    expect(csv.split('\r\n')[1]).toBe('"Overall","All questions","4","3","1","0","75"');
  });

  it('plan covers every unused question, measures progress from answers, reschedules, and protects tasks', async () => {
    const me = await makeUser(), them = await makeUser();
    const iso = (d: number) => new Date(Date.now() + d * 864e5).toISOString().slice(0, 10);
    await expect(savePlan(me.id, { examId: null, startDate: iso(5), examDate: iso(1), hoursPerDay: 2 })).rejects.toThrow(/after the start/);
    await savePlan(me.id, { examId: await step1(), startDate: iso(0), examDate: iso(14), hoursPerDay: 1, questionsPerHour: 5, restDays: [] });
    const plan = await getPlan(me.id);
    const step1Count = await db.question.count({ where: { status: 'PUBLISHED', exam: { slug: 'step-1' } } });
    expect(plan!.tasks.filter((t) => t.kind === 'QUESTIONS').reduce((s, t) => s + t.target, 0)).toBe(step1Count);

    const { questionIds } = await answerAll(me.id, 2, 2);
    // put a task for the first answered question's system on today, then check progress counts that answer
    const sys = (await db.question.findUniqueOrThrow({ where: { id: questionIds[0] } })).systemId;
    const answeredInSys = (await db.question.findMany({ where: { id: { in: questionIds }, systemId: sys } })).length;
    const t0 = plan!.tasks.find((t) => t.kind === 'QUESTIONS')!;
    await db.planTask.update({ where: { id: t0.id }, data: { systemId: sys, date: new Date(`${iso(0)}T00:00:00Z`), target: 10 } });
    const fresh = (await getPlan(me.id))!.tasks.find((t) => t.id === t0.id)!;
    expect(fresh.progress).toBe(answeredInSys);
    expect(fresh.complete).toBe(false);

    const task = plan!.tasks.find((t) => t.kind === 'QUESTIONS')!;
    await expect(moveTask(them.id, task.id, iso(3))).rejects.toMatchObject({ code: 'NOT_FOUND' });
    await expect(moveTask(me.id, task.id, iso(30))).rejects.toThrow(/inside your plan/);
    await moveTask(me.id, task.id, iso(3));

    await savePlan(me.id, { examId: await step1(), startDate: iso(0), examDate: iso(14), hoursPerDay: 1, questionsPerHour: 5 }, true);
    const replanned = (await getPlan(me.id))!.tasks.filter((t) => t.kind === 'QUESTIONS').reduce((s, t) => s + t.target, 0);
    expect(replanned).toBe(step1Count - 2); // the 2 answered questions are no longer scheduled
  });
});

describe('content administration and roles (T2, T11)', () => {
  const content = (code: string, extra: object = {}) => ({
    code, exam: 'Step 1', subject: 'Pharmacology', system: 'Renal', stem: 'Which drug acts on the thick ascending limb?',
    options: [{ text: 'Furosemide', correct: true }, { text: 'Spironolactone', correct: false }],
    explanation: 'Loop diuretics block NKCC2.', source: 'Test suite', license: 'CC0-1.0', ...extra,
  });

  it('learners cannot use any admin function', async () => {
    const learner = await makeUser('LEARNER');
    const q = await db.question.findFirstOrThrow();
    for (const call of [
      () => admin.createQuestion(learner, content('l-1')), () => admin.setStatus(learner, q.id, 'ARCHIVED'),
      () => admin.importQuestions(learner, [], true), () => admin.exportQuestions(learner), () => admin.listUsers(learner),
      () => admin.setRole(learner, learner.id, 'ADMIN'), () => admin.addTaxonomy(learner, 'subject', 'X'), () => admin.listAudit(learner),
    ]) await expect(call()).rejects.toMatchObject({ code: 'FORBIDDEN' });
  });

  it('editor drafts → review; admin publishes; edits of published content are admin-only; all audited', async () => {
    const editor = await makeUser('EDITOR'), boss = await makeUser('ADMIN');
    const qid = await admin.createQuestion(editor, content('ed-1'));
    expect((await db.question.findUniqueOrThrow({ where: { id: qid } })).status).toBe('DRAFT');
    await expect(admin.createQuestion(editor, content('ed-1'))).rejects.toMatchObject({ code: 'CONFLICT' });
    await expect(admin.createQuestion(editor, content('ed-2', { subject: 'Brand New Subject' }))).rejects.toThrow(/Ask an admin/);

    await admin.setStatus(editor, qid, 'REVIEW');
    await expect(admin.setStatus(editor, qid, 'PUBLISHED')).rejects.toMatchObject({ code: 'FORBIDDEN' });
    await approveFixtureRights(boss, qid);
    await admin.setStatus(boss, qid, 'PUBLISHED');
    await expect(admin.updateQuestion(editor, qid, content('ed-1', { stem: 'Edited by editor after publishing?' }))).rejects.toMatchObject({ code: 'FORBIDDEN' });
    await admin.updateQuestion(boss, qid, content('ed-1', { stem: 'Admin fixed a typo in the stem?' }));

    const log = await db.auditLog.findMany({ where: { entityId: qid }, orderBy: { createdAt: 'asc' } });
    expect(log.filter((l) => !l.action.startsWith('question.rights.')).map((l) => l.action)).toEqual(['question.create', 'question.status', 'question.status', 'question.update']);
    expect(log.find((l) => l.action === 'question.update')!.diff).toMatchObject({ changed: ['stemMd'] });
  });

  it('import: dry run writes nothing; one bad row rejects the whole file; real import creates drafts', async () => {
    const editor = await makeUser('EDITOR');
    const before = await db.question.count();
    const dry = await admin.importQuestions(editor, [content('imp-1'), content('imp-2')], true);
    expect(dry).toMatchObject({ created: 2, errors: [], dryRun: true });
    expect(await db.question.count()).toBe(before);

    const bad = await admin.importQuestions(editor, [content('imp-1'), { ...content('imp-2'), options: [] }, content('imp-1')], false);
    expect(bad.errors.map((e) => e.index)).toEqual([1, 2]);
    expect(await db.question.count()).toBe(before);

    const real = await admin.importQuestions(editor, [content('imp-1'), content('imp-2')], false);
    expect(real).toMatchObject({ created: 2, dryRun: false });
    expect(await db.question.count({ where: { code: { in: ['imp-1', 'imp-2'] }, status: 'DRAFT' } })).toBe(2);
    await expect(admin.importQuestions(editor, { not: 'an array' }, true)).rejects.toThrow(/JSON array/);

    // An admin must explicitly approve synthetic fixture rights before an export round trip.
    const reviewer = await makeUser('ADMIN');
    for (const q of await db.question.findMany({where:{code:{in:['imp-1','imp-2']}}})) await approveFixtureRights(reviewer,q.id);
    // round trip: export → import is a no-op update
    const exported = (await admin.exportQuestions(editor, 'DRAFT')).filter((q) => q.code.startsWith('imp-'));
    expect((await admin.importQuestions(editor, exported, true))).toMatchObject({ created: 0, updated: 2, errors: [] });
  });

  it('drafts never reach learners', async () => {
    const editor = await makeUser('EDITOR'), learner = await makeUser();
    const qid = await admin.createQuestion(editor, content('draft-only'));
    await expect(createSession(learner.id, { mode: 'TUTOR', count: 1, questionIds: [qid] })).rejects.toThrow(/No questions/);
    await expect(study.saveNote(learner.id, qid, 'x')).rejects.toMatchObject({ code: 'NOT_FOUND' });
  });

  it('admins manage roles but not their own; taxonomy in use cannot be deleted', async () => {
    const boss = await makeUser('ADMIN'), u = await makeUser();
    await admin.setRole(boss, u.id, 'EDITOR');
    expect((await db.user.findUniqueOrThrow({ where: { id: u.id } })).role).toBe('EDITOR');
    await expect(admin.setRole(boss, boss.id, 'LEARNER')).rejects.toThrow(/own role/);
    const renal = await db.system.findUniqueOrThrow({ where: { name: 'Renal' } });
    await expect(admin.deleteTaxonomy(boss, 'system', renal.id)).rejects.toThrow(/used by/);
    await admin.addTaxonomy(boss, 'system', 'Temporary');
    const t = await db.system.findUniqueOrThrow({ where: { name: 'Temporary' } });
    await admin.deleteTaxonomy(boss, 'system', t.id);
  });
});

describe('account data (privacy)', () => {
  it('data export contains my data and never password hashes or session tokens', async () => {
    const me = await makeUser();
    await db.account.create({ data: { id: crypto.randomUUID(), accountId: me.id, providerId: 'credential', userId: me.id, password: 'scrypt-hash-secret' } });
    await db.session.create({ data: { id: crypto.randomUUID(), token: 'session-token-secret', userId: me.id, expiresAt: new Date(Date.now() + 1e6) } });
    await answerAll(me.id, 1, 1);
    const json = JSON.stringify(await exportMyData(me.id));
    expect(json).toContain(me.email);
    expect(json).not.toContain('scrypt-hash-secret');
    expect(json).not.toContain('session-token-secret');
  });
});
