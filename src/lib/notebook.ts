import { z } from 'zod';
import { db, type Tx } from './db';
import { AppError } from './errors';
import { deliverableQuestion, filterNotebookRights, notebookSourceCodes, lockQuestion } from './content-rights';

export const MAX_DEPTH = 4;
const id = z.string().min(1).max(64);
const tags = z.array(z.string().trim().toLowerCase().min(1).max(32)).max(20).transform((t) => [...new Set(t)]);

async function own(userId: string, pageId: string) {
  const p = await db.notebookPage.findFirst({ where: { id: pageId, userId } });
  if (!p) throw new AppError('NOT_FOUND', 'Page not found.');
  return p;
}

async function lockPage(tx: Tx, userId: string, pageId: string) {
  const rows = await tx.$queryRaw<{ id: string }[]>`SELECT id FROM notebook_page WHERE id = ${pageId} AND "userId" = ${userId} FOR UPDATE`;
  if (!rows.length) throw new AppError('NOT_FOUND', 'Page not found.');
  return tx.notebookPage.findUniqueOrThrow({ where: { id: pageId } });
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
  return db.$transaction(async (tx) => {
    const before = await lockPage(tx, userId, pageId);
    return tx.notebookPage.update({ where: { id: pageId }, data: { ...p, sourceQuestionIds: [...new Set([...before.sourceQuestionIds, ...notebookSourceCodes(before.body).map((code) => `code:${code}`)])] } });
  });
}

export async function deletePage(userId: string, rawId: unknown) {
  const p = await own(userId, id.parse(rawId));
  await db.notebookPage.delete({ where: { id: p.id } }); // children cascade
}

/** Appends a clip (e.g. selected explanation text) to a page, creating an "Inbox" page if needed. */
export async function clipToNotebook(userId: string, raw: unknown) {
  const p = z.object({ text: z.string().trim().min(1).max(10_000), source: z.string().max(200).optional(), pageId: id.optional() }).parse(raw);
  const code = /^Question ([a-z0-9][a-z0-9._-]{1,40})$/i.exec(p.source ?? '')?.[1];
  return db.$transaction(async (tx) => {
    const found = code ? await tx.question.findUnique({ where: { code }, select: { id: true } }) : null;
    if (found) await lockQuestion(tx, found.id);
    const question = code ? await tx.question.findFirst({ where: { code, ...deliverableQuestion }, select: { id: true } }) : null;
    if (code && !question) throw new AppError('NOT_FOUND', 'Question content is withheld pending rights review.');
    const target = p.pageId ? { id: p.pageId } : (await tx.notebookPage.findFirst({ where: { userId, parentId: null, title: 'Inbox' } })) ?? (await tx.notebookPage.create({ data: { userId, title: 'Inbox' } }));
    const page = await lockPage(tx, userId, target.id);
    const quote = p.text.split('\n').map((l) => `> ${l}`).join('\n');
    return tx.notebookPage.update({ where: { id: page.id }, data: { body: `${page.body}${page.body ? '\n\n' : ''}${quote}${p.source ? `\n\n— ${p.source}` : ''}`, sourceQuestionIds: [...new Set([...page.sourceQuestionIds, ...(question ? [question.id] : [])])] } });
  });
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
  const page = await own(userId, id.parse(rawId));
  if (!(await filterNotebookRights([page], 'delivery')).length) throw new AppError('NOT_FOUND', 'Notebook content is withheld pending source rights review. Your page is preserved.');
  return page;
}
