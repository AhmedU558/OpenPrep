// Practice-session operations. Every function takes the acting userId and only touches that user's sessions.
// Each mutating call locks the session row (SELECT ... FOR UPDATE) so concurrent requests are serialized:
// a double-clicked Submit, or an answer racing the deadline, cannot corrupt or double-score a test.
import type { SessionItem, TestSession } from '@/generated/prisma/client';
import { db, type Tx } from '../db';
import { AppError } from '../errors';
import { acceptHighlights, renderMarkdown } from '../markdown';
import { questionWhere } from '../questions';
import { deliverableQuestion } from '../content-rights';
import { createSessionSchema, positionSchema, selectionSchema } from '../validation/exam';
import { activeMsAt, isExpired, remainingMs, transition } from './machine';
import { scoreItem, scoreSession, validateSelection, type ItemOutcome } from './scoring';
import { recordAttemptSubmission, recordPracticeEvent } from '../practice-event-sequence';
import { getDeliverableQuestion, type QuestionContentSnapshot } from '../question-revision';

const MAX_ITEM_STRETCH_MS = 30 * 60e3; // ignore time beyond 30 min on one question (left the tab open)

const shuffle = <T,>(a: T[]) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j]!, a[i]!]; } return a; };
const chunk = <T,>(a: T[], n: number) => Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, (i + 1) * n));

// ---------------------------------------------------------------- create

export async function createSession(userId: string, raw: unknown): Promise<string> {
  const input = createSessionSchema.parse(raw);
  let ids: string[];
  if (input.questionIds?.length) {
    ids = (await db.question.findMany({ where: { id: { in: input.questionIds }, ...deliverableQuestion }, select: { id: true } })).map((r) => r.id);
  } else {
    const where = await questionWhere(userId, input);
    ids = (await db.question.findMany({ where, select: { id: true } })).map((r) => r.id);
  }
  ids = shuffle(ids).slice(0, input.count * input.blocks);
  if (!ids.length) throw new AppError('INVALID', 'No questions match those filters.');
  const blocks = chunk(ids, input.count);

  return db.$transaction(async (tx) => {
    const exam = blocks.length > 1 ? await tx.practiceExam.create({ data: { userId, blocksTotal: blocks.length } }) : null;
    let firstId = '';
    for (const [i, qids] of blocks.entries()) {
      const s = await tx.testSession.create({
        data: {
          userId,
          name: input.name || null,
          mode: input.mode,
          timeLimitSec: input.mode === 'TIMED' ? qids.length * input.secondsPerQuestion : null,
          negativeMark: input.negativeMark,
          total: qids.length,
          practiceExamId: exam?.id ?? null,
          blockIndex: exam ? i : null,
          items: { create: qids.map((questionId, position) => ({ questionId, position })) },
        },
      });
      if (i === 0) firstId = s.id;
    }
    return firstId;
  });
}

// ---------------------------------------------------------------- internals

async function lock(tx: Tx, userId: string, id: string): Promise<TestSession> {
  const rows = await tx.$queryRaw<{ id: string }[]>`SELECT id FROM test_session WHERE id = ${id} AND "userId" = ${userId} FOR UPDATE`;
  // same message whether it doesn't exist or belongs to someone else: no probing other users' IDs
  if (!rows.length) throw new AppError('NOT_FOUND', 'Test not found.');
  return tx.testSession.findUniqueOrThrow({ where: { id } });
}

/** Adds the time since the learner arrived at the current question to that question. */
async function accrue(tx: Tx, s: TestSession, now: Date) {
  if (s.state !== 'IN_PROGRESS' || !s.positionSince) return;
  const ms = Math.min(MAX_ITEM_STRETCH_MS, Math.max(0, now.getTime() - s.positionSince.getTime()));
  await tx.sessionItem.updateMany({
    where: { sessionId: s.id, position: s.currentPosition, state: { not: 'LOCKED' } },
    data: { timeMs: { increment: ms } },
  });
  await tx.testSession.update({ where: { id: s.id }, data: { positionSince: now } });
  s.positionSince = now;
}

