# Security policy

## Reporting a vulnerability
Please report privately, not in a public issue: use GitHub's **Report a vulnerability** (Security tab → Advisories) on this repository. Include steps to reproduce and the impact. We aim to acknowledge reports within 7 days.

Only test against your own local or self-hosted instance. Do not test against other people's deployments.

## Security design (summary)
- **Authentication:** Better Auth with email + password, scrypt hashing, database sessions in httpOnly SameSite=Lax cookies (Secure over HTTPS), single-use password reset tokens that expire after 30 minutes, sessions revoked on reset, rate limits on sign-in, sign-up and reset.
- **Authorization:** checked on the server for every request. Every learner query is scoped to the signed-in user's ID, and a resource owned by someone else returns *not found* (no IDOR, no existence probing). Roles (`LEARNER` < `EDITOR` < `ADMIN`) are read from the database on each request and cannot be set by clients (`input: false`).
- **Exam integrity:** timing and scoring happen on the server. Each operation locks the session row. Submit is idempotent and versioned, so a double submit scores once. Answers after the deadline are rejected. Correct answers and explanations never reach the browser before an item is locked.
- **Injection:** Prisma parameterizes all queries. The raw SQL (full-text search, analytics) uses tagged templates with bound parameters. All input is validated with Zod.
- **XSS:** Markdown is sanitized with DOMPurify (allow-list of tags and attributes, http(s)/same-origin URLs only). Saved highlights are accepted only if they equal the original text plus `<mark>`. AI answers render as plain text. A strict Content-Security-Policy is set.
- **CSRF:** Next.js server actions check the Origin header. Auth endpoints are protected by Better Auth's origin checks. Auth forms POST, so credentials never land in a URL.
- **Data:** CSV exports neutralise spreadsheet formulas. Data export never includes password hashes or tokens. Logs redact secrets and mask emails.
- **Secrets:** none in the repository. `.env` is git-ignored. The app refuses to start with an invalid configuration.

## Known limitations
- Rate limiting is in memory per process. With several instances, switch Better Auth to `storage: "database"`.
- Email verification is not required at sign-up (password reset still needs mailbox access).
- No image upload endpoint yet. Images are referenced by URL, which avoids unsafe uploads but requires hosting images elsewhere.
