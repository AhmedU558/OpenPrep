'use client';
import { useRef, useState } from 'react';
import { clipAction } from '@/app/actions/notebook';
import { cardFromQuestionAction, reportAction, saveNoteAction } from '@/app/actions/study';
import type { ExamView } from '@/lib/exam/service';
import { Alert, Button, cx } from '../ui';
import { Dialog } from './tools';

function AskPanel({ questionId }: { questionId: string }) {
  const [q, setQ] = useState('');
  const [a, setA] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const ask = async () => {
    setBusy(true);
    try {
      const r = await fetch('/api/ai/ask', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ questionId, question: q }) });
      const j = await r.json();
      setA(r.ok ? { ok: true, text: j.answer } : { ok: false, text: j.error ?? 'The assistant is unavailable.' });
    } catch { setA({ ok: false, text: 'The assistant is unavailable.' }); }
    finally { setBusy(false); }
  };
  return (
    <div className="mt-6 rounded-xl border border-line bg-surface p-4">
      <label htmlFor="ask" className="text-sm font-semibold">Ask the study assistant</label>
      <p className="text-xs text-muted">AI answers can be wrong. Check them against the explanation.</p>
      <div className="mt-2 flex gap-2">
        <input id="ask" value={q} onChange={(e) => setQ(e.target.value)} maxLength={1000} placeholder="e.g. Why isn't C correct?" className="h-10 w-full rounded-lg border border-line bg-bg px-3 text-sm" />
        <Button size="sm" onClick={ask} disabled={busy || q.trim().length < 3}>{busy ? 'Thinking…' : 'Ask'}</Button>
      </div>
      {/* rendered as plain text, never as HTML */}
      {a && <p className={cx('mt-3 whitespace-pre-wrap text-sm', !a.ok && 'text-bad')}>{a.text}</p>}
    </div>
  );
}

