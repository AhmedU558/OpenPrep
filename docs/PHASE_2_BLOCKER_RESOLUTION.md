# Phase 2 blocker resolution

2026-10-30 (Asia/Karachi). **NOT READY for AGPL release.** Technical rights enforcement and evidence gathering are implemented locally. MIT remains active; ownership, real content approvals, private reporting and artifact compliance still need human decisions. No commit, push, release, production database operation or GitHub setting change occurred.

## Resolved technical gaps

- Added a non-destructive rights-evidence model, database evidence constraint and explicit delivery/export scopes. Imports cannot verify themselves; CC declarations/demo labels are not approvals.
- Added editor evidence submission and admin saved-version review/dispute/rejection UI/actions. Row locks and stale-version checks protect decisions; edits withdraw approvals. Existing attempts and study references require revised content under a new code.
- Gated publication, public bank/search/facets, direct practice IDs, old-session prose/highlights, AI context, linked study derivatives, admin content exports and portability exports. Numeric history and stored records remain preserved.
- Notebook provenance survives edits and concurrent appends; old source-code markers and unresolved dependencies are withheld. Seed is now create-only. Legacy local mode remains available; LAN publication/custom-bank sync is withheld unless the applicable file rights permit it.
- Added source/binary/container/hosted file/hash/scope preflight. All 58 governed content files are currently withheld because the real approval ledger is empty. The tool produces no distribution artifact. Trusted owners can bypass arbitrary shell/copy commands; this is a release policy gate, not DRM.
- Reviewed all 156 prior unresolved dependency paths and 11 copyleft/compound paths. All 167 artifacts passed lockfile integrity. Captured 63 artifact notices and 79 additional upstream root-license references (64 publisher commits, 15 weaker tag candidates). 25 text gaps and distribution obligations remain.
- Documented exact ownership approvals and private security/conduct setup/monitoring workflows. The read-only GitHub check still returns enabled=false for private reporting. No personal email, fabricated responder or legal approval is published.

## Preservation evidence

The upgrade test used a newly created volume-free PostgreSQL 17 container on loopback port 55432. It first installed the previous three migrations, seeded synthetic demos and created a synthetic learner, attempt, answer, score, card, note and notebook page using the prior application version. All original columns/rows across 26 tables were hashed before and after the additive Phase 2 migration: **zero differences**. All 32 original synthetic demo rows defaulted UNVERIFIED. The real study/production databases were never targets.

The migration adds fields, enum, CHECK and index; it drops no table/column or payload. Actual content files, license strings, existing migrations, root LICENSE and production configuration are unchanged. Tests additionally preserve historical item/option IDs and scores through dispute/reinstatement and reject in-place replacement after attempts or study references. See [migration evidence](audit/phase2-migration-preservation.json).

## Exact final validation

| Check | Result |
|---|---|
| npm run test:unit | PASS, 91/91, 8 files |
| npm test -- --reporter=json --outputFile=.release/phase2/vitest-results.json | PASS, 129/129, 0 failed |
| npm run test:e2e -- --reporter=list,json | PASS, 23/23; 0 skipped/unexpected/flaky; 68.5 seconds |
| npm run lint | Exit 0 |
| npm run typecheck | Exit 0 |
| npx prisma generate / npx prisma validate | Exit 0; client generated/schema valid |
| prisma migrate deploy on populated synthetic prior-schema DB | Exit 0; 26-table preservation comparison has no differences |
| npm run build -- --webpack | Exit 0; optimized compile/types and 29 static-generation entries complete |
| node legacy/test.js | Exit 0, prints ok |
| actionlint 1.7.12 on all three workflows | Exit 0; shellcheck/pyflakes not run |
| YAML parsing / least-privilege and immutable-action assertions | PASS, all five GitHub YAML files |
| node scripts/check-content-distribution.mjs | Expected exit 1: 58/58 governed files withheld; no current approvals |
| python scripts/dependency-evidence.py | Exit 0; all 167 targeted artifact identities/integrities verified; no installation or binary execution |
| Policy consistency | Tests protect active MIT in root/manifests, exact official AGPL reference hash and pending private channel |
| Git whitespace and preservation checks | Exit 0; existing content payloads, prior migrations, root LICENSE and deployment config preserved |

