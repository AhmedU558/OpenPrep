import { CandidateSpec } from './types';

export const step2Batch36: CandidateSpec[] = [
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
    "citation": "Varney B et al. Opioid Analgesic Initiation During Pregnancy and the Risk of Adverse Maternal and Neonatal Outcomes: A Target Trial Emulation. medRxiv. PMID: 42996034.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics item distinguishing placental abruption from placenta previa based on clinical signs.",
      "distractorExclusionNotes": "Excluded placenta previa and vasa previa because both present with painless bleeding without uterine hypertonicity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
    "citation": "Silver RM et al. Abnormal Placentation: Placenta Previa, Vasa Previa, and Placenta Accreta. Obstet Gynecol. PMID: 26244528.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics emergency item on the absolute contraindication of digital exam in suspected placenta previa.",
      "distractorExclusionNotes": "Excluded speculum and transvaginal ultrasound because only digital cervical exploration is strictly forbidden.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
    "citation": "Heilman EA et al. The Hook & Roll Maneuver for Resolution of Shoulder Dystocia. Obstet Gynecol. PMID: 41538800.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics emergency item testing initial maneuvers and contraindications in shoulder dystocia.",
      "distractorExclusionNotes": "Excluded fundal pressure and neck traction because McRoberts maneuver and suprapubic pressure are standard first-line.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
    "citation": "Shang JH et al. Imaging features, clinical characteristics and neonatal outcomes of pregnancy luteoma: A case series and literature review. Acta Obstet Gynecol Scand. PMID: 37710408.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK obstetrics/gynecology emergency item on ovarian torsion during pregnancy and laparoscopic detorsion.",
      "distractorExclusionNotes": "Excluded oophorectomy and conservative medical observation because prompt detorsion preserves ovarian function.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
    "citation": "Wijkstra J et al. Pharmacological treatment for psychotic depression. Cochrane Database Syst Rev. PMID: 26225902.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry item testing first-line management of major depressive disorder with psychotic features.",
      "distractorExclusionNotes": "Excluded antidepressant monotherapy and antipsychotic monotherapy because combination therapy is required for psychotic depression.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
    "citation": "Vigod SN et al. Canadian Network for Mood and Anxiety Treatments 2024 Clinical Practice Guideline for the Management of Perinatal Mood, Anxiety, and Related Disorders: Guide de pratique 2024 du Canadian Network for Mood and Anxiety Treatments pour le traitement des troubles de l'humeur, des troubles anxieux et des troubles connexes périnatals. Can J Psychiatry. PMID: 39936923.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry item testing first-line treatment of acute mania and avoidance of antidepressant monotherapy.",
      "distractorExclusionNotes": "Excluded SSRIs, bupropion, and stimulants because all exacerbate mania and destabilize mood.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
    "citation": "Ware MR et al. Neuroleptic Malignant Syndrome: Diagnosis and Management. Prim Care Companion CNS Disord. PMID: 29325237.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry emergency item on distinguishing NMS from serotonin syndrome and immediate management.",
      "distractorExclusionNotes": "Excluded cyproheptadine because lead-pipe rigidity and extreme CK elevation indicate NMS, requiring drug cessation and cooling.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
    "citation": "Barr PB et al. Multivariate genome-wide association study of post-traumatic stress disorder, alcohol use, and alcohol use disorders. Mol Psychiatry. PMID: 42957827.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry item testing first-line psychotherapeutic and pharmacologic management of PTSD.",
      "distractorExclusionNotes": "Excluded benzodiazepines because they worsen PTSD recovery and perpetuate avoidance behavior.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
    "citation": "Brodsky BS et al. The Zero Suicide Model: Applying Evidence-Based Suicide Prevention Practices to Clinical Care. Front Psychiatry. PMID: 29527178.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK psychiatry ethics and emergency management item on imminent suicide risk and involuntary admission.",
      "distractorExclusionNotes": "Excluded no-suicide contracts, autonomy deference, and family discharge because imminent suicide requires involuntary holding.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
