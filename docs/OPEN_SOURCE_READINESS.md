# Open-source readiness report

Updated 2026-10-30 (Asia/Karachi), after Phase 2. **NOT READY for the proposed AGPL-3.0 release. MIT remains active.** No production deployment/migration, GitHub settings change, commit, push or release is authorized or performed.

Phase 2 resolves technical enforcement gaps while leaving unsupported legal/operational decisions blocked. Read the [complete Phase 2 handoff](PHASE_2_BLOCKER_RESOLUTION.md), [rights model/pathway guarantees](CONTENT_RIGHTS_ENFORCEMENT.md), [ownership approvals](OWNERSHIP_APPROVAL_CHECKLIST.md) and [distribution-specific dependency review](DEPENDENCY_COMPLIANCE_REVIEW.md). Earlier Phase 1 test/evidence files remain historical records; the status below supersedes the former Phase 1 checklist.

| Area | Current classification | Evidence / required next step |
|---|---|---|
| Active MIT and official AGPL reference | PASS | Root LICENSE and manifest license declarations preserved; reference hash protected by policy test |
| Activate AGPL / assign copyright | FAIL — approval blocked | Owner said ownership/contributor permissions need review; checklist identifies both recorded author identities and exact required approvals |
| Contributor/source ownership | NEEDS REVIEW | Git author/committer identities and AI-assisted work are not chain-of-title proof |
| Rights evidence/admin review model | PASS locally | Holder/evidence, saved-version review, five states, separate scopes, audit and database constraint |
| Unknown-rights publication/public bank delivery | PASS locally | Missing/unverified/disputed/rejected evidence fails closed, including pre-existing PUBLISHED rows and direct IDs |
| Unauthorized content exports | PASS locally | Service/API status filters and provenance-linked portability exports enforce explicit export scope; private evidence excluded |
| Historical/derived content protection | PASS locally | Old-session prose and linked cards/clips withheld after dispute; scores/records retained; study references prevent in-place source replacement |
| Source/binary/container/hosted content preflight | PASS as a technical gate | 58 governed files currently blocked; empty/stale/incomplete/duplicate decisions fail; no artifact produced |
| Actual content permission evidence | NEEDS REVIEW / release blocked | Owner attestation recorded, supporting real evidence not supplied; no real item/file automatically verified |
| Data/migration preservation | PASS in synthetic upgrade test | Every original column/row across 26 tables unchanged; 32 synthetic demos default UNVERIFIED; no existing user/production DB accessed |
| Medical review / difficulty calibration | NEEDS REVIEW | Existing unreviewed labels/quality holds remain; no clinician approval inferred |
| Dependency inventory | PASS | All 737 baseline lockfile paths retained |
| Previously unresolved dependency evidence review | PASS for investigation scope | All 156 prior unresolved plus 11 priority entries reviewed, 167 integrity checks pass; 63 artifact texts plus 79 upstream references captured |
| Actual dependency distribution compliance | NEEDS REVIEW / release blocked | Phase 3: 9 text gaps remain; 16 grants captured, draft artifact inventories validate; native source/relinking/notices and actual target/container composition remain unresolved |
| Trademark policy | PASS for documented boundary | Actual holder/registration unverified; no automatic mark grant or new software restriction |
| Private security reporting | FAIL — operational release blocker | Read-only API rechecked enabled=false; no authorized monitored contact; setup/testing instructions prepared, not executed |
| Confidential conduct enforcement | FAIL — operational release blocker | Maintainer approval, channel, monitoring, recusal/appeals and verified responders pending |
| Contributor/DCO/governance guidance | PASS as local documentation | DCO does not assign copyright; no fictitious maintainer/approver or remote enforcement created |
| Local validation | PASS for executed checks | Exact Phase 2 outcomes and earlier investigated failures are in PHASE_2_BLOCKER_RESOLUTION; final machine evidence in audit/phase2-validation.json |
| CI workflow structure and policy consistency | PASS locally | actionlint/YAML/immutable actions/least privilege; MIT/contact/content policy tests |
| Hosted CI/CodeQL/dependency review | NEEDS REVIEW | Changes remain unpushed; no hosted execution or upload validated |
| Existing privacy/security limits | NEEDS REVIEW | Phase 1 residual rate-limit/logging/CSRF/CSP/privacy findings remain; tests are not a full penetration/compliance assessment |
| Deployment and target-platform validation | NOT APPLICABLE to this authorized task | Production unchanged; no target Linux/container/physical-device validation or operational rollout performed |
| Proposed AGPL release overall | FAIL | Technical gates pass; actual ownership/content permissions, private reporting and distribution obligations remain blocked |

The additive migration intentionally withholds existing content until real rights review; preserving rows is distinct from allowing unverified content to remain available. Test fixtures use synthetic attestations only inside disposable databases. An admin's recorded decision is an operational attestation, not proof software can independently supply. Trusted owners can inspect/copy raw files and bypass shell preflights; no DRM or recall of already downloaded bytes is claimed.

The full created/modified/unchanged baseline handoff from Phase 1 remains at [audit/file-changes.md](audit/file-changes.md). Phase 2's touched/created list is separate at [audit/phase2-file-changes.md](audit/phase2-file-changes.md). See [initial audit](OPEN_SOURCE_INITIAL_AUDIT.md), [licensing audit](LICENSING_AUDIT.md), [content licensing policy](CONTENT_LICENSING_POLICY.md), [security audit](SECURITY_AUDIT.md), [GitHub recommendations](GITHUB_CONFIGURATION.md) and [third-party notices](../THIRD_PARTY_NOTICES.md) for supporting context.

Required owner decisions are enumerated in PHASE_2_BLOCKER_RESOLUTION and OWNERSHIP_APPROVAL_CHECKLIST. No document authorizes a future license transition, publication, settings change or deployment automatically.


## Phase 3 evidence update — 2026-10-30

This update supersedes Phase 2 counts for dependency text gaps and artifact inventory preparation. All 25 gaps were individually investigated: 5 exact-version grants and 11 signed-provenance source grants are captured; 9 remain blocked. Twelve publisher attestations verified. Native retrieval captured 30 source/notice candidates, 26 platform package identities and 30 native file hashes; build/source/relinking compliance remains unverified. All 28 MPL/EPL lock paths were reviewed; eight installed paths matched their published bytes, and 20 platform paths were absent locally. No automatic secondary-license or project-wide compatibility finding was made.

Five CycloneDX 1.6 inventories and fail-closed preflight tooling are prepared. Their incomplete vendor/native/target/container boundaries are explicit; the preflight blocks every distribution scope. Passing schema validation is not distribution clearance. Local results: 91 unit, 129 full Vitest, 23 browser and 16 compliance tests passed, plus lint/typecheck/legacy/build/actionlint, clean installation and zero current npm advisories. Hosted checks remain untested. Tests used only a newly verified disposable loopback database and separate disposable mail; both were removed. Sixty-five protected content/license/seed/migration/lock paths were unchanged. No production or existing learner database was connected.

See [Phase 3 readiness](PHASE_3_READINESS.md), [dependency resolution](PHASE_3_DEPENDENCY_RESOLUTION.md), [artifact boundaries and reproduction](RELEASE_ARTIFACT_COMPLIANCE.md), [machine validation](audit/phase3-validation.json) and [changes](audit/phase3-file-changes.md). MIT remains active. Ownership, content evidence, private security/conduct reporting, exact distribution permissions and artifact-specific dependency obligations remain release blockers; no commit, push, setting change, publication, migration to an existing environment or deployment occurred.
