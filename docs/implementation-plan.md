# Implementation plan

Phases follow the project brief. Each phase ends with an update to `docs/progress.md`.

## Phase 1 — Reconnaissance ✅
Rea audit, public-page analysis, requirements, feature matrix, architecture.

## Phase 2 — Foundation
1. Move the existing zero-dependency app to `legacy/` (it keeps working through `node legacy/server.js`).
2. Scaffold Next.js + TypeScript + Tailwind with pinned versions; add ESLint and strict `tsconfig`.
3. `docker-compose.yml`: PostgreSQL 17 + Mailpit. `.env.example` with no secrets.
4. Prisma schema, first migration, seed (taxonomy, demo questions from `legacy/questions.js`, plus demo users for each role).
5. Better Auth: register, login, logout, password reset via SMTP; `requireUser`/`requireRole` helpers.
6. Design system: tokens, header/nav, buttons, inputs, cards, badges, empty/loading/error states.

## Phase 3 — Core learning experience
1. Question browser with filters and full-text search (B1–B3).
2. Create Test → server-created `TestSession` (C1, C2).
3. Exam screen: navigator, answering, flagging, strike-out, highlight, lab values, calculator, keyboard support, timer from server time (C3–C6, C11, C13).
4. Pause/resume, recovery, submit and scoring, results page (C7–C10).
5. Explanations, key points and references; bookmarks and notes; report an error (B8–B10, D1, D2).
6. Previous tests, wrong-answer review, retry incorrect (D4).

## Phase 4 — Learning tools
Flashcards with SM-2 (D5, D6), notebook (D3), collections (D7), analytics and CSV export (E1–E7), planner (F1–F5), practice exams with breaks (C12), admin: editor, workflow, import/export, taxonomy, audit log, users (G1–G8), optional AI panel (D8).

## Phase 5 — Validation
Vitest unit tests (machine, scoring, SRS, planner, validation), integration tests against a test database (services, authorization, races), Playwright E2E tests (T1–T15 including viewports and axe), security review, then fix and re-run.

## Phase 6 — Release
README, LICENSE (after license review), CONTRIBUTING, SECURITY, content policy, known limitations.

## Order of risk
The highest-risk pieces, the exam state machine plus server timing and authorization, are built and tested first. Breadth features come after a full end-to-end learning loop works.
