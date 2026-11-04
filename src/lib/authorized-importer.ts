import type { Tx } from './db';
import type { Actor } from './admin';
import { AppError } from './errors';
import { questionContentSchema, type QuestionContent } from './validation/content';
import { invalidateRights, lockQuestion } from './content-rights';
import { createQuestionRevision } from './question-revision';

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

async function resolveTaxonomy(tx: Tx, actor: Actor, c: QuestionContent) {
  const exam = await tx.exam.findFirst({ where: { name: c.exam } });
  if (!exam) throw new AppError('INVALID', `Unknown exam "${c.exam}". Please define it under Taxonomy first.`);

  const getOrCreate = async (kind: 'subject' | 'system', val: string) => {
    if (kind === 'subject') {
      const existing = await tx.subject.findUnique({ where: { name: val } });
      if (existing) return existing.id;
      const created = await tx.subject.create({ data: { name: val } });
      return created.id;
    } else {
      const existing = await tx.system.findUnique({ where: { name: val } });
      if (existing) return existing.id;
      const created = await tx.system.create({ data: { name: val } });
      return created.id;
    }
  };

  const subjectId = await getOrCreate('subject', c.subject);
  const systemId = await getOrCreate('system', c.system);
  const topicId = c.topic
    ? (await tx.topic.upsert({
        where: { subjectId_name: { subjectId, name: c.topic } },
        create: { subjectId, name: c.topic },
        update: {},
      })).id
    : null;

  return { examId: exam.id, subjectId, systemId, topicId };
}

/**
 * Persists validated questions into the database with strict Stage 4B review gating:
 * All newly imported content is marked DRAFT, rightsStatus: UNVERIFIED, rightsAllowDelivery: false.
 */
export async function persistAuthorizedBatch(
  tx: Tx,
  actor: Actor,
  questions: QuestionContent[],
  options: { dryRun?: boolean; batchId?: string } = {}
): Promise<ImportResultSummary> {
  if (actor.role !== 'ADMIN') throw new AppError('FORBIDDEN', 'Only admins can import candidate content.');
  const summary: ImportResultSummary = {
    dryRun: !!options.dryRun,
    created: 0,
    updated: 0,
    skipped: 0,
    errors: [],
    batchProvenance: [],
  };

  const provMap = new Map<string, ProvenanceReport>();

  for (const c of questions) {
    const existing = await tx.question.findUnique({ where: { code: c.code } });
    if (existing) {
      await lockQuestion(tx, existing.id);
      summary.skipped++;
      continue;
    }

    const key = `${c.source}||${c.license}||${c.attribution ?? ''}`;
    const p = provMap.get(key) ?? { source: c.source, license: c.license, attribution: c.attribution, count: 0 };
    p.count++;
    provMap.set(key, p);
    if (options.dryRun) {
      if (!await tx.exam.findFirst({ where: { name: c.exam } })) throw new AppError('INVALID', `Unknown exam "${c.exam}".`);
      summary.created++;
      continue;
    }
    const tax = await resolveTaxonomy(tx, actor, c);
    const data = {
      code: c.code,
      type: c.type,
      difficulty: c.difficulty,
      stemMd: c.stem,
      explanationMd: c.explanation,
      objective: c.objective ?? null,
      keyPoints: c.keyPoints.length ? c.keyPoints : c.objective ? [c.objective] : [],
      references: c.references,
      imageUrl: c.image ?? null,
      imageAlt: c.imageAlt ?? null,
      source: c.source,
      license: c.license,
      attribution: c.attribution ?? null,
      ...tax,
      ...invalidateRights, // Withholds delivery until EDITORIAL/CLINICAL/RIGHTS review
    };

      const q = await tx.question.create({
            data: {
              ...data,
              status: 'DRAFT',
              isDemo: false,
              authorId: actor.id,
            },
          });

      // Synchronize options
      for (let i = 0; i < c.options.length; i++) {
        const opt = c.options[i]!;
        await tx.option.create({
          data: {
            questionId: q.id,
            position: i,
            text: opt.text,
            isCorrect: opt.correct,
            explanationMd: opt.explanation ?? null,
          },
        });
      }

      // Record question revision
      await createQuestionRevision(tx, {
        questionId: q.id,
        authorId: actor.id,
        changeSummary: `Initial candidate import (${options.batchId ?? 'batch'}); human review pending`,
      });

      summary.created++;
  }

  summary.batchProvenance = Array.from(provMap.values());
  return summary;
}
