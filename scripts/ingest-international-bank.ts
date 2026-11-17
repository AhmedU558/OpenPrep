import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { questions as bIntl1 } from '../content/bank/international/batch-intl-01';
import { questions as bIntl2 } from '../content/bank/international/batch-intl-02';
import { questions as bIntl3 } from '../content/bank/international/batch-intl-03';
import { questions as bIntl4 } from '../content/bank/international/batch-intl-04';
import { questions as bIntl5 } from '../content/bank/international/batch-intl-05';
import { questions as bIntl6 } from '../content/bank/international/batch-intl-06';
import { questions as bIntl7 } from '../content/bank/international/batch-intl-07';
import { questions as bIntl8 } from '../content/bank/international/batch-intl-08';
import { questions as bIntl9 } from '../content/bank/international/batch-intl-09';
import { questions as bIntl10 } from '../content/bank/international/batch-intl-10';
import { questions as bIntl11 } from '../content/bank/international/batch-intl-11';
import { questions as bIntl12 } from '../content/bank/international/batch-intl-12';
import { questions as bIntl13 } from '../content/bank/international/batch-intl-13';
import { questions as bIntl14 } from '../content/bank/international/batch-intl-14';
import { questions as bIntl15 } from '../content/bank/international/batch-intl-15';
import { questions as bIntl16 } from '../content/bank/international/batch-intl-16';
import { questions as bIntl17 } from '../content/bank/international/batch-intl-17';
import { questions as bIntl18 } from '../content/bank/international/batch-intl-18';
import { questions as bIntl19 } from '../content/bank/international/batch-intl-19';
import { questions as bIntl20 } from '../content/bank/international/batch-intl-20';
import { questions as bIntl21 } from '../content/bank/international/batch-intl-21';
import { questions as bIntl22 } from '../content/bank/international/batch-intl-22';
import { questions as bIntl23 } from '../content/bank/international/batch-intl-23';
import { questions as bIntl24 } from '../content/bank/international/batch-intl-24';
import { questions as bIntl25 } from '../content/bank/international/batch-intl-25';
import { questions as bIntl26 } from '../content/bank/international/batch-intl-26';
import { questions as bIntl27 } from '../content/bank/international/batch-intl-27';
import { questions as bIntl28 } from '../content/bank/international/batch-intl-28';
import { questions as bIntl29 } from '../content/bank/international/batch-intl-29';
import { questions as bIntl30 } from '../content/bank/international/batch-intl-30';
import { questions as bIntl31 } from '../content/bank/international/batch-intl-31';
import { questions as bIntl32 } from '../content/bank/international/batch-intl-32';
import { questions as bIntl33 } from '../content/bank/international/batch-intl-33';
import { questions as bIntl34 } from '../content/bank/international/batch-intl-34';
import { questions as bIntl35 } from '../content/bank/international/batch-intl-35';
import { questions as bIntl36 } from '../content/bank/international/batch-intl-36';
import { questions as bIntl37 } from '../content/bank/international/batch-intl-37';
import { questions as bIntl38 } from '../content/bank/international/batch-intl-38';
import { questions as bIntl39 } from '../content/bank/international/batch-intl-39';
import { questions as bIntl40 } from '../content/bank/international/batch-intl-40';
import { questions as bIntl41 } from '../content/bank/international/batch-intl-41';
import { questions as bIntl42 } from '../content/bank/international/batch-intl-42';
import { questions as bIntl43 } from '../content/bank/international/batch-intl-43';
import { questions as bIntl44 } from '../content/bank/international/batch-intl-44';
import { questions as bIntl45 } from '../content/bank/international/batch-intl-45';
import { questions as bIntl46 } from '../content/bank/international/batch-intl-46';
import { questions as bIntl47 } from '../content/bank/international/batch-intl-47';
import { questions as bIntl48 } from '../content/bank/international/batch-intl-48';
import { questions as bIntl49 } from '../content/bank/international/batch-intl-49';
import { questions as bIntl50 } from '../content/bank/international/batch-intl-50';
import { questions as bIntl51 } from '../content/bank/international/batch-intl-51';
import { questions as bIntl52 } from '../content/bank/international/batch-intl-52';
import { questions as bIntl53 } from '../content/bank/international/batch-intl-53';
import { questions as bIntl54 } from '../content/bank/international/batch-intl-54';
import { questions as bIntl55 } from '../content/bank/international/batch-intl-55';
import { questions as bIntl56 } from '../content/bank/international/batch-intl-56';
import { questions as bIntl57 } from '../content/bank/international/batch-intl-57';
import { questions as bIntl58 } from '../content/bank/international/batch-intl-58';
import { questions as bIntl59 } from '../content/bank/international/batch-intl-59';
import { questions as bIntl60 } from '../content/bank/international/batch-intl-60';
import { questions as bIntl61 } from '../content/bank/international/batch-intl-61';
import { questions as bIntl62 } from '../content/bank/international/batch-intl-62';
import { questions as bIntl63 } from '../content/bank/international/batch-intl-63';
import { questions as bIntl64 } from '../content/bank/international/batch-intl-64';
import { questions as bIntl65 } from '../content/bank/international/batch-intl-65';
import { questions as bIntl66 } from '../content/bank/international/batch-intl-66';
import { questions as bIntl67 } from '../content/bank/international/batch-intl-67';
import { questions as bIntl68 } from '../content/bank/international/batch-intl-68';
import { questions as bIntl69 } from '../content/bank/international/batch-intl-69';
import { questions as bIntl70 } from '../content/bank/international/batch-intl-70';
import { questions as bIntl71 } from '../content/bank/international/batch-intl-71';
import { questions as bIntl72 } from '../content/bank/international/batch-intl-72';
import { questions as bIntl73 } from '../content/bank/international/batch-intl-73';
import { questions as bIntl74 } from '../content/bank/international/batch-intl-74';
import { questions as bIntl75 } from '../content/bank/international/batch-intl-75';
import { questions as bIntl76 } from '../content/bank/international/batch-intl-76';
import { questions as bIntl77 } from '../content/bank/international/batch-intl-77';
import { questions as bIntl78 } from '../content/bank/international/batch-intl-78';
import { questions as bIntl79 } from '../content/bank/international/batch-intl-79';
import { questions as bIntl80 } from '../content/bank/international/batch-intl-80';
import { questions as bIntl81 } from '../content/bank/international/batch-intl-81';
import { questions as bIntl82 } from '../content/bank/international/batch-intl-82';
import { questions as bIntl83 } from '../content/bank/international/batch-intl-83';
import { questions as bIntl84 } from '../content/bank/international/batch-intl-84';
import { questions as bIntl85 } from '../content/bank/international/batch-intl-85';
import { questions as bIntl86 } from '../content/bank/international/batch-intl-86';
import { questions as bIntl87 } from '../content/bank/international/batch-intl-87';
import { questions as bIntl88 } from '../content/bank/international/batch-intl-88';
import { questions as bIntl89 } from '../content/bank/international/batch-intl-89';
import { questions as bIntl90 } from '../content/bank/international/batch-intl-90';
import { questions as bIntl91 } from '../content/bank/international/batch-intl-91';
import { questions as bIntl92 } from '../content/bank/international/batch-intl-92';
import { questions as bIntl93 } from '../content/bank/international/batch-intl-93';
import { questions as bIntl94 } from '../content/bank/international/batch-intl-94';
import { questions as bIntl95 } from '../content/bank/international/batch-intl-95';
import { questions as bIntl96 } from '../content/bank/international/batch-intl-96';
import { questions as bIntl97 } from '../content/bank/international/batch-intl-97';
import { questions as bIntl98 } from '../content/bank/international/batch-intl-98';
import { questions as bIntl99 } from '../content/bank/international/batch-intl-99';
import { questions as bIntl100 } from '../content/bank/international/batch-intl-100';
import { questions as bIntl101 } from '../content/bank/international/batch-intl-101';
import { questions as bIntl102 } from '../content/bank/international/batch-intl-102';
import { questions as bIntl103 } from '../content/bank/international/batch-intl-103';
import { questions as bIntl104 } from '../content/bank/international/batch-intl-104';
import { questions as bIntl105 } from '../content/bank/international/batch-intl-105';
import { questions as bIntl106 } from '../content/bank/international/batch-intl-106';
import { questions as bIntl107 } from '../content/bank/international/batch-intl-107';
import { questions as bIntl108 } from '../content/bank/international/batch-intl-108';
import { questions as bIntl109 } from '../content/bank/international/batch-intl-109';
import { questions as bIntl110 } from '../content/bank/international/batch-intl-110';
import { questions as bIntl111 } from '../content/bank/international/batch-intl-111';
import { questions as bIntl112 } from '../content/bank/international/batch-intl-112';
import { questions as bIntl113 } from '../content/bank/international/batch-intl-113';
import { questions as bIntl114 } from '../content/bank/international/batch-intl-114';
import { questions as bIntl115 } from '../content/bank/international/batch-intl-115';
import { questions as bIntl116 } from '../content/bank/international/batch-intl-116';
import { questions as bIntl117 } from '../content/bank/international/batch-intl-117';
import { questions as bIntl118 } from '../content/bank/international/batch-intl-118';
import { questions as bIntl119 } from '../content/bank/international/batch-intl-119';
import { questions as bIntl120 } from '../content/bank/international/batch-intl-120';
import { questions as bIntl121 } from '../content/bank/international/batch-intl-121';
import { questions as bIntl122 } from '../content/bank/international/batch-intl-122';
import { questions as bIntl123 } from '../content/bank/international/batch-intl-123';
import { questions as bIntl124 } from '../content/bank/international/batch-intl-124';
import { questions as bIntl125 } from '../content/bank/international/batch-intl-125';
import { questions as bIntl126 } from '../content/bank/international/batch-intl-126';
import { questions as bIntl127 } from '../content/bank/international/batch-intl-127';
import { questions as bIntl128 } from '../content/bank/international/batch-intl-128';
import { questions as bIntl129 } from '../content/bank/international/batch-intl-129';
import { questions as bIntl130 } from '../content/bank/international/batch-intl-130';
import { questions as bIntl131 } from '../content/bank/international/batch-intl-131';
import { questions as bIntl132 } from '../content/bank/international/batch-intl-132';
import { questions as bIntl133 } from '../content/bank/international/batch-intl-133';
import { questions as bIntl134 } from '../content/bank/international/batch-intl-134';
import { questions as bIntl135 } from '../content/bank/international/batch-intl-135';
import { questions as bIntl136 } from '../content/bank/international/batch-intl-136';
import { questions as bIntl137 } from '../content/bank/international/batch-intl-137';
import { questions as bIntl138 } from '../content/bank/international/batch-intl-138';
import { questions as bIntl139 } from '../content/bank/international/batch-intl-139';
import { questions as bIntl140 } from '../content/bank/international/batch-intl-140';
import { questions as bIntl141 } from '../content/bank/international/batch-intl-141';
import { questions as bIntl142 } from '../content/bank/international/batch-intl-142';
import { questions as bIntl143 } from '../content/bank/international/batch-intl-143';
import { questions as bIntl144 } from '../content/bank/international/batch-intl-144';
import { questions as bIntl145 } from '../content/bank/international/batch-intl-145';
import { questions as bIntl146 } from '../content/bank/international/batch-intl-146';
import { questions as bIntl147 } from '../content/bank/international/batch-intl-147';
import { questions as bIntl148 } from '../content/bank/international/batch-intl-148';
import { questions as bIntl149 } from '../content/bank/international/batch-intl-149';
import { questions as bIntl150 } from '../content/bank/international/batch-intl-150';
import { questions as bIntl151 } from '../content/bank/international/batch-intl-151';
import { questions as bIntl152 } from '../content/bank/international/batch-intl-152';
import { questions as bIntl153 } from '../content/bank/international/batch-intl-153';
import { questions as bIntl154 } from '../content/bank/international/batch-intl-154';
import { questions as bIntl155 } from '../content/bank/international/batch-intl-155';
import { questions as bIntl156 } from '../content/bank/international/batch-intl-156';
import { questions as bIntl157 } from '../content/bank/international/batch-intl-157';
import { questions as bIntl158 } from '../content/bank/international/batch-intl-158';
import { questions as bIntl159 } from '../content/bank/international/batch-intl-159';
import { questions as bIntl160 } from '../content/bank/international/batch-intl-160';
import { questions as bIntl161 } from '../content/bank/international/batch-intl-161';
import { questions as bIntl162 } from '../content/bank/international/batch-intl-162';
import { questions as bIntl163 } from '../content/bank/international/batch-intl-163';
import { questions as bIntl164 } from '../content/bank/international/batch-intl-164';
import { questions as bIntl165 } from '../content/bank/international/batch-intl-165';
import { questions as bIntl166 } from '../content/bank/international/batch-intl-166';
import { questions as bIntl167 } from '../content/bank/international/batch-intl-167';
import { questions as bIntl168 } from '../content/bank/international/batch-intl-168';
import { questions as bIntl169 } from '../content/bank/international/batch-intl-169';
import { questions as bIntl170 } from '../content/bank/international/batch-intl-170';
import type { QuestionContent } from '../src/lib/validation/content';

