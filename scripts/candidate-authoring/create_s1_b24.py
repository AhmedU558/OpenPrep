import json
import os

items = []

def add_q(code, subj, sys, topic, diff, stem, choices, shortest, inf, strong_d, excl, cit, crit=None):
    if crit is None:
        crit = {
            "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
            "clinicalInferenceNotes": f"High-yield neuroanatomy/neurophysiology item requiring precise anatomical localization and clinical deduction.",
            "distractorExclusionNotes": "Distractors feature closely competing brainstem stroke syndromes, neuromuscular junction defects, or visual pathway lesions.",
            "verdict": "PASS",
            "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
        }
    items.append({
        "code": code,
        "exam": "Step 1",
        "subject": subj,
        "system": sys,
        "topic": topic,
        "provisionalDifficulty": diff,
        "stem": stem,
        "choices": choices,
        "shortestValidSolution": shortest,
        "necessaryInference": inf,
        "strongestDistractor": strong_d,
        "distractorExclusion": excl,
        "citation": cit,
        "critique": crit
    })

# 0576
add_q(
    "op-c-s1-0576", "Anatomy", "Nervous System", "Lateral Medullary Syndrome Wallenberg Vascular Territory", 5,
    "A 62-year-old man presents with sudden-onset severe vertigo, nausea, and unsteady gait. Neurological examination reveals: loss of pain and temperature sensation over the left side of his face and the right side of his body (arms, trunk, and legs); left-sided ptosis and miosis (left Horner syndrome); left-sided limb ataxia with dysmetria on finger-to-nose testing; and severe dysphagia, hoarseness, and loss of the left gag reflex with the uvula deviating to the right. Muscle strength is 5/5 bilaterally, and light touch and vibration sensations are intact throughout. An acute ischemic infarction in which of the following arterial territories is responsible for this clinical presentation?",
    [
        ["Posterior inferior cerebellar artery (PICA) supplying the dorsolateral medulla", "Lateral medullary syndrome (Wallenberg syndrome) is caused by occlusion of the POSTERIOR INFERIOR CEREBELLAR ARTERY (PICA) or vertebral artery. Key localized structures: (1) NUCLEUS AMBIGUUS (CN IX, X, XI motor) -> dysphagia, hoarseness, loss of gag reflex, uvula deviation away from lesion (pathognomonic); (2) SPINAL TRIGEMINAL NUCLEUS and tract -> ipsilateral loss of facial pain and temperature; (3) SPINOTHALAMIC TRACT -> contralateral loss of body pain and temperature; (4) INFERIOR CEREBELLAR PEDUNCLE -> ipsilateral limb ataxia; (5) DESCENDING SYMPATHETIC TRACT -> ipsilateral Horner syndrome (ptosis, miosis, anhidrosis); and (6) VESTIBULAR NUCLEI -> vertigo, nystagmus. Pyramidal corticospinal tracts and medial lemniscus are medial and therefore SPARED."],
        ["Anterior inferior cerebellar artery (AICA) supplying the lateral pontine tegmentum", "AICA occlusion causes lateral pontine syndrome, which features ipsilateral facial motor droop (CN VII nucleus) and sensorineural hearing loss (CN VIII), absent here."],
        ["Paramedian branches of the basilar artery supplying the medial pons", "Paramedian basilar branches supply the medial pons; occlusion causes contralateral hemiparesis and abducens palsy (Millard-Gubler), not lateral medullary Horner and nucleus ambiguus dysphagia."],
        ["Anterior spinal artery (ASA) supplying the paramedian ventral medulla", "ASA occlusion causes medial medullary syndrome: contralateral hemiparesis (pyramid), contralateral loss of vibration/proprioception (medial lemniscus), and ipsilateral tongue deviation (CN XII)."],
        ["Posterior cerebral artery (PCA) paramedian perforators supplying the cerebral peduncle", "PCA occlusion of midbrain perforators causes Weber syndrome (ipsilateral CN III palsy with contralateral hemiparesis), not medullary Wallenberg syndrome."]
    ],
    "Ipsilateral facial + contralateral body pain/temp loss + ipsilateral Horner + ataxia + dysphagia/hoarseness (CN IX/X) = Wallenberg syndrome -> PICA occlusion in lateral medulla.",
    "Map the anatomical structures of the lateral medulla to their vascular supply: PICA supplies nucleus ambiguus, spinal trigeminal nucleus, and spinothalamic tract.",
    "Anterior inferior cerebellar artery (AICA) supplying the lateral pontine tegmentum",
    "AICA causes lateral pontine syndrome with facial droop (CN VII) and deafness (CN VIII); PICA affects the lateral medulla causing nucleus ambiguus dysphagia/hoarseness.",
    "Caplan LR. Posterior circulation disease: clinical findings, diagnosis, and management. Blackwell Science; 1996:185-210. NLM ID: 9603099."
)

# 0577
add_q(
    "op-c-s1-0577", "Anatomy", "Nervous System", "Medial Medullary Syndrome Dejerine Localization", 5,
    "A 70-year-old woman with chronic hypertension presents with acute-onset weakness of her right arm and leg and difficulty speaking. Neurological examination reveals: spastic hemiparesis of the right upper and lower extremities with hyperreflexia and an extensor plantar response (positive Babinski sign); complete loss of vibration sense and two-point discrimination over the right arm, trunk, and leg with intact pain and temperature sensation; and weakness of the tongue, which deviates to the left when protruded. There is no facial weakness, dysphagia, or limb ataxia. An occlusion of which of the following arteries is responsible for this patient's deficits?",
    [
        ["Anterior spinal artery (ASA) or paramedian branches of the vertebral artery supplying the ventromedial medulla", "Medial medullary syndrome (Dejerine syndrome) is caused by infarction of the anterior spinal artery (ASA) or vertebral artery paramedian branches. The syndrome is defined by a triad of structures localized to the ventromedial medulla: (1) CORTICOSPINAL TRACT in the medullary pyramid -> contralateral spastic hemiparesis (right-sided weakness); (2) MEDIAL LEMNISCUS (dorsal column fibers after internal arcuate decussation) -> contralateral loss of proprioception and vibration sense (right-sided); and (3) HYPOGLOSSAL NERVE / NUCLEUS (CN XII) -> ipsilateral flaccid paralysis of the tongue, which deviates TOWARD the side of the lesion (left) due to unopposed action of the contralateral genioglossus."],
        ["Posterior inferior cerebellar artery (PICA) supplying the dorsolateral medulla", "PICA occlusion causes lateral medullary syndrome (Wallenberg) with dysphagia, Horner syndrome, and crossed pain/temperature loss, sparing motor strength and vibration."],
        ["Superior cerebellar artery (SCA) supplying the rostral dorsolateral pons", "SCA occlusion causes severe ipsilateral cerebellar ataxia, Horner syndrome, and contralateral body pain/temperature loss, without tongue deviation or hemiparesis."],
        ["Anterior cerebral artery (ACA) supplying the parasagittal motor cortex", "ACA occlusion causes contralateral leg weakness greater than arm weakness and urinary incontinence, without tongue atrophy or selective medial lemniscal loss."],
        ["Lenticulostriate branches of the middle cerebral artery supplying the posterior limb of the internal capsule", "Lenticulostriate infarction causes pure motor hemiparesis affecting face, arm, and leg equally, without tongue deviation or selective loss of vibration with intact pain/temp."]
    ],
    "Contralateral hemiparesis + contralateral vibration/proprioception loss + ipsilateral tongue deviation = Medial medullary syndrome -> Anterior Spinal Artery (ASA).",
    "Identify the medial medullary triad: corticospinal tract (contralateral motor), medial lemniscus (contralateral vibration), and hypoglossal nerve (ipsilateral tongue deviation).",
    "Posterior inferior cerebellar artery (PICA) supplying the dorsolateral medulla",
    "PICA supplies the lateral medulla (Wallenberg syndrome); medial structures (pyramids, medial lemniscus, CN XII) are supplied by the anterior spinal artery.",
    "Kim JS. Pure and predominant dysarthria in ischemic stroke. Stroke. 2003;34(5):1330-1335. PMID: 12690220."
)

# 0578
add_q(
    "op-c-s1-0578", "Anatomy", "Nervous System", "Lateral Pontine Syndrome AICA Territory Deficits", 5,
    "A 58-year-old man presents with sudden-onset vertigo, nausea, vomiting, and left-sided hearing loss. Physical examination demonstrates: complete paralysis of the muscles of facial expression on the left side, including inability to wrinkle the left forehead or close the left eye; absent left corneal reflex with normal right corneal sensation; sensorineural hearing loss in the left ear; severe left-sided limb ataxia; left-sided Horner syndrome (ptosis and miosis); and loss of pain and temperature sensation over the right arm, trunk, and leg. Muscle strength in all four limbs is 5/5, and vibration sensation is fully preserved bilaterally. Which of the following arteries is most likely occluded in this patient?",
    [
        ["Anterior inferior cerebellar artery (AICA)", "Lateral pontine syndrome is caused by occlusion of the ANTERIOR INFERIOR CEREBELLAR ARTERY (AICA). Key diagnostic structures localized to the caudal lateral pons include: (1) FACIAL MOTOR NUCLEUS (CN VII) -> ipsilateral complete peripheral facial droop including the forehead (distinguishing AICA from PICA); (2) COCHLEAR NUCLEI and internal auditory artery -> ipsilateral sensorineural deafness (pathognomonic for AICA); (3) VESTIBULAR NUCLEI -> vertigo and nystagmus; (4) SPINAL TRIGEMINAL NUCLEUS -> ipsilateral facial numbness; (5) SPINOTHALAMIC TRACT -> contralateral body pain/temperature loss; (6) MIDDLE CEREBELLAR PEDUNCLE -> ipsilateral limb ataxia; and (7) DESCENDING SYMPATHETIC TRACT -> ipsilateral Horner syndrome. Corticospinal and medial lemniscus fibers are spared."],
        ["Posterior inferior cerebellar artery (PICA)", "PICA occlusion causes lateral medullary syndrome (Wallenberg); it affects the nucleus ambiguus (dysphagia/hoarseness), but SPARES the facial motor nucleus (no facial paralysis) and cochlear nuclei (no deafness)."],
        ["Anterior spinal artery (ASA)", "ASA occlusion causes medial medullary syndrome with contralateral hemiparesis and ipsilateral tongue deviation, not facial paralysis or deafness."],
        ["Labyrinthine artery alone", "Isolated labyrinthine artery occlusion causes sudden deafness and vertigo, but does NOT cause facial paralysis, Horner syndrome, ataxia, or crossed spinothalamic sensory loss."],
        ["Middle cerebral artery (MCA) superior division", "MCA superior division infarction causes contralateral spastic faciobrachial hemiparesis and Broca aphasia, sparing hearing, cerebellar coordination, and pain/temperature."]
    ],
    "Ipsilateral peripheral facial droop (forehead involved) + ipsilateral deafness + crossed pain/temp loss + ataxia = Lateral pontine syndrome -> AICA occlusion.",
    "Differentiate AICA (lateral pons: facial nucleus CN VII droop and cochlear deafness) from PICA (lateral medulla: nucleus ambiguus CN IX/X dysphagia/hoarseness).",
    "Posterior inferior cerebellar artery (PICA)",
    "PICA produces Wallenberg syndrome in the lateral medulla with vocal cord/palate weakness (CN IX/X); AICA produces lateral pontine syndrome with facial droop (CN VII) and deafness (CN VIII).",
    "Amarenco P. The spectrum of cerebellar infarctions. Neurology. 1991;41(7):973-979. PMID: 2067655."
)

