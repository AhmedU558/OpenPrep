import Link from 'next/link';
import { NotebookEditor, NewPageForm } from '@/components/notebook-ui';
import { Card, EmptyState, PageHeader, cx, inputCls } from '@/components/ui';
import { db } from '@/lib/db';
import { renderMarkdown } from '@/lib/markdown';
import { getPage, listPages } from '@/lib/notebook';
import { requireUserPage } from '@/lib/session';

export const metadata = { title: 'Notebook' };

type P = { id: string; title: string; parentId: string | null; tags: string[] };

function Tree({ pages, parent, current, depth = 0 }: { pages: P[]; parent: string | null; current?: string; depth?: number }) {
  const kids = pages.filter((p) => p.parentId === parent);
  if (!kids.length) return null;
  return (
    <ul className={cx(depth > 0 && 'ml-3 border-l border-line pl-2')}>
      {kids.map((p) => (
        <li key={p.id}>
          <Link href={`/notebook?page=${p.id}`} aria-current={p.id === current ? 'page' : undefined}
            className={cx('block truncate rounded-md px-2 py-1 text-sm', p.id === current ? 'bg-brand-soft font-medium text-brand' : 'hover:bg-surface-2')}>{p.title}</Link>
          <Tree pages={pages} parent={p.id} current={current} depth={depth + 1} />
        </li>
      ))}
    </ul>
  );
}

export default async function NotebookPage({ searchParams }: { searchParams: Promise<{ page?: string; q?: string; tab?: string }> }) {
  const user = await requireUserPage();
  const sp = await searchParams;
  const q = sp.q ?? '';
  const [pages, page, notes] = await Promise.all([
    listPages(user.id, q),
    sp.page ? getPage(user.id, sp.page).catch(() => null) : null,
    sp.tab === 'notes' ? db.note.findMany({ where: { userId: user.id }, orderBy: { updatedAt: 'desc' }, take: 100, include: { question: { select: { code: true, subject: { select: { name: true } }, system: { select: { name: true } } } } } }) : null,
  ]);
  // when searching, show matches flat (a parent may not match)
  const shown: P[] = q ? pages.map((p) => ({ ...p, parentId: null })) : pages;

  return (
    <>
      <PageHeader title="Notebook" subtitle="Your own study notes. Clip text from explanations, organize it in pages, and tag it for search." />
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-4">
          <div className="flex gap-2 text-sm">
            <Link href="/notebook" className={cx('rounded-full px-3 py-1', sp.tab !== 'notes' ? 'bg-brand text-brand-ink' : 'bg-surface')}>Pages</Link>
            <Link href="/notebook?tab=notes" className={cx('rounded-full px-3 py-1', sp.tab === 'notes' ? 'bg-brand text-brand-ink' : 'bg-surface')}>Question notes</Link>
          </div>
          <form method="get"><input name="q" defaultValue={q} placeholder="Search title, text or tag" aria-label="Search notebook" className={inputCls} /></form>
          <Card className="p-3">
            {shown.length ? <Tree pages={shown} parent={null} current={page?.id} /> : <p className="p-2 text-sm text-muted">{q ? 'Nothing matches.' : 'No pages yet.'}</p>}
          </Card>
          <NewPageForm parentId={page?.id ?? null} parentTitle={page?.title} />
        </aside>
        <section>
          {notes ? (
            notes.length ? (
              <ul className="space-y-3">
                {notes.map((n) => (
                  <li key={n.id}><Card className="p-4">
                    <div className="text-xs text-muted">{n.question.code} · {n.question.subject.name} · {n.question.system.name} · {n.updatedAt.toLocaleDateString()}</div>
                    <div className="prose-q mt-1 text-sm" dangerouslySetInnerHTML={{ __html: renderMarkdown(n.body) }} />
                  </Card></li>
                ))}
              </ul>
            ) : <EmptyState title="No question notes yet">Write a note under any explanation and it will show up here.</EmptyState>
          ) : page ? (
            <NotebookEditor key={page.id} page={{ id: page.id, title: page.title, body: page.body, tags: page.tags }} bodyHtml={renderMarkdown(page.body)} />
          ) : (
            <EmptyState title="Pick or create a page">Clips from explanations go to an &ldquo;Inbox&rdquo; page automatically.</EmptyState>
          )}
        </section>
      </div>
    </>
  );
}
