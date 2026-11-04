import { createHash } from 'node:crypto';
import { z } from 'zod';
import type { Prisma, QuestionReview, QuestionRevision } from '@/generated/prisma/client';
import type { ReviewDecision, ReviewKind } from '@/generated/prisma/enums';
import type { Tx } from './db';
import { AppError } from './errors';

export type QuestionOptionSnapshot = {
  position: number;
  text: string;
  isCorrect: boolean;
  explanationMd: string | null;
};

export type QuestionContentSnapshot = {
  code: string;
  type: string;
  difficulty: number;
  examId: string;
  examSlug?: string;
  subjectId: string;
  subjectName?: string;
  systemId: string;
  systemName?: string;
  topicId: string | null;
  topicName?: string | null;
  stemMd: string;
  explanationMd: string;
  objective: string | null;
  keyPoints: string[];
  references: unknown;
  imageUrl: string | null;
  imageAlt: string | null;
  source: string;
  license: string;
  attribution: string | null;
  rightsStatus: string;
  rightsHolder: string | null;
  rightsDecision: string | null;
  isDemo: boolean;
  options: QuestionOptionSnapshot[];
};

/**
 * Deterministic JSON canonicalization (recursively sorted keys).
 * Ensures identical cryptographic hashes regardless of object key insertion order.
 */
export function canonicalizeJson(value: unknown): string {
  if (value === null || typeof value !== 'object') {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return '[' + value.map(canonicalizeJson).join(',') + ']';
  }
  const keys = Object.keys(value as Record<string, unknown>).sort();
  const entries = keys.map((k) => `${JSON.stringify(k)}:${canonicalizeJson((value as Record<string, unknown>)[k])}`);
  return '{' + entries.join(',') + '}';
}

/**
 * Generate a deterministic SHA-256 hash from canonicalized snapshot content.
 */
export function hashContentSnapshot(snapshot: QuestionContentSnapshot): string {
  const canonical = canonicalizeJson(snapshot);
  return createHash('sha256').update(canonical).digest('hex');
}

type QuestionWithTaxonomy = Prisma.QuestionGetPayload<{
  include: {
    exam: { select: { slug: true } };
    subject: { select: { name: true } };
    system: { select: { name: true } };
    topic: { select: { name: true } };
    options: {
      select: {
        position: true;
        text: true;
        isCorrect: true;
        explanationMd: true;
      };
    };
  };
}>;

/**
 * Build an approved snapshot contract from question entity data.
 * Explicitly EXCLUDES rightsEvidence and Option.id to protect internal governance evidence
 * and insulate historical content from database-specific primary keys.
 */
export function buildQuestionSnapshot(q: QuestionWithTaxonomy): QuestionContentSnapshot {
  const sortedOptions: QuestionOptionSnapshot[] = [...q.options]
    .sort((a, b) => a.position - b.position)
    .map((opt) => ({
      position: opt.position,
      text: opt.text,
      isCorrect: opt.isCorrect,
      explanationMd: opt.explanationMd ?? null,
    }));

  return {
    code: q.code,
    type: q.type,
    difficulty: q.difficulty,
    examId: q.examId,
    examSlug: q.exam?.slug,
    subjectId: q.subjectId,
    subjectName: q.subject?.name,
    systemId: q.systemId,
    systemName: q.system?.name,
    topicId: q.topicId ?? null,
    topicName: q.topic?.name ?? null,
    stemMd: q.stemMd,
    explanationMd: q.explanationMd,
    objective: q.objective ?? null,
    keyPoints: q.keyPoints ?? [],
    references: q.references ?? [],
    imageUrl: q.imageUrl ?? null,
    imageAlt: q.imageAlt ?? null,
    source: q.source,
    license: q.license,
    attribution: q.attribution ?? null,
    rightsStatus: q.rightsStatus,
    rightsHolder: q.rightsHolder ?? null,
    rightsDecision: q.rightsDecision ?? null,
    isDemo: q.isDemo,
    options: sortedOptions,
  };
}

export type CreateRevisionParams = {
  questionId: string;
  authorId?: string | null;
  changeSummary?: string | null;
};

/**
 * Transactional, concurrency-safe question revision recorder.
 * Serializes revision creation per question via a PostgreSQL row-level lock (SELECT ... FOR UPDATE).
 * Re-reads the latest revision under lock. Checks for duplicate content using the deterministic SHA-256 hash.
 * If content is identical to the latest revision, returns the existing revision without creating a duplicate.
 */
