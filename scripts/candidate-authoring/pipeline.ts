import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { questionContentSchema, type QuestionContent } from '../../src/lib/validation/content';
import { bankQuestionSchema, similarity } from '../../src/lib/question-bank';
import { materializeCandidate, type CandidateSpec, type ManifestEntry } from './types';

export type PipelineResult = {
  step: 'Step 1' | 'Step 2 CK' | 'Step 3';
  batch: number;
  drafted: number;
  structurallyValid: number;
  editoriallyScreened: number;
  accepted: number;
  rejected: number;
  unresolved: number;
  acceptedQuestions: QuestionContent[];
  manifestEntries: ManifestEntry[];
  errors: Array<{ code: string; reason: string }>;
  duplicateWarnings: Array<{ code: string; matchedWith: string; similarity: number }>;
  topicBreakdown: Record<string, number>;
  keyDistribution: Record<string, number>;
};

export function loadExistingCorpus(): Array<{ code: string; stem: string; objective?: string }> {
  const corpus: Array<{ code: string; stem: string; objective?: string }> = [];

  function scan(dir: string) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!full.includes('candidates')) scan(full);
      } else if (entry.name.endsWith('.json')) {
        try {
          const data = JSON.parse(readFileSync(full, 'utf8'));
          if (Array.isArray(data)) {
            data.forEach((q) => {
              if (q && q.code && q.stem) {
                corpus.push({ code: q.code, stem: q.stem, objective: q.objective });
              }
            });
          }
        } catch {
          // ignore non-array or invalid JSON
        }
      }
    }
  }

  scan('content');
  return corpus;
}

