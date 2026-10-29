import type { QuestionContent } from '../../src/lib/validation/content';

export type Spec = {
  subject: string; system: string; topic: string; stem: string;
  options: [string, string][]; explanation: string; objective: string;
  reference: [string, string]; difficulty?: number; exam?: string;
};

/** Offline materializer: author every vignette and rationale; it never fabricates medical content. */
export function authorBatch(batch: number, specs: Spec[], codes?: string[]): QuestionContent[] {
  if (codes ? codes.length !== specs.length || specs.length < 1 || specs.length > 100 : specs.length !== 25) throw new Error(`Batch ${batch} needs 25 legacy specifications, or 1–100 specifications with explicit stable codes.`);
  return specs.map((s, i) => {
    const n = (batch - 1) * 25 + i + 1;
    const options = s.options.map(([text, explanation], index) => ({ text, explanation, correct: index === 0 }));
    const offset = n % options.length;
    return {
      code: codes?.[i] ?? `op26-${String(n).padStart(4, '0')}`, exam: s.exam ?? 'Step 1', subject: s.subject, system: s.system,
      topic: s.topic, type: 'SINGLE', difficulty: s.difficulty ?? 3, stem: s.stem,
      options: [...options.slice(offset), ...options.slice(0, offset)], explanation: s.explanation,
      objective: s.objective, keyPoints: [s.objective], references: [{ label: s.reference[0], url: s.reference[1] }],
      source: 'OpenPrep original; AI-authored; medically unreviewed', license: 'CC-BY-SA-4.0',
      attribution: 'OpenPrep contributors; AI-assisted original educational content (2026). No clinician review claimed.',
    };
  });
}
