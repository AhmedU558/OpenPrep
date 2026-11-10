// Personal study tools. Every query is scoped to the acting user.
import { z } from 'zod';
import { db } from './db';
import { AppError } from './errors';
import { renderMarkdown } from './markdown';
import { schedule, type Rating } from './srs';
import { deliverableQuestion, deliverableCard } from './content-rights';
import type { Prisma } from '@/generated/prisma/client';
import { recordPracticeReset, resolveUserActiveQuestionPools } from './practice-event-sequence';
import { getDeliverableQuestion } from './question-revision';

const id = z.string().min(1).max(64);

async function publishedQuestion(questionId: string) {
  const delivery = await getDeliverableQuestion(db, questionId);
  if (!delivery.deliverable) throw new AppError('NOT_FOUND', delivery.reason ?? 'Question not found.');
  const q = await db.question.findFirst({ where: { id: questionId, ...deliverableQuestion }, select: { id: true, stemMd: true, objective: true, explanationMd: true, options: { where: { isCorrect: true }, select: { text: true } } } });
  if (!q) throw new AppError('NOT_FOUND', 'Question not found.');
  if (delivery.isVersioned && delivery.snapshot) {
    return {
      id: q.id,
      stemMd: delivery.snapshot.stemMd,
      objective: delivery.snapshot.objective,
      explanationMd: delivery.snapshot.explanationMd,
      options: delivery.snapshot.options.filter((o) => o.isCorrect).map((o) => ({ text: o.text })),
    };
  }
  return q;
}

/** Only questions the user has already answered may expose explanation text (e.g. into flashcards). */
async function hasAnswered(userId: string, questionId: string) {
  return !!(await db.response.findUnique({ where: { userId_questionId: { userId, questionId } }, select: { userId: true } }));
}

// ---------------- notes

export async function saveNote(userId: string, rawQuestionId: unknown, rawBody: unknown) {
  const questionId = id.parse(rawQuestionId);
  const body = z.string().max(20_000).parse(rawBody);
  await publishedQuestion(questionId);
  if (!body.trim()) return db.note.deleteMany({ where: { userId, questionId } });
  return db.note.upsert({ where: { userId_questionId: { userId, questionId } }, create: { userId, questionId, body }, update: { body } });
}

// ---------------- bookmarks & tags

export async function setBookmark(userId: string, rawQuestionId: unknown, on: boolean) {
  const questionId = id.parse(rawQuestionId);
  await publishedQuestion(questionId);
  if (on) await db.bookmark.upsert({ where: { userId_questionId: { userId, questionId } }, create: { userId, questionId }, update: {} });
  else await db.bookmark.deleteMany({ where: { userId, questionId } });
}

const tagSchema = z.string().trim().toLowerCase().min(1).max(32).regex(/^[\p{L}\p{N} _-]+$/u, 'Tags may use letters, numbers, spaces, - and _.');
export async function setTags(userId: string, rawQuestionId: unknown, rawTags: unknown) {
  const questionId = id.parse(rawQuestionId);
  const tags = [...new Set(z.array(tagSchema).max(20).parse(rawTags))];
  await publishedQuestion(questionId);
  await db.$transaction([
    db.questionTag.deleteMany({ where: { userId, questionId } }),
    db.questionTag.createMany({ data: tags.map((tag) => ({ userId, questionId, tag })) }),
  ]);
}

// ---------------- collections (study lists)

export async function createCollection(userId: string, rawName: unknown) {
  const name = z.string().trim().min(1).max(60).parse(rawName);
  try { return await db.collection.create({ data: { userId, name } }); }
  catch { throw new AppError('CONFLICT', 'You already have a list with that name.'); }
}

async function ownCollection(userId: string, collectionId: string) {
  const c = await db.collection.findFirst({ where: { id: collectionId, userId } });
  if (!c) throw new AppError('NOT_FOUND', 'List not found.');
  return c;
}

export async function setInCollection(userId: string, rawCollectionId: unknown, rawQuestionId: unknown, on: boolean) {
  const collectionId = id.parse(rawCollectionId), questionId = id.parse(rawQuestionId);
  await ownCollection(userId, collectionId);
  await publishedQuestion(questionId);
  if (on) await db.collectionItem.upsert({ where: { collectionId_questionId: { collectionId, questionId } }, create: { collectionId, questionId }, update: {} });
  else await db.collectionItem.deleteMany({ where: { collectionId, questionId } });
}

