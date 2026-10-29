'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, useTransition } from 'react';
import { createCardAction, deleteCardAction, reviewCardAction, updateCardAction } from '@/app/actions/study';
import { Alert, Button, Card, EmptyState, cx, inputCls } from './ui';

type Due = { id: string; frontHtml: string; backHtml: string; preview: Record<1 | 2 | 3 | 4, string> };
const RATINGS = [[1, 'Again'], [2, 'Hard'], [3, 'Good'], [4, 'Easy']] as const;

export function ReviewSession({ cards }: { cards: Due[] }) {
  const router = useRouter();
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [err, setErr] = useState('');
  const [pending, start] = useTransition();
  const shownAt = useRef(0);
  useEffect(() => { shownAt.current = Date.now(); }, [i]); // time spent on each card
  const card = cards[i];

  const rate = (r: 1 | 2 | 3 | 4) => card && start(async () => {
    const res = await reviewCardAction(card.id, r, Date.now() - shownAt.current);
    if (!res.ok) return setErr(res.error);
    setFlipped(false); setI((x) => x + 1);
    if (i + 1 >= cards.length) router.refresh();
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest('input, textarea, select')) return;
      if (e.key === ' ' && !flipped) { e.preventDefault(); setFlipped(true); }
      else if (flipped && ['1', '2', '3', '4'].includes(e.key)) rate(+e.key as 1 | 2 | 3 | 4);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!card) return <div className="mb-8"><EmptyState title={cards.length ? 'Session complete' : 'Nothing due right now'}>Cards come back on schedule. Miss a question and you can turn it into a card from its explanation.</EmptyState></div>;
  return (
    <section aria-label="Review" className="mb-8">
      <div className="mb-2 text-sm text-muted">Card {i + 1} of {cards.length}</div>
      <Card className="min-h-56">
        <div className="prose-q text-lg" dangerouslySetInnerHTML={{ __html: card.frontHtml }} />
        {flipped && <><hr className="my-4 border-line" /><div className="prose-q" dangerouslySetInnerHTML={{ __html: card.backHtml }} /></>}
      </Card>
      {err && <div className="mt-3"><Alert>{err}</Alert></div>}
      <div className="mt-4 flex flex-wrap gap-2">
        {!flipped ? <Button onClick={() => setFlipped(true)}>Show answer <span className="text-xs opacity-75">(space)</span></Button>
          : RATINGS.map(([r, label]) => (
            <Button key={r} variant={r === 1 ? 'danger' : r === 3 ? 'primary' : 'secondary'} onClick={() => rate(r)} disabled={pending}>
              {label} <span className="text-xs opacity-75">{card.preview[r]} · {r}</span>
            </Button>
          ))}
      </div>
    </section>
  );
}

type Row = { id: string; front: string; back: string; frontHtml: string; suspended: boolean; due: string; interval: number; source: string };

export function CardManager({ cards, q }: { cards: Row[]; q: string }) {
  const router = useRouter();
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [editing, setEditing] = useState<Row | null>(null);
  const [err, setErr] = useState('');
  const [pending, start] = useTransition();
  const after = (r: { ok: boolean; error?: string }) => { if (r.ok) { setErr(''); router.refresh(); } else setErr(r.error ?? ''); };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <Card className="p-0">
        <form method="get" className="flex gap-2 border-b border-line p-3">
          <input name="q" defaultValue={q} placeholder="Search your cards" aria-label="Search cards" className={cx(inputCls, 'h-9')} />
          <Button size="sm" type="submit" variant="secondary">Search</Button>
        </form>
        {cards.length === 0 ? <p className="p-6 text-center text-muted">{q ? 'No cards match.' : 'No cards yet.'}</p> : (
          <ul>
            {cards.map((c) => (
              <li key={c.id} className="flex items-start gap-3 border-t border-line p-3 first:border-t-0">
                <div className="min-w-0 flex-1">
                  <div className={cx('prose-q line-clamp-2 text-sm', c.suspended && 'opacity-50')} dangerouslySetInnerHTML={{ __html: c.frontHtml }} />
                  <div className="mt-1 text-xs text-muted">{c.source} · due {c.due} · interval {c.interval}d{c.suspended && ' · suspended'}</div>
                </div>
                <Button size="sm" variant="ghost" onClick={() => setEditing(c)}>Edit</Button>
                <Button size="sm" variant="ghost" onClick={() => start(async () => after(await updateCardAction(c.id, { front: c.front, back: c.back, suspended: !c.suspended })))}>{c.suspended ? 'Unsuspend' : 'Suspend'}</Button>
                <Button size="sm" variant="ghost" onClick={() => confirm('Delete this card?') && start(async () => after(await deleteCardAction(c.id)))}>Delete</Button>
              </li>
            ))}
          </ul>
        )}
      </Card>
      <Card>
        <h2 className="mb-3 font-semibold">{editing ? 'Edit card' : 'New card'}</h2>
        <form className="space-y-3" onSubmit={(e) => {
          e.preventDefault();
          start(async () => {
            if (editing) { after(await updateCardAction(editing.id, { front: editing.front, back: editing.back })); setEditing(null); }
            else { const r = await createCardAction({ front, back }); after(r); if (r.ok) { setFront(''); setBack(''); } }
          });
        }}>
          <label className="block text-sm font-medium" htmlFor="front">Front</label>
          <textarea id="front" rows={3} maxLength={5000} required value={editing ? editing.front : front}
            onChange={(e) => (editing ? setEditing({ ...editing, front: e.target.value }) : setFront(e.target.value))} className="w-full rounded-lg border border-line bg-bg p-2 text-sm" />
          <label className="block text-sm font-medium" htmlFor="back">Back</label>
          <textarea id="back" rows={4} maxLength={5000} required value={editing ? editing.back : back}
            onChange={(e) => (editing ? setEditing({ ...editing, back: e.target.value }) : setBack(e.target.value))} className="w-full rounded-lg border border-line bg-bg p-2 text-sm" />
          <p className="text-xs text-muted">Markdown works: **bold**, *italic*, lists.</p>
          {err && <Alert>{err}</Alert>}
          <div className="flex gap-2">
            <Button type="submit" disabled={pending}>{editing ? 'Save' : 'Add card'}</Button>
            {editing && <Button type="button" variant="ghost" onClick={() => setEditing(null)}>Cancel</Button>}
          </div>
        </form>
      </Card>
    </div>
  );
}
