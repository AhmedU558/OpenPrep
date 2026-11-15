"""
Cycle 9 Authoring Engine: Step 1 (Batches 33-36, op-c-s1-0801 to 0900)
Strict compliance with:
- topic <= 80 chars
- subjects from taxonomy
- systems from taxonomy
- parallel distractors (ratio >= 0.25)
- verified PMIDs
- AI-review critique
- shortest valid solution + strongest competitor + decisive exclusion
"""

import json
import re

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

def validate_item(item):
    errors = []
    if len(item['topic']) > 80:
        errors.append(f"Topic too long ({len(item['topic'])} > 80): {item['topic']}")
    if item['subject'] not in TAXONOMY_SUBJECTS:
        errors.append(f"Invalid subject: {item['subject']}")
    if item['system'] not in TAXONOMY_SYSTEMS:
        errors.append(f"Invalid system: {item['system']}")
    if len(item['choices']) != 5:
        errors.append(f"Choices count != 5: {len(item['choices'])}")
    lens = [len(c[0].strip()) for c in item['choices']]
    ratio = min(lens) / max(lens)
    if ratio < 0.25:
        errors.append(f"Parallelism failed (ratio {ratio:.2f} < 0.25, lens {lens})")
    for idx, c in enumerate(item['choices']):
        if len(c[1].strip()) < 35:
            errors.append(f"Choice {idx} explanation too short ({len(c[1].strip())} < 35)")
    if 'PMID:' not in item['citation']:
        errors.append(f"Missing PMID in citation: {item['citation']}")
    if item['provisionalDifficulty'] not in (4, 5):
        errors.append(f"Difficulty must be 4 or 5: {item['provisionalDifficulty']}")
    return errors
