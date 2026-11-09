import json

# Generator for Step 1 Batch 16 (op-c-s1-0376 to 0400)
# Neuroanatomy, Brainstem & Spinal Cord Syndromes, Neuromuscular, Cranial Nerves

items_p1 = [
  # 0376
  {
    "code": "op-c-s1-0376",
    "exam": "Step 1",
    "subject": "Neuroanatomy",
    "system": "Nervous System",
    "topic": "Lateral Medullary Wallenberg Syndrome PICA Occlusion",
    "subtopic": "Nucleus Ambiguus, Spinothalamic Tract, and Descending Sympathetic Tract Localization",
    "provisionalDifficulty": 4,
    "stem": "A 59-year-old man presents to the emergency department with sudden severe vertigo, nausea, vomiting, and difficulty swallowing. Physical examination reveals: - Slurred speech and a hoarse, raspy voice; the uvula deviates to the right when he phonates - Impaired gag reflex on the left side - Ptosis of the left upper eyelid, a constricted left pupil (miosis), and decreased sweating on the left side of his face (anhidrosis) - Prominent left-sided limb dysmetria and intention tremor on finger-to-nose testing - Loss of pain and temperature sensation over the left side of his face - Loss of pain and temperature sensation over the right side of his trunk and extremities (right arm and leg) Motor strength is 5/5 throughout all four extremities, and position and vibration sense are fully intact bilaterally. Occlusion of which of the following intracranial arteries is responsible for this patient's neurological syndrome?",
    "choices": [
      ["Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolateral medulla", "Correct. Lateral Medullary (Wallenberg) Syndrome is the classic neurovascular brainstem syndrome tested on USMLE Step 1, caused by thrombotic or embolic occlusion of the POSTERIOR INFERIOR CEREBELLAR ARTERY (PICA) or the parent vertebral artery. Anatomical structure-to-symptom correlation in the dorsolateral medulla: (1) NUCLEUS AMBIGUUS (motor fibers of CN IX and X) -> Dysphagia, dysarthria, hoarseness, loss of gag reflex, and uvula deviation away from the lesion; (2) INFERIOR CEREBELLAR PEDUNCLE -> Ipsilateral limb ataxia, dysmetria, and falling toward the lesion; (3) SPINAL TRIGEMINAL NUCLEUS AND TRACT -> Loss of pain and temperature sensation over the IPSILATERAL face; (4) SPINOTHALAMIC TRACT -> Loss of pain and temperature sensation over the CONTRALATERAL trunk and extremities (crossed spinothalamic fibers from the opposite hemibody); (5) DESCENDING HYPOTHALAMIC SYMPATHETIC TRACT -> Ipsilateral Horner syndrome (ptosis, miosis, anhidrosis); (6) VESTIBULAR NUCLEI -> Severe vertigo, nystagmus, nausea, and vomiting. CRUCIAL STEP 1 DIFFERENTIATING LESION: MOTOR STRENGTH IS PRESERVED because the pyramidal corticospinal tract runs in the ventromedial medulla, supplied by the anterior spinal artery (ASA). In contrast, Anterior Inferior Cerebellar Artery (AICA) occlusion causes lateral PONTINE syndrome with facial nerve (CN VII) paralysis and sensorineural hearing loss (labyrinthine artery), without nucleus ambiguus involvement."],
      ["Anterior spinal artery (ASA), causing infarction of the ventromedial medulla", "ASA occlusion causes Medial Medullary Syndrome: contralateral spastic hemiparesis (pyramid), contralateral loss of vibration/proprioception (medial lemniscus), and ipsilateral tongue deviation (CN XII), without Horner syndrome, ataxia, or crossed pain/temp loss."],
      ["Anterior inferior cerebellar artery (AICA), causing infarction of the lateral caudal pons", "AICA occlusion causes Lateral Pontine Syndrome: features ipsilateral facial muscle paralysis (CN VII motor nucleus) and sensorineural deafness (CN VIII/cochlear nucleus), which are absent here."],
      ["Paramedian branches of the basilar artery, causing infarction of the medial mid-pons", "Paramedian basilar branches cause Medial Pontine Syndrome: contralateral spastic hemiparesis and ipsilateral abducens (CN VI) palsy."],
      ["Posterior cerebral artery (PCA), causing infarction of the ventromedial midbrain", "PCA occlusion causing midbrain infarction (Weber syndrome) produces ipsilateral oculomotor (CN III) palsy with contralateral hemiparesis, not medullary crossed sensory loss."]
    ],
    "shortestValidSolution": "Hoarseness/dysphagia + ipsilateral Horner + ipsilateral facial sensory loss + contralateral body sensory loss -> Lateral medullary syndrome (PICA occlusion).",
    "necessaryInference": "Crossed sensory loss (ipsilateral face, contralateral body) + ipsilateral Horner + ataxia + nucleus ambiguus hoarseness/dysphagia = Lateral medullary (Wallenberg) syndrome. The culprit vessel is the Posterior Inferior Cerebellar Artery (PICA).",
    "strongestDistractor": "Anterior inferior cerebellar artery (AICA), causing infarction of the lateral caudal pons",
    "distractorExclusion": "AICA damages CN VII (facial droop) and CN VIII (deafness), whereas PICA uniquely damages the nucleus ambiguus (CN IX/X hoarseness and dysphagia).",
    "citation": "Kim JS. Pure lateral medullary infarction: clinical-radiological correlation of 130 acute, consecutive patients. Brain. 2003;126(Pt 8):1864-1872. PMID: 12821516."
  },
  # 0377
  {
    "code": "op-c-s1-0377",
    "exam": "Step 1",
    "subject": "Neuroanatomy",
    "system": "Nervous System",
    "topic": "Medial Medullary Syndrome Anterior Spinal Artery Occlusion",
    "subtopic": "Hypoglossal Nerve, Corticospinal Pyramid, and Medial Lemniscus Triad",
    "provisionalDifficulty": 4,
    "stem": "A 67-year-old man with hypertension and diabetes mellitus presents to the emergency department with sudden-onset right-sided weakness and difficulty speaking. Neurological examination reveals: - Flaccid hemiparesis of his right upper and lower extremities with an extensor plantar (Babinski) response on the right - Marked loss of tactile discrimination, position sense, and vibration sense on the right side of his body (right arm, trunk, and leg) - Pain and temperature sensation are completely normal and symmetric throughout his entire face and body - When asked to protrude his tongue, the tongue deviates markedly to the left side with visible fibrillations on the left half of the tongue - Cranial nerves II through X are intact, and there is no facial droop, no ataxia, and no Horner syndrome Acute ischemic infarction of which of the following vascular territories is responsible for this clinical presentation?",
    "choices": [
      ["Anterior spinal artery or paramedian branches of the vertebral artery, causing infarction of the medial medulla", "Correct. Medial Medullary Syndrome (Dejerine syndrome) is caused by infarction of the anteromedial medulla, typically resulting from occlusion of the ANTERIOR SPINAL ARTERY (ASA) or paramedian branches of the vertebral artery. Classical anatomical triad on USMLE Step 1: (1) CORTICOSPINAL PYRAMID (prior to decussation) -> CONTRALATERAL spastic hemiparesis of the arm and leg with positive Babinski sign; (2) MEDIAL LEMNISCUS -> CONTRALATERAL loss of conscious proprioception, vibratory sensation, and two-point discrimination in the trunk and extremities; (3) HYPOGLOSSAL NERVE / NUCLEUS (CN XII) -> IPSILATERAL lower motor neuron paralysis of the tongue. When the tongue is protruded, the unopposed action of the intact contralateral genioglossus muscle pushes the tongue toward the weak, atrophic side (TONGUE DEVIATES TOWARD THE INFARCT / IPSILATERAL SIDE). CRUCIAL DIFFERENTIATING NEGATIVE FINDING: Pain and temperature sensation are COMPLETELY INTACT because the spinothalamic tract runs laterally in the medulla, outside the ASA vascular territory."],
      ["Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolateral medulla", "PICA occlusion causes lateral medullary (Wallenberg) syndrome with crossed pain/temp loss, ataxia, Horner syndrome, and dysphagia, with completely spared motor strength."],
      ["Anterior inferior cerebellar artery (AICA), causing infarction of the lateral caudal pons", "AICA occlusion causes lateral pontine syndrome with facial paralysis, deafness, ataxia, and vertigo, without hypoglossal tongue deviation."],
      ["Superior cerebellar artery (SCA), causing infarction of the dorsal rostral pons", "SCA occlusion causes severe ipsilateral cerebellar ataxia and choreiform dysmetria, without contralateral hemiparesis or hypoglossal palsy."],
      ["Anterior cerebral artery (ACA), causing infarction of the medial frontal cortex", "ACA occlusion causes contralateral lower extremity motor and sensory loss (leg > arm), without tongue deviation or brainstem signs."]
    ],
    "shortestValidSolution": "Contralateral hemiparesis + contralateral proprioception loss + tongue deviates to side of lesion (ipsilateral) -> Medial medullary syndrome (Anterior spinal artery / ASA).",
    "necessaryInference": "Pyramidal weakness + medial lemniscus loss + CN XII tongue deviation to the lesion side = Medial medullary syndrome. Caused by occlusion of the Anterior Spinal Artery (ASA).",
    "strongestDistractor": "Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolateral medulla",
    "distractorExclusion": "PICA causes lateral medullary syndrome without motor weakness; ASA specifically damages the medial pyramid and CN XII, causing hemiparesis and tongue deviation.",
    "citation": "Kwon HM, Lee YS, Bae HJ, et al. Homolateral ataxia and hemiparesis in anterior spinal artery territory infarction. J Neurol Sci. 2005;231(1-2):99-102. PMID: 15792828."
  },
  # 0378
  {
    "code": "op-c-s1-0378",
    "exam": "Step 1",
    "subject": "Neuroanatomy",
    "system": "Nervous System",
    "topic": "Lateral Pontine Syndrome AICA Occlusion",
    "subtopic": "Facial Nucleus Paralysis, Vestibulocochlear Loss, and Cerebellar Peduncle Infarction",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old woman presents with acute vertigo, vomiting, right-sided facial weakness, and profound hearing loss in her right ear. Neurological examination reveals: - Complete paralysis of the entire right side of her face, involving both the forehead and the lower face; she is unable to close her right eye, furrow her right brow, or smile on the right - Absent right corneal reflex (both direct and consensual blinks fail when the right cornea is stimulated, but both eyes blink when the left cornea is stimulated) - Marked sensorineural deafness in the right ear with abnormal Rinne and Weber testing - Loss of pain and temperature sensation on the right side of her face - Loss of pain and temperature sensation on the left side of her trunk and extremities (left arm and leg) - Severe right-sided limb ataxia with intention tremor on finger-to-nose testing - Right-sided Horner syndrome (ptosis, miosis, anhidrosis) Motor strength in her extremities is 5/5, and tongue protrusion is normal. Occlusion of which of the following intracranial arteries produces this clinical syndrome?",
    "choices": [
      ["Anterior inferior cerebellar artery (AICA), causing infarction of the lateral caudal pons", "Correct. Lateral Pontine Syndrome (Marie-Fox syndrome) is caused by occlusion of the ANTERIOR INFERIOR CEREBELLAR ARTERY (AICA) or branches of the basilar artery. Anatomical localization in the lateral caudal pons: (1) FACIAL NUCLEUS AND NERVE (CN VII) -> IPSILATERAL complete facial paralysis (LMN pattern involving both upper and lower face), loss of taste on anterior 2/3 of tongue, loss of corneal reflex efferent limb, and hyperacusis; (2) VESTIBULOCOCHLEAR NUCLEI AND LABYRINTHINE ARTERY (branch of AICA) -> Sensorineural hearing loss, vertigo, nystagmus, and tinnitus; (3) SPINAL TRIGEMINAL NUCLEUS -> Ipsilateral loss of facial pain and temperature; (4) SPINOTHALAMIC TRACT -> Contralateral loss of body pain and temperature; (5) MIDDLE AND INFERIOR CEREBELLAR PEDUNCLES -> Ipsilateral limb ataxia; (6) DESCENDING SYMPATHETIC TRACT -> Ipsilateral Horner syndrome. CRUCIAL STEP 1 MNEMONIC: 'FACIAL DROOP = AICA'S POOP' (AICA hits the facial nucleus in the pons, whereas PICA hits the nucleus ambiguus in the medulla, causing hoarseness)."],
      ["Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolateral medulla", "PICA occlusion affects the medulla, causing dysphagia, hoarseness, and loss of gag reflex (nucleus ambiguus), but completely spares the facial motor nucleus and hearing."],
      ["Paramedian branches of the basilar artery, causing infarction of the medial mid-pons", "Paramedian basilar branches cause Medial Pontine Syndrome with contralateral hemiparesis and CN VI abducens palsy."],
      ["Labyrinthine artery alone, causing isolated inner ear membranous labyrinth ischemia", "Isolated labyrinthine occlusion causes acute vertigo and deafness, but cannot account for brainstem findings (facial paralysis, crossed sensory loss, Horner syndrome, ataxia)."],
      ["Posterior cerebral artery (PCA), causing infarction of the lateral midbrain", "PCA occlusion causes visual field defects (homonymous hemianopsia) or midbrain syndromes (Weber, Benedikt), not pontine CN VII/VIII deficits."]
    ],
    "shortestValidSolution": "Facial droop (entire hemiface) + deafness + ataxia + crossed pain/temp loss -> Lateral pontine syndrome (AICA occlusion).",
    "necessaryInference": "Crossed sensory loss + ipsilateral LMN facial paralysis (CN VII) + sensorineural deafness (CN VIII) = Lateral pontine syndrome. The culprit vessel is the Anterior Inferior Cerebellar Artery (AICA).",
    "strongestDistractor": "Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolateral medulla",
    "distractorExclusion": "PICA damages the nucleus ambiguus (hoarseness/dysphagia), whereas AICA damages the facial nucleus (facial paralysis) and cochlear system (hearing loss).",
    "citation": "Amarenco P. The spectrum of cerebellar infarctions. Neurology. 1991;41(7):973-979. PMID: 2067657."
  },
  # 0379
  {
    "code": "op-c-s1-0379",
    "exam": "Step 1",
    "subject": "Neuroanatomy",
    "system": "Nervous System",
    "topic": "Medial Pontine Syndrome Paramedian Basilar Branches",
    "subtopic": "Abducens Nerve, Corticospinal Tract, and Medial Lemniscus Localization",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with a history of heavy tobacco use and hypertension presents with double vision and left-sided weakness. Neurological examination reveals: - Spastic hemiparesis of his left arm and left leg with an extensor plantar response (left Babinski sign) - Decreased vibration sense and proprioception on the left side of his body (left arm and leg) - Inability to abduct his right eye beyond the midline when looking to the right (right lateral rectus palsy); all other extraocular movements in both eyes are normal - Bilateral facial sensation, facial motor strength, hearing, and coordination are completely normal Occlusion of the paramedian branches of which of the following arteries is responsible for this brainstem infarction?",
    "choices": [
      ["Basilar artery, causing infarction of the ventromedial caudal pons", "Correct. Medial Pontine Syndrome (Millard-Gubler syndrome variant or Foville syndrome) is caused by atherothrombotic occlusion of the PARAMEDIAN BRANCHES OF THE BASILAR ARTERY in the caudal pons. Anatomical structures involved: (1) CORTICOSPINAL TRACT -> CONTRALATERAL spastic hemiparesis of the upper and lower extremities; (2) MEDIAL LEMNISCUS -> CONTRALATERAL loss of conscious proprioception, vibration, and fine touch; (3) ABDUCENS NERVE FIBERS (CN VI) -> IPSILATERAL lateral rectus palsy (inability to abduct the right eye on lateral gaze, producing horizontal diplopia). If the lesion extends dorsally to include the PPRF (paramedian pontine reticular formation), it produces an ipsilateral conjugate lateral gaze palsy. Sparing of spinothalamic tracts and cerebellar peduncles leaves pain/temp and coordination intact."],
      ["Anterior spinal artery (ASA), causing infarction of the ventromedial medulla", "ASA occlusion causes Medial Medullary Syndrome with CN XII hypoglossal tongue deviation, not CN VI lateral rectus abducens palsy."],
      ["Posterior cerebral artery (PCA), causing infarction of the ventromedial midbrain", "PCA occlusion causing midbrain infarction (Weber syndrome) damages CN III (producing ptosis, mydriasis, and 'down-and-out' eye), not isolated CN VI abduction failure."],
      ["Anterior inferior cerebellar artery (AICA), causing infarction of the lateral caudal pons", "AICA occlusion causes lateral pontine syndrome with facial paralysis, deafness, ataxia, and Horner syndrome, without hemiparesis or abducens palsy."],
      ["Middle cerebral artery (MCA), causing infarction of the precentral gyrus", "Cortical MCA infarction causes contralateral facial and arm hemiparesis, but cannot cause an isolated lower motor neuron CN VI abducens nerve palsy."]
    ],
    "shortestValidSolution": "Contralateral hemiparesis + contralateral proprioception loss + ipsilateral CN VI abducens palsy -> Medial pontine syndrome (Paramedian branches of basilar artery).",
    "necessaryInference": "Corticospinal hemiparesis + medial lemniscus proprioception loss + CN VI lateral rectus palsy = Medial pontine syndrome. Supplied by paramedian branches of the basilar artery.",
    "strongestDistractor": "Posterior cerebral artery (PCA), causing infarction of the ventromedial midbrain",
    "distractorExclusion": "Midbrain lesions (Weber) damage CN III ('down-and-out' with blown pupil), whereas pontine lesions damage CN VI (inability to abduct).",
    "citation": "Bassetti C, Bogousslavsky J, Barth A, Regli F. Isolated infarcts of the pons. Brain. 1996;119(Pt 6):2115-2140. PMID: 9010011."
  },
  # 0380
  {
    "code": "op-c-s1-0380",
    "exam": "Step 1",
    "subject": "Neuroanatomy",
    "system": "Nervous System",
    "topic": "Parinaud Syndrome Dorsal Midbrain Pinealoma",
    "subtopic": "Superior Colliculus and Pretectal Area Compression Causing Upward Gaze Palsy",
    "provisionalDifficulty": 4,
    "stem": "A 12-year-old boy is brought to the pediatric neurology clinic by his parents because of progressive morning headaches, nausea, vomiting, and difficulty looking up. Physical examination reveals bilateral papilledema. Neurological examination reveals: - Marked limitation of voluntary upward conjugate gaze (upward gaze palsy); downward conjugate gaze and horizontal saccades are fully preserved - Bilateral pupils are dilated and react sluggishly to direct and consensual light, but constrict briskly during accommodation on near vision (light-near dissociation; pseudo-Argyll Robertson pupils) - When attempting upward saccades, both globes retract into the orbits accompanied by rhythmic convergence nystagmus (convergence-retraction nystagmus) - Bilateral upper eyelid retraction revealing sclera above the limbus (Collier sign) Brain MRI demonstrates obstructive hydrocephalus secondary to a 3-cm expansile mass arising in the pineal gland that compresses the dorsal tectum of the midbrain. Which of the following midbrain structures is directly compressed to produce this upward gaze paralysis?",
    "choices": [
      ["Superior colliculus and adjacent pretectal nuclei of the dorsal midbrain tectal plate", "Correct. Parinaud syndrome (dorsal midbrain syndrome; pretectal syndrome) is caused by extrinsic mass compression or intrinsic infarction of the DORSAL MIDBRAIN TECTUM. The classic etiology on USMLE Step 1 is a PINEALOMA (germinoma or pineoblastoma of the pineal gland) in children/adolescents, which compresses the tectal plate and occludes the cerebral aqueduct of Sylvius, causing non-communicating obstructive hydrocephalus (headaches, vomiting, papilledema). Classical neuro-ophthalmological tetrad: (1) UPWARD GAZE PARALYSIS: Compression of the vertical gaze center in the PRETECTAL AREA and rostral interstitial nucleus of the MLF near the SUPERIOR COLLICULUS prevents conjugate upward saccades; (2) PSEUDO-ARGYLL ROBERTSON PUPILS (LIGHT-NEAR DISSOCIATION): Damage to the pretectal nuclei (which mediate the pupillary light reflex to the Edinger-Westphal nuclei) while sparing the more ventral cortical pathway for the near accommodation response; (3) CONVERGENCE-RETRACTION NYSTAGMUS: Co-contraction of extraocular rectus muscles upon attempted upward gaze; (4) COLLIER SIGN: Pathological bilateral eyelid retraction."],
      ["Inferior colliculus and the lateral lemniscus auditory projection pathways", "The inferior colliculus mediates auditory reflexes, not visual conjugate upward gaze."],
      ["Substantia nigra pars compacta and the ventral tegmental area dopaminergic projections", "Degeneration of substantia nigra pars compacta causes Parkinson disease (resting tremor, rigidity, bradykinesia), not vertical gaze palsy."],
      ["Edinger-Westphal parasympathetic preganglionic nucleus in the ventromedial midbrain", "Edinger-Westphal nuclei mediate pupillary constriction and accommodation; complete destruction abolishes BOTH light and near responses, whereas Parinaud syndrome preserves near accommodation."],
      ["Red nucleus and the rubrospinal tract in the midbrain tegmentum", "Red nucleus lesions cause rubral tremor or Benedikt syndrome (CN III palsy with contralateral chorea), not isolated upward gaze palsy."]
    ],
    "shortestValidSolution": "Pineal mass + upward gaze palsy + light-near pupil dissociation + convergence-retraction nystagmus -> Parinaud syndrome (superior colliculus / pretectal tectum compression).",
    "necessaryInference": "Upward gaze palsy + light-near dissociation + convergence-retraction nystagmus in a child with a pineal tumor = Parinaud syndrome. Driven by compression of the superior colliculus and pretectal nuclei of the dorsal midbrain.",
    "strongestDistractor": "Edinger-Westphal parasympathetic preganglionic nucleus in the ventromedial midbrain",
    "distractorExclusion": "Edinger-Westphal damage abolishes accommodation, whereas Parinaud syndrome features light-near dissociation (near accommodation is preserved, but light response is lost).",
    "citation": "Shields M, et al. Parinaud syndrome: a review of the pretectal syndrome. J Neuroophthalmol. 2017;37(4):444-452. PMID: 28834898."
  }
]

print(f"Loaded {len(items_p1)} items for Batch 16 part 1.")