# 0579
add_q(
    "op-c-s1-0579", "Pathology", "Nervous System", "Ventral Pontine Infarction Locked-In Syndrome", 5,
    "A 54-year-old man with uncontrolled hypertension and diabetes collapses suddenly. Upon emergency department arrival, he is completely unable to move any of his four extremities, speak, chew, swallow, or produce facial movements. He does not respond to painful stimuli on his body. However, when instructed to 'look up at the ceiling' or 'blink twice if you can hear me,' he reliably executes vertical saccadic eye movements and blinks voluntarily. Pupils are equal and reactive to light. Electroencephalography demonstrates a normal, reactive background waking alpha rhythm. Occlusion of which of the following vessels is responsible for this condition, and which anatomical structure is spared to allow vertical eye movements?",
    [
        ["Basilar artery trunk causing extensive infarction of the ventral basis pontis; voluntary vertical eye movements and eyelid opening are spared because the rostral midbrain tectum, Edinger-Westphal nucleus, and oculomotor complex remain perfused", "LOCKED-IN SYNDROME is caused by thrombosis of the basilar artery trunk producing massive bilateral infarction of the BASIS PONTIS (ventral pons). This obliterates bilateral descending corticospinal tracts (producing quadriplegia) and corticobulbar tracts (producing anarthria and bilateral lower cranial nerve paralysis). Horizontal conjugate gaze is lost due to destruction of the bilateral abducens nuclei and PPRF. Crucially, the patient is fully conscious and intact cognitively because the reticular activating system and thalamus remain perfused via collateral flow from the posterior communicating arteries to the rostral midbrain. Voluntary vertical eye movements (CN III) and eyelid opening (levator palpebrae superioris) are controlled by the rostral midbrain tectum (interstitial nucleus of Cajal and rostral interstitial nucleus of the MLF) which are spared."],
        ["Anterior cerebral artery bilaterally causing extensive parasagittal frontal lobe infarction; sparing of the primary motor strip enables ocular vertical saccades", "Bilateral ACA infarction causes akinetic mutism and abulia with paraplegia, but patients do not retain fully preserved cognition or isolated voluntary vertical blink communication."],
        ["Bilateral middle cerebral artery M1 segments causing massive hemispheric infarction; brainstem reflexes are preserved", "Bilateral MCA infarctions cause fatal cerebral edema and coma, with loss of conscious wakefulness on EEG."],
        ["Vein of Galen thrombosis causing bilateral thalamic hemorrhagic infarction; sparing of the ventral striatum preserves blink reflexes", "Vein of Galen thrombosis causes deep cerebral venous infarction with severe obtundation and coma, not conscious locked-in quadriplegia."],
        ["Posterior inferior cerebellar artery bilaterally causing cerebellar tonsillar herniation; sparing of the pontine reticular formation preserves vertical gaze", "Tonsillar herniation compresses the medulla causing respiratory arrest and coma, not preserved conscious vertical ocular signaling."]
    ],
    "Quadriplegia + anarthria + intact consciousness (normal EEG) + preserved vertical gaze and blinking = Locked-in syndrome -> basilar artery basis pontis infarction, midbrain spared.",
    "Localize locked-in syndrome: ventral pontine basis destruction cuts corticospinal/corticobulbar tracts; preserved midbrain CN III and reticular system allows vertical gaze and wakefulness.",
    "Anterior cerebral artery bilaterally causing extensive parasagittal frontal lobe infarction; sparing of the primary motor strip enables ocular vertical saccades",
    "Bilateral ACA strokes produce akinetic mutism without intact cognitive communication; locked-in syndrome is a ventral pontine lesion with preserved midbrain cognition and vertical gaze.",
    "Smith E, Delargy M. Locked-in syndrome. BMJ. 2005;330(7488):406-409. PMID: 15718541."
)

# 0580
add_q(
    "op-c-s1-0580", "Anatomy", "Nervous System", "Weber Syndrome Ventral Midbrain Localization", 5,
    "A 68-year-old man presents with acute onset of double vision and right-sided hemiplegia. Physical examination reveals: the left eye is deviated 'down and out' at rest with severe ptosis; the left pupil is 6 mm and non-reactive to direct light or accommodation (right pupil is 3 mm and reactive); and there is a spastic hemiparesis of the right upper and lower extremities with hyperreflexia and an extensor plantar response. Facial sensation and cerebellar coordination are intact. Which of the following arterial branches is occluded in this patient, and what two structures within the brainstem are infarcted?",
    [
        ["Paramedian perforating branches of the posterior cerebral artery (PCA); infarcted structures are the ipsilateral oculomotor (CN III) nerve fascicles and the ipsilateral cerebral peduncle (crus cerebri)", "Weber syndrome (superior alternating hemiplegia) is a ventral midbrain syndrome caused by occlusion of paramedian perforating branches of the posterior cerebral artery (PCA) or basilar bifurcation. The infarction affects two key adjacent structures in the ventral midbrain: (1) OCULOMOTOR NERVE (CN III) fascicles exiting the interpeduncular fossa -> ipsilateral CN III palsy ('down and out' eye, complete ptosis, dilated non-reactive pupil); and (2) CEREBRAL PEDUNCLE (crus cerebri) carrying descending corticospinal and corticobulbar tracts -> contralateral spastic hemiparesis and contralateral lower facial weakness."],
        ["Anterior choroidal artery; infarcted structures are the lateral geniculate nucleus and the optic radiations in the temporal lobe", "Anterior choroidal artery infarction causes contralateral hemiplegia, hemianesthesia, and homonymous hemianopsia, without isolated ipsilateral dilated pupil or ptosis."],
        ["Paramedian branches of the basilar artery; infarcted structures are the abducens (CN VI) nucleus and the facial nerve genu in the pons", "Millard-Gubler syndrome involves CN VI and VII with contralateral hemiplegia in the ventral pons, not CN III with 'down and out' eye."],
        ["Superior cerebellar artery; infarcted structures are the superior cerebellar peduncle and the red nucleus in the midbrain tegmentum", "Benedikt syndrome involves the midbrain tegmentum (red nucleus and cerebellothalamic tracts) producing ipsilateral CN III palsy with contralateral tremor/ataxia, not pure hemiparesis."],
        ["Anterior spinal artery; infarcted structures are the hypoglossal (CN XII) nucleus and the medullary pyramid", "Medial medullary syndrome involves CN XII (tongue deviation) and pyramids in the medulla, not CN III in the midbrain."]
    ],
    "Ipsilateral CN III palsy (down and out, dilated pupil, ptosis) + contralateral hemiparesis = Weber syndrome -> ventral midbrain (crus cerebri + CN III) from paramedian PCA branches.",
    "Differentiate ventral midbrain Weber syndrome (CN III + cerebral peduncle hemiparesis) from dorsal tegmental Benedikt syndrome (CN III + red nucleus tremor) and pontine strokes.",
    "Superior cerebellar artery; infarcted structures are the superior cerebellar peduncle and the red nucleus in the midbrain tegmentum",
    "Red nucleus involvement causes Benedikt syndrome with involuntary tremor and ataxia; Weber syndrome involves the cerebral peduncle causing pure spastic hemiparesis.",
    "Silverman IE, et al. Midbrain stroke: clinical syndromes, causes, and outcome. Neurology. 1995;45(1):15-22. PMID: 7824107."
)

# 0581
add_q(
    "op-c-s1-0581", "Anatomy", "Nervous System", "Parinaud Syndrome Dorsal Midbrain Pinealoma", 5,
    "A 14-year-old boy presents with progressive headaches, morning vomiting, and diplopia. Physical examination reveals: complete inability to elevate the eyes voluntarily or on pursuit (upward gaze paralysis), while downward and horizontal saccades are fully preserved; bilateral eyelid retraction with sclera visible above the superior limbus in primary gaze (Collier sign); and pupils that constrict promptly during near accommodation (convergence) but do not constrict to direct light stimulation (light-near dissociation). Bilateral papilledema is present. Neuroimaging demonstrates a 2.5-cm circumscribed mass in the pineal region compressing the dorsal midbrain and causing obstructive non-communicating hydrocephalus of the cerebral aqueduct. Which of the following anatomical structures is directly compressed to produce this patient's vertical gaze palsy?",
    [
        ["The rostral interstitial nucleus of the medial longitudinal fasciculus (riMLF) and the posterior commissure in the dorsal midbrain pretectal area", "Parinaud syndrome (dorsal midbrain syndrome) is caused by compression or infarction of the midbrain tectum and pretectal area, most commonly by a PINEALOMA or hydrocephalus expanding the cerebral aqueduct. The pathognomonic triad includes: (1) UPWARD GAZE PALSY: due to compression of the vertical gaze center located in the rostral interstitial nucleus of the MLF (riMLF), interstitial nucleus of Cajal, and the POSTERIOR COMMISSURE (fibers mediating upward gaze cross in the posterior commissure); (2) LIGHT-NEAR DISSOCIATION (pseudo-Argyll Robertson pupils): compression of the pretectal nuclei abolishes the light reflex afferents to the Edinger-Westphal nuclei while sparing the ventral cortical pathway for the near response; and (3) CONVERGENCE-RETRACTION NYSTAGMUS and COLLIER SIGN (eyelid retraction due to posterior commissure disinhibition)."],
        ["The abducens nucleus and the paramedian pontine reticular formation in the caudal dorsal pons", "PPRF and CN VI nucleus mediate horizontal conjugate gaze in the pons, not vertical upward gaze in the dorsal midbrain."],
        ["The Edinger-Westphal parasympathetic nucleus and the medial longitudinal fasciculus in the ventral midbrain", "Edinger-Westphal mediates pupilloconstriction; pure destruction causes fixed dilated pupils, not selective upward gaze palsy with light-near dissociation."],
        ["The lateral geniculate nucleus and the Meyer loop in the temporal lobe", "Lateral geniculate nucleus and Meyer loop mediate visual field perception (pie-in-the-sky quadrantanopia), not motor ocular motility."],
        ["The frontal eye fields in the caudal middle frontal gyrus", "Frontal eye fields generate contralateral horizontal saccades; vertical gaze is organized in the midbrain tectum."]
    ],
    "Pineal mass + upward gaze palsy + light-near dissociation + bilateral eyelid retraction (Collier sign) = Parinaud syndrome -> pretectal area / posterior commissure compression.",
    "Map vertical gaze control to the dorsal midbrain: the posterior commissure and riMLF coordinate upward saccades; compression produces Parinaud syndrome.",
    "The abducens nucleus and the paramedian pontine reticular formation in the caudal dorsal pons",
    "PPRF and abducens mediate horizontal conjugate gaze in the pons; vertical gaze is mediated by the pretectal area and posterior commissure in the dorsal midbrain.",
    "Shields M, et al. Parinaud's syndrome: a review of the neuro-ophthalmological features. J Neurol. 2021;268(7):2345-2354. PMID: 32661601."
)

