# Step 1 Batch 16 Part 3: Items 0386 - 0395
import json

items_b16_p3 = [
  {
    "code": "op-c-s1-0386",
    "exam": "Step 1",
    "subject": "Neuropathology",
    "system": "Nervous System",
    "topic": "Syringomyelia and Chiari Type I Malformation",
    "subtopic": "Disruption of Anterior White Commissure Decussation",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman presents to the clinic because of painless burns on both of her hands sustained while cooking. She reports that over the past year, she has noticed progressive clumsiness and stiffness in her upper extremities. Neurological examination reveals bilaterally absent pain and temperature sensation across her shoulders, upper chest, and upper extremities in a cape-like distribution. Light touch, vibration sense, and two-point discrimination remain entirely intact bilaterally. Motor examination demonstrates mild bilateral hand intrinsic muscle weakness and atrophy with preserved lower extremity strength and hyperactive patellar reflexes with bilateral extensor plantar responses. Sagittal T1-weighted MRI of the brain and spine shows tonsillar herniation 7 mm below the foramen magnum and an expansive fluid-filled cavity centered from C3 to T2 within the spinal cord. Which of the following neuroanatomical structures is primarily damaged to cause the patient's sensory findings?",
    "choices": [
      ["Decussating second-order spinothalamic axons in the anterior white commissure", "The anterior white commissure transmits decussating second-order spinothalamic tract fibers conveying pain and temperature sensation from the dorsal horn across the midline to the contralateral anterolateral column. Cavitation (syrinx) of the central spinal cord preferentially compresses and disrupts these crossing fibers across cervical and thoracic segments, producing a bilateral, cape-like loss of pain and temperature sensation while sparing the posteriorly positioned dorsal columns."],
      ["Primary sensory afferents in the posterolateral tract of Lissauer", "The tract of Lissauer carries primary pain and temperature afferents ascending or descending 1 to 2 spinal cord segments before synapsing in the substantia gelatinosa of the dorsal horn. Unilateral injury to Lissauer tract produces ipsilateral dermatomal sensory deficits spanning 1-2 levels rather than a widespread, bilateral cape-like suspended sensory dissociation."],
      ["Ascending heavily myelinated central processes in the fasciculus cuneatus", "The fasciculus cuneatus conveys fine touch, conscious proprioception, and vibratory sensation from the upper extremities. These fibers enter the dorsal column without crossing at the spinal cord level and ascend to the medulla. Sparing of light touch and vibration confirms preserved dorsal column function."],
      ["First-order unmyelinated pseudounipolar neuron cell bodies in the dorsal root ganglia", "Dorsal root ganglia house primary sensory cell bodies outside the central nervous system. Selective bilateral destruction of dorsal root ganglia would cause global radicular sensory loss (touch, pain, and proprioception) rather than the classic suspended dissociated sensory loss with preserved dorsal column modalities seen in syringomyelia."],
      ["Second-order projection neurons residing in the substantia gelatinosa", "Substantia gelatinosa (Rexed lamina II) neurons modulate pain transmission in the dorsal horn. While dorsal horn gray matter can be involved with massive syrinx expansion, the initial and quintessential deficit of suspended cape-like bilateral pain/temp loss arises from disruption of the decussating axons within the anterior white commissure crossing directly ventral to the central canal."]
    ],
    "shortestValidSolution": "Bilateral cape-like loss of pain and temperature with preserved dorsal column touch/vibration + central cord cavity (syrinx) -> damage to decussating spinothalamic fibers in anterior white commissure.",
    "necessaryInference": "Recognize that syringomyelia enlarges from the central canal outward, initially destroying the decussating second-order spinothalamic fibers traversing the anterior white commissure before encroaching on the dorsal columns or anterior horn motor neurons.",
    "strongestDistractor": "Second-order projection neurons residing in the substantia gelatinosa",
    "distractorExclusion": "Substantia gelatinosa lies in the dorsal horn; early central canal cavitation disrupts crossing fibers in the anterior white commissure rather than dorsal horn lamina II.",
    "citation": "Klekamp J. The Pathophysiology of Syringomyelia: An Overview. Neurosurg Focus. 2017;43(3):E2. PMID: 28859987."
  },
  {
    "code": "op-c-s1-0387",
    "exam": "Step 1",
    "subject": "Neuropathology",
    "system": "Nervous System",
    "topic": "Anterior Spinal Artery Syndrome",
    "subtopic": "Vascular Territory and Sparing of Posterior Columns",
    "provisionalDifficulty": 4,
    "stem": "A 67-year-old man undergoes repair of an infrarenal abdominal aortic aneurysm. Twelve hours postoperatively, he is noted to have complete flaccid paralysis of both lower extremities with absent deep tendon reflexes and acute urinary retention. Sensory examination reveals complete loss of pinprick and temperature sensation below the T10 dermatomal level bilaterally. However, vibratory sensation, proprioception, and light touch are completely intact in both lower extremities. Spinal cord MRI confirms ischemic infarction within a specific vascular territory. Which of the following arterial vessels was most likely compromised during the procedure?",
    "choices": [
      ["Artery of Adamkiewicz supplying the anterior spinal artery", "The artery of Adamkiewicz (arteria radicularis magna) arises typically from a left intercostal or lumbar artery between T9 and L12 and supplies the single anterior spinal artery in the lower two-thirds of the spinal cord. Compromise during aortic surgery leads to anterior spinal cord syndrome: bilateral loss of motor function (corticospinal tracts), autonomic bladder dysfunction, and bilateral loss of pain and temperature (spinothalamic tracts), with distinct preservation of dorsal column modalities (proprioception and vibration) supplied by paired posterior spinal arteries."],
      ["Paired posterior spinal arteries originating from the vertebral arteries", "Posterior spinal arteries supply the posterior third of the spinal cord, including the dorsal columns (fasciculus gracilis and cuneatus) and dorsal horns. Occlusion would cause loss of vibration, fine touch, and proprioception below the lesion with preserved motor strength and spinothalamic sensation."],
      ["Vertebral artery branches supplying the lateral corticospinal decussation", "The vertebral arteries give rise to the anterior spinal artery at the level of the upper medulla and cervicomedullary junction. Injury at this high level would produce quadriparesis and medullary syndromes rather than an isolated paraplegia with a sharp T10 sensory level."],
      ["Ascending cervical arteries originating from the thyrocervical trunk", "Ascending cervical arteries provide radicular collateral flow to the upper cervical spinal cord. They do not supply the lower thoracic or lumbar cord segments and are unaffected during infrarenal aortic surgery."],
      ["Superior gluteal branches providing retrograde collateral to the cauda equina", "The superior gluteal artery arises from the internal iliac artery and supplies the gluteal muscles and pelvic girdle. While severe pelvic ischemia can affect lumbosacral roots, it does not produce a discrete thoracic myelopathy with dissociated dorsal column sparing."]
    ],
    "shortestValidSolution": "Aortic surgery complication + sudden bilateral flaccid paraplegia + loss of pain/temperature + preserved vibration/proprioception -> Anterior spinal artery infarction via compromise of the artery of Adamkiewicz.",
    "necessaryInference": "Synthesize the selective sparing of dorsal columns (supplied by posterior spinal arteries) and destruction of anterior two-thirds of the cord (motor + spinothalamic) following aortic cross-clamping to identify occlusion of the artery of Adamkiewicz.",
    "strongestDistractor": "Paired posterior spinal arteries originating from the vertebral arteries",
    "distractorExclusion": "Posterior spinal arteries supply the dorsal columns, which are demonstrably intact on physical exam.",
    "citation": "Cheshire WP, et al. Spinal Cord Infarction: A Review of Clinical Features, Imaging, and Pathophysiology. Lancet Neurol. 2021;20(2):123-134. PMID: 33484650."
  },
  {
    "code": "op-c-s1-0388",
    "exam": "Step 1",
    "subject": "Neuroanatomy",
    "system": "Nervous System",
    "topic": "Cauda Equina vs Conus Medullaris Syndrome",
    "subtopic": "Lower Motor Neuron vs Upper Motor Neuron Localization",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old construction worker presents to the emergency department with severe, sharp, shooting pain radiating down his right leg into his foot after lifting a heavy steel beam. Over the next 24 hours, he develops weakness in his right foot and difficulty walking. Neurological examination reveals severe asymmetrical lower extremity weakness, with right ankle dorsiflexion graded 2/5 and plantarflexion graded 3/5, while the left lower extremity exhibits 5/5 strength throughout. The right Achilles tendon reflex is absent, while the left is 2+. He has asymmetric patchy hypesthesia over the right lateral leg and sole of the foot. Perianal sensation is mildly reduced on the right side. Bulbocavernosus reflex is intact, and he has not experienced urinary or fecal incontinence. Which of the following neuroanatomical locations is the primary site of lesion in this patient?",
    "choices": [
      ["Lumbosacral nerve roots within the spinal canal below the L1-L2 vertebral level", "Cauda equina syndrome results from compression of the collection of lumbosacral intradural nerve roots (L2 to S5) below the conus medullaris (which terminates at L1-L2). It is characterized by lower motor neuron signs (flaccid paresis, hyporeflexia/areflexia), severe asymmetrical radicular pain, asymmetric sensory loss, and late, gradual onset of bowel/bladder dysfunction."],
      ["Conus medullaris terminating at the lower border of the L1 vertebral body", "Conus medullaris syndrome involves direct injury to the sacral spinal cord segments (S1-S5). It typically manifests with sudden onset, bilateral symmetrical perianal saddle anesthesia, early and severe bowel/bladder and sexual dysfunction, and mixed upper and lower motor neuron signs with symmetric motor weakness."],
      ["Lumbosacral sympathetic trunk running anterolateral to the vertebral bodies", "The sympathetic chain carries postganglionic sympathetic fibers regulating vascular tone and sudomotor activity. Injury produces vasodilation, anhidrosis, and autonomic dysfunction, but does not cause somatic radicular pain, muscle weakness, or tendon reflex loss."],
      ["Posterior horn neurons within the substantia gelatinosa of the L4-S1 segments", "Isolated posterior horn lesions cause dermatomal sensory disturbances but do not cause motor weakness or absent deep tendon reflexes, which require interruption of the alpha motor neuron or peripheral reflex arc."],
      ["Lateral funiculus of the thoracic spinal cord above the lumbar enlargement", "A thoracic spinal cord lesion above the lumbar enlargement causes upper motor neuron signs in the lower extremities (spasticity, hyperreflexia, extensor plantar responses) and a sensory level across the trunk, rather than an asymmetrical radicular lower motor neuron syndrome."]
    ],
    "shortestValidSolution": "Asymmetrical radicular leg pain + asymmetric flaccid foot weakness + unilateral absent Achilles reflex + preserved bowel/bladder -> Cauda equina (lumbosacral nerve roots below conus).",
    "necessaryInference": "Differentiate cauda equina syndrome (pure lower motor neuron, asymmetrical, severe radicular pain, late bladder signs) from conus medullaris syndrome (symmetric, early bladder/bowel dysfunction, mixed UMN/LMN signs).",
    "strongestDistractor": "Conus medullaris terminating at the lower border of the L1 vertebral body",
    "distractorExclusion": "Conus medullaris lesions are bilateral, symmetric, cause early severe urinary/fecal incontinence, and lack the pronounced asymmetrical radiculopathy seen here.",
    "citation": "Rider LS, Marra EM. Cauda Equina and Conus Medullaris Syndromes. StatPearls. 2023. PMID: 30725885."
  },
  {
    "code": "op-c-s1-0389",
    "exam": "Step 1",
    "subject": "Immunology & Neurophysiology",
    "system": "Nervous System",
    "topic": "Myasthenia Gravis vs Lambert-Eaton Syndrome",
    "subtopic": "Postsynaptic ACh Receptor vs Presynaptic P/Q-Type Calcium Channel Autoantibodies",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man presents with progressive difficulty climbing stairs and rising from a seated position over the past 4 months. He notes that his leg weakness feels somewhat better after he walks around for a few minutes. He also complains of persistent dry mouth and erectile dysfunction. On physical examination, proximal lower extremity strength is 3/5 initially, but improves to 4+/5 after 15 seconds of sustained maximal voluntary contraction. Deep tendon reflexes at the patella and Achilles are 1+ bilaterally at rest, but become 2+ immediately following brief isometric quadriceps contraction. Sensation is intact. Chest radiography reveals a 3.5-cm hilar mass with prominent mediastinal adenopathy. Which of the following pathophysiological mechanisms is responsible for this patient's neuromuscular condition?",
    "choices": [
      ["Autoantibodies directed against presynaptic voltage-gated P/Q-type calcium channels", "Lambert-Eaton myasthenic syndrome (LEMS) is a paraneoplastic autoimmune channelopathy commonly associated with small cell lung carcinoma. Autoantibodies against presynaptic P/Q-type voltage-gated calcium channels prevent calcium influx upon membrane depolarization, impairing acetylcholine exocytosis. Repetitive activation or sustained contraction leads to transient presynaptic calcium accumulation, temporarily overcoming the blockade and producing characteristically post-exercise facilitation of strength and reflexes."],
      ["Complement-mediated destruction of postsynaptic nicotinic acetylcholine receptors", "Myasthenia gravis is characterized by autoantibodies against postsynaptic nicotinic acetylcholine receptors (AChR) on the motor endplate. It typically involves extraocular muscles (ptosis, diplopia) and bulbar muscles, worsens with repeated exertion (fatigability), lacks post-exercise facilitation, and is associated with thymoma rather than small cell lung cancer."],
      ["Clostridium botulinum enzymatic cleavage of SNARE synaptosomal-associated protein 25", "Botulinum neurotoxin cleaves SNARE complex proteins (such as SNAP-25) preventing acetylcholine release. It produces descending flaccid paralysis with early cranial nerve deficits (dilated unreactive pupils, dysphagia, ptosis) and acute gastrointestinal symptoms, without the chronic proximal progression or post-exercise facilitation seen in LEMS."],
      ["Antibody-dependent cell-mediated cytotoxicity against peripheral myelin protein zero", "Autoantibodies against myelin proteins (such as MPZ or PMP22) characterize demyelinating peripheral neuropathies (e.g., Charcot-Marie-Tooth or CIDP). They cause distal sensorimotor deficits with persistent areflexia and slowed nerve conduction velocities without post-exercise facilitation or small cell lung carcinoma."],
      ["Autoimmune blockade of presynaptic choline acetyltransferase enzymatic activity", "Choline acetyltransferase (ChAT) synthesizes acetylcholine from choline and acetyl-CoA within the presynaptic terminal cytoplasm. Congenital myasthenic syndromes can arise from genetic ChAT mutations, but adult-onset paraneoplastic neuromuscular junction failure with autonomic dysfunction and post-exercise facilitation is caused by P/Q-type calcium channel autoantibodies."]
    ],
    "shortestValidSolution": "Proximal weakness improving after exertion (post-exercise facilitation) + dry mouth/autonomic dysfunction + hilar mass (SCLC) -> Lambert-Eaton (presynaptic P/Q-type calcium channel antibodies).",
    "necessaryInference": "Contrast the post-exercise facilitation, diminished baseline reflexes that augment after contraction, autonomic symptoms, and small cell lung cancer association in LEMS with the fatigable weakness and thymoma association in Myasthenia Gravis.",
    "strongestDistractor": "Complement-mediated destruction of postsynaptic nicotinic acetylcholine receptors",
    "distractorExclusion": "Postsynaptic nicotinic AChR antibodies cause myasthenia gravis, which worsens with repetitive exertion and does not show post-exercise facilitation or autonomic features.",
    "citation": "Titulaer MJ, et al. Lambert-Eaton Myasthenic Syndrome: From Bench to Bedside. Autoimmunity. 2011;44(4):302-310. PMID: 21323450."
  },
  {
    "code": "op-c-s1-0390",
    "exam": "Step 1",
    "subject": "Microbiology & Neurobiology",
    "system": "Nervous System",
    "topic": "Botulinum Toxin Mechanism of Action",
    "subtopic": "Enzymatic Cleavage of SNARE Proteins at Cholinergic Synapses",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old woman presents to the emergency department with double vision, drooping eyelids, and difficulty swallowing that began 18 hours after consuming home-canned asparagus. Physical examination demonstrates bilateral ptosis, fixed and dilated pupils poorly reactive to light, impaired extraocular motility, symmetric facial weakness, and severe xerostomia. Over the subsequent 6 hours, she develops progressive flaccid quadriparesis and shallow tachypneic breathing with a vital capacity of 12 mL/kg. Deep tendon reflexes are universally diminished. Sensory examination is completely normal. Which of the following molecular events directly causes the paralysis observed in this patient?",
    "choices": [
      ["Zinc-dependent endopeptidase cleavage of SNARE vesicle fusion proteins", "Clostridium botulinum produces a potent heat-labile neurotoxin that functions as a zinc metalloprotease. After endocytosis into cholinergic nerve terminals, the toxin's light chain cleaves specific SNARE (soluble NSF attachment protein receptor) proteins—including synaptobrevin, syntaxin, and SNAP-25. This prevents acetylcholine-containing synaptic vesicles from docking and fusing with the presynaptic plasma membrane, blocking acetylcholine release at both the neuromuscular junction (causing flaccid descending paralysis) and autonomic parasympathetic synapses (causing mydriasis, dry mouth, and urinary retention)."],
      ["Retrograde intra-axonal transport followed by cleavage of synaptobrevin in Renshaw cells", "This describes the mechanism of tetanospasmin (Clostridium tetani toxin). Tetanospasmin undergoes retrograde axonal transport to spinal cord inhibitory interneurons (Renshaw cells), where it cleaves synaptobrevin to block glycine and GABA exocytosis, resulting in spastic paralysis and tetany rather than flaccid paralysis."],
      ["Irreversible inhibition of acetylcholinesterase in the synaptic cleft", "Organophosphates irreversibly phosphorylate and inhibit acetylcholinesterase, leading to acetylcholine accumulation in the synaptic cleft. This causes cholinergic crisis with excessive secretions (salivation, lacrimation, urination, defecation, bronchospasm) and miosis (pinpoint pupils), directly contrary to the dry mouth and dilated pupils seen in botulism."],
      ["Selective competitive blockade of postsynaptic muscarinic M3 receptors", "Muscarinic antagonists (such as atropine) block postsynaptic muscarinic receptors, causing mydriasis, dry mouth, and tachycardia. However, atropine does not block nicotinic receptors at the neuromuscular junction and therefore cannot cause skeletal muscle weakness, flaccid paralysis, or respiratory failure."],
      ["Complement activation causing membrane attack complex lysis of motor endplates", "Membrane attack complex (MAC) formation at the postsynaptic motor endplate is observed in severe myasthenia gravis. It is an autoimmune process that does not involve fixed dilated pupils or an acute toxin exposure from home-canned foods."]
    ],
    "shortestValidSolution": "Home-canned food + descending flaccid paralysis + fixed dilated pupils + dry mouth -> Botulism (cleavage of SNARE proteins preventing ACh vesicle exocytosis).",
    "necessaryInference": "Identify Clostridium botulinum toxin from the clinical constellation (home-canned vegetables, descending paralysis, cranial neuropathies, autonomic parasympathetic blockade) and recall its molecular target (SNARE protein cleavage preventing presynaptic ACh exocytosis).",
    "strongestDistractor": "Retrograde intra-axonal transport followed by cleavage of synaptobrevin in Renshaw cells",
    "distractorExclusion": "Retrograde transport to Renshaw cells to block glycine/GABA is the mechanism of tetanospasmin, which produces muscle rigidity, trismus, and spasms, not flaccid paralysis.",
    "citation": "Pirazzini M, et al. Botulinum Neurotoxins: Biology, Pharmacology, and Toxicology. Pharmacol Rev. 2017;69(2):200-235. PMID: 28356439."
  },
  {
    "code": "op-c-s1-0391",
    "exam": "Step 1",
    "subject": "Microbiology & Neurobiology",
    "system": "Nervous System",
    "topic": "Tetanus Toxin Mechanism of Action",
    "subtopic": "Disinhibition of Lower Motor Neurons via Glycine and GABA Blockade",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old immigrant from rural Southeast Asia presents to the hospital with a 2-day history of neck stiffness and progressive difficulty opening his jaw. He reports stepping on a rusted nail in his garden 10 days ago, which he washed with tap water without seeking medical attention. On physical examination, he appears anxious and diaphoretic. Vital signs show blood pressure 168/98 mm Hg, heart rate 112/min, and temperature 38.1°C (100.6°F). There is pronounced rigidity of the masseter muscles, causing severe restriction of jaw opening. When the posterior pharyngeal wall is gently touched with a tongue blade, he experiences involuntary reflex spasm of the masseters without gagging. Any auditory or tactile stimulus triggers severe, painful generalized muscle spasms with arching of his back. Which of the following is the primary cellular mechanism of the toxin causing these symptoms?",
    "choices": [
      ["Blockade of glycine and GABA exocytosis from spinal inhibitory Renshaw interneurons", "Clostridium tetani produces tetanospasmin, an AB-toxin that enters peripheral motor neurons and undergoes retrograde intra-axonal transport to the spinal cord. It traverses the synaptic cleft to enter inhibitory interneurons (Renshaw cells), where its light chain cleaves synaptobrevin (VAMP-2), a SNARE protein essential for synaptic vesicle exocytosis. Cleavage prevents the release of the inhibitory neurotransmitters glycine and gamma-aminobutyric acid (GABA), disinhibiting alpha motor neurons and causing uncontrolled muscle contractions, trismus, risus sardonicus, and opisthotonos."],
      ["Irreversible enzymatic cleavage of SNAP-25 at peripheral neuromuscular junctions", "Botulinum neurotoxin types A and E cleave SNAP-25 at peripheral cholinergic motor endings, inhibiting acetylcholine exocytosis. This leads to flaccid paralysis rather than the violent skeletal muscle rigidity and spasms characteristic of tetanus."],
      ["Constitutive ADP-ribosylation of the inhibitory alpha subunit of adenylyl cyclase", "Pertussis toxin catalyzes ADP-ribosylation of the Gi alpha subunit, locking it in an inactive state and elevating intracellular cAMP. This modulates immune cell signaling and respiratory ciliary function, but does not cause tetanic muscle spasms or lockjaw."],
      ["Direct agonist activation of postsynaptic nicotinic acetylcholine receptor ion channels", "Nicotinic agonists (such as nicotine or succinylcholine) depolarize the postsynaptic endplate. High-dose continuous exposure causes depolarization blockade resulting in flaccid neuromuscular paralysis, not the toxin-mediated central disinhibition seen in tetanus."],
      ["Stimulation of autoantibodies targeting the voltage-gated potassium channels in peripheral nerves", "Antibodies against voltage-gated potassium channels (e.g., CASPR2 or LGI1) cause neuromyotonia (Isaacs syndrome) or autoimmune encephalitis with myokymia and fasciculations, but do not produce acute clostridial wound tetanus with classic trismus and opisthotonos."]
    ],
    "shortestValidSolution": "Puncture wound + trismus (lockjaw) + risus sardonicus + spasms induced by stimuli -> Tetanus (retrograde axonal transport; cleavage of synaptobrevin blocking glycine and GABA from Renshaw cells).",
    "necessaryInference": "Trace the retrograde transport of tetanospasmin from peripheral wound terminals to central Renshaw cells and connect the loss of glycine/GABA inhibitory tone to generalized motor disinhibition.",
    "strongestDistractor": "Irreversible enzymatic cleavage of SNAP-25 at peripheral neuromuscular junctions",
    "distractorExclusion": "SNAP-25 cleavage at peripheral junctions is the mechanism of botulinum toxin, producing flaccid weakness rather than severe spastic contractions and rigidity.",
    "citation": "Farrar JJ, et al. Tetanus. J Neurol Neurosurg Psychiatry. 2000;69(3):292-301. PMID: 10945801."
  },
  {
    "code": "op-c-s1-0392",
    "exam": "Step 1",
    "subject": "Immunology & Neuropathology",
    "system": "Nervous System",
    "topic": "Guillain-Barré Syndrome",
    "subtopic": "Endoneurial Inflammatory Infiltrate and Albuminocytologic Dissociation",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old man presents to the emergency department with a 3-day history of tingling in both feet followed by ascending weakness. He now requires assistance to stand from a chair and walk. Two weeks ago, he experienced an acute episode of fever, abdominal cramps, and bloody diarrhea that resolved spontaneously without antibiotics. Physical examination demonstrates symmetric bilateral lower extremity weakness (3/5 in hip flexors, knee extensors, and ankle dorsiflexors) and mild upper extremity weakness (4/5 in grip strength). Deep tendon reflexes are completely absent at the patella and Achilles tendons bilaterally and 1+ at the biceps. Sensation to vibration is slightly diminished in the toes, while pinprick sensation is preserved. Lumbar puncture is performed; cerebrospinal fluid analysis reveals: - Opening pressure: 140 mm H2O (normal: 70–180 mm H2O) - White blood cell count: 3/mm3 (normal: 0–5/mm3) - Protein: 145 mg/dL (normal: 15–45 mg/dL) - Glucose: 62 mg/dL (normal: 40–70 mg/dL). Which of the following histopathological features is most characteristic of the peripheral nervous system lesion in this patient?",
    "choices": [
      ["Segmental demyelination with endoneurial mononuclear inflammatory infiltrates", "The patient has Guillain-Barré syndrome (acute inflammatory demyelinating polyradiculoneuropathy, AIDP) triggered by Campylobacter jejuni enteritis. The pathogenesis involves molecular mimicry between lipooligosaccharides of C. jejuni and host gangliosides (e.g., GM1, GD1a). Histologically, AIDP is characterized by segmental demyelination of peripheral nerves and spinal nerve roots associated with an endoneurial mononuclear inflammatory infiltrate (T cells and macrophages) with characteristic cerebrospinal fluid albuminocytologic dissociation (elevated protein with normal cell count)."],
      ["Concentric laminated Schwann cell proliferation forming 'onion bulbs'", "Onion bulb formations represent chronic cycles of demyelination and remyelination seen in hereditary neuropathies such as Charcot-Marie-Tooth disease type 1A or chronic inflammatory demyelinating polyneuropathy (CIDP), rather than acute post-infectious Guillain-Barré syndrome."],
      ["Focal necrotizing vasculitis with fibrinoid necrosis of the epineurial vasa nervorum", "Fibrinoid necrosis and transmural inflammation of the vasa nervorum are the hallmark of mononeuritis multiplex secondary to systemic vasculitis (e.g., polyarteritis nodosa or granulomatosis with polyangiitis), presenting with asymmetric, multifocal peripheral nerve infarctions."],
      ["Loss of anterior horn alpha motor neurons with reactive astrocytic gliosis", "Anterior horn alpha motor neuron degeneration is characteristic of amyotrophic lateral sclerosis (ALS) or poliomyelitis. ALS presents with combined upper and lower motor neuron signs without sensory symptoms, and poliomyelitis presents with asymmetric flaccid paralysis and CSF pleocytosis."],
      ["Granulomatous endoneurial inflammation with acid-fast lepromatous bacilli", "Endoneurial granulomas containing acid-fast bacilli represent Mycobacterium leprae infection (leprosy), presenting with hypoesthetic skin patches and asymmetric peripheral nerve enlargement (e.g., great auricular or ulnar nerves)."]
    ],
    "shortestValidSolution": "Bloody diarrhea (Campylobacter) -> ascending symmetric weakness + areflexia + CSF albuminocytologic dissociation -> Guillain-Barré syndrome (segmental demyelination + endoneurial mononuclear infiltrate).",
    "necessaryInference": "Link preceding Campylobacter enteritis to molecular mimicry causing AIDP; recognize albuminocytologic dissociation on CSF and identify the acute histopathologic hallmark (endoneurial inflammatory infiltrate with segmental demyelination).",
    "strongestDistractor": "Concentric laminated Schwann cell proliferation forming 'onion bulbs'",
    "distractorExclusion": "Onion bulbs represent chronic, repetitive cycles of demyelination and remyelination over years in Charcot-Marie-Tooth or CIDP, not acute Guillain-Barré syndrome.",
    "citation": "Willison HJ, Jacobs BC, van Doorn PA. Guillain-Barré Syndrome. Lancet. 2016;388(10045):717-727. PMID: 26948435."
  },
  {
    "code": "op-c-s1-0393",
    "exam": "Step 1",
    "subject": "Medical Genetics & Pathology",
    "system": "Nervous System",
    "topic": "Charcot-Marie-Tooth Disease Type 1A",
    "subtopic": "PMP22 Duplication and Onion Bulb Formation",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old boy is brought to the pediatric neurology clinic by his parents due to frequent ankle sprains and difficulty running. His father notes that he has had a similar gait since adolescence and wears orthotic shoe inserts. On physical examination, the patient has prominent high-arched feet (pes cavus) bilaterally and hammer toes. There is noticeable bilateral wasting of the lower third of the legs, giving an inverted champagne bottle appearance. Motor examination reveals bilateral weakness in ankle dorsiflexion and eversion (3/5) with preserved proximal leg strength. Deep tendon reflexes are absent at the Achilles tendons bilaterally and 1+ at the patellae. Sensation to vibration and pinprick is moderately decreased in a stocking distribution below the mid-shin. Sural nerve biopsy demonstrates repetitive concentric laminations of Schwann cell cytoplasm surrounding thinly myelinated axons ('onion bulb' appearance). Which of the following genetic alterations is the most frequent cause of this condition?",
    "choices": [
      ["Submicroscopic duplication of the peripheral myelin protein 22 gene on chromosome 17p11.2", "Charcot-Marie-Tooth disease type 1A (CMT1A) is an autosomal dominant hereditary motor and sensory neuropathy most commonly caused by a 1.4-megabase duplication on chromosome 17p11.2 containing the PMP22 (peripheral myelin protein 22) gene. Overexpression of PMP22 disrupts myelin compaction and Schwann cell differentiation, leading to chronic cycles of demyelination and remyelination that histologically produce concentric Schwann cell cytoplasmic whorls ('onion bulbs'), distal lower extremity atrophy (stork leg / inverted champagne bottle), pes cavus, and sensory loss."],
      ["Trinucleotide GAA repeat expansion in the first intron of the frataxin gene", "GAA trinucleotide repeat expansion in the FXN gene on chromosome 9q causes Friedreich ataxia. It causes mitochondrial iron overload, spinocerebellar ataxia, hypertrophic cardiomyopathy, scoliosis, and diabetes mellitus without the classic onion bulb peripheral nerve pathology of CMT1A."],
      ["Inactivating point mutations in the myelin protein zero gene on chromosome 1q22", "Mutations in MPZ cause CMT1B. While clinically similar to CMT1A, CMT1B accounts for fewer than 10% of demyelinating CMT cases, whereas the 17p11.2 PMP22 duplication accounts for approximately 70% to 80% of all CMT1 cases."],
      ["CAG repeat expansion in the androgen receptor gene on chromosome Xq12", "CAG repeat expansion in the androgen receptor gene causes spinal and bulbar muscular atrophy (Kennedy disease), an X-linked lower motor neuron disorder with gynecomastia, testicular atrophy, and bulbar weakness, not hereditary motor sensory neuropathy."],
      ["Heterozygous deletion of the survival motor neuron 1 gene on chromosome 5q13", "Biallelic deletion/mutation of SMN1 causes spinal muscular atrophy (SMA), which is a motor neuron disorder involving destruction of anterior horn cells in infants and children, presenting with flaccid weakness without sensory loss or pes cavus."]
    ],
    "shortestValidSolution": "Pes cavus + hammer toes + inverted champagne bottle calves + onion bulb nerve biopsy -> Charcot-Marie-Tooth Type 1A (PMP22 duplication on 17p11.2).",
    "necessaryInference": "Identify CMT1A from the clinical triad of pes cavus, distal calf wasting, and onion bulb biopsy, and identify PMP22 duplication as the predominant genetic etiology.",
    "strongestDistractor": "Inactivating point mutations in the myelin protein zero gene on chromosome 1q22",
    "distractorExclusion": "MPZ mutations cause CMT1B, a far less common variant; PMP22 duplication is the classic and most frequent cause (>70%) tested on USMLE Step 1.",
    "citation": "Pareyson D, Marchesi C. Diagnosis, Natural History, and Management of Charcot-Marie-Tooth Disease. Lancet Neurol. 2009;8(7):654-667. PMID: 19539237."
  },
  {
    "code": "op-c-s1-0394",
    "exam": "Step 1",
    "subject": "Neuroanatomy",
    "system": "Nervous System",
    "topic": "Horner Syndrome Anatomical Localization",
    "subtopic": "First-Order, Second-Order, and Third-Order Oculosympathetic Pathways",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man presents with progressive hoarseness, left shoulder pain radiating down the medial aspect of his arm, and a droopy left eyelid over the past 6 weeks. He has a 40-pack-year smoking history. Physical examination reveals mild left-sided ptosis, pupillary asymmetry that is more pronounced in dim light (left pupil 2.5 mm, right pupil 5.0 mm), and anhidrosis involving the left side of his face and forehead. Neurological examination also reveals weakness of left hand intrinsic muscles and hypesthesia along the medial forearm (C8-T1 distribution). Instillation of topical apraclonidine 0.5% eyedrops results in dilation of the left pupil and reversal of the ptosis, while the right pupil remains unchanged. Which of the following neuroanatomical structures is directly infiltrated by the underlying lesion in this patient?",
    "choices": [
      ["Preganglionic sympathetic fibers arising from the ciliospinal center of Budge within the paravertebral sympathetic trunk", "The patient has a Pancoast tumor (superior pulmonary sulcus carcinoma) infiltrating the cervical sympathetic chain and inferior cervical/stellate ganglion, producing Horner syndrome (ptosis, miosis, anhidrosis) and brachial plexopathy (C8-T1 lower trunk involvement causing hand weakness and medial arm numbness). The sympathetic pathway to the eye involves: 1st order from hypothalamus to ciliospinal center of Budge (C8-T2); 2nd order (preganglionic) traversing through the apical pleura in the paravertebral sympathetic trunk to the superior cervical ganglion; and 3rd order (postganglionic) traveling along the carotid arteries. Apical lung tumors specifically compress the 2nd order preganglionic fibers in the sympathetic chain."],
      ["Postganglionic sympathetic fibers traveling along the internal carotid arterial plexus", "Third-order postganglionic sympathetic fibers travel with the internal carotid artery to the orbit. Lesions here (e.g., internal carotid artery dissection) cause ptosis and miosis, but cause either no facial anhidrosis or anhidrosis limited strictly to a small patch on the medial forehead, because fibers supplying facial sweat glands branch off with the external carotid artery."],
      ["First-order central sympathetic neurons descending through the posterolateral brainstem", "First-order central sympathetic fibers originate in the posterolateral hypothalamus and descend through the lateral brainstem to C8-T2. Lesions here (such as lateral medullary infarction / Wallenberg syndrome) cause central Horner syndrome accompanied by brainstem signs (vertigo, ataxia, crossed analgesia) rather than shoulder pain and hand weakness."],
      ["Parasympathetic preganglionic fibers originating from the Edinger-Westphal nucleus", "The Edinger-Westphal nucleus gives rise to preganglionic parasympathetic fibers that travel with CN III to the ciliary ganglion, responsible for pupillary constriction (miosis) and accommodation. Disruption causes a dilated, unreactive pupil (mydriasis) and impaired accommodation, the opposite of Horner syndrome."],
      ["Somatic motor fibers traveling within the superior division of the oculomotor nerve", "The superior division of CN III innervates the levator palpebrae superioris and superior rectus. Lesions cause severe ptosis and impaired upward gaze, but do not produce miosis or facial anhidrosis."]
    ],
    "shortestValidSolution": "Apical lung mass (Pancoast) + Horner syndrome (ptosis, miosis, hemifacial anhidrosis) + C8-T1 hand weakness -> Second-order preganglionic sympathetic chain compression.",
    "necessaryInference": "Differentiate the 3 orders of the oculosympathetic pathway: 2nd order preganglionic fibers exit at C8-T2, ascend through the lung apex via the paravertebral sympathetic trunk to the superior cervical ganglion, and cause complete hemifacial anhidrosis when disrupted by a Pancoast tumor.",
    "strongestDistractor": "Postganglionic sympathetic fibers traveling along the internal carotid arterial plexus",
    "distractorExclusion": "Postganglionic internal carotid plexus lesions spare facial sweating because facial sudomotor fibers travel along the external carotid artery.",
    "citation": "Martin TJ. Horner Syndrome: A Clinical Review. ACS Chem Neurosci. 2018;9(2):177-186. PMID: 29286620."
  },
  {
    "code": "op-c-s1-0395",
    "exam": "Step 1",
    "subject": "Neuroanatomy & Infectious Disease",
    "system": "Nervous System",
    "topic": "Cavernous Sinus Thrombosis",
    "subtopic": "Neurovascular Relationships and Vulnerability of Abducens Nerve",
    "provisionalDifficulty": 4,
    "stem": "A 23-year-old man presents to the emergency department with severe retro-orbital headache, high-grade fever, and double vision for 2 days. He reports squeezing a large, painful acne pustule on his nasal bridge 5 days ago. Physical examination reveals a toxic-appearing febrile young man with marked left periorbital edema, chemosis, and proptosis. Visual acuity is intact. Cranial nerve examination reveals complete inability to abduct the left eye on horizontal gaze. Pupils are equal and react sluggishly to light. There is decreased sensation to pinprick over the left forehead, brow, and cheek. Contrast-enhanced MRI of the brain confirms a filling defect within the left cavernous sinus. Which of the following cranial nerves traverses the cavernous sinus lumen directly adjacent to the internal carotid artery, making it particularly vulnerable to early isolated injury?",
    "choices": [
      ["Abducens nerve (cranial nerve VI)", "The cavernous sinus contains the internal carotid artery and cranial nerve VI (abducens) passing directly through its venous lumen, surrounded by trabeculae. In contrast, cranial nerves III (oculomotor), IV (trochlear), V1 (ophthalmic), and V2 (maxillary) run embedded within the lateral dural wall of the sinus. Because CN VI runs freely through the center of the sinus lumen adjacent to the carotid artery, it is classically the first cranial nerve compressed or damaged in septic cavernous sinus thrombosis, causing an early isolated lateral gaze palsy (inability to abduct the ipsilateral eye)."],
      ["Oculomotor nerve (cranial nerve III)", "CN III courses embedded within the lateral wall of the cavernous sinus, superior to CN IV and V1. While CN III involvement is common in advanced cavernous sinus thrombosis (causing ptosis and ophthalmoplegia), it is protected within the dural wall and not located centrally within the lumen."],
      ["Trochlear nerve (cranial nerve IV)", "CN IV courses within the lateral dural wall between CN III and V1. Damage causes vertical diplopia and impaired depression in adduction, but CN IV is not situated within the sinus lumen."],
      ["Ophthalmic division of the trigeminal nerve (cranial nerve V1)", "CN V1 passes within the inferior portion of the lateral wall of the cavernous sinus before entering the superior orbital fissure. Compression produces forehead/brow sensory loss, but V1 is not located free in the venous lumen."],
      ["Mandibular division of the trigeminal nerve (cranial nerve V3)", "CN V3 exits the middle cranial fossa directly through the foramen ovale without ever passing through or within the walls of the cavernous sinus. It is completely unaffected in cavernous sinus pathology."]
    ],
    "shortestValidSolution": "Facial pimple squeezing -> retro-orbital headache, chemosis, proptosis + cavernous sinus thrombosis -> CN VI runs freely in the venous lumen adjacent to the internal carotid artery.",
    "necessaryInference": "Distinguish the contents of the lateral dural wall (CN III, IV, V1, V2) from the structures floating directly within the cavernous sinus venous lumen (internal carotid artery and CN VI), explaining why lateral gaze palsy is typically the earliest focal deficit.",
    "strongestDistractor": "Oculomotor nerve (cranial nerve III)",
    "distractorExclusion": "CN III is embedded in the lateral dural wall, whereas CN VI is uniquely situated directly within the venous lumen adjacent to the internal carotid artery.",
    "citation": "Plewa MC, et al. Cavernous Sinus Thrombosis. StatPearls. 2023. PMID: 28846357."
  }
]

print(f"Loaded {len(items_b16_p3)} items for Batch 16 part 3.")
