import json

with open('content/candidates/batch41-claim-mapping-ledger.json', 'r', encoding='utf-8') as f:
    ledger = json.load(f)

# Honest item-level passage assessments:
# (decisiveClaimStatus, distractorExclusionStatus, overallOutcome, distractorEvidenceNote)
honest_assessments = {
    'op-c-s1-1001': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved survey abstract confirms B6-responsiveness in CBS deficiency; does not evaluate or mention cobalamin (Vitamin B12), which is ruled out by biochemical domain knowledge (methionine synthase cofactor).'),
    'op-c-s1-1002': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved study establishes ActA-dependent actin-based motility; does not mention flagellar motility, which is excluded by microbiological temperature regulation (non-flagellated at 37 C).'),
    'op-c-s1-1003': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved review confirms leukocyte NADPH oxidase superoxide failure causes CGD; does not compare myeloperoxidase, which is excluded by respiratory burst enzymology.'),
    'op-c-s1-1004': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved review covers digoxin pharmacology and Fab fragments; notes potassium-binding competition, partially supporting hypokalemia potentiating toxicity while hyperkalemia opposes it.'),
    'op-c-s1-1005': ('PARTIALLY_SUPPORTED', 'UNSUPPORTED', 'PARTIALLY_SUPPORTED',
                     'Retrieved abstract evaluates obinutuzumab in primary membranous nephropathy, partially supporting the disease context; does not explicitly name PLA2R or evaluate anti-GBM collagen IV.'),
    'op-c-s1-1006': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved review highlights sarcomeric gene mutations (MYH7/MYBPC3) in HCM; does not discuss FBN1 (Marfan syndrome), which is ruled out by extracellular matrix vs sarcomere pathology.'),
    'op-c-s1-1007': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved Cochrane review evaluates surfactant replacement in RDS; does not discuss sphingomyelin biochemistry, which is ruled out by developmental phospholipid physiology.'),
    'op-c-s1-1008': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved article reviews HFE genetics and iron overload; does not evaluate ceruloplasmin ferroxidase, which is ruled out by hepcidin-ferroportin axis pathophysiology.'),
    'op-c-s1-1009': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved study documents extra-endocrine manifestations of MEN2B; does not evaluate MEN1 menin loss, which is ruled out by neuroendocrine syndrome genetics.'),
    'op-c-s1-1010': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved case report documents PIGA mutation and FLAER flow cytometry; does not evaluate spectrin/ankyrin (hereditary spherocytosis), excluded by clonal complement lysis mechanism.'),
    'op-c-s1-1011': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved report explicitly identifies IgG against desmoglein 3 causing intraepithelial blisters; contrasts intraepithelial desmosomes with subepithelial hemidesmosomal targets.'),
    'op-c-s2-1001': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved Lancet review affirms open surgery is mandatory for proximal aortic repair; partially supports excluding medical monotherapy which is limited to uncomplicated distal dissections.'),
    'op-c-s2-1002': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved study on intermediate-risk PE explicitly emphasizes management "without systemic/catheter lytic therapy", partially supporting avoidance of full systemic thrombolysis in normotensive patients.'),
    'op-c-s2-1003': ('SUPPORTED', 'SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_SUPPORTED',
                     'Retrieved case report explicitly documents that the patient developed fulminant CDI with ileus "despite a course of oral vancomycin", directly supporting escalation beyond standard oral monotherapy.'),
    'op-c-s2-1004': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved review establishes terlipressin as first-line for HRS-AKI; does not evaluate massive crystalloid hydration, which is ruled out by portal hypertension pathophysiology.'),
    'op-c-s2-1005': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved review analyzes ICU sedation for refractory status epilepticus; does not evaluate oral carbamazepine, excluded by delayed enteral pharmacokinetics.'),
    'op-c-s2-1006': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved review emphasizes GCA is an ophthalmic emergency due to sudden irreversible vision loss; partially supports immediate glucocorticoids over biopsy delay, though biopsy timing is not explicitly detailed in abstract.'),
    'op-c-s2-1007': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved paper explicitly lists corticosteroids and IVIG as standard initial treatments before refractory rescue; partially supports medical management over immediate splenectomy.'),
    'op-c-s2-1008': ('SUPPORTED', 'SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_SUPPORTED',
                     'Retrieved study explicitly affirms that step-up treatment has reduced the need for open pancreatic necrosectomy, directly supporting minimally invasive drainage over immediate open laparotomy.'),
    'op-c-s2-1009': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved review outlines stepwise integration of pharmacological, mechanical, and surgical interventions; partially supports intrauterine balloon tamponade before definitive hysterectomy.'),
    'op-c-s2-1010': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved AHA guidelines highlight vasculitis and aneurysm risk; does not evaluate acetaminophen monotherapy, ruled out by lack of anti-inflammatory efficacy in vasculitis.'),
    'op-c-s2-1011': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved study establishes tension pneumothorax treatment with needle decompression or thoracostomy; does not discuss delaying for chest radiograph, excluded by emergency airway/breathing dogma.'),
    'op-c-s2-1012': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved review defines NMS clinical tetrad and rhabdomyolysis; does not evaluate succinylcholine, excluded by hyperkalemic cardiac arrest contraindication.'),
    'op-c-s2-1013': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved report highlights thyroid crisis pathology; does not detail the sequence of thionamides before iodine, which relies on Jod-Basedow pathophysiological principles.'),
    'op-c-s2-1014': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved abstract highlights methotrexate-based medical approaches for ectopic pregnancy; partially supports conservative medical management over radical bilateral oophorectomy.'),
    'op-c-s2-1015': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved target trial emulation explicitly studies vasopressor escalation after initial norepinephrine in septic shock; partially supports norepinephrine as first-line over dopamine.'),
    'op-c-s2-1016': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved cases analyze SCORTEN in SJS/TEN; does not discuss surgical mechanical debridement, excluded by conservative epidermal barrier preservation dogma.'),
    'op-c-s2-1017': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved study suggests fasciotomy when compartment differential pressure is <= 30 mmHg; does not evaluate limb elevation/tight bandaging, excluded by perfusion pressure physiology.'),
    'op-c-s2-1018': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved review details medical pressure lowering before laser iridotomy; partially supports avoiding mydriatics by identifying iridocorneal angle blockage as the causal mechanism.'),
    'op-c-s3-1001': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved comparative study evaluates STOPPFrail for identifying PIMs in severely frail inpatients; partially supports deprescribing tight glycemic agents, though specific HbA1c threshold is in full text.'),
    'op-c-s3-1002': ('SUPPORTED', 'SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_SUPPORTED',
                     'Retrieved narrative review explicitly warns against the core clinical error of "undertreating congestion because serum creatinine rises", directly refuting holding diuretics and giving saline.'),
    'op-c-s3-1003': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved trial abstract presents a randomized superiority trial conducted under ITT; partially supports ITT preserving baseline prognostic balance, though methodological critique is standard trial design principles.'),
    'op-c-s3-1004': ('SUPPORTED', 'SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_SUPPORTED',
                     'Retrieved BMJ text explicitly contrasts the person approach ("blaming them for forgetfulness, inattention") with the system approach ("build defences to avert errors"), directly refuting individual disciplinary blame.'),
    'op-c-s3-1005': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved qualitative study examines surrogate decision-making dynamics in ICU; does not evaluate emergency court guardianship, excluded by legal healthcare proxy statutes.'),
    'op-c-s3-1006': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved study evaluates community FIT distribution in safety-net populations; does not discuss age 50 threshold, which relies on USPSTF 2021 guideline revision.'),
    'op-c-s3-1007': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved mesothelioma study analyzes stromal TILs from surgical specimens; does not evaluate pleural cytology yield, which relies on pleural effusion diagnostic guidelines.'),
    'op-c-s3-1008': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved study validates pharmacist-led multi-component TOC service reducing 30-day readmissions; partially supports comprehensive reconciliation over passive printed lists.'),
    'op-c-s1-0902': ('SUPPORTED', 'PARTIALLY_SUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_PARTIAL',
                     'Retrieved StatPearls chapter details midbrain peduncle and CN III anatomy in Weber syndrome; partially supports excluding dorsal pontine CN VI syndromes by neuroanatomical localization.'),
    'op-c-s1-0904': ('SUPPORTED', 'UNSUPPORTED', 'CLAIM_SUPPORTED_DISTRACTOR_UNSUPPORTED',
                     'Retrieved clinical monograph describes neurosyphilis involving spinal cord and roots; does not evaluate ALS anterior horn motor neuron disease, which is excluded by sensory vs motor tract anatomy.')
}

