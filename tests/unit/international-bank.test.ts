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
import { questions as bIntl28 } from '../../content/bank/international/batch-intl-28';
import { questions as bIntl29 } from '../../content/bank/international/batch-intl-29';
import { questions as bIntl30 } from '../../content/bank/international/batch-intl-30';
import { questions as bIntl31 } from '../../content/bank/international/batch-intl-31';
import { questions as bIntl32 } from '../../content/bank/international/batch-intl-32';
import { questions as bIntl33 } from '../../content/bank/international/batch-intl-33';
import { questions as bIntl34 } from '../../content/bank/international/batch-intl-34';
import { questions as bIntl35 } from '../../content/bank/international/batch-intl-35';
import { questions as bIntl36 } from '../../content/bank/international/batch-intl-36';
import { questions as bIntl37 } from '../../content/bank/international/batch-intl-37';
import { questions as bIntl38 } from '../../content/bank/international/batch-intl-38';
import { questions as bIntl39 } from '../../content/bank/international/batch-intl-39';
import { questions as bIntl40 } from '../../content/bank/international/batch-intl-40';
import { questions as bIntl41 } from '../../content/bank/international/batch-intl-41';
import { questions as bIntl42 } from '../../content/bank/international/batch-intl-42';
import { questions as bIntl43 } from '../../content/bank/international/batch-intl-43';
import { questions as bIntl44 } from '../../content/bank/international/batch-intl-44';
import { questions as bIntl45 } from '../../content/bank/international/batch-intl-45';
import { questions as bIntl46 } from '../../content/bank/international/batch-intl-46';
import { questions as bIntl47 } from '../../content/bank/international/batch-intl-47';
import { questions as bIntl48 } from '../../content/bank/international/batch-intl-48';
import { questions as bIntl49 } from '../../content/bank/international/batch-intl-49';
import { questions as bIntl50 } from '../../content/bank/international/batch-intl-50';
import { questions as bIntl51 } from '../../content/bank/international/batch-intl-51';
import { questions as bIntl52 } from '../../content/bank/international/batch-intl-52';
import { questions as bIntl53 } from '../../content/bank/international/batch-intl-53';
import { questions as bIntl54 } from '../../content/bank/international/batch-intl-54';
import { questions as bIntl55 } from '../../content/bank/international/batch-intl-55';
import { questions as bIntl56 } from '../../content/bank/international/batch-intl-56';
import { questions as bIntl57 } from '../../content/bank/international/batch-intl-57';
import { questions as bIntl58 } from '../../content/bank/international/batch-intl-58';
import { questions as bIntl59 } from '../../content/bank/international/batch-intl-59';
import { questions as bIntl60 } from '../../content/bank/international/batch-intl-60';
import { questions as bIntl61 } from '../../content/bank/international/batch-intl-61';
import { questions as bIntl62 } from '../../content/bank/international/batch-intl-62';
import { questions as bIntl63 } from '../../content/bank/international/batch-intl-63';
import { questions as bIntl64 } from '../../content/bank/international/batch-intl-64';
import { questions as bIntl65 } from '../../content/bank/international/batch-intl-65';
import { questions as bIntl66 } from '../../content/bank/international/batch-intl-66';
import { questions as bIntl67 } from '../../content/bank/international/batch-intl-67';
import { questions as bIntl68 } from '../../content/bank/international/batch-intl-68';
import { questions as bIntl69 } from '../../content/bank/international/batch-intl-69';
import { questions as bIntl70 } from '../../content/bank/international/batch-intl-70';
import { questions as bIntl71 } from '../../content/bank/international/batch-intl-71';
import { questions as bIntl72 } from '../../content/bank/international/batch-intl-72';
import { questions as bIntl73 } from '../../content/bank/international/batch-intl-73';
import { questions as bIntl74 } from '../../content/bank/international/batch-intl-74';
import { questions as bIntl75 } from '../../content/bank/international/batch-intl-75';
import { questions as bIntl76 } from '../../content/bank/international/batch-intl-76';
import { questions as bIntl77 } from '../../content/bank/international/batch-intl-77';
import { questions as bIntl78 } from '../../content/bank/international/batch-intl-78';
import { questions as bIntl79 } from '../../content/bank/international/batch-intl-79';
import { questions as bIntl80 } from '../../content/bank/international/batch-intl-80';
import { questions as bIntl81 } from '../../content/bank/international/batch-intl-81';
import { questions as bIntl82 } from '../../content/bank/international/batch-intl-82';
import { questions as bIntl83 } from '../../content/bank/international/batch-intl-83';
import { questions as bIntl84 } from '../../content/bank/international/batch-intl-84';
import { questions as bIntl85 } from '../../content/bank/international/batch-intl-85';
import { questions as bIntl86 } from '../../content/bank/international/batch-intl-86';
import { questions as bIntl87 } from '../../content/bank/international/batch-intl-87';
import { questions as bIntl88 } from '../../content/bank/international/batch-intl-88';
import { questions as bIntl89 } from '../../content/bank/international/batch-intl-89';
import { questions as bIntl90 } from '../../content/bank/international/batch-intl-90';
import { questions as bIntl91 } from '../../content/bank/international/batch-intl-91';
import { questions as bIntl92 } from '../../content/bank/international/batch-intl-92';
import { questions as bIntl93 } from '../../content/bank/international/batch-intl-93';
import { questions as bIntl94 } from '../../content/bank/international/batch-intl-94';
import { questions as bIntl95 } from '../../content/bank/international/batch-intl-95';
import { questions as bIntl96 } from '../../content/bank/international/batch-intl-96';
import { questions as bIntl97 } from '../../content/bank/international/batch-intl-97';
import { questions as bIntl98 } from '../../content/bank/international/batch-intl-98';
import { questions as bIntl99 } from '../../content/bank/international/batch-intl-99';
import { questions as bIntl100 } from '../../content/bank/international/batch-intl-100';
import { questions as bIntl101 } from '../../content/bank/international/batch-intl-101';
import { questions as bIntl102 } from '../../content/bank/international/batch-intl-102';
import { questions as bIntl103 } from '../../content/bank/international/batch-intl-103';
import { questions as bIntl104 } from '../../content/bank/international/batch-intl-104';
import { questions as bIntl105 } from '../../content/bank/international/batch-intl-105';
import { questions as bIntl106 } from '../../content/bank/international/batch-intl-106';
import { questions as bIntl107 } from '../../content/bank/international/batch-intl-107';
import { questions as bIntl108 } from '../../content/bank/international/batch-intl-108';
import { questions as bIntl109 } from '../../content/bank/international/batch-intl-109';
import { questions as bIntl110 } from '../../content/bank/international/batch-intl-110';
import { questions as bIntl111 } from '../../content/bank/international/batch-intl-111';
import { questions as bIntl112 } from '../../content/bank/international/batch-intl-112';
import { questions as bIntl113 } from '../../content/bank/international/batch-intl-113';
import { questions as bIntl114 } from '../../content/bank/international/batch-intl-114';
import { questions as bIntl115 } from '../../content/bank/international/batch-intl-115';
import { questions as bIntl116 } from '../../content/bank/international/batch-intl-116';
import { questions as bIntl117 } from '../../content/bank/international/batch-intl-117';
import { questions as bIntl118 } from '../../content/bank/international/batch-intl-118';
import { questions as bIntl119 } from '../../content/bank/international/batch-intl-119';
import { questions as bIntl120 } from '../../content/bank/international/batch-intl-120';
import { questions as bIntl121 } from '../../content/bank/international/batch-intl-121';
import { questions as bIntl122 } from '../../content/bank/international/batch-intl-122';
import { questions as bIntl123 } from '../../content/bank/international/batch-intl-123';
import { questions as bIntl124 } from '../../content/bank/international/batch-intl-124';
import { questions as bIntl125 } from '../../content/bank/international/batch-intl-125';
import { questions as bIntl126 } from '../../content/bank/international/batch-intl-126';
import { questions as bIntl127 } from '../../content/bank/international/batch-intl-127';
import { questions as bIntl128 } from '../../content/bank/international/batch-intl-128';
import { questions as bIntl129 } from '../../content/bank/international/batch-intl-129';
import { questions as bIntl130 } from '../../content/bank/international/batch-intl-130';
import { questions as bIntl131 } from '../../content/bank/international/batch-intl-131';
import { questions as bIntl132 } from '../../content/bank/international/batch-intl-132';
import { questions as bIntl133 } from '../../content/bank/international/batch-intl-133';
import { questions as bIntl134 } from '../../content/bank/international/batch-intl-134';
import { questions as bIntl135 } from '../../content/bank/international/batch-intl-135';
import { questions as bIntl136 } from '../../content/bank/international/batch-intl-136';
import { questions as bIntl137 } from '../../content/bank/international/batch-intl-137';
import { questions as bIntl138 } from '../../content/bank/international/batch-intl-138';
import { questions as bIntl139 } from '../../content/bank/international/batch-intl-139';
import { questions as bIntl140 } from '../../content/bank/international/batch-intl-140';
import { questions as bIntl141 } from '../../content/bank/international/batch-intl-141';
import { questions as bIntl142 } from '../../content/bank/international/batch-intl-142';
import { questions as bIntl143 } from '../../content/bank/international/batch-intl-143';
import { questions as bIntl144 } from '../../content/bank/international/batch-intl-144';
import { questions as bIntl145 } from '../../content/bank/international/batch-intl-145';
import { questions as bIntl146 } from '../../content/bank/international/batch-intl-146';
import { questions as bIntl147 } from '../../content/bank/international/batch-intl-147';
import { questions as bIntl148 } from '../../content/bank/international/batch-intl-148';
import { questions as bIntl149 } from '../../content/bank/international/batch-intl-149';
import { questions as bIntl150 } from '../../content/bank/international/batch-intl-150';
import { questions as bIntl151 } from '../../content/bank/international/batch-intl-151';
import { questions as bIntl152 } from '../../content/bank/international/batch-intl-152';
import { questions as bIntl153 } from '../../content/bank/international/batch-intl-153';
import { questions as bIntl154 } from '../../content/bank/international/batch-intl-154';
import { questions as bIntl155 } from '../../content/bank/international/batch-intl-155';
import { questions as b1 } from '../../content/bank/batch-01';

