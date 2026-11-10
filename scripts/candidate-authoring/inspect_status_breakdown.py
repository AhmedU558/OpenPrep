import json

manifest = json.load(open('content/candidates/manifest.json', 'r', encoding='utf-8'))

planted_rejects = []
ordinary_defects = []
unresolved_items = []

for entry in manifest:
    if entry['status'] == 'REJECTED':
        if entry['code'].endswith('0499') or 'Planted QA' in entry.get('rejectionReason', ''):
            planted_rejects.append(entry)
        else:
            ordinary_defects.append(entry)
    elif entry['status'] == 'UNRESOLVED':
        unresolved_items.append(entry)

print(f"Total Rejected: {len(planted_rejects) + len(ordinary_defects)}")
print(f"  Planted QA Rejections: {len(planted_rejects)}")
for r in planted_rejects:
    print(f"    - {r['code']} ({r['exam']}): {r['topic']} -> {r.get('rejectionReason', '')}")

print(f"\n  Ordinary Discovered Defects: {len(ordinary_defects)}")
for d in ordinary_defects:
    print(f"    - {d['code']} ({d['exam']}): {d['topic']} -> {d.get('rejectionReason', '')}")

print(f"\nTotal Unresolved Controversies: {len(unresolved_items)}")
for u in unresolved_items:
    print(f"    - {u['code']} ({u['exam']}): {u['topic']} -> {u.get('rejectionReason', '')}")
