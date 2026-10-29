'use server';
import { revalidatePath } from 'next/cache';
import { action } from '@/lib/errors';
import * as nb from '@/lib/notebook';
import { requireUser } from '@/lib/session';

const me = async () => (await requireUser()).id;

export async function createPageAction(title: string, parentId: string | null) { return action(async () => { const p = await nb.createPage(await me(), { title, parentId }); revalidatePath('/notebook'); return p.id; }); }
export async function updatePageAction(id: string, input: { title: string; body: string; tags: string[] }) { return action(async () => { await nb.updatePage(await me(), id, input); revalidatePath('/notebook'); }); }
export async function deletePageAction(id: string) { return action(async () => { await nb.deletePage(await me(), id); revalidatePath('/notebook'); }); }
export async function clipAction(text: string, source?: string) { return action(async () => { await nb.clipToNotebook(await me(), { text, source }); }); }
