import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { bankQuestionSchema, normalize, validateBank } from '@/lib/question-bank';
import batch from '../../content/usmle-images/batch-01.json' with { type: 'json' };
import manifest from '../../content/usmle-images/manifest.json' with { type: 'json' };

describe('licensed USMLE image pilot', () => {
  it('has one complete original item per USMLE track and retains explicit review limits', () => {
    expect(batch.map(q => q.exam)).toEqual(['Step 1', 'Step 2 CK', 'Step 3']);
    expect(validateBank(batch).errors).toEqual([]);
    expect(batch.map(q => q.difficulty)).toEqual([2, 3, 4]);
    expect(manifest.reviewStatus).toBe('DRAFT_MEDICALLY_UNREVIEWED');
    expect(manifest.publicationAuthorized).toBe(false);
    for (const question of batch) expect(bankQuestionSchema.safeParse(question).success).toBe(true);
  });

  it.each(manifest.assets)('keeps the correct licensed bytes and credit for $questionCode', asset => {
    const question = batch.find(q => q.code === asset.questionCode)!;
    expect(question.image).toBe(asset.path);
    expect(asset.path).toMatch(/^\/question-images\/usmle\/exhibit-\d{2}\.jpg$/);
    const bytes = readFileSync(`public${asset.path}`);
    expect(createHash('sha256').update(bytes).digest('hex')).toBe(asset.sha256);
    expect(question.references.some(ref => ref.url === asset.sourcePage)).toBe(true);
    expect(question.references.some(ref => ref.url === asset.licenseUrl)).toBe(true);
    expect(question.explanation).toContain(asset.creator);
    expect(question.stem).toContain(asset.creator);
    expect(question.stem).toContain(asset.licenseUrl);
    expect(question.explanation).toContain(asset.licenseUrl);
    expect(question.source).toContain('AI-authored; medically unreviewed');
    expect(asset.clinicalReview).toBe('PENDING');
    const answer = question.options.find(option => option.correct)!;
    expect(normalize(question.stem)).not.toContain(normalize(answer.text));
    expect(question.imageAlt).not.toMatch(/sickle|pneumothorax|atrial fibrillation/i);
  });
});
