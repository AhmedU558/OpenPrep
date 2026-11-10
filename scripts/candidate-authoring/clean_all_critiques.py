import os
import json
import re

AI_REVIEWER = "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)"
FORMAT_NOTE = "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."

# 1. Process all ts files in scripts/candidate-authoring
ts_files = [f for f in os.listdir('scripts/candidate-authoring') if f.endswith('.ts') and ('step1-batch' in f or 'step2-batch' in f or 'step3-batch' in f)]

for f in ts_files:
    fp = os.path.join('scripts/candidate-authoring', f)
    txt = open(fp, 'r', encoding='utf-8').read()
    if 'CandidateSpec[] = ' not in txt:
        continue
    
    parts = txt.split('CandidateSpec[] = ')
    prefix = parts[0] + 'CandidateSpec[] = '
    raw_json = parts[1].rstrip(';\n')
    
    try:
        items = json.loads(raw_json)
    except Exception as e:
        print(f"Failed to parse JSON in {f}: {e}")
        continue
    
    modified = False
    for it in items:
        crit = it.get('critique')
        if crit:
            # Replace reviewer
            if crit.get('reviewer') != AI_REVIEWER:
                crit['reviewer'] = AI_REVIEWER
                modified = True
            
            # Replace "citationFormatNotes"
            if "citationFormatNotes" in crit:
                crit['citationFormatNotes'] = FORMAT_NOTE
                del crit["citationFormatNotes"]
                modified = True
            elif 'citationFormatNotes' in crit:
                crit['citationFormatNotes'] = FORMAT_NOTE
                modified = True
    
    if modified:
        new_txt = prefix + json.dumps(items, indent=2) + ";\n"
        with open(fp, 'w', encoding='utf-8') as out:
            out.write(new_txt)
        print(f"Cleaned critiques in {f}")

# 2. Process content/candidates/manifest.json
mf_path = 'content/candidates/manifest.json'
if os.path.exists(mf_path):
    manifest = json.load(open(mf_path, 'r', encoding='utf-8'))
    for entry in manifest:
        crit = entry.get('critique')
        if crit:
            crit['reviewer'] = AI_REVIEWER
            if "citationFormatNotes" in crit:
                crit['citationFormatNotes'] = FORMAT_NOTE
                del crit["citationFormatNotes"]
            elif 'citationFormatNotes' in crit:
                crit['citationFormatNotes'] = FORMAT_NOTE
    with open(mf_path, 'w', encoding='utf-8') as out:
        json.dump(manifest, out, indent=2)
    print("Cleaned critiques in content/candidates/manifest.json")
