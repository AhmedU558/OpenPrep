# -*- coding: utf-8 -*-
"""
Builder script to generate scripts/candidate-authoring/step2-batch12.ts
"Items": op-c-s2-0276 to op-c-s2-0300 (25 items on Hematology/Oncology emergencies & clinical management)
Includes 0299 (REJECT) and 0300 (UNRESOLVED)
"""
import json
import os

items = [
  {
    "code": "op-c-s2-0276",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Heparin-Induced Thrombocytopenia 4T Score and Direct Thrombin Inhibitors",
    "subtopic": "Argatroban First-Line, Immediate Heparin Cessation, and Warfarin Contraindication",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Heparin-Induced Thrombocytopenia (HIT Type 2): PATHOPHYSIOLOGY: Immune-mediated reaction: IgG autoantibodies against platelet factor 4 (PF4)-heparin complexes bind platelet Fc-gamma-RIIa receptors, triggering massive platelet activation, consumption, and explosive THROMBOPHILIA (arterial and venous thrombosis in > 50%!). 4T SCORE CRITERIA: 1. Thrombocytopenia (> 50% drop from peak, or nadir 20-100k). 2. Timing (onset 5-10 days after heparin exposure, or < 1 day if exposed in past 30-100 days). 3. Thrombosis (new DVT, PE, arterial stroke, skin necrosis). 4. oTher causes excluded. IMMEDIATE MANAGEMENT PROTOCOL: 1. STOP ALL FORMS OF HEPARIN IMMEDIATELY (unfractionated heparin, LMWH, heparin flushes/coatings). 2. INITIATE A NON-HEPARIN DIRECT THROMBIN INHIBITOR (ARGATROBAN or Bivalirudin) OR FONDAPARINUX IMMEDIATELY! (Argatroban is metabolized hepatically, preferred in renal failure; bivalirudin in liver failure). 3. THE DEADLY CONTRAINDICATION: WARFARIN IS STRICTLY CONTRAINDICATED IN ACUTE HIT! Administering warfarin during acute HIT precipitates rapid protein C depletion before prothrombin falls, triggering extensive microvascular thrombosis and CATASTROPHIC VENOUS LIMB GANGRENE AND SKIN NECROSIS! Reverse warfarin with vitamin K if already given. Transition to warfarin only AFTER platelets recover to > 150,000/mm3, overlapping with direct thrombin inhibitor for at least 5 days.",
    "necessaryInference": "Synthesize HIT presentation (> 50% platelet drop 7 days post-heparin with new DVT) and deduce that all heparin must stop immediately, a non-heparin direct thrombin inhibitor (argatroban) must be initiated, and warfarin is strictly contraindicated in acute phase.",
    "strongestDistractor": "Discontinue heparin and immediately initiate oral warfarin 10 mg daily to manage the new acute deep vein thrombosis",
    "distractorExclusion": "Warfarin monotherapy in acute HIT causes rapid protein C depletion, precipitating extensive microvascular thrombosis and catastrophic venous limb gangrene.",
    "citation": "Cuker A, Arepally GM, Chong BH, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392. PMID: 30482768.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item assesses 4T score recognition, immediate transition to non-heparin direct thrombin inhibitors, and understanding the lethal risk of acute warfarin administration in HIT.",
      "distractorExclusionNotes": "Distractors inappropriately give warfarin, transfuse platelets in a prothrombotic state, or switch to low molecular weight heparin (which cross-reacts > 90%).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 64-year-old man who underwent elective total knee arthroplasty 7 days ago is evaluated for acute-onset pain, erythema, and swelling in his left calf. Following surgery, he was initiated on subcutaneous unfractionated heparin (5,000 units every 8 hours) for venous thromboembolism prophylaxis. His preoperative platelet count was 280,000/mm3. On physical examination, his left lower leg is swollen and tender with 2+ pitting edema; the surgical incision is healing normally without signs of infection. Duplex venous ultrasound of the left lower extremity demonstrates an occlusive deep vein thrombosis (DVT) in the left popliteal and femoral veins. Stat complete blood count reveals a platelet count of 88,000/mm3 (a 68.6% drop from baseline), hemoglobin 12.2 g/dL, and WBC 7,800/mm3. Serum creatinine is 1.8 mg/dL. The calculated 4T score is 7 points (high clinical probability for heparin-induced thrombocytopenia). A heparin-PF4 enzyme-linked immunosorbent assay (ELISA) is sent for testing. Which of the following is the most appropriate immediate management strategy for this patient?",
    "options": [
      {
        "text": "Immediately discontinue all heparin products, initiate therapeutic anticoagulation with an intravenous direct thrombin inhibitor (such as argatroban), and avoid warfarin until platelet counts have fully recovered",
        "explanation": "This patient presents with definitive clinical features of HEPARIN-INDUCED THROMBOCYTOPENIA (HIT Type 2), complicated by acute deep vein thrombosis. Master the pathophysiology, 4T score, and management algorithm established by the American Society of Hematology (ASH) on USMLE Step 2 CK: (1) PATHOPHYSIOLOGY: HIT is a life-threatening, immune-mediated prothrombotic disorder caused by IgG autoantibodies directed against complexes of endogenous PLATELET FACTOR 4 (PF4) and EXOGENOUS HEPARIN. The IgG-PF4-heparin immune complexes bind to Fc-gamma-RIIa receptors on the surface of circulating platelets, triggering massive, cross-linked platelet activation, aggregation, and alpha-granule release. This leads to profound platelet consumption (thrombocytopenia) and the release of procoagulant microparticles that stimulate thrombin generation, resulting in severe ARTERIAL AND VENOUS THROMBOSIS (occurring in >30% to 50% of untreated patients). (2) THE 4T SCORE CLINICAL ASSESSMENT: High probability (score 6-8) is based on: (a) Thrombocytopenia: >50% drop in platelet count (nadir usually 20,000-100,000/mm3; severe bleeding is rare); (b) Timing: Onset characteristically occurs 5 to 10 days after starting heparin; (c) Thrombosis: New confirmed venous or arterial thromboembolism; and (d) oTher causes: No other apparent etiology for thrombocytopenia. (3) MANDATORY MANAGEMENT STEPS: (a) STOP ALL HEPARIN IMMEDIATELY: Discontinue all subcutaneous heparin, intravenous heparin, low-molecular-weight heparins (LMWH cross-reacts with HIT antibodies in >90% of cases and is strictly contraindicated!), and heparin-coated catheters/flushes. (b) INITIATE IMMEDIATE NON-HEPARIN ANTICOAGULATION: Because HIT is a profoundly prothrombotic state, stopping heparin alone is insufficient; patients require immediate full therapeutic anticoagulation with a NON-HEPARIN DIRECT THROMBIN INHIBITOR (such as ARGATROBAN or BIVALIRUDIN) or FONDAPARINUX (a synthetic pentasaccharide factor Xa inhibitor). Argatroban is cleared hepatically and is the preferred agent in patients with renal insufficiency (creatinine 1.8 in this patient). (4) THE FATAL CONTRAINDICATION TO ACUTE WARFARIN: Warfarin (Coumadin) is STRICTLY CONTRAINDICATED IN THE ACUTE PHASE OF HIT. Warfarin rapidly suppresses protein C (a natural anticoagulant with a short half-life of ~6 hours) long before it suppresses procoagulant clotting factors (II and X). In a patient with active HIT-driven thrombin generation, administering warfarin causes a catastrophic hypercoagulable state, precipitating widespread microvascular thrombosis, VENOUS LIMB GANGRENE, AND EXTENSIVE CUTANEOUS SKIN NECROSIS. Warfarin must NEVER be initiated until platelet counts have completely normalized to >150,000/mm3, and must always be overlapped with a direct thrombin inhibitor for at least 5 days and until the INR is therapeutic."
      },
      {
        "text": "Discontinue unfractionated heparin and immediately initiate oral warfarin 10 mg daily to manage the acute popliteal deep vein thrombosis",
        "explanation": "Warfarin monotherapy in acute HIT causes rapid protein C depletion, precipitating extensive microvascular thrombosis and catastrophic venous limb gangrene."
      },
      {
        "text": "Switch unfractionated heparin to therapeutic low-molecular-weight heparin (enoxaparin 1 mg/kg twice daily)",
        "explanation": "LMWH cross-reacts with HIT antibodies in >90% of cases and will accelerate platelet aggregation and fatal thrombotic progression."
      },
      {
        "text": "Transfuse two units of pooled platelets immediately to restore the platelet count to > 100,000/mm3",
        "explanation": "Platelet transfusions in HIT are strictly contraindicated because transfused platelets provide substrate for antibody-mediated activation, fueling thrombosis."
      },
      {
        "text": "Continue current heparin prophylaxis and repeat complete blood count in 48 hours to confirm true thrombocytopenia",
        "explanation": "Continuing heparin in active HIT leads to catastrophic extension of thrombosis, pulmonary embolism, stroke, and limb amputation."
      }
    ]
  },
  {
    "code": "op-c-s2-0277",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Thrombotic Thrombocytopenic Purpura Plasma Exchange vs Platelet Transfusion",
    "subtopic": "ADAMTS13 Deficiency, Microangiopathic Hemolytic Anemia, and Transfusion Danger",
    "provisionalDifficulty": "Hard",
    "estimatedDifficultyPercent": 88,
    "shortestValidSolution": "Differentiate Thrombotic Thrombocytopenic Purpura (TTP): PATHOPHYSIOLOGY: Severe deficiency of ADAMTS13 (von Willebrand factor-cleaving protease; activity < 10%), almost always due to an acquired IgG autoantibody. Without ADAMTS13, ultra-large vWF multimers accumulate on vascular endothelial surfaces, shearing passing erythrocytes and aggregating platelets into microvascular platelet-rich thrombi. CLASSIC PENTAD (only 5-10% have all 5): 1. Thrombocytopenia (severe purpura, petechiae, mucosal bleeding). 2. Microangiopathic Hemolytic Anemia (MAHA; helmet cells / SCHISTOCYTES on peripheral blood smear, elevated LDH, indirect hyperbilirubinemia, undetectable haptoglobin, negative direct Coombs test). 3. Neurologic symptoms (fluctuating confusion, headache, focal deficits, seizures; seen in > 65%). 4. Renal impairment (mild hematuria/proteinuria; mild azotemia). 5. Fever. EMERGENCY MANAGEMENT MANDATE: 1. IMMEDIATE THERAPEUTIC PLASMA EXCHANGE (PEX / PLASMAPHERESIS)! (Removes autoantibodies and ultra-large multimers, while supplying active ADAMTS13 from donor plasma; mortality without PEX is > 90%, drops to < 15% with PEX!). 2. High-dose systemic corticosteroids (methylprednisolone) + Caplacizumab (anti-vWF nanobody) + Rituximab. THE FATAL CONTRAINDICATION: PLATELET TRANSFUSIONS ARE STRICTLY CONTRAINDICATED IN TTP! Transfusing platelets fuels new microvascular thrombosis ('adding fuel to the fire'), triggering fatal myocardial infarction, stroke, and acute circulatory arrest!",
    "necessaryInference":
      "Synthesize TTP presentation (thrombocytopenia, schistocytes, fluctuating neurological deficits, elevated LDH) and deduce that emergent therapeutic plasma exchange is mandatory, while platelet transfusions are strictly contraindicated.",
    "strongestDistractor": "Transfuse two units of apheresis platelets immediately to treat life-threatening thrombocytopenia prior to lumbar puncture",
    "distractorExclusion": "Platelet transfusions in TTP fuel microvascular platelet aggregation, precipitating acute stroke, myocardial infarction, and death; plasma exchange is the emergency treatment.",
    "citation": "Zheng XL, Vesely SK, Cataland SR, et al. ISTH guidelines for the diagnosis of thrombotic thrombocytopenic purpura. J Thromb Haemost. 2020;18(10):2486-2495. PMID: 32452601.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item tests emergency recognition of TTP, prioritization of emergent therapeutic plasma exchange over platelet transfusions, and understanding the molecular mechanism of ADAMTS13.",
      "distractorExclusionNotes": "Distractors inappropriately prescribe platelet transfusions (contraindicated), mistake TTP for ITP and use IVIG alone, or perform hemodialysis without PEX.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    },
    "stem": "A 31-year-old previously healthy woman is brought to the emergency department by her husband due to progressive confusion, difficulty speaking, and petechial rash over the past 24 hours. Her husband notes that 3 days ago, she developed mild fatigue and dark, tea-colored urine. On physical examination, she is disoriented to time and place with fluctuating aphasia that waxes and wanes during the examination. Vital signs are: temperature 38.2 C, pulse 104/min, blood pressure 138/84 mm Hg, and respiratory rate 18/min. Neurological examination reveals no focal cranial nerve deficits or motor weakness. Dermatologic examination demonstrates diffuse non-blanching petechiae and ecchymoses across both lower extremities, with mucosal bleeding along the gingiva. Laboratory evaluation reveals: - Hemoglobin: 7.2 g/dL - Platelet Count: 12,000/mm3 - Reticulocyte Count: 8.4% - Lactate Dehydrogenase (LDH): 1,840 U/L (normal: 140-280 U/L; markedly elevated) - Total Bilirubin: 4.2 mg/dL (Direct Bilirubin: 0.6 mg/dL) - Serum Haptoglobin: < 10 mg/dL (undetectable) - Serum Creatinine: 1.6 mg/dL - Prothrombin Time (PT/INR): 1.0 (normal) - Activated Partial Thromboplastin Time (aPTT): 28 seconds (normal) - Fibrinogen: 320 mg/dL (normal) - Direct Antiglobulin (Coombs) Test: Completely negative A peripheral blood smear demonstrates marked red blood cell fragmentation with 4 to 5 schistocytes (helmet cells) per high-power field and severe thrombocytopenia. Which of the following is the most appropriate immediate management strategy for this patient?",
    "options": [
      {
        "text": "Initiate emergent therapeutic plasma exchange (plasmapheresis) combined with high-dose intravenous corticosteroids; platelet transfusions are strictly contraindicated",
        "explanation": "This patient presents with classic, life-threatening THROMBOTIC THROMBOCYTOPENIC PURPURA (TTP), a medical emergency requiring immediate therapeutic plasma exchange. Master the pathophysiology, clinical diagnosis, and management guidelines established by the International Society on Thrombosis and Haemostasis (ISTH) on USMLE Step 2 CK: (1) PATHOPHYSIOLOGY AND ADAMTS13 DEFICIENCY: TTP is caused by severe deficiency (<10% activity) of the metalloprotease enzyme ADAMTS13 (a disintegrin and metalloproteinase with a thrombospondin type 1 motif, member 13). In acquired TTP, this is driven by an autoantibody (IgG) that neutralizes ADAMTS13. In normal physiology, ADAMTS13 cleaves ultra-large von Willebrand factor (UL-vWF) multimers secreted by endothelial cells into smaller, less adhesive fragments. In the absence of ADAMTS13, ultra-large vWF multimers persist anchored to endothelium, spontaneously tethering passing platelets and forming microvascular platelet-rich thrombi in arterioles and capillaries. As erythrocytes travel through these partially occluded microvessels, high shear stress mechanically slices red cell membranes, producing fragmented SCHISTOCYTES (helmet cells) and Coombs-negative MICROANGIOPATHIC HEMOLYTIC ANEMIA (MAHA). (2) CLINICAL PENTAD (FAT RN): (a) Fever; (b) Microangiopathic hemolytic Anemia (schistocytes, high LDH, low haptoglobin, negative Coombs); (c) Thrombocytopenia (severe platelet consumption causing purpura and mucosal bleeding); (d) Renal dysfunction (usually mild hematuria/azotemia); and (e) Neurologic abnormalities (fluctuating confusion, transient ischemic attacks, seizures, coma; seen in >65% of patients). NOTE: Normal coagulation studies (PT/INR and aPTT normal, normal fibrinogen) are critical to DISTINGUISH TTP FROM DISSEMINATED INTRAVASCULAR COAGULATION (DIC), where coagulation factors are consumed and PT/PTT are markedly prolonged! (3) EMERGENCY THERAPEUTIC PLASMA EXCHANGE (PEX): PEX is the undisputed gold-standard, life-saving therapy. Untreated TTP carries a mortality >90%; emergent PEX reduces mortality to <15%. PEX acts via two synergistic mechanisms: it removes the circulating pathogenic anti-ADAMTS13 autoantibodies and ultra-large vWF multimers from recipient plasma, while simultaneously replacing active donor ADAMTS13 from infused fresh frozen plasma. PEX is combined with high-dose intravenous methylprednisolone (to suppress autoantibody synthesis), rituximab (anti-CD20), and caplacizumab (an anti-vWF nanobody that blocks vWF-platelet glycoprotein Ib interaction). (4) THE ABSOLUTE CONTRAINDICATION: PLATELET TRANSFUSIONS ARE STRICTLY CONTRAINDICATED IN TTP! Administering exogenous platelets provides additional substrate for ultra-large vWF multimers, fueling explosive new microvascular thrombosis ('adding gasoline to a fire') and precipitating acute myocardial infarction, stroke, and sudden circulatory arrest."
      },
      {
        "text": "Transfuse two units of apheresis platelets immediately to raise the platelet count and prevent fatal intracranial hemorrhage",
        "explanation": "Platelet transfusions in TTP fuel microvascular platelet aggregation, precipitating acute stroke, myocardial infarction, and death; plasma exchange is the emergency treatment."
      },
      {
        "text": "Administer intravenous immunoglobulin (IVIG) monotherapy and high-dose oral dexamethasone for immune thrombocytopenia (ITP)",
        "explanation": "ITP features isolated thrombocytopenia without microangiopathic hemolytic anemia or schistocytes; treating TTP as ITP with IVIG alone leads to death."
      },
      {
        "text": "Initiate emergency hemodialysis for hemolytic uremic syndrome (HUS) with renal failure, withholding plasma exchange",
        "explanation": "Fluctuating neurological deficits with profound ADAMTS13 deficiency indicate TTP, not typical HUS; plasma exchange is mandatory to prevent death."
      },
      {
        "text": "Administer intravenous unfractionated heparin bolus followed by cryoprecipitate infusion for acute disseminated intravascular coagulation",
        "explanation": "PT and aPTT are completely normal, ruling out DIC; heparin in severe thrombocytopenia causes catastrophic hemorrhage."
      }
    ]
  }
]

# Write builder part 2 for items 0278 to 0300
print(f"Loaded initial {len(items)} items for step2-batch12.")
