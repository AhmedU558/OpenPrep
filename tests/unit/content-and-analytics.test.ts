import { describe, expect, it } from 'vitest';
import { canEditContent, canTransition } from '@/lib/admin';
import { breakdown, streak, toCsv, weakest } from '@/lib/analytics';
import { evaluate } from '@/lib/calc';
import { questionContentSchema } from '@/lib/validation/content';

describe('content workflow permissions (T11, G5)', () => {
  it('editors draft and submit; only admins publish, archive or unpublish', () => {
    expect(canTransition('EDITOR', 'DRAFT', 'REVIEW')).toBe(true);
    expect(canTransition('EDITOR', 'REVIEW', 'DRAFT')).toBe(true);
    expect(canTransition('EDITOR', 'REVIEW', 'PUBLISHED')).toBe(false);
    expect(canTransition('EDITOR', 'PUBLISHED', 'ARCHIVED')).toBe(false);
    expect(canTransition('ADMIN', 'REVIEW', 'PUBLISHED')).toBe(true);
    expect(canTransition('ADMIN', 'PUBLISHED', 'REVIEW')).toBe(true);
    expect(canTransition('ADMIN', 'ARCHIVED', 'DRAFT')).toBe(true);
    expect(canTransition('ADMIN', 'ARCHIVED', 'PUBLISHED')).toBe(false); // must go back through draft
  });

  it('learners can do nothing', () => {
    for (const from of ['DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED'] as const)
      for (const to of ['DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED'] as const) expect(canTransition('LEARNER', from, to)).toBe(false);
    expect(canEditContent('LEARNER', 'DRAFT')).toBe(false);
  });

  it('editors cannot edit published content', () => {
    expect(canEditContent('EDITOR', 'DRAFT')).toBe(true);
    expect(canEditContent('EDITOR', 'PUBLISHED')).toBe(false);
    expect(canEditContent('ADMIN', 'PUBLISHED')).toBe(true);
  });
});

describe('content format validation (T13)', () => {
  const ok = {
    code: 'x-001', exam: 'Step 1', subject: 'Pharmacology', system: 'Renal', stem: 'A long enough question stem?',
    options: [{ text: 'A', correct: true }, { text: 'B', correct: false }], explanation: 'Because of reasons.', source: 'Me', license: 'CC0-1.0',
  };
  it('accepts a minimal valid question and fills defaults', () => {
    const q = questionContentSchema.parse(ok);
    expect(q).toMatchObject({ type: 'SINGLE', difficulty: 3, keyPoints: [], references: [] });
  });
  it.each([
    ['no correct option', { options: [{ text: 'A', correct: false }, { text: 'B', correct: false }] }, /at least one correct/],
    ['two correct on SINGLE', { options: [{ text: 'A', correct: true }, { text: 'B', correct: true }] }, /exactly one/],
    ['javascript: reference', { references: [{ label: 'x', url: 'javascript:alert(1)' }] }, /url|URL/i],
    ['bad image path', { image: 'file:///etc/passwd', imageAlt: 'x' }, /image|URL/i],
    ['image without alt text', { image: 'https://example.org/a.png' }, /alt text/],
    ['bad code', { code: '../../etc' }, /Code/],
    ['missing license', { license: '' }, /license|Too small/i],
  ])('rejects %s', (_, patch, msg) => {
    const r = questionContentSchema.safeParse({ ...ok, ...patch });
    expect(r.success).toBe(false);
    expect(r.error!.issues.map((i) => `${i.path.join('.')} ${i.message}`).join('; ')).toMatch(msg);
  });
});

describe('analytics helpers (T10)', () => {
  const names = new Map([['s1', 'Cardio'], ['s2', 'Renal']]);
  const r = (sys: string, isCorrect: boolean, omitted = false) => ({ isCorrect, omitted, question: { examId: 'e', subjectId: 'x', systemId: sys } });

  it('breaks down accuracy by group', () => {
    const rows = breakdown([r('s1', true), r('s1', false), r('s1', false, true), r('s2', true)], names, 'systemId');
    expect(rows).toEqual([
      { id: 's1', name: 'Cardio', total: 3, correct: 1, incorrect: 1, omitted: 1, pct: 33 },
      { id: 's2', name: 'Renal', total: 1, correct: 1, incorrect: 0, omitted: 0, pct: 100 },
    ]);
  });

  it('weak areas need a minimum number of attempts', () => {
    const rows = breakdown([r('s1', false), r('s1', false), r('s1', true), r('s2', false)], names, 'systemId');
    expect(weakest(rows).map((x) => x.id)).toEqual(['s1']);
  });

  it('streak counts consecutive days and survives until the day is over', () => {
    const today = new Date('2026-05-10T15:00:00Z');
    expect(streak(new Set(['2026-05-10', '2026-05-09', '2026-05-08', '2026-05-06']), today)).toBe(3);
    expect(streak(new Set(['2026-05-09', '2026-05-08']), today)).toBe(2);
    expect(streak(new Set(['2026-05-07']), today)).toBe(0);
  });

  it('CSV export quotes values and neutralises spreadsheet formulas', () => {
    expect(toCsv([['a', 'b "c"'], ['=HYPERLINK("x")', '+1', '-2', '@SUM(1)', 7]]))
      .toBe('"a","b ""c"""\r\n"\'=HYPERLINK(""x"")","\'+1","\'-2","\'@SUM(1)","7"');
  });
});

describe('calculator (no eval)', () => {
  it.each([
    ['1 + 2 * 3', 7], ['(1 + 2) * 3', 9], ['2 ^ 3 ^ 2', 512], ['-4 + 10', 6], ['(140 - 128) * 0.6 * 70', 504], ['1e3 / 4', 250],
  ])('%s = %d', (e, v) => expect(evaluate(e)).toBeCloseTo(v));
  it.each(['', '2 +', 'alert(1)', '1 / 0', '(1'])('rejects %s', (e) => expect(() => evaluate(e)).toThrow());
});
