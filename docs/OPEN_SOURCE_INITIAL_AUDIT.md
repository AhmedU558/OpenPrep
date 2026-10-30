# Open-source initial audit

Date: 2026-10-30 (Asia/Karachi). Baseline: `f5c4aef26e5b59965660236665494e02084c96d2`, clean working tree. This audit precedes implementation. No production/existing user-database connection, reset or seed, deployment, push, release or repository-setting mutation is authorized by this work. Destructive test setup is permitted only on a newly provisioned disposable local database.

## Architecture and inspected scope

OpenPrep is one TypeScript/Next.js App Router application, React, Tailwind, npm with a committed v3 lockfile. PostgreSQL uses Prisma with the pg adapter and three checked-in migrations. Better Auth provides password, guest linking, reset and database sessions. Server actions call user/role checks; learner services scope queries by user. API routes expose auth, an optional AI tutor, user data/progress/planner exports and editor-only content export. The AI adapter supports Ollama or an operator-configured OpenAI-compatible service; no AI call is needed for core practice.

`src/lib/exam` implements server timing, transactions, item state and scoring; pages support tutor/timed and multiblock exams. Notebook, flashcards, planner and analytics use persisted user records. Admin workflows provide taxonomy, validated/dry-run JSON import, status transitions, reports and audit records. The question bank contains 200 first-batch items and 800 expansion specifications; tracked generated JSON contains 985 accepted materializations. Seeds combine 30 legacy and two multiple-answer demos. Historical database reports describe 1,028 stored items; this audit does not query a live database or treat those reports as current state.

Inspected tracked-file inventory, both package manifests, package-lock, README, LICENSE, SECURITY, CONTRIBUTING, environment example, ignore rules, Prisma schema/migrations/seed, content authoring/materialization/reporting, server routes/actions/services, browser components, test setup and suites, Docker, Next/Vercel configs, and all five commits reachable from local refs. The offline audit additionally scans all 225 distinct historical blobs for selected credential patterns. No `.github` workflows or templates exist at baseline. Vitest covers unit/integration logic; Playwright covers auth, practice, bank/admin/security/responsive flows; legacy has a Node assert suite.

## License, authorship and content risks

Root LICENSE and package metadata declare MIT; demo prose is separately declared CC BY-SA 4.0. Existing copyright is `Copyright (c) 2026 OpenPrep contributors`. Git author names include AhmedMA558 and Ahmed Umer; identity/name similarity and repository administration do not prove employment ownership, rights assignment or every contributor's permission. No contributor agreement, chain of title or signed rights ledger was found. No external copied-code attribution was identified in this review; this is not a forensic originality determination.

**Owner decision during this audit:** software ownership/contributor permissions need review. Therefore do not replace LICENSE, change the package license to AGPL, or assign copyright to Ahmed Umer/Aqvion Labs. Stage the official AGPL text as a reference only. Retain existing MIT notices; prior MIT grants are not revoked by a prospective transition. The owner confirmed the recorded educational-content redistribution rights and offered supporting evidence. Record that attestation separately from independent verification; no provenance documents have yet been supplied.

Question fields record source/license/attribution and references, but strings alone cannot establish rights. AI authorship and synthetic cases are asserted in existing content metadata, not a medical or copyright clearance. References to textbooks do not license their text/assets. No images occur in tracked generated bank JSON. Source/seed images and private imports still require per-asset review. Existing REVIEW/ARCHIVED statuses control practice availability, not all editor exports; there is no rights-verification gate. Do not publish additional content with unresolved rights.

## Dependency inventory and security findings

Initial lockfile: 739 non-root package paths. Runtime and tooling include MIT/Apache/BSD/ISC plus LGPL-3.0-or-later (sharp/libvips), MPL-2.0 (axe/lightningcss), EPL-2.0 (elkjs via Prisma Studio), BlueOak, CC-BY data and compound licenses. `seq-queue@0.0.5` has no package license identifier but its installed LICENSE contains an MIT grant. Platform-absent package texts are not locally available. The architecture's blanket permissive-license statement is inaccurate. Preserve individual licenses and review actual distributed bundles; no dependency is removed automatically.

`npm audit` initially reports 5 affected package entries: 4 high (`prisma`, `@prisma/config`, `deepmerge-ts`, `mysql2`) and 1 moderate (`nodemailer`). These are advisory classifications, not five demonstrated app exploits. Patch versions are available; keep the Prisma client/adapter/CLI aligned and validate after updating.

The credential-pattern scan found no matches in the five reachable commits or tracked baseline files. This does not prove absence of secrets in unreachable objects, remote-only branches, ignored files, artifacts or unrecognized formats. Local `.env*`, preservation hashes, deployment scratch and user data are ignored. Ignore rules still need key/dump/log/build/temp coverage. Source review finds in-memory auth/AI limits, permissive inline scripts in CSP, no rights gate for arbitrary imports/publication/export, mutable options on admin edits/reseed, and weak string-only test database isolation. The legacy LAN server has no account isolation; do not expose it publicly. See the final security audit for risk treatment and scope limits.

## Remote read-only snapshot

GitHub API confirms public `AhmedU558/OpenPrep`, default `main`; secret scanning and push protection enabled. Dependabot security updates disabled, private vulnerability reporting disabled, main branch protection absent (404). Other feature states were not returned and remain unknown. No remote settings are changed. Remote public access already exists; local work cannot quarantine content already published in Git or production without a separately authorized owner action.

## Implementation plan and boundaries

1. Complete evidence inventories and risk register before licensing changes (this document).
2. Preserve MIT and ownership notices; add official unmodified AGPL reference, transition decision checklist, NOTICE and third-party texts/inventory with explicit unresolved status.
3. Add separate content/trademark policies and governance/DCO/Contributor Covenant guidance. Record a missing confidential community contact rather than inventing one.
4. Add least-privilege, SHA-pinned CI, dependency review, CodeQL and Dependabot configuration plus safe issue/PR templates. Settings remain owner recommendations.
5. Expand ignore rules, correct installation/security claims, patch advisory-affected existing dependencies, and strengthen test-database isolation before database tests. No application feature or content removal.
6. Validate lock installation in an isolated copy, lint/types/unit/legacy/build and workflow structure. Run DB/integration/E2E only against an independently provisioned disposable local database; otherwise record the blocker accurately.
7. Produce readiness, exact test evidence and created/modified/unchanged manifests. No commit/push/release/deployment. AGPL activation, copyright attribution, unproven-content distribution and remote settings remain blocked pending owner decisions.
