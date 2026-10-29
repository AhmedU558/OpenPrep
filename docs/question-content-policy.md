# Question content policy

## Expansion review rules

The `op26x-XXXX` collection follows the same original/AI-authored/medically-unreviewed provenance and CC-BY-SA-4.0 license. New author ratings must follow [question-difficulty-rubric.md](question-difficulty-rubric.md); the previous232 records are preserved, including their provisional ratings. Neither a cognitive tag nor a populated reference establishes medical accuracy.

`docs/question-bank-content-quality.md` and `content/bank/expansion/reports/final-verification.json` identify per-item unverified support, broad references, UK-to-US applicability checks, semantic comparisons and explicit key/rating concerns. Every item still needs qualified medical review. Independent AI recalculation or critique must be described as such and never entered as a clinician approval.

After import, uncertain versions stay immutable. The local workflow can move them to REVIEW without replacing options or erasing attempts. Corrected materially different versions need new stable IDs and a reviewed transition; do not change a persisted payload to make its create-only retry pass. A known duplicate, ambiguous starting condition or inflated cognitive rating is a reason to withhold availability even if the item passes structural validation.

## Provenance and permitted use

The `op26-0001`–`op26-0200` collection is independently worded AI-assisted original educational content, licensed **CC-BY-SA-4.0**, attributed to OpenPrep contributors. No UWorld questions, explanations, options, diagrams, or authenticated material were used. No images are included. The MIT software license is separate from the content license.

Every item stores the provenance statement `OpenPrep original; AI-authored; medically unreviewed` in `source`, plus `license`, `attribution`, a learning objective, takeaways, and linked further reading. Stems, options and rationales are explicitly authored specifications; the offline materializer only assigns stable codes, rotates answers and attaches metadata. It does not generate clinical facts from templates or call a paid API.

References are reading links, not copied/adapted question sources or permission to reproduce source material. NCBI hosting does not imply public domain: check the individual book and asset licenses before any future reuse. OpenStax currently describes Anatomy and Physiology 2e as CC BY-NC-SA 4.0; this collection references the book but does not adapt its wording or diagrams. Do not redistribute a restricted adaptation under this collection's license.

Bibliographic identities were checked through publisher/NIH/CDC/WMA pages or their indexed records. Some NCBI direct requests returned human verification; no attempt was made to bypass it. Many links are **book-level further reading**, not paragraph-specific validation of every factual assertion. Several textbooks are older editions. Detailed chapter mapping and current clinical guideline verification remain medical-review tasks.

## Availability and clinical review are separate

All 200 are **medically unreviewed**. No clinician review, clinical validation, calibrated difficulty, board endorsement or professional-platform equivalence is claimed. Difficulty 3 is an initial author estimate for every item, not a psychometric result.

The initial local import used the existing admin publishing transition to make the requested questions accessible in practice. `PUBLISHED` is an application availability status, not certification of medical correctness. The source label, browser badge, exam badge, and admin reminder disclose AI authorship and lack of review. Default batch import still creates DRAFT items; `--local-practice` is an explicit local-only option used for this milestone. This is not a public website release.

## Required medical review

1. In `/admin/questions`, search a stable code or select published items. An admin can **Unpublish to review**; editors can then edit REVIEW items.
2. A qualified medical reviewer checks the stem, one-best-answer validity, every distractor, the mechanistic explanation, objective, and ambiguity or missing clinical context. Review ethics items for jurisdiction-specific claims. Check formulas independently for numerical items.
3. Add current, specific chapter/guideline references. Distinguish clinical recommendations from physiology and avoid unsupported absolute rules.
4. Record code, source-file SHA-256, reviewer name and qualification, date, findings, evidence, decision, and reviewed version in `content/bank/reviews.json` when reviews actually occur. Never invent a reviewer or populate a passing review automatically. No review ledger exists yet because no medical review has occurred.
5. Keep the AI-authorship provenance. Do not remove unreviewed notices until the qualified review and the corresponding UI disclosure have been updated consistently. An admin decides availability through the existing audited workflow.

Do not change published answer options casually: existing attempts refer to option IDs and current content. The batch command refuses changes to an existing code. For a clinically material revision, author a new stable code and archive the old item after considering existing attempts. The existing general-purpose admin editor can replace option IDs; it is not an immutable versioning system.

## Quality gate

`bankQuestionSchema` requires 4–5 distinct options, exactly one correct option, a substantive stem/explanation, a rationale for each choice, an objective, takeaways, a topic, approved taxonomy, linked references, attribution, license, and explicit AI/unreviewed provenance. Structural validation cannot establish medical truth or plausible distractors. Normalized exact and trigram Jaccard similarity checks quarantine candidate duplicates at >=0.65; human review must also detect semantic duplicates and topic overconcentration.

No credentials, patient data, proprietary content, or paid API is needed for authoring. Vignettes are synthetic. These items are educational exercises and should not direct individual patient care.
