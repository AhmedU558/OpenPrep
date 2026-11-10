import json
import re
import os

unresolvable = []

for s in ['step1', 'step2', 'step3']:
    for b in range(17, 21):
        fp = f'scripts/candidate-authoring/{s}-batch{b}.ts'
        items = json.loads(open(fp, 'r', encoding='utf-8').read().split('CandidateSpec[] = ')[1].rstrip(';\n'))
        for it in items:
            cit = it.get('citation', '')
            has_pmid = bool(re.search(r'PMID:\s*\d+', cit, re.I))
            has_nlm = bool(re.search(r'NLM ID:\s*\d+', cit, re.I))
            has_doi = bool(re.search(r'DOI:\s*[^\s,;]+', cit, re.I))
            has_url = bool(re.search(r'https?://[^\s,;]+', cit, re.I))
            has_other = any(k in cit for k in ['goldcopd.org', 'CDC.gov', 'MMWR', 'FDA', 'American Psychiatric Association', 'Code of Medical Ethics', 'Joint Commission', 'President\'s Commission', 'Brenner & Rector', 'Langley', 'Sackett', 'Fletcher', 'Klabunde', 'Guyton', 'Hall JE', 'Costanzo', 'Berne', 'Levy'])
            
            if not (has_pmid or has_nlm or has_doi or has_url or has_other):
                unresolvable.append((it['code'], fp, cit, it.get('metadata', {}).get('citations', [])))

print(f"Total unresolvable citations: {len(unresolvable)}")
for code, fp, cit, meta_cits in unresolvable:
    print(f"\n{code} in {os.path.basename(fp)}:")
    print(f"  Current citation: {cit}")
    print(f"  Metadata citations: {meta_cits}")
