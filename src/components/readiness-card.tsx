import Link from 'next/link';
import type { ReadinessAssessment } from '@/lib/readiness';
import { Badge, ButtonLink, Card, Meter, cx } from './ui';

export function ReadinessCard({
  assessment,
  className,
}: {
  assessment: ReadinessAssessment;
  className?: string;
}) {
  const {
    badgeLabel,
    badgeTone,
    title,
    summary,
    coveragePct,
    accuracyPct,
    used,
    published,
    streakDays,
    weakAreas,
    recommendations,
  } = assessment;

  return (
    <Card className={cx('space-y-5 border-line', className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Practice Progress &amp; Milestone Assessment
            </span>
            <Badge tone={badgeTone}>{badgeLabel}</Badge>
          </div>
          <h2 className="mt-1 text-xl font-bold tracking-tight text-ink">{title}</h2>
        </div>
        <ButtonLink href="/create" size="sm">
          Start practice test
        </ButtonLink>
      </div>

      <p className="text-sm leading-relaxed text-muted">{summary}</p>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-line bg-surface-2/60 p-3.5">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Bank Coverage</span>
            <span className="font-semibold text-ink">{coveragePct}%</span>
          </div>
          <div className="mt-2">
            <Meter value={coveragePct} label="Bank Coverage" />
          </div>
          <p className="mt-1.5 text-xs text-muted">
            {used} of {published} questions completed
          </p>
        </div>

        <div className="rounded-xl border border-line bg-surface-2/60 p-3.5">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Overall Accuracy</span>
            <span className={cx('font-semibold', accuracyPct >= 65 ? 'text-ok' : accuracyPct >= 50 ? 'text-brand' : 'text-bad')}>
              {accuracyPct}%
            </span>
          </div>
          <div className="mt-2">
            <Meter value={accuracyPct} label="Overall Accuracy" />
          </div>
          <p className="mt-1.5 text-xs text-muted">
            Target passing benchmark: ~60–65%
          </p>
        </div>

        <div className="rounded-xl border border-line bg-surface-2/60 p-3.5">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Study Streak</span>
            <span className="font-semibold text-ink">{streakDays} day{streakDays === 1 ? '' : 's'}</span>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
            <span className="text-xs font-medium text-ink">
              {streakDays > 0 ? 'Consistent practice active' : 'No streak recorded today'}
            </span>
          </div>
          <p className="mt-1 text-xs text-muted">
            Daily retention reinforces recall
          </p>
        </div>
      </div>

      {weakAreas.length > 0 && (
        <div className="rounded-xl border border-warn/30 bg-warn-soft/50 p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
            High-Yield Focus Areas
          </h3>
          <ul className="mt-2 grid gap-2 sm:grid-cols-3">
            {weakAreas.map((w) => (
              <li key={`${w.kind}-${w.id}`} className="flex items-center justify-between rounded-lg bg-surface px-3 py-2 text-xs border border-line">
                <span className="truncate pr-2">
                  <span className="text-muted">{w.kind}:</span> {w.name}
                </span>
                <span className="shrink-0 font-semibold tabular-nums text-bad">{w.pct}%</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {recommendations.length > 0 && (
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
            Actionable Next Steps
          </h3>
          <ul className="mt-2 space-y-1.5 text-xs text-body">
            {recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-brand" aria-hidden="true">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-center justify-between pt-1 text-xs text-muted">
        <span>Descriptive practice statistics only. Does not predict or guarantee official board examination scores.</span>
        <Link href="/performance" className="text-brand underline hover:opacity-80">
          View full performance →
        </Link>
      </div>
    </Card>
  );
}
