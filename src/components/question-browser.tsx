'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { createTestAction } from '@/app/actions/exam';
import { bookmarkAction, collectionItemAction, createCollectionAction, deleteCollectionAction } from '@/app/actions/study';
import { Button, cx, inputCls } from './ui';

export function QuestionRowActions({ questionId, bookmarked, collections }: { questionId: string; bookmarked: boolean; collections: { id: string; name: string }[] }) {
  const router = useRouter();
  const [mark, setMark] = useState(bookmarked);
  const [msg, setMsg] = useState('');
  const [pending, start] = useTransition();
  const practice = () => start(async () => {
    const r = await createTestAction({ mode: 'TUTOR', count: 1, questionIds: [questionId] });
    if (r.ok) router.push(`/test/${r.data}`); else setMsg(r.error);
  });
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <Button size="sm" onClick={practice} disabled={pending}>Practice</Button>
      <Button size="sm" variant="secondary" aria-pressed={mark} onClick={() => start(async () => {
        const r = await bookmarkAction(questionId, !mark); if (r.ok) setMark(!mark); else setMsg(r.error);
      })}>{mark ? '⚑ Marked' : 'Mark'}</Button>
      {collections.length > 0 && (
        <select aria-label="Add to study list" defaultValue="" className="h-8 rounded-lg border border-line bg-surface px-2 text-sm"
          onChange={(e) => { const id = e.target.value; e.target.value = ''; if (id) start(async () => { const r = await collectionItemAction(id, questionId, true); setMsg(r.ok ? 'Added to list.' : r.error); }); }}>
          <option value="">Add to list…</option>
          {collections.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      )}
      {msg && <span className="text-sm text-muted" role="status">{msg}</span>}
    </div>
  );
}

export function CollectionsPanel({ collections }: { collections: { id: string; name: string; count: number }[] }) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [err, setErr] = useState('');
  const [pending, start] = useTransition();
  return (
    <div className="rounded-xl border border-line bg-surface p-4">
      <h2 className="text-sm font-semibold">Study lists</h2>
      {collections.length === 0 && <p className="mt-1 text-sm text-muted">Group questions into your own sets.</p>}
      <ul className="mt-2 space-y-1">
        {collections.map((c) => (
          <li key={c.id} className="flex items-center gap-2 text-sm">
            <Link href={`/questions?list=${c.id}`} className="flex-1 truncate hover:underline">{c.name}</Link>
            <span className="tabular-nums text-muted">{c.count}</span>
            <Link href={`/create?collection=${c.id}`} className="text-brand underline">Test</Link>
            <button type="button" aria-label={`Delete list ${c.name}`} className="text-muted hover:text-bad"
              onClick={() => confirm(`Delete "${c.name}"? Questions stay in the bank.`) && start(async () => { await deleteCollectionAction(c.id); router.refresh(); })}>✕</button>
          </li>
        ))}
      </ul>
      <form className="mt-3 flex gap-2" onSubmit={(e) => {
        e.preventDefault();
        start(async () => { const r = await createCollectionAction(name); if (r.ok) { setName(''); setErr(''); router.refresh(); } else setErr(r.error); });
      }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New list name" aria-label="New list name" maxLength={60} className={cx(inputCls, 'h-9 text-sm')} />
        <Button size="sm" type="submit" disabled={pending || !name.trim()}>Add</Button>
      </form>
      {err && <p className="mt-1 text-sm text-bad">{err}</p>}
    </div>
  );
}
