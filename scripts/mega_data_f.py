"""
Mega Data Part F: Domains 33 to 38 (Pediatrics & Pediatric Emergencies)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_F = [
    # Domain 33: Pediatric Respiratory Distress & Stridor
    {
        "id": "domain_33_pediatric_stridor",
        "entity": "pediatric upper airway obstruction (croup and epiglottitis)",
        "hallmark": "barking seal-like cough, inspiratory stridor at rest, subglottic tracheal narrowing on X-ray, and suprasternal retractions",
        "system": "Respiratory",
        "ref_key": "nice_croup",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Parainfluenza virus envelope glycoproteins and subglottic edema",
                "Human parainfluenza virus (paramyxovirus family) with hemagglutinin-neuraminidase and fusion (F) surface spikes causing inflammatory edema in the subglottic laryngeal mucosa.",
                "Parainfluenza virus type 1 is the primary cause of laryngotracheobronchitis (croup), producing subglottic mucosal edema that leads to the classic 'steeple sign' on plain radiography."
            ),
            "Step 2 CK": (
                "Dexamethasone and nebulized epinephrine for moderate-to-severe croup",
                "Single oral dose of dexamethasone 0.15 to 0.6 mg/kg combined with nebulized racemic (or standard L-) epinephrine for stridor at rest.",
                "Current clinical guidelines mandate oral dexamethasone for all children with croup; nebulized epinephrine rapidly reduces mucosal edema via alpha-1 vasoconstriction."
            ),
            "Step 3": (
                "Outpatient discharge criteria following nebulized epinephrine treatment",
                "Observation for at least 2 to 4 hours following nebulized epinephrine to monitor for rebound airway obstruction prior to safe outpatient discharge.",
                "Because epinephrine's duration of action is approximately 2 hours, children receiving nebulized treatment must be monitored to ensure stridor does not recur before discharge."
            ),
            "PLAB / UKMLA": (
                "NICE assessment of Westley croup score and acute management",
                "Stratification by Westley score: moderate croup with stridor at rest treated with single-dose oral dexamethasone (0.15 mg/kg) and close monitoring.",
                "NICE guidelines recommend oral dexamethasone as first-line therapy for all severities of croup, with nebulized budesonide or epinephrine reserved for severe distress."
            ),
            "AMC": (
                "Distinguishing croup from acute epiglottitis and avoiding airway agitation",
                "Minimizing patient distress, avoiding tongue depressor examination, and preparing for difficult airway management in suspected bacterial epiglottitis.",
                "Australian emergency protocols emphasize keeping the child calm in the parent's arms and avoiding invasive pharyngeal examination if epiglottitis is suspected."
            ),
            "MCCQE": (
                "Bronchiolitis in infants and evidence-based supportive care",
                "Supportive management with nasal suctioning, hydration support, and supplemental oxygen if SpO2 < 90%, avoiding routine bronchodilators and corticosteroids.",
                "Canadian Paediatric Society guidelines recommend against routine bronchodilators, systemic corticosteroids, or chest physiotherapy in viral bronchiolitis."
            ),
            "FCPS": (
                "Emergency surgical airway indications in acute epiglottitis",
                "Immediate inhalational induction in the operating room with rigid tracheostomy or cricothyroidotomy equipment prepared for acute complete airway obstruction.",
                "Acute epiglottitis with respiratory arrest requires immediate operating room transfer for endotracheal intubation by the most senior anesthesiologist and ENT surgeon."
            ),
            "NLE": (
                "Radiological identification of the steeple sign versus thumbprint sign",
                "Steeple sign (subglottic tracheal narrowing) on AP neck X-ray indicating croup, versus thumbprint sign (swollen epiglottis) on lateral neck X-ray indicating epiglottitis.",
                "National licensing examinations test radiographic signs: pencil-tip or steeple sign indicates viral croup; thumbprint sign indicates Haemophilus influenzae epiglottitis."
            ),
            "NEET PG": (
                "Haemophilus influenzae type b virulence and polyribosylribitol phosphate (PRP)",
                "Polyribosylribitol phosphate (PRP) capsular antigen conjugated to protein carrier in the Hib vaccine providing protective anti-PRP IgG antibodies.",
                "NEET PG microbiology emphasizes that the Hib conjugate vaccine targets the PRP capsule, dramatically decreasing the incidence of invasive epiglottitis and meningitis."
            ),
            "MRCP": (
                "Bacterial tracheitis (pseudomembranous croup) as a life-threatening mimicker",
                "High fever, toxic appearance, thick mucopurulent tracheal secretions refractory to epinephrine, commonly caused by Staphylococcus aureus.",
                "MRCP clinical scenarios test bacterial tracheitis, where children with apparent croup deteriorate into septic toxic states with thick membranes requiring bronchoscopic debridement."
            ),
            "MRCEM": (
                "Emergency algorithmic management of impending pediatric airway arrest",
                "High-concentration oxygen, back blows/chest thrusts if foreign body is suspected, and inhalational induction by experienced team without venous access delays.",
                "Emergency resuscitation in severe pediatric stridor prioritizes minimizing invasive agitation, administering nebulized epinephrine, and mobilizing the difficult airway team."
            ),
            "SMLE": (
                "Vaccine schedule adherence and prevention of vaccine-preventable airway diseases",
                "Verifying completion of the national immunization schedule for pentavalent vaccine (DTP-Hib-HepB) at 2, 4, and 6 months of age.",
                "Saudi MOH pediatric health programs mandate full pentavalent vaccination coverage to sustain population immunity against Haemophilus and Bordetella pertussis."
            ),
            "HAAD / DHA": (
                "Foreign body airway obstruction in toddlers and bronchoscopic retrieval",
                "Sudden-onset choking and unilateral wheeze or hyperinflation on expiratory chest radiograph, requiring urgent rigid bronchoscopic foreign body removal.",
                "UAE pediatric emergency guidelines recommend rigid bronchoscopy for suspected aspirated foreign bodies (e.g., nuts, coins) presenting with sudden paroxysmal coughing."
            ),
            "UHS MBBS": (
                "Microscopic and gross pathology of acute laryngotracheobronchitis",
                "Marked subglottic laryngeal edema, vascular hyperemia, and infiltration of the lamina propria by mononuclear inflammatory cells.",
                "Undergraduate pathology highlights that viral croup produces localized mucosal edema in the rigid, unyielding cricoid ring, resulting in marked airway resistance."
            )
        }
    },

    # Domain 34: Pediatric Dehydration & Gastroenteritis
    {
        "id": "domain_34_pediatric_dehydration",
        "entity": "pediatric acute gastroenteritis and dehydration",
        "hallmark": "sunken fontanelle, delayed capillary refill time > 3 seconds, loss of skin turgor, lethargy, and dry mucous membranes",
        "system": "Gastrointestinal",
        "ref_key": "aap_pediatrics",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Sodium-glucose cotransporter 1 (SGLT1) and physiological basis of ORS",
                "Oral rehydration solution utilizing intact brush-border SGLT1 cotransport of sodium and glucose to drive osmotic water reabsorption across the intestinal epithelium.",
                "Even in cholera toxin-mediated secretory diarrhea where adenylate cyclase is hyperactive, SGLT1 remains intact, allowing equimolar glucose and sodium to drive fluid absorption."
            ),
            "Step 2 CK": (
                "Clinical severity grading of dehydration and intravenous fluid bolus criteria",
                "Intravenous fluid resuscitation with 20 mL/kg isotonic saline (0.9% NaCl or Ringer lactate) over 20 minutes for severe dehydration with hemodynamic compromise.",
                "Mild-to-moderate dehydration is treated preferentially with oral rehydration therapy (50-100 mL/kg over 4 hours); severe dehydration requires immediate IV isotonic boluses."
            ),
            "Step 3": (
                "Zinc supplementation and early re-introduction of normal diet",
                "Oral zinc supplementation (20 mg daily for 14 days, 10 mg if < 6 months) and immediate resumption of age-appropriate normal feeding once rehydrated.",
                "WHO/UNICEF guidelines recommend zinc supplementation to reduce diarrhea duration and recurrence, alongside early feeding to promote enterocyte mucosal regeneration."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines on clinical assessment of dehydration in children under 5",
                "Assessment of prolonged capillary refill time, abnormal skin turgor, and tachypnea as key red flags defining clinical dehydration and guiding oral vs IV fluids.",
                "NICE guideline NG34 emphasizes that capillary refill > 2 seconds, sunken eyes, and dry mucous membranes are the most reliable clinical signs of pediatric dehydration."
            ),
            "AMC": (
                "Hypotonic rehydration avoidance and hyponatremic encephalopathy prevention",
                "Using isotonic crystalloids (0.9% normal saline with 5% dextrose) for maintenance fluids rather than hypotonic solutions to prevent hospital-acquired hyponatremia.",
                "Australian pediatric guidelines strictly mandate isotonic fluids for maintenance rehydration to prevent fatal iatrogenic hyponatremic cerebral edema."
            ),
            "MCCQE": (
                "Hypernatremic dehydration and slow correction to prevent cerebral edema",
                "Serum sodium > 150 mEq/L requiring slow, controlled rehydration over 48 hours to decrease sodium by no more than 0.5 mEq/L per hour (10-12 mEq/L per 24 hours).",
                "Canadian pediatric standards caution that rapid correction of hypernatremic dehydration causes severe cerebral edema, seizures, and permanent brain damage."
            ),
            "FCPS": (
                "Midgut volvulus and malrotation presenting as acute bilious vomiting",
                "Urgent upper gastrointestinal contrast series and emergency Ladd procedure for midgut malrotation presenting with sudden bilious vomiting in an infant.",
                "Bilious emesis in an infant is a surgical emergency of malrotation with volvulus until proven otherwise; prompt Ladd procedure is required to salvage ischemic bowel."
            ),
            "NLE": (
                "Low-osmolarity WHO oral rehydration salts composition",
                "Low-osmolarity ORS containing sodium 75 mEq/L, glucose 75 mmol/L, chloride 65 mEq/L, potassium 20 mEq/L, and citrate 10 mmol/L (total osmolarity 245 mOsm/L).",
                "National licensing examinations test the standardized WHO reduced-osmolarity ORS, which significantly reduces stool output, vomiting, and need for IV infusions."
            ),
            "NEET PG": (
                "Rotavirus enterotoxin NSP4 and mechanism of secretory diarrhea",
                "Rotavirus non-structural protein 4 (NSP4) acting as a viral enterotoxin that mobilizes intracellular calcium and stimulates chloride secretion via calcium-activated channels.",
                "NEET PG high-yield virology tests rotavirus NSP4, recognized as the first described viral enterotoxin causing severe secretory diarrhea and dehydration in infants."
            ),
            "MRCP": (
                "Hemolytic Uremic Syndrome (HUS) following STEC enteritis",
                "Microangiopathic hemolytic anemia, thrombocytopenia, and acute renal failure following Shiga toxin-producing E. coli (STEC O157:H7) enteritis; avoid antibiotics.",
                "MRCP pediatric nephrology emphasizes avoiding antimicrobials and antimotility drugs in STEC colitis, as they increase toxin release and the risk of developing HUS."
            ),
            "MRCEM": (
                "Intraosseous access in pediatric circulatory shock",
                "Establishment of proximal tibial intraosseous (IO) access within 90 seconds when peripheral venous cannulation fails in decompensated shock.",
                "Resuscitation guidelines prioritize immediate intraosseous cannulation in critically hypovolemic children when peripheral IV access cannot be established within two attempts."
            ),
            "SMLE": (
                "Rotavirus vaccine administration schedule and contraindications",
                "Oral live-attenuated rotavirus vaccine administered at 2 and 4 months, contraindicated in infants with a history of intussusception or severe combined immunodeficiency.",
                "Saudi immunization schedules require completing rotavirus vaccination within specified age windows, screening carefully for prior bowel intussusception."
            ),
            "HAAD / DHA": (
                "Single-dose ondansetron in pediatric emergency gastroenteritis",
                "Oral single-dose ondansetron (0.15 mg/kg) in children aged > 6 months to reduce vomiting and facilitate successful oral rehydration therapy.",
                "UAE pediatric emergency protocols support single-dose ondansetron to prevent oral rehydration failure and eliminate the need for hospital admission and IV fluids."
            ),
            "UHS MBBS": (
                "Histopathological changes of enterocyte blunting in viral gastroenteritis",
                "Patchy villous atrophy, crypt hyperplasia, and loss of microvillous brush border enzymes in the proximal small intestine.",
                "Undergraduate pathology highlights that rotavirus infects mature enterocytes of villus tips, causing osmotic diarrhea due to secondary lactase deficiency."
            )
        }
    },

    # Domain 35: Pediatric Exanthems & Febrile Vasculitides
    {
        "id": "domain_35_pediatric_exanthems",
        "entity": "Kawasaki disease and pediatric febrile vasculitides",
        "hallmark": "prolonged high fever for six days, bilateral non-exudative conjunctival injection, polymorphous truncal rash, strawberry tongue, and cervical lymphadenopathy",
        "system": "Cardiovascular",
        "ref_key": "aap_pediatrics",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Medium-vessel necrotizing arteritis and coronary artery aneurysm pathogenesis",
                "Transmural necrotizing inflammation of muscular arteries with predilection for coronary arteries, characterized by endothelial activation and elastase-mediated internal elastic lamina destruction.",
                "Kawasaki disease is an acute systemic necrotizing vasculitis of medium-sized vessels where cytokine storm damages arterial walls, causing aneurysm formation and thrombotic occlusion."
            ),
            "Step 2 CK": (
                "Diagnostic criteria and initial treatment with IVIG and high-dose aspirin",
                "Diagnosis confirmed by fever >= 5 days plus at least 4 clinical criteria, treated promptly with high-dose intravenous immunoglobulin (IVIG 2 g/kg) and oral aspirin.",
                "Administering IVIG within the first 10 days of fever reduces the incidence of coronary artery aneurysms from 25% down to less than 4%."
            ),
            "Step 3": (
                "Echocardiographic surveillance and long-term anticoagulation strategies",
                "Baseline and follow-up echocardiograms at 2 and 6 weeks; transitioning to low-dose aspirin for antiplatelet effect until coronary architecture normalizes.",
                "Long-term management stratifies children by coronary z-scores: giant aneurysms (z >= 10 or diameter >= 8 mm) mandate dual antiplatelet therapy plus systemic anticoagulation."
            ),
            "PLAB / UKMLA": (
                "Recognition of incomplete (atypical) Kawasaki disease in young infants",
                "High suspicion in infants under 1 year with prolonged unexplained fever >= 5 days, elevated CRP/ESR, and urgent pediatric echocardiogram.",
                "NICE guidelines emphasize that infants < 6 months frequently present with incomplete Kawasaki disease (fewer clinical criteria), yet have the highest risk of coronary aneurysms."
            ),
            "AMC": (
                "Henoch-Schönlein purpura (IgA vasculitis) clinical tetrad and renal monitoring",
                "Palpable non-thrombocytopenic purpura on buttocks/lower extremities, arthralgia, colicky abdominal pain, and microscopic hematuria/proteinuria.",
                "Australian guidelines emphasize monitoring blood pressure and serial urinalysis for up to 6 months in HSP to detect progressive glomerulonephritis."
            ),
            "MCCQE": (
                "Measles (Rubeola) clinical manifestations and vitamin A supplementation",
                "Cough, coryza, conjunctivitis, Koplik spots on buccal mucosa, cephalocaudal maculopapular rash, and therapeutic high-dose oral vitamin A.",
                "Canadian public health directives highlight measles outbreaks, emphasizing prompt airborne isolation, reporting, and high-dose vitamin A to reduce mortality and ocular damage."
            ),
            "FCPS": (
                "Gastrointestinal complications of Henoch-Schönlein purpura and intussusception",
                "Ileocecal or ileoileal intussusception caused by bowel wall intramural hematoma acting as a lead point, requiring urgent ultrasonography.",
                "In children with HSP and acute abdominal pain, ultrasound is the investigation of choice to differentiate uncomplicated bowel ischemia from intussusception."
            ),
            "NLE": (
                "Clinical distinction between common childhood exanthems",
                "Roseola infantum (HHV-6) characterized by high fever for 3-4 days that abruptly defervesces followed immediately by the emergence of a rose-pink maculopapular rash.",
                "National licensing curricula test exanthem timing: Roseola develops rash after fever subsides; Measles rash begins at fever peak spreading from hairline downward."
            ),
            "NEET PG": (
                "Reye syndrome risk with aspirin use and Kawasaki exception",
                "Aspirin contraindicated in viral febrile illness due to microvesicular hepatic steatosis and encephalopathy (Reye syndrome), except in Kawasaki disease.",
                "NEET PG pharmacology emphasizes that Kawasaki disease is the unique pediatric indication where the benefit of aspirin outweighs the risk of Reye syndrome."
            ),
            "MRCP": (
                "Multisystem Inflammatory Syndrome in Children (MIS-C) related to SARS-CoV-2",
                "Persistent fever, multiorgan involvement, shock, elevated cardiac biomarkers (troponin, NT-proBNP), and positive SARS-CoV-2 serology treated with IVIG and methylprednisolone.",
                "MRCP pediatric questions test MIS-C, distinguishing it from classical Kawasaki disease by its occurrence in older children, frequent ventricular dysfunction, and marked cytopenias."
            ),
            "MRCEM": (
                "Emergency stabilization of pediatric shock in febrile vasculitis",
                "Immediate crystalloid fluid challenge (10-20 mL/kg), early inotropic support with epinephrine, and rapid diagnostic bedside echocardiography.",
                "In patients presenting in shock secondary to vasculitic myocarditis (Kawasaki shock syndrome or MIS-C), judicious inotropic support is prioritized over excessive fluid loading."
            ),
            "SMLE": (
                "Post-IVIG vaccine schedule modification for live vaccines",
                "Deferring live-attenuated vaccines (MMR and varicella) for 11 months after high-dose IVIG therapy to avoid antibody interference.",
                "Saudi vaccination protocols mandate an 11-month postponement of live viral vaccines after receiving 2 g/kg IVIG to ensure robust humoral immunogenicity."
            ),
            "HAAD / DHA": (
                "Scarlet fever clinical presentation and penicillin therapy",
                "Group A Streptococcus pharyngitis presenting with sandpaper erythematous rash, Pastia lines in flexural creases, strawberry tongue, treated with oral amoxicillin.",
                "UAE health standards prioritize 10 days of penicillin or amoxicillin for scarlet fever to prevent non-suppurative complications, specifically acute rheumatic fever."
            ),
            "UHS MBBS": (
                "Histopathology of leukocytoclastic vasculitis in IgA vasculitis",
                "Neutrophilic infiltration of post-capillary venule walls with karyorrhexis (leukocytoclasia), fibrinoid necrosis, and IgA immune complex deposition on immunofluorescence.",
                "Undergraduate pathology identifies leukocytoclastic vasculitis as the microscopic hallmark of HSP, characterized by fragmented neutrophil nuclei and extravasated red blood cells."
            )
        }
    },

    # Domain 36: Congenital Heart Defects
    {
        "id": "domain_36_congenital_heart",
        "entity": "congenital heart defects (cyanotic and acyanotic)",
        "hallmark": "central cyanosis, harsh systolic ejection murmur at left upper sternal border, boot-shaped heart on chest radiography, and single loud S2",
        "system": "Cardiovascular",
        "ref_key": "aap_pediatrics",
        "subjects": {
            "Step 1": "Embryology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Anterior and superior malalignment of the conotruncal septum",
                "Embryological malalignment of the aorticopulmonary (conotruncal) septum resulting in ventricular septal defect, pulmonary stenosis, overriding aorta, and right ventricular hypertrophy.",
                "Tetralogy of Fallot results from abnormal neural crest cell migration leading to anterior-superior conotruncal septum displacement, determining the degree of right-to-left shunting."
            ),
            "Step 2 CK": (
                "Management of acute hypercyanotic (tet) spells in Tetralogy of Fallot",
                "Placing infant in knee-chest position, administering supplemental oxygen, intravenous morphine, and IV phenylephrine to increase systemic vascular resistance.",
                "Knee-chest positioning increases systemic vascular resistance (afterload), which reverses the right-to-left intracardiac shunt, forcing deoxygenated blood through the pulmonary bed."
            ),
            "Step 3": (
                "Timing of surgical repair and long-term pulmonary valve surveillance",
                "Elective complete surgical repair (VSD closure and relief of RVOT obstruction) within the first 6 months of life, followed by surveillance for pulmonary regurgitation.",
                "Long-term post-repair patients require serial cardiac MRI surveillance to detect severe pulmonary insufficiency, which necessitates transcatheter or surgical pulmonary valve replacement."
            ),
            "PLAB / UKMLA": (
                "Ductal-dependent congenital heart lesions and prostaglandin E1 (alprostadil) infusion",
                "Continuous IV prostaglandin E1 (alprostadil) infusion to maintain ductus arteriosus patency in neonates with critical cyanosis or severe coarctation.",
                "NICE neonatal guidance mandates immediate alprostadil infusion for suspected duct-dependent cardiac lesions presenting with shock or cyanosis as the ductus closes."
            ),
            "AMC": (
                "Ventricular septal defect natural history and clinical indications for closure",
                "Small muscular VSDs typically close spontaneously by age 2; large perimembranous VSDs with failure to thrive and pulmonary hypertension require surgical closure by 6-12 months.",
                "Australian pediatric cardiology consensus guidelines recommend surgical closure for large VSDs causing left heart volume overload, failure to thrive, or rising pulmonary vascular resistance."
            ),
            "MCCQE": (
                "Coarctation of the aorta diagnostic signs and upper-to-lower extremity blood pressure gradients",
                "Brachial-to-femoral pulse delay, elevated upper extremity blood pressure with diminished lower extremity pulses, and rib notching on chest radiograph.",
                "Canadian qualifying objectives emphasize measuring four-limb blood pressures in newborns and hypertensive young adults to detect post-ductal aortic coarctation."
            ),
            "FCPS": (
                "Surgical management of Transposition of the Great Arteries (TGA)",
                "Arterial switch operation (Jatene procedure) performed within the first 2-3 weeks of life before the left ventricle regresses against low pulmonary pressure.",
                "In D-transposition of the great arteries, urgent balloon atrial septostomy (Rashkind procedure) provides mixing, followed by definitive arterial switch within the neonatal window."
            ),
            "NLE": (
                "Patent ductus arteriosus clinical murmur and pharmacological closure",
                "Continuous 'machine-like' murmur loudest at left infraclavicular area and wide pulse pressure, treated with intravenous indomethacin or ibuprofen in premature infants.",
                "National licensing curricula test PDA: continuous machinery murmur, bounding pulses, and pharmacological closure using cyclooxygenase inhibitors (indomethacin/ibuprofen)."
            ),
            "NEET PG": (
                "Transposition of the Great Arteries embryology and radiographic egg-on-a-string sign",
                "Failure of the aorticopulmonary septum to spiral, creating parallel aorta and pulmonary artery, appearing as an 'egg-on-a-string' cardiac silhouette on X-ray.",
                "NEET PG questions focus on D-TGA: failure of conotruncal spiraling, severe early neonatal cyanosis, narrow mediastinum on X-ray, and dependency on intracardiac shunts."
            ),
            "MRCP": (
                "Eisenmenger syndrome pathophysiology and multisystem complications",
                "Longstanding left-to-right shunt inducing severe pulmonary vascular remodeling, causing shunt reversal (right-to-left), central cyanosis, erythrocytosis, and clubbing.",
                "MRCP clinical scenarios test Eisenmenger syndrome: pregnancy is strictly contraindicated due to 30-50% maternal mortality, and venesection is reserved for hyperviscosity symptoms."
            ),
            "MRCEM": (
                "Emergency resuscitation of the neonate with ductal closure in circulatory collapse",
                "Immediate IV access, continuous alprostadil infusion (0.01-0.05 mcg/kg/min), intubation readiness for apnea, and cautious minimal fluid boluses (10 mL/kg).",
                "In a neonate presenting at 7-14 days with profound shock and metabolic acidosis, the primary emergency intervention is prostaglandin E1 to reopen the closing ductus."
            ),
            "SMLE": (
                "Pulse oximetry newborn screening protocols for critical congenital heart disease",
                "Routine pre-ductal (right hand) and post-ductal (either foot) SpO2 screening at 24 hours of life to detect asymptomatic critical congenital heart defects.",
                "Saudi MOH guidelines mandate universal CCHD screening; SpO2 < 90% in either limb or > 3% difference between hand and foot mandates urgent echocardiography."
            ),
            "HAAD / DHA": (
                "Atrial septal defect types and transcatheter device closure criteria",
                "Ostium secundum ASD with right ventricular volume overload and normal pulmonary vascular resistance, amenable to percutaneous transcatheter Amplatzer occluder placement.",
                "UAE pediatric cardiology guidelines prioritize transcatheter closure for secundum ASDs with hemodynamically significant left-to-right shunting (Qp:Qs > 1.5:1)."
            ),
            "UHS MBBS": (
                "Embryological development of the interatrial septum and ostium secundum defect",
                "Excessive resorption of the septum primum or deficient growth of the septum secundum leading to an abnormal interatrial communication.",
                "Undergraduate embryology details atrial septation: ostium secundum defects account for 80% of ASDs, located in the region of the fossa ovalis."
            )
        }
    },

    # Domain 37: Neonatal Hyperbilirubinemia & Jaundice
    {
        "id": "domain_37_neonatal_jaundice",
        "entity": "neonatal hyperbilirubinemia and kernicterus",
        "hallmark": "cephalocaudal progression of scleral and cutaneous jaundice, total serum bilirubin 22 mg/dL, lethargy, hypotonia, and poor suckling reflex",
        "system": "Gastrointestinal",
        "ref_key": "aap_pediatrics",
        "subjects": {
            "Step 1": "Biochemistry",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "UDP-glucuronosyltransferase 1A1 (UGT1A1) deficiency and bilirubin conjugation",
                "Impaired hepatic UGT1A1 enzyme activity and increased enterohepatic circulation of unconjugated (lipid-soluble) bilirubin crossing the blood-brain barrier.",
                "Neonatal physiological jaundice results from immature hepatic UGT1A1, high erythrocyte turnover, and beta-glucuronidase deconjugating bilirubin in the gut lumen."
            ),
            "Step 2 CK": (
                "AAP hour-specific phototherapy nomogram and exchange transfusion thresholds",
                "Plotting total serum bilirubin on the hour-specific Bhutani nomogram to determine initiation of intensive blue-light phototherapy (460-490 nm wavelength).",
                "AAP guidelines use hour-specific total serum bilirubin nomograms stratified by gestational age and neurotoxicity risk factors to guide phototherapy and exchange transfusion."
            ),
            "Step 3": (
                "Distinguishing breast milk jaundice from breastfeeding (lactational) jaundice",
                "Breastfeeding jaundice occurs in the first week from inadequate caloric intake and dehydration; breast milk jaundice occurs at 2-3 weeks from beta-glucuronidase in milk.",
                "Breastfeeding failure jaundice presents with weight loss > 10% and signs of dehydration; breast milk jaundice presents in thriving, well-fed infants with prolonged unconjugated hyperbilirubinemia."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines for neonatal jaundice and investigation of prolonged jaundice",
                "Evaluation of jaundice persisting beyond 14 days in term infants (21 days in preterm) with fractionated bilirubin, urine culture, and newborn thyroid screening.",
                "NICE guideline CG98 mandates fractionated bilirubin in prolonged jaundice: conjugated bilirubin > 25 mcmol/L indicates neonatal cholestasis (e.g., biliary atresia)."
            ),
            "AMC": (
                "Biliary atresia early identification and urgent Kasai portoenterostomy",
                "Pale acholic stools, dark urine, and conjugated hyperbilirubinemia requiring abdominal ultrasound and urgent Kasai procedure before 60 days of life.",
                "Australian pediatric guidelines emphasize early surgical Kasai portoenterostomy before 8 weeks of age to restore bile flow and prevent irreversible biliary cirrhosis."
            ),
            "MCCQE": (
                "ABO incompatibility and direct antiglobulin (Coombs) testing",
                "Mother with blood type O having infant with blood type A or B, presenting with early hemolytic jaundice within 24 hours and positive direct Coombs test.",
                "Canadian medical objectives focus on identifying maternal-fetal ABO and Rh isoimmunization; jaundice within the first 24 hours of life is always pathological."
            ),
            "FCPS": (
                "Exchange transfusion procedure and complications",
                "Double-volume exchange transfusion (160-180 mL/kg) via umbilical venous catheter for bilirubin exceeding threshold or acute bilirubin encephalopathy signs.",
                "Exchange transfusion removes circulating sensitized erythrocytes and unbound bilirubin; potential risks include hypocalcemia, thrombocytopenia, and necrotizing enterocolitis."
            ),
            "NLE": (
                "Clinical assessment of cephalocaudal jaundice progression (Kramer rule)",
                "Visual estimation of jaundice progression from head to extremities (zone 1 head ~5 mg/dL to zone 5 palms/soles > 15 mg/dL), warranting transcutaneous bilirubinometry.",
                "National licensing curricula test Kramer staging, emphasizing that visual inspection is imprecise and transcutaneous or total serum bilirubin must guide therapy."
            ),
            "NEET PG": (
                "Crigler-Najjar syndrome type 1 versus type 2 differentiation",
                "Type 1 characterized by complete absence of UGT1A1 activity, unresponsive to phenobarbital, causing fatal kernicterus unless liver transplantation is performed.",
                "NEET PG questions distinguish Crigler-Najjar type 1 (complete absence of UGT1A1, no response to phenobarbital) from type 2 (partial defect, decreases with phenobarbital)."
            ),
            "MRCP": (
                "Bilirubin-induced neurological dysfunction (BIND) and kernicterus neuroanatomy",
                "Deposition of free unconjugated bilirubin in the basal ganglia (globus pallidus), subthalamic nuclei, and auditory pathways causing choreoathetoid cerebral palsy and sensorineural deafness.",
                "MRCP clinical neurology tests kernicterus pathology: unconjugated bilirubin selectively stains the globus pallidus and subthalamic nuclei, producing vertical gaze palsy and choreoathetosis."
            ),
            "MRCEM": (
                "Emergency management of acute bilirubin encephalopathy",
                "Immediate intensive overhead and biliblanket phototherapy, intravenous hydration, and urgent preparation of cross-matched blood for emergency exchange transfusion.",
                "Signs of acute bilirubin encephalopathy (retrocollis, opisthotonos, high-pitched cry) indicate impending irreversible kernicterus and require immediate exchange transfusion."
            ),
            "SMLE": (
                "G6PD deficiency screening and avoidance of oxidative hemolytic triggers",
                "Routine neonatal G6PD screening, avoiding fava beans, naphthalene balls, and oxidative medications (e.g., nitrofurantoin, primaquine) in deficient infants.",
                "In Saudi Arabia where G6PD deficiency is highly prevalent, acute hemolytic crises triggered by oxidative exposures are a leading cause of severe neonatal jaundice."
            ),
            "HAAD / DHA": (
                "Universal transcutaneous bilirubin screening prior to discharge",
                "Mandatory transcutaneous bilirubin measurement for all healthy newborns prior to hospital discharge, with outpatient follow-up scheduled based on risk zone.",
                "UAE health standards mandate predischarge transcutaneous bilirubin screening linked to outpatient follow-up within 48 hours for high-intermediate risk neonates."
            ),
            "UHS MBBS": (
                "Metabolism of heme to bilirubin and biliary excretion pathway",
                "Heme breakdown by heme oxygenase to biliverdin, reduction to unconjugated bilirubin by biliverdin reductase, albumin binding, and hepatic glucuronidation.",
                "Undergraduate biochemistry and pathology heavily emphasize the enzymatic pathway of heme catabolism and the physiological mechanisms of neonatal jaundice."
            )
        }
    },

    # Domain 38: Pediatric Limp & Hip Pathology
    {
        "id": "domain_38_pediatric_hip",
        "entity": "pediatric limp (septic arthritis, transient synovitis, Perthes, and SCFE)",
        "hallmark": "inability to bear weight on the right leg, high fever 39.2 C, refusal to move hip held in flexion and external rotation, and leukocytosis",
        "system": "Musculoskeletal",
        "ref_key": "aap_pediatrics",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Vascular supply of the femoral head and intracapsular epiphyseal ring",
                "Medial and lateral circumflex femoral arteries forming an extracapsular arterial ring giving off retinacular vessels supplying the capital femoral epiphysis.",
                "Because retinacular vessels run subperiosteally within the hip capsule, elevated intracapsular pressure from effusion or infection causes tamponade and ischemic avascular necrosis."
            ),
            "Step 2 CK": (
                "Kocher criteria evaluation and emergency hip arthrocentesis",
                "Fulfillment of Kocher criteria (fever > 38.5 C, non-weight bearing, ESR > 40 mm/h, WBC > 12,000/mcL) giving a > 90% probability of septic arthritis requiring urgent arthrocentesis.",
                "When 3 or 4 Kocher criteria are present, urgent ultrasound-guided hip aspiration is mandatory to confirm synovial fluid purulence (> 50,000 WBC/mcL) before surgical drainage."
            ),
            "Step 3": (
                "Long-term management of Legg-Calvé-Perthes disease",
                "Activity modification, physical therapy to preserve hip abduction range of motion, and containment bracing or surgical osteotomy in children older than 6-8 years.",
                "Perthes disease (idiopathic avascular necrosis of the femoral head in boys aged 4-8) is managed by maintaining containment of the femoral head within the acetabulum during revascularization."
            ),
            "PLAB / UKMLA": (
                "Transient synovitis management and safety netting advice",
                "Conservative management with oral ibuprofen, bed rest, and clear safety netting to return if fever develops or pain worsens after a recent viral infection.",
                "Transient synovitis (irritable hip) is the most common cause of acute limp in children aged 2-10, following an upper respiratory infection and resolving within 7-10 days."
            ),
            "AMC": (
                "Slipped Capital Femoral Epiphysis (SCFE) in adolescents and surgical in-situ pinning",
                "Obese adolescent presenting with dull hip or knee pain, limited internal rotation, and urgent in-situ single cannulated screw fixation to prevent avascular necrosis.",
                "Australian guidelines highlight that SCFE frequently presents with referred knee or thigh pain; immediate non-weight bearing and surgical fixation are mandatory."
            ),
            "MCCQE": (
                "Developmental Dysplasia of the Hip (DDH) screening in newborns",
                "Performance of Barlow (dislocation) and Ortolani (reduction) maneuvers in newborns, with hip ultrasound at 6 weeks for breech delivery or family history.",
                "Canadian guidelines mandate clinical hip screening at every well-baby visit; dynamic ultrasound after 6 weeks confirms DDH, managed with a Pavlik harness."
            ),
            "FCPS": (
                "Emergency arthrotomy and joint washout for septic arthritis of the hip",
                "Urgent open or arthroscopic hip joint decompression and drainage within 6-12 hours of diagnosis to prevent irreversible chondrolysis and femoral head necrosis.",
                "Septic arthritis of the hip is a true orthopedic emergency; delaying joint decompression beyond 24 hours leads to rapid cartilage destruction and permanent disability."
            ),
            "NLE": (
                "Referred knee pain originating from hip joint pathology",
                "Obturator nerve sensory distribution transmitting pain from the hip joint capsule to the medial aspect of the knee and distal thigh.",
                "National licensing curricula emphasize that children with hip disease (Perthes, SCFE, septic arthritis) frequently complain solely of knee pain due to obturator nerve innervation."
            ),
            "NEET PG": (
                "Radiographic signs in SCFE (Trethowan sign and Klein line)",
                "Klein line drawn along the superior border of the femoral neck failing to intersect the lateral aspect of the femoral capital epiphysis on AP pelvis X-ray (Trethowan sign).",
                "NEET PG orthopedics heavily tests Klein line on AP and frog-leg lateral radiographs, where failure to intersect the epiphysis confirms posterior-medial femoral head slippage."
            ),
            "MRCP": (
                "Juvenile Idiopathic Arthritis (JIA) subtypes and screening for chronic anterior uveitis",
                "Oligoarticular JIA in young girls associated with antinuclear antibodies (ANA) requiring regular slit-lamp screening to detect asymptomatic vision-threatening uveitis.",
                "MRCP pediatric rheumatology tests oligoarticular JIA: asymptomatic chronic anterior uveitis occurs in up to 20-30% of ANA-positive patients, necessitating routine slit-lamp surveillance."
            ),
            "MRCEM": (
                "Emergency bedside ultrasound in the evaluation of acute irritable hip",
                "Identification of hip joint effusion (anterior capsule-to-femur distance > 5 mm or > 2 mm difference compared to contralateral side) directing arthrocentesis.",
                "Emergency point-of-care ultrasound rapidly detects hip effusion in children with painful limp, guiding the decision for diagnostic aspiration versus outpatient monitoring."
            ),
            "SMLE": (
                "Vitamin D deficiency rickets presenting with delayed walking and lower extremity bowing",
                "Genu varum, rachitic rosary, widened wrists, elevated alkaline phosphatase, low serum phosphorus, treated with oral cholecalciferol and calcium.",
                "In Saudi Arabia, high prevalence of nutritional rickets mandates universal vitamin D supplementation (400 IU daily) from birth to prevent skeletal deformities and limp."
            ),
            "HAAD / DHA": (
                "Osteomyelitis of the distal femur or proximal tibia in pediatric patients",
                "Localized bone tenderness, refusal to bear weight, elevated inflammatory markers, and empiric IV flucloxacillin or cefazolin covering Staphylococcus aureus.",
                "UAE pediatric standards recommend early MRI for suspected acute hematogenous osteomyelitis when plain radiographs are normal within the first 7-10 days."
            ),
            "UHS MBBS": (
                "Stages of avascular necrosis in Legg-Calvé-Perthes disease",
                "Four sequential pathological stages: avascular necrosis/ischemia, fragmentation/resorption, reossification/repair, and healed deformity (coxa magna).",
                "Undergraduate pathology describes the classic Waldenström stages of Perthes disease, ending with remodeling and potential acetabular incongruity."
            )
        }
    }
]
