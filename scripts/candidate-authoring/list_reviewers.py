import os
import re

ts_files = [f for f in os.listdir('scripts/candidate-authoring') if f.endswith('.ts')]
for f in ts_files:
    fp = os.path.join('scripts/candidate-authoring', f)
    txt = open(fp, 'r', encoding='utf-8').read()
    reviewers = re.findall(r'reviewer:\s*[\'"]([^\'"]+)[\'"]', txt)
    if reviewers:
        unique = set(reviewers)
        print(f"{f}: {unique}")
