# Step3 content-quality report

Snapshot: 2026-10-30T14:56:23.034Z. Authored **190/1,000**; structurally valid **190**; hard duplicate/structural holds **0**. Human-approved0; practice-ready0.

This is an AI-authored, medically unreviewed candidate bank. It does not establish commercial-platform equivalence, clinical accuracy, legal permission or psychometric calibration. Automated validation routes items into review, not into learner delivery.

## Coverage

| Primary category | Target | Authored | Missing |
|---|---:|---:|---:|
| biostatistics | 120 | 0 | 120 |
| cardiovascular | 100 | 70 | 30 |
| neurological | 90 | 50 | 40 |
| respiratory | 90 | 0 | 90 |
| reproductive | 80 | 60 | 20 |
| ethics | 80 | 0 | 80 |
| gastrointestinal | 70 | 0 | 70 |
| multisystem | 80 | 0 | 80 |
| endocrine | 60 | 0 | 60 |
| musculoskeletal | 60 | 0 | 60 |
| behavioral | 50 | 10 | 40 |
| renal | 50 | 0 | 50 |
| skin | 50 | 0 | 50 |
| human-development | 20 | 0 | 20 |

Subtopic, subject, system, objective, cognitive rating, task, setting, age-group and service-line counts are in [coverage-matrix.json](coverage-matrix.json). Nutrition is substantively tagged on51 items toward170 overlapping items. A tagged count is not proof of educational mastery.

## Automated findings

- clinical-review: 190
- rights-review: 190
- absolute-claim: 18
- numeric-units: 9
- author-concern: 94
- reference-specificity: 6

All190 require qualified review of factual support, current recommendations, numerical assumptions, contraindications, answer uniqueness and distractors. Unsupported claims are **not comprehensively detectable by software**; pending support must not be described as independently verified. The semantic screen uses existing normalized trigram and synonym-aware TF-IDF methods; it is neither an embedding model nor exhaustive clinical-equivalence analysis.

Real source URLs and candidate mappings are in [reference-review-queue.json](reference-review-queue.json); author notes record access limitations, including blocked/full-text pages and guideline updates. Book/guideline hubs, absolute rules and numerical claims are flagged. A2026 ACOG update was identified during authoring; related candidates retain specific evidence limitations. Neither citation presence nor AI critique certifies medical accuracy.

## Items with additional findings

