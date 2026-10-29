import Link from 'next/link';
import { Card, PageHeader } from '@/components/ui';
import { listAudit } from '@/lib/admin';
import { requireRolePage } from '@/lib/session';

export const metadata = { title: 'Audit log · Admin' };

export default async function AuditPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const actor = await requireRolePage('ADMIN');
  const page = Math.max(1, Number((await searchParams).page) || 1);
  const { rows, total, pageSize } = await listAudit(actor, page);
  const pages = Math.max(1, Math.ceil(total / pageSize));
  return (
    <>
      <PageHeader title="Audit log" subtitle="Every administrative change: who, what, when." />
      <Card className="overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead className="text-left text-muted"><tr><th className="px-4 py-2 font-medium">When</th><th className="px-4 py-2 font-medium">Who</th><th className="px-4 py-2 font-medium">Action</th><th className="px-4 py-2 font-medium">Target</th><th className="px-4 py-2 font-medium">Details</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-line align-top">
                <td className="px-4 py-2 whitespace-nowrap">{r.createdAt.toLocaleString()}</td>
                <td className="px-4 py-2">{r.actor?.name ?? 'deleted user'}</td>
                <td className="px-4 py-2 font-mono text-xs">{r.action}</td>
                <td className="px-4 py-2">{r.entityType === 'question' && r.entityId !== '*' ? <Link href={`/admin/questions/${r.entityId}`} className="text-brand underline">{r.entityType}</Link> : r.entityType}</td>
                <td className="px-4 py-2 font-mono text-xs break-all">{JSON.stringify(r.diff)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      {pages > 1 && <nav aria-label="Pagination" className="mt-4 flex justify-center gap-3 text-sm">
        {page > 1 && <Link href={`?page=${page - 1}`} className="underline">← Newer</Link>}<span className="text-muted">Page {page} of {pages}</span>{page < pages && <Link href={`?page=${page + 1}`} className="underline">Older →</Link>}
      </nav>}
    </>
  );
}
