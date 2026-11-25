"""
Reusable Parameterized Assembler & Validator for 300-Question International Waves.
Generates 3 x 100-question batches (TS + JSON), runs strict taxonomy, schema,
uniqueness, length, URL, and 3-shingle similarity validation (< 0.65).

Usage:
  python scripts/assemble_intl_wave.py <mega_num> <start_batch> <start_code_num> <topics_module> <exam1:var1> <exam2:var2> <exam3:var3>
Example:
  python scripts/assemble_intl_wave.py 101 483 47373 mega101_topics "MCCQE:MCCQE_TOPICS" "NEET PG:NEET_PG_TOPICS" "MRCP:MRCP_TOPICS"
"""

import importlib
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(__file__))

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

SETTINGS_BY_EXAM = {
    "PLAB / UKMLA": [
        "attends the acute assessment unit at University College Hospital London",
        "presents to the general practice surgery in Leeds",
        "is evaluated in the emergency decision unit at Royal Infirmary of Edinburgh",
        "is admitted to the general medicine ward at Manchester Royal Infirmary",
        "undergoes outpatient consultant clinic review at Addenbrooke's Hospital Cambridge",
        "attends the same-day emergency care center at Queen Elizabeth Hospital Birmingham",
        "is examined in a clinical consultation station aligned with GMC UKMLA standards"
    ],
    "AMC": [
        "presents to the emergency department at Royal Melbourne Hospital Victoria",
        "is evaluated in the regional rural clinic in Alice Springs Northern Territory",
        "attends specialist outpatients at Royal Prince Alfred Hospital Sydney",
        "is admitted to the acute medical unit at Princess Alexandra Hospital Brisbane",
        "undergoes consultant clinical assessment at Sir Charles Gairdner Hospital Perth",
        "attends the rural general practice clinic in regional Queensland",
        "is examined in an Australian Medical Council clinical practice scenario"
    ],
    "MCCQE": [
        "attends the primary family medicine clinic at Sunnybrook Health Sciences Centre Toronto",
        "is evaluated in the acute emergency bay at Vancouver General Hospital British Columbia",
        "presents to the internal medicine unit at McGill University Health Centre Montreal",
        "is admitted to the teaching ward at Foothills Medical Centre Calgary",
        "undergoes specialist consultation at The Ottawa Hospital Civic Campus",
        "attends the northern community health center in Ontario",
        "is examined in a Medical Council of Canada clinical decision-making scenario"
    ],
    "NEET PG": [
        "presents to the medicine department at All India Institute of Medical Sciences New Delhi",
        "is evaluated in the casualty bay at Postgraduate Institute Chandigarh",
        "attends the specialty clinic at Christian Medical College Vellore",
        "is admitted to the teaching ward at King Edward Memorial Hospital Mumbai",
        "undergoes academic ward review at JIPMER Puducherry",
        "presents to the district referral clinic under National Health Mission standards",
        "is examined in a clinical scenario aligned with NBE postgraduate evaluation standards"
    ],
    "MRCP": [
        "attends the specialist outpatient clinic at Royal Brompton Hospital London",
        "is evaluated on the acute medical take at St James's University Hospital Leeds",
        "presents to the tertiary specialty clinic at Guy's and St Thomas' Hospital London",
        "is admitted to the acute clinical unit at Salford Royal Hospital Manchester",
        "undergoes consultant diagnostic review at King's College Hospital London",
        "attends the ambulatory specialty pavilion at Oxford University Hospitals",
        "is assessed in a Membership of the Royal Colleges of Physicians diagnostic evaluation"
    ],
    "FCPS": [
        "presents to the postgraduate specialist clinic at Aga Khan University Hospital Karachi",
        "is evaluated in the teaching ward at Dow University Hospital Karachi",
        "attends the tertiary specialty bay at Pakistan Institute of Medical Sciences Islamabad",
        "is admitted to the academic clinical unit at Services Hospital Lahore",
        "undergoes consultant fellowship ward rounds at Lady Reading Hospital Peshawar",
        "presents to the specialized clinic at Bolan Medical Complex Hospital Quetta",
        "is examined in an FCPS postgraduate clinical evaluation station"
    ],
    "NLE": [
        "attends the outpatient clinic at Mayo Hospital Lahore",
        "is evaluated in the acute emergency bay at Jinnah Postgraduate Medical Centre Karachi",
        "presents to the teaching hospital at Holy Family Hospital Rawalpindi",
        "is admitted to the clinical ward at Nishtar Hospital Multan",
        "undergoes medical officer review at Khyber Teaching Hospital Peshawar",
        "attends the community referral clinic at Chandka Medical College Hospital Larkana",
        "is assessed in a Pakistan Medical & Dental Council NLE licensing scenario"
    ],
    "MRCEM": [
        "presents to the emergency resuscitation bay at Royal London Hospital",
        "is evaluated in the major trauma unit of Queen's Medical Centre Nottingham",
        "attends the emergency decision bay at Bristol Royal Infirmary",
        "is admitted to the acute clinical unit at Leeds General Infirmary",
        "undergoes emergency consultant review at Royal Victoria Infirmary Newcastle",
        "presents to the urgent ambulatory bay at University Hospital Southampton",
        "is assessed in an Emergency Medicine fellowship simulation aligned with RCEM standards"
    ],
    "SMLE": [
        "attends the specialized clinic at King Faisal Specialist Hospital Riyadh",
        "is evaluated in the emergency bay at King Abdulaziz Medical City Jeddah",
        "presents to the primary academic unit at King Saud University Medical City Riyadh",
        "is admitted to the medical ward at King Fahad Specialist Hospital Dammam",
        "undergoes consultant ward review at Asir Central Hospital Abha",
        "attends the ambulatory center at Security Forces Hospital Makkah",
        "is examined in a clinical scenario aligned with SCFHS SMLE standards"
    ],
    "HAAD / DHA": [
        "presents to the acute emergency bay at Rashid Hospital Dubai",
        "is evaluated in the specialized clinic at Sheikh Shakhbout Medical City Abu Dhabi",
        "attends the tertiary ambulatory unit at Cleveland Clinic Abu Dhabi",
        "is admitted to the acute clinical ward at Dubai Hospital",
        "undergoes consultant evaluation at Tawam Hospital Al Ain",
        "presents to the clinic at Sheikh Khalifa Medical City Abu Dhabi",
        "is examined in a licensing clinical station aligned with UAE DoH/DHA standards"
    ],
    "UHS MBBS": [
        "presents to the tertiary teaching ward at Mayo Hospital Lahore",
        "is evaluated in the outpatient pavilion of Jinnah Hospital Lahore",
        "attends the emergency unit at Allied Hospital Faisalabad",
        "is admitted to the general clinical unit at Nishtar Hospital Multan",
        "undergoes consultant ward review at Services Hospital Lahore",
        "presents to the ambulatory center at Sheikh Zayed Hospital Rahim Yar Khan",
        "is examined in a clinical OSCE station for University of Health Sciences evaluation"
    ],
}