- **op-s3-0002**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction. | numeric-units: Independently recalculate numerical claims and check units/assumptions.
- **op-s3-0003**: numeric-units: Independently recalculate numerical claims and check units/assumptions.
- **op-s3-0006**: numeric-units: Independently recalculate numerical claims and check units/assumptions. | author-concern: Human reviewer should verify the high-output phenotype against a dedicated clinical beriberi source; ODS provides nutrient-deficiency background rather than this full diagnostic algorithm.
- **op-s3-0008**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.
- **op-s3-0011**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.
- **op-s3-0012**: author-concern: The linked AHA hub confirms the guideline but the reviewer must open its full alcohol risk-factor recommendation for exact-claim support.
- **op-s3-0022**: author-concern: Shares the warfarin-diet domain with op-s3-0021 but tests causal mechanism rather than dietary counseling; semantic reviewer should confirm useful distinction.
- **op-s3-0024**: numeric-units: Independently recalculate numerical claims and check units/assumptions. | author-concern: Reviewer should verify the detailed 11β-HSD2 mechanism and hormonal pattern against a primary endocrine reference; NCCIH supports the exposure hazard.
- **op-s3-0025**: reference-specificity: A broad source needs section/claim-level checking. | author-concern: NICE is UK guidance; a US nutrition-support reviewer should verify the mechanism and local management protocol before approval.
- **op-s3-0026**: numeric-units: Independently recalculate numerical claims and check units/assumptions.
- **op-s3-0027**: author-concern: Full weight-management recommendation and its eligibility/target should be verified in the linked guideline; no exact weight-loss threshold is claimed here.
- **op-s3-0028**: author-concern: Overlaps the existing corpus rapid-weight-gain warning-sign domain; retain for semantic review because the tested distinction is nutrition-assessment error, not recognition alone.
- **op-s3-0029**: author-concern: VA evidence review concerns hospitalized acute HF; extrapolation to this ambulatory nutrition scenario requires specialist review.
- **op-s3-0040**: author-concern: Related to op-s3-0015; this tests initial phenotype recognition, whereas that item tests the required subtype workup. Retain for semantic review.
- **op-s3-0043**: author-concern: The algorithm supports acute adenosine use but not the full cellular mechanism; electrophysiology reference review remains required.
- **op-s3-0044**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.
- **op-s3-0045**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.
- **op-s3-0046**: author-concern: Public search extract accessed; full JACC article access may be restricted. Human reviewer must verify MRI criteria and exact reference support before approval.
- **op-s3-0047**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.
- **op-s3-0051**: numeric-units: Independently recalculate numerical claims and check units/assumptions.
- **op-s3-0052**: reference-specificity: A broad source needs section/claim-level checking.
- **op-s3-0053**: author-concern: The retrieved hemodynamic summary did not explicitly list anemia; reviewer must verify the severe-anemia high-output linkage in a dedicated clinical source.
- **op-s3-0054**: author-concern: Guideline summary supports AR assessment but detailed pressure-waveform physiology requires direct textbook or primary-review verification.
- **op-s3-0059**: author-concern: The linked guideline summary is broader than its vasospastic-angina section; exact diagnostic criteria require full guideline or dedicated consensus verification.
- **op-s3-0061**: author-concern: Reviewer must verify the exact chosen agent and staged pressure targets against the complete guideline; the item intentionally avoids a numeric titration prescription.
- **op-s3-0066**: numeric-units: Independently recalculate numerical claims and check units/assumptions.
- **op-s3-0067**: numeric-units: Independently recalculate numerical claims and check units/assumptions. | author-concern: The classification should be cross-checked directly against the Universal Definition of MI; the ACS reference is not a substitute for verifying its formal diagnostic criteria.
- **op-s3-0301**: author-concern: The cited US rehabilitation guideline is from 2016; reviewer must confirm current acute-stroke screening workflow.
- **op-s3-0302**: author-concern: Confirm contemporary US guidance on gastrostomy timing and local nasogastric-placement contraindications.
- **op-s3-0303**: author-concern: Direct AHA statement access returned403; bibliographic identity and every diagnostic claim require independent confirmation.
- **op-s3-0304**: author-concern: Verify current second-line status protocol and equivalent alternatives; source overview does not establish dosing.
- **op-s3-0305**: author-concern: Reviewer should confirm the monitoring indication without implying one universal postictal time cutoff.
- **op-s3-0306**: author-concern: Search portal is not a fixed product label; reviewer must attach exact current labeling and verify carnitine indications.
- **op-s3-0307**: author-concern: Parenteral regimen and magnesium replacement need current local specialist guidance; no dose is specified.
- **op-s3-0308**: author-concern: Verify zinc exposure interpretation, copper biomarkers and replacement approach; biomarker limitations remain important.
- **op-s3-0309**: author-concern: Australian regulatory source does not define US intake policy; exact dose-response and recovery claims need review.
- **op-s3-0310**: author-concern: Overlaps B12 domain with existing bank but tests metformin-associated evaluation rather than nitrous oxide or immediate replacement; semantic review required.
- **op-s3-0311**: author-concern: Reviewer should verify biochemical specificity and avoid treating thiamine response as a standalone diagnostic test.
- **op-s3-0312**: author-concern: Vitamin E assay interpretation and replacement formulation in malabsorption require specialist verification.
- **op-s3-0313**: author-concern: Direct NINDS page access returned403; attach authoritative medication-specific evidence for the levodopa-protein interaction before approval.
- **op-s3-0314**: author-concern: Confirm current AASM route-of-replacement recommendations and monitoring before clinical use.
- **op-s3-0315**: author-concern: Confirm current US antitoxin access pathway; infant botulism requires a different product and pathway.
- **op-s3-0316**: author-concern: CDC2006 report accessed; species and geographic differences and individual recovery intervals still require review.
- **op-s3-0317**: author-concern: Direct source access returned403; verify current treatment timing, IVIG contraindications and alternatives with a professional guideline.
- **op-s3-0318**: author-concern: Attach a current US professional guideline for malignancy-screening modality and follow-up interval.
- **op-s3-0319**: author-concern: Medication-specific risk and replacement strategy need authoritative current labeling or specialty guidance; broad overview is insufficient.
- **op-s3-0320**: author-concern: Historical AAN document requires current evidence review, especially procedural timing, respiratory support and survival claims.
- **op-s3-0321**: author-concern: Broad guideline directory is insufficient final evidence; attach current acute-stroke guideline and anticoagulant-specific selection protocol.
- **op-s3-0322**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction. | author-concern: Confirm imaging protocol and avoid implying that every isolated Horner syndrome has this cause.
- **op-s3-0323**: author-concern: IDSA2015 guideline page accessed; confirm currency and scope because vertebral infection guidance does not cover every epidural abscess scenario.
- **op-s3-0324**: author-concern: Direct NINDS page access returned403; verify spinal vascular pattern and current postoperative rescue protocols separately.
- **op-s3-0325**: author-concern: Direct AHA guideline access returned403; surgical selection and ventricular-drain strategy require specialist claim review.
- **op-s3-0326**: author-concern: Direct AHA guideline access returned403; verify bibliographic identity and current terminology; no specific hemodynamic intervention is prescribed.
- **op-s3-0327**: author-concern: Direct NINDS page access returned403; verify imaging selection and contemporary evaluation of all acquired third nerve palsies.
- **op-s3-0328**: author-concern: AAO-HNS guideline page accessed and identifies2013 publication; verify currency and exact eye-protection instructions.
- **op-s3-0329**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction. | author-concern: Direct NINDS page access returned403; reviewer must validate the reference, treatment evidence and diagnostic distinctions.
- **op-s3-0330**: author-concern: Verify current cluster-specific flow, delivery and safety protocol; broad booklet does not establish all implementation details.
- **op-s3-0331**: author-concern: Confirm contemporary imaging and lumbar-puncture sequence and the exact medication association using specialty guidance.
- **op-s3-0332**: author-concern: Route and regimen for threatened vision, biopsy timing, and guideline currency require direct specialist verification.
- **op-s3-0333**: author-concern: Prevention guideline is not a diagnostic-classification source; attach current headache diagnostic criteria before approval.
- **op-s3-0334**: numeric-units: Independently recalculate numerical claims and check units/assumptions. | author-concern: Replace search portal with a fixed current official label and verify urinary-chemistry claims.
- **op-s3-0335**: author-concern: Source page accessed, but exact diagnostic duration criteria and exclusion strategy still require review; no dietary sodium target is asserted.
- **op-s3-0336**: author-concern: Confirm current specialty guidance on timing, steroid options, contraindications and retrocochlear assessment.
- **op-s3-0337**: author-concern: Exact MRI/CSF criteria and antibody-testing indications require current neuroimmunology review.
- **op-s3-0338**: author-concern: Original proposed NEI URL returned404 and was replaced with indexed AAO professional education; full physiological claim review remains pending.
- **op-s3-0339**: author-concern: Source overview does not independently verify every tract-level assertion; anatomical claim review required.
- **op-s3-0340**: author-concern: Canonical URL resolved and page accessed; individualized repeat-risk and onset interpretation require genetics review.
- **op-s3-0341**: author-concern: Overview source does not establish regimen or repeat-PCR rules; current infectious-disease guidance must verify those claims.
- **op-s3-0342**: reference-specificity: A broad source needs section/claim-level checking. | author-concern: Verify current US HIV recommendations, drainage targets and contraindications; no fixed drainage volume is asserted.
- **op-s3-0343**: author-concern: Confirm current diagnostic sensitivity and atypical enhancement patterns, particularly with immune reconstitution.
- **op-s3-0344**: author-concern: Imaging and IgG cannot definitively exclude lymphoma; verify the intended presumptive-diagnosis framing and response-based reassessment strategy.
- **op-s3-0345**: author-concern: Broad NIH overview is insufficient for abscess procedural guidance; attach current neurosurgical/infectious-disease guideline before approval.
- **op-s3-0346**: author-concern: Reviewer must verify mechanistic wording and distinguish this objective from existing infection-triggered pseudo-relapse content.
- **op-s3-0347**: author-concern: Appropriate home versus laboratory testing selection and cognitive-outcome claims need current sleep-medicine review.
- **op-s3-0348**: author-concern: Formal sleep-test preparation and diagnostic criteria require current specialty verification; syndrome remains presumptive.
- **op-s3-0349**: author-concern: ASA statement page accessed and identifies2021 obstetric committee origin; verify applicability to diagnostic LP, current terminology and blood-patch indications.
- **op-s3-0350**: author-concern: Verify current label and product equivalence, renal dosing and EEG indications; no dose or dialysis threshold is specified.
- **op-s3-0391**: author-concern: Formal diagnostic exclusions, pediatric growth assessment and treatment planning require qualified review.
- **op-s3-0392**: author-concern: Formal criteria and differential diagnosis require current diagnostic reference review; avoid equating all overeating with binge-eating disorder.
- **op-s3-0393**: author-concern: Verify current treatment choices and adverse-effect differential; no particular adjunctive drug is prescribed.
- **op-s3-0394**: author-concern: Formal criteria, neurological mimics and challenge-test interpretation require specialist review.
- **op-s3-0395**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction. | author-concern: Verify current fentanyl-era initiation guidance and avoid implying that standard withdrawal-based induction is the only acceptable strategy.
- **op-s3-0396**: author-concern: Verify acute medication-holding decisions, laxative contraindications and local emergency assessment protocol.
- **op-s3-0397**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction. | author-concern: Guideline notes limited comparative evidence for schedules; no fixed taper percentage or interval is asserted.
- **op-s3-0398**: author-concern: Confirm contemporary protocol, hepatic-disease drug selection and appropriate severity monitoring; no dose or scale is prescribed.
- **op-s3-0399**: author-concern: Broad overview does not establish agent-specific metabolic risks or switching strategy; add current specialty guidance and exact drug context during review.
- **op-s3-0400**: author-concern: Verify current boxed warning, product label and emergency skin-reaction guidance; no rechallenge recommendation is made.
- **op-s3-0606**: author-concern: 2026 ACOG update was located; clinician must verify the current full-text pathway. The older 2018 guidance is supplementary, not claimed as the sole current authority.
- **op-s3-0610**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.
- **op-s3-0611**: author-concern: The source is older guidance; clinician must verify whether a newer local or national exposure pathway supersedes it.
- **op-s3-0614**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.
- **op-s3-0615**: author-concern: Semantic candidate op26x-0632 tests diagnosing candidiasis from pH and microscopy. This candidate supplies the diagnosis and tests pregnancy-specific treatment route and duration; the revised stem removes the shared microscopy scenario. Independent human distinctness review remains pending.
- **op-s3-0618**: author-concern: The referenced patient page supports myomectomy and fertility counseling; a surgeon must verify the exact hysteroscopic eligibility and lesion classification.
- **op-s3-0629**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.
- **op-s3-0631**: reference-specificity: A broad source needs section/claim-level checking. | author-concern: This is a foundational WHO chapter hosted by NIH, not a current US treatment guideline; its use is restricted to the physiological mechanism.
- **op-s3-0632**: author-concern: ACOG selected recommendation was visible in search; complete current protocol, formulation and dose need clinician confirmation.
- **op-s3-0635**: author-concern: Reference URL requires direct-access verification; do not treat its presence as verified claim support.
- **op-s3-0636**: author-concern: CDC symptom page supports the clinical warning signs; the histologic details need specialist source and clinician verification.
- **op-s3-0638**: author-concern: Clinical diagnosis of PID in pregnancy is uncommon and requires qualified obstetric review to verify answer uniqueness and alternatives.
- **op-s3-0640**: author-concern: ACOG source was located in search with the bleeding recommendation, but direct page access returned 402. Current symptom pathway must incorporate newer guidance rather than relying only on the older committee opinion.
- **op-s3-0643**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.
- **op-s3-0645**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.
- **op-s3-0647**: author-concern: Selected ACOG search content established the source identity; reviewer must confirm the complete prospective-rating recommendation in the current source.
- **op-s3-0649**: author-concern: Government NCI publication located in search; histologic and concordance details require breast-specialist source verification.
- **op-s3-0650**: author-concern: Archived NCI publication located; reviewer must verify current diagnostic assessment and all supporting detail before approval.
- **op-s3-0651**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction. | author-concern: Source located by live search as ASH guidance; full-text preparation-specific pregnancy recommendations require qualified verification before approval.
- **op-s3-0652**: author-concern: ODS supports calcium physiology but is not a dedicated pregnancy laboratory-interpretation guideline; the binding explanation needs targeted clinical-source verification.
- **op-s3-0653**: reference-specificity: A broad source needs section/claim-level checking. | author-concern: The cited national guideline is from the UK and addresses adults generally; pregnancy-specific management needs obstetric/nutrition review. No US universal dose protocol is claimed.
- **op-s3-0655**: reference-specificity: A broad source needs section/claim-level checking. | author-concern: Endotext is a specialist reference rather than a government-authored guideline; current individualized intake goals require qualified review.
- **op-s3-0656**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.
- **op-s3-0659**: author-concern: Reference redirect and current ACOG guidance status require verification; no specific benefit eligibility or reporting obligation is asserted.
- **op-s3-0660**: absolute-claim: Inspect absolute wording, exceptions and jurisdiction.

## Approval boundary

Imported candidates remain REVIEW with UNVERIFIED rights, no delivery/export grants and no reviewer identity. The claimed CC-BY-SA-4.0 convention and attribution do not grant permission. Human approval, rights evidence and ordinary admin publication remain separate operational steps. No approvals were fabricated and no production/staging access or publication occurred.
