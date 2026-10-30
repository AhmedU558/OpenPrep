# Licensing audit

2026-10-30. **NEEDS REVIEW — AGPL activation is blocked.** This is an engineering evidence record, not a legal compliance opinion.

## Current grant and proposed transition

The root LICENSE, package.json and lockfile root retain MIT. Existing CC-BY-SA-4.0 content declarations are separate. The owner explicitly answered that software ownership/contributor permissions need review. Git records two author names, AhmedMA558 and Ahmed Umer, but author/committer identity is not proof of chain of title or employer rights. No CLA, assignment or verified ownership ledger was found. Existing generic contributor copyright is preserved as an inherited notice, not asserted as a new finding.

The intended future software license is **AGPL-3.0-only** (no “or later” election has been authorized). [Official GNU text](https://www.gnu.org/licenses/agpl-3.0.txt) was downloaded verbatim to [licenses/AGPL-3.0.txt](licenses/AGPL-3.0.txt), SHA-256 `0d96a4ff68ad6d4b6f1f30f713b18d5184912ba8dd389f86aa7710db079abcb0`. It is staged as reference material; replacing root LICENSE or announcing an active AGPL grant now would misstate authorization. No custom restriction has been added to that text. No MIT permission already granted is purportedly revoked.

Before activation, the maintainer must document original and third-party code provenance, confirm all relevant rights/permissions and the actual holder(s), determine whether a prospective AGPL-covered combined distribution with retained MIT components is appropriate, and approve a precise grant. Then copy the unmodified reference to root LICENSE, update package.json and lockfile root, README, NOTICE, CONTRIBUTING and content-policy cross-references together, retain upstream notices, and provide a working corresponding-source offer where AGPL section 13 applies to modified network software. Verify actual deployed source/version availability; a homepage link alone is not a tested source-offer process. No production changes are part of this task.

## Dependency evidence

The complete [per-package inventory](audit/dependency-inventory.md) and [JSON](audit/dependency-inventory.json) cover all non-root package-lock paths, including direct, transitive, development and optional platform dependencies. Every entry records version, declared license, source tarball/integrity, compatibility assessment, required notices, redistribution obligations and unresolved evidence. Captured [license/NOTICE texts](audit/THIRD_PARTY_LICENSE_TEXTS.md) retain upstream copyright. Package metadata and installed text are distinct evidence; neither proves a shipped artifact contains only those components.

The initial lock had 739 entries; the final lock has 737. Security patches align Prisma client/adapter/CLI from 7.10.0 to 7.10.1 and Nodemailer from 10.1.1 to 10.3.1; the regenerated inventory represents the final lock. No dependency was removed on licensing grounds and no licensing checker dependency was added. The patch update removed the prior seq-queue entry transitively. The final lock has no missing license identifiers, but 156 entries have unresolved top-level notice evidence (including absent platform packages); no blanket compatibility clearance is asserted.

| Finding | Evidence / treatment | Status |
|---|---|---|
| MIT, ISC, BSD, MIT-0, Apache, BlueOak, public-domain-style grants | Retain actual notices; Apache has patent/NOTICE/change conditions. No obvious metadata-level AGPL conflict; inspect combined distribution. | NEEDS REVIEW for actual bundle |
| DOMPurify dual grant | `(MPL-2.0 OR Apache-2.0)`; Apache alternative avoids assuming all MPL terms apply to this use. Preserve upstream license text. | NEEDS REVIEW for selected artifact |
| sharp/libvips native packages | LGPL-3.0-or-later and composite grants, including platform binaries; inspect library source/relinking/replacement and installation-information obligations where applicable. Linux/macOS optional packages were not installed on Windows. | NEEDS REVIEW |
| axe/lightningcss | MPL-2.0 file-level obligations; tooling/distribution inclusion matters. Do not label the entire runtime tree permissive. | NEEDS REVIEW |
| elkjs via Prisma Studio | EPL-2.0; inspect secondary-license designation and whether any combined or separate distribution is proposed. No compatibility assumed. | NEEDS REVIEW |
| Initial seq-queue 0.0.5 | Initial package metadata omitted a license; installed LICENSE explicitly granted MIT (Netease, Inc. and other pomelo contributors). It disappeared transitively in the security patch lockfile and is absent from the final distribution inventory. | NOT APPLICABLE to final lock |
| caniuse-lite | CC-BY-4.0 data: attribution, license reference and modification indication when required. | NEEDS REVIEW for redistribution |
| Compound licenses and absent notice texts | Preserve every required grant/notice; review exact expression and upstream tarballs for absent platforms. | NEEDS REVIEW |

The direct manifests contain no proprietary license declaration. No source-copy license match was established; absence of a detected attribution is not proof of originality. No proprietary/unknown package has been silently relicensed. No complete source/binary/container redistribution review, legal opinion, or verification of every nested bundled component was performed.

## Ownership decisions still required

1. Confirm the legal holder(s) and rights of employment/contract contributors, if any; Git aliases alone are insufficient.
2. Approve the transition scope/version and notice wording. Do not assign “Ahmed Umer / Aqvion Labs” until supported.
3. Resolve EPL/LGPL/compound/absent-platform evidence for the intended distribution artifact; preserve corresponding source/notices as required.
4. Attach the content-rights evidence the owner offered, with per-version/per-asset links and no private student information.
