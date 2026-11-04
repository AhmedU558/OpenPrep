import { beforeEach, expect, it } from 'vitest';
import { db } from '@/lib/db';
import { persistAuthorizedBatch } from '@/lib/authorized-importer';
import { questions } from '../../content/bank/batch-01';
import { makeUser, resetDb } from './helpers';

beforeEach(resetDb);

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
