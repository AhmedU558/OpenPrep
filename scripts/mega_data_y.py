"""
Mega Data Part Y: Domains 151 to 157 (Clinical Toxicology, Ophthalmology, ENT Emergencies, Orthopedic Trauma, Rheumatologic Emergencies, Geriatric Medicine, Clinical Pharmacology)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_Y = [
    # Domain 151: Clinical Toxicology & Toxidromes
    {
        "id": "domain_151_clinical_toxicology",
        "entity": "Acute poisoning, toxidrome differentiation, and specific antidotal therapy",
        "hallmark": "miosis, bradypnea, and unresponsiveness (opioid); diaphoresis, salivation, lacrimation, urination, and diarrhea (cholinergic); or hyperthermia, dry flushed skin, mydriasis, and urinary retention (anticholinergic)",
        "system": "General Principles",
        "ref_key": "toxicology",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Pharmacology",
            "FCPS": "Medicine",
            "UHS MBBS": "Pharmacology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Organophosphate pesticide poisoning molecular mechanism and synaptic accumulation",
                "Irreversible phosphorylation and covalent inhibition of acetylcholinesterase, producing massive accumulation of acetylcholine at muscarinic and nicotinic receptors.",
                "Pralidoxime (2-PAM) cleaves the phosphate-ester bond before biochemical aging occurs, reactivating acetylcholinesterase at both muscarinic and nicotinic neuromuscular synapses."
            ),
            "Step 2 CK": (
                "Clinical management of acute organophosphate poisoning: Atropine versus pralidoxime",
                "Immediate administration of intravenous atropine titrated to clear pulmonary secretions and bronchospasm, accompanied by pralidoxime for nicotinic reversal.",
                "Atropine blocks muscarinic manifestations (bronchorrhea, bradycardia, salivation) but has no effect on nicotinic neuromuscular weakness; pulmonary clearance is the primary endpoint."
            ),
            "Step 3": (
                "Acetaminophen toxicity risk stratification: Rumack-Matthew nomogram and N-acetylcysteine",
                "Obtaining a 4-hour post-ingestion serum acetaminophen level plotted on the Rumack-Matthew nomogram and administering intravenous or oral N-acetylcysteine within 8 hours.",
                "N-acetylcysteine replenishes hepatic glutathione stores and acts as a direct glutathione surrogate to detoxify reactive N-acetyl-p-benzoquinone imine (NAPQI), preventing centrilobular hepatic necrosis."
            ),
            "PLAB / UKMLA": (
                "Acute carbon monoxide poisoning presentation, carboxyhemoglobin, and hyperbaric oxygen",
                "Headache, cherry-red skin, nausea, confusion, and carboxyhemoglobin > 25% (or > 15% in pregnancy) following exposure to faulty domestic heaters, managed with high-flow normobaric or hyperbaric oxygen.",
                "Carbon monoxide binds hemoglobin with 200-fold higher affinity than oxygen, shifting the oxygen-hemoglobin dissociation curve to the left and inhibiting mitochondrial cytochrome c oxidase."
            ),
            "AMC": (
                "Tricyclic antidepressant overdose: QRS widening and sodium bicarbonate therapy",
                "QRS duration > 100 milliseconds and terminal R wave in lead aVR > 3 mm indicating cardiac fast sodium channel blockade, treated with intravenous sodium bicarbonate.",
                "Sodium bicarbonate increases extracellular sodium concentration and induces systemic alkalemia, dissociating the tricyclic molecule from myocardial voltage-gated sodium channels."
            ),
            "MCCQE": (
                "Toxic alcohol ingestion: Anion gap metabolic acidosis and fomepizole therapy",
                "High anion gap metabolic acidosis with elevated osmolar gap following ingestion of methanol or ethylene glycol, treated with fomepizole (alcohol dehydrogenase inhibitor).",
                "Methanol is metabolized by alcohol dehydrogenase into toxic formic acid (causing optic papillitis and retinal toxicity); ethylene glycol forms oxalic acid causing acute renal tubular necrosis."
            ),
            "FCPS": (
                "Cyanide toxicity mechanism of cellular histotoxic hypoxia and hydroxocobalamin antidote",
                "Inhibition of mitochondrial cytochrome c oxidase (complex IV) arresting oxidative phosphorylation and aerobic ATP synthesis, treated with intravenous hydroxocobalamin.",
                "Hydroxocobalamin binds cyanide with high affinity to form non-toxic cyanocobalamin, which is excreted renally without precipitating dangerous methemoglobinemia."
            ),
            "NLE": (
                "Opioid overdose toxidrome triad and emergency naloxone administration",
                "Triad of central nervous system depression, pinpoint pupils (miosis), and respiratory depression (< 10 breaths/min), treated with titrated intravenous or intranasal naloxone.",
                "Naloxone is a pure competitive opioid receptor antagonist; titration aims to restore spontaneous ventilation and airway protection without precipitating acute severe opioid withdrawal."
            ),
            "NEET PG": (
                "Specific antidotes for common poisonings: Deferoxamine, Dimercaprol, and Flumazenil",
                "Deferoxamine for acute elemental iron poisoning; dimercaprol (BAL) for acute arsenic and lead poisoning; and cautious flumazenil for pure iatrogenic benzodiazepine sedation.",
                "Flumazenil is strictly contraindicated in chronic benzodiazepine dependence or mixed tricyclic overdose due to the catastrophic risk of precipitating refractory status epilepticus."
            ),
            "MRCP": (
                "Lithium toxicity manifestations: Neurological features, hemodialysis thresholds, and volume repletion",
                "Coarse tremors, hyperreflexia, ataxia, dysarthria, and seizures in dehydration; indicated for emergency hemodialysis if serum lithium > 4.0 mEq/L (or > 2.5 mEq/L with severe neurologic symptoms).",
                "Lithium is handled like sodium by proximal renal tubules; volume depletion increases proximal tubular reabsorption, causing progressive intoxication treated with IV isotonic saline."
            ),
            "MRCEM": (
                "Calcium channel blocker and beta-blocker overdose: High-dose insulin euglycemic therapy",
                "Bradycardia, hypotension, and cardiogenic shock refractory to fluids, treated with intravenous calcium gluconate, high-dose regular insulin with dextrose infusion, and glucagon.",
                "High-dose insulin provides direct positive inotropy by switching stressed myocardium from fatty acid oxidation to carbohydrate uptake, overcoming peripheral vasodilation and nodal arrest."
            ),
            "SMLE": (
                "Salicylate poisoning: Mixed respiratory alkalosis and metabolic acidosis with urine alkalinization",
                "Direct stimulation of the medullary respiratory center causing respiratory alkalosis followed by uncoupling of oxidative phosphorylation causing high anion gap metabolic acidosis.",
                "Intravenous sodium bicarbonate infusion alkalinizes the urine (target pH 7.5-8.5), ion-trapping the lipid-soluble salicylic acid into ionized salicylate and accelerating urinary elimination."
            ),
            "HAAD / DHA": (
                "Occupational and domestic caustic ingestion: Endoscopic grading and contraindication of emesis",
                "Early upper gastrointestinal endoscopy within 12 to 24 hours to grade mucosal injury, with strict avoidance of gastric lavage, emetics, or chemical neutralization.",
                "Neutralizing agents generate exothermic reactions that compound thermal injury; inducing emesis re-exposes the esophagus and pharynx to the corrosive substance, increasing perforation risk."
            ),
            "UHS MBBS": (
                "Differentiating cholinergic from anticholinergic toxidromes on bedside physical signs",
                "Cholinergic toxidrome features profuse sweating, constricted pupils, and bowel hypermotility, whereas anticholinergic toxidrome features dry axillae, dilated pupils, and absent bowel sounds.",
                "Anticholinergic blockade of muscarinic receptors halts eccrine sweating, producing hot dry skin; cholinergic excess hyperstimulates postganglionic muscarinic receptors causing diaphoresis."
            )
        }
    },

    # Domain 152: Ophthalmology & Neuro-Ophthalmology Emergencies
    {
        "id": "domain_152_ophthalmology_emergencies",
        "entity": "Acute angle-closure glaucoma, central retinal artery occlusion, and giant cell arteritis",
        "hallmark": "severe unilateral eye pain with halo around lights, cloudy steamy cornea, fixed mid-dilated pupil; sudden painless monocular vision loss with cherry-red spot; or jaw claudication with scalp tenderness",
        "system": "Nervous System",
        "ref_key": "ophthalmology",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Medicine",
            "FCPS": "Surgery",
            "UHS MBBS": "Medicine",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Aqueous humor dynamics and pupillary block in acute angle-closure glaucoma",
                "Apposition of the iris to the anterior lens capsule blocking pupillary flow of aqueous humor, bowing the peripheral iris forward and mechanically occluding the trabecular meshwork.",
                "Elevated posterior chamber pressure pushes the peripheral iris into direct contact with the cornea (iridocorneal angle closure), blocking outflow into the canal of Schlemm."
            ),
            "Step 2 CK": (
                "Acute angle-closure glaucoma emergency medical therapy and laser iridotomy",
                "Immediate topical timolol, apraclonidine, pilocarpine drops, intravenous acetazolamide or mannitol, followed by definitive bilateral laser peripheral iridotomy.",
                "Topical beta-blockers and alpha-2 agonists suppress aqueous synthesis; systemic carbonic anhydrase inhibitors rapidly reduce production, lowering intraocular pressure before laser iridotomy."
            ),
            "Step 3": (
                "Giant cell (temporal) arteritis diagnostic protocol and high-dose corticosteroid urgency",
                "Immediate administration of high-dose intravenous or oral corticosteroids (methylprednisolone or prednisone) prior to temporal artery biopsy in suspected arteritic ischemic optic neuropathy.",
                "Delaying corticosteroid therapy while awaiting biopsy risks irreversible bilateral blindness; histopathology reveals transmural granulomatous inflammation with multinucleated giant cells."
            ),
            "PLAB / UKMLA": (
                "Central retinal artery occlusion (CRAO): Fundoscopic hallmark and immediate ocular maneuvers",
                "Fundoscopy revealing diffuse retinal pallor, attenuated arterioles, and a 'cherry-red spot' at the fovea, managed with ocular massage and emergency anterior chamber paracentesis.",
                "The fovea receives dual choroidal blood supply through the thin central foveola, contrasting with the pale, edematous ischemic retina supplied by the occluded central retinal artery."
            ),
            "AMC": (
                "Optic neuritis: Clinical presentation, visual evoked potentials, and multiple sclerosis risk",
                "Subacute painful monocular vision loss with afferent pupillary defect and dyschromatopsia in a young adult, managed with intravenous high-dose methylprednisolone.",
                "Oral prednisone alone is contraindicated as it increases optic neuritis recurrence; high-dose IV corticosteroids hasten visual recovery, and cranial MRI stratifies long-term multiple sclerosis risk."
            ),
            "MCCQE": (
                "Orbital cellulitis versus preseptal cellulitis distinction and urgent orbital CT",
                "Orbital cellulitis presents with proptosis, painful ophthalmoplegia, and decreased visual acuity, requiring emergency contrast-enhanced orbital CT and intravenous broad-spectrum antibiotics.",
                "Infection posterior to the orbital septum endangers the optic nerve and risks cavernous sinus thrombosis; preseptal cellulitis lacks proptosis or motility limitation and is treated outpatient."
            ),
            "FCPS": (
                "Rhegmatogenous retinal detachment clinical features, Shafer sign, and surgical repair",
                "Sudden shower of floaters, photopsia (flashes of light), and a progressive curtain-like peripheral visual field defect, requiring vitrectomy or scleral buckling.",
                "Traction from posterior vitreous detachment tears the sensory retina, allowing fluid to dissect beneath the neurosensory layer; pigment cells in the anterior vitreous (Shafer sign) confirm full-thickness tear."
            ),
            "NLE": (
                "Relative afferent pupillary defect (Marcus Gunn pupil) mechanism and swinging flashlight test",
                "Swinging light from normal to affected eye produces paradoxical bilateral pupillary dilation rather than constriction due to impaired sensory afferent conduction along the optic nerve (CN II).",
                "Efferent parasympathetic pupillary fibers (CN III) remain intact; diminished light perception by the diseased optic nerve causes the pretectal nuclei to sense less illumination, dilating pupils."
            ),
            "NEET PG": (
                "Fundoscopic signs in systemic diseases: Roth spots, Cytoid bodies, and Copper/Silver wiring",
                "Roth spots (flame-shaped retinal hemorrhages with pale white centers) in infective endocarditis and leukemia; arteriolar wall thickening and AV nicking in hypertensive retinopathy.",
                "White centers in Roth spots represent localized collections of fibrin and platelet microthrombi; cytoid bodies represent swollen axonal swellings (cotton-wool spots) from microinfarction."
            ),
            "MRCP": (
                "Horner syndrome anatomical localization: Third-neuron versus second-neuron lesions",
                "Ptosis, miosis, and anhidrosis caused by sympathetic pathway disruption; localized using apraclonidine and hydroxyamphetamine drops, and imaging lung apex for Pancoast tumor.",
                "Second-order preganglionic sympathetic neurons exit the upper thoracic spinal cord and ascend the sympathetic chain; compression by apical lung carcinoma causes ipsilateral Horner syndrome."
            ),
            "MRCEM": (
                "Chemical ocular burns emergency decontamination: Immediate voluminous Morgan lens irrigation",
                "Immediate continuous copious irrigation with normal saline or lactated Ringer solution using a Morgan lens until ocular surface pH normalizes to 7.0-7.2 prior to formal examination.",
                "Alkali burns cause liquefactive necrosis and deep stromal penetration, while acids cause coagulative necrosis; immediate neutral pH restoration is the paramount determinant of visual salvage."
            ),
            "SMLE": (
                "Diabetic retinopathy classification and indications for panretinal photocoagulation",
                "Distinguishing non-proliferative (microaneurysms, hard exudates) from proliferative diabetic retinopathy (neovascularization of disc or retina), treated with anti-VEGF injections or panretinal photocoagulation.",
                "Retinal ischemia drives hypoxia-inducible factor (HIF-1alpha) mediated VEGF hypersecretion; panretinal photocoagulation ablates ischemic peripheral retina, lowering VEGF and regressing neovessels."
            ),
            "HAAD / DHA": (
                "Corneal abrasion and ulceration in contact lens wearers: Antipseudomonal fluoroquinolone therapy",
                "Topical antipseudomonal fluoroquinolone drops (ciprofloxacin or moxifloxacin) with strict avoidance of eye patching in any contact lens wearer with a corneal epithelial defect.",
                "Contact lens wear carries high risk of aggressive Pseudomonas aeruginosa infectious keratitis; eye patching creates a warm, dark, hypoxic environment accelerating corneal melting and perforation."
            ),
            "UHS MBBS": (
                "Third cranial nerve (Oculomotor) palsy: Pupil-sparing vs pupil-involving distinction",
                "Pupil-involving third nerve palsy (dilated unreactive pupil with 'down and out' globe) indicates external compressive aneurysm (posterior communicating artery), requiring urgent CT angiography.",
                "Parasympathetic pupillomotor fibers run superficial on the dorsomedial aspect of CN III, making them vulnerable to mechanical compression; microvascular ischemic diabetic palsy spares pupillary fibers."
            )
        }
    },

    # Domain 153: Otolaryngology & Head/Neck Emergencies
    {
        "id": "domain_153_ent_emergencies",
        "entity": "Epiglottitis, peritonsillar abscess (quinsy), and deep neck space infections",
        "hallmark": "stridor with tripod posture and drooling (epiglottitis); severe sore throat, trismus, and uvular deviation away from swelling (peritonsillar abscess); or brawny floor-of-mouth swelling (Ludwig angina)",
        "system": "Respiratory",
        "ref_key": "ent",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Microbiology and fascial anatomy of Ludwig angina and descending necrotizing mediastinitis",
                "Polymicrobial cellulitis of the submandibular and sublingual spaces arising from mandibular molar odontogenic infections, tracking along the buccopharyngeal fascia into the 'danger space'.",
                "The 'danger space' behind the alar fascia communicates directly from the skull base into the posterior mediastinum, allowing rapid downward spread of purulent sepsis into the mediastinum."
            ),
            "Step 2 CK": (
                "Peritonsillar abscess (quinsy) clinical recognition, needle aspiration, and antibiotics",
                "Severe unilateral pharyngeal pain, 'hot potato' muffled voice, trismus, and medial displacement of the superior palatine tonsil with contralateral uvular deviation, treated with needle aspiration.",
                "Needle aspiration or incision and drainage evacuates purulent fluid from the potential space between the tonsillar capsule and superior pharyngeal constrictor muscle, relieving trismus and pain."
            ),
            "Step 3": (
                "Acute adult epiglottitis: High-risk airway precautions and definitive antimicrobial therapy",
                "Immediate management in a quiet environment avoiding agitating maneuvers, preparing for awake fiberoptic intubation in the operating theater, and IV ceftriaxone with vancomycin.",
                "Adult epiglottitis can rapidly progress to complete upper airway occlusion; direct tongue depressor inspection in agitated patients precipitates fatal reflex laryngospasm."
            ),
            "PLAB / UKMLA": (
                "Management of severe acute epistaxis: First-aid, anterior packing, and sphenopalatine ligation",
                "Direct compression of the anterior cartilaginous nares for 10-15 minutes leaning forward, followed by topical vasoconstrictor, anterior nasal packing, or sphenopalatine artery ligation if refractory.",
                "Over 90% of anterior bleeds originate from Kiesselbach plexus on the anterior nasal septum (Little area); refractory posterior hemorrhage arises from branches of the sphenopalatine artery."
            ),
            "AMC": (
                "Malignant (necrotizing) otitis externa: Pseudomonas aeruginosa in diabetic elderly",
                "Severe persistent otalgia out of proportion to exam with granulation tissue at the bony-cartilaginous junction of the external auditory canal, cranial nerve palsies, and elevated ESR in a diabetic patient.",
                "Pseudomonas aeruginosa invades the temporal bone through the fissures of Santorini, causing osteomyelitis of the skull base, requiring weeks of intravenous antipseudomonal fluoroquinolones."
            ),
            "MCCQE": (
                "Mastoiditis clinical diagnosis, contrast-enhanced temporal bone CT, and cortical mastoidectomy",
                "Post-auricular erythema, tenderness, fluctuance, and anterior-inferior protrusion of the pinna following acute otitis media, confirmed on temporal bone CT and managed with IV antibiotics.",
                "Erosion of the mastoid air cells can progress through the mastoid cortex (forming a subperiosteal abscess) or intracranial extension causing sigmoid sinus thrombosis and cerebellar abscess."
            ),
            "FCPS": (
                "Retropharyngeal abscess in pediatric patients: Retropharyngeal space anatomy and airway threat",
                "Child presenting with neck stiffness, torticollis, dysphagia, stridor, and prominent prevertebral soft tissue widening (> width of adjacent vertebral body) on lateral cervical radiography.",
                "Retropharyngeal lymph nodes involute after age 5-6; suppurative adenitis in infants breaks down into an abscess, requiring transoral or external surgical drainage under airway protection."
            ),
            "NLE": (
                "Clinical distinction between croup (laryngotracheobronchitis) and acute epiglottitis",
                "Croup presents with a barking cough, hoarseness, and inspiratory stridor with subglottic narrowing ('steeple sign') on AP radiograph, improving with nebulized epinephrine and oral dexamethasone.",
                "Epiglottitis lacks a barking cough, featuring acute high fever, toxic appearance, drooling, and a swollen cherry-red epiglottis ('thumbprint sign' on lateral neck radiograph)."
            ),
            "NEET PG": (
                "Juvenile nasopharyngeal angiofibroma (JNA): Pathology, demographic profile, and biopsy avoidance",
                "Locally aggressive benign vascular tumor in adolescent males presenting with recurrent unprovoked massive unilateral epistaxis and nasal obstruction; biopsy is strictly contraindicated due to catastrophic hemorrhage.",
                "Arises from the sphenopalatine foramen; imaging demonstrates anterior bowing of the posterior maxillary sinus wall (Holman-Miller sign); managed by preoperative embolization and endoscopic resection."
            ),
            "MRCP": (
                "Sudden sensorineural hearing loss (SSNHL): Definition, audiometry, and urgent corticosteroid therapy",
                "Acute sensorineural hearing loss >= 30 dB across at least 3 contiguous frequencies developing over <= 72 hours, treated immediately with high-dose oral prednisone or intratympanic steroids.",
                "SSNHL is an otologic emergency; starting systemic corticosteroids within 2 weeks of onset significantly improves functional hearing salvage by attenuating inner ear cochlear inflammation."
            ),
            "MRCEM": (
                "Inhaled and aspirated foreign bodies in children: Airway localization and rigid bronchoscopy",
                "Sudden choking episode followed by asymmetric breath sounds, localized unilateral wheeze, and air-trapping/hyperinflation on expiratory chest radiography, requiring urgent rigid bronchoscopy.",
                "Peanuts and seeds lodge predominantly in the wider, steeper right mainstem bronchus; a ball-valve mechanism traps air distally, resulting in mediastinal shift to the opposite side on expiration."
            ),
            "SMLE": (
                "Vocal cord paralysis etiology: Left recurrent laryngeal nerve palsy and mediastinal evaluation",
                "Hoarseness and weak breathy voice with left vocal cord fixed in the paramedian position, warranting CT of the neck and chest along the entire anatomical course of the left recurrent laryngeal nerve.",
                "The left recurrent laryngeal nerve loops around the aortic arch near the ligamentum arteriosum; mediastinal adenopathy, bronchogenic carcinoma, or aortic aneurysm cause vocal cord palsy (Ortner syndrome)."
            ),
            "HAAD / DHA": (
                "Perichondritis and auricular hematoma: Evacuation protocol and prevention of cauliflower ear",
                "Fluctuant tense subperichondrial blood collection over the anterior pinna following blunt ear trauma, requiring needle aspiration or incision, bolus compression bolster dressing, and prophylactic antibiotics.",
                "Cartilage depends on diffusion from the overlying perichondrium for metabolic sustenance; an untreated hematoma leads to avascular necrosis of the cartilage, fibrocartilaginous proliferation, and 'cauliflower ear'."
            ),
            "UHS MBBS": (
                "Rinne and Weber tuning fork tests: Interpretation in conductive versus sensorineural hearing loss",
                "Conductive hearing loss: Rinne test negative (bone conduction > air conduction in affected ear), Weber lateralizes to the affected ear; sensorineural loss: Rinne positive, Weber lateralizes to normal ear.",
                "In conductive loss, impaired ambient air conduction enhances acoustic sensitivity to bone vibrations in the affected ear, lateralizing the Weber tone to the diseased side."
            )
        }
    },

    # Domain 154: Orthopedic Trauma & Acute Compartment Syndrome
    {
        "id": "domain_154_orthopedic_trauma",
        "entity": "Acute compartment syndrome, open fracture management, and pelvic ring disruption",
        "hallmark": "pain out of proportion to injury, pain exacerbated by passive stretch, tense woody compartment swelling, paresthesias, hemodynamically unstable pelvic fracture, or bone protruding through skin",
        "system": "Musculoskeletal",
        "ref_key": "ortho_trauma",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Microvascular pathophysiology and tissue perfusion pressure in acute compartment syndrome",
                "Elevated interstitial tissue pressure within a closed osteofascial space exceeding capillary perfusion pressure, causing postcapillary venular collapse, progressive ischemia, and muscle necrosis.",
                "Cellular ischemia damages endothelial integrity, causing secondary capillary leak and swelling, compounding elevated compartmental pressure in a self-perpetuating cycle."
            ),
            "Step 2 CK": (
                "Diagnostic threshold and emergency surgical fasciotomy in acute compartment syndrome",
                "Measuring delta pressure (diastolic blood pressure minus intracompartmental pressure) <= 30 mm Hg as the definitive threshold for emergency emergent two-incision four-compartment fasciotomy.",
                "Absence of peripheral pulses is an ominous late sign signifying irreversible gangrenous tissue death; early fasciotomy within 6 hours prevents permanent Volkmann ischemic contracture and amputation."
            ),
            "Step 3": (
                "Open fracture antimicrobial prophylaxis and surgical debridement: Gustilo-Anderson classification",
                "Immediate administration of IV cefazolin (Gustilo I/II) plus an aminoglycoside (Gustilo III), with emergent operative debridement and stabilization within 12-24 hours.",
                "Gustilo-Anderson grade III open fractures (high-energy, extensive soft tissue stripped, contaminated) carry severe osteomyelitis risks, requiring broad Gram-positive and Gram-negative antimicrobial coverage."
            ),
            "PLAB / UKMLA": (
                "Hemodynamically unstable pelvic fracture: Pelvic binder placement and interventional embolization",
                "Immediate application of a commercial pelvic circumferential compression binder centered over the greater trochanters to reduce pelvic volume, followed by pelvic angiography and transcatheter arterial embolization.",
                "Over 85% of pelvic fracture hemorrhage originates from the low-pressure retroperitoneal presacral venous plexus and cancellous bone edges; mechanical pelvic closure tamponades retroperitoneal bleeding."
            ),
            "AMC": (
                "Fat embolism syndrome clinical triad and supportive critical care management",
                "Triad of hypoxemic respiratory insufficiency, neurological disorientation/confusion, and petechial rash over the axillae and conjunctiva developing 24-72 hours after long bone fractures.",
                "Fat globules released into systemic circulation cause microvascular mechanical occlusion and are hydrolyzed by tissue lipases into toxic free fatty acids, inducing acute respiratory distress syndrome."
            ),
            "MCCQE": (
                "Posterior hip dislocation: Clinical deformity, sciatic nerve compromise, and emergent closed reduction",
                "Shortened, internally rotated, and adducted lower extremity with high risk of sciatic nerve neuropraxia and femoral head avascular necrosis, requiring immediate closed reduction under sedation within 6 hours.",
                "Tension on the ascending cervical branches of the medial femoral circumflex artery risks irreversible osteonecrosis of the femoral head if joint reduction is delayed beyond 6 hours."
            ),
            "FCPS": (
                "Supracondylar humeral fracture in children: Gartland classification and Volkmann ischemic contracture",
                "Gartland type III displaced supracondylar fracture endangering the brachial artery and anterior interosseous nerve (AIN), requiring urgent closed reduction and percutaneous K-wire pin fixation.",
                "Inability to make the 'OK sign' (flexion of the distal phalanges of the thumb and index finger) indicates anterior interosseous nerve injury; absent radial pulse warrants emergent reduction."
            ),
            "NLE": (
                "Signs of peripheral nerve injury in upper extremity fractures: Radial, Median, and Ulnar",
                "Radial nerve injury (wrist drop, sensory loss over first dorsal web space) in midshaft humeral fractures; median nerve injury in distal radius Colles fracture; ulnar nerve injury (claw hand) in medial epicondyle fracture.",
                "The radial nerve wraps tightly around the mid-humeral spiral groove; displaced fractures can entrap or lacerate the nerve, producing paralysis of wrist and finger extensor musculature."
            ),
            "NEET PG": (
                "Anterior vs posterior shoulder dislocation: Radiographic signs and associated anatomical lesions",
                "Anterior dislocation (abducted, externally rotated arm with subcoracoid displacement, Hill-Sachs and Bankart lesions); posterior dislocation (internally rotated, adducted arm, 'lightbulb sign' on AP radiograph).",
                "Posterior shoulder dislocation is notoriously missed and is classically precipitated by violent generalized epileptic seizures or high-voltage electrical shock causing overwhelming internal rotator muscle spasm."
            ),
            "MRCP": (
                "Rhabdomyolysis-induced acute kidney injury: Myoglobinuria, urinary casts, and volume resuscitation",
                "Massive skeletal muscle breakdown releasing myoglobin into circulation, leading to dark tea-colored urine (orthotolidine positive without RBCs on microscopy), treated with high-volume IV crystalloid hydration.",
                "Intraluminal myoglobin precipitates with Tamm-Horsfall protein in distal tubules under acidic conditions, causing direct tubular cytotoxicity and renal vasoconstriction; maintaining high urine output is protective."
            ),
            "MRCEM": (
                "Traumatic extremity amputation and replantation transport protocol",
                "Wrapping the amputated part in sterile gauze moistened with isotonic saline, placing it in a sealed waterproof plastic bag, and storing the bag on an ice-water slurry without direct contact with ice.",
                "Direct contact between the amputated tissue and ice or hypotonic fluid causes tissue freezing, ice-crystal cellular lysis, and maceration, permanently destroying microvascular anastomosis feasibility."
            ),
            "SMLE": (
                "Damage control orthopedics (DCO) versus early total care (ETC) in unstable polytrauma",
                "Employing rapid temporary external fixation and soft tissue debridement rather than definitive prolonged open reduction and internal fixation in hemodynamically unstable or acidotic polytrauma patients.",
                "Prolonged initial operative stress in critically ill patients ('the second hit') compounds systemic inflammatory response syndrome (SIRS), hypothermia, coagulopathy, and mortality."
            ),
            "HAAD / DHA": (
                "Ottawa Ankle and Knee Rules: Indications for emergency radiographic imaging",
                "Indications for ankle radiography: bone tenderness along the posterior edge of the distal 6 cm of the lateral or medial malleolus, or inability to bear weight both immediately and for 4 steps in the ED.",
                "Validated Ottawa Rules demonstrate near 100% sensitivity for identifying clinically significant malleolar fractures, significantly reducing unnecessary healthcare radiation exposure and costs."
            ),
            "UHS MBBS": (
                "Scaphoid bone fracture: Anatomical snuffbox tenderness, retrograde blood supply, and avascular necrosis",
                "Tenderness elicited over the anatomical snuffbox and scaphoid tubercle following a fall on an outstretched hand (FOOSH), requiring thumb spica immobilization even if initial plain radiographs appear normal.",
                "The scaphoid receives its blood supply from branches of the radial artery entering distally and running retrogradely; proximal pole fractures carry high rates of delayed union and avascular necrosis."
            )
        }
    },

    # Domain 155: Rheumatologic Emergencies & Vasculitides
    {
        "id": "domain_155_rheumatologic_emergencies",
        "entity": "ANCA-associated vasculitis, scleroderma renal crisis, and macrophage activation syndrome",
        "hallmark": "rapidly progressive glomerulonephritis with pulmonary hemorrhage (pulmonary-renal syndrome), malignant hypertension with acute renal failure in systemic sclerosis, or persistent fever with cytopenias and extreme hyperferritinemia",
        "system": "Musculoskeletal",
        "ref_key": "rheumatology",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Medicine",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Autoantibody targets in ANCA-associated vasculitides: Proteinase-3 versus Myeloperoxidase",
                "Cytoplasmic ANCA (c-ANCA) targeting proteinase-3 (PR3) in granulomatosis with polyangiitis (GPA), versus perinuclear ANCA (p-ANCA) targeting myeloperoxidase (MPO) in microscopic polyangiitis.",
                "Anti-neutrophil cytoplasmic antibodies bind cytokine-primed neutrophils, stimulating aberrant degranulation, production of reactive oxygen species, and necrotizing endothelial destruction of small vessels."
            ),
            "Step 2 CK": (
                "Granulomatosis with polyangiitis (GPA) clinical triad and high-potency immunosuppression",
                "Triad of necrotizing upper airway granulomas (saddle-nose, sinusitis), cavitary pulmonary nodules, and crescentic necrotizing glomerulonephritis, treated with high-dose corticosteroids and rituximab or cyclophosphamide.",
                "Rituximab (anti-CD20 monoclonal antibody) achieves clinical remission non-inferior to cyclophosphamide, depleting autoreactive B-cell precursors and lowering circulating PR3-ANCA titers."
            ),
            "Step 3": (
                "Scleroderma renal crisis (SRC): ACE inhibitor emergency rescue and corticosteroid contraindication",
                "Abrupt onset of accelerated hypertension, acute kidney injury, and microangiopathic hemolytic anemia in diffuse cutaneous systemic sclerosis, treated with rapid titration of oral captopril.",
                "Corticosteroids (> 15 mg/day prednisone) trigger scleroderma renal crisis; captopril inhibits intrarenal angiotensin II generation, reversing intense renal vasoconstriction and preserving glomeruli."
            ),
            "PLAB / UKMLA": (
                "Macrophage activation syndrome (MAS / secondary HLH) in systemic juvenile idiopathic arthritis",
                "Persistent high spiking fever, hepatosplenomegaly, pancytopenia, marked hyperferritinemia (> 10,000 ng/mL), hypertriglyceridemia, and hypofibrinogenemia, treated with high-dose corticosteroids and anakinra.",
                "MAS is a life-threatening hyperinflammatory storm driven by uncontrolled activation of T-lymphocytes and hemophagocytic macrophages hypersecreting IL-1, IL-6, and interferon-gamma."
            ),
            "AMC": (
                "Acute gouty arthritis versus septic arthritis joint aspiration diagnostic standard",
                "Synovial fluid analysis demonstrating negatively birefringent needle-shaped monosodium urate crystals under polarized microscopy, with gram stain and culture mandatory to exclude co-existing septic arthritis.",
                "Cloudy purulent fluid with synovial leukocyte counts > 50,000/uL requires microbiological culture; polarizing microscopy reveals yellow crystals parallel to the slow axis of the red compensator."
            ),
            "MCCQE": (
                "Lupus nephritis: ISN/RPS classification, renal biopsy indications, and mycophenolate mofetil",
                "Persistent proteinuria (> 0.5 g/day) or active urinary sediment in systemic lupus erythematosus requiring percutaneous renal biopsy to identify class III/IV proliferative nephritis, treated with mycophenolate.",
                "Class IV diffuse proliferative lupus nephritis carries the highest risk of chronic renal failure; induction immunosuppression with mycophenolate mofetil or cyclophosphamide induces remission."
            ),
            "FCPS": (
                "Polyarteritis nodosa (PAN) pathology, hepatitis B association, and microaneurysm imaging",
                "Transmural necrotizing inflammation of medium-sized muscular arteries sparing the pulmonary vasculature, associated with chronic Hepatitis B infection and microaneurysms on mesenteric angiography.",
                "Fibrinoid necrosis of the arterial wall causes vascular weakness and microaneurysm formation alternating with stenosis ('string of pearls' appearance on visceral catheter angiography)."
            ),
            "NLE": (
                "Clinical distinction between rheumatoid arthritis and osteoarthritis",
                "Rheumatoid arthritis presents with symmetrical polyarthritis of MCP and PIP joints sparing DIP joints, with prolonged morning stiffness (> 1 hour); osteoarthritis affects DIP joints (Heberden nodes) with brief stiffness.",
                "Rheumatoid arthritis is an autoimmune synovitis causing pannus formation, bone erosions, and joint subluxation; osteoarthritis is a degenerative mechanical disease of articular cartilage with subchondral sclerosis."
            ),
            "NEET PG": (
                "Antiphospholipid syndrome (APS) clinical criteria, laboratory antibodies, and anticoagulation",
                "Vascular thrombosis or recurrent pregnancy morbidity with persistent lupus anticoagulant, anticardiolipin antibodies, or anti-beta-2 glycoprotein I antibodies, treated with lifelong warfarin (target INR 2.0-3.0).",
                "Direct oral anticoagulants (DOACs) are inferior to warfarin and contraindicated in high-risk triple-positive antiphospholipid syndrome due to significantly higher arterial thromboembolic recurrence."
            ),
            "MRCP": (
                "Eosinophilic granulomatosis with polyangiitis (EGPA / Churg-Strauss syndrome)",
                "Triad of severe adult-onset asthma, peripheral blood eosinophilia (> 1,000/uL), and necrotizing small-vessel vasculitis (mononeuritis multiplex, pulmonary infiltrates) with p-ANCA (anti-MPO) positivity.",
                "Tissue eosinophilic infiltration and extravascular granulomas damage peripheral nerve vasa nervorum, producing acute foot drop or wrist drop (mononeuritis multiplex) responsive to systemic corticosteroids."
            ),
            "MRCEM": (
                "Acute monoarthritis emergency evaluation: Excluding septic arthritis and empiric antibiotics",
                "Emergency arthrocentesis for joint aspiration of a hot, swollen, acutely tender knee prior to antibiotics, initiating intravenous flucloxacillin or vancomycin for suspected Staphylococcus aureus infection.",
                "Failure to aspirate the joint prior to antimicrobial administration diminishes culture yield; delay in joint decompression and antibiotic initiation causes chondrolysis and permanent articular destruction within 48 hours."
            ),
            "SMLE": (
                "Behçet disease clinical manifestations, pathergy testing, and immunosuppressive therapy",
                "Recurrent painful oral aphthous ulcers, genital ulcers, relapsing anterior or posterior uveitis, and positive pathergy test (sterile pustule developing 48 hours after needle prick), treated with azathioprine or anti-TNF.",
                "Behçet disease is a systemic variable-vessel vasculitis with prominent venous thrombosis and arterial aneurysms; oral colchicine treats mucocutaneous lesions, while systemic immunosuppressants preserve ocular vision."
            ),
            "HAAD / DHA": (
                "Screening for latent tuberculosis and viral hepatitis prior to initiating biologic DMARDs",
                "Mandatory pre-treatment screening with interferon-gamma release assay (IGRA / Quantiferon) and hepatitis B serologies before initiating TNF-alpha inhibitors (infliximab, adalimumab).",
                "TNF-alpha is critical for macrophage activation and granuloma maintenance; blocking TNF disorganizes granulomatous defenses, triggering fulminant reactivation of latent tuberculosis and viral hepatitis."
            ),
            "UHS MBBS": (
                "Pathophysiological basis of morning stiffness in inflammatory vs non-inflammatory arthritis",
                "Inflammatory arthritis causes nighttime accumulation of inflammatory cytokines, fluid, and fibrin within the synovial cavity ('gel phenomenon'), taking > 30-60 minutes of physical activity to disperse.",
                "In non-inflammatory osteoarthritis, mechanical joint stiffness is transient (< 15-30 minutes) and improves quickly with initial gentle range of motion, but worsens with prolonged weight-bearing."
            )
        }
    },

    # Domain 156: Geriatric Medicine & Polypharmacy
    {
        "id": "domain_156_geriatric_medicine",
        "entity": "Frailty, delirium versus dementia, anticholinergic burden, and geriatric polypharmacy",
        "hallmark": "acute fluctuating disturbance in attention and awareness (delirium), progressive insidious loss of multiple cognitive domains with preserved alertness (dementia), or recurrent mechanical falls with multiple psychotropic drugs",
        "system": "General Principles",
        "ref_key": "geriatrics_clinical",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Medicine",
            "other": "Geriatrics"
        },
        "concepts": {
            "Step 1": (
                "Pharmacokinetic alterations of aging: Hepatic clearance, body composition, and GFR decline",
                "Decreased total body water and increased body fat expanding volume of distribution for lipophilic drugs, combined with age-related decline in nephron mass, renal clearance, and phase I cytochrome P450 oxidation.",
                "Lipophilic drugs (e.g., long-acting benzodiazepines) have prolonged elimination half-lives in elderly patients, leading to progressive drug accumulation, cognitive clouding, ataxia, and falls."
            ),
            "Step 2 CK": (
                "Delirium clinical diagnosis, reversible etiology workup, and non-pharmacological management",
                "Applying the Confusion Assessment Method (CAM), identifying underlying medical triggers (infection, electrolyte derangement, polypharmacy), and implementing multi-component non-pharmacological interventions.",
                "CAM diagnosis requires acute onset and fluctuating course, inattention, plus either disorganized thinking or altered consciousness; non-pharmacological care (reorientation, sleep hygiene) is superior to antipsychotics."
            ),
            "Step 3": (
                "American Geriatrics Society Beers Criteria: Deprescribing high-risk medications in older adults",
                "Systematically discontinuing potentially inappropriate medications including first-generation antihistamines (diphenhydramine), tertiary TCAs, long-acting benzodiazepines, and sliding-scale insulin.",
                "Beers Criteria medications have high anticholinergic, sedative, and hypoglycemic risks that significantly outweigh clinical benefits in older adults, precipitating delirium, urinary retention, and hip fractures."
            ),
            "PLAB / UKMLA": (
                "Comprehensive Geriatric Assessment (CGA) and multidisciplinary falls risk reduction",
                "Executing a structured multidimensional CGA evaluating medical comorbidities, functional ADLs, gait velocity, polypharmacy, home hazards, and prescribing vitamin D and physical therapy balance exercises.",
                "NICE guidelines demonstrate that multidisciplinary CGA significantly improves independence, reduces long-term institutionalization, and decreases recurrent fragility fracture hospitalizations."
            ),
            "AMC": (
                "Anticholinergic burden and cognitive impairment in older multimorbid patients",
                "Quantifying cumulative anticholinergic cognitive burden from multiple concurrently prescribed agents (oxybutynin, amitriptyline, paroxetine), which precipitates acute urinary retention and delirium.",
                "Central cholinergic pathways are essential for hippocampal memory retrieval and attention; blocking central muscarinic receptors sharply accelerates cognitive decline in early neurodegenerative disorders."
            ),
            "MCCQE": (
                "Capacity assessment in older adults: Decisional capacity versus global mental incompetence",
                "Evaluating decision-specific capacity (understanding the condition, appreciating consequences, reasoning through choices, communicating a consistent decision) rather than relying on global cognitive screening scores.",
                "A patient with mild-to-moderate dementia (low MMSE/MoCA) may retain decision-specific capacity to consent to or decline a specific medical procedure if they understand the immediate risks and benefits."
            ),
            "FCPS": (
                "Fragility hip fractures in older patients: Orthogeriatric co-management and early surgery",
                "Comprehensive orthogeriatric co-management with surgical fixation or hemiarthroplasty within 24 to 48 hours of admission to reduce 30-day mortality, pressure injuries, and thromboembolism.",
                "Delays beyond 48 hours for non-critical medical optimization significantly increase 1-year mortality, hospital-acquired pneumonia, and loss of independent pre-fracture ambulation."
            ),
            "NLE": (
                "Clinical distinction between delirium, dementia, and depression (the 3 Ds of geriatrics)",
                "Delirium features acute onset, fluctuating course, and impaired attention; dementia features insidious onset, progressive memory loss, and intact alertness; depression features prominent psychomotor slowing and subjective cognitive complaints.",
                "In geriatric depression ('pseudodementia'), patients frequently answer questions with 'I don't know' and demonstrate distress over cognitive deficits, whereas dementia patients confabulate and minimize symptoms."
            ),
            "NEET PG": (
                "Normal pressure hydrocephalus (NPH) triad, Evans index, and tap test response",
                "Clinical triad of gait apraxia ('magnetic' wide-based gait), urinary incontinence, and cognitive decline ('wet, wacky, and wobbly'), with ventricular enlargement out of proportion to sulcal atrophy.",
                "High-volume lumbar puncture (30-50 mL CSF removal) producing demonstrable objective improvement in gait velocity confirms NPH and predicts positive clinical response to ventriculoperitoneal shunting."
            ),
            "MRCP": (
                "Lewy body dementia: Core clinical features, visual hallucinations, and neuroleptic sensitivity",
                "Fluctuating cognition, recurrent well-formed vivid visual hallucinations, spontaneous parkinsonism, and REM sleep behavior disorder, accompanied by extreme, potentially fatal neuroleptic sensitivity.",
                "First-generation antipsychotics cause catastrophic irreversible parkinsonian rigidity, acute neuroleptic malignant syndrome, and increased mortality due to profound hypersensitivity of striatal D2 receptors."
            ),
            "MRCEM": (
                "Hypoactive delirium in the emergency department: Diagnostic under-recognition and workup",
                "Recognizing quiet, withdrawn, lethargic older patients with hypoactive delirium frequently misattributed to depression or fatigue, screening with 4AT, and performing targeted septic and metabolic workup.",
                "Hypoactive delirium accounts for over 50% of geriatric delirium cases and carries higher 6-month mortality than hyperactive delirium because subtle cognitive inattention goes uninvestigated."
            ),
            "SMLE": (
                "Prescribing cascades in elderly patients: Recognition and deprescribing strategy",
                "Identifying prescribing cascades where an adverse drug reaction is misdiagnosed as a new medical condition, prompting addition of a second drug (e.g., amlodipine ankle edema treated with furosemide).",
                "Systematically evaluating new symptoms as potential adverse effects of existing drugs breaks the prescribing cascade, reducing medication costs, electrolyte disturbances, and adverse drug events."
            ),
            "HAAD / DHA": (
                "Pressure injury staging, preventive nursing bundles, and non-blanchable erythema",
                "Identifying Stage 1 pressure injury (non-blanchable erythema of intact skin over bony prominence), implementing every-2-hour repositioning schedules, pressure-relieving foam mattresses, and nutritional support.",
                "Sustained capillary occlusion exceeding 32 mm Hg produces localized tissue ischemia and deep tissue injury within 2 hours; preventive pressure offloading is the cornerstone of geriatric skin integrity."
            ),
            "UHS MBBS": (
                "Postural (orthostatic) hypotension diagnostic criteria and non-pharmacological management",
                "Sustained reduction in systolic BP >= 20 mm Hg or diastolic BP >= 10 mm Hg within 3 minutes of standing from supine position, managed with fluid optimization, compressive stockings, and slow positional changes.",
                "Age-related blunting of carotid sinus baroreceptor reflex sensitivity and decreased vascular compliance impair compensatory vasoconstriction upon standing, predisposing older adults to syncopal falls."
            )
        }
    },

    # Domain 157: Clinical Pharmacology & Pharmacokinetics
    {
        "id": "domain_157_clinical_pharmacology",
        "entity": "Cytochrome P450 interactions, narrow therapeutic index drugs, and renal dosing adjustments",
        "hallmark": "prolonged INR and bleeding following antimicrobial therapy in warfarin patient, acute digoxin toxicity with visual changes and bradycardia following clarithromycin, or supratherapeutic phenytoin toxicity",
        "system": "General Principles",
        "ref_key": "clinical_pharm",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Pharmacology",
            "FCPS": "Medicine",
            "UHS MBBS": "Pharmacology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Cytochrome P450 isoenzyme induction versus competitive inhibition kinetics",
                "Enzyme inducers (rifampin, carbamazepine, St. John's wort) upregulate CYP mRNA gene transcription over days, while competitive inhibitors (ketoconazole, clarithromycin, cimetidine) cause immediate enzyme inhibition.",
                "Inhibition of CYP3A4 or CYP2C9 immediately decreases clearance of co-administered substrates, causing acute drug accumulation, whereas enzyme induction requires new protein synthesis taking 1-2 weeks."
            ),
            "Step 2 CK": (
                "Warfarin drug-drug interactions: CYP2C9 inhibitors and bleeding risk management",
                "Co-administration of metronidazole, trimethoprim-sulfamethoxazole, or amiodarone inhibiting CYP2C9 metabolism of active S-warfarin, causing supratherapeutic INR and life-threatening bleeding.",
                "Managing acute life-threatening warfarin bleeding requires immediate cessation of warfarin, intravenous phytomenadione (vitamin K1), and 4-factor prothrombin complex concentrate (4F-PCC)."
            ),
            "Step 3": (
                "Therapeutic drug monitoring and toxicity of narrow therapeutic index drugs: Digoxin",
                "Monitoring serum digoxin trough levels (target 0.5-0.9 ng/mL), recognizing hypokalemia-induced exacerbation of digitalis toxicity, and administering digoxin-specific Fab antibody fragments for severe toxicity.",
                "Digoxin competes with potassium for binding to myocardial Na+/K+-ATPase; hypokalemia increases digoxin myocardial binding, triggering delayed afterdepolarizations, bidirectional VT, and AV block."
            ),
            "PLAB / UKMLA": (
                "Gentamicin and vancomycin therapeutic drug monitoring and renal clearance adjustments",
                "Measuring pre-dose (trough) serum concentrations to ensure adequate clearance and prevent accumulation-related nephrotoxicity and ototoxicity, adjusting dosing intervals based on calculated creatinine clearance.",
                "Gentamicin exhibits concentration-dependent bactericidal killing with once-daily dosing; maintaining trough levels < 1 mg/L allows renal tubular cells to clear the drug, preventing proximal tubular necrosis."
            ),
            "AMC": (
                "Methotrexate toxicity, folate rescue (leucovorin), and interactions with NSAIDs",
                "Concomitant administration of NSAIDs or penicillin reducing methotrexate renal clearance via competition for organic anion transporters (OAT), managed with folinic acid (leucovorin) rescue.",
                "Leucovorin bypasses dihydrofolate reductase (DHFR) inhibition by providing reduced tetrahydrofolate directly, rescuing normal bone marrow and mucosal cells from lethal methotrexate-induced arrest."
            ),
            "MCCQE": (
                "Zero-order versus first-order elimination kinetics: Phenytoin saturation pharmacokinetics",
                "Phenytoin metabolism shifts from first-order linear kinetics to zero-order saturation (Michaelis-Menten) kinetics within the therapeutic concentration window (10-20 mcg/mL).",
                "Once hepatic microsomal CYP2C9 and CYP2C19 enzymes are saturated, a constant amount (not fraction) of drug is cleared per unit time, meaning small dosage increases produce disproportional toxicity."
            ),
            "FCPS": (
                "Bioavailability, volume of distribution, and loading dose calculation principles",
                "Calculating loading dose as (Target Concentration x Volume of Distribution) / Bioavailability, recognizing that loading dose depends exclusively on volume of distribution, independent of clearance.",
                "Maintenance dosing rate depends on drug clearance to maintain steady-state plasma concentrations; changes in renal or hepatic clearance affect maintenance dose, not the initial loading dose."
            ),
            "NLE": (
                "First-pass hepatic metabolism and routes of administration bypassing portal circulation",
                "Sublingual (nitroglycerin), transdermal, and intravenous administration bypass the hepatic portal venous circulation, preventing extensive first-pass presystemic enzymatic clearance.",
                "Oral nitroglycerin undergoes > 90% presystemic clearance by hepatic glutathione-organic nitrate reductase; sublingual absorption drains directly into the superior vena cava, ensuring rapid onset."
            ),
            "NEET PG": (
                "Phase I (Functionalization) versus Phase II (Conjugation) hepatic drug metabolism",
                "Phase I reactions (oxidation, reduction, hydrolysis mediated by microsomal CYP450) yielding polar metabolites; Phase II reactions (glucuronidation, sulfation, acetylation) yielding inactive excretable conjugates.",
                "Elderly patients retain Phase II conjugation pathways relatively intact while Phase I microsomal oxidation declines; drugs metabolized purely by glucuronidation (e.g., lorazepam, oxazepam) are preferred."
            ),
            "MRCP": (
                "Renin-angiotensin system blockade combined with NSAIDs: The 'Triple Whammy' nephrotoxicity",
                "Simultaneous administration of an ACE inhibitor, loop diuretic, and NSAID precipitating acute prerenal renal failure via combined afferent arteriolar constriction and efferent arteriolar vasodilation.",
                "NSAIDs block renal prostaglandins (preventing compensatory afferent arteriolar dilation); ACE inhibitors block angiotensin II (preventing efferent arteriolar constriction), causing sudden glomerular collapse."
            ),
            "MRCEM": (
                "Acute local anesthetic systemic toxicity (LAST): Bupivacaine and 20% intravenous lipid emulsion",
                "Severe perioral numbness, metallic taste, auditory tinnitus followed by refractory ventricular arrhythmias and cardiac arrest following regional nerve block, treated with 20% lipid emulsion (Intralipid).",
                "Bupivacaine is highly lipophilic and dissociates slowly from myocardial sodium channels; lipid emulsion acts as a 'lipid sink' sequestering local anesthetic from myocardial and cerebral tissues."
            ),
            "SMLE": (
                "Theophylline toxicity: Phosphodiesterase inhibition, adenosine receptor antagonism, and charcoal",
                "Nausea, vomiting, supraventricular tachycardias, and refractory seizures precipitated by concurrent CYP1A2 inhibitor administration (ciprofloxacin), managed with repeated oral activated charcoal.",
                "Ciprofloxacin competitively inhibits CYP1A2, rapidly doubling serum theophylline levels; multidose activated charcoal accelerates clearance via gastrointestinal dialysis."
            ),
            "HAAD / DHA": (
                "Steady-state plasma drug concentration kinetics and half-life elimination rules",
                "Attaining steady-state plasma concentration (Css) requires approximately 4 to 5 elimination half-lives under constant-rate continuous intravenous infusion or regular intermittent dosing.",
                "Elimination half-life (t1/2 = 0.693 x Vd / CL) dictates the time to achieve steady-state and the duration required for complete drug elimination (97% eliminated after 5 half-lives) upon drug cessation."
            ),
            "UHS MBBS": (
                "Agonist pharmacodynamics: Potency versus efficacy on dose-response curves",
                "Efficacy is the maximal therapeutic effect a drug can produce (Emax, reflected on the vertical axis), whereas potency is the dose required to produce 50% of the maximal effect (EC50, horizontal axis).",
                "A competitive antagonist shifts the agonist dose-response curve to the right (increasing EC50 without changing Emax); a non-competitive antagonist depresses the maximal efficacy response (reducing Emax)."
            )
        }
    }
]
