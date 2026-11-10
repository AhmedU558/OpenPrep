import json

with open('content/candidates/manifest.json', 'r', encoding='utf-8') as f:
    manifest = json.load(f)

rejected = [m for m in manifest if m.get('status') == 'REJECTED']
unresolved = [m for m in manifest if m.get('status') == 'UNRESOLVED']

print(f"Total Rejected in Manifest: {len(rejected)}")
for r in rejected:
    print(f"  [{r['exam']}] {r['code']} ({r['subject']} - {r['system']}): {r['topic']}")

print(f"\nTotal Unresolved in Manifest: {len(unresolved)}")
for u in unresolved:
    print(f"  [{u['exam']}] {u['code']} ({u['subject']} - {u['system']}): {u['topic']}")
