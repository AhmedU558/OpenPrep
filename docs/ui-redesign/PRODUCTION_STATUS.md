# Production deployment — 1 November 2026

**READY and promoted:** [OpenPrep](https://openprep-amber.vercel.app).

- Deployment: `dpl_CWPo2ND7g6pN9ZQtecsWYMxoS7vB`.
- Project/team: `openprep` / `ahmedu558`.
- Framework: Next.js. Runtime: Node 24. Functions: Singapore (`sin1`).
- Build: approximately 2 minutes. Staged as production without assigning the live domain, checked, then promoted without rebuilding. Vercel's alias API confirmed that `openprep-amber.vercel.app` points to this deployment.
- Rollback candidate: prior production `dpl_2gkM2u1E55jwCV9tKTBWH12p2U4M`.

## Exact source and scope

The isolated release uses the verified previously deployed source, `f5c4aef26e5b59965660236665494e02084c96d2`, plus five approved presentation files. All 222 baseline files were compared before deployment. Two additional deployment-manifest edits pin the runtime engine to `24.x`; parsed package/lock objects match the previous deployment in every other field, including all dependency versions.

The first staged build selected Node 26 because the historical engine range was open-ended. That build was canceled, and the final candidate was rebuilt with Node 24. The workspace's package files were not changed.

[Production source manifest](production-source-manifest.json) records the five UI hashes and runtime adjustment. [Upload verification](upload-verification.json) confirms 221 uploaded files, zero hash mismatches, zero unexpected files, no unfinished Step 3 source and no newer content-rights migration. The baseline `.gitignore` is not uploaded by the CLI.

No production database migration, seed, reset, import, approval edit or direct database query ran. The build command generated the Prisma client and built Next.js; it did not migrate the database. No Git commit or push was made. Unrelated local compliance and Step 3 changes remain local. This release does not introduce the later, not-yet-deployed rights-hardening work.

## Verification and limits

- [Staged read-only browser checks](stage-smoke.json): passed.
- [Live read-only browser checks](production-smoke.json): passed.
- Both checks verified public page HTTP 200, loaded scripts, approved sidebar/hero/orbit CSS, working login redirects for dashboard/create/questions, and no horizontal overflow at 390px. Both observed zero page errors and zero HTTP 5xx responses.
- Error/fatal runtime-log query for this deployment, covering 12:59–13:09 UTC, returned no matching logs. This is a short observation window, not continuous monitoring.
- Earlier local validation passed type checking, changed-file lint, Webpack builds and eight desktop/mobile browser checks, with two final redesign rechecks. Those local tests covered authenticated UI and dark theme.
- Authenticated production practice was **not tested**. Automatic approval review rejected a proposed guest-session/cookie-transfer test because it could write production study records. That rejected script did not run. It was replaced with clean-browser, read-only checks; no login cookie was transferred by those checks.
- No full database preservation hash, physical-device test, print-preview check or load test was performed for this release.

## Explicit release exception

The user explicitly selected: **Authorize the UI-only release exception**, permitting this release despite incomplete internal release review, with gaps recorded and unfinished question-bank work excluded.

The earlier workspace-wide hosted-content check remains **65 checked, 0 allowed, 65 withheld**. It measures the current development workspace, not the isolated baseline artifact. No missing content right, dependency grant, ownership review, artifact notice or reporting prerequisite was marked verified. The approval ledgers and existing release-check implementations were not changed. The exception authorizes this deployment; it does not certify the outstanding reviews or medical accuracy. AI-authored and medically unreviewed disclosures remain visible.

Related open review work: [Phase 4 readiness](../PHASE_4_READINESS.md). Git-triggered deployments remain disabled in the current development branch's configuration.
