import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { bankQuestionSchema, normalize, validateBank } from '@/lib/question-bank';
import { filtersSchema } from '@/lib/validation/exam';
import wave from '../../content/usmle-images/uworld-wave-01.json' with { type: 'json' };
import manifest from '../../content/usmle-images/uworld-wave-manifest.json' with { type: 'json' };

describe('UWorld-aligned USMLE visual wave (Step 1, Step 2 CK, Step 3)', () => {
  it('includes 11 visual questions for each USMLE track (33 total) passing schema and bank validation', () => {
    expect(wave).toHaveLength(33);
    expect(wave.filter((q) => q.exam === 'Step 1')).toHaveLength(11);
    expect(wave.filter((q) => q.exam === 'Step 2 CK')).toHaveLength(11);
    expect(wave.filter((q) => q.exam === 'Step 3')).toHaveLength(11);
    expect(validateBank(wave).errors).toEqual([]);
    for (const q of wave) {
      expect(bankQuestionSchema.safeParse(q).success).toBe(true);
      expect(q.options).toHaveLength(5);
      expect(q.options.filter((o) => o.correct)).toHaveLength(1);
    }
  });

  it('prevents stem answer leakage, retains neutral alt text, and discloses AI authoring', () => {
    for (const q of wave) {
      const answer = q.options.find((o) => o.correct)!;
      expect(normalize(q.stem)).not.toContain(normalize(answer.text));
      expect(q.imageAlt.length).toBeGreaterThanOrEqual(40);
      expect(q.source).toContain('AI-authored; medically unreviewed');
      for (const opt of q.options) {
        expect(opt.explanation.length).toBeGreaterThanOrEqual(50);
      }
    }
  });

  it.each(manifest.assets)('verifies local exhibit file integrity for $questionCode', (asset) => {
    const q = wave.find((item) => item.code === asset.questionCode)!;
    expect(q).toBeDefined();
    expect(q.image).toBe(asset.path);
    expect(asset.path).toMatch(/^\/question-images\/usmle\/exhibit-\d{2}\.(jpg|png)$/);
    const bytes = readFileSync(`public${asset.path}`);
    expect(createHash('sha256').update(bytes).digest('hex')).toBe(asset.sha256);
    if (asset.path.endsWith('.jpg')) {
      expect(q.explanation).toContain('Wikimedia Commons');
      expect(q.references.some((r) => r.url.includes('commons.wikimedia.org'))).toBe(true);
      expect(q.references.some((r) => r.url.includes('creativecommons.org'))).toBe(true);
    }
  });

  it('supports optional hasImage filter in exam filter schema without breaking defaults', () => {
    expect(filtersSchema.parse({}).hasImage).toBeUndefined();
    expect(filtersSchema.parse({ hasImage: true }).hasImage).toBe(true);
  });
});
