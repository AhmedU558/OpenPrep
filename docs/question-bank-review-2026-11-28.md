# OpenPrep exam-alignment and question-quality audit — 28 November 2026

## Assessment

**The saved bank does not currently justify a claim of UWorld-equivalent quality or validated exam readiness.** There is broad subject coverage, but answer leakage, generic distractors, artificial difficulty assignment, mismatched question tasks/keys, incomplete clinical context, weak source mapping and insufficient exam-stage tagging are substantial problems. Passing the content schema is not evidence that a question is clinically correct or exam appropriate.

This was a read-only content audit. No questions, answer keys, availability, reviews, learner records, production configuration or deployment were changed. No qualified medical approval was recorded.

## Scope and limits

- Screened **56,994 unique saved question records** across 14 exam labels, using 679 input files/representations. This includes 52,772 international records, 3,000 retained USMLE candidates, 200 initial-bank items, all 800 expansion specifications, 190 separate Step 3 drafts and 32 legacy demos.
- The 15 expansion specifications absent from accepted generated JSON were reconstructed with the existing pure materializer for audit only. This did not import or reactivate them. Legacy records were normalized to the seed's content representation without running the seed.
- Every saved record received an individual structural/editorial screening record. **This is not an independent clinical review of every question.** Seventeen targeted individual items received focused AI editorial assessment; one repeated-objective pair was also inspected.
- Local PostgreSQL was unavailable (`ECONNREFUSED`). An enforced read-only production content snapshot did not complete and was stopped. **None of these totals is a newly verified production/available count.** Saved sources include drafts, holds and legacy material; stored records may differ.
- No learner tables were queried. No proprietary UWorld question text, paid QBank, answer keys or explanations were accessed.
- All reference claims remain unverified unless explicitly discussed below. Direct NICE HTML/PDF requests returned 403; relevant official-source indexed excerpts were obtained instead. This is not full-document retrieval or exhaustive claim mapping.

Private reproducibility artifacts are in `.release/question-review-20261128/`: `audit.py`, `supplemental.ts`, `items.json`, `summary.json`, `duplicate-groups.json`, `editorial-findings.json` and `deep-review-samples.json`. Artifacts do not contain learner records or credentials. The saved snapshot script was not used to produce a successful database export.

## Saved inventory

| Exam label | Saved items screened |
|---|---:|
| Step 1 | 4,004 |
| Step 2 CK | 4,000 |
| Step 3 | 2,690 |
| PLAB / UKMLA | 4,300 |
| AMC | 4,200 |
| MCCQE | 4,200 |
| FCPS | 4,200 |
| NLE | 4,200 |
| NEET PG | 4,200 |
| MRCP | 4,200 |
| MRCEM | 4,200 |
| SMLE | 4,200 |
| HAAD / DHA | 4,200 |
| UHS MBBS | 4,200 |
| **Total** | **56,994** |

The detailed JSON contains counts by exam, subject, system, difficulty and type. Subject counts alone cannot establish official blueprint proportions: official schemes can use overlapping disciplines and physician-task categories that this taxonomy does not independently map.

## Full-corpus screening results

Flags overlap and must not be added together. They identify review candidates, not a count of proven medically wrong questions.

| Screen | Items flagged | Interpretation |
|---|---:|---|
| Full normalized correct-option text of at least 20 characters also occurs in the stem | 50,277 | Strong answer-cue screen; confirm each case before revision. |
| Same complete set of at least three wrong-option texts reused in 100 or more items | 50,936 | 150 highly reused distractor sets. Clinical plausibility still needs item-specific assessment. |
| Difficulty equals `3 + (numeric question ID % 3)` | 50,685 | Numerical match is a flag, not proof for every record. Source inspection independently establishes that 94 scripts contain that assignment formula. |
| At least one homepage/collection-level reference | 45,116 | Specific claim support is not established by such a link. This screen does not detect every incomplete reference. |
| Correct option exceeds 1.7 times the median option length | 23,094 | Possible length cue; not an automatic failure. |
| Exact recent given-diagnosis template pattern | 5,700 | The screen deliberately detects one narrow wording pattern; other templates also exist. |
| Exact recent explanation-repeat template | 5,400 | Repeats the key and generic benefit statements rather than explaining this patient's reasoning. |
| Same-exam normalized objective and key repeated | 1,790 | 894 groups requiring semantic review. Related questions are not automatically duplicates. |
| Missing reference, topic and per-option rationale fields | 32 each | Historical demos; do not silently rewrite or reclassify them. Their existing source label also lacks explicit AI/unreviewed wording. |
| Normalized exact duplicate stems | 0 | Does not exclude semantic duplication. |

