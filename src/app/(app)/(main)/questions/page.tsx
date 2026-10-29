import Link from 'next/link';
import { CollectionsPanel, QuestionRowActions } from '@/components/question-browser';
import { Badge, Card, EmptyState, PageHeader, cx, inputCls } from '@/components/ui';
import { db } from '@/lib/db';
import { facets, listQuestions } from '@/lib/questions';
import { requireUserPage } from '@/lib/session';
import { filtersSchema, POOLS } from '@/lib/validation/exam';

export const metadata = { title: 'Question bank' };

type SP = Record<string, string | string[] | undefined>;
const arr = (v: string | string[] | undefined) => (v == null ? [] : Array.isArray(v) ? v : [v]);
const plain = (md: string) => md.replace(/[*_`#>]/g, '').replace(/\s+/g, ' ').trim();

export default async function QuestionsPage({ searchParams }: { searchParams: Promise<SP> }) {
  const user = await requireUserPage();
  const sp = await searchParams;
  const parsed = filtersSchema.safeParse({
    examIds: arr(sp.exam), subjectIds: arr(sp.subject), systemIds: arr(sp.system), topicIds: arr(sp.topic),
    difficulty: arr(sp.difficulty).map(Number).filter((n) => n >= 1 && n <= 5),
    pool: POOLS.includes(sp.pool as never) ? sp.pool : 'all', q: typeof sp.q === 'string' ? sp.q : '',
    collectionId: typeof sp.list === 'string' && sp.list ? sp.list : undefined,
  });
  const f = parsed.success ? parsed.data : filtersSchema.parse({});
  const page = Math.max(1, Number(sp.page) || 1);
  const [{ rows, total, pageSize }, fx, collections] = await Promise.all([
    listQuestions(user.id, f, page),
    facets({ status: 'PUBLISHED' }),
    db.collection.findMany({ where: { userId: user.id }, orderBy: { name: 'asc' }, select: { id: true, name: true, _count: { select: { items: true } } } }),
  ]);
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const qs = (p: number) => {
    const u = new URLSearchParams();
    for (const [k, v] of Object.entries(sp)) if (k !== 'page') arr(v).forEach((x) => u.append(k, x));
    u.set('page', String(p));
    return `?${u}`;
  };
  const checked = (k: string, v: string) => arr(sp[k]).includes(v);

  return (
    <>
      <PageHeader title="Question bank" subtitle={`${total} question${total === 1 ? '' : 's'} match. Explanations unlock once you answer a question.`} />
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-4">
          <form method="get" className="space-y-4 rounded-xl border border-line bg-surface p-4">
            <div>
              <label htmlFor="q" className="text-sm font-semibold">Search</label>
              <input id="q" name="q" defaultValue={f.q} placeholder="Keyword or phrase" maxLength={200} className={cx(inputCls, 'mt-1.5')} />
            </div>
            <div>
              <label htmlFor="pool" className="text-sm font-semibold">Status</label>
              <select id="pool" name="pool" defaultValue={f.pool} className={cx(inputCls, 'mt-1.5 capitalize')}>
                {POOLS.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            {([['exam', 'Exam', fx.exams], ['subject', 'Subject', fx.subjects], ['system', 'System', fx.systems], ['topic', 'Topic', fx.topics]] as const).map(([k, label, items]) => (
              <fieldset key={k}>
                <legend className="text-sm font-semibold">{label}</legend>
                <div className="mt-1.5 max-h-44 space-y-1 overflow-y-auto pr-1">
                  {items.map((i) => (
                    <label key={i.id} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" name={k} value={i.id} defaultChecked={checked(k, i.id)} className="accent-[var(--brand)]" />
                      <span className="flex-1">{i.name}</span><span className="tabular-nums text-muted">{i.count}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
            <fieldset>
              <legend className="text-sm font-semibold">Difficulty</legend>
              <div className="mt-1.5 flex gap-1.5">
                {[1, 2, 3, 4, 5].map((d) => (
                  <label key={d} className="flex items-center gap-1 text-sm"><input type="checkbox" name="difficulty" value={d} defaultChecked={checked('difficulty', String(d))} className="accent-[var(--brand)]" />{d}</label>
                ))}
              </div>
            </fieldset>
            {collections.length > 0 && (
              <div>
                <label htmlFor="list" className="text-sm font-semibold">Study list</label>
                <select id="list" name="list" defaultValue={f.collectionId ?? ''} className={cx(inputCls, 'mt-1.5')}>
                  <option value="">Any</option>
                  {collections.map((c) => <option key={c.id} value={c.id}>{c.name} ({c._count.items})</option>)}
                </select>
              </div>
            )}
            <div className="flex gap-2">
              <button className="h-10 flex-1 rounded-lg bg-brand font-medium text-brand-ink">Apply</button>
              <Link href="/questions" className="grid h-10 place-items-center rounded-lg border border-line px-3 text-sm">Reset</Link>
            </div>
          </form>
          <CollectionsPanel collections={collections.map((c) => ({ id: c.id, name: c.name, count: c._count.items }))} />
        </aside>

        <section aria-label="Results">
          {!parsed.success && <p className="mb-3 text-sm text-bad">Some filters were invalid and were ignored.</p>}
          {rows.length === 0 ? (
            <EmptyState title="No questions match">Try removing a filter or searching a broader term.</EmptyState>
          ) : (
            <ul className="space-y-3">
              {rows.map((r) => {
                const resp = r.responses?.[0];
                const status = !resp ? 'Unused' : resp.omitted ? 'Omitted' : resp.isCorrect ? 'Correct' : 'Incorrect';
                return (
                  <li key={r.id}>
                    <Card className="p-4">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="font-mono text-muted">{r.code}</span>
                        <Badge>{r.exam.name}</Badge><Badge>{r.subject.name}</Badge><Badge>{r.system.name}</Badge>
                        <Badge tone={status === 'Correct' ? 'ok' : status === 'Incorrect' ? 'bad' : 'neutral'}>{status}</Badge>
                        {r.type === 'MULTIPLE' && <Badge tone="warn">Select all</Badge>}
                        {r.source.includes('AI-authored') && <Badge tone="warn">AI-authored · medically unreviewed</Badge>}
                        <span className="text-muted">Difficulty {r.difficulty}/5</span>
                      </div>
                      <p className="mt-2 line-clamp-3 text-[15px]">{plain(r.stemMd)}</p>
                      <QuestionRowActions questionId={r.id} bookmarked={(r.bookmarks?.length ?? 0) > 0} collections={collections.map((c) => ({ id: c.id, name: c.name }))} />
                    </Card>
                  </li>
                );
              })}
            </ul>
          )}
          {pages > 1 && (
            <nav aria-label="Pagination" className="mt-6 flex items-center justify-center gap-2 text-sm">
              {page > 1 && <Link href={qs(page - 1)} className="rounded-lg border border-line px-3 py-1.5">← Previous</Link>}
              <span className="px-3 py-1.5 text-muted">Page {page} of {pages}</span>
              {page < pages && <Link href={qs(page + 1)} className="rounded-lg border border-line px-3 py-1.5">Next →</Link>}
            </nav>
          )}
        </section>
      </div>
    </>
  );
}
