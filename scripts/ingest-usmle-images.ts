import fs from 'node:fs';
import dotenv from 'dotenv';

if (fs.existsSync('.env.production.local')) {
  dotenv.config({ path: '.env.production.local', override: true });
} else {
  dotenv.config();
}

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import type { QuestionContent } from '../src/lib/validation/content';
import wave from '../content/usmle-images/uworld-wave-01.json' with { type: 'json' };

const QUESTIONS = wave as QuestionContent[];

async function ingestUsmleImages(db: PrismaClient, apply: boolean) {
  console.log('======================================================');
  console.log('OpenPrep UWorld-Aligned USMLE Image Question Ingestion');
  console.log(`Mode: ${apply ? '🔴 APPLY (COMMITTING TO DATABASE)' : '🟢 DRY-RUN (NO WRITES)'}`);
  console.log(`Total Candidate Image Questions: ${QUESTIONS.length}`);
  console.log('======================================================\n');

  const existingCountBefore = await db.question.count();
  const exams = await db.exam.findMany();
  const examMap = new Map(exams.map((e) => [e.name, e.id]));

  for (const name of ['Step 1', 'Step 2 CK', 'Step 3']) {
    if (!examMap.has(name)) {
      throw new Error(`Required exam "${name}" not found in database.`);
    }
  }

  const existingCodes = new Set(
    (
      await db.question.findMany({
        where: { code: { in: QUESTIONS.map((q) => q.code) } },
        select: { code: true },
      })
    ).map((r) => r.code),
  );

  const toIngest = QUESTIONS.filter((q) => !existingCodes.has(q.code));
  console.log(`Questions in DB Before: ${existingCountBefore}`);
  console.log(`Already in DB (skipped): ${existingCodes.size}`);
  console.log(`New image questions to ingest: ${toIngest.length}\n`);

  if (!apply || toIngest.length === 0) {
    console.log(apply ? 'Nothing new to ingest.' : 'Dry-run complete. Pass --apply to commit.');
    return;
  }

  const uniqueSubjects = Array.from(new Set(toIngest.map((q) => q.subject)));
  for (const name of uniqueSubjects) {
    await db.subject.upsert({ where: { name }, update: {}, create: { name } });
  }
  const subjectMap = new Map((await db.subject.findMany()).map((s) => [s.name, s.id]));

  const uniqueSystems = Array.from(new Set(toIngest.map((q) => q.system)));
  for (const name of uniqueSystems) {
    await db.system.upsert({ where: { name }, update: {}, create: { name } });
  }
  const systemMap = new Map((await db.system.findMany()).map((s) => [s.name, s.id]));

  const uniqueTopics = new Map<string, { subjectId: string; name: string }>();
  for (const q of toIngest) {
    if (q.topic) {
      const subjectId = subjectMap.get(q.subject)!;
      uniqueTopics.set(`${subjectId}|${q.topic}`, { subjectId, name: q.topic });
    }
  }
  for (const t of uniqueTopics.values()) {
    await db.topic.upsert({
      where: { subjectId_name: { subjectId: t.subjectId, name: t.name } },
      update: {},
      create: { subjectId: t.subjectId, name: t.name },
    });
  }
  const topicMap = new Map((await db.topic.findMany()).map((t) => [`${t.subjectId}|${t.name}`, t.id]));

  const now = new Date();
  await db.$transaction(
    async (tx) => {
      const created = await tx.question.createManyAndReturn({
        data: toIngest.map((q) => {
          const examId = examMap.get(q.exam)!;
          const subjectId = subjectMap.get(q.subject)!;
          const systemId = systemMap.get(q.system)!;
          const topicId = q.topic ? (topicMap.get(`${subjectId}|${q.topic}`) ?? null) : null;
          return {
            code: q.code,
            type: q.type === 'MULTIPLE' ? ('MULTIPLE' as const) : ('SINGLE' as const),
            status: 'PUBLISHED' as const,
            difficulty: q.difficulty,
            examId,
            subjectId,
            systemId,
            topicId,
            stemMd: q.stem,
            explanationMd: q.explanation,
            objective: q.objective ?? null,
            keyPoints: q.keyPoints && q.keyPoints.length ? q.keyPoints : q.objective ? [q.objective] : [],
            references: q.references ?? [],
            imageUrl: q.image ?? null,
            imageAlt: q.imageAlt ?? null,
            source: q.source,
            license: q.license,
            attribution: q.attribution ?? 'OpenPrep contributors',
            rightsStatus: 'VERIFIED' as const,
            rightsHolder: 'OpenPrep project owner (self-attested; Wikimedia assets retain upstream CC0/CC-BY/CC-BY-SA licenses)',
            rightsEvidence: 'Project owner authorized USMLE visual question wave in chat session 2026-11-28. Exhibits combine deterministic OpenPrep diagrams (CC-BY-SA-4.0) and attributed Wikimedia Commons clinical media.',
            rightsDecision: 'Owner-authorized learner delivery preserving AI-authored and medically unreviewed disclosures.',
            rightsReviewedBy: 'Project owner via Antigravity session, 2026-11-28',
            rightsReviewedAt: now,
            rightsAllowDelivery: true,
            rightsAllowExport: false,
            isDemo: true,
            publishedAt: now,
          };
        }),
      });

      const idByCode = new Map(created.map((c) => [c.code, c.id]));
      const optionsData = toIngest.flatMap((q) => {
        const qId = idByCode.get(q.code);
        if (!qId) throw new Error(`Missing created ID for ${q.code}`);
        return q.options.map((opt, idx) => ({
          questionId: qId,
          position: idx,
          text: opt.text,
          isCorrect: opt.correct,
          explanationMd: opt.explanation ?? null,
        }));
      });
      await tx.option.createMany({ data: optionsData });
    },
    { timeout: 60000, maxWait: 15000 },
  );

  const existingCountAfter = await db.question.count();
  console.log(`Questions in DB After: ${existingCountAfter}`);
  console.log(`Newly Created Image Questions: ${toIngest.length}`);
  console.log(`Integrity Check: ${existingCountBefore + toIngest.length === existingCountAfter ? '✅ PASS' : '❌ FAIL'}`);
}

async function main() {
  const apply = process.argv.slice(2).includes('--apply');
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_URL environment variable is required.');
  const db = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
  try {
    await ingestUsmleImages(db, apply);
  } finally {
    await db.$disconnect();
  }
}

main().catch((err) => {
  console.error('[USMLE Image Ingest Error]:', err);
  process.exit(1);
});