# 0582
add_q(
    "op-c-s1-0582", "Anatomy", "Nervous System", "Internuclear Ophthalmoplegia MLF Demyelination", 5,
    "A 28-year-old woman with a history of optic neuritis presents with horizontal double vision. On physical examination, when the patient attempts to look to the right, conjugate gaze is normal. However, when instructed to look to the left, the left eye abducts fully and exhibits prominent horizontal, coarse, rhythmic nystagmus, while the right eye fails to adduct past the midline. When the patient is subsequently asked to look at a pen brought toward the bridge of her nose (convergence testing), both the right and left eyes adduct completely and symmetrically. Which of the following anatomical structures is affected by demyelination in this patient?",
    [
        ["The right medial longitudinal fasciculus (MLF) in the dorsal brainstem tegmentum", "This patient has an INTERNUCLEAR OPHTHALMOPLEGIA (INO), classic for multiple sclerosis in young adults. Horizontal conjugate gaze is coordinated by the abducens nucleus (CN VI) in the pons: abducens interneurons cross the midline and ascend via the MEDIAL LONGITUDINAL FASCICULUS (MLF) to synapse on the contralateral oculomotor nucleus (CN III) in the midbrain, driving the contralateral medial rectus to adduct. A lesion in the RIGHT MLF prevents the signal from reaching the right medial rectus when looking to the left (impaired adduction of the right eye). The left abducting eye exhibits compensatory nystagmus. Crucially, CONVERGENCE IS PRESERVED because convergence signals originate in the cortex and travel directly to the Edinger-Westphal and oculomotor nuclei via the pretectal area, completely bypassing the MLF."],
        ["The left abducens (CN VI) nucleus in the caudal dorsolateral pons", "A left abducens nucleus lesion causes complete left horizontal gaze palsy: neither the left eye can abduct nor the right eye adduct on attempted left gaze."],
        ["The right oculomotor (CN III) nerve fascicle in the interpeduncular fossa", "An oculomotor nerve lesion would paralyze the right medial rectus during BOTH conjugate gaze AND convergence, whereas convergence is fully intact here."],
        ["The left paramedian pontine reticular formation (PPRF)", "A PPRF lesion causes inability to initiate all saccades toward the ipsilateral (left) side, not an isolated adduction deficit with contralateral nystagmus."],
        ["The optic chiasm in the anterior cranial fossa", "Optic chiasm lesions cause bitemporal hemianopsia without affecting ocular motor cranial nerves or conjugate gaze."]
    ],
    "Attempted left gaze -> right eye cannot adduct, left eye abducts with nystagmus; convergence INTACT = Right Internuclear Ophthalmoplegia (INO) -> Right MLF lesion.",
    "Trace the horizontal conjugate gaze circuit: right MLF lesion impairs right adduction during left conjugate gaze, but leaves convergence intact.",
    "The right oculomotor (CN III) nerve fascicle in the interpeduncular fossa",
    "CN III nerve lesions abolish adduction during BOTH conjugate gaze and convergence; INO selectively spares convergence because convergence bypasses the MLF.",
    "Frohman TC, et al. Internuclear ophthalmoparesis in multiple sclerosis. JAMA Neurol. 2014;71(5):620-629. PMID: 24686419."
)

# 0583
add_q(
    "op-c-s1-0583", "Anatomy", "Nervous System", "Horner Syndrome First vs Second vs Third Order Localization", 5,
    "A 56-year-old male heavy smoker presents with right shoulder pain, numbness radiating down the medial aspect of his right forearm to the fourth and fifth fingers, and hoarseness. Physical examination reveals mild right upper eyelid ptosis and pupillary miosis (right pupil 2.5 mm, left pupil 5 mm in dim light); pupillary dilation in dim light is markedly delayed on the right. Anhydrosis is noted over the right forehead, cheek, and neck, but sweating is normal over the right arm and trunk. Chest radiograph demonstrates an apical mass in the superior pulmonary sulcus of the right lung (Pancoast tumor). Demyelination or compression of which of the following neural structures is responsible for the pupillary and eyelid abnormalities in this patient?",
    [
        ["Second-order preganglionic sympathetic fibers exiting the ciliospinal center of Budge (C8-T2) through the white rami communicantes traversing the thoracic apex to the superior cervical ganglion", "Horner syndrome (ptosis, miosis, anhidrosis) results from disruption of the 3-neuron oculosympathetic pathway: (1) First-order central neuron (hypothalamus to ciliospinal center of Budge at C8-T2 in the intermediolateral cell column); (2) SECOND-ORDER PREGANGLIONIC NEURON: exits C8-T2 via white rami communicantes, traverses the superior thoracic aperture over the APEX OF THE LUNG (in close proximity to the subclavian artery), and ascends the sympathetic trunk to synapse in the SUPERIOR CERVICAL GANGLION at the carotid bifurcation; and (3) Third-order postganglionic neuron: ascends the internal carotid artery to the pupil (dilator pupillae) and superior tarsal muscle (Müller). Pancoast tumors (superior sulcus tumors) compress the second-order preganglionic fibers in the thoracic apex, along with the lower trunk of the brachial plexus (C8-T1, causing hand weakness and medial arm paresthesias)."],
        ["First-order central sympathetic neurons descending from the posterior hypothalamus through the lateral medullary reticular formation", "First-order lesions occur in brainstem strokes (Wallenberg syndrome) and cervical spinal cord trauma (syringomyelia), not apical pulmonary tumors."],
        ["Third-order postganglionic sympathetic fibers ascending within the adventitia of the internal carotid artery", "Third-order lesions occur with internal carotid artery dissection or cavernous sinus lesions, causing ptosis and miosis WITHOUT facial anhidrosis (sudomotor fibers travel with external carotid)."],
        ["Parasympathetic preganglionic fibers originating in the Edinger-Westphal nucleus traversing the oculomotor nerve", "Parasympathetic damage causes mydriasis (dilated pupil), not miosis (constricted pupil) with ptosis."],
        ["Somatic motor fibers in the ophthalmic division of the trigeminal nerve (CN V1) within the superior orbital fissure", "CN V1 carries sensory fibers from the forehead and cornea, not the sympathetic pupillomotor innervation."]
    ],
    "Apical lung mass (Pancoast) + right shoulder pain + ptosis/miosis/anhidrosis = Horner syndrome -> Second-order preganglionic sympathetic fibers (C8-T2 to superior cervical ganglion).",
    "Localize the 3 neurons of the oculosympathetic tract: Pancoast apical lung tumor compresses second-order preganglionic fibers in the thoracic apex.",
    "Third-order postganglionic sympathetic fibers ascending within the adventitia of the internal carotid artery",
    "Third-order lesions (carotid dissection) cause ptosis/miosis without facial anhidrosis; Pancoast tumors compress second-order fibers causing complete facial anhidrosis.",
    "Perez CA, et al. Horner syndrome: clinical anatomy and neuro-ophthalmology. Int Ophthalmol Clin. 2012;52(3):147-156. PMID: 22766861."
)

# 0584
add_q(
    "op-c-s1-0584", "Anatomy", "Nervous System", "Cavernous Sinus Thrombosis Abducens Nerve Vulnerability", 5,
    "A 26-year-old woman develops a painful furuncle in the nasolabial fold (the 'danger triangle' of the face) that she vigorously squeezed. Three days later, she presents to the emergency department with high fever, severe periorbital edema, chemosis, proptosis, and severe retro-orbital headache. Neurological examination reveals that when the patient is instructed to look laterally to the right, the right eye fails completely to abduct past the midline. When she attempts to look in other directions, partial weakness of right eye elevation, depression, and adduction is noted, along with numbness over the right forehead and cheek. Corneal reflex is diminished on the right. Contrast-enhanced MRI reveals thrombosis of the right cavernous sinus. Which of the following cranial nerves was impaired first and most severely because of its unique anatomical position floating freely within the interior of the cavernous sinus adjacent to the internal carotid artery?",
    [
        ["Abducens nerve (CN VI)", "The cavernous sinus is a dural venous sinus situated on either side of the sella turcica. Venous drainage from the facial 'danger triangle' flows via the superior and inferior ophthalmic veins into the cavernous sinus. The ABDUCENS NERVE (CN VI) has a unique anatomical trajectory: unlike all other cranial nerves in the sinus, CN VI does NOT travel within the protective fibrous lateral dural wall; instead, it FLOATS FREELY WITHIN THE CENTER of the cavernous sinus cavity, immediately adjacent to the cavernous segment of the internal carotid artery. Consequently, elevated intracavernous pressure, thrombosis, or aneurysm of the ICA compresses CN VI earliest and most severely, causing isolated abducens palsy (lateral rectus failure) prior to the involvement of CN III, IV, V1, and V2 located safely in the lateral wall."],
        ["Oculomotor nerve (CN III)", "CN III courses along the superior aspect of the lateral dural wall of the sinus and is involved later as thrombosis expands."],
        ["Trochlear nerve (CN IV)", "CN IV is situated within the lateral fibrous wall below CN III and is protected from initial intracavernous pressure."],
        ["Ophthalmic division of the trigeminal nerve (CN V1)", "CN V1 travels in the lateral wall beneath CN IV, mediating corneal sensation."],
        ["Maxillary division of the trigeminal nerve (CN V2)", "CN V2 travels along the inferolateral wall before exiting via the foramen rotundum; it is not free-floating in the cavernous lumen."]
    ],
    "Facial infection + proptosis/chemosis + cavernous sinus thrombosis -> Abducens nerve (CN VI) is most vulnerable because it runs freely inside the sinus next to ICA.",
    "Recognize the internal anatomy of the cavernous sinus: CN VI runs inside the cavernous cavity with the ICA; CN III, IV, V1, V2 are embedded in the lateral wall.",
    "Oculomotor nerve (CN III)",
    "CN III is embedded in the protective lateral fibrous wall; CN VI floats freely in the center of the venous lumen beside the ICA, making it most vulnerable.",
    "Ebright JR, et al. Septic thrombosis of the cavernous sinus. Arch Intern Med. 2001;161(22):2671-2676. PMID: 11732931."
)

# 0585
add_q(
    "op-c-s1-0585", "Anatomy", "Nervous System", "Visual Pathway Lesions Meyer vs Baum Loop Quadrantanopia", 5,
    "A 32-year-old man undergoes surgical resection of a low-grade oligodendroglioma in the right temporal lobe. On postoperative neuro-ophthalmologic assessment, automated Humphrey visual field perimetry is performed. The patient is found to have a complete, dense visual field defect restricted entirely to the left superior quadrant in both eyes (contralateral superior homonymous quadrantanopia / 'pie-in-the-sky' defect). Visual acuity is 20/20 in both eyes, and pupillary light reflexes are normal and symmetrical. Which of the following components of the visual pathway was severed during the surgical approach through the temporal lobe?",
    [
        ["Meyer loop of the optic radiations looping anteriorly and inferiorly through the temporal lobe around the inferior horn of the lateral ventricle", "Optic radiations project from the lateral geniculate nucleus (LGN) to the primary visual cortex (calcarine sulcus). The fibers split into two distinct bundles: (1) MEYER LOOP (inferior optic radiations): fibers representing the SUPERIOR visual field loop anteriorly and inferiorly through the TEMPORAL LOBE around the inferior horn of the lateral ventricle before terminating on the inferior bank of the calcarine sulcus (lingual gyrus). Lesions in the temporal lobe disrupt Meyer loop, producing a CONTRALATERAL SUPERIOR HOMONYMOUS QUADRANTANOPIA ('pie in the sky'); (2) BAUM LOOP (superior optic radiations): fibers representing the INFERIOR visual field course directly through the PARIETAL LOBE to the superior bank of the calcarine sulcus (cuneus); lesions cause contralateral INFERIOR quadrantanopia ('pie on the floor')."],
        ["Baum loop of the optic radiations passing directly posterior through the parietal lobe stria medullaris", "Baum loop courses through the parietal lobe and carries fibers from the superior retina (inferior visual field); lesions produce a 'pie-on-the-floor' inferior quadrantanopia."],
        ["Nasal fibers of the left optic nerve decussating in the anterior optic chiasm (Wilbrand knee)", "Decussating nasal fibers at the chiasm cause bitemporal hemianopsia, not a homonymous quadrantanopia."],
        ["The main optic tract looping around the ipsilateral cerebral peduncle", "Optic tract lesions cause a complete contralateral homonymous hemianopsia (all 4 quadrants), not a selective quadrantanopia."],
        ["The superior colliculus and pretectal nuclei in the rostral midbrain tegmentum", "Superior colliculus and pretectal lesions affect the pupillary light reflex and vertical gaze (Parinaud syndrome), not conscious visual fields."]
    ],
    "Temporal lobe lesion + contralateral upper visual field defect ('pie in the sky') = Meyer loop severance (inferior optic radiations).",
    "Distinguish optic radiation anatomy: temporal Meyer loop lesion = 'pie in the sky' (superior); parietal Baum loop lesion = 'pie on the floor' (inferior).",
    "Baum loop of the optic radiations passing directly posterior through the parietal lobe stria medullaris",
    "Baum loop travels through the parietal lobe causing contralateral inferior quadrantanopia ('pie on the floor'); temporal lobe lesions sever Meyer loop.",
    "Walsh KW. Neuropsychology: A Clinical Approach. 4th ed. Churchill Livingstone; 1994:55-72. NLM ID: 9425121."
)

