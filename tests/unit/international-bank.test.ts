import { describe, expect, it } from 'vitest';
import { bankQuestionSchema, validateBank } from '@/lib/question-bank';
import { questions as bIntl1 } from '../../content/bank/international/batch-intl-01';
import { questions as bIntl2 } from '../../content/bank/international/batch-intl-02';
import { questions as b1 } from '../../content/bank/batch-01';

describe('international question bank expansion', () => {
  const allIntl = [...bIntl1, ...bIntl2];

  it('contains 30 comprehensive original questions across all target exams', () => {
    expect(allIntl).toHaveLength(30);
    expect(new Set(allIntl.map((q) => q.code)).size).toBe(30);

    const exams = new Set(allIntl.map((q) => q.exam));
    expect(exams).toContain('Step 1');
    expect(exams).toContain('Step 2 CK');
    expect(exams).toContain('PLAB / UKMLA');
    expect(exams).toContain('AMC');
    expect(exams).toContain('MCCQE');
    expect(exams).toContain('FCPS');
    expect(exams).toContain('NLE');
    expect(exams).toContain('NEET PG');
    expect(exams).toContain('MRCP');
    expect(exams).toContain('MRCEM');
    expect(exams).toContain('SMLE');
    expect(exams).toContain('HAAD / DHA');
    expect(exams).toContain('UHS MBBS');
  });

  it('all questions strictly have 5 distinct options and exactly 1 correct answer', () => {
    for (const q of allIntl) {
      expect(q.options).toHaveLength(5);
      const correct = q.options.filter((o) => o.correct);
      expect(correct).toHaveLength(1);
      const texts = new Set(q.options.map((o) => o.text.trim().toLowerCase()));
      expect(texts.size).toBe(5);
    }
  });

  it('every question and every option contains thorough explanations and valid references', () => {
    for (const q of allIntl) {
      expect(q.stem.length).toBeGreaterThanOrEqual(100);
      expect(q.explanation.length).toBeGreaterThanOrEqual(180);
      expect(q.objective).toBeTruthy();
      expect(q.references.length).toBeGreaterThanOrEqual(1);
      expect(q.references.every((r) => r.url && r.url.startsWith('https://'))).toBe(true);

      for (const o of q.options) {
        expect(o.explanation).toBeTruthy();
        expect(o.explanation!.trim().length).toBeGreaterThanOrEqual(35);
      }
    }
  });

  it('passes bankQuestionSchema and validateBank without errors or duplicates', () => {
    for (const q of allIntl) {
      const parsed = bankQuestionSchema.safeParse(q);
      if (!parsed.success) {
        console.error('Validation failure on question:', q.code, parsed.error.issues);
      }
      expect(parsed.success).toBe(true);
    }

    const validation1 = validateBank(bIntl1, b1);
    expect(validation1.errors).toEqual([]);

    const validation2 = validateBank(bIntl2, [...b1, ...bIntl1]);
    expect(validation2.errors).toEqual([]);
  });
});
