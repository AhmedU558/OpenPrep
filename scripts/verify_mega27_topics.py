# scripts/verify_mega27_topics.py
from build_mega27_data import part1_code
from mega27_part_c import fcps_topics
from mega27_part_d import nle_topics
from mega27_part_e import mrcem_topics

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

ns = {}
exec(part1_code, ns)
neet_topics = ns["neet_topics"]

# import mrcp from write_mega27_all
import write_mega27_all
mrcp_topics = write_mega27_all.mrcp_topics

all_lists = [
    ("NEET PG", neet_topics),
    ("MRCP", mrcp_topics),
    ("FCPS", fcps_topics),
    ("NLE", nle_topics),
    ("MRCEM", mrcem_topics)
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

print(f"\nTotal topics: {total}")
if errors:
    print(f"Found {len(errors)} errors:")
    for err in errors:
        print("  - " + err)
    exit(1)
else:
    print("ALL 500 TOPICS 100% VALIDATED AGAINST TAXONOMY!")
