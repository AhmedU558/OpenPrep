'use server';
// Thin wrappers: authenticate, call the service, return a typed result with the fresh view.
// Next.js server actions reject cross-origin POSTs (Origin check), which covers CSRF.
import { action } from '@/lib/errors';
import * as exam from '@/lib/exam/service';
import { requireUser } from '@/lib/session';

const withView = (id: string, fn: (userId: string) => Promise<unknown>) =>
  action(async () => {
    const u = await requireUser();
    await fn(u.id);
    return exam.getView(u.id, id);
  });

export async function createTestAction(input: unknown) {
  return action(async () => exam.createSession((await requireUser()).id, input));
}

export async function openAction(id: string) { return withView(id, (u) => exam.openSession(u, id)); }
export async function navigateAction(id: string, position: number) { return withView(id, (u) => exam.navigate(u, id, position)); }
export async function answerAction(id: string, position: number, selected: string[]) { return withView(id, (u) => exam.answer(u, id, position, selected)); }
export async function submitItemAction(id: string, position: number) { return withView(id, (u) => exam.submitItem(u, id, position)); }
export async function flagAction(id: string, position: number, flagged: boolean) { return withView(id, (u) => exam.setFlag(u, id, position, flagged)); }
export async function strikeAction(id: string, position: number, struck: string[]) { return withView(id, (u) => exam.setStruck(u, id, position, struck)); }
export async function highlightAction(id: string, position: number, html: string) { return withView(id, (u) => exam.setHighlights(u, id, position, html)); }
export async function pauseAction(id: string) { return action(async () => exam.pauseSession((await requireUser()).id, id)); }
export async function submitAction(id: string) { return action(async () => exam.submitSession((await requireUser()).id, id)); }
export async function abandonAction(id: string) { return action(async () => exam.abandonSession((await requireUser()).id, id)); }
