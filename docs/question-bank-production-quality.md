# Production test-bank content quality — 10 November 2026

All 3,000 retained candidates were imported and made available for learner practice under explicit owner test-release authorization. They remain **AI-authored and medically unreviewed**. There are zero qualified clinical review records for these imports. Owner permission is stored separately on each immutable version and is not independent medical or legal verification.

| Check or limitation | Actual result |
|---|---:|
| New records imported, read back and practice eligible | 3,000 |
| New questions per Step 1 / Step 2 CK / Step 3 | 1,000 / 1,000 / 1,000 |
| Provisional difficulty 4 / 5 | 1313 / 1687 |
| Exact normalized duplicate stems | 0 |
| Items flagged by local semantic candidate screening | 1271 |
| Related-content pairs requiring review | 2283 |
| Rejected / unresolved manifest drafts excluded before import | 24 / 13 |
| Declared clinical-concern entries retained in the review queue | 0 |
| Qualified clinical reviews recorded | 0 |

## Unsupported claims and incomplete references

Every saved item passed structural checks for one answer key, option rationales, objectives, reference fields and provenance; every persisted content payload matched its input on read-back. These are not checks of medical truth or source support. No fresh independent source retrieval, claim-by-claim verification, clinical key validation, distractor validation or US-guideline applicability review was performed during this import. Treat unsupported or incompletely mapped claims as unverified rather than implying the presence of a reference proves them.

The existing batch-41 claim-mapping ledger reports 36 supported and 3 partially supported decisive claims. Its distractor exclusions include 21 unsupported, 14 partially supported and 4 supported records. Those source-authoring assessments are not clinician approvals and do not establish the remainder of each item's explanation. The original [claim-mapping ledger](../content/candidates/batch41-claim-mapping-ledger.json) is retained at content/candidates/batch41-claim-mapping-ledger.json.

## Possible ambiguity and repetition

The [semantic review queue](imports/2026-11-10-semantic-review.json) contains all flagged code pairs, scores and declared clinical concerns. The local synonym-aware TF-IDF screen retrieves related material; a flag is not a confirmed duplicate, and no claim of exhaustive clinical-semantic deduplication is made. Review repeated objectives, close competing diagnoses, best-next-step ambiguity, missing context, absolute management claims and whether the explanation actually excludes each distractor. None of these pending concerns was entered as a passing medical review. The owner explicitly selected availability as unreviewed practice tests.

## Difficulty and qualified review

Difficulty remains provisional under the authoring rubric, with both level 4 and level 5 content. There is no empirical learner calibration, discrimination analysis, board equivalence or validated score prediction. Qualified reviewers should inspect each saved revision, its answer, every option rationale, learning objective and current supporting sources. Corrections require a new immutable revision and fresh permission; rejected/revoked decisions cannot be bypassed by owner test permission.

The [import report](imports/2026-11-10-production-test-import.json) separates generated input, imported, skipped, rejected, quarantined, read-back and available counts. Original question payloads and option IDs were preserved; no production learner attempt was created for verification. Real tutor-session answering and revision pinning were tested on disposable infrastructure.
