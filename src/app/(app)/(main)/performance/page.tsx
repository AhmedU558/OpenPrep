import Link from 'next/link';
import { BreakdownTable } from '@/components/breakdown-table';
import { ActivityHeatmap, ScoreTrend } from '@/components/charts';
import { ButtonLink, Card, EmptyState, PageHeader, Stat, fmtDuration } from '@/components/ui';
import { overview } from '@/lib/analytics';
import { requireUserPage } from '@/lib/session';

export const metadata = { title: 'Performance' };

const TABS = ['overall', 'reports', 'graphs'] as const;

export default async function PerformancePage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const user = await requireUserPage();
  const requested = (await searchParams).tab;
  const tab = TABS.find((t) => t === requested) ?? 'overall';
  const o = await overview(user.id);
  const header = (
    <PageHeader title="Performance" subtitle="Only your own answers are counted. Your most recent attempt at each question is what counts."
      actions={o.used > 0 && <a href="/api/export/progress" className="inline-flex h-10 items-center rounded-lg border border-line bg-surface px-4 text-[15px] hover:bg-surface-2">Download CSV</a>} />
  );
  if (!o.used) return <>{header}<EmptyState title="No answers yet" action={<ButtonLink href="/create">Start practicing</ButtonLink>}>Answer a few questions and your accuracy, trends and weak areas will show up here.</EmptyState></>;

  return (
    <>
      {header}
      <div className="mb-6 flex gap-2" role="tablist" aria-label="Performance views">
        {TABS.map((t) => (
          <Link key={t} role="tab" aria-selected={tab === t} href={`?tab=${t}`}
            className={`rounded-full px-4 py-1.5 text-sm capitalize ${tab === t ? 'bg-brand text-brand-ink' : 'bg-surface text-muted hover:text-ink'}`}>{t}</Link>
        ))}
      </div>

      {tab === 'overall' && (
        <div className="space-y-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Correct" value={`${o.pct}%`} hint={`${o.correct} of ${o.used} answered`} />
            <Stat label="Questions used" value={`${o.used} / ${o.published}`} hint={`${o.published - o.used} unused`} />
            <Stat label="Avg. time / question" value={fmtDuration(o.avgTimeMs)} />
            <Stat label="Study streak" value={`${o.streak} day${o.streak === 1 ? '' : 's'}`} hint={`${o.week} questions in the last 7 days`} />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card><h2 className="mb-3 font-semibold">Activity</h2><ActivityHeatmap activity={o.activity} /></Card>
            <Card>
              <h2 className="mb-3 font-semibold">Focus next</h2>
              {o.weakSubjects.length + o.weakSystems.length === 0 ? <p className="text-muted">Answer at least 3 questions in a subject or system to see weak areas.</p> : (
                <ul className="space-y-2 text-sm">
                  {[...o.weakSubjects.map((r) => ({ ...r, kind: 'Subject' })), ...o.weakSystems.map((r) => ({ ...r, kind: 'System' }))]
                    .sort((a, b) => a.pct - b.pct).slice(0, 6).map((r) => (
                      <li key={r.kind + r.id} className="flex justify-between gap-3"><span><span className="text-muted">{r.kind}:</span> {r.name}</span><span className="tabular-nums">{r.pct}% of {r.total}</span></li>
                    ))}
                </ul>
              )}
            </Card>
          </div>
        </div>
      )}

      {tab === 'reports' && (
        <div className="space-y-6">
          <Card><h2 className="mb-2 font-semibold">By exam</h2><BreakdownTable rows={o.byExam} label="Exam" /></Card>
          <Card><h2 className="mb-2 font-semibold">By subject</h2><BreakdownTable rows={o.bySubject} label="Subject" /></Card>
          <Card><h2 className="mb-2 font-semibold">By system</h2><BreakdownTable rows={o.bySystem} label="System" /></Card>
        </div>
      )}

      {tab === 'graphs' && (
        <div className="space-y-6">
          <Card><h2 className="mb-3 font-semibold">Score by test</h2><ScoreTrend data={o.history} /></Card>
          <Card>
            <h2 className="mb-3 font-semibold">Time per question by test</h2>
            {o.history.length === 0 ? <p className="text-muted">No completed tests yet.</p> : (
              <ul className="space-y-1.5 text-sm">
                {o.history.slice(-12).map((h, i) => (
                  <li key={h.id} className="flex items-center gap-3"><span className="w-24 text-muted">{h.label}</span>
                    <span className="h-2 rounded-full bg-brand" style={{ width: `${Math.min(100, (h.avgSec / 180) * 100)}%` }} aria-hidden="true" />
                    <span className="tabular-nums">{h.avgSec}s</span><span className="sr-only">test {i + 1}</span></li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      )}
    </>
  );
}