type ItemOption = { id: string; position: number; text: string; isCorrect: boolean };
type ItemWithKey = SessionItem & { question: { id: string; type: 'SINGLE' | 'MULTIPLE'; options: ItemOption[] } };
const correctIds = (i: ItemWithKey) => i.question.options.filter((o) => o.isCorrect).map((o) => o.id);

/**
 * Ensures the session has a persisted sessionStartEventSeq.
 * Uses the already-acquired session row lock (SELECT FOR UPDATE in mutate/lock).
 * If s.sessionStartEventSeq is already present, returns it immediately without creating an event.
 * If missing (e.g. legacy in-progress session started before deployment), backfills exactly one
 * synthetic SESSION_START event atomically and persists sessionStartEventSeq to test_session.
 */
async function ensureSessionStartSeq(tx: Tx, userId: string, s: TestSession, now: Date): Promise<bigint> {
  if (s.sessionStartEventSeq != null) {
    return s.sessionStartEventSeq;
  }

  const { eventSeq } = await recordPracticeEvent(tx, {
    userId,
    eventType: 'SESSION_START',
    sessionId: s.id,
    payload: {
      synthetic: true,
      reason: 'legacy_in_progress_backfill',
      startedAt: (s.startedAt ?? now).toISOString(),
    },
  });

  await tx.testSession.update({
    where: { id: s.id },
    data: { sessionStartEventSeq: eventSeq },
  });

  s.sessionStartEventSeq = eventSeq;
  return eventSeq;
}

