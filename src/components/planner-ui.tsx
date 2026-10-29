'use client';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { createTestAction } from '@/app/actions/exam';
import { deletePlanAction, moveTaskAction, savePlanAction, taskDoneAction, taskTargetAction } from '@/app/actions/plan';
import { Alert, Button, Card, Meter, cx, inputCls } from './ui';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type PlanDefaults = { examId: string | null; startDate: string; examDate: string; hoursPerDay: number; questionsPerHour: number; restDays: number[] };

export function PlanForm({ exams, initial, hasPlan }: { exams: { id: string; name: string }[]; initial: PlanDefaults; hasPlan: boolean }) {
  const router = useRouter();
  const [p, setP] = useState(initial);
  const [err, setErr] = useState('');
  const [pending, start] = useTransition();
  const save = (fromToday: boolean) => start(async () => {
    const r = await savePlanAction(p, fromToday);
    if (r.ok) { setErr(''); router.refresh(); } else setErr(r.error);
  });
  return (
    <Card>
      <h2 className="mb-4 font-semibold">{hasPlan ? 'Plan settings' : 'Build your plan'}</h2>
      <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); save(false); }}>
        <div>
          <label htmlFor="exam" className="text-sm font-medium">Exam</label>
          <select id="exam" value={p.examId ?? ''} onChange={(e) => setP({ ...p, examId: e.target.value || null })} className={cx(inputCls, 'mt-1.5')}>
            <option value="">All exams</option>
            {exams.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="hours" className="text-sm font-medium">Study hours per day</label>
          <input id="hours" type="number" min={0.5} max={16} step={0.5} value={p.hoursPerDay} onChange={(e) => setP({ ...p, hoursPerDay: +e.target.value })} className={cx(inputCls, 'mt-1.5')} />
        </div>
        <div>
          <label htmlFor="start" className="text-sm font-medium">Start date</label>
          <input id="start" type="date" value={p.startDate} onChange={(e) => setP({ ...p, startDate: e.target.value })} className={cx(inputCls, 'mt-1.5')} required />
        </div>
        <div>
          <label htmlFor="examDate" className="text-sm font-medium">Exam date</label>
          <input id="examDate" type="date" value={p.examDate} onChange={(e) => setP({ ...p, examDate: e.target.value })} className={cx(inputCls, 'mt-1.5')} required />
        </div>
        <div>
          <label htmlFor="qph" className="text-sm font-medium">Questions per hour</label>
          <input id="qph" type="number" min={5} max={60} value={p.questionsPerHour} onChange={(e) => setP({ ...p, questionsPerHour: +e.target.value })} className={cx(inputCls, 'mt-1.5')} />
          <p className="mt-1 text-xs text-muted">About 20 leaves time to read explanations.</p>
        </div>
        <fieldset>
          <legend className="text-sm font-medium">Rest days</legend>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {DAYS.map((d, i) => (
              <label key={d} className={cx('cursor-pointer rounded-lg border px-2.5 py-1 text-sm', p.restDays.includes(i) ? 'border-brand bg-brand-soft' : 'border-line')}>
                <input type="checkbox" className="sr-only" checked={p.restDays.includes(i)}
                  onChange={(e) => setP({ ...p, restDays: e.target.checked ? [...p.restDays, i] : p.restDays.filter((x) => x !== i) })} />{d}
              </label>
            ))}
          </div>
        </fieldset>
        {err && <div className="sm:col-span-2"><Alert>{err}</Alert></div>}
        <div className="flex flex-wrap gap-2 sm:col-span-2">
          <Button type="submit" disabled={pending}>{hasPlan ? 'Rebuild whole plan' : 'Create plan'}</Button>
          {hasPlan && <Button type="button" variant="secondary" disabled={pending} onClick={() => save(true)}>Reschedule from today</Button>}
          {hasPlan && <Button type="button" variant="ghost" disabled={pending} onClick={() => start(async () => { await deletePlanAction(); router.refresh(); })}>Delete plan</Button>}
        </div>
      </form>
    </Card>
  );
}

export type TaskView = { id: string; day: string; kind: 'QUESTIONS' | 'REVIEW' | 'FLASHCARDS'; systemId: string | null; systemName: string | null; target: number; progress: number; complete: boolean; done: boolean };

const LABEL = { QUESTIONS: 'Questions', REVIEW: 'Review incorrect & marked', FLASHCARDS: 'Flashcards' };

export function TaskRow({ t, examId, editable }: { t: TaskView; examId: string | null; editable?: boolean }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [err, setErr] = useState('');
  const go = () => start(async () => {
    if (t.kind === 'FLASHCARDS') return router.push('/flashcards');
    const left = Math.max(1, Math.min(40, t.target - t.progress));
    const r = await createTestAction({
      mode: 'TUTOR', count: left, pool: t.kind === 'REVIEW' ? 'incorrect' : 'unused',
      systemIds: t.systemId ? [t.systemId] : [], examIds: examId ? [examId] : [], name: `Plan: ${t.systemName ?? LABEL[t.kind]}`,
    });
    if (r.ok) router.push(`/test/${r.data}`); else setErr(r.error);
  });
  const act = (fn: () => Promise<{ ok: boolean; error?: string }>) => start(async () => { const r = await fn(); if (!r.ok) setErr(r.error ?? ''); else router.refresh(); });
  return (
    <li className="flex flex-wrap items-center gap-3 border-t border-line py-2.5 first:border-t-0">
      <input type="checkbox" aria-label={`Mark ${LABEL[t.kind]} done`} checked={t.complete} disabled={pending}
        onChange={(e) => act(() => taskDoneAction(t.id, e.target.checked))} className="h-4 w-4 accent-[var(--brand)]" />
      <div className="min-w-40 flex-1">
        <div className={cx('text-sm font-medium', t.complete && 'text-muted line-through')}>{LABEL[t.kind]}{t.systemName && `: ${t.systemName}`}</div>
        <div className="mt-1 flex items-center gap-2"><div className="w-32"><Meter value={(100 * t.progress) / t.target} label="Task progress" /></div><span className="text-xs tabular-nums text-muted">{t.progress}/{t.target}</span></div>
      </div>
      {editable && (
        <>
          <label className="text-xs text-muted">Target <input type="number" min={1} max={500} defaultValue={t.target} className="ml-1 h-8 w-16 rounded border border-line bg-surface px-1.5"
            onBlur={(e) => +e.target.value !== t.target && act(() => taskTargetAction(t.id, +e.target.value))} /></label>
          <label className="text-xs text-muted">Move to <input type="date" defaultValue={t.day} className="ml-1 h-8 rounded border border-line bg-surface px-1.5"
            onChange={(e) => e.target.value && act(() => moveTaskAction(t.id, e.target.value))} /></label>
        </>
      )}
      {!t.complete && <Button size="sm" variant="secondary" onClick={go} disabled={pending}>Start</Button>}
      {err && <p className="w-full text-sm text-bad">{err}</p>}
    </li>
  );
}
