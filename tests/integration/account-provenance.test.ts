import { beforeEach, expect, it } from 'vitest';
import { db } from '@/lib/db';
import { deleteAccount } from '@/lib/account';
import { answer, createSession, openSession, submitItem } from '@/lib/exam/service';
import { makeUser, resetDb } from './helpers';

beforeEach(resetDb);
it('explicit account deletion removes that learner provenance while preserving other users and the bank', async () => {
  const me = await makeUser(), other = await makeUser();
  const q = await db.question.findFirstOrThrow({ where: { status: 'PUBLISHED' }, include: { options: { orderBy: { position: 'asc' } } } });
  for (const user of [me, other]) {
    const session = await createSession(user.id, { mode: 'TUTOR', count: 1, questionIds: [q.id] });
    await openSession(user.id, session);
    await answer(user.id, session, 0, [q.options[0]!.id]);
    await submitItem(user.id, session, 0);
  }
  const questions = await db.question.count();
  await deleteAccount(me.id);
  expect(await db.user.count({ where: { id: me.id } })).toBe(0);
  expect(await db.practiceAttempt.count({ where: { userId: me.id } })).toBe(0);
  expect(await db.practiceEvent.count({ where: { userId: me.id } })).toBe(0);
  expect(await db.practiceAttempt.count({ where: { userId: other.id } })).toBe(1);
  expect(await db.question.count()).toBe(questions);
});
