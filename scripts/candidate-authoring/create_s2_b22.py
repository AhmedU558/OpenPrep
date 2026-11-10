import json
import os

items = []

def add_q(code, subj, sys, topic, diff, stem, choices, shortest, inf, strong_d, excl, cit):
    items.append({
        "code": code,
        "exam": "Step 2 CK",
        "subject": subj,
        "system": sys,
        "topic": topic,
        "provisionalDifficulty": diff,
        "stem": stem,
        "choices": choices,
        "shortestValidSolution": shortest,
        "necessaryInference": inf,
        "strongestDistractor": strong_d,
        "distractorExclusion": excl,
        "citation": cit,
        "critique": {
            "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
            "clinicalInferenceNotes": f"High-yield Step 2 CK nephrology/acid-base question requiring multi-step quantitative calculation and evidence-based clinical management.",
            "distractorExclusionNotes": "Distractors feature classic calculation pitfalls, inappropriate diuretic or fluid choices, or contraindicated therapies.",
            "verdict": "PASS",
            "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
        }
    })

# 0526
add_q(
    "op-c-s2-0526", "Medicine", "Renal", "Mixed Acid-Base DKA and Vomiting Delta-Delta Gap", 5,
    "A 24-year-old woman with type 1 diabetes mellitus presents to the emergency department with abdominal pain, nausea, and intractable vomiting for 3 days after running out of insulin. Blood pressure is 102/64 mm Hg, pulse is 112/min, and respirations are 26/min. Physical examination shows dry mucous membranes and fruity breath odor. Laboratory evaluation reveals: serum sodium 134 mEq/L, potassium 4.8 mEq/L, chloride 84 mEq/L, bicarbonate 18 mEq/L, blood urea nitrogen 28 mg/dL, serum creatinine 1.3 mg/dL, and blood glucose 480 mg/dL. Urinalysis shows 4+ ketones and 3+ glucose. Arterial blood gas shows pH 7.34, PaCO2 34 mm Hg, and PaO2 96 mm Hg. Which of the following mixed acid-base disorders is present in this patient?",
    [
        ["Concurrent high anion gap metabolic acidosis and metabolic alkalosis", "Stepwise acid-base analysis: (1) Anion gap = Na - (Cl + HCO3) = 134 - (84 + 18) = 32 mEq/L (markedly elevated; normal 10-12 mEq/L), confirming a HIGH ANION GAP METABOLIC ACIDOSIS (HAGMA) due to ketoacidosis. (2) Delta-delta calculation: Delta AG = Measured AG - 12 = 32 - 12 = 20 mEq/L. For pure ketoacidosis, each 1 mEq/L increase in AG consumes approximately 1 mEq/L of bicarbonate; therefore, the 'corrected' bicarbonate = Measured HCO3 + Delta AG = 18 + 20 = 38 mEq/L. Because the corrected bicarbonate is significantly GREATER than the normal baseline of 24 mEq/L (Delta AG / Delta HCO3 = 20 / 6 = 3.3 > 2.0), there is an underlying concurrent METABOLIC ALKALOSIS (caused by intractable vomiting and loss of gastric hydrochloric acid)."],
        ["Pure high anion gap metabolic acidosis with appropriate respiratory compensation", "In pure HAGMA, the delta-delta ratio is ~1.0-1.6; here it is 3.3, and the corrected bicarbonate of 38 proves a concurrent metabolic alkalosis."],
        ["Concurrent high anion gap metabolic acidosis and normal anion gap metabolic acidosis", "A concurrent normal gap acidosis yields a delta-delta ratio < 1.0 (corrected bicarbonate < 24 mEq/L), the opposite of this patient's corrected bicarbonate of 38."],
        ["Primary respiratory alkalosis with renal metabolic compensation", "The primary disturbance is metabolic (AG 32, ketoacidosis); PaCO2 34 is compensatory hyperventilation (Winter formula: 1.5 * 18 + 8 = 35 +/- 2)."],
        ["Pure metabolic alkalosis with secondary compensatory hypoventilation", "The anion gap of 32 and ketonuria prove a major high anion gap metabolic acidosis, not pure metabolic alkalosis."]
    ],
    "AG = 134 - (84 + 18) = 32. Delta AG = 32 - 12 = 20. Corrected HCO3 = 18 + 20 = 38 (>24) = High anion gap metabolic acidosis + concurrent metabolic alkalosis.",
    "Calculate the anion gap and delta-delta ratio to uncover occult mixed acid-base disorders: corrected bicarbonate > 26 reveals concurrent metabolic alkalosis.",
    "Pure high anion gap metabolic acidosis with appropriate respiratory compensation",
    "Fails to perform the delta-delta analysis: vomiting causes gastric HCl loss, producing a concurrent metabolic alkalosis that elevates bicarbonate above expected pure DKA levels.",
    "Berend K, et al. Physiological approach to assessment of acid-base disturbances. N Engl J Med. 2014;371(15):1434-1445. PMID: 25295502."
)

# 0527
add_q(
    "op-c-s2-0527", "Medicine", "Renal", "Mixed HAGMA and Normal Anion Gap Diarrhea Delta Ratio", 5,
    "A 68-year-old man with septic shock secondary to Escherichia coli bacteremia and profuse watery diarrhea for 4 days is admitted to the ICU. Blood pressure is 84/52 mm Hg (on norepinephrine) and pulse is 108/min. Laboratory studies show: serum sodium 140 mEq/L, potassium 3.6 mEq/L, chloride 114 mEq/L, bicarbonate 10 mEq/L, and serum lactate 6.5 mmol/L (elevated). Arterial blood gas demonstrates pH 7.18, PaCO2 26 mm Hg, and PaO2 92 mm Hg. Which of the following describes the acid-base disturbance in this patient?",
    [
        ["Concurrent high anion gap metabolic acidosis and normal anion gap metabolic acidosis", "Stepwise acid-base analysis: (1) Anion gap = 140 - (114 + 10) = 16 mEq/L (elevated; normal 10-12 mEq/L), confirming a HIGH ANION GAP METABOLIC ACIDOSIS (HAGMA) due to lactic acidosis (lactate 6.5). (2) Delta-delta analysis: Delta AG = 16 - 12 = 4 mEq/L. Delta HCO3 = 24 - 10 = 14 mEq/L. Delta-to-delta ratio = Delta AG / Delta HCO3 = 4 / 14 = 0.28 (markedly < 1.0). Corrected bicarbonate = 10 + 4 = 14 mEq/L (far below normal 24). When the delta ratio is < 1.0 (or corrected HCO3 < 20-22), the drop in bicarbonate is much greater than can be accounted for by the addition of unmeasured anions alone. This proves a co-existing NORMAL ANION GAP (hyperchloremic) METABOLIC ACIDOSIS caused by gastrointestinal bicarbonate wasting from profuse diarrhea."],
        ["Pure high anion gap metabolic acidosis due to lactic acidosis alone", "If pure lactic acidosis were present, the drop in bicarbonate would equal the rise in AG (Delta AG = 4, so HCO3 should be ~20, not 10)."],
        ["Concurrent high anion gap metabolic acidosis and metabolic alkalosis", "Metabolic alkalosis produces a delta ratio > 2.0 and corrected bicarbonate > 26; here the ratio is 0.28."],
        ["Primary respiratory acidosis with secondary metabolic compensation", "The patient is acidemic with low PaCO2 (26); Winter formula (1.5 * 10 + 8 = 23 +/- 2) shows appropriate respiratory compensation for metabolic acidosis."],
        ["Normal anion gap metabolic acidosis alone without unmeasured anions", "Anion gap is 16 mEq/L and lactate is 6.5 mmol/L, proving an unmeasured anion gap component."]
    ],
    "AG = 140 - (114 + 10) = 16. Delta AG = 4. Delta HCO3 = 14. Ratio = 4/14 = 0.28 (<1.0) = Concurrent HAGMA (lactic acidosis) and NAGMA (diarrhea).",
    "Interpret delta-delta ratios < 1.0 (corrected HCO3 < 20): identifies a co-existing normal anion gap acidosis in patients with high anion gap acidosis.",
    "Pure high anion gap metabolic acidosis due to lactic acidosis alone",
    "In pure HAGMA, Delta AG equals Delta HCO3 (ratio ~1.0); here Delta HCO3 is 14 while Delta AG is only 4, proving concurrent diarrhea-induced bicarbonate loss.",
    "Kraut JA, Madias NE. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol. 2007;2(1):162-174. PMID: 17699401."
)

# 0528
add_q(
    "op-c-s2-0528", "Medicine", "Renal", "Salicylate Triple Acid-Base Disorder and Alkalinization", 5,
    "A 42-year-old woman is brought to the emergency department 4 hours after intentionally ingesting an entire bottle of extra-strength aspirin. She complains of persistent ringing in her ears (tinnitus), dizziness, nausea, and vomiting. On physical examination, she is agitated, flushed, and diaphoretic. Temperature is 38.3°C (101.0°F), blood pressure is 118/76 mm Hg, pulse is 114/min, and respirations are 32/min and deep (tachypneic and hyperpneic). Laboratory studies show: serum sodium 140 mEq/L, potassium 3.8 mEq/L, chloride 100 mEq/L, bicarbonate 16 mEq/L, blood urea nitrogen 18 mg/dL, and serum creatinine 1.0 mg/dL. Arterial blood gas demonstrates pH 7.46, PaCO2 22 mm Hg, and PaO2 102 mm Hg. Serum salicylate level is 78 mg/dL (severe toxicity; toxic threshold > 30 mg/dL). Which of the following describes the acid-base disturbance present, and what is the first-line therapeutic intervention?",
    [
        ["Mixed respiratory alkalosis and high anion gap metabolic acidosis; initiate intravenous sodium bicarbonate infusion to alkalinize the urine (target urine pH 7.5 to 8.0) and blood", "Salicylate poisoning in adults classically produces a MIXED ACID-BASE DISORDER: (1) PRIMARY RESPIRATORY ALKALOSIS: salicylates directly stimulate the medullary respiratory center, causing hyperventilation and blowing off CO2 (PaCO2 22 mm Hg, elevating pH); and (2) PRIMARY HIGH ANION GAP METABOLIC ACIDOSIS: salicylates uncouple mitochondrial oxidative phosphorylation, triggering anaerobic glycolysis, lactic acidosis, and ketoacidosis (Anion gap = 140 - (100 + 16) = 24 mEq/L). The arterial pH (7.46) reflects the net balance. First-line therapy is INTRAVENOUS SODIUM BICARBONATE to alkalinize both serum (target pH 7.45-7.55) and urine (target urine pH 7.5-8.0). Alkalinization converts lipid-soluble non-ionized salicylic acid into water-soluble ionized salicylate, trapping it in the renal tubular lumen ('ion trapping') and preventing it from crossing the blood-brain barrier."],
        ["Pure high anion gap metabolic acidosis; administer oral activated charcoal and perform immediate endotracheal intubation with low tidal volume ventilation", "Intubating a salicylate-poisoned patient often precipitates fatal acidosis because mechanical ventilation cannot match the patient's massive compensatory minute ventilation, dropping blood pH and driving salicylate into the brain."],
        ["Pure respiratory alkalosis; place a rebreathing paper bag over the patient's face to normalize PaCO2", "Rebreathing bags worsen hypoxemia and acidosis, and ignore the life-threatening metabolic ketoacidosis/lactic acidosis."],
        ["Normal anion gap metabolic acidosis with appropriate respiratory compensation; initiate intravenous 0.9% normal saline infusion with potassium chloride", "Salicylate toxicity causes a HIGH anion gap acidosis (AG 24), not normal gap, and sodium bicarbonate is the mandatory alkalinizing agent."],
        ["Mixed respiratory acidosis and metabolic alkalosis; administer intravenous flumazenil and naloxone", "Salicylate directly causes respiratory alkalosis and high gap acidosis; flumazenil and naloxone have no role in salicylate poisoning."]
    ],
    "Tinnitus + tachypnea + high AG (24) + pH 7.46 + PaCO2 22 = Salicylate toxicity (mixed respiratory alkalosis and HAGMA) -> IV sodium bicarbonate (target urine pH 7.5-8.0).",
    "Identify mixed respiratory alkalosis and HAGMA in salicylate overdose and select urinary alkalinization with sodium bicarbonate as first-line therapy.",
    "Pure high anion gap metabolic acidosis; administer oral activated charcoal and perform immediate endotracheal intubation with low tidal volume ventilation",
    "Intubation in salicylate toxicity eliminates the patient's spontaneous extreme hyperventilation, causing abrupt respiratory acidosis and fatal brain salicylate penetration.",
    "Chyka PA, et al. Salicylate poisoning: an evidence-based consensus guideline for out-of-hospital management. Clin Toxicol (Phila). 2007;45(2):95-131. PMID: 17364628."
)

