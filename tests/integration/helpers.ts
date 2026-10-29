import { randomUUID } from 'node:crypto';
import { db } from '@/lib/db';
import { seed } from '../../prisma/seed';

/** Empty every table, then load the demo bank. Only ever runs against TEST_DATABASE_URL (see setup.ts). */
export async function resetDb() {
  if (!process.env.DATABASE_URL?.includes('_test')) throw new Error('Refusing to reset a non-test database.');
  const tables = await db.$queryRaw<{ tablename: string }[]>`
    SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename <> '_prisma_migrations'`;
  await db.$executeRawUnsafe(`TRUNCATE ${tables.map((t) => `"${t.tablename}"`).join(', ')} CASCADE`);
  await seed(db);
}

export async function makeUser(role: 'LEARNER' | 'EDITOR' | 'ADMIN' = 'LEARNER') {
  const id = randomUUID();
  return db.user.create({ data: { id, name: `Test ${role}`, email: `${id}@test.localhost`, role } });
}

export const step1 = async () => (await db.exam.findUniqueOrThrow({ where: { slug: 'step-1' } })).id;
