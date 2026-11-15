import { describe, expect, it } from 'vitest';
import { bankQuestionSchema, validateBank } from '@/lib/question-bank';
import type { QuestionContent } from '@/lib/validation/content';
import { questions as bIntl1 } from '../../content/bank/international/batch-intl-01';
import { questions as bIntl2 } from '../../content/bank/international/batch-intl-02';
import { questions as bIntl3 } from '../../content/bank/international/batch-intl-03';
import { questions as bIntl4 } from '../../content/bank/international/batch-intl-04';
import { questions as bIntl5 } from '../../content/bank/international/batch-intl-05';
import { questions as bIntl6 } from '../../content/bank/international/batch-intl-06';
import { questions as bIntl7 } from '../../content/bank/international/batch-intl-07';
import { questions as bIntl8 } from '../../content/bank/international/batch-intl-08';
import { questions as bIntl9 } from '../../content/bank/international/batch-intl-09';
import { questions as bIntl10 } from '../../content/bank/international/batch-intl-10';
import { questions as bIntl11 } from '../../content/bank/international/batch-intl-11';
import { questions as bIntl12 } from '../../content/bank/international/batch-intl-12';
import { questions as bIntl13 } from '../../content/bank/international/batch-intl-13';
import { questions as bIntl14 } from '../../content/bank/international/batch-intl-14';
import { questions as bIntl15 } from '../../content/bank/international/batch-intl-15';
import { questions as bIntl16 } from '../../content/bank/international/batch-intl-16';
import { questions as bIntl17 } from '../../content/bank/international/batch-intl-17';
import { questions as bIntl18 } from '../../content/bank/international/batch-intl-18';
import { questions as bIntl19 } from '../../content/bank/international/batch-intl-19';
import { questions as bIntl20 } from '../../content/bank/international/batch-intl-20';
import { questions as bIntl21 } from '../../content/bank/international/batch-intl-21';
import { questions as bIntl22 } from '../../content/bank/international/batch-intl-22';
import { questions as bIntl23 } from '../../content/bank/international/batch-intl-23';
import { questions as bIntl24 } from '../../content/bank/international/batch-intl-24';
import { questions as bIntl25 } from '../../content/bank/international/batch-intl-25';
import { questions as bIntl26 } from '../../content/bank/international/batch-intl-26';
import { questions as bIntl27 } from '../../content/bank/international/batch-intl-27';
import { questions as b1 } from '../../content/bank/batch-01';

describe('international question bank expansion', () => {
  const allIntl: QuestionContent[] = [
    ...bIntl1, ...bIntl2, ...bIntl3,
    ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7,
    ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11,
    ...bIntl12, ...bIntl13, ...bIntl14, ...bIntl15,
    ...bIntl16, ...bIntl17, ...bIntl18, ...bIntl19,
    ...bIntl20, ...bIntl21, ...bIntl22, ...bIntl23,
    ...bIntl24, ...bIntl25, ...bIntl26, ...bIntl27
  ];

  it('contains 2145 comprehensive original questions across all target exams', () => {
    expect(allIntl).toHaveLength(2145);
    expect(new Set(allIntl.map((q) => q.code)).size).toBe(2145);

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

    const validation16 = validateBank(bIntl16, [...b1, ...bIntl1]);
    expect(validation16.errors).toEqual([]);
  });
});