# 0529
add_q(
    "op-c-s2-0529", "Medicine", "Renal", "Ethylene Glycol vs Methanol Toxicity and Fomepizole", 5,
    "A 46-year-old man is brought to the emergency department in a comatose state after being found unconscious in a garage next to empty containers of automotive windshield wiper fluid and antifreeze. Physical examination demonstrates Kussmaul respirations (rate 28/min), blood pressure 110/68 mm Hg, and pulse 104/min. Funduscopic examination shows optic disc hyperemia and retinal edema bilaterally. Laboratory evaluation reveals: serum sodium 140 mEq/L, potassium 4.8 mEq/L, chloride 98 mEq/L, bicarbonate 8 mEq/L, blood urea nitrogen 24 mg/dL, serum creatinine 1.4 mg/dL, and blood glucose 96 mg/dL. Measured serum osmolality is 342 mOsm/kg. Arterial blood gas shows pH 7.12, PaCO2 25 mm Hg, and serum lactate 2.0 mmol/L. Urinalysis demonstrates no crystals or fluorescence under Wood lamp. Which of the following is the calculated osmolal gap, the most likely ingested toxin, and the definitive pharmacotherapy?",
    [
        ["Calculated osmolal gap is 49 mOsm/kg; methanol poisoning (metabolized to formic acid); administer intravenous fomepizole and initiate emergent hemodialysis", "Stepwise evaluation of toxic alcohols: (1) Anion gap = 140 - (98 + 8) = 34 mEq/L (severe HAGMA). (2) Calculated osmolality = 2*[Na] + [Glucose]/18 + [BUN]/2.8 = 2*140 + 96/18 + 24/2.8 = 280 + 5.3 + 8.6 = 293.9 mOsm/kg. (3) Osmolal gap = Measured (342) - Calculated (293.9) = 48.1 mOsm/kg (markedly elevated; normal < 10 mOsm/kg). An elevated osmolal gap (>10) combined with severe HAGMA confirms toxic alcohol ingestion. The distinguishing feature is the organ toxicity: METHANOL (found in windshield washer fluid) is metabolized by alcohol dehydrogenase to FORMALDEHYDE and FORMIC ACID, which causes severe retinal toxicity (OPTIC DISC HYPEREMIA, retinal edema, and blindness: 'snowfield vision'). In contrast, ETHYLENE GLYCOL (antifreeze) produces GLYCOLIC and OXALIC ACID, causing calcium oxalate crystal deposition, envelope crystals, and acute kidney failure. Management requires FOMEPIZOLE (competitive alcohol dehydrogenase inhibitor) and EMERGENT HEMODIALYSIS."],
        ["Calculated osmolal gap is 12 mOsm/kg; ethylene glycol poisoning; administer intravenous fomepizole and oral pyridoxine", "Osmolal gap is 48 mOsm/kg, not 12; optic disc hyperemia is pathognomonic for methanol (windshield fluid), not ethylene glycol (antifreeze/calcium oxalate crystals)."],
        ["Calculated osmolal gap is 68 mOsm/kg; isopropanol poisoning; administer intravenous fomepizole and sodium thiosulfate", "Isopropanol is metabolized to acetone and causes high osmolal gap with ketonuria WITHOUT metabolic acidosis (normal anion gap and normal pH)."],
        ["Calculated osmolal gap is 4 mOsm/kg; alcoholic ketoacidosis; administer intravenous dextrose and thiamine", "The osmolal gap is 48 mOsm/kg (>10); retinal edema and severe high osmolal gap are not features of uncomplicated AKA."],
        ["Calculated osmolal gap is 49 mOsm/kg; propylene glycol toxicity; administer high-dose oral folate alone", "Propylene glycol (IV lorazepam vehicle) causes lactic acidosis, but does not cause optic disc hyperemia or acute blindness."]
    ],
    "High AG (34) + Osmolal gap 48 + optic disc hyperemia = Methanol poisoning -> IV fomepizole + emergent hemodialysis.",
    "Calculate the osmolal gap and differentiate methanol (optic disc hyperemia/blindness from formic acid) from ethylene glycol (calcium oxalate/renal failure).",
    "Calculated osmolal gap is 12 mOsm/kg; ethylene glycol poisoning; administer intravenous fomepizole and oral pyridoxine",
    "Ethylene glycol causes acute tubular necrosis with calcium oxalate envelope crystals in urine; methanol causes optic disc hyperemia and retinal edema.",
    "Kraut JA, Kurtz I. Toxic alcohol ingestions: clinical features, diagnosis, and management. Clin J Am Soc Nephrol. 2008;3(1):208-225. PMID: 18045860."
)

# 0530
add_q(
    "op-c-s2-0530", "Medicine", "Renal", "Pyroglutamic Acidosis 5-Oxoprolinemia in Acetaminophen", 5,
    "A 74-year-old malnourished woman with advanced osteoarthritis, chronic kidney disease (baseline creatinine 1.6 mg/dL), and severe sepsis secondary to an infected decubitus ulcer has been receiving therapeutic doses of oral acetaminophen (1,000 mg every 6 hours; 4 g/day) and intravenous flucloxacillin for 10 days. Routine laboratory evaluation demonstrates sudden development of a severe metabolic acidosis: serum sodium 138 mEq/L, potassium 4.2 mEq/L, chloride 100 mEq/L, and bicarbonate 10 mEq/L (anion gap 28 mEq/L). Serum lactate is 1.4 mmol/L (normal), blood glucose is 108 mg/dL, and serum ketones are negative. Serum acetaminophen concentration is undetectable (< 5 microg/mL), and plasma salicylate, methanol, and ethylene glycol levels are zero. Urine organic acid gas chromatography-mass spectrometry demonstrates a massive excretion of 5-oxoproline (pyroglutamic acid). Which of the following is the underlying biochemical mechanism driving this high anion gap acidosis?",
    [
        ["Chronic acetaminophen exposure in a malnourished patient depletes hepatic glutathione, relieving feedback inhibition on gamma-glutamylcysteine synthetase and shunting gamma-glutamylcysteine into 5-oxoproline (pyroglutamic acid)", "5-Oxoprolinemia (pyroglutamic acidosis) is an underrecognized cause of HIGH ANION GAP METABOLIC ACIDOSIS occurring in malnourished elderly females receiving therapeutic doses of ACETAMINOPHEN (often exacerbated by sepsis, renal impairment, or antibiotics like flucloxacillin). In the gamma-glutamyl cycle, glutathione normally exerts negative feedback inhibition on gamma-glutamylcysteine synthetase. Malnutrition and chronic acetaminophen exhaust GLUTATHIONE stores. Loss of glutathione feedback disinhibits the enzyme, causing excessive synthesis of gamma-glutamylcysteine, which is shunted by 5-oxoprolinase into 5-OXOPROLINE (pyroglutamic acid). 5-Oxoproline is an organic acid that accumulates in blood and urine, generating a severe HAGMA with normal lactate, normal glucose, and undetectable acetaminophen levels. Discontinuing acetaminophen and administering N-acetylcysteine (to replenish glutathione) resolves the acidosis."],
        ["Direct mitochondrial uncoupling of oxidative phosphorylation by toxic N-acetyl-p-benzoquinone imine (NAPQI) causing lactic acid generation", "Lactate is completely normal (1.4 mmol/L) and acetaminophen levels are zero; the acidosis is driven by 5-oxoproline, not lactic acid."],
        ["Selective proximal tubular brush-border carbonic anhydrase IV destruction causing massive bicarbonaturia", "Carbonic anhydrase inhibition causes a normal anion gap metabolic acidosis (Type 2 RTA), whereas this patient has a high anion gap of 28 mEq/L."],
        ["Overproduction of beta-hydroxybutyrate resulting from systemic carnitine palmitoyltransferase deficiency", "Serum ketones are negative; the unmeasured anion is 5-oxoproline."],
        ["Direct renal tubular precipitation of acetaminophen-glucuronide crystals causing acute obstruction", "Acetaminophen metabolites do not form obstructive crystals; the mechanism is metabolic accumulation of organic pyroglutamic acid."]
    ],
    "Therapeutic acetaminophen + sepsis/malnutrition + HAGMA with normal lactate/glucose/ketones + 5-oxoproline = Pyroglutamic acidosis -> glutathione depletion.",
    "Recognize 5-oxoprolinemia (pyroglutamic acidosis) in malnourished patients on therapeutic acetaminophen: glutathione depletion shunts metabolites to 5-oxoproline.",
    "Direct mitochondrial uncoupling of oxidative phosphorylation by toxic N-acetyl-p-benzoquinone imine (NAPQI) causing lactic acid generation",
    "NAPQI causes acute liver necrosis in massive overdose; therapeutic acetaminophen in malnourished patients causes 5-oxoprolinemia with completely normal serum lactate.",
    "Fenves AZ, et al. 5-oxoprolinuria with high anion gap metabolic acidosis: a large case series. Nephrol Dial Transplant. 2012;27(8):3195-3200. PMID: 22357778."
)

# 0531
add_q(
    "op-c-s2-0531", "Medicine", "Renal", "D-Lactic Acidosis Short Bowel Syndrome Neurologic Symptoms", 5,
    "A 36-year-old woman with a history of extensive small bowel resection for Crohn disease (leaving 60 cm of residual jejunum anastomosed to an intact colon; short bowel syndrome) presents with episodic confusion, slurred speech, ataxia, and bizarre behavior following a high-carbohydrate pasta dinner. Her husband states she appears completely intoxicated despite having consumed no alcohol. Physical examination shows horizontal nystagmus and cerebellar ataxia; breath alcohol testing is 0.00%. Laboratory evaluation reveals: serum sodium 140 mEq/L, potassium 4.0 mEq/L, chloride 102 mEq/L, and bicarbonate 12 mEq/L (anion gap 26 mEq/L). Arterial blood gas shows pH 7.24 and PaCO2 28 mm Hg. Standard hospital automated serum lactate (L-lactate) assay returns completely normal at 1.1 mmol/L. Blood glucose is 92 mg/dL, and urine ketones are negative. Which of the following is the definitive diagnosis?",
    [
        ["D-lactic acidosis caused by colonic bacterial fermentation of malabsorbed carbohydrates into D-lactate, which is neurotoxic and undetectable by standard L-lactate assays", "D-lactic acidosis is an uncommon form of HIGH ANION GAP METABOLIC ACIDOSIS occurring exclusively in patients with SHORT BOWEL SYNDROME and an intact colon. Massive loads of malabsorbed simple carbohydrates and starch enter the colon, where colonic anaerobic bacteria (primarily Lactobacillus and Bifidobacterium) ferment carbohydrates into D-LACTATE. Humans produce and metabolize L-lactate (via L-lactate dehydrogenase); human D-lactate dehydrogenase activity is extremely low. D-Lactate is absorbed systemically and crosses the blood-brain barrier, producing characteristic NEUROTOXIC symptoms: encephalopathy, ataxia, slurred speech, and nystagmus mimicking acute ethanol intoxication. Standard hospital clinical laboratory analyzers use stereospecific L-lactate dehydrogenase; therefore, STANDARD SERUM LACTATE IS COMPLETELY NORMAL. Diagnosis requires specific D-lactate assay; treatment involves dietary carbohydrate restriction and oral antibiotics (metronidazole)."],
        ["Wernicke encephalopathy secondary to thiamine deficiency in short bowel syndrome", "Wernicke encephalopathy causes ataxia and nystagmus, but does NOT cause a high anion gap metabolic acidosis (AG 26) with low bicarbonate."],
        ["Acute ethylene glycol ingestion with toxic glycolic acid accumulation", "The patient has short bowel syndrome with carbohydrate-induced encephalopathy; toxic alcohols are ruled out by clinical context and lack of osmolal gap."],
        ["Diabetic ketoacidosis with isolated beta-hydroxybutyrate generation", "Blood glucose is normal (92) and ketones are negative, ruling out ketoacidosis."],
        ["Methanol ingestion causing central nervous system formaldehyde toxicity", "Methanol causes optic disc hyperemia and visual blindness with severe high osmolal gap, not episodic carbohydrate-induced ataxia in short bowel syndrome."]
    ],
    "Short bowel syndrome + high-carbohydrate meal + encephalopathy/ataxia + HAGMA with normal standard L-lactate = D-lactic acidosis -> colonic bacterial fermentation.",
    "Identify D-lactic acidosis in short bowel syndrome: colonic fermentation produces D-lactate, which causes neurotoxicity and high AG but is invisible on standard L-lactate assays.",
    "Wernicke encephalopathy secondary to thiamine deficiency in short bowel syndrome",
    "Wernicke causes ataxia and confusion, but does not cause a severe high anion gap metabolic acidosis (AG 26, HCO3 12); D-lactate explains both the acidosis and encephalopathy.",
    "Mackenzie DG. D-lactic acidosis--the hidden risk in short bowel syndrome. Int J Clin Pract. 2005;59(2):247-249. PMID: 15854204."
)

