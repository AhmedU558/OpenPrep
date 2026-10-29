import { authorBatch } from '../../content/bank/author';
import { difficultyRubric, type ExpansionSpec } from '../../content/bank/expansion/types';
import { bankQuestionSchema, normalize, similarity } from './question-bank';
import decisions from '../../content/bank/expansion/semantic-decisions.json' with { type: 'json' };

export type CorpusItem = { code: string; stem: string; objective: string | null; answer: string };
const stop = new Set('a an the of to in and or for on with is are be from this that which what patient has have most best following likely mechanism explains finding these by as at after before'.split(' '));
const aliases: Record<string,string> = {myocardial:'cardiac',infarction:'infarct',mi:'cardiac infarct',hypertension:'high blood pressure',renal:'kidney',hepatic:'liver',hypoglycemia:'low glucose',hyperglycemia:'high glucose',inhibition:'block',inhibits:'block',inhibitor:'block',increased:'increase',elevated:'increase',reduced:'decrease',decreased:'decrease'};
function terms(text: string) {return normalize(text).split(' ').filter(w=>w.length>2&&!stop.has(w)).flatMap(w=>(aliases[w]??w).split(' '));}

/** Local synonym-aware concept candidate retrieval, followed by documented manual comparisons. No embedding/clinical-certification claim. */
export function semanticCandidates(items: CorpusItem[], existing: CorpusItem[]) {
  const corpus = [...existing,...items];
  const documents = corpus.map(q=>terms(`${q.objective ?? ''} ${q.answer} ${q.stem}`));
  const df = new Map<string,number>();
  for(const doc of documents) for(const term of new Set(doc)) df.set(term,(df.get(term)??0)+1);
  const vectors = documents.map(doc=>{
    const v=new Map<string,number>();
    for(const t of doc) v.set(t,(v.get(t)??0)+1);
    for(const [t,n] of v) v.set(t,(1+Math.log(n))*Math.log(1+corpus.length/(df.get(t)??1)));
    return v;
  });
  const lengths=vectors.map(v=>Math.sqrt([...v.values()].reduce((sum,n)=>sum+n*n,0)));
  return items.map((q,i)=>{
    const at=existing.length+i, v=vectors[at]!;
    return corpus.flatMap((other,j)=>{
      if(other.code===q.code||j>=at)return [];
      const dot=[...v].reduce((sum,[t,n])=>sum+n*(vectors[j]!.get(t)??0),0);
      const score=dot/(lengths[at]!*lengths[j]!||1);
      const sameObjective=normalize(q.objective??'')===normalize(other.objective??'')&&!!q.objective;
      return [{code:other.code,score:Number(score.toFixed(4)),sameObjective,lexical:similarity(q.stem,other.stem)}];
    }).sort((a,b)=>b.score-a.score).slice(0,3);
  });
}

export function validateExpansion(batch: number, specs: ExpansionSpec[], existing: CorpusItem[]) {
  if(!Array.isArray(specs)||specs.length<1||specs.length>100)throw new Error('Expansion batches need 1–100 authored items.');
  const questions=authorBatch(batch,specs.map(s=>s.question),specs.map(s=>s.code));
  const corpus=questions.map(q=>({code:q.code,stem:q.stem,objective:q.objective??null,answer:q.options.find(o=>o.correct)!.text}));
  const incomingCodes=new Set(corpus.map(q=>q.code));
  const candidates=semanticCandidates(corpus,existing.filter(q=>!incomingCodes.has(q.code)));
  const seenCodes=new Set<string>(),seenConcepts=new Set<string>();
  const rows=questions.map((q,i)=>{
    const s=specs[i]!, errors:string[]=[], quarantine:string[]=[];
    const result=bankQuestionSchema.safeParse(q);
    if(!result.success)errors.push(...result.error.issues.map(e=>`${e.path.join('.')}: ${e.message}`));
    if(!/^op26x-\d{4}$/.test(s.code)||seenCodes.has(s.code))errors.push('Invalid or repeated expansion code');
    seenCodes.add(s.code);
    if(!s.concept||seenConcepts.has(s.concept))quarantine.push('Repeated or missing tested concept');
    seenConcepts.add(s.concept);
    if(difficultyRubric[s.reasoning]!==q.difficulty||!s.difficultyReason||s.difficultyReason.length<40)errors.push('Difficulty must match the explicit cognitive rubric with a concrete rationale');
    if(!s.evidenceNote||s.evidenceNote.length<40||!s.semanticReviewNote||s.semanticReviewNote.length<40)errors.push('Evidence support and substantive semantic comparison notes are required');
    quarantine.push(...(s.concerns??['Missing uncertainty declaration']));
    const lexical=[...existing,...corpus.slice(0,i)].find(other=>other.code!==q.code&&similarity(q.stem,other.stem)>=0.65);
    if(lexical)quarantine.push(`Exact/near textual duplicate candidate ${lexical.code}`);
    // shortcut: conservative candidate gate, extend indexed retrieval and independent semantic review as the corpus grows.
    for(const match of candidates[i]??[]) {
      const d=(decisions as Record<string,{verdict:string;reason:string}>)[`${q.code}|${match.code}`] ?? (decisions as Record<string,{verdict:string;reason:string}>)[`${match.code}|${q.code}`];
      if(d?.verdict==='duplicate'||match.sameObjective||(match.score>=0.42&&!(d?.verdict==='distinct'&&d.reason.length>=40)))quarantine.push(`Semantic overlap candidate ${match.code} (${match.score}); ${d?.reason??'documented comparison required'}`);
    }
    return {code:q.code,concept:s.concept,reasoning:s.reasoning,difficulty:q.difficulty,difficultyReason:s.difficultyReason,evidenceNote:s.evidenceNote,semanticReviewNote:s.semanticReviewNote,candidates:candidates[i],errors,quarantine,question:q};
  });
  return {rows,accepted:rows.filter(r=>!r.errors.length&&!r.quarantine.length).map(r=>r.question)};
}
