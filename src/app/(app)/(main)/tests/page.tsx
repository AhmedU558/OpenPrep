import Link from 'next/link';
import { Badge, ButtonLink, Card, EmptyState, PageHeader } from '@/components/ui';
import { listSessions } from '@/lib/exam/service';
import { requireUserPage } from '@/lib/session';

export const metadata = { title: 'Previous tests' };

export default async function TestsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const user = await requireUserPage();
  const page = Math.max(1, Number((await searchParams).page) || 1);
  const { rows, total, pageSize } = await listSessions(user.id, page);
  const pages = Math.max(1, Math.ceil(total / pageSize));
  if (!total) return (
    <>
      <PageHeader title="Previous tests" />
      <EmptyState title="No tests yet" action={<ButtonLink href="/create">Create your first test</ButtonLink>}>Tests you start appear here, so you can resume or review them.</EmptyState>
    </>
  );
  return (
    <>
      <PageHeader title="Previous tests" subtitle={`${total} test${total === 1 ? '' : 's'}`} actions={<ButtonLink href="/create">New test</ButtonLink>} />
      <Card className="overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead className="text-left text-muted">
            <tr><th className="px-4 py-2.5 font-medium">Created</th><th className="px-4 py-2.5 font-medium">Name</th><th className="px-4 py-2.5 font-medium">Mode</th>
              <th className="px-4 py-2.5 font-medium">Questions</th><th className="px-4 py-2.5 font-medium">Score</th><th className="px-4 py-2.5 font-medium">Status</th><th className="px-4 py-2.5"><span className="sr-only">Actions</span></th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-line">
                <td className="px-4 py-2.5 whitespace-nowrap">{r.createdAt.toLocaleDateString()}</td>
                <td className="px-4 py-2.5">{r.name ?? (r.practiceExam ? `Practice exam, block ${(r.blockIndex ?? 0) + 1}/${r.practiceExam.blocksTotal}` : 'Custom test')}</td>
                <td className="px-4 py-2.5">{r.mode === 'TUTOR' ? 'Tutor' : 'Timed'}</td>
                <td className="px-4 py-2.5 tabular-nums">{r.total}</td>
                <td className="px-4 py-2.5 tabular-nums">{r.state === 'SUBMITTED' ? `${Math.round((100 * (r.correctCount ?? 0)) / r.total)}%` : '—'}</td>
                <td className="px-4 py-2.5">
                  <Badge tone={r.state === 'SUBMITTED' ? 'ok' : r.state === 'PAUSED' ? 'warn' : 'neutral'}>
                    {{ SUBMITTED: 'Completed', PAUSED: 'Suspended', IN_PROGRESS: 'In progress', CREATED: 'Not started', ABANDONED: 'Discarded' }[r.state]}
                  </Badge>
                </td>
                <td className="px-4 py-2.5 text-right">
                  {r.state === 'SUBMITTED'
                    ? <Link href={`/test/${r.id}/results`} className="text-brand underline">Results</Link>
                    : <Link href={`/test/${r.id}`} className="text-brand underline">{r.state === 'CREATED' ? 'Start' : 'Resume'}</Link>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      {pages > 1 && (
        <nav aria-label="Pagination" className="mt-4 flex justify-center gap-2 text-sm">
          {page > 1 && <Link href={`?page=${page - 1}`} className="rounded-lg border border-line px-3 py-1.5">← Newer</Link>}
          <span className="px-3 py-1.5 text-muted">Page {page} of {pages}</span>
          {page < pages && <Link href={`?page=${page + 1}`} className="rounded-lg border border-line px-3 py-1.5">Older →</Link>}
        </nav>
      )}
    </>
  );
}
