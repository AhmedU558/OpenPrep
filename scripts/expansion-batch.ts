import 'dotenv/config';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { db } from '../src/lib/db';
import { exportQuestions, importQuestions, setStatus } from '../src/lib/admin';
import { questionContentSchema } from '../src/lib/validation/content';
import { validateExpansion } from '../src/lib/bank-expansion';
import type { ExpansionSpec } from '../content/bank/expansion/types';

const batch=Number(process.argv[2]),tag=String(batch).padStart(2,'0'),dir='content/bank/expansion';
if(!Number.isInteger(batch)||batch<9)throw new Error('Usage: npm run bank:expand -- 9 [--import]');
try{
  const {specs}=await import(pathToFileURL(resolve(`${dir}/batch-${tag}.ts`)).href) as {specs:ExpansionSpec[]};
  const actor=await db.user.findFirstOrThrow({where:{role:'ADMIN'},select:{id:true,role:true}});
  const all=await exportQuestions(actor);
  const validation=validateExpansion(batch,specs,all.map(q=>({code:q.code,stem:q.stem,objective:q.objective??null,answer:q.options.filter(o=>o.correct).map(o=>o.text).join('; ')})));
  await mkdir(`${dir}/reports`,{recursive:true});await mkdir(`${dir}/generated`,{recursive:true});
  const digest=createHash('sha256').update(JSON.stringify(specs)).digest('hex');
  const path=`${dir}/reports/batch-${tag}.json`;
  const previous=await readFile(path,'utf8').then(JSON.parse).catch(()=>null);
  const report={batch,at:new Date().toISOString(),digest,generated:specs.length,eligible:validation.accepted.length,rejected:validation.rows.filter(r=>r.errors.length).length,quarantined:validation.rows.filter(r=>!r.errors.length&&r.quarantine.length).length,imported:0,skipped:0,available:0,persisted:0,stored:0,storedReview:0,before:await db.question.count(),after:0,mismatches:[] as string[],firstImport:previous?.firstImport??null,
    items:validation.rows.map(({question,...row})=>({...row,exam:question.exam,subject:question.subject,topic:question.topic,objective:question.objective,reference:question.references}))};
  await writeFile(`${dir}/generated/batch-${tag}.json`,JSON.stringify(validation.accepted,null,2));
  if(process.argv.includes('--import')){
    if(!['localhost','127.0.0.1','[::1]'].includes(new URL(process.env.BETTER_AUTH_URL??'http://localhost').hostname))throw new Error('Local practice expansion requires a locally configured app');
    if(validation.accepted.length){
      const result=await importQuestions(actor,validation.accepted,false,true);
      if(result.errors.length)throw new Error(JSON.stringify(result.errors));
      report.imported=result.created;report.skipped=result.skipped;
    }
    const rows=await db.question.findMany({where:{code:{in:validation.accepted.map(q=>q.code)}}});
    for(const q of rows)if(q.status==='DRAFT')await setStatus(actor,q.id,'PUBLISHED');
    const flagged=await db.question.findMany({where:{code:{in:validation.rows.filter(r=>r.errors.length||r.quarantine.length).map(r=>r.code)}}});
    for(const q of flagged)if(q.status==='PUBLISHED'||q.status==='DRAFT')await setStatus(actor,q.id,'REVIEW');
  }
  const persisted=(await exportQuestions(actor)).filter(q=>validation.accepted.some(w=>w.code===q.code));
  report.persisted=persisted.length;
  const canonical=(q:unknown)=>JSON.stringify(questionContentSchema.parse(q));
  report.mismatches=validation.accepted.filter(q=>{const actual=persisted.find(p=>p.code===q.code);return actual?canonical(actual)!==canonical(q):process.argv.includes('--import');}).map(q=>q.code);
  report.available=await db.question.count({where:{code:{in:validation.accepted.map(q=>q.code)},status:'PUBLISHED'}});
  report.stored=await db.question.count({where:{code:{in:specs.map(s=>s.code)}}});
  report.storedReview=await db.question.count({where:{code:{in:specs.map(s=>s.code)},status:'REVIEW'}});
  report.after=await db.question.count();
  if(process.argv.includes('--import')&&!report.firstImport)report.firstImport={at:report.at,before:report.before,after:report.after,imported:report.imported,digest};
  await writeFile(path,JSON.stringify(report,null,2));
  console.log(JSON.stringify({...report,items:undefined}));
  if(report.rejected||report.quarantined||process.argv.includes('--import')&&report.mismatches.length)process.exitCode=1;
}catch(error){
  await mkdir(`${dir}/reports`,{recursive:true});
  await writeFile(`${dir}/reports/batch-${tag}-error.json`,JSON.stringify({batch,at:new Date().toISOString(),error:error instanceof Error?error.message:String(error),resume:'Read persisted stable codes before retry; the importer is create-only.'},null,2));throw error;
}finally{await db.$disconnect();}
