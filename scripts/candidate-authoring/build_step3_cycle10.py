import json
import os
import sys
from cycle9_authoring_common import validate_item

sys.path.append(os.path.dirname(__file__))
import build_step3_cycle10_b37_part1 as b37_1
import build_step3_cycle10_b37_part2 as b37_2

import build_step3_cycle10_b38_part1 as b38_1
import build_step3_cycle10_b38_part2 as b38_2

import build_step3_cycle10_b39_part1 as b39_1
import build_step3_cycle10_b39_part2 as b39_2

import build_step3_cycle10_b40_part1 as b40_1
import build_step3_cycle10_b40_part2 as b40_2

def write_ts_batch(filename, var_name, items):
    if len(items) != 25:
        raise ValueError(f"Expected 25 items for {var_name}, got {len(items)}")
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
    b37 = b37_1.get_batch37_part1() + b37_2.get_batch37_part2()
    b38 = b38_1.get_batch38_part1() + b38_2.get_batch38_part2()
    b39 = b39_1.get_batch39_part1() + b39_2.get_batch39_part2()
    b40 = b40_1.get_batch40_part1() + b40_2.get_batch40_part2()

    all_items = b37 + b38 + b39 + b40
    print(f"Total Step 3 Cycle 10 items: {len(all_items)}")

    diff4 = sum(1 for it in all_items if it['provisionalDifficulty'] == 4)
    diff5 = sum(1 for it in all_items if it['provisionalDifficulty'] == 5)
    print(f"Difficulty breakdown: 4={diff4}, 5={diff5} ({diff5/len(all_items)*100:.1f}% difficulty 5)")

    write_ts_batch('scripts/candidate-authoring/step3-batch37.ts', 'step3Batch37', b37)
    write_ts_batch('scripts/candidate-authoring/step3-batch38.ts', 'step3Batch38', b38)
    write_ts_batch('scripts/candidate-authoring/step3-batch39.ts', 'step3Batch39', b39)
    write_ts_batch('scripts/candidate-authoring/step3-batch40.ts', 'step3Batch40', b40)
    print("All Step 3 Cycle 10 batches generated.")
