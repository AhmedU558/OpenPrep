import { ImportPanel } from '@/components/admin/admin-widgets';
import { Card, PageHeader } from '@/components/ui';
import { requireRolePage } from '@/lib/session';

export const metadata = { title: 'Import & export · Admin' };

export default async function ImportPage() {
  await requireRolePage('EDITOR');
  return (
    <>
      <PageHeader title="Import & export" subtitle="Only import content you have the right to distribute, and keep its source and license." />
      <div className="grid gap-6 lg:grid-cols-2">
        <ImportPanel />
        <Card className="space-y-3">
          <h2 className="font-semibold">Export</h2>
          <p className="text-sm text-muted">Downloads use the same format as import, so you can edit offline and re-import.</p>
          <div className="flex flex-wrap gap-2 text-sm">
            {['', 'PUBLISHED', 'REVIEW', 'DRAFT', 'ARCHIVED'].map((s) => (
              <a key={s || 'all'} href={`/api/admin/export${s ? `?status=${s}` : ''}`} className="rounded-lg border border-line px-3 py-1.5 capitalize hover:bg-surface-2">{s ? s.toLowerCase() : 'everything'}</a>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
