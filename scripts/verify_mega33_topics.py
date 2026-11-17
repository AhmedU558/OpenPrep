import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from mega33_topics_a import PLAB_TOPICS, AMC_TOPICS
from mega33_topics_b import MCCQE_TOPICS, NEET_TOPICS, MRCP_TOPICS

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

print(f"PLAB topics: {len(PLAB_TOPICS)}")
print(f"AMC topics: {len(AMC_TOPICS)}")
print(f"MCCQE topics: {len(MCCQE_TOPICS)}")
print(f"NEET PG topics: {len(NEET_TOPICS)}")
print(f"MRCP topics: {len(MRCP_TOPICS)}")

assert len(PLAB_TOPICS) == 100
assert len(AMC_TOPICS) == 100
assert len(MCCQE_TOPICS) == 100
assert len(NEET_TOPICS) == 100
assert len(MRCP_TOPICS) == 100

all_tracks = [
    ("PLAB", PLAB_TOPICS),
    ("AMC", AMC_TOPICS),
    ("MCCQE", MCCQE_TOPICS),
    ("NEET PG", NEET_TOPICS),
    ("MRCP", MRCP_TOPICS)
]

seen_titles = set()
total = 0

for exam, topics in all_tracks:
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
