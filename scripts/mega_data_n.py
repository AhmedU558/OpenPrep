"""
Mega Data Part N: Domains 83 to 88 (Toxicology, Antidote Pharmacology & Environmental Emergencies)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_N = [
    # Domain 83: Toxic Alcohols (Methanol & Ethylene Glycol)
    {
        "id": "domain_83_toxic_alcohols",
        "entity": "Methanol and Ethylene glycol poisoning",
        "hallmark": "severe high anion gap metabolic acidosis, elevated osmolar gap, visual blurring ('snowstorm' vision), optic disc hyperemia, calcium oxalate envelope crystals in urine, and acute renal failure",
        "system": "General Principles",
        "ref_key": "toxicology",
        "subjects": {
            "Step 1": "Biochemistry",
            "NEET PG": "Pharmacology",
            "FCPS": "Medicine",
            "UHS MBBS": "Biochemistry",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Alcohol dehydrogenase metabolism to toxic formic and oxalic acids",
                "Alcohol dehydrogenase converting methanol to formic acid (causing retinal toxicity and putaminal necrosis) and ethylene glycol to glycolic/oxalic acids (causing acute tubular necrosis).",
                "Methanol toxicity is mediated by formic acid inhibiting mitochondrial cytochrome c oxidase; ethylene glycol generates oxalic acid which precipitates with calcium as insoluble monohydrate/dihydrate crystals."
            ),
            "Step 2 CK": (
                "Immediate fomepizole administration and indications for emergent hemodialysis",
                "Administering intravenous fomepizole (competitive alcohol dehydrogenase inhibitor) and arranging urgent hemodialysis for severe acidemia (pH < 7.25), visual symptoms, or renal failure.",
                "Fomepizole has an affinity for alcohol dehydrogenase 8,000 times higher than ethanol; early administration prevents conversion of parent alcohols into lethal toxic metabolites."
            ),
            "Step 3": (
                "Calculating osmolar gap and cofactor supplementation (folinic acid, thiamine, pyridoxine)",
                "Calculating the serum osmolar gap (measured minus calculated osmolarity > 10-15 mOsm/kg) and administering folinic acid for methanol and thiamine/pyridoxine for ethylene glycol.",
                "Folinic acid enhances endogenous metabolism of toxic formic acid to carbon dioxide and water; thiamine and pyridoxine shift ethylene glycol breakdown toward non-toxic alpha-hydroxybutyrate and glycine."
            ),
            "PLAB / UKMLA": (
                "National Poisons Information Service (TOXBASE) guidance and ethanol infusion fallback",
                "Consulting TOXBASE and initiating intravenous ethanol infusion if fomepizole is unavailable, targeting a serum ethanol concentration of 100 to 150 mg/dL (22 to 33 mmol/L).",
                "Ethanol serves as a competitive substrate for alcohol dehydrogenase; when fomepizole is not stocked, IV ethanol infusion delays toxic metabolite production pending transfer for hemodialysis."
            ),
            "AMC": (
                "Urinary microscopy for calcium oxalate monohydrate and dihydrate crystals",
                "Performing urine sediment microscopy under polarized light to identify envelope-shaped (dihydrate) or needle/dumbbell-shaped (monohydrate) calcium oxalate crystals.",
                "Identification of calcium oxalate crystals in a patient with severe metabolic acidosis and acute renal injury is pathognomonic of ethylene glycol (antifreeze) ingestion."
            ),
            "MCCQE": (
                "Distinguishing toxic alcohol ingestion from alcoholic ketoacidosis and DKA",
                "Differentiating toxic alcohol toxicity (high osmolar gap + high anion gap without prominent ketonuria) from diabetic ketoacidosis and starvation/alcoholic ketoacidosis.",
                "In toxic alcohol ingestion, the osmolar gap is highest early after ingestion before parent alcohols are metabolized; as acidosis worsens, the osmolar gap falls while the anion gap widens."
            ),
            "FCPS": (
                "Bilateral putaminal necrosis and hemorrhagic infarction on neuroimaging in methanol",
                "Non-contrast brain CT or T2-weighted MRI demonstrating bilateral symmetrical hypodensity or T2-hyperintensity and necrosis of the putamen in methanol poisoning.",
                "Formic acid exhibits selective cytotoxic affinity for the basal ganglia, particularly the putamen; putaminal necrosis and optic nerve demyelination produce permanent visual and parkinsonian deficits."
            ),
            "NLE": (
                "First-line antidote and calculation of the serum anion gap",
                "Administering intravenous fomepizole and calculating the anion gap [Na - (Cl + HCO3)] to verify elevated gap metabolic acidosis exceeding 12 mEq/L.",
                "Anion gap elevation reflects accumulation of unmeasured toxic anions (formate or glycolate); timely fomepizole prevents continued unmeasured anion accumulation."
            ),
            "NEET PG": (
                "Wood's lamp examination of urine and fluorescence of sodium fluorescein additive",
                "Illuminating freshly voided urine with a Wood's ultraviolet lamp to detect bright yellow-green fluorescence of sodium fluorescein added to commercial antifreeze.",
                "Many antifreeze formulations contain fluorescein dye; ultraviolet inspection within 4 hours of ingestion can provide a rapid presumptive bedside diagnosis of ethylene glycol ingestion."
            ),
            "MRCP": (
                "Extracorporeal clearance kinetics and hemodialysis endpoints in toxic alcohol poisoning",
                "Hemodialysis clearances of parent alcohols and toxic metabolites, continuing hemodialysis until toxic alcohol levels are undetectable and acid-base status normalizes.",
                "Hemodialysis rapidly clears both small molecular parent compounds (methanol, ethylene glycol) and toxic organic acid metabolites (formate, glycolate), correcting lethal metabolic acidemia."
            ),
            "MRCEM": (
                "Emergency airway protection and avoidance of hyperventilation suppression in severe acidosis",
                "Maintaining high minute ventilation matching compensatory respiratory alkalosis if intubation is required, to avoid catastrophic worsening of acidemia.",
                "Patients compensate for severe metabolic acidosis with intense Kussmaul hyperventilation; standard mechanical ventilator settings cause acute rise in PaCO2 and precipitous fatal drop in arterial pH."
            ),
            "SMLE": (
                "Toxicology screening panels and cross-reactivity limitations with enzymatic assays",
                "Recognizing that standard hospital toxicology screens do not detect methanol or ethylene glycol, requiring specific gas chromatography or enzymatic volatile screens.",
                "Standard urine drug screens only detect common drugs of abuse (opiates, cocaine, cannabinoids); toxic alcohols require specific blood assays or surrogate calculated osmolar gap evaluation."
            ),
            "HAAD / DHA": (
                "Occupational and industrial solvent exposure reporting in workplace toxicity",
                "Filing statutory occupational health incident notification for commercial solvent ingestions and enforcing chemical storage container labeling standards.",
                "Unintentional toxic alcohol ingestions frequently occur when industrial solvents or adulterated spirits are stored in unlabelled beverage containers, mandating regulatory inspection."
            ),
            "UHS MBBS": (
                "Biochemical formula for serum osmolarity and calculated osmolar gap",
                "Calculated osmolarity = 2[Na] + [Glucose]/18 + [BUN]/2.8; osmolar gap = measured osmolality minus calculated osmolarity (>10 mOsm/L is abnormal).",
                "Discrepancy between measured freezing-point depression osmolality and calculated serum osmolarity indicates the presence of unmeasured low-molecular-weight solutes (toxic alcohols)."
            )
        }
    },

    # Domain 84: Acetaminophen Toxicity & N-Acetylcysteine
    {
        "id": "domain_84_acetaminophen",
        "entity": "Acetaminophen (Paracetamol) hepatotoxicity and acute liver failure",
        "hallmark": "initial asymptomatic or mild nausea phase, followed at 48-72 hours by severe right upper quadrant pain, profound jaundice, massive transaminitis (AST/ALT > 1,000-10,000 U/L), coagulopathy, and encephalopathy",
        "system": "Gastrointestinal",
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
                "CYP2E1 oxidation to toxic NAPQI, glutathione depletion, and centrilobular zone 3 necrosis",
                "Saturation of phase II glucuronidation and sulfation, shunting acetaminophen to CYP2E1 oxidation into N-acetyl-p-benzoquinone imine (NAPQI), depleting hepatic glutathione and causing zone 3 necrosis.",
                "When hepatic glutathione stores fall below 30% of normal, electrophilic NAPQI binds covalently to mitochondrial and cellular macromolecules, causing severe centrilobular (zone 3) hepatic necrosis."
            ),
            "Step 2 CK": (
                "Rumack-Matthew nomogram interpretation and timing of N-acetylcysteine (NAC) administration",
                "Plotting 4-hour post-ingestion serum acetaminophen concentration on the Rumack-Matthew nomogram and administering N-acetylcysteine within 8 hours of acute ingestion.",
                "NAC replenishes hepatic glutathione stores and acts as a direct glutathione surrogate; administration within 8 hours of acute ingestion reduces the risk of severe hepatotoxicity to < 2%."
            ),
            "Step 3": (
                "King's College Hospital criteria for emergency liver transplantation in acute liver failure",
                "Evaluating for liver transplantation criteria: arterial pH < 7.30 after fluid resuscitation, or INR > 6.5, serum creatinine > 3.4 mg/dL (300 umol/L), and grade III/IV encephalopathy within 24 hours.",
                "Acetaminophen-induced acute liver failure carries high mortality once severe encephalopathy and multi-organ dysfunction supervene; King's College criteria identify candidates requiring urgent grafting."
            ),
            "PLAB / UKMLA": (
                "UK single treatment line protocol on the paracetamol overdose nomogram",
                "Initiating intravenous N-acetylcysteine immediately if the paracetamol concentration lies on or above the single 100 mg/L treatment line at 4 hours post-ingestion.",
                "UK guidelines utilize a single treatment threshold line (100 mg/L at 4 hours) for all patients, eliminating the previous high-risk vs normal-risk dichotomy to enhance clinical safety."
            ),
            "AMC": (
                "Management of staggered or chronic supratherapeutic acetaminophen ingestions",
                "Treating staggered ingestions (taken over > 2 hours) or chronic supratherapeutic dosing with immediate intravenous NAC if paracetamol is detectable or transaminases are elevated.",
                "The Rumack-Matthew nomogram applies strictly to single acute ingestions presenting within 24 hours; staggered ingestions cannot be risk-stratified with the nomogram and mandate empiric NAC."
            ),
            "MCCQE": (
                "Oral vs intravenous N-acetylcysteine protocols and management of anaphylactoid reactions",
                "Managing non-IgE-mediated anaphylactoid reactions to IV NAC (flushing, urticaria, bronchospasm) by temporarily pausing infusion, administering antihistamines, and restarting at a lower rate.",
                "Anaphylactoid reactions to IV NAC are caused by direct histamine release rather than IgE-mediated anaphylaxis; symptoms resolve with rate reduction and antihistamines without needing drug discontinuation."
            ),
            "FCPS": (
                "Surgical liver transplant evaluation and MELD score in acute toxic liver failure",
                "Emergency liver transplant listing with continuous veno-venous hemodiafiltration, intracranial pressure monitoring, and intravenous NAC continuation until coagulopathy resolves.",
                "Intravenous NAC provides systemic antioxidant, inotropic, and microvascular benefits in established acute liver failure even after the initial 24-hour therapeutic window has passed."
            ),
            "NLE": (
                "Four clinical stages of acute acetaminophen poisoning",
                "Stage 1 (0-24h: nausea/vomiting), Stage 2 (24-72h: transaminitis, RUQ pain), Stage 3 (72-96h: peak hepatotoxicity, jaundice, coagulopathy), Stage 4 (4-14 days: recovery or death).",
                "Recognizing the deceptive clinical latency in Stage 1 is crucial; patients may feel relatively well despite irreversible hepatic biochemical cascade initiation if NAC is delayed."
            ),
            "NEET PG": (
                "Role of chronic alcohol consumption and CYP2E1 induction in lowering toxic thresholds",
                "Chronic ethanol consumption inducing hepatic CYP2E1 and depleting baseline nutritional glutathione stores, predisposing to severe hepatotoxicity at lower doses (< 4 g/day).",
                "Chronic alcoholism induces cytochrome P450 2E1 expression and diminishes hepatic glutathione; acute alcohol co-ingestion, however, competitively inhibits CYP2E1, providing transient hepatoprotection."
            ),
            "MRCP": (
                "Biomarkers of acute hepatic necrosis: rapid INR rise preceding hyperbilirubinemia",
                "Recognizing that coagulopathy (INR prolongation due to factor VII half-life of 6 hours) is the earliest and most sensitive marker of impaired synthetic hepatic function.",
                "Factor VII has the shortest biological half-life of all clotting factors; acute prolongation of the prothrombin time/INR heralds severe hepatocyte death before significant jaundice develops."
            ),
            "MRCEM": (
                "Emergency administration of activated charcoal within 1 to 2 hours of ingestion",
                "Administering oral activated charcoal (1 g/kg, up to 50 g) if the patient presents within 1 to 2 hours of a potentially toxic acute paracetamol ingestion.",
                "Activated charcoal binds acetaminophen avidly in the stomach, reducing systemic absorption by up to 50-70% when given early, without interfering with subsequent IV NAC efficacy."
            ),
            "SMLE": (
                "Criteria for stopping N-acetylcysteine infusion: AST/ALT and INR normalization",
                "Continuing NAC beyond the standard 21-hour infusion until serum acetaminophen is undetectable, ALT is clearly declining, and INR has normalized to < 2.0.",
                "Fixed 21-hour protocols are inadequate for massive overdoses or ongoing hepatic injury; therapy must be extended based on objective biochemical markers of hepatic recovery."
            ),
            "HAAD / DHA": (
                "Public health restrictions on over-the-counter blister packaging and pack sizes",
                "Enforcing statutory pharmaceutical regulations restricting maximum over-the-counter pack sizes to blister packs containing <= 16 to 32 tablets.",
                "Legislation limiting over-the-counter blister pack sizes reduces impulse suicide attempts and substantially lowers the incidence of severe paracetamol-induced liver failure."
            ),
            "UHS MBBS": (
                "Chemical structure of acetaminophen and phase II hepatic conjugation pathways",
                "Para-aminophenol derivative primarily conjugated by hepatic glucuronyl transferase (60%) and sulfotransferase (35%) into non-toxic water-soluble renal excretion products.",
                "In therapeutic doses, over 90% of acetaminophen is safely conjugated to glucuronide and sulfate metabolites; less than 5% enters the CYP2E1 pathway, safely neutralized by glutathione."
            )
        }
    },

    # Domain 85: Carbon Monoxide & Cyanide Poisoning
    {
        "id": "domain_85_co_cyanide",
        "entity": "Carbon monoxide (CO) and Cyanide poisoning in house fire victims",
        "hallmark": "headache, confusion, cherry-red skin (rare/post-mortem), normal pulse oximetry with falsely high oxygen saturation, marked lactic acidosis (> 8-10 mmol/L), and acute cardiovascular collapse following smoke inhalation",
        "system": "Respiratory",
        "ref_key": "toxicology",
        "subjects": {
            "Step 1": "Biochemistry",
            "NEET PG": "Pharmacology",
            "FCPS": "Medicine",
            "UHS MBBS": "Physiology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Left-shift of oxygen-hemoglobin curve by CO and Complex IV cytochrome inhibition by Cyanide",
                "CO binding hemoglobin with 240-fold greater affinity than oxygen, shifting the curve leftward, while cyanide binds ferric iron (Fe3+) in mitochondrial cytochrome c oxidase (complex IV) halting ATP synthesis.",
                "Carboxyhemoglobin causes tissue hypoxia through cooperative left-shifting of the dissociation curve preventing oxygen unloading; cyanide produces histotoxic anoxia by inhibiting oxidative phosphorylation."
            ),
            "Step 2 CK": (
                "Immediate 100% normobaric oxygen for CO and intravenous hydroxocobalamin for cyanide",
                "Administering 100% normobaric oxygen via non-rebreather mask for carbon monoxide, and empirical intravenous hydroxocobalamin for suspected cyanide poisoning in smoke inhalation.",
                "100% oxygen reduces the elimination half-life of carboxyhemoglobin from 300 minutes to 90 minutes; hydroxocobalamin binds cyanide with high affinity to form non-toxic cyanocobalamin excreted in urine."
            ),
            "Step 3": (
                "Indications for hyperbaric oxygen therapy (HBOT) and delayed neurological sequelae",
                "Referring for hyperbaric oxygen therapy for carboxyhemoglobin > 25% (> 15% in pregnancy), loss of consciousness, severe metabolic acidosis, or ischemic electrocardiographic changes.",
                "HBOT (at 2.5-3.0 atmospheres) reduces CO half-life to 20-30 minutes and displaces CO from myoglobin and cytochromes, significantly reducing the incidence of delayed neuropsychiatric syndrome."
            ),
            "PLAB / UKMLA": (
                "Co-oximetry blood gas measurement vs standard pulse oximetry inaccuracy",
                "Obtaining an arterial or venous blood gas with co-oximetry to directly measure carboxyhemoglobin and oxyhemoglobin, recognizing that standard two-wavelength pulse oximeters read falsely normal.",
                "Standard pulse oximeters measure light absorption at 660 nm and 940 nm and cannot distinguish oxyhemoglobin from carboxyhemoglobin, giving a falsely reassuring normal SpO2 reading."
            ),
            "AMC": (
                "Workup of profound lactic acidosis in house fire victims with soot in the oropharynx",
                "Recognizing that serum lactate > 8-10 mmol/L in smoke inhalation victims is highly sensitive and specific for cyanide toxicity resulting from synthetic polymer combustion.",
                "Combustion of household plastics, wool, and polyurethane releases high concentrations of hydrogen cyanide gas; severe lactic acidosis despite adequate oxygenation indicates cellular histotoxic asphyxia."
            ),
            "MCCQE": (
                "Management of pregnant patients with carbon monoxide exposure",
                "Maintaining hyperbaric or normobaric oxygen therapy for pregnant patients until fetal carboxyhemoglobin clears, using lower threshold (COHb > 15%) for hyperbaric referral.",
                "Fetal hemoglobin (HbF) binds carbon monoxide with higher affinity than adult hemoglobin; fetal elimination is much slower, predisposing the fetus to severe intrauterine hypoxia, teratogenicity, or demise."
            ),
            "FCPS": (
                "Neuroimaging findings in delayed encephalopathy: globus pallidus necrosis",
                "Brain MRI demonstrating bilateral symmetrical T2/FLAIR hyperintensity and necrosis of the globus pallidus and subcortical white matter demyelination in carbon monoxide poisoning.",
                "The globus pallidus and substantia nigra have high basal metabolic rates and high iron concentrations, making them uniquely vulnerable to CO-induced hypoxic-ischemic injury and lipid peroxidation."
            ),
            "NLE": (
                "Symptoms of acute carbon monoxide poisoning based on carboxyhemoglobin levels",
                "Mild (10-20%: tension headache, nausea), Moderate (20-40%: dizziness, syncope, confusion), Severe (>40-50%: seizures, coma, myocardial ischemia, death).",
                "Carbon monoxide is an odorless, colorless, non-irritating gas produced by incomplete combustion of fossil fuels; persistent headache and flu-like symptoms during winter suggest domestic CO exposure."
            ),
            "NEET PG": (
                "Cyanide antidote mechanisms: hydroxocobalamin vs sodium nitrite and sodium thiosulfate",
                "Hydroxocobalamin chelating cyanide to form cyanocobalamin, versus sodium nitrite inducing methemoglobinemia (Fe3+) to scavenge cyanide, followed by thiosulfate rhodanese conjugation to thiocyanate.",
                "Nitrites oxidize Fe2+ to Fe3+ forming methemoglobin, which binds cyanide; however, nitrites reduce oxygen-carrying capacity and are contraindicated when concurrent carbon monoxide toxicity is present."
            ),
            "MRCP": (
                "Mechanism of delayed neuropsychiatric sequelae (DNS) following carbon monoxide recovery",
                "Development of cognitive deficits, parkinsonism, memory loss, and personality changes 2 to 40 days after apparent full recovery, caused by brain lipid peroxidation and myelin basic protein autoimmunity.",
                "CO causes reperfusion injury, xanthine oxidase activation, and microvascular leukocyte adherence; approximately 10-30% of severely poisoned patients develop delayed neurological syndrome."
            ),
            "MRCEM": (
                "Emergency antidote administration priority in simultaneous smoke inhalation collapse",
                "Immediate administration of intravenous hydroxocobalamin (5 g IV over 15 minutes) and 100% high-flow oxygen in an obtunded fire victim with suspected cyanide and CO toxicity.",
                "Hydroxocobalamin does not induce methemoglobinemia or hypotension, making it the safest first-line cyanide antidote in the presence of co-existing carbon monoxide poisoning or smoke-induced shock."
            ),
            "SMLE": (
                "Domestic sources of carbon monoxide poisoning and installation of home alarms",
                "Identifying malfunctioning gas furnaces, kerosene space heaters, indoor charcoal barbecues, and generators operating in enclosed spaces, recommending certified carbon monoxide alarms.",
                "Public health prevention mandates installing domestic electrochemical CO detectors near sleeping areas, particularly in colder months when indoor combustion heating systems are actively operating."
            ),
            "HAAD / DHA": (
                "Adverse effects of hydroxocobalamin: chromaturia and interference with hemodialysis",
                "Counseling that hydroxocobalamin causes harmless dark red discoloration of urine and skin (chromaturia) and transiently interferes with co-oximetry and photometric hemodialysis alarms.",
                "Hydroxocobalamin's deep red chromophore causes skin and body fluid red discoloration lasting several days; it absorbs light at 652 nm, interfering with blood analyzers, creatinine, and bilirubin tests."
            ),
            "UHS MBBS": (
                "Spectroscopic differentiation of oxyhemoglobin, carboxyhemoglobin, and methemoglobin",
                "Carboxyhemoglobin has characteristic absorption peaks at 535 nm and 570 nm on multi-wavelength co-oximetry, while methemoglobin demonstrates absorption at 630 nm.",
                "Multi-wavelength spectrophotometry (co-oximetry) measures light absorption across four distinct wavelengths, accurately determining the exact percentages of functional and dyshemoglobins."
            )
        }
    },

    # Domain 86: Cardiovascular Drug Overdose (Beta-blockers, CCBs & Digoxin)
    {
        "id": "domain_86_cardiac_tox",
        "entity": "Beta-blocker, Calcium channel blocker (CCB), and Digoxin toxicity",
        "hallmark": "profound bradycardia, high-grade AV block, refractory hypotension, hyperglycemia (in CCB overdose), hypoglycemia (in beta-blocker overdose), and xanthopsia (yellow-green halos) with scooped ST segments in digoxin toxicity",
        "system": "Cardiovascular",
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
                "Receptor mechanisms: intracellular cAMP depletion, L-type calcium blockade, and Na+/K+ ATPase inhibition",
                "Beta-blockade reducing adenylyl cyclase and cAMP; CCB blocking L-type channels inhibiting pancreatic insulin release and myocardial contractility; digoxin inhibiting Na+/K+ ATPase increasing intracellular Ca2+.",
                "Digoxin inhibits myocardial Na+/K+ ATPase, raising intracellular sodium and indirectly increasing intracellular calcium via Na+/Ca2+ exchange; toxicity causes delayed afterdepolarizations and triggered ventricular ectopy."
            ),
            "Step 2 CK": (
                "High-dose insulin euglycemia (HIE) for CCB toxicity and IV glucagon for beta-blocker toxicity",
                "Initiating high-dose insulin euglycemia therapy (regular insulin 1 unit/kg bolus followed by 1-10 units/kg/hr infusion with dextrose) for CCB/beta-blocker shock, and IV glucagon for beta-blocker toxicity.",
                "During severe shock, myocardial metabolism switches from free fatty acids to carbohydrates; high-dose insulin acts as a powerful inotrope by facilitating myocardial glucose uptake, while glucagon bypasses beta-receptors to increase cAMP."
            ),
            "Step 3": (
                "Digoxin-specific Fab fragments (DigiFab) indications and dosing calculations",
                "Administering digoxin-specific antibody fragments (DigiFab) for life-threatening ventricular arrhythmias, progressive bradycardia refractory to atropine, or serum potassium > 5.0-5.5 mEq/L in acute overdose.",
                "In acute digoxin toxicity, hyperkalemia is an independent predictor of mortality; serum potassium > 5.5 mEq/L reflects profound systemic Na+/K+ ATPase inhibition, establishing a definitive indication for DigiFab."
            ),
            "PLAB / UKMLA": (
                "Contraindication of calcium chloride in digoxin toxicity (historical 'stone heart' hypothesis)",
                "Avoiding routine intravenous calcium administration in suspected digoxin toxicity due to theoretical risk of precipitating irreversible systolic cardiac arrest ('stone heart').",
                "Although recent evidence suggests calcium may be safe, UK and international guidelines avoid empiric IV calcium in hyperkalemia caused by digoxin toxicity, prioritizing immediate DigiFab therapy."
            ),
            "AMC": (
                "Differentiation of CCB vs Beta-blocker overdose by serum glucose levels",
                "Recognizing that calcium channel blocker overdose classically presents with marked hyperglycemia (due to pancreatic islet beta-cell L-type channel blockade), whereas beta-blockers cause hypoglycemia.",
                "Pancreatic insulin secretion is dependent on calcium influx through L-type voltage-gated channels; CCB toxicity blocks this influx, producing marked hypoinsulinemic hyperglycemia."
            ),
            "MCCQE": (
                "Managing lipid emulsion therapy (Intralipid) in lipophilic drug toxicity",
                "Administering 20% intravenous lipid emulsion (ILE) bolus and infusion as rescue therapy for refractory hemodynamic collapse from lipid-soluble agents (verapamil, diltiazem, propranolol).",
                "Intravenous lipid emulsion acts via a 'lipid sink' mechanism, extracting lipophilic medications from target myocardial tissues into intravascular lipid droplets, and promoting direct myocardial fatty acid oxidation."
            ),
            "FCPS": (
                "Veno-arterial extracorporeal membrane oxygenation (VA-ECMO) in refractory cardiogenic shock",
                "Instituting emergent veno-arterial ECMO as a bridge to drug clearance and myocardial recovery in patients with drug-induced refractory cardiogenic shock.",
                "Toxicological cardiogenic shock from beta-blockers and CCBs is typically reversible once the offending drug is metabolized; temporary mechanical circulatory support with VA-ECMO maintains perfusion."
            ),
            "NLE": (
                "Electrocardiographic manifestations of digoxin toxicity: arrhythmias and ST changes",
                "Recognizing scooped 'Salvador Dali mustache' ST depression, PR prolongation, ventricular premature beats (bigeminy), and bidirectional ventricular tachycardia.",
                "Bidirectional ventricular tachycardia (alternating QRS axis from beat to beat) is virtually pathognomonic of severe digitalis toxicity or catecholaminergic polymorphic ventricular tachycardia."
            ),
            "NEET PG": (
                "Factors predisposing to digitalis toxicity: hypokalemia, hypomagnesemia, and hypercalcemia",
                "Hypokalemia, hypomagnesemia, and hypercalcemia sensitizing the myocardium to digoxin toxicity, along with co-administration of quinidine, amiodarone, or verapamil.",
                "Potassium competes with digoxin for binding to the Na+/K+ ATPase; hypokalemia allows greater digoxin binding and toxicity even at normal therapeutic serum concentrations."
            ),
            "MRCP": (
                "Serum digoxin level interpretation: timing and post-distribution equilibrium",
                "Measuring serum digoxin levels at least 6 to 8 hours post-dose to allow complete tissue distribution equilibrium, avoiding falsely elevated distribution-phase measurements.",
                "Digoxin has a massive volume of distribution (5-8 L/kg) and binds slowly to skeletal and myocardial tissues; levels drawn within 6 hours of ingestion reflect non-equilibrated serum concentrations."
            ),
            "MRCEM": (
                "Emergency pacing in severe drug-induced bradycardia and chronotropic failure",
                "Initiating transcutaneous or transvenous electrical cardiac pacing when atropine and high-dose vasopressor infusions fail to improve perfusion in severe beta-blocker/CCB bradycardia.",
                "Electrical pacing may capture the myocardium; however, electromechanical dissociation can occur if underlying inotropy is severely depressed, requiring concurrent high-dose insulin or inotropes."
            ),
            "SMLE": (
                "Drug interactions: P-glycoprotein inhibition and renal clearance of digoxin",
                "Recognizing that amiodarone, verapamil, and clarithromycin inhibit P-glycoprotein and reduce renal digoxin clearance, mandating a 50% empiric reduction in baseline digoxin dose.",
                "Digoxin is excreted largely unchanged by renal tubular P-glycoprotein; co-prescribing P-glycoprotein inhibitors precipitously elevates serum digoxin levels into toxic ranges."
            ),
            "HAAD / DHA": (
                "Intravenous glucagon administration protocol and pre-medication for emesis",
                "Administering intravenous glucagon 5-10 mg slow IV bolus followed by maintenance infusion, pre-treating with an antiemetic due to prominent stimulation of the chemoreceptor trigger zone.",
                "Glucagon directly stimulates hepatic and myocardial glucagon receptors, activating Gs protein and adenylyl cyclase; high doses routinely trigger severe nausea and vomiting."
            ),
            "UHS MBBS": (
                "Pharmacokinetics of digoxin: half-life, volume of distribution, and renal excretion",
                "Biological half-life of 36 to 48 hours, large volume of distribution (400-500 liters), and predominant elimination via glomerular filtration and tubular secretion.",
                "Because digoxin has a narrow therapeutic index (0.5-0.9 ng/mL for heart failure, 0.8-2.0 ng/mL for atrial fibrillation) and prolonged half-life, subtle declines in GFR cause rapid toxic accumulation."
            )
        }
    },

    # Domain 87: Anticholinergic vs Cholinergic Toxidromes
    {
        "id": "domain_87_autonomic_tox",
        "entity": "Anticholinergic toxidrome (Atropine, Diphenhydramine, TCAs) vs Cholinergic toxidrome (Organophosphates)",
        "hallmark": "mydriasis, anhidrosis, flushed dry skin, delirium, urinary retention, absent bowel sounds ('mad as a hatter, dry as a bone') versus miosis, massive diaphoresis, salivation, lacrimation, urination, defecation, and bronchospasm (SLUDGE / DUMBELS)",
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
                "Muscarinic receptor antagonism vs acetylcholinesterase inhibition and enzyme aging",
                "Competitive blockade of postganglionic muscarinic acetylcholine receptors, versus organophosphate covalent phosphorylation of acetylcholinesterase and subsequent chemical aging.",
                "Organophosphates phosphorylate the serine hydroxyl group of acetylcholinesterase; pralidoxime (2-PAM) reactivates the enzyme only if given before spontaneous dealkylation ('aging') occurs."
            ),
            "Step 2 CK": (
                "Atropine titration to clear pulmonary secretions and pralidoxime in organophosphate poisoning",
                "Administering intravenous atropine doubling the dose every 3-5 minutes until pulmonary secretions and bronchospasm clear, followed by pralidoxime infusion.",
                "The therapeutic endpoint for atropinization in cholinergic crisis is dry lung fields, clear breath sounds, and resolved bronchospasm—not tachycardia or pupillary dilation."
            ),
            "Step 3": (
                "Physostigmine indications and strict contraindication in tricyclic antidepressant (TCA) overdose",
                "Administering physostigmine (tertiary amine carbamate) for pure anticholinergic delirium, strictly avoiding its use in TCA overdose due to risk of fatal asystole.",
                "Physostigmine crosses the blood-brain barrier to reverse central and peripheral anticholinergic delirium; however, in TCA overdose with cardiac conduction slowing, it precipitates asystole."
            ),
            "PLAB / UKMLA": (
                "Recognition of anticholinergic urinary retention and bedside catheterization",
                "Performing bedside bladder ultrasound demonstrating acute urinary retention (> 500-1,000 mL) and placing a urinary catheter prior to administering sedatives for agitation.",
                "Severe anticholinergic antagonism paralyzes the detrusor muscle, causing massive painless or painful urinary retention; acute delirium frequently resolves once the distended bladder is drained."
            ),
            "AMC": (
                "Decontamination protocols and personal protective equipment (PPE) for chemical organophosphates",
                "Full chemical-resistant personal protective equipment (PPE) for staff, complete removal of contaminated clothing, and vigorous skin decontamination with soap and water.",
                "Organophosphates are highly lipophilic and readily absorbed through unbroken skin; healthcare workers risk severe secondary contamination and cholinergic crisis without adequate dermal PPE."
            ),
            "MCCQE": (
                "ECG signs of tricyclic antidepressant toxicity and intravenous sodium bicarbonate therapy",
                "Administering intravenous hypertonic sodium bicarbonate (1-2 mEq/kg) for QRS widening > 100 ms or prominent R wave in aVR (> 3 mm) in TCA overdose.",
                "TCAs cause fast sodium channel blockade slowing intraventricular conduction; hypertonic sodium bicarbonate overcomes blockade by providing high extracellular sodium and inducing alkalinization."
            ),
            "FCPS": (
                "Managing intermediate syndrome and delayed polyneuropathy following organophosphate poisoning",
                "Monitoring for acute respiratory muscle weakness, neck flexion paresis, and cranial nerve palsies occurring 24 to 96 hours post-exposure (intermediate syndrome).",
                "Intermediate syndrome occurs after initial cholinergic crisis resolves; it involves post-synaptic neuromuscular junction receptor down-regulation requiring prolonged mechanical ventilation."
            ),
            "NLE": (
                "Mnemonic recognition: 'Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter'",
                "Hyperthermia, mydriasis/cycloplegia, anhidrosis/dry mouth, cutaneous vasodilation/flushing, and agitation/visual hallucinations in anticholinergic poisoning.",
                "Anticholinergic drugs block sweat glands preventing evaporative cooling and block ciliary and iris sphincter muscles causing blurred vision and non-reactive dilated pupils."
            ),
            "NEET PG": (
                "Differentiating anticholinergic poisoning from sympathomimetic toxidrome by sweating",
                "Recognizing that patients with sympathomimetic toxicity (cocaine, amphetamines) exhibit profuse diaphoresis, whereas patients with anticholinergic toxicity have completely dry skin and axillae.",
                "Both toxidromes cause tachycardia, hypertension, mydriasis, and hyperthermia; palpation of the axillae and skin differentiates wet sympathomimetic states from bone-dry anticholinergic states."
            ),
            "MRCP": (
                "Erythrocyte acetylcholinesterase vs plasma pseudocholinesterase monitoring",
                "Measuring red blood cell acetylcholinesterase activity as an accurate biological surrogate for true neuronal synaptic cholinesterase inhibition and recovery.",
                "RBC acetylcholinesterase reflects neuronal enzyme activity more accurately than plasma butyrylcholinesterase (pseudocholinesterase), which is synthesized by the liver and fluctuates with nutritional state."
            ),
            "MRCEM": (
                "Emergency agitation management: benzodiazepines vs avoidance of antipsychotics",
                "Administering intravenous benzodiazepines (lorazepam or diazepam) for agitation and hyperthermia, strictly avoiding haloperidol or chlorpromazine.",
                "First-generation antipsychotics possess intrinsic anticholinergic properties, lower the seizure threshold, and impair heat dissipation, exacerbating anticholinergic hyperthermia."
            ),
            "SMLE": (
                "Toxicity of central anticholinergics in the elderly: cognitive decline and falls",
                "Reviewing Beers Criteria to deprescribe first-generation antihistamines, antispasmodics, and tricyclic agents to prevent drug-induced delirium and urinary retention.",
                "Elderly individuals have reduced baseline cholinergic reserves in the nucleus basalis of Meynert; anticholinergic medications precipitate acute confusion, hallucinations, and catastrophic falls."
            ),
            "HAAD / DHA": (
                "Agricultural pesticide storage and organophosphate occupational surveillance standards",
                "Mandatory baseline and periodic serum cholinesterase monitoring for agricultural pesticide handlers and secure locked storage regulations.",
                "Statutory agricultural health standards mandate periodic cholinesterase testing; workers with > 30-50% depression from baseline must be removed from pesticide exposure."
            ),
            "UHS MBBS": (
                "SLUDGE and DUMBELS mnemonics for muscarinic cholinergic hyperstimulation",
                "Salivation, Lacrimation, Urination, Defecation, Gastrointestinal distress, Emesis, and Diaphoresis, Urination, Miosis, Bradycardia/Bronchorrhea, Emesis, Lacrimation, Salivation.",
                "Muscarinic hyperstimulation produces excessive exocrine gland secretions and smooth muscle contraction, with acute respiratory failure caused by bronchoconstriction and copius bronchial secretions."
            )
        }
    },

    # Domain 88: Hypothermia, Frostbite & Heat Emergencies
    {
        "id": "domain_88_environmental_tox",
        "entity": "Accidental hypothermia, Frostbite, Heat exhaustion, and Exertional/Classic Heat stroke",
        "hallmark": "core body temperature < 35 C, Osborn (J) waves on ECG, cold coagulopathy, freezing tissue necrosis with hemorrhagic blisters, or core temperature > 40 C with central nervous system dysfunction and hyperpyrexic anhidrosis/diaphoresis",
        "system": "General Principles",
        "ref_key": "who_trauma",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Medicine",
            "FCPS": "Surgery",
            "UHS MBBS": "Physiology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Thermoregulatory mechanisms: preoptic anterior hypothalamus and Osborn (J) wave pathophysiology",
                "Hypothalamic set-point disruption, cutaneous vasoconstriction failure, cold-induced diuresis, and delayed ventricular depolarization producing Osborn (J) waves on ECG.",
                "Osborn (J) waves are positive deflections at the QRS-ST junction caused by a prominent transmural voltage gradient in the ventricular epicardium during hypothermia."
            ),
            "Step 2 CK": (
                "Evaporative cooling for heat stroke and rapid rewarming bath for frostbite",
                "Immediate ice-water immersion or evaporative cooling (mist and fan) to lower core temperature < 39 C for heat stroke, and 37-39 C water bath rewarming for frostbite.",
                "Heat stroke is a medical emergency with mortality directly proportional to the duration of hyperthermia; rapid active cooling halts systemic inflammatory cascade and multiorgan failure."
            ),
            "Step 3": (
                "Extracorporeal life support (ECLS/CPB) rewarming for severe hypothermic cardiac arrest",
                "Instituting veno-arterial ECMO or cardiopulmonary bypass for accidental hypothermic cardiac arrest with core temperature < 30-32 C until warmed > 32-35 C.",
                "The clinical axiom 'no one is dead until warm and dead' applies; hypothermia provides profound neuroprotection, allowing neurologically intact survival following prolonged cardiac arrest."
            ),
            "PLAB / UKMLA": (
                "Gentle handling and avoidance of rough movement in hypothermia to prevent ventricular fibrillation",
                "Minimizing patient movement, avoiding rough transfers, and passive/active external warming to prevent mechanical triggering of intractable ventricular fibrillation in an irritable hypothermic heart.",
                "Below 30-32 C, the hypothermic myocardium is exquisitely sensitive to mechanical irritation; rough movement, endotracheal suctioning, or blind central line placement can trigger refractory VF."
            ),
            "AMC": (
                "Differentiating exertional heat stroke from non-exertional (classic) heat stroke",
                "Recognizing that exertional heat stroke occurs in athletes/laborers with active diaphoresis and high risk of rhabdomyolysis and DIC, whereas classic heat stroke occurs in frail elderly with anhidrosis.",
                "Exertional heat stroke is driven by metabolic heat production exceeding heat dissipation; massive muscle breakdown frequently precipitates acute tubular necrosis and consumption coagulopathy."
            ),
            "MCCQE": (
                "Proper frostbite thawing protocol: avoiding dry heat or premature refreezing",
                "Immersing frozen extremities in circulating warm water (37-39 C) only when there is zero risk of refreezing, strictly avoiding dry heat, rubbing with snow, or premature debridement.",
                "Thawing followed by refreezing causes catastrophic ice crystal propagation and microvascular thrombosis; early debridement is contraindicated because demarcating viable tissue requires weeks ('frostbite in January, amputate in July')."
            ),
            "FCPS": (
                "Thrombolytic therapy (intravenous or intra-arterial tPA) for severe deep frostbite",
                "Administering intravenous or intra-arterial tissue plasminogen activator (tPA) within 24 hours of thawing for deep frostbite with absent perfusion on angiography to reduce amputation rates.",
                "Severe frostbite causes progressive microvascular endothelial damage and platelet-fibrin microthrombi; timely thrombolysis salvages ischemic digits that would otherwise require amputation."
            ),
            "NLE": (
                "Clinical classification of hypothermia: Mild, Moderate, and Severe",
                "Mild (32-35 C: shivering, tachycardia), Moderate (28-32 C: shivering ceases, bradycardia, confusion), Severe (<28 C: coma, rigidity, apnea, ventricular arrhythmias).",
                "Shivering ceases below 32 C, removing the primary physiological mechanism for endogenous heat production; patients become poikilothermic and require active rewarming."
            ),
            "NEET PG": (
                "Paradoxical undressing, hide-and-die behavior, and cold diuresis",
                "Terminal peripheral vasodilation producing a sensation of extreme heat (paradoxical undressing) and primitive brainstem burrowing behavior (hide-and-die) in fatal hypothermia.",
                "Paralysis of the vasoconstrictor center causes sudden cutaneous vasodilation, giving the freezing victim a false sensation of burning heat, prompting them to discard clothing."
            ),
            "MRCP": (
                "Laboratory anomalies in hypothermia: cold coagulopathy, hemoconcentration, and blood gas correction",
                "Recognizing that hypothermia causes in vivo enzymatic coagulopathy despite normal standard 37 C laboratory PT/INR assays, along with respiratory acidosis and hyperkalemia.",
                "Standard laboratory blood coagulation tests are warmed to 37 C and fail to reflect severe in vivo enzymatic hypothermic coagulopathy; platelet dysfunction is pronounced."
            ),
            "MRCEM": (
                "Emergency resuscitation protocols: withholding epinephrine in hypothermic arrest < 30 C",
                "Limiting defibrillation attempts to <= 3 shocks and withholding intravenous epinephrine until core temperature is warmed > 30 C, then doubling dosing intervals between 30-35 C.",
                "Below 30 C, the liver and kidneys do not metabolize catecholamines; repeated adrenaline doses accumulate in the central circulation, causing massive rebound toxicity and dysrhythmias upon rewarming."
            ),
            "SMLE": (
                "Fluid resuscitation in heat emergencies: normal saline vs avoiding hypotonic fluids",
                "Administering intravenous isotonic normal saline or lactated Ringer solution, monitoring electrolytes to avoid rapid hyponatremia correction or water intoxication.",
                "Heat exhaustion involves significant electrolyte and fluid losses; drinking large quantities of pure water without sodium can cause severe exertional hyponatremic encephalopathy."
            ),
            "HAAD / DHA": (
                "Mandatory midday work bans and occupational heat stress regulations in Gulf climates",
                "Enforcing statutory midday outdoor work bans during summer months, mandatory hydration stations, and wet-bulb globe temperature (WBGT) monitoring at construction sites.",
                "Occupational health legislation prohibiting outdoor labor between 12:30 PM and 3:00 PM during peak summer drastically reduces morbidity and mortality from exertional heat illness."
            ),
            "UHS MBBS": (
                "Physical mechanisms of heat loss: Radiation, Convection, Conduction, and Evaporation",
                "Radiation accounts for 60% of heat loss at room temperature, but evaporation becomes the sole effective mechanism for heat dissipation when ambient temperature exceeds body temperature.",
                "When environmental temperature exceeds 35 C, heat is gained by radiation and convection; cutaneous vasodilation and sweat evaporation remain the only defense against heat stroke."
            )
        }
    }
]
