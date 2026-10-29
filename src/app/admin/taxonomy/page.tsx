import { TaxonomyList } from '@/components/admin/admin-widgets';
import { PageHeader } from '@/components/ui';
import { db } from '@/lib/db';
import { requireRolePage } from '@/lib/session';

export const metadata = { title: 'Taxonomy · Admin' };

export default async function TaxonomyPage() {
  await requireRolePage('ADMIN');
  const [exams, subjects, systems] = await Promise.all([
    db.exam.findMany({ orderBy: { position: 'asc' }, include: { _count: { select: { questions: true } } } }),
    db.subject.findMany({ orderBy: { name: 'asc' }, include: { _count: { select: { questions: true } } } }),
    db.system.findMany({ orderBy: { name: 'asc' }, include: { _count: { select: { questions: true } } } }),
  ]);
  const m = (xs: { id: string; name: string; _count: { questions: number } }[]) => xs.map((x) => ({ id: x.id, name: x.name, count: x._count.questions }));
  return (
    <>
      <PageHeader title="Taxonomy" subtitle="Exams, subjects and systems used to organize and filter questions. Items in use can't be deleted." />
      <div className="grid gap-6 lg:grid-cols-3">
        <TaxonomyList kind="exam" items={m(exams)} />
        <TaxonomyList kind="subject" items={m(subjects)} />
        <TaxonomyList kind="system" items={m(systems)} />
      </div>
    </>
  );
}
