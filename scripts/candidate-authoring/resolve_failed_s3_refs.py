import urllib.request
import urllib.parse
import json
import time

queries = [
    ("op-c-s3-0934", "peptic ulcer bleeding PPI oral intravenous Barkun AN", "s3_b38_refs.json"),
    ("op-c-s3-0938", "acute ischemic stroke blood pressure thrombolysis Powers WJ", "s3_b38_refs.json"),
    ("op-c-s3-0940", "hyperkalemia emergency management Sterns RH", "s3_b38_refs.json"),
    ("op-c-s3-0949", "postoperative fever atelectasis Mavros MN", "s3_b38_refs.json"),
    ("op-c-s3-0961", "healthy worker effect selection bias Choi BC", "s3_b39_refs.json"),
    ("op-c-s3-0963", "Berkson bias selection odds ratio Flanders WD", "s3_b39_refs.json"),
    ("op-c-s3-0964", "effect modification interaction confounding Knol MJ", "s3_b39_refs.json"),
    ("op-c-s3-0976", "root cause analysis sentinel event Wu AW", "s3_b40_refs.json"),
    ("op-c-s3-0992", "medical futility nonbeneficial treatment dispute Bosslet GT", "s3_b40_refs.json")
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
