import type { QuestionContent } from '../../src/lib/validation/content';

export const categoryTargets = { biostatistics:120,cardiovascular:100,neurological:90,respiratory:90,reproductive:80,ethics:80,gastrointestinal:70,multisystem:80,endocrine:60,musculoskeletal:60,behavioral:50,renal:50,skin:50,'human-development':20 } as const;
export type Step3Spec = {
  code:string; category:keyof typeof categoryTargets; subject:string; system:string; topic:string; subtopic:string;
  concept:string; task:'diagnosis'|'management'|'evidence'|'foundational-science'|'communication';
  setting:'ambulatory'|'emergency'|'hospital'; service:string; ageGroup:'pediatric'|'adult'|'older-adult';
  nutrition:boolean; difficulty:2|3|4|5; difficultyRationale:string;
  stem:string; choices:[string,string][]; explanation:string; objective:string; takeaways:string[];
  references:QuestionContent['references']; evidenceNote:string; concerns:string[];
};

export function materialize(s:Step3Spec):QuestionContent {
  const offset=Number(s.code.slice(-4))%s.choices.length;
  const options=s.choices.map(([text,explanation],i)=>({text,explanation,correct:i===0}));
  return {code:s.code,exam:'Step 3',subject:s.subject,system:s.system,topic:s.topic,type:'SINGLE',difficulty:s.difficulty,
    stem:s.stem,options:[...options.slice(offset),...options.slice(0,offset)],explanation:s.explanation,objective:s.objective,
    keyPoints:s.takeaways,references:s.references,source:'OpenPrep original; AI-authored; medically unreviewed',
    license:'CC-BY-SA-4.0',attribution:'OpenPrep contributors; authorship and redistribution authority pending human evidence review'};
}
