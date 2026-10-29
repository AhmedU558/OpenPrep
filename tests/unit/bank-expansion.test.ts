import { describe,expect,it } from 'vitest';
import { validateExpansion,semanticCandidates } from '@/lib/bank-expansion';
import { specs } from '../../content/bank/expansion/batch-16';

describe('expansion gates',()=>{
  it('retains 100 authored codes and withholds six reviewed quality concerns',()=>{
    const result=validateExpansion(16,specs,[]);
    expect(specs).toHaveLength(100);
    expect(result.accepted).toHaveLength(94);
    expect(new Set(result.accepted.map(q=>q.code)).size).toBe(94);
    expect(new Set(result.accepted.map(q=>q.difficulty)).size).toBeGreaterThan(3);
    expect(result.rows.every(r=>!r.errors.length)).toBe(true);
    expect(result.rows.filter(r=>r.quarantine.length)).toHaveLength(6);
  });
  it('rejects mismatched difficulty and missing evidence',()=>{
    expect(validateExpansion(16,[{...specs[0]!,reasoning:'synthesis',evidenceNote:''}],[]).rows[0]!.errors.length).toBeGreaterThan(1);
  });
  it('quarantines an uncertain key and retains valid rows as a smaller batch',()=>{
    const result=validateExpansion(16,[{...specs[0]!,concerns:['Unresolved key ambiguity']},specs[1]!],[]);
    expect(result.accepted.map(q=>q.code)).toEqual([specs[1]!.code]);
    expect(result.rows[0]!.quarantine).toContain('Unresolved key ambiguity');
  });
  it('detects semantic objective overlap despite a rewritten stem',()=>{
    const one=specs[0]!;
    const other={code:'existing-unique',stem:'An entirely different patient description with different wording and age.',objective:one.question.objective,answer:one.question.options[0]![0]};
    expect(validateExpansion(16,[one],[other]).rows[0]!.quarantine.some(q=>q.includes('Semantic'))).toBe(true);
    expect(semanticCandidates([{code:'new',stem:one.question.stem,objective:one.question.objective,answer:one.question.options[0]![0]}],[other])[0]![0]!.sameObjective).toBe(true);
  });
  it('rejects repeated stable codes and flags repeated concepts',()=>{
    const one=specs[0]!;
    const result=validateExpansion(16,[one,{...specs[1]!,code:one.code,concept:one.concept}],[]);
    expect(result.rows[1]!.errors.join(' ')).toMatch(/repeated/);
    expect(result.rows[1]!.quarantine.join(' ')).toMatch(/concept/);
  });
});