async function lockItem(tx: Tx, userId: string, s: TestSession, item: ItemWithKey, now: Date): Promise<ItemOutcome> {
  // 1. Resolve delivered revision and content snapshot (pinned or deliverable)
  let deliveredRevisionId = item.deliveredRevisionId;
  let snapshot: QuestionContentSnapshot | null = null;
  let isVersioned = false;

  // Re-read deliveredRevisionId under lock in case it was bound concurrently
  if (!deliveredRevisionId) {
    const fresh = await tx.sessionItem.findUnique({
      where: { id: item.id },
      select: { deliveredRevisionId: true },
    });
    if (fresh?.deliveredRevisionId) {
      deliveredRevisionId = fresh.deliveredRevisionId;
      item.deliveredRevisionId = deliveredRevisionId;
    }
  }

  if (deliveredRevisionId) {
    const rev = await tx.questionRevision.findUnique({
      where: { id: deliveredRevisionId },
      select: { id: true, revisionNumber: true, contentSnapshot: true },
    });
    if (!rev) {
      throw new AppError('NOT_FOUND', 'Delivered question revision not found.');
    }
    snapshot = rev.contentSnapshot as unknown as QuestionContentSnapshot;
    isVersioned = true;
  } else {
    const delivery = await getDeliverableQuestion(tx, item.questionId);
    if (!delivery.deliverable) {
      throw new AppError('NOT_FOUND', delivery.reason ?? 'Question content is withheld pending review. Your saved attempt is preserved.');
    }
    if (delivery.isVersioned && delivery.revisionId) {
      deliveredRevisionId = delivery.revisionId;
      snapshot = delivery.snapshot;
      isVersioned = true;
      await tx.sessionItem.updateMany({
        where: { id: item.id, deliveredRevisionId: null },
        data: { deliveredRevisionId: delivery.revisionId },
      });
      item.deliveredRevisionId = delivery.revisionId;
    }
  }

  // Determine correct option IDs: from approved snapshot if versioned, else from live options
  let correctOptionIds: string[];
  if (isVersioned && snapshot) {
    const correctPositions = new Set(
      snapshot.options.filter((so) => so.isCorrect).map((so) => so.position)
    );
    correctOptionIds = item.question.options
      .filter((o) => correctPositions.has(o.position))
      .map((o) => o.id);
  } else {
    correctOptionIds = correctIds(item);
  }

  const out = scoreItem(correctOptionIds, item.selectedOptionIds, s.negativeMark);
  await tx.sessionItem.update({
    where: { id: item.id },
    data: {
      state: 'LOCKED',
      isCorrect: out.isCorrect,
      points: out.points,
      lockedAt: now,
      ...(deliveredRevisionId ? { deliveredRevisionId } : {}),
    },
  });

  // 2. Session start sequence resolution (atomic & race-safe)
  const sessionStartEventSeq = await ensureSessionStartSeq(tx, userId, s, now);

  // 3. Format option snapshot according to answer rules
  const sortedOptions = [...item.question.options].sort((a, b) => a.position - b.position);
  const selectedOptions = sortedOptions.filter((o) => item.selectedOptionIds.includes(o.id));

  let selectedOptionId: string | null = null;
  let selectedOptionIdentifier: string;
  let selectedOptionTextSnapshot: string;

  if (selectedOptions.length === 0) {
    selectedOptionIdentifier = 'OMITTED';
    selectedOptionTextSnapshot = '(Omitted)';
  } else if (selectedOptions.length === 1) {
    const single = selectedOptions[0]!;
    selectedOptionId = single.id;
    selectedOptionIdentifier = String.fromCharCode(65 + single.position);
    const snapOpt = snapshot?.options.find((so) => so.position === single.position);
    selectedOptionTextSnapshot = snapOpt?.text ?? single.text;
  } else {
    selectedOptionId = null;
    selectedOptionIdentifier = selectedOptions.map((o) => String.fromCharCode(65 + o.position)).join(', ');
    selectedOptionTextSnapshot = JSON.stringify(
      selectedOptions.map((o) => {
        const snapOpt = snapshot?.options.find((so) => so.position === o.position);
        return {
          identifier: String.fromCharCode(65 + o.position),
          text: snapOpt?.text ?? o.text,
        };
      })
    );
  }

  // 4. Exact delivered revision ID
  const revisionId = isVersioned ? deliveredRevisionId : null;

  // 5. Deterministic idempotency key
  const idempotencyKey = `session:${s.id}:item:${item.id}`;

  // 6. Record attempt atomically
  await recordAttemptSubmission(tx, {
    userId,
    idempotencyKey,
    sessionId: s.id,
    sessionItemId: item.id,
    questionId: item.questionId,
    revisionId,
    sessionStartEventSeq,
    selectedOptionId,
    selectedOptionIdentifier,
    selectedOptionTextSnapshot,
    isCorrect: out.isCorrect,
    secondsSpent: Math.max(0, Math.round(item.timeMs / 1000)),
    clientSubmittedAt: now,
  });
  const resp = { sessionId: s.id, isCorrect: out.isCorrect, omitted: out.omitted, timeMs: item.timeMs, answeredAt: now };
  await tx.response.upsert({
    where: { userId_questionId: { userId, questionId: item.questionId } },
    create: { userId, questionId: item.questionId, ...resp },
    update: resp,
  });
  return out;
}