claim_status_counts = {'SUPPORTED': 0, 'PARTIALLY_SUPPORTED': 0, 'UNSUPPORTED': 0}
dist_status_counts = {'SUPPORTED': 0, 'PARTIALLY_SUPPORTED': 0, 'UNSUPPORTED': 0}
overall_counts = {}

updated_records = []
for r in ledger['records']:
    code = r['code']
    c_stat, d_stat, o_stat, d_note = honest_assessments[code]
    
    claim_status_counts[c_stat] += 1
    dist_status_counts[d_stat] += 1
    overall_counts[o_stat] = overall_counts.get(o_stat, 0) + 1
    
    # Update claimMapping object with honest, nuanced evaluation
    cm = r['claimMapping']
    cm['decisiveClaimStatus'] = c_stat
    cm['distractorExclusionStatus'] = d_stat
    cm['overallVerificationOutcome'] = o_stat
    cm['distractorPassageEvidenceNote'] = d_note
    
    # Remove simplistic boolean unconditional flags
    cm['supportsAnswerByPassage'] = (c_stat == 'SUPPORTED')
    cm['excludesDistractorByPassage'] = (d_stat == 'SUPPORTED')
    cm.pop('claimMappingVerified', None)
    cm.pop('supportsAnswer', None)
    cm.pop('excludesStrongestDistractor', None)
    
    updated_records.append(r)

