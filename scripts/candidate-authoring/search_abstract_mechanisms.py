import json, re

with open('content/candidates/batch41-claim-mapping-ledger.json', 'r', encoding='utf-8') as f:
    ledger = json.load(f)

with open('scripts/candidate-authoring/fetched_b41_abstracts.json', 'r', encoding='utf-8') as f:
    fetched = json.load(f)

# Look for specific keywords in the full abstract for each code
checks = {
    'op-c-s1-1001': ['b6', 'pyridoxine', 'cystathionine', 'thromboembolism'],
    'op-c-s1-1002': ['acta', 'actin', 'motility'],
    'op-c-s1-1003': ['superoxide', 'oxidase', 'gp91'],
    'op-c-s1-1004': ['hypokalemia', 'potassium', 'atpase', 'binding'],
    'op-c-s1-1005': ['pla2r', 'phospholipase', 'podocyte', 'antigen'],
    'op-c-s1-1006': ['myh7', 'mybpc3', 'sarcomere', 'myosin'],
    'op-c-s1-1007': ['dipalmitoylphosphatidylcholine', 'lecithin', 'surface tension', 'surfactant'],
    'op-c-s1-1008': ['hepcidin', 'ferroportin', 'iron', 'hfe'],
    'op-c-s1-1009': ['ret', 'm918t', 'proto-oncogene', 'neuroma'],
    'op-c-s1-1010': ['piga', 'flaer', 'cd55', 'cd59', 'gpi'],
    'op-c-s1-1011': ['desmoglein', 'desmosome', 'acantholysis'],
    'op-c-s2-1001': ['open surgery', 'proximal', 'type a', 'dissection'],
    'op-c-s2-1002': ['intermediate', 'submassive', 'thrombectomy', 'anticoagulation'],
    'op-c-s2-1003': ['vancomycin', 'refractory', 'difficile', 'ileus'],
    'op-c-s2-1004': ['terlipressin', 'hrs-aki', 'albumin', 'vasoconstrictor'],
    'op-c-s2-1005': ['anesthetic', 'midazolam', 'propofol', 'sedation', 'refractory status'],
    'op-c-s2-1006': ['emergency', 'vision', 'arteritis', 'steroids', 'glucocorticoid'],
    'op-c-s2-1007': ['corticosteroid', 'dexamethasone', 'epinephrine', 'stridor', 'croup', 'itp'],
    'op-c-s2-1008': ['step-up', 'necrosectomy', 'drainage', 'pancreatic'],
    'op-c-s2-1009': ['stepwise', 'tamponade', 'balloon', 'hemorrhage', 'uterotonic'],
    'op-c-s2-1010': ['ivig', 'kawasaki', 'aneurysm', 'resistant'],
    'op-c-s2-1011': ['needle', 'decompression', 'thoracostomy', 'tension pneumothorax'],
    'op-c-s2-1012': ['rigidity', 'hyperthermia', 'creatine kinase', 'neuroleptic', 'dantrolene'],
    'op-c-s2-1013': ['crisis', 'storm', 'iodine', 'propylthiouracil', 'thionamide'],
    'op-c-s2-1014': ['methotrexate', 'ectopic', 'medical'],
    'op-c-s2-1015': ['norepinephrine', 'vasopressor', 'septic shock', 'vasopressin'],
    'op-c-s2-1016': ['sjs/ten', 'stevens-johnson', 'reaction', 'medications'],
    'op-c-s2-1017': ['fasciotomy', 'compartment', 'pressure', '30'],
    'op-c-s2-1018': ['glaucoma', 'angle-closure', 'pressure', 'timolol', 'acetazolamide', 'pilocarpine'],
    'op-c-s3-1001': ['stoppfrail', 'pim', 'frail', 'sulfonylurea', 'glycemic'],
    'op-c-s3-1002': ['creatinine', 'congestion', 'loop', 'diuretics'],
    'op-c-s3-1003': ['intention-to-treat', 'per-protocol', 'superiority', 'randomised'],
    'op-c-s3-1004': ['swiss cheese', 'defences', 'system', 'fallibility'],
    'op-c-s3-1005': ['surrogate', 'icu', 'decision-making', 'capacity'],
    'op-c-s3-1006': ['fit', 'screening', '45', 'colorectal'],
    'op-c-s3-1007': ['mesothelioma', 'biopsy', 'vats', 'cytology'],
    'op-c-s3-1008': ['reconciliation', 'pharmacist', 'readmission', 'discharge'],
    'op-c-s1-0902': ['weber', 'midbrain', 'peduncle', 'oculomotor'],
    'op-c-s1-0904': ['syphilis', 'dorsal', 'spinal cord', 'roots', 'tabes']
}

for code, kws in checks.items():
    r = next(x for x in ledger['records'] if x['code'] == code)
    pmid = r['pmid']
    ab = fetched[pmid].get('abstract', '').lower()
    found = [kw for kw in kws if kw in ab]
    missing = [kw for kw in kws if kw not in ab]
    print(f"{code} (PMID {pmid}): found={found}, missing={missing}")
