import { describe, expect, it } from 'vitest';
import { isRevisionAvailableForPractice, isRevisionFullyApproved } from '@/lib/question-revision';

const hash = 'a'.repeat(64);
const release = { contentHash: hash, authorizedBy: 'Project owner', authorizedAt: '2026-11-10T00:00:00.000Z', authorization: 'Explicit authorization for learner practice with unreviewed labels.', clinicalReviewClaimed: false };

describe('version-bound owner test permission', () => {
  it('allows test practice without claiming any qualified review', () => {
    expect(isRevisionAvailableForPractice({ contentHash: hash, ownerTestRelease: release, reviews: [] })).toBe(true);
    expect(isRevisionFullyApproved([]).approved).toBe(false);
  });
  it('fails closed for missing, stale or forged clinical-approval metadata', () => {
    for (const value of [null, {}, { ...release, contentHash: 'b'.repeat(64) }, { ...release, clinicalReviewClaimed: true }, { ...release, authorization: '' }]) {
      expect(isRevisionAvailableForPractice({ contentHash: hash, ownerTestRelease: value, reviews: [] })).toBe(false);
    }
  });
  it.each(['REJECTED', 'REVOKED'] as const)('cannot bypass a %s review', decision => {
    expect(isRevisionAvailableForPractice({ contentHash: hash, ownerTestRelease: release, reviews: [{ reviewKind: 'CLINICAL', decision }] })).toBe(false);
  });
});
