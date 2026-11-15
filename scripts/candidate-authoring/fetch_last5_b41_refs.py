import urllib.request, urllib.parse, json

missing = {
    'op-c-s1-1002': 'Listeria monocytogenes ActA actin motility',
    'op-c-s1-1008': 'hemochromatosis HFE C282Y iron overload review',
    'op-c-s2-1001': 'aortic dissection Stanford esmolol clevidipine management',
    'op-c-s3-1004': 'Reason J Human error models and management',
    'op-c-s3-1007': 'malignant pleural mesothelioma diagnosis guidelines'
}

with open('scripts/candidate-authoring/batch41_refs.json', 'r', encoding='utf-8') as f:
    existing = json.load(f)

for code, term in missing.items():
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={urllib.parse.quote(term)}&retmode=json&retmax=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            ids = data.get('esearchresult', {}).get('idlist', [])
            if ids:
                uid = ids[0]
                s_url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={uid}&retmode=json"
                with urllib.request.urlopen(urllib.request.Request(s_url, headers={'User-Agent': 'OpenPrep/1.0'}), timeout=10) as s_resp:
                    doc = json.loads(s_resp.read().decode('utf-8'))['result'][uid]
                    title = doc.get('title', '')
                    first_author = doc.get('authors', [{}])[0].get('name', '') if doc.get('authors') else 'Unknown'
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
                    print(f"[{code}] -> PMID {uid}: {first_author} | {title[:60]}... | {source} ({pubdate})")
            else:
                print(f"[{code}] -> No IDs for '{term}'")
    except Exception as e:
        print(f"[{code}] -> ERROR: {e}")

with open('scripts/candidate-authoring/batch41_refs.json', 'w', encoding='utf-8') as f:
    json.dump(existing, f, indent=2)

print(f"\nFinal count in batch41_refs.json: {len(existing)} / 37")
