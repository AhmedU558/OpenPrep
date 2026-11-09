import { CandidateSpec } from './types';

export const step2Batch21: CandidateSpec[] = [
  {
    "code": "op-c-s2-0501",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Liver Failure Criteria and Urgent Transplant Referral",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old previously healthy woman is brought to the emergency department by her roommate due to progressive confusion, somnolence, and jaundice over the past 36 hours. Her roommate reports that she took an unknown quantity of an over-the-counter analgesic 3 days ago following a breakup. On physical examination, she is lethargic, disoriented to time and place, and exhibits asterixis on wrist dorsiflexion. Scleral icterus is marked, and the liver edge is difficult to palpate. She has no ascites, spider angiomas, or prior liver disease history. Laboratory evaluation reveals: AST 8,450 U/L, ALT 9,200 U/L, total bilirubin 6.8 mg/dL, serum creatinine 2.4 mg/dL, and prothrombin time 42 seconds (INR 3.8). Serum acetaminophen concentration is 45 microg/mL. Arterial blood gas shows pH 7.28, PaCO2 30 mm Hg, and serum lactate 4.5 mmol/L. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Initiate intravenous N-acetylcysteine infusion and immediately contact a regional liver transplant center for emergency liver transplant evaluation",
        "Acute liver failure (ALF) is defined by the rapid onset of severe acute liver injury (transaminases >1,000 U/L) complicated by COAGULOPATHY (INR >= 1.5) and HEPATIC ENCEPHALOPATHY in a patient WITHOUT pre-existing cirrhosis. The most common cause is acetaminophen hepatotoxicity. Management requires two immediate simultaneous actions: (1) Prompt initiation of INTRAVENOUS N-ACETYLCYSTEINE (NAC), which replenishes mitochondrial glutathione stores, scavenges reactive oxygen species, and improves microvascular perfusion (effective even in late presentations); and (2) IMMEDIATE CONTACT WITH A LIVER TRANSPLANT CENTER for emergency transplant evaluation. Patients meeting King's College criteria (arterial pH < 7.30 after resuscitation, or INR > 6.5, creatinine > 3.4 mg/dL, and grade III/IV encephalopathy) have >80% mortality without emergent liver transplantation."
      ],
      [
        "Administer oral lactulose and rifaximin while monitoring transaminases in the medical ward before considering transplant",
        "Lactulose treats encephalopathy in chronic cirrhosis, but is insufficient in acute liver failure where progressive cerebral edema and brain herniation are lethal; waiting in a medical ward without transplant evaluation is fatal."
      ],
      [
        "Administer 4 units of fresh frozen plasma to correct the coagulopathy before obtaining an emergent transjugular liver biopsy",
        "Correcting INR with FFP is contraindicated unless active bleeding occurs, because it obscures the serial monitoring of INR, the single best prognostic indicator of hepatic synthetic recovery, and biopsy is unnecessary."
      ],
      [
        "Perform emergency transjugular intrahepatic portosystemic shunt (TIPS) to decompress the hepatic sinusoids",
        "TIPS is indicated for refractory variceal bleeding or ascites in cirrhosis; it has no role in acute liver failure and precipitates fatal encephalopathy."
      ],
      [
        "Initiate intravenous high-dose methylprednisolone for suspected autoimmune acute hepatitis",
        "Corticosteroids are indicated for severe autoimmune hepatitis, but this patient has confirmed toxic acetaminophen overdose (transaminases >8,000 U/L) where steroids are ineffective and increase sepsis risk."
      ]
    ],
    "shortestValidSolution": "Acute liver injury + INR >= 1.5 + encephalopathy without cirrhosis = Acute Liver Failure -> IV N-acetylcysteine + emergent liver transplant referral.",
    "necessaryInference": "Recognize the definition of ALF (coagulopathy + encephalopathy without cirrhosis) and immediate dual priorities: IV NAC and emergent transplant center contact.",
    "strongestDistractor": "Administer oral lactulose and rifaximin while monitoring transaminases in the medical ward before considering transplant",
    "distractorExclusion": "Lactulose is supportive in chronic cirrhosis; acute liver failure has high short-term mortality from cerebral edema and requires urgent transplant center listing.",
    "citation": "Stravitz RT, Lee WM. Acute liver failure. Lancet. 2019;394(10201):869-881. PMID: 31498173.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0502",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Variceal Bleeding Resuscitation and Endoscopy Timing",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man with decompensated alcoholic cirrhosis presents with massive hematemesis and lightheadedness. On arrival, he is pale and diaphoretic. Blood pressure is 88/54 mm Hg, pulse is 122/min, and respiratory rate is 22/min. Physical examination reveals spider angiomas, palmar erythema, and moderate abdominal ascites. Laboratory evaluation shows: hemoglobin 7.1 g/dL, platelet count 52,000/microL, and INR 1.9. Two large-bore peripheral intravenous lines are placed. Which of the following represents the optimal initial medical management bundle and transfusion strategy for this patient prior to urgent endoscopy within 12 hours?",
    "choices": [
      [
        "Initiate intravenous octreotide infusion, start prophylactic intravenous ceftriaxone, and implement a restrictive packed red blood cell transfusion strategy targeting a hemoglobin of 7.0 to 8.0 g/dL",
        "Management of acute variceal hemorrhage requires a coordinated medical bundle before urgent endoscopy (<12 hours): (1) VASOACTIVE AGENTS (IV octreotide or terlipressin): splanchnic vasoconstrictor that reduces portal inflow and variceal pressure; (2) PROPHYLACTIC ANTIBIOTICS (IV ceftriaxone 1 g/day for up to 7 days): reduces infectious complications, SBP, rebleeding rates, and overall mortality; and (3) RESTRICTIVE TRANSFUSION STRATEGY: transfusing packed red blood cells to maintain hemoglobin between 7.0 and 8.0 g/dL (liberal transfusion >9 g/dL increases portal pressures, induces rebound variceal rupture, and significantly increases mortality)."
      ],
      [
        "Initiate intravenous vasopressin monotherapy, administer oral ciprofloxacin, and implement a liberal transfusion strategy targeting a hemoglobin > 10.0 g/dL",
        "Liberal transfusion (>9-10 g/dL) increases portal hydrostatic pressure and significantly worsens rebleeding and mortality; vasopressin alone causes coronary and peripheral ischemia."
      ],
      [
        "Administer high-dose intravenous esmolol, perform immediate large-volume paracentesis, and transfuse platelets to achieve > 100,000/microL",
        "Beta-blockers are contraindicated during acute bleeding and hypotension (they blunt compensatory tachycardia); paracentesis is deferred until bleeding is controlled."
      ],
      [
        "Administer recombinant activated factor VII, start continuous intravenous heparin infusion, and transfuse FFP to normalize INR to < 1.2",
        "Factor VIIa and FFP are not recommended and increase volume overload; heparin is strictly contraindicated during active variceal hemorrhage."
      ],
      [
        "Perform emergent transjugular intrahepatic portosystemic shunt (TIPS) within 2 hours without medical stabilization or diagnostic endoscopy",
        "Endoscopy with band ligation is the first-line therapy; preemptive or salvage TIPS is reserved for failure of endoscopic/medical therapy or high-risk criteria, not initial blind therapy."
      ]
    ],
    "shortestValidSolution": "Acute variceal bleed -> IV octreotide + IV ceftriaxone prophylaxis + restrictive RBC transfusion (target Hb 7-8 g/dL) before urgent EGD (<12h).",
    "necessaryInference": "Master the variceal hemorrhage triad: vasoactive agent (octreotide), prophylactic antibiotics (ceftriaxone), and restrictive transfusion (Hb 7-8 g/dL).",
    "strongestDistractor": "Initiate intravenous vasopressin monotherapy, administer oral ciprofloxacin, and implement a liberal transfusion strategy targeting a hemoglobin > 10.0 g/dL",
    "distractorExclusion": "Liberal transfusion (>9-10 g/dL) increases portal pressure and mortality; guidelines strictly mandate a restrictive target of 7-8 g/dL.",
    "citation": "Garcia-Tsao G, et al. Portal hypertensive bleeding in cirrhosis: risk stratification, diagnosis, and management: 2016 practice guidance by AASLD. Hepatology. 2017;65(1):310-335. PMID: 27786365.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0503",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Refractory Variceal Bleeding Salvage TIPS vs Tamponade",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man with hepatitis C-induced cirrhosis is hospitalized for acute esophageal variceal bleeding. He receives IV octreotide, IV ceftriaxone, and restrictive blood transfusions. Urgent esophagogastroduodenoscopy (EGD) reveals active spurting bleeding from large distal esophageal varices; six endoscopic bands are applied, achieving initial hemostasis. Four hours later in the ICU, the patient experiences sudden massive hematemesis and hemodynamic collapse (blood pressure 76/40 mm Hg, pulse 134/min). Repeat emergency EGD demonstrates persistent torrential bleeding from banded varices that is refractory to repeat band ligation and sclerotherapy. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Insert a Sengstaken-Blakemore balloon tamponade tube as a temporary stabilizing bridge and urgently perform emergent transjugular intrahepatic portosystemic shunt (TIPS)",
        "In patients with refractory variceal hemorrhage failing endoscopic therapy (band ligation/sclerotherapy) and medical vasoactive infusion, mortality approaches 50%. The definitive salvage intervention is EMERGENT TRANSJUGULAR INTRAHEPATIC PORTOSYSTEMIC SHUNT (TIPS), which establishes a low-resistance conduit between the portal vein and hepatic vein, decompressing the portal system. If the patient is in extremis with active torrential bleeding, balloon tamponade (e.g. SENGSTAKEN-BLAKEMORE TUBE or Minnesota tube) or a self-expanding metal esophageal stent should be placed immediately as a temporary stabilizing bridge (<24 hours) while the interventional radiology team prepares for emergent TIPS."
      ],
      [
        "Administer intravenous high-dose somatostatin and transfer to the floor for continued observation",
        "Conservative observation in refractory bleeding with shock is universally fatal; intervention to decompress portal hypertension is mandatory."
      ],
      [
        "Perform emergency surgical portacaval shunt via open laparotomy with splenectomy",
        "Open surgical shunts carry prohibitive operative mortality (>60%) in decompensated cirrhosis; minimally invasive transjugular TIPS is the standard of care."
      ],
      [
        "Perform transcatheter arterial embolization of the left gastric artery",
        "Varices are low-pressure venous collaterals driven by portal hypertension, not primary arterial bleeders; arterial embolization is ineffective for esophageal varices."
      ],
      [
        "Infuse 10 units of fresh frozen plasma and 2 pools of platelets while withholding all further endoscopic or radiological procedures",
        "Plasma and platelets will not stop mechanical venous hemorrhage from ruptured varices and will exacerbate portal hypertension through volume overload."
      ]
    ],
    "shortestValidSolution": "Refractory variceal bleeding failing endoscopic therapy -> balloon tamponade (Sengstaken-Blakemore) bridge to emergent salvage TIPS.",
    "necessaryInference": "Select the salvage management for refractory variceal bleeding: balloon tamponade or esophageal stent as a temporary bridge to emergent TIPS.",
    "strongestDistractor": "Perform emergency surgical portacaval shunt via open laparotomy with splenectomy",
    "distractorExclusion": "Open surgical shunting carries catastrophic surgical mortality in decompensated cirrhotics; TIPS performed percutaneously is the salvage procedure of choice.",
    "citation": "de Franchis R, et al. Baveno VI Faculty. Expanding consensus in portal hypertension: Report of the Baveno VI Consensus Workshop. J Hepatol. 2015;63(3):743-752. PMID: 26047908.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0504",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Spontaneous Bacterial Peritonitis and Albumin Infusion",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with alcohol-related cirrhosis and refractory ascites presents with low-grade fever, worsening abdominal distention, and mild confusion. Temperature is 38.2\u00b0C (100.8\u00b0F), blood pressure is 108/68 mm Hg, and pulse is 92/min. Physical examination reveals tense ascites with mild diffuse abdominal tenderness without rebound or guarding. Diagnostic paracentesis is performed; ascitic fluid analysis shows: cloudy appearance, total protein 0.8 g/dL, glucose 65 mg/dL, LDH 85 U/L, and white blood cell count 650/microL with 75% segmented neutrophils (absolute neutrophil count 488/microL). Serum creatinine is 1.6 mg/dL (baseline 0.9 mg/dL). Which of the following is the most appropriate pharmacologic regimen to treat the infection and prevent hepatorenal syndrome in this patient?",
    "choices": [
      [
        "Initiate intravenous ceftriaxone (or cefotaxime) plus intravenous 20% albumin (1.5 g/kg on day 1 and 1.0 g/kg on day 3)",
        "Spontaneous bacterial peritonitis (SBP) is diagnosed when ascitic fluid absolute neutrophil count (ANC) is >= 250/microL. First-line antibiotic therapy is an INTRAVENOUS THIRD-GENERATION CEPHALOSPORIN (ceftriaxone or cefotaxime) covering enteric gram-negative bacilli (E. coli, Klebsiella) and streptococci. Crucially, in patients with SBP who have renal dysfunction (creatinine > 1.0 mg/dL, BUN > 30 mg/dL) or hyperbilirubinemia (>4 mg/dL), co-administration of INTRAVENOUS ALBUMIN (1.5 g/kg within 6 hours, followed by 1.0 g/kg on day 3) reduces the incidence of hepatorenal syndrome from 30% to 10% and significantly decreases hospital mortality."
      ],
      [
        "Initiate oral ciprofloxacin monotherapy without albumin infusion for a planned 14-day outpatient course",
        "Oral fluoroquinolones are used for secondary prophylaxis; active SBP with acute kidney injury requires inpatient IV cephalosporins plus albumin."
      ],
      [
        "Initiate intravenous vancomycin and metronidazole without albumin infusion",
        "Standard SBP is caused by aerobic enteric gram-negative rods; anaerobic coverage (metronidazole) is not needed unless secondary peritonitis is proven."
      ],
      [
        "Perform total volume paracentesis of 6 liters with immediate placement of a permanent peritoneal dialysis catheter",
        "Indwelling catheters carry severe risk of polymicrobial bacterial superinfection in cirrhosis and are strictly contraindicated."
      ],
      [
        "Administer high-dose intravenous furosemide and spironolactone to accelerate fluid clearance from the peritoneal cavity",
        "Diuretics worsen renal hypoperfusion and must be temporarily withheld in patients with SBP and acute kidney injury."
      ]
    ],
    "shortestValidSolution": "Ascitic ANC >= 250/microL + elevated creatinine = SBP -> IV 3rd-generation cephalosporin + IV albumin (1.5 g/kg day 1, 1.0 g/kg day 3) to prevent HRS.",
    "necessaryInference": "Apply SBP treatment guidelines: IV cephalosporin plus weight-based IV albumin (day 1 and day 3) in high-risk patients to prevent hepatorenal syndrome.",
    "strongestDistractor": "Initiate intravenous vancomycin and metronidazole without albumin infusion",
    "distractorExclusion": "Spontaneous peritonitis is monomicrobial aerobic enteric flora; metronidazole is unnecessary, and omitting albumin dramatically increases hepatorenal mortality.",
    "citation": "Sort P, et al. Effect of intravenous albumin on renal impairment and mortality in patients with cirrhosis and spontaneous bacterial peritonitis. N Engl J Med. 1999;341(6):403-409. PMID: 10432325.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0505",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Hepatorenal Syndrome Diagnostic Criteria and Terlipressin",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man with cirrhosis complicated by ascites is admitted for acute kidney injury. His baseline serum creatinine was 0.9 mg/dL 3 weeks ago; on admission, it is 2.8 mg/dL. He has no fever, cough, or diarrhea. Diuretics (furosemide and spironolactone) are discontinued. He receives intravenous 20% albumin (1 g/kg/day) for 48 consecutive hours. Despite volume expansion, his serum creatinine rises to 3.2 mg/dL. Blood pressure is 98/58 mm Hg. Urinalysis reveals zero protein, zero red blood cells, and zero cellular casts. Spot urine sodium is 6 mEq/L (fractional excretion of sodium < 0.2%). Renal ultrasound reveals normal-sized kidneys without hydronephrosis or parenchymal disease. Echocardiography shows a normal ejection fraction without heart failure. Which of the following is the most appropriate definitive pharmacologic therapy for this patient's acute kidney injury?",
    "choices": [
      [
        "Terlipressin (or continuous norepinephrine) combined with intravenous albumin",
        "Hepatorenal syndrome (HRS-AKI) is functional renal vasoconstriction caused by extreme splanchnic arterial vasodilation in portal hypertension, leading to decreased effective circulating volume and renal hypoperfusion. Diagnostic criteria require: (1) Cirrhosis with ascites; (2) AKI without response after 48 hours of diuretic withdrawal and albumin expansion (1 g/kg/day); (3) Absence of shock; and (4) Absence of nephrotoxic drugs, proteinuria (>500 mg/day), or hematuria. The first-line medical treatment is the splanchnic vasoconstrictor TERLIPRESSIN (a vasopressin V1 receptor agonist) combined with INTRAVENOUS ALBUMIN (or norepinephrine plus albumin in ICU), which reverses splanchnic pooling, restores renal perfusion, and improves renal function as a bridge to liver transplantation."
      ],
      [
        "Intravenous boluses of normal saline at 250 mL/h to achieve positive fluid balance",
        "Isotonic crystalloids worsen ascites and peripheral edema without improving effective arterial blood volume; albumin is the plasma expander of choice."
      ],
      [
        "Restart high-dose spironolactone and add oral torsemide to force diuresis",
        "Diuretics worsen renal hypoperfusion and must remain discontinued in hepatorenal syndrome."
      ],
      [
        "Continuous renal replacement therapy as sole definitive therapy without vasoactive agents",
        "Dialysis provides renal support but does not correct the underlying pathophysiological splanchnic vasodilation; vasoactive medical therapy is indicated first."
      ],
      [
        "Intravenous dopamine at low 'renal doses' (2 microg/kg/min)",
        "Low-dose dopamine has been thoroughly disproven and has no efficacy in reversing hepatorenal syndrome or protecting renal tubular function."
      ]
    ],
    "shortestValidSolution": "Cirrhosis + AKI unresponsive to 48h albumin + FeNa < 0.2% + bland urine = Hepatorenal Syndrome (HRS-AKI) -> Terlipressin + IV albumin.",
    "necessaryInference": "Diagnose HRS-AKI (unresponsive to 48h albumin challenge) and select definitive pharmacotherapy: splanchnic vasoconstriction with terlipressin plus albumin.",
    "strongestDistractor": "Intravenous boluses of normal saline at 250 mL/h to achieve positive fluid balance",
    "distractorExclusion": "Crystalloids do not reverse splanchnic vasodilation and exacerbate third-spacing; terlipressin plus albumin directly restores renal perfusion.",
    "citation": "Wong F, et al. Terlipressin plus albumin for the treatment of type 1 hepatorenal syndrome (CONFIRM study). N Engl J Med. 2021;384(9):818-827. PMID: 33657294.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0506",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Severe Acute Pancreatitis Fluid Resuscitation and Enteral Feeding",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old man presents with severe, boring epigastric pain radiating to his back, accompanied by persistent vomiting. Blood pressure is 102/64 mm Hg, pulse is 114/min, and temperature is 37.8\u00b0C (100.0\u00b0F). Abdominal examination reveals intense epigastric tenderness with voluntary guarding. Laboratory studies show: serum lipase 2,850 U/L (normal 10-140 U/L), hematocrit 48% (hemoconcentration), BUN 32 mg/dL, and serum creatinine 1.7 mg/dL. Contrast-enhanced CT performed at 72 hours shows acute interstitial edematous pancreatitis with peripancreatic fluid collections. Which of the following represents the optimal initial management strategy regarding intravenous fluid resuscitation, nutritional support, and antibiotic utilization?",
    "choices": [
      [
        "Goal-directed fluid resuscitation using balanced crystalloids (Lactated Ringer solution), early enteral nutrition via nasogastric/oral route as tolerated within 24 to 48 hours, and avoidance of prophylactic antibiotics",
        "Management of acute pancreatitis is governed by three evidence-based tenets: (1) FLUID RESUSCITATION: Balanced crystalloids (Lactated Ringer) are preferred over normal saline because normal saline causes hyperchloremic non-gap acidosis and triggers worsening acinar cell inflammation. Fluids are administered in a goal-directed manner (titrated to urine output >0.5-1 mL/kg/h and reduction in BUN/hematocrit) while avoiding massive fluid overload; (2) NUTRITIONAL SUPPORT: Early enteral nutrition (oral diet or nasogastric/nasojejunal tube) within 24-48 hours preserves the gut mucosal barrier, prevents bacterial translocation, and reduces infections compared to TPN; and (3) AVOIDANCE OF PROPHYLACTIC ANTIBIOTICS: Multiple randomized trials have proven that prophylactic antibiotics do not prevent infected necrosis or reduce mortality, and increase fungal superinfections."
      ],
      [
        "Rapid infusion of 10 liters of 0.9% normal saline over 12 hours, total parenteral nutrition (TPN) for 14 days, and prophylactic intravenous meropenem",
        "Massive unguided normal saline causes hyperchloremic acidosis and fluid overload; TPN increases infection rates compared to enteral feeding; prophylactic carbapenems are not recommended."
      ],
      [
        "Fluid restriction to < 1 L/day to prevent third-spacing, total gut rest for 7 days, and prophylactic intravenous ciprofloxacin plus metronidazole",
        "Fluid restriction in hemoconcentrated pancreatitis accelerates microvascular pancreatic necrosis and acute tubular necrosis."
      ],
      [
        "Immediate emergent endoscopic retrograde cholangiopancreatography (ERCP) with routine prophylactic pancreatic duct stenting",
        "ERCP is indicated only if co-existing acute cholangitis or persistent biliary obstruction is present, not in uncomplicated interstitial pancreatitis."
      ],
      [
        "Intravenous somatostatin infusion to suppress pancreatic exocrine secretion, accompanied by continuous nasogastric suctioning",
        "Somatostatin analogues and routine nasogastric decompression do not improve clinical outcomes in acute pancreatitis."
      ]
    ],
    "shortestValidSolution": "Acute pancreatitis -> Lactated Ringer goal-directed resuscitation + early enteral nutrition within 24-48h + NO prophylactic antibiotics.",
    "necessaryInference": "Synthesize modern pancreatitis guidelines: balanced crystalloids (LR) over saline, early enteral nutrition over TPN, and strict avoidance of prophylactic antibiotics.",
    "strongestDistractor": "Rapid infusion of 10 liters of 0.9% normal saline over 12 hours, total parenteral nutrition (TPN) for 14 days, and prophylactic intravenous meropenem",
    "distractorExclusion": "Normal saline causes hyperchloremic acidosis, TPN increases infectious mortality compared to enteral nutrition, and prophylactic antibiotics provide no benefit.",
    "citation": "Crockett SD, et al. American Gastroenterological Association Institute guideline on initial management of acute pancreatitis. Gastroenterology. 2018;154(4):1096-1101. PMID: 29409760.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0507",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Infected Pancreatic Necrosis Minimally Invasive Step-Up",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old man has been hospitalized for 3 weeks following a severe episode of acute necrotizing pancreatitis. He initially stabilized, but over the past 3 days, he has developed recrudescent high fevers (temperature 39.1\u00b0C / 102.4\u00b0F), leukocytosis (WBC 22,000/microL with 18% bands), and worsening abdominal distention. Contrast-enhanced CT of the abdomen demonstrates a 12-cm encapsulated collection of walled-off pancreatic necrosis (WOPN) in the lesser sac containing multiple foci of extraluminal gas bubbles. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Initiate intravenous broad-spectrum antibiotics (such as meropenem) and pursue a minimally invasive 'step-up' approach beginning with percutaneous catheter drainage or endoscopic transluminal drainage",
        "The presence of gas within pancreatic necrosis 3-4 weeks after onset is diagnostic of INFECTED PANCREATIC NECROSIS. The management standard is the MINIMALLY INVASIVE 'STEP-UP' APPROACH: (1) Immediate initiation of IV antibiotics that penetrate pancreatic necrosis (carbapenems or fluoroquinolones + metronidazole); (2) Drainage as the first step: percutaneous retroperitoneal catheter drainage or endoscopic ultrasound-guided transluminal drainage (cystogastrostomy). Drainage alone resolves sepsis in ~35-50% of patients without surgery; and (3) If sepsis persists after 72 hours, step up to minimally invasive retroperitoneal necrosectomy (VARD) or endoscopic necrosectomy. Open surgical necrosectomy has been abandoned as first-line therapy because it carries massive morbidity (40% mortality, high fistula rates)."
      ],
      [
        "Perform immediate open surgical necrosectomy with packing and planned daily laparotomies",
        "Immediate open necrosectomy was proven inferior to the minimally invasive step-up approach in the landmark PANTER trial, with significantly higher rates of major complications and mortality."
      ],
      [
        "Perform percutaneous fine-needle aspiration of the collection for Gram stain and culture before considering antibiotics",
        "Gas on CT confirms infected necrosis; FNA is no longer required and delays therapy."
      ],
      [
        "Administer high-dose intravenous octreotide and maintain prolonged bowel rest with TPN",
        "Octreotide does not treat infected walled-off necrosis; physical source control (drainage) is mandatory."
      ],
      [
        "Perform emergent transhepatic cholecystostomy tube placement under ultrasound guidance",
        "Cholecystostomy treats acute cholecystitis in non-surgical candidates, not infected lesser-sac pancreatic necrosis."
      ]
    ],
    "shortestValidSolution": "Pancreatic necrosis at 3 weeks + fever/leukocytosis + gas bubbles on CT = Infected WOPN -> IV carbapenem + minimally invasive step-up drainage (percutaneous/endoscopic).",
    "necessaryInference": "Identify infected pancreatic necrosis (gas on CT) and select the evidence-based minimally invasive step-up approach over open necrosectomy.",
    "strongestDistractor": "Perform immediate open surgical necrosectomy with packing and planned daily laparotomies",
    "distractorExclusion": "The PANTER trial demonstrated that open necrosectomy has much higher mortality and morbidity than the minimally invasive step-up catheter approach.",
    "citation": "van Santvoort HC, et al. A step-up approach or open necrosectomy for necrotizing pancreatitis (PANTER trial). N Engl J Med. 2010;362(16):1491-1502. PMID: 20410514.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0508",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Cholangitis Tokyo Guidelines and Decompression Timing",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old woman presents to the emergency department with severe right upper quadrant abdominal pain, shaking chills, and yellow discoloration of her eyes. On physical examination, she is febrile (temperature 39.2\u00b0C / 102.6\u00b0F), blood pressure is 86/52 mm Hg, pulse is 124/min, and she is confused and somnolent (Reynolds pentad). Abdominal examination demonstrates exquisite tenderness in the right upper quadrant. Laboratory studies show: WBC count 18,500/microL with 14% bands, total bilirubin 7.2 mg/dL, direct bilirubin 5.4 mg/dL, alkaline phosphatase 480 U/L, and serum lactate 3.8 mmol/L. Abdominal ultrasound demonstrates a dilated common bile duct measuring 14 mm with an obstructing choledocholithiasis at the distal ampulla. Following initial aggressive fluid resuscitation and intravenous piperacillin-tazobactam administration, which of the following is the most critical next intervention?",
    "choices": [
      [
        "Emergent biliary decompression via endoscopic retrograde cholangiopancreatography (ERCP) within 24 hours (or sooner if hemodynamically unstable)",
        "This patient presents with severe (Grade III) ACUTE CHOLANGITIS characterized by Reynolds pentad (Charcot triad of RUQ pain, fever, and jaundice, PLUS hypotension and altered mental status). Obstruction of the common bile duct by a gallstone produces high intrabiliary pressures, forcing bacteria (E. coli, Klebsiella, Enterococcus) into the hepatic venous circulation, causing life-threatening sepsis. According to the Tokyo Guidelines, patients with acute cholangitis who have septic shock or organ dysfunction require two immediate steps: (1) Fluid resuscitation and broad-spectrum IV antibiotics; and (2) URGENT/EMERGENT BILIARY DECOMPRESSION via ERCP with sphincterotomy and stone extraction (or biliary stenting). Delaying decompression beyond 24-48 hours leads to irreversible septic shock and multi-organ failure."
      ],
      [
        "Emergency open surgical common bile duct exploration with T-tube placement",
        "Open surgical CBD exploration carries high operative mortality (>20%) in hemodynamically unstable patients; minimally invasive endoscopic ERCP is the standard of care."
      ],
      [
        "Elective laparoscopic cholecystectomy scheduled during the current admission once liver enzymes normalize",
        "Cholecystectomy treats the gallbladder stone reservoir, but does NOT decompress the obstructed infected common bile duct driving life-threatening sepsis."
      ],
      [
        "Continuous intravenous infusion of octreotide and broad-spectrum oral ursodeoxycholic acid",
        "Pharmacotherapy cannot relieve mechanical ampullary obstruction; mechanical biliary decompression is mandatory."
      ],
      [
        "Immediate diagnostic magnetic resonance cholangiopancreatography (MRCP) without intervention",
        "Diagnostic MRCP does not provide therapeutic decompression and unnecessarily delays emergent ERCP in a patient with ultrasound-proven choledocholithiasis and shock."
      ]
    ],
    "shortestValidSolution": "RUQ pain + fever + jaundice + shock + confusion = Severe acute cholangitis (Reynolds pentad) -> emergent biliary decompression via ERCP (<24h).",
    "necessaryInference": "Recognize Reynolds pentad as an absolute emergency requiring urgent biliary decompression (ERCP) to relieve infected biliary hypertension.",
    "strongestDistractor": "Emergency open surgical common bile duct exploration with T-tube placement",
    "distractorExclusion": "Open surgical exploration is associated with severe morbidity in septic patients; ERCP provides safe, rapid, minimally invasive endoscopic drainage.",
    "citation": "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018;25(1):17-30. PMID: 29032610.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0509",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Gallstone Pancreatitis Cholecystectomy Timing",
    "provisionalDifficulty": 5,
    "stem": "A 38-year-old woman is admitted with mild acute gallstone pancreatitis. Transabdominal ultrasound demonstrates multiple small gallstones in the gallbladder without gallbladder wall thickening, and a common bile duct measuring 6 mm without choledocholithiasis. Over the next 48 hours, her abdominal pain resolves completely, serum lipase normalizes, and she tolerates a regular oral diet without nausea. She is feeling well and asks when she can undergo definitive surgical treatment. Which of the following is the most appropriate recommendation regarding the timing of cholecystectomy for this patient?",
    "choices": [
      [
        "Perform laparoscopic cholecystectomy during the index hospitalization prior to discharge",
        "In patients with mild acute gallstone pancreatitis whose symptoms and laboratory abnormalities have resolved, clinical guidelines (ACG, IAP/APA) strongly recommend LAPAROSCOPIC CHOLECYSTECTOMY DURING THE INDEX HOSPITALIZATION. Deferring cholecystectomy for 4-6 weeks post-discharge is associated with a 25-30% rate of recurrent biliary complications (recurrent acute pancreatitis, acute cholangitis, acute cholecystitis) within the waiting period, with many occurring within the first 2 weeks. Index admission cholecystectomy is safe, prevents recurrent pancreatitis, and reduces total hospital stay."
      ],
      [
        "Discharge the patient with elective cholecystectomy scheduled 6 to 8 weeks later to allow all pericholecystic inflammation to completely subside",
        "Delaying surgery for 6-8 weeks exposes the patient to an unacceptably high risk (~30%) of recurrent, potentially fatal pancreatitis within the first month."
      ],
      [
        "Prescribe lifelong oral ursodeoxycholic acid therapy and counsel against surgical intervention",
        "Ursodeoxycholic acid takes months to dissolve cholesterol stones and is ineffective for acute biliary prevention; surgery is curative."
      ],
      [
        "Perform routine prophylactic endoscopic sphincterotomy and avoid cholecystectomy",
        "Endoscopic sphincterotomy reduces cholangitis risk but does not eliminate gallbladder stone complications (cholecystitis) and is inferior to cholecystectomy."
      ],
      [
        "Perform open subtotal cholecystectomy with mandatory intraoperative common bile duct exploration",
        "Routine open subtotal surgery and CBD exploration are unnecessary for uncomplicated gallbladder stones with a normal 6-mm bile duct."
      ]
    ],
    "shortestValidSolution": "Mild gallstone pancreatitis resolved -> Laparoscopic cholecystectomy during the index admission prior to discharge (prevents ~30% recurrent attacks).",
    "necessaryInference": "Apply evidence-based timing for gallstone pancreatitis: perform laparoscopic cholecystectomy during index hospitalization to prevent recurrent attacks.",
    "strongestDistractor": "Discharge the patient with elective cholecystectomy scheduled 6 to 8 weeks later to allow all pericholecystic inflammation to completely subside",
    "distractorExclusion": "Postponing cholecystectomy for 6-8 weeks carries a 25-30% rate of recurrent biliary events (pancreatitis, cholangitis) within 30 days.",
    "citation": "da Costa DW, et al. Same-admission versus delayed cholecystectomy for mild gallstone pancreatitis (PONCHO trial). Lancet. 2015;386(10000):1261-1268. PMID: 26460662.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0510",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Fulminant Clostridioides Difficile Surgical Indications",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old woman who completed a 14-day course of clindamycin for an aspiration pneumonia develops profuse, foul-smelling watery diarrhea (12 episodes/day), severe abdominal cramping, and delirium. On physical examination, she is in shock: blood pressure 82/46 mm Hg (requiring norepinephrine infusion), pulse 128/min, and temperature 39.0\u00b0C (102.2\u00b0F). Her abdomen is markedly distended, tympanitic, and diffusely tender with peritoneal guarding and absent bowel sounds. Laboratory evaluation demonstrates: WBC count 38,000/microL with 15% bands, serum creatinine 3.4 mg/dL (baseline 0.9 mg/dL), and serum lactate 5.2 mmol/L. Abdominal radiography reveals marked transverse colonic dilatation measuring 9.5 cm (toxic megacolon). Stool PCR is positive for Clostridioides difficile toxin B. Which of the following represents the optimal medical and surgical management strategy for this patient?",
    "choices": [
      [
        "Initiate high-dose oral vancomycin (via nasogastric tube) combined with intravenous metronidazole and rectal vancomycin enemas, and obtain an immediate emergency surgical consultation for subtotal colectomy or diverting loop ileostomy with colonic lavage",
        "Fulminant Clostridioides difficile infection (CDI) is defined by hypotension/shock, ileus, or toxic megacolon (cecal diameter >10-12 cm or transverse colon >6 cm). When ileus is present, oral medications cannot reach the colon; therefore, multimodal medical therapy is indicated: (1) Oral/nasogastric VANCOMYCIN (500 mg Q6H); (2) INTRAVENOUS METRONIDAZOLE (500 mg Q8H); and (3) RECTAL VANCOMYCIN ENEMAS (500 mg in 100 mL saline Q6H). Crucially, patients with fulminant CDI with shock, marked leukocytosis (>20,000-50,000), elevated lactate (>5 mmol/L), or toxic megacolon require IMMEDIATE EMERGENCY SURGICAL CONSULTATION: subtotal colectomy with end ileostomy, or diverting loop ileostomy with intraoperative colonic lavage, reduces mortality when performed before irreversible septic shock ensues."
      ],
      [
        "Administer oral fidaxomicin monotherapy (200 mg BID) and observe for 72 hours in the medical intensive care unit",
        "Fidaxomicin is excellent for non-fulminant CDI, but oral monotherapy is ineffective in fulminant CDI with ileus/shock and delaying surgery is fatal."
      ],
      [
        "Perform emergency colonoscopy to mechanically detorse the dilated colon and apply fecal microbiota transplantation",
        "Colonoscopy in toxic megacolon carries a catastrophic risk of colonic perforation and is strictly contraindicated."
      ],
      [
        "Administer high-dose intravenous loperamide to decrease diarrheal volume combined with intravenous ceftriaxone",
        "Antimotility agents (loperamide) worsen toxic megacolon by trapping toxins and precipitating colonic perforation, and are strictly contraindicated."
      ],
      [
        "Infuse monoclonal bezlotoxumab antibody alone without antimicrobial therapy",
        "Bezlotoxumab prevents recurrent CDI; it has no antimicrobial activity and no role in acute fulminant infection."
      ]
    ],
    "shortestValidSolution": "C. difficile + shock + WBC 38k + lactate 5.2 + toxic megacolon (9.5 cm) = Fulminant CDI -> high-dose oral/rectal vanco + IV metronidazole + emergent surgery consult.",
    "necessaryInference": "Recognize fulminant CDI and select appropriate triple therapy (oral/rectal vanco + IV metronidazole) alongside prompt surgical evaluation for colectomy/ileostomy.",
    "strongestDistractor": "Administer oral fidaxomicin monotherapy (200 mg BID) and observe for 72 hours in the medical intensive care unit",
    "distractorExclusion": "Oral monotherapy fails in ileus because drug does not reach the colon; delaying surgical consultation with a lactate of 5.2 and megacolon leads to fatal perforation.",
    "citation": "Johnson S, et al. Clinical practice guideline by the IDSA and SHEA: 2021 focused update guidelines on management of Clostridioides difficile infection. Clin Infect Dis. 2021;73(5):e1029-e1044. PMID: 34164648.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0511",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Mesenteric Ischemia CTA Diagnosis and Laparotomy",
    "provisionalDifficulty": 5,
    "stem": "A 76-year-old woman with chronic atrial fibrillation who is non-compliant with apixaban presents with sudden, excruciating, diffuse abdominal pain that began 3 hours ago. She has had two episodes of bilious vomiting and one loose bowel movement. On physical examination, she is in extreme agony, writhing on the stretcher. Temperature is 37.4\u00b0C, blood pressure is 154/92 mm Hg, and pulse is 118/min (irregularly irregular). Her abdomen is soft, mildly distended, without focal tenderness, guarding, or rigidity ('pain entirely out of proportion to physical examination findings'). Rectal examination demonstrates heme-negative stool. Laboratory studies show: WBC count 16,800/microL, serum lactate 2.8 mmol/L (mildly elevated), and normal amylase. Which of the following is the most appropriate next diagnostic step?",
    "choices": [
      [
        "Computed tomography angiography (CTA) of the abdomen and pelvis with intravenous contrast (biphasic mesenteric protocol)",
        "Acute mesenteric ischemia (AMI), most commonly caused by superior mesenteric artery (SMA) embolism from atrial fibrillation, presents with sudden, severe, periumbilical pain characteristically 'OUT OF PROPORTION TO PHYSICAL EXAMINATION' (soft, non-tender abdomen early on). If not diagnosed rapidly, transmural bowel infarction, peritonitis, gangrene, and death occur. The diagnostic test of choice is BIPHASIC COMPUTED TOMOGRAPHY ANGIOGRAPHY (CTA) of the abdomen and pelvis with IV contrast (sensitivity and specificity >95%), which visualizes emboli/thrombi in mesenteric vessels and assesses bowel wall viability (thinning, pneumatosis intestinalis). If CTA confirms vascular occlusion, prompt intervention (endovascular revascularization or emergency laparotomy for signs of peritonitis) is performed."
      ],
      [
        "Non-contrast computed tomography of the abdomen and pelvis to avoid contrast nephropathy",
        "Non-contrast CT cannot visualize mesenteric arterial or venous vascular occlusion, which is essential to diagnose AMI; contrast is never withheld for suspected mesenteric ischemia."
      ],
      [
        "Plain abdominal radiographs (kidney, ureter, bladder series) to rule out mechanical bowel obstruction",
        "Plain radiographs are normal in >75% of early AMI and only show late, catastrophic findings (portal venous gas, pneumatosis, perforation)."
      ],
      [
        "Emergency colonoscopy to inspect the colonic mucosa for ischemic mucosal pallor",
        "Colonoscopy evaluates the colon (ischemic colitis), but cannot evaluate the small bowel supplied by the SMA and risks perforation from air insufflation."
      ],
      [
        "Upper gastrointestinal endoscopy to rule out bleeding peptic ulcer disease",
        "Upper endoscopy cannot visualize mesenteric arterial occlusion or small bowel ischemia."
      ]
    ],
    "shortestValidSolution": "Atrial fibrillation + sudden severe abdominal pain out of proportion to exam = Acute mesenteric ischemia -> Biphasic CTA abdomen/pelvis.",
    "necessaryInference": "Identify acute mesenteric ischemia (SMA embolus from afib) and select biphasic CTA as the definitive, rapid diagnostic modality.",
    "strongestDistractor": "Non-contrast computed tomography of the abdomen and pelvis to avoid contrast nephropathy",
    "distractorExclusion": "Non-contrast CT fails to visualize vascular thrombi; contrast must never be withheld when acute mesenteric ischemia is suspected.",
    "citation": "Bala M, et al. Acute mesenteric ischemia: guidelines of the World Society of Emergency Surgery. World J Emerg Surg. 2017;12:38. PMID: 28794797.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0512",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Ischemic Colitis Watershed Distribution and Management",
    "provisionalDifficulty": 5,
    "stem": "A 78-year-old woman undergoes elective repair of an infrarenal abdominal aortic aneurysm. On postoperative day 2, she develops sudden crampy left lower quadrant abdominal pain followed by the passage of multiple loose, bloody, maroon stools (hematochezia). Blood pressure is 112/68 mm Hg, pulse is 88/min, and temperature is 37.6\u00b0C. Physical examination reveals moderate tenderness over the left lower quadrant without peritoneal signs or guarding. Colonoscopy is performed: examination reveals patchy, erythematous, edematous mucosa with friability, submucosal hemorrhages, and longitudinal ulcerations sharply localized to the splenic flexure and descending colon, while the rectum and ascending colon appear completely normal. Which of the following explains the anatomical localization of the mucosal injury, and what is the appropriate management?",
    "choices": [
      [
        "Hypoperfusion of the Griffith point (splenic flexure) watershed territory between the superior and inferior mesenteric arteries; conservative medical management with intravenous fluids, bowel rest, and broad-spectrum antibiotics",
        "Ischemic colitis is the most common form of intestinal ischemia, occurring in elderly patients following transient systemic hypoperfusion (hypotension, major vascular surgery, hemodialysis). The classic sites are 'WATERSHED' ZONES that lie at the junctions of major arterial territories: (1) GRIFFITH'S POINT at the SPLENIC FLEXURE (junction of SMA and IMA); and (2) SUDECK'S POINT at the RECTOSIGMOID junction (junction of IMA and hypogastric/internal iliac). The rectum is characteristically SPARED due to dual internal iliac perfusion. Clinical presentation is mild crampy left-sided pain followed by hematochezia. Most cases (>80%) involve only mucosal/submucosal ischemia and resolve with CONSERVATIVE MEDICAL MANAGEMENT (IV fluids, bowel rest, broad-spectrum antibiotics). Emergent surgical resection is reserved for full-thickness gangrene, peritonitis, or stricture."
      ],
      [
        "Complete embolic occlusion of the celiac trunk; emergency exploratory laparotomy and total proctocolectomy",
        "Celiac trunk supplies foregut structures (stomach, liver, spleen), not the splenic flexure; proctocolectomy is unnecessary for localized mucosal ischemia."
      ],
      [
        "Bacterial invasion by enterohemorrhagic E. coli; immediate initiation of oral metronidazole",
        "Postoperative watershed ischemia is a non-occlusive hemodynamic event, not infectious colitis."
      ],
      [
        "Active mechanical torsion of the redundant sigmoid mesocolon; immediate endoscopic detorsion with flexible sigmoidoscopy",
        "Sigmoid volvulus causes large bowel obstruction with a coffee-bean sign on X-ray, not patchy mucosal ischemia at the splenic flexure."
      ],
      [
        "Autoimmune vasculitis of the perirectal plexus; high-dose intravenous corticosteroid pulse therapy",
        "Ischemic colitis is non-inflammatory hypoperfusion, not vasculitis; corticosteroids increase the risk of bowel perforation and are contraindicated."
      ]
    ],
    "shortestValidSolution": "Post-AAA repair + left lower quadrant pain + hematochezia + splenic flexure ulceration = Ischemic colitis (Griffith's point watershed) -> conservative fluids/bowel rest.",
    "necessaryInference": "Localize the colonic watershed zones (Griffith's point at splenic flexure) and identify conservative supportive management for non-gangrenous ischemic colitis.",
    "strongestDistractor": "Complete embolic occlusion of the celiac trunk; emergency exploratory laparotomy and total proctocolectomy",
    "distractorExclusion": "Celiac trunk supplies stomach/liver; ischemic colitis affects watershed junctions of SMA and IMA and is managed conservatively without surgery unless peritonitis develops.",
    "citation": "Montoro MA, et al. Clinical features and outcomes of ischemic colitis. Eur J Gastroenterol Hepatol. 2011;23(8):660-670. PMID: 21654526.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0513",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Boerhaave Syndrome Gastrografin Esophagogram",
    "provisionalDifficulty": 5,
    "stem": "A 46-year-old man presents with sudden-onset excruciating lower chest and upper abdominal pain that began immediately after an episode of violent, repeated retching and vomiting following heavy alcohol consumption. He is diaphoretic and dyspneic. Physical examination reveals blood pressure 104/62 mm Hg, pulse 118/min, and temperature 38.4\u00b0C (101.1\u00b0F). Palpation of the anterior neck and supraclavicular fossae reveals palpable crepitus (subcutaneous emphysema). Auscultation of the heart reveals a distinct crunching, raspy sound synchronous with each heartbeat (Hamman crunch). Chest radiograph demonstrates pneumomediastinum, subcutaneous emphysema, and a left-sided pleural effusion. Which of the following is the most appropriate next diagnostic step to confirm the diagnosis?",
    "choices": [
      [
        "Water-soluble contrast (Gastrografin) esophagogram, followed by dilute barium if negative",
        "Boerhaave syndrome (effort rupture of the esophagus) is a full-thickness transmural perforation of the esophagus, most commonly localized to the left posterolateral wall of the distal intrathoracic esophagus (2-3 cm above the GE junction), caused by sudden elevation in intraluminal pressure against a closed cricopharyngeus during forceful retching. Clinical triad (Mackler triad): vomiting, lower chest pain, and subcutaneous emphysema (crepitus). Mediastinal air produces Hamman crunch. The definitive diagnostic test is a CONTRAST ESOPHAGOGRAM: initial imaging MUST be performed with WATER-SOLUBLE CONTRAST (Gastrografin / diatrizoate meglumine) because extravasated barium induces severe mediastinal granulomatous fibrosis. If Gastrografin is negative but suspicion remains high, dilute barium is administered to detect small tears."
      ],
      [
        "Immediate upper gastrointestinal endoscopy (EGD) to directly visualize the mucosal tear",
        "Endoscopy is strictly contraindicated in suspected Boerhaave syndrome because air insufflation rapidly expands pneumomediastinum, causes tension pneumothorax, and worsens contamination."
      ],
      [
        "Esophageal manometry to assess the lower esophageal sphincter resting tone",
        "Manometry is used for motility disorders (achalasia) and would cause catastrophic contamination in perforation."
      ],
      [
        "Barium esophagogram as the sole initial imaging study",
        "Barium causes severe chemical mediastinitis and permanent mediastinal fibrosis if it leaks outside the esophagus; water-soluble contrast must be used first."
      ],
      [
        "Diagnostic thoracentesis of the left pleural effusion without esophageal imaging",
        "Thoracentesis may show low pH and elevated amylase, but esophagogram is required to define the exact anatomical site of perforation for surgical repair."
      ]
    ],
    "shortestValidSolution": "Violent vomiting + chest pain + subcutaneous emphysema (Hamman crunch) + pneumomediastinum = Boerhaave syndrome -> Water-soluble (Gastrografin) esophagogram.",
    "necessaryInference": "Recognize Boerhaave syndrome and select water-soluble contrast esophagogram (Gastrografin) first to prevent barium-induced chemical mediastinitis.",
    "strongestDistractor": "Immediate upper gastrointestinal endoscopy (EGD) to directly visualize the mucosal tear",
    "distractorExclusion": "Endoscopy is contraindicated because luminal air insufflation forces air and gastric contents into the mediastinum and pleural spaces.",
    "citation": "Chirica M, et al. Esophageal perforations. Lancet. 2010;375(9723):1387-1398. PMID: 20399980.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0514",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Ogilvie Syndrome Neostigmine Decompression",
    "provisionalDifficulty": 5,
    "stem": "A 76-year-old man who underwent total knee arthroplasty 4 days ago develops progressive abdominal distention, nausea, and obstipation. He is receiving scheduled oral oxycodone and intravenous acetaminophen. On physical examination, his abdomen is massively distended and tympanitic; bowel sounds are hypoactive, and there is no localized tenderness, guarding, or rigidity. Abdominal CT demonstrates massive, continuous dilatation of the cecum and ascending colon with a cecal diameter of 11.5 cm, without transition point, mechanical obstructing mass, or pneumoperitoneum. Electrolytes demonstrate potassium 3.8 mEq/L and magnesium 1.9 mg/dL. He undergoes 24 hours of conservative management (opioid cessation, nasogastric decompression, rectal tube placement) without clinical or radiographic improvement. Which of the following is the most appropriate pharmacologic intervention?",
    "choices": [
      [
        "Intravenous neostigmine infusion under continuous cardiac telemetry monitoring",
        "Acute colonic pseudo-obstruction (Ogilvie syndrome) is massive non-mechanical colonic dilation, typically occurring in hospitalized elderly patients with surgical trauma, severe illness, or medications that disrupt autonomic innervation (excess sympathetic or deficient parasympathetic tone). The cecum is at highest risk for perforation when diameter exceeds 10-12 cm (Laplace law: wall tension = pressure * radius). In patients failing 24-48 hours of conservative management, the pharmacological treatment of choice is INTRAVENOUS NEOSTIGMINE (acetylcholinesterase inhibitor). By increasing acetylcholine at parasympathetic muscarinic receptors, neostigmine triggers coordinated colonic motor contractions, decompressing the colon in >85% of cases within 30 minutes. CONTINUOUS TELEMETRY MONITORING and bedside atropine are mandatory due to the risk of symptomatic BRADYCARDIA."
      ],
      [
        "Intravenous high-dose metoclopramide infusion",
        "Metoclopramide accelerates gastric emptying and small bowel transit, but has minimal prokinetic effect on the colon and is ineffective for Ogilvie syndrome."
      ],
      [
        "Oral bisacodyl and senna high-dose stimulant laxatives",
        "Oral stimulant laxatives can precipitate colonic perforation when the cecum is massively dilated to >11 cm."
      ],
      [
        "Intravenous erythromycin infusion",
        "Erythromycin is a motilin receptor agonist that acts on the stomach and upper GI tract, not the colon."
      ],
      [
        "Emergent exploratory laparotomy with total abdominal colectomy",
        "Surgery is reserved for perforation, peritonitis, or failure of neostigmine and endoscopic decompression; surgery is not first-line."
      ]
    ],
    "shortestValidSolution": "Postoperative elderly patient + massive cecal dilation (11.5 cm) without obstruction = Ogilvie syndrome -> IV neostigmine under telemetry monitoring.",
    "necessaryInference": "Select IV neostigmine under cardiac telemetry for Ogilvie syndrome failing conservative therapy, recognizing the bradycardia risk and Laplace's law for cecal rupture.",
    "strongestDistractor": "Emergent exploratory laparotomy with total abdominal colectomy",
    "distractorExclusion": "Surgery carries high morbidity and is reserved for frank ischemia or perforation; IV neostigmine resolves pseudo-obstruction pharmacologically in >85% of cases.",
    "citation": "Ponec RJ, et al. Neostigmine for the treatment of acute colonic pseudo-obstruction. N Engl J Med. 1999;341(3):137-141. PMID: 10403850.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0515",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Sigmoid Volvulus Endoscopic Detorsion vs Surgery",
    "provisionalDifficulty": 5,
    "stem": "An 80-year-old nursing home resident with Parkinson disease and chronic constipation presents with progressive abdominal distention, obstipation, and vomiting over 2 days. Physical examination reveals an asymmetric, markedly tympanitic abdomen with mild diffuse tenderness but no rebound, guarding, or rigidity. Abdominal radiograph demonstrates a massive, dilated, air-filled loop of bowel arising from the pelvis and projecting toward the right upper quadrant, with an inverted U-shape resembling a 'coffee bean' with loss of haustra. Laboratory studies show WBC 7,800/microL and normal lactate. Which of the following is the most appropriate initial therapeutic intervention, and what definitive surgical management is indicated?",
    "choices": [
      [
        "Perform urgent flexible sigmoidoscopy for endoscopic detorsion and placement of a rectal tube, followed by semi-elective sigmoid resection during the same hospitalization",
        "Sigmoid volvulus is the twisting of a redundant, mobile sigmoid colon around its mesentery, common in elderly, bedridden patients with neuropsychiatric disease and chronic laxative use. Plain radiograph characteristically demonstrates the 'COFFEE-BEAN SIGN' (inverted U-loop with apex pointing toward the right upper quadrant). In the absence of peritonitis, bowel gangrene, or perforation, the initial treatment of choice is URGENT FLEXIBLE SIGMOIDOSCOPY (or rigid proctoscopy) to achieve ENDOSCOPIC DETORSION. The scope untwists the volvulus, immediately releasing a large volume of flatus and liquid stool. A temporary rectal tube is left in place. However, recurrence occurs in >50-70% of patients; therefore, SEMI-ELECTIVE SIGMOID COLECTOMY is strongly indicated during the index hospitalization once the patient is stabilized."
      ],
      [
        "Perform emergent open sigmoid colectomy with Hartmann end colostomy as the initial intervention",
        "Hartmann procedure is reserved for patients with frank peritonitis, bowel gangrene, or failed endoscopic detorsion; uncomplicated volvulus is managed with endoscopic reduction first."
      ],
      [
        "Perform percutaneous cecostomy tube placement under fluoroscopic guidance",
        "Cecostomy is used for isolated cecal pathology, not sigmoid volvulus."
      ],
      [
        "Administer high-dose intravenous neostigmine and observe on the floor",
        "Neostigmine treats non-mechanical pseudo-obstruction (Ogilvie); it cannot untwist an anatomical mechanical sigmoid volvulus."
      ],
      [
        "Perform total proctocolectomy with ileal pouch-anal anastomosis",
        "Total proctocolectomy is indicated for ulcerative colitis or FAP, not isolated sigmoid volvulus."
      ]
    ],
    "shortestValidSolution": "Elderly + coffee-bean sign pointing to RUQ + no peritonitis = Sigmoid volvulus -> urgent flexible sigmoidoscopy detorsion + index admission sigmoid resection.",
    "necessaryInference": "Differentiate initial non-operative detorsion (flexible sigmoidoscopy) from definitive index-admission sigmoid resection to prevent recurrence in sigmoid volvulus.",
    "strongestDistractor": "Perform emergent open sigmoid colectomy with Hartmann end colostomy as the initial intervention",
    "distractorExclusion": "Emergency Hartmann resection carries high operative morbidity; initial endoscopic detorsion successfully reduces the volvulus, converting an emergency into a safe semi-elective resection.",
    "citation": "Gingold D, Murrell Z. Management of colonic volvulus. Clin Colon Rectal Surg. 2012;25(4):236-244. PMID: 24294126.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0516",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Cecal Volvulus Emergency Surgical Resection",
    "provisionalDifficulty": 5,
    "stem": "A 34-year-old marathon runner presents with acute, severe, crampy right lower quadrant and periumbilical pain, accompanied by vomiting and obstipation. Physical examination reveals blood pressure 138/84 mm Hg, pulse 102/min, and an empty rectal ampulla. Her abdomen is distended and tympanitic, with localized tenderness in the right lower and mid-abdomen. Abdominal radiograph demonstrates a large, kidney-shaped, dilated air-filled loop of bowel in the mid-abdomen and left upper quadrant with haustral markings, along with collapsed distal colon. Contrast-enhanced CT confirms a twisted, mobile cecum oriented toward the left upper quadrant with a distinct mesenteric 'whirl sign'. There is no free air. Which of the following is the most appropriate management for this patient?",
    "choices": [
      [
        "Immediate emergent exploratory laparotomy with right hemicolectomy and ileocolic anastomosis (or cecopexy if viable)",
        "Cecal volvulus is the axial torsion of a mobile cecum and ascending colon resulting from incomplete embryologic retroperitoneal fixation. Unlike sigmoid volvulus, CECAL VOLVULUS CANNOT BE SAFELY REDUCED ENDOSCOPICALLY: colonoscopic detorsion has an extremely low success rate (<30%), high risk of colonic perforation, and delays definitive care. The definitive treatment of choice is IMMEDIATE SURGICAL INTERVENTION (exploratory laparotomy). If bowel gangrene or ischemia is present, RIGHT HEMICOLECTOMY with ileocolic anastomosis is mandatory; if the bowel is completely viable, right hemicolectomy or cecopexy (fixation to the lateral abdominal wall) is performed."
      ],
      [
        "Urgent colonoscopy with attempted endoscopic detorsion and decompression",
        "Colonoscopic detorsion is contraindicated in cecal volvulus due to low efficacy (<30%), high failure rate, and risk of precipitating cecal perforation."
      ],
      [
        "Administration of intravenous neostigmine under cardiac telemetry monitoring",
        "Neostigmine treats non-mechanical Ogilvie pseudo-obstruction; it is ineffective and dangerous in mechanical closed-loop volvulus."
      ],
      [
        "Placement of a long Cantor intestinal tube for conservative decompression",
        "Intestinal tubes cannot untwist a mechanical closed-loop volvulus and delay emergency surgery, risking strangulation."
      ],
      [
        "High-volume water-soluble contrast enema to achieve hydrostatic reduction",
        "Hydrostatic enema reduction is used for pediatric intussusception, but is unsafe and ineffective for adult cecal volvulus."
      ]
    ],
    "shortestValidSolution": "Kidney-shaped dilated loop pointing to LUQ + mesenteric 'whirl sign' = Cecal volvulus -> immediate surgical laparotomy with right hemicolectomy.",
    "necessaryInference": "Contrast cecal volvulus (requires immediate surgical resection/cecopexy; endoscopy fails) with sigmoid volvulus (initial endoscopic detorsion).",
    "strongestDistractor": "Urgent colonoscopy with attempted endoscopic detorsion and decompression",
    "distractorExclusion": "Endoscopic detorsion works for sigmoid volvulus, but is ineffective and dangerous in cecal volvulus, where immediate surgical exploration is required.",
    "citation": "Consorti ET, Liu TH. Diagnosis and treatment of caecal volvulus. Postgrad Med J. 2005;81(962):772-776. PMID: 16344301.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0517",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Peptic Ulcer Perforation Graham Patch Repair",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man who has been taking daily over-the-counter naproxen for chronic osteoarthritis presents with sudden-onset, excruciating abdominal pain that began 2 hours ago. He describes feeling as if 'a knife was stabbed through my stomach.' On physical examination, he lies completely still with shallow respirations; his entire abdomen is rigid and hard like a wooden board (board-like rigidity), with diffuse exquisite tenderness and rebound tenderness. An upright chest radiograph demonstrates a prominent crescent of free air beneath the right hemidiaphragm (pneumoperitoneum). Blood pressure is 108/68 mm Hg, and pulse is 112/min. Which of the following is the most appropriate sequence of management?",
    "choices": [
      [
        "Immediate aggressive intravenous crystalloid resuscitation, intravenous broad-spectrum antibiotics, intravenous proton pump inhibitor, and emergent surgical laparotomy for Graham patch (omental patch) repair",
        "Perforated peptic ulcer disease (most commonly anterior duodenal bulb or prepyloric gastric ulcer) is a surgical emergency presenting with sudden, severe peritonitis ('board-like rigidity') and pneumoperitoneum (subdiaphragmatic free air on upright chest X-ray). Management requires rapid resuscitation: (1) Aggressive IV crystalloid resuscitation to correct hypovolemia; (2) Broad-spectrum IV antibiotics covering enteric gram-negative rods, anaerobes, and oral flora; (3) High-dose IV proton pump inhibitor; and (4) IMMEDIATE EMERGENT SURGICAL INTERVENTION (laparoscopic or open laparotomy) with primary closure reinforced by a vascularized pedicle of omentum (GRAHAM PATCH / CELLAN-JONES REPAIR) and peritoneal washout."
      ],
      [
        "Immediate urgent esophagogastroduodenoscopy (EGD) to deploy endoscopic hemoclips over the perforation site",
        "Endoscopy is strictly contraindicated in free peptic ulcer perforation because air insufflation causes massive tension pneumoperitoneum and worsens fecal/gastric contamination."
      ],
      [
        "Placement of a nasogastric tube and conservative medical management with intravenous antibiotics alone",
        "Conservative medical management (Taylor approach) is restricted to rare, stable patients with documented sealed-off perforations; diffuse board-like peritonitis requires immediate surgery."
      ],
      [
        "Emergency barium swallow to determine whether the perforation is actively leaking",
        "Barium causes chemical peritonitis and fatal granulomatous adhesions when extravasated into the peritoneal cavity."
      ],
      [
        "CT-guided percutaneous catheter drainage of the subdiaphragmatic air",
        "Percutaneous drainage does not close the visceral perforation and is ineffective for diffuse peritonitis."
      ]
    ],
    "shortestValidSolution": "Sudden severe pain + board-like rigidity + free air under diaphragm = Perforated peptic ulcer -> IV fluids/antibiotics/PPI + emergent surgery (Graham patch).",
    "necessaryInference": "Identify perforated peptic ulcer emergency and select immediate resuscitation followed by surgical Graham omental patch repair, avoiding endoscopy.",
    "strongestDistractor": "Immediate urgent esophagogastroduodenoscopy (EGD) to deploy endoscopic hemoclips over the perforation site",
    "distractorExclusion": "Endoscopy with air insufflation is contraindicated in frank perforation as it expands the pneumoperitoneum and exacerbates peritoneal contamination.",
    "citation": "S\u00f8reide K, et al. Perforated peptic ulcer. Lancet. 2015;386(10006):1888-1898. PMID: 26442898.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0518",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Diverticular Abscess Hinchey Staging and Percutaneous Drainage",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man presents with persistent left lower quadrant abdominal pain, fever, and leukocytosis. He was treated 4 days ago as an outpatient with oral ciprofloxacin and metronidazole for presumed acute diverticulitis, but his symptoms have progressively worsened. On physical examination, temperature is 38.6\u00b0C (101.5\u00b0F), blood pressure is 128/78 mm Hg, and pulse is 96/min. Palpation of the left lower quadrant reveals a tender, palpable mass with localized guarding; there is no diffuse peritonitis or board-like rigidity. Laboratory evaluation reveals WBC count 16,400/microL with 10% bands. Contrast-enhanced CT of the abdomen and pelvis demonstrates severe sigmoid diverticulitis with a 5.5-cm fluid and gas collection in the left iliac fossa adjacent to the sigmoid colon (Hinchey stage Ib). There is no free intraperitoneal air or diffuse purulent fluid. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Image-guided percutaneous catheter drainage of the abscess and initiation of intravenous broad-spectrum antibiotics",
        "Complicated diverticulitis is categorized by the modified Hinchey classification: Stage Ia (phlegmon or pericolic inflammation); Stage Ib (pericolic or mesocolic abscess <4 cm vs >=4 cm); Stage II (pelvic or retroperitoneal distant abscess); Stage III (purulent peritonitis); and Stage IV (feculent peritonitis). For diverticular abscesses >= 4 cm (Hinchey Ib or II) without diffuse peritonitis, the treatment of choice is PERCUTANEOUS IMAGE-GUIDED (CT or ultrasound) CATHETER DRAINAGE combined with INTRAVENOUS BROAD-SPECTRUM ANTIBIOTICS. Percutaneous drainage controls sepsis, avoids an emergency colostomy (Hartmann procedure), and allows the patient to undergo elective one-stage resection with primary anastomosis weeks later."
      ],
      [
        "Immediate emergency Hartmann procedure (sigmoid colectomy with end colostomy)",
        "Emergency Hartmann resection is indicated for generalized purulent/feculent peritonitis (Hinchey III/IV), not a localized 5.5-cm abscess accessible to percutaneous drainage."
      ],
      [
        "Continuation of oral outpatient antibiotics with instructions to return in 1 week",
        "Abscesses >= 4 cm fail medical antibiotic therapy alone in >80% of cases and require active drainage."
      ],
      [
        "Immediate colonoscopy to irrigate and decompress the inflamed diverticular neck",
        "Colonoscopy is strictly contraindicated during acute diverticulitis due to high risk of iatrogenic perforation; colonoscopy is deferred for 6-8 weeks."
      ],
      [
        "Laparoscopic total proctocolectomy with permanent Brooke ileostomy",
        "Total proctocolectomy is an excessive operation for localized sigmoid diverticulitis."
      ]
    ],
    "shortestValidSolution": "Diverticulitis + 5.5 cm localized abscess + no peritonitis (Hinchey Ib) = Complicated diverticular abscess -> CT-guided percutaneous drainage + IV antibiotics.",
    "necessaryInference": "Apply Hinchey staging criteria: localized diverticular abscesses >=4 cm undergo percutaneous catheter drainage; emergency surgery is reserved for diffuse peritonitis.",
    "strongestDistractor": "Immediate emergency Hartmann procedure (sigmoid colectomy with end colostomy)",
    "distractorExclusion": "Emergency resection with a stoma is unnecessary for a contained 5.5-cm abscess; percutaneous drainage converts an emergency surgery into a planned elective procedure.",
    "citation": "Hall J, et al. The American Society of Colon and Rectal Surgeons clinical practice guidelines for the treatment of left-sided colonic diverticulitis. Dis Colon Rectum. 2020;63(6):728-747. PMID: 32384404.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0519",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Lower GI Bleeding Colonoscopy vs Angiography",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old woman with hypertension and chronic kidney disease presents with massive, painless bright red blood per rectum (hematochezia). On arrival, she is lightheaded. Blood pressure is 88/50 mm Hg and pulse is 124/min. Physical examination shows pallor, diaphoresis, and brisk bright red blood in the rectal vault. Two large-bore IV lines are placed, and aggressive crystalloid and packed red blood cell resuscitation is initiated. A nasogastric tube is placed and aspirates clear gastric fluid containing bile without blood. Despite rapid transfusion of 3 units of blood, she continues to have active, voluminous hematochezia with persistent hemodynamic instability (blood pressure 84/48 mm Hg). Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Computed tomography angiography (CTA) of the abdomen and pelvis to localize the bleeding site, followed by catheter-directed transcatheter arterial embolization",
        "In patients with acute severe hematochezia, the initial priority is hemodynamic resuscitation and ruling out an upper GI source (10-15% of massive hematochezia is from a brisk upper source, ruled out here by clear bile on NG aspirate). When the patient has MASSIVE ONGOING BLEEDING WITH HEMODYNAMIC INSTABILITY refractory to resuscitation, emergent COLONOSCOPY IS IMPOSSIBLE because the colon cannot be purged and visualization is obscured. The definitive next step is COMPUTED TOMOGRAPHY ANGIOGRAPHY (CTA) (which detects bleeding rates >=0.3-0.5 mL/min in minutes) followed immediately by CATHETER-DIRECTED TRANSCATHETER ARTERIAL EMBOLIZATION (TAE) in the interventional radiology suite."
      ],
      [
        "Oral polyethylene glycol solution administration (4 to 6 liters over 2 hours) to prepare for emergent colonoscopy",
        "Giving 4-6 L of oral purge in an unstable patient in shock risks massive aspiration and delays life-saving catheter embolization."
      ],
      [
        "Technetium-99m labeled red blood cell scintigraphy with delayed 24-hour imaging",
        "Tagged RBC scan detects low-rate bleeding (0.1 mL/min) but has poor spatial localization and is too slow for acute hemodynamic instability."
      ],
      [
        "Immediate exploratory laparotomy with blind total abdominal colectomy",
        "Blind colectomy without localized angiographic confirmation carries prohibitive rebleeding and mortality rates (>30%)."
      ],
      [
        "Intravenous vasopressin infusion as definitive sole medical therapy",
        "Systemic vasopressin carries severe myocardial and bowel ischemic toxicity and has been superseded by superselective transcatheter microcoil embolization."
      ]
    ],
    "shortestValidSolution": "Massive hematochezia + hemodynamic instability + upper GI source ruled out = Massive lower GI bleed -> CTA followed by catheter transcatheter arterial embolization (TAE).",
    "necessaryInference": "Choose between colonoscopy (stable patient after purge) and CTA/catheter embolization (unstable ongoing massive hemorrhage) in lower GI bleeding.",
    "strongestDistractor": "Oral polyethylene glycol solution administration (4 to 6 liters over 2 hours) to prepare for emergent colonoscopy",
    "distractorExclusion": "Colonoscopy requires an elective polyethylene glycol purge in a stable patient; attempting an oral purge during active shock risks fatal pulmonary aspiration.",
    "citation": "Strate LL, Gralnek IM. ACG Clinical Guideline: Management of Patients With Acute Lower Gastrointestinal Bleeding. Am J Gastroenterol. 2016;111(4):459-474. PMID: 26925883.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0520",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Budd-Chiari Syndrome Doppler Ultrasound and Anticoagulation",
    "provisionalDifficulty": 5,
    "stem": "A 34-year-old woman presents with acute severe right upper quadrant abdominal pain, rapid abdominal distention, and jaundice that developed over the past 5 days. She takes combined oral contraceptive pills and has a history of unprovoked deep vein thrombosis. Physical examination reveals blood pressure 118/76 mm Hg, scleral icterus, tender hepatomegaly extending 6 cm below the costal margin, and gross ascites with a positive fluid wave; peripheral edema is absent. Laboratory studies show: AST 1,240 U/L, ALT 1,480 U/L, total bilirubin 5.2 mg/dL, and serum albumin 3.4 g/dL. Paracentesis demonstrates a high serum-ascites albumin gradient (SAAG 1.6 g/dL) and high ascitic protein content (3.2 g/dL). Hepatic Doppler ultrasonography demonstrates absent flow in the three main hepatic veins with reversed (hepatofugal) flow in the intrahepatic collaterals and caudate lobe hypertrophy. Bone marrow testing reveals the JAK2 V617F mutation. Which of the following is the most appropriate initial therapy?",
    "choices": [
      [
        "Immediate therapeutic systemic anticoagulation (low-molecular-weight heparin transitioned to long-term anticoagulation) combined with catheter-directed thrombolysis or angioplasty for identifiable focal stenoses",
        "Budd-Chiari syndrome is hepatic venous outflow obstruction, most commonly caused by underlying myeloproliferative neoplasms (JAK2 V617F positive in ~40-50%), thrombophilias, or oral contraceptives. Occlusion of hepatic veins causes hepatic sinusoidal congestion, centrilobular ischemic necrosis, marked hepatomegaly, and high-protein ascites (SAAG > 1.1 g/dL, protein > 2.5 g/dL). The caudate lobe typically hypertrophies because it possesses independent venous drainage directly into the IVC. The first-line medical therapy is IMMEDIATE THERAPEUTIC ANTICOAGULATION to prevent clot extension and restore microvascular patency. In acute cases with focal occlusion, catheter-directed thrombolysis or angioplasty/stenting is pursued; patients failing therapy step up to TIPS or liver transplantation."
      ],
      [
        "Emergency surgical portacaval shunting with splenectomy",
        "Open surgical shunts have been superseded by minimally invasive catheter-directed recanalization and TIPS, which have lower operative mortality."
      ],
      [
        "High-dose intravenous corticosteroid pulse therapy and cyclophosphamide",
        "Budd-Chiari is a thrombotic disorder, not an autoimmune vasculitis; immunosuppressive therapy is ineffective."
      ],
      [
        "Long-term oral aspirin monotherapy without therapeutic anticoagulation",
        "Aspirin is antiplatelet therapy; acute large-vessel venous thrombosis requires therapeutic anticoagulation (heparin/DOAC)."
      ],
      [
        "Permanent inferior vena cava filter placement as the sole intervention",
        "An IVC filter does not treat existing hepatic vein thrombosis and does not prevent clot propagation within the portal or mesenteric circulation."
      ]
    ],
    "shortestValidSolution": "Tender hepatomegaly + ascites (high SAAG/high protein) + caudate lobe hypertrophy + absent hepatic vein flow = Budd-Chiari -> therapeutic anticoagulation + recanalization.",
    "necessaryInference": "Diagnose Budd-Chiari syndrome by Doppler ultrasound and select immediate therapeutic anticoagulation as the foundational initial therapy.",
    "strongestDistractor": "High-dose intravenous corticosteroid pulse therapy and cyclophosphamide",
    "distractorExclusion": "Budd-Chiari is driven by underlying thrombophilia (such as JAK2 myeloproliferative mutations) and requires systemic anticoagulation, not corticosteroids.",
    "citation": "Aydinli M, Bayraktar Y. Budd-Chiari syndrome: etiology, pathogenesis and diagnosis. World J Gastroenterol. 2007;13(19):2691-2696. PMID: 17569137.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0521",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Portal Vein Thrombosis in Cirrhosis Anticoagulation",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man with decompensated cirrhosis secondary to chronic hepatitis B virus infection undergoes a routine 6-month hepatocellular carcinoma surveillance ultrasound. He is asymptomatic with no fever, abdominal pain, or gastrointestinal bleeding. Abdominal Doppler ultrasound demonstrates a non-occlusive hyperechoic thrombus filling approximately 60% of the lumen of the main portal vein trunk, with blunted hepatopetal flow. A multiphase contrast-enhanced CT of the abdomen confirms a non-tumoral intraluminal portal vein thrombosis (absence of arterial neovascularity or 'washout' within the thrombus); there is no evidence of hepatocellular carcinoma. Endoscopy performed 1 month ago showed small, non-bleeding esophageal varices. Which of the following is the most appropriate management of this patient's portal vein thrombosis?",
    "choices": [
      [
        "Initiate therapeutic anticoagulation with low-molecular-weight heparin or a direct oral anticoagulant (DOAC) while maintaining non-selective beta-blocker therapy to prevent thrombosis progression and preserve liver transplant candidacy",
        "Non-tumoral portal vein thrombosis (PVT) occurs in 10-25% of patients with advanced cirrhosis due to sluggish portal flow, endothelial dysfunction, and hypercoagulability. Progression of PVT increases portal hypertension (triggering variceal bleeding and ascites) and can lead to mesenteric infarction or disqualification from liver transplantation. Current guidelines (AASLD, EASL) recommend THERAPEUTIC ANTICOAGULATION (with low-molecular-weight heparin or direct oral anticoagulants e.g. apixaban, rivaroxaban) for acute or non-occlusive PVT involving the main trunk. Anticoagulation achieves recanalization in 50-70% of patients and reduces thrombotic progression. Co-existing varices must be treated with non-selective beta-blockers or band ligation, but varices do not contraindicate therapeutic anticoagulation."
      ],
      [
        "Withhold anticoagulation due to prohibitive risk of fatal gastrointestinal variceal hemorrhage in cirrhosis",
        "Withholding anticoagulation permits clot extension to the mesenteric veins, leading to fatal bowel infarction and loss of liver transplant candidacy."
      ],
      [
        "Perform emergency transjugular intrahepatic portosystemic shunt (TIPS) within 24 hours",
        "TIPS is indicated for complete refractory occlusive PVT or recurrent variceal hemorrhage, not asymptomatic non-occlusive main PVT where anticoagulation is first-line."
      ],
      [
        "Administer systemic intravenous tissue plasminogen activator (alteplase)",
        "Systemic thrombolysis carries catastrophic bleeding risks in cirrhotics with coagulopathy and is contraindicated for non-occlusive PVT."
      ],
      [
        "Initiate oral aspirin and clopidogrel dual antiplatelet therapy",
        "Antiplatelet agents are ineffective for venous portal thrombosis and increase bleeding without providing therapeutic anticoagulation."
      ]
    ],
    "shortestValidSolution": "Cirrhosis + non-tumoral main portal vein thrombosis -> initiate therapeutic anticoagulation (LMWH or DOAC) to maintain transplant candidacy and patency.",
    "necessaryInference": "Manage non-tumoral PVT in cirrhosis: therapeutic anticoagulation recanalizes the portal vein safely without increasing variceal bleeding when varices are managed.",
    "strongestDistractor": "Withhold anticoagulation due to prohibitive risk of fatal gastrointestinal variceal hemorrhage in cirrhosis",
    "distractorExclusion": "Cirrhotic coagulopathy is rebalanced, not 'auto-anticoagulated'; withholding therapy allows clot propagation into mesenteric vessels, with devastating outcomes.",
    "citation": "European Association for the Study of the Liver. EASL Clinical Practice Guidelines: Vascular diseases of the liver. J Hepatol. 2016;64(1):179-202. PMID: 26516032.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0522",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Wilson Disease Acute Liver Failure ALP to Bilirubin Ratio",
    "provisionalDifficulty": 5,
    "stem": "A 17-year-old previously healthy girl presents with acute onset of confusion, lethargy, and severe jaundice over 4 days. On physical examination, she has marked scleral icterus, asterixis, and splenomegaly. Slit-lamp biomicroscopy of the eyes reveals brown rings at the limbus of the cornea (Kayser-Fleischer rings). Laboratory evaluation demonstrates: AST 420 U/L, ALT 210 U/L (AST > ALT), total bilirubin 32.5 mg/dL (direct 18.0 mg/dL), alkaline phosphatase 24 U/L (markedly depressed; normal 40-150 U/L), and INR 3.8. Complete blood count demonstrates: hemoglobin 6.2 g/dL with severe reticulocytosis (14%) and negative direct antiglobulin (Coombs) test; peripheral blood smear shows polychromasia and fragmented erythrocytes. Serum ceruloplasmin is 12 mg/dL (low). Which of the following is the definitive life-saving therapy for this patient?",
    "choices": [
      [
        "Immediate emergent orthotopic liver transplantation",
        "Wilson disease (hepatolenticular degeneration, ATP7B mutation) presenting as ACUTE LIVER FAILURE is a medical emergency with virtually 100% mortality without emergency liver transplantation. The clinical and laboratory signature is pathognomonic: (1) Coombs-negative hemolytic anemia (massive release of free copper from necrotic hepatocytes lyses erythrocytes); (2) AST to ALT ratio > 2.0 with relatively modest transaminase elevations (<1,000-2,000 U/L); and (3) MARKEDLY DEPRESSED ALKALINE PHOSPHATASE (due to copper replacing zinc in the ALP catalytic site) with severe hyperbilirubinemia, producing an ALP-to-Total Bilirubin ratio < 4.0 (and AST/ALP ratio > 2.0). Medical copper chelators (D-penicillamine, trientine) are completely ineffective and take months to work; EMERGENCY LIVER TRANSPLANTATION is the only definitive cure."
      ],
      [
        "Initiate oral D-penicillamine and oral zinc acetate maintenance therapy",
        "Chelation therapy with penicillamine or zinc takes months to lower copper and is universally fatal in acute Wilsonian liver failure."
      ],
      [
        "Perform therapeutic plasma exchange (plasmapheresis) as sole definitive therapy without transplant listing",
        "Plasmapheresis can temporarily clear free copper as a bridge to transplant, but cannot reverse acute liver failure; transplant is definitive."
      ],
      [
        "Administer high-dose intravenous N-acetylcysteine and oral lactulose",
        "NAC treats acetaminophen toxicity; it does not reverse copper-induced acute liver failure or Coombs-negative hemolysis in Wilson disease."
      ],
      [
        "Intravenous pulse methylprednisolone for 7 days",
        "Corticosteroids are indicated for autoimmune hepatitis; Wilson disease is a metabolic copper storage disorder refractory to steroids."
      ]
    ],
    "shortestValidSolution": "Acute liver failure + Kayser-Fleischer rings + Coombs-negative hemolysis + ALP/Bilirubin ratio < 4 = Acute Wilsonian liver failure -> emergency liver transplant.",
    "necessaryInference": "Recognize acute Wilsonian liver failure (Coombs-negative hemolysis, AST > ALT, markedly low ALP with extreme bilirubin) and select emergent liver transplantation.",
    "strongestDistractor": "Initiate oral D-penicillamine and oral zinc acetate maintenance therapy",
    "distractorExclusion": "Chelators are used for chronic stability; acute Wilson disease liver failure has nearly 100% mortality without emergency liver transplantation.",
    "citation": "Schilsky ML. Wilson disease: diagnosis and treatment. Clin Liver Dis. 2017;21(4):755-770. PMID: 28987260.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0523",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Autoimmune Hepatitis Corticosteroid Trial vs Transplant",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old woman presents with severe fatigue, anorexia, and progressive jaundice over 3 weeks. She has a personal history of Hashimoto thyroiditis. Physical examination reveals scleral icterus and mild tender hepatomegaly without ascites or asterixis. Laboratory studies show: AST 1,450 U/L, ALT 1,680 U/L, total bilirubin 9.2 mg/dL, and INR 1.3 (normal synthetic function, absence of encephalopathy). Viral serologies for hepatitis A, B, C, and E are negative. Serologic testing demonstrates: positive antinuclear antibodies (ANA, titer 1:640), positive anti-smooth muscle antibodies (ASMA / F-actin, titer 1:320), and marked polyclonal hypergammaglobulinemia (serum IgG 2,850 mg/dL; normal 700-1,600 mg/dL). Liver biopsy confirms interface hepatitis with abundant plasma cell infiltration. Which of the following is the most appropriate initial therapy?",
    "choices": [
      [
        "Oral prednisone (or prednisolone) monotherapy or combination prednisone plus azathioprine",
        "Type 1 Autoimmune Hepatitis (AIH) is characterized by prominent transaminitis, female predominance, co-existing autoimmune diseases (Hashimoto thyroiditis, vitiligo), elevated serum IgG (hypergammaglobulinemia), and positive autoantibodies (ANA, anti-smooth muscle antibodies / ASMA). Liver biopsy characteristically shows INTERFACE HEPATITIS with a dense PLASMACYTIC infiltrate. Because the patient is hemodynamically stable without acute liver failure (INR < 1.5, no encephalopathy), the first-line treatment to achieve remission and prevent progression to cirrhosis is immunosuppressive therapy with ORAL PREDNISONE (or prednisolone) either as monotherapy or combined with AZATHIOPRINE (which acts as a steroid-sparing agent). Remission is achieved in >80% of patients within several months."
      ],
      [
        "Immediate emergent orthotopic liver transplantation evaluation",
        "Liver transplantation is reserved for acute liver failure (INR >= 1.5 with encephalopathy) or decompensated cirrhosis refractory to medical immunosuppression."
      ],
      [
        "Intravenous N-acetylcysteine infusion for 72 hours",
        "NAC is used for acetaminophen toxicity; it does not treat autoimmune antibody-mediated interface hepatitis."
      ],
      [
        "Oral tenofovir alafenamide antiviral therapy",
        "Tenofovir treats chronic hepatitis B virus infection; viral serologies are negative in autoimmune hepatitis."
      ],
      [
        "Lifelong oral ursodeoxycholic acid monotherapy",
        "Ursodeoxycholic acid is first-line for primary biliary cholangitis (anti-mitochondrial antibody positive), not autoimmune hepatitis."
      ]
    ],
    "shortestValidSolution": "Young woman + transaminases >1,000 + high IgG + positive ANA/ASMA + interface hepatitis with plasma cells = Autoimmune hepatitis -> Oral prednisone +/- azathioprine.",
    "necessaryInference": "Diagnose autoimmune hepatitis (ASMA, IgG, plasmacytic interface hepatitis) and initiate first-line immunosuppression with corticosteroids and azathioprine.",
    "strongestDistractor": "Lifelong oral ursodeoxycholic acid monotherapy",
    "distractorExclusion": "Ursodeoxycholic acid treats primary biliary cholangitis (AMA positive, cholestatic pattern); AIH is hepatocellular and requires corticosteroid immunosuppression.",
    "citation": "Mack CL, et al. Diagnosis and management of autoimmune hepatitis in adults and children: 2019 practice guidance by AASLD. Hepatology. 2020;72(2):696-722. PMID: 32441084.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0524",
    "exam": "Step 2 CK",
    "subject": "Pharmacology",
    "system": "Gastrointestinal",
    "topic": "Drug-Induced Liver Injury R-Factor Calculation",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old woman presents with malaise, pruritus, dark urine, and pale stools that began 2 weeks after completing a 10-day course of amoxicillin-clavulanate for acute maxillary sinusitis. Physical examination reveals scleral icterus and excoriations on her arms without hepatomegaly or ascites. Laboratory evaluation demonstrates: AST 112 U/L (ULN 35 U/L), ALT 135 U/L (ULN 35 U/L), alkaline phosphatase 490 U/L (ULN 105 U/L), and total bilirubin 6.4 mg/dL. Abdominal ultrasonography and MRCP reveal normal intrahepatic and extrahepatic biliary ducts without gallstones or choledocholithiasis. Viral hepatitis serologies are negative. Which of the following is the calculated R-factor pattern of drug-induced liver injury in this patient, and what is the primary management?",
    "choices": [
      [
        "Cholestatic pattern with an R-factor < 2.0; immediate cessation of amoxicillin-clavulanate with supportive monitoring for spontaneous resolution over several months",
        "Drug-induced liver injury (DILI) is categorized using the R-factor: R = (ALT / ULN_ALT) / (ALP / ULN_ALP). In this patient, ALT / ULN = 135 / 35 = 3.86; ALP / ULN = 490 / 105 = 4.67; R-factor = 3.86 / 4.67 = 0.83. An R-factor <= 2.0 defines a CHOLESTATIC pattern; R >= 5.0 defines a HEPATOCELLULAR pattern; and 2.0 < R < 5.0 defines a MIXED pattern. AMOXICILLIN-CLAVULANATE is the most common cause of idiosyncratic cholestatic/mixed DILI worldwide, characteristically presenting with delayed onset (1-4 weeks after drug completion). Management requires immediate drug withdrawal and supportive care; prognosis is excellent, though cholestasis may take 3-6 months to resolve."
      ],
      [
        "Hepatocellular pattern with an R-factor > 5.0; initiation of high-dose intravenous methylprednisolone",
        "The R-factor is 0.83 (<2.0), confirming cholestatic, not hepatocellular injury; corticosteroids are not indicated for amoxicillin-clavulanate DILI."
      ],
      [
        "Mixed hepatocellular-cholestatic pattern with an R-factor of 3.5; emergent endoscopic retrograde cholangiopancreatography",
        "The R-factor is 0.83, not 3.5; ERCP is unnecessary when MRCP proves unobstructed bile ducts."
      ],
      [
        "Direct toxic pattern; immediate administration of intravenous N-acetylcysteine",
        "NAC is indicated for acetaminophen-induced hepatocellular necrosis, not idiosyncratic amoxicillin-clavulanate cholestasis."
      ],
      [
        "Severe vanishing bile duct syndrome; immediate referral for urgent liver transplantation",
        "Vanishing bile duct syndrome is a rare chronic complication; uncomplicated amoxicillin-clavulanate cholestatic DILI resolves spontaneously."
      ]
    ],
    "shortestValidSolution": "Amoxicillin-clavulanate exposure + jaundice + R-factor = (135/35)/(490/105) = 0.83 (<2.0) = Cholestatic DILI -> drug cessation and supportive monitoring.",
    "necessaryInference": "Calculate and interpret the DILI R-factor: R < 2.0 defines cholestatic injury, characteristic of amoxicillin-clavulanate, managed by drug discontinuation.",
    "strongestDistractor": "Hepatocellular pattern with an R-factor > 5.0; initiation of high-dose intravenous methylprednisolone",
    "distractorExclusion": "The calculation yields R = 0.83 (<2.0), which is purely cholestatic; corticosteroids have no proven role in idiosyncratic amoxicillin-clavulanate injury.",
    "citation": "Chalasani NP, et al. ACG Clinical Guideline: the diagnosis and management of idiosyncratic drug-induced liver injury. Am J Gastroenterol. 2021;116(5):878-898. PMID: 33929379.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0525",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Hemobilia Sandblom Triad Angiographic Embolization",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man presents with melena, colicky right upper quadrant abdominal pain, and fluctuating jaundice that began 5 days after undergoing an uneventful percutaneous core needle liver biopsy for staging of chronic viral hepatitis. Blood pressure is 110/70 mm Hg and pulse is 96/min. Physical examination shows scleral icterus and mild right upper quadrant tenderness without peritoneal signs. Laboratory studies reveal: hemoglobin 8.8 g/dL (baseline 13.2 g/dL), total bilirubin 4.8 mg/dL, and alkaline phosphatase 280 U/L. Upper endoscopy (EGD) reveals a normal esophagus, stomach, and duodenum; upon inspecting the second portion of the duodenum, fresh arterial blood and small cylindrical blood clots are observed actively discharging through the ampulla of Vater. Which of the following is the diagnosis, and what is the definitive therapeutic intervention of choice?",
    "choices": [
      [
        "Hemobilia; definitive treatment is transcatheter hepatic arterial angiography with selective embolization",
        "HEMOBILIA is bleeding into the biliary tree, classically presenting with the SANDBLOM TRIAD: (1) Upper gastrointestinal bleeding (melena or hematemesis); (2) Right upper quadrant colicky pain (from blood clots obstructing the bile duct); and (3) Jaundice (biliary obstruction by clots). The most common etiology is IATROGENIC TRAUMA (percutaneous liver biopsy, transhepatic cholangiography, or laparoscopic cholecystectomy) creating an abnormal fistula between an intrahepatic arterial branch and a biliary duct. Endoscopic visualization of blood exiting the ampulla of Vater confirms the diagnosis. The definitive diagnostic and therapeutic gold standard is VISCERAL HEPATIC ARTERIOGRAPHY with SUPERSELECTIVE TRANSCATHETER ARTERIAL EMBOLIZATION (TAE), which successfully controls bleeding in >90% of cases without open surgery."
      ],
      [
        "Bleeding peptic ulcer; definitive treatment is endoscopic thermal coagulation and hemoclip application",
        "Blood is issuing from the ampulla of Vater itself, confirming a biliary source (hemobilia), not a gastroduodenal mucosal ulcer."
      ],
      [
        "Aortoenteric fistula; definitive treatment is emergency open exploratory laparotomy and aortic graft excision",
        "Aortoenteric fistulas involve prior aortic aneurysm grafts eroding into the third/fourth duodenum, not blood from the ampulla post-liver biopsy."
      ],
      [
        "Bleeding esophageal varices; definitive treatment is endoscopic variceal band ligation",
        "Endoscopy showed a completely normal esophagus and stomach; bleeding is coming directly from the ampulla of Vater."
      ],
      [
        "Ascending cholangitis; definitive treatment is urgent endoscopic sphincterotomy without embolization",
        "While blood clots can cause secondary biliary colic, the primary pathology is an arterial-biliary pseudoaneurysm/fistula requiring transcatheter embolization."
      ]
    ],
    "shortestValidSolution": "Post-liver biopsy + melena + RUQ pain + jaundice + blood exiting ampulla of Vater = Hemobilia (Sandblom triad) -> hepatic arteriography with embolization.",
    "necessaryInference": "Recognize hemobilia (Sandblom triad: GI bleed, RUQ pain, jaundice post-hepatic procedure) and select transcatheter arterial embolization as first-line therapy.",
    "strongestDistractor": "Bleeding peptic ulcer; definitive treatment is endoscopic thermal coagulation and hemoclip application",
    "distractorExclusion": "Direct visualization of arterial blood pouring from the ampulla of Vater proves hemobilia; bleeding is from intrahepatic vessels, not duodenal mucosa.",
    "citation": "Green MH, et al. Haemobilia. Br J Surg. 2001;88(6):773-786. PMID: 11412246.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK emergency decision-making question requiring rapid risk stratification and evidence-based clinical action.",
      "distractorExclusionNotes": "Distractors reflect common clinical errors, premature interventions, or guideline-discordant treatments.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
