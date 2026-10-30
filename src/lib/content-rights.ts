import { z } from 'zod';
import type { Prisma } from '@/generated/prisma/client';
import { db, type Tx } from './db';
import type { Actor } from './admin';
import { AppError } from './errors';

// Neither an existing CC declaration nor an import can grant verification.
export const deliveryRights = { rightsStatus: 'VERIFIED', rightsAllowDelivery: true } as const;
export const exportRights = { rightsStatus: 'VERIFIED', rightsAllowExport: true } as const;
export const deliverableQuestion = { status: 'PUBLISHED', ...deliveryRights } as const;
export const deliverableCard: Prisma.CardWhereInput = { OR: [{ questionId: null }, { question: deliveryRights }] };
export const exportableCard: Prisma.CardWhereInput = { OR: [{ questionId: null }, { question: exportRights }] };
export const invalidateRights = { rightsStatus: 'UNVERIFIED', rightsAllowDelivery: false, rightsAllowExport: false, rightsReviewedAt: null, rightsReviewedBy: null, rightsDecision: null } as const;

export async function lockQuestion(tx: Tx, id: string) {
  const rows = await tx.$queryRaw<{ id: string }[]>`SELECT id FROM question WHERE id = ${id} FOR UPDATE`;
  if (!rows.length) throw new AppError('NOT_FOUND', 'Question not found.');
}

const evidenceSchema = z.object({
  version: z.iso.datetime(), holder: z.string().trim().min(2).max(300),
  evidence: z.string().trim().min(10).max(2000),
});
const decisionSchema = z.object({
  version: z.iso.datetime(), status: z.enum(['VERIFIED', 'DISPUTED', 'REJECTED']),
  reason: z.string().trim().min(10).max(2000), allowDelivery: z.boolean(), allowExport: z.boolean(),
});
const questionId = z.string().min(1).max(64);

export async function submitRightsEvidence(actor: Actor, rawId: unknown, raw: unknown) {
  if (!['EDITOR', 'ADMIN'].includes(actor.role)) throw new AppError('FORBIDDEN', 'Editors submit rights evidence.');
  const id = questionId.parse(rawId), p = evidenceSchema.parse(raw);
  return db.$transaction(async (tx) => {
    await lockQuestion(tx, id);
    const q = await tx.question.findUniqueOrThrow({ where: { id } });
    if (q.updatedAt.toISOString() !== p.version) throw new AppError('CONFLICT', 'Question changed. Reload before submitting evidence.');
    if (actor.role !== 'ADMIN' && (['DISPUTED', 'REJECTED'].includes(q.rightsStatus) || ['PUBLISHED', 'ARCHIVED'].includes(q.status))) throw new AppError('FORBIDDEN', 'An admin must reopen disputed, rejected or published content for rights review.');
    await tx.question.update({ where: { id }, data: { ...invalidateRights, rightsStatus: 'PENDING', rightsHolder: p.holder, rightsEvidence: p.evidence } });
    await tx.auditLog.create({ data: { actorId: actor.id, action: 'question.rights.evidence', entityType: 'question', entityId: id, diff: { from: q.rightsStatus, to: 'PENDING', contentVersion: q.updatedAt.toISOString() } } });
  });
}

export async function reviewContentRights(actor: Actor, rawId: unknown, raw: unknown) {
  if (actor.role !== 'ADMIN') throw new AppError('FORBIDDEN', 'Only admins decide content rights.');
  const id = questionId.parse(rawId), p = decisionSchema.parse(raw);
  return db.$transaction(async (tx) => {
    await lockQuestion(tx, id);
    const q = await tx.question.findUniqueOrThrow({ where: { id } });
    if (q.updatedAt.toISOString() !== p.version) throw new AppError('CONFLICT', 'Question or evidence changed. Reload before reviewing.');
    if (p.status === 'VERIFIED' && (q.rightsStatus !== 'PENDING' || !q.rightsHolder || !q.rightsEvidence || q.rightsEvidence.trim().length < 10)) {
      throw new AppError('INVALID', 'Submit rights-holder and authorization evidence for this saved version before verification.');
    }
    await tx.question.update({ where: { id }, data: {
      rightsStatus: p.status, rightsDecision: p.reason, rightsReviewedBy: actor.id, rightsReviewedAt: new Date(),
      rightsAllowDelivery: p.status === 'VERIFIED' && p.allowDelivery,
      rightsAllowExport: p.status === 'VERIFIED' && p.allowExport,
    } });
    await tx.auditLog.create({ data: { actorId: actor.id, action: 'question.rights.review', entityType: 'question', entityId: id, diff: { from: q.rightsStatus, to: p.status, allowDelivery: p.status === 'VERIFIED' && p.allowDelivery, allowExport: p.status === 'VERIFIED' && p.allowExport, contentVersion: q.updatedAt.toISOString() } } });
  });
}

export async function requireQuestionDelivery(id: string) {
  if (!await db.question.findFirst({ where: { id, ...deliveryRights }, select: { id: true } })) {
    throw new AppError('NOT_FOUND', 'Question content is withheld pending rights review. Your saved attempt is preserved.');
  }
}

// Older clips recorded a code in prose; honor that provenance without rewriting or discarding the page.
export const notebookSourceCodes = (body: string) => [...body.matchAll(/(?:^|\n)— Question ([a-z0-9][a-z0-9._-]{1,40})(?=\s|$)/gi)].map((m) => m[1]!);

export async function filterNotebookRights<T extends { body: string; sourceQuestionIds: string[] }>(pages: T[], scope: 'delivery' | 'export') {
  const ids = pages.flatMap((p) => p.sourceQuestionIds), codes = [...pages.flatMap((p) => notebookSourceCodes(p.body)), ...ids.filter((id) => id.startsWith('code:')).map((id) => id.slice(5))];
  if (!ids.length && !codes.length) return pages;
  const allowed = await db.question.findMany({ where: { OR: [{ id: { in: ids } }, { code: { in: codes } }], ...(scope === 'delivery' ? deliveryRights : exportRights) }, select: { id: true, code: true } });
  const allowedIds = new Set(allowed.map((q) => q.id)), allowedCodes = new Set(allowed.map((q) => q.code));
  return pages.filter((p) => p.sourceQuestionIds.every((id) => id.startsWith('code:') ? allowedCodes.has(id.slice(5)) : allowedIds.has(id)) && notebookSourceCodes(p.body).every((code) => allowedCodes.has(code)));
}
