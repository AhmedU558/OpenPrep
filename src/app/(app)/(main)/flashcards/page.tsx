import { CardManager, ReviewSession } from '@/components/flashcards-ui';
import { PageHeader, Stat } from '@/components/ui';
import { db } from '@/lib/db';
import { renderMarkdown } from '@/lib/markdown';
import { requireUserPage } from '@/lib/session';
import { previewIntervals } from '@/lib/srs';
import { dueCards } from '@/lib/study';
import { deliverableCard } from '@/lib/content-rights';

export const metadata = { title: 'Flashcards' };

export default async function FlashcardsPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const user = await requireUserPage();
  const q = ((await searchParams).q ?? '').slice(0, 100);
  const [{ due, total, reviewedToday }, all] = await Promise.all([
    dueCards(user.id),
    db.card.findMany({
      where: { userId: user.id, AND: [deliverableCard, ...(q ? [{ OR: [{ front: { contains: q, mode: 'insensitive' as const } }, { back: { contains: q, mode: 'insensitive' as const } }] }] : [])] },
      orderBy: { createdAt: 'desc' }, take: 100,
      select: { id: true, front: true, back: true, due: true, interval: true, suspended: true, question: { select: { code: true, subject: { select: { name: true } } } } },
    }),
  ]);
  const now = new Date();
  return (
    <>
      <PageHeader title="Flashcards" subtitle="Spaced repetition: cards you know come back less often; cards you miss come back soon." />
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Due now" value={due.length} />
        <Stat label="Reviewed today" value={reviewedToday} />
        <Stat label="Total cards" value={total} />
      </div>
      <ReviewSession cards={due.map((c) => ({ id: c.id, frontHtml: c.frontHtml, backHtml: c.backHtml, preview: previewIntervals(c, now) }))} />
      <CardManager q={q} cards={all.map((c) => ({
        id: c.id, front: c.front, back: c.back, frontHtml: renderMarkdown(c.front), suspended: c.suspended,
        due: c.due.toISOString().slice(0, 10), interval: c.interval, source: c.question ? `${c.question.code} · ${c.question.subject.name}` : 'Your card',
      }))} />
    </>
  );
}
