import { z } from 'zod';
import { db } from './db';
import { AppError } from './errors';

export const MAX_DEPTH = 4;
const id = z.string().min(1).max(64);
const tags = z.array(z.string().trim().toLowerCase().min(1).max(32)).max(20).transform((t) => [...new Set(t)]);

async function own(userId: string, pageId: string) {
  const p = await db.notebookPage.findFirst({ where: { id: pageId, userId } });
  if (!p) throw new AppError('NOT_FOUND', 'Page not found.');
  return p;
}

async function depthOf(userId: string, pageId: string | null): Promise<number> {
  let depth = 0;
  for (let cur = pageId; cur; depth++) {
    if (depth > MAX_DEPTH) break;
    cur = (await own(userId, cur)).parentId;
  }
  return depth; // number of ancestors including pageId itself
}

export async function createPage(userId: string, raw: unknown) {
  const p = z.object({ title: z.string().trim().min(1).max(120), parentId: id.nullable().default(null) }).parse(raw);
  if (p.parentId && (await depthOf(userId, p.parentId)) >= MAX_DEPTH) throw new AppError('INVALID', `Pages can be nested up to ${MAX_DEPTH} levels.`);
  const count = await db.notebookPage.count({ where: { userId } });
  if (count >= 2000) throw new AppError('CONFLICT', 'Notebook page limit reached (2,000).');
  return db.notebookPage.create({ data: { userId, title: p.title, parentId: p.parentId } });
}

export async function updatePage(userId: string, rawId: unknown, raw: unknown) {
  const pageId = id.parse(rawId);
  const p = z.object({ title: z.string().trim().min(1).max(120), body: z.string().max(100_000), tags }).parse(raw);
  await own(userId, pageId);
  return db.notebookPage.update({ where: { id: pageId }, data: p });
}

export async function deletePage(userId: string, rawId: unknown) {
  const p = await own(userId, id.parse(rawId));
  await db.notebookPage.delete({ where: { id: p.id } }); // children cascade
}

/** Appends a clip (e.g. selected explanation text) to a page, creating an "Inbox" page if needed. */
export async function clipToNotebook(userId: string, raw: unknown) {
  const p = z.object({ text: z.string().trim().min(1).max(10_000), source: z.string().max(200).optional(), pageId: id.optional() }).parse(raw);
  const page = p.pageId ? await own(userId, p.pageId)
    : (await db.notebookPage.findFirst({ where: { userId, parentId: null, title: 'Inbox' } })) ?? (await db.notebookPage.create({ data: { userId, title: 'Inbox' } }));
  const quote = p.text.split('\n').map((l) => `> ${l}`).join('\n');
  return db.notebookPage.update({ where: { id: page.id }, data: { body: `${page.body}${page.body ? '\n\n' : ''}${quote}${p.source ? `\n\n— ${p.source}` : ''}` } });
}

export async function listPages(userId: string, q = '') {
  const term = q.trim().slice(0, 100);
  return db.notebookPage.findMany({
    where: { userId, ...(term ? { OR: [{ title: { contains: term, mode: 'insensitive' } }, { body: { contains: term, mode: 'insensitive' } }, { tags: { has: term.toLowerCase() } }] } : {}) },
    orderBy: [{ position: 'asc' }, { title: 'asc' }],
    select: { id: true, title: true, parentId: true, tags: true, updatedAt: true },
  });
}

export async function getPage(userId: string, rawId: unknown) {
  return own(userId, id.parse(rawId));
}
