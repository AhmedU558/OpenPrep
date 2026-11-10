import type { Tx } from './db';
import type { Actor } from './admin';
import { AppError } from './errors';
import { questionContentSchema, type QuestionContent } from './validation/content';
import { invalidateRights } from './content-rights';
import { buildQuestionSnapshot, hashContentSnapshot } from './question-revision';
import type { Prisma } from '@/generated/prisma/client';

export const authorizedLicensePattern = /^(CC-BY|CC-BY-SA|CC-BY-NC|CC-BY-NC-SA|CC0|Public Domain|Open Access|Institutional Permission|Documented License Grant)(?:-[\d.]+)?/i;

export interface ProvenanceReport {
  source: string;
  license: string;
  attribution?: string;
  count: number;
}

export interface ValidationIssue {
  index: number;
  code?: string;
  field?: string;
  message: string;
}

export interface BatchValidationResult {
  valid: boolean;
  totalParsed: number;
  validQuestions: QuestionContent[];
  errors: ValidationIssue[];
  provenance: ProvenanceReport[];
}

export interface ImportResultSummary {
  dryRun: boolean;
  created: number;
  updated: number;
  skipped: number;
  errors: ValidationIssue[];
  batchProvenance: ProvenanceReport[];
}

/**
 * Validates a batch of candidate human-authored questions for schema completeness,
 * valid clinical exhibit references, and documented rights/licensing provenance.
 */
export function validateAuthorizedBatch(rawItems: unknown[]): BatchValidationResult {
  if (!Array.isArray(rawItems)) {
    return {
      valid: false,
      totalParsed: 0,
      validQuestions: [],
      errors: [{ index: -1, message: 'Input must be a JSON array of question objects.' }],
      provenance: [],
    };
  }

  const validQuestions: QuestionContent[] = [];
  const errors: ValidationIssue[] = [];
  const seenCodes = new Set<string>();
  const provMap = new Map<string, ProvenanceReport>();

  rawItems.forEach((raw, index) => {
    const parseRes = questionContentSchema.safeParse(raw);
    if (!parseRes.success) {
      parseRes.error.issues.forEach((issue) => {
        errors.push({
          index,
          code: (raw as { code?: string })?.code,
          field: issue.path.join('.'),
          message: issue.message,
        });
      });
      return;
    }

    const q = parseRes.data;

    if (seenCodes.has(q.code)) {
      errors.push({
        index,
        code: q.code,
        field: 'code',
        message: `Duplicate question code "${q.code}" found within this batch.`,
      });
      return;
    }
    seenCodes.add(q.code);

    // Licensing and provenance audit
    const licenseValid = authorizedLicensePattern.test(q.license.trim());
    if (!licenseValid) {
      errors.push({
        index,
        code: q.code,
        field: 'license',
        message: `Unrecognized or undocumented license "${q.license}". Must cite an open standard (e.g., CC-BY-4.0) or Documented License Grant.`,
      });
      return;
    }

    if (!q.source || q.source.trim().length < 3) {
      errors.push({
        index,
        code: q.code,
        field: 'source',
        message: 'A documented source publication, repository, or clinical institution is required.',
      });
      return;
    }

    // Tally provenance
    const key = `${q.source}||${q.license}||${q.attribution ?? ''}`;
    const cur = provMap.get(key) ?? {
      source: q.source,
      license: q.license,
      attribution: q.attribution,
      count: 0,
    };
    cur.count++;
    provMap.set(key, cur);

    validQuestions.push(q);
  });

  return {
    valid: errors.length === 0,
    totalParsed: rawItems.length,
    validQuestions,
    errors,
    provenance: Array.from(provMap.values()),
  };
}

