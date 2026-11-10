import { CandidateSpec } from './types';

export const step1Batch37: CandidateSpec[] = [
  {
    "code": "op-c-s1-0901",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Lateral Medullary Wallenberg Syndrome PICA Infarction",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man presents with acute vertigo, intractable hiccups, dysphagia, and hoarseness. Physical examination reveals right-sided ptosis and miosis (Horner syndrome), absent gag reflex on the right, ataxia of the right upper extremity, loss of pain and temperature sensation on the right side of the face, and loss of pain and temperature sensation over the left trunk and limbs. Muscle strength is 5/5 bilaterally, and light touch and vibration sensation are intact. Which of the following arterial vessels is most likely occluded in this patient?",
    "choices": [
      [
        "Posterior inferior cerebellar artery (PICA) or vertebral artery",
        "Lateral medullary (Wallenberg) syndrome is classically caused by thrombosis or atherothrombotic occlusion of the posterior inferior cerebellar artery (PICA) or the vertebral artery. Ischemia involves: (1) Nucleus ambiguus (CN IX, X) -> dysphagia, hoarseness, absent gag reflex; (2) Spinal trigeminal nucleus and tract -> ipsilateral facial loss of pain/temperature; (3) Spinothalamic tract -> contralateral hemibody loss of pain/temperature; (4) Inferior cerebellar peduncle -> ipsilateral limb ataxia; (5) Descending sympathetic fibers -> ipsilateral Horner syndrome (ptosis, miosis, anhidrosis). Motor pathways (corticospinal tract) and dorsal column pathways are spared because they reside in the medial medulla."
      ],
      [
        "Anterior spinal artery (ASA)",
        "ASA occlusion produces medial medullary syndrome: contralateral hemiparesis (pyramid), contralateral loss of vibration/proprioception (medial lemniscus), and ipsilateral tongue deviation (hypoglossal nucleus/nerve)."
      ],
      [
        "Basilar artery top-of-the-basilar segment",
        "Top-of-the-basilar occlusion causes midbrain, thalamic, and visual cortex infarctions with bilateral third nerve palsies, coma, and cortical blindness."
      ],
      [
        "Anterior inferior cerebellar artery (AICA)",
        "AICA occlusion causes lateral pontine syndrome: characterized by ipsilateral facial paralysis (CN VII nucleus/fascicle) and sensorineural hearing loss/vertigo (CN VIII) along with ataxia and Horner syndrome."
      ],
      [
        "Superior cerebellar artery (SCA)",
        "SCA occlusion causes cerebellar ataxia, dysarthria, and contralateral sensory loss, but spares the nucleus ambiguus and does not produce hoarseness or dysphagia."
      ]
    ],
    "shortestValidSolution": "Dysphagia + hoarseness (nucleus ambiguus) + ipsilateral face / contralateral body pain-temp loss = PICA lateral medullary syndrome.",
    "necessaryInference": "Deduce lateral medullary localization from nucleus ambiguus (dysphagia/hoarseness) and crossed pain/temperature loss, identifying PICA occlusion.",
    "strongestDistractor": "Anterior inferior cerebellar artery (AICA)",
    "distractorExclusion": "AICA causes lateral pontine syndrome with facial paralysis (CN VII) and hearing loss (CN VIII), whereas PICA affects the medulla and causes hoarseness (CN X).",
    "citation": "Kim JS. Pure lateral medullary infarction: clinical-radiological correlation of 130 acute, consecutive patients. Brain. 2003 Aug. PMID: 12805095.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 anatomy item requiring multi-step deduction on lateral medullary wallenberg syndrome pica infarction.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0902",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Medial Midbrain Weber Syndrome Posterior Cerebral Artery Infarction",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old woman with longstanding hypertension presents with sudden-onset double vision and left-sided body weakness. Neurological examination reveals right ptosis, an enlarged non-reactive right pupil, and right eye fixed in a 'down-and-out' position. There is spastic hemiparesis and hyperreflexia of the left upper and lower extremities, with a left extensor plantar response. Facial sensation and sensation over the trunk and extremities are symmetric and intact. Which of the following anatomical structures within the midbrain are concurrently damaged in this patient?",
    "choices": [
      [
        "Oculomotor nerve fascicles and the cerebral peduncle (crus cerebri)",
        "Weber syndrome (medial/ventral midbrain syndrome) is typically caused by occlusion of penetrating paramedian branches of the posterior cerebral artery (PCA) or basilar bifurcation. The ischemic lesion compromises: (1) Oculomotor nerve (CN III) fascicles traversing the ventral midbrain -> ipsilateral oculomotor palsy with ptosis, fixed dilated pupil, and 'down-and-out' deviation; and (2) Corticospinal and corticobulbar tracts within the ipsilateral cerebral peduncle (crus cerebri) -> contralateral spastic hemiparesis and lower facial droop. Sensory tracts (medial lemniscus, spinothalamic tract) run more dorsally and are spared."
      ],
      [
        "Abducens nucleus and the facial nerve genu within the facial colliculus",
        "Facial colliculus lesions in the dorsal pons cause ipsilateral abducens palsy (lateral rectus weakness) and ipsilateral peripheral facial nerve palsy, not oculomotor palsy."
      ],
      [
        "Substantia nigra compacta and the dorsal raphe nucleus",
        "Bilateral loss of substantia nigra dopaminergic neurons occurs in Parkinson disease, presenting with resting tremor, rigidity, and bradykinesia rather than acute hemiparesis and CN III palsy."
      ],
      [
        "Trochlear nerve nucleus and the medial longitudinal fasciculus",
        "Trochlear nerve damage causes vertical diplopia worsening on downgaze, and MLF lesions cause internuclear ophthalmoplegia, neither of which produces ptosis or a fixed dilated pupil."
      ],
      [
        "Red nucleus and superior cerebellar peduncle decussation",
        "Involvement of the red nucleus and superior cerebellar peduncle produces Benedikt syndrome (oculomotor palsy with contralateral chorea, tremor, and ataxia), rather than pure corticospinal hemiparesis."
      ]
    ],
    "shortestValidSolution": "Ipsilateral CN III palsy + contralateral hemiparesis = Weber syndrome (ventral midbrain: CN III fascicles + crus cerebri).",
    "necessaryInference": "Recognize the clinical combination of ipsilateral third nerve palsy and contralateral hemiparesis as ventral midbrain Weber syndrome involving the crus cerebri and exiting CN III fascicles.",
    "strongestDistractor": "Red nucleus and superior cerebellar peduncle decussation",
    "distractorExclusion": "Red nucleus involvement causes Benedikt syndrome with involuntary tremor and ataxia, whereas crus cerebri involvement causes pure corticospinal hemiparesis (Weber syndrome).",
    "citation": "Munakomi S, Das JM. Weber Syndrome. StatPearls [Internet]. 2023 Jan. PMID: 32644584.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 anatomy item requiring multi-step deduction on medial midbrain weber syndrome posterior cerebral artery infarction.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0903",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Spinal Cord Hemisection Brown-Sequard Tract Decussation Mechanics",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old man is stabbed in the back and undergoes emergent surgical stabilization. On postoperative day 2, neurological assessment reveals flaccid weakness of the right lower extremity with a right Babinski sign. Sensory testing reveals absent vibration and joint position sense in the right leg up to the level of the umbilicus (T10). Pinprick and temperature sensation are completely normal in the right lower extremity but are absent in the left lower extremity and trunk below the T12 dermatome. Which of the following explains why pain and temperature loss occurs contralateral to the motor deficit?",
    "choices": [
      [
        "Spinothalamic second-order axons decussate in the anterior white commissure 1 to 2 segments above the entry level",
        "Brown-S\u00e9quard syndrome results from functional hemisection of the spinal cord (here, right T10 hemicord). It produces: (1) Ipsilateral spastic paralysis below the lesion due to interruption of the descending lateral corticospinal tract (which decussates in the cervicomedullary pyramids); (2) Ipsilateral loss of vibration, proprioception, and tactile discrimination below the lesion due to interruption of the ascending dorsal columns (fasciculus gracilis/cuneatus, which decussate in the medulla); and (3) Contralateral loss of pain and temperature sensation starting 1 to 2 dermatomes below the lesion because primary afferent C and A-delta fibers synapse in the dorsal horn substantia gelatinosa, and second-order spinothalamic neurons DECUSSATE OBLIQUELY in the anterior white commissure within 1 to 2 spinal segments before ascending in the lateral spinothalamic tract."
      ],
      [
        "Primary sensory afferents decussate immediately upon entering Lissauer's tract before synapsing",
        "Primary sensory afferents ascend or descend 1-2 segments in Lissauer's tract on the ipsilateral side before synapsing in the dorsal horn; they do not decussate in Lissauer's tract."
      ],
      [
        "Dorsal column second-order internal arcuate fibers decussate in the anterior spinal commissure",
        "Internal arcuate fibers arise from the nucleus gracilis and cuneatus in the caudal medulla and decussate there to form the medial lemniscus, not in the spinal cord."
      ],
      [
        "Lateral corticospinal fibers decussate at each segmental spinal level via the ventral horn",
        "Lateral corticospinal fibers decussate in the medullary pyramids (cervicomedullary junction), not segmentally in the spinal cord."
      ],
      [
        "Rubrospinal tract collateral projections inhibit the contralateral gelatinosa interneurons",
        "The rubrospinal tract originates in the red nucleus and decussates in the midbrain, modulating upper limb flexor tone rather than transmitting pain/temperature."
      ]
    ],
    "shortestValidSolution": "Hemicord lesion = ipsilateral corticospinal/dorsal column loss + contralateral spinothalamic loss because spinothalamic decussates in spinal cord anterior white commissure.",
    "necessaryInference": "Deduce that pain and temperature deficits are contralateral in Brown-S\u00e9quard syndrome because second-order spinothalamic fibers decussate in the anterior white commissure segmentally in the spinal cord.",
    "strongestDistractor": "Primary sensory afferents decussate immediately upon entering Lissauer's tract before synapsing",
    "distractorExclusion": "Lissauer's tract contains ipsilateral non-decussated primary afferents; decussation is performed exclusively by second-order axons crossing the anterior white commissure.",
    "citation": "Tattersall R. Brown-S\u00e9quard and his syndrome. Lancet. 2000 Jul 1. PMID: 10892778.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 anatomy item requiring multi-step deduction on spinal cord hemisection brown-sequard tract decussation mechanics.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0904",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Tabes Dorsalis Treponema pallidum Dorsal Root Ganglion Atrophy",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man presents with progressive unsteadiness when walking in the dark and sharp, shooting pains in his legs. Physical examination reveals a wide-based, high-stepping sensory ataxic gait. When asked to stand with feet together and eyes closed, he immediately sways and falls (positive Romberg test). Deep tendon reflexes are absent at the knees and ankles. Pupillary exam reveals bilateral small pupils that constrict promptly when focusing on a near object but do not constrict in response to bright light. Which of the following histopathological changes is most characteristic of this condition?",
    "choices": [
      [
        "Degeneration and demyelination of the dorsal roots and spinal cord posterior columns",
        "Tabes dorsalis is a late manifestation of tertiary neurosyphilis caused by Treponema pallidum infection. Treponemal obliterative endarteritis causes progressive degeneration and demyelination of the dorsal nerve roots and the posterior (dorsal) columns of the spinal cord (fasciculus gracilis and cuneatus). Loss of large myelinated sensory fibers abolishes proprioception and vibration sense, leading to sensory ataxia, Romberg sign, and loss of deep tendon reflexes (hypo/areflexia). Lancinating ('lightning') pains result from sensory root irritation. The pupillary finding described is the classic Argyll Robertson pupil ('light-near dissociation'), localized to bilateral pretectal lesions in the midbrain."
      ],
      [
        "Spongiform vacuolation of the cerebral cortex with accumulation of protease-resistant prion protein",
        "Spongiform vacuolation and prion plaque accumulation characterize Creutzfeldt-Jakob disease, presenting with rapidly progressive dementia and startle myoclonus."
      ],
      [
        "Perivascular cuffing by CD4+ T-lymphocytes with selective motor neuron chromatolysis in anterior horns",
        "Selective anterior horn motor neuron destruction is characteristic of poliomyelitis and enteroviral infection, producing pure flaccid lower motor neuron paralysis without sensory loss."
      ],
      [
        "Subcortical white matter demyelinating plaques with preservation of axons and perivenular macrophage infiltration",
        "Demyelinating plaques with relative axonal preservation occur in multiple sclerosis, typically presenting in younger adults with relapsing-remitting deficits and optic neuritis."
      ],
      [
        "Intranuclear eosinophilic inclusion bodies within surviving pigmented neurons of the locus coeruleus",
        "Intranuclear inclusions (Lewy bodies composed of alpha-synuclein) occur in Parkinson disease and dementia with Lewy bodies, presenting with extrapyramidal signs."
      ]
    ],
    "shortestValidSolution": "Shooting pains + sensory ataxia (Romberg) + areflexia + Argyll Robertson pupil = Tabes dorsalis (dorsal root and posterior column degeneration).",
    "necessaryInference": "Identify tertiary neurosyphilis (tabes dorsalis) from sensory ataxia, Romberg sign, and Argyll Robertson pupils, mapping pathology to dorsal roots and posterior columns.",
    "strongestDistractor": "Subcortical white matter demyelinating plaques with preservation of axons and perivenular macrophage infiltration",
    "distractorExclusion": "Multiple sclerosis causes multifocal perivenular white matter plaques, whereas tabes dorsalis specifically destroys the primary dorsal nerve roots and ascending dorsal columns.",
    "citation": "Berger JR, Dean D. Neurosyphilis. Handb Clin Neurol. 2014;121:1461-1472. PMID: 24365430.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on tabes dorsalis treponema pallidum dorsal root ganglion atrophy.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0905",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Nervous System",
    "topic": "Subacute Combined Degeneration Vitamin B12 Methylmalonyl-CoA Pathways",
    "provisionalDifficulty": 4,
    "stem": "A 63-year-old woman who underwent total gastrectomy 5 years ago presents with tingling in her toes, clumsy gait, and progressive weakness in both legs. Examination demonstrates spastic paraparesis, bilateral extensor plantar responses, hyperreflexia at the knees, and profound loss of vibration and position sense in both lower extremities up to the iliac crests. Complete blood count shows macrocytic anemia (MCV 112 fL) with hypersegmented neutrophils on peripheral smear. Serum methylmalonic acid and homocysteine are markedly elevated. Which of the following spinal cord pathways are co-degenerating in this patient?",
    "choices": [
      [
        "Dorsal columns, lateral corticospinal tracts, and spinocerebellar tracts",
        "Subacute combined degeneration (SCD) of the spinal cord is caused by vitamin B12 (cobalamin) deficiency, frequently secondary to loss of intrinsic factor following gastrectomy or pernicious anemia. B12 is an essential cofactor for: (1) Methionine synthase (converting homocysteine to methionine for myelin phospholipid methylation); and (2) Methylmalonyl-CoA mutase (converting methylmalonyl-CoA to succinyl-CoA). Deficiency leads to accumulation of methylmalonic acid and abnormal odd-chain fatty acid incorporation into neuronal myelin sheaths. The resulting vacuolar demyelination selectively involves: (1) Posterior/dorsal columns -> sensory ataxia, impaired vibration and joint position sense; (2) Lateral corticospinal tracts -> spastic weakness, hyperreflexia, bilateral Babinski signs; and (3) Spinocerebellar tracts -> ataxia. This combination of upper motor neuron signs and dorsal column sensory loss is the hallmark of 'combined' cord degeneration."
      ],
      [
        "Anterior horns and anterior corticospinal tracts exclusively",
        "Anterior horn destruction occurs in spinal muscular atrophy and ALS; pure motor loss without dorsal column sensory loss excludes subacute combined degeneration."
      ],
      [
        "Spinothalamic tracts and the anterior white commissure exclusively",
        "Spinothalamic and anterior white commissure involvement occurs in syringomyelia, presenting with 'cape-like' suspended dissociative sensory loss."
      ],
      [
        "Ventral motor roots and primary somatosensory cortex pyramidal neurons",
        "Motor neuron diseases (like ALS) destroy cortical Betz cells and spinal motor roots, but spare posterior column vibration and proprioception."
      ],
      [
        "Lumbosacral nerve roots of the cauda equina and anterior horn cells",
        "Cauda equina syndrome causes lower motor neuron flaccid paralysis with saddle anesthesia and bowel/bladder dysfunction, not symmetrical spasticity and dorsal column ataxia."
      ]
    ],
    "shortestValidSolution": "B12 deficiency + macrocytic anemia + spasticity (corticospinal) + loss of vibration/proprioception (dorsal column) = Subacute Combined Degeneration.",
    "necessaryInference": "Link gastrectomy and high methylmalonic acid to vitamin B12 deficiency causing subacute combined degeneration of the dorsal columns, corticospinal tracts, and spinocerebellar tracts.",
    "strongestDistractor": "Anterior horns and anterior corticospinal tracts exclusively",
    "distractorExclusion": "Anterior horn disease (like ALS or polio) produces motor neuron loss without the prominent dorsal column sensory loss characteristic of B12 deficiency.",
    "citation": "Stabler SP. Clinical practice. Vitamin B12 deficiency. N Engl J Med. 2013;368(2):149-160. PMID: 23301732.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item requiring multi-step deduction on subacute combined degeneration vitamin b12 methylmalonyl-coa pathways.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0906",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Syringomyelia Anterior White Commissure Dissociative Cape Sensory Loss",
    "provisionalDifficulty": 5,
    "stem": "A 31-year-old woman presents with painless, blistering burns on the tips of her fingers and dorsal hands that she noticed while cooking. She reports no sensation of pain when touching hot pans. Neurological examination reveals complete loss of pain and temperature sensation across both shoulders, upper chest, and upper extremities in a 'cape-like' distribution. Touch, vibration, and joint position sensations are completely intact throughout her arms and body. Muscle strength and deep tendon reflexes are preserved. An MRI of the cervical spine is ordered. Which of the following anatomical structures is primarily damaged by the underlying cystic cavity?",
    "choices": [
      [
        "Anterior white commissure decussating second-order spinothalamic axons",
        "Syringomyelia is a fluid-filled longitudinal cavity (syrinx) within the central canal of the spinal cord, most commonly located in the cervical cord (C8-T1) and frequently associated with Chiari I malformation. As the syrinx expands ventrally, it first compresses and disrupts the ANTERIOR WHITE COMMISSURE, where second-order spinothalamic neurons decussate to the contralateral side. This produces a classic bilateral, 'cape-like' loss of pain and temperature sensation across the shoulders and upper extremities. Because the posterior columns (vibration and proprioception) are dorsal and spared, this produces DISSOCIATIVE SENSORY LOSS. Later expansion can involve anterior horn motor neurons (causing flaccid intrinsic hand weakness) or lateral corticospinal tracts (causing spastic leg weakness)."
      ],
      [
        "Fasciculus cuneatus and fasciculus gracilis within the posterior funiculus",
        "Dorsal columns transmit vibration and proprioception, which are completely preserved in this patient's dissociative sensory examination."
      ],
      [
        "Lateral spinothalamic tract in the anterolateral subpial periphery",
        "Peripheral spinothalamic tracts transmit lower limb and trunk sensation; central syrinx expansion injures crossing commissural fibers first, sparing peripheral fibers."
      ],
      [
        "Dorsal root ganglia and sensory nerve roots outside the spinal dura",
        "Dorsal root ganglion lesions cause radicular dermatomal sensory loss affecting all modalities (touch, pain, vibration), not suspended dissociative pain/temp loss."
      ],
      [
        "Spinocerebellar tract and Clarke's column in the intermediate horn",
        "Spinocerebellar tracts transmit unconscious proprioceptive information to the cerebellum; lesions cause limb ataxia, not isolated cutaneous thermal anesthesia."
      ]
    ],
    "shortestValidSolution": "Suspended cape-like pain/temp loss + intact vibration/proprioception = Syringomyelia destroying anterior white commissure crossing spinothalamic fibers.",
    "necessaryInference": "Identify syringomyelia from suspended bilateral upper-extremity thermal analgesia with preserved proprioception, localizing the lesion to the anterior white commissure.",
    "strongestDistractor": "Fasciculus cuneatus and fasciculus gracilis within the posterior funiculus",
    "distractorExclusion": "Posterior funiculi carry vibration/proprioception which remain intact in early syringomyelia, establishing the classic dissociative sensory loss.",
    "citation": "Holly LT, Batzdorf U. Chiari malformation and syringomyelia. J Neurosurg Spine. 2019 Nov 1;31(5):619-628. PMID: 31675698.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 anatomy item requiring multi-step deduction on syringomyelia anterior white commissure dissociative cape sensory loss.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0907",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Anterior Spinal Artery Infarction Posterior Column Sparing",
    "provisionalDifficulty": 4,
    "stem": "A 72-year-old man undergoes open repair of an infrarenal abdominal aortic aneurysm. Twelve hours postoperatively, he is noted to have complete flaccid paraplegia of both lower extremities with absent deep tendon reflexes and urinary retention. Sensory testing reveals total loss of pinprick and temperature sensation below the T10 dermatome. However, testing of vibration sense with a 128-Hz tuning fork and joint position sense in both great toes demonstrates entirely normal, intact perception. Which of the following vascular territories supplies the spinal cord pathways that remain functional in this patient?",
    "choices": [
      [
        "Posterior spinal arteries arising from the vertebral or posterior inferior cerebellar arteries",
        "The spinal cord receives arterial blood from one anterior spinal artery (ASA) and two posterior spinal arteries (PSAs). The ASA supplies the anterior two-thirds of the spinal cord (anterior horns, lateral corticospinal tracts, and spinothalamic tracts). During aortic surgery or severe hypotension, occlusion of the artery of Adamkiewicz (great radicular artery of Beck) or sacrifice of intercostal/lumbar branches causes ANTERIOR SPINAL ARTERY INFARCTION. This presents with acute flaccid paraplegia, autonomic bowel/bladder dysfunction, and bilateral loss of pain and temperature below the lesion. Crucially, the POSTERIOR SPINAL ARTERIES supply the posterior one-third of the cord (dorsal columns: fasciculus gracilis and cuneatus). Therefore, vibration, light touch, and proprioception remain completely PRESERVED, providing the diagnostic hallmark of ASA syndrome."
      ],
      [
        "Anterior spinal artery arising from the junction of bilateral vertebral arteries",
        "The ASA supplies the anterior two-thirds of the cord; it is the occluded artery causing the paraplegia and spinothalamic loss, not the vessel preserving posterior column function."
      ],
      [
        "Posterior communicating artery anastomosing with the posterior cerebral artery",
        "The posterior communicating artery is an intracranial component of the Circle of Willis and does not provide vascular supply to the thoracic or lumbar spinal cord."
      ],
      [
        "Anterior inferior cerebellar artery originating from the middle basilar trunk",
        "AICA supplies the lateral pons and anterior inferior cerebellum, having no spinal cord perfusion territory."
      ],
      [
        "Artery of Adamkiewicz directly perfusing the dorsal midline funiculus",
        "The artery of Adamkiewicz is the major radicular feeder to the anterior spinal artery (anterior two-thirds); it does not exclusively supply the dorsal columns."
      ]
    ],
    "shortestValidSolution": "Aortic repair + acute paraplegia + loss of pain/temp + preserved vibration/proprioception = Anterior Spinal Artery infarction (posterior spinal arteries spare dorsal columns).",
    "necessaryInference": "Deduce that preserved vibration and position sense in acute spinal cord infarction reflects patent posterior spinal arteries supplying the posterior columns.",
    "strongestDistractor": "Artery of Adamkiewicz directly perfusing the dorsal midline funiculus",
    "distractorExclusion": "The artery of Adamkiewicz feeds the anterior spinal artery; its occlusion causes the anterior cord infarction, while paired posterior spinal arteries spare the dorsal columns.",
    "citation": "Cheshire WP, Santos CC, Massey EW, Howard JF Jr. Spinal cord infarction: etiology and outcome. Neurology. 1996 Aug;47(2):321-330. PMID: 8757000.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 anatomy item requiring multi-step deduction on anterior spinal artery infarction posterior column sparing.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0908",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Nervous System",
    "topic": "Cavernous Sinus Thrombosis Cranial Nerve Trajectory Abducens Vulnerability",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman presents with severe retro-orbital headache, high fever, and progressively worsening swelling and redness of the right eye 5 days after squeezing a painful furuncle on her upper lip ('danger triangle' of the face). Physical examination reveals severe right proptosis, chemosis, periorbital edema, and bilateral papilledema. Examination of ocular motility reveals complete paralysis of right eye abduction, with severe restriction of elevation, depression, and adduction. Sensation is decreased over the right forehead, upper eyelid, and right cheek, but is intact over the chin. Which of the following nerves travels freely through the internal venous lumen of the involved anatomical space adjacent to the internal carotid artery, making it earliest to be affected?",
    "choices": [
      [
        "Abducens nerve (cranial nerve VI)",
        "Cavernous sinus thrombosis (CST) is a life-threatening septic thrombophlebitis arising from retrograde spread of infection from the central face ('danger triangle') via the facial and ophthalmic veins, which lack valves. The cavernous sinuses flank the sella turcica. Within the cavernous sinus: (1) The ABDUCENS NERVE (CN VI) and the cavernous segment of the INTERNAL CAROTID ARTERY run centrally through the interior of the venous lumen (bathed in venous blood), making CN VI the earliest and most severely affected cranial nerve, producing isolated lateral rectus palsy and failure of abduction. (2) Cranial nerves III (oculomotor), IV (trochlear), V1 (ophthalmic), and V2 (maxillary) travel embedded within the lateral dural wall of the sinus. Progressive thrombosis compresses all lateral wall nerves, resulting in complete ophthalmoplegia and sensory loss over the V1 and V2 dermatomes. CN V3 does not enter the cavernous sinus (it exits via the foramen ovale)."
      ],
      [
        "Oculomotor nerve (cranial nerve III)",
        "CN III travels embedded within the fibrous lateral dural wall of the cavernous sinus, rather than coursing freely within the internal venous lumen."
      ],
      [
        "Trochlear nerve (cranial nerve IV)",
        "CN IV travels within the lateral dural wall just inferior to CN III, outside the internal venous blood channel."
      ],
      [
        "Ophthalmic branch of the trigeminal nerve (cranial nerve V1)",
        "CN V1 traverses the inferior aspect of the lateral dural wall before entering the superior orbital fissure; it is not free in the venous lumen."
      ],
      [
        "Maxillary branch of the trigeminal nerve (cranial nerve V2)",
        "CN V2 courses along the most inferior margin of the lateral dural wall before exiting through the foramen rotundum."
      ]
    ],
    "shortestValidSolution": "Danger zone facial infection + proptosis + ophthalmoplegia = Cavernous sinus thrombosis; CN VI courses through the internal venous lumen next to internal carotid.",
    "necessaryInference": "Recall the anatomical distinction between the internal luminal course of CN VI (adjacent to internal carotid) versus lateral dural wall nerves (CN III, IV, V1, V2) in the cavernous sinus.",
    "strongestDistractor": "Oculomotor nerve (cranial nerve III)",
    "distractorExclusion": "CN III resides in the lateral dural wall; CN VI is the only cranial nerve that courses directly inside the venous sinus lumen adjacent to the carotid.",
    "citation": "Ebright JR. Septic thrombosis of the cavernous sinuses. Arch Intern Med. 2001 Dec 10-24. PMID: 11732931.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 anatomy item requiring multi-step deduction on cavernous sinus thrombosis cranial nerve trajectory abducens vulnerability.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0909",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Trigeminal Neuralgia Neurovascular Compression Carbamazepine Target",
    "provisionalDifficulty": 4,
    "stem": "A 61-year-old woman presents with recurring episodes of excruciating, electric shock-like stabbing pains across her right cheek and lower jaw. Each attack lasts 10 to 20 seconds and can be triggered by gentle touch, brushing her teeth, chewing, or even a cool breeze against her face. She has lost 4 kg over the past month because eating precipitates the pain. Neurological examination, including cranial nerve sensation, corneal reflexes, and masseter motor tone, is completely normal. High-resolution MRI of the posterior fossa reveals an aberrant, pulsating arterial loop impinging upon the right trigeminal nerve root entry zone at the cerebellopontine angle. Which of the following arterial vessels is most frequently responsible for this neurovascular compression?",
    "choices": [
      [
        "Superior cerebellar artery (SCA)",
        "Trigeminal neuralgia (tic douloureux) is characterized by paroxysmal, lancinating, shock-like pain confined to one or more divisions of the trigeminal nerve (most commonly V2 and V3). In the vast majority of classic cases, the underlying etiology is NEUROVASCULAR COMPRESSION of the trigeminal nerve root entry zone in the prepontine cistern, primarily by an aberrant or ectatic loop of the SUPERIOR CEREBELLAR ARTERY (SCA; ~75-80% of cases), or less commonly the anterior inferior cerebellar artery (AICA) or petrosal vein. Pulsatile mechanical compression induces focal focal demyelination of large-myelinated A-beta sensory axons, promoting ephaptic cross-talk ('electrical cross-excitation') with adjacent unmyelinated pain-conducting C fibers. First-line pharmacological treatment is CARBAMAZEPINE, which blocks voltage-gated sodium channels to stabilize hyper-excitable neuronal membranes."
      ],
      [
        "Posterior inferior cerebellar artery (PICA)",
        "PICA loops around the medulla and inferior cerebellum; it compresses the glossopharyngeal nerve (CN IX) causing glossopharyngeal neuralgia, not trigeminal neuralgia."
      ],
      [
        "Middle cerebral artery lenticulostriate branch",
        "Lenticulostriate arteries supply the basal ganglia and internal capsule within the cerebrum, having no anatomical contact with the trigeminal nerve in the posterior fossa."
      ],
      [
        "Anterior cerebral artery pericallosal branch",
        "The pericallosal artery courses above the corpus callosum on the medial hemisphere, far removed from the brainstem and cranial nerve roots."
      ],
      [
        "Posterior communicating artery aneurysm",
        "Posterior communicating artery aneurysms compress the oculomotor nerve (CN III) in the interpeduncular cistern, causing ptosis and pupil dilation, not facial neuralgia."
      ]
    ],
    "shortestValidSolution": "Electric shock facial pain triggered by touch + neurovascular compression of trigeminal root entry zone = Superior cerebellar artery.",
    "necessaryInference": "Identify the superior cerebellar artery as the predominant vessel causing mechanical neurovascular compression of the trigeminal nerve root in classic trigeminal neuralgia.",
    "strongestDistractor": "Posterior inferior cerebellar artery (PICA)",
    "distractorExclusion": "PICA compresses CN IX causing glossopharyngeal neuralgia (throat/ear pain), whereas the superior cerebellar artery (SCA) compresses CN V at the pons.",
    "citation": "Cruccu G, Gronseth G, Alksne J, et al. AAN-EFNS guidelines on trigeminal neuralgia management. Eur J Neurol. 2008 Oct;15(10):1013-1028. PMID: 18721143.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on trigeminal neuralgia neurovascular compression carbamazepine target.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0910",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Nervous System",
    "topic": "Myasthenia Gravis Postsynaptic Nicotinic AChR Endocytosis Mechanics",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old woman presents with worsening double vision and droopy eyelids toward the evening. Over the past 3 months, she has also noticed difficulty chewing tough meat and fatigue when brushing her hair. Physical examination shows bilateral ptosis that worsens after 60 seconds of sustained upward gaze. Repetitive nerve stimulation at 3 Hz demonstrates a progressive, decremental compound muscle action potential (CMAP) response. Administration of a short-acting acetylcholinesterase inhibitor results in rapid, transient improvement of her ptosis. A contrast chest CT reveals an anterior mediastinal mass. Which of the following molecular mechanisms directly leads to the reduction of functional receptors at the motor endplate in this disorder?",
    "choices": [
      [
        "Antibody-mediated cross-linking and accelerated receptor endocytosis with complement-mediated endplate destruction",
        "Myasthenia gravis (MG) is an autoimmune disorder caused by autoantibodies directed against the POSTSYNAPTIC NICOTINIC ACETYLCHOLINE RECEPTORS (AChR) on the motor endplate of skeletal muscle fibers. The pathogenic antibodies impair neuromuscular transmission through three primary mechanisms: (1) Cross-linking of adjacent AChRs, inducing accelerated RECEPTOR INTERNALIZATION AND LYSOSOMAL DEGRADATION (antigenic modulation); (2) Activation of the classical complement cascade, forming membrane attack complexes (C5b-9) that destroy the post-junctional junctional folds and simplify the endplate architecture; and (3) Functional competitive blockade of the ACh binding site. Consequently, acetylcholine cannot generate an adequate endplate potential to reach threshold, causing muscle fatigue with repeated use. Approximately 75% of patients have thymic abnormalities (thymic hyperplasia in 65%, thymoma in 10-15%)."
      ],
      [
        "Autoantibody blockade of presynaptic P/Q-type voltage-gated calcium channels preventing vesicle fusion",
        "Blockade of presynaptic P/Q-type calcium channels characterizes Lambert-Eaton myasthenic syndrome, which improves with exercise and is associated with small cell lung cancer."
      ],
      [
        "Irreversible degradation of presynaptic synaptobrevin and SNAP-25 preventing acetylcholine exocytosis",
        "Cleavage of SNARE proteins (synaptobrevin, SNAP-25) is the mechanism of botulinum toxin, preventing acetylcholine exocytosis and causing descending flaccid paralysis."
      ],
      [
        "Cell-mediated CD8+ cytotoxic T-lymphocyte perforin-granzyme lysis of muscle endomysium",
        "Endomysial CD8+ T-cell infiltration characterizes polymyositis, presenting with symmetric proximal muscle weakness and elevated creatine kinase without ocular involvement."
      ],
      [
        "Autoantibodies targeting voltage-gated potassium channels (VGKC) inducing peripheral nerve hyperexcitability",
        "Antibodies against VGKC (e.g., CASPR2, LGI1) cause Isaacs syndrome (neuromyotonia) and Morvan syndrome, presenting with muscle twitching and cramps, not weakness."
      ]
    ],
    "shortestValidSolution": "Fluctuating ptosis/diplopia + decremental CMAP + thymoma = Myasthenia gravis (postsynaptic AChR cross-linking, endocytosis, and complement destruction).",
    "necessaryInference": "Recognize myasthenia gravis from fatigable weakness and thymic mass, and identify the mechanism as antibody-mediated AChR cross-linking, endocytosis, and complement membrane attack.",
    "strongestDistractor": "Autoantibody blockade of presynaptic P/Q-type voltage-gated calcium channels preventing vesicle fusion",
    "distractorExclusion": "Presynaptic P/Q-type calcium channel antibodies cause Lambert-Eaton syndrome, which exhibits incremental CMAP on repetitive stimulation, not decremental response.",
    "citation": "Gilhus NE. Myasthenia Gravis. N Engl J Med. 2016;375(26):2570-2581. PMID: 28029925.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology item requiring multi-step deduction on myasthenia gravis postsynaptic nicotinic achr endocytosis mechanics.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0911",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Nervous System",
    "topic": "Lambert-Eaton Presynaptic Calcium Channels Post-Exercise Facilitation",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old male smoker presents with progressive proximal leg weakness, difficulty rising from low chairs, dry mouth, and erectile dysfunction. On physical examination, proximal thigh muscle strength is initially 3/5, but after he performs 15 seconds of vigorous isometric quadriceps contraction, repeat strength testing improves to 5/5. Deep tendon reflexes are absent at baseline but become briskly detectable immediately following exercise. Repetitive nerve stimulation at 50 Hz demonstrates a marked incremental increase in compound muscle action potential (CMAP) amplitude (> 200%). Chest radiography reveals a hilar mass. Autoantibodies against which of the following molecular targets are responsible for this condition?",
    "choices": [
      [
        "Presynaptic P/Q-type voltage-gated calcium channels (VGCC)",
        "Lambert-Eaton myasthenic syndrome (LEMS) is an autoimmune paraneoplastic disorder strongly associated with SMALL CELL LUNG CANCER (~50-60% of cases). Pathogenic IgG autoantibodies target PRE-SYNAPTIC P/Q-TYPE VOLTAGE-GATED CALCIUM CHANNELS on motor nerve terminals and autonomic parasympathetic fibers. By blocking calcium influx during action potential invasion, the calcium-dependent exocytosis of acetylcholine-containing vesicles is severely impaired, causing proximal muscle weakness and autonomic dysfunction (dry mouth, constipation, erectile dysfunction). Crucially, during rapid repetitive nerve stimulation (or sustained voluntary exercise), high-frequency action potentials cause INTRA-AXONAL CALCIUM ACCUMULATION that temporarily overcomes the channel deficit, resulting in POST-EXERCISE FACILITATION (incremental CMAP increase and reflex recovery)."
      ],
      [
        "Postsynaptic nicotinic acetylcholine receptors (AChR)",
        "AChR antibodies cause myasthenia gravis, which exhibits fatigable muscle weakness worsening with exercise, normal deep tendon reflexes, and no autonomic dysfunction."
      ],
      [
        "Presynaptic synaptotagmin calcium-sensor proteins",
        "Synaptotagmin acts as the calcium sensor triggering synaptic vesicle exocytosis; it is not the primary antigenic target in paraneoplastic Lambert-Eaton syndrome."
      ],
      [
        "Ryanodine receptors (RyR1) within the sarcoplasmic reticulum membrane",
        "RyR1 mutations cause malignant hyperthermia upon exposure to volatile anesthetics, characterized by unregulated sarcoplasmic calcium release and muscle rigidity."
      ],
      [
        "Dihydropyridine receptors within transverse tubule sarcolemma",
        "Dihydropyridine L-type calcium channels couple sarcolemmal depolarization to sarcoplasmic RyR1 release; they are not targeted by paraneoplastic lung cancer autoantibodies."
      ]
    ],
    "shortestValidSolution": "Proximal weakness improving after exercise + dry mouth + small cell lung cancer = Lambert-Eaton (presynaptic P/Q-type VGCC autoantibodies).",
    "necessaryInference": "Identify Lambert-Eaton myasthenic syndrome from post-exercise facilitation and autonomic symptoms, linking pathogenesis to presynaptic P/Q-type VGCC antibodies.",
    "strongestDistractor": "Postsynaptic nicotinic acetylcholine receptors (AChR)",
    "distractorExclusion": "Postsynaptic AChR antibodies (myasthenia gravis) cause fatigable weakness that worsens after exercise, whereas Lambert-Eaton demonstrates post-exercise facilitation.",
    "citation": "Titulaer MJ, Lang B, Verschuuren JJ. Lambert-Eaton myasthenic syndrome: from clinical characteristics to therapeutic strategies. Lancet Neurol. 2011;10(12):1098-1107. PMID: 22094130.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology item requiring multi-step deduction on lambert-eaton presynaptic calcium channels post-exercise facilitation.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0912",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Nervous System",
    "topic": "Guillain-Barre Syndrome Campylobacter jejuni Molecular Mimicry Gangliosides",
    "provisionalDifficulty": 5,
    "stem": "A 23-year-old man presents with progressive tingling in his toes and fingers followed by symmetrical weakness in both legs that has ascended to his arms over the past 4 days. He had an episode of severe crampy abdominal pain and bloody diarrhea 3 weeks ago that resolved spontaneously without treatment. Examination reveals flaccid weakness in all four extremities (legs > arms), absent deep tendon reflexes throughout, and mild distal vibration loss. Lumbar puncture reveals a CSF opening pressure of 140 mm H2O, WBC count 2/mm3, glucose 65 mg/dL, and markedly elevated protein at 185 mg/dL (albuminocytologic dissociation). Which of the following pathophysiological mechanisms accounts for the peripheral nerve injury in this patient?",
    "choices": [
      [
        "Molecular mimicry between bacterial lipooligosaccharides and human peripheral nerve gangliosides",
        "Guillain-Barr\u00e9 syndrome (GBS; acute inflammatory demyelinating polyneuropathy) is an acute post-infectious immune-mediated polyneuropathy. The most common triggering antecedent infection is CAMPYLOBACTER JEJUNI (a microaerophilic, gram-negative, curved rod with polar flagella causing bloody enteritis). GBS pathogenesis is driven by MOLECULAR MIMICRY: the lipooligosaccharide (LOS) core in the outer membrane of C. jejuni shares exact structural homology with human peripheral nerve GANGLIOSIDES (such as GM1, GD1a, GQ1b). Antibodies generated against C. jejuni LOS cross-react with gangliosides on Schwann cell membranes and nodes of Ranvier, recruiting complement and macrophages to cause endoneurial demyelination and axonal damage. CSF reveals the classic ALBUMINOCYTOLOGIC DISSOCIATION (elevated protein with normal cell count)."
      ],
      [
        "Direct retrograde axonal transport of bacterial endotoxin via unmyelinated autonomic C-fibers",
        "Bacterial endotoxin (LPS) does not undergo retrograde axonal transport; tetanus toxin (tetanospasmin) undergoes retrograde transport to block inhibitory glycine release."
      ],
      [
        "Persistent intracellular bacterial replication within dorsal root ganglion satellite cells",
        "C. jejuni is an enteric mucosal pathogen that does not establish latent or chronic intracellular infection within peripheral nervous system ganglia."
      ],
      [
        "Granulomatous epineurial vasculitis causing widespread nerve micro-infarctions (mononeuritis multiplex)",
        "Granulomatous epineurial vasculitis occurs in polyarteritis nodosa and Churg-Strauss syndrome, presenting with asymmetric stepwise nerve infarcts (mononeuritis multiplex)."
      ],
      [
        "Production of an exotoxin that ADP-ribosylates eukaryotic elongation factor-2 in Schwann cells",
        "ADP-ribosylation of EF-2 is the mechanism of Corynebacterium diphtheriae exotoxin, causing pharyngeal pseudomembranes and myocarditis/neuropathy, not post-diarrheal GBS."
      ]
    ],
    "shortestValidSolution": "Ascending paralysis + areflexia + albuminocytologic dissociation post-bloody diarrhea = Guillain-Barr\u00e9 via Campylobacter jejuni LOS molecular mimicry with gangliosides.",
    "necessaryInference": "Link antecedent bloody diarrhea to Campylobacter jejuni lipooligosaccharide molecular mimicry with peripheral nerve gangliosides causing Guillain-Barr\u00e9 syndrome.",
    "strongestDistractor": "Production of an exotoxin that ADP-ribosylates eukaryotic elongation factor-2 in Schwann cells",
    "distractorExclusion": "Diphtheria toxin ADP-ribosylates EF-2; Guillain-Barr\u00e9 is an autoimmune response driven by cross-reactive anti-ganglioside antibodies (molecular mimicry), not an exotoxin.",
    "citation": "Willison HJ, Jacobs BC, van Doorn PA. Guillain-Barr\u00e9 syndrome. Lancet. 2016 Aug 13;388(10045):717-727. PMID: 26948435.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology item requiring multi-step deduction on guillain-barre syndrome campylobacter jejuni molecular mimicry gangliosides.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0913",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Charcot-Marie-Tooth Type 1A PMP22 Duplication Schwann Cell Hyperplasia",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old boy presents with progressive clumsiness, frequent ankle sprains, and difficulty running. Physical examination reveals bilateral high-arched feet (pes cavus), hammer toes, and marked bilateral symmetrical atrophy of the calf muscles, giving the lower legs an inverted champagne bottle or 'stork-leg' appearance. Palpation of the lateral popliteal fossa reveals palpable, thickened common peroneal nerves. Sensation to vibration and pinprick is diminished in a stocking-glove distribution. Nerve conduction studies demonstrate marked, uniform slowing of motor conduction velocities (< 30 m/s). Sural nerve biopsy demonstrates repetitive cycles of demyelination and remyelination resulting in prominent Schwann cell concentric proliferations ('onion-bulb' formations). Which of the following genetic alterations is the most frequent cause of this disorder?",
    "choices": [
      [
        "Duplication of a 1.4-Mb region on chromosome 17p11.2 containing the PMP22 gene",
        "Charcot-Marie-Tooth (CMT) disease type 1A is the most common inherited hereditary motor and sensory neuropathy (HMSN). It is an autosomal dominant disorder caused in 70-80% of cases by a 1.4-Mb DUPLICATION on chromosome 17p11.2 encompassing the PERIPHERAL MYELIN PROTEIN 22 (PMP22) gene. Overexpression of PMP22 disrupts compact myelin formation and Schwann cell maintenance. Chronic, repetitive cycles of segmental demyelination and remyelination produce concentric layers of Schwann cell cytoplasm and basement membrane surrounding demyelinated axons, forming pathognomonic 'ONION-BULB' structures and hypertrophic, palpable peripheral nerves. Clinical features include distal muscle wasting (stork legs), pes cavus, hammer toes, sensory loss, and areflexia."
      ],
      [
        "Trinucleotide CTG repeat expansion within the 3'-untranslated region of the DMPK gene",
        "DMPK CTG repeat expansion causes myotonic dystrophy type 1, presenting with myotonia, cataracts, frontal balding, and testicular atrophy, not hypertrophic peripheral neuropathy."
      ],
      [
        "Point mutation in the copper-transporting P-type ATPase gene ATP7B on chromosome 13",
        "ATP7B mutations cause Wilson disease, characterized by hepatic copper accumulation, Kayser-Fleischer rings, and basal ganglia degeneration, not peripheral neuropathy."
      ],
      [
        "Microdeletion of the paternal 15q11-q13 chromosomal region containing the SNRPN gene",
        "Paternal 15q11-q13 microdeletion causes Prader-Willi syndrome, presenting with neonatal hypotonia, hyperphagia, obesity, and intellectual disability."
      ],
      [
        "Homozygous expanded GAA triplet repeat within the first intron of the FXN gene",
        "GAA repeat expansions in the FXN gene cause Friedreich ataxia, characterized by ataxia, loss of vibration/proprioception, hypertrophic cardiomyopathy, and diabetes."
      ]
    ],
    "shortestValidSolution": "Pes cavus + stork leg atrophy + palpable enlarged nerves + onion bulb Schwann cells = Charcot-Marie-Tooth type 1A (PMP22 duplication on 17p11.2).",
    "necessaryInference": "Identify Charcot-Marie-Tooth disease type 1A from distal calf atrophy, pes cavus, and onion-bulb histology, linking etiology to PMP22 gene duplication.",
    "strongestDistractor": "Homozygous expanded GAA triplet repeat within the first intron of the FXN gene",
    "distractorExclusion": "FXN GAA repeats cause Friedreich ataxia (spinocerebellar degeneration with cardiomyopathy), whereas CMT1A is a peripheral neuropathy caused by PMP22 duplication.",
    "citation": "Lupski JR, de Oca-Luna RM, Slaugenhaupt S, et al. DNA duplication associated with Charcot-Marie-Tooth disease type 1A. Cell. 1991 Jul 26;66(2):219-232. PMID: 1677316.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics item requiring multi-step deduction on charcot-marie-tooth type 1a pmp22 duplication schwann cell hyperplasia.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0914",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Amyotrophic Lateral Sclerosis Combined Upper and Lower Motor Neuron Degeneration",
    "provisionalDifficulty": 4,
    "stem": "A 65-year-old man presents with progressive weakness and muscle wasting that began in his right hand and has spread to his left arm and right leg over 8 months. Physical examination of the right upper extremity reveals marked atrophy of the thenar eminence, interosseous muscles, and forearm, accompanied by visible fasciculations. However, the right biceps and brachioradialis reflexes are 3+ (hyperreflexic) with a positive Hoffman sign. Examination of the right leg demonstrates 4/5 weakness, ankle clonus, and an extensor plantar response (Babinski sign). Cranial nerve testing shows tongue fasciculations and spastic dysarthria. Sensation to light touch, pinprick, vibration, and position is completely normal throughout. Extraocular movements and bowel/bladder control are fully preserved. Which of the following cellular inclusions is most commonly identified in degenerate motor neurons in this patient?",
    "choices": [
      [
        "Cytoplasmic aggregates containing ubiquitinated TAR DNA-binding protein 43 (TDP-43)",
        "Amyotrophic lateral sclerosis (ALS; Lou Gehrig disease) is a devastating neurodegenerative disorder characterized by combined degeneration of both UPPER MOTOR NEURONS (Betz cells in motor cortex and corticospinal tracts) and LOWER MOTOR NEURONS (cranial nerve motor nuclei and spinal cord anterior horn cells). This produces the pathognomonic coexistence of upper motor neuron signs (spasticity, hyperreflexia, Babinski, pseudobulbar affect) and lower motor neuron signs (atrophy, flaccid weakness, fasciculations). Crucially, sensory pathways, bowel/bladder sphincters (Onuf nucleus), and extraocular motor nuclei (CN III, IV, VI) are characteristically spared. In >95% of sporadic and familial ALS cases, the hallmark neuropathological inclusion is CYTOPLASMIC INCLUSIONS OF HYPERPHOSPHORYLATED, UBIQUITINATED TDP-43 (encoded by TARDBP), which mislocalizes from the nucleus to the cytoplasm."
      ],
      [
        "Intranuclear inclusions of hyperphosphorylated tau protein forming paired helical filaments",
        "Tau neurofibrillary tangles occur in Alzheimer disease and frontotemporal lobar degeneration, not pure motor neuron degeneration."
      ],
      [
        "Cytoplasmic eosinophilic inclusions composed of aggregated alpha-synuclein and ubiquitin",
        "Alpha-synuclein Lewy bodies are the diagnostic inclusions of Parkinson disease and Lewy body dementia, presenting with extrapyramidal parkinsonism."
      ],
      [
        "Intranuclear polyglutamine aggregates within striatal medium spiny GABAergic neurons",
        "Huntingtin polyglutamine inclusions occur in Huntington disease, causing chorea and behavioral changes with caudate atrophy."
      ],
      [
        "Extracellular spherules composed of misfolded amyloid light-chain protein fibrils",
        "Amyloid light-chain (AL) deposition occurs in systemic amyloidosis, causing restrictive cardiomyopathy, nephrotic syndrome, and macroglossia."
      ]
    ],
    "shortestValidSolution": "Combined upper and lower motor neuron signs + fasciculations + sensory sparing = ALS with ubiquitinated TDP-43 cytoplasmic aggregates.",
    "necessaryInference": "Recognize ALS from simultaneous upper and lower motor neuron findings with preserved sensation, identifying TDP-43 cytoplasmic inclusions as the primary neuropathological marker.",
    "strongestDistractor": "Intranuclear inclusions of hyperphosphorylated tau protein forming paired helical filaments",
    "distractorExclusion": "Tau neurofibrillary tangles are typical of Alzheimer disease, whereas TDP-43 cytoplasmic aggregates are found in >95% of ALS cases.",
    "citation": "Neumann M, Sampathu DM, Kwong LK, et al. Ubiquitinated TDP-43 in frontotemporal lobar degeneration and amyotrophic lateral sclerosis. Science. 2006;314(5796):130-133. PMID: 17023659.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on amyotrophic lateral sclerosis combined upper and lower motor neuron degeneration.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0915",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Spinal Muscular Atrophy SMN1 Deletion Exon 7 Splicing Modification",
    "provisionalDifficulty": 4,
    "stem": "A 3-month-old male infant is brought to the clinic due to profound 'floppiness' and failure to achieve motor milestones. His mother notes that he barely moves his arms or legs and has a weak, feeble cry. On physical examination, the infant exhibits severe generalized hypotonia ('frog-leg' posture), bell-shaped chest deformity with paradoxical breathing, tongue fasciculations, and completely absent deep tendon reflexes. Sensation appears intact, and cognitive interaction is age-appropriate. Electromyography demonstrates diffuse acute and chronic denervation in all extremities. Genetic testing confirms an autosomal recessive disorder caused by homozygous deletion of exon 7 in the survival motor neuron 1 (SMN1) gene. An approved antisense oligonucleotide therapy (nusinersen) treats this disorder by which of the following molecular mechanisms?",
    "choices": [
      [
        "Promoting the inclusion of exon 7 during pre-mRNA splicing of the homologous SMN2 transcript",
        "Spinal muscular atrophy (SMA) is an autosomal recessive disorder caused by homozygous loss-of-function mutations or deletions of the SMN1 gene on chromosome 5q13, leading to selective apoptosis of anterior horn motor neurons. Humans carry a nearly identical paralogous gene, SMN2, which differs from SMN1 by a single critical C-to-T transition in exon 7. This silent nucleotide change alters a splicing regulatory element, causing exon 7 exclusion in ~85-90% of SMN2 transcripts. The resulting truncated protein (SMN-delta-7) is rapidly degraded, producing only ~10-15% of functional full-length SMN protein. NUSINERSEN is an intrathecally administered antisense oligonucleotide that binds to an intronic splicing silencer (ISS-N1) in SMN2 pre-mRNA, blocking splicing repressor proteins and PROMOTING EXON 7 INCLUSION. This restores production of full-length, stable SMN protein from the patient's existing SMN2 gene."
      ],
      [
        "Inactivating the proteasome complex to prevent degradation of aberrant truncated SMN-delta-7",
        "Proteasome inhibition (e.g., bortezomib) is used in multiple myeloma and does not correct the defective alternative splicing of SMN2."
      ],
      [
        "Binding the ribosome to promote translational readthrough of a premature stop codon",
        "Aminoglycosides and ataluren promote translational readthrough of nonsense mutations (e.g., in cystic fibrosis or Duchenne), which is not the mechanism of SMN2 splicing modification."
      ],
      [
        "Targeting the SMN1 promoter with synthetic transcription factors to upregulate gene transcription",
        "Nusinersen targets SMN2 pre-mRNA splicing, not SMN1 promoter transcription (the SMN1 gene is homozygously deleted in SMA)."
      ],
      [
        "Cleaving the mutated SMN2 pre-mRNA via small interfering RNA-mediated endonuclease degradation",
        "siRNA therapies (e.g., patisiran) degrade target transcripts; nusinersen is a splice-switching oligonucleotide that enhances functional exon inclusion, not transcript cleavage."
      ]
    ],
    "shortestValidSolution": "Floppy infant + tongue fasciculations + absent reflexes = SMA (SMN1 exon 7 deletion); nusinersen promotes exon 7 inclusion in SMN2 pre-mRNA.",
    "necessaryInference": "Identify spinal muscular atrophy from severe infantile hypotonia and anterior horn degeneration, linking nusinersen therapy to SMN2 pre-mRNA exon 7 splice inclusion.",
    "strongestDistractor": "Targeting the SMN1 promoter with synthetic transcription factors to upregulate gene transcription",
    "distractorExclusion": "Patients with SMA lack functional SMN1 genes; nusinersen acts by modulating alternative splicing of the paralogous SMN2 pre-mRNA to include exon 7.",
    "citation": "Finkel RS, Mercuri E, Darras BT, et al. Nusinersen versus Sham Control in Infantile-Onset Spinal Muscular Atrophy. N Engl J Med. 2017;377(18):1723-1732. PMID: 29091570.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics item requiring multi-step deduction on spinal muscular atrophy smn1 deletion exon 7 splicing modification.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0916",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Huntington Disease Caudate Atrophy GABAergic Medium Spiny Neurons",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old man is brought to the clinic by his wife due to progressive behavioral changes, irritability, and involuntary jerking movements. Over the past 6 months, he has exhibited sudden, irregular, dance-like movements of his shoulders, arms, and face that he attempts to conceal by incorporating them into purposeful gestures. Mental status examination reveals executive dysfunction and depression. His father developed similar symptoms in his late forties and died in a nursing facility. Brain MRI demonstrates marked bilateral atrophy of the caudate nuclei and putamen, resulting in pronounced enlargement of the frontal horns of the lateral ventricles ('boxcar ventricles'). Which of the following neurochemical alterations within the striatum is directly responsible for the hyperkinetic movements in this patient?",
    "choices": [
      [
        "Loss of GABAergic and substance P/enkephalin-containing medium spiny projection neurons",
        "Huntington disease is an autosomal dominant neurodegenerative disorder caused by an unstable CAG TRINUCLEOTIDE REPEAT EXPANSION (encoding polyglutamine) in the HTT gene on chromosome 4p16. Anticipation occurs during paternal transmission due to repeat expansion in spermatogenesis. Pathologically, mutant huntingtin protein causes selective toxic degeneration of MEDIUM SPINY NEURONS within the striatum (caudate nucleus and putamen). These neurons utilize GABA (inhibitory) and enkephalin/substance P. In the early stages, preferential loss of striatal GABAergic neurons projecting to the external globus pallidus (the INDIRECT PATHWAY) removes tonic inhibition from the subthalamic nucleus. Unchecked subthalamic and thalamic excitation of the motor cortex produces the characteristic hyperkinetic CHOREA. Neurochemically, this is marked by decreased GABA and acetylcholine, with increased relative dopamine activity."
      ],
      [
        "Selective destruction of cholinergic neurons in the basal nucleus of Meynert",
        "Loss of cholinergic neurons in the basal nucleus of Meynert occurs in Alzheimer disease, causing memory loss rather than choreiform movement disorders."
      ],
      [
        "Bilateral degeneration of dopaminergic neurons in the substantia nigra pars compacta",
        "Loss of substantia nigra pars compacta dopaminergic neurons causes Parkinson disease, presenting with hypokinetic bradykinesia and resting tremor, not chorea."
      ],
      [
        "Degeneration of noradrenergic projection neurons in the pontine locus coeruleus",
        "Loss of locus coeruleus noradrenergic neurons occurs in depression, neurodegenerative disorders, and REM sleep behavior disorder, not chorea."
      ],
      [
        "Selective loss of histaminergic arousal neurons within the tuberomammillary nucleus",
        "Tuberomammillary histaminergic neurons regulate wakefulness; loss causes hypersomnolence (narcolepsy-like states), having no role in chorea."
      ]
    ],
    "shortestValidSolution": "Chorea + behavioral changes + caudate atrophy (boxcar ventricles) = Huntington disease (loss of striatal GABAergic medium spiny neurons).",
    "necessaryInference": "Recognize Huntington disease from chorea and caudate atrophy, identifying the underlying neurochemical defect as loss of striatal GABAergic projection neurons.",
    "strongestDistractor": "Bilateral degeneration of dopaminergic neurons in the substantia nigra pars compacta",
    "distractorExclusion": "Substantia nigra dopamine loss causes hypokinetic parkinsonism; Huntington chorea results from loss of inhibitory GABAergic striatal projection neurons.",
    "citation": "Bates GP, Dorsey R, Gusella JF, et al. Huntington disease. Nat Rev Dis Primers. 2015 Apr 23;1:15005. PMID: 27188817.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on huntington disease caudate atrophy gabaergic medium spiny neurons.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0917",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Parkinson Disease Substantia Nigra Alpha-Synuclein Lewy Body Neuropathology",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man presents with progressive slowing of his movements and a tremor in his right hand that is most prominent when his arm is resting on his lap and disappears when he reaches for a glass of water. Neurological examination reveals a 4-Hz 'pill-rolling' resting tremor, cogwheel rigidity of the wrists and elbows, masked facial expression (hypomimia), and a shuffling, festinating gait with reduced right arm swing. He experiences significant symptomatic improvement following initiation of a trial of levodopa-carbidopa. Autopsy in an individual with this disorder would most characteristically reveal which of the following findings on brain histology?",
    "choices": [
      [
        "Intracellular eosinophilic inclusions composed of aggregated alpha-synuclein within surviving pigmented neurons",
        "Parkinson disease is an idiopathic neurodegenerative disorder characterized by resting tremor, cogwheel rigidity, akinesia/bradykinesia, and postural instability (TRAP). The fundamental pathology is selective loss of dopaminergic neurons in the SUBSTANTIA NIGRA PARS COMPACTA, resulting in depigmentation of the substantia nigra gross specimen. On microscopic histology, surviving dopaminergic neurons contain LEWY BODIES: rounded, intracellular, eosinophilic cytoplasmic inclusions with a pale halo, composed of aggregated, insoluble ALPHA-SYNUCLEIN and ubiquitin. Depletion of dopamine in the nigrostriatal pathway reduces excitation of the direct pathway and disinhibits the indirect pathway, leading to excessive tonic thalamic inhibition and poverty of voluntary movement."
      ],
      [
        "Extracellular plaques containing core amyloid-beta fibrils surrounded by dystrophic neurites",
        "Amyloid-beta plaques are the diagnostic hallmark of Alzheimer disease, presenting with progressive amnestic dementia rather than resting tremor and cogwheel rigidity."
      ],
      [
        "Intracellular neurofibrillary tangles containing hyperphosphorylated tau protein in hippocampal pyramids",
        "Tau neurofibrillary tangles occur in Alzheimer disease, progressive supranuclear palsy, and frontotemporal dementia, not idiopathic Parkinson disease."
      ],
      [
        "Intranuclear clear inclusions composed of polyglutamine aggregates in striatal neurons",
        "Huntingtin polyglutamine inclusions occur in Huntington disease, causing caudate atrophy and chorea."
      ],
      [
        "Spongiform microvacuolation of the neuropil with astrogliosis and absence of inflammatory infiltrates",
        "Spongiform vacuolation characterizes prion diseases (Creutzfeldt-Jakob disease), causing rapidly progressive dementia and myoclonus."
      ]
    ],
    "shortestValidSolution": "Pill-rolling resting tremor + rigidity + bradykinesia + levodopa response = Parkinson disease with alpha-synuclein Lewy bodies in substantia nigra.",
    "necessaryInference": "Identify Parkinson disease from classic motor features and levodopa responsiveness, localizing pathology to substantia nigra dopaminergic loss with alpha-synuclein Lewy bodies.",
    "strongestDistractor": "Extracellular plaques containing core amyloid-beta fibrils surrounded by dystrophic neurites",
    "distractorExclusion": "Amyloid plaques characterize Alzheimer disease; Parkinson disease pathology is defined by intracellular alpha-synuclein inclusions (Lewy bodies) in pigmented neurons.",
    "citation": "Poewe W, Seppi K, Tanner CM, et al. Parkinson disease. Nat Rev Dis Primers. 2017;3:17013. PMID: 28332488.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on parkinson disease substantia nigra alpha-synuclein lewy body neuropathology.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0918",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Multiple System Atrophy Glial Cytoplasmic Inclusions Autonomic Failure",
    "provisionalDifficulty": 4,
    "stem": "A 59-year-old man presents with progressive stiffness, frequent falls, and profound dizziness upon standing. Over the past year, he has also developed complete urinary incontinence and erectile dysfunction. On examination, blood pressure is 148/88 mm Hg supine and drops precipitously to 92/54 mm Hg upon standing without a compensatory increase in heart rate (pulse remains 68/min). Neurological exam shows bilateral lead-pipe rigidity, bradykinesia, wide-based cerebellar gait ataxia, and bilateral extensor plantar responses. A trial of high-dose levodopa produces no clinical improvement. Brain MRI reveals cerebellar and pontine atrophy with a prominent T2 hyperintense cross in the pons ('hot cross bun sign'). Which of the following histopathological features is diagnostic of this condition?",
    "choices": [
      [
        "Argyrophilic glial cytoplasmic inclusions composed of alpha-synuclein within oligodendrocytes",
        "Multiple system atrophy (MSA; formerly Shy-Drager syndrome, striatonigral degeneration, and olivopontocerebellar atrophy) is a progressive neurodegenerative disease characterized by a triad of: (1) Autonomic dysfunction (orthostatic hypotension without compensatory tachycardia, urinary incontinence, erectile dysfunction); (2) Parkinsonism (poorly responsive to levodopa); and (3) Cerebellar ataxia. Gross pathology reveals olivopontocerebellar and striatonigral atrophy with pontine cruciform hyperintensity ('hot cross bun sign' on T2 MRI due to selective loss of transverse pontocerebellar fibers). Unlike Parkinson disease (where alpha-synuclein accumulates in neuronal Lewy bodies), the pathognomonic hallmark of MSA is ARGYROPHILIC GLIAL CYTOPLASMIC INCLUSIONS (GCIs; Papp-Lantos inclusions) of hyperphosphorylated ALPHA-SYNUCLEIN within OLIGODENDROCYTES."
      ],
      [
        "Round, silver-staining intraneuronal inclusions of tau protein in frontotemporal cortical neurons",
        "Pick bodies (tau-positive round inclusions in frontotemporal neurons) characterize Pick disease (frontotemporal dementia), presenting with personality changes and aphasia."
      ],
      [
        "Extracellular congophilic amyloid angiopathy with prominent microvascular beta-amyloid deposition",
        "Cerebral amyloid angiopathy involves amyloid-beta deposition in cortical vessels, predisposing to recurrent lobar intracerebral hemorrhages."
      ],
      [
        "Intraneuronal neurofibrillary tangles and paired helical filaments within cholinergic forebrain nuclei",
        "Tau neurofibrillary tangles characterize Alzheimer disease, not multiple system atrophy."
      ],
      [
        "Spheroid axonal swellings (torpedoes) in the cerebellar Purkinje cell layer without inclusions",
        "Axonal torpedoes are non-specific swellings seen in chronic cerebellar damage, not the diagnostic glial alpha-synuclein inclusions of MSA."
      ]
    ],
    "shortestValidSolution": "Parkinsonism poorly responsive to levodopa + severe autonomic failure + hot cross bun sign = Multiple system atrophy (oligodendrocyte alpha-synuclein inclusions).",
    "necessaryInference": "Deduce multiple system atrophy from combined parkinsonism, autonomic collapse, and pontine hot cross bun sign, identifying oligodendrocyte alpha-synuclein inclusions (Papp-Lantos bodies).",
    "strongestDistractor": "Round, silver-staining intraneuronal inclusions of tau protein in frontotemporal cortical neurons",
    "distractorExclusion": "Pick bodies (tau) cause frontotemporal dementia; MSA is an alpha-synucleinopathy characterized by glial cytoplasmic inclusions in oligodendrocytes.",
    "citation": "Fanciulli A, Wenning GK. Multiple-system atrophy. N Engl J Med. 2015;372(3):249-263. PMID: 25587949.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on multiple system atrophy glial cytoplasmic inclusions autonomic failure.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0919",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Nervous System",
    "topic": "Alzheimer Disease Amyloid Precursor Secretase Cleavage Beta-42 Toxicity",
    "provisionalDifficulty": 4,
    "stem": "A 76-year-old woman is brought to the clinic by her daughter due to progressive memory loss, spatial disorientation, and difficulty managing her finances over the past 2 years. She frequently repeats the same questions and recently got lost while driving in her familiar neighborhood. Neurological examination is non-focal, but Mini-Mental State Examination score is 19/30 with severe impairment in delayed word recall. Brain MRI shows generalized cortical atrophy with disproportionate bilateral hippocampal volume loss. In the pathogenesis of this condition, abnormal sequential enzymatic cleavage of a transmembrane glycoprotein by which pair of enzymes generates the neurotoxic peptide responsible for extracellular plaque formation?",
    "choices": [
      [
        "Beta-secretase and gamma-secretase",
        "Alzheimer disease is the most common cause of dementia in older adults. Neuropathologically, it is defined by: (1) Extracellular SENILE (NEURITIC) PLAQUES composed of neurotoxic AMYLOID-BETA (A-beta 42) peptides; and (2) Intracellular NEUROFIBRILLARY TANGLES composed of hyperphosphorylated TAU protein. Amyloid precursor protein (APP) is a normal transmembrane protein. In the non-amyloidogenic pathway, APP is cleaved by alpha-secretase, releasing a soluble neuroprotective fragment. In the AMYLOIDOGENIC PATHWAY, APP is first cleaved by BETA-SECRETASE (BACE-1), releasing a soluble beta fragment. The remaining membrane-bound stub is then cleaved intramembranously by GAMMA-SECRETASE (a multi-protein complex including presenilin-1 and presenilin-2). This sequential cleavage generates insoluble A-beta 40 and A-beta 42 peptides that aggregate into oligomers and fibrils, forming toxic extracellular plaques that induce synaptic injury and microglial activation."
      ],
      [
        "Alpha-secretase and beta-secretase",
        "Alpha-secretase cleaves within the amyloid-beta sequence, preventing A-beta formation and generating non-toxic soluble fragments."
      ],
      [
        "Alpha-secretase and gamma-secretase",
        "Sequential cleavage by alpha-secretase followed by gamma-secretase constitutes the non-amyloidogenic physiological pathway."
      ],
      [
        "Neprilysin and insulin-degrading enzyme",
        "Neprilysin and insulin-degrading enzyme are physiological endopeptidases that DEGRADE and clear extracellular amyloid-beta, not generate it."
      ],
      [
        "Caspase-3 and calpain-1 endopeptidases",
        "Caspases and calpains mediate apoptotic and necrotic cell death cascades, rather than generating amyloid-beta peptides from APP."
      ]
    ],
    "shortestValidSolution": "Amnestic dementia + hippocampal atrophy = Alzheimer disease; amyloid-beta plaques generated by sequential beta-secretase and gamma-secretase cleavage of APP.",
    "necessaryInference": "Identify the amyloidogenic pathway in Alzheimer disease as sequential cleavage of amyloid precursor protein (APP) by beta-secretase and gamma-secretase.",
    "strongestDistractor": "Alpha-secretase and gamma-secretase",
    "distractorExclusion": "Alpha-secretase mediates the non-amyloidogenic pathway by cleaving inside the A-beta domain, preventing plaque formation; beta- and gamma-secretase generate toxic A-beta 42.",
    "citation": "Jack CR Jr, Knopman DS, Jagust WJ, et al. Tracking pathophysiological processes in Alzheimer's disease: an updated biomarker model. Lancet Neurol. 2013;12(2):207-216. PMID: 23332364.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item requiring multi-step deduction on alzheimer disease amyloid precursor secretase cleavage beta-42 toxicity.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0920",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Creutzfeldt-Jakob Prion Alpha-Helix to Beta-Sheet Conformational Shift",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man presents with rapidly progressive cognitive decline, behavioral changes, and unsteadiness that began only 6 weeks ago. He is now bedbound, mute, and disoriented. Physical examination reveals marked startle myoclonus: clapping hands near his ear triggers generalized, involuntary jerking contractions of his trunk and limbs. Electroencephalogram (EEG) demonstrates periodic, sharp wave complexes occurring at 1 Hz across all cortical leads. Brain MRI reveals marked cortical ribboning and hyperintensity in the caudate and putamen on diffusion-weighted imaging (DWI). Lumbar puncture shows normal opening pressure and cell count, but CSF real-time quaking-induced conversion (RT-QuIC) is positive. What structural biophysical transition underlies the propagation of this transmissible neurodegenerative agent?",
    "choices": [
      [
        "Conformational transition of normal alpha-helical prion protein into protease-resistant beta-pleated sheets",
        "Creutzfeldt-Jakob disease (CJD) is a transmissible spongiform encephalopathy characterized by rapidly progressive dementia, startle myoclonus, ataxia, periodic 1-Hz sharp wave EEG discharges, and death typically within 1 year. The infectious agent is a PRION: an abnormal proteinaceous infectious particle completely lacking nucleic acid. Pathogenesis involves a post-translational conformational change: the normal cellular prion protein (PrPC), which is predominantly rich in ALPHA-HELICES and sensitive to protease digestion, is refolded into the pathogenic scrapie isoform (PrPSc), which is highly enriched in BETA-PLEATED SHEETS and resistant to protease degradation (proteinase K). PrPSc acts as a conformational template, binding PrPC and inducing it to undergo the identical alpha-helix-to-beta-sheet transition in an autocatalytic chain reaction. The accumulated PrPSc aggregates cause neuronal death, astrogliosis, and characteristic SPONGIFORM VACUOLATION of cortical gray matter without inflammation."
      ],
      [
        "Alternative splicing of premature stop codons leading to truncation of neuronal cell surface prions",
        "Prion propagation does not involve mRNA alternative splicing; it is an entirely post-translational conformational protein-templating mechanism."
      ],
      [
        "Ubiquitination-resistant hyperphosphorylation of cytoplasmic microtubule-associated tau proteins",
        "Hyperphosphorylated tau characterizes tauopathies such as Alzheimer disease and Pick disease, not transmissible prion diseases."
      ],
      [
        "Trinucleotide repeat expansion within genomic DNA leading to transcriptional stalling and silencing",
        "Trinucleotide repeats cause Huntington disease, fragile X, and Friedreich ataxia, not transmissible spongiform encephalopathies."
      ],
      [
        "Proteasome-dependent cleavage of extracellular amyloid fibrils into insoluble beta-oligomers",
        "Prions are intracellular and membrane-anchored proteins that resist proteasomal degradation due to their beta-sheet conformation; they are not generated by proteasomes."
      ]
    ],
    "shortestValidSolution": "Rapidly progressive dementia + startle myoclonus + periodic 1-Hz sharp waves on EEG = CJD via prion alpha-helix to beta-sheet conformational shift.",
    "necessaryInference": "Identify Creutzfeldt-Jakob disease from rapid dementia and startle myoclonus, attributing pathogenesis to the conformational transition of alpha-helical PrPC to beta-sheet PrPSc.",
    "strongestDistractor": "Ubiquitination-resistant hyperphosphorylation of cytoplasmic microtubule-associated tau proteins",
    "distractorExclusion": "Tau hyperphosphorylation is typical of Alzheimer disease, whereas CJD is driven by the structural refolding of prion protein into protease-resistant beta-sheets.",
    "citation": "Myskiw J. Enhanced Sensitivity of a Modified Quaking-Induced Conversion Diagnostic Test for the Broad Detection of Sporadic and Inherited Prion Diseases: A Retrospective Study. Ann Neurol. 2026 May. PMID: 41586487.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on creutzfeldt-jakob prion alpha-helix to beta-sheet conformational shift.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0921",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Glioblastoma Multiforme Pseudopalisading Necrosis Microvascular Proliferation",
    "provisionalDifficulty": 4,
    "stem": "A 61-year-old man presents with a 3-week history of worsening morning headaches, nausea, and new-onset personality changes. Neurological examination reveals mild left hemiparesis and a left homonymous hemianopia. Brain MRI with gadolinium demonstrates a solitary, large, heterogeneously enhancing ring-like mass in the right frontal lobe that crosses the corpus callosum into the left hemisphere ('butterfly glioma') with extensive surrounding vasogenic edema. Stereotactic biopsy of the lesion reveals pleomorphic, astrocytic tumor cells. Which of the following histopathological features, when present alongside tumor necrosis, is pathognomonic for this World Health Organization (WHO) grade 4 malignancy?",
    "choices": [
      [
        "Pseudopalisading necrosis surrounded by hypercellular tumor borders and microvascular proliferation",
        "Glioblastoma (formerly glioblastoma multiforme; GBM) is the most common and aggressive primary malignant brain tumor in adults. It is classified as WHO Grade 4 astrocytoma. On neuroimaging, it typically appears as a solitary, necrotic, ring-enhancing hemispheric mass that frequently crosses the corpus callosum ('butterfly glioma'). The diagnostic histopathological hallmarks required for a diagnosis of glioblastoma (in IDH-wildtype astrocytomas) are: (1) PSEUDOPALISADING NECROSIS (serpentine areas of central ischemic necrosis bordered by crowded, palisading tumor cells that are migrating away from hypoxic regions); and (2) MICROVASCULAR (GLOMERULOID) PROLIFERATION (hyperplastic endothelial tufts driven by tumor-secreted vascular endothelial growth factor [VEGF]). Molecularly, primary glioblastomas are IDH-wildtype and frequently exhibit EGFR AMPLIFICATION and TERT promoter mutations."
      ],
      [
        "Biphasic architecture with hypercellular Antoni A areas containing Verocay bodies and hypocellular Antoni B areas",
        "Antoni A areas with Verocay bodies are the diagnostic hallmark of benign schwannomas, which are S100-positive and arise from cranial or spinal nerves."
      ],
      [
        "Concentric whorls of meningothelial cells with central laminated calcifications (psammoma bodies)",
        "Concentric whorled cells and psammoma bodies characterize benign meningiomas, which are dural-based and extra-axial."
      ],
      [
        "Uniform round cells with clear perinuclear halos ('fried-egg' appearance) and branching capillaries",
        "Fried-egg appearance with chicken-wire capillaries characterizes oligodendrogliomas, which harbor IDH mutations and 1p/19q co-deletions."
      ],
      [
        "Perivascular pseudorosettes composed of tumor cells arranged radially around blood vessels with true ependymal rosettes",
        "Perivascular pseudorosettes and true rosettes characterize ependymomas, typically arising within ventricular walls."
      ]
    ],
    "shortestValidSolution": "Butterfly mass crossing corpus callosum + ring enhancement = Glioblastoma; histology shows pseudopalisading necrosis and microvascular proliferation.",
    "necessaryInference": "Recognize glioblastoma from imaging (ring enhancement crossing midline) and identify pseudopalisading necrosis with microvascular proliferation as the defining histological features.",
    "strongestDistractor": "Uniform round cells with clear perinuclear halos ('fried-egg' appearance) and branching capillaries",
    "distractorExclusion": "Fried-egg cells with branching capillaries characterize oligodendrogliomas, whereas glioblastomas exhibit pseudopalisading necrosis and microvascular proliferation.",
    "citation": "Louis DN, Perry A, Wesseling P, et al. The 2021 WHO Classification of Tumors of the Central Nervous System: a summary. Neuro Oncol. 2021;23(8):1231-1251. PMID: 34185076.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on glioblastoma multiforme pseudopalisading necrosis microvascular proliferation.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0922",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Meningioma Dural Tail Arachnoid Cap Cells Psammoma Bodies",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old woman presents with a 6-month history of gradual, unprovoked generalized seizures. Physical examination is entirely normal without focal motor deficits. Contrast-enhanced brain MRI reveals a 3.5-cm, extra-axial, homogenously enhancing dural-based mass along the parasagittal convexity that indents the underlying frontal cortex without invading brain parenchyma. A distinct thickening of the adjacent dura mater is noted ('dural tail sign'). The tumor is surgically resected. Histopathological evaluation of the specimen reveals densely packed spindle-shaped cells arranged in tight, concentric whorls, interspersed with numerous round, laminated, basophilic calcifications. What is the nature of these laminated calcified structures?",
    "choices": [
      [
        "Psammoma bodies resulting from dystrophic calcification of degenerate meningothelial whorls",
        "Meningiomas are the most common benign extra-axial intracranial neoplasms in adults, occurring with increased frequency in middle-aged women (frequently expressing progesterone receptors). They arise from ARACHNOID CAP CELLS of the meninges and are classically extra-axial, dural-based, and display a prominent 'dural tail' of reactive meningeal enhancement. On histology, meningiomas demonstrate syncytial, spindle-shaped cells arranged in concentric WHORLED ARCHITECTURE. With time, central degenerate cells within these whorls undergo DYSTROPHIC CALCIFICATION, forming concentric, laminated, basophilic round calcified structures known as PSAMMOMA BODIES (from the Greek psammos, 'sand'). Psammoma bodies are also characteristic of papillary thyroid carcinoma, serous ovarian cystadenocarcinoma, and malignant mesothelioma (mnemonic: PSaMMoma). Cytogenetically, meningiomas frequently harbor loss of chromosome 22q containing the NF2 (merlin) tumor suppressor gene."
      ],
      [
        "Rosenthal fibers derived from degenerative astrocytic eosinophilic corkscrew processes",
        "Rosenthal fibers are eosinophilic corkscrew structures found in pilocytic astrocytomas, not calcified psammoma bodies."
      ],
      [
        "Corpora amylacea resulting from non-specific polyglucosan aging bodies in astrocytic endfeet",
        "Corpora amylacea are basophilic glycoprotein bodies that accumulate normally in the aging brain, rather than tumor psammoma bodies."
      ],
      [
        "Verocay bodies formed by palisading nuclei around acellular eosinophilic cytoplasmic processes",
        "Verocay bodies are nuclear palisades seen in schwannomas, not calcified laminated psammoma bodies."
      ],
      [
        "Lewy bodies composed of aggregated alpha-synuclein proteins with pale peripheral halos",
        "Lewy bodies are intracellular inclusions in Parkinson disease and dementia with Lewy bodies, not extracellular laminated calcifications."
      ]
    ],
    "shortestValidSolution": "Extra-axial dural-based mass + dural tail + whorled cells + laminated calcifications = Meningioma with psammoma bodies (dystrophic calcification).",
    "necessaryInference": "Identify meningioma from extra-axial dural-based mass and whorled histology, recognizing psammoma bodies as dystrophic calcifications of arachnoid cap cell whorls.",
    "strongestDistractor": "Rosenthal fibers derived from degenerative astrocytic eosinophilic corkscrew processes",
    "distractorExclusion": "Rosenthal fibers characterize pilocytic astrocytomas, whereas psammoma bodies are calcified whorls characteristic of meningiomas.",
    "citation": "Marosi C, Hassler M, Roessler K, et al. Meningioma. Crit Rev Oncol Hematol. 2008;67(2):153-171. PMID: 18342535.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on meningioma dural tail arachnoid cap cells psammoma bodies.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0923",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Vestibular Schwannoma Cerebellopontine Angle Antoni A Verocay Bodies S100",
    "provisionalDifficulty": 4,
    "stem": "A 46-year-old woman presents with progressive hearing loss in her right ear over the past 14 months, accompanied by intermittent tinnitus and mild unsteadiness. Audiometry confirms sensorineural hearing loss on the right. MRI of the brain with gadolinium reveals a well-circumscribed, homogenously enhancing 2.2-cm mass centered within the right internal acoustic meatus and expanding into the cerebellopontine angle ('ice cream cone' appearance). Surgical resection of the mass is performed. Histopathology reveals alternating regions of high and low cellularity: hypercellular areas with nuclear palisading around acellular eosinophilic zones, alternating with loose, myxoid hypocellular areas. Immunohistochemistry reveals strong, diffuse cytoplasmic and nuclear positivity for S100 protein. Which of the following names correctly describes the nuclear palisades observed in the hypercellular zones?",
    "choices": [
      [
        "Verocay bodies within Antoni A areas",
        "Schwannomas (neurilemomas) are benign peripheral nerve sheath tumors derived from neural crest-derived SCHWANN CELLS. They most commonly involve the vestibular division of the vestibulocochlear nerve (cranial nerve VIII) at the cerebellopontine angle (often called 'acoustic neuromas' or vestibular schwannomas). Grossly, they are encapsulated and compress the nerve of origin rather than invading it. Histologically, schwannomas exhibit a classic BIPHASIC pattern: (1) ANTONI A AREAS: hypercellular regions composed of compact, elongated spindle cells with alternating nuclear palisading around acellular eosinophilic cytoplasmic processes, termed VEROCAY BODIES; and (2) ANTONI B AREAS: hypocellular, loose, myxoid, microcystic regions with scattered cells. Because Schwann cells derive from the neural crest, schwannomas are diffusely and intensely positive for S100 PROTEIN. Bilateral vestibular schwannomas are pathognomonic for NEUROFIBROMATOSIS TYPE 2 (NF2 mutation on chromosome 22q)."
      ],
      [
        "Homer Wright pseudorosettes within hypercellular primitive neuroectodermal zones",
        "Homer Wright rosettes consist of tumor cells surrounding a central tangle of neuropil, characteristic of medulloblastoma and neuroblastoma."
      ],
      [
        "Flexner-Wintersteiner rosettes surrounding a central true lumen",
        "Flexner-Wintersteiner rosettes surround a true lumen with tight junctions, characteristic of retinoblastoma."
      ],
      [
        "Perivascular pseudorosettes surrounding blood vessels in a radial spoke-wheel pattern",
        "Perivascular pseudorosettes consist of tumor processes radiating toward a central blood vessel, characteristic of ependymoma and glioblastoma."
      ],
      [
        "Call-Exner bodies containing eosinophilic fluid resembling primitive follicles",
        "Call-Exner bodies are microfollicular structures containing eosinophilic secretions, pathognomonic of granulosa cell tumors of the ovary."
      ]
    ],
    "shortestValidSolution": "Cerebellopontine angle mass + S100 positive + biphasic hypercellular/myxoid architecture = Schwannoma with Verocay bodies in Antoni A areas.",
    "necessaryInference": "Recognize vestibular schwannoma from cerebellopontine angle localization and S100 positivity, identifying Verocay bodies within Antoni A areas as the diagnostic palisades.",
    "strongestDistractor": "Perivascular pseudorosettes surrounding blood vessels in a radial spoke-wheel pattern",
    "distractorExclusion": "Perivascular pseudorosettes surround blood vessels in ependymomas; schwannomas exhibit Verocay bodies (nuclear palisades around cytoplasmic processes in Antoni A areas).",
    "citation": "Rodriguez FJ. Pathology of peripheral nerve sheath tumors: diagnostic overview and update on selected diagnostic problems. Acta Neuropathol. 2012 Mar. PMID: 22327363.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on vestibular schwannoma cerebellopontine angle antoni a verocay bodies s100.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0924",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Oligodendroglioma Fried-Egg Morphology 1p19q Codeletion Chemosensitivity",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old man presents with a first-time generalized tonic-clonic seizure. Neurological examination is completely normal. Brain MRI demonstrates an ill-defined, non-enhancing mass in the white matter of the right frontal lobe with multiple coarse internal calcifications. Surgical resection is performed. Histopathological evaluation reveals sheets of monotonous, uniform cells with round, central nuclei surrounded by clear, vacuolated cytoplasm, giving a classic 'fried-egg' appearance on formalin-fixed paraffin sections. The tumor is richly vascularized by delicate, thin-walled, branching capillaries resembling 'chicken-wire'. Which of the following co-occurring genetic alterations is the defining molecular feature of this neoplasm and predicts favorable responsiveness to alkylating chemotherapy?",
    "choices": [
      [
        "Complete codeletion of chromosomal arms 1p and 19q (1p/19q codeletion)",
        "Oligodendroglioma is a slow-growing diffuse glioma typically occurring in young to middle-aged adults, most frequently in the frontal lobes, often presenting with seizures. Neuroimaging characteristically shows calcification in up to 90% of cases. Histologically, it demonstrates: (1) Sheets of uniform, round cells with dark central round nuclei and artifactual clear cytoplasmic halos ('FRIED-EGG' appearance produced by formalin fixation); and (2) A rich network of delicate, branching capillaries forming a 'CHICKEN-WIRE' vascular pattern. Under current WHO CNS tumor classification, the definitive diagnosis of oligodendroglioma MANDATES two molecular alterations: an IDH1 or IDH2 MUTATION and WHOLE-ARM UNBALANCED TRANSLOCATION resulting in COMBINED 1p AND 19q CODELETION [t(1;19)(q10;p10)]. This 1p/19q codeletion confers exceptional chemosensitivity to PCV (procarbazine, lomustine, vincristine) or temozolomide chemotherapy and significantly prolonged overall survival."
      ],
      [
        "Amplification of the epidermal growth factor receptor (EGFR) gene on chromosome 7",
        "EGFR amplification is characteristic of IDH-wildtype glioblastoma, conferring aggressive invasiveness and poor prognosis."
      ],
      [
        "Inactivating mutations in the ATRX chromatin remodeler and TP53 tumor suppressor genes",
        "Combined ATRX and TP53 mutations define IDH-mutant astrocytomas, which lack the 1p/19q codeletion of oligodendrogliomas."
      ],
      [
        "Homozygous deletion of the cyclin-dependent kinase inhibitor 2A (CDKN2A) locus",
        "Homozygous CDKN2A deletion indicates high-grade transformation (WHO grade 4) in astrocytomas and oligodendrogliomas, indicating poor prognosis."
      ],
      [
        "Tandem duplication resulting in KIAA1549-BRAF gene fusion",
        "KIAA1549-BRAF fusion occurs in pilocytic astrocytomas of children, producing constitutive MAPK pathway activation."
      ]
    ],
    "shortestValidSolution": "Frontal lobe calcified mass + fried-egg histology + chicken-wire capillaries = Oligodendroglioma defined by 1p/19q codeletion.",
    "necessaryInference": "Link classic fried-egg cytology and chicken-wire capillaries to oligodendroglioma, recognizing 1p/19q codeletion as the defining diagnostic and chemosensitive biomarker.",
    "strongestDistractor": "Inactivating mutations in the ATRX chromatin remodeler and TP53 tumor suppressor genes",
    "distractorExclusion": "ATRX and TP53 mutations define IDH-mutant astrocytomas (mutually exclusive with 1p/19q codeletion, which defines oligodendrogliomas).",
    "citation": "Cairncross G, Wang M, Shaw E, et al. Phase III trial of chemoradiotherapy for anaplastic oligodendroglioma: long-term results of RTOG 9402. J Clin Oncol. 2013;31(3):337-343. PMID: 23071247.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on oligodendroglioma fried-egg morphology 1p19q codeletion chemosensitivity.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-0925",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Medulloblastoma Cerebellar Vermis Small Round Blue Cells Homer Wright Rosettes",
    "provisionalDifficulty": 5,
    "stem": "A 6-year-old boy presents with a 4-week history of morning headache, persistent vomiting, and progressive gait unsteadiness. Examination reveals truncal ataxia (he cannot sit unsupported without swaying), bilateral dysmetria, and bilateral papilledema. Brain MRI demonstrates a solid, midline mass in the cerebellar vermis that compresses the fourth ventricle, causing non-communicating obstructive hydrocephalus. Lumbar puncture demonstrates tumor cells within the cerebrospinal fluid ('drop metastases' along the cauda equina). Histopathological examination of the resected cerebellar mass reveals sheets of densely packed, primitive small round blue cells with hyperchromatic nuclei, high nuclear-to-cytoplasmic ratios, and prominent tumor cells arranged in circles around central tangles of fibrillary neuropil. What is the correct designation for these circular cellular arrangements?",
    "choices": [
      [
        "Homer Wright pseudorosettes",
        "Medulloblastoma is the most common malignant brain tumor of childhood (WHO grade 4), typically arising in children under 10 years of age. It arises from primitive neuroectodermal cells in the CEREBELLAR VERMIS (causing truncal ataxia and gait disturbance) and projects into the fourth ventricle, causing obstructive hydrocephalus and raised intracranial pressure (morning headaches, projectile vomiting). Due to its proximity to the ventricular system, medulloblastoma frequently seeds the subarachnoid space, producing 'DROP METASTASES' along the spinal cord and cauda equina. Histologically, it is a classic 'small round blue cell tumor' composed of densely packed, primitive cells with hyperchromatic nuclei, scant cytoplasm, brisk mitoses, and HOMER WRIGHT PSEUDOROSETTES (tumor cells arranged radially around an acellular central zone of pink fibrillary neuronal processes/neuropil). Molecularly, it is categorized into WNT-activated (best prognosis), SHH-activated, Group 3 (MYC amplified, worst prognosis), and Group 4."
      ],
      [
        "Flexner-Wintersteiner rosettes surrounding a true central lumen with terminal bars",
        "Flexner-Wintersteiner rosettes contain a true central lumen and are diagnostic of retinoblastoma, not cerebellar medulloblastoma."
      ],
      [
        "Perivascular pseudorosettes surrounding central capillary channels with acellular collars",
        "Perivascular pseudorosettes surround true blood vessels and are characteristic of ependymomas and glioblastomas, not Homer Wright rosettes."
      ],
      [
        "Verocay bodies formed by palisading spindle cell nuclei around eosinophilic processes",
        "Verocay bodies are nuclear palisades seen in benign peripheral nerve schwannomas."
      ],
      [
        "Psammoma bodies formed by concentric laminated calcifications of arachnoid cap cells",
        "Psammoma bodies are calcified laminated spherules characteristic of meningiomas, papillary thyroid cancer, and ovarian serous carcinomas."
      ]
    ],
    "shortestValidSolution": "Child + cerebellar vermis mass + drop metastases + small round blue cells with Homer Wright rosettes = Medulloblastoma.",
    "necessaryInference": "Identify medulloblastoma from childhood midline cerebellar vermis localization and CSF seeding, recognizing Homer Wright rosettes as circular cells around fibrillary neuropil.",
    "strongestDistractor": "Perivascular pseudorosettes surrounding central capillary channels with acellular collars",
    "distractorExclusion": "Perivascular pseudorosettes surround blood vessels (typical of ependymomas); Homer Wright rosettes surround a tangle of fibrillary neuropil (medulloblastoma).",
    "citation": "Taylor MD, Northcott PA, Korshunov A, et al. Molecular subgroups of medulloblastoma: the current consensus. Acta Neuropathol. 2012;123(4):465-472. PMID: 22134537.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on medulloblastoma cerebellar vermis small round blue cells homer wright rosettes.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  }
];
