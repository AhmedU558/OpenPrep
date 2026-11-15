import json
import re

with open('scripts/candidate-authoring/fetched_b41_abstracts.json', 'r', encoding='utf-8') as f:
    abstracts = json.load(f)

for pmid in ['3872065', '42234520', '34175765', '25089630', '42989087']:
    doc = abstracts[pmid]
    print(f"=== PMID {pmid} ===")
    print(f"Title: {doc['title']}")
    print(f"First author: {doc['first_author']}")
    print(f"Abstract preview: {doc['abstract'][:200]}...\n")
