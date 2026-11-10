import sys
import os
import json

sys.path.append(os.path.join(os.path.dirname(__file__)))

import build_step3_b20_part1 as m1
import build_step3_b20_part2 as m2

all_items = m1.items_s3_b20_part1 + m2.items_s3_b20_part2

print(f"Total items in step3-batch20: {len(all_items)}")
assert len(all_items) == 25, f"Expected 25 items, got {len(all_items)}"

expected_codes = [f"op-c-s3-{i:04d}" for i in range(476, 501)]
actual_codes = [it["code"] for it in all_items]
assert actual_codes == expected_codes, f"Code mismatch: {actual_codes} vs {expected_codes}"

ts_content = "import { CandidateSpec } from './types';\n\nexport const step3Batch20: CandidateSpec[] = " + json.dumps(all_items, indent=2) + ";\n"

with open("scripts/candidate-authoring/step3-batch20.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully wrote scripts/candidate-authoring/step3-batch20.ts")