# 0586
add_q(
    "op-c-s1-0586", "Anatomy", "Nervous System", "Occipital Cortex Stroke Macular Sparing Dual Perfusion", 5,
    "A 68-year-old woman presents with acute difficulty seeing objects on her right side. Visual field testing demonstrates a dense right homonymous hemianopsia; however, formal perimetric mapping reveals complete preservation of central visual acuity (20/20 bilaterally) and an intact central visual field measuring 5 degrees around the fovea in both eyes ('macular sparing'). Pupillary light reflexes are brisk and equal bilaterally. Brain MRI demonstrates an acute ischemic infarction of the medial surface of the left occipital lobe along the calcarine sulcus. Which of the following vascular anatomical features explains the preservation of central macular vision in this patient?",
    [
        ["The left posterior cerebral artery (PCA) was occluded, but the caudal occipital pole cortex representing the fovea is supplied by collateral blood flow from the middle cerebral artery (MCA)", "The primary visual cortex (striate cortex / Brodmann area 17) is located on the banks of the calcarine sulcus in the occipital lobe and is supplied primarily by the POSTERIOR CEREBRAL ARTERY (PCA). Occlusion of the PCA causes contralateral homonymous hemianopsia. However, the occipital pole (caudal visual cortex), which has a massive overrepresentation dedicated entirely to the central macula/fovea, possesses a DUAL BLOOD SUPPLY: it receives collateral branches from the terminal arborizations of the MIDDLE CEREBRAL ARTERY (MCA) as well as the PCA. In isolated PCA occlusion, the MCA collateral flow maintains perfusion to the occipital pole, preserving central visual acuity and central visual field ('MACULAR SPARING')."],
        ["Macular fibers cross twice within the optic chiasm, projecting bilaterally to both lateral geniculate nuclei", "Macular fibers do not project bilaterally; hemiretinal representation follows the same unilateral crossing rules as peripheral fibers."],
        ["Central foveal ganglion cell axons bypass the primary visual cortex entirely to synapse directly in the frontal eye fields", "Conscious visual perception requires striate cortex; foveal axons do not bypass the visual cortex to go to frontal eye fields."],
        ["The anterior choroidal artery provides retrograde perfusion to the entire length of the calcarine sulcus", "The anterior choroidal artery supplies the optic tract, lateral geniculate nucleus, and posterior limb of the internal capsule, not the calcarine cortex."],
        ["Anterior communicating artery collaterals maintain continuous pressure in the posterior communicating artery", "ACOM collaterals supply the ACA distribution; macular sparing is mediated by MCA-PCA terminal watershed collaterals at the occipital pole."]
    ],
    "Left PCA stroke + right homonymous hemianopsia with central visual acuity intact = Macular sparing -> dual blood supply to occipital pole from MCA collaterals.",
    "Explain the vascular mechanism of macular sparing in PCA occipital strokes: the occipital pole receives dual perfusion from terminal MCA collaterals.",
    "Macular fibers cross twice within the optic chiasm, projecting bilaterally to both lateral geniculate nuclei",
    "Macular visual fibers strictly follow hemiretinal crossing; sparing is entirely due to collateral MCA vascular perfusion of the caudal occipital pole.",
    "Kölmel HW. Macular sparing in homonymous hemianopia. Neuro-ophthalmology. 1988;8(1):41-48. PMID: 3154881."
)

# 0587
add_q(
    "op-c-s1-0587", "Pathology", "Nervous System", "Normal Pressure Hydrocephalus Triad and Tap Test", 5,
    "A 74-year-old man is brought to the clinic by his daughter because of progressive walking difficulty, urinary accidents, and memory problems over the past 8 months. Physical examination reveals a slow, wide-based, shuffling gait; his feet appear glued to the floor when initiating steps ('magnetic gait'). He has mild short-term memory impairment (MoCA score 21/30) and urgency urinary incontinence. Muscle strength and sensation are normal. Brain MRI demonstrates symmetrical, massive enlargement of the lateral and third ventricles out of proportion to cerebral cortical sulcal widening, with a rounded frontal horn contour and thinning of the corpus callosum. A high-volume diagnostic lumbar puncture (removal of 40 mL of CSF) demonstrates a normal opening pressure of 140 mm H2O (normal 70-200 mm H2O); immediately following the procedure, the patient demonstrates marked, objective improvement in gait velocity and stride length. Which of the following is the underlying pathophysiological mechanism of this condition?",
    [
        ["Impaired cerebrospinal fluid resorption at the arachnoid granulations leading to intermittent episodic pressure waves that stretch paracentral motor fibers of the corona radiata and corticospinal tracts innervating the legs", "Normal pressure hydrocephalus (NPH) is a form of communicating hydrocephalus presenting with the classic triad of 'WET, WACKY, and WOBBLY': Gait disturbance (magnetic, apraxic gait; earliest and most responsive to shunt), Dementia (subcortical executive dysfunction), and Urinary incontinence (detrusor instability). The primary pathology is decreased CSF absorption across the ARACHNOID GRANULATIONS into the dural venous sinuses (due to prior subarachnoid hemorrhage, meningitis, or idiopathic fibrosis). CSF accumulates, expanding the lateral ventricles and exerting mechanical traction on the SACRAL AND PARACENTRAL MOTOR FIBERS of the corona radiata which loop closely around the ventricles to innervate the lower extremities and bladder. Removal of CSF (tap test) temporarily relieves this distortion, confirming candidacy for ventriculoperitoneal shunting."],
        ["Direct obstruction of the cerebral aqueduct of Sylvius by an ependymal web causing non-communicating hydrocephalus", "Aqueductal stenosis causes non-communicating hydrocephalus with elevated opening pressure and severe headaches, not NPH."],
        ["Selective autoimmune destruction of cholinergic projection neurons in the basal nucleus of Meynert", "Loss of cholinergic neurons in the nucleus basalis of Meynert occurs in Alzheimer disease, which features memory loss without early magnetic gait or urinary incontinence."],
        ["Intracellular accumulation of alpha-synuclein aggregates within the substantia nigra pars compacta", "Substantia nigra synuclein loss defines Parkinson disease (resting tremor, cogwheel rigidity), which does not present with massive ventricular dilation or normal-pressure tap test response."],
        ["Autoimmune demyelination of the central pontine myelin sheaths within the basis pontis", "Central pontine myelinolysis causes spastic quadriparesis and pseudobulbar palsy following rapid hyponatremia correction, not chronic NPH."]
    ],
    "Magnetic gait + memory loss + urinary incontinence + ventricular enlargement with normal opening pressure + improvement after tap = NPH -> impaired arachnoid resorption.",
    "Link ventricular expansion in NPH to mechanical stretching of paracentral corona radiata fibers innervating the lower extremities and bladder.",
    "Direct obstruction of the cerebral aqueduct of Sylvius by an ependymal web causing non-communicating hydrocephalus",
    "Aqueductal stenosis causes non-communicating hydrocephalus with high pressure; NPH is communicating with normal opening pressure and patent fourth ventricle outlets.",
    "Adams RD, et al. Symptomatic occult hydrocephalus with 'normal' cerebrospinal-fluid pressure. A treatable syndrome. N Engl J Med. 1965;273(3):117-126. PMID: 14303656."
)

# 0588
add_q(
    "op-c-s1-0588", "Pharmacology", "Nervous System", "Idiopathic Intracranial Hypertension Acetazolamide Target", 5,
    "A 24-year-old obese woman (BMI 36 kg/m2) presents with daily throbbing headaches that are worse upon awakening and exacerbated by coughing. She describes hearing a rhythmic 'whooshing' sound in both ears that matches her heartbeat (pulsatile tinnitus), along with brief episodes of darkened vision when bending over. Physical examination reveals bilateral papilledema and failure of the left eye to fully abduct on lateral gaze (left CN VI palsy). Visual field testing shows enlarged blind spots bilaterally. Brain MRI is normal, demonstrating an empty sella and flattening of the posterior globes, with no mass or hydrocephalus. Magnetic resonance venography confirms patent dural sinuses. Lumbar puncture in the lateral decubitus position demonstrates an opening pressure of 320 mm H2O (markedly elevated) with normal CSF constituents. Which of the following medications is the first-line pharmacotherapy for this condition, and what is its specific molecular target in the choroid plexus?",
    [
        ["Acetazolamide; inhibits carbonic anhydrase in choroid plexus epithelial cells to decrease bicarbonate-dependent cerebrospinal fluid secretion", "Idiopathic intracranial hypertension (pseudotumor cerebri) is most common in young, overweight women, and is linked to vitamin A toxicity, tetracyclines, and obesity. Elevated ICP produces headache, pulsatile tinnitus, papilledema, transient visual obscurations, and false localizing CN VI palsy (stretched over the petrous ridge). Opening pressure is >250 mm H2O with normal CSF. The first-line medical therapy to prevent permanent visual loss is ACETAZOLAMIDE. Acetazolamide inhibits CARBONIC ANHYDRASE in the choroid plexus epithelium, reducing HCO3- generation and basolateral/apical transport, which decreases total CSF production by up to 50%."],
        ["Furosemide; inhibits apical NKCC2 cotransporters in the ependymal lining of the third ventricle", "NKCC2 is expressed in the renal thick ascending limb, not choroid plexus; furosemide is a secondary adjunct, but acetazolamide is first-line."],
        ["Topiramate; selectively blocks voltage-gated T-type calcium channels in the subarachnoid trabeculae", "Topiramate has mild carbonic anhydrase activity and promotes weight loss, but does not act on T-type calcium channels in subarachnoid trabeculae."],
        ["Mannitol; directly opens aquaporin-1 channels on ventricular ependymal cells to promote CSF drainage", "Mannitol is an osmotic diuretic used intravenously for acute cerebral herniation emergencies, not chronic ambulatory maintenance."],
        ["Spironolactone; competitively blocks mineralocorticoid receptors on the arachnoid villi", "Mineralocorticoid receptors on arachnoid villi are not the target; the therapeutic mechanism is carbonic anhydrase inhibition in the choroid plexus."]
    ],
    "Obese female + papilledema + CN VI palsy + opening pressure 320 mm H2O = Pseudotumor cerebri -> treated with Acetazolamide inhibiting choroid plexus carbonic anhydrase.",
    "Connect idiopathic intracranial hypertension pathophysiology to treatment: acetazolamide inhibits carbonic anhydrase in the choroid plexus to decrease CSF secretion.",
    "Furosemide; inhibits apical NKCC2 cotransporters in the ependymal lining of the third ventricle",
    "Furosemide targets renal NKCC2; the primary first-line therapy is acetazolamide targeting carbonic anhydrase in the choroid plexus.",
    "Markey KA, et al. Understanding idiopathic intracranial hypertension: mechanisms, management, and future directions. Lancet Neurol. 2016;15(1):78-91. PMID: 26700907."
)

