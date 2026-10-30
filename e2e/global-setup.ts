import 'dotenv/config';
import { execSync } from 'node:child_process';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { seed } from '../prisma/seed';
import { questions } from '../content/bank/batch-01';
import { specs } from '../content/bank/expansion/batch-16';
import { validateExpansion } from '../src/lib/bank-expansion';
import { testDatabaseUrl } from '../scripts/test-database';

// Fresh test database with the demo bank for every E2E run. Only ever touches the *_test database.
export default async function setup() {
  const primary = process.env.DATABASE_URL;
  const url = testDatabaseUrl(process.env.TEST_DATABASE_URL, process.env.DATABASE_URL);
  execSync('npx prisma migrate deploy', { stdio: 'pipe', env: { ...process.env, DATABASE_URL: url } });
  const db = new PrismaClient({ adapter: new PrismaPg({ connectionString: url }) });
  try {
    const tables = await db.$queryRaw<{ tablename: string }[]>`SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename <> '_prisma_migrations'`;
    await db.$executeRawUnsafe(`TRUNCATE ${tables.map((t) => `"${t.tablename}"`).join(', ')} CASCADE`);
    await seed(db);
    // Use the real importer on the isolated test DB so browser checks exercise authored content.
    process.env.DATABASE_URL = url;
    const content = await import('../src/lib/admin');
    const appDb = (await import('../src/lib/db')).db;
    try {
      const actor = await db.user.create({ data: { id: 'e2e-bank-author', email: 'bank-author@test.localhost', name: 'Fixture author', role: 'ADMIN' } });
      const { approveFixtureRights } = await import('../tests/fixtures/rights');
      await content.importQuestions(actor, questions, false, true);
      const expansion=validateExpansion(16,specs,[]);
      if(expansion.accepted.length!==94)throw new Error('Expansion E2E fixture failed expected quality dispositions');
      await content.importQuestions(actor, expansion.accepted, false, true);
      for (const q of await db.question.findMany({ select: { id: true } })) await approveFixtureRights(actor, q.id);
      for (const q of await db.question.findMany({ where: { OR:[{code:{startsWith:'op26-'}},{code:{startsWith:'op26x-'}}] } })) await content.setStatus(actor, q.id, 'PUBLISHED');
    } finally { await appDb.$disconnect(); }
  } finally {
    if (primary === undefined) delete process.env.DATABASE_URL;
    else process.env.DATABASE_URL = primary;
    await db.$disconnect();
  }
}
