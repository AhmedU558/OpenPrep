# Step 2 CK Batch 16 Part 2: Items 0388 - 0400
import json

items_b16_p2 = [
  {
    "code": "op-c-s2-0388",
    "exam": "Step 2 CK",
    "subject": "Vascular Surgery",
    "system": "Cardiovascular",
    "topic": "Abdominal Aortic Aneurysm (AAA)",
    "subtopic": "Screening Recommendations and Elective Surgical Repair Thresholds",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man presents for a routine preventive health maintenance examination. He feels entirely well with no abdominal pain, back pain, or pulsatile sensations. He has a 45-pack-year smoking history and continues to smoke one pack of cigarettes daily. His medical history includes hypertension controlled with amlodipine. On physical examination, blood pressure is 134/78 mm Hg and heart rate is 72/min. Abdominal examination reveals a non-tender, prominent pulsatile mass palpated superior to the umbilicus. Peripheral pulses are normal. An outpatient abdominal ultrasonography is performed, which reveals an infrarenal abdominal aortic aneurysm measuring 5.8 cm in maximal transverse diameter, with no evidence of retroperitoneal hematoma or wall defect. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      ["Refer for elective surgical repair (open or endovascular aneurysm repair [EVAR])", "The patient has an asymptomatic infrarenal abdominal aortic aneurysm (AAA) measuring 5.8 cm. The United States Preventive Services Task Force (USPSTF) recommends a one-time screening ultrasound for AAA in men aged 65 to 75 who have ever smoked (>= 100 cigarettes in lifetime). Management is determined strictly by maximal aortic diameter: (1) Small aneurysms (3.0–3.9 cm) are monitored with ultrasound every 2–3 years; (2) Medium aneurysms (4.0–5.4 cm) are monitored every 6–12 months; (3) INDICATIONS FOR ELECTIVE SURGICAL REPAIR (open surgery or endovascular aneurysm repair [EVAR]) are: (a) Maximal diameter >= 5.5 cm in men (or >= 5.0 cm in women), (b) Rapid expansion (> 0.5 cm in 6 months or > 1.0 cm in 1 year), or (c) Any symptomatic aneurysm (abdominal or back pain, tenderness). At 5.8 cm, the annual rupture risk exceeds 10–20%, surpassing the procedural morbidity of elective repair, mandating prompt elective surgical referral."],
      ["Schedule repeat surveillance abdominal ultrasonography in 12 months", "Surveillance is indicated only for aneurysms < 5.5 cm; delaying repair of a 5.8-cm aneurysm results in high risk of catastrophic spontaneous aortic rupture and death."],
      ["Prescribe high-dose oral beta-blockers and manage expectantly until diameter exceeds 7.0 cm", "Beta-blockers reduce heart rate but have failed in clinical trials to halt aneurysm expansion; delaying repair until 7.0 cm carries an annual rupture risk > 30%."],
      ["Perform emergency exploratory laparotomy within the next 2 hours", "Emergency surgery is indicated for acute rupture (severe abdominal/back pain, hypotension, syncope); asymptomatic stable patients undergo planned elective evaluation and pre-op clearance."],
      ["Recommend strict avoidance of physical activity and observe with serial physical examinations", "Physical examination is unreliable for tracking aneurysm expansion; an aneurysm >= 5.5 cm requires definitive operative repair."]
    ],
    "shortestValidSolution": "68-year-old smoker + asymptomatic infrarenal AAA 5.8 cm (>= 5.5 cm threshold) -> refer for elective surgical repair (open or EVAR).",
    "necessaryInference": "Apply the 5.5 cm threshold for elective abdominal aortic aneurysm repair in men, distinguishing elective surgical referral from routine ultrasound surveillance.",
    "strongestDistractor": "Schedule repeat surveillance abdominal ultrasonography in 12 months",
    "distractorExclusion": "Ultrasound surveillance is appropriate only for aneurysms < 5.5 cm; at 5.8 cm, rupture risk is substantial and elective repair is mandatory.",
    "citation": "Chaikof EL, et al. The Society for Vascular Surgery Practice Guidelines on the Care of Patients with an Abdominal Aortic Aneurysm. J Vasc Surg. 2018;67(1):2-77.e2. PMID: 29268916."
  },
  {
    "code": "op-c-s2-0389",
    "exam": "Step 2 CK",
    "subject": "Vascular Surgery & Neurology",
    "system": "Cardiovascular",
    "topic": "Carotid Artery Stenosis",
    "subtopic": "Symptomatic Severe Stenosis and Carotid Endarterectomy Timing",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old right-handed man presents to the clinic 48 hours after experiencing a transient episode of sudden weakness in his right hand and difficulty speaking (expressive aphasia) that lasted approximately 25 minutes and resolved completely without residual deficits. He has a history of hypertension, hyperlipidemia, and type 2 diabetes mellitus. On physical examination, blood pressure is 142/84 mm Hg and heart rate is 76/min. Neurological examination is completely normal. Auscultation of the neck reveals a prominent harsh systolic bruit over the left carotid bifurcation. Brain MRI reveals no acute ischemic infarction. Carotid duplex ultrasonography demonstrates high-velocity turbulent flow in the left internal carotid artery, and follow-up CT angiography of the neck confirms an atherosclerotic plaque producing 82% luminal stenosis of the left internal carotid artery and 30% stenosis of the right internal carotid artery. The patient is already taking aspirin 81 mg daily and atorvastatin 80 mg daily. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      ["Perform left carotid endarterectomy (CEA) within the next 1 to 2 weeks", "The patient has experienced a transient ischemic attack (TIA) in the left middle cerebral artery territory (right hand weakness, expressive aphasia) caused by severe SYMPTOMATIC CAROTID ARTERY STENOSIS (82% stenosis of the left internal carotid artery). According to the NASCET trial and international vascular guidelines, patients with SYMPTOMATIC carotid stenosis of 70% to 99% who have a life expectancy > 5 years derive substantial, proven stroke-prevention benefit from CAROTID ENDARTERECTOMY (CEA) compared to medical therapy alone (absolute risk reduction of 17% in 2-year stroke risk). CRITICAL TIMING: The maximum risk of recurrent, disabling stroke occurs within the first 2 weeks following the sentinel TIA; therefore, CEA should be performed promptly, ideally within 14 days of symptom onset. (For asymptomatic stenosis, the benefit of CEA is much smaller and only considered if stenosis > 70–80% in low-risk surgical candidates)."],
      ["Increase aspirin to 325 mg daily and continue medical therapy alone without surgical intervention", "In symptomatic severe stenosis (70–99%), medical therapy alone is associated with a high rate of recurrent disabling stroke (~26% at 2 years); surgery provides significant risk reduction over medical therapy."],
      ["Perform urgent surgical ligation of the left external carotid artery to reduce turbulent inflow", "Ligating the external carotid artery does not remove the plaque in the internal carotid artery and eliminates potential external-to-internal collateral pathways (e.g., ophthalmic artery)."],
      ["Administer intravenous tissue plasminogen activator (alteplase) to dissolve the carotid plaque", "Thrombolysis is indicated for acute ischemic stroke within 4.5 hours of onset with persistent deficits; it is contraindicated in fully resolved TIAs and does not treat fixed atherosclerotic stenosis."],
      ["Schedule elective left carotid endarterectomy in 6 months after optimizing glycemic control", "Delaying endarterectomy for 6 months allows the period of highest recurrent stroke risk (first 2 weeks) to pass unprotected, leading to avoidable ischemic strokes."]
    ],
    "shortestValidSolution": "Left hemisphere TIA + 82% left carotid stenosis (symptomatic severe 70-99%) -> Carotid endarterectomy (CEA) within 1-2 weeks.",
    "necessaryInference": "Apply NASCET criteria for symptomatic carotid stenosis: 70-99% stenosis with recent TIA mandates carotid endarterectomy within 2 weeks to prevent major stroke.",
    "strongestDistractor": "Increase aspirin to 325 mg daily and continue medical therapy alone without surgical intervention",
    "distractorExclusion": "Medical therapy alone in symptomatic severe stenosis carries unacceptably high recurrent stroke rates; surgical endarterectomy reduces 2-year stroke risk by 17%.",
    "citation": "Naylor AR, et al. European Society for Vascular Surgery (ESVS) 2023 Clinical Practice Guidelines on the Management of Atherosclerotic Carotid and Vertebral Artery Disease. Eur J Vasc Endovasc Surg. 2023;65(1):7-111. PMID: 35636680."
  },
  {
    "code": "op-c-s2-0390",
    "exam": "Step 2 CK",
    "subject": "Endocrine Surgery",
    "system": "Endocrine",
    "topic": "Thyroid Nodule Evaluation",
    "subtopic": "Serum TSH First Step, Ultrasound Features, and Fine-Needle Aspiration Criteria",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old woman presents to the clinic after noticing a painless lump in the front of her neck while applying makeup. She feels well and has no difficulty swallowing, hoarseness, heat/cold intolerance, or tremors. She has no family history of thyroid cancer and no history of head or neck radiation exposure. Physical examination reveals a solitary, firm, non-tender nodule measuring approximately 1.5 cm in the right lobe of the thyroid gland that moves upward with swallowing. There is no cervical lymphadenopathy. Serum thyroid-stimulating hormone (TSH) level is 2.8 microU/mL (normal: 0.5–5.0 microU/mL). High-resolution ultrasound of the neck demonstrates a solid, hypoechoic nodule measuring 1.6 cm in the right thyroid lobe with microcalcifications, irregular margins, and a taller-than-wide shape, with no suspicious cervical lymph nodes. Which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      ["Perform fine-needle aspiration (FNA) biopsy of the right thyroid nodule", "The patient has a solitary thyroid nodule. The mandatory FIRST STEP in evaluating any thyroid nodule is measuring SERUM TSH: (1) If TSH is LOW (hyperthyroid), the patient undergoes a radionuclide thyroid scintigraphy (I-123 scan) to determine if the nodule is 'hot' (hyperfunctioning/toxic, almost never malignant) or 'cold' (non-functioning, higher malignancy risk). (2) If TSH is NORMAL OR HIGH, radionuclide scan is NOT indicated; instead, HIGH-RESOLUTION NECK ULTRASOUND is performed to assess suspicious sonographic features (hypoechogenicity, microcalcifications, irregular margins, taller-than-wide shape, extra-thyroidal extension). According to American Thyroid Association (ATA) guidelines, any nodule >= 1.0 cm with high-suspicion ultrasound features MUST UNDERGO FINE-NEEDLE ASPIRATION (FNA) BIOPSY to obtain cytopathological diagnosis."],
      ["Perform a radionuclide iodine-123 thyroid scintigraphy uptake scan", "Radionuclide scanning is indicated only when serum TSH is subnormal (suppressed); in a euthyroid patient with normal TSH, radioactive scanning provides zero diagnostic utility and exposes the patient to radiation."],
      ["Initiate daily levothyroxine suppressive therapy to shrink the thyroid nodule", "Thyroid hormone suppression therapy is ineffective for shrinking thyroid nodules and causes iatrogenic subclinical thyrotoxicosis, osteoporosis, and atrial fibrillation."],
      ["Perform immediate total thyroidectomy with central compartment neck dissection", "Surgical resection is premature before cytology; the vast majority of thyroid nodules are benign (colloid nodules, adenomas) and FNA cytology determines the necessity and extent of surgery."],
      ["Prescribe oral potassium iodide solution to block thyroid follicular hormone synthesis", "Potassium iodide is used in preparation for Graves disease surgery or thyroid storm, having no therapeutic role in evaluating a solitary euthyroid nodule."]
    ],
    "shortestValidSolution": "Thyroid nodule + normal TSH + ultrasound showing 1.6 cm hypoechoic nodule with microcalcifications (high suspicion) -> Fine-needle aspiration (FNA) biopsy.",
    "necessaryInference": "Apply the ATA thyroid nodule algorithm: with normal TSH, skip radionuclide scan and proceed directly to ultrasound, then perform FNA for nodules >= 1 cm with high-risk features.",
    "strongestDistractor": "Perform a radionuclide iodine-123 thyroid scintigraphy uptake scan",
    "distractorExclusion": "Iodine-123 uptake scan is indicated only if TSH is low (suppressed) to identify hot nodules; with normal TSH, radionuclide scan is unnecessary.",
    "citation": "Haugen BR, et al. 2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid. 2016;26(1):1-133. PMID: 26462967."
  },
  {
    "code": "op-c-s2-0391",
    "exam": "Step 2 CK",
    "subject": "Endocrine Surgery",
    "system": "Endocrine",
    "topic": "Pheochromocytoma",
    "subtopic": "Preoperative Medical Preparation: Alpha-Blockade Prior to Beta-Blockade",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old woman is evaluated in the clinic for paroxysmal episodes of pounding headache, palpitations, profuse sweating, and pallor that occur 2 to 3 times per week. During these episodes, her home blood pressure readings have exceeded 200/110 mm Hg. Physical examination in the clinic is unremarkable, with a resting blood pressure of 148/92 mm Hg and heart rate of 88/min. Laboratory evaluation reveals 24-hour urinary fractionated metanephrines and plasma free metanephrines elevated to four times the upper limit of normal. Contrast-enhanced CT of the abdomen confirms a 4.2-cm heterogeneously enhancing mass in the right adrenal medulla. The patient is scheduled for laparoscopic right adrenalectomy. A junior resident recommends immediately prescribing oral atenolol 50 mg daily to control the patient's resting tachycardia before surgery. Which of the following is the most appropriate pharmacologic sequence for preoperative preparation in this patient?",
    "choices": [
      ["Initiate oral phenoxybenzamine (alpha-blocker) for 10 to 14 days, and add a beta-blocker only after adequate alpha-adrenergic blockade is established", "The patient has a pheochromocytoma (catecholamine-secreting tumor of adrenal chromaffin cells), confirmed by elevated metanephrines and an adrenal mass. The standard of care is surgical resection, but intraoperative tumor manipulation can trigger massive catecholamine release, precipitating lethal hypertensive crisis and arrhythmias. THE MANDATORY PREOPERATIVE PREPARATION RULE: ALPHA-BLOCKADE MUST ALWAYS PRECEDE BETA-BLOCKADE. Non-selective alpha-antagonists (such as oral PHENOXYBENZAMINE) or selective alpha-1 antagonists (doxazosin) must be administered for 10 to 14 days preoperatively to normalize blood pressure and expand contracted intravascular volume. A beta-blocker (e.g., propranolol or metoprolol) is added only 2 to 3 days before surgery if reflex tachycardia or arrhythmias persist. CRITICAL BOARD TRAP: Administering a beta-blocker FIRST (or as monotherapy) blocks vasodilatory beta-2 receptors, leaving alpha-1 adrenergic receptors unopposed; circulating catecholamines then produce catastrophic, severe vasoconstriction and fatal hypertensive crisis."],
      ["Administer oral atenolol monotherapy for 2 weeks prior to initiating alpha-blockers", "Giving a beta-blocker alone or first leaves alpha-1 receptors unopposed, triggering severe systemic vasoconstriction, acute hypertensive crisis, and pulmonary edema."],
      ["Initiate intravenous nitroprusside infusion as sole outpatient preparation", "Nitroprusside is an emergency IV vasodilator for acute hypertensive crisis; it cannot be used for outpatient preoperative hemodynamic stabilization."],
      ["Administer oral spironolactone to block mineralocorticoid-induced volume overload", "Pheochromocytoma patients are chronically intravascularly volume-depleted from intense alpha-mediated vasoconstriction; spironolactone diuresis worsens hypovolemia and shock."],
      ["Proceed directly to laparoscopic adrenalectomy without pharmacologic preparation", "Operating on an unblocked pheochromocytoma carries an intraoperative mortality rate up to 30% to 50% from hypertensive crisis, myocardial infarction, and arrhythmias."]
    ],
    "shortestValidSolution": "Pheochromocytoma + scheduled adrenalectomy -> Alpha-blockade (phenoxybenzamine) FIRST for 10-14 days, then add beta-blocker (beta-blocker first causes fatal unopposed alpha-vasoconstriction).",
    "necessaryInference": "Apply the mandatory pharmacological principle of pheochromocytoma: alpha-blockade must always precede beta-blockade to avoid unopposed alpha-adrenergic vasoconstriction and hypertensive crisis.",
    "strongestDistractor": "Administer oral atenolol monotherapy for 2 weeks prior to initiating alpha-blockers",
    "distractorExclusion": "Beta-blocker monotherapy blocks vasodilatory beta-2 receptors while leaving alpha-1 receptors open, precipitating catastrophic hypertensive encephalopathy and death.",
    "citation": "Lenders JW, et al. Pheochromocytoma and Paraganglioma: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2014;99(6):1915-1942. PMID: 24893135."
  },
  {
    "code": "op-c-s2-0392",
    "exam": "Step 2 CK",
    "subject": "Endocrine Surgery",
    "system": "Endocrine",
    "topic": "Primary Hyperparathyroidism",
    "subtopic": "24-Hour Urine Calcium to Rule Out FHH and Indications for Parathyroidectomy",
    "provisionalDifficulty": 4,
    "stem": "A 46-year-old woman presents for a routine physical examination. She is asymptomatic with no bone pain, kidney stones, abdominal discomfort, or depression. Routine laboratory screening reveals a serum calcium of 11.4 mg/dL (normal: 8.5–10.2 mg/dL) and serum albumin of 4.0 g/dL. Repeat fasting serum calcium confirms persistent hypercalcemia at 11.6 mg/dL. Further laboratory evaluation demonstrates: - Intact parathyroid hormone (PTH): 98 pg/mL (normal: 15–65 pg/mL) - Serum phosphate: 2.2 mg/dL (normal: 2.5–4.5 mg/dL) - Serum creatinine: 0.8 mg/dL - 25-hydroxyvitamin D: 32 ng/mL - 24-hour urinary calcium excretion: 340 mg/day (normal: 100–250 mg/day; calcium-to-creatinine clearance ratio > 0.02). Dual-energy X-ray absorptiometry (DEXA) scan reveals a T-score of -1.8 at the lumbar spine and -1.4 at the femoral neck. Renal ultrasound shows no nephrolithiasis. Which of the following is the most appropriate definitive management for this patient?",
    "choices": [
      ["Perform parathyroidectomy (minimally invasive parathyroidectomy)", "The patient has primary hyperparathyroidism (PHPT), characterized by hypercalcemia with inappropriately elevated intact PTH and hypophosphatemia. The elevated 24-hour urine calcium (> 200–250 mg/day) and high calcium-to-creatinine clearance ratio (> 0.02) conclusively RULE OUT Familial Hypocalciuric Hypercalcemia (FHH, where urinary calcium is low, < 100 mg/day, and ratio < 0.01). While all symptomatic patients (stones, bones, abdominal groans, psychiatric overtones) should undergo surgery, GUIDELINES DEFINE CLEAR INDICATIONS FOR PARATHYROIDECTOMY IN ASYMPTOMATIC PHPT: (1) Age < 50 years, (2) Serum calcium > 1.0 mg/dL above the upper limit of normal (> 11.2 mg/dL), (3) Skeletal disease (T-score <= -2.5 at spine, hip, or distal 1/3 radius, or vertebral fracture), (4) Renal involvement (eGFR < 60 mL/min, 24-hr urine calcium > 400 mg/day, or nephrolithiasis/nephrocalcinosis on imaging). This patient fulfills TWO criteria for surgery: age < 50 (she is 46) and serum calcium > 1.0 mg/dL above normal (11.4–11.6 mg/dL). Parathyroidectomy is the sole curative definitive therapy."],
      ["Reassure the patient and observe with annual serum calcium and DEXA scans", "The patient meets two distinct guideline criteria mandating surgical resection (age < 50 and calcium > 1.0 mg/dL above normal); observation leads to progressive bone demineralization and renal decline."],
      ["Prescribe daily oral hydrochlorothiazide to reduce urinary calcium excretion", "Thiazide diuretics inhibit renal calcium excretion, causing a dangerous increase in serum calcium that precipitates severe hypercalcemic crisis in hyperparathyroidism."],
      ["Initiate oral cinacalcet therapy as primary definitive cure", "Cinacalcet (calcimimetic) lowers serum calcium in patients who are unfit for surgery or have parathyroid carcinoma, but does not cure the underlying parathyroid adenoma or improve bone density."],
      ["Perform lifelong calcium restriction to less than 200 mg daily", "Severe dietary calcium restriction stimulates additional PTH hypersecretion and accelerates bone resorption; patients should maintain normal dietary calcium intake."]
    ],
    "shortestValidSolution": "Hypercalcemia + high PTH + high 24-hr urine calcium (rules out FHH) + age 46 (< 50) + Ca 11.6 (> 1.0 above normal) -> primary hyperparathyroidism -> parathyroidectomy.",
    "necessaryInference": "Rule out FHH using high urinary calcium excretion, and apply the International Guidelines for asymptomatic primary hyperparathyroidism (age < 50 and calcium > 1.0 mg/dL above normal) to recommend parathyroidectomy.",
    "strongestDistractor": "Reassure the patient and observe with annual serum calcium and DEXA scans",
    "distractorExclusion": "Observation is permitted only if patients meet zero surgical criteria; fulfilling age < 50 and Ca > 1.0 mg/dL above normal mandates definitive parathyroidectomy.",
    "citation": "Bilezikian JP, et al. Evaluation and Management of Primary Hyperparathyroidism: Summary Statement and Guidelines from the Fifth International Workshop. J Bone Miner Res. 2022;37(11):2293-2314. PMID: 36245251."
  },
  {
    "code": "op-c-s2-0393",
    "exam": "Step 2 CK",
    "subject": "Surgical Oncology & Dermatology",
    "system": "Dermatology",
    "topic": "Cutaneous Melanoma",
    "subtopic": "Breslow Depth, Wide Local Excision Margins, and Sentinel Lymph Node Biopsy",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old fair-skinned man presents to the clinic with an irregular, dark brown mole on his upper back that has enlarged and become darker over the past 4 months. An initial complete full-thickness excisional biopsy with 2-mm margins was performed. Histopathological evaluation reveals an invasive superficial spreading malignant melanoma with a measured Breslow depth of 1.6 mm, with present ulceration and a mitotic rate of 2/mm2. The deep and peripheral surgical margins of the initial excisional biopsy are positive for melanoma cells. Complete physical examination reveals no palpable axillary, cervical, or supraclavicular lymphadenopathy, and no in-transit skin metastases. Which of the following is the most appropriate next step in the surgical oncologic management of this patient?",
    "choices": [
      ["Perform wide local re-excision with 1- to 2-cm surgical margins and concurrent sentinel lymph node biopsy (SLNB)", "The patient has an invasive cutaneous melanoma with an intermediate Breslow depth of 1.6 mm. Management of cutaneous melanoma follows strict evidence-based surgical guidelines determined primarily by BRESLOW THICKNESS: (1) Surgical Excision Margins: Melanoma in situ requires 0.5-cm margins; thin melanomas (< 1.0 mm) require 1.0-cm margins; intermediate-thickness melanomas (1.0 to 2.0 mm) require 1.0- to 2.0-cm margins down to the deep muscular fascia; thick melanomas (> 2.0 mm) require 2.0-cm margins. (2) SENTINEL LYMPH NODE BIOPSY (SLNB): SLNB is the gold standard for regional lymph node staging. SLNB is indicated for any melanoma with a Breslow thickness >= 1.0 mm (or >= 0.8 mm with high-risk features like ulceration), because the risk of regional nodal micrometastasis is > 10% to 15%. Finding a positive sentinel node guides systemic adjuvant immunotherapy (e.g., pembrolizumab or nivolumab) and targeted therapy."],
      ["Perform wide local re-excision with 0.5-cm margins without regional lymph node staging", "A 0.5-cm margin is adequate only for melanoma in situ; invasive melanoma of 1.6 mm with ulceration treated with 0.5-cm margins has an unacceptably high rate of local recurrence."],
      ["Perform immediate radical complete axillary and cervical lymph node dissection", "Prophylactic complete lymph node dissection carries severe morbidity (lymphedema) and does not improve overall survival (MSLT-II trial); lymphadenectomy is reserved for gross clinical nodal disease."],
      ["Initiate primary external beam radiation therapy to the upper back without re-excision", "Melanoma is relatively radioresistant; radiation is not a substitute for surgical margin clearance and is reserved for inoperable lentigo maligna or brain metastases."],
      ["Administer high-dose systemic interferon-alpha monotherapy and observe the margins", "Systemic therapy without re-excision of positive surgical margins leaves gross macroscopic/microscopic residual melanoma, leading to early systemic dissemination."]
    ],
    "shortestValidSolution": "Invasive melanoma with Breslow depth 1.6 mm + positive initial margins -> wide local re-excision with 1-2 cm margins + sentinel lymph node biopsy (SLNB).",
    "necessaryInference": "Apply NCCN melanoma guidelines: Breslow depth 1.0-2.0 mm requires 1-2 cm surgical margins and concurrent sentinel lymph node biopsy for nodal staging.",
    "strongestDistractor": "Perform immediate radical complete axillary and cervical lymph node dissection",
    "distractorExclusion": "Complete lymphadenectomy is not indicated prophylactically; sentinel lymph node biopsy must be performed first to identify micrometastases.",
    "citation": "Swetter SM, et al. Guidelines of Care for the Management of Primary Cutaneous Melanoma. J Am Acad Dermatol. 2019;80(1):208-250. PMID: 30392755."
  },
  {
    "code": "op-c-s2-0394",
    "exam": "Step 2 CK",
    "subject": "Breast Surgery & Oncology",
    "system": "General Principles",
    "topic": "Early-Stage Invasive Breast Cancer",
    "subtopic": "Receptor Subtypes (ER+/PR+/HER2-), Lumpectomy, and Endocrine Adjuvant Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old postmenopausal woman undergoes screening mammography that reveals a 1.4-cm spiculated, microcalcified mass in the upper outer quadrant of her right breast. Physical examination reveals a non-tender, firm, mobile 1.5-cm mass; there is no skin retraction, nipple discharge, or palpable axillary lymphadenopathy. Core needle biopsy demonstrates invasive ductal carcinoma (grade 2). Immunohistochemical profiling reveals: - Estrogen receptor (ER): strongly positive (95%) - Progesterone receptor (PR): strongly positive (85%) - HER2/neu: negative (IHC 0) - Ki-67 proliferation index: 12% (low). She undergoes breast-conserving surgery (partial mastectomy / lumpectomy) with concurrent sentinel lymph node biopsy. Histopathological analysis confirms a 1.4-cm invasive ductal carcinoma with negative surgical margins (> 2 mm); two sentinel lymph nodes are completely free of metastasis (pT1c pN0 M0, Stage IA). She completes adjuvant whole-breast radiation therapy. Which of the following is the most appropriate next step in the adjuvant systemic therapy for this patient?",
    "choices": [
      ["Initiate adjuvant endocrine therapy with an oral aromatase inhibitor (anastrozole or letrozole) for 5 years", "The patient has early-stage (Stage IA: T1c N0 M0), hormone receptor-positive (ER+/PR+), HER2-negative invasive ductal carcinoma. Standard multimodal therapy for early-stage breast cancer includes: (1) Surgical resection (lumpectomy with sentinel lymph node biopsy), (2) Adjuvant whole-breast radiation therapy (which reduces local recurrence to rates equivalent to mastectomy), and (3) Adjuvant systemic therapy. In POSTMENOPAUSAL women with hormone receptor-positive breast cancer, ADJUVANT ENDOCRINE THERAPY WITH AN AROMATASE INHIBITOR (anastrozole, letrozole, or exemestane) for 5 years is the undisputed treatment of choice. Aromatase inhibitors block peripheral conversion of adrenal androgens to estrone in adipose tissue (the primary source of estrogen in postmenopausal women). In landmark randomized trials (ATAC, BIG 1-98), aromatase inhibitors demonstrated superior disease-free survival and lower recurrence rates compared to tamoxifen in postmenopausal women. Adjuvant chemotherapy is not indicated for node-negative, small, low-proliferative ER+/HER2- tumors."],
      ["Administer adjuvant systemic chemotherapy with doxorubicin, cyclophosphamide, and paclitaxel", "Adjuvant polychemotherapy carries severe cardiotoxicity and neuropathy; in small (< 2 cm), node-negative, highly ER+/PR+ tumors with low proliferative index, chemotherapy provides no survival benefit."],
      ["Initiate intravenous trastuzumab (anti-HER2 monoclonal antibody) for 12 months", "Trastuzumab is indicated strictly for HER2-positive breast cancers (HER2 IHC 3+ or FISH amplified); in HER2-negative tumors, trastuzumab confers cardiotoxic risk with zero oncologic benefit."],
      ["Perform contralateral prophylactic total mastectomy to prevent metachronous recurrence", "Contralateral prophylactic mastectomy does not improve survival in sporadic breast cancer without high-penetrance genetic mutations (e.g., BRCA1/2) and is not recommended."],
      ["Prescribe oral tamoxifen monotherapy and advise that aromatase inhibitors are strictly contraindicated", "Aromatase inhibitors are superior to tamoxifen in postmenopausal women; tamoxifen is preferred primarily in premenopausal women whose ovaries actively produce aromatase-independent estrogens."]
    ],
    "shortestValidSolution": "Postmenopausal woman + ER+/PR+/HER2- node-negative invasive breast cancer post-lumpectomy and radiation -> adjuvant oral aromatase inhibitor (anastrozole/letrozole) for 5 years.",
    "necessaryInference": "Select an oral aromatase inhibitor over tamoxifen as the guideline-directed first-line adjuvant endocrine therapy for hormone-receptor-positive breast cancer in postmenopausal women.",
    "strongestDistractor": "Prescribe oral tamoxifen monotherapy and advise that aromatase inhibitors are strictly contraindicated",
    "distractorExclusion": "Tamoxifen is inferior to aromatase inhibitors in postmenopausal women because aromatase inhibitors directly target peripheral adipose estrone synthesis.",
    "citation": "Burstein HJ, et al. Endocrine Therapy for Hormone Receptor-Positive Metastatic Breast Cancer: American Society of Clinical Oncology Clinical Practice Guideline. J Clin Oncol. 2021;39(35):3959-3977. PMID: 34546850."
  },
  {
    "code": "op-c-s2-0395",
    "exam": "Step 2 CK",
    "subject": "Burn Surgery & Critical Care",
    "system": "General Principles",
    "topic": "Severe Burn Resuscitation",
    "subtopic": "Parkland Formula and Urine Output as the Decisive Endpoint of Resuscitation",
    "provisionalDifficulty": 4,
    "stem": "A 35-year-old firefighter weighing 80 kg is admitted to the burn intensive care unit 1 hour after sustaining extensive thermal flame burns while battling an industrial blaze. Physical examination reveals extensive, confluent, blistering second-degree (partial-thickness) burns and leathery, insensitive third-degree (full-thickness) burns involving the entirety of both upper extremities (18%), the anterior trunk (18%), and the entirety of both lower extremities (36%), totaling approximately 70% total body surface area (TBSA). The airway is secure, and lungs are clear. An indwelling Foley catheter is placed. Using the consensus Parkland formula (4 mL x body weight in kg x % TBSA second- and third-degree burn), the surgical resident calculates the initial 24-hour crystalloid requirement and initiates intravenous infusion of lactated Ringer solution. Which of the following represents the correct schedule of fluid administration and the most reliable clinical endpoint to titrate fluid delivery?",
    "choices": [
      ["Infuse one-half of the calculated fluid volume over the first 8 hours from the time of injury, and titrate infusion rates to maintain a urine output of 0.5 to 1.0 mL/kg/hr", "Severe thermal burns involving > 20% TBSA trigger a massive systemic inflammatory response with widespread capillary leakage, leading to burn shock (profound intravascular hypovolemia). The consensus Parkland formula calculates the initial 24-hour crystalloid requirement: 4 mL x weight (kg) x %TBSA burn. For this 80-kg patient with 70% TBSA burn: 4 x 80 x 70 = 22,400 mL of lactated Ringer solution over 24 hours. CRITICAL FLUID SCHEDULE: Exactly ONE-HALF of this calculated volume (11,200 mL) must be infused over the FIRST 8 HOURS CALCULATED FROM THE TIME OF INJURY (not the time of hospital arrival), with the remaining half (11,200 mL) infused over the subsequent 16 hours. CRITICAL RESUSCITATION ENDPOINT: The Parkland formula provides only a starting estimate; fluid infusion rates must be continually titrated based on patient response. The single most reliable clinical indicator of adequate organ perfusion and end-organ resuscitation is URINE OUTPUT, targeted at 0.5 to 1.0 mL/kg/hr in adults (30–50 mL/hr). Over-resuscitation ('fluid creep') causes abdominal compartment syndrome and pulmonary edema, while under-resuscitation causes acute tubular necrosis and shock."],
      ["Infuse the entire calculated fluid volume at a constant hourly rate over 24 hours, targeting a central venous pressure > 18 mm Hg", "Fluid requirements are highest in the first 8 hours post-injury when capillary permeability is maximal; constant hourly rates cause severe early under-resuscitation and shock."],
      ["Infuse normal 0.9% saline exclusively, titrating to achieve a mean arterial pressure of 90 mm Hg", "Large volumes of normal saline induce severe hyperchloremic metabolic acidosis, renal vasoconstriction, and worsening shock; balanced crystalloids (lactated Ringer) are mandatory."],
      ["Administer continuous 25% human albumin infusion starting immediately upon admission", "Colloids within the first 12 to 24 hours leak directly through disrupted capillaries into the interstitial tissue, worsening tissue edema and pulmonary complications; colloids are avoided in early burn shock."],
      ["Titrate intravenous fluid infusion to achieve a hematocrit of 25% within the first 6 hours", "Hemoconcentration (elevated hematocrit) is a hallmark of plasma leakage in burns; aggressively infusing fluids to drop hematocrit to 25% causes massive fluid overload and abdominal compartment syndrome."]
    ],
    "shortestValidSolution": "70% TBSA burn in 80 kg patient -> Parkland formula: 4 mL x kg x %TBSA (half in first 8 hr from injury, half in next 16 hr) -> titrate to urine output 0.5-1.0 mL/kg/hr.",
    "necessaryInference": "Apply the Parkland formula timing (first half within 8 hours from injury) and identify urine output (0.5-1.0 mL/kg/hr) as the primary clinical parameter for fluid titration.",
    "strongestDistractor": "Infuse the entire calculated fluid volume at a constant hourly rate over 24 hours, targeting a central venous pressure > 18 mm Hg",
    "distractorExclusion": "Fluids cannot be infused evenly; capillary leak is most severe early, requiring 50% of the fluid in the first 8 hours, and CVP > 18 represents dangerous over-resuscitation.",
    "citation": "American Burn Association. Advanced Burn Life Support (ABLS) Provider Manual. Chicago, IL: American Burn Association; 2018. https://ameriburn.org/quality-care/abls-program/"
  },
  {
    "code": "op-c-s2-0396",
    "exam": "Step 2 CK",
    "subject": "Trauma Surgery",
    "system": "General Principles",
    "topic": "Blunt Abdominal Trauma Evaluation",
    "subtopic": "Hemodynamic Instability with Positive FAST vs CT Scanning Indications",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old unrestrained driver is brought to the emergency department following a high-speed motor vehicle collision with tree impact. On arrival, he is somnolent, pale, and diaphoretic. Vital signs are: blood pressure 76/42 mm Hg, heart rate 142/min, respiratory rate 28/min, and oxygen saturation 93% on high-flow mask. Physical examination reveals ecchymoses across the lower chest and abdomen (seatbelt sign) and a distended, firm abdomen with diffuse involuntary guarding. A rapid 2-liter intravenous bolus of warmed lactated Ringer solution and two units of uncrossmatched packed red blood cells are infused via two 14-gauge intravenous lines; repeat blood pressure is 78/44 mm Hg and heart rate is 138/min (transient/non-responder). Focused Assessment with Sonography for Trauma (FAST) is performed at the bedside, which demonstrates substantial free fluid in the hepatorenal space (Morison pouch) and splenorenal recess. A trauma resident prepares to wheel the patient to the radiology suite for a multi-detector contrast CT scan of the abdomen and pelvis. Which of the following is the most appropriate next step in management?",
    "choices": [
      ["Cancel the CT scan and transfer the patient immediately to the operating room for exploratory laparotomy", "The patient has sustained blunt abdominal trauma and presents with severe, refractory hemorrhagic shock (hypotension and tachycardia failing fluid and blood resuscitation) with a POSITIVE FAST examination demonstrating hemoperitoneum. THE CARDINAL ALGORITHM OF BLUNT ABDOMINAL TRAUMA: In a HEMODYNAMICALLY UNSTABLE patient with a POSITIVE FAST, TRANSPORT TO CT SCAN IS STRICTLY CONTRAINDICATED because the patient is actively exsanguinating and will suffer cardiac arrest in the scanner. The mandatory next step is IMMEDIATE TRANSFER TO THE OPERATING ROOM FOR EXPLORATORY LAPAROTOMY to achieve surgical vascular control and damage-control packing of liver or splenic lacerations. Contrast CT scanning is reserved EXCLUSIVELY for HEMODYNAMICALLY STABLE patients (or transient responders who stabilize completely)."],
      ["Proceed immediately with contrast-enhanced CT of the abdomen and pelvis to identify the specific organ injury", "Transporting an unstable, actively hemorrhaging patient with persistent hypotension to the radiology suite is a classic lethal error ('donut of death'); immediate laparotomy is mandatory."],
      ["Perform diagnostic peritoneal lavage (DPL) to verify the presence of red blood cells", "FAST has already definitively visualized abundant intraperitoneal fluid in a patient in shock; performing invasive DPL delays life-saving operative laparotomy."],
      ["Perform emergent bedside four-quadrant peritoneal tap with a 20-gauge spinal needle", "Needle paracentesis does not control bleeding, can lacerate distended viscera, and wastes critical minutes needed for surgical laparotomy."],
      ["Place an intra-aortic balloon pump in the resuscitation bay prior to operative transfer", "An intra-aortic balloon pump is for cardiogenic shock and has no role in uncorrected intra-abdominal exsanguinating hemorrhage."]
    ],
    "shortestValidSolution": "Blunt trauma + persistent hypotension despite fluids/blood (unstable) + positive FAST (free fluid) -> immediate exploratory laparotomy (CT is strictly contraindicated).",
    "necessaryInference": "Apply the blunt abdominal trauma algorithm: hemodynamically unstable + positive FAST = direct to OR for exploratory laparotomy, never to the CT scanner.",
    "strongestDistractor": "Proceed immediately with contrast-enhanced CT of the abdomen and pelvis to identify the specific organ injury",
    "distractorExclusion": "Unstable patients must never be transported to CT; they are actively bleeding to death and require immediate operative hemostasis in the OR.",
    "citation": "American College of Surgeons. Advanced Trauma Life Support (ATLS) Student Course Manual. 10th ed. Chicago, IL: American College of Surgeons; 2018. NLM ID: 101736637"
  },
  {
    "code": "op-c-s2-0397",
    "exam": "Step 2 CK",
    "subject": "General Surgery & Infectious Disease",
    "system": "General Principles",
    "topic": "Necrotizing Soft Tissue Infections (Fournier Gangrene)",
    "subtopic": "Pain Out of Proportion, Crepitus, and Immediate Operative Surgical Debridement",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man with poorly controlled type 2 diabetes mellitus presents to the emergency department with severe, escalating pain in his perineum and scrotum for 24 hours. He is shaking with chills and states that the pain is agonizing and far worse than any injury he has ever experienced. On physical examination, he appears toxic, confused, and diaphoretic. Vital signs are: blood pressure 84/48 mm Hg, heart rate 132/min, respiratory rate 26/min, and temperature 39.4°C (103.0°F). Physical examination of the perineum reveals erythema, marked tense edema, and warmth of the scrotum and perianal region. Palpation of the scrotal wall elicits exquisite tenderness that extends several centimeters beyond the borders of visible erythema, and subtle subcutaneous cracking and popping (crepitus) is felt throughout the perineal tissues. Small dusky violaceous bullae are noted along the perineal raphe. Laboratory evaluation reveals: - Leukocytes: 28,400/mm3 with 22% bands - Serum sodium: 126 mEq/L - Blood glucose: 380 mg/dL - Serum creatinine: 2.4 mg/dL - Serum lactate: 5.2 mmol/L. The Laboratory Risk Indicator for Necrotizing Fasciitis (LRINEC) score is 11 (high risk >= 6). Which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      ["Perform immediate emergent surgical exploration and aggressive wide operative debridement, and administer broad-spectrum intravenous antibiotics", "The patient has Fournier gangrene (necrotizing fasciitis of the perineum and genitalia), a life-threatening polymicrobial necrotizing soft-tissue infection (NSTI) caused by aerobic and anaerobic pathogens (Gram-positive cocci, Gram-negative enteric bacilli, and anaerobes) classically occurring in patients with diabetes mellitus. Hallmark diagnostic findings include: (1) PAIN OUT OF PROPORTION to physical findings, (2) pain extending beyond visible margins of erythema, (3) subcutaneous gas/crepitus, (4) skin bullae and dusky violaceous discoloration, and (5) fulminant septic shock with high LRINEC score (leukocytosis, hyponatremia, hyperglycemia, elevated lactate). NSTIs spread rapidly along fascial planes (Dartos, Colles, and Scarpa fascia) at rates up to 1 inch per hour. THE UNDISPUTED CORNERSTONE OF THERAPY IS IMMEDIATE, AGGRESSIVE OPERATIVE SURGICAL DEBRIDEMENT of all necrotic skin, subcutaneous fat, and fascia until bleeding viable tissue is reached. Delay in surgical debridement is the single most significant factor predicting mortality. Concurrently, broad-spectrum empiric parenteral antimicrobials (e.g., vancomycin, piperacillin-tazobactam, and clindamycin [for its anti-toxin protein synthesis inhibition]) must be initiated."],
      ["Obtain an outpatient MRI of the pelvis to delineate the exact anatomical depth of fascial fluid planes", "Delaying surgery for magnetic resonance imaging in fulminant necrotizing fasciitis causes fatal septic shock; diagnosis is clinical and imaging must never delay surgical debridement."],
      ["Administer hyperbaric oxygen therapy as primary first-line monotherapy prior to surgery", "Hyperbaric oxygen is an adjunctive therapy used in select centers AFTER definitive surgical debridement; it cannot debride necrotic gangrenous tissue and has zero survival benefit as monotherapy."],
      ["Perform bedside needle aspiration of the scrotal bullae for Gram stain and culture before deciding on therapy", "Needle aspiration delays definitive operative intervention and does not relieve the progressive fascial gangrene; operative exploration is mandatory."],
      ["Administer high-dose intravenous vancomycin monotherapy and observe for 24 hours in the ICU", "Antibiotics cannot penetrate devascularized, thrombosed necrotic tissue; antibiotic monotherapy without surgical debridement has a mortality rate approaching 100%."]
    ],
    "shortestValidSolution": "Diabetic with scrotal pain out of proportion + crepitus + septic shock (LRINEC score 11) -> Fournier gangrene (necrotizing fasciitis) -> immediate emergent surgical debridement + broad-spectrum IV antibiotics.",
    "necessaryInference": "Diagnose Fournier gangrene from pain out of proportion, crepitus, and septic shock; recognize that immediate wide surgical debridement is the sole life-saving intervention and must not be delayed by imaging.",
    "strongestDistractor": "Obtain an outpatient MRI of the pelvis to delineate the exact anatomical depth of fascial fluid planes",
    "distractorExclusion": "Awaiting MRI imaging in necrotizing fasciitis wastes critical hours while infection spreads rapidly along fascial planes, leading to refractory shock and death.",
    "citation": "Stevens DL, et al. Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2014;59(2):e10-e52. PMID: 24973422."
  },
  {
    "code": "op-c-s2-0398",
    "exam": "Step 2 CK",
    "subject": "Hematology & Surgery",
    "system": "Hematology",
    "topic": "Heparin-Induced Thrombocytopenia (HIT Type II)",
    "subtopic": "4T Score, Discontinuation of All Heparin, and Direct Thrombin Inhibitors",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man who underwent an uncomplicated elective total hip arthroplasty 6 days ago is recovering on the orthopedic floor. He has been receiving subcutaneous unfractionated heparin 5,000 units every 8 hours for postoperative venous thromboembolism prophylaxis. This morning, he complains of sudden pain, swelling, and redness in his left calf. His baseline preoperative platelet count was 240,000/mm3. Routine laboratory testing today demonstrates: - Platelet count: 88,000/mm3 (a 63% drop from baseline) - Hemoglobin: 12.2 g/dL - Leukocytes: 8,400/mm3 - Coagulation studies: PT and PTT are completely normal. Lower extremity duplex ultrasonography confirms an acute deep venous thrombosis (DVT) in the left popliteal and femoral veins. The 4T score is calculated at 7 points, indicating high probability for Heparin-Induced Thrombocytopenia (HIT Type II). Which of the following is the most appropriate immediate management strategy for this patient?",
    "choices": [
      ["Discontinue all heparin products immediately and initiate therapeutic anticoagulation with a non-heparin direct thrombin inhibitor (argatroban or bivalirudin)", "The patient has Heparin-Induced Thrombocytopenia (HIT Type II), an immune-mediated prothrombotic disorder caused by IgG autoantibodies targeting complexes of platelet factor 4 (PF4) and heparin. These antibodies bind Fc-gamma-RIIa receptors on platelets, inducing massive platelet activation, aggregation, consumption (thrombocytopenia), and profound thrombin generation. Hallmark diagnostic features evaluated by the 4T score include: (1) Thrombocytopenia: platelet drop > 50% from baseline; (2) Timing: onset 5 to 10 days after heparin initiation; (3) Thrombosis: new proven arterial or venous thrombosis (paradoxical clotting, such as acute DVT/PE); and (4) oTher causes excluded. IMMEDIATE MANAGEMENT REQUIRES: (1) IMMEDIATE DISCONTINUATION of ALL heparin products (including low-molecular-weight heparin and heparin flushes); and (2) IMMEDIATE INITIATION OF A NON-HEPARIN ANTICOAGULANT, typically a direct thrombin inhibitor (ARGATROBAN or bivalirudin) or fondaparinux. CRITICAL BOARD TRAP: WARFARIN IS STRICTLY CONTRAINDICATED in acute HIT: warfarin causes a rapid decline in protein C (a natural anticoagulant with a short half-life) while thrombin generation continues unabated, precipitating microvascular thrombosis, venous limb gangrene, and skin necrosis."],
      ["Switch subcutaneous unfractionated heparin to therapeutic subcutaneous low-molecular-weight heparin (enoxaparin)", "Low-molecular-weight heparin exhibits > 90% cross-reactivity with anti-PF4/heparin IgG antibodies and continues to drive platelet activation and fatal thrombosis; LMWH is strictly contraindicated in HIT."],
      ["Discontinue heparin and immediately initiate oral warfarin monotherapy with a 10 mg loading dose", "Initiating warfarin in acute HIT causes a rapid drop in protein C, triggering extensive microvascular thrombosis that leads to catastrophic venous limb gangrene and skin necrosis."],
      ["Transfuse 2 pools of donor platelets to restore the platelet count to > 150,000/mm3", "Platelet transfusions in HIT are strictly contraindicated because transfused platelets provide fresh fuel for antibody-mediated activation, triggering fulminant arterial and venous thrombosis ('adding fuel to the fire')."],
      ["Continue heparin at the current dose and recheck the platelet count in 48 hours to confirm the trend", "Continuing heparin in active HIT leads to a 30% to 50% incidence of catastrophic thrombosis, pulmonary embolism, stroke, limb loss, and death."]
    ],
    "shortestValidSolution": "Post-op day 6 + platelet drop > 50% (240k to 88k) + new DVT (4T score 7) -> Heparin-Induced Thrombocytopenia (HIT) -> stop all heparin immediately + start argatroban/bivalirudin (warfarin contraindicated).",
    "necessaryInference": "Diagnose HIT type II (50% drop at day 5-10 with new thrombosis), immediately cease all heparin products, and initiate a non-heparin direct thrombin inhibitor while avoiding contraindicated warfarin and platelet transfusions.",
    "strongestDistractor": "Switch subcutaneous unfractionated heparin to therapeutic subcutaneous low-molecular-weight heparin (enoxaparin)",
    "distractorExclusion": "LMWH cross-reacts with anti-PF4 antibodies in > 90% of cases, perpetuating platelet aggregation and thrombosis; all heparin formulations must be stopped.",
    "citation": "Cuker A, et al. American Society of Hematology 2018 Guidelines for Management of Venous Thromboembolism: Heparin-Induced Thrombocytopenia. Blood Adv. 2018;2(22):3360-3392. PMID: 30482768."
  },
  {
    "code": "op-c-s2-0399",
    "exam": "Step 2 CK",
    "subject": "General Surgery",
    "system": "Gastrointestinal",
    "topic": "Acute Appendicitis Non-Sequitur Distractor Rejection Exemplar",
    "subtopic": "Diagnostic Giveaway and Quality Screening Rejection",
    "provisionalDifficulty": 2,
    "stem": "A 21-year-old college student presents with acute right lower quadrant abdominal pain, fever, and leukocytosis. A graded-compression ultrasound demonstrates acute suppurative appendicitis with an obstructing appendicolith and a non-compressible appendix measuring 9 mm in diameter. Which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      ["Perform surgical appendectomy (laparoscopic or open)", "Appendectomy is the definitive standard of care for acute appendicitis."],
      ["Apply topical permethrin 5% cream to the right lower quadrant skin", "Permethrin is a topical antiparasitic used to treat scabies and pediculosis."],
      ["Schedule a routine outpatient screening colonoscopy in 10 years", "Screening colonoscopy is indicated at age 45 for colorectal cancer screening."],
      ["Administer intravenous acyclovir 10 mg/kg every 8 hours for viral infection", "Acyclovir treats herpes simplex and varicella-zoster virus infections."],
      ["Prescribe daily oral alendronate for prevention of postmenopausal bone loss", "Alendronate is a bisphosphonate used for osteoporosis."]
    ],
    "shortestValidSolution": "The stem announces 'acute suppurative appendicitis with an obstructing appendicolith' directly in the prompt, giving away the diagnosis, and distractors are completely unrelated absurdities.",
    "necessaryInference": "None required because the diagnosis is handed to the examinee in the stem and distractors are non-surgical absurdities.",
    "strongestDistractor": "Apply topical permethrin 5% cream to the right lower quadrant skin",
    "distractorExclusion": "Permethrin is for scabies, completely unrelated to acute surgical abdomen.",
    "citation": "Di Saverio S, et al. WSES Jerusalem Guidelines for Diagnosis and Treatment of Acute Appendicitis. World J Emerg Surg. 2016;11:34. PMID: 27429641.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Defective item drafted as a test exemplar for quality screening. The question stem lead-in explicitly discloses the underlying diagnosis ('acute suppurative appendicitis with an obstructing appendicolith'), eliminating necessary clinical inference.",
      "distractorExclusionNotes": "Distractors (permethrin, colonoscopy in 10 years, acyclovir, alendronate) are non-surgical absurdities from unrelated medical domains, violating distractor plausibility and parallelism standards.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "REJECT",
      "rejectionNotes": "Question stem lead-in explicitly discloses the underlying diagnosis and distractors are absurd non-surgical non sequiturs, eliminating necessary clinical reasoning."
    }
  },
  {
    "code": "op-c-s2-0400",
    "exam": "Step 2 CK",
    "subject": "Endocrinology",
    "system": "Endocrine",
    "topic": "Subclinical Hyperthyroidism in Elderly Patients",
    "subtopic": "Mild TSH Suppression (0.1-0.4 mIU/L) vs Active Surveillance Conflict",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old woman presents for a routine annual health examination. She reports feeling well and has no palpitations, tremors, unintentional weight loss, heat intolerance, fatigue, or mood changes. She has a medical history of mild osteoarthritis managed with occasional acetaminophen. Physical examination reveals blood pressure 126/74 mm Hg, heart rate 68/min and regular, and normal physical findings without thyroid enlargement, nodularity, or proptosis. Routine screening laboratories reveal: - Serum TSH: 0.22 microU/mL (normal: 0.4–4.5 microU/mL; prior value 6 months ago was 0.26 microU/mL) - Free T4: 1.2 ng/dL (normal: 0.8–1.8 ng/dL) - Total T3: 110 ng/dL (normal: 80–200 ng/dL) - Anti-thyroid peroxidase (anti-TPO) antibodies: negative - Anti-thyrotropin receptor antibodies: negative. A 12-lead ECG confirms normal sinus rhythm without atrial arrhythmias. Dual-energy X-ray absorptiometry (DEXA) scan demonstrates normal bone mineral density with a T-score of -0.8 at the lumbar spine and -0.6 at the femoral neck. The clinical team debates whether this patient with mild asymptomatic endogenous subclinical hyperthyroidism (Grade 1: TSH 0.1–0.4 microU/mL) should receive antithyroid drug therapy (methimazole) or be managed with active biochemical surveillance. Which of the following statements best characterizes the current unresolved clinical guideline debate regarding this management decision?",
    "choices": [
      ["Whether treating mild subclinical hyperthyroidism (TSH 0.1-0.4 microU/mL) reduces long-term cardiovascular events and fractures in patients aged > 65 without existing osteopenia or arrhythmias remains discordant across international guidelines", "Subclinical hyperthyroidism is defined by a subnormal serum TSH with normal free T4 and T3 concentrations, categorized into Grade 1 (mild: TSH 0.1–0.4 microU/mL) and Grade 2 (severe: TSH < 0.1 microU/mL). While consensus strongly favors treatment for Grade 2 (TSH < 0.1) in elderly patients due to proven risks of atrial fibrillation, osteoporosis, and cardiovascular mortality, THE OPTIMAL MANAGEMENT OF GRADE 1 SUBCLINICAL HYPERTHYROIDISM (TSH 0.1–0.4 microU/mL) IN ELDERLY ASYMPTOMATIC PATIENTS WITHOUT UNDERLYING HEART DISEASE OR BONE LOSS REMAINS ACTIVELY DEBATED AND DISCORDANT. The American Thyroid Association (ATA) guidelines recommend considering treatment in individuals >= 65 years with TSH 0.1–0.4 microU/mL due to potential long-term atrial fibrillation risk; conversely, European Thyroid Association (ETA) and European consensus panels emphasize that spontaneous normalization occurs in > 50% of mild Grade 1 cases, and that high-quality randomized trial evidence demonstrating that antithyroid therapy reduces cardiovascular events or fracture incidence in the absence of baseline arrhythmia or osteopenia is lacking, favoring conservative biochemical monitoring every 6 months."],
      ["Treatment with radioactive iodine ablation is universally mandated by all international endocrine societies regardless of baseline TSH level", "Radioactive iodine is an aggressive definitive therapy with high rates of permanent hypothyroidism; it is never universally mandated for mild Grade 1 subclinical hyperthyroidism."],
      ["Subclinical hyperthyroidism carries an absolute zero percent risk of progression to overt hyperthyroidism in elderly populations", "Longitudinal cohort studies show that approximately 1% to 5% of patients with subclinical hyperthyroidism progress to overt thyrotoxicosis annually, proving that progression risk is non-zero."],
      ["Antithyroid medications have been conclusively proven in multiple large phase 3 trials to eliminate all-cause mortality in mild subclinical hyperthyroidism", "No large randomized prospective clinical trial has demonstrated a reduction in all-cause mortality with antithyroid drugs in Grade 1 mild subclinical hyperthyroidism."],
      ["Serum TSH levels between 0.1 and 0.4 microU/mL universally trigger paroxysmal supraventricular tachycardias within 30 days of detection", "Mild TSH suppression slightly increases the relative risk of atrial fibrillation over years, but does not universally cause acute supraventricular tachycardias within 30 days."]
    ],
    "shortestValidSolution": "Elderly patient with Grade 1 subclinical hyperthyroidism (TSH 0.1-0.4) without osteoporosis or AFib -> unresolved conflict between ATA (consider treatment) and ETA (active surveillance).",
    "necessaryInference": "Recognize the ongoing clinical uncertainty and guideline conflict between ATA and ETA regarding treatment versus surveillance for mild (Grade 1, TSH 0.1-0.4) subclinical hyperthyroidism in elderly patients lacking cardiac or bone complications.",
    "strongestDistractor": "Treatment with radioactive iodine ablation is universally mandated by all international endocrine societies regardless of baseline TSH level",
    "distractorExclusion": "Radioiodine ablation causes permanent hypothyroidism and is never universally mandated for mild Grade 1 subclinical hyperthyroidism.",
    "citation": "Biondi B, et al. 2015 European Thyroid Association Guidelines on Diagnosis and Treatment of Endogenous Subclinical Hyperthyroidism. Eur Thyroid J. 2015;4(3):149-163. PMID: 26558232.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "The question examines the active international guideline conflict between ATA and ETA regarding whether to initiate antithyroid pharmacotherapy versus active biochemical surveillance in elderly asymptomatic patients with mild subclinical hyperthyroidism (TSH 0.1–0.4 mIU/L) lacking osteopenia or arrhythmias.",
      "distractorExclusionNotes": "Distractors examine alternative clinical claims (radioiodine mandate, zero progression risk, proven mortality benefit).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "UNRESOLVED",
      "unresolvedNotes": "Active international guideline conflict between ATA and ETA regarding whether to initiate antithyroid pharmacotherapy versus active biochemical surveillance in elderly asymptomatic patients with mild subclinical hyperthyroidism (TSH 0.1–0.4 mIU/L) lacking osteopenia or arrhythmias."
    }
  }
]

print(f"Loaded {len(items_b16_p2)} items for Step 2 CK Batch 16 part 2.")
