import json

items_s2_b19_part2 = [
  {
    "code": "op-c-s2-0463",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Nervous System",
    "topic": "Epidural Hematoma and Emergent Surgical Indications",
    "subtopic": "Middle Meningeal Artery, Lucid Interval, Biconvex Hematoma, Craniotomy",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old college hockey player is struck on the right side of the head by a puck. He experiences a brief 30-second loss of consciousness, but rapidly awakens, answers questions appropriately, and insists he feels fine (lucid interval). Two hours later while sitting on the team bench, he develops a severe throbbing headache, becomes increasingly somnolent, and vomits repeatedly. Paramedics are summoned. On arrival in the emergency department, his Glasgow Coma Scale (GCS) score is 9 (E2V2M5). Physical examination demonstrates a dilated, sluggishly reactive right pupil (5 mm) and a briskly reactive left pupil (3 mm). Motor examination reveals left-sided hemiparesis with pronator drift and a positive left Babinski sign. Vital signs reveal blood pressure of 172/94 mm Hg, heart rate of 52/min, and respiratory rate of 12/min (Cushing triad). Emergent non-contrast head CT demonstrates a hyperdense, biconvex (lenticular) extra-axial collection along the right temporoparietal convexity that does not cross cranial suture lines. The hematoma volume is calculated at 42 cm3 with a 9-mm midline shift and compression of the right lateral ventricle.\n\nWhich of the following represents the most appropriate immediate definitive management for this patient?",
    "choices": [
      [
        "Emergent right-sided craniotomy and surgical evacuation of the hematoma with middle meningeal artery ligation",
        "Epidural Hematoma (EDH) typically results from blunt trauma to the pterion (the thinnest portion of the lateral skull), causing a fracture of the temporal bone that lacerates the MIDDLE MENINGEAL ARTERY (a branch of the maxillary artery) or its associated dural veins. (1) CLINICAL COURSE: Classic presentation features a brief loss of consciousness, followed by a temporary symptom-free 'lucid interval', culminating in rapid, catastrophic deterioration as arterial blood strips the tightly adherent dura from the inner skull table. Progressive mass effect produces ipsilateral uncal herniation, compressing the ipsilateral oculomotor nerve (CN III parasympathetic fibers, causing an uncal blown pupil) and the ipsilateral cerebral peduncle (causing contralateral hemiparesis). Cushing triad (hypertension, bradycardia, irregular respiration) signals life-threatening brainstem compression. (2) NEUROIMAGING: Biconvex (lentiform), hyperdense extra-axial collection limited by cranial suture lines where the dura is firmly anchored. (3) SURGICAL CRITERIA (BRAIN TRAUMA FOUNDATION GUIDELINES): Immediate surgical evacuation via craniotomy is an absolute surgical emergency for: (a) Hematoma volume > 30 cm3 regardless of GCS score, OR (b) GCS score < 9 with midline shift >= 5 mm or pupillary asymmetry. Withholding emergent craniotomy for conservative observation or medical therapies in this rapidly expanding 42-cm3 arterial hematoma leads to fatal brainstem herniation."
      ],
      [
        "Admit to the neurointensive care unit for continuous intracranial pressure monitoring and conservative serial head CT scans",
        "Conservative observation is strictly limited to small (< 30 cm3), asymptomatic epidural hematomas with < 5 mm midline shift and normal GCS; observing a 42-cm3 hematoma with pupillary dilation and Cushing triad is fatal."
      ],
      [
        "Administer intravenous mannitol 1 g/kg and hypertonic saline bolus as definitive standalone therapy without surgical intervention",
        "Osmotic diuretics (mannitol/hypertonic saline) are temporary bridging maneuvers to transiently reduce brain edema en route to the operating room; they cannot arrest arterial bleeding or evacuate a 42-cm3 clot."
      ],
      [
        "Perform bedside burr hole trephination and leave an external ventricular drain in the right lateral ventricle",
        "Burr hole trephination can easily miss a thick solid clotted epidural hematoma and fails to achieve hemostasis of the lacerated middle meningeal artery; formal craniotomy is required."
      ],
      [
        "Administer intravenous tranexamic acid and high-dose dexamethasone to promote clot resorption",
        "Corticosteroids are contraindicated in acute traumatic brain injury (CRASH trial proved increased mortality); medical therapies do not decompress mechanical arterial hematomas."
      ]
    ],
    "rationale": "Epidural hematoma is caused by laceration of the middle meningeal artery after temporal bone trauma, presenting with a lucid interval followed by rapid coma, ipsilateral mydriasis (CN III compression), and contralateral hemiparesis. Brain CT shows a biconvex extra-axial collection limited by sutures. The Brain Trauma Foundation mandates emergent craniotomy and clot evacuation for hematomas > 30 cm3, or when GCS < 9, midline shift >= 5 mm, or pupillary asymmetry is present. Medical osmotic therapy is only a bridge to the operating room.",
    "metadata": {
      "shortSolution": "Head trauma victim with lucid interval, right blown pupil, left hemiparesis, Cushing triad, and 42-mL biconvex hematoma requires emergent surgical craniotomy and evacuation.",
      "competingChoice": "Admit to the neurointensive care unit for continuous intracranial pressure monitoring and conservative serial head CT scans",
      "exclusionFinding": "EDH volume > 30 cm3, GCS < 9, midline shift 9 mm, and pupillary dilation are absolute indications for emergent surgical evacuation; observation is fatal.",
      "pedagogicalValue": "Recognizing the clinical features of epidural hematoma (middle meningeal artery, lucid interval) and knowing the surgical threshold (> 30 cm3, GCS < 9, or anisocoria).",
      "citations": [
        "Bullock MR, Chesnut R, Ghajar J, et al. Surgical management of acute epidural hematomas. Neurosurgery. 2006;58(3 Suppl):S7-S15. PMID: 16540746.",
        "Carney N, Totten AM, O'Reilly C, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2017;80(1):6-15. PMID: 27654000."
      ]
    },
    "critique": {
      "shortestValidSolution": "Lucid interval + blown pupil + 42 cm3 biconvex hematoma -> emergent craniotomy and evacuation.",
      "strongestCompetitor": "Admit to the neurointensive care unit for continuous intracranial pressure monitoring and conservative serial head CT scans",
      "exclusionFinding": "Volume > 30 cm3 and anisocoria mandate emergent surgery; conservative management leads to fatal herniation.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0464",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Nervous System",
    "topic": "Subdural Hematoma in Anticoagulated Elderly Patients",
    "subtopic": "Bridging Cortical Veins, Crescentic Shape, Anticoagulation Reversal, Surgical Decompression",
    "provisionalDifficulty": 4,
    "stem": "An 81-year-old man with non-valvular atrial fibrillation treated with warfarin (INR 2.8) is brought to the emergency department after his family noticed progressive confusion, somnolence, and unsteady gait over the past 5 days. Three weeks ago, he suffered a ground-level mechanical fall at home without reported loss of consciousness. On physical examination, the patient is obtunded, opening eyes only to loud voice and oriented only to person (GCS 12: E3V4M5). Neurological examination reveals mild right pronator drift, flattened right nasolabial fold, and hyperreflexia with an extensor plantar response on the right. Vital signs demonstrate blood pressure of 164/88 mm Hg and heart rate of 64/min. Emergent non-contrast head CT demonstrates a large, crescent-shaped, mixed-density (predominantly isodense-to-hypodense with dependent hyperdense areas) extra-axial fluid collection extending along the entire left cerebral convexity. The collection crosses cranial suture lines, measures 16 mm in maximal thickness, causes 10 mm of left-to-right midline shift, and compresses the left lateral ventricle.\n\nWhich of the following represents the most appropriate immediate sequence of interventions for this patient?",
    "choices": [
      [
        "Immediate intravenous administration of 4-factor prothrombin complex concentrate (4F-PCC) and intravenous vitamin K, followed by urgent surgical evacuation (burr hole craniostomy or craniotomy)",
        "Subdural Hematoma (SDH) in the elderly results from age-related cerebral cortical atrophy, which increases the distance between the brain surface and dural venous sinuses, placing mechanical traction on BRIDGING CORTICAL VEINS. Minor blunt trauma tears these fragile bridging veins, producing venous bleeding into the subdural space. (1) IMAGING: Crescentic (concave inward) collection that freely crosses cranial suture lines (dura is not anchored to sutures) but is limited by dural reflections (falx cerebri and tentorium cerebelli). Mixed density indicates chronic fluid with acute rebleeding ('acute-on-chronic' subdural hematoma). (2) MANAGEMENT SEQUENCE: (a) IMMEDIATE WARFARIN REVERSAL: Performing emergent neurosurgery with an elevated INR (2.8) leads to uncontrollable intraoperative hemorrhage. Immediate, rapid reversal with intravenous 4-factor Prothrombin Complex Concentrate (4F-PCC, 25-50 U/kg) normalizes the INR within 15 to 30 minutes, combined with intravenous vitamin K (10 mg) to sustain hepatic coagulation factor synthesis. Fresh frozen plasma is second-line and unacceptably slow. (b) URGENT SURGICAL EVACUATION: Brain Trauma Foundation guidelines mandate urgent surgical evacuation (burr hole craniostomy or craniotomy) for subdural hematomas with a thickness > 10 mm or midline shift > 5 mm, or whenever progressive neurological decline occurs."
      ],
      [
        "Proceed immediately to emergency craniotomy in the operating room while infusing fresh frozen plasma during the surgical procedure",
        "Attempting neurosurgery without pre-reversing warfarin using 4F-PCC causes massive, uncontrollable intraoperative hemorrhage; 4F-PCC normalizes INR in minutes and must precede skin incision."
      ],
      [
        "Administer oral vitamin K 10 mg and admit to the intensive care unit for serial neurological examinations over the next 48 hours",
        "Oral vitamin K requires 24 hours to synthesize clotting factors and fails to provide rapid reversal; deferring surgery for a 16-mm hematoma with 10-mm midline shift causes fatal uncal herniation."
      ],
      [
        "Administer intravenous recombinant factor VIIa (rFVIIa) monotherapy and observe without surgical decompression",
        "Recombinant factor VIIa carries high arterial thromboembolic risk and is inferior to 4F-PCC for warfarin reversal; furthermore, 10 mm of midline shift requires mechanical surgical evacuation."
      ],
      [
        "Perform emergent lumbar puncture to reduce elevated intracranial pressure and drain subdural blood",
        "Lumbar puncture in the presence of 10 mm of midline shift and asymmetric intracranial mass effect precipitates fatal transtentorial or tonsillar brain herniation."
      ]
    ],
    "rationale": "Subdural hematoma in the elderly results from tearing of bridging cortical veins, appearing crescent-shaped and crossing suture lines. Acute surgical evacuation (burr hole craniostomy or craniotomy) is indicated for thickness > 10 mm or midline shift > 5 mm. In an anticoagulated patient taking warfarin, rapid reversal with 4-factor prothrombin complex concentrate (4F-PCC) and IV vitamin K is mandatory before surgical intervention to prevent catastrophic intraoperative hemorrhage. Lumbar puncture is strictly contraindicated due to herniation risk.",
    "metadata": {
      "shortSolution": "Elderly patient on warfarin with crescentic subdural hematoma (thickness 16 mm, midline shift 10 mm) requires immediate reversal with 4F-PCC + IV vitamin K followed by urgent surgical evacuation.",
      "competingChoice": "Proceed immediately to emergency craniotomy in the operating room while infusing fresh frozen plasma during the surgical procedure",
      "exclusionFinding": "Operating with INR 2.8 causes fatal intraoperative hemorrhage; 4F-PCC achieves rapid INR normalization within 15-30 minutes and must precede neurosurgical incision.",
      "pedagogicalValue": "Recognizing the anatomy of subdural hematoma (bridging veins, crescentic) and the critical protocol of rapid anticoagulation reversal (4F-PCC) before surgical evacuation.",
      "citations": [
        "Bullock MR, Chesnut R, Ghajar J, et al. Surgical management of acute subdural hematomas. Neurosurgery. 2006;58(3 Suppl):S16-S24. PMID: 16540747.",
        "Frontera JA, Lewin JJ 3rd, Rabinstein AA, et al. Guideline for Reversal of Antithrombotics in Intracranial Hemorrhage. Neurocrit Care. 2016;24(1):6-46. PMID: 26698823."
      ]
    },
    "critique": {
      "shortestValidSolution": "Warfarin patient + SDH (16 mm, 10 mm shift) -> 4F-PCC + IV vitamin K for rapid reversal, then urgent surgical evacuation.",
      "strongestCompetitor": "Proceed immediately to emergency craniotomy in the operating room while infusing fresh frozen plasma during the surgical procedure",
      "exclusionFinding": "4F-PCC reverses INR within minutes and is mandatory before incision to prevent uncontrollable surgical hemorrhage.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0465",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Uncal Herniation and the Kernohan Notch Phenomenon",
    "subtopic": "Transtentorial Herniation, Oculomotor Nerve Compression, False Localizing Sign",
    "provisionalDifficulty": 5,
    "stem": "A 45-year-old woman is admitted to the neurocritical care unit after sustaining a severe traumatic brain injury in a motor vehicle collision. Admission CT scan revealed an acute left-sided subdural hematoma with 8 mm of midline shift. Six hours after admission, her neurological status deteriorates acutely. Her GCS score drops from 11 to 6. On physical examination, her left pupil is 6 mm, fixed, and completely unreactive to light, while the right pupil is 3 mm and briskly reactive. Neurological examination reveals left-sided spastic hemiparesis with hyperactive left knee and ankle jerks and an extensor plantar response (positive Babinski sign) on the left side, with preserved motor movement on the right side. Vital signs show blood pressure of 184/96 mm Hg, heart rate of 48/min, and irregular respirations.\n\nWhich of the following anatomical mechanisms best explains the paradoxical presence of left-sided (ipsilateral) hemiparesis in the setting of an expanding left-sided intracranial mass lesion?",
    "choices": [
      [
        "Compression of the contralateral (right) cerebral peduncle against the rigid tentorial edge (Kernohan notch phenomenon)",
        "Uncal (lateral transtentorial) herniation occurs when an expanding supratentorial mass (such as an acute left subdural hematoma) forces the medial temporal lobe (the uncus) downward and medially over the tentorium cerebelli into the posterior fossa. (1) CLASSIC PRESENTATION: (a) Compression of the ipsilateral (left) oculomotor nerve (CN III): The superficial, parasympathetic pupilloconstrictor fibers of CN III are compressed against the petroclinoid ligament, causing an ipsilateral dilated, 'blown', unreactive pupil. (b) Compression of the ipsilateral (left) cerebral peduncle (containing descending corticospinal motor tracts before their decussation in the caudal medulla): This classically produces CONTRALATERAL (right-sided) hemiparesis. (2) PARADOXICAL LOCALIZING SIGN (KERNOHAN NOTCH PHENOMENON): In severe or rapid herniation, the expanding left hemispheric mass pushes the entire midbrain across the tentorial incisura toward the opposite side. The CONTRALATERAL (right) cerebral peduncle is forced against the rigid, free edge of the CONTRALATERAL tentorium cerebelli (the Kernohan notch). Because the right corticospinal tract decussates in the medulla below, damage to the right cerebral peduncle results in IPSILATERAL (left-sided) hemiparesis—a classic 'false localizing sign'. Recognizing this phenomenon prevents catastrophic neurosurgical exploration of the incorrect cerebral hemisphere."
      ],
      [
        "Subfalcine herniation causing mechanical compression of the contralateral right anterior cerebral artery",
        "Subfalcine herniation forces the cingulate gyrus beneath the falx cerebri, compressing the anterior cerebral artery and producing contralateral lower-extremity motor weakness, not ipsilateral hemiparesis with an ipsilateral blown pupil."
      ],
      [
        "Direct ischemic necrosis of the ipsilateral left internal capsule due to anterior choroidal artery compression",
        "Infarction of the left internal capsule damages left descending corticospinal fibers before decussation, which produces contralateral (right-sided) hemiparesis, not ipsilateral hemiparesis."
      ],
      [
        "Downward cerebellar tonsillar herniation through the foramen magnum compressing the lower medullary pyramids",
        "Tonsillar herniation compresses the lower medulla and respiratory centers, causing sudden respiratory arrest and quadriparesis, not isolated ipsilateral hemiparesis with an isolated unilateral blown pupil."
      ],
      [
        "Central transtentorial herniation causing bilateral diencephalic compression and decorticate posturing",
        "Central herniation causes downward displacement of both cerebral hemispheres, presenting with initial small reactive pupils, Cheyne-Stokes breathing, and bilateral motor decorticate posturing."
      ]
    ],
    "rationale": "In uncal herniation from a left-sided mass, compression of the ipsilateral (left) CN III causes an ipsilateral blown pupil. While compression of the left cerebral peduncle causes contralateral (right) hemiparesis, severe lateral midbrain displacement can force the opposite (right) cerebral peduncle against the sharp contralateral tentorial margin (Kernohan notch). Injury to the right corticospinal fibers results in paradoxical ipsilateral (left) hemiparesis—the Kernohan notch phenomenon, a classic false localizing sign.",
    "metadata": {
      "shortSolution": "Expanding left hemispheric mass with left blown pupil and paradoxical left hemiparesis is caused by the Kernohan notch phenomenon: lateral displacement of the midbrain compressing the contralateral (right) cerebral peduncle against the tentorial edge.",
      "competingChoice": "Direct ischemic necrosis of the ipsilateral left internal capsule due to anterior choroidal artery compression",
      "exclusionFinding": "Left internal capsule injury causes right-sided (contralateral) hemiparesis; left-sided hemiparesis from a left mass requires compression of the right cerebral peduncle (Kernohan notch).",
      "pedagogicalValue": "Understanding the Kernohan notch phenomenon as an essential false localizing sign in neurocritical care (ipsilateral hemiparesis due to contralateral cerebral peduncle compression against the tentorium).",
      "citations": [
        "Kernohan JW, Woltman HW. Incisural notch; a method of producing ipsilateral paralysis in cases of brain tumor. Arch Neurol Psychiatry. 1929;22(5):981-987. DOI: 10.1001/archneurpsyc.1929.02220050117009.",
        "Plum F, Posner JB. The Diagnosis of Stupor and Coma. 4th ed. Oxford University Press; 2007:54-88. NLM ID: 101314995."
      ]
    },
    "critique": {
      "shortestValidSolution": "Left mass + left blown pupil + left hemiparesis -> Kernohan notch (right cerebral peduncle compressed against tentorial edge).",
      "strongestCompetitor": "Direct ischemic necrosis of the ipsilateral left internal capsule due to anterior choroidal artery compression",
      "exclusionFinding": "Left internal capsule damage produces right hemiparesis; left hemiparesis requires right peduncle compression.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0466",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Nervous System",
    "topic": "Cauda Equina Syndrome vs Conus Medullaris Syndrome",
    "subtopic": "Saddle Anesthesia, Overflow Incontinence, Emergent Decompression",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old construction worker presents to the emergency department with severe, sharp lower back pain that radiates down the posterior aspect of both legs to his heels, which began after lifting heavy lumber 18 hours ago. Over the past 6 hours, he has felt a 'deadness' in his groin and inner thighs and noticed difficulty initiating urination; when he does void, he only passes small trickles of urine. Physical examination reveals an uncomfortable man in severe pain. Neurological examination reveals marked bilateral flaccid weakness of foot dorsiflexion (strength 2/5 bilaterally) and plantar flexion (strength 3/5 bilaterally). Sensation to light touch and pinprick is completely absent over the perianal, perineal, and medial upper thigh regions (S2-S5 dermatomes; saddle anesthesia). Patellar reflexes are 1+ bilaterally, and Achilles reflexes are absent (0/4) bilaterally. Digital rectal examination demonstrates absent anal sphincter tone and absent bulbocavernosus reflex. Post-void bladder ultrasound scan reveals a retained urine volume of 650 mL.\n\nWhich of the following represents the most appropriate immediate diagnostic and therapeutic strategy for this patient?",
    "choices": [
      [
        "Perform emergent lumbosacral spine magnetic resonance imaging (MRI) followed by urgent surgical decompressive laminectomy within 24 to 48 hours",
        "Cauda Equina Syndrome (CES) is a surgical emergency caused by mechanical compression of the lumbosacral nerve roots (L2 to S5) forming the cauda equina within the spinal canal below the termination of the conus medullaris (which ends at L1-L2). Most commonly caused by a massive central disc herniation (typically at L4-L5 or L5-S1). (1) CLINICAL HALLMARKS: (a) Saddle anesthesia: Sensory loss over dermatomes S2-S5 (perineum, anus, buttocks, inner thighs); (b) Bowel and bladder dysfunction: Urinary retention with overflow incontinence (demonstrated by high post-void residual > 200-500 mL) and loss of anal sphincter tone; (c) Lower extremity motor weakness: Flaccid, asymmetric or bilateral lower motor neuron (LMN) weakness with hyporeflexia/areflexia (absent Achilles reflexes); and (d) Bilateral sciatica. (2) CONTRAST WITH CONUS MEDULLARIS SYNDROME: Conus medullaris syndrome involves the terminal spinal cord (at L1-L2 vertebral level) and exhibits mixed UMN/LMN signs, symmetric perianal sensory loss, early bowel/bladder dysfunction, preserved ankle reflexes, and hyperreflexia/Babinski sign. (3) TIMING OF SURGERY: Emergent non-contrast MRI of the lumbosacral spine is the imaging modality of choice. Surgical decompressive laminectomy within 24 to 48 hours of symptom onset is mandatory; delays beyond 48 hours dramatically increase the risk of permanent, irreversible bladder paralysis, fecal incontinence, and sexual impotence."
      ],
      [
        "Administer oral muscle relaxants and nonsteroidal anti-inflammatory drugs, scheduling outpatient physical therapy in 2 weeks",
        "Cauda equina syndrome is an absolute surgical emergency; conservative management causes irreversible lifelong urinary incontinence, fecal incontinence, and bilateral motor paralysis."
      ],
      [
        "Perform an emergent fluoroscopy-guided epidural corticosteroid injection to reduce nerve root inflammation",
        "Epidural steroid injection does not relieve massive mechanical canal occlusion from a herniated disc fragment and delays emergency surgical decompression."
      ],
      [
        "Obtain plain standing radiographs of the lumbosacral spine and discharge with an indwelling urinary catheter",
        "Plain radiographs cannot evaluate soft tissue disc herniations or neural canal compression; MRI is mandatory to visualize the cauda equina."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 30 mg/kg bolus followed by a 24-hour infusion without imaging",
        "High-dose systemic corticosteroids have no proven benefit in cauda equina compression and carry significant risks of gastric ulceration and wound infection without relieving the physical structural mass."
      ]
    ],
    "rationale": "Cauda equina syndrome results from massive compression of the lumbosacral nerve roots below L2, presenting with bilateral radiculopathy, flaccid lower extremity weakness, absent Achilles reflexes, saddle anesthesia (S2-S5), and urinary retention with overflow incontinence (> 500 mL post-void residual). Emergent lumbosacral MRI is mandatory to confirm the diagnosis, followed by urgent surgical decompression (laminectomy) within 24-48 hours to prevent irreversible bowel, bladder, and sexual dysfunction.",
    "metadata": {
      "shortSolution": "Patient with saddle anesthesia, bilateral lower extremity weakness, absent anal tone, and urinary retention (650 mL residual) has Cauda Equina Syndrome; requires emergent MRI and urgent surgical decompression within 24-48 hours.",
      "competingChoice": "Perform an emergent fluoroscopy-guided epidural corticosteroid injection to reduce nerve root inflammation",
      "exclusionFinding": "Steroid injections do not decompress mechanical disc extrusion and delay urgent surgical laminectomy, which must occur within 24-48 hours to prevent permanent incontinence.",
      "pedagogicalValue": "Differentiating cauda equina syndrome (pure LMN, saddle anesthesia, urinary retention) and knowing the urgency of MRI and surgical decompression within 24-48 hours.",
      "citations": [
        "Fraser S, Roberts L, Murphy E. Cauda equina syndrome: a literature review of its definition, aetiology, clinical presentation, diagnosis and surgical management. Emerg Med J. 2009;26(10):700-704. PMID: 19773489.",
        "Todd NV. Guidelines for cauda equina syndrome. Red flags and white flags. Systematic review and opinion. Spine (Phila Pa 1976). 2017;42(13):E790-E797. PMID: 27820718."
      ]
    },
    "critique": {
      "shortestValidSolution": "Saddle anesthesia + urinary retention (650 mL) + absent anal tone -> Cauda Equina Syndrome -> emergent MRI + urgent surgical decompression (< 24-48h).",
      "strongestCompetitor": "Perform an emergent fluoroscopy-guided epidural corticosteroid injection to reduce nerve root inflammation",
      "exclusionFinding": "Mechanical disc compression of cauda equina requires emergent surgical decompression; epidural steroids fail to decompress and cause permanent nerve deficits.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0467",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Acute Angle-Closure Glaucoma",
    "subtopic": "Pupillary Block, Intraocular Pressure, Multi-Agent Medical Regimen, Laser Iridotomy",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old woman of East Asian descent presents to the emergency department with severe, agonizing right eye pain and right-sided hemicranial headache that began 2 hours ago while watching a movie in a darkened cinema. She also reports blurred vision, seeing rainbow-colored halos surrounding streetlights, and persistent nausea with two episodes of emesis. On physical examination, she is in extreme distress, clutching her right orbit. Visual acuity in the right eye is 20/200 and in the left eye is 20/25. Examination of the right eye reveals intense conjunctival ciliary injection, a cloudy ('steamy') cornea, shallow anterior chamber depth, and a fixed, mid-dilated (5 mm) pupil that does not respond to light. The right globe feels rock-hard to gentle palpation through the closed eyelid. Applanation tonometry reveals an intraocular pressure (IOP) of 58 mm Hg in the right eye (normal 10 to 21 mm Hg) and 16 mm Hg in the left eye.\n\nWhich of the following represents the most appropriate immediate medical management sequence followed by definitive therapy for this patient?",
    "choices": [
      [
        "Immediate administration of topical timolol, apraclonidine, and pilocarpine combined with intravenous acetazolamide (or mannitol), followed by emergent bilateral laser peripheral iridotomy",
        "Acute Angle-Closure Glaucoma (AACG) is an ophthalmologic emergency occurring predominantly in predisposed individuals (hyperopia, shallow anterior chambers, East Asian or Inuit ancestry). Pupillary dilation (e.g., in a dark cinema or after sympathomimetic/anticholinergic drugs) causes the peripheral iris to contact the lens, blocking aqueous humor flow from the posterior chamber through the pupil (pupillary block). Pressure builds behind the iris, bowing it forward against the trabecular meshwork and abruptly occluding the iridocorneal filtration angle, causing intraocular pressure to surge (> 40 to 80 mm Hg). (1) CLINICAL PRESENTATION: Severe ocular pain, headache, halos around lights, nausea/vomiting, ciliary injection, cloudy/steamy cornea, and a fixed, mid-dilated pupil. (2) IMMEDIATE MULTI-AGENT MEDICAL THERAPY: Aimed at rapidly lowering IOP to protect the optic nerve: (a) TOPICAL TIMOLOL (beta-blocker) and APRACLONIDINE (alpha-2 agonist) to reduce aqueous humor synthesis; (b) TOPICAL PILOCARPINE (muscarinic cholinergic agonist) to induce miosis, pulling the peripheral iris away from the trabecular meshwork (administered once IOP drops < 40-50 mm Hg, as high IOP causes ischemic iris sphincter paralysis); (c) SYSTEMIC ACETAZOLAMIDE (intravenous carbonic anhydrase inhibitor) or IV MANNITOL (osmotic agent) for rapid vitreous dehydration. (3) DEFINITIVE SURGICAL THERAPY: Laser Peripheral Iridotomy (LPI) creates a full-thickness hole in the iris to equalize pressure between chambers. BILATERAL IRIDOTOMY IS MANDATORY because the contralateral eye has identical shallow anatomical angles and an 80% risk of acute closure."
      ],
      [
        "Immediate administration of topical atropine 1% and cyclopentolate drops to relax the ciliary muscle and relieve pain",
        "Topical atropine and anticholinergics cause pupillary dilation (mydriasis), which further bunches the peripheral iris into the filtration angle, completely occluding drainage and causing irreversible blindness."
      ],
      [
        "Immediate performance of right eye anterior chamber paracentesis with an 18-gauge needle at the bedside without medications",
        "Needle paracentesis through an acutely congested anterior chamber risks lens puncture, intraocular hemorrhage, and endophthalmitis; multi-agent pharmacotherapy followed by laser iridotomy is standard."
      ],
      [
        "Administer intravenous methylprednisolone 1,000 mg daily for optic neuritis and consult neurology",
        "Optic neuritis presents with central scotoma and painful eye movements without steamy cornea, mid-dilated fixed pupil, or intraocular pressure > 50 mm Hg; corticosteroids provide zero benefit in angle closure."
      ],
      [
        "Unilateral right eye surgical trabeculectomy with no intervention or follow-up directed at the unaffected left eye",
        "Laser peripheral iridotomy is the definitive procedure, not trabeculectomy; furthermore, failing to treat the contralateral eye leaves it at an 80% risk of subsequent acute angle closure."
      ]
    ],
    "rationale": "Acute angle-closure glaucoma is an ophthalmic emergency caused by pupillary block occluding the trabecular meshwork in patients with shallow anterior chambers (e.g., triggered by darkness/mydriasis). Signs: steamy cornea, fixed mid-dilated pupil, rock-hard globe, IOP > 40-50 mm Hg. Medical management combines topical aqueous suppressants (timolol, apraclonidine), miosis (pilocarpine), and systemic agents (IV acetazolamide or mannitol). Definitive treatment is bilateral laser peripheral iridotomy (LPI); the unaffected eye must be treated prophylactically because of identical predisposing anatomy.",
    "metadata": {
      "shortSolution": "Acute eye pain, halos, steamy cornea, fixed mid-dilated pupil, and IOP 58 mm Hg is acute angle-closure glaucoma; treated with topical suppressants + IV acetazolamide followed by bilateral laser peripheral iridotomy.",
      "competingChoice": "Immediate administration of topical atropine 1% and cyclopentolate drops to relax the ciliary muscle and relieve pain",
      "exclusionFinding": "Atropine causes mydriasis, which worsens angle closure and leads to permanent blindness; miosis and aqueous suppression are required.",
      "pedagogicalValue": "Mastering the presentation, multi-agent medical regimen, and necessity of bilateral laser peripheral iridotomy in acute angle-closure glaucoma.",
      "citations": [
        "Weinreb RN, Aung T, Medeiros FA. The pathophysiology and treatment of glaucoma: a review. JAMA. 2014;311(18):1901-1911. PMID: 24825645.",
        "Prum BE Jr, Herndon LW Jr, Moroi SE, et al. Primary Angle Closure Preferred Practice Pattern(R) Guidelines. Ophthalmology. 2016;123(1):P1-P40. PMID: 26581557."
      ]
    },
    "critique": {
      "shortestValidSolution": "Halos + steamy cornea + mid-dilated pupil + IOP 58 mm Hg -> medical IOP lowering (timolol, apraclonidine, acetazolamide, pilocarpine) + bilateral laser iridotomy.",
      "strongestCompetitor": "Immediate administration of topical atropine 1% and cyclopentolate drops to relax the ciliary muscle and relieve pain",
      "exclusionFinding": "Atropine causes mydriasis, further bunching the iris and worsening pupillary block; it is contraindicated.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0468",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Central Retinal Artery Occlusion (CRAO)",
    "subtopic": "Painless Monocular Vision Loss, Cherry-Red Spot, Emergent Interventions, Stroke Workup",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man presents to the emergency department 90 minutes after experiencing sudden, catastrophic, painless loss of vision in his left eye while eating breakfast. He describes that his vision went completely black within seconds, 'like a window shade was pulled all the way down,' and has not improved. He has a history of coronary artery disease, hypertension, hyperlipidemia, and a 40 pack-year smoking history. Physical examination reveals an alert man in no distress. Visual acuity in the left eye is limited to bare perception of hand motions; visual acuity in the right eye is 20/20. Pupillary examination reveals a marked left relative afferent pupillary defect (Marcus Gunn pupil). Slit-lamp biomicroscopy of the anterior segment is normal with normal intraocular pressure (14 mm Hg bilaterally). Dilated funduscopic examination of the left eye reveals diffuse retinal whitening and pallor with attenuation of retinal arterioles, segmentation of the blood column within retinal venules ('boxcarring'), and a prominent, circular 'cherry-red spot' visible in the central macula. Examination of the right eye fundus is normal.\n\nWhich of the following represents the most appropriate immediate management strategy for this patient?",
    "choices": [
      [
        "Perform immediate bedside ocular massage, administer topical aqueous humor suppressants (e.g., timolol), and initiate an emergent acute ischemic stroke diagnostic evaluation",
        "Central Retinal Artery Occlusion (CRAO) is the ocular analogue of an acute ischemic stroke, representing an end-organ vascular infarction most commonly caused by thromboembolism originating from an ipsilateral carotid artery atherosclerotic plaque (calcified or cholesterol emboli [Hollenhorst plaques]) or cardiogenic embolism (atrial fibrillation, valvular disease). (1) CLINICAL AND FUNDUSCOPIC FINDINGS: Sudden, profound, painless monocular visual loss with an afferent pupillary defect. Funduscopy demonstrates diffuse retinal clouding and pallor due to ischemic intracellular edema of the ganglion cell layer. The fovea centralis appears as a vivid 'CHERRY-RED SPOT' because the fovea is extremely thin and lacks ganglion cells, allowing the underlying richly vascular, red choroid (perfused by ciliary arteries) to show through. Retinal arteriole boxcarring reflects arrested blood flow. (2) IMMEDIATE OCULAR MANEUVERS: Retinal neural tissue tolerates ischemia for only 90 to 240 minutes before permanent necrosis occurs. Immediate maneuvers aim to dislodge the embolus into more distal peripheral branches and lower intraocular pressure: digital ocular massage (repeated cycles of firm pressure for 10-15 seconds followed by sudden release), topical IOP suppressants (timolol, apraclonidine), or anterior chamber paracentesis. (3) STROKE EQUIVALENT: CRAO carries a high immediate risk of concurrent or imminent cerebral stroke. Guidelines mandate immediate stroke evaluation, including brain MRI with diffusion-weighted imaging, carotid duplex ultrasound, echocardiography, and continuous cardiac telemetry."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 1,000 mg daily for presumed giant cell arteritis with ischemic optic neuropathy",
        "Giant cell arteritis typically causes arteritic anterior ischemic optic neuropathy (AION) featuring a pale, swollen optic disc with headache, jaw claudication, and elevated ESR/CRP; CRAO presents with diffuse retinal pallor and a macular cherry-red spot."
      ],
      [
        "Perform emergent vitrectomy with intravitreal injection of vascular endothelial growth factor (VEGF) inhibitors",
        "Anti-VEGF therapy is indicated for central retinal vein occlusion (CRVO) with macular edema or diabetic retinopathy; it provides zero benefit for acute arterial occlusion."
      ],
      [
        "Instill topical pilocarpine drops and perform emergent bilateral laser peripheral iridotomy",
        "Pilocarpine and laser iridotomy treat acute angle-closure glaucoma (elevated IOP, painful eye, steamy cornea); IOP is normal (14 mm Hg) in CRAO."
      ],
      [
        "Reassure the patient that retinal perfusion will spontaneously normalize within 24 hours and schedule outpatient follow-up",
        "Retinal ischemia causes irreversible photoreceptor and ganglion cell death within 2 to 4 hours; CRAO is an emergency carrying catastrophic permanent blindness and high stroke risk."
      ]
    ],
    "rationale": "Central Retinal Artery Occlusion (CRAO) is an ocular ischemic stroke caused by thromboembolism to the central retinal artery. Presentation: acute, painless monocular vision loss, Marcus Gunn pupil, diffuse retinal pallor with boxcarring, and a macular 'cherry-red spot' (thin fovea showing through to underlying choroidal perfusion). Immediate attempts to dislodge emboli include ocular massage and topical pressure-lowering agents. Because CRAO shares the etiology of cerebral stroke, emergent stroke evaluation (carotid duplex, echocardiogram, telemetry, brain MRI) is mandatory.",
    "metadata": {
      "shortSolution": "Sudden painless vision loss with retinal pallor and cherry-red spot is Central Retinal Artery Occlusion; managed with immediate ocular massage/IOP reduction and urgent stroke workup.",
      "competingChoice": "Administer high-dose intravenous methylprednisolone 1,000 mg daily for presumed giant cell arteritis with ischemic optic neuropathy",
      "exclusionFinding": "Arteritic AION causes a pale swollen optic disc with high ESR/jaw claudication; CRAO presents with a cherry-red spot and diffuse retinal pallor.",
      "pedagogicalValue": "Recognizing the funduscopic findings of CRAO (cherry-red spot, retinal pallor) and treating CRAO as an acute ischemic stroke equivalent requiring urgent vascular evaluation.",
      "citations": [
        "Biousse V, Nahab F, Newman NJ. Management of Central Retinal Artery Occlusion: A Scientific Statement From the American Heart Association. Stroke. 2021;52(6):e282-e294. PMID: 33761761.",
        "Hayreh SS, Zimmerman MB. Central retinal artery occlusion: visual prognosis. Am J Ophthalmol. 2005;140(3):376-391. PMID: 16138997."
      ]
    },
    "critique": {
      "shortestValidSolution": "Painless sudden vision loss + cherry-red spot + retinal pallor -> CRAO managed with ocular massage/IOP reduction + stroke evaluation.",
      "strongestCompetitor": "Administer high-dose intravenous methylprednisolone 1,000 mg daily for presumed giant cell arteritis with ischemic optic neuropathy",
      "exclusionFinding": "AION presents with pale swollen optic disc without cherry-red spot; cherry-red spot with retinal boxcarring is diagnostic of CRAO.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0469",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Giant Cell Arteritis with Visual Complications",
    "subtopic": "Ischemic Optic Neuropathy, Glucocorticoid Initiation Before Biopsy, Blindness Prevention",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old woman presents to the emergency department with a 3-week history of severe, throbbing right temporal headache, pain in her jaw muscles while chewing solid food that forces her to stop eating (jaw claudication), and aching stiffness in her shoulders and hips that is worst in the morning. This morning, she experienced two 5-minute episodes of blackened vision in her right eye (amaurosis fugax) that spontaneously resolved, but right eye vision remains blurred. Physical examination demonstrates an uncomfortable woman with marked tenderness, induration, and absent pulsations along the right superficial temporal artery. Visual acuity in the right eye is 20/80 and in the left eye is 20/20. Funduscopic examination of the right eye reveals a pale, swollen optic disc with blurred margins and scattered splinter hemorrhages (arteritic anterior ischemic optic neuropathy [A-AION]). Laboratory evaluation reveals:\n- Erythrocyte sedimentation rate (ESR): 108 mm/hr (normal <= 30 mm/hr)\n- Serum C-reactive protein (CRP): 42 mg/L (normal < 5 mg/L)\n- Platelet count: 480,000/mm3\n\nWhich of the following represents the most appropriate immediate medical management for this patient?",
    "choices": [
      [
        "Immediate administration of high-dose intravenous pulse methylprednisolone (500 to 1,000 mg daily for 3 days) prior to obtaining a temporal artery biopsy",
        "Giant Cell (Temporal) Arteritis (GCA) is a systemic granulomatous panarteritis of medium and large vessels, primarily affecting the extracranial branches of the carotid artery in patients > 50 years of age. (1) CLINICAL FEATURES: New-onset localized headache, scalp tenderness, jaw claudication (the highest positive likelihood ratio for GCA), polymyalgia rheumatica symptoms, marked ESR (> 50-100 mm/hr) and CRP elevation, and thrombocytosis. (2) VISUAL COMPLICATIONS: Occlusion of the posterior ciliary arteries leads to Arteritic Anterior Ischemic Optic Neuropathy (A-AION), manifesting as amaurosis fugax, sudden visual acuity loss, and a pale, edematous optic disc. Without immediate treatment, visual loss becomes IRREVERSIBLE, and involvement of the contralateral eye can occur within hours to days in up to 50% of untreated patients. (3) IMMEDIATE MANAGEMENT RULE: When visual symptoms or visual loss are present, IMMEDIATE HIGH-DOSE INTRAVENOUS PULSE METHYLPREDNISOLONE (500-1,000 mg/day for 3 days, followed by high-dose oral prednisone 1 mg/kg/day) MUST BE INITIATED IMMEDIATELY. (For patients without visual symptoms, oral prednisone 1 mg/kg/day is adequate). TREATMENT MUST NEVER BE DELAYED FOR TEMPORAL ARTERY BIOPSY. The histological features of granulomatous inflammation and giant cells persist on temporal artery biopsy for up to 2 to 4 weeks after initiating corticosteroid therapy."
      ],
      [
        "Withhold all corticosteroids until a unilateral temporal artery biopsy is performed and histological confirmation of giant cells is verified",
        "Delaying corticosteroids to obtain a temporal artery biopsy is a catastrophic error that results in permanent, irreversible bilateral blindness within 24 to 48 hours."
      ],
      [
        "Initiate oral methotrexate 15 mg weekly as first-line monotherapy to avoid steroid-induced hyperglycemia and osteoporosis",
        "Methotrexate has a slow onset of action (requiring 8 to 12 weeks) and is completely ineffective for acute inflammatory arterial ischemia; high-dose corticosteroids are mandatory."
      ],
      [
        "Administer intravenous alteplase 0.9 mg/kg for presumed acute thrombotic occlusion of the posterior ciliary arteries",
        "GCA is a chronic granulomatous autoimmune vasculitis, not a simple thromboembolic event; thrombolytics do not treat vasculitis and cause fatal systemic hemorrhages."
      ],
      [
        "Perform emergent right-sided superficial temporal artery endarterectomy",
        "GCA involves segmental, diffuse transmural granulomatous destruction; surgical revascularization has no role and is technically impossible in small inflamed branches."
      ]
    ],
    "rationale": "Giant cell arteritis (GCA) in patients > 50 presents with headache, jaw claudication, scalp tenderness, polymyalgia rheumatica, and elevated inflammatory markers (ESR > 50-100 mm/hr, high CRP). Occlusion of the posterior ciliary arteries causes arteritic anterior ischemic optic neuropathy (A-AION). Visual loss is an absolute ophthalmologic emergency. High-dose intravenous pulse methylprednisolone (500-1,000 mg daily for 3 days) must be administered immediately without waiting for temporal artery biopsy, which remains histologically diagnostic for 2-4 weeks post-steroid initiation.",
    "metadata": {
      "shortSolution": "Elderly female with jaw claudication, temporal tenderness, ESR 108, and acute visual loss (A-AION) requires immediate high-dose IV methylprednisolone before biopsy to prevent bilateral blindness.",
      "competingChoice": "Withhold all corticosteroids until a unilateral temporal artery biopsy is performed and histological confirmation of giant cells is verified",
      "exclusionFinding": "Biopsy remains positive for weeks on steroids, while withholding steroids risks irreversible bilateral blindness within hours; immediate steroids are mandatory.",
      "pedagogicalValue": "Recognizing that visual symptoms in giant cell arteritis mandate immediate high-dose IV corticosteroids before temporal artery biopsy.",
      "citations": [
        "Weyand CM, Goronzy JJ. Clinical practice. Giant-cell arteritis and polymyalgia rheumatica. N Engl J Med. 2014;371(1):50-57. PMID: 24988557.",
        "Ponte C, Grayson PC, Robson JC, et al. 2022 American College of Rheumatology/EULAR classification criteria for giant cell arteritis. Ann Rheum Dis. 2022;81(12):1647-1653. PMID: 36351704."
      ]
    },
    "critique": {
      "shortestValidSolution": "GCA + visual symptoms/A-AION -> immediate IV pulse methylprednisolone before temporal artery biopsy.",
      "strongestCompetitor": "Withhold all corticosteroids until a unilateral temporal artery biopsy is performed and histological confirmation of giant cells is verified",
      "exclusionFinding": "Delaying steroids causes permanent blindness; histology remains positive for 2-4 weeks after steroid initiation.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0470",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Neuroleptic Malignant Syndrome (NMS) vs Serotonin Syndrome",
    "subtopic": "Dopamine Receptor Antagonism, Lead-Pipe Rigidity, Dantrolene, Bromocriptine",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old man with schizophrenia is brought to the emergency department by his family due to acute confusion, high fever, and extreme bodily stiffness over the past 24 hours. Four days ago, his outpatient psychiatrist increased his oral haloperidol dose from 5 mg to 15 mg daily and added intramuscular haloperidol decanoate for worsening persecutory delusions. On physical examination, the patient is obtunded, diaphoretic, and mute. Vital signs reveal blood pressure of 178/104 mm Hg, heart rate of 128/min, respiratory rate of 26/min, and core body temperature of 40.1 C (104.2 F). Physical examination reveals diffuse, severe 'lead-pipe' muscle rigidity throughout all four limbs, neck, and trunk. Deep tendon reflexes are 1+ bilaterally with down-going plantars; there is no ocular or extremity clonus. The skin is flushed and heavily soaked with perspiration. Laboratory evaluation reveals:\n- Serum creatine kinase (CK): 48,000 U/L (markedly elevated; normal < 200 U/L)\n- White blood cell count: 22,000/mm3 with 82% neutrophils\n- Serum creatinine: 2.4 mg/dL (baseline 0.9 mg/dL)\n- Serum potassium: 5.6 mEq/L\n\nWhich of the following represents the most appropriate immediate pharmacotherapeutic strategy for this patient?",
    "choices": [
      [
        "Immediately discontinue haloperidol, initiate aggressive external cooling and intravenous crystalloid hydration, and administer intravenous dantrolene and oral bromocriptine",
        "Neuroleptic Malignant Syndrome (NMS) is a life-threatening idiosyncratic reaction triggered by potent dopamine D2 receptor antagonism (most commonly first-generation high-potency antipsychotics like haloperidol, fluphenazine, or abrupt withdrawal of dopamine agonists in Parkinson disease). (1) PATHOPHYSIOLOGY: Blockade of dopamine D2 receptors in the hypothalamus causes thermoregulatory set-point disruption (hyperthermia), and blockade in the striatum causes intense, unremitting muscle contracture ('lead-pipe' rigidity). (2) CLINICAL TETRAD: (a) Hyperthermia (temp > 38-40 C); (b) Extreme 'lead-pipe' muscle rigidity; (c) Autonomic instability (severe labile hypertension, tachycardia, tachypnea, profuse diaphoresis); and (d) Encephalopathy/altered mental status. (3) LABORATORY FINDINGS: Severe rhabdomyolysis with massive creatine kinase (CK) elevation (typically > 10,000 to 100,000 U/L), leukocytosis (15,000-30,000/mm3), and acute kidney injury from myoglobinuria. (4) DIFFERENTIATION FROM SEROTONIN SYNDROME: NMS is characterized by severe 'lead-pipe' rigidity and hyporeflexia, with slow onset over days. Serotonin syndrome is characterized by neuromuscular HYPERACTIVITY: hyperreflexia, spontaneous or inducible clonus, and tremor, with hyper-acute onset within hours of serotonergic exposure. (5) MANAGEMENT: Immediate cessation of antipsychotics, aggressive active cooling, and massive IV hydration. Specific pharmacotherapy: DANTROLENE (a skeletal muscle ryanodine receptor antagonist that inhibits calcium release from the sarcoplasmic reticulum, treating rigidity and hyperthermia) and BROMOCRIPTINE or AMANTADINE (dopamine receptor agonists that overcome hypothalamic/striatal dopamine blockade)."
      ],
      [
        "Administer intravenous cyproheptadine 12 mg via nasogastric tube and maintain low-dose haloperidol to prevent acute psychotic relapse",
        "Cyproheptadine is a 5-HT2A serotonin antagonist used specifically for serotonin syndrome; it has zero efficacy in NMS, and continuing haloperidol will result in fatal rhabdomyolytic cardiac arrest."
      ],
      [
        "Administer high-dose intravenous acetaminophen 1,000 mg every 6 hours and apply standard ice packs without muscle-directed agents",
        "Hyperthermia in NMS is generated peripherally by unremitting skeletal muscle contracture and central hypothalamic dopamine blockade, not hypothalamic prostaglandin synthesis; antipyretics like acetaminophen are ineffective."
      ],
      [
        "Administer intravenous succinylcholine bolus to induce complete skeletal muscle relaxation",
        "Succinylcholine triggers massive, lethal hyperkalemic cardiac arrest in patients with active rhabdomyolysis and denervation/muscle injury; it is strictly contraindicated."
      ],
      [
        "Perform emergent hemodialysis to clear haloperidol decanoate from the plasma circulation",
        "Haloperidol has a massive volume of distribution and high lipophilicity; hemodialysis does not remove haloperidol from tissues."
      ]
    ],
    "rationale": "Neuroleptic Malignant Syndrome (NMS) is caused by dopamine D2 receptor blockade (haloperidol). Tetrad: hyperthermia (> 40 C), 'lead-pipe' rigidity, autonomic instability, and altered sensorium, with massive CK elevation and leukocytosis. It is distinguished from serotonin syndrome by severe rigidity and hyporeflexia (vs clonus and hyperreflexia). Management: discontinue antipsychotic, aggressive cooling/IV hydration, and administer dantrolene (ryanodine antagonist) and bromocriptine (dopamine agonist). Antipyretics are ineffective because heat is generated by muscle contracture.",
    "metadata": {
      "shortSolution": "Haloperidol escalation with hyperthermia (40.1 C), lead-pipe rigidity, autonomic instability, and CK 48,000 U/L is NMS; stop haloperidol, cool, hydrate, and give dantrolene/bromocriptine.",
      "competingChoice": "Administer intravenous cyproheptadine 12 mg via nasogastric tube and maintain low-dose haloperidol to prevent acute psychotic relapse",
      "exclusionFinding": "Cyproheptadine treats serotonin syndrome (clonus/hyperreflexia); NMS (lead-pipe rigidity) requires dantrolene and bromocriptine, and the antipsychotic must be stopped immediately.",
      "pedagogicalValue": "Differentiating NMS (lead-pipe rigidity, hyporeflexia, days onset, dantrolene/bromocriptine) from serotonin syndrome (clonus, hyperreflexia, hours onset, cyproheptadine).",
      "citations": [
        "Strawn JR, Keck PE Jr, Caroff SN. Neuroleptic malignant syndrome. Am J Psychiatry. 2007;164(6):870-876. PMID: 17541044.",
        "Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005;352(11):1112-1120. PMID: 15784664."
      ]
    },
    "critique": {
      "shortestValidSolution": "Haloperidol + 40.1 C + lead-pipe rigidity + CK 48,000 -> NMS treated with drug cessation, cooling, dantrolene, and bromocriptine.",
      "strongestCompetitor": "Administer intravenous cyproheptadine 12 mg via nasogastric tube and maintain low-dose haloperidol to prevent acute psychotic relapse",
      "exclusionFinding": "Cyproheptadine is for serotonin syndrome; NMS features rigidity without clonus and requires dantrolene/bromocriptine.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0471",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Serotonin Syndrome and the Hunter Toxicity Criteria",
    "subtopic": "Neuromuscular Hyperactivity, Inducible Clonus, Benzodiazepines, Cyproheptadine",
    "provisionalDifficulty": 5,
    "stem": "A 23-year-old woman with major depressive disorder managed with sertraline (100 mg daily) presents to the emergency department 6 hours after ingesting two doses of oral tramadol prescribed by an urgent care physician for an acute ankle sprain. She is accompanied by her roommate, who notes that the patient became progressively agitated, sweaty, and tremulous over the past 4 hours. Physical examination reveals an extremely restless, anxious, and diaphoretic woman with dilated pupils (mydriasis) bilaterally. Vital signs show blood pressure of 168/96 mm Hg, heart rate of 134/min, respiratory rate of 24/min, and core body temperature of 38.8 C (101.8 F). Bowel sounds are hyperactive. Neurological examination reveals prominent, rhythmic spontaneous beating movements of both ankles and wrists (spontaneous clonus), inducible ocular clonus with continuous horizontal oscillations, and 4+ hyperreflexia at the patellar and Achilles tendons bilaterally with bilateral extensor plantar responses (positive Babinski signs). Marked tremor is present in both upper extremities; muscle tone is increased in the lower extremities but lacks 'lead-pipe' resistance.\n\nWhich of the following represents the most appropriate immediate medical management for this patient?",
    "choices": [
      [
        "Immediate discontinuation of all serotonergic agents, administration of intravenous lorazepam for neuromuscular agitation, and administration of oral or nasogastric cyproheptadine",
        "Serotonin Syndrome (Toxicity) is a potentially life-threatening toxidrome resulting from excessive intrasynaptic 5-HT receptor stimulation (predominantly 5-HT2A and 5-HT1A receptors) across the central and peripheral nervous systems, most commonly triggered by combining an SSRI (sertraline) with another serotonergic drug (e.g., tramadol [a weak mu-opioid agonist and serotonin-norepinephrine reuptake inhibitor], linezolid, MAOIs, triptans, or dextromethorphan). (1) HUNTER TOXICITY CRITERIA: In the presence of a serotonergic agent, serotonin toxicity is diagnosed by the presence of ANY of the following: (a) Spontaneous clonus; (b) Inducible clonus PLUS agitation or diaphoresis; (c) Ocular clonus PLUS agitation or diaphoresis; (d) Tremor PLUS hyperreflexia; or (e) Hypertonia and temperature > 38 C PLUS ocular or inducible clonus. (2) CLINICAL HALLMARK: NEUROMUSCULAR EXCITABILITY (spontaneous/inducible clonus, ocular clonus, 4+ hyperreflexia, tremor, hyperactive bowel sounds). In contrast to NMS, serotonin syndrome has hyper-acute onset (hours vs days) and features brisk clonus/hyperreflexia rather than lead-pipe rigidity. (3) MANAGEMENT: (a) Immediate cessation of all serotonergic drugs; (b) Intravenous BENZODIAZEPINES (lorazepam 2-4 mg IV) are the first-line therapy to blunt autonomic hyperactivity, suppress muscular agitation, and lower body temperature; (c) CYPROHEPTADINE (an oral/nasogastric 5-HT2A and 5-HT1A receptor antagonist) is administered as specific antidote therapy for moderate-to-severe serotonin syndrome; (d) Severe hyperthermia (> 41.1 C) mandates immediate neuromuscular paralysis with vecuronium and endotracheal intubation (succinylcholine is avoided due to rhabdomyolysis hyperkalemia risk)."
      ],
      [
        "Immediate intravenous administration of dantrolene sodium and oral bromocriptine",
        "Dantrolene and bromocriptine are specific therapies for neuroleptic malignant syndrome (NMS); they have no efficacy in serotonin syndrome, and bromocriptine (a dopaminergic/serotonergic agonist) can exacerbate serotonin toxicity."
      ],
      [
        "Administration of subcutaneous sumatriptan 6 mg and continuous intravenous fentanyl infusion",
        "Sumatriptan (5-HT1B/1D agonist) and fentanyl (serotonergic opioid) are potent serotonergic agents that will catastrophically worsen serotonin toxicity, precipitating fatal hyperthermia."
      ],
      [
        "Intramuscular administration of haloperidol 5 mg and diphenhydramine 50 mg to control acute psychotic agitation",
        "Haloperidol lowers the seizure threshold, impairs thermoregulation via anticholinergic effects, and increases the risk of precipitating concomitant neuroleptic malignant syndrome."
      ],
      [
        "Administration of high-dose intravenous propranolol 5 mg every 10 minutes to normalize heart rate and blood pressure",
        "Propranolol is a non-selective beta-blocker that can provoke severe hypotension and bradycardia, block sympathetic compensatory responses, and inhibit peripheral vasodilation needed for heat dissipation."
      ]
    ],
    "rationale": "Serotonin syndrome is caused by excess serotonergic stimulation (SSRI + tramadol). The Hunter Criteria require clonus (spontaneous, inducible, or ocular), hyperreflexia, agitation, diaphoresis, and hyperthermia. It is distinguished from NMS by hyper-acute onset (hours), mydriasis, hyperactive bowel sounds, and prominent clonus/hyperreflexia (vs lead-pipe rigidity). Management: discontinue serotonergic agents, administer IV benzodiazepines (first-line for agitation and temperature control), and give cyproheptadine (5-HT2A antagonist). Dantrolene and bromocriptine are for NMS.",
    "metadata": {
      "shortSolution": "Sertraline plus tramadol causing agitation, diaphoresis, hyperreflexia, and spontaneous/ocular clonus meets Hunter criteria for Serotonin Syndrome; treated with stopping drugs, IV benzodiazepines, and cyproheptadine.",
      "competingChoice": "Immediate intravenous administration of dantrolene sodium and oral bromocriptine",
      "exclusionFinding": "Dantrolene and bromocriptine treat NMS; serotonin syndrome features clonus and hyperreflexia (not lead-pipe rigidity) and is treated with benzodiazepines and cyproheptadine.",
      "pedagogicalValue": "Applying the Hunter Toxicity Criteria for Serotonin Syndrome and choosing IV benzodiazepines and cyproheptadine as specific management.",
      "citations": [
        "Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005;352(11):1112-1120. PMID: 15784664.",
        "Dunkley EJ, Isbister GK, Sibbritt D, et al. The Hunter Serotonin Toxicity Criteria: simple and accurate diagnostic decision rules for serotonin toxicity. QJM. 2003;96(9):635-642. PMID: 12925718."
      ]
    },
    "critique": {
      "shortestValidSolution": "SSRI + tramadol + spontaneous/ocular clonus + hyperreflexia -> Serotonin Syndrome treated with IV benzodiazepines + cyproheptadine.",
      "strongestCompetitor": "Immediate intravenous administration of dantrolene sodium and oral bromocriptine",
      "exclusionFinding": "Dantrolene/bromocriptine treat NMS; serotonin syndrome features clonus and hyperreflexia, requiring cyproheptadine.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0472",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Hospital Delirium Prevention and Multicomponent Non-Pharmacologic Management",
    "subtopic": "Circadian Synchronization, Environmental Modification, Antipsychotic Stewardship",
    "provisionalDifficulty": 4,
    "stem": "An 82-year-old man with mild cognitive impairment and benign prostatic hyperplasia is admitted to the medical ward on hospital day 3 for treatment of right lower lobe pneumonia with intravenous ceftriaxone and azithromycin. Over the past 12 hours, his mental status has fluctuated dramatically; he was lucid and conversant at breakfast, but became agitated, disoriented, and fearful at sunset, pulling out his peripheral intravenous catheter and urinary catheter, insisting that strange people are in his room trying to steal his clothes. On physical examination, he is restless, unable to sustain attention (cannot name the months of the year backward), and exhibits disorganized speech. Vital signs demonstrate blood pressure of 132/78 mm Hg, heart rate of 82/min, respiratory rate of 18/min, and oxygen saturation of 96% on room air. Focused evaluation reveals no hypoxemia, acute stroke, electrolyte derangement, or urinary retention. His bedside nurse requests an order for 'routine nighttime haloperidol or lorazepam' to ensure he stays asleep in bed.\n\nWhich of the following represents the most appropriate management approach for this patient's acute encephalopathy?",
    "choices": [
      [
        "Implement a multicomponent non-pharmacological delirium bundle (daylight exposure, nighttime dark/quiet environment, frequent reorientation, early mobilization, family presence, and removal of unnecessary tethers), withholding sedatives and antipsychotics unless the patient poses an immediate physical danger to self or others",
        "Hospital Delirium is an acute, fluctuating disturbance in attention, awareness, and baseline cognition commonly precipitated by acute medical illness, hospitalization, infection, or medication exposure in vulnerable elderly patients. (1) PATHOPHYSIOLOGY AND RISK FACTORS: Underlying cognitive impairment, sensory deprivation, tethering (catheters, IV lines), sleep fragmentation, and anticholinergic drugs. (2) MANAGEMENT PARADIGM (AMERICAN GERIATRICS SOCIETY GUIDELINES): Randomized controlled trials (such as the Hospital Elder Life Program [HELP]) establish that MULTICOMPONENT NON-PHARMACOLOGICAL STRATEGIES are the gold-standard first-line intervention: (a) Environmental modifications: Day-night circadian synchronization (bright daytime lighting, opening window blinds, quiet/dark environment at night, minimizing vital sign checks between midnight and 6 AM); (b) Reorientation: Clocks, calendars, whiteboard with staff names, frequent verbal orientation, and familiar family presence; (c) Functional maintenance: Prompt removal of unnecessary physical restraints, bladder catheters, and IV lines; ensuring sensory aids (glasses, hearing aids) are in place; early progressive out-of-bed mobilization. (3) PHARMACOLOGICAL STEWARDSHIP: Multiple large randomized placebo-controlled trials have demonstrated that ANTIPSYCHOTICS (haloperidol, quetiapine) DO NOT SHORTEN DELIRIUM DURATION, REDUCE SEVERITY, OR IMPROVE MORTALITY, and they carry significant risks of extrapyramidal symptoms, QTc prolongation, and excess mortality in elderly patients with dementia (FDA black box warning). Benzodiazepines (e.g., lorazepam) PARADOXICALLY WORSEN AND PROLONG DELIRIUM (except in alcohol or sedative withdrawal). Antipsychotics should be strictly reserved as a temporary last resort for severe refractory agitation that threatens immediate physical safety (e.g., pulling endotracheal tubes)."
      ],
      [
        "Administer intravenous lorazepam 1 to 2 mg every 4 hours as needed for agitation and insomnia",
        "Benzodiazepines are a major independent precipitant of delirium, paradoxical disinhibition, respiratory depression, and fall injuries in elderly patients; they are contraindicated for delirium except in alcohol/sedative withdrawal."
      ],
      [
        "Initiate scheduled oral haloperidol 2 mg three times daily for the remainder of the hospital stay",
        "Antipsychotics do not reduce delirium duration or improve mortality in clinical trials; scheduled prophylactic use exposes the patient to severe extrapyramidal toxicity, QTc prolongation, and ventricular arrhythmias."
      ],
      [
        "Apply four-point physical wrist and ankle restraints to securely immobilize the patient in bed",
        "Physical restraints increase agitation, delirium severity, combativeness, strangulation risk, pressure ulcers, and aspiration without preventing falls."
      ],
      [
        "Administer continuous intravenous diphenhydramine 50 mg every 6 hours to promote nighttime sedation",
        "Diphenhydramine is a potent first-generation anticholinergic agent (Beers criteria) that severely worsens acute cognitive decline, urinary retention, and delirium."
      ]
    ],
    "rationale": "Hospital delirium is an acute fluctuating disturbance in attention and awareness. The gold-standard management is multicomponent non-pharmacological intervention (the HELP protocol: sleep-wake cycle preservation, frequent reorientation, family presence, early ambulation, removal of catheters/restraints, sensory aids). Randomized clinical trials show antipsychotics do not reduce delirium duration or mortality and carry serious risks (QTc prolongation, extrapyramidal effects, mortality warning in dementia). Benzodiazepines paradoxically worsen delirium (contraindicated except for alcohol/sedative withdrawal).",
    "metadata": {
      "shortSolution": "Elderly patient with acute fluctuating inattention (delirium) requires multicomponent non-pharmacologic interventions (HELP bundle); avoid routine antipsychotics and benzodiazepines.",
      "competingChoice": "Initiate scheduled oral haloperidol 2 mg three times daily for the remainder of the hospital stay",
      "exclusionFinding": "Clinical trials show antipsychotics do not shorten delirium duration or reduce mortality and increase adverse events; non-pharmacological interventions are first-line.",
      "pedagogicalValue": "Mastering the non-pharmacological first-line management of hospital delirium and recognizing the harms of routine antipsychotic and benzodiazepine use.",
      "citations": [
        "Inouye SK, Westendorp RG, Saczynski JS. Delirium in elderly people. Lancet. 2014;383(9920):911-922. PMID: 23992774.",
        "American Geriatrics Society Expert Panel on Postoperative Delirium in Older Adults. Postoperative delirium in older adults: best practice statement from the American Geriatrics Society. J Am Coll Surg. 2015;220(2):136-148.e1. PMID: 25535170."
      ]
    },
    "critique": {
      "shortestValidSolution": "Acute fluctuating inattention/agitation -> Delirium managed with multicomponent non-pharmacologic bundle; avoid routine antipsychotics/benzodiazepines.",
      "strongestCompetitor": "Initiate scheduled oral haloperidol 2 mg three times daily for the remainder of the hospital stay",
      "exclusionFinding": "Antipsychotics do not improve delirium outcomes and carry black-box mortality risks; non-pharmacological care is standard.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0473",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "High-Risk Transient Ischemic Attack (TIA) and Dual Antiplatelet Therapy",
    "subtopic": "ABCD2 Score Calculation, Minor Stroke (NIHSS <= 3), 21-Day DAPT Duration",
    "provisionalDifficulty": 5,
    "stem": "A 67-year-old man presents to the emergency department 2 hours after experiencing an episode of sudden weakness and heaviness in his right hand and slurred speech while having lunch. The symptoms completely resolved spontaneously after 25 minutes, and he feels entirely back to his normal baseline on arrival. He has a history of essential hypertension treated with lisinopril and type 2 diabetes mellitus treated with metformin. On physical examination, he is alert and fully oriented. Neurological examination is completely normal, including cranial nerves, motor strength (5/5 throughout), sensation, cerebellar testing, and speech (NIHSS score is 0). Vital signs demonstrate blood pressure of 162/92 mm Hg, heart rate of 78/min, and oxygen saturation of 98% on room air. Emergent non-contrast head CT and brain MRI with diffusion-weighted imaging (DWI) show no acute intracranial hemorrhage or acute territorial cerebral infarction.\n\nBased on his calculated ABCD2 risk score and landmark clinical trial evidence (POINT and CHANCE trials), which of the following represents the most appropriate initial antiplatelet strategy for secondary stroke prevention in this patient?",
    "choices": [
      [
        "Initiate dual antiplatelet therapy (DAPT) with aspirin (loading dose followed by 81 mg daily) PLUS clopidogrel (300 to 600 mg loading dose followed by 75 mg daily) within 24 hours, continuing DAPT for 21 days followed by single antiplatelet monotherapy",
        "Transient Ischemic Attack (TIA) carries a high risk of subsequent catastrophic ischemic stroke within the first 90 days, with the highest risk clustering within the first 48 to 72 hours. (1) ABCD2 RISK STRATIFICATION SCORE: (a) Age >= 60 years = 1 point; (b) Blood pressure >= 140/90 mm Hg at initial presentation = 1 point; (c) Clinical features: Unilateral weakness = 2 points, Speech disturbance without weakness = 1 point; (d) Duration: >= 60 minutes = 2 points, 10 to 59 minutes = 1 point, < 10 minutes = 0 points; (e) Diabetes mellitus = 1 point. In this patient: Age 67 (1 pt) + BP 162/92 (1 pt) + Unilateral right hand weakness (2 pts) + Duration 25 min (1 pt) + Diabetes (1 pt) = TOTAL ABCD2 SCORE OF 6 POINTS (HIGH RISK; score 6-7 carries an 8-12% stroke risk at 48 hours). (2) DUAL ANTIPLATELET THERAPY (POINT AND CHANCE TRIALS): Landmark randomized double-blind clinical trials (POINT and CHANCE) demonstrated that for HIGH-RISK TIA (ABCD2 score >= 4) or MINOR ISCHEMIC STROKE (NIHSS score <= 3), initiating DAPT (aspirin + clopidogrel) within 12 to 24 hours reduces the risk of recurrent ischemic stroke by approximately 25-30% compared to aspirin alone. (3) DAPT DURATION (THE 21-DAY LIMIT): The therapeutic benefit of DAPT is heavily front-loaded in the first 21 days; beyond 21 days, the risk of major hemorrhage (intracranial hemorrhage, major GI bleeding) surpasses the ischemic stroke prevention benefit. Therefore, current AHA/ASA guidelines mandate continuing DAPT for exactly 21 to 90 days (specifically 21 days based on the POINT trial protocol), followed by transition to SINGLE ANTIPLATELET MONOTHERAPY (aspirin alone or clopidogrel alone)."
      ],
      [
        "Initiate aspirin 81 mg monotherapy alone indefinitely, withholding clopidogrel to prevent gastrointestinal bleeding",
        "Aspirin monotherapy is significantly inferior to DAPT in high-risk TIA (ABCD2 >= 4); omitting clopidogrel during the first 21 days leaves the patient at substantial risk for disabling recurrent ischemic stroke."
      ],
      [
        "Initiate lifelong dual antiplatelet therapy with aspirin and clopidogrel continued indefinitely for secondary stroke prevention",
        "Prolonging DAPT beyond 21 to 90 days provides no additional ischemic stroke reduction and dramatically increases the risk of fatal major extracranial and intracranial hemorrhage."
      ],
      [
        "Initiate full-dose therapeutic anticoagulation with intravenous unfractionated heparin followed by warfarin targeting an INR of 2.0 to 3.0",
        "Anticoagulation in non-cardioembolic TIA does not prevent recurrent stroke compared to antiplatelet agents and significantly increases fatal intracranial hemorrhage."
      ],
      [
        "Administer intravenous tenecteplase 0.25 mg/kg bolus immediately, as symptoms occurred within the past 4.5 hours",
        "Thrombolysis is strictly contraindicated in TIA because neurological symptoms have fully resolved (NIHSS 0) and the risk of intracranial hemorrhage far outweighs any potential benefit."
      ]
    ],
    "rationale": "High-risk TIA (ABCD2 score >= 4) or minor acute ischemic stroke (NIHSS <= 3) carries a high early risk of recurrent stroke. The POINT and CHANCE trials demonstrated that dual antiplatelet therapy (aspirin + clopidogrel) started within 24 hours significantly reduces stroke recurrence compared to aspirin monotherapy. Critically, DAPT should be continued for 21 days, after which it is switched to single antiplatelet monotherapy, because the risk of major bleeding outweighs ischemic protection after 21 days.",
    "metadata": {
      "shortSolution": "TIA with ABCD2 score of 6 (high-risk) requires DAPT (aspirin + clopidogrel) started within 24 hours and continued for 21 days, followed by single antiplatelet monotherapy.",
      "competingChoice": "Initiate lifelong dual antiplatelet therapy with aspirin and clopidogrel continued indefinitely for secondary stroke prevention",
      "exclusionFinding": "Continuing DAPT beyond 21-90 days causes high cumulative risk of major hemorrhage without added stroke prevention; DAPT must be transitioned to monotherapy at 21 days.",
      "pedagogicalValue": "Calculating the ABCD2 score and knowing the indication and duration (21 days) for dual antiplatelet therapy in high-risk TIA and minor stroke (POINT trial).",
      "citations": [
        "Johnston SC, Easton JD, Farrant M, et al. Clopidogrel and Aspirin in Acute Ischemic Stroke and High-Risk TIA. N Engl J Med. 2018;379(3):215-225. PMID: 29770751.",
        "Powers WJ, Rabinstein AA, Ackerson T, et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update. Stroke. 2019;50(12):e344-e418. PMID: 31662037."
      ]
    },
    "critique": {
      "shortestValidSolution": "High-risk TIA (ABCD2 score 6) -> DAPT (aspirin + clopidogrel) for 21 days, then single antiplatelet agent.",
      "strongestCompetitor": "Initiate lifelong dual antiplatelet therapy with aspirin and clopidogrel continued indefinitely for secondary stroke prevention",
      "exclusionFinding": "Lifelong DAPT causes severe excess bleeding without ischemic benefit; DAPT is limited to 21 days (POINT trial).",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0474",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Bell Palsy (Idiopathic Facial Nerve Palsy)",
    "subtopic": "Upper vs Lower Facial Weakness, Corticosteroid Window, Corneal Protection",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old man presents to the urgent care clinic with sudden weakness of the right side of his face that he noticed upon waking this morning. When brushing his teeth, water drooled from the right corner of his mouth, and he felt his right eye burning and tearing. He denies limb weakness, sensory loss, visual changes, headache, or ear discharge. Physical examination reveals an alert man. Neurological examination demonstrates complete right-sided facial weakness: when asked to raise his eyebrows and wrinkle his forehead, there is complete absence of movement on the right side; when asked to close his eyes tightly, the right eyelid fails to close fully (lagophthalmos), and the right eyeball rolls upward and outward (Bell phenomenon); and when asked to smile, the right oral commissure does not elevate. Sensation over the face is symmetric and intact to pinprick. Extraocular movements, hearing, and all other cranial nerves are completely intact. Otoscopic examination of the external auditory canal and tympanic membrane reveals no vesicles, erythema, or discharge. Eye examination shows mild right conjunctival injection without corneal abrasion.\n\nWhich of the following represents the most appropriate pharmacological and supportive management for this patient?",
    "choices": [
      [
        "Oral prednisone (60 to 80 mg daily for 7 to 10 days) initiated within 72 hours of symptom onset, combined with daytime lubricating artificial tears and nighttime eye ointment with eye taping",
        "Bell Palsy is an acute, idiopathic, peripheral neuropathy of Cranial Nerve VII (facial nerve), likely triggered by herpes simplex virus reactivation causing edema and entrapment within the fallopian (facial) canal of the temporal bone. (1) UPPER VERSUS LOWER MOTOR NEURON WEAKNESS: (a) Central/UMN lesion (e.g., motor cortex stroke): Bilateral cortical motor innervation to the frontalis and orbicularis oculi muscles spares the upper face; therefore, forehead wrinkling is PRESERVED, and only the contralateral lower face is paralyzed. (b) Peripheral/LMN lesion (Bell palsy): All motor branches of CN VII are affected, resulting in ipsilateral paralysis of BOTH UPPER AND LOWER FACE (inability to wrinkle forehead, inability to close eye, flattened nasolabial fold, drooping mouth corner). (2) PHARMACOTHERAPY (AAN / AAO-HNS GUIDELINES): Multiple large randomized controlled trials (including the landmark Scottish Bell's Palsy Study) establish that ORAL CORTICOSTEROIDS (prednisone 60-80 mg daily for 7 to 10 days) significantly accelerate and increase the rate of complete facial nerve recovery (from ~70% to > 85-95%), provided they are INITIATED WITHIN 72 HOURS OF SYMPTOM ONSET. Antiviral monotherapy (acyclovir/valacyclovir) has NO benefit; combining antivirals with steroids offers minimal to no additional benefit over steroids alone. (3) CORNEAL PROTECTION: Incomplete eye closure (lagophthalmos) exposes the cornea to desiccation, keratitis, corneal ulceration, and permanent blindness. Eye protection with daytime lubricating artificial tears every 1-2 hours, nighttime lubricating ophthalmic ointment, and eye taping closed during sleep is MANDATORY."
      ],
      [
        "Oral acyclovir 800 mg five times daily as standalone monotherapy without corticosteroids",
        "High-level randomized trials prove that antiviral monotherapy provides zero therapeutic benefit compared to placebo in Bell palsy; corticosteroids are the definitive first-line therapy."
      ],
      [
        "Perform emergent brain MRI with gadolinium and hospitalize for continuous stroke monitoring",
        "Involvement of the forehead (upper face) definitively localizes the lesion to the peripheral facial nerve (LMN), completely ruling out an upper motor neuron stroke; neuroimaging is unnecessary in acute isolated Bell palsy."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 1,000 mg daily and perform emergent surgical facial canal decompression",
        "Surgical facial nerve decompression carries substantial risks of permanent sensorineural hearing loss and is not recommended for acute Bell palsy; oral prednisone is standard of care."
      ],
      [
        "Reassurance with observation alone, as over 95% of patients recover spontaneously without any medical intervention or corneal care",
        "Untreated Bell palsy results in permanent facial asymmetry, synkinesis, or crocodile tears in 30% of patients, and failure to provide corneal lubrication causes corneal ulceration and permanent vision loss."
      ]
    ],
    "rationale": "Bell palsy is an acute idiopathic peripheral neuropathy of CN VII, causing unilateral upper and lower facial paralysis (including inability to wrinkle the forehead, which distinguishes it from a central stroke). Treatment within 72 hours of onset with oral prednisone (60-80 mg daily for 7-10 days) significantly increases complete recovery rates. Antiviral monotherapy is ineffective. Corneal protection with lubricating drops, nighttime ointment, and taping is critical to prevent exposure keratopathy and ulceration.",
    "metadata": {
      "shortSolution": "Acute unilateral upper and lower facial weakness (including forehead) is Bell palsy; treated with oral prednisone within 72 hours plus corneal protection (artificial tears, nocturnal taping).",
      "competingChoice": "Oral acyclovir 800 mg five times daily as standalone monotherapy without corticosteroids",
      "exclusionFinding": "Antiviral monotherapy is proven ineffective in randomized trials; oral corticosteroids initiated within 72 hours are the only proven pharmacotherapy for Bell palsy.",
      "pedagogicalValue": "Distinguishing peripheral CN VII palsy (forehead involved) from central stroke (forehead spared) and knowing the 72-hour window for oral prednisone plus corneal protection.",
      "citations": [
        "Sullivan FM, Swan IR, Donnan PT, et al. Early treatment with prednisolone or acyclovir in Bell's palsy. N Engl J Med. 2007;357(16):1598-1607. PMID: 17942873.",
        "Baugh RF, Basura GJ, Ishii LE, et al. Clinical practice guideline: Bell's palsy. Otolaryngol Head Neck Surg. 2013;149(3 Suppl):S1-S27. PMID: 24198270."
      ]
    },
    "critique": {
      "shortestValidSolution": "Unilateral facial paralysis with forehead involvement -> Bell palsy treated with oral prednisone (< 72h) + eye lubrication.",
      "strongestCompetitor": "Oral acyclovir 800 mg five times daily as standalone monotherapy without corticosteroids",
      "exclusionFinding": "Antiviral monotherapy is ineffective; oral corticosteroids are the proven treatment.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0475",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Trigeminal Neuralgia (Tic Douloureux)",
    "subtopic": "Vascular Compression, Lancinating Facial Pain, Carbamazepine, Adverse Effects",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old woman presents to the clinic with a 6-week history of agonizing, lancinating right-sided facial pain. She describes the pain as sudden, sharp, electric shock-like jolts lasting between 5 and 30 seconds that shoot along her right lower jaw and right cheek. The episodes occur up to 20 times a day and are triggered by light sensory touch, such as brushing her teeth, applying makeup, washing her face, or encountering a cold breeze outdoors. She has stopped chewing food on the right side of her mouth to avoid triggering an attack. Neurological examination is completely normal: sensation to pinprick, light touch, and temperature across all three trigeminal nerve divisions (V1, V2, V3) is completely intact and symmetric bilaterally; corneal reflexes are normal; and motor function of the muscles of mastication (masseter and temporalis) is symmetric with normal jaw jerk. Brain MRI with dedicated high-resolution fiesta sequences demonstrates neurovascular compression of the right trigeminal nerve root entry zone by an aberrant loop of the superior cerebellar artery, with no demyelinating plaques, mass lesions, or brainstem infarcts.\n\nWhich of the following represents the most appropriate initial pharmacological therapy for this patient?",
    "choices": [
      [
        "Oral carbamazepine (or oxcarbazepine), with baseline and follow-up monitoring of complete blood count and serum sodium concentrations",
        "Trigeminal Neuralgia (TN, tic douloureux) is characterized by recurrent paroxysms of severe, sharp, lancinating, electric shock-like unilateral facial pain restricted to one or more divisions of the trigeminal nerve (most commonly V2 [maxillary] and V3 [mandibular], rarely V1 [ophthalmic]). (1) PATHOPHYSIOLOGY: Classical TN is caused by neurovascular compression of the trigeminal nerve root entry zone by an aberrant arterial loop (most commonly the superior cerebellar artery), leading to focal mechanical pulsatile demyelination, ephaptic cross-talk between sensory fibers, and hyper-excitable ectopic action potentials. (2) DIAGNOSTIC HALLMARKS: Paroxysms triggered by innocuous, light tactile stimuli (chewing, brushing teeth, light touch, wind); pain lasts seconds to < 2 minutes; neurological examination is characteristically completely normal (absence of sensory loss or motor weakness). (3) FIRST-LINE MEDICAL PHARMACOTHERAPY: CARBAMAZEPINE (titrated from 100-200 mg twice daily up to 1,200 mg daily) or OXCARBAZEPINE is the undisputed first-line treatment of choice, acting by blocking use-dependent voltage-gated sodium channels to stabilize hyper-excitable neuronal membranes and suppress high-frequency repetitive firing. (4) ADVERSE EFFECT MONITORING: Carbamazepine requires baseline and serial monitoring of Complete Blood Count (risk of aplastic anemia and agranulocytosis) and Serum Electrolytes (risk of Syndrome of Inappropriate Antidiuretic Hormone [SIADH] and severe hyponatremia). (5) SURGICAL RESCUE: Microvascular Decompression (MVD, Janetta procedure) is reserved for patients refractory to or intolerant of pharmacotherapy."
      ],
      [
        "Oral ibuprofen 800 mg three times daily and acetaminophen 1,000 mg three times daily as first-line analgesic therapy",
        "Standard non-steroidal anti-inflammatory drugs and acetaminophen have zero efficacy against neuropathic ephaptic firing in trigeminal neuralgia."
      ],
      [
        "Scheduled oral oxycodone 10 mg every 4 hours for neuropathic pain control",
        "Opioids are ineffective for the brief paroxysmal lancinating electric pain of trigeminal neuralgia and carry high risks of physical dependence, tolerance, and sedation."
      ],
      [
        "Immediate referral for open posterior fossa craniotomy and microvascular decompression before attempting medical therapy",
        "Microvascular decompression is an invasive intracranial neurosurgical procedure carrying risks of hearing loss, stroke, and CSF leak; conservative trial of first-line carbamazepine is mandatory before considering surgery."
      ],
      [
        "Oral prednisone 60 mg daily for 4 weeks for presumed acute autoimmune trigeminal neuritis",
        "Classical trigeminal neuralgia is a mechanical neurovascular compression disorder, not an inflammatory autoimmune neuropathy; corticosteroids are completely ineffective."
      ]
    ],
    "rationale": "Trigeminal neuralgia presents with brief, lancinating, electric-shock unilateral facial pain in the V2/V3 distribution triggered by light tactile stimuli (chewing, brushing teeth) with a completely normal neurological examination, caused by neurovascular compression of the trigeminal root entry zone (often by the superior cerebellar artery). First-line therapy is oral carbamazepine (or oxcarbazepine), a voltage-gated sodium channel blocker. Monitoring for agranulocytosis, aplastic anemia, and hyponatremia (SIADH) is required. Microvascular decompression is reserved for medical failures.",
    "metadata": {
      "shortSolution": "Lancinating facial pain triggered by light touch with normal neuro exam is Trigeminal Neuralgia; first-line therapy is carbamazepine with CBC and sodium monitoring.",
      "competingChoice": "Immediate referral for open posterior fossa craniotomy and microvascular decompression before attempting medical therapy",
      "exclusionFinding": "Carbamazepine/oxcarbazepine is the mandatory first-line therapy with > 80% initial response; invasive neurosurgery is reserved for medical failures.",
      "pedagogicalValue": "Recognizing trigeminal neuralgia and knowing carbamazepine is first-line therapy with required monitoring of complete blood counts and sodium.",
      "citations": [
        "Cruccu G, Gronseth G, Alksne J, et al. AAN-EFNS guidelines on trigeminal neuralgia management. Eur J Neurol. 2008;15(10):1013-1028. PMID: 18721143.",
        "Bendtsen L, Zakrzewska JM, Abbott J, et al. European Academy of Neurology guideline on trigeminal neuralgia. Eur J Neurol. 2019;26(6):831-845. PMID: 30860637."
      ]
    },
    "critique": {
      "shortestValidSolution": "Lancinating electric facial pain triggered by light touch -> Trigeminal neuralgia treated first-line with oral carbamazepine.",
      "strongestCompetitor": "Immediate referral for open posterior fossa craniotomy and microvascular decompression before attempting medical therapy",
      "exclusionFinding": "Medical therapy with carbamazepine is first-line; surgery is reserved for refractory cases.",
      "verdict": "PASS"
    }
  }
]
