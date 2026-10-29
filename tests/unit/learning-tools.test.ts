import { describe, expect, it } from 'vitest';
import { acceptHighlights, renderMarkdown } from '@/lib/markdown';
import { generatePlan, studyDays } from '@/lib/planner';
import { schedule } from '@/lib/srs';
import { redact } from '@/lib/log';

describe('spaced repetition', () => {
  const now = new Date('2026-01-01T00:00:00Z');
  const fresh = { ease: 2.5, interval: 0, reps: 0, lapses: 0 };

  it('Again resets and returns in 10 minutes', () => {
    const r = schedule({ ...fresh, reps: 3, interval: 20 }, 1, now);
    expect(r.interval).toBe(0);
    expect(r.reps).toBe(0);
    expect(r.lapses).toBe(1);
    expect(r.due.getTime() - now.getTime()).toBe(10 * 60e3);
  });

  it('Good grows 1d → 6d → ~15d', () => {
    const a = schedule(fresh, 3, now);
    const b = schedule(a, 3, now);
    const c = schedule(b, 3, now);
    expect([a.interval, b.interval, c.interval]).toEqual([1, 6, 15]);
  });

  it('Easy grows faster than Good, Hard slower; ease never below 1.3', () => {
    const base = { ease: 2.5, interval: 10, reps: 4, lapses: 0 };
    expect(schedule(base, 4, now).interval).toBeGreaterThan(schedule(base, 3, now).interval);
    expect(schedule(base, 2, now).interval).toBeLessThan(schedule(base, 3, now).interval);
    let c = { ...base, ease: 1.35 };
    for (let i = 0; i < 5; i++) c = schedule(c, 2, now);
    expect(c.ease).toBeGreaterThanOrEqual(1.3);
  });
});

describe('study planner', () => {
  const start = new Date('2026-03-02T00:00:00Z'); // Monday
  const exam = new Date('2026-03-16T00:00:00Z'); // two weeks later

  it('skips rest days and stops before the exam day', () => {
    const d = studyDays(start, exam, [0]); // no Sundays
    expect(d).toHaveLength(12);
    expect(d.every((x) => x.getUTCDay() !== 0)).toBe(true);
    expect(d.at(-1)!.getTime()).toBeLessThan(exam.getTime());
  });

  it('covers every unused question once, within daily capacity, then review days', () => {
    const pools = [{ systemId: 'cardio', unused: 50 }, { systemId: 'renal', unused: 30 }];
    const tasks = generatePlan({ start, examDate: exam, hoursPerDay: 1, questionsPerHour: 10, restDays: [0], pools });
    const q = tasks.filter((t) => t.kind === 'QUESTIONS');
    expect(q.reduce((s, t) => s + t.target, 0)).toBe(80);
    const perDay = new Map<number, number>();
    for (const t of q) perDay.set(t.date.getTime(), (perDay.get(t.date.getTime()) ?? 0) + t.target);
    expect(Math.max(...perDay.values())).toBeLessThanOrEqual(10);
    expect(tasks.filter((t) => t.kind === 'REVIEW').length).toBe(1);
    // deterministic
    expect(generatePlan({ start, examDate: exam, hoursPerDay: 1, questionsPerHour: 10, restDays: [0], pools })).toEqual(tasks);
  });

  it('returns nothing when the exam date is not after the start', () => {
    expect(generatePlan({ start: exam, examDate: start, hoursPerDay: 2, questionsPerHour: 20, restDays: [], pools: [] })).toEqual([]);
  });
});

describe('markdown sanitizing (XSS boundary)', () => {
  it('renders formatting', () => {
    expect(renderMarkdown('**bold** and *it*')).toBe('<p><strong>bold</strong> and <em>it</em></p>\n');
  });

  it('strips scripts, event handlers and javascript: URLs', () => {
    const html = renderMarkdown('<script>alert(1)</script><img src=x onerror=alert(1)><a href="data:text/html,1">d</a>');
    expect(html).not.toMatch(/<script|\son\w+=|href="(javascript|data):|src="(javascript|data):/i);
    const link = renderMarkdown('[click](javascript:alert(1)) and [ok](https://example.org)');
    expect(link).not.toMatch(/href="javascript/i);
    expect(link).toMatch(/href="https:\/\/example.org"/);
  });

  it('accepts highlights only when they add <mark> to the original stem', () => {
    const stem = 'A 45-year-old man has chest pain.';
    const ok = '<p>A 45-year-old <mark>man</mark> has chest pain.</p>\n';
    expect(acceptHighlights(ok, stem)).toBe(ok);
    expect(acceptHighlights('<p>A 45-year-old <mark>woman</mark> has chest pain.</p>\n', stem)).toBeNull();
    expect(acceptHighlights('<p>A 45-year-old man has chest pain.<img src=x onerror=alert(1)></p>\n', stem)).toBeNull();
  });
});

describe('log redaction', () => {
  it('hides secrets and masks emails', () => {
    expect(redact({ password: 'p', nested: { apiKey: 'k', note: 'mail jane.doe@example.com' } }))
      .toEqual({ password: '[redacted]', nested: { apiKey: '[redacted]', note: 'mail j***@example.com' } });
  });
});
