import { CandidateSpec } from './types';

export const step3Batch31: CandidateSpec[] = [
  {
    "code": "op-c-s3-0751",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Immune Checkpoint Inhibitor-Induced Severe Colitis Management",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with metastatic cutaneous malignant melanoma receives his fourth cycle of combination immune checkpoint inhibitor immunotherapy with nivolumab (anti-PD-1) and ipilimumab (anti-CTLA-4). Ten days after the infusion, he presents to the emergency department with a 4-day history of watery diarrhea that has escalated to 9 loose, watery stools per day, accompanied by nocturnal defecation, severe crampy lower abdominal pain, and tenesmus. On arrival, he is weak and dehydrated. Vital signs: blood pressure 104/64 mm Hg, heart rate 102/min, temperature 38.0 C, and oxygen saturation 98% on room air. Abdominal examination reveals mild, diffuse tenderness to palpation in the lower quadrants without peritoneal signs. Stool studies: multiplex PCR for enteric bacterial pathogens, parasites, and Clostridioides difficile toxin A/B PCR are negative. Flexible sigmoidoscopy reveals extensive mucosal erythema, loss of vascular pattern, and deep ulcerations in the rectosigmoid colon; biopsies confirm severe neutrophilic cryptitis and mucosal ulceration consistent with Grade 3 immune-related colitis. Which of the following is the most appropriate management plan according to American Society of Clinical Oncology (ASCO) and National Comprehensive Cancer Network (NCCN) guidelines?",
    "choices": [
      [
        "Permanently discontinue ipilimumab, withhold nivolumab, and initiate high-dose systemic corticosteroid therapy with intravenous methylprednisolone 1 to 2 mg/kg/day, with planned step-up to infliximab or vedolizumab if symptoms fail to improve within 48 to 72 hours",
        "IMMUNE CHECKPOINT INHIBITOR (ICI)-INDUCED COLITIS: (1) PATHOPHYSIOLOGY: CTLA-4 and PD-1 inhibitors unleash cytotoxic T-cell antitumor responses by disinhibiting immune checkpoints. However, loss of peripheral tolerance triggers autoimmune attack against normal gastrointestinal mucosal antigens, producing severe immune-mediated colitis (most common and severe with anti-CTLA-4 [ipilimumab] or combination therapy); (2) SEVERITY STRATIFICATION (COMMON TERMINOLOGY CRITERIA FOR ADVERSE EVENTS [CTCAE]): (a) Grade 1: < 4 stools/day above baseline; (b) Grade 2: 4 to 6 stools/day above baseline, crampy pain; (c) GRADE 3: >= 7 STOOLS/DAY ABOVE BASELINE, severe abdominal pain, nocturnal diarrhea, incontinence, or limiting self-care activities; (d) Grade 4: Life-threatening consequences, perforation, toxic megacolon; (3) GUIDELINE-DIRECTED MANAGEMENT OF GRADE 3 ICI-COLITIS (ASCO / NCCN GUIDELINES): (a) IMMUNOTHERAPY CESSATION: Permanently discontinue CTLA-4 inhibitors (ipilimumab); withhold PD-1 inhibitors (nivolumab); (b) HIGH-DOSE SYSTEMIC CORTICOSTEROIDS: First-line therapy is INTRAVENOUS METHYLPREDNISOLONE 1 TO 2 MG/KG/DAY (or oral prednisone 1-2 mg/kg/day). Taper slowly over at least 4 to 6 weeks once symptoms improve to Grade 1; (c) STEROID-REFRACTORY PROTOCOL (48-72 HOUR RULE): Up to 30-40% of patients fail corticosteroids. If diarrhea, pain, or bleeding fails to improve within 48 to 72 hours of high-dose steroids, GUIDELINES RECOMMEND IMMEDIATE ESCALATION TO BIOLOGIC RESCUE THERAPY WITH EITHER INFLIXIMAB (anti-TNF monoclonal antibody 5-10 mg/kg) OR VEDOLIZUMAB (gut-selective alpha-4-beta-7 integrin inhibitor). (Rule out C. diff and CMV before biologics). Early biologic step-up prevents colonic perforation and colectomy."
      ],
      [
        "Continue immunotherapy without interruption, and prescribe oral loperamide 4 mg followed by 2 mg after each loose stool",
        "Continuing checkpoint inhibitors during Grade 3 colitis leads to fatal transmural colonic perforation, toxic megacolon, and peritonitis; antimotility agents (loperamide) are contraindicated in severe active colitis."
      ],
      [
        "Initiate oral mesalamine 4 g daily as primary anti-inflammatory monotherapy, avoiding all systemic corticosteroids",
        "5-ASA agents (mesalamine) are ineffective for severe T-cell-mediated Grade 3 checkpoint colitis; high-dose systemic corticosteroids are mandatory to arrest autoimmune tissue destruction."
      ],
      [
        "Perform an emergent subtotal colectomy with end ileostomy in the operating room",
        "Emergency surgical colectomy is reserved for colonic perforation, massive hemorrhage, or toxic megacolon refractory to medical rescue; > 85-90% of Grade 3 ICI-colitis responds to steroids and infliximab."
      ],
      [
        "Administer broad-spectrum oral vancomycin and intravenous metronidazole for 14 days, withholding immunosuppression",
        "Infectious testing and C. diff PCR are negative; immune checkpoint colitis is an autoimmune T-cell disorder that will not respond to antibiotics and requires prompt immunosuppression."
      ]
    ],
    "shortestValidSolution": "Metastatic melanoma on Nivolumab/Ipilimumab + 9 watery stools/day + ulcers on sigmoidoscopy = Grade 3 ICI-Induced Colitis -> Stop Ipilimumab + High-dose IV Methylprednisolone (step up to Infliximab if refractory).",
    "necessaryInference": "Manage Grade 3 immune checkpoint inhibitor-induced colitis: discontinue immunotherapy, initiate high-dose corticosteroids (methylprednisolone 1-2 mg/kg/day), and step up to infliximab or vedolizumab if refractory.",
    "strongestDistractor": "Continue immunotherapy without interruption, and prescribe oral loperamide 4 mg followed by 2 mg after each loose stool",
    "distractorExclusion": "Withholding immunosuppression and using antimotility agents during Grade 3 immune colitis risks fatal colonic perforation and toxic megacolon.",
    "citation": "Schneider BJ, Naidoo J, Santomasso BD, et al. Management of Immune-Related Adverse Events in Patients Treated With Immune Checkpoint Inhibitor Therapy: ASCO Guideline Update. J Clin Oncol. 2021;39(36):4073-4126. PMID: 34724386.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Immune Checkpoint Inhibitor-Induced Severe Colitis Management.",
      "distractorExclusionNotes": "Competitor Continue immunotherapy without interruption, and p excluded by Withholding immunosuppression and using antimotility agents .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0752",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Chronic Stable Angina Refractory Medical Therapy Addition of Ranolazine",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old man presents to the outpatient cardiology clinic for follow-up of chronic stable coronary artery disease. Two years ago, he underwent drug-eluting stent placement to the proximal left anterior descending artery. Over the past 3 months, he has developed recurring exertional chest tightness and pressure when walking up moderate inclines, which resolves within 5 minutes of rest. His current medical regimen has been optimized to maximal tolerated hemodynamically active doses: metoprolol succinate 100 mg daily (resting heart rate 56/min), amlodipine 10 mg daily, atorvastatin 80 mg daily, and aspirin 81 mg daily. At today's visit, his resting clinic blood pressure is 108/68 mm Hg and heart rate is 54/min and regular. Cardiovascular and pulmonary examinations are completely normal. Repeat transthoracic echocardiogram shows normal left ventricular ejection fraction (60%) without regional wall motion abnormalities. Coronary angiography performed 2 weeks ago revealed patent stents and non-revascularizable, diffuse 50% to 60% distal multi-vessel disease. The patient continues to experience exertional angina 3 to 4 times weekly. Further escalation of his beta-blocker or calcium channel blocker is precluded by his resting bradycardia and borderline hypotension. Which of the following is the most appropriate next pharmacological agent to reduce his angina frequency without lowering his heart rate or blood pressure?",
    "choices": [
      [
        "Initiation of oral ranolazine (500 to 1,000 mg twice daily)",
        "CHRONIC STABLE ANGINA PHARMACOTHERAPY AND RANOLAZINE: (1) PATHOPHYSIOLOGY: Myocardial ischemia results from an imbalance between myocardial oxygen supply and demand. Conventional antianginal agents (beta-blockers, non-dihydropyridine calcium channel blockers, dihydropyridine CCBs, and nitrates) work by ALTERING HEMODYNAMIC PARAMETERS: lowering heart rate, blood pressure, inotropy, and ventricular wall tension (decreasing oxygen demand) or dilating coronary arteries; (2) THE CLINICAL DILEMMA: When a patient experiences persistent angina despite dual antianginal therapy (beta-blocker plus CCB) but has a resting heart rate < 60/min (here 54/min) and blood pressure < 110/70 mm Hg (here 108/68), further uptitration of beta-blockers, diltiazem/verapamil, or nitrates is precluded by the risks of symptomatic bradycardia, heart block, orthostatic syncope, and hypoperfusion; (3) RANOLAZINE MECHANISM OF ACTION: RANOLAZINE IS A NOVEL ANTIANGINAL AGENT THAT REDUCES ISCHEMIA THROUGH A NON-HEMODYNAMIC CELLULAR MECHANISM. It selectively INHIBITS THE LATE INWARD SODIUM CURRENT (INa) in ischemic myocardial cells. During ischemia, excessive sodium enters through late INa channels, causing intracellular sodium overload. This drives the reverse mode of the sodium-calcium exchanger (NCX), leading to INTRACELLULAR CALCIUM OVERLOAD, diastolic myocardial wall tension, microvascular compression, and metabolic strain. By blocking late INa, ranolazine prevents calcium overload, improves myocardial diastolic relaxation, and enhances microvascular subendocardial perfusion WITHOUT ALTERING HEART RATE OR SYSTEMIC BLOOD PRESSURE; (4) CLINICAL TRIAL EVIDENCE (CARISA AND ERICA TRIALS): Ranolazine significantly increases exercise treadmill duration, prolongs time to onset of angina, and reduces weekly nitroglycerin consumption in patients on baseline beta-blockers; (5) CONTRAINDICATIONS AND MONITORING: Ranolazine modestly prolongs the QTc interval (dose-dependent) and is metabolized by CYP3A4; it is contraindicated in patients with baseline prolonged QTc, severe hepatic impairment, or taking potent CYP3A4 inhibitors."
      ],
      [
        "Addition of oral isosorbide mononitrate 60 mg daily to achieve maximal venous vasodilation",
        "Long-acting nitrates induce venodilation and arterial vasodilation, precipitating symptomatic orthostatic hypotension and syncope in a patient with a baseline BP of 108/68 mm Hg."
      ],
      [
        "Switch metoprolol to oral atenolol 100 mg daily and double amlodipine to 20 mg daily",
        "Doubling amlodipine is above the maximum approved dose (10 mg), causes severe peripheral edema, and induces severe hypotension; switching beta-blockers does not solve the hemodynamic ceiling."
      ],
      [
        "Initiation of daily oral ivabradine 5 mg twice daily",
        "Ivabradine selectively inhibits the hyperpolarization-activated cyclic nucleotide-gated (HCN) If channel in the sinus node, slowing heart rate; it is contraindicated when resting HR is < 60/min (here 54/min)."
      ],
      [
        "Prescription of daily oral dipyridamole 100 mg three times daily",
        "Dipyridamole is a non-selective adenosine reuptake inhibitor that causes coronary steal syndrome, shunting blood away from stenosed ischemic beds and worsening myocardial ischemia."
      ]
    ],
    "shortestValidSolution": "Stable angina refractory to Beta-blocker + CCB + BP 108/68 + HR 54 = Hemodynamic limits reached -> Add Ranolazine (inhibits late Na current; no effect on HR or BP).",
    "necessaryInference": "Select ranolazine as an effective add-on antianginal agent for patients with refractory chronic stable angina whose further medication escalation is limited by low resting heart rate and blood pressure.",
    "strongestDistractor": "Addition of oral isosorbide mononitrate 60 mg daily to achieve maximal venous vasodilation",
    "distractorExclusion": "Nitrates lower systemic vascular resistance and venous return, causing symptomatic hypotension in a patient with baseline blood pressure 108/68 mm Hg; ranolazine does not affect blood pressure.",
    "citation": "Chaitman BR, Pepine CJ, Parker JO, et al. Effects of ranolazine with atenolol, amlodipine, or diltiazem on exercise tolerance and angina frequency in patients with severe chronic angina: results of the CARISA trial. JAMA. 2004;291(3):309-316. PMID: 14734593.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Chronic Stable Angina Refractory Medical Therapy Addition of Ranolazine.",
      "distractorExclusionNotes": "Competitor Addition of oral isosorbide mononitrate 60 mg dail excluded by Nitrates lower systemic vascular resistance and venous retur.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0753",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Pancreatitis Fluid Resuscitation Moderation WATERFALL Trial",
    "provisionalDifficulty": 5,
    "stem": "A 46-year-old woman presents to the emergency department with an 8-hour history of severe, boring epigastric abdominal pain radiating to her back, accompanied by persistent vomiting. She has no history of alcohol abuse. Vital signs: blood pressure 128/82 mm Hg, heart rate 94/min, respirations 18/min, temperature 37.6 C, and oxygen saturation 98% on ambient air. Physical examination reveals moderate epigastric tenderness to palpation with normal active bowel sounds and no abdominal distension, rebound tenderness, or guarding. Laboratory evaluation reveals: serum lipase 1,420 U/L (reference range 10-60 U/L), hematocrit 41%, BUN 16 mg/dL, serum creatinine 0.8 mg/dL, and normal serum calcium and liver function tests. Transabdominal ultrasound confirms cholelithiasis without gallbladder wall thickening and a normal common bile duct caliber of 4 mm. The patient fulfills Atlanta classification criteria for mild acute pancreatitis, with no systemic inflammatory response syndrome (SIRS score 0) and no baseline organ failure. Which of the following represents the most appropriate initial fluid resuscitation strategy according to contemporary evidence-based clinical practice guidelines?",
    "choices": [
      [
        "Targeted moderate fluid resuscitation with Lactated Ringer solution (e.g., 1.5 mL/kg/hr infusion, preceded by a modest 10 mL/kg bolus only if clinical hypovolemia is present), with regular clinical reassessment to avoid fluid overload",
        "ACUTE PANCREATITIS FLUID RESUSCITATION PARADIGM SHIFT (THE WATERFALL TRIAL): (1) HISTORICAL PRACTICE VS CONTEMPORARY EVIDENCE: Historically, clinicians practiced aggressive, high-volume fluid resuscitation ('wide-open' crystalloids, 20 mL/kg boluses followed by 250-300 mL/hr, often infusing 4 to 6 liters in 24 hours) based on the hypothesis that microvascular splanchnic hypoperfusion caused pancreatic necrosis. However, aggressive volume loading leads to SEVERE ADVERSE EVENTS: increased risk of volume overload, pulmonary edema, worsening abdominal compartment syndrome, respiratory failure, prolonged ICU stay, and higher mortality; (2) LANDMARK CLINICAL TRIAL EVIDENCE (THE WATERFALL TRIAL, de-Madaria et al., NEJM 2022): The multicenter, randomized controlled Early Weight-Adjusted Aggressive vs Moderate Resuscitation for Acute Pancreatitis (WATERFALL) trial randomized 249 patients with acute pancreatitis to AGGRESSIVE FLUID RESUSCITATION (20 mL/kg bolus then 3 mL/kg/hr) vs MODERATE FLUID RESUSCITATION (1.5 mL/kg/hr, preceded by a 10 mL/kg bolus only in hypovolemic patients). RESULTS: The trial was HALTED EARLY FOR SAFETY BY THE DATA MONITORING BOARD because aggressive fluid resuscitation resulted in a NEAR THREE-FOLD INCREASE IN FLUID OVERLOAD (20.5% in aggressive group vs 6.3% in moderate group; adjusted relative risk 2.85; p = 0.004) without providing any improvement in the incidence of moderately severe or severe pancreatitis or local complications; (3) FLUID COMPOSITION (LACTATED RINGER VS NORMAL SALINE): LACTATED RINGER (LR) SOLUTION IS PREFERRED OVER 0.9% NORMAL SALINE. Large infusions of normal saline cause hyperchloremic non-anion gap metabolic acidosis, which lowers serum pH; acidosis promotes acinar cell zymogen activation and worsens pancreatic inflammation. Multiple trials demonstrate LR reduces systemic inflammation (lower CRP and SIRS rates) compared to normal saline; (4) GUIDELINE RECOMMENDATION: Moderate weight-based resuscitation with Lactated Ringer (1.5 mL/kg/hr), titrated dynamically to clinical perfusion (heart rate, urine output > 0.5 mL/kg/hr, hematocrit, and BUN), strictly avoiding unmonitored hypervolemia."
      ],
      [
        "Aggressive fluid resuscitation with rapid boluses of 20 mL/kg of 0.9% normal saline followed by a continuous infusion of 300 mL/hr (totaling > 5 to 6 liters over the first 24 hours)",
        "The landmark WATERFALL trial proved that aggressive high-volume fluid resuscitation nearly triples the incidence of fluid overload and pulmonary edema without improving clinical outcomes or preventing necrosis."
      ],
      [
        "Vigorous fluid administration of 5% dextrose in water (D5W) at 250 mL/hr without electrolyte supplementation",
        "D5W is hypotonic free water that rapidly distributes into the intracellular compartment, failing to maintain intravascular volume while precipitating severe hyponatremia and cerebral edema."
      ],
      [
        "Fluid restriction to < 500 mL/24 hours combined with immediate administration of intravenous loop diuretics",
        "Extreme fluid restriction causes intravascular hypovolemia, hemoconcentration, and microvascular ischemia, which triggers secondary pancreatic acinar necrosis; moderate hydration is required."
      ],
      [
        "Immediate infusion of 20% human albumin at 1 g/kg every 12 hours as primary resuscitation fluid",
        "Colloids (albumin, starches) provide no clinical benefit over balanced crystalloids in acute pancreatitis and increase costs and renal injury; balanced crystalloids (LR) are first-line."
      ]
    ],
    "shortestValidSolution": "Mild acute pancreatitis + normal vitals/labs (no SIRS/hypovolemia) = Resuscitation strategy -> Moderate Lactated Ringer infusion (1.5 mL/kg/hr; WATERFALL trial proves aggressive fluids triple overload).",
    "necessaryInference": "Apply the findings of the WATERFALL trial to acute pancreatitis: prioritize moderate fluid resuscitation with Lactated Ringer solution over aggressive high-volume hydration to prevent fluid overload and pulmonary complications.",
    "strongestDistractor": "Aggressive fluid resuscitation with rapid boluses of 20 mL/kg of 0.9% normal saline followed by a continuous infusion of 300 mL/hr (totaling > 5 to 6 liters over the first 24 hours)",
    "distractorExclusion": "The WATERFALL trial was halted early because aggressive high-volume fluid resuscitation nearly tripled fluid overload without improving clinical outcomes.",
    "citation": "de-Madaria E, Buxbaum JL, Maisonneuve P, et al. Aggressive or Moderate Fluid Resuscitation in Acute Pancreatitis (WATERFALL). N Engl J Med. 2022;387(11):989-1000. PMID: 36103415.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Acute Pancreatitis Fluid Resuscitation Moderation WATERFALL Trial.",
      "distractorExclusionNotes": "Competitor Aggressive fluid resuscitation with rapid boluses  excluded by The WATERFALL trial was halted early because aggressive high.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0754",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Chronic Hepatitis B Indications for First-Line Antiviral Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 36-year-old man from Southeast Asia presents to the outpatient hepatology clinic for evaluation of chronic hepatitis B virus (HBV) infection, which was diagnosed during routine immigration screening 6 months ago. He is completely asymptomatic and takes no medications. Physical examination reveals normal vital signs, no jaundice, no spider angiomas, and no hepatosplenomegaly or ascites. Laboratory evaluation: HBsAg is positive, anti-HBc IgG is positive, and IgM anti-HBc is negative. Hepatitis B e-antigen (HBeAg) is positive, and anti-HBe is negative. Serum HBV DNA quantitative viral load is markedly elevated at 480,000 IU/mL. Serum alanine aminotransferase (ALT) is 92 U/L (normal upper limit of normal [ULN] for men is 35 U/L; patient's ALT is 2.6 times ULN), and aspartate aminotransferase (AST) is 64 U/L. Serum total bilirubin, albumin, and INR are completely normal. Screening for hepatitis C, hepatitis D, and HIV is negative. Abdominal ultrasound shows normal hepatic parenchyma and echogenicity with no focal liver lesions. Transient elastography (FibroScan) reveals a liver stiffness measurement of 8.8 kPa, corresponding to METAVIR stage F2 significant hepatic fibrosis. Which of the following is the most appropriate management plan according to American Association for the Study of Liver Diseases (AASLD) guidelines?",
    "choices": [
      [
        "Initiation of long-term antiviral monotherapy with a first-line nucleos(t)ide analog having a high barrier to resistance, such as entecavir, tenofovir disoproxil fumarate (TDF), or tenofovir alafenamide (TAF)",
        "CHRONIC HEPATITIS B VIRUS (HBV) MANAGEMENT GUIDELINES (AASLD 2018): (1) NATURAL HISTORY PHASES: (a) Immune-tolerant (HBeAg+, very high DNA, normal ALT, minimal fibrosis); (b) IMMUNE-ACTIVE / HBeAg-POSITIVE CHRONIC HEPATITIS: Characterized by HBeAg positivity, high HBV DNA (> 20,000 IU/mL), ELEVATED ALT (> 2x ULN), and active necroinflammation/fibrosis; (c) Inactive carrier (HBeAg-, anti-HBe+, low DNA < 2,000 IU/mL, normal ALT); (d) HBeAg-negative immune-active (pre-core/basal core promoter mutant, moderate DNA, elevated ALT); (2) AASLD CRITERIA FOR INITIATING ANTIVIRAL THERAPY: Treatment is DEFINITIVELY RECOMMENDED for: (a) Immune-active chronic hepatitis B (HBeAg-positive or HBeAg-negative) with HBV DNA > 20,000 IU/mL (or > 2,000 in HBeAg-negative) AND ALT > 2x ULN (men > 70 U/L, women > 50 U/L); (b) Patients with cirrhosis (compensated or decompensated) with detectable HBV DNA regardless of ALT; (c) Patients with significant histologic inflammation or fibrosis (stage >= F2 on elastography or biopsy) with elevated DNA; (3) FIRST-LINE PHARMACOTHERAPY: GUIDELINES STRONGLY RECOMMEND ORAL NUCLEOS(T)IDE ANALOGS WITH A HIGH GENETIC BARRIER TO DRUG RESISTANCE: (a) ENTECAVIR (guanosine nucleoside analog); (b) TENOFOVIR DISOPROXIL FUMARATE (TDF, nucleotide analog); (c) TENOFOVIR ALAFENAMIDE (TAF, novel prodrug with lower renal and bone mineral toxicity, preferred in patients aged >= 60, renal impairment eGFR < 60, or osteoporosis). Mechanism: Potently inhibits HBV DNA polymerase reverse transcriptase, suppressing viral replication, reducing hepatic inflammation, reversing fibrosis, and dramatically lowering the long-term risk of cirrhosis and hepatocellular carcinoma (HCC); (4) DRUGS TO AVOID: Older agents with a LOW barrier to resistance (LAMIVUDINE, ADEFOVIR, TELBIVUDINE) are STRICTLY CONTRAINDICATED as first-line therapy due to high resistance rates (> 70% at 5 years with lamivudine). Pegylated interferon-alpha is an alternative finite 48-week therapy in select young patients, but oral analogs are preferred due to oral tolerance and absence of interferon systemic side effects."
      ],
      [
        "Observation and watchful waiting with repeat ALT and HBV DNA in 12 months, withholding antiviral therapy because HBeAg-positive patients achieve spontaneous clearance",
        "Withholding treatment in immune-active chronic hepatitis with ALT > 2x ULN, DNA > 400,000 IU/mL, and F2 fibrosis leads to progressive cirrhosis, end-stage liver failure, and hepatocellular carcinoma."
      ],
      [
        "Initiation of daily oral lamivudine 100 mg monotherapy as preferred cost-effective first-line therapy",
        "Lamivudine has a very low genetic barrier to resistance, with the YMDD polymerase mutation emerging in > 70% of patients within 5 years; AASLD guidelines explicitly recommend against lamivudine."
      ],
      [
        "Administration of a 4-week course of oral ribavirin monotherapy",
        "Ribavirin is an antiviral used in select hepatitis C regimens; it has zero efficacy against hepatitis B viral polymerase and causes severe hemolytic anemia."
      ],
      [
        "Immediate referral for total hepatic resection and orthotopic liver transplantation",
        "Liver transplantation is indicated for decompensated end-stage cirrhosis (MELD > 15) or early hepatocellular carcinoma; this patient has compensated non-cirrhotic disease that responds completely to oral antivirals."
      ]
    ],
    "shortestValidSolution": "HBeAg(+) + HBV DNA 480k IU/mL + ALT 92 (> 2x ULN) + F2 fibrosis = Immune-Active Chronic Hepatitis B -> First-line nucleos(t)ide analog with high barrier to resistance (Entecavir or TDF/TAF).",
    "necessaryInference": "Apply AASLD guidelines for chronic hepatitis B: identify immune-active disease (DNA > 20,000, ALT > 2x ULN, F2 fibrosis) and select first-line oral antivirals with a high genetic barrier to resistance (entecavir, tenofovir).",
    "strongestDistractor": "Initiation of daily oral lamivudine 100 mg monotherapy as preferred cost-effective first-line therapy",
    "distractorExclusion": "Lamivudine has high rates of viral resistance (> 70% at 5 years); modern guidelines strictly recommend agents with high resistance barriers (entecavir, tenofovir).",
    "citation": "Terrault NA, Lok ASF, McMahon BJ, et al. Update on prevention, diagnosis, and treatment of chronic hepatitis B: AASLD 2018 hepatitis B guidance. Hepatology. 2018;67(4):1560-1599. PMID: 29405329.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Chronic Hepatitis B Indications for First-Line Antiviral Therapy.",
      "distractorExclusionNotes": "Competitor Initiation of daily oral lamivudine 100 mg monothe excluded by Lamivudine has high rates of viral resistance (> 70% at 5 ye.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0755",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Hypertensive Emergency Acute Pulmonary Edema Nitroglycerin vs Hydralazine",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man with a history of long-standing, poorly controlled hypertension presents to the emergency department with severe, sudden-onset shortness of breath, orthopnea, and pink, frothy sputum production that awoke him from sleep 90 minutes ago. He has no prior history of coronary artery disease. On arrival, he is sitting bolt upright, gasping for breath, and diaphoretic. Vital signs: blood pressure 224/128 mm Hg, heart rate 118/min, respirations 36/min, and oxygen saturation 82% on ambient air. Physical examination reveals marked respiratory distress with loud bilateral inspiratory and expiratory crackles extending throughout both lung fields. Cardiovascular exam demonstrates an audible S3 gallop, elevated jugular venous distension to the angle of the jaw, and cool, clammy extremities. Point-of-care lung ultrasound demonstrates diffuse bilateral B-lines ('lung rockets') in all lung zones, confirming acute cardiogenic pulmonary edema. Portable chest radiography shows cardiomegaly, bilateral alveolar infiltrates in a 'batwing' perihilar distribution, and Kerley B lines. Serum high-sensitivity troponin I is mildly elevated at 42 ng/L (normal < 14 ng/L). Which of the following is the most appropriate initial pharmacological strategy to rapidly lower blood pressure and relieve pulmonary congestion?",
    "choices": [
      [
        "Continuous intravenous nitroglycerin infusion (or intravenous nicardipine) combined with intravenous loop diuretic therapy (furosemide) and non-invasive positive pressure ventilation (CPAP/BiPAP)",
        "HYPERTENSIVE EMERGENCY WITH ACUTE CARDIOGENIC PULMONARY EDEMA (SYMPATHETIC CRASHING ACUTE PULMONARY EDEMA [SCAPE]): (1) PATHOPHYSIOLOGY: Extreme, acute elevation in systemic blood pressure (SBP > 200, DBP > 120 mm Hg) dramatically increases left ventricular afterload. High afterload impedes forward stroke volume, causing precipitous backward elevation of left ventricular end-diastolic pressure (LVEDP) and left atrial pressure, which transmits directly into the pulmonary capillaries (> 25-30 mm Hg), driving rapid transudation of fluid into the alveoli. The ensuing hypoxemia and respiratory distress trigger a massive catecholamine surge, causing further peripheral arterial and venous constriction, creating a lethal positive-feedback vicious cycle; (2) EMERGENCY MANAGEMENT PRIORITIES (AHA/ACC and ESC Guidelines): (a) RAPID AFTERLOAD AND PRELOAD REDUCTION: INTRAVENOUS NITROGLYCERIN INFUSION is the undisputed first-line agent. At low-to-moderate doses, nitroglycerin induces potent VENODILATION (increasing systemic venous capacitance, pooling blood in peripheral capacitance veins, and dramatically dropping pulmonary capillary filling pressure/preload within minutes). At higher doses (> 100-200 mcg/min), it induces ARTERIAL VASODILATION, significantly reducing LV afterload and augmenting forward cardiac output; (b) INTRAVENOUS NICARDIPINE OR CLEVIDIPINE: Dihydropyridine CCBs are excellent alternative/adjunctive arteriolar vasodilators; (c) NON-INVASIVE POSITIVE PRESSURE VENTILATION (NIV: CPAP OR BIPAP): Immediately recruits fluid-filled alveoli, drives fluid back into interstitial capillaries, improves gas exchange, and decreases respiratory work and afterload; (d) INTRAVENOUS LOOP DIURETICS (FUROSEMIDE): Administered cautiously to promote natriuresis; (3) DRUGS TO STRICTLY AVOID: (a) INTRAVENOUS HYDRALAZINE: STRICTLY CONTRAINDICATED. Hydralazine has an unpredictable, prolonged onset (20-30 min) and variable duration (2-6 hours), causes reflex sympathetic tachycardia (worsening myocardial oxygen demand and ischemia), and cannot be rapidly titrated; (b) BETA-BLOCKERS (LABETALOL, METOPROLOL): CONTRAINDICATED IN ACUTE PULMONARY EDEMA. Beta-blockade reduces myocardial contractility (negative inotrope), which precipitates acute cardiogenic shock and electromechanical arrest when the left ventricle is acutely failing."
      ],
      [
        "Intravenous bolus administration of hydralazine 20 mg every 20 minutes targeting systolic blood pressure < 140 mm Hg",
        "Hydralazine has an unpredictable, prolonged hypotensive effect, triggers reflex tachycardia, increases myocardial oxygen consumption, and cannot be rapidly titrated in acute pulmonary edema; it is contraindicated."
      ],
      [
        "Intravenous bolus administration of labetalol 40 mg followed by continuous infusion to drop heart rate and blood pressure",
        "Beta-blockers (labetalol) depress myocardial contractility; administering negative inotropes during acute decompensated heart failure with pulmonary edema causes acute cardiogenic shock and death."
      ],
      [
        "Vigorous fluid resuscitation with 2 liters of 0.9% normal saline over 30 minutes to improve renal perfusion",
        "Administering intravenous fluid boluses to a patient in acute cardiogenic pulmonary edema exacerbates alveolar flooding, causing immediate hypoxic cardiac arrest."
      ],
      [
        "Sublingual nifedipine 10 mg capsule bitten and swallowed immediately",
        "Sublingual nifedipine causes unpredictable, precipitous drops in blood pressure, triggering stroke, myocardial infarction, and death; it has been condemned and banned by the FDA for hypertensive emergencies."
      ]
    ],
    "shortestValidSolution": "BP 224/128 + acute pulmonary edema (crackles, frothy sputum, B-lines) = Hypertensive Emergency (SCAPE) -> IV Nitroglycerin infusion + IV Furosemide + CPAP/BiPAP (avoid hydralazine/beta-blockers).",
    "necessaryInference": "Manage hypertensive emergency with acute pulmonary edema: prioritize intravenous nitroglycerin infusion and non-invasive ventilation for rapid preload and afterload reduction, avoiding hydralazine and beta-blockers.",
    "strongestDistractor": "Intravenous bolus administration of hydralazine 20 mg every 20 minutes targeting systolic blood pressure < 140 mm Hg",
    "distractorExclusion": "Hydralazine has unpredictable kinetics and causes reflex tachycardia, worsening ischemia and pulmonary edema; intravenous nitroglycerin is the titratable agent of choice.",
    "citation": "Whelton PK, Carey RM, Aronow WS, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. J Am Coll Cardiol. 2018;71(19):e127-e248. PMID: 29146255.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Hypertensive Emergency Acute Pulmonary Edema Nitroglycerin vs Hydralazine.",
      "distractorExclusionNotes": "Competitor Intravenous bolus administration of hydralazine 20 excluded by Hydralazine has unpredictable kinetics and causes reflex tac.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0756",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Post-Stroke Depression Screening and SSRI Pharmacotherapy",
    "provisionalDifficulty": 4,
    "stem": "A 67-year-old man presents to the stroke rehabilitation outpatient clinic 6 weeks after suffering an acute ischemic stroke involving the right middle cerebral artery territory, which resulted in left-sided hemiparesis. He was recently discharged from an inpatient rehabilitation facility and is currently attending physical and occupational therapy sessions three times weekly. His daughter, who accompanies him, reports that over the past 3 weeks, her father has become profoundly despondent, tearful, and withdrawn. He refuses to participate in physical therapy, stating: 'What is the point? I am useless and broken.' He sleeps for 12 to 14 hours a day, has lost 8 pounds due to anorexia, and demonstrates severe apathy. Physical examination reveals residual left spastic hemiparesis (arm strength 3/5, leg strength 4/5) with circumductive gait. On mental status examination, he has psychomotor slowing, flat affect, and poor eye contact. He scores 16 on the Patient Health Questionnaire-9 (PHQ-9, indicative of moderately severe major depressive episode). He denies active suicidal ideation or intent. Routine laboratory evaluation: TSH 2.1 mIU/L, vitamin B12 480 pg/mL, serum electrolytes normal, and complete blood count normal. Which of the following is the most appropriate management plan to treat his depression and facilitate neurological recovery according to American Heart Association / American Stroke Association (AHA/ASA) guidelines?",
    "choices": [
      [
        "Initiation of a selective serotonin reuptake inhibitor (SSRI, such as sertraline or escitalopram) combined with structured psychotherapy and continued multidisciplinary rehabilitation",
        "POST-STROKE DEPRESSION (PSD) SCREENING AND PHARMACOTHERAPY: (1) EPIDEMIOLOGY: Post-stroke depression is the most common neuropsychiatric complication of stroke, affecting approximately 30% to 35% of stroke survivors within the first year. PATHOPHYSIOLOGY: Multifactorial etiology involving both neurobiological disruption (ischemic disruption of ascending monoaminergic pathways: serotonin, dopamine, and norepinephrine projecting from the brainstem to frontal-subcortical circuits) and psychosocial distress regarding sudden physical disability and loss of autonomy; (2) PROGNOSTIC SIGNIFICANCE: PSD is strongly associated with POOR NEUROLOGICAL REHABILITATION PARTICIPATION, impaired motor recovery, accelerated cognitive decline, institutionalization, reduced quality of life, and a nearly 50% increase in long-term all-cause mortality; (3) AHA/ASA GUIDELINE RECOMMENDATIONS (STROKE REHABILITATION GUIDELINES): (a) ROUTINE SCREENING: All stroke patients should be routinely screened for depression using validated instruments (PHQ-9, Hamilton Depression Rating Scale); (b) FIRST-LINE EVIDENCE-BASED PHARMACOTHERAPY: SELECTIVE SEROTONIN REUPTAKE INHIBITORS (SSRIs: SERTRALINE, ESCITALOPRAM, OR CITALOPRAM). Multiple randomized clinical trials and Cochrane systematic reviews demonstrate that SSRIs achieve significant remission of depressive symptoms; (c) MOTOR AND FUNCTIONAL ENHANCEMENT: In addition to treating mood, SSRI therapy is associated with ENHANCED CORTICAL NEUROPLASTICITY AND IMPROVED FUNCTIONAL MOTOR RECOVERY in clinical trials (e.g., the FLAME trial [Chollet et al., Lancet Neurol 2011] demonstrated that fluoxetine significantly enhanced motor recovery in ischemic stroke with motor deficit); (d) SAFETY ADVANTAGES: Sertraline and escitalopram have favorable cardiovascular safety profiles, minimal anticholinergic effects, and low drug-interaction potential. Tricyclic antidepressants (TCAs) are avoided due to arrhythmogenic risks, orthostatic hypotension, and urinary retention."
      ],
      [
        "Withhold antidepressant pharmacotherapy and observe for spontaneous recovery, as depressive symptoms are an expected normal psychological reaction to stroke disability",
        "Dismissing depression as a 'normal reaction' is dangerous; untreated post-stroke depression significantly impairs neurorehabilitation, halts motor recovery, and increases 5-year mortality; pharmacotherapy is guideline-mandated."
      ],
      [
        "Initiate oral amitriptyline 75 mg at bedtime as preferred first-line therapy over SSRIs",
        "Tricyclic antidepressants (amitriptyline) have potent anticholinergic, sedating, and cardiac quinidine-like arrhythmogenic effects; they increase orthostatic fall and hip fracture risks and are contraindicated in stroke patients."
      ],
      [
        "Prescribe daily oral methylphenidate 20 mg twice daily as sole initial monotherapy",
        "Psychostimulants (methylphenidate) cause tachycardia, severe hypertension, insomnia, and increase recurrent stroke risk; they are not approved or recommended as first-line therapy for post-stroke depression."
      ],
      [
        "Initiate daily oral alprazolam 0.5 mg three times daily to relieve emotional distress",
        "Benzodiazepines (alprazolam) do not treat depression, cause tolerance and addiction, impair cognitive motor relearning, increase fall risk, and are associated with worse post-stroke neurological outcomes."
      ]
    ],
    "shortestValidSolution": "Post-stroke 6 wks + PHQ-9 score 16 (severe depression) + refusing physical therapy = Post-Stroke Depression -> Initiate SSRI (Sertraline/Escitalopram) + Psychotherapy/Rehab.",
    "necessaryInference": "Recognize post-stroke depression (affecting ~30% of stroke survivors) and select first-line SSRI pharmacotherapy (sertraline or escitalopram) to treat mood and enhance functional motor recovery.",
    "strongestDistractor": "Withhold antidepressant pharmacotherapy and observe for spontaneous recovery, as depressive symptoms are an expected normal psychological reaction to stroke disability",
    "distractorExclusion": "Untreated post-stroke depression impairs rehabilitation, prevents neurological motor recovery, and increases mortality; active treatment with SSRIs is evidence-based and guideline-mandated.",
    "citation": "Winstein CJ, Stein J, Arena R, et al. Guidelines for Adult Stroke Rehabilitation and Recovery: A Guideline for Healthcare Professionals From the American Heart Association/American Stroke Association. Stroke. 2016;47(6):e98-e169. PMID: 27143842.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Post-Stroke Depression Screening and SSRI Pharmacotherapy.",
      "distractorExclusionNotes": "Competitor Withhold antidepressant pharmacotherapy and observ excluded by Untreated post-stroke depression impairs rehabilitation, pre.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0757",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Primary Hyperparathyroidism Surgical Parathyroidectomy Indications",
    "provisionalDifficulty": 4,
    "stem": "A 47-year-old woman presents to the outpatient clinic for evaluation of asymptomatic hypercalcemia discovered during routine blood work for life insurance screening. She feels completely well, exercises regularly, and denies bone pain, fatigue, constipation, abdominal pain, polydipsia, polyuria, kidney stones, or mood changes. She takes no medications and does not use calcium, vitamin D, or lithium supplements. Physical examination reveals normal vital signs, a non-tender normal-sized thyroid gland with no palpable neck masses, and normal deep tendon reflexes. Laboratory evaluation reveals: serum calcium 11.2 mg/dL (reference range 8.5-10.2 mg/dL), serum albumin 4.0 g/dL, serum phosphate 2.3 mg/dL (normal 2.5-4.5 mg/dL), intact parathyroid hormone (PTH) 88 pg/mL (normal 15-65 pg/mL, inappropriately elevated in the setting of hypercalcemia), serum 25-hydroxyvitamin D 34 ng/mL, and serum creatinine 0.8 mg/dL (estimated GFR 94 mL/min/1.73 m2). A 24-hour urine collection reveals: calcium excretion 280 mg/24 hr (normal 100-300 mg/24 hr), with a calculated urine calcium-to-creatinine clearance ratio of 0.024 (normal > 0.02, ruling out familial hypocalciuric hypercalcemia [FHH]). Dual-energy x-ray absorptiometry (DEXA) demonstrates: lumbar spine (L1-L4) T-score of -1.8, femoral neck T-score of -1.6, and distal one-third radius T-score of -2.6 (osteoporosis in cortical bone). Which of the following is the most appropriate next step in management according to the International Workshop on the Management of Asymptomatic Primary Hyperparathyroidism?",
    "choices": [
      [
        "Referral to an experienced endocrine surgeon for parathyroidectomy (focused minimally invasive parathyroidectomy or bilateral neck exploration)",
        "PRIMARY HYPERPARATHYROIDISM (PHPT) SURGICAL INDICATIONS (INTERNATIONAL WORKSHOP GUIDELINES 2022): (1) PATHOPHYSIOLOGY AND DIAGNOSIS: Autonomous hypersecretion of parathyroid hormone (most commonly solitary parathyroid adenoma [85%], parathyroid hyperplasia [10-15%], or parathyroid carcinoma [< 1%]). Biochemical diagnosis: HYPERCALCEMIA WITH AN INAPPROPRIATELY ELEVATED (OR NON-SUPPRESSED) INTACT PTH. Crucial step: Rule out Familial Hypocalciuric Hypercalcemia (FHH) using 24-hour urine calcium-to-creatinine clearance ratio (ratio < 0.01 suggests FHH; ratio > 0.02 rules out FHH and confirms PHPT); (2) BONE INVOLVEMENT PATTERN: PTH preferentially catabolizes CORTICAL BONE over trabecular bone; therefore, BONE LOSS IS GREATEST AT THE DISTAL ONE-THIRD RADIUS (predominantly cortical bone, T-score -2.6 here), whereas lumbar spine is relatively spared; (3) INTERNATIONAL GUIDELINES FOR PARATHYROIDECTOMY IN ASYMPTOMATIC PHPT: Surgery is DEFINITIVELY RECOMMENDED if ANY ONE of the following criteria is met: (a) AGE < 50 YEARS (this patient is 47 years old, fulfilling the age criterion); (b) SERUM CALCIUM > 1.0 MG/DL (0.25 MMOL/L) ABOVE THE UPPER LIMIT OF NORMAL (here 11.2 mg/dL, exactly 1.0 mg/dL above normal ULN 10.2); (c) SKELETAL INVOLVEMENT: T-score <= -2.5 at ANY site (lumbar spine, hip, femoral neck, OR DISTAL ONE-THIRD RADIUS; here radius T-score is -2.6, fulfilling the osteoporosis criterion), or presence of vertebral fragility fracture; (d) RENAL INVOLVEMENT: eGFR < 60 mL/min/1.73 m2, 24-hour urine calcium > 250 mg/day (in women) with high stone risk, or asymptomatic nephrolithiasis/nephrocalcinosis on renal ultrasound/CT; (4) SURGICAL CURE: Parathyroidectomy is the ONLY definitive curative treatment for primary hyperparathyroidism, successfully normalizing calcium and PTH in > 95-98% of patients, improving bone mineral density, and reducing long-term fracture risk."
      ],
      [
        "Observation and watchful waiting with annual serum calcium and biannual DEXA scans, withholding surgery because the patient has no clinical symptoms",
        "Watchful waiting is appropriate only for patients who meet NONE of the guideline surgical criteria; this patient fulfills three separate surgical indications (age 47, calcium > 1.0 mg/dL above normal, and radius T-score -2.6)."
      ],
      [
        "Initiation of daily oral bisphosphonate therapy with alendronate 70 mg weekly as definitive curative management",
        "Bisphosphonates may transiently improve bone mineral density but do not cure the underlying parathyroid adenoma, do not normalize elevated PTH, and cannot replace definitive curative parathyroidectomy."
      ],
      [
        "Prescribe oral cinacalcet 30 mg twice daily as first-line curative pharmacotherapy",
        "Cinacalcet is a calcimimetic that activates calcium-sensing receptors, lowering serum calcium; it does not cure parathyroid adenomas, does not improve bone mineral density, and is reserved for patients who cannot undergo surgery."
      ],
      [
        "Recommend a strict low-calcium diet (< 400 mg daily) to prevent hypercalcemic complications",
        "Severe calcium restriction stimulates further PTH hypersecretion from the autonomous adenoma, accelerating cortical bone resorption and worsening osteoporosis; normal dietary calcium (800-1,000 mg/day) is recommended."
      ]
    ],
    "shortestValidSolution": "Asymptomatic primary hyperparathyroidism (Ca 11.2, PTH 88) + Age 47 (< 50) + Distal 1/3 radius T-score -2.6 (<= -2.5) = Meets Surgical Criteria -> Parathyroidectomy (International Workshop guidelines).",
    "necessaryInference": "Apply international consensus guidelines for primary hyperparathyroidism: recognize indications for parathyroidectomy in asymptomatic patients (age < 50, calcium > 1.0 mg/dL above normal, osteoporosis at any site including distal radius).",
    "strongestDistractor": "Observation and watchful waiting with annual serum calcium and biannual DEXA scans, withholding surgery because the patient has no clinical symptoms",
    "distractorExclusion": "The patient meets multiple objective surgical criteria (age < 50, radius T-score -2.6, calcium 11.2); delaying surgery causes progressive osteoporotic bone loss and fracture.",
    "citation": "Bilezikian JP, Khan AA, Silverberg SJ, et al. Evaluation and Management of Primary Hyperparathyroidism: Summary Statement and Guidelines from the Fifth International Workshop. J Bone Miner Res. 2022;37(11):2293-2314. PMID: 36245251.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Primary Hyperparathyroidism Surgical Parathyroidectomy Indications.",
      "distractorExclusionNotes": "Competitor Observation and watchful waiting with annual serum excluded by The patient meets multiple objective surgical criteria (age .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0758",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Severe Community-Acquired Pneumonia ICU Dual Therapy and Corticosteroids",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man presents to the emergency department with a 3-day history of high fevers, shaking chills, productive cough with rust-colored sputum, and rapidly worsening shortness of breath. He has a history of hypertension and a 30-pack-year smoking history. On arrival, he is in severe respiratory distress, tachypneic, and confused (disoriented to date and location). Vital signs: temperature 39.4 C (102.9 F), blood pressure 82/50 mm Hg, heart rate 126/min, respirations 34/min, and oxygen saturation 86% on ambient air, increasing to 91% on high-flow nasal cannula at 50 L/min with FiO2 0.70. Physical examination reveals bronchial breath sounds and inspiratory crackles over the entire right lower and middle lung lobes, with dullness to percussion. Arterial blood gas reveals: pH 7.26, PaCO2 32 mm Hg, and PaO2 58 mm Hg (PaO2/FiO2 ratio 83 mm Hg). Chest radiography demonstrates dense, multi-lobar right middle and right lower lobe consolidation with air bronchograms. White blood cell count is 24,800/mm3 with 22% band forms, and serum lactate is 3.8 mmol/L. Intravenous crystalloid resuscitation with 30 mL/kg balanced salt solution fails to restore blood pressure (repeat BP 86/52 mm Hg), requiring initiation of a continuous norepinephrine infusion. The patient fulfills ATS/IDSA major criteria for severe community-acquired pneumonia (septic shock requiring vasopressors and respiratory failure requiring high-flow oxygen). Which of the following represents the most appropriate, guideline-directed antimicrobial and adjunctive pharmacotherapy?",
    "choices": [
      [
        "Intravenous combination antimicrobial therapy with a potent antipneumococcal beta-lactam (such as ceftriaxone or ampicillin-sulbactam) PLUS an advanced macrolide (azithromycin), combined with adjunctive early intravenous hydrocortisone (200 mg daily)",
        "SEVERE COMMUNITY-ACQUIRED PNEUMONIA (sCAP) IN THE ICU: (1) ATS/IDSA CRITERIA FOR SEVERE CAP: Requires presence of AT LEAST ONE MAJOR CRITERION (Septic shock requiring vasopressors; or Respiratory failure requiring invasive mechanical ventilation) OR AT LEAST THREE MINOR CRITERIA (RR >= 30, PaO2/FiO2 <= 250, multilobar infiltrates, confusion, uremia BUN >= 20, leukopenia, thrombocytopenia, hypothermia, hypotension requiring fluid). This patient meets both major and multiple minor criteria (shock on norepinephrine, P/F 83, multilobar infiltrates, confusion, RR 34); (2) EMPIRIC ANTIMICROBIAL REGIMENS FOR SEVERE CAP (ATS/IDSA GUIDELINES): (a) DUAL COMBINATION THERAPY IS MANDATORY: Intravenous BETA-LACTAM (CEFTRIAXONE 2 G/DAY, AMPICILLIN-SULBACTAM, OR CEFOTAXIME) PLUS AN ADVANCED MACROLIDE (INTRAVENOUS AZITHROMYCIN 500 MG/DAY); OR Beta-lactam PLUS Respiratory Fluoroquinolone (levofloxacin 750 mg/day). Monotherapy (e.g., fluoroquinolone alone) is strictly discouraged in severe ICU CAP because large observational and randomized studies demonstrate superior survival with beta-lactam plus macrolide dual therapy (due to macrolide immunomodulatory, anti-inflammatory, and biofilm-suppressive effects); (b) Add MRSA/Pseudomonas coverage (vancomycin + cefepime) ONLY if specific validated risk factors or prior respiratory isolation exists; (3) ADJUNCTIVE CORTICOSTEROID THERAPY (THE CAPE COD TRIAL): Landmark randomized double-blind multicenter trial (Dequin et al., NEJM 2023): Early INTRAVENOUS HYDROCORTISONE (200 mg daily continuous or bolus for 8-14 days) in severe ICU community-acquired pneumonia resulted in a STATISTICALLY SIGNIFICANT 5.7% ABSOLUTE REDUCTION IN 28-DAY ALL-CAUSE MORTALITY (6.2% in hydrocortisone group vs 11.9% in placebo group; p = 0.006), with significant reductions in intubation rates and vasopressor requirements."
      ],
      [
        "Monotherapy with intravenous levofloxacin 750 mg daily as sole antimicrobial agent, avoiding corticosteroids",
        "Respiratory fluoroquinolone monotherapy in severe ICU community-acquired pneumonia is associated with higher mortality compared to beta-lactam plus macrolide combination therapy; dual therapy is guideline-mandated."
      ],
      [
        "Intravenous piperacillin-tazobactam, vancomycin, and tobramycin triple therapy in all patients without risk factors",
        "Empiric anti-pseudomonal and MRSA coverage in patients without documented prior colonization or hospital exposures exposes them to nephrotoxicity and C. difficile without survival benefit."
      ],
      [
        "Administration of oral clarithromycin 500 mg twice daily as sole antimicrobial therapy",
        "Oral macrolide monotherapy has inadequate bio-distribution and high streptococcal macrolide resistance (~30%); it is completely ineffective for severe multi-lobar pneumococcal septic shock."
      ],
      [
        "Withhold all corticosteroids because systemic steroids are strictly contraindicated in all forms of bacterial pneumonia",
        "The CAPE COD trial proved that early intravenous hydrocortisone significantly reduces 28-day mortality in severe ICU community-acquired pneumonia; withholding indicated steroids increases death."
      ]
    ],
    "shortestValidSolution": "Severe CAP in ICU (multilobar, shock on norepinephrine, P/F 83, confusion) = Severe CAP -> IV Beta-lactam (Ceftriaxone) + IV Macrolide (Azithromycin) + IV Hydrocortisone (CAPE COD trial).",
    "necessaryInference": "Apply ATS/IDSA guidelines and the CAPE COD trial evidence for severe community-acquired pneumonia: prescribe beta-lactam plus macrolide dual therapy and adjunctive intravenous hydrocortisone to reduce 28-day mortality.",
    "strongestDistractor": "Monotherapy with intravenous levofloxacin 750 mg daily as sole antimicrobial agent, avoiding corticosteroids",
    "distractorExclusion": "Fluoroquinolone monotherapy is inferior to beta-lactam/macrolide combination therapy in severe ICU pneumonia, and omitting hydrocortisone forfeits proven survival benefit.",
    "citation": "Dequin PF, Meziani F, Quenot JP, et al. Hydrocortisone in Severe Community-Acquired Pneumonia (CAPE COD). N Engl J Med. 2023;388(21):1931-1941. PMID: 36942784.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Severe Community-Acquired Pneumonia ICU Dual Therapy and Corticosteroids.",
      "distractorExclusionNotes": "Competitor Monotherapy with intravenous levofloxacin 750 mg d excluded by Fluoroquinolone monotherapy is inferior to beta-lactam/macro.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0759",
    "exam": "Step 3",
    "subject": "Obstetrics",
    "system": "Endocrine",
    "topic": "Secondary Amenorrhea Diagnostic Algorithm and Progesterone Challenge",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old nulligravid woman presents to the outpatient gynecology clinic with a 7-month history of complete cessation of menstrual periods. She had normal menarche at age 12, and her menses had been regular every 28 to 30 days until 7 months ago, when they abruptly stopped. She is sexually active with one male partner and uses male condoms consistently. She has not noticed hot flashes, night sweats, galactorrhea, severe headaches, visual field changes, cold intolerance, or hirsutism. Her weight has been stable, and she exercises moderately for 30 minutes three times weekly. Physical examination reveals a slender woman with BMI 21.8 kg/m2. Vital signs are normal. Examination of the thyroid gland is normal. Breast examination reveals no discharge or masses. Pelvic examination demonstrates normal external genitalia, normal rugated vaginal mucosa with clear cervical mucus, and a normal-sized, non-tender, anteverted uterus with no adnexal masses. The initial, mandatory first-line test\u2014a urine and serum human chorionic gonadotropin (beta-hCG) pregnancy test\u2014is completely negative, ruling out pregnancy. Which of the following represents the most appropriate, evidence-based next step in the systematic diagnostic evaluation of secondary amenorrhea?",
    "choices": [
      [
        "Measurement of serum thyroid-stimulating hormone (TSH), serum prolactin, and serum follicle-stimulating hormone (FSH), followed by a medroxyprogesterone acetate withdrawal challenge",
        "SECONDARY AMENORRHEA DIAGNOSTIC ALGORITHM: (1) DEFINITION: Absence of menses for >= 3 months in a woman with previously regular cycles, or >= 6 months in a woman with previously irregular cycles; (2) STEP 1 (MANDATORY INITIAL TEST): URINE OR SERUM BETA-HCG PREGNANCY TEST. Pregnancy is the single most common cause of secondary amenorrhea in reproductive-aged women and must always be excluded first (already negative here); (3) STEP 2 (SYSTEMATIC BIOCHEMICAL SCREENING): Once pregnancy is ruled out, simultaneous initial laboratory testing must evaluate the three most common endocrine causes of ovulatory dysfunction: (a) SERUM TSH: Hypothyroidism increases hypothalamic TRH, which stimulates pituitary lactotrophs, causing secondary hyperprolactinemia and amenorrhea; (b) SERUM PROLACTIN: Hyperprolactinemia (prolactinoma or dopamine antagonists) suppresses hypothalamic pulsatile GnRH secretion; (c) SERUM FSH AND ESTRADIOL: Categorizes amenorrhea: (1) High FSH (> 30-40 mIU/mL) indicates HYPERGONADOTROPIC HYPOGONADISM (Premature Ovarian Insufficiency / POI); (2) Low or normal FSH with low estradiol indicates HYPOGONADOTROPIC HYPOGONADISM (Functional hypothalamic amenorrhea, stress, anorexia, pituitary lesions); (3) Normal FSH with normal/elevated estrogen indicates EUGONADOTROPIC AMENORRHEA (PCOS or outflow tract obstruction); (4) STEP 3 (PROGESTIN WITHDRAWAL CHALLENGE): Oral medroxyprogesterone acetate 10 mg daily for 10 days. (a) POSITIVE WITHDRAWAL BLEEDING (bleeding occurs within 2-7 days of stopping): Confirms ADEQUATE ENDOGENOUS ESTROGEN PRODUCTION that primed the endometrium, AND confirms a PATIENT OUTFLOW TRACT (patent cervix and uterus). Points definitively to ANOVULATION (most commonly Polycystic Ovary Syndrome); (b) NEGATIVE WITHDRAWAL BLEEDING (no bleeding): Indicates either severe estrogen deficiency (hypothalamic/ovarian failure) OR an anatomical outflow tract obstruction (Asherman syndrome / intrauterine adhesions). Step 4 is then an Estrogen-Progestin challenge."
      ],
      [
        "Perform an emergent brain MRI with gadolinium to rule out an empty sella syndrome before drawing blood",
        "Neuroimaging is expensive and indicated only if serum prolactin is elevated, or if the patient exhibits visual field defects or cranial neuropathies; drawing TSH, prolactin, and FSH is the mandatory initial step."
      ],
      [
        "Perform an emergent diagnostic hysteroscopy and endometrial curettage to evaluate for endometrial hyperplasia",
        "Invasive hysteroscopy is indicated for suspected Asherman syndrome (intrauterine synechiae after curettage) or abnormal uterine bleeding; non-invasive endocrine blood testing must precede invasive procedures."
      ],
      [
        "Initiate empiric cyclic hormone replacement therapy with conjugated estrogens and medroxyprogesterone without further diagnostic testing",
        "Empiric hormone therapy masks underlying treatable pathologies (such as a prolactinoma, thyroid disease, or ovarian failure); establishing the underlying etiology is mandatory."
      ],
      [
        "Perform an immediate karyotype analysis to evaluate for 45,X Turner syndrome",
        "Karyotype is indicated in primary amenorrhea (delayed menarche) or in premature ovarian insufficiency diagnosed at age < 30 with elevated FSH; screening TSH, prolactin, and gonadotropins is required first."
      ]
    ],
    "shortestValidSolution": "Secondary amenorrhea (> 3 mo) + pregnancy ruled out (negative beta-hCG) = Secondary Amenorrhea workup -> TSH + Prolactin + FSH + Progestin withdrawal challenge (ACOG guidelines).",
    "necessaryInference": "Apply the standard clinical diagnostic algorithm for secondary amenorrhea: exclude pregnancy first, followed by measurement of TSH, prolactin, and FSH, combined with a progestin withdrawal challenge.",
    "strongestDistractor": "Perform an emergent brain MRI with gadolinium to rule out an empty sella syndrome before drawing blood",
    "distractorExclusion": "Pituitary MRI is reserved for documented hyperprolactinemia or focal neurological deficits; initial endocrine laboratory screening with TSH, prolactin, and FSH is the proper first step.",
    "citation": "Practice Committee of the American Society for Reproductive Medicine. Current evaluation of amenorrhea. Fertil Steril. 2008;90(5 Suppl):S219-S225. PMID: 19007635.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Secondary Amenorrhea Diagnostic Algorithm and Progesterone Challenge.",
      "distractorExclusionNotes": "Competitor Perform an emergent brain MRI with gadolinium to r excluded by Pituitary MRI is reserved for documented hyperprolactinemia .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0760",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Acute Gout in Renal Transplant Recipient Calcineurin Inhibitor Interactions",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man who underwent deceased-donor renal transplantation 3 years ago presents to the outpatient transplant nephrology clinic with sudden-onset, severe pain, swelling, and intense redness in his right first metatarsophalangeal (MTP) joint that began 8 hours ago. He can barely bear weight on his right foot. His current immunosuppressive maintenance regimen consists of oral cyclosporine 100 mg twice daily, mycophenolate mofetil 750 mg twice daily, and oral prednisone 5 mg daily. His baseline serum creatinine is stable at 1.4 mg/dL (eGFR 56 mL/min/1.73 m2). On physical examination, the right first MTP joint is exquisitely tender, erythematous, swollen, and warm to touch (podagra). Vital signs are normal. Arthrocentesis of the right first MTP joint yields cloudy synovial fluid; polarizing microscopy reveals intracellular, needle-shaped, strongly negatively birefringent monosodium urate crystals, confirming an acute gout flare. Gram stain and bacterial cultures are negative. The transplant nephrologist plans acute anti-inflammatory pharmacotherapy. Which of the following is the most appropriate management plan for this patient's acute gout flare, taking into account his immunosuppressive medications?",
    "choices": [
      [
        "Temporary escalation of oral systemic corticosteroids (e.g., prednisone 30 to 40 mg daily for 5 days with a rapid taper) or an intra-articular corticosteroid injection, strictly avoiding NSAIDs and colchicine",
        "ACUTE GOUT IN SOLID ORGAN TRANSPLANT RECIPIENTS ON CALCINEURIN INHIBITORS (CNIs): (1) PATHOPHYSIOLOGY AND EPIDEMIOLOGY: Gout occurs in up to 10% to 25% of renal transplant recipients. CYCLOSPORINE AND TACROLIMUS DIRECTLY INHIBIT RENAL TUBULAR URATE SECRETION, causing hyperuricemia and accelerating monosodium urate crystal precipitation; (2) CONTRAINDICATIONS TO CONVENTIONAL GOUT THERAPIES: (a) NSAIDs ARE STRICTLY CONTRAINDICATED: NSAIDs (indomethacin, naproxen, ibuprofen) inhibit renal vasodilatory prostaglandins, precipitating intense pre-glomerular afferent arteriolar vasoconstriction. In patients receiving cyclosporine or tacrolimus (which are already potent afferent arteriolar vasoconstrictors), COMBINING NSAIDs WITH CNIs TRIGGERS PROFOUND ACUTE RENAL ALLOGRAFT ISCHEMIA AND ACUTE TUBULAR NECROSIS; (b) COLCHICINE IS CONTRAINDICATED (OR EXTREMELY HIGH RISK): Cyclosporine is a potent inhibitor of both CYTOCHROME P450 3A4 (CYP3A4) AND P-GLYCOPROTEIN (P-gp). Colchicine elimination is strictly dependent on both P-gp and CYP3A4. Co-administration of cyclosporine with colchicine increases serum colchicine concentrations by 300% to 400%, precipitating severe, life-threatening COLCHICINE TOXICITY: RHABDOMYOLYSIS, FATAL NEUROMYOPATHY, PANCYTOPENIA, AND ARREST; (3) FIRST-LINE AGENT OF CHOICE: SYSTEMIC OR INTRA-ARTICULAR CORTICOSTEROIDS. Because this patient is already taking low-dose maintenance prednisone (5 mg/day), a short course of elevated systemic oral prednisone (30-40 mg daily for 5 days, followed by a 7- to 10-day taper back to baseline) OR intra-articular triamcinolone injection provides rapid, safe, and effective anti-inflammatory relief without nephrotoxicity or drug-drug interactions."
      ],
      [
        "Initiation of high-dose oral naproxen 500 mg twice daily for 7 days",
        "NSAIDs combined with calcineurin inhibitors (cyclosporine) cause synergistic afferent arteriolar vasoconstriction, precipitating severe acute allograft ischemia and acute kidney injury."
      ],
      [
        "Initiation of oral colchicine 1.2 mg followed by 0.6 mg every 2 hours until gastrointestinal symptoms develop",
        "Cyclosporine potently inhibits CYP3A4 and P-glycoprotein, causing massive colchicine accumulation and precipitating fatal rhabdomyolysis and bone marrow suppression; colchicine is contraindicated."
      ],
      [
        "Immediate escalation of allopurinol from 100 mg to 600 mg daily during the acute attack",
        "Escalating urate-lowering therapy during an acute flare destabilizes articular crystals, prolongs the acute attack, and does not provide acute anti-inflammatory analgesia."
      ],
      [
        "Discontinue cyclosporine permanently and replace it with high-dose azathioprine",
        "Discontinuing the primary calcineurin inhibitor risks acute allograft rejection; furthermore, azathioprine combined with allopurinol causes fatal pancytopenia; gout is managed by treating the flare with steroids."
      ]
    ],
    "shortestValidSolution": "Renal transplant on Cyclosporine + acute podagra (MSU crystals) = Acute Gout in CNI patient -> Oral Prednisone burst (30-40 mg) OR Intra-articular steroid (strictly avoid NSAIDs/Colchicine).",
    "necessaryInference": "Select systemic or intra-articular corticosteroids as the safe treatment of choice for acute gout in renal transplant recipients on calcineurin inhibitors, recognizing that NSAIDs cause acute nephrotoxicity and colchicine causes fatal toxicity via P-gp/CYP3A4 inhibition.",
    "strongestDistractor": "Initiation of oral colchicine 1.2 mg followed by 0.6 mg every 2 hours until gastrointestinal symptoms develop",
    "distractorExclusion": "Cyclosporine blocks P-glycoprotein and CYP3A4-mediated clearance of colchicine, causing lethal rhabdomyolysis and pancytopenia; corticosteroids must be used instead.",
    "citation": "Stamp LK, Chapman PT. Gout in solid organ transplantation: a challenging clinical problem. Drugs. 2013;73(15):1653-1664. PMID: 24043513.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Acute Gout in Renal Transplant Recipient Calcineurin Inhibitor Interactions.",
      "distractorExclusionNotes": "Competitor Initiation of oral colchicine 1.2 mg followed by 0 excluded by Cyclosporine blocks P-glycoprotein and CYP3A4-mediated clear.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0761",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Opioid Use Disorder Medication-Assisted Treatment Buprenorphine vs Methadone",
    "provisionalDifficulty": 4,
    "stem": "A 31-year-old man presents to the primary care clinic requesting help for opioid addiction. He has an 8-year history of non-medical prescription opioid use that transitioned to daily intravenous fentanyl use over the past 3 years. He reports intense physical cravings and daily withdrawal symptoms (sweating, chills, myalgias, diarrhea, rhinorrhea) whenever he attempts to stop. He has experienced two accidental overdose events in the past year that required emergency resuscitation with intranasal naloxone by friends. He has undergone three short-term inpatient detoxification programs (5- to 7-day taper with clonidine or buprenorphine), but relapsed within days of discharge each time. He is employed in construction and expresses a strong desire to achieve long-term recovery and avoid dying from an overdose. Physical examination reveals needle track marks in the bilateral antecubital fossae without erythema or abscess; vital signs are normal, and he exhibits no active signs of acute opioid withdrawal (Clinical Opiate Withdrawal Scale [COWS] score 3). Screening for viral hepatitis reveals positive hepatitis C antibody with detectable HCV RNA; HIV screening is negative. Which of the following represents the most effective, evidence-based management strategy to reduce all-cause mortality and maintain long-term recovery in this patient according to American Society of Addiction Medicine (ASAM) guidelines?",
    "choices": [
      [
        "Initiation and long-term maintenance therapy with an opioid agonist or partial agonist (such as buprenorphine-naloxone or methadone) combined with behavioral counseling and harm reduction services",
        "OPIOID USE DISORDER (OUD) MEDICATION-ASSISTED TREATMENT (MAT) GUIDELINES (ASAM 2020): (1) PATHOPHYSIOLOGY AND TOLERANCE: Chronic exogenous opioid exposure down-regulates endogenous mu-opioid receptors, alters ventral tegmental area dopaminergic circuits, and induces neuroadaptation in the locus coeruleus, creating profound physical dependence and psychological craving; (2) INEFFECTIVENESS AND DANGER OF SHORT-TERM DETOXIFICATION ALONE: Short-term detoxification (without ongoing agonist maintenance) carries a RELAPSE RATE EXCEEDING 80% TO 90% WITHIN 1 MONTH. Crucially, detoxification causes LOSS OF OPIOID TOLERANCE: when the patient inevitably relapses on street fentanyl, the loss of respiratory tolerance precipitates immediate FATAL OPIOID OVERDOSE. Therefore, medically supervised withdrawal ('detox') without maintenance is strongly discouraged; (3) EVIDENCE-BASED LONG-TERM MAINTENANCE MEDICATIONS (THE LIFE-SAVING STANDARD): (a) BUPRENORPHINE-NALOXONE (SUBOXONE): High-affinity, slow-dissociating PARTIAL MU-OPIOID RECEPTOR AGONIST and kappa-antagonist. Partial agonism confers a 'CEILING EFFECT' ON RESPIRATORY DEPRESSION, making accidental overdose with buprenorphine alone virtually impossible. Co-formulated with naloxone (poor oral bioavailability; if injected parenterally, naloxone precipitates immediate severe withdrawal, deterring IV diversion). Can be prescribed in outpatient office-based primary care settings; (b) METHADONE: Long-acting FULL MU-OPIOID RECEPTOR AGONIST (half-life 24-36 hours). Administered through federally certified Opioid Treatment Programs (OTPs). Excellent for patients with high tolerance to illicit synthetic fentanyls; (c) MORTALITY REDUCTION: Multiple large cohort studies and Cochrane meta-analyses demonstrate that LONG-TERM AGONIST MAINTENANCE (BUPRENORPHINE OR METHADONE) REDUCES ALL-CAUSE MORTALITY BY > 50%, reduces fatal overdose, suppresses illicit opioid use, decreases hepatitis C and HIV transmission, and improves employment and social functioning; (4) HARM REDUCTION: Distribute take-home naloxone kits, offer sterile syringe exchange, and treat hepatitis C."
      ],
      [
        "Enrollment in a 7-day inpatient medical detoxification program followed by complete abstinence without maintenance pharmacotherapy",
        "Short-term detoxification alone resets opioid tolerance and has a > 85-90% relapse rate, carrying a dramatically elevated risk of fatal fentanyl overdose upon relapse; maintenance agonist therapy is required."
      ],
      [
        "Immediate initiation of oral naltrexone 50 mg daily while the patient has opioids in his system",
        "Naltrexone is a competitive opioid receptor antagonist; administering it to an active opioid user without a 7- to 14-day opioid-free washout precipitates immediate, severe, excruciating precipitated withdrawal."
      ],
      [
        "Prescription of oral clonidine 0.1 mg three times daily as sole long-term maintenance pharmacotherapy",
        "Clonidine is an alpha-2 adrenergic agonist that mitigates autonomic withdrawal symptoms (sweating, tachycardia) but does not reduce opioid craving or prevent fatal overdose; it cannot serve as maintenance therapy."
      ],
      [
        "Recommend exclusive participation in peer 12-step support groups while actively discouraging all medication-assisted treatments",
        "Rejecting FDA-approved medications for OUD doubles patient mortality; 12-step peer groups are valuable adjuncts but cannot substitute for evidence-based agonist maintenance therapy."
      ]
    ],
    "shortestValidSolution": "Severe OUD (daily IV fentanyl, multiple overdoses, failed detox x3) = High mortality risk -> Long-term Opioid Agonist Maintenance (Buprenorphine-Naloxone or Methadone; ASAM guidelines reduce mortality > 50%).",
    "necessaryInference": "Select long-term opioid agonist maintenance therapy (buprenorphine-naloxone or methadone) as the gold-standard treatment for opioid use disorder to achieve > 50% reduction in all-cause mortality compared to detoxification alone.",
    "strongestDistractor": "Enrollment in a 7-day inpatient medical detoxification program followed by complete abstinence without maintenance pharmacotherapy",
    "distractorExclusion": "Detoxification alone causes loss of tolerance and has a > 85% relapse rate, dramatically increasing fatal overdose risk; agonist maintenance is the proven life-saving standard.",
    "citation": "The ASAM National Practice Guideline for the Treatment of Opioid Use Disorder: 2020 Focused Update. J Addict Med. 2020;14(2S Suppl 1):1-91. PMID: 32511106.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Opioid Use Disorder Medication-Assisted Treatment Buprenorphine vs Methadone.",
      "distractorExclusionNotes": "Competitor Enrollment in a 7-day inpatient medical detoxifica excluded by Detoxification alone causes loss of tolerance and has a > 85.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0762",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Primary Aldosteronism Diagnostic Screening and Adrenal Venous Sampling",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old man presents to the clinic for follow-up of treatment-resistant hypertension. Despite adherence to a three-drug antihypertensive regimen consisting of amlodipine 10 mg daily, valsartan 320 mg daily, and hydrochlorothiazide 25 mg daily, his automated office blood pressure is 156/98 mm Hg. Serum electrolytes reveal: serum sodium 144 mEq/L, serum potassium 3.1 mEq/L (hypokalemia; normal 3.5-5.0 mEq/L), serum bicarbonate 29 mEq/L, and normal serum creatinine 0.9 mg/dL. The physician suspects primary aldosteronism. Hydrochlorothiazide and valsartan are withdrawn and replaced with verapamil and hydralazine for 4 weeks to eliminate interference with the renin-angiotensin axis, and his potassium is repleted to 4.2 mEq/L. Morning screening laboratory evaluation reveals: plasma aldosterone concentration (PAC) 28 ng/dL (normal < 15), plasma renin activity (PRA) suppressed at 0.2 ng/mL/hr (normal 0.6-3.0), yielding an elevated aldosterone-to-renin ratio (ARR) of 140 (positive threshold >= 20 to 30). A confirmatory 24-hour urinary aldosterone excretion test during high oral sodium loading demonstrates 24-hour urine aldosterone of 22 mcg/24 hr with urine sodium > 200 mEq/24 hr, definitively confirming autonomous primary aldosteronism. Thin-section contrast-enhanced adrenal CT demonstrates a 1.2-cm low-attenuation, well-circumscribed solitary nodule in the left adrenal gland; the right adrenal gland appears normal. The patient desires surgical cure. Which of the following is the most appropriate next step before considering unilateral laparoscopic adrenalectomy according to Endocrine Society guidelines?",
    "choices": [
      [
        "Perform bilateral adrenal venous sampling (AVS) to differentiate unilateral aldosterone hypersecretion from bilateral adrenal hyperplasia",
        "PRIMARY ALDOSTERONISM (PA) DIAGNOSTIC AND LOCALIZATION ALGORITHM (ENDOCRINE SOCIETY GUIDELINES): (1) CLINICAL SUSPICION: Resistant hypertension, hypertension with hypokalemia, or hypertension with adrenal incidentaloma; (2) SCREENING TEST: Morning plasma aldosterone concentration (PAC) to plasma renin activity (PRA) ratio (ARR). An ARR >= 20-30 with PAC >= 10-15 ng/dL is positive, indicating autonomous aldosterone hypersecretion independent of renin; (3) CONFIRMATORY TESTING: Oral sodium loading, intravenous saline infusion test, fludrocortisone suppression test, or captopril challenge test; (4) THE RADIOGRAPHIC PITFALL OF ADRENAL CT: Adrenal CT is routinely performed to exclude rare adrenocortical carcinoma and assess vascular anatomy. HOWEVER, ADRENAL CT IS NOTORIOUSLY UNRELIABLE FOR SUBTYPE DIFFERENTIATION: (a) Non-functioning benign adrenal adenomas ('incidentalomas') are present in > 10% of older adults; a nodule on CT may be a non-secreting 'innocent bystander,' with the true hypersecretion originating from microscopic hyperplasia in the contralateral gland; (b) Unilateral microadenomas (< 1 cm) producing massive aldosterone may be radiographically invisible on CT; (5) GOLD-STANDARD FUNCTIONAL LATERALIZATION (ADRENAL VENOUS SAMPLING [AVS]): In all patients seeking surgical cure (except young patients < 35 years old with marked hypokalemia, marked aldosterone excess, and a classic solitary unilateral macroadenoma > 1 cm), BILATERAL ADRENAL VENOUS SAMPLING IS MANDATORY BEFORE SURGERY. AVS measures cortisol and aldosterone from both adrenal veins and the inferior vena cava: (a) Cortisol gradient confirms successful vein cannulation (adrenal cortisol / IVC cortisol >= 3-5:1); (b) Aldosterone/cortisol ratio lateralization: A lateralization ratio >= 4:1 indicates UNILATERAL ALDOSTERONE HYPERSECRETION (curable by UNILATERAL LAPAROSCOPIC ADRENALECTOMY); (c) Absence of lateralization (< 3:1) confirms BILATERAL ADRENAL HYPERPLASIA (idiopathic hyperaldosteronism), which is treated MEDICALLY with mineralocorticoid receptor antagonists (spironolactone or eplerenone) and where surgery is strictly contraindicated."
      ],
      [
        "Proceed directly to left laparoscopic adrenalectomy based on the solitary left adrenal nodule visualized on CT",
        "Proceeding to surgery based on CT alone leads to inappropriate adrenalectomy in > 30-40% of patients whose nodules are non-functioning incidentalomas with underlying bilateral hyperplasia; AVS is required."
      ],
      [
        "Perform an emergent bilateral total adrenalectomy with lifelong mineralocorticoid and glucocorticoid replacement",
        "Bilateral adrenalectomy causes permanent Addisonian crisis and has no role in primary aldosteronism; unilateral disease is treated with unilateral adrenalectomy, and bilateral disease is treated medically with spironolactone."
      ],
      [
        "Initiate high-dose oral dexamethasone 2 mg daily for 6 months as primary curative pharmacotherapy",
        "Dexamethasone is indicated only for rare glucocorticoid-remediable aldosteronism (familial hyperaldosteronism type 1 with chimeric 11beta-hydroxylase/aldosterone synthase gene); standard PA does not respond to glucocorticoids."
      ],
      [
        "Perform an emergent 131I-6beta-iodomethyl-19-norcholesterol (NP-59) scintigraphy scan",
        "NP-59 scintigraphy has poor spatial resolution for sub-centimeter lesions, is rarely available, involves high radiation exposure, and has been completely supplanted by adrenal venous sampling."
      ]
    ],
    "shortestValidSolution": "Confirmed Primary Aldosteronism (ARR 140, positive salt suppression) + CT showing left 1.2-cm nodule = Desires surgical cure -> Adrenal Venous Sampling (AVS) before unilateral adrenalectomy.",
    "necessaryInference": "Apply Endocrine Society guidelines for primary aldosteronism: mandate bilateral adrenal venous sampling (AVS) to differentiate unilateral adenoma from bilateral hyperplasia before proceeding with adrenalectomy.",
    "strongestDistractor": "Proceed directly to left laparoscopic adrenalectomy based on the solitary left adrenal nodule visualized on CT",
    "distractorExclusion": "Adrenal CT has poor functional concordance (> 30% discordant); AVS is the gold-standard test required to confirm lateralization before unilateral adrenalectomy.",
    "citation": "Funder JW, Carey RM, Mantero F, et al. The Management of Primary Aldosteronism: Case Detection, Diagnosis, and Treatment: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(5):1889-1916. PMID: 26934393.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Primary Aldosteronism Diagnostic Screening and Adrenal Venous Sampling.",
      "distractorExclusionNotes": "Competitor Proceed directly to left laparoscopic adrenalectom excluded by Adrenal CT has poor functional concordance (> 30% discordant.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0763",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Transthyretin Cardiac Amyloidosis Diagnosis and Tafamidis Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old man presents to the cardiology clinic with progressive dyspnea on exertion, bilateral lower extremity edema, and fatigue over the past 8 months. His past medical history includes bilateral carpal tunnel syndrome treated surgically 5 years ago and lumbar spinal canal stenosis treated with laminectomy 2 years ago. He was recently diagnosed with heart failure with preserved ejection fraction and was prescribed lisinopril and metoprolol, but both medications caused severe dizziness and hypotension and had to be discontinued. Physical examination reveals elevated jugular venous pressure to 10 cm H2O, clear lung fields, normal S1 and S2 with an S4 gallop, and 2+ pitting pretibial edema. Electrocardiogram demonstrates normal sinus rhythm with low QRS voltage in all limb leads (QRS amplitude < 5 mm) and a pseudo-infarction pattern (Q waves in leads V1 to V3) without ischemic changes. Transthoracic echocardiogram demonstrates: left ventricular ejection fraction 48%, severe concentric left ventricular wall thickening (interventricular septal thickness 18 mm; normal <= 10 mm) with a sparkling, granular myocardial texture, severe biatrial enlargement, and apical sparing of longitudinal strain on speckle-tracking echocardiography (the classic 'cherry-on-top' bullseye pattern). Serum and urine protein electrophoresis with immunofixation (SPEP/UPEP) and serum free light chain (FLC) ratio are completely normal, ruling out AL light-chain amyloidosis. Which of the following is the most appropriate non-invasive diagnostic test to confirm transthyretin cardiac amyloidosis (ATTR-CM) and guide targeted disease-modifying therapy?",
    "choices": [
      [
        "Technetium-99m pyrophosphate (99mTc-PYP) bone scintigraphy (or 99mTc-DPD), followed by initiation of oral tafamidis if high myocardial uptake is demonstrated",
        "TRANSTHYRETIN CARDIAC AMYLOIDOSIS (ATTR-CM): (1) PATHOPHYSIOLOGY AND TYPES: Transthyretin (TTR) is a tetrameric transport protein synthesized primarily by the liver that carries thyroxine and retinol-binding protein. Instability of the tetramer leads to dissociation into misfolded monomers, which self-assemble into insoluble amyloid fibrils that deposit in the myocardial extracellular space. Two major forms: (a) WILD-TYPE ATTR (ATTRwt, historically 'senile systemic amyloidosis'): Affects older men (> 65 years); classic extracardiac clinical clues include BILATERAL CARPAL TUNNEL SYNDROME (occurring 5-10 years prior to cardiac diagnosis), LUMBAR SPINAL STENOSIS, and spontaneous biceps tendon rupture; (b) HEREDITARY / VARIANT ATTR (ATTRv): Autosomal dominant missense mutations (most common V122I in African Americans; T60A in Irish ancestry); (2) DECISIVE CLINICAL AND ECG/ECHO DISCORDANCE: Striking DISCREPANCY BETWEEN MARKED LV WALL THICKENING ON ECHOCARDIOGRAM (18 mm, simulating severe hypertrophy) AND LOW OR NORMAL VOLTAGE ON ECG (amyloid is non-excitable protein, not hypertrophied myocytes). Speckle-tracking echo shows apical sparing of strain ('cherry-on-top'); (3) NON-INVASIVE DIAGNOSTIC ALGORITHM (ACC/AHA CONSENSUS CRITERIA): (a) STEP 1: RULE OUT AL AMYLOIDOSIS: Serum/urine immunofixation + serum free light chain ratio (mandatory, because AL requires emergent chemotherapy); (b) STEP 2: TECHNETIUM-99M PYROPHOSPHATE (99mTc-PYP) OR DPD SCINTIGRAPHY: Bone-seeking radiotracers avidly bind calcium in ATTR amyloid fibrils. A Grade 2 or 3 myocardial uptake (equal to or greater than rib bone uptake) in the absence of monoclonal light chains has a POSITIVE PREDICTIVE VALUE AND SPECIFICITY OF 100% FOR ATTR-CM, obviating the need for an invasive endomyocardial biopsy; (4) TARGETED DISEASE-MODIFYING PHARMACOTHERAPY (TAFAMIDIS): The landmark ATTR-ACT trial (Maurer et al., NEJM 2018) proved that TAFAMIDIS (A TTR KINETIC STABILIZER THAT BINDS TTR TETRAMERS AND PREVENTS DISSOCIATION INTO AMYLOIDOGENIC MONOMERS) SIGNIFICANTLY REDUCED ALL-CAUSE MORTALITY (29.5% vs 42.9%; HR 0.70; p = 0.026) and cardiovascular hospitalizations by 32%."
      ],
      [
        "Perform an emergent diagnostic coronary angiography to evaluate for ischemic cardiomyopathy",
        "Coronary angiography evaluates epicardial CAD; low voltage with severe wall thickening and apical strain sparing is classic for infiltrative amyloidosis, not ischemic disease."
      ],
      [
        "Perform an emergent open thoracotomy for full-thickness surgical myocardial biopsy",
        "Open surgical biopsy carries prohibitive surgical risk; contemporary guidelines confirm that 99mTc-PYP scintigraphy with negative light chains establishes definitive non-invasive diagnosis."
      ],
      [
        "Initiate high-dose intravenous melphalan and autologous stem cell transplantation",
        "Melphalan and stem cell transplantation treat light-chain AL amyloidosis (plasma cell dyscrasia); this patient has normal light chains and wild-type transthyretin amyloidosis, where chemotherapy is ineffective and toxic."
      ],
      [
        "Initiate aggressive beta-blocker and ACE-inhibitor therapy titrated to maximum doses",
        "Patients with cardiac amyloidosis have a fixed, small stroke volume and depend on resting heart rate for cardiac output; beta-blockers and ACE inhibitors induce profound, debilitating hypotension and heart block."
      ]
    ],
    "shortestValidSolution": "Carpal tunnel x2 + spinal stenosis + severe LV thickening (18 mm) with low ECG voltage + apical strain sparing + negative light chains = ATTR Cardiac Amyloidosis -> 99mTc-PYP Scintigraphy + Tafamidis (ATTR-ACT trial).",
    "necessaryInference": "Diagnose transthyretin cardiac amyloidosis (ATTR-CM) using clinical hallmarks (carpal tunnel, low ECG voltage with thick LV walls) and non-invasive 99mTc-PYP bone scintigraphy, and select tafamidis as targeted therapy.",
    "strongestDistractor": "Perform an emergent open thoracotomy for full-thickness surgical myocardial biopsy",
    "distractorExclusion": "Contemporary international guidelines establish that 99mTc-PYP scintigraphy combined with negative monoclonal light chains confirms ATTR-CM with 100% specificity, eliminating the need for invasive biopsy.",
    "citation": "Maurer MS, Schwartz JH, Gundapaneni S, et al. Tafamidis Treatment for Patients with Transthyretin Amyloid Cardiomyopathy (ATTR-ACT). N Engl J Med. 2018;379(11):1007-1016. PMID: 30145929.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Transthyretin Cardiac Amyloidosis Diagnosis and Tafamidis Therapy.",
      "distractorExclusionNotes": "Competitor Perform an emergent open thoracotomy for full-thic excluded by Contemporary international guidelines establish that 99mTc-P.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0764",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Lower GI Bleeding Oakland Risk Score and Outpatient Triage",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old woman presents to the emergency department with a 3-hour history of passing two painless, bright red bloody bowel movements mixed with small blood clots. She feels mildly lightheaded on standing but denies syncope, abdominal pain, fever, nausea, or vomiting. She has no prior history of gastrointestinal bleeding. Her past medical history includes essential hypertension treated with amlodipine 5 mg daily. She does not take anticoagulants or NSAIDs. Vital signs on arrival: supine blood pressure 126/78 mm Hg, heart rate 72/min, respirations 14/min, and oxygen saturation 99% on room air; standing blood pressure is 122/74 mm Hg with heart rate 76/min (no orthostatic changes). Physical examination reveals an alert, comfortable woman with a soft, non-tender, non-distended abdomen and normal active bowel sounds. Digital rectal examination reveals mild external hemorrhoids and a small amount of dark red blood on the glove without active brisk bleeding. Laboratory evaluation demonstrates: hemoglobin 13.8 g/dL (normal 12.0-15.5 g/dL), hematocrit 41%, platelets 240,000/mm3, BUN 14 mg/dL, serum creatinine 0.8 mg/dL, and INR 1.0. Her calculated Oakland Risk Score for acute lower gastrointestinal bleeding is 7 points (incorporating age, sex, prior bleeding, heart rate, systolic BP, and hemoglobin; low-risk threshold <= 8 points). Which of the following is the most appropriate next step in clinical management according to American College of Gastroenterology (ACG) and British Society of Gastroenterology (BSG) guidelines?",
    "choices": [
      [
        "Safe discharge home from the emergency department with expedited outpatient elective diagnostic colonoscopy within 1 to 2 weeks",
        "ACUTE LOWER GASTROINTESTINAL BLEEDING (LGIB) RISK STRATIFICATION AND TRIAGE (ACG 2023 / BSG GUIDELINES): (1) CLINICAL PRESENTATION AND ETIOLOGY: Characterized by bleeding originating distal to the ligament of Treitz (diverticular hemorrhage [most common, ~40%], ischemic colitis, vascular ectasias/angiodysplasias, hemorrhoids, polyps/colorectal carcinoma); (2) THE OAKLAND SCORE FOR RISK STRATIFICATION: The Oakland Risk Score is the gold-standard, validated clinical risk stratification tool for acute lower GI bleeding (recommended by ACG and BSG guidelines). It incorporates: age, sex, prior lower GI bleeding admission, digital rectal examination findings, heart rate, systolic blood pressure, and hemoglobin. (a) LOW-RISK PATIENT (OAKLAND SCORE <= 8 POINTS): Predicts a > 95% probability of a SAFE CLINICAL DISCHARGE (defined by absence of rebleeding, no requirement for blood transfusion, no therapeutic intervention, no in-hospital death, and no 28-day emergency readmission); (b) HIGH-RISK PATIENT (OAKLAND SCORE > 8 POINTS): Indicates risk of adverse outcomes, requiring inpatient hospital admission, hemodynamic monitoring, fluid resuscitation, and in-hospital colonoscopy; (3) CLINICAL APPLICATION: This patient has an Oakland score of 7 (low risk): completely normal hemodynamics without orthostasis, normal hemoglobin (13.8 g/dL), no coagulopathy, and non-brisk bleeding. Inpatient admission and emergent inpatient colonoscopy do not improve outcomes and consume unnecessary hospital resources. GUIDELINES EXPLICITLY RECOMMEND DISCHARGING LOW-RISK PATIENTS (OAKLAND <= 8) DIRECTLY FROM THE ED FOR EXPEDITED OUTPATIENT COLONOSCOPY; (4) COLONOSCOPY TIMING: Outpatient elective colonoscopy within 1 to 2 weeks allows full, safe bowel preparation and definitive mucosal inspection."
      ],
      [
        "Immediate admission to the intensive care unit and emergent un-prepped bedside colonoscopy within 4 hours",
        "Bedside colonoscopy without oral purgative bowel preparation in a hemodynamically stable low-risk patient has very low diagnostic yield, poor mucosal visualization, high perforation risks, and is contraindicated."
      ],
      [
        "Perform an emergent technetium-99m labeled red blood cell scintigraphy scan",
        "Nuclear red blood cell scanning is indicated for active, obscure, hemodynamically unstable bleeding with negative or inconclusive endoscopy; in a stable patient with Oakland score <= 8, nuclear scintigraphy is completely unnecessary."
      ],
      [
        "Immediate catheter-directed mesenteric angiography of the inferior mesenteric artery with empiric coil embolization",
        "Angiography and embolization are invasive rescue procedures indicated strictly for massive, life-threatening arterial hemorrhage refractory to endoscopic therapy; performing empiric embolization in a stable patient is dangerous malpractice."
      ],
      [
        "Administer an empiric transfusion of 2 units of packed red blood cells to maintain hemoglobin > 14 g/dL",
        "The patient's hemoglobin is completely normal (13.8 g/dL); transfusing non-anemic stable patients exposes them to transfusion reactions, volume overload, and infection without benefit."
      ]
    ],
    "shortestValidSolution": "Acute lower GI bleed + stable vitals + Hb 13.8 + Oakland score 7 (<= 8) = Low-Risk Acute LGIB -> Safe ED discharge with outpatient elective colonoscopy (ACG/BSG guidelines).",
    "necessaryInference": "Apply the Oakland Risk Score for acute lower gastrointestinal bleeding: identify low-risk patients (score <= 8) who can be safely discharged from the emergency department for outpatient colonoscopy.",
    "strongestDistractor": "Immediate admission to the intensive care unit and emergent un-prepped bedside colonoscopy within 4 hours",
    "distractorExclusion": "Emergent un-prepped colonoscopy has poor visualization and high complication rates; low-risk patients (Oakland <= 8) are safely managed with outpatient colonoscopy following bowel prep.",
    "citation": "Oakland K, Chadwick G, East JE, et al. Diagnosis and management of acute lower gastrointestinal bleeding: guidelines from the British Society of Gastroenterology. Gut. 2019;68(5):776-789. PMID: 30792244.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Acute Lower GI Bleeding Oakland Risk Score and Outpatient Triage.",
      "distractorExclusionNotes": "Competitor Immediate admission to the intensive care unit and excluded by Emergent un-prepped colonoscopy has poor visualization and h.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0765",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Fibromyalgia Multimodal Non-Pharmacological Management and SNRIs",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old woman presents to the outpatient rheumatology clinic with a 2-year history of diffuse, widespread musculoskeletal pain, chronic exhaustion, and non-restorative sleep. She describes her pain as a persistent, deep, burning ache affecting her neck, shoulders, upper back, lower back, hips, and knees. She wakes every morning feeling as though she has not slept, and suffers from severe cognitive 'brain fog' and daytime fatigue that has forced her to reduce her work hours as an accountant. Her medical history includes irritable bowel syndrome and tension-type headaches. Physical examination reveals an alert, anxious woman with normal vital signs. Neurological examination is completely normal with intact sensation, 5/5 motor strength, and normal reflexes. Joint examination demonstrates completely normal range of motion without synovial swelling, warmth, effusion, or erythema; however, gentle digital palpation (approximately 4 kg/cm2 pressure) over multiple standardized anatomic points (occiput, low cervical, trapezius, supraspinatus, second rib, lateral epicondyle, gluteal, greater trochanter, and knee) elicits widespread tenderness and distress (positive tender points). Laboratory evaluation: ESR 8 mm/hr, CRP 1.2 mg/L, complete blood count normal, comprehensive metabolic panel normal, TSH 1.8 mIU/L, and negative antinuclear antibody (ANA) and rheumatoid factor (RF). Which of the following is the most appropriate management plan according to American College of Rheumatology (ACR) and EULAR guidelines?",
    "choices": [
      [
        "Initiation of a structured, graduated aerobic exercise program and cognitive behavioral therapy (CBT) as the foundation, combined with an evidence-based centrally acting pharmacotherapy (such as duloxetine, milnacipran, or pregabalin), strictly avoiding opioids and systemic corticosteroids",
        "FIBROMYALGIA MANAGEMENT (ACR 2016 REVISED CRITERIA / EULAR GUIDELINES): (1) PATHOPHYSIOLOGY: Fibromyalgia is a CENTRAL SENSITIZATION SYNDROME characterized by disordered central nociceptive pain processing ('nociplastic pain'). Functional neuroimaging and CSF analyses reveal: (a) Increased excitatory neurotransmitters (substance P, glutamate) in the spinal cord dorsal horn and brain; (b) Decreased descending inhibitory neurotransmitters (serotonin and norepinephrine); (c) Augmented central pain response to non-painful stimuli (allodynia) and heightened response to painful stimuli (hyperalgesia); (2) FOUNDATIONAL FIRST-LINE MANAGEMENT (NON-PHARMACOLOGICAL): EULAR and ACR guidelines emphasize that NON-PHARMACOLOGICAL THERAPIES ARE THE CORNERSTONE OF TREATMENT: (a) REGULAR, GRADUATED LOW-IMPACT AEROBIC EXERCISE (walking, cycling, aquatic pool therapy) AND STRENGTH TRAINING: Exercise is the single intervention with the strongest, highest-quality evidence for reducing pain, improving fatigue, and enhancing physical function; (b) COGNITIVE BEHAVIORAL THERAPY (CBT): Addresses sleep hygiene, pain catastrophizing, and maladaptive coping strategies; (3) EVIDENCE-BASED FDA-APPROVED PHARMACOTHERAPY: (a) SNRIs (DULOXETINE, MILNACIPRAN): Augments descending central serotonergic and noradrenergic inhibitory pain pathways; (b) GABAPENTINOIDS (PREGABALIN, GABAPENTIN): Blocks alpha-2-delta voltage-gated calcium channels, inhibiting presynaptic release of substance P and glutamate; (c) Tricyclic antidepressants (low-dose amitriptyline or cyclobenzaprine at bedtime) for sleep architecture; (4) MEDICATIONS TO STRICTLY AVOID: (a) OPIOIDS (oxycodone, hydrocodone, tramadol, fentanyl): Strictly contraindicated; opioids lack efficacy for central nociplastic pain, cause opioid-induced hyperalgesia (worsening fibromyalgia), and induce dependence; (b) SYSTEMIC CORTICOSTEROIDS (prednisone): Fibromyalgia is NOT an autoimmune or peripheral inflammatory disorder (normal ESR/CRP); steroids provide zero benefit and cause severe metabolic, skeletal, and adrenal toxicities; (c) NSAIDs: Ineffective as monotherapy."
      ],
      [
        "Initiation of scheduled oral oxycodone 10 mg every 8 hours combined with oral carisoprodol",
        "Opioids and muscle relaxants with abuse potential are strictly contraindicated in fibromyalgia; they cause opioid-induced hyperalgesia, dependency, and worsen long-term disability."
      ],
      [
        "Prescription of daily oral prednisone 20 mg for 4 weeks to suppress widespread systemic inflammation",
        "Fibromyalgia is a central pain processing disorder, not an inflammatory disease; corticosteroids provide zero pain relief and cause severe osteoporosis, diabetes, and Cushingoid side effects."
      ],
      [
        "Advise strict bed rest and avoidance of all physical exercise to prevent further muscle strain",
        "Sedentary lifestyle and bed rest accelerate physical deconditioning and exacerbate central pain amplification; regular graduated aerobic exercise is the single most effective intervention."
      ],
      [
        "Perform multiple tender-point lidocaine and corticosteroid trigger-point injections across all 18 sites",
        "Repeated widespread trigger point injections provide only transient placebo-level relief, do not alter central pain processing, cause local tissue atrophy, and are not recommended."
      ]
    ],
    "shortestValidSolution": "Widespread chronic pain + normal ESR/CRP + multiple tender points + fatigue/poor sleep = Fibromyalgia -> Graduated aerobic exercise + CBT + Duloxetine or Pregabalin (strictly avoid opioids/steroids).",
    "necessaryInference": "Apply ACR and EULAR guidelines for fibromyalgia: establish graduated aerobic exercise and CBT as foundational therapy, use centrally acting medications (duloxetine, pregabalin), and strictly avoid opioids and steroids.",
    "strongestDistractor": "Prescription of daily oral prednisone 20 mg for 4 weeks to suppress widespread systemic inflammation",
    "distractorExclusion": "Fibromyalgia is a non-inflammatory central sensitization syndrome; corticosteroids have zero therapeutic efficacy and cause severe cumulative toxicities.",
    "citation": "Macfarlane GJ, Kronisch C, Dean LE, et al. EULAR revised recommendations for the management of fibromyalgia. Ann Rheum Dis. 2017;76(2):318-328. PMID: 27377817.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Fibromyalgia Multimodal Non-Pharmacological Management and SNRIs.",
      "distractorExclusionNotes": "Competitor Prescription of daily oral prednisone 20 mg for 4  excluded by Fibromyalgia is a non-inflammatory central sensitization syn.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0766",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "CKD Anemia Iron Optimization Before Erythropoietin-Stimulating Agents",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man with stage 4 diabetic kidney disease (eGFR 24 mL/min/1.73 m2, baseline serum creatinine 2.8 mg/dL) comes to the outpatient nephrology clinic for follow-up. He reports progressive generalized fatigue, exertional shortness of breath when walking 1 block, and decreased exercise tolerance over the past 3 months. His medications include lisinopril 20 mg daily, furosemide 40 mg daily, and atorvastatin 20 mg daily. On physical examination, he appears pale. Vital signs: blood pressure 134/82 mm Hg, heart rate 78/min, respirations 16/min. Conjunctival pallor is noted. Cardiovascular and pulmonary examinations are normal, and there is trace pretibial edema. Laboratory evaluation demonstrates: hemoglobin 8.4 g/dL (normal 13.5-17.5 g/dL; baseline was 10.8 g/dL 6 months ago), hematocrit 25.2%, MCV 84 fL, reticulocyte count 0.8% (reticulocyte production index 0.4, indicating hypoproliferative anemia), and negative fecal occult blood. Iron studies reveal: serum ferritin 78 ng/mL (normal 30-300 ng/mL) and transferrin saturation (TSAT = serum iron / TIBC x 100) of 14% (normal 20-50%). Serum vitamin B12 and folate levels are normal. The clinic fellow proposes initiating an erythropoiesis-stimulating agent (ESA, such as epoetin alfa or darbepoetin alfa). Which of the following represents the most appropriate next step in clinical management according to Kidney Disease: Improving Global Outcomes (KDIGO) guidelines?",
    "choices": [
      [
        "Initiate iron supplementation therapy (preferably intravenous iron in advanced CKD) targeting transferrin saturation (TSAT) > 20% and serum ferritin > 100 to 200 ng/mL, deferring erythropoiesis-stimulating agent initiation until iron stores are fully replete",
        "ANEMIA OF CHRONIC KIDNEY DISEASE (CKD) AND IRON OPTIMIZATION (KDIGO GUIDELINES): (1) PATHOPHYSIOLOGY: Multifactorial etiology: (a) PRIMARY CAUSE: Inadequate renal peritubular interstitial synthesis of ERYTHROPOIETIN (EPO) as functional renal parenchyma is lost; (b) ABSOLUTE IRON DEFICIENCY: Impaired nutritional intake and occult blood loss; (c) FUNCTIONAL IRON DEFICIENCY: Chronic systemic micro-inflammation in CKD increases hepatic HEPCIDIN synthesis. High hepcidin degrades enterocyte and macrophage ferroportin, trapping iron inside reticuloendothelial storage depots and preventing iron release to erythroblasts in the bone marrow; (2) DECISIVE PRINCIPLE OF IRON OPTIMIZATION BEFORE ESAs: A bone marrow stimulated by exogenous EPO requires massive, rapid mobilization of iron to synthesize hemoglobin. IF IRON STORES ARE DEFICIENT (TSAT <= 20% OR FERRITIN <= 100-200 NG/ML), ESAs CANNOT FUNCTION EFFECTIVELY ('ESA RESISTANCE'), REQUIRING ESCALATING TOXIC DOSES WITHOUT RAISING HEMOGLOBIN; (3) KDIGO IRON TARGET THRESHOLDS: In adult CKD patients with anemia: GUIDELINES RECOMMEND A TRIAL OF INTRAVENOUS IRON (OR ORAL IRON IN NON-DIALYSIS CKD) TO ACHIEVE AND MAINTAIN: (a) TRANSFERRIN SATURATION (TSAT) > 20%; AND (b) SERUM FERRITIN > 100 NG/ML (AND OFTEN > 200 NG/ML). In many patients with TSAT <= 20%, iron repletion alone increases hemoglobin by 1 to 2 g/dL, completely obviating the need for ESAs; (4) GUIDELINES ON ESAs (BLACK-BOX WARNING / TRIAL LESSONS): Landmark clinical trials (CHOIR, CREATE, and TREAT trials) proved that using high-dose ESAs to normalize hemoglobin (> 13 g/dL) significantly increases STROKE, VENOUS THROMBOEMBOLISM, CARDIOVASCULAR EVENTS, AND DEATH. Therefore, ESAs should be initiated ONLY when Hb is < 9.0-10.0 g/dL AFTER IRON STORES ARE REPLETE, with a strict maintenance target Hb of 10.0 to 11.5 g/dL (never targeting Hb > 11.5-12 g/dL)."
      ],
      [
        "Initiate high-dose subcutaneous darbepoetin alfa immediately, withholding all iron supplementation to avoid bacterial proliferation",
        "Initiating ESAs in the presence of iron deficiency (TSAT 14%, ferritin 78) causes absolute functional iron exhaustion and ESA resistance; iron stores must be repleted before or concurrently with ESAs."
      ],
      [
        "Initiate epoetin alfa with a targeted hemoglobin goal of 13.5 to 14.5 g/dL to eliminate fatigue completely",
        "Targeting normal hemoglobin (> 13.0 g/dL) with ESAs was proven in the CHOIR and TREAT trials to significantly increase stroke, myocardial infarction, and death; target Hb is strictly 10.0 to 11.5 g/dL."
      ],
      [
        "Perform an emergent blood transfusion of 3 units of packed red blood cells",
        "Blood transfusion is reserved strictly for acute hemorrhage or severe symptomatic instability; in chronic stable anemia, routine transfusions sensitize patients to HLA antigens, severely compromising future kidney transplant eligibility."
      ],
      [
        "Discontinue lisinopril permanently because ACE inhibitors are the primary cause of renal anemia",
        "While ACE inhibitors cause modest declines in hemoglobin, permanently discontinuing them deprives the patient of proven renal and cardiovascular mortality benefits; anemia is managed by treating iron deficiency and CKD anemia directly."
      ]
    ],
    "shortestValidSolution": "CKD stage 4 + Hb 8.4 + low TSAT 14% (< 20%) + ferritin 78 ng/mL (< 100) = CKD Anemia with Iron Deficiency -> Replete Iron (IV/oral) targeting TSAT > 20% before initiating ESAs (KDIGO).",
    "necessaryInference": "Apply KDIGO guidelines for chronic kidney disease anemia: optimize iron stores (target TSAT > 20% and ferritin > 100-200 ng/mL) before initiating erythropoiesis-stimulating agents, and avoid targeting Hb > 11.5 g/dL.",
    "strongestDistractor": "Initiate epoetin alfa with a targeted hemoglobin goal of 13.5 to 14.5 g/dL to eliminate fatigue completely",
    "distractorExclusion": "Randomized trials (CHOIR and TREAT) proved that targeting Hb > 13 g/dL with ESAs increases fatal stroke and cardiovascular mortality; conservative targets of 10-11.5 g/dL are mandatory.",
    "citation": "Kidney Disease: Improving Global Outcomes (KDIGO) Anemia Work Group. KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease. Kidney Int Suppl. 2012;2(4):279-335. https://kdigo.org/guidelines/anemia-in-ckd/",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating CKD Anemia Iron Optimization Before Erythropoietin-Stimulating Agents.",
      "distractorExclusionNotes": "Competitor Initiate epoetin alfa with a targeted hemoglobin g excluded by Randomized trials (CHOIR and TREAT) proved that targeting Hb.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0767",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Alcohol Withdrawal Delirium Tremens Symptom-Triggered Benzodiazepines",
    "provisionalDifficulty": 4,
    "stem": "A 46-year-old man with a 15-year history of heavy alcohol consumption (consuming 15 to 20 beers daily) is admitted to the medical intensive care unit 72 hours after his last alcoholic drink. He was brought to the hospital by paramedics after his family found him shouting incoherently in his basement. On arrival, he is severely agitated, drenched in diaphoresis, and screaming that giant stinging wasps are swarming across his bed. He is completely disoriented to time, date, and hospital location. Vital signs: blood pressure 184/108 mm Hg, heart rate 136/min, respirations 24/min, and core temperature 38.6 C (101.5 F). Physical examination reveals coarse, gross bilateral hand and facial tremors, dilated reactive pupils, flushed skin, and marked psychomotor agitation. His Clinical Institute Withdrawal Assessment for Alcohol, revised (CIWA-Ar) score is 28 (severe alcohol withdrawal threshold >= 19-20). Baseline serum electrolytes, CBC, and head CT without contrast are normal; blood alcohol concentration is zero. A diagnosis of DELIRIUM TREMENS is established. Which of the following represents the most appropriate initial pharmacological strategy to control agitation, prevent generalized seizures, and reduce mortality according to American Society of Addiction Medicine (ASAM) guidelines?",
    "choices": [
      [
        "Intravenous administration of symptom-triggered escalating doses of a rapidly acting benzodiazepine (such as diazepam or lorazepam) titrated to achieve calm, light somnolence, combined with aggressive intravenous fluids and high-dose intravenous thiamine (prior to dextrose)",
        "DELIRIUM TREMENS (DTs) AND SEVERE ALCOHOL WITHDRAWAL MANAGEMENT: (1) PATHOPHYSIOLOGY: Chronic heavy alcohol consumption causes neuroadaptation: (a) Chronic down-regulation and internalization of inhibitory GABA-A receptors; (b) Chronic upregulation of excitatory NMDA glutamate receptors. Abrupt alcohol cessation removes the chronic inhibitory brake, unleashing profound, unchecked central nervous system HYPEREXCITABILITY, autonomic hyperactivity, and neurotoxicity; (2) TIMELINE OF WITHDRAWAL PHENOMENA: (a) Minor withdrawal (6-12 hr): Tremor, insomnia, anxiety, diaphoresis; (b) Withdrawal seizures (12-48 hr): Generalized tonic-clonic convulsions; (c) Alcoholic hallucinosis (12-48 hr): Visual/auditory hallucinations with clear, preserved sensorium; (d) DELIRIUM TREMENS (48-96 HOURS POST-DRINK): Characterized by CLOUDING OF CONSCIOUSNESS / DELIRIUM (disorientation, fluctuating attention), severe autonomic instability (hyperthermia, severe hypertension, tachycardia), and perceptual disturbances. Untreated DTs carried a historical mortality of 20% to 35% from hyperthermia, arrhythmias, and circulatory collapse; (3) EVIDENCE-BASED MEDICAL PHARMACOTHERAPY: (a) BENZODIAZEPINES (THE GOLD-STANDARD FIRST-LINE THERAPY): Benzodiazepines directly bind GABA-A receptors, increasing chloride channel opening frequency and restoring inhibitory GABAergic tone. Multiple randomized controlled trials and Cochrane reviews prove that benzodiazepines significantly reduce withdrawal seizures, delirium duration, and mortality; (b) DOSING STRATEGY (SYMPTOM-TRIGGERED ESCALATING REGIMENS): Rapid IV titration using either DIAZEPAM (rapid onset, long-acting active desmethyldiazepam metabolites providing smooth auto-taper) or LORAZEPAM (intermediate acting, no active hepatic metabolites, preferred in severe cirrhosis or acute hepatitis); (c) SEVERE REFRACTORY WITHDRAWAL: If massive benzodiazepines (e.g., > 100-200 mg diazepam) fail to achieve calm, adjunctive PHENOBARBITAL (barbiturate, prolongs GABA-A channel open duration and directly blocks AMPA/kainate receptors) or dexmedetomidine is indicated; (d) NUTRITIONAL RESUSCITATION: INTRAVENOUS THAMINE (200-500 mg IV) MUST BE ADMINISTERED PRIOR TO INTRAVENOUS DEXTROSE to prevent precipitating acute Wernicke encephalopathy."
      ],
      [
        "Intravenous haloperidol 5 mg bolus every 30 minutes as primary monotherapy to treat delirium and visual hallucinations",
        "Antipsychotics (haloperidol) lower the seizure threshold, causing status epilepticus, worsen hyperthermia, cause fatal QTc prolongation/torsades, and do NOT treat underlying GABA depletion; they are contraindicated as monotherapy."
      ],
      [
        "Administration of oral chlordiazepoxide 25 mg every 6 hours on a fixed-dose schedule",
        "Oral fixed-dose regimens have slow erratic absorption, cannot keep pace with rapidly escalating severe autonomic storm in DTs, and cause underdosing early and cumulative toxicity late; rapid IV titration is required."
      ],
      [
        "Initiation of continuous intravenous propofol infusion without any preceding benzodiazepine or barbiturate trials",
        "Propofol requires endotracheal intubation and intensive care; while useful for severe refractory DTs, intravenous benzodiazepines remain the mandatory first-line therapy."
      ],
      [
        "Administration of 2 ounces of oral ethanol every 4 hours to gradually taper the patient off alcohol",
        "Administering medicinal alcohol is obsolete, dangerous, unstandardized, worsens metabolic and hepatic toxicity, and is strictly prohibited in contemporary medical practice."
      ]
    ],
    "shortestValidSolution": "Heavy alcohol + 72 hr post-drink + fever/tachycardia + delirium/tremor + hallucinations (CIWA-Ar 28) = Delirium Tremens -> Symptom-triggered IV Benzodiazepines (Diazepam/Lorazepam) + IV Thiamine before dextrose.",
    "necessaryInference": "Apply ASAM guidelines for severe alcohol withdrawal and delirium tremens: administer rapidly escalating, symptom-triggered intravenous benzodiazepines to restore GABAergic tone, accompanied by intravenous thiamine.",
    "strongestDistractor": "Intravenous haloperidol 5 mg bolus every 30 minutes as primary monotherapy to treat delirium and visual hallucinations",
    "distractorExclusion": "Antipsychotics lower the seizure threshold, precipitate convulsions, and worsen cardiac arrhythmias; benzodiazepines are the only proven life-saving class for delirium tremens.",
    "citation": "The ASAM Clinical Practice Guideline on Alcohol-Withdrawal Management. J Addict Med. 2020;14(3S Suppl 1):1-72. PMID: 32579124.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Alcohol Withdrawal Delirium Tremens Symptom-Triggered Benzodiazepines.",
      "distractorExclusionNotes": "Competitor Intravenous haloperidol 5 mg bolus every 30 minute excluded by Antipsychotics lower the seizure threshold, precipitate conv.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0768",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Unprovoked Venous Thromboembolism Extended-Phase Anticoagulation Duration",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old man presents to the outpatient hematology clinic for a 3-month follow-up visit after experiencing an acute, unprovoked proximal deep vein thrombosis (DVT) in his left femoral and popliteal veins, accompanied by segmental pulmonary embolism (PE). He has completed 3 months of therapeutic oral apixaban (initial 10 mg twice daily for 7 days, followed by 5 mg twice daily). He has tolerated anticoagulation well with no episodes of bleeding, hematuria, melena, or easy bruising. He is fully active, asymptomatic, and has returned to work as an architect. He has no history of active cancer, recent surgery, hospitalization, trauma, or prolonged immobilization. His past medical history includes well-controlled hypertension. Vital signs and physical examination are completely normal. Complete blood count, serum creatinine, and liver enzymes are normal. The patient asks whether he can safely stop taking blood thinners today now that his 3 months of treatment are finished. Which of the following represents the most appropriate management plan regarding the duration of anticoagulation according to American College of Chest Physicians (CHEST) and American Society of Hematology (ASH) guidelines?",
    "choices": [
      [
        "Continuation of indefinite (extended-phase) oral anticoagulation with a direct oral anticoagulant (such as apixaban or rivaroxaban), with periodic annual reassessment of bleeding risk and patient preference",
        "UNPROVOKED VENOUS THROMBOEMBOLISM (VTE) DURATION OF ANTICOAGULATION: (1) DEFINITION AND NATURAL HISTORY: An unprovoked (idiopathic) VTE occurs in the absence of a major transient provoking factor (e.g., major surgery, trauma, prolonged immobilization > 3 days, or active estrogen therapy). NATURAL HISTORY UPON ANTICOAGULATION CESSATION: When anticoagulation is stopped after completing a standard 3- to 6-month initial course for an UNPROVOKED proximal DVT or PE: (a) The risk of recurrent VTE is approximately 10% in the FIRST YEAR; (b) The cumulative recurrence risk reaches approximately 30% AT 5 YEARS; (c) Recurrent VTE events carry a case-fatality rate of 4% to 9%; (2) CHEST 2021 AND ASH GUIDELINES: (a) In patients with a PROVOKED VTE by a major transient risk factor: Stop anticoagulation after 3 months; (b) IN PATIENTS WITH A FIRST UNPROVOKED PROXIMAL DVT OR PE WHO HAVE A LOW OR MODERATE RISK OF BLEEDING: GUIDELINES STRONGLY RECOMMEND EXTENDED-PHASE (INDEFINITE) ANTICOAGULATION OVER STOPPING AT 3 MONTHS; (3) REDUCED-DOSE EXTENDED ANTICOAGULATION (AMPLIFY-EXT AND EINSTEIN-CHOICE TRIALS): Landmark randomized trials demonstrated that after completing the initial 6 months of full-dose therapy, direct oral anticoagulants can be safely transitioned to REDUCED PROPHYLACTIC DOSES (APIXABAN 2.5 MG TWICE DAILY OR RIVAROXABAN 10 MG ONCE DAILY). Reduced-dose DOACs provide > 80% relative risk reduction in recurrent VTE while maintaining major bleeding rates comparable to placebo; (4) MONITORING: Extended anticoagulation requires regular annual re-evaluation of bleeding risk, renal and liver function, and patient values."
      ],
      [
        "Discontinue apixaban today permanently, as 3 months of anticoagulation provides permanent cure for all initial venous thromboembolic events",
        "Stopping anticoagulation at 3 months after an unprovoked proximal DVT/PE results in a 30% cumulative recurrence rate at 5 years; indefinite extended-phase therapy is guideline-recommended."
      ],
      [
        "Discontinue apixaban and transition to daily low-dose aspirin 81 mg as preferred monotherapy to prevent recurrent venous thromboembolism",
        "Aspirin is significantly inferior to direct oral anticoagulants for preventing recurrent VTE (reducing recurrence by only ~30% compared to > 80% with DOACs) and is not recommended as primary replacement when DOACs are tolerated."
      ],
      [
        "Perform an emergent thrombophilia evaluation panel today (protein C, protein S, antithrombin III) while on apixaban to decide on duration",
        "Inherited thrombophilia testing rarely changes clinical management because unprovoked status already dictates indefinite anticoagulation; furthermore, DOACs cause false laboratory artifacts in thrombophilia assays."
      ],
      [
        "Discontinue apixaban and place an inferior vena cava (IVC) filter to provide lifelong non-pharmacological pulmonary embolism protection",
        "IVC filters do not treat venous thrombosis, increase the long-term risk of recurrent deep vein thrombosis by two-fold, and are indicated only when therapeutic anticoagulation is strictly contraindicated by active major bleeding."
      ]
    ],
    "shortestValidSolution": "Unprovoked proximal DVT/PE + completed 3 mo DOAC + low bleeding risk = Unprovoked VTE -> Indefinite (extended-phase) DOAC therapy (CHEST guidelines; 30% 5-yr recurrence if stopped).",
    "necessaryInference": "Apply CHEST and ASH guidelines for venous thromboembolism: recommend indefinite extended-phase anticoagulation with a DOAC for patients with a first unprovoked proximal DVT or PE who have low-to-moderate bleeding risk.",
    "strongestDistractor": "Discontinue apixaban today permanently, as 3 months of anticoagulation provides permanent cure for all initial venous thromboembolic events",
    "distractorExclusion": "Unprovoked VTE has an intrinsically high long-term recurrence rate (~30% at 5 years); stopping at 3 months exposes patients to fatal recurrent pulmonary embolism.",
    "citation": "Stevens SM, Woller SC, Baumann Kreuziger L, et al. Executive Summary: Antithrombotic Therapy for VTE Disease: Second Update of the CHEST Guideline and Expert Panel Report. Chest. 2021;160(6):2247-2259. PMID: 34352279.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Unprovoked Venous Thromboembolism Extended-Phase Anticoagulation Duration.",
      "distractorExclusionNotes": "Competitor Discontinue apixaban today permanently, as 3 month excluded by Unprovoked VTE has an intrinsically high long-term recurrenc.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0769",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Severe Hypercalcemia of Malignancy Calcitonin and Zoledronic Acid Sequencing",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old woman with metastatic squamous cell carcinoma of the lung presents to the emergency department with a 4-day history of progressive lethargy, confusion, severe constipation, and generalized abdominal pain. Her family reports that she has become increasingly dehydrated and unsteady on her feet. On physical examination, she is stuporous, oriented only to her name, with parched mucous membranes and poor skin turgor. Vital signs: blood pressure 102/62 mm Hg, heart rate 108/min, respirations 16/min, and oxygen saturation 98% on room air. Laboratory evaluation reveals: serum calcium markedly elevated at 15.4 mg/dL (reference range 8.5-10.2 mg/dL), serum albumin 3.0 g/dL (corrected calcium = 15.4 + 0.8 x [4.0 - 3.0] = 16.2 mg/dL, indicating severe hypercalcemic crisis), serum phosphate 1.8 mg/dL (normal 2.5-4.5 mg/dL), BUN 48 mg/dL, and serum creatinine 2.2 mg/dL (baseline 0.8 mg/dL). A 12-lead ECG demonstrates sinus tachycardia with a markedly shortened QTc interval (320 ms) and Osborn (J) waves. Serum intact PTH is suppressed at < 4 pg/mL, and parathyroid hormone-related protein (PTHrP) is markedly elevated at 14.8 pmol/L (normal < 2.0 pmol/L), confirming humoral hypercalcemia of malignancy. Which of the following represents the most appropriate, evidence-based pharmacological strategy for rapid and sustained calcium reduction according to Endocrine Society guidelines?",
    "choices": [
      [
        "Aggressive intravenous volume resuscitation with isotonic 0.9% normal saline (200 to 300 mL/hr) combined with subcutaneous salmon calcitonin (4 to 8 IU/kg every 12 hours for 48 hours) for rapid immediate reduction, and simultaneous intravenous zoledronic acid (or denosumab) for sustained long-term control",
        "SEVERE HYPERCALCEMIA OF MALIGNANCY (HCM) EMERGENCY MANAGEMENT: (1) PATHOPHYSIOLOGY: HCM occurs in up to 30% of cancer patients, carrying a very poor prognosis (median survival < 2-3 months). Major mechanisms: (a) HUMORAL HYPERCALCEMIA OF MALIGNANCY (80%): Tumor secretion of PARATHYROID HORMONE-RELATED PROTEIN (PTHrP, classically squamous cell lung, head/neck, renal, or bladder cancers). PTHrP binds PTH-1 receptors on osteoblasts, upregulating RANKL and driving massive OSTEOCLASTIC BONE RESORPTION. In the kidney, PTHrP promotes distal tubular calcium reabsorption and inhibits phosphate reabsorption; (b) Local osteolytic metastases (20%: breast, multiple myeloma); (c) Excess 1,25-(OH)2D synthesis (lymphoma); (2) MULTI-TIERED TREATMENT PHARMACOKINETICS (BRIDGING STRATEGY): (a) STEP 1: AGGRESSIVE INTRAVENOUS ISOTONIC SALINE (2-3 L in 24 hours): Corrects severe prerenal hypovolemia, restores GFR, and promotes calciuresis (drops calcium by 1.5-2.0 mg/dL over 24-48 hours); (b) STEP 2: SALMON CALCITONIN (4-8 IU/KG SUBCUTANEOUS OR IM EVERY 12 HOURS): FASTEST ONSET OF ACTION (starts working in 2 TO 4 HOURS, peak effect at 12-24 hours). Calcitonin directly binds osteoclast calcitonin receptors, halting bone resorption and increasing renal calcium clearance. CRITICAL LIMITATION: TACHYPHYLAXIS (RECEPTOR DOWNREGULATION) OCCURS AFTER 48 HOURS, rendering calcitonin ineffective beyond 2 days. Therefore, CALCITONIN FUNCTIONS EXCLUSIVELY AS A RAPID TEMPORIZING BRIDGE while awaiting bisphosphonates; (c) STEP 3: INTRAVENOUS BISPHOSPHONATES (ZOLEDRONIC ACID 4 MG IV OVER 15 MIN, OR PAMIDRONATE): High-affinity pyrophosphate analogs that bind hydroxyapatite crystals and inhibit osteoclastic farnesyl pyrophosphate synthase, inducing osteoclast apoptosis. SLOW ONSET (takes 2 TO 4 DAYS to lower calcium), but PROVIDES SUSTAINED NORMALIZATION FOR 2 TO 4 WEEKS. (Denosumab, a monoclonal RANKL inhibitor, is preferred in severe renal failure where bisphosphonates are contraindicated); (3) STRICT CONTRAINDICATION TO FUROSEMIDE: Loop diuretics were historically given with fluids, but guidelines now advise AGAINST loop diuretics unless clinical heart failure or fluid overload develops; furosemide causes profound volume depletion, worsening hypercalcemia."
      ],
      [
        "Administration of intravenous furosemide 80 mg bolus every 4 hours combined with fluid restriction to 1 liter daily",
        "Loop diuretics without volume expansion worsen intravascular dehydration, impair renal calcium excretion, and precipitate catastrophic cardiovascular collapse; aggressive isotonic saline is first-line."
      ],
      [
        "Initiation of high-dose oral calcitriol (1,25-dihydroxyvitamin D) 0.5 mcg twice daily to promote bone remineralization",
        "Calcitriol dramatically increases intestinal calcium absorption and accelerates bone resorption; administering vitamin D in severe hypercalcemia precipitates fatal hypercalcemic encephalopathy and cardiac arrest."
      ],
      [
        "Perform an emergent bilateral parathyroidectomy in the operating room",
        "The patient has humoral hypercalcemia of malignancy with suppressed intact PTH (< 4 pg/mL); the parathyroid glands are physiologically dormant; neck surgery is completely useless and contraindicated."
      ],
      [
        "Monotherapy with subcutaneous calcitonin for 14 consecutive days without bisphosphonates",
        "Calcitonin induces rapid receptor downregulation and tachyphylaxis within 48 hours; using calcitonin alone results in rebound severe hypercalcemia within days; bisphosphonates or denosumab are required for sustained control."
      ]
    ],
    "shortestValidSolution": "Squamous cell lung cancer + Ca 16.2 mg/dL + PTHrP high + stupor = Severe Hypercalcemia of Malignancy -> Aggressive IV 0.9% Saline + Calcitonin (rapid 2-4 hr bridge) + IV Zoledronic acid (sustained).",
    "necessaryInference": "Select the multi-tiered management strategy for severe hypercalcemia of malignancy: prioritize aggressive isotonic saline resuscitation, rapid temporary bridging with calcitonin, and sustained osteoclast inhibition with intravenous zoledronic acid or denosumab.",
    "strongestDistractor": "Monotherapy with subcutaneous calcitonin for 14 consecutive days without bisphosphonates",
    "distractorExclusion": "Calcitonin undergoes tachyphylaxis and loses efficacy after 48 hours; intravenous bisphosphonates are required to maintain long-term calcium suppression.",
    "citation": "Bilezikian JP. Management of Hypercalcemia of Malignancy. N Engl J Med. 2021;384(21):2044-2051. PMID: 34043916.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Severe Hypercalcemia of Malignancy Calcitonin and Zoledronic Acid Sequencing.",
      "distractorExclusionNotes": "Competitor Monotherapy with subcutaneous calcitonin for 14 co excluded by Calcitonin undergoes tachyphylaxis and loses efficacy after .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0770",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Acute Limb Ischemia Rutherford Category IIb Emergent Revascularization",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man with a history of long-standing peripheral artery disease and tobacco use presents to the emergency department with sudden-onset, agonizing pain, numbness, and coldness in his right lower leg that began 3 hours ago. On physical examination, the right leg is pale and cold to touch from the mid-calf down to the toes (poikilothermia). Neurological examination reveals marked sensory loss to light touch and pinprick over the dorsum and sole of the foot, extending up to the distal third of the lower leg. Motor examination demonstrates severe weakness of right ankle dorsiflexion and toe extension (strength 1/5, profound motor deficit). Distal right femoral pulse is palpable (2+), but right popliteal, dorsalis pedis, and posterior tibial pulses are completely absent. Handheld continuous-wave Doppler ultrasound detects inaudible arterial Doppler signals (both dorsalis pedis and posterior tibial arterial signals are absent), while a sluggish venous Doppler signal is audible. The contralateral left lower extremity is warm with palpable pulses. The patient fulfills criteria for Rutherford Classification Category IIb: IMMEDIATELY THREATENED ACUTE LIMB ISCHEMIA (motor weakness present, sensory loss extending beyond toes, inaudible arterial Doppler, audible venous Doppler). Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate systemic anticoagulation with intravenous unfractionated heparin bolus, and emergent transfer to the operating room for surgical revascularization (open surgical thromboembolectomy or bypass) without delaying for formal angiography",
        "ACUTE LIMB ISCHEMIA (ALI) RUTHERFORD RISK STRATIFICATION AND EMERGENCY INTERVENTION: (1) DEFINITION: Sudden decrease in limb perfusion (duration < 14 days) threatening tissue viability, caused by arterial embolism (cardiac origin) or in situ thrombosis of an atherosclerotic artery or bypass graft; (2) RUTHERFORD CLINICAL CLASSIFICATION OF ALI: (a) CATEGORY I (VIABLE): No sensory loss, no muscle weakness, audible arterial and venous Doppler signals. Managed with emergent heparin and urgent imaging/revascularization; (b) CATEGORY IIa (MARGINALLY THREATENED): Minimal sensory loss limited to toes, NO muscle weakness, inaudible arterial Doppler, audible venous Doppler. Can undergo catheter-directed thrombolysis (CDT) or angiography; (c) CATEGORY IIb (IMMEDIATELY THREATENED): SENSORY LOSS EXTENDING BEYOND THE TOES, MOTOR WEAKNESS (paresis/paralysis), inaudible arterial Doppler, audible venous Doppler. SKELETAL MUSCLE BECOMES IRREVERSIBLY NECROTIC AFTER 6 TO 8 HOURS OF COMPLETE ISCHEMIA; (d) Category III (Irreversible): Profound paralysis (rigor), extensive anesthesia, inaudible arterial AND venous Doppler signals. Requires primary amputation; (3) TIME-CRITICAL MANAGEMENT OF CATEGORY IIb (IMMEDIATELY THREATENED): (a) IMMEDIATE SYSTEMIC ANTICOAGULATION: High-dose intravenous unfractionated heparin bolus (80 units/kg) followed by continuous infusion. Heparin prevents propagation of the thrombus and protects the distal microvascular runoff bed; (b) EMERGENT SURGICAL REVASCULARIZATION: In Category IIb where motor deficits indicate advanced muscle ischemia, DELAYING SURGERY FOR CATHETER-DIRECTED THROMBOLYSIS (WHICH TAKES 12 TO 24 HOURS TO LYSE CLOT) OR FORMAL DUCTAL IMAGING RESULTS IN COMPLETE ISCHEMIC GANGRENE AND AMPUTATION. THE PATIENT MUST BE TRANSFERRED IMMEDIATELY TO THE OPERATING ROOM FOR SURGICAL REVASCULARIZATION (FOGARTY BALLOON EMBOLECTOMY OR EMERGENCY BYPASS) AND PROPHYLACTIC FASCIOTOMY."
      ],
      [
        "Transfer to the interventional radiology suite for initiation of slow catheter-directed intra-arterial thrombolysis with alteplase over the next 24 to 48 hours",
        "Catheter-directed thrombolysis takes 12 to 24 hours to achieve recanalization and is indicated only for Category I or IIa (marginally threatened); in Category IIb with severe motor weakness, awaiting thrombolysis causes irreversible muscle necrosis and amputation."
      ],
      [
        "Perform an elective outpatient CT angiogram of the lower extremities in 48 hours to plan definitive endovascular stenting",
        "Delaying intervention for 48 hours in an immediately threatened limb guarantees complete transmural muscle gangrene, myoglobinuric acute renal failure, and above-knee amputation."
      ],
      [
        "Administer high-dose oral pentoxifylline 400 mg three times daily and place the leg in an electric heating pad",
        "Heating an ischemic limb increases cellular metabolic demand and accelerates necrosis; pentoxifylline is ineffective for acute mechanical arterial occlusion."
      ],
      [
        "Perform an emergent primary above-knee guillotine amputation of the right lower extremity",
        "Primary amputation is reserved strictly for Category III irreversible non-viable limbs (rigor, absent venous Doppler); Category IIb limbs have salvageable muscle if revascularized emergently within 6 hours."
      ]
    ],
    "shortestValidSolution": "Cold, pale right leg + motor weakness (strength 1/5) + sensory loss + absent arterial Doppler = Rutherford Category IIb (Immediately Threatened ALI) -> IV Heparin + Emergent surgical revascularization (Fogarty embolectomy).",
    "necessaryInference": "Classify acute limb ischemia using the Rutherford criteria and recognize that Category IIb (immediately threatened with motor deficits) requires immediate IV heparin and emergent surgical revascularization, avoiding delays for catheter-directed thrombolysis.",
    "strongestDistractor": "Transfer to the interventional radiology suite for initiation of slow catheter-directed intra-arterial thrombolysis with alteplase over the next 24 to 48 hours",
    "distractorExclusion": "Catheter-directed thrombolysis requires 12 to 24 hours to restore flow; in Category IIb with active motor paralysis, waiting for thrombolysis results in permanent muscle necrosis and limb loss.",
    "citation": "Gerhard-Herman MD, Gornik HL, Barrett C, et al. 2016 AHA/ACC Guideline on the Management of Patients With Lower Extremity Peripheral Artery Disease. Circulation. 2017;135(12):e726-e779. PMID: 27840333.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Acute Limb Ischemia Rutherford Category IIb Emergent Revascularization.",
      "distractorExclusionNotes": "Competitor Transfer to the interventional radiology suite for excluded by Catheter-directed thrombolysis requires 12 to 24 hours to re.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0771",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Systemic Lupus Erythematosus Proliferative Lupus Nephritis Induction Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 27-year-old woman with a 3-year history of systemic lupus erythematosus (SLE) well controlled on oral hydroxychloroquine 200 mg daily presents to the outpatient rheumatology clinic for routine evaluation. Over the past month, she has developed worsening bilateral lower extremity swelling, facial puffiness, and foamy urine. She denies fevers, joint pain, chest pain, or dyspnea. Vital signs: blood pressure 152/94 mm Hg (elevated above her baseline of 118/74 mm Hg), heart rate 78/min, and BMI 22.8 kg/m2. Physical examination reveals 2+ pitting pretibial and ankle edema bilaterally; joint and skin examinations show no active rashes or synovitis. Laboratory evaluation demonstrates: serum albumin 2.8 g/dL (normal 3.5-5.0 g/dL), serum creatinine 1.4 mg/dL (baseline 0.7 mg/dL 6 months ago, indicating acute decline in eGFR), serum complement C3 markedly reduced at 42 mg/dL (normal 90-180 mg/dL), C4 reduced at 6 mg/dL (normal 15-45 mg/dL), and anti-double-stranded DNA (anti-dsDNA) titer markedly elevated at 1:320. Urinalysis reveals 3+ protein, 20-30 dysmorphic red blood cells per high-power field, and several red blood cell casts. Spot urine protein-to-creatinine ratio is 3.4 mg/mg. An ultrasound-guided percutaneous renal core biopsy demonstrates International Society of Nephrology / Renal Pathology Society (ISN/RPS) CLASS IV DIFFUSE PROLIFERATIVE LUPUS NEPHRITIS with cellular crescents, 'wire-loop' subendothelial immune complex deposits, and an active histological index of 10/24. Which of the following represents the most appropriate initial induction immunosuppressive regimen according to American College of Rheumatology (ACR) and KDIGO guidelines?",
    "choices": [
      [
        "Initiation of high-dose intravenous pulse methylprednisolone followed by oral prednisone taper, combined with either oral mycophenolate mofetil (MMF) or intravenous cyclophosphamide, continuing baseline hydroxychloroquine",
        "PROLIFERATIVE LUPUS NEPHRITIS (ISN/RPS CLASS III AND IV) INDUCTION MANAGEMENT: (1) PATHOPHYSIOLOGY AND SEVERITY: Proliferative lupus nephritis (Class III [focal] and Class IV [diffuse]) is the most severe and aggressive form of renal involvement in SLE, driven by circulating and in situ anti-dsDNA immune complexes depositing in the SUBENDOTHELIAL glomerular space. Subendothelial deposits trigger classical complement activation (profound hypocomplementemia with low C3/C4), neutrophil chemotaxis, and cellular proliferation, producing endocapillary proliferation, 'wire-loop' lesions, crescents, and necrotizing glomerulonephritis. Untreated Class IV lupus nephritis carries a > 50% risk of progression to end-stage kidney disease within 5 years; (2) KDIGO / ACR GUIDELINE-RECOMMENDED INDUCTION IMMUNOSUPPRESSION: Treatment is divided into INDUCTION (rapid suppression of inflammation to achieve renal remission) and MAINTENANCE (preventing relapses): (a) FIRST-LINE INDUCTION PHARMACOTHERAPY: COMBINATION OF HIGH-DOSE CORTICOSTEROIDS (intravenous pulse methylprednisolone 500-1,000 mg daily for 3 days, followed by oral prednisone 0.5-1.0 mg/kg/day with systematic taper) PLUS EITHER: (1) ORAL MYCOPHENOLATE MOFETIL (MMF, 2 to 3 g daily); OR (2) LOW-DOSE INTRAVENOUS CYCLOPHOSPHAMIDE (Euro-Lupus regimen: 500 mg IV every 2 weeks for 6 doses; or high-dose NIH regimen). Landmark clinical trials (ALMS trial, Appel et al., JASN 2009) demonstrated that MMF is EQUALLY EFFECTIVE TO CYCLOPHOSPHAMIDE for induction, with superior efficacy in African American and Hispanic patients and significantly lower rates of ovarian failure, alopecia, and severe infections; (b) RECENT TARGETED ADD-ONS: Updated guidelines now support TRIPLE INDUCTION by adding BELIMUMAB (anti-BAFF monoclonal antibody) or VOCLOSPORIN (novel calcineurin inhibitor) to MMF and steroids; (c) HYDROXYCHLOROQUINE MUST BE CONTINUED INDEFINITELY in all SLE patients (reduces renal flares, prevents thrombosis, and improves long-term survival)."
      ],
      [
        "Monotherapy with oral prednisone 10 mg daily and double the dose of hydroxychloroquine to 400 mg daily",
        "Low-dose corticosteroids and hydroxychloroquine are completely inadequate for severe proliferative Class IV nephritis; failing to initiate potent cytotoxic induction (MMF or cyclophosphamide) leads to irreversible glomerular scarring and end-stage renal failure."
      ],
      [
        "Perform emergent bilateral nephrectomy and place the patient on permanent maintenance hemodialysis",
        "Proliferative lupus nephritis is highly reversible with immunosuppressive induction; bilateral nephrectomy is destructive and obsolete."
      ],
      [
        "Administration of broad-spectrum intravenous piperacillin-tazobactam and vancomycin for presumed post-infectious glomerulonephritis",
        "The biopsy confirmed Class IV diffuse proliferative lupus nephritis with active crescents and subendothelial deposits; antibiotics have zero efficacy for autoimmune lupus nephritis."
      ],
      [
        "Initiation of daily oral methotrexate 25 mg weekly and naproxen 500 mg twice daily",
        "Methotrexate is ineffective for proliferative lupus nephritis and is renally eliminated (causing severe toxicity in renal failure); NSAIDs cause acute hemodynamic nephrotoxicity and worsen renal function."
      ]
    ],
    "shortestValidSolution": "SLE + HTN + RBC casts + low C3/C4 + high anti-dsDNA + Biopsy showing Class IV Lupus Nephritis = Severe Proliferative Lupus Nephritis -> High-dose Steroids + Mycophenolate Mofetil (or Cyclophosphamide) + Hydroxychloroquine (ACR/KDIGO).",
    "necessaryInference": "Apply ACR and KDIGO guidelines for proliferative lupus nephritis (Class III/IV): select high-dose corticosteroids combined with mycophenolate mofetil or cyclophosphamide for induction immunosuppression.",
    "strongestDistractor": "Monotherapy with oral prednisone 10 mg daily and double the dose of hydroxychloroquine to 400 mg daily",
    "distractorExclusion": "Mild immunosuppression is ineffective against aggressive Class IV nephritis; potent cytotoxic induction with MMF or cyclophosphamide is mandatory to prevent end-stage renal disease.",
    "citation": "Fanouriakis A, Kostopoulou M, Cheema K, et al. 2019 Update of the Joint European League Against Rheumatism and European Renal Association-European Dialysis and Transplant Association (EULAR/ERA-EDTA) recommendations for the management of lupus nephritis. Ann Rheum Dis. 2020;79(6):713-723. PMID: 32220834.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Systemic Lupus Erythematosus Proliferative Lupus Nephritis Induction Therapy.",
      "distractorExclusionNotes": "Competitor Monotherapy with oral prednisone 10 mg daily and d excluded by Mild immunosuppression is ineffective against aggressive Cla.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0772",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Asymptomatic Carotid Stenosis Medical Therapy vs Revascularization",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man presents to his primary care physician for an annual physical examination. He has no personal history of transient ischemic attack, stroke, amaurosis fugax, or motor weakness. He feels energetic and exercises by walking 3 miles daily. His past medical history is notable for essential hypertension and hyperlipidemia. His current medications include lisinopril 10 mg daily and simvastatin 20 mg daily. On physical examination, blood pressure is 132/80 mm Hg, heart rate is 68/min, and a harsh, focal high-pitched systolic bruit is audible over the right mid-cervical region. Neurological examination is completely normal. Dedicated duplex ultrasonography of the neck and confirmatory CT angiography (CTA) demonstrate an 80% atherosclerotic stenosis of the right internal carotid artery (measured by NASCET criteria), with a smooth, calcified fibrous cap and no ulceration or intraluminal thrombus. The left internal carotid artery has 30% stenosis. Brain MRI demonstrates no acute or chronic cerebral infarctions. The patient is anxious and asks whether he should undergo urgent prophylactic carotid endarterectomy (CEA) or carotid artery stenting (CAS) to prevent a future stroke. Which of the following is the most appropriate management plan according to contemporary guidelines and modern clinical trial evidence?",
    "choices": [
      [
        "Initiation of intensive modern medical therapy (escalating to high-intensity statin therapy with atorvastatin 80 mg daily, dual antiplatelet or single antiplatelet therapy, and strict blood pressure optimization), engaging in shared decision-making regarding revascularization",
        "ASYMPTOMATIC CAROTID ARTERY STENOSIS AND INTENSIVE MODERN MEDICAL THERAPY: (1) THE PARADIGM SHIFT FROM HISTORICAL TRIALS TO CONTEMPORARY PRACTICE: Historical randomized trials conducted in the 1990s (ACAS [1995] and ACST [2004]) demonstrated that in ASYMPTOMATIC patients with 60% to 99% carotid stenosis, surgical carotid endarterectomy (CEA) reduced 5-year stroke risk from approximately 11% with medical therapy to 5.1% with surgery (an absolute annual risk reduction of only ~1% per year). HOWEVER, IN THOSE HISTORICAL TRIALS, 'MEDICAL THERAPY' WAS OBSOLETE: STATINS WERE RARELY PRESCRIBED (< 10-15%), blood pressure targets were lax, and smoking cessation was suboptimal; (2) CONTEMPORARY INTENSIVE MEDICAL THERAPY (IMT): In the modern era of aggressive HIGH-INTENSITY STATIN THERAPY (atorvastatin 80 mg or rosuvastatin 40 mg), optimal blood pressure control (SBP < 130 mm Hg), and antiplatelet therapy, THE ANNUAL RISK OF IPSILATERAL STROKE IN ASYMPTOMATIC SEVERE CAROTID STENOSIS ON MEDICAL THERAPY ALONE HAS PLUMMETED TO < 0.5% TO 1.0% PER YEAR. Because modern medical stroke rates are so low, THE SURGICAL COMPLICATION RATE OF REVASCULARIZATION (30-day stroke/death rate of 1.5% to 3.0% with CEA or CAS) MAY EQUAL OR EXCEED THE BENIGN NATURAL HISTORY STROKE RISK OF MEDICAL THERAPY ALONE; (3) CURRENT GUIDELINE RECOMMENDATIONS (AHA/ASA 2021 AND ESVS 2023): (a) INTENSIVE MEDICAL THERAPY IS THE PRIMARY MANDATORY INTERVENTION FOR ALL ASYMPTOMATIC PATIENTS; (b) Prophylactic revascularization (CEA) in asymptomatic 70-99% stenosis is considered ONLY in highly selected patients who have HIGH-RISK FEATURES FOR STROKE (e.g., silent embolic infarcts on MRI, plaque ulceration/echolucency, stenosis progression, microemboli on TCD) AND a documented perioperative surgical stroke/death rate < 3%, with a projected life expectancy > 5 years; (c) In an asymptomatic patient with a stable, calcified, non-ulcerated plaque and normal brain MRI, intensive medical optimization is the undisputed first-line management."
      ],
      [
        "Perform emergent carotid endarterectomy within 48 hours to prevent imminent massive hemispheric stroke",
        "Emergency surgery in asymptomatic carotid stenosis is completely unjustified and dangerous; the annual stroke risk is < 1% on modern medical therapy, whereas urgent surgery carries an immediate 2-3% perioperative stroke/death risk."
      ],
      [
        "Discontinue statin therapy because aggressive cholesterol lowering weakens the carotid arterial adventitia",
        "Statins stabilize vulnerable plaque, thicken the protective fibrous cap, and are the essential cornerstone of stroke prevention; high-intensity statin therapy must be maximized."
      ],
      [
        "Immediate therapeutic anticoagulation with oral warfarin targeting an INR of 3.0 to 4.0",
        "Anticoagulation in non-cardioembolic atherosclerotic carotid disease does not reduce stroke, carries high intracranial hemorrhage rates, and is strictly contraindicated."
      ],
      [
        "Perform an emergent bilateral carotid balloon angioplasty with non-covered bare metal stenting",
        "Bilateral carotid stenting in an asymptomatic patient carries unacceptable risks of hemodynamic collapse, hyperperfusion syndrome, and bilateral stroke; medical therapy is the safe standard."
      ]
    ],
    "shortestValidSolution": "Asymptomatic 80% carotid stenosis + normal MRI + smooth calcified plaque = Asymptomatic Carotid Stenosis -> Intensive Medical Therapy (high-intensity statin + antiplatelet + BP control) before considering revascularization.",
    "necessaryInference": "Apply contemporary stroke prevention guidelines for asymptomatic severe carotid stenosis: prioritize modern intensive medical therapy (high-intensity statin, antiplatelet, BP control) over routine upfront revascularization.",
    "strongestDistractor": "Perform emergent carotid endarterectomy within 48 hours to prevent imminent massive hemispheric stroke",
    "distractorExclusion": "Asymptomatic severe carotid stenosis on modern medical therapy carries an annual stroke risk < 1%; emergency surgery exposes the patient to unnecessary perioperative stroke and death.",
    "citation": "Kleindorfer DO, Towfighi A, Chaturvedi S, et al. 2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack: A Guideline From the American Heart Association/American Stroke Association. Stroke. 2021;52(7):e364-e467. PMID: 34024117.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Asymptomatic Carotid Stenosis Medical Therapy vs Revascularization.",
      "distractorExclusionNotes": "Competitor Perform emergent carotid endarterectomy within 48  excluded by Asymptomatic severe carotid stenosis on modern medical thera.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0773",
    "exam": "Step 3",
    "subject": "Pediatrics",
    "system": "General Principles",
    "topic": "Early-Onset Neonatal Sepsis Empiric Ampicillin and Gentamicin",
    "provisionalDifficulty": 4,
    "stem": "A full-term male neonate born 18 hours ago via spontaneous vaginal delivery to a 24-year-old primigravida mother is evaluated in the newborn nursery for lethargy, poor feeding, and hypothermia. Maternal prenatal records reveal that the mother had positive Group B Streptococcus (GBS) rectovaginal colonization at 36 weeks gestation, experienced prolonged rupture of membranes lasting 22 hours prior to delivery, and received only a single dose of intravenous ampicillin 1 hour before delivery (inadequate intrapartum antibiotic prophylaxis). On physical examination, the neonate is lethargic with weak suck reflex and mottled cool extremities. Vital signs: axillary temperature 35.8 C (96.4 F, hypothermia), heart rate 178/min (tachycardia), respirations 68/min with mild subcostal retractions and intermittent grunting, and blood pressure 54/32 mm Hg. Complete blood count reveals: white blood cell count 3,200/mm3 with 28% immature band forms (immature-to-total neutrophil [I:T] ratio 0.42; abnormal >= 0.20, indicating severe left shift) and platelet count 110,000/mm3. Blood cultures are drawn. A diagnosis of presumed EARLY-ONSET NEONATAL SEPSIS is established. Which of the following represents the most appropriate, evidence-based empiric antimicrobial regimen according to American Academy of Pediatrics (AAP) and CDC guidelines?",
    "choices": [
      [
        "Intravenous ampicillin combined with intravenous gentamicin, avoiding ceftriaxone",
        "EARLY-ONSET NEONATAL SEPSIS (EONS) EMPIRIC ANTIMICROBIAL REGIMENS (AAP GUIDELINES): (1) DEFINITION AND RISK FACTORS: EONS occurs within the FIRST 72 HOURS OF LIFE (often within 24 hours), resulting from vertical ascending transmission of maternal microorganisms from the genital tract before or during delivery. Major maternal risk factors: (a) Maternal GBS colonization with INADEQUATE INTRAPARTUM PROPHYLAXIS (adequate prophylaxis requires IV penicillin, ampicillin, or cefazolin administered AT LEAST 4 HOURS PRIOR TO DELIVERY); (b) Prolonged rupture of membranes (PROM > 18 hours); (c) Maternal intra-amniotic infection (chorioamnionitis); (2) MICROBIOLOGY: The two predominant bacterial pathogens responsible for > 85-90% of early-onset neonatal sepsis in full-term neonates are: (a) GROUP B STREPTOCOCCUS (Streptococcus agalactiae, ~40-50%); (b) ESCHERICHIA COLI (~30-40%); Other pathogens include LISTERIA MONOCYTOGENES and Enterococcus; (3) FIRST-LINE EMPIRIC REGIMEN OF CHOICE: INTRAVENOUS AMPICILLIN PLUS AN AMINOGLYCOSIDE (GENTAMICIN): (a) AMPICILLIN provides potent bactericidal coverage against Group B Streptococcus, Listeria monocytogenes, and susceptible Enterococci; (b) GENTAMICIN provides powerful bactericidal coverage against Gram-negative enteric bacilli (E. coli) and exhibits potent bactericidal synergy with ampicillin against GBS and Listeria; (4) CRITICAL PHARMACOLOGICAL REASON WHY CEFTRIAXONE IS STRICTLY CONTRAINDICATED IN NEONATES: (a) BILIARY SLUDGING / PSEUDOLITHIASIS: Ceftriaxone precipitates with calcium in the biliary tree; (b) KERNICTERUS: Ceftriaxone has extremely high albumin-binding affinity and COMPETITIVELY DISPLACES BILIRUBIN FROM SERUM ALBUMIN. In neonates with physiological jaundice, displaced unbound free unconjugated bilirubin crosses the immature blood-brain barrier and deposits in the basal ganglia, causing fatal KERNICTERUS (bilirubin encephalopathy); (c) INADEQUATE COVERAGE: Cephalosporins have ZERO activity against Listeria monocytogenes and Enterococci."
      ],
      [
        "Intravenous ceftriaxone monotherapy 100 mg/kg daily as broad-spectrum empiric coverage",
        "Ceftriaxone competitively displaces bilirubin from albumin, precipitating lethal kernicterus in neonates, causes biliary sludging, and lacks activity against Listeria monocytogenes; it is strictly contraindicated."
      ],
      [
        "Oral amoxicillin 50 mg/kg daily administered via nasogastric tube",
        "Oral antibiotics have erratic, inadequate gastrointestinal absorption in neonates with septic shock and ileus; parenteral intravenous bactericidal therapy is mandatory."
      ],
      [
        "Intravenous vancomycin combined with intravenous cefepime as standard first-line therapy",
        "Vancomycin and cefepime are reserved for late-onset healthcare-associated sepsis or known MRSA; using them for early-onset sepsis causes avoidable nephrotoxicity and breeds resistant pathogens."
      ],
      [
        "Withhold all antibiotics and observe in the incubator for 24 hours to await definitive blood culture results",
        "Early-onset neonatal sepsis progresses rapidly to septic shock, meningitis, and death within hours; immediate empiric parenteral antimicrobial therapy is life-saving."
      ]
    ],
    "shortestValidSolution": "Neonate < 24 hr + maternal GBS with PROM + hypothermia/tachypnea + I:T ratio 0.42 = Early-Onset Neonatal Sepsis -> IV Ampicillin + IV Gentamicin (AAP guidelines; strictly avoid ceftriaxone due to kernicterus).",
    "necessaryInference": "Apply AAP guidelines for early-onset neonatal sepsis: prescribe intravenous ampicillin plus gentamicin to cover Group B Streptococcus, E. coli, and Listeria, and recognize why ceftriaxone is contraindicated.",
    "strongestDistractor": "Intravenous ceftriaxone monotherapy 100 mg/kg daily as broad-spectrum empiric coverage",
    "distractorExclusion": "Ceftriaxone displaces bilirubin from albumin, causing fatal kernicterus, and lacks activity against Listeria; ampicillin plus gentamicin is the gold standard.",
    "citation": "Puopolo KM, Benitz WE, Zaoutis TE, et al. Management of Neonates Born at >=35 0/7 Weeks' Gestation With Suspected or Proven Early-Onset Sepsis. Pediatrics. 2018;142(6):e20182894. PMID: 30455342.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Early-Onset Neonatal Sepsis Empiric Ampicillin and Gentamicin.",
      "distractorExclusionNotes": "Competitor Intravenous ceftriaxone monotherapy 100 mg/kg dail excluded by Ceftriaxone displaces bilirubin from albumin, causing fatal .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0774",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Anatomic or Functional Asplenia Vaccination Indications ACIP Guidelines",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old man with homozygous sickle cell disease (HbSS) presents to the outpatient hematology clinic for routine health maintenance. Over the past several years, his spleen has undergone progressive recurrent autoinfarction, and recent abdominal ultrasonography confirms complete autosplenectomy with an absent, fibrotic splenic remnant (functional and anatomic asplenia). He has not received any vaccinations since completing his routine childhood immunization schedule at age 6. He feels well today, has no acute pain crisis, and vital signs are completely normal. The physician explains to the patient that asplenia puts him at lifelong risk for fulminant, overwhelming postsplenectomy infection (OPSI) from encapsulated bacterial organisms. Which of the following represents the most comprehensive, guideline-directed vaccination strategy for this asplenic adult according to the Advisory Committee on Immunization Practices (ACIP) and CDC guidelines?",
    "choices": [
      [
        "Administration of the 20-valent pneumococcal conjugate vaccine (PCV20) alone (or PCV15 followed by PPSV23), meningococcal quadrivalent conjugate vaccine (MenACWY) with 5-year boosters, meningococcal serogroup B vaccine (MenB), Haemophilus influenzae type b (Hib) vaccine, and annual influenza and COVID-19 vaccines",
        "VACCINATION IN ANATOMIC AND FUNCTIONAL ASPLENIA (ACIP / CDC GUIDELINES): (1) PATHOPHYSIOLOGY AND RISK OF OVERWHELMING POSTSPLENECTOMY INFECTION (OPSI): The spleen is the body's primary lymphoid organ for filtering encapsulated bacteria from the bloodstream. Splenic red pulp macrophages phagocytose poorly opsonized antigens, and splenic marginal zone B cells produce IgM antibodies against polysaccharide capsular antigens. Asplenic patients (splenectomy, sickle cell autosplenectomy, or celiac disease) have a 50-fold increased lifelong risk of OPSI\u2014a catastrophic, rapidly progressive septic shock with DIC and death within 12 to 24 hours (mortality 40-70%). THE THREE PREDOMINANT ENCAPSULATED ORGANISMS: (a) STREPTOCOCCUS PNEUMONIAE (most common, > 60-70% of OPSI); (b) NEISSERIA MENINGITIDIS; (c) HAEMOPHILUS INFLUENZAE TYPE B (Hib); (2) ACIP VACCINATION SCHEDULE FOR ASPLENIC ADULTS: (a) PNEUMOCOCCAL VACCINE: Single dose of PCV20 (20-valent conjugate); OR PCV15 conjugate followed >= 8 weeks later by PPSV23 (23-valent polysaccharide), with PPSV23 booster 5 years later; (b) MENINGOCOCCAL QUADRIVALENT CONJUGATE (MenACWY: Menveo or MenQuadfi): 2-dose primary series administered 8 weeks apart, followed by LIFELONG BOOSTER DOSES EVERY 5 YEARS; (c) MENINGOCOCCAL SEROGROUP B VACCINE (MenB: Bexsero 2-dose series, or Trumenba 3-dose series), with booster 1 year later then every 2-3 years; (d) HAEMOPHILUS INFLUENZAE TYPE B (Hib): Single dose of conjugate Hib vaccine if not received in adulthood; (e) ANNUAL ROUTINE INACTIVATED INFLUENZA AND COVID-19 VACCINES (influenza infection predisposes to secondary bacterial pneumonia); (3) PATIENT EDUCATION: Asplenic patients must be educated to seek immediate medical attention and start emergency empiric antibiotics (e.g., amoxicillin-clavulanate or levofloxacin) at the earliest onset of fever."
      ],
      [
        "Administration of live-attenuated oral typhoid vaccine and live-attenuated yellow fever vaccine as primary immune stimulants",
        "Live-attenuated vaccines have no specific efficacy against encapsulated pathogens and carry risks in immunocompromised hosts; targeted conjugate bacterial vaccines are required."
      ],
      [
        "Administration of tetanus toxoid booster alone, withholding all bacterial polysaccharide vaccines because asplenic individuals cannot mount an antibody response",
        "While pure polysaccharide responses are blunted without a spleen, CONJUGATE vaccines (PCV20, MenACWY, Hib) bind bacterial polysaccharides to diphtheria/tetanus toxoid carrier proteins, triggering potent T-cell-dependent immune memory that functions independently of the spleen."
      ],
      [
        "Recommend that vaccination is unnecessary because daily prophylactic oral penicillin V eliminates all infection risk throughout adulthood",
        "While daily penicillin prophylaxis is standard in young children with sickle cell disease until age 5, adult compliance is poor and penicillin-resistant pneumococci are prevalent; vaccination is mandatory."
      ],
      [
        "Administration of PPSV23 polysaccharide vaccine alone without any preceding pneumococcal conjugate vaccine",
        "Administering PPSV23 alone induces immune hyporesponsiveness ('immune tolerance') and lacks conjugate T-cell-dependent memory; ACIP guidelines mandate PCV20 or PCV15 prior to PPSV23."
      ]
    ],
    "shortestValidSolution": "Sickle cell disease with autosplenectomy = Functional Asplenia -> ACIP Vaccines: Pneumococcal (PCV20), Meningococcal (MenACWY + MenB), Hib, and Annual Influenza.",
    "necessaryInference": "Apply ACIP immunization guidelines for functional or anatomic asplenia: identify mandatory vaccines targeting encapsulated bacteria (Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae type b).",
    "strongestDistractor": "Administration of tetanus toxoid booster alone, withholding all bacterial polysaccharide vaccines because asplenic individuals cannot mount an antibody response",
    "distractorExclusion": "Conjugate vaccines elicit robust T-cell-dependent immunity in asplenic patients, providing life-saving protection against overwhelming postsplenectomy infection.",
    "citation": "Kobayashi M, Farrar JL, Gierke R, et al. Use of 15-Valent Pneumococcal Conjugate Vaccine and 20-Valent Pneumococcal Conjugate Vaccine Among U.S. Adults: Updated Recommendations of the Advisory Committee on Immunization Practices. MMWR Morb Mortal Wkly Rep. 2022;71(4):109-117. PMID: 35085226.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Anatomic or Functional Asplenia Vaccination Indications ACIP Guidelines.",
      "distractorExclusionNotes": "Competitor Administration of tetanus toxoid booster alone, wi excluded by Conjugate vaccines elicit robust T-cell-dependent immunity i.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0775",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Impaired Physician Reporting and Physician Health Program Referral",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old internal medicine resident is rotating on the inpatient cardiology service. At 7:30 AM during morning interdisciplinary rounds, the resident appears disheveled, unkempt, and diaphoretic. While presenting a patient with acute coronary syndrome, he slurs his words, stumbles into the bedside medication cart, and mistakenly orders a ten-fold overdose of intravenous unfractionated heparin (ordering an 80,000-unit bolus instead of 8,000 units), which the bedside clinical pharmacist immediately catches and halts before administration. A fellow resident and the attending physician notice a distinct odor of alcohol on his breath and observe that his pupils are dilated and sluggishly reactive. When pulled into a private conference room by the attending physician, the resident tearfully confesses that he has been drinking heavily every night and took multiple oral alprazolam tablets this morning to cope with severe anxiety and a recent marital separation. He begs the attending physician: 'Please do not report me to the hospital administration or the state medical board. If they find out, I will be expelled from residency, lose my medical license, and my entire life will be ruined. I promise I will take a few days off and get clean on my own.' Which of the following is the most appropriate next step in clinical and administrative management according to American Medical Association (AMA) ethical principles and institutional patient safety guidelines?",
    "choices": [
      [
        "Immediately relieve the resident of all clinical duties for the day to ensure patient safety, arrange safe transportation home or for medical evaluation, and immediately report the incident to the residency program director and the confidential state Physician Health Program (PHP)",
        "IMPAIRED PHYSICIAN ETHICAL AND ADMINISTRATIVE REPORTING (AMA CODE OF MEDICAL ETHICS OPINION 9.3.2): (1) PRIMARY ETHICAL DUTY (PATIENT SAFETY FIRST): The physician's primary, non-negotiable ethical obligation is TO PROTECT PATIENTS FROM HARM. An impaired physician practicing under the influence of alcohol, drugs, or severe psychiatric illness poses an imminent, severe danger to patient safety (exemplified here by ordering a ten-fold lethal medication overdose); (2) IMMEDIATE ACTIONS: (a) IMMEDIATE RELIEF OF CLINICAL RESPONSIBILITY: The impaired physician must be immediately removed from all patient care activities. Continuing clinical duties while impaired is unacceptable; (b) ENSURE IMMEDIATE SAFETY: Arrange safe, escorted transportation home or to an emergency department if medical/detoxification stabilization is required (never allow an intoxicated physician to drive); (3) INSTITUTIONAL AND PROFESSIONAL REPORTING OBLIGATIONS: (a) AMA Opinion 9.3.2 explicitly states: 'Physicians have an ethical and professional obligation to report colleagues who are impaired, incompetent, or engaging in unethical conduct'; (b) REPORT TO RESIDENCY LEADERSHIP: The attending physician must immediately notify the Residency Program Director and Graduate Medical Education (GME) office; (c) REFERRAL TO THE PHYSICIAN HEALTH PROGRAM (PHP): Most jurisdictions operate state-sanctioned, CONFIDENTIAL PHYSICIAN HEALTH PROGRAMS (PHPs). PHPs provide comprehensive addiction and psychiatric evaluation, coordinate long-term inpatient rehabilitation, facilitate monitoring agreements, and provide a structured pathway for safe, monitored return to practice while PROTECTING THE PHYSICIAN FROM PUNITIVE STATE MEDICAL BOARD ACTION if they remain compliant; (4) WHY 'KEEPING IT SECRET' IS UNETHICAL: Allowing an impaired physician to 'handle it on their own' or covering up for a colleague violates patient safety, enables worsening substance dependence, leads to fatal medical errors, and exposes the reporting physician and hospital to legal liability."
      ],
      [
        "Agree to keep the incident completely confidential within the team, advising the resident to sleep for 2 hours in the call room and return to finish afternoon patient rounds",
        "Allowing an impaired physician to resume patient care violates patient safety and hospital safety regulations; failure to report active impairment makes the attending physician complicit in potential malpractice."
      ],
      [
        "Instruct the resident to submit an immediate formal resignation from the residency program and surrender his medical training license permanently",
        "Punitive expulsion without medical evaluation is inappropriate; Physician Health Programs provide confidential rehabilitation and monitoring designed to restore health and preserve careers."
      ],
      [
        "Require the resident to perform an extra weekend on-call shift as a disciplinary penalty while withholding all reporting",
        "Using clinical duty as a disciplinary penalty increases fatigue and patient risk; it does not address substance abuse and violates ethical standards of patient care."
      ],
      [
        "Immediately file a public police report against the resident for criminal intoxication in a healthcare facility",
        "Substance use disorder is a treatable medical illness; administrative reporting through institutional GME channels and Physician Health Programs is the proper and standard protocol."
      ]
    ],
    "shortestValidSolution": "Resident intoxicated on rounds + slurred speech + 10-fold medication error = Impaired Physician -> Relieve of duties immediately + Report to Program Director & Physician Health Program (AMA Opinion 9.3.2).",
    "necessaryInference": "Apply AMA ethical principles regarding the impaired physician: prioritize patient safety by immediately removing the physician from clinical duties, and fulfill professional reporting duties to residency leadership and the Physician Health Program.",
    "strongestDistractor": "Agree to keep the incident completely confidential within the team, advising the resident to sleep for 2 hours in the call room and return to finish afternoon patient rounds",
    "distractorExclusion": "Covering up for an impaired colleague directly endangers patients and violates AMA ethical code 9.3.2; immediate removal and reporting to leadership/PHP is mandatory.",
    "citation": "American Medical Association. AMA Code of Medical Ethics Opinion 9.3.2: Reporting Impaired, Incompetent, or Unethical Colleagues. 2016. https://code-medical-ethics.ama-assn.org/ethics-opinions/reporting-impaired-incompetent-or-unethical-colleagues",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 advanced clinical decision making item evaluating Impaired Physician Reporting and Physician Health Program Referral.",
      "distractorExclusionNotes": "Competitor Agree to keep the incident completely confidential excluded by Covering up for an impaired colleague directly endangers pat.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
