import urllib.request, urllib.parse, json

queries = {
    'op-c-s1-0902': 'Munakomi S Das JM Weber Syndrome StatPearls',
    'op-c-s1-0904': 'Berger JR Dean D Neurosyphilis Handb Clin Neurol 2014',
    'op-c-s1-0906': 'Batzdorf U Syringomyelia related conditions',
    'op-c-s1-0907': 'Cheshire WP Spinal cord infarction etiology',
    'op-c-s1-0909': 'Cruccu G AAN-EFNS guidelines on trigeminal neuralgia management',
    'op-c-s1-0912': 'Willison HJ Jacobs BC van Doorn PA Guillain-Barre syndrome Lancet',
    'op-c-s1-0913': 'Lupski JR DNA duplication associated with Charcot-Marie-Tooth type 1A',
    'op-c-s1-0916': 'Bates GP Huntington disease Nat Rev Dis Primers',
    'op-c-s1-0920': 'Prusiner SB Prions Proc Natl Acad Sci',
    'op-c-s1-0928': 'Batlle D Haque SK Genetic causes and mechanisms of distal renal tubular acidosis',
    'op-c-s1-0934': 'Stewart PM Mineralocorticoid activity of carbenoxolone Lancet',
    'op-c-s1-0937': 'Hall JE Control of sodium excretion by angiotensin II',
    'op-c-s1-0940': 'Sands JM Mammalian urea transporters Ann Rev Physiol',
    'op-c-s1-0943': 'Ellison DH Clinical practice The use of diuretics in heart failure',
    'op-c-s1-0944': 'Reilly RF Peixoto AJ Desir GV The mechanism of action of thiazides',
    'op-c-s1-0945': 'Palmer LG Frindt G Regulation of ENaC',
    'op-c-s1-0947': 'Shankland SJ The podocytes response to injury',
    'op-c-s1-0953': 'Robertson HT Dead space the history of concepts',
    'op-c-s1-0957': 'Acute respiratory distress syndrome The Berlin Definition JAMA 2012',
    'op-c-s1-0958': 'Whitsett JA Alveolar surfactant homeostasis',
    'op-c-s1-0965': 'Perret JL Plush B Coal workers pneumoconiosis Australian perspective',
    'op-c-s1-0967': 'Selman M Pardo A Hypersensitivity pneumonitis insights in diagnosis',
    'op-c-s1-0968': 'Richeldi L Collard HR Jones MG Idiopathic pulmonary fibrosis Lancet 2017'
}

for code, q in queries.items():
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={urllib.parse.quote(q)}&retmode=json&retmax=1"
    try:
        data = json.loads(urllib.request.urlopen(url, timeout=10).read())
        ids = data['esearchresult']['idlist']
        if ids:
            uid = ids[0]
            s_url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={uid}&retmode=json"
            s_data = json.loads(urllib.request.urlopen(s_url, timeout=10).read())
            doc = s_data['result'][uid]
            first_a = doc.get('authors', [{}])[0].get('name', '') if doc.get('authors') else ''
            print(f"{code} -> PMID {uid}: {first_a} | {doc.get('title', '')} | {doc.get('source', '')} ({doc.get('pubdate', '')})")
        else:
            print(f"{code} -> No results for '{q}'")
    except Exception as e:
        print(f"{code} -> Error: {e}")
