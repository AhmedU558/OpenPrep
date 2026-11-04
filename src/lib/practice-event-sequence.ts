import type { Prisma, PracticeAttempt, PracticeEvent, PracticeReset, PrismaClient } from '@/generated/prisma/client';
import type { PracticeEventType, ResetScope } from '@/generated/prisma/enums';
import type { Tx } from './db';
import { AppError } from './errors';

export type UserPracticeStateResult = {
  eventSeq: bigint;
  activeResetSeq: bigint;
};

/**
 * Concurrency-safe per-user monotonic event sequence allocator (module-private).
 * Uses atomic PostgreSQL upsert (INSERT ... ON CONFLICT DO UPDATE) to serialize
 * concurrent requests on the user's row and return the next strictly increasing sequence.
 */
async function allocateUserEventSeq(
  tx: Tx,
  userId: string,
  updateActiveReset = false,
): Promise<UserPracticeStateResult> {
  const rows = await tx.$queryRaw<{ lastEventSeq: bigint | number | string; activeResetSeq: bigint | number | string }[]>`
    INSERT INTO "user_practice_state" ("userId", "lastEventSeq", "activeResetSeq", "updatedAt")
    VALUES (${userId}, 1, ${updateActiveReset ? 1 : 0}, NOW())
    ON CONFLICT ("userId") DO UPDATE
    SET "lastEventSeq" = "user_practice_state"."lastEventSeq" + 1,
        "activeResetSeq" = CASE WHEN ${updateActiveReset} THEN "user_practice_state"."lastEventSeq" + 1 ELSE "user_practice_state"."activeResetSeq" END,
        "updatedAt" = NOW()
    RETURNING "lastEventSeq", "activeResetSeq"
  `;

  const first = rows[0];
  if (!first) {
    throw new AppError('INTERNAL' as unknown as 'INVALID', 'Failed to allocate practice event sequence.');
  }

  return {
    eventSeq: BigInt(first.lastEventSeq),
    activeResetSeq: BigInt(first.activeResetSeq),
  };
}

export type RecordEventParams = {
  userId: string;
  eventType: PracticeEventType;
  sessionId?: string | null;
  payload?: Record<string, unknown>;
};

/**
 * Record an atomic practice event in the user's sequential event ledger.
 */
export async function recordPracticeEvent(
  tx: Tx,
  params: RecordEventParams,
): Promise<{ eventSeq: bigint; event: PracticeEvent }> {
  const isReset = params.eventType === 'PRACTICE_RESET';
  const { eventSeq } = await allocateUserEventSeq(tx, params.userId, isReset);

  const event = await tx.practiceEvent.create({
    data: {
      userId: params.userId,
      eventSeq,
      eventType: params.eventType,
      sessionId: params.sessionId ?? null,
      payload: (params.payload ?? {}) as Prisma.InputJsonValue,
    },
  });

  return { eventSeq, event };
}

export type RecordAttemptParams = {
  userId: string;
  idempotencyKey: string;
  sessionId?: string | null;
  sessionItemId?: string | null;
  questionId: string;
  revisionId?: string | null;
  sessionStartEventSeq: bigint | number | string;
  selectedOptionId?: string | null;
  selectedOptionIdentifier: string;
  selectedOptionTextSnapshot: string;
  isCorrect: boolean;
  secondsSpent: number;
  clientSubmittedAt: Date;
};

/**
 * Compares all material submission fields when an idempotency key is reused.
 * Rejects materially conflicting submissions with AppError('CONFLICT').
 */
function validateMaterialMatch(existing: PracticeAttempt, params: RecordAttemptParams): void {
  const isMatch =
    existing.questionId === params.questionId &&
    existing.selectedOptionIdentifier === params.selectedOptionIdentifier &&
    existing.selectedOptionTextSnapshot === params.selectedOptionTextSnapshot &&
    existing.isCorrect === params.isCorrect &&
    (params.sessionId === undefined || existing.sessionId === (params.sessionId ?? null)) &&
    (params.sessionItemId === undefined || existing.sessionItemId === (params.sessionItemId ?? null)) &&
    (params.revisionId === undefined || existing.revisionId === (params.revisionId ?? null));

  if (!isMatch) {
    throw new AppError('CONFLICT', 'Idempotency key reused with mismatched submission payload.');
  }
}