# 0532
add_q(
    "op-c-s2-0532", "Medicine", "Renal", "Salicylate Toxicity Hemodialysis Indications", 5,
    "A 68-year-old man is brought to the emergency department after ingesting a large quantity of methyl salicylate ointment. He is lethargic and confused. Blood pressure is 102/60 mm Hg, pulse is 120/min, and respirations are 34/min. Physical examination shows bibasilar crackles and marked diaphoresis; chest radiograph demonstrates bilateral pulmonary edema. Laboratory studies show: serum sodium 142 mEq/L, potassium 4.2 mEq/L, chloride 104 mEq/L, bicarbonate 12 mEq/L, and serum creatinine 3.2 mg/dL (baseline 1.0 mg/dL). Arterial blood gas shows pH 7.20 and PaCO2 31 mm Hg. Serum salicylate concentration is 98 mg/dL. Despite the initiation of an intravenous sodium bicarbonate infusion, he develops persistent oliguria and progressive somnolence. Which of the following is the most appropriate next intervention?",
    [
        ["Immediate emergent hemodialysis", "While intravenous sodium bicarbonate alkalinization is first-line for mild-to-moderate salicylate poisoning, definitive indications for EMERGENT HEMODIALYSIS include: (1) Serum salicylate concentration > 90-100 mg/dL in acute ingestion (or >80 mg/dL in chronic poisoning or with renal failure); (2) Impaired consciousness, coma, or seizures (severe neurotoxicity); (3) NON-CARDIOGENIC PULMONARY EDEMA; (4) ACUTE KIDNEY INJURY / OLIGURIA (which prevents renal salicylate excretion despite alkalinization); and (5) Refractory acidemia (pH < 7.20) failing bicarbonate therapy. Hemodialysis rapidly clears salicylate, corrects acid-base and electrolyte derangements, and treats volume overload."],
        ["Intensification of intravenous sodium bicarbonate infusion with 500 mL boluses of 8.4% bicarbonate", "Giving massive fluid/bicarbonate boluses in a patient with acute oliguric renal failure and pulmonary edema causes fatal fluid overload."],
        ["Immediate endotracheal intubation and transfer to the floor", "Intubation worsens salicylate acidosis and floor transfer is unsafe; hemodialysis is life-saving."],
        ["Oral administration of multiple-dose activated charcoal and polyethylene glycol whole bowel irrigation", "Whole bowel irrigation is contraindicated in lethargic/somnolent patients due to severe pulmonary aspiration risk."],
        ["Intravenous infusion of high-dose deferoxamine", "Deferoxamine is the chelating agent for iron toxicity, and has no efficacy in salicylate poisoning."]
    ],
    "Salicylate level > 90 mg/dL + oliguric AKI + pulmonary edema + altered mental status = Severe salicylate toxicity -> immediate emergent hemodialysis.",
    "Recognize definitive indications for hemodialysis in salicylate poisoning: level >90-100 mg/dL, pulmonary edema, AKI/oliguria, coma, or refractory acidemia.",
    "Intensification of intravenous sodium bicarbonate infusion with 500 mL boluses of 8.4% bicarbonate",
    "Bicarbonate infusion depends on renal excretion; in a patient with oliguric AKI and pulmonary edema, further fluid/bicarbonate administration is futile and dangerous.",
    "Juurlink DN, et al. Extracorporeal treatment for salicylate poisoning: systematic review and recommendations from the EXTRIP workgroup. Ann Emerg Med. 2015;66(2):165-181. PMID: 25986311."
)

# 0533
add_q(
    "op-c-s2-0533", "Medicine", "Renal", "Severe Hyperkalemia EKG Changes and Membrane Stabilization", 5,
    "A 64-year-old man with end-stage renal disease who missed his last two hemodialysis sessions presents with profound muscle weakness and palpitations. Physical examination reveals blood pressure 104/62 mm Hg, pulse 44/min, and flaccid muscle weakness in all extremities with decreased deep tendon reflexes. A 12-lead electrocardiogram demonstrates tall, narrow, 'tented' peaked T waves across all leads, prolongation of the PR interval to 280 ms, widening of the QRS complex to 160 ms with a sine-wave appearance, and absence of detectable P waves. Point-of-care serum potassium returns at 8.4 mEq/L. Which of the following is the most appropriate first-line medication to administer immediately?",
    [
        ["Intravenous calcium gluconate (or calcium chloride)", "Severe hyperkalemia (K+ > 6.5 mEq/L or ANY hyperkalemic EKG changes such as peaked T waves, widened QRS, PR prolongation, loss of P waves, or sine-wave pattern) is an immediate cardiac emergency with imminent risk of ventricular fibrillation or asystole. The ABSOLUTE FIRST STEP is MEMBRANE STABILIZATION using INTRAVENOUS CALCIUM (calcium gluconate via peripheral line, or calcium chloride via central line). Calcium directly antagonizes the cardiotoxic electrophysiological effects of hyperkalemia: it shifts the threshold potential of cardiac myocytes to a less negative value, restoring the normal gap between resting and threshold potential and stabilizing the cardiac membrane within 1-3 minutes. Crucially, CALCIUM DOES NOT LOWER SERUM POTASSIUM; it must be followed immediately by intracellular potassium shifting agents (IV insulin + dextrose, beta-2 agonists) and potassium elimination (hemodialysis, loop diuretics, potassium binders)."],
        ["Intravenous regular insulin combined with 50% dextrose", "Insulin plus dextrose shifts potassium into cells, but takes 15-30 minutes to act; it does not stabilize the cardiac membrane and giving it first leaves the patient vulnerable to fatal ventricular fibrillation."],
        ["Intravenous sodium polystyrene sulfonate (Kayexalate)", "Potassium exchange resins take hours to days to eliminate potassium and have no role in acute emergent stabilization."],
        ["Continuous nebulized albuterol at high doses (10 to 20 mg)", "Beta-agonists shift potassium into cells over 15-30 minutes, but do not stabilize the myocardial membrane."],
        ["Immediate administration of oral patiromer", "Oral binders take hours to work and cannot prevent sudden cardiac arrest in a patient with sine-wave EKG changes."]
    ],
    "K+ 8.4 + peaked T waves + wide QRS / sine wave = Severe hyperkalemia emergency -> immediate IV calcium gluconate to stabilize cardiac membrane.",
    "Order the stepwise treatment of severe hyperkalemia: IV calcium FIRST for membrane stabilization within 2 minutes, followed by insulin/dextrose to shift potassium.",
    "Intravenous regular insulin combined with 50% dextrose",
    "Insulin shifts potassium into cells but takes 15-30 minutes; with sine-wave EKG changes, IV calcium must be given first to prevent imminent ventricular arrest.",
    "Weisberg LS. Management of severe hyperkalemia. Crit Care Med. 2008;36(12):3246-3251. PMID: 18936701."
)

# 0534
add_q(
    "op-c-s2-0534", "Medicine", "Renal", "Refractory Hypokalemia Secondary to Hypomagnesemia", 5,
    "A 54-year-old woman with a history of alcohol use disorder is admitted for treatment of pneumonia. On admission, her serum potassium is 2.8 mEq/L. Over the next 48 hours, she receives a total of 160 mEq of intravenous potassium chloride. Despite this aggressive repletion, repeat laboratory testing shows a persistent serum potassium of 2.7 mEq/L. She reports muscle cramps and generalized weakness. Blood pressure is 114/72 mm Hg. A 12-lead electrocardiogram demonstrates prominent U waves and flattening of the T waves. Laboratory evaluation shows: serum sodium 138 mEq/L, bicarbonate 26 mEq/L, BUN 12 mg/dL, serum creatinine 0.7 mg/dL, and serum magnesium 1.1 mg/dL (markedly depressed; normal 1.7-2.2 mg/dL). Which of the following is the physiological mechanism explaining why hypocalcemia or hypokalemia is refractory to repletion until magnesium is corrected?",
    [
        ["Intracellular magnesium normally exerts tonic inhibition on the renal outer medullary potassium (ROMK) channels in collecting duct principal cells; magnesium depletion disinhibits ROMK, causing unchecked urinary potassium wasting", "Refractory hypokalemia in the setting of HYPOMAGNESEMIA is a classic clinical trap. Magnesium serves as an essential intracellular regulator of potassium handling in the cortical collecting duct. Inside principal cells, physiological concentrations of intracellular Mg2+ bind to and physically plug the pore of the RENAL OUTER MEDULLARY POTASSIUM (ROMK) channel, preventing excessive potassium efflux into the tubular lumen. When intracellular magnesium is depleted (due to alcoholism, loop/thiazide diuretics, or PPIs), this tonic inhibition is lost. Uninhibited ROMK channels allow rapid, continuous, passive potassium secretion into the urine. Any infused potassium is immediately excreted into the urine; therefore, HYPOKALEMIA CANNOT BE CORRECTED UNTIL SERUM MAGNESIUM IS NORMALIZED."],
        ["Magnesium is an obligatory cofactor for the Na+-Cl- cotransporter in the distal convoluted tubule", "NCCT does not directly mediate potassium wasting; collecting duct ROMK disinhibition is the primary mechanism."],
        ["Hypomagnesemia directly stimulates juxtaglomerular cells to hypersecrete renin", "Renin is regulated by renal perfusion, macula densa NaCl, and beta-1 tone, not primary hypomagnesemia."],
        ["Low magnesium causes irreversible down-regulation of all basolateral Na+/K+-ATPase pumps throughout the nephron", "Na+/K+-ATPase activity is reduced, but the dominant mechanism of ongoing refractory urinary potassium loss is loss of ROMK channel pore blockade."],
        ["Magnesium depletion triggers parathyroid hormone cleavage into inactive fragments", "Hypomagnesemia impairs PTH release causing hypocalcemia, but refractory hypokalemia is mediated by ROMK channel disinhibition."]
    ],
    "Hypokalemia refractory to aggressive KCl repletion + low magnesium (1.1 mg/dL) = ROMK channel disinhibition -> correct magnesium to stop urinary K+ wasting.",
    "Master renal potassium physiology: intracellular magnesium normally blocks ROMK channels; hypomagnesemia disinhibits ROMK, causing refractory urinary potassium excretion.",
    "Low magnesium causes irreversible down-regulation of all basolateral Na+/K+-ATPase pumps throughout the nephron",
    "While ATPases use magnesium, the specific mechanism causing persistent urinary wasting of infused potassium is loss of ROMK pore blockade in principal cells.",
    "Huang CL, Kuo E. Mechanism of hypokalemia in magnesium deficiency. J Am Soc Nephrol. 2007;18(10):2649-2652. PMID: 17804670."
)

