// Practice-session operations. Every function takes the acting userId and only touches that user's sessions.
// Each mutating call locks the session row (SELECT ... FOR UPDATE) so concurrent requests are serialized:
// a double-clicked Submit, or an answer racing the deadline, cannot corrupt or double-score a test.
import type { SessionItem, TestSession } from '@/generated/prisma/client';
import { db, type Tx } from '../db';
import { AppError } from '../errors';
import { acceptHighlights, renderMarkdown } from '../markdown';
import { questionWhere } from '../questions';
import { deliverableQuestion, requireQuestionDelivery } from '../content-rights';
import { createSessionSchema, positionSchema, selectionSchema } from '../validation/exam';
import { activeMsAt, isExpired, remainingMs, transition } from './machine';
import { scoreItem, scoreSession, validateSelection, type ItemOutcome } from './scoring';

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

type ItemWithKey = SessionItem & { question: { id: string; type: 'SINGLE' | 'MULTIPLE'; options: { id: string; isCorrect: boolean }[] } };
const correctIds = (i: ItemWithKey) => i.question.options.filter((o) => o.isCorrect).map((o) => o.id);

async function lockItem(tx: Tx, userId: string, s: TestSession, item: ItemWithKey, now: Date): Promise<ItemOutcome> {
  const out = scoreItem(correctIds(item), item.selectedOptionIds, s.negativeMark);
  await tx.sessionItem.update({ where: { id: item.id }, data: { state: 'LOCKED', isCorrect: out.isCorrect, points: out.points, lockedAt: now } });
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
    include: { question: { select: { id: true, type: true, options: { select: { id: true, isCorrect: true } } } } },
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
    include: { question: { select: { id: true, type: true, options: { select: { id: true, isCorrect: true } } } } },
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
          startedAt: s.startedAt ?? now, lastResumedAt: now, positionSince: now,
        },
      });
    }
  });
}

export async function pauseSession(userId: string, id: string) {
  return mutate(userId, id, async (tx, s, now) => {
    if (await expireIfDue(tx, userId, s, now)) return;
    await accrue(tx, s, now);
    await tx.testSession.update({
      where: { id: s.id },
      data: { state: transition(s.state, 'pause'), activeMs: Math.round(activeMsAt(s, now)), lastResumedAt: null, positionSince: null },
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
    const clean = html === '' ? null : acceptHighlights(html, q.stemMd);
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
  await requireQuestionDelivery(q.id);
  // answers and explanations leave the server only once this item is locked
  const reveal = it.state === 'LOCKED';
  const now = new Date();
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
      flagged: it.flagged, timeMs: it.timeMs, stemHtml: it.highlightsHtml ?? renderMarkdown(q.stemMd),
    },
    question: {
      id: q.id, code: q.code, type: q.type, isDemo: q.isDemo, isAiAuthored: q.source.includes('AI-authored'), imageUrl: q.imageUrl, imageAlt: q.imageAlt,
      exam: q.exam.name, subject: q.subject.name, system: q.system.name,
      bookmarked: q.bookmarks.length > 0, note: q.notes[0]?.body ?? '',
      options: q.options.map((o) => ({
        id: o.id, text: o.text,
        ...(reveal ? { isCorrect: o.isCorrect, explanationHtml: o.explanationMd ? renderMarkdown(o.explanationMd) : null } : {}),
      })),
      reveal: reveal ? {
        isCorrect: it.isCorrect, omitted: it.selectedOptionIds.length === 0,
        explanationHtml: renderMarkdown(q.explanationMd), objective: q.objective, keyPoints: q.keyPoints,
        references: q.references as { label: string; url?: string }[], source: q.source, license: q.license,
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
