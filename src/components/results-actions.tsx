'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { createTestAction, navigateAction } from '@/app/actions/exam';
import { Button, Card, fmtDuration } from './ui';

export function ReviewLink({ sessionId, position }: { sessionId: string; position: number }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  return (
    <Button size="sm" variant="secondary" disabled={pending}
      onClick={() => start(async () => { await navigateAction(sessionId, position); router.push(`/test/${sessionId}`); })}>
      Review
    </Button>
  );
}

export function RetryButton({ questionIds, count }: { questionIds: string[]; count: number }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [err, setErr] = useState('');
  return (
    <div className="text-right">
      <Button disabled={pending} onClick={() => start(async () => {
        const r = await createTestAction({ mode: 'TUTOR', count: Math.min(40, count), questionIds, name: 'Retry incorrect' });
        if (r.ok) router.push(`/test/${r.data}`); else setErr(r.error);
      })}>Retry {count} missed in tutor mode</Button>
      {err && <p className="mt-1 text-sm text-bad">{err}</p>}
    </div>
  );
}

export function BreakPanel({ nextId, blockNumber, blocksTotal, breakLeftSec }: { nextId: string; blockNumber: number; blocksTotal: number; breakLeftSec: number }) {
  const router = useRouter();
  const [left, setLeft] = useState(breakLeftSec);
  useEffect(() => { const t = setInterval(() => setLeft((l) => l - 1), 1000); return () => clearInterval(t); }, []);
  return (
    <Card className="border-brand bg-brand-soft">
      <h2 className="text-lg font-semibold">Break time</h2>
      <p className="mt-1">Block {blockNumber} of {blocksTotal} is next. Review now, take a break, or keep going.</p>
      <p className="mt-2" role="timer" aria-live="off">
        Break time left for this exam: <strong className={left < 0 ? 'text-bad' : ''}>{left >= 0 ? fmtDuration(left * 1000) : `over by ${fmtDuration(-left * 1000)}`}</strong>
        <span className="text-sm text-muted"> (45 minutes shared across all breaks)</span>
      </p>
      <div className="mt-4"><Button onClick={() => router.push(`/test/${nextId}`)}>Start block {blockNumber}</Button></div>
    </Card>
  );
}