async function doSubmit(tx: Tx, userId: string, s: TestSession, now: Date) {
  await accrue(tx, s, now);
  const items = await tx.sessionItem.findMany({
    where: { sessionId: s.id },
    include: { question: { select: { id: true, type: true, options: { select: { id: true, position: true, text: true, isCorrect: true }, orderBy: { position: 'asc' } } } } },
  });
  const outcomes: ItemOutcome[] = [];
  for (const it of items) {
    if (it.state === 'LOCKED') outcomes.push({ isCorrect: !!it.isCorrect, omitted: it.selectedOptionIds.length === 0, points: it.points ?? 0 });
    else outcomes.push(await lockItem(tx, userId, s, it as ItemWithKey, now));
  }
  const score = scoreSession(outcomes);
  const active = Math.min(activeMsAt(s, now), s.timeLimitSec != null ? s.timeLimitSec * 1000 : Infinity);
  const res = await tx.testSession.updateMany({
    where: { id: s.id, version: s.version, state: { in: ['IN_PROGRESS', 'PAUSED'] } },
    data: {
      state: transition(s.state, 'submit'), submittedAt: now, activeMs: Math.round(active), lastResumedAt: null,
      correctCount: score.correct, score: score.points, version: { increment: 1 },
    },
  });
  if (res.count !== 1) throw new AppError('CONFLICT', 'This test was already submitted.');
  if (s.practiceExamId) await tx.practiceExam.update({ where: { id: s.practiceExamId }, data: { breakStartedAt: now } });
  return score;
}

/** Timed test past its deadline: score it now. Returns true if it was submitted. */
async function expireIfDue(tx: Tx, userId: string, s: TestSession, now: Date) {
  if (s.state === 'IN_PROGRESS' && isExpired(s, now)) {
    await doSubmit(tx, userId, s, now);
    return true;
  }
  return false;
}

async function itemAt(tx: Tx, s: TestSession, position: number): Promise<ItemWithKey> {
  const it = await tx.sessionItem.findUnique({
    where: { sessionId_position: { sessionId: s.id, position } },
    include: { question: { select: { id: true, type: true, options: { select: { id: true, position: true, text: true, isCorrect: true }, orderBy: { position: 'asc' } } } } },
  });
  if (!it) throw new AppError('NOT_FOUND', 'Question not found in this test.');
  return it as ItemWithKey;
}

async function mutate<T>(userId: string, id: string, fn: (tx: Tx, s: TestSession, now: Date) => Promise<T>): Promise<T> {
  return db.$transaction(async (tx) => fn(tx, await lock(tx, userId, id), new Date()), { timeout: 15000 });
}

function requireRunning(s: TestSession) {
  if (s.state === 'PAUSED') throw new AppError('CONFLICT', 'This test is paused. Resume it to continue.');
  if (s.state !== 'IN_PROGRESS') throw new AppError('CONFLICT', 'This test is no longer in progress.');
}

// ---------------------------------------------------------------- lifecycle

/** Open a test: starts it, resumes it, or submits it if its time ran out. Safe to call on every page load. */
export async function openSession(userId: string, id: string) {
  return mutate(userId, id, async (tx, s, now) => {
    if (await expireIfDue(tx, userId, s, now)) return;
    if (s.state === 'CREATED' || s.state === 'PAUSED') {
      let startSeq = s.sessionStartEventSeq;
      if (s.state === 'CREATED' && startSeq == null) {
        const { eventSeq } = await recordPracticeEvent(tx, {
          userId,
          eventType: 'SESSION_START',
          sessionId: s.id,
          payload: { mode: s.mode, total: s.total },
        });
        startSeq = eventSeq;
        s.sessionStartEventSeq = eventSeq;
      } else if (s.state === 'PAUSED') {
        await recordPracticeEvent(tx, {
          userId,
          eventType: 'SESSION_RESUME',
          sessionId: s.id,
          payload: { activeMs: s.activeMs },
        });
      }
      if (s.state === 'CREATED' && s.practiceExamId && (s.blockIndex ?? 0) > 0) {
        const pe = await tx.practiceExam.findUniqueOrThrow({ where: { id: s.practiceExamId } });
        if (pe.breakStartedAt) {
          const used = Math.round((now.getTime() - pe.breakStartedAt.getTime()) / 1000);
          await tx.practiceExam.update({ where: { id: pe.id }, data: { breakUsedSec: { increment: used }, breakStartedAt: null } });
        }
      }
      await tx.testSession.update({
        where: { id: s.id },
        data: {
          state: transition(s.state, s.state === 'CREATED' ? 'start' : 'resume'),
          startedAt: s.startedAt ?? now, lastResumedAt: now, positionSince: now, ...(startSeq != null ? { sessionStartEventSeq: startSeq } : {}),
        },
      });
    }
  });
}

