# Owner-authorized unreviewed practice

On 10 November 2026 the project owner explicitly requested importing the complete 3,000-question candidate corpus into production and selected availability in learner practice with AI-authored/medically-unreviewed labels.

`QuestionRevision.ownerTestRelease` records that operational permission separately from `QuestionReview`. It binds the owner's identity/authorization and timestamp to the immutable revision's exact content hash, explicitly records `clinicalReviewClaimed: false`, and is written only through an admin-only service with an audit event. It is not editorial, clinical, or independent legal review. The standard three-pillar review function remains unchanged.

Practice delivery and publication accept either ordinary full review or a valid owner test release for the latest revision. Rights/publication checks still apply. Rejected or revoked reviews cannot be bypassed by owner test permission; a new revision does not inherit it. Source content, citations, option IDs, attempts, AI authorship and medical-unreviewed disclosures remain intact. Owner-authorized test delivery does not grant export permission.

The additive migration only adds a nullable JSONB field to revision records. No existing question or learner row is rewritten by it. Unit/integration coverage verifies malformed/stale metadata rejection, admin-only recording, rights still required, browser-list snapshots, actual tutor-session answering with revision pinning, and revocation/new-version behavior.

Production imports use the existing create-only candidate persistence service with stable codes, manifest/content hashes, batch transactions, conflict checks, PostgreSQL read-back and resumable reports. The test-only CLI guard remains unchanged; production execution is separately authorized and explicitly targets the existing production database. Rejected/unresolved manifest-only drafts are excluded from the retained 3,000-question corpus. Similarity and unsupported-reference flags remain review work, not qualified approvals.
