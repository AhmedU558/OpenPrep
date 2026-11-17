import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from mega32_topics_a import NLE_TOPICS, MRCEM_TOPICS
from mega32_topics_b import SMLE_TOPICS, HAAD_TOPICS, UHS_TOPICS

VALID_SUBJECTS = {
    "Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology",
    "Microbiology", "Immunology", "Genetics", "Ethics", "Biostatistics",
    "Medicine", "Surgery", "Pediatrics", "Obstetrics", "Neurology",
    "Psychiatry", "Geriatrics"
}

VALID_SYSTEMS = {
    "Cardiovascular", "Dermatology", "Renal", "Pregnancy", "Respiratory",
    "General Principles", "Gastrointestinal", "Hematology", "Musculoskeletal",
    "Endocrine", "Nervous System", "Behavioral Health"
}

print(f"NLE topics: {len(NLE_TOPICS)}")
print(f"MRCEM topics: {len(MRCEM_TOPICS)}")
print(f"SMLE topics: {len(SMLE_TOPICS)}")
print(f"HAAD topics: {len(HAAD_TOPICS)}")
print(f"UHS topics: {len(UHS_TOPICS)}")

assert len(NLE_TOPICS) == 100
assert len(MRCEM_TOPICS) == 100
assert len(SMLE_TOPICS) == 100
assert len(HAAD_TOPICS) == 100
assert len(UHS_TOPICS) == 100

all_topics = [
    ("NLE", NLE_TOPICS),
    ("MRCEM", MRCEM_TOPICS),
    ("SMLE", SMLE_TOPICS),
    ("HAAD", HAAD_TOPICS),
    ("UHS", UHS_TOPICS)
]

seen_titles = set()
total = 0

for exam, topics in all_topics:
    for idx, topic in enumerate(topics):
        total += 1
        title, subject, system, focus, source, source_url = topic
        assert subject in VALID_SUBJECTS, f"Invalid subject '{subject}' in {exam} topic {idx}: {title}"
        assert system in VALID_SYSTEMS, f"Invalid system '{system}' in {exam} topic {idx}: {title}"
        assert len(title) > 10, f"Title too short in {exam} topic {idx}"
        assert len(focus) > 20, f"Focus too short in {exam} topic {idx}"
        assert len(source) > 5, f"Source too short in {exam} topic {idx}"
        assert source_url.startswith("http"), f"Invalid source_url in {exam} topic {idx}"
        if title in seen_titles:
            print(f"Warning: Duplicate title '{title}' in {exam}")
        seen_titles.add(title)

print(f"ALL {total} TOPICS VALIDATED WITH ZERO TAXONOMY ERRORS!")
