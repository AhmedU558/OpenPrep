# OpenPrep

**AGPL transition pending:** software remains MIT while ownership/contributor permissions are reviewed. Missing private security and conduct reporting channels block a new release. See [readiness](docs/OPEN_SOURCE_READINESS.md) and [licensing audit](docs/LICENSING_AUDIT.md).

A free, open-source exam practice platform: a question bank with tutor and timed modes, multi-block practice exams, explanations, flashcards with spaced repetition, a notebook, performance analytics, a study planner, and a content admin with a review workflow. It ships with original USMLE-style demo content (Step 1, Step 2 CK, Step 3).

**No subscriptions, no locked features, no ads.** The product name is configurable (`NEXT_PUBLIC_APP_NAME`).

> Independent project. Not affiliated with or endorsed by any exam board or commercial question bank. The owner confirms recorded content redistribution rights; supporting provenance evidence awaits review. Demo questions are declared original, illustrative, and **not medical advice**.

## Features
| Area | What you get |
|---|---|
| Practice | Tutor and timed modes · custom tests by exam, subject, system, difficulty, keyword, study list · pools: unused / incorrect / omitted / correct / marked · single- and multiple-answer questions · practice exams of up to 8 blocks with a shared 45-minute break · suspend and resume · recovery after a refresh or crash · optional negative marking |
| Exam screen | Navigator · mark · strike-out · highlights (saved) · lab values · calculator · keyboard (A–J, ←/→, M, Enter) · server-side timer · focused full-screen layout |
| Learning | Explanations, key takeaways, references, source and license on every question · notes · notebook with nested pages, tags, search and clipping · flashcards (SM-2) from missed questions or selected text · study lists · error reports · optional AI tutor (off by default) |
| Analytics | Accuracy overall and by exam, subject and system · score trend · time per question · 12-week activity heatmap · streak · weak areas · CSV report |
| Planner | Exam date, hours per day, rest days → daily tasks covering every unused question, a review period, progress measured from real answers, reschedule from today, move and retarget tasks, calendar (.ics) export |
| Accounts | Email + password, password reset by email, guest mode (progress carries over on sign-up), profile, preferences, data export, account deletion |
| Admin | Question editor · draft → review → published → archived workflow · bulk JSON import (dry run, all-or-nothing) and export · taxonomy · error-report queue · users and roles · audit log |

## Quick start (local)
Requirements: **Node.js 22.12+** (validated/CI version: 24.22.1), **npm** with the committed lockfile, and **Docker** (PostgreSQL and the local mail catcher).

```bash
cp .env.example .env
```
Set `BETTER_AUTH_SECRET` in `.env` (any random string of 32+ characters), for example:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```
Then:
```bash
npm ci
npx prisma generate  # generate the ignored Prisma client from the checked-in schema
npm run db:up        # PostgreSQL 17 + Mailpit (http://localhost:8025)
npm run db:deploy    # apply committed migrations to your NEW local database
npm run db:seed      # optional: seed 32 demos on a NEW disposable local database only
npm run dev          # http://localhost:3000
```
If port 3000 is taken, run `npm run dev -- -p 3100` and set `BETTER_AUTH_URL=http://localhost:3100`.

For a new local instance, optional `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` bootstraps an admin. On an existing instance use Admin → Users & roles from an authorized admin account. The seed is now create-only for questions: it preserves existing content, licenses, review decisions and option IDs. Do not run administrative seed operations against production without separate authorization.

## Commands
| Command | Does |
|---|---|
| `npm run dev` / `build` / `start` | Develop, build, serve production |
| `npm run lint` · `npm run typecheck` | ESLint · TypeScript |
| `npm run test:unit` | Pure unit tests; no database or .env needed |
| `npm test` | Unit + integration tests (Vitest; uses the separate `openprep_test` database) |
| `npm run test:e2e` | Playwright end-to-end tests (builds must be current: run `npm run build` first) |
| `npm run db:migrate` · `db:deploy` | Create migrations on a disposable development DB / apply committed migrations |
| `npm run db:seed` · `db:reset` | Create-only demo seed / destructive database reset: NEW disposable local databases only |
| `npm run legacy` | The earlier zero-dependency version in `legacy/` |

Integration/E2E tests migrate and truncate their database. Use a disposable **loopback PostgreSQL database named `*_test`**, distinct from `DATABASE_URL`; no production credentials are needed. Do not run both suites concurrently. `npm run build -- --webpack` is the verified build path; plain `build` retains Next.js defaults. No formatter script is configured.

E2E tests use the installed Microsoft Edge on Windows. Elsewhere, run `npx playwright install --with-deps chromium` and set `PW_CHANNEL=chromium`.

