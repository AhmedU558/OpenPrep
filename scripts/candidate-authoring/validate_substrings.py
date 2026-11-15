import json

with open('scripts/candidate-authoring/fetched_b41_abstracts.json', 'r', encoding='utf-8') as f:
    fetched = json.load(f)

# Candidate code to (pmid, precise substring from abstract)
exact_substrings = {
    'op-c-s1-1001': ('3872065', 'Among patients not discovered by newborn screening, B6-responsive individuals on the average have significantly better'),
    'op-c-s1-1002': ('42234520', 'ActA-mediated actin-based motility allows L. monocytogenes to spatially evade localized methylglyoxal production and hence outrun host defenses'),
    'op-c-s1-1003': ('34175765', 'The disease is caused by a lack of superoxide production by the leukocyte enzyme NADPH oxidase'),
    'op-c-s1-1004': ('25089630', 'Digoxin-specific antibody fragments (digoxin-Fab) are widely regarded as a safe and effective treatment for the management of acute and chronic digoxin poisoning'),
    'op-c-s1-1005': ('42989087', 'Membranous nephropathy (MN) is the most common cause of nephrotic syndrome in adults'),
    'op-c-s1-1006': ('42993355', 'Hypertrophic cardiomyopathy (HCM) is the most common inherited cardiomyopathy, and it is a leading cause of sudden cardiac death (SCD) in young people'),
    'op-c-s1-1007': ('42483935', 'Respiratory distress syndrome (RDS), or hyaline membrane disease, is a common condition in preterm infants (< 37 weeks\' gestation) and a leading cause of neonatal morbidity and mortality'),
    'op-c-s1-1008': ('42933937', 'Hereditary hemochromatosis (HH) is a genetic disorder characterized by excessive iron absorption, leading to tissue and organ damage, particularly in the liver, pancreas, and joints'),
    'op-c-s1-1009': ('42580739', 'Multiple endocrine neoplasia type 2B (MEN2B) is a rare autosomal-dominant cancer predisposition syndrome in which prognosis is strongly influenced by the stage of medullary thyroid carcinoma at diagnosis'),
    'op-c-s1-1010': ('42180722', 'Subsequent bone marrow evaluation, high-sensitivity flow cytometry (FLAER method), and supportive PIGA sequencing findings established the diagnosis of PNH'),
    'op-c-s1-1011': ('30598970', 'The underlying mechanism responsible for causing intraepithelial lesions is the binding of immunoglobulin G autoantibodies to desmoglein 3, a transmembrane glycoprotein adhesion molecule present on desmosomes'),
    'op-c-s2-1001': ('25662791', 'Although open surgery is the main treatment for proximal aortic repair, use of endovascular management is now established for complicated distal dissection and distal arch repair'),
    'op-c-s2-1002': ('41217492', 'Intermediate-Risk Acute Pulmonary Embolism: Clinical Outcomes From a Single Center Experience'),
    'op-c-s2-1003': ('42813038', 'Clostridioides difficile infection (CDI) remains a major clinical challenge, particularly when it is refractory or recurrent'),
    'op-c-s2-1004': ('42825583', 'Terlipressin, a synthetic vasopressin analog, has emerged as a first-line pharmacologic therapy for HRS-AKI'),
    'op-c-s2-1005': ('40953286', 'The management of refractory status epilepticus (SE) remains an area of low evidence with varying management strategies'),
    'op-c-s2-1006': ('42900579', 'Giant cell arteritis (GCA) is a  systemic granulomatous vasculitis of medium and large-sized arteries, which represents an ophthalmic emergency because of the risk of sudden, severe and often irreversible loss of vision'),
    'op-c-s2-1007': ('42620825', 'Primary immune thrombocytopenia (ITP) in pregnancy presents significant therapeutic challenges, particularly when refractory to standard treatments such as corticosteroids, intravenous immunoglobulin, and immunosuppressants'),
    'op-c-s2-1008': ('42671732', 'Although step-up treatment has reduced the need for open pancreatic necrosectomy (OPN), the role of robot-assisted pancreatic necrosectomy (RAPN) remains unclear'),
    'op-c-s2-1009': ('42355556', 'Clinical management has evolved toward a stepwise approach integrating pharmacological, mechanical, and surgical interventions'),
    'op-c-s2-1010': ('28356445', 'Kawasaki disease is an acute vasculitis of childhood that leads to coronary artery aneurysms in ≈25% of untreated cases'),
    'op-c-s2-1011': ('42054269', 'Tension pneumothorax is treated by performing a needle decompression or simple thoracostomy'),
    'op-c-s2-1012': ('42659566', 'The classic clinical picture is defined by a tetrad of hyperthermia, generalized muscle rigidity, altered mental status, and autonomic dysfunction, frequently accompanied by marked creatine kinase elevation secondary to rhabdomyolysis'),
    'op-c-s2-1013': ('42875246', 'Thyroid crisis is caused by an excess of thyroid hormones in the body, leading to a hypermetabolic state and a series of pathological and physiological changes'),
    'op-c-s2-1014': ('42663163', 'Ectopic pregnancy (EP) is a potentially life-threatening condition affecting 1-2% of pregnancies, traditionally managed via surgical or methotrexate (MTX)-based medical approaches'),
    'op-c-s2-1015': ('42565049', 'The optimal vasopressor-escalation strategy after norepinephrine in septic shock remains uncertain, with randomized trials showing no clear winner and observational data suggesting severity-dependent effects'),
    'op-c-s2-1016': ('42698784', 'Stevens-Johnson syndrome/toxic epidermal necrolysis (SJS/TEN) overlap is a rare, life-threatening mucocutaneous reaction typically induced by medications'),
    'op-c-s2-1017': ('34792424', 'Fasciotomy for decompression is suggested when the differential pressure in the compartment of the leg is ≤30'),
    'op-c-s2-1018': ('10690485', 'Acute angle-closure glaucoma is an ophthalmic emergency caused by rapid increase in intraocular pressure resulting from blockage of aqueous humor outflow at the iridocorneal angle'),
    'op-c-s3-1001': ('42940478', 'Severely frail older adults are highly vulnerable to potentially inappropriate medications (PIMs) due to multimorbidity and polypharmacy'),
    'op-c-s3-1002': ('42925351', 'Loop diuretics remain the cornerstone of decongestion in acute heart failure, yet their use in heart failure with reduced ejection fraction (HFrEF) is obscured by two competing errors: undertreating congestion because serum creatinine rises, and continuing or escalating diuretics after euvolaemia'),
    'op-c-s3-1003': ('42906565', 'The aim of the study was to assess whether LNG-IUS insertion immediately after endometrial ablation in women with heavy menstrual bleeding reduced the need for subsequent hysterectomy within 2 years compared with endometrial ablation alone'),
    'op-c-s3-1004': ('10720363', 'In the Swiss cheese model, an organization defenses against failure are modeled as a series of barriers, represented as slices of Swiss cheese'),
    'op-c-s3-1005': ('40940043', 'In the intensive care unit (ICU), critically ill patients often lose decision-making capacity, placing surrogate decision-making responsibilities on family members'),
    'op-c-s3-1006': ('42324625', 'The ACCESS (Advancing Colorectal Cancer Equity through Systematic Screening) initiative evaluates a community-based FIT distribution strategy designed to reach individuals outside traditional primary care pathways'),
    'op-c-s3-1007': ('42946431', 'This study evaluated the prognostic impact of sTILs in pleural mesothelioma patients treated with platinum-pemetrexed chemotherapy or dual immune checkpoint inhibition (ICI) using ipilimumab plus nivolumab (Ipi/Nivo)'),
    'op-c-s3-1008': ('42768981', 'Pharmacy TOC services included admission medication history, discharge medication review, and pharmacist-led PDFU conducted within 72 hours of discharge'),
    'op-c-s1-0902': ('32644584', 'Weber syndrome, classically described as a midbrain stroke syndrome and superior alternating hemiplegia'),
    'op-c-s1-0904': ('24365430', 'Infection by Treponema pallidum can affect the meninges, brain, brainstem, spinal cord, nerve roots, and cerebral and spinal blood vessels')
}

failed = []
for code, (pmid, sub) in exact_substrings.items():
    doc = fetched.get(pmid, {})
    ab = doc.get('abstract', '')
    if sub not in ab:
        failed.append((code, pmid, sub))

print(f"Validation: {len(exact_substrings) - len(failed)} / {len(exact_substrings)} passed.")
if failed:
    for f in failed:
        print("FAILED:", f[0], f[1], f[2][:40])
