# Content rights enforcement

2026-10-30. Implemented locally; not migrated or deployed to an existing study or production database. This is an operational permission-review model, not independent legal verification. Software remains MIT and every existing educational license string is preserved.

## Model and trust boundary

The additive migration adds UNVERIFIED (default), PENDING, VERIFIED, DISPUTED and REJECTED states to Question. Existing source/license/attribution/image fields provide provenance for the saved payload. New private fields record rightsholder, authorization-evidence reference, decision reason, reviewer identity/time and separate learner-delivery/export permissions. Verification requires submitted evidence for the current saved version and an admin decision. A database CHECK requires nonempty evidence/holder/decision and reviewer/time for VERIFIED rows. An explicit scope can be denied even when the other is approved; hosted-only permission never implies redistribution permission.

Imports and ordinary content edits do not accept verification flags. New imports remain UNVERIFIED regardless of CC license, provenance label, demo status or client-supplied rights fields. Edits invalidate both permissions and approval metadata; identical canonical retries preserve existing decisions and option IDs. Source/license/attribution and image changes require renewed review. Question-row locks serialize edits, evidence submission, status changes and decisions; an optimistic saved-version timestamp rejects stale reviews. Evidence submission also withdraws existing grants. Only an admin can reopen a DISPUTED item, verify, reject, dispute or publish. No code path automatically verifies the real bank.

An admin approval means that the instance's authorized human recorded a decision with evidence; software cannot establish that a contract is genuine, its signer owns the work, the grant is sufficient in every jurisdiction, or the text is medically accurate. Record an evidence reference or redacted summary, not a secret or confidential contract. The private fields stay out of content exports and learner payloads. Audit events record old/new states, scopes and saved version; private review fields and decisions remain available only in role-protected admin review.

## Administrative review

1. Save a draft or import for review. Open its admin question page; inspect saved wording, source, license, attribution, all assets and the claimed authority.
2. An editor/admin submits rightsholder and authorization-evidence reference. This moves the item to PENDING and withdraws delivery/export grants without altering publication status, text, licenses, options or attempts.
3. An admin evaluates the actual evidence and records a substantive reason. Explicitly select permitted delivery and/or export scopes, then verify. No checkbox is preselected. Publishing remains a separate audited action and requires delivery permission. Restoring delivery permission on a question whose prior PUBLISHED status was preserved can restore availability; it does not silently change the status.
4. If rights are challenged, an admin uses Dispute rights (or Reject rights). Both scopes close immediately for subsequent requests. Resolve privately; preserve the original payload and historical records. An admin must resubmit evidence and review the saved version before restoring rights.
5. Content changes on questions with saved attempts or question-linked cards, notes, reports or notebook clips are refused: create a new code/version and consider an audited availability transition instead. Reseeding is now create-only, preserving all existing licenses, review records and option IDs. None of these operations has been run on real content in this phase.

## Covered delivery/export pathways

| Path | Enforced behavior |
|---|---|
| Create/editor/bulk import/dry-run/create-only retry | No input verification grant; replacements invalidate review; whole-batch failures/dry runs roll back; attempts and study references prevent in-place replacement |
| setStatus / server action / Publish button | Requires current VERIFIED plus explicit learner-delivery permission, including CLI callers of the same service |
| Question list, full-text search, facets, pools and direct-ID session selection | PUBLISHED plus VERIFIED/delivery grant; old PUBLISHED rows are not grandfathered |
| Existing-session getView, options, explanations, saved highlights and notes | Rights checked even for existing/finished sessions; withheld error preserves the attempt; numeric score/history metadata remains available |
| AI tutor API | Rights checked before any provider receives question context; regression uses a synthetic mocked provider and verifies no second call after dispute |
| Notes/bookmarks/collections/report creation and card creation from questions | Shared published-question gate blocks new derivatives from unresolved content |
| Flashcard review and management | Question-linked content withholds when source delivery closes; detached user-authored cards remain usable; existing cards are retained |
| Notebook clips | New app-generated clips retain source question IDs; old “— Question code” markers are honored on read/export. Editing cannot remove recorded dependencies, including unresolved legacy code markers. Question/page row locks preserve provenance and both bodies across concurrent clips. Rights-held page bodies are withheld, not deleted. User-authored pages without app provenance remain private user data |
| User portability export | Withholds question-linked cards, notes, reports and sourced notebook bodies without export permission; leaves scores, identifiers and other user-owned metadata intact; returns a rights notice |
| Admin content export API/service, all status filters | Only VERIFIED/export-authorized rows; never serializes private evidence/reviewer fields; draft status alone cannot permit export |
| Planner and available-question analytics | Counts/plans only the deliverable bank; historical numeric responses are preserved |
| Source/binary/container/hosted content distribution | npm run release:check-content invokes a separate file/hash/scope evidence gate. Empty, stale, duplicate, disputed or incomplete approvals fail; no artifact is produced |
| Legacy local/LAN mode | Local personal use remains available. LAN requires current built-in-file hosted and redistribution evidence and refuses custom-bank synchronization; it has no equivalent multiuser review model and remains unsuitable for a public service |

Trusted administrators/database owners can inspect review content and could manually copy it; this model does not pretend to prevent a privileged person from taking screenshots, writing raw SQL, bypassing a release command or recalling bytes already downloaded. Freeform private prose cannot be reliably classified as copied content. The guarantees cover app-controlled content and provenance-linked derivatives, not forensic detection of arbitrary pasted material. There is no public notebook-sharing route. Existing source/Git history already contains material; runtime gating cannot withdraw that history.

## Release-file ledger and operational rollout

docs/audit/content-distribution-approvals.json intentionally contains no approvals. To propose a record, supply path, SHA-256, status, holder, evidence reference, reviewer, reviewedAt and explicit source/binary/container/hosted permission booleans. A maintainer must verify the underlying rights before recording VERIFIED. Duplicate path decisions fail closed; update the current decision rather than appending a contradictory grant. Changing a byte invalidates the recorded hash. This file is separate from database-instance decisions and currently blocks distribution of all governed bank/demo files, including legacy content. The CLI is a preflight, not a sandbox against arbitrary git/copy/npm-pack commands; release authority must use it.

Deploying this version requires separately authorized migration/release and a real review queue. Existing rows receive UNVERIFIED and are withheld without erasure; there is no automatic bulk approval or CC-based backfill. Do not deploy this behavioral change casually to the live site. Run migration/backup/rollout planning, review evidence and decide scope before making content available. No production changes, source-content removal, license transition or fabricated approval is part of Phase 2.

## Evidence

The synthetic upgrade test hashes every original column/row across 26 tables before/after migration and reports zero differences; 32 demo rows default UNVERIFIED. Dedicated service/API tests cover spoofed imports, role denial, stale decisions, independent scopes, dry-run/rollback, edits/retries, old sessions, derived exports, dispute/reinstatement, preserved scores/options and create-only reseeding. Browser tests exercise actual server actions and administrative rights review; exact final results are in PHASE_2_BLOCKER_RESOLUTION.md. Synthetic fixture attestations exist only in tests and disposable databases, never in real bank/source approvals.
