// Content management. Every function takes the acting user, checks their role on the server, and writes an audit entry.
import { z } from 'zod';
import type { QuestionStatus, Role } from '@/generated/prisma/enums';
import { db, type Tx } from './db';
import { AppError } from './errors';
import { questionContentSchema, type QuestionContent } from './validation/content';

export type Actor = { id: string; role: Role };
const RANK: Record<Role, number> = { LEARNER: 0, EDITOR: 1, ADMIN: 2 };
const need = (a: Actor, min: Role) => { if (RANK[a.role] < RANK[min]) throw new AppError('FORBIDDEN', 'You do not have permission to do that.'); };
const id = z.string().min(1).max(64);

// ---------------------------------------------------------------- workflow (pure)

const FLOW: Record<QuestionStatus, Partial<Record<QuestionStatus, Role>>> = {
  DRAFT: { REVIEW: 'EDITOR', PUBLISHED: 'ADMIN', ARCHIVED: 'ADMIN' },
  REVIEW: { DRAFT: 'EDITOR', PUBLISHED: 'ADMIN', ARCHIVED: 'ADMIN' },
  PUBLISHED: { REVIEW: 'ADMIN', ARCHIVED: 'ADMIN' },
  ARCHIVED: { DRAFT: 'ADMIN' },
};

/** Who may move a question between statuses. Editors draft and submit for review; only admins publish or archive. */
export function canTransition(role: Role, from: QuestionStatus, to: QuestionStatus): boolean {
  const min = FLOW[from][to];
  return !!min && RANK[role] >= RANK[min];
}

/** Editors may edit drafts and questions in review; changing published content is an admin decision. */
export const canEditContent = (role: Role, status: QuestionStatus) => role === 'ADMIN' || (role === 'EDITOR' && (status === 'DRAFT' || status === 'REVIEW'));

// ---------------------------------------------------------------- helpers

async function audit(tx: Tx, actor: Actor, action: string, entityType: string, entityId: string, diff: object = {}) {
  await tx.auditLog.create({ data: { actorId: actor.id, action, entityType, entityId, diff } });
}

async function taxonomyIds(tx: Tx, actor: Actor, c: QuestionContent) {
  const exam = await tx.exam.findFirst({ where: { name: c.exam } });
  if (!exam) throw new AppError('INVALID', `Unknown exam "${c.exam}". An admin can add it under Taxonomy.`);
  const find = async (kind: 'subject' | 'system', name: string) => {
    const existing = kind === 'subject' ? await tx.subject.findUnique({ where: { name } }) : await tx.system.findUnique({ where: { name } });
    if (existing) return existing.id;
    if (RANK[actor.role] < RANK.ADMIN) throw new AppError('INVALID', `Unknown ${kind} "${name}". Ask an admin to add it, or pick an existing one.`);
    const created = kind === 'subject' ? await tx.subject.create({ data: { name } }) : await tx.system.create({ data: { name } });
    await audit(tx, actor, `${kind}.create`, kind, created.id, { name });
    return created.id;
  };
  const subjectId = await find('subject', c.subject);
  const systemId = await find('system', c.system);
  const topicId = c.topic ? (await tx.topic.upsert({ where: { subjectId_name: { subjectId, name: c.topic } }, create: { subjectId, name: c.topic }, update: {} })).id : null;
  return { examId: exam.id, subjectId, systemId, topicId };
}

function columns(c: QuestionContent) {
  return {
    code: c.code, type: c.type, difficulty: c.difficulty, stemMd: c.stem, explanationMd: c.explanation, objective: c.objective ?? null,
    keyPoints: c.keyPoints.length ? c.keyPoints : c.objective ? [c.objective] : [], references: c.references,
    imageUrl: c.image ?? null, imageAlt: c.imageAlt ?? null, source: c.source, license: c.license, attribution: c.attribution ?? null,
  };
}

async function writeOptions(tx: Tx, questionId: string, c: QuestionContent) {
  await tx.option.deleteMany({ where: { questionId } });
  await tx.option.createMany({ data: c.options.map((o, position) => ({ questionId, position, text: o.text, isCorrect: o.correct, explanationMd: o.explanation || null })) });
}

// ---------------------------------------------------------------- questions

export async function createQuestion(actor: Actor, raw: unknown) {
  need(actor, 'EDITOR');
  const c = questionContentSchema.parse(raw);
  return db.$transaction(async (tx) => {
    if (await tx.question.findUnique({ where: { code: c.code } })) throw new AppError('CONFLICT', `Code ${c.code} is already used.`);
    const q = await tx.question.create({ data: { ...columns(c), ...(await taxonomyIds(tx, actor, c)), status: 'DRAFT', isDemo: false, authorId: actor.id } });
    await writeOptions(tx, q.id, c);
    await audit(tx, actor, 'question.create', 'question', q.id, { code: c.code });
    return q.id;
  });
}

