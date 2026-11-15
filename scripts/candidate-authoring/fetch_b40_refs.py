import urllib.request
import urllib.parse
import json
import time
import os

def search_pubmed(query):
    term = urllib.parse.quote(query)
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={term}&retmode=json&retmax=3"
    req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
        id_list = data['esearchresult']['idlist']
        if not id_list:
            return None
        time.sleep(0.35)
        url2 = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={','.join(id_list)}&retmode=json"
        req2 = urllib.request.Request(url2, headers={'User-Agent': 'OpenPrep/1.0'})
        with urllib.request.urlopen(req2) as resp2:
            data2 = json.loads(resp2.read().decode())
        results = []
        for uid in id_list:
            item = data2['result'].get(uid, {})
            title = item.get('title', '').replace('\u2011', '-').replace('\u2013', '-').replace('\u2014', '-')
            authors = item.get('authors', [])
            first_author = authors[0]['name'] if authors else 'Unknown'
            source = item.get('source', '')
            pubdate = item.get('pubdate', '')
            results.append({
                'pmid': uid,
                'author': first_author,
                'title': title,
                'source': source,
                'pubdate': pubdate
            })
        return results
    except Exception as e:
        print(f"Error querying {query}: {e}")
        return None

def fetch_and_save(queries, output_file):
    results = {}
    for code, q in queries:
        res = search_pubmed(q)
        if res:
            r = res[0]
            # Construct standard citation string
            cit = f"{r['author']}. {r['title']} {r['source']}. {r['pubdate']}. PMID: {r['pmid']}."
            results[code] = {
                'pmid': r['pmid'],
                'author': r['author'],
                'title': r['title'],
                'source': r['source'],
                'pubdate': r['pubdate'],
                'citation': cit
            }
            print(f"Resolved {code} -> PMID {r['pmid']}")
        else:
            print(f"FAILED {code} -> {q}")
        time.sleep(0.35)
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)
    print(f"Saved {len(results)} references to {output_file}")

if __name__ == '__main__':
    queries = [
        ("op-c-s1-0976", "Crigler Najjar phenobarbital UGT1A1"),
        ("op-c-s1-0977", "Dubin Johnson syndrome MRP2 ABCC2"),
        ("op-c-s1-0978", "hemochromatosis HFE C282Y hepcidin"),
        ("op-c-s1-0979", "Wilson disease ATP7B copper ceruloplasmin"),
        ("op-c-s1-0980", "alpha-1 antitrypsin deficiency liver PAS globules"),
        ("op-c-s1-0981", "Reye syndrome microvesicular steatosis aspirin"),
        ("op-c-s1-0982", "primary biliary cholangitis antimitochondrial antibodies"),
        ("op-c-s1-0983", "primary sclerosing cholangitis ulcerative colitis MRCP"),
        ("op-c-s1-0984", "autoimmune hepatitis plasma cells interface hepatitis"),
        ("op-c-s1-0985", "biliary atresia Kasai portoenterostomy"),
        ("op-c-s1-0986", "Zollinger Ellison syndrome secretin gastrinoma"),
        ("op-c-s1-0987", "VIPoma WDHA syndrome watery diarrhea"),
        ("op-c-s1-0988", "carcinoid syndrome 5-HIAA tricuspid valve"),
        ("op-c-s1-0989", "celiac disease anti-tissue transglutaminase villous atrophy"),
        ("op-c-s1-0990", "Whipple disease Tropheryma whipplei PAS positive"),
        ("op-c-s1-0991", "Crohn disease noncaseating granulomas transmural"),
        ("op-c-s1-0992", "familial adenomatous polyposis APC beta-catenin"),
        ("op-c-s1-0993", "Lynch syndrome mismatch repair microsatellite instability"),
        ("op-c-s1-0994", "Peutz Jeghers syndrome STK11 hamartomatous polyps"),
        ("op-c-s1-0995", "acute pancreatitis trypsinogen premature activation"),
        ("op-c-s1-0996", "hepatic adenoma oral contraceptives hemorrhage"),
        ("op-c-s1-0997", "hepatocellular carcinoma hepatitis B integration"),
        ("op-c-s1-0998", "Hirschsprung disease aganglionic megacolon RET"),
        ("op-c-s1-0999", "Zenker diverticulum cricopharyngeus Killian"),
        ("op-c-s1-1000", "pyloric stenosis metabolic alkalosis hypochloremic")
    ]
    fetch_and_save(queries, 'scripts/candidate-authoring/s1_b40_refs.json')
