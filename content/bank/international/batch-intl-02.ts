import type { Spec } from '../author';
import { authorBatch } from '../author';
import { refs } from '../spec';

export const specs: Spec[] = [
  // 16. FCPS Part 1: Pathology / Cellular Hypoxia & Reversible vs Irreversible Injury
  {
    exam: 'FCPS',
    subject: 'Pathology',
    system: 'General Principles',
    topic: 'Irreversible ischemic cell injury',
    difficulty: 3,
    stem: 'A 55-year-old man suffers acute myocardial infarction. Despite emergency percutaneous coronary intervention, a portion of the anterior left ventricular myocardium sustains severe, prolonged ischemia. Electron microscopy of the affected cardiomyocytes demonstrates marked cellular changes. Which of the following ultrastructural findings represents an unequivocal hallmark of irreversible, rather than reversible, cell injury?',
    options: [
      [
        'Amorphous, flocculent matrix densities within swollen mitochondria',
        'Flocculent, amorphous matrix densities reflect massive mitochondrial calcium overload and irreversible inner membrane protein denaturation, signaling the point of no return in ischemic injury.'
      ],
      [
        'Detachment of membrane-bound polyribosomes from the rough endoplasmic reticulum',
        'Ribosomal detachment occurs early during ATP depletion as a consequence of cellular swelling and is fully reversible if oxygenation is restored.'
      ],
      [
        'Cellular hydropic swelling caused by dysfunction of Na+/K+ ATPase pumps',
        'Hydropic change (cloudy swelling) results from acute failure of ATP-dependent ionic extrusion but remains reversible prior to membrane disruption.'
      ],
      [
        'Loss of apical microvilli with formation of cytoplasmic surface blebs',
        'Plasma membrane blebbing and distortion of surface microvilli occur during early ischemia and can resolve completely upon reperfusion.'
      ],
      [
        'Clumping of nuclear chromatin secondary to intracellular lactic acidosis',
        'Nuclear chromatin clumping results from anaerobic glycolysis and reduced intracellular pH; it does not indicate irreversible cell death.'
      ]
    ],
    explanation: 'Cellular injury transitions from reversible to irreversible when two critical events occur: (1) severe, persistent mitochondrial dysfunction with inability to restore ATP production, characterized ultrastructurally by large, flocculent amorphous matrix densities; and (2) profound loss of plasma and lysosomal membrane integrity. In contrast, cellular hydropic swelling, ribosomal detachment, chromatin clumping, and surface blebbing are all classic manifestations of reversible cell injury.',
    objective: 'Distinguish amorphous mitochondrial matrix densities and membrane rupture as morphological hallmarks of irreversible ischemic injury.',
    reference: refs.cell,
  },

  // 17. FCPS Part 1: Pharmacology / Extended-Spectrum Beta-Lactamases
  {
    exam: 'FCPS',
    subject: 'Pharmacology',
    system: 'Renal',
    topic: 'Carbapenems for ESBL infections',
    difficulty: 3,
    stem: 'A 68-year-old hospitalized patient with a central venous catheter develops high fever and chills. Blood cultures grow Klebsiella pneumoniae. Antimicrobial susceptibility testing reveals resistance to ceftriaxone, ceftazidime, cefotaxime, and aztreonam, but susceptibility to meropenem and amikacin. Phenotypic testing confirms the presence of an extended-spectrum beta-lactamase (ESBL). What is the molecular mechanism by which this resistance enzyme inactivates third-generation cephalosporins?',
    options: [
      [
        'Hydrolysis of the beta-lactam ring ester bond via active-site serine mutations',
        'ESBL enzymes possess amino acid substitutions around the catalytic serine active site that expand their hydrolytic cavity to accommodate bulky oxyimino-side-chain cephalosporins.'
      ],
      [
        'Efflux of antimicrobial molecules via an ATP-binding cassette transporter pump',
        'Active drug efflux reduces intracellular drug concentration but does not involve enzymatic hydrolysis of the antibiotic molecule.'
      ],
      [
        'Ribosomal methylation at the 16S rRNA A-site hindering drug attachment',
        '16S rRNA methylation confers high-level resistance to aminoglycosides, not to beta-lactam cephalosporins.'
      ],
      [
        'Modification of the cell-wall D-alanyl-D-lactate terminal peptide target',
        'Target remodeling from D-Ala-D-Ala to D-Ala-D-Lac is the specific mechanism of vancomycin resistance in Enterococci.'
      ],
      [
        'Enzymatic acetylation of aminoglycoside hydroxyl groups by acetyltransferases',
        'Aminoglycoside-modifying enzymes (acetyltransferases, phosphotransferases) inactivate aminoglycosides and have no activity against beta-lactams.'
      ]
    ],
    explanation: 'Extended-Spectrum Beta-Lactamases (ESBLs, such as TEM, SHV, and CTX-M variants) are plasmid-mediated enzymes commonly produced by Klebsiella, E. coli, and Proteus. Point mutations around their serine active sites expand the catalytic pocket, enabling them to hydrolyze oxyimino-beta-lactams (cefotaxime, ceftriaxone, ceftazidime, and aztreonam). They do not efficiently hydrolyze carbapenems (meropenem, imipenem), making carbapenems the therapeutic gold standard for severe ESBL bacteremia.',
    objective: 'Describe the enzymatic mechanism of extended-spectrum beta-lactamases and recognize carbapenems as first-line therapy.',
    reference: refs.micro,
  },

  // 18. NLE: Medicine / Enteric (Typhoid) Fever
  {
    exam: 'NLE',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Typhoid fever diagnosis and surveillance',
    difficulty: 2,
    stem: 'A 22-year-old university student in Lahore presents with a 10-day history of progressively increasing fever, dull frontal headache, dry cough, and malaise. On examination, temperature is 39.8°C with a pulse of 76/min (sphygmomanometer confirmed). Abdominal examination reveals mild distension, splenomegaly, and faint, blanching erythematous macules ("rose spots") across the lower chest and abdomen. Laboratory evaluation reveals leukopenia with relative lymphocytosis. Which diagnostic test provides the highest diagnostic sensitivity during the first two weeks of illness?',
    options: [
      [
        'Blood culture using bile broth incubation',
        'Blood cultures are positive in 60–85% of typhoid fever cases during the first two weeks of illness, prior to the widespread use of antimicrobial therapy.'
      ],
      [
        'Single slide Widal agglutination test on admission day',
        'Single Widal tests have poor specificity and sensitivity due to high cross-reactivity and baseline endemic antibodies; they cannot establish a definitive diagnosis.'
      ],
      [
        'Stool culture on selective deoxycholate citrate agar on day 3 of illness',
        'Stool cultures are frequently negative early in disease and typically become positive during the second and third weeks as Peyer patch shedding peaks.'
      ],
      [
        'Serum cold agglutinin titer measurement',
        'Cold agglutinins are associated with Mycoplasma pneumoniae respiratory infections, not Salmonella enterica serovar Typhi.'
      ],
      [
        'Urinary antigen enzyme-linked immunosorbent assay on day 5',
        'Urinary excretion of Salmonella antigens is inconsistent and has markedly lower sensitivity compared to standard blood and bone marrow cultures.'
      ]
    ],
    explanation: 'Enteric fever, caused by Salmonella enterica serovars Typhi and Paratyphi, presents with step-ladder fever, relative bradycardia (Faget sign), rose spots, hepatosplenomegaly, and leukopenia. During the first two weeks of symptomatic bacteremia, blood cultures provide the highest practical diagnostic yield (60–85%). Bone marrow culture is the most sensitive test overall (>= 90%) and remains positive even after partial antibiotic therapy, but blood culture is the routine first-line test of choice. The Widal test is unreliable in endemic areas.',
    objective: 'Select blood culture as the definitive early diagnostic test for typhoid fever and identify clinical features including relative bradycardia.',
    reference: refs.merck_infection,
  },

  // 19. NLE: Obstetrics / Postpartum Hemorrhage Management
  {
    exam: 'NLE',
    subject: 'Obstetrics',
    system: 'Pregnancy',
    topic: 'Postpartum uterine atony management',
    difficulty: 2,
    stem: 'A 29-year-old woman (gravida 3, para 3) delivers a 4.1 kg infant vaginally following a prolonged second stage of labor. Ten minutes following placenta delivery, brisk vaginal bleeding is observed, with estimated blood loss reaching 700 mL within 15 minutes. Palpation of the abdomen reveals a soft, boggy, poorly contracted uterus extending 4 cm above the umbilicus. Continuous bimanual uterine compression and rapid IV oxytocin infusion are initiated immediately, but brisk hemorrhage persists. She has a history of severe persistent asthma. Which uterotonic agent is contraindicated in this patient?',
    options: [
      [
        'Carboprost tromethamine (15-methyl PGF2-alpha)',
        'Carboprost is a prostaglandin F2-alpha analogue that causes potent bronchoconstriction and can precipitate life-threatening bronchospasm in patients with asthma.'
      ],
      [
        'Methylergonovine maleate',
        'Methylergonovine is an ergot alkaloid contraindicated in hypertension and preeclampsia due to vasoconstriction, but it is safe in normotensive asthma.'
      ],
      [
        'Misoprostol (prostaglandin E1)',
        'Misoprostol is a prostaglandin E1 analogue that acts as a mild bronchodilator and is safe to use in patients with asthma.'
      ],
      [
        'Intravenous tranexamic acid infusion',
        'Tranexamic acid is an antifibrinolytic agent that reduces hemorrhage mortality without inducing bronchoconstriction.'
      ],
      [
        'Intrauterine balloon tamponade',
        'Mechanical balloon tamponade is a non-pharmacological procedure indicated when medical uterotonic therapy fails to control atony.'
      ]
    ],
    explanation: 'Postpartum hemorrhage (PPH) is most commonly caused by uterine atony ("4 Ts": Tone, Trauma, Tissue, Thrombin). First-line treatment is bimanual uterine massage and IV oxytocin. When atony persists, second-line uterotonics include methylergonovine, carboprost tromethamine, and misoprostol. Carboprost tromethamine (15-methyl PGF2-alpha) causes smooth muscle contraction in both the myometrium and bronchioles; it is strictly contraindicated in patients with asthma due to the risk of severe, fatal bronchospasm.',
    objective: 'Recognize that carboprost (PGF2-alpha) is contraindicated in asthma during postpartum hemorrhage escalation.',
    reference: refs.rcog_gtg,
  },

  // 20. NEET PG: Medicine / Rheumatic Mitral Stenosis
  {
    exam: 'NEET PG',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Rheumatic mitral stenosis auscultation',
    difficulty: 3,
    stem: 'A 32-year-old woman in Chennai presents with progressive exertional dyspnea (NYHA class III) and orthopnea. She had recurrent sore throats and migratory joint pains during childhood. On cardiovascular examination, the apex beat is tapping and undisplaced. Auscultation at the cardiac apex in the left lateral decubitus position reveals a loud first heart sound (S1), a high-pitched sound early in diastole, and a low-pitched mid-diastolic rumbling murmur with presystolic accentuation. As the disease severity advances and the mitral valve becomes severely calcified and rigid, which change in auscultatory findings occurs?',
    options: [
      [
        'The A2-to-opening snap interval shortens and S1 intensity diminishes',
        'Higher left atrial pressure opens the stenotic valve earlier in diastole (shorter A2-OS interval), while progressive leaflet calcification and immobility diminish the loudness of S1.'
      ],
      [
        'The A2-to-opening snap interval lengthens and S1 becomes markedly accentuated',
        'A lengthened A2-OS interval indicates lower left atrial pressure and milder disease, whereas severe stenosis shortens the interval.'
      ],
      [
        'The opening snap completely disappears and S1 develops paradoxical splitting',
        'Paradoxical splitting of S2 occurs with delayed aortic closure (severe aortic stenosis, LBBB), not isolated mitral stenosis.'
      ],
      [
        'The mid-diastolic murmur disappears completely and converts into a pansystolic jet',
        'Mitral stenosis maintains a diastolic gradient; converting to a pure pansystolic murmur indicates severe regurgitation rather than isolated stenotic progression.'
      ],
      [
        'Presystolic accentuation intensifies following the development of atrial fibrillation',
        'Presystolic accentuation requires active atrial contraction and is completely lost when atrial fibrillation supervenes.'
      ]
    ],
    explanation: 'In rheumatic mitral stenosis, the opening snap (OS) occurs when the mitral valve domes open into the left ventricle under high left atrial pressure. As stenosis severity increases, left atrial pressure rises, driving the mitral leaflets open earlier after aortic valve closure (A2), which shortens the A2-OS interval (a key physical finding of severe stenosis). Additionally, as the leaflets become heavily calcified and fibrotic, they lose mobility, causing the historically loud S1 to soften and the opening snap to become muffled or absent.',
    objective: 'Relate left atrial pressure to the shortening of the A2-opening snap interval in progressive mitral stenosis.',
    reference: refs.clinical,
  },

  // 21. NEET PG: Pharmacology / Anti-Tubercular Therapy Toxicities
  {
    exam: 'NEET PG',
    subject: 'Pharmacology',
    system: 'Respiratory',
    topic: 'First-line anti-tubercular toxicities',
    difficulty: 2,
    stem: 'A 45-year-old man with smear-positive pulmonary tuberculosis is initiated on standard weight-based first-line anti-tubercular therapy comprising isoniazid, rifampicin, pyrazinamide, and ethambutol. Four weeks later, he presents for review reporting difficulty reading fine newspaper print and an inability to distinguish green traffic lights from red lights. Funduscopic examination is normal. Visual acuity is reduced bilaterally. Which medication in his therapeutic regimen is responsible for this adverse effect, and what parameter must be monitored?',
    options: [
      [
        'Ethambutol; monitor visual acuity and red-green color discrimination',
        'Ethambutol causes dose- and duration-dependent retrobulbar (optic) neuritis, presenting with reduced visual acuity, central scotoma, and loss of red-green color discrimination.'
      ],
      [
        'Isoniazid; monitor hepatic transaminases and sensory peripheral neuropathy',
        'Isoniazid causes peripheral neuropathy (prevented by pyridoxine) and hepatotoxicity, but does not classically cause retrobulbar optic neuritis.'
      ],
      [
        'Rifampicin; monitor renal function tests and orange bodily fluid discoloration',
        'Rifampicin induces cytochrome P450, causes benign orange discoloration of fluids, and can cause rare interstitial nephritis, not optic neuritis.'
      ],
      [
        'Pyrazinamide; monitor serum uric acid and arthralgias',
        'Pyrazinamide causes hyperuricemia and hepatotoxicity; it is not associated with toxic optic neuropathy.'
      ],
      [
        'Streptomycin; monitor serial audiometry and vestibular nystagmus',
        'Streptomycin is an aminoglycoside that causes ototoxicity and nephrotoxicity, not retrobulbar neuritis.'
      ]
    ],
    explanation: 'Ethambutol inhibits arabinosyl transferase, impairing mycobacterial cell wall arabinogalactan synthesis. Its most significant adverse effect is dose-dependent retrobulbar optic neuritis. Patients typically develop decreased visual acuity, central or cecocentral scotomas, and impairment of green-red color discrimination. Baseline and periodic visual acuity and Ishihara color testing are mandatory. The drug must be discontinued immediately upon the onset of visual symptoms to prevent permanent blindness.',
    objective: 'Identify retrobulbar optic neuritis as the hallmark toxicity of ethambutol and mandate visual monitoring.',
    reference: refs.pharm,
  },

  // 22. NEET PG: Forensic Medicine / Medical Negligence & Bolam-Bolitho Test
  {
    exam: 'NEET PG',
    subject: 'Ethics',
    system: 'General Principles',
    topic: 'Medical negligence standards in tort',
    difficulty: 3,
    stem: 'A surgeon in Mumbai performs an elective laparoscopic cholecystectomy. During dissection of the triangle of Calot, an aberrant right hepatic artery is encountered and clipped without preoperative MRCP, which was considered an acceptable standard by a respectable body of contemporary general surgical opinion. The patient develops partial biliary stricture and sues the hospital for tortious medical negligence. In Indian jurisprudence and Commonwealth medical law, which legal principle establishes that a doctor is not guilty of negligence if they acted in accordance with a practice accepted as proper by a responsible body of medical peers?',
    options: [
      [
        'Bolam principle, as qualified by the Bolitho requirement of logical defensibility',
        'The Bolam test holds that a doctor is not negligent if acting in accordance with practice accepted by a responsible body of medical opinion, provided that opinion withstands logical analysis (Bolitho).'
      ],
      [
        'Doctrine of Res Ipsa Loquitur (the thing speaks for itself)',
        'Res ipsa loquitur applies when the harm could not have occurred without negligence and direct proof is unavailable (e.g., leaving a gauze sponge inside the abdomen).'
      ],
      [
        'Eggshell skull rule of compensatory damages',
        'The thin skull rule dictates that a tortfeasor must take their victim as found regarding liability for extent of damage, not the standard of clinical care.'
      ],
      [
        'Principle of non-maleficence derived from the Nuremberg Code',
        'The Nuremberg Code regulates medical research and human experimentation ethics, not civil malpractice tort law standards.'
      ],
      [
        'Absolute strict liability standard without consideration of peer practices',
        'Medical negligence in tort requires proof of a duty of care, breach of standard of care, and direct causation; it is not a strict liability offense.'
      ]
    ],
    explanation: 'The standard of care in medical negligence is governed by the Bolam test (Bolam v Friern Hospital Management Committee), widely affirmed by the Supreme Court of India (Jacob Mathew v State of Punjab). A practitioner is not negligent if they acted in accordance with a practice accepted as proper by a responsible body of medical opinion skilled in that particular art. The subsequent Bolitho ruling added that the peer body\'s opinion must have a logical basis and withstand rational judicial scrutiny.',
    objective: 'Apply the Bolam-Bolitho standard to determine civil medical liability based on peer professional practice.',
    reference: refs.ethics,
  },

  // 23. MRCP: Endocrinology / Primary Hyperaldosteronism
  {
    exam: 'MRCP',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Primary hyperaldosteronism localization',
    difficulty: 3,
    stem: 'A 46-year-old man in Manchester is referred to the hypertension clinic. His blood pressure remains 168/104 mm Hg despite adherence to amlodipine 10 mg daily and ramipril 10 mg daily. Routine biochemistry demonstrates serum sodium of 144 mmol/L, serum potassium of 3.1 mmol/L (normal 3.5–5.0), and serum bicarbonate of 30 mmol/L. Screening for secondary hypertension demonstrates a plasma aldosterone concentration (PAC) of 620 pmol/L and a plasma renin activity (PRA) of 0.2 ng/mL/h, yielding an aldosterone-to-renin ratio (ARR) > 80. Subsequent saline infusion suppression testing fails to suppress aldosterone. What is the most appropriate next step in establishing whether unilateral adrenalectomy is indicated?',
    options: [
      [
        'High-resolution CT of the adrenals followed by bilateral adrenal vein sampling (AVS)',
        'CT imaging identifies adrenal anatomy, but adrenal venous sampling is the gold standard to distinguish unilateral aldosterone-producing adenoma from bilateral adrenal hyperplasia before surgery.'
      ],
      [
        'Immediate left-sided laparoscopic adrenalectomy based on elevated ARR alone',
        'Biochemical confirmation does not identify the lateralization of secretion; blind surgery carries high rates of unnecessary or incorrect adrenal removal.'
      ],
      [
        'Initiation of high-dose dexamethasone suppression testing to rule out Cushing syndrome',
        'Dexamethasone suppression evaluates glucocorticoid hypersecretion, not mineralocorticoid lateralization in confirmed primary hyperaldosteronism.'
      ],
      [
        'Twenty-four-hour urinary metanephrines to exclude pheochromocytoma',
        'While metanephrines rule out pheochromocytoma, the suppressed renin and elevated aldosterone specifically establish primary hyperaldosteronism.'
      ],
      [
        'Indefinite conservative management with amiloride without attempting subtype localization',
        'Unilateral aldosterone-producing adenoma is surgically curable; localization should be pursued in surgical candidates before committing to life-long medical therapy.'
      ]
    ],
    explanation: 'The patient has primary hyperaldosteronism (Conn syndrome), characterized by resistant hypertension, unprovoked hypokalemia, metabolic alkalosis, elevated aldosterone, and suppressed renin activity. Once primary hyperaldosteronism is confirmed by non-suppression testing, the next step is subtype evaluation. Although adrenal CT is performed to assess for large masses or malignancy, CT often misidentifies nonfunctioning incidentalomas or misses microadenomas. Bilateral adrenal venous sampling (AVS) is therefore the essential gold standard to prove unilateral lateralization of aldosterone production before undertaking curative laparoscopic adrenalectomy.',
    objective: 'Recommend adrenal venous sampling to differentiate unilateral adenoma from bilateral hyperplasia prior to surgery in Conn syndrome.',
    reference: refs.merck_endocrine,
  },

  // 24. MRCP: Rheumatology / Systemic Sclerosis Autoantibodies
  {
    exam: 'MRCP',
    subject: 'Medicine',
    system: 'Musculoskeletal',
    topic: 'Systemic sclerosis autoantibodies',
    difficulty: 3,
    stem: 'A 50-year-old woman presents to the rheumatology clinic in Edinburgh with Raynaud phenomenon, thickening and tightening of the skin extending over her fingers, forearms, chest, and face, and worsening exertional breathlessness. High-resolution chest CT reveals bilateral subpleural reticulation and basilar ground-glass opacities consistent with nonspecific interstitial pneumonia (NSIP). Pulmonary function tests show a restrictive defect with reduced DLCO. Which autoantibody profile is most strongly associated with this diffuse cutaneous phenotype and progressive interstitial lung disease?',
    options: [
      [
        'Anti-topoisomerase I (anti-Scl-70) antibodies',
        'Anti-Scl-70 (anti-DNA topoisomerase I) is specifically associated with diffuse cutaneous systemic sclerosis and carries an elevated risk of severe, progressive interstitial pulmonary fibrosis.'
      ],
      [
        'Anti-centromere antibodies (ACA)',
        'Anti-centromere antibodies are characteristic of limited cutaneous systemic sclerosis (CREST syndrome) and are associated with isolated pulmonary arterial hypertension, not diffuse lung fibrosis.'
      ],
      [
        'Anti-Ro/SSA and anti-La/SSB antibodies',
        'Anti-Ro/La antibodies are typical of Sjögren syndrome and subacute cutaneous lupus erythematosus, not diffuse cutaneous scleroderma.'
      ],
      [
        'Anti-cyclic citrullinated peptide (anti-CCP) antibodies',
        'Anti-CCP antibodies are highly specific for rheumatoid arthritis and do not correlate with systemic sclerosis skin thickening.'
      ],
      [
        'Anti-smooth muscle antibodies (ASMA)',
        'Anti-smooth muscle antibodies are diagnostic markers for autoimmune hepatitis type 1, without involvement in systemic sclerosis.'
      ]
    ],
    explanation: 'Systemic sclerosis is categorized into limited cutaneous (skin involvement distal to elbows and knees, face) and diffuse cutaneous (involvement proximal to elbows/knees and trunk). Diffuse cutaneous disease is strongly linked to anti-topoisomerase I (anti-Scl-70) antibodies and carries high risk of early, aggressive internal organ involvement, notably interstitial lung disease (fibrosis) and scleroderma renal crisis. Limited disease is associated with anti-centromere antibodies and late-onset isolated pulmonary arterial hypertension.',
    objective: 'Correlate anti-topoisomerase I (anti-Scl-70) antibodies with diffuse cutaneous systemic sclerosis and pulmonary fibrosis.',
    reference: refs.immune,
  },

  // 25. MRCEM: Emergency Medicine / Tension Pneumothorax Needle Decompression
  {
    exam: 'MRCEM',
    subject: 'Surgery',
    system: 'Respiratory',
    topic: 'Tension pneumothorax needle decompression',
    difficulty: 2,
    stem: 'A 28-year-old motorcyclist is brought to the resuscitation bay of an emergency department following a high-speed collision. He is agitated, cyanotic, and gasping for breath. Blood pressure is 74/40 mm Hg, pulse is 138/min, and oxygen saturation is 78% on a non-rebreather mask. Physical examination reveals absent breath sounds over the right hemithorax, hyperresonance to percussion, distended neck veins, and clinical deviation of the trachea toward the left. In accordance with current Advanced Trauma Life Support (ATLS 10th edition) guidelines, what is the preferred anatomical site for immediate emergency needle decompression in an adult?',
    options: [
      [
        'Fifth intercostal space, just anterior to the midaxillary line on the affected side',
        'ATLS 10th edition recommends the 5th intercostal space at or just anterior to the midaxillary line because chest wall thickness is significantly lower than at the anterior second intercostal space.'
      ],
      [
        'Second intercostal space in the midclavicular line directly along the inferior rib border',
        'Needle insertion must always traverse the superior border of the rib to avoid the neurovascular bundle in the costal groove, and the 2nd intercostal site has high failure rates due to thick anterior pectoral muscle.'
      ],
      [
        'Seventh intercostal space in the posterior scapular line adjacent to the spine',
        'Posterior insertion is hazardous in supine trauma patients and risks diaphragmatic and liver laceration.'
      ],
      [
        'Fourth intercostal space immediately adjacent to the right sternal border',
        'Parasternal insertion risks catastrophic laceration of the internal thoracic (mammary) artery and pericardial tamponade.'
      ],
      [
        'Subxiphoid percutaneous puncture angled toward the left shoulder',
        'Subxiphoid puncture is the approach for emergency pericardiocentesis, not needle thoracocentesis for tension pneumothorax.'
      ]
    ],
    explanation: 'Tension pneumothorax is an immediate clinical diagnosis that requires urgent decompression prior to any imaging. While older protocols taught the 2nd intercostal space midclavicular line, the 10th edition of ATLS recommends the 5th intercostal space at or just anterior to the midaxillary line (the same location used for chest tube insertion). This site has a significantly thinner chest wall in adults, higher cannulation success rates, and avoids large anterior pectoral fat/muscle. The needle must always be advanced over the top of the lower rib to avoid the intercostal neurovascular bundle.',
    objective: 'Select the 5th intercostal space midaxillary line as the updated anatomical landmark for needle decompression of tension pneumothorax.',
    reference: refs.who_trauma,
  },

  // 26. MRCEM: Resuscitation & Trauma / Lethal Triad & Balanced Transfusion
  {
    exam: 'MRCEM',
    subject: 'Surgery',
    system: 'General Principles',
    topic: 'Trauma lethal triad and resuscitation',
    difficulty: 3,
    stem: 'A 38-year-old man sustains multiple gunshot wounds to the abdomen and pelvis. On arrival, he is in profound hemorrhagic shock with a systolic blood pressure of 65 mm Hg, heart rate of 144/min, and core body temperature of 34.2°C. Arterial blood gas demonstrates pH 7.12, base deficit −14 mEq/L, and lactate 9.8 mmol/L. Rotational thromboelastometry (ROTEM) reveals severe trauma-induced coagulopathy and hyperfibrinolysis. What physiological interaction constitutes the components of the "trauma lethal triad" that drives refractory mortality?',
    options: [
      [
        'Hypothermia, metabolic acidosis, and coagulopathy',
        'The lethal triad consists of hypothermia (impairing clotting enzyme kinetics), acidosis (halving coagulation factor assembly rates), and coagulopathy, creating a self-perpetuating cycle of exsanguination.'
      ],
      [
        'Hyperthermia, respiratory alkalosis, and thrombocytopenia',
        'Trauma shock causes hypothermia and metabolic acidosis from anaerobic hypoperfusion, not hyperthermia or respiratory alkalosis.'
      ],
      [
        'Hypoglycemia, hypokalemia, and hypercalcemia',
        'Massive resuscitation and tissue injury typically cause hyperkalemia and hypocalcemia (citrate binding), not this triad.'
      ],
      [
        'Hypertension, bradycardia, and irregular respirations',
        'Cushing triad reflects life-threatening intracranial hypertension, not systemic hemorrhagic shock.'
      ],
      [
        'Hypernatremia, leukocytosis, and hyperglycemia',
        'These are nonspecific metabolic and inflammatory findings rather than the physiological determinants of hemorrhagic mortality.'
      ]
    ],
    explanation: 'The trauma "lethal triad" of hypothermia, metabolic acidosis, and coagulopathy is a vicious physiological spiral. Severe hypovolemic shock causes tissue hypoperfusion, anaerobic metabolism, and lactic acidosis. Acidosis (pH < 7.2) inhibits coagulation factor complexes on platelet surfaces. Concurrently, environmental exposure and resuscitation with unheated fluids produce hypothermia, which impairs enzyme kinetics of clotting factors and platelet aggregation. This worsening coagulopathy induces uncontrolled bleeding, further exacerbating shock, hypothermia, and acidosis. Balanced resuscitation (1:1:1 plasma, platelets, and RBCs) and tranexamic acid target this triad.',
    objective: 'Explain how hypothermia, acidosis, and coagulopathy form the trauma lethal triad during massive hemorrhage.',
    reference: refs.who_trauma,
  },

  // 27. SMLE: Gastroenterology / Acute Variceal Bleeding
  {
    exam: 'SMLE',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Acute variceal hemorrhage pharmacotherapy',
    difficulty: 3,
    stem: 'A 54-year-old man with decompensated hepatitis C cirrhosis and known portal hypertension is admitted to an emergency department in Riyadh with massive hematemesis and melena. Blood pressure is 88/54 mm Hg and heart rate is 114/min. Two large-bore peripheral cannulae are placed, restrictive packed red blood cell transfusion is initiated (target hemoglobin 70–80 g/L), and an intravenous infusion of octreotide is started immediately. Prophylactic ceftriaxone is administered. What is the physiological mechanism of octreotide in this emergency clinical scenario?',
    options: [
      [
        'Splanchnic arteriolar vasoconstriction reducing portal venous inflow and collateral pressure',
        'Octreotide (somatostatin analogue) inhibits glucagon and vasodilatory peptides, causing selective splanchnic arterial vasoconstriction that lowers portal venous blood flow and variceal pressure.'
      ],
      [
        'Direct systemic venoconstriction causing massive mobilization of pooled venous capacitance',
        'Octreotide targets mesenteric arterial inflow rather than causing systemic peripheral venoconstriction.'
      ],
      [
        'Promotion of hepatic thrombopoietin synthesis to stimulate rapid platelet aggregation',
        'Thrombopoietin synthesis takes days to affect circulating platelets; octreotide exerts immediate hemodynamic effects.'
      ],
      [
        'Irreversible covalent inhibition of the parietal cell H+/K+ ATPase pump',
        'Proton pump inhibitors (e.g., omeprazole) inhibit the gastric acid pump; octreotide acts on somatostatin receptors in the splanchnic circulation.'
      ],
      [
        'Systemic arterial vasodilation that reduces systemic afterload and cardiac work',
        'Systemic arterial vasodilation would worsen shock; octreotide selectively constricts the splanchnic arterial bed.'
      ]
    ],
    explanation: 'In acute esophageal variceal bleeding, somatostatin analogues (such as octreotide or terlipressin) are initiated immediately upon presentation prior to diagnostic upper endoscopy. Octreotide inhibits the release of vasodilatory peptides (principally glucagon) in the mesenteric circulation, leading to selective splanchnic arteriolar vasoconstriction. This decreases splanchnic blood flow entering the portal vein, which directly reduces portal venous pressure and decreases hydrostatic pressure within the bleeding esophageal variceal plexus.',
    objective: 'Detail how splanchnic vasoconstriction by octreotide lowers portal pressure during acute variceal hemorrhage.',
    reference: refs.clinical,
  },

  // 28. SMLE: Pediatrics / Neonatal Hyperbilirubinemia
  {
    exam: 'SMLE',
    subject: 'Pediatrics',
    system: 'Gastrointestinal',
    topic: 'Neonatal hyperbilirubinemia phototherapy',
    difficulty: 2,
    stem: 'A 3-day-old, full-term male infant (birth weight 3.4 kg, gestational age 39 weeks) is brought to the pediatric outpatient clinic in Jeddah for jaundice extending down to his ankles. The mother\'s blood group is O positive, and the infant is A positive with a positive direct antiglobulin (Coombs) test. Total serum bilirubin is 310 µmol/L (18.1 mg/dL), predominantly unconjugated. The infant is feeding well and alert, with normal muscle tone. According to AAP hour-specific bilirubin nomograms, this level exceeds the phototherapy threshold but is below the exchange transfusion line. What photochemical reaction is the principal mechanism by which intensive phototherapy reduces serum bilirubin?',
    options: [
      [
        'Structural photoisomerization of (4Z,15Z)-bilirubin into water-soluble lumirubin',
        'Phototherapy light converts unconjugated lipophilic 4Z,15Z-bilirubin into structural photoisomers (principally lumirubin) that are excreted directly into bile and urine without requiring hepatic glucuronidation.'
      ],
      [
        'Hepatic induction of uridine diphosphate glucuronosyltransferase (UGT1A1) transcription',
        'Phototherapy does not induce hepatic UGT1A1 enzyme synthesis; it directly converts intravascular and dermal bilirubin into excretable isomers.'
      ],
      [
        'Oxidative breakdown of hemoglobin into biliverdin and carbon monoxide',
        'Heme oxygenase converts heme to biliverdin within reticuloendothelial macrophages; phototherapy acts on formed circulating unconjugated bilirubin.'
      ],
      [
        'Enzymatic conjugation of bilirubin with albumin molecules for renal filtration',
        'Albumin non-covalently binds bilirubin to prevent tissue entry, but it does not filter through intact glomeruli as an excretory mechanism.'
      ],
      [
        'Selective chemical precipitation of bilirubin salts in intestinal enterocytes',
        'Phototherapy produces soluble photoisomers, not insoluble precipitates, facilitating biliary and urinary elimination.'
      ]
    ],
    explanation: 'Phototherapy (blue-green light at 460–490 nm) treats neonatal unconjugated hyperbilirubinemia by three photochemical reactions: structural isomerization, configurational isomerization, and photo-oxidation. The most important, irreversible reaction that accounts for the majority of bilirubin clearance is structural photoisomerization, which converts natural (4Z,15Z)-bilirubin into lumirubin (cyclobilirubin). Lumirubin is water-soluble and can be excreted rapidly into bile and urine without undergoing hepatic glucuronidation by UGT1A1.',
    objective: 'Identify structural isomerization to lumirubin as the primary photochemical mechanism of phototherapy for neonatal jaundice.',
    reference: refs.clinical,
  },

  // 29. HAAD / DHA: Medicine / Metabolic Syndrome & Cardiovascular Prevention
  {
    exam: 'HAAD / DHA',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Metabolic syndrome diagnostic criteria',
    difficulty: 2,
    stem: 'A 49-year-old executive in Abu Dhabi attends an occupational health screening. He has no medical complaints. Physical examination reveals a waist circumference of 106 cm (normal < 94 cm for males), a body mass index of 32.4 kg/m², and blood pressure of 142/90 mm Hg. Fasting lipid profile demonstrates a serum triglyceride level of 2.6 mmol/L (normal < 1.7), HDL-cholesterol of 0.9 mmol/L (normal > 1.0), and LDL-cholesterol of 3.8 mmol/L. Fasting plasma glucose is 6.2 mmol/L (normal < 5.6). According to the Harmonized International Consensus criteria, how many components of the metabolic syndrome does this patient satisfy, and what is the foundational pathophysiological driver?',
    options: [
      [
        'Five components; peripheral insulin resistance and visceral adiposity',
        'The patient satisfies all 5 criteria (waist circumference, triglycerides, low HDL, elevated blood pressure, and impaired fasting glucose), all driven by visceral adiposity and systemic insulin resistance.'
      ],
      [
        'Two components; primary autonomous aldosterone hypersecretion',
        'The patient has five distinct features, and hyperaldosteronism is not the underlying driver of metabolic syndrome.'
      ],
      [
        'Three components; isolated deficiency of pancreatic beta-cell insulin secretion',
        'Type 2 metabolic syndrome involves hyperinsulinemia and peripheral receptor resistance rather than absolute early beta-cell failure.'
      ],
      [
        'One component; exclusive dietary sodium excess causing hypervolemia',
        'Dietary sodium contributes to hypertension but does not account for hypertriglyceridemia, low HDL, or impaired fasting glucose.'
      ],
      [
        'Zero components because LDL-cholesterol is the sole diagnostic criterion',
        'LDL-cholesterol is notably excluded from the formal diagnostic criteria of metabolic syndrome, which rely on triglycerides and HDL.'
      ]
    ],
    explanation: 'According to the Harmonized International Consensus definition (IDF/AHA/NHLBI), a diagnosis of metabolic syndrome requires any 3 of the following 5 criteria: (1) elevated waist circumference (>= 94 cm in European/Middle Eastern men); (2) elevated triglycerides (>= 1.7 mmol/L / 150 mg/dL); (3) reduced HDL (< 1.0 mmol/L in men); (4) elevated blood pressure (>= 130/85 mm Hg); and (5) elevated fasting glucose (>= 5.6 mmol/L / 100 mg/dL). This patient satisfies all five criteria. The unifying pathophysiological driver is visceral adiposity generating free fatty acids, adipokines, and chronic low-grade inflammation that produce systemic insulin resistance.',
    objective: 'Apply the five international diagnostic criteria of metabolic syndrome and recognize visceral adiposity as its core etiology.',
    reference: refs.merck_endocrine,
  },

  // 30. UHS MBBS: Anatomy / Facial Nerve Lesions & Bell's Palsy
  {
    exam: 'UHS MBBS',
    subject: 'Anatomy',
    system: 'Nervous System',
    topic: 'Upper versus lower motor neuron facial palsy',
    difficulty: 2,
    stem: 'A 40-year-old woman presents to the outpatient clinic at Services Hospital, Lahore, with sudden weakness of the right side of her face that developed upon waking this morning. On physical examination, she cannot close her right eye, the right nasolabial fold is completely flattened, and the right corner of her mouth droops. When asked to look upward and wrinkle her forehead, the left forehead wrinkles normally while the right forehead remains smooth with complete absence of furrows. Extraocular movements, sensation over the face, and limb strength are completely normal. What anatomical feature of facial motor nuclear innervation explains the loss of forehead wrinkling in this patient?',
    options: [
      [
        'The lower motor neuron supplies both upper and lower facial muscles ipsilaterally after nuclear decussation',
        'The facial motor nucleus gives rise to peripheral lower motor neurons that supply all ipsilateral facial muscles; a peripheral lesion (Bell palsy) paralyzes both upper and lower quadrants.'
      ],
      [
        'The frontalis muscle receives bilateral lower motor neuron projections from both facial nerves',
        'Each frontalis muscle receives peripheral innervation exclusively from the ipsilateral facial nerve, not both peripheral nerves.'
      ],
      [
        'Corticobulbar fibers to the lower facial nucleus originate exclusively from the ipsilateral motor cortex',
        'Corticobulbar projections to the lower face originate from the contralateral cerebral cortex, explaining sparing of the forehead in central strokes.'
      ],
      [
        'The upper facial motor nucleus is innervated directly by sensory branches of the ophthalmic nerve',
        'The ophthalmic nerve (V1) is purely sensory and does not provide motor innervation to the frontalis or upper facial muscles.'
      ],
      [
        'Selective lesion of the contralateral internal capsule sparing the corticospinal tract',
        'An internal capsule stroke produces an upper motor neuron facial lesion with forehead sparing, opposite to the complete facial paralysis seen here.'
      ]
    ],
    explanation: 'The facial motor nucleus in the caudal pons has two divisions: the upper division (innervating the frontalis and orbicularis oculi) receives bilateral corticobulbar input from both cerebral hemispheres, whereas the lower division (innervating the lower face) receives only contralateral corticobulbar input. Therefore, an upper motor neuron (UMN) lesion (e.g., cortical stroke) spares the forehead due to preserved ipsilateral cortical input. In contrast, a lower motor neuron (LMN) lesion of the facial nerve or its nucleus (e.g., Bell palsy) destroys the final common pathway to all ipsilateral muscles, causing complete paralysis of both the upper and lower face.',
    objective: 'Distinguish upper from lower motor neuron facial lesions based on bilateral corticobulbar innervation of the upper facial nucleus.',
    reference: refs.anatomy,
  },
];

export const codes = specs.map((_, i) => `intl-${String(i + 16).padStart(4, '0')}`);
export const questions = authorBatch(2, specs, codes);
