import os
import re

board_pattern = re.compile(r'Clinical Editorial Board|USMLE Review Panel|USMLE Quality Assurance|Editorial Reviewer|Clinical Review Panel|Content Reviewer', re.I)
citation_verified_pattern = re.compile(r'citationVerifiedNotes|citation verified|verified citation', re.I)

findings = []

for root, dirs, files in os.walk('scripts/candidate-authoring'):
    for f in files:
        if f.endswith('.ts') or (f.endswith('.py') and not f.startswith('audit_') and not f.startswith('find_') and not f.startswith('replace_')):
            fp = os.path.join(root, f)
            lines = open(fp, 'r', encoding='utf-8').readlines()
            for idx, line in enumerate(lines):
                if board_pattern.search(line):
                    findings.append((fp, idx + 1, 'board_reviewer', line.strip()))
                if citation_verified_pattern.search(line):
                    findings.append((fp, idx + 1, 'citation_verified', line.strip()))

# Check manifest
if os.path.exists('content/candidates/manifest.json'):
    lines = open('content/candidates/manifest.json', 'r', encoding='utf-8').readlines()
    for idx, line in enumerate(lines):
        if board_pattern.search(line):
            findings.append(('content/candidates/manifest.json', idx + 1, 'board_reviewer', line.strip()))
        if citation_verified_pattern.search(line):
            findings.append(('content/candidates/manifest.json', idx + 1, 'citation_verified', line.strip()))

print(f"Total findings: {len(findings)}")
for fp, lnum, ftype, text in findings[:30]:
    print(f"[{ftype}] {fp}:{lnum} -> {text[:100]}")
