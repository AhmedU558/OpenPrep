import json
from gen_s1_b13 import items as part1
from gen_s1_b13_part2 import items_part2 as part2

all_items = part1 + part2
assert len(all_items) == 25, f"Expected 25 items, got {len(all_items)}"

ts_content = "import { CandidateSpec } from './types';\n\nexport const step1Batch13: CandidateSpec[] = " + json.dumps(all_items, indent=2) + ";\n"

with open("scripts/candidate-authoring/step1-batch13.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully assembled step1-batch13.ts with {len(all_items)} items.")
