"""
Mega Data Part K: Domains 64 to 69 (Hematology, Oncology, Gastroenterology & Endocrine HTN)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_K = [
    # Domain 64: Hodgkin and Non-Hodgkin Lymphomas
    {
        "id": "domain_64_lymphomas",
        "entity": "Hodgkin lymphoma and aggressive non-Hodgkin lymphoma",
        "hallmark": "painless enlarging cervical lymphadenopathy, drenching night sweats, unexplained weight loss > 10%, and pruritus triggered by alcohol ingestion",
        "system": "Hematology",
        "ref_key": "anemia",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Reed-Sternberg cell morphology, CD15/CD30 immunophenotype, and cytokine signaling",
                "Neoplastic binucleated giant cells with prominent eosinophilic inclusion-like nucleoli ('owl-eye' appearance) derived from germinal center B cells, expressing CD15 and CD30.",
                "In classic Hodgkin lymphoma, rare Reed-Sternberg cells secrete cytokines (IL-5 recruiting eosinophils, IL-6, TGF-beta) producing an extensive background reactive inflammatory infiltrate."
            ),
            "Step 2 CK": (
                "Excisional lymph node biopsy and Ann Arbor / Lugano staging with PET-CT",
                "Performing complete excisional lymph node biopsy (avoiding fine-needle aspiration) and whole-body FDG PET-CT staging; initiating ABVD chemotherapy regimen.",
                "Fine-needle aspiration is inadequate for diagnosing lymphoma because nodal architectural preservation is required; initial therapy for Hodgkin lymphoma is doxorubicin, bleomycin, vinblastine, dacarbazine (ABVD)."
            ),
            "Step 3": (
                "Bleomycin pulmonary toxicity and anthracycline-induced cardiotoxicity monitoring",
                "Baseline and serial pulmonary function tests (DLCO) for bleomycin-induced pneumonitis, and baseline echocardiogram (LVEF) for doxorubicin-induced dilated cardiomyopathy.",
                "Long-term lymphoma survivorship requires monitoring for therapy-induced complications: bleomycin causes fatal pulmonary fibrosis (stop if DLCO falls); anthracyclines carry lifetime dose limits."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines for 2-week wait suspected cancer pathway in unexplained lymphadenopathy",
                "Urgent 2-week wait referral for persistent, firm, non-tender lymph nodes > 2 cm, especially with B-symptoms (fever, night sweats, weight loss) or mediastinal widening.",
                "NICE guidelines mandate immediate 2-week cancer referral for unexplained lymphadenopathy persisting beyond 4-6 weeks to expedite excisional tissue diagnosis."
            ),
            "AMC": (
                "Diffuse Large B-Cell Lymphoma (DLBCL) presentation and R-CHOP chemoimmunotherapy",
                "Rapidly enlarging symptomatic nodal or extranodal mass, confirmed as high-grade CD20+ B-cell lymphoma, treated with rituximab, cyclophosphamide, doxorubicin, vincristine, and prednisolone.",
                "Australian hematology guidelines detail DLBCL as the most common aggressive non-Hodgkin lymphoma in adults, requiring prompt baseline staging and R-CHOP chemoimmunotherapy."
            ),
            "MCCQE": (
                "Burkitt lymphoma cytogenetics: t(8;14) c-myc translocation and tumor lysis prevention",
                "Translocation t(8;14) placing c-myc proto-oncogene under the Ig heavy chain enhancer, causing rapid doubling time and extreme risk of spontaneous tumor lysis syndrome.",
                "Canadian medical objectives emphasize that Burkitt lymphoma requires aggressive inpatient intravenous hydration, rasburicase or allopurinol, and intensive multi-agent chemotherapy."
            ),
            "FCPS": (
                "Surgical indications: Excisional biopsy versus core needle biopsy",
                "Complete surgical excision of the most accessible intact lymph node under local/regional anesthesia, preserving nodal architecture for immunohistochemistry and flow cytometry.",
                "In surgical oncology, core needle biopsy is acceptable only if lymph nodes are surgically inaccessible (deep retroperitoneum); superficial cervical or axillary nodes require complete excisional biopsy."
            ),
            "NLE": (
                "Ann Arbor staging classification and constitutional 'B' symptoms",
                "Stage I (single node region), Stage II (two regions on same side of diaphragm), Stage III (both sides of diaphragm), Stage IV (diffuse extranodal involvement); 'B' indicates fevers, sweats, weight loss.",
                "National licensing curricula test the Ann Arbor staging system: presence of B-symptoms confers worse prognosis and often dictates treatment intensity."
            ),
            "NEET PG": (
                "Nodular sclerosis Hodgkin lymphoma: Lacunar cells and collagenous bands",
                "Most common subtype of Hodgkin lymphoma, occurring frequently in young women with anterior mediastinal masses, characterized by lacunar Reed-Sternberg variants and dense collagen bands.",
                "NEET PG pathology questions focus on nodular sclerosis: broad collagenous bands dividing lymphoid tissue into nodules, and lacunar cells where cytoplasm retracts during tissue fixation."
            ),
            "MRCP": (
                "Secondary malignancies and cardiovascular disease in long-term Hodgkin survivors",
                "High incidence of secondary breast cancer (in women receiving mantle radiation), lung cancer, acute leukemia, and accelerated coronary artery disease 10 to 20 years post-treatment.",
                "MRCP clinical oncology emphasizes survivorship: women who received chest radiation before age 30 require annual screening breast MRI and mammography starting 8-10 years post-radiation."
            ),
            "MRCEM": (
                "Superior Vena Cava (SVC) syndrome emergency presentation and stabilization",
                "Facial plethora, periorbital edema, distended neck and chest wall veins, and dyspnea caused by mediastinal lymphoma compressing the SVC, managed with elevation, steroids, and urgent oncology consultation.",
                "In emergency care, SVC obstruction from lymphoma requires rapid tissue diagnosis before steroids if clinically stable; severe airway compromise requires emergency dexamethasone and radiation."
            ),
            "SMLE": (
                "Follicular lymphoma cytogenetics: t(14;18) BCL-2 translocation and indolent course",
                "Overexpression of anti-apoptotic BCL-2 protein driven by t(14;18) translocation, presenting with painless generalized waxing-and-waning lymphadenopathy and risk of transformation to DLBCL.",
                "Saudi clinical guidelines emphasize watch-and-wait management for asymptomatic advanced-stage follicular lymphoma, reserving systemic therapy for symptomatic or bulky disease."
            ),
            "HAAD / DHA": (
                "Tumor Lysis Syndrome prophylaxis protocols (hydration, rasburicase, and allopurinol)",
                "Pre-chemotherapy risk stratification, aggressive IV hydration (2-3 L/m2/day), and rasburicase (recombinant urate oxidase) for high-risk aggressive lymphomas.",
                "UAE health standards mandate rasburicase for high-risk tumor lysis syndrome, enzymatically converting uric acid into highly soluble allantoin to prevent acute renal failure."
            ),
            "UHS MBBS": (
                "Histopathological classification of Hodgkin lymphoma subtypes (WHO criteria)",
                "Classic Hodgkin lymphoma: Nodular sclerosis, Mixed cellularity, Lymphocyte-rich, Lymphocyte-depleted; contrasted with Nodular Lymphocyte Predominant Hodgkin Lymphoma (popcorn cells).",
                "Undergraduate pathology contrasts classic Hodgkin lymphoma (CD15+, CD30+) with nodular lymphocyte-predominant Hodgkin lymphoma (CD20+, CD45+, 'popcorn' or LP cells)."
            )
        }
    },

    # Domain 65: Myeloproliferative Neoplasms
    {
        "id": "domain_65_myeloproliferative",
        "entity": "polycythemia vera and essential thrombocythemia",
        "hallmark": "aquagenic pruritus following warm showers, severe erythromelalgia (burning pain in hands and feet), facial plethora, splenomegaly, and hematocrit 62%",
        "system": "Hematology",
        "ref_key": "anemia",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "JAK2 V617F mutation and constitutive tyrosine kinase signaling",
                "Valine-to-phenylalanine substitution at codon 617 (V617F) in the pseudokinase domain of JAK2, causing constitutive kinase activation and cytokine-independent erythroid proliferation.",
                "The JAK2 V617F mutation renders hematopoietic stem cells hypersensitive to erythropoietin, thrombopoietin, and G-CSF, driving uncontrolled panmyelosis despite suppressed serum erythropoietin."
            ),
            "Step 2 CK": (
                "Diagnostic criteria and therapeutic phlebotomy target hematocrit",
                "Elevated hemoglobin (> 16.5 g/dL in men, > 16.0 in women), JAK2 mutation, and low serum erythropoietin; therapeutic phlebotomy targeting hematocrit strictly < 45% plus low-dose aspirin.",
                "The CYTO-PV trial proved that maintaining hematocrit strictly below 45% reduces cardiovascular deaths and major thrombotic events fourfold compared to a target of 45-50%."
            ),
            "Step 3": (
                "Cytoreductive therapy indications (Hydroxyurea) and progression to myelofibrosis",
                "Indications for cytoreductive therapy (hydroxyurea): age >= 60 years or history of thrombosis; surveillance for transformation to post-PV myelofibrosis or acute myeloid leukemia.",
                "High-risk polycythemia vera warrants cytoreduction with hydroxyurea or interferon-alpha; bone marrow fibrosis with tear-drop poikilocytes signals secondary myelofibrosis."
            ),
            "PLAB / UKMLA": (
                "NICE and BSH guidelines on thrombotic risk stratification and management",
                "Stratifying PV and ET patients into low-risk (age < 60 and no prior thrombosis) and high-risk (age >= 60 or prior thrombosis) to direct hydroxyurea and aspirin therapy.",
                "British Society for Haematology guidelines mandate indefinite low-dose aspirin (75 mg daily) for all PV patients unless contraindicated, alongside strict hematocrit control."
            ),
            "AMC": (
                "Essential Thrombocythemia (ET) diagnostic workup and CALR / MPL mutations",
                "Sustained platelet count >= 450 x 10^9/L, bone marrow megakaryocyte hyperplasia, and screening for JAK2 (60%), calreticulin (CALR 20-25%), and MPL (3-5%) driver mutations.",
                "Australian guidelines note that patients lacking JAK2 mutations frequently harbor CALR exon 9 indels or MPL mutations; CALR-mutated ET carries lower thrombotic risk than JAK2-positive disease."
            ),
            "MCCQE": (
                "Primary versus secondary polycythemia differentiation (serum erythropoietin level)",
                "Low serum erythropoietin indicates primary polycythemia (PV); elevated erythropoietin indicates secondary polycythemia driven by chronic hypoxia, sleep apnea, or renal tumors.",
                "Canadian medical objectives focus on measuring serum erythropoietin: low levels confirm PV; elevated levels prompt pulse oximetry, sleep studies, and renal imaging."
            ),
            "FCPS": (
                "Splenectomy and surgical complications in advanced myelofibrosis",
                "Indications for splenectomy: refractory symptomatic splenomegaly, severe transfusion-dependent anemia, or portal hypertension; managing high risk of post-op thrombosis and bleeding.",
                "Surgical splenectomy in advanced myelofibrosis carries significant morbidity (thrombosis from rebound thrombocytosis, subcapsular hematoma); ruxolitinib is preferred upfront."
            ),
            "NLE": (
                "Aquagenic pruritus pathophysiology and clinical association with PV",
                "Intense, non-dermatological itching without visible cutaneous rash triggered by warm baths or showers, mediated by basophil and mast cell degranulation.",
                "National licensing curricula test aquagenic pruritus: present in up to 70% of PV patients, it does not respond to standard antihistamines but improves with phlebotomy and ruxolitinib."
            ),
            "NEET PG": (
                "Primary Myelofibrosis: Dry tap bone marrow, tear-drop cells, and massive splenomegaly",
                "Extramedullary hematopoiesis causing massive splenomegaly, leukoerythroblastic peripheral blood smear with tear-drop poikilocytes (dacrocytes), and marrow fibrosis causing a 'dry tap'.",
                "NEET PG hematology heavily tests primary myelofibrosis: megakaryocytes release PDGF and TGF-beta driving non-clonal bone marrow fibrosis and classic tear-drop erythrocytes."
            ),
            "MRCP": (
                "Budd-Chiari syndrome as a presenting manifestation of occult myeloproliferative neoplasms",
                "Hepatic vein thrombosis presenting with acute ascites, tender hepatomegaly, and abdominal pain in a young adult, warranting peripheral blood screening for the JAK2 V617F mutation.",
                "MRCP clinical gastroenterology emphasizes that myeloproliferative neoplasms are the underlying cause of Budd-Chiari syndrome in over 40-50% of cases, even with normal peripheral blood counts."
            ),
            "MRCEM": (
                "Emergency management of hyperviscosity syndrome in extreme polycythemia",
                "Headache, visual disturbances, dizziness, altered mentation, and priapism, treated with emergency isovolemic manual or automated erythrocytapheresis and IV fluids.",
                "In emergency care of acute hyperviscosity crisis from hematocrit > 60-65%, rapid manual venesection with simultaneous isotonic crystalloid replacement prevents fatal stroke and MI."
            ),
            "SMLE": (
                "Janus kinase 1/2 inhibitor (Ruxolitinib) in symptomatic myeloproliferative disease",
                "Oral ruxolitinib reducing constitutional B-symptoms, reversing massive splenomegaly, and improving quality of life in intermediate-2 and high-risk primary myelofibrosis.",
                "Saudi hematology guidelines utilize ruxolitinib to downregulate dysregulated JAK-STAT signaling, controlling disabling splenomegaly and systemic inflammatory symptoms."
            ),
            "HAAD / DHA": (
                "Cardiovascular risk factor optimization in myeloproliferative neoplasms",
                "Strict blood pressure, lipid, and diabetes control, combined with smoking cessation counseling to prevent synergistic arterial thrombotic events in JAK2-mutated patients.",
                "UAE health authority standards emphasize holistic cardiovascular risk reduction in MPNs, since myocardial infarction and ischemic stroke represent the primary causes of death."
            ),
            "UHS MBBS": (
                "Bone marrow biopsy findings in polycythemia vera versus secondary erythrocytosis",
                "Polycythemia vera showing trilineage hyperplasia (panmyelosis) with clustered giant pleomorphic megakaryocytes; secondary erythrocytosis showing isolated pure erythroid hyperplasia.",
                "Undergraduate pathology emphasizes that bone marrow biopsy in PV shows hypercellularity affecting all three cell lines (erythroid, granulocytic, megakaryocytic) with absent iron stores."
            )
        }
    },

    # Domain 66: Inherited Metabolic Liver Diseases
    {
        "id": "domain_66_metabolic_liver",
        "entity": "Wilson disease and hereditary hemochromatosis",
        "hallmark": "hyperpigmented 'bronze' skin, new-onset diabetes mellitus, hepatomegaly, erectile dysfunction, arthropathy of the second and third MCP joints, and serum ferritin 3,200 ng/mL",
        "system": "Gastrointestinal",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Biochemistry",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "ATP7B copper transport mutation versus HFE C282Y hepcidin dysregulation",
                "Wilson disease: impaired hepatic biliary copper excretion via defective ATP7B; Hemochromatosis: homozygous HFE C282Y mutation causing deficient hepcidin and unrestrained intestinal iron uptake via ferroportin.",
                "Hepcidin normally binds and degrades ferroportin; in hereditary hemochromatosis, low hepcidin allows unrestricted ferroportin-mediated basolateral iron efflux into plasma, causing systemic iron overload."
            ),
            "Step 2 CK": (
                "Diagnostic screening tests: Transferrin saturation versus Ceruloplasmin and 24-hour urine copper",
                "Fasting transferrin saturation > 45% and ferritin > 1,000 ng/mL in hemochromatosis; low serum ceruloplasmin (< 20 mg/dL) and elevated 24-hour urinary copper in Wilson disease.",
                "Fasting transferrin saturation is the most sensitive initial screening test for hemochromatosis; in Wilson disease, slit-lamp examination confirms pathognomonic Kayser-Fleischer corneal rings."
            ),
            "Step 3": (
                "Therapeutic phlebotomy protocols versus Copper chelation (Penicillamine / Trientine)",
                "Weekly therapeutic phlebotomy (500 mL) targeting ferritin 50-100 ng/mL in hemochromatosis; oral copper chelators (trientine or D-penicillamine) plus oral zinc in Wilson disease.",
                "Long-term management: therapeutic phlebotomy reverses liver dysfunction and cardiomyopathy in hemochromatosis (though arthropathy is irreversible); zinc blocks dietary copper absorption via metallothionein."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines on genetic counseling and family screening in hereditary hemochromatosis",
                "Autosomal recessive inheritance warranting cascade genetic testing (HFE C282Y and H63D genotyping) and transferrin saturation screening for all first-degree relatives.",
                "UK guidelines recommend testing first-degree relatives of confirmed hemochromatosis probands to initiate prophylactic phlebotomy before irreversible cirrhosis or diabetes develops."
            ),
            "AMC": (
                "Wilson disease neurological and psychiatric manifestations in young adults",
                "Tremor, dysarthria, dystonia, parkinsonism, and acute behavioral or affective changes in an adolescent or young adult, warranting urgent slit-lamp and ceruloplasmin screening.",
                "Australian neurology consensus stresses that Wilson disease should be excluded in any individual under 40 presenting with unexplained extrapyramidal movement disorders or personality changes."
            ),
            "MCCQE": (
                "Hepatocellular carcinoma (HCC) surveillance in cirrhotic hemochromatosis",
                "Patients with hemochromatosis who have established cirrhosis have a 20-fold increased risk of HCC, requiring screening abdominal ultrasound every 6 months.",
                "Canadian medical objectives emphasize that phlebotomy does not eliminate the risk of liver cancer once cirrhosis is established; lifelong biannual ultrasound surveillance is mandatory."
            ),
            "FCPS": (
                "Orthotopic liver transplantation indications in acute fulminant Wilson disease",
                "Emergency liver transplantation for acute Wilsonian liver failure presenting with Coombs-negative hemolytic anemia, profound jaundice, and renal failure (Nazir prognostic score >= 11).",
                "Fulminant Wilson disease is uniformly fatal without emergency liver transplantation; chelation therapy is ineffective in acute hepatic collapse."
            ),
            "NLE": (
                "Clinical triad of 'Bronze Diabetes' in advanced hemochromatosis",
                "The classic triad: Cirrhosis, Diabetes mellitus (due to selective pancreatic islet beta-cell iron deposition), and Bronze skin hyperpigmentation (melanin and hemosiderin).",
                "National licensing curricula test the 'bronze diabetes' presentation, highlighting that hypogonadism (pituitary iron deposition causing secondary erectile dysfunction) is also characteristic."
            ),
            "NEET PG": (
                "Prussian blue (Perls) stain for hemosiderin and Kayser-Fleischer ring anatomy",
                "Prussian blue stain staining ferric iron deposits bright blue in periportal hepatocytes; Kayser-Fleischer rings formed by copper deposition in Descemet membrane of the cornea.",
                "NEET PG pathology tests microscopic features: Prussian blue stains hemosiderin in hemochromatosis; copper in Wilson disease deposits in the corneal Descemet membrane and basal ganglia."
            ),
            "MRCP": (
                "Chondrocalcinosis and distinct arthropathy in hereditary hemochromatosis",
                "Symmetric non-inflammatory arthropathy with square-shaped bony enlargement affecting 2nd and 3rd MCP joints, associated with hook-like osteophytes and CPPD chondrocalcinosis.",
                "MRCP clinical rheumatology scenarios test hemochromatosis arthropathy: distinct involvement of the 2nd and 3rd MCP joints with hook osteophytes; joint pain persists despite successful phlebotomy."
            ),
            "MRCEM": (
                "Emergency recognition of acute Coombs-negative hemolytic crisis in Wilson disease",
                "Massive intravascular hemolysis with negative direct Coombs test, acute renal failure, and jaundice in a young patient with fulminant hepatic failure caused by massive free copper release.",
                "In emergency care, acute Wilson crisis features sudden release of stored hepatic copper into the bloodstream, directly causing severe oxidative red blood cell membrane lysis."
            ),
            "SMLE": (
                "Dietary copper restrictions and patient education in Wilson disease",
                "Strict avoidance of copper-rich foods: organ meats, shellfish, mushrooms, nuts, chocolate, and testing residential tap water for copper piping contamination.",
                "Saudi clinical guidelines emphasize dietary copper restriction during the initial de-coppering phase, counseling patients regarding water filtration if home copper plumbing is present."
            ),
            "HAAD / DHA": (
                "Cardiomyopathy in hemochromatosis (dilated versus restrictive) and reversibility",
                "Iron deposition in myocardium causing restrictive or dilated cardiomyopathy and conduction arrhythmias, which reverses significantly with early aggressive phlebotomy.",
                "UAE cardiology standards emphasize that hemochromatosis cardiomyopathy is one of the few forms of heart failure that is completely reversible if treated before irreversible fibrosis occurs."
            ),
            "UHS MBBS": (
                "Microscopic distribution of iron in primary hemochromatosis versus secondary hemosiderosis",
                "Primary hemochromatosis showing initial golden-brown hemosiderin granules in periportal hepatocytes; secondary hemosiderosis (transfusional) showing iron initially in reticuloendothelial Kupffer cells.",
                "Undergraduate pathology contrasts iron distribution: parenchymal hepatocyte deposition causes cell injury and cirrhosis in genetic hemochromatosis; Kupffer cell loading characterizes transfusion overload."
            )
        }
    },

    # Domain 67: Celiac Disease & Malabsorption
    {
        "id": "domain_67_celiac_disease",
        "entity": "celiac disease and intestinal malabsorption",
        "hallmark": "chronic watery diarrhea, abdominal bloating, steatorrhea with foul-smelling floating stools, severe weight loss, microcytic iron-deficiency anemia, and intensely pruritic grouped elbow vesicles",
        "system": "Gastrointestinal",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Tissue transglutaminase deamidation of gliadin and HLA-DQ2/DQ8 presentation",
                "Dietary gluten gliadin peptides deamidated by tissue transglutaminase (tTG), binding strongly to HLA-DQ2 or HLA-DQ8 on antigen-presenting cells to trigger CD4+ T cell mucosal destruction.",
                "Celiac disease is an immune-mediated enteropathy where deamidated gliadin drives intraepithelial CD8+ T-cell cytotoxicity and lamina propria CD4+ cytokine release, causing crypt hyperplasia and villous atrophy."
            ),
            "Step 2 CK": (
                "Serological screening and confirmatory duodenal biopsy on a gluten-containing diet",
                "Initial screening with IgA anti-tissue transglutaminase (anti-tTG) and total serum IgA; confirmation by upper endoscopy with multiple biopsies of the bulb and second part of the duodenum.",
                "Testing must be performed while the patient is on a gluten-containing diet; total serum IgA must be measured to detect selective IgA deficiency (which causes false-negative IgA anti-tTG results)."
            ),
            "Step 3": (
                "Strict gluten-free diet adherence and nutritional deficiency repletion",
                "Lifelong elimination of wheat, barley, and rye; checking and repleting iron, folate, vitamin B12, vitamin D, and calcium; and screening for autoimmune thyroiditis and type 1 diabetes.",
                "A strict gluten-free diet resolves enteropathy and symptoms; annual monitoring of anti-tTG titers assesses dietary adherence; associated autoimmune disorders (thyroid, T1D) require screening."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines on celiac disease recognition, testing, and red flags",
                "Offering serological testing for persistent unexplained gastrointestinal symptoms, chronic fatigue, unexplained iron-deficiency anemia, or first-degree relatives with celiac disease.",
                "NICE guideline NG20 emphasizes that patients must consume gluten in more than one meal daily for at least 6 weeks before testing to ensure accurate diagnostic sensitivity."
            ),
            "AMC": (
                "Dermatitis herpetiformis pathognomonic association and dapsone therapy",
                "Intensely pruritic papulovesicular eruptions symmetrically distributed on extensor surfaces of elbows, knees, and buttocks, showing granular IgA in dermal papillae.",
                "Australian guidelines highlight dermatitis herpetiformis as the cutaneous hallmark of celiac disease; a positive skin biopsy is diagnostic of celiac disease without requiring an intestinal biopsy."
            ),
            "MCCQE": (
                "Refractory celiac disease and Enteropathy-Associated T-Cell Lymphoma (EATL)",
                "Persistent or recurrent malabsorption despite strict gluten-free diet for > 12 months, warranting CT enterography and repeat endoscopy to detect clonal EATL.",
                "Canadian medical objectives emphasize that refractory celiac disease carries high risk of Enteropathy-Associated T-Cell Lymphoma, an aggressive malignancy presenting with weight loss and bowel obstruction."
            ),
            "FCPS": (
                "Small bowel volvulus and intussusception complicating celiac enteropathy",
                "Adult transient or recurrent small bowel intussusception or volvulus resulting from dilated, flaccid small bowel loops and mesenteric adenopathy, requiring laparoscopic exploration.",
                "In surgical training, celiac disease can present with adult-onset ileoileal intussusception; if bowel is viable, resection is avoided, and medical gluten-free management resolves motility."
            ),
            "NLE": (
                "D-xylose absorption test in mucosal versus pancreatic malabsorption",
                "Low urinary D-xylose excretion indicating mucosal enterocyte disease (celiac disease, Whipple disease); normal urinary D-xylose indicating pancreatic exocrine insufficiency.",
                "National licensing curricula test the D-xylose test: D-xylose is a simple monosaccharide absorbed passively without pancreatic enzymes; abnormal absorption proves mucosal brush border destruction."
            ),
            "NEET PG": (
                "Marsh classification of celiac disease duodenal histopathology",
                "Marsh stage 0 (pre-infiltrative), stage 1 (infiltrative: > 25 IELs/100 enterocytes), stage 2 (hyperplastic crypts), stage 3 (destructive: partial, subtotal, or total villous atrophy).",
                "NEET PG pathology tests the modified Marsh criteria: Marsh 3 (villous blunting, crypt hyperplasia, and intraepithelial lymphocytosis) is the histological gold standard for definitive diagnosis."
            ),
            "MRCP": (
                "Selective IgA deficiency and IgG-based celiac serology testing",
                "High prevalence of selective IgA deficiency in celiac disease patients; if total serum IgA is undetectable, IgG anti-deamidated gliadin peptides (DGP) or IgG anti-tTG must be ordered.",
                "MRCP clinical immunology scenarios test false-negative celiac screens: total IgA must always accompany IgA-tTG; low total IgA mandates switching to IgG-based testing."
            ),
            "MRCEM": (
                "Emergency presentation of severe hypokalemia and tetany from malabsorptive diarrhea",
                "Severe electrolyte depletion, hypocalcemia (Chvostek and Trousseau signs), and hypomagnesemia from chronic steatorrhea, managed with urgent IV calcium gluconate and magnesium repletion.",
                "In emergency care, unabsorbed fatty acids bind intraluminal calcium and magnesium, producing severe hypomagnesemia-induced hypocalcemia refractory to calcium until magnesium is corrected."
            ),
            "SMLE": (
                "Bone mineral density evaluation and osteoporosis screening in newly diagnosed celiac disease",
                "Baseline DXA scan in all adults diagnosed with celiac disease due to chronic malabsorption of vitamin D and calcium, repeating scan after 2-3 years on a gluten-free diet.",
                "Saudi clinical guidelines mandate routine DXA scanning at celiac diagnosis, as over 40% of newly diagnosed adults have significant osteopenia or osteoporosis from chronic malabsorption."
            ),
            "HAAD / DHA": (
                "Dietary label regulation and certified gluten-free food accessibility",
                "Patient referral to specialized clinical dietitians, education on cross-contamination, and understanding international food labeling standards (< 20 ppm gluten).",
                "UAE health standards enforce strict gluten-free food labeling regulations (< 20 mg/kg), promoting dedicated allergen labeling in supermarket chains to protect celiac patients."
            ),
            "UHS MBBS": (
                "Microscopic pathology of duodenal mucosal atrophy",
                "Marked blunting and flattening of intestinal villi, compensatory elongation and hyperplasia of the crypts of Lieberkühn, and dense intraepithelial lymphocytic infiltration.",
                "Undergraduate pathology describes celiac enteropathy: loss of normal villous architecture ('flat mucosa') reduces intestinal absorptive surface area, causing pan-malabsorption."
            )
        }
    },

    # Domain 68: Acute Mesenteric Ischemia
    {
        "id": "domain_68_mesenteric_ischemia",
        "entity": "acute mesenteric ischemia and ischemic colitis",
        "hallmark": "sudden-onset excruciating, diffuse abdominal pain completely out of proportion to benign physical examination findings, atrial fibrillation history, and elevated serum lactate",
        "system": "Gastrointestinal",
        "ref_key": "who_trauma",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Superior mesenteric artery vascular anatomy and watershed ischemia zones",
                "Superior mesenteric artery (SMA) providing principal blood supply from duodenum to splenic flexure; emboli lodging just distal to the middle colic artery origin causing acute bowel ischemia.",
                "In ischemic colitis, low-flow states selectively damage colon watershed zones: Griffiths point (splenic flexure at SMA-IMA junction) and Sudeck point (rectosigmoid junction at IMA-hypogastric junction)."
            ),
            "Step 2 CK": (
                "Computed tomography angiography (CTA) as diagnostic gold standard",
                "Immediate biphasic mesenteric CT angiography (CTA) of the abdomen without oral contrast, demonstrating SMA filling defect, bowel wall thickening, or pneumatosis intestinalis.",
                "CTA is the diagnostic test of choice with > 95% accuracy; oral contrast must not be given as it obscures mesenteric vessel visualization and mucosal enhancement patterns."
            ),
            "Step 3": (
                "Systemic anticoagulation and vascular revascularization vs laparotomy",
                "Immediate unfractionated heparin infusion; endovascular mechanical thrombectomy/thrombolysis for non-perforated ischemia, or emergency open embolectomy and bowel resection for peritonitis.",
                "Management requires immediate IV heparin to prevent thrombus propagation; signs of bowel perforation or infarction (peritoneal signs, acidosis) mandate emergency exploratory laparotomy."
            ),
            "PLAB / UKMLA": (
                "Distinguishing acute mesenteric ischemia from non-occlusive mesenteric ischemia (NOMI)",
                "NOMI occurring in critically ill patients on high-dose vasopressors or in cardiogenic shock, characterized by diffuse splanchnic vasospasm treated with intra-arterial papaverine.",
                "UK guidelines contrast embolic SMA occlusion (cardiogenic source, sudden pain) with NOMI (diffuse hypoperfusion in ICU patients), treated by optimizing cardiac output and intra-arterial vasodilators."
            ),
            "AMC": (
                "Ischemic colitis presentation: Transient bloody diarrhea and colonoscopic 'stripe' sign",
                "Mild crampy lower abdominal pain followed within 24 hours by bloody diarrhea in an elderly patient, showing pale edematous mucosa with longitudinal ulcers on flexible sigmoidoscopy.",
                "Australian guidelines emphasize that ischemic colitis is usually non-gangrenous, self-limiting, and managed conservatively with bowel rest and IV fluids, unlike acute mesenteric ischemia which is fatal."
            ),
            "MCCQE": (
                "Chronic mesenteric ischemia ('intestinal angina') and sitophobia",
                "Severe dull, crampy postprandial epigastric pain developing 30 minutes after eating, leading to fear of eating (sitophobia) and significant progressive weight loss in a patient with diffuse atherosclerosis.",
                "Canadian medical objectives test chronic mesenteric ischemia: atherosclerotic narrowing of at least 2 of 3 splanchnic vessels (celiac, SMA, IMA) causing postprandial angina, diagnosed by CTA."
            ),
            "FCPS": (
                "Second-look laparotomy protocol and bowel viability assessment",
                "Resection of frankly gangrenous bowel, temporary abdominal closure, and planned mandatory second-look re-exploration at 24 to 48 hours to assess marginally viable bowel loops.",
                "In emergency surgical practice, bowel viability can be difficult to confirm after revascularization; planned second-look laparotomy prevents over-resection and short bowel syndrome."
            ),
            "NLE": (
                "Classic clinical hallmark: 'Pain out of proportion to physical examination'",
                "Severe agony and screaming with a completely soft, non-tender abdomen lacking peritoneal signs, representing early mucosal ischemia before transmural necrosis triggers peritonitis.",
                "National licensing curricula test this cardinal clinical mismatch: excruciating unremitting pain with a benign, soft abdomen in an elderly patient with atrial fibrillation is acute mesenteric ischemia."
            ),
            "NEET PG": (
                "Radiological thumbprinting sign on abdominal imaging",
                "Submucosal hemorrhage and edema appearing as rounded contour indentations ('thumbprinting') on abdominal radiographs or barium enema in acute ischemic colitis.",
                "NEET PG radiology tests the 'thumbprinting' sign, reflecting acute submucosal edema and extravasation of blood in ischemic colitis, most commonly seen at the splenic flexure."
            ),
            "MRCP": (
                "Superior Mesenteric Vein (SMV) thrombosis and hypercoagulable state screening",
                "Insidious onset of abdominal pain over days to weeks in a patient with JAK2 V617F, factor V Leiden, or paroxysmal nocturnal hemoglobinuria, treated with systemic anticoagulation.",
                "MRCP clinical scenarios test mesenteric venous thrombosis: accounts for 10-15% of mesenteric ischemia, has a more indolent course, and is managed primarily with therapeutic anticoagulation."
            ),
            "MRCEM": (
                "Emergency resuscitation in acute mesenteric ischemia with profound lactic acidosis",
                "Aggressive fluid resuscitation, arterial blood gas monitoring for lactate trends, broad-spectrum IV antibiotics (piperacillin-tazobactam), and immediate vascular surgery notification.",
                "In emergency care, metabolic acidosis with elevated serum lactate indicates advanced bowel ischemia; waiting for peritonitis before ordering CTA leads to catastrophic bowel necrosis."
            ),
            "SMLE": (
                "Endovascular revascularization (catheter-directed thrombolysis and stenting) protocols",
                "Percutaneous retrograde or antegrade mesenteric artery stenting in specialized centers for acute-on-chronic thrombosis when no frank peritonitis is present.",
                "Saudi vascular guidelines emphasize hybrid operating suites: combining catheter-directed revascularization with laparoscopic inspection of bowel viability minimizes laparotomy morbidity."
            ),
            "HAAD / DHA": (
                "Post-resection short bowel syndrome management and parenteral nutrition pathways",
                "Managing extensive bowel resection (> 75-80% small bowel loss) with total parenteral nutrition, teduglutide (GLP-2 analog) to enhance mucosal adaptation, and intestinal transplantation.",
                "UAE tertiary centers establish specialized intestinal rehabilitation units to manage short bowel syndrome, using GLP-2 analogs to increase nutrient and fluid absorption."
            ),
            "UHS MBBS": (
                "Microscopic pathology of acute intestinal infarction (mucosal vs transmural)",
                "Full-thickness coagulative necrosis of the bowel wall with ghost-like necrotic architecture, neutrophilic serosal exudate, mucosal sloughing, and intraluminal bacterial overgrowth.",
                "Undergraduate pathology contrasts mucosal infarction (superficial necrosis sparing muscularis) with transmural infarction (full-thickness necrosis with perforation risk and peritonitis)."
            )
        }
    },

    # Domain 69: Endocrine Hypertension
    {
        "id": "domain_69_endocrine_htn",
        "entity": "pheochromocytoma and primary aldosteronism",
        "hallmark": "paroxysmal severe headaches, profuse diaphoresis, palpitations, refractory hypertension, and plasma free fractionated metanephrines elevated fourfold above normal",
        "system": "Endocrine",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Biochemistry",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Adrenal chromaffin catecholamine synthesis and alpha-before-beta adrenergic blockade",
                "Chromaffin cells synthesizing norepinephrine and epinephrine; administering beta-blockers before alpha-blockers precipitates catastrophic hypertensive crisis via unopposed alpha-1 vasoconstriction.",
                "In pheochromocytoma, non-selective alpha-blockade (phenoxybenzamine) must be initiated 10-14 days prior to surgery to expand contracted intravascular volume; beta-blockers are added only after alpha-blockade is established."
            ),
            "Step 2 CK": (
                "Plasma free metanephrines and 24-hour urinary fractionated metanephrines screening",
                "Initial screening with high-sensitivity plasma free metanephrines or 24-hour urinary fractionated metanephrines and vanillylmandelic acid (VMA), followed by abdominal adrenal CT or MRI.",
                "Plasma free metanephrines have > 97% sensitivity for pheochromocytoma; once biochemical confirmation is established, contrast-enhanced CT or MRI of the adrenals localizes the tumor."
            ),
            "Step 3": (
                "Primary aldosteronism: Aldosterone-to-renin ratio (ARR) and adrenal vein sampling",
                "Screening with plasma aldosterone concentration to plasma renin activity ratio (ARR > 20-30); confirming with oral sodium loading test, and performing adrenal vein sampling to distinguish adenoma from hyperplasia.",
                "Primary aldosteronism (Conn syndrome) is the leading cause of secondary hypertension; adrenal vein sampling is the gold standard to differentiate unilateral adenoma (surgery) from bilateral hyperplasia (spironolactone)."
            ),
            "PLAB / UKMLA": (
                "Preoperative preparation protocol for laparoscopic adrenalectomy",
                "Phenoxybenzamine titrated for 10-14 days aiming for BP < 130/80 mm Hg, high-salt diet to expand plasma volume, adding propranolol for reflex tachycardia, and laparoscopic resection.",
                "NICE and Endocrine Society guidelines enforce strict preoperative medical preparation to eliminate intraoperative hypertensive spikes and post-resection profound hypotension."
            ),
            "AMC": (
                "Genetic syndromic associations with pheochromocytoma (MEN 2, VHL, NF-1)",
                "Mandatory genetic counseling and screening for germline mutations: RET (MEN 2A/2B), VHL (von Hippel-Lindau), NF1 (neurofibromatosis type 1), and SDHB/SDHD (succinate dehydrogenase).",
                "Australian guidelines recommend universal genetic screening for all patients with pheochromocytoma/paraganglioma, as over 30-40% carry hereditary germline mutations."
            ),
            "MCCQE": (
                "Hypokalemia and metabolic alkalosis in Primary Aldosteronism (Conn syndrome)",
                "Triad of resistant hypertension, spontaneous or diuretic-induced hypokalemia, and metabolic alkalosis, with elevated serum aldosterone and suppressed plasma renin activity.",
                "Canadian medical objectives highlight that over 50% of primary aldosteronism patients have normal baseline serum potassium; normokalemic resistant hypertension warrants ARR screening."
            ),
            "FCPS": (
                "Laparoscopic transperitoneal versus retroperitoneal adrenalectomy surgical techniques",
                "Minimally invasive laparoscopic adrenalectomy with early ligation of the main adrenal vein to prevent intraoperative catecholamine surges during tumor manipulation.",
                "In surgical oncology, posterior retroperitoneoscopic adrenalectomy provides direct access to the adrenal gland without mobilizing abdominal viscera, ideal for tumors < 6-7 cm."
            ),
            "NLE": (
                "Rule of 10s for Pheochromocytoma",
                "Traditional rule of 10s: 10% extra-adrenal (paragangliomas), 10% bilateral, 10% malignant, 10% pediatric, 10% familial (modern genetics shows > 35% familial), 10% normotensive.",
                "National licensing curricula test the classic 'rule of 10s', emphasizing that extra-adrenal pheochromocytomas (paragangliomas) most commonly arise from the organ of Zuckerkandl."
            ),
            "NEET PG": (
                "MIBG scintigraphy and Gallium-68 DOTATATE PET-CT for paragangliomas",
                "Iodine-123 metaiodobenzylguanidine (MIBG) scintigraphy and Ga-68 DOTATATE PET-CT targeting somatostatin receptors for detecting multifocal, metastatic, or extra-adrenal paragangliomas.",
                "NEET PG nuclear medicine tests Ga-68 DOTATATE PET-CT, which has surpassed I-123 MIBG as the most sensitive imaging modality for locating SDH-mutated paragangliomas and metastatic disease."
            ),
            "MRCP": (
                "Mineralocorticoid receptor antagonists (Spironolactone vs Eplerenone) in bilateral adrenal hyperplasia",
                "Medical therapy with spironolactone (causing gynecomastia and menstrual irregularities via androgen receptor blockade) or selective eplerenone for bilateral idiopathic hyperaldosteronism.",
                "MRCP clinical pharmacology highlights eplerenone as a selective mineralocorticoid receptor blocker lacking anti-androgenic side effects, ideal for men developing painful gynecomastia on spironolactone."
            ),
            "MRCEM": (
                "Emergency management of acute pheochromocytoma crisis and intraoperative surge",
                "Immediate intravenous phentolamine (rapid-acting competitive alpha-blocker) or sodium nitroprusside infusion for acute malignant hypertensive crisis, with esmolol for severe tachycardia.",
                "In emergency acute hypertensive crisis from pheochromocytoma, short-acting titratable IV vasodilators (phentolamine, nicardipine, clevidipine) provide immediate, titratable blood pressure control."
            ),
            "SMLE": (
                "Screening for Cushing syndrome alongside adrenal incidentalomas",
                "Comprehensive hormonal workup for all adrenal incidentalomas: 1 mg overnight dexamethasone suppression test, plasma metanephrines, and aldosterone-to-renin ratio.",
                "Saudi endocrine guidelines mandate biochemical exclusion of autonomous hormone secretion for all discovered adrenal masses, even in asymptomatic normotensive patients."
            ),
            "HAAD / DHA": (
                "Long-term post-adrenalectomy surveillance protocols for malignant recurrence",
                "Annual biochemical testing with plasma or urinary metanephrines for at least 10 years (indefinitely for high-risk, large, or SDHB-mutated tumors) to detect metastatic recurrence.",
                "UAE oncology guidelines mandate long-term follow-up because histological criteria (PASS score) cannot reliably predict malignancy; only metastasis defines malignant pheochromocytoma."
            ),
            "UHS MBBS": (
                "Microscopic pathology and chromaffin reaction in pheochromocytoma",
                "Zellballen (cell nests) pattern of polygonal chromaffin cells surrounded by a delicate capillary-rich sustentacular network, with positive chromogranin, synaptophysin, and S100.",
                "Undergraduate pathology highlights the 'Zellballen' architecture: round nests of tumor cells separated by vascular stroma; exposure to potassium dichromate turns tissue brown (chromaffin reaction)."
            )
        }
    }
]
