# USMLE image-question pilot

Three independently written questions use licensed clinical teaching exhibits. They are **AI-authored and medically unreviewed**; the vignettes are synthetic and are not the source patients' histories. These are local review candidates, not medically approved or production-published questions.

| Code | Track | Exhibit | Provisional difficulty |
|---|---|---|---:|
| op-img-s1-0001 | Step 1 | Peripheral blood film | 2: mechanism application |
| op-img-s2-0001 | Step 2 CK | Frontal chest radiograph | 3: clinical and image integration |
| op-img-s3-0001 | Step 3 | ECG | 4: interpretation, risk calculation and prevention constraints |

`batch-01.json` uses the existing admin question-import contract. The existing exam viewer already supports enlarged images; no new viewer or production route was added. New stable codes preserve the existing bank. The create-only importer was used for disposable PostgreSQL verification, with full-field read-back and a retry checking unchanged option identities. Real publication must use the existing review/release controls; the test fixture's approvals do not authorize a real release.

## Image licensing and credit

All files in `public/question-images/usmle/` are standard 1280-pixel Wikimedia thumbnails downloaded from the URLs recorded in `manifest.json`. OpenPrep did not crop, annotate, recolor, synthesize or otherwise edit them. Thumbnail resizing was performed by Wikimedia. Local filenames do not disclose the diagnoses.

- `exhibit-01.jpg`: Dr Graham Beards, [Sickle cells in blood](https://commons.wikimedia.org/wiki/File:Sickle_cells_in_blood.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- `exhibit-02.jpg`: Mikael Häggström, [Expired X-ray of pneumothorax](https://commons.wikimedia.org/wiki/File:Expired_X-ray_of_pneumothorax.jpg), [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). The source page reports consent for publication.
- `exhibit-03.jpg`: Dan D. Ric, [Atrialfibrillation](https://commons.wikimedia.org/wiki/File:Atrialfibrillation.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

The original question text is CC BY-SA 4.0. Image licenses remain as listed above; the software's MIT license does not replace them. Each explanation includes image credit, source and license links after answering. Alt text describes visual observations without naming the diagnosis. No creator endorsement is implied. File-page license declarations were checked on 28 November 2026; this is not an independent legal opinion.

Creator and license credits are also present before answering. Do not replace image bytes at an existing exhibit path: use a new asset name and the existing immutable question-revision/new-code workflow for later corrections.

## Evidence and review boundary

The consulted [NHLBI mechanism reference](https://www.nhlbi.nih.gov/health/sickle-cell-disease/causes), [MSD diagnostic reference](https://www.msdmanuals.com/professional/pulmonary-disorders/mediastinal-and-pleural-disorders/pneumothorax) and [ACC guideline summary, point 4](https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2023/11/27/19/46/2023-acc-guideline-for-af-gl-af) support the central teaching points. Their presence does not verify every distractor or constitute qualified image interpretation. Before real learner publication, obtain qualified review of image–vignette consistency, key validity, distractor exclusions, US applicability and difficulty. Existing related concepts elsewhere in the bank also require editorial overlap review; no exhaustive semantic-uniqueness claim is made.

The local study database was found to use an older schema. It was not migrated, reset, seeded or written during this pilot. Database and browser verification use a separate newly created loopback `openprep_images_test` database. Production was not accessed or deployed for this work.

## Checks

The unit suite validates schema/key integrity, image hashes, credit/license links and obvious answer-text leakage. The integration case verifies real create-only import, DRAFT/unverified status, full read-back and preserved options on retry. The browser case verifies all three exhibits in desktop and mobile practice, enlargement, scoring and visible image attribution using isolated test-only fixture permissions.

Run unit checks with `npx vitest run --config vitest.unit.config.ts tests/unit/usmle-images.test.ts`. Integration/browser runs must set `TEST_DATABASE_URL` to a disposable loopback database ending in `_test`, distinct from the study database. The shared test setup resets only that explicitly selected test database; never point it at production or personal study data.
