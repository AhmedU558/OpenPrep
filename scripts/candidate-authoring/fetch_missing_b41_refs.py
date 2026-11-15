import urllib.request, urllib.parse, json, time

missing = {
    'op-c-s1-1001': '"cystathionine beta-synthase" homocystinuria pyridoxine Mudd SH',
    'op-c-s1-1002': '"Listeria monocytogenes" ActA actin Tilney LG',
    'op-c-s1-1003': '"chronic granulomatous disease" NADPH oxidase CYBB Roos D',
    'op-c-s1-1008': 'Feder JN hereditary hemochromatosis HFE C282Y Nature 1996',
    'op-c-s2-1001': 'Nienaber CA aortic dissection Lancet 2016',
    'op-c-s2-1010': 'McCrindle BW Kawasaki disease Circulation 2017',
    'op-c-s3-1003': '"intention-to-treat" "clinical trials" missing outcome data',
    'op-c-s3-1004': 'Reason J Human error models and management BMJ 2000',
    'op-c-s3-1007': 'Bibby AC malignant pleural mesothelioma Lancet 2016'
}

with open('scripts/candidate-authoring/batch41_refs.json', 'r', encoding='utf-8') as f:
    existing = json.load(f)

for code, term in missing.items():
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={urllib.parse.quote(term)}&retmode=json&retmax=3"
    req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0 (academic retrieval)'})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                ids = data.get('esearchresult', {}).get('idlist', [])
                if ids:
                    uid = ids[0]
                    s_url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={uid}&retmode=json"
                    s_req = urllib.request.Request(s_url, headers={'User-Agent': 'OpenPrep/1.0'})
                    with urllib.request.urlopen(s_req, timeout=15) as s_resp:
                        s_data = json.loads(s_resp.read().decode('utf-8'))
                        doc = s_data['result'][uid]
                        title = doc.get('title', '')
                        authors = doc.get('authors', [])
                        first_author = authors[0]['name'] if authors else 'Unknown'
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
                        print(f"[{code}] -> SUCCESS: PMID {uid}: {first_author} | {title[:60]}... | {source} ({pubdate})")
                        break
                else:
                    print(f"[{code}] -> No IDs found for '{term}'")
                    break
        except Exception as e:
            print(f"[{code}] attempt {attempt+1} failed: {e}")
            time.sleep(1.0)
    time.sleep(0.5)

with open('scripts/candidate-authoring/batch41_refs.json', 'w', encoding='utf-8') as f:
    json.dump(existing, f, indent=2)

print(f"\nFinal batch41_refs.json count: {len(existing)} / 37")
