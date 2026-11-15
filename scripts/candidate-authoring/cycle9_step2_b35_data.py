"""
Step 2 CK Batch 35 (0851-0862) Definitions - Pediatrics & Neonatology
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b35_part1 = [
  # 0851
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
  # 0852
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
  # 0853
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
  # 0854
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
    "citation": "Galea R, Said E. Infantile Hypertrophic Pyloric Stenosis: An Overview. Neonatal Netw. 2018;37(4):213-217. PMID: 30045802.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric surgery item on preoperative metabolic stabilization before pyloromyotomy.",
      "distractorExclusionNotes": "Excluded immediate surgery because metabolic alkalosis must be fully corrected prior to general anesthesia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0855
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
  # 0856
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
    "citation": "Applegate KE. Evidence-Based Diagnosis of Malrotation and Volvulus. Pediatr Radiol. 2009;39 Suppl 2:S161-S163. PMID: 19308381.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric emergency item on recognizing bilious vomiting from midgut volvulus requiring immediate Ladd procedure.",
      "distractorExclusionNotes": "Excluded air enema and conservative therapy because volvulus occludes the SMA and requires immediate operative untwisting.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0857
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
    "citation": "Langer JC. Hirschsprung Disease. Curr Opin Pediatr. 2013;25(3):368-374. PMID: 23652684.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric gastroenterology item on gold standard diagnosis of Hirschsprung disease.",
      "distractorExclusionNotes": "Excluded sweat test and genetic testing because histological rectal suction biopsy is the gold standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0858
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
  # 0859
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
    "citation": "Hedrick HL. Management of Congenital Diaphragmatic Hernia. Clin Perinatol. 2012;39(2):399-418. PMID: 22682387.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK neonatology delivery room emergency item on resuscitation of congenital diaphragmatic hernia.",
      "distractorExclusionNotes": "Excluded bag-valve-mask ventilation and chest tube because both cause catastrophic visceral distension or laceration.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0860
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
    "citation": "Pinheiro PFM, Simoes e Silva AC, Pereira RM. Current Knowledge on Esophageal Atresia. World J Gastrointest Surg. 2012;4(9):206-211. PMID: 23293734.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK neonatology item on preoperative protection and management of esophageal atresia with TEF.",
      "distractorExclusionNotes": "Excluded barium swallow and Trendelenburg position because both exacerbate severe pulmonary aspiration.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0861
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
  # 0862
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
  }
]