export async function pauseSession(userId: string, id: string) {
  return mutate(userId, id, async (tx, s, now) => {
    if (s.state === 'PAUSED') return;
    if (await expireIfDue(tx, userId, s, now)) return;
    await accrue(tx, s, now);
    const activeMs = Math.round(activeMsAt(s, now));
    await recordPracticeEvent(tx, {
      userId,
      eventType: 'SESSION_SUSPEND',
      sessionId: s.id,
      payload: { activeMs },
    });
    await tx.testSession.update({
      where: { id: s.id },
      data: { state: transition(s.state, 'pause'), activeMs, lastResumedAt: null, positionSince: null },
    });
  });
}

export async function submitSession(userId: string, id: string) {
  return mutate(userId, id, async (tx, s, now) => {
    if (s.state === 'SUBMITTED') return; // idempotent: a second click is a no-op, not a second score
    await doSubmit(tx, userId, s, now);
  });
}

export async function abandonSession(userId: string, id: string) {
  return mutate(userId, id, async (tx, s) => {
    await tx.testSession.update({ where: { id: s.id }, data: { state: transition(s.state, 'abandon') } });
  });
}

// ---------------------------------------------------------------- in-test actions

export async function navigate(userId: string, id: string, rawPosition: unknown) {
  const position = positionSchema.parse(rawPosition);
  return mutate(userId, id, async (tx, s, now) => {
    if (position >= s.total) throw new AppError('INVALID', 'No such question.');
    if (await expireIfDue(tx, userId, s, now)) return;
    await accrue(tx, s, now);
    await tx.testSession.update({ where: { id: s.id }, data: { currentPosition: position, positionSince: s.state === 'IN_PROGRESS' ? now : null } });
  });
}

export async function answer(userId: string, id: string, rawPosition: unknown, rawSelected: unknown) {
  const position = positionSchema.parse(rawPosition);
  const selected = selectionSchema.parse(rawSelected);
  // the auto-submit must commit, so the "time is up" error is raised after the transaction, not inside it
  const expired = await mutate(userId, id, async (tx, s, now) => {
    if (await expireIfDue(tx, userId, s, now)) return true;
    requireRunning(s);
    const it = await itemAt(tx, s, position);
    if (it.state === 'LOCKED') throw new AppError('CONFLICT', 'This answer is already locked.');
    const bad = validateSelection(it.question.type, selected, it.question.options.map((o) => o.id));
    if (bad) throw new AppError('INVALID', bad);
    await tx.sessionItem.update({
      where: { id: it.id },
      data: { selectedOptionIds: selected, state: selected.length ? 'ANSWERED' : 'UNSEEN', answeredAt: selected.length ? now : null },
    });
    return false;
  });
  if (expired) throw new AppError('EXPIRED', 'Time is up. Your test was submitted.');
}

/** Tutor mode: lock one answer and reveal its explanation. */
export async function submitItem(userId: string, id: string, rawPosition: unknown) {
  const position = positionSchema.parse(rawPosition);
  return mutate(userId, id, async (tx, s, now) => {
    if (s.mode !== 'TUTOR') throw new AppError('INVALID', 'Answers are revealed when a timed block ends.');
    requireRunning(s);
    const it = await itemAt(tx, s, position);
    if (it.state === 'LOCKED') return;
    if (!it.selectedOptionIds.length) throw new AppError('INVALID', 'Choose an answer first.');
    if (position === s.currentPosition) await accrue(tx, s, now);
    await lockItem(tx, userId, s, await itemAt(tx, s, position), now); // re-read: accrue just updated timeMs
  });
}

