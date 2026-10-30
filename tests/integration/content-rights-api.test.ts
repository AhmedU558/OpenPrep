import { beforeEach, expect, it, vi } from 'vitest';
import { db } from '@/lib/db';
import { createQuestion, getQuestionContent } from '@/lib/admin';
import { reviewContentRights } from '@/lib/content-rights';
import { POST } from '@/app/api/ai/ask/route';
import { GET } from '@/app/api/admin/export/route';
import { makeUser, resetDb } from './helpers';
import { approveFixtureRights } from '../fixtures/rights';
import { createSession, openSession, submitSession } from '@/lib/exam/service';

const context = vi.hoisted(() => ({ user: { id: '', role: 'ADMIN' }, chat: vi.fn().mockResolvedValue('Synthetic tutor answer') }));
vi.mock('@/lib/session', () => ({ requireUser: async () => context.user, requireRole: async () => context.user }));
vi.mock('@/lib/ai', () => ({ getProvider: () => ({ name: 'synthetic-test-provider', chat: context.chat }), TUTOR_PROMPT: 'Fixture' }));
beforeEach(async () => { await resetDb(); context.chat.mockClear(); });

it('HTTP exports withhold unresolved content and never expose private rights evidence', async () => {
  const actor=await makeUser('ADMIN');context.user={id:actor.id,role:'ADMIN'};
  const source=await db.question.findFirstOrThrow();
  const raw=(await getQuestionContent(actor,source.id)).content;
  const id=await createQuestion(actor,{...raw,code:'api-rights-unverified'});
  let response=await GET(new Request('http://localhost/api/admin/export'));
  expect(response.status).toBe(200);expect(JSON.stringify(await response.json())).not.toContain('api-rights-unverified');
  await approveFixtureRights(actor,id,false,true);
  response=await GET(new Request('http://localhost/api/admin/export?status=DRAFT'));
  const text=await response.text();expect(text).toContain('api-rights-unverified');expect(text).not.toContain('regression fixture only');
});

it('AI asks cannot send disputed question context to a configured provider', async () => {
  const admin=await makeUser('ADMIN'),learner=await makeUser();context.user={id:learner.id,role:'LEARNER'};
  const q=await db.question.findFirstOrThrow({where:{rightsStatus:'VERIFIED'}});
  const session=await createSession(learner.id,{mode:'TUTOR',count:1,questionIds:[q.id]});
  await openSession(learner.id,session);await submitSession(learner.id,session);
  const ask=()=>POST(new Request('http://localhost/api/ai/ask',{method:'POST',body:JSON.stringify({questionId:q.id,question:'Explain this synthetic answer.'})}));
  expect((await ask()).status).toBe(200);expect(context.chat).toHaveBeenCalledTimes(1);
  await reviewContentRights(admin,q.id,{version:(await db.question.findUniqueOrThrow({where:{id:q.id}})).updatedAt.toISOString(),status:'DISPUTED',reason:'Synthetic provider-withdrawal regression test.',allowDelivery:false,allowExport:false});
  expect((await ask()).status).toBe(404);expect(context.chat).toHaveBeenCalledTimes(1);
});
