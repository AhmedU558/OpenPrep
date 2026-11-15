import json, re

with open('scripts/candidate-authoring/fetched_b41_abstracts.json', 'r', encoding='utf-8') as f:
    fetched = json.load(f)

# Load manifest to get strongestDistractor, distractorExclusion, etc.
with open('content/candidates/manifest.json', 'r', encoding='utf-8') as f:
    manifest = json.load(f)
manifest_by_code = {m['code']: m for m in manifest}

items = []
for exam in ['step1', 'step2ck', 'step3']:
    with open(f'content/candidates/{exam}/batch-41.json', 'r', encoding='utf-8') as f:
        items.extend(json.load(f))

with open('content/candidates/step1/batch-37.json', 'r', encoding='utf-8') as f:
    b37 = json.load(f)
items.extend([q for q in b37 if q['code'] in ['op-c-s1-0902', 'op-c-s1-0904']])

print(f"Loaded {len(items)} items and {len(fetched)} abstracts.")

summary = []
for it in items:
    code = it['code']
    ref = it['references'][0]
    m = re.search(r'PMID:\s*(\d+)', ref['label'])
    pmid = m.group(1) if m else ''
    doc = fetched.get(pmid, {})
    m_entry = manifest_by_code.get(code, {})
    
    correct_opt = next((o['text'] for o in it['options'] if o['correct']), '')
    summary.append({
        'code': code,
        'exam': it['exam'],
        'topic': it['topic'],
        'pmid': pmid,
        'correct': correct_opt,
        'strongestDistractor': m_entry.get('strongestDistractor', ''),
        'distractorExclusion': m_entry.get('distractorExclusion', ''),
        'retrievedTitle': doc.get('title', ''),
        'abstract': doc.get('abstract', '')
    })

with open('scripts/candidate-authoring/item_abstract_pairs.json', 'w', encoding='utf-8') as f:
    json.dump(summary, f, indent=2, ensure_ascii=False)

print("Saved item_abstract_pairs.json")
