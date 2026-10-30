# GitHub configuration review

Read-only snapshot: 2026-10-30, repository AhmedU558/OpenPrep, public, default main. No remote settings, branch, commit, PR, workflow run, visibility or release was changed by this task.

| Control | Observed state | Recommended owner action |
|---|---|---|
| Secret scanning | Enabled | Review alerts privately; this audit does not enumerate secret values or alerts |
| Secret push protection | Enabled | Retain; review bypass permissions and unresolved alerts privately |
| Non-provider patterns / validity checks | Disabled | Evaluate availability, privacy and plan support before enabling |
| Dependabot security updates | Disabled | Approve enabling; the new dependabot.yml proposes weekly npm/Actions update PRs, not proof of active security alerts |
| Dependabot alerts / dependency graph | Not established by returned API metadata | Verify current availability/state; dependency review requires the graph |
| Private vulnerability reporting | Disabled | RELEASE BLOCKER: configure an authorized monitored private channel with owner approval; no personal email is published |
| Main branch protection | Absent (API 404: Branch not protected) | Approve branch rules after check names and review policy are verified |
| Code scanning / default setup / workflow permissions | Not established remotely | Confirm availability and avoid duplicate default/advanced CodeQL setups |

## Local workflow proposals

CI uses Node 24.22.1/npm ci, generated Prisma client, lint/types/unit/full regression/legacy/Webpack build and browser tests. PostgreSQL 17 and Mailpit are job-local services, with only disposable fixture credentials and no production secrets. Unit tests are independently runnable without a database. E2E/integration run sequentially against the same disposable test database. No test artifacts are uploaded automatically, because traces may contain account data.

Dependency review targets moderate-or-higher newly introduced advisories on PRs; it is not a full historical vulnerability scan or license clearance. CodeQL scans JavaScript/TypeScript without an application build and has only job-scoped security-events write permission. Weekly CodeQL and Dependabot updates are proposals that take effect only after an approved push and repository configuration. No workflow deploys or publishes anything.

Actions are pinned to official immutable commits, with verified tags recorded in YAML comments: checkout v4.3.1, setup-node v4.4.0, dependency-review-action v5.0.0 and CodeQL v3.39.1. Checkout does not persist credentials. The default token has contents:read; there is no pull_request_target or secret-bearing untrusted-code execution. Dependabot can propose future SHA updates. PostgreSQL/Mailpit container tags and runner labels remain mutable; pin platform-appropriate image digests for reproducible release supply chains after reviewing update maintenance.

Local actionlint validates workflow syntax/expressions. Hosted execution, token permissions, service behavior on Ubuntu and CodeQL upload remain **unverified until an authorized push**. Configure required checks only after actual hosted check contexts exist. Proposed required contexts: CI / validate, Dependency review / review, CodeQL / analyze (verify exact display/API names).

## Default branch recommendations (not applied)

Require PRs, passing required checks and resolved review conversations; block force pushes and branch deletion; restrict direct pushes/bypasses where appropriate. Require a suitable independent review when a second authorized reviewer exists. The owner must choose a documented solo-maintainer exception rather than configuring an impossible self-approval rule. Decide admin/bot bypasses explicitly and review them periodically. Do not automatically merge dependency PRs. Use least-privilege workflow defaults and approve publication/deployment separately.

## Maintainer references

[GitHub secure Actions use](https://docs.github.com/en/actions/reference/security/secure-use) · [Dependency review availability and graph requirements](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review) · [Private reporting configuration](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/configure-for-a-repository). Feature availability is time-sensitive; verify it again before configuring the repository.
