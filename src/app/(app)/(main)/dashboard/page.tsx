import Link from 'next/link';
import { ActivityHeatmap } from '@/components/charts';
import { TaskRow } from '@/components/planner-ui';
import { ButtonLink, Card, PageHeader, Stat, fmtDuration } from '@/components/ui';
import { overview } from '@/lib/analytics';
import { db } from '@/lib/db';
import { getPlan } from '@/lib/plan';
import { requireUserPage } from '@/lib/session';

export const metadata = { title: 'Home' };

export default async function Dashboard() {
  const user = await requireUserPage();
  const [o, plan, suspended] = await Promise.all([
    overview(user.id),
    getPlan(user.id),
    db.testSession.findMany({ where: { userId: user.id, state: { in: ['PAUSED', 'IN_PROGRESS'] } }, orderBy: { createdAt: 'desc' }, take: 3,
      select: { id: true, name: true, mode: true, total: true, _count: { select: { items: { where: { selectedOptionIds: { isEmpty: false } } } } } } }),
  ]);
  const today = new Date().toISOString().slice(0, 10);
  const todays = plan?.tasks.filter((t) => t.day === today) ?? [];
  const first = user.isAnonymous ? 'there' : user.name.split(' ')[0];

  return (
    <>
      <PageHeader title={`Welcome back, ${first}`} subtitle={o.used ? `${o.today} questions today · ${o.streak}-day streak` : 'Start with a short tutor-mode test to get a feel for things.'}
        actions={<ButtonLink href="/create">Create test</ButtonLink>} />

      {suspended.length > 0 && (
        <Card className="mb-6 border-accent/40 bg-warn-soft">
          <h2 className="font-semibold">Pick up where you left off</h2>
          <ul className="mt-2 space-y-1.5">
            {suspended.map((s) => (
              <li key={s.id} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <span>{s.name ?? `${s.mode === 'TUTOR' ? 'Tutor' : 'Timed'} test`} · {s._count.items}/{s.total} answered</span>
                <Link href={`/test/${s.id}`} className="font-medium text-brand underline">Resume</Link>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Correct" value={o.used ? `${o.pct}%` : '—'} hint={`${o.used} answered`} />
        <Stat label="Unused questions" value={o.published - o.used} hint={`of ${o.published}`} />
        <Stat label="Avg. time / question" value={o.used ? fmtDuration(o.avgTimeMs) : '—'} />
        <Stat label="Flashcards due" value={o.cardsDue} hint={o.cardsDue ? <Link href="/flashcards" className="text-brand underline">Review now</Link> : 'All caught up'} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="mb-2 flex items-center justify-between"><h2 className="font-semibold">Today&apos;s plan</h2><Link href="/planner" className="text-sm text-brand underline">Planner</Link></div>
          {!plan ? <p className="text-muted">No plan yet. <Link href="/planner" className="text-brand underline">Set your exam date</Link> to get daily targets.</p>
            : todays.length ? <ul>{todays.map((t) => <TaskRow key={t.id} t={{ ...t, systemName: t.system?.name ?? null }} examId={plan.plan.examId} />)}</ul>
              : <p className="text-muted">Nothing scheduled today.</p>}
        </Card>
        <Card>
          <div className="mb-2 flex items-center justify-between"><h2 className="font-semibold">Focus next</h2><Link href="/performance?tab=reports" className="text-sm text-brand underline">Reports</Link></div>
          {o.weakSubjects.length ? (
            <ul className="space-y-1.5 text-sm">{o.weakSubjects.map((r) => <li key={r.id} className="flex justify-between"><span>{r.name}</span><span className="tabular-nums text-muted">{r.pct}% of {r.total}</span></li>)}</ul>
          ) : <p className="text-muted">Answer a few more questions to see where to focus.</p>}
        </Card>
        <Card className="lg:col-span-2"><h2 className="mb-3 font-semibold">Activity, last 12 weeks</h2><ActivityHeatmap activity={o.activity} /></Card>
      </div>
    </>
  );
}
