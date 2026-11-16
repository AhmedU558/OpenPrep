import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from mega25_part_a import TOPICS_PART_A
from mega25_part_b import TOPICS_PART_B

VALID_SUBJECTS = {
    'Anatomy', 'Physiology', 'Biochemistry', 'Pathology', 'Pharmacology',
    'Microbiology', 'Immunology', 'Genetics', 'Ethics', 'Biostatistics',
    'Medicine', 'Surgery', 'Pediatrics', 'Obstetrics', 'Neurology', 'Psychiatry', 'Geriatrics'
}
VALID_SYSTEMS = {
    'Cardiovascular', 'Dermatology', 'Renal', 'Pregnancy', 'Respiratory',
    'General Principles', 'Gastrointestinal', 'Hematology', 'Musculoskeletal',
    'Endocrine', 'Nervous System', 'Behavioral Health'
}

all_topics = TOPICS_PART_A + TOPICS_PART_B
print(f"Total topics: {len(all_topics)}")

errors = []
for i, t in enumerate(all_topics):
    if t['subject'] not in VALID_SUBJECTS:
        errors.append((i, 'subject', t['subject'], t['topic']))
    if t['system'] not in VALID_SYSTEMS:
        errors.append((i, 'system', t['system'], t['topic']))

print(f"Total errors: {len(errors)}")
for err in errors:
    print(err)
