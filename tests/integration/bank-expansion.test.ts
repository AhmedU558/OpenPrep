import {beforeAll,expect,it} from 'vitest';
import {db} from '@/lib/db';
import {exportQuestions,importQuestions,setStatus} from '@/lib/admin';
import {validateExpansion} from '@/lib/bank-expansion';
import {questionContentSchema} from '@/lib/validation/content';
import {createSession,openSession,answer,submitItem,getView} from '@/lib/exam/service';
import {makeUser,resetDb} from './helpers';
import {specs} from '../../content/bank/expansion/batch-16';

beforeAll(resetDb);
it('persists the accepted subset of a 100-item batch and safely skips its identical retry',async()=>{
  const actor=await makeUser('ADMIN');
  const original=await db.question.findMany({orderBy:{code:'asc'},include:{options:{orderBy:{position:'asc'}}}});
  const {accepted}=validateExpansion(16,specs,[]);
  expect(accepted).toHaveLength(94);
  expect((await importQuestions(actor,accepted,false,true)).created).toBe(94);
  expect(await db.question.count()).toBe(126);
  const before=await db.question.findMany({where:{code:{startsWith:'op26x-'}},orderBy:{code:'asc'},include:{options:{orderBy:{position:'asc'}}}});
  expect((await importQuestions(actor,accepted,false,true)).skipped).toBe(94);
  expect(await db.question.findMany({where:{code:{startsWith:'op26x-'}},orderBy:{code:'asc'},include:{options:{orderBy:{position:'asc'}}}})).toEqual(before);
  const exported=new Map((await exportQuestions(actor)).map(q=>[q.code,q]));
  for(const q of accepted)expect(questionContentSchema.parse(exported.get(q.code))).toEqual(questionContentSchema.parse(q));
  expect(await db.question.findMany({where:{NOT:{code:{startsWith:'op26x-'}}},orderBy:{code:'asc'},include:{options:{orderBy:{position:'asc'}}}})).toEqual(original);
});
it('selects an imported level-four topic for tutor practice and exposes its explanations only after submission',async()=>{
  const actor=await makeUser('ADMIN'),user=await makeUser();
  const target=await db.question.findUniqueOrThrow({where:{code:'op26x-0715'},include:{options:true}});
  await setStatus(actor,target.id,'PUBLISHED');
  const session=await createSession(user.id,{mode:'TUTOR',count:1,topicIds:[target.topicId!],difficulty:[4]});
  await openSession(user.id,session);
  expect((await getView(user.id,session)).question.reveal).toBeNull();
  await answer(user.id,session,0,[target.options.find(o=>o.isCorrect)!.id]);
  await submitItem(user.id,session,0);
  const view=await getView(user.id,session);
  expect(view.question.code).toBe(target.code);
  expect(view.question.reveal?.isCorrect).toBe(true);
  expect(view.question.reveal?.source).toContain('medically unreviewed');
  expect(view.question.options.every(o=>o.explanationHtml)).toBe(true);
});
