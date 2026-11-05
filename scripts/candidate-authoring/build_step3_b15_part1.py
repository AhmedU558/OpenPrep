# Step 3 Batch 15 Part 1: Items 0351 - 0362
import json

items_b15_p1 = [
  {
    "code": "op-c-s3-0351",
    "exam": "Step 3",
    "subject": "Biostatistics",
    "system": "General Principles",
    "topic": "Number Needed to Treat (NNT)",
    "subtopic": "Calculation from Absolute Risk Reduction (ARR) in Time-Horizon Trials",
    "provisionalDifficulty": 4,
    "stem": "A multicenter, double-blind, randomized controlled trial evaluates a novel oral factor Xa inhibitor versus dose-adjusted warfarin for the secondary prevention of recurrent ischemic stroke in patients with non-valvular atrial fibrillation and a prior transient ischemic attack. Investigators enroll and randomize 5,000 eligible patients (2,500 assigned to the novel factor Xa inhibitor group and 2,500 assigned to the warfarin group). All patients are followed prospectively for exactly 2 years.\n\nAt the 2-year trial completion, primary outcome analysis reveals that recurrent ischemic stroke occurred in:\n- 75 patients in the novel factor Xa inhibitor group\n- 175 patients in the warfarin group\n\nThe difference between the two treatment groups is statistically significant (p = 0.001). A hospital pharmacy and therapeutics committee reviews these data to determine whether the clinical benefit justifies adding the higher-cost novel agent to the health system formulary.\n\nWhich of the following represents the Number Needed to Treat (NNT) to prevent one additional recurrent ischemic stroke over a 2-year period with the novel factor Xa inhibitor compared to warfarin, and the formula upon which it is based?",
    "choices": [
        [
            "25 patients treated for 2 years; calculated as the reciprocal of the absolute risk reduction (1 / 0.040)",
            "Calculating Number Needed to Treat (NNT) requires a two-step derivation from the raw trial data: (1) Calculate the event rates in both groups over the 2-year follow-up: Control event rate (CER, warfarin group) = 175 / 2,500 = 0.070 (7.0%). Experimental event rate (EER, novel factor Xa inhibitor group) = 75 / 2,500 = 0.030 (3.0%). (2) Calculate the Absolute Risk Reduction (ARR): ARR = CER - EER = 0.070 - 0.030 = 0.040 (4.0%). (3) Calculate NNT as the reciprocal of ARR: NNT = 1 / ARR = 1 / 0.040 = 25. This indicates that 25 patients must be treated with the novel factor Xa inhibitor instead of warfarin for 2 years to prevent one additional recurrent ischemic stroke. NNT is always mathematically tied to the specific time horizon of the trial."
        ],
        [
            "17 patients treated for 2 years; calculated as the reciprocal of the relative risk reduction (1 / 0.060)",
            "This is calculated incorrectly by confusing relative and absolute risk reductions or by miscalculating the event rate difference."
        ],
        [
            "43 patients treated for 2 years; calculated from the relative risk reduction of 57.1% (reciprocal of 0.023)",
            "The relative risk reduction is RRR = (0.070 - 0.030) / 0.070 = 57.1% (0.571). Taking 1 / 0.023 confuses relative reduction with absolute rates; NNT cannot be derived directly from RRR without baseline risk."
        ],
        [
            "33 patients treated for 2 years; calculated as the reciprocal of the active treatment event rate (1 / 0.030)",
            "33 is 1 / EER (1 / 0.030), which measures the number of patients on active drug per single stroke event in that cohort, completely ignoring the comparator control arm."
        ],
        [
            "14 patients treated for 2 years; calculated as the reciprocal of the control group event rate (1 / 0.070)",
            "14 is 1 / CER (1 / 0.070), which reflects only the baseline event rate in the control group without accounting for active treatment efficacy."
        ]
    ],
    "shortestValidSolution": "CER = 175/2,500 = 7.0%, EER = 75/2,500 = 3.0% -> ARR = 7.0% - 3.0% = 4.0% (0.040) -> NNT = 1 / ARR = 1 / 0.040 = 25.",
    "necessaryInference": "Independently calculate control and experimental event rates from raw counts (7.0% vs 3.0%), determine absolute risk reduction (4.0%), and compute NNT as 1 / ARR = 25.",
    "strongestDistractor": "33 patients treated for 2 years; calculated as the reciprocal of the active treatment event rate (1 / 0.030)",
    "distractorExclusion": "1 / EER ignores the control arm; NNT strictly requires subtracting experimental risk from control risk.",
    "citation": "Sedgwick P. What is Number Needed to Treat (NNT)? BMJ. 2014;348:g2665. PMID: 24719460."
},
  {
    "code": "op-c-s3-0352",
    "exam": "Step 3",
    "subject": "Clinical Biostatistics & Epidemiology",
    "system": "General Principles",
    "topic": "Number Needed to Harm (NNH)",
    "subtopic": "Calculation from Absolute Risk Increase (ARI) in Adverse Event Analysis",
    "provisionalDifficulty": 4,
    "stem": "In the same randomized controlled trial evaluating the novel anticoagulant versus placebo over 3 years in 6,000 patients (3,000 in each group), safety endpoints are systematically tracked. Major gastrointestinal bleeding occurs in 120 patients receiving the novel anticoagulant (4.0%) compared to 45 patients receiving placebo (1.5%). The difference in major bleeding is statistically significant (p = 0.002). Which of the following is the Number Needed to Harm (NNH) for one additional major gastrointestinal bleed over the 3-year study period associated with the novel anticoagulant?",
    "choices": [
      ["40 patients treated for 3 years", "The Number Needed to Harm (NNH) represents the number of patients exposed to a risk factor or therapy over a defined period required to cause one additional adverse event. Calculation requires two steps: (1) Calculate the Absolute Risk Increase (ARI, also termed Attributable Risk): ARI = Adverse event rate in exposed/experimental group (EER) - Adverse event rate in unexposed/control group (CER). Here, EER = 120 / 3,000 = 4.0% (0.04), and CER = 45 / 3,000 = 1.5% (0.015). Therefore, ARI = 0.04 - 0.015 = 0.025 (2.5%). (2) Calculate NNH as the reciprocal of ARI: NNH = 1 / ARI = 1 / 0.025 = 40. This means that for every 40 patients treated with the novel anticoagulant for 3 years, one additional major gastrointestinal hemorrhage will occur. In clinical practice, NNT (20 to prevent a stroke) is directly compared with NNH (40 to cause a bleed) to evaluate the net clinical benefit of therapy."],
      ["25 patients treated for 3 years", "Calculated by confusing the 4% event rate in the active arm (1 / 0.04 = 25) with the net difference between groups."],
      ["67 patients treated for 3 years", "Calculated by using the reciprocal of the control group bleeding rate (1 / 0.015 = 66.7)."],
      ["100 patients treated for 3 years", "Calculated by incorrectly estimating a 1.0% absolute risk increase."],
      ["160 patients treated for 3 years", "Calculated by dividing the total sample size by the number of events in the control group."]
    ],
    "shortestValidSolution": "EER = 4.0%, CER = 1.5% -> ARI = 4.0% - 1.5% = 2.5% (0.025) -> NNH = 1 / ARI = 1 / 0.025 = 40.",
    "necessaryInference": "Calculate Absolute Risk Increase (4.0% - 1.5% = 2.5%) and compute Number Needed to Harm as 1 / ARI = 40.",
    "strongestDistractor": "25",
    "distractorExclusion": "25 is 1 / EER (ignoring the control group rate); NNH must subtract the baseline rate in the unexposed control group.",
    "citation": "Sedgwick P. What is Number Needed to Harm (NNH)? BMJ. 2014;348:g3251. PMID: 24838637."
  },
  {
    "code": "op-c-s3-0353",
    "exam": "Step 3",
    "subject": "Clinical Biostatistics & Diagnostic Testing",
    "system": "General Principles",
    "topic": "Diagnostic Test Performance and Disease Prevalence",
    "subtopic": "Prevalence Shifts: Impact on PPV and NPV with Constant Sensitivity and Specificity",
    "provisionalDifficulty": 4,
    "stem": "A novel rapid antigen screening test for a respiratory virus has a measured sensitivity of 90% and a specificity of 95%. The test is deployed in two distinct clinical settings: Setting A is a tertiary hospital fever clinic during a severe winter outbreak where the disease prevalence is 40%. Setting B is an asymptomatic employee screening program in a community office where the disease prevalence is 1%. Which of the following best describes how the Positive Predictive Value (PPV) and Negative Predictive Value (NPV) of the test compare between Setting A and Setting B?",
    "choices": [
      ["Setting A has a significantly higher Positive Predictive Value and lower Negative Predictive Value than Setting B, while sensitivity and specificity remain unchanged", "The sensitivity (true positive rate) and specificity (true negative rate) are intrinsic properties of a diagnostic test that remain constant regardless of the population tested. In contrast, PREDICTIVE VALUES (PPV and NPV) ARE PROPERLY DEPENDENT ON THE PRE-TEST PROBABILITY (PREVALENCE) OF DISEASE IN THE POPULATION: (1) POSITIVE PREDICTIVE VALUE (PPV): As disease prevalence increases, the number of true positive cases in the population increases while the number of healthy people (who generate false positives) decreases; consequently, PPV RISES MARKEDLY. In Setting A (prevalence 40%), PPV = ~92.3%. In Setting B (prevalence 1%), despite high specificity of 95%, false positives outnumber true positives, resulting in a low PPV of only ~15.4%. (2) NEGATIVE PREDICTIVE VALUE (NPV): As disease prevalence increases, NPV FALLS because false negatives increase relative to true negatives. Conversely, when disease prevalence is low (Setting B), NPV is extraordinarily high (> 99.9%)."],
      ["Setting A and Setting B have identical Positive Predictive Values and Negative Predictive Values because sensitivity and specificity are fixed", "Predictive values are mathematically dependent on prevalence; only sensitivity and specificity remain constant across different prevalences."],
      ["Setting B has a significantly higher Positive Predictive Value because lower background disease minimizes false positives", "In low prevalence, true positives are rare, meaning false positives outnumber true positives, resulting in a drastically lower PPV."],
      ["Sensitivity increases in Setting A due to higher disease severity, while specificity decreases in Setting B", "Sensitivity and specificity are defined by test performance characteristics against a gold standard and do not change with disease prevalence."],
      ["Positive Predictive Value is higher in Setting B because the test identifies disease earlier in the clinical course", "Lower prevalence always reduces PPV; in a 1% prevalence setting, 85% of positive tests will be false positives."]
    ],
    "shortestValidSolution": "Higher prevalence (Setting A) -> higher PPV and lower NPV; lower prevalence (Setting B) -> lower PPV and higher NPV; sensitivity/specificity remain constant.",
    "necessaryInference": "Apply Bayes theorem and diagnostic testing principles: PPV increases with disease prevalence, NPV decreases with disease prevalence, while sensitivity and specificity are prevalence-independent.",
    "strongestDistractor": "Setting A and Setting B have identical Positive Predictive Values and Negative Predictive Values because sensitivity and specificity are fixed",
    "distractorExclusion": "Predictive values directly depend on prevalence; assuming PPV is fixed is a classic board examination trap.",
    "citation": "Trevethan R. Sensitivity, Specificity, and Predictive Values: Foundations, Pliabilities, and Pitfalls in Research and Practice. Front Public Health. 2017;5:307. PMID: 29209612."
  },
  {
    "code": "op-c-s3-0354",
    "exam": "Step 3",
    "subject": "Clinical Biostatistics & Diagnostic Testing",
    "system": "General Principles",
    "topic": "Likelihood Ratios",
    "subtopic": "Calculation of Positive and Negative Likelihood Ratios and Post-Test Odds",
    "provisionalDifficulty": 4,
    "stem": "A diagnostic fecal immunochemical test (FIT) for colorectal neoplasia has a sensitivity of 80% (0.80) and a specificity of 90% (0.90). A 50-year-old asymptomatic man undergoes screening with this test, and the result is reported as negative. Which of the following is the Negative Likelihood Ratio (LR-) of this diagnostic test, and what is its clinical significance?",
    "choices": [
      ["0.22; a negative test result significantly decreases the likelihood that the patient has colorectal neoplasia", "Likelihood ratios (LR) describe how many times more (or less) likely a test result is to occur in patients with disease compared to patients without disease. They are independent of disease prevalence and are used to convert pre-test odds to post-test odds: Post-test odds = Pre-test odds x LR. (1) Positive Likelihood Ratio (LR+): LR+ = Sensitivity / (1 - Specificity) = 0.80 / (1 - 0.90) = 0.80 / 0.10 = 8.0 (an LR+ > 10 generates large, conclusive shifts in probability). (2) NEGATIVE LIKELIHOOD RATIO (LR-): LR- = (1 - Sensitivity) / Specificity = (1 - 0.80) / 0.90 = 0.20 / 0.90 = 0.22. (An LR- between 0.2 and 0.5 provides a moderate decrease in disease probability; an LR- < 0.1 generates large, conclusive decreases). Therefore, an LR- of 0.22 indicates that a negative test result substantially reduces the post-test probability of colorectal neoplasia."],
      ["0.10; a negative test result completely rules out colorectal neoplasia with 100% certainty", "Calculated by confusing (1 - specificity) with LR-; no screening test with 80% sensitivity completely excludes disease with 100% certainty."],
      ["0.89; a negative test result provides virtually no meaningful change in post-test probability", "Calculated by inverting the ratio (0.80 / 0.90 = 0.89); 0.89 represents a near-useless test with minimal shift in odds."],
      ["4.5; a negative test result increases the post-test probability of neoplasia", "An LR- cannot exceed 1.0 if a test is useful; values > 1.0 indicate increased probability of disease."],
      ["8.0; a negative test result strongly confirms the diagnosis of neoplasia", "8.0 is the POSITIVE Likelihood Ratio (LR+ = 0.80 / 0.10 = 8.0), not the Negative Likelihood Ratio."]
    ],
    "shortestValidSolution": "Sensitivity = 0.80, Specificity = 0.90 -> LR- = (1 - Sensitivity) / Specificity = (1 - 0.80) / 0.90 = 0.20 / 0.90 = 0.22.",
    "necessaryInference": "Calculate Negative Likelihood Ratio as (1 - Sensitivity) / Specificity = 0.20 / 0.90 = 0.22, and interpret its clinical utility in lowering post-test probability.",
    "strongestDistractor": "8.0; a negative test result strongly confirms the diagnosis of neoplasia",
    "distractorExclusion": "8.0 is the Positive Likelihood Ratio (LR+); the question specifically asks for the Negative Likelihood Ratio for a negative result.",
    "citation": "Grimes DA, Schulz KF. Refining Clinical Diagnosis with Likelihood Ratios. Lancet. 2005;365(9469):1500-1505. PMID: 15850636."
  },
  {
    "code": "op-c-s3-0355",
    "exam": "Step 3",
    "subject": "Clinical Biostatistics & Research Methodology",
    "system": "General Principles",
    "topic": "Intention-to-Treat (ITT) vs Per-Protocol Analysis",
    "subtopic": "Preservation of Baseline Randomization and Prevention of Attrition Bias",
    "provisionalDifficulty": 4,
    "stem": "An investigator conducts a randomized, double-blind, multicenter trial comparing a novel oral antiplatelet agent against standard aspirin in 4,000 patients with established peripheral artery disease. Patients are randomized 1:1 to receive either the novel drug or aspirin for 2 years. During the trial, 300 patients in the novel drug arm discontinue their medication due to intolerable nausea, and 100 patients in the aspirin arm stop taking their medication. When the trial concludes, the primary statistician analyzes all 4,000 randomized patients according to their originally assigned treatment group, regardless of whether they adhered to the protocol, experienced side effects, or discontinued their pills (Intention-to-Treat [ITT] analysis). The sponsor requests that the statistician exclude all non-adherent patients and analyze only those who completed the full 2-year drug protocol without deviation (Per-Protocol analysis). Which of the following is the primary methodological justification for maintaining the Intention-to-Treat analysis as the primary trial evaluation?",
    "choices": [
      ["Intention-to-treat analysis preserves the prognostic balance achieved by randomization, prevents attrition bias, and reflects real-world clinical effectiveness", "An INTENTION-TO-TREAT (ITT) ANALYSIS analyzes every randomized patient within the treatment group to which they were originally assigned, regardless of adherence, protocol violations, crossover, or early study discontinuation ('once randomized, always analyzed'). The primary advantages of ITT are: (1) PRESERVATION OF RANDOMIZATION: Randomization evenly distributes both known and unknown confounding variables between trial arms; excluding non-adherent patients breaks randomization and introduces selection and attrition bias. (2) REAL-WORLD EFFECTIVENESS: ITT provides an unbiased estimate of real-world clinical effectiveness, because in clinical practice patients frequently discontinue medications due to adverse effects. (3) CONSERVATIVE BIAS: ITT typically biases results toward the null hypothesis, avoiding overly optimistic claims of efficacy. In contrast, PER-PROTOCOL ANALYSIS analyzes only subjects who strictly adhered to the protocol; while it assesses biological efficacy under ideal conditions, it introduces significant confounding and attrition bias."],
      ["Intention-to-treat analysis eliminates all risk of Type II statistical error and guarantees 100% statistical power", "ITT does not eliminate Type II error; in fact, non-adherence dilutes the observed treatment effect toward the null, potentially increasing Type II error."],
      ["Intention-to-treat analysis allows non-randomized observational cohorts to be pooled into the trial dataset", "ITT applies strictly to randomized trials and cannot be used to pool non-randomized observational data."],
      ["Intention-to-treat analysis selectively inflates the measured effect size to favor novel pharmaceutical agents", "ITT dilutes the treatment effect toward the null hypothesis due to non-adherent subjects, making it a conservative test rather than an inflated one."],
      ["Per-protocol analysis is legally prohibited by the FDA in all prospective clinical trials", "The FDA accepts per-protocol analyses as supportive secondary analyses (especially in non-inferiority trials), but ITT remains the primary standard for superiority trials."]
    ],
    "shortestValidSolution": "Intention-to-treat analysis analyzes all randomized patients according to original assignment -> preserves randomization balance, prevents attrition bias, and reflects real-world effectiveness.",
    "necessaryInference": "Explain the methodological rationale for Intention-to-Treat (ITT) analysis: preserves the prognostic balance generated by randomization and avoids attrition bias.",
    "strongestDistractor": "Intention-to-treat analysis selectively inflates the measured effect size to favor novel pharmaceutical agents",
    "distractorExclusion": "ITT actually dilutes effect size toward the null because dropouts are included, making it conservative rather than inflated.",
    "citation": "Gupta SK. Intention-to-Treat Concept: A Review. Perspect Clin Res. 2011;2(3):109-112. PMID: 21998799."
  },
  {
    "code": "op-c-s3-0356",
    "exam": "Step 3",
    "subject": "Clinical Biostatistics & Epidemiology",
    "system": "General Principles",
    "topic": "Selection Bias and Berkson Fallacy",
    "subtopic": "Hospital Admission Rate Bias Distorting Exposure-Disease Associations",
    "provisionalDifficulty": 4,
    "stem": "An epidemiologist designs a hospital-based case-control study to evaluate the potential association between chronic alcohol consumption and primary osteoarthritis of the hip. The investigator recruits 200 patients admitted to the orthopedic inpatient ward with advanced hip osteoarthritis as cases, and selects 200 patients admitted to the trauma and pulmonary inpatient wards in the same hospital as controls. The study analysis reveals a statistically significant inverse association (Odds Ratio: 0.42, p = 0.01), leading the author to conclude that alcohol consumption exerts a biological protective effect against developing osteoarthritis. A peer reviewer notes that hospitalized control patients had extraordinarily high rates of alcohol-related motor vehicle trauma, chronic pancreatitis, and alcoholic liver disease compared to the general community. Which of the following forms of methodological bias is primarily responsible for the author's spurious conclusion?",
    "choices": [
      ["Berkson bias (admission rate bias)", "The study is severely confounded by BERKSON BIAS (also known as admission rate bias or Berkson's fallacy), a specific form of SELECTION BIAS that occurs when hospitalized patients are utilized as control subjects in hospital-based case-control studies. Hospitalized controls typically have significantly higher rates of exposure to common lifestyle risk factors (such as alcohol, tobacco, or obesity) that cause or contribute to their hospitalizations (e.g., alcohol-induced trauma, pancreatitis, cirrhosis) compared to the general population. When the hospitalized osteoarthritis cases (who have baseline general-population alcohol rates) are compared against these 'hyper-exposed' hospitalized controls, an artificial, spurious inverse association is generated, falsely suggesting that alcohol is 'protective' against osteoarthritis. Mitigating Berkson bias requires selecting controls from the general community or utilizing controls hospitalized for conditions completely unrelated to the exposure."],
      ["Hawthorne effect (observer bias)", "The Hawthorne effect occurs when study participants alter their behavior simply because they are aware of being observed, not an artifact of selecting hospitalized controls."],
      ["Lead-time bias", "Lead-time bias occurs in screening tests when earlier detection falsely creates the illusion of prolonged survival without altering the actual time of death."],
      ["Recall bias", "Recall bias occurs in retrospective studies when cases recall past exposures differently than controls; it does not explain hospital admission rate imbalances."],
      ["Pygmalion effect", "The Pygmalion (Rosenthal) effect occurs when an investigator's subconscious expectations inadvertently influence the experimental outcomes or participant performance."]
    ],
    "shortestValidSolution": "Hospital-based case-control study where hospitalized controls have high rates of alcohol-related admissions -> Berkson bias (admission rate selection bias).",
    "necessaryInference": "Identify Berkson bias: hospital-based controls have different hospital admission probabilities related to the exposure, creating spurious statistical associations.",
    "strongestDistractor": "Recall bias",
    "distractorExclusion": "Recall bias involves differential memory recall by patients; Berkson bias is a structural selection bias arising from recruiting controls from a hospitalized population.",
    "citation": "Snoep JD, et al. The Different Faces of Selection Bias in Clinical Research. J Clin Epidemiol. 2014;67(11):1199-1202. PMID: 25150893."
  },
  {
    "code": "op-c-s3-0357",
    "exam": "Step 3",
    "subject": "Clinical Biostatistics & Epidemiology",
    "system": "General Principles",
    "topic": "Confounding vs Effect Modification",
    "subtopic": "Stratification Analysis: Homogeneous vs Heterogeneous Stratum-Specific Effect Estimates",
    "provisionalDifficulty": 4,
    "stem": "An epidemiologic cohort study investigates the association between oral contraceptive use and the risk of venous thromboembolism (VTE) in 10,000 women over 5 years. In the crude, unadjusted analysis, oral contraceptive users have an elevated risk of VTE compared to non-users (Crude Relative Risk = 2.8, 95% CI: 2.1–3.7). The investigators suspect that cigarette smoking may influence this relationship and perform a stratified analysis by smoking status: - Among non-smokers (Stratum 1): Relative Risk = 1.6 (95% CI: 1.2–2.1) - Among active smokers (Stratum 2): Relative Risk = 5.4 (95% CI: 3.8–7.6). Statistical testing for interaction reveals a p-value of 0.002. Which of the following epidemiologic terms most accurately describes the role of cigarette smoking in this study?",
    "choices": [
      ["Effect modification (interaction)", "The phenomenon observed is EFFECT MODIFICATION (also termed INTERACTION). Effect modification occurs when the magnitude or direction of an exposure-disease association DIFFERS SIGNIFICANTLY ACROSS DIFFERENT STRATA OF A THIRD VARIABLE (here, smoking status). The hallmark of effect modification on stratified analysis is HETEROGENEITY OF STRATUM-SPECIFIC ESTIMATES: the Relative Risk in non-smokers (1.6) is vastly different from the Relative Risk in smokers (5.4). CRITICAL DISTINCTION FROM CONFOUNDING: (1) Confounding is a nuisance bias caused by an extraneous variable associated with both exposure and outcome; on stratified analysis, the stratum-specific estimates are SIMILAR TO EACH OTHER (homogeneous) but differ from the crude unadjusted estimate, and confounding can be eliminated by adjustment or multivariable regression. (2) Effect modification is NOT A BIAS; it is a true, biological interaction that CANNOT be adjusted away. It must be reported transparently by presenting stratum-specific risks."],
      ["Confounding by an extraneous third variable", "In confounding, stratum-specific relative risks are equal to each other but differ from the crude; here, the stratum estimates differ dramatically (1.6 vs 5.4), proving effect modification."],
      ["Selection bias introduced by differential loss to follow-up", "Selection bias relates to participant recruitment or attrition, not a documented biological interaction demonstrated by statistically significant interaction testing."],
      ["Information bias secondary to non-differential misclassification", "Non-differential misclassification biases the relative risk toward the null (RR = 1.0) equally across all groups, rather than producing divergent stratum-specific risk ratios."],
      ["Berkson admission rate fallacy", "Berkson bias occurs in hospitalized case-control studies; this is a prospective cohort study demonstrating biological synergy between smoking and estrogens."]
    ],
    "shortestValidSolution": "Stratified analysis: non-smokers RR = 1.6 vs smokers RR = 5.4 (stratum estimates differ significantly; interaction p = 0.002) -> Effect modification (interaction).",
    "necessaryInference": "Differentiate confounding (stratum estimates are similar to each other but differ from crude) from effect modification (stratum estimates differ significantly from each other).",
    "strongestDistractor": "Confounding by an extraneous third variable",
    "distractorExclusion": "Confounding produces identical stratum-specific estimates that differ from the crude; when stratum estimates diverge (1.6 vs 5.4), it is effect modification.",
    "citation": "Corraini P, et al. Effect Modification, Interaction and Mediation: An Overview of Concepts. Clin Epidemiol. 2017;9:325-330. PMID: 28652815."
  },
  {
    "code": "op-c-s3-0358",
    "exam": "Step 3",
    "subject": "Clinical Biostatistics & Preventive Medicine",
    "system": "General Principles",
    "topic": "Screening Biases: Lead-Time Bias vs Length-Time Bias",
    "subtopic": "Earlier Detection Illusion of Prolonged Survival vs Over-Representation of Indolent Tumors",
    "provisionalDifficulty": 4,
    "stem": "A new serum biomarker test is developed for the early detection of pancreatic adenocarcinoma. In an observational cohort study, patients diagnosed with pancreatic cancer via the new biomarker screening test survive an average of 4.2 years following diagnosis. In contrast, patients diagnosed conventionally after developing symptoms (jaundice, abdominal pain, weight loss) survive an average of 1.1 years following diagnosis (p < 0.001). However, when the date of death is evaluated relative to the true onset of neoplastic cellular transformation, the age at death and the overall 5-year all-cause mortality rate are completely identical in both groups. The apparent 3.1-year survival advantage in the screened cohort was entirely an artifact of advancing the time of diagnosis earlier in the natural history of the disease. Which of the following forms of screening bias is demonstrated in this study?",
    "choices": [
      ["Lead-time bias", "The study demonstrates LEAD-TIME BIAS. Lead-time bias occurs in screening evaluations when a screening test detects a disease earlier in its preclinical natural history (advancing the point of diagnosis) without actually altering the biological trajectory, delaying progression, or postponing the time of death. Because survival time is traditionally measured from the date of diagnosis to the date of death, detecting the cancer earlier creates an artificial illusion of prolonged survival, even though the patient dies at the exact same point in time. In this vignette, the 3.1-year 'survival benefit' was purely lead time. (CRITICAL DISTINCTION: LENGTH-TIME BIAS occurs when screening disproportionately detects slower-growing, less aggressive, indolent tumors that have a longer preclinical asymptomatic phase, while rapidly aggressive, lethal tumors present between screening intervals). The gold standard method to eliminate lead-time bias is evaluating MORTALITY RATES (e.g., disease-specific or all-cause mortality) in a RANDOMIZED CONTROLLED TRIAL, rather than measuring 5-year survival rates from diagnosis."],
      ["Length-time bias", "Length-time bias occurs when screening preferentially catches indolent, slow-growing tumors with longer asymptomatic windows, not the artificial survival extension caused by earlier diagnosis."],
      ["Selection bias (healthy volunteer effect)", "The healthy volunteer effect occurs when healthier, more health-conscious individuals participate in screening programs, not the mathematical artifact of earlier diagnostic timing."],
      ["Observer-expectancy bias", "Observer-expectancy bias occurs when an investigator's expectations influence the recording of outcomes, not an intrinsic timing distortion in screening survival metrics."],
      ["Attrition bias", "Attrition bias is caused by differential loss to follow-up between study groups, which is not described in this pancreatic cancer survival cohort."]
    ],
    "shortestValidSolution": "Screening detects cancer earlier, extending measured survival time from diagnosis, but time of death and mortality remain identical -> Lead-time bias.",
    "necessaryInference": "Distinguish lead-time bias (earlier detection creates illusion of survival without changing time of death) from length-time bias (screening catches slow-growing indolent cases).",
    "strongestDistractor": "Length-time bias",
    "distractorExclusion": "Length-time bias involves over-representation of indolent, biologically favorable tumors; lead-time bias is the artificial elongation of survival time by shifting the diagnosis earlier.",
    "citation": "Duffy SW, et al. Correcting for Lead Time and Length Bias in Estimating the Effect of Screen Detection on Cancer Survival. Am J Epidemiol. 2008;168(1):98-104. PMID: 18483123."
  },
  {
    "code": "op-c-s3-0359",
    "exam": "Step 3",
    "subject": "Clinical Biostatistics & Epidemiology",
    "system": "General Principles",
    "topic": "Relative Risk vs Odds Ratio",
    "subtopic": "Rare Disease Assumption and Overestimation of Risk in Common Diseases",
    "provisionalDifficulty": 4,
    "stem": "An investigator conducts a retrospective case-control study to evaluate the association between high dietary ultra-processed food consumption and the development of esophageal adenocarcinoma. The study enrolls 200 cases of esophageal adenocarcinoma and 400 age-matched controls. Analysis yields an Odds Ratio (OR) of 2.4 (95% CI: 1.6–3.6). In the discussion section of the manuscript, the author states: 'Our study demonstrates that high ultra-processed food consumption increases the relative risk of developing esophageal adenocarcinoma by 2.4-fold.' Under which of the following conditions is the Odds Ratio calculated in a case-control study a mathematically valid approximation of the true population Relative Risk (RR)?",
    "choices": [
      ["When the incidence of the disease in the population is low (rare disease assumption, typically < 5% to 10%)", "In case-control studies, participants are selected based on whether they have the disease (cases) or not (controls); because the true total population at risk is unknown, TRUE INCIDENCE CANNOT BE CALCULATED, PRECLUDING DIRECT COMPUTATION OF RELATIVE RISK (RR). Instead, the ODDS RATIO (OR) is calculated. The RARE DISEASE ASSUMPTION states that THE ODDS RATIO ACCURATELY APPROXIMATES THE RELATIVE RISK ONLY WHEN THE INCIDENCE OF THE DISEASE IN THE UNDERLYING POPULATION IS LOW (typically < 5% to 10%). Mathematically: RR = [A / (A + B)] / [C / (C + D)], and OR = (A / B) / (C / D) = (A x D) / (B x C). When the disease is rare, the number of diseased cases (A and C) is negligible compared to non-diseased individuals (B and D), such that (A + B) approaches B, and (C + D) approaches D. Under these conditions, the formula for RR simplifies to the formula for OR. CRITICAL BOARD PRINCIPLE: When a disease is COMMON (> 10%), the Odds Ratio significantly OVERESTIMATES the Relative Risk (an OR of 2.4 may correspond to an actual RR of only 1.5)."],
      ["When the study sample size exceeds at least 10,000 enrolled participants", "Large sample sizes increase statistical precision and narrow confidence intervals, but cannot mathematically equate OR and RR if the underlying disease is common."],
      ["When the exposure prevalence in the general population is greater than 80%", "High exposure prevalence does not satisfy the rare disease assumption; disease incidence must be low for OR to approximate RR."],
      ["When the p-value for the association is less than 0.001", "Statistical significance (p-value) measures the probability of observing results under the null hypothesis, having no bearing on whether OR approximates RR."],
      ["When a double-blind randomized allocation design is successfully executed", "Randomized controlled trials calculate Relative Risk directly; case-control studies calculate Odds Ratios."]
    ],
    "shortestValidSolution": "Odds Ratio approximates Relative Risk in case-control studies when the disease is rare (< 5-10% incidence in population) -> Rare disease assumption.",
    "necessaryInference": "Recall the rare disease assumption: Odds Ratio approximates Relative Risk only when population disease incidence is low (< 5-10%); in common diseases, OR overestimates RR.",
    "strongestDistractor": "When the study sample size exceeds at least 10,000 enrolled participants",
    "distractorExclusion": "Sample size influences statistical power, but mathematical convergence of OR to RR depends strictly on low disease incidence (rare disease assumption).",
    "citation": "Schmidt CO, Kohlmann T. When to Use the Odds Ratio or the Relative Risk? Int J Public Health. 2008;53(3):165-167. PMID: 18649774."
  },
  {
    "code": "op-c-s3-0360",
    "exam": "Step 3",
    "subject": "Clinical Biostatistics & Research Methodology",
    "system": "General Principles",
    "topic": "Type I and Type II Errors and Statistical Power",
    "subtopic": "Power (1 - Beta), Factors Increasing Power, and Consequences of Underpowered Studies",
    "provisionalDifficulty": 4,
    "stem": "A clinical research team designs a phase 3 randomized controlled trial to determine whether a novel monoclonal antibody reduces 1-year cardiovascular mortality compared to standard therapy in patients with acute myocardial infarction. The investigators establish a two-sided alpha level of 0.05. Preliminary power calculations indicate that enrolling 800 patients per group will provide a statistical power of 60% (beta = 0.40) to detect a hypothesized 3% absolute risk reduction. The senior biostatistician rejects the protocol, warning that the study is severely underpowered and carries an unacceptable risk of a false-negative conclusion. Which of the following modifications to the trial design will most effectively increase the statistical power of this clinical trial to the conventional standard of >= 80%?",
    "choices": [
      ["Increase the total sample size of enrolled patients, increase the duration of follow-up to capture more endpoint events, or decrease measurement variability", "STATISTICAL POWER (1 - Beta) is the probability of correctly rejecting the null hypothesis when a true difference actually exists (true positive rate of a study). A study with 60% power carries a 40% probability (Beta = 0.40) of committing a TYPE II ERROR (falsely concluding there is no difference when one truly exists). Conventional clinical trial standards require statistical power >= 80% (Beta <= 0.20) or >= 90%. FACTORS THAT INCREASE STATISTICAL POWER INCLUDE: (1) INCREASING SAMPLE SIZE (N): Enrolling more patients narrows standard error and increases power; (2) INCREASING FOLLOW-UP DURATION: Extends event accumulation, increasing total endpoint events; (3) INCREASING EFFECT SIZE: Studying a higher-potency intervention or higher-risk population; (4) DECREASING MEASUREMENT VARIANCE: Standardizing measurements; and (5) INCREASING ALPHA LEVEL (e.g., from 0.01 to 0.05, though alpha is traditionally fixed at 0.05). Reducing sample size or lowering alpha decreases power."],
      ["Decrease the total sample size to 400 patients per group to reduce statistical noise", "Reducing sample size widens confidence intervals and increases standard error, drastically worsening statistical power and increasing Type II error."],
      ["Decrease the established alpha significance threshold from 0.05 to 0.01", "Decreasing alpha from 0.05 to 0.01 makes the threshold for statistical significance much harder to cross, which directly REDUCES statistical power and increases Type II error."],
      ["Switch from a two-sided hypothesis test to a four-sided multivariable test", "There is no such entity as a 'four-sided' hypothesis test; one-sided tests increase power but require strict unidirectional pre-specification."],
      ["Restrict study enrollment exclusively to extremely low-risk patients who will experience zero mortality events", "Enrolling patients with zero events eliminates statistical events, rendering it impossible to demonstrate a difference and reducing power to zero."]
    ],
    "shortestValidSolution": "To increase statistical power (1 - Beta) from 60% to >= 80% -> increase sample size, increase follow-up duration to accumulate more events, or reduce measurement variability.",
    "necessaryInference": "Identify factors that increase statistical power (increasing sample size, increasing event rates/follow-up, reducing variance) and recognize that underpowered studies suffer from high Type II error rates.",
    "strongestDistractor": "Decrease the established alpha significance threshold from 0.05 to 0.01",
    "distractorExclusion": "Decreasing alpha makes proving significance harder, which directly decreases statistical power and increases Type II error.",
    "citation": "Sedgwick P. What is Statistical Power? BMJ. 2014;349:g4857. PMID: 25070966."
  },
  {
    "code": "op-c-s3-0361",
    "exam": "Step 3",
    "subject": "Clinical Biostatistics & Research Methodology",
    "system": "General Principles",
    "topic": "Non-Inferiority Clinical Trial Design",
    "subtopic": "Non-Inferiority Margin (Delta), Confidence Interval Interpretation, and Per-Protocol Role",
    "provisionalDifficulty": 4,
    "stem": "A randomized controlled non-inferiority trial is conducted to compare a novel oral Factor Xa inhibitor against standard subcutaneous enoxaparin for venous thromboembolism (VTE) prophylaxis following total knee replacement. The investigators establish a pre-specified non-inferiority margin (delta) of +1.5% for the primary efficacy endpoint (incidence of symptomatic VTE at 30 days). The trial results demonstrate that symptomatic VTE occurs in 2.1% of patients in the novel oral drug arm and in 2.4% of patients in the enoxaparin arm (risk difference: -0.3%, with a 95% confidence interval spanning from -1.1% to +0.8%). Which of the following is the most accurate interpretation of these trial findings?",
    "choices": [
      ["The novel oral anticoagulant is non-inferior to enoxaparin because the entire upper bound of the 95% confidence interval (+0.8%) lies below the pre-specified non-inferiority margin (+1.5%)", "In a NON-INFERIORITY TRIAL, the objective is to demonstrate that a novel intervention is 'not unacceptably worse' than an active standard-of-care control by more than a pre-specified clinical boundary termed the NON-INFERIORITY MARGIN (DELTA). Non-inferiority trials are typically conducted when a new drug offers clinical advantages other than superior efficacy (e.g., oral administration instead of painful subcutaneous injections, better safety profile, lower cost). HOW TO INTERPRET NON-INFERIORITY CONFIDENCE INTERVALS: Non-inferiority is statistically proven if the UPPER BOUND OF THE 95% CONFIDENCE INTERVAL FOR THE RISK DIFFERENCE LIES COMPLETELY BELOW THE NON-INFERIORITY MARGIN (DELTA). Here, the risk difference is -0.3% and the 95% CI is [-1.1% to +0.8%]. Because the worst-case scenario supported by the data (the upper confidence limit of +0.8%) is LESS THAN the pre-specified margin of +1.5%, NON-INFERIORITY IS CONCLUSIVELY DEMONSTRATED. (Note: Because the upper confidence limit crosses zero and the lower limit is -1.1%, superiority is NOT demonstrated)."],
      ["The novel oral anticoagulant is superior to enoxaparin because the point estimate risk difference is negative (-0.3%)", "Superiority requires the ENTIRE 95% confidence interval to lie below zero; here, the upper limit (+0.8%) crosses zero, meaning superiority is not proven."],
      ["The trial is inconclusive because the 95% confidence interval crosses zero (p > 0.05)", "In a non-inferiority trial, crossing zero is completely expected and acceptable; the test evaluates whether the upper confidence limit excludes delta (+1.5%), not zero."],
      ["Enoxaparin is proven superior to the novel oral anticoagulant because enoxaparin has lower bleeding rates", "The trial demonstrated non-inferiority of the novel agent for VTE prevention; enoxaparin was not shown to be superior."],
      ["The trial fails to demonstrate non-inferiority because the point estimate of VTE is higher than zero", "Non-inferiority does not require a zero event rate; it requires that the novel drug is not worse than the control by more than the pre-specified margin."]
    ],
    "shortestValidSolution": "Non-inferiority margin delta = +1.5%; 95% CI is [-1.1% to +0.8%] -> upper bound (+0.8%) is less than delta (+1.5%) -> Non-inferiority is conclusively proven.",
    "necessaryInference": "Interpret non-inferiority trial results: non-inferiority is established when the upper limit of the confidence interval falls below the pre-specified non-inferiority margin (delta).",
    "strongestDistractor": "The trial is inconclusive because the 95% confidence interval crosses zero (p > 0.05)",
    "distractorExclusion": "Crossing zero in a non-inferiority trial does not invalidate non-inferiority; it only indicates that superiority was not demonstrated.",
    "citation": "Schumi J, Wittes JT. Through the Looking Glass: Understanding Non-Inferiority. Trials. 2011;12:106. PMID: 21542944."
  },
  {
    "code": "op-c-s3-0362",
    "exam": "Step 3",
    "subject": "Clinical Biostatistics & Diagnostic Testing",
    "system": "General Principles",
    "topic": "Receiver Operating Characteristic (ROC) Curves",
    "subtopic": "Area Under the Curve (AUC / c-Statistic) and Diagnostic Cutoff Tradeoffs",
    "provisionalDifficulty": 4,
    "stem": "An investigator develops a novel serum microRNA panel for the early diagnosis of hepatocellular carcinoma (HCC) in patients with cirrhosis. The diagnostic performance of the test is evaluated by generating a Receiver Operating Characteristic (ROC) curve plotting the True Positive Rate against the False Positive Rate across all possible diagnostic cutoff concentrations. The Area Under the ROC Curve (AUC, or c-statistic) for the new microRNA test is 0.88 (95% CI: 0.82–0.94), compared to an AUC of 0.72 (95% CI: 0.65–0.79) for standard serum alpha-fetoprotein (AFP). The investigator decides to lower the diagnostic cutoff concentration of the microRNA test from 50 pg/mL down to 20 pg/mL to capture more early-stage tumors. Which of the following describes the axes of the ROC curve and the consequence of lowering this diagnostic cutoff concentration?",
    "choices": [
      ["The ROC curve plots Sensitivity on the y-axis against (1 - Specificity) on the x-axis; lowering the cutoff concentration increases test Sensitivity and Negative Predictive Value, while decreasing test Specificity and Positive Predictive Value", "A RECEIVER OPERATING CHARACTERISTIC (ROC) CURVE is a graphical plot that illustrates the diagnostic trade-offs of a continuous test across all possible threshold cutoffs: (1) AXES: The Y-AXIS represents the TRUE POSITIVE RATE (SENSITIVITY); the X-AXIS represents the FALSE POSITIVE RATE (1 - SPECIFICITY). (2) AREA UNDER THE CURVE (AUC / c-statistic): Represents overall diagnostic accuracy and discriminative ability (AUC 0.5 = no better than a coin flip; AUC 1.0 = perfect test). An AUC of 0.88 indicates excellent diagnostic discrimination, significantly outperforming AFP (0.72). (3) SHIFTING THE DIAGNOSTIC CUTOFF: Lowering the threshold cutoff (moving to the right and upward along the ROC curve) makes it easier for patients to test positive. Consequently, TRUE POSITIVES INCREASE (SENSITIVITY RISES, FALSE NEGATIVES DECREASE, NEGATIVE PREDICTIVE VALUE RISES), BUT FALSE POSITIVES ALSO INCREASE (SPECIFICITY FALLS, POSITIVE PREDICTIVE VALUE FALLS). Conversely, raising the cutoff concentration makes the test more specific at the expense of sensitivity."],
      ["The ROC curve plots Positive Predictive Value on the y-axis against Negative Predictive Value on the x-axis; lowering the cutoff increases both PPV and NPV", "ROC curves plot sensitivity against (1 - specificity); predictive values are prevalence-dependent and are not the axes of an ROC curve."],
      ["Lowering the cutoff concentration increases test Specificity and decreases test Sensitivity", "Lowering the cutoff makes testing positive easier, which increases sensitivity (fewer false negatives) and decreases specificity (more false positives)."],
      ["Lowering the cutoff concentration expands the total Area Under the Curve (AUC) from 0.88 up to 1.0", "The overall AUC represents the intrinsic discriminative capacity of the test across ALL cutoffs combined; shifting an individual cutoff moves along the existing curve without changing the total AUC."],
      ["The ROC curve x-axis represents the true positive fraction, while the y-axis represents false negative fraction", "The y-axis is the true positive rate (sensitivity), and the x-axis is the false positive rate (1 - specificity)."]
    ],
    "shortestValidSolution": "ROC curve: y-axis = Sensitivity, x-axis = 1 - Specificity -> lowering diagnostic cutoff increases Sensitivity and NPV, but decreases Specificity and PPV.",
    "necessaryInference": "Recall ROC curve axes (Sensitivity vs 1 - Specificity) and determine the clinical consequence of lowering a test cutoff (increases sensitivity/NPV, decreases specificity/PPV).",
    "strongestDistractor": "Lowering the cutoff concentration increases test Specificity and decreases test Sensitivity",
    "distractorExclusion": "Lowering the cutoff catches more true cases (higher sensitivity) but flags more healthy people as positive (lower specificity).",
    "citation": "Hajian-Tilaki K. Receiver Operating Characteristic (ROC) Curve Analysis for Medical Diagnostic Test Evaluation. Caspian J Intern Med. 2013;4(2):627-635. PMID: 24009950."
  }
]

print(f"Loaded {len(items_b15_p1)} items for Step 3 Batch 15 part 1.")
