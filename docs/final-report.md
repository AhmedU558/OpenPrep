# OpenPrep — final report (2026-10-29)

## Architecture
Next.js 16 (App Router, server actions) + PostgreSQL 17 via Prisma 7 + Better Auth, all self-hosted. Docker Compose runs Postgres and Mailpit locally. Business logic lives in `src/lib` (exam engine, analytics, planner, SRS, admin); pages are thin. The exam is a server-side state machine (`CREATED → IN_PROGRESS ⇄ PAUSED → SUBMITTED`, `ABANDONED`) with a server clock, row locks and idempotent submit. Details: `docs/architecture.md`.

## Rea skills actually used
None against UWorld. Rea (`rea-agents` 6.8.0) is a binary/runtime reverse-engineering toolkit; using it on a commercial site would conflict with the spec's no-bypass/no-scraping rules, and it has no web-development skills. Product research was done by reading 6 public marketing pages in a browser. See `docs/rea-skill-audit.md`.

## Features
**Working (tested):** accounts, guest mode with progress carried over, password reset by email; Create Test (tutor/timed, pools, filters, study lists, negative marking); exam screen (navigator, mark, strike-out, highlights, lab values, calculator, keyboard shortcuts, suspend/resume, refresh recovery, server timer, auto-submit); results, review, retry missed; question bank browser with full-text search; notes, flashcards (SM-2), notebook, error reports; performance analytics and CSV; planner with .ics export; settings and data export/delete; admin (editor workflow, import/export, reports queue, taxonomy, users/roles, audit log); optional AI tutor (off by default).

**Out of scope:** peer percentiles, estimated score, CCS cases, educator platform (no honest data or source for them).

## Files and migrations
App code in `src/` (32 routes), schema in `prisma/schema.prisma` (24 models), migrations `init`, `session_position_since`, `guest_accounts`. 32 original demo questions in `prisma/seed-data/`. Earlier app kept in `legacy/`.

## Commands
```bash
docker compose up -d
npm install
npx prisma migrate deploy && npm run db:seed
npm run dev            # http://localhost:3000 (on this machine: -- -p 3100, port 3000 is taken)
npm test               # vitest (unit + integration on openprep_test)
npm run build && npm run test:e2e
```

## Test results (all actually run)
| Check | Result |
|---|---|
| `tsc --noEmit` | clean |
| `eslint .` | clean |
| `vitest run` | 75/75 passed (54 unit, 21 integration) |
| `next build` | succeeds |
| Playwright E2E | run 1: 15/21 · run 2: 19/21 · **final: 21/21** |
| `node legacy/test.js` | ok |

Failures found by E2E and their fixes are listed in `docs/progress.md` (Phase 5b). Three were real app bugs: wrong HTTP status (200 instead of 404) on someone else's test, a laggy Mark checkbox, and an unnamed button on mobile.

## Security and licensing
Server-side authorization on every request, user-scoped queries (foreign resources → 404), roles from the DB, Zod validation, sanitized Markdown, CSP, POST-only auth forms, CSV formula neutralization, log redaction, no secrets in the repo. Code MIT; demo questions CC BY-SA 4.0; all runtime dependencies permissive. See `SECURITY.md` and `docs/content-policy.md`.

## Limitations
- Rate limiting is in memory (one process).
- No email verification at sign-up.
- No image upload; images are referenced by URL.
- Full-text search has no index (fine for thousands of questions).
- Question-bank expansion:1,028 stored/1,017 available locally after adding796 records to the preserved232. All expanded content is AI-authored and medically unreviewed. See `question-bank-progress.md` and `question-bank-content-quality.md`; qualified medical review remains outstanding.
- No security scan tool (e.g. a dedicated SAST run) has been run yet.

## Next tasks
1. Add content (write questions, or import openly licensed sets) through the admin importer.
2. Run a security review / SAST pass.
3. `git init`, first commit, and push to the `OpenUworld` GitHub repo when you're ready.
