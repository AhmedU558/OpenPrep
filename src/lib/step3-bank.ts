import { bankQuestionSchema, normalize, similarity } from './question-bank';
import { semanticCandidates, type CorpusItem } from './bank-expansion';
import { categoryTargets, materialize, type Step3Spec } from '../../content/step3/types';

export type Step3Finding = { severity:'block'|'review'; kind:string; detail:string };
const words=(s:string)=>s.trim().split(/\s+/).length;
export function validateStep3Batch(specs:Step3Spec[],existing:CorpusItem[]=[]){
  if(!specs.length||specs.length>100)throw new Error('Step3 batches require 1–100 specifications.');
  const questions=specs.map(materialize), corpus=questions.map(q=>({code:q.code,stem:q.stem,objective:q.objective??null,answer:q.options.find(o=>o.correct)?.text??''}));
  const candidates=semanticCandidates(corpus,existing.filter(q=>!questions.some(n=>n.code===q.code)));
  const codes=new Set<string>(),concepts=new Set<string>();
  const rows=specs.map((s,i)=>{
    const q=questions[i]!,findings:Step3Finding[]=[];
    const add=(severity:Step3Finding['severity'],kind:string,detail:string)=>findings.push({severity,kind,detail});
    const parsed=bankQuestionSchema.safeParse(q);
    if(!parsed.success)for(const e of parsed.error.issues)add('block','structure',`${e.path.join('.')}: ${e.message}`);
    if(!/^op-s3-\d{4}$/.test(s.code)||codes.has(s.code))add('block','identifier','Invalid or repeated Step3 stable code.');
    codes.add(s.code);
    const concept=normalize(s.concept??'');
    if(!concept||concepts.has(concept))add('block','concept','Missing or repeated tested concept.');concepts.add(concept);
    for(const key of ['subtopic','task','setting','service','ageGroup','evidenceNote','difficultyRationale'] as const)if(!s[key])add('block','metadata',`${key} is required.`);
    if(!(s.category in categoryTargets)||!['ambulatory','emergency','hospital'].includes(s.setting)||!['pediatric','adult','older-adult'].includes(s.ageGroup)||typeof s.nutrition!=='boolean')add('block','metadata','Invalid blueprint category, setting, age group or nutrition tag.');
    if(!['diagnosis','management','evidence','foundational-science','communication'].includes(s.task))add('block','competency','Unknown physician task.');
    if(![2,3,4,5].includes(s.difficulty)||s.difficultyRationale.length<40)add('block','difficulty','Use the documented clinical cognitive rubric with a concrete rationale.');
    if(s.difficulty===5)add('review','difficulty','Level5 requires explicit independent cognitive review; it is not calibrated.');
    if(words(s.stem)<55||words(s.explanation)<75||s.choices.some(c=>words(c[1])<18))add('review','editorial-depth','Below the preferred 55-word vignette/75-word explanation/18-word option rationale bar; inspect teaching depth.');
    if(new Set(s.choices.map(c=>normalize(c[1]))).size<s.choices.length)add('review','repeated-rationale','Two options share the same explanation; verify that each distractor is actually taught.');
    if(/\b(?:this option is incorrect|not the correct answer|this answer is wrong)\b/i.test(s.choices[0]?.[1]??''))add('review','key-contradiction','The intended correct option rationale contains an apparent rejection; inspect the answer key.');
    if(s.evidenceNote.length<35)add('review','reference-support','Evidence limitation is incomplete.');
    if(s.references.some(r=>!r.url||/\/books\/?$|\/books\/NBK\d+\/?$|\/guidelines\/?$|\/recommendations\/?$/i.test(r.url)))add('review','reference-specificity','A broad source needs section/claim-level checking.');
    const text=[s.stem,s.explanation,...s.choices.flat()].join(' ');
    if(/<\s*(script|iframe|object)|\bon(?:error|load)\s*=|javascript:|!\[.*?\]\(/i.test(text))add('block','markup','Unsupported/unsafe markup or media.');
    if(/\b(?:always|never|all patients|all states)\b/i.test(text))add('review','absolute-claim','Inspect absolute wording, exceptions and jurisdiction.');
    if(/\b(?:NNT|NNH|confidence interval|sensitivity|specificity|mg\/kg|mEq|mmol)\b/i.test(text))add('review','numeric-units','Independently recalculate numerical claims and check units/assumptions.');
    const near=[...existing,...corpus.slice(0,i)].find(other=>other.code!==q.code&&similarity(q.stem,other.stem)>=0.65);
    if(near)add('block','text-duplicate',`Exact/near textual duplicate candidate: ${near.code}.`);
    for(const match of candidates[i]??[])if(match.sameObjective)add('block','objective-duplicate',`Identical normalized objective: ${match.code}.`);else if(match.score>=0.42)add('review','semantic-overlap',`Compare ${match.code}; synonym-aware TF-IDF=${match.score}, trigram=${match.lexical.toFixed(3)}. Distinctness is unresolved.`);
    for(const detail of s.concerns??[])add('review','author-concern',detail);
    add('review','clinical-review','Qualified clinical review of answer uniqueness, all claims, distractors and current recommendations is pending.');
    add('review','rights-review','Claimed authorship/license is not evidence approval; rights remain UNVERIFIED and delivery/export are denied.');
    return {code:s.code,question:q,candidates:candidates[i]??[],findings,structurallyValid:parsed.success&&!findings.some(f=>f.severity==='block'&&['structure','identifier','metadata','competency','difficulty','markup'].includes(f.kind)),blocked:findings.some(f=>f.severity==='block')};
  });
  return {rows,accepted:rows.filter(r=>!r.blocked).map(r=>r.question)};
}
