import { beforeEach, expect, it } from 'vitest';
import { db } from '@/lib/db';
import { importQuestions, toContent } from '@/lib/admin';
import { questionContentSchema } from '@/lib/validation/content';
import { makeUser, resetDb } from './helpers';
import batch from '../../content/usmle-images/batch-01.json' with { type: 'json' };

beforeEach(resetDb);

it('imports image questions as drafts, reads back every field, and preserves options on retry', async () => {
  const actor = await makeUser('ADMIN');
  expect(await importQuestions(actor, batch, false, true)).toMatchObject({created:3,updated:0,skipped:0,errors:[]});
  const fetchRows = () => db.question.findMany({where:{code:{in:batch.map(q=>q.code)}},orderBy:{code:'asc'},include:{options:{orderBy:{position:'asc'}},exam:true,subject:true,system:true,topic:true}});
  const first = await fetchRows();
  for (const input of batch) {
    const saved = first.find(q=>q.code===input.code)!;
    expect(questionContentSchema.parse(toContent(saved))).toEqual(questionContentSchema.parse(input));
    expect(saved).toMatchObject({status:'DRAFT',rightsStatus:'UNVERIFIED',rightsAllowDelivery:false});
  }
  expect(await importQuestions(actor, batch, false, true)).toMatchObject({created:0,updated:0,skipped:3,errors:[]});
  expect((await fetchRows()).map(q=>({id:q.id,options:q.options}))).toEqual(first.map(q=>({id:q.id,options:q.options})));
});