## Deploying
Hosted instance: [OpenPrep](https://openprep-amber.vercel.app). Application functions and PostgreSQL use Singapore, near Pakistan. See [deployment configuration and operational limits](docs/deployment.md).

Any Node.js host plus PostgreSQL works. Set the variables from `.env.example`, run `npm run db:deploy` and `npm run build`, then `npm start`. Put it behind HTTPS (cookies become `Secure` automatically when `BETTER_AUTH_URL` is https).

**Costs, honestly:** the software is free; running it publicly is not automatically free. You need a server or PaaS, a PostgreSQL database, SMTP for password-reset email, and optionally a domain. Free tiers exist but change over time. The optional AI tutor costs nothing with a local [Ollama](https://ollama.com) model on your own hardware; hosted AI providers usually charge per request.

## Content

**Rights review is required before delivery or export.** Seeds/imports do not grant verification. Existing questions retain their data/licenses; learner availability requires verified rights and delivery permission, and exports need a separate redistribution grant. See [rights enforcement](docs/CONTENT_RIGHTS_ENFORCEMENT.md). The source-content preflight (`npm run release:check-content`) currently blocks distribution because real file approvals are pending. Production has not received these local controls.
Local database baselines, preservation fingerprints, assistant state and machine-specific audit snapshots are excluded from Git. The source specifications, generated import JSON, quality reports and import results are included; importing them requires your own configured local database. Historical reports describe the author's local milestone, not a database bundled with a fresh clone.
Questions are Markdown in a documented JSON format: see [docs/content-format.md](docs/content-format.md) and the [content policy](docs/content-policy.md). Only add content you wrote or have the right to distribute, and keep its source and license.

The local 2026-10-29 milestone has 1,028 stored questions and 1,017 available for practice, including the preserved232-question bank. The latest expansion authored800 items, imported796 and withheld15 for review. All expanded content is AI-authored and medically unreviewed. New installations still seed only the 32 demos; import the content separately using the [batch instructions](docs/question-import-format.md). See the [bank progress report](docs/question-bank-progress.md), [content-quality report](docs/question-bank-content-quality.md), [medical review policy](docs/question-content-policy.md), and [scaling roadmap](docs/question-bank-roadmap.md). No paid AI provider is required.

## Architecture and environment

Next.js App Router combines React pages, server actions and API handlers in one TypeScript service. PostgreSQL/Prisma persists auth, content, practice and study data; Better Auth manages sessions, Tailwind styles the UI, and the optional AI adapter is `src/lib/ai.ts`. See [architecture](docs/architecture.md).

[.env.example](.env.example) documents app name, auth URL/secret, local application/test databases, SMTP, optional seed-admin credentials and optional AI provider/base URL/model/key. Values are local placeholders. Leave AI unset to disable it; external providers receive question context and learner prompts. Configure deployment values privately with HTTPS and SMTP; never reuse local/CI passwords for hosting. `PW_CHANNEL` selects the test browser; `E2E_DISABLE_RATE_LIMIT` is a localhost-only bypass; `NODE_OPTIONS` may need the documented serverless sanitizer workaround. `NEXT_TELEMETRY_DISABLED=1` opts out of Next telemetry.

## Community and release process

[Contributing and DCO](CONTRIBUTING.md) · [Governance](GOVERNANCE.md) · [Code of Conduct](CODE_OF_CONDUCT.md) · [Support](SUPPORT.md) · [Security reporting status](SECURITY.md). Private reporting is disabled and no active private security or conduct contact is configured. Do not report vulnerabilities in public issues.

[Initial audit](docs/OPEN_SOURCE_INITIAL_AUDIT.md) · [Security audit](docs/SECURITY_AUDIT.md) · [Dependency inventory](docs/audit/dependency-inventory.md) · [Third-party notices](THIRD_PARTY_NOTICES.md) · [Final readiness](docs/OPEN_SOURCE_READINESS.md). Local CI/CodeQL/dependency-review proposals require review and hosted validation; no repository settings are changed.

## Documentation
[Architecture](docs/architecture.md) · [Product requirements](docs/product-requirements.md) · [Feature matrix](docs/feature-matrix.md) · [Implementation plan](docs/implementation-plan.md) · [Progress log](docs/progress.md) · [Rea and skill audit](docs/rea-skill-audit.md) · [Contributing](CONTRIBUTING.md) · [Security](SECURITY.md)

## License
Current code: [MIT](LICENSE); intended transition: **AGPL-3.0-only**, blocked pending verified ownership/contributor permissions. The [official AGPL reference](docs/licenses/AGPL-3.0.txt) is not an active OpenPrep license grant. See [NOTICE](NOTICE) and [licensing audit](docs/LICENSING_AUDIT.md). Name/logo rights are separate; no registered mark is claimed: [trademark policy](docs/TRADEMARK_POLICY.md).

Bundled demo questions: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Each question records its own source and license. See [content licensing/provenance](docs/CONTENT_LICENSING_POLICY.md) and [docs/content-policy.md](docs/content-policy.md).
