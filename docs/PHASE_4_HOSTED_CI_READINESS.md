# Phase 4 hosted CI readiness

2026-10-30. Local workflow syntax passes; Phase 4 was not pushed or run on GitHub. Prior PR #2 actually ran on eb3947ef6b9fc72320e92ea13c70dec380bb480d with green validate, analyze, dependency audit/review and CodeQL results. It was separately authorized and merged before Phase 4 at 87a7d339dc4eb269aebbaa3388a38eb348c9d913. Historical success is not success for this uncommitted diff; previous reports remain untouched snapshots.

## Review findings

- CI uses contents:read, PR/main-push triggers, pinned checkout/setup-node, persist-credentials=false, npm ci and full type/unit/integration/compliance/legacy/build/browser checks. PostgreSQL/Mailpit are fresh runner services bound to loopback; no production secrets/URLs are supplied. Controlled fork behavior still needs hosted verification; there is no privileged pull_request_target path.
- CodeQL uses pinned official actions and security-events write only for its analysis job. Earlier hosted analysis passed; current changes were not uploaded. Fork upload/token behavior remains a hosted-only check.
- Mandatory full-lockfile npm audit at moderate severity remains active. Disabled Dependency Graph makes GitHub delta review unavailable; explicit HTTP 403/404 selects the documented audit-only route, while network/server probe failures remain errors. Audit success is not enabled/successful delta review. No setting was changed.
- Classic protection API returned 404 Branch not protected; applicable branch-rules API returned []. No enforced main protection was established. Effective organization/repository rules, required contexts, reviewers and admin bypass need re-verification/configuration under separate authorization.
- Existing ordinary CI has no publishing step and is not a complete release gate/SBOM archive. Prior hosted integration/browser results are historical; unchanged application code does not require existing-database access in Phase 4.

## New non-publishing readiness workflow

release-readiness.yml is manual/reusable with only contents:read. It contains no production secrets/environment, publish/package/release/deploy permissions or migration command. It installs locked Node dependencies, pins setup-python 3.12 and audit-only jsonschema 4.25.1, generates Prisma without connecting, tests and builds using an unused loopback placeholder.

It creates five isolated inventories, validates official CycloneDX 1.6 schemas and requires preflight with the nine-package grant evidence. No continue-on-error or success-forcing exit wrapper exists. Missing/invalid bound grant text, unresolved content, changed hashes, missing notices/source, incomplete composition, ownership/reporting prerequisites and distribution permissions remain blockers. Expected current result: exit 1, RELEASE BLOCKED.

The always-run artifact upload retains only machine-report/SBOM metadata for seven days, not questions, contracts, source/native archives, .env files or screenshots. Missing-report warnings cannot turn a failed gate job into success. Setup-python v5.6.0 and upload-artifact v4.6.2 commit pins were verified against official tag refs. No actual artifact was uploaded.

A future publish/promote job must depend on this successful exact-SHA/artifact gate, contain no always/continue-on-error bypass and require separately configured protected-environment review. No publishing workflow exists here. A privileged owner can write a new bypass or copy files manually; enforced branch/environment controls remain human/account requirements, not a claimed script guarantee.

## Future separately authorized hosted verification

1. Review exact diff/evidence and authorize a push. Keep MIT and the Vercel deployment hold; do not approve unresolved rights implicitly.
2. Observe actual CI/CodeQL/audit counts and controlled fork permissions on the exact SHA; verify synthetic-only database services and logs without secrets.
3. Authorize manual readiness dispatch; verify real generated hashes and metadata-only retention. Missing evidence must leave the gate failed and no publication started.
4. Exercise negative missing/stale-grant, notice, source, content, ownership/reporting and changed-hash fixtures; synthetic positive data grants no real permission.
5. Obtain separate approval for required contexts/reviewer/environment/Dependency Graph/reporting settings, then verify effective protection and bypass rules.
6. Before release, inspect actual target/container layers, complete source/relinking delivery, collect supported human decisions, regenerate actual artifact inventories and separately authorize publication/deployment/migration.

No Phase 4 push, dispatch, account-setting change, release or deployment occurred.