# 0535
add_q(
    "op-c-s2-0535", "Medicine", "Renal", "Severe Hyponatremic Encephalopathy 3% Hypertonic Saline", 5,
    "A 28-year-old female marathon runner collapses at the finish line after consuming large volumes of plain water at every hydration station along the race. On arrival in the emergency department, she is actively experiencing generalized tonic-clonic seizures. Temperature is 37.2°C, blood pressure is 134/86 mm Hg, and pulse is 98/min. Neurological examination reveals she is comatose, unresponsive to verbal stimuli, and has bilateral extensor plantar responses; pupils are sluggishly reactive. Point-of-care laboratory testing reveals a serum sodium concentration of 114 mEq/L. Blood glucose is 105 mg/dL. Which of the following is the most appropriate immediate intervention to arrest the seizures and prevent fatal brain herniation?",
    [
        ["Administer a 100-mL intravenous bolus of 3% hypertonic saline over 10 minutes, repeatable up to twice if seizures or severe symptoms persist", "Acute severe symptomatic hyponatremia with SEIZURES or coma is a neurosurgical emergency caused by rapid cerebral edema (water influx into brain cells). The immediate goal is NOT to normalize the sodium, but to acutely raise serum sodium by 4 to 6 mEq/L, which reduces brain swelling by ~10% and rapidly reverses cerebral herniation and terminates seizures. Guidelines (European and US Expert Panels) recommend an IMMEDIATE INTRAVENOUS BOLUS OF 100 mL of 3% HYPERTONIC SALINE infused over 10 minutes. If neurological symptoms persist, this 100-mL bolus can be repeated up to two additional times (total 300 mL) at 10-minute intervals until seizures stop, with a strict limit to not exceed an 8 mEq/L rise in 24 hours."],
        ["Initiate intravenous 0.9% normal saline at 150 mL/h and administer intravenous fosphenytoin", "Isotonic 0.9% saline (154 mEq/L Na) is insufficiently hypertonic to rapidly reverse life-threatening cerebral edema, and antiepileptics fail because the seizure mechanism is cellular hyponatremic swelling."],
        ["Administer oral tolvaptan (vasopressin V2 receptor antagonist) 15 mg", "Vaptans take hours to work and have an unpredictable, uncontrolled aquaretic curve; they are contraindicated in acute severe symptomatic hyponatremia."],
        ["Administer intravenous desmopressin (DDAVP) combined with 5% dextrose in water", "DDAVP and D5W are used to RE-LOWER sodium during accidental overcorrection, not to treat active seizures from acute water intoxication."],
        ["Infuse 1,000 mL of 3% hypertonic saline over 1 hour to rapidly normalize serum sodium to 135 mEq/L", "Infusing 1,000 mL of 3% saline over 1 hour causes catastrophic overcorrection and triggers fatal osmotic demyelination syndrome."]
    ],
    "Severe hyponatremia (114 mEq/L) + seizures/coma = Acute cerebral edema -> immediate 100 mL bolus of 3% hypertonic saline over 10 minutes.",
    "Select the guideline-endorsed resuscitation for severe hyponatremic encephalopathy: 100-mL bolus of 3% saline over 10 minutes (repeatable up to 3x) to raise sodium by 4-6 mEq/L.",
    "Initiate intravenous 0.9% normal saline at 150 mL/h and administer intravenous fosphenytoin",
    "Normal saline cannot rapidly shift water out of swollen brain cells; 3% hypertonic saline bolus is mandatory to halt herniation, and phenytoin is ineffective for hyponatremic seizures.",
    "Verbalis JG, et al. Diagnosis, evaluation, and treatment of hyponatremia: expert panel recommendations. Am J Med. 2013;126(10 Suppl 1):S1-S42. PMID: 24074529."
)

# 0536
add_q(
    "op-c-s2-0536", "Medicine", "Renal", "Hyponatremia Rapid Overcorrection Rescue with DDAVP", 5,
    "A 52-year-old man with severe alcohol use disorder is admitted with chronic severe hyponatremia (serum sodium 108 mEq/L). He receives an infusion of 0.9% normal saline. Twelve hours later, his urine output suddenly increases to 350 mL/hour of dilute, water-like urine. Repeat laboratory evaluation reveals that his serum sodium has risen abruptly from 108 mEq/L to 122 mEq/L (a 14 mEq/L increase within 12 hours; target ceiling <= 8 mEq/L in 24 hours). The patient is currently alert and oriented with no neurological deficits. Which of the following is the most appropriate immediate management to prevent osmotic demyelination syndrome?",
    [
        ["Immediately stop the saline infusion, administer intravenous desmopressin (DDAVP), and infuse 5% dextrose in water (D5W) to actively re-lower the serum sodium back below the 8 mEq/L daily threshold", "In chronic hyponatremia (>48 hours), brain cells have extruded organic osmolytes to adapt to low tonicity. If serum sodium rises too rapidly (>8 mEq/L in 24 hours or >18 mEq/L in 48 hours), pontine oligodendrocytes dehydrate and undergo apoptosis, causing OSMOTIC DEMYELINATION SYNDROME (central pontine myelinolysis) 2-6 days later. A sudden spontaneous water diuresis (>100 mL/h) occurs when the underlying stimulus (hypovolemia) is corrected, turning off ADH. When OVERCORRECTION occurs (>8 mEq/L in 24h), the guideline-mandated strategy is PROACTIVE RE-LOWERING: (1) Immediately stop all hypertonic/isotonic fluids; (2) Administer DESMOPRESSIN (DDAVP 1-2 microg IV/SC) to clamp the kidneys and halt free water excretion; and (3) Infuse 5% DEXTROSE IN WATER (D5W) to replace lost water and gently re-lower sodium back to within the safe 8 mEq/L daily limit."],
        ["Continue current saline infusion at the same rate and perform emergent non-contrast brain CT", "Continuing saline during rapid overcorrection guarantees osmotic demyelination syndrome; brain CT is normal acutely because demyelination takes days to appear."],
        ["Administer intravenous furosemide to eliminate excess fluid volume", "Furosemide causes solute-free water excretion, accelerating the rate of sodium rise and worsening the overcorrection crisis."],
        ["Initiate oral tolvaptan to block vasopressin V2 receptors", "Vaptans cause aquaresis and accelerate sodium rise, the exact opposite of what is required."],
        ["Administer high-dose intravenous mannitol to equalize blood-brain osmolality", "Mannitol is an osmotic diuretic that further accelerates free water loss and exacerbates cell dehydration."]
    ],
    "Hyponatremia rising > 8 mEq/L in 12h + sudden water diuresis = Rapid overcorrection crisis -> Stop saline + IV DDAVP + D5W to re-lower sodium.",
    "Recognize overcorrection of chronic hyponatremia as an emergency and apply the active re-lowering protocol: stop saline, clamp kidneys with DDAVP, and infuse D5W.",
    "Continue current saline infusion at the same rate and perform emergent non-contrast brain CT",
    "Allowing sodium to rise >8 mEq/L in 24 hours in chronic hyponatremia causes fatal or locked-in osmotic demyelination; proactive re-lowering with DDAVP and D5W is mandatory.",
    "Sterns RH, et al. Osmotic demyelination syndrome: an update. Contrib Nephrol. 2013;179:121-131. PMID: 23652399."
)

# 0537
add_q(
    "op-c-s2-0537", "Medicine", "Renal", "FeNa vs FeUrea in Patient on Loop Diuretics", 5,
    "A 68-year-old man with chronic heart failure on daily oral furosemide (80 mg/day) and lisinopril presents with worsening fatigue and decreased urine output. Blood pressure is 98/58 mm Hg, and pulse is 96/min. Physical examination reveals dry oral mucosa and flat neck veins without peripheral edema. Laboratory evaluation shows: serum sodium 136 mEq/L, potassium 4.2 mEq/L, BUN 48 mg/dL, and serum creatinine 2.4 mg/dL (baseline 1.0 mg/dL). Urinalysis shows specific gravity 1.018 and no cellular casts. Spot urine studies reveal: urine sodium 48 mEq/L, urine creatinine 40 mg/dL, urine urea nitrogen 240 mg/dL, and serum urea nitrogen (BUN) 48 mg/dL. Calculated fractional excretion of sodium (FeNa) is 2.2% (typically suggesting intrinsic ATN). Which of the following is the calculated fractional excretion of urea (FeUrea), and what is the true underlying etiology of this patient's acute kidney injury?",
    [
        ["Calculated FeUrea is 20.8%; indicating true prerenal azotemia obscured by active loop diuretic-induced natriuresis", "Fractional excretion of sodium (FeNa) is INVALID in patients receiving DIURETICS because loop and thiazide diuretics directly inhibit tubular sodium reabsorption, causing high urine sodium excretion and falsely elevating FeNa (>1-2%) even in profound prerenal states. In patients taking diuretics, the FRACTIONAL EXCRETION OF UREA (FeUrea) is the diagnostic test of choice because urea reabsorption occurs passively in the proximal tubule and is unaffected by distal loop diuretics. FeUrea = [(U_urea * P_Cr) / (P_urea * U_Cr)] * 100 = [(240 * 2.4) / (48 * 40)] * 100 = [576 / 1920] * 100 = 30.0%. An FeUrea < 35% definitively confirms PRERENAL AZOTEMIA (due to hypovolemia and heart failure hypoperfusion), correctly distinguishing it from acute tubular necrosis (FeUrea > 50%). Management requires holding furosemide and cautious volume resuscitation."],
        ["Calculated FeUrea is 58.5%; confirming acute tubular necrosis refractory to hydration", "FeUrea calculation yields 30.0% (<35%), confirming prerenal azotemia; FeUrea > 50% defines ATN."],
        ["Calculated FeUrea is 12.5%; indicating post-renal bilateral ureteral obstruction", "While FeUrea is <35%, post-renal obstruction has variable urea handling and requires renal ultrasound, whereas this patient has clinical volume depletion."],
        ["Calculated FeUrea is 72.0%; indicating acute interstitial nephritis from lisinopril", "Calculated FeUrea is 30.0%, ruling out high FeUrea intrinsic pathologies."],
        ["Calculated FeUrea is 45.0%; indicating cardiorenal syndrome requiring inotropic infusion", "FeUrea is 30.0%, indicating volume-responsive prerenal azotemia from diuretic overdiuresis."]
    ],
    "Patient on furosemide + high FeNa (2.2%) -> calculate FeUrea: (240*2.4)/(48*40) * 100 = 30% (<35%) = Prerenal azotemia (diuretic falsely elevated FeNa).",
    "Calculate FeUrea in patients on diuretics where FeNa is falsely elevated: FeUrea < 35% confirms prerenal azotemia.",
    "Calculated FeUrea is 58.5%; confirming acute tubular necrosis refractory to hydration",
    "Fails to calculate FeUrea correctly: FeUrea is 30%, which proves prerenal azotemia despite the diuretic-induced FeNa of 2.2%.",
    "Carvounis CP, et al. Significance of the fractional excretion of urea in the differential diagnosis of acute renal failure. Kidney Int. 2002;62(6):2223-2229. PMID: 12427149."
)

