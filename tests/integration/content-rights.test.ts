import { beforeEach, describe, expect, it } from 'vitest';
import { db } from '@/lib/db';
import { createQuestion, exportQuestions, getQuestionContent, importQuestions, setStatus, updateQuestion } from '@/lib/admin';
import { reviewContentRights, submitRightsEvidence } from '@/lib/content-rights';
import { filtersSchema } from '@/lib/validation/exam';
import { listQuestions, facets, searchIds } from '@/lib/questions';
import { createSession, getView, getResults, openSession, submitSession } from '@/lib/exam/service';
import { cardFromQuestion, createCard, dueCards, saveNote } from '@/lib/study';
import { clipToNotebook, getPage, updatePage } from '@/lib/notebook';
import { exportMyData } from '@/lib/account';
import { seed } from '../../prisma/seed';
import { approveFixtureRights } from '../fixtures/rights';
import { makeUser, resetDb } from './helpers';

const content = (code: string) => ({ code, exam: 'Step 1', subject: 'Pharmacology', system: 'Renal', stem: 'A synthetic rights sentinel question?', options: [{ text: 'One', correct: true }, { text: 'Two', correct: false }], explanation: 'This is a synthetic regression fixture explanation.', source: 'Synthetic fixture author', license: 'CC-BY-SA-4.0' });
const version = async (id: string) => (await db.question.findUniqueOrThrow({ where: { id } })).updatedAt.toISOString();
const decide = async (actor: Awaited<ReturnType<typeof makeUser>>, id: string, status: 'DISPUTED' | 'REJECTED') => reviewContentRights(actor, id, { version: await version(id), status, reason: 'Synthetic regression dispute, not a real rights allegation.', allowDelivery: true, allowExport: true });
beforeEach(resetDb);

