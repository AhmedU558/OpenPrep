import os
import re

search_terms = [
    "Expert Clinical Review Panel",
    "Internal USMLE Step 1 Content Reviewer",
    "Transplant Pathology & Nephrology Editorial Reviewer",
    "Molecular Oncology Editorial Reviewer",
    "OpenLearn Quality Screening Board",
    "OpenLearn Medical Editorial Board",
    "Editorial Quality Screener",
    "Clinical Uncertainty & Guideline Monitor"
]

for root, dirs, files in os.walk('scripts/candidate-authoring'):
    for f in files:
        if f.endswith('.ts') or f.endswith('.py'):
            fp = os.path.join(root, f)
            txt = open(fp, 'r', encoding='utf-8').read()
            for term in search_terms:
                if term in txt:
                    print(f"Found '{term}' in {fp}")

# Also check content/
for root, dirs, files in os.walk('content/candidates'):
    for f in files:
        if f.endswith('.json'):
            fp = os.path.join(root, f)
            txt = open(fp, 'r', encoding='utf-8').read()
            for term in search_terms:
                if term in txt:
                    print(f"Found '{term}' in {fp}")
