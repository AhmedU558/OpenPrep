# Phase 3 readiness and test record

2026-10-30. Local technical work is complete for the evidenced scope. Public release and any AGPL transition remain BLOCKED. MIT and existing ownership notices remain active and unchanged. No dependency was deleted/replaced, content published, existing database connected, migration deployed to an existing environment, commit created, push made, setting changed or deployment performed.

## Exact validation results

| Check | Result |
|---|---|
| Existing unit suite | PASS: 91 tests / 8 files, exit 0 |
| Existing complete Vitest suite | PASS: 129 tests / 14 files, exit 0 |
| Existing browser suite | PASS: 23 tests, exit 0 (desktop plus mobile responsive/a11y cases) |
| New compliance fixture suite | PASS: 16 tests, exit 0; missing grant/hash/notice/source/permission and conflicting decisions fail closed |
| Lint / TypeScript / legacy checks | PASS: each exit 0 |
| Production webpack build | PASS: exit 0, opt-in compiler evidence captured; local candidate only |
| Workflow syntax | PASS: actionlint 1.7.12, exit 0 after adding compliance fixture tests |
| Clean installation | PASS: new .release/phase3/clean-install-884d4a35 copy; npm ci exit 0, 607 installed / 608 audited, zero reported vulnerabilities; Prisma generate exit 0 with unused placeholder target |
| npm audit | PASS: exit 0, 737 lock dependencies, zero known advisories at execution |
| npm audit signatures | PASS: exit 0, invalid=[] and missing=[] for installed packages |
| Individual license investigation | 25 investigated; 5 exact grant captures + 11 signed-provenance source grant captures; 9 sufficient-text gaps remain |
| Publisher attestations | PASS: 12 checked / 12 verified / 0 failed; better-auth/utils still lacks grant text |
| Native evidence retrieval | PASS for retrieval scope: 26 platform packages, 30 native file hashes, 30 reported components with source/archive and notice-candidate bytes; compliance NOT established |
| MPL/EPL installed equality | 28 paths reviewed; 8 installed byte matches, 20 absent-platform paths; zero modified installed files detected |
| SBOM schema validation | PASS: all five inventories against official captured CycloneDX 1.6 schema, exit 0 |
| Release preflight | EXPECTED FAIL: exit 1, all five scopes BLOCKED; machine report enumerates blockers |
| Content distribution gate | EXPECTED FAIL: 58 unapproved repository content paths; no release artifact produced |

Runtime: Node 24.22.1, npm 11.19.1, Python 3.12.10, audit-only pre-existing jsonschema 4.25.1. The clean install used the same final dependency versions/lockfile; later changes concern audit tooling/documents and script aliases. It generated the Prisma client without connecting to a database. ESLint 10/React-plugin peer-range warnings remain; no peer dependency was changed. pg emits existing concurrency deprecation warnings. Initial sandbox-only test startup, build-directory creation and Python temporary-fixture attempts failed with access errors; authorized reruns outside the sandbox passed. No test expectation was weakened or existing test removed. Browser reset email now accepts TEST_MAILPIT_URL, retaining the old default for CI, to use isolated mail in this run.

## Disposable database identity and migrations

Only newly created container `openprep-phase3-20261030-884d4a35` was used, id `92f1eee6fe086af25ecb47ac9bd4493699e218b2dc6cce549621fd28c8fecff5`. Database: `openprep_phase3_20261030_884d4a35_test`; connection target: `postgresql://phase3:<synthetic credential>@127.0.0.1:55437/openprep_phase3_20261030_884d4a35_test`.

Before migrations, inspection confirmed the new container name/id and unique disposable label, 127.0.0.1:55437 binding, no volume mounts, tmpfs /var/lib/postgresql/data, and SQL current_database exactly matching the new name with zero public tables. Image digest and inspection evidence are in audit/phase3-test-database.json. No existing volume or database was reused. Primary DATABASE_URL for suites/builds pointed to an unused 127.0.0.1:1 placeholder; TEST_DATABASE_URL pointed only to the verified new database. Test setup's migration/truncation/fixture approval paths operated only there.

Executed successfully, then confirmed finished in that database:

1. 20261028211249_init
2. 20261028211741_session_position_since
3. 20261028212245_guest_accounts
4. 20261030100000_content_rights

Synthetic test fixtures exercised rights review, import/edit/publication/export, exams, historical attempts and account flows. No real learner data was copied. Browser setup creates synthetic/demo test content and test-only attestations; these do not establish release rights for repository content. Repeated suite setup found the four migrations already applied. Separate new Mailpit container `openprep-phase3-20261030-884d4a35-mail`, id `3d21233d9e1e262ab3f9f20a653c44e5e19c2285d487a2d8291be9555a195339`, bound SMTP/API to 127.0.0.1:11037 / :18037 and used tmpfs. Both new containers were removed; a label-filtered check found neither remained. No persisted test volume existed.

A supplementary read-only post-test count used the unmapped table name "Question" and failed. No question-count result is asserted. The migration identities and 21 synthetic user records were observed before cleanup. This diagnostic failure did not change data or affect the passing suites.

## Preservation and residual uncertainty

All 65 protected paths from the 320-path Phase 3 baseline matched SHA-256: content, seed data, all original migration files, LICENSE, package-lock.json and legacy questions. Existing application source was not changed in Phase 3. No existing environment was connected or queried to create an after-the-fact preservation fingerprint; its isolation follows from the new target/volume verification and explicit environment overrides. Validation is local evidence, not a claim about deployed production, physical devices, load testing or a complete penetration test.

## Release blockers and required decisions

- Resolve the nine version-specific grant gaps with rights-holder evidence; retain the captured grants/provenance for the other 16.
- Complete ownership/contributor authorization and the exact prospective AGPL approvals in OWNERSHIP_APPROVAL_CHECKLIST.md. No license transition is authorized by this work.
- Supply actual content authorization/provenance evidence and reviewed per-scope decisions. All 58 source content paths remain withheld from distribution; a CC BY-SA declaration/test fixture alone is insufficient.
- Establish actual browser/vendor/target-platform/native/container composition, delivered notices and matching covered source. Demonstrate native source/build/patch correspondence and replacement/relinking, including Windows/Wasm. Resolve MPL/EPL route/combined-work decisions without assuming secondary clauses suffice.
- Populate only supported, maintainer-reviewed distribution/component/source/notice records for the exact artifact; do not fabricate approvals or treat upstream links as delivered source.
- Configure and verify an authorized monitored private security and conduct channel. Current policy remains pending/disabled and forbids public vulnerability reports. No contact or setting was invented/enabled.
- Run hosted CI/CodeQL/dependency-review after a separately authorized push; no hosted success is claimed. Obtain actual production-platform/container evidence before a release claim.

Machine validation: audit/phase3-validation.json. Preflight: audit/phase3-compliance-report.json. Changed files: audit/phase3-file-changes.md. Detailed evidence: PHASE_3_DEPENDENCY_RESOLUTION.md and RELEASE_ARTIFACT_COMPLIANCE.md.
