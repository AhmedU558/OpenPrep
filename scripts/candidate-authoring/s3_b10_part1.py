# -*- coding: utf-8 -*-
import json

items_0226_to_0237 = [
  {
    "code": "op-c-s3-0226",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Receiver Operating Characteristic Threshold Shift Mechanics",
    "vignette": "A multidisciplinary hospital task force is evaluating a new continuous serum biomarker assay to rule out acute non-ST-elevation myocardial infarction (NSTEMI) in the emergency department. A receiver operating characteristic (ROC) curve is generated comparing the new assay to coronary angiography. The total area under the ROC curve (AUC) is 0.92. The test manufacturers propose a default diagnostic cutoff value of 15 ng/L, which yields a sensitivity of 91% and a specificity of 88%. The clinical leadership insists that for an emergency department rule-out test, the false-negative rate must be minimized to avoid discharging patients with impending myocardial necrosis. If the hospital lowers the cutoff threshold to 8 ng/L, which of the following changes will occur in the test's diagnostic performance characteristics?",
    "options": [
      "Sensitivity will increase, specificity will decrease, and the false-negative rate will decrease",
      "Sensitivity will decrease, specificity will increase, and the false-positive rate will decrease",
      "Both sensitivity and specificity will increase simultaneously",
      "The area under the ROC curve will increase significantly",
      "Positive predictive value will increase, while negative predictive value will decrease"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. Lowering the diagnostic cutoff threshold for a continuous test labels more individuals as test-positive. This captures more true positives (increasing sensitivity) and fewer false negatives (decreasing the false-negative rate [1 - sensitivity]). However, it inevitably misclassifies more healthy individuals as positive (increasing false positives and thereby decreasing specificity). For an acute rule-out emergency test, higher sensitivity and low false negatives are prioritized.",
      "B": "Decreasing sensitivity and increasing specificity occurs when the diagnostic threshold is raised, not lowered.",
      "C": "Sensitivity and specificity have an inherent inverse trade-off when moving the cutoff threshold along a single ROC curve; they cannot both increase unless the test itself is redesigned or combined with another modality.",
      "D": "The area under the ROC curve (AUC) represents the intrinsic overall discriminatory power of the test across all possible thresholds and does not change when selecting a different operating point on the curve.",
      "E": "Lowering the cutoff increases false positives, which decreases the positive predictive value (PPV = TP / [TP + FP]), while increasing the negative predictive value (NPV = TN / [TN + FN])."
    },
    "learningObjective": "Analyze threshold shifting along an ROC curve: lowering the cutoff increases sensitivity and negative predictive value while reducing specificity and the false-negative rate.",
    "necessaryInference": "Lowering the diagnostic cutoff in a continuous biomarker identifies more cases as positive -> Sensitivity rises, false negatives fall, specificity falls, and NPV rises.",
    "shortestValidSolution": "Lowering cutoff threshold -> Sensitivity increases, specificity decreases, false negatives decrease.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/20300484/",
      "https://pubmed.ncbi.nlm.nih.gov/31398592/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests fundamental ROC trade-offs and emergency department triage design (optimizing rule-out sensitivity by lowering cutoff threshold).",
      "distractorExclusionNotes": "Raising cutoff increases specificity; AUC is invariant to threshold choice; both cannot increase together along the same curve; PPV drops when threshold drops.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0227",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Likelihood Ratios and Fagan Nomogram Probability Shifts",
    "vignette": "A clinician is evaluating an asymptomatic 62-year-old man for coronary artery disease prior to starting a vigorous endurance exercise regimen. Based on the patient's Framingham risk profile, the pre-test probability of significant obstructive coronary artery disease is estimated at 20%. The patient undergoes an exercise treadmill stress ECG test. According to published literature for this demographic, exercise treadmill ECG testing has a sensitivity of 68% and a specificity of 84%. The stress ECG reveals 2.2 mm of horizontal ST-segment depression in leads V4-V6 during stage II of the Bruce protocol. Which of the following is the positive likelihood ratio (LR+) of this test, and what is its clinical effect on the post-test probability of coronary disease?",
    "options": [
      "Positive likelihood ratio is 0.81, which decreases the post-test probability below pre-test probability",
      "Positive likelihood ratio is 4.25, which generates a moderate increase in the post-test probability to approximately 50%",
      "Positive likelihood ratio is 15.2, which conclusively rules in coronary disease with post-test probability > 95%",
      "Positive likelihood ratio is 0.38, which rules out coronary disease with high confidence",
      "Positive likelihood ratio cannot be calculated without knowing disease prevalence in the local clinic"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "An LR of 0.81 is close to 1.0 (non-informative). The calculated positive likelihood ratio is 4.25, which meaningfully increases probability.",
      "B": "Correct. The positive likelihood ratio is calculated as: LR+ = Sensitivity / (1 - Specificity) = 0.68 / (1 - 0.84) = 0.68 / 0.16 = 4.25. In Bayesian clinical reasoning, an LR+ between 2 and 5 produces a small-to-moderate shift in probability (from 20% pre-test probability to ~51% post-test probability on a Fagan nomogram or via odds-probability conversion: pre-test odds = 0.20/0.80 = 0.25; post-test odds = 0.25 * 4.25 = 1.06; post-test probability = 1.06 / [1 + 1.06] = 51.5%). This establishes an intermediate probability requiring further anatomical or functional imaging.",
      "C": "An LR+ > 10 produces large, often conclusive shifts in probability (> 80-90%). Here, LR+ is 4.25, which is moderate, not conclusive.",
      "D": "0.38 approximates the negative likelihood ratio (LR- = [1 - sensitivity] / specificity = 0.32 / 0.84 = 0.38), which applies only after a negative test result.",
      "E": "Likelihood ratios are derived directly from sensitivity and specificity and are mathematically independent of disease prevalence, unlike predictive values (PPV and NPV)."
    },
    "learningObjective": "Calculate the positive likelihood ratio [Sensitivity / (1 - Specificity)] and determine the resulting post-test probability shift using Bayesian principles.",
    "necessaryInference": "LR+ = 0.68 / (1 - 0.84) = 0.68 / 0.16 = 4.25. An LR+ of 4.25 roughly doubles the pre-test odds, shifting a 20% pre-test probability to ~51% post-test probability.",
    "shortestValidSolution": "LR+ = 0.68 / 0.16 = 4.25 -> Moderate increase in probability from 20% to ~51%.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/16087796/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests quantitative calculation of LR+ and qualitative understanding of Bayesian revision from 20% pre-test probability to intermediate post-test probability.",
      "distractorExclusionNotes": "Calculation error in A; C overstates diagnostic power; D is LR-; E confuses LR with predictive values.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0228",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Intention-to-Treat versus Per-Protocol Clinical Trial Analysis",
    "vignette": "A randomized, double-blind, multicenter trial evaluates a new oral anticoagulant compared to standard warfarin for the prevention of ischemic stroke in 6,000 patients with non-valvular atrial fibrillation. During the 3-year study, 18% of patients allocated to the new drug discontinued it due to dyspepsia or cost and crossed over to standard warfarin, while 12% of patients allocated to warfarin discontinued therapy or took aspirin alone. The primary study investigators analyze all participants according to the group to which they were originally randomly assigned, regardless of adherence, side effects, or subsequent crossover. Which of the following is the primary scientific rationale for using this intention-to-treat (ITT) analysis rather than a per-protocol analysis?",
    "options": [
      "It maximizes the statistical power of the trial to demonstrate superiority of the experimental drug",
      "It completely eliminates the possibility of random type I and type II errors",
      "It preserves baseline prognostic balance established by randomization and prevents attrition/selection bias",
      "It measures the maximum biological efficacy of the drug under ideal, 100% adherent conditions",
      "It ensures that observational confounding from unmeasured baseline variables is completely eliminated"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Intention-to-treat analysis tends to dilute the apparent effect size toward the null when crossovers and non-compliance occur, meaning it typically decreases, rather than maximizes, statistical power compared to an artificial per-protocol subset.",
      "B": "No statistical methodology can eliminate random sampling error (type I or type II error), which is governed by sample size and alpha threshold.",
      "C": "Correct. The fundamental principle of Intention-to-Treat (ITT) analysis is to analyze all randomized patients in their assigned groups, regardless of protocol deviations, non-adherence, or treatment crossover. ITT preserves the baseline balance of known and unknown prognostic factors generated by randomization, eliminates attrition/selection bias (excluding non-adherent patients who often have worse prognoses), and reflects real-world clinical effectiveness.",
      "D": "Measuring biological efficacy under ideal 100% adherence is the objective of 'per-protocol' (on-treatment) analysis, but per-protocol analysis introduces severe selection bias and overestimates clinical utility.",
      "E": "Randomization eliminates baseline confounding at the point of allocation, but ITT specifically preserves that balance throughout post-randomization attrition and crossover."
    },
    "learningObjective": "Differentiate intention-to-treat from per-protocol analysis, identifying how ITT preserves randomization balance, prevents attrition bias, and estimates real-world effectiveness.",
    "necessaryInference": "Analyzing patients according to original assignment despite non-adherence and crossover defines intention-to-treat. ITT maintains prognostic comparability achieved by randomization.",
    "shortestValidSolution": "Intention-to-treat analysis -> Preserves randomization and avoids attrition bias.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/10517717/",
      "https://pubmed.ncbi.nlm.nih.gov/22495333/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests fundamental clinical trial methodology: understanding why ITT is mandatory for primary superiority analyses despite treatment dilution.",
      "distractorExclusionNotes": "ITT dilutes effect size; random error cannot be eliminated; per-protocol measures ideal efficacy but introduces bias; randomization balances baseline variables.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0229",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Underpowered Clinical Trial Type II Error and Power Analysis",
    "vignette": "A randomized controlled trial investigates whether a novel aldosterone synthase inhibitor reduces all-cause mortality compared to standard therapy in patients with advanced heart failure with preserved ejection fraction (HFpEF). Based on prior literature, the investigators hypothesized a 25% relative reduction in mortality. Due to slower-than-expected enrollment and budgetary constraints, the trial enrolled only 320 patients instead of the planned 1,200 patients. At 2 years, all-cause mortality was 14% in the intervention group and 18% in the control group (hazard ratio 0.78, 95% CI 0.52-1.18, p = 0.24). The authors conclude that the novel inhibitor is ineffective for reducing mortality in HFpEF. Which of the following is the most accurate critique of this conclusion?",
    "options": [
      "The conclusion is invalid because the study suffered from high type I error (alpha)",
      "The study proved that the true null hypothesis is definitively correct",
      "The wide confidence interval proves that the drug caused significant harm",
      "The trial was underpowered and had an elevated type II error (beta) rate, failing to exclude a clinically meaningful benefit",
      "The p-value of 0.24 indicates that there was a 24% probability that the null hypothesis was false"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Type I error (alpha) occurs when a researcher falsely rejects a true null hypothesis (false positive). Here, the trial failed to find statistical significance, so type I error did not occur.",
      "B": "A failure to achieve statistical significance (p >= 0.05) does not prove the null hypothesis ('absence of evidence is not evidence of absence'), especially in an underpowered study.",
      "C": "The 95% confidence interval (0.52 to 1.18) spans both a 48% reduction in mortality (0.52) and an 18% increase (1.18). It does not prove harm; rather, it indicates wide imprecision.",
      "D": "Correct. Enrolling only 320 of the planned 1,200 patients substantially reduced statistical power (1 - beta) and elevated the risk of a Type II error (beta, false negative). The wide 95% confidence interval (0.52-1.18) includes a potentially life-saving 48% reduction in mortality. Concluding that the drug is ineffective is flawed because the trial was simply underpowered to detect the hypothesized effect.",
      "E": "A p-value is the probability of obtaining results as extreme or more extreme assuming the null hypothesis is true; it is not the probability that the null hypothesis itself is true or false."
    },
    "learningObjective": "Critique clinical trial findings by identifying underpowered studies with high Type II error rates (beta) where wide confidence intervals fail to exclude meaningful clinical benefit.",
    "necessaryInference": "Enrolling 320 instead of 1,200 patients leads to inadequate power. The hazard ratio of 0.78 with 95% CI 0.52-1.18 includes significant benefit; the non-significant p-value represents a false-negative risk (Type II error).",
    "shortestValidSolution": "Inadequate sample size + non-significant result spanning major benefit -> Underpowered study with high Type II error.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/8468784/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Emphasizes the critical distinction between 'no evidence of effect' and 'evidence of no effect' in underpowered clinical research.",
      "distractorExclusionNotes": "Type I error is false positive; p > 0.05 never proves null; CI includes benefit; p-value definition is misrepresented.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0230",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Screening Biases Lead-Time versus Length-Time Bias Differentiation",
    "vignette": "A regional health system initiates a novel community screening program for pancreatic neuroendocrine tumors using sensitive circulating microRNA panels. Over a 5-year evaluation period, patients whose tumors were detected through the screening program demonstrated a 5-year survival rate of 78% from the time of diagnosis, compared to a 5-year survival rate of 42% among historical control patients whose tumors were diagnosed after developing obstructive jaundice or pain. However, an independent epidemiological audit reveals that the overall age-adjusted mortality rate from pancreatic neuroendocrine tumors across the entire regional population remained completely unchanged during this 5-year window. Furthermore, the screening test disproportionately detected slow-growing, indolent microadenomas that never metastasized. Which of the following best accounts for the apparent survival advantage observed in the screened cohort?",
    "options": [
      "Confounding by indication and Berkson selection bias",
      "Hawthorne observer effect and recall bias",
      "Observer expectancy bias and regression to the mean",
      "Publication bias and attrition bias",
      "Combination of lead-time bias and length-time bias"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Berkson bias refers to selection bias in hospitalized patient populations; confounding by indication occurs when treatment allocation is influenced by prognosis.",
      "B": "The Hawthorne effect refers to behavior changes under observation; recall bias involves differential memory recall in case-control studies.",
      "C": "Observer expectancy involves investigator influence on subject responses; regression to the mean involves extreme measurements naturally returning to average.",
      "D": "Publication bias affects systematic literature reviews; attrition bias stems from differential dropouts.",
      "E": "Correct. This scenario illustrates classic screening biases: 1) Lead-time bias: Early detection moves the date of diagnosis forward without postponing the time of death, artificially inflating survival time calculated from diagnosis while overall population mortality remains unchanged. 2) Length-time bias: Screening tests preferentially detect slowly progressive, indolent tumors with long asymptomatic preclinical phases, whereas rapidly fatal tumors progress too quickly to be caught by screening. Together, they create an illusion of improved survival without clinical benefit."
    },
    "learningObjective": "Differentiate screening biases, recognizing how lead-time bias (earlier diagnosis) and length-time bias (over-detecting indolent cases) artificially inflate survival statistics without reducing mortality.",
    "necessaryInference": "Increased 5-year survival calculated from diagnosis + unchanged overall population mortality + over-detection of indolent lesions = classic manifestation of lead-time and length-time screening biases.",
    "shortestValidSolution": "Higher survival from diagnosis with unchanged overall mortality + indolent cases -> Lead-time and length-time bias.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/21868770/",
      "https://pubmed.ncbi.nlm.nih.gov/15797988/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests sophisticated appraisal of cancer screening trials: distinguishing apparent survival gain (from date of diagnosis) from true population mortality reduction.",
      "distractorExclusionNotes": "Berkson bias is hospital sampling; recall bias is retrospective case-control; publication bias affects meta-analyses; attrition bias involves study dropouts.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0231",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Absolute Risk Reduction and Number Needed to Treat Calculation",
    "vignette": "A randomized, double-blind clinical trial evaluates the efficacy of an SGLT2 inhibitor in patients with chronic kidney disease (eGFR 25-60 mL/min/1.73 m2 and albuminuria). The primary composite endpoint is a sustained >= 50% decline in eGFR, end-stage kidney disease, or death from renal or cardiovascular causes over a median follow-up of 2.4 years. The primary composite outcome occurred in 198 of 2,152 patients (9.2%) in the SGLT2 inhibitor group and in 312 of 2,152 patients (14.5%) in the matching placebo group. All patients received background guideline-directed medical therapy. Which of the following represents the absolute risk reduction (ARR) and the number needed to treat (NNT) to prevent one primary composite outcome over 2.4 years?",
    "options": [
      "ARR is 5.3%, and NNT is 19",
      "ARR is 36.6%, and NNT is 3",
      "ARR is 5.3%, and NNT is 189",
      "ARR is 0.053%, and NNT is 1,887",
      "ARR cannot be calculated without survival curves"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. Absolute Risk Reduction (ARR) = Event rate in control group (CER) - Event rate in experimental group (EER) = 14.5% - 9.2% = 5.3% (or 0.053). Number Needed to Treat (NNT) = 1 / ARR = 1 / 0.053 = 18.86, which rounds up to 19 patients. This means treating 19 patients with the SGLT2 inhibitor for 2.4 years prevents one primary renal/cardiovascular composite event.",
      "B": "36.6% represents the Relative Risk Reduction (RRR = [14.5% - 9.2%] / 14.5% = 36.6%). Calculating NNT as 1 / RRR (1 / 0.366 = 2.7) is a common mathematical error that grossly exaggerates clinical benefit.",
      "C": "189 represents a decimal error in calculating NNT (dividing by 0.0053 instead of 0.053).",
      "D": "Confuses percentage representation with raw decimal fraction.",
      "E": "ARR and NNT are standardly calculated from cumulative incidence rates in randomized clinical trials."
    },
    "learningObjective": "Calculate absolute risk reduction (CER - EER) and number needed to treat (1 / ARR), contrasting ARR with relative risk reduction (RRR).",
    "necessaryInference": "Control event rate = 14.5%, experimental event rate = 9.2%. ARR = 14.5% - 9.2% = 5.3%. NNT = 1 / 0.053 = 18.86 -> 19.",
    "shortestValidSolution": "ARR = 14.5% - 9.2% = 5.3% -> NNT = 1 / 0.053 = 19.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/32970396/",
      "https://pubmed.ncbi.nlm.nih.gov/15797988/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests fundamental quantitative competence: accurate ARR derivation and distinguishing ARR from relative risk reduction (DAPA-CKD trial numbers).",
      "distractorExclusionNotes": "36.6% is RRR, not ARR; 189 is decimal miscalculation; 1887 is decimal miscalculation.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0232",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Cox Proportional Hazards and Time-to-Event Regression",
    "vignette": "A prospective cohort study of 12,500 middle-aged adults investigates the association between adherence to a Mediterranean dietary pattern and the incidence of ischemic stroke over 15 years of follow-up. Because participants enter the study at varying dates, experience varying durations of follow-up, and some are censored due to competing death or moving away, the investigators employ multivariable Cox proportional hazards regression analysis. After adjusting for age, sex, smoking, systolic blood pressure, and diabetes, the estimated hazard ratio (HR) for ischemic stroke comparing the highest to the lowest quartile of diet adherence is 0.72 (95% CI 0.58-0.89, p = 0.002). Which of the following is the most accurate interpretation of this hazard ratio and its underlying statistical assumptions?",
    "options": [
      "The total cumulative lifetime risk of stroke is reduced by 72% in the high adherence group",
      "At any given point in time during the study period, individuals in the highest adherence quartile experienced a 28% lower instantaneous rate of stroke compared to the lowest quartile, assuming the relative hazard remained constant over time",
      "72% of the strokes in the cohort were directly prevented by adherence to the Mediterranean diet",
      "The study proves that the Mediterranean diet reduces stroke with a p-value that guarantees zero residual confounding",
      "Cox regression can only be used if there is zero participant loss to follow-up"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "A hazard ratio of 0.72 corresponds to a 28% relative rate reduction (1 - 0.72 = 0.28), not a 72% reduction, and it represents an instantaneous hazard rate, not total cumulative lifetime risk.",
      "B": "Correct. A hazard ratio (HR) in a Cox proportional hazards model describes the relative likelihood of the event occurring at any specific point in time in the exposed group compared to the unexposed group (instantaneous event rate). An HR of 0.72 indicates a 28% reduction in the hazard of ischemic stroke at any given time, conditional on survival to that time. The crucial methodological assumption is 'proportional hazards'—that the relative risk ratio remains constant throughout the entire follow-up period.",
      "C": "72% is the HR value, not the population attributable risk or fraction of preventable strokes.",
      "D": "Observational cohort studies can adjust for measured confounders but can never guarantee the elimination of unmeasured residual confounding, regardless of the p-value.",
      "E": "The primary strength of Cox proportional hazards regression is its specific mathematical ability to handle right-censored data (loss to follow-up, end of study without event, competing mortality)."
    },
    "learningObjective": "Interpret hazard ratios derived from Cox proportional hazards models as instantaneous event rate ratios and understand the underlying proportional hazards assumption.",
    "necessaryInference": "Hazard ratio 0.72 = instantaneous hazard of 0.72 (28% reduction in hazard rate at any given time point) assuming proportional hazards across follow-up. Cox models specifically handle censored time-to-event data.",
    "shortestValidSolution": "HR 0.72 -> 28% reduction in instantaneous event rate at any time point under proportional hazards assumption.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/17395773/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests precise interpretation of time-to-event survival analysis, distinguishing instantaneous hazard from cumulative risk and verifying the proportional hazards assumption.",
      "distractorExclusionNotes": "72% is the ratio, not the reduction; 72% is not population attributable fraction; observational studies never eliminate residual confounding; Cox handles censoring.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0233",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Confounding versus Effect Modification Stratified Analysis",
    "vignette": "An epidemiological case-control study examines the association between occupational exposure to organic solvents and the risk of developing renal cell carcinoma (RCC). The crude odds ratio (OR) across the entire study population of 1,200 subjects is 2.40 (95% CI 1.70-3.40). The investigators suspect that cigarette smoking may influence this relationship. When the data are stratified by smoking status, the odds ratio between solvent exposure and RCC is 2.38 (95% CI 1.52-3.72) among active smokers and 2.42 (95% CI 1.48-3.95) among lifelong non-smokers. The Mantel-Haenszel adjusted odds ratio combining both strata is 2.40. Which of the following is the most accurate conclusion regarding the role of smoking in this study?",
    "options": [
      "Smoking is an effect modifier of the association between solvent exposure and renal cell carcinoma",
      "Smoking is a significant confounder of the association between solvent exposure and renal cell carcinoma",
      "Smoking is neither a confounder nor an effect modifier in this association",
      "Stratification was ineffective and the study results are invalid due to Berkson bias",
      "Solvent exposure is protective against renal cell carcinoma when controlled for smoking"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Effect modification (interaction) occurs when the strength of the association differs significantly across strata of a third variable (e.g., OR 1.2 in non-smokers vs OR 5.8 in smokers). Here, the stratum-specific ORs are virtually identical (2.38 vs 2.42), proving there is no effect modification.",
      "B": "Confounding occurs when the crude odds ratio differs meaningfully (typically by > 10-15%) from the stratum-specific or adjusted odds ratios. Here, the crude OR is 2.40, the stratum-specific ORs are 2.38 and 2.42, and the adjusted OR is 2.40. Because the crude and stratum-specific estimates are identical, smoking does not confound the relationship.",
      "C": "Correct. In epidemiological analysis: 1) Confounding is present when the crude association differs from the stratum-specific associations, and disappears after adjustment. 2) Effect modification is present when stratum-specific associations are significantly different from each other. Because the odds ratios are virtually identical across both strata (2.38 and 2.42) and identical to the crude odds ratio (2.40), smoking is neither a confounder nor an effect modifier in this study.",
      "D": "Stratification was methodologically sound and clearly demonstrated that the solvent-RCC relationship is homogeneous and unconfounded by smoking.",
      "E": "The odds ratios across all strata are well above 1.0 (2.40), demonstrating a strong positive risk association, not a protective effect."
    },
    "learningObjective": "Distinguish confounding (crude differs from stratum-specific estimates) from effect modification (stratum-specific estimates differ from each other) in stratified epidemiological data.",
    "necessaryInference": "Crude OR = 2.40. Smoker stratum OR = 2.38. Non-smoker stratum OR = 2.42. Strata are equal to each other (no effect modification) and equal to crude OR (no confounding). Therefore, smoking is neither.",
    "shortestValidSolution": "Crude OR = Stratum 1 OR = Stratum 2 OR -> Neither confounding nor effect modification.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/20300484/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Classic epidemiological distinction: testing ability to interpret stratified numbers to exclude both confounding and effect modification.",
      "distractorExclusionNotes": "Effect modifier requires different strata ORs; confounder requires crude to differ from strata; study is valid; OR 2.40 is harm, not protective.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0234",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Selection Bias Berkson Bias in Hospital-Based Case-Control Studies",
    "vignette": "A clinical research fellow conducts a hospital-based case-control study to evaluate whether chronic heavy coffee consumption is associated with pancreatic cancer. Cases are 150 patients admitted to the inpatient oncology service with biopsy-proven pancreatic adenocarcinoma. Controls are 150 patients admitted to the inpatient gastroenterology service for acute exacerbations of peptic ulcer disease and erosive gastritis. The study finds that patients with pancreatic cancer were significantly more likely to report heavy daily coffee consumption than the hospitalized gastrointestinal controls (OR 2.85, 95% CI 1.62-5.01, p < 0.001). The fellow concludes that coffee consumption is a strong independent risk factor for pancreatic adenocarcinoma. Which of the following forms of systematic bias most likely threatens the internal validity of this finding?",
    "options": [
      "Recall bias",
      "Hawthorne effect",
      "Attrition bias",
      "Selection bias (Berkson bias due to inappropriate hospitalized control selection)",
      "Lead-time bias"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Recall bias occurs when cases recall past exposures differently than healthy controls. While possible in case-control studies, the overwhelming structural flaw here is the selection of hospitalized peptic ulcer controls who systematically avoid coffee.",
      "B": "The Hawthorne effect involves subjects altering behavior because they are being actively observed in a trial.",
      "C": "Attrition bias occurs in longitudinal cohort studies when subjects are differentially lost to follow-up over time, not in retrospective case-control designs.",
      "D": "Correct. This scenario illustrates classic Berkson bias (Berkson's fallacy), a specific subtype of selection bias that arises when hospitalized patients are chosen as controls in case-control studies. Patients hospitalized with peptic ulcer disease and gastritis frequently experience dyspeptic pain triggered by coffee and have systematically reduced or stopped coffee consumption. Comparing pancreatic cancer cases to these coffee-avoiding gastrointestinal controls produces an artificial, spuriously elevated odds ratio that does not reflect the general population exposure rate.",
      "E": "Lead-time bias is a screening artifact where early diagnosis falsely prolongs measured survival."
    },
    "learningObjective": "Identify Berkson bias (hospital-based selection bias) in case-control studies where controls hospitalized with conditions linked to the exposure skew the apparent risk estimate.",
    "necessaryInference": "Hospitalized controls with peptic ulcer disease systematically avoid coffee due to dyspepsia -> Control exposure rate is artificially depressed -> Artificial inflation of the odds ratio in pancreatic cancer cases (Berkson bias).",
    "shortestValidSolution": "Hospitalized control selection with disease affecting exposure (ulcer avoiding coffee) -> Berkson selection bias.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/7070108/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Classic epidemiological case-control trap: recognizes Berkson bias when hospitalized controls have diseases that alter the exposure of interest.",
      "distractorExclusionNotes": "Recall bias is secondary to structural selection bias; Hawthorne effect is behavioral observation; attrition is cohort loss; lead-time is screening survival.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."s fallacy and case-control design (PMID: 7070108).",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0235",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Prevalence Shifts and Predictive Value Dynamics",
    "vignette": "A rapid nucleic acid amplification test (NAAT) for genital Chlamydia trachomatis infection has a documented sensitivity of 95% and a specificity of 98%. A public health physician utilizes this exact test in two distinct clinical settings: Clinic A is an urban sexually transmitted infection (STI) referral clinic where the prevalence of chlamydia among symptomatic attendees is 25%. Clinic B is a university student routine health center where the prevalence of asymptomatic chlamydia is 1.5%. How will the diagnostic performance metrics of this identical NAAT differ between Clinic A and Clinic B?",
    "options": [
      "Sensitivity and specificity will both be significantly higher in Clinic A than in Clinic B",
      "Sensitivity will be lower in Clinic A, but positive predictive value will be identical in both clinics",
      "Negative predictive value will be higher in Clinic A than in Clinic B",
      "Positive predictive value will be significantly lower in Clinic A than in Clinic B",
      "Sensitivity and specificity remain constant, while positive predictive value is markedly higher in Clinic A and negative predictive value is higher in Clinic B"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Sensitivity and specificity are intrinsic properties of the diagnostic test itself and remain constant across differing disease prevalences.",
      "B": "Sensitivity does not depend on prevalence, and PPV varies dramatically with prevalence.",
      "C": "Negative predictive value (NPV) decreases as disease prevalence increases; because Clinic A has a higher prevalence (25% vs 1.5%), NPV is actually lower in Clinic A than in Clinic B.",
      "D": "Positive predictive value (PPV) is directly proportional to prevalence; PPV is significantly higher in high-prevalence Clinic A (where a positive result is more likely a true positive) than in low-prevalence Clinic B (where false positives equal or exceed true positives).",
      "E": "Correct. Sensitivity and specificity are intrinsic mathematical properties of the diagnostic test and are independent of disease prevalence. In contrast, predictive values are heavily prevalence-dependent: as disease prevalence increases (Clinic A = 25%), the positive predictive value (PPV) increases substantially (in Clinic A, PPV ~ 94%; in Clinic B, PPV ~ 42%), while the negative predictive value (NPV) decreases slightly (Clinic A NPV ~ 98.3%; Clinic B NPV ~ 99.9%). In low-prevalence settings, even a highly specific test produces significant proportions of false-positive results."
    },
    "learningObjective": "Demonstrate the mathematical relationship between disease prevalence and diagnostic test performance: sensitivity and specificity remain stable, while PPV increases and NPV decreases as prevalence rises.",
    "necessaryInference": "Identical test in high-prevalence (25%) vs low-prevalence (1.5%) population. Sensitivity and specificity do not change. High prevalence increases PPV and decreases NPV.",
    "shortestValidSolution": "Higher prevalence -> Higher PPV, lower NPV; sensitivity and specificity unchanged.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/20300484/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests fundamental Bayesian relationship between pre-test probability (prevalence) and predictive values, demonstrating why low-prevalence screening produces false positives.",
      "distractorExclusionNotes": "Sensitivity and specificity do not change with prevalence; NPV is higher in low prevalence; PPV is higher (not lower) in high prevalence.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0236",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Post-Hoc Subgroup Analysis and Multiplicity Inflation",
    "vignette": "A large Phase III randomized trial of 8,000 patients evaluates whether adding an endothelin receptor antagonist to standard care improves cardiovascular mortality in patients with heart failure. The primary intention-to-treat analysis shows no statistically significant difference in 3-year mortality between the experimental drug and placebo (hazard ratio 0.96, 95% CI 0.86-1.07, p = 0.48). Disappointed by the neutral primary endpoint, the investigators conduct 25 exploratory post-hoc subgroup analyses examining combinations of age, sex, renal function, biomarker levels, and geographic regions. In one specific post-hoc subgroup—non-smoking women aged 50-65 with baseline serum sodium < 138 mEq/L (n = 180)—the drug demonstrated a dramatic mortality reduction with an unadjusted p-value of 0.02. The investigators publish a manuscript advocating for targeted drug approval in this subgroup. Which of the following is the most appropriate statistical critique of their recommendation?",
    "options": [
      "The finding is at extreme risk of being a false positive (Type I error inflation) due to multiple testing without alpha correction, and must be considered hypothesis-generating only",
      "The result is definitive and should guide clinical guidelines immediately because p < 0.05",
      "The finding is invalid because post-hoc subgroup analyses can only be conducted using intention-to-treat methods",
      "The result indicates severe measurement bias and proves that the drug caused unmeasured toxicity in men",
      "The study should have performed a Bonferroni correction by dividing the p-value by 25, which would make the result even more statistically significant"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. When multiple statistical hypothesis tests are conducted on the same dataset (the 'multiplicity' or 'data dredging' problem), the cumulative probability of finding at least one statistically significant result by pure random chance increases exponentially: Family-wise error rate = 1 - (1 - alpha)^k. With 25 independent tests at alpha = 0.05, the probability of at least one false positive exceeds 72%. Unplanned, post-hoc subgroup analyses performed after an overall negative trial are strictly hypothesis-generating and cannot justify clinical treatment recommendations without prospective validation in an independent trial.",
      "B": "A nominal unadjusted p < 0.05 in a post-hoc subgroup after 25 tests has a high likelihood of being random noise and cannot justify clinical adoption.",
      "C": "Subgroup analyses inherently stratify by baseline characteristics; the methodological defect is multiplicity and lack of pre-specification, not a failure of ITT within the subgroup.",
      "D": "The subgroup result does not indicate measurement bias or prove toxicity in men; it reflects statistical data mining.",
      "E": "A Bonferroni correction divides the significance threshold alpha (0.05 / 25 = 0.002), requiring p < 0.002 for significance; here p = 0.02, which would render the finding non-significant, not more significant."
    },
    "learningObjective": "Critique post-hoc subgroup analyses by recognizing multiplicity and Type I error inflation (data dredging), identifying such findings as hypothesis-generating only.",
    "necessaryInference": "Overall trial is negative (p = 0.48). 25 post-hoc subgroup tests performed, one yields p = 0.02. Multiplicity inflates false-positive rate (> 70%). The subgroup finding is uncorrected random noise and strictly hypothesis-generating.",
    "shortestValidSolution": "Post-hoc subgroup finding after negative trial and multiple testing -> Type I error inflation, hypothesis-generating only.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/17395773/",
      "https://pubmed.ncbi.nlm.nih.gov/22495333/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Evaluates critical appraisal skills regarding subgroup analyses and multiple testing issues (data dredging in negative trials).",
      "distractorExclusionNotes": "p < 0.05 is invalid without multiplicity adjustment; ITT does not prevent subgroup dredging; Bonferroni lowers alpha threshold; no measurement bias.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0237",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Non-Inferiority Clinical Trial Margin Interpretation",
    "vignette": "A Phase IV randomized clinical trial evaluates whether a generic biosimilar formulation of subcutaneous teriparatide is non-inferior to the reference brand-name drug for increasing lumbar spine bone mineral density (BMD) at 12 months in postmenopausal osteoporosis. The pre-specified non-inferiority margin is set at -1.5% (meaning the biosimilar cannot be worse than the reference by more than 1.5% in percentage BMD increase). At 12 months, the mean difference in lumbar spine BMD increase (biosimilar minus reference) is -0.4% with a 95% confidence interval of -1.1% to +0.3%. What is the correct scientific and regulatory interpretation of these trial results?",
    "options": [
      "The biosimilar failed to establish non-inferiority because the point estimate (-0.4%) is negative",
      "The biosimilar established non-inferiority to the reference drug because the lower bound of the 95% confidence interval (-1.1%) lies entirely above the pre-specified non-inferiority margin (-1.5%)",
      "The biosimilar demonstrated superiority over the reference drug because the 95% confidence interval crosses zero",
      "The trial is inconclusive and uninterpretable because non-inferiority trials require a 99% confidence interval",
      "The reference drug was proven to be statistically superior to the biosimilar because the upper bound of the confidence interval (+0.3%) is positive"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "A negative point estimate does not signify non-inferiority failure; non-inferiority specifically allows the experimental drug to be slightly worse, provided the difference does not exceed the pre-specified clinical margin.",
      "B": "Correct. In a non-inferiority trial, the objective is to prove that a new intervention is not clinically worse than an established standard by more than a pre-specified margin (delta, here -1.5%). Non-inferiority is formally established if the lower boundary of the 95% confidence interval around the treatment difference lies entirely to the right (above) the non-inferiority margin (-delta). Because the lower bound of -1.1% is greater than -1.5%, non-inferiority is conclusively established.",
      "C": "Crossing zero means there is no statistically significant difference between the two treatments; it definitively does NOT demonstrate superiority.",
      "D": "Regulatory agencies (FDA, EMA) standardly require a 95% two-sided confidence interval (or equivalent 97.5% one-sided interval) for non-inferiority trials.",
      "E": "Because the confidence interval crosses zero (-1.1% to +0.3%), neither drug is statistically superior to the other."
    },
    "learningObjective": "Interpret non-inferiority clinical trials: non-inferiority is proven when the lower limit of the 95% confidence interval lies above the pre-specified non-inferiority margin.",
    "necessaryInference": "Non-inferiority margin = -1.5%. Difference 95% CI is -1.1% to +0.3%. The entire confidence interval is above -1.5%, proving non-inferiority.",
    "shortestValidSolution": "Lower bound of 95% CI (-1.1%) is above non-inferiority margin (-1.5%) -> Non-inferiority established.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/22495333/",
      "https://pubmed.ncbi.nlm.nih.gov/17395773/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests non-inferiority trial interpretation: understanding how confidence interval bounds relate to the delta margin to confirm non-inferiority without superiority.",
      "distractorExclusionNotes": "Negative point estimate is permissible within delta; crossing zero disproves superiority; 95% CI is the regulatory standard; reference drug is not superior.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  }
]
print(f"Loaded {len(items_0226_to_0237)} items for S3 B10 Part 1")