/** Create-only batch persistence; existing questions/options/revisions are never rewritten. */
export async function persistAuthorizedBatch(
  tx: Tx, actor: Actor, questions: QuestionContent[], options: { dryRun?: boolean; batchId?: string } = {},
): Promise<ImportResultSummary> {
  if (actor.role !== 'ADMIN') throw new AppError('FORBIDDEN', 'Only admins can import candidate content.');
  const summary: ImportResultSummary = { dryRun: !!options.dryRun, created: 0, updated: 0, skipped: 0, errors: [], batchProvenance: [] };
  if (!questions.length) return summary;
  if (questions.length > 100) throw new AppError('INVALID', 'Candidate import batches require at most 100 questions.');
  const existing = await tx.question.findMany({ where: { code: { in: questions.map(q => q.code) } }, select: { code: true } });
  const seen = new Set(existing.map(q => q.code));
  const pending = questions.filter(q => { if (seen.has(q.code)) { summary.skipped++; return false; } seen.add(q.code); return true; });
  if (!pending.length) return summary;
  const provenance = new Map<string, ProvenanceReport>();
  for (const q of pending) {
    const key = `${q.source}||${q.license}||${q.attribution ?? ''}`;
    const value = provenance.get(key) ?? { source: q.source, license: q.license, attribution: q.attribution, count: 0 };
    value.count++; provenance.set(key, value);
  }
  summary.batchProvenance = [...provenance.values()];
  const names = (key: 'exam' | 'subject' | 'system') => [...new Set(pending.map(q => q[key]))];
  const exams = await tx.exam.findMany({ where: { name: { in: names('exam') } } });
  for (const name of names('exam')) if (!exams.some(e => e.name === name)) throw new AppError('INVALID', `Unknown exam "${name}".`);
  if (options.dryRun) { summary.created = pending.length; return summary; }
  await tx.subject.createMany({ data: names('subject').map(name => ({ name })), skipDuplicates: true });
  await tx.system.createMany({ data: names('system').map(name => ({ name })), skipDuplicates: true });
  const subjects = await tx.subject.findMany({ where: { name: { in: names('subject') } } });
  const systems = await tx.system.findMany({ where: { name: { in: names('system') } } });
  const subjectId = (q: QuestionContent) => subjects.find(s => s.name === q.subject)!.id;
  const topicData = [...new Map(pending.filter(q => q.topic).map(q => [`${subjectId(q)}|${q.topic}`, { subjectId: subjectId(q), name: q.topic! }])).values()];
  if (topicData.length) await tx.topic.createMany({ data: topicData, skipDuplicates: true });
  const topics = topicData.length ? await tx.topic.findMany({ where: { OR: topicData } }) : [];
  const created = await tx.question.createManyAndReturn({ data: pending.map(q => ({
    code: q.code, type: q.type, difficulty: q.difficulty, stemMd: q.stem, explanationMd: q.explanation,
    objective: q.objective ?? null, keyPoints: q.keyPoints.length ? q.keyPoints : q.objective ? [q.objective] : [],
    references: q.references, imageUrl: q.image ?? null, imageAlt: q.imageAlt ?? null, source: q.source,
    license: q.license, attribution: q.attribution ?? null, examId: exams.find(e => e.name === q.exam)!.id,
    subjectId: subjectId(q), systemId: systems.find(s => s.name === q.system)!.id,
    topicId: q.topic ? topics.find(t => t.subjectId === subjectId(q) && t.name === q.topic)!.id : null,
    ...invalidateRights, status: 'DRAFT', isDemo: false, authorId: actor.id,
  })) });
  await tx.option.createMany({ data: created.flatMap(q => pending.find(c => c.code === q.code)!.options.map((o, position) => ({
    questionId: q.id, position, text: o.text, isCorrect: o.correct, explanationMd: o.explanation ?? null,
  }))) });
  await tx.questionRevision.createMany({ data: created.map(q => {
    const c = pending.find(c => c.code === q.code)!;
    const snapshot = buildQuestionSnapshot({ ...q,
      exam: { slug: exams.find(e => e.id === q.examId)!.slug }, subject: { name: c.subject }, system: { name: c.system },
      topic: c.topic ? { name: c.topic } : null,
      options: c.options.map((o, position) => ({ position, text: o.text, isCorrect: o.correct, explanationMd: o.explanation ?? null })),
    });
    return { questionId: q.id, revisionNumber: 1, schemaVersion: 1, contentHash: hashContentSnapshot(snapshot),
      contentSnapshot: snapshot as unknown as Prisma.InputJsonValue, authorId: actor.id,
      changeSummary: `Initial candidate import (${options.batchId ?? 'batch'}); human review pending` };
  }) });
  summary.created = created.length;
  return summary;
}
