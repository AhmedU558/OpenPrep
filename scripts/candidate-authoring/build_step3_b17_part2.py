import json

items_s3_b17_part2 = [
  {
    "code": "op-c-s3-0413",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Opioid Use Disorder Maintenance and Buprenorphine Induction",
    "subtopic": "Partial Mu Agonist Kinetics, Precipitated Withdrawal Prevention, COWS Threshold",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old man presents to the outpatient addiction medicine clinic seeking medications for opioid use disorder (MOUD). He has a 4-year history of non-medical oxycodone and illicit fentanyl use, currently snorting 1 to 2 bags of fentanyl daily. He has made multiple unsuccessful attempts to quit cold-turkey, each time relapsing due to unbearable withdrawal symptoms. He has no chronic medical conditions, takes no prescription medications, and has normal liver and kidney function tests. He last used fentanyl 8 hours ago. On physical examination, he appears anxious and restless. Vital signs reveal blood pressure of 138/86 mm Hg, heart rate of 98/min, and respiratory rate of 18/min. Physical examination reveals mild piloerection (gooseflesh), dilated pupils (mydriasis, 5 mm), rhinorrhea, yawning, and mild abdominal cramping without vomiting or diarrhea. His Clinical Opiate Withdrawal Scale (COWS) score is calculated at 11 (mild-to-moderate withdrawal; threshold for induction >= 8 to 12). He has chosen buprenorphine-naloxone sublingual films for maintenance therapy.\n\nWhich of the following explains why this patient must be in objective mild-to-moderate opioid withdrawal (COWS >= 8-12) prior to administering the initial dose of buprenorphine-naloxone?",
    "choices": [
      [
        "Buprenorphine has an exceptionally high binding affinity for mu-opioid receptors combined with low intrinsic efficacy (partial agonism), which rapidly displaces full opioid agonists and precipitates severe acute withdrawal if receptors remain heavily occupied",
        "Buprenorphine is a high-affinity PARTIAL MU-OPIOID RECEPTOR AGONIST and kappa-opioid receptor antagonist, co-formulated with naloxone (4:1 ratio) to deter intravenous misuse (naloxone has poor sublingual bioavailability < 5% but blocks mu receptors if injected). (1) THE DANGER OF PRECIPITATED WITHDRAWAL: Buprenorphine's binding affinity (Ki ~ 0.2 nM) for the mu-opioid receptor is significantly HIGHER than full agonists (heroin, morphine, oxycodone, methadone, fentanyl). If buprenorphine is administered while a patient is still intoxicated or during early non-withdrawal when mu receptors are saturated with full agonists, buprenorphine IMMEDIATELY DISPLACES the full agonists from receptor binding pockets. However, because buprenorphine has LOW INTRINSIC EFFICACY (partial agonist), net intracellular mu-receptor signaling plummets precipitously within minutes. This sudden crash in opioid receptor tone triggers CATASTROPHIC PRECIPITATED WITHDRAWAL (explosive vomiting, diarrhea, diaphoresis, severe muscle spasms, extreme dysphoria), which often leads to immediate clinic abandonment and fatal illicit drug relapse. (2) INDUCTION RULE: To safely initiate standard buprenorphine, the patient must be in OBJECTIVE MILD-TO-MODERATE WITHDRAWAL (Clinical Opiate Withdrawal Scale [COWS] score >= 8-12). This verifies that full agonists have dissociated from mu receptors and cleared, ensuring buprenorphine will increase (rather than decrease) net mu-receptor signaling, providing rapid symptom relief."
      ],
      [
        "Naloxone in the sublingual tablet is rapidly absorbed through the sublingual mucosa and will trigger acute receptor blockade unless withdrawal is present",
        "Sublingual naloxone has negligible oral/sublingual bioavailability (< 5-10%) and is included solely to prevent parenteral injection; precipitated withdrawal from sublingual buprenorphine-naloxone is driven entirely by buprenorphine itself."
      ],
      [
        "Administering buprenorphine in the absence of withdrawal triggers fatal respiratory depression due to synergistic full-agonist activation",
        "Buprenorphine is a partial agonist with a well-established ceiling effect on respiratory depression; the danger of administering it too early is precipitated withdrawal, not respiratory arrest."
      ],
      [
        "Hepatic CYP3A4 enzymes are inhibited during early withdrawal, preventing buprenorphine hepatotoxicity",
        "Buprenorphine metabolism is not dependent on withdrawal-induced enzyme fluctuations; the timing requirement is purely pharmacodynamic at the mu-opioid receptor."
      ],
      [
        "Buprenorphine converts into a full mu-opioid antagonist when administered to an individual without physical opioid dependence",
        "Buprenorphine is always a partial agonist; it does not change its chemical receptor pharmacology based on dependence status."
      ]
    ],
    "rationale": "Buprenorphine is a partial mu-opioid agonist with exceptionally high receptor affinity but lower intrinsic activity than full agonists (fentanyl, oxycodone). Administering buprenorphine when mu receptors are occupied by full agonists causes rapid displacement of the full agonist, precipitously crashing receptor signaling and inducing severe precipitated withdrawal. Standard induction requires the patient to be in objective mild-to-moderate withdrawal (COWS >= 8-12) to ensure receptors are sufficiently vacant so that buprenorphine increases net receptor signaling and relieves symptoms.",
    "metadata": {
      "shortSolution": "Buprenorphine's high binding affinity and low intrinsic activity displaces full agonists, causing precipitated withdrawal if given before mild-to-moderate withdrawal (COWS >= 8-12) occurs.",
      "competingChoice": "Naloxone in the sublingual tablet is rapidly absorbed through the sublingual mucosa and will trigger acute receptor blockade unless withdrawal is present",
      "exclusionFinding": "Sublingual naloxone has < 5% bioavailability and is not absorbed enterally; precipitated withdrawal is caused by buprenorphine's own partial agonist pharmacodynamics.",
      "pedagogicalValue": "Mastering the mechanism of precipitated withdrawal during buprenorphine induction (high affinity partial agonist displacing full agonists) and the required COWS threshold (>= 8-12).",
      "citations": [
        "Kampman K, Jarvis M. American Society of Addiction Medicine (ASAM) National Practice Guideline for the Use of Medications in the Treatment of Addiction Involving Opioid Use. J Addict Med. 2015;9(5):358-367. PMID: 26406300.",
        "Mattick RP, Breen C, Kimber J, Davoli M. Buprenorphine maintenance therapy versus no treatment for opioid dependence. Cochrane Database Syst Rev. 2014;(2):CD002207. PMID: 24500948."
      ]
    },
    "critique": {
      "shortestValidSolution": "Buprenorphine has high affinity + partial agonism -> displaces full agonists causing precipitated withdrawal unless patient is already in withdrawal (COWS >= 8-12).",
      "strongestCompetitor": "Naloxone in the sublingual tablet is rapidly absorbed through the sublingual mucosa and will trigger acute receptor blockade unless withdrawal is present",
      "exclusionFinding": "Sublingual naloxone has negligible absorption; buprenorphine itself displaces full agonists to precipitate withdrawal.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0414",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Tobacco Use Disorder Pharmacotherapy and the EAGLES Trial",
    "subtopic": "Varenicline Superiority, Neuropsychiatric Safety, Dual Nicotine Replacement Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man presents to his primary care physician expressing a strong desire to stop smoking cigarettes. He has smoked 1.5 packs of cigarettes daily for 30 years (45 pack-year history). He smokes his first cigarette within 5 minutes of waking each morning. He has attempted to quit smoking three times previously using over-the-counter nicotine patches alone, but relapsed within 2 weeks due to severe nicotine cravings and irritability. His past medical history includes well-controlled major depressive disorder treated with sertraline 100 mg daily for the past 4 years; he has had no suicidal ideation or depressive episodes in over 3 years. Vital signs and physical examination are normal.\n\nBased on landmark randomized clinical trial evidence (the EAGLES trial) and current American Thoracic Society (ATS) guidelines, which of the following represents the preferred first-line pharmacological strategy for smoking cessation in this patient?",
    "choices": [
      [
        "Oral varenicline (titrated from 0.5 mg daily to 1 mg twice daily for 12 weeks), or dual combination nicotine replacement therapy (nicotine transdermal patch PLUS short-acting nicotine gum or lozenge)",
        "Tobacco Use Disorder is the leading cause of preventable morbidity and premature mortality in the United States. Pharmacotherapy substantially increases long-term smoking abstinence: (1) MECHANISM OF VARENICLINE: Varenicline is an oral PARTIAL AGONIST at the alpha-4 beta-2 neuronal nicotinic acetylcholine receptor (nAChR). It produces two synergistic clinical actions: (a) Agonist action: It provides moderate, sustained receptor stimulation (approximately 30-40% of nicotine's intrinsic activity), releasing modest baseline dopamine in the mesolimbic system to relieve nicotine withdrawal symptoms and cravings; and (b) Antagonist action: Because of its extremely high binding affinity, it competitively blocks inhaled nicotine from binding the receptor, abolishing the dopamine surge and psychological reinforcement ('buzz') if the patient slips and smokes a cigarette. (2) LANDMARK EVIDENCE (THE EAGLES TRIAL, LANCET 2016): The EAGLES trial was a massive, multinational, double-blind RCT involving > 8,000 smokers (with and without psychiatric disorders). (a) Efficacy: Varenicline was SIGNIFICANTLY SUPERIOR to bupropion, nicotine patch monotherapy, and placebo in achieving continuous abstinence at weeks 9-24 (abstinence rates ~22% for varenicline vs 16% for bupropion and patch vs 8% for placebo). (b) Neuropsychiatric Safety: Crucially, EAGLES proved that varenicline DOES NOT INCREASE neuropsychiatric adverse events (suicide, depression, aggression) compared to placebo or nicotine patch, even in patients with stable psychiatric disorders, leading the FDA to remove the historical black box warning. (3) ATS GUIDELINES: Strongly recommend VARENICLINE OVER BUPROPION OR NICOTINE PATCH MONOTHERAPY as initial therapy, or DUAL COMBINATION NRT (long-acting transdermal patch + short-acting gum/lozenge) as an equivalent first-line alternative."
      ],
      [
        "Oral bupropion hydrochloride extended-release 150 mg twice daily monotherapy, because varenicline is strictly contraindicated in all patients with a history of depression",
        "The EAGLES trial definitively proved that varenicline is completely safe in patients with stable psychiatric disorders and does not increase neuropsychiatric events; varenicline has superior quit rates compared to bupropion."
      ],
      [
        "Single-agent transdermal nicotine patch 21 mg daily monotherapy without short-acting rescue therapy",
        "Single-agent nicotine patch monotherapy is significantly inferior to varenicline or dual combination NRT (patch + gum/lozenge), and this patient has already failed nicotine patch monotherapy three times."
      ],
      [
        "Switch from combustible cigarettes to electronic nicotine delivery systems (e-cigarettes) as primary cessation therapy",
        "E-cigarettes maintain nicotine dependence, lack long-term safety data, and are not approved by the FDA or ATS as first-line smoking cessation pharmacotherapy."
      ],
      [
        "Oral nortriptyline 75 mg daily as first-line monotherapy",
        "Nortriptyline is a second-line agent with significant anticholinergic and cardiotoxic adverse effects; varenicline is first-line with proven superiority."
      ]
    ],
    "rationale": "Varenicline (an alpha-4 beta-2 nicotinic receptor partial agonist) is the most effective first-line medication for smoking cessation. It provides partial agonism to relieve cravings while blocking the euphoric reinforcement of smoking. The EAGLES trial (> 8,000 patients) proved varenicline is superior to bupropion and nicotine patch monotherapy, and demonstrated no increase in neuropsychiatric adverse events in patients with stable psychiatric conditions (prompting FDA removal of its black box warning). Dual combination NRT (patch + gum/lozenge) is an equally effective first-line alternative.",
    "metadata": {
      "shortSolution": "Smoking cessation candidate with prior patch failures and stable depression should receive oral varenicline (or dual NRT); EAGLES trial proved varenicline has superior efficacy and is safe in psychiatric history.",
      "competingChoice": "Oral bupropion hydrochloride extended-release 150 mg twice daily monotherapy, because varenicline is strictly contraindicated in all patients with a history of depression",
      "exclusionFinding": "The EAGLES trial disproved the neuropsychiatric safety warning; varenicline is safe in stable depression and has higher quit rates than bupropion.",
      "pedagogicalValue": "Mastering smoking cessation pharmacotherapy: varenicline (or dual NRT) is first-line, and the EAGLES trial established its neuropsychiatric safety and superiority over bupropion.",
      "citations": [
        "Anthenelli RM, Benowitz NL, West R, et al. Neuropsychiatric safety and efficacy of varenicline, bupropion, and nicotine patch in smokers with and without psychiatric disorders (EAGLES): a double-blind, randomised, placebo-controlled clinical trial. Lancet. 2016;387(10037):2507-2520. PMID: 27116918.",
        "Leone FT, Zhang Y, Evers-Casey S, et al. Initiating Pharmacologic Treatment in Tobacco-Dependent Adults. An Official American Thoracic Society Clinical Practice Guideline. Am J Respir Crit Care Med. 2020;202(2):e5-e31. PMID: 32663117."
      ]
    },
    "critique": {
      "shortestValidSolution": "Smoking cessation -> oral varenicline (superior efficacy, proven safe in depression per EAGLES trial) or dual NRT.",
      "strongestCompetitor": "Oral bupropion hydrochloride extended-release 150 mg twice daily monotherapy, because varenicline is strictly contraindicated in all patients with a history of depression",
      "exclusionFinding": "EAGLES trial proved varenicline is safe in psychiatric patients and superior to bupropion; FDA removed the black box warning.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0415",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Atrial Fibrillation Stroke Prevention and Anticoagulation Selection",
    "subtopic": "CHA2DS2-VASc Calculation, DOAC Superiority vs Warfarin, Valvular vs Non-Valvular AF",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old woman presents to the clinic for a routine follow-up. An electrocardiogram obtained during the visit incidentally reveals atrial fibrillation with a ventricular response of 84/min; an ECG 6 months ago showed normal sinus rhythm. She has a history of essential hypertension managed with amlodipine and type 2 diabetes mellitus managed with metformin. She has never experienced a stroke, transient ischemic attack, or systemic embolism, and has no history of heart failure or vascular disease. Vital signs demonstrate blood pressure of 132/78 mm Hg and heart rate of 82/min. Transthoracic echocardiography reveals a normal left ventricular ejection fraction of 60%, mild left atrial enlargement, and mild trace mitral regurgitation without mitral stenosis or prosthetic heart valves. Laboratory evaluation shows a serum creatinine of 0.9 mg/dL (estimated GFR 74 mL/min) and normal liver function tests.\n\nBased on her calculated stroke risk score and current AHA/ACC/ACCP guidelines, which of the following represents the most appropriate antithrombotic management strategy for this patient?",
    "choices": [
      [
        "Initiate oral anticoagulation with a Direct Oral Anticoagulant (DOAC; e.g., apixaban 5 mg twice daily or rivaroxaban 20 mg once daily), which is preferred over warfarin for non-valvular atrial fibrillation",
        "Stroke prevention in Atrial Fibrillation (AF) is guided by validated risk-stratification scoring: (1) CHA2DS2-VASc SCORE CALCULATION: (a) Congestive heart failure = 1 pt; (b) Hypertension = 1 pt; (c) Age >= 75 years = 2 pts; (d) Diabetes mellitus = 1 pt; (e) Stroke/TIA/thromboembolism = 2 pts; (f) Vascular disease (prior MI, PAD, aortic plaque) = 1 pt; (g) Age 65 to 74 years = 1 pt; (h) Sex category (Female) = 1 pt. In this patient: Hypertension (1 pt) + Age 71 (1 pt) + Diabetes (1 pt) + Female sex (1 pt) = TOTAL CHA2DS2-VASc SCORE OF 4 POINTS (annual ischemic stroke risk ~4.0%). (2) ANTICOAGULATION THRESHOLD (AHA/ACC/HRS GUIDELINES): Oral anticoagulation is strongly recommended for non-valvular AF in men with CHA2DS2-VASc >= 2 and in women with CHA2DS2-VASc >= 3. (3) DOAC SUPERIORITY OVER WARFARIN: For non-valvular AF, DIRECT ORAL ANTICOAGULANTS (DOACs: apixaban, rivaroxaban, edoxaban, dabigatran) ARE PREFERRED OVER WARFARIN based on massive landmark randomized trials (ARISTOTLE, ROCKET-AF, RE-LY, ENGAGE-AF). DOACs demonstrate non-inferior or superior reduction in ischemic stroke, a dramatic ~50% REDUCTION IN FATAL INTRACRANIAL HEMORRHAGE, significantly lower all-cause mortality, predictable fixed dosing without routine INR monitoring, and minimal dietary/drug interactions. (4) WARFARIN RESTRICTION: Warfarin remains strictly mandatory ONLY in 'valvular' AF, defined as AF in the presence of: (a) Mechanical prosthetic heart valves, OR (b) Moderate-to-severe rheumatic mitral stenosis."
      ],
      [
        "Initiate daily oral aspirin 81 mg monotherapy, as antiplatelet therapy provides sufficient stroke reduction with lower bleeding risk",
        "Aspirin is significantly inferior to oral anticoagulation in preventing stroke in atrial fibrillation (reducing stroke by only ~20% vs ~65% for anticoagulation) while carrying comparable major bleeding rates; guidelines recommend against aspirin for stroke prevention in AF."
      ],
      [
        "Initiate oral warfarin adjusted to target an INR of 2.0 to 3.0, as warfarin is preferred over DOACs in all patients over 70 years of age",
        "DOACs are preferred over warfarin in older adults because DOACs reduce intracranial hemorrhage by 50% compared to warfarin; age > 70 is an indication for DOACs, not warfarin."
      ],
      [
        "Prescribe combination therapy with oral aspirin 81 mg and clopidogrel 75 mg daily",
        "Dual antiplatelet therapy (DAPT) is significantly inferior to oral anticoagulation for stroke prevention in AF and carries major bleeding rates approaching oral anticoagulation; DAPT is not recommended."
      ],
      [
        "Withhold all antithrombotic therapy because the patient is completely asymptomatic and her ventricular rate is well controlled",
        "Asymptomatic atrial fibrillation carries an identical stroke risk to symptomatic AF; withholding anticoagulation in a patient with a CHA2DS2-VASc score of 4 carries a 4% annual risk of disabling embolic stroke."
      ]
    ],
    "rationale": "In non-valvular atrial fibrillation, stroke risk is calculated using the CHA2DS2-VASc score. This patient scores 4 points (HTN = 1, Age 71 = 1, Diabetes = 1, Female = 1). Guidelines recommend oral anticoagulation for score >= 2 in men and >= 3 in women. Direct oral anticoagulants (DOACs: apixaban, rivaroxaban) are preferred over warfarin because large RCTs proved DOACs have equivalent/superior stroke prevention with a 50% reduction in fatal intracranial hemorrhage. Warfarin is reserved for mechanical valves and moderate-to-severe mitral stenosis. Aspirin is ineffective.",
    "metadata": {
      "shortSolution": "71-year-old female with AF, HTN, and diabetes has a CHA2DS2-VASc score of 4; guidelines mandate oral anticoagulation with a DOAC (apixaban/rivaroxaban), which is preferred over warfarin.",
      "competingChoice": "Initiate daily oral aspirin 81 mg monotherapy, as antiplatelet therapy provides sufficient stroke reduction with lower bleeding risk",
      "exclusionFinding": "Aspirin is ineffective for AF stroke prevention compared to anticoagulation (20% vs 65% reduction) and carries similar bleeding risks; guidelines explicitly advise against aspirin.",
      "pedagogicalValue": "Calculating the CHA2DS2-VASc score and understanding why DOACs are preferred over warfarin in non-valvular AF (50% reduction in intracranial hemorrhage).",
      "citations": [
        "Joglar JA, Chung MK, Armbruster AL, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2024;149(1):e1-e156. PMID: 38031654.",
        "Granger CB, Alexander JH, McMurray JJ, et al. Apixaban versus warfarin in patients with atrial fibrillation. N Engl J Med. 2011;365(11):981-992. PMID: 21870978."
      ]
    },
    "critique": {
      "shortestValidSolution": "Non-valvular AF + CHA2DS2-VASc 4 -> oral anticoagulation with a DOAC (apixaban/rivaroxaban preferred over warfarin).",
      "strongestCompetitor": "Initiate daily oral aspirin 81 mg monotherapy, as antiplatelet therapy provides sufficient stroke reduction with lower bleeding risk",
      "exclusionFinding": "Aspirin is inadequate for stroke prevention in AF; DOAC anticoagulation is mandatory for CHA2DS2-VASc >= 3 in women.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0416",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Perioperative Anticoagulation Interruption and the BRIDGE Trial",
    "subtopic": "DOAC Interruption Timing, Avoidance of Heparin Bridging, Bleeding Risk Stratification",
    "provisionalDifficulty": 5,
    "stem": "A 69-year-old man with non-valvular atrial fibrillation (CHA2DS2-VASc score of 3: age 69, hypertension, diabetes) treated with oral apixaban (5 mg twice daily) is scheduled for elective major abdominal surgery (open hemicolectomy for colon adenocarcinoma). He has normal renal function with a serum creatinine of 1.0 mg/dL (estimated GFR 78 mL/min). His last dose of apixaban was taken this morning. The surgery is planned in 3 days. The surgical team asks for your perioperative medical consultation regarding how to manage his oral anticoagulation before and after the procedure.\n\nBased on landmark randomized clinical trial evidence (including the BRIDGE trial and PAUSE study) and current CHEST perioperative guidelines, which of the following represents the most appropriate perioperative anticoagulation protocol for this patient?",
    "choices": [
      [
        "Discontinue apixaban 48 hours prior to surgery without administering parenteral low-molecular-weight heparin bridging, and resume apixaban 48 to 72 hours postoperatively once adequate surgical hemostasis is established",
        "Perioperative management of Direct Oral Anticoagulants (DOACs: apixaban, rivaroxaban, dabigatran) differs fundamentally from warfarin: (1) PHARMACOKINETICS: DOACs have short terminal elimination half-lives (typically 8 to 14 hours in normal renal function) and rapid onset of action (peak anticoagulation within 1 to 3 hours of oral ingestion). (2) TIMING OF PREOPERATIVE INTERRUPTION (PAUSE STUDY): For surgeries with HIGH BLEEDING RISK (such as major open intra-abdominal, orthopedic, or intracranial surgery): Apixaban should be discontinued 48 HOURS PRIOR TO SURGERY (allowing 4 to 5 elimination half-lives to elapse, ensuring < 5-10% residual anticoagulant activity). (For low-bleeding-risk procedures, 24 hours is sufficient). (3) EVIDENCE AGAINST HEPARIN BRIDGING (THE BRIDGE TRIAL, NEJM 2015): The double-blind randomized BRIDGE trial proved that administering therapeutic low-molecular-weight heparin (LMWH) bridging during anticoagulation interruption DOES NOT REDUCE ARTERIAL THROMBOEMBOLISM (0.3% vs 0.4%) but TRIPLES THE RISK OF MAJOR BLEEDING (3.2% vs 1.3%). Because DOACs clear rapidly and resume action immediately upon ingestion, PARENTERAL HEPARIN BRIDGING IS STRICTLY UNNECESSARY AND HARMFUL IN DOAC PATIENTS. (4) POSTOPERATIVE RESUMPTION: For high-bleeding-risk procedures, therapeutic-dose apixaban is resumed 48 to 72 hours postoperatively once surgical hemostasis is complete (prophylactic low-dose LMWH can be used for VTE prophylaxis in the interim 24-48 hours if indicated)."
      ],
      [
        "Discontinue apixaban 5 days prior to surgery and initiate therapeutic subcutaneous enoxaparin 1 mg/kg twice daily bridging until 12 hours before surgery",
        "Discontinuing a DOAC 5 days prior is excessive due to its 12-hour half-life, and routine LMWH bridging triples major surgical bleeding without reducing arterial thromboembolism (BRIDGE trial)."
      ],
      [
        "Continue apixaban 5 mg twice daily without interruption through the morning of surgery to prevent perioperative stroke",
        "Continuing full-dose DOAC therapy through major open abdominal surgery leads to uncontrollable intraoperative hemorrhage, massive transfusions, and re-exploration."
      ],
      [
        "Discontinue apixaban 24 hours prior to surgery and administer intravenous andexanet alfa in the preoperative holding area",
        "Andexanet alfa is an expensive reversal agent reserved for life-threatening emergency bleeding or emergent unscheduled surgery, not routine elective surgery where simple timed drug cessation allows natural clearance."
      ],
      [
        "Switch from apixaban to oral warfarin 2 weeks prior to surgery and manage with intravenous unfractionated heparin bridging",
        "Switching an established DOAC patient to warfarin introduces erratic anticoagulation kinetics, requires invasive bridging, and increases bleeding risks without clinical benefit."
      ]
    ],
    "rationale": "DOACs (apixaban) have short half-lives (~12 hours). For high-bleeding-risk major surgeries (open colectomy), apixaban should be stopped 48 hours prior to surgery without heparin bridging (PAUSE study). The BRIDGE trial proved that routine heparin bridging during anticoagulation interruption fails to reduce thromboembolism but triples major bleeding (3.2% vs 1.3%). DOACs do not require bridging due to rapid clearance and immediate onset upon restarting. Resume full-dose apixaban 48-72 hours postoperatively once hemostasis is secure.",
    "metadata": {
      "shortSolution": "Apixaban before major open surgery requires stopping 48 hours pre-op WITHOUT heparin bridging (BRIDGE trial proved bridging triples major bleeding without reducing stroke); resume 48-72h post-op.",
      "competingChoice": "Discontinue apixaban 5 days prior to surgery and initiate therapeutic subcutaneous enoxaparin 1 mg/kg twice daily bridging until 12 hours before surgery",
      "exclusionFinding": "DOACs clear in 48 hours; heparin bridging triples major surgical bleeding without thromboembolic protection (BRIDGE trial) and is contraindicated.",
      "pedagogicalValue": "Understanding perioperative DOAC management: stopping 48 hours prior to high-risk surgery without heparin bridging (BRIDGE trial), and resuming 48-72 hours post-op.",
      "citations": [
        "Douketis JD, Spyropoulos AC, Kaatz S, et al. Perioperative Bridging Anticoagulation in Patients with Atrial Fibrillation. N Engl J Med. 2015;373(9):823-833. PMID: 26095207.",
        "Douketis JD, Spyropoulos AC, Duncan J, et al. Perioperative Management of Patients With Atrial Fibrillation Receiving a Direct Oral Anticoagulant: The PAUSE Study. JAMA Intern Med. 2019;179(11):1469-1478. PMID: 31449282."
      ]
    },
    "critique": {
      "shortestValidSolution": "DOAC before major surgery -> stop 48h pre-op without heparin bridging (BRIDGE trial proved bridging increases bleeding); resume 48-72h post-op.",
      "strongestCompetitor": "Discontinue apixaban 5 days prior to surgery and initiate therapeutic subcutaneous enoxaparin 1 mg/kg twice daily bridging until 12 hours before surgery",
      "exclusionFinding": "Heparin bridging is contraindicated in DOAC patients because it triples major bleeding without preventing stroke.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0417",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Heart Failure with Reduced Ejection Fraction (HFrEF) Foundational GDMT",
    "subtopic": "Four Pillars of GDMT, ARNI 36-Hour Washout, Spironolactone and SGLT2i",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old woman presents to the cardiology clinic for optimization of newly diagnosed heart failure with reduced ejection fraction (HFrEF). Two weeks ago, she presented with exertional dyspnea, orthopnea, and bilateral ankle edema. Transthoracic echocardiogram revealed global left ventricular hypokinesis with an LVEF of 28% and an enlarged left ventricular end-diastolic diameter of 62 mm. Coronary angiography demonstrated angiographically normal coronary arteries, confirming non-ischemic dilated cardiomyopathy. In the hospital, she was initiated on oral lisinopril 10 mg daily, oral carvedilol 6.25 mg twice daily, and oral furosemide 20 mg daily. Today, her symptoms are well-compensated (NYHA Class II). Vital signs demonstrate blood pressure of 122/76 mm Hg and heart rate of 68/min. Physical examination reveals clear lungs, normal jugular venous pressure (6 cm H2O), no S3 gallop, and no peripheral edema. Laboratory evaluation shows serum potassium of 4.2 mEq/L and serum creatinine of 1.0 mg/dL (estimated GFR 78 mL/min).\n\nAccording to current ACC/AHA/HFSA guidelines, which of the following represents the most appropriate next step in optimizing guideline-directed medical therapy (GDMT) to reduce cardiovascular mortality and heart failure hospitalizations?",
    "choices": [
      [
        "Discontinue lisinopril with a mandatory 36-hour washout period before initiating sacubitril-valsartan (ARNI), add an SGLT2 inhibitor (dapagliflozin or empagliflozin), and add a mineralocorticoid receptor antagonist (spironolactone), establishing all four foundational pillars of GDMT",
        "The contemporary management of Heart Failure with reduced Ejection Fraction (HFrEF; LVEF <= 40%) is anchored by the 'FOUR FOUNDATIONAL PILLARS OF GDMT', which should be instituted promptly and titrated aggressively because quadruple therapy reduces all-cause mortality by over 60-70% compared to historical therapy: (1) PILLAR 1: ANGIOTENSIN RECEPTOR-NEPRILYSIN INHIBITOR (ARNI: sacubitril-valsartan). ARNI is preferred over ACE inhibitors or ARBs based on the landmark PARADIGM-HF trial, which demonstrated a 20% relative reduction in cardiovascular death and HF hospitalization compared to enalapril. MANDATORY SAFETY RULE: When transitioning a patient from an ACE inhibitor to an ARNI, A MANDATORY 36-HOUR WASHOUT PERIOD IS REQUIRED. Both ACE and neprilysin degrade bradykinin; concurrent inhibition causes massive bradykinin accumulation and life-threatening angioedema. (A washout is not required when switching from an ARB). (2) PILLAR 2: EVIDENCE-BASED BETA-BLOCKER (carvedilol, metoprolol succinate, or bisoprolol). Initiated in clinically stable, non-decompensated patients and titrated to target doses. (3) PILLAR 3: MINERALOCORTICOID RECEPTOR ANTAGONIST (MRA: spironolactone or eplerenone). Proven in RALES and EMPHASIS-HF to reduce mortality in HFrEF with eGFR > 30 mL/min and K+ < 5.0 mEq/L. (4) PILLAR 4: SGLT2 INHIBITOR (dapagliflozin or empagliflozin). Landmark trials (DAPA-HF, EMPEROR-Reduced) proved SGLT2 inhibitors reduce cardiovascular death and HF hospitalizations by 25-30% in HFrEF, REGARDLESS OF THE PRESENCE OR ABSENCE OF DIABETES MELLITUS."
      ],
      [
        "Immediately switch lisinopril to sacubitril-valsartan without a washout period, while holding beta-blocker titration until LVEF normalizes",
        "Omitting the 36-hour washout when switching from an ACE inhibitor to an ARNI leads to massive bradykinin accumulation and fatal angioedema; beta-blockers must be maintained."
      ],
      [
        "Add oral digoxin 0.25 mg daily as first-line therapy before adding aldosterone antagonists or SGLT2 inhibitors",
        "Digoxin does not reduce overall mortality in heart failure (DIG trial); it is reserved as a third-line agent for persistent symptoms or rate control in AF, whereas MRAs and SGLT2 inhibitors have definitive mortality benefits."
      ],
      [
        "Discontinue carvedilol immediately because beta-blockers are negative inotropes that reduce left ventricular ejection fraction",
        "Beta-blockers are a foundational pillar of HFrEF therapy that reduce mortality by 35% through blunting chronic sympathetic neurohormonal cardiotoxicity; discontinuing them increases mortality."
      ],
      [
        "Maintain current triple therapy unchanged and defer any medication changes until repeat echocardiography in 12 months",
        "Deferring foundational GDMT (ARNI, MRA, SGLT2i) deprives the patient of proven, immediate 60-70% reductions in cardiovascular death and prevents reverse ventricular remodeling."
      ]
    ],
    "rationale": "HFrEF (LVEF <= 40%) requires rapid optimization of the 4 foundational pillars of GDMT: (1) ARNI (sacubitril-valsartan; requires a mandatory 36-hour washout from ACE inhibitors to prevent bradykinin-mediated angioedema), (2) Evidence-based beta-blocker (carvedilol, metoprolol succinate), (3) Mineralocorticoid receptor antagonist (spironolactone/eplerenone), and (4) SGLT2 inhibitor (dapagliflozin/empagliflozin, effective with or without diabetes). Quadruple therapy reduces mortality by > 60%. Digoxin has no mortality benefit. Beta-blockers must not be stopped.",
    "metadata": {
      "shortSolution": "Newly diagnosed HFrEF requires 4 pillars of GDMT: switch lisinopril to ARNI (with 36h washout to prevent angioedema), add spironolactone, and add SGLT2 inhibitor alongside carvedilol.",
      "competingChoice": "Immediately switch lisinopril to sacubitril-valsartan without a washout period, while holding beta-blocker titration until LVEF normalizes",
      "exclusionFinding": "Switching from ACEi to ARNI without a 36-hour washout causes dual inhibition of bradykinin breakdown and fatal angioedema.",
      "pedagogicalValue": "Mastering the 4 pillars of HFrEF GDMT (ARNI, beta-blocker, MRA, SGLT2i) and the mandatory 36-hour washout period when switching from an ACE inhibitor to an ARNI.",
      "citations": [
        "Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2022;145(18):e895-e1032. PMID: 35363499.",
        "McMurray JJ, Packer M, Desai AS, et al. Angiotensin-neprilysin inhibition versus enalapril in heart failure. N Engl J Med. 2014;371(11):993-1004. PMID: 25176015."
      ]
    },
    "critique": {
      "shortestValidSolution": "HFrEF -> 4 pillars of GDMT: switch ACEi to ARNI (36h washout mandatory) + beta-blocker + MRA + SGLT2i.",
      "strongestCompetitor": "Immediately switch lisinopril to sacubitril-valsartan without a washout period, while holding beta-blocker titration until LVEF normalizes",
      "exclusionFinding": "Omitting the 36-hour ACEi-to-ARNI washout causes severe angioedema from bradykinin accumulation.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0418",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Secondary Prevention of Atherosclerotic Ischemic Stroke",
    "subtopic": "High-Intensity Statin Therapy, SPARCL Trial Evidence, LDL Threshold < 70 mg/dL",
    "provisionalDifficulty": 5,
    "stem": "A 63-year-old man presents to the clinic 4 weeks following discharge from the hospital for an acute non-cardioembolic ischemic stroke. During hospitalization, he experienced sudden right-sided hemiparesis; brain MRI confirmed an acute territorial infarction within the distribution of the left middle cerebral artery. Diagnostic vascular imaging with CT angiography revealed a non-stenosing, ulcerated atherosclerotic plaque (40% diameter stenosis) at the bifurcation of the left internal carotid artery. Echocardiography, continuous inpatient telemetry, and 30-day outpatient event monitoring ruled out atrial fibrillation and cardiogenic embolism. He currently takes oral aspirin 81 mg daily and lisinopril 20 mg daily. Blood pressure is 126/74 mm Hg and heart rate is 68/min. Neurological examination reveals residual mild right pronator drift with 4+/5 strength in the right hand. Fasting lipid panel demonstrates:\n- Total cholesterol: 168 mg/dL\n- Triglycerides: 140 mg/dL\n- HDL cholesterol: 44 mg/dL\n- LDL cholesterol: 96 mg/dL\n\nBased on landmark randomized clinical trial evidence (the SPARCL trial) and current AHA/ASA secondary stroke prevention guidelines, which of the following represents the most appropriate lipid-lowering strategy for this patient?",
    "choices": [
      [
        "Initiate high-intensity statin therapy with oral atorvastatin 80 mg daily (targeting an LDL-C reduction >= 50% and an absolute LDL-C level < 70 mg/dL), independent of his baseline LDL-C concentration",
        "Secondary stroke prevention in patients with ischemic stroke or TIA of atherosclerotic origin is guided by definitive trial evidence: (1) LANDMARK SPARCL TRIAL (NEJM 2006): The Stroke Prevention by Aggressive Reduction in Cholesterol Levels (SPARCL) trial randomized > 4,700 patients with recent stroke or TIA and NO prior coronary heart disease to high-intensity atorvastatin 80 mg daily versus placebo. High-intensity atorvastatin significantly reduced the primary endpoint of fatal or non-fatal stroke by 16% and reduced major coronary events by 35%. (2) PLEIOTROPIC AND TARGET-DRIVEN MECHANISMS: The benefit of high-intensity statins extends beyond simple lipid lowering: statins stabilize vulnerable atherosclerotic plaques, improve endothelial nitric oxide synthase activity, decrease vascular inflammation, and inhibit platelet aggregation. (3) CURRENT AHA/ASA GUIDELINE RECOMMENDATIONS: For patients <= 75 years of age with clinical atherosclerotic ischemic stroke or TIA, HIGH-INTENSITY STATIN THERAPY (atorvastatin 80 mg or rosuvastatin 20-40 mg daily) IS MANDATORY, regardless of baseline baseline LDL-C levels. The treatment goal is to achieve an LDL-C reduction of >= 50% from baseline and an absolute LDL-C < 70 mg/dL (or < 55 mg/dL in very high-risk individuals). If the LDL-C remains >= 70 mg/dL despite maximum tolerated high-intensity statin, ezetimibe should be added sequentially."
      ],
      [
        "Withhold statin therapy entirely because his baseline LDL cholesterol of 96 mg/dL is already within normal limits (< 100 mg/dL)",
        "Withholding statin therapy because baseline LDL is < 100 mg/dL is a critical error; the SPARCL trial proved that high-intensity statins significantly reduce recurrent stroke in patients with baseline LDL < 100 mg/dL through plaque stabilization."
      ],
      [
        "Initiate low-intensity pravastatin 20 mg daily to avoid potential statin-associated muscle symptoms",
        "Low-intensity statins fail to achieve the required >= 50% LDL reduction or target < 70 mg/dL, and did not demonstrate stroke reduction in randomized trials; high-intensity statin therapy is guideline-mandated."
      ],
      [
        "Initiate oral fenofibrate 145 mg daily as first-line monotherapy to optimize HDL and triglycerides",
        "Fibrates do not reduce recurrent ischemic stroke or all-cause mortality in clinical trials and are not indicated as first-line therapy for secondary stroke prevention."
      ],
      [
        "Initiate subcutaneous PCSK9 inhibitor monotherapy (evolocumab) without prescribing an oral statin",
        "PCSK9 inhibitors are expensive second- or third-line agents added only when LDL remains >= 70 mg/dL despite maximum tolerated statin and ezetimibe therapy; high-intensity oral statins are the required first-line therapy."
      ]
    ],
    "rationale": "For secondary prevention of atherosclerotic ischemic stroke or TIA, AHA/ASA guidelines mandate high-intensity statin therapy (atorvastatin 80 mg daily) targeting an LDL reduction >= 50% and an absolute LDL < 70 mg/dL, independent of baseline cholesterol levels. The landmark SPARCL trial proved that high-intensity atorvastatin 80 mg significantly reduces recurrent stroke and cardiovascular events in stroke patients even when baseline LDL is < 100 mg/dL, due to plaque stabilization and pleiotropic endothelial effects.",
    "metadata": {
      "shortSolution": "Secondary stroke prevention after atherosclerotic ischemic stroke requires high-intensity statin (atorvastatin 80 mg daily) to achieve LDL < 70 mg/dL, regardless of baseline LDL (SPARCL trial).",
      "competingChoice": "Withhold statin therapy entirely because his baseline LDL cholesterol of 96 mg/dL is already within normal limits (< 100 mg/dL)",
      "exclusionFinding": "SPARCL trial proved that high-intensity statins reduce stroke recurrence regardless of baseline LDL; withholding statins based on 'normal' baseline LDL causes recurrent stroke.",
      "pedagogicalValue": "Recognizing the mandate for high-intensity statin therapy (atorvastatin 80 mg) in secondary stroke prevention regardless of baseline LDL cholesterol (SPARCL trial).",
      "citations": [
        "Amarenco P, Bogousslavsky J, Callahan A 3rd, et al. High-dose atorvastatin after stroke or transient ischemic attack. N Engl J Med. 2006;355(6):549-559. PMID: 16899775.",
        "Kleindorfer DO, Towfighi A, Chaturvedi S, et al. 2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack: A Guideline From the American Heart Association/American Stroke Association. Stroke. 2021;52(7):e364-e467. PMID: 34024117."
      ]
    },
    "critique": {
      "shortestValidSolution": "Atherosclerotic ischemic stroke -> high-intensity statin (atorvastatin 80 mg) targeting LDL < 70 mg/dL, regardless of baseline LDL (SPARCL trial).",
      "strongestCompetitor": "Withhold statin therapy entirely because his baseline LDL cholesterol of 96 mg/dL is already within normal limits (< 100 mg/dL)",
      "exclusionFinding": "SPARCL trial showed benefit independent of baseline LDL; high-intensity statin is mandatory for secondary prevention.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0419",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Diabetic Peripheral Neuropathy Pharmacotherapy",
    "subtopic": "First-Line Non-Opioid Agents, Duloxetine vs Pregabalin vs Gabapentin, Opioid Stewardship",
    "provisionalDifficulty": 4,
    "stem": "A 59-year-old woman with a 12-year history of type 2 diabetes mellitus presents to the outpatient clinic with painful burning, tingling, and electric-shock sensations in both feet that have progressively worsened over the past 8 months. The pain is severe (rated 8/10), is worst at night, and frequently prevents her from falling asleep. She describes that even the light touch of bedsheets touching her toes produces sharp, distressing pain (allodynia). Physical examination reveals normal peripheral arterial pulses. Neurological examination demonstrates symmetric loss of vibration sensation (using a 128-Hz tuning fork) and loss of protective pressure sensation (using a 10-g Semmes-Weinstein monofilament) in a stocking distribution extending to the mid-shins bilaterally. Ankle deep tendon reflexes are absent bilaterally. Laboratory evaluation reveals HbA1c of 8.2% and normal serum creatinine and liver enzymes. She has not previously taken medications for neuropathic pain and asks for a prescription for tramadol or oxycodone to obtain immediate relief.\n\nAccording to current American Academy of Neurology (AAN) and American Diabetes Association (ADA) guidelines, which of the following represents the most appropriate initial pharmacological approach for this patient's neuropathic pain?",
    "choices": [
      [
        "Initiate oral duloxetine (an SNRI, 30 to 60 mg once daily) or oral pregabalin (an alpha-2-delta calcium channel ligand, 50 to 100 mg three times daily), while declining opioid analgesics",
        "Diabetic Peripheral Neuropathic Pain (DPNP) affects up to 25-30% of patients with diabetes and severely degrades quality of life and sleep architecture. (1) FIRST-LINE EVIDENCE-BASED PHARMACOTHERAPY (AAN / ADA GUIDELINES): Multiple high-level randomized controlled trials establish three distinct drug classes as FIRST-LINE AGENTS for DPNP: (a) SEROTONIN-NOREPINEPHRINE REUPTAKE INHIBITORS (SNRIs): DULOXETINE (60 mg daily) or venlafaxine. Duloxetine enhances descending inhibitory pain pathways in the spinal dorsal horn by inhibiting presynaptic reuptake of both serotonin and norepinephrine; it is FDA-approved and highly effective for painful diabetic neuropathy. (b) VOLTAGE-GATED CALCIUM CHANNEL LIGANDS (GABAPENTINOIDS): PREGABALIN (150-300 mg daily) or GABAPENTIN. They bind the alpha-2-delta auxiliary subunit of presynaptic voltage-gated calcium channels, reducing calcium influx and suppressing excitatory neurotransmitter release (glutamate, substance P, CGRP) in dorsal horn neurons. (c) TRICYCLIC ANTIDEPRESSANTS (TCAs): Amitriptyline or nortriptyline (effective, but limited by anticholinergic and cardiac toxicity). (2) OPIOID STEWARDSHIP AND HARMS: AAN and ADA guidelines EXPLICITLY CONDEMN OPIOIDS (including tramadol, oxycodone, and hydrocodone) for chronic neuropathic pain. High-quality systematic reviews prove that opioids lack long-term efficacy in chronic neuropathic pain, carry high risks of tolerance, physiological dependence, addiction, and fatal overdose, and paradoxically trigger opioid-induced hyperalgesia."
      ],
      [
        "Prescribe oral tramadol 50 mg three times daily as first-line therapy for immediate neuropathic pain relief",
        "Opioids and tramadol lack long-term efficacy in neuropathic pain, cause physical dependence and addiction, and are explicitly discouraged as first-line therapy by AAN/ADA guidelines."
      ],
      [
        "Prescribe oral ibuprofen 800 mg three times daily and acetaminophen 1,000 mg three times daily",
        "NSAIDs and acetaminophen target inflammatory nociceptive pain; they have zero efficacy against the centralized neuropathic ectopic firing of diabetic neuropathy and risk acute kidney injury."
      ],
      [
        "Administer intramuscular vitamin B12 injections weekly despite normal serum B12 levels",
        "In patients with normal baseline vitamin B12 concentrations, parenteral vitamin B12 supplementation provides zero therapeutic benefit for diabetic axonal neuropathy."
      ],
      [
        "Perform emergent bilateral lumbar sympathetic nerve blocks as initial therapy",
        "Invasive sympathetic nerve blocks carry procedural risks and are reserved for complex regional pain syndrome; they have no role in typical symmetrical diabetic sensorimotor polyneuropathy."
      ]
    ],
    "rationale": "Painful diabetic peripheral neuropathy is treated first-line with an SNRI (duloxetine), a gabapentinoid (pregabalin or gabapentin), or a secondary TCA (nortriptyline) based on AAN and ADA guidelines. Duloxetine enhances descending inhibitory pain pathways, while pregabalin/gabapentin block presynaptic alpha-2-delta calcium channels. Opioids (including tramadol and oxycodone) are explicitly discouraged due to lack of long-term efficacy, dependence, and addiction risks. NSAIDs are ineffective for neuropathic pain.",
    "metadata": {
      "shortSolution": "Painful diabetic neuropathy with allodynia requires first-line oral duloxetine or pregabalin; opioid analgesics (tramadol, oxycodone) should be declined due to lack of efficacy and addiction risks.",
      "competingChoice": "Prescribe oral tramadol 50 mg three times daily as first-line therapy for immediate neuropathic pain relief",
      "exclusionFinding": "AAN/ADA guidelines recommend against opioids/tramadol for chronic neuropathic pain due to lack of long-term efficacy and high abuse/dependence risks; duloxetine and pregabalin are first-line.",
      "pedagogicalValue": "Selecting evidence-based first-line agents for diabetic neuropathy (duloxetine or pregabalin) and practicing opioid stewardship by avoiding opioids in chronic neuropathic pain.",
      "citations": [
        "Price R, Smith D, Franklin G, et al. Oral and Topical Treatment of Painful Diabetic Neuropathy: Practice Guideline Update Summary: Report of the AAN Guideline Subcommittee. Neurology. 2022;98(1):31-43. PMID: 34965987.",
        "Pop-Busui R, Boulton AJ, Feldman EL, et al. Diabetic Neuropathy: A Position Statement by the American Diabetes Association. Diabetes Care. 2017;40(1):136-154. PMID: 27999003."
      ]
    },
    "critique": {
      "shortestValidSolution": "Painful diabetic neuropathy -> first-line oral duloxetine (SNRI) or pregabalin/gabapentin; avoid opioids.",
      "strongestCompetitor": "Prescribe oral tramadol 50 mg three times daily as first-line therapy for immediate neuropathic pain relief",
      "exclusionFinding": "Opioids lack long-term efficacy in neuropathic pain and carry severe addiction risks; guidelines recommend non-opioid SNRIs/gabapentinoids.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0420",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Chronic Venous Insufficiency and Stasis Dermatitis",
    "subtopic": "Graduated Compression Therapy, Leg Elevation, Avoidance of Topical Sensitizers",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old woman with a history of obesity (BMI 34 kg/m2) and two prior uncomplicated pregnancies presents to the ambulatory clinic with a 6-month history of progressive aching, heaviness, and swelling in both lower legs that worsens toward the end of the day after standing at her retail job. Over the past 2 months, she has noticed pruritic, reddish-brown skin discoloration around both lower calves and ankles. Physical examination reveals bilateral pitting edema (2+) of the lower extremities extending from the feet to the mid-calves. Over the medial supramalleolar regions bilaterally, the skin is thickened, hyperpigmented with dense reddish-brown hemosiderin macules, and mildly erythematous with fine superficial scaling. There are prominent dilated, tortuous superficial varicose veins along the medial calves. Dorsalis pedis and posterior tibial arterial pulses are brisk (2+) bilaterally, and capillary refill is < 2 seconds. There are no open ulcerations. Duplex ultrasound reveals deep and superficial venous valvular reflux exceeding 1,000 milliseconds in the great saphenous veins bilaterally, with no evidence of deep venous thrombosis.\n\nWhich of the following represents the most appropriate initial management approach for this patient?",
    "choices": [
      [
        "Prescribe knee-high graduated compression stockings (20 to 30 mm Hg), recommend scheduled daily lower-extremity elevation above heart level, and apply bland emollient moisturizers, while avoiding over-the-counter topical antibiotic ointments",
        "Chronic Venous Insufficiency (CVI) and Stasis Dermatitis result from venous hypertension caused by incompetent venous valves, deep venous obstruction, or calf muscle pump failure. (1) PATHOPHYSIOLOGY: Sustained ambulatory venous hypertension causes retrograde pooling, increased capillary hydrostatic pressure, microvascular dilation, and leakage of fluid and erythrocytes into the dermis. Extravasated erythrocytes undergo mechanical lysis, releasing hemoglobin that macrophages degrade into HEMOSIDERIN pigment, producing the characteristic reddish-brown, speckled cutaneous hyperpigmentation. Extravasated fibrin and inflammatory cytokines provoke dermal sclerosis (lipodermatosclerosis), pruritus, and stasis dermatitis. (2) FIRST-LINE CONSERVATIVE MANAGEMENT: (a) GRADUATED COMPRESSION THERAPY: Knee-high graduated compression stockings (20-30 mm Hg for mild-to-moderate disease, 30-40 mm Hg for severe edema/ulceration) are the undisputed cornerstone of treatment. Compression counteracts venous hydrostatic hypertension, improves calf muscle pump efficacy, accelerates deep venous return, and reduces edema. (b) LEG ELEVATION: Elevating legs above the level of the heart for 30 minutes 3 to 4 times daily utilizes gravity to decompress congested venous beds. (c) BLAND EMOLLIENTS AND BARRIER RESTORATION: Preserving the epidermal skin barrier with petroleum jelly or ceramide-based creams prevents fissuring and secondary bacterial infection. (3) AVOIDANCE OF TOPICAL SENSITIZERS: Stasis dermatitis skin exhibits severe barrier disruption and immunological hyper-reactivity. Over-the-counter topical antibiotics (especially NEOMYCIN and BACITRACIN) and fragrances have an extremely high rate (> 50-60%) of inducing severe Allergic Contact Dermatitis, which dramatically exacerbates skin erythema, weeping, and ulceration."
      ],
      [
        "Apply topical neomycin and polymyxin B ointment twice daily to both legs to treat subclinical bacterial colonization",
        "Topical neomycin and bacitracin are among the leading causes of severe allergic contact dermatitis in stasis dermatitis; topical antibiotics provide zero benefit and worsen cutaneous inflammation."
      ],
      [
        "Initiate oral cephalexin 500 mg four times daily for 14 days for presumed bilateral lower-extremity cellulitis",
        "Stasis dermatitis is routinely misdiagnosed as bilateral cellulitis ('pseudocellulitis'); true cellulitis is virtually always unilateral and acute, whereas stasis dermatitis is bilateral, chronic, and non-infectious."
      ],
      [
        "Initiate oral furosemide 40 mg daily as primary monotherapy for venous edema",
        "Diuretics do not correct localized venous valvular reflux or venous hypertension; they cause systemic intravascular volume depletion, prerenal azotemia, and electrolyte disturbances without resolving venous stasis."
      ],
      [
        "Immediate referral for emergent surgical venous stripping and ligation under general anesthesia",
        "Conservative therapy with graduated compression stockings, elevation, and skin care must be trialed for several months; surgical or endovenous ablation is reserved for refractory symptoms or non-healing ulcers."
      ]
    ],
    "rationale": "Chronic venous insufficiency and stasis dermatitis result from ambulatory venous hypertension and extravasation of RBCs (hemosiderin staining). First-line therapy is conservative: (1) Graduated compression stockings (20-30 mm Hg), (2) Leg elevation above heart level, and (3) Bland emollients to maintain skin barrier. Topical antibiotics (neomycin, bacitracin) are strictly avoided because compromised stasis skin is prone to severe allergic contact dermatitis. It is bilateral and chronic, distinguishing it from cellulitis (which is almost always unilateral). Diuretics do not treat venous reflux.",
    "metadata": {
      "shortSolution": "Bilateral hemosiderin staining, varicose veins, and venous reflux is stasis dermatitis; managed with graduated compression stockings (20-30 mm Hg), leg elevation, and emollients (avoid topical neomycin).",
      "competingChoice": "Initiate oral cephalexin 500 mg four times daily for 14 days for presumed bilateral lower-extremity cellulitis",
      "exclusionFinding": "Cellulitis is almost always unilateral; bilateral chronic erythema with hemosiderin is stasis dermatitis (pseudocellulitis) requiring compression, not systemic antibiotics.",
      "pedagogicalValue": "Differentiating stasis dermatitis from cellulitis (bilateral vs unilateral) and knowing the cornerstone of management: compression stockings, elevation, and avoiding topical contact sensitizers.",
      "citations": [
        "Sundaresan S, Migden MR, Silapunt S. Stasis Dermatitis: Pathophysiology, Evaluation, and Management. Am J Clin Dermatol. 2017;18(3):383-390. PMID: 28035329.",
        "O'Donnell TF Jr, Passman MA, Marston WA, et al. Management of venous leg ulcers: clinical practice guidelines of the Society for Vascular Surgery(R) and the American Venous Forum. J Vasc Surg. 2014;60(2 Suppl):3S-59S. PMID: 24965652."
      ]
    },
    "critique": {
      "shortestValidSolution": "Stasis dermatitis (bilateral hemosiderin + edema) -> compression stockings (20-30 mm Hg) + leg elevation + emollients; avoid topical antibiotics.",
      "strongestCompetitor": "Initiate oral cephalexin 500 mg four times daily for 14 days for presumed bilateral lower-extremity cellulitis",
      "exclusionFinding": "Bilateral involvement is stasis dermatitis, not cellulitis; antibiotics are ineffective, and compression is the definitive therapy.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0421",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Adult Pneumococcal Immunization Recommendations",
    "subtopic": "CDC ACIP Guidelines, PCV20 Monotherapy vs PCV15-PPSV23 Sequence, Adults >= 65 Years",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old woman presents to the ambulatory internal medicine clinic for a routine annual preventive health examination. She has a history of mild osteoarthritis of the hands but has no chronic heart, lung, liver, or renal disease, and does not have diabetes mellitus. She does not use immunosuppressive medications and has never undergone splenectomy. She has never received any pneumococcal vaccine. Vital signs and physical examination are completely normal.\n\nAccording to current Centers for Disease Control and Prevention (CDC) Advisory Committee on Immunization Practices (ACIP) guidelines, which of the following represents the recommended pneumococcal vaccination strategy for this patient?",
    "choices": [
      [
        "Administer a single dose of 20-valent pneumococcal conjugate vaccine (PCV20) alone, OR administer a single dose of 15-valent pneumococcal conjugate vaccine (PCV15) followed at least 1 year later by a dose of 23-valent pneumococcal polysaccharide vaccine (PPSV23)",
        "The Advisory Committee on Immunization Practices (ACIP) updated adult pneumococcal immunization guidelines following the licensure of higher-valency pneumococcal conjugate vaccines: (1) TARGET POPULATION: All immunocompetent adults >= 65 years of age who have not previously received a pneumococcal conjugate vaccine or whose vaccination history is unknown. (2) SIMPLIFIED TWO-OPTION REGIMEN: (a) OPTION 1 (PREFERRED FOR SIMPLICITY): Administer a SINGLE DOSE of 20-valent Pneumococcal Conjugate Vaccine (PCV20) alone. No subsequent pneumococcal vaccines (such as PPSV23) are required following PCV20 because PCV20 provides broader conjugate coverage and induces robust T-cell-dependent immunological memory. (b) OPTION 2: Administer a single dose of 15-valent Pneumococcal Conjugate Vaccine (PCV15) FOLLOWED by a dose of 23-valent Pneumococcal Polysaccharide Vaccine (PPSV23) administered AT LEAST 1 YEAR LATER (an interval of >= 8 weeks can be used for immunocompromised patients, but >= 1 year is standard for immunocompetent adults >= 65). (3) OBSOLESCENCE OF HISTORICAL REGIMENS: Historical regimens utilizing PCV13 followed by PPSV23 in series are no longer recommended for vaccine-naive adults because PCV15 and PCV20 contain serotypes with higher contemporary disease burden. PPSV23 should NEVER be given alone as initial monotherapy in conjugate-naive adults."
      ],
      [
        "Administer a single dose of 23-valent pneumococcal polysaccharide vaccine (PPSV23) alone, with no conjugate vaccine needed",
        "PPSV23 alone induces T-cell-independent B-cell responses without immunological memory; ACIP guidelines mandate a conjugate vaccine (PCV20 or PCV15) as the foundation of adult vaccination."
      ],
      [
        "Administer 13-valent pneumococcal conjugate vaccine (PCV13) followed 8 weeks later by PCV20",
        "PCV13 has been replaced by PCV15 and PCV20; furthermore, giving two conjugate vaccines in series is redundant and contrary to ACIP recommendations."
      ],
      [
        "Withhold pneumococcal vaccination until age 75 unless high-risk immunocompromising conditions develop",
        "Pneumococcal immunization is universally recommended for all adults beginning at age 65 regardless of medical conditions, due to age-related immunosenescence and high invasive pneumococcal disease risk."
      ],
      [
        "Administer PCV20 followed 8 weeks later by a mandatory booster dose of PPSV23",
        "When PCV20 is administered, no subsequent dose of PPSV23 is indicated; PCV20 is complete as a standalone single-dose vaccination."
      ]
    ],
    "rationale": "CDC ACIP guidelines recommend pneumococcal vaccination for all adults >= 65 years who are vaccine-naive: (1) A single dose of PCV20 alone (no subsequent PPSV23 needed), OR (2) PCV15 followed by PPSV23 >= 1 year later. PCV20 provides comprehensive conjugate protection inducing T-cell dependent memory. PPSV23 alone is no longer recommended as initial therapy in vaccine-naive adults.",
    "metadata": {
      "shortSolution": "Vaccine-naive 66-year-old requires either a single dose of PCV20 alone OR PCV15 followed >= 1 year later by PPSV23 according to updated CDC ACIP guidelines.",
      "competingChoice": "Administer a single dose of 23-valent pneumococcal polysaccharide vaccine (PPSV23) alone, with no conjugate vaccine needed",
      "exclusionFinding": "PPSV23 alone induces T-independent responses without durable memory; ACIP guidelines mandate a conjugate vaccine (PCV20 alone or PCV15 followed by PPSV23).",
      "pedagogicalValue": "Mastering the updated ACIP pneumococcal vaccination algorithm for adults >= 65: PCV20 alone or PCV15 followed by PPSV23 >= 1 year later.",
      "citations": [
        "Kobayashi M, Farrar JL, Gierke R, et al. Use of 15-Valent Pneumococcal Conjugate Vaccine and 20-Valent Pneumococcal Conjugate Vaccine Among U.S. Adults: Updated Recommendations of the Advisory Committee on Immunization Practices - United States, 2022. MMWR Morb Mortal Wkly Rep. 2022;71(4):109-117. PMID: 35085226.",
        "Matanock A, Lee G, Gierke R, et al. Use of 13-Valent Pneumococcal Conjugate Vaccine and 23-Valent Pneumococcal Polysaccharide Vaccine Among Adults Aged >=65 Years: Updated Recommendations of the Advisory Committee on Immunization Practices. MMWR Morb Mortal Wkly Rep. 2019;68(46):1069-1075. PMID: 31751994."
      ]
    },
    "critique": {
      "shortestValidSolution": "Adult >= 65 vaccine-naive -> PCV20 alone OR PCV15 followed >= 1 year later by PPSV23 (ACIP guidelines).",
      "strongestCompetitor": "Administer a single dose of 23-valent pneumococcal polysaccharide vaccine (PPSV23) alone, with no conjugate vaccine needed",
      "exclusionFinding": "PPSV23 alone is no longer recommended for initial vaccination; conjugate vaccines (PCV20 or PCV15) are mandatory.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0422",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Colorectal Cancer Screening Modalities and Age Thresholds",
    "subtopic": "USPSTF Age 45 Recommendation, Non-Invasive Tests, Mandatory Follow-up Colonoscopy",
    "provisionalDifficulty": 4,
    "stem": "A 46-year-old man presents to the primary care clinic for an annual preventive checkup. He has no chronic medical conditions, takes no medications, and feels completely well. He has no gastrointestinal symptoms, changes in bowel habits, rectal bleeding, unexplained weight loss, or abdominal pain. Review of family history reveals that his parents and two siblings are healthy, with no family history of colorectal cancer, advanced adenomas, inflammatory bowel disease, or hereditary cancer syndromes (Lynch syndrome or familial adenomatous polyposis). Physical examination is normal. The patient asks whether he needs screening for colorectal cancer.\n\nAccording to current US Preventive Services Task Force (USPSTF) guidelines, which of the following represents the most appropriate colorectal cancer screening recommendation for this average-risk patient?",
    "choices": [
      [
        "Initiate routine colorectal cancer screening now (at age 45) using any of the guideline-approved screening strategies (e.g., optical colonoscopy every 10 years, annual fecal immunochemical test [FIT], or stool FIT-DNA every 3 years), with the understanding that any positive non-colonoscopic screening test mandates a timely diagnostic colonoscopy",
        "Colorectal Cancer (CRC) is the third leading cause of cancer-related mortality in the United States. (1) USPSTF 2021 UPDATED SCREENING RECOMMENDATION: The USPSTF lowered the recommended age to INITIATE ROUTINE SCREENING FROM AGE 50 TO AGE 45 for all average-risk adults (Grade B recommendation for ages 45-49, Grade A for ages 50-75). This shift was driven by robust epidemiological modeling demonstrating a dramatic, progressive rise in young-onset colorectal cancer incidence over the past two decades. (2) APPROVED SCREENING STRATEGIES AND INTERVALS: Several screening modalities have demonstrated clinical efficacy: (a) DIRECT VISUALIZATION TESTS: Optical colonoscopy every 10 years (the gold standard; allows simultaneous visualization and polypectomy of precancerous adenomas), or Flexible sigmoidoscopy every 5 years (or every 10 years plus annual FIT), or CT colonography every 5 years. (b) STOOL-BASED TESTS: Annual Fecal Immunochemical Test (FIT, high sensitivity for human globin), or Stool FIT-DNA (Cologuard, multi-target sDNA plus FIT) every 3 years, or annual high-sensitivity guaiac-based fecal occult blood test (gFOBT). (3) MANDATORY CLINICAL RULE FOR POSITIVE STOOL TESTS: If any non-invasive stool test (FIT, FIT-DNA) or CT colonography yields a positive result, A TIMELY DIAGNOSTIC COLONOSCOPY IS MANDATORY. Non-invasive tests are screening tools, not definitive diagnoses; failing to follow up a positive stool test with colonoscopy leads to delayed detection of advanced colorectal neoplasia."
      ],
      [
        "Defer all colorectal cancer screening until age 50, as routine screening prior to age 50 is not cost-effective or recommended for average-risk individuals",
        "The USPSTF officially lowered the screening initiation age to 45 years in 2021; deferring screening until age 50 misses early resectable neoplasia in young adults."
      ],
      [
        "If an annual fecal immunochemical test (FIT) is positive, repeat the FIT in 1 month and perform colonoscopy only if the second test is positive",
        "Repeating a stool test after a positive result is a dangerous clinical error; any single positive FIT mandates immediate diagnostic colonoscopy to evaluate for colorectal cancer or large adenomas."
      ],
      [
        "Perform optical colonoscopy every 5 years for average-risk individuals",
        "For average-risk individuals with a completely normal screening colonoscopy, the recommended screening interval is 10 years, not 5 years; performing colonoscopy every 5 years represents overutilization."
      ],
      [
        "Order serum carcinoembryonic antigen (CEA) annually as a non-invasive screening modality",
        "Serum CEA has poor sensitivity and specificity for early colorectal neoplasia and is strictly contraindicated as a screening test; CEA is used exclusively for monitoring recurrence in established disease."
      ]
    ],
    "rationale": "The USPSTF updated colorectal cancer screening guidelines to recommend starting routine screening at age 45 (lowered from age 50) for all average-risk adults (Grade B recommendation for ages 45-49). Acceptable strategies include colonoscopy every 10 years, annual FIT, or FIT-DNA every 3 years. Crucially, any positive non-colonoscopic screening test (FIT or FIT-DNA) mandates a timely diagnostic colonoscopy (never repeat the stool test). Colonoscopy interval for normal screening is 10 years.",
    "metadata": {
      "shortSolution": "Average-risk 46-year-old should initiate CRC screening now (USPSTF lowered starting age to 45); acceptable options include colonoscopy q10y or annual FIT, with any positive stool test requiring colonoscopy.",
      "competingChoice": "Defer all colorectal cancer screening until age 50, as routine screening prior to age 50 is not cost-effective or recommended for average-risk individuals",
      "exclusionFinding": "USPSTF officially lowered the starting age for average-risk CRC screening to 45 years in 2021 due to rising young-onset CRC.",
      "pedagogicalValue": "Knowing the updated USPSTF starting age for colorectal cancer screening (age 45) and the requirement for immediate colonoscopy if any stool test is positive.",
      "citations": [
        "US Preventive Services Task Force. Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325(19):1965-1977. PMID: 34003218.",
        "Wolf AMD, Fontham ETH, Church TR, et al. Colorectal cancer screening for average-risk adults: 2018 guideline update from the American Cancer Society. CA Cancer J Clin. 2018;68(4):250-281. PMID: 29846947."
      ]
    },
    "critique": {
      "shortestValidSolution": "Average risk CRC screening starts at age 45 (USPSTF); colonoscopy q10y or annual FIT (positive FIT mandates colonoscopy).",
      "strongestCompetitor": "Defer all colorectal cancer screening until age 50, as routine screening prior to age 50 is not cost-effective or recommended for average-risk individuals",
      "exclusionFinding": "USPSTF updated guidelines lowered the starting age to 45 years.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0423",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Lung Cancer Screening with Low-Dose Computed Tomography (LDCT)",
    "subtopic": "USPSTF 2021 Criteria, 20 Pack-Year Threshold, Age 50-80, Discontinuation Criteria",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man presents to the clinic for a routine wellness visit. He has a 24 pack-year smoking history (smoked 1 pack of cigarettes daily for 24 years) but successfully quit smoking 8 years ago. He is completely asymptomatic and denies chronic cough, hemoptysis, shortness of breath, chest pain, or unintentional weight loss. His past medical history includes mild hypertension well controlled with hydrochlorothiazide 25 mg daily. Vital signs demonstrate blood pressure of 124/76 mm Hg, heart rate of 70/min, and oxygen saturation of 98% on room air. Physical examination reveals clear lungs to auscultation bilaterally. He has no other chronic medical conditions and has an active, excellent functional performance status.\n\nAccording to current US Preventive Services Task Force (USPSTF) guidelines, which of the following represents the most appropriate lung cancer screening recommendation for this patient?",
    "choices": [
      [
        "Perform annual screening for lung cancer with low-dose computed tomography (LDCT) of the chest",
        "Lung cancer is the leading cause of cancer mortality in both men and women in the United States. (1) USPSTF 2021 UPDATED SCREENING RECOMMENDATIONS: In 2021, the USPSTF expanded lung cancer screening eligibility based on the National Lung Screening Trial (NLST) and the NELSON trial: (a) AGE RANGE: Adults aged 50 to 80 years (expanded from prior 55-80); (b) SMOKING HISTORY THRESHOLD: A cumulative tobacco smoking history of >= 20 PACK-YEARS (lowered from prior 30 pack-years); AND (c) CURRENT SMOKER OR QUIT WITHIN THE PAST 15 YEARS. (2) PATIENT APPLICATION: This patient is 56 years of age (within 50-80), has a 24 pack-year smoking history (exceeds >= 20 pack-years), and quit 8 years ago (within the 15-year quit window). Therefore, he meets all objective criteria for ANNUAL SCREENING WITH LOW-DOSE COMPUTED TOMOGRAPHY (LDCT). (3) DISCONTINUATION CRITERIA: Screening should be discontinued once a person: (a) Has not smoked for 15 consecutive years; (b) Reaches age 81; OR (c) Develops a health problem that substantially limits life expectancy or the ability/willingness to undergo curative lung surgery."
      ],
      [
        "Perform annual screening with a standard two-view posterior-anterior and lateral chest radiograph",
        "Standard chest radiography (with or without sputum cytology) has no demonstrated efficacy in reducing lung cancer mortality in randomized trials and is explicitly recommended against by the USPSTF."
      ],
      [
        "Withhold lung cancer screening because the patient has not smoked for > 5 years and has accumulated < 30 pack-years",
        "Under the updated 2021 USPSTF criteria, the pack-year threshold was lowered to >= 20 pack-years and screening continues until 15 years post-quitting; this patient qualifies with 24 pack-years and 8 years since quitting."
      ],
      [
        "Order contrast-enhanced chest CT with intravenous iodinated radiocontrast every 2 years",
        "Screening is performed with LOW-DOSE UNENHANCED computed tomography (LDCT) annually to minimize radiation exposure and avoid intravenous contrast nephrotoxicity/anaphylaxis."
      ],
      [
        "Perform screening with low-dose CT once, with no subsequent imaging required if the baseline scan is normal",
        "Lung cancer screening requires ANNUAL low-dose CT examinations until 15 years post-cessation or age 81; a single normal scan does not eliminate ongoing malignant transformation risk."
      ]
    ],
    "rationale": "The 2021 USPSTF lung cancer screening guidelines recommend ANNUAL LOW-DOSE COMPUTED TOMOGRAPHY (LDCT) for adults aged 50 to 80 years who have a >= 20 pack-year smoking history and currently smoke or have quit within the past 15 years. This 56-year-old with 24 pack-years who quit 8 years ago qualifies for annual LDCT. Screening stops once quit >= 15 years, age 81, or life-limiting illness develops. Chest radiographs are ineffective for screening.",
    "metadata": {
      "shortSolution": "56-year-old with 24 pack-years who quit 8 years ago qualifies for annual low-dose CT (LDCT) lung cancer screening under updated USPSTF criteria (age 50-80, >= 20 pack-years, quit within 15 years).",
      "competingChoice": "Withhold lung cancer screening because the patient has not smoked for > 5 years and has accumulated < 30 pack-years",
      "exclusionFinding": "The 2021 USPSTF criteria lowered the threshold to >= 20 pack-years (from 30) and starting age to 50 (from 55); screening is required until 15 years after quitting.",
      "pedagogicalValue": "Mastering the updated 2021 USPSTF criteria for lung cancer screening: annual LDCT for ages 50-80 with >= 20 pack-years who smoke or quit within 15 years.",
      "citations": [
        "US Preventive Services Task Force. Screening for Lung Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325(10):962-970. PMID: 33687470.",
        "National Lung Screening Trial Research Team. Reduced lung-cancer mortality with low-dose computed tomographic screening. N Engl J Med. 2011;365(5):395-409. PMID: 21714641."
      ]
    },
    "critique": {
      "shortestValidSolution": "Age 56 + 24 pack-years + quit 8 years ago -> annual low-dose CT (LDCT) lung cancer screening (USPSTF: age 50-80, >= 20 pack-years, quit <= 15 yrs).",
      "strongestCompetitor": "Withhold lung cancer screening because the patient has not smoked for > 5 years and has accumulated < 30 pack-years",
      "exclusionFinding": "2021 USPSTF guidelines lowered threshold to >= 20 pack-years; patient qualifies for annual LDCT.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0424",
    "exam": "Step 3",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Cervical Cancer Screening Guidelines and Strategies",
    "subtopic": "USPSTF Age 30-65 Recommendations, Primary hrHPV vs Co-Testing vs Pap Alone",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old woman presents to the ambulatory women's health clinic for a routine gynecological examination. She is asymptomatic, has no abnormal vaginal bleeding or discharge, and has had no postcoital spotting. She has a history of two uncomplicated term vaginal deliveries. She has no personal history of high-grade cervical dysplasia (cervical intraepithelial neoplasia grade 2 or 3 [CIN 2/3]) or cervical cancer, is not immunocompromised, and has never had HIV infection. Review of her medical record reveals that her last cervical cancer screening was performed 5 years ago (at age 33), at which time she underwent cervical cytology (Papanicolaou smear) co-tested with high-risk human papillomavirus (hrHPV) testing; both tests were completely negative. Physical and speculum examinations reveal a normal, smooth cervix without lesions or contact bleeding.\n\nAccording to current US Preventive Services Task Force (USPSTF) and American College of Obstetricians and Gynecologists (ACOG) guidelines, which of the following represents an acceptable screening strategy for this patient today?",
    "choices": [
      [
        "Primary high-risk HPV (hrHPV) testing alone every 5 years, OR high-risk HPV co-testing combined with cervical cytology every 5 years, OR cervical cytology (Pap smear) alone every 3 years",
        "Cervical Cancer Screening guidelines (USPSTF and ACOG) are stratified by patient age for immunocompetent individuals with an intact cervix and no history of high-grade precancerous lesions: (1) WOMEN AGED 21 TO 29 YEARS: Cervical cytology (Pap smear) ALONE EVERY 3 YEARS. High-risk HPV testing (either alone or as co-testing) is STRONGLY DISCOURAGED in women < 30 years because transient, benign HPV infections are exceedingly common in this cohort and undergo spontaneous clearance; HPV testing in this group leads to unnecessary colposcopies and cervical excisional procedures without reducing cancer incidence. (2) WOMEN AGED 30 TO 65 YEARS: Guidelines offer THREE EQUALLY ACCEPTABLE EVIDENCE-BASED STRATEGIES: (a) Primary high-risk HPV (hrHPV) testing alone EVERY 5 YEARS; (b) High-risk HPV testing COMBINED WITH cervical cytology (co-testing) EVERY 5 YEARS; OR (c) Cervical cytology (Pap smear) ALONE EVERY 3 YEARS. High-risk HPV testing utilizes nucleic acid amplification targeting oncogenic viral genotypes (predominantly HPV 16 and 18, along with 12 other high-risk types). (3) DISCONTINUATION CRITERIA (AGE > 65): Screening is discontinued at age 65 if the patient has documented adequate prior negative screening (3 consecutive negative cytology tests or 2 consecutive negative co-tests/hrHPV tests within the past 10 years, with the most recent within 5 years) and no history of CIN 2+ within the past 25 years."
      ],
      [
        "Annual cervical cytology (Pap smear) combined with high-risk HPV testing performed every year",
        "Annual cervical cancer screening in an average-risk woman with prior negative tests represents overtreatment, leading to high false-positive rates, unnecessary colposcopies, and cervical procedural harms."
      ],
      [
        "Perform an immediate diagnostic colposcopy with directed cervical biopsies rather than non-invasive screening",
        "Colposcopy is a diagnostic procedure indicated only after an abnormal screening test (e.g., persistent HPV 16/18 or ASC-H/HSIL); it is never used as routine primary screening."
      ],
      [
        "Discontinue all cervical cancer screening, as having two prior normal screenings provides lifelong immunity against cervical dysplasia",
        "Cervical cancer screening must continue until age 65; discontinuing screening at age 38 leaves the patient unprotected against persistent high-risk HPV oncogenesis."
      ],
      [
        "Order serum CA-125 and pelvic ultrasound every 3 years as preferred non-invasive cervical cancer screening",
        "CA-125 and pelvic ultrasound are not approved for cervical cancer screening; they have zero sensitivity for pre-invasive cervical dysplasia and are ineffective."
      ]
    ],
    "rationale": "For average-risk women aged 30 to 65 years, USPSTF and ACOG guidelines offer three acceptable screening options: (1) Primary hrHPV testing alone every 5 years, (2) hrHPV co-testing with cytology every 5 years, or (3) Cytology alone every 3 years. Annual screening is excessive and discouraged. Women < 30 receive cytology alone every 3 years (no HPV testing). Screening stops at age 65 with adequate negative prior screening.",
    "metadata": {
      "shortSolution": "38-year-old average-risk woman due for cervical cancer screening can receive primary hrHPV alone q5y, hrHPV co-testing q5y, or Pap cytology alone q3y (USPSTF/ACOG).",
      "competingChoice": "Annual cervical cytology (Pap smear) combined with high-risk HPV testing performed every year",
      "exclusionFinding": "Annual screening represents excessive low-value care; USPSTF guidelines recommend 5-year intervals for HPV/co-testing and 3-year intervals for Pap alone.",
      "pedagogicalValue": "Mastering the three guideline-approved cervical cancer screening strategies for women aged 30 to 65 years (hrHPV q5y, co-test q5y, or Pap q3y).",
      "citations": [
        "US Preventive Services Task Force. Screening for Cervical Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2018;320(7):674-686. PMID: 30128523.",
        "Curry SJ, Krist AH, Owens DK, et al. Screening for Cervical Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2018;320(7):674-686. PMID: 30128523."
      ]
    },
    "critique": {
      "shortestValidSolution": "Cervical cancer screening for women age 30-65 -> hrHPV alone q5y, co-testing q5y, or Pap cytology alone q3y.",
      "strongestCompetitor": "Annual cervical cytology (Pap smear) combined with high-risk HPV testing performed every year",
      "exclusionFinding": "Annual screening is outdated and causes overtreatment; guidelines recommend 5-year intervals for HPV-based screening.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0425",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Abdominal Aortic Aneurysm (AAA) Screening and Surgical Repair Indications",
    "subtopic": "USPSTF One-Time Ultrasound Criteria, Men Aged 65-75 with Smoking History, 5.5 cm Repair Threshold",
    "provisionalDifficulty": 5,
    "stem": "A 67-year-old man presents to the clinic for a routine checkup. He feels completely healthy, is asymptomatic, and has no abdominal or back pain. His medical history includes essential hypertension treated with amlodipine 5 mg daily. He has a 35 pack-year smoking history (smoked 1 pack of cigarettes daily from age 20 to 55) but successfully quit 12 years ago. Physical examination demonstrates blood pressure of 128/78 mm Hg and heart rate of 72/min. Abdominal examination reveals a soft, non-tender abdomen with a wide, prominent, pulsatile midline mass palpated in the epigastric region measuring approximately 4.5 cm in width. Peripheral pulses are normal.\n\nAccording to current US Preventive Services Task Force (USPSTF) and Society for Vascular Surgery (SVS) guidelines, which of the following represents the most appropriate screening and management strategy for abdominal aortic aneurysm in this patient?",
    "choices": [
      [
        "Perform a one-time screening abdominal duplex ultrasound to evaluate for abdominal aortic aneurysm, and schedule elective surgical or endovascular repair if the maximal infrarenal aortic diameter is >= 5.5 cm or expands > 0.5 cm in 6 months",
        "Abdominal Aortic Aneurysm (AAA) is defined as a focal permanent dilation of the abdominal aorta >= 3.0 cm in maximal transverse diameter (or > 50% dilation compared to normal adjacent aorta), typically occurring in the infrarenal segment. (1) USPSTF SCREENING CRITERIA: A ONE-TIME SCREENING ABDOMINAL DUPLEX ULTRASOUND is recommended for MEN AGED 65 TO 75 YEARS WHO HAVE EVER SMOKED (defined as having smoked >= 100 lifetime cigarettes; Grade B recommendation). Ultrasound is the screening modality of choice with > 98% sensitivity and specificity, zero radiation exposure, and non-invasiveness. (2) SVS SURVEILLANCE INTERVALS: (a) Aorta 3.0 to 3.9 cm: Surveillance ultrasound every 3 years; (b) Aorta 4.0 to 4.9 cm: Surveillance ultrasound every 12 months; (c) Aorta 5.0 to 5.4 cm: Surveillance ultrasound or CT angiography every 6 months. (3) DEFINITIVE SURGICAL REPAIR INDICATIONS: Elective repair (Endovascular Aneurysm Repair [EVAR] or open surgical repair) is indicated when the rupture risk exceeds the procedural mortality risk: (a) MAXIMAL DIAMETER >= 5.5 CM IN MEN (or >= 5.0 cm in women); (b) RAPID EXPANSION: Defined as aortic diameter growth > 0.5 cm in 6 months or > 1.0 cm in 1 year; OR (c) ANY SYMPTOMATIC ANEURYSM (abdominal, flank, or back pain, or tender pulsatile mass), which represents impending rupture and mandates emergent repair regardless of diameter."
      ],
      [
        "Perform an emergent open surgical laparotomy today for immediate aortic graft placement based on physical examination alone",
        "Physical examination has poor diagnostic accuracy and overestimates aortic diameter; non-invasive ultrasound imaging is required first, and elective repair is indicated only for diameter >= 5.5 cm or symptoms."
      ],
      [
        "Perform non-contrast abdominal computed tomography (CT) annually for all patients with a history of hypertension regardless of smoking history",
        "Annual CT scans expose patients to unnecessary cumulative ionizing radiation, and screening is not recommended based on hypertension alone without a smoking history."
      ],
      [
        "Withhold all vascular imaging because the patient successfully quit smoking 12 years ago",
        "USPSTF guidelines define 'ever-smoker' as >= 100 lifetime cigarettes regardless of when smoking ceased; quitting 12 years ago does not remove the mandate for one-time ultrasound screening."
      ],
      [
        "Order a one-time screening abdominal ultrasound and recommend immediate elective surgical repair if the aortic diameter reaches 3.5 cm",
        "At 3.5 cm, the annual risk of rupture is virtually 0%, whereas surgical repair carries a 1-5% perioperative mortality; surgical repair at 3.5 cm represents dangerous overtreatment (threshold is >= 5.5 cm)."
      ]
    ],
    "rationale": "The USPSTF recommends a one-time screening abdominal duplex ultrasound for MEN aged 65 to 75 who have ever smoked (>= 100 cigarettes). Elective surgical or endovascular repair (EVAR) is indicated when the infrarenal diameter reaches >= 5.5 cm in men (>= 5.0 cm in women), if rapid expansion occurs (> 0.5 cm in 6 months or > 1.0 cm in 1 year), or if the aneurysm becomes symptomatic (impending rupture). Surveillance is performed based on diameter (e.g. annually for 4.0-4.9 cm). Physical exam alone cannot guide surgery.",
    "metadata": {
      "shortSolution": "67-year-old male former smoker requires one-time screening abdominal ultrasound for AAA; elective repair is indicated for diameter >= 5.5 cm (or rapid expansion > 0.5 cm in 6 mo).",
      "competingChoice": "Order a one-time screening abdominal ultrasound and recommend immediate elective surgical repair if the aortic diameter reaches 3.5 cm",
      "exclusionFinding": "Surgical repair threshold is >= 5.5 cm; operating at 3.5 cm causes excess procedural mortality without reducing rupture risk.",
      "pedagogicalValue": "Mastering the USPSTF AAA screening recommendation (men 65-75 who ever smoked) and knowing the surgical repair threshold (>= 5.5 cm).",
      "citations": [
        "US Preventive Services Task Force. Screening for Abdominal Aortic Aneurysm: US Preventive Services Task Force Recommendation Statement. JAMA. 2019;322(22):2211-2218. PMID: 31821437.",
        "Chaikof EL, Dalman R, Eskandari MK, et al. The Society for Vascular Surgery practice guidelines on the care of patients with an abdominal aortic aneurysm. J Vasc Surg. 2018;67(1):2-77.e2. PMID: 29268916."
      ]
    },
    "critique": {
      "shortestValidSolution": "Male 65-75 with smoking history -> one-time abdominal ultrasound screening for AAA; repair threshold is >= 5.5 cm.",
      "strongestCompetitor": "Order a one-time screening abdominal ultrasound and recommend immediate elective surgical repair if the aortic diameter reaches 3.5 cm",
      "exclusionFinding": "Repair threshold is >= 5.5 cm in men; surgery at 3.5 cm is contraindicated overtreatment.",
      "verdict": "PASS"
    }
  }
]
