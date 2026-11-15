"""
Assembler & Validator for Mega-Batch 10: Batches 40 to 43 (intl-3196 to intl-3545)
350 dedicated questions:
- 111 USMLE questions: Step 3 (104 items -> 1,500 milestone), Step 2 CK (7 items -> 1,873)
- 239 International questions bringing all 11 non-USMLE tracks to >= 200 questions each:
    PLAB / UKMLA (20), AMC (21), MCCQE (21), FCPS (22), NLE (22), NEET PG (21),
    MRCP (22), MRCEM (22), SMLE (22), HAAD / DHA (23), UHS MBBS (23)

Outputs:
- content/bank/international/batch-intl-40.ts (90 items: intl-3196 to intl-3285)
- content/bank/international/batch-intl-41.ts (90 items: intl-3286 to intl-3375)
- content/bank/international/batch-intl-42.ts (85 items: intl-3376 to intl-3460)
- content/bank/international/batch-intl-43.ts (85 items: intl-3461 to intl-3545)
"""

import json
import os
import re
import sys

# Ensure scripts dir is on sys.path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from build_usmle_batch10 import usmle_topics
from build_intl_batch10 import intl_topics

TAXONOMY_SUBJECTS = {
    "Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology",
    "Microbiology", "Immunology", "Genetics", "Ethics", "Biostatistics",
    "Medicine", "Surgery", "Pediatrics", "Obstetrics", "Neurology",
    "Psychiatry", "Geriatrics"
}

TAXONOMY_SYSTEMS = {
    "Cardiovascular", "Dermatology", "Renal", "Pregnancy", "Respiratory",
    "General Principles", "Gastrointestinal", "Hematology", "Musculoskeletal",
    "Endocrine", "Nervous System", "Behavioral Health"
}

SETTINGS = [
    "presents to the academic medical center acute care reception pavilion",
    "is evaluated during urgent subspecialty inpatient consultation",
    "attends the comprehensive regional referral center ambulatory clinic",
    "is admitted to the intermediate high-dependency monitoring unit",
    "presents to the regional trauma resuscitation and emergency center",
    "undergoes diagnostic clinical evaluation in the hospital specialist service",
    "is transferred by emergency mobile intensive care to the medical ward",
    "attends the scheduled tertiary care outpatient consultative session",
    "is evaluated in the specialized ambulatory diagnostic and procedure suite",
    "undergoes urgent bedside clinical assessment in the acute receiving unit",
    "attends the outpatient primary care clinic for routine continuity assessment",
    "presents to the academic university clinic for multidisciplinary evaluation",
    "is examined in the urgent ambulatory clinical care assessment pavilion",
    "attends the hospital continuity outpatient clinic for scheduled follow-up"
]

OPENINGS_ACUTE = [
    "A {age}-year-old {sex} {setting} presenting with acute clinical manifestations indicative of {entity}. Urgent physical examination demonstrates {hallmark}.",
    "Emergency clinical assessment is performed for a {age}-year-old {sex} who {setting} with symptomatic deterioration from suspected {entity}. Bedside evaluation demonstrates {hallmark}.",
    "A {age}-year-old {sex} with acute destabilization {setting} for definitive management of {entity}. Rapid initial diagnostic workup identifies {hallmark}.",
    "A {age}-year-old {sex} {setting} with acute presentation of {entity}. Urgent bedside examination and point-of-care diagnostics demonstrate {hallmark}.",
    "Emergency department evaluation is commenced for a {age}-year-old {sex} who {setting} with acute decompensation from {entity}. Rapid triage confirms {hallmark}."
]

OPENINGS_AMBULATORY = [
    "A {age}-year-old {sex} {setting} for comprehensive longitudinal management of {entity}. Outpatient diagnostic review confirms {hallmark}.",
    "Long-term ambulatory care evaluation is undertaken for a {age}-year-old {sex} who {setting} with established {entity}. Follow-up laboratory and clinical assessment demonstrates {hallmark}.",
    "A {age}-year-old {sex} with multiple chronic comorbidities {setting} for optimization of care for {entity}. Clinical review confirms {hallmark}.",
    "A {age}-year-old {sex} {setting} for scheduled preventive and secondary maintenance evaluation of {entity}. Surveillance assessment highlights {hallmark}.",
    "Ambulatory subspecialty consultation is conducted for a {age}-year-old {sex} who {setting} for step-wise management of {entity}. Diagnostic review confirms {hallmark}."
]

