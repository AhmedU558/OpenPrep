import type { Row } from '@/lib/analytics';
import { Meter } from './ui';

export function BreakdownTable({ rows, label }: { rows: Row[]; label: string }) {
  if (!rows.length) return <p className="py-6 text-center text-muted">No answers yet.</p>;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-muted">
          <tr><th className="py-2 pr-4 font-medium">{label}</th><th className="py-2 pr-4 font-medium">Answered</th><th className="py-2 pr-4 font-medium">Correct</th>
            <th className="py-2 pr-4 font-medium">Incorrect</th><th className="py-2 pr-4 font-medium">Omitted</th><th className="w-1/3 py-2 font-medium">Accuracy</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t border-line">
              <td className="py-2 pr-4">{r.name}</td>
              <td className="py-2 pr-4 tabular-nums">{r.total}</td>
              <td className="py-2 pr-4 tabular-nums text-ok">{r.correct}</td>
              <td className="py-2 pr-4 tabular-nums text-bad">{r.incorrect}</td>
              <td className="py-2 pr-4 tabular-nums">{r.omitted}</td>
              <td className="py-2"><div className="flex items-center gap-3"><Meter value={r.pct} label={`${r.name} accuracy`} /><span className="w-10 text-right tabular-nums">{r.pct}%</span></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
