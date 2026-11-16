# scripts/verify_mega29_topics.py
from mega29_topics_a import mccqe_topics, neet_topics
from mega29_topics_b import mrcp_topics, fcps_topics, nle_topics

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
    ("MCCQE", mccqe_topics),
    ("NEET PG", neet_topics),
    ("MRCP", mrcp_topics),
    ("FCPS", fcps_topics),
    ("NLE", nle_topics)
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
