# Contributing

Thanks for helping! Code, questions, translations and bug reports are all welcome.

## Set up
Follow **Quick start** in the README. Before opening a pull request, run:
```bash
npm run lint && npm run typecheck && npm test
npm run build && npm run test:e2e
```

## Code guidelines
- Keep logic in `src/lib` (pure functions where possible, with unit tests) and keep pages thin.
- Every server action or route handler must authenticate (`requireUser` / `requireRole`), validate input with Zod, and scope queries to the acting user.
- Never render unsanitized HTML: use `renderMarkdown` from `src/lib/markdown.ts`.
- Schema changes: edit `prisma/schema.prisma`, run `npm run db:migrate -- --name what_changed`, and commit the migration.
- New dependencies must be permissively licensed (MIT, Apache-2.0, BSD, ISC). Explain why the dependency is needed in the PR.
- Accessibility: label every control, keep keyboard access working, and check contrast in both themes.

## Contributing questions
Read [docs/content-policy.md](docs/content-policy.md) and [docs/content-format.md](docs/content-format.md). In short: original or openly licensed content only, record source and license, and never invent references. Submit questions as a JSON file in a PR or through the admin editor on your own instance.