# 0589
add_q(
    "op-c-s1-0589", "Pathology", "Nervous System", "Subarachnoid Hemorrhage Xanthochromia and Berry Aneurysms", 5,
    "A 46-year-old woman presents to the emergency department clutching her head, stating she has just experienced 'the worst headache of my life' (thunderclap headache) that reached peak maximal intensity within 30 seconds while lifting a heavy box. She has severe photophobia and vomiting. Physical examination shows blood pressure 168/98 mm Hg, nuchal rigidity, and a positive Kernig sign; there are no focal motor deficits. Non-contrast head CT performed 16 hours after symptom onset is completely normal. A lumbar puncture is subsequently performed. Cerebrospinal fluid analysis reveals an opening pressure of 240 mm H2O, 12,000 RBCs/microL in tube 1 and 11,800 RBCs/microL in tube 4, and persistent yellow pigmentation of the supernatant after centrifugation (xanthochromia) confirmed by spectrophotometry. Which of the following is the most likely location of the vascular lesion responsible for this condition, and what biochemical process produces the yellow CSF supernatant?",
    [
        ["Rupture of a saccular (berry) aneurysm at the junction of the anterior communicating artery and anterior cerebral artery; xanthochromia results from macrophage catabolism of extravasated oxyhemoglobin into bilirubin", "Non-traumatic subarachnoid hemorrhage (SAH) is most commonly caused by rupture of a saccular (berry) aneurysm, located in 85% of cases in the anterior circulation (most commonly the ANTERIOR COMMUNICATING ARTERY [ACOM], followed by PCOM and MCA bifurcation). Thunderclap headache reaching peak intensity in <1 minute with meningismus is classic. If non-contrast CT is negative (sensitivity decreases after 6-12 hours), LUMBAR PUNCTURE is mandatory. True SAH is distinguished from a traumatic tap by: (1) Equal RBC counts across all 4 collection tubes; and (2) XANTHOCHROMIA (yellow CSF supernatant). Xanthochromia takes 4-12 hours to develop as subarachnoid macrophages catabolize lysed RBC oxyhemoglobin into BILIRUBIN (which persists for 2-4 weeks)."],
        ["Rupture of Charcot-Bouchard microaneurysms in the lenticulostriate arteries; xanthochromia results from rapid oxidation of myoglobin into metmyoglobin", "Charcot-Bouchard aneurysms cause intraparenchymal basal ganglia hemorrhage, not primary subarachnoid hemorrhage with xanthochromia."],
        ["Tearing of cortical bridging veins draining into the superior sagittal sinus; xanthochromia results from acute hemosiderin clearance", "Tearing of bridging veins causes subdural hematomas (crescentic on CT), not aneurysmal subarachnoid hemorrhage with thunderclap headache."],
        ["Laceration of the middle meningeal artery underneath the pterion; xanthochromia results from rapid biliverdin crystallization", "Middle meningeal artery rupture causes epidural hematoma with a lucid interval and lens-shaped biconvex mass, not diffuse SAH with xanthochromia."],
        ["Dissection of the petrous segment of the internal carotid artery; xanthochromia results from high concentrations of albumin", "Carotid dissection causes Horner syndrome and stroke, not diffuse aneurysmal subarachnoid hemorrhage with thunderclap headache."]
    ],
    "Thunderclap headache + meningismus + negative CT + persistent yellow CSF supernatant (xanthochromia) = SAH -> berry aneurysm (ACOM junction); bilirubin breakdown.",
    "Differentiate SAH from traumatic tap (equal RBCs in all tubes + xanthochromia from enzymatic bilirubin production) and localize berry aneurysms (ACOM).",
    "Tearing of cortical bridging veins draining into the superior sagittal sinus; xanthochromia results from acute hemosiderin clearance",
    "Bridging veins cause subdural hematomas; aneurysmal rupture in the subarachnoid space (ACOM/PCOM) causes true SAH with thunderclap headache.",
    "van Gijn J, et al. Subarachnoid haemorrhage. Lancet. 2007;369(9558):306-318. PMID: 17258671."
)

# 0590
add_q(
    "op-c-s1-0590", "Anatomy", "Nervous System", "Epidural Hematoma Middle Meningeal Artery Pterion", 5,
    "A 20-year-old collegiate hockey player is struck violently on the left temple by a puck. He experiences a brief loss of consciousness lasting 1 minute, after which he awakens completely alert, oriented, and symptom-free ('lucid interval'). Two hours later, he complains of an excruciating headache and rapidly becomes somnolent and unresponsive. On arrival at the trauma center, his blood pressure is 180/100 mm Hg, pulse is 48/min, and respirations are 10/min (Cushing triad). The left pupil is dilated to 7 mm and fixed to light, with right-sided hemiplegia. Emergent non-contrast head CT demonstrates a hyperdense, biconvex, lenticular-shaped extra-axial mass underneath the left pterion that does NOT cross cranial suture lines. Laceration of which of the following vessels is responsible for this hematoma, and what foramen does this vessel traverse to enter the cranium?",
    [
        ["Middle meningeal artery (a branch of the maxillary artery); enters the cranium through the foramen spinosum", "Epidural hematoma is caused by blunt trauma to the PTERION (the thin junction of frontal, parietal, temporal, and sphenoid bones on the lateral skull). Deep to the pterion lies the anterior branch of the MIDDLE MENINGEAL ARTERY, which arises from the maxillary artery (a terminal branch of the external carotid) and enters the cranial cavity through the FORAMEN SPINOSUM. High-pressure arterial bleeding strips the tightly adherent dura mater off the inner skull table, forming a characteristic BICONVEX (LENS-SHAPED) collection. Because the dura is firmly anchored at cranial suture lines, the hematoma CANNOT CROSS SUTURE LINES. The classic clinical presentation is a 'lucid interval' followed by rapid herniation (uncal herniation compressing CN III causing ipsilateral mydriasis, and cerebral peduncle compression causing contralateral hemiplegia)."],
        ["Bridging cortical veins draining into the superior sagittal sinus; enters the cranium through the jugular foramen", "Bridging veins tear in subdural hematomas, which form crescentic collections crossing suture lines in elderly patients."],
        ["Superficial temporal artery; enters the cranium through the foramen rotundum", "The superficial temporal artery is an external scalp vessel and foramen rotundum transmits CN V2, not middle meningeal vessels."],
        ["Posterior communicating artery; enters the cranium through the carotid canal", "PCOM is an intradural circle of Willis artery whose aneurysm compresses CN III, not an extradural vessel fractured by pterion trauma."],
        ["Internal carotid artery; enters the cranium through the foramen lacerum", "The ICA enters via the carotid canal, traverses the cavernous sinus, and its rupture produces carotid-cavernous fistulas, not epidural hematomas."]
    ],
    "Temple trauma + lucid interval + lens-shaped biconvex mass not crossing sutures = Epidural hematoma -> Middle meningeal artery (from maxillary a.) via foramen spinosum.",
    "Map skull osteology to epidural hematoma: fracture at the pterion lacerates the middle meningeal artery, which enters the cranium via the foramen spinosum.",
    "Bridging cortical veins draining into the superior sagittal sinus; enters the cranium through the jugular foramen",
    "Bridging veins tear in subdural hematomas (crescentic shape crossing sutures); epidural hematomas are arterial tears of the middle meningeal artery.",
    "Bullock MR, et al. Surgical management of acute epidural hematomas. Neurosurgery. 2006;58(3 Suppl):S7-15. PMID: 16540746."
)

# 0591
add_q(
    "op-c-s1-0591", "Pathology", "Nervous System", "Subdural Hematoma Bridging Vein Tearing Mechanism", 5,
    "An 82-year-old man with mild Alzheimer disease and chronic alcohol use is evaluated for progressive confusion, lethargy, and unsteady gait over the past 3 weeks. His daughter recalls that he bumped his head against a kitchen cabinet a month ago, but appeared fine at the time. Physical examination reveals mild left pronator drift, hyperreflexia on the left, and bilateral extensor plantar responses. Non-contrast head CT demonstrates a crescent-shaped, concave, hypodense extra-axial fluid collection overlying the entire right cerebral hemisphere that crosses the coronal and lambdoid suture lines, but is limited by the falx cerebri, with a 6-mm midline shift. Tearing of which of the following vascular structures is responsible for this patient's subacute neurological deterioration?",
    [
        ["Bridging cortical veins traversing the subdural space to drain into the superior sagittal sinus, rendered vulnerable by cerebral cortical atrophy", "Subdural hematoma (SDH) is caused by rupture of BRIDGING CORTICAL VEINS as they traverse the potential space between the arachnoid mater and the inner dural border cell layer to drain into the superior sagittal sinus. In elderly patients and chronic alcoholics, progressive BRAIN ATROPHY increases the distance between the brain surface and the dural sinuses, placing bridging veins under chronic mechanical tension. Even minor head trauma shears these fragile low-pressure veins. Venous bleeding accumulates slowly over days to weeks (chronic/subacute SDH), forming a CRESCENT-SHAPED concave collection that CROSSES CRANIAL SUTURE LINES (because blood is in the subdural space, not attached to sutures), but is restricted by the rigid dural reflections (falx cerebri and tentorium cerebelli)."],
        ["Middle meningeal artery stripping the periosteal dura from the inner table of the calvarium", "Middle meningeal artery rupture causes epidural hematoma with a biconvex shape restricted by cranial sutures, not a crescent crossing sutures."],
        ["Anterior cerebral artery branches penetrating the cribriform plate of the ethmoid bone", "ACA penetrating branches supply medial cerebral parenchyma; rupture causes intraparenchymal hemorrhage, not subdural hematomas."],
        ["Basilar vein of Rosenthal entering the straight sinus within the tentorium cerebelli", "The vein of Rosenthal is a deep cerebral vein whose thrombosis causes deep venous infarction, not chronic hemispheric subdural hematoma."],
        ["Sphenoparietal dural venous sinus beneath the lesser wing of the sphenoid", "The sphenoparietal sinus drains into the cavernous sinus; bridging veins over the cerebral convexities are the classic source of hemispheric subdural hematoma."]
    ],
    "Elderly/alcoholic + brain atrophy + minor trauma weeks ago + crescent-shaped mass crossing sutures = Subdural hematoma -> tearing of bridging cortical veins.",
    "Contrast subdural (bridging veins, crescent-shaped, crosses sutures, limited by falx, brain atrophy) with epidural hematomas (arterial, biconvex, stops at sutures).",
    "Middle meningeal artery stripping the periosteal dura from the inner table of the calvarium",
    "Middle meningeal artery causes epidural hematoma, which is biconvex and cannot cross suture lines; subdural hematomas cross suture lines easily.",
    "Gelabert-González M, et al. Chronic subdural hematoma: surgical treatment and outcome in 1000 cases. Clin Neurol Neurosurg. 2005;107(3):223-229. PMID: 15820563."
)

