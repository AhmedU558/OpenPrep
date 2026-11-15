import json, re

with open('scripts/candidate-authoring/fetched_b41_abstracts.json', 'r', encoding='utf-8') as f:
    fetched = json.load(f)

items = []
for exam in ['step1', 'step2ck', 'step3']:
    with open(f'content/candidates/{exam}/batch-41.json', 'r', encoding='utf-8') as f:
        items.extend(json.load(f))

with open('content/candidates/step1/batch-37.json', 'r', encoding='utf-8') as f:
    b37 = json.load(f)
items.extend([q for q in b37 if q['code'] in ['op-c-s1-0902', 'op-c-s1-0904']])

print(f"Loaded {len(items)} items.")

for it in items:
    code = it['code']
    ref = it['references'][0]
    pmid = ref['url'].rstrip('/').split('/')[-1]
    doc = fetched[pmid]
    ab = doc.get('abstract', '')
    print(f"=== {code} (PMID {pmid}) ===")
    print(f"Topic: {it['topic']}")
    print(f"Abstract length: {len(ab)}")
    # Print first 2 sentences or first 300 chars
    print(ab[:350].strip() + "...\n")
