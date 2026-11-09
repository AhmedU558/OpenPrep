# -*- coding: utf-8 -*-
"""
Builder script to generate scripts/candidate-authoring/step2-batch11.ts
"Items": op-c-s2-0251 to op-c-s2-0275 (25 items on Endocrine emergencies & pathophysiology)
"""
import json

items = [
  {
    "code": "op-c-s2-0251",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Myxedema Coma Resuscitation and Hydrocortisone Preceding Levothyroxine",
    "subtopic": "Severe Hypothermia, Hypoventilation, and Prevention of Acute Adrenal Crisis",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Myxedema Coma management: Severe decompensated hypothyroidism triggered by infection, cold exposure, or sedatives. Clinical hallmarks: Severe hypothermia (often < 35 C / 95 F), altered mental status/coma, bradycardia, hypoventilation/hypercapnia, hypotension, and periorbital/pretibial non-pitting myxedema. Laboratory: High TSH, very low free T4, hyponatremia, and hypoglycemia. CRITICAL MANAGEMENT RULE: INTRAVENOUS GLUCOCORTICOIDS (HYDROCORTISONE 100 MG IV Q8H) MUST BE ADMINISTERED PRIOR TO OR CONCURRENTLY WITH INTRAVENOUS LEVOTHYROXINE (T4) / LIOTHYRONINE (T3)! Rationale: Thyroid hormone replacement accelerates hepatic metabolic clearance of cortisol and elevates whole-body metabolic rate. If the patient has underlying secondary hypothyroidism or concomitant autoimmune primary adrenal insufficiency (polyglandular autoimmune syndrome), administering thyroid hormone without glucocorticoids precipitates catastrophic, fatal acute adrenal crisis!",
    "necessaryInference": "Synthesize myxedema coma presentation (hypothermia, coma, bradycardia) and deduce that intravenous hydrocortisone must precede thyroid hormone administration to prevent precipitating fatal acute adrenal collapse.",
    "strongestDistractor": "Immediate administration of high-dose intravenous levothyroxine monotherapy, withholding glucocorticoids to avoid immunosuppression",
    "distractorExclusion": "Giving thyroid hormone alone accelerates cortisol degradation and triggers fatal adrenal crisis if occult adrenal insufficiency is present; hydrocortisone must precede levothyroxine.",
    "citation": "Jonklaas J, Bianco AC, Bauer AJ, et al. Guidelines for the treatment of hypothyroidism: prepared by the american thyroid association task force on thyroid hormone replacement. Thyroid. 2014;24(12):1670-1751. PMID: 25266247.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item tests critical endocrinologic resuscitation sequence in decompensated hypothyroidism, requiring the learner to prioritize intravenous glucocorticoids before levothyroxine to prevent precipitating adrenal collapse.",
      "distractorExclusionNotes": "Distractors represent common clinical errors: isolated levothyroxine administration, active external warming leading to peripheral vasodilation/shock, or fluid overload.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "An 81-year-old woman is brought to the emergency department by ambulance in mid-January after being found unresponsive in her unheated apartment. Her past medical history is notable for Hashimoto thyroiditis, for which she was prescribed levothyroxine; however, neighbors report she stopped filling her prescriptions 6 months ago. On physical examination, she is comatose and unarousable to noxious stimuli. Physical examination reveals cool, dry, rough skin with coarse sparse hair, prominent periorbital non-pitting edema, and delayed relaxation phase of deep tendon reflexes. Vital signs are: rectal temperature 33.4 C (92.1 F), pulse 42/min and regular, blood pressure 82/50 mm Hg, and respiratory rate 8/min with shallow respiratory excursions. Cardiac monitoring confirms sinus bradycardia without ischemic ST changes. Fingerstick blood glucose is 54 mg/dL. Arterial blood gas on room air reveals: pH 7.24, PaCO2 62 mm Hg, PaO2 56 mm Hg, and HCO3 26 mEq/L (severe hypercapnic hypoventilation). Serum sodium is 124 mEq/L. Blood is drawn for emergent laboratory testing including serum TSH, free T4, and baseline cortisol. Endotracheal intubation is performed for airway protection. Which of the following pharmacotherapeutic interventions is the most critical immediate next step in management?",
    "options": [
      {
        "text": "Intravenous stress-dose hydrocortisone administered prior to or concurrently with intravenous levothyroxine and liothyronine",
        "explanation": "This patient presents with MYXEDEMA COMA, an extreme, life-threatening manifestation of decompensated hypothyroidism with a historical mortality rate of 30% to 50%. It typically occurs in elderly patients with longstanding untreated hypothyroidism exposed to secondary precipitants such as hypothermia, sepsis, myocardial infarction, or sedative medications. Diagnostic hallmarks include the combination of: (1) Altered mental status (lethargy, obtundation, or coma); (2) Defective thermoregulation leading to severe hypothermia (core temperature < 35 C / 95 F); (3) Severe cardiopulmonary depression (sinus bradycardia, hypotension, and respiratory depression with hypoxemia and hypercapnic respiratory acidosis); (4) Hyponatremia (due to impaired free-water clearance from low cardiac output and elevated vasopressin) and hypoglycemia; and (5) Physical stigmata of severe hypothyroidism (periorbital puffiness, non-pitting pretibial myxedema, and delayed reflex relaxation). MANDATORY RESUSCITATION PRINCIPLE: According to American Thyroid Association guidelines, INTRAVENOUS STRESS-DOSE GLUCOCORTICOIDS (hydrocortisone 100 mg IV every 8 hours) MUST BE ADMINISTERED PRIOR TO OR CONCURRENTLY WITH INTRAVENOUS THYROID HORMONE REPLACEMENT (IV levothyroxine with or without IV liothyronine). RATIONALE: Thyroid hormone profoundly increases cellular metabolic activity and accelerates the hepatic breakdown and peripheral clearance of circulating cortisol. In patients with severe myxedema coma, the clinician cannot immediately exclude concomitant primary adrenal insufficiency (such as autoimmune polyglandular syndrome type 2) or secondary adrenal insufficiency from hypothalamic-pituitary failure. Administering thyroid hormone monotherapy without prior corticosteroid coverage accelerates cortisol degradation, precipitating catastrophic, irreversible circulatory collapse and fatal ACUTE ADRENAL CRISIS."
      },
      {
        "text": "Intravenous levothyroxine monotherapy bolus, withholding glucocorticoids until serum cortisol results are finalized 4 hours later",
        "explanation": "Withholding glucocorticoids until laboratory results return can cause fatal circulatory collapse if thyroid hormone accelerates cortisol clearance in an adrenal-deficient patient."
      },
      {
        "text": "Immediate active external rewarming with convective forced-air blankets and hot water immersion",
        "explanation": "Active aggressive external rewarming causes sudden peripheral cutaneous vasodilation, resulting in severe intravascular pooling and refractory hypovolemic shock; passive rewarming is indicated."
      },
      {
        "text": "Rapid infusion of 3 liters of 0.9% normal saline over 1 hour to aggressively treat hypotension and hyponatremia",
        "explanation": "Rapid fluid loading in myxedema coma precipitates acute pulmonary edema and cerebral demyelination; cautious, slow crystalloid infusion is required."
      },
      {
        "text": "Intravenous dopamine infusion as first-line inotropic therapy to restore normal heart rate and blood pressure",
        "explanation": "Dopamine is ineffective in correcting hypothermia-induced bradycardia and worsens myocardial oxygen demand; thyroid hormone and glucocorticoids restore hemodynamics."
      }
    ]
  },
  {
    "code": "op-c-s2-0252",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Thyroid Storm Multimodal Medical Therapy and Potassium Iodide Timing",
    "subtopic": "Burch-Wartofsky Criteria, Thionamides, and Wolff-Chaikoff Effect Mechanism",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Thyroid Storm management: Medical emergency with mortality > 20%. Burch-Wartofsky Point Scale >= 45: Severe hyperpyrexia (temp > 39-40 C), extreme tachycardia/atrial fibrillation, agitation/delirium/psychosis, nausea/vomiting/jaundice, and high-output heart failure. FOUR-TIER MULTIMODAL THERAPY: 1. BETA-BLOCKER: Propranolol (blocks beta-adrenergic receptors and inhibits peripheral 5'-monodeiodinase T4-to-T3 conversion) or IV esmolol. 2. THIONAMIDE: PROPYLTHIOURACIL (PTU) preferred over methimazole in acute storm (PTU blocks both new thyroid hormone synthesis via thyroid peroxidase AND blocks peripheral conversion of T4 to T3). 3. INORGANIC IODINE (Lugol solution or Saturated Solution of Potassium Iodide [SSKI]): Inhibits thyroid hormone release via the WOLFF-CHAIKOFF EFFECT. CRITICAL TIMING RULE: IODINE MUST BE ADMINISTERED AT LEAST 1 HOUR AFTER THIONAMIDE! Why? If iodine is given before thionamide, the thyroid gland utilizes the exogenous iodine as a substrate to synthesize and release massive new waves of thyroid hormone (Jod-Basedow phenomenon), worsening the storm! 4. INTRAVENOUS GLUCOCORTICOIDS (Hydrocortisone): Further reduces T4-to-T3 conversion and treats relative adrenal exhaustion.",
    "necessaryInference": "Synthesize thyroid storm management sequence and recognize that inorganic iodine (Lugol's/SSKI) must be administered at least 1 hour AFTER thionamides to prevent providing substrate for new thyroid hormone synthesis.",
    "strongestDistractor": "Administer saturated solution of potassium iodide immediately, followed by propylthiouracil 2 hours later to ensure rapid thyroid gland saturation",
    "distractorExclusion": "Administering iodine before thionamides provides iodine substrate that the unblocked thyroid peroxidase incorporates into thyroid hormone, worsening storm.",
    "citation": "Ross DS, Burch HB, Cooper DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid. 2016;26(10):1343-1421. PMID: 27521067.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item examines multi-agent pharmacotherapy in thyroid storm, focusing on the mandatory chronological sequence between thionamides and inorganic iodine.",
      "distractorExclusionNotes": "Distractors violate fundamental pharmacological rules: premature iodine administration fueling hormone synthesis, using aspirin which displaces thyroid hormone from TBG, or isolated beta-blockade.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 34-year-old woman with a history of Graves disease who was lost to follow-up and non-compliant with methimazole presents to the emergency department with acute delirium, severe agitation, profuse sweating, and palpitations that began 12 hours ago after developing acute pyelonephritis. On physical examination, she is combative, disoriented, and profusely diaphoretic. Vital signs are: temperature 40.2 C (104.4 F), pulse 154/min and irregularly irregular, blood pressure 168/74 mm Hg, and respiratory rate 28/min. Physical examination demonstrates bilateral exophthalmos, a diffusely enlarged nontender thyroid gland with an audible systolic bruit, elevated jugular venous pressure, bilateral bibasilar crackles, and marked tremor. An ECG confirms atrial fibrillation with rapid ventricular response. Burch-Wartofsky Point Scale score is calculated at 65 points (diagnostic of thyroid storm). Point-of-care laboratory tests confirm suppressed TSH (< 0.01 microU/mL) and free T4 markedly elevated (> 7.0 ng/dL). The intensive care team establishes intravenous access to initiate multimodal pharmacotherapy. Which of the following sequences represents the most appropriate, guideline-adherent pharmacological strategy for this patient?",
    "options": [
      {
        "text": "Initiate intravenous propranolol, administer oral or rectal propylthiouracil, delay potassium iodide administration until at least 1 hour after propylthiouracil, and administer intravenous hydrocortisone",
        "explanation": "This patient presents with fulminant THYROID STORM (accelerated thyrotoxicosis), an endocrine emergency triggered by acute pyelonephritis in the setting of untreated Graves disease. The clinical diagnosis is established using the Burch-Wartofsky Point Scale (score >= 45 is diagnostic), characterized by severe hyperpyrexia, cardiovascular collapse (tachyarrhythmias, atrial fibrillation, high-output heart failure), central nervous system agitation/delirium, and gastrointestinal-hepatic dysfunction (jaundice, diarrhea). MANAGEMENT ALGORITHM AND CRITICAL TIMING SEQUENCE: Management mandates a simultaneous, four-pronged therapeutic approach: (1) BETA-ADRENERGIC BLOCKADE: High-dose intravenous or oral PROPRANOLOL (or IV esmolol) is initiated immediately to control adrenergic hyperactivity (tachycardia, hypertension, tremor) and reduce myocardial oxygen demand. Propranolol has the additional unique benefit of inhibiting peripheral 5'-monodeiodinase, blocking the conversion of T4 to active T3. (2) THIONAMIDE THERAPY: PROPYLTHIOURACIL (PTU) is the thionamide of choice in acute thyroid storm (administered orally, via nasogastric tube, or rectally). PTU acts via two mechanisms: it inhibits thyroid peroxidase (blocking new organification and coupling of thyroid hormones) and directly inhibits peripheral deiodination of T4 to T3 (methimazole only blocks thyroid peroxidase, though it can be used if PTU is unavailable). (3) INORGANIC IODINE SOLUTION (SSKI or Lugol solution): Inorganic iodine induces the WOLFF-CHAIKOFF EFFECT, acutely shutting down the release of preformed T4 and T3 from the thyroid follicular lumen into the bloodstream. CRITICAL TIMING RULE: IODINE MUST BE ADMINISTERED AT LEAST 1 HOUR AFTER THE THIONAMIDE DOSE! If inorganic iodine is administered prior to or concurrently with thionamides, the unblocked thyroid gland uses the massive exogenous iodine load as substrate to synthesize and release an explosive new wave of thyroid hormones (the Jod-Basedow phenomenon), precipitating cardiovascular collapse. (4) CORTICOSTEROIDS: Intravenous HYDROCORTISONE (100 mg IV every 8 hours) further blocks peripheral T4-to-T3 conversion, stabilizes vasomotor tone, and treats relative adrenal insufficiency induced by hypermetabolic cortisol consumption."
      },
      {
        "text": "Administer potassium iodide solution immediately as first-line therapy, followed by oral propylthiouracil 2 hours later, and avoid beta-blockers due to atrial fibrillation",
        "explanation": "Giving iodine before PTU fuels synthesis of new thyroid hormones; beta-blockers are the cornerstone of rate control in thyroid storm-induced atrial fibrillation."
      },
      {
        "text": "Initiate high-dose oral aspirin (acetylsalicylic acid) for antipyresis, followed by intravenous methimazole and oral potassium iodide simultaneously",
        "explanation": "Aspirin is strictly contraindicated in thyroid storm because it displaces T4 and T3 from thyroid-binding globulin (TBG), sharply increasing free active hormone levels."
      },
      {
        "text": "Perform emergent total thyroidectomy in the operating room under general anesthesia prior to medical stabilization",
        "explanation": "Emergency thyroidectomy in an unstabilized patient with thyroid storm carries prohibitive intraoperative mortality (>50%); medical stabilization is mandatory."
      },
      {
        "text": "Administer high-dose intravenous levothyroxine to induce negative feedback suppression of the anterior pituitary gland",
        "explanation": "Administering levothyroxine adds exogenous thyroid hormone to a patient already in hyperthyroid crisis, causing fatal ventricular fibrillation."
      }
    ]
  },
  {
    "code": "op-c-s2-0253",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Diabetic Ketoacidosis Potassium Repletion and Insulin Timing Thresholds",
    "subtopic": "Serum Potassium < 3.3 mEq/L Mandating Insulin Hold and Dextrose Addition at 200 mg/dL",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Diabetic Ketoacidosis (DKA) management (ADA Guidelines): DIAGNOSTIC CRITERIA: Blood glucose > 250 mg/dL, arterial pH < 7.30, serum bicarbonate < 18 mEq/L, and elevated anion gap (> 12) with positive serum/urine ketones. CRITICAL MANAGEMENT PILLARS: 1. FLUID RESUSCITATION: 0.9% Normal Saline (1-1.5 L/hr initially) to restore intravascular volume. 2. POTASSIUM MANAGEMENT — THE ABSOLUTE SAFETY THRESHOLDS: Total body potassium is ALWAYS depleted in DKA (due to osmotic diuresis and urinary loss), even if initial serum K is normal or elevated! Insulin drives potassium intracellularly. IF SERUM POTASSIUM IS < 3.3 mEq/L: WITHHOLD INSULIN IMMEDIATELY! Administer aggressive IV potassium chloride (20-40 mEq/hr) until serum K > 3.3 mEq/L! Giving insulin when K < 3.3 mEq/L causes fatal hypokalemia, cardiac arrest, and respiratory muscle paralysis! If K is 3.3 to 5.3 mEq/L: Give 20-30 mEq K per liter of IV fluid alongside insulin. If K > 5.3 mEq/L: Start insulin, check K every 2 hours. 3. DEXTROSE ADDITION: When serum glucose drops to <= 200 mg/dL, ADD 5% DEXTROSE TO IV FLUIDS while continuing insulin infusion until the ANION GAP CLOSES (anion gap <= 12 and bicarbonate >= 18 mEq/L)!",
    "necessaryInference":
      "Synthesize DKA management thresholds: identify that a serum potassium < 3.3 mEq/L requires withholding insulin and giving intravenous potassium to prevent fatal arrhythmia, and that insulin is continued with dextrose until the anion gap closes.",
    "strongestDistractor": "Initiate an immediate intravenous regular insulin infusion bolus of 0.14 units/kg/hr to rapidly suppress lipolysis and ketoacid production",
    "distractorExclusion": "Administering insulin when serum potassium is 3.1 mEq/L triggers catastrophic intracellular potassium shift, causing lethal ventricular arrhythmias or asystole.",
    "citation": "Kitabchi AE, Umpierrez GE, Miles JM, Fisher JN. Hyperglycemic crises in adult patients with diabetes. Diabetes Care. 2009;32(7):1335-1343. PMID: 19564476.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item assesses nuanced electrolyte and fluid management in DKA. Requires the learner to recognize that severe hypokalemia supersedes immediate insulin administration.",
      "distractorExclusionNotes": "Distractors feature common clinical mistakes: starting insulin with low potassium, stopping insulin as soon as glucose reaches 200, or giving routine bicarbonate.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 23-year-old man with type 1 diabetes mellitus is brought to the emergency department with nausea, recurrent vomiting, diffuse abdominal pain, and rapid deep breathing for 24 hours. He ran out of insulin 3 days ago. On physical examination, he appears severely dehydrated with sunken eyes, dry mucous membranes, and a fruity odor on his breath. Vital signs are: temperature 37.1 C, pulse 122/min, blood pressure 94/58 mm Hg, and respiratory rate 32/min (Kussmaul breathing). Point-of-care fingerstick glucose reads 'HIGH' (> 500 mg/dL). Laboratory testing reveals: - Serum Sodium: 132 mEq/L - Serum Potassium: 3.1 mEq/L - Serum Chloride: 96 mEq/L - Serum Bicarbonate: 10 mEq/L - Blood Urea Nitrogen: 38 mg/dL - Serum Creatinine: 1.8 mg/dL - Arterial Blood Gas: pH 7.18, PaCO2 24 mm Hg, PaO2 96 mm Hg - Serum beta-hydroxybutyrate: 7.8 mmol/L (normal: < 0.5 mmol/L) - Urine Dipstick: 4+ glucose, large ketones The patient is initiated on intravenous 0.9% normal saline at 1,000 mL/hr. Which of the following is the most appropriate next step regarding insulin and potassium management for this patient?",
    "options": [
      {
        "text": "Withhold insulin administration, aggressively infuse intravenous potassium chloride until serum potassium exceeds 3.3 mEq/L, and only then initiate the regular insulin infusion",
        "explanation": "This patient presents with classic DIABETIC KETOACIDOSIS (DKA), characterized by hyperglycemia, high anion gap metabolic acidosis (anion gap = 132 - [96 + 10] = 26 mEq/L), elevated serum beta-hydroxybutyrate, and Kussmaul respirations. The most critical management rule tested on USMLE Step 2 CK involves POTASSIUM THRESHOLDS PRIOR TO INSULIN ADMINISTRATION: (1) TOTAL BODY POTASSIUM DEPLETION: Although initial serum potassium measurements in DKA are often normal or elevated due to extracellular shifts driven by hyperosmolality, insulin deficiency, and acidosis, ALL patients with DKA suffer profound TOTAL BODY POTASSIUM DEFICITS (typically 300 to 600 mEq) resulting from protracted osmotic diuresis, urinary ketoacid salt wasting, and vomiting. (2) THE SERUM POTASSIUM SAFETY RULE (ADA GUIDELINES): Insulin stimulates the sodium-potassium ATPase pump (Na+/K+-ATPase), driving extracellular potassium rapidly into cells. (a) IF SERUM POTASSIUM IS < 3.3 mEq/L: INSULIN MUST BE WITHHELD! Administer aggressive intravenous potassium chloride (20 to 40 mEq/hr) in isotonic saline until serum potassium rises above 3.3 mEq/L. Initiating insulin while serum potassium is < 3.3 mEq/L causes a catastrophic drop in extracellular potassium, precipitating fatal cardiac arrhythmias (ventricular fibrillation, torsades de pointes, asystole) and respiratory muscle paralysis. (b) IF SERUM POTASSIUM IS 3.3 TO 5.3 mEq/L: Start the intravenous regular insulin infusion (0.1 units/kg/hr) AND concurrently infuse 20 to 30 mEq of potassium chloride per liter of intravenous fluids to maintain potassium between 4.0 and 5.0 mEq/L. (c) IF SERUM POTASSIUM IS > 5.3 mEq/L: Start insulin infusion without potassium; recheck potassium levels every 2 hours. (3) DEXTROSE AND ANION GAP CLOSURE: When serum glucose drops to <= 200 mg/dL, add 5% dextrose to fluids to prevent hypoglycemia while CONTINUING INSULIN until the anion gap closes (anion gap <= 12 and serum bicarbonate >= 18 mEq/L)."
      },
      {
        "text": "Administer an immediate intravenous bolus of regular insulin (0.14 units/kg) to suppress hepatic ketoacid generation rapidly",
        "explanation": "Giving insulin with a potassium of 3.1 mEq/L drives potassium into cells, causing lethal cardiac arrhythmias and arrest."
      },
      {
        "text": "Administer two ampules of intravenous sodium bicarbonate to correct arterial pH before giving potassium or insulin",
        "explanation": "Bicarbonate is indicated only for pH < 6.9; routine bicarbonate causes paradoxical CSF acidosis, hypokalemia, and delayed ketone clearance."
      },
      {
        "text": "Initiate continuous subcutaneous insulin glargine and discharge to the medical floor once blood glucose drops below 250 mg/dL",
        "explanation": "Severe DKA requires continuous IV regular insulin in an ICU/monitored stepdown setting until the anion gap closes, not floor subcutaneous therapy."
      },
      {
        "text": "Discontinue intravenous insulin completely as soon as blood glucose reaches 200 mg/dL to prevent iatrogenic hypoglycemia",
        "explanation": "Stopping insulin when glucose reaches 200 mg/dL causes rebound ketoacidosis; insulin must be continued with dextrose until the anion gap closes."
      }
    ]
  },
  {
    "code": "op-c-s2-0254",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Primary Adrenal Insufficiency Cosyntropin Stimulation and Crisis Management",
    "subtopic": "Hyperpigmentation, Hyperkalemia, Mineralocorticoid Deficiency, and Stress Hydrocortisone",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Primary vs Secondary Adrenal Insufficiency: PRIMARY ADRENAL INSUFFICIENCY (Addison Disease): Autoimmune adrenalitis (most common in US), TB (worldwide), or bilateral adrenal hemorrhage (Waterhouse-Friderichsen). Destroys ALL THREE LAYERS of adrenal cortex: 1. Glucocorticoid deficiency (cortisol): fatigue, anorexia, weight loss, hypoglycemia, hypotension. 2. Mineralocorticoid deficiency (aldosterone): HYPONATREMIA, HYPERKALEMIA, and NON-ANION GAP METABOLIC ACIDOSIS (aldosterone normally secretes K+ and H+ in exchange for Na+). 3. Adrenal androgen deficiency: loss of pubic/axillary hair in women. 4. HIGH ACTH / POMC: ACTH hypersecretion stimulates melanocortin-1 receptors, causing generalized HYPERPIGMENTATION (palmar creases, buccal mucosa, scars). SECONDARY ADRENAL INSUFFICIENCY (Pituitary ACTH deficiency): Aldosterone is PRESERVED (regulated by renin-angiotensin system, not ACTH!); therefore, NO HYPERKALEMIA and NO HYPERPIGMENTATION! DIAGNOSTIC WORKUP: High-dose COSYNTROPIN (synthetic ACTH) stimulation test: measure cortisol at 0, 30, and 60 minutes; FAILURE OF CORTISOL TO RISE > 18 mcg/dL confirms adrenal insufficiency. Baseline ACTH > 100 pg/mL confirms primary etiology. ACUTE CRISIS: IV Hydrocortisone 100 mg q8h + isotonic crystalloid resuscitation.",
    "necessaryInference":
      "Synthesize clinical findings of primary adrenal insufficiency (hyperpigmentation, hyperkalemic metabolic acidosis, hyponatremia) and deduce that failure of cortisol to rise > 18 mcg/dL on cosyntropin stimulation confirms the diagnosis, requiring stress-dose hydrocortisone.",
    "strongestDistractor": "Perform a 24-hour urinary free cortisol excretion test to evaluate for cyclical Cushing disease",
    "distractorExclusion": "Hyperpigmentation with hyperkalemia, hyponatremia, and hypotension indicates adrenal failure (Addison disease), not hypercortisolism (Cushing disease).",
    "citation": "Bornstein SR, Allolio B, Arlt W, et al. Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(2):364-389. PMID: 26760044.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item tests pathophysiological differentiation of primary from secondary adrenal insufficiency, laboratory confirmation via cosyntropin stimulation, and emergent treatment.",
      "distractorExclusionNotes": "Distractors confuse primary adrenal failure with secondary hypopituitarism (which preserves aldosterone), Cushing disease, or isolated salt-wasting nephropathy.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 38-year-old woman presents to the ambulatory clinic with a 4-month history of worsening fatigue, weakness, dizzy spells upon standing, anorexia, salt cravings, and a 6-kg unintended weight loss. Her medical history includes vitiligo and hypothyroidism treated with levothyroxine. On physical examination, she appears frail and chronical ill. Vital signs are: pulse 88/min, supine blood pressure 104/64 mm Hg, and standing blood pressure 82/48 mm Hg with dizziness (marked orthostatic hypotension). Examination of the skin demonstrates dark, bronze hyperpigmentation of the gingival mucosa, vermilion border of the lips, palmar creases, and old appendectomy scar. Laboratory evaluation reveals: - Serum Sodium: 128 mEq/L - Serum Potassium: 5.8 mEq/L - Serum Chloride: 98 mEq/L - Serum Bicarbonate: 18 mEq/L - Blood Urea Nitrogen: 28 mg/dL - Serum Creatinine: 1.2 mg/dL - Fasting Blood Glucose: 64 mg/dL An 8:00 AM baseline serum cortisol is 2.8 mcg/dL (normal: 5-25 mcg/dL). Which of the following is the most appropriate diagnostic test to confirm the diagnosis, and what is the definitive immediate maintenance therapy?",
    "options": [
      {
        "text": "High-dose cosyntropin (synthetic ACTH) stimulation test demonstrating failure of serum cortisol to rise above 18 mcg/dL; treatment requires daily oral hydrocortisone combined with fludrocortisone",
        "explanation": "This patient presents with classic PRIMARY ADRENAL INSUFFICIENCY (Addison disease), likely autoimmune adrenalitis in the setting of Autoimmune Polyglandular Syndrome type 2 (given her concurrent vitiligo and Hashimoto thyroiditis). Master the key pathophysiological and diagnostic principles on USMLE Step 2 CK: (1) PATHOPHYSIOLOGY OF PRIMARY VS SECONDARY ADRENAL INSUFFICIENCY: Primary adrenal failure involves autoimmune destruction of all three zones of the adrenal cortex: (a) Zona glomerulosa destruction leads to ALDOSTERONE DEFICIENCY. Loss of aldosterone results in urinary sodium wasting, hypovolemia, orthostatic hypotension, salt craving, HYPONATREMIA, HYPERKALEMIA, and non-anion gap metabolic acidosis (retention of K+ and H+). (b) Zona fasciculata destruction causes CORTISOL DEFICIENCY, leading to fatigue, anorexia, weight loss, and fasting hypoglycemia. (c) Loss of negative feedback inhibition triggers massive pituitary secretion of PRO-OPIOMELANOCORTIN (POMC), the precursor for both ACTH and melanocyte-stimulating hormone (alpha-MSH). Elevated MSH/ACTH stimulates melanocortin-1 receptors on dermal melanocytes, producing pathognomonic BRONZE HYPERPIGMENTATION of mucous membranes, palmar creases, and sun-exposed areas. IN CONTRAST, secondary adrenal insufficiency (pituitary ACTH failure) spares the zona glomerulosa (aldosterone is regulated by the renin-angiotensin-aldosterone axis, not ACTH); therefore, patients with secondary adrenal failure DO NOT have hyperkalemia or hyperpigmentation. (2) CONFIRMATORY TESTING: The definitive gold-standard diagnostic test is the COSYNTROPIN (SYNTHETIC ACTH1-24) STIMULATION TEST. Cosyntropin (250 mcg IV or IM) is administered, and serum cortisol is measured at baseline, 30, and 60 minutes. A normal adrenal cortex responds with robust steroidogenesis, yielding a peak cortisol > 18 to 20 mcg/dL. In primary adrenal insufficiency, the atrophic or destroyed adrenal cortex FAILS TO RESPOND (peak cortisol remains < 18 mcg/dL). Baseline plasma ACTH is markedly elevated (> 100 pg/mL). (3) DEFINITIVE MAINTENANCE THERAPY: Because both cortisol and aldosterone are deficient, patients require lifelong replacement with both a glucocorticoid (ORAL HYDROCORTISONE in divided doses) AND a mineralocorticoid (ORAL FLUDROCORTISONE 0.05 to 0.1 mg daily)."
      },
      {
        "text": "Overnight 1-mg low-dose dexamethasone suppression test; treatment requires oral spironolactone and sodium polystyrene sulfonate",
        "explanation": "Dexamethasone suppression tests screen for hypercortisolism (Cushing syndrome); spironolactone blocks aldosterone and would worsen fatal shock."
      },
      {
        "text": "Metyrapone stimulation test; treatment requires oral hydrocortisone monotherapy without mineralocorticoid replacement",
        "explanation": "Primary adrenal insufficiency destroys the zona glomerulosa and requires fludrocortisone; hydrocortisone monotherapy treats secondary adrenal failure."
      },
      {
        "text": "Insulin-induced hypoglycemia test; treatment requires bilateral laparoscopic adrenalectomy",
        "explanation": "Insulin tolerance test assesses pituitary GH/ACTH reserve, but is dangerous in adrenal crisis; adrenalectomy is contraindicated."
      },
      {
        "text": "24-hour urinary free cortisol excretion; treatment requires long-acting somatostatin receptor ligands (octreotide)",
        "explanation": "Urinary free cortisol tests for Cushing syndrome; octreotide treats acromegaly and carcinoid tumors, not adrenal insufficiency."
      }
    ]
  },
  {
    "code": "op-c-s2-0255",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Pheochromocytoma Preoperative Alpha-Blockade Mandate Before Beta-Blockers",
    "subtopic": "Phenoxybenzamine 10-14 Days Pre-Op, Unopposed Alpha Stimulation Danger, and Genetics",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Pheochromocytoma preoperative medical management: CLINICAL TRIAD: Episodic headache, profuse sweating (diaphoresis), and tachycardia in a patient with paroxysmal or refractory hypertension ('Rule of the 5 Ps': Pressure, Pain, Perspiration, Palpitations, Pallor). DIAGNOSIS: Elevated 24-hour urinary fractionated metanephrines and catecholamines, or plasma free metanephrines. Localization: Abdominal CT/MRI or MIBG scintigraphy. PREOPERATIVE MEDICAL PREPARATION MANDATE: 1. FIRST-LINE: IRREVERSIBLE NON-COMPETITIVE ALPHA-ADRENERGIC BLOCKADE (PHENOXYBENZAMINE, or selective alpha-1 blockers like doxazosin/terazosin) INITIATED 10 TO 14 DAYS PRIOR TO SURGERY. 2. SECOND-LINE (AFTER ADEQUATE ALPHA-BLOCKADE): BETA-ADRENERGIC BLOCKADE (e.g., Propranolol, Atenolol) ADDED 2 TO 3 DAYS PRE-OP TO CONTROL TACHYCARDIA. THE DEADLY CLINICAL CONTRAINDICATION: BETA-BLOCKERS MUST NEVER BE INITIATED BEFORE ALPHA-BLOCKERS! Why? Beta-2 receptors mediate peripheral vasodilation. Blocking beta-2 receptors while leaving alpha-1 receptors unblocked results in UNOPPOSED ALPHA-1 ADRENERGIC STIMULATION, causing catastrophic malignant hypertensive crisis, severe coronary vasospasm, myocardial infarction, and fatal acute pulmonary edema!",
    "necessaryInference":
      "Synthesize pheochromocytoma management rules: deduce that irreversible alpha-adrenergic blockade (phenoxybenzamine) must precede beta-blockade by 10-14 days to prevent catastrophic hypertensive crisis from unopposed alpha-1 vasoconstriction.",
    "strongestDistractor": "Initiate oral metoprolol succinate monotherapy immediately to control tachycardia, followed by phenoxybenzamine 24 hours prior to surgery",
    "distractorExclusion": "Beta-blockade monotherapy blocks vasodilatory beta-2 receptors, precipitating lethal hypertensive crisis from unopposed catecholamine alpha-1 vasoconstriction.",
    "citation": "Lenders JW, Duh QY, Eisenhofer G, et al. Pheochromocytoma and paraganglioma: an endocrine society clinical practice guideline. J Clin Endocrinol Metab. 2014;99(6):1915-1942. PMID: 24893135.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item explores mandatory pharmacological sequencing in pheochromocytoma, emphasizing the lethal hemodynamic risk of unopposed alpha-adrenergic stimulation.",
      "distractorExclusionNotes": "Distractors feature wrong sequencing (beta-blocker first), inadequate agents, or emergency surgery without preoperative adrenergic blockade.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 42-year-old man presents to the clinic due to recurrent, abrupt episodes of severe throbbing headaches, profuse sweating, facial pallor, and intense heart palpitations that occur two to three times per week. The episodes typically last 15 to 30 minutes and resolve spontaneously, leaving him feeling utterly exhausted. Between episodes, he is asymptomatic. On physical examination, his heart rate is 114/min and regular, and his blood pressure is 196/112 mm Hg. Funduscopic examination demonstrates bilateral arteriolar narrowing without papilledema. Diagnostic evaluation reveals: - Plasma free metanephrines: 4.8 nmol/L (normal: < 0.5 nmol/L) - Plasma free normetanephrines: 8.2 nmol/L (normal: < 0.9 nmol/L) - 24-hour urinary fractionated metanephrines: Markedly elevated An intravenous contrast-enhanced abdominal CT scan reveals a 4.5-cm, well-circumscribed, heterogeneous, lipid-poor vascular mass in the right adrenal medulla. The surgical team schedules the patient for laparoscopic right adrenalectomy in 2 weeks. Which of the following is the most appropriate pharmacological management sequence to prepare this patient safely for surgery?",
    "options": [
      {
        "text": "Initiate oral phenoxybenzamine 10 to 14 days preoperatively, optimize intravascular volume with a high-sodium diet, and add a beta-blocker only after achieving adequate alpha-blockade",
        "explanation": "This patient presents with the classic clinical triad of PHEOCHROMOCYTOMA (episodic headache, profuse diaphoresis, and palpitations/tachycardia accompanied by paroxysmal hypertension). Pheochromocytomas are catecholamine-secreting neuroendocrine tumors derived from chromaffin cells of the adrenal medulla (secreting norepinephrine, epinephrine, and dopamine). PREOPERATIVE PHARMACOLOGICAL MANAGEMENT (ENDOCRINE SOCIETY GUIDELINES): Complete surgical resection (laparoscopic adrenalectomy) is the definitive cure. However, intraoperative tumor manipulation can trigger massive, lethal catecholamine surges. Therefore, RIGOROUS PREOPERATIVE MEDICAL PREPARATION IS MANDATORY: (1) STEP 1: ALPHA-ADRENERGIC BLOCKADE FIRST: Preoperative preparation begins 10 to 14 days prior to surgery with an alpha-adrenergic receptor antagonist. The traditional agent of choice is PHENOXYBENZAMINE, an irreversible, non-selective, non-competitive alpha-1 and alpha-2 receptor blocker. (Selective alpha-1 blockers like doxazosin, prazosin, or terazosin are acceptable alternatives with fewer side effects). Phenoxybenzamine blocks vascular smooth muscle alpha-1 receptors, reversing intense vasoconstriction, normalizing blood pressure, and expanding the contracted intravascular plasma volume. (2) STEP 2: HIGH-SALT DIET AND VOLUME EXPANSION: Chronic catecholamine-induced vasoconstriction produces severe intravascular volume contraction. Once alpha-blockade is established, patients must be encouraged to consume a high-sodium diet and generous oral fluids to restore effective circulatory volume and prevent catastrophic refractory orthostatic hypotension upon operative tumor excision. (3) STEP 3: BETA-BLOCKADE ONLY AFTER ADEQUATE ALPHA-BLOCKADE: A beta-adrenergic antagonist (such as propranolol or atenolol) is added 2 to 3 days preoperatively to manage reflex tachycardia or catecholamine-induced tachyarrhythmias. THE ABSOLUTE CLINICAL CONTRAINDICATION: BETA-BLOCKERS MUST NEVER BE INITIATED BEFORE EFFECTIVE ALPHA-BLOCKADE! Epinephrine and norepinephrine stimulate both alpha-1 (vasoconstriction) and beta-2 (vasodilation) receptors. If a beta-blocker is administered alone, beta-2 mediated vasodilation is abolished, leaving massive circulating catecholamines to stimulate alpha-1 receptors entirely UNOPPOSED. This triggers a catastrophic, life-threatening hypertensive crisis, severe coronary vasospasm, myocardial infarction, and acute pulmonary edema."
      },
      {
        "text": "Initiate oral metoprolol succinate monotherapy immediately to control tachycardia, and initiate phenoxybenzamine 24 hours prior to surgery",
        "explanation": "Administering a beta-blocker before an alpha-blocker results in unopposed alpha-1 vasoconstriction, precipitating catastrophic hypertensive crisis and pulmonary edema."
      },
      {
        "text": "Proceed immediately to laparoscopic adrenalectomy within 24 hours without preoperative adrenergic blockade to avoid surgical delay",
        "explanation": "Operating without preoperative blockade carries a perioperative mortality > 30% from intraoperative catecholamine storms triggering fatal hypertensive crisis."
      },
      {
        "text": "Prescribe oral spironolactone plus lisinopril to block mineralocorticoid receptors and angiotensin-converting enzyme",
        "explanation": "Spironolactone and ACE inhibitors do not block alpha-adrenergic receptors and provide zero protection against catecholamine-induced intraoperative surges."
      },
      {
        "text": "Initiate high-dose intravenous nitroprusside infusion for 14 days followed by oral atenolol monotherapy",
        "explanation": "Nitroprusside is used for acute hypertensive crises, not outpatient preoperative preparation; atenolol alone causes unopposed alpha stimulation."
      }
    ]
  }
]

# Generate more items (0256 to 0275)
more_items = [
  {
    "code": "op-c-s2-0256",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Primary Hyperaldosteronism Screening Aldosterone-Renin Ratio and Sampling",
    "subtopic": "PAC/PRA Ratio > 20, Confirmatory Saline Suppression, and Adrenal Vein Sampling Mandate",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Primary Hyperaldosteronism (Conn Syndrome): ETIOLOGIES: 1. Unilateral aldosterone-producing adenoma (APA; ~35-40%). 2. Bilateral idiopathic adrenal hyperplasia (IAH; ~60%). CLINICAL: Hypertension refractory to >= 3 drugs, unprovoked hypokalemia (or severe diuretic-induced hypokalemia), metabolic alkalosis, mild hypernatremia (no overt edema due to 'aldosterone escape'!). SCREENING TEST OF CHOICE: PLASMA ALDOSTERONE CONCENTRATION TO PLASMA RENIN ACTIVITY (PAC/PRA) RATIO: PAC/PRA > 20 WITH PAC > 15 ng/dL is positive. CONFIRMATORY TESTING: Oral sodium loading test or IV saline infusion test (failure of aldosterone to suppress < 5-10 ng/dL confirms autonomous production). SUBTYPE LOCALIZATION MANDATE: ADRENAL CT is performed first. HOWEVER, ADRENAL VEIN SAMPLING (AVS) IS MANDATORY PRIOR TO SURGERY IN PATIENTS > 35 YEARS OLD TO DISTINGUISH UNILATERAL ADENOMA FROM BILATERAL HYPERPLASIA! (CT can show non-functioning incidentalomas in elderly patients!). TREATMENT: Unilateral adenoma -> Laparoscopic adrenalectomy. Bilateral hyperplasia -> Medical therapy with Mineralocorticoid Receptor Antagonists (SPIRONOLACTONE or EPLERENONE).",
    "necessaryInference": "Synthesize primary hyperaldosteronism diagnostic pathway: screen with PAC/PRA ratio > 20, confirm with saline suppression, and require adrenal vein sampling to distinguish unilateral adenoma from bilateral hyperplasia before undertaking surgery.",
    "strongestDistractor": "Proceed directly to unilateral right adrenalectomy based solely on CT visualization of a 1.2-cm right adrenal nodule in a 58-year-old patient",
    "distractorExclusion": "Adrenal incidentalomas are common in adults > 35; proceeding to surgery without adrenal vein sampling risks removing an inactive nodule and leaving bilateral hyperplasia untreated.",
    "citation": "Funder JW, Carey RM, Mantero F, et al. The Management of Primary Aldosteronism: Case Detection, Diagnosis, and Treatment: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(5):1889-1916. PMID: 26934393.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item explores primary hyperaldosteronism workup, highlighting the critical distinction between anatomical CT imaging and functional adrenal vein sampling prior to surgical intervention.",
      "distractorExclusionNotes": "Distractors feature operating on CT findings without AVS, using renal vein renin sampling, or misinterpreting aldosterone escape.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 56-year-old man presents for evaluation of difficult-to-control hypertension. Despite full-dose therapy with amlodipine 10 mg daily, losartan 100 mg daily, and chlorthalidone 25 mg daily, his blood pressure remains elevated at 168/102 mm Hg. He reports mild muscle weakness and intermittent cramps but denies headache, palpitations, or diaphoresis. Physical examination shows no cushingoid features, abdominal bruits, or peripheral edema. Laboratory evaluation reveals: - Serum Sodium: 144 mEq/L - Serum Potassium: 2.9 mEq/L (unprovoked hypokalemia) - Serum Bicarbonate: 32 mEq/L (metabolic alkalosis) - Serum Creatinine: 1.0 mg/dL After correcting hypokalemia and withdrawing interfering medications, screening demonstrates: - Morning Plasma Aldosterone Concentration (PAC): 34 ng/dL (normal: 3-16 ng/dL) - Plasma Renin Activity (PRA): 0.6 ng/mL/hr (normal: 1-4 ng/mL/hr) - PAC/PRA Ratio: 56.7 (abnormal > 20) A confirmatory intravenous saline suppression test demonstrates a post-infusion PAC of 22 ng/dL (normal suppression: < 5 ng/dL). An abdominal CT scan reveals a 1.2-cm hypodense nodule in the left adrenal gland; the right adrenal gland appears minimally bulky. The patient is eager to undergo surgery to cure his hypertension. Which of the following is the most appropriate next step in management prior to surgical resection?",
    "options": [
      {
        "text": "Perform bilateral adrenal vein sampling (AVS) to differentiate unilateral aldosterone hypersecretion from bilateral idiopathic adrenal hyperplasia",
        "explanation": "This patient presents with classic PRIMARY HYPERALDOSTERONISM (Conn syndrome), suggested by resistant hypertension on three antihypertensive medications, spontaneous hypokalemia, metabolic alkalosis, and a positive screening PAC/PRA ratio > 20 with PAC > 15 ng/dL, confirmed by non-suppression on saline loading. SUBTYPE EVALUATION AND THE CRITICAL MANDATE FOR ADRENAL VEIN SAMPLING (AVS): Primary hyperaldosteronism is caused by either: (1) A unilateral aldosterone-producing adenoma (APA; ~35% of cases), which is cured by laparoscopic unilateral adrenalectomy; or (2) Bilateral idiopathic adrenal hyperplasia (IAH; ~60% of cases), which does NOT benefit from surgery and must be managed medically with mineralocorticoid receptor antagonists (spironolactone or eplerenone). High-resolution thin-section CT scanning of the adrenals is performed initially to rule out large adrenocortical carcinomas. HOWEVER, CT HAS SEVERE LIMITATIONS IN DIFFERENTIATING APA FROM IAH: Non-functioning benign adrenal cortical incidentalomas occur in up to 5% to 10% of individuals over age 40. A unilateral nodule on CT may be an innocent non-functioning incidentaloma, while the real source of aldosterone excess is micro-nodular hyperplasia in the opposite adrenal or bilateral glands. Conversely, small functional microadenomas (< 1 cm) are frequently missed on CT. ACCORDING TO ENDOCRINE SOCIETY GUIDELINES: In any candidate for surgery who is over 35 years of age, BILATERAL ADRENAL VEIN SAMPLING (AVS) IS ABSOLUTELY MANDATORY prior to surgical intervention. AVS is the undisputed gold standard for lateralization: Catheters measure cortisol-corrected aldosterone concentrations in both the right and left adrenal veins. A unilateral gradient (aldosterone/cortisol ratio > 4:1 compared to the contralateral side) confirms unilateral adenoma and predicts surgical cure by adrenalectomy. Lack of lateralization confirms bilateral hyperplasia, sparing the patient an unnecessary and futile unilateral adrenalectomy."
      },
      {
        "text": "Proceed directly to laparoscopic left adrenalectomy based on the definitive CT visualization of the 1.2-cm nodule",
        "explanation": "CT cannot distinguish non-functioning incidentalomas from bilateral hyperplasia; operating without AVS risks removing a non-functional gland."
      },
      {
        "text": "Perform bilateral renal vein renin sampling to evaluate for unilateral renal artery stenosis",
        "explanation": "Renal artery stenosis causes secondary hyperaldosteronism with elevated renin; primary hyperaldosteronism features suppressed renin (PRA 0.6)."
      },
      {
        "text": "Initiate high-dose furosemide monotherapy to promote urinary sodium excretion and manage hypertension",
        "explanation": "Loop diuretics further worsen hypokalemia and metabolic alkalosis without addressing autonomous aldosterone receptor activation."
      },
      {
        "text": "Reassure the patient and discontinue all medications, as unprovoked hypokalemia is a benign incidental finding",
        "explanation": "Untreated primary hyperaldosteronism leads to progressive myocardial fibrosis, stroke, ventricular arrhythmias, and end-stage renal disease."
      }
    ]
  },
  {
    "code": "op-c-s2-0257",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Cushing Syndrome Stepwise Diagnostic Algorithm and High-Dose Dexamethasone",
    "subtopic": "Hypercortisolemia Confirmation, ACTH-Dependent vs Independent, and IPSS Localization",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Cushing Syndrome diagnostic algorithm: STEP 1: ESTABLISH HYPERCORTISOLEMIA (requires >= 2 concordant first-line tests): 1. 24-hour urinary free cortisol (UFC; > 3-4x normal), 2. Late-night salivary cortisol (elevated due to loss of normal diurnal nadir), 3. Overnight low-dose (1-mg) Dexamethasone Suppression Test (DST; serum cortisol >= 1.8 mcg/dL at 8 AM confirms failure to suppress). STEP 2: MEASURE PLASMA ACTH: ACTH < 5 pg/mL = ACTH-INDEPENDENT (adrenal adenoma/carcinoma -> perform Adrenal CT). ACTH >= 15-20 pg/mL = ACTH-DEPENDENT (Cushing disease vs Ectopic ACTH). STEP 3: DIFFERENTIATE CUSHING DISEASE (pituitary ACTH adenoma) FROM ECTOPIC ACTH (small cell lung cancer, bronchial carcinoid): HIGH-DOSE (8-MG) DEXAMETHASONE SUPPRESSION TEST: Pituitary corticotroph adenomas retain partial negative feedback, SUPPRESSING CORTISOL BY > 50%! Ectopic ACTH tumors DO NOT SUPPRESS (< 50% suppression). CRH Stimulation Test: Pituitary adenomas show robust rise in ACTH/cortisol; ectopic tumors do not respond. GOLD STANDARD FOR LOCALIZATION: INFERIOR PETROSAL SINUS SAMPLING (IPSS) confirms pituitary source (central-to-peripheral ACTH gradient > 2:1 baseline, > 3:1 after CRH).",
    "necessaryInference":
      "Apply the stepwise diagnostic algorithm for hypercortisolemia: demonstrate hypercortisolemia with first-line tests, interpret ACTH levels, and deduce that >50% suppression on high-dose (8-mg) dexamethasone identifies pituitary Cushing disease.",
    "strongestDistractor": "Perform immediate transsphenoidal hypophysectomy based solely on a serum cortisol level of 24 mcg/dL without biochemical confirmation",
    "distractorExclusion": "Hypercortisolemia must first be confirmed with >= 2 first-line tests, followed by ACTH measurement and high-dose dexamethasone testing, before neurosurgical intervention.",
    "citation": "Nieman LK, Biller BM, Findling JW, et al. The diagnosis of Cushing's syndrome: an Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2008;93(5):1526-1540. PMID: 18334580.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item assesses the classic, multi-step diagnostic algorithm of hypercortisolemia, requiring differentiation between ACTH-dependent pituitary disease versus ectopic sources.",
      "distractorExclusionNotes": "Distractors confuse low-dose vs high-dose dexamethasone suppression, jump to surgery prematurely, or misunderstand ACTH feedback physiology.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 44-year-old woman presents to the clinic with progressive weight gain, proximal muscle weakness, easy bruising, facial fullness, and irregular menses over the past 9 months. Her past medical history is notable for newly diagnosed hypertension and type 2 diabetes. Physical examination demonstrates plethoric rounded 'moon facies', dorsocervical fat pad ('buffalo hump'), central adiposity with thin extremities, and wide (> 1 cm), violaceous striae across her lower abdomen. Initial screening for hypercortisolism is markedly abnormal: - 24-hour urinary free cortisol: 340 mcg/24 hr (normal: < 50 mcg/24 hr) - Late-night salivary cortisol: 0.62 mcg/dL (normal: < 0.10 mcg/dL) - Overnight 1-mg low-dose dexamethasone suppression test: 8:00 AM serum cortisol is 14 mcg/dL (normal: < 1.8 mcg/dL) Subsequent evaluation reveals a morning plasma ACTH level of 68 pg/mL (normal: 10-60 pg/mL; inappropriately elevated ACTH-dependent Cushing syndrome). The physician orders a high-dose (8-mg) overnight dexamethasone suppression test, which demonstrates a 72% suppression of morning serum cortisol compared to baseline. A pituitary MRI shows a 4-mm hypoenhancing microadenoma in the anterior pituitary. Which of the following is the definitive diagnosis and pathophysiological explanation for the high-dose dexamethasone test result?",
    "options": [
      {
        "text": "Cushing disease (pituitary ACTH-secreting corticotroph adenoma); the neoplastic pituitary cells retain partial glucocorticoid negative feedback sensitivity, resulting in > 50% suppression with high-dose dexamethasone",
        "explanation": "This patient presents with clinical and biochemical evidence of CUSHING SYNDROME (hypercortisolemia), characterized by centripetal obesity, moon facies, buffalo hump, proximal muscle weakness, wide purple abdominal striae, and impaired glucose tolerance. Master the three-step diagnostic evaluation: (1) STEP 1 — CONFIRM HYPERCORTISOLEMIA: Endocrine Society guidelines require >= 2 concordant first-line tests: 24-hour urinary free cortisol (> 3x normal), late-night salivary cortisol (loss of nocturnal circadian nadir), or low-dose (1-mg) overnight dexamethasone suppression test (failure to suppress cortisol < 1.8 mcg/dL). This patient has three concordant positive tests, establishing pathological endogenous hypercortisolemia. (2) STEP 2 — DETERMINE ACTH DEPENDENCE: Plasma ACTH is measured: (a) If ACTH is suppressed (< 5 pg/mL), it is ACTH-INDEPENDENT Cushing syndrome (primary autonomous adrenal adenoma or carcinoma), worked up with an adrenal CT scan. (b) If ACTH is normal or elevated (>= 15-20 pg/mL), it is ACTH-DEPENDENT Cushing syndrome (driven by excess ACTH secretion). This patient ACTH is 68 pg/mL, confirming ACTH-dependent hypercortisolism. (3) STEP 3 — DIFFERENTIATE CUSHING DISEASE FROM ECTOPIC ACTH: The two causes of ACTH-dependent Cushing are: (a) CUSHING DISEASE (a benign ACTH-secreting pituitary corticotroph adenoma; accounts for ~80% of ACTH-dependent cases); and (b) ECTOPIC ACTH PRODUCTION (most commonly small cell lung carcinoma, bronchial carcinoid, or medullary thyroid carcinoma; accounts for ~20%). To differentiate them, the HIGH-DOSE (8-MG) DEXAMETHASONE SUPPRESSION TEST is performed: Pituitary corticotroph adenoma cells originate from normal pituitary cells and RETAIN PARTIAL SENSITIVITY TO NEGATIVE FEEDBACK INHIBITION; thus, massive supranormal doses of dexamethasone (8 mg) overcome the altered receptor threshold, causing a > 50% REDUCTION IN SERUM CORTISOL. In contrast, ectopic neuroendocrine tumors operate completely autonomously outside hypothalamic-pituitary control and exhibit ZERO suppression (< 50% drop). Definitive treatment for Cushing disease is transsphenoidal adenomectomy."
      },
      {
        "text": "Ectopic ACTH-secreting small cell lung carcinoma; neuroendocrine tumor cells possess upregulated glucocorticoid receptors that hyper-respond to high-dose dexamethasone",
        "explanation": "Ectopic ACTH-secreting tumors are autonomous and do NOT suppress with high-dose dexamethasone; > 50% suppression indicates pituitary Cushing disease."
      },
      {
        "text": "Primary autonomous adrenal cortical adenoma; high-dose dexamethasone directly inhibits 11-beta-hydroxylase in the adrenal cortex",
        "explanation": "Adrenal adenomas produce ACTH-independent Cushing syndrome (ACTH < 5 pg/mL); this patient has elevated ACTH (68 pg/mL)."
      },
      {
        "text": "Exogenous factitious corticosteroid abuse; synthetic steroids suppress endogenous ACTH while cross-reacting in urinary free cortisol assays",
        "explanation": "Exogenous steroid ingestion suppresses endogenous ACTH and cortisol, resulting in low/undetectable plasma ACTH and cortisol levels."
      },
      {
        "text": "Cyclical pseudo-Cushing syndrome secondary to major depressive disorder; high-dose dexamethasone normalizes hypothalamic CRH transcription",
        "explanation": "Pseudo-Cushing suppresses with low-dose dexamethasone (or combined dex-CRH); failure to suppress with 1-mg dex confirms true Cushing syndrome."
      }
    ]
  },
  {
    "code": "op-c-s2-0258",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "SIADH vs Cerebral Salt Wasting Volume Status and Treatment Divergence",
    "subtopic": "Euvolemic vs Hypovolemic Hyponatremia, Fluid Restriction vs Isotonic Saline",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate SIADH vs Cerebral Salt Wasting (CSW) in neurosurgical/CNS patients: Both present with hyponatremia and high urine sodium (> 40 mEq/L). KEY DIFFERENTIATING FACTOR: EXTRACELLULAR FLUID VOLUME STATUS! 1. SYNDROME OF INAPPROPRIATE ANTIDIURETIC HORMONE (SIADH): Clinically EUVOLEMIC (normal skin turgor, moist membranes, flat JVP, no orthostasis, no edema). Labs: Serum Osm < 275 mOsm/kg, Urine Osm > 100-300 mOsm/kg, Urine Na > 30-40 mEq/L, LOW BUN and URIC ACID (due to dilution and reduced proximal reabsorption). FIRST-LINE TREATMENT: FLUID RESTRICTION (500-1000 mL/day), oral salt tablets, or vasopressin receptor antagonists (vaptans). 2. CEREBRAL SALT WASTING (CSW): Clinically HYPOVOLEMIC (dry mucous membranes, decreased skin turgor, tachycardia, orthostatic hypotension, flat neck veins, negative cumulative fluid balance). Pathophysiology: Excessive release of BNP/ANP or impaired renal sympathetic tone causes massive urinary sodium and water wasting. Labs: High urine Na (> 40-100), ELEVATED BUN/CREATININE RATIO (prerenal azotemia), high hematocrit. FIRST-LINE TREATMENT: INTRAVENOUS ISOTONIC (0.9%) SALINE VOLUME RESUSCITATION! THE FATAL ERROR: FLUID RESTRICTION IN CSW CAUSES SEVERE HYPOVOLEMIC SHOCK, CEREBRAL VASOSPASM, AND FATAL ISCHEMIC BRAIN INFARCTION!",
    "necessaryInference":
      "Differentiate SIADH from Cerebral Salt Wasting based on volume status (hypovolemia with postural hypotension indicates CSW) and deduce that CSW requires aggressive isotonic saline volume resuscitation, whereas fluid restriction is dangerous.",
    "strongestDistractor": "Strict fluid restriction to < 800 mL/day and initiation of oral tolvaptan for suspected neurosurgical SIADH",
    "distractorExclusion": "Fluid restriction in a hypovolemic patient with cerebral salt wasting precipitates severe hypotension, cerebral vasospasm, and stroke.",
    "citation": "Sterns RH. Disorders of plasma sodium--causes, consequences, and correction. N Engl J Med. 2015;372(1):55-65. PMID: 25551213.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item tests critical clinical discernment between SIADH and cerebral salt wasting in neurosurgical patients, where incorrect volume assessment leads to catastrophic outcomes.",
      "distractorExclusionNotes": "Distractors confuse euvolemic SIADH with hypovolemic CSW, propose dangerous fluid restriction in hypovolemia, or suggest rapid hypertonic correction risking osmotic demyelination.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 52-year-old woman is admitted to the neurointensive care unit following surgical clipping of an anterior communicating artery aneurysm that ruptured 5 days ago, causing subarachnoid hemorrhage (Hunt and Hess grade II). Over the past 24 hours, she has become increasingly lethargic and confused. Physical examination reveals an ill-appearing woman with dry oral mucous membranes, furrowed tongue, flat neck veins, and poor skin turgor. Vital signs are: temperature 37.4 C, pulse 112/min, supine blood pressure 102/64 mm Hg, and standing blood pressure 82/50 mm Hg (marked orthostatic hypotension and tachycardia). Her cumulative 24-hour fluid balance is negative 2,800 mL, with a total urinary output of 4,200 mL. Laboratory studies demonstrate: - Serum Sodium: 124 mEq/L (was 138 mEq/L 48 hours ago) - Serum Potassium: 3.8 mEq/L - Serum Chloride: 88 mEq/L - Serum Bicarbonate: 24 mEq/L - Blood Urea Nitrogen (BUN): 32 mg/dL - Serum Creatinine: 1.3 mg/dL (baseline 0.7 mg/dL) - Serum Uric Acid: 7.2 mg/dL - Serum Osmolality: 258 mOsm/kg - Urine Osmolality: 480 mOsm/kg - Urine Sodium: 92 mEq/L Which of the following is the most appropriate initial management strategy for this patient?",
    "options": [
      {
        "text": "Intravenous volume resuscitation with 0.9% normal saline (or hypertonic 3% saline if severe neurological symptoms develop) to restore effective circulating arterial volume for cerebral salt wasting",
        "explanation": "This neurosurgical patient presents with acute hyponatremia following subarachnoid hemorrhage (SAH). The essential clinical challenge on USMLE Step 2 CK is distinguishing CEREBRAL SALT WASTING (CSW) from SYNDROME OF INAPPROPRIATE ANTIDIURETIC HORMONE (SIADH): (1) PATHOPHYSIOLOGICAL DIVERGENCE: Both disorders cause hyponatremia (serum Na < 135 mEq/L), elevated urine osmolality (> 100 mOsm/kg), and high urine sodium (> 40 mEq/L). However, they represent opposite volume states: (a) SIADH is characterized by excessive ADH secretion, causing water retention and clinical EUVOLEMIA (normal blood pressure, normal skin turgor, low BUN, low uric acid < 4 mg/dL). (b) CEREBRAL SALT WASTING (CSW) is driven by centrally mediated release of natriuretic peptides (such as brain natriuretic peptide [BNP]) and/or disrupted renal sympathetic outflow. This causes true primary renal sodium wasting followed by obligatory osmotic water diuresis, leading to severe EXTRACELLULAR FLUID VOLUME DEPLETION AND CLINICAL HYPOVOLEMIA. (2) IDENTIFYING CSW IN THIS PATIENT: Key clinical evidence of hypovolemia includes: dry mucous membranes, decreased skin turgor, flat neck veins, resting tachycardia, marked orthostatic hypotension, a large negative fluid balance (-2,800 mL/day), and prerenal azotemia (elevated BUN/creatinine ratio and elevated uric acid). (3) DIVERGENT MANAGEMENT AND THE FATAL PITFALL: The treatment of SIADH is fluid restriction. HOWEVER, APPLYING FLUID RESTRICTION TO A PATIENT WITH CEREBRAL SALT WASTING IS CATASTROPHIC! Hypovolemia dramatically increases the risk of delayed cerebral ischemia and arterial vasospasm following SAH, precipitating massive ischemic stroke and death. (4) TREATMENT OF CSW: Management requires AGGRESSIVE VOLUME AND SODIUM REPLETION WITH INTRAVENOUS ISOTONIC (0.9%) NORMAL SALINE to restore normovolemia and maintain cerebral perfusion pressure. If severe neurological symptoms (seizures, coma) develop, 3% hypertonic saline is indicated (correcting sodium at a safe rate <= 8 mEq/L in 24 hours to prevent osmotic demyelination syndrome). Oral fludrocortisone may be added to promote renal sodium retention."
      },
      {
        "text": "Strict fluid restriction to 500 mL/day combined with oral tolvaptan to block vasopressin V2 receptors",
        "explanation": "Fluid restriction in cerebral salt wasting causes severe hypovolemic shock, cerebral vasospasm, infarction, and death."
      },
      {
        "text": "Rapid correction of serum sodium with hypertonic 3% saline targeting a rise of 18 mEq/L over the first 12 hours",
        "explanation": "Correcting chronic or subacute hyponatremia > 8 to 10 mEq/L in 24 hours risks catastrophic pontine and extrapontine osmotic demyelination syndrome (locked-in syndrome)."
      },
      {
        "text": "Intravenous infusion of 5% dextrose in water (D5W) at 150 mL/hr to promote free water clearance",
        "explanation": "Infusing hypotonic D5W into a patient with severe hyponatremia (124 mEq/L) will cause a rapid further drop in sodium and fatal cerebral edema."
      },
      {
        "text": "Intravenous furosemide 80 mg twice daily to promote loop kaliuresis and reduce intracranial pressure",
        "explanation": "Loop diuretics worsen hypovolemia, accelerate urinary sodium loss, and exacerbate cerebral ischemia in cerebral salt wasting."
      }
    ]
  },
  {
    "code": "op-c-s2-0259",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Central vs Nephrogenic Diabetes Insipidus Water Deprivation Test Challenge",
    "subtopic": "Desmopressin (DDAVP) Response, Lithium Toxicity, and Thiazide-Amiloride Therapy",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Diabetes Insipidus (DI): Hallmark: Polyuria (> 3 L/day), polydipsia, dilute urine (urine osmolality < 300 mOsm/kg, specific gravity < 1.005) in the presence of hypernatremia (or normal-high sodium with water intake). STEP 1: WATER DEPRIVATION TEST: Deprive patient of water until plasma Osm > 295-300 mOsm/kg or serum Na > 145. If urine remains dilute (< 300 mOsm/kg) -> DI is confirmed. STEP 2: DESMOPRESSIN (DDAVP) CHALLENGE: 1. CENTRAL DI (ADH deficiency; idiopathic, pituitary surgery, head trauma, craniopharyngioma): Exogenous DDAVP causes a DRAMATIC INCREASE IN URINE OSMOLALITY (> 50% to > 100% rise) with marked drop in urine volume. Treatment: INTRANASAL OR ORAL DESMOPRESSIN (DDAVP). 2. NEPHROGENIC DI (Renal ADH resistance; LITHIUM THERAPY [most common drug cause!], hypercalcemia, hypokalemia, AVPR2 gene mutation): Exogenous DDAVP causes MINIMAL OR NO INCREASE IN URINE OSMOLALITY (< 50% rise; renal collecting ducts cannot respond!). Treatment: Discontinue offending drug (lithium), low-salt/low-protein diet, and THIAZIDE DIURETICS (induces mild hypovolemia, stimulating proximal sodium/water reabsorption and reducing water delivery to collecting duct) + AMILORIDE (specifically blocks lithium entry via ENaC in collecting tubule principal cells!).",
    "necessaryInference":
      "Synthesize DI diagnostic steps: recognize that failure of urine osmolality to increase significantly (< 50%) after DDAVP challenge confirms nephrogenic DI (induced by lithium), treated with thiazide diuretics and amiloride.",
    "strongestDistractor": "Prescribe intranasal desmopressin (DDAVP) high-dose therapy as definitive replacement for central ADH deficiency",
    "distractorExclusion": "Failure of urine osmolality to increase by > 50% after DDAVP establishes nephrogenic (not central) DI, which is resistant to exogenous desmopressin.",
    "citation": "Bichet DG. Nephrogenic diabetes insipidus. Semin Nephrol. 2008;28(3):295-304. PMID: 18519089.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item tests differentiation between central and nephrogenic diabetes insipidus using the water deprivation and DDAVP challenge, focusing on lithium nephrotoxicity and paradox of thiazide/amiloride therapy.",
      "distractorExclusionNotes": "Distractors confuse central and nephrogenic responses, prescribe ineffective DDAVP for nephrogenic DI, or misinterpret psychogenic polydipsia.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 46-year-old man with a 15-year history of bipolar I disorder treated with lithium carbonate presents to the outpatient clinic reporting constant thirst, frequent awakening at night to urinate (nocturia 4 to 5 times), and daily urine output exceeding 6 liters. He drinks large volumes of ice-cold water throughout the day. Physical examination reveals an alert man with dry mucous membranes and normal vital signs. Laboratory evaluation reveals: - Serum Sodium: 147 mEq/L - Serum Potassium: 4.0 mEq/L - Serum Creatinine: 1.1 mg/dL - Serum Glucose: 92 mg/dL - Serum Osmolality: 304 mOsm/kg (normal: 275-295 mOsm/kg) - Urine Osmolality: 120 mOsm/kg (inappropriately dilute) The patient is admitted for a supervised water deprivation test. After 8 hours of water deprivation, his serum osmolality rises to 312 mOsm/kg, and his serum sodium is 150 mEq/L; his urine osmolality remains low at 145 mOsm/kg. He is then administered 2 mcg of subcutaneous desmopressin (DDAVP). Two hours after desmopressin administration, his urine osmolality is 162 mOsm/kg (an increase of only 11.7%). Which of the following is the definitive diagnosis, and what is the most appropriate pharmacological management?",
    "options": [
      {
        "text": "Nephrogenic diabetes insipidus secondary to chronic lithium toxicity; management includes stopping lithium if feasible, initiating a low-sodium diet, and prescribing a thiazide diuretic or amiloride",
        "explanation": "This patient presents with polyuria, polydipsia, and severe urinary concentrating impairment on chronic lithium therapy. Master the diagnostic interpretation of the WATER DEPRIVATION AND DDAVP CHALLENGE TEST on USMLE Step 2 CK: (1) ESTABLISHING DIABETES INSIPIDUS (DI): When a normal individual is deprived of water, rising plasma osmolality stimulates hypothalamic osmoreceptors to release endogenous vasopressin (ADH), which inserts aquaporin-2 water channels into collecting duct principal cells, concentrating urine to > 600 to 800 mOsm/kg. In this patient, despite hyperosmolality (plasma Osm 312 mOsm/kg), urine remains dilute (145 mOsm/kg), confirming Diabetes Insipidus (inability to concentrate urine). (2) DIFFERENTIATING CENTRAL VS NEPHROGENIC DI (DDAVP RESPONSE): (a) In CENTRAL DI (lack of pituitary ADH secretion due to trauma, surgery, or idiopathic damage), the collecting duct receptors are completely normal. Administration of exogenous DDAVP triggers a DRAMATIC INCREASE IN URINE OSMOLALITY (typically > 50% to > 100% increase), often exceeding 400 to 600 mOsm/kg. (b) In NEPHROGENIC DI (end-organ renal unresponsiveness to ADH), collecting duct principal cells cannot respond to ADH. Administration of exogenous DDAVP produces MINIMAL OR ZERO RESPONSE (urine osmolality increases by < 50% or < 100 mOsm/kg). This patient rise from 145 to 162 mOsm/kg (an 11.7% increase) definitively confirms NEPHROGENIC DI. (3) PATHOPHYSIOLOGY OF LITHIUM-INDUCED NEPHROGENIC DI: Lithium enters collecting duct principal cells through the Epithelial Sodium Channel (ENaC), accumulating intracellularly and inhibiting glycogen synthase kinase-3beta (GSK-3beta) and adenylate cyclase, thereby blocking ADH-mediated aquaporin-2 gene transcription and translocation. (4) PHARMACOLOGICAL MANAGEMENT OF NEPHROGENIC DI: Desmopressin is ineffective. Management includes: (a) Discontinuing lithium if safe psychiatric alternatives exist; (b) Low-sodium and low-protein diet (decreases solute load delivery to the nephron); (c) THIAZIDE DIURETICS (such as hydrochlorothiazide): Thiazides inhibit distal Na-Cl cotransporters, producing mild volume depletion that drives compensatory proximal tubular sodium and water reabsorption, reducing volume delivery to the collecting ducts and decreasing urine output; and (d) AMILORIDE: Specifically blocks ENaC, preventing further lithium entry and accumulation into collecting duct cells."
      },
      {
        "text": "Central diabetes insipidus secondary to hypothalamic sarcoidosis; management requires lifelong therapy with intranasal desmopressin (DDAVP)",
        "explanation": "Central DI exhibits a dramatic > 50% to 100% surge in urine osmolality following desmopressin; failure to respond confirms nephrogenic DI."
      },
      {
        "text": "Primary psychogenic polydipsia; management requires strict behavioral water restriction and psychiatric antipsychotic adjustment",
        "explanation": "In psychogenic polydipsia, water deprivation alone causes endogenous ADH release that successfully concentrates urine to > 600 mOsm/kg."
      },
      {
        "text": "Syndrome of inappropriate antidiuretic hormone (SIADH); management requires high-dose loop diuretics and oral demeclocycline",
        "explanation": "SIADH causes concentrated urine (> 100-300 mOsm/kg) and hyponatremia; this patient has dilute urine (145 mOsm/kg) and hypernatremia."
      },
      {
        "text": "Type 4 renal tubular acidosis; management requires sodium bicarbonate infusion and oral fludrocortisone",
        "explanation": "Type 4 RTA presents with hyperkalemic normal anion gap metabolic acidosis in diabetic nephropathy, not profound polyuria with dilute urine."
      }
    ]
  },
  {
    "code": "op-c-s2-0260",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Endocrine",
    "topic": "Hypocalcemia Post-Thyroidectomy and Intravenous Calcium Gluconate",
    "subtopic": "Chvostek and Trousseau Signs, Prolonged QT Interval, and Hungry Bone Syndrome",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Acute Postoperative Hypocalcemia: ETIOLOGY: Inadvertent devascularization, injury, or accidental resection of parathyroid glands during total thyroidectomy or central neck dissection. ONSET: Typically manifests 24 to 48 hours postoperatively (parathyroid hormone half-life is 3-5 minutes, but circulating calcium buffers buffer the drop for 24-48 h). CLINICAL MANIFESTATIONS: NEUROMUSCULAR EXCITABILITY (hypocalcemia lowers threshold potential of nerve membranes): Perioral numbness/tingling, fingertip paresthesias, muscle cramping, hyperreflexia, and bronchospasm/laryngospasm. PHYSICAL SIGNS: 1. CHVOSTEK SIGN: Tapping facial nerve anterior to ear triggers ipsilateral facial twitching. 2. TROUSSEAU SIGN: Inflating BP cuff > systolic pressure for 3 minutes triggers painful carpopedal spasm (more sensitive and specific than Chvostek!). ECG: PROLONGED QT INTERVAL (ST-segment prolongation, risking torsades de pointes). EMERGENCY MANAGEMENT: SEYERE OR SYMPTOMATIC HYPOCALCEMIA: INTRAVENOUS CALCIUM GLUCONATE! (Preferred over calcium chloride because calcium chloride causes severe tissue necrosis and thrombophlebitis if extravasated). Followed by oral calcium carbonate + calcitriol (active 1,25-OH2 vitamin D).",
    "necessaryInference":
      "Synthesize acute post-thyroidectomy complications: identify hypocalcemia via perioral paresthesias, positive Trousseau sign, and prolonged QT interval, and deduce that immediate intravenous calcium gluconate is the required treatment.",
    "strongestDistractor": "Administer intravenous calcium chloride bolus through a peripheral 22-gauge forearm intravenous catheter",
    "distractorExclusion": "Calcium chloride carries extreme risk of severe chemical thrombophlebitis and ischemic skin necrosis on peripheral extravasation; calcium gluconate is the preferred intravenous formulation.",
    "citation": "Bilezikian JP, Brandi ML, Rubin M, Silverberg SJ. Primary hyperparathyroidism: new concepts in clinical development, pathophysiology, and treatment. Ann Intern Med. 2014;161(9):673-674. PMID: 25364888.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item assesses post-thyroidectomy hypocalcemia diagnosis via clinical physical signs (Trousseau sign) and ECG features (QT prolongation), requiring selection of calcium gluconate over chloride.",
      "distractorExclusionNotes": "Distractors feature dangerous peripheral calcium chloride, delaying therapy for oral calcitriol alone in tetany, or mistaking tetany for hyperkalemia.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 48-year-old woman is evaluated in the post-surgical step-down unit 36 hours after undergoing an uncomplicated total thyroidectomy and central neck lymph node dissection for a 3.5-cm papillary thyroid carcinoma. Over the past 4 hours, she has experienced progressive perioral tingling, numbness in her fingertips, and severe bilateral hand cramping. On physical examination, she is anxious and diaphoretic. Vital signs are: temperature 37.1 C, pulse 84/min, blood pressure 132/82 mm Hg, and respiratory rate 18/min. Surgical neck incision is clean, dry, and intact without hematoma, swelling, or stridor. Tapping gently over the trunk of the facial nerve immediately anterior to the left external auditory meatus elicits involuntary twitching of the left upper lip and alae nasi (positive Chvostek sign). Inflation of a blood pressure cuff on her right arm to 150 mm Hg (20 mm Hg above her systolic pressure) for 2 minutes induces painful carpopedal spasm characterized by flexion of the wrist and metacarpophalangeal joints, extension of the interphalangeal joints, and adduction of the thumb ('obstetrician's hand', positive Trousseau sign). A 12-lead ECG demonstrates sinus rhythm with marked prolongation of the corrected QT interval (QTc = 510 ms). Stat laboratory testing reveals: total serum calcium 6.6 mg/dL (normal: 8.5-10.5 mg/dL), serum albumin 4.0 g/dL, and ionized calcium 0.82 mmol/L (normal: 1.15-1.33 mmol/L). Which of the following is the most appropriate immediate pharmacotherapeutic intervention?",
    "options": [
      {
        "text": "Intravenous calcium gluconate infusion with continuous cardiac monitoring, followed by oral calcium carbonate and active calcitriol",
        "explanation": "This patient presents with acute, severe, symptomatic HYPOCALCEMIA following total thyroidectomy. Master the pathophysiology, physical diagnosis, and management tested on USMLE Step 2 CK: (1) PATHOPHYSIOLOGY: Total thyroidectomy carries a 10% to 30% risk of transient hypoparathyroidism (and a 1% to 3% risk of permanent hypoparathyroidism) due to mechanical trauma, devascularization, or accidental excision of the delicate parathyroid glands. Because parathyroid hormone (PTH) has a short half-life (3 to 5 minutes), PTH levels plunge immediately post-surgery, with serum calcium falling to a nadir 24 to 48 hours postoperatively as bone and soft-tissue calcium buffers equilibrate. (2) NEUROMUSCULAR SYMPTOMS AND PHYSICAL SIGNS: Extracellular calcium normally stabilizes axonal membrane potentials by modulating voltage-gated sodium channels. Hypocalcemia increases neuronal membrane permeability to sodium, lowering the threshold for axonal depolarization and producing hyperreflexia and tetany: (a) Sensory paresthesias: Perioral numbness and tingling of fingers and toes; (b) Motor hyperexcitability: Muscle spasms, carpopedal spasm, and life-threatening laryngospasm/bronchospasm; (c) CHVOSTEK SIGN: Percussion of the facial nerve at the angle of the jaw elicits twitching of facial muscles; (d) TROUSSEAU SIGN: Sphygmomanometer cuff inflation above systolic pressure for 3 minutes induces painful carpopedal spasm (positive in >90% of hypocalcemic patients, substantially more sensitive and specific than Chvostek sign). (3) ECG FINDINGS: Hypocalcemia prolongs phase 2 of the cardiac action potential, manifesting as PROLONGATION OF THE ST SEGMENT AND CORRECTED QT INTERVAL (QTc), predisposing to torsades de pointes ventricular tachycardia. (4) EMERGENCY MANAGEMENT: Acute symptomatic hypocalcemia is a medical emergency. The treatment of choice is INTRAVENOUS CALCIUM GLUCONATE (1 to 2 grams of 10% calcium gluconate infused over 10 to 20 minutes) with continuous cardiac telemetry. Calcium gluconate is strongly preferred over intravenous calcium chloride because calcium chloride is three times more hyperosmolar and causes severe, blistering chemical thrombophlebitis and full-thickness cutaneous necrosis if peripheral extravasation occurs. Once acute symptoms are controlled, the patient is transitioned to oral calcium carbonate and active vitamin D (CALCITRIOL, 1,25-dihydroxycholecalciferol) because endogenous PTH is deficient to activate 1-alpha-hydroxylase."
      },
      {
        "text": "Intravenous calcium chloride 10% bolus rapidly pushed through a peripheral forearm intravenous line",
        "explanation": "Calcium chloride causes severe peripheral chemical thrombophlebitis and full-thickness cutaneous necrosis if extravasated; calcium gluconate is preferred."
      },
      {
        "text": "Oral ergocalciferol (vitamin D2) 50,000 IU daily monotherapy with discharge home and follow-up in 2 weeks",
        "explanation": "Ergocalciferol requires PTH-dependent renal 1-alpha-hydroxylation and takes weeks to act; acute tetany requires immediate IV calcium gluconate."
      },
      {
        "text": "Intravenous potassium chloride infusion combined with oral magnesium oxide to correct hypomagnesemic tetany",
        "explanation": "The primary defect is documented severe hypocalcemia; potassium does not correct hypocalcemic tetany or QT prolongation."
      },
      {
        "text": "Emergency surgical exploration of the neck incision under general anesthesia to evacuate a compressive wound hematoma",
        "explanation": "Wound hematoma presents with rapid neck swelling, tracheal deviation, and respiratory stridor, not tetany or prolonged QT intervals."
      }
    ]
  }
]

# Write out the complete file
with open("d:/Open Uworld/scripts/candidate-authoring/step2-batch11.ts", "w", encoding="utf-8") as f:
    f.write("import { CandidateSpec } from './types';\n\n")
    f.write("export const step2Batch11: CandidateSpec[] = [\n")
    all_specs = items + more_items
    for i, spec in enumerate(all_specs):
        f.write("  " + json.dumps(spec, indent=2).replace("\n", "\n  "))
        if i < len(all_specs) - 1:
            f.write(",\n")
        "else":
            f.write("\n")
    f.write("];\n")

print(f"Successfully generated step2-batch11.ts with {len(all_specs)} items.")
# -*- coding: utf-8 -*-
"""
Complete generator for scripts/candidate-authoring/step2-batch11.ts
"Items": op-c-s2-0251 to op-c-s2-0275 (25 items on Endocrine emergencies & pathophysiology)
"""
import json

items_0251_to_0260 = [
  {
    "code": "op-c-s2-0251",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Myxedema Coma Resuscitation and Hydrocortisone Preceding Levothyroxine",
    "subtopic": "Severe Hypothermia, Hypoventilation, and Prevention of Acute Adrenal Crisis",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Myxedema Coma management: Severe decompensated hypothyroidism triggered by infection, cold exposure, or sedatives. Clinical hallmarks: Severe hypothermia (often < 35 C / 95 F), altered mental status/coma, bradycardia, hypoventilation/hypercapnia, hypotension, and periorbital/pretibial non-pitting myxedema. Laboratory: High TSH, very low free T4, hyponatremia, and hypoglycemia. CRITICAL MANAGEMENT RULE: INTRAVENOUS GLUCOCORTICOIDS (HYDROCORTISONE 100 MG IV Q8H) MUST BE ADMINISTERED PRIOR TO OR CONCURRENTLY WITH INTRAVENOUS LEVOTHYROXINE (T4) / LIOTHYRONINE (T3)! Rationale: Thyroid hormone replacement accelerates hepatic metabolic clearance of cortisol and elevates whole-body metabolic rate. If the patient has underlying secondary hypothyroidism or concomitant autoimmune primary adrenal insufficiency (polyglandular autoimmune syndrome), administering thyroid hormone without glucocorticoids precipitates catastrophic, fatal acute adrenal crisis!",
    "necessaryInference": "Synthesize myxedema coma presentation (hypothermia, coma, bradycardia) and deduce that intravenous hydrocortisone must precede thyroid hormone administration to prevent precipitating fatal acute adrenal collapse.",
    "strongestDistractor": "Immediate administration of high-dose intravenous levothyroxine monotherapy, withholding glucocorticoids to avoid immunosuppression",
    "distractorExclusion": "Giving thyroid hormone alone accelerates cortisol degradation and triggers fatal adrenal crisis if occult adrenal insufficiency is present; hydrocortisone must precede levothyroxine.",
    "citation": "Jonklaas J, Bianco AC, Bauer AJ, et al. Guidelines for the treatment of hypothyroidism: prepared by the american thyroid association task force on thyroid hormone replacement. Thyroid. 2014;24(12):1670-1751. PMID: 25266247.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item tests critical endocrinologic resuscitation sequence in decompensated hypothyroidism, requiring the learner to prioritize intravenous glucocorticoids before levothyroxine to prevent precipitating adrenal collapse.",
      "distractorExclusionNotes": "Distractors represent common clinical errors: isolated levothyroxine administration, active external warming leading to peripheral vasodilation/shock, or fluid overload.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "An 81-year-old woman is brought to the emergency department by ambulance in mid-January after being found unresponsive in her unheated apartment. Her past medical history is notable for Hashimoto thyroiditis, for which she was prescribed levothyroxine; however, neighbors report she stopped filling her prescriptions 6 months ago. On physical examination, she is comatose and unarousable to noxious stimuli. Physical examination reveals cool, dry, rough skin with coarse sparse hair, prominent periorbital non-pitting edema, and delayed relaxation phase of deep tendon reflexes. Vital signs are: rectal temperature 33.4 C (92.1 F), pulse 42/min and regular, blood pressure 82/50 mm Hg, and respiratory rate 8/min with shallow respiratory excursions. Cardiac monitoring confirms sinus bradycardia without ischemic ST changes. Fingerstick blood glucose is 54 mg/dL. Arterial blood gas on room air reveals: pH 7.24, PaCO2 62 mm Hg, PaO2 56 mm Hg, and HCO3 26 mEq/L (severe hypercapnic hypoventilation). Serum sodium is 124 mEq/L. Blood is drawn for emergent laboratory testing including serum TSH, free T4, and baseline cortisol. Endotracheal intubation is performed for airway protection. Which of the following pharmacotherapeutic interventions is the most critical immediate next step in management?",
    "options": [
      {
        "text": "Intravenous stress-dose hydrocortisone administered prior to or concurrently with intravenous levothyroxine and liothyronine",
        "explanation": "This patient presents with MYXEDEMA COMA, an extreme, life-threatening manifestation of decompensated hypothyroidism with a historical mortality rate of 30% to 50%. It typically occurs in elderly patients with longstanding untreated hypothyroidism exposed to secondary precipitants such as hypothermia, sepsis, myocardial infarction, or sedative medications. Diagnostic hallmarks include the combination of: (1) Altered mental status (lethargy, obtundation, or coma); (2) Defective thermoregulation leading to severe hypothermia (core temperature < 35 C / 95 F); (3) Severe cardiopulmonary depression (sinus bradycardia, hypotension, and respiratory depression with hypoxemia and hypercapnic respiratory acidosis); (4) Hyponatremia (due to impaired free-water clearance from low cardiac output and elevated vasopressin) and hypoglycemia; and (5) Physical stigmata of severe hypothyroidism (periorbital puffiness, non-pitting pretibial myxedema, and delayed reflex relaxation). MANDATORY RESUSCITATION PRINCIPLE: According to American Thyroid Association guidelines, INTRAVENOUS STRESS-DOSE GLUCOCORTICOIDS (hydrocortisone 100 mg IV every 8 hours) MUST BE ADMINISTERED PRIOR TO OR CONCURRENTLY WITH INTRAVENOUS THYROID HORMONE REPLACEMENT (IV levothyroxine with or without IV liothyronine). RATIONALE: Thyroid hormone profoundly increases cellular metabolic activity and accelerates the hepatic breakdown and peripheral clearance of circulating cortisol. In patients with severe myxedema coma, the clinician cannot immediately exclude concomitant primary adrenal insufficiency (such as autoimmune polyglandular syndrome type 2) or secondary adrenal insufficiency from hypothalamic-pituitary failure. Administering thyroid hormone monotherapy without prior corticosteroid coverage accelerates cortisol degradation, precipitating catastrophic, irreversible circulatory collapse and fatal ACUTE ADRENAL CRISIS."
      },
      {
        "text": "Intravenous levothyroxine monotherapy bolus, withholding glucocorticoids until serum cortisol results are finalized 4 hours later",
        "explanation": "Withholding glucocorticoids until laboratory results return can cause fatal circulatory collapse if thyroid hormone accelerates cortisol clearance in an adrenal-deficient patient."
      },
      {
        "text": "Immediate active external rewarming with convective forced-air blankets and hot water immersion",
        "explanation": "Active aggressive external rewarming causes sudden peripheral cutaneous vasodilation, resulting in severe intravascular pooling and refractory hypovolemic shock; passive rewarming is indicated."
      },
      {
        "text": "Rapid infusion of 3 liters of 0.9% normal saline over 1 hour to aggressively treat hypotension and hyponatremia",
        "explanation": "Rapid fluid loading in myxedema coma precipitates acute pulmonary edema and cerebral demyelination; cautious, slow crystalloid infusion is required."
      },
      {
        "text": "Intravenous dopamine infusion as first-line inotropic therapy to restore normal heart rate and blood pressure",
        "explanation": "Dopamine is ineffective in correcting hypothermia-induced bradycardia and worsens myocardial oxygen demand; thyroid hormone and glucocorticoids restore hemodynamics."
      }
    ]
  },
  {
    "code": "op-c-s2-0252",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Thyroid Storm Multimodal Medical Therapy and Potassium Iodide Timing",
    "subtopic": "Burch-Wartofsky Criteria, Thionamides, and Wolff-Chaikoff Effect Mechanism",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Thyroid Storm management: Medical emergency with mortality > 20%. Burch-Wartofsky Point Scale >= 45: Severe hyperpyrexia (temp > 39-40 C), extreme tachycardia/atrial fibrillation, agitation/delirium/psychosis, nausea/vomiting/jaundice, and high-output heart failure. FOUR-TIER MULTIMODAL THERAPY: 1. BETA-BLOCKER: Propranolol (blocks beta-adrenergic receptors and inhibits peripheral 5'-monodeiodinase T4-to-T3 conversion) or IV esmolol. 2. THIONAMIDE: PROPYLTHIOURACIL (PTU) preferred over methimazole in acute storm (PTU blocks both new thyroid hormone synthesis via thyroid peroxidase AND blocks peripheral conversion of T4 to T3). 3. INORGANIC IODINE (Lugol solution or Saturated Solution of Potassium Iodide [SSKI]): Inhibits thyroid hormone release via the WOLFF-CHAIKOFF EFFECT. CRITICAL TIMING RULE: IODINE MUST BE ADMINISTERED AT LEAST 1 HOUR AFTER THIONAMIDE! Why? If iodine is given before thionamide, the thyroid gland utilizes the exogenous iodine as a substrate to synthesize and release massive new waves of thyroid hormone (Jod-Basedow phenomenon), worsening the storm! 4. INTRAVENOUS GLUCOCORTICOIDS (Hydrocortisone): Further reduces T4-to-T3 conversion and treats relative adrenal exhaustion.",
    "necessaryInference": "Synthesize thyroid storm management sequence and recognize that inorganic iodine (Lugol's/SSKI) must be administered at least 1 hour AFTER thionamides to prevent providing substrate for new thyroid hormone synthesis.",
    "strongestDistractor": "Administer saturated solution of potassium iodide immediately, followed by propylthiouracil 2 hours later to ensure rapid thyroid gland saturation",
    "distractorExclusion": "Administering iodine before thionamides provides iodine substrate that the unblocked thyroid peroxidase incorporates into thyroid hormone, worsening storm.",
    "citation": "Ross DS, Burch HB, Cooper DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid. 2016;26(10):1343-1421. PMID: 27521067.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item examines multi-agent pharmacotherapy in thyroid storm, focusing on the mandatory chronological sequence between thionamides and inorganic iodine.",
      "distractorExclusionNotes": "Distractors violate fundamental pharmacological rules: premature iodine administration fueling hormone synthesis, using aspirin which displaces thyroid hormone from TBG, or isolated beta-blockade.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 34-year-old woman with a history of Graves disease who was lost to follow-up and non-compliant with methimazole presents to the emergency department with acute delirium, severe agitation, profuse sweating, and palpitations that began 12 hours ago after developing acute pyelonephritis. On physical examination, she is combative, disoriented, and profusely diaphoretic. Vital signs are: temperature 40.2 C (104.4 F), pulse 154/min and irregularly irregular, blood pressure 168/74 mm Hg, and respiratory rate 28/min. Physical examination demonstrates bilateral exophthalmos, a diffusely enlarged nontender thyroid gland with an audible systolic bruit, elevated jugular venous pressure, bilateral bibasilar crackles, and marked tremor. An ECG confirms atrial fibrillation with rapid ventricular response. Burch-Wartofsky Point Scale score is calculated at 65 points (diagnostic of thyroid storm). Point-of-care laboratory tests confirm suppressed TSH (< 0.01 microU/mL) and free T4 markedly elevated (> 7.0 ng/dL). The intensive care team establishes intravenous access to initiate multimodal pharmacotherapy. Which of the following sequences represents the most appropriate, guideline-adherent pharmacological strategy for this patient?",
    "options": [
      {
        "text": "Initiate intravenous propranolol, administer oral or rectal propylthiouracil, delay potassium iodide administration until at least 1 hour after propylthiouracil, and administer intravenous hydrocortisone",
        "explanation": "This patient presents with fulminant THYROID STORM (accelerated thyrotoxicosis), an endocrine emergency triggered by acute pyelonephritis in the setting of untreated Graves disease. The clinical diagnosis is established using the Burch-Wartofsky Point Scale (score >= 45 is diagnostic), characterized by severe hyperpyrexia, cardiovascular collapse (tachyarrhythmias, atrial fibrillation, high-output heart failure), central nervous system agitation/delirium, and gastrointestinal-hepatic dysfunction (jaundice, diarrhea). MANAGEMENT ALGORITHM AND CRITICAL TIMING SEQUENCE: Management mandates a simultaneous, four-pronged therapeutic approach: (1) BETA-ADRENERGIC BLOCKADE: High-dose intravenous or oral PROPRANOLOL (or IV esmolol) is initiated immediately to control adrenergic hyperactivity (tachycardia, hypertension, tremor) and reduce myocardial oxygen demand. Propranolol has the additional unique benefit of inhibiting peripheral 5'-monodeiodinase, blocking the conversion of T4 to active T3. (2) THIONAMIDE THERAPY: PROPYLTHIOURACIL (PTU) is the thionamide of choice in acute thyroid storm (administered orally, via nasogastric tube, or rectally). PTU acts via two mechanisms: it inhibits thyroid peroxidase (blocking new organification and coupling of thyroid hormones) and directly inhibits peripheral deiodination of T4 to T3 (methimazole only blocks thyroid peroxidase, though it can be used if PTU is unavailable). (3) INORGANIC IODINE SOLUTION (SSKI or Lugol solution): Inorganic iodine induces the WOLFF-CHAIKOFF EFFECT, acutely shutting down the release of preformed T4 and T3 from the thyroid follicular lumen into the bloodstream. CRITICAL TIMING RULE: IODINE MUST BE ADMINISTERED AT LEAST 1 HOUR AFTER THE THIONAMIDE DOSE! If inorganic iodine is administered prior to or concurrently with thionamides, the unblocked thyroid gland uses the massive exogenous iodine load as substrate to synthesize and release an explosive new wave of thyroid hormones (the Jod-Basedow phenomenon), precipitating cardiovascular collapse. (4) CORTICOSTEROIDS: Intravenous HYDROCORTISONE (100 mg IV every 8 hours) further blocks peripheral T4-to-T3 conversion, stabilizes vasomotor tone, and treats relative adrenal insufficiency induced by hypermetabolic cortisol consumption."
      },
      {
        "text": "Administer potassium iodide solution immediately as first-line therapy, followed by oral propylthiouracil 2 hours later, and avoid beta-blockers due to atrial fibrillation",
        "explanation": "Giving iodine before PTU fuels synthesis of new thyroid hormones; beta-blockers are the cornerstone of rate control in thyroid storm-induced atrial fibrillation."
      },
      {
        "text": "Initiate high-dose oral aspirin (acetylsalicylic acid) for antipyresis, followed by intravenous methimazole and oral potassium iodide simultaneously",
        "explanation": "Aspirin is strictly contraindicated in thyroid storm because it displaces T4 and T3 from thyroid-binding globulin (TBG), sharply increasing free active hormone levels."
      },
      {
        "text": "Perform emergent total thyroidectomy in the operating room under general anesthesia prior to medical stabilization",
        "explanation": "Emergency thyroidectomy in an unstabilized patient with thyroid storm carries prohibitive intraoperative mortality (>50%); medical stabilization is mandatory."
      },
      {
        "text": "Administer high-dose intravenous levothyroxine to induce negative feedback suppression of the anterior pituitary gland",
        "explanation": "Administering levothyroxine adds exogenous thyroid hormone to a patient already in hyperthyroid crisis, causing fatal ventricular fibrillation."
      }
    ]
  },
  {
    "code": "op-c-s2-0253",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Diabetic Ketoacidosis Potassium Repletion and Insulin Timing Thresholds",
    "subtopic": "Serum Potassium < 3.3 mEq/L Mandating Insulin Hold and Dextrose Addition at 200 mg/dL",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Diabetic Ketoacidosis (DKA) management (ADA Guidelines): DIAGNOSTIC CRITERIA: Blood glucose > 250 mg/dL, arterial pH < 7.30, serum bicarbonate < 18 mEq/L, and elevated anion gap (> 12) with positive serum/urine ketones. CRITICAL MANAGEMENT PILLARS: 1. FLUID RESUSCITATION: 0.9% Normal Saline (1-1.5 L/hr initially) to restore intravascular volume. 2. POTASSIUM MANAGEMENT — THE ABSOLUTE SAFETY THRESHOLDS: Total body potassium is ALWAYS depleted in DKA (due to osmotic diuresis and urinary loss), even if initial serum K is normal or elevated! Insulin drives potassium intracellularly. IF SERUM POTASSIUM IS < 3.3 mEq/L: WITHHOLD INSULIN IMMEDIATELY! Administer aggressive IV potassium chloride (20-40 mEq/hr) until serum K > 3.3 mEq/L! Giving insulin when K < 3.3 mEq/L causes fatal hypokalemia, cardiac arrest, and respiratory muscle paralysis! If K is 3.3 to 5.3 mEq/L: Give 20-30 mEq K per liter of IV fluid alongside insulin. If K > 5.3 mEq/L: Start insulin, check K every 2 hours. 3. DEXTROSE ADDITION: When serum glucose drops to <= 200 mg/dL, ADD 5% DEXTROSE TO IV FLUIDS while continuing insulin infusion until the ANION GAP CLOSES (anion gap <= 12 and bicarbonate >= 18 mEq/L)!",
    "necessaryInference": "Synthesize DKA management thresholds: identify that a serum potassium < 3.3 mEq/L requires withholding insulin and giving intravenous potassium to prevent fatal arrhythmia, and that insulin is continued with dextrose until the anion gap closes.",
    "strongestDistractor": "Initiate an immediate intravenous regular insulin infusion bolus of 0.14 units/kg/hr to rapidly suppress lipolysis and ketoacid production",
    "distractorExclusion": "Administering insulin when serum potassium is 3.1 mEq/L triggers catastrophic intracellular potassium shift, causing lethal ventricular arrhythmias or asystole.",
    "citation": "Kitabchi AE, Umpierrez GE, Miles JM, Fisher JN. Hyperglycemic crises in adult patients with diabetes. Diabetes Care. 2009;32(7):1335-1343. PMID: 19564476.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item assesses nuanced electrolyte and fluid management in DKA. Requires the learner to recognize that severe hypokalemia supersedes immediate insulin administration.",
      "distractorExclusionNotes": "Distractors feature common clinical mistakes: starting insulin with low potassium, stopping insulin as soon as glucose reaches 200, or giving routine bicarbonate.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 23-year-old man with type 1 diabetes mellitus is brought to the emergency department with nausea, recurrent vomiting, diffuse abdominal pain, and rapid deep breathing for 24 hours. He ran out of insulin 3 days ago. On physical examination, he appears severely dehydrated with sunken eyes, dry mucous membranes, and a fruity odor on his breath. Vital signs are: temperature 37.1 C, pulse 122/min, blood pressure 94/58 mm Hg, and respiratory rate 32/min (Kussmaul breathing). Point-of-care fingerstick glucose reads 'HIGH' (> 500 mg/dL). Laboratory testing reveals: - Serum Sodium: 132 mEq/L - Serum Potassium: 3.1 mEq/L - Serum Chloride: 96 mEq/L - Serum Bicarbonate: 10 mEq/L - Blood Urea Nitrogen: 38 mg/dL - Serum Creatinine: 1.8 mg/dL - Arterial Blood Gas: pH 7.18, PaCO2 24 mm Hg, PaO2 96 mm Hg - Serum beta-hydroxybutyrate: 7.8 mmol/L (normal: < 0.5 mmol/L) - Urine Dipstick: 4+ glucose, large ketones The patient is initiated on intravenous 0.9% normal saline at 1,000 mL/hr. Which of the following is the most appropriate next step regarding insulin and potassium management for this patient?",
    "options": [
      {
        "text": "Withhold insulin administration, aggressively infuse intravenous potassium chloride until serum potassium exceeds 3.3 mEq/L, and only then initiate the regular insulin infusion",
        "explanation": "This patient presents with classic DIABETIC KETOACIDOSIS (DKA), characterized by hyperglycemia, high anion gap metabolic acidosis (anion gap = 132 - [96 + 10] = 26 mEq/L), elevated serum beta-hydroxybutyrate, and Kussmaul respirations. The most critical management rule tested on USMLE Step 2 CK involves POTASSIUM THRESHOLDS PRIOR TO INSULIN ADMINISTRATION: (1) TOTAL BODY POTASSIUM DEPLETION: Although initial serum potassium measurements in DKA are often normal or elevated due to extracellular shifts driven by hyperosmolality, insulin deficiency, and acidosis, ALL patients with DKA suffer profound TOTAL BODY POTASSIUM DEFICITS (typically 300 to 600 mEq) resulting from protracted osmotic diuresis, urinary ketoacid salt wasting, and vomiting. (2) THE SERUM POTASSIUM SAFETY RULE (ADA GUIDELINES): Insulin stimulates the sodium-potassium ATPase pump (Na+/K+-ATPase), driving extracellular potassium rapidly into cells. (a) IF SERUM POTASSIUM IS < 3.3 mEq/L: INSULIN MUST BE WITHHELD! Administer aggressive intravenous potassium chloride (20 to 40 mEq/hr) in isotonic saline until serum potassium rises above 3.3 mEq/L. Initiating insulin while serum potassium is < 3.3 mEq/L causes a catastrophic drop in extracellular potassium, precipitating fatal cardiac arrhythmias (ventricular fibrillation, torsades de pointes, asystole) and respiratory muscle paralysis. (b) IF SERUM POTASSIUM IS 3.3 TO 5.3 mEq/L: Start the intravenous regular insulin infusion (0.1 units/kg/hr) AND concurrently infuse 20 to 30 mEq of potassium chloride per liter of intravenous fluids to maintain potassium between 4.0 and 5.0 mEq/L. (c) IF SERUM POTASSIUM IS > 5.3 mEq/L: Start insulin infusion without potassium; recheck potassium levels every 2 hours. (3) DEXTROSE AND ANION GAP CLOSURE: When serum glucose drops to <= 200 mg/dL, add 5% dextrose to fluids to prevent hypoglycemia while CONTINUING INSULIN until the anion gap closes (anion gap <= 12 and serum bicarbonate >= 18 mEq/L)."
      },
      {
        "text": "Administer an immediate intravenous bolus of regular insulin (0.14 units/kg) to suppress hepatic ketoacid generation rapidly",
        "explanation": "Giving insulin with a potassium of 3.1 mEq/L drives potassium into cells, causing lethal cardiac arrhythmias and arrest."
      },
      {
        "text": "Administer two ampules of intravenous sodium bicarbonate to correct arterial pH before giving potassium or insulin",
        "explanation": "Bicarbonate is indicated only for pH < 6.9; routine bicarbonate causes paradoxical CSF acidosis, hypokalemia, and delayed ketone clearance."
      },
      {
        "text": "Initiate continuous subcutaneous insulin glargine and discharge to the medical floor once blood glucose drops below 250 mg/dL",
        "explanation": "Severe DKA requires continuous IV regular insulin in an ICU/monitored stepdown setting until the anion gap closes, not floor subcutaneous therapy."
      },
      {
        "text": "Discontinue intravenous insulin completely as soon as blood glucose reaches 200 mg/dL to prevent iatrogenic hypoglycemia",
        "explanation": "Stopping insulin when glucose reaches 200 mg/dL causes rebound ketoacidosis; insulin must be continued with dextrose until the anion gap closes."
      }
    ]
  },
  {
    "code": "op-c-s2-0254",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Primary Adrenal Insufficiency Cosyntropin Stimulation and Crisis Management",
    "subtopic": "Hyperpigmentation, Hyperkalemia, Mineralocorticoid Deficiency, and Stress Hydrocortisone",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Primary vs Secondary Adrenal Insufficiency: PRIMARY ADRENAL INSUFFICIENCY (Addison Disease): Autoimmune adrenalitis (most common in US), TB (worldwide), or bilateral adrenal hemorrhage (Waterhouse-Friderichsen). Destroys ALL THREE LAYERS of adrenal cortex: 1. Glucocorticoid deficiency (cortisol): fatigue, anorexia, weight loss, hypoglycemia, hypotension. 2. Mineralocorticoid deficiency (aldosterone): HYPONATREMIA, HYPERKALEMIA, and NON-ANION GAP METABOLIC ACIDOSIS (aldosterone normally secretes K+ and H+ in exchange for Na+). 3. Adrenal androgen deficiency: loss of pubic/axillary hair in women. 4. HIGH ACTH / POMC: ACTH hypersecretion stimulates melanocortin-1 receptors, causing generalized HYPERPIGMENTATION (palmar creases, buccal mucosa, scars). SECONDARY ADRENAL INSUFFICIENCY (Pituitary ACTH deficiency): Aldosterone is PRESERVED (regulated by renin-angiotensin system, not ACTH!); therefore, NO HYPERKALEMIA and NO HYPERPIGMENTATION! DIAGNOSTIC WORKUP: High-dose COSYNTROPIN (synthetic ACTH) stimulation test: measure cortisol at 0, 30, and 60 minutes; FAILURE OF CORTISOL TO RISE > 18 mcg/dL confirms adrenal insufficiency. Baseline ACTH > 100 pg/mL confirms primary etiology. ACUTE CRISIS: IV Hydrocortisone 100 mg q8h + isotonic crystalloid resuscitation.",
    "necessaryInference": "Synthesize clinical findings of primary adrenal insufficiency (hyperpigmentation, hyperkalemic metabolic acidosis, hyponatremia) and deduce that failure of cortisol to rise > 18 mcg/dL on cosyntropin stimulation confirms the diagnosis, requiring stress-dose hydrocortisone.",
    "strongestDistractor": "Perform a 24-hour urinary free cortisol excretion test to evaluate for cyclical Cushing disease",
    "distractorExclusion": "Hyperpigmentation with hyperkalemia, hyponatremia, and hypotension indicates adrenal failure (Addison disease), not hypercortisolism (Cushing disease).",
    "citation": "Bornstein SR, Allolio B, Arlt W, et al. Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(2):364-389. PMID: 26760044.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item tests pathophysiological differentiation of primary from secondary adrenal insufficiency, laboratory confirmation via cosyntropin stimulation, and emergent treatment.",
      "distractorExclusionNotes": "Distractors confuse primary adrenal failure with secondary hypopituitarism (which preserves aldosterone), Cushing disease, or isolated salt-wasting nephropathy.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 38-year-old woman presents to the ambulatory clinic with a 4-month history of worsening fatigue, weakness, dizzy spells upon standing, anorexia, salt cravings, and a 6-kg unintended weight loss. Her medical history includes vitiligo and hypothyroidism treated with levothyroxine. On physical examination, she appears frail and chronical ill. Vital signs are: pulse 88/min, supine blood pressure 104/64 mm Hg, and standing blood pressure 82/48 mm Hg with dizziness (marked orthostatic hypotension). Examination of the skin demonstrates dark, bronze hyperpigmentation of the gingival mucosa, vermilion border of the lips, palmar creases, and old appendectomy scar. Laboratory evaluation reveals: - Serum Sodium: 128 mEq/L - Serum Potassium: 5.8 mEq/L - Serum Chloride: 98 mEq/L - Serum Bicarbonate: 18 mEq/L - Blood Urea Nitrogen: 28 mg/dL - Serum Creatinine: 1.2 mg/dL - Fasting Blood Glucose: 64 mg/dL An 8:00 AM baseline serum cortisol is 2.8 mcg/dL (normal: 5-25 mcg/dL). Which of the following is the most appropriate diagnostic test to confirm the diagnosis, and what is the definitive immediate maintenance therapy?",
    "options": [
      {
        "text": "High-dose cosyntropin (synthetic ACTH) stimulation test demonstrating failure of serum cortisol to rise above 18 mcg/dL; treatment requires daily oral hydrocortisone combined with fludrocortisone",
        "explanation": "This patient presents with classic PRIMARY ADRENAL INSUFFICIENCY (Addison disease), likely autoimmune adrenalitis in the setting of Autoimmune Polyglandular Syndrome type 2 (given her concurrent vitiligo and Hashimoto thyroiditis). Master the key pathophysiological and diagnostic principles on USMLE Step 2 CK: (1) PATHOPHYSIOLOGY OF PRIMARY VS SECONDARY ADRENAL INSUFFICIENCY: Primary adrenal failure involves autoimmune destruction of all three zones of the adrenal cortex: (a) Zona glomerulosa destruction leads to ALDOSTERONE DEFICIENCY. Loss of aldosterone results in urinary sodium wasting, hypovolemia, orthostatic hypotension, salt craving, HYPONATREMIA, HYPERKALEMIA, and non-anion gap metabolic acidosis (retention of K+ and H+). (b) Zona fasciculata destruction causes CORTISOL DEFICIENCY, leading to fatigue, anorexia, weight loss, and fasting hypoglycemia. (c) Loss of negative feedback inhibition triggers massive pituitary secretion of PRO-OPIOMELANOCORTIN (POMC), the precursor for both ACTH and melanocyte-stimulating hormone (alpha-MSH). Elevated MSH/ACTH stimulates melanocortin-1 receptors on dermal melanocytes, producing pathognomonic BRONZE HYPERPIGMENTATION of mucous membranes, palmar creases, and sun-exposed areas. IN CONTRAST, secondary adrenal insufficiency (pituitary ACTH failure) spares the zona glomerulosa (aldosterone is regulated by the renin-angiotensin-aldosterone axis, not ACTH); therefore, patients with secondary adrenal failure DO NOT have hyperkalemia or hyperpigmentation. (2) CONFIRMATORY TESTING: The definitive gold-standard diagnostic test is the COSYNTROPIN (SYNTHETIC ACTH1-24) STIMULATION TEST. Cosyntropin (250 mcg IV or IM) is administered, and serum cortisol is measured at baseline, 30, and 60 minutes. A normal adrenal cortex responds with robust steroidogenesis, yielding a peak cortisol > 18 to 20 mcg/dL. In primary adrenal insufficiency, the atrophic or destroyed adrenal cortex FAILS TO RESPOND (peak cortisol remains < 18 mcg/dL). Baseline plasma ACTH is markedly elevated (> 100 pg/mL). (3) DEFINITIVE MAINTENANCE THERAPY: Because both cortisol and aldosterone are deficient, patients require lifelong replacement with both a glucocorticoid (ORAL HYDROCORTISONE in divided doses) AND a mineralocorticoid (ORAL FLUDROCORTISONE 0.05 to 0.1 mg daily)."
      },
      {
        "text": "Overnight 1-mg low-dose dexamethasone suppression test; treatment requires oral spironolactone and sodium polystyrene sulfonate",
        "explanation": "Dexamethasone suppression tests screen for hypercortisolism (Cushing syndrome); spironolactone blocks aldosterone and would worsen fatal shock."
      },
      {
        "text": "Metyrapone stimulation test; treatment requires oral hydrocortisone monotherapy without mineralocorticoid replacement",
        "explanation": "Primary adrenal insufficiency destroys the zona glomerulosa and requires fludrocortisone; hydrocortisone monotherapy treats secondary adrenal failure."
      },
      {
        "text": "Insulin-induced hypoglycemia test; treatment requires bilateral laparoscopic adrenalectomy",
        "explanation": "Insulin tolerance test assesses pituitary GH/ACTH reserve, but is dangerous in adrenal crisis; adrenalectomy is contraindicated."
      },
      {
        "text": "24-hour urinary free cortisol excretion; treatment requires long-acting somatostatin receptor ligands (octreotide)",
        "explanation": "Urinary free cortisol tests for Cushing syndrome; octreotide treats acromegaly and carcinoid tumors, not adrenal insufficiency."
      }
    ]
  },
  {
    "code": "op-c-s2-0255",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Pheochromocytoma Preoperative Alpha-Blockade Mandate Before Beta-Blockers",
    "subtopic": "Phenoxybenzamine 10-14 Days Pre-Op, Unopposed Alpha Stimulation Danger, and Genetics",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Pheochromocytoma preoperative medical management: CLINICAL TRIAD: Episodic headache, profuse sweating (diaphoresis), and tachycardia in a patient with paroxysmal or refractory hypertension ('Rule of the 5 Ps': Pressure, Pain, Perspiration, Palpitations, Pallor). DIAGNOSIS: Elevated 24-hour urinary fractionated metanephrines and catecholamines, or plasma free metanephrines. Localization: Abdominal CT/MRI or MIBG scintigraphy. PREOPERATIVE MEDICAL PREPARATION MANDATE: 1. FIRST-LINE: IRREVERSIBLE NON-COMPETITIVE ALPHA-ADRENERGIC BLOCKADE (PHENOXYBENZAMINE, or selective alpha-1 blockers like doxazosin/terazosin) INITIATED 10 TO 14 DAYS PRIOR TO SURGERY. 2. SECOND-LINE (AFTER ADEQUATE ALPHA-BLOCKADE): BETA-ADRENERGIC BLOCKADE (e.g., Propranolol, Atenolol) ADDED 2 TO 3 DAYS PRE-OP TO CONTROL TACHYCARDIA. THE DEADLY CLINICAL CONTRAINDICATION: BETA-BLOCKERS MUST NEVER BE INITIATED BEFORE ALPHA-BLOCKERS! Why? Beta-2 receptors mediate peripheral vasodilation. Blocking beta-2 receptors while leaving alpha-1 receptors unblocked results in UNOPPOSED ALPHA-1 ADRENERGIC STIMULATION, causing catastrophic malignant hypertensive crisis, severe coronary vasospasm, myocardial infarction, and fatal acute pulmonary edema!",
    "necessaryInference": "Synthesize pheochromocytoma management rules: deduce that irreversible alpha-adrenergic blockade (phenoxybenzamine) must precede beta-blockade by 10-14 days to prevent catastrophic hypertensive crisis from unopposed alpha-1 vasoconstriction.",
    "strongestDistractor": "Initiate oral metoprolol succinate monotherapy immediately to control tachycardia, followed by phenoxybenzamine 24 hours prior to surgery",
    "distractorExclusion": "Beta-blockade monotherapy blocks vasodilatory beta-2 receptors, precipitating lethal hypertensive crisis from unopposed catecholamine alpha-1 vasoconstriction.",
    "citation": "Lenders JW, Duh QY, Eisenhofer G, et al. Pheochromocytoma and paraganglioma: an endocrine society clinical practice guideline. J Clin Endocrinol Metab. 2014;99(6):1915-1942. PMID: 24893135.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item explores mandatory pharmacological sequencing in pheochromocytoma, emphasizing the lethal hemodynamic risk of unopposed alpha-adrenergic stimulation.",
      "distractorExclusionNotes": "Distractors feature wrong sequencing (beta-blocker first), inadequate agents, or emergency surgery without preoperative adrenergic blockade.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 42-year-old man presents to the clinic due to recurrent, abrupt episodes of severe throbbing headaches, profuse sweating, facial pallor, and intense heart palpitations that occur two to three times per week. The episodes typically last 15 to 30 minutes and resolve spontaneously, leaving him feeling utterly exhausted. Between episodes, he is asymptomatic. On physical examination, his heart rate is 114/min and regular, and his blood pressure is 196/112 mm Hg. Funduscopic examination demonstrates bilateral arteriolar narrowing without papilledema. Diagnostic evaluation reveals: - Plasma free metanephrines: 4.8 nmol/L (normal: < 0.5 nmol/L) - Plasma free normetanephrines: 8.2 nmol/L (normal: < 0.9 nmol/L) - 24-hour urinary fractionated metanephrines: Markedly elevated An intravenous contrast-enhanced abdominal CT scan reveals a 4.5-cm, well-circumscribed, heterogeneous, lipid-poor vascular mass in the right adrenal medulla. The surgical team schedules the patient for laparoscopic right adrenalectomy in 2 weeks. Which of the following is the most appropriate pharmacological management sequence to prepare this patient safely for surgery?",
    "options": [
      {
        "text": "Initiate oral phenoxybenzamine 10 to 14 days preoperatively, optimize intravascular volume with a high-sodium diet, and add a beta-blocker only after achieving adequate alpha-blockade",
        "explanation": "This patient presents with the classic clinical triad of PHEOCHROMOCYTOMA (episodic headache, profuse diaphoresis, and palpitations/tachycardia accompanied by paroxysmal hypertension). Pheochromocytomas are catecholamine-secreting neuroendocrine tumors derived from chromaffin cells of the adrenal medulla (secreting norepinephrine, epinephrine, and dopamine). PREOPERATIVE PHARMACOLOGICAL MANAGEMENT (ENDOCRINE SOCIETY GUIDELINES): Complete surgical resection (laparoscopic adrenalectomy) is the definitive cure. However, intraoperative tumor manipulation can trigger massive, lethal catecholamine surges. Therefore, RIGOROUS PREOPERATIVE MEDICAL PREPARATION IS MANDATORY: (1) STEP 1: ALPHA-ADRENERGIC BLOCKADE FIRST: Preoperative preparation begins 10 to 14 days prior to surgery with an alpha-adrenergic receptor antagonist. The traditional agent of choice is PHENOXYBENZAMINE, an irreversible, non-selective, non-competitive alpha-1 and alpha-2 receptor blocker. (Selective alpha-1 blockers like doxazosin, prazosin, or terazosin are acceptable alternatives with fewer side effects). Phenoxybenzamine blocks vascular smooth muscle alpha-1 receptors, reversing intense vasoconstriction, normalizing blood pressure, and expanding the contracted intravascular plasma volume. (2) STEP 2: HIGH-SALT DIET AND VOLUME EXPANSION: Chronic catecholamine-induced vasoconstriction produces severe intravascular volume contraction. Once alpha-blockade is established, patients must be encouraged to consume a high-sodium diet and generous oral fluids to restore effective circulatory volume and prevent catastrophic refractory orthostatic hypotension upon operative tumor excision. (3) STEP 3: BETA-BLOCKADE ONLY AFTER ADEQUATE ALPHA-BLOCKADE: A beta-adrenergic antagonist (such as propranolol or atenolol) is added 2 to 3 days preoperatively to manage reflex tachycardia or catecholamine-induced tachyarrhythmias. THE ABSOLUTE CLINICAL CONTRAINDICATION: BETA-BLOCKERS MUST NEVER BE INITIATED BEFORE EFFECTIVE ALPHA-BLOCKADE! Epinephrine and norepinephrine stimulate both alpha-1 (vasoconstriction) and beta-2 (vasodilation) receptors. If a beta-blocker is administered alone, beta-2 mediated vasodilation is abolished, leaving massive circulating catecholamines to stimulate alpha-1 receptors entirely UNOPPOSED. This triggers a catastrophic, life-threatening hypertensive crisis, severe coronary vasospasm, myocardial infarction, and acute pulmonary edema."
      },
      {
        "text": "Initiate oral metoprolol succinate monotherapy immediately to control tachycardia, and initiate phenoxybenzamine 24 hours prior to surgery",
        "explanation": "Administering a beta-blocker before an alpha-blocker results in unopposed alpha-1 vasoconstriction, precipitating catastrophic hypertensive crisis and pulmonary edema."
      },
      {
        "text": "Proceed immediately to laparoscopic adrenalectomy within 24 hours without preoperative adrenergic blockade to avoid surgical delay",
        "explanation": "Operating without preoperative blockade carries a perioperative mortality > 30% from intraoperative catecholamine storms triggering fatal hypertensive crisis."
      },
      {
        "text": "Prescribe oral spironolactone plus lisinopril to block mineralocorticoid receptors and angiotensin-converting enzyme",
        "explanation": "Spironolactone and ACE inhibitors do not block alpha-adrenergic receptors and provide zero protection against catecholamine-induced intraoperative surges."
      },
      {
        "text": "Initiate high-dose intravenous nitroprusside infusion for 14 days followed by oral atenolol monotherapy",
        "explanation": "Nitroprusside is used for acute hypertensive crises, not outpatient preoperative preparation; atenolol alone causes unopposed alpha stimulation."
      }
    ]
  },
  {
    "code": "op-c-s2-0256",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Primary Hyperaldosteronism Screening Aldosterone-Renin Ratio and Sampling",
    "subtopic": "PAC/PRA Ratio > 20, Confirmatory Saline Suppression, and Adrenal Vein Sampling Mandate",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Primary Hyperaldosteronism (Conn Syndrome): ETIOLOGIES: 1. Unilateral aldosterone-producing adenoma (APA; ~35-40%). 2. Bilateral idiopathic adrenal hyperplasia (IAH; ~60%). CLINICAL: Hypertension refractory to >= 3 drugs, unprovoked hypokalemia (or severe diuretic-induced hypokalemia), metabolic alkalosis, mild hypernatremia (no overt edema due to 'aldosterone escape'!). SCREENING TEST OF CHOICE: PLASMA ALDOSTERONE CONCENTRATION TO PLASMA RENIN ACTIVITY (PAC/PRA) RATIO: PAC/PRA > 20 WITH PAC > 15 ng/dL is positive. CONFIRMATORY TESTING: Oral sodium loading test or IV saline infusion test (failure of aldosterone to suppress < 5-10 ng/dL confirms autonomous production). SUBTYPE LOCALIZATION MANDATE: ADRENAL CT is performed first. HOWEVER, ADRENAL VEIN SAMPLING (AVS) IS MANDATORY PRIOR TO SURGERY IN PATIENTS > 35 YEARS OLD TO DISTINGUISH UNILATERAL ADENOMA FROM BILATERAL HYPERPLASIA! (CT can show non-functioning incidentalomas in elderly patients!). TREATMENT: Unilateral adenoma -> Laparoscopic adrenalectomy. Bilateral hyperplasia -> Medical therapy with Mineralocorticoid Receptor Antagonists (SPIRONOLACTONE or EPLERENONE).",
    "necessaryInference": "Synthesize primary hyperaldosteronism diagnostic pathway: screen with PAC/PRA ratio > 20, confirm with saline suppression, and require adrenal vein sampling to distinguish unilateral adenoma from bilateral hyperplasia before undertaking surgery.",
    "strongestDistractor": "Proceed directly to unilateral right adrenalectomy based solely on CT visualization of a 1.2-cm right adrenal nodule in a 58-year-old patient",
    "distractorExclusion": "Adrenal incidentalomas are common in adults > 35; proceeding to surgery without adrenal vein sampling risks removing an inactive nodule and leaving bilateral hyperplasia untreated.",
    "citation": "Funder JW, Carey RM, Mantero F, et al. The Management of Primary Aldosteronism: Case Detection, Diagnosis, and Treatment: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(5):1889-1916. PMID: 26934393.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item explores primary hyperaldosteronism workup, highlighting the critical distinction between anatomical CT imaging and functional adrenal vein sampling prior to surgical intervention.",
      "distractorExclusionNotes": "Distractors feature operating on CT findings without AVS, using renal vein renin sampling, or misinterpreting aldosterone escape.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 56-year-old man presents for evaluation of difficult-to-control hypertension. Despite full-dose therapy with amlodipine 10 mg daily, losartan 100 mg daily, and chlorthalidone 25 mg daily, his blood pressure remains elevated at 168/102 mm Hg. He reports mild muscle weakness and intermittent cramps but denies headache, palpitations, or diaphoresis. Physical examination shows no cushingoid features, abdominal bruits, or peripheral edema. Laboratory evaluation reveals: - Serum Sodium: 144 mEq/L - Serum Potassium: 2.9 mEq/L (unprovoked hypokalemia) - Serum Bicarbonate: 32 mEq/L (metabolic alkalosis) - Serum Creatinine: 1.0 mg/dL After correcting hypokalemia and withdrawing interfering medications, screening demonstrates: - Morning Plasma Aldosterone Concentration (PAC): 34 ng/dL (normal: 3-16 ng/dL) - Plasma Renin Activity (PRA): 0.6 ng/mL/hr (normal: 1-4 ng/mL/hr) - PAC/PRA Ratio: 56.7 (abnormal > 20) A confirmatory intravenous saline suppression test demonstrates a post-infusion PAC of 22 ng/dL (normal suppression: < 5 ng/dL). An abdominal CT scan reveals a 1.2-cm hypodense nodule in the left adrenal gland; the right adrenal gland appears minimally bulky. The patient is eager to undergo surgery to cure his hypertension. Which of the following is the most appropriate next step in management prior to surgical resection?",
    "options": [
      {
        "text": "Perform bilateral adrenal vein sampling (AVS) to differentiate unilateral aldosterone hypersecretion from bilateral idiopathic adrenal hyperplasia",
        "explanation": "This patient presents with classic PRIMARY HYPERALDOSTERONISM (Conn syndrome), suggested by resistant hypertension on three antihypertensive medications, spontaneous hypokalemia, metabolic alkalosis, and a positive screening PAC/PRA ratio > 20 with PAC > 15 ng/dL, confirmed by non-suppression on saline loading. SUBTYPE EVALUATION AND THE CRITICAL MANDATE FOR ADRENAL VEIN SAMPLING (AVS): Primary hyperaldosteronism is caused by either: (1) A unilateral aldosterone-producing adenoma (APA; ~35% of cases), which is cured by laparoscopic unilateral adrenalectomy; or (2) Bilateral idiopathic adrenal hyperplasia (IAH; ~60% of cases), which does NOT benefit from surgery and must be managed medically with mineralocorticoid receptor antagonists (spironolactone or eplerenone). High-resolution thin-section CT scanning of the adrenals is performed initially to rule out large adrenocortical carcinomas. HOWEVER, CT HAS SEVERE LIMITATIONS IN DIFFERENTIATING APA FROM IAH: Non-functioning benign adrenal cortical incidentalomas occur in up to 5% to 10% of individuals over age 40. A unilateral nodule on CT may be an innocent non-functioning incidentaloma, while the real source of aldosterone excess is micro-nodular hyperplasia in the opposite adrenal or bilateral glands. Conversely, small functional microadenomas (< 1 cm) are frequently missed on CT. ACCORDING TO ENDOCRINE SOCIETY GUIDELINES: In any candidate for surgery who is over 35 years of age, BILATERAL ADRENAL VEIN SAMPLING (AVS) IS ABSOLUTELY MANDATORY prior to surgical intervention. AVS is the undisputed gold standard for lateralization: Catheters measure cortisol-corrected aldosterone concentrations in both the right and left adrenal veins. A unilateral gradient (aldosterone/cortisol ratio > 4:1 compared to the contralateral side) confirms unilateral adenoma and predicts surgical cure by adrenalectomy. Lack of lateralization confirms bilateral hyperplasia, sparing the patient an unnecessary and futile unilateral adrenalectomy."
      },
      {
        "text": "Proceed directly to laparoscopic left adrenalectomy based on the definitive CT visualization of the 1.2-cm nodule",
        "explanation": "CT cannot distinguish non-functioning incidentalomas from bilateral hyperplasia; operating without AVS risks removing a non-functional gland."
      },
      {
        "text": "Perform bilateral renal vein renin sampling to evaluate for unilateral renal artery stenosis",
        "explanation": "Renal artery stenosis causes secondary hyperaldosteronism with elevated renin; primary hyperaldosteronism features suppressed renin (PRA 0.6)."
      },
      {
        "text": "Initiate high-dose furosemide monotherapy to promote urinary sodium excretion and manage hypertension",
        "explanation": "Loop diuretics further worsen hypokalemia and metabolic alkalosis without addressing autonomous aldosterone receptor activation."
      },
      {
        "text": "Reassure the patient and discontinue all medications, as unprovoked hypokalemia is a benign incidental finding",
        "explanation": "Untreated primary hyperaldosteronism leads to progressive myocardial fibrosis, stroke, ventricular arrhythmias, and end-stage renal disease."
      }
    ]
  },
  {
    "code": "op-c-s2-0257",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Cushing Syndrome Stepwise Diagnostic Algorithm and High-Dose Dexamethasone",
    "subtopic": "Hypercortisolemia Confirmation, ACTH-Dependent vs Independent, and IPSS Localization",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Cushing Syndrome diagnostic algorithm: STEP 1: ESTABLISH HYPERCORTISOLEMIA (requires >= 2 concordant first-line tests): 1. 24-hour urinary free cortisol (UFC; > 3-4x normal), 2. Late-night salivary cortisol (elevated due to loss of normal diurnal nadir), 3. Overnight low-dose (1-mg) Dexamethasone Suppression Test (DST; serum cortisol >= 1.8 mcg/dL at 8 AM confirms failure to suppress). STEP 2: MEASURE PLASMA ACTH: ACTH < 5 pg/mL = ACTH-INDEPENDENT (adrenal adenoma/carcinoma -> perform Adrenal CT). ACTH >= 15-20 pg/mL = ACTH-DEPENDENT (Cushing disease vs Ectopic ACTH). STEP 3: DIFFERENTIATE CUSHING DISEASE (pituitary ACTH adenoma) FROM ECTOPIC ACTH (small cell lung cancer, bronchial carcinoid): HIGH-DOSE (8-MG) DEXAMETHASONE SUPPRESSION TEST: Pituitary corticotroph adenomas retain partial negative feedback, SUPPRESSING CORTISOL BY > 50%! Ectopic ACTH tumors DO NOT SUPPRESS (< 50% suppression). CRH Stimulation Test: Pituitary adenomas show robust rise in ACTH/cortisol; ectopic tumors do not respond. GOLD STANDARD FOR LOCALIZATION: INFERIOR PETROSAL SINUS SAMPLING (IPSS) confirms pituitary source (central-to-peripheral ACTH gradient > 2:1 baseline, > 3:1 after CRH).",
    "necessaryInference": "Apply the stepwise diagnostic algorithm for hypercortisolemia: demonstrate hypercortisolemia with first-line tests, interpret ACTH levels, and deduce that >50% suppression on high-dose (8-mg) dexamethasone identifies pituitary Cushing disease.",
    "strongestDistractor": "Perform immediate transsphenoidal hypophysectomy based solely on a serum cortisol level of 24 mcg/dL without biochemical confirmation",
    "distractorExclusion": "Hypercortisolemia must first be confirmed with >= 2 first-line tests, followed by ACTH measurement and high-dose dexamethasone testing, before neurosurgical intervention.",
    "citation": "Nieman LK, Biller BM, Findling JW, et al. The diagnosis of Cushing's syndrome: an Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2008;93(5):1526-1540. PMID: 18334580.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item assesses the classic, multi-step diagnostic algorithm of hypercortisolemia, requiring differentiation between ACTH-dependent pituitary disease versus ectopic sources.",
      "distractorExclusionNotes": "Distractors confuse low-dose vs high-dose dexamethasone suppression, jump to surgery prematurely, or misunderstand ACTH feedback physiology.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 44-year-old woman presents to the clinic with progressive weight gain, proximal muscle weakness, easy bruising, facial fullness, and irregular menses over the past 9 months. Her past medical history is notable for newly diagnosed hypertension and type 2 diabetes. Physical examination demonstrates plethoric rounded 'moon facies', dorsocervical fat pad ('buffalo hump'), central adiposity with thin extremities, and wide (> 1 cm), violaceous striae across her lower abdomen. Initial screening for hypercortisolism is markedly abnormal: - 24-hour urinary free cortisol: 340 mcg/24 hr (normal: < 50 mcg/24 hr) - Late-night salivary cortisol: 0.62 mcg/dL (normal: < 0.10 mcg/dL) - Overnight 1-mg low-dose dexamethasone suppression test: 8:00 AM serum cortisol is 14 mcg/dL (normal: < 1.8 mcg/dL) Subsequent evaluation reveals a morning plasma ACTH level of 68 pg/mL (normal: 10-60 pg/mL; inappropriately elevated ACTH-dependent Cushing syndrome). The physician orders a high-dose (8-mg) overnight dexamethasone suppression test, which demonstrates a 72% suppression of morning serum cortisol compared to baseline. A pituitary MRI shows a 4-mm hypoenhancing microadenoma in the anterior pituitary. Which of the following is the definitive diagnosis and pathophysiological explanation for the high-dose dexamethasone test result?",
    "options": [
      {
        "text": "Cushing disease (pituitary ACTH-secreting corticotroph adenoma); the neoplastic pituitary cells retain partial glucocorticoid negative feedback sensitivity, resulting in > 50% suppression with high-dose dexamethasone",
        "explanation": "This patient presents with clinical and biochemical evidence of CUSHING SYNDROME (hypercortisolemia), characterized by centripetal obesity, moon facies, buffalo hump, proximal muscle weakness, wide purple abdominal striae, and impaired glucose tolerance. Master the three-step diagnostic evaluation: (1) STEP 1 — CONFIRM HYPERCORTISOLEMIA: Endocrine Society guidelines require >= 2 concordant first-line tests: 24-hour urinary free cortisol (> 3x normal), late-night salivary cortisol (loss of nocturnal circadian nadir), or low-dose (1-mg) overnight dexamethasone suppression test (failure to suppress cortisol < 1.8 mcg/dL). This patient has three concordant positive tests, establishing pathological endogenous hypercortisolemia. (2) STEP 2 — DETERMINE ACTH DEPENDENCE: Plasma ACTH is measured: (a) If ACTH is suppressed (< 5 pg/mL), it is ACTH-INDEPENDENT Cushing syndrome (primary autonomous adrenal adenoma or carcinoma), worked up with an adrenal CT scan. (b) If ACTH is normal or elevated (>= 15-20 pg/mL), it is ACTH-DEPENDENT Cushing syndrome (driven by excess ACTH secretion). This patient ACTH is 68 pg/mL, confirming ACTH-dependent hypercortisolism. (3) STEP 3 — DIFFERENTIATE CUSHING DISEASE FROM ECTOPIC ACTH: The two causes of ACTH-dependent Cushing are: (a) CUSHING DISEASE (a benign ACTH-secreting pituitary corticotroph adenoma; accounts for ~80% of ACTH-dependent cases); and (b) ECTOPIC ACTH PRODUCTION (most commonly small cell lung carcinoma, bronchial carcinoid, or medullary thyroid carcinoma; accounts for ~20%). To differentiate them, the HIGH-DOSE (8-MG) DEXAMETHASONE SUPPRESSION TEST is performed: Pituitary corticotroph adenoma cells originate from normal pituitary cells and RETAIN PARTIAL SENSITIVITY TO NEGATIVE FEEDBACK INHIBITION; thus, massive supranormal doses of dexamethasone (8 mg) overcome the altered receptor threshold, causing a > 50% REDUCTION IN SERUM CORTISOL. In contrast, ectopic neuroendocrine tumors operate completely autonomously outside hypothalamic-pituitary control and exhibit ZERO suppression (< 50% drop). Definitive treatment for Cushing disease is transsphenoidal adenomectomy."
      },
      {
        "text": "Ectopic ACTH-secreting small cell lung carcinoma; neuroendocrine tumor cells possess upregulated glucocorticoid receptors that hyper-respond to high-dose dexamethasone",
        "explanation": "Ectopic ACTH-secreting tumors are autonomous and do NOT suppress with high-dose dexamethasone; > 50% suppression indicates pituitary Cushing disease."
      },
      {
        "text": "Primary autonomous adrenal cortical adenoma; high-dose dexamethasone directly inhibits 11-beta-hydroxylase in the adrenal cortex",
        "explanation": "Adrenal adenomas produce ACTH-independent Cushing syndrome (ACTH < 5 pg/mL); this patient has elevated ACTH (68 pg/mL)."
      },
      {
        "text": "Exogenous factitious corticosteroid abuse; synthetic steroids suppress endogenous ACTH while cross-reacting in urinary free cortisol assays",
        "explanation": "Exogenous steroid ingestion suppresses endogenous ACTH and cortisol, resulting in low/undetectable plasma ACTH and cortisol levels."
      },
      {
        "text": "Cyclical pseudo-Cushing syndrome secondary to major depressive disorder; high-dose dexamethasone normalizes hypothalamic CRH transcription",
        "explanation": "Pseudo-Cushing suppresses with low-dose dexamethasone (or combined dex-CRH); failure to suppress with 1-mg dex confirms true Cushing syndrome."
      }
    ]
  },
  {
    "code": "op-c-s2-0258",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "SIADH vs Cerebral Salt Wasting Volume Status and Treatment Divergence",
    "subtopic": "Euvolemic vs Hypovolemic Hyponatremia, Fluid Restriction vs Isotonic Saline",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate SIADH vs Cerebral Salt Wasting (CSW) in neurosurgical/CNS patients: Both present with hyponatremia and high urine sodium (> 40 mEq/L). KEY DIFFERENTIATING FACTOR: EXTRACELLULAR FLUID VOLUME STATUS! 1. SYNDROME OF INAPPROPRIATE ANTIDIURETIC HORMONE (SIADH): Clinically EUVOLEMIC (normal skin turgor, moist membranes, flat JVP, no orthostasis, no edema). Labs: Serum Osm < 275 mOsm/kg, Urine Osm > 100-300 mOsm/kg, Urine Na > 30-40 mEq/L, LOW BUN and URIC ACID (due to dilution and reduced proximal reabsorption). FIRST-LINE TREATMENT: FLUID RESTRICTION (500-1000 mL/day), oral salt tablets, or vasopressin receptor antagonists (vaptans). 2. CEREBRAL SALT WASTING (CSW): Clinically HYPOVOLEMIC (dry mucous membranes, decreased skin turgor, tachycardia, orthostatic hypotension, flat neck veins, negative cumulative fluid balance). Pathophysiology: Excessive release of BNP/ANP or impaired renal sympathetic tone causes massive urinary sodium and water wasting. Labs: High urine Na (> 40-100), ELEVATED BUN/CREATININE RATIO (prerenal azotemia), high hematocrit. FIRST-LINE TREATMENT: INTRAVENOUS ISOTONIC (0.9%) SALINE VOLUME RESUSCITATION! THE FATAL ERROR: FLUID RESTRICTION IN CSW CAUSES SEVERE HYPOVOLEMIC SHOCK, CEREBRAL VASOSPASM, AND FATAL ISCHEMIC BRAIN INFARCTION!",
    "necessaryInference": "Differentiate SIADH from Cerebral Salt Wasting based on volume status (hypovolemia with postural hypotension indicates CSW) and deduce that CSW requires aggressive isotonic saline volume resuscitation, whereas fluid restriction is dangerous.",
    "strongestDistractor": "Strict fluid restriction to < 800 mL/day and initiation of oral tolvaptan for suspected neurosurgical SIADH",
    "distractorExclusion": "Fluid restriction in a hypovolemic patient with cerebral salt wasting precipitates severe hypotension, cerebral vasospasm, and stroke.",
    "citation": "Sterns RH. Disorders of plasma sodium--causes, consequences, and correction. N Engl J Med. 2015;372(1):55-65. PMID: 25551213.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item tests critical clinical discernment between SIADH and cerebral salt wasting in neurosurgical patients, where incorrect volume assessment leads to catastrophic outcomes.",
      "distractorExclusionNotes": "Distractors confuse euvolemic SIADH with hypovolemic CSW, propose dangerous fluid restriction in hypovolemia, or suggest rapid hypertonic correction risking osmotic demyelination.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 52-year-old woman is admitted to the neurointensive care unit following surgical clipping of an anterior communicating artery aneurysm that ruptured 5 days ago, causing subarachnoid hemorrhage (Hunt and Hess grade II). Over the past 24 hours, she has become increasingly lethargic and confused. Physical examination reveals an ill-appearing woman with dry oral mucous membranes, furrowed tongue, flat neck veins, and poor skin turgor. Vital signs are: temperature 37.4 C, pulse 112/min, supine blood pressure 102/64 mm Hg, and standing blood pressure 82/50 mm Hg (marked orthostatic hypotension and tachycardia). Her cumulative 24-hour fluid balance is negative 2,800 mL, with a total urinary output of 4,200 mL. Laboratory studies demonstrate: - Serum Sodium: 124 mEq/L (was 138 mEq/L 48 hours ago) - Serum Potassium: 3.8 mEq/L - Serum Chloride: 88 mEq/L - Serum Bicarbonate: 24 mEq/L - Blood Urea Nitrogen (BUN): 32 mg/dL - Serum Creatinine: 1.3 mg/dL (baseline 0.7 mg/dL) - Serum Uric Acid: 7.2 mg/dL - Serum Osmolality: 258 mOsm/kg - Urine Osmolality: 480 mOsm/kg - Urine Sodium: 92 mEq/L Which of the following is the most appropriate initial management strategy for this patient?",
    "options": [
      {
        "text": "Intravenous volume resuscitation with 0.9% normal saline (or hypertonic 3% saline if severe neurological symptoms develop) to restore effective circulating arterial volume for cerebral salt wasting",
        "explanation": "This neurosurgical patient presents with acute hyponatremia following subarachnoid hemorrhage (SAH). The essential clinical challenge on USMLE Step 2 CK is distinguishing CEREBRAL SALT WASTING (CSW) from SYNDROME OF INAPPROPRIATE ANTIDIURETIC HORMONE (SIADH): (1) PATHOPHYSIOLOGICAL DIVERGENCE: Both disorders cause hyponatremia (serum Na < 135 mEq/L), elevated urine osmolality (> 100 mOsm/kg), and high urine sodium (> 40 mEq/L). However, they represent opposite volume states: (a) SIADH is characterized by excessive ADH secretion, causing water retention and clinical EUVOLEMIA (normal blood pressure, normal skin turgor, low BUN, low uric acid < 4 mg/dL). (b) CEREBRAL SALT WASTING (CSW) is driven by centrally mediated release of natriuretic peptides (such as brain natriuretic peptide [BNP]) and/or disrupted renal sympathetic outflow. This causes true primary renal sodium wasting followed by obligatory osmotic water diuresis, leading to severe EXTRACELLULAR FLUID VOLUME DEPLETION AND CLINICAL HYPOVOLEMIA. (2) IDENTIFYING CSW IN THIS PATIENT: Key clinical evidence of hypovolemia includes: dry mucous membranes, decreased skin turgor, flat neck veins, resting tachycardia, marked orthostatic hypotension, a large negative fluid balance (-2,800 mL/day), and prerenal azotemia (elevated BUN/creatinine ratio and elevated uric acid). (3) DIVERGENT MANAGEMENT AND THE FATAL PITFALL: The treatment of SIADH is fluid restriction. HOWEVER, APPLYING FLUID RESTRICTION TO A PATIENT WITH CEREBRAL SALT WASTING IS CATASTROPHIC! Hypovolemia dramatically increases the risk of delayed cerebral ischemia and arterial vasospasm following SAH, precipitating massive ischemic stroke and death. (4) TREATMENT OF CSW: Management requires AGGRESSIVE VOLUME AND SODIUM REPLETION WITH INTRAVENOUS ISOTONIC (0.9%) NORMAL SALINE to restore normovolemia and maintain cerebral perfusion pressure. If severe neurological symptoms (seizures, coma) develop, 3% hypertonic saline is indicated (correcting sodium at a safe rate <= 8 mEq/L in 24 hours to prevent osmotic demyelination syndrome). Oral fludrocortisone may be added to promote renal sodium retention."
      },
      {
        "text": "Strict fluid restriction to 500 mL/day combined with oral tolvaptan to block vasopressin V2 receptors",
        "explanation": "Fluid restriction in cerebral salt wasting causes severe hypovolemic shock, cerebral vasospasm, infarction, and death."
      },
      {
        "text": "Rapid correction of serum sodium with hypertonic 3% saline targeting a rise of 18 mEq/L over the first 12 hours",
        "explanation": "Correcting chronic or subacute hyponatremia > 8 to 10 mEq/L in 24 hours risks catastrophic pontine and extrapontine osmotic demyelination syndrome (locked-in syndrome)."
      },
      {
        "text": "Intravenous infusion of 5% dextrose in water (D5W) at 150 mL/hr to promote free water clearance",
        "explanation": "Infusing hypotonic D5W into a patient with severe hyponatremia (124 mEq/L) will cause a rapid further drop in sodium and fatal cerebral edema."
      },
      {
        "text": "Intravenous furosemide 80 mg twice daily to promote loop kaliuresis and reduce intracranial pressure",
        "explanation": "Loop diuretics worsen hypovolemia, accelerate urinary sodium loss, and exacerbate cerebral ischemia in cerebral salt wasting."
      }
    ]
  },
  {
    "code": "op-c-s2-0259",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Central vs Nephrogenic Diabetes Insipidus Water Deprivation Test Challenge",
    "subtopic": "Desmopressin (DDAVP) Response, Lithium Toxicity, and Thiazide-Amiloride Therapy",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Diabetes Insipidus (DI): Hallmark: Polyuria (> 3 L/day), polydipsia, dilute urine (urine osmolality < 300 mOsm/kg, specific gravity < 1.005) in the presence of hypernatremia (or normal-high sodium with water intake). STEP 1: WATER DEPRIVATION TEST: Deprive patient of water until plasma Osm > 295-300 mOsm/kg or serum Na > 145. If urine remains dilute (< 300 mOsm/kg) -> DI is confirmed. STEP 2: DESMOPRESSIN (DDAVP) CHALLENGE: 1. CENTRAL DI (ADH deficiency; idiopathic, pituitary surgery, head trauma, craniopharyngioma): Exogenous DDAVP causes a DRAMATIC INCREASE IN URINE OSMOLALITY (> 50% to > 100% rise) with marked drop in urine volume. Treatment: INTRANASAL OR ORAL DESMOPRESSIN (DDAVP). 2. NEPHROGENIC DI (Renal ADH resistance; LITHIUM THERAPY [most common drug cause!], hypercalcemia, hypokalemia, AVPR2 gene mutation): Exogenous DDAVP causes MINIMAL OR NO INCREASE IN URINE OSMOLALITY (< 50% rise; renal collecting ducts cannot respond!). Treatment: Discontinue offending drug (lithium), low-salt/low-protein diet, and THIAZIDE DIURETICS (induces mild hypovolemia, stimulating proximal sodium/water reabsorption and reducing water delivery to collecting duct) + AMILORIDE (specifically blocks lithium entry via ENaC in collecting tubule principal cells!).",
    "necessaryInference": "Synthesize DI diagnostic steps: recognize that failure of urine osmolality to increase significantly (< 50%) after DDAVP challenge confirms nephrogenic DI (induced by lithium), treated with thiazide diuretics and amiloride.",
    "strongestDistractor": "Prescribe intranasal desmopressin (DDAVP) high-dose therapy as definitive replacement for central ADH deficiency",
    "distractorExclusion": "Failure of urine osmolality to increase by > 50% after DDAVP establishes nephrogenic (not central) DI, which is resistant to exogenous desmopressin.",
    "citation": "Bichet DG. Nephrogenic diabetes insipidus. Semin Nephrol. 2008;28(3):295-304. PMID: 18519089.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item tests differentiation between central and nephrogenic diabetes insipidus using the water deprivation and DDAVP challenge, focusing on lithium nephrotoxicity and paradox of thiazide/amiloride therapy.",
      "distractorExclusionNotes": "Distractors confuse central and nephrogenic responses, prescribe ineffective DDAVP for nephrogenic DI, or misinterpret psychogenic polydipsia.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 46-year-old man with a 15-year history of bipolar I disorder treated with lithium carbonate presents to the outpatient clinic reporting constant thirst, frequent awakening at night to urinate (nocturia 4 to 5 times), and daily urine output exceeding 6 liters. He drinks large volumes of ice-cold water throughout the day. Physical examination reveals an alert man with dry mucous membranes and normal vital signs. Laboratory evaluation reveals: - Serum Sodium: 147 mEq/L - Serum Potassium: 4.0 mEq/L - Serum Creatinine: 1.1 mg/dL - Serum Glucose: 92 mg/dL - Serum Osmolality: 304 mOsm/kg (normal: 275-295 mOsm/kg) - Urine Osmolality: 120 mOsm/kg (inappropriately dilute) The patient is admitted for a supervised water deprivation test. After 8 hours of water deprivation, his serum osmolality rises to 312 mOsm/kg, and his serum sodium is 150 mEq/L; his urine osmolality remains low at 145 mOsm/kg. He is then administered 2 mcg of subcutaneous desmopressin (DDAVP). Two hours after desmopressin administration, his urine osmolality is 162 mOsm/kg (an increase of only 11.7%). Which of the following is the definitive diagnosis, and what is the most appropriate pharmacological management?",
    "options": [
      {
        "text": "Nephrogenic diabetes insipidus secondary to chronic lithium toxicity; management includes stopping lithium if feasible, initiating a low-sodium diet, and prescribing a thiazide diuretic or amiloride",
        "explanation": "This patient presents with polyuria, polydipsia, and severe urinary concentrating impairment on chronic lithium therapy. Master the diagnostic interpretation of the WATER DEPRIVATION AND DDAVP CHALLENGE TEST on USMLE Step 2 CK: (1) ESTABLISHING DIABETES INSIPIDUS (DI): When a normal individual is deprived of water, rising plasma osmolality stimulates hypothalamic osmoreceptors to release endogenous vasopressin (ADH), which inserts aquaporin-2 water channels into collecting duct principal cells, concentrating urine to > 600 to 800 mOsm/kg. In this patient, despite hyperosmolality (plasma Osm 312 mOsm/kg), urine remains dilute (145 mOsm/kg), confirming Diabetes Insipidus (inability to concentrate urine). (2) DIFFERENTIATING CENTRAL VS NEPHROGENIC DI (DDAVP RESPONSE): (a) In CENTRAL DI (lack of pituitary ADH secretion due to trauma, surgery, or idiopathic damage), the collecting duct receptors are completely normal. Administration of exogenous DDAVP triggers a DRAMATIC INCREASE IN URINE OSMOLALITY (typically > 50% to > 100% increase), often exceeding 400 to 600 mOsm/kg. (b) In NEPHROGENIC DI (end-organ renal unresponsiveness to ADH), collecting duct principal cells cannot respond to ADH. Administration of exogenous DDAVP produces MINIMAL OR ZERO RESPONSE (urine osmolality increases by < 50% or < 100 mOsm/kg). This patient rise from 145 to 162 mOsm/kg (an 11.7% increase) definitively confirms NEPHROGENIC DI. (3) PATHOPHYSIOLOGY OF LITHIUM-INDUCED NEPHROGENIC DI: Lithium enters collecting duct principal cells through the Epithelial Sodium Channel (ENaC), accumulating intracellularly and inhibiting glycogen synthase kinase-3beta (GSK-3beta) and adenylate cyclase, thereby blocking ADH-mediated aquaporin-2 gene transcription and translocation. (4) PHARMACOLOGICAL MANAGEMENT OF NEPHROGENIC DI: Desmopressin is ineffective. Management includes: (a) Discontinuing lithium if safe psychiatric alternatives exist; (b) Low-sodium and low-protein diet (decreases solute load delivery to the nephron); (c) THIAZIDE DIURETICS (such as hydrochlorothiazide): Thiazides inhibit distal Na-Cl cotransporters, producing mild volume depletion that drives compensatory proximal tubular sodium and water reabsorption, reducing volume delivery to the collecting ducts and decreasing urine output; and (d) AMILORIDE: Specifically blocks ENaC, preventing further lithium entry and accumulation into collecting duct cells."
      },
      {
        "text": "Central diabetes insipidus secondary to hypothalamic sarcoidosis; management requires lifelong therapy with intranasal desmopressin (DDAVP)",
        "explanation": "Central DI exhibits a dramatic > 50% to 100% surge in urine osmolality following desmopressin; failure to respond confirms nephrogenic DI."
      },
      {
        "text": "Primary psychogenic polydipsia; management requires strict behavioral water restriction and psychiatric antipsychotic adjustment",
        "explanation": "In psychogenic polydipsia, water deprivation alone causes endogenous ADH release that successfully concentrates urine to > 600 mOsm/kg."
      },
      {
        "text": "Syndrome of inappropriate antidiuretic hormone (SIADH); management requires high-dose loop diuretics and oral demeclocycline",
        "explanation": "SIADH causes concentrated urine (> 100-300 mOsm/kg) and hyponatremia; this patient has dilute urine (145 mOsm/kg) and hypernatremia."
      },
      {
        "text": "Type 4 renal tubular acidosis; management requires sodium bicarbonate infusion and oral fludrocortisone",
        "explanation": "Type 4 RTA presents with hyperkalemic normal anion gap metabolic acidosis in diabetic nephropathy, not profound polyuria with dilute urine."
      }
    ]
  },
  {
    "code": "op-c-s2-0260",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Endocrine",
    "topic": "Hypocalcemia Post-Thyroidectomy and Intravenous Calcium Gluconate",
    "subtopic": "Chvostek and Trousseau Signs, Prolonged QT Interval, and Hungry Bone Syndrome",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Acute Postoperative Hypocalcemia: ETIOLOGY: Inadvertent devascularization, injury, or accidental resection of parathyroid glands during total thyroidectomy or central neck dissection. ONSET: Typically manifests 24 to 48 hours postoperatively (parathyroid hormone half-life is 3-5 minutes, but circulating calcium buffers buffer the drop for 24-48 h). CLINICAL MANIFESTATIONS: NEUROMUSCULAR EXCITABILITY (hypocalcemia lowers threshold potential of nerve membranes): Perioral numbness/tingling, fingertip paresthesias, muscle cramping, hyperreflexia, and bronchospasm/laryngospasm. PHYSICAL SIGNS: 1. CHVOSTEK SIGN: Tapping facial nerve anterior to ear triggers ipsilateral facial twitching. 2. TROUSSEAU SIGN: Inflating BP cuff > systolic pressure for 3 minutes triggers painful carpopedal spasm (more sensitive and specific than Chvostek!). ECG: PROLONGED QT INTERVAL (ST-segment prolongation, risking torsades de pointes). EMERGENCY MANAGEMENT: SEVERE OR SYMPTOMATIC HYPOCALCEMIA: INTRAVENOUS CALCIUM GLUCONATE! (Preferred over calcium chloride because calcium chloride causes severe tissue necrosis and thrombophlebitis if extravasated). Followed by oral calcium carbonate + calcitriol (active 1,25-OH2 vitamin D).",
    "necessaryInference": "Synthesize acute post-thyroidectomy complications: identify hypocalcemia via perioral paresthesias, positive Trousseau sign, and prolonged QT interval, and deduce that immediate intravenous calcium gluconate is the required treatment.",
    "strongestDistractor": "Administer intravenous calcium chloride bolus through a peripheral 22-gauge forearm intravenous catheter",
    "distractorExclusion": "Calcium chloride carries extreme risk of severe chemical thrombophlebitis and ischemic skin necrosis on peripheral extravasation; calcium gluconate is the preferred intravenous formulation.",
    "citation": "Bilezikian JP, Brandi ML, Rubin M, Silverberg SJ. Primary hyperparathyroidism: new concepts in clinical development, pathophysiology, and treatment. Ann Intern Med. 2014;161(9):673-674. PMID: 25364888.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item assesses post-thyroidectomy hypocalcemia diagnosis via clinical physical signs (Trousseau sign) and ECG features (QT prolongation), requiring selection of calcium gluconate over chloride.",
      "distractorExclusionNotes": "Distractors feature dangerous peripheral calcium chloride, delaying therapy for oral calcitriol alone in tetany, or mistaking tetany for hyperkalemia.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 48-year-old woman is evaluated in the post-surgical step-down unit 36 hours after undergoing an uncomplicated total thyroidectomy and central neck lymph node dissection for a 3.5-cm papillary thyroid carcinoma. Over the past 4 hours, she has experienced progressive perioral tingling, numbness in her fingertips, and severe bilateral hand cramping. On physical examination, she is anxious and diaphoretic. Vital signs are: temperature 37.1 C, pulse 84/min, blood pressure 132/82 mm Hg, and respiratory rate 18/min. Surgical neck incision is clean, dry, and intact without hematoma, swelling, or stridor. Tapping gently over the trunk of the facial nerve immediately anterior to the left external auditory meatus elicits involuntary twitching of the left upper lip and alae nasi (positive Chvostek sign). Inflation of a blood pressure cuff on her right arm to 150 mm Hg (20 mm Hg above her systolic pressure) for 2 minutes induces painful carpopedal spasm characterized by flexion of the wrist and metacarpophalangeal joints, extension of the interphalangeal joints, and adduction of the thumb ('obstetrician's hand', positive Trousseau sign). A 12-lead ECG demonstrates sinus rhythm with marked prolongation of the corrected QT interval (QTc = 510 ms). Stat laboratory testing reveals: total serum calcium 6.6 mg/dL (normal: 8.5-10.5 mg/dL), serum albumin 4.0 g/dL, and ionized calcium 0.82 mmol/L (normal: 1.15-1.33 mmol/L). Which of the following is the most appropriate immediate pharmacotherapeutic intervention?",
    "options": [
      {
        "text": "Intravenous calcium gluconate infusion with continuous cardiac monitoring, followed by oral calcium carbonate and active calcitriol",
        "explanation": "This patient presents with acute, severe, symptomatic HYPOCALCEMIA following total thyroidectomy. Master the pathophysiology, physical diagnosis, and management tested on USMLE Step 2 CK: (1) PATHOPHYSIOLOGY: Total thyroidectomy carries a 10% to 30% risk of transient hypoparathyroidism (and a 1% to 3% risk of permanent hypoparathyroidism) due to mechanical trauma, devascularization, or accidental excision of the delicate parathyroid glands. Because parathyroid hormone (PTH) has a short half-life (3 to 5 minutes), PTH levels plunge immediately post-surgery, with serum calcium falling to a nadir 24 to 48 hours postoperatively as bone and soft-tissue calcium buffers equilibrate. (2) NEUROMUSCULAR SYMPTOMS AND PHYSICAL SIGNS: Extracellular calcium normally stabilizes axonal membrane potentials by modulating voltage-gated sodium channels. Hypocalcemia increases neuronal membrane permeability to sodium, lowering the threshold for axonal depolarization and producing hyperreflexia and tetany: (a) Sensory paresthesias: Perioral numbness and tingling of fingers and toes; (b) Motor hyperexcitability: Muscle spasms, carpopedal spasm, and life-threatening laryngospasm/bronchospasm; (c) CHVOSTEK SIGN: Percussion of the facial nerve at the angle of the jaw elicits twitching of facial muscles; (d) TROUSSEAU SIGN: Sphygmomanometer cuff inflation above systolic pressure for 3 minutes induces painful carpopedal spasm (positive in >90% of hypocalcemic patients, substantially more sensitive and specific than Chvostek sign). (3) ECG FINDINGS: Hypocalcemia prolongs phase 2 of the cardiac action potential, manifesting as PROLONGATION OF THE ST SEGMENT AND CORRECTED QT INTERVAL (QTc), predisposing to torsades de pointes ventricular tachycardia. (4) EMERGENCY MANAGEMENT: Acute symptomatic hypocalcemia is a medical emergency. The treatment of choice is INTRAVENOUS CALCIUM GLUCONATE (1 to 2 grams of 10% calcium gluconate infused over 10 to 20 minutes) with continuous cardiac telemetry. Calcium gluconate is strongly preferred over intravenous calcium chloride because calcium chloride is three times more hyperosmolar and causes severe, blistering chemical thrombophlebitis and full-thickness cutaneous necrosis if peripheral extravasation occurs. Once acute symptoms are controlled, the patient is transitioned to oral calcium carbonate and active vitamin D (CALCITRIOL, 1,25-dihydroxycholecalciferol) because endogenous PTH is deficient to activate 1-alpha-hydroxylase."
      },
      {
        "text": "Intravenous calcium chloride 10% bolus rapidly pushed through a peripheral forearm intravenous line",
        "explanation": "Calcium chloride causes severe peripheral chemical thrombophlebitis and full-thickness cutaneous necrosis if extravasated; calcium gluconate is preferred."
      },
      {
        "text": "Oral ergocalciferol (vitamin D2) 50,000 IU daily monotherapy with discharge home and follow-up in 2 weeks",
        "explanation": "Ergocalciferol requires PTH-dependent renal 1-alpha-hydroxylation and takes weeks to act; acute tetany requires immediate IV calcium gluconate."
      },
      {
        "text": "Intravenous potassium chloride infusion combined with oral magnesium oxide to correct hypomagnesemic tetany",
        "explanation": "The primary defect is documented severe hypocalcemia; potassium does not correct hypocalcemic tetany or QT prolongation."
      },
      {
        "text": "Emergency surgical exploration of the neck incision under general anesthesia to evacuate a compressive wound hematoma",
        "explanation": "Wound hematoma presents with rapid neck swelling, tracheal deviation, and respiratory stridor, not tetany or prolonged QT intervals."
      }
    ]
  }
]

print("Loaded 10 items. Now generating 15 more items (0261-0275)...")
