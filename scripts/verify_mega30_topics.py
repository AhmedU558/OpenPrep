# scripts/verify_mega30_topics.py
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from mega30_topics_a import mrcem_topics, smle_topics
from mega30_topics_b import haad_topics, uhs_topics, plab_topics

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

all_lists = [
    ("MRCEM", mrcem_topics),
    ("SMLE", smle_topics),
    ("HAAD / DHA", haad_topics),
    ("UHS MBBS", uhs_topics),
    ("PLAB / UKMLA", plab_topics)
]

total = 0
errors = []

for track_name, t_list in all_lists:
    print(f"Track: {track_name}, Count: {len(t_list)}")
    total += len(t_list)
    assert len(t_list) == 100, f"Expected 100 for {track_name}, got {len(t_list)}"
    for idx, item in enumerate(t_list):
        if len(item) != 6:
            errors.append(f"{track_name} [{idx}]: tuple length {len(item)} != 6: {item}")
            continue
        title, subj, sys_name, hallmark, ref_label, ref_url = item
        if subj not in TAXONOMY_SUBJECTS:
            errors.append(f"{track_name} [{idx}] '{title}': Invalid subject '{subj}'")
        if sys_name not in TAXONOMY_SYSTEMS:
            errors.append(f"{track_name} [{idx}] '{title}': Invalid system '{sys_name}'")
        if subj == "Dermatology":
            errors.append(f"{track_name} [{idx}] '{title}': Dermatology cannot be subject!")
        if sys_name == "Geriatrics":
            errors.append(f"{track_name} [{idx}] '{title}': Geriatrics cannot be system!")
        if sys_name == "Immunology":
            errors.append(f"{track_name} [{idx}] '{title}': Immunology cannot be system!")

print(f"\nTotal topics: {total}")
if errors:
    print(f"Found {len(errors)} errors:")
    for err in errors:
        print("  - " + err)
    exit(1)
else:
    print("ALL 500 TOPICS 100% VALIDATED AGAINST TAXONOMY!")
