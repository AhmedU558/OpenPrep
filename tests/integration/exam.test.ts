import { beforeAll, describe, expect, it } from 'vitest';
import { db } from '@/lib/db';
import {
  answer, createSession, getResults, getView, navigate, openSession, pauseSession, setFlag, setHighlights, submitItem, submitSession,
} from '@/lib/exam/service';
import { questionWhere } from '@/lib/questions';
import { filtersSchema } from '@/lib/validation/exam';
import { makeUser, resetDb, step1 } from './helpers';

beforeAll(resetDb);

const correctOf = async (questionId: string) =>
  (await db.option.findMany({ where: { questionId, isCorrect: true }, orderBy: { position: 'asc' } })).map((o) => o.id);
const wrongOf = async (questionId: string) =>
  (await db.option.findFirstOrThrow({ where: { questionId, isCorrect: false } })).id;
const itemQ = async (sessionId: string, position: number) =>
  (await db.sessionItem.findUniqueOrThrow({ where: { sessionId_position: { sessionId, position } } })).questionId;

describe('practice session lifecycle (T4–T8)', () => {
  it('tutor mode: answer, change answer, submit item reveals explanation, locked afterwards', async () => {
    const u = await makeUser();
    const id = await createSession(u.id, { mode: 'TUTOR', count: 3, examIds: [await step1()] });
    await openSession(u.id, id);
    const q0 = await itemQ(id, 0);

    const before = await getView(u.id, id);
    expect(before.session.state).toBe('IN_PROGRESS');
    expect(before.question.reveal).toBeNull();
    expect(before.question.options.every((o) => !('isCorrect' in o))).toBe(true); // no answer leakage

    await answer(u.id, id, 0, [await wrongOf(q0)]);
    await answer(u.id, id, 0, await correctOf(q0)); // changing an answer is allowed before submit
    await submitItem(u.id, id, 0);
    const after = await getView(u.id, id);
    expect(after.question.reveal?.isCorrect).toBe(true);
    expect(after.question.reveal?.explanationHtml).toContain('<p>');
    await expect(answer(u.id, id, 0, [await wrongOf(q0)])).rejects.toThrow(/locked/);
  });

  it('timed mode: navigation, flag → bookmark, pause/resume, submit scores once', async () => {
    const u = await makeUser();
    const id = await createSession(u.id, { mode: 'TIMED', count: 4, examIds: [await step1()] });
    await openSession(u.id, id);
    await expect(submitItem(u.id, id, 0)).rejects.toThrow(/timed block/);

    await answer(u.id, id, 0, await correctOf(await itemQ(id, 0)));
    await navigate(u.id, id, 2);
    await answer(u.id, id, 2, [await wrongOf(await itemQ(id, 2))]);
    await setFlag(u.id, id, 2, true);
    expect((await getView(u.id, id)).session.position).toBe(2);
    expect(await db.bookmark.count({ where: { userId: u.id } })).toBe(1);

    await pauseSession(u.id, id);
    await expect(answer(u.id, id, 1, [])).rejects.toThrow(/paused/);
    await openSession(u.id, id); // resume

    // two racing submits: exactly one scores, the other is a no-op
    await Promise.all([submitSession(u.id, id), submitSession(u.id, id)]);
    const r = await getResults(u.id, id);
    expect(r.score).toMatchObject({ total: 4, correct: 1, incorrect: 1, omitted: 2 });
    expect(r.session.version).toBe(1);
    expect(await db.response.count({ where: { userId: u.id, sessionId: id } })).toBe(4);
  });

  it('server enforces the deadline: answers after time is up are rejected and the test is auto-submitted', async () => {
    const u = await makeUser();
    const id = await createSession(u.id, { mode: 'TIMED', count: 2, secondsPerQuestion: 30, examIds: [await step1()] });
    await openSession(u.id, id);
    // pretend the test started 2 minutes ago (limit is 60 s)
    await db.testSession.update({ where: { id }, data: { lastResumedAt: new Date(Date.now() - 120_000) } });
    await expect(answer(u.id, id, 0, [])).rejects.toMatchObject({ code: 'EXPIRED' });
    const s = await db.testSession.findUniqueOrThrow({ where: { id } });
    expect(s.state).toBe('SUBMITTED');
    expect(s.activeMs).toBe(60_000); // capped at the limit
  });

  it('negative marking deducts for wrong answers only', async () => {
    const u = await makeUser();
    const id = await createSession(u.id, { mode: 'TIMED', count: 3, negativeMark: 0.25, examIds: [await step1()] });
    await openSession(u.id, id);
    await answer(u.id, id, 0, await correctOf(await itemQ(id, 0)));
    await answer(u.id, id, 1, [await wrongOf(await itemQ(id, 1))]);
    await submitSession(u.id, id);
    expect((await getResults(u.id, id)).score.points).toBe(0.75);
  });

  it('rejects malformed and foreign answers', async () => {
    const u = await makeUser();
    const id = await createSession(u.id, { mode: 'TUTOR', count: 2, examIds: [await step1()] });
    await openSession(u.id, id);
    const otherQ = await db.question.findFirstOrThrow({ where: { id: { not: await itemQ(id, 0) } } });
    await expect(answer(u.id, id, 0, [await wrongOf(otherQ.id)])).rejects.toThrow(/does not belong/);
    await expect(answer(u.id, id, 99, [])).rejects.toThrow();
    await expect(answer(u.id, id, 0, 'not-an-array')).rejects.toThrow();
    await expect(setHighlights(u.id, id, 0, '<p>totally different text</p>')).rejects.toThrow(/did not match/);
    await expect(createSession(u.id, { mode: 'TUTOR', count: 0 })).rejects.toThrow();
  });

  it('progress survives a "refresh": state comes back from the server', async () => {
    const u = await makeUser();
    const id = await createSession(u.id, { mode: 'TIMED', count: 3, examIds: [await step1()] });
    await openSession(u.id, id);
    const pick = [await wrongOf(await itemQ(id, 1))];
    await navigate(u.id, id, 1);
    await answer(u.id, id, 1, pick);
    await openSession(u.id, id); // reopening is a no-op for a running test
    const v = await getView(u.id, id);
    expect(v.session.position).toBe(1);
    expect(v.item.selectedOptionIds).toEqual(pick);
    expect(v.nav[1]!.answered).toBe(true);
  });
});