const ALL_INTL_QUESTIONS: QuestionContent[] = [
  ...bIntl1, ...bIntl2, ...bIntl3,
  ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7,
  ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11,
  ...bIntl12, ...bIntl13, ...bIntl14, ...bIntl15,
  ...bIntl16, ...bIntl17, ...bIntl18, ...bIntl19,
  ...bIntl20, ...bIntl21, ...bIntl22, ...bIntl23,
  ...bIntl24, ...bIntl25, ...bIntl26, ...bIntl27,
  ...bIntl28, ...bIntl29, ...bIntl30, ...bIntl31,
  ...bIntl32, ...bIntl33, ...bIntl34, ...bIntl35,
  ...bIntl36, ...bIntl37, ...bIntl38, ...bIntl39,
  ...bIntl40, ...bIntl41, ...bIntl42, ...bIntl43,
  ...bIntl44, ...bIntl45, ...bIntl46, ...bIntl47, ...bIntl48,
  ...bIntl49, ...bIntl50, ...bIntl51, ...bIntl52, ...bIntl53,
  ...bIntl54, ...bIntl55, ...bIntl56, ...bIntl57, ...bIntl58,
  ...bIntl59, ...bIntl60, ...bIntl61, ...bIntl62, ...bIntl63,
  ...bIntl64, ...bIntl65, ...bIntl66, ...bIntl67, ...bIntl68,
  ...bIntl69, ...bIntl70, ...bIntl71, ...bIntl72, ...bIntl73,
  ...bIntl74, ...bIntl75, ...bIntl76, ...bIntl77, ...bIntl78,
  ...bIntl79, ...bIntl80, ...bIntl81, ...bIntl82, ...bIntl83,
  ...bIntl84, ...bIntl85, ...bIntl86, ...bIntl87, ...bIntl88,
  ...bIntl89, ...bIntl90, ...bIntl91, ...bIntl92, ...bIntl93,
  ...bIntl94, ...bIntl95,
  ...bIntl96, ...bIntl97, ...bIntl98, ...bIntl99, ...bIntl100,
  ...bIntl101, ...bIntl102, ...bIntl103, ...bIntl104, ...bIntl105,
  ...bIntl106, ...bIntl107, ...bIntl108, ...bIntl109, ...bIntl110,
  ...bIntl111, ...bIntl112, ...bIntl113, ...bIntl114, ...bIntl115,
  ...bIntl116, ...bIntl117, ...bIntl118, ...bIntl119, ...bIntl120,
  ...bIntl121, ...bIntl122, ...bIntl123, ...bIntl124, ...bIntl125,
  ...bIntl126, ...bIntl127, ...bIntl128, ...bIntl129, ...bIntl130,
  ...bIntl131, ...bIntl132, ...bIntl133, ...bIntl134, ...bIntl135,
  ...bIntl136, ...bIntl137, ...bIntl138, ...bIntl139, ...bIntl140,
  ...bIntl141, ...bIntl142, ...bIntl143, ...bIntl144, ...bIntl145,
  ...bIntl146, ...bIntl147, ...bIntl148, ...bIntl149, ...bIntl150,
  ...bIntl151, ...bIntl152, ...bIntl153, ...bIntl154, ...bIntl155,
  ...bIntl156, ...bIntl157, ...bIntl158, ...bIntl159, ...bIntl160,
  ...bIntl161, ...bIntl162, ...bIntl163, ...bIntl164, ...bIntl165,
  ...bIntl166, ...bIntl167, ...bIntl168, ...bIntl169, ...bIntl170,
];

