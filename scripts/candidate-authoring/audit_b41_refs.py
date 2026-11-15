import json

with open('scripts/candidate-authoring/batch41_refs.json', 'r', encoding='utf-8') as f:
    refs = json.load(f)

print('Total verified references in batch41_refs.json:', len(refs))
for code in sorted(refs.keys()):
    r = refs[code]
    pmid = r['pmid']
    author = r['first_author']
    title = r['title'][:55]
    source = r['source']
    print(f"{code} (PMID {pmid}) -> {author}: {title}... [{source}]")
