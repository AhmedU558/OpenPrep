'use client';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { createQuestionAction, setStatusAction, updateQuestionAction } from '@/app/actions/admin';
import type { QuestionContent } from '@/lib/validation/content';
import { Alert, Badge, Button, Card, Field, cx, inputCls } from '../ui';

const blank: QuestionContent = {
  code: '', exam: '', subject: '', system: '', type: 'SINGLE', difficulty: 3, stem: '', explanation: '',
  options: [0, 1, 2, 3, 4].map(() => ({ text: '', correct: false })), keyPoints: [], references: [],
  source: '', license: 'CC-BY-SA-4.0',
};

type Meta = { id: string; status: 'DRAFT' | 'REVIEW' | 'PUBLISHED' | 'ARCHIVED'; author: string | null; isDemo: boolean } | null;
type Taxo = { exams: string[]; subjects: string[]; systems: string[] };

export function QuestionEditor({ initial, meta, taxonomy, transitions, canEdit }: {
  initial?: QuestionContent; meta: Meta; taxonomy: Taxo; transitions: string[]; canEdit: boolean;
}) {
  const router = useRouter();
  const [c, setC] = useState<QuestionContent>(initial ?? blank);
  const [refs, setRefs] = useState((initial?.references ?? []).map((r) => (r.url ? `${r.label} | ${r.url}` : r.label)).join('\n'));
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, start] = useTransition();
  const set = <K extends keyof QuestionContent>(k: K, v: QuestionContent[K]) => setC((x) => ({ ...x, [k]: v }));
  const setOpt = (i: number, patch: Partial<QuestionContent['options'][number]>) =>
    set('options', c.options.map((o, j) => (j === i ? { ...o, ...patch } : c.type === 'SINGLE' && patch.correct ? { ...o, correct: false } : o)));

  const save = () => start(async () => {
    const payload = {
      ...c,
      options: c.options.filter((o) => o.text.trim()),
      references: refs.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => { const [label, url] = l.split('|').map((s) => s.trim()); return url ? { label, url } : { label }; }),
      objective: c.objective || undefined, topic: c.topic || undefined, image: c.image || undefined, imageAlt: c.imageAlt || undefined, attribution: c.attribution || undefined,
    };
    const r = meta ? await updateQuestionAction(meta.id, payload) : await createQuestionAction(payload);
    if (!r.ok) return setMsg({ ok: false, text: r.error });
    setMsg({ ok: true, text: 'Saved.' });
    if (!meta && r.data) router.push(`/admin/questions/${r.data}`); else router.refresh();
  });
  const move = (to: string) => start(async () => { const r = await setStatusAction(meta!.id, to); setMsg({ ok: r.ok, text: r.ok ? `Moved to ${to.toLowerCase()}.` : r.error }); router.refresh(); });

  const dl = (id: string, items: string[]) => <datalist id={id}>{items.map((x) => <option key={x} value={x} />)}</datalist>;
  return (
    <div className="space-y-6">
      {meta && (
        <Card className="flex flex-wrap items-center gap-3">
          <span className="text-sm">Status:</span><Badge tone={meta.status === 'PUBLISHED' ? 'ok' : meta.status === 'REVIEW' ? 'warn' : 'neutral'}>{meta.status.toLowerCase()}</Badge>
          {meta.isDemo && <Badge tone="brand">demo content</Badge>}
          <span className="text-sm text-muted">{meta.author ? `Author: ${meta.author}` : 'Seeded content'}</span>
          <div className="ml-auto flex flex-wrap gap-2">
            {transitions.map((t) => <Button key={t} size="sm" variant={t === 'PUBLISHED' ? 'primary' : 'secondary'} onClick={() => move(t)} disabled={pending}>
              {{ DRAFT: 'Back to draft', REVIEW: meta.status === 'PUBLISHED' ? 'Unpublish to review' : 'Submit for review', PUBLISHED: 'Publish', ARCHIVED: 'Archive' }[t]}
            </Button>)}
          </div>
        </Card>
      )}
      {c.source.includes('AI-authored') && <Alert tone="info">AI-authored medical content. Availability status does not certify medical review. Use the review workflow and record a qualified reviewer before removing the unreviewed label.</Alert>}
      {!canEdit && <Alert tone="info">Only admins can edit published or archived questions. Ask an admin to move it back to review.</Alert>}
      <fieldset disabled={!canEdit || pending} className="space-y-6">
        <Card className="grid gap-4 sm:grid-cols-3">
          <Field label="Code" htmlFor="code" hint="Unique, e.g. s1-0101"><input id="code" value={c.code} onChange={(e) => set('code', e.target.value)} className={inputCls} /></Field>
          <Field label="Type" htmlFor="type"><select id="type" value={c.type} onChange={(e) => set('type', e.target.value as 'SINGLE' | 'MULTIPLE')} className={inputCls}><option value="SINGLE">Single best answer</option><option value="MULTIPLE">Select all that apply</option></select></Field>
          <Field label="Difficulty (1–5)" htmlFor="diff"><input id="diff" type="number" min={1} max={5} value={c.difficulty} onChange={(e) => set('difficulty', +e.target.value)} className={inputCls} /></Field>
          <Field label="Exam" htmlFor="exam"><input id="exam" list="dl-exam" value={c.exam} onChange={(e) => set('exam', e.target.value)} className={inputCls} />{dl('dl-exam', taxonomy.exams)}</Field>
          <Field label="Subject" htmlFor="subject"><input id="subject" list="dl-subject" value={c.subject} onChange={(e) => set('subject', e.target.value)} className={inputCls} />{dl('dl-subject', taxonomy.subjects)}</Field>
          <Field label="System" htmlFor="system"><input id="system" list="dl-system" value={c.system} onChange={(e) => set('system', e.target.value)} className={inputCls} />{dl('dl-system', taxonomy.systems)}</Field>
          <Field label="Topic (optional)" htmlFor="topic"><input id="topic" value={c.topic ?? ''} onChange={(e) => set('topic', e.target.value)} className={inputCls} /></Field>
        </Card>
        <Card className="space-y-4">
          <Field label="Question stem (Markdown)" htmlFor="stem"><textarea id="stem" rows={8} value={c.stem} onChange={(e) => set('stem', e.target.value)} className="w-full rounded-lg border border-line bg-bg p-3 font-mono text-sm" /></Field>
          <fieldset>
            <legend className="text-sm font-medium">Options <span className="font-normal text-muted">(tick the correct {c.type === 'SINGLE' ? 'one' : 'ones'}; empty rows are dropped)</span></legend>
            <div className="mt-2 space-y-2">
              {c.options.map((o, i) => (
                <div key={i} className="rounded-lg border border-line p-2">
                  <div className="flex items-center gap-2">
                    <input type={c.type === 'SINGLE' ? 'radio' : 'checkbox'} name="correct" checked={o.correct} onChange={(e) => setOpt(i, { correct: e.target.checked })} aria-label={`Option ${'ABCDEFGHIJ'[i]} is correct`} className="accent-[var(--brand)]" />
                    <span className="w-5 font-semibold">{'ABCDEFGHIJ'[i]}</span>
                    <input value={o.text} onChange={(e) => setOpt(i, { text: e.target.value })} aria-label={`Option ${'ABCDEFGHIJ'[i]} text`} className={cx(inputCls, 'h-9')} />
                    <button type="button" aria-label={`Remove option ${'ABCDEFGHIJ'[i]}`} onClick={() => set('options', c.options.filter((_, j) => j !== i))} className="px-2 text-muted hover:text-bad">✕</button>
                  </div>
                  <input value={o.explanation ?? ''} onChange={(e) => setOpt(i, { explanation: e.target.value })} placeholder="Why this option is right/wrong (optional)" aria-label={`Option ${'ABCDEFGHIJ'[i]} explanation`} className={cx(inputCls, 'mt-1.5 h-8 text-sm')} />
                </div>
              ))}
            </div>
            {c.options.length < 10 && <Button type="button" size="sm" variant="ghost" className="mt-2" onClick={() => set('options', [...c.options, { text: '', correct: false }])}>+ Add option</Button>}
          </fieldset>
          <Field label="Explanation (Markdown)" htmlFor="expl"><textarea id="expl" rows={10} value={c.explanation} onChange={(e) => set('explanation', e.target.value)} className="w-full rounded-lg border border-line bg-bg p-3 font-mono text-sm" /></Field>
          <Field label="Educational objective / key takeaway" htmlFor="obj"><input id="obj" value={c.objective ?? ''} onChange={(e) => set('objective', e.target.value)} className={inputCls} /></Field>
          <Field label="References (one per line: label | https://url)" htmlFor="refs" hint="Only cite sources you have checked. Leave empty rather than invent one."><textarea id="refs" rows={3} value={refs} onChange={(e) => setRefs(e.target.value)} className="w-full rounded-lg border border-line bg-bg p-3 text-sm" /></Field>
        </Card>
        <Card className="grid gap-4 sm:grid-cols-2">
          <Field label="Source" htmlFor="source" hint="Who wrote it or where it came from"><input id="source" value={c.source} onChange={(e) => set('source', e.target.value)} className={inputCls} /></Field>
          <Field label="License" htmlFor="license" hint="e.g. CC-BY-SA-4.0, CC-BY-4.0, CC0-1.0"><input id="license" value={c.license} onChange={(e) => set('license', e.target.value)} className={inputCls} /></Field>
          <Field label="Attribution (optional)" htmlFor="attr"><input id="attr" value={c.attribution ?? ''} onChange={(e) => set('attribution', e.target.value)} className={inputCls} /></Field>
          <Field label="Image URL (optional)" htmlFor="img" hint="Only images you have the right to use"><input id="img" value={c.image ?? ''} onChange={(e) => set('image', e.target.value)} className={inputCls} /></Field>
          <Field label="Image alt text" htmlFor="alt"><input id="alt" value={c.imageAlt ?? ''} onChange={(e) => set('imageAlt', e.target.value)} className={inputCls} /></Field>
        </Card>
      </fieldset>
      {msg && <Alert tone={msg.ok ? 'ok' : 'bad'}>{msg.text}</Alert>}
      {canEdit && <Button onClick={save} disabled={pending}>{meta ? 'Save changes' : 'Create draft'}</Button>}
    </div>
  );
}