export function processCandidateBatch(
  specs: CandidateSpec[],
  exam: 'Step 1' | 'Step 2 CK' | 'Step 3',
  batchNumber: number,
  existingCorpus: Array<{ code: string; stem: string; objective?: string }>
): PipelineResult {
  const acceptedQuestions: QuestionContent[] = [];
  const manifestEntries: ManifestEntry[] = [];
  const errors: Array<{ code: string; reason: string }> = [];
  const duplicateWarnings: Array<{ code: string; matchedWith: string; similarity: number }> = [];
  const topicBreakdown: Record<string, number> = {};
  const keyDistribution: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const keys = ['A', 'B', 'C', 'D', 'E'];

  let structurallyValidCount = 0;
  let editoriallyScreenedCount = 0;
  let acceptedCount = 0;
  let rejectedCount = 0;
  let unresolvedCount = 0;

  const currentBatchCorpus = [...existingCorpus];

  specs.forEach((spec, i) => {
    const code = spec.code;
    const itemNumber = (batchNumber - 1) * 25 + i;
    const materialized = materializeCandidate(spec, itemNumber);

    // Track topic
    topicBreakdown[spec.system] = (topicBreakdown[spec.system] || 0) + 1;

    const getManifestCommon = () => ({
      code,
      exam,
      subject: spec.subject,
      system: spec.system,
      topic: spec.topic,
      difficulty: materialized.difficulty,
      shortestValidSolution: spec.shortestValidSolution,
      necessaryInference: spec.necessaryInference || spec.shortestValidSolution,
      strongestDistractor: spec.strongestDistractor || (spec.choices ? spec.choices[1][0] : (typeof spec.options?.[1] === 'string' ? spec.options[1] : spec.options?.[1]?.text) || 'Distractor option B'),
      distractorExclusion: spec.distractorExclusion || (spec.choices ? spec.choices[1][1] : (typeof spec.options?.[1] === 'object' ? spec.options[1].explanation : undefined) || spec.distractorExplanations?.['B'] || 'Alternative clinical rationale'),
      clinicalConcerns: spec.clinicalConcerns || [],
      references: materialized.references,
      batchFile: `content/candidates/${exam.toLowerCase().replace(/[^a-z0-9]/g, '')}/batch-${String(batchNumber).padStart(2, '0')}.json`,
      hash: createHash('sha256').update(JSON.stringify(materialized)).digest('hex'),
      createdAt: new Date().toISOString(),
    });

    // Check review status override
    if (spec.critique?.verdict === 'REJECT' || spec.reviewStatus === 'REJECTED') {
      rejectedCount++;
      manifestEntries.push({
        ...getManifestCommon(),
        status: 'REJECTED',
        rejectionReason: spec.critique?.rejectionNotes || spec.rejectionReason || 'Rejected during clinical critique',
        critique: spec.critique,
      });
      return;
    }

    if (
      spec.critique?.verdict === 'UNRESOLVED' ||
      spec.reviewStatus === 'UNRESOLVED' ||
      (spec.clinicalConcerns && spec.clinicalConcerns.length > 0 && spec.clinicalConcerns.some((c) => c.toLowerCase().includes('unresolved')))
    ) {
      unresolvedCount++;
      manifestEntries.push({
        ...getManifestCommon(),
        status: 'UNRESOLVED',
        rejectionReason: spec.critique?.unresolvedNotes || spec.rejectionReason || 'Clinical or guideline controversy unresolved',
        critique: spec.critique,
      });
      return;
    }

    // 1. Zod schema validation
    const contentCheck = questionContentSchema.safeParse(materialized);
    if (!contentCheck.success) {
      rejectedCount++;
      const reason = contentCheck.error.issues.map((iss) => `${iss.path.join('.')}: ${iss.message}`).join('; ');
      errors.push({ code, reason });
      manifestEntries.push({
        ...getManifestCommon(),
        status: 'REJECTED',
        rejectionReason: `Content schema validation failure: ${reason}`,
      });
      return;
    }

    const bankCheck = bankQuestionSchema.safeParse(materialized);
    if (!bankCheck.success) {
      rejectedCount++;
      const reason = bankCheck.error.issues.map((iss) => `${iss.path.join('.')}: ${iss.message}`).join('; ');
      errors.push({ code, reason });
      manifestEntries.push({
        ...getManifestCommon(),
        status: 'REJECTED',
        rejectionReason: `Bank editorial schema failure: ${reason}`,
      });
      return;
    }

    // 2. Distractor parallelism check
    const lengths = materialized.options.map((o) => o.text.trim().length);
    const minLen = Math.min(...lengths);
    const maxLen = Math.max(...lengths);
    if (minLen < 10 || minLen / maxLen < 0.20) {
      rejectedCount++;
      const reason = `Distractor length parallelism failed (min: ${minLen}, max: ${maxLen}, ratio: ${(minLen / maxLen).toFixed(2)})`;
      errors.push({ code, reason });
      manifestEntries.push({
        ...getManifestCommon(),
        status: 'REJECTED',
        rejectionReason: reason,
      });
      return;
    }

    // Passed Zod schemas and distractor length parallelism
    structurallyValidCount++;

    // 3. Shingles duplicate screening
    let isDuplicate = false;
    for (const existing of currentBatchCorpus) {
      if (existing.code === code) {
        isDuplicate = true;
        rejectedCount++;
        const reason = `Code collision with ${existing.code}`;
        errors.push({ code, reason });
        manifestEntries.push({
          ...getManifestCommon(),
          status: 'REJECTED',
          rejectionReason: reason,
        });
        break;
      }

      const sim = similarity(materialized.stem, existing.stem);
      if (sim >= 0.65) {
        isDuplicate = true;
        rejectedCount++;
        const reason = `Lexical stem similarity ${sim.toFixed(3)} >= 0.65 against ${existing.code}`;
        duplicateWarnings.push({ code, matchedWith: existing.code, similarity: sim });
        manifestEntries.push({
          ...getManifestCommon(),
          status: 'REJECTED',
          rejectionReason: reason,
        });
        break;
      }
    }

    if (isDuplicate) return;

    // Check if separate recorded critique exists with PASS verdict
    const hasRecordedCritique = spec.critique && spec.critique.verdict === 'PASS';
    const status = hasRecordedCritique ? 'EDITORIALLY_SCREENED' : 'STRUCTURALLY_VALID';

    acceptedCount++;
    if (hasRecordedCritique) {
      editoriallyScreenedCount++;
    }

    const correctIdx = materialized.options.findIndex((o) => o.correct);
    const keyLetter = keys[correctIdx] || 'A';
    keyDistribution[keyLetter] = (keyDistribution[keyLetter] || 0) + 1;

    acceptedQuestions.push(materialized);
    currentBatchCorpus.push({ code, stem: materialized.stem, objective: materialized.objective });

    manifestEntries.push({
      ...getManifestCommon(),
      status,
      critique: spec.critique,
    });
  });

  return {
    step: exam,
    batch: batchNumber,
    drafted: specs.length,
    structurallyValid: structurallyValidCount,
    editoriallyScreened: editoriallyScreenedCount,
    accepted: acceptedCount,
    rejected: rejectedCount,
    unresolved: unresolvedCount,
    acceptedQuestions,
    manifestEntries,
    errors,
    duplicateWarnings,
    topicBreakdown,
    keyDistribution,
  };
}