export async function createQuestionRevision(
  tx: Tx,
  params: CreateRevisionParams,
): Promise<{ created: boolean; revision: QuestionRevision }> {
  // Acquire an exclusive row-level lock on the parent question to serialize concurrent revision creation
  const lockedQuestions = await tx.$queryRaw<{ id: string }[]>`
    SELECT id FROM "question" WHERE id = ${params.questionId} FOR UPDATE
  `;

  if (!lockedQuestions || lockedQuestions.length === 0) {
    throw new AppError('NOT_FOUND', 'Question not found.');
  }

  const question = await tx.question.findUnique({
    where: { id: params.questionId },
    include: {
      exam: { select: { slug: true } },
      subject: { select: { name: true } },
      system: { select: { name: true } },
      topic: { select: { name: true } },
      options: {
        select: {
          position: true,
          text: true,
          isCorrect: true,
          explanationMd: true,
        },
      },
    },
  });

  if (!question) {
    throw new AppError('NOT_FOUND', 'Question not found.');
  }

  const snapshot = buildQuestionSnapshot(question);
  const contentHash = hashContentSnapshot(snapshot);

  // Re-read latest revision under the acquired row lock
  const latestRevision = await tx.questionRevision.findFirst({
    where: { questionId: params.questionId },
    orderBy: { revisionNumber: 'desc' },
  });

  if (latestRevision && latestRevision.contentHash === contentHash) {
    return { created: false, revision: latestRevision };
  }

  const nextRevisionNumber = (latestRevision?.revisionNumber ?? 0) + 1;

  const createdRev = await tx.questionRevision.create({
    data: {
      questionId: params.questionId,
      revisionNumber: nextRevisionNumber,
      contentHash,
      schemaVersion: 1,
      contentSnapshot: snapshot as unknown as Prisma.InputJsonValue,
      changeSummary: params.changeSummary ?? (nextRevisionNumber === 1 ? 'Initial revision' : 'Content update'),
      authorId: params.authorId ?? null,
    },
  });

  return { created: true, revision: createdRev };
}

export const recordReviewSchema = z.object({
  revisionId: z.string().min(1).max(64),
  reviewKind: z.enum(['EDITORIAL', 'CLINICAL', 'RIGHTS']),
  decision: z.enum(['APPROVED', 'REJECTED', 'REVOKED']),
  reviewerCredentials: z.string().trim().max(200).optional().nullable(),
  comments: z.string().trim().max(4000).optional().nullable(),
});
export type RecordReviewInput = z.infer<typeof recordReviewSchema>;

export type RecordReviewParams = {
  revisionId: string;
  reviewerId: string;
  reviewKind: ReviewKind;
  decision: ReviewDecision;
  reviewerCredentials?: string | null;
  comments?: string | null;
};

/**
 * Record a peer or expert review decision against a specific immutable revision.
 * Serializes reviews per question via row-level locking on the parent question
 * to prevent race conditions with publication or simultaneous conflicting reviews.
 * Enforces terminal revocation: once revoked, approvals on that revision are permanently blocked.
 */
export async function recordQuestionReview(
  tx: Tx,
  params: RecordReviewParams,
): Promise<QuestionReview> {
  const revision = await tx.questionRevision.findUnique({
    where: { id: params.revisionId },
    select: { id: true, questionId: true },
  });

  if (!revision) {
    throw new AppError('NOT_FOUND', 'Question revision not found.');
  }

  // Acquire exclusive lock on the parent question to serialize review decisions and publication checks
  await tx.$queryRaw`SELECT id FROM "question" WHERE id = ${revision.questionId} FOR UPDATE`;

  // Terminal revocation: any revoked review permanently blocks approval of this revision
  if (params.decision === 'APPROVED') {
    const existingRevocations = await tx.questionReview.findFirst({
      where: {
        revisionId: params.revisionId,
        reviewKind: params.reviewKind,
        decision: 'REVOKED',
      },
    });
    if (existingRevocations) {
      throw new AppError('CONFLICT', 'Cannot approve this revision: a revocation is terminal for this revision. A new revision is required.');
    }
  }

  const review = await tx.questionReview.create({
    data: {
      revisionId: params.revisionId,
      reviewerId: params.reviewerId,
      reviewKind: params.reviewKind,
      decision: params.decision,
      reviewerCredentials: params.reviewerCredentials?.trim() || null,
      comments: params.comments?.trim() || null,
    },
  });

  // If revoked, demote the parent question so it drops out of practice pools and delivery
  if (params.decision === 'REVOKED') {
    await tx.question.update({
      where: { id: revision.questionId },
      data: {
        status: 'REVIEW',
        ...(params.reviewKind === 'RIGHTS' ? { rightsAllowDelivery: false } : {}),
      },
    });
  }

  return review;
}

