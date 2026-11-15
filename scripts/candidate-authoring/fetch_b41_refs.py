import urllib.request, urllib.parse, json, time

topics = {
    # Step 1 (11 items)
    'op-c-s1-1001': 'homocystinuria cystathionine beta-synthase pyridoxine responsiveness review',
    'op-c-s1-1002': 'Listeria monocytogenes actin polymerization ActA ampicillin',
    'op-c-s1-1003': 'chronic granulomatous disease NADPH oxidase CYBB NCF1 Aspergillus',
    'op-c-s1-1004': 'digoxin toxicity hypokalemia Na K ATPase Fab fragments',
    'op-c-s1-1005': 'membranous nephropathy phospholipase A2 receptor PLA2R rituximab',
    'op-c-s1-1006': 'hypertrophic cardiomyopathy MYH7 MYBPC3 sarcomere mutations',
    'op-c-s1-1007': 'neonatal respiratory distress syndrome surfactant dipalmitoylphosphatidylcholine',
    'op-c-s1-1008': 'hereditary hemochromatosis HFE C282Y hepcidin ferroportin',
    'op-c-s1-1009': 'multiple endocrine neoplasia type 2B RET M918T medullary thyroid',
    'op-c-s1-1010': 'paroxysmal nocturnal hemoglobinuria PIGA CD55 CD59 eculizumab',
    'op-c-s1-1011': 'pemphigus vulgaris desmoglein 3 acantholysis Nikolsky sign',

    # Step 2 CK (18 items)
    'op-c-s2-1001': 'aortic dissection Stanford type A type B esmolol clevidipine surgery',
    'op-c-s2-1002': 'pulmonary embolism intermediate-high risk submassive right ventricular strain',
    'op-c-s2-1003': 'Clostridioides difficile infection fulminant vancomycin metronidazole',
    'op-c-s2-1004': 'hepatorenal syndrome diagnostic criteria albumin terlipressin',
    'op-c-s2-1005': 'refractory status epilepticus continuous IV midazolam propofol',
    'op-c-s2-1006': 'giant cell arteritis ischemic optic neuropathy methylprednisolone',
    'op-c-s2-1007': 'immune thrombocytopenia guidelines IVIG corticosteroids bleeding',
    'op-c-s2-1008': 'acute necrotizing pancreatitis step-up approach catheter drainage',
    'op-c-s2-1009': 'postpartum hemorrhage uterine balloon tamponade tranexamic acid',
    'op-c-s2-1010': 'Kawasaki disease IVIG resistance infliximab corticosteroids',
    'op-c-s2-1011': 'tension pneumothorax needle decompression thoracostomy trauma',
    'op-c-s2-1012': 'neuroleptic malignant syndrome dantrolene bromocriptine rigidity',
    'op-c-s2-1013': 'thyroid storm Burch-Wartofsky propylthiouracil propranolol hydrocortisone',
    'op-c-s2-1014': 'ectopic pregnancy methotrexate eligibility beta-hCG',
    'op-c-s2-1015': 'septic shock Surviving Sepsis Campaign norepinephrine vasopressin',
    'op-c-s2-1016': 'Stevens-Johnson syndrome toxic epidermal necrolysis SCORTEN',
    'op-c-s2-1017': 'acute compartment syndrome delta pressure emergency fasciotomy',
    'op-c-s2-1018': 'acute angle-closure glaucoma timolol apraclonidine pilocarpine acetazolamide',

    # Step 3 (8 items)
    'op-c-s3-1001': 'deprescribing multimorbidity frailty polypharmacy older adults',
    'op-c-s3-1002': 'cardiorenal syndrome acute decompensated heart failure diuretic escalation',
    'op-c-s3-1003': 'intention-to-treat missing data sensitivity analysis clinical trials',
    'op-c-s3-1004': 'root cause analysis surgical wrong-site sentinel event latent errors',
    'op-c-s3-1005': 'surrogate decision-making substituted judgment ethics intensive care',
    'op-c-s3-1006': 'colorectal cancer screening USPSTF guidelines colonoscopy FIT',
    'op-c-s3-1007': 'malignant pleural mesothelioma asbestos exposure diagnostic workup',
    'op-c-s3-1008': 'hospital discharge transition of care medication reconciliation readmission'
}

print(f"Total topics to search: {len(topics)}")
results = {}

for code, term in topics.items():
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={urllib.parse.quote(term)}&retmode=json&retmax=3"
    req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0 (academic retrieval)'})
    try:
        data = json.loads(urllib.request.urlopen(req, timeout=10).read())
        ids = data.get('esearchresult', {}).get('idlist', [])
        if ids:
            uid = ids[0]
            s_url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={uid}&retmode=json"
            s_req = urllib.request.Request(s_url, headers={'User-Agent': 'OpenPrep/1.0'})
            s_data = json.loads(urllib.request.urlopen(s_req, timeout=10).read())
            doc = s_data['result'][uid]
            title = doc.get('title', '')
            authors = doc.get('authors', [])
            first_author = authors[0]['name'] if authors else 'Unknown'
            source = doc.get('source', '')
            pubdate = doc.get('pubdate', '')
            citation = f"{first_author}. {title} {source}. {pubdate}. PMID: {uid}."
            results[code] = {
                'pmid': uid,
                'citation': citation,
                'url': f"https://pubmed.ncbi.nlm.nih.gov/{uid}/",
                'title': title,
                'first_author': first_author,
                'source': source,
                'pubdate': pubdate
            }
            print(f"[{code}] -> PMID {uid}: {first_author} | {title[:60]}... | {source}")
        else:
            print(f"[{code}] -> NO RESULTS FOR: {term}")
    except Exception as e:
        print(f"[{code}] -> ERROR: {e}")
    time.sleep(0.35)

with open('scripts/candidate-authoring/batch41_refs.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print(f"\nSaved {len(results)} verified references to scripts/candidate-authoring/batch41_refs.json")
