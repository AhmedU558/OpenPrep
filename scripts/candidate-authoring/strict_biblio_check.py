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

exact_matches = 0
normalized_matches = 0
discrepancies = []

for it in items:
    code = it['code']
    ref = it['references'][0]
    label = ref['label']
    m = re.search(r'PMID:\s*(\d+)', label)
    pmid = m.group(1)
    doc = fetched[pmid]
    
    # 1. Author: exact last name
    doc_fa = doc['first_author'].split()[0].strip().lower()
    label_fa = label.split()[0].replace(',', '').replace('.', '').strip().lower()
    author_exact = (doc_fa == label_fa) or (doc_fa in label.lower())
    
    # 2. Year: exact 4 digits
    doc_yr = str(doc.get('year', '')).strip()
    year_exact = bool(doc_yr and re.search(rf'\b{doc_yr}\b', label))
    
    # 3. Journal: exact or clean substring
    doc_j = doc.get('journal', '').strip()
    journal_exact = bool(doc_j and (doc_j.lower() in label.lower()))
    
    # 4. Title: exact normalized comparison
    doc_t = re.sub(r'[^\w\s]', '', doc.get('title', '')).strip().lower()
    # Check if doc_t is in label after stripping punctuation
    clean_label = re.sub(r'[^\w\s]', '', label).lower()
    title_exact = doc_t in clean_label
    
    status = 'EXACT' if (author_exact and year_exact and journal_exact and title_exact) else 'VARIANT'
    if status == 'EXACT':
        exact_matches += 1
    else:
        # Check why it varied
        normalized_matches += 1
        discrepancies.append({
            'code': code,
            'pmid': pmid,
            'author_exact': author_exact,
            'year_exact': year_exact,
            'journal_exact': journal_exact,
            'title_exact': title_exact,
            'doc_title': doc.get('title', ''),
            'doc_journal': doc_j,
            'label': label
        })

print(f"Total checked: {len(items)}")
print(f"Exact 4-point matches: {exact_matches}")
print(f"Variants / Differences: {normalized_matches}")
if discrepancies:
    print("\nVariants details:")
    for d in discrepancies:
        print(f"  {d['code']} (PMID {d['pmid']}): author={d['author_exact']}, yr={d['year_exact']}, j={d['journal_exact']}, t={d['title_exact']}")
        if not d['journal_exact']:
            print(f"    Journal in doc: '{d['doc_journal']}'")
        if not d['title_exact']:
            print(f"    Title in doc: '{d['doc_title']}'")
