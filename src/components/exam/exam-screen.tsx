'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';
import * as A from '@/app/actions/exam';
import type { ActionResult } from '@/lib/errors';
import type { ExamView } from '@/lib/exam/service';
import { Alert, Badge, Button, cx, fmtDuration } from '../ui';
import { Explanation } from './explanation';
import { Calculator, Dialog, LabValues } from './tools';

const LETTERS = 'ABCDEFGHIJ';

export function ExamScreen({ initial, ai = false }: { initial: ExamView; ai?: boolean }) {
  const router = useRouter();
  const [view, setView] = useState(initial);
  const [error, setError] = useState('');
  const [pending, start] = useTransition();
  const [dialog, setDialog] = useState<null | 'labs' | 'calc' | 'end' | 'navigator'>(null);
  const stemRef = useRef<HTMLDivElement>(null);
  const { session: s, item, question: q } = view;
  const review = s.state === 'SUBMITTED';
  const locked = item.state === 'LOCKED';
  const running = s.state === 'IN_PROGRESS';

  // timer display is anchored to when the server's numbers arrived; the server stays the source of truth
  const [stamp, setStamp] = useState(() => Date.now());
  const run = useCallback((fn: () => Promise<ActionResult<ExamView>>) => {
    start(async () => {
      const r = await fn();
      if (r.ok) { setView(r.data); setStamp(Date.now()); setError(''); }
      else if (r.code === 'EXPIRED') router.replace(`/test/${s.id}/results?expired=1`);
      else setError(r.error);
    });
  }, [router, s.id]);

  // start / resume on first load (server checks the deadline and may auto-submit)
  useEffect(() => { if (!review) run(() => A.openAction(s.id)); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ---- timer: display only; the server decides
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 500); return () => clearInterval(t); }, []);
  const elapsed = running ? now - stamp : 0;
  const remaining = s.remainingMs == null ? null : Math.max(0, s.remainingMs - elapsed);
  const expiredSent = useRef(false);
  useEffect(() => {
    if (remaining === 0 && running && !expiredSent.current) {
      expiredSent.current = true;
      start(async () => { await A.submitAction(s.id); router.replace(`/test/${s.id}/results?expired=1`); });
    }
  }, [remaining, running, router, s.id]);

  const go = (p: number) => { if (p >= 0 && p < s.total && p !== s.position) run(() => A.navigateAction(s.id, p)); };
  const choose = (optionId: string) => {
    if (!running || locked) return;
    const next = q.type === 'SINGLE' ? [optionId]
      : item.selectedOptionIds.includes(optionId) ? item.selectedOptionIds.filter((x) => x !== optionId) : [...item.selectedOptionIds, optionId];
    setView((v) => ({ ...v, item: { ...v.item, selectedOptionIds: next } })); // optimistic
    run(() => A.answerAction(s.id, s.position, next));
  };
  const strike = (optionId: string) => {
    if (locked && !review) return;
    const next = item.struckOptionIds.includes(optionId) ? item.struckOptionIds.filter((x) => x !== optionId) : [...item.struckOptionIds, optionId];
    run(() => A.strikeAction(s.id, s.position, next));
  };
  const toggleFlag = () => {
    const flagged = !item.flagged;
    setView((v) => ({ ...v, item: { ...v.item, flagged } })); // optimistic
    run(() => A.flagAction(s.id, s.position, flagged));
  };
  const submitItem = () => run(() => A.submitItemAction(s.id, s.position));
  const highlight = () => {
    const sel = getSelection();
    const el = stemRef.current;
    if (!sel || sel.isCollapsed || !el || !el.contains(sel.anchorNode) || !el.contains(sel.focusNode)) { setError('Select text in the question first.'); return; }
    const range = sel.getRangeAt(0);
    try { range.surroundContents(document.createElement('mark')); } catch { setError('Highlight within one paragraph at a time.'); return; }
    sel.removeAllRanges();
    run(() => A.highlightAction(s.id, s.position, el.innerHTML));
  };
  const clearHighlights = () => run(() => A.highlightAction(s.id, s.position, ''));
  const pause = () => start(async () => { const r = await A.pauseAction(s.id); if (r.ok) router.push('/tests'); else setError(r.error); });
  const endBlock = () => start(async () => {
    const r = await A.submitAction(s.id);
    if (r.ok) router.replace(`/test/${s.id}/results`); else setError(r.error);
  });

  // ---- keyboard: A–J choose, ←/→ move, Enter submit (tutor), M mark
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (dialog || e.ctrlKey || e.metaKey || e.altKey || t.closest('input, textarea, select, [contenteditable]')) return;
      const k = e.key.toUpperCase();
      if (e.key === 'ArrowRight') { e.preventDefault(); go(s.position + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(s.position - 1); }
      else if (k === 'M') toggleFlag();
      else if (e.key === 'Enter' && s.mode === 'TUTOR' && running && !locked && item.selectedOptionIds.length && !t.closest('button')) submitItem();
      else if (k.length === 1 && LETTERS.indexOf(k) >= 0 && LETTERS.indexOf(k) < q.options.length) choose(q.options[LETTERS.indexOf(k)]!.id);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const answeredCount = view.nav.filter((n) => n.answered).length;

  return (
    <div className="flex min-h-screen flex-col">
      {/* top bar */}
      <div className="sticky top-0 z-20 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line bg-surface px-4 py-2">
        <Link href={review ? `/test/${s.id}/results` : '/dashboard'} className="rounded-lg px-2 py-1 text-sm text-muted hover:bg-surface-2"
          onClick={(e) => { if (running) { e.preventDefault(); pause(); } }} title={running ? 'Suspend and leave' : 'Leave'}>← Exit</Link>
        <button type="button" className="rounded-lg px-2 py-1 text-sm hover:bg-surface-2 md:hidden" onClick={() => setDialog('navigator')}>☰ Questions</button>
        <div className="text-sm">
          {s.block && <span className="mr-3 text-muted">Block {s.block.index} of {s.block.total}</span>}
          <strong>Item {s.position + 1}</strong> <span className="text-muted">of {s.total}</span>
          <span className="ml-3 text-muted">ID {q.code}</span>
        </div>
        <label className="flex items-center gap-1.5 text-sm">
          <input type="checkbox" checked={item.flagged} onChange={toggleFlag} className="accent-[var(--accent)]" /> Mark
        </label>
        <div className="ml-auto flex flex-wrap items-center gap-1">
          <span className={cx('mr-2 font-mono text-sm tabular-nums', remaining != null && remaining < 60_000 && 'text-bad')} aria-live="off" role="timer"
            aria-label={remaining != null ? 'Time remaining in block' : 'Time on this question'}>
            {review ? 'Review' : remaining != null ? `⏱ ${fmtDuration(remaining)}` : `⏱ ${fmtDuration(item.timeMs + (locked ? 0 : elapsed))}`}
          </span>
          <Button size="sm" variant="ghost" onClick={highlight} title="Select text in the question, then click">Highlight</Button>
          <Button size="sm" variant="ghost" onClick={clearHighlights}>Clear</Button>
          <Button size="sm" variant="ghost" onClick={() => setDialog('labs')}>Lab values</Button>
          <Button size="sm" variant="ghost" onClick={() => setDialog('calc')}>Calculator</Button>
        </div>
      </div>

      <div className="flex flex-1">
        {/* navigator */}
        <nav aria-label="Questions in this test" className="sticky top-[49px] hidden max-h-[calc(100vh-110px)] w-20 shrink-0 self-start overflow-y-auto border-r border-line bg-surface p-2 md:block">
          <Navigator view={view} go={go} />
        </nav>

        <main id="main" className="min-w-0 flex-1 px-4 py-6 md:px-8">
          <div className="mx-auto max-w-3xl">
            {error && <div className="mb-4"><Alert>{error}</Alert></div>}
            <div className="mb-3 flex flex-wrap gap-2 text-xs">
              <Badge>{q.exam}</Badge><Badge>{q.subject}</Badge><Badge>{q.system}</Badge>
              {q.type === 'MULTIPLE' && <Badge tone="warn">Select all that apply</Badge>}
              {q.isDemo && <Badge tone="brand">Demo content</Badge>}
              {q.isAiAuthored && <Badge tone="warn">AI-authored · medically unreviewed</Badge>}
            </div>
            <div ref={stemRef} className="prose-q text-[1.05rem]" dangerouslySetInnerHTML={{ __html: item.stemHtml }} />
            {q.imageUrl && <img src={q.imageUrl} alt={q.imageAlt ?? 'Question image'} className="my-4 max-h-96 rounded-lg border border-line" />}

            <div role={q.type === 'SINGLE' ? 'radiogroup' : 'group'} aria-label="Answer choices" className="mt-6 space-y-2">
              {q.options.map((o, idx) => {
                const selected = item.selectedOptionIds.includes(o.id);
                const struck = item.struckOptionIds.includes(o.id);
                const correct = 'isCorrect' in o ? o.isCorrect : undefined;
                return (
                  <div key={o.id} onContextMenu={(e) => { e.preventDefault(); strike(o.id); }}
                    className={cx('group flex items-start gap-3 rounded-xl border px-4 py-3 transition-colors',
                      correct === true ? 'border-ok bg-ok-soft' : correct === false && selected ? 'border-bad bg-bad-soft' : selected ? 'border-brand bg-brand-soft' : 'border-line bg-surface hover:border-brand/50')}>
                    <button type="button" role={q.type === 'SINGLE' ? 'radio' : 'checkbox'} aria-checked={selected} disabled={!running || locked}
                      onClick={() => choose(o.id)} className="flex flex-1 items-start gap-3 text-left disabled:cursor-default">
                      <span className={cx('mt-0.5 grid h-6 w-6 shrink-0 place-items-center border text-xs font-semibold', q.type === 'SINGLE' ? 'rounded-full' : 'rounded-md',
                        selected ? 'border-brand bg-brand text-brand-ink' : 'border-line')}>{LETTERS[idx]}</span>
                      <span className={cx('pt-0.5', struck && 'text-muted line-through')}>{o.text}</span>
                    </button>
                    {correct !== undefined && <span className="pt-0.5 text-sm font-medium" aria-label={correct ? 'Correct answer' : undefined}>{correct ? '✓' : selected ? '✗' : ''}</span>}
                    <button type="button" onClick={() => strike(o.id)} aria-label={`${struck ? 'Unstrike' : 'Strike out'} choice ${LETTERS[idx]}`}
                      className="rounded px-1.5 text-xs text-muted opacity-60 hover:bg-surface-2 hover:opacity-100 focus:opacity-100 group-hover:opacity-100">S</button>
                  </div>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-muted">Keys: A–{LETTERS[q.options.length - 1]} choose · ←/→ move · M mark{s.mode === 'TUTOR' ? ' · Enter submit' : ''} · right-click or S to strike out</p>

            {q.reveal && <Explanation view={view} onChange={setView} ai={ai} />}
          </div>
        </main>
      </div>

      {/* bottom bar */}
      <div className="sticky bottom-0 z-20 flex flex-wrap items-center gap-2 border-t border-line bg-surface px-4 py-2.5">
        <Button variant="secondary" onClick={() => go(s.position - 1)} disabled={s.position === 0 || pending}>← Previous</Button>
        {s.mode === 'TUTOR' && running && !locked && (
          <Button onClick={submitItem} disabled={!item.selectedOptionIds.length || pending}>Submit answer</Button>
        )}
        <Button variant="secondary" onClick={() => go(s.position + 1)} disabled={s.position >= s.total - 1 || pending}>Next →</Button>
        <span className="ml-auto text-sm text-muted" aria-live="polite">{pending ? 'Saving…' : `${answeredCount}/${s.total} answered`}</span>
        {review ? (
          <Link href={`/test/${s.id}/results`} className="rounded-lg border border-line px-4 py-2 text-sm hover:bg-surface-2">Back to results</Link>
        ) : (
          <>
            <Button variant="ghost" onClick={pause} disabled={pending}>Suspend</Button>
            <Button variant="danger" onClick={() => setDialog('end')} disabled={pending}>End block</Button>
          </>
        )}
      </div>

      <Dialog open={dialog === 'labs'} onClose={() => setDialog(null)} title="Lab values"><LabValues /></Dialog>
      <Dialog open={dialog === 'calc'} onClose={() => setDialog(null)} title="Calculator"><Calculator /></Dialog>
      <Dialog open={dialog === 'navigator'} onClose={() => setDialog(null)} title="Questions"><Navigator view={view} go={(p) => { setDialog(null); go(p); }} grid /></Dialog>
      <Dialog open={dialog === 'end'} onClose={() => setDialog(null)} title="End this block?">
        <p>{answeredCount} of {s.total} answered. {s.total - answeredCount > 0 && `${s.total - answeredCount} unanswered questions will count as omitted.`}</p>
        <p className="mt-2 text-sm text-muted">You can review every question and explanation afterwards.</p>
        <div className="mt-5 flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setDialog(null)}>Keep working</Button>
          <Button variant="danger" onClick={endBlock} disabled={pending}>End block</Button>
        </div>
      </Dialog>
    </div>
  );
}

function Navigator({ view, go, grid }: { view: ExamView; go: (p: number) => void; grid?: boolean }) {
  return (
    <ol className={cx(grid ? 'grid grid-cols-6 gap-2' : 'space-y-1')}>
      {view.nav.map((n) => (
        <li key={n.position}>
          <button type="button" onClick={() => go(n.position)} aria-current={n.position === view.session.position ? 'step' : undefined}
            aria-label={`Question ${n.position + 1}${n.answered ? ', answered' : ''}${n.flagged ? ', marked' : ''}${n.result ? `, ${n.result}` : ''}`}
            className={cx('flex h-9 w-full items-center justify-center gap-1 rounded-lg border text-sm tabular-nums',
              n.position === view.session.position ? 'border-brand ring-2 ring-brand/40' : 'border-line',
              n.result === 'correct' ? 'bg-ok-soft text-ok' : n.result === 'incorrect' ? 'bg-bad-soft text-bad' : n.answered ? 'bg-surface-2' : 'bg-surface')}>
            {n.position + 1}{n.flagged && <span className="text-accent" aria-hidden="true">⚑</span>}
          </button>
        </li>
      ))}
    </ol>
  );
}
