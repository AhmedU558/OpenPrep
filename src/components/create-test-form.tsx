'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createTestAction } from '@/app/actions/exam';
import type { Facet, Facets } from '@/lib/questions';
import { Alert, Button, Card, cx, inputCls } from './ui';

const POOL_LABEL: Record<string, string> = {
  all: 'All questions', unused: 'Unused', incorrect: 'Incorrect', omitted: 'Omitted', correct: 'Correct', marked: 'Marked',
};

function CheckGroup({ legend, items, value, onChange }: { legend: string; items: Facet[]; value: string[]; onChange: (v: string[]) => void }) {
  const all = value.length === 0;
  return (
    <fieldset>
      <legend className="mb-2 flex w-full items-center justify-between text-sm font-semibold">
        {legend}
        {!all && <button type="button" className="text-xs font-normal text-brand underline" onClick={() => onChange([])}>Clear</button>}
      </legend>
      <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <label key={i.id} className={cx('flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm', value.includes(i.id) ? 'border-brand bg-brand-soft' : 'border-line bg-surface', i.count === 0 && 'opacity-50')}>
            <input type="checkbox" className="accent-[var(--brand)]" checked={value.includes(i.id)} disabled={i.count === 0}
              onChange={(e) => onChange(e.target.checked ? [...value, i.id] : value.filter((x) => x !== i.id))} />
            <span className="flex-1">{i.name}</span>
            <span className="tabular-nums text-muted">{i.count}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function CreateTestForm({ facets, poolCounts, collections, initialCollection }: {
  facets: Facets; poolCounts: Record<string, number>; collections: { id: string; name: string; count: number }[]; initialCollection?: string;
}) {
  const router = useRouter();
  const [mode, setMode] = useState<'TUTOR' | 'TIMED'>('TUTOR');
  const [pool, setPool] = useState('unused');
  const [examIds, setExams] = useState<string[]>([]);
  const [subjectIds, setSubjects] = useState<string[]>([]);
  const [systemIds, setSystems] = useState<string[]>([]);
  const [topicId, setTopic] = useState('');
  const [count, setCount] = useState(10);
  const [blocks, setBlocks] = useState(1);
  const [q, setQ] = useState('');
  const [collectionId, setCollection] = useState(initialCollection ?? '');
  const [negativeMark, setNeg] = useState(0);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    setBusy(true); setError('');
    const r = await createTestAction({
      mode, pool, examIds, subjectIds, systemIds, topicIds: topicId ? [topicId] : [], count, blocks, q, negativeMark,
      collectionId: collectionId || undefined,
    });
    if (r.ok) router.push(`/test/${r.data}`);
    else { setError(r.error); setBusy(false); }
  };

  return (
    <form className="grid gap-6 lg:grid-cols-[1fr_320px]" onSubmit={(e) => { e.preventDefault(); void submit(); }}>
      <div className="space-y-6">
        <Card>
          <fieldset>
            <legend className="mb-3 text-sm font-semibold">Mode</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {([['TUTOR', 'Tutor', 'See the answer and explanation after each question.'], ['TIMED', 'Timed', '90 seconds per question; explanations when the block ends.']] as const).map(([v, t, d]) => (
                <label key={v} className={cx('cursor-pointer rounded-xl border p-3', mode === v ? 'border-brand bg-brand-soft' : 'border-line')}>
                  <input type="radio" name="mode" value={v} checked={mode === v} onChange={() => setMode(v)} className="sr-only" />
                  <span className="font-medium">{t}</span>
                  <span className="mt-0.5 block text-sm text-muted">{d}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </Card>
        <Card>
          <fieldset>
            <legend className="mb-3 text-sm font-semibold">Question pool</legend>
            <div className="flex flex-wrap gap-2">
              {Object.entries(POOL_LABEL).map(([v, label]) => (
                <label key={v} className={cx('cursor-pointer rounded-full border px-3.5 py-1.5 text-sm', pool === v ? 'border-brand bg-brand-soft font-medium text-brand' : 'border-line')}>
                  <input type="radio" name="pool" value={v} checked={pool === v} onChange={() => setPool(v)} className="sr-only" />
                  {label} <span className="tabular-nums text-muted">({poolCounts[v] ?? 0})</span>
                </label>
              ))}
            </div>
          </fieldset>
        </Card>
        <Card className="space-y-6">
          <CheckGroup legend="Exam" items={facets.exams} value={examIds} onChange={setExams} />
          <CheckGroup legend="Subject" items={facets.subjects} value={subjectIds} onChange={setSubjects} />
          <CheckGroup legend="System" items={facets.systems} value={systemIds} onChange={setSystems} />
          <div>
            <label htmlFor="topic" className="text-sm font-semibold">Topic</label>
            <select id="topic" value={topicId} onChange={(e) => setTopic(e.target.value)} className={cx(inputCls, 'mt-1.5')}>
              <option value="">All topics</option>
              {facets.topics.filter(t => t.count > 0).map(t => <option key={t.id} value={t.id}>{t.name} ({t.count})</option>)}
            </select>
          </div>
        </Card>
      </div>
      <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
        <Card className="space-y-4">
          <div>
            <label htmlFor="count" className="text-sm font-semibold">Questions per block</label>
            <input id="count" type="number" min={1} max={40} value={count} onChange={(e) => setCount(Math.max(1, Math.min(40, +e.target.value || 1)))} className={cx(inputCls, 'mt-1.5')} />
          </div>
          <div>
            <label htmlFor="blocks" className="text-sm font-semibold">Blocks</label>
            <input id="blocks" type="number" min={1} max={8} value={blocks} onChange={(e) => setBlocks(Math.max(1, Math.min(8, +e.target.value || 1)))} className={cx(inputCls, 'mt-1.5')} />
            <p className="mt-1 text-xs text-muted">More than one block makes a practice exam with a 45-minute shared break.</p>
          </div>
          <div>
            <label htmlFor="q" className="text-sm font-semibold">Keyword <span className="font-normal text-muted">(optional)</span></label>
            <input id="q" value={q} onChange={(e) => setQ(e.target.value)} maxLength={200} placeholder="e.g. bradykinin" className={cx(inputCls, 'mt-1.5')} />
          </div>
          {collections.length > 0 && (
            <div>
              <label htmlFor="collection" className="text-sm font-semibold">Study list <span className="font-normal text-muted">(optional)</span></label>
              <select id="collection" value={collectionId} onChange={(e) => setCollection(e.target.value)} className={cx(inputCls, 'mt-1.5')}>
                <option value="">Any</option>
                {collections.map((c) => <option key={c.id} value={c.id}>{c.name} ({c.count})</option>)}
              </select>
            </div>
          )}
          <details className="text-sm">
            <summary className="cursor-pointer font-semibold">Advanced</summary>
            <label htmlFor="neg" className="mt-3 block">Negative marking (points per wrong answer)</label>
            <select id="neg" value={negativeMark} onChange={(e) => setNeg(+e.target.value)} className={cx(inputCls, 'mt-1.5')}>
              <option value={0}>None (USMLE style)</option>
              <option value={0.25}>−0.25</option>
              <option value={0.33}>−0.33</option>
              <option value={0.5}>−0.5</option>
            </select>
          </details>
          {error && <Alert>{error}</Alert>}
          <Button type="submit" disabled={busy} className="w-full">{busy ? 'Creating…' : 'Generate test'}</Button>
        </Card>
      </div>
    </form>
  );
}
