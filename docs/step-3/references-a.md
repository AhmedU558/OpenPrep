# Cardiovascular authoring checkpoint

2026-10-30. This is a partial authoring checkpoint, not clinical approval, import approval, or a completed 100-item batch.

`content/step3/batch-01.ts` currently exports **60** individually authored cardiovascular candidates, `op-s3-0001`–`op-s3-0060`. There are **25 diagnosis, 26 management and 9 applied-foundational-science** items. **20** substantively test nutrition. Remaining ownership: 40 cardiovascular, 90 respiratory, 50 renal and 60 endocrine candidates; batches02 and03 have not been created by this worker.

The helper supplies metadata, identifiers and unreviewed provenance only. It does not generate clinical stems, facts, answer options or rationales. The intended answer is the first authored choice and is rotated only by the existing materializer.

## Reference access and limits

Public ACC/AHA, NIH/NHLBI/ODS, FDA/DailyMed, VA, NICE and GeneReviews pages or search extracts were accessed before authoring. Every item records specific URLs and titles. Working access and search indexing do not prove exact-claim support or currency. Several full JACC DOI requests returned HTTP403; the material cites an accessible official summary where available and retains an explicit limitation for the myocarditis extract. No proprietary question bank or official sample question was used as authoring material.

Key accessible sources include:

- [AHA/ACC/HFSA heart-failure slide set](https://www.heart.org/-/media/832EA0F4E73948848612F228F7FA2D35.pdf).
- [ACC chronic coronary disease perspectives](https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2023/07/17/19/06/2023-guideline-for-chronic-coronary-disease-gl-ccd).
- [NHLBI DASH](https://www.nhlbi.nih.gov/health/dash-eating-plan), [ODS thiamin](https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/), [ODS vitamin K](https://ods.od.nih.gov/factsheets/vitaminK-HealthProfessional/), [ODS magnesium](https://ods.od.nih.gov/factsheets/magnesium-HealthProfessional/) and [ODS iron](https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/).
- [ACC HCM guideline points](https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2024/05/06/15/12/2024-hypertrophic-cardiomyopathy-gl), [PAD guideline points](https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/05/09/15/00/2024-guideline-for-lower-extremity-pad), [aortic disease perspectives](https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2022/11/01/12/21/2022-Guideline-on-Aortic-Disease-2-gl-ad), [perioperative points](https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/09/23/04/15/2024-aha-acc-perioperative-guideline-gl), [cardiac amyloidosis points](https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2023/01/19/14/49/2023-acc-consensus-on-cardiac-amyloidosis).
- [AHA mechanical infarct complications scientific statement](https://pmc.ncbi.nlm.nih.gov/articles/PMC9364424/).
- [FDA grapefruit interactions](https://www.fda.gov/consumers/consumer-updates/grapefruit-juice-and-some-drugs-dont-mix), [NCCIH licorice safety](https://www.nccih.nih.gov/health/licorice-root), [VA warfarin nutrition](https://www.nutrition.va.gov/NUTRITION/docs/UpdatedPatientEd/Warfarin_2022.pdf), [NICE nutrition support](https://www.nice.org.uk/guidance/cg32/chapter/Recommendations).
- [AHA/AAP2025 pediatric tachyarrhythmia algorithm](https://www.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Algorithms/Algorithm-PALS-Tachyarrhythmia-250117.pdf), [NHLBI long QT](https://www.nhlbi.nih.gov/health/long-qt-syndrome), [GeneReviews LPL deficiency](https://www.ncbi.nlm.nih.gov/books/NBK1308/).

2026 dyslipidemia guidance was discovered during research. None of the60 candidates uses the older2021 hypertriglyceridemia summary or asserts its treatment thresholds as current.

## Concrete review flags

- 0006: verify detailed high-output beriberi phenotype in a dedicated clinical source; ODS is nutrient background.
- 0012 and0027: verify the full AF alcohol/weight recommendations; the linked AHA hub is not the full recommendation text.
- 0024: verify licorice hormonal pattern and11β-HSD2 mechanism in a dedicated endocrine source.
- 0025: NICE is UK guidance; verify the refeeding mechanism and applicable US nutritional practice. No dosage is supplied.
- 0029: the supporting VA sodium evidence concerns acute inpatients; ambulatory applicability requires review.
- 0043: the adenosine algorithm supports clinical use but is not a complete electrophysiological mechanism reference.
- 0046: full myocarditis article may be restricted; verify cardiac MRI criteria and applicability beyond the retrieved extract.
- 0053: directly verify the severe-anemia/high-output relationship; retrieved iron and hemodynamic summaries do not fully establish that pairing.
- 0054 and0059: source summaries are broader than the specific pressure physiology/vasospasm diagnostic claims; verify dedicated sections.
- Semantic candidates retained:0021 versus0022 (warfarin counseling versus mechanism);0015 versus0040 (amyloid subtype workup versus initial phenotype);0028 versus the historical rapid-fluid-weight-gain objective (nutrition-assessment error versus warning-sign recognition). These are potential related objectives, not claims of independent clinical approval.

All60 remain AI-authored and medically unreviewed with UNVERIFIED rights and no delivery/export permission. No clinician identity or approval was invented.

## File-only checks

- All60 materialized records pass `questionContentSchema`; four distinct options and exactly one materialized correct key each.
- Codes are contiguous0001–0060; all60 concepts and objectives are unique within this subset.
- Minimum word counts:55 stem,82 main explanation,18 individual option rationale.
- Normalized exact stem/objective comparison against all1,028 entries in the private read-only existing-corpus snapshot found no matches. No stored content was copied into these notes.
- Pairwise stem trigram Jaccard against the snapshot and the authored60 has maximum0.061. This lexical screen does not establish semantic distinctness; root-owned semantic screening remains required.
- `npx tsc --noEmit --pretty false` passed after the60-item addition; subsequent edits only added clinical stem details, then the full file-only schema/word-count/exact/trigram assertions passed again.

No database, migration, hosted application, production/staging system, commit, push or deployment was accessed by this worker.
