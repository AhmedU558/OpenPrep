import os
import json

old_strings = [
    "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
    "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
    "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
    "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
]

new_string = "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)"

# 1. Update scripts/candidate-authoring/*.ts
for root, dirs, files in os.walk('scripts/candidate-authoring'):
    for f in files:
        if f.endswith('.ts') or f.endswith('.py'):
            fp = os.path.join(root, f)
            txt = open(fp, 'r', encoding='utf-8').read()
            changed = False
            for old_s in old_strings:
                if old_s in txt:
                    txt = txt.replace(old_s, new_string)
                    changed = True
            if changed:
                with open(fp, 'w', encoding='utf-8') as out:
                    out.write(txt)
                print(f"Updated attribution in {fp}")

# 2. Update manifest.json
mf_path = 'content/candidates/manifest.json'
if os.path.exists(mf_path):
    txt = open(mf_path, 'r', encoding='utf-8').read()
    changed = False
    for old_s in old_strings:
        if old_s in txt:
            txt = txt.replace(old_s, new_string)
            changed = True
    if changed:
        with open(mf_path, 'w', encoding='utf-8') as out:
            out.write(txt)
        print("Updated attribution in content/candidates/manifest.json")
