import { beforeEach, expect, it } from 'vitest';
import { db } from '@/lib/db';
import { persistAuthorizedBatch } from '@/lib/authorized-importer';
import { questions } from '../../content/bank/batch-01';
import { makeUser, resetDb } from './helpers';
import { authorizeOwnerTestReleases, hashContentSnapshot, isRevisionAvailableForPractice, type QuestionContentSnapshot } from '@/lib/question-revision';

beforeEach(resetDb);

it('bulk-creates complete ordered options and initial snapshots while preserving duplicate stable codes', async () => {
  const actor = await makeUser('ADMIN');
  const items = questions.slice(0, 3).map((q, i) => ({ ...q, code: `fixture-bulk-${i}`, subject: 'Bulk synthetic subject', system: 'Bulk synthetic system', topic: 'Shared synthetic topic' }));
  const report = await db.$transaction(tx => persistAuthorizedBatch(tx, actor, [...items, items[0]!]));
  expect(report).toMatchObject({ created: 3, updated: 0, skipped: 1 });
  for (const item of items) {
    const q = await db.question.findUniqueOrThrow({ where: { code: item.code }, include: { options: { orderBy: { position: 'asc' } }, revisions: true } });
    expect(q.options.map(o => ({ text: o.text, correct: o.isCorrect, explanation: o.explanationMd }))).toEqual(item.options);
    expect(q.revisions).toHaveLength(1);
    expect(hashContentSnapshot(q.revisions[0]!.contentSnapshot as unknown as QuestionContentSnapshot)).toBe(q.revisions[0]!.contentHash);
    expect(q).toMatchObject({ status: 'DRAFT', rightsStatus: 'UNVERIFIED', rightsAllowDelivery: false });
  }
  const revisions = await db.questionRevision.findMany({ where: { question: { code: { in: items.map(q => q.code) } } } });
  await db.$transaction(tx => authorizeOwnerTestReleases(tx, actor, revisions.map(r => r.id), { authorizedBy: 'Synthetic owner', authorizedAt: new Date().toISOString(), authorization: 'Synthetic bulk permission for unreviewed practice in disposable tests.' }));
  for (const revision of await db.questionRevision.findMany({ where: { id: { in: revisions.map(r => r.id) } }, include: { reviews: true } })) {
    expect(isRevisionAvailableForPractice(revision)).toBe(true);
    expect(revision.reviews).toHaveLength(0);
  }
});

it('creates withheld candidates and leaves existing content and option IDs untouched on retries', async () => {
  const actor = await makeUser('ADMIN');
  const candidate = { ...questions[0]!, code: 'fixture-candidate-create-only' };
  const initial = await db.$transaction(tx => persistAuthorizedBatch(tx, actor, [candidate]));
  expect(initial.created).toBe(1);
  const before = await db.question.findUniqueOrThrow({ where: { code: candidate.code }, include: { options: { orderBy: { position: 'asc' } } } });
  expect(before).toMatchObject({ status: 'DRAFT', rightsStatus: 'UNVERIFIED', rightsAllowDelivery: false, rightsAllowExport: false });
  expect(await db.questionRevision.count({ where: { questionId: before.id } })).toBe(1);
  const retry = await db.$transaction(tx => persistAuthorizedBatch(tx, actor, [{ ...candidate, stem: 'Changed input must not overwrite the stored question.' }]));
  expect(retry).toMatchObject({ created: 0, updated: 0, skipped: 1 });
  expect(await db.question.findUniqueOrThrow({ where: { id: before.id }, include: { options: { orderBy: { position: 'asc' } } } })).toEqual(before);
});

it('refuses non-admin imports and leaves dry runs unwritten', async () => {
  const learner = await makeUser();
  await expect(db.$transaction(tx => persistAuthorizedBatch(tx, learner, [questions[0]!]))).rejects.toMatchObject({ code: 'FORBIDDEN' });
  const admin = await makeUser('ADMIN');
  const before = await db.question.count();
  const subjects = await db.subject.count(), systems = await db.system.count(), topics = await db.topic.count();
  await db.$transaction(tx => persistAuthorizedBatch(tx, admin, [{ ...questions[0]!, subject: 'Uncreated dry-run subject', system: 'Uncreated dry-run system', topic: 'Uncreated dry-run topic' }], { dryRun: true }));
  expect(await db.question.count()).toBe(before);
  expect(await db.subject.count()).toBe(subjects);
  expect(await db.system.count()).toBe(systems);
  expect(await db.topic.count()).toBe(topics);
});
