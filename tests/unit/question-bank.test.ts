import { describe, expect, it } from 'vitest';
import { bankQuestionSchema, normalize, similarity, validateBank } from '@/lib/question-bank';
import { questions as b1 } from '../../content/bank/batch-01';
import { questions as b2 } from '../../content/bank/batch-02';
import { questions as b3 } from '../../content/bank/batch-03';
import { questions as b4 } from '../../content/bank/batch-04';
import { questions as b5 } from '../../content/bank/batch-05';
import { questions as b6 } from '../../content/bank/batch-06';
import { questions as b7 } from '../../content/bank/batch-07';
import { questions as b8 } from '../../content/bank/batch-08';

describe('authored question bank', () => {
  const batches = [b1,b2,b3,b4,b5,b6,b7,b8], all = batches.flat();
  it('has 200 stable distinct codes and the requested subject coverage', () => {
    expect(all).toHaveLength(200);
    expect(new Set(all.map(q => q.code)).size).toBe(200);
    expect(Object.fromEntries([...new Set(all.map(q => q.subject))].map(s => [s, all.filter(q => q.subject === s).length]))).toEqual({ Anatomy:15, Physiology:20, Biochemistry:15, Pathology:25, Pharmacology:20, Microbiology:15, Immunology:10, Genetics:10, Ethics:10, Biostatistics:10, Medicine:30, Surgery:10, Pediatrics:5, Obstetrics:5 });
    expect(all.map(q => q.options.findIndex(o => o.correct)).sort()).toEqual(Array.from({length: 4}, (_, i) => Array(50).fill(i)).flat());
  });
  it('every batch passes the higher editorial structure and cross-batch duplicate screen', () => {
    for (const [index, batch] of batches.entries()) {
      expect(batch).toHaveLength(25);
      expect(validateBank(batch, batches.slice(0,index).flat()).errors).toEqual([]);
      for (const q of batch) expect(bankQuestionSchema.safeParse(q).success).toBe(true);
    }
  });
  it('catches punctuation-normalized exact duplicates and minor stem rewrites', () => {
    expect(normalize(' A,  B! ')).toBe('a b');
    expect(similarity(b1[0]!.stem, b1[0]!.stem.toUpperCase())).toBe(1);
    expect(validateBank([{...b1[0]!, code: 'different-code'}], [b1[0]!]).errors[0]?.message).toMatch(/duplicate/);
    expect(validateBank([{...b1[0]!, code: 'near-code', stem: b1[0]!.stem.replace('24-year-old', '25-year-old')}], [b1[0]!]).errors).toHaveLength(1);
    expect(validateBank([b1[0]!, b1[0]!]).errors[0]?.message).toMatch(/Duplicate code/);
  });
  it.each([
    {subject:'Typo subject'}, {system:'Typo system'}, {exam:'Unknown track'}, {topic:''}, {objective:''},
    {references:[]}, {license:'unknown'}, {source:'Expert reviewed'},
    {options:b1[0]!.options.map(o => ({...o,correct:false}))},
    {options:b1[0]!.options.map(o => ({...o,correct:true}))},
    {options:b1[0]!.options.map(o => ({...o,explanation:''}))},
    {options:b1[0]!.options.map(o => ({...o,text:'Identical option'}))},
  ])('rejects invalid bank metadata or answer integrity: %j', patch => {
    expect(bankQuestionSchema.safeParse({...b1[0]!,...patch}).success).toBe(false);
  });
});
