# Step 1 Batch 16 Part 4: Items 0396 - 0400
import json

items_b16_p4 = [
  {
    "code": "op-c-s1-0396",
    "exam": "Step 1",
    "subject": "Neuroanatomy",
    "system": "Nervous System",
    "topic": "Visual Pathway Lesions and Quadrantanopia",
    "subtopic": "Meyer Loop vs Baum Loop Anatomical Course",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old woman is evaluated following a motor vehicle collision in which her car was struck on the passenger side because she did not see the oncoming vehicle. She also describes experiencing intermittent focal seizures characterized by olfactory hallucinations of burning rubber followed by brief episodes of lip-smacking and impaired responsiveness. Neurological examination is notable for a visual field defect: visual field testing reveals a dense, homonymous right superior quadrantanopia ('pie in the sky' defect) with normal visual acuity in both eyes. Pupillary light reflexes are brisk and symmetric bilaterally. An axial T2-weighted MRI of the brain demonstrates a well-circumscribed hyperintense mass in the temporal lobe. Which of the following tracts has been interrupted by this mass lesion?",
    "choices": [
      ["Meyer loop fibers arching through the temporal lobe around the inferior horn of the lateral ventricle", "Meyer loop carries optic radiation fibers originating from the lateral geniculate nucleus (LGN) that encode the superior contralateral visual quadrant. These axons sweep anteriorly and inferiorly through the temporal lobe around the temporal (inferior) horn of the lateral ventricle before turning posteriorly toward the lingual gyrus of the primary visual cortex (V1) below the calcarine fissure. Interruption of Meyer loop produces a contralateral superior quadrantanopia ('pie in the sky'). Temporal lobe pathology (tumors, temporal lobectomy) commonly causes this defect accompanied by temporal lobe seizures."],
      ["Baum loop fibers passing directly through the parietal lobe around the lateral ventricle", "Baum loop carries optic radiation fibers representing the inferior contralateral visual quadrant. These fibers travel through the retrolenticular internal capsule directly through the parietal lobe toward the cuneus above the calcarine fissure. Damage results in a contralateral inferior quadrantanopia ('pie on the floor')."],
      ["Uncrossed temporal retinal fibers traversing the ipsilateral lateral geniculate nucleus", "Uncrossed temporal retinal fibers carry visual information from the ipsilateral hemifield to the LGN. Damage anterior to the optic chiasm results in monocular visual loss, not a homonymous quadrantanopia."],
      ["Decussating nasal retinal fibers forming the anterior notch of the optic chiasm", "Decussating nasal retinal fibers in the optic chiasm transmit temporal visual field inputs from both eyes. Compression of the chiasm (e.g., pituitary adenoma) produces bitemporal hemianopsia, not a unilateral superior homonymous quadrantanopia."],
      ["Pretectal afferent fibers traversing the brachium of the superior colliculus", "Pretectal fibers mediate the afferent limb of the pupillary light reflex, connecting the optic tract to the Edinger-Westphal nuclei. Lesions in this pathway (or the dorsal midbrain) cause light-near dissociation (Argyll Robertson or Parinaud syndrome) without homonymous quadrantic visual field cuts."]
    ],
    "shortestValidSolution": "Temporal lobe mass + olfactory seizures + contralateral superior quadrantanopia ('pie in the sky') -> Meyer loop interruption.",
    "necessaryInference": "Map the visual field defect (superior quadrantanopia) to optic radiation anatomy: Meyer loop loops through the temporal lobe around the inferior horn of the lateral ventricle to the lingual gyrus.",
    "strongestDistractor": "Baum loop fibers passing directly through the parietal lobe around the lateral ventricle",
    "distractorExclusion": "Baum loop courses through the parietal lobe and carries inferior visual fields; lesions produce contralateral inferior quadrantanopia ('pie on the floor').",
    "citation": "Pelak VS. Neuro-Ophthalmology of the Visual Pathways. Continuum (Minneap Minn). 2019;25(5):1333-1361. PMID: 31584540."
  },
  {
    "code": "op-c-s1-0397",
    "exam": "Step 1",
    "subject": "Neuropathology",
    "system": "Nervous System",
    "topic": "Occipital Lobe Infarction and Macular Sparing",
    "subtopic": "Posterior Cerebral Artery Occlusion and Middle Cerebral Artery Collaterals",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old man presents to the emergency department with sudden difficulty seeing objects on his left side. He has a history of long-standing hypertension, type 2 diabetes mellitus, and coronary artery disease. On physical examination, blood pressure is 158/88 mm Hg and heart rate is 76/min. Automated perimetry confirms a left homonymous hemianopsia with complete preservation of central visual acuity (20/20 in each eye) and an intact central 5-degree visual field in both eyes ('macular sparing'). Pupillary light reflexes and extraocular movements are entirely normal, and he has no extremity weakness, numbness, or ataxia. Diffusion-weighted MRI of the brain confirms an acute ischemic stroke in the primary visual cortex of the right occipital lobe. Which of the following vascular explanations accounts for the preservation of central vision in this patient?",
    "choices": [
      ["Dual vascular collateral supply to the occipital pole provided by the middle cerebral artery", "The primary visual cortex (striate cortex, Brodmann area 17) along the calcarine fissure is supplied primarily by calcarine branches of the posterior cerebral artery (PCA). However, the occipital pole—which contains an extraordinarily large cortical representation of the macula (fovea)—receives dual, overlapping vascular perfusion from terminal anastomoses of both the posterior cerebral artery and the middle cerebral artery (MCA). Consequently, when a PCA thromboembolic occlusion infarctions the occipital cortex, collateral flow from the MCA preserves the macular representation at the occipital pole, resulting in homonymous hemianopsia with classic macular sparing."],
      ["Retrograde perfusion of the visual cortex via the posterior communicating artery", "The posterior communicating artery (PCoA) connects the internal carotid artery to the PCA. While PCoA patency can provide collateral inflow if the proximal P1 segment of the PCA is occluded, it provides global hemispheric PCA flow, rather than selectively perfusing the occipital pole to spare the macula while allowing the rest of the calcarine cortex to infarct."],
      ["Bilateral decussation of foveal retinal ganglion cell axons in the optic chiasm", "Retinal ganglion cell axons from each nasal hemiretina decussate at the optic chiasm, while temporal fibers do not. The fovea does not project bilaterally to both visual cortices from a single eye; each occipital hemisphere processes strictly the contralateral hemifield."],
      ["Direct collateral anastomoses between the anterior choroidal artery and calcarine branches", "The anterior choroidal artery supplies the optic tract, lateral geniculate nucleus, and posterior limb of the internal capsule. It does not supply the occipital cortex or occipital pole."],
      ["Sprouting of new cortical microvessels from the superior cerebellar artery", "The superior cerebellar artery supplies the superior cerebellum and dorsal midbrain. It does not provide collateral neocortical perfusion to the occipital lobe."]
    ],
    "shortestValidSolution": "PCA infarction + contralateral homonymous hemianopsia with macular sparing -> dual blood supply to the occipital pole from MCA collaterals.",
    "necessaryInference": "Recognize that macular sparing in occipital PCA stroke occurs because the occipital pole macular representation receives dual collateral perfusion from the middle cerebral artery.",
    "strongestDistractor": "Retrograde perfusion of the visual cortex via the posterior communicating artery",
    "distractorExclusion": "PCoA provides flow to the entire PCA territory if P1 is occluded; it cannot explain selective sparing of only the occipital pole macula when PCA cortical branches are occluded.",
    "citation": "Biousse V, Newman NJ. Vascular Disorders of the Visual Cortex. Continuum (Minneap Minn). 2019;25(5):1362-1376. PMID: 31584541."
  },
  {
    "code": "op-c-s1-0398",
    "exam": "Step 1",
    "subject": "Neuroanatomy & Neuropathology",
    "system": "Nervous System",
    "topic": "Normal Pressure Hydrocephalus",
    "subtopic": "Distortion of Periventricular Sacral Motor Fibers",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old man is brought to the clinic by his daughter because of gradual cognitive decline, urinary incontinence, and difficulty walking over the past 8 months. His daughter notes that he has become increasingly forgetful, slow to respond, and has had several episodes of involuntary urination before reaching the toilet. On physical examination, his gait is slow, wide-based, and shuffling, with his feet appearing 'glued to the floor' (magnetic gait); however, there is no resting tremor, cogwheel rigidity, or extremity weakness. Deep tendon reflexes are 2+ symmetrically, and plantar responses are flexor. Non-contrast head CT reveals marked symmetric enlargement of the lateral and third ventricles out of proportion to sulcal enlargement, with flattening of cortical sulci against the calvarium. Lumbar puncture demonstrates a normal opening pressure of 130 mm H2O; removal of 35 mL of cerebrospinal fluid leads to immediate, marked improvement in his gait velocity and step height. Which of the following neuroanatomical mechanisms directly explains the patient's gait disturbance and urinary urgency?",
    "choices": [
      ["Stretching of sacral and lower extremity corticospinal fibers in the corona radiata", "Normal pressure hydrocephalus (NPH) is characterized by the classic triad of gait disturbance ('magnetic' gait / gait apraxia), cognitive impairment, and urinary urge incontinence ('wet, wacky, and wobbly'). Ventriculomegaly with normal opening pressure exerts mechanical shear stress and distention on the periventricular white matter, specifically stretching the corona radiata fibers traversing alongside the lateral ventricles. Because the sacral and lumbar motor and autonomic fibers course most medially adjacent to the ventricular wall, they are stretched first, causing lower extremity gait disturbance and early urinary urge incontinence."],
      ["Selective neurodegeneration of pigmented dopaminergic neurons in the substantia nigra pars compacta", "Loss of dopaminergic neurons in the substantia nigra pars compacta causes Parkinson disease, presenting with asymmetric resting tremor, cogwheel rigidity, bradykinesia, and postural instability, rather than the isolated magnetic gait, ventriculomegaly, and CSF tap test responsiveness of NPH."],
      ["Ischemic demyelination of the posterior columns in the cervical spinal cord", "Dorsal column demyelination (as seen in subacute combined degeneration or tabes dorsalis) causes sensory ataxia with positive Romberg sign and loss of vibratory/proprioceptive sensation, not a frontal/magnetic gait apraxia."],
      ["Atrophy of cholinergic neurons within the nucleus basalis of Meynert", "Nucleus basalis of Meynert degeneration is prominent in Alzheimer disease, which causes early profound episodic memory impairment rather than prominent early gait apraxia and urinary urgency with ventriculomegaly out of proportion to sulcal widening."],
      ["Obstruction of cerebrospinal fluid outflow at the bilateral foramina of Monro", "Obstruction at the foramina of Monro causes non-communicating (obstructive) hydrocephalus of the lateral ventricles with elevated intracranial pressure (headache, papilledema, vomiting), not normal-pressure communicating hydrocephalus with the clinical triad."]
    ],
    "shortestValidSolution": "Magnetic gait + cognitive decline + urinary incontinence ('wet, wacky, wobbly') + ventriculomegaly + CSF tap improvement -> NPH (stretching of sacral motor fibers in corona radiata).",
    "necessaryInference": "Connect ventricular enlargement without sulcal atrophy to periventricular mechanical distortion, specifically recognizing that the medially situated sacral/lumbar corticospinal fibers in the corona radiata are stretched first.",
    "strongestDistractor": "Obstruction of cerebrospinal fluid outflow at the bilateral foramina of Monro",
    "distractorExclusion": "Foramina of Monro obstruction causes non-communicating hydrocephalus with elevated intracranial pressure, papilledema, and headaches, whereas NPH has normal opening pressure and communicating CSF flow.",
    "citation": "Williams MA, Malm J. Diagnosis and Treatment of Normal Pressure Hydrocephalus. Continuum (Minneap Minn). 2016;22(2 Dementia):579-599. PMID: 27042909."
  },
  {
    "code": "op-c-s1-0399",
    "exam": "Step 1",
    "subject": "Gross Anatomy & Neurobiology",
    "system": "Nervous System",
    "topic": "Carpal Tunnel Syndrome Median Nerve Entrapment",
    "subtopic": "Direct Mechanism Disclosure Rejection Exemplar",
    "provisionalDifficulty": 2,
    "stem": "A 45-year-old typist presents with numbness in the thumb, index, and middle fingers caused by compression of the median nerve within the carpal tunnel beneath the flexor retinaculum. Which of the following structures is compressed in the carpal tunnel?",
    "choices": [
      ["Median nerve", "The median nerve is compressed in carpal tunnel syndrome beneath the transverse carpal ligament."],
      ["Thoracic duct", "The thoracic duct is located in the thorax and drains lymph into the subclavian vein."],
      ["Femoral vein", "The femoral vein is located in the femoral triangle of the lower extremity."],
      ["Achilles tendon", "The Achilles tendon is the posterior conjoined tendon of the gastrocnemius and soleus inserting on the calcaneus."],
      ["Greater saphenous vein", "The greater saphenous vein is a superficial venous conduit of the lower extremity."]
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
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "REJECT",
      "rejectionNotes": "Stem lead-in explicitly announces the median nerve entrapment mechanism and distractors are non-neurologic absurdities, completely bypassing necessary clinical inference."
    }
  },
  {
    "code": "op-c-s1-0400",
    "exam": "Step 1",
    "subject": "Physiology & Critical Care",
    "system": "General Principles",
    "topic": "Targeted Temperature Management in Cardiac Arrest",
    "subtopic": "Hypothermia vs Normothermia in Non-Shockable Rhythms",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man collapses at home and experiences an unwitnessed cardiac arrest. Emergency medical services arrive 14 minutes later and find him in asystole. Cardiopulmonary resuscitation and administration of intravenous epinephrine achieve return of spontaneous circulation (ROSC) after 22 minutes. In the intensive care unit, he remains deeply comatose with a Glasgow Coma Scale score of 3 and bilaterally sluggish pupillary reflexes. Invasive hemodynamic monitoring reveals blood pressure 110/68 mm Hg on a norepinephrine infusion and a core body temperature of 37.8°C. The critical care team convenes to determine the targeted post-resuscitation temperature management protocol. The attending physician debates whether strict hypothermia (33°C) or controlled normothermia with fever prevention (≤37.5°C) confers superior neuroprotection and all-cause survival in patients resuscitated from an initial non-shockable cardiac arrest rhythm. Which of the following pathophysiological statements accurately captures the current unresolved scientific debate regarding therapeutic hypothermia in non-shockable cardiac arrest?",
    "choices": [
      ["Whether metabolic suppression from hypothermia outweighs systemic complications in non-shockable rhythms remains discordant between randomized trials", "The utility of therapeutic hypothermia (32°C–34°C) versus controlled normothermia with active fever prevention (≤37.5°C) in comatose survivors of out-of-hospital cardiac arrest with non-shockable rhythms (asystole and PEA) remains a major unresolved clinical controversy. While the HYPERION trial (2019) demonstrated improved 90-day favorable neurological outcomes with moderate hypothermia (33°C) in non-shockable arrest, the larger TTM2 trial (2021) showed that hypothermia at 33°C did not improve survival or functional outcomes compared to targeted normothermia (≤37.5°C), while increasing arrhythmias and hemodynamic instability. Consequently, major international guidelines (AHA vs ERC/ESICM) present divergent interpretations regarding mandatory hypothermia targets."],
      ["Hypothermia uniquely activates mitochondrial oxidative phosphorylation to prevent neuronal apoptosis", "Hypothermia decreases, rather than activates, mitochondrial metabolic rate and oxygen consumption. Its neuroprotective mechanism is believed to arise from reduced cellular metabolic demand, decreased reactive oxygen species generation, and reduced extracellular glutamate accumulation."],
      ["Normothermia allows unrestrained excitatory glutamate release that universally causes irreversible brain death", "While hyperthermia (fever) exacerbates post-ischemic reperfusion injury and worsens neuronal death, controlled normothermia with strict fever avoidance (maintaining temperature ≤37.5°C) has been shown in recent large multicenter trials to provide neuroprotection comparable to active cooling to 33°C without the associated coagulopathy and arrhythmia risks."],
      ["Therapeutic hypothermia to 33°C reliably eliminates all secondary reperfusion inflammation without bleeding risks", "Hypothermia induces mild thrombocytopenia, impairs platelet function, and inhibits the coagulation cascade enzyme kinetics, leading to increased bleeding complications and impaired pharmacokinetics of sedation and neuromuscular blockade."],
      ["Non-shockable arrest rhythms exhibit complete resistance to anoxic-ischemic encephalopathy due to collateral perfusion", "Non-shockable rhythms (asystole, PEA) are associated with prolonged total ischemic times, minimal forward blood flow, and significantly worse post-anoxic ischemic brain injury and neurological prognosis compared to shockable ventricular arrhythmias."]
    ],
    "shortestValidSolution": "Targeted temperature management in non-shockable cardiac arrest has conflicting trial evidence: HYPERION showed benefit of 33°C, whereas TTM2 showed no difference between 33°C and normothermia (≤37.5°C) with higher arrhythmia rates.",
    "necessaryInference": "Acknowledge the unresolved conflict between HYPERION and TTM2 trials regarding the neurological efficacy and complication profile of deep hypothermia (33°C) versus active normothermia (≤37.5°C) in non-shockable arrest.",
    "strongestDistractor": "Normothermia allows unrestrained excitatory glutamate release that universally causes irreversible brain death",
    "distractorExclusion": "Active normothermia (≤37.5°C with fever prevention) does not allow unrestrained hyperthermic injury; the modern debate is whether cooling below normal temperature adds meaningful neuroprotection over strict fever prevention.",
    "citation": "Dankiewicz J, et al. Hypothermia versus Normothermia after Out-of-Hospital Cardiac Arrest. N Engl J Med. 2021;384(24):2283-2294. PMID: 34133859.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "The question examines the active scientific conflict between the HYPERION trial and the TTM2 trial regarding targeted hypothermia (33°C) versus targeted normothermia (≤37.5°C) in comatose survivors of out-of-hospital non-shockable cardiac arrest.",
      "distractorExclusionNotes": "Distractors examine alternative pathophysiologic claims (mitochondrial activation, bleeding immunity, glutamate toxicity).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "UNRESOLVED",
      "unresolvedNotes": "Conflicting international guideline recommendations and ongoing randomized trial discordance regarding therapeutic hypothermia (32–34°C) versus targeted normothermia (≤37.5°C) in out-of-hospital cardiac arrest with non-shockable presenting rhythms."
    }
  }
]

print(f"Loaded {len(items_b16_p4)} items for Batch 16 part 4.")
