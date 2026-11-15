"""
Mega Data Part X: Domains 145 to 150 (Gynecologic Endocrinology, Neurosurgery Vascular, Neurosurgery Oncology/Spine, Severe Drug Eruptions, Tropical Medicine, Quality & Safety)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_X = [
    # Domain 145: Reproductive Endocrinology & Infertility (PCOS, Endometriosis, ART)
    {
        "id": "domain_145_gynecologic_endocrinology",
        "entity": "Polycystic ovary syndrome (PCOS), endometriosis, and assisted reproductive technology",
        "hallmark": "oligomenorrhea or amenorrhea with clinical hirsutism and cystic acne, severe cyclic dysmenorrhea, dyspareunia, and chronic pelvic pain, or subfertility with multiple small peripheral ovarian follicles",
        "system": "Pregnancy",
        "ref_key": "reproductive_endo",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Obstetrics",
            "FCPS": "Obstetrics",
            "UHS MBBS": "Obstetrics",
            "other": "Obstetrics"
        },
        "concepts": {
            "Step 1": (
                "Neuroendocrine and steroidogenic pathophysiology of polycystic ovary syndrome (PCOS)",
                "Increased GnRH pulse frequency driving disproportionate LH hypersecretion over FSH, stimulating ovarian theca cells to synthesize excess androstenedione and testosterone.",
                "Hyperinsulinemia secondary to peripheral insulin resistance suppresses hepatic sex hormone-binding globulin (SHBG) synthesis, markedly increasing biologically active free circulating testosterone."
            ),
            "Step 2 CK": (
                "Rotterdam consensus diagnostic criteria and first-line ovulation induction in PCOS",
                "Establishing diagnosis requiring >= 2 of 3 features: oligo-/anovulation, clinical/biochemical hyperandrogenism, and polycystic ovaries on ultrasound; letrozole as first-line ovulation induction therapy.",
                "Letrozole (aromatase inhibitor) achieves significantly higher live birth and ovulation rates compared to clomiphene citrate in anovulatory women with PCOS, with lower rates of multiple gestation."
            ),
            "Step 3": (
                "Endometriosis staging, guideline medical suppression, and conservative surgical excision",
                "Combined oral contraceptives or continuous progestins (dienogest, levonorgestrel-IUD) as first-line medical therapy; laparoscopic conservative excision of endometriotic implants and endometriomas for refractory pain.",
                "Endometriosis is an estrogen-dependent chronic inflammatory disease; hormonal suppression induces atrophy of ectopic endometrial implants, while surgical excision clears deep infiltrating lesions and relieves dyspareunia."
            ),
            "PLAB / UKMLA": (
                "Ovarian hyperstimulation syndrome (OHSS) prevention, grading, and acute management",
                "Recognizing abdominal distension, nausea, ascites, hemoconcentration (hematocrit > 45%), and oliguria following hCG trigger; inpatient fluid balancing with intravenous albumin and thromboprophylaxis.",
                "Massive release of vascular endothelial growth factor (VEGF) from hyperstimulated granulosa cells increases capillary permeability; GnRH antagonist protocols with GnRH agonist trigger minimize severe OHSS risk."
            ),
            "AMC": (
                "Endometrial cancer risk and protective strategies in chronic anovulatory PCOS",
                "Unopposed chronic estrogen exposure in the absence of cyclic progesterone-mediated secretory differentiation leading to endometrial hyperplasia and well-differentiated endometrioid adenocarcinoma.",
                "Prescribing cyclic or continuous progestin therapy (or levonorgestrel-releasing intrauterine system) provides essential endometrial protection, reducing malignant transformation risks in amenorrheic patients."
            ),
            "MCCQE": (
                "Initial diagnostic evaluation of female and male factor infertility",
                "Simultaneous evaluation including comprehensive semen analysis for the male partner, confirmation of ovulation (day 21 mid-luteal progesterone), and hysterosalpingography (HSG) to assess tubal patency.",
                "Male factor subfertility accounts for 40-50% of couple subfertility; obtaining a formal semen analysis concurrently with female ovulatory and anatomical assessment avoids unnecessary invasive testing."
            ),
            "FCPS": (
                "Laparoscopic surgical management of ovarian endometrioma (chocolate cyst)",
                "Meticulous laparoscopic stripping of the endometrioma cyst wall (cystectomy) rather than drainage and electrocoagulation to reduce pain recurrence and prevent cyst reformation.",
                "Cystectomy provides superior reduction in dysmenorrhea recurrence and improves spontaneous postoperative conception rates, although careful hemostasis is required to preserve residual ovarian reserve."
            ),
            "NLE": (
                "Clinical manifestations and metabolic associations of polycystic ovary syndrome",
                "Oligomenorrhea, hirsutism (elevated Ferriman-Gallwey score), severe cystic acne, acanthosis nigricans, and obesity, associated with metabolic syndrome, dyslipidemia, and type 2 diabetes mellitus.",
                "Screening with a 2-hour 75-g oral glucose tolerance test (OGTT) and fasting lipid panel is essential in all newly diagnosed PCOS patients due to high prevalence of subclinical impaired glucose tolerance."
            ),
            "NEET PG": (
                "Premature ovarian insufficiency (POI) diagnostic criteria and genetic etiologies",
                "Amenorrhea for >= 4 months before age 40 years accompanied by hypergonadotropic hypogonadism (elevated serum FSH > 25-40 IU/L on two occasions 4 weeks apart) and hypoestrogenism.",
                "Associated with Turner syndrome (45,X), fragile X mental retardation 1 (FMR1) premutation (55-200 CGG repeats), and autoimmune polyendocrinopathy syndromes; requires hormone replacement therapy until age 50."
            ),
            "MRCP": (
                "Hyperprolactinemia diagnostic evaluation: macroprolactin and medication-induced causes",
                "Evaluating elevated serum prolactin by excluding pregnancy, hypothyroidism (elevated TRH), dopamine receptor-blocking neuroleptics/antiemetics, and screening for biologically inactive macroprolactin.",
                "Dopamine agonists (cabergoline preferred over bromocriptine due to superior efficacy and tolerability) are first-line therapy for symptomatic prolactinomas, shrinking adenomas and restoring gonadal function."
            ),
            "MRCEM": (
                "Ovarian torsion emergency diagnosis and laparoscopic detorsion",
                "Sudden-onset severe unilateral lower abdominal or pelvic pain with nausea and vomiting, accompanied by an enlarged ovarian mass and absent venous Doppler flow on transvaginal ultrasound, requiring emergent laparoscopy.",
                "Delayed intervention results in irreversible ovarian ischemic necrosis and loss of fertility; laparoscopic detorsion with ovarian preservation is performed even if the ovary appears dusky or cyanotic."
            ),
            "SMLE": (
                "Preimplantation genetic testing (PGT) indications in assisted reproductive technology",
                "Applying PGT for monogenic disorders (PGT-M) or structural rearrangements (PGT-SR) to select unaffected embryos prior to uterine transfer in couples carrying autosomal recessive or balanced chromosomal translocations.",
                "Trophectoderm biopsy at the blastocyst stage followed by next-generation sequencing identifies genetic aberrations without compromising embryonic inner cell mass viability."
            ),
            "HAAD / DHA": (
                "Lifestyle interventions and metformin in metabolic management of obese PCOS patients",
                "Prescribing structured lifestyle modification with a 5-10% body weight reduction as the cornerstone initial intervention, supplemented by metformin to improve insulin sensitivity and menstrual cyclicity.",
                "Weight loss restores spontaneous ovulatory cycles, improves insulin resistance, lowers free testosterone concentrations, and optimizes maternal metabolic health prior to conception."
            ),
            "UHS MBBS": (
                "Anatomy of the pelvic peritoneum and classical locations of endometriotic implants",
                "Ectopic endometrial glands and stroma predominantly implanting in dependent pelvic compartments: pouch of Douglas (rectovaginal pouch), uterosacral ligaments, posterior uterine surface, and ovaries.",
                "Retrograde menstruation (Sampson hypothesis) deposits viable shed menstrual debris into the peritoneal cavity; cyclic microhemorrhage induces localized peritoneal irritation, fibrosis, and dense pelvic adhesions."
            )
        }
    },

    # Domain 146: Neurosurgery Vascular & Trauma (SAH, Subdural/Epidural, Increased ICP)
    {
        "id": "domain_146_neurosurgery_vascular_trauma",
        "entity": "Aneurysmal subarachnoid hemorrhage (SAH), traumatic brain injury (TBI), and increased intracranial pressure",
        "hallmark": "sudden-onset 'thunderclap' headache ('worst headache of life'), meningismus, photophobia, lucid interval followed by rapid coma after head blow, or Cushing triad (hypertension, bradycardia, irregular breathing)",
        "system": "Nervous System",
        "ref_key": "neurosurgery_vascular",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Berry aneurysm pathology and vascular relations at Circle of Willis bifurcations",
                "Saccular (berry) aneurysm rupture at arterial bifurcations due to congenital absence of the tunica media and internal elastic lamina, most frequently at the anterior communicating artery (ACom) junction.",
                "Hemodynamic shear stress causes aneurysmal outpouching; rupture into the subarachnoid space produces acute elevation of intracranial pressure and meningeal irritation without focal cerebral infarction initially."
            ),
            "Step 2 CK": (
                "Diagnostic sequence in suspected subarachnoid hemorrhage: Non-contrast CT and lumbar puncture",
                "Immediate non-contrast cranial CT within 6 hours of headache onset (near 100% sensitivity); if negative with high clinical suspicion, proceeding to lumbar puncture to test for xanthochromia by spectrophotometry.",
                "Xanthochromia (yellow discoloration of CSF supernatant) results from enzymatic breakdown of extravasated red blood cells into oxyhemoglobin and bilirubin, persisting from 12 hours up to 2 weeks post-hemorrhage."
            ),
            "Step 3": (
                "Delayed cerebral ischemia (vasospasm) prevention and monitoring post-aneurysm securement",
                "Oral nimodipine (60 mg every 4 hours for 21 days), maintenance of euvolemia, and daily transcranial Doppler (TCD) ultrasonography to detect and treat delayed arterial vasospasm.",
                "Nimodipine (dihydropyridine calcium channel blocker) is the only proven pharmacotherapy that reduces poor neurological outcomes and cerebral infarction from delayed vasospasm after aneurysmal SAH."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines for emergency head injury CT head imaging criteria",
                "Urgent non-contrast CT head within 1 hour for any GCS < 13 on initial assessment, GCS < 15 at 2 hours post-injury, suspected open/depressed skull fracture, signs of basal fracture, or > 1 episode of vomiting.",
                "Prompt identification of acute intracranial hematomas (epidural, subdural, intraparenchymal) enables neurosurgical decompression before irreversible brainstem herniation occurs."
            ),
            "AMC": (
                "Epidural versus acute subdural hematoma on cranial non-contrast CT",
                "Epidural hematoma presents as a biconvex (lenticular) hyperdense collection not crossing suture lines (rupture of middle meningeal artery); subdural hematoma presents as a crescentic collection crossing suture lines (bridging veins).",
                "The middle meningeal artery runs beneath the pterion; laceration by a temporal bone fracture causes rapid high-pressure arterial extravasation stripped between the inner skull table and dura mater."
            ),
            "MCCQE": (
                "Emergency medical and hyperosmolar management of acute raised intracranial pressure",
                "Elevating head of bed to 30 degrees, maintaining neutral head alignment, administering intravenous 3% hypertonic saline or 20% mannitol, and avoiding systemic hypotension (MAP > 80 mm Hg).",
                "The Monro-Kellie doctrine states the intracranial volume (brain, CSF, blood) is fixed; expanding mass lesions cause exponential rises in ICP once compensatory CSF and venous displacement are exhausted."
            ),
            "FCPS": (
                "Surgical securement of ruptured cerebral aneurysms: Endovascular coiling versus microsurgical clipping",
                "Early definitive securement of the ruptured aneurysm within 24-48 hours using endovascular platinum coil embolization or open microsurgical titanium clip ligation to prevent lethal rebleeding.",
                "The International Subarachnoid Aneurysm Trial (ISAT) demonstrated reduced 1-year disability and mortality with endovascular coiling for anatomically suitable anterior circulation aneurysms compared to clipping."
            ),
            "NLE": (
                "Cushing triad and clinical signs of transtentorial (uncal) brain herniation",
                "Cushing response (systolic hypertension with widening pulse pressure, bradycardia, and irregular respirations) accompanied by an ipsilateral dilated, fixed pupil (CN III compression) and contralateral hemiparesis.",
                "Medial temporal lobe uncus herniates across the tentorial notch, compressing the ipsilateral third cranial nerve and cerebral peduncle; immediate hyperosmolar therapy and emergency decompressive craniectomy are indicated."
            ),
            "NEET PG": (
                "Basilar skull fracture clinical signs: Battle sign, raccoon eyes, and CSF rhinorrhea/otorrhea",
                "Ecchymosis over the mastoid process (Battle sign), bilateral periorbital ecchymosis without visual trauma (raccoon eyes), and CSF rhinorrhea/otorrhea with beta-2 transferrin confirmation.",
                "Nasogastric tubes are strictly contraindicated in suspected basilar skull fractures due to the catastrophic risk of inadvertent intracranial catheter passage through a cribriform plate fracture."
            ),
            "MRCP": (
                "Hyponatremia after subarachnoid hemorrhage: Cerebral salt wasting (CSW) versus SIADH",
                "Differentiating hypovolemic hyponatremia with excessive natriuresis (cerebral salt wasting treated with isotonic/hypertonic saline and volume expansion) from euvolemic SIADH (treated with fluid restriction).",
                "Fluid restriction in a patient with cerebral salt wasting precipitates severe hypovolemia, triggering cerebral arterial vasospasm and catastrophic stroke; volume status must be rigorously determined."
            ),
            "MRCEM": (
                "Traumatic brain injury emergency resuscitation: Brain Trauma Foundation hemodynamic targets",
                "Maintaining systolic blood pressure >= 100-110 mm Hg and PaO2 >= 60 mm Hg (avoiding hypoxemia and hypotension), aiming for a cerebral perfusion pressure (CPP) between 60 and 70 mm Hg.",
                "Even a single episode of arterial hypotension (systolic BP < 90 mm Hg) or hypoxia (SpO2 < 90%) doubles mortality in severe traumatic brain injury by compounding ischemic secondary brain injury."
            ),
            "SMLE": (
                "Indications and technique for emergency decompressive craniectomy in severe TBI",
                "Large unilateral decompressive hemicraniectomy (at least 12 x 15 cm) with duraplasty for refractory intracranial hypertension (> 20-25 mm Hg) resistant to maximal medical and hyperosmolar therapies.",
                "Removing a large skull bone flap permits external expansion of swollen edematous brain parenchyma, significantly reducing intracranial pressure and aborting fatal transtentorial herniation."
            ),
            "HAAD / DHA": (
                "Pre-hospital spinal motion restriction protocols in blunt multi-trauma resuscitation",
                "Applying a rigid cervical collar, head blocks, and firm backboard immobilization, cleared only after formal clinical NEXUS criteria or Canadian C-Spine Rule evaluation and imaging.",
                "Asymptomatic blunt trauma patients without midline spinal tenderness, intoxication, altered mental status, focal neurological deficit, or painful distracting injury can be safely cleared clinically without imaging."
            ),
            "UHS MBBS": (
                "Glasgow Coma Scale (GCS) components, scoring criteria, and clinical triage",
                "Scoring Eye opening (1 to 4), Verbal response (1 to 5), and Motor response (1 to 6), classifying head injury as mild (GCS 13-15), moderate (GCS 9-12), or severe (GCS <= 8 requiring intubation).",
                "A GCS score of 8 or below signifies loss of protective airway reflexes; immediate definitive airway management with rapid sequence intubation is mandated before transfer or cross-sectional imaging."
            )
        }
    },

    # Domain 147: Neurosurgery Neuro-Oncology & Spinal Pathology
    {
        "id": "domain_147_neurosurgery_oncology_spine",
        "entity": "High-grade gliomas (Glioblastoma), cauda equina syndrome, and cervical spondylotic myelopathy",
        "hallmark": "progressive morning headache with nausea and focal neurological deficit, saddle anesthesia with bilateral sciatica and acute urinary retention, or hand clumsiness with progressive gait spasticity",
        "system": "Nervous System",
        "ref_key": "neurosurgery_spine",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Histopathological hallmarks and molecular biomarkers of glioblastoma (WHO Grade 4)",
                "Densely cellular astrocytic neoplasm with pseudopalisading necrosis and microvascular endothelial proliferation; IDH-wildtype status, EGFR amplification, and TERT promoter mutations.",
                "MGMT (O6-methylguanine-DNA methyltransferase) gene promoter hypermethylation silences DNA repair enzymes, conferring heightened susceptibility to the alkylating chemotherapeutic agent temozolomide."
            ),
            "Step 2 CK": (
                "Cauda equina syndrome emergency diagnosis and immediate surgical decompression",
                "Perianal saddle anesthesia, loss of anal sphincter tone, bilateral radiculopathy, and urinary retention with overflow incontinence, requiring emergent whole-spine MRI and decompressive laminectomy within 24-48 hours.",
                "Cauda equina syndrome is a true neurosurgical emergency; massive central disc herniation compressing the lumbosacral nerve roots causes irreversible urinary incontinence and sexual dysfunction without prompt surgery."
            ),
            "Step 3": (
                "Stupp protocol for newly diagnosed glioblastoma: maximal resection, radiotherapy, and temozolomide",
                "Maximal safe surgical resection followed by concurrent daily temozolomide with fractionated focal external beam radiation therapy, followed by 6 cycles of adjuvant maintenance temozolomide.",
                "The Stupp regimen significantly extends median survival and 2-year survival rates compared to radiation therapy alone, particularly in tumors with epigenetic MGMT promoter methylation."
            ),
            "PLAB / UKMLA": (
                "Red flag symptoms in low back pain warranting urgent whole-spine MRI",
                "Bilateral neurological deficits, progressive motor weakness, perianal saddle anesthesia, new urinary retention or fecal incontinence, history of malignancy, fever, or weight loss.",
                "NICE guidelines mandate immediate emergency whole-spine MRI (not lumbar radiographs) for suspected cauda equina syndrome or metastatic spinal cord compression to preserve neurological function."
            ),
            "AMC": (
                "Cervical spondylotic myelopathy clinical signs and surgical indications",
                "Upper motor neuron signs in lower extremities (spastic wide-based gait, hyperreflexia, positive Babinski/Hoffmann signs) with lower motor neuron signs in upper extremities (hand muscle wasting, impaired dexterity).",
                "Progressive spinal cord compression by degenerative osteophytes or herniated discs warrants anterior cervical discectomy and fusion (ACDF) or posterior laminectomy to arrest neurological deterioration."
            ),
            "MCCQE": (
                "Metastatic spinal cord compression (MSCC) emergency corticosteroid therapy",
                "Administering immediate high-dose intravenous dexamethasone (16 mg bolus followed by 16 mg/day) upon clinical suspicion of spinal cord compression before emergency spinal MRI.",
                "Dexamethasone rapidly reduces vasogenic spinal cord edema, provides immediate pain relief, and halts ischemic neurological compromise while urgent radiation or surgical decompression is coordinated."
            ),
            "FCPS": (
                "Surgical approaches for lumbar disc herniation: Microdiscectomy vs endoscopic decompression",
                "Targeted microdiscectomy utilizing magnification and minimal bone resection (flavectomy and limited hemilaminotomy) to extract the extruded disc fragment and decompress the traversing nerve root.",
                "Minimally invasive tubular microdiscectomy preserves posterior spinal ligamentous integrity and facet joints, minimizing postoperative mechanical instability and chronic myofascial back pain."
            ),
            "NLE": (
                "Clinical distinction between conus medullaris syndrome and cauda equina syndrome",
                "Conus medullaris syndrome presents with sudden-onset bilateral symmetric leg weakness, early bladder/bowel dysfunction, and preserved lower extremity reflexes; cauda equina presents with gradual asymmetric weakness, radicular pain, and hyporeflexia.",
                "The conus medullaris terminates at the L1-L2 vertebral body level in adults; lesions below L2 affect lower motor neuron nerve roots of the cauda equina, resulting in flaccid paralysis and absent ankle reflexes."
            ),
            "NEET PG": (
                "Meningioma histopathology, cytogenetics, and radiological 'dural tail' sign",
                "Extra-axial, dural-based, well-circumscribed mass showing intense uniform enhancement and a pathognomonic 'dural tail' on MRI; histology reveals whorled spindle cells and calcified psammoma bodies.",
                "Meningiomas arise from arachnoid cap cells, express progesterone receptors, and frequently demonstrate monosomy 22 with loss of the NF2 tumor suppressor gene encoding merlin."
            ),
            "MRCP": (
                "Primary central nervous system lymphoma (PCNSL) diagnosis and methotrexate therapy",
                "Periventricular contrast-enhancing brain lesions in immunocompetent elderly or immunocompromised (HIV) patients, requiring stereotactic brain biopsy and high-dose intravenous methotrexate-based chemotherapy.",
                "Corticosteroids must be withheld prior to biopsy because they induce rapid lymphocytolysis, producing non-diagnostic biopsy specimens; PCNSL is predominantly a diffuse large B-cell lymphoma."
            ),
            "MRCEM": (
                "Acute spinal epidural abscess emergency presentation and diagnostic approach",
                "Triad of severe localized midline back pain, fever, and progressive neurological deficit (weakness, numbness, sphincter dysfunction), diagnosed by emergency contrast-enhanced whole-spine MRI.",
                "Staphylococcus aureus is the most common pathogen; emergent surgical evacuation and drainage combined with targeted intravenous antibiotics are required to prevent permanent paraplegia."
            ),
            "SMLE": (
                "Acoustic neuroma (vestibular schwannoma) clinical hallmarks and audiometric diagnosis",
                "Asymmetric progressive sensorineural hearing loss, unilateral tinnitus, and dysequilibrium arising from the vestibular branch of cranial nerve VIII at the cerebellopontine angle, confirmed by internal auditory canal MRI.",
                "Bilateral vestibular schwannomas are pathognomonic for neurofibromatosis type 2 (NF2 gene on chromosome 22q12); surgical resection, stereotactic radiosurgery, or conservative surveillance are treatment options."
            ),
            "HAAD / DHA": (
                "Conservative versus surgical management guidelines for lumbar radiculopathy (sciatica)",
                "Trial of 6 to 8 weeks of conservative management (analgesia, physical therapy, epidural steroid injections) for uncomplicated lumbar disc herniation without progressive neurological deficit.",
                "More than 80-90% of acute lumbar disc herniations resolve spontaneously through macrophage-mediated enzymatic resorption of the extruded nucleus pulposus without surgical intervention."
            ),
            "UHS MBBS": (
                "Clinical examination of the lumbar spine: Straight Leg Raise (Lasegue) and crossed SLR tests",
                "Passive straight leg raising producing reproduction of shooting radicular pain below the knee between 30 and 70 degrees (positive SLR test, high sensitivity for L4-S1 nerve root compression).",
                "The crossed (contralateral) straight leg raise test—where elevating the asymptomatic leg reproduces radicular pain in the affected leg—has lower sensitivity but > 90% specificity for disc herniation."
            )
        }
    },

    # Domain 148: Severe Cutaneous Adverse Reactions (SJS/TEN, DRESS, AGEP)
    {
        "id": "domain_148_severe_cutaneous_adverse_reactions",
        "entity": "Severe cutaneous adverse reactions (SCARs): Stevens-Johnson syndrome (SJS), toxic epidermal necrolysis (TEN), and DRESS syndrome",
        "hallmark": "widespread dusky atypical targetoid macules with positive Nikolsky sign and epidermal detachment, mucosal membrane erosions, or extensive facial edema with morbilliform eruption and eosinophilia",
        "system": "Dermatology",
        "ref_key": "dermatology_severe",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Pathology",
            "FCPS": "Medicine",
            "UHS MBBS": "Medicine",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Immunopathogenesis of Stevens-Johnson syndrome and toxic epidermal necrolysis",
                "Cell-mediated cytotoxic T-lymphocyte (CD8+) and NK-cell reaction mediated by granulysin, perforin, and Fas-Fas ligand (CD95) signaling, inducing widespread keratinocyte apoptosis and full-thickness epidermal detachment.",
                "Granulysin is the primary cytolytic mediator driving widespread epidermal necrosis; subepidermal split occurs at the dermo-epidermal junction with absent dermal inflammatory infiltration."
            ),
            "Step 2 CK": (
                "Clinical distinction between SJS, SJS/TEN overlap, and TEN based on body surface area",
                "Classifying disease by epidermal detachment percentage: Stevens-Johnson syndrome (< 10% BSA detachment), SJS/TEN overlap (10-30% BSA detachment), and toxic epidermal necrolysis (> 30% BSA detachment).",
                "Both entities involve >= 2 mucosal surfaces (oral, ocular, urogenital); immediate cessation of all culprit drugs and prompt transfer to an accredited burn intensive care unit significantly reduces mortality."
            ),
            "Step 3": (
                "SCORTEN prognostic scoring system in toxic epidermal necrolysis",
                "Calculating SCORTEN within the first 24-48 hours using 7 parameters: age >= 40, malignancy, heart rate >= 120, initial epidermal detachment > 10%, BUN > 28 mg/dL, glucose > 252 mg/dL, and bicarbonate < 20 mEq/L.",
                "Each parameter scores 1 point; a SCORTEN score of >= 5 indicates a predicted mortality rate exceeding 90%, guiding family prognostic discussions and aggressive supportive critical care."
            ),
            "PLAB / UKMLA": (
                "DRESS syndrome (Drug Reaction with Eosinophilia and Systemic Symptoms) diagnostic criteria",
                "Triad of severe cutaneous eruption (starting with facial edema), fever, hematologic abnormalities (prominent eosinophilia, atypical lymphocytosis), and visceral involvement (hepatitis, nephritis) 2-8 weeks post-drug.",
                "Common culprit drugs include allopurinol, aromatic antiepileptics (carbamazepine, phenytoin, lamotrigine), and sulfasalazine; therapy requires immediate drug cessation and prolonged systemic corticosteroids."
            ),
            "AMC": (
                "HLA pharmacogenomic screening before initiating high-risk medications",
                "Pre-treatment genetic screening for HLA-B*1502 in Southeast Asian populations before prescribing carbamazepine, and HLA-B*5701 before prescribing abacavir, to prevent catastrophic SJS/TEN and hypersensitivity.",
                "Carrying HLA-B*1502 confers an odds ratio > 100 for developing carbamazepine-induced SJS/TEN; pre-prescription screening in high-risk ancestry has virtually eradicated carbamazepine-induced SJS in compliant regions."
            ),
            "MCCQE": (
                "Ophthalmic emergency management in Stevens-Johnson syndrome and TEN",
                "Emergency ophthalmology evaluation, daily examination, intensive ocular lubrication, topical non-preserved corticosteroids, and early amniotic membrane transplantation to prevent cicatricial blindness.",
                "Epithelial sloughing of the conjunctival surfaces causes pseudomembrane formation, symblepharon, trichiasis, corneal ulceration, and permanent visual loss; early intervention preserves the ocular surface."
            ),
            "FCPS": (
                "Acute Generalized Exanthematous Pustulosis (AGEP) clinical presentation and etiology",
                "Rapid appearance of non-follicular sterile subcorneal pustules arising on an edematous erythematous background within 24-48 hours of antibiotic exposure (aminopenicillins, macrolides), resolving within 2 weeks of drug withdrawal.",
                "Characterized by neutrophilic leukocytosis on blood film and subcorneal spongiform pustules on histopathology; differentiated from generalized pustular psoriasis by acute drug association and rapid spontaneous resolution."
            ),
            "NLE": (
                "Nikolsky sign and Asboe-Hansen sign in bullous skin disorders",
                "Positive Nikolsky sign: mechanical lateral shear stress applied to normal-appearing skin causes epidermal dislodgement; positive Asboe-Hansen sign: gentle downward pressure on an intact bulla causes lateral extension.",
                "A positive Nikolsky sign is characteristic of pemphigus vulgaris and Stevens-Johnson syndrome/TEN; it is negative in bullous pemphigoid, where the subepidermal blisters remain tense and intact."
            ),
            "NEET PG": (
                "Histopathological distinction between SJS/TEN and Staphylococcal Scalded Skin Syndrome (SSSS)",
                "Full-thickness epidermal necrosis with basal layer apoptosis in SJS/TEN, versus superficial intraepidermal cleavage through the stratum granulosum mediated by exfoliative toxins A and B in SSSS.",
                "SSSS typically affects infants and young children, completely spares mucous membranes (no oral or conjunctival ulceration), and exhibits rapid re-epithelialization without scarring because basal stem cells remain intact."
            ),
            "MRCP": (
                "Immunomodulatory therapies in toxic epidermal necrolysis: IVIG, Cyclosporine, and TNF inhibitors",
                "Targeted therapeutic options including intravenous immunoglobulin (IVIG, blocking Fas-mediated apoptosis), cyclosporine (calcineurin inhibition suppressing cytotoxic T cells), and anti-TNF-alpha (etanercept).",
                "Meta-analyses indicate cyclosporine (3-5 mg/kg/day) and etanercept significantly reduce mortality and hasten re-epithelialization in TEN compared to historical supportive care alone."
            ),
            "MRCEM": (
                "Burn center transfer criteria and fluid resuscitation in toxic epidermal necrolysis",
                "Transferring patients with epidermal detachment > 10% BSA to a specialized burn center; fluid resuscitation titrated to maintain urine output 0.5-1.0 mL/kg/hr, using conservative volumes compared to thermal burns.",
                "Overzealous fluid resuscitation in TEN risks pulmonary edema and compounding vasogenic capillary leak; gentle warmed fluid resuscitation and strict barrier isolation protect against fatal hypothermia and sepsis."
            ),
            "SMLE": (
                "Allopurinol hypersensitivity syndrome and HLA-B*5801 association",
                "High risk of severe cutaneous adverse reactions and DRESS syndrome in individuals carrying the HLA-B*5801 allele prescribed allopurinol, particularly in patients with concurrent chronic kidney disease.",
                "Clinical practice guidelines recommend starting allopurinol at low doses (<= 100 mg/day) and titrating upward, with prior HLA-B*5801 testing in high-risk populations (Korean, Han Chinese, Thai ancestry)."
            ),
            "HAAD / DHA": (
                "Wound care protocols for detached epidermis in Stevens-Johnson syndrome / TEN",
                "Conservative non-adherent dressing management, leaving detached epidermal sheets in situ as natural biological biological dressings, avoiding surgical debridement or mechanical scrubbing.",
                "Retaining detached epidermis accelerates re-epithelialization, diminishes evaporative fluid losses, and reduces severe procedural wound pain; petroleum-impregnated or silicone dressings are applied."
            ),
            "UHS MBBS": (
                "Erythema multiforme major versus Stevens-Johnson syndrome distinction",
                "Erythema multiforme typically consists of discrete target lesions with 3 concentric zones on extremities precipitated by Herpes Simplex Virus (HSV) infection, with minimal (< 10%) or absent mucosal sloughing.",
                "SJS represents a distinct systemic, drug-induced life-threatening mucocutaneous necrolysis with atypical flat targetoid macules and extensive epidermal necrosis, historically conflated with EM."
            )
        }
    },

    # Domain 149: Global Health, Emerging Epidemics & Tropical Medicine
    {
        "id": "domain_149_global_health_tropical_medicine",
        "entity": "Tropical infections and emerging epidemics: Severe falciparum malaria, dengue shock syndrome, and Mpox virus infection",
        "hallmark": "cyclical paroxysms of fever with dark urine ('blackwater fever') and cerebral obtundation, defervescence followed by abdominal pain, persistent vomiting, and plasma leakage shock, or prodromal lymphadenopathy followed by centrifugal umbilicated vesiculopustular lesions",
        "system": "General Principles",
        "ref_key": "global_health",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Microbiology",
            "FCPS": "Medicine",
            "UHS MBBS": "Medicine",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Cytoadherence, sequestration, and PfEMP1 pathogenesis in Plasmodium falciparum malaria",
                "Plasmodium falciparum erythrocyte membrane protein 1 (PfEMP1) expressed on red blood cell surface knobs binding to endothelial CD36 and ICAM-1, causing vascular sequestration and cerebral microcirculatory occlusion.",
                "Endothelial cytoadherence prevents parasitized erythrocytes from circulating through the spleen, avoiding splenic macrophage clearance and causing local ischemia, lactic acidosis, and cerebral malaria."
            ),
            "Step 2 CK": (
                "Severe malaria diagnostic criteria and intravenous artesunate first-line therapy",
                "Recognizing severe malaria (parasitemia > 10%, impaired consciousness, severe anemia, acute kidney injury, pulmonary edema) and administering immediate intravenous artesunate as first-line therapy.",
                "Intravenous artesunate produces significantly faster parasite clearance and reduces mortality by 35% compared to intravenous quinine; it is safe in all trimesters of pregnancy."
            ),
            "Step 3": (
                "Dengue fever critical phase monitoring and judicious fluid resuscitation",
                "Identifying the critical phase at the time of defervescence (days 3-7), monitoring for plasma leakage warning signs (rising hematocrit with dropping platelets, severe abdominal pain), and administering isotonic crystalloid boluses.",
                "Plasma leakage into pleural and peritoneal cavities causes hypovolemic shock; aggressive over-transfusion once capillary permeability normalizes precipitates acute fatal pulmonary edema."
            ),
            "PLAB / UKMLA": (
                "Imported falciparum malaria diagnostic workup in returning international travelers",
                "Performing urgent thick and thin blood films (repeated at 12 and 24 hours if initially negative) and rapid diagnostic test (RDT) for Plasmodium falciparum histidine-rich protein 2 (HRP2) in any febrile traveler from an endemic zone.",
                "Fever in a traveler returning from a malaria-endemic region within the past year is an emergency medical condition; thin blood films calculate parasitemia percentage to guide oral versus IV therapy."
            ),
            "AMC": (
                "Primaquine and tafenoquine radical cure in vivax/ovale malaria and G6PD screening",
                "Administering primaquine or single-dose tafenoquine to eradicate dormant hypnozoites in the liver in Plasmodium vivax and Plasmodium ovale, strictly preceded by quantitative G6PD testing.",
                "Primaquine triggers acute severe intravascular hemolysis in patients with glucose-6-phosphate dehydrogenase (G6PD) deficiency; confirming normal enzyme activity is legally and clinically mandatory."
            ),
            "MCCQE": (
                "Mpox (monkeypox) virus clinical presentation, transmission, and tecovirimat therapy",
                "Prodromal fever, profound lymphadenopathy, followed by deep-seated, well-circumscribed, umbilicated vesiculopustular rash progressing simultaneously in a single anatomical area, treated with tecovirimat.",
                "Tecovirimat inhibits the orthopoxvirus VP37 envelope wrapping protein, blocking viral egress; profound lymphadenopathy (submandibular, inguinal) clinically distinguishes mpox from chickenpox (varicella)."
            ),
            "FCPS": (
                "Enteric fever (typhoid) complications, antimicrobial resistance, and ceftriaxone/azithromycin",
                "Step-ladder fever, relative bradycardia (Faget sign), rose spots, and hepatosplenomegaly, complicated by terminal ileal perforation in the third week; treating extensively drug-resistant (XDR) strains with azithromycin or meropenem.",
                "Hypertrophy and necrotizing ulceration of Peyer patches in the terminal ileum predisposes to catastrophic free perforation and peritonitis; emergency primary closure or wedge resection is indicated."
            ),
            "NLE": (
                "Clinical distinction between classical dengue fever and dengue hemorrhagic fever (DHF)",
                "DHF requires all 4 criteria: fever lasting 2-7 days, hemorrhagic manifestations (positive tourniquet test, petechiae), thrombocytopenia (< 100,000/uL), and objective evidence of plasma leakage (hematocrit rise >= 20%).",
                "Dengue shock syndrome (DSS) represents DHF complicated by profound circulatory collapse (narrow pulse pressure <= 20 mm Hg or hypotension), requiring immediate judicious isotonic crystalloid resuscitation."
            ),
            "NEET PG": (
                "Morphological differentiation of Plasmodium species on peripheral blood smear",
                "Plasmodium falciparum (delicate ring forms with multiple rings per RBC, appliqué/accole forms, banana/crescent-shaped gametocytes); P. vivax (enlarged infected RBCs with Schüffner dots and ameboid trophozoites).",
                "Plasmodium malariae infects older erythrocytes showing band-shaped trophozoites and rosette-arranged schizonts; P. ovale shows oval erythrocytes with fimbriated ragged edges and James dots."
            ),
            "MRCP": (
                "Visceral leishmaniasis (Kala-azar) presentation, LD bodies, and liposomal amphotericin B",
                "Chronic irregular fever, massive splenomegaly, pancytopenia, hypergammaglobulinemia, and weight loss, diagnosed by intracellular amastigotes (Leishman-Donovan bodies) on splenic aspirate, treated with liposomal amphotericin B.",
                "Transmitted by the female phlebotomine sandfly; liposomal amphotericin B delivers targeted macrophage uptake with > 95% cure rates and minimal nephrotoxicity compared to sodium stibogluconate."
            ),
            "MRCEM": (
                "Viral hemorrhagic fevers (Ebola, Marburg) emergency isolation and barrier nursing",
                "Rapid implementation of strict contact and droplet precautions with full personal protective equipment (PPE), powered air-purifying respirators, and dedicated negative-pressure isolation for suspected VHF with fever and bleeding.",
                "Filoviruses replicate unchecked in macrophages and dendritic cells, triggering massive pro-inflammatory cytokine storm, microvascular leakage, and widespread disseminated intravascular coagulation."
            ),
            "SMLE": (
                "Middle East Respiratory Syndrome Coronavirus (MERS-CoV) surveillance and infection control",
                "Fever, dry cough, and rapidly progressive pneumonia with history of camel exposure or healthcare setting contact in the Arabian Peninsula, diagnosed by lower respiratory tract RT-PCR.",
                "MERS-CoV binds to the dipeptidyl peptidase 4 (DPP4 / CD26) receptor; strict airborne and contact precautions are mandatory to prevent nosocomial superspreading events in clinical centers."
            ),
            "HAAD / DHA": (
                "Travel medicine pre-travel immunizations: Yellow fever vaccine regulations and contraindications",
                "Administering live-attenuated 17D yellow fever vaccine at least 10 days before travel to endemic zones (yielding International Certificate of Vaccination); contraindicated in severe immunodeficiency and thymus disorders.",
                "Yellow fever vaccine-associated neurotropic disease (YEL-AND) and viscerotropic disease (YEL-AVD) are rare life-threatening adverse events seen predominantly in individuals aged >= 60 years or with thymoma."
            ),
            "UHS MBBS": (
                "Clinical paroxysms of malaria: cold stage, hot stage, and sweating stage",
                "Cold stage (intense shivering and vasoconstriction for 15-60 min), followed by hot stage (burning fever up to 41 C and bounding pulse for 2-6 hrs), resolving with sweating stage (profuse diaphoresis and exhaustion).",
                "Fever paroxysms coincide with the synchronized rupture of mature schizonts from host erythrocytes, releasing merozoites, hemozoin pigment, and pyrogenic cytokines (TNF-alpha, IL-1) into systemic circulation."
            )
        }
    },

    # Domain 150: Clinical Quality Improvement, Patient Safety & Systemic Medical Ethics
    {
        "id": "domain_150_quality_safety_ethics",
        "entity": "Clinical quality improvement, patient safety, and medical error disclosure",
        "hallmark": "near-miss medication discrepancy, wrong-site surgery averted by surgical time-out, root cause analysis (RCA) following sentinel event, or systemic communication breakdown during patient handover (I-PASS)",
        "system": "General Principles",
        "ref_key": "quality_safety",
        "subjects": {
            "Step 1": "Ethics",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Ethics",
            "other": "Ethics"
        },
        "concepts": {
            "Step 1": (
                "Human factors engineering and the Swiss cheese model of medical errors",
                "Systemic latent failures (inadequate staffing, faulty software, poor labeling) aligning with active failures (operator slip or lapse) across multiple defense layers to produce patient harm.",
                "James Reason Swiss cheese model asserts that safety defenses are not impermeable barriers; system-level interventions (forcing functions, standardized checklists) prevent single human errors from reaching patients."
            ),
            "Step 2 CK": (
                "Open, honest, and prompt disclosure of medical errors to patients and families",
                "Disclosing the error promptly to the patient and surrogate, explaining what occurred, the potential consequences, the corrective medical actions undertaken, and systemic measures to prevent recurrence.",
                "Professional ethical standards and hospital policy require full factual disclosure; transparent disclosure maintains physician-patient trust, relieves emotional distress, and does not increase malpractice claims."
            ),
            "Step 3": (
                "Root cause analysis (RCA) methodology following a hospital sentinel event",
                "Conducting an interdisciplinary, non-punitive, systems-focused retrospective investigation using '5 Whys' and fishbone diagrams to identify underlying latent organizational and engineering defects.",
                "RCA focuses on systemic root vulnerabilities rather than individual blame; the Joint Commission mandates RCA for sentinel events (death, permanent harm, wrong-site surgery) to re-engineer clinical workflows."
            ),
            "PLAB / UKMLA": (
                "GMC Good Medical Practice duty of candour and reporting near misses",
                "Statutory duty of candour requiring healthcare professionals to be open and honest when things go wrong, offering a sincere apology, an explanation of events, and documenting the discussion.",
                "Reporting near-miss events (incidents caught before reaching the patient) into national reporting systems (such as Datix) provides critical intelligence to fix latent workflow vulnerabilities."
            ),
            "AMC": (
                "Open disclosure framework and apology legislation in Australian clinical practice",
                "Engaging in open disclosure following an adverse clinical event, providing a sincere expression of sorrow or regret without legally admitting legal liability under state apology legislation.",
                "Apology laws protect expressions of regret from being utilized as an admission of civil negligence, encouraging compassionate, transparent communication between clinicians and injured patients."
            ),
            "MCCQE": (
                "Standardized handover communication protocols (I-PASS) to reduce clinical handover errors",
                "Structured handover utilizing I-PASS (Illness severity, Patient summary, Action list, Situation awareness/contingencies, Synthesis by receiver) during ward transition of care.",
                "Implementation of standardized I-PASS handover bundles significantly reduces medical errors and preventable adverse events by up to 30% without prolonging handover duration."
            ),
            "FCPS": (
                "WHO Surgical Safety Checklist implementation and three critical phases",
                "Universal execution of the 3 distinct phases: Sign In (before induction), Time Out (before skin incision), and Sign Out (before leaving operating room) with verbal multidisciplinary confirmation.",
                "Mandatory pause for Time Out verifies correct patient identity, correct operative site, agreed surgical procedure, antibiotic administration within 60 minutes, and essential imaging displays."
            ),
            "NLE": (
                "Principles of clinical audit cycle and closed-loop quality improvement",
                "Setting evidence-based standards, measuring current clinical practice, comparing results against standards, implementing changes to practice, and re-auditing to verify sustained quality improvement.",
                "A true clinical audit requires closing the audit loop through re-evaluation after organizational change; continuous quality cycles enhance patient safety and healthcare clinical governance."
            ),
            "NEET PG": (
                "Biomedical ethics core principles: Autonomy, Beneficence, Non-maleficence, and Justice",
                "Balancing respect for patient autonomy (informed consent, right to refuse treatment) against beneficence (acting in patient interest), non-maleficence (first do no harm), and distributive justice.",
                "Competent adult patients possess absolute autonomous authority to decline any medical intervention, including life-saving therapies (such as blood transfusions in Jehovah's Witnesses), even if death results."
            ),
            "MRCP": (
                "Plan-Do-Study-Act (PDSA) rapid-cycle improvement methodology in hospital quality improvement",
                "Executing small-scale, iterative PDSA testing cycles to introduce, assess, refine, and sustainably scale clinical workflow changes before institution-wide implementation.",
                "PDSA methodology allows frontline clinical teams to test interventions on a small scale (single patient, single ward shift), learn from rapid feedback, and minimize implementation resistance."
            ),
            "MRCEM": (
                "Safety-II principles and psychological safety in high-reliability emergency teams",
                "Fostering a climate of psychological safety where team members feel empowered to speak up and challenge authority when patient safety is compromised, utilizing graded assertiveness (CUS framework).",
                "CUS framework (I am Concerned, I am Uncomfortable, this is a Safety issue) provides standardized escalation language that immediately halts hazardous clinical actions during emergency resuscitation."
            ),
            "SMLE": (
                "Medication reconciliation at care transitions to prevent adverse drug events",
                "Systematically comparing a patient's complete pre-admission home medication list with newly prescribed hospital admission and discharge orders to resolve discrepancies, omissions, and duplications.",
                "More than 50% of medication errors occur during clinical transitions of care; pharmacist-led medication reconciliation significantly decreases preventable adverse drug events and 30-day readmissions."
            ),
            "HAAD / DHA": (
                "Healthcare-Associated Infections (HAI) bundles: Central line-associated bloodstream infection (CLABSI)",
                "Implementing the 5 evidence-based bundle components: maximal sterile barrier precautions, chlorhexidine skin antisepsis, optimal catheter site selection (avoiding femoral vein), daily review of line necessity.",
                "Adherence to standardized insertion and maintenance bundles reduces CLABSI rates by > 70-80%, transforming catheter care from variable individual practice into a high-reliability safety culture."
            ),
            "UHS MBBS": (
                "Informed consent essential legal and ethical requirements: Capacity, Information, Voluntariness",
                "Valid consent requires decision-making capacity (ability to understand, retain, weigh, and communicate), provision of adequate risk-benefit information and alternatives, and absence of external coercion.",
                "In emergency situations where an incapacitated patient faces immediate threat to life or limb and surrogate decision-makers are unavailable, the doctrine of implied consent legally authorizes emergency intervention."
            )
        }
    }
]
