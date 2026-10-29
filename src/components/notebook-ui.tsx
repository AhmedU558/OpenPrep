'use client';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { createPageAction, deletePageAction, updatePageAction } from '@/app/actions/notebook';
import { Alert, Badge, Button, Card, cx, inputCls } from './ui';

export function NewPageForm({ parentId, parentTitle }: { parentId: string | null; parentTitle?: string }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [nested, setNested] = useState(false);
  const [err, setErr] = useState('');
  const [pending, start] = useTransition();
  return (
    <form className="space-y-2 rounded-xl border border-line bg-surface p-3" onSubmit={(e) => {
      e.preventDefault();
      start(async () => {
        const r = await createPageAction(title, nested ? parentId : null);
        if (r.ok) { setTitle(''); setErr(''); router.push(`/notebook?page=${r.data}`); } else setErr(r.error);
      });
    }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New page title" aria-label="New page title" maxLength={120} className={cx(inputCls, 'h-9 text-sm')} />
      {parentId && <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={nested} onChange={(e) => setNested(e.target.checked)} className="accent-[var(--brand)]" /> Inside &ldquo;{parentTitle}&rdquo;</label>}
      <Button size="sm" type="submit" disabled={pending || !title.trim()}>Add page</Button>
      {err && <p className="text-sm text-bad">{err}</p>}
    </form>
  );
}

export function NotebookEditor({ page, bodyHtml }: { page: { id: string; title: string; body: string; tags: string[] }; bodyHtml: string }) {
  const router = useRouter();
  const [editing, setEditing] = useState(!page.body);
  const [title, setTitle] = useState(page.title);
  const [body, setBody] = useState(page.body);
  const [tags, setTags] = useState(page.tags.join(', '));
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, start] = useTransition();
  const save = () => start(async () => {
    const r = await updatePageAction(page.id, { title, body, tags: tags.split(',').map((t) => t.trim()).filter(Boolean) });
    setMsg({ ok: r.ok, text: r.ok ? 'Saved.' : r.error });
    if (r.ok) { setEditing(false); router.refresh(); }
  });
  return (
    <Card>
      {editing ? (
        <div className="space-y-3">
          <input value={title} onChange={(e) => setTitle(e.target.value)} aria-label="Page title" maxLength={120} className={cx(inputCls, 'text-lg font-semibold')} />
          <textarea value={body} onChange={(e) => setBody(e.target.value)} aria-label="Page text (Markdown)" rows={16} maxLength={100000}
            className="w-full rounded-lg border border-line bg-bg p-3 font-mono text-sm" placeholder="Write in Markdown…" />
          <input value={tags} onChange={(e) => setTags(e.target.value)} aria-label="Tags, comma separated" placeholder="Tags, comma separated" className={inputCls} />
          <div className="flex gap-2"><Button onClick={save} disabled={pending}>Save</Button><Button variant="ghost" onClick={() => setEditing(false)}>Cancel</Button></div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h2 className="text-xl font-semibold">{page.title}</h2>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" onClick={() => setEditing(true)}>Edit</Button>
              <Button size="sm" variant="ghost" onClick={() => confirm('Delete this page and any pages inside it?') && start(async () => { await deletePageAction(page.id); router.push('/notebook'); })}>Delete</Button>
            </div>
          </div>
          {page.tags.length > 0 && <div className="mt-2 flex flex-wrap gap-1.5">{page.tags.map((t) => <Badge key={t} tone="brand">#{t}</Badge>)}</div>}
          <div className="prose-q mt-4" dangerouslySetInnerHTML={{ __html: bodyHtml || '<p class="text-muted">Empty page.</p>' }} />
        </>
      )}
      {msg && <div className="mt-3"><Alert tone={msg.ok ? 'ok' : 'bad'}>{msg.text}</Alert></div>}
    </Card>
  );
}
