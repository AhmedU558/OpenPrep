'use server';
import { revalidatePath } from 'next/cache';
import { action } from '@/lib/errors';
import { requireUser } from '@/lib/session';
import * as study from '@/lib/study';

const me = async () => (await requireUser()).id;

export async function saveNoteAction(questionId: string, body: string) { return action(async () => { await study.saveNote(await me(), questionId, body); }); }
export async function bookmarkAction(questionId: string, on: boolean) { return action(async () => { await study.setBookmark(await me(), questionId, on); }); }
export async function tagsAction(questionId: string, tags: string[]) { return action(async () => { await study.setTags(await me(), questionId, tags); }); }
export async function reportAction(questionId: string, message: string) { return action(async () => { await study.reportIssue(await me(), questionId, message); }); }
export async function cardFromQuestionAction(questionId: string, selection?: string) { return action(async () => { await study.cardFromQuestion(await me(), questionId, selection); }); }
export async function createCardAction(input: { front: string; back: string }) { return action(async () => { await study.createCard(await me(), input); revalidatePath('/flashcards'); }); }
export async function updateCardAction(id: string, input: { front: string; back: string; suspended?: boolean }) { return action(async () => { await study.updateCard(await me(), id, input); revalidatePath('/flashcards'); }); }
export async function deleteCardAction(id: string) { return action(async () => { await study.deleteCard(await me(), id); revalidatePath('/flashcards'); }); }
export async function reviewCardAction(id: string, rating: number, ms: number) { return action(async () => { await study.reviewCard(await me(), id, rating, ms); }); }
export async function createCollectionAction(name: string) { return action(async () => { const c = await study.createCollection(await me(), name); revalidatePath('/questions'); return c.id; }); }
export async function collectionItemAction(collectionId: string, questionId: string, on: boolean) { return action(async () => { await study.setInCollection(await me(), collectionId, questionId, on); }); }
export async function deleteCollectionAction(id: string) { return action(async () => { await study.deleteCollection(await me(), id); revalidatePath('/questions'); }); }
