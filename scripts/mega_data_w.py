"""
Mega Data Part W: Domains 139 to 144 (Pediatric Surgery, Pediatric Oncology, Pediatric Immunology, Pediatric Nephrology, Pediatric Neurology, Obstetric Critical Care)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_W = [
    # Domain 139: Pediatric Surgery (CDH, TEF, Intestinal Atresia)
    {
        "id": "domain_139_pediatric_surgery",
        "entity": "Neonatal surgical emergencies: Congenital diaphragmatic hernia (CDH), tracheoesophageal fistula (TEF), and intestinal atresia",
        "hallmark": "scaphoid abdomen with severe respiratory distress and bowel sounds in chest, excessive oral drooling with choking on first feed, or bilious emesis with abdominal distension in a neonate",
        "system": "Gastrointestinal",
        "ref_key": "peds_surgery",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Pediatrics",
            "FCPS": "Surgery",
            "UHS MBBS": "Pediatrics",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Embryological basis of congenital diaphragmatic hernia and pulmonary hypoplasia",
                "Defective closure of the pleuroperitoneal membrane (most commonly left-sided foramen of Bochdalek) permitting herniation of abdominal viscera into the thorax during early fetal lung branching.",
                "Mass effect during the pseudoglandular stage arrest alveolar and pulmonary vascular development, producing severe bilateral pulmonary hypoplasia and persistent pulmonary hypertension of the newborn (PPHN)."
            ),
            "Step 2 CK": (
                "Initial resuscitation and airway management in congenital diaphragmatic hernia",
                "Immediate endotracheal intubation, avoidance of bag-valve-mask ventilation, placement of an orogastric decompression tube, and lung-protective gentle mechanical ventilation.",
                "Positive-pressure bag-valve-mask ventilation forces air into the intrathoracic stomach and bowel loops, worsening mediastinal shift, contralateral lung compression, and fatal cardiopulmonary collapse."
            ),
            "Step 3": (
                "Esophageal atresia with tracheoesophageal fistula: diagnostic workup and VACTERL screening",
                "Inability to pass a stiff radiopaque 8-10 French nasogastric tube into the stomach (coiling in upper pouch on chest radiography), followed by echocardiography, renal ultrasound, and spine radiographs.",
                "Over 50% of infants with type C TEF (esophageal atresia with distal fistula) possess associated VACTERL anomalies (Vertebral, Anal, Cardiac, Tracheoesophageal, Renal, Limb); cardiac anomalies must be identified before surgery."
            ),
            "PLAB / UKMLA": (
                "Diagnostic approach to neonatal bilious emesis: excluding malrotation with midgut volvulus",
                "Immediate nasogastric decompression, fluid resuscitation, and emergent upper gastrointestinal contrast series demonstrating abnormal position of the ligament of Treitz and 'corkscrew' duodenal volvulus.",
                "Bilious (green/yellow) vomiting in a newborn is a surgical emergency until proven otherwise; midgut volvulus rapidly leads to total intestinal ischemia, gangrene, and death within hours without Ladd procedure."
            ),
            "AMC": (
                "Duodenal atresia radiography and association with trisomy 21",
                "Plain abdominal radiography demonstrating the pathognomonic 'double bubble' sign (gas-filled stomach and dilated proximal duodenum with absence of distal gas) in an infant with Down syndrome.",
                "Duodenal atresia results from failure of recanalization of the embryonic intestinal lumen at weeks 8-10; roughly 30% of affected neonates have trisomy 21 (Down syndrome), requiring duodenoduodenostomy."
            ),
            "MCCQE": (
                "Post-diaphragmatic hernia repair pulmonary hypertension management",
                "Administration of inhaled nitric oxide (iNO), gentle high-frequency oscillatory ventilation, and milrinone or extracorporeal membrane oxygenation (ECMO) for refractory post-repair PPHN.",
                "Severe pulmonary vascular remodeling with muscularization of intra-acinar arteries causes suprasystemic right ventricular pressures; inhaled nitric oxide provides selective pulmonary vasodilation without systemic hypotension."
            ),
            "FCPS": (
                "Ladd surgical procedure for intestinal malrotation with midgut volvulus",
                "Counter-clockwise derotation of the midgut volvulus, division of obstructing Ladd peritoneal bands, widening of the narrow mesenteric base, and incidental prophylactic appendectomy.",
                "Repositioning the small bowel along the right abdomen and the cecum in the left lower quadrant widens the superior mesenteric artery root, permanently preventing recurrent volvulus."
            ),
            "NLE": (
                "Clinical recognition and bedside test for esophageal atresia",
                "Persistent excessive frothy oral secretions, coughing, cyanosis, and choking with the first feed; bedside confirmation by resistance when attempting to pass a rubber catheter into the stomach.",
                "Maternal polyhydramnios is common due to impaired fetal swallowing of amniotic fluid; continuous suction of the proximal blind esophageal pouch prevents aspiration pneumonitis."
            ),
            "NEET PG": (
                "Hirschsprung disease pathogenesis, histological hallmark, and biopsy gold standard",
                "Failure of neural crest cells to migrate craniocaudally to the distal bowel (weeks 5-12), resulting in absence of ganglion cells in the submucosal (Meissner) and myenteric (Auerbach) plexuses with hypertrophied nerve trunks on rectal suction biopsy.",
                "Rectal suction biopsy obtained at least 2 cm above the dentate line is the diagnostic gold standard; increased acetylcholinesterase (AChE) staining confirms aganglionosis in the spastic, non-relaxing bowel segment."
            ),
            "MRCP": (
                "Necrotizing enterocolitis (NEC) staging, Bell criteria, and pneumoperitoneum",
                "Premature neonate with abdominal distension, bloody stools, and abdominal radiography showing pneumatosis intestinalis and portal venous gas; laparotomy indicated upon appearance of pneumoperitoneum (free air).",
                "Rigler sign or the 'football sign' on abdominal plain radiograph signifies intestinal perforation; absolute surgical indication for emergency exploratory laparotomy or peritoneal drain insertion."
            ),
            "MRCEM": (
                "Pediatric intussusception presentation and pneumatic reduction",
                "Infant presenting with episodic severe colicky abdominal pain, drawing legs to chest, vomiting, palpable sausage-shaped right upper quadrant mass, and red 'currant jelly' stools, confirmed and reduced via air enema.",
                "Ultrasound demonstrates a pathognomonic 'target' or 'doughnut' sign; pneumatic (air-contrast) enema under fluoroscopic or sonographic guidance achieves successful non-operative reduction in > 80-90% of uncomplicated cases."
            ),
            "SMLE": (
                "Gastroschisis versus omphalocele differentiation and immediate newborn management",
                "Differentiating gastroschisis (full-thickness paraumbilical abdominal wall defect without covering membrane, bowel exposed) from omphalocele (midline defect through umbilical ring covered by peritoneal-amniotic sac).",
                "Immediate management of gastroschisis involves wrapping the exposed eviscerated bowel in sterile warm saline-soaked gauze and placing the torso into a sterile plastic bowel bag to prevent hypothermia and fluid evaporation."
            ),
            "HAAD / DHA": (
                "Hypertrophic pyloric stenosis clinical diagnosis and preoperative metabolic correction",
                "Non-bilious projectile vomiting in a 3- to 6-week-old infant with palpable 'olive-like' epigastric mass; correcting hypochloremic hypokalemic metabolic alkalosis with IV normal saline before Ramstedt pyloromyotomy.",
                "Pyloric stenosis is a medical emergency, not a surgical emergency; operating on an infant with untreated metabolic alkalosis carries high risks of postoperative central apnea and cardiac dysrhythmias."
            ),
            "UHS MBBS": (
                "Meckel diverticulum embryological origin, rule of 2s, and technetium-99m pertechnetate scan",
                "Persistence of the vitelline (omphalomesenteric) duct; rule of 2s: 2% of population, 2 inches long, 2 feet from ileocecal valve, 2 types of heterotopic mucosa (gastric and pancreatic), presenting under 2 years with painless rectal bleeding.",
                "Heterotopic gastric mucosa secretes hydrochloric acid, causing painless mucosal ulceration and massive lower gastrointestinal bleeding in the adjacent normal ileum; diagnosed by 99mTc-pertechnetate scintigraphy."
            )
        }
    },

    # Domain 140: Pediatric Hematology-Oncology (ALL, Wilms, Neuroblastoma)
    {
        "id": "domain_140_pediatric_oncology",
        "entity": "Pediatric solid tumors and acute leukemias: Acute lymphoblastic leukemia (ALL), Wilms tumor (nephroblastoma), and neuroblastoma",
        "hallmark": "bone pain, fever, pallor, petechiae, hepatosplenomegaly, smooth unilateral abdominal mass not crossing midline (Wilms), or nodular retroperitoneal mass crossing midline with periorbital ecchymosis (neuroblastoma)",
        "system": "Hematology",
        "ref_key": "peds_onc",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pediatrics",
            "FCPS": "Pediatrics",
            "UHS MBBS": "Pediatrics",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Cytogenetic signatures and prognostic markers in B-cell acute lymphoblastic leukemia",
                "Favorable prognosis associated with hyperdiploidy (> 50 chromosomes) and t(12;21) ETV6-RUNX1 (TEL-AML1); poor prognosis associated with t(9;22) BCR-ABL1 (Philadelphia chromosome) and KMT2A (MLL) rearrangements.",
                "B-ALL lymphoblasts are characterized by terminal deoxynucleotidyl transferase (TdT) nuclear positivity and expression of CD10 (CALLA), CD19, and CD22 cell surface markers."
            ),
            "Step 2 CK": (
                "Clinical distinction between Wilms tumor and neuroblastoma in pediatric abdominal masses",
                "Wilms tumor presents as a smooth, firm, asymptomatic renal mass that does not cross the midline; neuroblastoma presents as an irregular, calcified, fixed mass crossing the midline with systemic irritability and opsoclonus-myoclonus.",
                "Wilms tumor (nephroblastoma) arises from metanephric blastema, displacing renal parenchyma; neuroblastoma arises from neural crest chromaffin cells along the sympathetic chain and produces elevated urinary catecholamines (HVA and VMA)."
            ),
            "Step 3": (
                "Tumor lysis syndrome prevention and management during leukemia induction therapy",
                "Aggressive intravenous hyperhydration without potassium, recombinant urate oxidase (rasburicase) for high uric acid, and frequent monitoring of serum potassium, phosphorus, calcium, and creatinine.",
                "Massive neoplastic lymphoblast breakdown releases huge quantities of intracellular potassium, phosphate, and nucleic acids; rasburicase converts uric acid directly to soluble allantoin, preventing acute obstructive urate nephropathy."
            ),
            "PLAB / UKMLA": (
                "Diagnostic criteria and red flags for childhood acute lymphoblastic leukemia",
                "Unexplained persistent bone or joint pain waking the child at night, prolonged fever, progressive pallor, generalized lymphadenopathy, and unexplained bruising or petechiae warranting immediate full blood count and blood film.",
                "Peripheral blood pancytopenia or extreme leukocytosis with circulating blast cells mandates urgent same-day referral to a pediatric tertiary oncology center for bone marrow aspirate and biopsy."
            ),
            "AMC": (
                "Opsoclonus-myoclonus-ataxia syndrome (dancing eyes-dancing feet) paraneoplastic manifestation",
                "Paraneoplastic autoimmune neurological syndrome characterized by rapid, chaotic conjugate eye movements, myoclonic jerking, and ataxia associated with occult abdominal or thoracic neuroblastoma.",
                "Autoantibodies cross-react against cerebellar and brainstem neurons; thorough cross-sectional imaging (CT or MRI) and urinary catecholamine metabolites (VMA/HVA) are indicated to detect the underlying neuroblastoma."
            ),
            "MCCQE": (
                "Febrile neutropenia in pediatric oncology: empiric broad-spectrum antimicrobial protocol",
                "Immediate administration (within 60 minutes, the 'golden hour') of intravenous antipseudomonal beta-lactam monotherapy (cefepime, piperacillin-tazobactam, or meropenem) for temperature >= 38.3 C with ANC < 500/uL.",
                "Neutropenic patients lack the capacity to mount a local inflammatory response; unchecked bacterial infection (especially Pseudomonas aeruginosa) causes bacteremia, rapid septic shock, and death within hours."
            ),
            "FCPS": (
                "Wilms tumor (nephroblastoma) staging, nephrectomy principles, and biopsy avoidance",
                "Performing radical transperitoneal nephrectomy with lymph node sampling without preoperative percutaneous biopsy to prevent tumor spillage and upgrading the stage from I/II to III.",
                "Spillage of tumor cells during open biopsy or operative capsular rupture mandates whole-abdomen radiation therapy and intensified chemotherapy to prevent catastrophic peritoneal relapse."
            ),
            "NLE": (
                "Clinical presentation and diagnostic hallmarks of acute lymphoblastic leukemia in toddlers",
                "Lethargy, refusal to walk or limp due to leukemic bone expansion, mucosal bleeding, recurrent infections, and hepatosplenomegaly, confirmed by bone marrow aspirate demonstrating >= 20% lymphoblasts.",
                "ALL is the most common childhood malignancy (peak incidence 2-5 years); marrow replacement by immature lymphoid blasts causes anemia, thrombocytopenia, and neutropenia."
            ),
            "NEET PG": (
                "Syndromic associations and genetic loci of Wilms tumor: WAGR, Denys-Drash, and Beckwith-Wiedemann",
                "WAGR syndrome (Wilms, Aniridia, Genitourinary anomalies, Retardation) with WT1 deletion on 11p13; Beckwith-Wiedemann (hemihypertrophy, macroglossia, omphalocele) with WT2/IGF2 dysregulation on 11p15.",
                "Denys-Drash syndrome is caused by dominant point mutations in WT1 leading to diffuse mesangial sclerosis, early renal failure, male pseudohermaphroditism, and > 90% risk of Wilms tumor."
            ),
            "MRCP": (
                "Retinoblastoma genetics (RB1 'two-hit' hypothesis) and trilateral retinoblastoma",
                "Inactivation of both alleles of the RB1 tumor suppressor gene on chromosome 13q14, presenting with leukocoria (white pupillary reflex) and strabismus, with risk of intracranial pineoblastoma.",
                "Knudson two-hit model: in hereditary retinoblastoma, the first mutation is germline and present in all cells; the second mutation occurs somatically, predisposing to bilateral tumors and secondary osteosarcomas."
            ),
            "MRCEM": (
                "Superior mediastinal syndrome (SMS) and airway compromise in T-cell lymphoblastic lymphoma",
                "Adolescent presenting with dyspnea, facial swelling, venous engorgement of neck, and anterior mediastinal mass on chest radiography, requiring emergent airway stabilization in an upright sitting position.",
                "Extrinsic compression of the trachea and superior vena cava by an anterior mediastinal lymphoma leads to life-threatening complete airway obstruction under supine sedation; urgent corticosteroids or radiation are indicated."
            ),
            "SMLE": (
                "Osteosarcoma versus Ewing sarcoma distinction in pediatric bone tumors",
                "Osteosarcoma occurs in metaphyses of long bones with 'sunburst' periosteal reaction and Codman triangle; Ewing sarcoma occurs in diaphyses with 'onion-skin' periosteal lamellation and t(11;22) translocation.",
                "Ewing sarcoma is a small round blue cell tumor of neural crest origin driven by EWSR1-FLI1 fusion; osteosarcoma is characterized by malignant spindle cells producing unmineralized osteoid matrix."
            ),
            "HAAD / DHA": (
                "Surveillance protocols for abdominal tumors in children with Beckwith-Wiedemann syndrome",
                "Serial abdominal ultrasound every 3 months until age 8 years and serum alpha-fetoprotein (AFP) every 3 months until age 4 years for early detection of Wilms tumor and hepatoblastoma.",
                "Children with Beckwith-Wiedemann syndrome or isolated hemihypertrophy harbor an 800-fold increased risk of embryonal abdominal tumors; routine non-invasive surveillance captures tumors at early localized stages."
            ),
            "UHS MBBS": (
                "Clinical features and differential diagnosis of pediatric leukocoria (white pupillary reflex)",
                "Absence of the normal red reflex on direct ophthalmoscopy replacing it with a white pupil (leukocoria), indicating retinoblastoma, congenital cataract, persistent fetal vasculature, or retinopathy of prematurity.",
                "Retinoblastoma is the most critical and life-threatening cause of leukocoria in infancy; immediate pediatric ophthalmology examination under general anesthesia is required to save life and vision."
            )
        }
    },

    # Domain 141: Pediatric Primary Immunodeficiency (SCID, CGD, Wiskott-Aldrich)
    {
        "id": "domain_141_pediatric_immunology",
        "entity": "Primary immunodeficiency disorders: Severe combined immunodeficiency (SCID), chronic granulomatous disease (CGD), and Wiskott-Aldrich syndrome",
        "hallmark": "recurrent severe opportunistic infections (Pneumocystis jirovecii, Candida), failure to thrive, absent lymphoid tissue/thymic shadow, or triad of eczema, thrombocytopenia, and recurrent pyogenic infections",
        "system": "General Principles",
        "ref_key": "peds_immunology",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Pediatrics",
            "FCPS": "Pediatrics",
            "UHS MBBS": "Pediatrics",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Molecular genetics and cellular deficits in X-linked severe combined immunodeficiency (SCID)",
                "Mutation in the IL2RG gene encoding the common gamma chain (gamma-c) of cytokine receptors for IL-2, IL-4, IL-7, IL-9, IL-15, and IL-21, leading to absent T cells and NK cells with non-functional B cells (T- B+ NK- phenotype).",
                "IL-7 receptor signaling is essential for thymic T-cell progenitor survival and proliferation; IL-15 signaling is required for natural killer cell maturation; lack of T-cell help renders B cells functionally incompetent."
            ),
            "Step 2 CK": (
                "T-cell receptor excision circle (TREC) newborn screening and clinical presentation of SCID",
                "Absent or markedly low TRECs on dried blood spot newborn screening, confirmed by flow cytometry showing profound lymphopenia (< 1,500 lymphocytes/uL) and absent thymic shadow on chest radiograph.",
                "TRECs are circular DNA by-products of V(D)J T-cell receptor gene rearrangement formed in thymocytes; low TREC levels detect T-cell lymphopenia before the onset of life-threatening opportunistic infections."
            ),
            "Step 3": (
                "Infection prophylaxis and curative hematopoietic stem cell transplantation (HSCT) in SCID",
                "Immediate strict protective isolation, administration of trimethoprim-sulfamethoxazole (PCP prophylaxis), fluconazole, IVIG replacement, avoidance of live vaccines, and urgent HLA-matched HSCT.",
                "HSCT before 3.5 months of age or prior to the onset of invasive opportunistic infections achieves > 90% long-term survival, reconstituting normal cellular and humoral immunity."
            ),
            "PLAB / UKMLA": (
                "Absolute contraindication of live attenuated vaccines in infant severe immunodeficiency",
                "Withholding BCG, rotavirus, oral polio (OPV), and MMR vaccines in infants with suspected or confirmed primary cellular immunodeficiency or severe T-cell lymphopenia.",
                "Administering live rotavirus vaccine to an infant with unrecognized SCID causes persistent severe dehydrating viral gastroenteritis; BCG vaccination causes disseminated, potentially fatal BCG infection."
            ),
            "AMC": (
                "Chronic granulomatous disease (CGD) molecular defect and catalase-positive organisms",
                "X-linked mutation in the CYBB gene encoding the gp91phox subunit of the phagocyte NADPH oxidase complex, impairing the respiratory burst and predisposing to recurrent catalase-positive infections.",
                "Catalase-positive pathogens (Staphylococcus aureus, Burkholderia cepacia, Serratia marcescens, Nocardia, Aspergillus) destroy their own endogenous hydrogen peroxide, preventing neutrophils from killing them."
            ),
            "MCCQE": (
                "Dihydrorhodamine (DHR) flow cytometry assay in chronic granulomatous disease diagnosis",
                "Measurement of neutrophil superoxide production via dihydrorhodamine 123 (DHR) oxidation to fluorescent rhodamine on flow cytometry, showing absent fluorescence shift upon stimulation.",
                "DHR flow cytometry has replaced the older nitroblue tetrazolium (NBT) slide test; it provides rapid quantitative evaluation and readily identifies carrier mothers of X-linked CGD."
            ),
            "FCPS": (
                "Interferon-gamma therapy and long-term antimicrobial prophylaxis in CGD",
                "Lifelong daily oral prophylaxis with trimethoprim-sulfamethoxazole and itraconazole combined with subcutaneous recombinant interferon-gamma (IFN-gamma) three times weekly.",
                "Interferon-gamma upregulates non-oxidative bacterial killing mechanisms and increases phagocyte-mediated host defense, reducing the frequency of severe life-threatening fungal and bacterial infections by 70%."
            ),
            "NLE": (
                "Clinical triad and laboratory hallmark of Wiskott-Aldrich syndrome",
                "Triad of atopic eczema, microthrombocytopenia (small platelets with low count), and recurrent sinopulmonary and viral infections, caused by mutations in the WAS gene on the X chromosome.",
                "WAS protein regulates actin cytoskeleton reorganization in hematopoietic cells and platelets; small defective platelets have shortened survival, causing severe early-onset petechiae and mucosal bleeding."
            ),
            "NEET PG": (
                "Hyper-IgM syndrome molecular genetics and CD40 ligand (CD154) deficiency",
                "Defect in CD40 ligand (CD154) on activated CD4+ T helper cells (X-linked), preventing interaction with CD40 on B cells and halting immunoglobulin heavy-chain class-switch recombination.",
                "B cells cannot switch from IgM production to IgG, IgA, or IgE; laboratory testing reveals normal or elevated serum IgM with profoundly decreased or undetectable IgG, IgA, and IgE levels."
            ),
            "MRCP": (
                "Common variable immunodeficiency (CVID) clinical presentation and non-infectious complications",
                "Hypogammaglobulinemia with recurrent sinopulmonary infections presenting in late adolescence or early adulthood, complicated by non-caseating granulomatous lung disease, splenomegaly, and autoimmune cytopenias.",
                "CVID is characterized by defective B-cell differentiation into plasma cells with normal B-cell numbers; diagnosis requires low IgG with low IgA/IgM and poor antibody response to protein/polysaccharide vaccines."
            ),
            "MRCEM": (
                "Severe combined immunodeficiency with Pneumocystis jirovecii pneumonia presentation",
                "Infant presenting with acute respiratory failure, tachypnea, hypoxia out of proportion to chest findings, and bilateral diffuse interstitial infiltrates, treated with high-dose IV co-trimoxazole and corticosteroids.",
                "PCP pneumonia in an infant younger than 6 months without known HIV infection is a cardinal presenting manifestation of undiagnosed severe combined immunodeficiency, requiring urgent immunologic workup."
            ),
            "SMLE": (
                "DiGeorge syndrome (22q11.2 microdeletion) clinical findings and CATCH-22 mnemonic",
                "Cardiac defects (tetralogy of Fallot, truncus arteriosus), Abnormal facies, Thymic hypoplasia (T-cell deficit), Cleft palate, Hypocalcemia (parathyroid hypoplasia), and 22q11.2 microdeletion on FISH or microarray.",
                "Neonatal hypocalcemic tetany/seizures from absent parathyroid glands and absent thymic shadow on chest radiograph prompt cytogenetic testing for 22q11.2 deletion syndrome."
            ),
            "HAAD / DHA": (
                "Intravenous or subcutaneous immunoglobulin replacement protocols for humoral immunodeficiency",
                "Administering lifelong monthly IVIG (300-500 mg/kg) or weekly subcutaneous immunoglobulin (SCIG) maintaining trough serum IgG levels above 700-800 mg/dL to prevent recurrent bacterial infections.",
                "Adequate immunoglobulin replacement halts the progression of chronic bronchiectasis, sinonasal destruction, and recurrent hospital admissions in agammaglobulinemia and CVID."
            ),
            "UHS MBBS": (
                "X-linked (Bruton) agammaglobulinemia: Bruton tyrosine kinase (BTK) defect",
                "Recurrent pyogenic bacterial infections (Streptococcus pneumoniae, Haemophilus influenzae) beginning after 6 months of age as maternal transplacental IgG wanes, with absent circulating B cells (CD19/CD20) and absent tonsils.",
                "BTK cytoplasmic tyrosine kinase is essential for pre-B cell receptor signaling and maturation; arrest at the pre-B cell stage results in complete absence of mature B lymphocytes and all immunoglobulin classes."
            )
        }
    },

    # Domain 142: Pediatric Nephrology & Fluid/Electrolyte Emergencies
    {
        "id": "domain_142_pediatric_nephrology",
        "entity": "Pediatric renal syndromes: Hemolytic uremic syndrome (HUS), minimal change disease, and congenital adrenal hyperplasia",
        "hallmark": "bloody diarrhea followed by pallor, oliguria, and petechiae; generalized periorbital edema with heavy proteinuria; or ambiguous genitalia in female newborn with hyponatremia and hyperkalemia",
        "system": "Renal",
        "ref_key": "peds_nephrology",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pediatrics",
            "FCPS": "Pediatrics",
            "UHS MBBS": "Pediatrics",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Pathophysiology of Shiga toxin-mediated hemolytic uremic syndrome (STEC-HUS)",
                "Shiga toxin (Stx-1/Stx-2) binding to endothelial globotriaosylceramide (Gb3) receptors causing endothelial injury, microvascular thrombosis, microangiopathic hemolytic anemia, and acute renal failure.",
                "Shearing of circulating erythrocytes across fibrin-rich microthrombi creates schistocytes on blood smear; platelet consumption in thrombi produces thrombocytopenia without activating coagulation cascades (normal PT/PTT)."
            ),
            "Step 2 CK": (
                "Clinical management of D+ hemolytic uremic syndrome: avoiding antibiotics and antimotility agents",
                "Supportive care with careful fluid and electrolyte management, red blood cell transfusions for severe anemia, and strict avoidance of antibiotics and antimotility agents during the diarrheal prodrome.",
                "Antibiotic administration in enterohemorrhagic E. coli (O157:H7) infection increases Shiga toxin production and systemic release via bacterial lysis, significantly increasing the incidence of HUS."
            ),
            "Step 3": (
                "Minimal change disease initial therapy and management of steroid resistance",
                "First-line induction therapy with oral prednisone (60 mg/m2/day or 2 mg/kg/day for 4-6 weeks); renal biopsy and second-line calcineurin inhibitors (cyclosporine/tacrolimus) indicated for steroid-resistant nephrotic syndrome.",
                "Over 85-90% of pediatric minimal change disease achieves complete remission with high-dose corticosteroids; persistent proteinuria after 4-8 weeks indicates possible focal segmental glomerulosclerosis (FSGS)."
            ),
            "PLAB / UKMLA": (
                "Management of complications of pediatric nephrotic syndrome: thrombosis and peritonitis",
                "Urgent diagnostic paracentesis and empiric broad-spectrum intravenous cefotaxime for spontaneous bacterial peritonitis (Streptococcus pneumoniae) in a child with ascites and fever.",
                "Urinary loss of anticoagulant factors (antithrombin III, protein S) combined with hepatic synthesis of procoagulant fibrinogen induces a hypercoagulable state; hypogammaglobulinemia predisposes to encapsulated bacterial peritonitis."
            ),
            "AMC": (
                "Congenital adrenal hyperplasia (21-hydroxylase deficiency) neonatal salt-wasting crisis",
                "Hyponatremia, hyperkalemia, hypoglycemia, and hypovolemic shock occurring at 1-2 weeks of life in an infant with ambiguous genitalia (female) or hyperpigmentation, treated with IV isotonic saline, dextrose, and hydrocortisone.",
                "21-hydroxylase deficiency blocks synthesis of cortisol and aldosterone, causing mineralocorticoid deficiency (severe salt wasting) and accumulation of 17-hydroxyprogesterone shunted into adrenal androgens."
            ),
            "MCCQE": (
                "Posterior urethral valves (PUV) presentation, voiding cystourethrogram, and decompression",
                "Male infant with poor urinary stream, palpable distended bladder, bilateral hydroureteronephrosis, confirmed by voiding cystourethrogram (VCUG) showing dilated posterior urethra, treated by urgent transurethral valve ablation.",
                "PUV is the most common cause of congenital bladder outlet obstruction in male infants; persistent high pressure impairs fetal renal parenchymal development (dysplasia) and causes oligohydramnios with lung hypoplasia."
            ),
            "FCPS": (
                "Atypical hemolytic uremic syndrome (aHUS) alternative complement pathway dysregulation",
                "Loss-of-function mutations in complement regulatory proteins (Factor H, Factor I, CD46) or gain-of-function in C3/Factor B causing unchecked alternative pathway activation, treated with eculizumab.",
                "Eculizumab is a recombinant humanized monoclonal antibody targeting complement protein C5, preventing cleavage into C5a and assembly of the membrane attack complex (C5b-9), arresting microvascular thrombosis."
            ),
            "NLE": (
                "Clinical distinction between nephrotic and nephritic syndromes in children",
                "Nephrotic syndrome characterized by heavy proteinuria (> 40 mg/m2/hr), hypoalbuminemia (< 2.5 g/dL), generalized edema, and hyperlipidemia; nephritic syndrome characterized by hematuria, hypertension, and oliguria.",
                "Minimal change disease presents with selective proteinuria due to effacement of visceral epithelial foot processes (podocytes); post-streptococcal glomerulonephritis presents with smoky tea-colored hematuria and hypertension."
            ),
            "NEET PG": (
                "Electron microscopy findings in minimal change disease versus post-streptococcal glomerulonephritis",
                "Diffuse effacement (flattening) of podocyte foot processes with normal light microscopy in minimal change disease; subepithelial electron-dense 'humps' and starry-sky immunofluorescence (C3/IgG) in PSGN.",
                "Loss of glomerular polyanion charge barrier (heparan sulfate proteoglycan) in minimal change disease permits selective filtration of negatively charged plasma albumin without cellular inflammatory infiltration."
            ),
            "MRCP": (
                "Henoch-Schönlein purpura (IgA vasculitis) nephritis monitoring and management",
                "Monitoring blood pressure, urinalysis, and spot urine protein-to-creatinine ratio weekly for 6-12 months following diagnosis; severe crescentic IgA nephritis requires pulsed methylprednisolone and immunosuppression.",
                "Renal involvement dictates long-term prognosis in IgA vasculitis; microscopic hematuria is common and usually benign, but nephrotic-range proteinuria and hypertension indicate aggressive progressive glomerulonephritis."
            ),
            "MRCEM": (
                "Acute severe pediatric hyperkalemia emergency stabilization protocol",
                "Administering intravenous 10% calcium gluconate (0.5 mL/kg) under continuous ECG monitoring to stabilize the cardiac membrane, followed by regular insulin with dextrose and inhaled albuterol to shift potassium intracellularly.",
                "Peaked T waves, PR prolongation, and QRS widening signal imminent ventricular fibrillation or asystole; calcium gluconate immediately antagonizes potassium-induced membrane excitability without lowering serum potassium levels."
            ),
            "SMLE": (
                "Vesicoureteral reflux (VUR) grading, antimicrobial prophylaxis, and surgical intervention",
                "Grading reflux from I to V by VCUG; low-grade reflux (grades I-II) managed conservatively or with low-dose prophylactic antibiotics; high-grade reflux (grades IV-V) or breakthrough infections warrant endoscopic Deflux injection or ureteral reimplantation.",
                "High-grade VUR allows infected bladder urine to reach the renal papillae (intrarenal reflux), causing acute pyelonephritis, renal parenchymal scarring, secondary hypertension, and chronic kidney disease."
            ),
            "HAAD / DHA": (
                "Universal neonatal biochemical screening for congenital adrenal hyperplasia",
                "Measuring 17-hydroxyprogesterone (17-OHP) on dried blood spot filter paper on newborn screening to identify affected infants before the onset of life-threatening salt-wasting adrenal crisis.",
                "Early identification of elevated 17-OHP allows immediate replacement of hydrocortisone and fludrocortisone, preventing fatal cardiovascular collapse and correcting gender assignment in virilized 46,XX females."
            ),
            "UHS MBBS": (
                "Pathogenesis and clinical hallmark of Post-Streptococcal Glomerulonephritis (PSGN)",
                "Immune-complex mediated glomerulonephritis developing 1 to 3 weeks after Group A beta-hemolytic streptococcal pharyngitis (or 3-6 weeks after impetigo), presenting with gross hematuria, low serum C3, and elevated ASO/anti-DNase B titers.",
                "Circulating immune complexes composed of streptococcal antigens (SPEB, NAPI) deposit in glomerular subepithelial spaces, activating complement alternative pathway, producing low C3 levels that normalize within 6-8 weeks."
            )
        }
    },

    # Domain 143: Pediatric Neurology (Infantile Spasms, SMA, Febrile Seizures)
    {
        "id": "domain_143_pediatric_neurology",
        "entity": "Pediatric neurodevelopmental and seizure disorders: Infantile spasms (West syndrome), spinal muscular atrophy (SMA), and febrile seizures",
        "hallmark": "brief symmetric flexion or extension spasms occurring in clusters with developmental regression, generalized hypotonia ('floppy infant') with tongue fasciculations and absent reflexes, or generalized seizure during fever in a toddler",
        "system": "Nervous System",
        "ref_key": "peds_neurology",
        "subjects": {
            "Step 1": "Neurology",
            "NEET PG": "Pediatrics",
            "FCPS": "Pediatrics",
            "UHS MBBS": "Pediatrics",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Molecular genetics and SMN2 copy number modifier in spinal muscular atrophy (SMA)",
                "Homozygous deletion or mutation of the survival motor neuron 1 (SMN1) gene on chromosome 5q13, where phenotypic severity is inversely correlated with the copy number of the SMN2 backup gene.",
                "SMN2 undergoes alternative splicing omitting exon 7 (producing 85-90% truncated unstable protein); higher SMN2 copy numbers generate more functional full-length SMN protein, moderating motor neuron degeneration."
            ),
            "Step 2 CK": (
                "West syndrome (infantile spasms) clinical triad and first-line pharmacotherapies",
                "Triad of epileptic spasms in clusters, developmental arrest or regression, and hypsarrhythmia on electroencephalogram (EEG), treated with adrenocorticotropic hormone (ACTH) or vigabatrin.",
                "Vigabatrin (irreversible GABA transaminase inhibitor) is specifically the treatment of choice when infantile spasms are secondary to tuberous sclerosis complex (TSC1/TSC2 mutations)."
            ),
            "Step 3": (
                "Simple versus complex febrile seizures: diagnostic evaluation and parental reassurance",
                "Simple febrile seizure is generalized, lasts < 15 minutes, occurs once in 24 hours in a neurologically normal child aged 6 months to 5 years; lumbar puncture is indicated only if signs of meningitis or incomplete immunization exist.",
                "Simple febrile seizures carry an excellent prognosis with no increased risk of long-term intellectual impairment and only a minimally elevated risk of subsequent epilepsy (1-2% vs 1% in general population); antipyretics do not prevent recurrence."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines on the management of childhood status epilepticus",
                "Administering buccal midazolam (or rectal diazepam) as first-line rescue therapy in the community/ED, repeating once at 10 minutes if seizures persist, followed by IV levetiracetam, fosphenytoin, or sodium valproate at 20 minutes.",
                "Continuous seizure activity exceeding 5 minutes risks excitotoxic cerebral injury, respiratory depression, and pharmacoresistance; rapid staged rescue terminates seizures and prevents intensive care admission."
            ),
            "AMC": (
                "Disease-modifying therapies for spinal muscular atrophy: antisense oligonucleotides and gene replacement",
                "Targeted therapies including nusinersen (intrathecal antisense oligonucleotide modifying SMN2 pre-mRNA splicing) and onasemnogene abeparvovec (AAV9 viral vector delivering full-length human SMN1 cDNA).",
                "Early disease-modifying intervention before irreversible loss of anterior horn motor neurons preserves motor milestones, eliminates ventilatory dependence, and dramatically transforms SMA natural history."
            ),
            "MCCQE": (
                "Absence epilepsy (petit mal) EEG hallmark and ethosuximide first-line therapy",
                "Brief episodes (5-15 seconds) of behavioral arrest, unresponsiveness, and eyelid fluttering without post-ictal confusion, precipitated by hyperventilation, demonstrating 3-Hz generalized spike-and-wave discharges on EEG.",
                "Ethosuximide is the first-line pharmacotherapy of choice for uncomplicated absence seizures, selectively blocking low-threshold T-type voltage-gated calcium channels in thalamic relay neurons without causing sedation."
            ),
            "FCPS": (
                "Duchenne muscular dystrophy genetics (dystrophin frame-shift) and Gowers sign",
                "X-linked recessive out-of-frame deletion in the DMD gene encoding dystrophin, leading to muscle membrane instability, calf pseudohypertrophy, marked creatine kinase elevation, and Gowers maneuver.",
                "Absence of the subsarcolemmal structural protein dystrophin uncouples the intracellular cytoskeleton from the extracellular matrix, causing progressive contraction-induced sarcolemmal tearing, myofiber necrosis, and fibrosis."
            ),
            "NLE": (
                "Clinical distinction between upper and lower motor neuron hypotonia in infants",
                "Lower motor neuron hypotonia ('floppy infant') presents with profound weakness, absent deep tendon reflexes, frog-leg posture, and tongue fasciculations (e.g., SMA), whereas central hypotonia often features brisk reflexes and preserved strength.",
                "Tongue fasciculations are pathognomonic of cranial nerve XII motor nucleus degeneration in spinal muscular atrophy type 1 (Werdnig-Hoffmann disease); deep tendon reflexes are invariably absent."
            ),
            "NEET PG": (
                "Electroencephalographic patterns in pediatric epilepsies: Hypsarrhythmia, 3-Hz spike-wave, and Rolandic spikes",
                "High-voltage, chaotic, disorganized background with multifocal sharp waves (hypsarrhythmia) in West syndrome; centrotemporal spikes in benign Rolandic epilepsy; 3-Hz generalized spike-wave in absence seizures.",
                "Prompt recognition and treatment of hypsarrhythmia with high-dose ACTH or oral corticosteroids is critical to arrest ongoing epileptic encephalopathy and improve long-term cognitive developmental outcomes."
            ),
            "MRCP": (
                "Tuberous sclerosis complex clinical features, genetics, and mTOR inhibitor therapy",
                "Autosomal dominant mutations in TSC1 (hamartin) or TSC2 (tuberin) causing ash-leaf hypopigmented macules, shagreen patches, subependymal giant cell astrocytomas (SEGA), and cardiac rhabdomyomas, treated with everolimus.",
                "Loss of TSC1/TSC2 disinhibits the mammalian target of rapamycin (mTOR) kinase cascade, driving uncontrolled cell growth; mTOR inhibitors (everolimus/sirolimus) shrink SEGAs and renal angiomyolipomas."
            ),
            "MRCEM": (
                "Pediatric acute non-traumatic coma and raised intracranial pressure emergency management",
                "Elevating head of bed to 30 degrees, maintaining midline neutral neck position, administering 3% hypertonic saline or 20% mannitol, and endotracheal intubation aiming for normocapnia (PaCO2 35-40 mm Hg).",
                "Aggressive hyperventilation to PaCO2 < 30 mm Hg causes severe cerebral vasoconstriction and secondary ischemic brain damage; hyperosmolar therapy reduces brain water content while preserving cerebral perfusion pressure."
            ),
            "SMLE": (
                "Guillain-Barré syndrome (AIDP) in pediatric patients: clinical features and IVIG therapy",
                "Ascending symmetrical flaccid paralysis following a gastrointestinal (Campylobacter jejuni) or respiratory infection, accompanied by hyporeflexia and albuminocytological dissociation on lumbar puncture, treated with IVIG.",
                "Molecular mimicry between C. jejuni lipooligosaccharides and human peripheral nerve gangliosides triggers autoantibody-mediated demyelination; intravenous immunoglobulin or plasmapheresis accelerates functional motor recovery."
            ),
            "HAAD / DHA": (
                "Universal newborn screening and clinical management for phenylketonuria (PKU)",
                "Autosomal recessive phenylalanine hydroxylase (PAH) deficiency detected on newborn dried blood spot screening, managed with strict lifelong phenylalanine-restricted diet supplemented with tyrosine.",
                "Elevated phenylalanine competitively inhibits large neutral amino acid transport across the blood-brain barrier, impairing cerebral protein and neurotransmitter synthesis, causing severe irreversible intellectual disability without early dietary therapy."
            ),
            "UHS MBBS": (
                "Clinical examination of the 'floppy infant': traction response and vertical suspension",
                "Eliciting head lag on traction from supine position, slipped-through sensation on vertical suspension, and draped appearance over the examiner's hand on horizontal ventral suspension confirming generalized hypotonia.",
                "Assessing resting posture, deep tendon reflexes, cranial nerves (suck/swallow, tongue fasciculations), and alertness localizes the lesion to the central nervous system, anterior horn cell, neuromuscular junction, or muscle."
            )
        }
    },

    # Domain 144: Obstetric Critical Care (AFE, Peripartum Cardiomyopathy, Uterine Inversion)
    {
        "id": "domain_144_obstetric_critical_care",
        "entity": "Obstetric emergencies: Amniotic fluid embolism (AFE), peripartum cardiomyopathy, and acute uterine inversion",
        "hallmark": "sudden cardiorespiratory collapse and coagulopathy/DIC during labor/cesarean, orthopnea and acute heart failure in late third trimester or early postpartum, or profound postpartum shock with visible bluish-gray mass at introitus",
        "system": "Pregnancy",
        "ref_key": "ob_critical_care",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Obstetrics",
            "FCPS": "Obstetrics",
            "UHS MBBS": "Obstetrics",
            "other": "Obstetrics"
        },
        "concepts": {
            "Step 1": (
                "Pathophysiology of amniotic fluid embolism: anaphylactoid syndrome of pregnancy",
                "Entry of fetal antigens and procoagulant amniotic components into the maternal venous circulation triggering acute pulmonary vasospasm, profound right ventricular failure, and massive consumptive coagulopathy (DIC).",
                "AFE is not a mechanical embolic occlusion but an acute anaphylactoid immune-mediated cascade activating complement, tissue factor, and endothelin release, resulting in cardiovascular collapse and severe uterine atony."
            ),
            "Step 2 CK": (
                "Immediate resuscitation and hemodynamic stabilization in amniotic fluid embolism",
                "Immediate high-quality CPR with left uterine displacement, rapid endotracheal intubation with 100% oxygen, inotropic support (epinephrine/norepinephrine), and prompt administration of cryoprecipitate, platelets, and tranexamic acid.",
                "Early consumptive coagulopathy with profound hypofibrinogenemia (< 150-200 mg/dL) develops within minutes; aggressive replacement of fibrinogen with cryoprecipitate or fibrinogen concentrate is life-saving."
            ),
            "Step 3": (
                "Peripartum cardiomyopathy (PPCM) diagnosis, guideline medical therapy, and anticoagulation",
                "Development of heart failure with LVEF < 45% in the last month of pregnancy or within 5 months postpartum in the absence of other causes, treated with beta-blockers, loop diuretics, hydralazine/nitrates (if pregnant), and therapeutic anticoagulation.",
                "Cleavage product of prolactin (16-kDa prolactin) promotes endothelial cell apoptosis and myocardial capillary rarefaction; bromocriptine is an emerging disease-modifying therapy; ACE inhibitors and ARBs are strictly contraindicated during pregnancy."
            ),
            "PLAB / UKMLA": (
                "Resuscitative hysterotomy (perimortem cesarean section) in maternal cardiac arrest",
                "Performing emergency resuscitative hysterotomy at the site of arrest within 4 to 5 minutes of unheralded maternal cardiac arrest in a pregnancy >= 20 weeks gestation.",
                "Aortocaval compression by the gravid uterus reduces venous return and cardiac output by 30-40% during CPR; rapid uterine evacuation relieves caval compression, dramatically increasing maternal venous return and survival."
            ),
            "AMC": (
                "Acute uterine inversion: immediate manual replacement (Johnson maneuver) and tocolysis",
                "Immediate manual replacement of the inverted uterine fundus through the cervix (Johnson maneuver) prior to administering uterotonic agents; administer uterine relaxants (nitroglycerin or terbutaline) if the cervical ring has contracted.",
                "Attempting placental removal or administering uterotonics before fundal repositioning tightens the cervical contraction ring, trapping the inverted fundus and exacerbating neurogenic and hemorrhagic shock."
            ),
            "MCCQE": (
                "Postpartum hemorrhage surgical and interventional escalation pathway",
                "Sequential escalation from bimanual compression and medical uterotonics (oxytocin, ergometrine, carboprost, misoprostol) to intrauterine balloon tamponade (Bakri balloon), B-Lynch compressive sutures, uterine artery embolization, or emergency hysterectomy.",
                "Failure of medical uterotonics warrants rapid mechanical tamponade; intrauterine balloon tamponade achieves hemostasis in > 80% of uterine atony cases, avoiding emergency laparotomy in stable patients."
            ),
            "FCPS": (
                "Surgical management of morbidly adherent placenta (placenta accreta spectrum - PAS)",
                "Planned cesarean hysterectomy at 34-35 weeks gestation by a multidisciplinary surgical team without attempting manual placental detachment, utilizing prophylactic internal iliac artery balloon catheters.",
                "Forced manual removal of placenta increta or percreta tears deep myometrial vessels and parametrial sinuses, precipitating cataclysmic hemorrhage exceeding 3-5 liters within minutes."
            ),
            "NLE": (
                "Clinical distinction between placental abruption and placenta previa",
                "Placental abruption presents with painful dark vaginal bleeding, hypertonic 'woody' tender uterus, and fetal distress; placenta previa presents with painless bright red recurrent vaginal bleeding and soft, relaxed uterus.",
                "Digital vaginal examination is strictly contraindicated in unheralded antepartum hemorrhage until transabdominal or transvaginal ultrasound confirms the position of the placenta to rule out previa."
            ),
            "NEET PG": (
                "HELLP syndrome diagnostic criteria and magnesium sulfate eclampsia prophylaxis",
                "Hemolysis (microangiopathic blood smear, elevated LDH > 600 IU/L), Elevated Liver enzymes (AST/ALT >= 2 times normal), and Low Platelets (< 100,000/uL), treated with intravenous magnesium sulfate and prompt delivery.",
                "Platelet microthrombi and sinusoidal fibrin deposition cause hepatic necrosis and Glisson capsule distension (right upper quadrant pain); delivery is the only definitive curative intervention."
            ),
            "MRCP": (
                "Postpartum thyroiditis: biphasic course and antibody associations",
                "Transient hyperthyroidism occurring 1 to 4 months postpartum due to lymphocytic follicular destruction, followed by hypothyroidism at 4 to 8 months, strongly associated with anti-thyroid peroxidase (anti-TPO) antibodies.",
                "Distinguished from Graves disease by low radioactive iodine uptake (or absent vascularity on Doppler ultrasound) and absence of TSH receptor stimulating antibodies; beta-blockers manage hyperthyroid symptoms."
            ),
            "MRCEM": (
                "Massive obstetric transfusion protocol and target resuscitation endpoints",
                "Activation of a 1:1:1 balanced massive transfusion protocol (packed red blood cells, fresh frozen plasma, and platelets) with early administration of tranexamic acid (within 3 hours) and cryoprecipitate.",
                "Obstetric hemorrhage is characterized by profound consumptive loss of fibrinogen; maintaining plasma fibrinogen > 200 mg/dL, platelets > 50,000/uL, and normal ionized calcium improves maternal survival."
            ),
            "SMLE": (
                "Severe preeclampsia diagnostic criteria and blood pressure management targets",
                "Systolic BP >= 160 mm Hg or diastolic BP >= 110 mm Hg with target organ damage (headache, scotoma, creatinine > 1.1 mg/dL, pulmonary edema), treated immediately with intravenous labetalol, hydralazine, or oral nifedipine.",
                "Rapidly lowering severe maternal hypertension prevents hemorrhagic stroke and hypertensive encephalopathy; target blood pressure is 140-150 / 90-100 mm Hg to preserve uteroplacental perfusion."
            ),
            "HAAD / DHA": (
                "Contraceptive counseling and pregnancy planning in women with peripartum cardiomyopathy",
                "Counseling against future pregnancies if persistent left ventricular dysfunction (LVEF < 50%) remains, and recommending non-estrogen long-acting reversible contraception (LARC: levonorgestrel IUD or etonogestrel implant).",
                "Subsequent pregnancies in women with persistent myocardial impairment carry a 30-50% risk of clinical heart failure relapse and a significant maternal mortality risk (up to 15-20%)."
            ),
            "UHS MBBS": (
                "Third stage of labor active management (AMTSL) components to prevent postpartum hemorrhage",
                "Routine administration of a prophylactic uterotonic agent (intramuscular oxytocin 10 IU) immediately upon delivery of the anterior shoulder, delayed cord clamping (1-3 minutes), and controlled cord traction.",
                "Active management of the third stage of labor reduces the incidence of primary postpartum hemorrhage due to uterine atony by more than 60% compared to physiological expectant management."
            )
        }
    }
]