export async function setFlag(userId: string, id: string, rawPosition: unknown, flagged: boolean) {
  const position = positionSchema.parse(rawPosition);
  return mutate(userId, id, async (tx, s) => {
    if (s.state === 'ABANDONED') throw new AppError('CONFLICT', 'This test was discarded.');
    const it = await itemAt(tx, s, position);
    await tx.sessionItem.update({ where: { id: it.id }, data: { flagged } });
    // the flag doubles as a bookmark, which feeds the "marked" pool
    if (flagged) await tx.bookmark.upsert({ where: { userId_questionId: { userId, questionId: it.questionId } }, create: { userId, questionId: it.questionId }, update: {} });
    else await tx.bookmark.deleteMany({ where: { userId, questionId: it.questionId } });
  });
}

export async function setStruck(userId: string, id: string, rawPosition: unknown, rawStruck: unknown) {
  const position = positionSchema.parse(rawPosition);
  const struck = selectionSchema.parse(rawStruck);
  return mutate(userId, id, async (tx, s) => {
    const it = await itemAt(tx, s, position);
    const valid = new Set(it.question.options.map((o) => o.id));
    await tx.sessionItem.update({ where: { id: it.id }, data: { struckOptionIds: struck.filter((x) => valid.has(x)) } });
  });
}

export async function setHighlights(userId: string, id: string, rawPosition: unknown, html: unknown) {
  const position = positionSchema.parse(rawPosition);
  if (typeof html !== 'string' || html.length > 100_000) throw new AppError('INVALID', 'Invalid highlights.');
  return mutate(userId, id, async (tx, s) => {
    const it = await itemAt(tx, s, position);
    const q = await tx.question.findUniqueOrThrow({ where: { id: it.questionId }, select: { stemMd: true } });
    let stemMd = q.stemMd;
    if (it.deliveredRevisionId) {
      const rev = await tx.questionRevision.findUnique({
        where: { id: it.deliveredRevisionId },
        select: { contentSnapshot: true },
      });
      if (rev) {
        const snap = rev.contentSnapshot as unknown as QuestionContentSnapshot;
        if (snap.stemMd) stemMd = snap.stemMd;
      }
    }
    const clean = html === '' ? null : acceptHighlights(html, stemMd);
    if (html !== '' && !clean) throw new AppError('INVALID', 'Highlights did not match the question text.');
    await tx.sessionItem.update({ where: { id: it.id }, data: { highlightsHtml: clean } });
  });
}

// ---------------------------------------------------------------- read models

export type NavCell = { position: number; answered: boolean; flagged: boolean; result: 'correct' | 'incorrect' | 'omitted' | null };

