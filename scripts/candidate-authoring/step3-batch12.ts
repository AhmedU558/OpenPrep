import { CandidateSpec } from './types';

export const step3Batch12: CandidateSpec[] = [
  {
    "code": "op-c-s3-0276",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Post-Intensive Care Syndrome Recognition and Management",
    "vignette": "A 58-year-old man presents to the outpatient clinic for a post-hospital follow-up 6 weeks after discharge from a 3-week intensive care unit (ICU) admission for severe ARDS requiring mechanical ventilation, prone positioning, and prolonged neuromuscular blockade. His wife reports that he has profound generalized muscle weakness, cannot rise from an armchair without assistance, experiences vivid night terrors and flashbacks of being suffocated, and has significant new memory lapses, frequently forgetting appointments and family names. Prior to his hospitalization, he worked full-time as an accountant and walked 3 miles daily. Physical examination reveals diffuse symmetric muscle wasting with 3/5 proximal motor strength, normal sensation, and diminished deep tendon reflexes bilaterally. Mini-Mental State Examination (MMSE) score is 23/30 (normal >= 26). Extensive cardiopulmonary workup reveals resolving pulmonary infiltrates with normal resting oxygen saturation. Which of the following is the most accurate diagnosis and comprehensive management strategy?",
    "options": [
      "Post-intensive care syndrome (PICS); initiate coordinated multidisciplinary physical, occupational, and cognitive rehabilitation, screen for PTSD and depression, and avoid long-term benzodiazepines or sedatives",
      "Early-onset Alzheimer disease; initiate oral donepezil 5 mg daily and memantine",
      "Amyotrophic lateral sclerosis unmasked by critical illness; refer for electromyography and riluzole initiation",
      "Persistent viral encephalopathy; order brain MRI with contrast and repeat lumbar puncture",
      "Malingering driven by disability seeking; reassure family and recommend immediate full return to employment"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. Post-Intensive Care Syndrome (PICS) encompasses new or worsening multidimensional impairments across three core domains\u2014physical (ICU-acquired weakness, critical illness polyneuropathy/myopathy), cognitive (executive dysfunction, memory loss, attention deficits), and psychological (depression, anxiety, post-traumatic stress disorder [PTSD])\u2014persisting after discharge from critical illness. Risk factors include prolonged mechanical ventilation, sepsis, ARDS, delirium, and deep sedation. Management requires a coordinated post-ICU multidisciplinary recovery plan: physical and occupational therapy, structured cognitive rehabilitation, psychological counseling/trauma therapy, and avoiding sedative medications (e.g., benzodiazepines) which worsen delirium and cognitive recovery.",
      "B": "The cognitive decline arose abruptly following prolonged critical illness rather than insidious neurodegeneration; cholinesterase inhibitors are unproven and inappropriate.",
      "C": "ICU-acquired weakness causes symmetric flaccid weakness, not progressive upper and lower motor neuron degeneration of ALS.",
      "D": "Invasive workup (LP, repeat neuroimaging) is low yield when deficits follow a classic prolonged ICU course without focal neurological signs or fever.",
      "E": "Dismissing profound physical weakness and cognitive deficits as malingering ignores well-established post-ICU pathology."
    },
    "learningObjective": "Diagnose Post-Intensive Care Syndrome (PICS) across physical, cognitive, and psychiatric domains and implement multidisciplinary rehabilitation while avoiding sedatives.",
    "necessaryInference": "ICU discharge after severe ARDS/sedation with new triad of physical muscle wasting (ICU-acquired weakness), cognitive memory deficits, and PTSD symptoms = Post-Intensive Care Syndrome (PICS). Management requires comprehensive multidisciplinary rehabilitation.",
    "shortestValidSolution": "Post-ICU survivor with weakness, cognitive decline, and PTSD -> Post-intensive care syndrome (multidisciplinary rehab).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/22495333/",
      "https://pubmed.ncbi.nlm.nih.gov/30422960/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests recognition of Post-Intensive Care Syndrome (PICS) following prolonged ICU admission and execution of multidisciplinary outpatient recovery protocols.",
      "distractorExclusionNotes": "Alzheimer disease is chronic insidious; ALS has fasciculations/UMN signs; neuroimaging/LP is unindicated; malingering is unscientific.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0277",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Opioid Rotation in Acute Kidney Injury Neurotoxicity",
    "vignette": "A 64-year-old man with metastatic castrate-resistant prostate cancer and diffuse painful bone metastases is admitted to the hospital with acute pyelonephritis and sepsis. His outpatient analgesic regimen is oral morphine extended-release 60 mg every 12 hours and morphine immediate-release 15 mg every 4 hours as needed for breakthrough pain. Over the past 24 hours, he has become severely drowsy, agitated, and hallucinating, with multifocal myoclonic twitches in his arms and severe allodynia (crying out in pain when his bedsheets brush his skin). Vital signs: blood pressure 108/64 mm Hg, pulse 88/min, respirations 10/min, and oxygen saturation 94% on room air. Pupils are 2 mm bilaterally. Laboratory evaluation reveals acute kidney injury: serum creatinine has risen from a baseline of 1.0 mg/dL to 3.8 mg/dL (eGFR 16 mL/min/1.73 m2). What is the underlying mechanism of his acute neurotoxicity, and what is the most appropriate opioid management?",
    "options": [
      "Brain metastases; increase morphine dose by 50% and order emergent whole-brain radiotherapy",
      "Accumulation of morphine-3-glucuronide (M3G) due to impaired renal clearance; rotate opioid to intravenous fentanyl or hydromorphone (with dose reduction) or methadone, and provide hydration",
      "Acute septic encephalopathy; administer intravenous naloxone 2 mg bolus every 5 minutes",
      "Opioid withdrawal; double the scheduled extended-release morphine dose",
      "Hypercalcemia of malignancy; administer intravenous pamidronate and continue current morphine"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Increasing the morphine dose in a patient with morphine neurotoxicity will accelerate seizures and respiratory arrest.",
      "B": "Correct. Morphine is metabolized by hepatic glucuronidation into two primary active metabolites: morphine-6-glucuronide (M6G, which provides analgesia and respiratory depression) and morphine-3-glucuronide (M3G, which has no analgesic efficacy but is intensely neurotoxic). Both metabolites depend entirely on renal elimination. In acute kidney injury (creatinine 3.8 mg/dL), M3G and M6G rapidly accumulate, precipitating severe Opioid-Induced Neurotoxicity (OIN) characterized by hyperalgesia, allodynia, myoclonus, delirium, and hallucinations. Palliative guidelines recommend immediate opioid rotation: switching to an opioid that does not have active, renally cleared neurotoxic metabolites, specifically fentanyl, hydromorphone (with conservative dosing), or methadone, alongside hydration.",
      "C": "High-dose bolus naloxone (2 mg) will precipitate acute, severe opioid withdrawal, catastrophic sympathetic crisis, and intractable pain crisis; if respiratory depression is present, dilute naloxone titrated in micrograms is used.",
      "D": "The patient has opioid toxicity from accumulating metabolites, not opioid withdrawal (which features pupillary dilation, diarrhea, piloerection).",
      "E": "Hypercalcemia can cause delirium, but myoclonus and tactile allodynia in acute renal failure are classic signatures of morphine metabolite toxicity."
    },
    "learningObjective": "Recognize opioid-induced neurotoxicity (M3G accumulation) in acute kidney injury and execute opioid rotation to fentanyl or hydromorphone.",
    "necessaryInference": "Morphine-treated patient develops AKI (creatinine 3.8) followed by myoclonus, allodynia, and delirium. Morphine metabolites (M3G/M6G) accumulate in renal failure. Management requires rotating away from morphine to fentanyl or hydromorphone.",
    "shortestValidSolution": "Morphine + AKI + myoclonus/allodynia -> M3G metabolite accumulation; rotate to fentanyl or hydromorphone.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/22495333/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests palliative pharmacology: understanding renal clearance of morphine metabolites (M3G neurotoxicity) and executing safe opioid rotation.",
      "distractorExclusionNotes": "Increasing morphine is lethal; high-dose naloxone triggers withdrawal crisis; patient is toxic, not in withdrawal; hypercalcemia lacks myoclonus/allodynia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0278",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Malignant Bowel Obstruction Palliative Medical Management",
    "vignette": "A 56-year-old woman with stage IV high-grade serous ovarian adenocarcinoma and extensive peritoneal carcinomatosis presents with intractable nausea, bilious vomiting, and severe colicky abdominal pain for 3 days. She has had no bowel movements or flatus for 48 hours. Abdominal CT reveals multifocal partial small bowel obstructions caused by diffuse peritoneal tumor implants, with extensive ascites and poor bowel wall enhancement, without a single focal discrete point of mechanical obstruction. Surgical oncology evaluates the patient and deems her non-surgical due to diffuse tumor 'carcinomatosis encasing the bowel mesentery.' A nasogastric tube is placed to low intermittent suction with initial output of 1,800 mL/day. Which of the following is the most appropriate pharmacological management to reduce gastrointestinal secretions, relieve nausea, and potentially permit removal of the nasogastric tube?",
    "options": [
      "Initiate oral polyethylene glycol 3350 sachets three times daily",
      "Initiate continuous intravenous metoclopramide 60 mg/24 hours",
      "Initiate subcutaneous or intravenous octreotide combined with dexamethasone and an antiemetic",
      "Initiate oral erythromycin suspension 500 mg every 6 hours",
      "Perform emergency surgical cecostomy"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Osmotic laxatives (polyethylene glycol) increase intraluminal fluid volume and peristalsis against a closed obstruction, causing severe cramping pain, bowel ischemia, and potential perforation.",
      "B": "Metoclopramide is a prokinetic agent that stimulates upper gastrointestinal motility. In complete or multifocal mechanical malignant bowel obstruction, prokinetics are contraindicated because violent peristalsis against mechanical blockage causes severe abdominal colic and increases the risk of bowel perforation.",
      "C": "Correct. In inoperable malignant bowel obstruction (MBO) secondary to peritoneal carcinomatosis, palliative medical management is the gold standard. Octreotide (a synthetic somatostatin analog) is the cornerstone therapy: it potently inhibits gastric, biliary, and pancreatic secretions and decreases intestinal motility and mucosal blood flow. This rapidly reduces intraluminal fluid accumulation, relieves nausea and colic, and dramatically reduces nasogastric tube drainage (often allowing NG tube removal). Combining octreotide with corticosteroids (dexamethasone, which reduces peritumoral edema) and antiemetics (haloperidol or ondansetron) achieves symptomatic control in > 80% of patients.",
      "D": "Erythromycin is a motilin receptor prokinetic that causes violent gastrointestinal cramping against mechanical obstruction.",
      "E": "Blind cecostomy does not relieve small bowel obstruction caused by diffuse peritoneal implants."
    },
    "learningObjective": "Formulate palliative medical management for inoperable malignant bowel obstruction: administer octreotide and dexamethasone to suppress gastrointestinal secretions and avoid prokinetics.",
    "necessaryInference": "Inoperable multifocal malignant bowel obstruction from peritoneal carcinomatosis. Prokinetics (metoclopramide) and laxatives cause perforation. Octreotide (somatostatin analog) suppresses GI secretions, allowing NG tube removal.",
    "shortestValidSolution": "Inoperable malignant bowel obstruction -> Octreotide + dexamethasone (avoid prokinetics).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/24799086/",
      "https://pubmed.ncbi.nlm.nih.gov/22495333/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests palliative oncology management: utilizing octreotide to eliminate nasogastric tubes and recognizing the absolute contraindication of prokinetics in mechanical obstruction.",
      "distractorExclusionNotes": "Metoclopramide and erythromycin cause perforation against mechanical obstruction; PEG increases luminal fluid; cecostomy fails to decompress small bowel.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0279",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Palliative Sedation for Refractory End-of-Life Suffering",
    "vignette": "A 71-year-old man with end-stage metastatic non-small cell lung cancer admitted to an inpatient hospice unit experiences severe, refractory terminal delirium with agitated visual hallucinations and profound breathlessness. Over the past 48 hours, he has been continuously treated with maximal doses of subcutaneous morphine, haloperidol, lorazepam, and oxygen, but remains in extreme distress, thrashing, groaning, and pulling at his skin. Extensive multidisciplinary assessment confirms that all reversible etiologies (urinary retention, fecal impaction, hypercalcemia) have been evaluated and treated, and his distressing symptoms are deemed truly refractory. His life expectancy is estimated at less than 48 to 72 hours. His designated healthcare proxy (his wife) requests intervention to relieve his suffering, stating, 'Please help him be at peace; he cannot bear this agonizing distress.' Which of the following is the most appropriate ethical and clinical intervention?",
    "options": [
      "Administer an intentional lethal intravenous bolus of potassium chloride to hasten death",
      "Withhold all medications and transfer the patient to an intensive care unit for invasive mechanical ventilation",
      "Administer oral tricyclic antidepressants and schedule psychiatric psychotherapy",
      "Initiate proportional palliative sedation (e.g., continuous intravenous or subcutaneous infusion of midazolam or propofol titrated to the minimum depth of sedation necessary to relieve suffering)",
      "Inform the wife that palliative ethics strictly prohibits sedation because it constitutes physician-assisted death"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Administering a lethal potassium chloride injection is active euthanasia, which is illegal and unethical throughout the United States.",
      "B": "Invasive mechanical ventilation in an actively dying patient with refractory terminal distress violates palliative goals of care and causes severe discomfort without benefit.",
      "C": "Oral antidepressants take weeks to work and are unfeasible and useless in an actively dying patient with terminal delirium.",
      "D": "Correct. Palliative sedation (sedation for intractable suffering) is an ethically and legally sound palliative intervention recognized by the American Medical Association (AMA) and American Academy of Hospice and Palliative Medicine (AAHPM). It is indicated for terminal patients with imminent death (hours to days) who experience refractory physical or psychological distress that cannot be relieved despite all standard palliative therapies. The ethical justification rests on the Rule of Double Effect: the primary intention is to relieve intolerable suffering, not to hasten death. Medications (typically continuous midazolam, levomepromazine, or propofol) are carefully titrated to the minimum depth of sedation required to relieve the distress.",
      "E": "Palliative sedation is distinct from physician-assisted death or euthanasia, as the intent, dosing titration, and outcome are strictly symptom relief rather than termination of life."
    },
    "learningObjective": "Apply the principles of proportional palliative sedation for refractory end-of-life distress under the Rule of Double Effect, distinguishing it from euthanasia.",
    "necessaryInference": "Imminent end-stage dying patient with truly refractory terminal delirium and dyspnea failing all opioids and antipsychotics. Proportional palliative sedation titrated to relieve suffering is ethically indicated under the Rule of Double Effect.",
    "shortestValidSolution": "Refractory suffering in actively dying patient -> Proportional palliative sedation (midazolam titration).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/22495333/",
      "https://pubmed.ncbi.nlm.nih.gov/15797988/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests palliative ethics and medical law: understanding the clinical criteria for proportional palliative sedation and distinguishing it from euthanasia via the Rule of Double Effect.",
      "distractorExclusionNotes": "Potassium is illegal euthanasia; intubation violates goals of care; oral antidepressants are useless in terminal delirium; palliative sedation is fully ethical.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0280",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Perioperative DOAC Interruption Timing and Bridging Avoidance",
    "vignette": "A 69-year-old man with non-valvular atrial fibrillation (CHA2DS2-VASc score 4: age, hypertension, diabetes, prior TIA) presents for pre-operative assessment prior to an elective laparoscopic right hemicolectomy for colon polyps (high bleeding risk procedure). He takes apixaban 5 mg twice daily, lisinopril 20 mg daily, and metformin 1,000 mg daily. His serum creatinine is 1.1 mg/dL with an estimated creatinine clearance (CrCl) of 68 mL/min. The surgical team asks whether the patient should be admitted 3 days pre-operatively for therapeutic low-molecular-weight heparin (LMWH) bridging therapy. According to CHEST and ACC/AHA perioperative management guidelines, which of the following is the most appropriate perioperative anticoagulation plan?",
    "options": [
      "Discontinue apixaban 5 days prior to surgery and initiate therapeutic subcutaneous enoxaparin 1 mg/kg twice daily bridging until 12 hours before surgery",
      "Continue apixaban without interruption throughout the morning of surgery",
      "Discontinue apixaban 24 hours prior to surgery and administer intravenous unfractionated heparin infusion",
      "Administer prothrombin complex concentrate (PCC) 2 hours pre-operatively to reverse apixaban",
      "Discontinue apixaban 48 hours prior to surgery; do not provide parenteral heparin bridging, and resume apixaban 48 to 72 hours post-operatively once hemostasis is secure"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Bridging direct oral anticoagulants (DOACs) with low-molecular-weight heparin is strongly discouraged by guidelines (and proven harmful in the PAUSE trial and BRIDGE trial). Heparin bridging does not reduce arterial thromboembolism but dramatically increases perioperative major bleeding complications threefold.",
      "B": "Continuing apixaban through surgery creates full therapeutic anticoagulation during major visceral resection, leading to life-threatening intraoperative hemorrhage.",
      "C": "In high-bleeding-risk surgery, a 24-hour DOAC interruption is insufficient (at least 48 hours is required for normal renal function), and IV heparin bridging adds bleeding risk without benefit.",
      "D": "PCC is indicated for life-threatening acute hemorrhage or emergency unscheduled surgery within hours, not for elective procedures where timed drug withholding allows natural clearance.",
      "E": "Correct. According to the CHEST guidelines and the landmark PAUSE trial (Perioperative Anticoagulation Use for Surgery Evaluation), perioperative management of DOACs (apixaban, rivaroxaban) in patients undergoing high-bleeding-risk surgery with normal renal function (CrCl > 50 mL/min) requires: 1) Discontinuing the DOAC 48 hours prior to the procedure (skipping 4 doses of apixaban), allowing > 4 half-lives for drug clearance; 2) Routinely AVOIDING parenteral heparin bridging, which significantly increases major bleeding without reducing thromboembolism; and 3) Resuming therapeutic-dose DOAC 48 to 72 hours post-operatively once surgical hemostasis is firmly established."
    },
    "learningObjective": "Manage perioperative DOAC interruption: discontinue DOAC 48 hours prior to high-bleeding-risk surgery without parenteral heparin bridging (PAUSE trial protocol).",
    "necessaryInference": "High-bleeding-risk elective surgery + normal renal function taking apixaban. Guidelines (PAUSE trial) mandate stopping apixaban 48h pre-op. Heparin bridging is strictly avoided because it triples bleeding risk without reducing strokes.",
    "shortestValidSolution": "High bleeding risk surgery on DOAC -> Stop 48 hours pre-op; do NOT bridge with heparin.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/31355444/",
      "https://pubmed.ncbi.nlm.nih.gov/26095267/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests major modern update in perioperative medicine (PAUSE and BRIDGE trials): recognizing that DOACs do not require bridging and that bridging causes major hemorrhage.",
      "distractorExclusionNotes": "Heparin bridging triples bleeding risk without stroke reduction; continuing DOAC causes hemorrhage; 24h is too short for high-bleed risk; PCC is for emergencies only.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0281",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Perioperative Beta-Blocker Continuation versus De Novo Initiation",
    "vignette": "A 62-year-old man with a history of hypertension, prior myocardial infarction 4 years ago, and chronic stable angina is scheduled for elective open abdominal aortic aneurysm repair tomorrow morning. His current home medications are metoprolol succinate 50 mg daily, atorvastatin 40 mg daily, and aspirin 81 mg daily, which he has taken reliably for 3 years. The surgical intern notes that the patient's resting pulse is 62/min and blood pressure is 128/78 mm Hg, and considers withholding his beta-blocker on the morning of surgery to prevent intraoperative bradycardia. Meanwhile, for the patient in the adjacent room\u2014a 65-year-old man with three cardiovascular risk factors who has never taken beta-blockers\u2014the intern considers initiating high-dose metoprolol tonight before surgery. According to ACC/AHA perioperative cardiovascular guidelines and the POISE trial, which of the following is the most appropriate management regarding perioperative beta-blockade for these two patients?",
    "options": [
      "Continue metoprolol in the patient on chronic therapy on the morning of surgery, but do not initiate acute de novo high-dose beta-blocker therapy in the naive patient on the day of surgery",
      "Discontinue metoprolol 24 hours prior to surgery in the chronic patient, and initiate high-dose metoprolol in the naive patient",
      "Discontinue beta-blockers in all patients prior to major vascular surgery to avoid intraoperative hypotension",
      "Initiate high-dose metoprolol in both patients on the morning of surgery regardless of prior exposure",
      "Substitute oral clonidine for metoprolol in all vascular surgery patients"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. According to ACC/AHA and ESC perioperative guidelines: 1) In patients receiving chronic beta-blocker therapy for established indications, beta-blockers MUST be continued perioperatively, including on the morning of surgery. Abrupt withdrawal precipitates rebound adrenergic hyperactivity, tachycardia, hypertension, myocardial ischemia, and infarction. 2) In beta-blocker-naive patients, initiating high-dose beta-blockers on the day of or immediately before non-cardiac surgery is strongly contraindicated. The landmark POISE trial demonstrated that acute perioperative beta-blocker initiation reduces non-fatal MI modestly but significantly increases all-cause mortality, fatal stroke, and severe hypotension.",
      "B": "Discontinuing chronic therapy causes rebound ischemia, while starting acute de novo therapy causes stroke and death (the exact opposite of evidence-based practice).",
      "C": "Universal discontinuation of chronic beta-blockers precipitates adrenergic rebound and acute coronary syndromes.",
      "D": "Starting high-dose beta-blockers acutely in naive patients increases perioperative death and stroke (POISE trial).",
      "E": "Clonidine was evaluated in the POISE-2 trial and found to increase clinically important hypotension and non-fatal cardiac arrest without reducing cardiovascular events."
    },
    "learningObjective": "Manage perioperative beta-blockers: continue chronic therapy on the morning of surgery to avoid rebound ischemia, but avoid acute de novo initiation before surgery (POISE trial).",
    "necessaryInference": "Chronic beta-blockers must be continued perioperatively (rebound ischemia if stopped). De novo beta-blockers should NOT be started acutely on the day of surgery (POISE showed increased stroke/death).",
    "shortestValidSolution": "Continue chronic beta-blockers on morning of surgery; avoid acute de novo initiation (POISE trial).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/18479744/",
      "https://pubmed.ncbi.nlm.nih.gov/25088230/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests landmark POISE trial findings and ACC/AHA guidelines: distinguishing mandatory chronic continuation from dangerous acute de novo initiation.",
      "distractorExclusionNotes": "Stopping chronic beta-blockers causes adrenergic rebound MI; acute initiation causes stroke and death; POISE-2 showed clonidine increases cardiac arrest.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0282",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Nervous System",
    "topic": "Inpatient Delirium Multicomponent Non-Pharmacological Management",
    "vignette": "An 82-year-old woman is admitted to the general medical ward for treatment of community-acquired pneumonia. On hospital day 2, she develops acute confusion, waxing and waning attention, and disorientation to time and place. At 1:00 AM, she becomes agitated, attempts to climb over the bed rails, and accuses the nursing staff of stealing her purse. Medical chart review reveals no history of dementia. Physical examination shows no focal neurological deficits. Vital signs are stable, and oxygen saturation is 96% on 2 L/min nasal cannula. Review of medications shows she was started on ceftriaxone, azithromycin, and diphenhydramine 50 mg orally at bedtime for insomnia. The night intern is paged by the nurse requesting a prescription for intravenous haloperidol 2 mg every 4 hours as needed to 'calm her down and keep her in bed.' Which of the following is the most appropriate management approach?",
    "options": [
      "Prescribe scheduled intravenous haloperidol every 4 hours to suppress nocturnal agitation",
      "Discontinue diphenhydramine and initiate multicomponent non-pharmacological delirium care",
      "Apply four-point physical leather wrist and ankle restraints to prevent patient mobility",
      "Administer intravenous lorazepam boluses every 2 hours to provide sedation and calming",
      "Obtain an emergent noncontrast head CT scan and begin intravenous broad-spectrum acyclovir"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Clinical trials and American Geriatrics Society (AGS) guidelines demonstrate that routine antipsychotics (haloperidol, quetiapine) do NOT shorten delirium duration, reduce hospital length of stay, or decrease mortality. They carry significant risks of extrapyramidal symptoms, QTc prolongation, and excess mortality, and are strictly reserved as a last resort for severe physical agitation threatening immediate patient safety.",
      "B": "Correct. According to AGS guidelines and the Hospital Elder Life Program (HELP), the primary, evidence-based management of delirium is non-pharmacological multicomponent prevention and treatment: 1) Discontinuing high-risk deliriogenic medications (diphenhydramine is a potent anticholinergic that directly triggered this delirium); 2) Environmental and cognitive reorientation (clocks, calendars, daylight exposure, quiet nighttime); 3) Sensory optimization (returning glasses and hearing aids); 4) Early mobility and physical therapy; and 5) Providing a 1-to-1 bedside companion or family presence. Pharmacotherapy does not cure delirium and is reserved only for severe behavioral crises unresponsive to non-pharmacological de-escalation.",
      "C": "Physical restraints increase agitation, struggle-related injuries, prolonged delirium, aspiration, and asphyxiation, and are strongly discouraged.",
      "D": "Benzodiazepines (lorazepam) paradoxically worsen delirium in older adults and increase fall and aspiration risk; they are indicated only for alcohol or sedative withdrawal delirium.",
      "E": "Acyclovir and head CT are unindicated in classic medication-induced (diphenhydramine) post-admission delirium without focal signs or fever."
    },
    "learningObjective": "Manage inpatient delirium using multicomponent non-pharmacological interventions and deliriogenic drug cessation, reserving antipsychotics only for imminent safety hazards.",
    "necessaryInference": "Elderly patient develops acute fluctuating confusion after receiving diphenhydramine (anticholinergic trigger). First-line therapy is stopping diphenhydramine and implementing non-pharmacological HELP protocol. Routine haloperidol does not treat delirium.",
    "shortestValidSolution": "Inpatient delirium -> Stop offending drugs (diphenhydramine) + non-pharmacological measures (avoid routine antipsychotics).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/25470059/",
      "https://pubmed.ncbi.nlm.nih.gov/30693946/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Emphasizes the modern AGS geriatric guidelines prioritizing non-pharmacological delirium care and deprecating the historic overuse of chemical (haloperidol) and physical restraints.",
      "distractorExclusionNotes": "Haloperidol does not shorten delirium; physical restraints cause injury; lorazepam worsens delirium; acyclovir is for herpes encephalitis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0283",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Advance Directive Substituted Judgment versus Family Demand",
    "vignette": "A 78-year-old man with severe, end-stage ischemic cardiomyopathy (ejection fraction 15%) and oxygen-dependent COPD is admitted to the intensive care unit in septic shock secondary to urosepsis. He is now comatose and intubated on multiple vasopressors with worsening anuric acute kidney injury. His medical record contains a valid, legally executed living will and durable power of attorney for healthcare completed 1 year ago when he was fully competent. The living will explicitly states: 'If I develop a terminal or irreversible condition with no reasonable expectation of recovery, I direct that life-sustaining procedures\u2014including cardiopulmonary resuscitation, long-term mechanical ventilation, and renal replacement therapy\u2014be withheld or withdrawn, and that I be permitted to die naturally with comfort care.' The patient's designated surrogate (his son) arrives from out of state and demands: 'My father is a fighter! I demand you start continuous hemodialysis and perform chest compressions if his heart stops!' Which of the following is the most ethically and legally appropriate course of action?",
    "options": [
      "Immediately comply with the son's demands and initiate hemodialysis because the designated surrogate always has final authority",
      "Request immediate hospital security to evict the son from the ICU",
      "Follow the instructions of the patient's authenticated advance directive, decline the initiation of hemodialysis, and initiate a goals-of-care conference to align the son with his father's documented wishes",
      "Petition a court to appoint a temporary public guardian to supersede both the son and the advance directive",
      "Initiate hemodialysis but quietly agree not to perform CPR if cardiac arrest occurs ('slow code')"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "A surrogate's legal and ethical authority is strictly bounded by 'substituted judgment'\u2014making the decision the patient would make for himself based on known values. A surrogate does not have the legal or moral authority to contradict a competent patient's clear, authentic, written advance directive.",
      "B": "Evicting family members with security is an antagonistic failure of communication; the son is grieving and requires supportive, structured counseling.",
      "C": "Correct. In medical ethics and health law, patient autonomy takes precedence. When a patient previously executed a clear, valid, and specific advance directive (living will) while competent, that document represents the authentic voice and substituted judgment of the patient. Surrogates and family members do not possess the ethical or legal authority to override explicit patient directives. The healthcare team must honor the patient's documented refusal of invasive life-sustaining therapies (declining dialysis and CPR), while providing compassionate communication and palliative care to guide the grieving son to understand and honor his father's autonomous decisions.",
      "D": "Court appointment of a guardian is unnecessary and inappropriate when a valid, unambiguous advance directive already exists.",
      "E": "Performing a 'slow code' (faking resuscitation) is deceitful, fraudulent, and an egregious ethical violation universally condemned by medical societies."
    },
    "learningObjective": "Uphold patient autonomy by honoring an authenticated, unambiguous advance directive over conflicting surrogate demands, utilizing the principle of substituted judgment.",
    "necessaryInference": "Comatose patient with clear written advance directive refusing dialysis/CPR in irreversible disease. Surrogate demands CPR and dialysis. The authenticated advance directive reflects patient autonomy and overrides surrogate demands. Team must uphold the directive.",
    "shortestValidSolution": "Clear advance directive refusing life-support overrides conflicting surrogate demands.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/22495333/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests fundamental legal and bioethical hierarchy: understanding that explicit patient advance directives supersede surrogate preferences (substituted judgment doctrine).",
      "distractorExclusionNotes": "Surrogates cannot override authenticated advance directives; 'slow codes' are unethical; guardianship is unnecessary; security eviction is destructive.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0284",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Brain Death Determination Apnea Testing Criteria",
    "vignette": "A 26-year-old man is admitted to the neurocritical care unit following a severe traumatic brain injury sustained in a motor vehicle collision. Four days after decompressive craniectomy, his clinical condition deteriorates. The neurointensivist initiates evaluation for death by neurological criteria (brain death). Preconditions are verified: core body temperature is 36.8\u00b0C, systolic blood pressure is maintained at 115 mm Hg with a low-dose norepinephrine infusion, and comprehensive toxicology screens and therapeutic drug levels verify complete absence of CNS-depressant drugs or residual neuromuscular blockade. Clinical examination reveals deep coma, absent pupillary reflexes, absent corneal reflexes, absent oculocephalic and oculovestibular (cold caloric) reflexes, and absent gag and cough reflexes. The physician prepares to perform the formal apnea challenge test. Which of the following describes the correct procedure and definitive confirmatory criteria for a positive apnea test?",
    "options": [
      "Disconnect the ventilator without oxygenation and wait until the pulse oximeter reads < 75%",
      "Administer an intravenous bolus of atropine 2 mg and observe for an increase in heart rate of > 10%",
      "Perform bilateral carotid angiography to confirm absence of intracranial blood flow prior to clinical testing",
      "Pre-oxygenate with 100% FiO2, deliver 100% oxygen via an insufflation catheter down the endotracheal tube, disconnect mechanical ventilation, observe for respiratory efforts for 8 to 10 minutes, and obtain an arterial blood gas confirming PaCO2 >= 60 mm Hg (or >= 20 mm Hg above baseline) with arterial pH < 7.28 without respiratory effort",
      "Disconnect the ventilator and terminate the test immediately if the patient's heart rate drops below 90/min"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Allowing severe hypoxemia (pulse ox < 75%) without oxygenation is hazardous and causes cardiac arrest; apnea testing requires continuous oxygen insufflation (apneic oxygenation) to prevent hypoxemia while allowing hypercapnia to accumulate.",
      "B": "The atropine challenge test is an obsolete, unvalidated test that does not determine brain death.",
      "C": "Ancillary testing (cerebral angiography, nuclear scan, transcranial Doppler) is indicated ONLY when the clinical examination or apnea test cannot be safely completed (e.g., severe refractory hypoxemia or hypotension during apnea); it is not required when clinical and apnea testing can be completed.",
      "D": "Correct. According to the American Academy of Neurology (AAN) consensus guidelines for brain death determination, the apnea test evaluates the responsiveness of medullary respiratory centers to severe hypercapnia. The protocol mandates: 1) Pre-oxygenation with 100% FiO2 for >= 10 minutes to PaO2 > 200 mm Hg; 2) Delivery of continuous 100% oxygen (e.g., 6 L/min via tracheal insufflation catheter); 3) Disconnection from mechanical ventilation; and 4) Direct observation for 8 to 10 minutes for any spontaneous respiratory effort. If no respiratory effort is observed and post-test arterial blood gas demonstrates a PaCO2 >= 60 mm Hg (or a >= 20 mm Hg rise above baseline) with an accompanying acidotic pH (< 7.28), the apnea test is positive, confirming the absence of brainstem respiratory drive and establishing legal death by neurological criteria.",
      "E": "Bradycardia alone without severe hypotension or hypoxemia does not mandate immediate termination, although true hemodynamic instability (systolic BP < 90 or SaO2 < 85%) requires aborting the test and reconnecting the ventilator."
    },
    "learningObjective": "Demonstrate the standardized protocol for brain death determination, executing the apnea challenge test and confirming PaCO2 >= 60 mm Hg (or >= 20 mm Hg rise) without respiratory effort.",
    "necessaryInference": "Brain death determination: prerequisites met (normothermia, normotension, no sedatives), brainstem reflexes absent. Apnea test confirms loss of medullary respiratory drive when PaCO2 >= 60 mm Hg (or 20 mm Hg above baseline) with no spontaneous breaths.",
    "shortestValidSolution": "Apnea test positive criteria -> PaCO2 >= 60 mm Hg (or >= 20 mm Hg increase) with no spontaneous respiratory efforts.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/20530737/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests American Academy of Neurology (AAN) brain death guidelines: preconditions, apneic oxygenation protocol, and precise quantitative PaCO2 criteria.",
      "distractorExclusionNotes": "Hypoxemia is prevented with oxygen insufflation; atropine test is obsolete; ancillary tests are used only when apnea cannot be done; simple bradycardia does not invalidate test.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0285",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Organ Donation Professional Separation of Clinical and Procurement Teams",
    "vignette": "A 31-year-old woman is admitted to the neurointensive care unit after suffering a catastrophic, non-survivable subarachnoid hemorrhage from a ruptured intracranial aneurysm. Formal clinical evaluation and apnea testing confirm death by neurological criteria (brain death). The attending neurointensivist notes on the state donor registry that the patient is a registered organ donor. The intensivist walks into the family waiting room to inform the grieving parents and husband that brain death testing is complete. Which of the following is the most ethically and legally appropriate approach regarding the introduction and discussion of organ donation?",
    "options": [
      "The attending physician should immediately combine the notification of death with a direct request for organ donation, offering a financial incentive for funeral expenses",
      "The attending physician should ask the family to sign organ procurement forms before explaining that brain death has been certified",
      "The attending physician should override the state registry if the husband objects to donation",
      "The attending physician should terminate mechanical ventilation immediately without notifying the organ procurement organization",
      "The attending physician should 'decouple' the conversations: first explain brain death and ensure the family understands that the patient has died, and then allow a specialized representative from the local Organ Procurement Organization (OPO) to lead the sensitive discussion regarding organ donation"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Combining death notification with an immediate organ request ('coupling') increases family confusion and distrust; federal law explicitly prohibits financial incentives for organ donation.",
      "B": "Requesting donation forms before the family has understood and accepted the reality of death is coercive and destroys therapeutic trust.",
      "C": "Under the Uniform Anatomical Gift Act (UAGA) in all 50 states, a competent adult's first-person authorization (donor registry designation) constitutes a legally binding anatomical gift that family members do not have legal standing to revoke (First-Person Consent law).",
      "D": "Federal Centers for Medicare & Medicaid Services (CMS) regulations mandate that hospitals notify the local OPO in a timely manner for all imminent or certified deaths prior to withdrawal of support.",
      "E": "Correct. Federal regulations (CMS Conditions of Participation) and the Association of Organ Procurement Organizations (AOPO) recommend the ethical practice of 'decoupling': separating the notification of death from the discussion of organ donation. The primary medical team should first compassionately inform the family of death (explaining brain death clearly). Once the family has processed this reality, a trained, specialized coordinator from the regional Organ Procurement Organization (OPO)\u2014often accompanied by hospital spiritual care or social work\u2014leads the donation conversation. This strict separation eliminates perceived conflicts of interest (that the medical team gave up on the patient to harvest organs) and increases family authorization rates."
    },
    "learningObjective": "Apply ethical and regulatory standards for organ donation: decouple death notification from procurement discussions and utilize specialized OPO coordinators to avoid conflicts of interest.",
    "necessaryInference": "Following brain death confirmation, federal regulations and medical ethics dictate 'decoupling': the clinical team communicates the reality of death, and a specialized OPO coordinator leads the donation discussion to avoid perceived conflicts of interest.",
    "shortestValidSolution": "Organ donation protocol -> Decouple death notification from donation discussion; OPO coordinator conducts donation discussion.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/22495333/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests federal CMS regulations and ethical standards in organ donation: the necessity of 'decoupling' and the role of specialized OPO coordinators.",
      "distractorExclusionNotes": "Direct physician solicitation and financial incentives are illegal/unethical; pre-death donation requests are coercive; first-person consent is legally binding; terminating ventilation without OPO notification violates CMS rules.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0286",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Informed Refusal of Blood Transfusion in Jehovah Witness",
    "vignette": "A 24-year-old G1P1 woman develops massive postpartum hemorrhage secondary to uterine atony immediately following an uncomplicated vaginal delivery of a healthy infant. Total estimated blood loss is 1,800 mL. Uterotonic agents (oxytocin, methylergonovine, carboprost, and misoprostol) and intrauterine balloon tamponade achieve partial hemostasis. Vital signs are: blood pressure 84/52 mm Hg, pulse 132/min, respirations 24/min. Physical examination shows pallor and cool extremities, but the patient remains fully alert, oriented to person, place, time, and situation, and articulates coherent clinical decisions. Complete blood count reveals: hemoglobin 5.2 g/dL and platelets 98,000/mm3. The obstetrician recommends an emergency transfusion of 2 units of packed red blood cells. The patient explicitly and calmly refuses blood transfusion, explaining that she is a devout Jehovah's Witness and that accepting allogeneic blood products violates her core religious beliefs. She signed an advance refusal card witnessed by her husband. Her husband confirms this is her steadfast wish. Which of the following is the most appropriate ethical and clinical action?",
    "options": [
      "Respect the competent patient's informed refusal of allogeneic blood transfusion, maximize non-blood resuscitation (IV crystalloids, tranexamic acid, high-flow oxygen, recombinant factor VIIa or prothrombin complex concentrate if permitted), and prepare for surgical intervention if bleeding continues",
      "Administer blood products immediately under emergency implied consent because maternal death leaves an orphaned newborn infant",
      "Sedate the patient with propofol and transfuse packed red blood cells while she is incapacitated",
      "Seek an emergency court order to compel blood transfusion based on the state's interest in preserving maternal life for the newborn",
      "Discharge the patient from the hospital immediately due to non-compliance"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. In medical ethics and US common law, a competent adult has an absolute fundamental right to bodily integrity and self-determination, which includes the right to refuse any medical treatment, even life-sustaining therapies such as blood transfusions. The physician must verify decision-making capacity, ensure the patient understands the high risk of death without transfusion, and clarify specific acceptable blood fractions (e.g., cell salvage, albumin, factor concentrates, EPO). Once capacity and informed refusal are confirmed, the refusal must be respected. Transfusing blood against a competent adult's refusal constitutes legal battery. Non-blood volume expanders, hemostatic agents (tranexamic acid), and surgical measures must be maximized.",
      "B": "Emergency implied consent applies only to incapacitated patients when their wishes are unknown; it cannot override an explicit refusal by a competent adult.",
      "C": "Surreptitious sedation to violate a patient's documented refusal is an egregious criminal battery and professional misconduct.",
      "D": "Courts consistently uphold a competent pregnant or postpartum woman's right to refuse blood products; the state's interest in protecting minor children does not override a competent adult parent's constitutional right to refuse bodily invasion.",
      "E": "Abandoning a hemorrhaging patient is gross medical abandonment and malpractice."
    },
    "learningObjective": "Uphold a competent patient's right to refuse life-saving blood products (Jehovah's Witness doctrine) and optimize non-blood resuscitation modalities.",
    "necessaryInference": "Competent postpartum adult refuses blood transfusion based on religious beliefs. Competent adults have the absolute right to refuse life-sustaining therapy. Refusal must be respected; non-blood modalities maximized. Overriding refusal is battery.",
    "shortestValidSolution": "Competent Jehovah's Witness refuses blood transfusion -> Respect refusal, maximize non-blood therapies.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/22495333/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests fundamental legal and bioethical principle of patient autonomy: respecting competent refusal of life-saving blood transfusion and utilizing non-blood resuscitation.",
      "distractorExclusionNotes": "Emergency implied consent applies only to incapacitated patients; sedation to transfuse is criminal battery; courts reject overriding parental refusal; abandonment is illegal.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0287",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Emergency Implied Consent in Incapacitated Trauma Resuscitation",
    "vignette": "An unidentified man estimated to be 30 years old is brought to the trauma center by paramedics after being struck by a high-speed commuter train. On arrival, he is unresponsive (Glasgow Coma Scale score 3), intubated, and in hemorrhagic shock. Vital signs: blood pressure 64/38 mm Hg, pulse 144/min. Physical examination reveals an open, unstable 'book-type' pelvic fracture with massive perineal hemorrhage and expanding retroperitoneal hematoma. FAST examination reveals massive free intraperitoneal fluid. The patient has no identification, wallet, or phone, and no family members or surrogates are present or immediately reachable. The trauma surgeon determines that without emergent exploratory laparotomy, pelvic packing, and blood transfusions within minutes, the patient will suffer irreversible cardiac arrest. Which of the following is the most appropriate ethical and legal justification for proceeding immediately to the operating room without signed consent?",
    "options": [
      "Substituted judgment doctrine based on state welfare department consultation",
      "The emergency exception to informed consent (doctrine of implied consent)",
      "Parens patriae doctrine requiring state governor approval",
      "Wait until a hospital ethics committee meeting can be convened in 2 hours",
      "Withhold surgery and administer comfort care until identity can be verified through fingerprint database searches"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Substituted judgment requires knowing the patient's prior stated values or having an authorized surrogate; an unidentified unconscious stranger has no available substituted judgment.",
      "B": "Correct. The 'emergency exception' to informed consent (often termed implied consent) is a cornerstone of medical law and ethics. It legally and ethically authorizes physicians to provide emergency life-saving treatment or surgery to an incapacitated patient when: 1) The patient lacks decision-making capacity; 2) There is an immediate threat to life or limb; 3) No authorized surrogate or advance directive is immediately available; and 4) A reasonable person would be presumed to consent to life-saving treatment under identical circumstances. The surgeon must document the life-threatening emergency and the inability to obtain consent in the medical record and proceed immediately.",
      "C": "Parens patriae refers to the state's authority to protect vulnerable individuals (e.g., minors or disabled adults), not emergency trauma surgery approval.",
      "D": "Delaying life-saving hemorrhage control for an ethics committee meeting guarantees the patient's death.",
      "E": "Withholding life-saving intervention from a salvagable unidentified trauma victim constitutes medical negligence and abandonment."
    },
    "learningObjective": "Apply the emergency exception to informed consent (implied consent) to provide immediate life-saving surgery to an incapacitated trauma patient when no surrogate is available.",
    "necessaryInference": "Unidentified, unconscious trauma patient in hemorrhagic shock with life-threatening injury. No surrogate available. The emergency exception (implied consent) authorizes immediate life-saving surgery under the presumption that a reasonable person would consent.",
    "shortestValidSolution": "Incapacitated trauma patient in life-threatening shock with no surrogate -> Emergency exception (implied consent) authorizes immediate surgery.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/22495333/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests core emergency medicine ethics: applying the doctrine of implied consent in severe trauma to prevent fatal treatment delays.",
      "distractorExclusionNotes": "Substituted judgment is impossible without identity/surrogate; parens patriae is unrelated; ethics committee delays are lethal; withholding surgery is malpractice.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0288",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Medical Error Disclosure Transparent Communication and Apology",
    "vignette": "A 68-year-old hospitalized man with atrial fibrillation receives a morning medication dose from a newly hired ward nurse. Instead of receiving his scheduled oral metoprolol tartrate 25 mg, the nurse mistakenly administers 250 mg (a 10-fold dosing error due to a misread decimal on a paper backup chart). Two hours later, the patient becomes lightheaded and dizzy with a blood pressure of 82/50 mm Hg and a heart rate of 38/min. The medical team administers 1 mg of IV atropine and 1 liter of IV crystalloid, and within 4 hours the patient's vital signs and mental status normalize with no permanent physiological sequelae. An internal hospital safety report is filed. The patient asks his attending physician why he suddenly became dizzy and required emergency intravenous medications. Which of the following is the most ethically and professionally appropriate response by the attending physician?",
    "options": [
      "Inform the patient that he experienced an unpredictable, idiosyncratic vasovagal reaction to his regular morning heart pill",
      "Blame the nursing staff entirely for gross incompetence and advise the patient to retain a personal injury attorney",
      "Fully and transparently disclose that a 10-fold medication dosing error occurred, explain the immediate corrective actions taken, apologize sincerely for the error, discuss institutional steps being implemented to prevent recurrence, and assure him that all related medical expenses will be waived",
      "Advise the patient that hospital legal policy strictly prohibits discussing medication events under peer-review protection laws",
      "Withhold any explanation because the patient suffered no permanent physical harm and full disclosure would only cause unnecessary emotional anxiety"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Fabricating a medical condition (vasovagal reaction) to conceal an iatrogenic error is dishonest, unethical, and a direct breach of physician fiduciary duty.",
      "B": "Blaming colleagues in front of patients is unprofessional and undermines institutional safety reporting and team culture.",
      "C": "Correct. According to the American Medical Association (AMA) Code of Medical Ethics (Opinion 2.1.3), The Joint Commission, and modern healthcare 'Communication and Optimal Resolution' (CANDOR) frameworks, physicians have an absolute ethical, professional, and legal obligation to disclose medical errors that cause harm or near-harm to patients. Full disclosure requires: 1) A prompt, transparent, factual explanation of what occurred in clear lay language; 2) Explanation of the immediate medical treatment provided to reverse the error; 3) A sincere, empathetic apology; 4) Reassurance that institutional safety mechanisms are being reviewed to prevent recurrence; and 5) Assurance that financial costs resulting from the error will be covered. Studies prove that prompt, honest disclosure and apology reduce malpractice litigation and rebuild patient trust.",
      "D": "Peer review protection protects internal safety committee deliberations from discovery in lawsuits; it does not exempt clinicians from their fiduciary duty to disclose errors to patients.",
      "E": "The absence of permanent physical injury does not eliminate the duty of disclosure; patients have an autonomous right to know about events that alter their bodily state."
    },
    "learningObjective": "Execute transparent, empathetic disclosure of medical errors to patients, providing a clear factual account, sincere apology, corrective plan, and cost waiver.",
    "necessaryInference": "Iatrogenic 10-fold overdose causing symptomatic bradycardia reversed with atropine. Ethical standards (AMA Opinion 2.1.3) mandate prompt, truthful disclosure, sincere apology, and systemic corrective actions. Concealment is unethical.",
    "shortestValidSolution": "Medical error disclosure -> Full transparent disclosure, sincere apology, explanation of corrective steps, and cost waiver.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/26444996/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests ethical standards on medical error disclosure (CANDOR process): transparent truth-telling, empathetic apology, and organizational corrective action.",
      "distractorExclusionNotes": "Concealment/lying is fraud; scapegoating colleagues is unprofessional; peer-review does not block patient disclosure; absence of permanent harm does not negate disclosure.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0289",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Potentially Non-Beneficial Treatment Multistep Conflict Resolution",
    "vignette": "An 84-year-old woman with end-stage vascular dementia, severe anoxic brain injury from a cardiac arrest 3 weeks ago, and multi-organ failure is admitted to the intensive care unit. She is comatose, ventilator-dependent, on maximal doses of three vasopressors (norepinephrine, vasopressin, epinephrine) with gangrenous acral necrosis, anuric on continuous venovenous hemodiafiltration, and has extensive stage 4 sacral decubitus ulcers extending to bone with osteomyelitis. Two independent critical care attendings and a palliative medicine specialist document that full cardiopulmonary resuscitation in the event of cardiac arrest would be medically non-beneficial ('futile'), offering zero physiological chance of achieving survival to discharge and merely causing traumatic rib fractures and prolonged suffering. The patient has no advance directive. Her designated surrogate (her son) insists: 'You must do everything! If her heart stops, you must shock her and perform CPR for as long as it takes!' Which of the following is the most appropriate multistep conflict resolution approach according to professional society guidelines on potentially non-beneficial treatment?",
    "options": [
      "Unilaterally execute a Do-Not-Resuscitate order and instruct the healthcare team to conceal it from the surrogate",
      "Immediately discontinue all vasopressors and extubate the patient against the surrogate's explicit instructions",
      "Accede unconditionally to the surrogate's demands because physicians are legally obligated to provide requested CPR",
      "Initiate formal ethics consultation, seek a second opinion, offer transfer, and resolve via institutional due process",
      "Contact law enforcement authorities to arrest the surrogate for criminal medical neglect and immediate elder abuse"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Unilaterally writing a concealed DNR order without communication or due process is deceptive, unethical, and violates hospital policy and patient rights.",
      "B": "Abrupt, unilateral withdrawal of life support without procedural due process destroys trust and leads to legal injunctions.",
      "C": "Physicians are under no ethical or legal obligation to provide treatments that are medically non-beneficial (treatments that cannot achieve their physiological goals or provide benefit). Forcing CPR on a dying patient with multisystem organ failure violates the ethical principle of non-maleficence.",
      "D": "Correct. According to the multi-society consensus policy on 'Responding to Requests for Potentially Inappropriate Treatments in ICUs' (ATS/AACN/ACCP/ESICM/SCCM), when clinicians determine an intervention (e.g., CPR) is medically non-beneficial, they should follow a structured, multi-step procedural dispute resolution process: 1) Intensive, proactive, compassionate communication; 2) Enlisting palliative care and social work; 3) Formal consultation with the hospital Ethics Committee; 4) Obtaining an independent second medical opinion; 5) Offering and facilitating transfer to another facility or clinician willing to provide the requested intervention; and 6) If transfer is declined or impossible, allowing the clinical team to withhold/withdraw the non-beneficial intervention under institutional policy, while providing robust palliative care.",
      "E": "Surrogate grief and emotional struggle does not constitute criminal elder abuse."
    },
    "learningObjective": "Apply the ATS/SCCM multistep procedural dispute resolution process for potentially non-beneficial (futile) treatment requests in the intensive care unit.",
    "necessaryInference": "Surrogate demands CPR in an actively dying patient with irreversible multi-organ failure where CPR is medically non-beneficial. Society guidelines mandate a formal procedural conflict resolution pathway: ethics consultation, second opinion, transfer attempt, and institutional due process.",
    "shortestValidSolution": "Conflict over non-beneficial treatment (futility) -> Multistep procedural resolution: ethics consult, second opinion, transfer attempt, institutional due process.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/25915157/",
      "https://pubmed.ncbi.nlm.nih.gov/15797988/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests multi-society consensus guidelines on handling requests for potentially inappropriate/futile treatment, emphasizing institutional procedural due process over unilateral action.",
      "distractorExclusionNotes": "Secret DNR orders are unethical; abrupt unilateral withdrawal lacks due process; physicians are not obligated to provide futile treatments; criminal charges are inappropriate.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0290",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Impaired Colleague Immediate Protection and PHP Referral",
    "vignette": "An orthopedic surgery resident is scrubbing in for an emergency open reduction and internal fixation of a compound femur fracture at 8:00 PM. The senior attending surgeon arrives in the scrub room to scrub in for the case. The resident notices that the attending has bloodshot eyes, unsteady gait, slurred speech, and an unmistakable strong odor of alcohol on his breath. When the resident asks how he is feeling, the attending laughs, stumbles against the scrub sink, and states: 'I had a couple of drinks at a retirement party, but I can do this surgery in my sleep!' No other operating room personnel have witnessed this interaction yet. Which of the following is the most appropriate ethical, professional, and legal immediate action for the resident to take?",
    "options": [
      "Say nothing, scrub in, and carefully monitor the attending's operative technique throughout the case to prevent errors",
      "Allow the attending to make the skin incision and then take over the case if bleeding occurs",
      "Advise the attending to chew strong mint gum and drink a cup of black coffee before entering the operating room",
      "Tell the patient and family immediately that the surgeon is intoxicated and advise them to cancel the surgery",
      "Intervene immediately to prevent the attending from participating in the surgery, notify the operating room charge nurse and surgical department chair/chief of surgery to secure an alternative surgeon, and report the physician to the institutional Physician Health Program (PHP)"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Allowing an intoxicated surgeon to operate places the patient in direct, imminent danger of catastrophic harm or death; passively 'monitoring' an impaired surgeon is complicit negligence.",
      "B": "Waiting for an error or bleeding to occur before intervening is reckless and violates the core duty of non-maleficence.",
      "C": "Mint gum and coffee do not accelerate alcohol elimination or restore psychomotor coordination; this constitutes aiding and abetting impaired practice.",
      "D": "Alarming the patient and family without first securing emergency patient safety and administrative coverage is premature and disorganizes clinical care; the immediate operational priority is removing the surgeon and finding a substitute.",
      "E": "Correct. According to the AMA Code of Medical Ethics (Opinion 9.3.2) and state medical licensing boards, a physician who observes an impaired colleague has a dual ethical duty: 1) Primary and immediate duty to protect patient safety: the physician must intervene immediately to prevent the impaired colleague from delivering patient care, notifying the operating room nursing leadership and department chair to arrange emergency surgeon replacement; and 2) Duty to assist the colleague: confidential reporting to the hospital medical staff leadership and state Physician Health Program (PHP). PHPs provide confidential evaluation, rehabilitation, and monitored recovery to safeguard patients while rehabilitating the physician."
    },
    "learningObjective": "Manage an acutely impaired colleague: intervene immediately to prevent patient harm, secure clinical replacement, and report to the Physician Health Program (PHP).",
    "necessaryInference": "Surgeon arrives intoxicated to the operating room. Patient safety is the overriding imperative. The resident must intervene immediately to stop the surgeon from operating, alert department leadership for replacement, and report to PHP.",
    "shortestValidSolution": "Acutely intoxicated colleague -> Stop participation immediately, notify leadership for replacement, report to Physician Health Program.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/22495333/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests professional ethics and patient safety protocols regarding the acutely impaired physician in a high-risk procedural environment.",
      "distractorExclusionNotes": "Allowing impaired surgeon to operate is malpractice; coffee/mints cannot sober up; inciting panic with family delays emergency replacement; immediate intervention is mandatory.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0291",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Maternal Autonomy Primacy in Maternal-Fetal Conflict",
    "vignette": "A 32-year-old G2P1 woman at 38 weeks gestation presents in early active labor with contractions every 5 minutes. A routine third-trimester ultrasound at 34 weeks confirmed complete placenta previa covering the internal cervical os. The attending obstetrician thoroughly explains that attempting vaginal delivery with complete placenta previa carries an extreme risk of catastrophic, life-threatening maternal hemorrhage and fetal exsanguination and death, and strongly recommends an immediate cesarean delivery. The patient demonstrates complete understanding of these risks, can clearly articulate the lethal hazards to both herself and her fetus, and is confirmed by psychiatric evaluation to possess full medical decision-making capacity. However, due to deeply held personal and spiritual convictions regarding natural childbirth, she refuses cesarean delivery and insists: 'I understand the risks, but my body was made to birth naturally. I refuse surgery.' Which of the following is the most ethically and legally appropriate course of action for the obstetrician?",
    "options": [
      "Respect the competent patient's refusal of cesarean delivery, continue supportive labor care, prepare for emergency hemorrhage resuscitation, and maintain ongoing non-coercive counseling",
      "Administer general anesthesia against her will and perform emergency cesarean section under the doctrine of fetal rescue",
      "Seek an emergency court order to restrain the patient and force a surgical cesarean delivery",
      "Terminate the physician-patient relationship immediately and discharge the patient from the labor and delivery unit",
      "Notify Child Protective Services to arrest the mother for imminent fetal endangerment"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. According to the American College of Obstetricians and Gynecologists (ACOG Committee Opinion No. 664) and landmark legal precedents, pregnant women possess the same fundamental rights to bodily integrity, self-determination, and medical decision-making as all other competent adults. A competent pregnant patient has the absolute ethical and legal right to refuse recommended medical or surgical interventions, including cesarean delivery, even when that refusal poses grave risks to fetal life. Forced surgery or court orders violate human rights, constitutional liberties, and medical ethics. The obstetric team must respect her refusal, continue compassionate supportive care, optimize non-operative resuscitation (IV access, crossmatched blood available), and maintain an open therapeutic dialogue.",
      "B": "Performing non-consensual surgery on a competent conscious adult constitutes criminal battery.",
      "C": "ACOG explicitly opposes seeking court-ordered medical interventions for pregnant women; judicial coercion damages public health and therapeutic trust.",
      "D": "Abandoning a laboring woman with complete placenta previa constitutes severe medical abandonment and malpractice.",
      "E": "An unborn fetus is not legally classified as a child under child welfare statutes, and criminalizing healthcare decisions undermines maternal-infant health."
    },
    "learningObjective": "Uphold maternal autonomy in maternal-fetal conflict: recognize that a competent pregnant woman has the absolute right to refuse surgical interventions, even if it jeopardizes fetal survival (ACOG Opinion 664).",
    "necessaryInference": "Competent pregnant patient with placenta previa refuses life-saving cesarean section after full informed consent. Under ACOG ethics, maternal autonomy is inviolable. Forced surgery or court orders are unethical and illegal.",
    "shortestValidSolution": "Competent pregnant woman refuses cesarean -> Respect refusal; forced surgery or court orders are prohibited (ACOG Opinion 664).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/27100424/",
      "https://pubmed.ncbi.nlm.nih.gov/15797988/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests fundamental bioethics in obstetrics: recognizing that ACOG strictly opposes forced cesarean delivery and affirms maternal autonomy over fetal rescue.",
      "distractorExclusionNotes": "Forced surgery is criminal battery; court orders are opposed by ACOG; abandonment is malpractice; child welfare laws do not apply to unborn fetuses in this manner.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0292",
    "exam": "Step 3",
    "subject": "Pediatrics",
    "system": "General Principles",
    "topic": "Adolescent Confidentiality and Mature Minor STI Protections",
    "vignette": "A 16-year-old unmarried high school student presents unaccompanied to an adolescent primary care clinic. She is sexually active with one male partner and uses condoms inconsistently. Over the past 5 days, she has developed mild dysuria, post-coital spotting, and a yellowish vaginal discharge. She requests testing for sexually transmitted infections (STIs) and prescription contraception. She specifically expresses terror that her parents will discover she is sexually active, pleading: 'My father will kick me out of the house if he finds out. Please promise you won't tell my parents.' Physical examination reveals cervical mucopurulent discharge and cervical motion tenderness without adnexal masses. Rapid nucleic acid amplification testing confirms Chlamydia trachomatis. Which of the following is the most appropriate ethical and legal management regarding parental notification and consent?",
    "options": [
      "Refuse to treat her until her parents sign an informed consent document in person",
      "Provide confidential antibiotic treatment for chlamydia and contraceptive counseling without parental notification, and ensure that billing and insurance explanations of benefits (EOBs) are suppressed or directed confidentially",
      "Treat the infection confidentially but notify her parents about the contraception request",
      "Notify her parents immediately because a 16-year-old lacks legal capacity to make medical decisions",
      "Notify her high school principal to initiate public health contact tracing"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Requiring parental consent for STI treatment is illegal under minor consent laws in all 50 US states and erects barriers that accelerate disease transmission and PID complications.",
      "B": "Correct. In all 50 US states and the District of Columbia, state statutes explicitly grant minors the legal authority to give independent, confidential consent for the diagnosis and treatment of sexually transmitted infections without parental knowledge or consent. Furthermore, most states allow confidential access to contraception, pregnancy care, substance abuse treatment, and outpatient mental healthcare under mature minor doctrines. According to the Society for Adolescent Health and Medicine (SAHM) and the AAP, confidentiality is essential to encourage adolescents to seek timely healthcare. Clinicians must also take active steps to ensure that confidentiality is not breached through electronic health record patient portals or health insurance explanations of benefits (EOBs) sent to parents.",
      "C": "Contraception and STI care are both legally protected confidential services in the vast majority of jurisdictions; bifurcating confidentiality violates adolescent health standards.",
      "D": "Mandatory parental notification for STIs is explicitly prohibited by state minor consent statutes.",
      "E": "School principals have no legal role in clinical STI management, and breaching confidentiality violates HIPAA and minor privacy laws."
    },
    "learningObjective": "Apply adolescent confidentiality and mature minor consent laws: provide confidential STI diagnosis, treatment, and contraception without parental notification or consent.",
    "necessaryInference": "16-year-old requests confidential STI testing and contraception. In all 50 states, minors have legal authority to consent to confidential STI diagnosis and treatment. Clinicians must protect confidentiality and prevent EOB/portal breaches.",
    "shortestValidSolution": "Adolescent STI care and contraception -> Provide confidential treatment without parental notification.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/24799086/",
      "https://pubmed.ncbi.nlm.nih.gov/15797988/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests adolescent medicine legal principles: universal minor consent for STI care across all 50 states and protecting confidentiality in billing/portals.",
      "distractorExclusionNotes": "Parental consent is not required for STIs in any state; contraception is protected; notifying parents violates minor consent statutes; notifying school violates HIPAA.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0293",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Medicare Hospice Benefit Six-Month Prognostic Eligibility",
    "vignette": "A 76-year-old woman with New York Heart Association (NYHA) Class IV heart failure secondary to ischemic cardiomyopathy (left ventricular ejection fraction 12%) is admitted to the hospital for the fourth time in 3 months with acute decompensated pulmonary edema despite optimal guideline-directed medical therapy. She has severe cardiac cachexia (BMI 17 kg/m2), refractory dyspnea at rest, and progressive cardiorenal syndrome with baseline creatinine 2.6 mg/dL. Her cardiologist documents that she is not a candidate for a left ventricular assist device (LVAD) or cardiac transplantation due to severe vascular comorbidities and frailty. During a family meeting, the patient states: 'I am exhausted by these hospitalizations. I don't want to come back to the hospital. I just want to stay in my own bed at home and be comfortable.' Which of the following represents the regulatory and clinical requirements for enrollment in the Medicare Hospice Benefit?",
    "options": [
      "The patient must enter an irreversible coma and have an signed do-not-resuscitate (DNR) order executed by a judge",
      "The patient must discontinue all oral medications, including diuretics and comfort medications",
      "Two physicians (the attending physician and hospice medical director) must certify that the patient has a terminal illness with a life expectancy of 6 months or less if the disease runs its normal course, and the patient must elect comfort-oriented palliative care over curative disease-modifying therapies",
      "Hospice benefits require certification that life expectancy is strictly less than 30 days",
      "The patient must be discharged from hospice care immediately if she survives beyond 6 months"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Hospice enrollment does not require coma or a judicial DNR order; alert, competent patients frequently enroll in hospice and designate their own goals.",
      "B": "Palliative medications that manage distressing symptoms (including loop diuretics for congestive heart failure dyspnea, opioids, and antiemetics) are fully covered and encouraged under hospice.",
      "C": "Correct. According to Centers for Medicare & Medicaid Services (CMS) regulations, eligibility for the Medicare Hospice Benefit requires two core criteria: 1) Two physicians (the patient's attending physician and the hospice medical director) must clinically certify that the patient has a terminal illness with a prognosis of 6 months or less if the terminal disease runs its anticipated natural course; and 2) The patient (or surrogate) must voluntarily elect palliative, comfort-focused care, agreeing to forgo Medicare Part A coverage for curative treatments directed at the terminal diagnosis. Palliative therapies aimed at symptom relief (e.g., diuretics for dyspnea, opioids for pain) are fully supported.",
      "D": "The statutory prognosis requirement is 6 months or less, not 30 days.",
      "E": "If a patient survives beyond 6 months, she can be recertified for subsequent hospice benefit periods (an initial 90-day period, a second 90-day period, and unlimited 60-day periods) as long as clinical documentation continues to demonstrate disease progression and terminal status."
    },
    "learningObjective": "Identify Medicare Hospice Benefit eligibility requirements: dual physician certification of a 6-month terminal prognosis and patient election of comfort-focused palliative care.",
    "necessaryInference": "End-stage heart failure patient seeking comfort care at home. CMS hospice eligibility requires certification of terminal prognosis <= 6 months by two physicians and electing comfort care over curative therapies.",
    "shortestValidSolution": "Medicare hospice eligibility -> 6-month terminal prognosis certified by two physicians + election of comfort care.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/22495333/",
      "https://pubmed.ncbi.nlm.nih.gov/15797988/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests health policy and regulatory knowledge of the Medicare Hospice Benefit: the 6-month certification rule and comfort-care election.",
      "distractorExclusionNotes": "Coma/judicial DNR is false; palliative diuretics are continued; 30-day window is incorrect; patients surviving > 6 months can be recertified.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0294",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Crisis Standards of Care and Independent Triage Teams",
    "vignette": "During a severe catastrophic public health pandemic, a regional hospital operates under declared governmental Crisis Standards of Care (CSC). The hospital's intensive care unit has 20 operational mechanical ventilators, all of which are currently occupied. Two patients arrive simultaneously in acute hypoxemic respiratory failure requiring immediate mechanical ventilation, but only a single newly freed ventilator is available: Patient A is a 24-year-old previously healthy woman with severe viral pneumonia and acute respiratory distress syndrome, with an estimated Sequential Organ Failure Assessment (SOFA) score of 4. Patient B is a 79-year-old man with end-stage multi-infarct dementia, severe COPD, and multi-organ failure with a SOFA score of 16. Which of the following reflects the ethical consensus and standard protocol for allocating this scarce ventilator under Crisis Standards of Care?",
    "options": [
      "The bedside intensivist caring for both patients should unilaterally decide which patient receives the ventilator based on personal clinical intuition",
      "The ventilator should be allocated to Patient B because medical ethics mandates absolute first-come, first-served allocation regardless of prognosis",
      "The ventilator should be auctioned to whichever patient's family can provide private financial compensation to the hospital",
      "Allocation should be determined by an independent Triage Committee using an objective, multi-principle allocation algorithm (such as SOFA scoring to maximize lives and life-years saved), thereby insulating front-line bedside clinicians from rationing decisions",
      "Withhold the ventilator from both patients to avoid potential legal liability"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Bedside clinicians should NEVER be forced to make bedside rationing decisions for their own patients; dual loyalty compromises patient advocacy and causes immense moral injury.",
      "B": "First-come, first-served (or lotteries) in severe crisis standards fails to maximize overall survival and disproportionately harms those who arrive late due to systemic disparities.",
      "C": "Financial wealth or ability to pay has zero ethical justification in triage allocation and is illegal under federal civil rights laws.",
      "D": "Correct. According to the National Academy of Medicine (NAM), Hastings Center, and Society of Critical Care Medicine (SCCM) guidelines on Crisis Standards of Care (CSC), scarce life-sustaining resource allocation during public health emergencies must follow core utilitarian and distributive justice principles: 1) Maximizing total lives and life-years saved, utilizing validated objective physiological scoring (such as SOFA scores) that assess short-term hospital survival; and 2) Separation of roles: allocation decisions MUST be made by an independent Triage Team/Triage Officer, completely removing front-line bedside physicians and nurses from rationing decisions to preserve the fiduciary patient-advocacy relationship and mitigate catastrophic clinician moral distress.",
      "E": "Withholding available life-saving equipment from both salvageable patients out of liability fear violates beneficence and duty of care."
    },
    "learningObjective": "Apply Crisis Standards of Care (CSC) allocation protocols: utilize independent triage committees and objective survival scoring (SOFA) to allocate scarce resources while protecting bedside clinicians from rationing conflicts.",
    "necessaryInference": "Scarce ventilator allocation under Crisis Standards of Care. Ethical consensus mandates allocation via an independent triage committee using objective prognostic scoring (SOFA) to maximize lives saved, insulating bedside physicians from rationing.",
    "shortestValidSolution": "Crisis standards scarce resource allocation -> Independent triage team using objective scoring (SOFA) to maximize lives saved.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/32227753/",
      "https://pubmed.ncbi.nlm.nih.gov/15797988/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests crisis standards of care and public health ethics: objective algorithmic scoring (SOFA) and utilizing an independent triage officer to separate bedside care from rationing.",
      "distractorExclusionNotes": "Bedside clinician rationing causes moral injury; first-come/first-served fails in pandemics; financial auctions are illegal/unethical; withholding equipment is negligence.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0295",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Physician Professional Boundary Maintenance and Gift Refusal",
    "vignette": "A 45-year-old male physician has provided comprehensive outpatient care to a 42-year-old female patient for mild hypertension and asthma over the past 3 years. The therapeutic relationship has been professional and productive. At the conclusion of an annual physical examination, the patient hands the physician a beautifully wrapped box containing a brand-new Swiss luxury wristwatch valued at approximately $4,500. She smiles warmly and says: 'Doctor, you have been so attentive to my needs and have listened to me like no one else. I want you to have this as a token of my personal affection, and I was hoping we could celebrate over a romantic dinner this Saturday evening.' Which of the following is the most ethically and professionally appropriate response by the physician?",
    "options": [
      "Accept the luxury watch gracefully to avoid offending the patient, but decline the dinner invitation",
      "Accept both the watch and the dinner invitation because the patient is a competent adult and medical care was completed",
      "Immediately report the patient to the police for attempted sexual harassment and terminate all outpatient clinic services",
      "Accept the watch and donate it immediately to the hospital foundation without informing the patient",
      "Politely and firmly decline both the luxury watch and the dinner invitation, clearly explaining that professional boundaries prohibit accepting expensive personal gifts or romantic relationships, while offering to continue her medical care if clear professional boundaries are respected"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Accepting an expensive ($4,500) personal gift creates a conflict of interest, implies romantic reciprocation, and violates AMA ethical standards on gifts from patients.",
      "B": "Engaging in a romantic or sexual relationship with a current patient is an egregious boundary violation universally prohibited by the AMA Code of Medical Ethics and constitutes grounds for immediate medical license revocation.",
      "C": "Calling the police is an excessive, retaliatory overreaction; boundary setting is a professional clinical communication responsibility.",
      "D": "Accepting the watch under false pretenses and donating it secretly is deceitful and fails to address the underlying boundary confusion.",
      "E": "Correct. According to the AMA Code of Medical Ethics (Opinions 1.2.14 [Gifts from Patients] and 9.1.1 [Romantic or Sexual Relationships with Patients]): 1) Sexual or romantic relationships between physicians and current patients are strictly unethical and illegal because the inherent power asymmetry and vulnerability of the patient make genuine consent impossible; and 2) While modest tokens of gratitude (e.g., baked goods, a book) may be accepted, expensive personal gifts (such as a $4,500 watch) must be declined because they compromise professional objectivity and create perceived obligations. The physician must politely, firmly, and transparently establish professional boundaries, decline both the gift and the invitation, and reassess whether a therapeutic relationship can continue or if formal transfer of care is required."
    },
    "learningObjective": "Maintain professional physician-patient boundaries by declining expensive gifts and romantic advances from current patients, upholding AMA ethical principles.",
    "necessaryInference": "Patient offers expensive luxury watch ($4,500) and romantic dinner invitation. Accepting either violates AMA ethics (Opinion 1.2.14 and 9.1.1). The physician must politely and firmly decline both, maintaining clear boundaries.",
    "shortestValidSolution": "Expensive gift and romantic invitation from current patient -> Decline both firmly, re-establish professional boundaries.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/22495333/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests professional ethics and boundary maintenance: managing romantic overtures and expensive personal gifts in outpatient practice.",
      "distractorExclusionNotes": "Accepting expensive gifts compromises objectivity; romantic relationships with patients result in license revocation; calling police is inappropriate; secret donation is deceptive.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0296",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Severe COPD Hypercapnic Respiratory Failure NIV and Intubation",
    "vignette": "A 66-year-old man with severe GOLD Stage 4 COPD (baseline FEV1 28% predicted) presents to the emergency department with acute worsening dyspnea, increased sputum purulence, and severe somnolence. Vital signs are: blood pressure 144/88 mm Hg, pulse 118/min, respirations 32/min with abdominal paradox, and oxygen saturation 86% on 4 L/min nasal cannula. Arterial blood gas (ABG) on arrival reveals: pH 7.22, PaCO2 78 mm Hg, PaO2 54 mm Hg, and HCO3- 32 mEq/L. He is promptly initiated on non-invasive positive pressure ventilation (NIV / bilevel positive airway pressure [BiPAP]) with IPAP 12 cm H2O and EPAP 5 cm H2O, along with nebulized bronchodilators and IV methylprednisolone. Two hours later, a repeat ABG demonstrates: pH 7.16, PaCO2 88 mm Hg, and PaO2 58 mm Hg. The patient is now obtunded, arousable only to deep sternal rub, and has weak, ineffective cough efforts with pooling of secretions in his hypopharynx. Which of the following is the most appropriate next step in management?",
    "options": [
      "Perform immediate endotracheal intubation and initiate invasive mechanical ventilation",
      "Increase the non-invasive IPAP to 24 cm H2O and continue close observation for another 4 hours",
      "Switch from BiPAP to high-flow nasal cannula (HFNC) at 60 L/min",
      "Administer intravenous doxapram 2 mg/min continuous infusion",
      "Administer intravenous naloxone 2 mg IV push"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. In acute hypercapnic respiratory failure from COPD exacerbation, non-invasive ventilation (NIV/BiPAP) is first-line therapy, reducing intubation rates and mortality. However, clear failure criteria for NIV mandate immediate transition to invasive mechanical ventilation. Key indicators of NIV failure include: 1) Worsening respiratory acidemia (pH falling from 7.22 to 7.16 with PaCO2 rising from 78 to 88 mm Hg); 2) Deterioration of neurological status (obtundation, inability to follow commands); 3) Inability to clear copious secretions; and 4) Severe respiratory muscle exhaustion. Delaying endotracheal intubation in an obtunded, failing patient leads to fatal aspiration, hypercapnic coma, and cardiac arrest.",
      "B": "Increasing IPAP to extreme pressures (24 cm H2O) in an obtunded patient who cannot protect his airway causes massive gastric insufflation, vomiting, and catastrophic aspiration.",
      "C": "High-flow nasal cannula improves oxygenation and provides modest dead space washout, but it cannot deliver the high ventilatory pressure support needed to reverse worsening hypercapnia in an obtunded patient failing BiPAP.",
      "D": "Doxapram is an obsolete respiratory stimulant with dangerous cardiac and CNS toxicity; it has no role in acute hypercapnic respiratory failure.",
      "E": "Naloxone treats opioid toxicity; this patient has respiratory failure from severe COPD and dynamic hyperinflation."
    },
    "learningObjective": "Recognize non-invasive ventilation (NIV) failure criteria in acute COPD hypercapnic respiratory failure (worsening acidemia, obtundation, secretion pooling) and direct immediate endotracheal intubation.",
    "necessaryInference": "COPD patient on BiPAP deteriorates after 2 hours: pH worsens to 7.16, PaCO2 rises to 88, and patient becomes obtunded with pooled secretions. These are definitive NIV failure criteria. Immediate endotracheal intubation is mandatory.",
    "shortestValidSolution": "COPD on BiPAP with worsening acidemia (pH 7.16) and obtundation -> Immediate endotracheal intubation.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/28734898/",
      "https://pubmed.ncbi.nlm.nih.gov/30422960/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests critical decision-making in pulmonary critical care: recognizing BiPAP failure thresholds and executing prompt intubation before catastrophic aspiration.",
      "distractorExclusionNotes": "Increasing BiPAP pressure in an obtunded patient causes aspiration; HFNC cannot ventilate severe respiratory pump failure; doxapram is obsolete; naloxone is for opioids.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0297",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "ARDS Lung-Protective Ventilation Predicted Body Weight Protocol",
    "vignette": "A 48-year-old woman with severe septic shock secondary to acute ascending cholangitis develops severe hypoxemia requiring endotracheal intubation. Chest radiography reveals diffuse bilateral alveolar infiltrates with air bronchograms sparing the cardiophrenic angles. Echocardiogram reveals normal left ventricular systolic function (ejection fraction 60%) with no left atrial enlargement. Arterial blood gas on mechanical ventilation with FiO2 0.80 and PEEP 12 cm H2O demonstrates: pH 7.28, PaCO2 48 mm Hg, and PaO2 68 mm Hg (PaO2/FiO2 ratio = 85, consistent with severe ARDS). The patient is 5 feet 2 inches (157 cm) tall and has severe obesity with an actual total body weight of 115 kg (253 lbs). Her calculated predicted body weight (PBW), based on standard gender-height formulas, is 48 kg. Which of the following initial mechanical ventilator settings adheres to the evidence-based ARDSNet lung-protective ventilation protocol?",
    "options": [
      "Tidal volume of 700 mL (6 mL/kg of actual total body weight) with a plateau pressure limit of 45 cm H2O",
      "Tidal volume of 290 mL (~6 mL/kg of predicted body weight) titrated to maintain inspiratory end-plateau pressure <= 30 cm H2O",
      "Tidal volume of 920 mL (8 mL/kg of actual weight) to normalize arterial pH to 7.40",
      "High-frequency oscillatory ventilation (HFOV) as mandatory first-line therapy",
      "Zero PEEP (ZEEP) ventilation to prevent barotrauma"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Calculating tidal volume using actual body weight (115 kg x 6 mL/kg = 690 mL) in obese patients delivers massive, lethal volutrauma. Normal lung size is determined strictly by height and biological sex, not adipose tissue.",
      "B": "Correct. The landmark ARDS Network (ARDSNet) trial conclusively demonstrated a 22% reduction in mortality using a low-tidal-volume lung-protective ventilation strategy. In ARDS, the aerated lung volume is severely reduced ('baby lung'). Ventilation must be calculated based on Predicted Body Weight (PBW), not actual weight (Female PBW = 45.5 + 0.91 x [height in cm - 152.4] = 48 kg). The initial target tidal volume is 6 mL/kg of PBW (48 kg x 6 mL/kg = 288 mL, approximately 290 mL), accompanied by monitoring of the inspiratory end-hold plateau pressure (Pplat), maintaining Pplat <= 30 cm H2O to prevent alveolar overdistention (volutrauma) and cyclic atelectasis (atelectotrauma). Permissive hypercapnia is tolerated.",
      "C": "Delivering 920 mL tidal volume causes catastrophic alveolar rupture, pneumothorax, and fatal ventilator-induced lung injury.",
      "D": "High-frequency oscillatory ventilation (HFOV) was proven in the OSCAR and OSCILLATE trials to show no survival benefit or increased mortality, and is not recommended.",
      "E": "PEEP is mandatory in ARDS to keep unstable alveoli open at end-expiration (preventing atelectotrauma); zero PEEP causes widespread alveolar collapse and fatal shunt."
    },
    "learningObjective": "Calculate and apply ARDSNet lung-protective mechanical ventilation: target tidal volume of 6 mL/kg of PREDICTED body weight (PBW) and maintain plateau pressure <= 30 cm H2O.",
    "necessaryInference": "Severe ARDS in an obese patient (actual weight 115 kg, PBW 48 kg). ARDSNet protocol dictates 6 mL/kg of PREDICTED body weight (48 x 6 = 288 mL) and plateau pressure <= 30 cm H2O. Using actual weight causes fatal volutrauma.",
    "shortestValidSolution": "ARDS lung-protective ventilation -> 6 mL/kg of PREDICTED body weight (PBW) + plateau pressure <= 30 cm H2O.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/10799690/",
      "https://pubmed.ncbi.nlm.nih.gov/28734898/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests fundamental critical care ventilation: recognizing that ARDSNet tidal volumes are strictly calculated on predicted body weight (height-derived), not actual adipose weight.",
      "distractorExclusionNotes": "Using actual weight causes massive barotrauma; 920 mL is lethal; HFOV is debunked/harmful; zero PEEP causes alveolar derecruitment.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0298",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Ventilator Weaning Spontaneous Breathing Trial and RSBI",
    "vignette": "A 64-year-old man who was intubated 4 days ago for severe community-acquired pneumonia is being evaluated for extubation readiness. Over the past 24 hours, his clinical condition has markedly improved: he is alert, cooperative, and follows commands. He has received no sedatives or paralytics for 18 hours. Vital signs on pressure support of 5 cm H2O and PEEP 5 cm H2O on FiO2 0.35 are: blood pressure 126/78 mm Hg, pulse 82/min, respirations 18/min, and oxygen saturation 98%. Secretions are minimal, and he has a strong, spontaneous cough reflex. The respiratory therapist places the patient on a 30-minute Spontaneous Breathing Trial (SBT) using a T-piece (or 0 cm H2O pressure support). At the 30-minute mark, the patient remains comfortable and non-diaphoretic. Measured minute ventilation is 7.2 L/min, respiratory rate (f) is 20 breaths/min, and spontaneous tidal volume (Vt) is 400 mL (0.40 L). Arterial blood gas on room air reveals: pH 7.41, PaCO2 42 mm Hg, and PaO2 86 mm Hg. Which of the following is the calculated Rapid Shallow Breathing Index (RSBI), and what is the next best clinical step?",
    "options": [
      "RSBI is 200 breaths/min/L; fail the SBT and resume full volume-control ventilation for 48 hours",
      "RSBI is 8 breaths/min/L; perform immediate surgical tracheostomy",
      "RSBI is 50 breaths/min/L; proceed with planned endotracheal extubation",
      "RSBI is 800 breaths/min/L; initiate high-dose intravenous bronchodilators",
      "RSBI is uninterpretable; continue the spontaneous breathing trial for an additional 24 hours"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "200 is an incorrect calculation. The calculated RSBI is 50 breaths/min/L, which strongly predicts extubation success.",
      "B": "8 is an incorrect calculation; tracheostomy is indicated for prolonged failure to wean (> 14 days), not successful SBT weaning.",
      "C": "Correct. According to ATS/CHEST clinical practice guidelines on weaning and extubation, patients ready for liberation from mechanical ventilation should undergo a Spontaneous Breathing Trial (SBT) for 30 to 120 minutes. The Rapid Shallow Breathing Index (RSBI = frequency / tidal volume in liters [f / Vt]) is the most validated predictor of successful extubation. Here, RSBI = 20 breaths/min / 0.40 L = 50 breaths/min/L. An RSBI < 105 breaths/min/L, combined with hemodynamic stability, successful SBT tolerance, intact airway protection (strong cough), and manageable secretions, demonstrates high likelihood (> 85%) of successful extubation. The next best step is prompt endotracheal extubation.",
      "D": "800 is a severe calculation error; bronchodilators are not indicated.",
      "E": "An SBT should last 30 to 120 minutes; extending an SBT to 24 hours exhausts respiratory muscles and delays extubation."
    },
    "learningObjective": "Calculate the Rapid Shallow Breathing Index (RSBI = f / Vt) and execute extubation when RSBI < 105 breaths/min/L and spontaneous breathing trial criteria are satisfied.",
    "necessaryInference": "Patient successfully completes 30-min SBT with strong cough and normal gas exchange. f = 20/min, Vt = 0.40 L. RSBI = 20 / 0.40 = 50 breaths/min/L. RSBI < 105 predicts extubation success. Proceed with extubation.",
    "shortestValidSolution": "RSBI = 20 / 0.40 = 50 breaths/min/L (< 105) with successful SBT -> Proceed with extubation.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/28140733/",
      "https://pubmed.ncbi.nlm.nih.gov/15797988/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests quantitative ventilator liberation: calculating RSBI (f/Vt in liters) and executing guideline-directed extubation protocol.",
      "distractorExclusionNotes": "Calculation errors in A, B, D; tracheostomy is premature; extending SBT to 24h causes respiratory fatigue.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0299",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "STEMI Emergency Coronary Angiography Giveaway Flaw",
    "vignette": "A 54-year-old man presents to the emergency department with 2 hours of crushing substernal chest pressure radiating to his left jaw and diaphoresis. An immediate 12-lead electrocardiogram demonstrates 4 mm of ST-segment elevation in leads II, III, and aVF with reciprocal ST depression in leads I and aVL, diagnostic of an acute ST-elevation myocardial infarction (STEMI). The prompt explicitly asks whether a patient with an obvious inferior STEMI who needs emergency percutaneous coronary intervention should undergo immediate cardiac catheterization.",
    "options": [
      "Reassure the patient and discharge home with an appointment for an outpatient treadmill stress test next month",
      "Prescribe oral antacids for presumed gastroesophageal reflux disease and discharge home",
      "Schedule elective outpatient myocardial perfusion scintigraphy in 6 weeks",
      "Perform immediate coronary angiography and primary percutaneous coronary intervention (door-to-balloon time < 90 minutes)",
      "Prescribe physical therapy for chest wall musculoskeletal strain"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Outpatient treadmill stress testing in an acute evolving STEMI is completely absurd and fatal.",
      "B": "Prescribing antacids for acute STEMI is completely implausible and negligent.",
      "C": "Outpatient scintigraphy in 6 weeks ignores the ongoing myocardial infarction.",
      "D": "Correct. Primary PCI within 90 minutes is standard STEMI care. However, this item suffers from fatal test construction flaws: the stem explicitly gives away the diagnosis and therapy in the narrative, and all 4 distractors are absurd non-medical actions (discharging home, giving antacids, physical therapy) that require zero clinical reasoning or differential diagnosis to eliminate. Therefore, this item fails difficulty and distractor plausibility standards and is rejected.",
      "E": "Physical therapy for a STEMI is an absurd distractor."
    },
    "learningObjective": "Demonstrate editorial quality control by rejecting items with obvious giveaways in the stem and non-viable, absurd distractors.",
    "necessaryInference": "This candidate item contains an explicit giveaway in the stem and absurd distractors, violating NBME item-writing standards. It serves as a genuine quality screening REJECT.",
    "shortestValidSolution": "Fatal item flaw (giveaway stem, absurd distractors) -> Editorial rejection.",
    "provisionalDifficulty": 3,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/24799086/",
      "https://pubmed.ncbi.nlm.nih.gov/30422960/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Editorial screening rejection: Item contains an explicit giveaway in the prompt stem ('diagnostic of STEMI') and 4 absurd non-viable distractors (antacids, physical therapy, discharge home) that allow answering without clinical inference.",
      "distractorExclusionNotes": "Distractors lack clinical plausibility and do not compete with the keyed response.",
      "verdict": "REJECT",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0300",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Septic Shock MAP Target Chronic Hypertension Controversy",
    "vignette": "A 68-year-old man with a 25-year history of poorly controlled chronic hypertension (baseline blood pressure averaging 165/95 mm Hg) and baseline stage 3a chronic kidney disease (serum creatinine 1.5 mg/dL) is admitted to the intensive care unit with septic shock secondary to severe Escherichia coli ascending cholangitis. He has received 30 mL/kg of IV balanced crystalloids and a biliary stent has been successfully placed. He is currently receiving a continuous norepinephrine infusion at 0.18 mcg/kg/min. His current mean arterial pressure (MAP) is 66 mm Hg, heart rate is 92/min, central venous oxygen saturation (ScvO2) is 72%, and arterial blood lactate is 3.1 mmol/L (down from 5.4 mmol/L). Urine output over the past 2 hours has been 15 mL/hour (0.2 mL/kg/hour) and serum creatinine has risen to 2.4 mg/dL. The ICU attending and the nephrology consultant debate whether to titrate the norepinephrine infusion to target a standard MAP of 65 mm Hg versus escalating norepinephrine to achieve a higher MAP target of 80 to 85 mm Hg. Which of the following reflects the current state of clinical trial evidence and guideline consensus regarding blood pressure targets in this specific clinical scenario?",
    "options": [
      "The landmark SEPSISPAM trial proved that targeting MAP 85 mm Hg universally reduces 28-day all-cause mortality by 40% across all patients with septic shock",
      "Surviving Sepsis Campaign guidelines mandate a MAP target of >= 90 mm Hg for all patients with underlying chronic kidney disease",
      "Targeting a higher MAP of 80 to 85 mm Hg is universally contraindicated because it increases myocardial infarction without any renal benefits",
      "Targeting MAP 65 mm Hg causes immediate brainstem herniation in patients with chronic hypertension",
      "Clinical equipoise and unresolved controversy exist: the Surviving Sepsis Campaign recommends an initial target MAP of 65 mm Hg, whereas randomized trial evidence from the SEPSISPAM trial demonstrated that while a higher MAP target (80-85 mm Hg) did not improve overall mortality and increased new-onset atrial fibrillation, it significantly reduced the requirement for renal replacement therapy and doubling of creatinine in the pre-specified subgroup with chronic hypertension"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "The SEPSISPAM trial found NO difference in 28-day or 90-day mortality between the high-target (80-85 mm Hg) and low-target (65-70 mm Hg) groups in the overall cohort.",
      "B": "Surviving Sepsis Campaign guidelines recommend an initial MAP target of 65 mm Hg, not >= 90 mm Hg.",
      "C": "The SEPSISPAM trial did show a significant renal benefit (less dialysis) in the chronic hypertension subgroup, making universal contraindication inaccurate.",
      "D": "A MAP of 65 mm Hg does not cause brainstem herniation; cerebral autoregulation curve shifts in chronic hypertension can cause hypoperfusion, but not herniation.",
      "E": "Correct. This scenario highlights a genuine, unresolved clinical controversy in critical care medicine. The Surviving Sepsis Campaign guidelines recommend a universal initial MAP target of 65 mm Hg in septic shock. However, in patients with long-standing chronic hypertension, autoregulatory curves for cerebral and renal perfusion are shifted to the right. The multicenter SEPSISPAM trial randomized 776 septic shock patients to MAP 65-70 vs 80-85 mm Hg: while overall 28-day mortality was identical (36.5% vs 36.6%), patients with chronic hypertension randomized to the higher MAP target (80-85 mm Hg) experienced a statistically significant reduction in renal replacement therapy (31.7% vs 42.2%, p = 0.046) and doubling of creatinine, balanced against an increased incidence of new-onset atrial fibrillation (6.7% vs 2.8%, p = 0.02). Because clinicians must weigh the risk of arrhythmia against the preservation of renal microperfusion, this remains an unresolved clinical controversy without universal consensus."
    },
    "learningObjective": "Analyze the clinical controversy regarding mean arterial pressure (MAP) targets in septic shock with chronic hypertension: evaluate the SEPSISPAM trial trade-off between renal replacement therapy reduction and increased atrial fibrillation risk.",
    "necessaryInference": "Septic shock with chronic hypertension and oliguric AKI. SEPSISPAM demonstrated that higher MAP (80-85 mm Hg) reduced dialysis in chronic hypertensives but increased atrial fibrillation without mortality benefit. This represents an active, unresolved clinical controversy.",
    "shortestValidSolution": "Septic shock in chronic hypertension -> Unresolved controversy: higher MAP reduces dialysis in chronic hypertensives but increases atrial fibrillation.",
    "provisionalDifficulty": 5,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/24635770/",
      "https://pubmed.ncbi.nlm.nih.gov/34599691/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical controversy screening: Represents genuine clinical equipoise between Surviving Sepsis Campaign guidelines (MAP 65) and SEPSISPAM subgroup findings (MAP 80-85 reducing dialysis in chronic hypertensives at cost of arrhythmias).",
      "distractorExclusionNotes": "Universal mortality reduction is disproven; SSC does not mandate MAP >= 90; higher MAP is not universally contraindicated; MAP 65 does not cause herniation.",
      "verdict": "UNRESOLVED",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
