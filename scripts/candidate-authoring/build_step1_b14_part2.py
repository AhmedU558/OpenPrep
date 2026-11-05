import json

b14_remaining = [
  # 0339
  {
    "code": "op-c-s1-0339",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "General Principles",
    "topic": "Acyclovir Activation Kinetics and Viral Thymidine Kinase",
    "subtopic": "Obligate Monophosphorylation by Viral Thymidine Kinase and Chain Termination",
    "provisionalDifficulty": 4,
    "stem": "A 36-year-old HIV-infected man with a CD4 count of 45/mcL develops persistent, painful, ulcerative mucocutaneous lesions on his penis and perianal region. Viral culture confirms herpes simplex virus type 2 (HSV-2). He is treated with high-dose oral acyclovir, but after 3 weeks of compliant therapy, the ulcers expand and fail to heal. The virus isolate is tested in vitro and found to be resistant to acyclovir and ganciclovir, but fully susceptible to foscarnet and cidofovir. In susceptible wild-type HSV-2, acyclovir requires an initial, rate-limiting monophosphorylation step catalyzed by an enzyme absent from uninfected host cells. Which of the following viral enzymes is mutated or deficient in this resistant HSV isolate?",
    "choices": [
      ["Viral thymidine kinase (TK)", "Correct. Acyclovir is an acyclic guanosine analog prodrug that possesses high selectivity for herpes simplex virus (HSV-1, HSV-2) and varicella-zoster virus (VZV). Its selectivity relies on an initial, rate-limiting MONOPHOSPHORYLATION STEP CATALYZED EXCLUSIVELY BY VIRAL THYMIDINE KINASE (TK). Uninfected mammalian cells do not phosphorylate acyclovir to any significant extent. Once acyclovir monophosphate is formed, host cellular kinases add two additional phosphates to generate active ACYCLOVIR TRIPHOSPHATE. Acyclovir triphosphate competitively inhibits viral DNA polymerase and, lacking a 3'-hydroxyl group on its acyclic sugar moiety, acts as an OBLIGATE DNA CHAIN TERMINATOR. The primary mechanism of clinical acyclovir resistance in immunocompromised patients is mutation or deletion of the VIRAL THYMIDINE KINASE gene. Resistant strains cannot monophosphorylate acyclovir or ganciclovir, but remain susceptible to FOSCARNET (direct pyrophosphate analog inhibiting DNA polymerase without phosphorylation) and CIDOFOVIR (an acyclic cytidine phosphonate that bypasses viral TK)."],
      ["Viral DNA-dependent RNA polymerase", "Herpesviruses utilize host RNA polymerase II for viral transcription; HSV does not encode its own RNA polymerase, and acyclovir targets viral DNA polymerase."],
      ["Viral ribonucleotide reductase", "HSV does encode a ribonucleotide reductase to expand deoxynucleotide pools, but acyclovir does not require it for phosphorylation."],
      ["Viral protease responsible for capsid maturation", "Viral proteases (targeted by HIV protease inhibitors) cleave capsid scaffolding proteins, but are unrelated to nucleoside phosphorylation."],
      ["Viral neuraminidase cleaving terminal sialic acid residues", "Neuraminidase is an influenza surface glycoprotein targeted by oseltamivir and zanamivir; herpesviruses do not possess neuraminidase."]
    ],
    "shortestValidSolution": "Acyclovir-resistant HSV susceptible to foscarnet/cidofovir -> Deficient viral thymidine kinase (TK).",
    "necessaryInference": "Acyclovir requires initial monophosphorylation by viral thymidine kinase. Resistance in HSV is caused by thymidine kinase deficiency; foscarnet/cidofovir bypass this requirement.",
    "strongestDistractor": "Viral ribonucleotide reductase",
    "distractorExclusion": "Viral thymidine kinase is the specific rate-limiting enzyme responsible for acyclovir monophosphorylation; ribonucleotide reductase is not involved in nucleoside activation.",
    "citation": "Piret J, Boivin G. Resistance of herpes simplex viruses to nucleoside analogues: mechanisms, prevalence, and management. Antimicrob Agents Chemother. 2011;55(2):459-472. PMID: 21078929."
  },
  # 0340
  {
    "code": "op-c-s1-0340",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "General Principles",
    "topic": "Ganciclovir Cytomegalovirus UL97 Kinase Activation",
    "subtopic": "Phosphorylation Requirement by Viral Protein Kinase Homolog UL97",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old renal allograft recipient receiving immunosuppressive therapy with tacrolimus, mycophenolate mofetil, and prednisone presents with blurred vision, floaters, and photophobia. Dilated funduscopic examination reveals extensive necrotizing retinal whitening with confluent retinal hemorrhages ('pizza-pie retinopathy') along retinal vessels, diagnostic of cytomegalovirus (CMV) retinitis. Intravenous ganciclovir therapy is initiated. In CMV-infected host cells, which of the following specific viral enzymes is responsible for catalyzing the initial monophosphorylation required to convert ganciclovir into its active antiviral nucleotide derivative?",
    "choices": [
      ["Viral UL97 phosphotransferase (protein kinase homolog)", "Correct. Ganciclovir is an acyclic nucleoside analog of 2'-deoxyguanosine used primarily for the treatment and prophylaxis of CYTOMEGALOVIRUS (CMV) infections. Cytomegalovirus is a beta-herpesvirus that DOES NOT ENCODE A THYMIDINE KINASE (unlike HSV and VZV). Instead, CMV encodes a specialized serine/threonine protein kinase homolog designated UL97 PHOSPHOTRANSFERASE. The UL97 enzyme catalyzes the essential initial MONOPHOSPHORYLATION of ganciclovir into ganciclovir monophosphate. Host cellular kinases subsequently convert it to ganciclovir triphosphate, which competitively inhibits CMV DNA polymerase (encoded by UL54) and incorporates into growing viral DNA to slow elongation. The most common mechanism of CMV resistance to ganciclovir is point mutations in the UL97 GENE, which abrogate ganciclovir monophosphorylation without impairing viral replication."],
      ["Viral thymidine kinase (TK)", "Cytomegalovirus does not encode a thymidine kinase enzyme; HSV and VZV encode thymidine kinase, while CMV relies on the UL97 kinase."],
      ["Host cellular adenosine kinase", "Host adenosine kinase phosphorylates purine ribosides, but the initial monophosphorylation of ganciclovir in CMV-infected cells is performed specifically by the viral UL97 kinase."],
      ["Viral UL54 DNA-dependent DNA polymerase", "UL54 encodes the CMV DNA polymerase, which is the downstream enzymatic TARGET of ganciclovir triphosphate, not the activating kinase."],
      ["Viral reverse transcriptase RNA-dependent DNA polymerase", "Herpesviruses (including CMV) are double-stranded DNA viruses that do not utilize reverse transcriptase; reverse transcriptase is unique to retroviruses and hepadnaviruses."]
    ],
    "shortestValidSolution": "CMV activation of ganciclovir -> Viral UL97 phosphotransferase (CMV lacks thymidine kinase).",
    "necessaryInference": "Cytomegalovirus lacks thymidine kinase. The initial activating monophosphorylation of ganciclovir is performed specifically by the viral UL97 protein kinase homolog.",
    "strongestDistractor": "Viral thymidine kinase (TK)",
    "distractorExclusion": "HSV and VZV use viral thymidine kinase, but CMV completely lacks thymidine kinase and utilizes its UL97 phosphotransferase instead.",
    "citation": "Biron KK. Antiviral drugs for cytomegalovirus diseases. Antiviral Res. 2006;71(2-3):154-163. PMID: 16757041."
  },
  # 0341
  {
    "code": "op-c-s1-0341",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Hematology",
    "topic": "Methotrexate Dihydrofolate Reductase Inhibition and Leucovorin Rescue",
    "subtopic": "Folinic Acid Bypassing the Dihydrofolate Reductase Block in Normal Host Tissues",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old boy with high-grade osteosarcoma of the distal femur receives adjuvant chemotherapy with high-dose intravenous methotrexate (12 g/m2). Twenty-four hours following the completion of the methotrexate infusion, the oncology team administers intravenous leucovorin (folinic acid; 5-formyl-tetrahydrofolate) every 6 hours until serum methotrexate concentrations fall below 0.05 mcmol/L. Leucovorin administration is essential to prevent life-threatening bone marrow aplasia and gastrointestinal mucositis. Which of the following biochemical mechanisms explains how leucovorin rescues normal host tissues from lethal methotrexate toxicity?",
    "choices": [
      ["Supplying a reduced folate intermediate that directly bypasses the blocked dihydrofolate reductase enzyme", "Correct. Methotrexate (MTX) is a folic acid analog that competitively and irreversibly inhibits DIHYDROFOLATE REDUCTASE (DHFR). DHFR normally reduces dihydrofolate (DHF) to tetrahydrofolate (THF). Depletion of THF deprives the cell of essential one-carbon donors (N5,N10-methylene-THF and N10-formyl-THF), halting: (1) De novo thymidylate (dTMP) synthesis via thymidylate synthase; and (2) De novo purine nucleotide synthesis. High-dose methotrexate enters tumor cells by passive diffusion, overwhelming low folate receptors, but would cause fatal bone marrow suppression and gastrointestinal denudation if left unmitigated. LEUCOVORIN (folinic acid) is N5-formyl-tetrahydrofolate, a fully REDUCED, ACTIVE FOLATE DERIVATIVE. Leucovorin is converted directly to THF derivatives WITHOUT REQUIRING DIHYDROFOLATE REDUCTASE, effectively bypassing the MTX enzymatic block and restoring purine and thymidylate synthesis in normal rapidly dividing host tissues."],
      ["Competing with methotrexate for cellular efflux via multidrug resistance protein-1 (MDR1) pumps", "Leucovorin does not alter MDR1 efflux; its protective effect is purely metabolic by supplying reduced folates downstream of the DHFR block."],
      ["Allosterically reversing methotrexate binding to dihydrofolate reductase and accelerating its dissociation", "Methotrexate binds DHFR with an affinity 1,000-fold higher than folate; leucovorin does not displace MTX from DHFR, but supplies products downstream."],
      ["Accelerating hepatic cytochrome P450 oxidation of methotrexate to inactive 7-hydroxymethotrexate", "Methotrexate is primarily cleared renally (80-90% unchanged); leucovorin does not stimulate hepatic CYP450 metabolism."],
      ["Directly stimulating thymidylate synthase transcription via nuclear receptor transactivation", "Leucovorin provides the one-carbon methyl substrate for thymidylate synthesis, but does not act as a transcriptional activator of the thymidylate synthase gene."]
    ],
    "shortestValidSolution": "High-dose methotrexate rescue -> Leucovorin (folinic acid) supplies reduced THF, bypassing the blocked dihydrofolate reductase.",
    "necessaryInference": "Methotrexate blocks dihydrofolate reductase (DHFR). Leucovorin (folinic acid) is a reduced folate (5-formyl-THF) that bypasses DHFR entirely, restoring DNA synthesis in normal cells.",
    "strongestDistractor": "Allosterically reversing methotrexate binding to dihydrofolate reductase and accelerating its dissociation",
    "distractorExclusion": "Leucovorin does not displace methotrexate from DHFR; it provides reduced folate products downstream of the blocked enzyme.",
    "citation": "Chabner BA, Longo DL. Cancer Chemotherapy and Biotherapy: Principles and Practice. 5th ed. Lippincott Williams & Wilkins; 2011. NLM ID: 101539209."
  },
  # 0342
  {
    "code": "op-c-s1-0342",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Gastrointestinal",
    "topic": "5-Fluorouracil Thymidylate Synthase Suicide Inhibition",
    "subtopic": "Covalent Ternary Complex Formation with 5-FdUMP and N5,N10-Methylene-THF",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man with stage III colon adenocarcinoma is treated with the adjuvant FOLFOX chemotherapy regimen, which includes 5-fluorouracil (5-FU) and leucovorin. In the target malignant enterocytes, 5-fluorouracil is metabolically converted through several enzymatic steps into its active fluorodeoxynucleotide metabolite, 5-fluoro-2'-deoxyuridine-5'-monophosphate (5-FdUMP). Inside the nucleus, 5-FdUMP forms an irreversible, stable covalent ternary complex with which of the following cellular enzymes and reduced folate cofactors, arresting de novo dTMP synthesis?",
    "choices": [
      ["Thymidylate synthase and N5,N10-methylene-tetrahydrofolate", "Correct. 5-Fluorouracil (5-FU) is a pyrimidine analog that functions as a pro-drug. In tumor cells, it is converted into 5-fluoro-2'-deoxyuridine-5'-monophosphate (5-FdUMP). 5-FdUMP is a potent, irreversible 'SUICIDE INHIBITOR' of THYMIDYLATE SYNTHASE (TS). Normally, thymidylate synthase catalyzes the reductive methylation of deoxyuridine monophosphate (dUMP) to deoxythymidine monophosphate (dTMP), using N5,N10-METHYLENE-TETRAHYDROFOLATE as the methyl group donor. When 5-FdUMP binds to TS in the presence of N5,N10-methylene-THF, the fluorine atom prevents the normal hydride transfer, locking the enzyme, cofactor, and drug into a stable, dead-end COVALENT TERNARY COMPLEX. Depletion of dTMP halts DNA replication ('thymineless death'). CRITICAL PHARMACOLOGY CONCEPT: LEUCOVORIN IS ADMINISTERED WITH 5-FU TO ENHANCE ITS CYTOTOXICITY (the opposite of its rescue role in MTX!) by providing excess N5,N10-methylene-THF, which stabilizes the ternary complex."],
      ["Dihydrofolate reductase and dihydrofolate", "Dihydrofolate reductase is inhibited by methotrexate, trimethoprim, and pyrimethamine, not by 5-FdUMP."],
      ["Ribonucleotide reductase and NADPH", "Ribonucleotide reductase converts ribonucleotides to deoxyribonucleotides and is inhibited by hydroxyurea, not 5-FU."],
      ["Hypoxanthine-guanine phosphoribosyltransferase and PRPP", "HGPRT is a purine salvage enzyme inhibited by 6-mercaptopurine, not pyrimidine analogs like 5-FU."],
      ["DNA polymerase alpha and deoxycytidine triphosphate", "DNA polymerases are inhibited by cytarabine (ara-C) and gemcitabine, which incorporate into DNA, rather than suicide-inhibiting thymidylate synthase."]
    ],
    "shortestValidSolution": "5-FU active metabolite (5-FdUMP) -> Forms covalent ternary complex with Thymidylate synthase and N5,N10-methylene-THF.",
    "necessaryInference": "5-FdUMP is a suicide inhibitor that traps Thymidylate Synthase in an irreversible covalent ternary complex with N5,N10-methylene-tetrahydrofolate, causing thymineless death.",
    "strongestDistractor": "Dihydrofolate reductase and dihydrofolate",
    "distractorExclusion": "Dihydrofolate reductase is the target of methotrexate, whereas 5-FU specifically inhibits thymidylate synthase.",
    "citation": "Longley DB, Harkin DP, Johnston PG. 5-fluorouracil: mechanisms of action and clinical strategies. Nat Rev Cancer. 2003;3(5):330-338. PMID: 12724731."
  },
  # 0343
  {
    "code": "op-c-s1-0343",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Renal",
    "topic": "Cyclophosphamide Acrolein Hemorrhagic Cystitis and Mesna Protection",
    "subtopic": "Inactivation of Toxic Acrolein via Free Sulfhydryl Conjugation by Mesna",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old woman with diffuse large B-cell lymphoma receives the R-CHOP chemotherapy regimen, which includes high-dose intravenous cyclophosphamide. Prior to and during cyclophosphamide administration, the medical oncologist co-administers intravenous mesna (sodium 2-mercaptoethanesulfonate) along with aggressive saline hydration. This prophylactic protocol is designed to prevent which of the following specific toxicities, and by what biochemical mechanism does mesna confer tissue protection?",
    "choices": [
      ["Hemorrhagic cystitis; mesna supplies free sulfhydryl groups that bind and neutralize the toxic hepatic metabolite acrolein in the urinary bladder", "Correct. Cyclophosphamide and ifosfamide are nitrogen mustard alkylating agents that cross-link DNA at the N-7 position of guanine. They are prodrugs that undergo hepatic cytochrome P450 oxidation (CYP2B6) into 4-hydroxycyclophosphamide, which decomposes into phosphoramide mustard (the active antineoplastic alkylating agent) and ACROLEIN. Acrolein is an unsaturated aldehyde that possesses no antitumor activity, but is excreted renally and accumulates in the bladder lumen. In the urinary bladder, acrolein causes direct chemical necrosis, mucosal ulceration, sloughing, and severe, life-threatening HEMORRHAGIC CYSTITIS. MESNA (sodium 2-mercaptoethanesulfonate) is a thiol-containing chemoprotective agent: it concentrates in the urine, where its FREE SULFHYDRYL (-SH) GROUPS bind directly to acrolein via a Michael addition reaction, forming a non-toxic, water-soluble thioether conjugate that is safely excreted."],
      ["Dilated cardiomyopathy; mesna chelates intracellular iron and blocks free radical-induced lipid peroxidation in cardiomyocytes", "Iron chelation to prevent anthracycline cardiotoxicity is mediated by dexrazoxane, not mesna."],
      ["Pulmonary interstitial fibrosis; mesna scavenges superoxide anions generated by molecular oxygen in alveolar capillary walls", "Pulmonary fibrosis is caused by bleomycin and busulfan, not cyclophosphamide; mesna does not prevent pulmonary toxicity."],
      ["Renal proximal tubular acute tubular necrosis; mesna alkalinizes tubular fluid to prevent platinum crystallization", "Nephroprotection against cisplatin is achieved by amifostine and aggressive chloride diuresis, not mesna."],
      ["Peripheral sensory neuropathy; mesna stabilizes axonal microtubule protofilaments against depolymerization", "Neuroprotection is not achieved by mesna; neuropathy is a hallmark of vincristine and taxanes, not cyclophosphamide."]
    ],
    "shortestValidSolution": "Cyclophosphamide + mesna -> Prevents hemorrhagic cystitis by binding toxic acrolein via sulfhydryl groups.",
    "necessaryInference": "Cyclophosphamide produces the toxic byproduct acrolein, which causes hemorrhagic cystitis. Mesna supplies free sulfhydryl groups in the bladder to inactivate acrolein.",
    "strongestDistractor": "Renal proximal tubular acute tubular necrosis; mesna alkalinizes tubular fluid to prevent platinum crystallization",
    "distractorExclusion": "Tubular protection against cisplatin is mediated by amifostine, whereas mesna specifically neutralizes acrolein in the bladder to prevent hemorrhagic cystitis.",
    "citation": "Emadi A, Jones RJ, Brodsky RA. Cyclophosphamide and cancer: golden anniversary. Nat Rev Clin Oncol. 2009;6(11):638-647. PMID: 19786984."
  },
  # 0344
  {
    "code": "op-c-s1-0344",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Doxorubicin Cardiotoxicity Dexrazoxane Iron Chelation",
    "subtopic": "Topoisomerase II-Beta Cleavage, Free Radical Generation, and Anthracycline Dilated Cardiomyopathy",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old woman with metastatic invasive ductal carcinoma of the breast is treated with an anthracycline-based regimen containing doxorubicin. Before she reaches a cumulative lifetime doxorubicin dose of 450 mg/m2, her oncologist initiates co-administration of the cardioprotective agent dexrazoxane. If left unmitigated, high cumulative doses of doxorubicin lead to late-onset dilated cardiomyopathy and congestive heart failure. At the cellular level, anthracycline-induced myocyte damage and the protective mechanism of dexrazoxane are primarily mediated by which of the following processes?",
    "choices": [
      ["Formation of iron-anthracycline complexes generating toxic hydroxyl free radicals and DNA double-strand breaks via topoisomerase II-beta; prevented by intracellular iron chelation with dexrazoxane", "Correct. Doxorubicin (Adriamycin) and daunorubicin are anthracycline antitumor antibiotics that exert antineoplastic activity by intercalating into DNA base pairs and inhibiting topoisomerase II-alpha in rapidly dividing tumor cells. However, their use is strictly limited by CUMULATIVE, DOSE-DEPENDENT CARDIOTOXICITY leading to dilated cardiomyopathy and congestive heart failure. The molecular mechanism of anthracycline cardiotoxicity involves: (1) Iron-anthracycline chelation, which undergoes redox cycling to generate reactive oxygen species (superoxide, hydrogen peroxide, and highly toxic HYDROXYL FREE RADICALS via Fenton chemistry). Because adult cardiomyocytes have exceptionally low concentrations of antioxidant enzymes (catalase, glutathione peroxidase), they are exquisitely vulnerable to lipid peroxidation of mitochondrial membranes (cardiolipin); (2) Direct anthracycline poisoning of TOPOISOMERASE II-BETA in non-dividing cardiomyocytes, inducing lethal double-stranded DNA breaks and mitochondrial biogenesis arrest. DEXRAZOXANE is an intracellular iron-chelating agent (and catalytic inhibitor of Topo II-beta) that scavenges free iron and prevents free radical formation, significantly reducing cardiotoxicity."],
      ["Competitive blockade of cardiac voltage-gated HERG potassium channels prolonging the corrected QT interval; prevented by dexrazoxane", "QT prolongation occurs with antiarrhythmics, macrolides, and antipsychotics; doxorubicin cardiotoxicity is characterized by cumulative dilated cardiomyopathy, not primary HERG blockade."],
      ["Selective autoimmune destruction of cardiac myosin light chains mediated by cytotoxic CD8+ T cells; prevented by dexrazoxane", "Autoimmune myocarditis is the classic toxicity of immune checkpoint inhibitors (nivolumab, pembrolizumab), not anthracyclines."],
      ["Intracellular calcium overload via constitutive opening of the sarcolemmal sodium-calcium exchanger; prevented by dexrazoxane", "Calcium overload is seen in digoxin toxicity, not anthracycline-induced free radical and topoisomerase II-beta damage."],
      ["Direct inhibition of cardiomyocyte glycogen phosphorylase causing severe intracellular glycogen accumulation; prevented by dexrazoxane", "Glycogen phosphorylase is affected in Pompe disease and metabolic disorders, not anthracycline chemotherapy."]
    ],
    "shortestValidSolution": "Doxorubicin cumulative cardiotoxicity prevented by dexrazoxane -> Iron-dependent hydroxyl free radicals + Topo II-beta damage; dexrazoxane is an iron chelator.",
    "necessaryInference": "Anthracycline cardiotoxicity is dose-dependent, driven by iron-anthracycline free radical generation and Topoisomerase II-beta cleavage in cardiomyocytes. Dexrazoxane protects by chelating iron.",
    "strongestDistractor": "Selective autoimmune destruction of cardiac myosin light chains mediated by cytotoxic CD8+ T cells; prevented by dexrazoxane",
    "distractorExclusion": "Immune checkpoint inhibitors cause immune-mediated lymphocytic myocarditis, whereas anthracyclines cause toxic free radical cardiomyopathy.",
    "citation": "Zhang S, Liu X, Bawa-Khalfe T, et al. Identification of the molecular basis of doxorubicin-induced cardiotoxicity. Nat Med. 2012;18(11):1639-1642. PMID: 23104132."
  },
  # 0345
  {
    "code": "op-c-s1-0345",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Respiratory",
    "topic": "Bleomycin Cell Cycle Specificity and Pulmonary Fibrosis",
    "subtopic": "G2-Phase Specific Iron-Dependent Free Radical Cleavage of DNA",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old man with metastatic nonseminomatous testicular germ cell cancer is treated with the BEP regimen: bleomycin, etoposide, and cisplatin. Six weeks after completing chemotherapy, he presents with progressive exertional dyspnea, dry cough, and pleuritic chest discomfort. Physical examination reveals bilateral end-inspiratory 'velcro-like' crackles at both lung bases and hyperpigmented, erythematous linear streaks on his torso (flagellate dermatosis). Pulmonary function testing reveals a restrictive ventilatory defect with markedly reduced diffusion capacity for carbon monoxide (DLCO). High-resolution chest CT demonstrates bilateral subpleural ground-glass opacities and basilar reticulation. In which phase of the eukaryotic cell cycle does bleomycin exert its primary cytotoxic effect, and what is its molecular mechanism of DNA damage?",
    "choices": [
      ["G2 phase of the cell cycle; binds DNA and forms an iron-oxygen complex that generates free radicals, inducing single- and double-strand DNA cleavage", "Correct. Bleomycin is a glycopeptide antitumor antibiotic that is cell-cycle specific, arresting cells in the G2 PHASE OF THE CELL CYCLE. Bleomycin contains two active functional domains: a bithiazole tail that intercalates between DNA base pairs, and a metal-binding core that chelates FERROUS IRON (Fe2+) and molecular oxygen. In the presence of a reducing agent, this pseudo-enzyme complex transfers electrons to oxygen, generating superoxide and HYDROXYL FREE RADICALS that abstract hydrogen atoms from deoxyribose carbons, causing SINGLE- AND DOUBLE-STRANDED DNA BREAKS. TOXICITY PROFILE: In most tissues, bleomycin is rapidly degraded by the enzyme bleomycin hydrolase. However, the LUNGS AND SKIN HAVE NEGLIGIBLE AMOUNTS OF BLEOMYCIN HYDROLASE. Consequently, bleomycin accumulates in lung parenchyma, causing free radical-mediated alveolar endothelial necrosis, chronic inflammation, and severe, irreversible PULMONARY FIBROSIS (monitoring DLCO is mandatory). It also causes flagellate dermatosis in the skin."],
      ["M phase (mitosis); promotes tubulin polymerization and stabilizes microtubule bundles against dynamic depolymerization", "Microtubule stabilization in M-phase is the mechanism of taxanes (paclitaxel), not bleomycin."],
      ["S phase (synthesis); acts as a fraudulent purine base incorporating into replicating DNA to block proofreading", "Purine antimetabolites (e.g., 6-mercaptopurine, thioguanine, cladribine) act in S-phase, whereas bleomycin acts in G2-phase."],
      ["G1 phase; inhibits cyclin-dependent kinase 4 and 6 (CDK4/6) to prevent hyperphosphorylation of retinoblastoma protein", "CDK4/6 inhibitors (palbociclib) arrest cells in G1 by keeping Rb hypophosphorylated, not by generating free radical DNA breaks."],
      ["G0 phase (resting); alkylates O-6 position of guanine residues leading to interstrand DNA cross-linking", "Alkylating agents (nitrosoureas, cyclophosphamide) are cell-cycle non-specific (act in G0 and throughout), whereas bleomycin is strictly G2-specific."]
    ],
    "shortestValidSolution": "Bleomycin -> G2-phase cell cycle arrest via iron-dependent free radical DNA strand breaks; causes pulmonary fibrosis (low bleomycin hydrolase in lungs).",
    "necessaryInference": "Bleomycin is a G2-phase specific antitumor antibiotic that binds iron to generate free radical DNA breaks. Pulmonary fibrosis occurs because lungs lack the inactivating enzyme bleomycin hydrolase.",
    "strongestDistractor": "S phase (synthesis); acts as a fraudulent purine base incorporating into replicating DNA to block proofreading",
    "distractorExclusion": "S-phase antimetabolites incorporate into DNA, whereas bleomycin is specifically G2-phase active and cleaves DNA via iron-dependent free radicals.",
    "citation": "Chen J, Stubbe J. Bleomycins: towards a molecular understanding of the mechanism of action. Nat Rev Cancer. 2005;5(2):102-112. PMID: 15685194."
  },
  # 0346
  {
    "code": "op-c-s1-0346",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Renal",
    "topic": "Cisplatin Mechanism and Amifostine Free Radical Scavenging",
    "subtopic": "Intrastrand Purine Cross-Links, Acute Tubular Necrosis, and Organic Cation Transporters",
    "provisionalDifficulty": 4,
    "stem": "A 61-year-old man with muscle-invasive transitional cell carcinoma of the urinary bladder receives neoadjuvant chemotherapy with cisplatin and gemcitabine. To reduce the risk of severe acute tubular necrosis and ototoxicity associated with cisplatin, the oncology service initiates aggressive intravenous hydration with 0.9% normal saline and considers pretreatment with amifostine. In the target malignant cell nucleus, cisplatin exerts its primary cytotoxic action by which of the following molecular mechanisms?",
    "choices": [
      ["Formation of covalent intrastrand and interstrand cross-links between adjacent guanine bases on DNA, distorting the double helix and blocking replication", "Correct. Cisplatin, carboplatin, and oxaliplatin are inorganic platinum coordination complexes. Inside the cell, where chloride concentration is low (4-20 mM compared to 100 mM in blood), the chloride ligands on cisplatin are displaced by water molecules (aquation), generating a highly reactive, positively charged electrophilic platinum species. This active species reacts nucleophilically with electron-dense nitrogen atoms on DNA bases, primarily the N-7 POSITION OF GUANINE. It forms COVALENT INTRASTRAND CROSS-LINKS (primarily between adjacent guanines, 1,2-intrastrand d(GpG) adducts; ~90%) and occasional interstrand cross-links. These cross-links severely bend and unwind the DNA double helix, blocking DNA replication and transcription, arresting cells in G2/M phase, and triggering p53-mediated apoptosis. TOXICITY PROFILE: Cisplatin is transported into renal proximal tubular cells via the organic cation transporter 2 (OCT2), causing oxidative stress, acute tubular necrosis, and hypomagnesemia/hypokalemia. AMIFOSTINE is a free-radical scavenging prodrug dephosphorylated by alkaline phosphatase in normal endothelium that protects against cisplatin nephrotoxicity."],
      ["Intercalation between adjacent planar base pairs causing DNA frame-shift mutations during transcription", "Intercalation is the mechanism of dactinomycin (actinomycin D) and anthracyclines, not platinum cross-linking."],
      ["Selective alkylation of O-6 guanine leading to transition mutations during mismatch repair", "O-6 guanine alkylation is characteristic of dacarbazine, temozolomide, and nitrosoureas, not platinum-induced N-7 cross-linking."],
      ["Suicide inhibition of ribonucleotide reductase depleting cellular deoxyribonucleoside triphosphates", "Ribonucleotide reductase is inhibited by hydroxyurea, whereas cisplatin directly binds and cross-links DNA."],
      ["Inhibition of eukaryotic topoisomerase I preventing the re-ligation of single-stranded DNA nicks", "Topoisomerase I is inhibited by camptothecins (irinotecan, topotecan), not platinum agents."]
    ],
    "shortestValidSolution": "Cisplatin -> Forms covalent intrastrand/interstrand cross-links between guanine bases on DNA; nephrotoxicity prevented by amifostine.",
    "necessaryInference": "Cisplatin forms intrastrand and interstrand DNA cross-links (predominantly at N-7 of adjacent guanines), disrupting replication and causing nephrotoxicity/ototoxicity.",
    "strongestDistractor": "Intercalation between adjacent planar base pairs causing DNA frame-shift mutations during transcription",
    "distractorExclusion": "Intercalation without cross-linking is the mechanism of dactinomycin, whereas cisplatin covalently cross-links DNA strands.",
    "citation": "Kelland L. The resurgence of platinum-based cancer chemotherapy. Nat Rev Cancer. 2007;7(8):573-584. PMID: 17625587."
  },
  # 0347
  {
    "code": "op-c-s1-0347",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Nervous System",
    "topic": "Microtubule Inhibitor Mechanisms Vinca Alkaloids vs Taxanes",
    "subtopic": "Beta-Tubulin Polymerization Inhibition (Vincristine) vs Depolymerization Block (Paclitaxel)",
    "provisionalDifficulty": 4,
    "stem": "An experimental pharmacology laboratory compares the cellular mechanisms of two antineoplastic agents that target the eukaryotic mitotic spindle in dividing cancer cells: Agent A binds to beta-tubulin at a specific interfacial site, preventing the polymerization of alpha- and beta-tubulin heterodimers and leading to the dissolution of mitotic spindles. Agent B binds to a distinct interior site on beta-tubulin, promoting the assembly of stable tubulin polymers and hyper-stabilizing microtubules, thereby preventing their dynamic depolymerization. Both agents arrest the cell cycle in the M phase (mitosis). Which of the following pairs correctly identifies Agent A and Agent B?",
    "choices": [
      ["Agent A: Vincristine; Agent B: Paclitaxel", "Correct. Microtubules are dynamic cylindrical polymers composed of alpha- and beta-tubulin heterodimers that undergo continuous, regulated polymerization and depolymerization (dynamic instability), essential for mitotic spindle assembly and chromosome segregation. Master the classic USMLE Step 1 distinction between the two opposing classes of microtubule-targeting drugs: (1) AGENT A is a VINCA ALKALOID (VINCRISTINE, VINBLASTINE). Vinca alkaloids bind to beta-tubulin and PREVENT TUBULIN POLYMERIZATION into microtubules. Without polymer assembly, the mitotic spindle cannot form, arresting cells in metaphase. Toxicity: Vincristine causes severe PERIPHERAL SENSORY NEUROPATHY (constipation/paralytic ileus, foot drop, wrist drop) due to disruption of axonal microtubule vesicular transport; it spares bone marrow ('Cris-tine = Crisis to Nerves'). (2) AGENT B is a TAXANE (PACLITAXEL, DOCETAXEL). Taxanes bind to beta-tubulin and PROMOTE MICROTUBULE ASSEMBLY, hyper-stabilizing polymers and PREVENTING THEIR DEPOLYMERIZATION. The mitotic spindle is frozen, unable to shorten during anaphase, arresting cells in M-phase."],
      ["Agent A: Paclitaxel; Agent B: Vincristine", "This reverses the two mechanisms: paclitaxel prevents depolymerization (hyper-stabilizes), whereas vincristine prevents polymerization (dissolves)."],
      ["Agent A: Colchicine; Agent B: Etoposide", "Colchicine inhibits tubulin polymerization, but etoposide inhibits topoisomerase II, not microtubule depolymerization."],
      ["Agent A: Vinblastine; Agent B: Methotrexate", "Methotrexate inhibits dihydrofolate reductase in S-phase; it does not hyper-stabilize microtubules in M-phase."],
      ["Agent A: Bleomycin; Agent B: Doxorubicin", "Bleomycin and doxorubicin cleave DNA strands, acting via free radicals and topoisomerase II, not mitotic spindle tubulin."]
    ],
    "shortestValidSolution": "Prevents tubulin polymerization -> Vincristine. Prevents tubulin depolymerization (hyper-stabilizes) -> Paclitaxel.",
    "necessaryInference": "Vinca alkaloids (vincristine) block tubulin polymerization (destroying spindles), whereas taxanes (paclitaxel) block tubulin depolymerization (freezing spindles in M-phase).",
    "strongestDistractor": "Agent A: Paclitaxel; Agent B: Vincristine",
    "distractorExclusion": "This directly inverts the mechanisms: vincristine inhibits polymerization, while paclitaxel inhibits depolymerization.",
    "citation": "Jordan MA, Wilson L. Microtubules as a target for anticancer drugs. Nat Rev Cancer. 2004;4(4):253-265. PMID: 15057285."
  },
  # 0348
  {
    "code": "op-c-s1-0348",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Gastrointestinal",
    "topic": "Topoisomerase I Inhibitors Irinotecan Mechanism and Cholinergic Toxicity",
    "subtopic": "Reversible Single-Strand Cleavable Complex Stabilization and Acute Diarrhea",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man with metastatic colorectal adenocarcinoma receives intravenous irinotecan as part of the FOLFIRI regimen. Within 40 minutes of beginning the irinotecan infusion, he develops severe acute abdominal cramping, diaphoresis, hypersalivation, and voluminous watery diarrhea. Physical examination demonstrates miosis, hyperactive bowel sounds, and a heart rate of 52/min. The oncologist immediately administers intravenous atropine, resulting in prompt resolution of his symptoms. In the target malignant cell nucleus, the active metabolite of irinotecan (SN-38) exerts its primary antitumor effect by inhibiting which of the following enzymes during the S phase of the cell cycle?",
    "choices": [
      ["Topoisomerase I, stabilizing single-stranded DNA cleavage complexes and preventing re-ligation", "Correct. Irinotecan and topotecan are semisynthetic analogs of the plant alkaloid camptothecin. Irinotecan is a prodrug converted by hepatic carboxylesterases into its active metabolite, SN-38. SN-38 selectively inhibits EUKARYOTIC TOPOISOMERASE I. Topoisomerase I normally relieves torsional strain during transcription and DNA replication by creating a reversible SINGLE-STRANDED NICK in the phosphodiester backbone of double-stranded DNA, allowing rotation, and then re-ligating the nick. Camptothecins bind to the topoisomerase I-DNA complex, STABILIZING THE CLEAVABLE COMPLEX and preventing re-ligation. When an advancing replication fork collides with this stabilized single-strand nick during the S PHASE of the cell cycle, it converts the reversible nick into an irreversible, lethal DOUBLE-STRANDED DNA BREAK. TOXICITY PROFILE: Irinotecan causes two distinct types of diarrhea: (1) ACUTE DIARRHEA (within 24 hours): mediated by direct competitive inhibition of acetylcholinesterase, producing an acute cholinergic surge (diarrhea, salivation, miosis, bradycardia) successfully reversed by ATROPINE ('I run to the can'); (2) LATE DIARRHEA (after 24 hours): mediated by direct mucosal injury from intestinal beta-glucuronidase converting SN-38 glucuronide back into active toxic SN-38, treated with high-dose loperamide."],
      ["Topoisomerase II-alpha, stabilizing double-stranded DNA cleavage complexes during G2/M phase", "Topoisomerase II is inhibited by etoposide and anthracyclines (doxorubicin), which create double-stranded DNA breaks, not camptothecin single-strand stabilization."],
      ["DNA polymerase beta, preventing base excision repair of alkylated purine adducts", "DNA polymerase beta participates in base excision repair; it is not the target of irinotecan."],
      ["Poly(ADP-ribose) polymerase-1 (PARP-1), trapping single-strand repair enzymes on damaged DNA", "PARP-1 is inhibited by olaparib and talazoparib in BRCA-mutated cancers, not irinotecan."],
      ["Telomerase reverse transcriptase, shortening hexameric TTAGGG repeats at chromosomal termini", "Telomerase is not targeted by camptothecin topoisomerase inhibitors."]
    ],
    "shortestValidSolution": "Irinotecan (acute diarrhea reversed by atropine) -> Inhibits Topoisomerase I, stabilizing single-strand DNA cleavable complexes in S-phase.",
    "necessaryInference": "Irinotecan acts by stabilizing Topoisomerase I single-strand DNA cleavage complexes during S-phase. Acute diarrhea is mediated by direct acetylcholinesterase inhibition, reversed by atropine.",
    "strongestDistractor": "Topoisomerase II-alpha, stabilizing double-stranded DNA cleavage complexes during G2/M phase",
    "distractorExclusion": "Topoisomerase II is inhibited by etoposide, producing double-strand breaks, whereas irinotecan specifically inhibits Topoisomerase I (single-strand nicks).",
    "citation": "Pommier Y. Topoisomerase I inhibitors: camptothecins and beyond. Nat Rev Cancer. 2006;6(10):789-802. PMID: 16990856."
  },
  # 0349
  {
    "code": "op-c-s1-0349",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Hematology",
    "topic": "Imatinib Mechanism of Action in Chronic Myeloid Leukemia",
    "subtopic": "Competitive Inhibition of the BCR-ABL Receptor Tyrosine Kinase ATP-Binding Pocket",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old man is evaluated for progressive fatigue, early satiety, and left upper quadrant fullness. Physical examination reveals massive splenomegaly extending 8 cm below the left costal margin. Laboratory evaluation demonstrates: - WBC: 142,000/mm3 (with a full spectrum of granulocytic precursors including myelocytes, metamyelocytes, and band forms; blasts < 2%) - Hemoglobin: 10.4 g/dL - Platelets: 580,000/mm3 - Leukocyte Alkaline Phosphatase (LAP) score: 12 (normal: 40-130; markedly low) Bone marrow cytogenetics confirms the reciprocal translocation t(9;22)(q34;q11.2), creating the Philadelphia chromosome and generating a chimeric BCR-ABL1 fusion oncogene. The patient is prescribed oral imatinib mesylate. At the molecular level, imatinib induces complete hematologic and molecular remission in this patient by which of the following mechanisms?",
    "choices": [
      ["Competitive inhibition of the ATP-binding site on the BCR-ABL tyrosine kinase, blocking downstream substrate phosphorylation", "Correct. Chronic Myeloid Leukemia (CML) is a myeloproliferative neoplasm characterized by the PHILADELPHIA CHROMOSOME, t(9;22)(q34;q11.2). This reciprocal translocation fuses the BCR gene on chromosome 22 to the ABL1 proto-oncogene on chromosome 9, producing a chimeric BCR-ABL1 fusion gene that encodes a 210-kDa constitutively active, non-receptor TYROSINE KINASE. BCR-ABL phosphorylates downstream signaling molecules (STAT5, PI3K/Akt, RAS/MAPK), driving uninhibited granulocytic proliferation and suppressing apoptosis. Low LAP score distinguishes CML from a benign leukemoid reaction (high LAP). IMATINIB (Gleevec) is a small-molecule targeted inhibitor designed to fit precisely into the ATP-BINDING POCKET of the inactive kinase domain of BCR-ABL. By competitively blocking ATP binding, imatinib prevents the transfer of phosphate to tyrosine residues on downstream substrates, switching off oncogenic signaling and driving selective apoptosis of Philadelphia-positive malignant clones. (Secondary resistance commonly arises via the T315I 'gatekeeper' mutation)."],
      ["Covalent alkylation of the guanosine-triphosphate (GTP) binding pocket of oncogenic KRAS", "Sotorasib covalently targets the switch-II pocket of mutant KRAS G12C in non-small cell lung cancer, not BCR-ABL in CML."],
      ["Monoclonal antibody binding to the extracellular domain of the epidermal growth factor receptor (EGFR)", "EGFR extracellular monoclonal antibodies are cetuximab and panitumumab; imatinib is an intracellular small-molecule kinase inhibitor, and BCR-ABL lacks an extracellular domain."],
      ["Allosteric activation of protein tyrosine phosphatase 1B accelerating dephosphorylation of STAT5", "Imatinib directly blocks BCR-ABL kinase activity; it does not act as an allosteric activator of host phosphatases."],
      ["Immune checkpoint blockade of programmed cell death protein-1 (PD-1) on cytotoxic T cells", "PD-1 inhibitors (pembrolizumab, nivolumab) are checkpoint immunotherapies, not small-molecule tyrosine kinase inhibitors."]
    ],
    "shortestValidSolution": "CML with t(9;22) Philadelphia chromosome BCR-ABL -> Imatinib competitively inhibits the ATP-binding pocket of BCR-ABL tyrosine kinase.",
    "necessaryInference": "Philadelphia chromosome t(9;22) creates constitutively active BCR-ABL tyrosine kinase. Imatinib is a selective small-molecule inhibitor that competitively blocks the ATP-binding pocket.",
    "strongestDistractor": "Allosteric activation of protein tyrosine phosphatase 1B accelerating dephosphorylation of STAT5",
    "distractorExclusion": "Imatinib targets the upstream BCR-ABL kinase ATP-binding cleft directly, rather than activating downstream phosphatases.",
    "citation": "Druker BJ. Translation of the Philadelphia chromosome into therapy for CML. Blood. 2008;112(13):4808-4817. PMID: 19064741."
  },
  # 0350
  {
    "code": "op-c-s1-0350",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Trastuzumab HER2 Antagonism and Reversible Cardiotoxicity",
    "subtopic": "Reversible Left Ventricular Ejection Fraction Decline Without Myocyte Necrosis",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old woman with newly diagnosed invasive ductal carcinoma of the breast undergoes core needle biopsy. Immunohistochemistry and fluorescence in situ hybridization (FISH) demonstrate strong 3+ membranous overexpression of the human epidermal growth factor receptor 2 (HER2/neu, also known as c-erbB2). Adjuvant therapy with the recombinant humanized IgG1 monoclonal antibody trastuzumab is planned. Prior to initiating therapy, baseline transthoracic echocardiography is obtained and demonstrates a left ventricular ejection fraction (LVEF) of 62%. In contrast to the permanent, cumulative cardiotoxicity caused by anthracyclines (doxorubicin), which of the following clinical and pathological characteristics is classic for trastuzumab-induced cardiotoxicity?",
    "choices": [
      ["Asymptomatic decline in left ventricular ejection fraction that is dose-independent and typically fully reversible following drug discontinuation, without myocardial necrosis or ultrastructural loss of myofibrils", "Correct. Trastuzumab (Herceptin) is a humanized monoclonal antibody directed against the extracellular domain IV of the HER2/neu (erbB2) receptor tyrosine kinase, blocking downstream MAPK and PI3K/Akt survival signaling and triggering antibody-dependent cellular cytotoxicity (ADCC) in HER2-positive breast and gastric cancers. CRUCIAL USMLE STEP 1 CARDIOTOXICITY DISTINCTION: (1) ANTHRACYCLINE (DOXORUBICIN) CARDIOTOXICITY (Type I): Cumulative, dose-dependent, irreversible, causing free-radical damage, myocyte vacuolization, loss of myofibrils, and necrosis. (2) TRASTUZUMAB CARDIOTOXICITY (Type II): NOT DOSE-DEPENDENT, does not depend on cumulative exposure, causes stunning of cardiomyocytes without myocyte necrosis or ultrastructural myofibril loss, and is TYPICALLY FULLY REVERSIBLE following discontinuation of trastuzumab. Cardiotoxicity occurs because HER2 signaling in adult cardiomyocytes is normally essential for cellular survival and adaptation to biomechanical stress."],
      ["Dose-dependent, cumulative myocardial necrosis characterized by diffuse interstitial fibrosis and permanent loss of myofibrils", "This describes Type I anthracycline (doxorubicin) cardiotoxicity, not Type II trastuzumab cardiotoxicity."],
      ["Immune checkpoint myocarditis characterized by marked lymphocytic infiltration and positive cardiac troponin elevation", "Lymphocytic myocarditis with troponin elevation is caused by immune checkpoint inhibitors (anti-PD-1 / anti-CTLA-4), not trastuzumab."],
      ["Acute constrictive pericarditis with pericardial knock and prominent early diastolic dip and plateau waves", "Constrictive pericarditis is caused by radiation therapy, tuberculosis, or cardiac surgery, not trastuzumab monoclonal antibody therapy."],
      ["Fibrotic valvular heart disease with extensive leaflet thickening and severe tricuspid regurgitation", "Valvular thickening occurs with ergot derivatives and fenfluramine (via 5-HT2B serotonin receptors) or carcinoid syndrome, not trastuzumab."]
    ],
    "shortestValidSolution": "Trastuzumab cardiotoxicity -> Dose-independent, no myocyte necrosis, reversible upon drug cessation (Type II cardiotoxicity).",
    "necessaryInference": "Contrast Type I irreversible anthracycline cardiotoxicity (myocyte necrosis, dose-dependent) with Type II reversible trastuzumab cardiotoxicity (myocyte stunning without necrosis, dose-independent).",
    "strongestDistractor": "Dose-dependent, cumulative myocardial necrosis characterized by diffuse interstitial fibrosis and permanent loss of myofibrils",
    "distractorExclusion": "Cumulative dose-dependent necrosis is the hallmark of anthracyclines (doxorubicin), whereas trastuzumab cardiotoxicity lacks necrosis and is reversible.",
    "citation": "Slamon DJ, Leyland-Jones B, Shak S, et al. Use of chemotherapy plus a monoclonal antibody against HER2 for metastatic breast cancer that overexpresses HER2. N Engl J Med. 2001;344(11):783-792. PMID: 11248153."
  }
]

print(f"Loaded {len(b14_remaining)} items for Batch 14 part 2.")