export async function updateQuestion(actor: Actor, rawId: unknown, raw: unknown) {
  need(actor, 'EDITOR');
  const qid = id.parse(rawId);
  const c = questionContentSchema.parse(raw);
  return db.$transaction(async (tx) => {
    const before = await tx.question.findUnique({ where: { id: qid } });
    if (!before) throw new AppError('NOT_FOUND', 'Question not found.');
    if (!canEditContent(actor.role, before.status)) throw new AppError('FORBIDDEN', 'Only admins can edit published or archived questions.');
    const clash = await tx.question.findFirst({ where: { code: c.code, id: { not: qid } } });
    if (clash) throw new AppError('CONFLICT', `Code ${c.code} is already used.`);
    const data = { ...columns(c), ...(await taxonomyIds(tx, actor, c)) };
    await tx.question.update({ where: { id: qid }, data });
    await writeOptions(tx, qid, c);
    const changed = Object.keys(data).filter((k) => JSON.stringify((before as Record<string, unknown>)[k]) !== JSON.stringify((data as Record<string, unknown>)[k]));
    await audit(tx, actor, 'question.update', 'question', qid, { changed });
  });
}

export async function setStatus(actor: Actor, rawId: unknown, rawTo: unknown) {
  need(actor, 'EDITOR');
  const qid = id.parse(rawId);
  const to = z.enum(['DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED']).parse(rawTo);
  return db.$transaction(async (tx) => {
    const q = await tx.question.findUnique({ where: { id: qid } });
    if (!q) throw new AppError('NOT_FOUND', 'Question not found.');
    if (!canTransition(actor.role, q.status, to)) throw new AppError('FORBIDDEN', `You can't move a question from ${q.status.toLowerCase()} to ${to.toLowerCase()}.`);
    await tx.question.update({ where: { id: qid }, data: { status: to, publishedAt: to === 'PUBLISHED' ? new Date() : q.publishedAt } });
    await audit(tx, actor, 'question.status', 'question', qid, { from: q.status, to });
  });
}

/** Question in the content format, for the editor and export. */
export async function getQuestionContent(actor: Actor, rawId: unknown) {
  need(actor, 'EDITOR');
  const q = await db.question.findUnique({
    where: { id: id.parse(rawId) },
    include: { options: { orderBy: { position: 'asc' } }, exam: true, subject: true, system: true, topic: true, author: { select: { name: true } } },
  });
  if (!q) throw new AppError('NOT_FOUND', 'Question not found.');
  return { meta: { id: q.id, status: q.status, author: q.author?.name ?? null, updatedAt: q.updatedAt, isDemo: q.isDemo }, content: toContent(q) };
}

type FullQ = NonNullable<Awaited<ReturnType<typeof fetchForExport>>>[number];
function toContent(q: FullQ): QuestionContent {
  return {
    code: q.code, exam: q.exam.name, subject: q.subject.name, system: q.system.name, topic: q.topic?.name, type: q.type, difficulty: q.difficulty,
    stem: q.stemMd, options: q.options.map((o) => ({ text: o.text, correct: o.isCorrect, ...(o.explanationMd ? { explanation: o.explanationMd } : {}) })),
    explanation: q.explanationMd, objective: q.objective ?? undefined, keyPoints: q.keyPoints,
    references: q.references as QuestionContent['references'], image: q.imageUrl ?? undefined, imageAlt: q.imageAlt ?? undefined,
    source: q.source, license: q.license, attribution: q.attribution ?? undefined,
  };
}

function fetchForExport(status?: QuestionStatus) {
  return db.question.findMany({
    where: status ? { status } : {}, orderBy: { code: 'asc' },
    include: { options: { orderBy: { position: 'asc' } }, exam: true, subject: true, system: true, topic: true },
  });
}

export async function exportQuestions(actor: Actor, rawStatus?: unknown) {
  need(actor, 'EDITOR');
  const status = rawStatus ? z.enum(['DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED']).parse(rawStatus) : undefined;
  return (await fetchForExport(status)).map(toContent);
}

export type ImportReport = { created: number; updated: number; skipped: number; errors: { index: number; code?: string; message: string }[]; dryRun: boolean };