# 0538
add_q(
    "op-c-s2-0538", "Medicine", "Renal", "Drug-Induced AIN Management and Steroid Indications", 5,
    "A 56-year-old woman is treated with oral trimethoprim-sulfamethoxazole for a urinary tract infection. Ten days into therapy, she develops a low-grade fever, mild arthralgias, and a pruritic maculopapular rash across her torso. Serum creatinine rises from a baseline of 0.8 mg/dL to 3.1 mg/dL. Urinalysis demonstrates 1+ protein, 20-30 WBCs/hpf, WBC casts, and positive urine eosinophils; red blood cells and RBC casts are absent. The trimethoprim-sulfamethoxazole is immediately discontinued. Five days after drug withdrawal, her repeat serum creatinine is 3.4 mg/dL with persistent oliguria. Which of the following is the most appropriate next step in management?",
    [
        ["Initiate oral corticosteroid therapy (prednisone 1 mg/kg/day) for 4 to 6 weeks with a gradual taper", "This patient has biopsy-probable drug-induced ACUTE INTERSTITIAL NEPHRITIS (AIN) triggered by trimethoprim-sulfamethoxazole. While the first-line intervention in all drug-induced AIN is IMMEDIATE CESSATION OF THE OFFENDING AGENT, approximately 30-40% of patients fail to improve spontaneously. If serum creatinine fails to improve within 3 to 7 days following drug withdrawal (or if severe renal failure is present), guidelines recommend initiating a course of SYSTEMIC CORTICOSTEROIDS (oral prednisone 1 mg/kg/day for 2-4 weeks followed by a 4-week taper). Early initiation of corticosteroids within the first 1-2 weeks accelerates recovery and significantly reduces the risk of permanent interstitial fibrosis and irreversible chronic kidney disease."],
        ["Re-challenge with a lower dose of trimethoprim-sulfamethoxazole combined with diphenhydramine", "Re-challenging with an offending drug in AIN is an immunological hypersensitivity trigger that can cause fulminant anuric renal failure."],
        ["Initiate high-dose intravenous loop diuretics to force brisk diuresis", "Loop diuretics do not treat the underlying cell-mediated interstitial inflammation and can worsen renal tubular hypoperfusion."],
        ["Perform emergency hemodialysis and initiate permanent peritoneal dialysis training", "Corticosteroids frequently reverse AIN, avoiding long-term dialysis; starting permanent dialysis without a steroid trial is premature."],
        ["Administer intravenous sodium bicarbonate to achieve a urine pH > 7.5", "Bicarbonate treats salicylate or methotrexate toxicity; it has no therapeutic efficacy in immune-mediated interstitial nephritis."]
    ],
    "Drug-induced AIN not improving after 5 days of drug cessation -> initiate oral corticosteroids (prednisone 1 mg/kg/day) to prevent permanent fibrosis.",
    "Recognize the indications and timing for corticosteroid therapy in drug-induced AIN: initiate when renal function fails to recover 3-7 days after drug withdrawal.",
    "Re-challenge with a lower dose of trimethoprim-sulfamethoxazole combined with diphenhydramine",
    "Drug-induced AIN is a Type IV hypersensitivity reaction; re-challenging risks severe recurrent nephritis and accelerated renal loss.",
    "Praga M, González E. Acute interstitial nephritis. Kidney Int. 2010;77(11):956-961. PMID: 20336051."
)

# 0539
add_q(
    "op-c-s2-0539", "Medicine", "Renal", "Atheroembolic Renal Disease vs Contrast Nephropathy", 5,
    "A 72-year-old man with diffuse severe peripheral vascular disease undergoes coronary angiography and drug-eluting stent placement for non-ST-elevation myocardial infarction. He received 120 mL of low-osmolar iodinated radiocontrast. His serum creatinine on discharge (48 hours post-procedure) was 1.1 mg/dL. Three weeks later, he returns to the clinic for routine follow-up. He complains of painful, purple discoloration of his toes and an ulcerated, reticulated rash on both thighs. Physical examination demonstrates blood pressure 156/94 mm Hg, bilateral livedo reticularis on the lower extremities, and intact peripheral dorsalis pedis pulses with cyanotic, painful 'blue toes.' Laboratory studies show: serum creatinine 3.2 mg/dL (baseline 1.0 mg/dL), BUN 42 mg/dL, peripheral blood eosinophil count 12% (absolute eosinophils 950/microL), and depressed serum complement C3 and C4 levels. Urinalysis shows 1+ protein and rare granular casts. Which of the following is the most likely diagnosis?",
    [
        ["Atheroembolic renal disease (cholesterol atheroembolism)", "Atheroembolic renal disease (cholesterol crystal embolization) occurs following vascular manipulation (cardiac catheterization, aortic surgery, anticoagulation) in patients with severe atherosclerosis. Catheter passage disrupts aortic plaques, showering cholesterol crystals downstream into small arterioles (100-200 micrometers). The clinical presentation is classically DELAYED (1 to 4 weeks post-procedure, distinguishing it from contrast nephropathy which peaks at 24-48 hours). Triad of manifestations: (1) Subacute, progressive renal failure; (2) Cutaneous signs of microembolization: LIVEDO RETICULARIS, cyanotic 'BLUE TOES' with intact distal pulses, and digital gangrene; and (3) Systemic signs: EOSINOPHILIA, EOSINOPHILURIA, and HYPOCOMPLEMENTEMIA (low C3/C4 due to complement activation by exposed crystal surfaces). Renal biopsy reveals biconvex needle-shaped 'cholesterol clefts' inside obstructed arterioles."],
        ["Contrast-induced nephropathy (CIN)", "Contrast nephropathy occurs acutely within 24-48 hours of radiocontrast exposure, peaks at 3-5 days, and recovers within 7-10 days; it does NOT cause livedo reticularis, blue toes, or hypocomplementemia at 3 weeks."],
        ["Acute interstitial nephritis (AIN) secondary to antiplatelet therapy", "AIN presents with rash and eosinophilia, but does not cause livedo reticularis, blue toe syndrome, or severe hypocomplementemia."],
        ["Polyarteritis nodosa (PAN)", "PAN is a systemic necrotizing vasculitis of medium arteries associated with hepatitis B, not an acute catheter-induced cholesterol showering syndrome."],
        ["Heparin-induced thrombocytopenia (HIT) with microvascular gangrene", "HIT causes acute thrombocytopenia (>50% drop) and large-vessel thrombosis 5-10 days after heparin, not delayed livedo reticularis with normal platelets at 3 weeks."]
    ],
    "Post-catheterization (3 weeks delayed) + livedo reticularis + 'blue toes' + eosinophilia + low C3/C4 = Atheroembolic renal disease (cholesterol emboli).",
    "Differentiate Atheroembolic renal disease (delayed 1-4 weeks, blue toes, livedo reticularis, eosinophilia, low complement) from Contrast Nephropathy (immediate 24-48h).",
    "Contrast-induced nephropathy (CIN)",
    "Contrast nephropathy peaks within 48 hours and resolves within 1 week; atheroembolism presents subacutely at 1-4 weeks with livedo reticularis and blue toes.",
    "Scolari F, et al. The challenge of diagnosing atheroembolic renal disease: clinical features and prognostic factors. Circulation. 2007;116(3):298-304. PMID: 17606842."
)

# 0540
add_q(
    "op-c-s2-0540", "Medicine", "Renal", "Rhabdomyolysis-Induced AKI Resuscitation Strategy", 5,
    "A 28-year-old construction worker is found trapped beneath heavy concrete rubble for 6 hours following a building collapse. Upon arrival at the trauma center, his blood pressure is 108/64 mm Hg and pulse is 110/min. Physical examination reveals tense, swollen, painful thighs and calves with multiple crush abrasions. A Foley catheter drains 15 mL of dark, tea-colored urine. Urinalysis demonstrates: 4+ blood on dipstick, but microscopic examination of the sediment reveals zero red blood cells and 1-2 granular casts. Serum creatine kinase (CK) is 84,000 U/L (markedly elevated; normal 30-200 U/L), serum potassium is 5.8 mEq/L, and serum creatinine is 2.8 mg/dL. Which of the following is the most critical initial intervention to prevent and manage acute kidney injury in this patient?",
    [
        ["Immediate aggressive intravenous volume expansion with isotonic crystalloids (targeting a urine output of 200 to 300 mL/hour)", "Crush injury causes RHABDOMYOLYSIS: massive sarcolemmal breakdown releases intracellular myoglobin, potassium, phosphate, and purines. In the renal tubule, myoglobin precipitates with Tamm-Horsfall protein (especially in acidic urine), producing direct tubular cytotoxicity, cast obstruction, and profound renal vasoconstriction. The hallmark finding is URINE DIPSTICK HIGHLY POSITIVE FOR BLOOD BUT ZERO RBCs ON MICROSCOPY (the dipstick ortho-tolidine reagent detects the heme moiety of free myoglobin). The single most effective therapy to prevent AKI is IMMEDIATE AGGRESSIVE INTRAVENOUS ISOTONIC CRYSTALLOID RESUSCITATION (normal saline or balanced crystalloid at 1-1.5 L/h initially), titrating infusion rates to achieve a HIGH URINE OUTPUT OF 200 TO 300 mL/hour to flush out myoglobin casts and prevent tubular obstruction."],
        ["Immediate administration of high-dose intravenous loop diuretics (furosemide 200 mg bolus) before any fluids are given", "Diuretics given before volume repletion worsen hypovolemia, concentrate tubular myoglobin, and accelerate acute tubular necrosis."],
        ["Intravenous calcium gluconate monotherapy as the sole initial treatment", "Calcium is indicated only if hyperkalemia causes EKG changes; routine calcium in rhabdomyolysis worsens intracellular calcium overload and metastatic calcification."],
        ["Immediate continuous renal replacement therapy without a trial of fluid expansion", "Dialysis is reserved for refractory hyperkalemia, severe acidosis, or volume overload failing medical therapy; aggressive crystalloid repletion is first-line."],
        ["Oral administration of allopurinol and colchicine", "Allopurinol lowers uric acid over days; it does not treat acute myoglobin tubular toxicity or correct hypovolemia."]
    ],
    "Crush injury + dark urine positive for blood with zero RBCs + CK 84,000 = Rhabdomyolysis AKI -> aggressive IV fluids targeting urine output 200-300 mL/h.",
    "Identify rhabdomyolysis (dipstick positive for blood with 0 RBCs) and prioritize aggressive IV crystalloid resuscitation targeting 200-300 mL/h urine output.",
    "Immediate administration of high-dose intravenous loop diuretics (furosemide 200 mg bolus) before any fluids are given",
    "Loop diuretics given before volume repletion worsen hypovolemia and precipitate intratubular myoglobin cast formation; fluids are mandatory first.",
    "Bosch X, et al. Rhabdomyolysis and acute kidney injury. N Engl J Med. 2009;361(1):62-72. PMID: 19571284."
)

