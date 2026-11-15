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

results = {}
for it in items:
    code = it['code']
    ref = it['references'][0]
    pmid = ref['url'].rstrip('/').split('/')[-1]
    doc = fetched[pmid]
    ab = doc.get('abstract', '')
    sentences = re.split(r'\.\s+', ab)
    results[code] = {
        'pmid': pmid,
        'topic': it['topic'],
        'title': doc.get('title', ''),
        'sentences': [s.strip() for s in sentences if len(s.strip()) > 30]
    }

with open('scripts/candidate-authoring/abstract_sentences.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print(f"Extracted sentences for {len(results)} items into abstract_sentences.json")