/** Bulk import. Valid rows are created as DRAFT (or update existing drafts by code); nothing is written on a dry run or if any row fails. */
export async function importQuestions(actor: Actor, raw: unknown, dryRun = true, createOnly = false): Promise<ImportReport> {
  need(actor, 'EDITOR');
  if (!Array.isArray(raw)) throw new AppError('INVALID', 'The file must contain a JSON array of questions.');
  if (raw.length > 2000) throw new AppError('INVALID', 'Import at most 2,000 questions per file.');
  const report: ImportReport = { created: 0, updated: 0, skipped: 0, errors: [], dryRun };
  const rows: QuestionContent[] = [];
  const seen = new Set<string>();
  raw.forEach((r, index) => {
    const p = questionContentSchema.safeParse(r);
    if (!p.success) return report.errors.push({ index, code: (r as { code?: string })?.code, message: p.error.issues.map((i) => `${i.path.join('.') || 'row'}: ${i.message}`).join('; ') });
    if (seen.has(p.data.code)) return report.errors.push({ index, code: p.data.code, message: 'Duplicate code in this file.' });
    seen.add(p.data.code);
    rows.push(p.data);
  });
  if (report.errors.length) return report;

  try {
    await db.$transaction(async (tx) => {
      for (const c of rows) {
        const existing = await tx.question.findUnique({ where: { code: c.code } });
        if (existing && createOnly) {
          const full = await tx.question.findUniqueOrThrow({ where: { id: existing.id }, include: { options: { orderBy: { position: 'asc' } }, exam: true, subject: true, system: true, topic: true } });
          if (JSON.stringify(questionContentSchema.parse(toContent(full))) !== JSON.stringify(c)) throw new AppError('CONFLICT', `Code ${c.code} exists with different content; create-only import refused.`);
          report.skipped++; continue;
        }
        if (existing && !canEditContent(actor.role, existing.status)) { report.skipped++; continue; }
        const data = { ...columns(c), ...(await taxonomyIds(tx, actor, c)) };
        const q = existing
          ? await tx.question.update({ where: { id: existing.id }, data })
          : await tx.question.create({ data: { ...data, status: 'DRAFT', isDemo: false, authorId: actor.id } });
        await writeOptions(tx, q.id, c);
        if (existing) report.updated++; else report.created++;
      }
      if (report.created || report.updated) await audit(tx, actor, 'question.import', 'question', '*', { created: report.created, updated: report.updated, skipped: report.skipped });
      if (dryRun) throw new DryRun();
    }, { timeout: 120_000 });
  } catch (e) {
    if (!(e instanceof DryRun)) throw e;
  }
  return report;
}
class DryRun extends Error {}

export async function listQuestionsAdmin(actor: Actor, raw: { status?: string; q?: string; page?: number }) {
  need(actor, 'EDITOR');
  const status = z.enum(['DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED']).optional().catch(undefined).parse(raw.status);
  const q = (raw.q ?? '').trim().slice(0, 100);
  const page = Math.max(1, raw.page ?? 1), pageSize = 25;
  const where = {
    ...(status ? { status } : {}),
    ...(q ? { OR: [{ code: { contains: q, mode: 'insensitive' as const } }, { stemMd: { contains: q, mode: 'insensitive' as const } }] } : {}),
  };
  const [total, rows, counts] = await Promise.all([
    db.question.count({ where }),
    db.question.findMany({ where, orderBy: { updatedAt: 'desc' }, skip: (page - 1) * pageSize, take: pageSize,
      select: { id: true, code: true, status: true, stemMd: true, updatedAt: true, isDemo: true, exam: { select: { name: true } }, subject: { select: { name: true } }, _count: { select: { reports: { where: { status: 'OPEN' } } } } } }),
    db.question.groupBy({ by: ['status'], _count: true }),
  ]);
  return { total, rows, page, pageSize, counts: Object.fromEntries(counts.map((c) => [c.status, c._count])) as Partial<Record<QuestionStatus, number>> };
}

// ---------------------------------------------------------------- taxonomy (admin)

const name = z.string().trim().min(1).max(80);

export async function addTaxonomy(actor: Actor, rawKind: unknown, rawName: unknown) {
  need(actor, 'ADMIN');
  const kind = z.enum(['exam', 'subject', 'system']).parse(rawKind);
  const n = name.parse(rawName);
  return db.$transaction(async (tx) => {
    try {
      const row = kind === 'exam'
        ? await tx.exam.create({ data: { name: n, slug: n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''), position: (await tx.exam.count()) + 1 } })
        : kind === 'subject' ? await tx.subject.create({ data: { name: n } }) : await tx.system.create({ data: { name: n } });
      await audit(tx, actor, `${kind}.create`, kind, row.id, { name: n });
      return row.id;
    } catch (e) {
      if (e instanceof AppError) throw e;
      throw new AppError('CONFLICT', `That ${kind} already exists.`);
    }
  });
}