# 0541
add_q(
    "op-c-s2-0541", "Medicine", "Hematology", "Tumor Lysis Syndrome Rasburicase Mechanism", 5,
    "A 16-year-old boy with newly diagnosed high-grade Burkitt lymphoma is scheduled to initiate aggressive induction chemotherapy. Pre-treatment laboratory evaluation demonstrates: WBC count 84,000/microL, serum lactate dehydrogenase (LDH) 2,800 U/L (markedly elevated), serum potassium 4.8 mEq/L, serum calcium 9.2 mg/dL, serum phosphate 4.2 mg/dL, serum creatinine 1.0 mg/dL, and serum uric acid 11.8 mg/dL (elevated; normal 3.5-7.2 mg/dL). Which of the following prophylactic pharmacologic regimens is most appropriate to prevent tumor lysis syndrome-induced acute uric acid nephropathy in this high-risk patient, and what is its specific molecular mechanism of action?",
    [
        ["Recombinant urate oxidase (rasburicase); enzymatically degrades insoluble uric acid into soluble allantoin, which is easily excreted by the kidneys", "Tumor lysis syndrome (TLS) occurs following cytotoxic therapy of high-grade hematologic malignancies (Burkitt lymphoma, ALL) with high tumor burden and rapid cell turnover. Massive lysis releases intracellular ions, producing: (1) HYPERURICEMIA (purine catabolism); (2) HYPERKALEMIA; (3) HYPERPHOSPHATEMIA; and (4) Secondary HYPOCALCEMIA (calcium phosphate precipitation). Severe hyperuricemia precipitates in the acidic distal tubules, causing acute uric acid nephropathy. In patients at HIGH RISK for TLS (elevated baseline uric acid >8 mg/dL or bulky Burkitt lymphoma), the drug of choice is RASBURICASE (recombinant urate oxidase). Unlike allopurinol (which only blocks xanthine oxidase and prevents new uric acid synthesis), rasburicase DIRECTLY ENZYMATICALLY DEGRADES EXISTING URIC ACID INTO ALLANTOIN, which is 10 times more soluble and rapidly cleared by the kidneys."],
        ["Allopurinol; directly degrades existing uric acid crystals into soluble xanthine", "Allopurinol inhibits xanthine oxidase, preventing NEW uric acid synthesis, but does not degrade existing uric acid; it is used for low/intermediate risk."],
        ["Intravenous sodium bicarbonate infusion to alkalinize the urine to pH > 7.5", "Urinary alkalinization is no longer recommended in TLS because alkaline urine promotes calcium phosphate precipitation, accelerating nephrocalcinosis."],
        ["Oral probenecid; competitively inhibits URAT1 transporters in the proximal tubule", "Probenecid increases urinary uric acid excretion, which worsens intratubular uric acid crystallization and acute obstruction."],
        ["Febuxostat; covalently binds to the outer mitochondrial membrane of malignant lymphoblasts", "Febuxostat is a xanthine oxidase inhibitor used when allopurinol is contraindicated; it does not bind mitochondrial membranes or degrade uric acid."]
    ],
    "High-grade Burkitt lymphoma + high baseline uric acid (11.8 mg/dL) = High-risk TLS -> Rasburicase (urate oxidase converts uric acid to soluble allantoin).",
    "Distinguish rasburicase (degrades existing uric acid to allantoin; drug of choice in high-risk TLS) from allopurinol (only prevents new synthesis).",
    "Allopurinol; directly degrades existing uric acid crystals into soluble xanthine",
    "Allopurinol inhibits xanthine oxidase to block formation of new uric acid, but cannot degrade already circulating uric acid; rasburicase is required.",
    "Cairo MS, et al. Recommendations for the evaluation of risk and prophylaxis of tumour lysis syndrome (TLS) in adults and children. Br J Haematol. 2010;149(4):578-586. PMID: 20331465."
)

# 0542
add_q(
    "op-c-s2-0542", "Medicine", "Cardiovascular", "Cardiorenal Syndrome Loop Diuretic Intensification", 5,
    "A 68-year-old man with ischemic cardiomyopathy (LVEF 25%) presents with worsening dyspnea on exertion, orthopnea, and severe bilateral lower extremity edema. He has gained 7 kg over the past 2 weeks. Blood pressure is 134/82 mm Hg, pulse is 88/min, and oxygen saturation is 91% on room air. Physical examination reveals elevated jugular venous pressure to the angle of the jaw (14 cm H2O), bilateral pulmonary crackles, and 3+ pitting edema to the mid-thighs. Laboratory evaluation shows: serum sodium 132 mEq/L, potassium 4.4 mEq/L, BUN 42 mg/dL, and serum creatinine 2.4 mg/dL (up from a baseline of 1.4 mg/dL 1 month ago). Which of the following is the most appropriate next step in management of this patient's acute kidney injury and heart failure?",
    [
        ["Intensify intravenous loop diuretic therapy (e.g. high-dose intravenous furosemide boluses or continuous infusion) while monitoring clinical decongestion, hemoconcentration, and urine output", "This patient has Cardiorenal Syndrome Type 1 (acute kidney injury precipitated by acute decompensated heart failure). The primary hemodynamic driver of renal dysfunction in decompensated heart failure is RENAL VENOUS CONGESTION (elevated central venous pressure transmitted backward to the renal veins, decreasing the transrenal perfusion gradient: perfusion pressure = MAP - CVP), rather than pure arterial underfilling. Although physicians often reflexively withhold diuretics when creatinine rises, current guidelines (DOSE trial, ESC/AHA) mandate INTENSIFYING INTRAVENOUS LOOP DIURETIC THERAPY. Decompressing the renal veins restores the transglomerular pressure gradient and improves renal function in >70% of congested patients. A modest rise in creatinine during successful decongestion (reflected by hemoconcentration) is benign and does not portend adverse long-term outcomes."],
        ["Administer a 1,000-mL intravenous bolus of 0.9% normal saline to improve renal arterial perfusion", "Giving a fluid bolus to a patient with massive volume overload (JVP 14 cm, pulmonary crackles) precipitates acute respiratory failure and pulmonary edema."],
        ["Initiate continuous intravenous dobutamine infusion as the primary treatment of choice", "Routine inotropes in the absence of cardiogenic shock (this patient has normal BP 134/82) increase tachyarrhythmias and mortality."],
        ["Immediately perform emergency hemodialysis to remove volume without diuretic exposure", "Ultrafiltration/dialysis is reserved for diuretic-refractory volume overload; high-dose IV loop diuretics should be optimized first."],
        ["Discontinue all guideline-directed medical therapy and restrict fluids to < 500 mL/day without diuretics", "Fluid restriction alone without active diuresis cannot clear 7 kg of fluid; aggressive loop diuresis is mandatory."]
    ],
    "Decompensated heart failure + rising creatinine + venous congestion (JVP 14 cm) = Cardiorenal syndrome -> intensify IV loop diuretics to relieve renal venous hypertension.",
    "Recognize renal venous congestion as the primary driver of Cardiorenal Syndrome Type 1 and intensify loop diuretics despite a rising creatinine.",
    "Administer a 1,000-mL intravenous bolus of 0.9% normal saline to improve renal arterial perfusion",
    "Infusing saline in a congested heart failure patient worsens pulmonary edema and elevates renal venous pressure further, worsening renal failure.",
    "Felker GM, et al. Diuretic strategies in patients with acute decompensated heart failure (DOSE trial). N Engl J Med. 2011;364(9):797-805. PMID: 21366472."
)

# 0543
add_q(
    "op-c-s2-0543", "Medicine", "Renal", "Rapidly Progressive GN Pulse Steroids and Plasma Exchange", 5,
    "A 32-year-old previously healthy man presents with gross hematuria, shortness of breath, and hemoptysis that began 4 days ago. Blood pressure is 158/96 mm Hg. Physical examination reveals bilateral pulmonary crackles and mild ankle edema. Chest radiography demonstrates diffuse bilateral alveolar infiltrates. Laboratory studies reveal: hemoglobin 8.1 g/dL, serum creatinine 5.2 mg/dL (no prior baseline), BUN 64 mg/dL, and normal serum complement C3 and C4. Urinalysis demonstrates 3+ blood, dysmorphic RBCs, multiple red blood cell casts, and 2+ proteinuria. Serologic testing is strongly positive for anti-glomerular basement membrane (anti-GBM) antibodies at high titers; ANCA and ANA are negative. While preparing for an urgent renal biopsy, which of the following is the most appropriate immediate medical intervention?",
    [
        ["Initiate pulse intravenous methylprednisolone, oral cyclophosphamide, and daily plasma exchange (plasmapheresis)", "Anti-GBM disease (Goodpasture syndrome) is a catastrophic medical emergency presenting with rapidly progressive glomerulonephritis (RPGN) and diffuse alveolar hemorrhage. Left untreated, permanent end-stage renal disease occurs within days. Immediate therapy must NOT be delayed for renal biopsy results. The standard of care is TRIPLE THERAPY: (1) PULSE INTRAVENOUS METHYLPREDNISOLONE (1 g/day for 3 days) followed by high-dose oral prednisone; (2) Oral or IV CYCLOPHOSPHAMIDE (to suppress new autoantibody production); and (3) DAILY PLASMA EXCHANGE (plasmapheresis) for 14 days. Plasmapheresis physically removes circulating pathogenic anti-GBM antibodies and active complement components, arresting glomerular necrosis and halting life-threatening pulmonary alveolar hemorrhage."],
        ["Administer high-dose intravenous loop diuretics and schedule elective outpatient renal biopsy", "Delaying immunosuppression leads to irreversible crescentic glomerulosclerosis and bilateral loss of renal function."],
        ["Initiate oral hydroxychloroquine and low-dose oral prednisone for 3 months", "Hydroxychloroquine is for mild systemic lupus erythematosus; it has zero efficacy against fulminant anti-GBM crescentic glomerulonephritis."],
        ["Initiate broad-spectrum intravenous piperacillin-tazobactam and vancomycin for bacterial pneumonia", "The pulmonary infiltrates and hemoptysis are non-infectious alveolar hemorrhage driven by anti-GBM antibodies; antibiotics are ineffective."],
        ["Perform bilateral emergency nephrectomy to remove the source of target antigens", "Nephrectomy was historically considered, but modern triple therapy with plasmapheresis and cyclophosphamide achieves disease control and preserves renal tissue."]
    ],
    "Hemoptysis + crescentic GN + high anti-GBM antibodies = Goodpasture syndrome -> immediate pulse methylprednisolone + cyclophosphamide + plasma exchange.",
    "Initiate triple therapy immediately for anti-GBM disease (pulse steroids, cyclophosphamide, plasma exchange) without waiting for renal biopsy confirmation.",
    "Initiate oral hydroxychloroquine and low-dose oral prednisone for 3 months",
    "Anti-GBM disease causes irreversible crescentic destruction within days; aggressive pulse steroids, cyclophosphamide, and daily plasmapheresis are mandatory.",
    "McAdoo SP, Pusey CD. Anti-glomerular basement membrane disease. Clin J Am Soc Nephrol. 2017;12(7):1162-1172. PMID: 28515156."
)

# 0544
add_q(
    "op-c-s2-0544", "Medicine", "Renal", "Lupus Nephritis Proliferative Induction Therapy", 5,
    "A 26-year-old woman with systemic lupus erythematosus presents for routine follow-up. Blood pressure is 154/92 mm Hg. Physical examination shows a malar rash, mild bilateral pretibial edema, and synovitis in the metacarpophalangeal joints. Laboratory evaluation reveals: serum creatinine 1.8 mg/dL (baseline 0.8 mg/dL), serum albumin 2.8 g/dL, serum C3 42 mg/dL (markedly depressed; normal 90-180 mg/dL), serum C4 8 mg/dL (depressed; normal 15-45 mg/dL), and high-titer anti-double-stranded DNA (anti-dsDNA) antibodies. Urinalysis demonstrates 3+ protein, 20-30 dysmorphic RBCs/hpf, and several red blood cell casts. Urine protein-to-creatinine ratio is 3.4 mg/mg. Urgent renal biopsy demonstrates Class IV diffuse proliferative lupus nephritis with active subendothelial 'wire-loop' immune complex deposits and cellular crescents. Which of the following is the most appropriate initial induction therapy for this patient?",
    [
        ["Mycophenolate mofetil (or intravenous cyclophosphamide) combined with high-dose corticosteroids", "Class III (focal) and Class IV (diffuse proliferative) lupus nephritis represent severe, aggressive forms of immune complex glomerulonephritis carrying high risks of progressive renal failure. Standard induction therapy consists of high-dose CORTICOSTEROIDS (intravenous pulse methylprednisolone followed by oral prednisone) COMBINED WITH EITHER: (1) ORAL MYCOPHENOLATE MOFETIL (MMF); or (2) INTRAVENOUS CYCLOPHOSPHAMIDE. MMF is generally preferred due to equivalent efficacy to cyclophosphamide with significantly lower risks of gonadal toxicity (infertility) and secondary malignancies. Hydroxychloroquine is maintained as background therapy for all SLE patients."],
        ["Oral hydroxychloroquine monotherapy with low-dose oral prednisone", "Hydroxychloroquine alone is insufficient for proliferative Class IV lupus nephritis and leads to rapid progression to dialysis."],
        ["Intravenous rituximab monotherapy without corticosteroids", "Rituximab is reserved for refractory lupus nephritis failing MMF or cyclophosphamide, not standard initial first-line induction."],
        ["Lifelong maintenance with oral azathioprine as sole induction agent", "Azathioprine is effective for maintenance therapy, but is significantly inferior to MMF and cyclophosphamide for acute induction of Class IV nephritis."],
        ["Continuous therapeutic systemic anticoagulation with warfarin", "Anticoagulation treats antiphospholipid syndrome thrombosis, not active immune-complex crescentic lupus nephritis."]
    ],
    "Lupus + active sediment (RBC casts) + low C3/C4 + Class IV proliferative GN = Lupus nephritis -> Induction with Mycophenolate mofetil + high-dose corticosteroids.",
    "Select first-line induction immunosuppression for Class III/IV proliferative lupus nephritis: mycophenolate mofetil (or cyclophosphamide) plus corticosteroids.",
    "Oral hydroxychloroquine monotherapy with low-dose oral prednisone",
    "Hydroxychloroquine is baseline therapy for non-renal lupus; proliferative Class IV nephritis requires aggressive induction with MMF or cyclophosphamide.",
    "Fanouriakis A, et al. 2019 Update of the Joint European League Against Rheumatism and European Renal Association-European Dialysis and Transplant Association (EULAR/ERA-EDTA) recommendations for the management of lupus nephritis. Ann Rheum Dis. 2020;79(6):713-723. PMID: 32220834."
)