export function Explanation({ view, onChange, ai = false }: { view: ExamView; onChange: (v: ExamView) => void; ai?: boolean }) {
  const q = view.question;
  const r = q.reveal!;
  const ref = useRef<HTMLDivElement>(null);
  const [note, setNote] = useState(q.note);
  const [msg, setMsg] = useState<{ tone: 'ok' | 'bad'; text: string } | null>(null);
  const [reporting, setReporting] = useState(false);
  const [report, setReport] = useState('');

  const flash = (tone: 'ok' | 'bad', text: string) => { setMsg({ tone, text }); setTimeout(() => setMsg(null), 3500); };
  const saveNote = async () => {
    const res = await saveNoteAction(q.id, note);
    if (res.ok) { onChange({ ...view, question: { ...q, note } }); flash('ok', note.trim() ? 'Note saved.' : 'Note removed.'); }
    else flash('bad', res.error);
  };
  const toCard = async (fromSelection: boolean) => {
    const sel = fromSelection ? getSelection()?.toString().trim() ?? '' : '';
    if (fromSelection && (!sel || !ref.current?.contains(getSelection()?.anchorNode ?? null))) return flash('bad', 'Select text in the explanation first.');
    const res = await cardFromQuestionAction(q.id, sel || undefined);
    flash(res.ok ? 'ok' : 'bad', res.ok ? 'Added to your flashcards.' : res.error);
  };
  const clip = async () => {
    const sel = getSelection();
    const text = sel?.toString().trim() ?? '';
    if (!text || !ref.current?.contains(sel?.anchorNode ?? null)) return flash('bad', 'Select text in the explanation first.');
    const res = await clipAction(text, `Question ${q.code}`);
    flash(res.ok ? 'ok' : 'bad', res.ok ? 'Added to your notebook (Inbox).' : res.error);
  };
  const sendReport = async () => {
    const res = await reportAction(q.id, report);
    if (res.ok) { setReporting(false); setReport(''); flash('ok', 'Thanks, an editor will review it.'); }
    else flash('bad', res.error);
  };

  const status = r.omitted ? 'Omitted' : r.isCorrect ? 'Correct' : 'Incorrect';
  return (
    <section aria-labelledby="expl-h" className="mt-8 border-t border-line pt-6">
      <div className={cx('mb-4 rounded-xl px-4 py-3', r.isCorrect ? 'bg-ok-soft text-ok' : 'bg-bad-soft text-bad')} role="status">
        <h2 id="expl-h" className="font-semibold">{status}</h2>
        <p className="text-sm">Correct answer: {q.options.map((o, i) => ('isCorrect' in o && o.isCorrect ? 'ABCDEFGHIJ'[i] : null)).filter(Boolean).join(', ')}</p>
      </div>

      <div ref={ref}>
      <div className="prose-q" dangerouslySetInnerHTML={{ __html: r.explanationHtml }} />

      {q.options.some((o) => 'explanationHtml' in o && o.explanationHtml) && (
        <div className="mt-5 space-y-2">
          <h3 className="font-semibold">Why each choice</h3>
          {q.options.map((o, i) => 'explanationHtml' in o && o.explanationHtml && (
            <div key={o.id} className="rounded-lg border border-line p-3 text-sm">
              <strong>{'ABCDEFGHIJ'[i]}.</strong> <span className="prose-q" dangerouslySetInnerHTML={{ __html: o.explanationHtml }} />
            </div>
          ))}
        </div>
      )}
      </div>

      {(r.objective || r.keyPoints.length > 0) && (
        <div className="mt-5 rounded-xl border-l-4 border-brand bg-brand-soft px-4 py-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">Key takeaway</h3>
          {r.keyPoints.length > 1 ? <ul className="mt-1 list-disc pl-5">{r.keyPoints.map((k) => <li key={k}>{k}</li>)}</ul> : <p className="mt-1">{r.objective ?? r.keyPoints[0]}</p>}
        </div>
      )}

      {r.references.length > 0 && (
        <div className="mt-5">
          <h3 className="text-sm font-semibold">References</h3>
          <ul className="mt-1 list-disc pl-5 text-sm">
            {r.references.map((ref) => <li key={ref.label}>{ref.url ? <a href={ref.url} className="text-brand underline" rel="noopener noreferrer" target="_blank">{ref.label}</a> : ref.label}</li>)}
          </ul>
        </div>
      )}
      <p className="mt-4 text-xs text-muted">Source: {r.source} · License: {r.license}{q.isDemo && ' · Illustrative demo content, not medical advice.'}</p>

      <div className="mt-6 rounded-xl border border-line bg-surface p-4">
        <label htmlFor="note" className="text-sm font-semibold">My notes</label>
        <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} rows={3} maxLength={20000}
          className="mt-2 w-full rounded-lg border border-line bg-bg p-3 text-sm" placeholder="Write it in your own words…" />
        <div className="mt-2 flex flex-wrap gap-2">
          <Button size="sm" onClick={saveNote}>Save note</Button>
          <Button size="sm" variant="secondary" onClick={() => toCard(false)}>+ Flashcard</Button>
          <Button size="sm" variant="secondary" onClick={() => toCard(true)} title="Select text in the explanation first">+ Flashcard from selection</Button>
          <Button size="sm" variant="secondary" onClick={clip} title="Select text in the explanation first">+ Notebook from selection</Button>
          <Button size="sm" variant="ghost" onClick={() => setReporting(true)}>Report an error</Button>
        </div>
        {msg && <div className="mt-3"><Alert tone={msg.tone}>{msg.text}</Alert></div>}
      </div>

      {ai && <AskPanel questionId={q.id} />}

      <Dialog open={reporting} onClose={() => setReporting(false)} title={`Report a problem with ${q.code}`}>
        <label htmlFor="report" className="text-sm">What&apos;s wrong? (incorrect fact, typo, unclear wording…)</label>
        <textarea id="report" value={report} onChange={(e) => setReport(e.target.value)} rows={4} maxLength={2000} className="mt-2 w-full rounded-lg border border-line bg-bg p-3 text-sm" />
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setReporting(false)}>Cancel</Button>
          <Button onClick={sendReport} disabled={report.trim().length < 5}>Send report</Button>
        </div>
      </Dialog>
    </section>
  );
}
