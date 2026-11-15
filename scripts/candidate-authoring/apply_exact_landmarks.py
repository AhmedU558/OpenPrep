import json

landmarks = {
    'op-c-s1-0902': {
        'pmid': '32644584',
        'citation': 'Munakomi S, Das JM. Weber Syndrome. StatPearls [Internet]. 2023 Jan. PMID: 32644584.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/32644584/'
    },
    'op-c-s1-0904': {
        'pmid': '24365430',
        'citation': 'Berger JR, Dean D. Neurosyphilis. Handb Clin Neurol. 2014;121:1461-1472. PMID: 24365430.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/24365430/'
    },
    'op-c-s1-0906': {
        'pmid': '31675698',
        'citation': 'Holly LT, Batzdorf U. Chiari malformation and syringomyelia. J Neurosurg Spine. 2019 Nov 1;31(5):619-628. PMID: 31675698.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/31675698/'
    },
    'op-c-s1-0907': {
        'pmid': '8757000',
        'citation': 'Cheshire WP, Santos CC, Massey EW, Howard JF Jr. Spinal cord infarction: etiology and outcome. Neurology. 1996 Aug;47(2):321-330. PMID: 8757000.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/8757000/'
    },
    'op-c-s1-0909': {
        'pmid': '18721143',
        'citation': 'Cruccu G, Gronseth G, Alksne J, et al. AAN-EFNS guidelines on trigeminal neuralgia management. Eur J Neurol. 2008 Oct;15(10):1013-1028. PMID: 18721143.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/18721143/'
    },
    'op-c-s1-0912': {
        'pmid': '26948435',
        'citation': 'Willison HJ, Jacobs BC, van Doorn PA. Guillain-Barré syndrome. Lancet. 2016 Aug 13;388(10045):717-727. PMID: 26948435.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/26948435/'
    },
    'op-c-s1-0913': {
        'pmid': '1677316',
        'citation': 'Lupski JR, de Oca-Luna RM, Slaugenhaupt S, et al. DNA duplication associated with Charcot-Marie-Tooth disease type 1A. Cell. 1991 Jul 26;66(2):219-232. PMID: 1677316.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/1677316/'
    },
    'op-c-s1-0916': {
        'pmid': '27188817',
        'citation': 'Bates GP, Dorsey R, Gusella JF, et al. Huntington disease. Nat Rev Dis Primers. 2015 Apr 23;1:15005. PMID: 27188817.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/27188817/'
    },
    'op-c-s1-0928': {
        'pmid': '23114896',
        'citation': 'Batlle D, Haque SK. Genetic causes and mechanisms of distal renal tubular acidosis. Nephrol Dial Transplant. 2012 Oct;27(10):3691-3704. PMID: 23114896.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/23114896/'
    },
    'op-c-s1-0944': {
        'pmid': '20798254',
        'citation': 'Reilly RF, Peixoto AJ, Desir GV. The evidence-based use of thiazide diuretics in hypertension and nephrolithiasis. Clin J Am Soc Nephrol. 2010 Oct;5(10):1893-1903. PMID: 20798254.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/20798254/'
    },
    'op-c-s1-0957': {
        'pmid': '29466596',
        'citation': 'Fan E, Brodie D, Slutsky AS. Acute Respiratory Distress Syndrome: Advances in Diagnosis and Treatment. JAMA. 2018 Feb 20;319(7):698-710. PMID: 29466596.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/29466596/'
    },
    'op-c-s1-0968': {
        'pmid': '28365056',
        'citation': 'Richeldi L, Collard HR, Jones MG. Idiopathic pulmonary fibrosis. Lancet. 2017 May 13;389(10082):1941-1952. PMID: 28365056.',
        'url': 'https://pubmed.ncbi.nlm.nih.gov/28365056/'
    }
}

for b in [37, 38, 39]:
    ts_path = f'scripts/candidate-authoring/step1-batch{b}.ts'
    with open(ts_path, 'r', encoding='utf-8') as f:
        content = f.read()

    prefix = f"import {{ CandidateSpec }} from './types';\n\nexport const step1Batch{b}: CandidateSpec[] = "
    suffix = ";\n"
    if not content.startswith(prefix):
        continue

    raw_json = content[len(prefix):-len(suffix)]
    items = json.loads(raw_json)
    upd = 0
    for it in items:
        c = it['code']
        if c in landmarks:
            it['citation'] = landmarks[c]['citation']
            if 'references' in it:
                it['references'] = [{
                    'url': landmarks[c]['url'],
                    'label': landmarks[c]['citation']
                }]
            upd += 1
    new_content = prefix + json.dumps(items, indent=2) + suffix
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {upd} landmark citations in {ts_path}")
