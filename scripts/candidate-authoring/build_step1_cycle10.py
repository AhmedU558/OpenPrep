import json
import os
import sys
from cycle9_authoring_common import validate_item

sys.path.append(os.path.dirname(__file__))
import build_step1_cycle10_part1 as p1
import build_step1_cycle10_part2 as p2
import build_step1_cycle10_part3 as p3
import build_step1_cycle10_part4 as p4

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
    write_ts_batch('scripts/candidate-authoring/step1-batch37.ts', 'step1Batch37', p1.get_batch37())
    write_ts_batch('scripts/candidate-authoring/step1-batch38.ts', 'step1Batch38', p2.get_batch38())
    write_ts_batch('scripts/candidate-authoring/step1-batch39.ts', 'step1Batch39', p3.get_batch39())
    write_ts_batch('scripts/candidate-authoring/step1-batch40.ts', 'step1Batch40', p4.get_batch40())
    print("All Step 1 Cycle 10 batches generated.")
