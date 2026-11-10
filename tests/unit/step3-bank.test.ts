import {describe,it,expect} from 'vitest';
import {materialize,categoryTargets} from '../../content/step3/types';
import {validateStep3Batch} from '@/lib/step3-bank';
import {step3Fixture} from '../fixtures/step3';

describe('Step3 candidate gates',()=>{
 it('keeps provenance while balancing the authored answer position deterministically',()=>{
  const positions=[1,2,3,4].map(i=>{const s=step3Fixture(`op-s3-${String(i).padStart(4,'0')}`),q=materialize(s);expect(q.options.filter(o=>o.correct)).toHaveLength(1);expect(q.options.find(o=>o.correct)!.text).toBe(s.choices[0]![0]);expect(q.source).toContain('medically unreviewed');return q.options.findIndex(o=>o.correct);});
  expect(new Set(positions).size).toBe(4);expect(Object.values(categoryTargets).reduce((a,b)=>a+b,0)).toBe(1000);
 });
 it('validates a candidate without treating software acceptance as human approval',()=>{const row=validateStep3Batch([step3Fixture()]).rows[0]!;expect(row.blocked).toBe(false);expect(row.structurallyValid).toBe(true);expect(row.findings.map(f=>f.kind)).toEqual(expect.arrayContaining(['clinical-review','rights-review']));});
 it('rejects missing references, invalid taxonomy and an absent answer',()=>{
  const s=step3Fixture();s.references=[];s.subject='Invented';s.choices=[];
  const row=validateStep3Batch([s]).rows[0]!;expect(row.blocked).toBe(true);expect(row.structurallyValid).toBe(false);
 });
 it('blocks repeated codes/concepts and unchanged objectives against the existing bank',()=>{
  const s=step3Fixture(),q=materialize(s),existing={code:'old-record',stem:'A different independently described scenario for comparison.',objective:q.objective!,answer:q.options.find(o=>o.correct)!.text};
  expect(validateStep3Batch([s],[existing]).rows[0]!.findings.some(f=>f.kind==='objective-duplicate')).toBe(true);
  expect(validateStep3Batch([s,{...s}]).rows[1]!.blocked).toBe(true);
 });
 it('blocks normalized exact vignettes even if an objective is relabeled',()=>{
  const s=step3Fixture(),row=validateStep3Batch([s],[{code:'old-record',stem:s.stem.toUpperCase(),objective:'Unrelated objective',answer:'Other'}]).rows[0]!;
  expect(row.findings.some(f=>f.kind==='text-duplicate')).toBe(true);
 });
 it('flags numeric review and rejects unsafe markup or an unsupported cognitive rating',()=>{
  const s=step3Fixture();s.explanation+=' The NNT calculation needs a prespecified follow-up interval.';
  expect(validateStep3Batch([s]).rows[0]!.findings.some(f=>f.kind==='numeric-units')).toBe(true);
  s.stem+='<script>bad()</script>';s.difficultyRationale='';expect(validateStep3Batch([s]).rows[0]!.blocked).toBe(true);
 });
 it('routes apparent key contradictions and recycled rationales to human review',()=>{
  const s=step3Fixture();s.choices[0]![1]='This option is incorrect because this synthetic rationale deliberately rejects the marked answer while leaving the structure otherwise valid.';s.choices[1]![1]=s.choices[0]![1];
  const row=validateStep3Batch([s]).rows[0]!;expect(row.findings.map(f=>f.kind)).toEqual(expect.arrayContaining(['key-contradiction','repeated-rationale']));expect(row.blocked).toBe(false);
 });
});
