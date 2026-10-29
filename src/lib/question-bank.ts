import { z } from 'zod';
import { questionContentSchema } from './validation/content';
import taxonomy from '../../content/bank/taxonomy.json' with { type: 'json' };

/** Higher editorial bar for newly authored bank content; legacy imports remain compatible. */
export const bankQuestionSchema = questionContentSchema.superRefine((q, ctx) => {
  const fail = (message: string) => ctx.addIssue({ code: 'custom', message });
  for (const [field, allowed] of [['exam', taxonomy.exams], ['subject', taxonomy.subjects], ['system', taxonomy.systems]] as const) {
    if (!allowed.includes(q[field])) fail(`Unknown ${field}: ${q[field]}; approve taxonomy before importing.`);
  }
  if (q.type !== 'SINGLE' || q.options.length < 4 || q.options.length > 5) fail('Bank items require SINGLE with four or five options.');
  if (!q.topic || !q.objective || q.keyPoints.length < 1) fail('Topic, learning objective and takeaways are required.');
  if (q.stem.length < 100 || q.explanation.length < 180) fail('Develop the vignette and explanation.');
  if (q.options.some(o => !o.explanation || o.explanation.trim().length < 35)) fail('Explain every answer option.');
  if (new Set(q.options.map(o => normalize(o.text))).size !== q.options.length) fail('Answer options must be distinct.');
  if (!q.references.length || q.references.some(r => !r.url)) fail('Linked factual references are required.');
  if (!q.source.includes('AI-authored') || !q.source.includes('unreviewed') || !q.attribution) fail('Declare AI authorship, review status and attribution.');
  if (q.license !== 'CC-BY-SA-4.0') fail('This original bank uses CC-BY-SA-4.0.');
});

export const normalize = (s: string) => s.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();

function shingles(s: string) {
  const words = normalize(s).split(' ');
  return new Set(words.slice(0, -2).map((_, i) => words.slice(i, i + 3).join(' ')));
}

/** Conservative lexical screen. Semantic/medical duplicates still need editorial review. */
export function similarity(a: string, b: string) {
  if (normalize(a) === normalize(b)) return 1;
  const left = shingles(a), right = shingles(b);
  const intersection = [...left].filter(x => right.has(x)).length;
  return intersection / (left.size + right.size - intersection || 1);
}

export function validateBank(raw: unknown, existing: { code: string; stem: string }[] = []) {
  const parsed = z.array(bankQuestionSchema).min(1).max(100).safeParse(raw);
  if (!parsed.success) return { questions: [], errors: parsed.error.issues.map(i => ({ index: Number(i.path[0] ?? 0), message: `${i.path.join('.')}: ${i.message}` })) };
  const errors: { index: number; message: string }[] = [];
  const seen = new Set<string>();
  parsed.data.forEach((q, index) => {
    if (seen.has(q.code)) errors.push({ index, message: `Duplicate code ${q.code}` });
    seen.add(q.code);
    const match = [...existing, ...parsed.data.slice(0, index)].find(other => other.code !== q.code && similarity(q.stem, other.stem) >= 0.65);
    if (match) errors.push({ index, message: `Potential duplicate of ${match.code}; quarantine for editorial review.` });
  });
  return { questions: parsed.data, errors };
}
