# Security policy

## Private reporting — RELEASE BLOCKER

Preferred channel: [GitHub private vulnerability reporting](https://github.com/AhmedU558/OpenPrep/security/advisories). **Currently disabled**, verified by read-only API on 2026-10-30. No active private security contact is configured.

Authorized private security contact: **[PENDING MAINTAINER CONFIGURATION]**.

### Maintainer setup and verification (not executed)

1. Obtain owner authorization for an actual monitored reporting channel and a responsible maintainer/backup. Do not publish a personal email or invent a contact.
2. For the preferred GitHub channel, an authorized repository administrator follows Settings → Security and quality / Advanced Security → Private vulnerability reporting → Enable. Labels may change; use [GitHub's official instructions](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/configure-for-a-repository). This document grants no permission to change settings.
3. Configure repository/security notification delivery, access and a monitoring schedule privately. Check that the owner/designee and a consenting backup can receive and triage reports; do not list fictitious responders.
4. After separate authorization, the owner submits a harmless synthetic private report, verifies reporter/maintainer-only visibility, notification delivery, acknowledgment and backup handling. No real vulnerability, token or personal data belongs in the test. An API enabled flag alone is insufficient proof of monitoring.
5. Record the channel, verification date, authorized responders' roles and successful acknowledgment in a public-safe status update; retain sensitive routing details privately. Only then remove this release blocker and replace the neutral placeholder with an authorized channel. Do not promise a response SLA that no one has approved.

Until all steps are complete, reporting remains pending configuration. Phase 2 rechecked the read-only API: enabled=false. No GitHub setting or test report was created.

Do not report vulnerabilities, proofs of concept, credentials or personal data in public issues, PRs or the security issue template. Wait for an authorized private channel before sharing sensitive details. This policy publishes no personal email or invented contact. Enabling reporting or publishing a contact requires owner approval and was not performed.

## Supported versions and response

OpenPrep is pre-1.0; the maintainer targets the current main revision for fixes. No LTS or established supported-release matrix exists. Unsupported forks/deployments are their operators' responsibility; historical tags are not represented as independently audited.

After a monitored channel is configured, the proposed response target is acknowledgment within seven days, severity/affected-version triage and coordinated remediation/disclosure. This target requires maintainer approval and operational setup; it is not an active response guarantee. Agree on publication timing after patches and operator guidance exist; exclude credentials and identifiable learner data from advisories.

The proposed private workflow is intake with minimal necessary evidence; acknowledge and assign an authorized owner; reproduce on an isolated instance; assess affected versions/data and severity; develop/review a fix privately; validate regressions and operator migration/rotation needs; coordinate disclosure timing and credit with the reporter; publish a sanitized advisory only after explicit approval; and record follow-up/closure. Escalate a conflict of interest to a consenting independent person chosen by the owner. None of these roles is represented as staffed until approved.

Only test explicitly authorized instances. Use synthetic cases and disposable local databases; avoid disruption or access to other users' data.

## Dependencies and exposed secrets

Review npm advisories, dependency review/CodeQL results and upstream notices. Prioritize affected execution paths, use supported patches, run regressions and disclose residual risk. Severity is not proof of exploitability; zero advisories is not proof of safety. Local workflow proposals have not run on GitHub.

If a credential is exposed, immediately revoke/rotate it at its issuer, invalidate affected sessions where relevant, inspect access/audit logs privately and assess notifications. Record the affected file/commit without copying the secret. Removing the latest file is insufficient. Decide history/artifact cleanup with the owner; never rewrite history automatically. Do not log raw headers, secrets, database URLs or private provider errors.

## Controls and limits

Better Auth configures password/database sessions, role input exclusion, reset expiry and session revocation on reset. Server user/role checks and scoped services protect learner/admin paths; parameterized queries, validated imports, server timing/transactions, sanitized Markdown and escaped output are existing controls. These are design findings, not a vulnerability-free guarantee.

Limits include per-process auth/AI rate limits, guest-resource abuse, no required signup email verification, inline scripts permitted by CSP, and logger redaction that cannot guarantee removal of embedded secrets in arbitrary error strings. Optional AI sends question context and learner prompts to the operator-configured provider. No image-upload handler exists; imported image URLs need rights/privacy review. The legacy LAN server lacks per-user authentication and must not be exposed publicly.

Phase 2 adds fail-closed content rights gates, blocks in-place question edits with saved attempts, and makes reseeding create-only. These local changes are not deployed. See [rights enforcement](docs/CONTENT_RIGHTS_ENFORCEMENT.md), [security audit](docs/SECURITY_AUDIT.md) and [readiness](docs/OPEN_SOURCE_READINESS.md) for residual findings and unrun checks. No existing study or production database was changed.