async function executeAttemptSubmission(
  tx: Tx,
  params: RecordAttemptParams,
): Promise<{ created: boolean; attempt: PracticeAttempt }> {
  const existing = await tx.practiceAttempt.findUnique({
    where: {
      userId_idempotencyKey: {
        userId: params.userId,
        idempotencyKey: params.idempotencyKey,
      },
    },
  });

  if (existing) {
    validateMaterialMatch(existing, params);
    return { created: false, attempt: existing };
  }

  const { eventSeq } = await allocateUserEventSeq(tx, params.userId, false);

  await tx.practiceEvent.create({
    data: {
      userId: params.userId,
      eventSeq,
      eventType: 'ATTEMPT_SUBMISSION',
      sessionId: params.sessionId ?? null,
      payload: {
        idempotencyKey: params.idempotencyKey,
        questionId: params.questionId,
        isCorrect: params.isCorrect,
        secondsSpent: params.secondsSpent,
      },
    },
  });

  const attempt = await tx.practiceAttempt.create({
    data: {
      idempotencyKey: params.idempotencyKey,
      userId: params.userId,
      sessionId: params.sessionId ?? null,
      sessionItemId: params.sessionItemId ?? null,
      questionId: params.questionId,
      revisionId: params.revisionId ?? null,
      sessionStartEventSeq: BigInt(params.sessionStartEventSeq),
      attemptEventSeq: eventSeq,
      selectedOptionId: params.selectedOptionId ?? null,
      selectedOptionIdentifier: params.selectedOptionIdentifier,
      selectedOptionTextSnapshot: params.selectedOptionTextSnapshot,
      isCorrect: params.isCorrect,
      secondsSpent: params.secondsSpent,
      clientSubmittedAt: params.clientSubmittedAt,
    },
  });

  return { created: true, attempt };
}

/**
 * Detects whether an error is specifically a Prisma P2002 unique constraint violation
 * on the (userId, idempotencyKey) index. Unrelated uniqueness errors return false.
 * Supports both standard Prisma engine metadata (meta.target) and Prisma 7 @prisma/adapter-pg
 * driver-adapter metadata (meta.driverAdapterError).
 */
export function isIdempotencyKeyConflict(err: unknown): boolean {
  if (typeof err !== 'object' || err === null || !('code' in err) || (err as { code: string }).code !== 'P2002') {
    return false;
  }

  const meta = (err as { meta?: unknown }).meta;
  if (typeof meta !== 'object' || meta === null) {
    return false;
  }

  // Branch 1: Standard Prisma engine metadata (meta.target)
  if ('target' in meta) {
    const target = (meta as { target?: unknown }).target;

    if (Array.isArray(target)) {
      return target.includes('userId') && target.includes('idempotencyKey');
    }

    if (typeof target === 'string') {
      return target === 'practice_attempt_userId_idempotencyKey_key';
    }

    return false;
  }

  // Branch 2: Prisma 7 @prisma/adapter-pg driver-adapter metadata (meta.driverAdapterError)
  if ('driverAdapterError' in meta) {
    const driverAdapterError = (meta as { driverAdapterError?: unknown }).driverAdapterError;
    if (typeof driverAdapterError !== 'object' || driverAdapterError === null) {
      return false;
    }

    const cause = (driverAdapterError as { cause?: unknown }).cause;
    if (typeof cause !== 'object' || cause === null) {
      return false;
    }

    const causeObj = cause as {
      originalCode?: unknown;
      constraint?: unknown;
    };

    // Where available, verify PostgreSQL unique_violation code is 23505
    if ('originalCode' in causeObj && causeObj.originalCode !== '23505' && causeObj.originalCode !== 23505) {
      return false;
    }

    const constraint = causeObj.constraint;
    if (typeof constraint !== 'object' || constraint === null) {
      return false;
    }

    const index = (constraint as { index?: unknown }).index;
    return index === 'practice_attempt_userId_idempotencyKey_key';
  }

  return false;
}

/**
 * Atomically record an immutable practice attempt with idempotency enforcement.
 * When client supports transactions ($transaction), concurrent identical submissions
 * hitting P2002 on the idempotency key rollback and recover outside the failed transaction via a fresh query.
 */
