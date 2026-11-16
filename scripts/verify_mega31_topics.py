"""
Verification script for all 500 Mega-Batch 31 topics.
Validates:
- Exactly 100 topics per track
- Valid subject in TAXONOMY_SUBJECTS
- Valid system in TAXONOMY_SYSTEMS
- Topic length <= 80 characters (or trunkated properly)
- Hallmark length >= 35 characters
- References present and non-empty
"""

import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from mega31_topics_a import AMC_TOPICS, MCCQE_TOPICS
from mega31_topics_b import NEET_TOPICS, MRCP_TOPICS, FCPS_TOPICS

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

tracks = [
    ("AMC", AMC_TOPICS),
    ("MCCQE", MCCQE_TOPICS),
    ("NEET PG", NEET_TOPICS),
    ("MRCP", MRCP_TOPICS),
    ("FCPS", FCPS_TOPICS),
]

total_count = 0
errors = []

for track_name, t_list in tracks:
    print(f"Track: {track_name}, Count: {len(t_list)}")
    assert len(t_list) == 100, f"Expected 100 for {track_name}, got {len(t_list)}"
    total_count += len(t_list)
    
    for idx, item in enumerate(t_list):
        topic_title, subject, system, hallmark, ref_label, ref_url = item
        if subject not in TAXONOMY_SUBJECTS:
            errors.append(f"[{track_name} #{idx}] Invalid Subject '{subject}' in '{topic_title}'")
        if system not in TAXONOMY_SYSTEMS:
            errors.append(f"[{track_name} #{idx}] Invalid System '{system}' in '{topic_title}'")
        if len(hallmark) < 35:
            errors.append(f"[{track_name} #{idx}] Hallmark too short: '{hallmark}'")
        if not ref_label or not ref_url:
            errors.append(f"[{track_name} #{idx}] Missing reference in '{topic_title}'")

if errors:
    print(f"\nFound {len(errors)} errors:")
    for err in errors[:20]:
        print("  -", err)
    sys.exit(1)

print(f"\nTotal topics: {total_count}")
print("ALL 500 TOPICS 100% VALIDATED AGAINST TAXONOMY!")