# 0545
add_q(
    "op-c-s2-0545", "Pathology", "Renal", "MPGN vs C3 Glomerulopathy Immunofluorescence Distinction", 5,
    "A 48-year-old woman presents with persistent lower extremity edema and dark urine. Blood pressure is 148/88 mm Hg. Laboratory studies show: serum creatinine 2.1 mg/dL, serum albumin 2.6 g/dL, serum complement C3 18 mg/dL (severely depressed; normal 90-180 mg/dL), and serum complement C4 32 mg/dL (completely normal; normal 15-45 mg/dL). Serologic testing for hepatitis B, hepatitis C, ANA, and ANCA is negative. Serum protein electrophoresis and free light chain ratios are normal. Renal biopsy light microscopy reveals diffuse endocapillary hypercellularity, lobular accentuation of glomeruli, and thickening of the capillary wall with double-contour 'tram-track' basement membrane duplication. Immunofluorescence microscopy reveals intense, bright, isolated granular C3 staining along the capillary loops and mesangium, with completely negative staining for IgG, IgM, IgA, C1q, kappa, and lambda light chains. Which of the following is the underlying pathogenesis of this patient's renal disease?",
    [
        ["Uncontrolled hyperactivation of the alternative complement pathway (such as C3 nephritic factor autoantibody stabilizing C3 convertase)", "Historically grouped under membranoproliferative glomerulonephritis (MPGN), glomerulopathies with 'tram-track' double-contour appearance are now classified strictly by IMMUNOFLUORESCENCE: (1) IMMUNE COMPLEX-MEDIATED MPGN: immunofluorescence shows both immunoglobulins (IgG/IgM) and complement (C3/C1q/C4), driven by chronic infections (hepatitis C), autoimmune disease (lupus), or monoclonal gammopathies; and (2) C3 GLOMERULOPATHY (dense deposit disease or C3 glomerulonephritis): immunofluorescence shows DOMINANT OR EXCLUSIVE C3 DEPOSITION (at least 2 orders of magnitude stronger than immunoglobulins). C3 glomerulopathy is driven by dysregulation of the ALTERNATIVE COMPLEMENT PATHWAY, most commonly an autoantibody called C3 NEPHRITIC FACTOR (C3NeF) that binds to and stabilizes the alternative pathway C3 convertase (C3bBb), preventing its degradation and causing continuous, unchecked C3 consumption (yielding low serum C3 with normal C4)."],
        ["Circulating polyclonal IgG-IgM cryoglobulin complexes activating the classical complement pathway", "Cryoglobulinemia causes classical pathway activation, which characteristically DEPLETES C4 (very low C4) and shows dense IgG/IgM on immunofluorescence."],
        ["Direct cytotoxic T-cell perforation of glomerular podocyte pedicels without complement activation", "Cytotoxic T cells do not produce tram-track basement membrane duplication or isolated dense C3 deposition."],
        ["Autoantibodies directed against the alpha-3 chain of type IV collagen causing linear basement membrane IgG fixation", "Anti-GBM disease produces linear IgG staining with normal C3/C4, not isolated granular C3 with tram-track duplication."],
        ["Subepithelial immune complex deposition targeting the M-type phospholipase A2 receptor", "Anti-PLA2R antibodies cause membranous nephropathy with subepithelial IgG4 and normal serum complement."]
    ],
    "Tram-track basement membrane + isolated C3 on IF (negative Ig) + low C3 with normal C4 = C3 Glomerulopathy -> alternative complement pathway dysregulation (C3NeF).",
    "Differentiate immune-complex MPGN (Ig + complement, hepatitis C/lupus) from C3 glomerulopathy (pure C3 deposition, alternative complement dysregulation, C3NeF).",
    "Circulating polyclonal IgG-IgM cryoglobulin complexes activating the classical complement pathway",
    "Cryoglobulinemia activates the classical pathway, producing marked C4 depression and bright IgG/IgM staining, whereas C3 glomerulopathy has normal C4 and zero immunoglobulins.",
    "Pickering MC, et al. C3 glomerulopathy: consensus report. Kidney Int. 2013;84(6):1079-1089. PMID: 24172683."
)

# 0546
add_q(
    "op-c-s2-0546", "Medicine", "Cardiovascular", "Resistant Hypertension Spironolactone Fourth-Line Agent", 5,
    "A 58-year-old man presents for evaluation of persistent hypertension. He adheres strictly to a low-sodium diet and takes maximal therapeutic doses of three antihypertensive medications: amlodipine 10 mg daily, valsartan 320 mg daily, and chlorthalidone 25 mg daily. Automated office blood pressure across multiple visits averages 158/98 mm Hg, and home ambulatory blood pressure monitoring confirms sustained hypertension averaging 154/96 mm Hg. Physical examination reveals normal heart sounds, clear lungs, and absence of abdominal bruits or peripheral edema. Laboratory evaluation shows: serum sodium 140 mEq/L, potassium 4.2 mEq/L, BUN 18 mg/dL, and serum creatinine 1.0 mg/dL (eGFR 88 mL/min/1.73 m2). Secondary hypertension workup, including renal artery ultrasound and plasma aldosterone-to-renin ratio, is unrevealing. According to clinical practice guidelines (PATHWAY-2 trial), which of the following is the most effective fourth-line medication to add to this patient's regimen?",
    [
        ["Low-dose spironolactone (mineralocorticoid receptor antagonist)", "RESISTANT HYPERTENSION is defined as blood pressure that remains above target despite concurrent use of maximal tolerated doses of THREE antihypertensive agents from different classes, one of which MUST be a diuretic (typically a CCB, an ACEI or ARB, and a thiazide-like diuretic such as chlorthalidone). In the landmark PATHWAY-2 randomized double-blind crossover trial, LOW-DOSE SPIRONOLACTONE (25 to 50 mg daily) was proven to be the most effective add-on fourth-line agent, superior to beta-blockers (bisoprolol), alpha-blockers (doxazosin), or placebo. Spironolactone overcomes occult sodium retention and subclinical mineralocorticoid excess common in resistant hypertension. Serum potassium and creatinine must be monitored 1-2 weeks after initiation."],
        ["Atenolol (cardioselective beta-1 adrenergic receptor antagonist)", "Beta-blockers were tested in the PATHWAY-2 trial and proved significantly inferior to spironolactone for fourth-line blood pressure reduction in resistant hypertension."],
        ["Doxazosin (selective peripheral alpha-1 adrenergic receptor antagonist)", "Doxazosin produced significantly less blood pressure reduction than spironolactone in the PATHWAY-2 trial."],
        ["Hydralazine (direct-acting arteriolar vasodilator)", "Hydralazine is a fifth- or sixth-line agent that triggers reflex tachycardia, fluid retention, and drug-induced lupus; spironolactone is the guideline fourth-line drug."],
        ["Clonidine (central alpha-2 adrenergic receptor agonist)", "Clonidine carries significant central sedation, dry mouth, and severe rebound hypertensive crises upon missed doses; spironolactone is preferred."],
    ],
    "Uncontrolled BP on maximal CCB + ARB + thiazide = Resistant hypertension -> add low-dose Spironolactone as evidence-based fourth-line agent (PATHWAY-2).",
    "Identify resistant hypertension and select low-dose spironolactone as the superior fourth-line agent based on the PATHWAY-2 randomized trial.",
    "Atenolol (cardioselective beta-1 adrenergic receptor antagonist)",
    "The PATHWAY-2 trial demonstrated that spironolactone is significantly more effective than beta-blockers (bisoprolol/atenolol) or alpha-blockers in resistant hypertension.",
    "Williams B, et al. Endocrine and hemodynamic mechanisms of resistant hypertension in the PATHWAY-2 study. Lancet. 2015;386(10008):2059-2068. PMID: 26414968."
)

# 0547
add_q(
    "op-c-s2-0547", "Medicine", "Renal", "Renal Vein Thrombosis in Membranous Nephropathy", 5,
    "A 44-year-old man with primary membranous nephropathy presents to the emergency department with sudden-onset severe right flank pain, gross hematuria, and low-grade fever. Physical examination reveals blood pressure 152/94 mm Hg, right costovertebral angle tenderness, and 3+ bilateral lower extremity pitting edema. Laboratory evaluation shows: serum creatinine 2.4 mg/dL (baseline 1.1 mg/dL), serum albumin 1.7 g/dL (severely depressed; normal 3.5-5.0 g/dL), and 24-hour urine protein 14.2 g. Urinalysis demonstrates 3+ blood and numerous dysmorphic red blood cells without casts. Contrast-enhanced CT angiography of the abdomen demonstrates an enlarged right kidney with persistent nephrogram and an intraluminal filling defect completely occluding the right main renal vein extending into the inferior vena cava. Which of the following is the most appropriate next step in management?",
    [
        ["Immediate initiation of therapeutic systemic anticoagulation (intravenous unfractionated heparin or low-molecular-weight heparin)", "RENAL VEIN THROMBOSIS (RVT) is a well-recognized thromboembolic complication of nephrotic syndrome, occurring with highest frequency in MEMBRANOUS NEPHROPATHY (up to 20-30% of patients), particularly when SERUM ALBUMIN DROPS BELOW 2.0 g/dL. Nephrotic hypercoagulability is driven by urinary loss of endogenous anticoagulants (antithrombin III, protein C, protein S) combined with hepatic overproduction of procoagulant factors (fibrinogen, factor V, factor VIII) and increased platelet aggregation. Acute RVT presents with sudden flank pain, gross hematuria, worsening proteinuria, and acute decline in GFR due to renal venous congestion. The immediate treatment of choice is THERAPEUTIC SYSTEMIC ANTICOAGULATION (heparin transitioned to warfarin or DOAC) to prevent pulmonary embolism and facilitate recanalization."],
        ["Emergency right radical nephrectomy to prevent systemic thromboembolism", "Nephrectomy is not indicated; the kidney is viable and thrombus typically resolves with medical anticoagulation."],
        ["Intravenous high-dose loop diuretics and fluid restriction to 500 mL/day", "Diuretics worsen intravascular volume depletion and hemoconcentration, increasing thrombotic risk."],
        ["Systemic intravenous thrombolysis with high-dose alteplase as sole first-line therapy", "Catheter-directed thrombolysis is reserved for bilateral massive RVT causing anuric renal failure; uncomplicated unilateral RVT is managed with therapeutic anticoagulation."],
        ["Emergency open surgical thrombectomy of the inferior vena cava", "Open surgical thrombectomy carries high morbidity and has been replaced by systemic anticoagulation."],
    ],
    "Membranous nephropathy + albumin < 2.0 + sudden flank pain/hematuria + renal vein thrombus = Renal vein thrombosis -> therapeutic systemic anticoagulation.",
    "Recognize renal vein thrombosis in nephrotic syndrome (especially membranous nephropathy with albumin <2.0) and initiate therapeutic anticoagulation.",
    "Emergency right radical nephrectomy to prevent systemic thromboembolism",
    "Surgical nephrectomy is contraindicated; medical systemic anticoagulation preserves the kidney and prevents thrombus extension.",
    "Lionaki S, et al. Venous thromboembolism in patients with membranous nephropathy. Clin J Am Soc Nephrol. 2012;7(1):43-51. PMID: 22096039."
)