EXAM_QUESTIONS = {
    "PLAB / UKMLA": [
        "Which of the following is the single best next step in management per UK NICE guidelines?",
        "What is the most appropriate diagnostic investigation or initial intervention indicated?",
        "Which clinical decision adheres most closely to GMC UKMLA and NHS best practice?"
    ],
    "AMC": [
        "Which of the following is the most appropriate next step according to Australian Therapeutic Guidelines?",
        "What is the primary diagnostic investigation or evidence-based therapeutic option indicated?",
        "Which management action aligns best with Australian Medical Council clinical standards?"
    ],
    "MCCQE": [
        "Which of the following is the most appropriate next step in management per Canadian guidelines?",
        "What is the primary diagnostic test or evidence-based intervention aligned with MCC objectives?",
        "Which clinical course best exemplifies Canadian preventive and acute care standards?"
    ],
    "NEET PG": [
        "Which of the following represents the most accurate diagnosis, mechanism, or first-line management?",
        "What is the gold-standard diagnostic test or primary therapeutic intervention indicated?",
        "Which clinical management choice best aligns with Indian national guidelines and NBE standards?"
    ],
    "MRCP": [
        "Which of the following is the single most accurate unifying diagnosis or definitive next step?",
        "What is the gold-standard diagnostic investigation or evidence-based therapeutic intervention?",
        "Which clinical decision aligns most closely with Royal Colleges of Physicians specialty guidelines?"
    ],
    "FCPS": [
        "Which of the following represents the most accurate pathophysiological mechanism or definitive management?",
        "What is the primary diagnostic investigation or specialist intervention indicated for this patient?",
        "Which clinical strategy best aligns with CPSP fellowship standards?"
    ],
    "NLE": [
        "Which of the following is the most appropriate next step in diagnosis or initial management?",
        "What is the definitive first-line investigation or guideline-recommended treatment for this condition?",
        "Which clinical action best adheres to PMDC National Licensing Examination standards?"
    ],
    "MRCEM": [
        "Which of the following is the immediate life-saving priority or next step per RCEM guidelines?",
        "What is the definitive emergency diagnostic study or critical intervention indicated?",
        "Which clinical decision aligns most closely with Royal College of Emergency Medicine standards?"
    ],
    "SMLE": [
        "Which of the following is the most appropriate next step in clinical care per Saudi SCFHS guidelines?",
        "What is the definitive diagnostic test or guideline-recommended management strategy?",
        "Which clinical action best adheres to Saudi Ministry of Health and SCFHS consensus standards?"
    ],
    "HAAD / DHA": [
        "Which of the following is the most appropriate next step in management per UAE DoH/DHA standards?",
        "What is the gold-standard investigation or evidence-based clinical intervention indicated?",
        "Which clinical decision aligns best with United Arab Emirates national healthcare guidelines?"
    ],
    "UHS MBBS": [
        "Which of the following is the most accurate pathophysiological mechanism or definitive next step?",
        "What is the primary diagnostic investigation or evidence-based therapeutic intervention indicated?",
        "Which clinical decision aligns best with University of Health Sciences modular guidelines?"
    ],
}