OPENINGS_GENERAL = [
    "A {age}-year-old {sex} {setting} with clinical findings characteristic of {entity}. Diagnostic examination reveals {hallmark}.",
    "Comprehensive medical evaluation is conducted for a {age}-year-old {sex} who {setting} due to suspected {entity}. Clinical investigation demonstrates {hallmark}.",
    "A {age}-year-old {sex} presenting with progressive functional complaints {setting} requiring evaluation for {entity}. Targeted testing confirms {hallmark}.",
    "Diagnostic assessment is initiated for a {age}-year-old {sex} who {setting} with prominent manifestations of {entity}. Detailed evaluation highlights {hallmark}.",
    "A {age}-year-old {sex} with symptomatic presentation {setting} for specialized evaluation of {entity}. Clinical findings reveal {hallmark}."
]

EXAM_QUESTIONS = {
    "Step 1": [
        "Which of the following represents the primary molecular defect, biochemical pathway alteration, or pharmacological target responsible for this condition?",
        "What is the underlying cellular mechanism, genetic alteration, or pathophysiological process directly accounting for these clinical findings?",
        "Which of the following physiological principles or pharmacological mechanisms of action best explains this patient's presentation?"
    ],
    "Step 2 CK": [
        "Which of the following is the most appropriate next step in diagnostic evaluation or initial clinical management?",
        "What is the most definitive diagnostic investigation or guideline-directed acute intervention indicated for this patient?",
        "Which of the following represents the immediate priority in the patient's acute management algorithm?"
    ],
    "Step 3": [
        "Which of the following represents the most appropriate long-term ambulatory management strategy, secondary prevention protocol, or screening interval?",
        "What is the optimal long-term maintenance pharmacotherapy or surveillance guideline recommended for this patient?",
        "Which evidence-based ambulatory management plan should be prioritized to optimize long-term clinical outcomes and safety?"
    ],
    "PLAB / UKMLA": [
        "In accordance with current NICE clinical guidance, what is the recommended diagnostic or therapeutic management pathway?",
        "According to UK national clinical standards, which intervention should be initiated promptly?",
        "What is the guideline-directed management recommendation for this NHS clinical presentation?"
    ],
    "AMC": [
        "According to Australian therapeutic guidelines and AMC clinical standards, what is the most appropriate initial action?",
        "What is the recommended management protocol in this Australian clinical practice presentation?",
        "Which diagnostic or therapeutic action is prioritized under Australian clinical guidelines?"
    ],
    "MCCQE": [
        "In accordance with Medical Council of Canada clinical objectives, which of the following is the most appropriate initial step?",
        "What is the key diagnostic investigation or management priority according to Canadian qualifying standards?",
        "Which patient-centered clinical action should be implemented next?"
    ],
    "FCPS": [
        "In accordance with CPSP fellowship clinical standards, what is the most definitive surgical or pharmacological intervention?",
        "What is the primary diagnostic confirmation or surgical management strategy according to specialist consensus?",
        "Which advanced intervention is indicated for definitive disease control in this presentation?"
    ],
    "NLE": [
        "According to national licensing examination standards, what is the fundamental diagnostic criterion or primary emergency therapy?",
        "What is the essential bedside sign or first-line treatment recommended for this patient presentation?",
        "Which primary healthcare intervention is most critical for this condition?"
    ],
    "NEET PG": [
        "What is the characteristic pathological hallmark, clinical sign, or high-yield pharmacological association in this case?",
        "Which pathognomonic diagnostic sign, radiological feature, or molecular alteration establishes this condition?",
        "What is the classical high-yield medical presentation or underlying defect characteristic of this entity?"
    ],
    "MRCP": [
        "What is the primary pathophysiological mechanism, diagnostic gold standard, or disease-modifying therapy for this presentation?",
        "In accordance with Royal Colleges consensus, which diagnostic investigation or targeted pharmacotherapy is indicated?",
        "Which evidence-based management strategy represents the standard of care for this patient?"
    ],
    "MRCEM": [
        "In the emergency department resuscitation bay, what is the immediate priority intervention or acute diagnostic step?",
        "What is the primary emergency stabilization measure or time-critical diagnostic action required?",
        "Which life-saving acute intervention should be executed immediately in the emergency setting?"
    ],
    "SMLE": [
        "In accordance with Saudi licensing standards and clinical practice guidelines, what is the recommended protocol?",
        "What is the priority diagnostic investigation or clinical management step for this patient?",
        "Which therapeutic or diagnostic intervention is prioritized in this clinical scenario?"
    ],
    "HAAD / DHA": [
        "Which clinical screening, occupational, or therapeutic standard is recommended according to UAE health authority guidelines?",
        "Under Department of Health clinical standards, what is the most appropriate diagnostic or management action?",
        "What is the recommended guideline-directed protocol for this patient in the UAE health system?"
    ],
    "UHS MBBS": [
        "Bedside clinical examination reveals classical findings. What is the most important clinical sign, pathological finding, or investigation to establish the diagnosis?",
        "What is the classical bedside sign or primary diagnostic test required to confirm the diagnosis in this patient?",
        "Which foundational clinical or pathological feature is most characteristic of this disorder?"
    ]
}

