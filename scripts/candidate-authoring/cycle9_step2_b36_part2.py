"""
Step 2 CK Batch 36 (0889-0900) Definitions - Obstetrics & Psychiatry
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b36_part2 = [
  # 0889
  {
    "code": "op-c-s2-0889",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Pelvic Inflammatory Disease Inpatient Criteria and Intravenous Regimens",
    "provisionalDifficulty": 4,
    "stem": "A 21-year-old primigravida at 9 weeks of gestation presents to the emergency department with 3 days of worsening bilateral lower abdominal pain, chills, and purulent vaginal discharge. Vital signs show blood pressure 110/68 mm Hg, heart rate 104/min, and temperature 38.6 C (101.5 F). Physical examination reveals exquisite bilateral lower quadrant abdominal tenderness with mild involuntary guarding. Pelvic examination demonstrates cervical motion tenderness ('chandelier sign') and marked uterine and bilateral adnexal tenderness, with yellow, mucopurulent discharge from the cervical os. Serum beta-hCG is 68,000 mIU/mL. Transvaginal ultrasonography confirms an intrauterine viable gestational sac with a fetal pole and heartbeat (fetal heart rate 168/min), with no adnexal mass or free fluid. Which of the following is the most appropriate management approach?",
    "choices": [
      [
        "Hospital admission for intravenous cefoxitin (or cefotetan) plus intravenous doxycycline",
        "Pelvic inflammatory disease (PID) during pregnancy is rare (usually occurring before the mucus plug and chorion seal the endocervical canal at 12 weeks), but carries devastating risks of fetal loss, maternal peritonitis, and preterm delivery. Indications for inpatient hospitalization in PID include: (1) pregnancy, (2) failure or intolerance of oral outpatient therapy, (3) severe illness, high fever, nausea/vomiting, or peritoneal signs, (4) presence of a tubo-ovarian abscess, or (5) inability to exclude a surgical emergency (e.g., appendicitis). Standard inpatient intravenous regimens include: IV cefoxitin (or cefotetan) plus IV/oral doxycycline (or IV clindamycin plus gentamicin if cephalosporin allergy or severe abscess). In pregnancy, IV clindamycin plus gentamicin or IV cephalosporin plus oral azithromycin/erythromycin is often substituted for doxycycline due to fetal tooth discoloration, but hospital admission and parenteral antimicrobial therapy remain mandatory."
      ],
      [
        "Outpatient management with a single dose of intramuscular ceftriaxone alone",
        "Outpatient therapy is strictly contraindicated for PID in pregnancy due to the high risks of maternal systemic sepsis, chorioamnionitis, and spontaneous pregnancy loss."
      ],
      [
        "Immediate suction dilation and curettage to terminate the ongoing gestation",
        "PID in pregnancy does not automatically mandate pregnancy termination; broad-spectrum parenteral antimicrobial therapy can achieve cure while preserving pregnancy."
      ],
      [
        "Oral levofloxacin and metronidazole for 14 days as an outpatient prescription",
        "Fluoroquinolones are contraindicated in pregnancy due to cartilage damage, and outpatient management violates mandatory inpatient admission criteria."
      ],
      [
        "Diagnostic laparoscopy with bilateral salpingectomy to achieve surgical source control",
        "Uncomplicated PID without ruptured abscess responds promptly to medical antibiotic therapy; surgical adnexectomy is unnecessarily destructive and causes fetal loss."
      ]
    ],
    "shortestValidSolution": "Pregnant 9 wk + cervical motion tenderness + purulent discharge = PID in pregnancy -> inpatient admission for IV antibiotics.",
    "necessaryInference": "Recognize that pregnancy is an absolute criterion for inpatient hospitalization and intravenous antibiotic therapy in PID.",
    "strongestDistractor": "Outpatient management with a single dose of intramuscular ceftriaxone alone",
    "distractorExclusion": "Pregnancy mandates inpatient parenteral antibiotic therapy; outpatient single-dose therapy is completely inadequate.",
    "citation": "Workowski KA, Bachmann LH, Chan PA, et al. Sexually Transmitted Infections Treatment Guidelines, 2021. MMWR Recomm Rep. 2021;70(4):1-187. PMID: 34292926.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics/infectious disease item on inpatient hospitalization criteria for PID during pregnancy.",
      "distractorExclusionNotes": "Excluded outpatient regimens because pregnancy is an absolute indication for inpatient parenteral treatment.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0890
  {
    "code": "op-c-s2-0890",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Major Depressive Disorder With Psychotic Features Dual Pharmacotherapy",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old woman is brought to the psychiatric clinic by her daughter because of profound sadness, vegetative symptoms, and bizarre thoughts over the past 6 weeks. The patient has stopped eating, lost 14 lb, awakens at 3:00 AM unable to return to sleep, and stays in bed crying all day. She tells the physician, 'My internal organs have completely rotted away from cancer because of my past sins. The FBI is broadcasting my rotting body across television to punish my family.' Physical examination, laboratory workup (including CBC, comprehensive metabolic panel, and TSH), and head CT are entirely normal. Which of the following is the most appropriate first-line pharmacotherapy for this patient?",
    "choices": [
      [
        "Combination of a selective serotonin reuptake inhibitor and a second-generation antipsychotic",
        "Major depressive disorder (MDD) with psychotic features (psychotic depression) presents with full criteria for a major depressive episode accompanied by delusions or hallucinations, which are typically mood-congruent (themes of guilt, punishment, rot/decay, nihilism, or severe illness). First-line treatment is the combination of an antidepressant (e.g., SSRI like sertraline) PLUS a second-generation antipsychotic (e.g., olanzapine, quetiapine, or risperidone). Antidepressant monotherapy is significantly inferior and has low efficacy when psychotic delusions are present. For patients with severe malnutrition, acute suicidality, catatonia, or medical instability, electroconvulsive therapy (ECT) is the treatment of choice due to its rapid and high response rate."
      ],
      [
        "Selective serotonin reuptake inhibitor (sertraline) monotherapy alone",
        "Antidepressant monotherapy is ineffective for psychotic depression; adding an antipsychotic is necessary to achieve remission of delusions."
      ],
      [
        "Second-generation antipsychotic (olanzapine) monotherapy alone",
        "Antipsychotic monotherapy fails to adequately resolve the severe underlying vegetative and affective symptoms of major depression."
      ],
      [
        "Supportive psychotherapy and cognitive behavioral therapy without medication",
        "Psychotherapy alone is ineffective for severe depression with psychotic features and delusions, which require somatic pharmacotherapy or ECT."
      ],
      [
        "High-dose oral buspirone combined with a low-dose benzodiazepine",
        "Buspirone treats generalized anxiety disorder; it has no antipsychotic or potent antidepressant efficacy for psychotic depression."
      ]
    ],
    "shortestValidSolution": "Severe depression + nihilistic/rotting delusions = psychotic depression -> combination of SSRI + second-generation antipsychotic.",
    "necessaryInference": "Select dual pharmacotherapy (antidepressant + second-generation antipsychotic) over antidepressant monotherapy for psychotic depression.",
    "strongestDistractor": "Selective serotonin reuptake inhibitor (sertraline) monotherapy alone",
    "distractorExclusion": "Antidepressant monotherapy fails to resolve psychotic depression; dual pharmacotherapy (or ECT) is the evidence-based standard.",
    "citation": "Wijkstra J, Lijmer J, Burger H, et al. Pharmacological Treatment for Psychotic Depression. Cochrane Database Syst Rev. 2013;(11):CD004044. PMID: 24249495.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry item testing first-line management of major depressive disorder with psychotic features.",
      "distractorExclusionNotes": "Excluded antidepressant monotherapy and antipsychotic monotherapy because combination therapy is required for psychotic depression.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0891
  {
    "code": "op-c-s2-0891",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Bipolar I Acute Manic Episode Pharmacotherapy and Antidepressant Avoidance",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old man is brought to the emergency department by his roommate due to erratic behavior over the past 5 days. The patient has slept only 2 hours each night, yet reports feeling 'electric with boundless energy.' He emptied his entire savings account to purchase fifteen antique cellos, believing he has been divinely chosen to form a global symphony orchestra. On examination, he is pacing the examination room, wearing three jackets of contrasting bright colors, speaks with rapid, pressured speech, and shifts rapidly from topic to topic (flight of ideas). He is irritable when interrupted and proclaims he is the smartest human on the continent. Urine toxicology is negative for cocaine, amphetamines, and cannabinoids. Which of the following is the most appropriate first-line pharmacotherapy?",
    "choices": [
      [
        "Oral second-generation antipsychotic (e.g., olanzapine or quetiapine) or mood stabilizer",
        "This patient presents with a classic acute manic episode, establishing the diagnosis of Bipolar I disorder (DIG FAST criteria: Distractibility, Impulsivity/spending, Grandiosity, Flight of ideas, Activity increase, Sleep deficit, Talkativeness). First-line pharmacotherapy for acute mania includes mood stabilizers (lithium or valproate) OR second-generation (atypical) antipsychotics (e.g., olanzapine, quetiapine, risperidone, aripiprazole). In severe, agitated acute mania, atypical antipsychotics are often preferred initially due to their rapid onset of action compared to lithium or valproate. Antidepressants (such as SSRIs or SNRIs) must be STRICTLY AVOIDED as they can precipitate worsening mania, rapid cycling, or mixed states."
      ],
      [
        "Initiation of a selective serotonin reuptake inhibitor (e.g., escitalopram)",
        "Antidepressant monotherapy is strictly contraindicated in acute mania because it exacerbates agitation, accelerates flight of ideas, and triggers psychosis."
      ],
      [
        "Oral bupropion hydrochloride extended-release monotherapy",
        "Bupropion stimulates dopaminergic and noradrenergic transmission and can worsen manic symptoms and insomnia."
      ],
      [
        "Daily methylphenidate for presumed adult attention-deficit/hyperactivity disorder",
        "Psychostimulants exacerbate mania, insomnia, and grandiosity, and can trigger aggressive agitation and paranoia."
      ],
      [
        "Long-term buspirone therapy combined with interpersonal psychotherapy",
        "Buspirone lacks anti-manic efficacy and does not control the severe behavioral disruption and grandiosity of acute mania."
      ]
    ],
    "shortestValidSolution": "Boundless energy + 2 hr sleep + grandiose spending + pressured speech = acute mania -> second-generation antipsychotic or lithium.",
    "necessaryInference": "Diagnose acute Bipolar I mania, select an atypical antipsychotic or mood stabilizer, and avoid contraindicated antidepressants.",
    "strongestDistractor": "Initiation of a selective serotonin reuptake inhibitor (e.g., escitalopram)",
    "distractorExclusion": "SSRIs worsen mania and induce rapid cycling; second-generation antipsychotics or mood stabilizers are first-line.",
    "citation": "Yatham LN, Kennedy SH, Parikh SV, et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 Guidelines for the Management of Patients With Bipolar Disorder. Bipolar Disord. 2018;20(2):97-170. PMID: 29536762.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry item testing first-line treatment of acute mania and avoidance of antidepressant monotherapy.",
      "distractorExclusionNotes": "Excluded SSRIs, bupropion, and stimulants because all exacerbate mania and destabilize mood.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0892
  {
    "code": "op-c-s2-0892",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Second-Generation Antipsychotic Metabolic Syndrome Screening Guidelines",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old man with newly diagnosed schizophrenia is evaluated in the outpatient clinic. Following discussions regarding efficacy and side-effect profiles, the psychiatrist and patient decide to initiate oral olanzapine. The patient has no other medical conditions and takes no other medications. Blood pressure is 120/78 mm Hg, body mass index is 23 kg/m2, and physical examination is unremarkable. Which of the following sets of baseline laboratory and clinical assessments is most critical to obtain prior to starting therapy and at regular intervals during maintenance treatment?",
    "choices": [
      [
        "Fasting blood glucose (or HbA1c), fasting lipid panel, body mass index, and blood pressure",
        "Second-generation (atypical) antipsychotics (SGAs), particularly olanzapine and clozapine, carry a high risk of drug-induced metabolic syndrome: weight gain, dyslipidemia, new-onset diabetes mellitus, and cardiovascular disease. Consensus guidelines (American Diabetes Association and American Psychiatric Association) recommend mandatory baseline assessment of: (1) body mass index (BMI) and waist circumference, (2) blood pressure, (3) fasting blood glucose (or HbA1c), and (4) fasting lipid panel. Monitoring protocol dictates: BMI checked at every visit (or monthly for 3 months, then quarterly); blood pressure, fasting glucose, and fasting lipids reassessed at 3 months, and at least annually thereafter (or more frequently if weight increases by >= 5%)."
      ],
      [
        "Serial complete blood count with absolute neutrophil count monitored weekly",
        "Weekly absolute neutrophil count (ANC) monitoring is strictly required for clozapine (due to agranulocytosis risk), not routine olanzapine."
      ],
      [
        "Serum thyroid-stimulating hormone and blood urea nitrogen every three months",
        "TSH, BUN, and serum creatinine monitoring is required for lithium therapy (nephrogenic DI and hypothyroidism), not second-generation antipsychotics."
      ],
      [
        "Serial serum total calcium and 24-hour urinary free cortisol levels",
        "Calcium and cortisol are not affected by atypical antipsychotics and are not part of routine metabolic monitoring protocols."
      ],
      [
        "Pulmonary function testing and baseline diffusion capacity of the lungs (DLCO)",
        "Pulmonary function testing is indicated for amiodarone, bleomycin, or methotrexate toxicity, not antipsychotics."
      ]
    ],
    "shortestValidSolution": "Olanzapine therapy = high metabolic syndrome risk -> baseline and periodic BMI, fasting glucose, and lipid panel.",
    "necessaryInference": "Identify high metabolic risk of olanzapine and select the recommended monitoring protocol (BMI, glucose, lipids, BP).",
    "strongestDistractor": "Serial complete blood count with absolute neutrophil count monitored weekly",
    "distractorExclusion": "Weekly ANC monitoring is specific to clozapine; olanzapine mandates metabolic profile screening.",
    "citation": "American Diabetes Association; American Psychiatric Association; American Association of Clinical Endocrinologists; North American Association for the Study of Obesity. Consensus Development Conference on Antipsychotic Drugs and Obesity and Diabetes. Diabetes Care. 2004;27(2):596-601. PMID: 14747245.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry/preventive medicine item on metabolic syndrome monitoring for second-generation antipsychotics.",
      "distractorExclusionNotes": "Excluded ANC (clozapine) and TSH/creatinine (lithium) because olanzapine primarily requires metabolic surveillance.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0893
  {
    "code": "op-c-s2-0893",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Neuroleptic Malignant Syndrome Lead-Pipe Rigidity and Antipsychotic Cessation",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old man with paranoid schizophrenia is brought to the emergency department from an inpatient psychiatric facility due to high fever, altered mental status, and acute physical rigidity. Three days ago, his oral haloperidol dose was increased, and he received two intramuscular doses of haloperidol for severe agitation. On examination, he is stuporous, diaphoretic, and mute. Vital signs show blood pressure 184/106 mm Hg with marked labile fluctuations, heart rate 126/min, respiratory rate 26/min, and temperature 40.2 C (104.4 F). Neurological examination reveals generalized, severe muscular resistance throughout the entire range of passive flexion and extension in all four extremities ('lead-pipe rigidity') and depressed deep tendon reflexes (1+). Laboratory evaluation reveals WBC 24,500/mm3, serum creatine kinase 38,000 U/L (normal < 200 U/L), and serum creatinine 2.4 mg/dL. Which of the following is the most critical immediate step in management?",
    "choices": [
      [
        "Immediate discontinuation of haloperidol, aggressive supportive cooling, and hydration",
        "This patient exhibits the classic clinical tetrad of Neuroleptic Malignant Syndrome (NMS), a life-threatening idiosyncratic reaction to dopamine receptor antagonists (especially high-potency typical antipsychotics like haloperidol): (1) Hyperthermia (>40 C), (2) Generalized muscular 'lead-pipe' rigidity, (3) Autonomic instability (labile hypertension, tachycardia, profuse diaphoresis), and (4) Altered mental status (stupor, delirium, mutism). Hallmark lab findings include massive creatine kinase elevation (>1,000 to >50,000 U/L) from rhabdomyolysis and marked leukocytosis. The immediate, most critical step is prompt cessation of the causative antipsychotic agent, followed by aggressive ICU supportive care (external cooling, IV crystalloids for rhabdomyolysis to prevent acute renal failure). Medical therapies include dopamine agonists (bromocriptine, amantadine) or a direct muscle relaxant (dantrolene)."
      ],
      [
        "Administration of high-dose intravenous cyproheptadine via nasogastric tube",
        "Cyproheptadine is a 5-HT2A serotonin antagonist used for Serotonin Syndrome, which presents with hyperreflexia and clonus, not hyporeflexic lead-pipe rigidity."
      ],
      [
        "Switch from oral haloperidol to intramuscular fluphenazine for agitation",
        "Administering another high-potency dopamine antagonist worsens NMS and accelerates fatal multi-organ failure."
      ],
      [
        "Immediate lumbar puncture and empiric broad-spectrum antibiotic meningitis therapy",
        "While meningitis must be considered, lead-pipe rigidity with CK >38,000 following haloperidol escalation is diagnostic of NMS; stopping the drug is immediate."
      ],
      [
        "Performance of emergency whole-body computed tomography with contrast",
        "Imaging delays urgent cooling and resuscitation; clinical recognition of NMS mandates immediate supportive ICU intervention."
      ]
    ],
    "shortestValidSolution": "Haloperidol + 40C fever + lead-pipe rigidity + CK >38,000 = NMS -> stop antipsychotic + aggressive cooling and IV hydration.",
    "necessaryInference": "Diagnose NMS, distinguish it from serotonin syndrome (lead-pipe rigidity and low reflexes vs hyperreflexia/clonus), and stop the offending antipsychotic.",
    "strongestDistractor": "Administration of high-dose intravenous cyproheptadine via nasogastric tube",
    "distractorExclusion": "Cyproheptadine is the antidote for serotonin syndrome (clonus/hyperreflexia); NMS (lead-pipe rigidity) is treated with bromocriptine or dantrolene.",
    "citation": "Ware MR, Feller DB, Hall KL. Neuroleptic Malignant Syndrome: Diagnosis and Management. Prim Care Companion CNS Disord. 2018;20(1):17r02185. PMID: 29323795.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry emergency item on distinguishing NMS from serotonin syndrome and immediate management.",
      "distractorExclusionNotes": "Excluded cyproheptadine because lead-pipe rigidity and extreme CK elevation indicate NMS, requiring drug cessation and cooling.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0894
  {
    "code": "op-c-s2-0894",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Serotonin Syndrome Neuromuscular Hyperreflexia and Cyproheptadine Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 29-year-old woman with major depressive disorder managed on oral sertraline 100 mg daily presents to the emergency department with tremors, profuse sweating, and agitation. Her primary care physician recently prescribed oral tramadol for acute back pain, which she began taking yesterday. On examination, she is restless, pacing, and easily startled. Vital signs show blood pressure 162/96 mm Hg, heart rate 124/min, respiratory rate 22/min, and temperature 38.6 C (101.5 F). Physical examination reveals flushed skin, dilated pupils (mydriasis), and copious diaphoresis. Neurological examination demonstrates 4+ hyperreflexia at the patellar and Achilles tendons, bilateral sustained ankle clonus (>6 beats), and spontaneous horizontal ocular clonus (roving eye movements). Bowel sounds are markedly hyperactive, and she has had two watery stools. Serum creatine kinase is mildly elevated at 450 U/L. Which of the following is the most appropriate specific pharmacological antidote if supportive measures fail?",
    "choices": [
      [
        "Oral or nasogastric cyproheptadine",
        "Serotonin syndrome is a potentially life-threatening condition caused by excess serotonergic activity in the central and peripheral nervous systems, most commonly triggered by combining multiple serotonergic agents (e.g., SSRI + tramadol, linezolid, dextromethorphan, triptan, or MAOI). The Hunter Serotonin Toxicity Criteria require exposure to a serotonergic agent PLUS one of the following: (1) spontaneous clonus, (2) inducible clonus with agitation/diaphoresis, (3) ocular clonus with agitation/diaphoresis, (4) tremor and hyperreflexia, or (5) hypertonia and temperature > 38 C with ocular/inducible clonus. In contrast to NMS (lead-pipe rigidity, hyporeflexia), serotonin syndrome is characterized by neuromuscular HYPERREACTIVITY (hyperreflexia, clonus, tremor) and gastrointestinal hyperactivity (diarrhea, hyperactive bowel sounds). Treatment is discontinuation of serotonergic drugs, supportive cooling, IV benzodiazepines, and the specific 5-HT2A antagonist cyproheptadine."
      ],
      [
        "Intravenous dantrolene sodium infusion",
        "Dantrolene is a direct ryanodine receptor blocker used for malignant hyperthermia and NMS, not the specific 5-HT antagonist needed for serotonin syndrome."
      ],
      [
        "Oral bromocriptine mesylate via nasogastric tube",
        "Bromocriptine is a dopamine receptor agonist used to treat NMS; it has no serotonin-blocking activity and does not reverse serotonin toxicity."
      ],
      [
        "Intravenous flumazenil bolus administration",
        "Flumazenil is a benzodiazepine antagonist that can precipitate acute withdrawal seizures; benzodiazepines are therapeutic in serotonin syndrome."
      ],
      [
        "Intramuscular haloperidol for behavioral agitation",
        "Antipsychotics worsen thermoregulation, lower seizure thresholds, and some have serotonergic or anticholinergic effects that worsen toxicity."
      ]
    ],
    "shortestValidSolution": "Sertraline + tramadol + hyperreflexia + clonus + hyperactive bowels = serotonin syndrome -> cyproheptadine.",
    "necessaryInference": "Diagnose serotonin syndrome using neuromuscular hyperactivity (clonus, hyperreflexia) and select cyproheptadine.",
    "strongestDistractor": "Intravenous dantrolene sodium infusion",
    "distractorExclusion": "Dantrolene treats malignant hyperthermia and NMS; cyproheptadine is the specific 5-HT receptor antagonist for serotonin syndrome.",
    "citation": "Boyer EW, Shannon M. The Serotonin Syndrome. N Engl J Med. 2005;352(11):1112-1120. PMID: 15784664.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry/toxicology item on distinguishing serotonin syndrome from NMS and selecting cyproheptadine.",
      "distractorExclusionNotes": "Excluded dantrolene and bromocriptine because clonus and hyperreflexia point to serotonin syndrome, which responds to cyproheptadine.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0895
  {
    "code": "op-c-s2-0895",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Panic Disorder Maintenance Selective Serotonin Reuptake Inhibitor Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old previously healthy woman presents to the clinic reporting recurrent, unpredictable episodes of intense fear that peak within 5 minutes. During these episodes, she experiences palpitations, chest tightness, shortness of breath, dizziness, tingling in her fingers, and a feeling that she is 'having a heart attack or losing her mind.' Over the past 6 months, she has had eight similar episodes, resulting in four visits to the emergency department, where cardiac evaluations (including serial ECGs, troponins, echocardiography, and Holter monitoring) were normal. She admits to persistent, debilitating anxiety regarding when the next attack will occur, and has started avoiding driving or crowded grocery stores because she fears she cannot escape or get help during an attack. Which of the following is the most appropriate first-line pharmacotherapy for long-term maintenance treatment?",
    "choices": [
      [
        "Selective serotonin reuptake inhibitor (e.g., sertraline or escitalopram)",
        "This patient meets DSM-5 criteria for Panic Disorder: recurrent, unexpected panic attacks (intense surge of fear with somatic symptoms peaking within minutes) followed by at least 1 month of persistent worry about future attacks (anticipatory anxiety) or maladaptive behavioral changes (avoidance behavior / agoraphobia). First-line long-term pharmacotherapy for panic disorder consists of Selective Serotonin Reuptake Inhibitors (SSRIs, such as sertraline, escitalopram, or paroxetine) or SNRIs (venlafaxine), combined with Cognitive Behavioral Therapy (CBT). Because SSRIs may initially cause mild transient jitteriness or increased anxiety, they should be started at a low initial dose and titrated upward slowly. Short-acting benzodiazepines (e.g., alprazolam, lorazepam) provide rapid acute abortive relief for disabling crises, but are avoided for long-term monotherapy due to dependence, tolerance, and rebound anxiety."
      ],
      [
        "Scheduled oral alprazolam three times daily as indefinite maintenance monotherapy",
        "Benzodiazepines carry significant risks of physiological dependence, tolerance, cognitive impairment, and severe withdrawal; they are not recommended as first-line maintenance monotherapy."
      ],
      [
        "Oral propranolol 40 mg three times daily as primary maintenance therapy",
        "Beta-blockers can diminish peripheral somatic tremor or tachycardia in performance anxiety, but are ineffective for central panic disorder or agoraphobia."
      ],
      [
        "Low-dose oral quetiapine monotherapy for chronic nocturnal sedation",
        "Atypical antipsychotics are not first-line agents for uncomplicated panic disorder and introduce metabolic syndrome and tardive dyskinesia risks."
      ],
      [
        "Oral bupropion extended-release once daily in the morning",
        "Bupropion inhibits norepinephrine and dopamine reuptake and lacks serotonergic activity; it can provoke or worsen anxiety and panic attacks."
      ]
    ],
    "shortestValidSolution": "Recurrent unexpected panic attacks + anticipatory worry/avoidance = panic disorder -> first-line maintenance is SSRI + CBT.",
    "necessaryInference": "Identify panic disorder with agoraphobia and select SSRI therapy for maintenance while avoiding long-term benzodiazepine monotherapy.",
    "strongestDistractor": "Scheduled oral alprazolam three times daily as indefinite maintenance monotherapy",
    "distractorExclusion": "Benzodiazepines cause dependence, rebound panic, and tolerance; SSRIs are the evidence-based first-line maintenance therapy.",
    "citation": "Locke AB, Kirst N, Shultz CG. Diagnosis and Management of Generalized Anxiety Disorder and Panic Disorder in Adults. Am Fam Physician. 2015;91(9):617-624. PMID: 25955736.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry item testing first-line long-term maintenance treatment of panic disorder.",
      "distractorExclusionNotes": "Excluded long-term benzodiazepines and bupropion because SSRIs are the established first-line maintenance pharmacotherapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0896
  {
    "code": "op-c-s2-0896",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Obsessive-Compulsive Disorder High-Dose SSRI and Exposure Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old college student presents to the student health clinic reporting that her hands are raw, bleeding, and chapped. She explains that she has persistent, intrusive, distressing thoughts that her hands are coated with lethal microbial pathogens from touching door handles and desks. To alleviate the overwhelming anxiety caused by these thoughts, she washes her hands with scalding water and antibacterial soap in a rigid routine of 20 consecutive scrubs, repeating this entire sequence up to 30 times a day. If she is interrupted, she feels intense dread and must restart the routine from the beginning. These rituals consume more than 4 hours each day, causing her to fail her examinations. She recognizes that her fears and washing behaviors are irrational and excessive. Which of the following is the most effective evidence-based treatment combination?",
    "choices": [
      [
        "High-dose selective serotonin reuptake inhibitor and exposure and response prevention therapy",
        "Obsessive-Compulsive Disorder (OCD) is characterized by obsessions (recurrent, persistent, intrusive, and distressing thoughts, urges, or images) and/or compulsions (repetitive behaviors or mental acts performed to reduce distress or prevent a dreaded event, according to rigid rules), causing marked distress or functional impairment. The patient typically retains insight that the obsessions/compulsions are excessive or unreasonable. The first-line evidence-based treatments are: (1) Cognitive Behavioral Therapy specifically utilizing Exposure and Response Prevention (ERP, where the patient is exposed to the feared stimulus, e.g., touching a doorknob, while refraining from the compulsive ritual), and (2) Pharmacotherapy with high-dose Selective Serotonin Reuptake Inhibitors (SSRIs, such as sertraline, fluoxetine, or fluvoxamine, often requiring higher doses than those used for depression). Clomipramine (a serotonergic TCA) is an effective second-line agent."
      ],
      [
        "Low-dose oral diazepam as-needed prior to entering public restrooms",
        "Benzodiazepines do not treat the underlying obsessions or compulsions of OCD and carry significant addiction risks without clinical efficacy."
      ],
      [
        "Psychoanalytic insight-oriented psychotherapy focusing on early childhood conflicts",
        "Psychodynamic and insight-oriented therapies have proven ineffective for OCD; ERP-focused behavioral therapy is the established standard."
      ],
      [
        "Oral risperidone monotherapy without antidepressant medication or therapy",
        "Antipsychotic monotherapy is ineffective for OCD; antipsychotics are used strictly as low-dose augmentation agents in SSRI-refractory cases."
      ],
      [
        "Scheduled electroconvulsive therapy (ECT) consisting of twelve bilateral sessions",
        "ECT is effective for severe refractory depression and catatonia, but has very poor efficacy for primary obsessive-compulsive disorder."
      ]
    ],
    "shortestValidSolution": "Intrusive contamination fears + repetitive washing rituals + insight = OCD -> high-dose SSRI + exposure and response prevention (ERP).",
    "necessaryInference": "Recognize OCD and prescribe first-line evidence-based therapy: high-dose SSRIs combined with exposure and response prevention (ERP).",
    "strongestDistractor": "Oral risperidone monotherapy without antidepressant medication or therapy",
    "distractorExclusion": "Antipsychotics are ineffective as monotherapy; high-dose SSRIs and ERP behavioral therapy are the gold standard.",
    "citation": "Hirschtritt ME, Bloch MH, Mathews CA. Obsessive-Compulsive Disorder: Advances in Diagnosis and Treatment. JAMA. 2017;317(13):1358-1367. PMID: 28384832.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry item testing first-line treatment modalities for obsessive-compulsive disorder.",
      "distractorExclusionNotes": "Excluded benzodiazepines and antipsychotic monotherapy because high-dose SSRIs and ERP are first-line.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0897
  {
    "code": "op-c-s2-0897",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Post-Traumatic Stress Disorder Trauma-Focused Psychotherapy and SSRI",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old military combat veteran presents to the outpatient clinic reporting severe sleep disturbance and irritability for the past 6 months following deployment. He experiences recurrent, vivid, intrusive flashbacks of an improvised explosive device blast that killed two of his squad members. Whenever he hears loud fireworks or car backfires, he dives to the ground in terror, believing he is under attack. He actively avoids social gatherings, refuses to watch the news, and feels emotionally detached and numb toward his spouse and children. He is constantly on guard, sits with his back against the wall in restaurants, and exhibits an exaggerated startle response. He has severe nightmares about the explosion and averages 3 hours of fragmented sleep per night. Which of the following is the most appropriate first-line management combination?",
    "choices": [
      [
        "Trauma-focused psychotherapy and a selective serotonin reuptake inhibitor (or SNRI)",
        "Post-Traumatic Stress Disorder (PTSD) is diagnosed when symptoms persist for > 1 month following exposure to actual or threatened death, serious injury, or sexual violence. Diagnostic clusters include: (1) Intrusion symptoms (flashbacks, nightmares, distressing memories), (2) Avoidance of trauma-related stimuli, (3) Negative alterations in cognitions and mood (detachment, persistent negative emotional state), and (4) Alterations in arousal and reactivity (hypervigilance, exaggerated startle, insomnia, irritability). First-line treatment combines Trauma-Focused Psychotherapy (such as Cognitive Processing Therapy, Prolonged Exposure, or EMDR) and pharmacotherapy with an SSRI (sertraline, paroxetine) or SNRI (venlafaxine). Prazosin (an alpha-1 adrenergic antagonist) is an effective adjunct specifically for PTSD-associated nightmares and sleep disruption."
      ],
      [
        "Monotherapy with scheduled oral alprazolam four times daily for hyperarousal",
        "Benzodiazepines are relatively contraindicated in PTSD because they do not reduce core symptoms, worsen psychotherapy outcomes, and carry high substance abuse risk in veterans."
      ],
      [
        "Immediate referral for emergent inpatient hospitalization and electroconvulsive therapy",
        "Inpatient admission is reserved for acute active suicidality or psychosis, not stable outpatient presentation of chronic PTSD."
      ],
      [
        "Oral buspirone monotherapy with eye movement desensitization withheld",
        "Buspirone lacks proven efficacy for core PTSD symptom clusters; trauma-focused psychotherapy is a primary pillar of treatment."
      ],
      [
        "Prescribe oral propranolol monotherapy and recommend avoiding trauma triggers",
        "Encouraging avoidance reinforces phobic avoidance pathways, whereas trauma-focused therapy requires controlled processing of the trauma memory."
      ]
    ],
    "shortestValidSolution": "Combat trauma >1 mo + flashbacks + hypervigilance + avoidance = PTSD -> trauma-focused psychotherapy + SSRI/SNRI.",
    "necessaryInference": "Diagnose PTSD (>1 month duration) and select trauma-focused psychotherapy plus SSRI/SNRI while avoiding benzodiazepines.",
    "strongestDistractor": "Monotherapy with scheduled oral alprazolam four times daily for hyperarousal",
    "distractorExclusion": "Benzodiazepines are contraindicated in PTSD due to lack of efficacy, impairment of trauma processing, and high addiction risk.",
    "citation": "Bisson JI, Cosgrove S, Turnbull C, et al. Post-Traumatic Stress Disorder. BMJ. 2015;351:h6161. PMID: 26611144.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry item testing first-line psychotherapeutic and pharmacologic management of PTSD.",
      "distractorExclusionNotes": "Excluded benzodiazepines because they worsen PTSD recovery and perpetuate avoidance behavior.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0898
  {
    "code": "op-c-s2-0898",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Anorexia Nervosa Refeeding Syndrome Hypophosphatemia Pathophysiology",
    "provisionalDifficulty": 4,
    "stem": "An 18-year-old woman with severe anorexia nervosa (height 165 cm, weight 34 kg, body mass index 12.5 kg/m2) is admitted to the medical stabilization unit for severe emaciation, bradycardia (heart rate 38/min), and orthostatic hypotension. She reports consuming fewer than 300 kcal/day for the past 4 months. On admission, serum electrolytes, including potassium, sodium, and phosphate, are at the lower limit of normal. High-calorie enteral nutrition (2,500 kcal/day) is initiated via nasogastric tube. On hospital day 3, she develops acute shortness of breath, bilateral lower extremity pitting edema, bibasilar pulmonary crackles, and profound generalized muscle weakness. Repeat laboratory evaluation reveals: serum phosphate 1.1 mg/dL (normal 2.5-4.5 mg/dL), serum potassium 2.8 mEq/L, and serum magnesium 1.3 mg/dL. Which of the following is the primary physiological mechanism driving this clinical deterioration?",
    "choices": [
      [
        "Insulin surge stimulating intracellular shift of phosphate, potassium, and magnesium",
        "This patient has developed Refeeding Syndrome, a potentially fatal complication occurring when aggressive nutritional replenishment is introduced to a severely starved or malnourished patient. In chronic starvation, the body shifts from carbohydrate to fat and protein catabolism (ketosis), depleting total-body stores of phosphate, potassium, and magnesium, although serum levels may remain normal due to hemoconcentration. When refeeding with carbohydrates begins, blood glucose spikes, triggering a massive surge in endogenous insulin secretion. Insulin stimulates the cellular uptake of glucose, phosphate, potassium, and magnesium to synthesize ATP. This produces profound acute intracellular shifts and severe extracellular hypophosphatemia, hypokalemia, and hypomagnesemia. Hypophosphatemia impairs ATP production, leading to heart failure, pulmonary edema, rhabdomyolysis, seizures, and arrhythmias."
      ],
      [
        "Excessive glucagon secretion driving extracellular efflux of phosphate and calcium",
        "Glucagon is elevated during fasting and catabolism, not after high-calorie refeeding; insulin release drives the intracellular electrolyte shift."
      ],
      [
        "Profound secondary hyperparathyroidism causing massive renal phosphate wasting",
        "Hyperparathyroidism causes renal phosphate wasting, but refeeding syndrome is driven by insulin-mediated cellular uptake, not PTH surge."
      ],
      [
        "Syndrome of inappropriate antidiuretic hormone secretion (SIADH) from brain atrophy",
        "SIADH produces euvolemic hyponatremia; it does not account for acute hypophosphatemia, hypokalemia, and acute congestive heart failure."
      ],
      [
        "Direct bacterial exotoxin-mediated destruction of cardiac myocyte cell membranes",
        "Refeeding syndrome is an endogenous metabolic phenomenon triggered by nutritional reintroduction, not an infectious disease."
      ]
    ],
    "shortestValidSolution": "Starvation + rapid refeeding + hypophosphatemia + heart failure = refeeding syndrome -> insulin surge drives phosphate intracellularly.",
    "necessaryInference": "Understand the pathophysiology of refeeding syndrome: carbohydrate refeeding -> insulin surge -> intracellular shift of phosphate -> acute ATP depletion.",
    "strongestDistractor": "Profound secondary hyperparathyroidism causing massive renal phosphate wasting",
    "distractorExclusion": "Refeeding hypophosphatemia is driven by insulin-mediated intracellular uptake for ATP synthesis, not renal hyperparathyroidism.",
    "citation": "Mehanna HM, Moledina J, Travis J. Refeeding Syndrome: What It Is, and How to Prevent and Treat It. BMJ. 2008;336(7659):1495-1498. PMID: 18583681.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK internal medicine/psychiatry item evaluating the pathophysiological mechanism of refeeding syndrome.",
      "distractorExclusionNotes": "Excluded glucagon and SIADH because carbohydrate-induced insulin surge drives intracellular shifting of phosphate.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0899
  {
    "code": "op-c-s2-0899",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Delirium Tremens Autonomic Hyperactivity and Symptom-Triggered Benzodiazepines",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old man is hospitalized for an open reduction and internal fixation of a bimalleolar ankle fracture. On hospital day 3 (approximately 72 hours following his last drink of alcohol), he becomes intensely agitated, combative, and disoriented to time and place. He is screaming that giant black spiders are crawling over his hospital bed and ceiling. Physical examination reveals an intensely diaphoretic, tremulous man. Vital signs show blood pressure 188/110 mm Hg, heart rate 136/min, respiratory rate 26/min, and temperature 38.9 C (102.0 F). Pupil examination shows mydriasis with intact reactivity. Deep tendon reflexes are 3+ bilaterally. Laboratory evaluation reveals mild hypokalemia and hypomagnesemia. Blood alcohol concentration is undetectable. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Intravenous benzodiazepines (e.g., lorazepam or diazepam) on a symptom-triggered protocol",
        "This patient exhibits the classic clinical syndrome of Delirium Tremens (DTs), the most severe and potentially fatal manifestation of alcohol withdrawal, typically occurring 48 to 96 hours after the cessation or reduction of heavy chronic alcohol consumption. Hallmarks include: (1) delirium (fluctuating altered sensorium, clouding of consciousness, disorientation), (2) vivid visual and tactile hallucinations (zoopsia, e.g., crawling insects/spiders), (3) severe autonomic hyperactivity (hypertension, tachycardia, hyperthermia, diaphoresis), and (4) coarse tremors. Untreated mortality reaches 15% to 20% due to cardiovascular collapse, hyperthermia, or aspiration. The cornerstone of therapy is symptom-triggered intravenous benzodiazepines (e.g., lorazepam, diazepam) titrated to objective withdrawal scores (CIWA-Ar), combined with IV fluids, thiamine, folate, and electrolyte replenishment."
      ],
      [
        "High-dose intramuscular haloperidol monotherapy to control combativeness",
        "Antipsychotics like haloperidol lower the seizure threshold and worsen autonomic instability in alcohol withdrawal; they should never be given as monotherapy."
      ],
      [
        "Oral chlordiazepoxide every six hours as a fixed outpatient prescription",
        "Oral fixed-dose therapy is unsafe and inadequate for acute delirium tremens, which requires rapid intravenous titration and ICU-level monitoring."
      ],
      [
        "Intravenous phenytoin loading infusion to prevent withdrawal seizures",
        "Phenytoin has no efficacy in preventing or treating alcohol withdrawal seizures; benzodiazepines are the proven anticonvulsants of choice."
      ],
      [
        "Physical four-point restraints without pharmacological sedation",
        "Restraints without sedation increase agitation, muscle breakdown, rhabdomyolysis, and hyperthermia, and do not treat GABA-receptor down-regulation."
      ]
    ],
    "shortestValidSolution": "72 hrs post-alcohol + delirium + visual hallucinations + severe autonomic surge = delirium tremens -> IV benzodiazepines (CIWA).",
    "necessaryInference": "Diagnose delirium tremens and administer intravenous symptom-triggered benzodiazepines while avoiding haloperidol monotherapy.",
    "strongestDistractor": "High-dose intramuscular haloperidol monotherapy to control combativeness",
    "distractorExclusion": "Haloperidol lowers seizure thresholds and worsens autonomic dysfunction; IV benzodiazepines are the mandatory cornerstone.",
    "citation": "Schuckit MA. Recognition and Management of Withdrawal Delirium (Delirium Tremens). N Engl J Med. 2014;371(22):2109-2113. PMID: 25427113.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry/critical care item testing recognition and management of delirium tremens.",
      "distractorExclusionNotes": "Excluded haloperidol and phenytoin because symptom-triggered IV benzodiazepines are the definitive treatment.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0900
  {
    "code": "op-c-s2-0900",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Acute Suicidal Ideation Immediate Involuntary Psychiatric Hospitalization",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old man with a history of recurrent major depressive disorder is brought to the clinic by his brother. The patient recently underwent a contentious divorce and lost his executive job 2 weeks ago. During the interview, he maintains poor eye contact, speaks in a monotone, and exhibits psychomotor retardation. When asked about thoughts of death, he states calmly, 'I have nothing left to live for. My family is better off without me.' He reveals that he has purchased a loaded handgun and ammunition, which are currently in the glove compartment of his car outside the clinic, and states his intention to drive to a secluded park and shoot himself this afternoon. When the physician recommends admission to an inpatient psychiatric facility, the patient adamantly refuses, stands up, and states he is walking out to his car. Which of the following is the most appropriate next action by the physician?",
    "choices": [
      [
        "Ensure patient safety with security and initiate emergent involuntary psychiatric admission",
        "The evaluation of suicide risk requires identifying active ideation, specific intent, a lethal plan, and available means. This patient has imminent, high-risk suicidal intent with a concrete lethal plan, access to means (loaded firearm in his car), high-risk demographics (male, divorced, unemployed), and expresses hopelessness. When an adult patient with severe psychiatric illness poses an imminent danger to themselves or others and refuses voluntary hospitalization, the physician has an absolute legal and ethical duty to protect the patient. The physician must not allow the patient to leave the clinic. Clinic security and local law enforcement should be engaged immediately to ensure the patient's physical safety and retain the patient while initiating an emergent involuntary psychiatric hospitalization (e.g., emergency psychiatric hold)."
      ],
      [
        "Have the patient sign a written 'no-suicide contract' and discharge him home",
        "No-suicide contracts have zero proven efficacy in preventing suicide, provide false reassurance, and do not substitute for protective involuntary hospitalization."
      ],
      [
        "Prescribe a 30-day supply of a tricyclic antidepressant and schedule clinic follow-up in one week",
        "Tricyclic antidepressants are highly lethal in overdose, and outpatient discharge with a firearm in the car would result in suicide within hours."
      ],
      [
        "Respect the patient's autonomous refusal of treatment and allow him to leave the premises",
        "Patient autonomy does not supersede medical duty of care when severe mental illness compromises decision-making capacity and presents imminent risk of death."
      ],
      [
        "Instruct the brother to remove the gun from the car and monitor the patient at home",
        "Relying on family members to police firearms and manage an actively suicidal, uncooperative patient at home is dangerous and negligent."
      ]
    ],
    "shortestValidSolution": "Active suicidal plan + firearm in car + refusal of admission = imminent suicide risk -> retain patient and involuntary hospitalization.",
    "necessaryInference": "Recognize imminent suicide risk with lethal means and override treatment refusal via involuntary emergency psychiatric admission.",
    "strongestDistractor": "Have the patient sign a written 'no-suicide contract' and discharge him home",
    "distractorExclusion": "No-suicide contracts do not reduce suicide risk or provide legal protection; imminent risk mandates involuntary admission.",
    "citation": "Brodsky BS, Spruch-Feiner A, Stanley B. The Zero Suicide Model: Applying Evidence-Based Suicide Prevention Practices to Clinical Care. Front Psychiatry. 2018;9:33. PMID: 29515477.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry ethics and emergency management item on imminent suicide risk and involuntary admission.",
      "distractorExclusionNotes": "Excluded no-suicide contracts, autonomy deference, and family discharge because imminent suicide requires involuntary holding.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
]
