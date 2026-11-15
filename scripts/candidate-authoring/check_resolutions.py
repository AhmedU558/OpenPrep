import json

with open('content/candidates/cycle10-pmid-resolutions.json', 'r', encoding='utf-8') as f:
    res = json.load(f)['resolved']

for code, info in sorted(res.items()):
    old_l = info.get('old_label', '')[:40]
    new_t = info.get('new_title', '')[:50]
    pmid = info.get('new_pmid', '')
    author = info.get('new_first_author', '')
    print(f"{code}: [{old_l}] -> PMID {pmid} ({author}: {new_t})")
