import 'dotenv/config';
import { readFile,writeFile,mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { loadStep3Batches } from './step3-catalog';
import { validateStep3Batch } from '../src/lib/step3-bank';
import { normalize } from '../src/lib/question-bank';
import { questionContentSchema, type QuestionContent } from '../src/lib/validation/content';
import { categoryTargets } from '../content/step3/types';
import { testDatabaseUrl } from './test-database';

const sha=(raw:unknown)=>createHash('sha256').update(JSON.stringify(raw)).digest('hex');
const canonical=(raw:unknown)=>JSON.stringify(questionContentSchema.parse(raw));
const root='docs/step-3',out=`${root}/batches`;
await mkdir(out,{recursive:true});
await mkdir('content/step3/generated',{recursive:true});
const baseline=JSON.parse(await readFile('.release/step3/existing-corpus.json','utf8')) as QuestionContent[];
const batches=await loadStep3Batches();
const corpus=(q:QuestionContent)=>({code:q.code,stem:q.stem,objective:q.objective??null,answer:q.options.filter(o=>o.correct).map(o=>o.text).join('; ')});
const allCodes=new Set<string>(),allConcepts=new Set<string>();
const manifest:{schemaVersion:number;target:number;environment:string;at:string;counts:{authored:number;imported:number;structurallyValid:number;duplicateOrRejected:number;awaitingHumanReview:number;humanApproved:number;practiceReady:number};coverage:Record<string,number>;targets:typeof categoryTargets;batches:unknown[];questions:unknown[];limitations:string[]}={schemaVersion:1,target:1000,environment:'local candidates; disposable database integration only',at:new Date().toISOString(),counts:{authored:0,imported:0,structurallyValid:0,duplicateOrRejected:0,awaitingHumanReview:0,humanApproved:0,practiceReady:0},coverage:{},targets:categoryTargets,batches:[],questions:[],limitations:['Automated checks cannot establish clinical correctness or permission.','No production or existing study database writes; all clinical/rights approvals remain pending.']};
const importing=process.argv.includes('--import'),withdraw=process.argv.includes('--withdraw-batch');
let db:typeof import('../src/lib/db').db|undefined;
try{
 if(importing||withdraw){
  const primary=process.env.DATABASE_URL,target=testDatabaseUrl(process.env.TEST_DATABASE_URL,primary);
  const expected=JSON.parse(await readFile('.release/step3/database-target.json','utf8')) as {database:string;port:string};
  const url=new URL(target);assert.equal(url.pathname.slice(1),expected.database);assert.equal(url.port,expected.port);
  process.env.DATABASE_URL=target;db=(await import('../src/lib/db')).db;
 }
 const actor=db?await db.user.upsert({where:{id:'step3-candidate-importer'},update:{},create:{id:'step3-candidate-importer',name:'Step3 candidate importer (not a clinician)',email:'step3-importer@test.localhost',role:'ADMIN'},select:{id:true,role:true}}):null;
 if(db&&withdraw){
  const selected=process.argv[process.argv.indexOf('--withdraw-batch')+1];assert(/^batch-\d{2}$/.test(selected??''));
  const batch=batches.find(b=>b.id===selected);assert(batch);
  const saved=JSON.parse(await readFile(`${out}/${selected}.json`,'utf8'));const codes=saved.firstImport?.codes as string[]|undefined;assert(codes?.length,'No recorded import codes; withdrawal needs the original batch report.');
  const lower=(Number(selected!.slice(-2))-1)*100;assert(codes.every(code=>/^op-s3-\d{4}$/.test(code)&&Number(code.slice(-4))>lower&&Number(code.slice(-4))<=lower+100),'Recorded codes do not belong to this batch.');
  const rows=await db.question.findMany({where:{code:{in:codes}},include:{_count:{select:{sessionItems:true,responses:true,notes:true,cards:true,bookmarks:true,collectionItems:true,reports:true,tags:true}}}});
  assert(rows.every(q=>q.authorId===actor!.id&&!q.rightsAllowDelivery&&!q.rightsAllowExport&&q.status!=='PUBLISHED'&&Object.values(q._count).every(n=>n===0)),'Withdrawal refused: unrelated, approved or referenced record.');
  assert.equal(await db.notebookPage.count({where:{OR:[{sourceQuestionIds:{hasSome:[...rows.map(q=>q.id),...codes.map(code=>`code:${code}`)]}},...codes.map(code=>({body:{contains:`— Question ${code}`}}))]}}),0,'Withdrawal refused: a notebook clip references this batch.');
  const {setStatus}=await import('../src/lib/admin');for(const row of rows)if(row.status!=='ARCHIVED')await setStatus(actor!,row.id,'ARCHIVED');
  console.log(JSON.stringify({batch:selected,archived:rows.length,deleted:0}));process.exitCode=0;
 }else{
  if(db){for(const [position,name,slug] of [[0,'Step 1','step-1'],[1,'Step 2 CK','step-2-ck'],[2,'Step 3','step-3']] as const)await db.exam.upsert({where:{slug},update:{},create:{name,slug,position}});}
  const prior=baseline.map(corpus);
  for(const batch of batches){
   const validation=validateStep3Batch(batch.specs,prior),questions=validation.rows.map(r=>r.question);
   for(const [i,s] of batch.specs.entries()){
    const row=validation.rows[i]!;
    const lower=(Number(batch.id.slice(-2))-1)*100;
    if(Number(s.code.slice(-4))<=lower||Number(s.code.slice(-4))>lower+100){row.blocked=true;row.structurallyValid=false;row.findings.push({severity:'block',kind:'batch-identifier',detail:'Stable code lies outside this batch range.'});}
    if(allCodes.has(s.code)||allConcepts.has(normalize(s.concept))){row.blocked=true;row.findings.push({severity:'block',kind:'cross-batch-duplicate',detail:'Repeated stable code or normalized concept in this collection.'});}
    allCodes.add(s.code);allConcepts.add(normalize(s.concept));
    manifest.coverage[s.category]=(manifest.coverage[s.category]??0)+1;
   }
   const accepted=validation.rows.filter(r=>!r.blocked).map(r=>r.question);
   await writeFile(`content/step3/generated/${batch.id}.json`,JSON.stringify(accepted,null,2));
   let imported=0,skipped=0,persisted=0;const persistedCodes=new Set<string>();
   if(db&&accepted.length&&batch.specs.length===100){
    const {importQuestions,setStatus,getQuestionContent}=await import('../src/lib/admin');
    const result=await importQuestions(actor!,accepted,false,true);assert.deepEqual(result.errors,[]);assert.equal(result.updated,0);imported=result.created;skipped=result.skipped;
    const stored=await db.question.findMany({where:{code:{in:accepted.map(q=>q.code)}},select:{id:true,code:true,status:true,rightsStatus:true,rightsAllowDelivery:true,rightsAllowExport:true,rightsReviewedBy:true}});
    for(const row of stored){assert.equal(row.rightsStatus,'UNVERIFIED');assert.equal(row.rightsAllowDelivery,false);assert.equal(row.rightsAllowExport,false);assert.equal(row.rightsReviewedBy,null);if(row.status==='DRAFT')await setStatus(actor!,row.id,'REVIEW');else assert.equal(row.status,'REVIEW');const value=await getQuestionContent(actor!,row.id);assert.equal(canonical(value.content),canonical(accepted.find(q=>q.code===row.code)));}
    persisted=stored.length;for(const row of stored)persistedCodes.add(row.code);assert.equal(persisted,accepted.length);
   }
   const previous=await readFile(`${out}/${batch.id}.json`,'utf8').then(JSON.parse).catch(()=>null);
   const report={batch:batch.id,at:new Date().toISOString(),contentHash:sha(batch.specs),authored:batch.specs.length,structurallyValid:validation.rows.filter(r=>r.structurallyValid).length,duplicateOrRejected:validation.rows.filter(r=>r.blocked).length,createdThisRun:imported,skippedThisRun:skipped,imported:persisted,humanApproved:0,practiceReady:0,firstImport:previous?.firstImport??(imported?{at:new Date().toISOString(),created:imported,codes:accepted.map(q=>q.code),contentHash:sha(accepted)}:null),findings:validation.rows.map(r=>({code:r.code,candidates:r.candidates,findings:r.findings,structurallyValid:r.structurallyValid,blocked:r.blocked}))};
   await writeFile(`${out}/${batch.id}.json`,JSON.stringify(report,null,2));
   await writeFile(`${out}/${batch.id}.md`,`# ${batch.id}\n\nAuthored ${report.authored}; structurally valid ${report.structurallyValid}; blocked ${report.duplicateOrRejected}; imported ${report.imported}; human-approved0; practice-ready0.\n\nAll imported candidates are REVIEW, UNVERIFIED rights and medically unreviewed. See the JSON report for every finding.\n`);
   manifest.batches.push(report);manifest.counts.authored+=report.authored;manifest.counts.imported+=persisted;manifest.counts.structurallyValid+=report.structurallyValid;manifest.counts.duplicateOrRejected+=report.duplicateOrRejected;manifest.counts.awaitingHumanReview+=report.authored-report.duplicateOrRejected;
   for(const [i,s] of batch.specs.entries()){const row=validation.rows[i]!;manifest.questions.push({batchId:batch.id,code:s.code,subject:s.subject,system:s.system,topic:s.topic,subtopic:s.subtopic,category:s.category,task:s.task,setting:s.setting,service:s.service,ageGroup:s.ageGroup,nutrition:s.nutrition,difficulty:s.difficulty,objective:s.objective,generationStatus:'authored-original-ai-candidate',importStatus:row.blocked?'blocked':persistedCodes.has(s.code)?'imported-review':'not-imported',structuralValidationStatus:row.structurallyValid?'passed':'failed',duplicateDetectionStatus:row.blocked?'blocked':row.findings.some(f=>f.kind==='semantic-overlap')?'candidate-needs-review':'automated-screen-complete',humanReviewStatus:'pending',publicationStatus:'withheld',rightsStatus:'UNVERIFIED',referenceVerificationStatus:'claim-level-human-verification-pending',contentHash:sha(row.question),references:s.references,findings:row.findings});}
   prior.push(...questions.map(corpus));
   await writeFile(`${root}/step3-question-manifest.json`,JSON.stringify(manifest,null,2));
   console.log(JSON.stringify({...report,findings:undefined}));
  }
  if(db)assert.equal(await db.question.count({where:{code:{startsWith:'op-s3-'},OR:[{status:'PUBLISHED'},{rightsStatus:'VERIFIED'},{rightsAllowDelivery:true},{rightsAllowExport:true}]}}),0);
  console.log(JSON.stringify({counts:manifest.counts,coverage:manifest.coverage}));
 }
}finally{if(db)await db.$disconnect();}