export async function recordAttemptSubmission(
  client: Tx | PrismaClient,
  params: RecordAttemptParams,
): Promise<{ created: boolean; attempt: PracticeAttempt }> {
  if ('$transaction' in client && typeof client.$transaction === 'function') {
    try {
      return await client.$transaction(async (tx) => {
        return await executeAttemptSubmission(tx, params);
      });
    } catch (err) {
      if (isIdempotencyKeyConflict(err)) {
        // Recovery outside the aborted transaction block using the fresh client
        const winner = await client.practiceAttempt.findUnique({
          where: {
            userId_idempotencyKey: {
              userId: params.userId,
              idempotencyKey: params.idempotencyKey,
            },
          },
        });
        if (winner) {
          validateMaterialMatch(winner, params);
          return { created: false, attempt: winner };
        }
      }
      throw err;
    }
  }

  // When called with an already active transaction handle tx:
  return await executeAttemptSubmission(client as Tx, params);
}

export type RecordResetParams = {
  userId: string;
  scope: ResetScope;
  affectedQuestionIds: string[];
  filterCriteria?: Record<string, unknown>;
  snapshotCounts?: Record<string, unknown>;
};

/**
 * Record a practice reset snapshot and allocate an atomic reset sequence point.
 * Resets do NOT delete historical attempts or events; they set a sequential watermark.
 */
export async function recordPracticeReset(
  tx: Tx,
  params: RecordResetParams,
  allocatedSeq?: bigint,
): Promise<{ resetEventSeq: bigint; reset: PracticeReset }> {
  let eventSeq = allocatedSeq;
  if (eventSeq === undefined) {
    const alloc = await allocateUserEventSeq(tx, params.userId, true);
    eventSeq = alloc.eventSeq;
  }

  await tx.practiceEvent.create({
    data: {
      userId: params.userId,
      eventSeq,
      eventType: 'PRACTICE_RESET',
      payload: {
        scope: params.scope,
        affectedCount: params.affectedQuestionIds.length,
      },
    },
  });

  const reset = await tx.practiceReset.create({
    data: {
      userId: params.userId,
      resetEventSeq: eventSeq,
      scope: params.scope,
      affectedQuestionIds: params.affectedQuestionIds,
      filterCriteria: (params.filterCriteria ?? {}) as Prisma.InputJsonValue,
      snapshotCounts: (params.snapshotCounts ?? {}) as Prisma.InputJsonValue,
    },
  });

  return { resetEventSeq: eventSeq, reset };
}

// ---------------------------------------------------------------- deterministic reset resolution

export type AttemptLike = {
  questionId: string;
  attemptEventSeq: bigint;
  isCorrect: boolean;
  selectedOptionIdentifier?: string | null;
  secondsSpent?: number;
  serverRecordedAt?: Date;
};

export type ResetLike = {
  resetEventSeq: bigint;
  scope: ResetScope;
  affectedQuestionIds: string[];
};

export type LegacyResponseLike = {
  questionId: string;
  isCorrect: boolean;
  omitted: boolean;
};

export type QuestionPracticeStatus = {
  questionId: string;
  pool: 'unused' | 'correct' | 'incorrect' | 'omitted';
  activeAttemptCount: number;
  lifetimeAttemptCount: number;
  latestActiveAttempt?: AttemptLike;
  latestLifetimeAttempt?: AttemptLike;
  lastResetEventSeq: bigint;
  isLegacyResponse?: boolean;
};

/**
 * Pure, deterministic question practice status resolver with per-question legacy compatibility.
 * Evaluates a user's attempts and legacy responses against question-specific reset watermarks:
 * - Active attempt (> highest applicable reset) determines status.
 * - If no active attempt and question was reset (watermark > 0), pool is 'unused'.
 * - If no active attempt and never reset (watermark === 0) and legacy response exists, retains legacy classification.
 * - Otherwise, pool is 'unused'.
 */
