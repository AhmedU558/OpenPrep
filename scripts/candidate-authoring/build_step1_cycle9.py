"""
Step 1 Cycle 9 Builder: Batches 33-36 (op-c-s1-0801 to op-c-s1-0900)
"""

import json
from cycle9_authoring_common import validate_item

# Helper to format TS file
def write_ts_batch(filename, var_name, items):
    for it in items:
        errs = validate_item(it)
        if errs:
            raise ValueError(f"Validation failed for {it['code']}: {errs}")
    content = f"import {{ CandidateSpec }} from './types';\n\nexport const {var_name}: CandidateSpec[] = "
    content += json.dumps(items, indent=2) + ";\n"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Wrote {len(items)} items to {filename}")

if __name__ == '__main__':
    print("Step 1 Cycle 9 Builder Helper loaded.")
