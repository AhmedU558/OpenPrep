import json
import os
import sys

sys.path.append(os.path.dirname(__file__))
from cycle9_authoring_common import validate_item
from build_step1_cycle10_batch41 import get_batch41_step1
from build_step2_cycle10_batch41 import get_batch41_step2
from build_step3_cycle10_batch41 import get_batch41_step3

def write_ts_batch(filename, var_name, items, expected_len):
    if len(items) != expected_len:
        raise ValueError(f"Expected {expected_len} items for {var_name}, got {len(items)}")
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
    s1 = get_batch41_step1()
    s2 = get_batch41_step2()
    s3 = get_batch41_step3()

    write_ts_batch('scripts/candidate-authoring/step1-batch41.ts', 'step1Batch41', s1, 11)
    write_ts_batch('scripts/candidate-authoring/step2-batch41.ts', 'step2Batch41', s2, 18)
    write_ts_batch('scripts/candidate-authoring/step3-batch41.ts', 'step3Batch41', s3, 8)
    print("\nAll 3 Batch 41 TypeScript files written successfully.")