new_ledger = {
    'totalRecords': len(updated_records),
    'decisiveClaimStatusSummary': claim_status_counts,
    'distractorExclusionStatusSummary': dist_status_counts,
    'overallOutcomeSummary': overall_counts,
    'records': updated_records
}

with open('content/candidates/batch41-claim-mapping-ledger.json', 'w', encoding='utf-8') as f:
    json.dump(new_ledger, f, indent=2, ensure_ascii=False)

# Update batch41-retrieval-audit.json
audit = {
    'totalChecked': len(updated_records),
    'bibliographicIdentityVerified': 39,
    'decisiveClaimStatusSummary': claim_status_counts,
    'distractorExclusionStatusSummary': dist_status_counts,
    'overallOutcomeSummary': overall_counts,
    'missingFromNcbi': 0,
    'mismatchesFlagged': 0,
    'records': [{
        'code': r['code'],
        'pmid': r['pmid'],
        'exam': r['exam'],
        'topic': r['topic'],
        'decisiveClaimStatus': honest_assessments[r['code']][0],
        'distractorExclusionStatus': honest_assessments[r['code']][1],
        'overallOutcome': honest_assessments[r['code']][2],
        'retrievalDate': '2026-11-08'
    } for r in updated_records]
}

with open('content/candidates/batch41-retrieval-audit.json', 'w', encoding='utf-8') as f:
    json.dump(audit, f, indent=2, ensure_ascii=False)

print("Successfully updated claim mapping ledger and retrieval audit with honest outcomes.")
print("Decisive Claim Status:", claim_status_counts)
print("Distractor Exclusion Status:", dist_status_counts)
print("Overall Outcomes:", overall_counts)
