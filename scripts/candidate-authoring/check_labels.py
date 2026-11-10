import os
import re

patterns = [
    ("clinical_editorial_board", re.compile(r"clinical\s*editorial\s*board", re.I)),
    ("usmle_review_panel", re.compile(r"usmle\s*review\s*panel", re.I)),
    ("expert_clinical_review", re.compile(r"expert\s*clinical\s*review", re.I)),
    ("citation_verified", re.compile(r"citation\s*verified", re.I)),
    ("citationverified", re.compile(r"citationverified", re.I)),
]

targets = ["content", "scripts"]
matches = []

for target in targets:
    for root, dirs, files in os.walk(target):
        for f in files:
            if f.endswith((".ts", ".json", ".md", ".py")) and f != "check_labels.py":
                path = os.path.join(root, f)
                try:
                    with open(path, "r", encoding="utf-8") as fp:
                        for i, line in enumerate(fp, 1):
                            for name, pat in patterns:
                                if pat.search(line):
                                    matches.append((path, i, name, line.strip()))
                except Exception as e:
                    pass

print(f"Total legacy string occurrences found: {len(matches)}")
for path, line_no, name, content in matches:
    print(f"{path}:{line_no} [{name}] -> {content[:100]}")
