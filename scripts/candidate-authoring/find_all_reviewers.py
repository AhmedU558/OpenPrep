import os
import re

for root, dirs, files in os.walk('scripts/candidate-authoring'):
    for f in files:
        if f.endswith('.ts') or f.endswith('.py'):
            fp = os.path.join(root, f)
            txt = open(fp, 'r', encoding='utf-8').read()
            matches = re.findall(r'[\'"]?reviewer[\'"]?\s*:\s*[\'"]([^\'"]+)[\'"]', txt)
            for m in set(matches):
                if m != "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)":
                    print(f"{fp} has non-standard reviewer: "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)"")
