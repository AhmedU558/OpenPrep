import { beforeAll, describe, expect, it } from 'vitest';
import { db } from '@/lib/db';
import { getQuestionContent, importQuestions, listQuestionsAdmin, setStatus, updateQuestion } from '@/lib/admin';
import { answer, createSession, getResults, getView, openSession, submitItem, submitSession } from '@/lib/exam/service';
import { facets, listQuestions } from '@/lib/questions';
import { filtersSchema } from '@/lib/validation/exam';
import { saveNote, setBookmark } from '@/lib/study';
import { overview } from '@/lib/analytics';
import { questions } from '../../content/bank/batch-01';
import { makeUser, resetDb } from './helpers';

beforeAll(resetDb);
describe('bank import and learning integration on isolated test database', () => {
  it('creates 25 drafts, skips identical retries without changing option IDs, rejects conflicting codes', async () => {
    const admin = await makeUser('ADMIN');
    const original = await db.question.findMany({include:{options:true},orderBy:{code:'asc'}});
    expect((await importQuestions(admin,questions,true,true)).created).toBe(25);
    expect(await db.question.count()).toBe(32);
    expect((await importQuestions(admin,questions,false,true)).created).toBe(25);
    const bank = await db.question.findMany({where:{code:{startsWith:'op26-'}},include:{options:{orderBy:{position:'asc'}}},orderBy:{code:'asc'}});
    expect(bank).toHaveLength(25);
    expect(bank.every(q => q.status === 'DRAFT')).toBe(true);
    expect((await importQuestions(admin,questions,false,true)).skipped).toBe(25);
    expect(await db.question.findMany({where:{code:{startsWith:'op26-'}},include:{options:{orderBy:{position:'asc'}}},orderBy:{code:'asc'}})).toEqual(bank);
    await expect(importQuestions(admin,[{...questions[0]!,stem:'A changed existing question must not overwrite original content.'}],false,true)).rejects.toMatchObject({code:'CONFLICT'});
    expect(await db.question.findMany({where:{NOT:{code:{startsWith:'op26-'}}},include:{options:true},orderBy:{code:'asc'}})).toEqual(original);
  });
  it('rolls back the entire batch on unknown exam and blocks unauthorized imports', async () => {
    const admin = await makeUser('ADMIN'), learner = await makeUser();
    await expect(importQuestions(learner,questions,false,true)).rejects.toMatchObject({code:'FORBIDDEN'});
    await expect(importQuestions(admin,[{...questions[0]!,code:'rollback-one'}, {...questions[1]!,code:'rollback-two',exam:'Missing exam'}],false,true)).rejects.toMatchObject({code:'INVALID'});
    expect(await db.question.count({where:{code:{startsWith:'rollback-'}}})).toBe(0);
  });
  it('supports admin search, edit, categorization and status permissions', async () => {
    const admin = await makeUser('ADMIN'), editor = await makeUser('EDITOR'), learner = await makeUser();
    const row = await db.question.findUniqueOrThrow({where:{code:questions[0]!.code}});
    expect((await listQuestionsAdmin(admin,{q:row.code})).total).toBe(1);
    const content = await getQuestionContent(admin,row.id);
    expect(content.content.topic).toBe('Axillary nerve');
    await updateQuestion(editor,row.id,content.content);
    await setStatus(editor,row.id,'REVIEW');
    await expect(setStatus(editor,row.id,'PUBLISHED')).rejects.toMatchObject({code:'FORBIDDEN'});
    await expect(getQuestionContent(learner,row.id)).rejects.toMatchObject({code:'FORBIDDEN'});
    for (const q of await db.question.findMany({where:{code:{startsWith:'op26-'}}})) await setStatus(admin,q.id,'PUBLISHED');
    expect((await importQuestions(admin,questions,false,true)).skipped).toBe(25);
  });
  it('filters subjects and topics, searches, and selects only matching practice questions', async () => {
    const user = await makeUser();
    const target = await db.question.findUniqueOrThrow({where:{code:questions[0]!.code}});
    const filter = filtersSchema.parse({subjectIds:[target.subjectId],topicIds:[target.topicId!],q:'climber'});
    const result = await listQuestions(user.id,filter,1);
    expect(result.rows.map(q => q.id)).toEqual([target.id]);
    const fx = await facets({status:'PUBLISHED'});
    expect(fx.topics.find(t => t.id === target.topicId)?.count).toBe(1);
    const id = await createSession(user.id,{...filter,mode:'TUTOR',count:10});
    expect((await db.sessionItem.findMany({where:{sessionId:id}})).map(i => i.questionId)).toEqual([target.id]);
  });
  it.each(['TUTOR','TIMED'] as const)('%s scoring, explanation, notes, marks, history and ownership', async mode => {
    const user = await makeUser(), other = await makeUser();
    const bank = await db.question.findMany({where:{code:{in:[questions[0]!.code,questions[1]!.code]}},include:{options:true},orderBy:{code:'asc'}});
    const id = await createSession(user.id,{mode,count:2,questionIds:bank.map(q => q.id)});
    await openSession(user.id,id);
    expect((await getView(user.id,id)).question.reveal).toBeNull();
    await expect(getView(other.id,id)).rejects.toMatchObject({code:'NOT_FOUND'});
    const items = await db.sessionItem.findMany({where:{sessionId:id},orderBy:{position:'asc'}});
    for (const [i,it] of items.entries()) {
      const q = bank.find(q => q.id === it.questionId)!;
      await answer(user.id,id,it.position,[q.options.find(o => o.isCorrect === (i === 0))!.id]);
      if(mode === 'TUTOR') await submitItem(user.id,id,it.position);
    }
    await submitSession(user.id,id);
    const view = await getView(user.id,id);
    expect(view.question.reveal?.explanationHtml).toContain('<p>');
    expect(view.question.options.every(o => o.explanationHtml && typeof o.isCorrect === 'boolean')).toBe(true);
    expect(view.question.isAiAuthored).toBe(true);
    expect(view.question.reveal?.source).toContain('unreviewed');
    expect(view.question.reveal?.references[0]?.url).toMatch(/^https:/);
    expect((await getResults(user.id,id)).score).toMatchObject({correct:1,incorrect:1,total:2});
    await saveNote(user.id,bank[0]!.id,'An original bank note');
    await setBookmark(user.id,bank[0]!.id,true);
    expect(await db.note.count({where:{userId:user.id}})).toBe(1);
    expect(await db.bookmark.count({where:{userId:user.id}})).toBe(1);
    expect(await overview(user.id)).toMatchObject({used:2,correct:1,incorrect:1});
    expect(await db.response.count({where:{userId:user.id,sessionId:id}})).toBe(2);
    expect(await db.response.count({where:{userId:other.id}})).toBe(0);
  });
});