Example of real concept repetition: `intl-11993` and `intl-13093` repeat the same UK diabetes objective and treatment key while changing surface details and distractors. A new age, setting or option order does not establish a new tested decision.

No invalid SINGLE answer-key cardinalities were found in this screen. That only means a single option is marked correct, not that the marked option is defensible.

## Confirmed authoring-process problems

`scripts/assemble_intl_wave.py:252` inserts both the topic title and the answer-bearing `hallmark` into the stem. The same `hallmark` becomes the correct option at line 266. Line 255 assigns difficulty using the ID remainder. Lines 273–289 choose wrong answers from a shared general-purpose pool instead of deriving a clinical differential for that case. The main explanation repeats the topic and hallmark.

Examples `intl-50473`, `intl-50873` and `intl-50973` exhibit this behavior in the saved output. For example, the stable-angina stem explicitly states the CT-coronary-angiography decision that is subsequently offered as the correct answer. Alternatives concern TB treatment, DKA, antifungals and anticoagulation. That is weak answer matching, not difficulty-4 clinical prioritization.

The header in `content/bank/author.ts` describes a pure materializer that does not fabricate content. That remains true of that helper but does **not** describe these separate assembly scripts, which do construct medical stems, options and explanations from templates. Auditing only the materializer misses the content-generation defect.

## Priority item findings

These are AI editorial findings and indications for qualified medical adjudication, not clinician decisions. The full targeted ledger records all 17 individual cases.

| Item | Exam | Problem requiring correction/review |
|---|---|---|
| `intl-0049` | PLAB / UKMLA | ST-elevation case keys angiography within 72 hours without an onset/reperfusion constraint. That timing is associated with a selected unstable-angina/NSTEMI pathway, not a general acute-STEMI answer. |
| `intl-0050` | AMC | Selects immediate tenecteplase without establishing onset, PCI delay or fibrinolysis contraindications. Remote-care context appears in the topic but is not adequately supplied in the vignette. |
| `intl-0051` | MCCQE | Keys a beta-blocker as the initial step in a STEMI-like case without establishing prior reperfusion actions or relevant clinical constraints. |
| `intl-0052` | FCPS | Asks for definitive management but keys the complication ventricular septal rupture; no new murmur, shock or imaging finding establishes it. |
| `intl-0057` | SMLE | Treats nitroglycerin as the initial STEMI protocol without appropriate context; a UK ACS reference does not establish a Saudi-specific recommendation. |
| `intl-0058` | HAAD / DHA | Stem reports ST elevation while the answer labels the case NSTEMI, without context reconciling that contradiction. |
| `intl-0059` | UHS MBBS | Keys LAD occlusion with no ECG lead distribution or regional imaging to identify the artery. |
| `intl-0069` | MRCP | Selects ferric carboxymaltose without iron-deficiency results; references ACS rather than the relevant heart-failure/iron recommendation. |
| `intl-0095` | NLE | Asks for medical therapy but keys an irregular pulse finding. The answer category does not answer the question. |
| `intl-50473` | PLAB / UKMLA | Full correct answer is already supplied in the stem; unrelated distractors and a repeating explanation do not support difficulty 4. |
| `intl-50873` | MRCP | Given diagnosis and keyed discrimination text, with unrelated therapies as alternatives, do not support difficulty 5. |
| `intl-50973` | FCPS | Chest-tube insertion answer is supplied in the stem; wrong choices concern unrelated diseases; a CPSP homepage is not procedural evidence. |