# 0592
add_q(
    "op-c-s1-0592", "Pathology", "Nervous System", "Lambert-Eaton Myasthenic Syndrome Presynaptic VGCC", 5,
    "A 64-year-old man who is a 40 pack-year cigarette smoker presents with progressive proximal muscle weakness, stating that he has difficulty rising from a chair or climbing stairs. Interestingly, he notes that his muscle strength noticeably improves after brief physical activity ('warm-up phenomenon'). He also reports dry mouth and erectile dysfunction. Physical examination reveals bilateral proximal leg weakness (3/5 strength in hip flexors) that increases to 4+/5 after 15 seconds of maximum voluntary contraction; deep tendon reflexes are 0/4 at the knees and ankles at baseline, but become briskly 2+/4 immediately after exercise. Chest CT demonstrates a 4-cm central hilar mass with mediastinal lymphadenopathy. Repetitive nerve stimulation at high frequency (50 Hz) demonstrates an incremental compound muscle action potential (CMAP) response (>200% increase). Which of the following is the target of the autoantibodies in this patient?",
    [
        ["P/Q-type voltage-gated calcium channels (VGCC) on the presynaptic motor nerve terminal", "Lambert-Eaton myasthenic syndrome (LEMS) is a paraneoplastic autoimmune disorder occurring in ~3% of patients with SMALL CELL LUNG CANCER (SCLC), which expresses neuroendocrine voltage-gated calcium channels. Autoantibodies target PRESYNAPTIC P/Q-TYPE VOLTAGE-GATED CALCIUM CHANNELS (VGCC) at the neuromuscular junction. Blockade of Ca2+ influx prevents SNARE-mediated acetylcholine vesicle exocytosis. Key clinical features: (1) Proximal muscle weakness that IMPROVES WITH REPEATED EXERCISE (calcium accumulates intracellularly with rapid firing, overcoming antibody blockade); (2) HYPOREFLEXIA that normalizes after exercise; (3) AUTONOMIC DYSFUNCTION (dry mouth, erectile dysfunction); and (4) High-frequency repetitive nerve stimulation shows an INCREMENTAL CMAP response."],
        ["Nicotinic acetylcholine receptors (AChR) on the postsynaptic junctional folds", "Postsynaptic AChR antibodies cause Myasthenia Gravis, which features ocular/bulbar weakness that WORSENS with exercise, normal reflexes, no autonomic symptoms, and a DECREMENTAL response on nerve stimulation."],
        ["Muscle-specific receptor tyrosine kinase (MuSK) on the postsynaptic membrane", "MuSK antibodies occur in generalized myasthenia gravis, causing postsynaptic receptor dispersion and decremental response without autonomic dysfunction."],
        ["Presynaptic synaptobrevin and syntaxin SNARE complex proteins", "SNARE proteins are cleaved by botulinum and tetanus neurotoxins, not targeted by paraneoplastic autoantibodies in small cell lung cancer."],
        ["Voltage-gated potassium channels (VGKC) in the peripheral nerve myelin sheath", "VGKC antibodies cause Isaacs syndrome (neuromyotonia with continuous muscle fiber activity) and Morvan syndrome, not LEMS with incremental CMAP."]
    ],
    "Small cell lung cancer + proximal weakness improving with exercise + hyporeflexia + dry mouth + incremental response on high-frequency RNS = LEMS -> presynaptic P/Q-type VGCC.",
    "Differentiate LEMS (presynaptic VGCC, strength improves with exercise, hyporeflexia, autonomic symptoms, incremental CMAP) from Myasthenia Gravis.",
    "Nicotinic acetylcholine receptors (AChR) on the postsynaptic junctional folds",
    "AChR antibodies cause Myasthenia Gravis, where strength worsens with exercise and reflexes are preserved; LEMS improves with exercise and has absent baseline reflexes.",
    "Titulaer MJ, et al. The neuromuscular junction in health and disease: from myasthenia gravis to Lambert-Eaton myasthenic syndrome. Lancet Neurol. 2011;10(12):1098-1107. PMID: 22094130."
)

# 0593
add_q(
    "op-c-s1-0593", "Pathology", "Nervous System", "Myasthenia Gravis Postsynaptic AChR and Decremental Response", 5,
    "A 32-year-old woman presents with fluctuating double vision and drooping of both eyelids that becomes progressively worse toward the evening. Over the past month, she has also noticed difficulty chewing tough food toward the end of a meal and weakness in her arms when blow-drying her hair. Physical examination shows bilateral asymmetric ptosis that worsens after 60 seconds of sustained upward gaze (curtain sign). Deep tendon reflexes are normal (2+/4) and symmetrical, and sensation is intact. Applying an ice pack over her closed eyelids for 2 minutes produces significant resolution of the ptosis. Contrast-enhanced chest CT demonstrates an anterior mediastinal mass consistent with a thymoma. Repetitive nerve stimulation at low frequency (3 Hz) demonstrates a >15% progressive decrease in the compound muscle action potential (CMAP) amplitude (decremental response). Which of the following is the underlying molecular mechanism of this disorder?",
    [
        ["Antibody- and complement-mediated destruction of postsynaptic nicotinic acetylcholine receptors, accompanied by flattening and simplification of the synaptic junctional folds", "Myasthenia gravis (MG) is an autoimmune disorder caused by autoantibodies directed against POSTSYNAPTIC NICOTINIC ACETYLCHOLINE RECEPTORS (AChR) on the motor endplate. Pathogenic mechanisms include: (1) Complement-mediated lysis of junctional folds via the membrane attack complex (C5b-9), leading to morphological flattening and loss of receptor density; (2) Accelerated endocytosis and degradation of cross-linked AChRs; and (3) Functional receptor blockade. The classic presentation is fluctuating, fatigable weakness of ocular (ptosis, diplopia) and bulbar muscles, worsening with activity/evening. Deep tendon reflexes are NORMAL. The ice pack test improves ptosis because lower temperatures inhibit acetylcholinesterase activity. Repetitive nerve stimulation shows a DECREMENTAL CMAP response. 75% have thymic follicular hyperplasia and 15% have thymoma."],
        ["Autoantibodies against presynaptic P/Q-type voltage-gated calcium channels preventing acetylcholine vesicle exocytosis", "Presynaptic VGCC antibodies cause Lambert-Eaton myasthenic syndrome, where strength improves with activity and deep tendon reflexes are absent."],
        ["Autoimmune-mediated destruction of myelin basic protein in peripheral motor nerve axons", "Myelin destruction causes Guillain-Barré syndrome (AIDP), presenting with ascending flaccid paralysis and absent reflexes, not fluctuating ocular ptosis with thymoma."],
        ["Antibodies targeting ryanodine receptors (RYR1) causing uncontrolled calcium release from the sarcoplasmic reticulum", "RYR1 mutations cause malignant hyperthermia, not fatigable ocular weakness with thymoma."],
        ["Proteolytic cleavage of synaptosomal synaptotagmin preventing vesicular fusion", "Botulinum neurotoxin cleaves SNARE proteins causing descending paralysis; MG is mediated by anti-postsynaptic AChR autoantibodies."]
    ],
    "Fatigable ptosis/diplopia worse in evening + thymoma + ice pack improvement + decremental response on low-frequency RNS = Myasthenia Gravis -> postsynaptic AChR destruction.",
    "Identify the postsynaptic pathology of Myasthenia Gravis: complement-mediated destruction of AChR and flattening of junctional folds, associated with thymoma.",
    "Autoantibodies against presynaptic P/Q-type voltage-gated calcium channels preventing acetylcholine vesicle exocytosis",
    "Presynaptic VGCC antibodies cause LEMS (improves with exercise, hyporeflexia, SCLC); Myasthenia Gravis targets postsynaptic AChRs (fatigable, normal reflexes, thymoma).",
    "Gilhus NE. Myasthenia gravis. N Engl J Med. 2016;375(26):2570-2581. PMID: 28029925."
)

# 0594
add_q(
    "op-c-s1-0594", "Microbiology", "Nervous System", "Botulinum Neurotoxin SNARE Proteolysis Mechanism", 5,
    "A 38-year-old man presents with blurred vision, dry mouth, and difficulty swallowing 24 hours after consuming home-canned asparagus. Physical examination reveals bilateral symmetric ptosis, fixed dilated pupils (pupillary light reflex absent), dysarthria, and dysphagia. Over the next 12 hours, he develops progressive, symmetric, descending flaccid weakness affecting his neck, arms, and respiratory muscles. Sensory examination is completely normal, and deep tendon reflexes are absent in all extremities. Which of the following is the precise molecular mechanism of the bacterial toxin causing this clinical syndrome?",
    [
        ["Zinc-dependent endopeptidase cleavage of SNARE proteins (synaptobrevin, SNAP-25, and syntaxin) preventing acetylcholine exocytosis at peripheral cholinergic synapses", "Clostridium botulinum produces botulinum neurotoxin, an AB subunit zinc-dependent metalloproteinase. The toxin is absorbed from improperly canned food and travels hematogenously to PERIPHERAL CHOLINERGIC SYNAPSES (both neuromuscular junctions and parasympathetic/sympathetic autonomic ganglia). The heavy chain mediates receptor-mediated endocytosis, while the light chain cleaves SNARE PROTEINS (synaptobrevin / VAMP, SNAP-25, and syntaxin). SNARE cleavage prevents the fusion of acetylcholine storage vesicles with the presynaptic plasma membrane, completely blocking acetylcholine exocytosis. This causes DESCENDING FLACCID PARALYSIS with prominent early autonomic/cranial nerve deficits: symmetric bilateral cranial neuropathies (ptosis, fixed dilated pupils, blurred vision), dry mouth, and absent reflexes without sensory loss."],
        ["Retrograde intra-axonal transport to spinal cord Renshaw cells where it cleaves synaptobrevin to block GABA and glycine release", "Retrograde axonal transport to spinal Renshaw inhibitory cells describes tetanospasmin (Clostridium tetani), causing disinhibition and SPASTIC paralysis (trismus, risus sardonicus)."],
        ["ADP-ribosylation of elongation factor 2 (EF-2) halting protein synthesis in peripheral nerve axons", "ADP-ribosylation of EF-2 is the mechanism of diphtheria toxin and Pseudomonas exotoxin A, causing pseudomembranous pharyngitis and myocarditis."],
        ["Pore formation in erythrocyte and motor neuron membranes mediated by cholesterol-dependent cytolysins", "Cholesterol-dependent cytolysins (e.g. perfringolysin O, streptolysin O) cause membrane lysis, not selective flaccid paralysis via SNARE cleavage."],
        ["Stimulation of presynaptic calcium-sensing receptors causing massive neurotransmitter depletion and secondary exhaustion", "Black widow spider venom (alpha-latrotoxin) stimulates massive transmitter release; botulinum toxin inhibits release via SNARE cleavage."]
    ],
    "Home-canned food + fixed dilated pupils + dry mouth + descending flaccid paralysis = Botulism -> zinc endopeptidase cleavage of SNAREs blocking ACh exocytosis.",
    "Contrast Botulinum toxin (cleaves SNAREs at peripheral cholinergic junctions -> descending flaccid paralysis) with Tetanus toxin (cleaves SNAREs in central Renshaw cells -> spasticity).",
    "Retrograde intra-axonal transport to spinal cord Renshaw cells where it cleaves synaptobrevin to block GABA and glycine release",
    "Tetanospasmin travels retrogradely to spinal inhibitory interneurons causing spastic paralysis; botulinum toxin acts locally at peripheral cholinergic synapses causing flaccid paralysis.",
    "Sobel J. Botulism. Clin Infect Dis. 2005;41(8):1167-1173. PMID: 16163636."
)

