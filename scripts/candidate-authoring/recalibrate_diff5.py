import json
import re

# Recalibrate recognition-heavy items from 5 to 4 based on shortest valid solution
RECALIBRATE_CODES = {
    # Step 1 Batch 34 (Classic Inborn Errors of Metabolism - 1-2 step enzyme recognition)
    'op-c-s1-0826': 'Classic neonatal hyperammonemia with elevated urinary orotic acid points directly to OTC deficiency.',
    'op-c-s1-0827': 'Maple syrup urine disease diagnosis from sweet odor and branched-chain ketoacid dehydrogenase deficiency is standard recall.',
    'op-c-s1-0830': 'Inferonasal lens dislocation and marfanoid habitus is classic recognition of cystathionine beta-synthase deficiency.',
    'op-c-s1-0838': 'Post-exercise rhabdomyolysis in young adults is classic recognition of CPT II deficiency.',
    'op-c-s1-0839': 'Fasting hypoketotic hypoglycemia with elevated C8 octanoylcarnitine is classic recognition of MCAD deficiency.',
    'op-c-s1-0840': 'Pyruvate dehydrogenase complex deficiency and ketogenic diet is standard biochemical recall.',
    'op-c-s1-0842': 'Hereditary fructose intolerance aldolase B deficiency is classic dietary recognition.',
    'op-c-s1-0844': 'Classic galactosemia GALT deficiency with cataracts and E. coli sepsis is standard recognition.',
    'op-c-s1-0846': 'G6PD deficiency bite cells and Heinz bodies on oxidative stress is classic recognition.',
    'op-c-s1-0847': 'HFE C282Y mutation in hemochromatosis is standard genetic recall.',
    'op-c-s1-0849': 'Menkes disease ATP7A copper transporter defect is standard recognition.',
    'op-c-s1-0850': 'Alpha-1 antitrypsin PiZZ misfolded protein accumulation in liver is classic recognition.',

    # Step 1 Batch 36 (Classic Translocations & Oncogenes - single-step cytogenetic recall)
    'op-c-s1-0876': 't(8;14) c-MYC translocation in Burkitt lymphoma is 1-step cytogenetic recall.',
    'op-c-s1-0877': 't(14;18) BCL-2 translocation in follicular lymphoma is 1-step cytogenetic recall.',
    'op-c-s1-0878': 't(11;14) cyclin D1 translocation in mantle cell lymphoma is 1-step cytogenetic recall.',
    'op-c-s1-0879': 't(9;22) BCR-ABL1 in CML is 1-step cytogenetic recall.',
    'op-c-s1-0880': 't(15;17) PML-RARA in acute promyelocytic leukemia is 1-step cytogenetic recall.',
    'op-c-s1-0881': 't(11;22) EWSR1-FLI1 in Ewing sarcoma is 1-step cytogenetic recall.',
    'op-c-s1-0882': 't(X;18) SS18-SSX in synovial sarcoma is 1-step cytogenetic recall.',
    'op-c-s1-0883': 't(2;13) PAX3-FOXO1 in alveolar rhabdomyosarcoma is 1-step cytogenetic recall.',
    'op-c-s1-0884': 'MYCN amplification in neuroblastoma is 1-step cytogenetic recall.',
    'op-c-s1-0885': 'RB1 two-hit inactivation in retinoblastoma is 1-step genetic recall.',
    'op-c-s1-0886': 'TP53 germline mutation in Li-Fraumeni is 1-step genetic recall.',
    'op-c-s1-0887': 'MSH2/MLH1 mismatch repair in Lynch syndrome is 1-step genetic recall.',
    'op-c-s1-0888': 'APC mutation in familial adenomatous polyposis is 1-step genetic recall.',
    'op-c-s1-0889': 'VHL mutation and HIF-1alpha stabilization in von Hippel-Lindau is 1-step recall.',
    'op-c-s1-0890': 'MEN1 menin tumor suppressor loss is 1-step recall.',
    'op-c-s1-0891': 'RET gain-of-function mutation in MEN2B is 1-step recall.',
    'op-c-s1-0892': 'NF1 neurofibromin GAP activity loss is 1-step recall.',
    'op-c-s1-0893': 'NF2 merlin protein loss in bilateral acoustic neuromas is 1-step recall.',
    'op-c-s1-0894': 'TSC1/TSC2 hamartin/tuberin loss and mTOR activation is 1-step recall.',
    'op-c-s1-0895': 'GNAQ somatic mosaicism in Sturge-Weber syndrome is 1-step recall.',
    'op-c-s1-0896': 'SMN1 deletion with SMN2 copy modifier in SMA is 1-step recall.',
    'op-c-s1-0897': 'C9orf72 repeat expansion with TDP-43 in ALS is 1-step recall.',
    'op-c-s1-0898': 'PMP22 duplication in Charcot-Marie-Tooth type 1A is 1-step recall.',
    'op-c-s1-0899': 'Postsynaptic AChR autoantibodies in myasthenia gravis is 1-step recall.',
    'op-c-s1-0900': 'Presynaptic P/Q-type calcium channel autoantibodies in Lambert-Eaton is 1-step recall.',

    # Step 2 CK (Classic Acute Emergencies & Algorithmic Protocols - 1-2 step recognition)
    'op-c-s2-0801': 'Beck triad and pulsus paradoxus in cardiac tamponade treated with pericardiocentesis is classic recognition.',
    'op-c-s2-0803': 'Ascitic PMN count >= 250 in spontaneous bacterial peritonitis treated with cefotaxime/albumin is standard protocol.',
    'op-c-s2-0805': 'Stevens-Johnson syndrome / toxic epidermal necrolysis transfer to burn center is standard guideline.',
    'op-c-s2-0808': 'Pheochromocytoma preoperative alpha-blockade before beta-blockade is standard guideline recall.',
    'op-c-s2-0811': 'Carbon monoxide poisoning treated with 100% normobaric/hyperbaric oxygen is standard protocol.',
    'op-c-s2-0813': 'Acute angle-closure glaucoma treated with topical pressure-lowering drops and acetazolamide is standard emergency care.',
    'op-c-s2-0815': 'Malignant epidural spinal cord compression treated with dexamethasone and emergent MRI is standard protocol.',
    'op-c-s2-0817': 'Serotonin syndrome clonus and hyperreflexia treated with cyproheptadine is classic emergency care.',
    'op-c-s2-0820': 'Reynolds pentad in acute suppurative cholangitis managed with emergent ERCP is standard protocol.',
    'op-c-s2-0822': 'Burch-Wartofsky score and multi-drug therapy for thyroid storm is standard algorithmic protocol.',
    'op-c-s2-0824': 'Status epilepticus algorithmic escalation (lorazepam followed by fosphenytoin/levetiracetam) is standard protocol.',

    # Step 3 (Standard Management & Guideline Applications - 1-2 step shortest solution)
    'op-c-s3-0801': 'ESRD on hemodialysis with AF managed with apixaban is standard pharmacokinetic application.',
    'op-c-s3-0828': 'Post-extubation stridor cuff leak test and steroid prophylaxis is standard algorithmic care.',
    'op-c-s3-0845': 'Targeted temperature management normothermia (36-37.5 C) protocol is standard post-arrest care.',
    'op-c-s3-0846': 'Brain death apnea test prerequisites is standard protocol verification.',
    'op-c-s3-0848': 'Isotonic saline expansion for contrast nephropathy prevention is standard guideline care.',
    'op-c-s3-0883': 'Brain death declaration decoupled from organ procurement organization notification is standard hospital protocol.',
    'op-c-s3-0897': 'Massive hemoptysis dependent lung positioning is standard anatomical management.'
}

def main():
    print(f"Total recognition-heavy items to recalibrate from 5 to 4: {len(RECALIBRATE_CODES)}")

    exam_files = [
        f'scripts/candidate-authoring/{s}-batch{b}.ts'
        for s in ['step1', 'step2', 'step3']
        for b in range(33, 37)
    ]

    recalibrated_count = 0
    for fpath in exam_files:
        content = open(fpath, 'r', encoding='utf-8').read()
        changed = False

        for code, reason in RECALIBRATE_CODES.items():
            if f'"{code}"' in content:
                # Replace provisionalDifficulty: 5 with provisionalDifficulty: 4
                pattern = rf'("code":\s*"{code}"[\s\S]*?"provisionalDifficulty":\s*)5'
                match = re.search(pattern, content)
                if match:
                    content = re.sub(pattern, r'\g<1>4', content, count=1)
                    changed = True
                    recalibrated_count += 1
                    print(f"Recalibrated {code} from 5 to 4 ({reason[:50]}...)")

        if changed:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Saved updates to {fpath}")

    print(f"\nTotal items recalibrated across files: {recalibrated_count}")

if __name__ == '__main__':
    main()