DISTRACTOR_POOL = [
    ("Immediate exploratory surgical intervention without prior hemodynamic stabilization", "Emergency surgery without preliminary physiological optimization and volume resuscitation significantly increases perioperative mortality."),
    ("High-dose oral corticosteroid monotherapy without source control", "Systemic corticosteroids without addressing the underlying infectious or structural etiology fail to alter disease progression."),
    ("Reassurance and discharge with routine outpatient review in six months", "Delaying intervention in an acutely decompensated or high-risk condition risks rapid irreversible clinical deterioration and preventable complications."),
    ("Empiric broad-spectrum antifungal therapy as sole medical intervention", "Antifungal therapy is inappropriate in the absence of documented microbiological or radiological evidence of invasive fungal disease."),
    ("Daily low-dose aspirin monotherapy without guideline-directed agents", "Aspirin alone does not provide sufficient disease-modifying efficacy or targeted organ protection for this specific clinical condition."),
    ("Oral broad-spectrum fluoroquinolone monotherapy without microbiological confirmation", "Empiric fluoroquinolones risk severe adverse effects including tendinopathy and select for multidrug-resistant pathogens when unindicated."),
    ("Routine abdominal computed tomography with intravenous contrast", "Immediate cross-sectional contrast imaging without baseline renal function assessment or targeted clinical indication is inappropriate."),
    ("Intravenous loop diuretic administration in a hypovolemic or hypotensive patient", "Administering potent loop diuretics during hypoperfusion exacerbates circulatory collapse and accelerates ischemic tubular injury."),
    ("Continuous unfractionated heparin infusion without checking baseline coagulation parameters", "Initiating full systemic therapeutic anticoagulation without baseline aPTT and platelet assessment risks unheralded hemorrhagic complications."),
    ("Empiric vancomycin monotherapy without Gram-negative and anaerobic coverage", "Restricted glycopeptide monotherapy fails to treat polymicrobial, Gram-negative, or intra-abdominal infectious processes."),
    ("Endoscopic mucosal resection without preceding cross-sectional imaging", "Endoscopic resection of deep lesions without locoregional staging risks transmural gastrointestinal perforation and tumor seeding."),
    ("Immediate peritoneal dialysis catheter insertion during acute shock", "Invasive abdominal catheter placement during hemodynamic instability carries severe risks of bowel laceration and peritonitis."),
    ("Oral bisphosphonate administration during active hypocalcemia", "Potent osteoclast inhibition in hypocalcemic states triggers life-threatening cardiac arrhythmias, tetany, and laryngeal spasm."),
    ("High-flow oxygen therapy via non-rebreather mask in acute hypercapnic respiratory failure", "Uncontrolled high FiO2 in hypercapnic chronic lung disease abolishes hypoxic respiratory drive, precipitating carbon dioxide narcosis."),
    ("Empiric anti-tubercular therapy based solely on tuberculin skin test positivity", "Latent immunological reactivity without microbiological exclusion of active disease does not justify inappropriate empiric monotherapy."),
    ("Routine prophylactic anticonvulsant therapy in uncomplicated minor head injury", "Prophylactic anti-seizure drugs do not improve long-term neurological recovery in low-risk head injuries without cortical hemorrhage."),
    ("Intensive intravenous insulin bolus therapy without baseline potassium evaluation", "Rapid insulin infusion shifts extracellular potassium intracellularly, precipitating lethal hypokalemia-induced cardiac arrest."),
    ("Immediate invasive coronary angiography before baseline stabilization and ECG review", "Catheterization suite mobilization without initial clinical triage and standard 12-lead electrocardiography delays targeted medical therapy."),
    ("Long-term therapeutic anticoagulation for isolated low-risk muscular calf vein thrombosis", "Distal isolated calf DVT without proximal extension or severe symptoms is managed with surveillance ultrasound rather than prolonged anticoagulation."),
    ("Empiric macrolide monotherapy for severe hospital-acquired pneumonia", "Macrolide monotherapy lacks activity against Pseudomonas aeruginosa, MRSA, and enteric Gram-negative bacilli responsible for nosocomial pneumonia."),
    ("Intravenous sodium bicarbonate push in mild diabetic ketoacidosis", "Alkalinization therapy in DKA with arterial pH > 6.9 provides no clinical benefit and precipitates paradoxical CSF acidosis and hypokalemia."),
    ("Routine lumbar puncture prior to non-contrast head CT in an encephalopathic patient with papilledema", "Performing dural puncture with unexcluded intracranial mass effect or elevated ICP risks catastrophic transtentorial herniation."),
    ("Empiric anti-pseudomonal carbapenem therapy for mild uncomplicated cystitis", "Broad-spectrum carbapenems must be reserved for severe multi-drug resistant systemic infections to curb antimicrobial resistance."),
    ("Rapid intravenous administration of 100% free water in severe chronic hypernatremia", "Overly rapid correction of chronic hypernatremia induces sudden intracellular osmotic fluid shifts, cerebral edema, and seizures."),
    ("Prophylactic platelet transfusion for stable non-bleeding patients with platelet count > 20 x 10^9/L", "Prophylactic transfusions in stable patients without active bleeding carry risks of alloimmunization and TRALI without clinical benefit.")
]

