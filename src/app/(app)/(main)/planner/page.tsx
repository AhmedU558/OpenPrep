import { PlanForm, TaskRow, type TaskView } from '@/components/planner-ui';
import { Card, Meter, PageHeader, Stat } from '@/components/ui';
import { db } from '@/lib/db';
import { getPlan } from '@/lib/plan';
import { requireUserPage } from '@/lib/session';

export const metadata = { title: 'Study planner' };

const iso = (d: Date) => d.toISOString().slice(0, 10);

export default async function PlannerPage() {
  const user = await requireUserPage();
  const [exams, data] = await Promise.all([db.exam.findMany({ orderBy: { position: 'asc' } }), getPlan(user.id)]);
  const now = new Date();
  const today = iso(now);
  const in8weeks = iso(new Date(now.getTime() + 56 * 864e5));
  const defaults = data
    ? { examId: data.plan.examId, startDate: iso(data.plan.startDate), examDate: iso(data.plan.examDate), hoursPerDay: data.plan.hoursPerDay, questionsPerHour: data.plan.questionsPerHour, restDays: data.plan.restDays }
    : { examId: exams[0]?.id ?? null, startDate: today, examDate: in8weeks, hoursPerDay: 3, questionsPerHour: 20, restDays: [] };

  if (!data) return (
    <>
      <PageHeader title="Study planner" subtitle="Tell us your exam date and how much time you have; we'll spread every unused question across your days and leave time for review." />
      <PlanForm exams={exams} initial={defaults} hasPlan={false} />
    </>
  );

  const tasks: TaskView[] = data.tasks.map((t) => ({ id: t.id, day: t.day, kind: t.kind, systemId: t.systemId, systemName: t.system?.name ?? null, target: t.target, progress: t.progress, complete: t.complete, done: t.done }));
  const byDay = new Map<string, TaskView[]>();
  for (const t of tasks) byDay.set(t.day, [...(byDay.get(t.day) ?? []), t]);
  const todays = byDay.get(today) ?? [];
  const daysLeft = Math.max(0, Math.round((data.plan.examDate.getTime() - new Date(`${today}T00:00:00Z`).getTime()) / 864e5));
  const qTasks = tasks.filter((t) => t.kind === 'QUESTIONS');
  const planned = qTasks.reduce((s, t) => s + t.target, 0), donePlanned = qTasks.reduce((s, t) => s + t.progress, 0);
  const behind = qTasks.filter((t) => t.day < today && !t.complete).length;
  const upcoming = [...byDay.entries()].filter(([d]) => d > today);
  const past = [...byDay.entries()].filter(([d]) => d < today).reverse();

  return (
    <>
      <PageHeader title="Study planner" subtitle={`${data.plan.exam?.name ?? 'All exams'} · exam on ${iso(data.plan.examDate)}`}
        actions={<a href="/api/export/plan" className="inline-flex h-10 items-center rounded-lg border border-line bg-surface px-4 text-[15px] hover:bg-surface-2">Add to calendar (.ics)</a>} />
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Days until exam" value={daysLeft} />
        <Stat label="Plan progress" value={`${planned ? Math.round((100 * donePlanned) / planned) : 0}%`} hint={`${donePlanned} of ${planned} planned questions`} />
        <Stat label="Behind schedule" value={behind ? `${behind} task${behind === 1 ? '' : 's'}` : 'On track'} hint={behind ? 'Use "Reschedule from today" to spread them out.' : undefined} />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <Card>
            <h2 className="mb-2 font-semibold">Today</h2>
            {todays.length ? <ul>{todays.map((t) => <TaskRow key={t.id} t={t} examId={data.plan.examId} />)}</ul>
              : <p className="text-muted">Nothing scheduled today. Rest, or get ahead on tomorrow&apos;s tasks below.</p>}
          </Card>
          <Card>
            <h2 className="mb-2 font-semibold">Upcoming</h2>
            {upcoming.length === 0 && <p className="text-muted">No more tasks before your exam.</p>}
            {upcoming.slice(0, 21).map(([day, ts]) => (
              <div key={day} className="mt-3">
                <h3 className="text-sm font-semibold text-muted">{new Date(`${day}T00:00:00Z`).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' })}</h3>
                <ul>{ts.map((t) => <TaskRow key={t.id} t={t} examId={data.plan.examId} editable />)}</ul>
              </div>
            ))}
            {upcoming.length > 21 && <p className="mt-3 text-sm text-muted">+ {upcoming.length - 21} more days</p>}
          </Card>
          {past.length > 0 && (
            <Card>
              <h2 className="mb-2 font-semibold">Past days</h2>
              <ul className="space-y-2 text-sm">
                {past.slice(0, 14).map(([day, ts]) => {
                  const t = ts.filter((x) => x.kind === 'QUESTIONS');
                  const target = t.reduce((s, x) => s + x.target, 0), got = t.reduce((s, x) => s + x.progress, 0);
                  return <li key={day} className="flex items-center gap-3"><span className="w-24 text-muted">{day}</span><div className="flex-1"><Meter value={target ? (100 * got) / target : 100} label={`${day} progress`} /></div><span className="w-16 text-right tabular-nums">{got}/{target}</span></li>;
                })}
              </ul>
            </Card>
          )}
        </div>
        <PlanForm exams={exams} initial={defaults} hasPlan />
      </div>
    </>
  );
}
