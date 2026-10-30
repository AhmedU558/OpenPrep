import { randomUUID } from 'node:crypto';
import { db } from '@/lib/db';
import { seed } from '../../prisma/seed';
import { testDatabaseUrl } from '../../scripts/test-database';
import { approveFixtureRights } from '../fixtures/rights';

/** Empty every table, then load the demo bank. Only ever runs against TEST_DATABASE_URL (see setup.ts). */
export async function resetDb() {
  testDatabaseUrl(process.env.DATABASE_URL, undefined); // The original app URL was checked before tests/setup.ts replaces it.
  const tables = await db.$queryRaw<{ tablename: string }[]>`
    SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename <> '_prisma_migrations'`;
  await db.$executeRawUnsafe(`TRUNCATE ${tables.map((t) => `"${t.tablename}"`).join(', ')} CASCADE`);
  await seed(db);
  const reviewer = await makeUser('ADMIN');
  for (const q of await db.question.findMany({ select: { id: true } })) await approveFixtureRights(reviewer, q.id);
}

export async function makeUser(role: 'LEARNER' | 'EDITOR' | 'ADMIN' = 'LEARNER') {
  const id = randomUUID();
  return db.user.create({ data: { id, name: `Test ${role}`, email: `${id}@test.localhost`, role } });
}

export const step1 = async () => (await db.exam.findUniqueOrThrow({ where: { slug: 'step-1' } })).id;