export async function deleteCollection(userId: string, rawId: unknown) {
  const c = await ownCollection(userId, id.parse(rawId));
  await db.collection.delete({ where: { id: c.id } });
}

// ---------------- error reports

export async function reportIssue(userId: string, rawQuestionId: unknown, rawMessage: unknown) {
  const questionId = id.parse(rawQuestionId);
  const message = z.string().trim().min(5, 'Please describe the problem.').max(2000).parse(rawMessage);
  await publishedQuestion(questionId);
  const recent = await db.contentReport.count({ where: { userId, createdAt: { gt: new Date(Date.now() - 3600e3) } } });
  if (recent >= 20) throw new AppError('CONFLICT', 'Thanks! You have sent many reports this hour; please try again later.');
  return db.contentReport.create({ data: { userId, questionId, message } });
}

// ---------------- flashcards

const cardText = z.string().trim().min(1, 'Both sides need text.').max(5000);

export async function createCard(userId: string, raw: unknown) {
  const p = z.object({ front: cardText, back: cardText, questionId: id.optional() }).parse(raw);
  if (p.questionId) await publishedQuestion(p.questionId);
  return db.card.create({ data: { userId, front: p.front, back: p.back, questionId: p.questionId ?? null } });
}

/** Card from a question the user has answered: front = takeaway prompt, back = answer + objective. */
export async function cardFromQuestion(userId: string, rawQuestionId: unknown, rawSelection?: unknown) {
  const questionId = id.parse(rawQuestionId);
  if (!(await hasAnswered(userId, questionId))) throw new AppError('FORBIDDEN', 'Answer this question first.');
  const q = await publishedQuestion(questionId);
  const selection = rawSelection ? z.string().trim().max(5000).parse(rawSelection) : '';
  const answerText = q.options.map((o) => o.text).join('; ');
  return db.card.create({
    data: {
      userId, questionId,
      front: selection ? `Recall: ${selection.slice(0, 140)}${selection.length > 140 ? '…' : ''}` : q.stemMd.split('\n\n').at(-1) ?? q.stemMd,
      back: selection || `**${answerText}**${q.objective ? `\n\n${q.objective}` : ''}`,
    },
  });
}

export async function updateCard(userId: string, rawId: unknown, raw: unknown) {
  const cardId = id.parse(rawId);
  const p = z.object({ front: cardText, back: cardText, suspended: z.boolean().optional() }).parse(raw);
  const r = await db.card.updateMany({ where: { id: cardId, userId }, data: p });
  if (!r.count) throw new AppError('NOT_FOUND', 'Card not found.');
}

export async function deleteCard(userId: string, rawId: unknown) {
  const r = await db.card.deleteMany({ where: { id: id.parse(rawId), userId } });
  if (!r.count) throw new AppError('NOT_FOUND', 'Card not found.');
}

export async function reviewCard(userId: string, rawId: unknown, rawRating: unknown, rawMs: unknown) {
  const cardId = id.parse(rawId);
  const rating = z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).parse(rawRating) as Rating;
  const durationMs = z.number().int().min(0).max(3_600_000).catch(0).parse(rawMs);
  return db.$transaction(async (tx) => {
    const c = await tx.card.findFirst({ where: { id: cardId, userId, ...deliverableCard } });
    if (!c) throw new AppError('NOT_FOUND', 'Card not found.');
    const next = schedule(c, rating);
    await tx.card.update({ where: { id: c.id }, data: next });
    await tx.cardReview.create({ data: { cardId: c.id, userId, rating, durationMs } });
    return next;
  });
}

export async function dueCards(userId: string, limit = 50) {
  const now = new Date();
  const [due, total, reviewedToday] = await Promise.all([
    db.card.findMany({ where: { userId, suspended: false, due: { lte: now }, ...deliverableCard }, orderBy: { due: 'asc' }, take: limit }),
    db.card.count({ where: { userId } }),
    db.cardReview.count({ where: { userId, reviewedAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) } } }),
  ]);
  return { due: due.map((c) => ({ ...c, frontHtml: renderMarkdown(c.front), backHtml: renderMarkdown(c.back) })), total, reviewedToday };
}


// ---------------- practice reset