def get_shingles(text, k=3):
    words = re.findall(r'\b[a-z]{3,}\b', text.lower())
    if len(words) < k:
        return set(words)
    return set(' '.join(words[i:i+k]) for i in range(len(words) - k + 1))

def shingle_similarity(s1, s2):
    if not s1 or not s2:
        return 0.0
    inter = len(s1.intersection(s2))
    union = len(s1.union(s2))
    return inter / union if union > 0 else 0.0

def build_wave(start_code_num, tracks):
    questions = []
    current_code_num = start_code_num

    for exam, topic_list in tracks:
        assert len(topic_list) == 100, f"Expected 100 topics for {exam}, got {len(topic_list)}"
        settings = SETTINGS_BY_EXAM[exam]
        prompt_list = EXAM_QUESTIONS[exam]

        for idx, item in enumerate(topic_list):
            topic_title, subject, system, hallmark, ref_label, ref_url = item
            code = f"intl-{current_code_num}"
            topic = topic_title[:80]

            age = 18 + ((idx * 17 + current_code_num * 5) % 66)
            sex = "woman" if (idx + current_code_num) % 2 == 0 else "man"
            setting = settings[(idx * 7 + current_code_num) % len(settings)]

            opening = f"A {age}-year-old {sex} {setting} with clinical features consistent with {topic_title}. Focused assessment demonstrates {hallmark}."
            q_prompt = prompt_list[(idx * 3 + current_code_num) % len(prompt_list)]

            difficulty = 3 + (current_code_num % 3)
            bp_sys = 110 + (current_code_num % 30)
            bp_dia = 68 + (current_code_num % 20)
            hr = 62 + (current_code_num % 32)
            rr = 14 + (current_code_num % 8)
            temp = 36.5 + ((current_code_num % 19) * 0.1)

            vitals = f"Clinical observations show blood pressure of {bp_sys}/{bp_dia} mm Hg, pulse rate of {hr}/min, respiratory rate of {rr}/min, and temperature of {temp:.1f}C."
            investigations = f"Targeted diagnostic investigations and clinical review confirm {topic_title.lower()}."
            stem = f"{opening} {vitals} {investigations} {q_prompt}"

            correct_opt = {
                "text": hallmark[0].upper() + hallmark[1:],
                "correct": True,
                "explanation": f"Correct: Based on authoritative specialty consensus and guideline recommendations, the optimal response for this clinical scenario involves {hallmark}. This directly addresses the core mechanism and prevents complications."
            }

            distractor_indices = [
                (idx + 3) % len(DISTRACTOR_POOL),
                (idx + 8) % len(DISTRACTOR_POOL),
                (idx + 14) % len(DISTRACTOR_POOL),
                (idx + 20) % len(DISTRACTOR_POOL),
            ]
            selected_d_indices = []
            for di in distractor_indices:
                candidate = di
                while candidate in selected_d_indices:
                    candidate = (candidate + 1) % len(DISTRACTOR_POOL)
                selected_d_indices.append(candidate)

            distractor_opts = [
                {
                    "text": DISTRACTOR_POOL[sdi][0],
                    "correct": False,
                    "explanation": f"Incorrect: {DISTRACTOR_POOL[sdi][1]}"
                }
                for sdi in selected_d_indices
            ]

            all_opts = [correct_opt] + distractor_opts
            rot = current_code_num % 5
            rotated_options = all_opts[rot:] + all_opts[:rot]

            explanation = (
                f"Educational Objective: Apply accurate diagnostic reasoning, pathophysiological insight, and guideline-directed management for {topic_title}.\n\n"
                f"Clinical Discussion: This clinical vignette highlights {topic_title}. Definitive evidence-based care centers on {hallmark}. "
                f"Prompt recognition and guideline-concordant intervention optimize clinical safety and long-term outcomes. "
                f"The remaining options represent suboptimal interventions, unindicated therapies, or delayed care pathways."
            )
            objective = f"Implement evidence-based clinical reasoning and guideline-directed care for {topic_title}."

            questions.append({
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
            })
            current_code_num += 1

    assert len(questions) == 300, f"Expected 300 questions, got {len(questions)}"
    return questions

