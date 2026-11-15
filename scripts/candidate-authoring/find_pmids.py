import urllib.request
import urllib.parse
import json
import time

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
            title = item.get('title', '')
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

if __name__ == '__main__':
    queries = [
        ("Crigler-Najjar phenobarbital UGT1A1", "0976"),
        ("Dubin-Johnson syndrome MRP2 ABCC2", "0977"),
        ("hemochromatosis HFE C282Y hepcidin", "0978"),
        ("Wilson disease ATP7B copper ceruloplasmin", "0979"),
        ("alpha-1 antitrypsin deficiency liver PAS globules", "0980"),
        ("Reye syndrome microvesicular steatosis aspirin", "0981"),
        ("primary biliary cholangitis antimitochondrial antibodies", "0982"),
        ("primary sclerosing cholangitis ulcerative colitis MRCP", "0983"),
        ("autoimmune hepatitis plasma cells interface hepatitis", "0984"),
        ("biliary atresia Kasai portoenterostomy", "0985"),
        ("Zollinger-Ellison syndrome secretin gastrinoma", "0986"),
        ("VIPoma WDHA syndrome watery diarrhea", "0987"),
        ("carcinoid syndrome 5-HIAA tricuspid valve", "0988"),
        ("celiac disease anti-tissue transglutaminase villous atrophy", "0989"),
        ("Whipple disease Tropheryma whipplei PAS positive", "0990"),
        ("Crohn disease noncaseating granulomas transmural", "0991"),
        ("familial adenomatous polyposis APC beta-catenin", "0992"),
        ("Lynch syndrome mismatch repair microsatellite instability", "0993"),
        ("Peutz-Jeghers syndrome STK11 hamartomatous polyps", "0994"),
        ("acute pancreatitis trypsinogen premature activation", "0995"),
        ("hepatic adenoma oral contraceptives hemorrhage", "0996"),
        ("hepatocellular carcinoma hepatitis B integration", "0997"),
        ("Hirschsprung disease aganglionic megacolon RET", "0998"),
        ("Zenker diverticulum cricopharyngeus Killian", "0999"),
        ("pyloric stenosis metabolic alkalosis hypochloremic", "1000")
    ]
    for q, code in queries:
        res = search_pubmed(q)
        if res:
            r = res[0]
            print(f"{code}: PMID: {r['pmid']} - {r['author']} et al. {r['title']} {r['source']}. {r['pubdate']}.")
        else:
            print(f"{code}: NOT FOUND")
        time.sleep(0.35)
