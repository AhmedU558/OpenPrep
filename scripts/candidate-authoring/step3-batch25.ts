import { CandidateSpec } from './types';

export const step3Batch25: CandidateSpec[] = [
  {
    "code": "op-c-s3-0601",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Revised Cardiac Risk Index and Functional Capacity Assessment",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man is evaluated in the preoperative medical clinic prior to elective open resection of an expanding 5.8-cm infrarenal abdominal aortic aneurysm. His medical history includes a myocardial infarction 4 years ago treated with a bare-metal stent to the right coronary artery, stable heart failure with left ventricular ejection fraction of 40%, type 2 diabetes mellitus managed with insulin glargine and metformin, and hypertension. He denies active chest pain, orthopnea, or syncope. He lives in a two-story home, walks briskly 2 miles daily with his dog, climbs two flights of stairs without stopping or dyspnea, and does his own yard work (Duke Activity Status Index estimated functional capacity > 6 METs). Physical examination reveals a blood pressure of 128/78 mm Hg, regular heart rate of 68/min, clear lung fields, no jugular venous distension, and normal S1/S2 without murmurs or gallops. Baseline ECG shows normal sinus rhythm with residual inferior Q waves and no acute ST-T wave changes. Serum creatinine is 1.1 mg/dL. Based on current ACC/AHA guidelines for perioperative cardiovascular evaluation, which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Proceed with the planned vascular surgery without requiring preoperative pharmacologic cardiac stress testing, because the patient exhibits excellent functional capacity (> 4 METs)",
        "This patient is undergoing an elevated-risk surgery (open abdominal aortic aneurysm resection, estimated 30-day cardiac death/MI risk > 1%). Calculating the REVISED CARDIAC RISK INDEX (RCRI / Lee Criteria): (1) High-risk surgery (intraperitoneal/suprainguinal vascular); (2) History of ischemic heart disease (prior MI); (3) History of congestive heart failure (EF 40%); (4) Preoperative insulin therapy for diabetes; (5) History of cerebrovascular disease (absent); and (6) Preoperative serum creatinine > 2.0 mg/dL (absent). The patient has an RCRI score of 4 (>=2 indicates ELEVATED CARDIAC RISK). However, ACC/AHA guideline algorithms explicitly state that in stable patients with elevated cardiac risk, the CRITICAL DETERMINING STEP IS FUNCTIONAL CAPACITY. Patients who can achieve >= 4 METs (METABOLIC EQUIVALENTS OF TASK) of activity\u2014such as climbing two flights of stairs, walking briskly on level ground, or doing heavy yard work\u2014without cardiac symptoms have a VERY LOW RATE OF PERIOPERATIVE CARDIAC EVENTS. When functional capacity is MODERATE-TO-EXCELLENT (>= 4 METs), ROUTINE PREOPERATIVE CARDIAC STRESS TESTING OR CORONARY ANGIOGRAPHY IS NOT RECOMMENDED because it does not alter management or improve clinical outcomes. Therefore, proceeding directly to surgery is the guideline-directed choice."
      ],
      [
        "Obtain a preoperative dobutamine stress echocardiogram to evaluate for inducible myocardial ischemia prior to clearing for surgery",
        "Routine non-invasive stress testing is not indicated in patients with excellent functional capacity (> 4 METs), as it leads to unnecessary procedural delays without improving outcomes."
      ],
      [
        "Cancel surgery and refer the patient for urgent invasive coronary angiography with prophylactic coronary revascularization",
        "Prophylactic coronary revascularization prior to elective non-cardiac vascular surgery does not reduce perioperative mortality or long-term events (CARP trial)."
      ],
      [
        "Initiate high-dose oral metoprolol succinate 100 mg daily starting today to achieve a perioperative heart rate below 55/min",
        "Initiating acute beta-blockade shortly before surgery significantly increases the risk of bradycardia, hypotension, and fatal ischemic stroke (POISE trial)."
      ],
      [
        "Perform routine preoperative coronary computed tomography angiography (CCTA) to quantify plaque calcification",
        "Preoperative coronary CTA is not recommended in asymptomatic stable patients with preserved functional capacity and exposes the patient to radiocontrast nephrotoxicity."
      ]
    ],
    "shortestValidSolution": "High RCRI (prior MI, CHF, insulin, vascular surgery) BUT excellent functional capacity (> 4 METs) = Proceed to surgery without stress testing.",
    "necessaryInference": "Apply ACC/AHA perioperative guidelines: patients with elevated RCRI who demonstrate functional capacity >= 4 METs can proceed to surgery without stress testing.",
    "strongestDistractor": "Obtain a preoperative dobutamine stress echocardiogram to evaluate for inducible myocardial ischemia prior to clearing for surgery",
    "distractorExclusion": "Stress testing is indicated only if the patient has elevated risk AND poor (<4 METs) or unknown functional capacity; here functional capacity is >6 METs.",
    "citation": "Fleisher LA, Fleischmann KE, Auerbach AD, et al. 2014 ACC/AHA guideline on perioperative cardiovascular evaluation and management of patients undergoing noncardiac surgery. J Am Coll Cardiol. 2014;64(22):e77-e137. PMID: 25091544.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/cardiology preoperative risk stratification item testing RCRI calculation, functional capacity assessment, and avoidance of routine stress testing.",
      "distractorExclusionNotes": "Distractors feature unnecessary stress testing despite high METs, unindicated prophylactic revascularization (CARP trial), dangerous acute beta-blocker initiation (POISE trial), and CCTA.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0602",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Pacemaker and ICD Perioperative Magnet Reprogramming",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old woman with a dual-chamber implantable cardioverter-defibrillator (ICD) placed 3 years ago for primary prevention of sudden cardiac death in non-ischemic dilated cardiomyopathy (LVEF 30%) is scheduled for elective laparoscopic cholecystectomy tomorrow morning. She is pacing-dependent (intrinsic ventricular escape rate < 35/min). The surgical team plans to use monopolar electrosurgery (electrocautery) within 10 cm of the device pocket and above the umbilicus. A cardiology consultation is requested for perioperative cardiovascular implantable electronic device (CIED) management. Which of the following represents the most appropriate strategy to manage her device during the operative procedure?",
    "choices": [
      [
        "Suspend the ICD tachyarrhythmia detection/defibrillation therapies (or apply a clinical magnet over the device) to prevent inappropriate shocks, and reprogram the pacemaker function to an asynchronous pacing mode (e.g., DOO or VOO) to prevent cautery-induced pacing inhibition",
        "During surgery utilizing MONOPOLAR ELECTROSURGERY (electrocautery), high-frequency electromagnetic interference (EMI) can be transmitted to a CARDOVASCULAR IMPLANTABLE ELECTRONIC DEVICE (CIED). For an IMPLANTABLE CARDIOVERTER-DEFIBRILLATOR (ICD), the device may misinterpret electromagnetic noise from the cautery pencil as ventricular tachycardia or fibrillation, delivering INAPPROPRIATE HIGH-VOLTAGE DEFIBRILLATION SHOCKS to a conscious or anesthetized patient. Therefore, TACHYARRHYTHMIA DETECTION/SHOCK THERAPIES MUST BE SUSPENDED (either by pre-procedural electronic programming or by placing a RING MAGNET directly over the ICD, which suspends shock therapy without altering pacing in most ICD models). Crucially, in a PACING-DEPENDENT PATIENT, electrocautery noise can also be 'oversensed' by the pacing lead, causing PACER INHIBITION (failure to pace) and acute asystole. Therefore, the pacemaker must be REPROGRAMMED TO AN ASYNCHRONOUS PACING MODE (e.g., VOO or DOO), which delivers fixed-rate pacing regardless of electrical noise. Continuous ECG monitoring and external defibrillator pads must be in place throughout the case, and the device must be interrogated and restored to normal baseline settings in the PACU."
      ],
      [
        "Leave all ICD and pacemaker settings unchanged because modern bipolar electrosurgical instruments eliminate all electromagnetic interference",
        "The surgical plan specifies monopolar cautery above the umbilicus, which generates massive EMI capable of triggering inappropriate ICD discharges and inhibiting life-sustaining pacing."
      ],
      [
        "Apply a clinical magnet over the ICD to switch both pacing and shock functions completely off during the operative case",
        "A magnet over an ICD suspends shock therapy but does NOT turn off pacing; in fact, turning off pacing in a pacing-dependent patient leads to fatal asystole."
      ],
      [
        "Administer intravenous isoproterenol infusion throughout surgery to overcome potential pacing inhibition without device modification",
        "Isoproterenol does not prevent inappropriate ICD shock discharges from cautery noise and carries severe risks of ventricular tachyarrhythmias."
      ],
      [
        "Explant the ICD pulse generator under local anesthesia prior to laparoscopy and re-implant a new device postoperatively",
        "Surgical device explantation is an extreme, invasive procedure carrying severe infection and vascular risks, and is completely unnecessary."
      ]
    ],
    "shortestValidSolution": "ICD + pacing-dependent + monopolar cautery near pocket = Suspend ICD shock therapy (or magnet) + Reprogram to asynchronous pacing (DOO/VOO).",
    "necessaryInference": "Synthesize the dual risks of electrocautery EMI on CIEDs: inappropriate shock delivery (requires shock suspension) and pacing inhibition in dependent patients (requires asynchronous mode).",
    "strongestDistractor": "Apply a clinical magnet over the ICD to switch both pacing and shock functions completely off during the operative case",
    "distractorExclusion": "A magnet suspends ICD shocks but does not turn off pacing; turning off pacing in a pacing-dependent patient would result in immediate fatal asystolic arrest.",
    "citation": "Crossley GH, Poole JE, Rozner MA, et al. The Heart Rhythm Society (HRS)/American Society of Anesthesiologists (ASA) Expert Consensus Statement on the perioperative management of patients with implantable defibrillators, pacemakers and arrhythmia monitors. Heart Rhythm. 2011;8(7):1114-1154. PMID: 21722856.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/cardiology preoperative management item testing CIED/ICD perioperative electrocautery management in a pacing-dependent patient.",
      "distractorExclusionNotes": "Distractors feature dangerous inaction during monopolar cautery, fatal cessation of pacing via magnet misconception, isoproterenol infusions, and unnecessary device explantation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0603",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Perioperative Beta-Blocker Management POISE Trial Evidence",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man with hypertension, hyperlipidemia, and type 2 diabetes mellitus presents for preoperative evaluation prior to elective total hip arthroplasty scheduled in 2 days. He has no history of coronary artery disease, heart failure, or stroke, and walks 3 miles daily without chest discomfort or shortness of breath. His outpatient medications are amlodipine 10 mg daily and metformin 1,000 mg twice daily. Physical examination reveals a blood pressure of 134/82 mm Hg and heart rate of 74/min. Baseline ECG is normal. The surgical intern suggests initiating high-dose oral metoprolol succinate (100 mg daily) starting today to 'cardioprotect' the patient's heart during the perioperative period. Based on current ACC/AHA perioperative clinical practice guidelines, which of the following is the most appropriate recommendation regarding perioperative beta-blocker therapy for this patient?",
    "choices": [
      [
        "Do not initiate beta-blocker therapy, because acute initiation of high-dose beta-blockers immediately prior to surgery significantly increases the risk of hypotension, bradycardia, fatal ischemic stroke, and all-cause mortality",
        "The landmark PERIOPERATIVE ISCHEMIC EVALUATION (POISE) TRIAL (8,351 patients undergoing non-cardiac surgery) evaluated acute initiation of high-dose extended-release metoprolol started 2 to 4 hours prior to surgery. While beta-blockers reduced non-fatal myocardial infarction, they caused a STATISTICALLY SIGNIFICANT INCREASE IN TOTAL MORTALITY AND FATAL ISCHEMIC STROKES, driven primarily by severe intraoperative and postoperative HYPOTENSION AND BRADYCARDIA. Current ACC/AHA guidelines provide clear recommendations: (1) PATIENTS ALREADY TAKING CHRONIC BETA-BLOCKERS SHOULD CONTINUE THEM PERIOPERATIVELY without interruption (Class I recommendation); abrupt cessation can trigger severe rebound tachycardia and myocardial ischemia; (2) IN BETA-BLOCKER-NAIVE PATIENTS, ROUTINE PROPHYLACTIC INITIATION OF BETA-BLOCKERS ON THE DAY OF OR IMMEDIATELY PRIOR TO SURGERY IS CONTRAINDICATED (Class III: Harm); and (3) In highly selected beta-blocker-naive patients with multiple ischemic risk factors, if a beta-blocker is considered, it MUST BE INITIATED WEEKS (AT LEAST 7 TO 30 DAYS) IN ADVANCE and carefully titrated to heart rate and blood pressure. Because this patient is beta-blocker-naive with excellent functional capacity, initiating acute metoprolol 2 days before surgery is unsafe."
      ],
      [
        "Initiate oral metoprolol succinate 100 mg daily immediately because perioperative beta-blockade uniformly reduces all-cause surgical mortality",
        "POISE demonstrated that acute pre-op high-dose beta-blocker initiation significantly INCREASES all-cause mortality and ischemic strokes."
      ],
      [
        "Discontinue amlodipine and initiate intravenous esmolol continuous infusion to maintain intraoperative heart rate strictly below 50/min",
        "Targeting extreme bradycardia (<50/min) dramatically increases fatal cerebral hypoperfusion and cardiac arrest without providing clinical benefit."
      ],
      [
        "Initiate high-dose oral carvedilol 25 mg twice daily combined with transdermal clonidine to achieve synergistic alpha-2 and beta blockade",
        "Combining non-selective beta-blockers with alpha-2 agonists immediately prior to surgery causes severe refractory intraoperative bradycardia and profound vasodilatory collapse."
      ],
      [
        "Cancel surgery and refer the patient for an outpatient diagnostic coronary angiogram to rule out subclinical triple-vessel disease",
        "An asymptomatic patient with excellent functional capacity and no ischemic symptoms does not require invasive coronary angiography prior to elective arthroplasty."
      ]
    ],
    "shortestValidSolution": "Beta-blocker naive patient before surgery -> DO NOT start acute beta-blockers (POISE trial: increases strokes, hypotension, and mortality).",
    "necessaryInference": "Apply landmark POISE trial findings: do not acutely initiate high-dose beta-blockers in naive patients immediately prior to non-cardiac surgery due to stroke and mortality risk.",
    "strongestDistractor": "Initiate oral metoprolol succinate 100 mg daily immediately because perioperative beta-blockade uniformly reduces all-cause surgical mortality",
    "distractorExclusion": "Acute beta-blockade prior to surgery was definitively proven in the POISE trial to increase total mortality and fatal ischemic stroke.",
    "citation": "POISE Study Group, Devereaux PJ, Yang H, et al. Effects of extended-release metoprolol succinate in patients undergoing non-cardiac surgery (POISE trial): a randomised controlled trial. Lancet. 2008;371(9627):1839-1847. PMID: 18479744.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/perioperative cardiology item testing evidence-based beta-blocker management based on the POISE trial and ACC/AHA guidelines.",
      "distractorExclusionNotes": "Distractors feature disproven prophylactic beta-blocker loading, severe bradycardia targeting with esmolol, multi-agent sympatholytic collapse, and unindicated catheterization.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0604",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Perioperative Anticoagulation Bridging Indications BRIDGE Trial",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old man with permanent non-valvular atrial fibrillation and hypertension managed with warfarin (therapeutic INR 2.0-3.0) and lisinopril is scheduled for elective open right hemicolectomy for a localized cecal adenocarcinoma in 10 days. He has no history of stroke, transient ischemic attack, or systemic thromboembolism (CHA2DS2-VASc score = 2: age 72, hypertension). The surgical team requests guidance on perioperative anticoagulation management. Based on current CHEST perioperative clinical guidelines, which of the following represents the most appropriate perioperative anticoagulation strategy for this patient?",
    "choices": [
      [
        "Discontinue warfarin 5 days prior to surgery, allow the INR to normalize without administering heparin bridging therapy, and resume warfarin postoperatively once hemostasis is secured",
        "The landmark BRIDGE TRIAL (1,884 patients with atrial fibrillation undergoing elective procedures) evaluated whether PERIOPERATIVE HEPARIN BRIDGING (using therapeutic-dose LMWH) was beneficial when warfarin was interrupted. The trial proved that FORGOING BRIDGING WAS NON-INFERIOR FOR PREVENTING ARTERIAL THROMBOEMBOLISM (0.4% in bridged vs 0.3% in non-bridged), while BRIDGING SIGNIFICANTLY INCREASED THE RISK OF MAJOR BLEEDING (3.2% vs 1.3%, p=0.005). Current CHEST and ACC guidelines recommend: (1) LOW-TO-MODERATE THROMBOEMBOLIC RISK (non-valvular AF with CHA2DS2-VASc score <= 4 without prior stroke/TIA, or remote VTE >12 months ago): DO NOT BRIDGE; discontinue warfarin 5 days prior to surgery, allow INR to normalize to <= 1.5, and resume warfarin 12-24 hours postoperatively; and (2) HIGH THROMBOEMBOLIC RISK (MECHANICAL MITRAL VALVE, older mechanical aortic valve [caged-ball/tilting-disc], recent stroke/TIA <3 months, or very high CHA2DS2-VASc >= 7): BRIDGING WITH LMWH OR IV UFH IS RECOMMENDED. Because this patient has non-valvular AF with a CHA2DS2-VASc score of 2, heparin bridging exposes him to a >2-fold increase in major surgical bleeding without reducing stroke risk."
      ],
      [
        "Discontinue warfarin 5 days prior to surgery and administer full therapeutic-dose subcutaneous enoxaparin (1 mg/kg twice daily) bridging up to 12 hours before surgery",
        "Routine heparin bridging in moderate-risk non-valvular AF was shown in the BRIDGE trial to increase major bleeding more than two-fold without lowering stroke incidence."
      ],
      [
        "Continue therapeutic warfarin without interruption and administer intravenous fresh frozen plasma immediately before surgical incision",
        "Operating on therapeutic warfarin causes massive intraoperative hemorrhage; fresh frozen plasma carries volume overload and transfusion reaction risks."
      ],
      [
        "Transition permanently from warfarin to daily low-dose aspirin 81 mg as sole long-term stroke prevention",
        "Aspirin is completely inadequate for stroke prevention in atrial fibrillation and does not replace indicated oral anticoagulation."
      ],
      [
        "Switch from warfarin to oral dabigatran 150 mg twice daily and administer the direct antidote idarucizumab immediately prior to surgery",
        "Switching to dabigatran solely to utilize its reversal agent is clinically inappropriate, costly, and carries severe procedural thrombosis risks."
      ]
    ],
    "shortestValidSolution": "Non-valvular AF (CHA2DS2-VASc 2) before colon surgery = Moderate risk -> Stop warfarin 5 days prior; NO heparin bridging (BRIDGE trial: bleeding risk).",
    "necessaryInference": "Apply landmark BRIDGE trial evidence: avoid routine heparin bridging in non-valvular AF with low-to-moderate thromboembolic risk to prevent major bleeding.",
    "strongestDistractor": "Discontinue warfarin 5 days prior to surgery and administer full therapeutic-dose subcutaneous enoxaparin (1 mg/kg twice daily) bridging up to 12 hours before surgery",
    "distractorExclusion": "Therapeutic LMWH bridging in this patient with CHA2DS2-VASc 2 increases major surgical bleeding by >2.5-fold without lowering thromboembolism rates.",
    "citation": "Douketis JD, Spyropoulos AC, Kaatz S, et al. Perioperative bridging anticoagulation in patients with atrial fibrillation. N Engl J Med. 2015;373(9):823-833. PMID: 26095207.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/hematology perioperative item testing application of the BRIDGE trial findings (avoidance of bridging in non-valvular AF without high risk).",
      "distractorExclusionNotes": "Distractors feature outdated routine LMWH bridging increasing major bleeding, operating on therapeutic warfarin with FFP, inadequate aspirin, and dabigatran/idarucizumab misuse.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0605",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "DOAC Perioperative Interruption Intervals and Neuraxial Anesthesia",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old woman with non-valvular atrial fibrillation (CHA2DS2-VASc score = 3) and normal renal function (serum creatinine 0.8 mg/dL, estimated GFR 82 mL/min/1.73 m^2) is scheduled to undergo elective total knee arthroplasty under spinal neuraxial anesthesia in 3 days. She is currently taking apixaban 5 mg orally twice daily. She has no personal or family history of bleeding disorders. The anesthesiology and orthopedic surgery teams consult internal medicine regarding the precise timing of apixaban interruption before neuraxial block placement and surgery. Based on current clinical guidelines from the American Society of Regional Anesthesia and Pain Medicine (ASRA), which of the following is the most appropriate management plan?",
    "choices": [
      [
        "Hold apixaban for at least 48 to 72 hours prior to the procedure, perform surgery and spinal anesthesia without heparin bridging, and resume apixaban 48 hours postoperatively once surgical hemostasis is complete",
        "Management of DIRECT ORAL ANTICOAGULANTS (DOACs: apixaban, rivaroxaban, dabigatran, edoxaban) in the perioperative setting is dictated by: (1) The specific drug's pharmacokinetic half-life (10-14 hours for apixaban); (2) Patient renal function; and (3) The bleeding risk of the procedure. SPINAL / EPIDURAL NEURAXIAL ANESTHESIA AND MAJOR ORTHOPEDIC SURGERY REPRESENT HIGH BLEEDING RISK PROCEDURES where even minor bleeding can cause catastrophic SPINAL-EPIDURAL HEMATOMA and permanent paraplegia. Guidelines (ASRA and the prospective PAUSE trial) recommend: (1) PREOPERATIVE INTERRUPTION: for high bleeding risk procedures or neuraxial anesthesia in patients with normal renal function, HOLD APIXABAN FOR AT LEAST 48 TO 72 HOURS (corresponding to >=4-5 drug half-lives, ensuring <5% residual anticoagulant effect); (2) HEPARIN BRIDGING IS NOT INDICATED: DOACs have predictable, rapid on/off kinetics, and bridging with LMWH dramatically increases major bleeding without reducing thrombosis; and (3) POSTOPERATIVE RESUMPTION: for high bleeding risk surgeries, delay therapeutic-dose DOAC resumption for 48 TO 72 HOURS postoperatively (or use low-dose prophylactic LMWH starting 12-24 hours after surgery if VTE prophylaxis is needed before full anticoagulation can safely be resumed)."
      ],
      [
        "Administer the last dose of apixaban 12 hours before surgery and administer the specific reversal agent andexanet alfa immediately prior to the spinal block",
        "Andexanet alfa is indicated for life-threatening acute bleeding or emergent trauma, not for planned elective surgical reversal, and carries high prothrombotic risks and cost."
      ],
      [
        "Hold apixaban for 24 hours prior to surgery and initiate intravenous unfractionated heparin bridging until 4 hours before the spinal block",
        "A 24-hour hold is inadequate for neuraxial anesthesia; heparin bridging with DOACs significantly increases bleeding and spinal hematoma risks."
      ],
      [
        "Continue apixaban without interruption and place the spinal needle under real-time ultrasound guidance to prevent vascular trauma",
        "Performing neuraxial needle puncture in a patient on active therapeutic DOAC therapy carries an unacceptable risk of spinal cord compression from epidural hematoma."
      ],
      [
        "Discontinue apixaban 7 days prior to surgery and obtain daily prothrombin time (INR) measurements to verify normalization",
        "Apixaban does not require a 7-day hold due to its short 12-hour half-life, and routine PT/INR testing is insensitive and unreliable for measuring apixaban activity."
      ]
    ],
    "shortestValidSolution": "Apixaban before spinal anesthesia/orthopedic surgery = High bleeding risk -> Hold apixaban 48-72 hours; NO heparin bridging; resume 48 hrs post-op.",
    "necessaryInference": "Apply ASRA neuraxial and PAUSE trial protocols: hold DOACs 48-72 hours before neuraxial anesthesia/high-risk surgery without heparin bridging.",
    "strongestDistractor": "Hold apixaban for 24 hours prior to surgery and initiate intravenous unfractionated heparin bridging until 4 hours before the spinal block",
    "distractorExclusion": "24 hours is insufficient to clear apixaban prior to high-risk neuraxial anesthesia (spinal hematoma risk); heparin bridging is strictly avoided with DOACs.",
    "citation": "Douketis JD, Spyropoulos AC, Duncan J, et al. Perioperative management of patients with direct oral anticoagulants in the PAUSE study. JAMA Intern Med. 2019;179(11):1569-1578. PMID: 31393532.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/anesthesiology perioperative item testing DOAC interruption intervals for neuraxial anesthesia based on ASRA and PAUSE trial evidence.",
      "distractorExclusionNotes": "Distractors feature dangerous elective reversal with andexanet alfa, inadequate 24-hour hold with bridging, spinal puncture on active DOACs, and 7-day hold with invalid INR.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0606",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Antiplatelet Timing Post-Drug-Eluting Stent for Elective Surgery",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man presents for preoperative evaluation prior to elective laparoscopic cholecystectomy for symptomatic cholelithiasis with recurrent biliary colic. Three months ago, he experienced an acute non-ST-elevation myocardial infarction and underwent successful percutaneous coronary intervention with placement of a second-generation everolimus-eluting stent in the proximal left anterior descending coronary artery. He has adhered strictly to dual antiplatelet therapy (DAPT) with aspirin 81 mg daily and ticagrelor 90 mg twice daily. He currently has no chest pain, orthopnea, or dyspnea, and his biliary colic episodes occur once every 2 to 3 weeks without cholecystitis, fever, or jaundice. Physical examination and vital signs are normal. Baseline ECG demonstrates normal sinus rhythm with non-specific T-wave flattening. Which of the following is the most appropriate management regarding the timing of his elective surgery and antiplatelet management?",
    "choices": [
      [
        "Postpone the elective laparoscopic cholecystectomy until at least 6 months after the drug-eluting stent placement, continuing dual antiplatelet therapy in the interim",
        "Following PERCUTANEOUS CORONARY INTERVENTION WITH DRUG-ELUTING STENTS (DES), the risk of acute, catastrophic STENT THROMBOSIS is highest during the initial months while the stent struts undergo endothelialization. Premature discontinuation of DUAL ANTIPLATELET THERAPY (DAPT) during this vulnerable period is the single strongest predictor of stent thrombosis, which carries a 30-day mortality rate of 20-40% and a >70% rate of large transmural infarction. Current ACC/AHA and ESC guidelines provide strict recommendations: (1) ELECTIVE NON-CARDIAC SURGERY SHOULD BE DELAYED FOR AT LEAST 6 MONTHS FOLLOWING DES IMPLANTATION (or 12 months if the stent was placed for acute coronary syndrome, though elective surgery can be considered after 6 months if surgical delay poses greater risk than stent thrombosis); (2) Elective surgery is strictly contraindicated within the first 30 days after any stent; (3) When surgery is eventually performed after 6 months, ASPIRIN SHOULD BE CONTINUED THROUGHOUT THE PERIOPERATIVE PERIOD whenever bleeding risk permits, while the P2Y12 inhibitor (ticagrelor held 3-5 days, clopidogrel held 5 days) is temporarily interrupted and resumed as soon as post-op hemostasis is secure. Because this patient has elective, uncomplicated biliary colic (no acute cholecystitis), POSTPONING SURGERY UNTIL AT LEAST 6 MONTHS POST-STENT IS MANDATORY."
      ],
      [
        "Proceed with laparoscopic cholecystectomy tomorrow, stopping ticagrelor and aspirin today without delaying surgery",
        "Abruptly stopping all antiplatelet therapy 3 months after DES placement to proceed with elective surgery triggers catastrophic acute in-stent thrombosis and fatal perioperative MI."
      ],
      [
        "Proceed with surgery immediately, discontinue aspirin and ticagrelor, and bridge with therapeutic low-molecular-weight heparin",
        "Heparin does not prevent platelet activation on unendothelialized stent struts; heparin bridging for antiplatelet cessation does not prevent stent thrombosis and increases bleeding."
      ],
      [
        "Perform urgent open cholecystectomy while maintaining full dual antiplatelet therapy with ticagrelor and aspirin",
        "Open surgery on active ticagrelor carries an extreme risk of major, uncontrolled surgical hemorrhage and is unnecessary for uncomplicated elective biliary colic."
      ],
      [
        "Cancel surgery permanently and recommend life-long oral ursodeoxycholic acid as definitive curative therapy for gallstones",
        "Ursodeoxycholic acid has poor efficacy for multiple large radiopaque stones and high recurrence rates; elective cholecystectomy can be safely performed after the 6-month DAPT window."
      ]
    ],
    "shortestValidSolution": "DES placed 3 months ago + elective cholecystectomy = Delay surgery until at least 6 months post-DES (prevents fatal stent thrombosis).",
    "necessaryInference": "Apply ACC/AHA DAPT guidelines: elective non-cardiac surgery must be postponed for at least 6 months after drug-eluting stent placement to prevent acute stent thrombosis.",
    "strongestDistractor": "Proceed with surgery immediately, discontinue aspirin and ticagrelor, and bridge with therapeutic low-molecular-weight heparin",
    "distractorExclusion": "Heparin inhibits thrombin generation but does not inhibit platelet adhesion to bare metal struts; heparin bridging does not prevent stent thrombosis.",
    "citation": "Levine GN, Bates ER, Bittl JA, et al. 2016 ACC/AHA guideline focused update on duration of dual antiplatelet therapy in patients with coronary artery disease. J Am Coll Cardiol. 2016;68(10):1082-1115. PMID: 27036918.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/cardiology perioperative item testing guideline-directed surgical timing and antiplatelet management after drug-eluting coronary stents.",
      "distractorExclusionNotes": "Distractors feature immediate surgery stopping DAPT (fatal stent thrombosis), ineffective LMWH antiplatelet bridging, open surgery on active ticagrelor, and abandoning needed surgery.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0607",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Postoperative Pulmonary Complications ARISCAT and Smoking Cessation",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man with a 45-pack-year smoking history and moderate chronic obstructive pulmonary disease (COPD, baseline FEV1 62% of predicted) is evaluated in the preoperative clinic 6 weeks prior to elective open ventral hernia repair. He currently smokes 1 pack of cigarettes daily and has a chronic morning cough productive of scant white sputum. He has had no COPD exacerbations or hospitalizations in the past year. His outpatient regimen consists of inhaled tiotropium and inhaled fluticasone-salmeterol. Vital signs: blood pressure 130/78 mm Hg, heart rate 72/min, respirations 16/min, and oxygen saturation 96% on ambient room air. Physical examination reveals an obese man with a large, reducible ventral abdominal wall hernia, mild end-expiratory wheezing, and an increased anteroposterior chest diameter without cyanosis or peripheral edema. Which of the following preoperative interventions has the strongest evidence for reducing this patient's risk of postoperative pulmonary complications (e.g., atelectasis, pneumonia, prolonged mechanical ventilation)?",
    "choices": [
      [
        "Complete smoking cessation initiated immediately (at least 4 to 8 weeks prior to surgery) combined with preoperative incentive spirometry training and inspiratory muscle training",
        "POSTOPERATIVE PULMONARY COMPLICATIONS (PPCs: atelectasis, pneumonia, respiratory failure, bronchospasm, exacerbation of COPD) occur in up to 5-10% of non-cardiac surgical patients and equal cardiac complications as a cause of perioperative morbidity and mortality. Risk stratification tools such as the ARISCAT (Assess Respiratory Risk in Surgical Patients in Catalonia) score evaluate: age > 65, preoperative SpO2 <= 96%, upper abdominal or intrathoracic incision, emergency surgery, duration of surgery > 2 hours, and preoperative anemia. SMOKING is a major modifiable risk factor. Cigarette smoke impairs ciliary transport, causes mucus hypersecretion, induces bronchial hyperreactivity, and elevates carboxyhemoglobin (reducing tissue oxygen delivery). Guideline-directed evidence demonstrates: (1) SMOKING CESSATION INITIATED AT LEAST 4 TO 8 WEEKS PRIOR TO SURGERY significantly reduces PPCs (reduces airway secretions, restores ciliary function, and halves pneumonia rates). Cessation <4 weeks before surgery does NOT increase complications (refuting older myths) and normalizes carboxyhemoglobin within 12-24 hours; and (2) LUNG EXPANSION MODALITIES: PREOPERATIVE INCENTIVE SPIROMETRY, deep breathing exercises, and inspiratory muscle training significantly decrease postoperative atelectasis and pneumonia."
      ],
      [
        "Administer a 14-day course of prophylactic oral azithromycin and oral prednisone starting 2 weeks before surgery",
        "Prophylactic corticosteroids and antibiotics in stable non-exacerbated COPD cause unnecessary hyperglycemia, impaired surgical wound healing, and bacterial resistance."
      ],
      [
        "Instruct the patient to reduce smoking by half starting 24 hours before surgery to avoid the stress of acute nicotine withdrawal",
        "Reducing cigarettes by half 24 hours prior provides zero pulmonary benefit and maintains toxic ciliary paralysis and high carboxyhemoglobin levels."
      ],
      [
        "Perform routine preoperative arterial blood gas analysis and order repeat spirometry on the morning of surgery",
        "Arterial blood gases and repeat spirometry do not predict postoperative pulmonary outcomes better than clinical evaluation and do not alter management."
      ],
      [
        "Recommend strict complete supine bedrest for the first 72 hours postoperatively to protect the abdominal hernia repair",
        "Prolonged supine bedrest causes severe basal atelectasis, diaphragmatic splinting, and dramatically increases pneumonia and DVT risk; early mobilization is mandatory."
      ]
    ],
    "shortestValidSolution": "COPD smoker before upper abdominal hernia surgery = High pulmonary risk -> Stop smoking >= 4-8 weeks prior + Incentive spirometry.",
    "necessaryInference": "Identify evidence-based interventions to prevent postoperative pulmonary complications: smoking cessation >= 4-8 weeks prior and incentive spirometry.",
    "strongestDistractor": "Administer a 14-day course of prophylactic oral azithromycin and oral prednisone starting 2 weeks before surgery",
    "distractorExclusion": "Empiric steroids and antibiotics in non-exacerbated COPD impair wound healing, increase surgical site infection rates, and are not guideline-recommended.",
    "citation": "Smetana GW, Lawrence VA, Cornell JE. Preoperative pulmonary risk stratification for noncardiothoracic surgery: systematic review for the American College of Physicians. Ann Intern Med. 2006;144(8):581-595. PMID: 16618956.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/pulmonology preoperative item testing evidence-based reduction of postoperative pulmonary complications (smoking cessation timing, lung expansion).",
      "distractorExclusionNotes": "Distractors feature harmful empiric steroids/antibiotics impairing wound healing, ineffective 24-hour smoking reduction, unhelpful ABGs, and dangerous prolonged bedrest.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0608",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Obstructive Sleep Apnea STOP-BANG and Perioperative Care",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old man presents for preoperative evaluation prior to elective laparoscopic sleeve gastrectomy. He reports loud, disruptive snoring, frequent daytime somnolence, and waking up with morning headaches, but has never undergone formal polysomnography. Physical examination reveals an obese man with a BMI of 44 kg/m^2, neck circumference of 46 cm (18.1 inches), and a modified Mallampati class IV airway. Blood pressure is 146/92 mm Hg, and pulse is 76/min. Screening using the validated STOP-BANG questionnaire reveals a score of 6 (Snoring, Tiredness, Observed apneas, High blood Pressure, BMI > 35, Age > 50, Neck circumference > 40 cm, Male Gender; high risk defined as score >= 5). Which of the following represents the most appropriate perioperative management strategy to mitigate his risk of life-threatening respiratory failure?",
    "choices": [
      [
        "Implement a high-risk OSA perioperative protocol: employ regional/neuraxial techniques, utilize multimodal opioid-sparing analgesia, maintain continuous pulse oximetry, and ensure postoperative continuous positive airway pressure (CPAP)",
        "OBSTRUCTIVE SLEEP APNEA (OSA) is present in up to 70% of bariatric surgery candidates and represents a major predictor of perioperative morbidity, including acute airway obstruction, hypoxemia, respiratory arrest, and myocardial ischemia. The STOP-BANG SCORE (>=5 indicates high risk of moderate-to-severe OSA) reliably identifies at-risk patients without requiring pre-procedure polysomnography if surgery cannot be delayed. Guidelines from the American Society of Anesthesiologists (ASA) and Society of Anesthesia and Sleep Medicine (SASM) recommend an INTENSIVE PERIOPERATIVE HIGH-RISK OSA PROTOCOL: (1) OPIOID-SPARING MULTIMODAL ANALGESIA: minimize systemic opioids (which depress upper airway dilator motor tone and blunts central hypercapnic arousal); utilize acetaminophen, NSAIDs, ketamine, dexmedetomidine, or regional/neuraxial blocks (e.g., transversus abdominis plane [TAP] blocks); (2) EXTUBATION PROTOCOL: extubate only when fully awake and responsive in a semi-upright or lateral 'ramp' position (never supine); (3) CONTINUOUS PULSE OXIMETRY and capnography monitoring in the PACU and step-down unit; and (4) POSTOPERATIVE POSITIVE AIRWAY PRESSURE: initiate CONTINUOUS POSITIVE AIRWAY PRESSURE (CPAP) or auto-titrating PAP immediately in the recovery unit."
      ],
      [
        "Cancel surgery and mandate that the patient undergo formal in-laboratory polysomnography and 6 months of documented CPAP adherence before rescheduling",
        "Elective surgery does not need to be delayed for formal sleep studies if high-risk OSA is identified clinically; initiating perioperative precautions provides safe management."
      ],
      [
        "Prescribe patient-controlled intravenous hydromorphone analgesia without basal rate and discharge to an unmonitored floor room",
        "Unmonitored opioid patient-controlled analgesia in a patient with severe untreated OSA is the classic trigger for fatal postoperative nocturnal respiratory arrest."
      ],
      [
        "Administer high-dose oral diazepam 10 mg at bedtime postoperatively to relieve muscle tension and promote deep restorative sleep",
        "Benzodiazepines cause profound pharyngeal muscle relaxation and blunted respiratory drive, precipitating severe obstructive asphyxia in OSA."
      ],
      [
        "Maintain the patient in a flat, strict supine position for 48 hours to minimize diaphragmatic tension on the gastric staple line",
        "The supine position allows the tongue and soft palate to collapse posteriorly under gravity, worsening upper airway occlusion; semi-Fowler 30-45 degree positioning is required."
      ]
    ],
    "shortestValidSolution": "STOP-BANG 6 (high-risk OSA) before bariatric surgery = High OSA risk -> Opioid-sparing multimodal analgesia + Continuous pulse oximetry + Post-op CPAP.",
    "necessaryInference": "Apply ASA/SASM perioperative OSA guidelines: treat high STOP-BANG patients with opioid-sparing multimodal analgesia, head-up positioning, and postoperative CPAP.",
    "strongestDistractor": "Cancel surgery and mandate that the patient undergo formal in-laboratory polysomnography and 6 months of documented CPAP adherence before rescheduling",
    "distractorExclusion": "Delaying surgery for months for formal polysomnography is unnecessary; patients can be safely managed perioperatively by presuming high-risk OSA and applying precautions.",
    "citation": "Chung F, Memtsoudis SG, Ramachandran SK, et al. Society of Anesthesia and Sleep Medicine Guideline on Preoperative Screening and Assessment of Adult Patients with Obstructive Sleep Apnea or Suspected Obstructive Sleep Apnea. Anesth Analg. 2016;123(2):452-473. PMID: 27442774.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/anesthesiology perioperative item testing recognition of high-risk OSA via STOP-BANG and guideline-directed multimodal opioid-sparing management.",
      "distractorExclusionNotes": "Distractors feature unnecessary long surgical cancellations, lethal unmonitored opioid PCA, contraindicated sedative benzodiazepines, and flat supine positioning.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0609",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "SGLT2 Inhibitor Discontinuation and Perioperative Insulin Management",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old woman with a 9-year history of type 2 diabetes mellitus and chronic kidney disease stage 2 is seen in the preoperative consultation clinic prior to elective laparoscopic total abdominal hysterectomy and bilateral salpingo-oophorectomy scheduled for next Monday morning at 8:00 AM. Her current diabetes regimen consists of: empagliflozin 25 mg orally once daily, metformin 1,000 mg twice daily, insulin glargine 24 units subcutaneously once daily at bedtime, and insulin lispro 6 units before meals. Her most recent hemoglobin A1c is 7.6%, and serum creatinine is 1.0 mg/dL. Which of the following represents the most appropriate preoperative management of her diabetes medications?",
    "choices": [
      [
        "Discontinue empagliflozin at least 3 to 4 days prior to surgery to prevent euglycemic diabetic ketoacidosis, hold metformin on the morning of surgery, reduce the evening insulin glargine dose by 20% to 25% the night before surgery, and hold the morning insulin lispro",
        "PERIOPERATIVE DIABETES MANAGEMENT mandates specific adjustments to prevent hypoglycemia, severe hyperglycemia, and life-threatening metabolic complications: (1) SODIUM-GLUCOSE COTRANSPORTER-2 (SGLT2) INHIBITORS (empagliflozin, dapagliflozin, canagliflozin) MUST BE DISCONTINUED AT LEAST 3 TO 4 DAYS PRIOR TO MAJOR SURGERY (FDA and Endocrine Society guidelines recommend holding empagliflozin/dapagliflozin 3 days, and canagliflozin 4 days). SGLT2 inhibitors lower the renal threshold for glucose, promoting glucosuria; under the physiologic stress of surgery (starvation, dehydration, glucagon release), patients can develop EUGLYCEMIC DIABETIC KETOACIDOSIS (euDKA, anion gap metabolic acidosis and ketonemia with normal or only mildly elevated blood glucose < 250 mg/dL), which is notoriously under-recognized and life-threatening; (2) METFORMIN is held the morning of surgery (or 24-48 hours prior if radiocontrast is used or renal hypoperfusion is anticipated) to avoid lactic acidosis; (3) BASAL INSULIN (insulin glargine): reduce by 20-25% (e.g., administer 75-80% of normal dose) the evening prior to surgery to prevent nocturnal hypoglycemia while maintaining basal suppression of lipolysis; and (4) SHORT-ACTING PRANDIAL INSULIN (lispro) is held while the patient is NPO."
      ],
      [
        "Continue empagliflozin and metformin through the morning of surgery with a sip of water to ensure strict glycemic control",
        "Continuing SGLT2 inhibitors through surgery dramatically increases the risk of fatal perioperative euglycemic diabetic ketoacidosis; metformin risks lactic acidosis."
      ],
      [
        "Discontinue all insulin glargine and lispro completely for 48 hours prior to surgery and administer only oral empagliflozin",
        "Completely stopping basal insulin in an insulin-requiring diabetic causes rapid diabetic ketoacidosis, severe hyperglycemia, and dehydration."
      ],
      [
        "Administer a double dose of insulin glargine (48 units) the night before surgery to cover intraoperative glucose spikes",
        "Doubling basal insulin before prolonged fasting precipitates severe, fatal intraoperative hypoglycemia during general anesthesia."
      ],
      [
        "Switch all medications immediately to an intensive subcutaneous sliding-scale regular insulin regimen without basal insulin",
        "Sliding-scale monotherapy without basal insulin leads to severe glycemic lability (frequent swings between hyper- and hypoglycemia) and poor surgical outcomes."
      ]
    ],
    "shortestValidSolution": "Type 2 DM on SGLT2i + Basal insulin before surgery = Hold SGLT2i 3-4 days (prevents euDKA) + Reduce basal insulin 20-25% + Hold prandial insulin.",
    "necessaryInference": "Apply Endocrine Society guidelines: hold SGLT2 inhibitors 3-4 days pre-op to prevent euglycemic DKA, and reduce basal insulin by 20-25% during pre-op fasting.",
    "strongestDistractor": "Continue empagliflozin and metformin through the morning of surgery with a sip of water to ensure strict glycemic control",
    "distractorExclusion": "Continuing SGLT2 inhibitors through surgery triggers life-threatening euglycemic DKA, which often goes unrecognized due to normal blood glucose levels.",
    "citation": "Handelsman Y, Henry RR, Bloomgarden ZT, et al. American Association of Clinical Endocrinologists and American College of Endocrinology Position Statement on the Association of SGLT-2 Inhibitors and Diabetic Ketoacidosis. Endocr Pract. 2016;22(6):753-762. PMID: 27082776.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/endocrinology perioperative item testing protocol for SGLT2 inhibitor cessation (preventing euglycemic DKA) and basal insulin reduction.",
      "distractorExclusionNotes": "Distractors feature continuing SGLT2i causing fatal euDKA, dangerous complete basal insulin cessation, lethal doubling of basal insulin, and erratic sliding-scale monotherapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0610",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Perioperative Adrenal Insufficiency and Stress-Dose Corticosteroids",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old woman with severe rheumatoid arthritis is admitted for elective total knee arthroplasty. Her outpatient medications include oral prednisone 15 mg daily for the past 2 years, methotrexate 15 mg weekly, and folic acid. Physical examination reveals cushingoid features, including mild facial fullness (moon facies), a dorsocervical fat pad, and skin thinning. Blood pressure is 126/78 mm Hg, and pulse is 72/min. Routine laboratory studies show normal electrolytes, serum glucose 118 mg/dL, and normal complete blood count. The surgical team consults internal medicine regarding the necessity and dosing of perioperative corticosteroid coverage ('stress-dose steroids'). Which of the following represents the most appropriate management regarding perioperative corticosteroid administration for this patient?",
    "choices": [
      [
        "Administer intravenous hydrocortisone (e.g., 50 to 100 mg IV prior to surgical induction, followed by 50 mg IV every 8 hours for 24 hours), then rapidly taper back to her baseline oral prednisone dose",
        "Patients receiving chronic exogenous glucocorticoids (>5 mg/day of prednisone or equivalent for >3-4 weeks) develop SUPPRESSION OF THE HYPOTHALAMIC-PITUITARY-ADRENAL (HPA) AXIS due to negative feedback inhibition of hypothalamic CRH and pituitary ACTH, resulting in bilateral adrenal cortical atrophy. During the physiologic stress of major surgery, normal individuals mount an immediate 5- to 10-fold increase in endogenous cortisol secretion (up to 150-200 mg/day of hydrocortisone equivalent). In patients with HPA axis suppression, inability to produce endogenous cortisol can precipitate ACUTE ADRENAL CRISIS, manifested by severe vasodilatory shock refractory to fluids and vasopressors, hypoglycemia, hyponatremia, and hyperkalemia. Guidelines categorize surgical stress: (1) Minor stress (hernia, local): take morning baseline oral dose; (2) MODERATE SURGICAL STRESS (TOTAL JOINT ARTHROPLASTY, open cholecystectomy): administer INTRAVENOUS HYDROCORTISONE 50-75 MG IV ON CALL TO OR, followed by 50 mg IV q8h for 24 hours, then quickly taper to baseline dose; (3) Major stress (cardiac, major abdominal): 100 mg IV loading dose, then 50-100 mg q8h for 48-72 hours. Prolonged supra-physiologic steroid therapy must be avoided as it impairs surgical wound healing and increases infection risk."
      ],
      [
        "Withhold all prednisone completely on the day of surgery and for 5 days postoperatively to minimize surgical site infection risk",
        "Abruptly withholding chronic corticosteroids in a patient with an atrophic HPA axis precipitates life-threatening intraoperative circulatory shock and adrenal crisis."
      ],
      [
        "Perform an emergency rapid ACTH (cosyntropin) stimulation test immediately in the preoperative holding area before deciding on therapy",
        "A patient taking prednisone 15 mg daily for 2 years has clinically certain HPA suppression and cushingoid features; delaying surgery for testing is unnecessary."
      ],
      [
        "Administer high-dose intravenous dexamethasone 20 mg every 6 hours for 7 days postoperatively",
        "Supra-therapeutic dexamethasone for 7 days causes severe wound dehiscence, severe hyperglycemia, and secondary opportunistic bacterial sepsis."
      ],
      [
        "Administer oral fludrocortisone 0.5 mg daily as monotherapy without any glucocorticoid supplementation",
        "Fludrocortisone is a pure mineralocorticoid; acute adrenal crisis requires glucocorticoid replacement (hydrocortisone) to restore vascular tone and hepatic gluconeogenesis."
      ]
    ],
    "shortestValidSolution": "Chronic prednisone 15 mg (2 yrs) + total knee arthroplasty = Suppressed HPA axis -> Stress-dose IV Hydrocortisone (50-100 mg) for 24 hrs, then baseline.",
    "necessaryInference": "Recognize HPA axis suppression from chronic steroid use and prescribe appropriate moderate-stress perioperative hydrocortisone coverage.",
    "strongestDistractor": "Withhold all prednisone completely on the day of surgery and for 5 days postoperatively to minimize surgical site infection risk",
    "distractorExclusion": "Abruptly withholding steroids in an HPA-suppressed patient triggers acute cardiovascular collapse and refractory vasodilatory adrenal crisis during anesthesia.",
    "citation": "Liu MM, Reidy AB, Saatee S, et al. Perioperative steroid management: approaches based on current evidence. Anesthesiology. 2017;127(1):166-172. PMID: 28481846.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/endocrinology perioperative item testing stress-dose corticosteroid protocols in patients with chronic HPA axis suppression.",
      "distractorExclusionNotes": "Distractors feature lethal steroid withdrawal precipitating adrenal crisis, unnecessary pre-op cosyntropin testing, excessive prolonged dexamethasone, and isolated fludrocortisone.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0611",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Perioperative Biologic Immunosuppressant Interruption Timing",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old woman with severe, seropositive rheumatoid arthritis is scheduled for elective total hip arthroplasty. Her current medications are subcutaneous adalimumab (an anti-tumor necrosis factor-alpha biologic agent) 40 mg every 2 weeks, oral methotrexate 15 mg once weekly, and oral folic acid 1 mg daily. Her joint disease has been well controlled with no recent arthritis flares. Physical examination reveals stable deformities of the MCP joints without active warmth or synovitis. Complete blood count and renal function are normal. The orthopedic surgeon requests recommendations regarding the preoperative timing of holding and resuming her immunosuppressive medications to minimize surgical site infection while preventing postoperative disease flare. Based on the American College of Rheumatology (ACR) and American Association of Hip and Knee Surgeons (AAHKS) clinical practice guidelines, which of the following is the most appropriate management strategy?",
    "choices": [
      [
        "Schedule surgery at the end of the 2-week dosing cycle (in the third week following the last injection), hold adalimumab, continue methotrexate without interruption, and resume adalimumab approximately 14 days postoperatively once the surgical wound is completely healed with no signs of infection",
        "The American College of Rheumatology (ACR) and American Association of Hip and Knee Surgeons (AAHKS) published joint evidence-based guidelines for perioperative management of antirheumatic medications in patients undergoing elective total joint arthroplasty: (1) BIOLOGIC AGENTS (e.g., TNF-alpha inhibitors like ADALIMUMAB, etanercept, infliximab; IL-6 inhibitors; T-cell co-stimulation blockers): BIOLOGIC MEDICATIONS INCREASE SURGICAL SITE INFECTIONS (SSIs) AND PROSTHETIC JOINT INFECTIONS (PJIs). Guidelines mandate that BIOLOGIC THERAPY SHOULD BE HELD PRIOR TO SURGERY FOR ONE DOSING CYCLE BEYOND THE USUAL DOSING INTERVAL. For adalimumab (dosed every 2 weeks), the surgery should be scheduled during the 3rd week after the last dose (i.e. at week 3, which is 1 week beyond the scheduled 2-week dose). Biologics should ONLY BE RESUMED POSTOPERATIVELY (typically 14 days post-op) ONCE SUTURES/STAPLES ARE REMOVED, THE WOUND IS FULLY HEALED WITHOUT ERYTHEMA OR DRAINAGE, AND THERE IS NO SYSTEMIC INFECTION; and (2) CONVENTIONAL SYNTHETIC DMARDS (specifically METHOTREXATE, leflunomide, sulfasalazine, hydroxychloroquine): clinical trials have proven that CONTINUING METHOTREXATE THROUGHOUT THE PERIOPERATIVE PERIOD DOES NOT INCREASE INFECTION OR WOUND COMPLICATIONS, but holding methotrexate dramatically increases the risk of severe postoperative rheumatoid flares."
      ],
      [
        "Administer a double dose of adalimumab 48 hours prior to surgery to suppress perioperative systemic inflammation, and discontinue methotrexate permanently",
        "Administering biologics immediately before joint arthroplasty dramatically elevates the risk of catastrophic prosthetic joint infection and deep periprosthetic sepsis."
      ],
      [
        "Discontinue both adalimumab and methotrexate 6 months prior to surgery and maintain the patient on high-dose oral prednisone monotherapy",
        "Holding DMARDs for 6 months guarantees severe, crippling rheumatoid arthritis flares, and high-dose prednisone significantly increases infection and wound breakdown."
      ],
      [
        "Discontinue oral methotrexate 4 weeks before surgery while continuing subcutaneous adalimumab without interruption throughout the operative week",
        "This completely reverses guideline recommendations: methotrexate should be CONTINUED (safe), while the biologic adalimumab must be HELD (infection risk)."
      ],
      [
        "Administer intravenous immunoglobulin (IVIG) on call to the operating room to neutralize circulating adalimumab antibodies",
        "IVIG does not reverse anti-TNF monoclonal antibodies and exposes the patient to severe transfusion reactions, aseptic meningitis, and acute kidney injury."
      ]
    ],
    "shortestValidSolution": "Adalimumab + Methotrexate before hip arthroplasty = Hold biologic for 1 dosing cycle (schedule week 3); CONTINUE methotrexate; resume biologic once wound heals.",
    "necessaryInference": "Apply ACR/AAHKS guidelines: continue methotrexate throughout surgery, but hold biologic agents for 1 dosing cycle beyond the regular interval, resuming post-wound healing.",
    "strongestDistractor": "Discontinue oral methotrexate 4 weeks before surgery while continuing subcutaneous adalimumab without interruption throughout the operative week",
    "distractorExclusion": "This inverts evidence-based guidelines: continuing methotrexate is safe and prevents flares, whereas continuing biologics sharply increases prosthetic joint infection.",
    "citation": "Goodman SM, Springer B, Guyatt G, et al. 2017 American College of Rheumatology/American Association of Hip and Knee Surgeons Guideline for the Perioperative Management of Antirheumatic Medication in Patients Undergoing Elective Total Hip or Total Knee Arthroplasty. J Arthroplasty. 2017;32(9):2628-2638. PMID: 28629631.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/rheumatology perioperative item testing application of ACR/AAHKS guidelines for biologics (hold 1 cycle) vs methotrexate (continue).",
      "distractorExclusionNotes": "Distractors feature dangerous pre-op biologic loading, excessive 6-month holds causing crippling flares, inverted management (stopping MTX while continuing biologics), and IVIG.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0612",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "General Principles",
    "topic": "Postoperative Fever Timeline and Etiologic Classification",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man underwent an uncomplicated open sigmoid colectomy for diverticulitis 18 hours ago. This morning (postoperative day 1), routine vital signs demonstrate: temperature 38.3 C (101.0 F), heart rate 86/min, blood pressure 124/76 mm Hg, and respirations 18/min. Pulse oximetry is 96% on 2 L/min nasal cannula. The patient reports mild incisional discomfort well controlled by patient-controlled analgesia, but no cough, shortness of breath, chest pain, or chills. Physical examination shows a clean surgical dressing with no erythema, hematoma, or purulent drainage. Lung auscultation reveals mild, scattered decreased breath sounds at the bilateral posterior lung bases with faint end-inspiratory crackles that clear after coughing. Cardiovascular examination is normal. The Foley catheter is draining clear yellow urine. Bilateral lower extremities are non-tender without swelling or calf pain. Which of the following is the most appropriate management for this patient's postoperative fever?",
    "choices": [
      [
        "Reassure the surgical team, encourage vigorous incentive spirometry, aggressive pulmonary toilet, and early ambulation, without ordering an extensive infectious workup or initiating empiric antibiotics",
        "POSTOPERATIVE FEVER is common and follows a predictable temporal pattern, classically remembered by the '5 Ws': (1) WIND (Days 1-2): ATELECTASIS / systemic surgical cytokine release. Alveolar collapse secondary to shallow breathing, diaphragmatic splinting, and anesthetic alveolar hypoventilation produces transient low-grade fever within the first 24-48 hours. However, large studies show that fever in the first 24 hours is overwhelmingly NON-INFECTIOUS, mediated by endogenous inflammatory cytokines (IL-1, IL-6, TNF-alpha) released from surgical tissue injury; (2) WATER (Days 3-5): URINARY TRACT INFECTION, especially with indwelling urinary catheters; (3) WOUND (Days 4-7): SURGICAL SITE INFECTION (superficial or deep fascial); (4) WALKING (Days 5-7+): DEEP VENOUS THROMBOSIS / PULMONARY EMBOLISM; (5) WONDER DRUGS / WHAT DID WE DO (Day 7+): Drug fevers, transfusion reactions, or deep intra-abdominal abscesses. On POSTOPERATIVE DAY 1 (18 hours post-op), a low-grade fever (< 38.5 C) in an otherwise stable, asymptomatic patient is PHYSIOLOGIC AND BENIGN. Extensive infectious workups (blood cultures, chest CT, urinalysis) and empiric broad-spectrum antibiotics are completely unwarranted. Management consists of INCENTIVE SPIROMETRY, DEEP BREATHING, PAIN CONTROL to facilitate coughing, and EARLY MOBILIZATION."
      ],
      [
        "Initiate broad-spectrum intravenous piperacillin-tazobactam plus vancomycin for acute hospital-acquired sepsis",
        "Broad-spectrum antibiotics on POD 1 for mild physiological fever without systemic toxicity promote Clostridioides difficile colitis and antimicrobial resistance."
      ],
      [
        "Perform urgent surgical re-exploration of the abdomen to evaluate for an early anastomotic leak",
        "Anastomotic leaks characteristically present on postoperative days 5 to 7 with severe peritonitis, hemodynamic instability, and leukocytosis, not mild POD 1 fever."
      ],
      [
        "Order an emergency contrast-enhanced CT of the chest and lower extremity venous duplex ultrasound to rule out PE",
        "Pulmonary embolism typically presents around postoperative day 5-7 with acute dyspnea, pleuritic pain, and hypoxia; screening on POD 1 is unjustified."
      ],
      [
        "Remove the surgical incision dressing and perform immediate bedside sharp surgical debridement of the wound",
        "Unroofing a clean surgical incision on POD 1 destroys the sterile fibrin seal and introduces hospital-acquired pathogens without clinical indication."
      ]
    ],
    "shortestValidSolution": "Fever 38.3 C on POD 1 (18 hrs) + clear lungs + clean wound = Benign post-op atelectasis/cytokine response -> Incentive spirometry + Early ambulation (NO antibiotics).",
    "necessaryInference": "Apply the 5 Ws timeline of postoperative fever: POD 1 fever is benign/atelectasis/cytokine release, requiring lung expansion and ambulation rather than workup/antibiotics.",
    "strongestDistractor": "Initiate broad-spectrum intravenous piperacillin-tazobactam plus vancomycin for acute hospital-acquired sepsis",
    "distractorExclusion": "Empiric broad-spectrum antibiotics for uncomplicated POD 1 low-grade fever violate stewardship guidelines and risk C. difficile without altering benign fever course.",
    "citation": "Pile JC. Evaluating postoperative fever: a focused approach. Cleve Clin J Med. 2006;73 Suppl 1:S62-S66. PMID: 16570551.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 surgery/internal medicine postoperative care item testing knowledge of the 5 Ws fever timeline (POD 1 benign atelectasis vs delayed infection).",
      "distractorExclusionNotes": "Distractors feature inappropriate broad-spectrum antibiotics, premature re-operation for POD 5-7 leaks, unjustified emergency CT/duplex, and wound disruption.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0613",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "Renal",
    "topic": "Postoperative Oliguria Bedside Bladder Ultrasound Assessment",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man who underwent an elective open left total hip arthroplasty under general anesthesia 4 hours ago is in the post-anesthesia care unit (PACU). He has received 2.5 liters of balanced crystalloid solution perioperatively and has an estimated blood loss of 250 mL. An indwelling Foley catheter was placed in the operating room. Over the past 2 hours, the nurse notes that the patient's urine output has totaled only 15 mL (< 0.2 mL/kg/hr, indicating acute oliguria). The patient reports mild lower abdominal pressure and cramping, but denies shortness of breath or chest pain. Vital signs: blood pressure 138/84 mm Hg, pulse 78/min, respirations 14/min, and oxygen saturation 98% on room air. Physical examination demonstrates moist oral mucous membranes, normal skin turgor, clear lung fields bilaterally, and no peripheral edema. The abdomen is mildly full and tender in the suprapubic area. The surgical hip dressing is dry and intact. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Perform a bedside portable bladder ultrasonography scan or flush the indwelling urinary catheter with sterile saline to evaluate for mechanical catheter occlusion",
        "POSTOPERATIVE OLIGURIA (defined as urine output < 0.5 mL/kg/hr for >=2 consecutive hours) is an extremely common clinical problem in the PACU. Causes are classified into: (1) PRERENAL: intravascular volume depletion, hemorrhage, or third-spacing; (2) INTRINSIC RENAL: acute tubular necrosis from hypotension, sepsis, or nephrotoxins; and (3) POSTRENAL (OBSTRUCTIVE): mechanical urinary catheter occlusion (kinking, blood clots, sediment), malpositioned catheter balloon in the urethra, or acute urinary retention. Before administering fluid boluses (which risk volume overload and pulmonary edema) or diuretics (which worsen prerenal hypoperfusion), THE IMMEDIATE FIRST STEP IN EVALUATING OLIGURIA IN A CATHETERIZED PATIENT IS TO RULE OUT MECHANICAL POSTRENAL OBSTRUCTION. This is done by: (1) Inspecting the drainage tubing for external kinks or dependent loops; (2) Performing a BEDSIDE BLADDER ULTRASOUND SCAN (which rapidly detects urinary retention with bladder volumes >300-500 mL behind a clogged catheter); and (3) GENTLE STERILE SALINE IRRITATION / FLUSHING of the Foley catheter to clear luminal blood clots or debris. If the catheter is clogged, flushing or replacing the catheter will immediately relieve obstruction and produce a large gush of retained urine."
      ],
      [
        "Administer an immediate intravenous bolus of furosemide 40 mg to stimulate proximal tubular kaliuresis and urine flow",
        "Administering a loop diuretic before evaluating for catheter obstruction or volume status is dangerous and can precipitate severe hypovolemic collapse or acute kidney injury."
      ],
      [
        "Infuse 2 liters of 0.9% normal saline rapidly over 30 minutes to expand intravascular volume",
        "The patient is hemodynamically stable with moist mucous membranes and suprapubic fullness; infusing massive crystalloids before clearing a blocked catheter causes acute pulmonary edema."
      ],
      [
        "Order emergent non-contrast renal computed tomography (CT) to assess for acute bilateral ureteral transection",
        "Pelvic CT exposes the patient to unnecessary radiation and delays simple bedside evaluation of the most common cause: a kinked or clogged Foley catheter."
      ],
      [
        "Initiate continuous low-dose intravenous dopamine infusion to stimulate renal vascular dopaminergic vasodilatation",
        "Renal-dose dopamine does not prevent or treat acute oliguria or renal failure and carries significant risks of tachyarrhythmias and myocardial ischemia."
      ]
    ],
    "shortestValidSolution": "PACU oliguria (<0.2 mL/kg/hr) with Foley + suprapubic fullness = Catheter occlusion/retention -> Bedside bladder ultrasound or catheter flush.",
    "necessaryInference": "Select bedside bladder ultrasound and catheter flushing as the mandatory first step to rule out postrenal mechanical catheter obstruction in postoperative oliguria.",
    "strongestDistractor": "Administer an immediate intravenous bolus of furosemide 40 mg to stimulate proximal tubular kaliuresis and urine flow",
    "distractorExclusion": "Loop diuretics in an obstructed patient worsen painful bladder distension; diuretic administration before ruling out mechanical obstruction is malpractice.",
    "citation": "Goren O, Matot I. Perioperative acute kidney injury. Br J Anaesth. 2015;115 Suppl 2:ii3-ii14. PMID: 26658199.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 surgery/internal medicine postoperative care item testing stepwise evaluation of acute postoperative oliguria (mechanical obstruction exclusion first).",
      "distractorExclusionNotes": "Distractors feature premature dangerous loop diuresis, blind massive fluid boluses, unnecessary emergency renal CT, and obsolete 'renal-dose' dopamine.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0614",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Postoperative Myocardial Infarction Painless Presentation and Troponin",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man with a history of hypertension, hyperlipidemia, and peripheral artery disease underwent an uncomplicated open aortofemoral bypass 36 hours ago. He has been receiving continuous epidural analgesia with bupivacaine and hydromorphone, and reports excellent surgical pain relief. On postoperative day 2, the bedside telemetry monitor alarms for new sinus tachycardia at 114/min. Vital signs: blood pressure 98/62 mm Hg (baseline 136/84 mm Hg), respirations 22/min, and oxygen saturation 92% on 2 L/min nasal cannula. When questioned, the patient denies any chest pain, pressure, neck radiation, or epigastric discomfort, but states he feels mildly short of breath and tired. Physical examination shows cool, clammy extremities, fine crackles at the bilateral lung bases, and an S3 gallop. The surgical dressing is clean with no active bleeding. Hemoglobin is 10.4 g/dL. A 12-lead electrocardiogram demonstrates 2-mm ST-segment depressions in leads V4-V6 and II, III, and aVF with 1-mm ST-elevation in lead aVR, which are new compared to his preoperative baseline tracing. Which of the following is the most appropriate next step in diagnostic and therapeutic management?",
    "choices": [
      [
        "Draw serial high-sensitivity cardiac troponin, obtain an urgent bedside transthoracic echocardiogram, initiate supplemental oxygen, and obtain emergency cardiology consultation for acute postoperative myocardial infarction",
        "POSTOPERATIVE MYOCARDIAL INFARCTION (POMI) is a leading cause of perioperative mortality, occurring typically within the FIRST 48 TO 72 HOURS POSTOPERATIVELY. Crucially, >70% TO 80% OF POSTOPERATIVE MIs ARE COMPLETELY PAINLESS (SILENT), masked by postoperative systemic opioids, epidural analgesia, or residual surgical anesthesia. Instead of classic substernal chest pressure, patients present with SUBTLE OR ATYPICAL MANIFESTATIONS: unexplained sinus tachycardia, new hypotension, acute dyspnea, hypoxemia, altered mental status, or congestive heart failure (S3 gallop, crackles). Pathophysiologically, POMI can be Type 1 (acute plaque rupture driven by perioperative hypercoagulability and sympathetic surge) or Type 2 (myocardial supply-demand mismatch driven by tachycardia, bleeding, or hypoxemia). Guideline management for suspected POMI includes: (1) IMMEDIATE 12-LEAD ECG and comparison with baseline; (2) SERIAL HIGH-SENSITIVITY CARDIAC TROPONIN MEASUREMENTS; (3) URGENT ECHOCARDIOGRAPHY to assess for new regional wall motion abnormalities; (4) Supportive hemodynamic optimization; and (5) URGENT CARDIOLOGY CONSULTATION to coordinate medical therapy (aspirin, statin, cautious anticoagulation depending on surgical bleeding risk) and evaluate for coronary angiography."
      ],
      [
        "Reassure the surgical team that the lack of chest pain rules out acute myocardial infarction and administer an intravenous fluid bolus for tachycardia",
        "Over 75% of perioperative MIs are completely painless due to anesthesia and analgesia; relying on the absence of chest pain causes fatal diagnostic delays."
      ],
      [
        "Administer an immediate intravenous bolus of 5,000 units of unfractionated heparin followed by full-dose tissue plasminogen activator (tPA)",
        "Thrombolytic therapy (tPA) 36 hours following major vascular aortic reconstruction is strictly contraindicated due to lethal, uncontrolled surgical hemorrhage."
      ],
      [
        "Increase the continuous epidural hydromorphone infusion rate to treat presumed occult incisional pain",
        "Increasing opioids in a patient with new cardiogenic hypotension, pulmonary edema, and ischemic ECG changes worsens respiratory depression and hemodynamic collapse."
      ],
      [
        "Perform emergent chest radiography and initiate empiric broad-spectrum vancomycin for acute hospital-acquired pneumonia",
        "While lung crackles are present, the primary acute life-threatening diagnosis demonstrated by the ECG and S3 gallop is ischemic myocardial infarction."
      ]
    ],
    "shortestValidSolution": "Vascular surgery POD 2 + painless tachycardia/hypotension + new ST-depressions + S3 = Postoperative MI -> Serial Troponins + Urgent Echo + Cardiology consult.",
    "necessaryInference": "Recognize that >75% of perioperative MIs are silent/painless due to postoperative analgesia, and identify ST depressions with troponin elevation as acute postoperative ischemia.",
    "strongestDistractor": "Reassure the surgical team that the lack of chest pain rules out acute myocardial infarction and administer an intravenous fluid bolus for tachycardia",
    "distractorExclusion": "Painless presentation is the hallmark of perioperative MI; dismissing ischemia because the patient lacks chest pain is a classic lethal clinical error.",
    "citation": "Devereaux PJ, Biccard BM, Sigamani A, et al. Association of postoperative high-sensitivity troponin levels with 30-day and 1-year mortality among patients undergoing noncardiac surgery. JAMA. 2017;317(16):1642-1651. PMID: 28444280.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology/perioperative medicine item testing recognition of silent postoperative myocardial infarction (masked by analgesia) and urgent diagnostic workup.",
      "distractorExclusionNotes": "Distractors feature dangerous dismissal of painless ischemia, contraindicated thrombolysis after major vascular surgery, opioid escalation in cardiogenic shock, and pneumonia misattribution.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0615",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Malignant Hyperthermia Intraoperative Presentation and Dantrolene",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old previously healthy man is undergoing emergency open reduction and internal fixation of a fractured femur following a motorcycle crash. General anesthesia was induced 25 minutes ago using intravenous propofol and succinylcholine for rapid sequence intubation, and maintained with inhaled sevoflurane in 50% oxygen. Five minutes after induction, the anesthesiologist noted severe masseter muscle rigidity that made mouth opening difficult. Currently, continuous capnography reveals an unexplained, progressive rise in end-tidal carbon dioxide (ETCO2) from 38 mm Hg to 78 mm Hg, which continues to climb despite increasing minute ventilation threefold. The patient develops sinus tachycardia at 144/min and frequent multifocal ventricular premature complexes. Blood pressure is 164/102 mm Hg. Temperature measured via esophageal probe has risen from 37.0 C to 39.4 C (102.9 F) over the past 10 minutes. Physical examination reveals generalized muscle rigidity and mottled cyanotic skin. Arterial blood gas shows: pH 7.12, PaCO2 74 mm Hg, PaO2 110 mm Hg, base excess -14 mEq/L, and serum potassium 6.4 mEq/L. Which of the following is the most appropriate immediate sequence of interventions?",
    "choices": [
      [
        "Discontinue sevoflurane immediately, hyperventilate with 100% oxygen at high fresh gas flows, administer intravenous dantrolene (2.5 mg/kg bolus repeated until symptoms subside), and initiate active cooling and hyperkalemia management",
        "This patient exhibits fulminant MALIGNANT HYPERTHERMIA (MH), an autosomal dominant pharmacogenetic hypermetabolic crisis of skeletal muscle triggered by VOLATILE INHALATIONAL ANESTHETICS (sevoflurane, desflurane, isoflurane) or the depolarizing neuromuscular blocker SUCCINYLCHOLINE. In >70% of cases, it is caused by mutations in the RYR1 gene encoding the SKELETAL MUSCLE RYANODINE RECEPTOR (or CACNA1S encoding the L-type calcium channel). Uncontrolled, massive release of calcium from the sarcoplasmic reticulum into the myoplasm drives hyperactivation of myosin ATPase, sustained muscle contracture, hypermetabolism, and cellular breakdown. THE EARLIEST AND MOST RELIABLE CLINICAL SIGN IS UNEXPLAINED, RAPIDLY ESCALATING END-TIDAL CO2 (ETCO2) REFRACTORY TO HYPERVENTILATION, accompanied by masseter spasm, tachycardia, and mixed severe respiratory and metabolic lactic acidosis. Hyperthermia (temperature rising rapidly up to 42 C) and rhabdomyolysis (hyperkalemia, myoglobinuria, renal failure) are late manifestations. Emergency protocol: (1) IMMEDIATELY DISCONTINUE ALL TRIGGERING AGENTS (turn off volatile gases, avoid succinylcholine); (2) HYPERVENTILATE with 100% O2 at maximal fresh gas flows (>=10 L/min); (3) Call for the MH cart and help; (4) ADMINISTER INTRAVENOUS DANTROLENE (2.5 mg/kg rapid IV bolus, repeated up to 10 mg/kg until hypermetabolism is controlled). Dantrolene directly binds the ryanodine receptor, blocking sarcoplasmic calcium release; and (5) Treat hyperkalemia (calcium chloride, insulin/glucose) and initiate active cooling."
      ],
      [
        "Administer intravenous succinylcholine 100 mg bolus to overcome severe masseter rigidity and reduce muscle tone",
        "Succinylcholine is a direct trigger of malignant hyperthermia; administering it during an active MH crisis accelerates muscle necrosis, hyperkalemic arrest, and death."
      ],
      [
        "Increase the concentration of inhaled sevoflurane to 4% to deepen general anesthesia and relax skeletal muscle",
        "Volatile anesthetics are the causal trigger of MH; increasing the sevoflurane concentration fuels calcium release and rapidly kills the patient."
      ],
      [
        "Administer high-dose intravenous bromocriptine monotherapy via a nasogastric tube",
        "Bromocriptine is a central dopamine agonist for neuroleptic malignant syndrome; it has zero efficacy for peripheral sarcoplasmic calcium crisis in malignant hyperthermia."
      ],
      [
        "Perform emergent bilateral fasciotomies of all four lower extremity compartments before medical therapy",
        "Fasciotomies are indicated for late compartment syndrome, but delaying life-saving dantrolene while performing surgery results in intraoperative cardiac arrest."
      ]
    ],
    "shortestValidSolution": "Inhaled sevoflurane/succinylcholine + masseter spasm + skyrocketing ETCO2 + temp 39.4 + K 6.4 = Malignant hyperthermia -> Stop triggers + 100% O2 + IV Dantrolene.",
    "necessaryInference": "Recognize malignant hyperthermia (ETCO2 rise, masseter spasm, hyperthermia) and execute immediate emergency bundle: stop volatile agents, hyperventilate, and give IV dantrolene.",
    "strongestDistractor": "Administer intravenous succinylcholine 100 mg bolus to overcome severe masseter rigidity and reduce muscle tone",
    "distractorExclusion": "Succinylcholine is a potent triggering agent of malignant hyperthermia; giving it to treat MH-induced rigidity accelerates fatal rhabdomyolysis and hyperkalemic arrest.",
    "citation": "Hopkins PM, Girard T, Dalay S, et al. Malignant hyperthermia 2020: guideline from the Association of Anaesthetists. Anaesthesia. 2021;76(5):655-664. PMID: 33179269.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 anesthesiology/critical care emergency item testing recognition of malignant hyperthermia (rising ETCO2, masseter spasm) and immediate dantrolene rescue.",
      "distractorExclusionNotes": "Distractors feature lethal administration of triggering agents (succinylcholine, sevoflurane), NMS treatment (bromocriptine), and surgical delays before dantrolene.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0616",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Postoperative Ileus vs Small Bowel Obstruction Clinical Differentiation",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old woman underwent an uncomplicated open low anterior resection with primary colorectal anastomosis for rectal adenocarcinoma 4 days ago. Her postoperative recovery was initially unremarkable, but over the past 24 hours (postoperative day 4), she has developed progressive nausea, abdominal distension, and two episodes of bilious vomiting. She has not passed flatus or stool for 48 hours. She is receiving intravenous morphine via patient-controlled analgesia. Physical examination reveals an uncomfortable woman with a diffusely distended, tympanitic abdomen with mild generalized tenderness but no localized guarding, rebound tenderness, or peritoneal signs. On auscultation, bowel sounds are hypoactive to completely absent in all four quadrants. The surgical midline incision is clean and intact. Vital signs: temperature 37.4 C (99.3 F), blood pressure 122/74 mm Hg, pulse 82/min, and respirations 16/min. Complete blood count and serum electrolytes are normal. Plain abdominal radiographs demonstrate dilated gas-filled loops throughout both the small bowel and the large bowel extending down into the rectum, without discrete air-fluid step-ladder levels or a sharp cutoff transition zone. Which of the following is the most likely diagnosis and initial management strategy?",
    "choices": [
      [
        "Postoperative paralytic ileus; managed with cessation or minimization of systemic opioids, correction of electrolytes, bowel rest, and early ambulation",
        "POSTOPERATIVE PARALYTIC ILEUS (POI) is a temporary impairment of coordinated gastrointestinal motility following abdominal surgery, caused by a combination of surgical sympathetic hyperactivity, local peritoneal inflammation, inhibitory neural reflexes, and systemic OPIOID ANALGESIA (which stimulates mu-opioid receptors in the enteric nervous system, arresting peristalsis). Differentiating POSTOPERATIVE ILEUS from MECHANICAL SMALL BOWEL OBSTRUCTION (SBO) is critical: (1) BOWEL SOUNDS: Ileus characteristically exhibits HYPOACTIVE OR COMPLETELY ABSENT BOWEL SOUNDS, whereas early SBO features HYPERACTIVE, HIGH-PITCHED, 'TINKLING' BOWEL SOUNDS; (2) RADIOGRAPHY / CT: Ileus shows DIFFUSE, GENERALIZED DILATION OF BOTH SMALL AND LARGE INTESTINES with air extending throughout the colon and rectum, lacking a transition point. In contrast, mechanical SBO demonstrates dilated small bowel loops with multiple step-ladder air-fluid levels and a DISCRETE TRANSITION POINT with collapsed distal small bowel and empty colon; and (3) CLINICAL COURSE: Ileus typically peaks around POD 3-5 and resolves with supportive care. Initial management of POI entails: (1) MINIMIZING SYSTEMIC OPIOIDS (transition to multimodal opioid-sparing analgesia: acetaminophen, NSAIDs, or peripherally acting mu-opioid antagonists like ALVIMOPAN); (2) Bowel rest (NPO) and nasogastric tube decompression if vomiting is severe; (3) Ensuring electrolyte balance (potassium > 4.0, magnesium > 2.0); and (4) Encouraging EARLY AMBULATION."
      ],
      [
        "Mechanical small bowel obstruction secondary to acute early postoperative adhesions; requiring emergent laparotomy within 6 hours",
        "Mechanical SBO presents with hyperactive tinkling bowel sounds, localized transition point on CT, and collapsed colon; diffuse gas into the rectum with absent sounds indicates ileus."
      ],
      [
        "Acute anastomotic breakdown with generalized fecal peritonitis; requiring emergency end-colostomy Hartmann procedure",
        "Anastomotic dehiscence presents with severe septic shock, rigid board-like abdominal guarding, high fever, and marked leukocytosis, all absent here."
      ],
      [
        "Acute mesenteric arterial embolism; requiring emergent catheter-directed mechanical thrombectomy",
        "Mesenteric ischemia features excruciating pain out of proportion to exam and metabolic lactic acidosis; this patient has mild distension and normal vitals."
      ],
      [
        "Clostridioides difficile fulminant pseudomembranous colitis; requiring oral vancomycin and emergency total colectomy",
        "C. difficile colitis presents with severe profuse watery diarrhea, leukocytosis > 15,000, and fever, not complete obstipation and quiet abdomen."
      ]
    ],
    "shortestValidSolution": "POD 4 + distension + absent bowel sounds + diffuse gas in small and large bowel/rectum = Postoperative ileus -> Stop opioids + Ambulation + Bowel rest.",
    "necessaryInference": "Distinguish postoperative paralytic ileus (absent bowel sounds, diffuse small/large bowel gas down to rectum) from mechanical SBO (tinkling sounds, discrete transition point).",
    "strongestDistractor": "Mechanical small bowel obstruction secondary to acute early postoperative adhesions; requiring emergent laparotomy within 6 hours",
    "distractorExclusion": "Mechanical SBO features hyperactive high-pitched bowel sounds and collapsed distal colon on x-ray; diffuse gas reaching the rectum confirms paralytic ileus.",
    "citation": "Vather R, Trivedi S, Bissett I. Defining postoperative ileus: results of a systematic review and global survey. J Gastrointest Surg. 2013;17(5):962-972. PMID: 23354924.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 surgery/gastroenterology postoperative item testing clinical and radiographic differentiation between postoperative paralytic ileus and mechanical SBO.",
      "distractorExclusionNotes": "Distractors feature premature laparotomy for misdiagnosed SBO, catastrophic anastomotic leak peritonitis, acute mesenteric ischemia, and C. difficile colitis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0617",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Postoperative Delirium Multimodal Non-Pharmacologic Prevention",
    "provisionalDifficulty": 5,
    "stem": "An 82-year-old woman with mild cognitive impairment, hypertension, and osteoarthritis is admitted to the orthopedic floor following successful open reduction and internal fixation of a femoral neck fracture sustained in a fall at home. Her preoperative medications included donepezil 10 mg daily and lisinopril 20 mg daily. In the recovery room, she is mildly confused, asking repeatedly where she is and attempting to pull out her peripheral intravenous line. Physical examination shows an elderly, frail woman with normal vital signs. Neurologic examination shows no focal motor or cranial nerve deficits. Serum electrolytes, complete blood count, and urinalysis are normal. The orthopedic resident considers prescribing scheduled low-dose lorazepam or haloperidol to manage her agitation and prevent falls. Based on current American Geriatrics Society (AGS) guidelines for the prevention and management of postoperative delirium, which of the following is the most appropriate primary intervention strategy?",
    "choices": [
      [
        "Implement a structured multicomponent non-pharmacologic delirium bundle: repeated verbal reorientation, cognitive stimulation, sleep-wake cycle preservation, early mobilization, provision of visual and hearing aids, and strict avoidance of benzodiazepines and anticholinergic medications",
        "POSTOPERATIVE DELIRIUM occurs in 15% to 50% of elderly patients undergoing major orthopedic or vascular surgery (especially after hip fracture repair). It is characterized by acute onset, fluctuating course, inattention, and disorganized thinking. Predisposing risk factors include advanced age (>70), pre-existing cognitive impairment (dementia/MCI), sensory deprivation, and functional dependence. Current American Geriatrics Society (AGS) and NICE clinical practice guidelines emphasize that PRIMARY PREVENTION RELIES OVERWHELMINGLY ON MULTICOMPONENT NON-PHARMACOLOGIC INTERVENTIONS (the Hospital Elder Life Program [HELP] model), which reduce delirium incidence by >40-50%: (1) FREQUENT REORIENTATION with clocks, calendars, and family presence; (2) SLEEP-WAKE HYGIENE (minimize nocturnal vital sign checks and noise, daytime natural lighting); (3) EARLY MOBILIZATION and physical therapy; (4) RESTORING SENSORY AIDS (ensuring the patient wears her eyeglasses and hearing aids immediately); (5) Minimizing physical restraints, foley catheters, and tethers; and (6) STRICT AVOIDANCE OF DELIRIOGENIC DRUGS (BENZODIAZEPINES, diphenhydramine, meperidine, anticholinergics). Antipsychotics (haloperidol, quetiapine) ARE NOT RECOMMENDED FOR PREVENTION or routine treatment of delirium, and are reserved strictly as short-term rescue for severe agitation that threatens immediate physical safety."
      ],
      [
        "Prescribe scheduled oral lorazepam 1 mg every 8 hours around the clock to calm anxiety and prevent nocturnal agitation",
        "Benzodiazepines are highly deliriogenic in the elderly, doubling the incidence, duration, and severity of delirium and increasing fall risks."
      ],
      [
        "Initiate prophylactic oral haloperidol 2 mg twice daily to prevent the development of hyperactive delirium",
        "Antipsychotic prophylaxis does not prevent delirium or reduce hospital mortality, and exposes elderly patients to extrapyramidal symptoms and cardiac QT prolongation."
      ],
      [
        "Apply bilateral wrist physical restraints and maintain strict continuous bedrest for 7 days postoperatively",
        "Physical restraints increase fear, violent agitation, pressure ulcers, and aspiration; they worsen delirium duration and are strictly discouraged."
      ],
      [
        "Perform emergent lumbar puncture and order continuous video electroencephalography (EEG) monitoring",
        "Invasive lumbar puncture and continuous video EEG are unwarranted in an afebrile postoperative hip fracture patient with clear environmental delirium triggers."
      ]
    ],
    "shortestValidSolution": "Elderly hip fracture patient at risk for delirium -> Multimodal non-pharmacologic bundle (reorientation, sleep, glasses/hearing aids, avoid benzodiazepines).",
    "necessaryInference": "Apply American Geriatrics Society guidelines: prioritize non-pharmacologic multicomponent bundles and avoid deliriogenic benzodiazepines/antipsychotic prophylaxis.",
    "strongestDistractor": "Prescribe scheduled oral lorazepam 1 mg every 8 hours around the clock to calm anxiety and prevent nocturnal agitation",
    "distractorExclusion": "Benzodiazepines exacerbate delirium, cause paradoxical agitation, double fall risk, and are strictly contraindicated for non-withdrawal delirium.",
    "citation": "American Geriatrics Society Expert Panel on Postoperative Delirium in Older Adults. American Geriatrics Society abstracted clinical practice guideline for postoperative delirium in older adults. J Am Geriatr Soc. 2015;63(1):142-150. PMID: 25495432.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 geriatrics/perioperative medicine item testing application of AGS guidelines for delirium prevention (non-pharmacologic bundles vs contraindicated sedatives).",
      "distractorExclusionNotes": "Distractors feature highly deliriogenic scheduled benzodiazepines (lorazepam), unproven antipsychotic prophylaxis (haloperidol), harmful physical restraints, and invasive workups.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0618",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Postoperative Cognitive Dysfunction in Geriatric Surgical Patients",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old retired mathematics professor is brought to the clinic by his wife 6 weeks after undergoing an uncomplicated elective coronary artery bypass graft (CABG) surgery under general anesthesia with cardiopulmonary bypass. His wife reports that while he has physically recovered well and walks 1 mile daily, he has experienced persistent, frustrating cognitive changes since the surgery. He has difficulty balancing his checkbook, frequently misplaces his glasses and car keys, struggles to recall names of long-time friends, and takes twice as long to complete daily crossword puzzles. His wife is deeply concerned that he has developed Alzheimer disease. Prior to surgery, he had no memory complaints and lived independently. Physical and neurologic examinations are completely normal. Montreal Cognitive Assessment (MoCA) score is 23/30 (loss of points on delayed recall, executive abstraction, and trail making). Laboratory studies, including complete blood count, comprehensive metabolic panel, vitamin B12, and thyroid-stimulating hormone (TSH), are normal. Non-contrast brain MRI shows mild, age-appropriate cerebral volume loss and chronic microvascular white matter changes without acute territorial ischemia or hydrocephalus. Which of the following is the most likely diagnosis and appropriate counseling?",
    "choices": [
      [
        "Postoperative cognitive dysfunction (POCD); reassure the patient and wife that most patients experience gradual cognitive recovery over 3 to 12 months, and arrange formal neuropsychological follow-up",
        "This patient exhibits POSTOPERATIVE COGNITIVE DYSFUNCTION (POCD), a recognized clinical entity characterized by subtle, persistent deterioration in cognitive performance (specifically memory, executive function, attention, and processing speed) following major surgery and anesthesia. Key distinctions: (1) DURATION AND ONSET: unlike delirium (which presents acutely in the first days post-op with fluctuating attention and consciousness), POCD presents WEEKS TO MONTHS AFTER SURGERY with intact alertness and orientation; (2) RISK FACTORS: advanced age (>65 years), lower baseline educational/cognitive reserve, major surgical procedures (especially CARDIAC SURGERY WITH CARDIOPULMONARY BYPASS due to microemboli, systemic inflammatory response, and cerebral hypoperfusion), and major orthopedic or vascular surgery; and (3) PROGNOSIS: in the majority of patients, POCD IS REVERSIBLE, with GRADUAL CLINICAL IMPROVEMENT OCCURRING OVER 3 TO 12 MONTHS, though a small subset may have protracted deficits. Appropriate clinical management involves: excluding reversible medical etiologies (hypothyroidism, B12 deficiency, structural stroke, depression); providing EMPATHIC REASSURANCE that this is a recognized entity that generally improves; encouraging cognitive stimulation and physical exercise; and arranging REPEAT NEUROPSYCHOLOGICAL TESTING at 6 to 12 months."
      ],
      [
        "Early-onset familial Alzheimer disease; initiate immediate dual therapy with donepezil and memantine",
        "Alzheimer disease is insidious and progressive over years, not a sudden discrete cognitive drop temporally linked to major cardiopulmonary bypass surgery."
      ],
      [
        "Major ischemic stroke in the left middle cerebral artery territory; schedule emergent catheter-directed mechanical thrombectomy",
        "Brain MRI confirms the absence of acute territorial infarction, and catheter thrombectomy has a therapeutic window of 24 hours, not 6 weeks post-op."
      ],
      [
        "Normal pressure hydrocephalus (NPH); refer immediately for urgent surgical placement of a ventriculoperitoneal shunt",
        "NPH is characterized by the classic triad of gait disturbance ('magnetic gait', most prominent early sign), urinary incontinence, and dementia; MRI shows normal ventricles."
      ],
      [
        "Chronic traumatic encephalopathy; inform the family that cognitive decline is irreversible and rapidly fatal within 6 months",
        "CTE results from repetitive repetitive head trauma in contact athletes, not a single elective cardiac surgery, and is not an acute 6-month fatal disorder."
      ]
    ],
    "shortestValidSolution": "74-year-old post-CABG 6 weeks + subtle memory/executive decline + normal labs + normal MRI = Postoperative cognitive dysfunction (POCD) -> Reassure (improves over 3-12 mos).",
    "necessaryInference": "Differentiate POCD (subtle memory decline weeks-to-months post-major cardiac surgery) from acute delirium and irreversible dementia, counseling on gradual recovery.",
    "strongestDistractor": "Early-onset familial Alzheimer disease; initiate immediate dual therapy with donepezil and memantine",
    "distractorExclusion": "Alzheimer disease is an insidious neurodegenerative disorder spanning years; a sudden temporal drop following bypass surgery is classic for POCD, which typically improves.",
    "citation": "Evered L, Silbert B, Knopman DS, et al. Recommendations for the nomenclature of cognitive change associated with anaesthesia and surgery-2018. Anesthesiology. 2018;129(5):872-879. PMID: 30325860.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 geriatrics/perioperative medicine item testing recognition of postoperative cognitive dysfunction (POCD) timeline, cardiac surgery risk, and reassuring prognosis.",
      "distractorExclusionNotes": "Distractors feature Alzheimer disease misdiagnosis, obsolete mechanical thrombectomy at 6 weeks, normal pressure hydrocephalus, and chronic traumatic encephalopathy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0619",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Bariatric Surgery Preoperative Nutritional Screening and Thiamine",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old woman with class III obesity (BMI 48 kg/m^2) is undergoing comprehensive preoperative multidisciplinary evaluation prior to elective laparoscopic Roux-en-Y gastric bypass. She reports adhering to multiple restrictive fad diets over the past 2 years. Her medical history includes obstructive sleep apnea and non-alcoholic fatty liver disease. Laboratory screening reveals: hemoglobin 10.8 g/dL (microcytic, MCV 74 fL), serum ferritin 8 ng/mL (iron deficiency), serum 25-hydroxyvitamin D 14 ng/mL (deficiency, normal > 30 ng/mL), serum intact PTH 84 pg/mL (secondary hyperparathyroidism), serum vitamin B12 280 pg/mL, and whole blood thiamine level at the lower limit of normal. Which of the following represents the most appropriate preoperative nutritional optimization strategy, and what critical guideline rule must be enforced regarding intravenous nutrient repletion in the perioperative period?",
    "choices": [
      [
        "Replete micronutrient deficiencies (iron, vitamin D, and calcium) preoperatively, and ensure that any intravenous glucose or dextrose infusion is preceded by intravenous thiamine administration to prevent Wernicke encephalopathy",
        "Patients presenting for BARIATRIC SURGERY (Roux-en-Y gastric bypass, sleeve gastrectomy) have a remarkably high prevalence of PRE-EXISTING BASELINE MICRONUTRIENT DEFICIENCIES due to poor diet quality, malabsorption, and chronic subclinical inflammation. Common pre-op deficiencies: IRON (up to 40%), VITAMIN D (up to 90%), VITAMIN B12, FOLATE, and THIAMINE (vitamin B1). Postoperatively, Roux-en-Y bypass bypasses the duodenum and proximal jejunum (primary sites of iron, calcium, and fat-soluble vitamin absorption), and causes prolonged restriction. Current guidelines from the American Society for Metabolic and Bariatric Surgery (ASMBS) mandate: (1) COMPREHENSIVE PREOPERATIVE NUTRITIONAL SCREENING and PROACTIVE CORRECTION of all micronutrient deficits prior to surgery (iron repletion, high-dose vitamin D3); and (2) CRITICAL PERIOPERATIVE DIRECTIVE: Bariatric surgery patients who develop prolonged postoperative nausea, vomiting, or poor oral intake are at extreme risk of HYPERACUTE THIAMINE DEFICIENCY. If intravenous hydration with DEXTROSE-CONTAINING FLUIDS is administered to a thiamine-deficient patient, the glucose load consumes remaining thiamine pyrophosphate cofactors in pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase, triggering acute, catastrophic WERNICKE ENCEPHALOPATHY (triad: encephalopathy, oculomotor dysfunction, ataxia). Therefore, INTRAVENOUS THIAMINE MUST ALWAYS PRECEDE OR BE CO-ADMINISTERED WITH DEXTROSE."
      ],
      [
        "Withhold all vitamin and mineral supplementation until 6 months postoperatively to avoid gastric pouch mucosal irritation",
        "Waiting 6 months allows severe pre-existing iron, vitamin D, and thiamine deficiencies to progress into irreversible neurologic damage and severe anemia."
      ],
      [
        "Administer high-dose intravenous dextrose 50% boluses daily without thiamine to ensure adequate hepatic glycogen loading",
        "Infusing concentrated dextrose without thiamine in a bariatric patient rapidly triggers fatal, acute Wernicke encephalopathy and central brainstem necrosis."
      ],
      [
        "Perform routine preoperative total parathyroidectomy to treat the elevated serum parathyroid hormone level",
        "Elevated PTH is secondary to vitamin D deficiency (secondary hyperparathyroidism); it resolves with vitamin D and calcium repletion without parathyroid surgery."
      ],
      [
        "Cancel bariatric surgery permanently because baseline nutritional deficiencies represent absolute contraindications to bypass",
        "Baseline nutritional deficiencies are common and easily correctable; they are not contraindications to life-saving metabolic bariatric surgery."
      ]
    ],
    "shortestValidSolution": "Bariatric pre-op nutritional deficits + perioperative dextrose rule = Replete iron/Vit D + Give IV Thiamine BEFORE Dextrose (prevents Wernicke encephalopathy).",
    "necessaryInference": "Apply ASMBS bariatric nutritional guidelines: correct pre-op deficiencies and enforce the rule of thiamine administration prior to dextrose to prevent Wernicke encephalopathy.",
    "strongestDistractor": "Administer high-dose intravenous dextrose 50% boluses daily without thiamine to ensure adequate hepatic glycogen loading",
    "distractorExclusion": "Administering dextrose without thiamine to a thiamine-depleted bariatric patient triggers catastrophic acute Wernicke encephalopathy (oculomotor palsy, ataxia, confusion).",
    "citation": "Mechanick JI, Apovian C, Brethauer S, et al. Clinical practice guidelines for the perioperative nutrition, metabolic, and nonsurgical support of patients undergoing bariatric procedures - 2019 update. Obesity (Silver Spring). 2020;28(4):O1-O58. PMID: 32202077.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/surgery bariatric nutrition item testing preoperative micronutrient screening and thiamine-before-dextrose rule to prevent Wernicke.",
      "distractorExclusionNotes": "Distractors feature delaying supplements, dextrose without thiamine triggering Wernicke, unnecessary parathyroidectomy for secondary hyperparathyroidism, and permanent cancellation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0620",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "General Principles",
    "topic": "Surgical Site Infection Prevention Bundles and Antimicrobial Prophylaxis",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old woman with class II obesity (weight 92 kg) and well-controlled type 2 diabetes mellitus is scheduled for elective open total abdominal hysterectomy and bilateral salpingo-oophorectomy for symptomatic uterine leiomyomas. She has no known drug allergies. The surgical team reviews the hospital's evidence-based surgical site infection (SSI) reduction bundle. The procedure is estimated to take approximately 3.5 hours, and skin incision is planned for 8:00 AM. Based on current guidelines from the Centers for Disease Control and Prevention (CDC), the Surgical Care Improvement Project (SCIP), and the American College of Obstetricians and Gynecologists (ACOG), which of the following represents the most appropriate perioperative antimicrobial and physiologic management plan?",
    "choices": [
      [
        "Administer intravenous cefazolin 2 g within 30 to 60 minutes prior to surgical incision, re-dose cefazolin intraoperatively at 4 hours (or if blood loss exceeds 1,500 mL), maintain perioperative normothermia, and maintain blood glucose below 180 mg/dL",
        "SURGICAL SITE INFECTIONS (SSIs) are the most common and costly healthcare-associated infections in surgical patients. Prevention relies on an EVIDENCE-BASED SSI PREVENTION BUNDLE (CDC, WHO, SIS, and SCIP guidelines): (1) TIMING OF ANTIMICROBIAL PROPHYLAXIS: administer prophylactic parenteral antibiotics WITHIN 30 TO 60 MINUTES PRIOR TO SURGICAL INCISION (so that tissue drug concentrations exceed the minimum inhibitory concentration [MIC] at the exact moment of bacterial contamination during incisional entry). For vancomycin or fluoroquinolones, infusion begins within 120 minutes due to prolonged infusion times; (2) AGENT AND WEIGHT-BASED DOSING: CEFTOZOLIN (1st-gen cephalosporin) is the drug of choice for clean-contaminated gynecologic/orthopedic/vascular cases; DOSING: 2 g IV for patients weighing < 120 kg, and 3 g IV for patients weighing >= 120 kg; (3) INTRAOPERATIVE RE-DOSING: re-dose every 1 to 2 half-lives of the drug (for cefazolin, half-life is 1.8-2 hours, so RE-DOSE AT 4 HOURS from the initial dose), or whenever blood loss exceeds 1,500 mL; (4) DISCONTINUATION: DISCONTINUE WITHIN 24 HOURS postoperatively (postoperative prolongation does not prevent SSIs and increases C. difficile risk); and (5) PHYSIOLOGIC BUNDLES: maintain PERIOPERATIVE NORMOTHERMIA (core temperature > 36.0 C via active forced-air warmers), perioperative GLYCEMIC CONTROL (target blood glucose < 180 mg/dL), and avoid hair shaving with razors (use electric clippers if hair removal is required)."
      ],
      [
        "Administer intravenous vancomycin 1 g over 10 minutes as a rapid bolus immediately upon skin incision, and continue for 7 days postoperatively",
        "Vancomycin should not be given rapidly (triggers Red Man syndrome), should not be used in the absence of MRSA risk/allergy, and continuing for 7 days promotes resistance."
      ],
      [
        "Shave the entire abdomen with a straight manual razor the night before surgery, and allow core temperature to drop below 35.0 C to reduce metabolic demand",
        "Razor shaving causes microscopic cutaneous abrasions that harbor bacteria, increasing SSI risk; hypothermia causes vasoconstriction and triples SSI incidence."
      ],
      [
        "Administer oral ciprofloxacin and oral metronidazole for 5 days preoperatively as outpatient bowel decontamination",
        "Oral bowel prep alone without timely IV cephalosporin does not establish adequate tissue levels for pelvic hysterectomy and induces fluoroquinolone resistance."
      ],
      [
        "Withhold all prophylactic antibiotics until the surgical specimen is excised and sent for frozen section pathology",
        "Administering antibiotics after incision or after specimen removal completely fails to prevent bacterial contamination during initial cutting, sharply increasing SSI rates."
      ]
    ],
    "shortestValidSolution": "SSI prevention bundle = IV Cefazolin within 30-60 min pre-incision + Re-dose at 4 hrs (or >1.5L blood loss) + Normothermia + Glucose < 180.",
    "necessaryInference": "Apply CDC/SCIP surgical site infection prevention guidelines: timely pre-incision cephalosporin, intraoperative re-dosing at 4 hours, normothermia, and glycemic control.",
    "strongestDistractor": "Administer intravenous vancomycin 1 g over 10 minutes as a rapid bolus immediately upon skin incision, and continue for 7 days postoperatively",
    "distractorExclusion": "Vancomycin causes Red Man syndrome if infused under 60 minutes, is not first-line over cefazolin, and prolonged 7-day courses promote resistance without reducing SSIs.",
    "citation": "Berr\u00edos-Torres SI, Umscheid CA, Bratzler DW, et al. Centers for Disease Control and Prevention Guideline for the Prevention of Surgical Site Infection, 2017. JAMA Surg. 2017;152(8):784-791. PMID: 28467526.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 surgery/infectious disease safety item testing CDC/SCIP surgical site infection prevention bundles (prophylaxis timing, re-dosing, normothermia, glycemic control).",
      "distractorExclusionNotes": "Distractors feature rapid toxic vancomycin infusions, razor shaving increasing infections, hypothermia, unindicated oral fluoroquinolones, and post-incision antibiotics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0621",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Pheochromocytoma Preoperative Alpha Before Beta Blockade",
    "provisionalDifficulty": 5,
    "stem": "A 44-year-old woman is diagnosed with a 4.2-cm right adrenal mass following evaluation for episodic pounding headaches, profuse sweating, and palpitations. Biochemical evaluation confirms marked elevations in 24-hour urinary fractionated metanephrines and plasma free normetanephrine, consistent with a pheochromocytoma. Her blood pressure in the clinic is 182/106 mm Hg, and heart rate is 112/min. She is scheduled for elective laparoscopic adrenalectomy in 3 weeks. A surgical resident recommends initiating oral propranolol 40 mg three times daily starting today to control her severe resting tachycardia. Which of the following explains why initiating a beta-blocker as the initial pharmacotherapy is strictly contraindicated, and what is the proper sequence of preoperative medical preparation?",
    "choices": [
      [
        "Beta-blocker monotherapy blocks vasodilatory beta-2 adrenergic receptors, leaving catecholamine-mediated alpha-1 vasoconstriction unopposed, triggering a catastrophic hypertensive crisis; non-competitive alpha-blockade (e.g., phenoxybenzamine) must be initiated FIRST for 10 to 14 days before adding a beta-blocker",
        "PREOPERATIVE MEDICAL PREPARATION FOR PHEOCHROMOCYTOMA is one of the most critical pharmacologic sequences in clinical medicine. Pheochromocytomas secrete massive amounts of catecholamines (norepinephrine and epinephrine). Norepinephrine acts predominantly on ALPHA-1 ADRENERGIC RECEPTORS (causing intense peripheral vasoconstriction and hypertension), while epinephrine acts on both alpha and BETA ADRENERGIC RECEPTORS (beta-1 increases inotropy/chronotropy, while BETA-2 MEDIATES SKELETAL MUSCLE VASODILATATION, counteracting some vasoconstriction). IF A BETA-BLOCKER IS ADMINISTERED FIRST, IT SELECTIVELY BLOCKS VASODILATORY BETA-2 RECEPTORS WHILE BETA-1 CARDIAC OUTPUT DROPS AGAINST UNBLOCKED ALPHA-1 RECEPTORS. This produces UNOPPOSED ALPHA-ADRENERGIC VASOCONSTRICTION, triggering a catastrophic, life-threatening HYPERTENSIVE CRISIS, acute pulmonary edema, aortic dissection, or hypertensive encephalopathy. The STRICT MANDATORY PHARMACOLOGIC SEQUENCE is: (1) ALPHA-BLOCKADE FIRST: initiate an irreversible, non-competitive alpha-receptor antagonist (PHENOXYBENZAMINE, 10 mg twice daily, titrated up) or selective alpha-1 blockers (doxazosin, prazosin) for AT LEAST 10 TO 14 DAYS prior to surgery; (2) HIGH-SALT DIET AND FLUID EXPANSION: liberalize oral salt and fluids to expand chronically constricted intravascular volume; and (3) BETA-BLOCKADE SECOND: add a beta-blocker (propranolol, metoprolol) ONLY AFTER 2-3 DAYS OF EFFECTIVE ALPHA-BLOCKADE, specifically to treat reflex tachycardia."
      ],
      [
        "Beta-blockers cross the blood-brain barrier to trigger central pontine myelinolysis; intravenous labetalol monotherapy should be administered instead",
        "Labetalol has a much higher beta-to-alpha blocking ratio (7:1) and can still trigger severe unopposed alpha-mediated vasoconstrictive hypertensive crisis if given initially."
      ],
      [
        "Beta-blockers directly stimulate chromaffin cell exocytosis, releasing toxic histamine into the portal circulation",
        "Beta-blockers do not stimulate chromaffin cell exocytosis or histamine release; the mechanism of harm is hemodynamic unopposed alpha-1 vasoconstriction."
      ],
      [
        "Preoperative pharmacotherapy is unnecessary; proceeding directly to emergency adrenalectomy avoids tumor manipulation risks",
        "Operating on an unprepared pheochromocytoma without alpha-blockade carries an operative mortality rate > 30-50% due to intraoperative catecholamine surges and hemodynamic collapse."
      ],
      [
        "Initiate oral spironolactone monotherapy to block aldosterone receptors, followed by intraoperative nitroprusside",
        "Spironolactone treats primary aldosteronism (Conn syndrome), having zero effect on catecholamine-secreting pheochromocytomas."
      ]
    ],
    "shortestValidSolution": "Pheochromocytoma pre-op prep = Alpha-blockade FIRST (Phenoxybenzamine) for 10-14 days -> Beta-blocker SECOND (avoids fatal unopposed alpha vasoconstriction).",
    "necessaryInference": "Enforce cardinal rule of pheochromocytoma management: alpha-blockade must precede beta-blockade to prevent unopposed alpha-1 mediated hypertensive crisis.",
    "strongestDistractor": "Beta-blockers cross the blood-brain barrier to trigger central pontine myelinolysis; intravenous labetalol monotherapy should be administered instead",
    "distractorExclusion": "Labetalol is predominantly a beta-blocker (beta:alpha ratio 7:1) and can precipitate hypertensive crisis if given without prior alpha-blockade.",
    "citation": "Naranjo J, Dodd S, Martin YN. Perioperative Management of Pheochromocytoma. J Cardiothorac Vasc Anesth. 2017;31(4):1427-1439. PMID: 28392094.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 endocrinology/perioperative surgery item testing the cardinal pharmacology of pheochromocytoma preparation (alpha-blockade before beta-blockade).",
      "distractorExclusionNotes": "Distractors feature labetalol monotherapy pitfall, fabricated histamine exocytosis, unprepared emergency surgery with >40% mortality, and aldosteronism spironolactone.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0622",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Cirrhosis Perioperative Risk MELD and Child-Pugh Scores",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man with decompensated alcoholic cirrhosis presents for surgical consultation regarding an elective open repair of a 4-cm reducible umbilical hernia that causes intermittent discomfort. He has a history of ascites managed with spironolactone and furosemide, and had one episode of hepatic encephalopathy 4 months ago following an upper gastrointestinal variceal bleed. Physical examination reveals an alert, oriented man with temporal wasting, prominent abdominal ascites with shifting dullness, and a reducible umbilical hernia with intact overlying skin and no ulceration or strangulation. Laboratory evaluation demonstrates: total bilirubin 3.8 mg/dL, serum albumin 2.6 g/dL, prothrombin time (INR) 2.1, serum sodium 131 mEq/L, and serum creatinine 1.8 mg/dL. Calculated Model for End-Stage Liver Disease (MELD) score is 24, and Child-Pugh classification is Class C (score 11). Which of the following is the most appropriate management recommendation regarding elective hernia repair?",
    "choices": [
      [
        "Decline elective surgical hernia repair and manage conservatively with medical optimization of ascites, because a MELD score > 15 and Child-Pugh Class C carry a prohibitively high postoperative mortality rate (> 50% to 80%)",
        "Patients with CIRRHOSIS undergoing non-cardiac, non-transplant surgery have exceptionally high rates of perioperative morbidity and mortality, driven by coagulopathy, portal hypertension, impaired drug metabolism, wound dehiscence from ascites, and high risk of postoperative acute-on-chronic liver failure, hepatorenal syndrome, and sepsis. The two primary validated scoring systems for perioperative risk stratification are: (1) CHILD-PUGH CLASSIFICATION: Class A (5-6 points): ~10% surgical mortality; Class B (7-9 points): ~30% mortality; Class C (10-15 points): 50% TO >80% POSTOPERATIVE MORTALITY. Elective surgery is GENERALLY CONTRAINDICATED IN CHILD-PUGH CLASS C; (2) MODEL FOR END-STAGE LIVER DISEASE (MELD, incorporates bilirubin, creatinine, INR, and sodium): each 1-point increase in MELD increases perioperative mortality by ~1%. A MELD SCORE >= 15 CARRIES A PROHIBITIVE RISK FOR ELECTIVE NON-TRANSPLANT SURGERY (mortality >30-50%). In this patient with a MELD score of 24 and Child-Pugh Class C, elective open hernia repair carries a fatal risk approaching 70-80%. The hernia is asymptomatic and reducible without strangulation; therefore, ELECTIVE SURGERY SHOULD BE DECLINED. Management involves medical optimization of ascites (diuretics, sodium restriction, paracentesis) and evaluation for LIVER TRANSPLANTATION (at which time hernia repair can be performed concurrently)."
      ],
      [
        "Proceed with elective open hernia repair tomorrow after infusing two units of fresh frozen plasma and two units of platelets",
        "Prophylactic plasma infusions do not correct the complex coagulopathy of cirrhosis, precipitate fluid overload/variceal bleeding, and do not lower prohibitive mortality."
      ],
      [
        "Perform emergent transjugular intrahepatic portosystemic shunt (TIPS) placement followed immediately by open surgical mesh repair",
        "TIPS carries high procedural mortality in patients with MELD > 18-20 and frequently precipitates severe, irreversible hepatic encephalopathy and liver failure."
      ],
      [
        "Proceed with laparoscopic mesh hernia repair using high-pressure carbon dioxide pneumoperitoneum",
        "High-pressure pneumoperitoneum severely compromises splanchnic and renal blood flow in cirrhotic patients, precipitating fulminant hepatorenal syndrome."
      ],
      [
        "Administer high-dose intravenous albumin and perform immediate radical abdominoplasty with total umbilicectomy",
        "Radical surgical resection in severe end-stage cirrhosis leads to continuous refractory ascites leak, wound breakdown, peritonitis, and death."
      ]
    ],
    "shortestValidSolution": "Cirrhosis + MELD 24 + Child-Pugh C + reducible hernia = Prohibitive surgical mortality (>50-80%) -> Decline elective surgery; Medical management of ascites.",
    "necessaryInference": "Apply validated cirrhosis surgical risk thresholds (Child-Pugh C, MELD > 15) to decline prohibitive-risk elective non-transplant surgery.",
    "strongestDistractor": "Proceed with elective open hernia repair tomorrow after infusing two units of fresh frozen plasma and two units of platelets",
    "distractorExclusion": "FFP does not restore balanced hemostasis in cirrhosis, increases portal pressures risking variceal bleeding, and fails to alter the 70-80% operative mortality.",
    "citation": "Northup PG, Friedman LS, Kamath PS. AGA Clinical Practice Update on Surgical Risk Assessment and Perioperative Management in Patients With Cirrhosis: Expert Review. Clin Gastroenterol Hepatol. 2019;17(4):595-606. PMID: 30268571.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 hepatology/surgery perioperative risk item testing application of MELD (>15) and Child-Pugh C criteria to decline prohibitive elective operations.",
      "distractorExclusionNotes": "Distractors feature dangerous surgery with futile FFP, high-risk TIPS in MELD > 20, laparoscopic pneumoperitoneum worsening renal perfusion, and radical umbilicectomy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0623",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Jehovah's Witness Patient Bloodless Surgery Consultation",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old woman who is a practicing Jehovah's Witness is evaluated prior to elective total abdominal hysterectomy for severe menometrorrhagia secondary to multiple large uterine fibroids. Her preoperative hemoglobin is 9.2 g/dL (ferritin 10 ng/mL). The patient possesses decision-making capacity and presents a signed, notarized durable power of attorney and Advance Healthcare Directive explicitly stating her absolute, religious-based refusal of all allogeneic blood products, including packed red blood cells, whole blood, fresh frozen plasma, platelets, and cryoprecipitate, even in the event of life-threatening intraoperative hemorrhage. When discussing fractionated blood components and autologous blood salvaging techniques, she clarifies that she willingly accepts intravenous iron, recombinant human erythropoietin, tranexamic acid, and intraoperative cell salvage provided the cell saver circuit maintains continuous, uninterrupted anatomical continuity with her circulatory system. Which of the following represents the most ethically sound and evidence-based preoperative medical management?",
    "choices": [
      [
        "Respect the patient's autonomous refusal of allogeneic blood products, optimize her red cell mass preoperatively with intravenous iron and recombinant erythropoietin, and plan intraoperative closed-loop cell salvage and tranexamic acid",
        "The ethical principle of PATIENT AUTONOMY dictates that an adult patient with DECISION-MAKING CAPACITY has the absolute legal and moral right to refuse any medical or surgical intervention, including LIFE-SUSTAINING ALLOGENEIC BLOOD TRANSFUSION, even if that refusal results in death. For JEHOVAH'S WITNESS PATIENTS undergoing surgery, healthcare providers must adhere to 'BLOODLESS MEDICINE AND SURGERY' PROTOCOLS: (1) PREOPERATIVE HEMOGLOBIN OPTIMIZATION: aggressively expand red blood cell mass well before surgery (aiming for Hb > 12-13 g/dL) using INTRAVENOUS IRON (e.g., ferric carboxymaltose or iron sucrose) combined with RECOMBINANT HUMAN ERYTHROPOIETIN (EPO, e.g., epoetin alfa 40,000 units weekly) and nutritional cofactors (vitamin B12, folic acid); (2) PRECISE CLARIFICATION OF INDIVIDUAL BELIEFS: individual Jehovah's Witnesses differ regarding 'fractions' (albumin, clotting factors, immunoglobulins) and autologous techniques. Many accept INTRAOPERATIVE CELL SALVAGE (cell saver) if configured as a CONTINUOUS CLOSED-LOOP CIRCUIT maintaining uninterrupted contact with the patient's vasculature; (3) INTRAOPERATIVE PHARMACOTHERAPY: utilize ANTIFIBRINOLYTICS (intravenous TRANEXAMIC ACID) to reduce surgical blood loss by 30-40%, along with meticulous surgical hemostasis; and (4) PEDIATRIC CONTRAST: while competent adults have the right to refuse blood for themselves, COURTS ROUTINELY OVERRIDE PARENTAL REFUSAL OF BLOOD PRODUCTS FOR MINOR CHILDREN in life-threatening emergencies to protect the child's life."
      ],
      [
        "Inform the patient that surgery will be cancelled unless she signs a consent allowing emergency blood transfusions in the event of life-threatening shock",
        "Coercing a competent patient to violate core religious beliefs as a condition for needed surgical care violates patient autonomy and medical ethics."
      ],
      [
        "Agree to her terms verbally, but plan to administer emergency uncrossmatched blood transfusions covertly under anesthesia if hemoglobin drops below 6 g/dL",
        "Transfusing a competent patient against explicit documented refusal constitutes medical battery, ethical violation, and intentional violation of bodily integrity."
      ],
      [
        "Petition a local probate judge for emergency court guardianship to declare the patient incompetent based on her willingness to risk death",
        "A refusal of life-sustaining treatment based on religious beliefs does NOT constitute mental incompetence; court orders overriding refusal apply strictly to minor children."
      ],
      [
        "Preoperatively harvest and store three units of autologous whole blood for autologous re-infusion during surgery",
        "Standard preoperative autologous blood donation involves storing blood in bags disconnected from the body, which violates the beliefs of most Jehovah's Witnesses."
      ]
    ],
    "shortestValidSolution": "Competent Jehovah's Witness refusing allogeneic blood = Autonomy -> Pre-op IV Iron + EPO + Closed-loop cell salvage + Tranexamic acid (NO forced blood).",
    "necessaryInference": "Apply core biomedical ethics (respect for autonomy) and patient blood management: optimize pre-op hemoglobin with IV iron/EPO and use closed-loop salvage.",
    "strongestDistractor": "Petition a local probate judge for emergency court guardianship to declare the patient incompetent based on her willingness to risk death",
    "distractorExclusion": "Competent adults have the absolute right to refuse life-sustaining treatment; courts do not declare adults incompetent for religious beliefs (unlike child protection).",
    "citation": "Leahy MF, Hofmann A, Towler S, et al. Improved outcomes and reduced costs associated with a health-system-wide patient blood management program: a retrospective observational study in four major adult tertiary-care hospitals. Transfusion. 2017;57(6):1347-1358. PMID: 28436034.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 medical ethics/perioperative hematology item testing management of the adult Jehovah's Witness patient (autonomy, bloodless surgery techniques).",
      "distractorExclusionNotes": "Distractors feature coercive surgical refusal, medical battery with covert transfusion, inappropriate court petitions (competence intact), and disconnected autologous donation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0624",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Duke Activity Status Index METs and Preoperative Decision-Making",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old woman is evaluated in the preoperative clinic prior to elective open resection of an early-stage colon adenocarcinoma. Her medical history is notable for hypertension, dyslipidemia, and diet-controlled type 2 diabetes. She had an episode of stable angina 5 years ago, but has had no chest pain, palpitations, orthopnea, or dyspnea on exertion since starting her current medications (lisinopril and atorvastatin). When asked about her daily physical activity, she states that she takes care of her two grandchildren (aged 3 and 5), carries bags of groceries up a flight of stairs into her home, walks 30 minutes every morning at a brisk pace (approx 3.5 to 4 mph), and cleans her house including scrubbing floors and vacuuming without any cardiopulmonary symptoms. Baseline vital signs, physical examination, and 12-lead ECG are completely normal. Serum creatinine is 0.9 mg/dL. Based on current ACC/AHA perioperative clinical practice guidelines, which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Proceed directly to the planned oncologic surgery without ordering non-invasive cardiac stress testing, because the patient's functional capacity exceeds 4 metabolic equivalents of task (METs)",
        "The ACC/AHA GUIDELINE ON PERIOPERATIVE CARDIOVASCULAR EVALUATION emphasizes that FUNCTIONAL CAPACITY is a pivotal determinant of perioperative and long-term cardiac risk. Functional capacity is measured in METABOLIC EQUIVALENTS OF TASK (METs), where 1 MET represents resting oxygen consumption (3.5 mL O2/kg/min): (1) POOR FUNCTIONAL CAPACITY (< 4 METs): inability to walk 1-2 blocks on level ground or climb a single flight of stairs without stopping; (2) MODERATE-TO-EXCELLENT FUNCTIONAL CAPACITY (>= 4 METs): climbing two flights of stairs, walking briskly (>3.5 mph), carrying groceries upstairs, or doing heavy housework. In patients undergoing elevated-risk non-cardiac surgery (such as major intra-abdominal oncologic resection), EVEN IF CLINICAL RISK PREDICTORS ARE PRESENT (e.g., prior ischemic history, diabetes, hypertension), IF THE PATIENT HAS PRESERVED FUNCTIONAL CAPACITY (>= 4 METs) WITHOUT ACTIVE CARDIAC SYMPTOMS, PREOPERATIVE CARDIAC STRESS TESTING (stress echocardiography or nuclear myocardial perfusion imaging) IS NOT RECOMMENDED. Clinical trials have conclusively shown that routine stress testing in patients with good functional capacity does not reduce perioperative myocardial infarction or mortality, but causes substantial, unnecessary delays in oncologic surgery. Therefore, proceeding directly to surgery is the correct clinical pathway."
      ],
      [
        "Obtain a preoperative regadenoson myocardial perfusion scintigraphy scan to objectively evaluate coronary flow reserve",
        "Pharmacologic stress testing is not indicated in patients with functional capacity >= 4 METs and causes unwarranted procedural delays in cancer resection."
      ],
      [
        "Perform routine preoperative transthoracic echocardiography to assess left ventricular diastolic relaxation",
        "Routine resting echocardiography is not recommended in asymptomatic stable patients with normal physical exam and preserved exercise tolerance."
      ],
      [
        "Initiate daily oral atenolol 50 mg starting today to ensure complete intraoperative heart rate blunting",
        "Acute pre-op beta-blocker initiation in beta-blocker-naive patients increases strokes and mortality (POISE trial) and is contraindicated."
      ],
      [
        "Postpone cancer surgery for 6 months to allow an intensive supervised cardiac rehabilitation program",
        "Delaying definitive oncologic colon cancer resection for 6 months in an asymptomatic patient leads to malignant progression and metastatic dissemination."
      ]
    ],
    "shortestValidSolution": "Colon cancer surgery + climbs stairs/carries groceries (> 4 METs) = Preserved functional capacity -> Proceed to surgery without cardiac stress testing.",
    "necessaryInference": "Apply ACC/AHA guidelines: asymptomatic patients undergoing elevated-risk surgery who have functional capacity >= 4 METs should proceed directly to surgery without stress testing.",
    "strongestDistractor": "Obtain a preoperative regadenoson myocardial perfusion scintigraphy scan to objectively evaluate coronary flow reserve",
    "distractorExclusion": "Pharmacologic stress scintigraphy is unnecessary in patients achieving >= 4 METs and delays time-sensitive oncologic cancer resection without improving outcomes.",
    "citation": "Fleisher LA, Fleischmann KE, Auerbach AD, et al. 2014 ACC/AHA guideline on perioperative cardiovascular evaluation and management of patients undergoing noncardiac surgery. J Am Coll Cardiol. 2014;64(22):e77-e137. PMID: 25091544.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 internal medicine/cardiology perioperative item testing quantification of functional capacity (DASI > 4 METs) and avoidance of unnecessary stress testing.",
      "distractorExclusionNotes": "Distractors feature unnecessary pharmacologic myocardial perfusion scans, routine screening echocardiography, hazardous acute beta-blockade, and lethal 6-month cancer delays.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0625",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Preoperative Herbal Supplement Cessation and Coagulopathy",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old woman presents for preoperative evaluation 2 weeks prior to elective total abdominal hysterectomy and bilateral salpingo-oophorectomy. She has no chronic medical conditions and takes no prescription medications. When asked about over-the-counter vitamins, dietary supplements, and herbal products, she states that she takes several daily supplements to promote 'vitality and joint health': Ginkgo biloba (120 mg daily), Garlic extract pills (1,000 mg daily), Ginseng capsules (500 mg daily), and St. John's wort (300 mg daily). Physical examination and vital signs are normal. Complete blood count, prothrombin time (PT/INR), and activated partial thromboplastin time (aPTT) are within normal reference ranges. Which of the following is the most appropriate recommendation regarding her herbal supplements prior to surgery?",
    "choices": [
      [
        "Instruct the patient to discontinue all herbal and dietary supplements immediately (at least 1 to 2 weeks prior to surgery) due to significant risks of perioperative bleeding, hemodynamic instability, and cytochrome P450 drug interactions",
        "Over 30% to 50% of surgical patients consume HERBAL AND DIETARY SUPPLEMENTS, yet >70% fail to disclose their use to anesthesiologists or surgeons unless explicitly questioned. The American Society of Anesthesiologists (ASA) guidelines mandate that ALL HERBAL SUPPLEMENTS SHOULD BE DISCONTINUED AT LEAST 1 TO 2 WEEKS PRIOR TO ELECTIVE SURGERY. Major risks of the '4 Gs' and related supplements: (1) INCREASED PERIOPERATIVE BLEEDING: GINKGO BILOBA (inhibits platelet-activating factor [PAF]); GARLIC (contains allicin and ajoene, which inhibit cyclooxygenase and platelet aggregation irreversibly); GINSENG (inhibits platelet aggregation and prolongs PT/INR); and FEVERFEW (inhibits platelet aggregation); (2) DRUG INTERACTIONS: ST. JOHN'S WORT is a potent INDUCER OF HEPATIC CYTOCHROME P450 (CYP3A4, CYP2C9) AND P-GLYCOPROTEIN, markedly accelerating the metabolism of anesthetic agents (fentanyl, midazolam), immunosuppressants, and anticoagulants; (3) CARDIOVASCULAR COLLAPSE: EPHEDRA (ma huang) depletes endogenous catecholamines, risking catastrophic intraoperative vasodilatory shock and arrhythmias; and (4) EXCESSIVE SEDATION: KAVA and VALERIAN ROOT potentiate central GABAergic neurotransmission, prolonging emergence from general anesthesia."
      ],
      [
        "Allow the patient to continue all supplements because natural plant-based supplements do not interact with pharmaceutical anesthetic agents",
        "Believing natural supplements are harmless is a dangerous fallacy; herbal products cause severe platelet dysfunction, bleeding, and profound pharmacokinetic drug interactions."
      ],
      [
        "Instruct the patient to discontinue Ginkgo biloba and Garlic only on the morning of surgery with a sip of water",
        "Platelet inhibition from garlic and ginkgo lasts for days; stopping them on the morning of surgery does not restore platelet function or eliminate bleeding risks."
      ],
      [
        "Double the dose of St. John's wort perioperatively to prevent postoperative depression and anxiety",
        "Doubling St. John's wort dramatically induces CYP3A4, causing rapid breakdown of anesthetics, analgesics, and perioperative medications, with high risk of serotonin syndrome."
      ],
      [
        "Administer prophylactic intravenous vitamin K 10 mg on call to the operating room to overcome herbal antiplatelet effects",
        "Vitamin K promotes clotting factor synthesis in the liver; it has zero effect on herbal platelet dysfunction caused by ginkgo, garlic, or ginseng."
      ]
    ],
    "shortestValidSolution": "Ginkgo + Garlic + Ginseng + St. John's wort before surgery = Herbal supplements -> Discontinue ALL supplements >= 1-2 weeks prior to surgery.",
    "necessaryInference": "Apply ASA guidelines: discontinue all herbal supplements at least 1-2 weeks prior to surgery to eliminate bleeding risks (the 4 Gs) and CYP3A4 interactions (St. John's wort).",
    "strongestDistractor": "Instruct the patient to discontinue Ginkgo biloba and Garlic only on the morning of surgery with a sip of water",
    "distractorExclusion": "Garlic inhibits platelet aggregation irreversibly for the lifespan of the platelet (7-10 days); stopping on the morning of surgery fails to prevent surgical hemorrhage.",
    "citation": "Ang-Lee MK, Moss J, Yuan CS. Herbal medicines and perioperative care. JAMA. 2001;286(2):208-216. PMID: 11448284.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 clinical pharmacology/perioperative medicine item testing knowledge of herbal supplement risks (the '4 Gs' bleeding, St. John's wort CYP induction) and 2-week cessation.",
      "distractorExclusionNotes": "Distractors feature false belief in supplement safety, ineffective morning-of-surgery holds, dangerous doubling of St. John's wort, and futile vitamin K for platelet defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
