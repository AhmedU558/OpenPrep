import json
import os

tax = json.load(open('content/bank/taxonomy.json', 'r', encoding='utf-8'))
allowed_subjects = set(tax['subjects'])
allowed_systems = set(tax['systems'])

invalid_found = []

for s in ['step1', 'step2', 'step3']:
    for b in range(17, 21):
        fp = f'scripts/candidate-authoring/{s}-batch{b}.ts'
        items = json.loads(open(fp, 'r', encoding='utf-8').read().split('CandidateSpec[] = ')[1].rstrip(';\n'))
        for it in items:
            subj = it.get('subject')
            sys_name = it.get('system')
            if subj not in allowed_subjects:
                invalid_found.append((fp, it['code'], 'subject', subj))
            if sys_name not in allowed_systems:
                invalid_found.append((fp, it['code'], 'system', sys_name))

print(f"Total taxonomy issues found: {len(invalid_found)}")
for fp, code, field, val in invalid_found:
    print(f"  {code} in {os.path.basename(fp)}: invalid {field} '{val}'")