describe('content rights trust boundaries', () => {
  it('imports and CC declarations cannot forge verification, delivery or export permission', async () => {
    const admin = await makeUser('ADMIN'), learner = await makeUser();
    await importQuestions(admin, [{ ...content('rights-sentinel'), rightsStatus: 'VERIFIED', rightsAllowDelivery: true, rightsAllowExport: true }], false);
    const q = await db.question.findUniqueOrThrow({ where: { code: 'rights-sentinel' } });
    expect(q).toMatchObject({ license: 'CC-BY-SA-4.0', rightsStatus: 'UNVERIFIED', rightsAllowDelivery: false, rightsAllowExport: false });
    await expect(db.question.update({where:{id:q.id},data:{rightsStatus:'VERIFIED',rightsAllowDelivery:true}})).rejects.toThrow();
    await expect(setStatus(admin,q.id,'PUBLISHED')).rejects.toMatchObject({ code: 'FORBIDDEN' });
    // Even an independently pre-existing PUBLISHED row remains withheld after the additive migration.
    await db.question.update({ where: { id:q.id }, data:{ status:'PUBLISHED' } });
    expect((await listQuestions(learner.id,filtersSchema.parse({ q:'sentinel' }),1)).rows).toHaveLength(0);
    expect(await searchIds('sentinel')).not.toContain(q.id);
    expect((await exportQuestions(admin)).map(x=>x.code)).not.toContain(q.code);
    await expect(createSession(learner.id,{ mode:'TUTOR',count:1,questionIds:[q.id] })).rejects.toThrow(/No questions/);
    await expect(createCard(learner.id,{front:'A',back:'B',questionId:q.id})).rejects.toMatchObject({ code:'NOT_FOUND' });
    await expect(clipToNotebook(learner.id,{text:'Withheld text',source:`Question ${q.code}`})).rejects.toMatchObject({ code:'NOT_FOUND' });
    const fx=await facets({id:q.id,status:'PUBLISHED'});
    expect(fx.exams.reduce((n,e)=>n+e.count,0)).toBe(0);
  });

  it('only admins can verify current evidence and delivery/export scopes are independent', async () => {
    const admin=await makeUser('ADMIN'),editor=await makeUser('EDITOR'),learner=await makeUser();
    const id=await createQuestion(editor,content('scope-sentinel'));
    const decision={version:await version(id),status:'VERIFIED',reason:'Synthetic fixture authorization checked.',allowDelivery:true,allowExport:true};
    await expect(reviewContentRights(admin,id,decision)).rejects.toMatchObject({code:'INVALID'});
    await expect(submitRightsEvidence(learner,id,{version:await version(id),holder:'Fixture',evidence:'Synthetic fixture reference'})).rejects.toMatchObject({code:'FORBIDDEN'});
    await submitRightsEvidence(editor,id,{version:await version(id),holder:'Fixture',evidence:'Synthetic fixture reference'});
    await expect(reviewContentRights(editor,id,{...decision,version:await version(id)})).rejects.toMatchObject({code:'FORBIDDEN'});
    await expect(reviewContentRights(admin,id,decision)).rejects.toMatchObject({code:'CONFLICT'});
    await approveFixtureRights(admin,id,true,false);
    await setStatus(admin,id,'PUBLISHED');
    expect((await listQuestions(learner.id,filtersSchema.parse({q:'sentinel'}),1)).rows.map(q=>q.id)).toContain(id);
    expect((await exportQuestions(admin)).map(q=>q.code)).not.toContain('scope-sentinel');
    await approveFixtureRights(admin,id,false,true);
    expect((await exportQuestions(admin)).map(q=>q.code)).toContain('scope-sentinel');
    await expect(createSession(learner.id,{mode:'TUTOR',count:1,questionIds:[id]})).rejects.toThrow(/No questions/);
    expect(JSON.stringify(await exportQuestions(admin))).not.toContain('Synthetic test fixture');
  });

  it('editing or bulk replacement invalidates approval; identical retries preserve it; dry runs roll back', async () => {
    const admin=await makeUser('ADMIN'),id=await createQuestion(admin,content('edit-sentinel'));
    await approveFixtureRights(admin,id);
    const before=await db.question.findUniqueOrThrow({where:{id}});
    await importQuestions(admin,[content('edit-sentinel')],false,true);
    expect(await db.question.findUniqueOrThrow({where:{id}})).toEqual(before);
    await importQuestions(admin,[{...content('edit-sentinel'),stem:'A changed synthetic fixture stem?'}],true);
    expect(await db.question.findUniqueOrThrow({where:{id}})).toEqual(before);
    await updateQuestion(admin,id,{...content('edit-sentinel'),license:'CC-BY-4.0'});
    expect(await db.question.findUniqueOrThrow({where:{id}})).toMatchObject({rightsStatus:'UNVERIFIED',rightsAllowDelivery:false,rightsAllowExport:false,license:'CC-BY-4.0'});
    await approveFixtureRights(admin,id);
    await importQuestions(admin,[{...content('edit-sentinel'),license:'CC-BY-4.0',stem:'Bulk changed synthetic fixture stem?'}],false);
    expect((await db.question.findUniqueOrThrow({where:{id}})).rightsStatus).toBe('UNVERIFIED');
  });

  it('disputes immediately withhold old-session text, derived cards/notebook exports, but preserve attempts and scores', async () => {
    const admin=await makeUser('ADMIN'),learner=await makeUser();
    const q=await db.question.findFirstOrThrow({where:{rightsStatus:'VERIFIED'},include:{options:true}});
    const session=await createSession(learner.id,{mode:'TUTOR',count:1,questionIds:[q.id]});
    await openSession(learner.id,session);await submitSession(learner.id,session);
    await cardFromQuestion(learner.id,q.id);
    await saveNote(learner.id,q.id,'Synthetic question-linked note preserved while withheld.');
    const page=await clipToNotebook(learner.id,{text:'Synthetic clipped explanation.',source:`Question ${q.code}`});
    const originalItems=await db.sessionItem.findMany({where:{sessionId:session}});
    const originalOptions=await db.option.findMany({where:{questionId:q.id},orderBy:{position:'asc'}});
    const originalScore=(await getResults(learner.id,session)).score;
    const body=(await getQuestionContent(admin,q.id)).content;
    await expect(updateQuestion(admin,q.id,{...body,explanation:'Changed after a saved attempt must use a new code.'})).rejects.toMatchObject({code:'CONFLICT'});
    await expect(importQuestions(admin,[{...body,explanation:'Bulk change after an attempt must also be refused.'}],false)).rejects.toMatchObject({code:'CONFLICT'});
    await decide(admin,q.id,'DISPUTED');
    await expect(getView(learner.id,session)).rejects.toMatchObject({code:'NOT_FOUND'});
    expect((await dueCards(learner.id)).due).toHaveLength(0);
    await expect(getPage(learner.id,page.id)).rejects.toMatchObject({code:'NOT_FOUND'});
    const exported=await exportMyData(learner.id);expect(exported.cards).toHaveLength(0);expect(exported.notebook).toHaveLength(0);expect(exported.notes).toHaveLength(0);
    expect(await db.note.count({where:{userId:learner.id,questionId:q.id}})).toBe(1);
    await updatePage(learner.id,page.id,{title:page.title,body:'Edited personal text',tags:[]});
    expect((await exportMyData(learner.id)).notebook).toHaveLength(0);
    expect((await getResults(learner.id,session)).score).toEqual(originalScore);
    expect(await db.sessionItem.findMany({where:{sessionId:session}})).toEqual(originalItems);
    expect(await db.option.findMany({where:{questionId:q.id},orderBy:{position:'asc'}})).toEqual(originalOptions);
    await expect(submitRightsEvidence(await makeUser('EDITOR'),q.id,{version:await version(q.id),holder:'Fixture',evidence:'New synthetic evidence reference'})).rejects.toMatchObject({code:'FORBIDDEN'});
    await approveFixtureRights(admin,q.id);
    expect((await getView(learner.id,session)).question.id).toBe(q.id);
  });

  it('reseed is create-only and cannot rewrite licenses, option IDs, rights evidence or historical attempts', async () => {
    const q=await db.question.findFirstOrThrow({include:{options:true}});
    await db.question.update({where:{id:q.id},data:{license:'Operator recorded separate license'}});
    const before=await db.question.findMany({orderBy:{code:'asc'},include:{options:{orderBy:{position:'asc'}}}});
    await seed(db);
    expect(await db.question.findMany({orderBy:{code:'asc'},include:{options:{orderBy:{position:'asc'}}}})).toEqual(before);
  });

  it('preserves source versions referenced by notebook clips even without an exam attempt', async () => {
    const admin=await makeUser('ADMIN'),learner=await makeUser();
    const id=await createQuestion(admin,content('clip-sentinel'));
    await approveFixtureRights(admin,id);await setStatus(admin,id,'PUBLISHED');
    const page=await clipToNotebook(learner.id,{text:'Synthetic source-dependent clip',source:'Question clip-sentinel'});
    await Promise.all([
      clipToNotebook(learner.id,{text:'Concurrent synthetic clip one',source:'Question clip-sentinel',pageId:page.id}),
      clipToNotebook(learner.id,{text:'Concurrent synthetic clip two',source:'Question clip-sentinel',pageId:page.id}),
    ]);
    const saved=await db.notebookPage.findUniqueOrThrow({where:{id:page.id}});
    expect(saved.body).toContain('Concurrent synthetic clip one');expect(saved.body).toContain('Concurrent synthetic clip two');expect(saved.sourceQuestionIds).toContain(id);
    await expect(updateQuestion(admin,id,{...content('clip-sentinel'),stem:'Changing a clipped source requires a new code.'})).rejects.toMatchObject({code:'CONFLICT'});
    const legacy=await db.notebookPage.create({data:{userId:learner.id,title:'Legacy synthetic unknown source',body:'Synthetic old text\n\n— Question missing-sentinel',tags:[]}});
    await updatePage(learner.id,legacy.id,{title:legacy.title,body:'Edited legacy page',tags:[]});
    await expect(getPage(learner.id,legacy.id)).rejects.toMatchObject({code:'NOT_FOUND'});
    expect((await db.notebookPage.findUniqueOrThrow({where:{id:legacy.id}})).body).toBe('Edited legacy page');
  });

  it('stale decisions cannot race content changes and invalid bulk edits roll back all records', async () => {
    const admin=await makeUser('ADMIN'),id=await createQuestion(admin,content('race-sentinel'));
    await approveFixtureRights(admin,id);
    const savedVersion=await version(id);
    await updateQuestion(admin,id,{...content('race-sentinel'),stem:'A new saved version requires new evidence.'});
    await expect(reviewContentRights(admin,id,{version:savedVersion,status:'VERIFIED',reason:'Synthetic stale approval.',allowDelivery:true,allowExport:true})).rejects.toMatchObject({code:'CONFLICT'});
    await expect(importQuestions(admin,[content('new-before-rollback'),{...content('invalid-exam'),exam:'Unknown exam'}],false)).rejects.toMatchObject({code:'INVALID'});
    expect(await db.question.count({where:{code:'new-before-rollback'}})).toBe(0);
  });
});
