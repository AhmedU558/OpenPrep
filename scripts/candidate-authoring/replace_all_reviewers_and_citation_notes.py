import os
import re
import json

AI_REVIEWER = "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)"
FORMAT_NOTE = "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."

# Target directories: scripts/candidate-authoring
for root, dirs, files in os.walk('scripts/candidate-authoring'):
    for f in files:
        if f.endswith('.ts') or f.endswith('.py'):
            fp = os.path.join(root, f)
            txt = open(fp, 'r', encoding='utf-8').read()
            original = txt
            
            # Replace reviewer patterns
            txt = re.sub(r'([\'"]?reviewer[\'"]?\s*:\s*)[\'"][^\'"]+[\'"]', rf'\1"{AI_REVIEWER}"', txt)
            
            # Replace "citationFormatNotes" key
            txt = re.sub(r'[\'"]?"citationFormatNotes"[\'"]?', '"citationFormatNotes"', txt)
            
            # Replace citation verified assertions in critique strings
            txt = re.sub(r'([\'"]?citationFormatNotes[\'"]?\s*:\s*)[\'"][^\'"]+[\'"]', rf'\1"{FORMAT_NOTE}"', txt)
            
            if txt != original:
                with open(fp, 'w', encoding='utf-8') as out:
                    out.write(txt)
                print(f"Updated {fp}")

# Also update content/candidates/manifest.json
mf_path = 'content/candidates/manifest.json'
if os.path.exists(mf_path):
    manifest = json.load(open(mf_path, 'r', encoding='utf-8'))
    for entry in manifest:
        crit = entry.get('critique')
        if crit:
            crit['reviewer'] = AI_REVIEWER
            if "citationFormatNotes" in crit:
                del crit["citationFormatNotes"]
            crit['citationFormatNotes'] = FORMAT_NOTE
    with open(mf_path, 'w', encoding='utf-8') as out:
        json.dump(manifest, out, indent=2)
    print("Updated content/candidates/manifest.json")
