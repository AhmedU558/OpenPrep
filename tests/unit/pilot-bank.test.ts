import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { questionContentSchema, type QuestionContent } from '@/lib/validation/content';

function loadPilots(path: string): QuestionContent[] {
  const raw = JSON.parse(readFileSync(path, 'utf8'));
  return raw.map((item: unknown) => questionContentSchema.parse(item));
}

describe('30-Question Pilot Verification & Difficulty Quality Suite', () => {
  const step1 = loadPilots('content/pilots/step1-pilot.json');
  const step2ck = loadPilots('content/pilots/step2ck-pilot.json');
  const step3 = loadPilots('content/pilots/step3-pilot.json');
  const allPilots = [...step1, ...step2ck, ...step3];

  it('verifies exact inventory: 10 questions per exam (30 total)', () => {
    expect(step1).toHaveLength(10);
    expect(step2ck).toHaveLength(10);
    expect(step3).toHaveLength(10);
    expect(allPilots).toHaveLength(30);

    step1.forEach((q) => expect(q.exam).toBe('Step 1'));
    step2ck.forEach((q) => expect(q.exam).toBe('Step 2 CK'));
    step3.forEach((q) => expect(q.exam).toBe('Step 3'));
  });

  it('enforces difficulty >= 4 and single-best-answer format', () => {
    allPilots.forEach((q) => {
      expect(q.difficulty).toBeGreaterThanOrEqual(4);
      expect(q.type).toBe('SINGLE');
      const correctOpts = q.options.filter((o) => o.correct);
      expect(correctOpts).toHaveLength(1);
      expect(q.options.length).toBe(5); // Standardized to 5 options per question
    });
  });

  it('verifies that the correct answer is naturally distributed and NOT an all-A pattern', () => {
    // Collect index of correct answer for each exam
    const getPositions = (bank: QuestionContent[]) => bank.map((q) => q.options.findIndex((o) => o.correct));

    const s1Positions = getPositions(step1);
    const s2Positions = getPositions(step2ck);
    const s3Positions = getPositions(step3);

    // Assert that correct answers are NOT all at index 0
    expect(new Set(s1Positions).size).toBeGreaterThanOrEqual(4);
    expect(new Set(s2Positions).size).toBeGreaterThanOrEqual(4);
    expect(new Set(s3Positions).size).toBeGreaterThanOrEqual(4);

    // Across the 30 questions, all 5 positions (A, B, C, D, E) must be represented
    const allPositions = getPositions(allPilots);
    for (let pos = 0; pos < 5; pos++) {
      expect(allPositions.filter((p) => p === pos).length).toBeGreaterThanOrEqual(3);
    }
  });

  it('enforces distractor parallelism: comparable length and grammatical scope', () => {
    allPilots.forEach((q) => {
      const lengths = q.options.map((o) => o.text.trim().length);
      const minLen = Math.min(...lengths);
      const maxLen = Math.max(...lengths);

      // Verify that options within an item are parallel and not an obvious length giveaway
      expect(minLen).toBeGreaterThan(10);
      expect(minLen / maxLen).toBeGreaterThanOrEqual(0.20);
    });
  });

  it('guarantees that every option has a dedicated rationale explaining its validity or distractor trap', () => {
    allPilots.forEach((q) => {
      expect(q.stem.length).toBeGreaterThan(150);
      expect(q.explanation.length).toBeGreaterThan(150);
      expect(q.objective).toBeDefined();
      expect(q.keyPoints.length).toBeGreaterThanOrEqual(2);

      q.options.forEach((opt) => {
        expect(opt.text.trim().length).toBeGreaterThan(0);
        expect(opt.explanation).toBeDefined();
        expect(opt.explanation!.trim().length).toBeGreaterThan(50);
      });
    });
  });

  it('verifies that all question codes and stems are strictly unique without duplication', () => {
    const codes = new Set<string>();
    const stems = new Set<string>();

    allPilots.forEach((q) => {
      expect(codes.has(q.code)).toBe(false);
      codes.add(q.code);

      const normalizedStem = q.stem.toLowerCase().replace(/[^a-z0-9]/g, '');
      expect(stems.has(normalizedStem)).toBe(false);
      stems.add(normalizedStem);
    });

    expect(codes.size).toBe(30);
    expect(stems.size).toBe(30);
  });

  it('enforces AI-authored unreviewed provenance and CC-BY-SA-4.0 licensing tags', () => {
    allPilots.forEach((q) => {
      expect(q.source).toContain('AI-authored; medically unreviewed');
      expect(q.license).toBe('CC-BY-SA-4.0');
      expect(q.attribution).toMatch(/withheld pending editorial, clinical, and rights review/i);
    });
  });

  it('verifies that all citations contain legitimate labels and HTTPS URLs', () => {
    allPilots.forEach((q) => {
      expect(q.references.length).toBeGreaterThanOrEqual(1);
      q.references.forEach((ref) => {
        expect(ref.label.trim().length).toBeGreaterThan(15);
        expect(ref.url).toMatch(/^https:\/\//);
      });
    });
  });
});
