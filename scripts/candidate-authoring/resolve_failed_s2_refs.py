import urllib.request
import urllib.parse
import json
import time

queries = [
    ("op-c-s2-0938", "aspiration pneumonitis chemical pneumonia Marik PE", "s2_b38_refs.json"),
    ("op-c-s2-0954", "ischemic colitis colonoscopy watershed Brandt LJ", "s2_b39_refs.json"),
    ("op-c-s2-0962", "toxic megacolon colectomy Sheth SG", "s2_b39_refs.json"),
    ("op-c-s2-0968", "Dieulafoy lesion endoscopy bleeding Norton ID", "s2_b39_refs.json"),
    ("op-c-s2-0970", "Mallory-Weiss tear endoscopy bleeding Kortas DY", "s2_b39_refs.json"),
    ("op-c-s2-0973", "sigmoid volvulus endoscopic detorsion Atamanalp SS", "s2_b39_refs.json"),
    ("op-c-s2-0990", "Pneumocystis jirovecii pneumonia corticosteroids indications", "s2_b40_refs.json"),
    ("op-c-s2-0992", "neurosyphilis aqueous penicillin G Marra CM", "s2_b40_refs.json"),
    ("op-c-s2-0993", "varicella zoster disseminated acyclovir Gnann JW", "s2_b40_refs.json")
]

for code, q, target_file in queries:
    term = urllib.parse.quote(q)
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={term}&retmode=json&retmax=3"
    req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
        id_list = data['esearchresult']['idlist']
        if not id_list:
            print(f"Still failed: {code} -> {q}")
            continue
        uid = id_list[0]
        time.sleep(0.35)
        url2 = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={uid}&retmode=json"
        req2 = urllib.request.Request(url2, headers={'User-Agent': 'OpenPrep/1.0'})
        with urllib.request.urlopen(req2) as resp2:
            data2 = json.loads(resp2.read().decode())
        item = data2['result'].get(uid, {})
        title = item.get('title', '').replace('\u2011', '-').replace('\u2013', '-').replace('\u2014', '-')
        authors = item.get('authors', [])
        first_author = authors[0]['name'] if authors else 'Unknown'
        source = item.get('source', '')
        pubdate = item.get('pubdate', '')
        cit = f"{first_author}. {title} {source}. {pubdate}. PMID: {uid}."
        
        filepath = f"scripts/candidate-authoring/{target_file}"
        with open(filepath, 'r', encoding='utf-8') as f:
            d = json.load(f)
        d[code] = {
            'pmid': uid,
            'author': first_author,
            'title': title,
            'source': source,
            'pubdate': pubdate,
            'citation': cit
        }
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(d, f, indent=2)
        print(f"Resolved {code} -> PMID {uid}: {first_author} ({source})")
    except Exception as e:
        print(f"Error {code}: {e}")
    time.sleep(0.35)
