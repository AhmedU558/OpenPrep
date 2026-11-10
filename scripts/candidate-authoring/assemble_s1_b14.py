import json
from gen_s1_b14 import items as p1
from build_step1_b14_part1 import b14_part2 as p2
from build_step1_b14_part2 import b14_remaining as p3

all_items = p1 + p2 + p3
assert len(all_items) == 25, f"Expected 25 items, got {len(all_items)}"

ts_content = "import { CandidateSpec } from './types';\n\nexport const step1Batch14: CandidateSpec[] = " + json.dumps(all_items, indent=2) + ";\n"

with open("scripts/candidate-authoring/step1-batch14.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully assembled step1-batch14.ts with {len(all_items)} items.")