export function resolveQuestionPracticeStatus(
  questionId: string,
  attempts: AttemptLike[],
  resets: ResetLike[],
  legacyResponse?: LegacyResponseLike,
): QuestionPracticeStatus {
  const qAttempts = attempts
    .filter((a) => a.questionId === questionId)
    .sort((a, b) => (a.attemptEventSeq < b.attemptEventSeq ? -1 : a.attemptEventSeq > b.attemptEventSeq ? 1 : 0));

  let maxResetSeq = 0n;
  for (const r of resets) {
    const isApplicable = r.scope === 'ALL' || r.affectedQuestionIds.includes(questionId);
    if (isApplicable && r.resetEventSeq > maxResetSeq) {
      maxResetSeq = r.resetEventSeq;
    }
  }

  const activeAttempts = qAttempts.filter((a) => a.attemptEventSeq > maxResetSeq);
  const latestActive = activeAttempts.length ? activeAttempts[activeAttempts.length - 1] : undefined;
  const latestLifetime = qAttempts.length ? qAttempts[qAttempts.length - 1] : undefined;

  let pool: 'unused' | 'correct' | 'incorrect' | 'omitted' = 'unused';
  let isLegacyResponse = false;

  if (latestActive) {
    if (latestActive.selectedOptionIdentifier === 'OMITTED') {
      pool = 'omitted';
    } else {
      pool = latestActive.isCorrect ? 'correct' : 'incorrect';
    }
  } else if (maxResetSeq === 0n && legacyResponse && legacyResponse.questionId === questionId) {
    isLegacyResponse = true;
    if (legacyResponse.omitted) {
      pool = 'omitted';
    } else {
      pool = legacyResponse.isCorrect ? 'correct' : 'incorrect';
    }
  }

  return {
    questionId,
    pool,
    activeAttemptCount: activeAttempts.length,
    lifetimeAttemptCount: qAttempts.length,
    latestActiveAttempt: latestActive,
    latestLifetimeAttempt: latestLifetime,
    lastResetEventSeq: maxResetSeq,
    isLegacyResponse,
  };
}

export type UserActiveQuestionPools = {
  hasProvenance: boolean;
  activeUsed: Set<string>;
  activeCorrect: Set<string>;
  activeIncorrect: Set<string>;
  activeOmitted: Set<string>;
  statusByQuestion: Map<string, QuestionPracticeStatus>;
};

/**
 * Loads a user's practice attempts and resets, and deterministically computes their active question pools.
 * Respects question-specific reset watermarks without mutating historical attempts or events.
 * If the user has no practice attempts or resets, returns hasProvenance: false to allow legacy fallback.
 */
