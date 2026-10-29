# Progress log

## 1,000-question expansion — 2026-10-29

Actual local PostgreSQL total: 1,028 stored / 1,017 practice available. Authored 800 additional specifications in eight 100-item source batches; imported 796, made 785 available, and quarantined 15 (4 never inserted, 11 stored in REVIEW). All 232 original questions/options and 15 tracked account/study tables have unchanged preservation digests. Full-field comparisons found 0 mismatches; all final retries created 0 records. Source hashes and coverage by exam/subject/topic/difficulty/objective are saved under `content/bank/expansion/reports/`.

Added the provisional cognitive-demand rubric, per-item evidence/semantic notes, conservative concept-candidate screening and explicit paired dispositions. Retained AI-authored/medically-unreviewed labels; no qualified review or medical accuracy claim. Full results and limitations: [question-bank-progress.md](question-bank-progress.md), [question-bank-content-quality.md](question-bank-content-quality.md), [question-bank-roadmap.md](question-bank-roadmap.md).

Validation: 103/103 unit/integration tests, 23/23 browser tests, TypeScript, ESLint, legacy regression and webpack production build passed. Browser tests use the isolated test database. Live eligibility probes use read-only application search/filter functions; user progress was not populated with synthetic attempts.

## Question bank expansion — 2026-10-29

Added 200 original AI-authored, medically unreviewed questions in eight 25-item batches to the existing development database (32 → 232). All eight retries skip existing records; full-field read-back matches all 200 questions and 800 options. Original questions/options and 15 user/study tables have unchanged preservation digests. Added safe create-only import tooling, structural/metadata/duplicate gates, topic filters, provenance badges, and distractor-rationale notebook clipping.

Validation: Vitest 96/96; Playwright final full run 22/22; TypeScript, ESLint and legacy tests passed. Webpack production build passed; default Turbopack failed to start its CSS worker. Medical review and detailed current-reference mapping remain outstanding. Full evidence and limitations: [question-bank-progress.md](question-bank-progress.md). Policies and growth instructions: [question-content-policy.md](question-content-policy.md), [question-import-format.md](question-import-format.md), [question-bank-roadmap.md](question-bank-roadmap.md).

## Phase 1 — Reconnaissance (2026-10-29) ✅
**Done**
- `docs/rea-skill-audit.md`: Rea is `rea-agents` 6.8.0 (MIT), a reverse-engineering CLI and MCP server with one skill (`reverse-engineer-anything`). It has no web-development skills. It is not used against UWorld. Other Claude Code skills that apply are listed.
- Read 6 public UWorld marketing pages in the browser (no login, no content copied). Results are in `docs/product-requirements.md` §2, with 16 verified observations kept separate from assumptions.
- `docs/feature-matrix.md`: 60+ features, each with its basis, UI, data, feasibility and test mapping.
- `docs/architecture.md`, `docs/implementation-plan.md`: stack, data model, exam state machine, security model and costs.
- Dependency versions pinned to stable releases at least 14 days old. Licenses checked (all MIT, Apache-2.0 or MIT-0 at runtime; MPL-2.0 for test-only axe-core).

**Tests:** none yet. The legacy app's `node test.js` passes.

**Out of scope, decided:** peer statistics, estimated score, CCS, educator platform. See PRD §5.

**Next:** Phase 2 — move the legacy app, scaffold Next.js, Postgres in Docker, Prisma schema and seed, Better Auth.

## Phase 2 — Foundation (2026-10-29) ✅
**Done**
- Moved the earlier app to `legacy/` (`npm run legacy`, its own `package.json` keeps CommonJS). `node legacy/test.js` passes.
- Pinned dependencies (see `architecture.md`). npm 11 install scripts approved only for prisma, @prisma/engines, esbuild, unrs-resolver.
- `docker-compose.yml`: Postgres 17 (separate `openprep_test` DB for tests) + Mailpit. `.env.example` has no secrets; the local `.env` has a generated auth secret.
- Prisma 7 schema (24 models) + 2 migrations; idempotent seed: 32 original demo questions (30 single answer, 2 select-all), taxonomy, and an optional admin from env.
- Better Auth: email/password (scrypt), DB sessions, password reset email, rate limits, a `role` field that clients cannot set, `requireUser`/`requireRole` helpers that read the role from the DB.
- Exam engine: pure state machine and scoring; DB service with row locks, server-side clock, idempotent submit, auto-submit on expiry, answers hidden until locked.

