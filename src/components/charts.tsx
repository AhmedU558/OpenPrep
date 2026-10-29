'use client';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { cx } from './ui';

export function ScoreTrend({ data }: { data: { label: string; pct: number; total: number }[] }) {
  if (data.length < 2) return <p className="py-10 text-center text-muted">Finish at least two tests to see your trend.</p>;
  return (
    <figure>
      <div className="h-64" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.map((d, i) => ({ ...d, n: i + 1 }))} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
            <CartesianGrid stroke="var(--line)" strokeDasharray="3 3" />
            <XAxis dataKey="n" stroke="var(--muted)" tickLine={false} fontSize={12} />
            <YAxis domain={[0, 100]} stroke="var(--muted)" tickLine={false} fontSize={12} unit="%" />
            <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 8, color: 'var(--ink)' }}
              formatter={(v) => [`${v}%`, 'Score']} labelFormatter={(n) => `Test ${n}`} />
            <Line type="monotone" dataKey="pct" stroke="var(--brand)" strokeWidth={2.5} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* the same data as text for screen readers */}
      <figcaption className="sr-only">Scores by test: {data.map((d, i) => `test ${i + 1}, ${d.label}: ${d.pct}%`).join('; ')}</figcaption>
    </figure>
  );
}

export function ActivityHeatmap({ activity, days = 84 }: { activity: { day: string; count: number }[]; days?: number }) {
  const map = new Map(activity.map((a) => [a.day, a.count]));
  const today = new Date();
  const cells = Array.from({ length: days }, (_, i) => {
    const d = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - (days - 1 - i)));
    const key = d.toISOString().slice(0, 10);
    return { key, n: map.get(key) ?? 0 };
  });
  const level = (n: number) => (n === 0 ? 'bg-surface-2' : n < 10 ? 'bg-brand/30' : n < 25 ? 'bg-brand/60' : 'bg-brand');
  return (
    <div>
      <div className="grid grid-flow-col grid-rows-7 gap-1" role="img" aria-label={`Questions answered per day over the last ${days} days`}>
        {cells.map((c) => <div key={c.key} title={`${c.key}: ${c.n} questions`} className={cx('h-3.5 w-3.5 rounded-sm', level(c.n))} />)}
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">Less {['bg-surface-2', 'bg-brand/30', 'bg-brand/60', 'bg-brand'].map((c) => <span key={c} className={cx('h-3 w-3 rounded-sm', c)} />)} More</div>
    </div>
  );
}
