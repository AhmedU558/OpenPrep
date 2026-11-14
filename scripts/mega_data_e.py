"""
Mega Data Part E: Domains 26 to 32 (Infectious Diseases & Systemic Infections)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_E = [
    # Domain 26: Sepsis and Septic Shock
    {
        "id": "domain_26_sepsis",
        "entity": "sepsis and septic shock",
        "hallmark": "refractory hypotension, serum lactate 4.2 mmol/L, oliguria, and altered mental status despite initial fluid bolus",
        "system": "General Principles",
        "ref_key": "who_sepsis",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Lipopolysaccharide-mediated toll-like receptor 4 activation",
                "Lipopolysaccharide (endotoxin) lipid A binding to TLR4 on macrophages triggering NF-kB transcription and massive release of TNF-alpha, IL-1, and IL-6.",
                "Endotoxin (LPS from Gram-negative bacterial outer membrane) binds CD14/TLR4, activating the NF-kB pathway to produce overwhelming systemic inflammatory vasodilation."
            ),
            "Step 2 CK": (
                "Initial crystalloid resuscitation and norepinephrine infusion",
                "Administration of 30 mL/kg balanced crystalloids within 3 hours and initiation of norepinephrine as first-line vasopressor to maintain MAP >= 65 mm Hg.",
                "Guideline-directed septic shock protocol dictates prompt IV crystalloid boluses and immediate norepinephrine infusion when mean arterial pressure remains below 65 mm Hg."
            ),
            "Step 3": (
                "ICU hemodynamic monitoring and post-sepsis recovery care",
                "Arterial line placement for continuous blood pressure monitoring, de-escalation of antibiotics based on blood cultures, and monitoring for critical illness myopathy.",
                "Post-resuscitation care requires invasive arterial line monitoring, targeted antimicrobial stewardship, and screening for post-sepsis cognitive and physical debility."
            ),
            "PLAB / UKMLA": (
                "Immediate implementation of the Sepsis Six care bundle",
                "Delivery of the Sepsis Six within 1 hour: high-flow oxygen, blood cultures, IV broad-spectrum antibiotics, IV fluid challenge, measure lactate, and monitor urine output.",
                "NICE guidelines mandate initiating the Sepsis Six protocol within 60 minutes of recognizing red-flag sepsis to reduce in-hospital mortality."
            ),
            "AMC": (
                "Early broad-spectrum empiric IV antibiotics and resuscitation",
                "Immediate collection of peripheral blood cultures followed by intravenous piperacillin-tazobactam and fluid resuscitation within 60 minutes.",
                "Australian sepsis guidelines mandate taking blood cultures without delaying empiric broad-spectrum antibiotic administration beyond the first hour."
            ),
            "MCCQE": (
                "Targeted volume resuscitation and serial lactate clearance",
                "Fluid resuscitation with balanced crystalloid solutions and serial serum lactate measurements every 2 to 4 hours to guide resuscitation adequacy.",
                "Canadian emergency consensus emphasizes measuring lactate clearance as a reliable surrogate for resolving tissue hypoperfusion in septic shock."
            ),
            "FCPS": (
                "Urgent source control and central venous catheterization",
                "Identification of the infectious focus, rapid surgical drainage or debridement within 12 hours, and placement of central venous access.",
                "In surgical sepsis, definitive source control via percutaneous or operative drainage is mandatory alongside active hemodynamic stabilization."
            ),
            "NLE": (
                "First-line vasopressor therapy with norepinephrine",
                "Norepinephrine continuous infusion titrated to maintain a mean arterial pressure of at least 65 mm Hg.",
                "National licensing standards identify norepinephrine as the primary vasopressor of choice for fluid-refractory septic shock."
            ),
            "NEET PG": (
                "Norepinephrine as drug of choice for septic shock",
                "Norepinephrine due to potent alpha-1 vasoconstriction with modest beta-1 inotropic support restoring vascular tone without excessive tachycardia.",
                "NEET PG landmark pharmacology dictates norepinephrine as the first-line agent, superior to dopamine which carries higher arrhythmogenic risk."
            ),
            "MRCP": (
                "Refractory septic shock and low-dose hydrocortisone therapy",
                "Intravenous hydrocortisone 200 mg daily in divided doses or continuous infusion for shock refractory to high-dose vasopressor therapy.",
                "Landmark trials (ADRENAL, APROCCHSS) demonstrate that adjuvant low-dose hydrocortisone accelerates shock reversal in vasopressor-dependent septic shock."
            ),
            "MRCEM": (
                "Rapid primary survey resuscitation and peripheral vasopressor start",
                "Initiation of peripheral norepinephrine infusion via a dedicated proximal venous line while establishing central access and fluid resuscitation.",
                "Emergency resuscitation guidelines permit starting dilute peripheral norepinephrine early to avoid protracted hypoperfusion during cannulation."
            ),
            "SMLE": (
                "Protocolized sepsis screening and bundle compliance",
                "Blood cultures prior to broad-spectrum antimicrobial administration and rapid administration of 30 mL/kg balanced crystalloid solution.",
                "Saudi MOH sepsis guidelines emphasize rapid bundle execution within 1 hour to prevent progression to multi-organ failure."
            ),
            "HAAD / DHA": (
                "Screening for organ dysfunction using the SOFA score",
                "Assessment of Sequential Organ Failure Assessment (SOFA) score change >= 2 points indicating sepsis-induced organ dysfunction.",
                "UAE health authority standards adopt Sepsis-3 consensus definitions utilizing the SOFA criteria for inpatient mortality risk stratification."
            ),
            "UHS MBBS": (
                "Peripheral blood smear and acute phase reactants in severe sepsis",
                "Toxic granulation and Döhle bodies in neutrophils with marked neutrophilic leukocytosis and bandemia on peripheral smear.",
                "Classic hematological signs of severe bacterial infection include toxic granulation, cytoplasmic vacuolation, and Dohle bodies in neutrophils."
            )
        }
    },

    # Domain 27: Community-Acquired Pneumonia
    {
        "id": "domain_27_cap",
        "entity": "community-acquired pneumonia",
        "hallmark": "productive cough with rust-colored sputum, pleuritic chest pain, bronchial breath sounds, and lobar consolidation on chest radiograph",
        "system": "Respiratory",
        "ref_key": "nice_pneumonia",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Streptococcus pneumoniae polysaccharide capsule and IgA protease",
                "Encapsulated Gram-positive lancet-shaped diplococci possessing an antiphagocytic polysaccharide capsule and IgA protease facilitating mucosal colonization.",
                "Streptococcus pneumoniae is the leading cause of lobar pneumonia, using its polysaccharide capsule to evade phagocytosis and IgA protease to adhere to mucosal surfaces."
            ),
            "Step 2 CK": (
                "Severity stratification with CURB-65 and empiric dual therapy",
                "Calculation of CURB-65 score to determine inpatient vs outpatient admission and initiating ceftriaxone plus azithromycin for hospitalized patients.",
                "Current ATS/IDSA guidelines recommend combination beta-lactam plus macrolide or respiratory fluoroquinolone monotherapy for hospitalized non-ICU pneumonia."
            ),
            "Step 3": (
                "Clinical stability criteria and switch to oral antimicrobials",
                "Transitioning to oral amoxicillin-clavulanate or azithromycin once afebrile for 48 hours with normalized heart rate, blood pressure, and respiratory rate.",
                "Discharge criteria include achieving clinical stability (normal vitals, oral intake, baseline mentation) and completing a minimum of 5 total days of therapy."
            ),
            "PLAB / UKMLA": (
                "CURB-65 scoring and NHS guideline-directed antimicrobial choice",
                "Stratification by CURB-65 score: score 0-1 for home treatment with oral amoxicillin; score >= 2 for inpatient admission with amoxicillin plus clarithromycin.",
                "NICE guidelines stratify pneumonia severity by CURB-65 (Confusion, Urea > 7, RR >= 30, BP < 90/60, Age >= 65) to direct hospital admission and antibiotics."
            ),
            "AMC": (
                "Diagnostic sputum examination and Australian therapeutic antibiotic guidelines",
                "Sputum Gram stain and culture, urinary pneumococcal and Legionella antigen tests, and empiric IV benzylpenicillin plus doxycycline.",
                "Australian therapeutic guidelines recommend benzylpenicillin plus doxycycline for moderate community-acquired pneumonia requiring hospitalization."
            ),
            "MCCQE": (
                "Outpatient vs inpatient triage and vaccination counseling",
                "Applying the Pneumonia Severity Index (PSI) to direct outpatient care with amoxicillin or doxycycline, and scheduling pneumococcal vaccination at recovery.",
                "Canadian medical objectives focus on risk scoring to avoid unnecessary hospitalizations and promoting pneumococcal and influenza vaccines upon discharge."
            ),
            "FCPS": (
                "Evaluation for parapneumonic effusion and diagnostic thoracentesis",
                "Performance of diagnostic thoracentesis with pleural fluid analysis (pH, glucose, LDH, Gram stain) to rule out complicated parapneumonic effusion or empyema.",
                "Pneumonia complicated by significant pleural fluid requires prompt pleural sampling to distinguish uncomplicated effusion from empyema needing tube thoracostomy."
            ),
            "NLE": (
                "First-line oral antibiotic therapy for mild community-acquired pneumonia",
                "Oral amoxicillin 500 mg to 1 g three times daily for 5 days as first-line empiric monotherapy.",
                "National licensing guidelines prioritize high-dose oral amoxicillin as the standard first-line treatment for uncomplicated community-acquired pneumonia in adults."
            ),
            "NEET PG": (
                "Atypical pneumonia features and macrolide drug of choice",
                "Mycoplasma pneumoniae presenting with cold agglutinins, hemolytic anemia, erythema multiforme, and treated with azithromycin.",
                "NEET PG high-yield focus highlights Mycoplasma pneumoniae causing atypical pneumonia with elevated cold agglutinins (IgM) successfully treated with macrolides."
            ),
            "MRCP": (
                "Legionella pneumophila severe pneumonia and diagnostic urinary antigen",
                "Legionella pneumonia presenting with hyponatremia, diarrhea, elevated transaminases, confirmed via urinary antigen test, and treated with levofloxacin.",
                "MRCP examinations frequently test severe atypical pneumonia from Legionella pneumophila, characterized by multisystem signs and confirmed by rapid urinary antigen."
            ),
            "MRCEM": (
                "Acute hypoxic respiratory failure and high-flow nasal oxygen therapy",
                "Initiation of supplemental high-flow nasal cannula (HFNC) oxygen therapy to maintain SpO2 92-96% while preparing for potential ventilatory escalation.",
                "Emergency resuscitation in severe pneumonia prioritizes heated, humidified high-flow nasal oxygen to reduce the work of breathing and avoid early intubation."
            ),
            "SMLE": (
                "Comprehensive diagnostic workup including blood and sputum cultures",
                "Collecting paired blood cultures and sputum Gram stain/culture before initiating empiric intravenous ceftriaxone plus clarithromycin.",
                "Saudi licensing guidelines emphasize obtaining pre-treatment microbiological specimens in all hospitalized pneumonia cases to facilitate targeted de-escalation."
            ),
            "HAAD / DHA": (
                "Middle East Respiratory Syndrome (MERS-CoV) screening in severe CAP",
                "Screening for travel history, camel contact, and obtaining nasopharyngeal swab for reverse-transcriptase PCR under droplet and contact isolation.",
                "UAE health authorities mandate screening for MERS-CoV in patients presenting with severe acute respiratory infection and specific regional epidemiologic exposures."
            ),
            "UHS MBBS": (
                "Pathological stages of lobar pneumonia",
                "Red hepatization characterized by alveolar exudate rich in erythrocytes, neutrophils, and fibrin strands creating a firm, liver-like pulmonary consistency.",
                "Classic pathology describes four consecutive stages of lobar pneumonia: congestion, red hepatization, gray hepatization, and resolution."
            )
        }
    },

    # Domain 28: Infective Endocarditis
    {
        "id": "domain_28_endocarditis",
        "entity": "infective endocarditis",
        "hallmark": "new regurgitant cardiac murmur, fluctuating low-grade fever, splinter hemorrhages in nailbeds, and Osler nodes on finger pulps",
        "system": "Cardiovascular",
        "ref_key": "nice_acs",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Dextran-mediated adherence of Viridans group streptococci to fibrin-platelet nidus",
                "Viridans streptococci synthesizing extracellular dextrans to adhere to pre-existing endothelial lesions and fibrin-platelet microthrombi on damaged heart valves.",
                "Streptococcus viridans (e.g., S. mutans, S. sanguinis) produces dextrans that adhere to platelet-fibrin complexes on damaged valves, typically after dental procedures."
            ),
            "Step 2 CK": (
                "Modified Duke criteria and transesophageal echocardiography",
                "Three sets of blood cultures obtained from separate venipuncture sites followed by transesophageal echocardiography (TEE) to detect valvular vegetations.",
                "Diagnosis of infective endocarditis requires fulfillment of modified Duke criteria; TEE offers superior sensitivity (> 90%) over transthoracic echocardiography."
            ),
            "Step 3": (
                "Prolonged parenteral antibiotic therapy and outpatient parenteral antimicrobial therapy (OPAT)",
                "Administration of 4 to 6 weeks of targeted IV bactericidal therapy (e.g., ceftriaxone or penicillin G +/- gentamicin) with outpatient PICC line surveillance.",
                "Management necessitates prolonged intravenous bactericidal therapy guided by minimum inhibitory concentrations (MIC) with rigorous line care monitoring."
            ),
            "PLAB / UKMLA": (
                "NICE antimicrobial prophylaxis guidance and diagnostic blood cultures",
                "Three separate blood cultures taken at least 1 hour apart prior to empiric IV ampicillin plus flucloxacillin and gentamicin.",
                "UK guidelines emphasize that routine antibiotic prophylaxis is no longer universally recommended for dental procedures, prioritizing strict diagnostic workup."
            ),
            "AMC": (
                "Indications for urgent surgical valve intervention in native valve endocarditis",
                "Emergency or urgent cardiac valve replacement for acute heart failure due to severe valvular regurgitation, persistent bacteremia, or large mobile vegetations > 10 mm.",
                "Australian cardiology consensus outlines valve surgery indications: refractory pulmonary edema/cardiogenic shock, fungal/resistant organisms, and mobile vegetations > 10 mm."
            ),
            "MCCQE": (
                "Staphylococcus aureus endocarditis in people who inject drugs",
                "High suspicion for tricuspid valve involvement presenting with septic pulmonary emboli, multiple cavitary lung nodules, and empiric IV vancomycin.",
                "In patients who inject drugs, Staphylococcus aureus frequently damages the tricuspid valve, seeding the pulmonary circulation with septic emboli."
            ),
            "FCPS": (
                "Surgical management of annular abscess and heart block",
                "Prompt surgical aortic root debridement and valve replacement when new PR prolongation indicates perivalvular extension forming an aortic root abscess.",
                "Perivalvular abscess extension, indicated by new conduction blocks on ECG, is a surgical emergency requiring radical debridement and valve reconstruction."
            ),
            "NLE": (
                "Empiric antibiotic therapy for acute native valve endocarditis",
                "Intravenous vancomycin combined with ceftriaxone to cover methicillin-resistant Staph aureus, viridans streptococci, and HACEK organisms.",
                "National licensing curricula recommend empiric IV vancomycin plus third-generation cephalosporin for acute native valve endocarditis while awaiting cultures."
            ),
            "NEET PG": (
                "Duke criteria major versus minor criteria differentiation",
                "Two positive blood cultures with typical organisms and vegetation on echocardiography constituting two major Duke criteria establishing definitive diagnosis.",
                "NEET PG questions focus on distinguishing major Duke criteria (typical microbiology and endocardial involvement) from minor criteria (fever, vascular/immunologic phenomena)."
            ),
            "MRCP": (
                "Streptococcus gallolyticus (bovis) endocarditis and occult colonic neoplasia",
                "Streptococcus gallolyticus bacteremia warranting complete colonoscopy to detect occult colorectal adenoma or adenocarcinoma.",
                "MRCP clinical scenarios link Streptococcus bovis / gallolyticus endocarditis to occult gastrointestinal lesions, mandating colonoscopic investigation."
            ),
            "MRCEM": (
                "Acute aortic regurgitation leading to fulminant pulmonary edema",
                "Early recognition of acute severe aortic valve destruction, urgent afterload reduction with nitroprusside, and avoidance of intra-aortic balloon pump.",
                "In acute severe aortic regurgitation from endocarditis, wide pulse pressure may be absent due to elevated LV end-diastolic pressure; urgent surgical consultation is critical."
            ),
            "SMLE": (
                "Dental clearance and prevention of recurrent endocarditis",
                "Comprehensive dental examination, extraction of unsalvageable teeth, and patient education on meticulous oral hygiene.",
                "Saudi licensing guidelines stress addressing chronic dental sources of bacteremia to prevent reinfection after completing curative antibiotic courses."
            ),
            "HAAD / DHA": (
                "Prosthetic valve endocarditis and empiric triple therapy",
                "Intravenous vancomycin, gentamicin, and oral rifampin for early prosthetic valve endocarditis covering coagulase-negative staphylococci.",
                "Prosthetic valve endocarditis within 12 months of implantation requires rifampin-containing triple therapy to penetrate staphylococcal biofilms."
            ),
            "UHS MBBS": (
                "Pathology of non-bacterial thrombotic endocarditis and Libman-Sacks endocarditis",
                "Libman-Sacks endocarditis characterized by sterile, non-destructive verrucous vegetations on both surfaces of the mitral and aortic valves associated with SLE.",
                "Undergraduate pathology highlights Libman-Sacks endocarditis in systemic lupus erythematosus, featuring sterile vegetations on both leaflet surfaces without valve destruction."
            )
        }
    },

    # Domain 29: Central Nervous System Infections (Meningitis)
    {
        "id": "domain_29_meningitis",
        "entity": "acute bacterial meningitis",
        "hallmark": "high fever, severe holocranial headache, photophobia, nuchal rigidity, and positive Kernig and Brudzinski signs",
        "system": "Nervous System",
        "ref_key": "nice_meningitis",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Neisseria meningitidis virulence factors and lipooligosaccharide (LOS)",
                "Gram-negative diplococci with polysaccharide capsule, IgA protease, and lipooligosaccharide (LOS) driving intense vascular permeability and petechial purpura.",
                "Neisseria meningitidis LOS endotoxin activity correlates directly with severity of meningococcemia, septic shock, and Waterhouse-Friderichsen adrenal hemorrhage."
            ),
            "Step 2 CK": (
                "Lumbar puncture timing, CT indications, and empiric antimicrobial regimen",
                "Administering empiric IV ceftriaxone, vancomycin, and dexamethasone immediately, performing CT head prior to LP only if focal signs, papilledema, or coma are present.",
                "Antimicrobial therapy must never be delayed for neuroimaging; dexamethasone should be given before or with the first antibiotic dose in suspected pneumococcal meningitis."
            ),
            "Step 3": (
                "Chemoprophylaxis for close contacts of meningococcal disease",
                "Oral rifampin, single-dose ciprofloxacin, or intramuscular ceftriaxone for all household and close respiratory contacts within 24 hours.",
                "Post-exposure prophylaxis for close contacts of meningococcal meningitis eradicates nasopharyngeal carriage and interrupts secondary transmission chains."
            ),
            "PLAB / UKMLA": (
                "Pre-hospital parenteral benzylpenicillin and NHS public health notification",
                "Immediate intramuscular or intravenous benzylpenicillin in primary care for suspected meningococcal disease with a non-blanching rash before urgent hospital transfer.",
                "UK guidelines recommend urgent pre-hospital benzylpenicillin if meningococcal disease is suspected in community settings, followed by statutory public health notification."
            ),
            "AMC": (
                "Cerebrospinal fluid analysis differentiating bacterial from viral meningitis",
                "CSF findings demonstrating marked neutrophilic pleocytosis (> 1000/mcL), significantly elevated protein (> 1 g/L), and low CSF-to-serum glucose ratio (< 0.4).",
                "Australian guidelines highlight CSF profiles: bacterial meningitis causes high neutrophils, elevated protein, and low glucose; viral meningitis shows lymphocytic predominance with normal glucose."
            ),
            "MCCQE": (
                "Listeria monocytogenes in extremes of age and ampicillin coverage",
                "Addition of IV ampicillin to empiric ceftriaxone and vancomycin in patients older than 50 years or immunocompromised to cover Listeria monocytogenes.",
                "Listeria monocytogenes has inherent cephalosporin resistance; empiric coverage in elderly or immunocompromised patients mandates adding ampicillin."
            ),
            "FCPS": (
                "Neurosurgical management of subdural empyema and intracranial abscess",
                "Urgent craniotomy or burr-hole evacuation of subdural empyema when contrast-enhanced MRI demonstrates extra-axial purulent collection.",
                "Subdural empyema is a surgical emergency; expanding collections cause rapid brain herniation and require urgent surgical drainage alongside antibiotics."
            ),
            "NLE": (
                "First-line empiric therapy and role of adjunctive dexamethasone",
                "Intravenous ceftriaxone 2 g every 12 hours plus dexamethasone 10 mg every 6 hours initiated before or with the first antibiotic dose.",
                "National licensing standards emphasize high-dose third-generation cephalosporins and adjunctive dexamethasone to prevent sensorineural hearing loss in pneumococcal meningitis."
            ),
            "NEET PG": (
                "Herpes simplex encephalitis CSF features and IV acyclovir",
                "Temporal lobe hemorrhagic necrosis on MRI, lymphocytic CSF with elevated erythrocytes, and prompt treatment with high-dose intravenous acyclovir.",
                "NEET PG high-yield neuroscience identifies HSV-1 encephalitis targeting temporal lobes with CSF PCR confirmation and urgent IV acyclovir to prevent fatal necrosis."
            ),
            "MRCP": (
                "Tuberculous meningitis CSF findings and stage-directed therapy",
                "Marked lymphocytic pleocytosis, very high protein (> 1.5 g/L), markedly low glucose (< 30% of blood), and treatment with 12 months of anti-TB drugs plus oral dexamethasone.",
                "MRCP questions test tuberculous meningitis, where adjunctive systemic corticosteroids are proven to reduce mortality and neurological sequelae."
            ),
            "MRCEM": (
                "Management of status epilepticus and cerebral edema in acute meningitis",
                "Immediate IV lorazepam for seizure cessation, 3% hypertonic saline or mannitol for intracranial hypertension, and targeted temperature management.",
                "Emergency resuscitation in fulminant meningitis requires simultaneous seizure termination, neuroprotective airway management, and hyperosmolar therapy for herniation."
            ),
            "SMLE": (
                "Meningococcal conjugate vaccination for Hajj and Umrah pilgrims",
                "Quadrivalent meningococcal conjugate vaccine (MenACWY) administered at least 10 days prior to arrival for pilgrimage visa compliance.",
                "Saudi health regulations mandate quadrivalent meningococcal vaccination for all Hajj and Umrah pilgrims to prevent international outbreaks of serogroups A, C, W, and Y."
            ),
            "HAAD / DHA": (
                "Cryptococcal meningitis in immunocompromised patients",
                "Induction therapy with intravenous liposomal amphotericin B plus flucytosine for at least 2 weeks, followed by consolidation with oral fluconazole.",
                "UAE infectious disease guidelines recommend amphotericin B and flucytosine with serial therapeutic lumbar punctures to manage raised intracranial pressure."
            ),
            "UHS MBBS": (
                "CSF gross appearance and opening pressure in bacterial meningitis",
                "Turbid or purulent CSF with markedly elevated opening pressure (> 200 mm H2O) reflecting severe leptomeningeal inflammation and vascular engorgement.",
                "Undergraduate pathology emphasizes physical inspection of CSF: cloudy purulent fluid with high opening pressure signifies pyogenic bacterial infection."
            )
        }
    },

    # Domain 30: Tuberculosis and Mycobacterial Disease
    {
        "id": "domain_30_tuberculosis",
        "entity": "pulmonary and extrapulmonary tuberculosis",
        "hallmark": "chronic cough for four weeks, night sweats, significant weight loss, hemoptysis, and apical cavitary infiltrates on chest radiography",
        "system": "Respiratory",
        "ref_key": "who_tb",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Cord factor virulence and caseating granulomatous response",
                "Mycobacterium tuberculosis possessing trehalose 6,6'-dimycolate (cord factor) which inhibits macrophage phagosome-lysosome fusion and induces TNF-alpha release.",
                "Cord factor allows mycobacteria to grow in serpentine cords, directly contributing to virulence by inhibiting leukocyte migration and inducing chronic granulomatous inflammation."
            ),
            "Step 2 CK": (
                "Diagnostic sputum testing with GeneXpert MTB/RIF and standard RIPE therapy",
                "Three sputum specimens for acid-fast bacilli smear and GeneXpert nucleic acid amplification, followed by 2 months of rifampin, isoniazid, pyrazinamide, and ethambutol.",
                "GeneXpert enables rapid confirmation of M. tuberculosis and rifampin resistance within 2 hours; standard intensive therapy utilizes four drugs for 2 months then 2 drugs for 4 months."
            ),
            "Step 3": (
                "Directly observed therapy (DOT) and monitoring of medication toxicity",
                "Enrollment in directly observed therapy, baseline and monthly liver function testing, visual acuity testing for ethambutol, and pyridoxine to prevent neuropathy.",
                "Comprehensive TB management requires DOT to ensure adherence and prevent drug resistance, alongside co-prescription of pyridoxine (vitamin B6) with isoniazid."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines for latent TB screening and contact tracing",
                "Interferon-gamma release assay (IGRA) or tuberculin skin test for close contacts, followed by chest X-ray to exclude active disease before latent TB therapy.",
                "NICE guidelines mandate contact tracing using IGRA; active disease is treated with 6-month combination therapy, whereas latent TB uses 3 months of rifampin/isoniazid."
            ),
            "AMC": (
                "Multidrug-resistant TB (MDR-TB) management and public health notification",
                "Isolate showing resistance to both isoniazid and rifampin, requiring second-line regimen with bedaquiline, linezolid, and fluoroquinolones under specialist care.",
                "Australian guidelines classify MDR-TB as resistance to at least isoniazid and rifampin, requiring mandatory public health notification and second-line oral regimens."
            ),
            "MCCQE": (
                "Screening refugees and immigrants for latent vs active tuberculosis",
                "Screening with chest radiograph; positive findings require three consecutive morning sputum smears and airborne isolation in negative-pressure rooms.",
                "Canadian immigration medical examination protocols emphasize chest radiograph screening followed by microbiological confirmation before community integration."
            ),
            "FCPS": (
                "Tuberculous lymphadenitis (Scrofula) and surgical biopsy indications",
                "Fine-needle aspiration cytology or excisional biopsy demonstrating caseating granulomas and Langhans giant cells in persistent cervical lymphadenopathy.",
                "Extrapulmonary tuberculous lymphadenitis requires tissue diagnosis with AFB staining and GeneXpert; surgical intervention is reserved for diagnostic biopsy or sinus drainage."
            ),
            "NLE": (
                "First-line anti-tubercular drug adverse effects and organ monitoring",
                "Isoniazid causing peripheral neuropathy and hepatotoxicity; rifampin causing orange discoloration of bodily fluids and drug interactions via CYP induction.",
                "National licensing exams frequently test RIPE side effects: Isoniazid causes peripheral neuropathy, Rifampin induces CYP450, Ethambutol causes retrobulbar neuritis."
            ),
            "NEET PG": (
                "National TB Elimination Program (NTEP) daily fixed-dose combination regimen",
                "Daily fixed-dose combinations (FDCs) stratified by weight bands with 2HRZE intensive phase followed by 4HRE continuation phase.",
                "NEET PG heavily tests NTEP guidelines: transitioning from intermittent to daily weight-banded FDCs with ethambutol included in the continuation phase."
            ),
            "MRCP": (
                "Isoniazid-induced hepatotoxicity and threshold for medication interruption",
                "Immediate discontinuation of hepatotoxic drugs (rifampin, isoniazid, pyrazinamide) if transaminases exceed 5 times the upper limit of normal or 3 times with symptoms.",
                "MRCP clinical guidelines mandate stopping RIPE therapy when ALT/AST > 5x ULN (or > 3x with jaundice/symptoms) and sequentially reintroducing drugs after enzyme normalization."
            ),
            "MRCEM": (
                "Massive hemoptysis management in cavitary pulmonary tuberculosis",
                "Positioning patient with bleeding lung down, securing airway with large-bore endotracheal tube, and arranging urgent bronchial artery embolization.",
                "Emergency resuscitation in massive hemoptysis (> 100-200 mL/24h) from a Rasmussen aneurysm or cavitary TB requires airway protection and urgent catheter angiography."
            ),
            "SMLE": (
                "Tuberculous pleural effusion diagnostic workup and ADA testing",
                "Pleural fluid analysis showing exudate, lymphocytic predominance (> 50%), and elevated adenosine deaminase (ADA > 40 U/L) supporting diagnosis.",
                "Saudi clinical practice uses pleural fluid adenosine deaminase (ADA) as a highly sensitive surrogate marker for tuberculous pleurisy in endemic regions."
            ),
            "HAAD / DHA": (
                "Pre-employment medical residency visa screening for tuberculosis",
                "Mandatory chest radiography for all expatriate residency applicants; active or inactive apical scarring prompts sputum GeneXpert and treatment before clearance.",
                "UAE health screening law mandates chest X-ray screening for all foreign workers to detect and treat active pulmonary tuberculosis prior to visa issuance."
            ),
            "UHS MBBS": (
                "Histopathological features of the Ghon complex and tuberculous granuloma",
                "Subpleural parenchymal Ghon focus with regional hilar lymphadenopathy showing central caseous necrosis surrounded by epithelioid histiocytes and Langhans giant cells.",
                "Classic pathology curriculum defines the Ghon complex as the primary subpleural lesion plus draining lymph node, characterized by caseous necrosis and giant cells."
            )
        }
    },

    # Domain 31: HIV/AIDS and Opportunistic Infections
    {
        "id": "domain_31_hiv",
        "entity": "HIV/AIDS and opportunistic infections",
        "hallmark": "CD4 count 85/mcL, progressive exertional dyspnea, non-productive cough, oral candidiasis, and bilateral ground-glass infiltrates on chest CT",
        "system": "General Principles",
        "ref_key": "cdc_hiv",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "HIV viral entry mechanism via gp120 and CCR5/CXCR4 co-receptors",
                "Viral envelope glycoprotein gp120 binding to host cell CD4 receptor inducing conformational change to interact with CCR5 (macrophage-tropic) or CXCR4 (T-tropic) co-receptors.",
                "HIV-1 entry requires gp120 attaching to CD4 followed by CCR5 or CXCR4 co-receptor engagement, triggering gp41-mediated viral envelope-cell membrane fusion."
            ),
            "Step 2 CK": (
                "Pneumocystis jirovecii pneumonia diagnosis and adjunctive corticosteroid criteria",
                "Diagnosis confirmed by induced sputum or bronchoalveolar lavage with silver stain; treatment with IV TMP-SMX plus adjunctive corticosteroids if PaO2 < 70 mm Hg.",
                "Pneumocystis pneumonia in HIV patients requires high-dose TMP-SMX; adjunctive corticosteroids are indicated when room air PaO2 < 70 mm Hg or A-a gradient >= 35 mm Hg."
            ),
            "Step 3": (
                "Initiation of combined antiretroviral therapy (cART) and immune reconstitution inflammatory syndrome",
                "Starting tenofovir, emtricitabine, and bictegravir (or dolutegravir), while counseling on monitoring for immune reconstitution inflammatory syndrome (IRIS).",
                "Current guidelines recommend universal early cART for all HIV-infected individuals, with careful monitoring for paradoxical worsening of opportunistic infections (IRIS)."
            ),
            "PLAB / UKMLA": (
                "Post-exposure prophylaxis (PEP) within 72 hours of occupational exposure",
                "Initiation of 28 days of tenofovir disoproxil, emtricitabine, and raltegravir (or dolutegravir) within 72 hours of high-risk mucosal or sharps exposure.",
                "UK national guidelines recommend starting four-week triple-therapy PEP ideally within 1-2 hours and strictly within 72 hours of potential HIV exposure."
            ),
            "AMC": (
                "Toxoplasma gondii encephalitis in AIDS and multiple ring-enhancing lesions",
                "Multiple ring-enhancing lesions with surrounding vasogenic edema on contrast MRI in a patient with CD4 < 100/mcL, treated with pyrimethamine and sulfadiazine.",
                "Australian guidelines differentiate CNS toxoplasmosis (multiple basal ganglia lesions) from primary CNS lymphoma, treating empirically with pyrimethamine, sulfadiazine, and folinic acid."
            ),
            "MCCQE": (
                "Pre-exposure prophylaxis (PrEP) evaluation and baseline serological testing",
                "Daily oral tenofovir disoproxil / emtricitabine for individuals at substantial risk, following confirmed negative fourth-generation HIV test and normal renal function.",
                "Canadian guidelines mandate confirming HIV-negative serology and evaluating eGFR and hepatitis B status prior to prescribing tenofovir-based PrEP."
            ),
            "FCPS": (
                "Cytomegalovirus (CMV) colitis and perforation risk in advanced AIDS",
                "Severe bloody diarrhea, colonoscopic punch biopsies showing intranuclear owl-eye inclusion bodies, treated with IV ganciclovir to prevent intestinal perforation.",
                "CMV colitis in advanced AIDS (CD4 < 50/mcL) carries high risk of bowel perforation and hemorrhage, requiring IV ganciclovir and urgent surgical vigilance."
            ),
            "NLE": (
                "Primary antimicrobial prophylaxis thresholds based on CD4 counts",
                "Daily trimethoprim-sulfamethoxazole for CD4 < 200/mcL to prevent Pneumocystis pneumonia and Toxoplasma gondii encephalitis.",
                "National licensing curricula prioritize TMP-SMX as universal prophylaxis once CD4 drops below 200 cells/mcL to protect against PJP and Toxoplasma."
            ),
            "NEET PG": (
                "Classes of antiretroviral drugs and mechanism of integrase inhibitors",
                "Dolutegravir and bictegravir selectively inhibiting HIV integrase strand transfer, preventing insertion of proviral DNA into host chromosomal DNA.",
                "NEET PG pharmacology emphasizes integrase strand transfer inhibitors (INSTIs) as the core anchor of preferred first-line ART due to high barrier to resistance."
            ),
            "MRCP": (
                "Progressive multifocal leukoencephalopathy (PML) and JC virus reactivation",
                "Demyelinating white matter lesions without mass effect or enhancement on MRI in CD4 < 200/mcL caused by JC virus reactivation; management is rapid ART restoration.",
                "MRCP clinical scenarios test PML: focal neurological deficits with non-enhancing subcortical white matter hyperintensities on T2 MRI, responsive only to immune reconstitution with ART."
            ),
            "MRCEM": (
                "Acute cryptococcal meningitis with elevated intracranial pressure",
                "Opening pressure > 250 mm H2O on lumbar puncture, managed with daily therapeutic lumbar punctures to remove CSF until pressure normalizes under amphotericin B therapy.",
                "In emergency care of cryptococcal meningitis, elevated intracranial pressure causes fatal herniation; serial drainage LPs are mandatory alongside antifungals."
            ),
            "SMLE": (
                "Perinatal HIV transmission prevention and elective cesarean section",
                "Antiretroviral therapy throughout pregnancy, elective cesarean section at 38 weeks if viral load > 1000 copies/mL, and avoidance of breastfeeding.",
                "Saudi obstetric consensus recommends scheduled cesarean delivery and IV zidovudine infusion during labor if maternal viral load is unsuppressed near delivery."
            ),
            "HAAD / DHA": (
                "Routine opt-out HIV screening in healthcare facilities",
                "Implementing fourth-generation HIV-1/2 antigen/antibody immunoassay with reflex confirmatory testing for all patients presenting with unexplained weight loss or fever.",
                "UAE health regulations utilize fourth-generation combo testing (detecting p24 antigen and antibodies) for early detection during the acute window period."
            ),
            "UHS MBBS": (
                "Pathology of Kaposi sarcoma and Human Herpesvirus 8 (HHV-8)",
                "Violaceous cutaneous plaques and spindle cell proliferation with slit-like vascular channels containing extravasated erythrocytes driven by HHV-8 infection.",
                "Undergraduate pathology identifies Kaposi sarcoma as an opportunistic vascular neoplasm in AIDS, featuring spindle cells and slit vascular spaces positive for HHV-8."
            )
        }
    },

    # Domain 32: Urinary Tract Infections and Pyelonephritis
    {
        "id": "domain_32_uti",
        "entity": "urinary tract infection and acute pyelonephritis",
        "hallmark": "unilateral flank pain, costovertebral angle tenderness, high fever with rigors, dysuria, and white blood cell casts in urine sediment",
        "system": "Renal",
        "ref_key": "nice_uti",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Uropathogenic Escherichia coli P-fimbriae (pyelonephritis-associated pili)",
                "Uropathogenic E. coli expressing P-fimbriae (pap) that bind galactose-alpha-(1,4)-galactose receptors on uroepithelial cells, facilitating ascension to the renal parenchyma.",
                "Uropathogenic E. coli uses P-fimbriae to adhere to renal tubular epithelial cells, resisting urinary washout and directly causing acute pyelonephritis."
            ),
            "Step 2 CK": (
                "Inpatient versus outpatient treatment for acute pyelonephritis",
                "Hospitalization for IV ceftriaxone or ciprofloxacin in patients with intractable vomiting, high fever, pregnancy, or hemodynamic instability.",
                "Acute pyelonephritis in stable outpatients can be managed with oral ciprofloxacin or levofloxacin; unstable patients or pregnant women require hospital admission for IV therapy."
            ),
            "Step 3": (
                "Management of recurrent uncomplicated urinary tract infections in women",
                "Behavioral modification, post-coital single-dose nitrofurantoin or trimethoprim-sulfamethoxazole, and topical vaginal estrogen in postmenopausal women.",
                "Recurrent UTIs (>= 2 in 6 months or >= 3 in a year) warrant evaluation, post-coital prophylaxis, and vaginal estrogen therapy for postmenopausal genitourinary syndrome."
            ),
            "PLAB / UKMLA": (
                "NICE antimicrobial prescribing guidelines for acute lower UTI",
                "First-line oral nitrofurantoin 100 mg modified-release twice daily for 3 days in non-pregnant women with eGFR >= 45 mL/min.",
                "NICE guidelines recommend 3 days of oral nitrofurantoin or trimethoprim for uncomplicated lower UTI in women, avoiding nitrofurantoin near term in pregnancy or severe renal impairment."
            ),
            "AMC": (
                "Urgent investigation of obstructive pyelonephritis and hydronephrosis",
                "Urgent renal ultrasonography to rule out ureteral calculus obstruction causing pyonephrosis, requiring emergency percutaneous nephrostomy or ureteral stenting.",
                "In Australia, pyelonephritis with persistent fever or suspected urolithiasis mandates urgent ultrasound; infected obstructed kidneys require immediate decompression."
            ),
            "MCCQE": (
                "Management of asymptomatic bacteriuria in pregnancy versus general population",
                "Routine screening and treatment of asymptomatic bacteriuria in pregnant women with oral cephalexin or nitrofurantoin to prevent maternal pyelonephritis and preterm labor.",
                "Canadian medical objectives distinguish asymptomatic bacteriuria: mandatory treatment in pregnancy to prevent pyelonephritis and low birthweight, but withhold antibiotics in non-pregnant adults."
            ),
            "FCPS": (
                "Renal carbuncle and emphysematous pyelonephritis in diabetic patients",
                "Urgent non-contrast CT abdomen showing gas in the renal parenchyma and collecting system in a poorly controlled diabetic patient, requiring IV antibiotics and drainage.",
                "Emphysematous pyelonephritis is a life-threatening gas-forming necrotizing infection in diabetics requiring urgent CT staging and immediate urological intervention."
            ),
            "NLE": (
                "Microscopic urinalysis interpretation and pathognomonic casts",
                "Presence of white blood cell (leukocyte) casts in urine sediment definitively confirming upper urinary tract parenchymal inflammation (acute pyelonephritis).",
                "National licensing curricula test urinary sediment: WBC casts confirm acute pyelonephritis and interstitial nephritis, distinguishing upper tract disease from cystitis."
            ),
            "NEET PG": (
                "Proteus mirabilis struvite stones and urine alkalization",
                "Urease-producing Proteus mirabilis hydrolyzing urea to ammonia, producing alkaline urine (pH > 7.5) and staghorn calculi composed of magnesium ammonium phosphate.",
                "NEET PG questions focus on Proteus mirabilis producing urease, driving struvite (triple phosphate) staghorn calculi requiring surgical removal and eradication."
            ),
            "MRCP": (
                "Xanthogranulomatous pyelonephritis (XGP) mimicker of renal cell carcinoma",
                "Chronic renal destruction characterized by lipid-laden foamy macrophages (xanthoma cells) around a central staghorn calculus, requiring radical nephrectomy.",
                "MRCP clinical pathology highlights xanthogranulomatous pyelonephritis, a severe chronic inflammatory destructive condition that clinically and radiologically mimics renal carcinoma."
            ),
            "MRCEM": (
                "Urosepsis resuscitation and empirical antimicrobial coverage",
                "Immediate crystalloid fluid challenge, blood and urine cultures, and empiric IV piperacillin-tazobactam or ceftriaxone within 1 hour.",
                "Emergency resuscitation in urosepsis prioritizes rapid broad-spectrum antibiotics and fluid resuscitation, evaluating for urinary tract obstruction via bedside ultrasound."
            ),
            "SMLE": (
                "Antimicrobial stewardship and regional resistance patterns in uropathogens",
                "Avoiding empiric ampicillin or trimethoprim-sulfamethoxazole monotherapy due to local E. coli resistance rates exceeding 20%, choosing nitrofurantoin or fosfomycin.",
                "Saudi guidelines emphasize local antibiogram compliance, restricting empiric agents to those with community resistance rates below 20% for uncomplicated cystitis."
            ),
            "HAAD / DHA": (
                "Catheter-associated urinary tract infection (CAUTI) prevention bundle",
                "Immediate removal of unnecessary indwelling urinary catheters, sterile insertion protocols, and obtaining catheter urine specimen from the sampling port.",
                "UAE health regulation standards enforce CAUTI reduction bundles focusing on minimizing catheter duration and avoiding routine catheter irrigation."
            ),
            "UHS MBBS": (
                "Gross and microscopic pathology of acute pyelonephritis",
                "Multiple discrete yellowish-white cortical microabscesses on gross inspection, with neutrophilic infiltration of renal tubules and interstitium on histology.",
                "Undergraduate pathology describes patchy suppurative inflammation, intratubular microabscesses, and cortical petechiae characteristic of acute bacterial pyelonephritis."
            )
        }
    }
]
