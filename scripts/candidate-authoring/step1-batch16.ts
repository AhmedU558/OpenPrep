import { CandidateSpec } from './types';

export const step1Batch16: CandidateSpec[] = [
  {
    "code": "op-c-s1-0376",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Lateral Medullary Wallenberg Syndrome PICA Occlusion",
    "subtopic": "Nucleus Ambiguus, Spinothalamic Tract, and Descending Sympathetic Tract Localization",
    "provisionalDifficulty": 4,
    "stem": "A 59-year-old man presents to the emergency department with sudden severe vertigo, nausea, vomiting, and difficulty swallowing. Physical examination reveals: - Slurred speech and a hoarse, raspy voice; the uvula deviates to the right when he phonates - Impaired gag reflex on the left side - Ptosis of the left upper eyelid, a constricted left pupil (miosis), and decreased sweating on the left side of his face (anhidrosis) - Prominent left-sided limb dysmetria and intention tremor on finger-to-nose testing - Loss of pain and temperature sensation over the left side of his face - Loss of pain and temperature sensation over the right side of his trunk and extremities (right arm and leg) Motor strength is 5/5 throughout all four extremities, and position and vibration sense are fully intact bilaterally. Occlusion of which of the following intracranial arteries is responsible for this patient's neurological syndrome?",
    "choices": [
      [
        "Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolateral medulla",
        "Correct. Lateral Medullary (Wallenberg) Syndrome is the classic neurovascular brainstem syndrome tested on USMLE Step 1, caused by thrombotic or embolic occlusion of the POSTERIOR INFERIOR CEREBELLAR ARTERY (PICA) or the parent vertebral artery. Anatomical structure-to-symptom correlation in the dorsolateral medulla: (1) NUCLEUS AMBIGUUS (motor fibers of CN IX and X) -> Dysphagia, dysarthria, hoarseness, loss of gag reflex, and uvula deviation away from the lesion; (2) INFERIOR CEREBELLAR PEDUNCLE -> Ipsilateral limb ataxia, dysmetria, and falling toward the lesion; (3) SPINAL TRIGEMINAL NUCLEUS AND TRACT -> Loss of pain and temperature sensation over the IPSILATERAL face; (4) SPINOTHALAMIC TRACT -> Loss of pain and temperature sensation over the CONTRALATERAL trunk and extremities (crossed spinothalamic fibers from the opposite hemibody); (5) DESCENDING HYPOTHALAMIC SYMPATHETIC TRACT -> Ipsilateral Horner syndrome (ptosis, miosis, anhidrosis); (6) VESTIBULAR NUCLEI -> Severe vertigo, nystagmus, nausea, and vomiting. CRUCIAL STEP 1 DIFFERENTIATING LESION: MOTOR STRENGTH IS PRESERVED because the pyramidal corticospinal tract runs in the ventromedial medulla, supplied by the anterior spinal artery (ASA). In contrast, Anterior Inferior Cerebellar Artery (AICA) occlusion causes lateral PONTINE syndrome with facial nerve (CN VII) paralysis and sensorineural hearing loss (labyrinthine artery), without nucleus ambiguus involvement."
      ],
      [
        "Anterior spinal artery (ASA), causing infarction of the ventromedial medulla",
        "ASA occlusion causes Medial Medullary Syndrome: contralateral spastic hemiparesis (pyramid), contralateral loss of vibration/proprioception (medial lemniscus), and ipsilateral tongue deviation (CN XII), without Horner syndrome, ataxia, or crossed pain/temp loss."
      ],
      [
        "Anterior inferior cerebellar artery (AICA), causing infarction of the lateral caudal pons",
        "AICA occlusion causes Lateral Pontine Syndrome: features ipsilateral facial muscle paralysis (CN VII motor nucleus) and sensorineural deafness (CN VIII/cochlear nucleus), which are absent here."
      ],
      [
        "Paramedian branches of the basilar artery, causing infarction of the medial mid-pons",
        "Paramedian basilar branches cause Medial Pontine Syndrome: contralateral spastic hemiparesis and ipsilateral abducens (CN VI) palsy."
      ],
      [
        "Posterior cerebral artery (PCA), causing infarction of the ventromedial midbrain",
        "PCA occlusion causing midbrain infarction (Weber syndrome) produces ipsilateral oculomotor (CN III) palsy with contralateral hemiparesis, not medullary crossed sensory loss."
      ]
    ],
    "shortestValidSolution": "Hoarseness/dysphagia + ipsilateral Horner + ipsilateral facial sensory loss + contralateral body sensory loss -> Lateral medullary syndrome (PICA occlusion).",
    "necessaryInference": "Crossed sensory loss (ipsilateral face, contralateral body) + ipsilateral Horner + ataxia + nucleus ambiguus hoarseness/dysphagia = Lateral medullary (Wallenberg) syndrome. The culprit vessel is the Posterior Inferior Cerebellar Artery (PICA).",
    "strongestDistractor": "Anterior inferior cerebellar artery (AICA), causing infarction of the lateral caudal pons",
    "distractorExclusion": "AICA damages CN VII (facial droop) and CN VIII (deafness), whereas PICA uniquely damages the nucleus ambiguus (CN IX/X hoarseness and dysphagia).",
    "citation": "Kim JS. Pure lateral medullary infarction: clinical-radiological correlation of 130 acute, consecutive patients. Brain. 2003;126(Pt 8):1864-1872. PMID: 12821516.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Crossed sensory loss (ipsilateral face, contralateral body) + ipsilateral Horner + ataxia + nucleus ambiguus hoarseness/dysphagia = Lateral medullary (Wallenberg) syndrome. The culprit vessel is the Posterior Inferior Cerebellar Artery (PICA).",
      "distractorExclusionNotes": "Strongest distractor 'Anterior inferior cerebellar artery (AICA), causing infarction of the lateral ca' excluded: AICA damages CN VII (facial droop) and CN VIII (deafness), whereas PICA uniquely damages the nucleus ambiguus (CN IX/X hoarseness and dysphagia).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0377",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Medial Medullary Syndrome Anterior Spinal Artery Occlusion",
    "subtopic": "Hypoglossal Nerve, Corticospinal Pyramid, and Medial Lemniscus Triad",
    "provisionalDifficulty": 4,
    "stem": "A 67-year-old man with hypertension and diabetes mellitus presents to the emergency department with sudden-onset right-sided weakness and difficulty speaking. Neurological examination reveals: - Flaccid hemiparesis of his right upper and lower extremities with an extensor plantar (Babinski) response on the right - Marked loss of tactile discrimination, position sense, and vibration sense on the right side of his body (right arm, trunk, and leg) - Pain and temperature sensation are completely normal and symmetric throughout his entire face and body - When asked to protrude his tongue, the tongue deviates markedly to the left side with visible fibrillations on the left half of the tongue - Cranial nerves II through X are intact, and there is no facial droop, no ataxia, and no Horner syndrome Acute ischemic infarction of which of the following vascular territories is responsible for this clinical presentation?",
    "choices": [
      [
        "Anterior spinal artery or paramedian branches of the vertebral artery, causing infarction of the medial medulla",
        "Correct. Medial Medullary Syndrome (Dejerine syndrome) is caused by infarction of the anteromedial medulla, typically resulting from occlusion of the ANTERIOR SPINAL ARTERY (ASA) or paramedian branches of the vertebral artery. Classical anatomical triad on USMLE Step 1: (1) CORTICOSPINAL PYRAMID (prior to decussation) -> CONTRALATERAL spastic hemiparesis of the arm and leg with positive Babinski sign; (2) MEDIAL LEMNISCUS -> CONTRALATERAL loss of conscious proprioception, vibratory sensation, and two-point discrimination in the trunk and extremities; (3) HYPOGLOSSAL NERVE / NUCLEUS (CN XII) -> IPSILATERAL lower motor neuron paralysis of the tongue. When the tongue is protruded, the unopposed action of the intact contralateral genioglossus muscle pushes the tongue toward the weak, atrophic side (TONGUE DEVIATES TOWARD THE INFARCT / IPSILATERAL SIDE). CRUCIAL DIFFERENTIATING NEGATIVE FINDING: Pain and temperature sensation are COMPLETELY INTACT because the spinothalamic tract runs laterally in the medulla, outside the ASA vascular territory."
      ],
      [
        "Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolateral medulla",
        "PICA occlusion causes lateral medullary (Wallenberg) syndrome with crossed pain/temp loss, ataxia, Horner syndrome, and dysphagia, with completely spared motor strength."
      ],
      [
        "Anterior inferior cerebellar artery (AICA), causing infarction of the lateral caudal pons",
        "AICA occlusion causes lateral pontine syndrome with facial paralysis, deafness, ataxia, and vertigo, without hypoglossal tongue deviation."
      ],
      [
        "Superior cerebellar artery (SCA), causing infarction of the dorsal rostral pons",
        "SCA occlusion causes severe ipsilateral cerebellar ataxia and choreiform dysmetria, without contralateral hemiparesis or hypoglossal palsy."
      ],
      [
        "Anterior cerebral artery (ACA), causing infarction of the medial frontal cortex",
        "ACA occlusion causes contralateral lower extremity motor and sensory loss (leg > arm), without tongue deviation or brainstem signs."
      ]
    ],
    "shortestValidSolution": "Contralateral hemiparesis + contralateral proprioception loss + tongue deviates to side of lesion (ipsilateral) -> Medial medullary syndrome (Anterior spinal artery / ASA).",
    "necessaryInference": "Pyramidal weakness + medial lemniscus loss + CN XII tongue deviation to the lesion side = Medial medullary syndrome. Caused by occlusion of the Anterior Spinal Artery (ASA).",
    "strongestDistractor": "Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolateral medulla",
    "distractorExclusion": "PICA causes lateral medullary syndrome without motor weakness; ASA specifically damages the medial pyramid and CN XII, causing hemiparesis and tongue deviation.",
    "citation": "Kwon HM, Lee YS, Bae HJ, et al. Homolateral ataxia and hemiparesis in anterior spinal artery territory infarction. J Neurol Sci. 2005;231(1-2):99-102. PMID: 15792828.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Pyramidal weakness + medial lemniscus loss + CN XII tongue deviation to the lesion side = Medial medullary syndrome. Caused by occlusion of the Anterior Spinal Artery (ASA).",
      "distractorExclusionNotes": "Strongest distractor 'Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolate' excluded: PICA causes lateral medullary syndrome without motor weakness; ASA specifically damages the medial pyramid and CN XII, causing hemiparesis and tongue deviation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0378",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Lateral Pontine Syndrome AICA Occlusion",
    "subtopic": "Facial Nucleus Paralysis, Vestibulocochlear Loss, and Cerebellar Peduncle Infarction",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old woman presents with acute vertigo, vomiting, right-sided facial weakness, and profound hearing loss in her right ear. Neurological examination reveals: - Complete paralysis of the entire right side of her face, involving both the forehead and the lower face; she is unable to close her right eye, furrow her right brow, or smile on the right - Absent right corneal reflex (both direct and consensual blinks fail when the right cornea is stimulated, but both eyes blink when the left cornea is stimulated) - Marked sensorineural deafness in the right ear with abnormal Rinne and Weber testing - Loss of pain and temperature sensation on the right side of her face - Loss of pain and temperature sensation on the left side of her trunk and extremities (left arm and leg) - Severe right-sided limb ataxia with intention tremor on finger-to-nose testing - Right-sided Horner syndrome (ptosis, miosis, anhidrosis) Motor strength in her extremities is 5/5, and tongue protrusion is normal. Occlusion of which of the following intracranial arteries produces this clinical syndrome?",
    "choices": [
      [
        "Anterior inferior cerebellar artery (AICA), causing infarction of the lateral caudal pons",
        "Correct. Lateral Pontine Syndrome (Marie-Fox syndrome) is caused by occlusion of the ANTERIOR INFERIOR CEREBELLAR ARTERY (AICA) or branches of the basilar artery. Anatomical localization in the lateral caudal pons: (1) FACIAL NUCLEUS AND NERVE (CN VII) -> IPSILATERAL complete facial paralysis (LMN pattern involving both upper and lower face), loss of taste on anterior 2/3 of tongue, loss of corneal reflex efferent limb, and hyperacusis; (2) VESTIBULOCOCHLEAR NUCLEI AND LABYRINTHINE ARTERY (branch of AICA) -> Sensorineural hearing loss, vertigo, nystagmus, and tinnitus; (3) SPINAL TRIGEMINAL NUCLEUS -> Ipsilateral loss of facial pain and temperature; (4) SPINOTHALAMIC TRACT -> Contralateral loss of body pain and temperature; (5) MIDDLE AND INFERIOR CEREBELLAR PEDUNCLES -> Ipsilateral limb ataxia; (6) DESCENDING SYMPATHETIC TRACT -> Ipsilateral Horner syndrome. CRUCIAL STEP 1 MNEMONIC: 'FACIAL DROOP = AICA'S POOP' (AICA hits the facial nucleus in the pons, whereas PICA hits the nucleus ambiguus in the medulla, causing hoarseness)."
      ],
      [
        "Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolateral medulla",
        "PICA occlusion affects the medulla, causing dysphagia, hoarseness, and loss of gag reflex (nucleus ambiguus), but completely spares the facial motor nucleus and hearing."
      ],
      [
        "Paramedian branches of the basilar artery, causing infarction of the medial mid-pons",
        "Paramedian basilar branches cause Medial Pontine Syndrome with contralateral hemiparesis and CN VI abducens palsy."
      ],
      [
        "Labyrinthine artery alone, causing isolated inner ear membranous labyrinth ischemia",
        "Isolated labyrinthine occlusion causes acute vertigo and deafness, but cannot account for brainstem findings (facial paralysis, crossed sensory loss, Horner syndrome, ataxia)."
      ],
      [
        "Posterior cerebral artery (PCA), causing infarction of the lateral midbrain",
        "PCA occlusion causes visual field defects (homonymous hemianopsia) or midbrain syndromes (Weber, Benedikt), not pontine CN VII/VIII deficits."
      ]
    ],
    "shortestValidSolution": "Facial droop (entire hemiface) + deafness + ataxia + crossed pain/temp loss -> Lateral pontine syndrome (AICA occlusion).",
    "necessaryInference": "Crossed sensory loss + ipsilateral LMN facial paralysis (CN VII) + sensorineural deafness (CN VIII) = Lateral pontine syndrome. The culprit vessel is the Anterior Inferior Cerebellar Artery (AICA).",
    "strongestDistractor": "Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolateral medulla",
    "distractorExclusion": "PICA damages the nucleus ambiguus (hoarseness/dysphagia), whereas AICA damages the facial nucleus (facial paralysis) and cochlear system (hearing loss).",
    "citation": "Amarenco P. The spectrum of cerebellar infarctions. Neurology. 1991;41(7):973-979. PMID: 2067657.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Crossed sensory loss + ipsilateral LMN facial paralysis (CN VII) + sensorineural deafness (CN VIII) = Lateral pontine syndrome. The culprit vessel is the Anterior Inferior Cerebellar Artery (AICA).",
      "distractorExclusionNotes": "Strongest distractor 'Posterior inferior cerebellar artery (PICA), causing infarction of the dorsolate' excluded: PICA damages the nucleus ambiguus (hoarseness/dysphagia), whereas AICA damages the facial nucleus (facial paralysis) and cochlear system (hearing loss).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0379",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Medial Pontine Syndrome Paramedian Basilar Branches",
    "subtopic": "Abducens Nerve, Corticospinal Tract, and Medial Lemniscus Localization",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with a history of heavy tobacco use and hypertension presents with double vision and left-sided weakness. Neurological examination reveals: - Spastic hemiparesis of his left arm and left leg with an extensor plantar response (left Babinski sign) - Decreased vibration sense and proprioception on the left side of his body (left arm and leg) - Inability to abduct his right eye beyond the midline when looking to the right (right lateral rectus palsy); all other extraocular movements in both eyes are normal - Bilateral facial sensation, facial motor strength, hearing, and coordination are completely normal Occlusion of the paramedian branches of which of the following arteries is responsible for this brainstem infarction?",
    "choices": [
      [
        "Basilar artery, causing infarction of the ventromedial caudal pons",
        "Correct. Medial Pontine Syndrome (Millard-Gubler syndrome variant or Foville syndrome) is caused by atherothrombotic occlusion of the PARAMEDIAN BRANCHES OF THE BASILAR ARTERY in the caudal pons. Anatomical structures involved: (1) CORTICOSPINAL TRACT -> CONTRALATERAL spastic hemiparesis of the upper and lower extremities; (2) MEDIAL LEMNISCUS -> CONTRALATERAL loss of conscious proprioception, vibration, and fine touch; (3) ABDUCENS NERVE FIBERS (CN VI) -> IPSILATERAL lateral rectus palsy (inability to abduct the right eye on lateral gaze, producing horizontal diplopia). If the lesion extends dorsally to include the PPRF (paramedian pontine reticular formation), it produces an ipsilateral conjugate lateral gaze palsy. Sparing of spinothalamic tracts and cerebellar peduncles leaves pain/temp and coordination intact."
      ],
      [
        "Anterior spinal artery (ASA), causing infarction of the ventromedial medulla",
        "ASA occlusion causes Medial Medullary Syndrome with CN XII hypoglossal tongue deviation, not CN VI lateral rectus abducens palsy."
      ],
      [
        "Posterior cerebral artery (PCA), causing infarction of the ventromedial midbrain",
        "PCA occlusion causing midbrain infarction (Weber syndrome) damages CN III (producing ptosis, mydriasis, and 'down-and-out' eye), not isolated CN VI abduction failure."
      ],
      [
        "Anterior inferior cerebellar artery (AICA), causing infarction of the lateral caudal pons",
        "AICA occlusion causes lateral pontine syndrome with facial paralysis, deafness, ataxia, and Horner syndrome, without hemiparesis or abducens palsy."
      ],
      [
        "Middle cerebral artery (MCA), causing infarction of the precentral gyrus",
        "Cortical MCA infarction causes contralateral facial and arm hemiparesis, but cannot cause an isolated lower motor neuron CN VI abducens nerve palsy."
      ]
    ],
    "shortestValidSolution": "Contralateral hemiparesis + contralateral proprioception loss + ipsilateral CN VI abducens palsy -> Medial pontine syndrome (Paramedian branches of basilar artery).",
    "necessaryInference": "Corticospinal hemiparesis + medial lemniscus proprioception loss + CN VI lateral rectus palsy = Medial pontine syndrome. Supplied by paramedian branches of the basilar artery.",
    "strongestDistractor": "Posterior cerebral artery (PCA), causing infarction of the ventromedial midbrain",
    "distractorExclusion": "Midbrain lesions (Weber) damage CN III ('down-and-out' with blown pupil), whereas pontine lesions damage CN VI (inability to abduct).",
    "citation": "Bassetti C, Bogousslavsky J, Barth A, Regli F. Isolated infarcts of the pons. Brain. 1996;119(Pt 6):2115-2140. PMID: 9010011.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Corticospinal hemiparesis + medial lemniscus proprioception loss + CN VI lateral rectus palsy = Medial pontine syndrome. Supplied by paramedian branches of the basilar artery.",
      "distractorExclusionNotes": "Strongest distractor 'Posterior cerebral artery (PCA), causing infarction of the ventromedial midbrain' excluded: Midbrain lesions (Weber) damage CN III ('down-and-out' with blown pupil), whereas pontine lesions damage CN VI (inability to abduct).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0380",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Parinaud Syndrome Dorsal Midbrain Pinealoma",
    "subtopic": "Superior Colliculus and Pretectal Area Compression Causing Upward Gaze Palsy",
    "provisionalDifficulty": 4,
    "stem": "A 12-year-old boy is brought to the pediatric neurology clinic by his parents because of progressive morning headaches, nausea, vomiting, and difficulty looking up. Physical examination reveals bilateral papilledema. Neurological examination reveals: - Marked limitation of voluntary upward conjugate gaze (upward gaze palsy); downward conjugate gaze and horizontal saccades are fully preserved - Bilateral pupils are dilated and react sluggishly to direct and consensual light, but constrict briskly during accommodation on near vision (light-near dissociation; pseudo-Argyll Robertson pupils) - When attempting upward saccades, both globes retract into the orbits accompanied by rhythmic convergence nystagmus (convergence-retraction nystagmus) - Bilateral upper eyelid retraction revealing sclera above the limbus (Collier sign) Brain MRI demonstrates obstructive hydrocephalus secondary to a 3-cm expansile mass arising in the pineal gland that compresses the dorsal tectum of the midbrain. Which of the following midbrain structures is directly compressed to produce this upward gaze paralysis?",
    "choices": [
      [
        "Superior colliculus and adjacent pretectal nuclei of the dorsal midbrain tectal plate",
        "Correct. Parinaud syndrome (dorsal midbrain syndrome; pretectal syndrome) is caused by extrinsic mass compression or intrinsic infarction of the DORSAL MIDBRAIN TECTUM. The classic etiology on USMLE Step 1 is a PINEALOMA (germinoma or pineoblastoma of the pineal gland) in children/adolescents, which compresses the tectal plate and occludes the cerebral aqueduct of Sylvius, causing non-communicating obstructive hydrocephalus (headaches, vomiting, papilledema). Classical neuro-ophthalmological tetrad: (1) UPWARD GAZE PARALYSIS: Compression of the vertical gaze center in the PRETECTAL AREA and rostral interstitial nucleus of the MLF near the SUPERIOR COLLICULUS prevents conjugate upward saccades; (2) PSEUDO-ARGYLL ROBERTSON PUPILS (LIGHT-NEAR DISSOCIATION): Damage to the pretectal nuclei (which mediate the pupillary light reflex to the Edinger-Westphal nuclei) while sparing the more ventral cortical pathway for the near accommodation response; (3) CONVERGENCE-RETRACTION NYSTAGMUS: Co-contraction of extraocular rectus muscles upon attempted upward gaze; (4) COLLIER SIGN: Pathological bilateral eyelid retraction."
      ],
      [
        "Inferior colliculus and the lateral lemniscus auditory projection pathways",
        "The inferior colliculus mediates auditory reflexes, not visual conjugate upward gaze."
      ],
      [
        "Substantia nigra pars compacta and the ventral tegmental area dopaminergic projections",
        "Degeneration of substantia nigra pars compacta causes Parkinson disease (resting tremor, rigidity, bradykinesia), not vertical gaze palsy."
      ],
      [
        "Edinger-Westphal parasympathetic preganglionic nucleus in the ventromedial midbrain",
        "Edinger-Westphal nuclei mediate pupillary constriction and accommodation; complete destruction abolishes BOTH light and near responses, whereas Parinaud syndrome preserves near accommodation."
      ],
      [
        "Red nucleus and the rubrospinal tract in the midbrain tegmentum",
        "Red nucleus lesions cause rubral tremor or Benedikt syndrome (CN III palsy with contralateral chorea), not isolated upward gaze palsy."
      ]
    ],
    "shortestValidSolution": "Pineal mass + upward gaze palsy + light-near pupil dissociation + convergence-retraction nystagmus -> Parinaud syndrome (superior colliculus / pretectal tectum compression).",
    "necessaryInference": "Upward gaze palsy + light-near dissociation + convergence-retraction nystagmus in a child with a pineal tumor = Parinaud syndrome. Driven by compression of the superior colliculus and pretectal nuclei of the dorsal midbrain.",
    "strongestDistractor": "Edinger-Westphal parasympathetic preganglionic nucleus in the ventromedial midbrain",
    "distractorExclusion": "Edinger-Westphal damage abolishes accommodation, whereas Parinaud syndrome features light-near dissociation (near accommodation is preserved, but light response is lost).",
    "citation": "Shields M, et al. Parinaud syndrome: a review of the pretectal syndrome. J Neuroophthalmol. 2017;37(4):444-452. PMID: 28834898.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Upward gaze palsy + light-near dissociation + convergence-retraction nystagmus in a child with a pineal tumor = Parinaud syndrome. Driven by compression of the superior colliculus and pretectal nuclei of the dorsal midbrain.",
      "distractorExclusionNotes": "Strongest distractor 'Edinger-Westphal parasympathetic preganglionic nucleus in the ventromedial midbr' excluded: Edinger-Westphal damage abolishes accommodation, whereas Parinaud syndrome features light-near dissociation (near accommodation is preserved, but light response is lost).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0381",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Weber Syndrome Ventral Midbrain Infarction",
    "subtopic": "Oculomotor Nerve Fascicles and Cerebral Peduncle Corticospinal Tract",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man presents with sudden double vision and left-sided weakness. Neurological examination reveals: - Marked ptosis of the right upper eyelid - The right eye is deviated outward and downward ('down and out') at rest; on attempted gaze, there is complete paralysis of adduction, elevation, and depression of the right eye - The right pupil is dilated (6 mm) and completely non-reactive to direct light and consensual light stimulation; the left pupil is 3 mm and reacts briskly - Spastic hemiparesis of the left upper and lower extremities with hyperreflexia and an extensor plantar response (left Babinski sign) - Left lower facial weakness with flattening of the left nasolabial fold; the forehead wrinkles symmetrically (central facial palsy) Sensation to pain, temperature, and vibration is intact bilaterally. Ischemic infarction of the ventral midbrain involving which of the following paired structures accounts for this syndrome?",
    "choices": [
      [
        "Oculomotor nerve (CN III) fascicles and the crus cerebri (cerebral peduncle)",
        "Correct. Weber Syndrome (superior alternating hemiplegia) is caused by infarction of the VENTROMEDIAL MIDBRAIN, typically resulting from occlusion of paramedian branches of the posterior cerebral artery (PCA) or top of the basilar artery. Classical anatomical localization on USMLE Step 1: (1) OCULOMOTOR NERVE (CN III) FASCICLES -> IPSILATERAL CN III PALSY: Loss of somatic motor fibers to the superior, medial, and inferior recti and inferior oblique leads to complete ptosis (levator palpebrae) and unopposed lateral rectus (CN VI) and superior oblique (CN IV) action, producing a 'DOWN AND OUT' resting eye position with severe diplopia; loss of parasympathetic fibers from the Edinger-Westphal nucleus causes a FIXED, DILATED PUPIL (mydriasis) with loss of light and accommodation reflexes; (2) CRUS CEREBRI (CEREBRAL PEDUNCLE) -> CORTICOSPINAL AND CORTICOBULBAR TRACTS: Disruption of descending corticospinal fibers produces CONTRALATERAL spastic hemiparesis of the arm and leg with hyperreflexia and Babinski sign; disruption of corticobulbar fibers produces CONTRALATERAL lower facial weakness (sparing the forehead due to bilateral upper motor neuron innervation). Sensation is spared because medial lemniscus and spinothalamic tracts run more dorsally in the tegmentum."
      ],
      [
        "Trochlear nerve (CN IV) nucleus and the medial longitudinal fasciculus (MLF)",
        "Trochlear damage causes vertical diplopia worsening on downward gaze, not ptosis, mydriasis, or contralateral hemiparesis."
      ],
      [
        "Abducens nerve (CN VI) fibers and the pontine medial lemniscus",
        "Abducens damage impairs lateral abduction (lateral rectus), causing medial pontine syndrome, not midbrain down-and-out pupil dilation."
      ],
      [
        "Hypoglossal nerve (CN XII) fibers and the medullary pyramidal tract",
        "This describes Medial Medullary Syndrome (tongue deviation and hemiparesis), not oculomotor down-and-out palsy."
      ],
      [
        "Facial nerve (CN VII) motor nucleus and the lateral spinothalamic tract",
        "This describes Lateral Pontine Syndrome (AICA occlusion), which causes lower motor neuron facial paralysis, not midbrain CN III palsy."
      ]
    ],
    "shortestValidSolution": "Ipsilateral down-and-out dilated pupil + contralateral hemiparesis -> Weber syndrome (ventral midbrain CN III + crus cerebri).",
    "necessaryInference": "Ipsilateral CN III palsy ('down and out' + blown pupil) + contralateral hemiparesis = Weber syndrome. Anatomical lesion involves the CN III fascicles and the crus cerebri in the ventral midbrain.",
    "strongestDistractor": "Trochlear nerve (CN IV) nucleus and the medial longitudinal fasciculus (MLF)",
    "distractorExclusion": "Trochlear damage produces vertical diplopia on reading stairs without ptosis or mydriasis, whereas Weber syndrome damages CN III.",
    "citation": "Silverman IE, Liu GT, Bilaniuk LT, et al. The course of the oculomotor nerve through the midbrain. J Neuroophthalmol. 1995;15(4):226-234. PMID: 8963286.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Ipsilateral CN III palsy ('down and out' + blown pupil) + contralateral hemiparesis = Weber syndrome. Anatomical lesion involves the CN III fascicles and the crus cerebri in the ventral midbrain.",
      "distractorExclusionNotes": "Strongest distractor 'Trochlear nerve (CN IV) nucleus and the medial longitudinal fasciculus (MLF)' excluded: Trochlear damage produces vertical diplopia on reading stairs without ptosis or mydriasis, whereas Weber syndrome damages CN III.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0382",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Internuclear Ophthalmoplegia Medial Longitudinal Fasciculus",
    "subtopic": "Multiple Sclerosis Demyelination and Abducting Horizontal Nystagmus",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman presents with horizontal double vision that is most pronounced when looking to the left. Neurological examination reveals: - When looking straight ahead, both eyes are conjugate and aligned normally - When instructed to look to the left, her right eye fails to adduct past the midline, remaining fixed in the primary position; simultaneously, her left eye abducts fully but exhibits coarse, horizontal, rhythmic beating nystagmus (abducting nystagmus) - When instructed to look to the right, both eyes conjugate normally with full right abduction and full left adduction, with zero nystagmus - When she is instructed to look at an object brought close to the tip of her nose (convergence testing), BOTH EYES ADDUCT FULLY AND SYMMETRICALLY, and both pupils constrict briskly Demyelinating plaque formation in which of the following heavily myelinated brainstem pathways is responsible for this neuro-ophthalmological finding?",
    "choices": [
      [
        "Right medial longitudinal fasciculus (MLF) in the dorsal pons/midbrain",
        "Correct. Internuclear Ophthalmoplegia (INO) is a classic brainstem neuro-ophthalmological syndrome highly characteristic of MULTIPLE SCLEROSIS in young adults (where it is frequently bilateral) or pontine lacunar infarctions in older patients (where it is typically unilateral). PATHOPHYSIOLOGY OF HORIZONTAL CONJUGATE GAZE: When voluntary saccadic gaze is directed to the left, the left frontal eye field stimulates the left paramedian pontine reticular formation (PPRF; horizontal gaze center). The left PPRF activates the left abducens (CN VI) nucleus, causing the left lateral rectus to abduct the left eye. Concurrently, interneurons from the left CN VI nucleus cross the midline and ascend through the RIGHT MEDIAL LONGITUDINAL FASCICULUS (MLF) to synapse on the right oculomotor (CN III) subnucleus in the midbrain, stimulating the right medial rectus to adduct the right eye. In this patient, a demyelinating plaque in the RIGHT MLF severs this ascending connection: (1) The RIGHT eye FAILS TO ADDUCT on left lateral gaze (adduction deficit ipsilateral to the MLF lesion); (2) The contralateral (left) abducting eye exhibits ABDUCTING HORIZONTAL NYSTAGMUS (due to asymmetric vestibular/cerebellar feedback compensation). CRUCIAL STEP 1 PATHOGNOMONIC TEST: CONVERGENCE IS COMPLETELY PRESERVED. The convergence pathway originates in the pretectal area and projects directly to the medial rectus subnuclei, completely bypassing the MLF."
      ],
      [
        "Left abducens (CN VI) nerve fascicle in the caudal pontine tegmentum",
        "Left CN VI nerve palsy causes failure of LEFT eye ABDUCTION on left gaze; here the left eye abducts fully."
      ],
      [
        "Left paramedian pontine reticular formation (PPRF) horizontal gaze center",
        "Left PPRF destruction causes a complete conjugate gaze palsy to the left (NEITHER eye can look left), not an isolated adduction failure with abducting nystagmus."
      ],
      [
        "Left medial longitudinal fasciculus (MLF) in the rostral medulla",
        "A left MLF lesion causes an adduction deficit of the LEFT eye on RIGHT gaze, whereas this patient has right eye adduction failure on left gaze."
      ],
      [
        "Right oculomotor (CN III) peripheral nerve trunk in the subarachnoid space",
        "A peripheral CN III lesion would cause ptosis, mydriasis, and failure of adduction during BOTH lateral gaze AND convergence testing, whereas convergence is fully preserved here."
      ]
    ],
    "shortestValidSolution": "Right eye fails to adduct on left gaze + left eye abducting nystagmus + normal convergence -> Right medial longitudinal fasciculus (MLF) lesion.",
    "necessaryInference": "Adduction deficit on lateral gaze with contralateral abducting nystagmus and preserved convergence = Internuclear Ophthalmoplegia (INO). The lesion is in the MLF on the side of the adduction deficit (Right MLF).",
    "strongestDistractor": "Right oculomotor (CN III) peripheral nerve trunk in the subarachnoid space",
    "distractorExclusion": "Peripheral CN III palsy abolishes convergence and causes ptosis and pupil dilation, whereas INO preserves convergence and pupil reflexes.",
    "citation": "Frohman TC, Galetta S, Fox R, et al. Pearls & Oy-sters: The medial longitudinal fasciculus in ocular motor physiology. Neurology. 2008;70(17):e57-e67. PMID: 18427068.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Adduction deficit on lateral gaze with contralateral abducting nystagmus and preserved convergence = Internuclear Ophthalmoplegia (INO). The lesion is in the MLF on the side of the adduction deficit (Right MLF).",
      "distractorExclusionNotes": "Strongest distractor 'Right oculomotor (CN III) peripheral nerve trunk in the subarachnoid space' excluded: Peripheral CN III palsy abolishes convergence and causes ptosis and pupil dilation, whereas INO preserves convergence and pupil reflexes.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0383",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Subacute Combined Degeneration Vitamin B12 Deficiency",
    "subtopic": "Dorsal Column and Lateral Corticospinal Tract Demyelination",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old woman with a history of Hashimoto thyroiditis presents with progressive numbness and tingling in both feet, difficulty walking, and cognitive slowing over the past 6 months. Physical examination demonstrates pale conjunctivae and a smooth, beefy-red tongue (atrophic glossitis). Neurological examination reveals: - Marked bilateral loss of vibration sense and joint position sense (proprioception) in the toes and ankles; a positive Romberg sign is present - Spastic paraparesis with bilateral lower extremity weakness - Hyperactive patellar and Achilles deep tendon reflexes (3+ bilaterally) with sustained ankle clonus - Bilateral extensor plantar responses (positive Babinski signs) - Pain and temperature sensation are completely normal throughout all dermatomes Laboratory evaluation reveals hemoglobin 8.8 g/dL, MCV 114 fL (macrocytosis), hypersegmented neutrophils on peripheral smear, and marked elevation of both serum methylmalonic acid and serum homocysteine. In this patient's spinal cord, which of the following paired tracts undergo progressive spongy vacuolar demyelination?",
    "choices": [
      [
        "Dorsal columns (fasciculus gracilis and cuneatus) and lateral corticospinal tracts",
        "Correct. Subacute Combined Degeneration (SCD) of the spinal cord is caused by VITAMIN B12 (COBALAMIN) DEFICIENCY, most commonly secondary to pernicious anemia (anti-intrinsic factor or anti-parietal cell autoantibodies) or ileal disease. Cobalamin is an essential cofactor for two enzymes: (1) METHIONINE SYNTHASE (converts homocysteine to methionine; deficiency traps folate and prevents thymidylate synthesis, causing MEGALOBLASTIC ANEMIA with hypersegmented neutrophils); (2) METHYLMALONYL-COA MUTASE (converts methylmalonyl-CoA to succinyl-CoA; deficiency causes MARKED ACCUMULATION OF METHYLMALONIC ACID [MMA]). Accumulated abnormal fatty acids incorporate into neuronal membranes, driving patchy, spongy myelin vacuolization. TRACT LOCALIZATION: (a) DORSAL COLUMNS -> Bilateral loss of position and vibration sense, sensory ataxia, and positive Romberg sign; (b) LATERAL CORTICOSPINAL TRACTS -> Spastic paresis, hyperreflexia, ankle clonus, and bilateral extensor Babinski signs; (c) SPINOCEREBELLAR TRACTS -> Appendicular ataxia. Sparing of the spinothalamic tracts leaves pain and temperature sensation intact. CRITICAL STEP 1 TRAP: Folate deficiency causes an identical megaloblastic anemia, but normal MMA and NO neurological degeneration. Administering folate alone without B12 corrects the anemia but allows irreversible neurological SCD to progress."
      ],
      [
        "Anterior spinothalamic tracts and anterior corticospinal tracts",
        "Spinothalamic tracts mediate pain, temperature, and crude touch; they are spared in SCD, and anterior corticospinal tracts do not mediate the spastic Babinski paraparesis."
      ],
      [
        "Anterior horn motor neurons and lateral spinothalamic tracts",
        "Anterior horn destruction occurs in ALS and poliomyelitis (causing lower motor neuron flaccid paralysis with fasciculations), not subacute combined degeneration."
      ],
      [
        "Dorsal root ganglia and central gray anterior white commissure",
        "Anterior white commissure damage occurs in syringomyelia (cape-like loss of pain/temp), which is unrelated to vitamin B12."
      ],
      [
        "Post-synaptic sympathetic chain ganglia and intermediolateral cell columns",
        "Sympathetic chain damage causes autonomic failure (Horner syndrome), not dorsal column sensory ataxia and spastic paraparesis."
      ]
    ],
    "shortestValidSolution": "Macrocytic anemia + high methylmalonic acid + loss of proprioception/vibration (dorsal columns) + spastic Babinski (lateral corticospinal) -> Subacute Combined Degeneration (B12 deficiency).",
    "necessaryInference": "High methylmalonic acid + macrocytic anemia + loss of dorsal columns (proprioception) + lateral corticospinal demyelination (spasticity, Babinski) = Subacute Combined Degeneration secondary to Vitamin B12 deficiency.",
    "strongestDistractor": "Anterior horn motor neurons and lateral spinothalamic tracts",
    "distractorExclusion": "Anterior horn cell degeneration defines ALS, whereas B12 deficiency specifically affects the dorsal columns and lateral corticospinal tracts.",
    "citation": "Stabler SP. Vitamin B12 deficiency. N Engl J Med. 2013;368(2):149-160. PMID: 23301732.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: High methylmalonic acid + macrocytic anemia + loss of dorsal columns (proprioception) + lateral corticospinal demyelination (spasticity, Babinski) = Subacute Combined Degeneration secondary to Vitamin B12 deficiency.",
      "distractorExclusionNotes": "Strongest distractor 'Anterior horn motor neurons and lateral spinothalamic tracts' excluded: Anterior horn cell degeneration defines ALS, whereas B12 deficiency specifically affects the dorsal columns and lateral corticospinal tracts.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0384",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Tabes Dorsalis Neurosyphilis Posterior Column Degeneration",
    "subtopic": "Treponemal Dorsal Root Ganglionitis, Sensory Ataxia, and Argyll Robertson Pupils",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man presents with progressive unsteadiness when walking, frequent nighttime stumbles in the dark, and sudden, severe, stabbing 'lightning' pains shooting down his lower extremities. Neurological examination reveals: - Severe sensory ataxia with a high-stepping, slapping gait; he cannot maintain balance with his eyes closed (strikingly positive Romberg sign) - Complete loss of vibration sense and joint position sense in both lower extremities - Bilateral absence of patellar and Achilles deep tendon reflexes (hyporeflexia/areflexia) - Motor strength is 5/5 in all muscle groups throughout both lower extremities; there is no spasticity, and plantar responses are flexor (negative Babinski signs) - Bilateral pupils are small, irregular, and do not constrict in response to direct or consensual bright light stimulation, but constrict briskly when focusing on a near target (Argyll Robertson pupils) Lumbar puncture reveals positive CSF VDRL and lymphocytic pleocytosis. Treponema pallidum infection in this patient has caused chronic obliterative endarteritis and selective degenerative atrophy of which of the following spinal cord structures?",
    "choices": [
      [
        "Dorsal roots and posterior white columns (fasciculus gracilis and cuneatus) without corticospinal tract involvement",
        "Correct. Tabes Dorsalis is a manifestation of tertiary NEUROSYPHILIS (parenchymal form) developing 10 to 30 years after primary Treponema pallidum infection. Spirochetes trigger chronic obliterative endarteritis in the meninges, leading to selective chronic inflammation and degenerative atrophy of the DORSAL ROOTS (dorsal root ganglionitis) and SECONDARY DEGENERATION OF THE POSTERIOR COLUMNS (fasciculus gracilis and cuneatus) of the spinal cord. Key clinical manifestations: (1) Impairment of conscious proprioception and vibration sense -> SENSORY ATAXIA (broad-based, high-stepping 'slapping' gait that worsens markedly in the dark or with eyes closed; POSITIVE ROMBERG SIGN); (2) Afferent limb deafferentation -> ABSENT DEEP TENDON REFLEXES (areflexia); (3) Radicular sensory root irritation -> Paroxysmal, sudden, lancinating 'LIGHTNING PAINS' in the legs and abdomen (visceral crises); (4) Loss of bladder sensation -> Atonic neurogenic bladder with overflow incontinence; (5) ARGYLL ROBERTSON PUPILS ('Prostitute's pupil': Accommodates but does not React to light). CRUCIAL STEP 1 CONTRAST WITH B12 DEFICIENCY: Tabes dorsalis spares the corticospinal tracts (NO WEAKNESS, NO BABINSKI SIGN, HYPOREFLEXIA), whereas B12 deficiency damages BOTH dorsal columns and lateral corticospinal tracts (causes spasticity, hyperreflexia, and positive Babinski)."
      ],
      [
        "Anterior horns of the spinal cord and primary motor cortex Betz cells",
        "Anterior horn and Betz cell degeneration occurs in Amyotrophic Lateral Sclerosis (ALS), which causes motor weakness with mixed UMN/LMN signs, not sensory ataxia or Argyll Robertson pupils."
      ],
      [
        "Lateral corticospinal tracts and spinocerebellar tracts with dorsal column sparing",
        "This pattern does not match neurosyphilis; tabes dorsalis specifically targets the dorsal columns and spares the corticospinal tracts."
      ],
      [
        "Central gray matter anterior white commissure spanning the cervical spinal cord",
        "Anterior white commissure damage defines syringomyelia (bilateral cape-like loss of pain and temperature), not tabes dorsalis."
      ],
      [
        "Anterior spinal artery territory in the ventral two-thirds of the spinal cord",
        "Anterior spinal artery syndrome spares the posterior columns and causes bilateral motor paralysis and pain/temp loss, the exact opposite of tabes dorsalis."
      ]
    ],
    "shortestValidSolution": "Sensory ataxia + positive Romberg + lightning pains + absent DTRs + Argyll Robertson pupils -> Tabes dorsalis (selective dorsal root and posterior column atrophy).",
    "necessaryInference": "Selective dorsal column and dorsal root degeneration with sensory ataxia, absent reflexes, lightning pains, and Argyll Robertson pupils = Tabes Dorsalis (tertiary neurosyphilis). Corticospinal tracts are spared (no weakness, flexor plantars).",
    "strongestDistractor": "Lateral corticospinal tracts and spinocerebellar tracts with dorsal column sparing",
    "distractorExclusion": "Tabes dorsalis specifically destroys the posterior columns and spares the corticospinal tracts, distinguishing it from B12 deficiency (which damages both).",
    "citation": "Marra CM. Neurosyphilis. Continuum (Minneap Minn). 2015;21(6 Neuroinfectious Disease):1714-1728. PMID: 26633785.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Selective dorsal column and dorsal root degeneration with sensory ataxia, absent reflexes, lightning pains, and Argyll Robertson pupils = Tabes Dorsalis (tertiary neurosyphilis). Corticospinal tracts are spared (no weakness, flexor plantars).",
      "distractorExclusionNotes": "Strongest distractor 'Lateral corticospinal tracts and spinocerebellar tracts with dorsal column spari' excluded: Tabes dorsalis specifically destroys the posterior columns and spares the corticospinal tracts, distinguishing it from B12 deficiency (which damages both).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0385",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Amyotrophic Lateral Sclerosis Combined UMN and LMN Degeneration",
    "subtopic": "Anterior Horn Lower Motor Neurons and Corticospinal Upper Motor Neurons with Sensory Sparing",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man presents with progressive weakness and muscle wasting in his right hand over the past 8 months. He now has difficulty turning keys, buttoning shirts, and lifting heavy objects. He also notes occasional slurred speech and difficulty swallowing liquids without coughing. Physical examination reveals: - Marked atrophy of the right thenar eminence and first dorsal interosseous muscle, with visible spontaneous subcutaneous rippling and twitching (fasciculations) in the right forearm, arm, and shoulder - Motor strength is 3/5 in the right hand intrinsic muscles and 4/5 in the right biceps and triceps - Deep tendon reflexes in the right arm are brisk and hyperactive (3+ at the biceps and triceps), and the right jaw jerk reflex is pathologically exaggerated - Bilateral lower extremity examination reveals spasticity, hyperactive patellar reflexes (3+), sustained ankle clonus, and an extensor plantar response (positive Babinski sign on the right) - Sensory examination demonstrates completely normal pinprick, temperature, vibration, and position sense throughout all four extremities - Bowel and bladder sphincter functions are completely intact Electromyography (EMG) confirms active denervation with fibrillations and positive sharp waves across multiple spinal and bulbar segments. Which of the following pathological processes is the defining hallmark of this neurodegenerative disease?",
    "choices": [
      [
        "Combined degeneration of upper motor neurons in the primary motor cortex (corticospinal tracts) and lower motor neurons in the brainstem motor nuclei and spinal anterior horns, with complete sparing of sensory and autonomic pathways",
        "Correct. Amyotrophic Lateral Sclerosis (ALS; Lou Gehrig disease) is a fatal, progressive neurodegenerative disorder characterized by the PATHOGNOMONIC CO-EXISTENCE OF BOTH UPPER MOTOR NEURON (UMN) AND LOWER MOTOR NEURON (LMN) SIGNS in the same limb or spinal region. Cellular pathology: (1) LOWER MOTOR NEURONS: Degeneration and loss of large alpha-motor neurons in the ANTERIOR HORNS of the spinal cord and motor nuclei of the brainstem (cranial nerves V, VII, IX, X, XII; CN III, IV, VI are uniquely spared!). LMN findings: Asymmetric distal limb weakness, severe muscle ATROPHY, FASCICULATIONS (spontaneous motor unit twitches), and fibrillations on EMG; (2) UPPER MOTOR NEURONS: Degeneration of giant pyramidal Betz cells in the precentral motor cortex and axonal loss with astrocytic gliosis in the LATERAL CORTICOSPINAL TRACTS. UMN findings: SPASTICITY, HYPERREFLEXIA (paradoxically brisk reflexes in an atrophic limb!), positive Babinski sign, and pseudobulbar affect (pathological laughing/crying, exaggerated jaw jerk). CRUCIAL STEP 1 NEGATIVE HALLMARKS: (a) SENSATION IS COMPLETELY INTACT; (b) Oculomotor motility is preserved; (c) Bowel and bladder sphincter control (Onuf's nucleus in S2) is preserved. Familial ALS (~10%) is commonly associated with mutations in SOD1 (superoxide dismutase 1) or C9orf72 (hexanucleotide repeat expansion)."
      ],
      [
        "Selective autoimmune demyelination of central white matter tracts distributed across multiple anatomical locations over time",
        "Disseminated central demyelination defines Multiple Sclerosis, which features sensory loss (numbness, tingling), optic neuritis, and INO, rather than pure motor UMN/LMN loss with fasciculations."
      ],
      [
        "Selective destruction of the anterior horn alpha-motor neurons by an enteroviral infection with normal upper motor neurons",
        "Isolated lower motor neuron destruction occurs in Poliomyelitis and West Nile virus anterior myelitis, causing flaccid paralysis with hyporeflexia and negative Babinski, lacking UMN spasticity."
      ],
      [
        "Degeneration of the dorsal root ganglia and posterior columns secondary to paraneoplastic anti-Hu autoantibodies",
        "Paraneoplastic sensory ganglionopathy causes pure sensory ataxia with loss of proprioception, whereas ALS is a pure motor disorder."
      ],
      [
        "Immune complex-mediated small-vessel vasculitis causing ischemic mononeuritis multiplex in peripheral nerves",
        "Mononeuritis multiplex produces asymmetric peripheral nerve infarctions with both sensory and motor deficits, not combined UMN and LMN disease."
      ]
    ],
    "shortestValidSolution": "Fasciculations/atrophy (LMN) + hyperreflexia/Babinski (UMN) + normal sensation -> Amyotrophic lateral sclerosis (ALS).",
    "necessaryInference": "Simultaneous co-existence of Lower Motor Neuron signs (atrophy, fasciculations) and Upper Motor Neuron signs (hyperreflexia, Babinski) in the presence of completely normal sensory and autonomic function = Amyotrophic Lateral Sclerosis (ALS).",
    "strongestDistractor": "Selective destruction of the anterior horn alpha-motor neurons by an enteroviral infection with normal upper motor neurons",
    "distractorExclusion": "Poliomyelitis causes pure lower motor neuron flaccid paralysis with absent reflexes, whereas ALS combines anterior horn LMN loss with corticospinal UMN hyperreflexia and Babinski.",
    "citation": "Taylor JP, Brown RH Jr, Cleveland DW. Decoding ALS: from genes to mechanism. Nature. 2016;539(7628):197-206. PMID: 27830784.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Simultaneous co-existence of Lower Motor Neuron signs (atrophy, fasciculations) and Upper Motor Neuron signs (hyperreflexia, Babinski) in the presence of completely normal sensory and autonomic function = Amyotrophic Lateral Sclerosis (ALS).",
      "distractorExclusionNotes": "Strongest distractor 'Selective destruction of the anterior horn alpha-motor neurons by an enteroviral' excluded: Poliomyelitis causes pure lower motor neuron flaccid paralysis with absent reflexes, whereas ALS combines anterior horn LMN loss with corticospinal UMN hyperreflexia and Babinski.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0386",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Syringomyelia and Chiari Type I Malformation",
    "subtopic": "Disruption of Anterior White Commissure Decussation",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman presents to the clinic because of painless burns on both of her hands sustained while cooking. She reports that over the past year, she has noticed progressive clumsiness and stiffness in her upper extremities. Neurological examination reveals bilaterally absent pain and temperature sensation across her shoulders, upper chest, and upper extremities in a cape-like distribution. Light touch, vibration sense, and two-point discrimination remain entirely intact bilaterally. Motor examination demonstrates mild bilateral hand intrinsic muscle weakness and atrophy with preserved lower extremity strength and hyperactive patellar reflexes with bilateral extensor plantar responses. Sagittal T1-weighted MRI of the brain and spine shows tonsillar herniation 7 mm below the foramen magnum and an expansive fluid-filled cavity centered from C3 to T2 within the spinal cord. Which of the following neuroanatomical structures is primarily damaged to cause the patient's sensory findings?",
    "choices": [
      [
        "Decussating second-order spinothalamic axons in the anterior white commissure",
        "The anterior white commissure transmits decussating second-order spinothalamic tract fibers conveying pain and temperature sensation from the dorsal horn across the midline to the contralateral anterolateral column. Cavitation (syrinx) of the central spinal cord preferentially compresses and disrupts these crossing fibers across cervical and thoracic segments, producing a bilateral, cape-like loss of pain and temperature sensation while sparing the posteriorly positioned dorsal columns."
      ],
      [
        "Primary sensory afferents in the posterolateral tract of Lissauer",
        "The tract of Lissauer carries primary pain and temperature afferents ascending or descending 1 to 2 spinal cord segments before synapsing in the substantia gelatinosa of the dorsal horn. Unilateral injury to Lissauer tract produces ipsilateral dermatomal sensory deficits spanning 1-2 levels rather than a widespread, bilateral cape-like suspended sensory dissociation."
      ],
      [
        "Ascending heavily myelinated central processes in the fasciculus cuneatus",
        "The fasciculus cuneatus conveys fine touch, conscious proprioception, and vibratory sensation from the upper extremities. These fibers enter the dorsal column without crossing at the spinal cord level and ascend to the medulla. Sparing of light touch and vibration confirms preserved dorsal column function."
      ],
      [
        "First-order unmyelinated pseudounipolar neuron cell bodies in the dorsal root ganglia",
        "Dorsal root ganglia house primary sensory cell bodies outside the central nervous system. Selective bilateral destruction of dorsal root ganglia would cause global radicular sensory loss (touch, pain, and proprioception) rather than the classic suspended dissociated sensory loss with preserved dorsal column modalities seen in syringomyelia."
      ],
      [
        "Second-order projection neurons residing in the substantia gelatinosa",
        "Substantia gelatinosa (Rexed lamina II) neurons modulate pain transmission in the dorsal horn. While dorsal horn gray matter can be involved with massive syrinx expansion, the initial and quintessential deficit of suspended cape-like bilateral pain/temp loss arises from disruption of the decussating axons within the anterior white commissure crossing directly ventral to the central canal."
      ]
    ],
    "shortestValidSolution": "Bilateral cape-like loss of pain and temperature with preserved dorsal column touch/vibration + central cord cavity (syrinx) -> damage to decussating spinothalamic fibers in anterior white commissure.",
    "necessaryInference": "Recognize that syringomyelia enlarges from the central canal outward, initially destroying the decussating second-order spinothalamic fibers traversing the anterior white commissure before encroaching on the dorsal columns or anterior horn motor neurons.",
    "strongestDistractor": "Second-order projection neurons residing in the substantia gelatinosa",
    "distractorExclusion": "Substantia gelatinosa lies in the dorsal horn; early central canal cavitation disrupts crossing fibers in the anterior white commissure rather than dorsal horn lamina II.",
    "citation": "Klekamp J. The Pathophysiology of Syringomyelia: An Overview. Neurosurg Focus. 2017;43(3):E2. PMID: 28859987.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that syringomyelia enlarges from the central canal outward, initially destroying the decussating second-order spinothalamic fibers traversing the anterior white commissure before encroaching on the dorsal columns or anterior horn motor neurons.",
      "distractorExclusionNotes": "Strongest distractor 'Second-order projection neurons residing in the substantia gelatinosa' excluded: Substantia gelatinosa lies in the dorsal horn; early central canal cavitation disrupts crossing fibers in the anterior white commissure rather than dorsal horn lamina II.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0387",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Anterior Spinal Artery Syndrome",
    "subtopic": "Vascular Territory and Sparing of Posterior Columns",
    "provisionalDifficulty": 4,
    "stem": "A 67-year-old man undergoes repair of an infrarenal abdominal aortic aneurysm. Twelve hours postoperatively, he is noted to have complete flaccid paralysis of both lower extremities with absent deep tendon reflexes and acute urinary retention. Sensory examination reveals complete loss of pinprick and temperature sensation below the T10 dermatomal level bilaterally. However, vibratory sensation, proprioception, and light touch are completely intact in both lower extremities. Spinal cord MRI confirms ischemic infarction within a specific vascular territory. Which of the following arterial vessels was most likely compromised during the procedure?",
    "choices": [
      [
        "Artery of Adamkiewicz supplying the anterior spinal artery",
        "The artery of Adamkiewicz (arteria radicularis magna) arises typically from a left intercostal or lumbar artery between T9 and L12 and supplies the single anterior spinal artery in the lower two-thirds of the spinal cord. Compromise during aortic surgery leads to anterior spinal cord syndrome: bilateral loss of motor function (corticospinal tracts), autonomic bladder dysfunction, and bilateral loss of pain and temperature (spinothalamic tracts), with distinct preservation of dorsal column modalities (proprioception and vibration) supplied by paired posterior spinal arteries."
      ],
      [
        "Paired posterior spinal arteries originating from the vertebral arteries",
        "Posterior spinal arteries supply the posterior third of the spinal cord, including the dorsal columns (fasciculus gracilis and cuneatus) and dorsal horns. Occlusion would cause loss of vibration, fine touch, and proprioception below the lesion with preserved motor strength and spinothalamic sensation."
      ],
      [
        "Vertebral artery branches supplying the lateral corticospinal decussation",
        "The vertebral arteries give rise to the anterior spinal artery at the level of the upper medulla and cervicomedullary junction. Injury at this high level would produce quadriparesis and medullary syndromes rather than an isolated paraplegia with a sharp T10 sensory level."
      ],
      [
        "Ascending cervical arteries originating from the thyrocervical trunk",
        "Ascending cervical arteries provide radicular collateral flow to the upper cervical spinal cord. They do not supply the lower thoracic or lumbar cord segments and are unaffected during infrarenal aortic surgery."
      ],
      [
        "Superior gluteal branches providing retrograde collateral to the cauda equina",
        "The superior gluteal artery arises from the internal iliac artery and supplies the gluteal muscles and pelvic girdle. While severe pelvic ischemia can affect lumbosacral roots, it does not produce a discrete thoracic myelopathy with dissociated dorsal column sparing."
      ]
    ],
    "shortestValidSolution": "Aortic surgery complication + sudden bilateral flaccid paraplegia + loss of pain/temperature + preserved vibration/proprioception -> Anterior spinal artery infarction via compromise of the artery of Adamkiewicz.",
    "necessaryInference": "Synthesize the selective sparing of dorsal columns (supplied by posterior spinal arteries) and destruction of anterior two-thirds of the cord (motor + spinothalamic) following aortic cross-clamping to identify occlusion of the artery of Adamkiewicz.",
    "strongestDistractor": "Paired posterior spinal arteries originating from the vertebral arteries",
    "distractorExclusion": "Posterior spinal arteries supply the dorsal columns, which are demonstrably intact on physical exam.",
    "citation": "Cheshire WP, et al. Spinal Cord Infarction: A Review of Clinical Features, Imaging, and Pathophysiology. Lancet Neurol. 2021;20(2):123-134. PMID: 33484650.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Synthesize the selective sparing of dorsal columns (supplied by posterior spinal arteries) and destruction of anterior two-thirds of the cord (motor + spinothalamic) following aortic cross-clamping to identify occlusion of the artery of Adamkiewicz.",
      "distractorExclusionNotes": "Strongest distractor 'Paired posterior spinal arteries originating from the vertebral arteries' excluded: Posterior spinal arteries supply the dorsal columns, which are demonstrably intact on physical exam.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0388",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Cauda Equina vs Conus Medullaris Syndrome",
    "subtopic": "Lower Motor Neuron vs Upper Motor Neuron Localization",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old construction worker presents to the emergency department with severe, sharp, shooting pain radiating down his right leg into his foot after lifting a heavy steel beam. Over the next 24 hours, he develops weakness in his right foot and difficulty walking. Neurological examination reveals severe asymmetrical lower extremity weakness, with right ankle dorsiflexion graded 2/5 and plantarflexion graded 3/5, while the left lower extremity exhibits 5/5 strength throughout. The right Achilles tendon reflex is absent, while the left is 2+. He has asymmetric patchy hypesthesia over the right lateral leg and sole of the foot. Perianal sensation is mildly reduced on the right side. Bulbocavernosus reflex is intact, and he has not experienced urinary or fecal incontinence. Which of the following neuroanatomical locations is the primary site of lesion in this patient?",
    "choices": [
      [
        "Lumbosacral nerve roots within the spinal canal below the L1-L2 vertebral level",
        "Cauda equina syndrome results from compression of the collection of lumbosacral intradural nerve roots (L2 to S5) below the conus medullaris (which terminates at L1-L2). It is characterized by lower motor neuron signs (flaccid paresis, hyporeflexia/areflexia), severe asymmetrical radicular pain, asymmetric sensory loss, and late, gradual onset of bowel/bladder dysfunction."
      ],
      [
        "Conus medullaris terminating at the lower border of the L1 vertebral body",
        "Conus medullaris syndrome involves direct injury to the sacral spinal cord segments (S1-S5). It typically manifests with sudden onset, bilateral symmetrical perianal saddle anesthesia, early and severe bowel/bladder and sexual dysfunction, and mixed upper and lower motor neuron signs with symmetric motor weakness."
      ],
      [
        "Lumbosacral sympathetic trunk running anterolateral to the vertebral bodies",
        "The sympathetic chain carries postganglionic sympathetic fibers regulating vascular tone and sudomotor activity. Injury produces vasodilation, anhidrosis, and autonomic dysfunction, but does not cause somatic radicular pain, muscle weakness, or tendon reflex loss."
      ],
      [
        "Posterior horn neurons within the substantia gelatinosa of the L4-S1 segments",
        "Isolated posterior horn lesions cause dermatomal sensory disturbances but do not cause motor weakness or absent deep tendon reflexes, which require interruption of the alpha motor neuron or peripheral reflex arc."
      ],
      [
        "Lateral funiculus of the thoracic spinal cord above the lumbar enlargement",
        "A thoracic spinal cord lesion above the lumbar enlargement causes upper motor neuron signs in the lower extremities (spasticity, hyperreflexia, extensor plantar responses) and a sensory level across the trunk, rather than an asymmetrical radicular lower motor neuron syndrome."
      ]
    ],
    "shortestValidSolution": "Asymmetrical radicular leg pain + asymmetric flaccid foot weakness + unilateral absent Achilles reflex + preserved bowel/bladder -> Cauda equina (lumbosacral nerve roots below conus).",
    "necessaryInference": "Differentiate cauda equina syndrome (pure lower motor neuron, asymmetrical, severe radicular pain, late bladder signs) from conus medullaris syndrome (symmetric, early bladder/bowel dysfunction, mixed UMN/LMN signs).",
    "strongestDistractor": "Conus medullaris terminating at the lower border of the L1 vertebral body",
    "distractorExclusion": "Conus medullaris lesions are bilateral, symmetric, cause early severe urinary/fecal incontinence, and lack the pronounced asymmetrical radiculopathy seen here.",
    "citation": "Rider LS, Marra EM. Cauda Equina and Conus Medullaris Syndromes. StatPearls. 2023. PMID: 30725885.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Differentiate cauda equina syndrome (pure lower motor neuron, asymmetrical, severe radicular pain, late bladder signs) from conus medullaris syndrome (symmetric, early bladder/bowel dysfunction, mixed UMN/LMN signs).",
      "distractorExclusionNotes": "Strongest distractor 'Conus medullaris terminating at the lower border of the L1 vertebral body' excluded: Conus medullaris lesions are bilateral, symmetric, cause early severe urinary/fecal incontinence, and lack the pronounced asymmetrical radiculopathy seen here.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0389",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Nervous System",
    "topic": "Myasthenia Gravis vs Lambert-Eaton Syndrome",
    "subtopic": "Postsynaptic ACh Receptor vs Presynaptic P/Q-Type Calcium Channel Autoantibodies",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man presents with progressive difficulty climbing stairs and rising from a seated position over the past 4 months. He notes that his leg weakness feels somewhat better after he walks around for a few minutes. He also complains of persistent dry mouth and erectile dysfunction. On physical examination, proximal lower extremity strength is 3/5 initially, but improves to 4+/5 after 15 seconds of sustained maximal voluntary contraction. Deep tendon reflexes at the patella and Achilles are 1+ bilaterally at rest, but become 2+ immediately following brief isometric quadriceps contraction. Sensation is intact. Chest radiography reveals a 3.5-cm hilar mass with prominent mediastinal adenopathy. Which of the following pathophysiological mechanisms is responsible for this patient's neuromuscular condition?",
    "choices": [
      [
        "Autoantibodies directed against presynaptic voltage-gated P/Q-type calcium channels",
        "Lambert-Eaton myasthenic syndrome (LEMS) is a paraneoplastic autoimmune channelopathy commonly associated with small cell lung carcinoma. Autoantibodies against presynaptic P/Q-type voltage-gated calcium channels prevent calcium influx upon membrane depolarization, impairing acetylcholine exocytosis. Repetitive activation or sustained contraction leads to transient presynaptic calcium accumulation, temporarily overcoming the blockade and producing characteristically post-exercise facilitation of strength and reflexes."
      ],
      [
        "Complement-mediated destruction of postsynaptic nicotinic acetylcholine receptors",
        "Myasthenia gravis is characterized by autoantibodies against postsynaptic nicotinic acetylcholine receptors (AChR) on the motor endplate. It typically involves extraocular muscles (ptosis, diplopia) and bulbar muscles, worsens with repeated exertion (fatigability), lacks post-exercise facilitation, and is associated with thymoma rather than small cell lung cancer."
      ],
      [
        "Clostridium botulinum enzymatic cleavage of SNARE synaptosomal-associated protein 25",
        "Botulinum neurotoxin cleaves SNARE complex proteins (such as SNAP-25) preventing acetylcholine release. It produces descending flaccid paralysis with early cranial nerve deficits (dilated unreactive pupils, dysphagia, ptosis) and acute gastrointestinal symptoms, without the chronic proximal progression or post-exercise facilitation seen in LEMS."
      ],
      [
        "Antibody-dependent cell-mediated cytotoxicity against peripheral myelin protein zero",
        "Autoantibodies against myelin proteins (such as MPZ or PMP22) characterize demyelinating peripheral neuropathies (e.g., Charcot-Marie-Tooth or CIDP). They cause distal sensorimotor deficits with persistent areflexia and slowed nerve conduction velocities without post-exercise facilitation or small cell lung carcinoma."
      ],
      [
        "Autoimmune blockade of presynaptic choline acetyltransferase enzymatic activity",
        "Choline acetyltransferase (ChAT) synthesizes acetylcholine from choline and acetyl-CoA within the presynaptic terminal cytoplasm. Congenital myasthenic syndromes can arise from genetic ChAT mutations, but adult-onset paraneoplastic neuromuscular junction failure with autonomic dysfunction and post-exercise facilitation is caused by P/Q-type calcium channel autoantibodies."
      ]
    ],
    "shortestValidSolution": "Proximal weakness improving after exertion (post-exercise facilitation) + dry mouth/autonomic dysfunction + hilar mass (SCLC) -> Lambert-Eaton (presynaptic P/Q-type calcium channel antibodies).",
    "necessaryInference": "Contrast the post-exercise facilitation, diminished baseline reflexes that augment after contraction, autonomic symptoms, and small cell lung cancer association in LEMS with the fatigable weakness and thymoma association in Myasthenia Gravis.",
    "strongestDistractor": "Complement-mediated destruction of postsynaptic nicotinic acetylcholine receptors",
    "distractorExclusion": "Postsynaptic nicotinic AChR antibodies cause myasthenia gravis, which worsens with repetitive exertion and does not show post-exercise facilitation or autonomic features.",
    "citation": "Titulaer MJ, et al. Lambert-Eaton Myasthenic Syndrome: From Bench to Bedside. Autoimmunity. 2011;44(4):302-310. PMID: 21323450.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Contrast the post-exercise facilitation, diminished baseline reflexes that augment after contraction, autonomic symptoms, and small cell lung cancer association in LEMS with the fatigable weakness and thymoma association in Myasthenia Gravis.",
      "distractorExclusionNotes": "Strongest distractor 'Complement-mediated destruction of postsynaptic nicotinic acetylcholine receptor' excluded: Postsynaptic nicotinic AChR antibodies cause myasthenia gravis, which worsens with repetitive exertion and does not show post-exercise facilitation or autonomic features.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0390",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Nervous System",
    "topic": "Botulinum Toxin Mechanism of Action",
    "subtopic": "Enzymatic Cleavage of SNARE Proteins at Cholinergic Synapses",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old woman presents to the emergency department with double vision, drooping eyelids, and difficulty swallowing that began 18 hours after consuming home-canned asparagus. Physical examination demonstrates bilateral ptosis, fixed and dilated pupils poorly reactive to light, impaired extraocular motility, symmetric facial weakness, and severe xerostomia. Over the subsequent 6 hours, she develops progressive flaccid quadriparesis and shallow tachypneic breathing with a vital capacity of 12 mL/kg. Deep tendon reflexes are universally diminished. Sensory examination is completely normal. Which of the following molecular events directly causes the paralysis observed in this patient?",
    "choices": [
      [
        "Zinc-dependent endopeptidase cleavage of SNARE vesicle fusion proteins",
        "Clostridium botulinum produces a potent heat-labile neurotoxin that functions as a zinc metalloprotease. After endocytosis into cholinergic nerve terminals, the toxin's light chain cleaves specific SNARE (soluble NSF attachment protein receptor) proteins\u2014including synaptobrevin, syntaxin, and SNAP-25. This prevents acetylcholine-containing synaptic vesicles from docking and fusing with the presynaptic plasma membrane, blocking acetylcholine release at both the neuromuscular junction (causing flaccid descending paralysis) and autonomic parasympathetic synapses (causing mydriasis, dry mouth, and urinary retention)."
      ],
      [
        "Retrograde intra-axonal transport followed by cleavage of synaptobrevin in Renshaw cells",
        "This describes the mechanism of tetanospasmin (Clostridium tetani toxin). Tetanospasmin undergoes retrograde axonal transport to spinal cord inhibitory interneurons (Renshaw cells), where it cleaves synaptobrevin to block glycine and GABA exocytosis, resulting in spastic paralysis and tetany rather than flaccid paralysis."
      ],
      [
        "Irreversible inhibition of acetylcholinesterase in the synaptic cleft",
        "Organophosphates irreversibly phosphorylate and inhibit acetylcholinesterase, leading to acetylcholine accumulation in the synaptic cleft. This causes cholinergic crisis with excessive secretions (salivation, lacrimation, urination, defecation, bronchospasm) and miosis (pinpoint pupils), directly contrary to the dry mouth and dilated pupils seen in botulism."
      ],
      [
        "Selective competitive blockade of postsynaptic muscarinic M3 receptors",
        "Muscarinic antagonists (such as atropine) block postsynaptic muscarinic receptors, causing mydriasis, dry mouth, and tachycardia. However, atropine does not block nicotinic receptors at the neuromuscular junction and therefore cannot cause skeletal muscle weakness, flaccid paralysis, or respiratory failure."
      ],
      [
        "Complement activation causing membrane attack complex lysis of motor endplates",
        "Membrane attack complex (MAC) formation at the postsynaptic motor endplate is observed in severe myasthenia gravis. It is an autoimmune process that does not involve fixed dilated pupils or an acute toxin exposure from home-canned foods."
      ]
    ],
    "shortestValidSolution": "Home-canned food + descending flaccid paralysis + fixed dilated pupils + dry mouth -> Botulism (cleavage of SNARE proteins preventing ACh vesicle exocytosis).",
    "necessaryInference": "Identify Clostridium botulinum toxin from the clinical constellation (home-canned vegetables, descending paralysis, cranial neuropathies, autonomic parasympathetic blockade) and recall its molecular target (SNARE protein cleavage preventing presynaptic ACh exocytosis).",
    "strongestDistractor": "Retrograde intra-axonal transport followed by cleavage of synaptobrevin in Renshaw cells",
    "distractorExclusion": "Retrograde transport to Renshaw cells to block glycine/GABA is the mechanism of tetanospasmin, which produces muscle rigidity, trismus, and spasms, not flaccid paralysis.",
    "citation": "Pirazzini M, et al. Botulinum Neurotoxins: Biology, Pharmacology, and Toxicology. Pharmacol Rev. 2017;69(2):200-235. PMID: 28356439.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify Clostridium botulinum toxin from the clinical constellation (home-canned vegetables, descending paralysis, cranial neuropathies, autonomic parasympathetic blockade) and recall its molecular target (SNARE protein cleavage preventing presynaptic ACh exocytosis).",
      "distractorExclusionNotes": "Strongest distractor 'Retrograde intra-axonal transport followed by cleavage of synaptobrevin in Rensh' excluded: Retrograde transport to Renshaw cells to block glycine/GABA is the mechanism of tetanospasmin, which produces muscle rigidity, trismus, and spasms, not flaccid paralysis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0391",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Nervous System",
    "topic": "Tetanus Toxin Mechanism of Action",
    "subtopic": "Disinhibition of Lower Motor Neurons via Glycine and GABA Blockade",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old immigrant from rural Southeast Asia presents to the hospital with a 2-day history of neck stiffness and progressive difficulty opening his jaw. He reports stepping on a rusted nail in his garden 10 days ago, which he washed with tap water without seeking medical attention. On physical examination, he appears anxious and diaphoretic. Vital signs show blood pressure 168/98 mm Hg, heart rate 112/min, and temperature 38.1\u00b0C (100.6\u00b0F). There is pronounced rigidity of the masseter muscles, causing severe restriction of jaw opening. When the posterior pharyngeal wall is gently touched with a tongue blade, he experiences involuntary reflex spasm of the masseters without gagging. Any auditory or tactile stimulus triggers severe, painful generalized muscle spasms with arching of his back. Which of the following is the primary cellular mechanism of the toxin causing these symptoms?",
    "choices": [
      [
        "Blockade of glycine and GABA exocytosis from spinal inhibitory Renshaw interneurons",
        "Clostridium tetani produces tetanospasmin, an AB-toxin that enters peripheral motor neurons and undergoes retrograde intra-axonal transport to the spinal cord. It traverses the synaptic cleft to enter inhibitory interneurons (Renshaw cells), where its light chain cleaves synaptobrevin (VAMP-2), a SNARE protein essential for synaptic vesicle exocytosis. Cleavage prevents the release of the inhibitory neurotransmitters glycine and gamma-aminobutyric acid (GABA), disinhibiting alpha motor neurons and causing uncontrolled muscle contractions, trismus, risus sardonicus, and opisthotonos."
      ],
      [
        "Irreversible enzymatic cleavage of SNAP-25 at peripheral neuromuscular junctions",
        "Botulinum neurotoxin types A and E cleave SNAP-25 at peripheral cholinergic motor endings, inhibiting acetylcholine exocytosis. This leads to flaccid paralysis rather than the violent skeletal muscle rigidity and spasms characteristic of tetanus."
      ],
      [
        "Constitutive ADP-ribosylation of the inhibitory alpha subunit of adenylyl cyclase",
        "Pertussis toxin catalyzes ADP-ribosylation of the Gi alpha subunit, locking it in an inactive state and elevating intracellular cAMP. This modulates immune cell signaling and respiratory ciliary function, but does not cause tetanic muscle spasms or lockjaw."
      ],
      [
        "Direct agonist activation of postsynaptic nicotinic acetylcholine receptor ion channels",
        "Nicotinic agonists (such as nicotine or succinylcholine) depolarize the postsynaptic endplate. High-dose continuous exposure causes depolarization blockade resulting in flaccid neuromuscular paralysis, not the toxin-mediated central disinhibition seen in tetanus."
      ],
      [
        "Stimulation of autoantibodies targeting the voltage-gated potassium channels in peripheral nerves",
        "Antibodies against voltage-gated potassium channels (e.g., CASPR2 or LGI1) cause neuromyotonia (Isaacs syndrome) or autoimmune encephalitis with myokymia and fasciculations, but do not produce acute clostridial wound tetanus with classic trismus and opisthotonos."
      ]
    ],
    "shortestValidSolution": "Puncture wound + trismus (lockjaw) + risus sardonicus + spasms induced by stimuli -> Tetanus (retrograde axonal transport; cleavage of synaptobrevin blocking glycine and GABA from Renshaw cells).",
    "necessaryInference": "Trace the retrograde transport of tetanospasmin from peripheral wound terminals to central Renshaw cells and connect the loss of glycine/GABA inhibitory tone to generalized motor disinhibition.",
    "strongestDistractor": "Irreversible enzymatic cleavage of SNAP-25 at peripheral neuromuscular junctions",
    "distractorExclusion": "SNAP-25 cleavage at peripheral junctions is the mechanism of botulinum toxin, producing flaccid weakness rather than severe spastic contractions and rigidity.",
    "citation": "Farrar JJ, et al. Tetanus. J Neurol Neurosurg Psychiatry. 2000;69(3):292-301. PMID: 10945801.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Trace the retrograde transport of tetanospasmin from peripheral wound terminals to central Renshaw cells and connect the loss of glycine/GABA inhibitory tone to generalized motor disinhibition.",
      "distractorExclusionNotes": "Strongest distractor 'Irreversible enzymatic cleavage of SNAP-25 at peripheral neuromuscular junctions' excluded: SNAP-25 cleavage at peripheral junctions is the mechanism of botulinum toxin, producing flaccid weakness rather than severe spastic contractions and rigidity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0392",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Guillain-Barr\u00e9 Syndrome",
    "subtopic": "Endoneurial Inflammatory Infiltrate and Albuminocytologic Dissociation",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old man presents to the emergency department with a 3-day history of tingling in both feet followed by ascending weakness. He now requires assistance to stand from a chair and walk. Two weeks ago, he experienced an acute episode of fever, abdominal cramps, and bloody diarrhea that resolved spontaneously without antibiotics. Physical examination demonstrates symmetric bilateral lower extremity weakness (3/5 in hip flexors, knee extensors, and ankle dorsiflexors) and mild upper extremity weakness (4/5 in grip strength). Deep tendon reflexes are completely absent at the patella and Achilles tendons bilaterally and 1+ at the biceps. Sensation to vibration is slightly diminished in the toes, while pinprick sensation is preserved. Lumbar puncture is performed; cerebrospinal fluid analysis reveals: - Opening pressure: 140 mm H2O (normal: 70\u2013180 mm H2O) - White blood cell count: 3/mm3 (normal: 0\u20135/mm3) - Protein: 145 mg/dL (normal: 15\u201345 mg/dL) - Glucose: 62 mg/dL (normal: 40\u201370 mg/dL). Which of the following histopathological features is most characteristic of the peripheral nervous system lesion in this patient?",
    "choices": [
      [
        "Segmental demyelination with endoneurial mononuclear inflammatory infiltrates",
        "The patient has Guillain-Barr\u00e9 syndrome (acute inflammatory demyelinating polyradiculoneuropathy, AIDP) triggered by Campylobacter jejuni enteritis. The pathogenesis involves molecular mimicry between lipooligosaccharides of C. jejuni and host gangliosides (e.g., GM1, GD1a). Histologically, AIDP is characterized by segmental demyelination of peripheral nerves and spinal nerve roots associated with an endoneurial mononuclear inflammatory infiltrate (T cells and macrophages) with characteristic cerebrospinal fluid albuminocytologic dissociation (elevated protein with normal cell count)."
      ],
      [
        "Concentric laminated Schwann cell proliferation forming 'onion bulbs'",
        "Onion bulb formations represent chronic cycles of demyelination and remyelination seen in hereditary neuropathies such as Charcot-Marie-Tooth disease type 1A or chronic inflammatory demyelinating polyneuropathy (CIDP), rather than acute post-infectious Guillain-Barr\u00e9 syndrome."
      ],
      [
        "Focal necrotizing vasculitis with fibrinoid necrosis of the epineurial vasa nervorum",
        "Fibrinoid necrosis and transmural inflammation of the vasa nervorum are the hallmark of mononeuritis multiplex secondary to systemic vasculitis (e.g., polyarteritis nodosa or granulomatosis with polyangiitis), presenting with asymmetric, multifocal peripheral nerve infarctions."
      ],
      [
        "Loss of anterior horn alpha motor neurons with reactive astrocytic gliosis",
        "Anterior horn alpha motor neuron degeneration is characteristic of amyotrophic lateral sclerosis (ALS) or poliomyelitis. ALS presents with combined upper and lower motor neuron signs without sensory symptoms, and poliomyelitis presents with asymmetric flaccid paralysis and CSF pleocytosis."
      ],
      [
        "Granulomatous endoneurial inflammation with acid-fast lepromatous bacilli",
        "Endoneurial granulomas containing acid-fast bacilli represent Mycobacterium leprae infection (leprosy), presenting with hypoesthetic skin patches and asymmetric peripheral nerve enlargement (e.g., great auricular or ulnar nerves)."
      ]
    ],
    "shortestValidSolution": "Bloody diarrhea (Campylobacter) -> ascending symmetric weakness + areflexia + CSF albuminocytologic dissociation -> Guillain-Barr\u00e9 syndrome (segmental demyelination + endoneurial mononuclear infiltrate).",
    "necessaryInference": "Link preceding Campylobacter enteritis to molecular mimicry causing AIDP; recognize albuminocytologic dissociation on CSF and identify the acute histopathologic hallmark (endoneurial inflammatory infiltrate with segmental demyelination).",
    "strongestDistractor": "Concentric laminated Schwann cell proliferation forming 'onion bulbs'",
    "distractorExclusion": "Onion bulbs represent chronic, repetitive cycles of demyelination and remyelination over years in Charcot-Marie-Tooth or CIDP, not acute Guillain-Barr\u00e9 syndrome.",
    "citation": "Willison HJ, Jacobs BC, van Doorn PA. Guillain-Barr\u00e9 Syndrome. Lancet. 2016;388(10045):717-727. PMID: 26948435.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Link preceding Campylobacter enteritis to molecular mimicry causing AIDP; recognize albuminocytologic dissociation on CSF and identify the acute histopathologic hallmark (endoneurial inflammatory infiltrate with segmental demyelination).",
      "distractorExclusionNotes": "Strongest distractor 'Concentric laminated Schwann cell proliferation forming 'onion bulbs'' excluded: Onion bulbs represent chronic, repetitive cycles of demyelination and remyelination over years in Charcot-Marie-Tooth or CIDP, not acute Guillain-Barr\u00e9 syndrome.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0393",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Charcot-Marie-Tooth Disease Type 1A",
    "subtopic": "PMP22 Duplication and Onion Bulb Formation",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old boy is brought to the pediatric neurology clinic by his parents due to frequent ankle sprains and difficulty running. His father notes that he has had a similar gait since adolescence and wears orthotic shoe inserts. On physical examination, the patient has prominent high-arched feet (pes cavus) bilaterally and hammer toes. There is noticeable bilateral wasting of the lower third of the legs, giving an inverted champagne bottle appearance. Motor examination reveals bilateral weakness in ankle dorsiflexion and eversion (3/5) with preserved proximal leg strength. Deep tendon reflexes are absent at the Achilles tendons bilaterally and 1+ at the patellae. Sensation to vibration and pinprick is moderately decreased in a stocking distribution below the mid-shin. Sural nerve biopsy demonstrates repetitive concentric laminations of Schwann cell cytoplasm surrounding thinly myelinated axons ('onion bulb' appearance). Which of the following genetic alterations is the most frequent cause of this condition?",
    "choices": [
      [
        "Submicroscopic duplication of the peripheral myelin protein 22 gene on chromosome 17p11.2",
        "Charcot-Marie-Tooth disease type 1A (CMT1A) is an autosomal dominant hereditary motor and sensory neuropathy most commonly caused by a 1.4-megabase duplication on chromosome 17p11.2 containing the PMP22 (peripheral myelin protein 22) gene. Overexpression of PMP22 disrupts myelin compaction and Schwann cell differentiation, leading to chronic cycles of demyelination and remyelination that histologically produce concentric Schwann cell cytoplasmic whorls ('onion bulbs'), distal lower extremity atrophy (stork leg / inverted champagne bottle), pes cavus, and sensory loss."
      ],
      [
        "Trinucleotide GAA repeat expansion in the first intron of the frataxin gene",
        "GAA trinucleotide repeat expansion in the FXN gene on chromosome 9q causes Friedreich ataxia. It causes mitochondrial iron overload, spinocerebellar ataxia, hypertrophic cardiomyopathy, scoliosis, and diabetes mellitus without the classic onion bulb peripheral nerve pathology of CMT1A."
      ],
      [
        "Inactivating point mutations in the myelin protein zero gene on chromosome 1q22",
        "Mutations in MPZ cause CMT1B. While clinically similar to CMT1A, CMT1B accounts for fewer than 10% of demyelinating CMT cases, whereas the 17p11.2 PMP22 duplication accounts for approximately 70% to 80% of all CMT1 cases."
      ],
      [
        "CAG repeat expansion in the androgen receptor gene on chromosome Xq12",
        "CAG repeat expansion in the androgen receptor gene causes spinal and bulbar muscular atrophy (Kennedy disease), an X-linked lower motor neuron disorder with gynecomastia, testicular atrophy, and bulbar weakness, not hereditary motor sensory neuropathy."
      ],
      [
        "Heterozygous deletion of the survival motor neuron 1 gene on chromosome 5q13",
        "Biallelic deletion/mutation of SMN1 causes spinal muscular atrophy (SMA), which is a motor neuron disorder involving destruction of anterior horn cells in infants and children, presenting with flaccid weakness without sensory loss or pes cavus."
      ]
    ],
    "shortestValidSolution": "Pes cavus + hammer toes + inverted champagne bottle calves + onion bulb nerve biopsy -> Charcot-Marie-Tooth Type 1A (PMP22 duplication on 17p11.2).",
    "necessaryInference": "Identify CMT1A from the clinical triad of pes cavus, distal calf wasting, and onion bulb biopsy, and identify PMP22 duplication as the predominant genetic etiology.",
    "strongestDistractor": "Inactivating point mutations in the myelin protein zero gene on chromosome 1q22",
    "distractorExclusion": "MPZ mutations cause CMT1B, a far less common variant; PMP22 duplication is the classic and most frequent cause (>70%) tested on USMLE Step 1.",
    "citation": "Pareyson D, Marchesi C. Diagnosis, Natural History, and Management of Charcot-Marie-Tooth Disease. Lancet Neurol. 2009;8(7):654-667. PMID: 19539237.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify CMT1A from the clinical triad of pes cavus, distal calf wasting, and onion bulb biopsy, and identify PMP22 duplication as the predominant genetic etiology.",
      "distractorExclusionNotes": "Strongest distractor 'Inactivating point mutations in the myelin protein zero gene on chromosome 1q22' excluded: MPZ mutations cause CMT1B, a far less common variant; PMP22 duplication is the classic and most frequent cause (>70%) tested on USMLE Step 1.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0394",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Horner Syndrome Anatomical Localization",
    "subtopic": "First-Order, Second-Order, and Third-Order Oculosympathetic Pathways",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man presents with progressive hoarseness, left shoulder pain radiating down the medial aspect of his arm, and a droopy left eyelid over the past 6 weeks. He has a 40-pack-year smoking history. Physical examination reveals mild left-sided ptosis, pupillary asymmetry that is more pronounced in dim light (left pupil 2.5 mm, right pupil 5.0 mm), and anhidrosis involving the left side of his face and forehead. Neurological examination also reveals weakness of left hand intrinsic muscles and hypesthesia along the medial forearm (C8-T1 distribution). Instillation of topical apraclonidine 0.5% eyedrops results in dilation of the left pupil and reversal of the ptosis, while the right pupil remains unchanged. Which of the following neuroanatomical structures is directly infiltrated by the underlying lesion in this patient?",
    "choices": [
      [
        "Preganglionic sympathetic fibers arising from the ciliospinal center of Budge within the paravertebral sympathetic trunk",
        "The patient has a Pancoast tumor (superior pulmonary sulcus carcinoma) infiltrating the cervical sympathetic chain and inferior cervical/stellate ganglion, producing Horner syndrome (ptosis, miosis, anhidrosis) and brachial plexopathy (C8-T1 lower trunk involvement causing hand weakness and medial arm numbness). The sympathetic pathway to the eye involves: 1st order from hypothalamus to ciliospinal center of Budge (C8-T2); 2nd order (preganglionic) traversing through the apical pleura in the paravertebral sympathetic trunk to the superior cervical ganglion; and 3rd order (postganglionic) traveling along the carotid arteries. Apical lung tumors specifically compress the 2nd order preganglionic fibers in the sympathetic chain."
      ],
      [
        "Postganglionic sympathetic fibers traveling along the internal carotid arterial plexus",
        "Third-order postganglionic sympathetic fibers travel with the internal carotid artery to the orbit. Lesions here (e.g., internal carotid artery dissection) cause ptosis and miosis, but cause either no facial anhidrosis or anhidrosis limited strictly to a small patch on the medial forehead, because fibers supplying facial sweat glands branch off with the external carotid artery."
      ],
      [
        "First-order central sympathetic neurons descending through the posterolateral brainstem",
        "First-order central sympathetic fibers originate in the posterolateral hypothalamus and descend through the lateral brainstem to C8-T2. Lesions here (such as lateral medullary infarction / Wallenberg syndrome) cause central Horner syndrome accompanied by brainstem signs (vertigo, ataxia, crossed analgesia) rather than shoulder pain and hand weakness."
      ],
      [
        "Parasympathetic preganglionic fibers originating from the Edinger-Westphal nucleus",
        "The Edinger-Westphal nucleus gives rise to preganglionic parasympathetic fibers that travel with CN III to the ciliary ganglion, responsible for pupillary constriction (miosis) and accommodation. Disruption causes a dilated, unreactive pupil (mydriasis) and impaired accommodation, the opposite of Horner syndrome."
      ],
      [
        "Somatic motor fibers traveling within the superior division of the oculomotor nerve",
        "The superior division of CN III innervates the levator palpebrae superioris and superior rectus. Lesions cause severe ptosis and impaired upward gaze, but do not produce miosis or facial anhidrosis."
      ]
    ],
    "shortestValidSolution": "Apical lung mass (Pancoast) + Horner syndrome (ptosis, miosis, hemifacial anhidrosis) + C8-T1 hand weakness -> Second-order preganglionic sympathetic chain compression.",
    "necessaryInference": "Differentiate the 3 orders of the oculosympathetic pathway: 2nd order preganglionic fibers exit at C8-T2, ascend through the lung apex via the paravertebral sympathetic trunk to the superior cervical ganglion, and cause complete hemifacial anhidrosis when disrupted by a Pancoast tumor.",
    "strongestDistractor": "Postganglionic sympathetic fibers traveling along the internal carotid arterial plexus",
    "distractorExclusion": "Postganglionic internal carotid plexus lesions spare facial sweating because facial sudomotor fibers travel along the external carotid artery.",
    "citation": "Martin TJ. Horner Syndrome: A Clinical Review. ACS Chem Neurosci. 2018;9(2):177-186. PMID: 29286620.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Differentiate the 3 orders of the oculosympathetic pathway: 2nd order preganglionic fibers exit at C8-T2, ascend through the lung apex via the paravertebral sympathetic trunk to the superior cervical ganglion, and cause complete hemifacial anhidrosis when disrupted by a Pancoast tumor.",
      "distractorExclusionNotes": "Strongest distractor 'Postganglionic sympathetic fibers traveling along the internal carotid arterial ' excluded: Postganglionic internal carotid plexus lesions spare facial sweating because facial sudomotor fibers travel along the external carotid artery.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0395",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Cavernous Sinus Thrombosis",
    "subtopic": "Neurovascular Relationships and Vulnerability of Abducens Nerve",
    "provisionalDifficulty": 4,
    "stem": "A 23-year-old man presents to the emergency department with severe retro-orbital headache, high-grade fever, and double vision for 2 days. He reports squeezing a large, painful acne pustule on his nasal bridge 5 days ago. Physical examination reveals a toxic-appearing febrile young man with marked left periorbital edema, chemosis, and proptosis. Visual acuity is intact. Cranial nerve examination reveals complete inability to abduct the left eye on horizontal gaze. Pupils are equal and react sluggishly to light. There is decreased sensation to pinprick over the left forehead, brow, and cheek. Contrast-enhanced MRI of the brain confirms a filling defect within the left cavernous sinus. Which of the following cranial nerves traverses the cavernous sinus lumen directly adjacent to the internal carotid artery, making it particularly vulnerable to early isolated injury?",
    "choices": [
      [
        "Abducens nerve (cranial nerve VI)",
        "The cavernous sinus contains the internal carotid artery and cranial nerve VI (abducens) passing directly through its venous lumen, surrounded by trabeculae. In contrast, cranial nerves III (oculomotor), IV (trochlear), V1 (ophthalmic), and V2 (maxillary) run embedded within the lateral dural wall of the sinus. Because CN VI runs freely through the center of the sinus lumen adjacent to the carotid artery, it is classically the first cranial nerve compressed or damaged in septic cavernous sinus thrombosis, causing an early isolated lateral gaze palsy (inability to abduct the ipsilateral eye)."
      ],
      [
        "Oculomotor nerve (cranial nerve III)",
        "CN III courses embedded within the lateral wall of the cavernous sinus, superior to CN IV and V1. While CN III involvement is common in advanced cavernous sinus thrombosis (causing ptosis and ophthalmoplegia), it is protected within the dural wall and not located centrally within the lumen."
      ],
      [
        "Trochlear nerve (cranial nerve IV)",
        "CN IV courses within the lateral dural wall between CN III and V1. Damage causes vertical diplopia and impaired depression in adduction, but CN IV is not situated within the sinus lumen."
      ],
      [
        "Ophthalmic division of the trigeminal nerve (cranial nerve V1)",
        "CN V1 passes within the inferior portion of the lateral wall of the cavernous sinus before entering the superior orbital fissure. Compression produces forehead/brow sensory loss, but V1 is not located free in the venous lumen."
      ],
      [
        "Mandibular division of the trigeminal nerve (cranial nerve V3)",
        "CN V3 exits the middle cranial fossa directly through the foramen ovale without ever passing through or within the walls of the cavernous sinus. It is completely unaffected in cavernous sinus pathology."
      ]
    ],
    "shortestValidSolution": "Facial pimple squeezing -> retro-orbital headache, chemosis, proptosis + cavernous sinus thrombosis -> CN VI runs freely in the venous lumen adjacent to the internal carotid artery.",
    "necessaryInference": "Distinguish the contents of the lateral dural wall (CN III, IV, V1, V2) from the structures floating directly within the cavernous sinus venous lumen (internal carotid artery and CN VI), explaining why lateral gaze palsy is typically the earliest focal deficit.",
    "strongestDistractor": "Oculomotor nerve (cranial nerve III)",
    "distractorExclusion": "CN III is embedded in the lateral dural wall, whereas CN VI is uniquely situated directly within the venous lumen adjacent to the internal carotid artery.",
    "citation": "Plewa MC, et al. Cavernous Sinus Thrombosis. StatPearls. 2023. PMID: 28846357.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Distinguish the contents of the lateral dural wall (CN III, IV, V1, V2) from the structures floating directly within the cavernous sinus venous lumen (internal carotid artery and CN VI), explaining why lateral gaze palsy is typically the earliest focal deficit.",
      "distractorExclusionNotes": "Strongest distractor 'Oculomotor nerve (cranial nerve III)' excluded: CN III is embedded in the lateral dural wall, whereas CN VI is uniquely situated directly within the venous lumen adjacent to the internal carotid artery.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0396",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Visual Pathway Lesions and Quadrantanopia",
    "subtopic": "Meyer Loop vs Baum Loop Anatomical Course",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old woman is evaluated following a motor vehicle collision in which her car was struck on the passenger side because she did not see the oncoming vehicle. She also describes experiencing intermittent focal seizures characterized by olfactory hallucinations of burning rubber followed by brief episodes of lip-smacking and impaired responsiveness. Neurological examination is notable for a visual field defect: visual field testing reveals a dense, homonymous right superior quadrantanopia ('pie in the sky' defect) with normal visual acuity in both eyes. Pupillary light reflexes are brisk and symmetric bilaterally. An axial T2-weighted MRI of the brain demonstrates a well-circumscribed hyperintense mass in the temporal lobe. Which of the following tracts has been interrupted by this mass lesion?",
    "choices": [
      [
        "Meyer loop fibers arching through the temporal lobe around the inferior horn of the lateral ventricle",
        "Meyer loop carries optic radiation fibers originating from the lateral geniculate nucleus (LGN) that encode the superior contralateral visual quadrant. These axons sweep anteriorly and inferiorly through the temporal lobe around the temporal (inferior) horn of the lateral ventricle before turning posteriorly toward the lingual gyrus of the primary visual cortex (V1) below the calcarine fissure. Interruption of Meyer loop produces a contralateral superior quadrantanopia ('pie in the sky'). Temporal lobe pathology (tumors, temporal lobectomy) commonly causes this defect accompanied by temporal lobe seizures."
      ],
      [
        "Baum loop fibers passing directly through the parietal lobe around the lateral ventricle",
        "Baum loop carries optic radiation fibers representing the inferior contralateral visual quadrant. These fibers travel through the retrolenticular internal capsule directly through the parietal lobe toward the cuneus above the calcarine fissure. Damage results in a contralateral inferior quadrantanopia ('pie on the floor')."
      ],
      [
        "Uncrossed temporal retinal fibers traversing the ipsilateral lateral geniculate nucleus",
        "Uncrossed temporal retinal fibers carry visual information from the ipsilateral hemifield to the LGN. Damage anterior to the optic chiasm results in monocular visual loss, not a homonymous quadrantanopia."
      ],
      [
        "Decussating nasal retinal fibers forming the anterior notch of the optic chiasm",
        "Decussating nasal retinal fibers in the optic chiasm transmit temporal visual field inputs from both eyes. Compression of the chiasm (e.g., pituitary adenoma) produces bitemporal hemianopsia, not a unilateral superior homonymous quadrantanopia."
      ],
      [
        "Pretectal afferent fibers traversing the brachium of the superior colliculus",
        "Pretectal fibers mediate the afferent limb of the pupillary light reflex, connecting the optic tract to the Edinger-Westphal nuclei. Lesions in this pathway (or the dorsal midbrain) cause light-near dissociation (Argyll Robertson or Parinaud syndrome) without homonymous quadrantic visual field cuts."
      ]
    ],
    "shortestValidSolution": "Temporal lobe mass + olfactory seizures + contralateral superior quadrantanopia ('pie in the sky') -> Meyer loop interruption.",
    "necessaryInference": "Map the visual field defect (superior quadrantanopia) to optic radiation anatomy: Meyer loop loops through the temporal lobe around the inferior horn of the lateral ventricle to the lingual gyrus.",
    "strongestDistractor": "Baum loop fibers passing directly through the parietal lobe around the lateral ventricle",
    "distractorExclusion": "Baum loop courses through the parietal lobe and carries inferior visual fields; lesions produce contralateral inferior quadrantanopia ('pie on the floor').",
    "citation": "Pelak VS. Neuro-Ophthalmology of the Visual Pathways. Continuum (Minneap Minn). 2019;25(5):1333-1361. PMID: 31584540.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Map the visual field defect (superior quadrantanopia) to optic radiation anatomy: Meyer loop loops through the temporal lobe around the inferior horn of the lateral ventricle to the lingual gyrus.",
      "distractorExclusionNotes": "Strongest distractor 'Baum loop fibers passing directly through the parietal lobe around the lateral v' excluded: Baum loop courses through the parietal lobe and carries inferior visual fields; lesions produce contralateral inferior quadrantanopia ('pie on the floor').",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0397",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Occipital Lobe Infarction and Macular Sparing",
    "subtopic": "Posterior Cerebral Artery Occlusion and Middle Cerebral Artery Collaterals",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old man presents to the emergency department with sudden difficulty seeing objects on his left side. He has a history of long-standing hypertension, type 2 diabetes mellitus, and coronary artery disease. On physical examination, blood pressure is 158/88 mm Hg and heart rate is 76/min. Automated perimetry confirms a left homonymous hemianopsia with complete preservation of central visual acuity (20/20 in each eye) and an intact central 5-degree visual field in both eyes ('macular sparing'). Pupillary light reflexes and extraocular movements are entirely normal, and he has no extremity weakness, numbness, or ataxia. Diffusion-weighted MRI of the brain confirms an acute ischemic stroke in the primary visual cortex of the right occipital lobe. Which of the following vascular explanations accounts for the preservation of central vision in this patient?",
    "choices": [
      [
        "Dual vascular collateral supply to the occipital pole provided by the middle cerebral artery",
        "The primary visual cortex (striate cortex, Brodmann area 17) along the calcarine fissure is supplied primarily by calcarine branches of the posterior cerebral artery (PCA). However, the occipital pole\u2014which contains an extraordinarily large cortical representation of the macula (fovea)\u2014receives dual, overlapping vascular perfusion from terminal anastomoses of both the posterior cerebral artery and the middle cerebral artery (MCA). Consequently, when a PCA thromboembolic occlusion infarctions the occipital cortex, collateral flow from the MCA preserves the macular representation at the occipital pole, resulting in homonymous hemianopsia with classic macular sparing."
      ],
      [
        "Retrograde perfusion of the visual cortex via the posterior communicating artery",
        "The posterior communicating artery (PCoA) connects the internal carotid artery to the PCA. While PCoA patency can provide collateral inflow if the proximal P1 segment of the PCA is occluded, it provides global hemispheric PCA flow, rather than selectively perfusing the occipital pole to spare the macula while allowing the rest of the calcarine cortex to infarct."
      ],
      [
        "Bilateral decussation of foveal retinal ganglion cell axons in the optic chiasm",
        "Retinal ganglion cell axons from each nasal hemiretina decussate at the optic chiasm, while temporal fibers do not. The fovea does not project bilaterally to both visual cortices from a single eye; each occipital hemisphere processes strictly the contralateral hemifield."
      ],
      [
        "Direct collateral anastomoses between the anterior choroidal artery and calcarine branches",
        "The anterior choroidal artery supplies the optic tract, lateral geniculate nucleus, and posterior limb of the internal capsule. It does not supply the occipital cortex or occipital pole."
      ],
      [
        "Sprouting of new cortical microvessels from the superior cerebellar artery",
        "The superior cerebellar artery supplies the superior cerebellum and dorsal midbrain. It does not provide collateral neocortical perfusion to the occipital lobe."
      ]
    ],
    "shortestValidSolution": "PCA infarction + contralateral homonymous hemianopsia with macular sparing -> dual blood supply to the occipital pole from MCA collaterals.",
    "necessaryInference": "Recognize that macular sparing in occipital PCA stroke occurs because the occipital pole macular representation receives dual collateral perfusion from the middle cerebral artery.",
    "strongestDistractor": "Retrograde perfusion of the visual cortex via the posterior communicating artery",
    "distractorExclusion": "PCoA provides flow to the entire PCA territory if P1 is occluded; it cannot explain selective sparing of only the occipital pole macula when PCA cortical branches are occluded.",
    "citation": "Biousse V, Newman NJ. Vascular Disorders of the Visual Cortex. Continuum (Minneap Minn). 2019;25(5):1362-1376. PMID: 31584541.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that macular sparing in occipital PCA stroke occurs because the occipital pole macular representation receives dual collateral perfusion from the middle cerebral artery.",
      "distractorExclusionNotes": "Strongest distractor 'Retrograde perfusion of the visual cortex via the posterior communicating artery' excluded: PCoA provides flow to the entire PCA territory if P1 is occluded; it cannot explain selective sparing of only the occipital pole macula when PCA cortical branches are occluded.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0398",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Normal Pressure Hydrocephalus",
    "subtopic": "Distortion of Periventricular Sacral Motor Fibers",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old man is brought to the clinic by his daughter because of gradual cognitive decline, urinary incontinence, and difficulty walking over the past 8 months. His daughter notes that he has become increasingly forgetful, slow to respond, and has had several episodes of involuntary urination before reaching the toilet. On physical examination, his gait is slow, wide-based, and shuffling, with his feet appearing 'glued to the floor' (magnetic gait); however, there is no resting tremor, cogwheel rigidity, or extremity weakness. Deep tendon reflexes are 2+ symmetrically, and plantar responses are flexor. Non-contrast head CT reveals marked symmetric enlargement of the lateral and third ventricles out of proportion to sulcal enlargement, with flattening of cortical sulci against the calvarium. Lumbar puncture demonstrates a normal opening pressure of 130 mm H2O; removal of 35 mL of cerebrospinal fluid leads to immediate, marked improvement in his gait velocity and step height. Which of the following neuroanatomical mechanisms directly explains the patient's gait disturbance and urinary urgency?",
    "choices": [
      [
        "Stretching of sacral and lower extremity corticospinal fibers in the corona radiata",
        "Normal pressure hydrocephalus (NPH) is characterized by the classic triad of gait disturbance ('magnetic' gait / gait apraxia), cognitive impairment, and urinary urge incontinence ('wet, wacky, and wobbly'). Ventriculomegaly with normal opening pressure exerts mechanical shear stress and distention on the periventricular white matter, specifically stretching the corona radiata fibers traversing alongside the lateral ventricles. Because the sacral and lumbar motor and autonomic fibers course most medially adjacent to the ventricular wall, they are stretched first, causing lower extremity gait disturbance and early urinary urge incontinence."
      ],
      [
        "Selective neurodegeneration of pigmented dopaminergic neurons in the substantia nigra pars compacta",
        "Loss of dopaminergic neurons in the substantia nigra pars compacta causes Parkinson disease, presenting with asymmetric resting tremor, cogwheel rigidity, bradykinesia, and postural instability, rather than the isolated magnetic gait, ventriculomegaly, and CSF tap test responsiveness of NPH."
      ],
      [
        "Ischemic demyelination of the posterior columns in the cervical spinal cord",
        "Dorsal column demyelination (as seen in subacute combined degeneration or tabes dorsalis) causes sensory ataxia with positive Romberg sign and loss of vibratory/proprioceptive sensation, not a frontal/magnetic gait apraxia."
      ],
      [
        "Atrophy of cholinergic neurons within the nucleus basalis of Meynert",
        "Nucleus basalis of Meynert degeneration is prominent in Alzheimer disease, which causes early profound episodic memory impairment rather than prominent early gait apraxia and urinary urgency with ventriculomegaly out of proportion to sulcal widening."
      ],
      [
        "Obstruction of cerebrospinal fluid outflow at the bilateral foramina of Monro",
        "Obstruction at the foramina of Monro causes non-communicating (obstructive) hydrocephalus of the lateral ventricles with elevated intracranial pressure (headache, papilledema, vomiting), not normal-pressure communicating hydrocephalus with the clinical triad."
      ]
    ],
    "shortestValidSolution": "Magnetic gait + cognitive decline + urinary incontinence ('wet, wacky, wobbly') + ventriculomegaly + CSF tap improvement -> NPH (stretching of sacral motor fibers in corona radiata).",
    "necessaryInference": "Connect ventricular enlargement without sulcal atrophy to periventricular mechanical distortion, specifically recognizing that the medially situated sacral/lumbar corticospinal fibers in the corona radiata are stretched first.",
    "strongestDistractor": "Obstruction of cerebrospinal fluid outflow at the bilateral foramina of Monro",
    "distractorExclusion": "Foramina of Monro obstruction causes non-communicating hydrocephalus with elevated intracranial pressure, papilledema, and headaches, whereas NPH has normal opening pressure and communicating CSF flow.",
    "citation": "Williams MA, Malm J. Diagnosis and Treatment of Normal Pressure Hydrocephalus. Continuum (Minneap Minn). 2016;22(2 Dementia):579-599. PMID: 27042909.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Connect ventricular enlargement without sulcal atrophy to periventricular mechanical distortion, specifically recognizing that the medially situated sacral/lumbar corticospinal fibers in the corona radiata are stretched first.",
      "distractorExclusionNotes": "Strongest distractor 'Obstruction of cerebrospinal fluid outflow at the bilateral foramina of Monro' excluded: Foramina of Monro obstruction causes non-communicating hydrocephalus with elevated intracranial pressure, papilledema, and headaches, whereas NPH has normal opening pressure and co",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0399",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Carpal Tunnel Syndrome Median Nerve Entrapment",
    "subtopic": "Direct Mechanism Disclosure Rejection Exemplar",
    "provisionalDifficulty": 2,
    "stem": "A 45-year-old typist presents with numbness in the thumb, index, and middle fingers caused by compression of the median nerve within the carpal tunnel beneath the flexor retinaculum. Which of the following structures is compressed in the carpal tunnel?",
    "choices": [
      [
        "Median nerve",
        "The median nerve is compressed in carpal tunnel syndrome beneath the transverse carpal ligament."
      ],
      [
        "Thoracic duct",
        "The thoracic duct is located in the thorax and drains lymph into the subclavian vein."
      ],
      [
        "Femoral vein",
        "The femoral vein is located in the femoral triangle of the lower extremity."
      ],
      [
        "Achilles tendon",
        "The Achilles tendon is the posterior conjoined tendon of the gastrocnemius and soleus inserting on the calcaneus."
      ],
      [
        "Greater saphenous vein",
        "The greater saphenous vein is a superficial venous conduit of the lower extremity."
      ]
    ],
    "shortestValidSolution": "The lead-in directly states 'compression of the median nerve within the carpal tunnel', giving away the answer.",
    "necessaryInference": "None required because the stem announces the answer directly and the distractors are anatomical non sequiturs.",
    "strongestDistractor": "Thoracic duct",
    "distractorExclusion": "Thoracic duct is in the chest and not in the wrist.",
    "citation": "Bickel KD. Carpal Tunnel Syndrome. J Hand Surg Am. 2010;35(1):147-152. PMID: 20117319.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Defective item drafted as a test exemplar for quality screening. The question stem lead-in explicitly discloses the underlying diagnosis and nerve ('compression of the median nerve within the carpal tunnel'), eliminating any clinical inference.",
      "distractorExclusionNotes": "Distractors (thoracic duct, femoral vein, achilles tendon) are non-neurologic absurdities from completely unrelated organ systems, violating distractor plausibility and parallelism standards.",
      "verdict": "REJECT",
      "rejectionNotes": "Stem lead-in explicitly announces the median nerve entrapment mechanism and distractors are non-neurologic absurdities, completely bypassing necessary clinical inference.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0400",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "General Principles",
    "topic": "Targeted Temperature Management in Cardiac Arrest",
    "subtopic": "Hypothermia vs Normothermia in Non-Shockable Rhythms",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man collapses at home and experiences an unwitnessed cardiac arrest. Emergency medical services arrive 14 minutes later and find him in asystole. Cardiopulmonary resuscitation and administration of intravenous epinephrine achieve return of spontaneous circulation (ROSC) after 22 minutes. In the intensive care unit, he remains deeply comatose with a Glasgow Coma Scale score of 3 and bilaterally sluggish pupillary reflexes. Invasive hemodynamic monitoring reveals blood pressure 110/68 mm Hg on a norepinephrine infusion and a core body temperature of 37.8\u00b0C. The critical care team convenes to determine the targeted post-resuscitation temperature management protocol. The attending physician debates whether strict hypothermia (33\u00b0C) or controlled normothermia with fever prevention (\u226437.5\u00b0C) confers superior neuroprotection and all-cause survival in patients resuscitated from an initial non-shockable cardiac arrest rhythm. Which of the following pathophysiological statements accurately captures the current unresolved scientific debate regarding therapeutic hypothermia in non-shockable cardiac arrest?",
    "choices": [
      [
        "Whether metabolic suppression from hypothermia outweighs systemic complications in non-shockable rhythms remains discordant between randomized trials",
        "The utility of therapeutic hypothermia (32\u00b0C\u201334\u00b0C) versus controlled normothermia with active fever prevention (\u226437.5\u00b0C) in comatose survivors of out-of-hospital cardiac arrest with non-shockable rhythms (asystole and PEA) remains a major unresolved clinical controversy. While the HYPERION trial (2019) demonstrated improved 90-day favorable neurological outcomes with moderate hypothermia (33\u00b0C) in non-shockable arrest, the larger TTM2 trial (2021) showed that hypothermia at 33\u00b0C did not improve survival or functional outcomes compared to targeted normothermia (\u226437.5\u00b0C), while increasing arrhythmias and hemodynamic instability. Consequently, major international guidelines (AHA vs ERC/ESICM) present divergent interpretations regarding mandatory hypothermia targets."
      ],
      [
        "Hypothermia uniquely activates mitochondrial oxidative phosphorylation to prevent neuronal apoptosis",
        "Hypothermia decreases, rather than activates, mitochondrial metabolic rate and oxygen consumption. Its neuroprotective mechanism is believed to arise from reduced cellular metabolic demand, decreased reactive oxygen species generation, and reduced extracellular glutamate accumulation."
      ],
      [
        "Normothermia allows unrestrained excitatory glutamate release that universally causes irreversible brain death",
        "While hyperthermia (fever) exacerbates post-ischemic reperfusion injury and worsens neuronal death, controlled normothermia with strict fever avoidance (maintaining temperature \u226437.5\u00b0C) has been shown in recent large multicenter trials to provide neuroprotection comparable to active cooling to 33\u00b0C without the associated coagulopathy and arrhythmia risks."
      ],
      [
        "Therapeutic hypothermia to 33\u00b0C reliably eliminates all secondary reperfusion inflammation without bleeding risks",
        "Hypothermia induces mild thrombocytopenia, impairs platelet function, and inhibits the coagulation cascade enzyme kinetics, leading to increased bleeding complications and impaired pharmacokinetics of sedation and neuromuscular blockade."
      ],
      [
        "Non-shockable arrest rhythms exhibit complete resistance to anoxic-ischemic encephalopathy due to collateral perfusion",
        "Non-shockable rhythms (asystole, PEA) are associated with prolonged total ischemic times, minimal forward blood flow, and significantly worse post-anoxic ischemic brain injury and neurological prognosis compared to shockable ventricular arrhythmias."
      ]
    ],
    "shortestValidSolution": "Targeted temperature management in non-shockable cardiac arrest has conflicting trial evidence: HYPERION showed benefit of 33\u00b0C, whereas TTM2 showed no difference between 33\u00b0C and normothermia (\u226437.5\u00b0C) with higher arrhythmia rates.",
    "necessaryInference": "Acknowledge the unresolved conflict between HYPERION and TTM2 trials regarding the neurological efficacy and complication profile of deep hypothermia (33\u00b0C) versus active normothermia (\u226437.5\u00b0C) in non-shockable arrest.",
    "strongestDistractor": "Normothermia allows unrestrained excitatory glutamate release that universally causes irreversible brain death",
    "distractorExclusion": "Active normothermia (\u226437.5\u00b0C with fever prevention) does not allow unrestrained hyperthermic injury; the modern debate is whether cooling below normal temperature adds meaningful neuroprotection over strict fever prevention.",
    "citation": "Dankiewicz J, et al. Hypothermia versus Normothermia after Out-of-Hospital Cardiac Arrest. N Engl J Med. 2021;384(24):2283-2294. PMID: 34133859.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "The question examines the active scientific conflict between the HYPERION trial and the TTM2 trial regarding targeted hypothermia (33\u00b0C) versus targeted normothermia (\u226437.5\u00b0C) in comatose survivors of out-of-hospital non-shockable cardiac arrest.",
      "distractorExclusionNotes": "Distractors examine alternative pathophysiologic claims (mitochondrial activation, bleeding immunity, glutamate toxicity).",
      "verdict": "UNRESOLVED",
      "unresolvedNotes": "Conflicting international guideline recommendations and ongoing randomized trial discordance regarding therapeutic hypothermia (32\u201334\u00b0C) versus targeted normothermia (\u226437.5\u00b0C) in out-of-hospital cardiac arrest with non-shockable presenting rhythms.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