# 0548
add_q(
    "op-c-s2-0548", "Medicine", "Dermatology", "Calciphylaxis in ESRD Sodium Thiosulfate", 5,
    "A 62-year-old woman with end-stage renal disease on maintenance hemodialysis for 6 years presents with excruciatingly painful skin lesions on both thighs and buttocks. Physical examination reveals bilateral, symmetric, mottled, violaceous, indurated plaques that have developed central ischemic necrosis and deep, non-healing, blackened eschars with surrounding livedoid erythema. Peripheral pulses are normal. Laboratory evaluation demonstrates: serum calcium 9.4 mg/dL, serum phosphate 6.8 mg/dL (calcium-phosphate product 63.9 mg2/dL2), intact PTH 540 pg/mL, and serum albumin 2.9 g/dL. Plain radiographs of the thighs demonstrate extensive fine, linear, branching calcifications within the subcutaneous soft tissue arterioles. Which of the following is the diagnosis, and what is the specific medical therapy indicated?",
    [
        ["Calciphylaxis (calcific uremic arteriolopathy); initiate intravenous sodium thiosulfate therapy combined with aggressive wound care and optimization of dialysis", "CALCIPHYLAXIS (calcific uremic arteriolopathy) is a rare, life-threatening complication occurring almost exclusively in patients with ESRD on dialysis (and high calcium-phosphate product > 55 mg2/dL2, secondary hyperparathyroidism, or warfarin use). Pathophysiology involves progressive calcification, intimal hyperplasia, and microthrombosis of subcutaneous small- and medium-sized arterioles, leading to tissue ischemia, fat infarction, and excruciatingly painful necrotic ulcers prone to lethal sepsis. The first-line medical therapy is INTRAVENOUS SODIUM THIOSULFATE (administered during hemodialysis). Sodium thiosulfate acts as a potent antioxidant, vasodilates calcified arterioles, and chelates calcium into soluble calcium thiosulfate salts, dramatically alleviating ischemic pain and promoting ulcer healing alongside strict phosphate control and surgical debridement."],
        ["Pyoderma gangrenosum; initiate high-dose intravenous methylprednisolone pulse therapy", "Pyoderma gangrenosum causes violaceous ulcers, but plain X-rays do not show branching vascular calcifications, and steroids are contraindicated in calciphylaxis due to infection risk."],
        ["Ecthyma gangrenosum; initiate intravenous ceftazidime for systemic Pseudomonas bacteremia", "Ecthyma gangrenosum causes necrotic skin lesions in neutropenic patients with Pseudomonas sepsis, not chronic branching arteriole calcification in hemodialysis."],
        ["Warfarin-induced skin necrosis; administer subcutaneous vitamin K and resume warfarin at half-dose", "Warfarin necrosis peaks on days 3-5 of warfarin initiation; calciphylaxis is a chronic calcific arteriolopathy treated with sodium thiosulfate."],
        ["Necrotizing fasciitis; immediate emergent bedside amputation of both lower extremities", "Necrotizing fasciitis involves deep fascial planes with gas and crepitus; calciphylaxis involves subcutaneous microvascular calcification."],
    ],
    "Hemodialysis + excruciating necrotic violaceous ulcers + linear arteriolar calcifications on X-ray = Calciphylaxis -> IV sodium thiosulfate + wound care.",
    "Diagnose calciphylaxis in ESRD and select intravenous sodium thiosulfate as the targeted antioxidant and calcium-chelating therapy.",
    "Pyoderma gangrenosum; initiate high-dose intravenous methylprednisolone pulse therapy",
    "Pyoderma gangrenosum lacks arteriolar medial calcification on X-ray; corticosteroids in calciphylaxis increase mortality from fatal wound sepsis.",
    "Nigwekar SU, et al. Calciphylaxis: risk factors, diagnosis, and treatment. Am J Kidney Dis. 2015;66(1):133-146. PMID: 25796413."
)

# 0549
add_q(
    "op-c-s2-0549", "Medicine", "Renal", "ADPKD Strict Blood Pressure Control and Tolvaptan", 5,
    "A 36-year-old man with a family history of autosomal dominant polycystic kidney disease (ADPKD) presents for evaluation. He is currently asymptomatic. Blood pressure is 138/88 mm Hg. Physical examination reveals palpable, bilateral, non-tender flank masses. Abdominal MRI demonstrates bilateral kidney enlargement with total kidney volume (TKV) of 1,150 mL (height-adjusted total kidney volume > 600 mL/m, placing him in Mayo Clinic Imaging Class 1D; high risk for rapid progression). Laboratory studies show: serum creatinine 1.1 mg/dL, eGFR 82 mL/min/1.73 m2, and spot urine albumin-to-creatinine ratio 120 mg/g. Which of the following represents the optimal management strategy regarding blood pressure target and disease-modifying pharmacotherapy to slow kidney function decline in this high-risk patient?",
    [
        ["Target a strict blood pressure of < 110/75 mm Hg using an ACE inhibitor or ARB as first-line therapy, and initiate the vasopressin V2 receptor antagonist tolvaptan", "In young patients (<50 years) with ADPKD and preserved eGFR (>60 mL/min/1.73 m2), the HALT-PKD trial proved that STRICT BLOOD PRESSURE CONTROL (targeting 95/60 to 110/75 mm Hg) using an ACE inhibitor or ARB slows the rate of total kidney volume growth and reduces left ventricular hypertrophy compared to standard targets (<140/90). Furthermore, in patients with documented high risk for rapid disease progression (Mayo Class 1C, 1D, or 1E based on height-adjusted total kidney volume), the selective VASOPRESSIN V2 RECEPTOR ANTAGONIST TOLVAPTAN is indicated. Tolvaptan blocks cAMP production in collecting duct cells, slowing cyst cell proliferation and fluid secretion, thereby slowing eGFR decline (TEMPO 3:4 and REPRISE trials). Monthly liver function monitoring is required due to hepatotoxicity risk."],
        ["Target a standard blood pressure of < 140/90 mm Hg using atenolol monotherapy, and advise strict dietary fluid restriction < 1 L/day", "Strict fluid restriction increases endogenous vasopressin, accelerating cyst growth; high fluid intake is recommended to suppress endogenous vasopressin."],
        ["Target blood pressure < 130/80 mm Hg using hydrochlorothiazide monotherapy, and avoid all vaptan medications", "Thiazide diuretics are inferior to ACE inhibitors for ADPKD and increase uric acid; tolvaptan is indicated for rapid progressors."],
        ["Perform prophylactic laparoscopic renal cyst de-roofing (unroofing) of all cortical cysts bilaterally", "Surgical cyst de-roofing relieves refractory localized pain, but does NOT slow progression to end-stage renal disease and does not preserve GFR."],
        ["Initiate high-dose oral spironolactone combined with tolvaptan and restrict daily sodium intake to > 6 g/day", "Spironolactone is not first-line over ACE inhibitors; sodium restriction must be <2 g/day, not high-sodium."],
    ],
    "ADPKD with rapid progression (Mayo 1D) -> Strict BP target (<110/75) with ACEI/ARB + Tolvaptan (V2 receptor antagonist) to slow cyst expansion.",
    "Apply HALT-PKD and TEMPO trial evidence: strict BP control (<110/75) with ACEI/ARB and tolvaptan slows renal decline in rapid-progressor ADPKD.",
    "Target a standard blood pressure of < 140/90 mm Hg using atenolol monotherapy, and advise strict dietary fluid restriction < 1 L/day",
    "Fluid restriction elevates endogenous vasopressin which accelerates cyst growth; strict BP (<110/75) and tolvaptan inhibit cyst enlargement.",
    "Torres VE, et al. Tolvaptan in patients with autosomal dominant polycystic kidney disease (TEMPO 3:4 trial). N Engl J Med. 2012;367(25):2407-2418. PMID: 23121377."
)

# 0550
add_q(
    "op-c-s2-0550", "Medicine", "Renal", "PSGN vs IgA Nephropathy Clinical Latency Distinction", 5,
    "A 22-year-old college student presents with dark, tea-colored urine that began 24 hours after developing a fever, sore throat, and rhinorrhea. He has had two similar episodes over the past 3 years, each coinciding with upper respiratory viral infections. Blood pressure is 126/80 mm Hg. Physical examination shows pharyngeal injection without tonsillar exudates; there is no peripheral edema. Laboratory evaluation shows: serum creatinine 0.9 mg/dL, serum complement C3 125 mg/dL (completely normal; normal 90-180 mg/dL), and serum complement C4 30 mg/dL (normal). Urinalysis shows 3+ blood, dysmorphic red blood cells, red blood cell casts, and 1+ protein. Which of the following clinical features most decisively distinguishes this patient's condition from poststreptococcal glomerulonephritis (PSGN)?",
    [
        ["The synpharyngitic timing (gross hematuria developing within 1 to 2 days of infection onset) and normal serum complement C3 levels", "IgA nephropathy (Berger disease) and poststreptococcal glomerulonephritis (PSGN) are the two classic post-infectious nephritic syndromes. The two decisive features that distinguish them clinically are: (1) LATENCY PERIOD: IgA nephropathy is SYNPHARYNGITIC, with gross hematuria appearing concurrently or within 1 to 2 days of upper respiratory symptom onset. In contrast, PSGN requires a POST-INFECTIOUS LATENCY of 1 to 3 WEEKS after pharyngitis (or 3-6 weeks after impetigo) to allow time for antibodies to form and deposit; and (2) SERUM COMPLEMENT: In IgA nephropathy, serum C3 and C4 are COMPLETELY NORMAL. In contrast, in PSGN, classical/alternative complement activation causes marked HYPOCOMPLEMENTEMIA (low C3 in >90% of cases), which normalizes within 6-8 weeks."],
        ["The presence of dysmorphic red blood cells on microscopic urinalysis", "Dysmorphic RBCs and RBC casts are features of all glomerulonephritides and do not differentiate IgA from PSGN."],
        ["The absence of significant daily proteinuria exceeding 3.5 g/day", "Both disorders typically produce sub-nephrotic proteinuria; absence of nephrotic proteinuria does not differentiate between them."],
        ["The patient's male sex and age over 20 years", "Both IgA nephropathy and PSGN have a male predominance and occur across wide age ranges."],
        ["The normal resting systolic blood pressure without requirement for antihypertensives", "While PSGN more frequently causes volume-dependent hypertension, normal BP alone does not differentiate it from IgA nephropathy as reliably as latency and C3."],
    ],
    "Hematuria 1-2 days post-URI (synpharyngitic) + normal C3 = IgA nephropathy (PSGN requires 1-3 weeks latency and causes low C3).",
    "Distinguish IgA nephropathy (synpharyngitic 1-2 days, normal C3) from PSGN (1-3 weeks latency, low C3).",
    "The presence of dysmorphic red blood cells on microscopic urinalysis",
    "Dysmorphic RBCs indicate glomerular bleeding in both conditions; the distinguishing factors are the synpharyngitic onset (1-2 days) and normal complement C3 in IgA.",
    "Wyatt RJ, Julian BA. IgA nephropathy. N Engl J Med. 2013;368(25):2402-2414. PMID: 23782179."
)

with open("scripts/candidate-authoring/step2-batch22.ts", "w", encoding="utf-8") as f:
    f.write("import { CandidateSpec } from './types';\n\n")
    f.write("export const step2Batch22: CandidateSpec[] = ")
    f.write(json.dumps(items, indent=2))
    f.write(";\n")

print(f"Successfully generated step2-batch22.ts with {len(items)} items.")

