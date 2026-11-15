import json

manifest_path = 'content/candidates/manifest.json'
with open(manifest_path, 'r', encoding='utf-8') as f:
    manifest = json.load(f)

s1_batches = [f'content/candidates/step1/batch-{i:02d}.json' for i in range(1, 13)]
s2_batches = [f'content/candidates/step2ck/batch-{i:02d}.json' for i in range(1, 11)]
s3_batches = [f'content/candidates/step3/batch-{i:02d}.json' for i in range(1, 9)]
target_batch_files = set(s1_batches + s2_batches + s3_batches)

count_reclassified = 0
dispositions_count = {'RETAIN': 0, 'REVISE': 0, 'UNRESOLVED': 0}

for m in manifest:
    if m.get('batchFile') in target_batch_files and m.get('status') in ['STRUCTURALLY_VALID', 'EDITORIALLY_SCREENED']:
        code = m['code']
        bf = m['batchFile']
        exam = m['exam']
        topic = m.get('topic', '')
        sol = m.get('shortestValidSolution', '')
        inf = m.get('necessaryInference', '')
        dist = m.get('strongestDistractor', '')
        excl = m.get('distractorExclusion', '')
        
        # Load batch item for option metrics
        items = json.load(open(bf, 'r', encoding='utf-8'))
        q = next(x for x in items if x['code'] == code)
        opts = q.get('options', [])
        correct_opt = next(o for o in opts if o.get('correct'))
        dist_lens = [len(o['text']) for o in opts if not o.get('correct')]
        avg_dist_len = sum(dist_lens) / max(len(dist_lens), 1)
        
        # Determine genuine disposition
        if topic == 'Acute Angle-Closure Glaucoma Immediate Medical Management Sequence' and code == 'op-c-s2-0112':
            disp = 'UNRESOLVED'
            verdict = 'UNRESOLVED'
            notes = 'Flagged as UNRESOLVED: Duplicate objective with op-c-s2-0057; pending panel determination on deduplication or replacement.'
        elif len(correct_opt['text']) > 2.2 * avg_dist_len or len(correct_opt['text']) < 0.4 * avg_dist_len:
            disp = 'REVISE'
            verdict = 'REVISE'
            notes = f"Flagged as REVISE: Option length disparity (correct option {len(correct_opt['text'])} chars vs average distractor {avg_dist_len:.1f} chars); requires distractor length rebalancing."
        elif len(sol) < 45:
            disp = 'REVISE'
            verdict = 'REVISE'
            notes = f"Flagged as REVISE: Short solution path ({len(sol)} chars); requires editorial enrichment of diagnostic inference steps."
        else:
            disp = 'RETAIN'
            verdict = 'PASS'
            notes = 'Provisional author rationale documented. Clinical inference and distractor plausibility meet initial structural criteria; pending independent clinical panel evaluation.'
        
        critique = {
            'reviewer': 'Authoring Pipeline (Provisional AI Evaluation; Independent Review Pending)',
            'evaluationStatus': 'PROVISIONAL_PENDING_INDEPENDENT_EVALUATION',
            'isProvisional': True,
            'disposition': disp,
            'verdict': verdict,
            'editorialNotes': notes,
            'authorRationale': {
                'necessaryInference': inf,
                'shortestValidSolution': sol,
                'strongestDistractor': dist,
                'distractorExclusion': excl
            },
            'clinicalInferenceNotes': f"{exam} clinical reasoning on {topic}. Inference: {inf}",
            'distractorExclusionNotes': f"Strongest competitor '{dist}' excluded: {excl}",
            'shortestValidSolution': sol,
            'strongestCompetitor': dist,
            'decisiveExclusion': excl,
            'citationFormatNotes': 'Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.'
        }
        
        m['critique'] = critique
        m['status'] = 'STRUCTURALLY_VALID'  # Label as structurally valid / provisional only!
        count_reclassified += 1
        dispositions_count[disp] += 1

with open(manifest_path, 'w', encoding='utf-8') as f:
    json.dump(manifest, f, indent=2, ensure_ascii=False)

print(f"Successfully reclassified {count_reclassified} candidates as provisional in manifest.json.")
print("Dispositions assigned:")
for k, v in dispositions_count.items():
    print(f"  {k}: {v}")