export async function resolveUserActiveQuestionPools(
  client: Tx | PrismaClient,
  userId: string,
): Promise<UserActiveQuestionPools> {
  // High-performance database-side CTE with question-specific watermarking and legacy compatibility
  if ('$queryRaw' in client && typeof client.$queryRaw === 'function') {
    try {
      const rows = await client.$queryRaw<{ questionId: string; pool: 'correct' | 'incorrect' | 'omitted' }[]>`
        WITH user_resets AS (
          SELECT
            COALESCE(MAX(CASE WHEN scope = 'ALL' THEN "resetEventSeq" END), 0) AS all_watermark
          FROM "practice_reset"
          WHERE "userId" = ${userId}
        ),
        partial_resets AS (
          SELECT
            "resetEventSeq",
            UNNEST("affectedQuestionIds") AS "questionId"
          FROM "practice_reset"
          WHERE "userId" = ${userId} AND scope <> 'ALL'
        ),
        question_watermarks AS (
          SELECT
            pr."questionId",
            MAX(pr."resetEventSeq") AS partial_watermark
          FROM partial_resets pr
          GROUP BY pr."questionId"
        ),
        active_attempts AS (
          SELECT DISTINCT ON (pa."questionId")
            pa."questionId",
            pa."isCorrect",
            pa."selectedOptionIdentifier"
          FROM "practice_attempt" pa
          CROSS JOIN user_resets ur
          LEFT JOIN question_watermarks qw ON qw."questionId" = pa."questionId"
          WHERE pa."userId" = ${userId}
            AND pa."attemptEventSeq" > GREATEST(ur.all_watermark, COALESCE(qw.partial_watermark, 0))
          ORDER BY pa."questionId", pa."attemptEventSeq" DESC
        ),
        legacy_active AS (
          SELECT
            r."questionId",
            r."isCorrect",
            r."omitted"
          FROM "response" r
          CROSS JOIN user_resets ur
          LEFT JOIN question_watermarks qw ON qw."questionId" = r."questionId"
          LEFT JOIN active_attempts aa ON aa."questionId" = r."questionId"
          WHERE r."userId" = ${userId}
            AND ur.all_watermark = 0
            AND qw.partial_watermark IS NULL
            AND aa."questionId" IS NULL
        )
        SELECT
          "questionId",
          CASE
            WHEN "selectedOptionIdentifier" = 'OMITTED' THEN 'omitted'
            WHEN "isCorrect" = true THEN 'correct'
            ELSE 'incorrect'
          END AS pool
        FROM active_attempts

        UNION ALL

        SELECT
          "questionId",
          CASE
            WHEN "omitted" = true THEN 'omitted'
            WHEN "isCorrect" = true THEN 'correct'
            ELSE 'incorrect'
          END AS pool
        FROM legacy_active
      `;

      const activeUsed = new Set<string>();
      const activeCorrect = new Set<string>();
      const activeIncorrect = new Set<string>();
      const activeOmitted = new Set<string>();
      const statusByQuestion = new Map<string, QuestionPracticeStatus>();

      for (const row of rows) {
        activeUsed.add(row.questionId);
        if (row.pool === 'correct') {
          activeCorrect.add(row.questionId);
        } else if (row.pool === 'omitted') {
          activeOmitted.add(row.questionId);
        } else if (row.pool === 'incorrect') {
          activeIncorrect.add(row.questionId);
        }
        statusByQuestion.set(row.questionId, {
          questionId: row.questionId,
          pool: row.pool,
          activeAttemptCount: 1,
          lifetimeAttemptCount: 1,
          lastResetEventSeq: 0n,
        });
      }

      return {
        hasProvenance: true,
        activeUsed,
        activeCorrect,
        activeIncorrect,
        activeOmitted,
        statusByQuestion,
      };
    } catch {
      // Fall through to in-memory evaluation if raw SQL execution is unavailable or mocked
    }
  }

  // Pure in-memory evaluation (for unit tests with Prisma model mocks)
  const clientAny = client;
  const [attempts, resets, responses] = await Promise.all([
    clientAny.practiceAttempt?.findMany
      ? clientAny.practiceAttempt.findMany({
          where: { userId },
          select: {
            questionId: true,
            attemptEventSeq: true,
            isCorrect: true,
            selectedOptionIdentifier: true,
          },
          orderBy: { attemptEventSeq: 'asc' },
        })
      : [],
    clientAny.practiceReset?.findMany
      ? clientAny.practiceReset.findMany({
          where: { userId },
          select: {
            resetEventSeq: true,
            scope: true,
            affectedQuestionIds: true,
          },
          orderBy: { resetEventSeq: 'asc' },
        })
      : [],
    clientAny.response?.findMany
      ? clientAny.response.findMany({
          where: { userId },
          select: {
            questionId: true,
            isCorrect: true,
            omitted: true,
          },
        })
      : [],
  ]);

  const attemptsByQuestion = new Map<string, AttemptLike[]>();
  for (const a of (attempts || [])) {
    let list = attemptsByQuestion.get(a.questionId);
    if (!list) {
      list = [];
      attemptsByQuestion.set(a.questionId, list);
    }
    list.push(a);
  }

  const responsesByQuestion = new Map<string, LegacyResponseLike>();
  for (const r of (responses || [])) {
    responsesByQuestion.set(r.questionId, r);
  }

  const allQuestionIds = new Set<string>([
    ...attemptsByQuestion.keys(),
    ...responsesByQuestion.keys(),
  ]);

  const activeUsed = new Set<string>();
  const activeCorrect = new Set<string>();
  const activeIncorrect = new Set<string>();
  const activeOmitted = new Set<string>();
  const statusByQuestion = new Map<string, QuestionPracticeStatus>();

  for (const qId of allQuestionIds) {
    const qAttempts = attemptsByQuestion.get(qId) ?? [];
    const legacy = responsesByQuestion.get(qId);
    const status = resolveQuestionPracticeStatus(qId, qAttempts, resets || [], legacy);
    statusByQuestion.set(qId, status);

    if (status.pool !== 'unused') {
      activeUsed.add(qId);
      if (status.pool === 'correct') {
        activeCorrect.add(qId);
      } else if (status.pool === 'omitted') {
        activeOmitted.add(qId);
      } else if (status.pool === 'incorrect') {
        activeIncorrect.add(qId);
      }
    }
  }

  const hasProvenance = (attempts && attempts.length > 0) || (resets && resets.length > 0);
  return {
    hasProvenance,
    activeUsed,
    activeCorrect,
    activeIncorrect,
    activeOmitted,
    statusByQuestion,
  };
}
