// Deterministic study-plan generator. Pure: same inputs, same plan. All dates are UTC calendar days.
export type PlanInput = {
  start: Date;
  examDate: Date;
  hoursPerDay: number;
  questionsPerHour: number;
  restDays: number[]; // 0 = Sunday
  pools: { systemId: string; unused: number }[]; // unused questions per system, in priority order
};
export type PlanTaskInput = { date: Date; kind: 'QUESTIONS' | 'REVIEW' | 'FLASHCARDS'; systemId?: string; target: number };

const DAY = 864e5;
export const utcDay = (d: Date) => new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));

export function studyDays(start: Date, examDate: Date, restDays: number[]): Date[] {
  const out: Date[] = [];
  for (let t = utcDay(start).getTime(); t < utcDay(examDate).getTime(); t += DAY) {
    const d = new Date(t);
    if (!restDays.includes(d.getUTCDay())) out.push(d);
  }
  return out;
}

export function generatePlan(p: PlanInput): PlanTaskInput[] {
  const days = studyDays(p.start, p.examDate, p.restDays);
  if (!days.length) return [];
  // last ~10% of days (at least 1 once there are 7+) are for reviewing incorrect and marked questions
  const reviewCount = days.length >= 7 ? Math.max(1, Math.round(days.length * 0.1)) : 0;
  const qDays = days.slice(0, days.length - reviewCount);
  const capacity = Math.max(1, Math.round(p.hoursPerDay * p.questionsPerHour));
  const totalUnused = p.pools.reduce((s, x) => s + Math.max(0, x.unused), 0);
  const perDay = Math.min(capacity, Math.ceil(totalUnused / Math.max(1, qDays.length)));

  const queue = p.pools.filter((x) => x.unused > 0).map((x) => ({ ...x, left: x.unused }));
  const tasks: PlanTaskInput[] = [];
  for (const date of qDays) {
    let room = perDay;
    while (room > 0 && queue.length) {
      const head = queue[0]!;
      const n = Math.min(room, head.left);
      tasks.push({ date, kind: 'QUESTIONS', systemId: head.systemId, target: n });
      head.left -= n;
      room -= n;
      if (head.left === 0) queue.shift();
    }
    tasks.push({ date, kind: 'FLASHCARDS', target: 20 });
  }
  for (const date of days.slice(days.length - reviewCount)) tasks.push({ date, kind: 'REVIEW', target: capacity });
  return tasks;
}
