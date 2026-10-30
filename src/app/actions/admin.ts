'use server';
import { revalidatePath } from 'next/cache';
import * as admin from '@/lib/admin';
import { action } from '@/lib/errors';
import { requireRole } from '@/lib/session';
import { reviewContentRights, submitRightsEvidence } from '@/lib/content-rights';

// Every action re-reads the actor's role from the database (requireRole). The UI hiding a button is never the security check.
const editor = () => requireRole('EDITOR');
const adminOnly = () => requireRole('ADMIN');
const refresh = () => revalidatePath('/admin', 'layout');

export async function createQuestionAction(input: unknown) { return action(async () => { const qid = await admin.createQuestion(await editor(), input); refresh(); return qid; }); }
export async function updateQuestionAction(id: string, input: unknown) { return action(async () => { await admin.updateQuestion(await editor(), id, input); refresh(); }); }
export async function setStatusAction(id: string, to: string) { return action(async () => { await admin.setStatus(await editor(), id, to); refresh(); }); }
export async function submitRightsEvidenceAction(id: string, input: unknown) { return action(async () => { await submitRightsEvidence(await editor(), id, input); refresh(); }); }
export async function reviewContentRightsAction(id: string, input: unknown) { return action(async () => { await reviewContentRights(await adminOnly(), id, input); refresh(); }); }
export async function importAction(rows: unknown, dryRun: boolean) { return action(async () => { const r = await admin.importQuestions(await editor(), rows, dryRun); if (!dryRun) refresh(); return r; }); }
export async function resolveReportAction(id: string, status: string) { return action(async () => { await admin.resolveReport(await editor(), id, status); refresh(); }); }
export async function addTaxonomyAction(kind: string, name: string) { return action(async () => { await admin.addTaxonomy(await adminOnly(), kind, name); refresh(); }); }
export async function renameTaxonomyAction(kind: string, id: string, name: string) { return action(async () => { await admin.renameTaxonomy(await adminOnly(), kind, id, name); refresh(); }); }
export async function deleteTaxonomyAction(kind: string, id: string) { return action(async () => { await admin.deleteTaxonomy(await adminOnly(), kind, id); refresh(); }); }
export async function setRoleAction(userId: string, role: string) { return action(async () => { await admin.setRole(await adminOnly(), userId, role); refresh(); }); }
