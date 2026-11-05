import {beforeAll,describe,it,expect} from 'vitest';
import {db} from '@/lib/db';
import {importQuestions,setStatus,getQuestionContent,exportQuestions} from '@/lib/admin';
import {createSession} from '@/lib/exam/service';
import {materialize} from '../../content/step3/types';
import {step3Fixture} from '../fixtures/step3';
import {resetDb,makeUser} from './helpers';

describe('Step3 import and review integration',()=>{
 beforeAll(resetDb);
 it('imports/retries unchanged candidates without granting review or delivery',async()=>{
  const actor=await makeUser('ADMIN'),q=materialize(step3Fixture());
  const before=await db.question.findMany({where:{isDemo:true},orderBy:{code:'asc'},include:{options:{orderBy:{position:'asc'}}}});
  const first=await importQuestions(actor,[q],false,true);expect(first.created).toBe(1);
  const row=await db.question.findUniqueOrThrow({where:{code:q.code},include:{options:{orderBy:{position:'asc'}}}});
  expect(row).toMatchObject({status:'DRAFT',rightsStatus:'UNVERIFIED',rightsAllowDelivery:false,rightsAllowExport:false,rightsReviewedBy:null});
  await setStatus(actor,row.id,'REVIEW');
  const retry=await importQuestions(actor,[q],false,true);expect(retry).toMatchObject({created:0,updated:0,skipped:1});
  expect((await db.question.findUniqueOrThrow({where:{id:row.id},include:{options:{orderBy:{position:'asc'}}}})).options).toEqual(row.options);
  expect((await getQuestionContent(actor,row.id)).content.code).toBe(q.code);
  expect((await exportQuestions(actor)).some(x=>x.code===q.code)).toBe(false);
  await expect(setStatus(actor,row.id,'PUBLISHED')).rejects.toThrow();
  const learner=await makeUser();for(const mode of ['TUTOR','TIMED'])await expect(createSession(learner.id,{mode,count:1,questionIds:[row.id]})).rejects.toThrow('No questions match');
  expect(await db.question.findMany({where:{isDemo:true},orderBy:{code:'asc'},include:{options:{orderBy:{position:'asc'}}}})).toEqual(before);
 });
 it('rolls back a conflicting create-only batch without removing an unrelated note or bookmark',async()=>{
  const actor=await makeUser('ADMIN'),learner=await makeUser(),held=materialize(step3Fixture('op-s3-9998'));
  await importQuestions(actor,[held],false,true);
  const demo=await db.question.findFirstOrThrow({where:{isDemo:true}});
  const note=await db.note.create({data:{userId:learner.id,questionId:demo.id,body:'Synthetic preservation sentinel'}});
  const bookmark=await db.bookmark.create({data:{userId:learner.id,questionId:demo.id}});
  const count=await db.question.count();
  await expect(importQuestions(actor,[{...held,code:'op-s3-9997'},{...held,stem:held.stem+' A changed payload.'}],false,true)).rejects.toThrow('different content');
  expect(await db.question.count()).toBe(count);expect(await db.question.findUnique({where:{code:'op-s3-9997'}})).toBeNull();
  expect(await db.note.findUnique({where:{id:note.id}})).toEqual(note);expect(await db.bookmark.findUnique({where:{userId_questionId:{userId:bookmark.userId,questionId:bookmark.questionId}}})).toEqual(bookmark);
 });
});
