import Link from 'next/link';
import { Badge, ButtonLink, Card, PageHeader, inputCls } from '@/components/ui';
import { listQuestionsAdmin } from '@/lib/admin';
import { requireRolePage } from '@/lib/session';

export const metadata = { title: 'Questions · Admin' };
const STATUSES = ['DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED'] as const;
const tone = { DRAFT: 'neutral', REVIEW: 'warn', PUBLISHED: 'ok', ARCHIVED: 'bad' } as const;

export default async function AdminQuestions({ searchParams }: { searchParams: Promise<{ status?: string; q?: string; page?: string }> }) {
  const actor = await requireRolePage('EDITOR');
  const sp = await searchParams;
  const { rows, total, page, pageSize, counts } = await listQuestionsAdmin(actor, { status: sp.status, q: sp.q, page: Number(sp.page) || 1 });
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const link = (o: Record<string, string | number | undefined>) => `?${new URLSearchParams(Object.entries({ status: sp.status, q: sp.q, ...o }).filter(([, v]) => v != null && v !== '') as [string, string][])}`;
  return (
    <>
      <PageHeader title="Questions" subtitle={`${total} shown`} actions={<ButtonLink href="/admin/questions/new">New question</ButtonLink>} />
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Link href={link({ status: undefined, page: undefined })} className={`rounded-full px-3 py-1 text-sm ${!sp.status ? 'bg-brand text-brand-ink' : 'bg-surface'}`}>All</Link>
        {STATUSES.map((s) => <Link key={s} href={link({ status: s, page: undefined })} className={`rounded-full px-3 py-1 text-sm capitalize ${sp.status === s ? 'bg-brand text-brand-ink' : 'bg-surface'}`}>{s.toLowerCase()} ({counts[s] ?? 0})</Link>)}
        <form method="get" className="ml-auto">{sp.status && <input type="hidden" name="status" value={sp.status} />}<input name="q" defaultValue={sp.q} placeholder="Code or text" aria-label="Search questions" className={`${inputCls} h-9 w-56`} /></form>
      </div>
      <Card className="overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead className="text-left text-muted"><tr><th className="px-4 py-2 font-medium">Code</th><th className="px-4 py-2 font-medium">Status</th><th className="px-4 py-2 font-medium">Exam / subject</th><th className="px-4 py-2 font-medium">Stem</th><th className="px-4 py-2 font-medium">Reports</th><th className="px-4 py-2 font-medium">Updated</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-line">
                <td className="px-4 py-2"><Link href={`/admin/questions/${r.id}`} className="font-mono text-brand underline">{r.code}</Link></td>
                <td className="px-4 py-2"><Badge tone={tone[r.status]}>{r.status.toLowerCase()}</Badge></td>
                <td className="px-4 py-2 whitespace-nowrap">{r.exam.name} · {r.subject.name}</td>
                <td className="max-w-md truncate px-4 py-2">{r.stemMd.slice(0, 120)}</td>
                <td className="px-4 py-2 tabular-nums">{r._count.reports || ''}</td>
                <td className="px-4 py-2 whitespace-nowrap text-muted">{r.updatedAt.toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      {pages > 1 && <nav aria-label="Pagination" className="mt-4 flex justify-center gap-3 text-sm">
        {page > 1 && <Link href={link({ page: page - 1 })} className="underline">← Previous</Link>}<span className="text-muted">Page {page} of {pages}</span>{page < pages && <Link href={link({ page: page + 1 })} className="underline">Next →</Link>}
      </nav>}
    </>
  );
}