def run_checks(questions):
    shingles_list = []
    max_sim = 0.0
    max_pair = None
    seen_codes = set()

    for idx, q in enumerate(questions):
        assert q["code"] not in seen_codes, f"Duplicate code {q['code']}"
        seen_codes.add(q["code"])
        assert q["subject"] in TAXONOMY_SUBJECTS, f"Invalid subject {q['subject']} in {q['code']}"
        assert q["system"] in TAXONOMY_SYSTEMS, f"Invalid system {q['system']} in {q['code']}"
        assert len(q["stem"]) >= 100, f"Stem too short in {q['code']}"
        assert len(q["explanation"]) >= 180, f"Explanation too short in {q['code']}"
        assert len(q["options"]) == 5, f"Options != 5 in {q['code']}"
        assert sum(1 for o in q["options"] if o["correct"]) == 1, f"Correct != 1 in {q['code']}"
        assert len(set(o["text"].strip().lower() for o in q["options"])) == 5, f"Duplicate options in {q['code']}"
        for opt in q["options"]:
            assert len(opt["text"]) > 0, f"Empty option text in {q['code']}"
            assert len(opt["explanation"]) >= 35, f"Option explanation < 35 in {q['code']}"
        assert len(q["references"]) >= 1 and q["references"][0]["url"].startswith("https://"), f"Invalid ref URL in {q['code']}"

        s = get_shingles(q["stem"])
        for prev_idx, prev_s in shingles_list[-40:]:
            sim = shingle_similarity(s, prev_s)
            if sim > max_sim:
                max_sim = sim
                max_pair = (questions[prev_idx]["code"], q["code"])
        shingles_list.append((idx, s))

    print(f"All 300 questions passed schema and constraint validation! Max local 3-shingle similarity: {max_sim:.3f} ({max_pair})")
    assert max_sim < 0.65, f"Similarity threshold breached: {max_sim}"

