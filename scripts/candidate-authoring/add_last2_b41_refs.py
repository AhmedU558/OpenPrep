import urllib.request, json

url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=25662774,10722498&retmode=json'
data = json.loads(urllib.request.urlopen(url).read())['result']

with open('scripts/candidate-authoring/batch41_refs.json', 'r', encoding='utf-8') as f:
    existing = json.load(f)

for uid, code in [('25662774', 'op-c-s2-1001'), ('10722498', 'op-c-s3-1004')]:
    doc = data[uid]
    title = doc.get('title', '')
    first_author = doc.get('authors', [{}])[0].get('name', 'Unknown')
    source = doc.get('source', '')
    pubdate = doc.get('pubdate', '')
    citation = f"{first_author}. {title} {source}. {pubdate}. PMID: {uid}."
    existing[code] = {
        'pmid': uid,
        'citation': citation,
        'url': f"https://pubmed.ncbi.nlm.nih.gov/{uid}/",
        'title': title,
        'first_author': first_author,
        'source': source,
        'pubdate': pubdate
    }
    print(f"Added {code} -> PMID {uid}: {first_author} | {title} | {source} ({pubdate})")

with open('scripts/candidate-authoring/batch41_refs.json', 'w', encoding='utf-8') as f:
    json.dump(existing, f, indent=2)

print(f"\nFinal count in batch41_refs.json: {len(existing)} / 37")
