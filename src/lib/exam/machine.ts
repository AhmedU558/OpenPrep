import { AppError } from '../errors';

export type SessionState = 'CREATED' | 'IN_PROGRESS' | 'PAUSED' | 'SUBMITTED' | 'ABANDONED';
export type SessionEvent = 'start' | 'pause' | 'resume' | 'submit' | 'abandon';

// The only legal moves. Anything not listed is rejected.
const NEXT: Record<SessionState, Partial<Record<SessionEvent, SessionState>>> = {
  CREATED: { start: 'IN_PROGRESS', abandon: 'ABANDONED' },
  IN_PROGRESS: { pause: 'PAUSED', submit: 'SUBMITTED' },
  PAUSED: { resume: 'IN_PROGRESS', submit: 'SUBMITTED', abandon: 'ABANDONED' },
  SUBMITTED: {},
  ABANDONED: {},
};

export function transition(state: SessionState, event: SessionEvent): SessionState {
  const next = NEXT[state][event];
  if (!next) throw new AppError('CONFLICT', `Cannot ${event} a test that is ${state.toLowerCase().replace('_', ' ')}.`);
  return next;
}

export const isTerminal = (s: SessionState) => s === 'SUBMITTED' || s === 'ABANDONED';

export type Clock = { state: SessionState; activeMs: number; lastResumedAt: Date | null; timeLimitSec: number | null };

/** Time spent working on the test, measured by the server. Paused time does not count. */
export function activeMsAt(c: Clock, now: Date): number {
  const running = c.state === 'IN_PROGRESS' && c.lastResumedAt ? now.getTime() - c.lastResumedAt.getTime() : 0;
  return c.activeMs + Math.max(0, running);
}

/** null for untimed tests. */
export function remainingMs(c: Clock, now: Date): number | null {
  if (c.timeLimitSec == null) return null;
  return Math.max(0, c.timeLimitSec * 1000 - activeMsAt(c, now));
}

export const isExpired = (c: Clock, now: Date) => remainingMs(c, now) === 0;

export type ItemState = 'UNSEEN' | 'ANSWERED' | 'LOCKED';
export const canChangeAnswer = (item: { state: ItemState }) => item.state !== 'LOCKED';
