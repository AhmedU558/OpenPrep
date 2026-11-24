import { CreateTestForm } from '@/components/create-test-form';
import { PageHeader } from '@/components/ui';
import { db } from '@/lib/db';
import { facets } from '@/lib/questions';
import { resolveUserActiveQuestionPools } from '@/lib/practice-event-sequence';
import { requireUserPage } from '@/lib/session';
import { getCachedPublishedCount } from '@/lib/taxonomy-cache';

export const metadata = { title: 'Create test' };

export default async function CreatePage({ searchParams }: {
  searchParams: Promise<{ collection?: string; pool?: string; mode?: 'TUTOR' | 'TIMED'; exam?: string }>;
}) {
  const user = await requireUserPage();
  const { collection, pool, mode, exam } = await searchParams;
  const [pools, totalPublished, f, markedCount, collections] = await Promise.all([
    resolveUserActiveQuestionPools(db, user.id),
    getCachedPublishedCount(),
    facets({ status: 'PUBLISHED' }),
    db.bookmark.count({ where: { userId: user.id } }),
    db.collection.findMany({ where: { userId: user.id }, select: { id: true, name: true, _count: { select: { items: true } } }, orderBy: { name: 'asc' } }),
  ]);

  const poolCounts: Record<string, number> = {
    all: totalPublished,
    unused: Math.max(0, totalPublished - pools.activeUsed.size),
    incorrect: pools.activeIncorrect.size,
    omitted: pools.activeOmitted.size,
    correct: pools.activeCorrect.size,
    marked: markedCount,
  };

  return (
    <>
      <PageHeader title="Create a test" subtitle="Pick a mode, a question pool and the topics you want. Leave a group empty to include everything." />
      <CreateTestForm
        facets={f}
        poolCounts={poolCounts}
        collections={collections.map((c) => ({ id: c.id, name: c.name, count: c._count.items }))}
        initialCollection={collection}
        initialPool={pool}
        initialMode={mode}
        initialExamId={exam}
      />
    </>
  );
}