Source checks for the clinical concerns above: indexed [NICE NG185 recommendations](https://www.nice.org.uk/guidance/ng185/chapter/Recommendations), sections 1.1.6 and 1.2.13, distinguish the relevant reperfusion pathways; indexed [NICE NG106 recommendations](https://www.nice.org.uk/guidance/ng106/chapter/recommendations/), sections 1.4.5–1.4.6, assess haemoglobin and iron studies before selecting IV iron for qualifying iron deficiency. Direct retrieval was blocked; record these as indexed-excerpt checks, not completed source verification. No universal treatment instruction is inferred from these item critiques.

## Exam alignment

| Track | Required distinction and current gap |
|---|---|
| Step 1 | Map integrated systems, foundational mechanisms, physician tasks and visual/data interpretation. A generic disease label plus unrelated clinical-management options is inadequate. [Official specifications](https://www.usmle.org/exam-resources/step-1-materials/step-1-content-outline-and-specifications). |
| Step 2 CK | Test diagnosis, diagnostic studies, prevention and management under clear constraints with plausible alternatives. Map both clinical content and physician tasks; subject totals cannot substitute. [Official specifications](https://www.usmle.org/exam-resources/step-2-ck-materials/step-2-ck-content-outline-specifications). |
| Step 3 | Distinguish independent-practice decisions, care setting, time course and CCS. The saved question collections audited here contain MCQs, not an independently evaluated CCS collection. [Official specifications](https://www.usmle.org/exam-resources/step-3-materials/step-3-exam-content) and [CCS](https://www.usmle.org/exam-resources/step-3-materials/step-3-test-question-formats/computer-based-case-simulations). |
| PLAB / UKMLA | Map the MLA content map and UK practice, and distinguish AKT knowledge questions from CPSA/clinical-skills assessment. Hospital names and NICE labels alone do not establish alignment. [GMC](https://www.gmc-uk.org/education/medical-licensing-assessment). |
| AMC | Distinguish MCQ knowledge/application from clinical assessment and substantiate Australian management assumptions. [AMC specifications](https://www.amc.org.au/examination-specifications). |
| MCCQE | Map dimensions of care and physician activities, not just organ systems and Canadian setting names. [MCC](https://mcc.ca/examinations-assessments/mccqe/). |
| FCPS | Specify part and specialty. One generic FCPS label cannot demonstrate alignment to every part or specialty. [CPSP guidelines](https://cpsp.edu.pk/examination-guideline). |
| MRCP | Specify Part 1, Part 2 or PACES. Five-choice MCQs can address a written component, not establish PACES skills coverage. [Part 1 format/blueprint](https://www.thefederation.uk/examinations/part-1/format). |
| MRCEM | Separate Primary, SBA and OSCE competencies. [RCEM](https://rcem.ac.uk/exam-regulations-policies/). |
| NLE | Clarify the intended examination, cohort and syllabus edition; PMDC's current public syllabus page lists NRE for foreign graduates. Do not silently equate all uses of NLE/NRE. [PMDC syllabi](https://www.pmdc.pk/Publication/Syllabus). |
| NEET PG | Map the applicable NBEMS bulletin and undergraduate disciplines. Detailed current item-by-item mapping remains unverified. [NBEMS](https://webdisk.natboard.edu.in/viewnbeexam?exam=neetpg). |
| SMLE | Map the SCFHS blueprint and local applicability, rather than relabeling UK or US management questions. [2026 official blueprint](https://scfhs.org.sa/sites/default/files/2026-05/Saudi%20Medical%20Licensure%20Examination%20%28SMLE%29%20Blueprint_2026.pdf). Full PDF was not independently mapped in this audit. |
| HAAD / DHA | Separate authority, professional category and applicable assessment specification. A single combined label is insufficient evidence of either authority's full blueprint coverage. A detailed current blueprint was not obtained. [DOH licensing information](https://www.doh.gov.ae/en/faq?CategoryID=20FCA485F85E49F49C9FB2F9ECD273C7). |
| UHS MBBS | Specify curriculum version, year/module and assessment type. [UHS integrated curricula](https://uhs.edu.pk/curriculam.php) and [model papers](https://www.uhs.edu.pk/Examination/model-paper.php). |

The official sources were used for an alignment framework, not to certify that each question meets each syllabus. Complete versioned blueprint mapping remains outstanding for every track. No commercial equivalence, board endorsement or calibrated exam score is established.

## UWorld benchmark and remediation order

[UWorld's public description](https://medical.uworld.com/our-difference/best-resources-for-usmle/) emphasizes clinical cases, explanation of both correct and incorrect choices, and exam-specific formats including Step 3 CCS. These are useful public benchmarks, not independent evidence of head-to-head parity. No question-by-question comparison against proprietary UWorld material was performed.

1. Prioritize clinical/key/task contradictions, especially ACS/reperfusion and treatment-selection items. Recommend owner/editor review of availability for these cases; this audit changed none.
2. Stop using answer-bearing stem templates, ID-based difficulty and unrelated distractor pools for new content. Rewriting must create a coherent clinical problem and plausible same-category alternatives.
3. Reassess difficulty using the existing shortest-valid-solution rubric. Do not merely redistribute numbers or equate length and rarity with difficulty.
4. Resolve repeated objective/key groups and map each retained question to its actual exam stage, blueprint domain, physician task and jurisdiction.
5. Map decisive claims and distractor exclusions to accessible, specific source passages. Generic organization homepages are not sufficient; source retrieval and qualified medical review are still required.
6. Preserve saved versions, option identities and historical attempts when making future corrections. Keep AI-authored/medically-unreviewed labels; do not manufacture approval records.

No application tests were run: this audit changed no application behavior. Validation consisted of corpus parsing, individual screening, duplicate-group construction, source-process inspection and consistency checks on the resulting reports. No production counts, authenticated practice flow, full-bank medical correctness, exhaustive semantic deduplication or empirical difficulty calibration was verified.
