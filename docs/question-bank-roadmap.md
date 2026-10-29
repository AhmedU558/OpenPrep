# Growing the question bank

The local bank now has **1,028 stored questions and 1,017 practice-available questions** (2026-10-29). The expansion authored800 specifications, imported796 and made785 new items available while quarantining15; the original 232 were preserved. The numerical1,000-question milestone is complete. Medical/psychometric quality remains a separate backlog; see [actual results](question-bank-progress.md) and the [content-quality report](question-bank-content-quality.md).

| Total bank target | Controlled batch size | Priority and exit criteria |
|---|---:|---|
| 1,000 | Eight authored batches of 100, smaller accepted subsets when required | Achieved:1,028 stored/1,017 available. Next resolve the 15 quality holds and have qualified reviewers assess both initial and expanded content. Upgrade broad references and verify current US management applicability before clinical-quality claims. |
| 5,000 | Up to 100, or25 for difficult/high-risk topics | Add roughly4,000 reviewed, distinct items according to measured gaps rather than a fixed filler quota. Assign topic ownership and independent second review for disputed keys. Add immutable versions before altering content used in attempts. Use learner reports and measured item statistics only after enough real attempts exist. Benchmark search/import before infrastructure changes. |
| 10,000–50,000+ | Up to 100 with bounded processing and separate review | Add indexed lexical/concept candidate retrieval and editorial semantic review. Introduce a review queue and explicit provenance/version records. Set performance budgets from actual traffic and keep availability separate from medical approval. |

## Current architectural limits

- PostgreSQL/Prisma transactions already preserve batch atomicity and unique codes. The CLI's create-only mode provides safe retries without replacing option IDs. Run one importer at a time; cross-code near-duplicate preflight is not concurrency locked.
- `searchIds` computes English `to_tsvector` at query time and returns at most 5,000 IDs. Add a generated/indexed search vector plus GIN index and database-side pagination when measured search cost or result truncation requires it. Do not interpret the current 5,000-ID cap as an exhaustive result set at larger scale.
- Practice selection currently fetches all matching IDs before randomizing. Benchmark at 5,000 and replace with bounded server-side sampling when needed while retaining pool, topic and ownership semantics.
- Topic browsing uses a bounded-height checklist; practice has a topic select. Hundreds of topics are workable, but thousands need a searchable dependent taxonomy selector.
- Current expansion screening combines lexical trigram matching, local synonym-aware TF-IDF concept candidates, author comparison notes and explicit paired AI dispositions. It found repetitive/uncertain objectives that lexical checks missed. It remains quadratic and cannot identify every clinically equivalent item; indexed candidate retrieval and qualified editorial decisions are needed at larger scale.
- Existing admin updates replace option IDs, and attempts read current explanations. Versioned content is necessary before routine edits to published questions at scale. Do not use the general upsert importer as an immutable content release mechanism.

## Coverage and quality backlog

The initial discipline counts follow the requested distribution exactly, mapping internal medicine to `Medicine`, behavior/ethics to `Ethics`, epidemiology to `Biostatistics`, and OB/GYN to existing `Obstetrics`. Topic titles are intentionally fine-grained. Many are represented by a single item; single-item coverage is not mastery coverage.

The initial200 retain their estimated difficulty3. Available expansion questions now span levels1–4 under the author rubric; disputed high ratings were held. There are no original image-based questions, measured difficulty/discrimination, peer percentiles, calibrated score predictions or qualified medical approvals. Pediatrics, gynecology, psychiatry, geriatrics and microbial mechanisms gained coverage, but counts do not establish mastery coverage. Use the actual exam/subject/topic/difficulty/objective audits to plan the next blueprint. Current-guideline mapping, multi-step longitudinal cases, plausible close distractors and less-cued reasoning remain priorities. Preserve the 32 demos and their multiple-answer coverage.

No paid generation provider is required. The current utility assembles fully authored specifications; it does not autonomously create new medical vignettes. If an optional AI authoring provider is later added, keep it outside the core app, make credentials explicit, apply the same gates, and never publish directly from model output.