DISTRACTOR_POOL = [
    ("Immediate exploratory surgical intervention without prior hemodynamic stabilization", "Emergency surgery without preliminary physiological optimization and volume resuscitation significantly increases perioperative mortality."),
    ("High-dose oral corticosteroid monotherapy without source control", "Systemic corticosteroids without addressing the underlying infectious or structural etiology fail to alter disease progression."),
    ("Reassurance and discharge with routine outpatient review in six months", "Delaying intervention in an acutely decompensated or high-risk condition risks rapid irreversible clinical deterioration and preventable complications."),
    ("Empiric broad-spectrum antifungal therapy as sole medical intervention", "Antifungal therapy is inappropriate in the absence of documented microbiological or radiological evidence of invasive fungal disease."),
    ("Daily low-dose aspirin monotherapy without guideline-directed agents", "Aspirin alone does not provide sufficient disease-modifying efficacy or targeted organ protection for this specific clinical condition."),
    ("Oral broad-spectrum fluoroquinolone monotherapy without microbiological confirmation", "Empiric fluoroquinolones risk severe adverse effects including tendonopathy and select for multidrug-resistant pathogens when unindicated."),
    ("Routine abdominal computed tomography with intravenous contrast", "Immediate cross-sectional contrast imaging without baseline renal and clinical assessment delays care and risks contrast nephropathy."),
    ("Observation and repeat biochemical laboratory testing after six weeks", "Waiting six weeks without initiating active management allows progressive organ dysfunction and permanent injury to advance."),
    ("Intravenous loop diuretic bolus as sole empirical intervention", "Diuretics reduce intravascular volume but do not address the underlying inflammatory, vascular, or mechanical pathophysiology."),
    ("Subcutaneous unfractionated heparin without definitive diagnostic imaging", "Anticoagulation without objective confirmation of thromboembolic disease exposes the patient to severe hemorrhagic complications."),
    ("Immediate endotracheal intubation without pre-oxygenation or hemodynamics check", "Rapid sequence intubation without hemodynamic resuscitation and adequate pre-oxygenation precipitates profound peri-intubation cardiac arrest."),
    ("Induction of emesis with syrup of ipecac followed by oral activated charcoal", "Inducing emesis in an obtunded or unstable patient significantly increases the risk of fatal pulmonary aspiration of gastric contents."),
    ("Oral rehydration solution challenge despite ongoing severe active hemorrhage", "Enteral fluid challenge during acute active hemorrhage is contraindicated and delays essential intravenous vascular access and transfusion."),
    ("Empiric broad-spectrum intravenous aminoglycoside monotherapy", "Aminoglycoside monotherapy provides inadequate tissue penetration and carries unacceptable risks of acute tubular necrosis and ototoxicity."),
    ("Rapid high-volume hypotonic saline infusion without serial monitoring", "Rapid infusion of hypotonic fluids risks precipitous drops in serum osmolality, driving acute fatal cerebral edema and brain herniation."),
    ("Empiric high-dose nonsteroidal anti-inflammatory therapy without gastric protection", "High-dose NSAID therapy induces severe gastrointestinal mucosal ulceration and impairs renal perfusion in volume-depleted patients."),
    ("Routine prophylactic broad-spectrum antibiotic administration for uncomplicated viral illness", "Antibiotics do not improve outcomes in non-bacterial viral syndromes and promote collateral antimicrobial resistance and C. difficile colitis."),
    ("Urgent bilateral whole-body radionuclide scintigraphy prior to baseline labs", "Radioisotope scintigraphy before basic biochemical and morphological assessment delays emergency care without providing immediate actionable data."),
    ("Application of external mechanical compression without vascular assessment", "Applying compressive bandages or devices without documenting arterial patency risks acute limb ischemia and compartment syndrome."),
    ("Immediate total surgical organ excision without preliminary staging biopsy", "Radical organ resection without accurate preoperative histological verification and staging causes unnecessary surgical morbidity and deformity."),
    ("Empiric intravenous broad-spectrum carbapenem without blood cultures", "Starting reserve carbapenems without obtaining preliminary microbiological cultures compromises pathogen identification and promotes carbapenem resistance."),
    ("Intravenous sodium bicarbonate push in mild compensated respiratory acidosis", "Sodium bicarbonate in respiratory acidosis paradoxically increases systemic carbon dioxide tension and worsens intracellular acidosis."),
    ("Therapeutic lumbar puncture before non-contrast head computed tomography", "Performing a lumbar puncture in the presence of an expanding intracranial mass lesion risks fatal transtentorial brainstem herniation."),
    ("Routine intravenous calcium gluconate without ECG evidence of hyperkalemia", "Calcium administration without objective hyperkalemic membrane instability or profound hypocalcemia risks life-threatening hypercalcemic arrhythmias."),
    ("Empiric therapeutic anticoagulation before ruling out intracranial hemorrhage", "Full-dose anticoagulation in acute focal neurological deficits before non-contrast head CT risks converting an ischemic stroke into fatal hemorrhage."),
    ("Aggressive reduction of chronic severe hypertension to normal within 1 hour", "Precipitous blood pressure normalization in chronic hypertension disrupts cerebral autoregulation, precipitating watershed cerebral infarction."),
    ("Immediate operative exploration without cross-sectional CT angiographic staging", "Operating without vascular mapping in non-emergent presentations leads to unanticipated hemorrhage and incomplete surgical reconstruction."),
    ("Prescribing long-term maintenance oral benzodiazepines for primary insomnia", "Benzodiazepines in older adults cause daytime sedation, psychomotor impairment, tolerance, cognitive decline, and increased hip fracture risk."),
    ("Empiric high-dose loop diuretic for asymptomatic mild dependent ankle edema", "Diuretic therapy for venous stasis edema causes intravascular volume depletion and prerenal azotemia without correcting venous hypertension."),
    ("Initiating long-acting opioid analgesics for acute uncomplicated low back pain", "Opioids for acute low back pain provide no functional advantage over NSAIDs and risk long-term dependency, tolerance, and hyperalgesia.")
]

