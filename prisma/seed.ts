// Seeds taxonomy and the original demo question bank. Idempotent: safe to run again.
// Optional: SEED_ADMIN_EMAIL + SEED_ADMIN_PASSWORD in .env creates (or promotes) an admin account.
import 'dotenv/config';
import { createRequire } from 'node:module';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { MULTIPLE } from './seed-data/multiple';

type LegacyQ = {
  id: string; exam: string; subject: string; system: string; stem: string; choices: string[];
  answer?: number; answers?: number[]; explanation: string; objective?: string; image?: string;
};

const require = createRequire(import.meta.url);
const LEGACY: LegacyQ[] = require('../legacy/questions.js');

const EXAMS = [
  { slug: 'step-1', name: 'Step 1', position: 1 },
  { slug: 'step-2-ck', name: 'Step 2 CK', position: 2 },
  { slug: 'step-3', name: 'Step 3', position: 3 },
];

export async function seed(db: PrismaClient) {
  for (const e of EXAMS) await db.exam.upsert({ where: { slug: e.slug }, update: { name: e.name, position: e.position }, create: e });
  const exams = new Map((await db.exam.findMany()).map((e) => [e.name, e.id]));

  const all: LegacyQ[] = [...LEGACY, ...MULTIPLE];
  for (const name of new Set(all.map((q) => q.subject))) await db.subject.upsert({ where: { name }, update: {}, create: { name } });
  for (const name of new Set(all.map((q) => q.system))) await db.system.upsert({ where: { name }, update: {}, create: { name } });
  const subjects = new Map((await db.subject.findMany()).map((s) => [s.name, s.id]));
  const systems = new Map((await db.system.findMany()).map((s) => [s.name, s.id]));

  for (const q of all) {
    // Never rewrite an existing question, its license, rights decision or historical option IDs.
    if (await db.question.findUnique({ where: { code: q.id }, select: { id: true } })) continue;
    const correct = new Set(q.answers ?? [q.answer!]);
    const data = {
      type: correct.size > 1 ? ('MULTIPLE' as const) : ('SINGLE' as const),
      status: 'PUBLISHED' as const,
      difficulty: 3,
      examId: exams.get(q.exam)!,
      subjectId: subjects.get(q.subject)!,
      systemId: systems.get(q.system)!,
      stemMd: q.stem,
      explanationMd: q.explanation,
      objective: q.objective ?? null,
      keyPoints: q.objective ? [q.objective] : [],
      references: [],
      imageUrl: q.image ?? null,
      source: 'OpenPrep original demo content',
      license: 'CC-BY-SA-4.0',
      attribution: 'OpenPrep contributors',
      isDemo: true,
      publishedAt: new Date(),
    };
    await db.$transaction(async (tx) => {
      const row = await tx.question.create({ data: { code: q.id, ...data } });
      await tx.option.createMany({
        data: q.choices.map((text, position) => ({ questionId: row.id, position, text, isCorrect: correct.has(position) })),
      });
    });
  }
  return all.length;
}

async function main() {
  const db = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL! }) });
  try {
    const n = await seed(db);
    console.log(`Seeded ${n} demo questions.`);
    const { SEED_ADMIN_EMAIL: email, SEED_ADMIN_PASSWORD: password } = process.env;
    if (email && password) {
      const { auth } = await import('../src/lib/auth');
      const exists = await db.user.findUnique({ where: { email } });
      if (!exists) await auth.api.signUpEmail({ body: { email, password, name: 'Admin' } });
      await db.user.update({ where: { email }, data: { role: 'ADMIN' } });
      console.log('Admin account ready (email from SEED_ADMIN_EMAIL).');
    }
  } finally {
    await db.$disconnect();
  }
}

// run only when executed directly (tests import seed())
if (process.argv[1]?.replace(/\\/g, '/').endsWith('prisma/seed.ts')) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
