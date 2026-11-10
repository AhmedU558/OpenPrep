import sys
import os
import json

sys.path.append(os.path.join(os.path.dirname(__file__)))

import build_step1_b19_part1 as m1
import build_step1_b19_part2 as m2

all_items = m1.items_b19_part1 + m2.items_b19_part2

print(f"Total items in step1-batch19: {len(all_items)}")
assert len(all_items) == 25

expected_codes = [f"op-c-s1-{i:04d}" for i in range(451, 476)]
actual_codes = [it["code"] for it in all_items]
assert actual_codes == expected_codes, f"Code mismatch: {actual_codes} vs {expected_codes}"

ts_content = "import { CandidateSpec } from './types';\n\nexport const step1Batch19: CandidateSpec[] = " + json.dumps(all_items, indent=2) + ";\n"

with open("scripts/candidate-authoring/step1-batch19.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully wrote scripts/candidate-authoring/step1-batch19.ts")