describe('security boundaries between users (T2, T15)', () => {
  it('another user cannot read, answer, or submit my test (IDOR)', async () => {
    const me = await makeUser();
    const them = await makeUser();
    const id = await createSession(me.id, { mode: 'TUTOR', count: 2, examIds: [await step1()] });
    await openSession(me.id, id);
    for (const attempt of [
      () => getView(them.id, id), () => openSession(them.id, id), () => answer(them.id, id, 0, []),
      () => submitSession(them.id, id), () => setFlag(them.id, id, 0, true), () => getResults(them.id, id),
    ]) await expect(attempt()).rejects.toMatchObject({ code: 'NOT_FOUND' });
    expect((await db.testSession.findUniqueOrThrow({ where: { id } })).state).toBe('IN_PROGRESS');
  });
});

describe('question pools (T3, T9)', () => {
  it('unused / incorrect / correct / marked pools follow my own history only', async () => {
    const me = await makeUser();
    const other = await makeUser();
    const id = await createSession(me.id, { mode: 'TIMED', count: 2, examIds: [await step1()] });
    await openSession(me.id, id);
    const [qa, qb] = [await itemQ(id, 0), await itemQ(id, 1)];
    await answer(me.id, id, 0, await correctOf(qa));
    await answer(me.id, id, 1, [await wrongOf(qb)]);
    await setFlag(me.id, id, 1, true);
    await submitSession(me.id, id);

    const ids = async (userId: string, pool: string) =>
      (await db.question.findMany({ where: await questionWhere(userId, filtersSchema.parse({ pool })), select: { id: true } })).map((q) => q.id);
    expect(await ids(me.id, 'correct')).toEqual([qa]);
    expect(await ids(me.id, 'incorrect')).toEqual([qb]);
    expect(await ids(me.id, 'marked')).toEqual([qb]);
    expect(await ids(me.id, 'unused')).not.toContain(qa);
    expect(await ids(other.id, 'incorrect')).toEqual([]);
    expect((await ids(other.id, 'unused')).length).toBe(await db.question.count({ where: { status: 'PUBLISHED' } }));

    // retry incorrect: explicit question list
    const retry = await createSession(me.id, { mode: 'TUTOR', count: 40, questionIds: [qb] });
    expect(await db.sessionItem.count({ where: { sessionId: retry } })).toBe(1);
  });

  it('keyword search uses Postgres full-text search', async () => {
    const hits = await db.question.findMany({ where: await questionWhere(null, filtersSchema.parse({ q: 'bradykinin' })), select: { code: true } });
    expect(hits.map((h) => h.code)).toContain('s1-0001');
  });
});