const REQUIRED_REVIEW_KINDS: ReviewKind[] = ['EDITORIAL', 'CLINICAL', 'RIGHTS'];

/**
 * Pure evaluation function for the 3-pillar review gate.
 * Terminal-revocation behavior: Any REVOKED decision permanently blocks approval of this revision;
 * a new revision is strictly required.
 */
export function isRevisionFullyApproved(
  reviews: Array<{ reviewKind: ReviewKind; decision: ReviewDecision }>,
): { approved: boolean; missingKinds: ReviewKind[] } {
  const missingKinds: ReviewKind[] = [];

  for (const kind of REQUIRED_REVIEW_KINDS) {
    const kindReviews = reviews.filter((r) => r.reviewKind === kind);
    const hasApproval = kindReviews.some((r) => r.decision === 'APPROVED');
    const hasRevocation = kindReviews.some((r) => r.decision === 'REVOKED');

    if (!hasApproval || hasRevocation) {
      missingKinds.push(kind);
    }
  }

  return {
    approved: missingKinds.length === 0,
    missingKinds,
  };
}

export type DeliverableQuestionResult = {
  deliverable: boolean;
  reason?: string;
  isVersioned: boolean;
  revisionId: string | null;
  revisionNumber: number | null;
  snapshot: QuestionContentSnapshot | null;
};

/**
 * Resolves delivery eligibility and exact content snapshot for a question:
 * 1. Enforces content-rights and publication check (status = PUBLISHED, rightsStatus = VERIFIED, rightsAllowDelivery = true).
 * 2. For unversioned legacy questions (0 revisions): deliverable under legacy mode.
 * 3. For versioned questions: requires the latest revision to be fully approved across all 3 pillars with NO revocation.
 *    If the latest revision is pending, rejected, or revoked, delivery is strictly withheld.
 *    Does NOT fall back to older approved revisions.
 */
export async function getDeliverableQuestion(
  txOrDb: Tx,
  questionId: string,
): Promise<DeliverableQuestionResult> {
  const q = await txOrDb.question.findUnique({
    where: { id: questionId },
    select: {
      id: true,
      status: true,
      rightsStatus: true,
      rightsAllowDelivery: true,
    },
  });

  if (!q) {
    return { deliverable: false, reason: 'Question not found.', isVersioned: false, revisionId: null, revisionNumber: null, snapshot: null };
  }

  if (q.status !== 'PUBLISHED' || q.rightsStatus !== 'VERIFIED' || !q.rightsAllowDelivery) {
    return {
      deliverable: false,
      reason: 'Question content is withheld pending rights review. Your saved attempt is preserved.',
      isVersioned: false,
      revisionId: null,
      revisionNumber: null,
      snapshot: null,
    };
  }

  const revisions = await txOrDb.questionRevision.findMany({
    where: { questionId },
    orderBy: { revisionNumber: 'desc' },
    include: { reviews: true },
  });

  if (revisions.length === 0) {
    return {
      deliverable: true,
      isVersioned: false,
      revisionId: null,
      revisionNumber: null,
      snapshot: null,
    };
  }

  const latestRevision = revisions[0]!;
  const { approved, missingKinds } = isRevisionFullyApproved(latestRevision.reviews);

  if (!approved) {
    return {
      deliverable: false,
      reason: `Question content is withheld pending editorial review of revision #${latestRevision.revisionNumber} (missing or revoked: ${missingKinds.join(', ')}). Your saved attempt is preserved.`,
      isVersioned: true,
      revisionId: null,
      revisionNumber: latestRevision.revisionNumber,
      snapshot: null,
    };
  }

  return {
    deliverable: true,
    isVersioned: true,
    revisionId: latestRevision.id,
    revisionNumber: latestRevision.revisionNumber,
    snapshot: latestRevision.contentSnapshot as QuestionContentSnapshot,
  };
}
