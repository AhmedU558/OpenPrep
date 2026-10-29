import 'dotenv/config';
import {readdir,readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
import {db} from '../src/lib/db';
import {exportQuestions} from '../src/lib/admin';
import {authorBatch} from '../content/bank/author';
import {questionContentSchema} from '../src/lib/validation/content';
import type {ExpansionSpec} from '../content/bank/expansion/types';
import {listQuestions,searchIds} from '../src/lib/questions';
import {filtersSchema} from '../src/lib/validation/exam';

const dir='content/bank/expansion';
try{
  const actor=await db.user.findFirstOrThrow({where:{role:'ADMIN'},select:{id:true,role:true}});
  const exported=new Map((await exportQuestions(actor)).map(q=>[q.code,q]));
  const stored=await db.question.findMany({where:{code:{startsWith:'op26x-'}},select:{code:true,status:true,difficulty:true}});
  const documents=await Promise.all((await readdir(dir)).filter(f=>/^batch-\d+\.ts$/.test(f)).sort().map(async f=>({name:f,specs:(await import(pathToFileURL(resolve(dir,f)).href) as {specs:ExpansionSpec[]}).specs})));
  const batchReports=await Promise.all(documents.map(d=>readFile(`${dir}/reports/${d.name.replace('.ts','.json')}`,'utf8').then(JSON.parse).catch(()=>null)));
  const all=documents.flatMap(d=>d.specs);
  const canonical=(q:unknown)=>JSON.stringify(questionContentSchema.parse(q));
  const expected=documents.flatMap(d=>authorBatch(Number(d.name.match(/\d+/)![0]),d.specs.map(s=>s.question),d.specs.map(s=>s.code)));
  const missing=expected.filter(q=>!exported.has(q.code)).map(q=>q.code);
  const mismatches=expected.filter(q=>exported.has(q.code)&&canonical(q)!==canonical(exported.get(q.code))).map(q=>q.code);
  const counts=(values:string[])=>Object.fromEntries([...new Set(values)].sort().map(v=>[v,values.filter(x=>x===v).length]));
  const items=all.map(s=>{
    const status=stored.find(q=>q.code===s.code)?.status??'NOT_IMPORTED';
    const report=batchReports.find(r=>r?.items.some((i:{code:string})=>i.code===s.code));
    const finding=report?.items.find((i:{code:string})=>i.code===s.code);
    const broad=/\/books\/NBK\d+\/?$|\/preface$|pocket-book|978-92-4/.test(s.question.reference[1]);
    return {code:s.code,status,subject:s.question.subject,topic:s.question.topic,objective:s.question.objective,difficulty:s.question.difficulty,difficultyReason:s.difficultyReason,
      requiresQualifiedMedicalReview:true,medicalAccuracyVerified:false,reference:s.question.reference,evidenceNote:s.evidenceNote,
      referenceSpecificity:broad?'book-level; exact claim/chapter mapping incomplete':'specific resource; individual answer and distractor validation still incomplete',
      claimsNeedingQualifiedSupport:[s.question.objective,`Proposed key: ${s.question.options[0]?.[0]}`],
      jurisdictionReview:s.question.reference[1].includes('nice.org.uk')?'UK guidance: confirm current US applicability for the vignette':'Confirm applicability and current version where clinical recommendations are tested',
      unsupportedClaimStatus:'No exhaustive independent claim verification; source note records the author check and limits. Absence of a flag is not proof of accuracy.',
      ambiguityFlags:[...new Set([...s.concerns,...(finding?.errors??[]),...(finding?.quarantine??[])])],semanticReviewNote:s.semanticReviewNote,nearestCandidates:finding?.candidates??[]};
  });
  const practiceRows=await db.question.findMany({where:{code:{in:all.map(s=>s.code)},status:'PUBLISHED'},orderBy:{code:'asc'},select:{id:true,code:true,examId:true,subjectId:true,topicId:true,difficulty:true,objective:true}});
  const samples=[...new Map(practiceRows.map(q=>[`${q.examId}:${q.difficulty}`,q])).values()];
  const practiceChecks=[];
  for(const q of samples){
    const filter=filtersSchema.parse({examIds:[q.examId],subjectIds:[q.subjectId],topicIds:q.topicId?[q.topicId]:[],difficulty:[q.difficulty]});
    const matches=await listQuestions(null,filter,1);
    const keyword=q.objective?.replace(/[^a-zA-Z\s]/g,' ').split(/\s+/).find(w=>w.length>7)??'';
    const searchMatches=keyword?await searchIds(keyword):[];
    practiceChecks.push({code:q.code,difficulty:q.difficulty,filterEligible:matches.rows.some(r=>r.id===q.id),keyword,searchEligible:searchMatches.includes(q.id)});
  }
  const report={at:new Date().toISOString(),baseline:232,target:1000,generated:all.length,imported:stored.length,rejected:items.filter(i=>batchReports.some(r=>r?.items.some((x:{code:string;errors:string[]})=>x.code===i.code&&x.errors.length))).length,
    quarantined:items.filter(i=>i.ambiguityFlags.length).length,available:stored.filter(q=>q.status==='PUBLISHED').length,total:await db.question.count(),review:stored.filter(q=>q.status==='REVIEW').length,
    byExam:counts(all.map(s=>s.question.exam??'Step 1')),bySubject:counts(all.map(s=>s.question.subject)),byTopic:counts(all.map(s=>`${s.question.subject} / ${s.question.topic}`)),byDifficulty:counts(all.map(s=>String(s.question.difficulty))),byObjective:counts(all.map(s=>s.question.objective)),
    availableByDifficulty:counts(stored.filter(q=>q.status==='PUBLISHED').map(q=>String(q.difficulty))),
    missing,mismatches,practiceChecks,batchResults:batchReports.filter(Boolean).map(r=>({...r,items:undefined})),
    sourceHashes:Object.fromEntries(documents.map(d=>[d.name,createHash('sha256').update(JSON.stringify(d.specs)).digest('hex')])),
    quality:{qualifiedReviewCompleted:0,claimLevelAccuracyEstablished:false,bookLevelReferenceItems:items.filter(i=>i.referenceSpecificity.startsWith('book-level')).length,reviewRequired:items.length,items}};
  await mkdir(`${dir}/reports`,{recursive:true});
  await writeFile(`${dir}/reports/final-verification.json`,JSON.stringify(report,null,2));
  const flagged=items.filter(i=>i.ambiguityFlags.length);
  const markdown=`# Expansion content-quality report\n\nGenerated ${report.generated}; stored ${report.imported}; available ${report.available}; rejected ${report.rejected}; quarantined/flagged ${report.quarantined}; in REVIEW ${report.review}. Total database: ${report.total}.\n\n## What these checks establish\n\nSource/content hashes and full-field database comparisons found ${mismatches.length} mismatches. ${missing.length} authored codes are not stored. Structural validation, rubric-tag mapping and documented AI semantic comparisons are separate from qualified medical review. No medical accuracy certification or psychometric calibration is claimed.\n\n## Unsupported claims and incomplete references\n\nAll ${items.length} items require qualified medical review. ${report.quality.bookLevelReferenceItems} use book-level references without completed exact chapter/claim mapping. More specific links also require verification of each key, distractor, management condition and current US applicability. The machine-readable report lists the actual evidence note and source for every item; it does not assume a working URL proves support. No citation snippets or proprietary questions were reproduced.\n\n## Answer ambiguity and repetition queue\n\n${flagged.length?flagged.map(i=>`- **${i.code}** (${i.status}): ${i.ambiguityFlags.join('; ')}`).join('\n'):'No explicit ambiguity flags recorded; this does not establish an unambiguous clinical key.'}\n\n## Difficulty and semantic limitations\n\nLevels follow the author cognitive-demand rubric and per-item rationale. They remain provisional; reviewers should challenge overestimated reasoning complexity, including level-five causal/statistical items where a learner may use fewer steps. Local synonym-aware TF-IDF and trigram screens retrieve candidates; the paired decisions and author notes document AI comparisons, not independent expert validation or a guarantee that every semantic duplicate was found.\n\n## Review priorities\n\n1. Resolve the explicit repetition/ambiguity queue before any practice reactivation.\n2. Verify management and referral items against current US practice and relevant patient exceptions; many clinical resources are NICE/UK, WHO or older textbooks.\n3. Replace broad further-reading references with exact supporting chapters or primary recommendations. Confirm drug interaction and dosing-context claims individually.\n4. Assess every option for plausible competing answers, missing case constraints, unintended clues and fair cognitive demand.\n5. Preserve original content versions and option IDs; record qualified reviewer identity, date and reviewed hash only after actual review.\n\nSee [machine-readable evidence](../content/bank/expansion/reports/final-verification.json) for per-item notes, counts by exam/subject/topic/difficulty/objective and source hashes.\n`;
  await writeFile('docs/question-bank-content-quality.md',markdown);
  console.log(JSON.stringify({...report,quality:undefined,byTopic:undefined,byObjective:undefined,batchResults:undefined,sourceHashes:undefined}));
  if(mismatches.length||report.total<1000||report.available<768||practiceChecks.some(p=>!p.filterEligible||!p.searchEligible))process.exitCode=1;
}finally{await db.$disconnect();}