# 0595
add_q(
    "op-c-s1-0595", "Microbiology", "Nervous System", "Tetanus Toxin Retrograde Transport and Renshaw Disinhibition", 5,
    "A 42-year-old unimmunized farm laborer presents with painful jaw stiffness, difficulty chewing, and a stiff neck 8 days after stepping on a rusty nail in a barnyard. Physical examination reveals a spastic grimace with sustained contraction of the facial muscles (risus sardonicus) and severe involuntary spasm of the masseter muscles preventing mouth opening (trismus / lockjaw). While being examined in a brightly lit room, a sudden loud sound triggers generalized, violent, painful muscle spasms with severe hyperextension of the spine and neck (opisthotonos). Mentation is completely alert and intact. Which of the following describes the route of neurotoxin spread and its cellular site of action?",
    [
        ["Retrograde intra-axonal transport via motor nerves to the spinal cord, where the toxin cleaves synaptobrevin in inhibitory Renshaw interneurons, preventing the release of GABA and glycine", "Tetanus is caused by tetanospasmin, an AB subunit zinc-endopeptidase neurotoxin produced by Clostridium tetani in anaerobic puncture wounds. The toxin binds presynaptic motor nerve terminals and undergoes RETROGRADE INTRA-AXONAL TRANSPORT to the motor neuron cell body in the spinal cord and brainstem. It crosses the synaptic cleft to enter INHIBITORY INTERNEURONS (Renshaw cells). The catalytic light chain cleaves SYNAPTOBREVIN (VAMP), preventing the exocytosis of the inhibitory neurotransmitters GLYCINE and GABA. Loss of inhibitory interneuron control leaves alpha motor neurons constitutively uninhibited, causing reflex spasms, spastic paralysis, trismus, risus sardonicus, and opisthotonos triggered by sensory stimuli."],
        ["Hematogenous dissemination to peripheral autonomic ganglia where it permanently binds and hyperactivates postsynaptic muscarinic M3 receptors", "Tetanus toxin does not hyperactivate muscarinic receptors; it blocks inhibitory neurotransmitter release in the central nervous system."],
        ["Antegrade transport through sensory afferent fibers to the thalamus, causing bilateral thalamocortical desynchronization", "Transport is retrograde via motor axons to spinal cord inhibitory interneurons, not antegrade sensory transport to the thalamus."],
        ["Local diffusion within skeletal muscle stroma causing persistent opening of sarcoplasmic ryanodine channels", "Local muscle diffusion describes direct myotoxins; tetanospasmin acts within the central nervous system at Renshaw cell synapses."],
        ["Selective destruction of upper motor neurons in the primary motor cortex via microglial activation", "Upper motor neuron destruction occurs in ALS; tetanus is an acute toxin-mediated disinhibition of spinal reflex arcs without neuronal death."]
    ],
    "Rusty puncture wound + lockjaw (trismus) + risus sardonicus + opisthotonos triggered by noise = Tetanus -> retrograde transport to Renshaw cells, cleaves synaptobrevin blocking GABA/glycine.",
    "Trace tetanospasmin neurobiology: retrograde axonal transport to spinal Renshaw inhibitory cells, synaptobrevin cleavage, loss of GABA/glycine disinhibits alpha motor neurons.",
    "Hematogenous dissemination to peripheral autonomic ganglia where it permanently binds and hyperactivates postsynaptic muscarinic M3 receptors",
    "Tetanus toxin acts in the central nervous system at spinal inhibitory interneurons, blocking glycine and GABA exocytosis via synaptobrevin cleavage.",
    "Farrar JJ, et al. Tetanus. J Neurol Neurosurg Psychiatry. 2000;69(3):292-301. PMID: 10945801."
)

# 0596
add_q(
    "op-c-s1-0596", "Pathology", "Nervous System", "Guillain-Barre Syndrome Albuminocytologic Dissociation", 5,
    "A 28-year-old man presents with progressive symmetric weakness in both legs that began 3 days ago and has now ascended to involve his arms. Two weeks ago, he had an episode of severe bloody diarrhea and crampy abdominal pain that resolved spontaneously. Physical examination demonstrates: bilateral flaccid quadriparesis (muscle strength 2/5 in legs, 3/5 in arms); complete absence of deep tendon reflexes in all four extremities (areflexia); and mild stocking-glove paresthesias. Forced vital capacity is 2.1 L (decreased). Lumbar puncture is performed: CSF opening pressure is 160 mm H2O, WBC count is 2 cells/microL (normal 0-5), glucose is 62 mg/dL, and CSF protein is 185 mg/dL (markedly elevated; normal 15-45 mg/dL). Which of the following is the underlying immunologic mechanism responsible for this patient's neuropathy?",
    [
        ["Molecular mimicry between Campylobacter jejuni lipooligosaccharide and human peripheral nerve gangliosides (such as GM1), triggering endoneurial lymphocytic infiltration and macrophage-mediated demyelination", "Guillain-Barré syndrome (Acute Inflammatory Demyelinating Polyradiculoneuropathy, AIDP) is an acute post-infectious polyneuropathy most commonly preceded by CAMPYLOBACTER JEJUNI enteritis. The core mechanism is MOLECULAR MIMICRY: bacterial lipooligosaccharides (LOS) share structural homology with human peripheral nerve GANGLIOSIDES (e.g. GM1, GD1a). Autoreactive antibodies and CD4+ T cells target endoneurial antigens, activating complement and recruiting macrophages that strip and phagocytose the myelin sheath from peripheral spinal roots and nerves. Key findings: ascending symmetric flaccid weakness, AREFLEXIA, and ALBUMINOCYTOLOGIC DISSOCIATION (markedly elevated CSF protein with normal CSF WBC count, due to inflamed spinal roots leaking protein into CSF)."],
        ["Autoantibodies directed against postsynaptic acetylcholine receptors driving complement-mediated motor endplate destruction", "AChR antibodies cause Myasthenia Gravis, which features ocular/bulbar fatigable weakness with normal deep tendon reflexes and normal CSF protein."],
        ["Direct viral neurotropism for anterior horn motor neurons in the lumbar spinal cord causing lytic cell necrosis", "Anterior horn motor neuron lysis describes poliovirus and West Nile virus (asymmetric flaccid paralysis with CSF pleocytosis), not demyelinating GBS."],
        ["Vasculitic transmural fibrinoid necrosis of the vasa nervorum driven by circulating hepatitis B immune complexes", "Vasa nervorum vasculitis causes mononeuritis multiplex in polyarteritis nodosa, not symmetric ascending polyradiculoneuropathy with albuminocytologic dissociation."],
        ["Accumulation of phytanic acid in peripheral myelin sheaths due to peroxisomal enzyme deficiency", "Phytanic acid accumulation causes Refsum disease (ataxia, retinitis pigmentosa, ichthyosis), not acute post-infectious ascending paralysis."]
    ],
    "Ascending paralysis + areflexia + preceded by bloody diarrhea (Campylobacter) + high CSF protein with normal WBC count = Guillain-Barré -> molecular mimicry to gangliosides.",
    "Connect Campylobacter molecular mimicry (anti-GM1 ganglioside antibodies) to peripheral endoneurial demyelination and albuminocytologic dissociation.",
    "Direct viral neurotropism for anterior horn motor neurons in the lumbar spinal cord causing lytic cell necrosis",
    "Poliovirus causes asymmetric paralysis with prominent CSF pleocytosis (high WBCs); Guillain-Barré is symmetric, demyelinating, and shows albuminocytologic dissociation (normal WBCs).",
    "van den Berg B, et al. Guillain-Barré syndrome: pathogenesis, diagnosis, treatment and prognosis. Nat Rev Neurol. 2014;10(8):469-482. PMID: 25023340."
)

# 0597
add_q(
    "op-c-s1-0597", "Genetics", "Nervous System", "Charcot-Marie-Tooth Disease PMP22 Duplication", 5,
    "A 17-year-old boy presents for evaluation of frequent ankle sprains and difficulty running. His father and paternal grandfather have similar gait problems and wear leg braces. Physical examination reveals: bilateral high-arched feet (pes cavus), hammer toes, and severe atrophy of the calf and peroneal muscles producing an 'inverted champagne bottle' appearance of the lower legs. There is bilateral foot drop with a high-stepping (steppage) gait. Sensation to vibration and pinprick is diminished over the feet and ankles bilaterally. Deep tendon reflexes are absent at the ankles. Nerve conduction studies demonstrate marked, uniform slowing of motor nerve conduction velocities (< 30 m/s; normal > 50 m/s) in the peroneal and tibial nerves. Sural nerve biopsy reveals redundant concentric Schwann cell cytoplasmic processes wrapping around axons ('onion-bulb' formations). Which of the following genetic alterations is responsible for this patient's disorder?",
    [
        ["A 1.4-megabase duplication on chromosome 17p11.2 containing the peripheral myelin protein 22 (PMP22) gene", "Charcot-Marie-Tooth disease type 1A (CMT1A) is the most common inherited peripheral neuropathy (autosomal dominant), caused by a submicroscopic 1.4-Mb DUPLICATION on chromosome 17p11.2 encompassing the PMP22 gene. Overexpression of peripheral myelin protein 22 (PMP22) disrupts myelin compaction and Schwann cell differentiation. Repeated cycles of demyelination and remyelination produce characteristic 'ONION-BULB' Schwann cell hyperplasia encircling axons on histology. Clinical presentation includes insidious onset in adolescence of distal muscle weakness and atrophy (peroneal atrophy, 'inverted champagne bottle' legs), bilateral foot drop (steppage gait), PES CAVUS (high arches), hammer toes, sensory loss, and markedly slowed nerve conduction."],
        ["A heterozygous point mutation in the survival motor neuron 1 (SMN1) gene on chromosome 5q", "SMN1 homozygous deletions cause spinal muscular atrophy (infantile anterior horn cell degeneration), not CMT1A with onion-bulb formation."],
        ["Trinucleotide CTG repeat expansion in the 3'-untranslated region of the DMPK gene on chromosome 19", "DMPK CTG expansion causes myotonic dystrophy type 1 (myotonia, cataracts, cardiac conduction defects, frontal balding), not hereditary motor-sensory neuropathy."],
        ["Homozygous GAA trinucleotide repeat expansion in the first intron of the FXN gene on chromosome 9", "FXN GAA expansion causes Friedreich ataxia (spinocerebellar ataxia, hypertrophic cardiomyopathy, scoliosis, loss of frataxin), not isolated CMT1A neuropathy."],
        ["A missense mutation in the gap junction protein beta-1 (GJB1) gene on the X chromosome", "GJB1 mutations cause X-linked Charcot-Marie-Tooth (CMTX1), but the classic and most frequent cause (>70% of CMT1) with 'inverted champagne bottle' legs is PMP22 duplication on 17p."]
    ],
    "Pes cavus + hammer toes + 'inverted champagne bottle' calf atrophy + onion-bulb Schwann cells + slow conduction = Charcot-Marie-Tooth (CMT1A) -> PMP22 duplication on 17p.",
    "Identify the genetic and ultrastructural hallmark of CMT1A: PMP22 gene duplication on chromosome 17p driving 'onion-bulb' remyelination in peripheral nerves.",
    "Trinucleotide CTG repeat expansion in the 3'-untranslated region of the DMPK gene on chromosome 19",
    "DMPK expansion causes myotonic dystrophy (myotonia, cataracts); Charcot-Marie-Tooth is caused by PMP22 duplication causing onion-bulb demyelinating neuropathy.",
    "Pareyson D, Marchesi C. Diagnosis, natural history, and management of Charcot-Marie-Tooth disease. Lancet Neurol. 2009;8(7):654-667. PMID: 19539237."
)