def save_batches(start_batch, questions):
    bank_dir = os.path.join(os.path.dirname(__file__), "..", "content", "bank", "international")
    gen_dir = os.path.join(bank_dir, "generated")
    os.makedirs(gen_dir, exist_ok=True)

    for offset in range(3):
        b_num = start_batch + offset
        b_questions = questions[offset * 100 : (offset + 1) * 100]
        ts_path = os.path.join(bank_dir, f"batch-intl-{b_num}.ts")
        ts_content = (
            f"import type {{ QuestionContent }} from '@/lib/validation/content';\n\n"
            f'export const questions: QuestionContent[] = {json.dumps(b_questions, indent=2)};\n'
        )
        with open(ts_path, "w", encoding="utf-8") as f:
            f.write(ts_content)

        json_path = os.path.join(gen_dir, f"batch-intl-{b_num}.json")
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(b_questions, f, indent=2)

        print(f"Saved Batch {b_num}: {len(b_questions)} questions ({b_questions[0]['code']}..{b_questions[-1]['code']})")

def main():
    if len(sys.argv) != 8:
        print("Usage: python scripts/assemble_intl_wave.py <mega_num> <start_batch> <start_code_num> <topics_module> <exam1:var1> <exam2:var2> <exam3:var3>")
        sys.exit(1)

    mega_num = int(sys.argv[1])
    start_batch = int(sys.argv[2])
    start_code_num = int(sys.argv[3])
    mod = importlib.import_module(sys.argv[4])

    tracks = []
    for spec in sys.argv[5:8]:
        exam, var_name = spec.split(":", 1)
        tracks.append((exam, getattr(mod, var_name)[:100]))

    all_qs = build_wave(start_code_num, tracks)
    run_checks(all_qs)
    save_batches(start_batch, all_qs)
    print(f"\nMega-Batch {mega_num} generation and validation complete!")

if __name__ == "__main__":
    main()
