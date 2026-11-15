import json
import re

def apply_resolutions():
    with open('content/candidates/cycle10-pmid-resolutions.json', 'r', encoding='utf-8') as f:
        res = json.load(f)['resolved']

    print(f"Loaded {len(res)} resolutions to apply.")

    for b in [37, 38, 39]:
        ts_path = f'scripts/candidate-authoring/step1-batch{b}.ts'
        with open(ts_path, 'r', encoding='utf-8') as f:
            ts_content = f.read()

        # Extract items JSON from ts
        prefix = f"import {{ CandidateSpec }} from './types';\n\nexport const step1Batch{b}: CandidateSpec[] = "
        suffix = ";\n"
        if not ts_content.startswith(prefix):
            print(f"Warning: Unexpected format in {ts_path}")
            continue

        raw_json = ts_content[len(prefix):-len(suffix)]
        items = json.loads(raw_json)
        updated_count = 0

        for item in items:
            code = item['code']
            if code in res:
                info = res[code]
                item['citation'] = info['new_label']
                # If there are references, update them as well
                if 'references' in item:
                    item['references'] = [{
                        'url': f"https://pubmed.ncbi.nlm.nih.gov/{info['new_pmid']}/",
                        'label': info['new_label']
                    }]
                updated_count += 1

        new_ts_content = prefix + json.dumps(items, indent=2) + suffix
        with open(ts_path, 'w', encoding='utf-8') as f:
            f.write(new_ts_content)
        print(f"Updated {updated_count} items in {ts_path}")

if __name__ == '__main__':
    apply_resolutions()