**Tests (ran, passing):** `npx vitest run` → 37/37 (28 unit, 9 integration on the test DB). `npx tsc --noEmit` → clean.
**Bugs found by tests and fixed:** (1) auto-submit on expiry was rolled back by the error thrown in the same transaction; (2) validation errors threw synchronously instead of rejecting.

**Next:** Phase 3 — UI: design system, auth pages, Create Test, exam screen, results, review.

## Phases 3–4 — Learning experience and tools (2026-10-29) ✅
**Done**
- Design system (tokens, light and dark themes, AA contrast, focus rings, skip link), original logo, landing page, auth pages, guest mode with progress carried over on sign-up.
- Create Test (mode, pools, exam/subject/system, keyword, study list, blocks, negative marking) → focused full-screen exam screen (navigator, mark, strike, saved highlights, lab values, calculator without eval, keyboard, server-anchored timer, suspend, end block) → results (filters, review, retry missed, practice-exam break panel) → previous tests.
- Question bank browser (URL filters, Postgres full-text search, pagination, mark, study lists, practice one question).
- Flashcards (SM-2, keyboard review, create/edit/suspend/delete, search), notebook (nested pages up to 4 levels, tags, search, clip from explanation), notes, error reports.
- Performance (overall / reports / graphs, heatmap, weak areas, CSV), dashboard, planner (generate, live progress, reschedule, move and retarget tasks, .ics export), settings (profile, password, preferences, data export, delete account).
- Admin: overview, question list, editor with draft/review/published/archived workflow, import (dry run, all-or-nothing) and export, error-report queue, taxonomy, users and roles, audit log.
- Optional AI tutor behind a provider interface (none / Ollama / OpenAI-compatible), hidden when not configured, available only after the learner has answered.

**Found in browser testing and fixed:** auth forms could submit as GET before hydration and put credentials in the URL (now POST); exam layout too cramped on mobile (moved to its own full-screen route group); per-question timer kept counting on locked items.

## Phase 5 — Validation (2026-10-29)
- `npx tsc --noEmit`: clean. `npx eslint .`: clean (TypeScript pinned to 6.0.3 because typescript-eslint does not yet support TS 7; lint found and we fixed 6 React-purity/set-state-in-effect issues).
- `npx vitest run`: **75/75 passed** (54 unit, 21 integration against the `openprep_test` database).
- `npx next build`: succeeds (32 routes).
- Playwright E2E: see the latest entry below.
- E2E setup note: Prisma refuses `migrate reset` when run by an AI agent (a deliberate safeguard). The E2E setup now uses `migrate deploy` + truncating the `*_test` database instead.

## Phase 5b — E2E runs (2026-10-29) ✅
**Run 1: 15 passed, 6 failed.** Causes:
1. *Test bug:* tests assumed the first question was single-answer; the random order sometimes picks a select-all question (checkboxes, not radios). Tests now use a `choices()` helper.
2. *Test bug:* keys were pressed before the session finished opening (options still disabled). `createTest` now waits until the options are enabled.
3. *App bug:* the **Mark** checkbox waited for the server before ticking. It now updates immediately, like answering.
4. *App bug:* another user's test returned the not-found page **with HTTP 200**, because `loading.tsx` had already started streaming. Data never leaked, but the status was wrong. Moved the loading boundary off the `/test/[id]` routes (`(app)/(main)/loading.tsx`); they now return a real 404.
5. *App bug (a11y, mobile):* the account menu button had no accessible name on small screens. The name is now screen-reader-only instead of hidden.

**Run 2: 19 passed, 2 failed** (a test locator matched 3 elements; a first attempt at fix 5 renamed the button). Both fixed.

**Run 3 (final): 21/21 passed** (desktop Edge + mobile Pixel 7 emulation, production build, `openprep_test` DB).
After the fixes: `tsc` clean, `eslint` clean, `vitest` 75/75, `next build` OK, `node legacy/test.js` OK.