export async function getView(userId: string, id: string) {
  const s = await db.testSession.findFirst({
    where: { id, userId },
    include: {
      items: { orderBy: { position: 'asc' }, select: { position: true, state: true, flagged: true, isCorrect: true, selectedOptionIds: true } },
      practiceExam: { select: { blocksTotal: true, breakBudgetSec: true, breakUsedSec: true } },
    },
  });
  if (!s) throw new AppError('NOT_FOUND', 'Test not found.');
  const pos = Math.min(s.currentPosition, s.total - 1);
  const it = await db.sessionItem.findUniqueOrThrow({
    where: { sessionId_position: { sessionId: id, position: pos } },
    include: {
      question: {
        include: {
          options: { orderBy: { position: 'asc' } },
          exam: { select: { name: true } }, subject: { select: { name: true } }, system: { select: { name: true } },
          notes: { where: { userId }, select: { body: true } },
          bookmarks: { where: { userId }, select: { questionId: true } },
        },
      },
    },
  });
  const q = it.question;
  let deliveredRevisionId = it.deliveredRevisionId;
  let snap: QuestionContentSnapshot | null = null;

  if (deliveredRevisionId) {
    if (q.rightsStatus !== 'VERIFIED' || !q.rightsAllowDelivery) {
      throw new AppError('NOT_FOUND', 'Question content is withheld pending rights review. Your saved attempt is preserved.');
    }
    const rev = await db.questionRevision.findUnique({
      where: { id: deliveredRevisionId },
      select: { id: true, revisionNumber: true, contentSnapshot: true },
    });
    if (!rev) {
      throw new AppError('NOT_FOUND', 'Delivered question revision not found.');
    }
    snap = rev.contentSnapshot as unknown as QuestionContentSnapshot;
  } else {
    // Atomic revision binding with row-level locking to prevent concurrent overwrite
    const resolved = await db.$transaction(async (tx) => {
      const rows = await tx.$queryRaw<{ id: string; deliveredRevisionId: string | null }[]>`
        SELECT id, "deliveredRevisionId"
        FROM session_item
        WHERE id = ${it.id}
        FOR UPDATE
      `;
      if (!rows || rows.length === 0) {
        throw new AppError('NOT_FOUND', 'Session item not found.');
      }
      const current = rows[0]!;

      // If already bound by a concurrent request, reread and return the winning revision
      if (current.deliveredRevisionId) {
        const rev = await tx.questionRevision.findUnique({
          where: { id: current.deliveredRevisionId },
          select: { id: true, revisionNumber: true, contentSnapshot: true },
        });
        if (!rev) {
          throw new AppError('NOT_FOUND', 'Delivered question revision not found.');
        }
        return {
          deliveredRevisionId: current.deliveredRevisionId,
          snap: rev.contentSnapshot as unknown as QuestionContentSnapshot,
        };
      }

      // Otherwise resolve deliverable question under lock
      const delivery = await getDeliverableQuestion(tx, q.id);
      if (!delivery.deliverable) {
        throw new AppError('NOT_FOUND', delivery.reason ?? 'Question content is withheld pending review. Your saved attempt is preserved.');
      }

      let newRevId: string | null = null;
      let newSnap: QuestionContentSnapshot | null = null;

      if (delivery.isVersioned && delivery.revisionId) {
        newRevId = delivery.revisionId;
        newSnap = delivery.snapshot;
        // Conditional update: only if deliveredRevisionId is still null
        await tx.sessionItem.updateMany({
          where: { id: it.id, deliveredRevisionId: null },
          data: { deliveredRevisionId: newRevId },
        });
      }

      return {
        deliveredRevisionId: newRevId,
        snap: newSnap,
      };
    });

    deliveredRevisionId = resolved.deliveredRevisionId;
    snap = resolved.snap;
    it.deliveredRevisionId = deliveredRevisionId;
  }

  // answers and explanations leave the server only once this item is locked
  const reveal = it.state === 'LOCKED';
  const now = new Date();

  // Prefer approved revision snapshot content when question is versioned
  const stem = snap ? snap.stemMd : q.stemMd;
  const explanation = snap ? snap.explanationMd : q.explanationMd;
  const objective = snap ? snap.objective : q.objective;
  const keyPoints = snap ? snap.keyPoints : q.keyPoints;
  const references = snap ? snap.references : q.references;

  return {
    session: {
      id: s.id, name: s.name, mode: s.mode, state: s.state, total: s.total, position: pos,
      remainingMs: remainingMs(s, now), activeMs: activeMsAt(s, now),
      block: s.practiceExam ? { index: (s.blockIndex ?? 0) + 1, total: s.practiceExam.blocksTotal } : null,
    },
    nav: s.items.map<NavCell>((i) => ({
      position: i.position,
      answered: i.selectedOptionIds.length > 0,
      flagged: i.flagged,
      result: i.state !== 'LOCKED' ? null : i.selectedOptionIds.length === 0 ? 'omitted' : i.isCorrect ? 'correct' : 'incorrect',
    })),
    item: {
      position: it.position, state: it.state, selectedOptionIds: it.selectedOptionIds, struckOptionIds: it.struckOptionIds,
      flagged: it.flagged, timeMs: it.timeMs, stemHtml: it.highlightsHtml ?? renderMarkdown(stem),
    },
    question: {
      id: q.id, code: q.code, type: q.type, isDemo: q.isDemo, isAiAuthored: q.source.includes('AI-authored'), imageUrl: q.imageUrl, imageAlt: q.imageAlt,
      exam: q.exam.name, subject: q.subject.name, system: q.system.name,
      bookmarked: q.bookmarks.length > 0, note: q.notes[0]?.body ?? '',
      options: q.options.map((o) => {
        const snapOpt = snap?.options.find((so) => so.position === o.position);
        const optText = snapOpt?.text ?? o.text;
        const optCorrect = snapOpt?.isCorrect ?? o.isCorrect;
        const optExp = snapOpt?.explanationMd ?? o.explanationMd;
        return {
          id: o.id,
          text: optText,
          ...(reveal ? { isCorrect: optCorrect, explanationHtml: optExp ? renderMarkdown(optExp) : null } : {}),
        };
      }),
      reveal: reveal ? {
        isCorrect: it.isCorrect, omitted: it.selectedOptionIds.length === 0,
        explanationHtml: renderMarkdown(explanation), objective, keyPoints,
        references: references as { label: string; url?: string }[], source: snap?.source ?? q.source, license: snap?.license ?? q.license,
      } : null,
    },
  };
}
export type ExamView = Awaited<ReturnType<typeof getView>>;