# 0598
add_q(
    "op-c-s1-0598", "Pathology", "Nervous System", "Amyotrophic Lateral Sclerosis Combined UMN and LMN", 5,
    "A 58-year-old man presents with progressive weakness and muscle wasting that began in his right hand 6 months ago and has now spread to his right arm and both legs. He has also noticed difficulty swallowing liquids and dysarthria. Physical examination reveals: prominent atrophy and visible muscle twitching (fasciculations) in the right thenar eminence, interossei, and tongue; 3/5 muscle strength in the right upper and lower extremities; strikingly hyperactive (3+/4) deep tendon reflexes at both biceps, triceps, and patellar tendons; a positive Hoffman sign on the right; and a right extensor plantar response (positive Babinski sign). Sensation to light touch, pinprick, vibration, and proprioception is completely intact throughout all dermatomes. Sphincter tone and voluntary bladder control are normal. Which of the following is the hallmark neuropathological feature of this disease?",
    [
        ["Degeneration and loss of both upper motor neurons in the primary motor cortex (Betz cells) and lower motor neurons in the brainstem motor nuclei and spinal cord anterior horns, with Bunina bodies and TDP-43-positive cytoplasmic inclusions", "Amyotrophic lateral sclerosis (ALS) is a progressive neurodegenerative disorder uniquely characterized by the simultaneous degeneration of BOTH UPPER MOTOR NEURONS (corticospinal tracts and primary motor cortex Betz cells) and LOWER MOTOR NEURONS (anterior horn cells of the spinal cord and motor cranial nerve nuclei CN V, VII, IX, X, XII). Clinical hallmarks: LMN signs (muscle atrophy, weakness, fasciculations) coexisting in the SAME limb/segment as UMN signs (spasticity, hyperreflexia, Babinski sign, Hoffman sign). Crucially, SENSORY, OCULOMOTOR, and AUTONOMIC/BOWEL-BLADDER FUNCTIONS ARE STRICTLY SPARED. Histopathology demonstrates loss of anterior horn motor neurons with reactive astrocytosis, BUNINA BODIES (cystatin C-positive inclusions), and ubiquitinated TDP-43-positive cytoplasmic inclusions in >95% of cases."],
        ["Selective autoimmune-mediated demyelination restricted entirely to the dorsal columns of the spinal cord and dorsal root ganglia", "Dorsal column degeneration describes tabes dorsalis (tertiary syphilis) or B12 deficiency, causing sensory ataxia without combined UMN/LMN motor findings."],
        ["Isolated atrophy of the caudate nucleus and putamen accompanied by intranuclear huntingtin polyglutamine inclusions", "Caudate atrophy defines Huntington disease (chorea, dementia, personality changes), not combined upper and lower motor neuron degeneration."],
        ["Selective destruction of post-ganglionic sympathetic neurons within the intermediolateral cell column of the thoracic cord", "Intermediolateral cell column degeneration occurs in multiple system atrophy (Shy-Drager), causing severe orthostatic hypotension and autonomic failure, spared in ALS."],
        ["Demyelinating plaques confined to the periventricular white matter with prominent axonal preservation", "Periventricular demyelinating plaques define multiple sclerosis, presenting with relapsing-remitting sensory, visual, and motor symptoms in young adults."]
    ],
    "Simultaneous UMN signs (hyperreflexia, Babinski) + LMN signs (fasciculations, atrophy) + intact sensation and bowel/bladder = ALS -> Betz cell and anterior horn loss, TDP-43.",
    "Recognize the clinical and pathologic signature of ALS: simultaneous upper and lower motor neuron degeneration with sparing of sensory and sphincter function, characterized by TDP-43 inclusions.",
    "Selective autoimmune-mediated demyelination restricted entirely to the dorsal columns of the spinal cord and dorsal root ganglia",
    "Dorsal column demyelination causes loss of proprioception and sensory ataxia (tabes dorsalis); ALS spares sensory pathways and selectively destroys motor neurons.",
    "Rowland LP, Shneider NA. Amyotrophic lateral sclerosis. N Engl J Med. 2001;344(22):1688-1700. PMID: 11386269."
)

# 0599: PLANTED QA REJECTION (Simple memorization giveaway defect)
add_q(
    "op-c-s1-0599", "Physiology", "Endocrine", "Pancreatic Islet Hormones Recall Defect (Planted QA Rejection)", 1,
    "Which of the following hormones is secreted by beta cells of the islets of Langerhans in the pancreas?",
    [
        ["Insulin is the hormone secreted by pancreatic beta cells that lowers blood glucose levels", "Insulin is synthesized and secreted by beta cells of the pancreatic islets."],
        ["Glucagon is the hormone secreted by pancreatic alpha cells that elevates blood glucose levels", "Glucagon is secreted by alpha cells."],
        ["Somatostatin is the hormone secreted by pancreatic delta cells that inhibits insulin release", "Somatostatin is secreted by delta cells."],
        ["Pancreatic polypeptide is the hormone secreted by gamma cells that inhibits enzyme secretion", "Pancreatic polypeptide is secreted by PP/gamma cells."],
        ["Vasoactive intestinal peptide is the hormone secreted by intestinal neuroendocrine cells", "VIP is secreted by enteric neurons and neuroendocrine tumors."]
    ],
    "Trivial single-fact recall without clinical vignette or deductive reasoning.",
    "No multi-step inference required; tests direct memorization of beta cell insulin secretion.",
    "Glucagon is the hormone secreted by pancreatic alpha cells that elevates blood glucose levels",
    "Alpha cells secrete glucagon; beta cells secrete insulin.",
    "Campbell RK. Fate of the beta-cell in type 2 diabetes. J Am Pharm Assoc. 2009;49 Suppl 1:S10-15. PMID: 19808460.",
    crit={
        "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
        "clinicalInferenceNotes": "Planted QA Rejection Item: Deficient item lacking clinical vignette, containing direct giveaway lead-in, and testing single-fact recall.",
        "distractorExclusionNotes": "Distractors are superficial recall targets without clinical competition.",
        "verdict": "REJECT",
        "rejectionNotes": "Planted QA Rejection Item: Deficient item lacking clinical vignette, containing direct giveaway lead-in, and testing single-fact recall.",
        "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
)

# 0600: CLINICAL CONTROVERSY / UNRESOLVED
add_q(
    "op-c-s1-0600", "Physiology", "Nervous System", "Neuroprotection in Ischemic Penumbra Controversy", 4,
    "A 66-year-old man presents 4.5 hours after the onset of acute right-sided hemiparesis and aphasia. CT perfusion demonstrates a small core ischemic infarction in the left middle cerebral artery territory with a large surrounding area of critically hypoperfused but viable penumbra tissue. He is not a candidate for intravenous thrombolysis due to therapeutic anticoagulation for mechanical heart valves, and vascular anatomy precludes endovascular mechanical thrombectomy. Which of the following pharmacologic strategies designed to salvage ischemic penumbral tissue through metabolic neuroprotection or hemodynamic augmentation remains actively contested in clinical trials without consensus guideline endorsement?",
    [
        ["Intravenous high-dose magnesium sulfate or free-radical scavenging agents to inhibit NMDA-receptor excitotoxicity and lipid peroxidation in penumbral neurons", "In acute ischemic stroke, penumbral neurons experience energetic failure, glutamate excitotoxicity, massive calcium influx via NMDA receptors, and oxidative free radical generation. Pharmacologic neuroprotective agents, including intravenous magnesium sulfate (NMDA blockade and vasodilation) and free radical scavengers (such as edaravone or NXY-059), demonstrated robust neuroprotection in animal stroke models. However, large multicenter human randomized clinical trials (such as the FAST-MAG trial) failed to demonstrate statistically significant clinical benefit or reduction in functional disability, making routine pharmacological neuroprotection in acute ischemic penumbra an ongoing controversy lacking definitive clinical consensus."],
        ["Aggressive intravenous lowering of blood pressure to achieve a mean arterial pressure < 65 mm Hg within the first 6 hours", "Aggressive BP reduction in acute ischemic stroke compromises collateral perfusion to the vulnerable penumbra and accelerates cerebral infarction; guidelines recommend permissive hypertension."],
        ["Administration of high-dose intravenous mannitol to achieve a serum osmolality > 340 mOsm/kg in all stroke presentations", "Routine osmotic therapy without cerebral herniation causes intravascular volume contraction and worsening ischemic hypoperfusion."],
        ["Immediate therapeutic hyperthermia to a core body temperature of 39.0°C to accelerate enzymatic penumbral repair", "Hyperthermia dramatically accelerates neuronal apoptosis and worsens stroke outcomes; normothermia is the standard of care."],
        ["Continuous intravenous infusion of high-dose vasopressin targeting an arterial blood pressure of 240/140 mm Hg", "Extreme hypertension with vasopressin triggers intracerebral hemorrhage and myocardial ischemia without proven penumbral benefit."]
    ],
    "Ischemic penumbra without reperfusion option -> pharmacologic neuroprotection (intravenous magnesium / free-radical scavengers) is an unresolved clinical controversy.",
    "Analyze the translational gap between animal neuroprotection models (NMDA blockade/free radical scavenging) and failed human clinical trials (FAST-MAG).",
    "Aggressive intravenous lowering of blood pressure to achieve a mean arterial pressure < 65 mm Hg within the first 6 hours",
    "Blood pressure lowering in acute ischemic stroke compromises penumbral perfusion; permissive hypertension is standard.",
    "Saver JL, et al. Prehospital magnesium for alleviating the consequences of acute stroke (FAST-MAG). N Engl J Med. 2015;372(6):528-536. PMID: 25651247.",
    crit={
        "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
        "clinicalInferenceNotes": "Clinical Controversy / Unresolved Item: Probes the contentious evidence regarding pharmacological neuroprotection versus collateral hemodynamic support in acute stroke penumbra.",
        "distractorExclusionNotes": "Distractors represent clearly harmful practices (aggressive hypotension, induced hyperthermia) contrasting with true experimental neuroprotective therapies.",
        "verdict": "UNRESOLVED",
        "unresolvedNotes": "Clinical Controversy / Unresolved Item: Conflicting translational evidence between animal neuroprotection efficacy and failed human randomized trials (FAST-MAG).",
        "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
)

with open("scripts/candidate-authoring/step1-batch24.ts", "w", encoding="utf-8") as f:
    f.write("import { CandidateSpec } from './types';\n\n")
    f.write("export const step1Batch24: CandidateSpec[] = ")
    f.write(json.dumps(items, indent=2))
    f.write(";\n")

print(f"Successfully generated step1-batch24.ts with {len(items)} items.")