No dependency installation was necessary in Phase 2; no dependency manifest versions/lockfile entries changed. Phase 1's clean npm-ci result remains historical evidence, not a new fresh Linux install claim. CI files are unchanged proposals; their new unit/integration/browser fixtures are exercised locally. No hosted workflow/CodeQL/SARIF upload, Linux target build, container compliance test, production smoke/load test, clinician review or legal approval was performed.

Earlier issues were investigated: a new test incorrectly assumed a target was on page one; it now uses a meaningful prose filter. The initial browser test still expected publication without rights review; it was updated to test refusal, evidence submission, scoped approval, publication and dispute withdrawal. One overlapping integration/browser run caused a synthetic seed conflict; it was excluded and subsequent final runs are sequential. A truncated dependency download failed integrity and was replaced only after a fresh download matched the unchanged lock. No test expectation was weakened to permit unresolved content. Existing pg concurrent-query and NO_COLOR/FORCE_COLOR warnings remain.

## Changed files and evidence

[Complete Phase 2 touched/created file manifest](audit/phase2-file-changes.md) and [JSON](audit/phase2-file-changes.json) distinguish this work from the pre-existing uncommitted Phase 1 changes. [Validation summary](audit/phase2-validation.json), [dependency review table](audit/dependency-compliance-evidence.md), [receipts](audit/dependency-compliance-evidence.json), 40 deduplicated notice texts and [local server trace](audit/phase2-distribution-trace.json) are auditable supporting outputs. Downloaded packages/builds/test traces remain ignored scratch.

Required documents: [Ownership approval checklist](OWNERSHIP_APPROVAL_CHECKLIST.md), [Content rights enforcement](CONTENT_RIGHTS_ENFORCEMENT.md), [Dependency compliance review](DEPENDENCY_COMPLIANCE_REVIEW.md), and updated [readiness](OPEN_SOURCE_READINESS.md). SECURITY.md and CODE_OF_CONDUCT.md retain pending contacts and now include owner-controlled setup/verification/response procedures.

## Remaining decisions and release blockers

1. Establish actual software/rightsholder identities and contributor authority; obtain the precise prospective AGPL/copyright approvals in the checklist. No ownership is assigned to Ahmed Umer/Aqvion Labs and MIT is not replaced.
2. Review actual content evidence, including assets and use scopes, in the instance admin workflow. Populate source-file approvals only after verified authority and exact hashes. Test-only synthetic attestations never approve the real bank. Do not deploy this migration expecting unreviewed legacy rows to remain publicly available.
3. Configure and verify a monitored private security channel and approved confidential conduct/recusal/appeal process. GitHub reporting remains disabled; enabling and testing it require owner authorization. Public issues are not an alternative private channel.
4. Resolve 25 missing text-evidence entries, exact native source/build and 30 bundled component obligations, LGPL source/relinking/replacement arrangements, MPL file/source notices, any actual EPL secondary-license/combination decision, browser notices and the eventual target artifact SBOM. No dependency replacement is authorized or performed.
5. Approve any future push/settings changes and run hosted CI/CodeQL/dependency review. Separately plan/approve production migrations, rights review and deployment. These validated local controls do not remediate the unchanged production deployment.

The legal and operational decisions above remain stopped at their approval boundaries. Technical tests demonstrate the gates; they do not manufacture the missing permissions or declare the project legally/clinically ready.


Current-file credential-pattern scan: only the same three synthetic CI/unit fixture findings as Phase 1; no newly detected credential pattern. Coverage and dispositions are recorded in audit/phase2-secret-scan.json. This is not a forensic clean-secret guarantee.
