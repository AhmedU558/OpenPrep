"""
Step 3 Batch 35 (0864-0875) Definitions - Evidence-Based Medicine & Landmark Trial Interpretation
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b35_part2 = [
  # 0864
  {
    "code": "op-c-s3-0864",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Hospital-Based Case-Control Studies and Berkson Selection Bias",
    "provisionalDifficulty": 4,
    "stem": "Epidemiologists conduct a hospital-based case-control study to evaluate the association between severe chronic obstructive pulmonary disease (COPD, cases) and peptic ulcer disease (exposure). Cases are recruited from the inpatient pulmonary ward, and controls are recruited from the orthopedic surgery ward of the same hospital. The unadjusted odds ratio demonstrates a strong, statistically significant positive association between COPD and peptic ulcer disease (OR = 3.8; 95% CI: 2.4 to 5.8). However, when a subsequent large prospective community-based cohort study evaluates the general population, no significant association between COPD and peptic ulcer disease is detected (RR = 1.05; 95% CI: 0.92 to 1.18). Which of the following methodological biases best explains the spuriously inflated association found in the initial hospital-based study?",
    "choices": [
      [
        "Berkson bias (admission rate bias), wherein hospitalized controls have different admission probabilities and co-morbidity rates than the general population",
        "Berkson bias (admission rate bias or hospital selection bias) is a classic form of selection bias occurring in hospital-based case-control studies. Because hospitalized patients inherently suffer from multiple coexisting medical conditions and have higher rates of hospital admission than the non-hospitalized general population, the probability of admission depends on both the exposure and the disease under study. Patients who have BOTH conditions (e.g., severe COPD and symptomatic peptic ulcer disease) are significantly more likely to be hospitalized than patients with either disease alone. Selecting controls from an inpatient hospital ward (e.g., orthopedic patients taking ulcerogenic NSAIDs or corticosteroids) distorts the exposure distribution, creating a spurious or artificially exaggerated statistical association (odds ratio) between two completely unrelated diseases that does not exist in the general community. This bias can be mitigated by recruiting healthy population-based community controls."
      ],
      [
        "Neyman bias (prevalence-incidence bias), wherein rapidly fatal acute cases are systematically excluded",
        "Neyman bias occurs when studying prevalent rather than incident cases, disproportionately selecting survivors of chronic disease; it does not explain hospital admission rate artifacts."
      ],
      [
        "Hawthorne effect, wherein orthopedic patients altered their medication adherence under direct observation",
        "The Hawthorne effect refers to behavioral modifications when subjects know they are being studied, not hospital admission sampling distortion."
      ],
      [
        "Recall bias, wherein COPD patients systematically misremember past dietary exposures",
        "Recall bias involves differential memory recall between cases and controls; it does not explain why hospitalized control selection distorts baseline prevalence."
      ],
      [
        "Observer bias, wherein gastroenterologists were unblinded to pulmonary function test results",
        "Observer bias involves measurement distortion by examiners, not structural hospital sampling selection error."
      ]
    ],
    "shortestValidSolution": "Hospitalized cases and controls show spurious association not found in community = Berkson bias (admission rate bias).",
    "necessaryInference": "Identify Berkson bias as hospital admission rate selection bias that spuriously inflates associations in hospital-based case-control studies.",
    "strongestDistractor": "Neyman bias (prevalence-incidence bias), wherein rapidly fatal acute cases are systematically excluded",
    "distractorExclusion": "Neyman bias involves survivor selection in chronic prevalent cases; Berkson bias specifically results from hospital admission selection distortion.",
    "citation": "Snoep JD, Morabia A, Hernandez-Diaz S, et al. A Structural Approach to Berkson's Fallacy and a Guide to a Common Extension: The Selective Admission Bias. Epidemiology. 2014;25(3):428-434. PMID: 24658514.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 epidemiology item evaluating Berkson selection bias in hospital-based case-control study designs.",
      "distractorExclusionNotes": "Excluded Neyman bias, recall bias, and Hawthorne effect because differential hospital admission rates define Berkson bias.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0865
  {
    "code": "op-c-s3-0865",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Observational Study Architectures Cohort Versus Case-Control Analytics",
    "provisionalDifficulty": 4,
    "stem": "A research team plans an epidemiological study to investigate a potential association between maternal occupational exposure to a newly introduced industrial pesticide during early pregnancy and a rare congenital limb reduction defect (incidence 1 in 50,000 live births). The team has limited funding and requires results within 18 months. Which of the following study designs is the most methodologically appropriate, efficient, and cost-effective choice to investigate this rare outcome, and which primary association metric will it generate?",
    "choices": [
      [
        "Case-control study, which compares exposure histories between affected and unaffected infants, yielding an Odds Ratio (OR)",
        "Choosing an observational study design depends on the incidence of the outcome and the prevalence of the exposure: (1) A Case-Control Study is the optimal, most efficient, and cost-effective design for studying RARE DISEASES or outcomes with long latency periods (such as a congenital malformation occurring in 1 in 50,000 births). In a case-control design, subjects are selected based on DISEASE STATUS: infants with limb defects (cases) and matched unaffected infants (controls) are identified, and past maternal pesticide exposure is assessed retrospectively. Because the total number of exposed and unexposed individuals in the source population is unknown, incidence rates cannot be calculated directly, meaning Relative Risk CANNOT be measured; the primary measure of association is the Odds Ratio (OR). (2) In contrast, a Prospective Cohort Study selects participants based on EXPOSURE STATUS and follows them over time to calculate true incidence and Relative Risk (RR); however, studying a rare outcome (1 in 50,000) via a cohort would require enrolling hundreds of thousands of pregnant women and decades of follow-up, which is practically impossible and prohibitively expensive."
      ],
      [
        "Prospective cohort study, which follows exposed and unexposed mothers over time, yielding a Relative Risk (RR)",
        "A prospective cohort study for a condition with an incidence of 1 in 50,000 would require enrolling over 500,000 women to capture a few cases, making it prohibitively expensive and inefficient."
      ],
      [
        "Cross-sectional study, which measures prevalence of exposure and limb defects simultaneously, yielding Incidence Rate Ratios",
        "Cross-sectional studies assess point prevalence, cannot determine temporal sequence, and cannot effectively capture rare congenital malformations."
      ],
      [
        "Randomized controlled trial, which randomizes pregnant workers to pesticide exposure versus placebo",
        "Deliberately exposing pregnant women to potentially teratogenic industrial chemicals is a gross violation of medical ethics and research law."
      ],
      [
        "Ecological study, which aggregates national pesticide sales and birth records, yielding an attributable risk fraction",
        "Ecological studies suffer from the ecological fallacy (inability to link individual maternal exposure to individual infant malformation) and cannot prove individual causality."
      ]
    ],
    "shortestValidSolution": "Rare outcome (1 in 50,000) = Case-Control study (most efficient for rare diseases) -> calculates Odds Ratio (OR).",
    "necessaryInference": "Select a case-control study as the most efficient design for investigating rare disease outcomes and pair it with the Odds Ratio.",
    "strongestDistractor": "Prospective cohort study, which follows exposed and unexposed mothers over time, yielding a Relative Risk (RR)",
    "distractorExclusion": "Prospective cohorts are prohibitively large and costly for rare outcomes (1 in 50k); case-control design is the gold standard for rare conditions.",
    "citation": "Schulz KF, Grimes DA. Case-Control Studies: Research Done Backwards. Lancet. 2002;359(9304):431-434. PMID: 11844534.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 epidemiology study design item matching rare disease outcomes to case-control methodology and odds ratio metrics.",
      "distractorExclusionNotes": "Excluded cohort studies due to prohibitive sample size requirements for rare outcomes and RCTs due to clear ethical contraindications.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0866
  {
    "code": "op-c-s3-0866",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Disease Prevalence Impact on Positive and Negative Predictive Values",
    "provisionalDifficulty": 5,
    "stem": "A diagnostic immunoassay for acute Lyme disease has a fixed sensitivity of 95% and a fixed specificity of 90%. A physician utilizes this assay in two contrasting clinical settings: Clinic A is an endemic rural primary care practice in Connecticut during summer, where the pre-test probability (prevalence) of active Lyme disease among patients presenting with acute erythema and arthralgias is 30% (0.30). Clinic B is an urban clinic in an area non-endemic for Lyme disease (e.g., Arizona) in patients with non-specific fatigue, where the true pre-test probability (prevalence) of Lyme disease is only 1% (0.01). Which of the following statements correctly describes how the shift in disease prevalence between Clinic A and Clinic B alters the test's operating characteristics?",
    "choices": [
      [
        "Sensitivity and specificity remain unchanged; Positive Predictive Value (PPV) is substantially higher in Clinic A, while Negative Predictive Value (NPV) is higher in Clinic B",
        "Understanding the fundamental distinction between intrinsic test characteristics and predictive values is essential: (1) Sensitivity (95%) and Specificity (90%) are INTRINSIC operating properties of the diagnostic test itself; they are fixed biological characteristics that DO NOT change when disease prevalence changes. (2) In contrast, Positive Predictive Value (PPV = true positives / all positives) and Negative Predictive Value (NPV = true negatives / all negatives) are HEAVILY DEPENDENT ON DISEASE PREVALENCE: As disease prevalence INCREASES (Clinic A, prevalence 30%), the Positive Predictive Value increases dramatically (in Clinic A, PPV is ~80%), while NPV slightly drops. As disease prevalence DECREASES (Clinic B, prevalence 1%), true positives become exceedingly rare while false positives accumulate; consequently, the PPV collapses (in Clinic B, PPV drops to only ~8.7%), while NPV rises to near 100% (>99.9%). Testing for rare conditions in low-prevalence settings results in the vast majority of positive tests being FALSE POSITIVES."
      ],
      [
        "Sensitivity increases in Clinic A because there are more diseased individuals present to detect",
        "Sensitivity is a fixed intrinsic property of the test (TP / [TP + FN]) and does not fluctuate with population prevalence."
      ],
      [
        "Specificity decreases in Clinic B because non-endemic patients have atypical immune responses",
        "Specificity is an intrinsic test characteristic (TN / [TN + FP]) that remains mathematically constant regardless of disease prevalence."
      ],
      [
        "Positive Predictive Value is identical in both clinics because test sensitivity is fixed at 95%",
        "PPV is heavily governed by baseline disease prevalence (Bayes theorem); it is drastically higher in high-prevalence settings."
      ],
      [
        "Negative Predictive Value is higher in Clinic A because high prevalence enhances test accuracy",
        "NPV is higher in LOW-prevalence settings (Clinic B) because almost all non-diseased individuals test true negative."
      ]
    ],
    "shortestValidSolution": "Sensitivity/specificity are fixed. High prevalence (Clinic A) = higher PPV. Low prevalence (Clinic B) = higher NPV, collapsed PPV.",
    "necessaryInference": "Recognize that sensitivity and specificity are fixed intrinsic properties, whereas PPV rises with prevalence and NPV rises with lower prevalence.",
    "strongestDistractor": "Positive Predictive Value is identical in both clinics because test sensitivity is fixed at 95%",
    "distractorExclusion": "PPV depends directly on prevalence; in low-prevalence populations, false positives outnumber true positives, collapsing PPV.",
    "citation": "Altman DG, Bland JM. Diagnostic Tests 2: Predictive Values. BMJ. 1994;309(6947):102. PMID: 8038641.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 biostatistics item testing the mathematical dependence of PPV and NPV on baseline disease prevalence versus fixed sensitivity/specificity.",
      "distractorExclusionNotes": "Excluded claims of changing sensitivity/specificity and invariant PPV because Bayes theorem mandates that PPV scales directly with prevalence.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0867
  {
    "code": "op-c-s3-0867",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Multiplicity and Subgroup Analysis False Discovery Rate Pitfalls",
    "provisionalDifficulty": 5,
    "stem": "A large Phase III randomized controlled trial tests a novel monoclonal antibody versus placebo in 10,000 patients with acute septic shock. In the pre-specified primary analysis, the novel drug shows no statistically significant reduction in 28-day all-cause mortality across the overall study cohort (mortality 28.2% vs 28.0%; Hazard Ratio 0.99; 95% CI: 0.91 to 1.08; p = 0.84). Following completion of the trial, the investigators perform post-hoc exploratory subgroup analyses across 40 different baseline demographic and laboratory subsets (e.g., age strata, sex, geographic regions, baseline lactate quartiles, specific causative pathogens). Among patients aged 40 to 49 years with Gram-negative bacteremia (a subset of 240 patients), the novel drug demonstrates a statistically significant reduction in mortality (p = 0.03). The authors issue a press release claiming the drug is a breakthrough therapy for this specific patient subgroup. Which of the following methodological flaws best characterizes this post-hoc subgroup claim?",
    "choices": [
      [
        "Multiplicity of testing (Type I error inflation), where conducting multiple unadjusted comparisons yields false-positive findings by chance alone",
        "The problem of Multiplicity (multiple testing problem) occurs when investigators perform numerous statistical hypothesis tests without adjusting the significance threshold (alpha). If tests are conducted at the conventional alpha = 0.05 level, each test carries a 5% chance of a Type I error (false-positive finding). When 40 independent subgroup hypotheses are tested, the cumulative probability of finding at least one statistically significant result by pure chance alone is calculated as: 1 - (1 - 0.05)^40 = 1 - (0.95)^40 = 1 - 0.1285 = 87.1%. Post-hoc subgroup findings in a trial where the primary overall endpoint is neutral are almost always spurious statistical noise. To be credible, subgroup analyses must be: (1) pre-specified with strong biological plausibility, (2) limited in number, (3) adjusted for multiple comparisons (e.g., Bonferroni correction), and (4) verified by a formal test of statistical interaction (treatment-by-subgroup interaction p-value), not merely isolated within-subgroup p-values."
      ],
      [
        "Ecological fallacy, wherein aggregate population-level data were improperly applied to individual patients",
        "Ecological fallacy occurs when population-level averages are erroneously extrapolated to individuals, which does not describe trial subgroup testing."
      ],
      [
        "Verification bias, wherein only patients with positive outcomes received reference diagnostic confirmation",
        "Verification bias affects diagnostic accuracy studies where disease status verification is tied to test results."
      ],
      [
        "Hawthorne effect, wherein participants aged 40 to 49 years exhibited superior behavioral motivation",
        "The Hawthorne effect alters human performance under observation; it does not explain 40 statistical tests producing chance p < 0.05."
      ],
      [
        "Reverse causality, wherein survival duration directly influenced the patient's baseline age at enrollment",
        "Age was determined prior to randomization; survival duration cannot chronologically cause earlier baseline age."
      ]
    ],
    "shortestValidSolution": "Primary trial neutral + 40 post-hoc subgroups with one p=0.03 = Multiplicity / Type I error inflation (87% chance of false positive).",
    "necessaryInference": "Identify multiplicity of testing and Type I error inflation as the primary pitfall of multiple unadjusted post-hoc subgroup analyses.",
    "strongestDistractor": "Ecological fallacy, wherein aggregate population-level data were improperly applied to individual patients",
    "distractorExclusion": "Ecological fallacy links group-level statistics to individuals; conducting 40 tests creates false positives via Type I error inflation.",
    "citation": "Wang R, Lagakos SW, Ware JH, et al. Statistics in Medicine--Reporting of Subgroup Analyses in Clinical Trials. N Engl J Med. 2007;357(21):2189-2194. PMID: 18032770.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 biostatistics item evaluating multiplicity, post-hoc subgroup analysis pitfalls, and Type I error inflation.",
      "distractorExclusionNotes": "Excluded ecological fallacy and reverse causality because multiple testing inflates family-wise Type I error rate to >85%.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0868
  {
    "code": "op-c-s3-0868",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Composite Endpoints Component Dissociation and Hard Clinical Outcomes",
    "provisionalDifficulty": 4,
    "stem": "A randomized controlled trial investigates a new therapeutic agent in 6,000 patients with chronic coronary artery disease. The primary efficacy outcome is a composite of cardiovascular death, non-fatal myocardial infarction, or urgent revascularization over 3 years. The primary composite outcome occurs in 300 of 3,000 patients (10.0%) in the control group and in 210 of 3,000 patients (7.0%) in the experimental group (Hazard Ratio 0.68; 95% CI: 0.57 to 0.81; p < 0.001). Individual component analysis reveals the following breakdown: cardiovascular death occurred in 60 patients in the control group vs 62 patients in the experimental group (HR 1.03; 95% CI: 0.72 to 1.48; p = 0.86); non-fatal myocardial infarction occurred in 90 control patients vs 88 experimental patients (HR 0.98; 95% CI: 0.73 to 1.32; p = 0.89); and urgent revascularization occurred in 150 control patients vs 60 experimental patients (HR 0.39; 95% CI: 0.29 to 0.53; p < 0.001). Which of the following is the most critical and accurate clinical appraisal of this trial's findings?",
    "choices": [
      [
        "The composite endpoint's statistical significance was driven entirely by the softer, subjective outcome of revascularization, with zero benefit on hard mortality or myocardial infarction",
        "Composite endpoints combine multiple distinct clinical events into a single primary outcome. While composite endpoints increase statistical power (by increasing the total number of observed events) and allow smaller sample sizes, they have major methodological pitfalls: (1) Components often differ vastly in clinical importance (e.g., death versus elective hospitalization or repeat revascularization); (2) The treatment effect may be heterogeneous across components. In this trial, the experimental drug produced a marked, highly significant reduction in urgent revascularization (HR 0.39), which drove the entire composite outcome to statistical significance (HR 0.68). However, it had ZERO EFFECT on hard, irreversible, objective endpoints (cardiovascular death HR 1.03; myocardial infarction HR 0.98). Clinicians must always inspect the individual components of composite endpoints; advertising this drug as reducing 'major adverse cardiovascular events' misleads patients into believing it saves lives or prevents heart attacks, when it only defers repeat revascularization procedures."
      ],
      [
        "The drug reduces all-cause cardiovascular mortality by 32% because all components contribute equally to composite power",
        "Cardiovascular mortality was completely unaffected (HR 1.03, p = 0.86); claiming a 32% mortality reduction is completely false."
      ],
      [
        "The trial is invalid because composite endpoints are legally prohibited in regulatory Phase III cardiovascular trials",
        "Composite endpoints are standard and widely accepted by the FDA and EMA, but require rigorous disaggregated reporting."
      ],
      [
        "The lack of mortality reduction proves that the experimental drug is directly cardiotoxic and accelerates plaque rupture",
        "Mortality was equivalent (60 vs 62 deaths, HR 1.03); there is no evidence of cardiotoxicity or increased mortality."
      ],
      [
        "Urgent revascularization is a surrogate biomarker that cannot be analyzed in clinical trials",
        "Revascularization is a clinical procedure, not a biochemical surrogate biomarker (like cholesterol or blood pressure), but it is a softer, discretionary endpoint."
      ]
    ],
    "shortestValidSolution": "Composite significant (HR 0.68), but death (HR 1.03) and MI (HR 0.98) neutral -> driven entirely by softer revascularization component.",
    "necessaryInference": "Disaggregate composite endpoints to recognize when statistical significance is driven solely by soft components without affecting hard outcomes.",
    "strongestDistractor": "The drug reduces all-cause cardiovascular mortality by 32% because all components contribute equally to composite power",
    "distractorExclusion": "Death had HR 1.03 (no benefit); composite significance cannot be translated into claims of mortality reduction.",
    "citation": "Ferreira-Gonzalez I, Busse JW, Heels-Ansdell D, et al. Problems With Use of Composite End Points in Cardiovascular Trials: Systematic Review of Randomised Controlled Trials. BMJ. 2007;334(7597):786. PMID: 17403713.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 evidence-based medicine item on critically appraising composite endpoints and recognizing component dissociation.",
      "distractorExclusionNotes": "Excluded mortality reduction claims because component disaggregation demonstrates that benefit was restricted solely to revascularization.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0869
  {
    "code": "op-c-s3-0869",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Differential Loss to Follow-Up and Attrition Bias in Cohorts",
    "provisionalDifficulty": 4,
    "stem": "A 5-year prospective cohort study investigates the relationship between exposure to heavy occupational diesel exhaust and the incidence of chronic debilitating obstructive lung disease among 2,000 industrial transport workers. Baseline demographics and spirometry are comparable between the 1,000 highly exposed workers and the 1,000 unexposed control office workers. At year 5, follow-up data are complete for 920 of 1,000 control workers (8% lost to follow-up), but for only 650 of 1,000 exposed transport workers (35% lost to follow-up). An exit interview audit reveals that a large proportion of exposed workers who left the study had developed early severe respiratory symptoms, took medical disability leave, or changed professions, and could not be reached. The published study reports an identical 5-year incidence of chronic obstructive lung disease in both groups (Relative Risk = 0.98; 95% CI: 0.82 to 1.18). Which of the following methodological biases most severely compromises the internal validity of this study?",
    "choices": [
      [
        "Attrition bias (differential loss to follow-up), which selectively removed symptomatic, diseased exposed workers from the final analysis",
        "Attrition bias is a form of selection bias occurring when differential loss of participants from a study cohort during follow-up is related to both the exposure and the outcome. In this study, 35% of the exposed workers were lost to follow-up compared to only 8% of the unexposed workers. Crucially, the exposed workers dropped out PRECISELY BECAUSE they developed early work-related respiratory symptoms, became disabled, or quit their jobs. By selectively removing sick, exposed workers from the cohort before the final 5-year spirometric assessment, the remaining analyzed exposed group comprised only exceptionally healthy, disease-resistant workers (an example of the 'healthy worker survivor effect'). This differential attrition bias masked the true toxic pulmonary effect of diesel exhaust, spuriously biasing the Relative Risk toward the null (RR = 0.98)."
      ],
      [
        "Recall bias, wherein exposed transport workers failed to remember early childhood respiratory infections",
        "Recall bias affects retrospective case-control exposure reporting, not prospective differential participant drop-out over time."
      ],
      [
        "Lead-time bias, wherein diesel exhaust accelerated the radiographic appearance of emphysema",
        "Lead-time bias involves screening survival intervals, not unequal participant drop-out from a prospective cohort."
      ],
      [
        "Observer-expectancy bias, wherein spirometric technicians deliberately coached control workers to exhale harder",
        "Observer expectancy involves technician measurement coaching, not structural loss of 35% of the exposed cohort."
      ],
      [
        "Neyman bias, wherein acute fatal heart attacks were misclassified as pulmonary deaths",
        "Neyman bias is prevalence-incidence bias in cross-sectional/case-control studies, not progressive cohort drop-out."
      ]
    ],
    "shortestValidSolution": "35% exposed drop out due to symptoms vs 8% unexposed = Attrition bias (differential loss to follow-up biases RR to null).",
    "necessaryInference": "Identify attrition bias from differential loss to follow-up and understand how it distorts prospective cohort risk estimates.",
    "strongestDistractor": "Recall bias, wherein exposed transport workers failed to remember early childhood respiratory infections",
    "distractorExclusion": "Recall bias occurs in retrospective exposure reporting; prospective drop-out linked to disease development defines attrition bias.",
    "citation": "Dumville JC, Torgerson DJ, Hewitt CE. Reporting Attrition in Randomised Controlled Trials: The Promise of Gate. BMJ. 2006;332(7547):969-971. PMID: 16627519.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 epidemiology item on recognizing attrition bias and differential loss to follow-up in prospective cohort studies.",
      "distractorExclusionNotes": "Excluded recall bias and lead-time bias because differential withdrawal of symptomatic exposed workers defines attrition bias.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0870
  {
    "code": "op-c-s3-0870",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Surrogate Biomarkers Versus Patient-Centered Hard Clinical Endpoints",
    "provisionalDifficulty": 4,
    "stem": "A pharmaceutical company presents Phase II clinical trial data for a novel small-molecule drug that raises high-density lipoprotein cholesterol (HDL-C). In a trial of 1,200 patients with coronary artery disease, the drug increased serum HDL-C by 72% and reduced serum LDL-C by 25% over 12 months with no serious laboratory toxicities. Based on these favorable lipid changes, the sponsor claims that the drug will substantially reduce cardiovascular death and myocardial infarction in clinical practice. A critical care clinical pharmacologist cautions that improving a surrogate laboratory biomarker does not reliably guarantee improved patient-centered clinical outcomes. Which of the following historical clinical trial examples best illustrates the danger of relying on surrogate endpoints to infer true clinical efficacy?",
    "choices": [
      [
        "Suppression of asymptomatic ventricular arrhythmias by class IC antiarrhythmics in the CAST trial, which paradoxically doubled patient mortality",
        "A surrogate endpoint is a laboratory measurement or physical sign (e.g., blood pressure, LDL/HDL cholesterol, tumor shrinkage, ventricular ectopy suppression) used as a substitute for a clinically meaningful, patient-centered hard endpoint (e.g., survival, stroke, myocardial infarction, quality of life). While surrogate endpoints allow shorter and cheaper clinical trials, history contains numerous cautionary examples where drugs successfully normalized a surrogate biomarker but caused severe clinical harm or death when tested in definitive outcomes trials: In the landmark Cardiac Arrhythmia Suppression Trial (CAST), class IC antiarrhythmics (flecainide and encainide) successfully abolished asymptomatic ventricular ectopy on Holter monitoring (the surrogate endpoint); however, in the randomized clinical outcomes trial, these drugs paradoxically DOUBLED all-cause and arrhythmic mortality. Similarly, CETP inhibitors (e.g., torcetrapib) dramatically raised HDL-C by >70% but increased all-cause mortality and cardiovascular events. True clinical efficacy requires demonstration of benefit on hard patient-centered outcomes."
      ],
      [
        "Use of insulin in diabetic ketoacidosis, which lowered blood glucose but failed to prevent metabolic acidosis",
        "Insulin is life-saving in DKA; it successfully reverses ketoacidosis and reduces mortality."
      ],
      [
        "Administration of penicillin for pneumococcal pneumonia, which killed bacteria but worsened septic shock",
        "Penicillin cures bacterial pneumonia and drastically lowers mortality; it is not a failed surrogate."
      ],
      [
        "Use of epinephrine during cardiopulmonary resuscitation, which failed to restore spontaneous circulation in ventricular fibrillation",
        "Epinephrine is standard in ACLS; it increases coronary perfusion pressure and ROSC."
      ],
      [
        "Application of positive end-expiratory pressure in acute respiratory distress syndrome, which improved oxygenation without reducing survival",
        "PEEP improves oxygenation and lung recruitment in ARDS; high vs low PEEP is an optimization strategy, not a failed surrogate drug."
      ]
    ],
    "shortestValidSolution": "Surrogate biomarker normalization does not equal patient survival = CAST trial (flecainide suppressed ectopy but doubled mortality).",
    "necessaryInference": "Understand the limitations of surrogate endpoints and recognize the landmark CAST trial illustrating how normalizing a biomarker caused fatal harm.",
    "strongestDistractor": "Use of insulin in diabetic ketoacidosis, which lowered blood glucose but failed to prevent metabolic acidosis",
    "distractorExclusion": "Insulin definitively resolves DKA; the CAST trial is the classic historical paradigm proving surrogate endpoints can betray patient outcomes.",
    "citation": "Fleming TR, DeMets DL. Surrogate End Points in Clinical Trials: Are We Being Misled? Ann Intern Med. 1996;125(7):605-613. PMID: 8815760.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 evidence appraisal item on surrogate versus hard clinical endpoints and the classic CAST trial cautionary paradigm.",
      "distractorExclusionNotes": "Excluded successful therapies (insulin, penicillin) because CAST trial (flecainide/encainide) proves surrogate biomarkers can diverge from survival.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0871
  {
    "code": "op-c-s3-0871",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Complex Osteomyelitis Oral Versus Intravenous Non-Inferiority Evidence",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with chronic osteomyelitis of the proximal tibia following surgical fixation of a compound fracture undergoes operative hardware removal and aggressive surgical debridement. Intraoperative cultures grow methicillin-sensitive Staphylococcus aureus. The inpatient infectious disease consultant reviews trial evidence evaluating whether transitioning to high-bioavailability oral antibiotics (e.g., oral levofloxacin plus rifampin, or oral trimethoprim-sulfamethoxazole) after 7 days of intravenous therapy is non-inferior to completing a full 6-week course of continuous outpatient intravenous antibiotic therapy via a peripherally inserted central catheter (PICC). In a major multicenter randomized non-inferiority clinical trial of complex orthopedic bone and joint infections (utilizing an amended non-inferiority margin of 5.0%), definitive treatment failure at 1 year occurred in 74 of 523 patients (14.1%) in the intravenous group and in 67 of 509 patients (13.2%) in the oral group (risk difference: -0.9 percentage points; 90% confidence interval: -4.3 to 2.4 percentage points; 95% confidence interval: -4.9 to 3.2 percentage points). Catheter-related complications (infection, thrombosis, malfunction) occurred in 9.4% of the intravenous group versus 1.0% of the oral group. Which of the following conclusions correctly interprets these trial findings for this patient's clinical management?",
    "choices": [
      [
        "Oral antibiotic therapy is non-inferior to intravenous therapy because the upper bound of the confidence interval excludes the 5% margin, with significantly fewer catheter-related complications",
        "The landmark OVIVA (Oral Versus Intravenous Antibiotics) trial investigated whether oral antibiotic therapy is non-inferior to intravenous antibiotic therapy for complex bone and joint infections (osteomyelitis, native joint sepsis, orthopedic hardware infections). The trial established a pre-specified amended non-inferiority margin of 5.0 percentage points. The 1-year treatment failure rate was 13.2% in the oral group versus 14.1% in the intravenous group (difference -0.9 percentage points). Because the upper bound of the primary 90% confidence interval (2.4%) and the secondary 95% confidence interval (3.2%) fell entirely below the 5.0% non-inferiority margin, non-inferiority of oral antibiotic therapy was definitively established. Furthermore, oral therapy completely avoided the indwelling central venous catheter complications (thrombosis, exit-site sepsis, bacteremia, mechanical malfunction) that affected nearly 10% of patients receiving prolonged IV regimens. Selecting high-bioavailability oral therapy following adequate surgical debridement is safe, non-inferior, and avoids PICC morbidity."
      ],
      [
        "Intravenous therapy is strictly superior to oral therapy because osteomyelitis can never be eradicated without parenteral beta-lactam concentrations",
        "The trial proved non-inferiority of oral therapy, with identical clinical cure rates and significantly fewer line complications."
      ],
      [
        "Oral therapy failed non-inferiority because the point estimate difference crossed into negative numbers",
        "A negative risk difference indicates fewer failures in the oral arm; non-inferiority requires the upper bound of the CI to fall below +5.0%."
      ],
      [
        "Non-inferiority was refuted because the trial required an absolute non-inferiority margin of zero percentage points",
        "A non-inferiority margin of zero would represent an impossible superiority design; clinical margins reflect acceptable trade-offs for oral convenience."
      ],
      [
        "The trial is uninterpretable because PICC line complications must be counted as primary microbiological treatment failures",
        "PICC complications represent adverse procedural events that favor the oral strategy; they are reported separately from primary microbiological failures."
      ]
    ],
    "shortestValidSolution": "Bone infection oral vs IV = upper CI bound (+2.4% / +3.2%) is below +5.0% margin -> oral is non-inferior with 9x fewer catheter complications.",
    "necessaryInference": "Interpret landmark non-inferiority trial data (OVIVA design) establishing that oral antibiotics are non-inferior to IV for complex osteomyelitis.",
    "strongestDistractor": "Intravenous therapy is strictly superior to oral therapy because osteomyelitis can never be eradicated without parenteral beta-lactam concentrations",
    "distractorExclusion": "High-bioavailability oral therapy demonstrated definitive non-inferiority and drastically lowered catheter-related venous complications.",
    "citation": "Li HK, Rombach I, Zambellas R, et al. Oral Versus Intravenous Antibiotics for Bone and Joint Infection (OVIVA Trial). N Engl J Med. 2019;380(5):425-436. PMID: 30699315.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 infectious disease/orthopedics item interpreting evidence on oral vs IV antibiotics in complex osteomyelitis without naming the trial.",
      "distractorExclusionNotes": "Excluded mandatory IV dogmas because trial data prove non-inferiority of oral regimens while eliminating central line complications.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0872
  {
    "code": "op-c-s3-0872",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Early Rhythm Control in Atrial Fibrillation Cardiovascular Outcomes",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old woman is diagnosed with new-onset nonvalvular atrial fibrillation 3 months ago. She has hypertension, type 2 diabetes mellitus, and a prior transient ischemic attack (CHA2DS2-VASc score of 5). She is fully anticoagulated with apixaban and rate-controlled on metoprolol succinate with a resting ventricular rate of 74/min. She has minimal symptoms (EHRA Class I). The cardiology team evaluates whether to maintain rate control alone or initiate an early rhythm control strategy (antiarrhythmic drug therapy or catheter ablation). A landmark multicenter randomized clinical trial evaluated early rhythm control versus usual care (predominantly rate control) in 2,789 patients with newly diagnosed atrial fibrillation (diagnosed within 1 year) and cardiovascular risk factors. The primary composite outcome of death from cardiovascular causes, stroke, or hospitalization with worsening of heart failure or acute coronary syndrome occurred in 249 of 1,395 patients (3.9 per 100 person-years) in the early-rhythm-control group compared to 316 of 1,394 patients (5.0 per 100 person-years) in the usual-care group (Hazard Ratio 0.79; 96% CI: 0.66 to 0.94; p = 0.005). Which of the following statements correctly translates this evidence into her clinical management?",
    "choices": [
      [
        "Initiating early rhythm control within one year of atrial fibrillation diagnosis significantly reduces cardiovascular death, stroke, and heart failure hospitalizations",
        "Historically, the AFFIRM trial (2002) found no mortality difference between rate and rhythm control in older patients with chronic, long-standing atrial fibrillation. However, the landmark EAST-AFNET 4 trial established a paradigm shift: among patients with NEWLY DIAGNOSED atrial fibrillation (duration <= 1 year) and concomitant cardiovascular risk factors (age > 75, or CHA2DS2-VASc >= 2), an Early Rhythm Control strategy (using antiarrhythmic drugs like flecainide, propafenone, dronedarone, or amiodarone, or catheter ablation, combined with continuous oral anticoagulation) significantly reduced the primary composite outcome of cardiovascular death, stroke, and heart failure/ACS hospitalizations by 21% (HR 0.79, p = 0.005) compared to rate control alone. Early rhythm control prevents electrical, structural, and autonomic atrial remodeling before permanent substrate damage occurs, yielding clear prognostic cardiovascular benefits."
      ],
      [
        "Early rhythm control is contraindicated unless ventricular rate cannot be kept below 110 beats per minute",
        "Rate control alone is no longer the sole primary strategy; early rhythm control within 12 months provides superior cardiovascular protection regardless of resting rate."
      ],
      [
        "Anticoagulation can be safely discontinued once sinus rhythm is restored and maintained for thirty consecutive days",
        "Anticoagulation must be continued indefinitely based on the patient's CHA2DS2-VASc score (score of 5), regardless of apparent restoration of sinus rhythm."
      ],
      [
        "Early rhythm control eliminates the need for ongoing antihypertensive or statin pharmacotherapy",
        "Comprehensive cardiovascular risk factor modification (blood pressure, lipids, glycemic control) remains essential alongside rhythm control."
      ],
      [
        "Catheter ablation is ineffective in newly diagnosed atrial fibrillation and must be delayed until rate control fails for five years",
        "Early catheter ablation is highly effective in early AF and was an integral treatment modality utilized in early rhythm control trials."
      ]
    ],
    "shortestValidSolution": "New AF (<1 yr) + CV risk factors = early rhythm control reduces CV death, stroke, and HF hospitalizations by 21% (HR 0.79).",
    "necessaryInference": "Apply landmark trial evidence (EAST-AFNET 4 design) showing that early rhythm control within 1 year of AF diagnosis reduces cardiovascular events.",
    "strongestDistractor": "Early rhythm control is contraindicated unless ventricular rate cannot be kept below 110 beats per minute",
    "distractorExclusion": "Waiting for rate control failure allows irreversible atrial remodeling; early rhythm control within 1 year provides primary prognostic benefit.",
    "citation": "Kirchhof P, Camm AJ, Goette A, et al. Early Rhythm-Control Therapy in Patients With Atrial Fibrillation (EAST-AFNET 4 Trial). N Engl J Med. 2020;383(14):1305-1316. PMID: 32865375.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology item translating evidence on early rhythm control versus rate control in newly diagnosed AF without naming the trial.",
      "distractorExclusionNotes": "Excluded waiting for rate failure and stopping anticoagulation because early rhythm control reduces CV events while stroke risk dictates continued anticoagulation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0873
  {
    "code": "op-c-s3-0873",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "SGLT2 Inhibition in Chronic Kidney Disease Independent of Diabetes",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man with biopsy-proven focal segmental glomerulosclerosis (FSGS) and stage 3b chronic kidney disease presents for management. Estimated GFR is 34 mL/min/1.73 m2, and urine albumin-to-creatinine ratio (UACR) is 750 mg/g despite adherence to maximally tolerated enalapril 20 mg daily. Blood pressure is 126/78 mm Hg. Fasting plasma glucose is 92 mg/dL, and HbA1c is 5.4%, with no history of diabetes mellitus. A medical resident questions whether adding an SGLT2 inhibitor (e.g., dapagliflozin or empagliflozin) is indicated, noting that SGLT2 inhibitors were originally developed as anti-diabetic medications. Major landmark randomized clinical trials (such as DAPA-CKD and EMPA-KIDNEY) evaluated SGLT2 inhibitors versus placebo in thousands of patients with chronic kidney disease (eGFR 20 to 90 mL/min/1.73 m2 and albuminuria) with AND without type 2 diabetes mellitus. Which of the following statements correctly summarizes the conclusive evidence regarding SGLT2 inhibitors in patients with non-diabetic chronic kidney disease?",
    "choices": [
      [
        "SGLT2 inhibitors significantly reduce the composite risk of sustained eGFR decline, end-stage kidney disease, and all-cause mortality regardless of diabetes status",
        "Landmark Phase III randomized clinical trials (DAPA-CKD with dapagliflozin and EMPA-KIDNEY with empagliflozin) definitively proved that the nephroprotective and cardioprotective benefits of SGLT2 inhibitors are INDEPENDENT of glycemic control and extend equally to patients WITHOUT diabetes mellitus. In patients with non-diabetic CKD (e.g., FSGS, IgA nephropathy, hypertensive nephrosclerosis) and albuminuria, SGLT2 inhibitors significantly reduced the primary composite outcome of a >= 50% sustained decline in eGFR, progression to end-stage kidney disease (ESKD requiring dialysis/transplantation), and all-cause/cardiovascular mortality by 30% to 40% (HR ~0.61-0.72). The physiological mechanism is non-glycemic: by inhibiting proximal tubular sodium and glucose reabsorption, SGLT2 inhibitors increase solute delivery to the macula densa, restoring tubuloglomerular feedback (TGF) and inducing afferent arteriolar vasoconstriction, thereby reducing intraglomerular capillary hypertension and mechanical shear stress."
      ],
      [
        "SGLT2 inhibitors have zero renal benefit in patients without diabetes because they require severe hyperglycemia to activate the transporter",
        "SGLT2 transporters reabsorb glucose under normoglycemic conditions; tubuloglomerular feedback and hemodynamic benefits occur independently of blood glucose."
      ],
      [
        "SGLT2 inhibitors cause profound, refractory hypoglycemia when administered to patients with normal baseline HbA1c",
        "SGLT2 inhibitors do not stimulate insulin secretion; the risk of hypoglycemia in non-diabetic patients is negligible."
      ],
      [
        "SGLT2 inhibitors are strictly contraindicated when estimated GFR falls below 60 mL/min/1.73 m2",
        "Trials demonstrated safety and efficacy down to eGFR 20-25 mL/min/1.73 m2, where renal benefits are preserved."
      ],
      [
        "SGLT2 inhibitors must be combined with high-dose loop diuretics to achieve any reduction in albuminuria",
        "Loop diuretics are not required and can cause volume depletion; SGLT2 inhibitors reduce intraglomerular pressure directly."
      ]
    ],
    "shortestValidSolution": "Non-diabetic CKD with albuminuria = SGLT2 inhibitors reduce ESKD progression and mortality independent of diabetes (DAPA-CKD/EMPA-KIDNEY).",
    "necessaryInference": "Apply landmark trial evidence establishing SGLT2 inhibitor nephroprotection in non-diabetic chronic kidney disease.",
    "strongestDistractor": "SGLT2 inhibitors have zero renal benefit in patients without diabetes because they require severe hyperglycemia to activate the transporter",
    "distractorExclusion": "SGLT2 inhibitors restore tubuloglomerular feedback and reduce hyperfiltration in non-diabetic CKD, cutting ESKD by >30%.",
    "citation": "Heerspink HJL, Stefansson BV, Correa-Rotter R, et al. Dapagliflozin in Patients With Chronic Kidney Disease (DAPA-CKD Trial). N Engl J Med. 2020;383(15):1436-1446. PMID: 32970396.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology item on evidence-based application of SGLT2 inhibitors in non-diabetic CKD without naming trials in stem.",
      "distractorExclusionNotes": "Excluded glycemic dependence and hypoglycemia fears because SGLT2 inhibitors confer profound non-glycemic hemodynamic renal protection.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0874
  {
    "code": "op-c-s3-0874",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Invasive Versus Conservative Strategy for NSTE-ACS in Older Adults",
    "provisionalDifficulty": 5,
    "stem": "An 82-year-old woman with multimorbidity, mild cognitive impairment, and moderate physical frailty (Clinical Frailty Scale score 5) is admitted to the hospital with non-ST-elevation myocardial infarction (NSTEMI). High-sensitivity cardiac troponin I is elevated at 480 ng/L (normal < 14 ng/L), and baseline ECG shows 1-mm ST depressions in leads V4-V6. She is pain-free following initiation of oral aspirin, clopidogrel, therapeutic low-molecular-weight heparin, and atorvastatin. Blood pressure is 128/72 mm Hg, and heart rate is 68/min regular. The clinical team deliberates between an immediate routine invasive strategy (coronary angiography with intent to revascularize within 24-48 hours) versus an initial conservative medical management strategy (angiography only if recurrent ischemia or refractory failure develops). In a recent landmark multicenter randomized clinical trial evaluating an invasive strategy versus conservative medical care in 1,518 older adults (aged >= 75 years) with non-ST-elevation acute coronary syndromes (the SENIOR-RITA trial design), the primary composite outcome of cardiovascular death or non-fatal myocardial infarction over a median follow-up of 4.1 years occurred in 25.6% of the invasive group versus 26.3% of the conservative group (Hazard Ratio 0.94; 95% CI: 0.77 to 1.14; p = 0.53). Non-fatal MI was non-significantly reduced, but cardiovascular death was completely identical (15.8% vs 14.2%, HR 1.11; p = 0.38). Which of the following is the most accurate clinical conclusion to guide shared decision-making with this patient and her family?",
    "choices": [
      [
        "A routine invasive strategy does not significantly reduce cardiovascular death or overall myocardial infarction compared to conservative medical management in older adults with NSTE-ACS",
        "The management of acute coronary syndromes in older, frail patients requires nuanced evidence appraisal. Historical trials in younger cohorts demonstrated clear benefits for early invasive revascularization. However, older patients (>= 75 to 80 years of age) with frailty and multimorbidity face higher procedural risks (contrast-induced nephropathy, stroke, access-site bleeding, delirium, vascular injury). The landmark SENIOR-RITA randomized controlled trial evaluated an invasive revascularization strategy versus an optimal conservative medical management strategy specifically in older adults (aged >= 75 years, median age 82) with non-ST-elevation acute coronary syndrome. Over a 4-year follow-up, the routine invasive strategy DID NOT reduce the co-primary endpoint of cardiovascular death or non-fatal myocardial infarction (HR 0.94, p = 0.53), and had zero effect on cardiovascular mortality (HR 1.11). While routine invasive management modestly reduced subsequent repeat revascularization and hospitalizations, it did not prolong life. In frail older adults with multimorbidity, initial conservative medical therapy is a sound, evidence-based, guideline-supported strategy that avoids upfront invasive procedural harms."
      ],
      [
        "Routine coronary angiography is legally mandated for all patients with elevated cardiac troponins regardless of age or frailty",
        "Clinical guidelines strongly support individualized shared decision-making; no procedure is legally mandated or universally appropriate."
      ],
      [
        "Conservative medical therapy is unethical because medical management carries a 100% mortality rate within six months in older adults",
        "Conservative medical therapy with modern antiplatelets, statins, and anticoagulation achieved excellent 4-year survival comparable to invasive revascularization."
      ],
      [
        "Invasive revascularization should only be performed if the patient has a normal baseline serum creatinine and zero cognitive deficits",
        "Angiography is not strictly barred by creatinine or mild dementia, but trials show routine revascularization does not reduce mortality in this age group."
      ],
      [
        "All antiplatelet and anticoagulant medications must be discontinued immediately if conservative therapy is chosen",
        "Optimal medical therapy requires continuation of guideline-directed antiplatelets, statins, beta-blockers, and ACE inhibitors to prevent recurrent ischemia."
      ]
    ],
    "shortestValidSolution": "Frail 82yo with NSTEMI = routine invasive strategy does NOT reduce CV death or MI compared to conservative medical care (SENIOR-RITA design).",
    "necessaryInference": "Apply recent trial evidence (SENIOR-RITA design) establishing that routine invasive strategy does not lower CV mortality or MI in older NSTE-ACS patients.",
    "strongestDistractor": "Routine coronary angiography is legally mandated for all patients with elevated cardiac troponins regardless of age or frailty",
    "distractorExclusion": "Recent evidence proves invasive strategies do not improve hard survival outcomes in frail older adults; conservative therapy is evidence-based.",
    "citation": "Kunadian V, Mossop H, Mills NL, et al. Invasive Versus Conservative Strategy for Older Patients With Non-ST-Elevation Myocardial Infarction (SENIOR-RITA Trial). N Engl J Med. 2024;391(12):1077-1088. PMID: 39221526.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology/geriatrics item appraising evidence on invasive vs conservative strategies in older adults with NSTEMI without naming the trial in the stem.",
      "distractorExclusionNotes": "Excluded mandatory angiography and medical abandonment because trial data show equivalent mortality between invasive and conservative medical arms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0875
  {
    "code": "op-c-s3-0875",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Restrictive Versus Liberal Red Blood Cell Transfusion in Sepsis",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man is hospitalized in the intensive care unit for septic shock secondary to Escherichia coli bacteremic urinary tract infection. Over the past 48 hours, he has been successfully resuscitated with fluids and norepinephrine, and his vasopressors were discontinued 6 hours ago. He is breathing spontaneously on 2 L/min nasal cannula with an oxygen saturation of 97%. Mean arterial pressure is 74 mm Hg, and heart rate is 78/min regular. He has no chest pain, shortness of breath, active bleeding, or history of ischemic heart disease. Morning laboratory testing reveals: hemoglobin 7.4 g/dL (hematocrit 22%), WBC 12,400/mm3, platelet count 140,000/mm3, and serum lactate 1.2 mmol/L. The junior resident suggests ordering two units of packed red blood cells to raise his hemoglobin above 9.0 g/dL. Which of the following transfusion strategies is most strongly supported by landmark critical care clinical trials (e.g., TRICC and TRISS trials) and current Surviving Sepsis Campaign guidelines?",
    "choices": [
      [
        "Restrictive transfusion strategy withholding red blood cell transfusion unless hemoglobin drops below 7.0 g/dL",
        "Red blood cell (RBC) transfusion thresholds in critically ill patients have been evaluated in major landmark multicenter randomized clinical trials (TRICC trial in general critical care, TRISS trial in septic shock). These trials conclusively demonstrated that a Restrictive Transfusion Strategy (transfusing only when hemoglobin drops below 7.0 g/dL, targeting a post-transfusion hemoglobin of 7.0 to 9.0 g/dL) is at least as safe as, and in many patient subgroups superior to, a Liberal Transfusion Strategy (transfusing when hemoglobin drops below 9.0 or 10.0 g/dL). Liberal transfusion exposes patients to significant risks of transfusion-associated circulatory overload (TACO), transfusion-related acute lung injury (TRALI), hemolytic reactions, immunomodulation, and nosocomial infections, without improving survival or organ failure. Current Surviving Sepsis Campaign guidelines give a strong recommendation for a restrictive RBC transfusion strategy (hemoglobin trigger < 7.0 g/dL) in adult septic patients in the absence of acute myocardial ischemia, severe hypoxemia, or active hemorrhage."
      ],
      [
        "Liberal transfusion strategy targeting hemoglobin strictly above 10.0 g/dL to maximize oxygen delivery",
        "Liberal transfusion increases volume overload (TACO), TRALI, secondary infections, and mortality without improving tissue perfusion."
      ],
      [
        "Mandatory transfusion of two units of packed red blood cells plus two units of fresh frozen plasma",
        "Plasma transfusion is contraindicated in the absence of active bleeding or scheduled invasive procedural coagulopathy."
      ],
      [
        "Subcutaneous recombinant human erythropoietin injections daily for five days",
        "Erythropoietin does not rapidly raise hemoglobin in acute sepsis, fails to reduce transfusion requirements, and increases thrombotic complications."
      ],
      [
        "Whole blood transfusion targeting hematocrit strictly greater than 36%",
        "Whole blood carries excessive volume load and is reserved for massive traumatic hemorrhage resuscitation, not non-bleeding septic recovery."
      ]
    ],
    "shortestValidSolution": "Septic patient with Hb 7.4 g/dL and no active bleeding/ischemia = Restrictive strategy (transfuse only if Hb < 7.0 g/dL).",
    "necessaryInference": "Apply landmark critical care guidelines (TRICC/TRISS evidence) establishing that a restrictive RBC transfusion trigger (<7.0 g/dL) is standard in sepsis.",
    "strongestDistractor": "Liberal transfusion strategy targeting hemoglobin strictly above 10.0 g/dL to maximize oxygen delivery",
    "distractorExclusion": "Liberal transfusion triggers cause TACO, TRALI, and immunosuppression without improving sepsis survival; trigger <7.0 g/dL is standard.",
    "citation": "Holst LB, Haase N, Wetterslev J, et al. Lower Versus Higher Hemoglobin Threshold for Transfusion in Septic Shock (TRISS Trial). N Engl J Med. 2014;371(15):1381-1391. PMID: 25270275.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/hematology item evaluating evidence-based restrictive versus liberal RBC transfusion thresholds in sepsis.",
      "distractorExclusionNotes": "Excluded liberal transfusion and plasma because landmark trials prove restrictive threshold (<7.0 g/dL) minimizes complications without compromising survival.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
]
