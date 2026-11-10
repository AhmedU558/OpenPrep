import { CandidateSpec } from './types';

export const step2Batch17: CandidateSpec[] = [
  {
    "code": "op-c-s2-0401",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Shock Phenotyping and Pulmonary Artery Catheter Hemodynamics",
    "subtopic": "Cardiogenic vs Septic/Distributive Shock Hemodynamics and Inotropic Management",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man with a history of anterior wall myocardial infarction 3 years ago and severe ischemic cardiomyopathy (left ventricular ejection fraction 22%) is admitted to the intensive care unit with acute dyspnea, confusion, and oliguria (urine output 12 mL/h over the past 3 hours). On physical examination, he is cool and clammy with mottled knees and weak peripheral pulses. Blood pressure is 78/52 mm Hg (mean arterial pressure 61 mm Hg), heart rate 104/min, and respiratory rate 26/min. Auscultation reveals bilateral diffuse pulmonary crackles extending to the mid-lung fields and a third heart sound (S3 gallop). A pulmonary artery catheter (Swan-Ganz catheter) is placed, and hemodynamic measurements reveal:\n- Central venous pressure (right atrial pressure): 18 mm Hg (elevated; normal 2-8 mm Hg)\n- Pulmonary arterial pressure: 46/28 mm Hg\n- Pulmonary capillary wedge pressure (PCWP): 26 mm Hg (elevated; normal 6-12 mm Hg)\n- Cardiac index (CI): 1.6 L/min/m2 (severely depressed; normal 2.5-4.0 L/min/m2)\n- Systemic vascular resistance (SVR): 2,100 dynes*sec/cm5 (elevated; normal 800-1,200 dynes*sec/cm5)\n- Mixed venous oxygen saturation (SvO2): 48% (markedly depressed; normal 65-75%)\n\nWhich of the following interventions is the most appropriate initial pharmacological strategy to restore systemic organ perfusion while minimizing myocardial oxygen demand in this patient?",
    "choices": [
      [
        "Initiation of intravenous norepinephrine to raise mean arterial pressure above 65 mm Hg, combined with a titratable intravenous inotrope (dobutamine or milrinone) to improve cardiac output, while avoiding aggressive crystalloid fluid boluses",
        "This patient is in profound CARDIOGENIC SHOCK (hypoperfusion, hypotension, oliguria, pulmonary edema) characterized by the classic hemodynamics: (1) Severely DEPRESSED CARDIAC INDEX (< 2.2 L/min/m2), (2) MARKEDLY ELEVATED PCWP (> 18 mm Hg, reflecting elevated left ventricular end-diastolic pressure / volume overload), (3) COMPENSATORY ELEVATION IN SVR (> 1,600 dynes*sec/cm5, sympathetic vasoconstriction attempting to maintain blood pressure), and (4) DEPRESSED MIXED VENOUS O2 SATURATION (SvO2 < 50%, reflecting high peripheral oxygen extraction due to sluggish tissue transit). (2) MANAGEMENT STRATEGY: (a) VASOPRESSOR FOR ADEQUATE PERFUSION PRESSURE: When mean arterial pressure is dangerously low (MAP < 65 mm Hg), peripheral perfusion to vital organs (coronary and cerebral circulation) fails. NOREPINEPHRINE (potent alpha-1 vasoconstriction with modest beta-1 inotropic support) is the first-line vasopressor of choice to establish a minimum perfusion pressure (MAP >= 65 mm Hg). (b) INOTROPE TO INCREASE FORWARD OUTPUT: Once adequate perfusion pressure is established with norepinephrine, an INOTROPE (DOBUTAMINE [beta-1/beta-2 adrenergic agonist] or MILRINONE [PDE-3 inhibitor]) is added to augment stroke volume and cardiac index, reducing left ventricular filling pressures (PCWP). Inodilators (milrinone/dobutamine) should NOT be used as monotherapy in severe hypotension because their peripheral beta-2/PDE3 vasodilatory action causes sudden, catastrophic circulatory collapse without vasopressor co-administration. (c) AVOID FLUID BOLUSES: Unlike septic shock (which requires aggressive fluid loading), administering IV crystalloids in cardiogenic shock with PCWP 26 mm Hg will precipitate worsening pulmonary alveolar flooding and fatal hypoxemic respiratory failure."
      ],
      [
        "Immediate rapid intravenous administration of 30 mL/kg of balanced crystalloid solution over 60 minutes to optimize right ventricular preload",
        "Fluid boluses (30 mL/kg) are indicated for distributive/septic shock with low PCWP/CVP; in cardiogenic shock with PCWP 26 mm Hg and pulmonary edema, fluids cause fatal pulmonary flooding."
      ],
      [
        "High-dose intravenous phenylephrine monotherapy to achieve pure alpha-1 vasoconstriction without increasing chronotropy",
        "Phenylephrine causes pure vasoconstriction, dramatically increasing afterload (SVR) and placing an impossible workload on a failing left ventricle, causing cardiac output to drop further."
      ],
      [
        "Intravenous bolus of metoprolol tartrate to slow the heart rate below 70/min and prolong diastolic coronary filling time",
        "Beta-blockers have negative inotropic effects and are STRICTLY CONTRAINDICATED in decompensated cardiogenic shock; they precipitate acute circulatory arrest."
      ],
      [
        "Emergent high-dose intravenous nitroprusside monotherapy to reduce afterload without vasopressor support",
        "Potent vasodilators (nitroprusside) drop systemic vascular resistance; in a patient with baseline SBP 78 mm Hg, nitroprusside causes fatal profound hypotension."
      ]
    ],
    "shortestValidSolution": "Cardiogenic shock (CI 1.6, PCWP 26, SVR 2100, SvO2 48%) + hypotension = Norepinephrine (to restore MAP >= 65) + Inotrope (dobutamine/milrinone); fluids contraindicated.",
    "necessaryInference": "Interpret pulmonary artery catheter hemodynamics to diagnose cardiogenic shock (low CI, high PCWP, high SVR, low SvO2) and prioritize norepinephrine plus inotrope over contraindicated fluid loading.",
    "strongestDistractor": "Immediate rapid intravenous administration of 30 mL/kg of balanced crystalloid solution over 60 minutes to optimize right ventricular preload",
    "distractorExclusion": "30 mL/kg fluid bolus is for septic shock; in cardiogenic shock with pulmonary edema and PCWP 26 mm Hg, fluid boluses worsen respiratory failure.",
    "citation": "van Diepen S, et al. Contemporary management of cardiogenic shock: a scientific statement from the American Heart Association. Circulation. 2017;136(16):e232-e268. PMID: 28923988.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive critical care cardiology item testing exact hemodynamic PAC profile interpretation and the pharmacotherapeutic rationale for norepinephrine plus inodilator combination.",
      "distractorExclusionNotes": "Distractors feature contraindicated maneuvers: septic fluid boluses (30 mL/kg), pure alpha-1 afterload increase (phenylephrine), beta-blockade, and unassisted vasodilation (nitroprusside).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0402",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Acute Aortic Syndromes: Type A vs Type B Dissection",
    "subtopic": "Stanford Classification, Emergent Surgery vs Medical Antihypertensive Sequencing",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man presents to the emergency department with sudden-onset, excruciating, sharp, tearing anterior chest pain that radiates directly between his scapulae. On arrival, he is pale and diaphoretic. Vital signs reveal blood pressure of 198/108 mm Hg in the right arm and 164/92 mm Hg in the left arm, heart rate 94/min, and respiratory rate 22/min. Auscultation reveals a new high-pitched, decrescendo, blowing early diastolic murmur heard best at the right sternal border (aortic regurgitation). Contrast-enhanced computed tomography angiography (CTA) of the chest and abdomen confirms an acute aortic dissection: an intimal flap originates 1.5 cm superior to the sinotubular junction, extends across the entire ascending aorta, involves the aortic root and arch vessels, and propagates distally into the descending thoracic aorta to the level of the renal arteries (Stanford Type A / DeBakey Type I). Which of the following represents the most urgent, definitive management strategy for this patient?",
    "choices": [
      [
        "Immediate emergent cardiothoracic surgical consultation for open surgical replacement of the ascending aorta and aortic root, accompanied by immediate intravenous short-acting beta-blockade (e.g., esmolol) to reduce heart rate below 60/min and systolic blood pressure to 100-120 mm Hg to diminish aortic wall shear stress (dP/dt)",
        "Acute Aortic Dissection is categorized by the STANFORD CLASSIFICATION based on involvement of the ascending aorta: (1) STANFORD TYPE A DISSECTION: Involves the ASCENDING AORTA, regardless of the entry tear location or distal extent. Because the ascending aorta lies within the pericardial reflection and houses the coronary ostia and aortic valve apparatus, Type A dissection carries an extraordinary mortality of ~1-2% per hour if untreated. Complications include: (a) Retrograde rupture into the pericardial space causing CARDIAC TAMPONADE (the leading cause of death), (b) Rupture into the pleural space or mediastinum, (c) AORTIC ROOT DESTABILIZATION causing acute severe aortic regurgitation and heart failure, and (d) Ostial dissection occluding coronary arteries (most commonly RCA, causing inferior STEMI). Therefore, STANFORD TYPE A DISSECTION IS A SURGICAL EMERGENCY REQUIRING IMMEDIATE OPEN REPAIR (graft replacement of ascending aorta +/- aortic valve repair/resuspension). (2) MEDICAL HEMODYNAMIC CONTROL: While the operating room is urgently prepared, MEDICAL ANTI-IMPULSE THERAPY is instituted immediately to arrest propagation of the dissection flap: (a) FIRST AGENT: INTRAVENOUS SHORT-ACTING BETA-BLOCKER (ESMOLOL OR LABETALOL) titrated to a heart rate < 60/min and target systolic blood pressure between 100 and 120 mm Hg. Beta-blockade reduces left ventricular ejection velocity (dP/dt, aortic wall shear stress). (b) SECOND AGENT: A vasodilating agent (e.g., nitroprusside or nicardipine) may be added ONLY AFTER ADEQUATE BETA-BLOCKADE, because vasodilators given alone trigger reflex tachycardia, which increases dP/dt and accelerates aortic rupture! (3) CONTRAST WITH TYPE B: Uncomplicated Stanford Type B dissection (originating distal to the left subclavian artery) is managed MEDICALLY with anti-impulse therapy (beta-blockers) alone, reserving thoracic endovascular aortic repair (TEVAR) for complicated cases (malperfusion, rupture, refractory pain)."
      ],
      [
        "Exclusive medical management in the intensive care unit using oral verapamil monotherapy, with surgical intervention reserved only if clinical evidence of limb ischemia develops",
        "Stanford Type A dissection involves the ascending aorta and is an ABSOLUTE SURGICAL EMERGENCY with 50% 48-hour mortality if managed medically; medical-only therapy is reserved for uncomplicated Type B."
      ],
      [
        "Immediate systemic intravenous thrombolysis with alteplase (tPA) to dissolve intramural thrombus and reopen the true aortic lumen",
        "Thrombolysis is CATASTROPHICALLY CONTRAINDICATED in aortic dissection; it dissolves the clotting barrier, causing immediate exsanguinating aortic rupture or hemopericardium."
      ],
      [
        "Emergent high-dose intravenous hydralazine monotherapy to rapidly reduce systolic blood pressure to normal limits",
        "Hydralazine causes profound reflex sympathetic tachycardia and increases dP/dt, accelerating aortic dissection flap propagation and rupture."
      ],
      [
        "Immediate placement of a thoracic endovascular aortic repair (TEVAR) stent-graft spanning the entire ascending aorta and aortic valve apparatus",
        "TEVAR is the standard modality for complicated descending (Type B) dissections, not standard first-line for acute ascending (Type A) root/arch dissections, which require open surgical repair."
      ]
    ],
    "shortestValidSolution": "Ascending aortic dissection + new aortic regurgitation = Stanford Type A -> Emergent open surgery + immediate IV beta-blocker (esmolol: HR < 60, SBP 100-120 to reduce dP/dt).",
    "necessaryInference": "Recognize Stanford Type A dissection as an absolute surgical emergency requiring open repair plus anti-impulse beta-blockade, distinguishing it from medical management of Type B.",
    "strongestDistractor": "Exclusive medical management in the intensive care unit using oral verapamil monotherapy, with surgical intervention reserved only if clinical evidence of limb ischemia develops",
    "distractorExclusion": "Medical monotherapy is for uncomplicated Type B dissection; Type A has a 50% 48-hour mortality without urgent open surgical replacement.",
    "citation": "Isselbacher EM, et al. 2022 ACC/AHA guideline for the diagnosis and management of aortic disease. Circulation. 2022;146(24):e334-e482. PMID: 36322642.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive emergency cardiovascular item assessing the Stanford classification (Type A vs B), hemodynamic shear stress principles (dP/dt), and mandatory open surgery.",
      "distractorExclusionNotes": "Distractors feature dangerous clinical errors: medical management of Type A, lethal thrombolysis (tPA), reflex tachycardia from hydralazine, and misapplied TEVAR.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0403",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Infective Endocarditis Surgical Indications",
    "subtopic": "Refractory Heart Failure, Annular Abscess, Persistent Bacteremia, and Vegetation Size Criteria",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old man with a history of intravenous drug use is hospitalized for Staphylococcus aureus infective endocarditis of the native aortic valve. He has been receiving targeted intravenous cefazolin therapy for 6 days. Over the past 24 hours, he develops worsening dyspnea on minimal exertion, orthopnea, and bilateral lower extremity edema. Vital signs show temperature 38.6 C (101.5 F), blood pressure 110/44 mm Hg (wide pulse pressure), heart rate 108/min, and respiratory rate 26/min. Auscultation reveals a harsh, high-pitched, decrescendo early diastolic murmur at the left sternal border and bilateral diffuse pulmonary rales. A 12-lead ECG demonstrates new prolongation of the PR interval from 160 ms on admission to 270 ms today (new first-degree AV block). Repeat transthoracic and transesophageal echocardiography (TEE) reveals severe aortic regurgitation, a 16-mm mobile vegetation on the non-coronary cusp, and a hypoechoic, thickened area with color Doppler flow within the aortic root tissue adjacent to the membranous interventricular septum, consistent with a perivalvular aortic root abscess. Repeat blood cultures drawn on hospital day 5 remain positive for methicillin-sensitive Staphylococcus aureus. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Emergent cardiac surgery consultation for early surgical aortic valve replacement and root debridement/reconstruction, while continuing targeted intravenous antibiotic therapy",
        "Infective Endocarditis (IE) requires close monitoring for surgical indications: (1) DEFINITIVE INDICATIONS FOR EARLY SURGERY IN INFECTIVE ENDOCARDITIS (AHA/ACC and ESC Guidelines): (a) HEART FAILURE: Severe acute aortic or mitral regurgitation causing cardiogenic shock, pulmonary edema, or refractory New York Heart Association (NYHA) Class III/IV heart failure (the single strongest and most frequent indication for early surgery). (b) UNCONTROLLED INFECTION: Persistent bacteremia or fever despite >= 5-7 days of appropriate, targeted antimicrobial therapy; fungal or multidrug-resistant organisms. (c) PERIVALVULAR EXTENSION / COMPLICATED ANATOMY: Perivalvular abscess, fistula, pseudoaneurysm, or new conduction system disturbance (e.g., new AV block indicating extension of an aortic root abscess into the AV node / bundle of His). (d) HIGH EMBOLIC RISK: Large persistent vegetations (> 10 mm in native valve endocarditis) especially with recurrent embolic events or associated severe valvular dysfunction. (2) PATIENT SYNTHESIS: This patient fulfills ALL FOUR independent major indications for early cardiac surgery: acute severe aortic regurgitation with heart failure, persistent S. aureus bacteremia on day 6 of therapy, perivalvular aortic root abscess with new AV nodal block (PR 270 ms), and a large mobile vegetation (16 mm). Continuing antibiotic therapy alone carries a near-100% mortality; emergent surgical debridement and valve replacement is mandatory."
      ],
      [
        "Switching cefazolin to intravenous daptomycin monotherapy and continuing medical management for 7 additional days before considering surgical intervention",
        "Switching antibiotics without surgery will not treat a deep perivalvular root abscess, severe acute aortic regurgitation, or impending heart block; surgery is mandatory."
      ],
      [
        "Placement of an intra-aortic balloon pump (IABP) to improve coronary perfusion and augment cardiac output",
        "Intra-aortic balloon pumps are ABSOLUTELY CONTRAINDICATED in severe aortic regurgitation; balloon inflation during diastole massively worsens regurgitant flow into the left ventricle, causing fatal ventricular rupture."
      ],
      [
        "Transvenous placement of a permanent dual-chamber pacemaker, with deferral of valve surgery until completion of a 6-week antibiotic course",
        "Placing permanent intravascular pacemaker hardware in the setting of active S. aureus bacteremia will seed the new device; the AV block reflects an invasive abscess requiring surgical debridement."
      ],
      [
        "Administration of intravenous sodium nitroprusside alone to decrease afterload, deferring surgical evaluation until blood cultures turn negative",
        "Deferring surgery until cultures clear in a patient with a perivalvular abscess and refractory heart failure is fatal; early surgery reduces mortality by > 50% in this setting."
      ]
    ],
    "shortestValidSolution": "Infective endocarditis with severe aortic regurgitation, heart failure, perivalvular root abscess (new PR prolongation), persistent bacteremia, and vegetation > 10 mm = Emergent surgical valve replacement.",
    "necessaryInference": "Identify the four classic indications for early valve surgery in infective endocarditis (heart failure, root abscess with AV block, persistent bacteremia, vegetation > 10 mm) and recognize that medical therapy alone is insufficient.",
    "strongestDistractor": "Switching cefazolin to intravenous daptomycin monotherapy and continuing medical management for 7 additional days before considering surgical intervention",
    "distractorExclusion": "Antibiotic switching cannot penetrate or sterilize a mechanical perivalvular abscess or correct severe structural aortic regurgitation; urgent surgical intervention is required.",
    "citation": "Otto CM, et al. 2020 ACC/AHA guideline for the management of patients with valvular heart disease. Circulation. 2021;143(5):e72-e227. PMID: 33332150.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive clinical management item testing guideline-based surgical indications for infective endocarditis, the significance of new AV block as a sign of root abscess, and IABP contraindications.",
      "distractorExclusionNotes": "Distractors feature inappropriate medical delay (antibiotic change), contraindicated devices (IABP worsens AR), hardware seeding (pacemaker in bacteremia), and vasodilator monotherapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0404",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Acute Pericarditis vs Acute Coronary Syndrome",
    "subtopic": "ECG Discrimination (Concave ST Elevation with PR Depression), NSAID/Colchicine Therapy, and Anticoagulation Hazards",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old previously healthy man presents to the emergency department with sharp, substernal chest pain that began 18 hours ago. The pain radiates to his left trapezius ridge and neck. He states that the pain is excruciating when he lies flat on his back or takes a deep breath, but improves noticeably when he sits upright and leans forward. Two weeks ago, he had an acute self-limited febrile illness with sore throat, myalgias, and rhinorrhea. Vital signs reveal blood pressure 122/76 mm Hg, heart rate 86/min, respiratory rate 16/min, and temperature 37.8 C (100.0 F). Cardiovascular examination reveals a scratchy, high-pitched, superficial sound with three components (atrial systole, ventricular systole, and early diastole) heard best along the lower left sternal border during end-expiration with the patient leaning forward. A 12-lead ECG demonstrates diffuse, widespread, concave-upward ST-segment elevation in leads I, II, aVF, and V2 through V6, accompanied by PR-segment depression in leads I, II, and V4-V6, and reciprocal ST-segment depression with PR-segment elevation in lead aVR. Serum troponin I is mildly elevated at 0.12 ng/mL (normal < 0.04 ng/mL). Which of the following is the most appropriate initial pharmacological therapy for this patient?",
    "choices": [
      [
        "High-dose oral nonsteroidal anti-inflammatory therapy (e.g., ibuprofen 600-800 mg three times daily) combined with oral colchicine (0.5-0.6 mg daily for 3 months) to accelerate symptom resolution and prevent recurrent pericarditis",
        "Acute Pericarditis is an inflammatory disorder of the pericardial sac, most commonly (> 80-90% in developed countries) idiopathic or viral (Coxsackievirus, echovirus, adenovirus, EBV, CMV): (1) CLINICAL FEATURES: Pleuritic chest pain (worse with inspiration and supine position, classically RELIEVED BY SITTING FORWARD) with radiation to the TRAPEZIUS RIDGE (due to phrenic nerve sensory innervation of the parietal pericardium). The pathognomonic physical finding is a PERICARDIAL FRICTION RUB (a triphasic superficial scratchy sound). (2) ECG DISCRIMINATION FROM STEMI: Differentiating pericarditis from acute myocardial infarction is vital: (a) Pericarditis produces DIFFUSE, WIDESPREAD, CONCAVE-UPWARD ST ELEVATION across multiple vascular territories (not confined to an anatomical coronary distribution). (b) PR-SEGMENT DEPRESSION is present across limb and precordial leads (caused by atrial subepicardial inflammation), with pathognomonic RECIPROCAL ST DEPRESSION AND PR ELEVATION IN LEAD aVR. (c) Pericarditis LACKS reciprocal ST depressions in limb leads (which characterize STEMI) and does not develop pathologic Q waves. (d) Mild troponin elevation (myopericarditis) is common due to epicardial inflammation. (3) FIRST-LINE MEDICAL THERAPY: (a) HIGH-DOSE NSAIDs (ibuprofen 600-800 mg TID or indomethacin 50 mg TID) or aspirin (for post-infarction pericarditis) until symptoms resolve, PLUS (b) ORAL COLCHICINE (0.5-0.6 mg daily for 3 months; colchicine inhibits microtubule polymerization and neutrophil chemotaxis, reducing recurrence rates by > 50%). Systemic corticosteroids are SECOND-LINE (reserved for NSAID contraindications, autoimmune etiology, or pregnancy) because steroids increase the rate of recurrent pericarditis."
      ],
      [
        "Immediate administration of a weight-based intravenous heparin bolus and infusion, combined with dual antiplatelet therapy (aspirin plus clopidogrel)",
        "Anticoagulation with heparin in acute pericarditis is HAZARDOUS; it can convert serofibrinous pericarditis into a hemorrhagic pericardial effusion, causing acute cardiac tamponade."
      ],
      [
        "High-dose intravenous methylprednisolone monotherapy for 14 days, followed by an accelerated 3-day oral prednisone taper",
        "Corticosteroids are second-line agents that increase the risk of recurrent pericarditis; NSAIDs plus colchicine are first-line."
      ],
      [
        "Emergent transfer to the cardiac catheterization laboratory for primary percutaneous coronary intervention (PCI)",
        "The diffuse concave ST elevation with PR depression and positional pain is diagnostic of pericarditis, not occlusive epicardial coronary artery thrombosis."
      ],
      [
        "Oral verapamil monotherapy to control heart rate and prevent ventricular tachyarrhythmias",
        "Verapamil has no anti-inflammatory activity and does not treat pericardial inflammation."
      ]
    ],
    "shortestValidSolution": "Positional chest pain relieved by leaning forward + friction rub + diffuse concave ST elevation with PR depression and aVR PR elevation = Acute pericarditis -> High-dose NSAIDs + Colchicine.",
    "necessaryInference": "Distinguish acute pericarditis from STEMI on ECG (diffuse concave ST elevation, PR depression, aVR PR elevation) and select first-line therapy (NSAID + colchicine) while avoiding anticoagulation.",
    "strongestDistractor": "Immediate administration of a weight-based intravenous heparin bolus and infusion, combined with dual antiplatelet therapy (aspirin plus clopidogrel)",
    "distractorExclusion": "Heparin anticoagulation is dangerous in pericarditis because it risks converting the effusion into hemorrhagic cardiac tamponade; first-line therapy is NSAIDs plus colchicine.",
    "citation": "Adler Y, et al. 2015 ESC guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015;36(42):2921-2964. PMID: 26320112.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive cardiovascular item testing clinical differentiation of pericarditis from STEMI (pain radiation, posture, PR shifts) and the guideline-directed combination of NSAID plus colchicine.",
      "distractorExclusionNotes": "Distractors feature heparin hazards (hemorrhagic tamponade), premature steroid use (promotes recurrence), emergent PCI, and rate-control CCBs.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0405",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Wide-Complex Tachycardia Discrimination",
    "subtopic": "Ventricular Tachycardia (Brugada Criteria, AV Dissociation) vs SVT with Aberrancy",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man with a history of anterior ST-elevation myocardial infarction 2 years ago and an ischemic cardiomyopathy presents to the emergency department with acute palpitations, chest tightness, and lightheadedness. On arrival, he is pale and diaphoretic. Vital signs reveal blood pressure 94/62 mm Hg, heart rate 168/min and regular, and respiratory rate 20/min. Physical examination reveals intermittent prominent 'cannon a-waves' visible in the internal jugular venous pulsations and variable intensity of the first heart sound (S1). A 12-lead ECG demonstrates a regular wide-complex tachycardia with a QRS duration of 170 ms. Closer inspection of the rhythm strip reveals independent, dissociated P waves occurring at an intrinsic sinus rate of 74/min that march through the regular wide QRS complexes. In addition, an occasional narrow QRS complex identical to baseline sinus conduction is observed ('capture beat'), as well as an occasional QRS complex exhibiting intermediate morphology between the sinus beat and the wide-complex tachycardia beat ('fusion beat'). Concordance of the QRS complexes across all precordial leads (V1-V6) is entirely negative. Which of the following is the definitive diagnosis, and what is the underlying electrophysiological mechanism of the wide QRS morphology?",
    "choices": [
      [
        "Monomorphic ventricular tachycardia (VT); the wide QRS duration reflects slow, non-physiological cell-to-cell myocyte propagation of electrical activation originating from an ectopic focus or re-entrant scar circuit within the ventricular myocardium, bypassing the specialized rapid His-Purkinje conduction system",
        "In a patient presenting with a wide-complex tachycardia (QRS duration >= 120 ms), assuming and treating the rhythm as VENTRICULAR TACHYCARDIA (VT) until proven otherwise is a foundational rule of clinical cardiology, particularly in an older patient with prior myocardial infarction or structural heart disease (> 90% probability of VT): (1) PATHOGNOMONIC ECG SIGNS OF VENTRICULAR TACHYCARDIA: (a) ATRIOVENTRICULAR (AV) DISSOCIATION: The atria and ventricles beat independently (sinus P waves march through wide QRS complexes at an independent, slower rate). (b) CANNON 'A' WAVES: Physical sign of AV dissociation caused by the right atrium contracting against a closed tricuspid valve during ventricular systole. Variable S1 intensity also reflects changing AV valve leaflet positions at ventricular onset. (c) FUSION BEATS (Dressler beats): A hybrid QRS morphology produced when a supraventricular sinus impulse and a ventricular ectopic impulse simultaneously activate the ventricles. (d) CAPTURE BEATS: A transient, normally narrow QRS complex resulting from a supraventricular sinus impulse conducting down the AV node and capturing the entire ventricle during a moment when the conduction system is not refractory. (e) PRECORDIAL CONCORDANCE: Completely negative concordance (all QRS complexes predominantly negative in V1 through V6) or completely positive concordance is diagnostic of VT. (2) ELECTROPHYSIOLOGY OF WIDE QRS: Normal ventricular activation travels rapidly down the specialized His-Purkinje system (conduction velocity ~2-4 m/sec), producing a narrow QRS (< 100-120 ms). In VT originating from a ventricular scar or ectopic focus, activation travels through ordinary working VENTRICULAR MYOCYTES (conduction velocity ~0.3-0.5 m/sec). This slow, asynchronous cell-to-cell spread markedly broadens the QRS complex (> 140-160 ms)."
      ],
      [
        "Supraventricular tachycardia with rate-dependent left bundle branch aberrancy; the wide QRS reflects physiological phase-3 refractory block within the anterior fascicle",
        "SVT with aberrancy displays 1:1 AV association, lacks capture and fusion beats, and does not produce AV dissociation with cannon a-waves."
      ],
      [
        "Atrial flutter with 2:1 atrioventricular conduction and baseline right bundle branch block; the wide QRS reflects congenital Purkinje fiber hypoplasia",
        "Atrial flutter produces fixed flutter waves (typically at 300/min with 2:1 conduction yielding ventricular rate 150/min), without independent P waves or fusion/capture beats."
      ],
      [
        "Orthodromic atrioventricular re-entrant tachycardia (AVRT) utilizing a left-sided concealed accessory pathway",
        "Orthodromic AVRT conducts antegrade down the AV node/His-Purkinje system, producing a NARROW QRS complex unless fixed bundle branch block is present, and maintains strict 1:1 AV relationship."
      ],
      [
        "Sinus tachycardia with baseline ventricular pre-excitation (Wolff-Parkinson-White pattern) conducting exclusively through the normal atrioventricular node",
        "Antegrade AV node conduction in WPW produces a narrow QRS (or minimal delta wave during tachycardia), and does not produce AV dissociation or independent P waves."
      ]
    ],
    "shortestValidSolution": "Wide-complex tachycardia + prior MI + AV dissociation + cannon a-waves + capture/fusion beats = Ventricular Tachycardia (slow myocyte-to-myocyte spread bypassing His-Purkinje).",
    "necessaryInference": "Diagnose ventricular tachycardia by recognizing the definitive diagnostic hallmarks of AV dissociation, capture beats, fusion beats, and cannon a-waves, and explain why the QRS is wide.",
    "strongestDistractor": "Supraventricular tachycardia with rate-dependent left bundle branch aberrancy; the wide QRS reflects physiological phase-3 refractory block within the anterior fascicle",
    "distractorExclusion": "SVT with aberrancy maintains a 1:1 P-to-QRS relationship; capture beats, fusion beats, and AV dissociation are pathognomonic of ventricular tachycardia.",
    "citation": "Brugada P, et al. A new approach to the differential diagnosis of a regular tachycardia with a wide QRS complex. Circulation. 1991;83(5):1649-1659. PMID: 2022022.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive electrophysiology item testing the clinical and ECG criteria distinguishing VT from SVT with aberrancy (Brugada criteria, AV dissociation, fusion/capture beats, cannon a-waves).",
      "distractorExclusionNotes": "Distractors contrast SVT with aberrancy, atrial flutter, orthodromic AVRT, and WPW pre-excitation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0406",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Low-Flow Low-Gradient Aortic Stenosis Evaluation",
    "subtopic": "Dobutamine Stress Echocardiography to Differentiate True Severe from Pseudo-Severe Stenosis",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old man with a history of anterior myocardial infarction, severe left ventricular systolic dysfunction (LVEF 24%), and chronic kidney disease presents with progressive exertional dyspnea (NYHA Class III) and near-syncope when walking short distances. Physical examination reveals blood pressure 104/68 mm Hg, heart rate 68/min, a weak and delayed carotid upstroke (pulsus parvus et tardus), and a harsh, late-peaking systolic ejection murmur heard best at the second right intercostal space that radiates to the carotids. Transthoracic echocardiography at rest reveals:\n- Left ventricular ejection fraction: 24%\n- Calculated aortic valve area (AVA): 0.75 cm2 (suggesting severe aortic stenosis; threshold <= 1.0 cm2)\n- Mean transvalvular pressure gradient: 26 mm Hg (incongruously low; threshold for severe is >= 40 mm Hg)\n- Peak transvalvular jet velocity: 3.1 m/sec (threshold for severe is >= 4.0 m/sec)\n- Stroke volume index: 28 mL/m2 (depressed; threshold for low-flow is < 35 mL/m2)\n\nThis discordant profile represents classical low-flow, low-gradient aortic stenosis with reduced ejection fraction. The cardiologist explains that the low gradient may be due to either true anatomically severe aortic stenosis or 'pseudo-severe' aortic stenosis. Which of the following diagnostic procedures is the most appropriate next step to resolve this diagnostic uncertainty?",
    "choices": [
      [
        "Low-dose intravenous dobutamine stress echocardiography (titrated from 2.5 up to 20 mcg/kg/min) to assess left ventricular contractile flow reserve; an increase in stroke volume >= 20% with an increase in mean gradient >= 40 mm Hg while the aortic valve area remains <= 1.0 cm2 confirms true severe aortic stenosis, whereas an increase in aortic valve area > 1.0 cm2 with little change in gradient indicates pseudo-severe stenosis",
        "Low-Flow, Low-Gradient Aortic Stenosis with Reduced LVEF (classical LF-LG AS) presents a diagnostic dilemma: The calculated aortic valve area is <= 1.0 cm2, but the transaortic mean gradient is < 40 mm Hg because the severely failing, hypokinetic left ventricle CANNOT GENERATE SUFFICIENT FORWARD FLOW (stroke volume index < 35 mL/m2) to produce a high pressure gradient across the stenotic valve. (1) THE TWO COMPETING ENTITIES: (a) TRUE SEVERE AS: The valve leaflets are heavily calcified and anatomically fixed (valve area <= 1.0 cm2). The severe afterload mismatch has caused secondary left ventricular systolic failure. These patients achieve dramatic survival benefit from aortic valve replacement (surgical AVR or TAVR). (b) PSEUDO-SEVERE AS: The aortic valve is only mildly-to-moderately stenosed (e.g., true area 1.2-1.4 cm2). However, primary cardiomyopathy (e.g., prior myocardial infarction) prevents the ventricle from generating enough force to fully push open the moderately stiffened leaflets at rest, making the calculated valve area appear artificially small (< 1.0 cm2). Valve replacement will NOT improve ventricular function or prognosis in pseudo-severe AS. (2) DIAGNOSTIC STEP: LOW-DOSE DOBUTAMINE STRESS ECHOCARDIOGRAPHY (DSE): Low-dose dobutamine (2.5 to 20 mcg/kg/min) is infused to stimulate myocardial beta-1 receptors and recruit CONTRACTILE RESERVE (defined as an increase in stroke volume >= 20%): (a) In TRUE SEVERE AS: As stroke volume increases, the rigid valve cannot open further; therefore, AORTIC VALVE AREA REMAINS <= 1.0 cm2, while MEAN GRADIENT RISES SHARPLY TO >= 40 mm Hg (or peak velocity >= 4.0 m/sec). (b) In PSEUDO-SEVERE AS: Increased forward flow easily forces open the compliant leaflets, causing AORTIC VALVE AREA TO INCREASE TO > 1.0-1.2 cm2 with minimal increase in transvalvular gradient."
      ],
      [
        "High-dose adenosine cardiac magnetic resonance perfusion imaging to evaluate for microvascular myocardial ischemia",
        "Adenosine stress CMR evaluates epicardial coronary ischemia, but does not differentiate true from pseudo-severe fixed valvular stenosis."
      ],
      [
        "Exercise treadmill stress testing to peak predicted heart rate to assess for exercise-induced ST-segment depression",
        "Treadmill exercise testing is STRICTLY CONTRAINDICATED in symptomatic patients with potentially severe aortic stenosis due to the high risk of acute syncope, ventricular fibrillation, and sudden cardiac death."
      ],
      [
        "Cardiac catheterization with intravenous adenosine infusion to measure coronary fractional flow reserve (FFR)",
        "Coronary FFR assesses intermediate coronary artery stenoses, not aortic valve calcification or transvalvular orifice dynamics."
      ],
      [
        "Twenty-four-hour ambulatory Holter monitoring to identify intermittent non-sustained ventricular tachycardia",
        "Holter monitoring evaluates arrhythmias, but cannot assess contractile reserve or distinguish true from pseudo-severe aortic stenosis."
      ]
    ],
    "shortestValidSolution": "Aortic valve area <= 1.0 cm2 with mean gradient < 40 mm Hg and LVEF 24% = Classical low-flow low-gradient AS -> Low-dose dobutamine stress echocardiography (assesses contractile reserve to differentiate true severe AS from pseudo-severe AS).",
    "necessaryInference": "Identify classical low-flow low-gradient aortic stenosis and select low-dose dobutamine stress echocardiography as the definitive test to differentiate true severe from pseudo-severe stenosis based on contractile flow reserve.",
    "strongestDistractor": "Exercise treadmill stress testing to peak predicted heart rate to assess for exercise-induced ST-segment depression",
    "distractorExclusion": "Exercise treadmill testing is contraindicated in symptomatic severe aortic stenosis; low-dose dobutamine echocardiography safely evaluates contractile reserve.",
    "citation": "Baumgartner H, et al. Recommendations on the echocardiographic assessment of aortic valve stenosis: a focused update from the EAE/ASE. J Am Soc Echocardiogr. 2017;30(4):372-392. PMID: 28385280.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive valvular cardiology item evaluating the physiological hemodynamics of low-flow low-gradient aortic stenosis and the exact criteria of dobutamine stress echocardiography.",
      "distractorExclusionNotes": "Distractors feature contraindicated testing (exercise treadmill testing in symptomatic AS), adenosine CMR, coronary FFR, and Holter monitoring.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0407",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Heart Failure with Preserved Ejection Fraction (HFpEF)",
    "subtopic": "HFA-PEFF Diagnostic Criteria, Diastolic Ventricular Stiffness, and SGLT2 Inhibitor Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old woman with a history of long-standing hypertension, obesity (body mass index 36 kg/m2), and Type 2 diabetes mellitus presents with progressive exertional dyspnea, fatigue, and lower extremity swelling over the past 4 months. She can no longer walk up one flight of stairs without stopping to rest. Physical examination reveals blood pressure 148/88 mm Hg, heart rate 76/min, elevated jugular venous pressure of 9 cm H2O, bibasilar fine inspiratory crackles, a prominent fourth heart sound (S4 gallop), and 2+ bilateral pitting pretibial edema. Laboratory testing demonstrates:\n- Serum creatinine: 1.1 mg/dL (eGFR 58 mL/min/1.73 m2)\n- Hemoglobin: 12.8 g/dL\n- Serum N-terminal pro-B-type natriuretic peptide (NT-proBNP): 680 pg/mL (elevated; normal < 125 pg/mL)\n\nTransthoracic echocardiography reveals:\n- Left ventricular ejection fraction: 58% (normal; preserved LVEF >= 50%)\n- Left ventricular end-diastolic dimension: 44 mm (normal cavity size)\n- Left ventricular mass index: 118 g/m2 (concentric left ventricular hypertrophy; normal <= 95 g/m2)\n- Left atrial volume index (LAVI): 42 mL/m2 (markedly enlarged; normal <= 34 mL/m2)\n- Septal mitral annular early diastolic velocity (e'): 5.2 cm/sec (reduced; normal >= 7 cm/sec)\n- Average mitral inflow E to annular e' ratio (E/e'): 16.4 (markedly elevated; indicating elevated LV filling pressures; normal < 9)\n\nWhich of the following classes of pharmacological agents is recommended by current guidelines as a first-line disease-modifying therapy to reduce heart failure hospitalizations and cardiovascular mortality in this patient?",
    "choices": [
      [
        "Sodium-glucose cotransporter 2 (SGLT2) inhibitors (e.g., empagliflozin or dapagliflozin), which reduce intraglomerular pressure, promote osmotic diuresis, improve myocardial bioenergetics, and significantly decrease the composite risk of cardiovascular death and heart failure hospitalization",
        "Heart Failure with Preserved Ejection Fraction (HFpEF) accounts for >= 50% of all clinical heart failure: (1) DIAGNOSTIC CRITERIA (HFA-PEFF / H2FPEF): Requires: (a) Symptoms and signs of heart failure (dyspnea, elevated JVP, S4 gallop, edema), (b) Preserved left ventricular ejection fraction (LVEF >= 50%), (c) Elevated natriuretic peptides (NT-proBNP > 125 pg/mL in sinus rhythm), and (d) Objective echocardiographic evidence of cardiac structural or functional alterations: Left atrial enlargement (LAVI > 34 mL/m2), concentric LV hypertrophy (LV mass index > 95 g/m2 in women), and elevated left ventricular filling pressures (average E/e' ratio > 14). (2) PATHOPHYSIOLOGY: Systemic microvascular endothelial inflammation driven by comorbidities (hypertension, obesity, diabetes) causes coronary microvascular endothelial dysfunction, decreased nitric oxide (NO) bioavailability, reduced protein kinase G (PKG) activity in cardiomyocytes, and hypophosphorylation of the giant cytoskeletal spring titin. Compounded by interstitial collagen deposition and cross-linking, the left ventricle becomes STIFF AND NON-COMPLIANT. During diastole, small increases in filling volume produce steep, dramatic rises in left ventricular end-diastolic pressure, transmitting retrograde into the left atrium, pulmonary veins, and lungs, producing exertional pulmonary congestion and dyspnea. (3) FIRST-LINE DISEASE-MODIFYING THERAPY: Historically, no pharmacological agent showed clear mortality benefit in HFpEF. Landmark randomized trials (EMPEROR-Preserved with empagliflozin, DELIVER with dapagliflozin) demonstrated that SGLT2 INHIBITORS significantly reduce the primary composite endpoint of cardiovascular death and heart failure hospitalizations across the entire spectrum of preserved ejection fraction (regardless of diabetes status). SGLT2 inhibitors now carry a Class I recommendation in AHA/ACC and ESC guidelines as foundational therapy for HFpEF. Loop diuretics are used judiciously to manage volume overload."
      ],
      [
        "High-dose digoxin monotherapy to augment myocardial sarcoplasmic reticulum calcium ATPase (SERCA2a) uptake and improve active diastolic relaxation",
        "Digoxin has no mortality or outcome benefit in HFpEF (DIG-PE trial) and increases toxicity in elderly women; inotropic stimulation is not indicated for preserved EF."
      ],
      [
        "Routine long-acting oral nitrates (isosorbide mononitrate) to promote venous pooling and reduce left ventricular preload",
        "The NEAT-HFpEF trial demonstrated that isosorbide mononitrate is harmful in HFpEF, causing decreased physical activity, hypotension, and no improvement in quality of life."
      ],
      [
        "Phosphodiesterase-5 inhibitors (sildenafil) to selectively dilate the pulmonary arterial bed and reduce right ventricular afterload",
        "The RELAX trial showed that sildenafil provides NO benefit in exercise capacity, clinical status, or outcomes in HFpEF."
      ],
      [
        "Class IC antiarrhythmic agents (flecainide) to suppress premature ventricular complexes and prevent atrial remodeling",
        "Class IC antiarrhythmics are contraindicated in structural heart disease (CAST trial) due to proarrhythmic mortality risks."
      ]
    ],
    "shortestValidSolution": "Symptoms of heart failure + LVEF 58% + high NT-proBNP + E/e' > 14 + enlarged left atrium = HFpEF -> First-line disease-modifying therapy = SGLT2 inhibitor (empagliflozin/dapagliflozin).",
    "necessaryInference": "Diagnose HFpEF based on objective clinical, biomarker, and echocardiographic criteria (E/e' > 14, LAVI > 34), and identify SGLT2 inhibitors as the guideline-directed first-line therapy.",
    "strongestDistractor": "Routine long-acting oral nitrates (isosorbide mononitrate) to promote venous pooling and reduce left ventricular preload",
    "distractorExclusion": "The NEAT-HFpEF trial proved that nitrates worsen activity levels and provide no benefit in HFpEF; SGLT2 inhibitors are the proven disease-modifying agents.",
    "citation": "Anker SD, et al. Empagliflozin in heart failure with a preserved ejection fraction. N Engl J Med. 2021;385(16):1451-1461. PMID: 34449189.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive modern cardiology item evaluating HFA-PEFF diagnostic criteria (LVEF >= 50, E/e' > 14, LAVI, NT-proBNP), diastolic titin pathophysiology, and SGLT2 inhibitor trial evidence.",
      "distractorExclusionNotes": "Distractors target therapies disproven or harmful in clinical trials: digoxin (DIG-PE), nitrates (NEAT-HFpEF), sildenafil (RELAX), and flecainide (CAST).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0408",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Acute Decompensated Heart Failure and Cardiorenal Syndrome",
    "subtopic": "Venous Congestion vs Arterial Underfilling, Loop Diuretic Escalation, and Avoiding Premature Ultrafiltration",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man with ischemic cardiomyopathy (LVEF 28%) and chronic kidney disease (baseline serum creatinine 1.4 mg/dL; eGFR 50 mL/min/1.73 m2) presents with a 1-week history of worsening orthopnea (sleeping on 4 pillows), paroxysmal nocturnal dyspnea, and profound bilateral leg swelling. His home medications include lisinopril 20 mg daily, carvedilol 25 mg twice daily, and oral furosemide 40 mg once daily. On physical examination, blood pressure is 134/82 mm Hg, heart rate 82/min, respiratory rate 24/min, and oxygen saturation 91% on room air. He has jugular venous distension to the angle of the jaw at 45 degrees (JVP > 14 cm H2O), a loud S3 gallop, bilateral mid-lung coarse crackles, and 3+ pitting edema extending to the mid-thighs with scrotal edema. Laboratory evaluation demonstrates:\n- Serum sodium: 136 mEq/L\n- Serum potassium: 4.8 mEq/L\n- Blood urea nitrogen (BUN): 48 mg/dL\n- Serum creatinine: 2.3 mg/dL (acutely elevated from 1.4 mg/dL)\n- B-type natriuretic peptide (BNP): 1,840 pg/mL\n\nThe admitting resident expresses concern that administering diuretics will worsen his acute kidney injury and suggests holding furosemide or initiating emergent venous ultrafiltration. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Administer intravenous loop diuretic therapy immediately at a dose equal to 2.0 to 2.5 times his home oral dose (e.g., intravenous furosemide 80-100 mg), because acute cardiorenal syndrome (Type 1) in this setting is primarily driven by renal venous congestion and elevated central venous pressure rather than arterial underfilling, and successful decongestion is required to restore renal perfusion gradient",
        "Acute Cardiorenal Syndrome (Type 1 CRS) is the acute worsening of renal function in the setting of acute decompensated heart failure: (1) PATHOPHYSIOLOGY OF RENAL CONGESTION: Historically, worsening renal function in heart failure was assumed to result from 'forward failure' (low cardiac output and arterial underfilling causing prerenal azotemia). However, modern physiological studies (e.g., the ESCAPE trial) have conclusively demonstrated that RENAL VENOUS CONGESTION (elevated central venous pressure and elevated intra-abdominal pressure) is the PRIMARY HEMODYNAMIC DRIVER of worsening renal function in decompensated heart failure. Renal perfusion pressure equals Mean Arterial Pressure (MAP) minus Central Venous Pressure (CVP). When CVP rises to 15-20 mm Hg, renal venous hypertension is transmitted backward into renal venules, collapsing peritubular capillaries, increasing Bowman capsule hydrostatic pressure, and severely blunting net glomerular filtration. (2) MANAGEMENT (DOSE TRIAL STRATEGY): (a) DECONGESTION IS THERAPEUTIC: The treatment for renal venous congestion is AGGRESSIVE LOOP DIURETIC THERAPY. Withholding diuretics out of fear of worsening creatinine allows venous hypertension to persist, worsening renal dysfunction and causing asphyxiating pulmonary edema. (b) INTRAVENOUS ESCALATION: The landmark NHLBI DOSE trial established that intravenous loop diuretics should be initiated at a dose EQUAL TO 2.0 TO 2.5 TIMES THE PATIENT'S HOME ORAL DAILY DOSE (e.g., if on 40 mg oral furosemide, give 80-100 mg IV furosemide as a bolus or continuous infusion). (c) TRANSIENT CREATININE BUMPS: A mild rise in serum creatinine during aggressive decongestion does NOT indicate true nephrotoxic injury; if accompanied by clinical decongestion (weight loss, declining JVP, resolving rales), it reflects hemoconcentration and is associated with SUPERIOR long-term survival. (d) ULTRAFILTRATION: The CARRESS-HF trial demonstrated that routine early ultrafiltration is inferior to stepped pharmacological diuretic escalation, causing higher adverse event rates without improving renal function."
      ],
      [
        "Withhold all diuretic therapy and administer 1.5 L of 0.9% normal saline to treat presumed prerenal azotemia and restore renal plasma flow",
        "Administering normal saline to a patient with massive volume overload (JVP to jaw, pulmonary edema, S3, 3+ edema) will precipitate acute respiratory arrest."
      ],
      [
        "Initiate emergent peripheral venovenous ultrafiltration to extract fluid without utilizing nephrotoxic diuretics",
        "The CARRESS-HF trial showed ultrafiltration is not superior to pharmacological diuretic therapy in cardiorenal syndrome and carries higher complication rates."
      ],
      [
        "Discontinue carvedilol and lisinopril and initiate low-dose dopamine (2 mcg/kg/min) for selective 'renal-dose' dopaminergic vasodilation",
        "The DAD-HF and ROSE-AHF trials demonstrated that 'renal-dose' dopamine provides no improvement in diuresis, renal function, or survival."
      ],
      [
        "Initiate oral spironolactone at high doses (100 mg daily) as exclusive monotherapy to avoid loop diuretic-induced hypokalemia",
        "Spironolactone at high doses takes days to work, is a weak diuretic, and risks lethal hyperkalemia in acute renal dysfunction (creatinine 2.3 mg/dL)."
      ]
    ],
    "shortestValidSolution": "Decompensated heart failure + acute rise in creatinine with massive volume overload (JVP high, S3, edema) = Type 1 Cardiorenal syndrome (driven by venous congestion) -> Treat with IV loop diuretics at 2-2.5x home oral dose (DOSE trial).",
    "necessaryInference": "Recognize that acute cardiorenal syndrome is driven by renal venous congestion (not hypovolemia), and apply the DOSE trial protocol (IV loop diuretics at 2-2.5x home oral dose) rather than withholding diuretics or performing ultrafiltration.",
    "strongestDistractor": "Initiate emergent peripheral venovenous ultrafiltration to extract fluid without utilizing nephrotoxic diuretics",
    "distractorExclusion": "The CARRESS-HF trial proved ultrafiltration is inferior to stepped medical loop diuretic escalation; diuretics should be escalated, not replaced by ultrafiltration.",
    "citation": "Felker GM, et al. Diuretic strategies in patients with acute decompensated heart failure. N Engl J Med. 2011;364(9):797-805. PMID: 21366472.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive clinical management item evaluating the hemodynamics of cardiorenal syndrome (renal venous hypertension), the DOSE trial protocol, and trial evidence refuting ultrafiltration (CARRESS-HF) and renal-dose dopamine (ROSE-AHF).",
      "distractorExclusionNotes": "Distractors feature dangerous clinical mistakes: saline in pulmonary edema, premature ultrafiltration, 'renal-dose' dopamine, and spironolactone monotherapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0409",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Cardiac Tamponade Hemodynamics and Emergency Management",
    "subtopic": "Beck's Triad, Pulsus Paradoxus (> 10 mm Hg), Ventricular Interdependence, and Pericardiocentesis",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old woman with metastatic adenocarcinoma of the breast treated with systemic chemotherapy presents to the emergency department with acute shortness of breath, lightheadedness, and profound weakness. Physical examination reveals an anxious, diaphoretic woman sitting upright. Vital signs reveal blood pressure of 86/64 mm Hg (pulse pressure 22 mm Hg), heart rate 116/min and regular, and respiratory rate 24/min. Heart sounds are distant, muffled, and soft on auscultation, and lung fields are completely clear to auscultation bilaterally. Jugular venous examination reveals marked distension extending above the angle of the jaw at 45 degrees, with a prominent systolic 'x' descent and complete absence of the diastolic 'y' descent. During blood pressure measurement with a manual sphygmomanometer, Korotkoff sounds are first heard only during expiration at 96 mm Hg; as the cuff is deflated, Korotkoff sounds become audible during both inspiration and expiration at 78 mm Hg (an inspiratory systolic pressure decline of 18 mm Hg). A 12-lead ECG demonstrates sinus tachycardia, low QRS voltage in limb leads (< 5 mm), and beat-to-beat cyclical alternation in the amplitude of QRS complexes ('electrical alternans'). Transthoracic echocardiography reveals a large, circumferential, echo-free pericardial effusion with late diastolic collapse of the right atrium and early diastolic collapse of the right ventricle. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate emergent needle pericardiocentesis under echocardiographic or fluoroscopic guidance with temporary intravenous fluid resuscitation (isotonic crystalloid bolus) while awaiting procedure setup",
        "Cardiac Tamponade is a life-threatening cardiovascular emergency caused by accumulation of fluid in the pericardial space under elevated pressure: (1) PATHOPHYSIOLOGY: As pericardial fluid volume exceeds the pericardial reserve capacity, intrapericardial pressure rises above normal (normally ~0 to -3 mm Hg) until it EQUALS OR EXCEEDS INTRACARDIAC DIASTOLIC PRESSURES. (2) HEMODYNAMIC HALLMARKS: (a) BECK'S TRIAD: Hypotension, elevated jugular venous pressure, and muffled/distant heart sounds. (b) LOSS OF 'Y' DESCENT: The diastolic 'y' descent in the JVP waveform represents rapid passive filling of the right ventricle in early diastole; in tamponade, high pericardial pressure completely blocks early diastolic filling, abolishing the 'y' descent (while the systolic 'x' descent is preserved). (c) PULSUS PARADOXUS: Defined as an exaggerated drop in systolic blood pressure of > 10 mm Hg during normal inspiration (here, 96 - 78 = 18 mm Hg). During inspiration, negative intrathoracic pressure increases venous return to the right heart. Because the rigid pericardium fixes total cardiac volume, the expanded right ventricle compresses the interventricular septum into the left ventricular cavity (VENTRICULAR INTERDEPENDENCE), severely reducing left ventricular filling, stroke volume, and systolic blood pressure. (d) ELECTRICAL ALTERNANS: Beat-to-beat variation in QRS amplitude caused by the heart physically swinging back and forth within the large fluid-filled pericardial sac. (3) DEFINITIVE MANAGEMENT: Cardiac tamponade is a MECHANICAL compressive disorder. The definitive, lifesaving therapy is IMMEDIATE PERICARDIOCENTESIS (or surgical subxiphoid pericardial window). Removing even 30-50 mL of fluid drops intrapericardial pressure below intracardiac diastolic pressure, restoring venous return and cardiac output. An immediate intravenous crystalloid bolus is administered as a temporary temporizing measure to augment right ventricular filling pressure while the pericardiocentesis tray is immediately opened."
      ],
      [
        "Intravenous administration of furosemide (80 mg) to reduce pericardial fluid accumulation and relieve central venous congestion",
        "Diuretics are CATASTROPHICALLY CONTRAINDICATED in cardiac tamponade; reducing intravascular volume drops ventricular filling pressures below intrapericardial pressure, triggering immediate complete circulatory collapse."
      ],
      [
        "Urgent endotracheal intubation with positive-pressure mechanical ventilation to reduce work of breathing before transfer to the operating room",
        "Positive pressure ventilation increases intrathoracic pressure, dramatically decreasing systemic venous return, precipitating immediate fatal cardiac arrest in tamponade; intubation should be deferred until the pericardium is decompressed."
      ],
      [
        "Immediate administration of high-dose intravenous nitroprusside to decrease left ventricular afterload and widen the narrowed pulse pressure",
        "Vasodilators (nitroprusside) drop systemic vascular resistance; in a patient with cardiogenic obstructive shock (BP 86/64), nitroprusside causes fatal profound shock."
      ],
      [
        "Subcutaneous administration of low-molecular-weight heparin to prevent pulmonary embolism secondary to deep venous stasis",
        "Anticoagulation in malignant pericardial effusion carries an extreme risk of catastrophic intrapericardial hemorrhage and rapid exsanguinating tamponade."
      ]
    ],
    "shortestValidSolution": "Muffled heart sounds + high JVP + hypotension (Beck triad) + pulsus paradoxus > 10 mm Hg + electrical alternans + diastolic RV collapse = Cardiac Tamponade -> Immediate pericardiocentesis (diuretics and positive pressure ventilation contraindicated).",
    "necessaryInference": "Diagnose cardiac tamponade from Beck's triad, pulsus paradoxus, and electrical alternans, and select emergent pericardiocentesis while recognizing the fatal hazards of diuretics and positive-pressure ventilation.",
    "strongestDistractor": "Intravenous administration of furosemide (80 mg) to reduce pericardial fluid accumulation and relieve central venous congestion",
    "distractorExclusion": "Diuretics are strictly contraindicated in cardiac tamponade because volume reduction drops intracardiac filling pressure below pericardial pressure, causing immediate arrest.",
    "citation": "Adler Y, et al. 2015 ESC guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015;36(42):2921-2964. PMID: 26320112.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive emergency cardiovascular item assessing Beck's triad, JVP waveform (absent y descent), pulsus paradoxus biophysics, electrical alternans, and pericardiocentesis.",
      "distractorExclusionNotes": "Distractors feature lethal management errors: diuretics (collapse), positive-pressure ventilation (impairs venous return), vasodilators, and heparin.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0410",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Constrictive Pericarditis vs Restrictive Cardiomyopathy",
    "subtopic": "Pericardial Calcification, Dip-and-Plateau Tracing, Ventricular Interdependence, and Kussmaul Sign",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man presents with progressive abdominal distension, severe lower extremity edema, and exertional fatigue over the past 9 months. He underwent mediastinal radiation therapy 15 years ago for Hodgkin lymphoma and has been in complete remission. On physical examination, blood pressure is 114/78 mm Hg, and pulse is 76/min. He has marked ascites, tender hepatomegaly, and 3+ bilateral pitting edema extending to the sacrum. Jugular venous examination demonstrates an elevated JVP of 12 cm H2O; upon inspiration, the jugular venous pressure paradoxically RISES by 3 cm H2O (positive Kussmaul sign). The jugular venous pulse waveform displays a prominent, sharp 'y' descent. Cardiovascular auscultation reveals normal S1 and S2 and an early, high-pitched, sharp diastolic sound heard 0.08 seconds after the second heart sound along the left sternal border ('pericardial knock'). Chest radiography demonstrates a normal cardiac silhouette with a distinct, dense, curvilinear band of calcification encasing the cardiac silhouette. Simultaneous right and left heart catheterization demonstrates: \n- Equalization of end-diastolic pressures in all four cardiac chambers (~20 mm Hg)\n- Ventricular pressure waveforms exhibiting an initial rapid early diastolic drop followed by an abrupt, high diastolic pressure plateau ('dip-and-plateau' or 'square-root sign')\n- Respirophasic discordant ventricular interdependence (during inspiration, right ventricular peak systolic pressure rises while left ventricular peak systolic pressure simultaneously falls)\n\nWhich of the following is the definitive curative treatment for this patient's underlying condition?",
    "choices": [
      [
        "Complete surgical pericardiectomy ('pericardial stripping'), which excises the rigid, fibrotic, calcified visceral and parietal pericardium to restore normal diastolic ventricular filling",
        "Constrictive Pericarditis is a chronic fibrous thickening and calcification of the pericardium: (1) ETIOLOGY: In developed countries, idiopathic/viral, prior CARDIAC SURGERY, or PRIOR MEDIASTINAL RADIATION (classically 10-20 years following radiation for Hodgkin lymphoma or breast cancer) are the primary causes; in developing countries, tuberculosis is leading. (2) CLINICAL FEATURES: Predominance of SEVERE RIGHT HEART FAILURE: Ascites, hepatosplenomegaly ('cardiac cirrhosis'), peripheral edema, and high JVP. (3) PHYSICAL AND HEMODYNAMIC HALLMARKS: (a) KUSSMAUL SIGN: Paradoxical inspiratory rise in JVP (normally JVP falls with inspiration). The rigid pericardium prevents the right ventricle from accommodating increased inspiratory venous return. (b) PERICARDIAL KNOCK: A sharp early diastolic sound occurring as rapid early ventricular filling is abruptly arrested by the non-yielding pericardial shell. (c) PROMINENT 'Y' DESCENT: In sharp contrast to cardiac tamponade (where the 'y' descent is absent), constrictive pericarditis features an exaggerated, steep 'y' descent due to rapid early diastolic emptying into the ventricle before the filling limit is hit. (d) 'DIP-AND-PLATEAU' / SQUARE ROOT SIGN: Rapid early diastolic drop followed by a rigid plateau in ventricular pressure tracings. (e) VENTRICULAR INTERDEPENDENCE: Rigid shell couples the ventricles; on inspiration, RV filling increases at the expense of LV filling (discordant pressure waves). (4) DEFINITIVE TREATMENT: Medical therapy with diuretics provides temporary symptom palliation, but SURGICAL PERICARDIECTOMY ('pericardial stripping') is the sole definitive, curative therapy."
      ],
      [
        "Orthotopic heart transplantation to replace the fibrotic, amyloid-infiltrated myocardium",
        "Heart transplantation is reserved for refractory end-stage restrictive cardiomyopathy (e.g., severe amyloidosis); constrictive pericarditis has an intact, normal myocardium trapped inside a calcified shell that is cured by pericardiectomy."
      ],
      [
        "Long-term systemic immunosuppressive therapy with high-dose azathioprine and oral prednisone",
        "Chronic fibrotic and calcified constrictive pericarditis is an irreversible mechanical disorder that does not respond to immunosuppressive therapy."
      ],
      [
        "Emergent catheter-directed needle pericardiocentesis to aspirate high-pressure pericardial fluid",
        "Pericardiocentesis is indicated for cardiac tamponade (liquid effusion); constrictive pericarditis is a rigid, calcified shell with little to no free fluid."
      ],
      [
        "Placement of a transjugular intrahepatic portosystemic shunt (TIPS) to decompress severe sinusoidal portal hypertension",
        "TIPS is contraindicated in right heart failure and constrictive pericarditis; shunting portal blood to the right heart precipitates acute heart failure and worsening central venous hypertension."
      ]
    ],
    "shortestValidSolution": "Prior radiation + ascites + Kussmaul sign + pericardial knock + pericardial calcification + dip-and-plateau pressure tracing = Constrictive Pericarditis -> Curative treatment = Surgical pericardiectomy.",
    "necessaryInference": "Differentiate constrictive pericarditis from restrictive cardiomyopathy using pericardial calcification, prominent y descent, and ventricular interdependence, and identify surgical pericardiectomy as curative.",
    "strongestDistractor": "Orthotopic heart transplantation to replace the fibrotic, amyloid-infiltrated myocardium",
    "distractorExclusion": "Heart transplantation is for restrictive cardiomyopathy (myocardial disease); constrictive pericarditis has normal underlying myocardium and is cured by stripping the rigid pericardium.",
    "citation": "Welch TD, et al. Constrictive pericarditis: modern risk assessment and etiology. J Am Coll Cardiol. 2014;63(4):354-368. PMID: 24161320.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive comparative cardiology item evaluating constrictive pericarditis vs restrictive cardiomyopathy: Kussmaul sign, pericardial knock, square-root sign, and surgical pericardiectomy.",
      "distractorExclusionNotes": "Distractors contrast heart transplantation (restrictive cardiomyopathy), immunosuppression, pericardiocentesis (tamponade), and contraindicated TIPS.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0411",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Post-Myocardial Infarction Mechanical Complications",
    "subtopic": "Papillary Muscle Rupture vs Ventricular Septal Rupture vs Free Wall Rupture Timing and Hemodynamics",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old woman is admitted to the cardiac care unit following an acute inferior ST-elevation myocardial infarction (STEMI) involving the right coronary artery (RCA). She received successful primary percutaneous coronary intervention with drug-eluting stent placement to the proximal RCA 4 days ago. On post-infarction day 4, she suddenly develops acute, severe dyspnea, diaphoresis, and anxiety. Physical examination reveals an agitated, pale woman in severe respiratory distress. Vital signs reveal blood pressure 84/52 mm Hg, heart rate 118/min, and respiratory rate 32/min. Auscultation of the heart reveals a soft S1, an S3 gallop, and a new, harsh, early-to-mid systolic blowing murmur heard best at the cardiac apex that radiates to the axilla; there is NO palpable thrill. Bilateral diffuse pulmonary crackles extend throughout all lung fields. Bedside pulmonary artery catheterization demonstrates:\n- Right atrial pressure: 10 mm Hg\n- Pulmonary artery pressure: 52/28 mm Hg\n- Mean pulmonary capillary wedge pressure (PCWP): 32 mm Hg, with giant, tall 'v' waves reaching 58 mm Hg\n- Oxygen saturation run: Right atrium 64%, Right ventricle 65%, Pulmonary artery 64% (no oxygen step-up)\n\nWhich of the following is the definitive diagnosis, and what anatomical feature explains why this mechanical complication occurred?",
    "choices": [
      [
        "Acute posteromedial papillary muscle rupture producing catastrophic mitral regurgitation; the posteromedial papillary muscle is singularly vulnerable to ischemic necrosis because it receives a solitary blood supply exclusively from the posterior descending artery (typically from the right coronary artery), unlike the anterolateral papillary muscle which has a dual blood supply from both the LAD and LCx",
        "Post-MI mechanical complications typically occur within 3 to 7 days following transmural infarction: (1) PAPILLARY MUSCLE RUPTURE: (a) ANATOMY: The mitral valve has two papillary muscles. The anterolateral papillary muscle has a DUAL blood supply (left anterior descending and left circumflex arteries). IN CONTRAST, the POSTEROMEDIAL PAPILLARY MUSCLE has a SINGLE, SOLITARY BLOOD SUPPLY from the POSTERIOR DESCENDING ARTERY (PDA; which arises from the Right Coronary Artery in 90% of individuals [right-dominant]). Consequently, an INFERIOR STEMI causing PDA occlusion leaves the posteromedial papillary muscle completely ischemic, making it ~6-10 times more prone to rupture than the anterolateral muscle. (b) CLINICAL PRESENTATION: Presents on days 3-5 with sudden pulmonary edema, cardiogenic shock, and a new apical systolic murmur (often soft or early systolic because massive regurgitation into a non-compliant left atrium rapidly equilibrates LA and LV pressures). (c) HEMODYNAMICS: Severe acute mitral regurgitation forces large volumes of blood retrograde into the left atrium during ventricular systole, producing GIANT, TALL 'V' WAVES on PCWP tracings. (d) NO O2 STEP-UP: Oximetry shows identical oxygen saturations in the RA, RV, and PA (no shunt). (2) CONTRAST WITH VENTRICULAR SEPTAL RUPTURE (VSR): VSR presents with a HARSH HOLOSYSTOLIC MURMUR WITH A PALPABLE THRILL at the left lower sternal border, and oximetry confirms a PATHOGNOMONIC OXYGEN STEP-UP (> 5-7%) from right atrium to right ventricle (left-to-right shunt). (3) CONTRAST WITH FREE WALL RUPTURE: Causes sudden electromechanical dissociation (PEA) and fatal cardiac tamponade without a new regurgitant murmur."
      ],
      [
        "Acute ventricular septal rupture (VSR); the muscular interventricular septum ruptured due to dual vascular necrosis from combined LAD and RCA occlusion, producing a left-to-right shunt",
        "VSR produces a harsh murmur with a PALPABLE THRILL and an OXYGEN STEP-UP (> 5%) from RA to RV; this patient has no thrill and identical O2 saturations (no step-up)."
      ],
      [
        "Left ventricular free wall rupture; transmural rupture through necrotic myocardium occurred due to lack of pericardial collateral vessels, causing acute pericardial tamponade",
        "Free wall rupture causes sudden cardiac tamponade, electromechanical dissociation (PEA), and elevated CVP without pulmonary edema or giant PCWP 'v' waves."
      ],
      [
        "Dynamic left ventricular outflow tract obstruction secondary to acute apical ballooning (Takotsubo cardiomyopathy)",
        "Takotsubo causes apical ballooning and preserved coronary arteries; this patient had an inferior STEMI and giant 'v' waves indicating structural mitral valve disruption."
      ],
      [
        "Acute aortic valve cusp avulsion resulting from systemic hypertensive crisis; single blood supply from the conus branch of the RCA",
        "Aortic cusp avulsion produces acute aortic regurgitation (early diastolic murmur, wide pulse pressure), not an apical systolic murmur with giant PCWP 'v' waves."
      ]
    ],
    "shortestValidSolution": "Inferior STEMI 4 days ago + acute shock/pulmonary edema + apical systolic murmur (no thrill) + giant PCWP 'v' waves + no O2 step-up = Posteromedial papillary muscle rupture (single PDA/RCA blood supply).",
    "necessaryInference": "Differentiate papillary muscle rupture from ventricular septal rupture (oximetry step-up and thrill) and free wall rupture, and identify the single blood supply to the posteromedial papillary muscle as the predisposing anatomy.",
    "strongestDistractor": "Acute ventricular septal rupture (VSR); the muscular interventricular septum ruptured due to dual vascular necrosis from combined LAD and RCA occlusion, producing a left-to-right shunt",
    "distractorExclusion": "Ventricular septal rupture produces a palpable thrill and a significant oxygen step-up from RA to RV (> 5%); absence of step-up and presence of giant 'v' waves confirms acute mitral regurgitation.",
    "citation": "Elbadawi A, et al. Mechanical complications of acute myocardial infarction: a review. JACC Cardiovasc Interv. 2019;12(8):725-735. PMID: 30981775.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive post-MI complications item testing the timing (days 3-5), vascular anatomy (posteromedial single PDA supply), physical signs (thrill vs no thrill), and oximetry/hemodynamics (giant 'v' waves, no step-up).",
      "distractorExclusionNotes": "Distractors feature ventricular septal rupture (step-up/thrill), free wall rupture (tamponade/PEA), Takotsubo, and aortic cusp injury.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0412",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Hypertrophic Cardiomyopathy (HCM) Hemodynamics",
    "subtopic": "Dynamic Left Ventricular Outflow Tract Obstruction, Dynamic Auscultation, and Beta-Blocker vs Inotrope Effects",
    "provisionalDifficulty": 5,
    "stem": "A 21-year-old collegiate basketball player is referred for cardiology evaluation after experiencing two episodes of lightheadedness and near-syncope during strenuous fast-break drills. His family history is notable for a paternal uncle who died suddenly while playing soccer at age 24. On physical examination, he appears athletic with normal vital signs at rest. Cardiovascular auscultation reveals a harsh, crescendo-decrescendo systolic ejection murmur heard best at the lower left sternal border that does not radiate to the carotids. Dynamic bedside auscultatory maneuvers reveal:\n- Standing abruptly from a squatting position: murmur intensity increases substantially (from grade 2/6 to grade 4/6)\n- Strain phase of the Valsalva maneuver: murmur intensity increases markedly\n- Sustained isometric handgrip: murmur intensity decreases significantly\n- Passive leg elevation (supine): murmur intensity decreases significantly\n\nTransthoracic echocardiography demonstrates asymmetric septal hypertrophy with an interventricular septal thickness of 24 mm (normal <= 12 mm), a septal-to-posterior wall thickness ratio of 2.1:1, systolic anterior motion (SAM) of the anterior mitral valve leaflet contacting the hypertrophied septum, and a peak resting left ventricular outflow tract (LVOT) gradient of 52 mm Hg that increases to 88 mm Hg with Valsalva. Which of the following describes the mechanism by which standing and Valsalva increase this murmur, and what is the first-line pharmacological therapy?",
    "choices": [
      [
        "Standing and the Valsalva strain phase decrease venous return (preload) and reduce left ventricular cavity size, bringing the hypertrophied septum and anterior mitral leaflet closer together, which intensifies dynamic LVOT obstruction and increases murmur intensity; first-line pharmacological therapy is a non-vasodilating beta-blocker (e.g., metoprolol or atenolol) to slow heart rate, prolong diastole, and reduce inotropy",
        "Hypertrophic Cardiomyopathy (HCM) is an autosomal dominant disorder of the cardiac sarcomere (most commonly mutations in MYH7 [beta-myosin heavy chain] or MYBPC3 [myosin-binding protein C]): (1) PATHOPHYSIOLOGY OF DYNAMIC LVOT OBSTRUCTION: In ~70% of patients (Hypertrophic Obstructive Cardiomyopathy; HOCM), asymmetric septal hypertrophy combined with systolic anterior motion (SAM) of the mitral valve creates a dynamic outflow tract gradient: Rapid blood flow through the narrowed LVOT creates a Venturi drag effect, pulling the anterior mitral leaflet toward the hypertrophied septum in midsystole, producing dynamic LVOT obstruction and secondary mitral regurgitation. (2) DYNAMIC AUSCULTATION (CRITICAL FOR USMLE): The intensity of the HOCM murmur is INVERSELY PROPORTIONAL to left ventricular cavity size and afterload: (a) MANEUVERS THAT DECREASE PRELOAD OR AFTERLOAD (Standing, Valsalva strain phase, nitroglycerin, dehydration): Decrease LV chamber size, bringing the mitral leaflet and septum closer together, WORSENING LVOT OBSTRUCTION and INCREASING MURMUR INTENSITY. (b) MANEUVERS THAT INCREASE PRELOAD OR AFTERLOAD (Squatting, passive leg raise, isometric handgrip): Expand LV cavity volume (or increase afterload), pushing the septum and mitral leaflet apart, RELIEVING LVOT OBSTRUCTION and DECREASING MURMUR INTENSITY. (Contrast with Aortic Stenosis, where squatting increases and standing decreases murmur intensity). (3) PHARMACOTHERAPY: (a) FIRST-LINE: NON-VASODILATING BETA-BLOCKERS (metoprolol, atenolol, propranolol). Beta-blockers decrease heart rate (prolonging diastolic filling time, increasing LV end-diastolic volume/chamber size) and reduce inotropy (reducing ejection velocity), significantly relieving LVOT obstruction. (b) Non-dihydropyridine CCBs (verapamil) are second-line. (c) Mavacamten (cardiac myosin ATPase inhibitor) is a novel disease-targeted agent. (d) MEDICATIONS CONTRAINDICATED IN HCM: Dihydropyridine CCBs, nitrates, ACE inhibitors/ARBs (vasodilation decreases afterload/preload), and positive inotropes (digoxin; worsens obstruction)."
      ],
      [
        "Standing increases systemic vascular resistance (afterload), which increases left ventricular transmural pressure; first-line therapy is high-dose oral hydralazine to reduce afterload",
        "Standing decreases venous return (preload); hydralazine causes vasodilation and reflex inotropy, which severely worsens LVOT obstruction and is contraindicated."
      ],
      [
        "Valsalva stimulates parasympathetic vagal efferents that cause coronary artery spasm; first-line therapy is sublingual nitroglycerin PRN during exercise",
        "Valsalva decreases preload; nitroglycerin causes venodilation and drops preload, worsening LVOT obstruction and precipitating syncope in HCM."
      ],
      [
        "Standing accelerates aortic root elastic recoil increasing coronary perfusion; first-line therapy is oral digoxin to augment myocardial contractility",
        "Digoxin is a positive inotrope that increases contractile velocity, worsening systolic anterior motion and LVOT obstruction; it is strictly contraindicated in HOCM."
      ],
      [
        "Valsalva induces aortic regurgitation through asymmetric leaflets; first-line therapy is immediate transcatheter aortic valve implantation (TAVR)",
        "HCM is a subvalvular muscular and dynamic mitral obstruction, not aortic valve stenosis; TAVR does not treat HCM."
      ]
    ],
    "shortestValidSolution": "Young athlete + murmur increases with standing/Valsalva and decreases with squatting/handgrip + asymmetric septal hypertrophy = Hypertrophic Cardiomyopathy -> Treat with Beta-blockers (slows HR, prolongs diastole, decreases inotropy).",
    "necessaryInference": "Analyze dynamic auscultation in HCM (standing/Valsalva decrease preload, worsening obstruction and increasing murmur), and identify non-vasodilating beta-blockers as first-line therapy while recognizing contraindicated drugs (nitrates, digoxin, dihydropyridines).",
    "strongestDistractor": "Valsalva stimulates parasympathetic vagal efferents that cause coronary artery spasm; first-line therapy is sublingual nitroglycerin PRN during exercise",
    "distractorExclusion": "Nitroglycerin reduces preload and is strictly contraindicated in HCM because it narrows LV cavity size, exacerbating LVOT obstruction and triggering syncope.",
    "citation": "Ommen SR, et al. 2020 AHA/ACC guideline for the diagnosis and treatment of patients with hypertrophic cardiomyopathy. Circulation. 2020;142(25):e558-e631. PMID: 33215931.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive sports cardiology and dynamic physical diagnosis item assessing the sarcomere genetics of HCM, Venturi effect / SAM mechanics, dynamic preload maneuvers, and beta-blocker pharmacology.",
      "distractorExclusionNotes": "Distractors feature contraindicated vasodilators (hydralazine, nitrates), contraindicated inotropes (digoxin), and misapplied TAVR.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0413",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Complete (Third-Degree) Atrioventricular Block",
    "subtopic": "AV Dissociation, Cannon A-Waves, Hemodynamic Instability, and Pacing Indications",
    "provisionalDifficulty": 5,
    "stem": "An 82-year-old man is brought to the emergency department after experiencing two episodes of sudden syncope while standing at his kitchen counter today. His daughter states that over the past week he has become increasingly confused, fatigued, and unsteady on his feet. On arrival, he is somnolent but responsive. Vital signs reveal blood pressure 82/46 mm Hg, heart rate 34/min and regular, and respiratory rate 16/min. Examination of his neck veins reveals intermittent, massive jugular venous pulsations towering into the upper neck ('cannon a-waves') that occur asynchronously with his arterial pulse. Auscultation of the heart reveals a slow, regular rhythm with marked beat-to-beat variability in the loudness of the first heart sound (S1). A 12-lead ECG demonstrates regular, uniform P waves at a rate of 88/min and completely independent regular, wide QRS complexes (QRS duration 145 ms) at a rate of 34/min; there is no relationship or mathematical coupling between P waves and QRS complexes. Which of the following is the most appropriate immediate intervention to stabilize this patient?",
    "choices": [
      [
        "Immediate placement of external transcutaneous pacing pads with initiation of electrical capture, followed by urgent placement of a temporary transvenous pacing wire and subsequent permanent dual-chamber pacemaker implantation",
        "This patient is presenting with hemodynamically unstable THIRD-DEGREE (COMPLETE) ATRIOVENTRICULAR (AV) BLOCK: (1) ECG AND PHYSICAL HALLMARKS: Complete failure of conduction between the atria and ventricles: (a) INDEPENDENT ATRIAL AND VENTRICULAR RHYTHMS: P waves occur at an intrinsic sinus rate (88/min), while QRS complexes occur at a slow, regular ventricular or infranodal escape rate (34/min) with COMPLETE AV DISSOCIATION (no relationship between P waves and QRS complexes). Wide QRS complexes (> 120 ms) indicate a ventricular escape focus located distal to the His bundle, which is inherently unstable and prone to asystole or degenerating into ventricular fibrillation. (b) CANNON 'A' WAVES: Physical sign of AV dissociation occurring when the right atrium contracts while the tricuspid valve is closed during ventricular systole, forcing venous blood backward up the internal jugular vein. (c) VARIABLE S1: The intensity of S1 changes from beat to beat depending on the position of AV valve leaflets at the onset of ventricular systole. (2) EMERGENCY MANAGEMENT: Because the patient is symptomatic and hypotensive (BP 82/46, syncope), immediate intervention is mandatory: (a) IMMEDIATE TEMPORIZING MEASURE: Apply TRANSCUTANEOUS PACING PADS immediately and initiate electrical capture at a rate of 60-80/min with adequate current output (confirming electrical capture on ECG and mechanical capture by palpating femoral pulse). Intravenous atropine (1 mg bolus) can be attempted as a temporary bridge, but atropine is typically INEFFECTIVE in infranodal third-degree block (as vagal innervation terminates at the AV node). (b) DEFINITIVE INPATIENT MANAGEMENT: Placement of a TEMPORARY TRANSVENOUS PACEMAKER wire in the cardiac care unit, followed by PERMANENT PACEMAKER IMPLANTATION once reversible etiologies (e.g., ischemia, hyperkalemia, AV-blocking drugs) are excluded."
      ],
      [
        "Intravenous administration of high-dose adenosine (12 mg rapid push) to terminate an underlying concealed re-entrant accessory pathway",
        "Adenosine blocks the AV node; administering adenosine in complete heart block will produce prolonged, fatal ventricular asystole."
      ],
      [
        "Immediate administration of intravenous diltiazem bolus and infusion to prevent rapid ventricular conduction and rate-related cardiomyopathy",
        "Diltiazem is an AV-nodal calcium channel blocker; administering an AV blocker in complete third-degree heart block will abolish the escape focus and cause asystole."
      ],
      [
        "Intravenous infusion of amiodarone (150 mg over 10 minutes) to suppress the ventricular escape focus and restore sinus rhythm",
        "Amiodarone suppresses infranodal conduction and escape pacemakers; suppressing the escape rhythm in third-degree block causes immediate cardiac arrest."
      ],
      [
        "Carotid sinus massage performed for 15 seconds over the right carotid bifurcation to evaluate baroreceptor hypersensitivity",
        "Carotid sinus massage increases vagal tone and slows conduction; it is dangerous and ineffective in complete infranodal heart block."
      ]
    ],
    "shortestValidSolution": "Syncope + HR 34 + cannon a-waves + AV dissociation (P and QRS independent) = Third-degree AV block with hypotension -> Immediate transcutaneous pacing -> temporary transvenous pacing -> permanent pacemaker.",
    "necessaryInference": "Diagnose complete AV block from ECG dissociation and cannon a-waves, recognize hemodynamic instability, and prioritize immediate transcutaneous pacing over contraindicated nodal agents.",
    "strongestDistractor": "Intravenous administration of high-dose adenosine (12 mg rapid push) to terminate an underlying concealed re-entrant accessory pathway",
    "distractorExclusion": "Adenosine completely halts AV nodal conduction; in third-degree block, it risks prolonged asystole and death. Pacing is mandatory.",
    "citation": "Kusumoto FM, et al. 2018 ACC/AHA/HRS guideline on the evaluation and management of patients with bradycardia and cardiac conduction delay. Circulation. 2019;140(8):e382-e482. PMID: 30586723.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive emergency electrophysiology item evaluating complete heart block criteria (AV dissociation, cannon a-waves, variable S1) and the strict clinical priority of pacing over lethal nodal blockers.",
      "distractorExclusionNotes": "Distractors feature lethal pharmacological errors: adenosine (asystole), diltiazem (AV block worsening), amiodarone (suppresses escape), and carotid massage.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0414",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Syncope Risk Stratification and Evaluation",
    "subtopic": "Cardiac vs Vasovagal Syncope, Red-Flag ECG Features, and Inpatient Telemetry Indications",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man presents to the emergency department after experiencing a sudden syncopal episode while walking from his car into a grocery store 2 hours ago. He reports no preceding lightheadedness, nausea, warmth, diaphoresis, visual tunnel vision, or palpitations; he simply collapsed forward onto the pavement and awakened within 15 seconds with immediate mental clarity. He suffered a mild facial abrasion. His past medical history is notable for hypertension, hyperlipidemia, and a remote non-ST-elevation myocardial infarction 4 years ago for which he takes aspirin, atorvastatin, and amlodipine. On arrival, he is completely asymptomatic with blood pressure 132/78 mm Hg, heart rate 72/min, and oxygen saturation 98% on room air. Neurological and cardiovascular examinations are normal. A 12-lead ECG demonstrates normal sinus rhythm with a prolonged PR interval of 220 ms (first-degree AV block) and complete left bundle branch block (QRS duration 148 ms with broad, notched R waves in I and V6). Baseline serum troponin is negative. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Inpatient hospital admission for continuous cardiac telemetry monitoring, transthoracic echocardiography, and cardiology consultation for electrophysiology study or pacemaker evaluation, because sudden syncope without a prodrome in a patient with structural heart disease and bifascicular conduction disease indicates high risk for intermittent paroxysmal complete heart block or ventricular arrhythmia",
        "Syncope risk stratification is a fundamental clinical competency: (1) CARDIAC VS NEUROCARDIOGENIC (VASOVAGAL) SYNCOPE: (a) VASOVAGAL SYNCOPE (low-risk): Classically features a distinct autonomic prodrome (warmth, diaphoresis, pallor, nausea, tunnel vision), occurs after prolonged standing or emotional distress/pain, and lacks structural heart disease; patients can be safely discharged with reassurance. (b) CARDIAC SYNCOPE (high-risk): Classically occurs SUDDENLY WITHOUT A PRODROME ('sudden drop attack'), occurs during exertion or while supine, causes physical injury, and occurs in patients with pre-existing structural heart disease or abnormal ECGs. Cardiac syncope carries a 1-year mortality of ~20-30% if unaddressed. (2) RED-FLAG ECG CRITERIA: This patient has pre-existing ischemic cardiomyopathy (prior MI) and BIFASCICULAR CONDUCTION DISEASE (first-degree AV block plus complete left bundle branch block). Sudden unheralded syncope in this setting strongly indicates PAROXYSMAL HIGH-GRADE OR COMPLETE AV BLOCK (intermittent trifascicular block) or ventricular tachycardia originating from myocardial scar. (3) MANAGEMENT STRATEGY: According to ACC/AHA/HRS syncope guidelines, patients with structural heart disease, unheralded syncope, or high-risk ECG conduction abnormalities REQUIRE INPATIENT ADMISSION for continuous telemetry monitoring, echocardiography (to assess LVEF and wall motion), and prompt electrophysiology (EP) consultation for permanent pacemaker or implantable cardioverter-defibrillator (ICD) evaluation."
      ],
      [
        "Discharge home immediately with reassurance, salt tablets, and instructions on physical counter-pressure maneuvers (leg crossing and hand gripping)",
        "Counter-pressure maneuvers and discharge are for low-risk vasovagal syncope with prodrome; this patient has high-risk cardiac syncope with conduction disease requiring admission."
      ],
      [
        "Perform outpatient tilt-table testing in 4 to 6 weeks to confirm neurocardiogenic reflex syncope",
        "Tilt-table testing is reserved for recurrent suspected vasovagal syncope in low-risk patients, not high-risk cardiac syncope with prior MI and LBBB."
      ],
      [
        "Order an emergent non-contrast head CT and 24-hour routine electroencephalogram (EEG) to rule out generalized epilepsy",
        "Syncope with immediate recovery of consciousness and absence of post-ictal confusion is not a seizure; routine neuroimaging and EEG are low-yield and non-indicated."
      ],
      [
        "Discontinue amlodipine and schedule outpatient 24-hour ambulatory Holter monitoring in 2 weeks",
        "Discharging a patient with high-risk cardiac syncope and bifascicular block risks sudden cardiac death from complete heart block while awaiting outpatient Holter."
      ]
    ],
    "shortestValidSolution": "Sudden syncope without prodrome + prior MI + bifascicular block (1st degree AV block + LBBB) = High-risk cardiac syncope -> Inpatient admission for telemetry, echo, and pacemaker/EP evaluation.",
    "necessaryInference": "Recognize the high-risk features of cardiac syncope (absence of prodrome, prior MI, bifascicular block) and prioritize inpatient admission and telemetry over outpatient discharge.",
    "strongestDistractor": "Perform outpatient tilt-table testing in 4 to 6 weeks to confirm neurocardiogenic reflex syncope",
    "distractorExclusion": "Tilt-table testing is for suspected vasovagal syncope in patients without heart disease; this patient has cardiac syncope with conduction disease requiring immediate admission.",
    "citation": "Shen WK, et al. 2017 ACC/AHA/HRS guideline for the evaluation and management of patients with syncope. Circulation. 2017;136(5):e60-e122. PMID: 28280231.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive clinical decision-making item evaluating syncope risk stratification: distinguishing benign vasovagal from lethal cardiac syncope using history (prodrome) and ECG red flags (LBBB + PR delay).",
      "distractorExclusionNotes": "Distractors feature dangerous outpatient discharge (salt tablets, tilt-table, Holter delay) and inappropriate neurological workup (routine head CT/EEG for syncope).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0415",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Peripheral Artery Disease: Chronic Limb-Threatening Ischemia",
    "subtopic": "Rest Pain, Ankle-Brachial Index (ABI), Toe-Brachial Index, and Urgent Revascularization",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man with a 40 pack-year smoking history, Type 2 diabetes mellitus, and chronic kidney disease presents with severe, aching, burning pain in his left forefoot and toes that has persisted for 6 weeks. The pain is severe at night and awakens him from sleep, forcing him to dangle his left foot over the edge of the bed or sleep upright in an armchair, which provides partial pain relief. Physical examination reveals a pale, thin, hairless left lower leg. When his left leg is elevated to 60 degrees while supine, the foot develops profound pallor within 30 seconds; when returned to a dependent position, the foot develops a deep, dusky, violaceous rubor that takes 45 seconds to appear ('dependent rubor'). Inspection of the left foot reveals a 1.5-cm shallow, punched-out ulcer over the head of the first metatarsal with a pale, non-granulating necrotic base and sharp borders; there is no cellulitis or purulence. Femoral pulses are palpable, but left popliteal, dorsalis pedis, and posterior tibial pulses are completely absent. Bilateral lower extremity non-invasive arterial physiological testing is performed:\n- Right ankle-brachial index (ABI): 0.78 (mild-to-moderate disease)\n- Left ankle-brachial index (ABI): 1.48 (incongruously high, indicating non-compressible, calcified medial arterial walls; normal 0.90-1.30)\n- Left toe-brachial index (TBI): 0.22 (markedly depressed; diagnostic threshold for critical ischemia < 0.30)\n- Left toe systolic pressure: 22 mm Hg (threshold for critical ischemia < 30 mm Hg)\n\nWhich of the following is the most appropriate next step in management to prevent limb loss in this patient?",
    "choices": [
      [
        "Urgent catheter-based digital subtraction angiography or CT angiography of the lower extremity to plan immediate revascularization (endovascular angioplasty/stenting or surgical bypass), because the patient has chronic limb-threatening ischemia (CLTI) with ischemic rest pain and tissue loss",
        "Peripheral Artery Disease (PAD) spectrum extends from asymptomatic disease and intermittent claudication to CHRONIC LIMB-THREATENING ISCHEMIA (CLTI, formerly critical limb ischemia): (1) CLINICAL DEFINITION OF CLTI: Defined by objective peripheral arterial disease producing: (a) ISCHEMIC REST PAIN lasting > 2 weeks (severe burning pain in distal forefoot/toes, worsened by supine position due to loss of gravitational hydrostatic pressure, RELIEVED BY DANGLING THE LEG DEPENDENTLY), or (b) ISCHEMIC TISSUE LOSS (non-healing arterial ulcers with punched-out borders or dry/wet gangrene). (2) PHYSICAL HALLMARKS: Dependent rubor (intense capillary vasodilation in response to chronic severe hypoxia) and pallor on elevation (Buerger test). (3) ARTERIAL TESTING IN DIABETICS: (a) MEDIAL ARTERIAL CALCINOSIS: Patients with diabetes and chronic kidney disease develop M\u00f6nckeberg medial calcific sclerosis of tibial and peroneal arteries. These calcified, rigid vessels CANNOT BE COMPRESSED by standard ankle sphygmomanometer cuffs, producing FALSELY ELEVATED OR UNMEASURABLE ANKLE-BRACHIAL INDEX (ABI > 1.40). (b) TOE-BRACHIAL INDEX (TBI): Digital vessels in toes rarely undergo medial calcinosis. Therefore, when ABI is > 1.40, a TOE-BRACHIAL INDEX (TBI) MUST BE PERFORMED. A TBI < 0.70 confirms PAD, and a TBI < 0.30 (or toe systolic pressure < 30 mm Hg) CONFIRMS CRITICAL LIMB-THREATENING ISCHEMIA. (4) URGENT REVASCULARIZATION: CLTI carries an estimated 1-year major amputation rate of 25-40% and a 20% mortality without intervention. Non-healing ulcers cannot heal without restoring pulsatile macrovascular perfusion. Therefore, URGENT ANGIOGRAPHY (invasive catheter angiography or CTA/MRA) is indicated immediately to map vascular lesions and perform REVASCULARIZATION (percutaneous balloon angioplasty/stenting or surgical bypass graft, e.g., femoral-popliteal or femoral-tibial bypass)."
      ],
      [
        "Initiation of a 12-week supervised treadmill exercise therapy program as exclusive first-line therapy before considering imaging",
        "Supervised exercise therapy is first-line for INTERMITTENT CLAUDICATION (pain with walking relieved by rest), but is completely CONTRAINDICATED in critical limb-threatening ischemia with rest pain and active tissue ulceration."
      ],
      [
        "Prescription of oral cilostazol (100 mg twice daily) monotherapy with outpatient follow-up in 3 months",
        "Cilostazol improves walking distance in claudication, but does not heal ischemic ulcers or reverse CLTI, and waiting 3 months risks progressive gangrene and amputation."
      ],
      [
        "Application of multi-layer high-compression dressings (40 mm Hg) to reduce local edema and accelerate ulcer healing",
        "High-compression bandages are indicated for VENOUS STASIS ULCERS; applying compression to an ischemic arterial ulcer (TBI 0.22) will completely obliterate remaining arterial flow and cause acute gangrene."
      ],
      [
        "Immediate emergent below-knee amputation (BKA) without vascular imaging, because non-healing diabetic ulcers have zero limb salvage potential",
        "Primary amputation without vascular evaluation is obsolete and improper; modern revascularization achieves > 80-90% limb salvage in CLTI."
      ]
    ],
    "shortestValidSolution": "Foot rest pain relieved by dangling + punched-out ulcer + ABI > 1.4 (calcified vessels) with TBI 0.22 = Chronic limb-threatening ischemia (CLTI) -> Urgent angiography and revascularization (bypass or angioplasty).",
    "necessaryInference": "Diagnose chronic limb-threatening ischemia (rest pain + tissue ulceration), interpret high ABI (> 1.4) as medial calcinosis requiring TBI (< 0.30), and prioritize urgent revascularization over contraindicated exercise or compression.",
    "strongestDistractor": "Initiation of a 12-week supervised treadmill exercise therapy program as exclusive first-line therapy before considering imaging",
    "distractorExclusion": "Supervised exercise therapy is for stable intermittent claudication; in CLTI with rest pain and tissue ulceration, exercise is contraindicated and urgent revascularization is mandatory.",
    "citation": "Conte MS, et al. Global vascular guidelines on the management of chronic limb-threatening ischemia. J Vasc Surg. 2019;69(6S):3S-125S. PMID: 31159978.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive vascular surgery item testing the clinical criteria for CLTI (rest pain, dependent rubor), physiological interpretation of non-compressible vessels (ABI > 1.4) requiring TBI, and the mandate for prompt revascularization.",
      "distractorExclusionNotes": "Distractors feature claudication-only therapy (treadmill exercise, cilostazol), contraindicated venous compression (causes acute gangrene in arterial disease), and premature amputation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0416",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Acute Aortic Regurgitation in Infective Endocarditis",
    "subtopic": "Absence of Wide Pulse Pressure, Early Mitral Valve Closure, and Intra-Aortic Balloon Pump Contraindication",
    "provisionalDifficulty": 5,
    "stem": "A 34-year-old woman with a history of bicuspid aortic valve presents to the emergency department with acute shortness of breath, orthopnea, and hemoptysis that began abruptly 6 hours ago. Three weeks ago, she had persistent low-grade fevers and chills following a dental extraction. On physical examination, she appears critically ill, tachypneic (respiratory rate 34/min), and diaphoretic. Vital signs reveal blood pressure 104/78 mm Hg (pulse pressure 26 mm Hg; narrow pulse pressure), heart rate 124/min, and oxygen saturation 84% on ambient air. Cardiovascular examination reveals soft S1, soft S2, an S3 gallop, and a short, soft, high-pitched early diastolic decrescendo murmur heard best along the left mid-sternal border; peripheral pulses are rapid, small, and thready without bounding features (no Corrigan pulse, no pistol-shot sounds). Bilateral diffuse wet crackles are audible throughout all lung fields. Transthoracic and transesophageal echocardiography reveal a destroyed right coronary cusp with severe acute aortic regurgitation, a 12-mm mobile vegetation, and premature diastolic closure of the mitral valve occurring prior to the onset of the QRS complex. The medical team considers supportive measures while preparing for emergent surgery. Which of the following describes why this patient lacks the wide pulse pressure and bounding peripheral pulses classic for chronic aortic regurgitation, and which hemodynamic support device is absolutely contraindicated?",
    "choices": [
      [
        "In acute severe aortic regurgitation, the acute massive volume overload regurgitates into a normal-sized, non-compliant left ventricle that cannot acutely dilate, causing a rapid, catastrophic rise in left ventricular end-diastolic pressure that equilibrates with aortic diastolic pressure early in diastole (blunting the murmur, prematurely closing the mitral valve, and preventing a wide pulse pressure); an intra-aortic balloon pump (IABP) is absolutely contraindicated because balloon inflation during diastole increases regurgitant volume and accelerates acute pulmonary edema",
        "Acute Aortic Regurgitation (AR, most commonly caused by infective endocarditis with cusp perforation or Type A aortic dissection) presents with fundamentally different physical and hemodynamic findings than Chronic Aortic Regurgitation: (1) PATHOPHYSIOLOGY OF ACUTE VS CHRONIC AR: (a) CHRONIC AR: Develops over years. The left ventricle undergoes massive eccentric hypertrophy and compensatory dilation (end-diastolic volume can exceed 300 mL). The highly compliant ventricle accommodates enormous regurgitant volume at near-normal diastolic pressures, generating an immense stroke volume that produces a very high systolic pressure and low diastolic pressure (WIDE PULSE PRESSURE, e.g., 170/50 mm Hg) and peripheral hyperdynamic signs (water-hammer Corrigan pulse, Quincke nailbed capillary pulsations, Duroziez sign). (b) ACUTE AR: Regurgitation occurs suddenly across a destroyed valve cusp into a NORMAL-SIZED, NON-COMPLIANT LEFT VENTRICLE. The non-compliant ventricle CANNOT ACUTELY DILATE. The massive regurgitant volume causes a RAPID, METEORIC SPIKE IN LEFT VENTRICULAR END-DIASTOLIC PRESSURE (LVEDP) to 30-50 mm Hg. (2) HEMODYNAMIC CONSEQUENCES OF HIGH LVEDP: (a) LVEDP rapidly EQUILIBRATES WITH AORTIC DIASTOLIC PRESSURE early in diastole. Because the pressure gradient between the aorta and LV ceases early, the diastolic murmur is SHORT, SOFT, AND EARLY (often overlooked!). (b) Aortic diastolic pressure remains relatively high (e.g., BP 104/78), so PULSE PRESSURE IS NORMAL OR NARROW, and bounding peripheral signs are COMPLETELY ABSENT. (c) High LVEDP exceeds left atrial pressure in mid-to-late diastole, causing PREMATURE DIASTOLIC CLOSURE OF THE MITRAL VALVE (before ventricular systole begins / before the QRS complex on ECG). (3) CONTRAINDICATION: INTRA-AORTIC BALLOON PUMP (IABP): An IABP inflates during DIASTOLE to augment coronary perfusion. In severe AR, balloon inflation in diastole displaces massive blood volume directly backward across the incompetent aortic valve into the failing left ventricle, causing catastrophic left ventricular rupture and immediate death. Emergent surgical valve replacement is required."
      ],
      [
        "In acute AR, sympathetic vasoconstriction selectively traps blood in the aortic arch; a left ventricular assist device (LVAD) is absolutely contraindicated because it empties the right ventricle prematurely",
        "Sympathetic vasoconstriction occurs, but the narrow pulse pressure is caused by rapid equilibration of LVEDP with aortic pressure; IABP (not LVAD) is the classically contraindicated balloon device."
      ],
      [
        "In acute AR, profound tricuspid regurgitation masks aortic signs; a transvenous temporary pacemaker is absolutely contraindicated because pacing induces acute aortic rupture",
        "Tricuspid regurgitation does not mask aortic pressure dynamics; transvenous pacing is safe and does not rupture the aorta."
      ],
      [
        "In acute AR, the left atrium hypertrophies instantaneously to absorb regurgitant flow; high-flow nasal cannula oxygen is absolutely contraindicated due to nitrogen retention",
        "The left atrium cannot acutely hypertrophy; high-flow nasal cannula is supportive, not contraindicated."
      ],
      [
        "In acute AR, pulmonary arterial hypertension reverses systemic aortic flow; an impella axial flow pump is absolutely contraindicated because it stops left ventricular ejection",
        "Acute AR causes pulmonary venous congestion, but the mechanical biophysics of narrow pulse pressure and IABP contraindication are mediated by elevated LVEDP."
      ]
    ],
    "shortestValidSolution": "Infective endocarditis + acute AR + narrow pulse pressure + premature mitral closure = Acute aortic regurgitation (non-compliant LV causes steep rise in LVEDP equilibrating with aortic pressure); IABP is absolutely contraindicated.",
    "necessaryInference": "Contrast the hemodynamics of acute AR (normal/narrow pulse pressure, premature mitral closure due to steep LVEDP) with chronic AR, and identify the intra-aortic balloon pump as strictly contraindicated.",
    "strongestDistractor": "In acute AR, sympathetic vasoconstriction selectively traps blood in the aortic arch; a left ventricular assist device (LVAD) is absolutely contraindicated because it empties the right ventricle prematurely",
    "distractorExclusion": "The definitive contraindication is the Intra-Aortic Balloon Pump (IABP), which inflates during diastole, driving massive regurgitation across the incompetent aortic valve.",
    "citation": "Stout KK, Verrier ED. Acute valvular regurgitation. Circulation. 2009;119(25):3232-3241. PMID: 19564268.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield cardiopulmonary mechanics item evaluating why acute severe AR lacks wide pulse pressure (steep non-compliant LVEDP rise, early mitral valve closure) and the biophysical rationale for IABP contraindication.",
      "distractorExclusionNotes": "Distractors feature incorrect device contraindications (LVAD, pacemaker, HFNC, Impella) and incorrect chamber dynamics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0417",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Right Ventricular Myocardial Infarction Management",
    "subtopic": "Inferior STEMI, Lead V4R ST Elevation, Nitrate-Induced Severe Hypotension, and Preload Dependence",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man presents to the emergency department with 2 hours of crushing substernal chest pressure radiating to his jaw. A 12-lead ECG demonstrates acute 3-mm ST-segment elevation in leads II, III, and aVF with reciprocal ST-segment depression in leads I and aVL, consistent with an acute inferior ST-elevation myocardial infarction (STEMI). On arrival, his blood pressure is 138/86 mm Hg and heart rate is 78/min. The triage nurse administers a single dose of sublingual nitroglycerin (0.4 mg) and chewable aspirin. Within 4 minutes, the patient becomes pale, diaphoretic, and confused. Repeat vital signs reveal a precipitous drop in blood pressure to 72/42 mm Hg with a heart rate of 98/min. Physical examination reveals an internal jugular venous pressure elevated to 12 cm H2O with a paradoxical rise in JVP during inspiration (positive Kussmaul sign). Auscultation of the lungs reveals completely clear breath sounds bilaterally without wheezing or crackles. A right-sided 12-lead ECG (leads V1R through V6R) is promptly obtained, which demonstrates 2-mm ST-segment elevation in lead V4R. Which of the following is the most appropriate immediate medical intervention to restore blood pressure and organ perfusion in this patient?",
    "choices": [
      [
        "Rapid intravenous infusion of isotonic crystalloid fluid boluses (0.9% normal saline, 500-1000 mL) to restore right ventricular preload and end-diastolic filling pressure, while strictly avoiding further nitrates, diuretics, or other vasodilators",
        "Right Ventricular Myocardial Infarction (RVMI) occurs in approximately 30-50% of acute INFERIOR STEMIs, caused by proximal occlusion of the RIGHT CORONARY ARTERY (RCA) upstream of the right ventricular acute marginal branches: (1) PATHOPHYSIOLOGY OF PRELOAD DEPENDENCE: The infarcted right ventricle becomes stiff, dilated, and hypokinetic. The ischemic RV CANNOT GENERATE SUFFICIENT SYSTOLIC CONTRACTION to pump blood through the pulmonary capillary bed to the left heart. To maintain forward cardiac output, the failing RV relies entirely on ELEVATED RIGHT VENTRICULAR PRELOAD (high right atrial filling pressures) to passively stretch the ventricle and force blood across the pulmonary circulation into the left atrium via Starling mechanics. (2) NITRATE-INDUCED COLLAPSE: Nitroglycerin is a potent venous dilator that causes massive systemic venodilation and venous pooling, abruptly dropping systemic venous return (preload). In an RVMI patient whose cardiac output is 100% PRELOAD-DEPENDENT, administering sublingual or IV nitroglycerin (or loop diuretics) wipes out RV preload, producing sudden, CATASTROPHIC PROFOUND HYPOTENSION AND CARDIOGENIC SHOCK. (3) CLINICAL TRIAD: (a) Hypotension, (b) Elevated JVP (often with positive Kussmaul sign), and (c) CLEAR LUNG FIELDS (in sharp contrast to LV failure/shock, where pulmonary crackles and alveolar edema predominate). (4) DIAGNOSIS AND TREATMENT: (a) A RIGHT-SIDED ECG showing ST ELEVATION IN LEAD V4R (> 1 mm) is the most sensitive and specific diagnostic finding. (b) IMMEDIATE MANAGEMENT: AGGRESSIVE INTRAVENOUS NORMAL SALINE BOLUSES (e.g., 500-1,000 mL wide open). Expanding intravascular volume restores RV filling pressures, restoring forward left ventricular filling and blood pressure. Vasodilators (nitrates, morphine, ACE inhibitors) and diuretics are STRICTLY CONTRAINDICATED."
      ],
      [
        "Immediate intravenous administration of furosemide (40 mg) to treat central venous hypertension and relieve right ventricular dilation",
        "Diuretics are CATASTROPHICALLY CONTRAINDICATED in RVMI; volume depletion wipes out the critical right ventricular preload, worsening shock and triggering cardiac arrest."
      ],
      [
        "Immediate initiation of an intravenous nitroglycerin infusion titrated to keep systolic blood pressure below 120 mm Hg",
        "Further nitrates will deepen the hypotension and induce fatal circulatory arrest; nitrates are strictly contraindicated in RVMI."
      ],
      [
        "Intravenous metoprolol tartrate bolus (5 mg) to slow the heart rate and reduce myocardial oxygen consumption",
        "Beta-blockers drop inotropy and blood pressure and are contraindicated in hemodynamic instability or cardiogenic shock."
      ],
      [
        "Intravenous infusion of recombinant tissue plasminogen activator (tPA) while preparing for surgical pericardial window",
        "The patient has RVMI, not cardiac tamponade or pulmonary embolism; primary PCI is the reperfusion therapy of choice, not empiric tPA."
      ]
    ],
    "shortestValidSolution": "Inferior STEMI + severe hypotension after nitroglycerin + elevated JVP + clear lungs + ST elevation in V4R = Right Ventricular Infarction -> Immediate IV isotonic crystalloid (saline) boluses (avoid nitrates and diuretics).",
    "necessaryInference": "Diagnose RVMI from inferior STEMI, clear lungs, high JVP, V4R ST elevation, and severe nitrate hypotension, and prioritize rapid IV saline loading over contraindicated nitrates/diuretics.",
    "strongestDistractor": "Immediate intravenous administration of furosemide (40 mg) to treat central venous hypertension and relieve right ventricular dilation",
    "distractorExclusion": "Furosemide drops preload; in preload-dependent RVMI, diuretics cause catastrophic circulatory collapse. IV saline fluid loading is the required therapy.",
    "citation": "O'Gara PT, et al. 2013 ACCF/AHA guideline for the management of ST-elevation myocardial infarction. Circulation. 2013;127(4):e362-e425. PMID: 23247304.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive emergency STEMI item testing the clinical triad of RVMI (hypotension, JVP, clear lungs), nitrate-induced hemodynamic collapse, V4R lead sensitivity, and IV fluid loading.",
      "distractorExclusionNotes": "Distractors feature lethal management errors in RVMI: diuretics (furosemide), further nitrates, beta-blockers in shock, and misdirected tPA.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0418",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Atrial Fibrillation with Rapid Ventricular Response",
    "subtopic": "Hemodynamic Instability vs Stability, Synchronized Electrical Cardioversion, and Rate vs Rhythm Control",
    "provisionalDifficulty": 4,
    "stem": "A 67-year-old man with a history of hypertension, coronary artery disease, and prior ischemic stroke presents to the emergency department with sudden-onset palpitations, severe shortness of breath, and crushing chest tightness that began 45 minutes ago. On physical examination, he appears pale, diaphoretic, and in acute respiratory distress. Vital signs reveal blood pressure of 78/48 mm Hg (hypotension), heart rate of 158/min and irregularly irregular, respiratory rate of 28/min, and oxygen saturation of 86% on ambient air. Cardiovascular examination confirms an irregularly irregular rhythm with variable S1 intensity, and pulmonary auscultation reveals diffuse bilateral coarse crackles throughout the lower two-thirds of both lung fields. A 12-lead ECG demonstrates atrial fibrillation with a rapid ventricular response (variable RR intervals, absent P waves, fibrillatory baseline) and a ventricular rate fluctuating between 150/min and 170/min, with 2-mm horizontal ST-segment depression in leads V4 through V6. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Immediate synchronized electrical cardioversion (initial biphasic energy of 120-200 J) under procedural sedation, because the patient is hemodynamically unstable with hypotension, ischemic chest pain, and acute pulmonary edema",
        "The management of acute Atrial Fibrillation (AF) with Rapid Ventricular Response (RVR) is dictated immediately by the presence or absence of HEMODYNAMIC INSTABILITY: (1) HEMODYNAMICALLY UNSTABLE ATRIAL FIBRILLATION: (a) DEFINITION: Tachycardia-induced hypoperfusion manifested by: (i) Hypotension / shock (SBP < 90 mm Hg or MAP < 65 mm Hg), (ii) Acute pulmonary edema / congestive heart failure, (iii) Ongoing acute myocardial ischemia (crushing chest pain with ischemic ST depression), or (iv) Altered mental status. (b) MANDATORY IMMEDIATE ACTION: SYNCHRONIZED ELECTRICAL CARDIOVERSION (initial energy 120-200 J biphasic). When a patient is unstable with shock and pulmonary edema, waiting for pharmacological rate control or anticoagulation/transesophageal echocardiography is DANGEROUS AND INAPPROPRIATE. Restoring sinus rhythm immediately restores atrial kick, slows the heart rate, and rescues cardiac output. Sedation (e.g., etomidate or propofol) should be administered if clinical conditions permit, but cardioversion must not be delayed. (2) CONTRAST WITH HEMODYNAMICALLY STABLE ATRIAL FIBRILLATION: In a STABLE patient (normal blood pressure, no pulmonary edema, no ongoing ischemia): (a) RATE CONTROL: First-line therapy is intravenous beta-blockers (metoprolol, esmolol) or non-dihydropyridine calcium channel blockers (diltiazem, verapamil) to achieve a resting heart rate < 110/min. (b) ANTICOAGULATION: Stratified by CHA2DS2-VASc score; if AF duration > 48 hours (or unknown), therapeutic anticoagulation for >= 3 weeks (or TEE to exclude left atrial appendage thrombus) is mandatory before elective cardioversion to prevent embolic stroke."
      ],
      [
        "Intravenous administration of diltiazem (0.25 mg/kg bolus over 2 minutes) followed by a continuous infusion to achieve rate control",
        "Diltiazem is a negative inotrope and vasodilator; administering diltiazem to an unstable patient with SBP 78 mm Hg and pulmonary edema will precipitate cardiac arrest."
      ],
      [
        "Initiation of intravenous unfractionated heparin infusion followed by a 4-week delay before considering cardioversion to prevent stroke",
        "Delaying cardioversion for 4 weeks in a patient in cardiogenic shock with pulmonary edema carries a near-100% acute mortality; immediate cardioversion takes precedence."
      ],
      [
        "Immediate transesophageal echocardiography (TEE) in the emergency department to evaluate for left atrial appendage thrombus prior to any intervention",
        "TEE is indicated before elective cardioversion in stable patients; in unstable patients with shock and pulmonary edema, cardioversion must NOT be delayed for TEE."
      ],
      [
        "Oral administration of amiodarone (400 mg three times daily) with observation in the observation unit for 24 hours",
        "Oral amiodarone takes days to weeks to achieve therapeutic tissue levels and has no role in the immediate stabilization of an unstable patient with pulmonary edema."
      ]
    ],
    "shortestValidSolution": "Atrial fibrillation with RVR + hemodynamic instability (hypotension, pulmonary edema, chest pain) = Immediate synchronized electrical cardioversion (120-200 J biphasic).",
    "necessaryInference": "Identify hemodynamic instability in atrial fibrillation (hypotension, acute pulmonary edema, angina) and select immediate synchronized electrical cardioversion over pharmacological rate control or TEE delay.",
    "strongestDistractor": "Intravenous administration of diltiazem (0.25 mg/kg bolus over 2 minutes) followed by a continuous infusion to achieve rate control",
    "distractorExclusion": "Diltiazem is first-line for stable AF with RVR; in hemodynamically unstable AF (SBP 78 mm Hg, pulmonary edema), diltiazem causes fatal cardiac arrest. Immediate cardioversion is required.",
    "citation": "January CT, et al. 2019 AHA/ACC/HRS focused update of the 2014 AHA/ACC/HRS guideline for the management of patients with atrial fibrillation. Circulation. 2019;140(2):e125-e151. PMID: 30686041.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive emergency cardiovascular item assessing the clinical algorithm for atrial fibrillation: distinguishing unstable (immediate electrical cardioversion) from stable (medical rate control) presentations.",
      "distractorExclusionNotes": "Distractors feature dangerous medical delays: diltiazem in shock, waiting for 4 weeks of heparin, delaying cardioversion for TEE in shock, and oral amiodarone.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0419",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Non-ST-Elevation Myocardial Infarction (NSTEMI) Risk Stratification",
    "subtopic": "GRACE Risk Score, Early Invasive Strategy (< 24 Hours) vs Delayed Strategy",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man presents to the emergency department with recurrent, crescendo retrosternal chest tightness over the past 14 hours. He reports three distinct episodes of chest pain occurring at rest, each lasting 20 to 30 minutes, with the most recent episode occurring 30 minutes ago. His past medical history is notable for Type 2 diabetes mellitus, hypertension, and a 35 pack-year smoking history. Physical examination reveals blood pressure 152/94 mm Hg, heart rate 88/min, clear lungs, and normal heart sounds without murmurs or gallops. A 12-lead ECG demonstrates normal sinus rhythm with 1.5-mm horizontal ST-segment depression in leads V3 through V5 and inverted T waves in leads I and aVL, without ST-segment elevation or pathologic Q waves. Initial high-sensitivity cardiac troponin I is markedly elevated at 1.48 ng/mL (normal < 0.04 ng/mL). The patient is initiated on dual antiplatelet therapy (aspirin 325 mg plus ticagrelor 180 mg), therapeutic subcutaneous low-molecular-weight heparin (enoxaparin 1 mg/kg every 12 hours), high-intensity statin (atorvastatin 80 mg), and oral metoprolol. His Global Registry of Acute Coronary Events (GRACE) risk score is calculated at 158 points (> 140 indicates high risk; predicted in-hospital mortality > 3%). Which of the following is the most appropriate timing for invasive coronary angiography in this patient?",
    "choices": [
      [
        "Early invasive strategy with diagnostic coronary angiography and intent for revascularization performed within 24 hours of hospital admission",
        "Acute Coronary Syndromes (ACS) without ST elevation (NSTEMI and High-Risk Unstable Angina) require risk stratification to determine the timing of coronary angiography: (1) INVASIVE TIMING CATEGORIES (AHA/ACC and ESC Guidelines): (a) IMMEDIATE INVASIVE STRATEGY (< 2 HOURS): Reserved for VERY HIGH-RISK features: Refractory or recurrent angina despite maximal medical therapy, hemodynamic instability or cardiogenic shock, life-threatening ventricular arrhythmias (VT/VF), acute heart failure, or mechanical complications. (b) EARLY INVASIVE STRATEGY (< 24 HOURS): Indicated for HIGH-RISK features: (i) Confirmed NSTEMI with dynamic cardiac biomarker elevation (elevated troponin), (ii) Dynamic ST-segment or T-wave changes on serial ECGs (ST depression >= 0.5-1.0 mm), (iii) GRACE risk score > 140, or (iv) Resuscitated cardiac arrest without ST elevation. Multiple randomized trials (e.g., TIMACS) demonstrated that early catheterization (< 24 hours) in patients with a GRACE score > 140 significantly reduces the composite endpoint of death, recurrent MI, or stroke compared to a delayed strategy. (c) DELAYED INVASIVE STRATEGY (24 TO 72 HOURS): Appropriate for intermediate-risk patients (GRACE score 109-140, diabetes, renal insufficiency, prior CABG/PCI) without recurrent symptoms. (d) ISCHEMIA-GUIDED (SELECTIVE INVASIVE) STRATEGY: Reserved strictly for low-risk patients (GRACE score < 109, normal serial troponins, normal serial ECGs, low TIMI score 0-1) who undergo non-invasive stress testing prior to discharge. (2) PATIENT SYNTHESIS: This patient has confirmed NSTEMI (troponin 1.48), dynamic ischemic ST depression, resting pain, and a GRACE score of 158 (> 140), meeting clear Class I guideline indications for an EARLY INVASIVE STRATEGY (< 24 HOURS)."
      ],
      [
        "Delayed selective invasive strategy, performing coronary angiography only if a non-invasive outpatient exercise treadmill stress test demonstrates inducible ischemia in 2 to 4 weeks",
        "An ischemia-guided delayed strategy with outpatient stress testing is reserved for low-risk patients; this patient has confirmed NSTEMI with troponin elevation and GRACE score 158, for which early invasive catheterization (< 24 h) is mandatory."
      ],
      [
        "Immediate emergent transfer to the cardiac catheterization laboratory within 30 minutes for rescue thrombolytic therapy with tenecteplase",
        "Thrombolytic therapy is CATASTROPHICALLY INEFFECTIVE AND HARMFUL in NSTEMI; trials demonstrated that fibrinolysis in NSTEMI increases mortality and intracranial hemorrhage without providing benefit."
      ],
      [
        "Elective outpatient coronary computed tomography angiography (CCTA) performed 6 weeks after hospital discharge following medical optimization",
        "CCTA is used for outpatient low-to-intermediate risk stable chest pain triage, not for an inpatient with active NSTEMI, troponin elevation, and high GRACE score."
      ],
      [
        "Conservative medical management without coronary angiography, because revascularization provides zero mortality benefit over medical therapy in non-ST-elevation ACS",
        "The TIMACS and OASIS-5 trials proved that early revascularization provides substantial mortality and recurrent-MI reduction in high-risk NSTEMI (GRACE > 140)."
      ]
    ],
    "shortestValidSolution": "NSTEMI with troponin elevation + dynamic ST depressions + GRACE score > 140 = High-risk NSTEMI -> Early invasive coronary angiography within 24 hours.",
    "necessaryInference": "Apply guideline risk stratification for NSTEMI (troponin+, ST depression, GRACE > 140) to select an early invasive strategy (< 24 hours) and recognize that fibrinolytics are contraindicated in NSTEMI.",
    "strongestDistractor": "Immediate emergent transfer to the cardiac catheterization laboratory within 30 minutes for rescue thrombolytic therapy with tenecteplase",
    "distractorExclusion": "Thrombolysis is strictly contraindicated in NSTEMI (increases bleeding and mortality without benefit); high-risk NSTEMI requires invasive catheterization within 24 hours.",
    "citation": "Amsterdam EA, et al. 2014 AHA/ACC guideline for the management of patients with non-ST-elevation acute coronary syndromes. Circulation. 2014;130(25):e344-e426. PMID: 25249585.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive acute cardiology item testing the quantitative application of the GRACE score (> 140), timing categories of coronary catheterization (< 24 h vs delayed vs selective), and fibrinolytic contraindications in NSTEMI.",
      "distractorExclusionNotes": "Distractors contrast conservative outpatient treadmill testing, harmful fibrinolytic therapy (tPA in NSTEMI), outpatient CCTA, and medical-only therapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0420",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Statin Myopathy Spectrum: Immune-Mediated Necrotizing Myopathy",
    "subtopic": "Anti-HMGCR Autoantibodies, Persistent Muscle Necrosis Despite Statin Cessation, and Immunosuppressive Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man presents with progressive, severe muscle weakness in his thighs and shoulders over the past 3 months. He finds it nearly impossible to rise from a low chair without using his arms, cannot climb stairs without pulling himself up the banister, and struggles to lift his arms to wash his hair. His medications include atorvastatin (80 mg daily) initiated 2 years ago following an ischemic stroke, and lisinopril. On physical examination, cranial nerves are intact and sensation is normal. Manual muscle testing reveals symmetric proximal muscle weakness (3/5 strength in hip flexors, hip abductors, and shoulder abductors; distal muscle strength is normal at 5/5). There are no skin rashes, heliotrope discoloration, Gottron papules, or joint swelling. Initial laboratory testing reveals a massively elevated serum creatine kinase (CK) of 14,200 U/L (normal 30-200 U/L) and elevated AST (280 U/L) and ALT (210 U/L) with normal bilirubin and alkaline phosphatase. His physician diagnoses statin-induced myopathy and discontinues atorvastatin. However, at a follow-up visit 6 weeks after completely stopping atorvastatin, the patient's muscle weakness has worsened, and his repeat serum CK remains massively elevated at 15,800 U/L. Which of the following tests is most specific to establish the definitive diagnosis, and what is the required therapeutic management?",
    "choices": [
      [
        "Serum anti-3-hydroxy-3-methylglutaryl-coenzyme A reductase (anti-HMGCR) autoantibody testing; the patient has statin-induced immune-mediated necrotizing myopathy (IMNM), an autoimmune disease that progresses despite statin discontinuation and requires aggressive systemic immunosuppressive therapy (e.g., high-dose oral corticosteroids combined with methotrexate or intravenous immunoglobulin)",
        "Statin-associated muscle symptoms (SAMS) encompass a clinical spectrum from benign self-limited myalgias to life-threatening autoimmune necrotizing disease: (1) BENIGN STATIN MYOPATHY: Occurs in ~5-10% of patients. Characterized by muscle aches with mild or moderate CK elevation that RESOLVES COMPLETELY WITHIN 2 TO 6 WEEKS following statin cessation. (2) STATIN-INDUCED IMMUNE-MEDIATED NECROTIZING MYOPATHY (IMNM): A distinct, severe AUTOIMMUNE DISORDER triggered by statin exposure (typically months to years after initiation): (a) CLINICAL HALLMARKS: Subacute, progressive, severe proximal muscle weakness (hip and shoulder girdles) with MASSIVELY ELEVATED CREATINE KINASE (typically > 5,000-20,000 U/L). Note: AST and ALT are abundantly expressed in skeletal muscle myocytes; high AST/ALT with normal bilirubin and Alk Phos reflects myocyte necrosis, not liver injury! (b) THE DEFINING CLINICAL FEATURE: Unlike benign toxic statin myopathy, IMNM PERSISTS AND PROGRESSIVELY WORSENS DESPITE COMPLETE DISCONTINUATION OF THE STATIN. (c) AUTOANTIBODIES AND PATHOLOGY: Mediated by circulating autoantibodies directed against 3-HYDROXY-3-METHYLGLUTARYL-COENZYME A REDUCTASE (ANTI-HMGCR). Statins up-regulate HMGCR expression in genetically susceptible individuals (carrying HLA-DRB1*11:01), triggering an autoimmune response. Muscle biopsy reveals prominent, widespread, paucicellular myofiber necrosis and regeneration with MINIMAL OR ABSENT LYMPHOCYTIC INFILTRATION (distinguishing it from polymyositis). (d) MANAGEMENT: Stopping the statin is necessary but INSUFFICIENT. Treatment requires AGGRESSIVE IMMUNOSUPPRESSION: high-dose corticosteroids (prednisone 1 mg/kg) combined with steroid-sparing agents (methotrexate, azathioprine) or intravenous immunoglobulin (IVIG) to halt ongoing myocyte destruction."
      ],
      [
        "Serum anti-Jo-1 (histidyl-tRNA synthetase) autoantibody testing; the patient has polymyositis that will completely resolve spontaneously within 6 months without immunosuppressive drugs",
        "Anti-Jo-1 characterizes antisynthetase syndrome / polymyositis (interstitial lung disease, mechanic's hands), not statin-associated anti-HMGCR myopathy; and it does not resolve spontaneously."
      ],
      [
        "Serum anti-mitochondrial antibody (AMA) testing; the patient has primary biliary cholangitis causing secondary toxic myopathy from circulating bile salts",
        "AMA is diagnostic of Primary Biliary Cholangitis (cholestatic liver disease), which causes pruritus and jaundice, not necrotizing proximal myopathy with CK 15,000 U/L."
      ],
      [
        "Immediate resumption of atorvastatin combined with high-dose oral coenzyme Q10 (ubiquinone) supplementation",
        "Resuming the statin will exacerbate autoimmune anti-HMGCR myocyte necrosis; CoQ10 has no efficacy in treating autoimmune necrotizing myopathy."
      ],
      [
        "Forearm ischemic exercise testing to demonstrate absent lactate generation diagnostic of glycogen storage disease type V (McArdle disease)",
        "McArdle disease (myophosphorylase deficiency) presents in adolescence with exercise-induced cramps and second-wind phenomenon, not adult-onset progressive autoimmune weakness following statin therapy."
      ]
    ],
    "shortestValidSolution": "Statin exposure + severe proximal weakness + CK > 10,000 that PERSISTS/WORSENS 6 weeks after stopping statin = Statin-induced immune-mediated necrotizing myopathy (IMNM) -> Test anti-HMGCR autoantibodies; treat with systemic immunosuppression.",
    "necessaryInference": "Differentiate self-limited statin myopathy from statin-induced autoimmune necrotizing myopathy (IMNM) based on persistent progression after drug cessation, identify anti-HMGCR antibodies, and select systemic immunosuppressive therapy.",
    "strongestDistractor": "Serum anti-Jo-1 (histidyl-tRNA synthetase) autoantibody testing; the patient has polymyositis that will completely resolve spontaneously within 6 months without immunosuppressive drugs",
    "distractorExclusion": "Anti-Jo-1 is for polymyositis/antisynthetase syndrome; statin-associated autoimmune myopathy is defined by anti-HMGCR antibodies and requires aggressive immunosuppression.",
    "citation": "Mammen AL. Statin-associated autoimmune myopathy. N Engl J Med. 2016;374(7):664-669. PMID: 26886523.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive rheumatology and cardiovascular pharmacology item testing the clinical recognition of IMNM (worsening after statin cessation, massive CK), anti-HMGCR serology, and mandatory immunosuppressive therapy.",
      "distractorExclusionNotes": "Distractors contrast anti-Jo-1 polymyositis, AMA liver disease, CoQ10 futility, and McArdle glycogen storage disease.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0421",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Heparin-Induced Thrombocytopenia (HIT Type 2)",
    "subtopic": "4T Score, PF4-Heparin Antibodies, Direct Thrombin Inhibitors, and Platelet Transfusion Hazards",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old woman is hospitalized for acute left deep vein thrombosis (DVT) and is treated with a continuous intravenous unfractionated heparin infusion. Her baseline platelet count prior to starting heparin was 280,000/mm3. On hospital day 6, her routine complete blood count demonstrates a platelet count of 110,000/mm3 (a 61% drop from baseline). Over the subsequent 12 hours, she develops acute, severe pain, coldness, and pallor in her right leg. Physical examination reveals an acutely mottled, cold right lower extremity with absent right dorsalis pedis and posterior tibial pulses, consistent with acute arterial limb ischemia. There are no petechiae, purpura, or bleeding. Review of her clinical course reveals: platelet fall > 50% (2 points), timing between days 5-10 (2 points), new acute arterial thrombosis (2 points), and no alternative cause for thrombocytopenia (2 points), yielding a 4T score of 8 points (high probability for HIT). Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediately discontinue all unfractionated heparin products (including catheter flushes), send blood for PF4-heparin immunoassay and functional serotonin release assay, and initiate immediate therapeutic anticoagulation with an intravenous non-heparin direct thrombin inhibitor (argatroban or bivalirudin), while strictly avoiding platelet transfusions",
        "Heparin-Induced Thrombocytopenia Type 2 (HIT) is a life-threatening, immune-mediated, prothrombotic adverse drug reaction: (1) PATHOPHYSIOLOGY: Heparin binds to platelet factor 4 (PF4), forming immunogenic PF4-heparin complexes. Host IgG antibodies (HIT antibodies) bind these complexes. The Fc portion of the antibody engages Fc-gamma-RIIa receptors on adjacent platelets, triggering MASSIVE, UNCONTROLLED PLATELET ACTIVATION, platelet aggregation, and consumption (THROMBOCYTOPENIA). Activated platelets release procoagulant microparticles that trigger thrombin generation, producing a catastrophic HYPERCOAGULABLE STATE with a 30-50% risk of arterial or venous THROMBOSIS ('white clots', DVT, PE, stroke, acute limb ischemia, skin necrosis). (2) CLINICAL 4T SCORE: High probability (score 6-8): (a) Thrombocytopenia: Platelet drop > 50% (nadir typically 20,000-100,000/mm3; bleeding is extremely rare). (b) Timing: Onset characteristically 5 to 10 days after heparin initiation (or < 24 hours if heparin exposure occurred within the past 30-100 days). (c) Thrombosis: New venous or arterial thrombosis, skin necrosis at injection sites. (d) oTher causes excluded. (3) MANAGEMENT STRATEGY: (a) STOP ALL HEPARIN IMMEDIATELY: Halt infusions, LMWH, and heparin flushes. (b) INITIATE NON-HEPARIN ANTICOAGULATION: Because HIT is a consumptive thrombotic state, stopping heparin alone is insufficient. Patients require immediate full-dose alternative anticoagulation with an INTRAVENOUS DIRECT THROMBIN INHIBITOR: ARGATROBAN (hepatically metabolized; ideal in renal failure) or BIVALIRUDIN, or parenteral fondaparinux. (c) AVOID PLATELET TRANSFUSIONS: Platelet transfusions provide additional fuel for the fire, binding free antibodies and triggering catastrophic acute arterial thrombosis; transfusions are strictly contraindicated unless life-threatening bleeding occurs. (d) WARFARIN HAZARD: DO NOT START WARFARIN in acute HIT! Warfarin rapidly depletes protein C (short half-life), precipitating severe microvascular thrombosis and venous limb gangrene. Warfarin can be introduced ONLY AFTER full platelet recovery (> 150,000/mm3) with a minimum 5-day overlap with the direct thrombin inhibitor."
      ],
      [
        "Administer 2 units of apheresis platelets immediately to restore the platelet count above 150,000/mm3, while continuing heparin at a reduced dose",
        "Platelet transfusions in HIT are dangerous; transfused platelets are immediately activated by HIT antibodies, causing catastrophic arterial thrombosis and limb amputation."
      ],
      [
        "Switch unfractionated heparin to low-molecular-weight heparin (enoxaparin 1 mg/kg) because LMWH does not cross-react with HIT antibodies",
        "LMWH cross-reacts > 95% with HIT antibodies and is ABSOLUTELY CONTRAINDICATED in HIT; it will worsen thrombosis."
      ],
      [
        "Immediately discontinue heparin and initiate high-dose oral warfarin (10 mg daily) monotherapy to achieve an INR of 2.0 to 3.0",
        "Warfarin monotherapy in acute HIT causes rapid protein C depletion while thrombin remains high, triggering microvascular venous thrombosis and VENOUS LIMB GANGRENE."
      ],
      [
        "Perform emergent therapeutic plasma exchange to remove anti-platelet antibodies before administering any anticoagulation",
        "Plasmapheresis is reserved for refractory catastrophic cases; the immediate first-line medical therapy is discontinuation of heparin and initiation of argatroban/bivalirudin."
      ]
    ],
    "shortestValidSolution": "Platelet drop > 50% at day 6 of heparin + new acute arterial thrombosis (4T score 8) = HIT Type 2 -> Stop all heparin + start direct thrombin inhibitor (argatroban/bivalirudin); avoid platelet transfusions and avoid early warfarin.",
    "necessaryInference": "Diagnose HIT Type 2 using the 4T score, select immediate non-heparin direct thrombin inhibitor therapy (argatroban), and avoid lethal pitfalls (platelet transfusions, LMWH cross-reactivity, warfarin monotherapy).",
    "strongestDistractor": "Switch unfractionated heparin to low-molecular-weight heparin (enoxaparin 1 mg/kg) because LMWH does not cross-react with HIT antibodies",
    "distractorExclusion": "LMWH cross-reacts nearly 100% with HIT antibodies and is strictly contraindicated; non-heparin direct thrombin inhibitors (argatroban) must be used.",
    "citation": "Cuker A, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392. PMID: 30482768.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive hematology and cardiovascular item testing the 4T pre-test probability score, PF4-heparin antibody biology, argatroban direct thrombin inhibition, and the specific contraindications of platelet transfusions, LMWH, and early warfarin.",
      "distractorExclusionNotes": "Distractors feature core USMLE traps: platelet transfusions (worsens thrombosis), LMWH cross-reactivity, warfarin monotherapy (causes limb gangrene), and plasmapheresis delay.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0422",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Stress (Takotsubo) Cardiomyopathy",
    "subtopic": "Catecholamine Surge, Apical Ballooning with Basal Hyperkinesis, and Non-Obstructive Coronary Angiography",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old postmenopausal woman is brought to the emergency department with acute, crushing substernal chest pain and shortness of breath that began 45 minutes after learning that her husband had died suddenly in a motor vehicle collision. Her past medical history is notable for osteopenia and mild generalized anxiety. On arrival, she is tearful, diaphoretic, and in moderate distress. Vital signs reveal blood pressure 108/68 mm Hg, heart rate 94/min, and respiratory rate 20/min. Cardiovascular examination reveals a normal S1, an S3 gallop, and a soft mid-systolic murmur at the left sternal border; lungs are clear. A 12-lead ECG demonstrates acute 2-mm ST-segment elevation in leads V2 through V5 with reciprocal T-wave inversions in leads II and aVF. Initial high-sensitivity troponin I is mildly elevated at 0.42 ng/mL. The cardiac catheterization team is activated for emergent primary PCI for presumed anterior STEMI. Emergent coronary angiography reveals completely normal, widely patent epicardial coronary arteries without angiographic stenosis, plaque rupture, or intraluminal thrombus. Left ventriculography and transthoracic echocardiography demonstrate severe hypokinesis and akinesis of the apical and mid-ventricular segments with hyperkinesis of the basal left ventricular walls, creating a classic 'apical ballooning' appearance with a depressed LVEF of 34%. Which of the following describes the pathophysiology of this condition, and what is its expected long-term clinical prognosis?",
    "choices": [
      [
        "Massive sympathetic activation and supraphysiological surge in circulating catecholamines causing microvascular coronary spasm, direct myocyte catecholamine toxicity, and apical stunning due to higher apical beta-adrenergic receptor density (Takotsubo cardiomyopathy); the overwhelming majority of patients (> 90-95%) achieve complete, spontaneous recovery of left ventricular systolic function within several weeks with supportive medical care",
        "Stress Cardiomyopathy (Takotsubo cardiomyopathy, 'broken heart syndrome', apical ballooning syndrome) predominantly affects postmenopausal women (> 90% of cases) following an acute, severe emotional or physical stressor: (1) PATHOPHYSIOLOGY: Severe acute stress triggers an explosive, supraphysiological surge in endogenous CATECHOLAMINES (epinephrine and norepinephrine levels are often 7 to 30 times higher than in classic myocardial infarction). Circulating catecholamines induce: (a) Severe diffuse microvascular coronary spasm, and (b) Direct myocardial catecholamine toxicity via cyclic AMP-mediated calcium overload and beta-2 adrenergic receptor stimulus trafficking (switching from Gs inotropic to Gi cardiodepressant signaling). Because the CARDIAC APEX HAS THE HIGHEST DENSITY OF BETA-ADRENERGIC RECEPTORS in the human heart, the apex is selectively vulnerable to catecholamine-induced stunning, producing the pathognomonic APICAL AND MID-VENTRICULAR BALLOONING with compensatory basal hyperkinesis (resembling a Japanese octopus trapping pot, 'tako-tsubo'). (2) CLINICAL PRESENTATION AND DIAGNOSTIC CRITERIA (Mayo Clinic Criteria): (a) Transient regional LV wall motion abnormalities extending beyond a single epicardial coronary distribution, (b) ABSENCE OF OBSTRUCTIVE CORONARY ARTERY DISEASE on emergent angiography (indistinguishable from anterior STEMI on presentation), (c) New ECG abnormalities (ST elevation or diffuse T-wave inversions), and (d) Relatively modest troponin elevation that is disproportionately mild compared to the extensive wall motion abnormality. (3) PROGNOSIS AND MANAGEMENT: In-hospital mortality is low (~1-2%), and > 90-95% of patients achieve COMPLETE REVERSAL OF WALL MOTION ABNORMALITIES AND NORMALIZATION OF EJECTION FRACTION within 4 to 8 weeks. Supportive medical therapy with ACE inhibitors/ARBs and beta-blockers is maintained until systolic function recovers."
      ],
      [
        "Autoimmune IgG antibodies targeting the cardiac sarcolemmal sodium-calcium exchanger; carries an irreversible course requiring listing for orthotopic heart transplantation",
        "Takotsubo is driven by a catecholamine surge, not autoantibodies; it is completely reversible in > 95% of patients and does not require heart transplantation."
      ],
      [
        "Acute viral myocarditis caused by Parvovirus B19 inducing lymphocytic infiltration; produces permanent transmural myocardial fibrosis with permanent heart failure",
        "Takotsubo is a non-infectious catecholamine-mediated stunning syndrome that resolves completely; viral myocarditis shows viral genome on biopsy and diffuse global hypokinesis."
      ],
      [
        "Spontaneous dissection of the left anterior descending coronary artery; requires emergent placement of multiple overlapping drug-eluting stents",
        "Coronary angiography showed completely normal, widely patent coronary arteries without dissection or occlusion."
      ],
      [
        "Acute carbon monoxide poisoning causing carboxyhemoglobin saturation of myocardial myoglobin; requires emergent hyperbaric oxygen therapy",
        "Takotsubo follows emotional/physical stress, not carbon monoxide exposure; carboxyhemoglobin is normal."
      ]
    ],
    "shortestValidSolution": "Postmenopausal woman + emotional shock + STEMI on ECG + normal patent coronary arteries on cath + apical ballooning on echo = Takotsubo cardiomyopathy (catecholamine surge/apical stunning; > 90% full recovery in weeks).",
    "necessaryInference": "Diagnose Takotsubo cardiomyopathy from the classic trigger, STEMI mimicry, angiographically normal coronaries, and apical ballooning, recognizing catecholamine toxicity and its reversible prognosis.",
    "strongestDistractor": "Autoimmune IgG antibodies targeting the cardiac sarcolemmal sodium-calcium exchanger; carries an irreversible course requiring listing for orthotopic heart transplantation",
    "distractorExclusion": "Takotsubo is a reversible catecholamine-mediated syndrome (> 90-95% complete recovery in weeks), not an irreversible autoimmune disorder requiring transplantation.",
    "citation": "Prasad A, et al. Apical ballooning syndrome (Tako-Tsubo or stress cardiomyopathy): a mimic of acute myocardial infarction. Am Heart J. 2008;155(3):408-417. PMID: 18294473.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive modern cardiology item evaluating Takotsubo cardiomyopathy: emotional trigger, STEMI mimicry, Mayo criteria (patent coronaries, apical ballooning), beta-receptor density biophysics, and reversible prognosis.",
      "distractorExclusionNotes": "Distractors contrast autoimmune cardiomyopathy, viral myocarditis, spontaneous coronary artery dissection (SCAD), and carbon monoxide poisoning.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0423",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Resistant Hypertension Evaluation and Management",
    "subtopic": "Diagnostic Definition, Primary Aldosteronism Screening (ARR), and Mineralocorticoid Antagonist Therapy (PATHWAY-2)",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man presents for evaluation of difficult-to-control hypertension. Over the past year, his primary care physician has progressively titrated his antihypertensive medications. He is currently taking amlodipine 10 mg daily (maximal dose dihydropyridine CCB), valsartan 320 mg daily (maximal dose ARB), and chlorthalidone 25 mg daily (thiazide-like diuretic). A pharmacy fill record and home blood pressure log confirm excellent medication adherence. In the clinic today, multiple automated blood pressure measurements average 156/96 mm Hg. Physical examination reveals normal BMI (24 kg/m2), no abdominal bruits, equal pulses in all extremities, and no Cushingoid features. Laboratory evaluation reveals serum sodium 142 mEq/L, potassium 3.6 mEq/L, chloride 100 mEq/L, bicarbonate 27 mEq/L, and serum creatinine 0.9 mg/dL. He fulfills criteria for resistant hypertension. Which of the following is the most appropriate next step in diagnostic evaluation, and which pharmacological agent is established as the most effective fourth-line add-on therapy?",
    "choices": [
      [
        "Screen for primary aldosteronism by measuring morning plasma aldosterone concentration and plasma renin activity (aldosterone-to-renin ratio; ARR), and initiate low-dose spironolactone (25 to 50 mg daily) as the most effective fourth-line pharmacological agent to achieve blood pressure control",
        "Resistant Hypertension is defined as blood pressure that remains above goal (>= 130/80 mm Hg) despite the concurrent use of THREE ANTIHYPERTENSIVE AGENTS of different classes at maximal or maximally tolerated doses, ONE OF WHICH MUST BE A DIURETIC (e.g., CCB + ARB/ACEi + thiazide diuretic). It also includes patients whose BP is controlled but requires >= 4 medications. (1) SCREENING FOR SECONDARY HYPERTENSION: The most common secondary cause of resistant hypertension is PRIMARY ALDOSTERONISM (present in ~15-20% of resistant hypertension patients, and > 50% are NORMO-KALEMIC!). Current guidelines recommend that ALL patients with resistant hypertension undergo screening with a morning PLASMA ALDOSTERONE CONCENTRATION (PAC) and PLASMA RENIN ACTIVITY (PRA) to calculate the ALDOSTERONE-TO-RENIN RATIO (ARR; positive if ARR > 20-30 with PAC >= 10-15 ng/dL). Other causes to evaluate include obstructive sleep apnea, renal artery stenosis, and chronic kidney disease. (2) FOURTH-LINE PHARMACOTHERAPY (PATHWAY-2 TRIAL): The landmark PATHWAY-2 randomized crossover trial evaluated fourth-line add-on agents in resistant hypertension. The trial definitively proved that the mineralocorticoid receptor antagonist SPIRONOLACTONE (25 to 50 mg daily) IS VASTLY SUPERIOR to other fourth-line add-on agents (doxazosin, bisoprolol, or placebo) in reducing blood pressure. Spironolactone works because resistant hypertension is predominantly characterized by occult sodium retention and mineralocorticoid receptor hyperactivity. Serum potassium and renal function must be monitored."
      ],
      [
        "Perform emergent bilateral renal vein renin sampling before initiating oral clonidine as fourth-line therapy",
        "Renal vein renin sampling is an obsolete test; clonidine causes severe rebound hypertension and sedation and was proven inferior to spironolactone in the PATHWAY-2 trial."
      ],
      [
        "Order a 24-hour urinary free cortisol excretion test and initiate high-dose oral hydralazine monotherapy",
        "Cushing syndrome is rare in non-obese patients without cushingoid features; hydralazine causes reflex tachycardia and fluid retention and is inferior to spironolactone."
      ],
      [
        "Immediately discontinue chlorthalidone and switch to hydrochlorothiazide 12.5 mg daily combined with high-dose oral potassium supplements",
        "Chlorthalidone is twice as potent with a significantly longer half-life than hydrochlorothiazide; switching to low-dose HCTZ will worsen hypertension."
      ],
      [
        "Discontinue valsartan and amlodipine and initiate high-dose oral aliskiren (direct renin inhibitor) monotherapy",
        "Dual renin-angiotensin blockade is harmful (causes hyperkalemia and renal failure); aliskiren monotherapy will not control resistant hypertension."
      ]
    ],
    "shortestValidSolution": "Uncontrolled BP on 3 maximal drugs including a diuretic = Resistant Hypertension -> Screen with Aldosterone-to-Renin Ratio (ARR) for primary aldosteronism + Add low-dose Spironolactone as best 4th-line agent (PATHWAY-2).",
    "necessaryInference": "Apply the diagnostic criteria for resistant hypertension, recognize that primary aldosteronism is the most common secondary cause (requiring ARR screening even if normokalemic), and select spironolactone as the guideline-proven fourth-line drug (PATHWAY-2).",
    "strongestDistractor": "Perform emergent bilateral renal vein renin sampling before initiating oral clonidine as fourth-line therapy",
    "distractorExclusion": "Renal vein sampling is invasive and obsolete; clonidine was proven inferior to spironolactone in the PATHWAY-2 trial and carries rebound hypertension risks.",
    "citation": "Williams B, et al. Spironolactone versus placebo, bisoprolol, and doxazosin to determine the optimal treatment for drug-resistant hypertension (PATHWAY-2): a randomised, double-blind, crossover trial. Lancet. 2015;386(10008):2059-2068. PMID: 26414968.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive outpatient cardiovascular item testing the definition of resistant hypertension, the mandate for ARR screening in resistant hypertension, and the landmark PATHWAY-2 trial evidence establishing spironolactone as fourth-line.",
      "distractorExclusionNotes": "Distractors feature inferior fourth-line drugs (clonidine, hydralazine), switching from superior chlorthalidone to inferior HCTZ, and direct renin inhibitors.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0424",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Coarctation of the Aorta in Adults",
    "subtopic": "Upper vs Lower Extremity Blood Pressure Differential, Rib Notching, and Associated Intracranial Aneurysms",
    "provisionalDifficulty": 5,
    "stem": "A 23-year-old previously healthy man presents for an initial physical examination prior to entering military service. He is asymptomatic and exercises regularly, although he reports occasional mild cramping in his calves when running long distances. Physical examination reveals an athletic young man. Routine blood pressure measurement in his right arm reveals severe hypertension (172/94 mm Hg), confirmed on repeat measurement in his left arm (168/92 mm Hg). Cardiovascular auscultation reveals a normal S1, an accentuated aortic component of S2, and a harsh, continuous, blowing systolic ejection murmur heard best over the left posterior interscapular thoracic region. Palpation of peripheral pulses reveals brisk, bounding carotid and radial pulses, but markedly diminished and delayed femoral and dorsalis pedis pulses (prominent 'radio-femoral delay'). Simultaneous blood pressure measurement in the right thigh demonstrates a systolic pressure of 108/72 mm Hg (a 64 mm Hg arm-to-leg systolic gradient; normally lower extremity SBP is 10-20 mm Hg higher than the arm). A posteroanterior chest radiograph demonstrates a notched appearance of the left superior mediastinal contour ('figure-3 sign') and symmetric, scallop-like cortical erosions and notching along the inferior surfaces of the posterior third to eighth ribs bilaterally. Which of the following conditions is most strongly associated with this vascular malformation and represents a significant cause of sudden fatal morbidity?",
    "choices": [
      [
        "Congenital saccular 'berry' aneurysms of the Circle of Willis (present in ~10% of patients), which carry a high risk of spontaneous rupture causing fatal aneurysmal subarachnoid hemorrhage, as well as a bicuspid aortic valve (present in 50-85% of cases)",
        "Coarctation of the Aorta is a congenital narrowing of the aortic lumen, classically located at the aortic isthmus immediately distal to the origin of the left subclavian artery and insertion of the ligamentum arteriosum (juxtaductal coarctation): (1) ADULT PRESENTATION AND PHYSICAL HALLMARKS: Often diagnosed in young adults during evaluation of asymptomatic upper extremity hypertension: (a) UPPER VS LOWER EXTREMITY BLOOD PRESSURE DISPARITY: High systolic blood pressure in upper extremities with significantly lower systolic blood pressure in lower extremities (pathological arm-to-leg systolic gradient > 20 mm Hg). (b) RADIO-FEMORAL DELAY: Weak, delayed femoral arterial upstroke compared to simultaneous radial pulse palpation. (c) INTERSCAPULAR MURMUR: Systolic or continuous murmur over the thoracic spine reflecting turbulent flow through the coarctation and dilated collateral intercostal arteries. (2) RADIOLOGICAL HALLMARKS: (a) 'FIGURE-3' SIGN ON CHEST X-RAY: Formed by aortic dilation proximal to the coarctation, the central indentation of the coarctation notch, and post-stenotic dilation of the descending thoracic aorta. (b) INFERIOR RIB NOTCHING: Chronic obstruction forces arterial blood through collateral circuits (subclavian -> internal thoracic -> anterior intercostal -> posterior intercostal -> descending aorta). Enormously dilated, tortuous, pulsating posterior intercostal arteries erode the inferior cortical margins of the 3rd to 8th ribs, producing pathognomonic 'RIB NOTCHING' (typically visible after age 5-10). (3) CRITICAL ASSOCIATIONS (HIGH-YIELD USMLE): (a) BICUSPID AORTIC VALVE (present in 50-85% of coarctation patients; risk of aortic stenosis, regurgitation, endocarditis, and dissection). (b) SACCULAR 'BERRY' ANEURYSMS OF THE CIRCLE OF WILLIS (present in ~10% of patients; caused by persistent upper extremity arterial hypertension combined with intrinsic arterial wall media defects; carries an extreme risk of spontaneous rupture causing fatal SUBARACHNOID HEMORRHAGE). (c) TURNER SYNDROME (45,XO; coarctation present in ~15-30% of Turner patients)."
      ],
      [
        "Atrial septal defect (primum type) associated with complete cleft of the anterior mitral valve leaflet",
        "Ostium primum ASD with cleft mitral valve characterizes Down syndrome (endocardial cushion defect), not aortic coarctation."
      ],
      [
        "Coronary artery aneurysms with high risk of acute thrombosis and myocardial infarction",
        "Coronary artery aneurysms characterize Kawasaki disease in young children, not adult aortic coarctation."
      ],
      [
        "Spontaneous dissection of the visceral branches of the superior mesenteric artery producing acute bowel infarction",
        "Mesenteric artery dissection is a rare spontaneous event or complication of extensive aortic dissection, not the classic congenital association of coarctation."
      ],
      [
        "Pulmonary arteriovenous malformations producing recurrent paradoxical septic emboli and brain abscesses",
        "Pulmonary AVMs characterize Hereditary Hemorrhagic Telangiectasia (Osler-Weber-Rendu syndrome), not aortic coarctation."
      ]
    ],
    "shortestValidSolution": "Young adult with upper extremity hypertension + weak delayed femoral pulses (radio-femoral delay) + rib notching on CXR = Coarctation of the Aorta -> Associated with Bicuspid aortic valve (50-85%) and Berry aneurysms of Circle of Willis (subarachnoid hemorrhage).",
    "necessaryInference": "Diagnose aortic coarctation from radio-femoral delay, upper-lower extremity BP disparity, and inferior rib notching, and identify its strong association with berry aneurysms of the Circle of Willis and bicuspid aortic valve.",
    "strongestDistractor": "Coronary artery aneurysms with high risk of acute thrombosis and myocardial infarction",
    "distractorExclusion": "Coronary aneurysms characterize Kawasaki disease; aortic coarctation is associated with saccular berry aneurysms of the Circle of Willis and bicuspid aortic valve.",
    "citation": "Stout KK, et al. 2018 AHA/ACC guideline for the management of adults with congenital heart disease. Circulation. 2019;139(14):e698-e800. PMID: 30586767.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive adult congenital cardiology item evaluating physical diagnosis (radio-femoral delay, arm-leg gradient), classic CXR signs (figure 3, rib notching), and lethal congenital associations (berry aneurysms).",
      "distractorExclusionNotes": "Distractors contrast Down syndrome endocardial cushion defects, Kawasaki coronary aneurysms, mesenteric dissection, and Osler-Weber-Rendu AVMs.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0425",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Extracranial Carotid Artery Stenosis Management",
    "subtopic": "Symptomatic vs Asymptomatic Thresholds, Timing of Carotid Endarterectomy (CEA), and Medical Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 67-year-old man presents to the neurology clinic 3 days after an episode of sudden, painless, complete loss of vision in his right eye that resembled a dark curtain descending over his visual field ('amaurosis fugax'). The visual loss lasted approximately 8 minutes before completely resolving spontaneously. He denies weakness, numbness, dysarthria, or facial droop. His past medical history is notable for hypertension, hyperlipidemia, and a 40 pack-year smoking history. Physical examination reveals blood pressure 138/84 mm Hg and heart rate 72/min. Auscultation of the right neck reveals a harsh, high-pitched, localized mid-systolic carotid bruit. Neurological examination is completely normal. Brain MRI with diffusion-weighted imaging (DWI) demonstrates two tiny, punctate, acute cortical ischemic lesions in the right middle cerebral artery territory without hemorrhage. Carotid duplex ultrasonography followed by confirmatory CT angiography of the neck demonstrates: \n- Right internal carotid artery: 82% diameter stenosis (NASCET criteria) with a focal ulcerated, calcified atheromatous plaque at the carotid bifurcation\n- Left internal carotid artery: 35% diameter stenosis\n- Vertebral arteries: patent with normal antegrade flow\n\nHe is initiated on dual antiplatelet therapy (aspirin plus clopidogrel) and high-intensity statin therapy (atorvastatin 80 mg). Which of the following is the most appropriate next step in the definitive management of this patient?",
    "choices": [
      [
        "Urgent carotid endarterectomy (CEA) of the right internal carotid artery performed within 14 days of symptom onset, because he has severe symptomatic carotid stenosis (70-99%) where early surgical intervention significantly reduces the 2-year risk of major ipsilateral stroke compared to medical therapy alone",
        "Management of extracranial Carotid Artery Stenosis depends fundamentally on whether the stenosis is SYMPTOMATIC or ASYMPTOMATIC and the PERCENTAGE STENOSIS (by NASCET criteria): (1) DEFINITION OF SYMPTOMATIC CAROTID STENOSIS: A transient ischemic attack (TIA; including amaurosis fugax / transient monocular vision loss) or non-disabling ischemic stroke occurring within the preceding 6 months in the vascular territory supplied by the ipsilateral carotid artery. (2) REPERFUSION THRESHOLDS FOR SYMPTOMATIC STENOSIS: (a) SEVERE SYMPTOMATIC STENOSIS (70-99%): Landmark randomized trials (NASCET and ECST) established that CAROTID ENDARTERECTOMY (CEA) produces a dramatic, unequivocal absolute risk reduction in ipsilateral stroke (absolute risk reduction ~17% at 2 years; number needed to treat [NNT] ~6). (b) MODERATE SYMPTOMATIC STENOSIS (50-69%): CEA provides modest, significant benefit, particularly in men and patients with ulcerated plaques (NNT ~15). (c) MILD STENOSIS (< 50%): Medical therapy alone is indicated; surgery provides NO benefit. (3) TIMING IS CRITICAL: The risk of recurrent stroke is highest within the first 7 to 14 days following an initial TIA or minor stroke. Major guidelines (AHA/ASA and SVS) recommend that in eligible patients with severe symptomatic stenosis, CAROTID ENDARTERECTOMY SHOULD BE PERFORMED URGENTLY WITHIN 14 DAYS of symptom onset. Delaying surgery for weeks to 'let the patient stabilize' is an obsolete and dangerous practice that exposes the patient to high risk of disabling completed stroke. (4) CONTRAST WITH ASYMPTOMATIC STENOSIS: In ASYMPTOMATIC patients, modern intensive medical therapy (high-intensity statin, antiplatelets, blood pressure control) has reduced annual stroke risk to < 1%/year; CEA is considered only for very high-grade stenosis (>= 70-80%) in selected patients with low perioperative surgical risk (< 3%) and a life expectancy > 5 years."
      ],
      [
        "Continuation of medical therapy alone with aspirin and atorvastatin, with surgical intervention reserved only if he suffers a permanent completed stroke",
        "Medical therapy alone is inadequate for severe symptomatic 70-99% carotid stenosis; NASCET showed CEA reduces 2-year stroke risk by 17% (NNT = 6) and is mandatory."
      ],
      [
        "Immediate emergency right carotid artery bypass using a saphenous vein graft, with surgery delayed for at least 3 months to allow brain tissue healing",
        "Delaying surgery for 3 months leaves the patient at extreme risk of recurrent completed stroke during the highest-risk window (first 2 weeks); CEA is performed within 14 days."
      ],
      [
        "Emergency systemic intravenous thrombolysis with alteplase (tPA) to dissolve the carotid atheroma",
        "tPA is indicated for acute disabling ischemic stroke presenting within 4.5 hours; it does not treat resolved TIA or dissolve chronic calcified atheromatous carotid plaques."
      ],
      [
        "Long-term therapeutic anticoagulation with oral warfarin (target INR 2.5-3.5) as preferred first-line therapy over surgical intervention",
        "Warfarin provides no benefit over antiplatelet therapy for atherosclerotic carotid stenosis and increases intracranial hemorrhage risk; surgery (CEA) is the proven intervention."
      ]
    ],
    "shortestValidSolution": "Recent amaurosis fugax + 82% right internal carotid stenosis = Severe symptomatic carotid stenosis (70-99%) -> Urgent carotid endarterectomy (CEA) within 14 days (NASCET criteria).",
    "necessaryInference": "Apply NASCET trial thresholds for carotid endarterectomy: severe symptomatic stenosis (70-99%) requires urgent CEA within 14 days to prevent major stroke.",
    "strongestDistractor": "Continuation of medical therapy alone with aspirin and atorvastatin, with surgical intervention reserved only if he suffers a permanent completed stroke",
    "distractorExclusion": "Medical therapy alone is inferior in severe symptomatic stenosis (70-99%); NASCET established that urgent CEA within 14 days drastically reduces recurrent stroke (NNT = 6).",
    "citation": "Naylor R, et al. European Society for Vascular Surgery (ESVS) 2023 clinical practice guidelines on the management of atherosclerotic carotid and vertebral artery disease. Eur J Vasc Endovasc Surg. 2023;65(1):7-111. PMID: 35624269.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive stroke neurology and vascular surgery item testing the NASCET trial evidence, stenosis severity thresholds (70-99% vs < 50%), and the critical 14-day surgical timing window.",
      "distractorExclusionNotes": "Distractors feature medical-only delay, 3-month surgical postponement, tPA misuse for resolved TIA, and contraindicated warfarin anticoagulation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
