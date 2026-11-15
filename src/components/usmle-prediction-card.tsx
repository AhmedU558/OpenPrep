import type { USMLEReadinessEstimate, USMLEStepPrediction } from '@/lib/readiness';
import { Badge, Card, Meter, cx } from './ui';

function StepCard({ pred }: { pred: USMLEStepPrediction }) {
  const isStep1 = pred.stepKey === 'step1';
  return (
    <div className="flex flex-col justify-between rounded-xl border border-line bg-surface-2/40 p-4 transition-all hover:border-brand/40">
      <div>
        <div className="flex items-center justify-between gap-2 border-b border-line pb-2.5">
          <div className="font-semibold text-ink">{pred.step}</div>
          <Badge tone={pred.badgeTone}>{pred.statusLabel}</Badge>
        </div>

        {pred.status === 'INSUFFICIENT_DATA' ? (
          <div className="py-6 text-center">
            <div className="text-2xl font-bold text-muted">—</div>
            <p className="mt-1 text-xs text-muted">{pred.description}</p>
          </div>
        ) : isStep1 ? (
          <div className="mt-3 space-y-3">
            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-muted">Pass Likelihood</span>
                <span className={cx('text-2xl font-bold tabular-nums', pred.passLikelihoodPct! >= 75 ? 'text-ok' : pred.passLikelihoodPct! >= 55 ? 'text-accent' : 'text-bad')}>
                  {pred.passLikelihoodPct}%
                </span>
              </div>
              <div className="mt-1.5">
                <Meter value={pred.passLikelihoodPct!} label="Pass Likelihood" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 rounded-lg bg-surface p-2 text-xs border border-line">
              <div>
                <span className="text-muted block">Accuracy</span>
                <span className="font-semibold tabular-nums text-ink">{pred.accuracyPct}%</span>
              </div>
              <div>
                <span className="text-muted block">Passing Target</span>
                <span className="font-semibold text-ink">~60%</span>
              </div>
            </div>
            <p className="text-xs text-muted leading-relaxed">{pred.description}</p>
          </div>
        ) : (
          <div className="mt-3 space-y-3">
            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-muted">Projected 3-Digit Score</span>
                <span className={cx('text-2xl font-bold tabular-nums', pred.projectedScore! >= 240 ? 'text-ok' : pred.projectedScore! >= 214 ? 'text-brand' : 'text-bad')}>
                  {pred.projectedScore}
                </span>
              </div>
              {pred.scoreRange && (
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>Range: {pred.scoreRange[0]}–{pred.scoreRange[1]}</span>
                  {pred.percentileRank && <span>~{pred.percentileRank}th percentile</span>}
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2 rounded-lg bg-surface p-2 text-xs border border-line">
              <div>
                <span className="text-muted block">Buffer vs Pass ({pred.passingStandard})</span>
                <span className={cx('font-semibold tabular-nums', pred.scoreBuffer >= 0 ? 'text-ok' : 'text-bad')}>
                  {pred.scoreBuffer >= 0 ? `+${pred.scoreBuffer}` : pred.scoreBuffer} pts
                </span>
              </div>
              <div>
                <span className="text-muted block">Accuracy</span>
                <span className="font-semibold tabular-nums text-ink">{pred.accuracyPct}%</span>
              </div>
            </div>
            <p className="text-xs text-muted leading-relaxed">{pred.description}</p>
          </div>
        )}
      </div>

      <div className="mt-4 border-t border-line/60 pt-2.5">
        <span className="text-[11px] font-medium text-muted block uppercase tracking-wider">Strategy</span>
        <p className="mt-0.5 text-xs text-body leading-relaxed">{pred.recommendation}</p>
      </div>
    </div>
  );
}

export function USMLEPredictionCard({
  estimate,
  className,
}: {
  estimate: USMLEReadinessEstimate;
  className?: string;
}) {
  return (
    <Card className={cx('space-y-4 border-line', className)}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              USMLE Board Exam Predictor
            </span>
            <Badge tone="brand">Statistically Calibrated</Badge>
          </div>
          <h2 className="mt-1 text-lg font-bold tracking-tight text-ink">
            Predictive 3-Digit Score &amp; Pass Probability
          </h2>
        </div>
        <span className="text-xs text-muted">{estimate.summary}</span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StepCard pred={estimate.step1} />
        <StepCard pred={estimate.step2ck} />
        <StepCard pred={estimate.step3} />
      </div>

      <div className="flex items-center justify-between pt-1 text-[11px] text-muted">
        <span>
          Calibrated using empirical national score distributions (Step 1 pass ~60%; Step 2 CK mean 248 ± 15, pass 214; Step 3 mean 228 ± 15, pass 200). Confidence intervals tighten with practice volume.
        </span>
      </div>
    </Card>
  );
}
