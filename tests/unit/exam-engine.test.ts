import { describe, expect, it } from 'vitest';
import { activeMsAt, canChangeAnswer, isExpired, remainingMs, transition, type SessionEvent, type SessionState } from '@/lib/exam/machine';
import { scoreItem, scoreSession, validateSelection } from '@/lib/exam/scoring';

describe('session state machine', () => {
  const legal: [SessionState, SessionEvent, SessionState][] = [
    ['CREATED', 'start', 'IN_PROGRESS'],
    ['CREATED', 'abandon', 'ABANDONED'],
    ['IN_PROGRESS', 'pause', 'PAUSED'],
    ['IN_PROGRESS', 'submit', 'SUBMITTED'],
    ['PAUSED', 'resume', 'IN_PROGRESS'],
    ['PAUSED', 'submit', 'SUBMITTED'],
    ['PAUSED', 'abandon', 'ABANDONED'],
  ];
  it.each(legal)('%s --%s--> %s', (from, ev, to) => expect(transition(from, ev)).toBe(to));

  it('rejects every other transition', () => {
    const states: SessionState[] = ['CREATED', 'IN_PROGRESS', 'PAUSED', 'SUBMITTED', 'ABANDONED'];
    const events: SessionEvent[] = ['start', 'pause', 'resume', 'submit', 'abandon'];
    for (const s of states) for (const e of events) {
      if (legal.some(([f, ev]) => f === s && ev === e)) continue;
      expect(() => transition(s, e), `${s} ${e}`).toThrow(/Cannot/);
    }
  });

  it('cannot submit twice', () => {
    const s = transition('IN_PROGRESS', 'submit');
    expect(() => transition(s, 'submit')).toThrow();
  });
});

describe('server-side timing', () => {
  const t0 = new Date('2026-01-01T10:00:00Z');
  const at = (sec: number) => new Date(t0.getTime() + sec * 1000);

  it('counts running time only while in progress', () => {
    const c = { state: 'IN_PROGRESS' as const, activeMs: 30_000, lastResumedAt: t0, timeLimitSec: 90 };
    expect(activeMsAt(c, at(20))).toBe(50_000);
    expect(activeMsAt({ ...c, state: 'PAUSED' }, at(500))).toBe(30_000);
  });

  it('computes remaining time and expiry; untimed never expires', () => {
    const c = { state: 'IN_PROGRESS' as const, activeMs: 0, lastResumedAt: t0, timeLimitSec: 90 };
    expect(remainingMs(c, at(60))).toBe(30_000);
    expect(remainingMs(c, at(200))).toBe(0);
    expect(isExpired(c, at(90))).toBe(true);
    expect(isExpired(c, at(89))).toBe(false);
    expect(remainingMs({ ...c, timeLimitSec: null }, at(10_000))).toBeNull();
    expect(isExpired({ ...c, timeLimitSec: null }, at(10_000))).toBe(false);
  });

  it('ignores a client clock that is behind the server (no negative time)', () => {
    const c = { state: 'IN_PROGRESS' as const, activeMs: 1000, lastResumedAt: at(10), timeLimitSec: 90 };
    expect(activeMsAt(c, at(5))).toBe(1000);
  });

  it('locked items cannot change', () => {
    expect(canChangeAnswer({ state: 'ANSWERED' })).toBe(true);
    expect(canChangeAnswer({ state: 'LOCKED' })).toBe(false);
  });
});

describe('scoring', () => {
  it('single answer: correct, incorrect, omitted', () => {
    expect(scoreItem(['b'], ['b'])).toEqual({ isCorrect: true, omitted: false, points: 1 });
    expect(scoreItem(['b'], ['a'])).toEqual({ isCorrect: false, omitted: false, points: -0 });
    expect(scoreItem(['b'], [])).toEqual({ isCorrect: false, omitted: true, points: 0 });
  });

  it('multiple answer is all-or-nothing, order-independent', () => {
    expect(scoreItem(['a', 'c'], ['c', 'a']).isCorrect).toBe(true);
    expect(scoreItem(['a', 'c'], ['a']).isCorrect).toBe(false);
    expect(scoreItem(['a', 'c'], ['a', 'b', 'c']).isCorrect).toBe(false);
  });

  it('negative marking deducts only for wrong answers, never for omitted', () => {
    expect(scoreItem(['a'], ['b'], 0.25).points).toBe(-0.25);
    expect(scoreItem(['a'], [], 0.25).points).toBe(0);
    const s = scoreSession([scoreItem(['a'], ['a'], 0.25), scoreItem(['a'], ['b'], 0.25), scoreItem(['a'], [], 0.25)]);
    expect(s).toEqual({ total: 3, correct: 1, incorrect: 1, omitted: 1, points: 0.75, percent: 33 });
  });

  it('empty session scores zero', () => {
    expect(scoreSession([]).percent).toBe(0);
  });

  it('validates selections', () => {
    expect(validateSelection('SINGLE', ['a'], ['a', 'b'])).toBeNull();
    expect(validateSelection('SINGLE', ['a', 'b'], ['a', 'b'])).toMatch(/only one/);
    expect(validateSelection('MULTIPLE', ['a', 'a'], ['a', 'b'])).toMatch(/Duplicate/);
    expect(validateSelection('MULTIPLE', ['x'], ['a', 'b'])).toMatch(/does not belong/);
  });
});
