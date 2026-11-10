import re
import glob
import json

for filepath in sorted(glob.glob('scripts/candidate-authoring/step*.ts')):
    if not ('batch21' in filepath or 'batch22' in filepath or 'batch23' in filepath or 'batch24' in filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    # find lines with "citation": "..."
    matches = re.findall(r'"code":\s*"([^"]+)",[\s\S]*?"citation":\s*"([^"]+)"', content)
    for code, cit in matches:
        has_pmid = bool(re.search(r'PMID:\s*\d+', cit, re.I))
        has_nlm = bool(re.search(r'NLM ID:\s*\d+', cit, re.I))
        has_doi = bool(re.search(r'DOI:\s*[^\s,;]+', cit, re.I))
        has_url = bool(re.search(r'https?://[^\s,;]+', cit, re.I))
        has_legal = any(k in cit for k in ['EMTALA', '1395dd', '42 CFR', 'Joint Commission', 'American Medical Association', 'American Psychiatric Association', 'Code of Medical Ethics'])
        if not (has_pmid or has_nlm or has_doi or has_url or has_legal):
            print(f"MISSING in {filepath} for {code}: {cit}")
