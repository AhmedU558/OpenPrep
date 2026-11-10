import json
import os

tax = json.load(open('content/bank/taxonomy.json', 'r', encoding='utf-8'))
allowed_subjects = set(tax['subjects'])
allowed_systems = set(tax['systems'])

for s in ['step1', 'step2', 'step3']:
    for b in range(17, 21):
        fp = f'scripts/candidate-authoring/{s}-batch{b}.ts'
        content = open(fp, 'r', encoding='utf-8').read()
        prefix = content.split('CandidateSpec[] = ')[0] + 'CandidateSpec[] = '
        items = json.loads(content.split('CandidateSpec[] = ')[1].rstrip(';\n'))
        modified = False
        for it in items:
            if it.get('system') == 'Infectious Disease':
                it['system'] = 'General Principles'
                modified = True
            if it.get('subject') == 'Anesthesiology':
                it['subject'] = 'Surgery'
                modified = True
        if modified:
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(prefix + json.dumps(items, indent=2) + ";\n")
            print(f"Fixed taxonomy in {fp}")
