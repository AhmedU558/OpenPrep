import json
import os
import sys
from cycle9_authoring_common import validate_item

sys.path.append(os.path.dirname(__file__))
import build_step2_cycle10_part1 as b37_p1
import build_step2_cycle10_part2 as b37_p2

import build_step2_cycle10_part3 as b38_p1
import build_step2_cycle10_part4 as b38_p2
import build_step2_cycle10_part5 as b38_p3

import build_step2_cycle10_batch39_part1 as b39_p1
import build_step2_cycle10_batch39_part2 as b39_p2

import build_step2_cycle10_batch40_part1 as b40_p1
import build_step2_cycle10_batch40_part2 as b40_p2

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
    b37 = b37_p1.get_batch37() + b37_p2.get_batch37_part2()
    b38 = b38_p1.get_batch38() + b38_p2.get_batch38_part2() + b38_p3.get_batch38_part3()
    b39 = b39_p1.get_batch39() + b39_p2.get_batch39_part2()
    b40 = b40_p1.get_batch40_part1() + b40_p2.get_batch40_part2()

    write_ts_batch('scripts/candidate-authoring/step2-batch37.ts', 'step2Batch37', b37)
    write_ts_batch('scripts/candidate-authoring/step2-batch38.ts', 'step2Batch38', b38)
    write_ts_batch('scripts/candidate-authoring/step2-batch39.ts', 'step2Batch39', b39)
    write_ts_batch('scripts/candidate-authoring/step2-batch40.ts', 'step2Batch40', b40)
    print("All Step 2 CK Cycle 10 batches generated.")
