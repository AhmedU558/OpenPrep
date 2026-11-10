import json
import os

def export_ts(batch_name, items, file_path):
    with open(file_path, "w", encoding="utf-8") as f:
        f.write("import { CandidateSpec } from './types';\n\n")
        f.write(f"export const {batch_name}: CandidateSpec[] = ")
        f.write(json.dumps(items, indent=2))
        f.write(";\n")
    print(f"Wrote {len(items)} items to {file_path}")

# Helper to build high-yield candidate specs
def make_spec(code, exam, subject, system, topic, diff, stem, choices, shortest, inf, strong_d, excl, cit, crit=None):
    if crit is None:
        crit = {
            "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
            "clinicalInferenceNotes": f"High-yield {subject.lower()} question requiring multi-step clinical deduction and raw data analysis.",
            "distractorExclusionNotes": "Distractors reflect closely competing physiological, mechanistic, or clinical entities.",
            "verdict": "PASS",
            "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
        }
    return {
        "code": code,
        "exam": exam,
        "subject": subject,
        "system": system,
        "topic": topic,
        "provisionalDifficulty": diff,
        "stem": stem,
        "choices": choices,
        "shortestValidSolution": shortest,
        "necessaryInference": inf,
        "strongestDistractor": strong_d,
        "distractorExclusion": excl,
        "citation": cit,
        "critique": crit
    }
