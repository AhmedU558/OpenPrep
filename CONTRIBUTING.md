# Contributing to OpenPrep

Start with [README](README.md), [architecture](docs/architecture.md), [content rights](docs/CONTENT_LICENSING_POLICY.md), and [Code of Conduct](CODE_OF_CONDUCT.md). Ownership review and confidential reporting channels block a new release.

## Development setup and architecture

Use npm and the committed lockfile, Node 24.22.1 (CI/validation version; package minimum 22.12), a new local PostgreSQL database and Mailpit. Follow README: copy .env.example, generate your private auth secret, run npm ci, generate Prisma, start Docker services, apply committed migrations, and optionally seed only a NEW local database. The seed is now create-only for questions and preserves existing content/options. Seeds and imports do not approve rights; use the explicit admin evidence/review process before availability or export.

Server logic lives in src/lib, pages/actions/routes in src/app, UI in src/components, schema/migrations in prisma, bank authoring in content/bank. Reuse existing validation, sanitization and authorization helpers; keep pages thin.

## Validation

Run these before a PR and report exact results and unrun checks:

```sh
npm run lint
npm run typecheck
npm run test:unit
npm test
node legacy/test.js
npm run build -- --webpack
npm run test:e2e
```

Unit tests need no database or .env. Integration/E2E migrate and truncate a **disposable loopback PostgreSQL database whose name ends _test**, distinct from DATABASE_URL. Never point tests at valuable data. Do not run both suites concurrently against one database. Linux: install Chromium with npx playwright install --with-deps chromium and set PW_CHANNEL=chromium. E2E uses port 3200 and a fresh build. Use a local mail catcher, never real SMTP credentials.

## Branches, commits and review

Use focused branches: codex/<topic> for Codex work, or feature/<topic>/fix/<topic>. Prefer Conventional Commit subjects (fix:, feat:, docs:, chore:). A PR describes the problem, resulting behavior, validation, migration/rights implications and risks. Keep unrelated work separate. Maintainer review covers correctness, security, accessibility, rights and notices. Resolve review conversations and update callers, tests, fixtures and documentation. Do not push directly to main, force-push shared history, merge or release without explicit maintainer approval.

## Licensing and DCO

Current software contributions respect MIT in LICENSE and upstream notices. **AGPL-3.0-only is intended but not active**, pending software ownership/contributor review. Do not assume existing contributors authorized relicensing. After a verified transition is approved, update all contribution/license declarations together. Educational content keeps separate verified terms.

Use the [Developer Certificate of Origin 1.1](https://developercertificate.org/) as lightweight contribution certification. Read it before signing off every submitted commit with git commit -s. The Signed-off-by line uses your name and an address you authorize in permanent public Git history; GitHub noreply addresses are an option. Reviewers check sign-offs. The DCO certifies your right to contribute under the applicable license; **it does not transfer copyright**. No CLA, assignment or automated remote DCO service is introduced.

## Database, security, accessibility and dependencies

Develop schema changes on a disposable database, create a named migration with npm run db:migrate -- --name description, commit schema/SQL and test empty and upgrade paths. Explain compatibility, backfills and rollback limits. Never reset/reseed production, edit applied migrations or delete learner data to pass tests. Release operators use migrate-deploy only after authorization and backup/restore planning.

Authenticate and enforce role/ownership server-side; validate input with Zod, parameterize SQL, and render Markdown through renderMarkdown. Preserve error handling, keyboard access, labels, contrast and both themes. Never commit credentials, real student/patient data, dumps or sensitive logs. Vulnerabilities require an authorized private channel, currently unconfigured (SECURITY.md).

Avoid unnecessary dependencies. Review actual license/source/notices, vulnerability findings and artifact obligations before adding or updating packages; permissive metadata alone is insufficient. Regenerate the offline inventory with node scripts/audit-open-source.mjs and review lock/notice/platform gaps.

## Educational contributions

Read [format](docs/content-format.md), [import instructions](docs/question-import-format.md), [rights policy](docs/CONTENT_LICENSING_POLICY.md) and [medical review policy](docs/question-content-policy.md). Supply original wording or documented redistribution permission, exact license/attribution, asset provenance, AI disclosure and qualified-review status. No commercial-bank copying or invented references. Unknown rights stay outside public PR content, exports and releases pending review. A CC license string is not proof of rights, and AI critique is not clinician review.

## Rights enforcement and release preflight

Read [CONTENT_RIGHTS_ENFORCEMENT](docs/CONTENT_RIGHTS_ENFORCEMENT.md). Changes invalidate approvals; attempted questions require a new code. Never auto-approve real content for a fixture or release. Run npm run release:check-content for the chosen artifact scope; missing current evidence must block release. Test-only synthetic attestations are confined to disposable databases and cannot populate real source approvals.