describe('international question bank expansion', () => {
  const allIntl: QuestionContent[] = [
    ...bIntl1, ...bIntl2, ...bIntl3,
    ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7,
    ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11,
    ...bIntl12, ...bIntl13, ...bIntl14, ...bIntl15,
    ...bIntl16, ...bIntl17, ...bIntl18, ...bIntl19,
    ...bIntl20, ...bIntl21, ...bIntl22, ...bIntl23,
    ...bIntl24, ...bIntl25, ...bIntl26, ...bIntl27,
    ...bIntl28, ...bIntl29, ...bIntl30, ...bIntl31,
    ...bIntl32, ...bIntl33, ...bIntl34, ...bIntl35,
    ...bIntl36, ...bIntl37, ...bIntl38, ...bIntl39,
    ...bIntl40, ...bIntl41, ...bIntl42, ...bIntl43,
    ...bIntl44, ...bIntl45, ...bIntl46, ...bIntl47, ...bIntl48,
    ...bIntl49, ...bIntl50, ...bIntl51, ...bIntl52, ...bIntl53,
    ...bIntl54, ...bIntl55, ...bIntl56, ...bIntl57, ...bIntl58,
    ...bIntl59, ...bIntl60, ...bIntl61, ...bIntl62, ...bIntl63,
    ...bIntl64, ...bIntl65, ...bIntl66, ...bIntl67, ...bIntl68,
    ...bIntl69, ...bIntl70, ...bIntl71, ...bIntl72, ...bIntl73,
    ...bIntl74, ...bIntl75, ...bIntl76, ...bIntl77, ...bIntl78,
    ...bIntl79, ...bIntl80, ...bIntl81, ...bIntl82, ...bIntl83,
    ...bIntl84, ...bIntl85, ...bIntl86, ...bIntl87, ...bIntl88,
    ...bIntl89, ...bIntl90, ...bIntl91, ...bIntl92, ...bIntl93,
    ...bIntl94, ...bIntl95,
    ...bIntl96, ...bIntl97, ...bIntl98, ...bIntl99, ...bIntl100,
    ...bIntl101, ...bIntl102, ...bIntl103, ...bIntl104, ...bIntl105,
    ...bIntl106, ...bIntl107, ...bIntl108, ...bIntl109, ...bIntl110,
    ...bIntl111, ...bIntl112, ...bIntl113, ...bIntl114, ...bIntl115,
    ...bIntl116, ...bIntl117, ...bIntl118, ...bIntl119, ...bIntl120,
    ...bIntl121, ...bIntl122, ...bIntl123, ...bIntl124, ...bIntl125,
    ...bIntl126, ...bIntl127, ...bIntl128, ...bIntl129, ...bIntl130,
    ...bIntl131, ...bIntl132, ...bIntl133, ...bIntl134, ...bIntl135,
    ...bIntl136, ...bIntl137, ...bIntl138, ...bIntl139, ...bIntl140,
    ...bIntl141, ...bIntl142, ...bIntl143, ...bIntl144, ...bIntl145,
    ...bIntl146, ...bIntl147, ...bIntl148, ...bIntl149, ...bIntl150,
    ...bIntl151, ...bIntl152, ...bIntl153, ...bIntl154, ...bIntl155
  ];

  it('contains 14672 comprehensive original questions across all target exams', () => {
    expect(allIntl).toHaveLength(14672);
    expect(new Set(allIntl.map((q) => q.code)).size).toBe(14672);

    const exams = new Set(allIntl.map((q) => q.exam));
    expect(exams).toContain('Step 1');
    expect(exams).toContain('Step 2 CK');
    expect(exams).toContain('Step 3');
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
