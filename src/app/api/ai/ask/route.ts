import { z } from 'zod';
import { getProvider, TUTOR_PROMPT } from '@/lib/ai';
import { db } from '@/lib/db';
import { AppError, jsonError } from '@/lib/errors';
import { log } from '@/lib/log';
import { requireUser } from '@/lib/session';

const body = z.object({ questionId: z.string().min(1).max(64), question: z.string().trim().min(3).max(1000) });

// ponytail: per-process in-memory limiter (20 asks/hour/user); move to the database if you run several instances
const hits = new Map<string, number[]>();
function limited(userId: string) {
  const now = Date.now(), recent = (hits.get(userId) ?? []).filter((t) => now - t < 3600e3);
  hits.set(userId, [...recent, now]);
  return recent.length >= 20;
}

export async function POST(req: Request) {
  try {
    const provider = getProvider();
    if (!provider) throw new AppError('NOT_FOUND', 'The AI assistant is not configured on this server.');
    const u = await requireUser();
    const { questionId, question } = body.parse(await req.json());
    // only after the learner has answered: the assistant must not leak answers mid-test
    const answered = await db.response.findUnique({ where: { userId_questionId: { userId: u.id, questionId } } });
    if (!answered) throw new AppError('FORBIDDEN', 'Answer the question first.');
    if (limited(u.id)) throw new AppError('CONFLICT', 'You have asked a lot this hour. Please try again later.');
    const q = await db.question.findFirstOrThrow({ where: { id: questionId, status: 'PUBLISHED' }, include: { options: { orderBy: { position: 'asc' } } } });
    const context = `QUESTION:\n${q.stemMd}\n\nCHOICES:\n${q.options.map((o, i) => `${'ABCDEFGHIJ'[i]}. ${o.text}${o.isCorrect ? ' (correct)' : ''}`).join('\n')}\n\nEXPLANATION:\n${q.explanationMd}`;
    const answer = await provider.chat(TUTOR_PROMPT, `${context}\n\nLEARNER ASKS: ${question}`);
    return Response.json({ answer: answer.slice(0, 4000), provider: provider.name });
  } catch (e) {
    if (!(e instanceof AppError) && !(e instanceof z.ZodError)) log.warn('ai ask failed', { err: e });
    return jsonError(e);
  }
}
