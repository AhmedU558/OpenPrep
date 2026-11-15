import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is not set.');
  }

  const db = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
  try {
    const qCount = await db.question.count();
    const publishedCount = await db.question.count({
      where: { status: 'PUBLISHED', rightsStatus: 'VERIFIED', rightsAllowDelivery: true }
    });
    const examCounts = await db.exam.findMany({
      include: { _count: { select: { questions: true } } },
      orderBy: { position: 'asc' },
    });
    const revisionsCount = await db.questionRevision.count();

    console.log('--- Database Diagnostics ---');
    console.log('Total Questions:', qCount);
    console.log('Deliverable Published Questions:', publishedCount);
    console.log('Total Question Revisions:', revisionsCount);

    const unversionedCount = await db.question.count({
      where: { revisions: { none: {} } }
    });
    console.log('Questions with NO revisions (unversioned legacy):', unversionedCount);

    const revExample = await db.questionRevision.findFirst({
      include: { reviews: true }
    });
    const intlSample = await db.question.findUnique({
      where: { code: 'intl-0050' },
      include: {
        exam: true,
        subject: true,
        system: true,
        topic: true,
        options: { orderBy: { position: 'asc' } },
      }
    });
    if (intlSample) {
      console.log('\n--- Sample Ingested Question intl-0050 ---');
      console.log('Exam:', intlSample.exam.name, `(${intlSample.exam.slug})`);
      console.log('Taxonomy:', `${intlSample.subject.name} / ${intlSample.system.name} / ${intlSample.topic?.name}`);
      console.log('Status:', intlSample.status, '| Rights:', intlSample.rightsStatus, '| Delivery:', intlSample.rightsAllowDelivery);
      console.log('Stem Preview:', intlSample.stemMd.slice(0, 100) + '...');
      console.log('Options Count:', intlSample.options.length);
      intlSample.options.forEach((o) => {
        console.log(`  [${o.position}] ${o.isCorrect ? '✅' : '❌'} ${o.text} (Rationale: ${o.explanationMd?.length} chars)`);
      });
    }
    console.log('\nExam Breakdown:');
    examCounts.forEach((e) => {
      console.log(`  [${e.position}] ${e.name} (${e.slug}): ${e._count.questions} questions`);
    });
  } finally {
    await db.$disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
