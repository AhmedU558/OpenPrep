import { notFound, redirect } from 'next/navigation';
import { BreakPanel, RetryButton, ReviewLink } from '@/components/results-actions';
import { Alert, Badge, Card, PageHeader, Stat, fmtDuration } from '@/components/ui';
import { AppError } from '@/lib/errors';
import { getResults, nextBlock } from '@/lib/exam/service';
import { requireUserPage } from '@/lib/session';

export const metadata = { title: 'Results' };

const FILTERS = ['all', 'incorrect', 'correct', 'omitted', 'marked'] as const;

export default async function ResultsPage({ params, searchParams }: {
  params: Promise<{ id: string }>; searchParams: Promise<{ f?: string; expired?: string }>;
}) {
  const { id } = await params;
  const { f = 'all', expired } = await searchParams;
  const user = await requireUserPage();
  let data;
  try { data = await getResults(user.id, id); }
  catch (e) {
    if (e instanceof AppError && e.code === 'NOT_FOUND') notFound();
    if (e instanceof AppError && e.code === 'CONFLICT') redirect(`/test/${id}`);
    throw e;
  }
  const { session: s, score } = data;
  const nb = s.practiceExam ? await nextBlock(user.id, id) : null;
  const items = s.items.map((i) => ({
    ...i, result: i.selectedOptionIds.length === 0 ? 'omitted' : i.isCorrect ? 'correct' : 'incorrect',
  }));
  const shown = items.filter((i) => f === 'all' || (f === 'marked' ? i.flagged : i.result === f));
  const wrongIds = items.filter((i) => i.result !== 'correct').map((i) => i.question.id);
  const avgMs = items.reduce((t, i) => t + i.timeMs, 0) / Math.max(1, items.length);
  const exam = s.practiceExam;
  const examPct = exam ? Math.round(100 * exam.blocks.reduce((t, b) => t + (b.correctCount ?? 0), 0) / Math.max(1, exam.blocks.filter((b) => b.state === 'SUBMITTED').reduce((t, b) => t + b.total, 0))) : null;

  return (
    <>
      <PageHeader
        title={exam ? `Practice exam: block ${(s.blockIndex ?? 0) + 1} of ${exam.blocksTotal}` : s.name || 'Test results'}
        subtitle={`${s.mode === 'TUTOR' ? 'Tutor' : 'Timed'} · ${s.total} questions · submitted ${s.submittedAt?.toLocaleString() ?? ''}`}
        actions={wrongIds.length > 0 && <RetryButton questionIds={wrongIds} count={wrongIds.length} />}
      />
      {expired && <div className="mb-4"><Alert tone="info">Time ran out, so the block was submitted automatically.</Alert></div>}
      {nb?.next && <div className="mb-6"><BreakPanel nextId={nb.next.id} blockNumber={(nb.next.blockIndex ?? 0) + 1} blocksTotal={nb.blocksTotal} breakLeftSec={nb.breakLeftSec} /></div>}

      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <Stat label="Score" value={`${score.percent}%`} hint={s.negativeMark ? `${score.points} points (−${s.negativeMark} per wrong)` : undefined} />
        <Stat label="Correct" value={score.correct} />
        <Stat label="Incorrect" value={score.incorrect} />
        <Stat label="Omitted" value={score.omitted} />
        <Stat label="Avg. time / question" value={fmtDuration(avgMs)} />
      </div>
      {examPct != null && exam && !nb?.next && <div className="mb-6"><Alert tone="ok">All {exam.blocksTotal} blocks done. Overall: {examPct}% correct.</Alert></div>}

      <Card className="p-0">
        <div className="flex flex-wrap gap-2 border-b border-line p-3" role="tablist" aria-label="Filter questions">
          {FILTERS.map((x) => (
            <a key={x} role="tab" aria-selected={f === x} href={`?f=${x}`}
              className={`rounded-full px-3 py-1 text-sm capitalize ${f === x ? 'bg-brand text-brand-ink' : 'bg-surface-2 text-muted hover:text-ink'}`}>{x}</a>
          ))}
        </div>
        {shown.length === 0 ? <p className="p-6 text-center text-muted">No questions in this view.</p> : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-muted">
                <tr><th className="px-4 py-2 font-medium">#</th><th className="px-4 py-2 font-medium">Result</th><th className="px-4 py-2 font-medium">ID</th>
                  <th className="px-4 py-2 font-medium">Subject</th><th className="px-4 py-2 font-medium">System</th><th className="px-4 py-2 font-medium">Time</th><th className="px-4 py-2"><span className="sr-only">Review</span></th></tr>
              </thead>
              <tbody>
                {shown.map((i) => (
                  <tr key={i.id} className="border-t border-line">
                    <td className="px-4 py-2 tabular-nums">{i.position + 1}{i.flagged && <span className="ml-1 text-accent" aria-label="marked">⚑</span>}</td>
                    <td className="px-4 py-2"><Badge tone={i.result === 'correct' ? 'ok' : i.result === 'incorrect' ? 'bad' : 'neutral'}>{i.result}</Badge></td>
                    <td className="px-4 py-2 font-mono text-xs">{i.question.code}</td>
                    <td className="px-4 py-2">{i.question.subject.name}</td>
                    <td className="px-4 py-2">{i.question.system.name}</td>
                    <td className="px-4 py-2 tabular-nums">{fmtDuration(i.timeMs)}</td>
                    <td className="px-4 py-2 text-right"><ReviewLink sessionId={s.id} position={i.position} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </>
  );
}
