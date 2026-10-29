# Vercel deployment

Production address: https://openprep-amber.vercel.app

The `openprep` project belongs to the `ahmedu558` Vercel team and is connected to `AhmedU558/OpenPrep`, production branch `main`. Application functions and the `openprep-postgres-sin1` Neon PostgreSQL database use **Singapore (`sin1`)**, selected for proximity to Pakistan and to keep application/database queries within one region. Vercel's build machines and global CDN may operate elsewhere.

The project uses Vercel Hobby and Neon `free_v3`; no paid plan was selected. Provider quotas apply. `vercel.json` generates the Prisma client, uses the verified Webpack build, and keeps function placement in Singapore. The project is configured for Node.js 24 and `npm ci`.

Production environment configuration lives in Vercel, including a newly generated sensitive `BETTER_AUTH_SECRET`, the HTTPS `BETTER_AUTH_URL`, and the Neon connection variables. No production credentials or local database snapshots are committed. Local development remains on the original Docker database.

Set `NODE_OPTIONS=--experimental-require-module` in the production environment. The sanitizer's jsdom dependency loads ES modules through CommonJS; Vercel's runtime otherwise throws `ERR_REQUIRE_ESM` on practice, notebook and flashcard routes despite a successful build. This setting follows the [sanitizer maintainer's runtime guidance](https://github.com/kkomelin/isomorphic-dompurify/wiki/Workaround:-%60ERR_REQUIRE_ESM%60-on-Vercel---Netlify---AWS-Lambda) and preserves the current sanitizer and its security rules. Redeploy after changing the environment variable.

On 2026-10-29, existing migrations were applied to the new hosted database and only question content/taxonomy were copied. The existing create-only importer populated the first 75 records; a transaction copied the remaining 953 without replacing those records. Complete application-level export/read-back then compared all canonical question/option payloads, publication states and demo flags with the original local bank: **1,028 stored, 1,017 published, 11 in review, zero mismatches**. Four additional authored candidates remain outside the database. No local accounts, credentials, sessions, attempts, bookmarks, notes or analytics were copied. A non-login content-deployment service user records the initial importer operations.

Question availability does not establish medical correctness. AI-authored and medically unreviewed notices and the existing quality holds remain in place. See the [content-quality report](question-bank-content-quality.md).

SMTP is not configured for this deployment, so password-reset email delivery is unavailable until an operator adds working SMTP settings in Vercel and redeploys. The optional AI tutor remains disabled. Do not use local Mailpit settings for production email.

For future releases, preserve hosted user data: use `prisma migrate deploy`, never database resets or test-database setup. Content changes require the existing validation/review process. The deployment bootstrap was temporary and is not part of the application source or routine build command.
