// Study plan: settings + generated daily tasks. Progress is measured from real answers, not self-reported.
import { z } from 'zod';
import { db } from './db';
import { deliverableQuestion } from './content-rights';
import { AppError } from './errors';
import { generatePlan, utcDay } from './planner';

const DAY = 864e5;
const dateStr = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).transform((s) => new Date(`${s}T00:00:00Z`));

export const planSchema = z.object({
  examId: z.string().min(1).max(64).nullable(),
  startDate: dateStr,
  examDate: dateStr,
  hoursPerDay: z.number().min(0.5).max(16),
  questionsPerHour: z.number().int().min(5).max(60).default(20),
  restDays: z.array(z.number().int().min(0).max(6)).max(6).default([]),
}).refine((p) => p.examDate.getTime() > p.startDate.getTime(), { message: 'Exam date must be after the start date.', path: ['examDate'] })
  .refine((p) => p.examDate.getTime() - p.startDate.getTime() <= 400 * DAY, { message: 'Plans can cover up to 400 days.', path: ['examDate'] });

async function unusedBySystem(userId: string, examId: string | null) {
  const rows = await db.question.groupBy({
    by: ['systemId'],
    where: { ...deliverableQuestion, ...(examId ? { examId } : {}), responses: { none: { userId } } },
    _count: true,
    orderBy: { _count: { systemId: 'desc' } },
  });
  return rows.map((r) => ({ systemId: r.systemId, unused: r._count }));
}

/** Create or replace the plan. With `fromToday`, keeps past days and reschedules the rest from current progress. */
export async function savePlan(userId: string, raw: unknown, fromToday = false) {
  const p = planSchema.parse(raw);
  if (p.examId && !(await db.exam.findUnique({ where: { id: p.examId } }))) throw new AppError('INVALID', 'Unknown exam.');
  const today = utcDay(new Date());
  const start = fromToday && p.startDate < today ? today : p.startDate;
  const tasks = generatePlan({ ...p, start, pools: await unusedBySystem(userId, p.examId) });
  return db.$transaction(async (tx) => {
    const plan = await tx.studyPlan.upsert({
      where: { userId },
      create: { userId, ...p },
      update: { ...p },
    });
    await tx.planTask.deleteMany({ where: { planId: plan.id, ...(fromToday ? { date: { gte: start } } : {}) } });
    await tx.planTask.createMany({ data: tasks.map((t) => ({ planId: plan.id, date: t.date, kind: t.kind, systemId: t.systemId ?? null, target: t.target })) });
    return plan;
  });
}

export async function getPlan(userId: string) {
  const plan = await db.studyPlan.findUnique({
    where: { userId },
    include: { exam: true, tasks: { orderBy: [{ date: 'asc' }, { kind: 'asc' }], include: { system: { select: { name: true } } } } },
  });
  if (!plan) return null;
  // progress per day: questions answered (per system) and cards reviewed
  const since = plan.startDate;
  const [answered, reviews] = await Promise.all([
    db.$queryRaw<{ day: Date; systemId: string; n: bigint }[]>`
      SELECT date_trunc('day', si."lockedAt" AT TIME ZONE 'UTC') AS day, q."systemId", count(*) AS n
      FROM session_item si JOIN test_session ts ON ts.id = si."sessionId" JOIN question q ON q.id = si."questionId"
      WHERE ts."userId" = ${userId} AND si."lockedAt" >= ${since}
      GROUP BY 1, 2`,
    db.$queryRaw<{ day: Date; n: bigint }[]>`
      SELECT date_trunc('day', "reviewedAt" AT TIME ZONE 'UTC') AS day, count(*) AS n
      FROM card_review WHERE "userId" = ${userId} AND "reviewedAt" >= ${since} GROUP BY 1`,
  ]);
  const key = (d: Date) => d.toISOString().slice(0, 10);
  const answeredMap = new Map<string, number>(), answeredAny = new Map<string, number>();
  for (const a of answered) {
    answeredMap.set(`${key(new Date(a.day))}|${a.systemId}`, Number(a.n));
    answeredAny.set(key(new Date(a.day)), (answeredAny.get(key(new Date(a.day))) ?? 0) + Number(a.n));
  }
  const reviewMap = new Map(reviews.map((r) => [key(new Date(r.day)), Number(r.n)]));
  const tasks = plan.tasks.map((t) => {
    const d = key(t.date);
    const progress = t.kind === 'QUESTIONS' ? answeredMap.get(`${d}|${t.systemId}`) ?? 0
      : t.kind === 'FLASHCARDS' ? reviewMap.get(d) ?? 0 : answeredAny.get(d) ?? 0;
    return { ...t, day: d, progress: Math.min(progress, t.target), complete: t.done || progress >= t.target };
  });
  return { plan, tasks };
}

export async function setTaskDone(userId: string, rawTaskId: unknown, done: boolean) {
  const id = z.string().min(1).max(64).parse(rawTaskId);
  const r = await db.planTask.updateMany({ where: { id, plan: { userId } }, data: { done } });
  if (!r.count) throw new AppError('NOT_FOUND', 'Task not found.');
}

export async function moveTask(userId: string, rawTaskId: unknown, rawDate: unknown) {
  const id = z.string().min(1).max(64).parse(rawTaskId);
  const date = dateStr.parse(rawDate);
  const task = await db.planTask.findFirst({ where: { id, plan: { userId } }, include: { plan: true } });
  if (!task) throw new AppError('NOT_FOUND', 'Task not found.');
  if (date < task.plan.startDate || date >= task.plan.examDate) throw new AppError('INVALID', 'Pick a date inside your plan.');
  await db.planTask.update({ where: { id }, data: { date } });
}

export async function setTaskTarget(userId: string, rawTaskId: unknown, rawTarget: unknown) {
  const id = z.string().min(1).max(64).parse(rawTaskId);
  const target = z.number().int().min(1).max(500).parse(rawTarget);
  const r = await db.planTask.updateMany({ where: { id, plan: { userId } }, data: { target } });
  if (!r.count) throw new AppError('NOT_FOUND', 'Task not found.');
}

export async function deletePlan(userId: string) {
  await db.studyPlan.deleteMany({ where: { userId } });
}
