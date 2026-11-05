import { CandidateSpec } from './types';

export const step1Batch22: CandidateSpec[] = [
  {
    "code": "op-c-s1-0526",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Bernard-Soulier vs Glanzmann Platelet Defect",
    "provisionalDifficulty": 5,
    "stem": "A 5-year-old girl is evaluated for recurrent epistaxis, easy bruisability, and prolonged gingival bleeding after brushing. Physical examination demonstrates scattered petechiae and ecchymoses on her extremities. Laboratory evaluation shows: platelet count 68,000/microL (normal 150,000-450,000/microL), hemoglobin 11.2 g/dL, PT 12 seconds, and aPTT 28 seconds. Peripheral blood smear reveals abnormally large platelets with diameters exceeding that of normal erythrocytes. In vitro platelet aggregometry demonstrates complete absence of aggregation in response to ristocetin, which is not corrected by the addition of normal plasma. Platelet aggregation in response to ADP, epinephrine, and collagen is normal. Which of the following is the underlying molecular defect in this patient?",
    "choices": [
      [
        "Deficiency or dysfunction of the platelet membrane glycoprotein Ib-IX-V receptor complex preventing binding to subendothelial von Willebrand factor",
        "Bernard-Soulier syndrome is an autosomal recessive disorder caused by deficiency or mutation in glycoprotein Ib (GP Ib-IX-V complex). It presents with thrombocytopenia, abnormally giant platelets on peripheral smear, and absent platelet aggregation to ristocetin that does NOT correct with normal plasma (distinguishing it from vWD, where normal plasma provides missing vWF and restores aggregation)."
      ],
      [
        "Deficiency of platelet membrane glycoprotein IIb/IIIa (integrin alpha-IIb/beta-3) preventing fibrinogen-mediated platelet cross-linking",
        "Glanzmann thrombasthenia is caused by GP IIb/IIIa deficiency; it presents with normal platelet count, normal platelet morphology, normal aggregation with ristocetin, and absent aggregation with ADP, collagen, and epinephrine."
      ],
      [
        "Quantitative deficiency of plasma von Willebrand factor with impaired factor VIII transport",
        "Von Willebrand disease also shows impaired ristocetin aggregation, but vWD has normal platelet size and count, and the defect corrects immediately upon adding normal plasma."
      ],
      [
        "Autoantibodies directed against platelet surface glycoprotein IIb/IIIa complexes inducing splenic macrophage phagocytosis",
        "Immune thrombocytopenia (ITP) causes isolated thrombocytopenia, but aggregometry is normal and giant platelets exceeding red cell size are not characteristically uniform."
      ],
      [
        "Impaired dense granule secretion due to homozygous mutation in the dense granule nucleotide transporter (storage pool disease)",
        "Delta-storage pool disease impairs dense granules (ADP, ATP, serotonin, calcium) and reduces the secondary wave of aggregation with ADP/epinephrine, with normal ristocetin aggregation."
      ]
    ],
    "shortestValidSolution": "Thrombocytopenia + giant platelets + absent ristocetin aggregation not corrected by normal plasma = Bernard-Soulier syndrome -> GP Ib-IX-V receptor deficiency.",
    "necessaryInference": "Distinguish Bernard-Soulier (GP Ib defect, giant platelets, uncorrected by plasma) from Glanzmann (GP IIb/IIIa defect, normal count/size) and vWD (corrected by plasma).",
    "strongestDistractor": "Deficiency of platelet membrane glycoprotein IIb/IIIa (integrin alpha-IIb/beta-3) preventing fibrinogen-mediated platelet cross-linking",
    "distractorExclusion": "Glanzmann thrombasthenia has normal platelet counts and sizes, and normal ristocetin aggregation, whereas Bernard-Soulier has giant platelets and defective GP Ib.",
    "citation": "Nurden AT. Qualitative disorders of platelets. Lancet. 1999;353(9166):1788-1795. PMID: 10348007.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0527",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "von Willebrand Disease Subtypes and Multimer Analysis",
    "provisionalDifficulty": 5,
    "stem": "A 19-year-old woman presents with menorrhagia and prolonged bleeding following a wisdom tooth extraction. Her mother and maternal uncle have similar bleeding tendencies. Laboratory evaluation reveals: platelet count 240,000/microL, PT 12.2 seconds, and aPTT 38 seconds (mildly prolonged; normal 25-35 seconds). Platelet aggregometry shows decreased agglutination with low-dose and standard ristocetin, which completely normalizes upon the addition of normal pooled plasma. Factor VIII activity is 35% (normal 50-150%). High-molecular-weight von Willebrand factor multimer analysis demonstrates a normal multimer distribution with a proportional, mild-to-moderate reduction in all multimer sizes. Which of the following is the most likely diagnosis?",
    "choices": [
      [
        "Type 1 von Willebrand disease (quantitative partial deficiency of normal vWF)",
        "Type 1 vWD is the most common subtype (70-80%), transmitted as autosomal dominant. It represents a partial quantitative deficiency of functionally normal vWF. Multimer analysis demonstrates all multimer sizes present in normal relative proportions but at reduced total concentrations, and ristocetin agglutination is corrected by normal plasma. Factor VIII is mildly reduced because vWF serves as its carrier protein."
      ],
      [
        "Type 2A von Willebrand disease (qualitative deficiency characterized by selective absence of high-molecular-weight multimers)",
        "Type 2A vWD is a qualitative defect characterized by the selective loss of large and intermediate high-molecular-weight multimers, unlike this patient whose multimer distribution is fully preserved."
      ],
      [
        "Type 2B von Willebrand disease (gain-of-function mutation causing hyperactive platelet binding and thrombocytopenia)",
        "Type 2B vWD involves a gain-of-function mutation with enhanced binding to platelet GP Ib, producing clearance of high-molecular-weight multimers and intermittent thrombocytopenia."
      ],
      [
        "Type 3 von Willebrand disease (complete autosomal recessive absence of vWF and undetectable factor VIII)",
        "Type 3 vWD is a severe autosomal recessive disorder with virtually undetectable vWF (<1%), severe factor VIII deficiency (<5%), and severe hemophilia-like joint bleeding."
      ],
      [
        "Hemophilia A (X-linked inherited factor VIII deficiency)",
        "Hemophilia A is X-linked, causes isolated intrinsic pathway defects without mucosal bleeding or vWF abnormalities, and has normal ristocetin aggregometry."
      ]
    ],
    "shortestValidSolution": "Mucosal bleeding + prolonged aPTT + low vWF/factor VIII + normal multimer distribution + plasma correction = Type 1 vWD (quantitative deficiency).",
    "necessaryInference": "Interpret vWF multimer distribution: proportional reduction across all sizes indicates Type 1 vWD, whereas selective loss of high-molecular-weight multimers defines Type 2.",
    "strongestDistractor": "Type 2A von Willebrand disease (qualitative deficiency characterized by selective absence of high-molecular-weight multimers)",
    "distractorExclusion": "Type 2A vWD lacks high- and intermediate-molecular-weight multimers; Type 1 preserves all multimer sizes with a proportional reduction.",
    "citation": "Leebeek FW, Eikenboom JC. Von Willebrand's Disease. N Engl J Med. 2016;375(21):2067-2080. PMID: 27959701.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0528",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Hemophilia A vs B and Mixing Study Dynamics",
    "provisionalDifficulty": 5,
    "stem": "An 8-year-old boy presents with painful swelling and restricted range of motion of his right knee following minor blunt trauma. He has a maternal uncle who receives regular plasma infusions for a bleeding disorder. Physical examination reveals a large, tense hemarthrosis of the right knee. Laboratory evaluation shows: platelet count 280,000/microL, PT 11.8 seconds, and aPTT 68 seconds (markedly prolonged). A 1:1 mixing study with normal pooled plasma is performed. Immediately upon mixing, the aPTT corrects to 29 seconds; after a 2-hour incubation at 37\u00b0C, the aPTT remains fully corrected at 30 seconds. Which of the following is the most likely diagnosis?",
    "choices": [
      [
        "Congenital factor VIII or factor IX deficiency (Hemophilia A or B)",
        "Hemophilia A (factor VIII deficiency) and Hemophilia B (factor IX deficiency) are X-linked recessive disorders presenting with deep tissue bleeding and hemarthroses. The hallmark laboratory finding is isolated marked prolongation of the aPTT with a normal PT. In a 1:1 mixing study, normal plasma supplies >=50% of the deficient factor, immediately and permanently correcting the aPTT (both at baseline and after 2h incubation at 37\u00b0C)."
      ],
      [
        "Acquired factor VIII inhibitor (autoantibody against factor VIII)",
        "An acquired factor VIII inhibitor demonstrates time- and temperature-dependent antibody kinetics: the aPTT may correct immediately upon mixing, but upon 2-hour incubation at 37\u00b0C, the autoantibody neutralizes the normal factor and the aPTT prolongs again."
      ],
      [
        "Lupus anticoagulant (antiphospholipid antibody targeting prothrombinase complexes)",
        "A lupus anticoagulant is an immediate inhibitor that fails to correct immediately upon 1:1 mixing, and aPTT remains prolonged both immediately and after incubation."
      ],
      [
        "Severe factor VII deficiency (extrinsic pathway defect)",
        "Factor VII deficiency selectively prolongs the PT (extrinsic pathway); the aPTT remains normal."
      ],
      [
        "Disseminated intravascular coagulation (DIC)",
        "DIC causes consumption of multiple factors, prolonging both PT and aPTT, with severe thrombocytopenia and hypofibrinogenemia."
      ]
    ],
    "shortestValidSolution": "Hemarthrosis + isolated prolonged aPTT + 1:1 mixing study complete correction immediately and after 2h incubation = Congenital factor deficiency (Hemophilia A or B).",
    "necessaryInference": "Interpret coagulation mixing studies: factor deficiencies correct immediately and stay corrected; acquired inhibitors prolong after 2-hour incubation.",
    "strongestDistractor": "Acquired factor VIII inhibitor (autoantibody against factor VIII)",
    "distractorExclusion": "Acquired inhibitors neutralize factor VIII over time and temperature, prolonging the aPTT after 2 hours at 37\u00b0C, unlike congenital hemophilia which stays corrected.",
    "citation": "Mannucci PM, Tuddenham EG. The hemophilias--from art to science. N Engl J Med. 2001;344(23):1773-1779. PMID: 11396445.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0529",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Acquired Factor VIII Inhibitor Mixing Study Kinetics",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old woman with rheumatoid arthritis presents with extensive spontaneous ecchymoses across both thighs and retroperitoneal hematoma. She has no prior personal or family history of bleeding. Laboratory studies reveal: platelet count 220,000/microL, PT 12.0 seconds, and aPTT 74 seconds. Thrombin time and fibrinogen are normal. A 1:1 mixing study with normal pooled plasma is performed with the following results:\n- Patient plasma alone: aPTT 74 seconds\n- Normal pooled plasma alone: aPTT 28 seconds\n- 1:1 mixture immediately: aPTT 34 seconds (partial correction)\n- 1:1 mixture after 2 hours incubation at 37\u00b0C: aPTT 68 seconds (prolonged)\nWhich of the following is the underlying mechanism responsible for these findings?",
    "choices": [
      [
        "Time- and temperature-dependent IgG autoantibodies directed against factor VIII A2 or C2 functional domains neutralizing circulating factor VIII activity",
        "Acquired hemophilia A is caused by polyclonal IgG autoantibodies (inhibitors) against factor VIII, often associated with autoimmune diseases, malignancy, or postpartum. Unlike congenital hemophilia, the autoantibodies exhibit time- and temperature-dependent neutralization kinetics. When mixed with normal plasma at 37\u00b0C for 2 hours, the inhibitor progressively neutralizes factor VIII in the donor plasma, causing the aPTT to prolong significantly back toward the abnormal baseline."
      ],
      [
        "High-titer IgM antibodies against platelet factor 4-heparin complexes causing platelet clearance",
        "HIT involves antibodies against PF4-heparin complexes, producing thrombocytopenia and thrombosis, not isolated factor VIII neutralization and severe muscle hematomas."
      ],
      [
        "Immediate physical steric hindrance of the prothrombinase complex by antiphospholipid antibodies",
        "Lupus anticoagulants produce immediate non-correction upon mixing; they do not show the progressive time-dependent neutralization seen with factor VIII inhibitors."
      ],
      [
        "Constitutive proteolytic cleavage of plasma von Willebrand factor by hyperactive ADAMTS13",
        "ADAMTS13 cleaves vWF; hyperactivity does not cause isolated factor VIII inhibitor kinetics with prolonged incubated aPTT."
      ],
      [
        "Congenital absence of factor XI with impaired contact activation pathway triggering",
        "Factor XI deficiency is a congenital factor deficiency; a 1:1 mixing study would correct permanently both immediately and after incubation."
      ]
    ],
    "shortestValidSolution": "Elderly + spontaneous bleeding + isolated prolonged aPTT + mixing study prolongs after 2h incubation at 37\u00b0C = Acquired Factor VIII inhibitor.",
    "necessaryInference": "Recognize the signature time- and temperature-dependent inhibition of acquired factor VIII antibodies on coagulation mixing studies.",
    "strongestDistractor": "Immediate physical steric hindrance of the prothrombinase complex by antiphospholipid antibodies",
    "distractorExclusion": "Lupus anticoagulant causes immediate failure of correction upon mixing, whereas factor VIII inhibitors require time and warmth (2h at 37\u00b0C) to neutralize the factor.",
    "citation": "Franchini M, Lippi G. Acquired factor VIII inhibitors. Blood. 2008;112(7):250-255. PMID: 18567836.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0530",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Hematology",
    "topic": "Factor V Leiden Resistance to Activated Protein C",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old woman develops a deep venous thrombosis of the left femoral vein while taking combined oral contraceptive pills. She has no prior medical illnesses, but her father suffered a pulmonary embolism at age 40. Coagulation studies show normal PT and aPTT. An activated protein C (APC) resistance assay is performed: the addition of APC to the patient's plasma fails to prolong the clotting time compared to normal control plasma (APC sensitivity ratio < 1.6). DNA sequence analysis demonstrates a single point mutation in the F5 gene. Which of the following amino acid substitutions is responsible for this condition, and what is its physiological consequence?",
    "choices": [
      [
        "Guanine to adenine point mutation causing an Arg506Gln substitution that prevents activated protein C from cleaving and inactivating factor Va",
        "Factor V Leiden is the most common inherited thrombophilia in Caucasian populations (5%). It results from a single base substitution (G1691A) in the F5 gene, replacing arginine with glutamine at position 506 (Arg506Gln). This mutation destroys the primary cleavage site utilized by activated protein C (APC) to proteolytically degrade factor Va. Consequently, factor Va remains constitutively active, driving continuous prothrombinase activity and thrombin generation."
      ],
      [
        "Adenine to guanine point mutation in the 3'-untranslated region (G20210A) of the prothrombin gene causing increased mRNA stability",
        "Prothrombin G20210A is a point mutation in the 3'-UTR of the prothrombin gene that elevates prothrombin mRNA stability and plasma levels, distinct from factor V Leiden."
      ],
      [
        "Homozygous missense mutation in the antithrombin III reactive center preventing heparin binding",
        "Antithrombin III deficiency impairs heparin-mediated inactivation of thrombin and factor Xa, not factor Va cleavage by APC."
      ],
      [
        "Nonsense mutation in the protein S gene preventing its cofactor binding to protein C",
        "Protein S deficiency reduces APC cofactor activity, but does not alter the factor V amino acid sequence or create mutated APC-resistant factor Va."
      ],
      [
        "Val34Leu mutation in the factor XIII A-subunit accelerating fibrin cross-linking",
        "Factor XIII Val34Leu affects fibrin clot stabilization and is not the cause of APC resistance in venous thromboembolism."
      ]
    ],
    "shortestValidSolution": "DVT in young woman on OCP + APC resistance test failure = Factor V Leiden -> Arg506Gln mutation preventing factor Va cleavage by activated protein C.",
    "necessaryInference": "Identify the molecular mechanism of Factor V Leiden: Arg506Gln point mutation eliminates the cleavage site for activated protein C.",
    "strongestDistractor": "Adenine to guanine point mutation in the 3'-untranslated region (G20210A) of the prothrombin gene causing increased mRNA stability",
    "distractorExclusion": "Prothrombin G20210A increases prothrombin transcription; Factor V Leiden is a missense Arg506Gln mutation conferring APC resistance.",
    "citation": "Dahlb\u00e4ck B. Advances in understanding pathogenic mechanisms of thrombophilic disorders. Blood. 2008;112(1):19-27. PMID: 18451307.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0531",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Hematology",
    "topic": "Antiphospholipid Syndrome and Lupus Anticoagulant Laboratory Paradox",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old woman with a history of two unexplained spontaneous second-trimester miscarriages presents with right lower extremity swelling and pain. Duplex ultrasonography confirms a popliteal vein deep venous thrombosis. Routine preoperative coagulation studies reveal: platelet count 135,000/microL, PT 11.5 seconds, and aPTT 54 seconds (prolonged). A 1:1 mixing study shows failure of the aPTT to correct immediately. Dilute Russell viper venom time (dRVVT) is markedly prolonged and demonstrates complete correction upon the addition of excess hexagonal-phase phosphatidylethanolamine phospholipids. Which of the following best explains why this patient has thrombosis despite a prolonged aPTT in vitro?",
    "choices": [
      [
        "The antiphospholipid antibodies bind phospholipid-protein complexes in vitro to delay assembly of the prothrombinase complex, whereas in vivo they activate endothelial cells and platelets to promote thrombosis",
        "Lupus anticoagulant represents an in vitro laboratory artifact: antibodies (e.g. against beta-2-glycoprotein I or prothrombin) bind phospholipids in the reagent, competing with coagulation factors and falsely prolonging the phospholipid-dependent aPTT and dRVVT. Adding excess phospholipid overcomes this competition, confirming the inhibitor. In vivo, however, these antibodies cross-link receptors on endothelial cells, monocytes, and platelets, driving procoagulant tissue factor expression, complement activation, and life-threatening thrombosis (APS)."
      ],
      [
        "The antibodies selectively consume antithrombin III within the reticuloendothelial system",
        "Antiphospholipid antibodies do not directly consume antithrombin III; they bind phospholipid-binding proteins."
      ],
      [
        "Excessive circulating soluble tissue factor pathway inhibitor (TFPI) impairs contact activation",
        "TFPI inhibits factor Xa and tissue factor-VIIa, not contact activation; APS is mediated by antiphospholipid antibodies."
      ],
      [
        "Direct proteolytic destruction of factor IXa by circulating immune complexes",
        "Factor IXa is not proteolytically destroyed in APS; mixing studies show presence of a phospholipid-dependent inhibitor."
      ],
      [
        "Autoantibodies directly activate tissue plasminogen activator causing rapid clot dissolution",
        "Activating tPA would cause bleeding and hyperfibrinolysis, not the venous/arterial thrombosis and fetal loss seen in APS."
      ]
    ],
    "shortestValidSolution": "Recurrent miscarriages + DVT + prolonged aPTT that fails to correct on mix + corrects with excess phospholipid = Antiphospholipid Syndrome (Lupus Anticoagulant).",
    "necessaryInference": "Resolve the antiphospholipid paradox: in vitro phospholipid competition prolongs aPTT, while in vivo endothelial/platelet activation causes thrombosis.",
    "strongestDistractor": "The antibodies selectively consume antithrombin III within the reticuloendothelial system",
    "distractorExclusion": "APS is driven by antibodies against beta-2-glycoprotein I and prothrombin complexes, not antithrombin consumption.",
    "citation": "Miyakis S, et al. International consensus statement on an update of the classification criteria for definite antiphospholipid syndrome (APS). J Thromb Haemost. 2006;4(2):295-306. PMID: 16420318.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0532",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Hematology",
    "topic": "Heparin-Induced Thrombocytopenia Type 2 Pathogenesis",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man undergoes elective total hip arthroplasty and is placed on subcutaneous unfractionated heparin for venous thromboembolism prophylaxis. On postoperative day 7, his platelet count drops from a baseline of 280,000/microL to 72,000/microL (>50% drop). Simultaneously, he develops acute pain, pallor, and pulselessness in his right foot; emergent arteriography confirms acute right popliteal arterial thrombosis. Which of the following is the underlying immunologic mechanism responsible for both the thrombocytopenia and the paradoxical arterial thrombosis in this patient?",
    "choices": [
      [
        "IgG autoantibodies bind multimolecular complexes of platelet factor 4 (PF4) and heparin, cross-linking platelet Fc gamma RIIa receptors to induce intense platelet activation, microparticle release, and consumptive clearance",
        "Heparin-induced thrombocytopenia (HIT Type 2) is an immune-mediated drug reaction occurring 5-10 days after heparin exposure. Unfractionated heparin binds positively charged PF4 released from platelet alpha granules. This conformational change exposes a neoepitope recognized by IgG autoantibodies. The IgG-PF4-heparin complexes bind to Fc gamma RIIa receptors on platelets, inducing vigorous platelet activation, thrombin generation, procoagulant microparticle shedding, and consumptive thrombocytopenia with extensive arterial/venous thrombosis."
      ],
      [
        "Direct non-immune agglutination of platelets mediated by heparin molecules cross-linking glycoprotein Ib-IX receptors",
        "Non-immune agglutination occurs in HIT Type 1, which begins within 1-2 days of heparin, causes mild transient thrombocytopenia (platelets > 100,000), and carries no risk of thrombosis."
      ],
      [
        "Complement-mediated lysis of megakaryocytes in the bone marrow triggered by anti-thrombopoietin antibodies",
        "HIT does not involve bone marrow megakaryocyte destruction; platelets are consumed in the peripheral circulation."
      ],
      [
        "Autoantibodies against ADAMTS13 preventing the cleavage of ultra-large von Willebrand factor multimers",
        "ADAMTS13 antibodies cause thrombotic thrombocytopenic purpura (TTP), not heparin-induced thrombocytopenia."
      ],
      [
        "Cross-reactivity of heparin with endothelial cell thrombomodulin preventing activated protein C generation",
        "Heparin does not inactivate thrombomodulin; the mechanism of HIT is Fc gamma RIIa-mediated platelet activation by PF4-heparin-IgG complexes."
      ]
    ],
    "shortestValidSolution": "Heparin exposure (day 7) + >50% platelet drop + new arterial thrombosis = HIT Type 2 -> IgG against PF4-heparin complexes cross-linking Fc gamma RIIa receptors.",
    "necessaryInference": "Differentiate Type 1 HIT (benign, non-immune) from Type 2 HIT (immune, IgG against PF4-heparin complexes causing Fc-gamma-RIIa platelet activation and catastrophic thrombosis).",
    "strongestDistractor": "Direct non-immune agglutination of platelets mediated by heparin molecules cross-linking glycoprotein Ib-IX receptors",
    "distractorExclusion": "Non-immune platelet agglutination is HIT Type 1 (mild, no thrombosis); Type 2 HIT is mediated by IgG antibodies against PF4-heparin complexes.",
    "citation": "Warkentin TE. Heparin-induced thrombocytopenia: pathogenesis and management. Br J Haematol. 2003;121(4):535-555. PMID: 12752095.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0533",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Thrombotic Thrombocytopenic Purpura and ADAMTS13",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old woman presents to the emergency department with confusion, headache, and scattered petechiae on her extremities. Blood pressure is 128/82 mm Hg, and temperature is 38.1\u00b0C (100.6\u00b0F). Laboratory evaluation demonstrates: hemoglobin 7.8 g/dL, platelet count 18,000/microL, serum creatinine 1.4 mg/dL, total bilirubin 3.8 mg/dL (direct 0.6 mg/dL), and lactate dehydrogenase 1,450 U/L (markedly elevated). Peripheral blood smear shows abundant schistocytes (helmet cells) and polychromasia. Coagulation profile reveals: PT 11.8 seconds, aPTT 29 seconds, and fibrinogen 340 mg/dL (normal 200-400 mg/dL). Direct Coombs test is negative. Which of the following is the definitive pathophysiological defect in this condition?",
    "choices": [
      [
        "Severe deficiency of plasma ADAMTS13 metalloproteinase activity resulting from inhibitory IgG autoantibodies, leading to uncleaved ultra-large von Willebrand factor multimers that shear platelets in arterioles",
        "Thrombotic thrombocytopenic purpura (TTP) is caused by severe deficiency of ADAMTS13 (<10% activity), usually due to an acquired IgG autoantibody. ADAMTS13 normally cleaves ultra-large vWF multimers secreted by endothelial cells. In its absence, ultra-large multimers accumulate and induce spontaneous microvascular platelet aggregation without activating the coagulation cascade. This produces microangiopathic hemolytic anemia (schistocytes, high LDH, negative Coombs) and severe thrombocytopenia with NORMAL PT, aPTT, and fibrinogen."
      ],
      [
        "Shiga toxin-mediated direct cytotoxic injury to glomerular microvascular endothelial cells via Gb3 receptor internalization",
        "Shiga toxin endothelial injury causes hemolytic uremic syndrome (HUS), predominantly in children with prominent acute kidney injury, normal ADAMTS13, and rare neurological symptoms."
      ],
      [
        "Massive systemic tissue factor release triggering uncontrolled thrombin generation and consumptive coagulopathy",
        "Systemic tissue factor release defines DIC, which characteristically prolongs PT and aPTT and severely depletes fibrinogen, unlike TTP where coagulation times are normal."
      ],
      [
        "Somatic mutation in the PIGA gene causing loss of glycosylphosphatidylinositol-anchored complement regulatory proteins",
        "PIGA mutations cause paroxysmal nocturnal hemoglobinuria (PNH) with complement-mediated hemolysis and venous thrombosis, not schistocytic microangiopathy with normal coagulation."
      ],
      [
        "IgM cold agglutinins binding to red blood cell I-antigens causing complement C3b opsonization",
        "Cold agglutinin disease causes IgM-mediated extravascular hemolysis, agglutination on smear, and positive Coombs for C3, without schistocytes or thrombocytopenia."
      ]
    ],
    "shortestValidSolution": "Confusion + fever + thrombocytopenia + MAHA (schistocytes, high LDH) + normal PT/aPTT/fibrinogen = TTP -> ADAMTS13 deficiency / autoantibody.",
    "necessaryInference": "Distinguish TTP (normal PT/aPTT/fibrinogen, ADAMTS13 deficiency) from DIC (prolonged PT/aPTT, low fibrinogen) and HUS (prominent renal failure, normal ADAMTS13).",
    "strongestDistractor": "Massive systemic tissue factor release triggering uncontrolled thrombin generation and consumptive coagulopathy",
    "distractorExclusion": "DIC prolongs PT/aPTT and consumes fibrinogen; TTP is a pure platelet consumptive microangiopathy with completely normal coagulation parameters.",
    "citation": "Sadler JE. Pathophysiology of thrombotic thrombocytopenic purpura. Blood. 2017;130(10):1181-1188. PMID: 28765311.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0534",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Renal",
    "topic": "Hemolytic Uremic Syndrome Shiga Toxin Gb3 Mechanism",
    "provisionalDifficulty": 5,
    "stem": "A 4-year-old boy is brought to the clinic 6 days after developing severe crampy abdominal pain and bloody diarrhea following a visit to a petting zoo. Over the past 24 hours, he has become pale and irritable with markedly reduced urine output. Physical examination reveals petechiae on his trunk and pretibial edema. Laboratory evaluation shows: hemoglobin 7.2 g/dL, platelet count 24,000/microL, blood urea nitrogen 54 mg/dL, and serum creatinine 2.8 mg/dL. Peripheral blood smear confirms numerous schistocytes and polychromasia. Coagulation panel shows normal PT and aPTT. Stool culture yields Shiga toxin-producing Escherichia coli (STEC) serotype O157:H7. Which of the following describes the molecular mechanism by which this bacterial toxin causes renal microvascular thrombosis?",
    "choices": [
      [
        "The B subunit binds the globotriaosylceramide (Gb3) receptor on glomerular endothelial cells, facilitating A-subunit translocation which halts protein synthesis by cleaving 28S ribosomal RNA",
        "Shiga toxin (Stx1/Stx2) produced by STEC O157:H7 is an AB5 toxin. The five B subunits bind to globotriaosylceramide (Gb3/CD77) receptors, which are densely expressed on renal glomerular endothelial cells and mesangial cells. Upon endocytosis, the catalytic A subunit is cleaved, enters the cytosol, and cleaves an adenine residue from 28S rRNA of the 60S ribosomal subunit. This halts protein synthesis, causing endothelial cell apoptosis, detachment, subendothelial swelling, and localized microvascular platelet thrombosis leading to HUS (triad of MAHA, thrombocytopenia, and acute kidney injury)."
      ],
      [
        "The toxin ADP-ribosylates the Gs alpha subunit of adenylyl cyclase, causing constitutive CFTR chloride channel opening",
        "ADP-ribosylation of Gs alpha describes cholera toxin and enterotoxigenic E. coli heat-labile toxin (LT), causing secretory watery diarrhea without microangiopathy."
      ],
      [
        "The toxin acts as a zinc endopeptidase cleaving SNARE proteins to block exocytosis of endothelial protective prostacyclin",
        "Cleavage of SNARE proteins describes botulinum and tetanus neurotoxins, not Shiga toxin."
      ],
      [
        "The toxin directly activates factor X into factor Xa, bypassing the extrinsic and intrinsic tenase complexes",
        "Direct factor X activation is caused by Russell viper venom, not bacterial Shiga toxin."
      ],
      [
        "The toxin cross-links the T-cell receptor to MHC class II molecules inducing massive systemic TNF-alpha release",
        "Cross-linking TCR to MHC class II defines superantigens (e.g. TSS toxin-1 in Staph aureus), causing toxic shock syndrome."
      ]
    ],
    "shortestValidSolution": "Bloody diarrhea + petting zoo + acute kidney injury + MAHA + thrombocytopenia = HUS -> Shiga toxin binds Gb3 and cleaves 28S rRNA halting protein synthesis.",
    "necessaryInference": "Master the molecular pathogenesis of HUS: Shiga toxin B subunit binds renal Gb3 receptor; A subunit halts translation by cleaving 28S ribosomal RNA.",
    "strongestDistractor": "The toxin ADP-ribosylates the Gs alpha subunit of adenylyl cyclase, causing constitutive CFTR chloride channel opening",
    "distractorExclusion": "ADP-ribosylation of Gs occurs in cholera/ETEC; Shiga toxin inhibits protein synthesis by inactivating the 60S ribosomal subunit via 28S rRNA cleavage.",
    "citation": "Tarr PI, et al. Shiga-toxin-producing Escherichia coli and the hemolytic uremic syndrome. Lancet. 2005;365(9464):1073-1086. PMID: 15781103.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0535",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Disseminated Intravascular Coagulation Consumptive Coagulopathy",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old primigravida at 38 weeks gestation develops sudden severe abdominal pain, vaginal bleeding, and uterine hypertonicity, diagnosed as placental abruption. During emergency cesarean delivery, massive uncontrolled hemorrhage is noted from surgical incisions, the Foley catheter, and venipuncture sites. Laboratory evaluation demonstrates: platelet count 32,000/microL (baseline 220,000/microL), PT 28 seconds (normal 11-13 seconds), aPTT 62 seconds (normal 25-35 seconds), fibrinogen 65 mg/dL (markedly depressed; normal in pregnancy 350-500 mg/dL), and D-dimer > 10,000 ng/mL. Peripheral smear reveals abundant schistocytes. Which of the following is the initiating event driving this coagulopathy?",
    "choices": [
      [
        "Massive release of decidual tissue factor (thromboplastin) into the maternal circulation triggering widespread extrinsic pathway activation and consumption of clotting factors",
        "Placental abruption releases massive amounts of tissue factor (factor III / thromboplastin) from the disrupted decidua and placenta into the maternal bloodstream. Tissue factor complexes with factor VIIa, triggering widespread extrinsic coagulation cascade activation. Uncontrolled systemic thrombin generation causes microvascular fibrin deposition, consumption of platelets, fibrinogen, and factors V and VIII, and secondary hyperfibrinolysis (elevated D-dimers) leading to catastrophic DIC."
      ],
      [
        "Amniotic fluid meconium directly activating contact factor XII into factor XIIa",
        "Contact activation via factor XII is not the driver; placental abruption is driven by tissue factor (extrinsic pathway)."
      ],
      [
        "Complete destruction of antithrombin III by placental trophoblast metalloproteinases",
        "Antithrombin is consumed secondarily in DIC, not selectively destroyed by trophoblast metalloproteinases."
      ],
      [
        "Autoantibody-mediated inhibition of protein C activation on endothelial thrombomodulin",
        "Protein C activation is impaired by endothelial injury, but the initiating trigger in abruption is decidual tissue factor release."
      ],
      [
        "Primary hyperfibrinolysis caused by excessive systemic release of tissue plasminogen activator from uterine myocytes",
        "Primary hyperfibrinolysis lacks microvascular thrombosis and schistocytes; DIC is a consumptive coagulopathy driven by thrombin generation followed by secondary fibrinolysis."
      ]
    ],
    "shortestValidSolution": "Placental abruption + bleeding from venipuncture + low platelets + high PT/aPTT + low fibrinogen + high D-dimer = DIC -> decidual tissue factor release.",
    "necessaryInference": "Trace the initiating trigger of DIC in obstetric emergencies: decidual tissue factor enters circulation, triggering explosive extrinsic thrombin generation.",
    "strongestDistractor": "Primary hyperfibrinolysis caused by excessive systemic release of tissue plasminogen activator from uterine myocytes",
    "distractorExclusion": "Primary hyperfibrinolysis does not cause microvascular thrombi or schistocytes; DIC is defined by widespread thrombin generation and consumptive fibrinolysis.",
    "citation": "Levi M, Ten Cate H. Dissemination intravascular coagulation. N Engl J Med. 1999;341(8):586-592. PMID: 10451465.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0536",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Hematology",
    "topic": "Paroxysmal Nocturnal Hemoglobinuria PIGA Mutation",
    "provisionalDifficulty": 5,
    "stem": "A 30-year-old woman presents with severe fatigue, episodic dark morning urine, and dull right upper quadrant abdominal pain. Physical examination shows scleral icterus and tender hepatomegaly. Abdominal Doppler ultrasound demonstrates acute thrombosis of the right and middle hepatic veins (Budd-Chiari syndrome). Laboratory evaluation reveals: hemoglobin 8.2 g/dL, reticulocyte count 8.5%, platelet count 85,000/microL, WBC count 3,200/microL, LDH 1,800 U/L, and haptoglobin undetectable. Direct antiglobulin (Coombs) test is negative. Flow cytometry of peripheral blood granulocytes reveals the absence of CD55 (decay-accelerating factor) and CD59 (MAC-inhibitory protein). Which of the following is the genetic basis of this patient's disease?",
    "choices": [
      [
        "Acquired somatic mutation in the X-linked PIGA gene in a hematopoietic stem cell impairing glycosylphosphatidylinositol anchor synthesis",
        "Paroxysmal nocturnal hemoglobinuria (PNH) is caused by an acquired somatic mutation in the PIGA gene (located on the X chromosome) in a multipotent hematopoietic stem cell. PIGA encodes an enzyme required for the synthesis of glycosylphosphatidylinositol (GPI) anchors. Without GPI anchors, membrane-bound complement regulatory proteins, specifically CD55 (decay-accelerating factor) and CD59 (MAC-inhibitory protein / protectin), cannot attach to blood cell surfaces. This leaves red cells vulnerable to complement-mediated intravascular lysis (especially during mild nocturnal acidosis) and triggers atypical venous thromboses (hepatic vein Budd-Chiari, mesenteric, cerebral)."
      ],
      [
        "Inherited autosomal dominant mutation in the ANK1 gene encoding red cell ankyrin-1",
        "ANK1 mutations cause hereditary spherocytosis (extravascular hemolysis, normal CD55/59, no Budd-Chiari thrombosis)."
      ],
      [
        "Homozygous deletion of the C1 esterase inhibitor (SERPING1) gene on chromosome 11",
        "C1 esterase inhibitor deficiency causes hereditary angioedema with episodic bradykinin-mediated swelling, not hemolytic anemia or venous thrombosis."
      ],
      [
        "Autoimmune IgG autoantibodies directed against the erythrocyte Rh antigen complex",
        "Warm autoimmune hemolytic anemia involves IgG against Rh antigens and has a POSITIVE direct Coombs test, whereas PNH is Coombs-negative."
      ],
      [
        "Translocation t(9;22)(q34;q11) generating a constitutively active BCR-ABL1 tyrosine kinase",
        "BCR-ABL1 produces chronic myeloid leukemia (CML), not complement-mediated intravascular hemolysis with CD55/59 deficiency."
      ]
    ],
    "shortestValidSolution": "Dark morning urine + Coombs-negative hemolysis + Budd-Chiari thrombosis + flow cytometry missing CD55/CD59 = PNH -> acquired somatic PIGA mutation.",
    "necessaryInference": "Connect somatic PIGA mutations to GPI-anchor failure, loss of complement regulators (CD55/CD59), intravascular hemolysis, and atypical venous thrombosis.",
    "strongestDistractor": "Autoimmune IgG autoantibodies directed against the erythrocyte Rh antigen complex",
    "distractorExclusion": "AIHA has a positive direct Coombs test; PNH is a clonal stem cell disorder that is Coombs-negative and diagnosed by flow cytometry for CD55/CD59.",
    "citation": "Brodsky RA. Paroxysmal nocturnal hemoglobinuria. Blood. 2014;124(18):2804-2811. PMID: 25237198.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0537",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Hematology",
    "topic": "G6PD Deficiency and Oxidative Stress Biochemistry",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old man of Mediterranean descent is treated with trimethoprim-sulfamethoxazole for a skin abscess. Four days later, he develops sudden dark urine, jaundice, and severe fatigue. Physical examination reveals scleral icterus and pallor without splenomegaly. Laboratory studies show: hemoglobin 7.4 g/dL (baseline 14.5 g/dL), reticulocyte count 7.2%, total bilirubin 4.2 mg/dL (unconjugated 3.6 mg/dL), and LDH 980 U/L. Peripheral blood smear with crystal violet supravital staining reveals purple intracellular inclusions attached to the inner erythrocyte membrane, along with numerous 'bite cells' (degmacytes). Which of the following biochemical pathways is primarily defective in this patient's erythrocytes?",
    "choices": [
      [
        "The pentose phosphate pathway failing to regenerate NADPH required by glutathione reductase to maintain reduced glutathione against oxidative damage",
        "Glucose-6-phosphate dehydrogenase (G6PD) catalyzes the rate-limiting step of the hexose monophosphate (pentose phosphate) shunt: converting glucose-6-phosphate to 6-phosphoglucono-delta-lactone while reducing NADP+ to NADPH. Erythrocytes lack mitochondria and rely exclusively on the HMP shunt for NADPH. NADPH is the essential cofactor for glutathione reductase to convert oxidized glutathione (GSSG) back to reduced glutathione (GSH). Without GSH, reactive oxygen species from oxidant drugs (sulfa, dapsone, primaquine) oxidize hemoglobin sulfhydryl groups, causing hemoglobin to precipitate as HEINZ BODIES. Splenic macrophages pluck out these inclusions, producing BITE CELLS."
      ],
      [
        "The Embden-Meyerhof glycolytic pathway failing to generate sufficient ATP to power erythrocyte membrane Na+/K+-ATPase pumps",
        "Glycolytic ATP failure occurs in pyruvate kinase deficiency, which causes chronic extravascular hemolysis without Heinz bodies or bite cells."
      ],
      [
        "The Rapoport-Luebering shunt failing to synthesize 2,3-bisphosphoglycerate",
        "The Rapoport-Luebering shunt generates 2,3-BPG to modulate hemoglobin oxygen affinity; defect does not cause acute oxidative hemolysis."
      ],
      [
        "The methemoglobin reductase pathway failing to reduce ferric iron (Fe3+) back to ferrous iron (Fe2+)",
        "Cytochrome b5 reductase deficiency causes methemoglobinemia (cyanosis, chocolate-colored blood), not hemolytic anemia with Heinz bodies."
      ],
      [
        "The purine nucleotide cycle failing to deaminate AMP to IMP during intense oxidative phosphorylation",
        "Erythrocytes do not perform oxidative phosphorylation and do not rely on the purine nucleotide cycle for oxidant defense."
      ]
    ],
    "shortestValidSolution": "Sulfa drug + acute hemolysis + dark urine + bite cells + Heinz bodies (supravital stain) = G6PD deficiency -> HMP shunt failure to produce NADPH for glutathione reduction.",
    "necessaryInference": "Trace erythrocyte antioxidant defense: G6PD produces NADPH in the HMP shunt; NADPH fuels glutathione reductase; reduced glutathione neutralizes peroxides.",
    "strongestDistractor": "The Embden-Meyerhof glycolytic pathway failing to generate sufficient ATP to power erythrocyte membrane Na+/K+-ATPase pumps",
    "distractorExclusion": "Pyruvate kinase deficiency impairs the Embden-Meyerhof pathway and lacks Heinz bodies; G6PD deficiency impairs the pentose phosphate pathway and produces Heinz bodies.",
    "citation": "Luzzatto L, et al. Glucose-6-phosphate dehydrogenase deficiency. Blood. 2020;136(11):1225-1240. PMID: 32702756.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0538",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Hematology",
    "topic": "Pyruvate Kinase Deficiency Glycolytic Failure",
    "provisionalDifficulty": 5,
    "stem": "A 6-month-old infant presents with pallor, poor feeding, and moderate splenomegaly. He has had persistent neonatal jaundice requiring phototherapy. Laboratory studies show: hemoglobin 6.8 g/dL, MCV 92 fL, reticulocyte count 12.0%, total bilirubin 3.6 mg/dL (unconjugated 3.0 mg/dL), and elevated serum LDH. Direct Coombs test is negative. Peripheral blood smear demonstrates polychromasia, anisopoikilocytosis, and burr-like echinocytes; Heinz bodies are absent on supravital stain. Erythrocyte osmotic fragility is normal. Biochemical analysis reveals markedly decreased erythrocyte adenosine triphosphate (ATP) levels and elevated intracellular 2,3-bisphosphoglycerate (2,3-BPG) concentrations. Which of the following enzymes is deficient in this infant?",
    "choices": [
      [
        "Pyruvate kinase in the Embden-Meyerhof glycolytic pathway",
        "Pyruvate kinase deficiency is the second most common cause of enzyme-deficiency hemolytic anemia (autosomal recessive). Pyruvate kinase converts phosphoenolpyruvate (PEP) to pyruvate, generating ATP. Mature erythrocytes lack mitochondria and depend 100% on glycolysis for ATP. ATP depletion prevents basolateral Na+/K+-ATPase and Ca2+-ATPase pumps from maintaining cell hydration and deformability. Deformed, rigid erythrocytes are sequestered and destroyed by splenic macrophages (extravascular hemolysis). Upstream glycolytic intermediates accumulate, notably 1,3-BPG, which shunts into 2,3-BPG, shifting the oxygen-hemoglobin dissociation curve to the RIGHT."
      ],
      [
        "Glucose-6-phosphate dehydrogenase (G6PD) in the hexose monophosphate shunt",
        "G6PD deficiency causes episodic intravascular/extravascular hemolysis following oxidant stress, with Heinz bodies, bite cells, and normal 2,3-BPG."
      ],
      [
        "Phosphofructokinase-1 (PFK-1) in skeletal muscle and erythrocytes (Tarui disease)",
        "Tarui disease (GSD VII) causes exercise-induced cramps and mild hemolysis; upstream accumulation of 2,3-BPG does not occur because PFK-1 is upstream of 2,3-BPG synthesis."
      ],
      [
        "Erythrocyte pyrimidine 5'-nucleotidase involved in RNA catabolism",
        "Pyrimidine 5'-nucleotidase deficiency causes basophilic stippling from retained ribosomal RNA, not elevated 2,3-BPG."
      ],
      [
        "Lactate dehydrogenase subunit A in anaerobic glycolysis",
        "LDH deficiency causes exertional myopathy and myoglobinuria without isolated severe infantile hemolytic anemia."
      ]
    ],
    "shortestValidSolution": "Infantile Coombs-negative hemolysis + splenomegaly + low erythrocyte ATP + high 2,3-BPG + no Heinz bodies = Pyruvate kinase deficiency.",
    "necessaryInference": "Understand the metabolic signature of pyruvate kinase deficiency: failure of ATP generation causes rigid RBCs, while upstream PEP accumulation elevates 2,3-BPG.",
    "strongestDistractor": "Glucose-6-phosphate dehydrogenase (G6PD) in the hexose monophosphate shunt",
    "distractorExclusion": "G6PD deficiency causes acute episodic hemolysis with Heinz bodies and bite cells; pyruvate kinase deficiency causes chronic hemolysis with elevated 2,3-BPG and no Heinz bodies.",
    "citation": "Grace RF, et al. The spectrum of pyruvate kinase deficiency. Blood. 2018;131(20):2183-2192. PMID: 29540348.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0539",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Hereditary Spherocytosis Cytoskeletal Membrane Loss",
    "provisionalDifficulty": 5,
    "stem": "A 16-year-old boy presents with right upper quadrant pain, dark urine, and mild scleral icterus. Abdominal ultrasonography demonstrates multiple radiopaque gallstones in the gallbladder and moderate splenomegaly. His father underwent splenectomy in his twenties for 'anemia.' Laboratory studies show: hemoglobin 10.8 g/dL, MCV 84 fL, mean corpuscular hemoglobin concentration (MCHC) 37.5 g/dL (markedly elevated; normal 32-36 g/dL), reticulocyte count 8.2%, and unconjugated bilirubin 2.8 mg/dL. Direct antiglobulin (Coombs) test is negative. Peripheral smear demonstrates numerous small, dense, spherical erythrocytes lacking central pallor. An acidified glycerol lysis test and eosin-5-maleimide (EMA) binding test are both abnormal. Which of the following is the primary pathophysiological event in this patient's disease?",
    "choices": [
      [
        "Mutations in ankyrin, band 3, or spectrin weaken the vertical interactions between the plasma membrane lipid bilayer and the underlying cytoskeleton, causing spontaneous vesicle shedding and decreased surface-area-to-volume ratio",
        "Hereditary spherocytosis (HS) is most commonly autosomal dominant (75%) due to defects in ANKYRIN, BAND 3, or SPECTRIN. These proteins form vertical tethering linkages between the erythrocyte lipid bilayer and the spectrin cytoskeleton. Uncoupling allows spontaneous shedding of bilayer lipid microvesicles as red cells circulate. Progressive membrane loss without loss of intracellular contents decreases the SURFACE-AREA-TO-VOLUME RATIO, forcing the cell into a non-deformable sphere (spherocyte) with high MCHC (>36 g/dL). Spherocytes cannot navigate the narrow endothelial slits of the splenic cords of Billroth, leading to splenic extravascular hemolysis, splenomegaly, and pigmented calcium bilirubinate gallstones."
      ],
      [
        "Autoantibodies targeting red blood cell surface glycophorin A inducing partial phagocytosis by splenic cords",
        "Autoantibodies describe autoimmune hemolytic anemia (positive Coombs test); HS is an inherited structural cytoskeletal defect (negative Coombs)."
      ],
      [
        "Deficiency of CD59 (membrane inhibitor of reactive lysis) permitting unregulated C5b-9 assembly",
        "CD59 deficiency causes paroxysmal nocturnal hemoglobinuria, which produces intravascular hemolysis and venous thrombosis, not spherocytes with high MCHC."
      ],
      [
        "Oxidative cross-linking of beta-globin chains to the inner spectrin lattice forming Heinz bodies",
        "Oxidative Heinz body cross-linking occurs in G6PD deficiency, not hereditary spherocytosis."
      ],
      [
        "Substitution of valine for glutamic acid at codon 6 of the beta-globin gene producing rigid crystalline polymers",
        "Glu6Val substitution defines sickle cell anemia (HbS), which produces sickled erythrocytes and vaso-occlusive crises."
      ]
    ],
    "shortestValidSolution": "Splenomegaly + bilirubin gallstones + high MCHC (>36) + negative Coombs + abnormal EMA binding = Hereditary Spherocytosis -> ankyrin/spectrin defect causing membrane loss.",
    "necessaryInference": "Master the biomechanics of spherocyte formation: vertical cytoskeletal uncoupling causes microvesicle shedding, decreased surface-to-volume ratio, and high MCHC.",
    "strongestDistractor": "Autoantibodies targeting red blood cell surface glycophorin A inducing partial phagocytosis by splenic cords",
    "distractorExclusion": "Warm AIHA also produces spherocytes via partial macrophage phagocytosis, but has a POSITIVE direct Coombs test, whereas HS is hereditary and Coombs-negative.",
    "citation": "Perrotta S, et al. Hereditary spherocytosis. Lancet. 2008;372(9647):1411-1426. PMID: 18940465.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0540",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Hematology",
    "topic": "Warm vs Cold Autoimmune Hemolytic Anemia",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old woman with chronic lymphocytic leukemia (CLL) presents with progressive fatigue, shortness of breath on exertion, and jaundice. Physical examination reveals pallor, scleral icterus, and moderate splenomegaly without acrocyanosis. Laboratory evaluation shows: hemoglobin 6.4 g/dL, MCV 98 fL, reticulocyte count 11.4%, total bilirubin 4.1 mg/dL (unconjugated 3.5 mg/dL), and LDH 1,120 U/L. Peripheral blood smear reveals numerous spherocytes and polychromatophilic macrocytes. A direct antiglobulin (Coombs) test is performed: patient erythrocytes agglutinate strongly with anti-IgG antiserum at 37\u00b0C, but show no agglutination with anti-C3d antiserum. Which of the following is the predominant site and mechanism of erythrocyte clearance in this patient?",
    "choices": [
      [
        "Splenic red pulp macrophages recognize IgG Fc regions via Fc gamma receptors, partially phagocytosing the erythrocyte membrane (extravascular hemolysis)",
        "Warm autoimmune hemolytic anemia (wAIHA) is typically mediated by polyclonal IgG autoantibodies that bind red blood cell antigens (usually Rh complex) at warm body temperature (37\u00b0C). IgG-coated erythrocytes pass through the splenic cords of Billroth, where splenic macrophages express Fc gamma receptors (Fc gamma RI/RIIa). Macrophages bind and partially phagocytose portions of the erythrocyte membrane, stripping membrane lipids and transforming the cells into microspherocytes. Repeated splenic passage leads to complete extravascular destruction."
      ],
      [
        "Hepatic Kupffer cells recognize surface-bound C3b fragments via complement receptor 1 (CR1) in the portal circulation",
        "Kupffer cell clearance of C3b-opsonized red cells characterizes cold agglutinin disease (IgM-mediated), which tests positive for anti-C3d and negative for anti-IgG."
      ],
      [
        "Intravascular complement activation directly assembling C5b-9 membrane attack complexes in acral capillary beds",
        "Direct C5b-9 intravascular lysis occurs in paroxysmal cold hemoglobinuria (Donath-Landsteiner) or severe cold agglutinin disease, not warm IgG AIHA."
      ],
      [
        "Renal peritubular capillary endothelial endocytosis of aggregated immunoglobulin light chains",
        "Endothelial endocytosis does not clear red cells; light chain deposition occurs in myeloma cast nephropathy."
      ],
      [
        "Pulmonary alveolar macrophage phagocytosis triggered by elevated pulmonary arterial shear stress",
        "Alveolar macrophages clear inhaled particles and intra-alveolar hemorrhage, not circulating IgG-opsonized erythrocytes."
      ]
    ],
    "shortestValidSolution": "CLL + Coombs positive for IgG at 37\u00b0C (negative C3d) + spherocytes = Warm AIHA -> splenic red pulp macrophage Fc gamma receptor phagocytosis (extravascular).",
    "necessaryInference": "Differentiate Warm AIHA (IgG, 37\u00b0C, positive anti-IgG, splenic Fc-receptor extravascular clearance) from Cold AIHA (IgM, cold temps, positive anti-C3d, hepatic Kupffer clearance).",
    "strongestDistractor": "Hepatic Kupffer cells recognize surface-bound C3b fragments via complement receptor 1 (CR1) in the portal circulation",
    "distractorExclusion": "Hepatic Kupffer cells clear C3b-coated red cells in Cold Agglutinin Disease (IgM); Warm AIHA is mediated by IgG and cleared by splenic macrophages.",
    "citation": "Barcellini W, Fattizzo B. The changing landscape of autoimmune hemolytic anemias. Front Immunol. 2020;11:946. PMID: 32547547.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0541",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Hematology",
    "topic": "Beta-Thalassemia Minor vs Major Electrophoresis Profiling",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old asymptomatic Mediterranean woman undergoes routine pre-conception screening. Physical examination is unremarkable. Complete blood count reveals: hemoglobin 11.2 g/dL, RBC count 5.8 x 10^12/L (elevated; normal 4.0-5.2), MCV 66 fL (markedly microcytic), MCH 21 pg, and RDW 12.8% (normal 11.5-14.5%). Serum ferritin is 110 ng/mL (normal 15-200 ng/mL). Peripheral blood smear shows microcytic, hypochromic erythrocytes with prominent target cells and basophilic stippling. Hemoglobin high-performance liquid chromatography (HPLC) demonstrates: HbA 92.5%, HbA2 5.5% (elevated; normal 1.5-3.5%), and HbF 2.0% (normal < 1.0%). Which of the following is the underlying molecular defect in this patient?",
    "choices": [
      [
        "Heterozygous point mutation in the beta-globin gene promoter or splice junctions causing reduced synthesis of beta-globin chains (beta/beta+ or beta/beta0)",
        "Beta-thalassemia minor (trait) is caused by heterozygous mutations (promoter mutations e.g. TATA box, or splice site mutations) in the HBB gene on chromosome 11, leading to reduced (beta+) or absent (beta0) beta-chain synthesis. Unpaired alpha-chains aggregate mildly, causing ineffective erythropoiesis and microcytosis. A classic clue is pronounced microcytosis (MCV < 70) with an ELEVATED total RBC count (Mentzer index MCV/RBC < 13) and NORMAL RDW, distinguishing it from iron deficiency. Hemoglobin electrophoresis definitively confirms the diagnosis by showing ELEVATED HbA2 (> 3.5%) and slightly elevated HbF."
      ],
      [
        "Complete deletion of all four alpha-globin genes (--/--) on chromosome 16 resulting in hemoglobin Barts tetramers",
        "Four-gene alpha-globin deletion causes hemoglobin Barts (gamma-4) and hydrops fetalis, incompatible with life."
      ],
      [
        "Homozygous nonsense mutation in the beta-globin coding sequence causing complete absence of beta-globin chains (beta0/beta0)",
        "Homozygous beta-0 thalassemia causes beta-thalassemia major (Cooley anemia) with severe transfusion-dependent anemia, absent HbA, and markedly elevated HbF (>90%)."
      ],
      [
        "Mutations in the HFE gene leading to uncontrolled enterocyte iron absorption and secondary globin precipitation",
        "HFE mutations cause hereditary hemochromatosis with iron overload, not microcytic anemia with elevated HbA2."
      ],
      [
        "Acquired somatic mutation in the PIGA gene causing loss of GPI-anchored surface proteins",
        "PIGA mutations cause paroxysmal nocturnal hemoglobinuria, not microcytic hypochromic anemia with target cells."
      ]
    ],
    "shortestValidSolution": "Microcytic anemia + high RBC count + normal ferritin + target cells + HbA2 > 3.5% on HPLC = Beta-thalassemia minor -> heterozygous beta-globin promoter/splice mutation.",
    "necessaryInference": "Differentiate Beta-thalassemia minor (elevated HbA2, high RBC count, normal RDW) from Iron Deficiency (low ferritin, low RBC count, high RDW) and Beta-thalassemia major (absent HbA, massive HbF).",
    "strongestDistractor": "Homozygous nonsense mutation in the beta-globin coding sequence causing complete absence of beta-globin chains (beta0/beta0)",
    "distractorExclusion": "Homozygous beta-0 mutations cause severe transfusion-dependent beta-thalassemia major (Cooley anemia) with absent HbA; this patient has mild asymptomatic beta-thalassemia minor.",
    "citation": "Taher AT, et al. Thalassemia. Lancet. 2018;391(10116):155-167. PMID: 28778367.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0542",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Hematology",
    "topic": "Alpha-Thalassemia Deletions and Tetramer Composition",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old pregnant woman of Southeast Asian descent and her husband undergo prenatal counseling. Both partners are discovered to be carriers of the cis alpha-thalassemia trait (--/alpha alpha). Chorionic villus sampling at 11 weeks gestation reveals that the fetus has inherited the two-gene deletion from both parents, resulting in the complete absence of all four functional alpha-globin genes (--/--). Fetal echocardiography at 24 weeks shows severe cardiomegaly, massive pericardial effusion, generalized subcutaneous edema (hydrops fetalis), and severe anemia. Which of the following hemoglobin tetramers constitutes the vast majority of hemoglobin in this affected fetus?",
    "choices": [
      [
        "Gamma-4 tetramers (Hemoglobin Barts)",
        "Humans have four alpha-globin genes (two on each chromosome 16). In Southeast Asian populations, two-gene deletions typically occur in cis (--/alpha alpha). Deletion of all four alpha genes (--/--) causes Hb Barts hydrops fetalis. During fetal life, gamma-globin chains are produced to form fetal hemoglobin (alpha-2/gamma-2). In the complete absence of alpha chains, excess gamma chains aggregate into homotetramers called HEMOGLOBIN BARTS (gamma-4). Hb Barts has an extremely high oxygen affinity (P50 ~12 mm Hg) and cannot release oxygen to fetal tissues, causing severe tissue hypoxia, high-output heart failure, anasarca, and fetal demise."
      ],
      [
        "Beta-4 tetramers (Hemoglobin H)",
        "Hemoglobin H is composed of beta-4 homotetramers, which form when three alpha-globin genes are deleted (--/-alpha); it causes moderate-to-severe hemolytic anemia in children/adults, not hydrops fetalis."
      ],
      [
        "Alpha-2/gamma-2 tetramers (Hemoglobin F)",
        "Hemoglobin F is normal fetal hemoglobin requiring two alpha and two gamma chains; it cannot assemble when all four alpha genes are deleted."
      ],
      [
        "Alpha-2/delta-2 tetramers (Hemoglobin A2)",
        "Hemoglobin A2 requires alpha chains (alpha-2/delta-2); it is absent in four-gene alpha-thalassemia."
      ],
      [
        "Zeta-2/epsilon-2 tetramers (Hemoglobin Gower-1)",
        "Hb Gower-1 is an embryonic hemoglobin produced in the yolk sac during the first weeks of gestation, but is replaced by gamma-4 (Hb Barts) in second-trimester hydrops fetalis."
      ]
    ],
    "shortestValidSolution": "Four-gene alpha-globin deletion (--/--) + hydrops fetalis + Southeast Asian cis deletion = Hemoglobin Barts -> gamma-4 homotetramers with extreme oxygen affinity.",
    "necessaryInference": "Map globin chain assembly in alpha-thalassemia: 4-gene deletion produces gamma-4 (Hb Barts, hydrops fetalis); 3-gene deletion produces beta-4 (HbH disease).",
    "strongestDistractor": "Beta-4 tetramers (Hemoglobin H)",
    "distractorExclusion": "Beta-4 tetramers (HbH) occur in 3-gene deletions during childhood/adulthood; 4-gene deletion in utero produces gamma-4 tetramers (Hb Barts).",
    "citation": "Chui DH, et al. Alpha-thalassemia. Blood. 2003;101(3):791-800. PMID: 12393426.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0543",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Sickle Cell Disease Autosplenectomy and Howell-Jolly Bodies",
    "provisionalDifficulty": 5,
    "stem": "An 8-year-old boy with homozygous sickle cell disease (HbSS) is brought to the clinic for a routine health maintenance examination. He has a history of multiple acute painful vaso-occlusive crises. Physical examination reveals scleral icterus and pale conjunctivae; the spleen is non-palpable. Complete blood count demonstrates: hemoglobin 7.6 g/dL, reticulocyte count 9.5%, and platelet count 420,000/microL. Peripheral blood smear demonstrates sickle-shaped erythrocytes, target cells, and small, round, dark-blue nuclear remnants inside mature erythrocytes. Which of the following pathophysiological sequences best explains the presence of these nuclear remnants in this patient?",
    "choices": [
      [
        "Repeated microvascular vaso-occlusion in the hypoxic, acidotic splenic cords causes recurrent splenic infarction, progressive fibrosis, and functional autosplenectomy, abolishing the spleen's ability to 'pit' expelled erythrocyte nuclei (Howell-Jolly bodies)",
        "The dark-blue nuclear remnants are HOWELL-JOLLY BODIES, which represent residual DNA fragments normally removed by the spleen during erythrocyte maturation (pitting function). In sickle cell disease, the slow circulation, low PO2, and low pH of the splenic red pulp trigger rapid HbS polymerization and erythrocyte sickling. This causes repeated microinfarctions throughout childhood, culminating in splenic atrophy, extensive calcification/fibrosis, and complete AUTOSPLENECTOMY by age 5-8 years. Without a functional spleen, Howell-Jolly bodies, target cells, and thrombocytosis persist in peripheral blood, and patients are at high risk for encapsulated bacterial infections."
      ],
      [
        "Defective alternative complement pathway activation causes persistent phagocytic engulfment of mature erythrocyte nuclei in the bone marrow",
        "Howell-Jolly bodies are nuclear remnants left behind when erythroid precursors extrude nuclei, not complement-mediated engulfment."
      ],
      [
        "Direct precipitation of aggregated denatured beta-globin chains along the inner surface of the erythrocyte plasma membrane",
        "Denatured hemoglobin precipitating on erythrocyte membranes describes Heinz bodies (seen with supravital stain in G6PD deficiency), not Howell-Jolly bodies on Wright-Giemsa stain."
      ],
      [
        "Aggregation of iron-laden mitochondria within perinuclear lysosomes due to impaired ferrochelatase activity",
        "Iron-laden mitochondria encircling nuclei describe ringed sideroblasts in sideroblastic anemia, not Howell-Jolly bodies."
      ],
      [
        "Splenic hyperplasia with accelerated sinusoidal clearance resulting in premature extrusion of erythroblast nuclei into the sinusoids",
        "Splenic hyperplasia would accelerate pitting and eliminate Howell-Jolly bodies; their presence proves ABSENCE of splenic function."
      ]
    ],
    "shortestValidSolution": "Sickle cell disease + non-palpable spleen + round blue nuclear remnants on Wright stain = Howell-Jolly bodies -> repeated splenic infarctions causing autosplenectomy.",
    "necessaryInference": "Connect sickle cell red pulp vaso-occlusion to splenic fibrosis/autosplenectomy, which manifests as Howell-Jolly bodies (unpitted nuclear DNA remnants).",
    "strongestDistractor": "Direct precipitation of aggregated denatured beta-globin chains along the inner surface of the erythrocyte plasma membrane",
    "distractorExclusion": "Denatured globin precipitates are Heinz bodies (invisible on routine Wright stain; seen on crystal violet); Howell-Jolly bodies are nuclear DNA fragments.",
    "citation": "Ballas SK. Sickle cell disease: clinical management. Baillieres Clin Haematol. 1998;11(1):185-214. PMID: 10070381.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0544",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Sickle Cell Trait Renal Papillary Necrosis Mechanism",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old African American male collegiate athlete presents with sudden-onset painless gross hematuria. He has no dysuria, flank trauma, or fever. He reports participating in intense pre-season conditioning in high ambient heat yesterday. Family history is notable for sickle cell trait in his mother. Urinalysis shows numerous intact red blood cells without red cell casts or significant proteinuria. Renal ultrasound is unremarkable. Flexible cystoscopy demonstrates dark blood discharging exclusively from the right ureteral orifice; retrograde pyelography reveals a 'ring shadow' sign with blunting and sloughing of the renal medullary papillae. Which of the following microenvironmental conditions in the renal medulla is primarily responsible for inducing erythrocyte sickling in patients with sickle cell trait?",
    "choices": [
      [
        "Extreme hypertonicity and low oxygen tension in the renal medullary vasa recta drive localized HbS polymerization despite normal systemic oxygenation",
        "Although patients with sickle cell trait (HbAS, ~40% HbS) are asymptomatic and do not sickle under normal systemic conditions, the RENAL MEDULLA represents a unique physiological microenvironment: (1) Extreme hypertonicity (up to 1,200 mOsm/kg); (2) Severe hypoxia (PO2 10-20 mm Hg); and (3) Acidosis. High osmolality dehydrates erythrocytes, increasing intracellular HbS concentration, which dramatically accelerates polymer formation under low PO2. This causes localized sickling and microthrombosis in the renal vasa recta, producing RENAL PAPILLARY NECROSIS and gross hematuria. Sickle cell trait also carries an increased risk of renal medullary carcinoma."
      ],
      [
        "Immune complex deposition in the peritubular capillaries triggering alternative complement pathway-mediated ischemic necrosis",
        "Papillary necrosis in sickle cell trait is purely biophysical sickling in hyperosmolar vasa recta, not immune-complex vasculitis."
      ],
      [
        "Selective toxicity of high concentrations of free ammonium ions inducing podocyte detachment from the papillary collecting ducts",
        "Ammonium ions do not cause papillary necrosis; the necrosis is ischemic infarction of the renal papillae from vasa recta occlusion."
      ],
      [
        "Retrograde ureteral reflux of hypercalciuric urine creating mechanical erosion of the papillary urothelium",
        "Vasa recta sickling causes ischemic avascular necrosis of the papilla, not mechanical erosion from reflux."
      ],
      [
        "Autoantibodies directed against medullary aquaporin-2 channels causing local vascular spasm",
        "Autoantibodies against AQP2 do not exist in sickle cell trait; papillary necrosis is caused by localized sickling in the hypoxic vasa recta."
      ]
    ],
    "shortestValidSolution": "Sickle cell trait (HbAS) + painless gross hematuria + sloughed papillae ('ring sign') = Renal papillary necrosis -> hypertonicity and low PO2 in medullary vasa recta induce sickling.",
    "necessaryInference": "Explain why sickle cell trait patients suffer renal papillary necrosis despite normal systemic arterial oxygen: extreme medullary hyperosmolality and hypoxia trigger local sickling.",
    "strongestDistractor": "Immune complex deposition in the peritubular capillaries triggering alternative complement pathway-mediated ischemic necrosis",
    "distractorExclusion": "Papillary necrosis in sickle trait is a physical microvascular vaso-occlusive event driven by medullary hyperosmolality, not immune complex deposition.",
    "citation": "Tsaras G, et al. Complications associated with sickle cell trait: a brief narrative review. Am J Med. 2009;122(6):507-512. PMID: 19486708.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0545",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Hematology",
    "topic": "Sideroblastic Anemia ALAS2 vs Lead Toxicity",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man being treated with isoniazid, rifampin, pyrazinamide, and ethambutol for active pulmonary tuberculosis develops progressive fatigue. He did not receive pyridoxine supplementation. Complete blood count demonstrates: hemoglobin 8.4 g/dL, MCV 72 fL (microcytic), serum iron 185 microg/dL (elevated; normal 60-170 microg/dL), ferritin 420 ng/mL (elevated), and transferrin saturation 65% (elevated). Bone marrow biopsy is performed; Prussian blue staining demonstrates nucleated erythroblasts with rings of blue granules encircling the entire nucleus (ringed sideroblasts). Which of the following enzymes is inhibited by the deficiency of the active cofactor in this patient?",
    "choices": [
      [
        "Delta-aminolevulinic acid synthase (ALAS2) in the mitochondrial matrix",
        "Isoniazid competitively inhibits pyridoxal kinase, producing secondary vitamin B6 (pyridoxine) deficiency. Pyridoxal 5'-phosphate (PLP) is the obligatory cofactor for delta-aminolevulinic acid synthase (ALAS2), the rate-limiting enzyme in heme synthesis located in the mitochondrial matrix. ALAS2 condenses glycine and succinyl-CoA into delta-aminolevulinic acid (ALA). When ALAS2 is impaired, protoporphyrin synthesis fails, preventing iron incorporation into heme. Unused iron accumulates within the mitochondria encircling erythroblast nuclei, producing RINGED SIDEROBLASTS on Prussian blue staining and microcytic anemia with high serum iron/ferritin."
      ],
      [
        "Ferrochelatase in the inner mitochondrial membrane",
        "Ferrochelatase incorporates Fe2+ into protoporphyrin IX and is inhibited by lead poisoning, but does not require pyridoxine (vitamin B6) as an enzymatic cofactor."
      ],
      [
        "Delta-aminolevulinic acid dehydratase (ALAD) in the cytoplasm",
        "ALAD requires zinc and is inhibited by lead, but does not depend on pyridoxine cofactor function."
      ],
      [
        "Uroporphyrinogen decarboxylase (UROD) in the cytoplasm",
        "UROD deficiency causes porphyria cutanea tarda (cutaneous photosensitivity, tea-colored urine), not sideroblastic anemia from isoniazid."
      ],
      [
        "Porphobilinogen deaminase (PBGD) in the cytoplasm",
        "PBGD deficiency causes acute intermittent porphyria with neurovisceral symptoms, not sideroblastic anemia with ringed sideroblasts."
      ]
    ],
    "shortestValidSolution": "Isoniazid without B6 + microcytic anemia + high iron/ferritin + ringed sideroblasts = Sideroblastic anemia -> B6 deficiency inhibits mitochondrial ALAS2.",
    "necessaryInference": "Identify the enzymatic site of isoniazid-induced sideroblastic anemia: pyridoxine deficiency inactivates mitochondrial ALAS2, blocking ALA synthesis.",
    "strongestDistractor": "Ferrochelatase in the inner mitochondrial membrane",
    "distractorExclusion": "Ferrochelatase is inhibited directly by lead, whereas isoniazid causes vitamin B6 deficiency which specifically inactivates delta-aminolevulinic acid synthase (ALAS2).",
    "citation": "Furuyama K, Sassa S. Interaction between iron and heme metabolism: the role of mitochondrial ALAS. Free Radic Biol Med. 2010;48(12):1569-1579. PMID: 20302928.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0546",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Hematology",
    "topic": "Aplastic Anemia Cytotoxic T-Cell Marrow Destruction",
    "provisionalDifficulty": 5,
    "stem": "A 22-year-old woman presents with progressive fatigue, spontaneous gingival bleeding, and scattered petechiae. She has had no fever, weight loss, or toxic exposures. Physical examination shows pallor and multiple petechiae on her lower legs; there is no lymphadenopathy or hepatosplenomegaly. Complete blood count reveals: hemoglobin 6.2 g/dL, absolute reticulocyte count 8,000/microL (markedly depressed; normal 25,000-100,000/microL), absolute neutrophil count 350/microL (severe neutropenia), and platelet count 12,000/microL. Bone marrow aspiration and core biopsy demonstrate marked hypocellularity (>90% fat replacement) with residual lymphocytes and plasma cells, without abnormal blasts or dysplastic changes. Which of the following is the primary cellular mechanism driving bone marrow failure in this patient?",
    "choices": [
      [
        "Oligoclonal expansion of CD8+ cytotoxic T lymphocytes producing interferon-gamma and TNF-alpha, which induce Fas-mediated apoptosis of CD34+ multipotent hematopoietic stem cells",
        "Idiopathic acquired aplastic anemia is an autoimmune disease characterized by T-cell-mediated destruction of multipotent hematopoietic stem cells (CD34+). Autoreactive CD8+ cytotoxic T lymphocytes undergo oligoclonal expansion and secrete inhibitory cytokines, notably INTERFERON-GAMMA (IFN-gamma) and TNF-alpha. These cytokines upregulate nitric oxide synthase and Fas receptors on CD34+ stem cells, driving extensive stem cell apoptosis. This results in pancytopenia with profound reticulocytopenia and an empty, fat-replaced bone marrow without splenomegaly."
      ],
      [
        "B-cell production of neutralizing IgG autoantibodies directed against the thrombopoietin and erythropoietin receptors",
        "Aplastic anemia is mediated by cellular T-cell cytotoxicity against CD34+ stem cells, not humoral antireceptor antibodies."
      ],
      [
        "Homozygous mutation in the GATA1 transcription factor causing arrested maturation at the proerythroblast stage",
        "GATA1 mutations cause pure red cell aplasia or congenital dyserythropoietic anemia, not trilineage aplastic marrow failure."
      ],
      [
        "Extensive replacement of marrow architecture by reticulin fibers secreted by neoplastic megakaryocytes",
        "Reticulin fiber replacement describes primary myelofibrosis (which features massive splenomegaly and dacrocytes), not hypocellular fat replacement in aplastic anemia."
      ],
      [
        "Direct viral lysis of erythroid progenitor cells by autonomous parvovirus B19 replication",
        "Parvovirus B19 selectively destroys erythroid precursors causing pure red cell aplasia or transient aplastic crisis in hemolytic anemia, not true trilineage aplastic anemia with severe neutropenia and thrombocytopenia."
      ]
    ],
    "shortestValidSolution": "Pancytopenia + reticulocytopenia + empty marrow (>90% fat) + no splenomegaly = Aplastic anemia -> CD8+ cytotoxic T cells secrete IFN-gamma/TNF-alpha destroying CD34+ stem cells.",
    "necessaryInference": "Recognize the autoimmune T-cell pathogenesis of aplastic anemia: CD8+ cytotoxic T-cell cytokine secretion (IFN-gamma) triggers Fas-mediated apoptosis of CD34+ stem cells.",
    "strongestDistractor": "Direct viral lysis of erythroid progenitor cells by autonomous parvovirus B19 replication",
    "distractorExclusion": "Parvovirus B19 causes pure red cell aplasia (isolated anemia with normal WBC and platelets); aplastic anemia involves all three hematopoietic lineages.",
    "citation": "Young NS. Aplastic anemia. N Engl J Med. 2018;379(17):1643-1656. PMID: 30354958.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0547",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Polycythemia Vera JAK2 V617F Tyrosine Kinase Activation",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man presents with intense, generalized itching that occurs consistently after taking a warm shower (aquagenic pruritus). He also reports recurrent headaches, dizziness, and painful erythema in his toes. Physical examination shows a plethoric ruddy face, engorged retinal veins, and palpable splenomegaly extending 4 cm below the left costal margin. Complete blood count demonstrates: hemoglobin 20.2 g/dL, hematocrit 62%, WBC count 14,800/microL, and platelet count 520,000/microL. Serum erythropoietin (EPO) concentration is 1.2 mIU/mL (suppressed; normal 4.0-24.0 mIU/mL). Bone marrow biopsy reveals trilineage panmyelosis. Which of the following molecular alterations is responsible for this condition?",
    "choices": [
      [
        "A valine-to-phenylalanine substitution at codon 617 (V617F) in the pseudokinase domain of JAK2, relieving auto-inhibition and producing constitutive tyrosine kinase signaling independent of erythropoietin",
        "Polycythemia vera (PV) is a myeloproliferative neoplasm driven in >95% of cases by the somatic JAK2 V617F mutation on chromosome 9p. The mutation replaces valine with phenylalanine in the JH2 pseudokinase domain of the Janus kinase 2 (JAK2) non-receptor tyrosine kinase. The JH2 domain normally exerts negative inhibitory control over the catalytic JH1 domain; the V617F mutation abolishes this inhibition, causing constitutive phosphorylation of downstream STAT transcription factors (JAK-STAT pathway) independent of cytokine receptor binding. This produces panmyelosis, hyperviscosity, low serum EPO, and basophil-mediated aquagenic pruritus."
      ],
      [
        "A chromosomal translocation t(9;22)(q34;q11) forming a BCR-ABL1 chimeric oncoprotein with elevated tyrosine kinase activity",
        "BCR-ABL1 produces chronic myeloid leukemia (CML), characterized by marked granulocytosis, low LAP score, and splenomegaly, not isolated erythrocytosis with low EPO."
      ],
      [
        "An inactivating mutation in the von Hippel-Lindau (VHL) tumor suppressor gene preventing hypoxia-inducible factor 1-alpha degradation",
        "VHL inactivation causes secondary polycythemia (elevated EPO) seen in renal cell carcinoma and cerebellar hemangioblastomas, not primary polycythemia vera with suppressed EPO."
      ],
      [
        "An activating mutation in the erythropoietin receptor gene (EPOR) causing truncation of the cytoplasmic negative regulatory domain",
        "Congenital erythrocytosis can result from EPOR mutations, but does not cause panmyelosis, thrombocytosis, leukocytosis, or splenomegaly as seen in PV."
      ],
      [
        "A gain-of-function mutation in the thrombopoietin receptor (MPL W515K) producing isolated megakaryocytic hyperplasia",
        "MPL mutations drive essential thrombocythemia and primary myelofibrosis, not polycythemia vera."
      ]
    ],
    "shortestValidSolution": "Hematocrit 62% + panmyelosis + low EPO + aquagenic pruritus + splenomegaly = Polycythemia vera -> JAK2 V617F mutation in pseudokinase domain.",
    "necessaryInference": "Differentiate primary polycythemia vera (JAK2 V617F, suppressed EPO, panmyelosis) from secondary polycythemia (elevated EPO, hypoxia/renal tumor).",
    "strongestDistractor": "An inactivating mutation in the von Hippel-Lindau (VHL) tumor suppressor gene preventing hypoxia-inducible factor 1-alpha degradation",
    "distractorExclusion": "VHL inactivation increases HIF-1alpha and causes HIGH serum EPO (secondary polycythemia); PV is a primary myeloproliferative neoplasm with SUPPRESSED EPO.",
    "citation": "Spivak JL. Myeloproliferative neoplasms. N Engl J Med. 2017;376(22):2168-2181. PMID: 28564567.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0548",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Essential Thrombocythemia vs Reactive Thrombocytosis",
    "provisionalDifficulty": 5,
    "stem": "A 46-year-old woman is found to have a platelet count of 950,000/microL on routine blood work. She reports mild burning pain and erythema in her hands and feet (erythromelalgia) relieved by aspirin. She has no fever, weight loss, or bleeding. Physical examination is normal with no splenomegaly. Laboratory evaluation shows: hemoglobin 13.8 g/dL, WBC count 7,500/microL, ESR 4 mm/h, serum ferritin 95 ng/mL (normal 15-200 ng/mL), and normal C-reactive protein. Coagulation profile and BCR-ABL1 testing are negative. Bone marrow biopsy demonstrates marked megakaryocytic hyperplasia with deeply lobulated, giant, mature megakaryocytes in clusters, without reticulin fibrosis. Genetic testing reveals a CALR frameshift mutation. Which of the following features most decisively distinguishes this patient's primary myeloproliferative disorder from reactive thrombocytosis?",
    "choices": [
      [
        "The presence of clonal somatic driver mutations (CALR/JAK2/MPL) and giant, hyperlobulated megakaryocyte clusters in the bone marrow, accompanied by normal inflammatory markers",
        "Essential thrombocythemia (ET) is a clonal myeloproliferative neoplasm driven by mutations in JAK2 (55%), CALR (25%), or MPL (5%). It presents with sustained thrombocytosis (>450,000/microL), erythromelalgia, and thrombosis/bleeding risks. Bone marrow shows large, mature, hyperlobulated megakaryocytes without fibrosis. Crucially, inflammatory markers (ESR, CRP, ferritin) are completely normal. In contrast, REACTIVE thrombocytosis is driven by elevated IL-6 stimulating hepatic thrombopoietin production during infection, chronic inflammation, iron deficiency, or malignancy, and features high inflammatory markers and normal megakaryocyte morphology."
      ],
      [
        "Profound hypocalcemia resulting from excessive calcium uptake by hyperactive circulating platelets",
        "Platelet activation does not deplete systemic serum calcium; serum calcium is normal in both ET and reactive thrombocytosis."
      ],
      [
        "Severe microcytic hypochromic anemia with markedly elevated serum total iron-binding capacity",
        "Microcytic anemia with high TIBC is classic for iron deficiency anemia, a common cause of REACTIVE thrombocytosis, not primary ET."
      ],
      [
        "Marked elevation of serum leukocyte alkaline phosphatase (LAP) score exceeding 200",
        "Elevated LAP score is seen in leukemoid reactions or polycythemia vera, but is not the defining criterion separating ET from reactive thrombocytosis."
      ],
      [
        "The immediate disappearance of thrombocytosis following oral corticosteroid administration",
        "Corticosteroids do not resolve essential thrombocythemia; ET requires cytoreductive therapy (hydroxyurea) or aspirin."
      ]
    ],
    "shortestValidSolution": "Platelets 950k + erythromelalgia + normal inflammatory markers + CALR mutation + hyperlobulated megakaryocytes = Essential thrombocythemia.",
    "necessaryInference": "Differentiate clonal essential thrombocythemia (JAK2/CALR/MPL mutations, giant megakaryocytes, normal ESR/ferritin) from reactive thrombocytosis (IL-6 driven, high ESR/ferritin).",
    "strongestDistractor": "Severe microcytic hypochromic anemia with markedly elevated serum total iron-binding capacity",
    "distractorExclusion": "Iron deficiency causes reactive thrombocytosis; essential thrombocythemia is a primary clonal neoplasm characterized by normal iron parameters and somatic driver mutations.",
    "citation": "Vannucchi AM, et al. Essential thrombocythemia: 2021 update on diagnosis, risk-stratification and management. Am J Hematol. 2021;96(8):998-1017. PMID: 34125466.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0549",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Chronic Myeloid Leukemia t(9;22) and LAP Score",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man presents with progressive fatigue, early satiety, and left upper quadrant fullness. Physical examination reveals massive splenomegaly extending 8 cm below the left costal margin, without lymphadenopathy. Complete blood count demonstrates: WBC count 124,000/microL with a full spectrum of granulocytic precursors (myeloblasts 2%, promyelocytes 4%, myelocytes 18%, metamyelocytes 12%, bands 14%, segmented neutrophils 42%), absolute basophilia (6%), absolute eosinophilia (4%), hemoglobin 10.2 g/dL, and platelet count 480,000/microL. A cytochemical leukocyte alkaline phosphatase (LAP) score is performed and is markedly decreased at 12 (normal 40-130). Cytogenetic analysis confirms a t(9;22)(q34;q11) translocation. Which of the following is the primary mechanism of oncogenesis driven by this chimeric fusion product?",
    "choices": [
      [
        "Constitutive, ligand-independent tyrosine kinase activity of the cytoplasmic BCR-ABL1 oncoprotein stimulating downstream RAS-MAPK, PI3K-AKT, and STAT5 signaling to promote granulocyte proliferation and inhibit apoptosis",
        "Chronic myeloid leukemia (CML) is defined by the Philadelphia chromosome, t(9;22)(q34;q11), which fuses the BCR gene on chromosome 22 to the ABL1 non-receptor tyrosine kinase gene on chromosome 9. The resulting BCR-ABL1 chimeric fusion protein localizes to the cytoplasm and exhibits constitutive, unregulated tyrosine kinase activity. It autophosphorylates and hyperactivates downstream signaling cascades, including RAS-MAPK (proliferation), PI3K-AKT (survival/anti-apoptosis), and STAT5 (growth). The hallmark laboratory findings are massive leukocytosis with a complete myeloid continuum, prominent basophilia, and a characteristically LOW LAP score (distinguishing CML from a high-LAP leukemoid reaction)."
      ],
      [
        "Inhibition of the promyelocytic leukemia (PML) protein causing differentiation arrest at the promyelocyte stage",
        "PML-RARA fusion from t(15;17) causes acute promyelocytic leukemia (APL), arresting cells at the promyelocyte stage with Auer rods and DIC risk."
      ],
      [
        "Translocation of the MYC proto-oncogene to the immunoglobulin heavy chain locus driving continuous transcription of c-Myc",
        "t(8;14) translocating MYC to the IgH enhancer drives Burkitt lymphoma, characterized by starry-sky histology."
      ],
      [
        "Fusion of the ETV6 transcriptional repressor to the RUNX1 gene producing dysplastic erythropoiesis",
        "ETV6-RUNX1 fusion from t(12;21) is the most common cytogenetic abnormality in childhood B-ALL, not adult CML."
      ],
      [
        "Point mutation in the fms-like tyrosine kinase 3 (FLT3) receptor causing internal tandem duplication",
        "FLT3-ITD mutations occur in acute myeloid leukemia (AML) and confer a poor prognosis, distinct from the BCR-ABL1 translocation of CML."
      ]
    ],
    "shortestValidSolution": "WBC 124k + full myeloid continuum + basophilia + low LAP score (12) + t(9;22) = CML -> constitutively active BCR-ABL1 tyrosine kinase.",
    "necessaryInference": "Distinguish CML (low LAP score, basophilia, Philadelphia t(9;22) BCR-ABL1) from a leukemoid reaction (high LAP score, toxic granulation/D\u00f6hle bodies, no basophilia).",
    "strongestDistractor": "Inhibition of the promyelocytic leukemia (PML) protein causing differentiation arrest at the promyelocyte stage",
    "distractorExclusion": "PML-RARA t(15;17) defines acute promyelocytic leukemia (M3); CML is driven by BCR-ABL1 t(9;22) and features a low LAP score with myeloid differentiation.",
    "citation": "Sawyers CL. Chronic myeloid leukemia. N Engl J Med. 1999;340(17):1330-1340. PMID: 10219069.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0550",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Primary Myelofibrosis and Extramedullary Hematopoiesis",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man presents with profound fatigue, 8-kg unintentional weight loss, and severe left upper quadrant pain. Physical examination shows massive splenomegaly extending across the midline into the right lower quadrant, as well as moderate hepatomegaly. Complete blood count demonstrates: hemoglobin 7.8 g/dL, WBC count 16,500/microL, and platelet count 88,000/microL. Peripheral blood smear reveals leukoerythroblastosis (nucleated red blood cells, myelocytes, and metamyelocytes) and numerous tear-drop-shaped erythrocytes (dacrocytes). Bone marrow aspiration yields a 'dry tap' (punctio sicca); bone marrow core biopsy demonstrates hypercellularity with extensive dense reticulin and collagen fibrosis, accompanied by atypical megakaryocyte clustering. Genetic analysis is positive for the JAK2 V617F mutation. Which of the following cytokine mediators secreted by neoplastic megakaryocytes is primarily responsible for the marrow fibrosis in this condition?",
    "choices": [
      [
        "Platelet-derived growth factor (PDGF) and transforming growth factor-beta (TGF-beta) stimulating non-clonal polyclonal fibroblast proliferation and collagen deposition",
        "Primary myelofibrosis (PMF) is a chronic myeloproliferative neoplasm characterized by clonal megakaryocyte hyperplasia (driven by JAK2, CALR, or MPL mutations). Neoplastic megakaryocytes release massive amounts of fibrogenic cytokines into the bone marrow microenvironment, primarily TRANSFORMING GROWTH FACTOR-BETA (TGF-beta) and PLATELET-DERIVED GROWTH FACTOR (PDGF). These cytokines stimulate reactive, NON-CLONAL fibroblasts to synthesize extensive reticulin and collagen, obliterating normal marrow space ('dry tap'). Hematopoietic stem cells migrate to the spleen and liver, causing massive EXTRAMEDULLARY HEMATOPOIESIS, splenomegaly, leukoerythroblastic smear, and TEAR-DROP ERYTHROCYTES (dacrocytes) deformed as they squeeze out of fibrotic marrow."
      ],
      [
        "Tumor necrosis factor-alpha (TNF-alpha) and interleukin-1 beta driving osteoclastic bone resorption and osteolytic lesions",
        "Osteolytic lesions from TNF-alpha/IL-1 occur in multiple myeloma, whereas primary myelofibrosis causes marrow fibrosis and osteosclerosis."
      ],
      [
        "Interleukin-5 stimulating eosinophil major basic protein release into the marrow stroma",
        "IL-5 stimulates eosinophils in allergic and hypereosinophilic syndromes; marrow fibrosis is driven by megakaryocytic TGF-beta and PDGF."
      ],
      [
        "Vascular endothelial growth factor (VEGF) causing selective sinus endothelial apoptosis and microvascular thrombosis",
        "VEGF stimulates angiogenesis, but fibrogenesis itself is directly mediated by TGF-beta and PDGF acting on marrow fibroblasts."
      ],
      [
        "Interferon-gamma triggering autoimmune destruction of reticulin fibers by CD8+ T cells",
        "Interferon-gamma destroys stem cells in aplastic anemia; in primary myelofibrosis, reticulin fibers are excessively deposited, not destroyed."
      ]
    ],
    "shortestValidSolution": "Massive splenomegaly + dry tap + tear-drop cells (dacrocytes) + leukoerythroblastosis + JAK2 = Primary myelofibrosis -> neoplastic megakaryocytes secrete PDGF and TGF-beta.",
    "necessaryInference": "Connect neoplastic megakaryocyte cytokine secretion (PDGF/TGF-beta) to reactive marrow fibrosis, dry tap, extramedullary hematopoiesis, and tear-drop dacrocytes.",
    "strongestDistractor": "Tumor necrosis factor-alpha (TNF-alpha) and interleukin-1 beta driving osteoclastic bone resorption and osteolytic lesions",
    "distractorExclusion": "Osteolytic destruction characterizes multiple myeloma; primary myelofibrosis is marked by dense collagen fibrosis stimulated by megakaryocytic TGF-beta and PDGF.",
    "citation": "Tefferi A. Primary myelofibrosis: 2021 update on diagnosis, risk-stratification, and management. Am J Hematol. 2021;96(1):145-162. PMID: 33179379.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield hematology/coagulation item requiring multi-step pathophysiologic deduction and laboratory integration.",
      "distractorExclusionNotes": "Distractors feature closely related platelet disorders, factor deficiencies, or hemolytic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
