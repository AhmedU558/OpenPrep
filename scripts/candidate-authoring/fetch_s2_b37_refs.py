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
    # Queries for Step 2 CK Batches 37-40 (100 items: 0901 to 1000)
    queries_b37 = [
        ("op-c-s2-0901", "cardiac tamponade pulsus paradoxus pericardiocentesis"),
        ("op-c-s2-0902", "ventricular septal rupture post myocardial infarction surgery"),
        ("op-c-s2-0903", "acute limb ischemia heparin embolectomy catheter"),
        ("op-c-s2-0904", "aortic dissection type A surgical repair type B esmolol"),
        ("op-c-s2-0905", "syncope workup implantable loop recorder tilt table"),
        ("op-c-s2-0906", "hypertensive emergency clevidipine nicardipine target blood pressure"),
        ("op-c-s2-0907", "infective endocarditis Duke criteria urgent surgery indications"),
        ("op-c-s2-0908", "severe low-flow low-gradient aortic stenosis dobutamine stress echocardiography"),
        ("op-c-s2-0909", "hypertrophic cardiomyopathy outflow tract obstruction beta-blockers"),
        ("op-c-s2-0910", "acute decompensated heart failure nitroprusside afterload reduction"),
        ("op-c-s2-0911", "atrial fibrillation Wolff-Parkinson-White procainamide contraindication"),
        ("op-c-s2-0912", "monomorphic ventricular tachycardia hemodynamically stable amiodarone cardioversion"),
        ("op-c-s2-0913", "constrictive pericarditis square root sign pericardiectomy"),
        ("op-c-s2-0914", "Brugada syndrome type 1 coved ST-segment elevation implantable cardioverter-defibrillator"),
        ("op-c-s2-0915", "subclavian steal syndrome retrograde vertebral artery flow"),
        ("op-c-s2-0916", "right ventricular myocardial infarction volume resuscitation preload nitrates"),
        ("op-c-s2-0917", "peripartum cardiomyopathy bromocriptine delivery timing heart failure"),
        ("op-c-s2-0918", "thoracic aortic aneurysm surgical indications diameter threshold"),
        ("op-c-s2-0919", "superior vena cava syndrome endovascular stenting radiation therapy"),
        ("op-c-s2-0920", "abdominal aortic aneurysm repair threshold ultrasound screening"),
        ("op-c-s2-0921", "statin-associated muscle symptoms rechallenge creatine kinase"),
        ("op-c-s2-0922", "heart failure reduced ejection fraction SGLT2 inhibitor guideline medical therapy"),
        ("op-c-s2-0923", "Takotsubo cardiomyopathy apical ballooning recovery"),
        ("op-c-s2-0924", "targeted temperature management post-cardiac arrest normothermia"),
        ("op-c-s2-0925", "acute mitral regurgitation papillary muscle rupture surgical repair")
    ]
    fetch_and_save(queries_b37, 'scripts/candidate-authoring/s2_b37_refs.json')
