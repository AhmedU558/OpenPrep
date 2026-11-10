# -*- coding: utf-8 -*-
import json

items_0213_to_0225 = [
  {
    "code": "op-c-s3-0213",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Barrett Esophagus High-Grade Dysplasia Endoscopic Eradication",
    "vignette": "A 62-year-old man with a 15-year history of gastroesophageal reflux disease undergoes routine surveillance upper endoscopy for known long-segment Barrett esophagus (C4M6). High-definition white-light endoscopy with narrow-band imaging shows salmon-colored mucosa without visible nodules, ulcerations, or mucosal irregularity. Four-quadrant biopsies taken every 1 cm demonstrate high-grade dysplasia (HGD) confirmed by two independent expert gastrointestinal pathologists. He is taking omeprazole 40 mg twice daily. He is asymptomatic and functionally active. Which of the following is the most appropriate next step in management?",
    "options": [
      "Repeat surveillance endoscopy with biopsies in 3 months",
      "Refer for transthoracic esophagectomy with lymph node dissection",
      "Perform endoscopic eradication therapy with radiofrequency ablation (RFA)",
      "Initiate high-dose oral sucralfate suspension and re-biopsy in 6 months",
      "Refer for external beam radiation therapy"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Surveillance alone without therapeutic intervention in confirmed high-grade dysplasia carries an annual progression rate to invasive esophageal adenocarcinoma of approximately 6-10% and is considered substandard care.",
      "B": "Surgical esophagectomy was historical standard care but carries high operative morbidity (30-50%) and mortality (2-5%). Modern ACG and AGA guidelines reserve esophagectomy for invasive submucosal adenocarcinoma (T1b) or refractory lesions.",
      "C": "Correct. According to ACG guidelines on Barrett esophagus, patients with confirmed flat high-grade dysplasia (without visible nodular lesions requiring endoscopic mucosal resection) should undergo endoscopic eradication therapy, with endoscopic radiofrequency ablation (RFA) being the primary treatment modality. This achieves complete eradication of dysplasia in > 90% of patients with low complication rates.",
      "D": "Sucralfate provides mucosal coating but has no antineoplastic or dysplasia-eradicating properties in Barrett esophagus.",
      "E": "Radiation therapy is indicated for locally advanced esophageal cancer, not for pre-invasive mucosal dysplasia."
    },
    "learningObjective": "Manage Barrett esophagus with confirmed high-grade dysplasia using endoscopic eradication therapy (radiofrequency ablation) rather than esophagectomy or surveillance alone.",
    "necessaryInference": "Confirmed flat high-grade dysplasia without mucosal nodules -> Endoscopic radiofrequency ablation (RFA) is first-line; surgery is overly morbid and surveillance alone risks malignant transformation.",
    "shortestValidSolution": "Barrett with flat high-grade dysplasia -> Endoscopic radiofrequency ablation (RFA).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/26526714/",
      "https://pubmed.ncbi.nlm.nih.gov/35259163/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests modern guideline evolution where endoscopic eradication has supplanted esophagectomy for flat HGD, and surveillance is no longer acceptable.",
      "distractorExclusionNotes": "Esophagectomy is overly aggressive for flat HGD; surveillance permits cancer progression; sucralfate and radiation are ineffective/inappropriate.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."s Esophagus (PMID: 26526714).",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0214",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Chronic Cough Stepwise Diagnostic and Therapeutic Strategy",
    "vignette": "A 44-year-old woman presents with a persistent, non-productive cough that has lasted for 10 weeks. The cough is most noticeable when she lies down at night and when she wakes up, frequently accompanied by throat clearing and a sensation of liquid dripping down the back of her throat. She is a lifelong non-smoker and takes no prescription medications, specifically no ACE inhibitors. Chest radiography is completely normal. Spirometry with pre- and post-bronchodilator testing is normal with no reversible airway obstruction. She has no heartburn, regurgitation, or fevers. Which of the following is the most appropriate next step in management?",
    "options": [
      "Order a high-resolution computed tomography (HRCT) scan of the chest",
      "Order 24-hour ambulatory esophageal pH monitoring",
      "Perform a methacholine bronchoprovocation challenge test",
      "Initiate an empiric trial of an oral first-generation antihistamine combined with a decongestant",
      "Prescribe oral codeine cough syrup as needed"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Chest HRCT is unwarranted in a non-smoker with a normal conventional chest radiograph and symptoms classic for upper airway cough syndrome.",
      "B": "24-hour pH impedance monitoring is invasive and reserved for patients who fail empiric proton pump inhibitor therapy when GERD is the suspected etiology.",
      "C": "Methacholine challenge evaluates cough-variant asthma. However, the patient has normal spirometry and classic symptoms of upper airway cough syndrome (frequent throat clearing, sensation of postnasal drip, nocturnal worsening). ACCP guidelines prioritize an empiric trial for UACS first.",
      "D": "Correct. According to the American College of Chest Physicians (ACCP) guidelines on chronic cough (cough > 8 weeks with normal chest radiograph and no ACE inhibitor), the most common etiology is Upper Airway Cough Syndrome (UACS; formerly postnasal drip). The recommended initial diagnostic-therapeutic step is an empiric trial of a first-generation antihistamine-decongestant combination (e.g., brompheniramine/pseudoephedrine or chlorpheniramine) for 2 to 3 weeks.",
      "E": "Opioid antitussives only suppress the cough reflex without treating the underlying trigger and carry dependence and sedation risks."
    },
    "learningObjective": "Apply the ACCP stepwise algorithm for chronic unexplained cough: initiate an empiric trial for upper airway cough syndrome using a first-generation antihistamine-decongestant.",
    "necessaryInference": "Non-smoker + normal CXR + normal spirometry + throat clearing / postnasal sensation = UACS. Stepwise guideline requires an empiric first-generation antihistamine-decongestant trial before invasive testing.",
    "shortestValidSolution": "Chronic cough + normal CXR + postnasal drip symptoms -> Empiric first-gen antihistamine-decongestant trial.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/29037430/",
      "https://pubmed.ncbi.nlm.nih.gov/16428693/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Evaluates ACCP chronic cough algorithm distinguishing high-yield empiric trials from premature advanced diagnostic testing (CT chest, pH monitoring).",
      "distractorExclusionNotes": "Chest HRCT is excessive after normal CXR; pH monitoring is invasive before empiric trial; methacholine challenge is secondary to UACS trial; codeine is non-disease-modifying.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0215",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Smoking Cessation in Stable Mood Disorder EAGLES Evidence",
    "vignette": "A 36-year-old man with stable bipolar I disorder presents to discuss smoking cessation. He has smoked 1 pack of cigarettes daily for 15 years. His psychiatric condition has been well controlled for 3 years on lithium 900 mg daily and lurasidone 40 mg daily, with no manic, hypomanic, or depressive episodes. He has tried nicotine chewing gum in the past without success and requests prescription pharmacotherapy to help him quit. He expresses fear that medication might trigger a mood episode. Mental status examination reveals euthymic mood, coherent thought processes, and no suicidal or homicidal ideation. Which of the following is the most appropriate first-line pharmacotherapeutic approach for smoking cessation in this patient?",
    "options": [
      "Initiate oral bupropion hydrochloride 150 mg daily, increasing to 150 mg twice daily",
      "Advise against any pharmacotherapy and recommend hypnotherapy alone",
      "Initiate oral nortriptyline 25 mg daily at bedtime",
      "Initiate oral clonidine 0.1 mg daily",
      "Initiate oral varenicline 0.5 mg daily titrated to 1 mg twice daily, with ongoing clinical psychiatric monitoring"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Bupropion is an antidepressant (norepinephrine-dopamine reuptake inhibitor) that carries an established risk of precipitating hypomania, mania, or rapid cycling in patients with bipolar disorder, making it suboptimal compared to varenicline.",
      "B": "Withholding effective pharmacotherapy in a motivated smoker with stable psychiatric disease is inappropriate. Pharmacotherapy combined with behavioral support doubles to triples quit rates.",
      "C": "Nortriptyline is a second-line smoking cessation agent that carries tricyclic toxicities and high risk of manic induction in bipolar disorder.",
      "D": "Clonidine is a second-line agent with inferior efficacy and substantial side effects (hypotension, sedation).",
      "E": "Correct. The landmark multinational EAGLES trial (Evaluating Adverse Events in a Global Smoking Cessation Study) demonstrated that varenicline is the most efficacious smoking cessation monotherapy and does not significantly increase neuropsychiatric adverse events compared to placebo or nicotine replacement therapy, even in patients with stable psychiatric disorders. In bipolar disorder, varenicline is preferred over bupropion because it does not induce manic switching."
    },
    "learningObjective": "Select varenicline as the most efficacious first-line smoking cessation medication in patients with stable psychiatric illness based on EAGLES trial safety data.",
    "necessaryInference": "Patient with bipolar I disorder wants smoking cessation pharmacotherapy. Bupropion risks manic destabilization. The EAGLES trial demonstrated varenicline's neuropsychiatric safety and superiority in stable psychiatric cohorts.",
    "shortestValidSolution": "Smoking cessation + stable bipolar disorder -> Varenicline (superior efficacy, no manic switch risk vs bupropion).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/27116918/",
      "https://pubmed.ncbi.nlm.nih.gov/32668104/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests integration of landmark trial data (EAGLES) overturning outdated FDA black box warnings regarding varenicline and psychiatric patients, while avoiding bupropion-induced mania.",
      "distractorExclusionNotes": "Bupropion triggers mania in bipolar illness; nortriptyline also triggers mood elevation; clonidine is poorly tolerated second-line; withholding pharmacotherapy is ineffective.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0216",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Severe Obstructive Sleep Apnea First-Line CPAP Management",
    "vignette": "A 51-year-old commercial truck driver presents for evaluation of excessive daytime sleepiness. His wife reports loud snoring and witnessed pauses in breathing followed by loud gasps. He has fallen asleep at red lights twice in the past month. Past medical history includes hypertension treated with lisinopril. BMI is 36 kg/m2, neck circumference is 18.5 inches, and blood pressure is 148/92 mm Hg. Epworth Sleepiness Scale score is 17 (abnormal > 10). Diagnostic polysomnography demonstrates an apnea-hypopnea index (AHI) of 42 events/hour (normal < 5; severe >= 30) with oxygen saturation dipping to a nadir of 81%. Which of the following is the most appropriate initial disease-modifying management?",
    "options": [
      "Positive airway pressure (CPAP) titration and initiation, accompanied by counseling on sleep hygiene and weight loss",
      "Referral for immediate uvulopalatopharyngoplasty (UPPP)",
      "Prescription for modafinil 200 mg daily orally as monotherapy",
      "Prescription for a mandibular advancement oral appliance as first-line definitive therapy",
      "Initiation of nocturnal oxygen via nasal cannula at 2 L/min"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. According to American Academy of Sleep Medicine (AASM) guidelines, continuous positive airway pressure (CPAP) is the first-line, gold-standard therapy for severe obstructive sleep apnea (AHI >= 30 events/hour). In a commercial driver with severe daytime somnolence, prompt CPAP initiation and adherence tracking are mandatory to restore airway patency, eliminate hypoxemia, reduce cardiovascular morbidity, and ensure driving safety.",
      "B": "UPPP has variable long-term efficacy (success rate < 50%), carries significant postoperative morbidity, and is reserved for patients with discrete anatomic pharyngeal obstruction who fail CPAP.",
      "C": "Modafinil is a wakefulness-promoting agent approved only as an adjunct for residual daytime sleepiness in patients who are already adherent to CPAP; using it as monotherapy masks sleepiness without treating upper airway collapse or hypoxemia.",
      "D": "Mandibular advancement devices are indicated for mild-to-moderate OSA or for patients with severe OSA who cannot tolerate CPAP; they are inferior to CPAP for severe OSA (AHI 42).",
      "E": "Supplemental nocturnal oxygen relieves hypoxemia but does not prevent obstructive airway collapse or terminate recurrent sleep fragmentation and hypercapnia."
    },
    "learningObjective": "Prioritize continuous positive airway pressure (CPAP) as first-line therapy for severe obstructive sleep apnea (AHI >= 30) before considering oral appliances or surgery.",
    "necessaryInference": "AHI 42 confirms severe OSA in a patient with safety-critical occupation. CPAP is the only first-line gold standard; wakefulness agents without airway splinting are contraindicated.",
    "shortestValidSolution": "Severe OSA (AHI >= 30) -> CPAP therapy first-line.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/30736887/",
      "https://pubmed.ncbi.nlm.nih.gov/19223198/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Differentiates CPAP indications from oral appliances (mild-moderate) and avoids inappropriate monotherapy with stimulants in untreated airway obstruction.",
      "distractorExclusionNotes": "Modafinil masks symptoms without treating obstruction; oral appliances are inadequate for severe OSA; UPPP has poor cure rates; oxygen alone does not prevent asphyxia.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0217",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Glaucoma Pharmacotherapy Contraindication in Moderate Asthma",
    "vignette": "A 58-year-old woman with a history of moderate persistent asthma presents to an ophthalmology clinic after routine screening reveals elevated intraocular pressure. She uses an inhaled fluticasone-salmeterol combination inhaler daily and an albuterol inhaler as needed for wheezing. Ophthalmic examination shows bilateral open anterior chamber angles on gonioscopy, cup-to-disc ratio of 0.7 in both eyes with superior rim thinning, and visual field testing demonstrating early arcuate scotomas. Intraocular pressure (IOP) is 27 mm Hg in the right eye and 26 mm Hg in the left eye. Which of the following is the most appropriate initial topical ophthalmic medication?",
    "options": [
      "Topical timolol maleate 0.5% ophthalmic drops twice daily",
      "Topical latanoprost 0.005% ophthalmic drops once daily at bedtime",
      "Topical brimonidine 0.2% ophthalmic drops three times daily",
      "Topical pilocarpine 2% ophthalmic drops four times daily",
      "Oral acetazolamide 250 mg twice daily"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Topical beta-blockers such as timolol are absorbed systemically via the nasolacrimal duct into the venous circulation, bypassing hepatic first-pass metabolism. They are strictly contraindicated in patients with asthma or severe COPD due to the precipitous risk of life-threatening bronchospasm and status asthmaticus.",
      "B": "Correct. Prostaglandin analogs (e.g., latanoprost, bimatoprost) increase uveoscleral outflow and are the most effective first-line topical monotherapy for primary open-angle glaucoma, typically lowering IOP by 25-35%. They have no pulmonary contraindications and are strongly preferred over beta-blockers in patients with reactive airway disease.",
      "C": "Brimonidine (an alpha-2 agonist) lowers IOP but is less efficacious than prostaglandin analogs, requires three-times-daily dosing, and frequently causes allergic blepharoconjunctivitis and systemic fatigue.",
      "D": "Pilocarpine is a cholinergic miotic agent that causes brow ache, fixed miosis, night blindness, and induced myopia; it is third-line therapy.",
      "E": "Systemic carbonic anhydrase inhibitors (oral acetazolamide) carry substantial systemic toxicity (metabolic acidosis, electrolyte wasting, fatigue, renal calculi) and are reserved for acute angle-closure crises or refractory disease, not primary outpatient open-angle glaucoma."
    },
    "learningObjective": "Select topical prostaglandin analogs (latanoprost) as preferred first-line therapy for open-angle glaucoma, recognizing that topical beta-blockers (timolol) are contraindicated in asthma.",
    "necessaryInference": "Open-angle glaucoma requires IOP lowering. Coexisting asthma is an absolute contraindication to topical non-selective beta-blockers (timolol) due to systemic bronchospastic absorption. Prostaglandin analogs (latanoprost) are superior and safe.",
    "shortestValidSolution": "Glaucoma + asthma -> Topical latanoprost (avoid beta-blockers like timolol).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/33130198/",
      "https://pubmed.ncbi.nlm.nih.gov/22051656/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Classic multi-morbidity contraindication vignette: recognizing nasolacrimal systemic absorption of topical beta-blockers causing asthma exacerbations.",
      "distractorExclusionNotes": "Timolol precipitates bronchospasm; pilocarpine causes intolerable miosis/ciliary spasm; acetazolamide oral has excessive systemic toxicity; brimonidine has high allergy rates.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0218",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Neovascular Age-Related Macular Degeneration Anti-VEGF Therapy",
    "vignette": "A 74-year-old man presents with a 5-day history of sudden distortion of vision in his right eye. He noticed that straight lines on the bathroom tile appear wavy and warped, and reading text has become significantly blurred. He has a history of dry age-related macular degeneration (AMD) diagnosed 3 years ago, for which he takes AREDS-2 antioxidant supplements. Visual acuity is 20/80 in the right eye (down from 20/30 six months ago) and 20/30 in the left eye. Funduscopic examination of the right eye reveals a subretinal grayish-green elevation in the macula associated with a subretinal hemorrhage and surrounding fluid. Optical coherence tomography (OCT) confirms choroidal neovascularization (CNV) with intraretinal and subretinal fluid accumulation. Which of the following is the most appropriate next step in management?",
    "options": [
      "Increase AREDS-2 supplement dosage to twice daily and re-evaluate in 3 months",
      "Perform urgent retinal laser photocoagulation to the central fovea",
      "Urgent intravitreal injection of an anti-vascular endothelial growth factor (anti-VEGF) agent (e.g., aflibercept or ranibizumab)",
      "Initiate high-dose oral prednisone 60 mg daily",
      "Refer for pars plana vitrectomy with submacular hemorrhage evacuation"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "AREDS-2 antioxidant formulations reduce the rate of progression from intermediate to advanced AMD by ~25%, but they have zero therapeutic efficacy against active choroidal neovascularization once wet AMD has developed. Doubling the dose does not treat active CNV and risks zinc toxicity.",
      "B": "Laser photocoagulation of foveal choroidal neovascular membranes causes immediate permanent central scotoma and destruction of overlying neural retina; it has been completely replaced by anti-VEGF therapy.",
      "C": "Correct. The patient has developed neovascular (wet) age-related macular degeneration characterized by choroidal neovascularization (CNV) breaking through Bruch's membrane, causing subretinal hemorrhage, exudation, and metamorphopsia. Intravitreal anti-VEGF agents (aflibercept, ranibizumab, or faricimab) are the gold-standard therapy, arresting vascular permeability, inducing regression of neovascular vessels, and recovering visual acuity if initiated promptly.",
      "D": "Corticosteroids are not first-line for wet AMD and oral steroids cause glaucoma, cataracts, and systemic side effects without inhibiting CNV angiogenesis.",
      "E": "Subretinal surgical evacuation is reserved for massive submacular hemorrhages threatening total retinal detachment, not small localized foveal wet AMD lesions."
    },
    "learningObjective": "Identify acute neovascular (wet) age-related macular degeneration and direct urgent intravitreal anti-VEGF therapy to prevent irreversible central visual loss.",
    "necessaryInference": "Acute metamorphopsia (straight lines appearing wavy) + subretinal hemorrhage/fluid on OCT in known dry AMD = acute conversion to neovascular (wet) AMD. Intravitreal anti-VEGF injection is the mandatory emergency ophthalmic therapy.",
    "shortestValidSolution": "Metamorphopsia + choroidal neovascularization on OCT -> Urgent intravitreal anti-VEGF injection.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/31802952/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests recognition of sudden metamophopsia as wet AMD conversion requiring urgent intravitreal anti-VEGF therapy rather than passive AREDS continuation.",
      "distractorExclusionNotes": "AREDS vitamins do not treat wet AMD; laser burns foveal tissue; oral steroids fail to block VEGF-driven angiogenesis; surgery is unnecessary.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0219",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Severe BPH Dual Alpha-Blocker and 5-ARI Combination Strategy",
    "vignette": "A 67-year-old man presents with severe lower urinary tract symptoms (LUTS) that have progressively worsened over the past year. He experiences significant urinary hesitancy, a weak stream, post-void dribbling, and nocturia 4 to 5 times per night. His International Prostate Symptom Score (IPSS) is 24 (severe: 20-35). Digital rectal examination demonstrates a smooth, symmetrical, markedly enlarged prostate estimated at 55 grams without nodules or induration. Serum PSA is 3.8 ng/mL (normal < 4.0). Post-void residual bladder volume measured by ultrasound is 180 mL. Urinalysis is normal. Serum creatinine is 1.0 mg/dL. Which of the following is the most appropriate long-term medical therapy to alleviate symptoms and reduce the risks of acute urinary retention and requirement for prostate surgery?",
    "options": [
      "Monotherapy with tamsulosin 0.4 mg daily orally",
      "Monotherapy with finasteride 5 mg daily orally",
      "Monotherapy with tadalafil 5 mg daily orally",
      "Combination therapy with tamsulosin 0.4 mg daily and finasteride 5 mg daily orally",
      "Immediate transurethral resection of the prostate (TURP)"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Tamsulosin (alpha-1 blocker) rapidly relieves dynamic smooth muscle obstruction within days, but as monotherapy it does not alter prostate size or prevent disease progression (acute urinary retention or eventual need for surgery).",
      "B": "Finasteride (5-alpha reductase inhibitor) reduces prostate volume by 20-25% and reduces progression, but its onset of symptomatic relief is delayed by 6 to 12 months. Used alone, it leaves the patient severely symptomatic for months.",
      "C": "Tadalafil (PDE-5 inhibitor) improves mild-to-moderate LUTS but does not reduce prostate size or prevent urinary retention.",
      "D": "Correct. In patients with severe BPH symptoms (IPSS > 19) and evidence of prostate enlargement (> 30-40 g or PSA > 1.5 ng/mL), landmark trials (MTOPS and CombAT) and AUA guidelines demonstrate that combination therapy with an alpha-1 adrenergic antagonist (tamsulosin) and a 5-alpha reductase inhibitor (finasteride or dutasteride) is superior to either monotherapy. The alpha-blocker provides rapid symptom relief, while the 5-ARI shrinks prostate volume, halving the long-term risk of acute urinary retention and surgical intervention.",
      "E": "TURP is indicated for patients with refractory urinary retention, recurrent UTIs, recurrent gross hematuria, bladder calculi, or renal insufficiency secondary to BPH, or those who fail medical therapy."
    },
    "learningObjective": "Formulate combination pharmacotherapy (alpha-1 blocker plus 5-alpha reductase inhibitor) for severe BPH with significant prostatic enlargement (> 30-40 g) to improve symptoms and reduce surgical risk.",
    "necessaryInference": "Severe symptoms (IPSS 24) + large prostate (55 g) + elevated post-void residual -> CombAT/MTOPS evidence mandates dual therapy (alpha-blocker for immediate dynamic relief + 5-ARI for static volume reduction).",
    "shortestValidSolution": "Severe BPH + prostate > 40 g -> Dual therapy: tamsulosin + finasteride.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/14681504/",
      "https://pubmed.ncbi.nlm.nih.gov/34538137/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests MTOPS and CombAT trial evidence establishing superiority of dual alpha-blocker + 5-ARI over monotherapy in patients with demonstrable prostate enlargement > 40 g.",
      "distractorExclusionNotes": "Alpha-blocker monotherapy does not shrink the gland; 5-ARI monotherapy takes months to work; TURP is premature without trying combination medical therapy.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0220",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Renal",
    "topic": "Overactive Bladder in Mild Cognitive Impairment Mirabegron Selection",
    "vignette": "A 78-year-old woman is brought to the geriatric clinic by her daughter due to worsening urinary urgency, frequency (voiding 10-12 times per day), and urge incontinence. She frequently leaks urine on the way to the bathroom. Medical history includes hypertension, osteoarthritis, and mild cognitive impairment (Montreal Cognitive Assessment [MoCA] score 22/30). A bladder diary confirms frequent small-volume voids with urgency. Physical examination, post-void residual volume (35 mL), and clean-catch urinalysis are all normal. Pelvic floor muscle training and bladder retraining have been attempted for 8 weeks without sufficient improvement. Which of the following is the most appropriate next pharmacotherapeutic step?",
    "options": [
      "Initiate oral oxybutynin immediate-release 5 mg three times daily",
      "Initiate oral tolterodine extended-release 4 mg daily",
      "Initiate oral solifenacin 5 mg daily",
      "Perform intradetrusor onabotulinumtoxinA injections",
      "Initiate oral mirabegron 25 mg daily"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Oxybutynin is a non-selective antimuscarinic agent with high lipophilicity that readily crosses the blood-brain barrier. It is strongly discouraged by the American Geriatrics Society (AGS) Beers Criteria because it causes severe anticholinergic cognitive decline, confusion, delirium, and accelerates dementia in older adults with baseline cognitive impairment.",
      "B": "Tolterodine is also an antimuscarinic agent that carries substantial central anticholinergic burden and contributes to cognitive worsening and fall risk in older patients.",
      "C": "Solifenacin is a somewhat more bladder-selective M3 antagonist, but it still exerts systemic anticholinergic activity and is cautioned against in older adults with pre-existing cognitive impairment.",
      "D": "Intradetrusor botulinum toxin injection is a third-line invasive procedural therapy reserved for refractory OAB failing medical therapies, carrying risks of urinary retention requiring clean intermittent catheterization.",
      "E": "Correct. Mirabegron is a beta-3 adrenergic receptor agonist that relaxes the detrusor muscle during the storage phase without exerting any anticholinergic activity. Because it does not block muscarinic receptors, it avoids central anticholinergic adverse effects (cognitive deterioration, delirium) and peripheral anticholinergic effects (dry mouth, constipation, urinary retention). AGS Beers Criteria and AUA guidelines recommend beta-3 agonists as the preferred agent in older adults, particularly those with mild cognitive impairment or dementia."
    },
    "learningObjective": "Select beta-3 adrenergic receptor agonists (mirabegron) over antimuscarinics for overactive bladder in patients with cognitive impairment to avoid anticholinergic neurotoxicity.",
    "necessaryInference": "Urge incontinence in an elderly patient with mild cognitive impairment -> Antimuscarinics (oxybutynin, tolterodine, solifenacin) cross blood-brain barrier and worsen cognition (Beers Criteria). Mirabegron (beta-3 agonist) avoids anticholinergic toxicity.",
    "shortestValidSolution": "Overactive bladder + cognitive impairment -> Mirabegron (avoids anticholinergic cognitive decline).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/30693946/",
      "https://pubmed.ncbi.nlm.nih.gov/31034447/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Applies AGS Beers Criteria to pharmacologic choice in geriatric urology, recognizing high neurotoxicity of antimuscarinics in cognitive impairment.",
      "distractorExclusionNotes": "All antimuscarinics (oxybutynin, tolterodine, solifenacin) impair acetylcholine transmission in the hippocampus, worsening cognitive impairment; botulinum is invasive third-line.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0221",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Erectile Dysfunction in Nitrate-Dependent Angina Safe Alternatives",
    "vignette": "A 64-year-old man presents requesting medication for erectile dysfunction (ED). He has had difficulty achieving and maintaining an erection for the past 2 years. Past medical history includes coronary artery disease with prior myocardial infarction 3 years ago and chronic stable exertional angina, for which he takes isosorbide mononitrate 60 mg daily, metoprolol succinate 50 mg daily, atorvastatin 80 mg daily, and aspirin 81 mg daily. He experiences angina twice a month when climbing two flights of stairs, relieved promptly by sublingual nitroglycerin. Vital signs are normal. Physical examination shows normal secondary sexual characteristics and intact peripheral pulses. He specifically asks for a prescription for sildenafil or tadalafil. Which of the following is the most appropriate management?",
    "options": [
      "Explain that PDE-5 inhibitors are absolutely contraindicated with nitrates; recommend a vacuum erection device or alprostadil injection",
      "Prescribe sildenafil 50 mg with instructions to take it 2 hours before nitrate ingestion",
      "Discontinue isosorbide mononitrate for 24 hours prior to using tadalafil",
      "Prescribe oral yohimbine 5.4 mg three times daily",
      "Prescribe transdermal testosterone gel 50 mg daily"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. According to AHA/ACC and AUA guidelines, phosphodiesterase type 5 (PDE-5) inhibitors (sildenafil, tadalafil, vardenafil) are absolutely contraindicated in patients taking any form of nitrate therapy (short-acting sublingual or long-acting isosorbide). Concurrent administration leads to excessive accumulation of cyclic GMP, triggering profound, refractory, and potentially fatal systemic hypotension. Safe and effective non-nitrate-interacting alternatives include a vacuum erection device (VED) or intracavernosal/intraurethral alprostadil (prostaglandin E1).",
      "B": "Spacing sildenafil 2 hours away from a daily extended-release nitrate (isosorbide mononitrate) does not eliminate risk; extended-release nitrates maintain steady-state vasodilatory nitric oxide donation for 24 hours.",
      "C": "Stopping a medically necessary anti-anginal nitrate to take a long-acting PDE-5 inhibitor (tadalafil, half-life 17.5 hours) risks acute coronary syndrome and rebound ischemia.",
      "D": "Yohimbine is a central alpha-2 antagonist that causes severe hypertension, tachycardia, and anxiety, and is unsafe in coronary artery disease.",
      "E": "Testosterone replacement is indicated only for confirmed biochemical hypogonadism (low morning total/free testosterone), not for vasculogenic ED with normal libido in an older man."
    },
    "learningObjective": "Identify the absolute contraindication of PDE-5 inhibitors in nitrate-treated coronary disease and select safe alternatives (vacuum erection device or alprostadil).",
    "necessaryInference": "Patient requires daily nitrate therapy for angina. PDE-5 inhibitors cause severe cGMP accumulation and fatal hypotension with nitrates. Vacuum erection device or local alprostadil avoids this interaction.",
    "shortestValidSolution": "ED + chronic nitrate therapy -> PDE-5 inhibitors contraindicated; select vacuum erection device or alprostadil.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/30209253/",
      "https://pubmed.ncbi.nlm.nih.gov/10618318/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests recognition of absolute pharmacologic contraindications (nitrates + PDE-5i) and offering legitimate evidence-based mechanical or local pharmacological alternatives.",
      "distractorExclusionNotes": "Timing adjustments cannot circumvent extended-release nitrates; discontinuing nitrates triggers ischemia; yohimbine is toxic in CAD; testosterone is ineffective for non-hypogonadal ED.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0222",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "Nervous System",
    "topic": "Restless Legs Syndrome Augmentation Avoidance Strategy",
    "vignette": "A 49-year-old woman presents with distressing sensations in her lower extremities that occur every evening while watching television or trying to fall asleep. She describes an uncomfortable, crawling, and 'creepy' sensation deep inside both calves that compels her to move, walk, or stretch her legs, which provides immediate, temporary relief. Her sleep is severely fragmented. She has no peripheral neuropathy, spinal stenosis, or edema. Neurological examination is completely normal. Laboratory studies demonstrate: hemoglobin 12.8 g/dL, serum creatinine 0.8 mg/dL, and serum ferritin 32 ng/mL (reference: 15-200). Which of the following is the most appropriate initial management strategy?",
    "options": [
      "Initiate pramipexole 0.125 mg orally two hours before bedtime as preferred first-line therapy",
      "Initiate oral iron supplementation (target ferritin > 75 ng/mL) and an alpha-2-delta ligand (gabapentin or pregabalin)",
      "Prescribe clonazepam 1 mg at bedtime",
      "Prescribe carbidopa-levodopa 25/100 mg at bedtime",
      "Reassure the patient and recommend calf stretching exercises alone"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Dopamine agonists (pramipexole, ropinirole) were previously widely used, but current AASM and European guidelines strongly recommend against them as first-line therapy due to high rates of dopaminergic 'augmentation' (occurring in up to 50-70% of patients over 5 years), where symptoms progressively worsen, appear earlier in the day, and spread to the arms.",
      "B": "Correct. Modern consensus guidelines for restless legs syndrome (RLS) prioritize: 1) Checking and repleting iron stores (oral iron with vitamin C if serum ferritin <= 75 ng/mL or transferrin saturation < 20%), because brain iron deficiency in the substantia nigra impairs dopamine neurotransmission; and 2) Utilizing alpha-2-delta calcium channel ligands (gabapentin, gabapentin enacarbil, or pregabalin) as the preferred first-line pharmacotherapy because they have proven efficacy without causing dopaminergic augmentation.",
      "C": "Clonazepam does not reduce periodic limb movements or RLS sensory urges, and carries sedation, cognitive decline, tolerance, and dependence risks.",
      "D": "Carbidopa-levodopa causes the most rapid and severe dopaminergic augmentation of all agents and is contraindicated for daily RLS maintenance.",
      "E": "Non-pharmacological measures are insufficient for severe, daily RLS disrupting sleep and quality of life."
    },
    "learningObjective": "Formulate initial management for restless legs syndrome by checking/repleting iron stores (ferritin target > 75 ng/mL) and selecting alpha-2-delta ligands over dopamine agonists to prevent augmentation.",
    "necessaryInference": "Ferritin 32 ng/mL indicates deficient central iron stores (< 75 ng/mL threshold in RLS). Dopamine agonists carry severe long-term augmentation risk. Modern first-line is iron repletion + alpha-2-delta ligand (gabapentin/pregabalin).",
    "shortestValidSolution": "Restless legs syndrome + ferritin < 75 ng/mL -> Oral iron + alpha-2-delta ligand (avoid dopamine agonists).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/27402859/",
      "https://pubmed.ncbi.nlm.nih.gov/29037430/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests major paradigm shift in RLS management away from dopamine agonists (due to devastating augmentation) toward alpha-2-delta ligands and aggressive iron repletion (ferritin > 75).",
      "distractorExclusionNotes": "Dopamine agonists (pramipexole) cause augmentation; levodopa causes severe augmentation; benzodiazepines do not treat underlying sensory urge; observation is inadequate.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0223",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Fibromyalgia Multimodal Therapy and Opioid Avoidance",
    "vignette": "A 39-year-old woman presents with persistent, widespread musculoskeletal aching, stiffness, and fatigue that has lasted for over 2 years. She describes pain 'all over my body,' from her neck and shoulders down to her hips and calves. Symptoms are worse in the morning and aggravated by poor sleep and physical stress. She has seen multiple specialists without finding a structural or inflammatory cause. Comprehensive laboratory testing (complete blood count, ESR, CRP, TSH, rheumatoid factor, and anti-CCP) is completely normal. On physical examination, there is diffuse tenderness to moderate palpation across multiple soft tissue areas (trapezius, lateral epicondyles, gluteal areas) without joint swelling, synovial thickening, or muscle weakness. She asks for a prescription for oxycodone or hydrocodone, stating that over-the-counter ibuprofen provides no relief. Which of the following is the most appropriate management approach?",
    "options": [
      "Initiate oral oxycodone 5 mg as needed for breakthrough pain flares",
      "Prescribe oral prednisone 20 mg daily with a rapid 4-week taper",
      "Initiate multimodal therapy with low-impact aerobic exercise, cognitive behavioral therapy, and duloxetine or pregabalin, while explicitly avoiding opioid analgesics",
      "Order whole-body magnetic resonance imaging (MRI) to identify occult myofascial inflammation",
      "Perform bilateral tender point trigger injections with triamcinolone and bupivacaine"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Opioids (oxycodone, hydrocodone) are strongly contraindicated in fibromyalgia. They lack efficacy for central sensitization pain, accelerate hyperalgesia (opioid-induced hyperalgesia), impair sleep architecture, and carry immense addiction and overdose risks.",
      "B": "Systemic corticosteroids have no therapeutic benefit in fibromyalgia, as the pathophysiology is central nervous system nociplastic pain processing, not peripheral tissue inflammation.",
      "C": "Correct. According to the American College of Rheumatology (ACR) and EULAR guidelines for fibromyalgia, the foundation of management is non-pharmacological multimodal therapy: low-impact aerobic exercise (walking, swimming, aquatic therapy), sleep hygiene, and cognitive behavioral therapy (CBT). First-line FDA-approved pharmacological options that modulate descending inhibitory pain pathways include SNRIs (duloxetine, milnacipran) or alpha-2-delta calcium channel modulators (pregabalin). Opioids are explicitly contraindicated.",
      "D": "Whole-body MRI is expensive, unnecessary, and promotes low-value incidental findings that fuel patient anxiety; fibromyalgia is a clinical diagnosis of central sensitization.",
      "E": "Local trigger point corticosteroid injections are unproven in widespread central nociplastic pain and expose patients to local tissue atrophy."
    },
    "learningObjective": "Formulate evidence-based multimodal management for fibromyalgia (aerobic exercise, CBT, duloxetine/pregabalin) while adhering to strict contraindications against opioid analgesics.",
    "necessaryInference": "Chronic widespread body pain + fatigue + normal inflammatory markers + tender points = Fibromyalgia (central sensitization). Opioids are harmful and contraindicated; multimodal management with exercise, CBT, and an SNRI/pregabalin is indicated.",
    "shortestValidSolution": "Fibromyalgia -> Multimodal care (exercise, CBT, duloxetine/pregabalin) + avoid opioids.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/27941097/",
      "https://pubmed.ncbi.nlm.nih.gov/27382111/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Emphasizes guideline-based management of central sensitization (fibromyalgia) and strict avoidance of opioids which worsen opioid-induced hyperalgesia.",
      "distractorExclusionNotes": "Opioids cause hyperalgesia and addiction; steroids are ineffective; whole-body MRI is low-value care; trigger injections fail to treat central processing.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0224",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Myalgic Encephalomyelitis Post-Exertional Malaise Management",
    "vignette": "A 34-year-old woman presents for evaluation of debilitating fatigue lasting 14 months following an acute viral respiratory infection. She reports that after engaging in even minimal physical activity (e.g., walking 1 block or folding laundry) or mental exertion (e.g., balancing her checkbook), she experiences a profound 'crash' 24 to 48 hours later characterized by overwhelming exhaustion, muscle aches, cognitive 'brain fog,' and dizziness upon standing that incapacitates her for several days. She wakes unrefreshed despite 10 hours in bed. Comprehensive medical workup (CBC, CMP, TSH, ANA, morning cortisol, ferritin, and cardiac testing) is completely normal. Physical examination shows normal muscle bulk and reflexes. Orthostatic vital signs show a pulse increase of 14/min without orthostatic hypotension. Which of the following is the most appropriate management strategy for her post-exertional symptoms?",
    "options": [
      "Prescribe an aggressive, fixed-escalation graded exercise therapy (GET) protocol",
      "Prescribe modafinil 200 mg daily to overcome daytime fatigue",
      "Initiate long-term broad-spectrum oral doxycycline therapy for presumed occult infection",
      "Educate the patient on energy conservation, activity pacing, and staying within her 'energy envelope' to prevent post-exertional malaise (PEM)",
      "Prescribe oral fluoxetine 40 mg daily for masked somatization disorder"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Aggressive, fixed-schedule graded exercise therapy (GET) was historically recommended based on flawed studies (PACE trial), but current CDC, NICE, and Institute of Medicine (NAM) guidelines explicitly recommend AGAINST fixed graded exercise in ME/CFS, as forcing patients beyond their threshold triggers severe post-exertional malaise (PEM) crashes and long-term functional regression.",
      "B": "Stimulants like modafinil may temporarily mask fatigue, causing patients to overexert themselves and trigger severe PEM crashes ('push-crash cycle').",
      "C": "Empiric long-term antibiotics have no clinical benefit and cause antimicrobial resistance, C. difficile colitis, and toxicity in post-viral ME/CFS.",
      "D": "Correct. According to current CDC and NICE guidelines for Myalgic Encephalomyelitis / Chronic Fatigue Syndrome (ME/CFS), the cardinal defining feature is post-exertional malaise (PEM)—the exacerbation of multiple symptoms following physical, cognitive, or emotional effort. The cornerstone of management is energy pacing within the patient's individual 'energy envelope' to prevent PEM crashes and avoid the push-crash cycle.",
      "E": "ME/CFS is a multi-system biological neuroimmune condition, not a somatic symptom disorder; prescribing high-dose SSRIs without pacing fails to address PEM."
    },
    "learningObjective": "Formulate management for Myalgic Encephalomyelitis / Chronic Fatigue Syndrome (ME/CFS) by recognizing post-exertional malaise (PEM) and employing activity pacing within the patient's energy envelope while avoiding aggressive graded exercise therapy.",
    "necessaryInference": "Profound symptom relapse 24-48h after minimal physical/mental exertion = Post-Exertional Malaise (PEM), pathognomonic for ME/CFS. Modern guidelines strictly advise pacing within the energy envelope and advise against forced graded exercise.",
    "shortestValidSolution": "ME/CFS with post-exertional malaise -> Energy pacing within energy envelope (avoid graded exercise).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/34710323/",
      "https://pubmed.ncbi.nlm.nih.gov/25695122/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests recent landmark update in clinical guidelines (NICE 2021 / CDC) deprecating graded exercise therapy in favor of energy pacing to prevent PEM crashes in ME/CFS.",
      "distractorExclusionNotes": "Graded exercise causes severe PEM deterioration; stimulants induce push-crash cycle; antibiotics have no biological role; dismissing as somatization contradicts guidelines.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0225",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Chronic Insomnia Disorder First-Line CBT-I Strategy",
    "vignette": "A 55-year-old male accountant presents with difficulty sleeping that has been present for 8 months. He reports taking 60 to 90 minutes to fall asleep at night and frequently wakes up at 3:00 AM unable to return to sleep, averaging 4.5 hours of sleep per night. He feels exhausted and irritable during the day, which impairs his concentration at work. He drinks 1 cup of coffee at 7:00 AM and has 1 glass of wine with dinner. He has no symptoms of sleep apnea (no snoring or witnessed apneas) or restless legs syndrome. Screening for major depressive disorder is negative. Physical and neurological examinations are unremarkable. He requests 'a pill that will knock me out so I can sleep.' Which of the following is the most appropriate first-line therapy?",
    "options": [
      "Initiate oral zolpidem tartrate 10 mg at bedtime",
      "Initiate oral temazepam 15 mg at bedtime",
      "Initiate oral diphenhydramine 50 mg at bedtime",
      "Initiate oral quetiapine 50 mg at bedtime",
      "Initiate Cognitive Behavioral Therapy for Insomnia (CBT-I) as first-line therapy"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Non-benzodiazepine sedative-hypnotics ('Z-drugs' such as zolpidem) are associated with complex sleep behaviors (sleep-walking, sleep-driving), next-morning impairment, falls, tolerance, and rebound insomnia upon discontinuation. Clinical practice guidelines recommend against sedative-hypnotic monotherapy as first-line treatment for chronic insomnia.",
      "B": "Benzodiazepines (temazepam) carry high risks of tolerance, dependence, cognitive blunting, withdrawal, and falls, and are not recommended as first-line therapy.",
      "C": "Over-the-counter antihistamines (diphenhydramine) lack robust efficacy data for chronic insomnia, rapidly induce tolerance within days, and produce significant next-day anticholinergic grogginess and impairment.",
      "D": "Atypical antipsychotics (quetiapine) carry severe metabolic risks (weight gain, dyslipidemia, diabetes) and extrapyramidal symptoms; guidelines strongly recommend against their use for insomnia without an underlying psychiatric indication.",
      "E": "Correct. According to the American Academy of Sleep Medicine (AASM) and American College of Physicians (ACP) clinical practice guidelines, Cognitive Behavioral Therapy for Insomnia (CBT-I) is the mandatory first-line therapy for all adult patients with chronic insomnia disorder. CBT-I (incorporating sleep restriction, stimulus control, cognitive restructuring, and sleep hygiene) produces sustained sleep improvements that persist long after therapy ends, without the adverse risks, tolerance, and rebound associated with pharmacotherapies."
    },
    "learningObjective": "Prioritize Cognitive Behavioral Therapy for Insomnia (CBT-I) as the mandatory first-line therapy for chronic insomnia disorder over hypnotic sedative pharmacotherapies.",
    "necessaryInference": "Chronic insomnia disorder (> 3 months duration with daytime impairment). Guidelines (ACP, AASM) universally designate CBT-I as first-line therapy. Pharmacological agents carry addiction, fall, and tolerance risks and are reserved as short-term adjuncts.",
    "shortestValidSolution": "Chronic insomnia disorder -> CBT-I first-line (superior long-term efficacy, no sedative risk).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/27136443/",
      "https://pubmed.ncbi.nlm.nih.gov/27989383/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Emphasizes ACP/AASM clinical guidelines establishing CBT-I as the undisputed first-line treatment for chronic insomnia, resisting patient demands for sedative-hypnotics.",
      "distractorExclusionNotes": "Zolpidem has black box warning for parasomnias; temazepam causes dependence; diphenhydramine has anticholinergic hangover; quetiapine causes metabolic harm.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  }
]
print(f"Loaded {len(items_0213_to_0225)} items for S3 B9 Part 2")