interface IngestOptions {
  apply: boolean;
  batchChunkSize: number;
}

export async function ingestInternationalBank(db: PrismaClient, options: IngestOptions) {
  const { apply, batchChunkSize } = options;
  console.log(`\n======================================================`);
  console.log(`OpenPrep International Question Ingestion Engine`);
  console.log(`Mode: ${apply ? '🔴 APPLY (COMMITTING TO DATABASE)' : '🟡 DRY-RUN (SIMULATION)'}`);
  console.log(`Total Candidates to Ingest: ${ALL_INTL_QUESTIONS.length}`);
  console.log(`Transaction Chunk Size: ${batchChunkSize}`);
  console.log(`======================================================\n`);

  // Step 1: Pre-flight audit & zero-data-loss validation
  const existingQuestionsBefore = await db.question.count();
  console.log(`Current questions in database: ${existingQuestionsBefore}`);

  // Fetch all exams
  const exams = await db.exam.findMany();
  const examMap = new Map<string, string>();
  for (const e of exams) {
    examMap.set(e.name, e.id);
    examMap.set(e.slug, e.id);
  }

  // Validate candidate exam references
  const candidateExams = new Set(ALL_INTL_QUESTIONS.map((q) => q.exam));
  const missingExams: string[] = [];
  for (const examName of candidateExams) {
    if (!examMap.has(examName)) {
      missingExams.push(examName);
    }
  }
  if (missingExams.length > 0) {
    throw new Error(`Encountered unknown exams without database entries: ${missingExams.join(', ')}`);
  }
  console.log(`Taxonomy Check: All ${candidateExams.size} unique candidate exams verified in database.`);

  // Check for existing question codes to ensure idempotency & zero overwrites
  const candidateCodes = ALL_INTL_QUESTIONS.map((q) => q.code);
  const alreadyInDb = await db.question.findMany({
    where: { code: { in: candidateCodes } },
    select: { code: true },
  });
  const alreadyInDbCodes = new Set(alreadyInDb.map((q) => q.code));
  console.log(`Existing candidate codes already in DB: ${alreadyInDbCodes.size}`);

  const toIngest = ALL_INTL_QUESTIONS.filter((q) => !alreadyInDbCodes.has(q.code));
  console.log(`New questions to be ingested: ${toIngest.length}`);

  if (toIngest.length === 0) {
    console.log('No new questions to ingest. All questions already present in database.');
    return {
      total: ALL_INTL_QUESTIONS.length,
      skipped: alreadyInDbCodes.size,
      created: 0,
      existingBefore: existingQuestionsBefore,
      existingAfter: existingQuestionsBefore,
    };
  }

  // Taxonomy resolution for Subjects and Systems
  const candidateSubjects = [...new Set(toIngest.map((q) => q.subject))];
  const candidateSystems = [...new Set(toIngest.map((q) => q.system))];

  if (apply) {
    console.log(`\nEnsuring all subjects exist (${candidateSubjects.length} unique)...`);
    for (const name of candidateSubjects) {
      await db.subject.upsert({ where: { name }, update: {}, create: { name } });
    }

    console.log(`Ensuring all systems exist (${candidateSystems.length} unique)...`);
    for (const name of candidateSystems) {
      await db.system.upsert({ where: { name }, update: {}, create: { name } });
    }
  }

  const allSubjects = await db.subject.findMany();
  const subjectMap = new Map(allSubjects.map((s) => [s.name, s.id]));

  const allSystems = await db.system.findMany();
  const systemMap = new Map(allSystems.map((s) => [s.name, s.id]));

  // Taxonomy resolution for Topics
  const topicPairs = new Map<string, { subjectId: string; name: string }>();
  for (const q of toIngest) {
    if (q.topic) {
      const subId = subjectMap.get(q.subject);
      if (subId) {
        const key = `${subId}|${q.topic}`;
        if (!topicPairs.has(key)) {
          topicPairs.set(key, { subjectId: subId, name: q.topic });
        }
      }
    }
  }

  if (apply && topicPairs.size > 0) {
    console.log(`Ensuring all topics exist (${topicPairs.size} unique subject/topic pairs)...`);
    const topicList = Array.from(topicPairs.values());
    // Create topics in chunks of 100 to avoid payload size limits
    for (let i = 0; i < topicList.length; i += 100) {
      const slice = topicList.slice(i, i + 100);
      await db.topic.createMany({
        data: slice,
        skipDuplicates: true,
      });
    }
  }

  const allTopics = await db.topic.findMany();
  const topicMap = new Map(allTopics.map((t) => [`${t.subjectId}|${t.name}`, t.id]));

  // Ingestion execution
  let totalCreated = 0;
  const examCreatedTally = new Map<string, number>();

  if (!apply) {
    console.log(`\n[DRY RUN SUMMARY] Simulation complete.`);
    console.log(`Would skip (already in DB): ${alreadyInDbCodes.size}`);
    console.log(`Would create in DB: ${toIngest.length}`);
    for (const q of toIngest) {
      examCreatedTally.set(q.exam, (examCreatedTally.get(q.exam) ?? 0) + 1);
    }
    console.log('\nProjected creations by Exam track:');
    for (const [examName, count] of examCreatedTally.entries()) {
      console.log(`  - ${examName}: +${count} questions`);
    }
    return {
      total: ALL_INTL_QUESTIONS.length,
      skipped: alreadyInDbCodes.size,
      created: toIngest.length,
      existingBefore: existingQuestionsBefore,
      existingAfter: existingQuestionsBefore,
    };
  }

  // Chunked transactional insertions
  console.log(`\nBeginning transactional database ingestion in chunks of ${batchChunkSize}...`);
  const now = new Date();

  for (let i = 0; i < toIngest.length; i += batchChunkSize) {
    const chunk = toIngest.slice(i, i + batchChunkSize);
    const chunkNum = Math.floor(i / batchChunkSize) + 1;
    const totalChunks = Math.ceil(toIngest.length / batchChunkSize);

    await db.$transaction(
      async (tx) => {
        const questionData = chunk.map((q) => {
          const examId = examMap.get(q.exam)!;
          const subjectId = subjectMap.get(q.subject)!;
          const systemId = systemMap.get(q.system)!;
          const topicId = q.topic ? topicMap.get(`${subjectId}|${q.topic}`) ?? null : null;

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
            keyPoints: q.keyPoints && q.keyPoints.length ? q.keyPoints : (q.objective ? [q.objective] : []),
            references: q.references ?? [],
            imageUrl: q.image ?? null,
            imageAlt: q.imageAlt ?? null,
            source: q.source,
            license: q.license,
            attribution: q.attribution ?? 'OpenPrep contributors',
            rightsStatus: 'VERIFIED' as const,
            rightsHolder: 'OpenPrep project owner (self-attested; underlying ownership not independently verified)',
            rightsEvidence: 'Project owner authorized international expansion in chat session 2026-11-15. Original clinical vignette authored under CC-BY-SA-4.0 with AI authorship disclosure and accredited guideline citations.',
            rightsDecision: 'Owner-authorized learner delivery. Operational approval based on owner directive; not independent legal verification or qualified medical review. Preserve AI-authored and medically unreviewed disclosures. Export permission is not granted.',
            rightsReviewedBy: 'Project owner via Antigravity session, 2026-11-15',
            rightsReviewedAt: now,
            rightsAllowDelivery: true,
            rightsAllowExport: false,
            isDemo: true,
            publishedAt: now,
          };
        });

        const createdQuestions = await tx.question.createManyAndReturn({
          data: questionData,
        });

        const questionIdByCode = new Map(createdQuestions.map((cq) => [cq.code, cq.id]));

        const optionsData = chunk.flatMap((q) => {
          const qId = questionIdByCode.get(q.code);
          if (!qId) {
            throw new Error(`Failed to resolve created question ID for code ${q.code}`);
          }
          return q.options.map((opt, idx) => ({
            questionId: qId,
            position: idx,
            text: opt.text,
            isCorrect: opt.correct,
            explanationMd: opt.explanation ?? null,
          }));
        });

        await tx.option.createMany({
          data: optionsData,
        });

        for (const q of chunk) {
          examCreatedTally.set(q.exam, (examCreatedTally.get(q.exam) ?? 0) + 1);
          totalCreated++;
        }
      },
      {
        timeout: 60000,
        maxWait: 15000,
      }
    );

    console.log(`  [Chunk ${chunkNum}/${totalChunks}] Committed ${chunk.length} questions (Progress: ${totalCreated}/${toIngest.length})`);
  }

  const existingQuestionsAfter = await db.question.count();
  console.log(`\n======================================================`);
  console.log(`Ingestion Complete!`);
  console.log(`Questions in DB Before: ${existingQuestionsBefore}`);
  console.log(`Newly Created Questions: ${totalCreated}`);
  console.log(`Skipped (already in DB): ${alreadyInDbCodes.size}`);
  console.log(`Questions in DB After: ${existingQuestionsAfter}`);
  console.log(`Integrity Check: ${existingQuestionsBefore + totalCreated === existingQuestionsAfter ? '✅ PASS (Exact Count Matched)' : '❌ FAIL (Count Discrepancy)'}`);
  console.log(`======================================================`);

  console.log('\nCreated Questions by Exam:');
  for (const [examName, count] of examCreatedTally.entries()) {
    console.log(`  - ${examName}: ${count} questions added`);
  }

  return {
    total: ALL_INTL_QUESTIONS.length,
    skipped: alreadyInDbCodes.size,
    created: totalCreated,
    existingBefore: existingQuestionsBefore,
    existingAfter: existingQuestionsAfter,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const apply = args.includes('--apply');
  const chunkSizeArg = args.find((a) => a.startsWith('--chunk='));
  const batchChunkSize = chunkSizeArg ? parseInt(chunkSizeArg.split('=')[1] ?? '50', 10) : 50;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is required.');
  }

  const db = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
  try {
    await ingestInternationalBank(db, { apply, batchChunkSize });
  } finally {
    await db.$disconnect();
  }
}

if (process.argv[1]?.replace(/\\/g, '/').endsWith('scripts/ingest-international-bank.ts')) {
  main().catch((err) => {
    console.error('[Ingest Error]:', err);
    process.exit(1);
  });
}
