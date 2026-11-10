import { CandidateSpec } from './types';

export const step2Batch35: CandidateSpec[] = [
  {
    "code": "op-c-s2-0851",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Respiratory Distress Syndrome Exogenous Surfactant Therapy in Preterm Infant",
    "provisionalDifficulty": 4,
    "stem": "A male infant is born at 28 weeks of gestation via emergent cesarean delivery due to placental abruption. Birth weight is 1,050 g. Within 20 minutes of birth, the neonate develops progressive tachypnea (respiratory rate 76/min), nasal flaring, prominent intercostal and subcostal retractions, and an audible expiratory grunt. Oxygen saturation is 79% on ambient air, improving to 85% on continuous positive airway pressure (CPAP) with 50% supplemental oxygen. Chest radiography demonstrates low lung volumes with diffuse, uniform, finely reticular 'ground-glass' opacities and prominent air bronchograms bilaterally. Blood gas analysis reveals pH 7.22, PaCO2 58 mm Hg, and PaO2 48 mm Hg. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Endotracheal intubation and administration of exogenous surfactant",
        "Respiratory distress syndrome (RDS) in premature infants results from a deficiency of pulmonary surfactant produced by type II pneumocytes, leading to increased alveolar surface tension, diffuse microatelectasis, and ventilation-perfusion mismatch. The classic presentation includes tachypnea, grunting, retractions, and hypoxia shortly after birth, with chest radiography demonstrating diffuse 'ground-glass' reticulogranular opacities and air bronchograms. In preterm infants failing CPAP or with high oxygen requirements, endotracheal intubation and intratracheal administration of exogenous natural surfactant (e.g., poractant alfa) is the definitive therapy, rapidly improving alveolar expansion, oxygenation, and lung compliance while reducing mortality."
      ],
      [
        "Immediate intravenous infusion of broad-spectrum ampicillin and gentamicin alone",
        "Empiric antibiotics for neonatal sepsis are routinely co-administered, but antimicrobial therapy alone does not address the lethal mechanical defect of surfactant deficiency."
      ],
      [
        "Rapid intravenous bolus of 20 mL/kg normal saline for hypovolemic shock",
        "Fluid boluses in preterm infants with RDS risk volume overload, patent ductus arteriosus opening, pulmonary edema, and intraventricular hemorrhage."
      ],
      [
        "Initiation of intravenous indomethacin for prophylactic ductal closure",
        "Indomethacin closes patent ductus arteriosus, but prophylactic administration does not treat alveolar collapse or surfactant deficiency."
      ],
      [
        "Inhaled racemic epinephrine via high-flow nasal cannula circuit",
        "Racemic epinephrine is used for subglottic upper airway edema in croup, not for diffuse neonatal alveolar atelectasis."
      ]
    ],
    "shortestValidSolution": "Preterm 28 wk + grunting/retractions + ground-glass on CXR = RDS -> endotracheal exogenous surfactant.",
    "necessaryInference": "Recognize surfactant deficiency in preterm infant and administer intratracheal surfactant when CPAP is insufficient.",
    "strongestDistractor": "Immediate intravenous infusion of broad-spectrum ampicillin and gentamicin alone",
    "distractorExclusion": "Antibiotics treat possible congenital pneumonia but cannot restore alveolar surface tension without exogenous surfactant.",
    "citation": "Sweet DG, Carnielli VP, Greisen G, et al. European Consensus Guidelines on the Management of Respiratory Distress Syndrome: 2019 Update. Neonatology. 2019;115(4):432-450. PMID: 30974433.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK neonatology item assessing the diagnosis and definitive management of neonatal RDS with surfactant.",
      "distractorExclusionNotes": "Excluded antibiotics alone because surfactant replacement is required to correct alveolar collapse and hypoxia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0852",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Persistent Pulmonary Hypertension of Newborn Inhaled Nitric Oxide Therapy",
    "provisionalDifficulty": 5,
    "stem": "A female infant is delivered at 41 weeks of gestation through thick meconium-stained amniotic fluid. At birth, she is limp and apneic, requiring tracheal suctioning, positive pressure ventilation, and endotracheal intubation. In the neonatal intensive care unit, she exhibits severe cyanosis and profound hypoxemia refractory to 100% inspired oxygen. Pre-ductal oxygen saturation (right wrist) is 92%, whereas post-ductal oxygen saturation (left foot) is 78%, demonstrating a 14% differential. Echocardiography demonstrates suprasystemic right ventricular systolic pressure, flattened interventricular septum during systole, and right-to-left shunting across both a patent ductus arteriosus and patent foramen ovale, with normal cardiac anatomy. Which of the following is the most appropriate targeted therapy?",
    "choices": [
      [
        "Inhaled nitric oxide therapy via the mechanical ventilator circuit",
        "Persistent pulmonary hypertension of the newborn (PPHN) is characterized by elevated pulmonary vascular resistance (PVR) that fails to drop after birth, leading to severe right-to-left shunting of deoxygenated blood through the patent ductus arteriosus (PDA) and patent foramen ovale (PFO). A pre- to post-ductal oxygen saturation difference > 10% confirms substantial right-to-left ductal shunting. The primary targeted pharmacological therapy is inhaled nitric oxide (iNO). iNO selectively diffuses into ventilated pulmonary vascular smooth muscle cells, stimulating guanylyl cyclase to produce cyclic GMP, causing selective pulmonary vasodilation without producing systemic hypotension, thereby reversing right-to-left shunt."
      ],
      [
        "Intravenous infusion of alprostadil (prostaglandin E1) to maintain ductal patency",
        "PGE1 maintains ductal patency in ductal-dependent congenital heart lesions, but does not lower pulmonary vascular resistance and is not the primary treatment for PPHN."
      ],
      [
        "Intravenous indomethacin to achieve rapid pharmacological ductal closure",
        "Closing the ductus arteriosus in severe suprasystemic PPHN deprives the hypertensive right ventricle of its essential pop-off valve, precipitating acute right ventricular failure and death."
      ],
      [
        "High-dose intravenous sildenafil bolus combined with sodium nitroprusside",
        "Intravenous non-selective vasodilators cause catastrophic systemic hypotension and worsen right-to-left shunting; inhaled NO acts selectively on the pulmonary bed."
      ],
      [
        "Emergent balloon atrial septostomy under transesophageal echocardiography",
        "Balloon atrial septostomy is used for transposition of the great arteries with restrictive atrial communication, not for PPHN."
      ]
    ],
    "shortestValidSolution": "Meconium + pre/post ductal SpO2 gradient >10% + RV pressure = PPHN -> inhaled nitric oxide.",
    "necessaryInference": "Diagnose PPHN by pre/post-ductal saturation differential and select selective pulmonary vasodilation with inhaled nitric oxide.",
    "strongestDistractor": "Intravenous infusion of alprostadil (prostaglandin E1) to maintain ductal patency",
    "distractorExclusion": "PGE1 does not reduce pulmonary vascular resistance; selective inhaled nitric oxide is the standard therapy.",
    "citation": "Abman SH, Hansmann G, Archer SL, et al. Pediatric Pulmonary Hypertension: Guidelines From the American Heart Association and American Thoracic Society. Circulation. 2015;132(21):2037-2099. PMID: 26534956.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK neonatology item testing diagnosis of PPHN and selective treatment with inhaled nitric oxide.",
      "distractorExclusionNotes": "Excluded indomethacin and systemic vasodilators because closing the ductus causes RV failure, whereas iNO selectively lowers PVR.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0853",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Necrotizing Enterocolitis Pneumatosis Intestinalis and Immediate Management",
    "provisionalDifficulty": 4,
    "stem": "A 10-day-old male infant born at 30 weeks of gestation who has been tolerating fortified enteral formula feeds develops sudden abdominal distension, lethargy, and three episodes of large bilious gastric residuals. Vital signs show temperature 35.8 C (96.4 F), heart rate 174/min, blood pressure 58/34 mm Hg, and respiratory rate 62/min with shallow breathing. Physical examination demonstrates a shiny, tense, tender abdomen with erythema across the anterior abdominal wall and absent bowel sounds. Stool testing is positive for occult blood. An abdominal radiograph demonstrates linear branching radiolucencies tracking within the bowel wall (pneumatosis intestinalis) and branching gas within the portal venous system, but no free intraperitoneal air. Which of the following is the most appropriate initial management strategy?",
    "choices": [
      [
        "Cessation of enteral feeds, nasogastric decompression, and broad-spectrum IV antibiotics",
        "Necrotizing enterocolitis (NEC) is the most common gastrointestinal medical-surgical emergency in premature neonates, caused by a combination of intestinal mucosal immaturity, enteral feeding, abnormal bacterial colonization, and mucosal ischemia. The hallmark radiographic finding is pneumatosis intestinalis (gas within the submucosal/subserosal bowel wall) and portal venous gas. In the absence of pneumoperitoneum (free air indicating perforation), medical management (modified Bell stage II/III) consists of immediate cessation of all enteral feedings (complete bowel rest), placement of a large-bore nasogastric tube for continuous low suction decompression, aggressive fluid resuscitation, and broad-spectrum intravenous antibiotics (e.g., ampicillin, gentamicin, and metronidazole or clindamycin)."
      ],
      [
        "Immediate exploratory laparotomy with primary intestinal resection and stoma",
        "Surgical intervention is indicated primarily for bowel perforation (free air/pneumoperitoneum) or failure of aggressive medical therapy, not initial uncomplicated pneumatosis."
      ],
      [
        "Diagnostic barium contrast enema to assess for distal mechanical obstruction",
        "Barium enemas are strictly contraindicated in active necrotizing enterocolitis due to the high risk of bowel perforation and barium-induced chemical peritonitis."
      ],
      [
        "Switch from formula to pasteurized donor breast milk via slow continuous feeds",
        "Any enteral feedings worsen mucosal necrosis, bacterial proliferation, and impending perforation; complete bowel rest is mandatory."
      ],
      [
        "Oral administration of oral vancomycin and neomycin to sterilize intestinal lumen",
        "Oral non-absorbable antibiotics are not recommended for acute NEC and do not treat systemic bacterial translocation or bacteremia."
      ]
    ],
    "shortestValidSolution": "Preterm infant + formula feeds + bilious residuals + pneumatosis intestinalis = NEC -> NPO + NGT decompression + broad-spectrum IV antibiotics.",
    "necessaryInference": "Recognize medical management of NEC (bowel rest, NGT, IV antibiotics) and reserve surgery for perforation.",
    "strongestDistractor": "Immediate exploratory laparotomy with primary intestinal resection and stoma",
    "distractorExclusion": "Surgery is reserved for perforation (pneumoperitoneum) or medical refractory deterioration; medical therapy is first-line.",
    "citation": "Neu J, Walker WA. Necrotizing Enterocolitis. N Engl J Med. 2011;364(3):255-264. PMID: 21247316.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK neonatology item assessing initial non-operative management of necrotizing enterocolitis.",
      "distractorExclusionNotes": "Excluded immediate laparotomy because pneumatosis intestinalis without free air is initially managed medically.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0854",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Infantile Hypertrophic Pyloric Stenosis Preoperative Electrolyte Correction",
    "provisionalDifficulty": 4,
    "stem": "A 4-week-old first-born male infant is brought to the pediatric emergency department for evaluation of vomiting. Over the past 5 days, he has had non-bilious vomiting that has become progressively forceful and projectile after every bottle feeding. He appears avidly hungry immediately following each emesis. On physical examination, he appears dehydrated with sunken anterior fontanelle, dry oral mucosa, and decreased skin turgor. A firm, mobile, olive-shaped 1.5-cm mass is palpated in the right epigastrium. Abdominal ultrasonography confirms pyloric muscle thickness of 4.5 mm and length of 17 mm. Serum electrolytes show sodium 130 mEq/L, potassium 2.9 mEq/L, chloride 84 mEq/L, and bicarbonate 34 mEq/L. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Intravenous fluid resuscitation and complete electrolyte correction before pyloromyotomy",
        "Infantile hypertrophic pyloric stenosis presents in infants aged 3 to 6 weeks with non-bilious projectile vomiting, ravenous hunger, and a palpable epigastric 'olive' mass. Repeated loss of gastric hydrochloric acid produces a characteristic hypochloremic, hypokalemic metabolic alkalosis with paradoxical aciduria. Pyloric stenosis is NEVER a surgical emergency; rather, it is a MEDICAL emergency requiring complete hemodynamic and metabolic resuscitation prior to surgery. Administering general anesthesia in a patient with uncorrected metabolic alkalosis risks severe intraoperative hypoventilation, apnea, and fatal cardiac arrhythmias. Ramstedt pyloromyotomy is performed semi-electively only after normalization of chloride (>100 mEq/L), potassium (>4.0 mEq/L), and bicarbonate (<28 mEq/L)."
      ],
      [
        "Immediate transfer to the operating room for emergency open pyloromyotomy",
        "Operating before correcting hypokalemic hypochloremic alkalosis increases the risk of life-threatening anesthesia-induced apnea and cardiac arrest."
      ],
      [
        "Placement of a nasoduodenal feeding tube for post-pyloric enteral feeds",
        "Post-pyloric feeding tubes do not overcome the hypertrophied circular muscle obstruction and are unnecessary when definitive surgical cure is planned."
      ],
      [
        "Upper gastrointestinal series with oral barium contrast under fluoroscopy",
        "Barium swallow is redundant when ultrasound has already unequivocally established pyloric muscle dimensions diagnostic of hypertrophy (>3 mm thickness, >14 mm length)."
      ],
      [
        "High-dose oral erythromycin therapy to stimulate gastric antral motility",
        "Erythromycin is a motilin agonist that has been associated with the development of pyloric stenosis, not its medical treatment."
      ]
    ],
    "shortestValidSolution": "Projectile non-bilious vomiting + olive mass + hypochloremic alkalosis = pyloric stenosis -> correct electrolytes before pyloromyotomy.",
    "necessaryInference": "Recognize that pyloric stenosis requires complete medical and electrolyte stabilization prior to operative pyloromyotomy.",
    "strongestDistractor": "Immediate transfer to the operating room for emergency open pyloromyotomy",
    "distractorExclusion": "Pyloric stenosis is not a surgical emergency; anesthesia with severe metabolic alkalosis causes life-threatening respiratory arrest.",
    "citation": "Zaghal A et al. Brief Overview and Updates on Infantile Hypertrophic Pyloric Stenosis: Focus on Perioperative Management. Pediatr Ann. PMID: 34038653.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric surgery item on preoperative metabolic stabilization before pyloromyotomy.",
      "distractorExclusionNotes": "Excluded immediate surgery because metabolic alkalosis must be fully corrected prior to general anesthesia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0855",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Ileocolic Intussusception Ultrasound Diagnosis and Pneumatic Air Enema Reduction",
    "provisionalDifficulty": 4,
    "stem": "An 8-month-old previously healthy boy is brought to the emergency department with intermittent severe abdominal pain. His mother describes sudden episodes where he screams, turns pale, and draws his legs up toward his chest, lasting several minutes, interspersed with periods of calm where he appears lethargic. Over the past 2 hours, he has passed a stool containing dark red blood mixed with mucus ('currant jelly' stool). On physical examination, the abdomen is soft between episodes, and a tubular, sausage-shaped mass is palpable in the right hypochondrium, with emptiness in the right lower quadrant (Dance sign). Point-of-care abdominal ultrasonography reveals a multi-layered concentric ring mass ('target sign' or 'doughnut sign') measuring 3.2 cm in the right abdomen without free intraperitoneal air or peritonitis. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Pneumatic (air-contrast) enema reduction under fluoroscopic or ultrasound guidance",
        "Ileocolic intussusception is the most common cause of intestinal obstruction in children aged 6 to 36 months, typically idiopathic following viral gastroenteritis due to hypertrophied Peyer patches acting as a lead point. The classic triad consists of episodic colicky pain with leg drawing, a palpable sausage-shaped abdominal mass, and 'currant jelly' stools. Abdominal ultrasound is the diagnostic gold standard, demonstrating a pathognomonic target/doughnut sign. In the absence of peritonitis, perforation (free air), or bowel gangrene, pneumatic (air-contrast) or hydrostatic enema reduction is both diagnostic and definitive therapy, with success rates exceeding 80% to 90%."
      ],
      [
        "Immediate exploratory laparotomy for manual surgical reduction and bowel resection",
        "Surgical intervention is indicated only when enema reduction fails, or when signs of peritonitis, sepsis, or frank bowel perforation are present."
      ],
      [
        "Administration of oral polyethylene glycol bowel preparation and mineral oil",
        "Oral laxatives are contraindicated in mechanical bowel obstruction and exacerbate intestinal distension and ischemia."
      ],
      [
        "Performance of contrast-enhanced CT of the abdomen and pelvis",
        "CT exposes the infant to ionizing radiation and is completely unnecessary when ultrasound confirms intussusception and enema is ready."
      ],
      [
        "Observation on intravenous fluids and broad-spectrum antibiotics alone",
        "Conservative observation alone without reduction leads to irreversible mesenteric ischemia, transmural gangrene, and bowel perforation."
      ]
    ],
    "shortestValidSolution": "Currant jelly stool + sausage mass + target sign on US + no peritonitis = intussusception -> pneumatic air enema reduction.",
    "necessaryInference": "Select pneumatic air-contrast enema as initial therapeutic and diagnostic intervention for uncomplicated intussusception.",
    "strongestDistractor": "Immediate exploratory laparotomy for manual surgical reduction and bowel resection",
    "distractorExclusion": "Surgery is reserved for peritonitis, perforation, or failed non-operative enema reduction.",
    "citation": "Marsicovetere P, Ivatury SJ, White B, et al. Intestinal Intussusception: Etiology, Diagnosis, and Management. Clin Colon Rectal Surg. 2017;30(1):30-39. PMID: 28144210.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric emergency item on diagnosis and non-operative pneumatic reduction of intussusception.",
      "distractorExclusionNotes": "Excluded immediate laparotomy because air enema reduction is successful in >85% of uncomplicated cases.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0856",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Midgut Volvulus Complicating Intestinal Malrotation and Ladd Procedure",
    "provisionalDifficulty": 4,
    "stem": "A 12-day-old male infant is brought to the emergency department for sudden-onset, forceful bilious (bright green) vomiting that began 2 hours ago. He was born at full term with an uncomplicated nursery course. On physical examination, he is irritable and consolable only with difficulty. Heart rate is 168/min, blood pressure is 74/46 mm Hg, and capillary refill is 3 seconds. The abdomen is mild-to-moderately distended with diffuse tenderness, but soft and without involuntary guarding. An urgent upper gastrointestinal contrast series reveals the duodenojejunal junction lying to the right of the vertebral spine and inferior to the duodenal bulb, with contrast demonstrating a characteristic 'corkscrew' spiraling appearance in the right mid-abdomen. Which of the following is the most appropriate definitive management?",
    "choices": [
      [
        "Immediate exploratory laparotomy with Ladd procedure",
        "Bilious emesis in a neonate is a surgical emergency until proven otherwise. Midgut volvulus occurs when incomplete fetal intestinal rotation (arrested 270-degree counterclockwise rotation) leaves a narrow mesenteric pedicle suspended solely by the superior mesenteric vessels. Torsion around this narrow base twists the gut, occluding the superior mesenteric artery and causing acute midgut ischemia. Upper GI series is diagnostic, showing abnormal position of the ligament of Treitz and a 'corkscrew' twisted duodenum. Immediate surgical intervention with the Ladd procedure (counterclockwise detorsion of the volvulus, division of peritoneal Ladd bands, widening of the mesentery, positioning duodenum on right and cecum on left, and appendectomy) is required to prevent catastrophic total midgut gangrene."
      ],
      [
        "Pneumatic air-contrast enema reduction under fluoroscopic guidance",
        "Air enema is the treatment for ileocolic intussusception, not acute midgut volvulus of the small intestine."
      ],
      [
        "Endoscopic placement of a gastrojejunostomy feeding tube past Treitz",
        "Enteral tube placement fails to address mechanical mesenteric twisting and delays life-saving operative revascularization."
      ],
      [
        "Observation on intravenous fluids, bowel rest, and serial abdominal radiographs",
        "Conservative observation in midgut volvulus leads to total small intestinal infarction, short bowel syndrome, or fatal peritonitis within hours."
      ],
      [
        "Urgent colonoscopy with balloon dilation of the ileocecal valve",
        "Colonoscopy has no therapeutic utility for volvulus of the small bowel mesenteric root and risks colonic perforation."
      ]
    ],
    "shortestValidSolution": "Neonate + bilious emesis + corkscrew sign on upper GI = midgut volvulus -> emergent Ladd procedure laparotomy.",
    "necessaryInference": "Identify midgut volvulus as a surgical emergency requiring immediate Ladd procedure to prevent total intestinal necrosis.",
    "strongestDistractor": "Pneumatic air-contrast enema reduction under fluoroscopic guidance",
    "distractorExclusion": "Air enema treats intussusception; midgut volvulus requires emergent open operative Ladd procedure.",
    "citation": "Applegate KE et al. Evidence-based diagnosis of malrotation and volvulus. Pediatr Radiol. PMID: 19308378.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric emergency item on recognizing bilious vomiting from midgut volvulus requiring immediate Ladd procedure.",
      "distractorExclusionNotes": "Excluded air enema and conservative therapy because volvulus occludes the SMA and requires immediate operative untwisting.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0857",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Hirschsprung Disease Failure to Pass Meconium and Rectal Suction Biopsy",
    "provisionalDifficulty": 4,
    "stem": "A 48-hour-old male infant born at 39 weeks of gestation has not yet passed meconium. He has had poor feeding, progressive abdominal distension, and two episodes of green bilious emesis over the past 6 hours. Vital signs are normal. Abdominal examination reveals a tight, distended, tympanitic abdomen. Upon digital rectal examination, there is tight anal sphincter tone, and when the examining finger is withdrawn, there is an explosive expulsion of liquid stool and foul-smelling flatus ('squirt sign' or 'blast sign'), resulting in temporary relief of abdominal distension. A contrast enema demonstrates a narrowed rectosigmoid segment with a distinct transition zone leading to a massively dilated proximal colon. Which of the following is the gold standard diagnostic test to confirm this condition?",
    "choices": [
      [
        "Rectal suction biopsy demonstrating absence of ganglion cells in the submucosa",
        "Hirschsprung disease (congenital aganglionic megacolon) results from the failure of neural crest-derived neuroblasts to migrate craniocaudally to the distal bowel (Auerbach and Meissner plexuses), creating a functional obstruction in the aganglionic distal segment. Cardinal findings include failure to pass meconium within 48 hours of birth, bilious vomiting, abdominal distension, and a positive 'squirt sign' on rectal examination. While contrast enema reveals a transition zone, the definitive gold standard diagnostic test is rectal suction biopsy obtained at least 2 cm above the dentate line, which demonstrates the absence of ganglion cells and hypertrophied nerve bundles with high acetylcholinesterase activity."
      ],
      [
        "Sweat chloride testing by quantitative pilocarpine iontophoresis",
        "Sweat chloride testing diagnoses cystic fibrosis, which causes meconium ileus (microcolon on enema), not aganglionic megacolon with a rectal transition zone."
      ],
      [
        "Full-thickness open operative biopsy of the hepatic flexure colon wall",
        "Open biopsy of the proximal colon is unnecessary and misleading because aganglionosis begins at the internal anal sphincter and extends proximally; proximal colon is normally innervated."
      ],
      [
        "Genetic screening for isolated pathogenic mutations in the RET proto-oncogene",
        "RET mutations account for many familial Hirschsprung cases, but genetic testing is not diagnostic for anatomical aganglionosis, which requires histological confirmation."
      ],
      [
        "Upper gastrointestinal series with small bowel follow-through examination",
        "Upper GI series evaluates malrotation and duodenal atresia, not distal rectosigmoid aganglionosis."
      ]
    ],
    "shortestValidSolution": "Failure to pass meconium >48 hrs + squirt sign + transition zone on enema = Hirschsprung -> rectal suction biopsy.",
    "necessaryInference": "Select rectal suction biopsy demonstrating absent ganglion cells as the gold standard confirmation for Hirschsprung disease.",
    "strongestDistractor": "Sweat chloride testing by quantitative pilocarpine iontophoresis",
    "distractorExclusion": "Sweat testing is for meconium ileus in CF; rectosigmoid transition zone with squirt sign requires rectal biopsy for ganglion cells.",
    "citation": "Langer JC et al. Standing on the shoulders of giants: A brief history of Hirschsprung disease. J Pediatr Surg. PMID: 42785669.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric gastroenterology item on gold standard diagnosis of Hirschsprung disease.",
      "distractorExclusionNotes": "Excluded sweat test and genetic testing because histological rectal suction biopsy is the gold standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0858",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Biliary Atresia Direct Hyperbilirubinemia and Timing of Kasai Procedure",
    "provisionalDifficulty": 5,
    "stem": "A 5-week-old female infant is brought to the pediatrician for persistent jaundice. Her parents report that her skin has been yellowish since birth, but over the past 2 weeks her stools have become pale, clay-colored (acholic), and her urine is tea-colored. She is exclusively breastfed and growing well along the 50th percentile. Physical examination reveals scleral icterus, jaundice extending to the extremities, and firm hepatomegaly (liver edge palpated 3 cm below the right costal margin), with no splenomegaly. Laboratory studies show total bilirubin 8.4 mg/dL, direct (conjugated) bilirubin 6.8 mg/dL, AST 142 U/L, ALT 128 U/L, and alkaline phosphatase 680 U/L. Abdominal ultrasound demonstrates an absent or small, contracted gallbladder with a fibrous hyperechoic mass cranial to the portal vein bifurcation ('triangular cord sign'). Which of the following is the most critical next step in management?",
    "choices": [
      [
        "Intraoperative cholangiography and emergent hepatoportoenterostomy (Kasai procedure)",
        "Biliary atresia is a progressive fibro-obliterative cholangiopathy of the extrahepatic biliary tree, presenting in the first 2 to 8 weeks of life with conjugated (direct) hyperbilirubinemia, acholic (pale) stools, dark urine, and hepatomegaly. The 'triangular cord sign' on ultrasound represents fibrous ductal remnant tissue. Biliary atresia is a time-sensitive surgical emergency: definitive intraoperative cholangiography followed by hepatoportoenterostomy (Kasai procedure) must be performed ideally before 45 to 60 days of life. Beyond 60 to 90 days, progressive secondary biliary cirrhosis becomes irreversible, drastically decreasing the success of the Kasai procedure and necessitating early liver transplantation."
      ],
      [
        "Intensive phototherapy with blue-green fluorescent lamps and frequent breastfeeding",
        "Phototherapy treats indirect (unconjugated) hyperbilirubinemia to prevent kernicterus; it has zero efficacy for direct (conjugated) cholestasis and causes 'bronze baby syndrome'."
      ],
      [
        "Oral phenobarbital therapy for 4 weeks to induce hepatic glucuronosyltransferase",
        "Phenobarbital induces UGT enzymes for unconjugated jaundice (Crigler-Najjar type II); it does not open mechanically obliterated extrahepatic bile ducts."
      ],
      [
        "Sweat chloride iontophoresis to evaluate for cystic fibrosis-associated cholestasis",
        "Cystic fibrosis can cause neonatal inspissated bile, but triangular cord sign with acholic stools requires urgent surgical cholangiography to beat the Kasai age window."
      ],
      [
        "Outpatient monitoring with repeat liver function tests in four weeks",
        "Delaying four weeks pushes the infant beyond the critical 60-day window for successful Kasai hepatoportoenterostomy, causing irreversible biliary cirrhosis."
      ]
    ],
    "shortestValidSolution": "5 wk infant + direct hyperbilirubinemia + acholic stools + triangular cord sign = biliary atresia -> prompt Kasai procedure.",
    "necessaryInference": "Recognize biliary atresia as a surgical emergency requiring Kasai hepatoportoenterostomy before 60 days of life.",
    "strongestDistractor": "Intensive phototherapy with blue-green fluorescent lamps and frequent breastfeeding",
    "distractorExclusion": "Phototherapy is for unconjugated bilirubin; it is ineffective for conjugated cholestasis and causes bronze baby syndrome.",
    "citation": "Hartley JL, Davenport M, Kelly DA. Biliary Atresia. Lancet. 2009;374(9702):1704-1713. PMID: 19914515.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric gastroenterology item on biliary atresia and the critical window for Kasai portoenterostomy.",
      "distractorExclusionNotes": "Excluded phototherapy and watchful waiting because direct hyperbilirubinemia requires urgent surgical intervention before 60 days.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0859",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Congenital Diaphragmatic Hernia Endotracheal Intubation Avoiding Bag-Mask",
    "provisionalDifficulty": 4,
    "stem": "A full-term male newborn is delivered via spontaneous vaginal delivery. Immediately after delivery, the infant exhibits severe respiratory distress, cyanosis, and gasping respirations. Heart rate is 134/min, and oxygen saturation is 68%. Physical examination reveals a distinctly scaphoid (sunken) abdomen, barrel-shaped chest, absent breath sounds over the left hemithorax, and heart sounds loudest over the right lateral chest wall. Bowel sounds are audible upon auscultation of the left chest. Portable chest radiography demonstrates multiple air-filled loops of bowel in the left thoracic cavity, severe mediastinal shift to the right, and marked hypoplasia of both lungs. Which of the following is the most appropriate immediate action in the delivery room?",
    "choices": [
      [
        "Immediate endotracheal intubation and insertion of a large-bore orogastric tube",
        "Congenital diaphragmatic hernia (CDH, most commonly left-sided Bochdalek hernia) results from failure of the pleuroperitoneal membranes to close, allowing abdominal viscera to herniate into the thorax, impairing lung development and producing severe pulmonary hypoplasia and pulmonary hypertension. Physical findings include respiratory failure, scaphoid abdomen, shifted heart sounds, and bowel sounds in the chest. In the delivery room, bag-mask ventilation is STRICTLY CONTRAINDICATED because positive pressure insufflates air into the stomach and herniated intestinal loops, rapidly expanding them within the thorax and causing catastrophic tension physiology and contralateral lung collapse. The immediate mandatory action is direct endotracheal intubation and placement of a continuous-suction orogastric tube to decompress the gut."
      ],
      [
        "Vigorous bag-valve-mask positive pressure ventilation with 100% oxygen",
        "Bag-valve-mask ventilation forces gas into the thoracic bowel loops, worsening mediastinal shift, compressing the contralateral lung, and causing circulatory arrest."
      ],
      [
        "Emergent insertion of a left-sided thoracostomy tube to release tension",
        "Placing a chest tube into a chest filled with herniated intestines directly lacerates or perforates the bowel loops, causing fecal contamination and sepsis."
      ],
      [
        "Immediate transfer to the operating room for emergent surgical diaphragmatic repair",
        "Immediate surgery is no longer practiced; infants with CDH require preoperative medical stabilization, gentle lung-protective ventilation, and pulmonary hypertension management."
      ],
      [
        "High-flow humidified oxygen via nasal cannula at 8 liters per minute",
        "Nasal cannula is completely inadequate for severe neonatal respiratory distress and pulmonary hypoplasia requiring controlled invasive ventilation."
      ]
    ],
    "shortestValidSolution": "Scaphoid abdomen + bowel sounds in chest + CXR loops = CDH -> immediate endotracheal intubation (NO bag-mask) + orogastric tube.",
    "necessaryInference": "Recognize that bag-mask ventilation is contraindicated in CDH and select immediate endotracheal intubation with orogastric decompression.",
    "strongestDistractor": "Vigorous bag-valve-mask positive pressure ventilation with 100% oxygen",
    "distractorExclusion": "Bag-mask ventilation inflates intrathoracic viscera, causing fatal tension pneumothorax-like mass effect on the heart and right lung.",
    "citation": "Land S et al. Early Childhood Outcomes in Severe Congenital Diaphragmatic Hernia Treated with Fetoscopic Endoluminal Tracheal Occlusion (FETO) versus Non-FETO at a Single Center. Fetal Diagn Ther. PMID: 41762672.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK neonatology delivery room emergency item on resuscitation of congenital diaphragmatic hernia.",
      "distractorExclusionNotes": "Excluded bag-valve-mask ventilation and chest tube because both cause catastrophic visceral distension or laceration.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0860",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Esophageal Atresia With Tracheoesophageal Fistula Preoperative Replogle Tube",
    "provisionalDifficulty": 4,
    "stem": "A full-term female newborn is noted to have excessive bubbling saliva, frothing at the mouth and nose, and respiratory distress within 30 minutes of birth. Whenever the nurse attempts to wipe her mouth, frothy secretions immediately reaccumulate. During her initial breastfeeding attempt, she exhibits violent coughing, choking, regurgitation, and cyanosis that resolves upon suctioning. An attempt to pass an 8-French orogastric tube into the stomach meets firm resistance at 10 cm from the oral lips. Portable chest and abdominal radiography reveals the coiled catheter tip arrested in the upper esophageal pouch at the level of T2-T3, along with significant air in the stomach and small intestine. Which of the following is the most appropriate initial management step?",
    "choices": [
      [
        "Continuous suction via a double-lumen Replogle catheter and upright positioning",
        "This infant has the most common variant of esophageal atresia with tracheoesophageal fistula (EA/TEF, Type C: blind upper esophageal pouch with distal tracheoesophageal fistula to the carina, accounting for ~85% of cases). The presence of gas in the stomach and bowel confirms communication between the trachea and the distal gastrointestinal tract. Initial preoperative management focuses on preventing life-threatening aspiration of pooled salivary secretions and gastric acid reflux. The infant should be placed in an upright (anti-Trendelenburg, 30-45 degrees) position to minimize acid reflux through the fistula, with continuous low-pressure suction applied to a double-lumen Replogle catheter placed into the upper pouch, maintained on NPO status with IV fluids."
      ],
      [
        "Upper gastrointestinal contrast swallow using liquid barium sulfate",
        "Barium swallow is strictly contraindicated because overflow from the atretic upper pouch spills directly into the laryngeal airway, causing severe chemical pneumonitis."
      ],
      [
        "Immediate endotracheal intubation with high-frequency oscillatory ventilation",
        "In non-intubated infants with EA/TEF, positive pressure ventilation should be avoided if possible, as gas preferentially flows down the fistula into the stomach, causing gastric rupture."
      ],
      [
        "Prone Trendelenburg positioning to promote gravity drainage of oral secretions",
        "Trendelenburg positioning promotes massive retrograde reflux of caustic gastric acid through the fistula into the lungs, worsening chemical pneumonitis."
      ],
      [
        "Administration of oral thickened feeds using a specialized cleft-palate nipple",
        "Administering oral feedings in esophageal atresia results in massive pulmonary aspiration, asphyxiation, and respiratory arrest."
      ]
    ],
    "shortestValidSolution": "Excessive frothing + choking with feeds + coiled NGT at 10 cm + air in stomach = EA with TEF -> Replogle tube suction + upright positioning.",
    "necessaryInference": "Identify Type C EA/TEF and establish preoperative airway protection with continuous sump suction and upright position.",
    "strongestDistractor": "Upper gastrointestinal contrast swallow using liquid barium sulfate",
    "distractorExclusion": "Barium is contraindicated due to aspiration pneumonitis; catheter arrest on plain film is completely diagnostic.",
    "citation": "Pinheiro PF et al. Current knowledge on esophageal atresia. World J Gastroenterol. PMID: 22851858.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK neonatology item on preoperative protection and management of esophageal atresia with TEF.",
      "distractorExclusionNotes": "Excluded barium swallow and Trendelenburg position because both exacerbate severe pulmonary aspiration.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0861",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Cardiovascular",
    "topic": "Tetralogy of Fallot Hypercyanotic Tet Spell and Knee-Chest Maneuver",
    "provisionalDifficulty": 4,
    "stem": "A 14-month-old boy with known, uncorrected Tetralogy of Fallot is brought to the pediatric emergency department during an acute crisis. His mother reports that while having a severe temper tantrum, he suddenly became deeply cyanotic, irritable, and began breathing rapidly and deeply. On examination, he is profoundly cyanotic, tachypneic at 56/min, and agitated. Auscultation of the heart reveals that a harsh systolic ejection murmur at the left upper sternal border that was loud at his prior clinic visit is now nearly inaudible. Oxygen saturation is 62% on ambient air. Which of the following is the most appropriate immediate bedside intervention and its corresponding physiological mechanism?",
    "choices": [
      [
        "Placing the child in the knee-chest position to increase systemic vascular resistance",
        "This child is experiencing a hypercyanotic 'tet' spell, which occurs in Tetralogy of Fallot when an acute trigger (crying, agitation, dehydration) increases infundibular (subpulmonic) muscular spasm or decreases systemic vascular resistance (SVR). This causes massive right-to-left shunting of deoxygenated blood across the large VSD, bypassing the lungs. The systolic murmur decreases because less blood flows across the stenotic right ventricular outflow tract (RVOT). The immediate first-line maneuver is placing the child in the knee-chest position (or having an older child squat). This acutely kinks the femoral arteries, dramatically increasing SVR, which forces right ventricular blood through the pulmonary circulation rather than across the VSD, improving arterial oxygenation."
      ],
      [
        "Immediate intravenous infusion of isoproterenol to increase cardiac inotropic state",
        "Beta-agonists like isoproterenol increase heart rate and myocardial contractility, worsening dynamic infundibular spasm and exacerbating right-to-left shunting."
      ],
      [
        "Rapid intravenous bolus of furosemide to reduce right ventricular end-diastolic volume",
        "Diuretics worsen hypovolemia and hemoconcentration, intensifying infundibular spasm and right-to-left shunting."
      ],
      [
        "Administration of inhaled nitric oxide to achieve systemic arterial vasodilation",
        "Systemic vasodilation reduces SVR, which directly worsens right-to-left VSD shunting and deepens cyanosis."
      ],
      [
        "Emergent endotracheal intubation with hyperventilation to induce hypocapnic alkalosis",
        "While intubation is used in refractory spells, knee-chest positioning, supplemental oxygen, and intravenous morphine/fluid boluses are non-invasive first-line steps."
      ]
    ],
    "shortestValidSolution": "Tetralogy of Fallot + tantrum cyanosis + softening systolic murmur = tet spell -> knee-chest positioning to increase SVR.",
    "necessaryInference": "Understand the hemodynamic mechanism of the knee-chest maneuver (increasing SVR) in reversing right-to-left shunt during a tet spell.",
    "strongestDistractor": "Immediate intravenous infusion of isoproterenol to increase cardiac inotropic state",
    "distractorExclusion": "Beta-agonists exacerbate dynamic subpulmonic infundibular spasm; increasing SVR via knee-chest position is therapeutic.",
    "citation": "Bailliard F, Anderson RH. Tetralogy of Fallot. Orphanet J Rare Dis. 2009;4:2. PMID: 19144126.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric cardiology item evaluating hemodynamics and bedside treatment of Tetralogy of Fallot tet spells.",
      "distractorExclusionNotes": "Excluded beta-agonists and vasodilators because increasing SVR via knee-chest positioning reverses the shunt.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0862",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Cardiovascular",
    "topic": "Transposition of Great Arteries Prostaglandin E1 to Maintain Ductal Mixing",
    "provisionalDifficulty": 4,
    "stem": "A male infant is born at 39 weeks of gestation to a mother with pregestational diabetes mellitus. Within 1 hour of birth, the neonate develops marked cyanosis that does not improve after administration of 100% inspired oxygen via a nonrebreather mask (hyperoxia test shows PaO2 38 mm Hg). Physical examination reveals a comfortable, tachypneic infant with central cyanosis, a single loud second heart sound (S2), and no significant cardiac murmurs. Chest radiography demonstrates a narrow superior mediastinum with an 'egg-on-a-string' cardiac silhouette and increased pulmonary vascular markings. Echocardiography confirms that the aorta arises directly from the right ventricle and the pulmonary artery arises directly from the left ventricle. Which of the following is the most appropriate immediate medical management?",
    "choices": [
      [
        "Continuous intravenous infusion of prostaglandin E1 (alprostadil)",
        "Transposition of the great arteries (D-TGA) is the most common cyanotic congenital heart defect presenting in the immediate newborn period. The aorta arises anteriorly from the right ventricle, and the pulmonary artery arises from the left ventricle, creating two parallel, independent circulations (systemic venous blood recirculates to the body, and pulmonary venous blood recirculates to the lungs). Survival is completely dependent upon bidirectional mixing of blood between the parallel circuits via a patent ductus arteriosus (PDA), patent foramen ovale (PFO), or VSD. The immediate, life-saving intervention is continuous intravenous infusion of prostaglandin E1 (alprostadil) to maintain PDA patency and allow oxygenated blood to enter the systemic circulation."
      ],
      [
        "High-dose intravenous indomethacin to achieve immediate ductal closure",
        "Indomethacin closes the ductus arteriosus; in transposition of the great arteries, ductal closure abolishes circulatory mixing and causes fatal asphyxia."
      ],
      [
        "Immediate surgical placement of a modified Blalock-Taussig shunt",
        "A Blalock-Taussig shunt creates systemic-to-pulmonary blood flow in lesions with pulmonary hypoperfusion (e.g., severe tetralogy), but does not correct parallel transposition."
      ],
      [
        "Initiation of intravenous milrinone and high-dose furosemide therapy",
        "Inotropes and diuretics fail to treat the underlying circulatory segregation of transposition, which requires ductal mixing."
      ],
      [
        "Administration of 100% oxygen via high-frequency oscillatory ventilation alone",
        "TGA is characterized by refractory cyanosis during the hyperoxia test because oxygenated pulmonary blood cannot cross into the systemic circulation without intercirculatory mixing."
      ]
    ],
    "shortestValidSolution": "Newborn cyanosis + refractory to 100% O2 + egg-on-a-string silhouette = TGA -> IV prostaglandin E1 to maintain ductal mixing.",
    "necessaryInference": "Recognize transposition of the great arteries with parallel circulations requiring PGE1 to preserve ductal mixing.",
    "strongestDistractor": "High-dose intravenous indomethacin to achieve immediate ductal closure",
    "distractorExclusion": "Indomethacin closes the ductus arteriosus, which causes rapid fatal circulatory arrest in transposition.",
    "citation": "Villafane J, Lantin-Hermoso MR, Bhatt AB, et al. D-Transposition of the Great Arteries: The Current Era of the Arterial Switch Operation. J Am Coll Cardiol. 2014;64(5):498-511. PMID: 25082585.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric cardiology item on ductal-dependent cyanotic heart disease and PGE1 therapy.",
      "distractorExclusionNotes": "Excluded indomethacin because keeping the PDA open with PGE1 is vital for survival in transposition of the great arteries.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0863",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Cardiovascular",
    "topic": "Coarctation of Aorta Ductal Closure Shock and Prostaglandin E1 Infusion",
    "provisionalDifficulty": 4,
    "stem": "A 5-day-old male infant who was discharged home as healthy on day 2 of life is brought to the emergency department for severe lethargy, poor feeding, and cold extremities. On examination, he is pale, mottled, and in moderate respiratory distress. Heart rate is 182/min, respiratory rate is 64/min, and blood pressure measured in the right upper extremity is 94/56 mm Hg, whereas blood pressure in the right lower extremity is 52/30 mm Hg. Radial and brachial pulses are bounding, but femoral and pedal pulses are thready and markedly delayed. Capillary refill in the lower extremities is 5 seconds. Precordial examination reveals a gallop rhythm and a systolic murmur heard best over the left interscapular region. Serum lactate is 5.4 mmol/L. Which of the following is the most appropriate immediate medical intervention?",
    "choices": [
      [
        "Continuous intravenous infusion of prostaglandin E1 (alprostadil)",
        "This infant presents with acute circulatory collapse and cardiogenic shock secondary to critical coarctation of the aorta. In utero and during the first few days of life, right-to-left flow across the patent ductus arteriosus (PDA) bypasses the juxtaductal aortic narrowing, perfusing the lower body. When the ductus arteriosus undergoes physiological closure around days 3 to 7 of life, systemic blood flow to the lower body is abruptly compromised, leading to severe afterload mismatch, left ventricular failure, metabolic acidosis, and lower extremity hypoperfusion (delayed/absent femoral pulses, significant upper-to-lower extremity blood pressure gradient). The immediate life-saving intervention is prostaglandin E1 (alprostadil) infusion to reopen the ductus arteriosus and restore distal systemic perfusion."
      ],
      [
        "Intravenous bolus of indomethacin to facilitate ductal obliteration",
        "Indomethacin promotes ductal closure, which precipitated the acute circulatory collapse in this ductal-dependent lesion; administering it would cause cardiac arrest."
      ],
      [
        "High-dose intravenous furosemide bolus to treat cardiogenic pulmonary edema",
        "Diuretics alone do not relieve mechanical aortic obstruction and exacerbate profound metabolic acidosis and hypoperfusion."
      ],
      [
        "Immediate placement of a balloon-expandable endovascular stent across the aortic arch",
        "Catheter-based stenting in neonates is technically challenging and reserved for re-coarctation; medical reopening of the PDA with PGE1 is the essential immediate step before surgical repair."
      ],
      [
        "Administration of 100% inspired oxygen via high-flow nasal cannula",
        "High oxygen concentrations stimulate ductal constriction, further worsening aortic occlusion in ductal-dependent systemic circulations."
      ]
    ],
    "shortestValidSolution": "Day 5 infant + shock + upper/lower BP gradient + weak femoral pulses = coarctation -> IV prostaglandin E1.",
    "necessaryInference": "Recognize ductal-dependent systemic circulation in critical neonatal aortic coarctation requiring immediate PGE1 to reopen the PDA.",
    "strongestDistractor": "Intravenous bolus of indomethacin to facilitate ductal obliteration",
    "distractorExclusion": "Indomethacin closes the ductus arteriosus; PGE1 is required to reopen the ductus and restore lower extremity perfusion.",
    "citation": "Dijkema EJ et al. Diagnosis, imaging and clinical management of aortic coarctation. Heart. PMID: 28377475.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric cardiology item testing recognition of ductal closure in critical aortic coarctation.",
      "distractorExclusionNotes": "Excluded indomethacin and high-flow oxygen because both promote ductal closure, worsening cardiogenic shock.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0864",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Cardiovascular",
    "topic": "Kawasaki Disease Diagnostic Criteria and IVIG Therapy to Prevent Aneurysms",
    "provisionalDifficulty": 4,
    "stem": "A 3-year-old girl is brought to the clinic due to 6 days of high spiking fevers up to 39.8 C (103.6 F) unresponsive to oral acetaminophen and amoxicillin. On physical examination, she is irritable. Bilateral bulbar conjunctivae are brightly erythematous without purulent discharge or exudate. The lips are dry, red, and cracked with fissuring, and the tongue exhibits prominent erythema with enlarged fungiform papillae ('strawberry tongue'). A polymorphous maculopapular rash covers the trunk and perineal region. There is firm, non-tender, unilateral anterior cervical lymphadenopathy measuring 2.2 cm. The palms and soles are indurated and erythematous. Laboratory testing shows WBC 18,200/mm3, platelet count 520,000/mm3, ESR 88 mm/hr, and C-reactive protein 94 mg/L. Which of the following is the most important primary therapy to reduce the risk of long-term cardiovascular complications?",
    "choices": [
      [
        "High-dose intravenous immunoglobulin and oral high-dose aspirin",
        "Kawasaki disease is an acute systemic medium-vessel vasculitis of childhood. Diagnostic criteria require fever >= 5 days plus at least 4 of 5 clinical features: (1) bilateral non-exudative bulbar conjunctivitis, (2) mucosal changes (strawberry tongue, cracked red lips, erythema of pharynx), (3) polymorphous rash, (4) extremity changes (erythema/edema of hands/feet, periungual desquamation later), and (5) unilateral cervical lymphadenopathy (>= 1.5 cm). The most devastating complication is coronary artery aneurysm formation, occurring in up to 25% of untreated children. Treatment with high-dose intravenous immunoglobulin (IVIG, 2 g/kg) and oral aspirin administered within the first 10 days of fever dramatically reduces the risk of coronary aneurysms to < 5%."
      ],
      [
        "High-dose oral prednisone monotherapy for four consecutive weeks",
        "Corticosteroid monotherapy historically increased the rate of coronary aneurysm rupture and is reserved only for IVIG-resistant refractory cases."
      ],
      [
        "Switch from amoxicillin to intravenous vancomycin and piperacillin-tazobactam",
        "Kawasaki disease is an autoimmune vasculitis, not a bacterial infection; antibacterial therapy has no efficacy in preventing coronary aneurysms."
      ],
      [
        "Subcutaneous infliximab monotherapy without aspirin or immunoglobulin",
        "Infliximab is an adjunctive TNF-alpha inhibitor used for refractory disease, but IVIG plus aspirin remains the mandatory standard first-line regimen."
      ],
      [
        "Observation and repeat echocardiography in four weeks without medical therapy",
        "Withholding treatment in active Kawasaki disease leads to a high incidence of giant coronary artery aneurysms, thrombosis, and myocardial infarction."
      ]
    ],
    "shortestValidSolution": "Fever >=5 days + conjunctivitis + strawberry tongue + rash + hand edema = Kawasaki -> IVIG + high-dose aspirin.",
    "necessaryInference": "Recognize classic Kawasaki disease criteria and initiate IVIG plus aspirin within 10 days to prevent coronary aneurysms.",
    "strongestDistractor": "Switch from amoxicillin to intravenous vancomycin and piperacillin-tazobactam",
    "distractorExclusion": "Kawasaki disease is a non-infectious medium-vessel vasculitis; antibiotics fail to prevent coronary aneurysm development.",
    "citation": "McCrindle BW, Rowley AH, Newburger JW, et al. Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease: A Scientific Statement for Health Professionals From the American Heart Association. Circulation. 2017;135(17):e927-e999. PMID: 28356445.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric cardiology/rheumatology item on Kawasaki disease criteria and prevention of coronary aneurysms.",
      "distractorExclusionNotes": "Excluded antibiotics and steroid monotherapy because IVIG plus aspirin is the established evidence-based regimen.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0865",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Acute Epiglottitis Airway Security in Operating Room Environment",
    "provisionalDifficulty": 4,
    "stem": "A 4-year-old unimmunized boy is brought to the emergency department with rapid-onset high fever, difficulty swallowing, and severe breathing difficulty that began 6 hours ago. On examination, he appears toxic, pale, and intensely anxious. He is sitting upright, leaning forward with his neck hyperextended, chin thrust forward, and mouth open ('tripod position'), with copious drooling of saliva. Temperature is 39.8 C (103.6 F), heart rate is 156/min, respiratory rate is 42/min, and inspiratory stridor is audible without a barking cough. He refuses to lie supine or speak. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate transfer to the operating room for endotracheal intubation with ENT present",
        "Acute epiglottitis is a life-threatening bacterial cellulitis of the epiglottis and supraglottic structures, most commonly caused by Haemophilus influenzae type b (in unimmunized children) or Streptococcus species. Clinical presentation is rapid and toxic, characterized by the '4 Ds': Drooling, Dysphagia, Dysphonia, and Distressed breathing, with patients adopting the classic 'tripod position'. Any aggressive agitation (such as attempting pharyngeal inspection with a tongue blade, IV placement in an agitated child, or forced supine positioning) can trigger sudden complete laryngospasm and fatal airway obstruction. The patient must be transferred immediately to the operating room with an experienced anesthesiologist and otolaryngologist prepared for emergent surgical airway (tracheostomy/cricothyrotomy) during controlled intubation."
      ],
      [
        "Direct examination of the posterior pharynx using a sterile tongue depressor",
        "Using a tongue depressor or examining the pharynx can trigger fatal reflex laryngospasm and complete airway obstruction in epiglottitis."
      ],
      [
        "Transport to the radiology suite for upright lateral soft-tissue neck radiography",
        "Transporting an unstable patient with impending airway closure to the radiology suite is unsafe; clinical suspicion mandates immediate airway securing."
      ],
      [
        "Nebulized racemic epinephrine and high-dose oral dexamethasone in triage",
        "Racemic epinephrine and dexamethasone treat subglottic swelling in viral croup, but are ineffective for severe supraglottic bacterial phlegmon."
      ],
      [
        "Immediate aggressive peripheral intravenous line placement for blood cultures",
        "Agitating the child with painful venipuncture can precipitate immediate laryngospasm; IV access is safely secured in the operating room after anesthesia induction."
      ]
    ],
    "shortestValidSolution": "Unimmunized + toxic fever + tripod position + drooling + stridor = epiglottitis -> OR intubation with ENT present.",
    "necessaryInference": "Recognize epiglottitis and maintain calm while transporting directly to the operating room for controlled airway intubation.",
    "strongestDistractor": "Direct examination of the posterior pharynx using a sterile tongue depressor",
    "distractorExclusion": "Tongue blade examination triggers reflex laryngospasm and complete respiratory arrest; exam must occur under anesthesia in the OR.",
    "citation": "Xia Y et al. [Clinical experience in the diagnosis and treatment of anterior-inferior peritonsillar abscess]. Lin Chuang Er Bi Yan Hou Tou Jing Wai Ke Za Zhi. PMID: 42973014.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric emergency airway item on epiglottitis management and avoidance of airway provocation.",
      "distractorExclusionNotes": "Excluded tongue depressor, racemic epinephrine, and radiology transport because immediate controlled OR intubation is vital.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0866",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Laryngotracheobronchitis Croup Nebulized Epinephrine and Dexamethasone",
    "provisionalDifficulty": 4,
    "stem": "An 18-month-old girl is brought to the emergency department at 2:00 AM because of sudden breathing difficulty. Her parents report 2 days of rhinorrhea and low-grade fever that culminated tonight in a harsh, brassy, 'barking' cough and noisy breathing. On physical examination, she is resting quietly in her father's arms. Temperature is 38.1 C (100.6 F), heart rate is 132/min, respiratory rate is 36/min, and oxygen saturation is 95% on ambient air. Even while calm and resting, she exhibits audible high-pitched inspiratory stridor, mild suprasternal retractions, and a hoarse cry. She does not drool and is swallowing secretions normally. An anteroposterior neck radiograph demonstrates symmetric subglottic narrowing ('steeple sign'). Which of the following is the most appropriate management combination?",
    "choices": [
      [
        "Single-dose oral or intramuscular dexamethasone plus nebulized racemic epinephrine",
        "Laryngotracheobronchitis (croup) is a common viral upper respiratory infection of children aged 6 months to 3 years, most frequently caused by parainfluenza virus. Subglottic edema produces the classic triad of a barking cough, hoarseness, and inspiratory stridor, with an AP neck radiograph showing the characteristic 'steeple sign'. Stridor present at rest signifies moderate-to-severe croup (Westley croup score >= 3). Management consists of a single dose of systemic corticosteroids (oral, IM, or IV dexamethasone 0.6 mg/kg) to reduce airway mucosal inflammation, combined with nebulized racemic epinephrine, which stimulates alpha-1 adrenergic receptors to cause local mucosal arteriolar vasoconstriction, rapidly reducing subglottic edema within 10 to 30 minutes."
      ],
      [
        "Oral amoxicillin-clavulanate for ten days and cool mist humidification tent",
        "Croup is viral in etiology; antibacterial therapy is ineffective, and cool mist therapy has shown no benefit in controlled trials."
      ],
      [
        "Continuous inhaled albuterol nebulization every twenty minutes for three doses",
        "Albuterol is a beta-2 agonist that dilates lower bronchiolar smooth muscle; it does not treat upper subglottic mucosal edema and may cause tachycardia."
      ],
      [
        "Immediate rigid bronchoscopy and foreign body extraction in the operating room",
        "Rigid bronchoscopy is indicated for foreign body aspiration (sudden choking in absence of viral prodrome), not typical viral croup with a steeple sign."
      ],
      [
        "Immediate endotracheal intubation with positive-pressure mechanical ventilation",
        "Intubation is reserved for severe croup with exhaustion, impending respiratory failure, or lethargy; >95% of resting stridor resolves with dexamethasone and racemic epinephrine."
      ]
    ],
    "shortestValidSolution": "Barking cough + resting inspiratory stridor + steeple sign = moderate/severe croup -> dexamethasone + nebulized racemic epinephrine.",
    "necessaryInference": "Recognize croup with resting stridor and administer systemic dexamethasone plus nebulized racemic epinephrine.",
    "strongestDistractor": "Continuous inhaled albuterol nebulization every twenty minutes for three doses",
    "distractorExclusion": "Albuterol acts on lower airways; subglottic upper airway edema requires alpha-1 vasoconstriction via racemic epinephrine.",
    "citation": "Bjornson C et al. Nebulized epinephrine for croup in children. Cochrane Database Syst Rev. PMID: 24114291.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric emergency item assessing treatment of croup presenting with resting stridor.",
      "distractorExclusionNotes": "Excluded albuterol and antibiotics because subglottic edema requires dexamethasone and racemic epinephrine.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0867",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Foreign Body Aspiration Airway Obstructive Emphysema and Rigid Bronchoscopy",
    "provisionalDifficulty": 4,
    "stem": "A 22-month-old boy is brought to the emergency department after a sudden choking episode while eating trail mix containing peanuts and raisins 3 hours ago. Following the initial paroxysm of coughing, his breathing became noisy. On examination, he is alert and in mild respiratory distress. Respiratory rate is 32/min, and oxygen saturation is 93% on room air. Pulmonary auscultation reveals unilaterally diminished breath sounds and monophonic expiratory wheezing over the right middle and lower lung zones, with normal vesicular breath sounds on the left. Inspiratory and bilateral decubitus (or forced expiratory) chest radiography reveals persistent hyperlucency and hyperinflation of the right lung with mediastinal shift toward the left during expiration, consistent with air trapping. Which of the following is the definitive management of choice?",
    "choices": [
      [
        "Urgent rigid bronchoscopy under general anesthesia",
        "Foreign body aspiration (FBA) is most common in children aged 1 to 3 years due to incomplete dentition and exploration of small food items (e.g., nuts, seeds, coins). A foreign body in a mainstem or lobar bronchus (more frequently the right due to a wider, more vertical course) often creates a 'check-valve' mechanism: air enters during inspiration when the bronchus dilates, but cannot exit during expiration as the airway narrows, resulting in obstructive hyperinflation, air trapping, and mediastinal shift away from the affected side on expiratory or decubitus films. The definitive diagnostic and therapeutic gold standard is urgent rigid bronchoscopy under general anesthesia, which provides superior airway control, optics, and grasping instruments to extract the object and avoid fragmentation."
      ],
      [
        "Chest physiotherapy with postural percussion and vibration to dislodge the object",
        "Chest physiotherapy is contraindicated because dislodging a bronchial foreign body can propel it proximally into the subglottic trachea, causing complete acute airway asphyxiation."
      ],
      [
        "Oral prednisone and nebulized albuterol every four hours for suspected reactive airway disease",
        "Treating foreign body aspiration as asthma delays removal, leading to secondary bacterial pneumonia, atelectasis, and bronchiectasis."
      ],
      [
        "Flexible fiberoptic bronchoscopy through a laryngeal mask airway",
        "Flexible bronchoscopy is diagnostic but lacks the rigid working channel and grasping forceps necessary to securely extract organic objects like peanuts."
      ],
      [
        "Immediate right-sided thoracotomy and surgical segmentectomy",
        "Surgical resection is an extreme measure reserved only for destroyed lung tissue from chronic, neglected, impacted foreign bodies."
      ]
    ],
    "shortestValidSolution": "Peanut choking + unilateral wheezing + air trapping with shift on expiration = foreign body -> urgent rigid bronchoscopy.",
    "necessaryInference": "Identify bronchial foreign body aspiration with air trapping and select rigid bronchoscopy over chest physiotherapy or asthma therapy.",
    "strongestDistractor": "Chest physiotherapy with postural percussion and vibration to dislodge the object",
    "distractorExclusion": "Chest physiotherapy can dislodge the foreign body into the central trachea, causing complete acute airway occlusion.",
    "citation": "Salih AM et al. Airway foreign bodies: A critical review for a common pediatric emergency. World J Emerg Med. PMID: 27006731.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric emergency item testing diagnosis and extraction of aspirated tracheobronchial foreign bodies.",
      "distractorExclusionNotes": "Excluded chest physiotherapy due to risk of total tracheal occlusion; rigid bronchoscopy is the gold standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0868",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Nervous System",
    "topic": "Complex Febrile Seizures Diagnostic Criteria and Clinical Evaluation",
    "provisionalDifficulty": 4,
    "stem": "A 20-month-old boy is brought to the emergency department following a seizure at home. His mother states that he developed a fever of 39.2 C (102.6 F) earlier today with a runny nose. Approximately 1 hour ago, she witnessed rhythmic jerking restricted entirely to his right arm and right leg that lasted approximately 18 minutes. After the jerking stopped, the child was lethargic. On arrival 40 minutes post-ictally, he is waking up but continues to exhibit weakness and decreased spontaneous movement of the right upper extremity compared to the left (Todd paresis). Neurological examination is otherwise non-focal, and the anterior fontanelle is closed and flat. There is no nuchal rigidity. Which of the following features classifies this episode as a complex febrile seizure rather than a simple febrile seizure?",
    "choices": [
      [
        "Focal motor onset, duration exceeding 15 minutes, and transient post-ictal weakness",
        "Febrile seizures occur between 6 months and 5 years of age in the presence of fever without intracranial infection. They are classified as simple or complex. A simple febrile seizure is generalized (non-focal), lasts < 15 minutes, and does not recur within 24 hours, carrying a low risk of epilepsy (~1-2%). A complex febrile seizure meets ANY of the following three criteria: (1) focal onset or focal features during the seizure, (2) prolonged duration (>= 15 minutes), or (3) recurrence within 24 hours (or within the same febrile illness). Furthermore, the presence of post-ictal focal neurological deficits (Todd paralysis) confirms focal involvement. Complex febrile seizures warrant closer neurological evaluation, possible neuroimaging, and EEG."
      ],
      [
        "Temperature exceeding 39.0 C at the time of the seizure",
        "The absolute height of the fever does not define a seizure as complex; seizure morphology, duration, and recurrence pattern determine classification."
      ],
      [
        "Occurrence during the second year of life",
        "Ages 12 to 24 months represent the peak incidence for both simple and complex febrile seizures and does not distinguish the two."
      ],
      [
        "Family history of febrile seizures in a first-degree relative",
        "Family history increases the baseline susceptibility to febrile seizures generally, but does not classify an individual episode as complex."
      ],
      [
        "Presence of concurrent upper respiratory tract viral infection",
        "Viral upper respiratory infection is the most frequent trigger for both simple and complex febrile seizures."
      ]
    ],
    "shortestValidSolution": "Unilateral jerking + duration 18 min + Todd paralysis = complex febrile seizure (focal, >15 min, post-ictal paresis).",
    "necessaryInference": "Distinguish simple vs complex febrile seizures using the three core criteria: focality, duration >=15 min, or recurrence <24 hr.",
    "strongestDistractor": "Temperature exceeding 39.0 C at the time of the seizure",
    "distractorExclusion": "Fever magnitude does not classify complex seizures; duration >=15 min and focal semiology define complex febrile seizures.",
    "citation": "Graves RC, Oehler K, Tingle LE. Febrile Seizures: Risks, Evaluation, and Prognosis. Am Fam Physician. 2012;85(2):149-153. PMID: 22335215.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric neurology item assessing classification criteria of simple versus complex febrile seizures.",
      "distractorExclusionNotes": "Excluded temperature height and family history because focality and duration define complexity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0869",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Nervous System",
    "topic": "Pediatric Bacterial Meningitis Age-Based Empiric Antibiotic Regimens",
    "provisionalDifficulty": 4,
    "stem": "A 3-week-old female infant is brought to the pediatric emergency department for poor feeding, lethargy, and irritability over the past 12 hours. On examination, she is difficult to console, has a high-pitched cry, and exhibits hypothermia with a rectal temperature of 35.6 C (96.1 F). Heart rate is 178/min, blood pressure is 66/38 mm Hg, and capillary refill is 4 seconds. Physical examination reveals a bulging, tense anterior fontanelle, mottled extremities, and marked generalized hypotonia. Blood cultures and catheterized urinalysis are obtained, and lumbar puncture is performed without delay. Cerebrospinal fluid (CSF) analysis reveals WBC 1,450/mm3 (88% neutrophils), protein 280 mg/dL, and glucose 18 mg/dL (serum glucose 85 mg/dL). Which of the following is the most appropriate empiric antimicrobial regimen?",
    "choices": [
      [
        "Intravenous ampicillin plus cefotaxime (or gentamicin)",
        "Bacterial meningitis in neonates (infants <= 28 days of age) is primarily caused by Streptococcus agalactiae (Group B Streptococcus, ~50-60%), Escherichia coli and other Gram-negative enteric bacilli (~30%), and Listeria monocytogenes (~5-10%). Because cephalosporins lack activity against Listeria monocytogenes and enterococci, ampicillin must ALWAYS be included in neonatal empiric regimens. The second agent is an extended-spectrum cephalosporin like cefotaxime (which achieves excellent CSF penetration and lacks the biliary sludging and bilirubin-displacing effects of ceftriaxone in neonates) or an aminoglycoside like gentamicin. Ceftriaxone is strictly avoided in neonates < 28 days due to risk of kernicterus."
      ],
      [
        "Intravenous ceftriaxone plus vancomycin alone",
        "Ceftriaxone displaces bilirubin from albumin, increasing kernicterus risk in neonates, and this regimen lacks coverage against Listeria monocytogenes."
      ],
      [
        "Intravenous vancomycin plus aztreonam alone",
        "Aztreonam lacks activity against Gram-positive organisms and Listeria, and vancomycin does not cover Listeria monocytogenes."
      ],
      [
        "Oral amoxicillin-clavulanate combined with intramuscular ceftriaxone",
        "Oral therapy is completely inadequate for neonatal bacterial meningitis, which requires maximum parenteral bactericidal CSF concentrations."
      ],
      [
        "Intravenous acyclovir monotherapy pending viral PCR results",
        "While neonatal HSV is considered in vesicular lesions or temporal seizures, bacterial meningitis with neutrophil-predominant pleocytosis mandates immediate bacterial coverage."
      ]
    ],
    "shortestValidSolution": "3 wk infant + bulging fontanelle + cloudy CSF (neutrophils, low glucose) = neonatal meningitis -> IV ampicillin + cefotaxime.",
    "necessaryInference": "Select ampicillin (for Listeria) plus cefotaxime (avoiding ceftriaxone due to kernicterus) for neonatal bacterial meningitis.",
    "strongestDistractor": "Intravenous ceftriaxone plus vancomycin alone",
    "distractorExclusion": "Ceftriaxone causes kernicterus in neonates and lacks Listeria activity; ampicillin plus cefotaxime is mandatory under 28 days.",
    "citation": "Kim KS. Acute Bacterial Meningitis in Infants and Children. Lancet Infect Dis. 2010;10(1):32-42. PMID: 20129147.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK neonatal infectious disease item on age-specific empiric coverage for neonatal bacterial meningitis.",
      "distractorExclusionNotes": "Excluded ceftriaxone due to bilirubin displacement/kernicterus and lack of Listeria coverage; ampicillin is mandatory.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0870",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Renal",
    "topic": "IgA Vasculitis Henoch-Schonlein Purpura Clinical Tetrad and Supportive Care",
    "provisionalDifficulty": 4,
    "stem": "A 6-year-old boy is brought to the clinic with a 3-day history of a rash on his lower extremities, abdominal pain, and refusal to walk. Ten days ago, he recovered from an upper respiratory tract infection. On physical examination, non-blanching, raised, erythematous-to-violaceous macules and plaques ('palpable purpura') are distributed symmetrically over the buttocks, posterior thighs, and lower legs, sparing the trunk and face. Both ankles and knees are swollen and tender to passive motion, with periarticular swelling but no erythema. Abdominal examination reveals diffuse mild tenderness without rebound or guarding. Stool guaiac is positive. Complete blood count shows hemoglobin 12.8 g/dL, WBC 10,400/mm3, and platelet count 340,000/mm3 (normal: 150,000-450,000/mm3). Urinalysis shows 2+ proteinuria and 15-20 RBCs per high-power field with no red cell casts. Which of the following is the primary management strategy for this patient?",
    "choices": [
      [
        "Supportive care with adequate hydration, analgesia, and serial monitoring of renal function",
        "IgA vasculitis (Henoch-Sch\u00f6nlein purpura, HSP) is the most common systemic small-vessel vasculitis in children, caused by IgA-dominant immune complex deposition in small vessels. The classic clinical tetrad includes: (1) palpable purpura on dependent areas (buttocks, lower legs) WITHOUT thrombocytopenia or coagulopathy, (2) arthralgias/arthritis (especially knees and ankles), (3) colicky abdominal pain (from submucosal bowel edema/hemorrhage, with risk of ileoileal intussusception), and (4) renal disease (glomerulonephritis with hematuria/proteinuria). In uncomplicated HSP, the disease is self-limited and the primary management is supportive care: oral hydration, acetaminophen or NSAIDs for joint pain, and outpatient monitoring of blood pressure and urinalysis for up to 6 months."
      ],
      [
        "Emergent plasma exchange (plasmapheresis) combined with intravenous rituximab",
        "Plasmapheresis and rituximab are aggressive therapies reserved for catastrophic rapidly progressive ANCA vasculitis or anti-GBM disease, not routine pediatric HSP."
      ],
      [
        "Immediate intravenous immunoglobulin (IVIG) and high-dose oral aspirin",
        "IVIG and aspirin treat Kawasaki disease (a medium-vessel vasculitis with coronary risk), not small-vessel IgA vasculitis."
      ],
      [
        "Daily intravenous pulse methylprednisolone for four weeks to treat palpable purpura",
        "Routine systemic corticosteroids do not alter long-term renal outcomes or prevent disease progression in mild HSP and are reserved for severe abdominal pain or crescentic nephritis."
      ],
      [
        "Platelet transfusion to achieve a target platelet count above 100,000/mm3",
        "Platelet count in HSP is normal or elevated (reactive thrombocytosis); platelet transfusion is completely inappropriate and unnecessary."
      ]
    ],
    "shortestValidSolution": "Purpura on buttocks/legs + normal platelets + arthralgia + hematuria = IgA vasculitis -> supportive care and renal monitoring.",
    "necessaryInference": "Recognize IgA vasculitis with normal platelet count and manage with supportive care and serial urinalysis.",
    "strongestDistractor": "Immediate intravenous immunoglobulin (IVIG) and high-dose oral aspirin",
    "distractorExclusion": "IVIG plus aspirin treats Kawasaki disease; HSP is an IgA small-vessel vasculitis managed supportively.",
    "citation": "Shinar Y et al. ISSAID/EMQN Best Practice Guidelines for the Genetic Diagnosis of Monogenic Autoinflammatory Diseases in the Next-Generation Sequencing Era. Clin Chem. PMID: 32176780.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric rheumatology/nephrology item on IgA vasculitis (HSP) clinical features and supportive management.",
      "distractorExclusionNotes": "Excluded plasmapheresis, steroids, and IVIG because uncomplicated pediatric IgA vasculitis is self-limited.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0871",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Renal",
    "topic": "Hemolytic Uremic Syndrome Triad and Avoidance of Antibiotic Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 4-year-old girl is brought to the emergency department for severe pallor, extreme fatigue, and decreased urination. Five days ago, she developed crampy abdominal pain, low-grade fever, and copious watery diarrhea that progressed to grossly bloody stools after consuming an undercooked hamburger at a county fair. Her diarrhea improved over the last 24 hours, but her parents noticed she became remarkably pale, irritable, and has produced only one wet diaper in the past 18 hours. Examination reveals a pale, puffy child with periorbital edema and scattered petechiae over her shins. Blood pressure is 134/86 mm Hg, and heart rate is 128/min. Laboratory evaluation reveals: hemoglobin 6.2 g/dL, platelet count 24,000/mm3, serum creatinine 2.8 mg/dL (baseline 0.4 mg/dL), BUN 48 mg/dL, total bilirubin 3.2 mg/dL with indirect bilirubin 2.6 mg/dL, and serum LDH 1,840 U/L. Peripheral blood smear demonstrates marked fragmented red blood cells (schistocytes, helmet cells) and burr cells. Which of the following is the most appropriate management approach?",
    "choices": [
      [
        "Supportive management with volume expansion, avoidance of antibiotics, and dialysis as needed",
        "This patient exhibits the classic triad of post-diarrheal Hemolytic Uremic Syndrome (HUS): (1) microangiopathic hemolytic anemia (MAHA) with abundant schistocytes and indirect hyperbilirubinemia/high LDH, (2) severe thrombocytopenia, and (3) acute kidney injury (oliguria, elevated creatinine and BUN). Typically caused by Shiga toxin-producing Escherichia coli (STEC, serotype O157:H7), the toxin binds to Gb3 receptors on renal glomerular endothelial cells, triggering endothelial damage, platelet microthrombi, and mechanical shearing of erythrocytes. Antibiotic therapy (and antimotility agents) must be STRICTLY AVOIDED because bacterial lysis causes massive upregulation and release of Shiga toxin, dramatically increasing the risk and severity of HUS. Management is strictly supportive: careful fluid and electrolyte management, packed RBC transfusions for symptomatic anemia, and renal replacement therapy (dialysis) if indicated for refractory hyperkalemia, volume overload, or uremia."
      ],
      [
        "Immediate initiation of intravenous ciprofloxacin and metronidazole",
        "Antibiotic administration in STEC colitis triggers explosive Shiga toxin release from dying bacteria, significantly worsening glomerular microthrombosis and renal destruction."
      ],
      [
        "Routine prophylactic platelet transfusions to maintain platelets > 50,000/mm3",
        "Platelet transfusions in HUS fuel the ongoing microvascular thrombosis ('adding fuel to the fire') and are contraindicated unless life-threatening hemorrhage is present."
      ],
      [
        "High-dose intravenous methylprednisolone pulse therapy for immune-mediated destruction",
        "HUS is mediated by toxin-induced endothelial microangiopathy, not autoimmune autoantibodies; corticosteroids have no therapeutic benefit."
      ],
      [
        "Emergent plasma exchange combined with eculizumab infusion",
        "Eculizumab and plasma exchange are standard for atypical HUS (complement regulatory factor mutations), not typical STEC-associated post-diarrheal HUS."
      ]
    ],
    "shortestValidSolution": "Bloody diarrhea + anemia + schistocytes + low platelets + AKI = HUS -> supportive care (NO antibiotics, NO routine platelets).",
    "necessaryInference": "Identify STEC-associated HUS, recognize that antibiotics exacerbate toxin release, and select supportive management.",
    "strongestDistractor": "Immediate initiation of intravenous ciprofloxacin and metronidazole",
    "distractorExclusion": "Antibiotics increase Shiga toxin expression and release, worsening endothelial damage and mortality in HUS.",
    "citation": "Tarr PI, Gordon CA, Chandler WL. Shiga-Toxin-Producing Escherichia Coli and the Hemolytic-Uremic Syndrome. Lancet. 2005;365(9464):1073-1086. PMID: 15781103.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric nephrology/infectious disease item on HUS triad and contraindication to antibiotic therapy.",
      "distractorExclusionNotes": "Excluded antibiotics and platelet transfusions because antibiotics increase toxin load and platelets fuel microvascular occlusion.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0872",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Musculoskeletal",
    "topic": "Septic Arthritis of Hip Kocher Criteria and Urgent Arthrocentesis",
    "provisionalDifficulty": 4,
    "stem": "A 4-year-old boy is carried into the emergency department by his parents because of acute right hip pain and complete refusal to bear weight since this morning. He had an uneventful recovery from mild otitis media 1 week ago. On physical examination, he appears irritable and lies with the right hip held in flexion, abduction, and external rotation ('position of maximum capsular volume'). Any attempt at passive internal rotation or extension of the right hip elicits severe pain and screaming. Temperature is 38.8 C (101.8 F), heart rate is 124/min, and blood pressure is 102/64 mm Hg. Laboratory studies show WBC 14,800/mm3 (74% neutrophils), erythrocyte sedimentation rate (ESR) 52 mm/hr, and C-reactive protein 42 mg/L. Plain radiographs of the pelvis and right hip demonstrate soft tissue swelling and widening of the medial joint space without bone erosion or fracture. Bedside ultrasound confirms a moderate hip joint effusion. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Urgent ultrasound-guided right hip arthrocentesis and synovial fluid analysis",
        "Septic arthritis of the hip is an orthopedic emergency in children, most commonly caused by Staphylococcus aureus or Streptococcus pyogenes. Delayed diagnosis causes rapid cartilaginous destruction and avascular necrosis of the femoral head from elevated intracapsular pressure. The Kocher criteria predict the probability of septic arthritis versus transient synovitis: (1) fever > 38.5 C, (2) refusal to bear weight (non-weight bearing), (3) ESR > 40 mm/hr, and (4) WBC > 12,000/mm3. Meeting all 4 criteria carries a > 90% probability of septic arthritis. When a joint effusion is demonstrated by ultrasound in a high-risk patient, urgent arthrocentesis is mandatory to obtain synovial fluid for cell count, Gram stain, and culture, and to decompress the joint, followed by operative arthrotomy/washout and IV antibiotics."
      ],
      [
        "Oral ibuprofen and outpatient follow-up in 48 hours for transient synovitis",
        "Transient synovitis occurs in afebrile or low-grade febrile children who are often weight-bearing; this child meets all 4 Kocher criteria, making observation negligent."
      ],
      [
        "Magnetic resonance imaging of the pelvis with contrast under general anesthesia",
        "MRI introduces critical procedural and anesthesia delays; needle aspiration provides immediate diagnostic and therapeutic joint decompression."
      ],
      [
        "Empiric intravenous ceftriaxone without prior joint fluid aspiration",
        "Administering antibiotics prior to joint aspiration sterilizes synovial fluid, preventing organism identification and susceptibility testing."
      ],
      [
        "Serial examination and repeat pelvic radiographs in one week",
        "Delaying treatment of septic arthritis by days leads to irreversible chondrolysis, growth plate damage, and lifelong hip deformity."
      ]
    ],
    "shortestValidSolution": "Fever + non-weight bearing + ESR >40 + WBC >12k + hip effusion = 4/4 Kocher criteria -> urgent arthrocentesis.",
    "necessaryInference": "Apply Kocher criteria (>90% probability of septic arthritis) to mandate urgent joint arthrocentesis over observation for transient synovitis.",
    "strongestDistractor": "Oral ibuprofen and outpatient follow-up in 48 hours for transient synovitis",
    "distractorExclusion": "Transient synovitis is excluded by meeting 4/4 Kocher criteria with high inflammatory markers; urgent aspiration is required.",
    "citation": "Kocher MS, Zurakowski D, Kasser JR. Differentiating Between Septic Arthritis and Transient Synovitis of the Hip in Children: An Evidence-Based Clinical Prediction Algorithm. J Bone Joint Surg Am. 1999;81(12):1662-1670. PMID: 10608376.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric orthopedics emergency item on applying Kocher criteria to diagnose septic arthritis.",
      "distractorExclusionNotes": "Excluded transient synovitis because all 4 Kocher criteria are positive, mandating urgent joint aspiration.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0873",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Musculoskeletal",
    "topic": "Slipped Capital Femoral Epiphysis Diagnosis and In Situ Screw Fixation",
    "provisionalDifficulty": 4,
    "stem": "A 13-year-old boy presents to the clinic with a 4-week history of dull, aching pain in his right knee and anterior thigh that worsens with physical activity. He denies any direct trauma. He has an antalgic gait with the right foot turned outward. Physical examination reveals an obese adolescent (body mass index 97th percentile) in no acute distress. Examination of the right knee reveals full range of motion without effusion, erythema, warmth, or ligamentous laxity. Examination of the right hip demonstrates restricted internal rotation, flexion, and abduction; passively flexing the right hip results in obligatory external rotation. Anteroposterior and frog-leg lateral radiographs of the pelvis demonstrate posterior and inferior displacement of the right proximal femoral epiphysis relative to the femoral neck ('ice cream slipping off the cone'), with Klein line failing to intersect the lateral epiphysis. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Strict non-weight bearing with crutches and urgent percutaneous in situ screw fixation",
        "Slipped capital femoral epiphysis (SCFE) is a Salter-Harris type I fracture of the proximal femoral physis, most commonly occurring in overweight or obese adolescents (11-14 years of age) during growth spurts. Chronic mechanical shear stresses displace the femoral neck anteriorly and superiorly relative to the epiphysis (which remains in the acetabulum). Patients frequently present with referred pain to the ipsilateral thigh or knee (via the obturator and femoral nerves), leading to delayed diagnosis. Physical exam pathognomonically reveals obligatory external rotation during hip flexion. Plain radiography confirms displacement (loss of Klein line intersection). Management mandates immediate, strict non-weight-bearing status to prevent further slippage or vascular disruption, followed by urgent percutaneous in situ single-cannulated screw fixation to stabilize the physis."
      ],
      [
        "Immediate closed manual reduction of the hip under conscious sedation",
        "Forceful closed reduction of a chronic or stable SCFE tears remaining retinacular vessels, dramatically increasing the risk of osteonecrosis (avascular necrosis) of the femoral head."
      ],
      [
        "Physical therapy for quadriceps strengthening and patellofemoral tracking",
        "Attributing symptoms to knee pathology and prescribing weight-bearing exercise allows further epiphyseal slip and chondrolysis."
      ],
      [
        "Oral high-dose NSAIDs and reassurance with repeat plain films in three months",
        "Delayed stabilization permits progressive displacement, resulting in permanent acetabular impingement and early severe osteoarthritis."
      ],
      [
        "Total hip arthroplasty with an uncemented ceramic-on-polyethylene bearing",
        "Primary total hip replacement is unnecessary and excessively destructive for adolescent SCFE, which is preserved with simple in situ screw fixation."
      ]
    ],
    "shortestValidSolution": "Obese adolescent + referred knee pain + obligatory external rotation + displaced epiphysis = SCFE -> non-weight bearing + in situ screw fixation.",
    "necessaryInference": "Recognize SCFE presenting with referred knee pain and avoid manual reduction, opting for urgent in situ single screw fixation.",
    "strongestDistractor": "Immediate closed manual reduction of the hip under conscious sedation",
    "distractorExclusion": "Closed reduction is contraindicated because it disrupts retinacular blood supply and causes avascular necrosis of the femoral head.",
    "citation": "Peck DM et al. Slipped Capital Femoral Epiphysis: Diagnosis and Management. Am Fam Physician. PMID: 28671425.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric orthopedics item on SCFE presentation, referred knee pain, and in situ screw fixation.",
      "distractorExclusionNotes": "Excluded closed reduction due to high risk of avascular necrosis; strict non-weight bearing and in situ pinning are required.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0874",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Musculoskeletal",
    "topic": "Developmental Dysplasia of Hip Ultrasound Screening and Pavlik Harness",
    "provisionalDifficulty": 4,
    "stem": "A 6-week-old female infant born at 39 weeks of gestation via scheduled cesarean delivery for persistent frank breech presentation is brought for her routine well-child visit. She is feeding well and meeting developmental milestones. On physical examination, there is asymmetry of the gluteal and thigh skin folds. Galeazzi sign shows apparent leg length inequality with the left knee lower than the right when both hips and knees are flexed to 90 degrees. Examination of the left hip reveals a palpable 'clunk' when the hip is gently abducted while lifting the greater trochanter anteriorly (positive Ortolani maneuver). The right hip examination is completely normal. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Bilateral dynamic hip ultrasonography and application of a Pavlik harness",
        "Developmental dysplasia of the hip (DDH) involves abnormal development of the acetabulum and femoral head, leading to subluxation or dislocation. Major risk factors include female sex, breech presentation, and family history. Physical exam findings include asymmetric skin folds, leg length discrepancy (Galeazzi sign), Barlow sign (dislocation on adduction/posterior pressure), and Ortolani sign (palpable clunk of reduction upon abduction). In infants younger than 4 to 6 months (before femoral head ossification), ultrasound is the diagnostic imaging modality of choice. For an unstable or dislocated hip identified early (<6 months), treatment is placement of a dynamic Pavlik harness, which maintains the hips in flexion and abduction, centering the femoral head to stimulate normal acetabular development."
      ],
      [
        "Plain anteroposterior radiography of the pelvis and bilateral hips",
        "Plain radiographs are unreliable in infants <4-6 months because the neonatal femoral head and acetabulum consist primarily of non-radiopaque unossified cartilage."
      ],
      [
        "Immediate open surgical reduction and femoral varus derotation osteotomy",
        "Open surgery is reserved for late-presenting DDH (after walking age) or infants who fail closed reduction and dynamic splinting."
      ],
      [
        "Reassurance and repeat clinical hip examination at the six-month well-child visit",
        "Delaying treatment until 6 months results in permanent acetabular dysplasia, muscle contractures, and necessity for surgical intervention."
      ],
      [
        "Application of triple diapers to achieve continuous hip abduction",
        "Triple diapering does not maintain reliable abduction and has been proven ineffective in randomized studies; dynamic Pavlik splinting is required."
      ]
    ],
    "shortestValidSolution": "6 wk infant + breech birth + positive Ortolani clunk = DDH -> bilateral hip ultrasound and Pavlik harness.",
    "necessaryInference": "Select hip ultrasound (for age <6 months) and dynamic Pavlik harness splinting for developmental dysplasia of the hip.",
    "strongestDistractor": "Plain anteroposterior radiography of the pelvis and bilateral hips",
    "distractorExclusion": "Plain radiographs are inaccurate in infants <4-6 months due to unossified femoral head cartilage; ultrasound is required.",
    "citation": "Schmidt M et al. Hypomorphic biallelic LIFR variants define a multisystem disorder with survival beyond infancy and hyperinflammatory vulnerability. Front Immunol. PMID: 42973632.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric orthopedics item on screening, diagnosis, and non-operative Pavlik harness treatment of DDH.",
      "distractorExclusionNotes": "Excluded plain radiography due to unossified cartilage and watchful waiting due to risk of progressive dysplasia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0875",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "General Principles",
    "topic": "Non-Accidental Trauma Child Abuse Skeletal Survey and Mandatory Reporting",
    "provisionalDifficulty": 4,
    "stem": "A 4-month-old male infant is brought to the emergency department by his mother's boyfriend, who states the infant 'fell off the sofa onto a carpeted floor' 2 hours ago. On examination, the infant is fussy and intermittently somnolent. Vital signs are normal. Physical examination reveals multiple circular bruises on the chest wall and a 2-cm bruise on the right cheek. Funduscopic examination reveals extensive multilayered retinal hemorrhages extending to the periphery in both eyes. Plain radiography reveals acute, non-displaced fractures of the posterior 7th and 8th ribs on the right, as well as a healing fracture with callus formation of the posterior 9th rib on the left. A metaphyseal corner ('bucket-handle') fracture of the distal right femur is also identified. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Hospital admission, full skeletal survey, non-contrast head CT, and immediate report to CPS",
        "The presentation in this infant\u2014unexplained bruising in a non-cruising infant (<9 months), posterior rib fractures of differing ages (which result from violent thoracic squeezing), metaphyseal corner ('bucket-handle') fractures (from violent traction/twisting of extremities), and multilayered retinal hemorrhages\u2014is pathognomonic for non-accidental trauma (physical child abuse / abusive head trauma). A minor fall from a sofa cannot produce these high-energy patterned injuries. Immediate management priorities are ensuring the child's safety by admitting to the hospital, performing a complete skeletal survey, obtaining emergent non-contrast head CT to evaluate for subdural hemorrhage, and making an immediate mandatory report to Child Protective Services (CPS) and law enforcement."
      ],
      [
        "Discharge home into the care of the mother with outpatient orthopedic follow-up",
        "Discharging a child with clear evidence of physical abuse directly returns the infant to an environment with an extreme risk of lethal re-injury."
      ],
      [
        "Perform genetic testing for COL1A1/COL1A2 mutations before contacting authorities",
        "Osteogenesis imperfecta causes osteopenia, blue sclerae, and diaphyseal fractures, not posterior rib squeezing fractures, retinal hemorrhages, or subdural hematomas; CPS reporting must never be delayed."
      ],
      [
        "Prescribe oral acetaminophen and apply a circular fiberglass cast to the lower extremity",
        "Casting alone fails to ensure the infant's safety or investigate life-threatening occult intracranial or visceral injuries."
      ],
      [
        "Confront the caregiver aggressively in the examination room with police officers",
        "Caregivers should be treated non-judgmentally while clinical priorities and protective protocols are initiated; confrontation risks flight and disruption of clinical care."
      ]
    ],
    "shortestValidSolution": "Posterior rib fractures + bucket-handle fractures + retinal hemorrhages = child abuse -> admit, full skeletal survey, head CT, CPS report.",
    "necessaryInference": "Recognize specific pathognomonic fractures of child abuse and initiate mandatory hospital admission, full imaging survey, and CPS reporting.",
    "strongestDistractor": "Perform genetic testing for COL1A1/COL1A2 mutations before contacting authorities",
    "distractorExclusion": "Osteogenesis imperfecta does not explain posterior rib fractures with retinal hemorrhages; reporting abuse cannot be delayed for genetics.",
    "citation": "Christian CW. The Evaluation of Suspected Child Physical Abuse. Pediatrics. 2015;135(5):e1337-e1354. PMID: 25917988.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics ethics and child abuse item on specific fracture patterns and mandatory reporting protocols.",
      "distractorExclusionNotes": "Excluded osteogenesis imperfecta workup delay and discharge because protection of the child and CPS reporting are legally mandated.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
