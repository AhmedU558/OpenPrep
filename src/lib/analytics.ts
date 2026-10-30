// Personal performance analytics. All queries are scoped to one userId.
import { db } from './db';
import { deliverableQuestion } from './content-rights';

export type Row = { id: string; name: string; total: number; correct: number; incorrect: number; omitted: number; pct: number };

const DAY = 864e5;
export const dayKey = (d: Date) => d.toISOString().slice(0, 10); // UTC calendar day

/** Consecutive study days ending today, or yesterday so the streak survives until tonight. Pure. */
export function streak(days: Set<string>, today = new Date()): number {
  let t = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  if (!days.has(dayKey(new Date(t)))) t -= DAY;
  let n = 0;
  while (days.has(dayKey(new Date(t)))) { n++; t -= DAY; }
  return n;
}

/** Lowest-accuracy groups with enough attempts to mean something. Pure. */
export function weakest(rows: Row[], minAttempts = 3, n = 5): Row[] {
  return rows.filter((r) => r.total >= minAttempts).sort((a, b) => a.pct - b.pct || b.total - a.total).slice(0, n);
}

type Resp = { isCorrect: boolean; omitted: boolean; question: { examId: string; subjectId: string; systemId: string } };

/** Pure: group responses by exam/subject/system. */
export function breakdown(responses: Resp[], names: Map<string, string>, key: 'examId' | 'subjectId' | 'systemId'): Row[] {
  const acc = new Map<string, Row>();
  for (const r of responses) {
    const k = r.question[key];
    const row = acc.get(k) ?? { id: k, name: names.get(k) ?? '—', total: 0, correct: 0, incorrect: 0, omitted: 0, pct: 0 };
    row.total++;
    if (r.isCorrect) row.correct++; else if (r.omitted) row.omitted++; else row.incorrect++;
    acc.set(k, row);
  }
  return [...acc.values()].map((r) => ({ ...r, pct: Math.round((100 * r.correct) / r.total) })).sort((a, b) => a.name.localeCompare(b.name));
}

export async function overview(userId: string) {
  const since = new Date(Date.now() - 83 * DAY);
  const [published, agg, avg, daily, sessions, responses, exams, subjects, systems, cardsDue] = await Promise.all([
    db.question.count({ where: deliverableQuestion }),
    db.response.groupBy({ by: ['isCorrect', 'omitted'], where: { userId }, _count: true }),
    db.response.aggregate({ where: { userId }, _avg: { timeMs: true } }),
    db.$queryRaw<{ day: Date; n: bigint }[]>`
      SELECT date_trunc('day', si."lockedAt" AT TIME ZONE 'UTC') AS day, count(*) AS n
      FROM session_item si JOIN test_session ts ON ts.id = si."sessionId"
      WHERE ts."userId" = ${userId} AND si."lockedAt" >= ${since}
      GROUP BY 1 ORDER BY 1`,
    db.testSession.findMany({
      where: { userId, state: 'SUBMITTED' }, orderBy: { submittedAt: 'asc' }, take: 200,
      select: { id: true, name: true, mode: true, total: true, correctCount: true, submittedAt: true, activeMs: true },
    }),
    db.response.findMany({ where: { userId }, select: { isCorrect: true, omitted: true, question: { select: { examId: true, subjectId: true, systemId: true } } } }),
    db.exam.findMany(), db.subject.findMany(), db.system.findMany(),
    db.card.count({ where: { userId, suspended: false, due: { lte: new Date() } } }),
  ]);
  const names = new Map([...exams, ...subjects, ...systems].map((x) => [x.id, x.name]));
  const bySubject = breakdown(responses, names, 'subjectId');
  const bySystem = breakdown(responses, names, 'systemId');
  const byExam = breakdown(responses, names, 'examId');
  const count = (c: boolean, o: boolean) => agg.find((a) => a.isCorrect === c && a.omitted === o)?._count ?? 0;
  const correct = count(true, false), omitted = count(false, true), incorrect = count(false, false);
  const used = correct + omitted + incorrect;
  const activity = daily.map((d) => ({ day: dayKey(new Date(d.day)), count: Number(d.n) }));
  const today = dayKey(new Date());
  return {
    published, used, correct, incorrect, omitted,
    pct: used ? Math.round((100 * correct) / used) : 0,
    avgTimeMs: Math.round(avg._avg.timeMs ?? 0),
    activity,
    today: activity.find((a) => a.day === today)?.count ?? 0,
    week: activity.filter((a) => Date.parse(a.day) >= Date.now() - 7 * DAY).reduce((s, a) => s + a.count, 0),
    streak: streak(new Set(activity.map((a) => a.day))),
    history: sessions.map((s) => ({
      id: s.id, label: s.submittedAt ? dayKey(s.submittedAt) : '', name: s.name, mode: s.mode,
      pct: Math.round((100 * (s.correctCount ?? 0)) / s.total), total: s.total, avgSec: Math.round(s.activeMs / 1000 / s.total),
    })),
    bySubject, bySystem, byExam,
    weakSubjects: weakest(bySubject), weakSystems: weakest(bySystem),
    cardsDue,
  };
}
export type Overview = Awaited<ReturnType<typeof overview>>;

const csvCell = (v: unknown) => {
  const s = String(v ?? '');
  // neutralise spreadsheet formula injection and quote everything
  return `"${(/^[=+\-@\t\r]/.test(s) ? `'${s}` : s).replace(/"/g, '""')}"`;
};
export const toCsv = (rows: unknown[][]) => rows.map((r) => r.map(csvCell).join(',')).join('\r\n');

export async function progressCsv(userId: string) {
  const o = await overview(userId);
  const rows: unknown[][] = [
    ['Section', 'Name', 'Answered', 'Correct', 'Incorrect', 'Omitted', 'Percent correct'],
    ['Overall', 'All questions', o.used, o.correct, o.incorrect, o.omitted, o.pct],
    ...o.byExam.map((r) => ['Exam', r.name, r.total, r.correct, r.incorrect, r.omitted, r.pct]),
    ...o.bySubject.map((r) => ['Subject', r.name, r.total, r.correct, r.incorrect, r.omitted, r.pct]),
    ...o.bySystem.map((r) => ['System', r.name, r.total, r.correct, r.incorrect, r.omitted, r.pct]),
    [],
    ['Test date', 'Name', 'Mode', 'Questions', 'Percent correct', 'Avg seconds per question'],
    ...o.history.map((h) => [h.label, h.name ?? '', h.mode, h.total, h.pct, h.avgSec]),
  ];
  return toCsv(rows);
}