export const resetPracticeSchema = z.object({
  scope: z.enum(['ALL', 'INCORRECT_ONLY', 'MARKED_ONLY', 'CUSTOM']),
  subjectIds: z.array(id).max(100).default([]),
  systemIds: z.array(id).max(100).default([]),
  examIds: z.array(id).max(20).default([]),
  topicIds: z.array(id).max(100).default([]),
});
export type ResetPracticeInput = z.infer<typeof resetPracticeSchema>;

/**
 * Executes a learner practice reset with strict transactional ordering:
 * 1. Acquires authenticated user's UserPracticeState row lock (FOR UPDATE).
 * 2. Resolves affected question IDs while holding that lock.
 * 3. Computes pre-reset snapshot counts consistently.
 * 4. Allocates exactly one event sequence number (incrementing lastEventSeq and activeResetSeq).
 * 5. Inserts PRACTICE_RESET event and PracticeReset record in the same transaction.
 * 6. Commits atomically.
 * Resets do NOT delete or rewrite historical attempts or legacy Response records.
 */
export async function resetPractice(userId: string, rawInput: unknown) {
  const input = resetPracticeSchema.parse(rawInput);
  return db.$transaction(async (tx) => {
    // 1. Acquire the authenticated user's UserPracticeState row lock
    await tx.$executeRaw`
      INSERT INTO "user_practice_state" ("userId", "lastEventSeq", "activeResetSeq", "updatedAt")
      VALUES (${userId}, 0, 0, NOW())
      ON CONFLICT ("userId") DO NOTHING
    `;
    const rows = await tx.$queryRaw<{ lastEventSeq: bigint | number | string; activeResetSeq: bigint | number | string }[]>`
      SELECT "lastEventSeq", "activeResetSeq"
      FROM "user_practice_state"
      WHERE "userId" = ${userId}
      FOR UPDATE
    `;
    const stateLock = rows[0];
    if (!stateLock) {
      throw new AppError('CONFLICT', 'Failed to acquire user practice state lock.');
    }

    // 2. Resolve affected question IDs while holding that lock
    const pools = await resolveUserActiveQuestionPools(tx, userId);
    let affectedQuestionIds: string[] = [];

    if (input.scope === 'ALL') {
      affectedQuestionIds = [];
    } else if (input.scope === 'INCORRECT_ONLY') {
      affectedQuestionIds = Array.from(new Set([...pools.activeIncorrect, ...pools.activeOmitted]));
    } else if (input.scope === 'MARKED_ONLY') {
      const bookmarks = await tx.bookmark.findMany({
        where: { userId },
        select: { questionId: true },
      });
      affectedQuestionIds = bookmarks
        .map((b) => b.questionId)
        .filter((qId) => pools.activeUsed.has(qId));
    } else if (input.scope === 'CUSTOM') {
      const where: Prisma.QuestionWhereInput = { ...deliverableQuestion };
      if (input.examIds.length) where.examId = { in: input.examIds };
      if (input.subjectIds.length) where.subjectId = { in: input.subjectIds };
      if (input.systemIds.length) where.systemId = { in: input.systemIds };
      if (input.topicIds.length) where.topicId = { in: input.topicIds };
      const matched = await tx.question.findMany({
        where,
        select: { id: true },
      });
      affectedQuestionIds = matched
        .map((q) => q.id)
        .filter((qId) => pools.activeUsed.has(qId));
    }

    // 3. Compute pre-reset snapshot counts consistently
    const affectedCount = input.scope === 'ALL' ? pools.activeUsed.size : affectedQuestionIds.length;
    const snapshotCounts = {
      totalAttempted: pools.activeUsed.size,
      correct: pools.activeCorrect.size,
      incorrect: pools.activeIncorrect.size,
      omitted: pools.activeOmitted.size,
      affectedCount,
    };

    // 4. Allocate exactly one event sequence number
    const nextSeq = BigInt(stateLock.lastEventSeq) + 1n;
    await tx.$executeRaw`
      UPDATE "user_practice_state"
      SET "lastEventSeq" = ${nextSeq},
          "activeResetSeq" = ${nextSeq},
          "updatedAt" = NOW()
      WHERE "userId" = ${userId}
    `;

    // 5. Insert PRACTICE_RESET event and PracticeReset record in the same transaction
    const res = await recordPracticeReset(
      tx,
      {
        userId,
        scope: input.scope,
        affectedQuestionIds,
        filterCriteria: input,
        snapshotCounts,
      },
      nextSeq,
    );

    // 6. Commits atomically
    return {
      resetEventSeq: res.resetEventSeq,
      reset: res.reset,
    };
  });
}