export async function renameTaxonomy(actor: Actor, rawKind: unknown, rawId: unknown, rawName: unknown) {
  need(actor, 'ADMIN');
  const kind = z.enum(['exam', 'subject', 'system']).parse(rawKind);
  const tid = id.parse(rawId), n = name.parse(rawName);
  await db.$transaction(async (tx) => {
    if (kind === 'exam') await tx.exam.update({ where: { id: tid }, data: { name: n } });
    else if (kind === 'subject') await tx.subject.update({ where: { id: tid }, data: { name: n } });
    else await tx.system.update({ where: { id: tid }, data: { name: n } });
    await audit(tx, actor, `${kind}.rename`, kind, tid, { name: n });
  }).catch((e) => { throw e instanceof AppError ? e : new AppError('CONFLICT', 'That name is taken or the item no longer exists.'); });
}

export async function deleteTaxonomy(actor: Actor, rawKind: unknown, rawId: unknown) {
  need(actor, 'ADMIN');
  const kind = z.enum(['exam', 'subject', 'system']).parse(rawKind);
  const tid = id.parse(rawId);
  await db.$transaction(async (tx) => {
    const inUse = await tx.question.count({ where: kind === 'exam' ? { examId: tid } : kind === 'subject' ? { subjectId: tid } : { systemId: tid } });
    if (inUse) throw new AppError('CONFLICT', `It is used by ${inUse} question${inUse === 1 ? '' : 's'}. Move them first.`);
    if (kind === 'exam') await tx.exam.delete({ where: { id: tid } });
    else if (kind === 'subject') await tx.subject.delete({ where: { id: tid } });
    else await tx.system.delete({ where: { id: tid } });
    await audit(tx, actor, `${kind}.delete`, kind, tid);
  });
}

// ---------------------------------------------------------------- reports (editor)

export async function listReports(actor: Actor, rawStatus = 'OPEN') {
  need(actor, 'EDITOR');
  const status = z.enum(['OPEN', 'RESOLVED', 'DISMISSED']).catch('OPEN').parse(rawStatus);
  return db.contentReport.findMany({
    where: { status }, orderBy: { createdAt: 'desc' }, take: 100,
    include: { question: { select: { id: true, code: true } }, user: { select: { name: true } } },
  });
}

export async function resolveReport(actor: Actor, rawId: unknown, rawStatus: unknown) {
  need(actor, 'EDITOR');
  const rid = id.parse(rawId);
  const status = z.enum(['RESOLVED', 'DISMISSED']).parse(rawStatus);
  await db.$transaction(async (tx) => {
    const r = await tx.contentReport.update({ where: { id: rid }, data: { status, resolvedById: actor.id, resolvedAt: new Date() } }).catch(() => null);
    if (!r) throw new AppError('NOT_FOUND', 'Report not found.');
    await audit(tx, actor, 'report.resolve', 'report', rid, { status });
  });
}

// ---------------------------------------------------------------- users (admin)

export async function listUsers(actor: Actor, rawQ = '') {
  need(actor, 'ADMIN');
  const q = String(rawQ).trim().slice(0, 100);
  return db.user.findMany({
    where: { isAnonymous: { not: true }, ...(q ? { OR: [{ email: { contains: q, mode: 'insensitive' } }, { name: { contains: q, mode: 'insensitive' } }] } : {}) },
    orderBy: { createdAt: 'desc' }, take: 100,
    select: { id: true, name: true, email: true, role: true, createdAt: true, _count: { select: { responses: true } } },
  });
}

export async function setRole(actor: Actor, rawUserId: unknown, rawRole: unknown) {
  need(actor, 'ADMIN');
  const uid = id.parse(rawUserId);
  const role = z.enum(['LEARNER', 'EDITOR', 'ADMIN']).parse(rawRole);
  if (uid === actor.id) throw new AppError('INVALID', "You can't change your own role (ask another admin).");
  await db.$transaction(async (tx) => {
    const u = await tx.user.findUnique({ where: { id: uid } });
    if (!u) throw new AppError('NOT_FOUND', 'User not found.');
    await tx.user.update({ where: { id: uid }, data: { role } });
    await audit(tx, actor, 'user.role', 'user', uid, { from: u.role, to: role });
  });
}

export async function listAudit(actor: Actor, page = 1) {
  need(actor, 'ADMIN');
  const pageSize = 50;
  const [total, rows] = await Promise.all([
    db.auditLog.count(),
    db.auditLog.findMany({ orderBy: { createdAt: 'desc' }, skip: (page - 1) * pageSize, take: pageSize, include: { actor: { select: { name: true, email: true } } } }),
  ]);
  return { total, rows, page, pageSize };
}