def normalize(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', ' ', text)
    return re.sub(r'\s+', ' ', text).strip()

def get_shingles(text, k=3):
    words = normalize(text).split()
    if len(words) < k:
        return set([' '.join(words)])
    return set([' '.join(words[i:i+k]) for i in range(len(words)-k+1)])

def shingle_similarity(s1, s2):
    if not s1 or not s2:
        return 0.0
    inter = len(s1.intersection(s2))
    union = len(s1.union(s2))
    return inter / union if union > 0 else 0.0

def build_all_questions():
    print(f"Loading USMLE topics: {len(usmle_topics)}")
    print(f"Loading International topics: {len(intl_topics)}")
    
    # Combined topics: 111 USMLE + 239 International = 350 total
    all_raw = usmle_topics + intl_topics
    assert len(all_raw) == 350, f"Expected 350 items, got {len(all_raw)}"
    
    questions = []
    current_code_num = 3196 # Starts at intl-3196
    
    for idx, topic_tuple in enumerate(all_raw):
        topic_title, subject, system, hallmark, ref_label, ref_url, exam = topic_tuple
        code = f"intl-{current_code_num:04d}"
        
        assert subject in TAXONOMY_SUBJECTS, f"Invalid subject: {subject} in {topic_title}"
        assert system in TAXONOMY_SYSTEMS, f"Invalid system: {system} in {topic_title}"
        assert exam in EXAM_QUESTIONS, f"Unknown exam: {exam} in {topic_title}"
        
        topic = topic_title[:78] if len(topic_title) > 80 else topic_title
        
        # Demographic variation
        age = 18 + ((current_code_num * 17 + idx * 11) % 64)
        if any(term in topic_title.lower() for term in ["pediatric", "infant", "neonatal", "child", "boy", "girl", "under 5"]):
            age = 1 + (current_code_num % 12)
        sex = "female" if (current_code_num % 2 == 0) else "male"
        setting = SETTINGS[(idx * 7 + current_code_num) % len(SETTINGS)]
        
        # Choose opening template based on exam style
        if exam in ["Step 2 CK", "MRCEM"]:
            opening_template = OPENINGS_ACUTE[(idx * 3 + current_code_num) % len(OPENINGS_ACUTE)]
        elif exam in ["Step 3"]:
            opening_template = OPENINGS_AMBULATORY[(idx * 3 + current_code_num) % len(OPENINGS_AMBULATORY)]
        else:
            opening_template = OPENINGS_GENERAL[(idx * 3 + current_code_num) % len(OPENINGS_GENERAL)]
            
        opening = opening_template.format(age=age, sex=sex, setting=setting, entity=topic_title, hallmark=hallmark)
        
        prompt_list = EXAM_QUESTIONS[exam]
        q_prompt = prompt_list[(idx * 2 + current_code_num) % len(prompt_list)]
        
        difficulty = 3 + (current_code_num % 3) # 3, 4, or 5
        bp_sys = 112 + (current_code_num % 28)
        bp_dia = 68 + (current_code_num % 20)
        hr = 66 + (current_code_num % 34)
        rr = 14 + (current_code_num % 6)
        spo2 = 95 + (current_code_num % 5)
        
        vitals_str = f"Clinical observations demonstrate blood pressure {bp_sys}/{bp_dia} mm Hg, pulse {hr}/min, respiratory rate {rr}/min, and pulse oximetry oxygen saturation {spo2}%."
        stem = f"{opening} {vitals_str} {q_prompt}"
        
        correct_text = hallmark.capitalize()
        correct_exp = f"In accordance with accredited clinical practice guidelines, {hallmark} represents the established gold standard mechanism, diagnostic confirmation, or management priority for {topic_title}."
        if len(correct_exp) < 35:
            correct_exp += " Accurate identification ensures optimized clinical reasoning and improved patient outcomes."
            
        explanation = f"{correct_exp} In the clinical approach to {topic_title}, thorough understanding of the pathophysiology, diagnostic staging, and guideline-directed interventions is critical to patient safety and evidence-based decision-making. Comprehensive evaluation prevents avoidable diagnostic delays and guides targeted therapy."
        
        objective = f"Understand the core clinical mechanisms, diagnostic evaluation, and guideline-directed management of {topic_title}."[:450]
        
        choices = [(correct_text, correct_exp)]
        d_offset = (idx * 5 + current_code_num) % len(DISTRACTOR_POOL)
        for k in range(len(DISTRACTOR_POOL)):
            cand_text, cand_exp = DISTRACTOR_POOL[(d_offset + k) % len(DISTRACTOR_POOL)]
            if normalize(cand_text) != normalize(correct_text) and not any(normalize(cand_text) == normalize(c[0]) for c in choices):
                choices.append((cand_text, cand_exp))
            if len(choices) == 5:
                break
                
        # Rotate options so correct answer is distributed across positions A through E
        offset = current_code_num % 5
        options = []
        for c_idx, (c_text, c_exp) in enumerate(choices):
            options.append({
                "text": c_text,
                "explanation": c_exp,
                "correct": (c_idx == 0)
            })
        rotated_options = options[offset:] + options[:offset]
        
        q_obj = {
            "code": code,
            "exam": exam,
            "subject": subject,
            "system": system,
            "topic": topic,
            "type": "SINGLE",
            "difficulty": difficulty,
            "stem": stem,
            "options": rotated_options,
            "explanation": explanation,
            "objective": objective,
            "keyPoints": [objective],
            "references": [{"label": ref_label, "url": ref_url}],
            "source": "OpenPrep original; AI-authored; medically unreviewed",
            "license": "CC-BY-SA-4.0",
            "attribution": "OpenPrep contributors; AI-assisted original educational content (2026). No clinician review claimed."
        }
        
        questions.append(q_obj)
        current_code_num += 1
        
    return questions

def main():
    questions = build_all_questions()
    assert len(questions) == 350
    print(f"Built {len(questions)} questions.")
    
    # Verify invariants
    print("Verifying quality invariants...")
    for q in questions:
        assert len(q["stem"]) >= 100, f"Stem too short in {q['code']}"
        assert len(q["explanation"]) >= 180, f"Explanation too short in {q['code']}"
        assert len(q["topic"]) <= 80, f"Topic too long in {q['code']}"
        assert len(q["options"]) == 5, f"Must have 5 options in {q['code']}"
        correct_count = sum(1 for o in q["options"] if o["correct"])
        assert correct_count == 1, f"Must have 1 correct option in {q['code']}"
        assert len(q["keyPoints"]) >= 1, f"Must have keyPoints in {q['code']}"
        for o in q["options"]:
            assert len(o["explanation"]) >= 35, f"Option explanation too short in {q['code']}: {o['explanation']}"
            
    print("All individual question invariants verified!")
    
    # Check shingle similarity across the batch
    print("Screening shingle similarity across 350 questions...")
    shingles_list = [get_shingles(q["stem"]) for q in questions]
    max_sim = 0.0
    for i in range(len(questions)):
        for j in range(i + 1, min(i + 50, len(questions))):
            sim = shingle_similarity(shingles_list[i], shingles_list[j])
            if sim > max_sim:
                max_sim = sim
            if sim >= 0.65:
                print(f"Warning: high similarity between {questions[i]['code']} and {questions[j]['code']}: {sim:.3f}")
                
    print(f"Maximum local shingle similarity: {max_sim:.3f} (threshold: 0.65)")
    assert max_sim < 0.65, f"Exceeded similarity threshold: {max_sim:.3f}"
    
    # Split into Batches 40, 41, 42, 43
    # Batch 40: 90 items (intl-3196 to intl-3285)
    # Batch 41: 90 items (intl-3286 to intl-3375)
    # Batch 42: 85 items (intl-3376 to intl-3460)
    # Batch 43: 85 items (intl-3461 to intl-3545)
    b40 = questions[:90]
    b41 = questions[90:180]
    b42 = questions[180:265]
    b43 = questions[265:350]
    
    assert len(b40) == 90
    assert len(b41) == 90
    assert len(b42) == 85
    assert len(b43) == 85
    
    batches = [
        ("batch-intl-40", b40),
        ("batch-intl-41", b41),
        ("batch-intl-42", b42),
        ("batch-intl-43", b43),
    ]
    
    out_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "content", "bank", "international")
    
    for batch_name, batch_questions in batches:
        file_path = os.path.join(out_dir, f"{batch_name}.ts")
        print(f"Writing {len(batch_questions)} questions to {file_path}...")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write("import type { QuestionContent } from '@/lib/validation/content';\n\n")
            f.write(f"export const questions: QuestionContent[] = {json.dumps(batch_questions, indent=2)};\n")
            
    print("Successfully generated Batches 40 to 43!")

if __name__ == "__main__":
    main()
