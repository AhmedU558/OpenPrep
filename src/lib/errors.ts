import { ZodError } from 'zod';
import { log } from './log';

export type ErrorCode = 'UNAUTHENTICATED' | 'FORBIDDEN' | 'NOT_FOUND' | 'INVALID' | 'CONFLICT' | 'EXPIRED';

const STATUS: Record<ErrorCode, number> = {
  UNAUTHENTICATED: 401, FORBIDDEN: 403, NOT_FOUND: 404, INVALID: 400, CONFLICT: 409, EXPIRED: 410,
};

// Expected, user-facing failures. Anything else is a bug and gets a generic message.
export class AppError extends Error {
  constructor(public code: ErrorCode, message: string) {
    super(message);
  }
  get status() { return STATUS[this.code]; }
}

export type ActionResult<T = undefined> = { ok: true; data: T } | { ok: false; code: ErrorCode | 'INTERNAL'; error: string };

export function toResult(e: unknown): { ok: false; code: ErrorCode | 'INTERNAL'; error: string } {
  if (e instanceof AppError) return { ok: false, code: e.code, error: e.message };
  if (e instanceof ZodError) return { ok: false, code: 'INVALID', error: e.issues.map((i) => i.message).join('; ') };
  log.error('unhandled error', { err: e });
  return { ok: false, code: 'INTERNAL', error: 'Something went wrong. Please try again.' };
}

// Wrap a server action body so every outcome is a typed result and no stack trace reaches the client.
export async function action<T>(fn: () => Promise<T>): Promise<ActionResult<T>> {
  try {
    return { ok: true, data: await fn() };
  } catch (e) {
    // Next.js uses thrown errors for redirect()/notFound(); let those through.
    if (e && typeof e === 'object' && 'digest' in e && String((e as { digest: unknown }).digest).startsWith('NEXT_')) throw e;
    return toResult(e);
  }
}

export function jsonError(e: unknown): Response {
  const r = toResult(e);
  const status = e instanceof AppError ? e.status : r.code === 'INVALID' ? 400 : 500;
  return Response.json({ error: r.error, code: r.code }, { status });
}
