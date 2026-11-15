"""
Mega Data Part M: Domains 76 to 82 (Ophthalmology, Otolaryngology & Head/Neck Emergencies)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_M = [
    # Domain 76: Acute Angle-Closure Glaucoma & Open-Angle Glaucoma
    {
        "id": "domain_76_glaucoma",
        "entity": "Acute angle-closure glaucoma and primary open-angle glaucoma",
        "hallmark": "sudden severe ocular pain, headache, seeing halos around lights, fixed mid-dilated pupil, steamy cornea, and markedly elevated intraocular pressure > 40 mm Hg",
        "system": "Nervous System",
        "ref_key": "ophthalmology",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Trabecular meshwork vs uveoscleral outflow and adrenergic/cholinergic actions",
                "Decreasing aqueous humor synthesis via beta-blockers and alpha-2 agonists while increasing trabecular outflow with muscarinic agonists and uveoscleral outflow with prostaglandin analogs.",
                "Ciliary epithelium synthesizes aqueous humor via beta-2 receptors; prostaglandin analogs (latanoprost) increase uveoscleral drainage, while pilocarpine contracts the ciliary muscle opening the trabecular meshwork."
            ),
            "Step 2 CK": (
                "Emergency medical lowering of intraocular pressure followed by laser iridotomy",
                "Immediate topical timolol, apraclonidine, pilocarpine, and intravenous acetazolamide or mannitol, followed by definitive bilateral laser peripheral iridotomy.",
                "Acute angle-closure requires urgent medical decompression to prevent ischemic retinal ganglion cell death, followed by bilateral laser iridotomy to eliminate pupillary block."
            ),
            "Step 3": (
                "First-line medical therapy and visual field surveillance in open-angle glaucoma",
                "Initiating once-daily topical prostaglandin analog (latanoprost) and scheduling automated Humphrey visual field perimetry with optical coherence tomography.",
                "Prostaglandin analogs provide superior 24-hour intraocular pressure reduction with minimal systemic toxicity; serial perimetry detects progressive arcuate scotomas."
            ),
            "PLAB / UKMLA": (
                "Emergency ophthalmology referral and avoidance of mydriatic eye drops",
                "Arranging emergency same-day ophthalmological assessment and strictly avoiding anticholinergic or mydriatic agents that precipitate pupillary block.",
                "Mydriatic agents (such as tropicamide or atropine) cause pupil dilation and iris bunching into the iridocorneal angle, precipitating acute angle closure in shallow anterior chambers."
            ),
            "AMC": (
                "Recognition of acute glaucoma presenting as abdominal pain or severe headache",
                "Recognizing that acute angle-closure glaucoma can present with severe nausea, vomiting, and hemicranial headache mimicking migraine or an acute abdomen.",
                "Elderly patients often present with systemic symptoms of nausea, vomiting, and headache; failing to inspect the red, hazy eye and palpate eyeball firmness leads to delayed diagnosis."
            ),
            "MCCQE": (
                "Cup-to-disc ratio evaluation and screening in primary open-angle glaucoma",
                "Evaluating the optic disc for progressive cup-to-disc ratio enlargement (>0.5), cup asymmetry, and retinal nerve fiber layer thinning.",
                "Open-angle glaucoma is a painless, chronic optic neuropathy characterized by insidious loss of peripheral visual fields and progressive optic cup excavation."
            ),
            "FCPS": (
                "Surgical indications for trabeculectomy with mitomycin C in refractory glaucoma",
                "Performing guarded filtration trabeculectomy augmented with antimetabolites (mitomycin C or 5-fluorouracil) when medical and laser therapies fail.",
                "Trabeculectomy creates a fistula from the anterior chamber to the subconjunctival space; intraoperative mitomycin C prevents postoperative episcleral fibroblastic scar formation."
            ),
            "NLE": (
                "First-line emergency pharmacological agents for acute angle-closure glaucoma",
                "Administering intravenous acetazolamide and topical beta-blockers (timolol) to rapidly decrease aqueous humor production.",
                "Carbonic anhydrase inhibitors reduce bicarbonate and fluid transport into the posterior chamber, rapidly lowering intraocular pressure before definitive laser therapy."
            ),
            "NEET PG": (
                "Shaffer gonioscopic grading and pathognomonic visual field defects",
                "Gonioscopic confirmation of closed iridocorneal angles (Shaffer grade 0) and Humphrey perimetry demonstrating Bjerrum scotoma and nasal stepping.",
                "Gonioscopy is the gold standard for visualizing the drainage angle; glaucoma produces classical nerve fiber bundle defects including Seidel scotoma and Roenne nasal step."
            ),
            "MRCP": (
                "Adverse effects of systemic and topical antiglaucoma medications",
                "Recognizing bronchospasm and bradycardia from topical timolol, aplastic anemia from systemic acetazolamide, and iris hyperpigmentation from latanoprost.",
                "Topical beta-blockers undergo systemic nasolacrimal duct absorption causing severe bronchospasm in asthma; systemic acetazolamide is a sulfonamide predisposing to bone marrow suppression."
            ),
            "MRCEM": (
                "Triage identification of stony-hard globe and emergency tonometry",
                "Bedside tonometry demonstrating intraocular pressure > 50 mm Hg and palpation of a stony-hard globe through closed eyelids.",
                "Palpation reveals marked asymmetry in globe firmness; rapid measurement with Tonopen or Perkins tonometer confirms acute angle closure requiring instant medical decompression."
            ),
            "SMLE": (
                "Contraindications to systemic acetazolamide in renal impairment and sulfa allergy",
                "Assessing for severe sulfonamide hypersensitivity and advanced renal failure before administering systemic acetazolamide, substituting intravenous mannitol if contraindicated.",
                "Acetazolamide is a sulfonamide derivative excreted primarily by the kidneys; it is contraindicated in severe renal insufficiency and true sulfa anaphylaxis."
            ),
            "HAAD / DHA": (
                "Screening protocols for driving licensing and occupational visual standards",
                "Standardized binocular Esterman visual field testing to ensure compliance with transport authority peripheral vision requirements.",
                "Licensing standards mandate an uninterrupted binocular visual field of at least 120 degrees horizontally and 20 degrees above and below the horizontal meridian."
            ),
            "UHS MBBS": (
                "Anatomy of aqueous humor circulation and pupillary block mechanism",
                "Secreted by ciliary processes, passing through the pupil into the anterior chamber, and filtering through the trabecular meshwork into the canal of Schlemm.",
                "Aqueous humor is produced by the non-pigmented ciliary epithelium; physiological apposition of the iris to the lens traps fluid in the posterior chamber, bowing the peripheral iris forward."
            )
        }
    },

    # Domain 77: Retinal Vascular Occlusion & Retinal Detachment
    {
        "id": "domain_77_retinal_vascular",
        "entity": "Central retinal artery occlusion (CRAO), vein occlusion (CRVO), and rhegmatogenous retinal detachment",
        "hallmark": "sudden painless monocular loss of vision, cherry-red spot at the fovea with retinal pallor, 'blood and thunder' fundus with flame hemorrhages, or flashes of light with curtain-like field defect",
        "system": "Nervous System",
        "ref_key": "ophthalmology",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Ophthalmic artery anatomy, cilioretinal artery sparing, and foveal blood supply",
                "Central retinal artery origin from the ophthalmic artery supplying inner retinal layers, with foveal choroidal supply producing a cherry-red spot, occasionally spared by a cilioretinal artery.",
                "The fovea receives its vascular supply entirely from the underlying choroid (ciliary arteries); when the inner retina is infarcted and pale, the thin fovea transmits underlying red choroidal circulation."
            ),
            "Step 2 CK": (
                "Emergency workup for stroke risk in CRAO and giant cell arteritis rule-out",
                "Emergent evaluation for carotid artery stenosis, echocardiography for embolic sources, and immediate ESR/CRP to rule out giant cell arteritis in elderly patients.",
                "CRAO is an ocular stroke equivalent; patients require emergent stroke center evaluation, carotid Doppler, cardiac telemetry, and ESR/CRP to exclude arteritic ischemic optic neuropathy."
            ),
            "Step 3": (
                "Management of neovascular glaucoma following central retinal vein occlusion",
                "Intravitreal anti-VEGF therapy and panretinal photocoagulation to manage macular edema and prevent ischemic neovascular glaucoma ('90-day glaucoma').",
                "Ischemic CRVO releases vascular endothelial growth factor (VEGF) from non-perfused retina, stimulating anterior chamber iris neovascularization (rubeosis iridis) and severe intractable secondary glaucoma."
            ),
            "PLAB / UKMLA": (
                "Urgent assessment and referral pathways for rhegmatogenous retinal detachment",
                "Emergency same-day referral to an on-call vitreoretinal surgeon for pneumatic retinopexy, scleral buckling, or pars plana vitrectomy.",
                "Rhegmatogenous retinal detachment occurs when liquefied vitreous enters a full-thickness retinal tear; urgent surgical reattachment before macular detachment preserves central visual acuity."
            ),
            "AMC": (
                "Distinguishing amaurosis fugax from acute non-transient arterial occlusion",
                "Recognizing transient painless monocular visual loss ('fleeting blindness') caused by internal carotid artery atheroemboli (Hollenhorst plaques) requiring urgent carotid Doppler.",
                "Amaurosis fugax represents transient retinal ischemia typically lasting seconds to minutes; it serves as a critical warning sign for imminent stroke requiring rapid vascular risk stratification."
            ),
            "MCCQE": (
                "Clinical symptoms of posterior vitreous detachment vs retinal tear",
                "Differentiating benign posterior vitreous detachment (photopsias and floaters) from acute rhegmatogenous tear (hundreds of pepper-like floaters, vitreous hemorrhage, and shadow curtain).",
                "Posterior vitreous separation is common with aging; however, new onset showers of black dots or vitreous hemorrhage indicate a retinal tear requiring urgent indirect ophthalmoscopy."
            ),
            "FCPS": (
                "Surgical techniques in vitreoretinal repair: pneumatic retinopexy vs vitrectomy",
                "Performing pars plana vitrectomy with laser retinopexy and endotamponade (gas or silicone oil) for complex inferior or multiple retinal tears.",
                "Pneumatic retinopexy is suitable for uncomplicated superior breaks; complex detachments, vitreous hemorrhage, or proliferative vitreoretinopathy mandate formal pars plana vitrectomy."
            ),
            "NLE": (
                "Classical fundoscopic appearance of central retinal vein occlusion (CRVO)",
                "Identifying widespread retinal flame-shaped hemorrhages, dilated tortuous retinal veins, and cotton-wool spots throughout all four quadrants ('blood and thunder' fundus).",
                "CRVO is caused by thrombosis of the central retinal vein at the lamina cribrosa, producing extensive venous stasis, retinal hemorrhages, and optic disc edema in all four retinal quadrants."
            ),
            "NEET PG": (
                "Hollenhorst plaques, calcific emboli, and macular OCT in vascular occlusion",
                "Refractile, yellow, sparkling cholesterol crystals lodged at retinal arteriolar bifurcations (Hollenhorst plaques) originating from carotid bifurcation atheromas.",
                "Hollenhorst plaques are glistening cholesterol crystals from carotid ulcerated plaques; calcific emboli from cardiac valves are white, non-refractile, and cause extensive proximal arterial occlusions."
            ),
            "MRCP": (
                "Systemic thrombophilia and hyperviscosity workup in young patients with CRVO",
                "Screening for antiphospholipid syndrome, factor V Leiden, hyperhomocysteinemia, and hyperviscosity syndromes (polycythemia, Waldenström) in young patients with CRVO.",
                "While CRVO in older adults is associated with hypertension and glaucoma, presentation in patients under 50 mandates comprehensive hypercoagulable and autoimmune vasculitis investigation."
            ),
            "MRCEM": (
                "Emergency bedside maneuvers for central retinal artery occlusion within 6 hours",
                "Immediate ocular massage, rebreathing into a paper bag (hypercapnic vasodilation), topical timolol, and urgent anterior chamber paracentesis.",
                "Retinal tissue sustains irreversible ischemic infarction after 4 to 6 hours; urgent measures aim to dislodge the embolus into a smaller peripheral branch by transiently lowering IOP."
            ),
            "SMLE": (
                "Fundoscopic features and staging of hypertensive retinopathy",
                "Grade 1 arteriolar narrowing, Grade 2 AV nicking (Salus sign), Grade 3 flame hemorrhages and cotton-wool spots, Grade 4 papilledema.",
                "Keith-Wagener-Barker classification grades hypertensive retinopathy from mild sclerosis (silver wiring) to severe accelerated hypertension with bilateral papilledema and macular star."
            ),
            "HAAD / DHA": (
                "Postoperative positioning and flying restrictions with intraocular gas tamponade",
                "Strict prone positioning following gas tamponade (SF6 or C3F8) and complete prohibition of commercial air travel until intraocular gas is fully reabsorbed.",
                "Commercial aircraft cabin depressurization causes intraocular gas to expand precipitously according to Boyle's law, causing catastrophic intraocular hypertension and central retinal artery closure."
            ),
            "UHS MBBS": (
                "Layers of the retina and mechanism of subretinal fluid accumulation",
                "Separation of the neurosensory retina from the underlying retinal pigment epithelium (RPE) by subretinal fluid accumulation through a full-thickness rhegmatogenous tear.",
                "The neurosensory retina consists of 9 layers; in rhegmatogenous detachment, fluid dissects into the potential space between the sensory retina (photoreceptors) and the retinal pigment epithelium."
            )
        }
    },

    # Domain 78: Age-Related Macular Degeneration & Diabetic Retinopathy
    {
        "id": "domain_78_maculopathy",
        "entity": "Age-related macular degeneration (dry vs wet) and Diabetic retinopathy",
        "hallmark": "insidious or sudden central visual distortion (metamorphopsia on Amsler grid), central scotoma, hard drusen deposits, subretinal choroidal neovascularization, or diabetic microaneurysms with macular edema",
        "system": "Nervous System",
        "ref_key": "ophthalmology",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Medicine",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Bruch membrane drusen, lipofuscin accumulation, and VEGF-driven choroidal neovascularization",
                "Accumulation of extracellular lipid-rich drusen between the basal lamina of the retinal pigment epithelium and Bruch membrane, and VEGF-driven choroidal neovascular membrane ingrowth.",
                "In dry AMD, metabolic failure of the RPE leads to drusen deposition and geographic atrophy; in wet AMD, breaks in Bruch membrane allow choroidal neovascular vessels to bleed and form disciform scars."
            ),
            "Step 2 CK": (
                "Intravitreal anti-VEGF therapy (ranibizumab/aflibercept) for neovascular AMD and DME",
                "Immediate initiation of intravitreal vascular endothelial growth factor inhibitors (anti-VEGF: ranibizumab, aflibercept, or bevacizumab) for wet AMD and diabetic macular edema.",
                "Intravitreal anti-VEGF agents halt vascular hyperpermeability and induce neovascular regression, converting progressive blinding choroidal neovascularization into stabilized or improved visual acuity."
            ),
            "Step 3": (
                "AREDS-2 antioxidant supplementation and Amsler grid home self-monitoring",
                "Prescribing AREDS-2 antioxidant vitamins (vitamins C, E, zinc, lutein, zeaxanthin without beta-carotene) for intermediate dry AMD and daily Amsler grid self-monitoring.",
                "AREDS-2 formula reduces progression to advanced neovascular AMD by 25%; beta-carotene is replaced with lutein/zeaxanthin to eliminate increased lung cancer risks in former smokers."
            ),
            "PLAB / UKMLA": (
                "NHS Diabetic Eye Screening Programme (DESP) criteria and referral thresholds",
                "Annual digital two-field fundus photography screening for all diabetic patients aged 12 and older, referring urgently for pre-proliferative (R2), proliferative (R3), or maculopathy (M1).",
                "The NHS DESP captures early asymptomatic microvascular disease; patients with high-risk proliferative retinopathy or diabetic macular edema undergo prompt panretinal photocoagulation."
            ),
            "AMC": (
                "Early identification of metamorphopsia using the Amsler grid in primary care",
                "Counseling elderly patients with dry AMD to report any wavy, distorted, or curved appearance of straight grid lines (metamorphopsia) indicating choroidal neovascularization.",
                "Metamorphopsia is the earliest clinical manifestation of subretinal fluid or hemorrhage lifting the sensory macula in wet AMD, mandating urgent same-week ophthalmology evaluation."
            ),
            "MCCQE": (
                "Distinguishing non-proliferative from proliferative diabetic retinopathy",
                "Differentiating non-proliferative retinopathy (microaneurysms, dot-and-blot hemorrhages, cotton-wool spots) from proliferative retinopathy defined by neovascularization of the disc (NVD) or elsewhere (NVE).",
                "Proliferative diabetic retinopathy is defined by retinal ischemia triggering aberrant neovascularization, predisposing to vitreous hemorrhage, tractional retinal detachment, and blindness."
            ),
            "FCPS": (
                "Panretinal photocoagulation (PRP) mechanics and laser parameters",
                "Applying scatter panretinal photocoagulation to hypoxic peripheral retina to ablate ischemic tissue and eliminate angiogenic stimulus for retinal neovascularization.",
                "PRP destroys hypoxic peripheral photoreceptors, reducing retinal oxygen demand and reversing neovascular proliferation, at the expense of a mild loss in peripheral and night vision."
            ),
            "NLE": (
                "Cardiovascular and metabolic risk factor optimization in diabetic retinopathy",
                "Strict glycemic control (HbA1c < 7.0%), tight blood pressure management (< 130/80 mm Hg), and lipid-lowering therapy to retard microvascular progression.",
                "Intensive glycemic and blood pressure control significantly retards the progression of diabetic microangiopathy and lowers rates of vision-threatening proliferative retinopathy."
            ),
            "NEET PG": (
                "Optical coherence tomography (OCT) biomarkers: intraretinal cystoid spaces and hyperreflective foci",
                "Optical coherence tomography demonstrating central subfield macular thickness elevation, intraretinal cystoid fluid, and sub-RPE fibrovascular pigment epithelial detachments.",
                "OCT is the imaging standard for visualizing cross-sectional retinal microarchitecture, quantifying diabetic macular edema, and monitoring therapeutic response to anti-VEGF injections."
            ),
            "MRCP": (
                "Fluorescein angiography: early lacy hyperfluorescence vs late pooling",
                "Fundus fluorescein angiography demonstrating early well-defined lacy hyperfluorescence with progressive late dye leakage and pooling confirming choroidal neovascularization.",
                "FFA differentiates classic choroidal neovascular membranes (early bright lacy fluorescence with intense leakage) from occult membranes and non-perfused capillary dropout zones."
            ),
            "MRCEM": (
                "Emergency management of acute painless diabetic vitreous hemorrhage",
                "Bedside ocular B-scan ultrasound to rule out underlying tractional retinal detachment, bed rest with head elevation, and urgent referral for vitrectomy if non-clearing.",
                "Dense vitreous hemorrhage precludes optical view of the retina; B-scan ultrasonography is essential to assess whether the retina remains attached or requires urgent surgery."
            ),
            "SMLE": (
                "Screening intervals for diabetic retinopathy in Type 1 vs Type 2 diabetes",
                "Initial dilated eye examination within 5 years of diagnosis for Type 1 diabetes, and at the time of diagnosis for Type 2 diabetes, with annual examinations thereafter.",
                "Type 2 diabetes typically has an insidious undiagnosed pre-clinical phase lasting several years; approximately 20% of patients already exhibit retinopathy at the time of initial diagnosis."
            ),
            "HAAD / DHA": (
                "Intraocular anti-VEGF protocol: endophthalmitis prophylaxis and post-injection monitoring",
                "Application of 5% povidone-iodine to the conjunctival sac prior to intravitreal injection without post-injection topical antibiotics, monitoring for endophthalmitis.",
                "Povidone-iodine is the only proven antiseptic that prevents post-injection endophthalmitis; routine post-procedure topical antibiotic drops are not recommended as they promote resistant flora."
            ),
            "UHS MBBS": (
                "Pathophysiology of pericyte loss and basement membrane thickening in diabetes",
                "Selective loss of vascular pericytes, capillary basement membrane thickening, and breakdown of the inner blood-retinal barrier leading to microaneurysm formation.",
                "Sustained hyperglycemia induces aldose reductase-mediated sorbitol accumulation and oxidative stress, causing apoptosis of capillary pericytes and loss of structural microvascular support."
            )
        }
    },

    # Domain 79: Acute Otitis Media, Otitis Externa & Malignant Otitis Externa
    {
        "id": "domain_79_ear_infections",
        "entity": "Acute otitis media (AOM), Otitis externa, and Malignant (necrotizing) otitis externa",
        "hallmark": "erythematous bulging tympanic membrane with impaired mobility, severe tragal tenderness with ear canal erythema and purulent otorrhea, or deep unremitting otalgia with cranial nerve VII palsy in an elderly diabetic",
        "system": "Nervous System",
        "ref_key": "ent",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Microbiology",
            "FCPS": "Surgery",
            "UHS MBBS": "Microbiology",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Microbiology of AOM (Strep pneumoniae, H. influenzae) vs Pseudomonas in otitis externa",
                "Streptococcus pneumoniae, non-typeable Haemophilus influenzae, and Moraxella catarrhalis in AOM versus Pseudomonas aeruginosa and Staphylococcus aureus in otitis externa.",
                "AOM results from ascending nasopharyngeal mucosal pathogens via the Eustachian tube; otitis externa ('swimmer's ear') and malignant otitis externa are classically caused by Pseudomonas aeruginosa."
            ),
            "Step 2 CK": (
                "First-line high-dose amoxicillin for AOM and ciprofloxacin/dexamethasone for otitis externa",
                "Oral high-dose amoxicillin (80-90 mg/kg/day) for acute otitis media, and topical ciprofloxacin with dexamethasone otic drops for uncomplicated otitis externa.",
                "High-dose amoxicillin achieves high middle ear concentrations overcoming penicillin-intermediate pneumococci; uncomplicated otitis externa is managed topically, avoiding systemic antibiotics."
            ),
            "Step 3": (
                "Tympanostomy tube insertion indications in recurrent otitis media with effusion",
                "Referring for bilateral myringotomy and tympanostomy tube insertion for children with persistent bilateral middle ear effusion for >= 3 months or >= 3-4 recurrent AOM episodes per year.",
                "Persistent middle ear effusion causes conductive hearing loss impairing speech and language development; tympanostomy ventilating tubes equalize middle ear pressure and restore hearing."
            ),
            "PLAB / UKMLA": (
                "NICE Guideline NG91: Delayed antibiotic prescribing strategy in acute otitis media",
                "Offering watchful waiting with analgesia (paracetamol/ibuprofen) or a delayed back-up prescription for 48-72 hours in children over 2 years with mild unilateral AOM.",
                "NICE recommends withholding immediate antibiotics for mild uncomplicated AOM in low-risk children, as >80% of episodes resolve spontaneously within several days without antimicrobial therapy."
            ),
            "AMC": (
                "Recognition of malignant otitis externa and immediate hospital admission",
                "Immediate inpatient admission, intravenous antipseudomonal therapy (ciprofloxacin or ceftazidime), and skull base imaging in an elderly diabetic with severe otalgia and granulation tissue.",
                "Malignant otitis externa is a life-threatening skull base osteomyelitis originating in the external auditory canal; it spreads through the fissures of Santorini, causing cranial neuropathies."
            ),
            "MCCQE": (
                "Avoidance of ototoxic ear drops in the presence of tympanic membrane perforation",
                "Selecting non-ototoxic fluoroquinolone topical ear drops (ciprofloxacin or ofloxacin) and avoiding aminoglycoside-containing drops when tympanic perforation cannot be excluded.",
                "Aminoglycosides (such as neomycin, gentamicin, or tobramycin) penetrate the round window membrane of the middle ear, causing irreversible sensorineural hearing loss and vestibular toxicity."
            ),
            "FCPS": (
                "Emergency surgical cortical mastoidectomy for acute coalescent mastoiditis",
                "Emergency contrast-enhanced CT of temporal bones and cortical mastoidectomy with myringotomy for coalescent mastoiditis with subperiosteal abscess (Bezold abscess).",
                "Coalescent mastoiditis involves resorption of bony mastoid trabeculae; failure to respond to intravenous antibiotics mandates cortical mastoidectomy to prevent intracranial suppuration."
            ),
            "NLE": (
                "Clinical diagnostic triad of acute otitis media on pneumatic otoscopy",
                "Rapid acute onset of otalgia, presence of middle ear effusion (bulging drum, absent mobility), and distinct signs of tympanic inflammation (marked erythema).",
                "Accurate diagnosis of AOM requires all three components; erythema alone without middle ear fluid or decreased tympanic mobility represents viral myringitis or crying."
            ),
            "NEET PG": (
                "Granulation tissue at the bony-cartilaginous junction (fissures of Santorini) and Tc-99m scanning",
                "Visualization of granulation tissue at the floor of the external auditory canal and Technetium-99m bone scintigraphy for diagnosing osteomyelitis of the temporal bone.",
                "Granulation tissue at the junction of the cartilaginous and bony meatus is pathognomonic of necrotizing otitis externa; Tc-99m scan shows intense osteoblastic activity."
            ),
            "MRCP": (
                "Complications of malignant otitis externa: Jugular foramen syndrome (Vernet syndrome)",
                "Spread of infection to the skull base jugular foramen producing paresis of cranial nerves IX (glossopharyngeal), X (vagus), and XI (accessory).",
                "Skull base osteomyelitis extending to the petrous apex and jugular foramen causes hoarseness, dysphagia, absent gag reflex, and shoulder weakness (cranial nerves IX, X, XI, XII)."
            ),
            "MRCEM": (
                "Emergency differentiation between acute mastoiditis and superficial post-auricular cellulitis",
                "Erythema, swelling, loss of the post-auricular sulcus, and forward proptosis of the pinna indicative of acute mastoiditis requiring emergency intravenous ceftriaxone.",
                "Post-auricular tenderness, obliteration of the retroauricular groove, and anterolateral displacement of the auricle indicate subperiosteal abscess formation from acute mastoiditis."
            ),
            "SMLE": (
                "Antibiotic selection for AOM in patients with non-severe vs severe penicillin allergy",
                "Prescribing cefdinir, cefuroxime, or cefpodoxime for non-anaphylactic penicillin allergy, or azithromycin/clarithromycin for severe type I IgE-mediated anaphylaxis.",
                "Second- and third-generation cephalosporins with distinct side-chains have cross-reactivity rates < 1% in non-severe penicillin allergy; macrolides are reserved for true anaphylaxis."
            ),
            "HAAD / DHA": (
                "Occupational and swimming restrictions during acute ear infections",
                "Complete water precautions, keeping the ear canal strictly dry during bathing, and avoiding swimming for at least 7 to 10 days after acute symptoms resolve.",
                "Water ingress into the external auditory canal macerates the squamous epithelium, elevates canal pH, and creates an optimal alkaline environment for Pseudomonas proliferation."
            ),
            "UHS MBBS": (
                "Eustachian tube anatomy in infants versus adults and predisposing factors",
                "Infant Eustachian tubes are shorter, wider, and oriented more horizontally (10 degrees vs 45 degrees in adults), facilitating reflux of nasopharyngeal secretions into the middle ear.",
                "Horizontal orientation and immature tensor veli palatini function in infants prevent effective middle ear clearance, predisposing young children to recurrent otitis media."
            )
        }
    },

    # Domain 80: Peripheral vs Central Vertigo (BPPV, Meniere, Neuritis)
    {
        "id": "domain_80_vertigo",
        "entity": "Benign paroxysmal positional vertigo (BPPV), Meniere disease, and Vestibular neuritis",
        "hallmark": "episodic brief spinning triggered by head turning with torsional upbeat nystagmus, fluctuating low-frequency sensorineural hearing loss with tinnitus, or acute continuous vertigo without auditory deficits",
        "system": "Nervous System",
        "ref_key": "ent",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Medicine",
            "FCPS": "Surgery",
            "UHS MBBS": "Physiology",
            "other": "Neurology"
        },
        "concepts": {
            "Step 1": (
                "Canalithiasis of the posterior semicircular canal vs endolymphatic hydrops",
                "Free-floating otoconia (calcium carbonate crystals) displaced from the utricular macula into the posterior semicircular canal, versus defective endolymph resorption in the scala media.",
                "BPPV involves canalithiasis within the posterior semicircular canal; Meniere disease is caused by endolymphatic hydrops resulting from impaired resorption in the endolymphatic sac."
            ),
            "Step 2 CK": (
                "Dix-Hallpike diagnostic test and Epley canalith repositioning maneuver for BPPV",
                "Performing the Dix-Hallpike maneuver showing torsional upbeat nystagmus with a latency of several seconds, and treating definitively with the Epley repositioning maneuver.",
                "The Dix-Hallpike maneuver is diagnostic for posterior canal BPPV; particle repositioning (Epley maneuver) moves displaced otoconia back into the utricle, curing >85% of cases."
            ),
            "Step 3": (
                "Long-term medical management of Meniere disease: dietary salt and betahistine/diuretics",
                "Restricting dietary sodium intake (< 2,000 mg/day), limiting caffeine and alcohol, and prescribing oral hydrochlorothiazide or betahistine for chronic maintenance.",
                "Sodium restriction and thiazide diuretics reduce endolymphatic volume and pressure, decreasing the frequency and severity of debilitating episodic vertigo attacks."
            ),
            "PLAB / UKMLA": (
                "HINTS examination (Head Impulse, Nystagmus, Test of Skew) to rule out cerebellar stroke",
                "Utilizing the bedside HINTS triad (normal head impulse, direction-changing nystagmus, skew deviation) to detect acute central posterior circulation stroke in acute vestibular syndrome.",
                "In patients with continuous acute vertigo and nystagmus, a normal head impulse test ('benign' sign) strongly indicates a central stroke rather than acute peripheral vestibular neuritis."
            ),
            "AMC": (
                "Distinguishing vestibular neuritis from acute labyrinthitis",
                "Differentiating vestibular neuritis (acute prolonged vertigo with normal hearing) from acute labyrinthitis (acute prolonged vertigo accompanied by sensorineural hearing loss and tinnitus).",
                "Vestibular neuritis selectively affects the vestibular division of cranial nerve VIII; labyrinthitis involves both vestibular and cochlear branches, producing concurrent auditory loss."
            ),
            "MCCQE": (
                "Symptomatic management of acute vertigo with short-term vestibular suppressants",
                "Prescribing short-term (<= 48-72 hours) oral or intramuscular dimenhydrinate, meclizine, or prochlorperazine for acute severe nausea and vomiting in vestibular neuritis.",
                "Vestibular suppressants (antihistamines and benzodiazepines) provide acute relief during the initial severe vegetative phase but must be stopped early to permit central vestibular compensation."
            ),
            "FCPS": (
                "Intratympanic gentamicin chemical labyrinthectomy for intractable Meniere disease",
                "Administering intratympanic gentamicin injections to ablate vestibular sensory neuroepithelium in patients with unilateral refractory Meniere disease.",
                "Gentamicin is preferentially vestibulotoxic; titrated intratympanic delivery destroys dark vestibular hair cells, controlling vertigo with minimal risk to residual cochlear function."
            ),
            "NLE": (
                "Classical clinical tetrad of Meniere disease",
                "Recurrent spontaneous episodic vertigo, fluctuating low-frequency sensorineural hearing loss, roaring tinnitus, and a sensation of aural fullness in the affected ear.",
                "The classic tetrad of Meniere disease requires documented episodic vertigo lasting 20 minutes to 12 hours, fluctuating low-to-mid frequency hearing loss, tinnitus, and aural fullness."
            ),
            "NEET PG": (
                "Frenzel glasses, electronystagmography, and Tullio phenomenon",
                "Frenzel glasses abolishing visual fixation to reveal peripheral vestibular nystagmus, and sound-induced vertigo and nystagmus (Tullio phenomenon) in semicircular canal dehiscence.",
                "Visual fixation suppresses peripheral vestibular nystagmus; Frenzel goggles prevent fixation. Tullio phenomenon (vertigo triggered by loud sounds) indicates a third mobile window defect."
            ),
            "MRCP": (
                "Acoustic neuroma (vestibular schwannoma) diagnostic workup with gadolinium MRI",
                "Contrast-enhanced MRI of the internal auditory meatus demonstrating an enhancing cerebellopontine angle mass in a patient with asymmetric sensorineural hearing loss.",
                "Vestibular schwannomas arise from Schwann cells of the inferior vestibular nerve; insidious unilateral sensorineural hearing loss and poor speech discrimination mandate brainstem MRI."
            ),
            "MRCEM": (
                "Emergency differentiation of peripheral vs central nystagmus at triage",
                "Recognizing that pure vertical, pure torsional, or direction-changing gaze-evoked nystagmus indicates an emergency central cerebellar or brainstem stroke.",
                "Peripheral nystagmus is typically combined horizontal-torsional, unidirectional, beats away from the affected ear, and is inhibited by visual fixation, unlike central stroke nystagmus."
            ),
            "SMLE": (
                "Vestibular rehabilitation therapy (VRT) in chronic uncompensated vestibular hypofunction",
                "Referring for customized physical therapy exercises emphasizing gaze stabilization (VOR adaptation) and habituation to promote central neuroplastic compensation.",
                "Vestibular rehabilitation exercises accelerate brainstem and cerebellar recalibration; continuing vestibular suppressant drugs impairs this neuroplastic compensatory recovery."
            ),
            "HAAD / DHA": (
                "Fitness-to-drive restrictions following acute vertigo and episodic drop attacks",
                "Advising immediate cessation of motor vehicle driving until attacks are controlled and free from disabling vertigo or Tumarkin otolithic drop attacks.",
                "Tumarkin crisis of Meniere disease causes sudden unexpected drops to the ground without loss of consciousness, posing severe hazards while operating heavy machinery or vehicles."
            ),
            "UHS MBBS": (
                "Vestibulo-ocular reflex (VOR) physiology and caloric test interpretation",
                "Cold water irrigation produces nystagmus beating to the opposite ear; warm water produces nystagmus beating to the same ear (COWS mnemonic).",
                "Caloric irrigation creates convection currents in endolymph of the horizontal semicircular canal, altering baseline vestibular firing rates and eliciting physiological nystagmus."
            )
        }
    },

    # Domain 81: Epistaxis & Sphenopalatine Artery Ligation
    {
        "id": "domain_81_epistaxis",
        "entity": "Anterior epistaxis (Kiesselbach plexus) and Posterior epistaxis (Sphenopalatine artery)",
        "hallmark": "acute nasal hemorrhage, active arterial bleeding on anterior rhinoscopy, unremitting posterior oropharyngeal blood pooling refractory to anterior pressure, and hypovolemic compromise in an elderly hypertensive patient",
        "system": "Respiratory",
        "ref_key": "ent",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Anatomy",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Arterial anastomoses forming Kiesselbach plexus (Little area) on the anterior septum",
                "Anterior ethmoidal, posterior ethmoidal, sphenopalatine, greater palatine, and superior labial (septal branch of facial) arteries forming Kiesselbach plexus.",
                "Kiesselbach plexus on the anterior nasal septum is the site of >90% of anterior epistaxis episodes; it represents a major anastomosis between the internal and external carotid systems."
            ),
            "Step 2 CK": (
                "Sequential escalation: compression, topical vasoconstrictors, chemical cautery, and packing",
                "Firm continuous digital compression of the cartilaginous nasal ala for 10-15 minutes, application of topical oxymetazoline, silver nitrate chemical cautery, and anterior nasal packing.",
                "Proper digital pinching compresses Kiesselbach plexus against the septum; if bleeding persists, topical vasoconstrictors and silver nitrate cautery (never bilaterally simultaneously) are indicated."
            ),
            "Step 3": (
                "Management of posterior epistaxis and balloon catheter packing with hospitalization",
                "Placing a dual-balloon posterior nasal catheter (or Foley catheter), admitting to an inpatient monitored telemetry bed, and providing supplemental oxygen.",
                "Posterior packs stimulate the nasopulmonary reflex, predisposing to hypoventilation, hypoxia, and arrhythmias; inpatient cardiac telemetry monitoring is mandatory."
            ),
            "PLAB / UKMLA": (
                "Assessment of anticoagulation and reversal protocols in severe epistaxis",
                "Checking international normalized ratio (INR) in patients taking warfarin, administering intravenous phytomenadione (vitamin K) or prothrombin complex concentrate for supratherapeutic bleeding.",
                "Anticoagulated patients with active epistaxis require urgent coagulation screening and prompt reversal if hemodynamically unstable or presenting with major tissue hemorrhage."
            ),
            "AMC": (
                "First-aid positioning and patient education for recurring childhood epistaxis",
                "Instructing the patient to sit upright and lean forward (avoiding head tilting back), pinching the soft lower third of the nose, and breathing through the mouth for 10-15 minutes.",
                "Leaning forward prevents blood from draining down the posterior pharynx into the stomach (which induces emetic irritation) or into the tracheobronchial tree (pulmonary aspiration)."
            ),
            "MCCQE": (
                "Avoidance of bilateral septal chemical cautery to prevent septal perforation",
                "Cauterizing only one side of the nasal septum at a single sitting, strictly avoiding simultaneous bilateral silver nitrate cautery to prevent septal cartilage necrosis and perforation.",
                "The septal cartilage relies entirely on its overlying mucoperichondrium for blood supply and nutrients; bilateral cautery causes full-thickness ischemic avascular necrosis and perforation."
            ),
            "FCPS": (
                "Endoscopic sphenopalatine artery ligation (ESPAL) for refractory posterior epistaxis",
                "Transnasal endoscopic identification of the crista ethmoidalis and titanium clipping or bipolar electrocautery of the sphenopalatine artery at the sphenopalatine foramen.",
                "ESPAL has largely replaced open transantral maxillary artery ligation; it offers a >95% success rate with lower morbidity and shorter hospital stays compared to prolonged posterior packing."
            ),
            "NLE": (
                "Differentiating anterior from posterior epistaxis by clinical presentation",
                "Anterior epistaxis presenting with unilateral bleeding from the nares in younger individuals versus posterior epistaxis presenting with bilateral torrential bleeding dripping down the throat in hypertensive elderly patients.",
                "Posterior bleeding originates from the sphenopalatine artery (Woodruff plexus) in the posterior nasal cavity; it cannot be visualized on simple anterior rhinoscopy and drips into the hypopharynx."
            ),
            "NEET PG": (
                "Woodruff plexus, juvenile nasopharyngeal angiofibroma, and hereditary hemorrhagic telangiectasia",
                "Investigating adolescent males with recurrent unprovoked severe epistaxis for juvenile nasopharyngeal angiofibroma (JNA), and inspecting for mucosal telangiectasias (Osler-Weber-Rendu).",
                "JNA is a benign but locally aggressive vascular neoplasm in adolescent boys; biopsy in the outpatient clinic is contraindicated due to torrential life-threatening hemorrhage."
            ),
            "MRCP": (
                "Hereditary Hemorrhagic Telangiectasia (Osler-Weber-Rendu syndrome) genetics and triad",
                "Autosomal dominant mutations in endoglin (ENG) or ALK-1 leading to mucocutaneous telangiectasias, recurrent epistaxis, and pulmonary/hepatic arteriovenous malformations.",
                "Curacao criteria establish HHT: spontaneous recurrent epistaxis, multiple mucocutaneous telangiectasias (lips, tongue), visceral AVMs (pulmonary, cerebral), and first-degree family history."
            ),
            "MRCEM": (
                "Airway, breathing, and circulation resuscitation in massive exsanguinating epistaxis",
                "Securing the airway, obtaining large-bore IV access, aggressive fluid resuscitation, blood cross-matching, and placing an emergency posterior balloon pack.",
                "Torrential posterior epistaxis can cause rapid airway compromise and hemorrhagic shock; immediate hemodynamic resuscitation and anterior/posterior tamponade take precedence over diagnostics."
            ),
            "SMLE": (
                "Prophylactic antibiotic coverage during prolonged nasal packing to prevent Toxic Shock Syndrome",
                "Prescribing oral cephalexin or amoxicillin-clavulanate while non-absorbable nasal packing remains in situ for > 48 hours to prevent Staphylococcal toxic shock syndrome.",
                "Nasal packing provides an ideal nidus for Staphylococcus aureus colonization and TSST-1 exotoxin production, potentially precipitating life-threatening toxic shock syndrome."
            ),
            "HAAD / DHA": (
                "Nasal moisturizing and barrier ointment regimens for post-cautery healing",
                "Applying petroleum-based antibiotic ointment or sterile saline nasal spray twice daily to the anterior septum for 2 to 4 weeks to facilitate mucosal re-epithelialization.",
                "Mucosal hydration and gentle barrier emollients prevent crusting and recurrent mechanical trauma, reducing epistaxis recurrence rates and promoting complete epithelial recovery."
            ),
            "UHS MBBS": (
                "Blood supply of the nasal septum and borders of the nasal cavity",
                "Internal carotid branch (anterior and posterior ethmoidal from ophthalmic) and external carotid branches (sphenopalatine and greater palatine from maxillary, superior labial from facial).",
                "The nasal septum is vascularized by both internal and external carotid arterial systems; their confluence at Kiesselbach plexus makes it uniquely susceptible to vascular trauma and epistaxis."
            )
        }
    },

    # Domain 82: Deep Neck Space Infections (Ludwig Angina & Quinsy)
    {
        "id": "domain_82_neck_infections",
        "entity": "Ludwig angina, Peritonsillar abscess (Quinsy), and Retropharyngeal abscess",
        "hallmark": "woody induration of the submandibular and sublingual spaces, elevated and protruding tongue, severe trismus, 'hot potato' muffled voice, uvular deviation, and impending upper airway obstruction",
        "system": "Respiratory",
        "ref_key": "ent",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Microbiology",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Mylohyoid muscle anatomy and polymicrobial anaerobic odontogenic flora",
                "Second and third mandibular molar roots extending inferior to the mylohyoid ridge into the submandibular space, colonized by mixed oral viridans streptococci and anaerobes (Peptostreptococcus, Bacteroides).",
                "The roots of the lower 2nd and 3rd molars extend below the mylohyoid line; odontogenic abscesses track directly into the submandibular space and spread contiguously without lymphadenopathy."
            ),
            "Step 2 CK": (
                "Priority airway assessment and awake fiberoptic intubation in Ludwig angina",
                "Securing the upper airway with awake fiberoptic intubation (or tracheostomy under local anesthesia) prior to any procedural sedation, followed by broad-spectrum intravenous antibiotics.",
                "Ludwig angina is a surgical emergency where rapidly progressive woody cellulitis pushes the floor of the mouth and tongue superiorly and posteriorly, causing acute catastrophic asphyxiation."
            ),
            "Step 3": (
                "Needle aspiration vs incision and drainage of peritonsillar abscess (quinsy)",
                "Performing intraoral needle aspiration or incision and drainage under local anesthesia, accompanied by intravenous dexamethasone and ampicillin-sulbactam or clindamycin.",
                "Peritonsillar abscess lies between the palatine tonsil capsule and superior pharyngeal constrictor; drainage provides immediate relief of severe trismus, dysphagia, and pain."
            ),
            "PLAB / UKMLA": (
                "Clinical recognition of 'hot potato' voice, trismus, and uvular deviation",
                "Recognizing acute unilateral sore throat, severe trismus (inability to open the mouth), muffled voice, and contralateral deviation of the edematous uvula.",
                "Peritonsillar abscess presents with unilateral peritonsillar bulging pushing the uvula across the midline; severe trismus results from pterygoid muscle irritation and spasm."
            ),
            "AMC": (
                "Recognition of retropharyngeal abscess and danger space tracking into the mediastinum",
                "Identifying retropharyngeal space infection on lateral soft tissue neck radiograph (widened prevertebral soft tissue) and urgent contrast CT to rule out descending necrotizing mediastinitis.",
                "The danger space (behind the alar fascia and in front of the prevertebral fascia) extends directly into the posterior mediastinum; infection can spread swiftly causing fatal acute mediastinitis."
            ),
            "MCCQE": (
                "Emergency airway precautions and avoidance of blind oral endotracheal intubation",
                "Strictly avoiding blind oral endotracheal intubation or rapid sequence paralysis which can precipitate complete airway collapse, airway rupture, and fatal laryngospasm.",
                "Pharmacological paralysis eliminates spontaneous upper airway muscular tone; in severe sublingual distortion, bag-valve-mask ventilation and visualization are impossible, leading to death."
            ),
            "FCPS": (
                "Surgical decompression and incision technique for Ludwig angina",
                "Transverse cervical incision with bilateral submandibular and submental blunt fascial space exploration, division of the mylohyoid muscle, and placement of dependent Penrose drains.",
                "Surgical drainage releases massive tissue tension in the submandibular, sublingual, and submental compartments; extraction of offending mandibular molars eliminates the septic source."
            ),
            "NLE": (
                "Empiric intravenous antibiotic therapy for deep fascial neck infections",
                "Initiating empirical intravenous broad-spectrum coverage with ampicillin-sulbactam plus metronidazole, or ceftriaxone plus metronidazole, or vancomycin plus piperacillin-tazobactam.",
                "Deep neck space infections are synergistic polymicrobial infections involving aerobic streptococci and oral anaerobes; robust antianaerobic and anti-streptococcal coverage is mandatory."
            ),
            "NEET PG": (
                "Prevertebral soft tissue thickness measurements on lateral neck radiography",
                "Prevertebral space thickness exceeding 7 mm at C2 (retro-pharyngeal) or exceeding 14 mm in children / 22 mm in adults at C6 (retro-tracheal) on lateral soft tissue X-ray.",
                "Lateral cervical radiography taken during inspiration with neck extension is a sensitive initial screening test; widened prevertebral shadows confirm retropharyngeal abscess."
            ),
            "MRCP": (
                "Lemierre syndrome (postanginal sepsis) and internal jugular vein septic thrombophlebitis",
                "Fusobacterium necrophorum infection following acute pharyngitis leading to internal jugular vein septic thrombophlebitis and septic pulmonary emboli with cavitary lung lesions.",
                "Lemierre syndrome is a life-threatening complication of oropharyngeal infection caused by Fusobacterium necrophorum; high-resolution contrast CT confirms jugular thrombosis."
            ),
            "MRCEM": (
                "Emergency bedside tracheostomy and cricothyroidotomy equipment readiness",
                "Keeping emergency surgical airway equipment, video laryngoscope, and flexible fiberoptic bronchoscope immediately at the bedside in the resuscitation bay.",
                "In advancing Ludwig angina or retropharyngeal abscess, sudden complete airway obstruction can develop within minutes; immediate surgical airway readiness is essential."
            ),
            "SMLE": (
                "Differentiating peritonsillar cellulitis (phlegmon) from peritonsillar abscess",
                "Transoral point-of-care ultrasound or diagnostic needle aspiration confirming fluid collection (abscess) requiring drainage versus diffuse phlegmon managed medically.",
                "Peritonsillar cellulitis and abscess present identically; intraoral ultrasound or diagnostic needle aspiration differentiates drainable pus from phlegmon treated with IV antibiotics alone."
            ),
            "HAAD / DHA": (
                "Hospital discharge criteria following deep neck space infection drainage",
                "Complete resolution of trismus, tolerance of oral diet, absence of fever for >= 24 hours, and transition to culture-guided oral antibiotics for a total 10 to 14-day course.",
                "Discharge is safely permitted only when airway stability is fully assured, trismus has resolved, and the patient demonstrates dependable oral intake without signs of sepsis."
            ),
            "UHS MBBS": (
                "Fascial layers of the neck and boundaries of the submandibular space",
                "Investing layer of deep cervical fascia splitting to enclose the submandibular gland, bounded superiorly by the oral mucosa and inferiorly by the mylohyoid and digastric muscles.",
                "The submandibular space communicates directly with the sublingual space along the posterior free edge of the mylohyoid muscle, explaining rapid bilateral sublingual and submandibular spread."
            )
        }
    }
]
