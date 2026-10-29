import { CreateTestForm } from '@/components/create-test-form';
import { PageHeader } from '@/components/ui';
import { db } from '@/lib/db';
import { facets, questionWhere } from '@/lib/questions';
import { requireUserPage } from '@/lib/session';
import { filtersSchema, POOLS } from '@/lib/validation/exam';

export const metadata = { title: 'Create test' };

export default async function CreatePage({ searchParams }: { searchParams: Promise<{ collection?: string }> }) {
  const user = await requireUserPage();
  const { collection } = await searchParams;
  const [f, poolCounts, collections] = await Promise.all([
    facets({ status: 'PUBLISHED' }),
    Promise.all(POOLS.map(async (pool) => [pool, await db.question.count({ where: await questionWhere(user.id, filtersSchema.parse({ pool })) })] as const)),
    db.collection.findMany({ where: { userId: user.id }, select: { id: true, name: true, _count: { select: { items: true } } }, orderBy: { name: 'asc' } }),
  ]);
  return (
    <>
      <PageHeader title="Create a test" subtitle="Pick a mode, a question pool and the topics you want. Leave a group empty to include everything." />
      <CreateTestForm
        facets={f}
        poolCounts={Object.fromEntries(poolCounts)}
        collections={collections.map((c) => ({ id: c.id, name: c.name, count: c._count.items }))}
        initialCollection={collection}
      />
    </>
  );
}
