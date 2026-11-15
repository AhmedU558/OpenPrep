"""
Step 2 CK Batch 36 (0876-0888) Definitions - Obstetrics
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b36_part1 = [
  # 0876
  {
    "code": "op-c-s2-0876",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Ectopic Pregnancy Methotrexate Eligibility Criteria Versus Laparoscopy",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman, gravida 2 para 1, presents at 6 weeks of gestation with mild left lower quadrant crampy pain and light vaginal spotting. She is hemodynamically stable: blood pressure is 118/74 mm Hg, heart rate is 72/min, and afebrile. Abdominal examination reveals mild left lower quadrant tenderness without guarding, rigidity, or rebound. Pelvic examination reveals a closed cervical os and no adnexal mass palpable. Serum beta-hCG is 2,400 mIU/mL. Transvaginal ultrasonography demonstrates an empty uterine cavity with an endometrial stripe of 10 mm, and a 2.6-cm complex left adnexal mass with no yolk sac, embryo, or fetal cardiac activity, and no free fluid in the pouch of Douglas. Complete blood count, serum creatinine, and liver enzymes are normal. Which of the following is the most appropriate management approach?",
    "choices": [
      [
        "Intramuscular methotrexate with serial beta-hCG monitoring on days 4 and 7",
        "This patient has an unruptured ectopic pregnancy. Candidates for medical therapy with intramuscular methotrexate (a folate antagonist that inhibits dihydrofolate reductase in rapidly dividing trophoblastic tissue) must meet specific criteria: (1) hemodynamic stability, (2) unruptured ectopic mass < 3.5 cm in diameter, (3) serum beta-hCG < 5,000 mIU/mL, (4) absence of embryonic/fetal cardiac activity, and (5) normal renal and hepatic function, with reliable patient follow-up. Successful treatment is defined as a >= 15% decline in serum beta-hCG between post-treatment days 4 and 7, followed by weekly measurements until beta-hCG is undetectable. Emergent laparoscopy (salpingectomy or salpingostomy) is reserved for hemodynamic instability, ruptured ectopic, peritoneal signs, or contraindications to methotrexate."
      ],
      [
        "Emergent exploratory laparotomy with bilateral salpingo-oophorectomy",
        "Radical surgical castration with bilateral adnexectomy is completely inappropriate for an unruptured tubal ectopic in a young woman desiring fertility."
      ],
      [
        "Immediate suction dilation and curettage of the uterine cavity",
        "Suction curettage evacuates intrauterine pregnancies; it does not treat an extrauterine adnexal tubal gestation and risks perforation."
      ],
      [
        "Expectant management with repeat transvaginal ultrasound in four weeks",
        "Expectant management is reserved only for asymptomatic patients with very low (<1,000 mIU/mL) and falling beta-hCG levels; waiting 4 weeks risks tubal rupture."
      ],
      [
        "Oral high-dose mifepristone followed by misoprostol 48 hours later",
        "Mifepristone and misoprostol are used for medical abortion of intrauterine gestations, but are ineffective and dangerous for ectopic pregnancy."
      ]
    ],
    "shortestValidSolution": "Stable + mass 2.6 cm + beta-hCG 2400 + no fetal heartbeat = unruptured ectopic -> IM methotrexate with day 4/7 hCG checks.",
    "necessaryInference": "Apply clinical criteria for medical management of ectopic pregnancy with methotrexate over surgical salpingectomy.",
    "strongestDistractor": "Emergent exploratory laparotomy with bilateral salpingo-oophorectomy",
    "distractorExclusion": "Surgery is reserved for rupture or methotrexate contraindications; bilateral oophorectomy is never indicated.",
    "citation": "ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy. Obstet Gynecol. 2018;131(3):e91-e103. PMID: 29470343.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics emergency item on methotrexate criteria for unruptured ectopic pregnancy.",
      "distractorExclusionNotes": "Excluded surgical intervention and mifepristone because patient fulfills all medical methotrexate criteria.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0877
  {
    "code": "op-c-s2-0877",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Preeclampsia With Severe Features Antihypertensives and Seizure Prophylaxis",
    "provisionalDifficulty": 4,
    "stem": "A 31-year-old primigravida at 35 weeks of gestation presents to the labor and delivery triage with a persistent, throbbing frontal headache and blurry vision with scotomas for 6 hours. Blood pressure measured twice 15 minutes apart is 168/112 mm Hg and 172/114 mm Hg. Physical examination reveals 3+ bilateral patellar deep tendon reflexes with 3 beats of ankle clonus, facial edema, and mild right upper quadrant tenderness. Cardiotocography demonstrates a reactive fetal heart rate tracing with a baseline of 140/min and no decelerations. Laboratory studies reveal: platelet count 72,000/mm3, serum creatinine 1.3 mg/dL (baseline 0.6 mg/dL), AST 148 U/L, ALT 165 U/L, and urine protein-to-creatinine ratio 0.8 mg/mg. Which of the following is the most appropriate immediate medical management combination?",
    "choices": [
      [
        "Intravenous magnesium sulfate plus intravenous labetalol (or hydralazine)",
        "Preeclampsia with severe features is diagnosed in a pregnant woman >= 20 weeks of gestation with new-onset hypertension (systolic BP >= 160 mm Hg or diastolic BP >= 110 mm Hg on two occasions >= 4 hours apart, or confirmed within minutes if severe) OR hypertension with any severe feature: thrombocytopenia (<100,000/mm3), impaired liver function (transaminases >= 2x upper limit or RUQ pain), renal insufficiency (Cr > 1.1 mg/dL or doubling), pulmonary edema, or new-onset persistent cerebral/visual symptoms. Immediate medical management consists of: (1) intravenous magnesium sulfate loading (4-6 g) followed by continuous infusion to prevent eclamptic seizures, and (2) prompt acute antihypertensive therapy with IV labetalol or hydralazine (or oral nifedipine) to reduce maternal stroke risk (targeting 140-150 / 90-100 mm Hg), followed by planned delivery at >= 34 weeks after maternal stabilization."
      ],
      [
        "Oral enalapril monotherapy targeting diastolic blood pressure below 80 mm Hg",
        "ACE inhibitors like enalapril are strictly contraindicated in pregnancy due to severe fetotoxicity (renal dysgenesis, oligohydramnios, skull hypoplasia)."
      ],
      [
        "Intravenous phenytoin loading infusion combined with continuous furosemide",
        "Phenytoin is inferior to magnesium sulfate for eclampsia prophylaxis (Magpie trial), and loop diuretics worsen placental hypoperfusion in preeclampsia."
      ],
      [
        "Subcutaneous low-molecular-weight heparin and high-dose oral aspirin",
        "Anticoagulation does not lower blood pressure or prevent seizures, and increases intracranial hemorrhage risk with severe thrombocytopenia (72,000/mm3)."
      ],
      [
        "Expectant outpatient management with bed rest and oral acetaminophen for headache",
        "Preeclampsia with severe features at 35 weeks mandates inpatient admission, seizure prophylaxis, blood pressure control, and delivery; outpatient bed rest is dangerous."
      ]
    ],
    "shortestValidSolution": "BP >160/110 + headache/scotoma + platelets <100k + AST/ALT >2x = severe preeclampsia -> IV magnesium sulfate + IV labetalol.",
    "necessaryInference": "Identify preeclampsia with severe features and administer magnesium sulfate for neuroprotection plus IV labetalol for acute blood pressure control.",
    "strongestDistractor": "Intravenous phenytoin loading infusion combined with continuous furosemide",
    "distractorExclusion": "Phenytoin is significantly inferior to magnesium sulfate for eclampsia; diuretics decrease placental perfusion.",
    "citation": "ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia. Obstet Gynecol. 2020;135(6):e237-e260. PMID: 32443079.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics emergency item on preeclampsia with severe features management priorities.",
      "distractorExclusionNotes": "Excluded phenytoin, ACE inhibitors, and outpatient waiting because magnesium sulfate and IV labetalol are mandatory.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0878
  {
    "code": "op-c-s2-0878",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Eclampsia Acute Convulsion Management With Intravenous Magnesium Sulfate",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old primigravida at 37 weeks of gestation with no prenatal care presents to the labor unit complaining of epigastric pain and headache. While being placed on the triage monitor, she suddenly becomes unresponsive and develops generalized tonic-clonic convulsions. The seizure lasts 90 seconds, followed by a post-ictal state with stertorous respirations. Blood pressure is 176/116 mm Hg, heart rate is 118/min, and oxygen saturation is 94% on face mask. Fetal heart rate drops to 80/min with lost variability during the convulsion, but recovers to a baseline of 135/min within 3 minutes post-ictally. The cervix is 2 cm dilated and 50% effaced, vertex at -2 station. Which of the following is the most appropriate immediate medical intervention to prevent recurrent convulsions?",
    "choices": [
      [
        "Intravenous magnesium sulfate 4 to 6 g loading dose over 20 minutes",
        "Eclampsia is the onset of generalized tonic-clonic seizures or coma in a woman with preeclampsia that cannot be attributed to other neurologic causes. Acute management priorities are: (1) maintain airway patency, ensure maternal oxygenation, and turn patient into left lateral decubitus position to prevent aspiration and IVC compression, (2) administer intravenous magnesium sulfate (4-6 g IV bolus over 15-20 minutes, followed by 1-2 g/hour continuous infusion) as the definitive anticonvulsant of choice, superior to diazepam and phenytoin for arresting and preventing recurrent eclamptic seizures, and (3) administer IV antihypertensives (labetalol or hydralazine) for severe hypertension. Once maternal hemodynamic and neurological stabilization is achieved, definitive delivery of the fetus is indicated regardless of gestational age."
      ],
      [
        "Immediate emergency cesarean delivery while the patient is still actively seizing",
        "Emergent cesarean delivery during an active seizure or immediate post-ictal phase carries extreme maternal-fetal morbidity and mortality; maternal resuscitation and magnesium stabilization take priority."
      ],
      [
        "Intravenous lorazepam 4 mg bolus followed by fosphenytoin loading infusion",
        "Benzodiazepines and phenytoin are second-line agents that cause neonatal and maternal sedation; magnesium sulfate is the primary drug of choice for eclampsia."
      ],
      [
        "Immediate general anesthesia induction and hyperventilation to reduce cerebral edema",
        "General anesthesia during unresuscitated eclampsia risks severe hypertensive surge, intracranial hemorrhage, and difficult airway complications."
      ],
      [
        "Continuous intravenous infusion of sodium nitroprusside without anticonvulsant therapy",
        "Nitroprusside risks cyanide toxicity in the fetus and profound hypotension; furthermore, anticonvulsant seizure prophylaxis with magnesium is mandatory."
      ]
    ],
    "shortestValidSolution": "Pregnant 37 wk + generalized seizure + BP >160/110 = eclampsia -> IV magnesium sulfate 4-6 g bolus + maternal stabilization before delivery.",
    "necessaryInference": "Select magnesium sulfate as the definitive first-line anticonvulsant for eclampsia and stabilize mother prior to delivery.",
    "strongestDistractor": "Immediate emergency cesarean delivery while the patient is still actively seizing",
    "distractorExclusion": "Delivery is contraindicated during active seizure; maternal airway control, oxygenation, and magnesium sulfate stabilization must come first.",
    "citation": "Eclampsia Trial Collaborative Group. Which Anticonvulsant for Women With Eclampsia? Evidence From the Collaborative Eclampsia Trial. Lancet. 1995;345(8963):1455-1463. PMID: 7769899.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetric emergency item on acute eclampsia management with magnesium sulfate.",
      "distractorExclusionNotes": "Excluded immediate operative delivery during seizure because maternal stabilization with magnesium sulfate is the priority.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0879
  {
    "code": "op-c-s2-0879",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Placental Abruption Versus Previa Clinical Distinction and Triage Approach",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old woman, gravida 3 para 2, at 33 weeks of gestation presents to the emergency department with sudden-onset, severe, constant abdominal and back pain accompanied by dark vaginal bleeding for 2 hours. She has a history of pregestational hypertension and active cocaine use. On examination, she is diaphoretic and grimacing with pain. Blood pressure is 154/98 mm Hg, and heart rate is 112/min. Abdominal palpation reveals a hypertonic, firm, 'wooden' uterus that is exquisitely tender to touch and fails to relax between uterine contractions. External fetal monitoring shows frequent high-frequency, low-amplitude uterine contractions, a fetal heart rate baseline of 165/min with minimal variability, and repetitive late decelerations. Which of the following is the most likely diagnosis?",
    "choices": [
      [
        "Abruptio placentae (placental abruption)",
        "Placental abruption (premature separation of the normally implanted placenta from the uterine wall before delivery) classically presents in the third trimester with sudden, severe, continuous abdominal/back pain, dark vaginal bleeding (can be concealed in 20% of cases), uterine tenderness, and increased resting uterine tone (a hypertonic, rigid, 'wooden' uterus). Major risk factors include hypertension/preeclampsia, cocaine use, abdominal trauma, and prior abruption. Fetal monitoring frequently reveals fetal distress (tachycardia, lost variability, late decelerations) due to compromised uteroplacental perfusion. In contrast, placenta previa classically presents with completely PAINLESS, bright red vaginal bleeding and a soft, non-tender, relaxed uterus."
      ],
      [
        "Placenta previa",
        "Placenta previa typically presents with completely painless, bright red bleeding and a non-tender, soft, relaxed uterus, without hypertonicity."
      ],
      [
        "Uterine rupture",
        "Uterine rupture typically occurs during active trial of labor after cesarean delivery (TOLAC), causing sudden loss of fetal station, cessation of contractions, and palpable fetal parts outside the uterus."
      ],
      [
        "Vasa previa",
        "Vasa previa presents with painless fetal exsanguination (sinusoidal fetal heart tracing, rapid fetal bradycardia/death) immediately following artificial or spontaneous membrane rupture."
      ],
      [
        "Cervical insufficiency",
        "Cervical insufficiency presents in the second trimester with painless cervical dilation and bulging fetal membranes, not third-trimester painful bleeding with a wooden uterus."
      ]
    ],
    "shortestValidSolution": "Painful dark bleeding + wooden hypertonic uterus + late decelerations = placental abruption.",
    "necessaryInference": "Differentiate placental abruption (painful, hypertonic uterus) from placenta previa (painless, relaxed uterus).",
    "strongestDistractor": "Placenta previa",
    "distractorExclusion": "Placenta previa presents with painless bleeding and a relaxed uterus; constant pain with a hypertonic rigid uterus indicates abruption.",
    "citation": "Schmidt P, Skelly CL, Raines DA. Placental Abruption. StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2023. PMID: 29262100.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics item distinguishing placental abruption from placenta previa based on clinical signs.",
      "distractorExclusionNotes": "Excluded placenta previa and vasa previa because both present with painless bleeding without uterine hypertonicity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0880
  {
    "code": "op-c-s2-0880",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Placenta Previa Avoidance of Digital Examination and Scheduled Cesarean",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old woman, gravida 2 para 1, at 32 weeks of gestation presents to labor triage with sudden, painless, bright red vaginal bleeding that soaked two sanitary pads over 3 hours. She denies abdominal pain, contractions, or trauma. Vital signs are normal: blood pressure is 114/72 mm Hg, and heart rate is 76/min. Abdominal examination demonstrates a soft, non-tender, non-distended uterus with no palpable contractions. Fetal cardiotocography reveals a reassuring baseline heart rate of 142/min with moderate variability and two accelerations. Transabdominal ultrasound at 20 weeks had noted a low-lying placenta. Which of the following is strictly contraindicated in the initial physical examination of this patient?",
    "choices": [
      [
        "Digital vaginal examination of the cervix",
        "This patient presents with classic third-trimester painless bright red vaginal bleeding suspicious for placenta previa (implantation of the placenta over or within 2 cm of the internal cervical os). In any pregnant woman beyond 20 weeks of gestation presenting with vaginal bleeding, DIGITAL VAGINAL EXAMINATION IS STRICTLY CONTRAINDICATED until transvaginal ultrasonography has definitively ruled out placenta previa. Inserting an examining finger into the cervix can directly poke through the friable placental tissue or tear maternal-fetal vessels, triggering catastrophic, life-threatening maternal hemorrhage and fetal exsanguination within seconds. Evaluation is performed safely with a sterile speculum examination and transvaginal ultrasound."
      ],
      [
        "Sterile speculum examination to visualize vaginal vault and cervix",
        "Sterile speculum examination is safe and indicated to inspect the vaginal vault for cervical lesions, polyps, or active bleeding pooling without invading the internal os."
      ],
      [
        "Transvaginal ultrasonography using an endocavitary probe",
        "Transvaginal ultrasound is the gold standard for diagnosing placenta previa; the probe angle remains safely in the vaginal fornix and does not enter the cervix."
      ],
      [
        "Continuous external electronic fetal heart rate monitoring",
        "Continuous fetal monitoring is safe, non-invasive, and essential to evaluate fetal well-being during any episode of antepartum hemorrhage."
      ],
      [
        "Maternal blood typing, antibody screen, and Kleihauer-Betke testing",
        "Maternal blood typing and Kleihauer-Betke testing are essential to determine maternal-fetal hemorrhage and dose anti-D immunoglobulin in Rh-negative mothers."
      ]
    ],
    "shortestValidSolution": "3rd trimester painless bright red bleeding = placenta previa -> digital cervical examination is strictly contraindicated.",
    "necessaryInference": "Recognize placenta previa and enforce the absolute contraindication against digital vaginal examination.",
    "strongestDistractor": "Transvaginal ultrasonography using an endocavitary probe",
    "distractorExclusion": "Transvaginal ultrasound is safe and the gold standard for previa; digital examination into the cervix causes catastrophic hemorrhage.",
    "citation": "Silver RM. Abnormal Placentation: Placenta Previa, Vasa Previa, and Placenta Accreta Spectrum. Obstet Gynecol. 2015;126(3):654-668. PMID: 26244843.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics emergency item on the absolute contraindication of digital exam in suspected placenta previa.",
      "distractorExclusionNotes": "Excluded speculum and transvaginal ultrasound because only digital cervical exploration is strictly forbidden.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0881
  {
    "code": "op-c-s2-0881",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Postpartum Hemorrhage Uterine Atony Management and Uterotonic Selection",
    "provisionalDifficulty": 4,
    "stem": "A 29-year-old woman, gravida 4 para 3, with well-controlled chronic hypertension delivers a 4,300-g male infant via uncomplicated spontaneous vaginal delivery. Fifteen minutes following placental delivery, heavy vaginal bleeding is noted, soaking multiple bed pads. On physical examination, blood pressure is 108/66 mm Hg, and heart rate is 114/min. Abdominal palpation reveals the uterine fundus to be soft, enlarged, boggy, and palpated 4 cm superior to the umbilicus. Continuous bimanual uterine massage is initiated and high-dose intravenous oxytocin infusion is administered, but significant uterine atony and brisk dark red bleeding persist. Which of the following is the most appropriate next pharmacological agent for this patient?",
    "choices": [
      [
        "Intramuscular carboprost tromethamine (PGF2-alpha)",
        "Postpartum hemorrhage (PPH, blood loss >= 1,000 mL or blood loss accompanied by signs/symptoms of hypovolemia) is most commonly caused by uterine atony (the '4 Ts': Tone, Trauma, Tissue, Thrombin). First-line management is vigorous bimanual uterine massage and intravenous oxytocin. When atony persists, second-line uterotonics are indicated. However, drug selection depends on maternal co-morbidities: Methylergonovine (an ergot alkaloid causing potent vasoconstriction) is STRICTLY CONTRAINDICATED in patients with hypertension or preeclampsia due to the risk of severe hypertensive crisis and stroke. Carboprost tromethamine (prostaglandin F2-alpha) is the uterotonic of choice in hypertensive patients (though contraindicated in asthma due to bronchoconstriction). Misoprostol (PGE1) can also be administered sublingually or rectally."
      ],
      [
        "Intramuscular methylergonovine maleate",
        "Methylergonovine causes intense systemic vasoconstriction and is strictly contraindicated in patients with chronic hypertension, gestational hypertension, or preeclampsia."
      ],
      [
        "Intravenous infusion of terbutaline sulfate",
        "Terbutaline is a beta-2 agonist tocolytic that relaxes uterine smooth muscle, which would worsen uterine atony and accelerate hemorrhage."
      ],
      [
        "Subcutaneous magnesium sulfate bolus infusion",
        "Magnesium sulfate acts as a smooth muscle relaxant and tocolytic, worsening uterine atony and exacerbating bleeding."
      ],
      [
        "Intravenous recombinant factor VIIa as sole initial step",
        "Recombinant factor VIIa is an expensive rescue therapy for refractory coagulopathy, not a second-line uterotonic for mechanical uterine atony."
      ]
    ],
    "shortestValidSolution": "Boggy uterus + ongoing bleeding + chronic HTN = atony -> carboprost tromethamine (avoid methylergonovine in HTN).",
    "necessaryInference": "Select carboprost tromethamine over methylergonovine for refractory uterine atony in a patient with chronic hypertension.",
    "strongestDistractor": "Intramuscular methylergonovine maleate",
    "distractorExclusion": "Methylergonovine is strictly contraindicated in hypertensive patients due to risk of stroke and hypertensive encephalopathy.",
    "citation": "ACOG Practice Bulletin No. 183: Postpartum Hemorrhage. Obstet Gynecol. 2017;130(4):e168-e186. PMID: 28937571.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics emergency item on uterotonic contraindications (methylergonovine in hypertension vs carboprost in asthma).",
      "distractorExclusionNotes": "Excluded methylergonovine due to chronic hypertension; carboprost is safe and effective in non-asthmatic hypertensive patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0882
  {
    "code": "op-c-s2-0882",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Shoulder Dystocia Emergency Maneuvers and Avoidance of Fundal Pressure",
    "provisionalDifficulty": 4,
    "stem": "A 33-year-old primigravida with gestational diabetes at 39 weeks of gestation is in the second stage of labor. Following a prolonged second stage of 2.5 hours, the fetal head delivers, but immediately retracts tightly against the maternal perineum ('turtle sign'). Gentle downward axial traction on the fetal head fails to effect delivery of the anterior shoulder, which remains impacted behind the maternal pubic symphysis. The mother is instructed to stop pushing immediately, and additional obstetric, pediatric, and anesthesia personnel are urgently called into the delivery room. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Hyperflexion of the maternal thighs against the abdomen and suprapubic pressure",
        "Shoulder dystocia occurs when the anterior fetal shoulder becomes impacted behind the maternal symphysis pubis after delivery of the head. Clinical hallmark is the 'turtle sign'. It is an obstetric emergency with a risk of fetal brachial plexus injury (Erb-Duchenne palsy), clavicular fracture, and asphyxia. Management protocol begins with: (1) stop maternal pushing, call for help, (2) McRoberts maneuver (hyperflexion and abduction of the maternal hips against her abdomen, which rotates the pelvis cephalad and flattens the lumbar lordosis), combined with (3) suprapubic pressure (applied obliquely by an assistant to push the anterior shoulder under the symphysis). FUNDAL PRESSURE IS STRICTLY CONTRAINDICATED as it impacts the shoulder harder, ruptures the uterus, and severely avulses the brachial plexus."
      ],
      [
        "Application of firm, continuous maternal fundal pressure during contractions",
        "Fundal pressure is strictly contraindicated in shoulder dystocia because it wedges the shoulder tighter against the pubic bone and dramatically increases uterine rupture and brachial plexus avulsion."
      ],
      [
        "Vigorous lateral traction on the fetal neck to dislodge the shoulder",
        "Forceful traction or lateral angulation of the fetal neck tears the cervical nerve roots (C5-C6), causing permanent Erb palsy."
      ],
      [
        "Immediate performance of maternal symphysiotomy under local anesthesia",
        "Symphysiotomy is an extreme destructive measure reserved for catastrophic settings where all maneuvers including Zavanelli have failed."
      ],
      [
        "Immediate administration of intravenous oxytocin bolus to augment contractions",
        "Augmenting uterine contractions increases pressure against the impacted shoulder and increases brachial plexus trauma without relieving the bony impaction."
      ]
    ],
    "shortestValidSolution": "Turtle sign + shoulder impacted behind symphysis = shoulder dystocia -> McRoberts maneuver + suprapubic pressure (NO fundal pressure).",
    "necessaryInference": "Apply McRoberts maneuver and suprapubic pressure while recognizing that fundal pressure is strictly contraindicated in shoulder dystocia.",
    "strongestDistractor": "Application of firm, continuous maternal fundal pressure during contractions",
    "distractorExclusion": "Fundal pressure causes severe brachial plexus tears and uterine rupture, and is strictly prohibited in shoulder dystocia.",
    "citation": "ACOG Practice Bulletin No. 178: Shoulder Dystocia. Obstet Gynecol. 2017;129(5):e123-e134. PMID: 28422934.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics emergency item testing initial maneuvers and contraindications in shoulder dystocia.",
      "distractorExclusionNotes": "Excluded fundal pressure and neck traction because McRoberts maneuver and suprapubic pressure are standard first-line.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0883
  {
    "code": "op-c-s2-0883",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Umbilical Cord Prolapse Manual Fetal Elevation and Emergent Cesarean",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old multiparous woman at 38 weeks of gestation presents in active labor. Cervical examination reveals 5 cm dilation, 80% effacement, with vertex presentation at -3 station. Ten minutes later, spontaneous rupture of amniotic membranes occurs with a gush of clear fluid. Immediately following membrane rupture, the external fetal heart rate tracing demonstrates a sudden, abrupt drop from 140/min to 65/min, persistent for over 2 minutes. On emergent digital examination, the examiner palpates a smooth, loop of pulsating tissue protruding through the cervical os ahead of the presenting fetal head. Which of the following is the most appropriate immediate management strategy?",
    "choices": [
      [
        "Manually elevate the fetal head off the cord and transfer for emergent cesarean delivery",
        "Overt umbilical cord prolapse occurs when the umbilical cord slips ahead of or alongside the fetal presenting part through the open cervix after membrane rupture. Major risk factors include high fetal station (-3 station), unengaged presenting part, abnormal lie (transverse/breech), and polyhydramnios. The fetal presenting part directly compresses the cord against the bony pelvis, occluding umbilical vessels and producing sudden severe fetal bradycardia and acute asphyxiation. The immediate life-saving management is to insert a gloved hand into the vagina to manually elevate and push the fetal presenting part up off the umbilical cord, maintaining this elevation continuously while rushing the patient to the operating room for emergent cesarean delivery. Patient positioning in steep Trendelenburg or knee-chest also reduces cord compression."
      ],
      [
        "Manually reduce the protruding umbilical cord loop back into the uterine cavity",
        "Funic reduction (pushing the cord back inside) induces severe vasospasm of the umbilical vessels and wastes precious minutes, worsening fetal asphyxia."
      ],
      [
        "Administer high-dose intravenous oxytocin to expedite rapid vaginal delivery",
        "Augmenting labor compresses the cord harder against the pelvic brim with each contraction, causing fatal fetal asphyxia when station is high."
      ],
      [
        "Wrap the exposed umbilical cord in dry sterile gauze and await spontaneous delivery",
        "Dry gauze causes cooling, drying, and vasoconstriction of umbilical vessels; manual elevation of the presenting part and emergent cesarean are required."
      ],
      [
        "Perform immediate bedside vacuum-assisted vaginal delivery in the labor bed",
        "Operative vaginal delivery (vacuum or forceps) requires full cervical dilation (10 cm) and low fetal station (+2 or lower); attempting vacuum at 5 cm and -3 station is contraindicated."
      ]
    ],
    "shortestValidSolution": "Membrane rupture + sudden bradycardia + pulsating cord in os = cord prolapse -> manual elevation of fetal head + emergent cesarean.",
    "necessaryInference": "Recognize umbilical cord prolapse and immediately relieve compression by manually elevating the fetal head while arranging emergent cesarean.",
    "strongestDistractor": "Manually reduce the protruding umbilical cord loop back into the uterine cavity",
    "distractorExclusion": "Attempting to push the cord back causes umbilical vasospasm; elevating the presenting part off the cord is the required maneuver.",
    "citation": "Holbrook BD, Phelan ST. Umbilical Cord Prolapse. Obstet Gynecol Clin North Am. 2013;40(1):1-14. PMID: 23466132.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetric emergency item assessing immediate clinical management of overt umbilical cord prolapse.",
      "distractorExclusionNotes": "Excluded cord replacement and vacuum delivery because manual fetal elevation and emergent cesarean are required.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0884
  {
    "code": "op-c-s2-0884",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Intra-Amniotic Infection Chorioamnionitis Criteria and Antibiotics",
    "provisionalDifficulty": 4,
    "stem": "A 23-year-old primigravida at 39 weeks of gestation has been in labor for 16 hours following spontaneous rupture of membranes. Over the past 2 hours, her labor has failed to progress despite adequate oxytocin augmentation. Maternal temperature is 39.2 C (102.6 F), heart rate is 122/min, and blood pressure is 112/68 mm Hg. Cardiotocography reveals a baseline fetal heart rate of 172/min with absent decelerations. On physical examination, the abdomen is exquisitely tender to palpation over the uterine fundus. Speculum examination reveals copious, cloudy, purulent, foul-smelling amniotic fluid draining through the cervical os. Maternal WBC count is 21,800/mm3 (86% neutrophils). Which of the following is the most appropriate management plan?",
    "choices": [
      [
        "Intravenous ampicillin plus gentamicin and continuation of labor toward delivery",
        "Intra-amniotic infection (chorioamnionitis or triple I) is an infection of the amniotic fluid, placenta, and membranes, typically polymicrobial ascending from vaginal flora. Diagnostic criteria require maternal fever (>= 39.0 C, or 38.0-38.9 C twice) PLUS at least one clinical feature: fetal tachycardia (>160/min for >= 10 min), maternal leukocytosis (>15,000/mm3), or purulent/foul-smelling amniotic fluid. Management mandates immediate initiation of broad-spectrum parenteral antibiotics: intravenous ampicillin (covers Group B Strep and Listeria) plus gentamicin (covers Gram-negative enterics). If cesarean delivery is required, clindamycin or metronidazole is added for anaerobic coverage. Chorioamnionitis is an indication for delivery, but NOT an automatic indication for immediate cesarean; vaginal delivery should be pursued unless obstetric indications intervene."
      ],
      [
        "Immediate emergency cesarean delivery under general anesthesia without antibiotics",
        "Withholding antibiotics risks overwhelming maternal-fetal sepsis; moreover, chorioamnionitis alone does not mandate cesarean delivery."
      ],
      [
        "Oral amoxicillin outpatient therapy with discharge home to await active labor",
        "Chorioamnionitis is a severe intra-amniotic infection with high risks of neonatal sepsis and maternal bacteremia requiring immediate inpatient IV therapy."
      ],
      [
        "Administration of tocolytic indomethacin and intramuscular betamethasone",
        "Tocolysis is strictly contraindicated in intra-amniotic infection because stopping labor prolongs exposure to an infected uterine environment."
      ],
      [
        "Intravenous vancomycin monotherapy with continuation of pregnancy for 48 hours",
        "Vancomycin monotherapy lacks Gram-negative coverage essential for chorioamnionitis (E. coli), and delaying delivery in overt infection causes fetal death."
      ]
    ],
    "shortestValidSolution": "Maternal fever + fetal tachycardia + foul amniotic fluid + uterine tenderness = chorioamnionitis -> IV ampicillin + gentamicin + expedite delivery.",
    "necessaryInference": "Diagnose chorioamnionitis and initiate IV ampicillin plus gentamicin, expediting delivery without automatically requiring cesarean.",
    "strongestDistractor": "Immediate emergency cesarean delivery under general anesthesia without antibiotics",
    "distractorExclusion": "Cesarean is not mandatory solely for chorioamnionitis, and performing surgery without broad-spectrum antibiotics causes severe pelvic wound sepsis.",
    "citation": "ACOG Committee Opinion No. 712: Intrapartum Management of Intraamniotic Infection. Obstet Gynecol. 2017;130(2):e95-e101. PMID: 28742677.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics/infectious disease item on diagnosis and antibiotic management of chorioamnionitis.",
      "distractorExclusionNotes": "Excluded immediate cesarean and tocolytics because IV ampicillin/gentamicin and labor progression are indicated.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0885
  {
    "code": "op-c-s2-0885",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Preterm Premature Rupture of Membranes Latency Antibiotics and Steroids",
    "provisionalDifficulty": 4,
    "stem": "A 27-year-old primigravida at 30 weeks of gestation presents to labor triage reporting a sudden 'pop' followed by continuous leakage of clear fluid from her vagina that began 4 hours ago. She denies contractions, vaginal bleeding, or fever. Vital signs: blood pressure 116/70 mm Hg, heart rate 78/min, and temperature 36.8 C (98.2 F). Sterile speculum examination demonstrates clear fluid pooling in the posterior vaginal fornix. Nitrazine test of the fluid turns blue (pH > 6.5), and microscopic evaluation reveals classic ferning arborization upon air-drying. Fetal heart rate is reassuring at 144/min with moderate variability. The cervix is visualised as closed with no cord prolapse. Fetal fibronectin is positive. Which of the following is the most appropriate management regimen for this patient?",
    "choices": [
      [
        "Latency antibiotics, intramuscular betamethasone, and intravenous magnesium sulfate",
        "Preterm premature rupture of membranes (PPROM, rupture prior to 37 weeks and before onset of labor) at 24 to 34 weeks of gestation without signs of infection (chorioamnionitis) or fetal distress is managed expectantly to prolong latency and promote fetal organ maturation. Standard triple medical management consists of: (1) Latency antibiotics (7-day course of IV ampicillin and erythromycin/azithromycin followed by oral amoxicillin and erythromycin) to reduce risk of chorioamnionitis, neonatal sepsis, and prolong gestation, (2) Antenatal corticosteroids (intramuscular betamethasone, 2 doses 24 hours apart) to accelerate fetal pulmonary maturity, reduce RDS, intraventricular hemorrhage, and necrotizing enterocolitis, and (3) Intravenous magnesium sulfate for fetal neuroprotection (reduces risk of cerebral palsy if delivery occurs before 32 weeks)."
      ],
      [
        "Immediate induction of labor with high-dose intravenous oxytocin infusion",
        "Immediate delivery at 30 weeks without chorioamnionitis or fetal compromise needlessly exposes the fetus to severe prematurity complications; expectant management is indicated until 34 weeks."
      ],
      [
        "Tocolytic therapy with oral nifedipine for two weeks to suppress all labor",
        "Prolonged therapeutic tocolysis in PPROM is not recommended because it does not improve neonatal outcomes and increases maternal chorioamnionitis risk."
      ],
      [
        "Immediate emergency cesarean delivery due to lost amniotic fluid volume",
        "Oligohydramnios from membrane rupture is an expected finding in PPROM and is not an indication for immediate cesarean delivery."
      ],
      [
        "Discharge home on strict bed rest and oral cephalexin prophylaxis",
        "PPROM carries significant risk of abruptio placentae, cord prolapse, and chorioamnionitis, requiring continuous inpatient observation until delivery."
      ]
    ],
    "shortestValidSolution": "30 wk gestation + pooling + nitrazine blue + ferning = PPROM -> latency antibiotics + betamethasone + magnesium sulfate.",
    "necessaryInference": "Apply the evidence-based medical bundle for PPROM between 24 and 34 weeks: latency antibiotics, steroids, and magnesium neuroprotection.",
    "strongestDistractor": "Immediate induction of labor with high-dose intravenous oxytocin infusion",
    "distractorExclusion": "Expectant management until 34 weeks is indicated in stable PPROM to avoid severe prematurity complications.",
    "citation": "ACOG Practice Bulletin No. 217: Prelabor Rupture of Membranes. Obstet Gynecol. 2020;135(3):e80-e97. PMID: 32080050.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics item on management of uncomplicated PPROM between 24 and 34 weeks.",
      "distractorExclusionNotes": "Excluded immediate induction and discharge home because inpatient expectant management with antibiotics, steroids, and magnesium is standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0886
  {
    "code": "op-c-s2-0886",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "RhD Alloimmunization Routine Anti-D Immunoglobulin Prophylaxis Timing",
    "provisionalDifficulty": 4,
    "stem": "A 25-year-old primigravida at 28 weeks of gestation presents for her routine prenatal appointment. She has had an uncomplicated pregnancy. Her medical history is unremarkable. Initial laboratory evaluation at 8 weeks of gestation revealed blood type A, Rh-negative, with an indirect Coombs antibody screen negative for anti-D antibodies. The biological father of the pregnancy is known to be blood type O, Rh-positive. Today, repeat indirect Coombs antibody testing is confirmed negative. Vital signs are normal, and fundal height is 28 cm. Fetal heart rate is 148/min. Which of the following is the most appropriate management to prevent hemolytic disease of the fetus and newborn?",
    "choices": [
      [
        "Administer 300 micrograms of intramuscular anti-D immune globulin now",
        "Rh(D) alloimmunization occurs when an Rh(D)-negative mother is exposed to Rh(D)-positive fetal red blood cells, producing maternal IgG anti-D antibodies that cross the placenta in subsequent pregnancies, causing fetal hemolytic anemia, erythroblastosis fetalis, and hydrops. To prevent sensitization, all unsensitized Rh-negative women (negative antibody screen) must receive 300 micrograms of anti-D immune globulin (RhoGAM): (1) routinely at 28 weeks of gestation, and (2) within 72 hours of delivering an Rh-positive infant (with a Kleihauer-Betke test to calculate dose if massive fetomaternal hemorrhage is suspected). Anti-D immune globulin must also be administered after any potential fetomaternal hemorrhage event (chorionic villus sampling, amniocentesis, ectopic pregnancy, miscarriage, abdominal trauma, or external cephalic version)."
      ],
      [
        "Withhold anti-D immune globulin unless transabdominal amniocentesis is performed",
        "Routine prophylaxis at 28 weeks is mandatory for all unsensitized Rh-negative mothers regardless of invasive procedures."
      ],
      [
        "Administer anti-D immune globulin only within 72 hours after delivery",
        "Waiting until after delivery leaves the mother unprotected against third-trimester silent fetomaternal hemorrhage, which sensitizes ~2% of women before labor."
      ],
      [
        "Perform percutaneous umbilical blood sampling to genotype the fetal Rh status",
        "PUBS is an invasive procedure with high fetal loss rates (~1-2%) that is completely unjustified for routine Rh management."
      ],
      [
        "Initiate daily oral high-dose dexamethasone to suppress maternal antibody formation",
        "Corticosteroids cannot prevent Rh alloimmunization and cause maternal and fetal endocrine complications."
      ]
    ],
    "shortestValidSolution": "Rh-negative mother + unsensitized at 28 wk + Rh-positive father = give anti-D immune globulin (RhoGAM) at 28 weeks.",
    "necessaryInference": "Apply the guideline for routine 28-week anti-D immune globulin administration in unsensitized Rh-negative pregnant women.",
    "strongestDistractor": "Administer anti-D immune globulin only within 72 hours after delivery",
    "distractorExclusion": "Administering RhoGAM only postpartum allows antenatal sensitization; routine 28-week administration is mandatory.",
    "citation": "ACOG Practice Bulletin No. 181: Prevention of Rh D Alloimmunization. Obstet Gynecol. 2017;130(2):e57-e70. PMID: 28742673.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics preventive medicine item on Rh(D) alloimmunization prophylaxis timing.",
      "distractorExclusionNotes": "Excluded postpartum-only administration because routine 28-week dosing prevents antenatal sensitization.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0887
  {
    "code": "op-c-s2-0887",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Complete Hydatidiform Mole Suction Curettage and Serial Beta-hCG Monitoring",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old woman presents at 10 weeks of gestation by last menstrual period with severe nausea, intractable vomiting, and painless dark brown vaginal discharge ('prune juice' appearance) for 1 week. Vital signs reveal blood pressure 156/94 mm Hg, heart rate 104/min, and temperature 37.0 C. Physical examination reveals an enlarged uterine fundus palpated at the level of the umbilicus (consistent with a 20-week gestation). Bilateral adnexal enlargement is noted with 6-cm multilocular cystic ovaries palpated. Quantitative serum beta-hCG is 240,000 mIU/mL. Pelvic ultrasonography demonstrates a central heterogeneous intrauterine mass with multiple diffuse microcystic radiolucencies ('snowstorm' or 'bunch of grapes' appearance) without an identifiable embryo, fetus, or gestational sac, and bilateral multilocular theca lutein cysts. Which of the following is the most appropriate initial management step?",
    "choices": [
      [
        "Suction dilation and curettage followed by serial weekly quantitative serum beta-hCG",
        "This patient exhibits classic features of a complete hydatidiform mole (gestational trophoblastic disease, 46,XX karyotype from duplication of a single sperm fertilizing an enucleated ovum): markedly elevated beta-hCG (>100,000 mIU/mL), hyperemesis gravidarum, early-onset preeclampsia (<20 weeks), uterine size greater than dates, bilateral theca lutein cysts (from high hCG cross-reacting with LH receptors), and ultrasound demonstrating a 'snowstorm' cystic cavity devoid of fetal tissue. Initial treatment is prompt suction dilation and curettage (suction D&C) to evacuate trophoblastic tissue and prevent uterine perforation or pulmonary trophoblastic embolization. Following evacuation, patients require serial weekly quantitative beta-hCG monitoring until normal for 3 consecutive weeks, then monthly for 6 months with reliable contraception, to detect persistent gestational trophoblastic neoplasia (choriocarcinoma)."
      ],
      [
        "Immediate systemic combination chemotherapy with methotrexate and actinomycin D",
        "Chemotherapy is indicated for persistent or malignant gestational trophoblastic neoplasia (invasive mole or choriocarcinoma), not primary molar evacuation."
      ],
      [
        "Bilateral surgical cystectomy for the symptomatic theca lutein ovarian cysts",
        "Theca lutein cysts are physiological responses to massively elevated beta-hCG; they regress spontaneously once molar tissue is evacuated and require no surgical resection."
      ],
      [
        "Medical evacuation with oral mifepristone and high-dose vaginal misoprostol",
        "Medical evacuation with uterotonics is contraindicated in complete molar pregnancy because it increases the risk of severe hemorrhage and pulmonary trophoblastic embolization."
      ],
      [
        "Expectant management with serial pelvic ultrasound examinations every two weeks",
        "Expectant management is negligent; untreated complete hydatidiform mole leads to life-threatening hemorrhage, uterine rupture, and malignant transformation."
      ]
    ],
    "shortestValidSolution": "Beta-hCG 240k + uterus > dates + snowstorm on US = complete mole -> suction D&C + serial weekly beta-hCG monitoring.",
    "necessaryInference": "Diagnose complete hydatidiform mole and select suction curettage with post-evacuation serial beta-hCG tracking.",
    "strongestDistractor": "Medical evacuation with oral mifepristone and high-dose vaginal misoprostol",
    "distractorExclusion": "Medical evacuation with prostaglandins is contraindicated due to risk of embolization and hemorrhage; suction D&C is mandatory.",
    "citation": "Soper JT. Gestational Trophoblastic Disease: Current Evaluation and Management. Obstet Gynecol. 2021;137(2):355-370. PMID: 33481519.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK gynecology/obstetrics item on clinical features and surgical management of complete hydatidiform mole.",
      "distractorExclusionNotes": "Excluded medical evacuation and ovarian surgery because suction D&C is required and theca lutein cysts regress spontaneously.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0888
  {
    "code": "op-c-s2-0888",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Ovarian Torsion in Pregnancy Diagnostic Ultrasound and Emergent Laparoscopy",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old woman at 14 weeks of gestation presents to the emergency department with sudden-onset, severe, sharp left lower quadrant abdominal and pelvic pain of 4 hours' duration. The pain is constant with intermittent waves of sharp intensification, accompanied by three episodes of nausea and non-bilious vomiting. On physical examination, she is pale and curled in a fetal position. Blood pressure is 128/78 mm Hg, heart rate is 108/min, and temperature is 37.4 C. Abdominal examination demonstrates exquisite localized tenderness and involuntary muscular guarding in the left lower quadrant and left adnexa. Transvaginal and transabdominal Doppler ultrasonography reveals an enlarged, edematous left ovary measuring 7.5 cm in diameter with peripherally displaced follicles, an underlying 5-cm benign-appearing simple cyst, and markedly diminished, absent venous and arterial Doppler flow signals. Fetal heart tones are normal at 150/min. Which of the following is the most appropriate definitive management?",
    "choices": [
      [
        "Immediate diagnostic and therapeutic laparoscopy with ovarian detorsion",
        "Ovarian torsion (adnexal torsion) is the partial or complete twisting of the ovary on its ligamentous axis (infundibulopelvic and utero-ovarian ligaments), occluding venous outflow followed by arterial inflow, causing ischemia, congestion, and hemorrhagic necrosis. Risk is elevated in pregnancy (especially 10-17 weeks as the uterus enlarges into the abdomen) and with ovarian masses >= 5 cm. Hallmark presentation is acute unilateral lower abdominal/pelvic pain with nausea/vomiting, and Doppler ultrasound demonstrating an enlarged edematous ovary with diminished or absent flow. Ovarian torsion is a surgical emergency. The standard of care is immediate laparoscopy (safe in all trimesters) with detorsion and ovarian preservation, regardless of whether the ovary appears dusky, as viability is often restored once untwisted."
      ],
      [
        "Intravenous broad-spectrum antibiotic therapy and observation for 24 hours",
        "Antibiotics treat pelvic inflammatory disease, not mechanical vascular twisting; delaying surgery leads to irreversible ischemic ovarian gangrene."
      ],
      [
        "Bedside ultrasound-guided transvaginal percutaneous cyst aspiration",
        "Aspirating the cyst does not untwist the twisted vascular pedicle and risks cyst rupture, chemical peritonitis, and infection."
      ],
      [
        "Immediate exploratory laparotomy with unilateral salpingo-oophorectomy",
        "Immediate oophorectomy is outdated; the current evidence-based standard is detorsion and ovarian preservation unless frank gangrene or necrosis has caused tissue breakdown."
      ],
      [
        "Intramuscular methotrexate therapy to induce spontaneous cyst involution",
        "Methotrexate is teratogenic, contraindicated in ongoing intrauterine pregnancy, and does not treat mechanical torsion."
      ]
    ],
    "shortestValidSolution": "Pregnant 14 wk + sudden pelvic pain + enlarged 7.5 cm ovary + absent Doppler flow = ovarian torsion -> immediate laparoscopy with detorsion.",
    "necessaryInference": "Recognize ovarian torsion as a time-critical surgical emergency in pregnancy and perform emergent laparoscopy with detorsion.",
    "strongestDistractor": "Immediate exploratory laparotomy with unilateral salpingo-oophorectomy",
    "distractorExclusion": "Oophorectomy is no longer routine; detorsion with ovarian preservation is the standard first-line surgical approach.",
    "citation": "Huang C, Hong MK, Ding DC. A Review of Ovary Torsion. Ci Ji Yi Xue Za Zhi. 2017;29(3):143-147. PMID: 29089830.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics/gynecology emergency item on ovarian torsion during pregnancy and laparoscopic detorsion.",
      "distractorExclusionNotes": "Excluded oophorectomy and conservative medical observation because prompt detorsion preserves ovarian function.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
]
