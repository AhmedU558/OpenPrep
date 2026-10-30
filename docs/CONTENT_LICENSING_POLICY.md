# Educational content licensing and provenance

Software and educational prose have separate licenses. Software currently retains MIT; AGPL-3.0-only is the intended transition pending verified rights. Original educational content keeps its separately recorded license, third-party content keeps its original terms, and public-domain material needs evidence of that status. An online question, citation, or government-hosted page is not automatically public domain.

## Inventory and evidence

| Collection | Locations / evidence | Classification | Rights and review state |
|---|---|---|---|
| 30 legacy single-answer demos | `legacy/questions.js`, imported by `prisma/seed.ts` | Declared original contributor work | Recorded CC-BY-SA-4.0; owner confirms redistribution rights; supporting authorship/license evidence pending |
| 2 multiple-answer demos | `prisma/seed-data/multiple.ts` | Declared original contributor work | Same declaration and attestation; no independent chain-of-title evidence |
| First 200 bank items | `content/bank/batch-01.ts` through `batch-08.ts`, generated JSON and author helper | Declared original AI-authored synthetic vignettes | CC-BY-SA-4.0 / OpenPrep contributors; medically unreviewed |
| 800 expansion specifications | `content/bank/expansion/batch-09.ts` through `batch-16.ts` | Declared original AI-authored synthetic vignettes | 785 accepted generated JSON entries plus 200 initial entries = 985 generated records; quality holds and non-materialized candidates remain in source/reports |
| References and reading links | Per-item `references` | External bibliography, not copied content permission | Individual source rights apply; book-level links do not establish clinical accuracy or adaptation rights |
| Logo and UI graphics | `src/components/logo.tsx`, CSS; no tracked raster/media collection discovered | Project branding with unresolved holder | Separate trademark/asset review; see TRADEMARK_POLICY.md |
| Third-party/public-domain question collections | None identified as an intentionally imported collection in this repository review | Not established | Do not infer that none could exist in a private database; no DB content inspection performed |
| Private/admin imports and user notes | Operator-controlled databases, not bundled snapshots | User or third-party content | Not licensed by this repository; never publish user records or notes as fixtures |

The [per-item provenance inventory](audit/content-provenance.json) records stable code, original file, declared source/license/attribution, linked references, image field and SHA-256 for every tracked generated item without duplicating vignettes or accessing private data. It is a record of declarations and the owner's 2026-10-30 attestation, not an independent rights certification. No images occur in those 985 generated items or the 32 seed/legacy demos. Future assets require review individually. Inspect original source files as well as generated materializations before any content release.

## Rights review and distribution gate

For each new contribution, record author/rightsholder, source URL or original-author statement, exact license/version, license evidence and retrieval date, attribution and change notices, all incorporated assets, AI tools/terms where applicable, clinical reviewer status, and stable content/version hash. Store public-safe evidence beside the contribution; keep contracts and private contact details privately. A maintainer must verify permission to redistribute before publication. DCO certification helps establish contributor responsibility; it does not establish medical accuracy or transfer ownership.

Unknown or disputed ownership must remain withheld from learner delivery, public exports and releases. New imports arrive as DRAFT; preserved legacy publication status alone never supplies rights approval. Preserve payloads and attempts; do not erase records or rewrite a published question just to resolve a license flag. Use an approved versioned correction and existing audited status workflow only on an instance the operator has authorized you to change. Clinical and rights approval are separate decisions. `PUBLISHED` alone does not permit delivery: verified delivery rights are also required. Neither state certifies clinical accuracy.

**Phase 2 technical enforcement implemented locally:** separate admin evidence/decision fields and delivery/export scopes now gate publication, content exports, learner delivery, AI context and provenance-linked study derivatives. Imports and CC declarations cannot verify rights. Existing records default UNVERIFIED without erasure; attempts and study references prevent in-place source replacement. Source-file distribution also has a hash/scope preflight, currently blocked by missing real approvals. See [CONTENT_RIGHTS_ENFORCEMENT.md](CONTENT_RIGHTS_ENFORCEMENT.md). This is not a legal approval or a production deployment.

The repository and hosted site already contain content; a local policy cannot withdraw already public Git history or change live availability. Review any requested takedown with the owner before changing hosting, visibility or history. Existing content was preserved as instructed. All supplied content-rights confirmations are recorded; supporting evidence remains outstanding.

## Medical quality and privacy

Retain AI-authored and medically-unreviewed labels, specific review holds and current limitations in [question-content-policy.md](question-content-policy.md). References are further reading; no clinical validity, calibrated difficulty, commercial-board equivalence or exam-board endorsement is claimed. Never import real patient cases or private student data without separately assessed rights, consent and privacy controls. Fixtures use synthetic accounts and content; no production database is needed for installation or testing.

For a content-rights concern, do not disclose private contracts or personal data in an issue. The private reporting contact is currently unconfigured; see SECURITY.md. Maintainer review and a confidential channel are required before sensitive evidence is submitted.