export async function getResults(userId: string, id: string) {
  const s = await db.testSession.findFirst({
    where: { id, userId },
    include: {
      items: {
        orderBy: { position: 'asc' },
        include: { question: { select: { id: true, code: true, subject: { select: { name: true } }, system: { select: { name: true } } } } },
      },
      practiceExam: { include: { blocks: { orderBy: { blockIndex: 'asc' }, select: { id: true, state: true, blockIndex: true, total: true, correctCount: true } } } },
    },
  });
  if (!s) throw new AppError('NOT_FOUND', 'Test not found.');
  if (s.state !== 'SUBMITTED') throw new AppError('CONFLICT', 'This test has not been submitted yet.');
  const score = scoreSession(s.items.map((i) => ({ isCorrect: !!i.isCorrect, omitted: i.selectedOptionIds.length === 0, points: i.points ?? 0 })));
  return { session: s, score };
}

export async function listSessions(userId: string, page = 1, pageSize = 20) {
  const where = { userId, state: { not: 'ABANDONED' as const } };
  const [total, rows] = await Promise.all([
    db.testSession.count({ where }),
    db.testSession.findMany({
      where, orderBy: { createdAt: 'desc' }, skip: (page - 1) * pageSize, take: pageSize,
      select: { id: true, name: true, mode: true, state: true, total: true, correctCount: true, createdAt: true, submittedAt: true, blockIndex: true, practiceExam: { select: { blocksTotal: true } } },
    }),
  ]);
  return { total, page, pageSize, rows };
}

/** Next unstarted block of a practice exam, plus remaining break budget. */
export async function nextBlock(userId: string, sessionId: string) {
  const s = await db.testSession.findFirst({ where: { id: sessionId, userId }, select: { practiceExamId: true } });
  if (!s?.practiceExamId) return null;
  const pe = await db.practiceExam.findUniqueOrThrow({
    where: { id: s.practiceExamId },
    include: { blocks: { where: { state: 'CREATED' }, orderBy: { blockIndex: 'asc' }, take: 1, select: { id: true, blockIndex: true } } },
  });
  const running = pe.breakStartedAt ? Math.round((Date.now() - pe.breakStartedAt.getTime()) / 1000) : 0;
  return { next: pe.blocks[0] ?? null, blocksTotal: pe.blocksTotal, breakLeftSec: pe.breakBudgetSec - pe.breakUsedSec - running };
}
