"""
Mega Data Part R: Domains 108 to 113 (Urology, Neuro-Ophth, Cranial Nerves, Antimicrobial Stewardship, Parasitology, Mycology)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_R = [
    # Domain 108: Urologic Emergencies & Testicular Pathology
    {
        "id": "domain_108_urologic_emergencies",
        "entity": "Testicular torsion, Fournier gangrene, and testicular germ cell tumors",
        "hallmark": "sudden severe unilateral scrotal pain, high-riding horizontal testis, absent cremasteric reflex, negative Prehn sign, or perineal necrotizing fasciitis with subcutaneous crepitus, or painless firm testicular mass with elevated beta-hCG/AFP",
        "system": "Renal",
        "ref_key": "urology",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Bell-clapper deformity and testicular ischemia: tunica vaginalis attachment",
                "High insertion of the tunica vaginalis allowing the testis to twist freely on its spermatic cord, leading to venous occlusion followed by arterial thrombosis and hemorrhagic infarction.",
                "The bell-clapper anomaly is a bilateral congenital defect where the testis lacks normal posterior fixation to the scrotal wall; torsion within the tunica vaginalis leads to rapid testicular necrosis."
            ),
            "Step 2 CK": (
                "Testicular torsion golden period and emergency surgical exploration",
                "Immediate surgical exploration with bilateral orchiopexy within 6 hours of symptom onset without delaying for Doppler ultrasonography when clinical suspicion is high.",
                "Testicular salvage rates exceed 90% if detorsion is performed within 6 hours, dropping precipitously to < 10% after 24 hours; fixing the contralateral testis prevents asynchronous torsion."
            ),
            "Step 3": (
                "Serum tumor markers and radical inguinal orchiectomy in testicular cancer",
                "Radical inguinal orchiectomy without transscrotal biopsy, combined with baseline measurement of serum alpha-fetoprotein (AFP), beta-hCG, and lactate dehydrogenase (LDH).",
                "Scrotal violation during biopsy disrupts normal lymphatic drainage (retroperitoneal nodes) and induces aberrant inguinal lymphatic metastasis; radical orchiectomy via the groin is mandatory."
            ),
            "PLAB / UKMLA": (
                "Fournier gangrene emergency identification and radical surgical debridement",
                "Urgent multidisciplinary resuscitation, broad-spectrum intravenous antibiotic coverage (piperacillin-tazobactam plus vancomycin plus clindamycin), and immediate extensive surgical debridement.",
                "Fournier gangrene is a life-threatening synergistic necrotizing fasciitis of the perineum; prompt surgical excision of all non-viable tissue is the single most critical determinant of survival."
            ),
            "AMC": (
                "Priapism differentiation: ischemic (low-flow) vs non-ischemic (high-flow)",
                "Aspiration of intracavernosal blood demonstrating dark, acidotic, hypoxemic blood (pH < 7.25, pO2 < 30 mm Hg) confirming ischemic priapism requiring intracavernosal phenylephrine.",
                "Ischemic priapism is a compartment syndrome of the corpora cavernosa; intracavernosal injection of alpha-1 adrenergic agonists (phenylephrine) induces smooth muscle contraction and detumescence."
            ),
            "MCCQE": (
                "Seminoma vs non-seminomatous germ cell tumor (NSGCT) staging and markers",
                "Pure seminomas do not produce AFP; any elevation in serum alpha-fetoprotein indicates the presence of non-seminomatous elements (yolk sac component) altering treatment strategy.",
                "Seminomas are exquisitely radiosensitive and chemosensitive; non-seminomas (embryonal, choriocarcinoma, yolk sac, teratoma) carry different metastatic patterns and require systemic chemotherapy."
            ),
            "FCPS": (
                "Retroperitoneal lymph node dissection (RPLND) in non-seminomatous tumors",
                "Performing nerve-sparing retroperitoneal lymphadenectomy for post-chemotherapy residual retroperitoneal masses > 1 cm in non-seminomatous germ cell tumors.",
                "RPLND resects residual teratoma or viable cancer in 40-50% of residual masses; preserving postganglionic sympathetic fibers of the hypogastric plexus preserves antegrade ejaculation."
            ),
            "NLE": (
                "Cremasteric reflex assessment and differentiation of torsion from epididymo-orchitis",
                "Presence of the normal cremasteric reflex (ipsilateral testicular elevation upon stroking the inner thigh) and positive Prehn sign in epididymitis versus absent reflex in torsion.",
                "An intact cremasteric reflex makes acute testicular torsion highly unlikely; epididymitis is associated with pyuria, positive Prehn sign (pain relief with elevation), and increased Doppler flow."
            ),
            "NEET PG": (
                "Schiller-Duval bodies and Reinke crystals in gonadal histopathology",
                "Glomeruloid perivascular Schiller-Duval bodies in yolk sac tumors versus rod-shaped cytoplasmic Reinke crystalloids in Leydig cell sex cord-stromal tumors.",
                "Yolk sac tumors produce AFP and exhibit pathognomonic Schiller-Duval bodies; Leydig cell tumors secrete androgens or estrogens, causing precocious puberty in boys or gynecomastia in adults."
            ),
            "MRCP": (
                "Long-term cardiovascular and metabolic toxicity in testicular cancer survivors",
                "Screening for accelerated cardiovascular disease, metabolic syndrome, and peripheral neuropathy following cisplatin-based chemotherapy (BEP: bleomycin, etoposide, cisplatin).",
                "Cisplatin-based chemotherapy cures > 90% of germ cell tumors but induces persistent endothelial dysfunction, vascular calcification, and twofold higher lifetime risk of myocardial infarction."
            ),
            "MRCEM": (
                "Manual detorsion technique ('open book') for testicular torsion in the ED",
                "External manual rotation of the affected testis from medial to lateral (similar to opening a book) by 180 to 360 degrees while emergency operating theater is prepared.",
                "Because testes usually twist inwards (medially), manual rotation outward from the midline often relieves ischemia transiently; surgical exploration and fixation remain strictly mandatory."
            ),
            "SMLE": (
                "Varicocele pathophysiology, infertility risk, and retroperitoneal tumor signs",
                "Dilation of the pampiniform venous plexus (bag of worms); an isolated right-sided varicocele or one that does not decompress in the supine position mandates renal CT for retroperitoneal mass.",
                "Left testicular vein drains at a right angle into the left renal vein, causing higher hydrostatic pressure; an isolated right-sided varicocele suggests IVC or renal mass obstruction."
            ),
            "HAAD / DHA": (
                "Sperm cryopreservation counseling prior to gonadotoxic oncological therapy",
                "Offering semen analysis and cryopreservation to all pubertal and adult males diagnosed with testicular cancer prior to radical orchiectomy or chemotherapy.",
                "Chemotherapy (bleomycin, etoposide, cisplatin) and retroperitoneal surgery risk permanent azoospermia or ejaculatory dysfunction; pre-treatment banking protects future reproductive options."
            ),
            "UHS MBBS": (
                "Scrotal wall anatomical layers from superficial to deep and spermatic cord contents",
                "Skin, Dartos muscle, External spermatic fascia, Cremasteric muscle and fascia, Internal spermatic fascia, and Tunica vaginalis (parietal and visceral layers).",
                "Mnemonic 'Some Damn Englishmen Called It Testis': the layers correspond to anterior abdominal wall equivalents; the spermatic cord carries the vas deferens, testicular artery, and pampiniform plexus."
            )
        }
    },

    # Domain 109: Neuro-Ophthalmology & Pupil Abnormalities
    {
        "id": "domain_109_neuro_ophthalmology",
        "entity": "Pupillary abnormalities, Horner syndrome, and third cranial nerve palsy",
        "hallmark": "anisocoria, unilateral ptosis with miosis and anhidrosis (Horner syndrome), or acute pupil-involving third nerve palsy with 'down and out' globe displacement and severe headache indicating posterior communicating artery aneurysm",
        "system": "Nervous System",
        "ref_key": "neuro",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Neurology",
            "FCPS": "Neurology",
            "UHS MBBS": "Anatomy",
            "other": "Neurology"
        },
        "concepts": {
            "Step 1": (
                "Oculosympathetic three-neuron pathway anatomy and pharmacological localization",
                "First-order neuron from posterolateral hypothalamus to ciliospinal center of Budge (C8-T2), second-order neuron traversing lung apex, third-order neuron along internal carotid to pupillodilator.",
                "Topical cocaine or apraclonidine confirms Horner syndrome; topical hydroxyamphetamine differentiates first/second-order preganglionic lesions from third-order postganglionic carotid lesions."
            ),
            "Step 2 CK": (
                "Pupil-involving vs pupil-sparing third cranial nerve palsy emergency imaging",
                "Immediate emergency CT angiography or catheter digital subtraction angiography for acute pupil-involving third nerve palsy to rule out a posterior communicating artery aneurysm.",
                "Parasympathetic pupilloconstrictor fibers travel superficially on the outer dorsomedial oculomotor nerve, making them vulnerable to extrinsic aneurysm compression before microvascular ischemia."
            ),
            "Step 3": (
                "Optic Neuritis management in suspected Multiple Sclerosis (ONTT protocol)",
                "Intravenous high-dose methylprednisolone (1 g daily for 3 days) followed by oral prednisone taper and brain MRI with gadolinium to assess demyelinating plaque burden.",
                "The Optic Neuritis Treatment Trial proved that oral prednisone alone increases the recurrence rate of optic neuritis; IV steroids accelerate visual recovery and MRI guides disease-modifying therapy."
            ),
            "PLAB / UKMLA": (
                "Pancoast tumor (superior sulcus tumor) presenting as unilateral Horner syndrome",
                "Non-small cell bronchogenic carcinoma at the lung apex invading the inferior cervical and first thoracic sympathetic ganglia (stellate ganglion), requiring urgent chest radiography.",
                "Pancoast tumors produce Horner syndrome (ptosis, miosis, anhidrosis) combined with severe shoulder and arm pain along the C8-T1 dermatome (ulnar nerve distribution) and muscle wasting."
            ),
            "AMC": (
                "Idiopathic Intracranial Hypertension (Pseudotumor cerebri) diagnosis and management",
                "Bilateral papilledema, normal neuroimaging (empty sella on MRI), elevated lumbar puncture opening pressure (> 25 cm H2O), treated with weight loss and oral acetazolamide.",
                "Common in young obese females; presenting symptoms include pulsatile tinnitus, transient visual obscurations, and lateral rectus (CN VI) palsy; acetazolamide prevents permanent optic atrophy."
            ),
            "MCCQE": (
                "Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil) examination",
                "Swinging flashlight test demonstrating paradoxical bilateral pupillary dilation when light is moved from the healthy eye to the eye with optic nerve dysfunction.",
                "RAPD indicates asymmetric anterior optic nerve pathology (optic neuritis, ischemic optic neuropathy, retinal detachment); both pupils constrict normally when light hits the intact contralateral eye."
            ),
            "FCPS": (
                "Carotid artery dissection presenting as painful partial Horner syndrome",
                "Sudden ipsilateral neck pain, headache, and Horner syndrome with preserved facial sweating (anhidrosis absent because sympathetic fibers to facial sweat glands travel along external carotid).",
                "Dissection of the internal carotid artery spares the external carotid sympathetic fibers, producing a partial Horner syndrome (ptosis and miosis only); urgent CT angiography is diagnostic."
            ),
            "NLE": (
                "Anisocoria examination: physiological anisocoria vs pathological dilation/constriction",
                "Determining whether the pupil difference is greater in the dark (sympathetic defect, Horner syndrome) or greater in the light (parasympathetic defect, CN III palsy or tonic pupil).",
                "If anisocoria increases in darkness, the smaller pupil fails to dilate (sympathetic lesion); if anisocoria increases in bright light, the larger pupil fails to constrict (parasympathetic lesion)."
            ),
            "NEET PG": (
                "Adie tonic pupil and Argyll Robertson pupil mechanisms",
                "Denervation hypersensitivity to dilute pilocarpine (0.125%) in Adie tonic pupil versus bilateral small pupils that accommodate but do not react to light in neurosyphilis (Argyll Robertson).",
                "Adie pupil involves postganglionic ciliary ganglion damage (vermicular iris border); Argyll Robertson pupils represent pretectal midbrain tectal lesions (dorsal midbrain syndrome)."
            ),
            "MRCP": (
                "Giant Cell (Temporal) Arteritis presenting with Anterior Ischemic Optic Neuropathy (AION)",
                "Sudden painless unilateral visual loss, pale edematous optic disc, markedly elevated ESR and CRP, requiring immediate intravenous methylprednisolone prior to temporal artery biopsy.",
                "Arteritic AION is an ophthalmological emergency; delay in corticosteroid therapy risks rapid irreversible contralateral blindness within hours to days from posterior ciliary artery vasculitis."
            ),
            "MRCEM": (
                "Oculomotor nerve compression from uncal transtentorial herniation",
                "Ipsilateral sluggish or fixed dilated pupil (blown pupil) accompanied by progressive depressed level of consciousness and contralateral hemiparesis (Kernohan notch phenomenon).",
                "Expanding supratentorial mass lesions force the medial temporal lobe (uncus) over the tentorial notch, directly compressing the third cranial nerve against the petroclinoid ligament."
            ),
            "SMLE": (
                "Internuclear Ophthalmoplegia (INO) and Medial Longitudinal Fasciculus (MLF) lesions",
                "Impaired adduction of the ipsilateral eye with horizontal nystagmus of the abducting contralateral eye on conjugate lateral gaze, classically caused by Multiple Sclerosis or pontine stroke.",
                "The MLF coordinates the contralateral abducens nucleus with the ipsilateral oculomotor subnucleus for horizontal gaze; bilateral INO in a young patient is pathognomonic of multiple sclerosis."
            ),
            "HAAD / DHA": (
                "Visual field defect localization: bitemporal hemianopsia and homonymous defects",
                "Optic chiasm compression by pituitary adenoma causing bitemporal hemianopia versus post-chiasmal optic tract/radiation lesions causing contralateral homonymous hemianopia.",
                "Decussating nasal retinal fibers cross at the optic chiasm; pituitary sellar expansion compresses these fibers, selectively eliminating the temporal visual fields bilaterally."
            ),
            "UHS MBBS": (
                "Pupillary light reflex pathway: afferent and efferent neuroanatomy",
                "Retinal ganglion cells through optic nerve to bilateral pretectal nuclei in the rostral midbrain, projecting bilaterally to Edinger-Westphal nuclei, then parasympathetic CN III to ciliary ganglion.",
                "Because each pretectal nucleus projects bilaterally to both Edinger-Westphal nuclei, illumination of one eye produces both a direct pupillary reflex and a consensual contralateral reflex."
            )
        }
    },

    # Domain 110: Cranial Nerve Pathologies & Brainstem Syndromes
    {
        "id": "domain_110_cranial_nerves",
        "entity": "Bell palsy, Trigeminal neuralgia, and Lateral medullary (Wallenberg) syndrome",
        "hallmark": "acute unilateral facial paralysis with inability to wrinkle forehead (LMN Bell palsy) vs forehead-sparing paralysis (UMN central stroke), or lancinating electric-shock facial pain in V2/V3 distribution, or crossed sensory loss with Horner syndrome and ataxia",
        "system": "Nervous System",
        "ref_key": "neuro",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Neurology",
            "FCPS": "Neurology",
            "UHS MBBS": "Anatomy",
            "other": "Neurology"
        },
        "concepts": {
            "Step 1": (
                "Upper vs Lower motor neuron facial nerve lesion: bilateral cortical innervation of frontalis",
                "Lower motor neuron (LMN) CN VII lesion causes complete ipsilateral upper and lower facial paralysis, whereas upper motor neuron (UMN) lesion spares the forehead due to bilateral corticobulbar input.",
                "The frontalis and orbicularis oculi muscles receive bilateral cortical motor representation; a cortical stroke preserves forehead wrinkling, while a peripheral facial nerve lesion paralyzes the entire hemiface."
            ),
            "Step 2 CK": (
                "Early corticosteroid therapy and corneal eye protection in Bell palsy",
                "Initiating oral prednisolone within 72 hours of symptom onset alongside lubricating artificial tears, nighttime eye ointment, and eye patching to prevent exposure keratopathy.",
                "Randomized trials prove that early oral corticosteroids significantly increase complete facial nerve recovery; corneal desiccation from lagophthalmos (inability to close eyelid) causes corneal ulceration."
            ),
            "Step 3": (
                "Trigeminal neuralgia first-line pharmacotherapy (carbamazepine) and adverse effects",
                "Initiating carbamazepine (voltage-gated sodium channel blocker) as first-line therapy, with baseline and regular monitoring of complete blood count and serum sodium (hyponatremia, agranulocytosis).",
                "Carbamazepine provides rapid pain relief for neuropathic paroxysms; patients require monitoring for aplastic anemia, leukopenia, SIADH-induced hyponatremia, and HLA-B*1502 SJS risk."
            ),
            "PLAB / UKMLA": (
                "Ramsay Hunt syndrome (Herpes zoster oticus) identification and combination therapy",
                "Varicella-zoster virus reactivation in the geniculate ganglion presenting with severe ear pain, vesicular rash in the external auditory canal, and peripheral facial nerve palsy.",
                "Ramsay Hunt syndrome carries poorer prognosis than idiopathic Bell palsy; management requires prompt combination therapy with oral acyclovir or valacyclovir plus high-dose oral corticosteroids."
            ),
            "AMC": (
                "Lateral Medullary (Wallenberg) syndrome vascular anatomy and crossed sensory loss",
                "Posterior inferior cerebellar artery (PICA) or vertebral artery thrombosis causing ipsilateral facial pain/temp loss (spinal trigeminal tract) and contralateral body pain/temp loss (spinothalamic tract).",
                "Crossed signs are pathognomonic: ipsilateral Horner syndrome, ataxia, dysphagia/hoarseness (nucleus ambiguus), vertigo/nystagmus (vestibular nuclei), and contralateral spinothalamic sensory loss."
            ),
            "MCCQE": (
                "Acoustic Neuroma (Vestibular Schwannoma) screening and cerebellopontine angle MRI",
                "Unilateral progressive sensorineural hearing loss, asymmetric tinnitus, and poor speech discrimination warranting contrast-enhanced MRI of the internal auditory canals.",
                "Schwannomas arising from the vestibular division of CN VIII compress the cochlear nerve and expand into the cerebellopontine angle, potentially impinging on CN V, VII, and the brainstem."
            ),
            "FCPS": (
                "Microvascular decompression (Jannetta procedure) for refractory trigeminal neuralgia",
                "Retrosigmoid craniotomy with surgical transposition of an aberrant compressing vascular loop (superior cerebellar artery) off the trigeminal nerve root entry zone using Teflon felt.",
                "Neurovascular compression at the root entry zone causes focal demyelination and ephaptic cross-talk; microvascular decompression offers durable long-term pain relief without facial numbness."
            ),
            "NLE": (
                "Red flags distinguishing central causes of facial weakness from peripheral Bell palsy",
                "Presence of forehead wrinkling, limb weakness, sensory deficits, dysarthria, or ataxia indicating urgent neuroimaging for acute ischemic stroke rather than peripheral neuropathy.",
                "Preservation of forehead movement and association with long-tract motor or sensory signs definitively indicate a central upper motor neuron stroke requiring stroke-code thrombolysis pathway."
            ),
            "NEET PG": (
                "Medial Medullary syndrome vs Weber syndrome anatomical localization",
                "Anterior spinal artery occlusion causing ipsilateral tongue deviation (CN XII) and contralateral hemiplegia versus PCA branch occlusion causing ipsilateral CN III palsy and contralateral hemiplegia.",
                "Medial medullary syndrome involves the hypoglossal nerve, pyramid (corticospinal tract), and medial lemniscus; Weber syndrome involves the oculomotor nerve fibers and cerebral peduncle in the midbrain."
            ),
            "MRCP": (
                "Bulbar versus Pseudobulbar palsy clinical distinction and neurological pathology",
                "Lower motor neuron cranial nerve (IX, X, XII) nuclei degeneration with fasciculating wasted tongue and absent gag reflex versus bilateral UMN corticobulbar degeneration with spastic tongue and brisk jaw jerk.",
                "Pseudobulbar palsy displays emotional lability (pathological crying/laughing) and an exaggerated jaw jerk reflex; bulbar palsy features flaccid weakness, tongue atrophy, and absent pharyngeal reflexes."
            ),
            "MRCEM": (
                "Acute cauda equina syndrome vs conus medullaris emergency evaluation",
                "Immediate emergency whole-spine MRI for bilateral sciatica, saddle anesthesia, lax anal sphincter tone on DRE, and acute urinary retention with overflow incontinence.",
                "Cauda equina compression requires emergent spinal decompression within 24 to 48 hours to avert permanent bladder, bowel, and sexual dysfunction; bedside post-void bladder scan confirms retention."
            ),
            "SMLE": (
                "Taste sensation and salivary innervation of the tongue: VII, IX, and XII",
                "Anterior two-thirds taste via chorda tympani (CN VII) and somatic via lingual (V3); posterior one-third taste and somatic via glossopharyngeal (CN IX); motor via hypoglossal (CN XII).",
                "Lesions of the facial nerve proximal to the chorda tympani branch within the fallopian canal cause loss of taste on the anterior two-thirds of the ipsilateral tongue and dry mouth."
            ),
            "HAAD / DHA": (
                "Lyme neuroborreliosis presenting as bilateral facial nerve palsy",
                "Serological testing (ELISA confirmed by Western blot) and lumbar puncture for Borrelia burgdorferi in patients presenting with bilateral peripheral facial nerve palsy.",
                "Bilateral Bell palsy is rare and strongly suggests systemic disease: Lyme disease, sarcoidosis, Guillain-Barré syndrome (Miller Fisher variant), or acute HIV seroconversion."
            ),
            "UHS MBBS": (
                "Course and intracranial branches of the facial nerve in the temporal bone",
                "Enters internal acoustic meatus, travels through facial canal, gives off greater petrosal nerve (lacrimal gland), nerve to stapedius (hyperacusis), and chorda tympani before exiting stylomastoid foramen.",
                "Proximal facial canal lesions cause dry eye (greater petrosal nerve) and painful sensitivity to loud sounds (hyperacusis from paralyzed stapedius muscle), localizing the site of nerve entrapment."
            )
        }
    },

    # Domain 111: Advanced Antimicrobial Stewardship & Resistance
    {
        "id": "domain_111_antimicrobial_stewardship",
        "entity": "Multidrug-resistant bacterial infections (CRE, MRSA, VRE, and ESBL)",
        "hallmark": "nosocomial bloodstream infection, ventilator-associated pneumonia, or septic shock failing empirical beta-lactam therapy with microbiological isolation of carbapenem-resistant Enterobacteriaceae or methicillin-resistant S. aureus",
        "system": "General Principles",
        "ref_key": "infectious",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Microbiology",
            "FCPS": "Medicine",
            "UHS MBBS": "Microbiology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Molecular mechanisms of beta-lactamase mediated carbapenem and penicillin resistance",
                "Plasmid-mediated production of Klebsiella pneumoniae carbapenemase (KPC) and New Delhi metallo-beta-lactamase (NDM-1) hydrolyzing all penicillins, cephalosporins, and carbapenems.",
                "KPC is a serine carbapenemase inhibited by avibactam and vaborbactam; NDM-1 is a zinc-dependent metallo-beta-lactamase requiring aztreonam combined with ceftazidime-avibactam."
            ),
            "Step 2 CK": (
                "Empiric and targeted antimicrobial therapy for hospital-acquired MRSA bacteremia",
                "Intravenous vancomycin or daptomycin with therapeutic drug monitoring targeting AUC/MIC ratio >= 400 for documented severe MRSA bloodstream infections.",
                "Daptomycin is an alternative to vancomycin for bacteremia and right-sided endocarditis; however, daptomycin is inactivated by pulmonary surfactant and is contraindicated in MRSA pneumonia."
            ),
            "Step 3": (
                "De-escalation protocols and procalcitonin-guided antibiotic stewardship",
                "Systematic review of microbiological cultures at 48 to 72 hours with narrowing to targeted narrow-spectrum agents and discontinuing antibiotics when procalcitonin drops by > 80%.",
                "Antimicrobial stewardship programs reduce selection pressure for multidrug-resistant pathogens, decrease Clostridioides difficile colitis rates, and optimize patient clinical outcomes."
            ),
            "PLAB / UKMLA": (
                "Management of Extended-Spectrum Beta-Lactamase (ESBL) pyelonephritis",
                "Intravenous carbapenem therapy (meropenem or ertapenem) as the first-line treatment of choice for severe bloodstream or upper tract infections caused by ESBL-producing organisms.",
                "The MERINO trial proved that piperacillin-tazobactam is inferior to meropenem for definitive treatment of ESBL E. coli and Klebsiella bacteremia, resulting in higher 30-day mortality."
            ),
            "AMC": (
                "Vancomycin-Resistant Enterococcus (VRE) colonization vs infection and linezolid therapy",
                "Strict contact precautions for VRE colonization and administration of linezolid or daptomycin for active invasive bloodstream or deep tissue VRE faecium infection.",
                "Enterococcal resistance to vancomycin is mediated by vanA/vanB operons altering cell wall peptidoglycan precursors from D-alanyl-D-alanine to D-alanyl-D-lactate, abolishing vancomycin binding."
            ),
            "MCCQE": (
                "Adverse effects and monitoring requirements for Linezolid and Daptomycin",
                "Weekly complete blood counts for linezolid-induced reversible myelosuppression (thrombocytopenia) and weekly serum creatine kinase (CK) monitoring for daptomycin myopathy.",
                "Linezolid is a reversible, nonselective monoamine oxidase inhibitor (MAOI) carrying significant risk of serotonin syndrome when combined with SSRIs, alongside peripheral/optic neuropathy with prolonged use."
            ),
            "FCPS": (
                "Novel beta-lactamase inhibitor combinations for multidrug-resistant Gram-negative rods",
                "Ceftazidime-avibactam, meropenem-vaborbactam, and ceftolozane-tazobactam for treatment of complicated intra-abdominal and urinary infections caused by KPC and multidrug-resistant Pseudomonas.",
                "Avibactam and vaborbactam restore carbapenem and cephalosporin activity against Class A (KPC) and Class C (AmpC) beta-lactamases; ceftolozane-tazobactam overcomes Pseudomonas efflux pumps."
            ),
            "NLE": (
                "Principles of antimicrobial prophylaxis in clean-contaminated surgical procedures",
                "Intravenous cefazolin administered within 60 minutes prior to surgical incision, with intraoperative redosing every 4 hours and discontinuation within 24 hours postoperatively.",
                "Preoperative timing ensures peak tissue antibiotic concentrations at the moment of skin incision; extending prophylactic antibiotics beyond 24 hours increases resistance and C. difficile risk."
            ),
            "NEET PG": (
                "Colistin (Polymyxin E) nephrotoxicity, neurotoxicity, and mcr-1 plasmid resistance",
                "Detergent-like disruption of Gram-negative bacterial outer cell membranes, with acute tubular necrosis nephrotoxicity and plasmid-mediated colistin resistance (mcr-1 gene).",
                "Colistin binds bacterial lipopolysaccharide (LPS); the mcr-1 gene encodes a phosphoethanolamine transferase that modifies lipid A, preventing colistin binding and enabling global resistance."
            ),
            "MRCP": (
                "Clostridioides difficile infection: diagnostic testing and fidaxomicin vs oral vancomycin",
                "Two-step stool testing (GDH antigen plus toxin A/B EIA or NAAT) and first-line treatment with oral fidaxomicin (200 mg twice daily for 10 days) to minimize recurrence.",
                "Fidaxomicin is a macrocyclic bactericidal agent that preserves the normal fecal microbiome (Bacteroidetes and Firmicutes), achieving significantly lower recurrence rates than oral vancomycin."
            ),
            "MRCEM": (
                "Anaphylaxis to beta-lactam antibiotics and cross-reactivity with cephalosporins",
                "Immediate intramuscular epinephrine in the anterolateral thigh; cross-reactivity between penicillins and 3rd/4th generation cephalosporins is < 2% due to divergent R1 side-chains.",
                "Most allergic reactions are directed against the specific R1 side-chain rather than the shared core beta-lactam ring; third-generation cephalosporins (ceftriaxone) can often be used safely."
            ),
            "SMLE": (
                "Aminoglycoside therapeutic drug monitoring: once-daily dosing and ototoxicity",
                "High-dose extended-interval aminoglycoside dosing (gentamicin 5-7 mg/kg) achieving high peak concentrations for concentration-dependent bactericidal killing while minimizing trough toxicity.",
                "Aminoglycosides exhibit concentration-dependent killing and a robust post-antibiotic effect; low trough levels allow tissue clearance, reducing drug accumulation in renal proximal tubules and inner ear."
            ),
            "HAAD / DHA": (
                "Infection control contact precautions for carbapenemase-producing Enterobacteriaceae",
                "Single-room isolation, dedicated patient care equipment, gown and glove contact precautions, and strict environmental cleaning with EPA-registered sporicidal agents.",
                "Carbapenemase-producing organisms spread efficiently via health worker hands and contaminated hospital plumbing/surfaces; universal contact precautions prevent nosocomial outbreaks."
            ),
            "UHS MBBS": (
                "Kirby-Bauer disc diffusion method and minimum inhibitory concentration (MIC)",
                "Standardized bacterial inoculum (0.5 McFarland) swabbed on Mueller-Hinton agar, measuring zone of inhibition diameters to correlate with clinical breakpoint susceptibility.",
                "Minimum inhibitory concentration (MIC) is the lowest concentration of antibiotic that prevents visible bacterial growth in vitro, guiding dose selection based on pharmacokinetic/pharmacodynamic targets."
            )
        }
    },

    # Domain 112: Parasitic & Helminthic Infections
    {
        "id": "domain_112_parasitology",
        "entity": "Hydatid disease, Neurocysticercosis, Schistosomiasis, and Strongyloidiasis",
        "hallmark": "space-occupying hepatic cyst with daughter cysts and eggshell calcification, new-onset seizures with ring-enhancing parenchymal brain lesions, terminal hematuria with bladder calcifications, or pruritic larva currens with hyperinfection syndrome",
        "system": "General Principles",
        "ref_key": "parasitology",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Microbiology",
            "FCPS": "Medicine",
            "UHS MBBS": "Microbiology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Echinococcus granulosus life cycle and PAIR anaphylaxis risk",
                "Cestode hydatid cyst with inner germinal layer producing scolices; rupture of cyst fluid containing hydatid antigens triggers severe life-threatening anaphylactic shock.",
                "Dogs are the definitive hosts (intestinal tapeworm) and sheep are intermediate hosts; humans are accidental intermediate hosts who ingest oncospheres that migrate via the portal vein to the liver."
            ),
            "Step 2 CK": (
                "Neurocysticercosis staging and albendazole therapy with co-administered corticosteroids",
                "Taenia solium larval cysts in the brain parenchyma presenting with seizures; initiating antiepileptic therapy and oral albendazole plus dexamethasone to suppress inflammatory edema.",
                "Humans acquire cysticercosis by ingesting Taenia solium eggs via fecal-oral contamination (NOT by eating undercooked pork, which causes adult intestinal tapeworm infection); steroids prevent fatal cerebral edema."
            ),
            "Step 3": (
                "Strongyloides hyperinfection syndrome triggered by systemic corticosteroids",
                "Strongyloides stercoralis autoinfection accelerated by immunosuppression (corticosteroids), causing massive filariform larval dissemination, Gram-negative bacteremia, and meningitis.",
                "Strongyloides filariform larvae penetrate the colonic mucosa carrying enteric bacteria into the bloodstream; screening with serology and preemptive ivermectin is mandatory prior to chemotherapy."
            ),
            "PLAB / UKMLA": (
                "Schistosoma haematobium presentation with terminal hematuria and squamous bladder cancer",
                "Terminal painless hematuria, eosinophilia, and egg identification with a terminal spine in urine microscopy, carrying long-term risk of squamous cell carcinoma of the bladder.",
                "Cercariae penetrate intact skin in freshwater; adult flukes reside in the vesical venous plexus, depositing eggs that induce granulomatous inflammation, fibrosis, and chronic squamous metaplasia."
            ),
            "AMC": (
                "Giardiasis diagnosis, waterborne outbreaks, and tinidazole or metronidazole therapy",
                "Ingestion of cysts from unfiltered wilderness freshwater presenting with bloating, foul-smelling greasy diarrhea (steatorrhea), treated with single-dose tinidazole or oral metronidazole.",
                "Giardia duodenalis trophozoites adhere via a ventral sucking disc to the duodenal and jejunal brush border, causing mechanical malabsorption of fat and fat-soluble vitamins without mucosal invasion."
            ),
            "MCCQE": (
                "Amebic liver abscess (Entamoeba histolytica) vs pyogenic abscess management",
                "Single subcapsular hepatic abscess with 'anchovy paste' reddish-brown fluid, positive serology, treated with oral metronidazole followed by a luminal agent (paromomycin).",
                "Entamoeba histolytica invades the colonic wall producing flask-shaped ulcers and migrates to the liver; unlike pyogenic abscesses, amebic abscesses rarely require percutaneous catheter drainage."
            ),
            "FCPS": (
                "PAIR procedure (Puncture, Aspiration, Injection, Re-aspiration) for hydatid liver cysts",
                "Percutaneous ultrasound-guided cyst aspiration, instillation of scolicidal agent (hypertonic saline or absolute alcohol), and re-aspiration under albendazole coverage.",
                "PAIR is indicated for Gharbi stage I and II non-calcified unilocular cysts; albendazole administration for 4 weeks prior to puncture eliminates viable protoscolices and prevents peritoneal spillage."
            ),
            "NLE": (
                "Enterobius vermicularis (pinworm) nocturnal pruritus ani and Scotch tape test",
                "Nocturnal perianal pruritus in school-aged children, diagnosed by microscopic examination of transparent adhesive cellulose tape pressed against the perianal skin in the morning.",
                "Gravid female worms migrate out of the anus at night to deposit eggs on the perianal folds; treatment requires oral mebendazole or pyrantel pamoate repeated at 2 weeks for the entire household."
            ),
            "NEET PG": (
                "Wuchereria bancrofti lymphatic filariasis: nocturnal microfilaremia and diethylcarbamazine",
                "Mosquito-borne filarial nematode causing retrograde lymphangitis, hydrocele, and elephantiasis, diagnosed by nocturnal blood smears (10 PM to 2 AM) and treated with diethylcarbamazine (DEC).",
                "Microfilariae exhibit nocturnal periodicity matching mosquito vector feeding habits; DEC kills microfilariae and adult worms, but is contraindicated in Onchocerca co-infection due to Mazzotti reaction."
            ),
            "MRCP": (
                "Leishmaniasis spectrum: visceral (Kala-azar) vs cutaneous and liposomal amphotericin B",
                "Leishmania donovani transmitted by sandflies (Phlebotomus) causing hepatosplenomegaly, pancytopenia, hypergammaglobulinemia, and amastigotes (LD bodies) within bone marrow macrophages.",
                "Visceral leishmaniasis is fatal without treatment; first-line therapy is intravenous liposomal amphotericin B, which concentrates within reticuloendothelial macrophages to clear intracellular parasites."
            ),
            "MRCEM": (
                "Anaphylactic reaction during traumatic or spontaneous hydatid cyst rupture",
                "Immediate administration of intramuscular epinephrine, intravenous fluids, corticosteroids, and antihistamines for acute collapse following blunt abdominal trauma in patients with hepatic cysts.",
                "Hydatid cyst rupture exposes the host immune system to massive quantities of foreign echinococcal proteins, precipitating acute IgE-mediated mast cell degranulation and distributive shock."
            ),
            "SMLE": (
                "Soil-transmitted helminths: Ascaris lumbricoides biliary obstruction and intestinal mass",
                "Large adult roundworms causing mechanical small bowel obstruction in young children or migrating into the ampulla of Vater causing acute obstructive jaundice and pancreatitis.",
                "Ascaris larvae undergo pulmonary migration (Löffler syndrome with eosinophilic pneumonitis); adult worms in the jejunum can form a tangled bolus causing volvulus or intussusception."
            ),
            "HAAD / DHA": (
                "Travel medicine pre-travel prophylaxis and post-travel parasitic screening protocols",
                "Pre-travel counseling regarding food and water hygiene, insect vector avoidance, and post-travel screening for eosinophilia, stool ova and parasites, and endemic serologies.",
                "Unexplained persistent eosinophilia in travelers or expatriates mandates comprehensive evaluation for tissue-invasive nematodes (Strongyloides, Schistosoma, Filaria) to prevent latent organ damage."
            ),
            "UHS MBBS": (
                "Morphological differentiation of helminth eggs under brightfield light microscopy",
                "Oval operculated eggs in Fasciola/Clonorchis, lateral spine in Schistosoma mansoni, terminal spine in S. haematobium, and barrel-shaped eggs with bipolar plugs in Trichuris trichiura.",
                "Microscopic identification of distinctive egg morphology in stool or urine is the definitive diagnostic method: Trichuris has characteristic clear bipolar plugs; S. mansoni has a prominent lateral spine."
            )
        }
    },

    # Domain 113: Systemic Fungal Infections & Invasive Mycoses
    {
        "id": "domain_113_invasive_mycoses",
        "entity": "Invasive aspergillosis, Cryptococcosis, Mucormycosis, and endemic dimorphic fungi",
        "hallmark": "halo sign or air-crescent sign on chest CT in neutropenia, subacute headache with elevated opening pressure and India ink positivity in HIV, black necrotic eschar over the palate or turbinates in DKA, or endemic pulmonary granulomas with erythema nodosum",
        "system": "Respiratory",
        "ref_key": "mycology",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Microbiology",
            "FCPS": "Medicine",
            "UHS MBBS": "Microbiology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Thermal dimorphism in systemic fungi: 'Mold in the cold, Yeast in the beast'",
                "Dimorphic fungi existing as multicellular branching hyphae with spores at ambient temperature (25°C) and converting into unicellular budding yeast forms at body temperature (37°C).",
                "Histoplasma capsulatum forms small intracellular yeast within macrophages; Blastomyces dermatitidis forms broad-based budding yeast; Coccidioides immitis forms large endospore-filled spherules."
            ),
            "Step 2 CK": (
                "Invasive pulmonary aspergillosis diagnosis and first-line voriconazole therapy",
                "Serum or bronchoalveolar lavage galactomannan assay and chest CT showing the 'halo sign' (focal consolidation surrounded by ground-glass hemorrhage), treated with intravenous voriconazole.",
                "Aspergillus fumigatus exhibits acute-angle (45°) branching septate hyphae with angioinvasion causing vascular thrombosis and tissue infarction; voriconazole is the treatment of choice."
            ),
            "Step 3": (
                "Cryptococcal meningitis management protocol in advanced HIV infection (CD4 < 100)",
                "Induction therapy with liposomal amphotericin B plus flucytosine for at least 2 weeks, followed by oral fluconazole consolidation, and serial lumbar punctures to control opening pressure.",
                "Cryptococcus neoformans causes indolent basilar meningitis; failure to aggressively drain elevated cerebrospinal fluid (opening pressure > 250 mm H2O) causes blindness and death."
            ),
            "PLAB / UKMLA": (
                "Rhino-orbital-cerebral mucormycosis emergency management in diabetic ketoacidosis",
                "Immediate intravenous liposomal amphotericin B alongside urgent extensive surgical debridement of necrotic paranasal tissues and aggressive correction of metabolic acidosis.",
                "Mucor and Rhizopus species proliferate in acidic, hyperglycemic, iron-rich environments; they feature broad, non-septate hyphae branching at right angles (90°) with rapid vascular invasion."
            ),
            "AMC": (
                "Pneumocystis jirovecii pneumonia (PCP) prophylaxis and treatment with TMP-SMX",
                "Subacute exertional dyspnea, non-productive cough, elevated serum LDH, bilateral perihilar interstitial infiltrates, treated with high-dose trimethoprim-sulfamethoxazole and steroids.",
                "Indications for adjunctive corticosteroids in PCP include arterial blood gas PaO2 < 70 mm Hg or alveolar-arterial (A-a) gradient >= 35 mm Hg on room air to prevent inflammatory lung damage."
            ),
            "MCCQE": (
                "Candidemia workup and management: dilated fundoscopic examination and line removal",
                "Immediate initiation of an echinocandin (caspofungin or anidulafungin), removal of all indwelling central venous catheters, and dilated fundoscopic examination to exclude Candida endophthalmitis.",
                "Candida in the blood is never a contaminant; up to 10-15% of patients develop seeding into the vitreous or retina (chorioretinitis), requiring prolonged therapy to prevent permanent blindness."
            ),
            "FCPS": (
                "Surgical management of pulmonary aspergilloma (fungus ball) in pre-existing cavities",
                "Anatomical surgical lung resection (lobectomy) for symptomatic aspergilloma presenting with life-threatening hemoptysis in patients with preserved pulmonary reserve.",
                "Aspergillus colonizes pre-existing tuberculous or bronchiectatic lung cavities forming a mobile gravitational fungus ball; antifungal agents do not penetrate the necrotic cavity."
            ),
            "NLE": (
                "India ink preparation and Cryptococcal antigen (CrAg) lateral flow assay",
                "India ink negative staining demonstrating a wide clear polysaccharide capsule halo around budding yeasts, with CrAg lateral flow assay providing > 98% sensitivity in CSF and blood.",
                "The glucuronoxylomannan polysaccharide capsule resists phagocytosis and creates a clear halo against the black carbon background; CrAg lateral flow is the gold standard rapid diagnostic test."
            ),
            "NEET PG": (
                "Histoplasmosis bone marrow and reticuloendothelial invasion: intracellular yeasts",
                "Small (2-4 um) oval intracellular yeasts clustered within bone marrow and splenic macrophages on Giemsa or Gomori methenamine silver (GMS) stain in progressive disseminated disease.",
                "Histoplasma is endemic to river valleys (Ohio/Mississippi, Ganges); it is transmitted by inhalation of bat or bird guano spores and replicates intracellularly inside host phagosomes."
            ),
            "MRCP": (
                "Chronic Pulmonary Aspergillosis (CPA) diagnostic criteria and oral itraconazole therapy",
                "Progressive pulmonary cavitary lesions with chronic constitutional symptoms, positive Aspergillus-specific serum IgG antibodies, and minimum 6 months of oral itraconazole or voriconazole.",
                "CPA develops in immunocompetent patients with underlying architectural lung damage (prior TB, sarcoidosis); elevated serum Aspergillus precipitin (IgG) antibodies confirms the diagnosis."
            ),
            "MRCEM": (
                "Amphotericin B acute infusion reactions, nephrotoxicity, and electrolyte wasting",
                "Pre-medication with acetaminophen, diphenhydramine, and normal saline hydration, with intensive monitoring for renal tubular acidosis, profound hypokalemia, and hypomagnesemia.",
                "Amphotericin B binds ergosterol in fungal membranes but also binds human cholesterol; it causes renal afferent arteriolar constriction and distal tubular damage with massive potassium and magnesium loss."
            ),
            "SMLE": (
                "Coccidioidomycosis ('Valley Fever') presentation and erythema nodosum association",
                "Desert southwest exposure presenting with pneumonia, arthralgias (desert rheumatism), and painful pretibial erythematous subcutaneous nodules (erythema nodosum).",
                "Erythema nodosum in coccidioidomycosis reflects a robust cell-mediated delayed-type hypersensitivity reaction and is paradoxically a marker of good prognosis and low dissemination risk."
            ),
            "HAAD / DHA": (
                "Echinocandin mechanism of action and spectrum against fungal cell wall (1,3-beta-D-glucan)",
                "Non-competitive inhibition of 1,3-beta-D-glucan synthase, disrupting fungal cell wall integrity, effective against Candida and Aspergillus, but completely inactive against Cryptococcus and Mucor.",
                "Echinocandins (caspofungin, micafungin) target fungal cell wall carbohydrate polymers absent in human cells, providing high bactericidal efficacy against Candida with low human toxicity."
            ),
            "UHS MBBS": (
                "Microscopic morphology of fungal hyphae: Aspergillus vs Mucorales",
                "Aspergillus demonstrates narrow, regular septate hyphae branching at acute 45-degree angles, whereas Mucorales display broad, ribbon-like, non-septate hyphae branching at 90-degree right angles.",
                "Histological Gomori methenamine silver (GMS) and periodic acid-Schiff (PAS) stains definitively differentiate dichotomic 45-degree branching in Aspergillus from wide right-angle branching in Mucor."
            )
        }
    }
]
