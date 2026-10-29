import Link from 'next/link';
import { ReportActions } from '@/components/admin/admin-widgets';
import { Card, EmptyState, PageHeader } from '@/components/ui';
import { listReports } from '@/lib/admin';
import { requireRolePage } from '@/lib/session';

export const metadata = { title: 'Error reports · Admin' };

export default async function ReportsPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const actor = await requireRolePage('EDITOR');
  const status = (await searchParams).status ?? 'OPEN';
  const reports = await listReports(actor, status);
  return (
    <>
      <PageHeader title="Error reports" subtitle="Problems learners flagged in questions." />
      <div className="mb-4 flex gap-2 text-sm">
        {['OPEN', 'RESOLVED', 'DISMISSED'].map((s) => <Link key={s} href={`?status=${s}`} className={`rounded-full px-3 py-1 capitalize ${status === s ? 'bg-brand text-brand-ink' : 'bg-surface'}`}>{s.toLowerCase()}</Link>)}
      </div>
      {reports.length === 0 ? <EmptyState title="Nothing here">No {status.toLowerCase()} reports.</EmptyState> : (
        <ul className="space-y-3">
          {reports.map((r) => (
            <li key={r.id}><Card className="flex flex-wrap items-start gap-4 p-4">
              <div className="min-w-0 flex-1">
                <div className="text-xs text-muted"><Link href={`/admin/questions/${r.question.id}`} className="font-mono text-brand underline">{r.question.code}</Link> · {r.user.name} · {r.createdAt.toLocaleString()}</div>
                <p className="mt-1 whitespace-pre-wrap text-sm">{r.message}</p>
              </div>
              {r.status === 'OPEN' && <ReportActions id={r.id} />}
            </Card></li>
          ))}
        </ul>
      )}
    </>
  );
}
