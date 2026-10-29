import Link from 'next/link';
import { Card, PageHeader, Stat } from '@/components/ui';
import { db } from '@/lib/db';
import { requireRolePage } from '@/lib/session';

export const metadata = { title: 'Admin' };

export default async function AdminHome() {
  await requireRolePage('EDITOR');
  const [byStatus, openReports, users, recent] = await Promise.all([
    db.question.groupBy({ by: ['status'], _count: true }),
    db.contentReport.count({ where: { status: 'OPEN' } }),
    db.user.count({ where: { isAnonymous: { not: true } } }),
    db.question.findMany({ orderBy: { updatedAt: 'desc' }, take: 8, select: { id: true, code: true, status: true, updatedAt: true } }),
  ]);
  const n = (s: string) => byStatus.find((b) => b.status === s)?._count ?? 0;
  return (
    <>
      <PageHeader title="Content overview" />
      <div className="mb-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <Stat label="Published" value={n('PUBLISHED')} /><Stat label="In review" value={n('REVIEW')} /><Stat label="Drafts" value={n('DRAFT')} />
        <Stat label="Archived" value={n('ARCHIVED')} /><Stat label="Open reports" value={<Link href="/admin/reports" className="underline">{openReports}</Link>} /><Stat label="Accounts" value={users} />
      </div>
      <Card>
        <h2 className="mb-2 font-semibold">Recently changed</h2>
        <ul className="divide-y divide-line text-sm">
          {recent.map((q) => <li key={q.id} className="flex justify-between py-2"><Link href={`/admin/questions/${q.id}`} className="font-mono text-brand underline">{q.code}</Link><span className="text-muted">{q.status.toLowerCase()} · {q.updatedAt.toLocaleString()}</span></li>)}
        </ul>
      </Card>
    </>
  );
}
