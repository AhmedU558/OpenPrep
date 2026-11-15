"""
Mega Data Part U: Domains 126 to 132 (Cardiothoracic, Heart Failure, Electrophysiology, Interventional Pulmonology, ILD, Pulmonary Vascular, Surgical Critical Care)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_U = [
    # Domain 126: Cardiothoracic Surgery & Valvular Interventions
    {
        "id": "domain_126_cardiothoracic",
        "entity": "Severe aortic stenosis, TAVR vs surgical AVR, and coronary artery bypass grafting",
        "hallmark": "harsh crescendo-decrescendo systolic ejection murmur radiating to the carotids, parvus et tardus pulse, exertional syncope or angina, aortic valve area < 1.0 cm2, or multivessel coronary artery disease with diabetes",
        "system": "Cardiovascular",
        "ref_key": "cardiac_surgery",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Calcific aortic stenosis pathophysiology, osteoblast-like phenotype, and shear stress",
                "Chronic endothelial mechanical shear stress triggering lipid infiltration, chronic inflammation, and valvular interstitial cell transdifferentiation into osteoblast-like cells depositing hydroxyapatite.",
                "Dystrophic calcification of a trileaflet or congenital bicuspid aortic valve occurs without hypercalcemia; active cellular mineralization causes progressive leaflet stiffening and outflow obstruction."
            ),
            "Step 2 CK": (
                "Indications for Aortic Valve Replacement: onset of cardinal symptoms or LVEF < 50%",
                "Prompt aortic valve replacement indicated upon development of symptoms (angina, syncope, heart failure) or asymptomatic severe AS with left ventricular ejection fraction < 50%.",
                "Onset of cardinal symptoms marks a precipitous increase in mortality (50% 2-year survival without surgery); delayed intervention risks sudden cardiac death and irreversible myocardial fibrosis."
            ),
            "Step 3": (
                "Choice of prosthesis: Mechanical valve anticoagulation vs Bioprosthetic valve durability",
                "Selecting mechanical prostheses with lifelong warfarin (target INR 2.0-3.0 for aortic, 2.5-3.5 for mitral) in patients < 50 years, versus bioprosthetic valves or TAVR in patients > 65 years.",
                "Mechanical valves provide lifetime structural durability but require strict lifelong vitamin K antagonist anticoagulation (DOACs are strictly contraindicated in mechanical heart valves)."
            ),
            "PLAB / UKMLA": (
                "Transcatheter Aortic Valve Implantation (TAVR) vs SAVR decision-making in elderly patients",
                "Multidisciplinary Heart Team evaluation recommending transfemoral TAVR in patients >= 75 years or those with high/prohibitive surgical risk (STS score > 8%).",
                "NICE guidelines prioritize transfemoral TAVR in older cohorts and patients with prior sternotomy or porcelain aorta, providing equivalent hemodynamics with shorter hospital stays."
            ),
            "AMC": (
                "CABG vs PCI in diabetic patients with multivessel and left main coronary disease",
                "Coronary artery bypass grafting (CABG) utilizing the left internal mammary artery (LIMA) to the LAD prioritized over PCI in patients with diabetes and complex multivessel disease (SYNTAX score > 22).",
                "Randomized trials (FREEDOM, SYNTAX) prove that CABG provides superior long-term survival, reduced myocardial infarction rates, and fewer repeat revascularizations in diabetic multivessel disease."
            ),
            "MCCQE": (
                "Post-cardiac surgery cardiac tamponade: Beck triad and pulsus paradoxus",
                "Sudden decrease in chest tube drainage followed by hypotension, jugular venous distension, muffled heart sounds (Beck triad), and pulsus paradoxus (> 10 mm Hg drop in systolic BP on inspiration).",
                "Mediastinal tube occlusion by clotted blood causes localized pericardial tamponade compressing the right heart; emergency surgical re-exploration and hematoma evacuation are life-saving."
            ),
            "FCPS": (
                "Conduit selection in CABG: Left Internal Mammary Artery (LIMA) long-term patency",
                "Harvesting the in situ left internal mammary artery (LIMA) for anastomosis to the left anterior descending (LAD) coronary artery, demonstrating > 90% 10-year patency.",
                "The internal thoracic artery produces continuous endothelial nitric oxide and prostacyclin, resisting atherosclerosis and spasm; it confers a permanent survival advantage over saphenous vein grafts."
            ),
            "NLE": (
                "Clinical distinction between severe aortic stenosis and hypertrophic cardiomyopathy",
                "Crescendo-decrescendo systolic murmur decreasing with Valsalva maneuver in aortic stenosis, versus increasing murmur intensity with Valsalva and standing in hypertrophic cardiomyopathy.",
                "Valsalva decreases venous return and ventricular cavity volume; in HOCM, smaller LV volume increases dynamic subaortic outflow obstruction, whereas in AS, reduced flow diminishes murmur loudness."
            ),
            "NEET PG": (
                "Bicuspid aortic valve genetics (NOTCH1) and associated aortopathy risks",
                "NOTCH1 mutations causing congenital bicuspid aortic valve, associated with cystic medial necrosis of the ascending aorta, ascending aortic aneurysm, and acute aortic dissection.",
                "Bicuspid aortic valve is the most common congenital heart anomaly (1-2% prevalence); inherent structural weakness in the ascending aortic wall mandates serial imaging surveillance."
            ),
            "MRCP": (
                "Heyde syndrome: aortic stenosis association with acquired von Willebrand and GI bleeding",
                "High shear stress across a stenotic aortic valve uncoiling and cleaving high-molecular-weight von Willebrand factor multimers by ADAMTS13, predisposing to bleeding from intestinal angiodysplasias.",
                "Acquired type 2A von Willebrand syndrome causes recurrent lower gastrointestinal bleeding from colonic arteriovenous malformations; surgical or transcatheter AVR completely cures the coagulopathy."
            ),
            "MRCEM": (
                "Acute mechanical valve thrombosis: emergency identification and thrombolysis vs surgery",
                "Sudden dyspnea, loss of mechanical valve clicks on auscultation, cardiogenic shock, and transesophageal echocardiography showing valve obstruction, requiring emergency surgery or low-dose slow-infusion tPA.",
                "Inadequate anticoagulation causes obstructive thrombus formation on the prosthetic hinge; emergency surgical thrombectomy or slow-infusion fibrinolysis restores leaflet excursion."
            ),
            "SMLE": (
                "Infective endocarditis antibiotic prophylaxis guidelines for prosthetic cardiac valves",
                "Oral amoxicillin (2 g) or clindamycin/azithromycin 30 to 60 minutes prior to invasive dental procedures involving gingival manipulation or mucosal perforation.",
                "Prophylaxis is strictly restricted to high-risk patients: prosthetic cardiac valves, prior infective endocarditis, unrepaired cyanotic congenital heart disease, or repaired defects with prosthetic material."
            ),
            "HAAD / DHA": (
                "Post-pericardiotomy syndrome (Dressler syndrome) diagnostic criteria and management",
                "Pleuritic chest pain, pericardial friction rub, fever, elevated ESR/CRP, and diffuse ST-segment elevation developing 2 to 6 weeks after cardiac surgery, treated with colchicine and NSAIDs.",
                "An autoimmune response directed against antigens exposed during surgical pericardial disruption causes fibrinous pericarditis; colchicine plus ibuprofen reduces symptoms and prevents recurrences."
            ),
            "UHS MBBS": (
                "Cardiopulmonary bypass mechanics: cannulation sites, cardioplegia, and hypothermia",
                "Arterial return cannula in the ascending aorta, venous drainage from right atrium/caval veins, cold potassium cardioplegia for diastolic arrest, and systemic hypothermia to reduce metabolic demand.",
                "Extracorporeal membrane oxygenation through the roller pump circuit replaces heart and lung function; high potassium cardioplegic arrest halts electrical activity in diastole, protecting ATP stores."
            )
        }
    },

    # Domain 127: Advanced Heart Failure & Mechanical Circulatory Support
    {
        "id": "domain_127_advanced_heart_failure",
        "entity": "End-stage systolic heart failure, Left Ventricular Assist Devices (LVAD), and Heart Transplantation",
        "hallmark": "refractory NYHA Class IV dyspnea at rest, cardiac cachexia, frequent hospitalizations despite quadruple medical therapy, continuous-flow LVAD hum, narrow pulse pressure, or acquired bleeding diathesis",
        "system": "Cardiovascular",
        "ref_key": "heart_failure",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Medicine",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Continuous-flow rotary LVAD hemodynamics: axial vs centrifugal impeller mechanics",
                "Rotary blood pumps generating continuous forward blood flow from the left ventricular apex to the ascending aorta, resulting in minimal arterial pulsatility and non-pulsatile perfusion.",
                "Continuous-flow centrifugal LVADs (HeartMate 3) utilize magnetically levitated impellers with artificial pulse algorithms to minimize blood shear stress and reduce pump thrombosis."
            ),
            "Step 2 CK": (
                "Evaluation and management of suspected LVAD pump thrombosis",
                "Elevated pump power (wattage), elevated serum lactate dehydrogenase (LDH > 2.5x baseline), dark hemoglobinuria, and worsening heart failure requiring urgent heparinization and surgical pump exchange.",
                "Clot deposition on the internal bearings or impeller causes mechanical resistance, spiking pump power consumption; hemolysis releases free hemoglobin, and dislodged thrombus risks stroke."
            ),
            "Step 3": (
                "Targeted guideline-directed medical therapy (GDMT) optimization in HFrEF",
                "Maximizing quadruple therapy: ARNI (sacubitril-valsartan), beta-blocker (carvedilol/metoprolol succinate), MRA (spironolactone), and SGLT2 inhibitor (dapagliflozin/empagliflozin).",
                "Comprehensive quadruple therapy achieves a 60% relative reduction in 2-year all-cause mortality; uptitration to target doses should occur rapidly within 6 weeks of initial diagnosis."
            ),
            "PLAB / UKMLA": (
                "Blood pressure measurement technique in continuous-flow LVAD patients: Doppler ultrasound",
                "Using a manual blood pressure cuff and vascular Doppler probe over the brachial or radial artery to determine the opening arterial flow sound, representing Mean Arterial Pressure (MAP).",
                "Because continuous-flow LVADs diminish arterial pulsatility, standard automated oscillometric cuffs fail; the Doppler opening pressure corresponds to MAP, which should be maintained between 70-85 mm Hg."
            ),
            "AMC": (
                "Indications and contraindications for orthotopic heart transplantation",
                "Indicated for refractory cardiogenic shock requiring inotropes/MCS or peak VO2 < 12 mL/kg/min; irreversible severe pulmonary hypertension (pulmonary vascular resistance > 4-5 Wood units) is a major contraindication.",
                "Fixed elevated pulmonary vascular resistance triggers acute right ventricular failure in the non-conditioned donor heart immediately upon implantation; pre-transplant vasoreactivity testing is required."
            ),
            "MCCQE": (
                "Right ventricular failure post-LVAD implantation: risk factors and inotropic management",
                "Elevated central venous pressure, liver congestion, peripheral edema, and septal leftward shifting with decreased LVAD flow, managed with inotropes (milrinone) and inhaled pulmonary vasodilators.",
                "Unloading the LV with high pump speeds pulls the interventricular septum to the left, altering RV geometry and worsening tricuspid regurgitation; aggressive RV afterload reduction is essential."
            ),
            "FCPS": (
                "LVAD driveline infections: microbiological diagnosis and surgical management",
                "Erythema, purulence, and ultrasound fluid collection along the percutaneous abdominal driveline exit site, commonly caused by Pseudomonas aeruginosa or Staphylococcus aureus.",
                "Driveline infections can ascend into the pericardial pump pocket, causing fatal endocarditis; treatment requires targeted parenteral antibiotics, local unroofing, or surgical driveline transposition."
            ),
            "NLE": (
                "Clinical distinction between cardiac cachexia and primary malnutrition in heart failure",
                "Profound non-edematous loss of skeletal muscle and fat stores driven by chronic systemic inflammation (TNF-alpha, IL-6), neurohormonal activation, and intestinal malabsorption.",
                "Cardiac cachexia reflects severe catabolic neuroendocrine dysregulation; it is an independent predictor of mortality and does not reverse with simple caloric supplementation without heart failure control."
            ),
            "NEET PG": (
                "Acquired von Willebrand syndrome and gastrointestinal bleeding in LVAD patients",
                "Loss of high-molecular-weight vWF multimers due to mechanical shear degradation by the pump rotor, leading to recurrent mucosal hemorrhage from gastrointestinal angiodysplasias.",
                "Continuous high shear stress unravels vWF multimers, exposing the A2 domain to cleavage by plasma metalloprotease ADAMTS13; combined with non-pulsatile flow, this triggers submucosal AV malformations."
            ),
            "MRCP": (
                "Cardiac resynchronization therapy (CRT-D) indications: QRS duration and LBBB morphology",
                "Indicated in symptomatic HFrEF (LVEF <= 35%) in sinus rhythm with left bundle branch block (LBBB) morphology and QRS duration >= 150 ms despite optimal medical therapy.",
                "Biventricular pacing restores synchronized contraction of the ventricular septum and free wall, improving LV filling, reversing adverse remodeling, and significantly reducing mortality."
            ),
            "MRCEM": (
                "Cardiopulmonary resuscitation and defibrillation protocols in unresponsive LVAD patients",
                "Confirming pump function by auscultating the left chest for the continuous mechanical hum, performing standard defibrillation for VF/VT, and chest compressions if completely pulseless with MAP < 50.",
                "Defibrillation pads can be applied safely; chest compressions should not be withheld in a truly pulseless, unresponsive patient with low MAP and failing pump, as pump dislodgement risk is minimal."
            ),
            "SMLE": (
                "Iron deficiency screening and intravenous ferric carboxymaltose therapy in heart failure",
                "Screening all HFrEF patients with serum ferritin and transferrin saturation (TSAT); administering intravenous ferric carboxymaltose for ferritin < 100 ng/mL or TSAT < 20% regardless of hemoglobin.",
                "The FAIR-HF and AFFIRM-AHF trials demonstrated that intravenous iron repletion improves functional NYHA class, exercise capacity, and reduces heart failure hospitalizations by restoring myocardial energetics."
            ),
            "HAAD / DHA": (
                "End-of-life deactivation protocols for implantable cardioverter-defibrillators (ICD)",
                "Proactive discussion and programming deactivation of shock therapies in terminally ill patients to prevent painful, distressing end-of-life shocks while maintaining pacing functions.",
                "Deactivating tachyarrhythmia shock functions prevents traumatic multiple shocks during the dying process without actively hastening death; magnet placement over the generator acts as an emergency stop."
            ),
            "UHS MBBS": (
                "Frank-Starling law of the heart, myocardial sarcomere length-tension, and Laplace law",
                "Increased end-diastolic sarcomere stretch (preload) enhancing calcium sensitivity and cross-bridge formation, reaching a plateau in severe heart failure where dilation increases wall tension (T = P x r / 2h).",
                "In decompensated heart failure, excessive chamber dilation increases radius (r), markedly increasing myocardial oxygen consumption and wall stress without further augmenting stroke volume."
            )
        }
    },

    # Domain 128: Cardiac Electrophysiology & Channelopathies
    {
        "id": "domain_128_electrophysiology",
        "entity": "Channelopathies (Brugada, Long QT, ARVC) and Wolff-Parkinson-White syndrome",
        "hallmark": "coved ST-segment elevation >= 2 mm with T-wave inversion in V1-V2, congenital QTc prolongation > 480 ms with exertional syncope or sensorineural deafness, fibrofatty replacement of RV myocardium with epsilon waves, or delta waves with short PR interval",
        "system": "Cardiovascular",
        "ref_key": "electrophysiology",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Physiology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Molecular genetics of Brugada syndrome: SCN5A loss-of-function and phase 0 epicardial notch",
                "Loss-of-function mutations in SCN5A encoding the cardiac voltage-gated sodium channel alpha-subunit (Nav1.5), causing accelerated epicardial repolarization and transmural voltage gradients.",
                "Prominent transient outward potassium current (Ito) in the right ventricular epicardium combined with decreased inward sodium current creates a transmural voltage gradient, producing the coved ST elevation."
            ),
            "Step 2 CK": (
                "Brugada syndrome management: avoidance of offending drugs and ICD placement",
                "Strict avoidance of sodium-channel blockers (procainamide, flecainide), prompt treatment of fever with antipyretics, and implantable cardioverter-defibrillator (ICD) for aborted sudden cardiac arrest.",
                "Hyperthermia accelerates mutated sodium channel inactivation, unmasking lethal ventricular fibrillation; an ICD is the only therapy proven to prevent sudden cardiac death in symptomatic patients."
            ),
            "Step 3": (
                "Congenital Long QT Syndrome: genetic subtypes, triggers, and beta-blocker therapy",
                "LQT1 (KCNQ1 defect triggered by swimming/exercise), LQT2 (KCNH2 defect triggered by auditory stimuli/alarms), and LQT3 (SCN5A gain-of-function triggered during sleep), treated with nadolol.",
                "Nonselective beta-blockers (nadolol or propranolol) blunt sympathetic surges that trigger early afterdepolarizations (EADs); left cardiac sympathetic denervation or ICD is indicated for breakthrough syncope."
            ),
            "PLAB / UKMLA": (
                "Wolff-Parkinson-White (WPW) syndrome: pre-excited atrial fibrillation emergency management",
                "Irregular, wide-complex, polymorphic tachycardia representing AF conducting down the accessory pathway (bundle of Kent), managed by immediate synchronized electrical cardioversion or procainamide.",
                "AV nodal blocking agents (adenosine, beta-blockers, diltiazem, verapamil, digoxin) are strictly contraindicated; blocking the AV node accelerates conduction down the accessory pathway, causing fatal VF."
            ),
            "AMC": (
                "Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC): diagnostic criteria and epsilon waves",
                "Progressive fibrofatty replacement of the right ventricular myocardium, T-wave inversion in right precordial leads (V1-V3), and low-amplitude notched signals at the end of the QRS complex (epsilon waves).",
                "Mutations in desmosomal proteins (plakoglobin, desmoplakin) cause cell detachment and apoptosis under mechanical stress; strenuous competitive athletics accelerates disease progression and sudden death."
            ),
            "MCCQE": (
                "Jervell and Lange-Nielsen vs Romano-Ward congenital Long QT syndromes",
                "Autosomal recessive Long QT syndrome associated with congenital bilateral sensorineural hearing loss (Jervell and Lange-Nielsen) versus autosomal dominant Long QT without deafness (Romano-Ward).",
                "Mutations in KCNQ1 or KCNE1 disrupt the potassium channels in both cardiac myocytes and the endolymph-secreting stria vascularis of the inner ear, linking prolonged ventricular repolarization with deafness."
            ),
            "FCPS": (
                "Catheter ablation of accessory pathways in Wolff-Parkinson-White syndrome",
                "Electrophysiological mapping to localize the accessory atrioventricular pathway followed by radiofrequency catheter ablation, achieving > 95% permanent cure rate.",
                "Ablation eliminates the anatomical substrate for both orthodromic/antidromic atrioventricular reentrant tachycardia (AVRT) and potentially lethal pre-excited atrial fibrillation."
            ),
            "NLE": (
                "Pharmacological provocation testing in Brugada syndrome: Ajmaline and Flecainide",
                "Intravenous administration of Class IC sodium-channel blockers (flecainide or ajmaline) during continuous ECG monitoring to unmask diagnostic Type 1 coved ST-segment elevation in baseline normal ECGs.",
                "Sodium channel blockade accentuates the loss-of-function defect, converting nondiagnostic or saddleback Type 2 patterns into diagnostic Type 1 coved ST elevations >= 2 mm followed by inverted T waves."
            ),
            "NEET PG": (
                "Catecholaminergic Polymorphic Ventricular Tachycardia (CPVT): RYR2 and calsequestrin",
                "Exercise- or emotional stress-induced bidirectional or polymorphic ventricular tachycardia in children with a normal resting ECG, caused by mutations in the cardiac ryanodine receptor (RYR2).",
                "Mutations cause spontaneous calcium leak from the sarcoplasmic reticulum during sympathetic stimulation, triggering delayed afterdepolarizations (DADs); treated with beta-blockers, flecainide, and ICD."
            ),
            "MRCP": (
                "Electrolyte derangements predisposing to Torsades de Pointes: hypokalemia and hypomagnesemia",
                "Depleted extracellular potassium reducing delayed rectifier potassium outward current, and hypomagnesemia impairing Na+/K+ ATPase, causing prolonged QTc and early afterdepolarizations.",
                "Hypokalemia paradoxically inhibits IKr repolarizing current; intravenous magnesium sulfate stabilizes the cardiac membrane by suppressing L-type calcium channels, terminating Torsades de Pointes."
            ),
            "MRCEM": (
                "Emergency electrical cardioversion vs vagal maneuvers in supraventricular tachycardia (SVT)",
                "Modified Valsalva maneuver (semirecumbent with passive leg raise) achieving 40% conversion rate; escalating to rapid intravenous adenosine bolus (6 mg, then 12 mg) or DC cardioversion for instability.",
                "Adenosine transiently hyperpolarizes the AV node by stimulating A1 receptors coupled to Gi, terminating AV nodal reentrant circuits; patients experience transient transient asystole and flushing."
            ),
            "SMLE": (
                "Pre-participation athletic screening for sudden cardiac death prevention in young athletes",
                "Targeted personal and family history screening combined with 12-lead resting ECG evaluating for QTc prolongation, pre-excitation (WPW), Brugada pattern, and deep T-wave inversions (HOCM/ARVC).",
                "Screening identifies occult hereditary electrical and structural channelopathies before high-intensity competitive physical exertion precipitates lethal catecholamine-induced ventricular arrhythmias."
            ),
            "HAAD / DHA": (
                "Subcutaneous Implantable Cardioverter-Defibrillator (S-ICD) indications and limitations",
                "Entirely extra-thoracic ICD system with subcutaneous electrode eliminating vascular injury and systemic bloodstream infection risks, but incapable of delivering anti-tachycardia or bradycardia pacing.",
                "S-ICD is ideal for young patients with channelopathies and high infection risk who do not require pacing for bradycardia or antitachycardia pacing for monomorphic ventricular tachycardia."
            ),
            "UHS MBBS": (
                "Action potential phases of cardiac ventricular myocytes vs pacemaker cells",
                "Phase 0 (rapid Na+ influx), Phase 1 (transient outward K+ Ito), Phase 2 (Ca2+ influx via L-type channels matching K+ efflux), Phase 3 (repolarizing K+ efflux), Phase 4 (resting potential maintained by IK1).",
                "Pacemaker cells (SA/AV nodes) lack rapid Phase 0 sodium channels; instead, they exhibit spontaneous Phase 4 diastolic depolarization driven by funny currents (If) and Phase 0 upstroke driven by calcium."
            )
        }
    },

    # Domain 129: Interventional Pulmonology & Lung Cancer Staging
    {
        "id": "domain_129_interventional_pulm",
        "entity": "Lung cancer TNM staging, Endobronchial Ultrasound (EBUS), and malignant pleural effusion",
        "hallmark": "hemoptysis, unresolving pulmonary consolidation, persistent cough in a chronic smoker, mediastinal lymphadenopathy on chest CT, hypermetabolic FDG uptake on PET-CT, or recurrent massive exudative pleural effusion with malignant cytology",
        "system": "Respiratory",
        "ref_key": "pulmonology",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Medicine",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Molecular driver mutations in non-small cell lung cancer (NSCLC): EGFR, ALK, KRAS, and PD-L1",
                "EGFR exon 19 deletions and L858R point mutations (osimertinib), EML4-ALK fusion oncogenes (alectinib), KRAS G12C mutations (sotorasib), and PD-L1 expression levels for immune checkpoint inhibitors.",
                "Adenocarcinoma of the lung in non-smokers frequently harbors targetable tyrosine kinase driver alterations; molecular profiling via next-generation sequencing is mandatory to direct targeted therapy."
            ),
            "Step 2 CK": (
                "Mediastinal lymph node staging algorithm: EBUS-TBNA prior to surgical resection",
                "Performing convex-probe Endobronchial Ultrasound-guided Transbronchial Needle Aspiration (EBUS-TBNA) to sample enlarged or PET-positive mediastinal stations (2, 4, 7) before planned curative lobectomy.",
                "Invasive nodal staging is essential: contralateral mediastinal nodal involvement (N3) or ipsilateral involvement (N2) shifts management from upfront surgical resection to neoadjuvant chemoimmunotherapy."
            ),
            "Step 3": (
                "Low-dose CT (LDCT) lung cancer screening eligibility and mortality reduction",
                "Annual low-dose helical chest CT screening for adults aged 50 to 80 years with a >= 20 pack-year smoking history who currently smoke or have quit within the past 15 years.",
                "The National Lung Screening Trial (NLST) and NELSON trial proved that annual low-dose CT screening achieves a 20-24% relative reduction in lung cancer mortality by detecting early Stage I resectable lesions."
            ),
            "PLAB / UKMLA": (
                "Management of recurrent symptomatic malignant pleural effusion: IPC vs chemical pleurodesis",
                "Insertion of an Indwelling Pleural Catheter (IPC) allowing home outpatient drainage, or inpatient video-assisted thoracoscopic surgery with sterile talc poudrage pleurodesis.",
                "NICE guidelines recognize IPC as equivalent to talc pleurodesis for relieving dyspnea; IPC is preferred in patients with 'trapped lung' (non-expandable lung due to visceral tumor encasement)."
            ),
            "AMC": (
                "Pancoast tumor (superior sulcus tumor): pre-treatment staging and multimodality protocol",
                "Non-small cell lung carcinoma invading the brachial plexus (C8-T1), stellate ganglion (Horner syndrome), and first two ribs, treated with neoadjuvant chemoradiotherapy followed by en bloc surgical resection.",
                "Accurate MRI assessment of the brachial plexus and subclavian vessels is critical; complete surgical resection with negative margins following induction therapy provides long-term cure."
            ),
            "MCCQE": (
                "Small cell lung cancer (SCLC): Limited-stage vs Extensive-stage treatment algorithms",
                "Limited-stage (confined to one hemithorax and regional nodes treatable in a single radiation port) treated with concurrent etoposide-cisplatin and thoracic radiotherapy plus prophylactic cranial irradiation.",
                "SCLC exhibits rapid doubling time and early hematogenous dissemination; concurrent chemoradiotherapy cures 20-25% of limited-stage patients, while extensive-stage disease requires chemoimmunotherapy."
            ),
            "FCPS": (
                "Anatomical lung resection criteria: lobectomy vs sublobar resection (segmentectomy)",
                "Anatomical segmentectomy with systematic nodal dissection for peripheral ground-glass dominant Stage IA NSCLC <= 2 cm based on CALGB 140503 and JCOG0802 trials.",
                "Segmentectomy preserves pulmonary parenchymal function and yields equivalent disease-free and overall survival compared to formal lobectomy in selected small peripheral tumors <= 2 cm."
            ),
            "NLE": (
                "Clinical distinction between squamous cell carcinoma and adenocarcinoma of the lung",
                "Central cavitary hilar mass with hypercalcemia (PTHrP production) and keratin pearls in squamous cell carcinoma, versus peripheral subpleural mass with gland formation in adenocarcinoma.",
                "Squamous cell carcinoma arises in central bronchi damaged by tobacco carcinogens, while adenocarcinoma arises in peripheral bronchoalveolar units and is the most common lung cancer in non-smokers."
            ),
            "NEET PG": (
                "Paraneoplastic syndromes associated with small cell lung cancer: SIADH, Cushing, LEMS",
                "Ectopic ADH secretion causing euvolemic hyponatremia (SIADH), ectopic ACTH producing severe hypokalemic alkalosis and hyperpigmentation, and antibodies against P/Q-type voltage-gated calcium channels in LEMS.",
                "Lambert-Eaton Myasthenic Syndrome (LEMS) presents with proximal leg weakness and autonomic dysfunction that paradoxically improves with repetitive muscle use, unlike Myasthenia Gravis."
            ),
            "MRCP": (
                "Syndrome of Inappropriate Antidiuretic Hormone (SIADH) diagnosis and vaptans/fluid restriction",
                "Serum sodium < 135 mEq/L, serum osmolarity < 275 mOsm/kg, urine sodium > 40 mEq/L, and urine osmolarity > 100 mOsm/kg in a clinically euvolemic patient without adrenal or thyroid dysfunction.",
                "First-line management is fluid restriction (800-1000 mL/day) and treatment of the underlying lung cancer; oral vasopressin V2 receptor antagonists (tolvaptan) are reserved for refractory hyponatremia."
            ),
            "MRCEM": (
                "Massive hemoptysis emergency protocol: lateral decubitus positioning and bronchial artery embolization",
                "Positioning the patient with the bleeding lung dependent (downward) to prevent blood aspiration into the healthy lung, endotracheal intubation, and emergent bronchial arterial embolization (BAE).",
                "Ninety percent of massive hemoptysis originates from bronchial arteries under systemic pressure rather than low-pressure pulmonary arteries; catheter-directed embolization provides immediate hemostasis."
            ),
            "SMLE": (
                "Central airway obstruction: rigid bronchoscopy, mechanical coring, and airway stenting",
                "Rigid bronchoscopy under general anesthesia utilizing laser photoresection, electrocautery, and deployment of self-expanding metallic or silicone stents for malignant airway compression.",
                "Interventional bronchoscopic recanalization rapidly relieves suffocating stridor and post-obstructive pneumonia, transforming inoperable patients into candidates for systemic antineoplastic therapy."
            ),
            "HAAD / DHA": (
                "Cardiopulmonary pre-operative risk assessment prior to anatomical lung resection",
                "Measuring baseline FEV1 and DLCO; if either is < 80% predicted, calculating predicted postoperative (ppo) FEV1 and ppoDLCO, and performing cardiopulmonary exercise testing (CPET: peak VO2 > 15 mL/kg/min).",
                "Patients with ppoFEV1 > 40% and ppoDLCO > 40% have acceptable perioperative surgical risk; peak VO2 < 10 mL/kg/min indicates prohibitively high post-resection mortality."
            ),
            "UHS MBBS": (
                "Histological markers in lung carcinoma: TTF-1, Napsin A, p40, and Chromogranin",
                "Adenocarcinoma staining positive for Thyroid Transcription Factor-1 (TTF-1) and Napsin A; squamous cell carcinoma positive for p40 and p63; neuroendocrine tumors positive for chromogranin and synaptophysin.",
                "Immunohistochemical panels are essential on small core biopsies: p40 has near-100% specificity for squamous differentiation, avoiding misclassification and guiding pemetrexed/bevacizumab safety."
            )
        }
    },

    # Domain 130: Interstitial Lung Diseases & Idiopathic Pulmonary Fibrosis
    {
        "id": "domain_130_ild_ipf",
        "entity": "Idiopathic pulmonary fibrosis, Sarcoidosis, and Hypersensitivity pneumonitis",
        "hallmark": "insidious dry cough, progressive exertional dyspnea, bilateral bibasilar fine 'Velcro' end-inspiratory crackles, digital clubbing, subpleural reticulation with honeycombing on HRCT, or non-caseating granulomas with bilateral hilar adenopathy",
        "system": "Respiratory",
        "ref_key": "pulmonology",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Usual Interstitial Pneumonia (UIP) histopathology: fibroblastic foci and temporal heterogeneity",
                "Alternating zones of normal lung parenchyma, active fibroblastic foci, dense collagen deposition, and cystic architectural destruction (honeycombing) prominent at subpleural and paraseptal regions.",
                "UIP is the histological and radiographic pattern of IPF; recurrent micro-injuries to alveolar type I epithelial cells and aberrant repair by type II cells drive profibrotic TGF-beta signaling."
            ),
            "Step 2 CK": (
                "High-Resolution Computed Tomography (HRCT) criteria for definite UIP pattern in IPF",
                "Subpleural, basal predominance of reticular abnormalities, traction bronchiectasis, and honeycombing with absence of atypical features (micronodules, extensive ground-glass consolidation).",
                "In the appropriate clinical context (age > 60 years, progressive dyspnea), a definite UIP pattern on HRCT establishes the diagnosis of IPF without the need for invasive surgical lung biopsy."
            ),
            "Step 3": (
                "Antifibrotic pharmacotherapy in IPF: Pirfenidone and Nintedanib indications",
                "Initiating antifibrotic therapy with pirfenidone (TGF-beta and collagen synthesis inhibitor) or nintedanib (tyrosine kinase inhibitor targeting PDGF, FGF, and VEGF receptors) to slow FVC decline.",
                "Large randomized trials (INPULSIS, ASCEND) proved that antifibrotic agents significantly reduce the annual rate of forced vital capacity (FVC) decline by 50% and decrease acute exacerbations."
            ),
            "PLAB / UKMLA": (
                "Löfgren syndrome presentation, benign prognosis, and symptomatic management",
                "Acute clinical triad of bilateral hilar lymphadenopathy, erythema nodosum, and migratory periarticular ankle arthritis in young adults, carrying a > 85% spontaneous remission rate within 2 years.",
                "Löfgren syndrome is a distinct phenotypic presentation of acute sarcoidosis with an excellent prognosis; management is primarily supportive with oral NSAIDs; systemic corticosteroids are rarely required."
            ),
            "AMC": (
                "Pulmonary function testing hallmarks in restrictive lung disease: TLC and DLCO reduction",
                "Reduced Total Lung Capacity (TLC < 80% predicted), normal or elevated FEV1/FVC ratio (> 0.70), and proportionally reduced Diffusing Capacity of the Lung for Carbon Monoxide (DLCO).",
                "Extensive alveolar septal thickening and parenchymal fibrosis increase elastic recoil, restricting lung expansion (reduced TLC) and impeding alveolar-capillary oxygen diffusion (reduced DLCO)."
            ),
            "MCCQE": (
                "Severe acute exacerbation of IPF: diagnostic criteria and exclusion of pulmonary embolism",
                "Acute unexplained worsening of dyspnea within 30 days with new bilateral ground-glass opacities superimposed on a UIP background, requiring exclusion of heart failure, infection, and PE.",
                "Acute exacerbation of IPF carries a hospital mortality rate > 50%; treatment involves high-dose pulse corticosteroids and broad-spectrum antibiotics, alongside urgent lung transplant evaluation."
            ),
            "FCPS": (
                "Cryobiopsy vs video-assisted thoracoscopic surgical (VATS) lung biopsy in unclassifiable ILD",
                "Transbronchial lung cryobiopsy providing larger, freeze-preserved tissue specimens without crush artifact, serving as a less morbid alternative to VATS lung biopsy in multidisciplinary ILD diagnosis.",
                "Cryobiopsy samples multiple lung segments with lower 30-day mortality and shorter hospital stay than surgical wedge resection, providing adequate histological architecture for diagnostic consensus."
            ),
            "NLE": (
                "Clinical distinction between Sarcoidosis and Tuberculosis: caseating vs non-caseating granulomas",
                "Well-formed, tight, non-caseating epithelioid granulomas with multinucleated giant cells in sarcoidosis, versus central caseous necrosis with acid-fast bacilli in tuberculosis.",
                "Histological demonstration of non-caseating granulomas combined with negative mycobacterial and fungal cultures/stains is required; sarcoidosis is an exclusion diagnosis of chronic granulomatous diseases."
            ),
            "NEET PG": (
                "Asteroid bodies and Schaumann bodies in sarcoidosis histopathology",
                "Star-shaped eosinophilic crystalline inclusions (asteroid bodies) and laminated basophilic calcified calcium-protein complexes (Schaumann bodies) within multinucleated Langhans giant cells.",
                "Schaumann and asteroid bodies are classic histological findings in sarcoid granulomas; although not completely specific, their presence strongly supports granulomatous pathology."
            ),
            "MRCP": (
                "Extrapulmonary sarcoidosis manifestations: hypercalcemia, uveitis, and cardiac sarcoidosis",
                "1-alpha-hydroxylase production by alveolar macrophages converting 25-OH vitamin D into active 1,25-(OH)2 vitamin D, anterior uveitis, and ventricular arrhythmias with complete heart block.",
                "Unregulated calcitriol synthesis increases intestinal calcium and phosphate absorption, causing hypercalcemia and nephrolithiasis; cardiac sarcoidosis requires immunosuppression and prophylactic ICD."
            ),
            "MRCEM": (
                "Pneumothorax complication in advanced cystic lung disease and lymphangioleiomyomatosis",
                "Sudden acute unilateral pleuritic chest pain and dyspnea in a reproductive-aged female with thin-walled pulmonary cysts on CT, confirmed as spontaneous pneumothorax secondary to LAM.",
                "Lymphangioleiomyomatosis (LAM) involves clonal proliferation of abnormal smooth muscle-like cells (LAM cells) with TSC gene mutations, causing recurrent pneumothoraces and chylous pleural effusions."
            ),
            "SMLE": (
                "Hypersensitivity Pneumonitis (Extrinsic Allergic Alveolitis): antigen avoidance and bronchoalveolar lavage",
                "Identification and complete environmental removal of the offending avian or mold antigen, accompanied by bronchoalveolar lavage fluid demonstrating marked CD4/CD8 inverted lymphocytosis (> 40%).",
                "Antigen avoidance is the cornerstone of hypersensitivity pneumonitis therapy; chronic exposure leads to irreversible fibrotic transformation mimicking idiopathic pulmonary fibrosis."
            ),
            "HAAD / DHA": (
                "Single-lung vs bilateral lung transplantation indications and timing in advanced IPF",
                "Early referral for lung transplantation at the time of definitive IPF diagnosis, indicated when FVC declines >= 10% or DLCO declines >= 15% over 6 months, or resting hypoxemia develops.",
                "IPF has the highest waitlist mortality among end-stage pulmonary diseases due to unpredictable acute exacerbations; early listing for bilateral or single lung transplantation maximizes survival."
            ),
            "UHS MBBS": (
                "Alveolar-capillary membrane diffusion barrier components and Fick law of diffusion",
                "Alveolar surfactant layer, alveolar type I epithelium, epithelial basement membrane, interstitial space, capillary basement membrane, capillary endothelial cell, and erythrocyte plasma membrane.",
                "Fick law of diffusion states that gas transfer rate is proportional to surface area and partial pressure gradient, and inversely proportional to membrane thickness; fibrosis increases thickness, impeding O2 diffusion."
            )
        }
    },

    # Domain 131: Pulmonary Vascular Diseases & CTEPH
    {
        "id": "domain_131_pulmonary_vascular",
        "entity": "Pulmonary arterial hypertension (PAH) and Chronic thromboembolic pulmonary hypertension (CTEPH)",
        "hallmark": "progressive exertional dyspnea, loud pulmonic component of the second heart sound (P2), tricuspid regurgitation murmur, jugular venous distension with prominent 'a' waves, peripheral edema, or mismatched segmental perfusion defects on V/Q scan",
        "system": "Cardiovascular",
        "ref_key": "pulmonology",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Medicine",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "BMPR2 gene mutations and plexiform arteriopathy in Pulmonary Arterial Hypertension",
                "Loss-of-function germline mutations in bone morphogenetic protein receptor type 2 (BMPR2) leading to vascular endothelial and smooth muscle cell hyperproliferation and plexiform lesions.",
                "Dysfunctional BMPR2 signaling fails to inhibit vascular smooth muscle proliferation; concentric intimal fibrosis, medial hypertrophy, and plexogenic microvascular remodeling occlude precapillary arterioles."
            ),
            "Step 2 CK": (
                "Ventilation-Perfusion (V/Q) scintigraphy: screening test of choice for CTEPH",
                "Ordering a radionuclide V/Q scan rather than CT pulmonary angiography to screen for Chronic Thromboembolic Pulmonary Hypertension in patients with persistent dyspnea following pulmonary embolism.",
                "V/Q scintigraphy has a near-100% negative predictive value for CTEPH; normal perfusion scans safely exclude CTEPH, whereas mismatched segmental or subsegmental defects mandate pulmonary angiography."
            ),
            "Step 3": (
                "Right Heart Catheterization (RHC) hemodynamic diagnostic criteria for pulmonary hypertension",
                "Mean pulmonary artery pressure (mPAP) > 20 mm Hg at rest, Pulmonary Capillary Wedge Pressure (PCWP) <= 15 mm Hg, and Pulmonary Vascular Resistance (PVR) >= 2 Wood units defining pre-capillary PAH.",
                "RHC is mandatory prior to initiating pulmonary vasodilator therapy; a PCWP > 15 mm Hg distinguishes post-capillary pulmonary hypertension (Group 2: left heart disease) where vasodilators are harmful."
            ),
            "PLAB / UKMLA": (
                "Targeted vasodilator combination pharmacotherapy pathways in Group 1 PAH",
                "Dual upfront oral combination therapy combining an endothelin receptor antagonist (ambrisentan) and a phosphodiesterase-5 inhibitor (tadalafil) for intermediate-risk PAH.",
                "The AMBITION trial established that upfront dual pathway blockade targeting both the endothelin and nitric oxide/cyclic GMP pathways significantly delays clinical failure and reduces hospitalizations."
            ),
            "AMC": (
                "Pulmonary Endarterectomy (PEA) as the definitive curative treatment for operable CTEPH",
                "Cardiopulmonary bypass with deep hypothermic circulatory arrest to surgically excise organized, fibrotic thromboembolic material from the pulmonary arterial tree in specialized centers.",
                "Unlike acute pulmonary embolectomy, PEA requires true endarterectomy peeling the neo-intimal fibrotic scar from the media; in operable cases, PEA normalizes pulmonary pressures and cures the disease."
            ),
            "MCCQE": (
                "Vasoreactivity testing during right heart catheterization and Calcium Channel Blocker therapy",
                "Acute pulmonary vasoreactivity challenge with inhaled nitric oxide or IV epoprostenol; positive response (mPAP drops >= 10 mm Hg to <= 40 mm Hg without drop in cardiac output) identifies CCB responders.",
                "Only 5-10% of idiopathic PAH patients demonstrate acute vasoreactivity; confirmed responders achieve excellent long-term survival with high-dose oral calcium channel blockers (diltiazem, amlodipine)."
            ),
            "FCPS": (
                "Balloon Pulmonary Angioplasty (BPA) and Riociguat in inoperable or residual CTEPH",
                "Sequential percutaneous catheter-directed balloon pulmonary angioplasty of distal web/ring stenosis combined with riociguat (soluble guanylate cyclase stimulator).",
                "For patients with surgically inoperable distal thromboembolic disease or persistent hypertension post-PEA, BPA and oral riociguat significantly reduce PVR and improve functional capacity."
            ),
            "NLE": (
                "Echocardiographic estimation of Pulmonary Artery Systolic Pressure (PASP)",
                "Continuous-wave Doppler measurement of the peak tricuspid regurgitation jet velocity (TRV), applying the simplified Bernoulli equation: PASP = 4(TRV)2 + estimated Right Atrial Pressure.",
                "A peak tricuspid regurgitant velocity > 2.8 m/s indicates elevated pulmonary artery systolic pressure; right ventricular dilation, flattening of the interventricular septum, and TAPSE assess RV function."
            ),
            "NEET PG": (
                "Hepatopulmonary Syndrome (HPS) triad and contrast-enhanced echocardiography",
                "Triad of advanced liver disease/portal hypertension, arterial hypoxemia, and intrapulmonary vascular dilations, diagnosed by delayed microbubble appearance (after 3-6 cardiac cycles) on saline contrast echo.",
                "Intrapulmonary precapillary vasodilation creates a functional right-to-left shunt; microbubbles that normally lodge in pulmonary capillaries traverse the dilated vessels into the left atrium; liver transplant is curative."
            ),
            "MRCP": (
                "Prostacyclin pathway agonists: Epoprostenol infusion and mortality benefit in severe PAH",
                "Continuous intravenous epoprostenol (PGI2 analog) infusion via a permanent central venous catheter, proven to improve exercise capacity and significantly reduce mortality in NYHA Class IV PAH.",
                "Epoprostenol has an ultra-short half-life (3-5 minutes); accidental pump cessation causes acute rebound pulmonary hypertensive crisis and fatal right ventricular failure, requiring emergency back-up pumps."
            ),
            "MRCEM": (
                "Acute decompensated right ventricular failure: cautious fluid management and inotropes",
                "Avoiding aggressive crystalloid volume loading, optimizing perfusion with norepinephrine and inodilators (milrinone or dobutamine), and administering inhaled pulmonary vasodilators (epoprostenol/nitric oxide).",
                "The failing, dilated right ventricle is highly sensitive to afterload; excessive volume loading shifts the septum leftward, compressing the LV, reducing systemic cardiac output, and precipitating RV ischemia."
            ),
            "SMLE": (
                "Portopulmonary Hypertension (PoPH) screening and liver transplant criteria",
                "Screening with transthoracic echocardiography in all liver transplant candidates; severe PoPH with mPAP >= 35 mm Hg and PVR > 3 Wood units requiring medical reduction before transplantation.",
                "Uncontrolled pulmonary hypertension during liver reperfusion carries a perioperative mortality > 50%; targeted medical therapy (prostacyclins, ERAs) lowering mPAP < 35 mm Hg permits safe transplantation."
            ),
            "HAAD / DHA": (
                "Pregnancy contraindication and teratogenicity of PAH pharmacotherapy (ERAs)",
                "Pregnancy carries a maternal mortality rate of 30-50% in severe PAH; strict dual contraception is mandatory, and endothelin receptor antagonists (bosentan, macitentan) are potent teratogens.",
                "Severe RV failure during labor and postpartum fluid shifts causes maternal death; if pregnancy occurs, immediate counseling regarding therapeutic termination is recommended by international consensus."
            ),
            "UHS MBBS": (
                "Cor pulmonale definition, pathophysiology, and electrocardiographic findings",
                "Right ventricular hypertrophy and dilation resulting from chronic pulmonary parenchymal or vascular disorders, characterized by right axis deviation, tall R-waves in V1, P-pulmonale, and S1Q3T3 pattern.",
                "Cor pulmonale specifically excludes right heart failure secondary to left ventricular dysfunction or congenital heart disease; chronic hypoxic pulmonary vasoconstriction drives RV remodeling."
            )
        }
    },

    # Domain 132: Surgical Critical Care & Abdominal Sepsis Control
    {
        "id": "domain_132_surgical_critical_care",
        "entity": "Abdominal compartment syndrome, damage control surgery, and septic shock resuscitation",
        "hallmark": "tense distended abdomen, intra-abdominal pressure > 20 mm Hg with new organ dysfunction, refractory metabolic acidosis, hypothermia, coagulopathy (lethal triad), or persistent vasopressor-dependent septic shock",
        "system": "General Principles",
        "ref_key": "critical_care",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Abdominal Compartment Syndrome (ACS) pathophysiology and bladder pressure monitoring",
                "Sustained intra-abdominal pressure (IAP) > 20 mm Hg measured via an intravesical transurethral bladder catheter transducer, associated with new-onset oliguria and elevated peak airway pressures.",
                "Elevated IAP compresses the inferior vena cava and renal veins, decreasing cardiac preload and renal perfusion gradient (Abdominal Perfusion Pressure = MAP - IAP); it pushes the diaphragm cephalad, impairing ventilation."
            ),
            "Step 2 CK": (
                "Emergency surgical abdominal decompression for refractory Abdominal Compartment Syndrome",
                "Immediate midline surgical decompressive laparotomy with temporary open abdominal closure when medical decompression (nasogastric/rectal tubes, neuromuscular blockade) fails.",
                "Decompressive laparotomy immediately relieves cephalad diaphragmatic pressure, restores renal venous outflow, and improves cardiac preload; delaying decompression results in irreversible multiorgan failure."
            ),
            "Step 3": (
                "Damage Control Surgery (DCS) principles: abbreviated laparotomy and staged reconstruction",
                "Abbreviated initial surgical intervention focusing solely on rapid hemorrhage control (packing, shunting) and contamination containment, temporary abdominal closure, and transfer to ICU.",
                "DCS prevents exhaustion of physiological reserves; completing complex definitive resections and anastomoses during severe acidosis, hypothermia, and coagulopathy (the lethal triad) is fatal."
            ),
            "PLAB / UKMLA": (
                "Dynamic measures of fluid responsiveness vs static central venous pressure (CVP)",
                "Using dynamic cardiopulmonary parameters (Stroke Volume Variation > 13%, Pulse Pressure Variation, or passive leg raise test with cardiac output monitoring) to guide volume resuscitation.",
                "Static measures like CVP or pulmonary capillary wedge pressure poorly correlate with ventricular volume and do not reliably predict fluid responsiveness; passive leg raise mimics a 300-500 mL autologous fluid bolus."
            ),
            "AMC": (
                "First-line vasopressor selection in septic shock: Norepinephrine vs Vasopressin",
                "Immediate initiation of intravenous norepinephrine as the first-line vasopressor to target a Mean Arterial Pressure >= 65 mm Hg, adding low-dose vasopressin (0.03 units/min) if shock persists.",
                "Surviving Sepsis Campaign guidelines prioritize norepinephrine for potent alpha-1 vasoconstriction with modest beta-1 inotropy; vasopressin restores deficient endogenous stores without increasing arrhythmogenic risk."
            ),
            "MCCQE": (
                "The Lethal Triad in surgical trauma and massive transfusion: Acidosis, Coagulopathy, Hypothermia",
                "Aggressive correction of core hypothermia (< 35°C), severe metabolic lactic acidosis (pH < 7.20), and trauma-induced coagulopathy using 1:1:1 balanced blood component resuscitation.",
                "Hypothermia and acidosis inhibit the enzymatic activity of the coagulation cascade and impair platelet aggregation; damage control resuscitation with warm balanced plasma, platelets, and RBCs restores homeostasis."
            ),
            "FCPS": (
                "Temporary Abdominal Closure (TAC) techniques: Negative Pressure Wound Therapy (NPWT)",
                "Application of commercial or constructed negative pressure temporary abdominal closure (vacuum-pack / Barker technique) to maintain fascial traction and evacuate inflammatory peritoneal fluid.",
                "Negative pressure wound therapy controls peritoneal fluid losses, prevents lateral fascial retraction, preserves the domain of the abdominal wall, and facilitates delayed primary fascial closure within 7-10 days."
            ),
            "NLE": (
                "Intra-abdominal hypertension grading (World Society of Abdominal Compartment Syndrome)",
                "Normal IAP is 0-5 mm Hg; Grade I (12-15 mm Hg), Grade II (16-20 mm Hg), Grade III (21-25 mm Hg), and Grade IV (> 25 mm Hg), with ACS defined as IAP > 20 mm Hg with new organ dysfunction.",
                "Grade I and II hypertension are managed conservatively with gastric decompression, prokinetics, judicious fluid restriction, and paracentesis; Grade III and IV with organ failure mandate surgical decompression."
            ),
            "NEET PG": (
                "Enterocutaneous fistula classification and nutritional management: the Sepsis, Skin, Support, Surgery (4S) protocol",
                "Controlling local skin breakdown, stabilizing sepsis, ensuring high-protein enteral or total parenteral nutrition, and delaying definitive surgical fistula repair for at least 3 to 6 months.",
                "Immediate re-operation in acute enterocutaneous fistula leads to dense adhesions, bowel enterotomies, and fistula recurrence; delayed surgery allows peritoneal adhesions to mature and nutritional status to recover."
            ),
            "MRCP": (
                "Lactate clearance and central venous oxygen saturation (ScvO2) as resuscitation endpoints",
                "Targeting a decrease in blood lactate by >= 20% every 2 hours during initial resuscitation, and maintaining ScvO2 >= 70% as evidence of adequate systemic tissue oxygen delivery.",
                "Elevated blood lactate reflects anaerobic glycolysis and impaired clearance; progressive normalization (lactate clearance) correlates strongly with restored microvascular perfusion and hospital survival."
            ),
            "MRCEM": (
                "Open pneumothorax ('sucking chest wound') emergency management: three-sided occlusive dressing",
                "Application of a sterile occlusive dressing taped on three sides, functioning as a flutter-valve that allows air to escape on expiration while preventing air entry during inspiration.",
                "Taping all four sides converts an open communicating pneumothorax into a life-threatening tension pneumothorax; the three-sided flutter-valve prevents tension accumulation before formal chest tube placement."
            ),
            "SMLE": (
                "Stress ulcer prophylaxis in surgical intensive care: H2RA vs PPI indications",
                "Initiating enteral or parenteral proton pump inhibitors or H2-receptor antagonists for patients with mechanical ventilation > 48 hours or coagulopathy (platelets < 50,000, INR > 1.5).",
                "Critically ill ventilated or coagulopathic patients have high rates of clinically significant upper gastrointestinal stress ulcer bleeding; routine prophylaxis is discontinued upon extubation and oral intake."
            ),
            "HAAD / DHA": (
                "Ventilator-Associated Pneumonia (VAP) prevention bundle in the surgical ICU",
                "Head-of-bed elevation to 30-45 degrees, daily sedative interruption and spontaneous breathing trials, subglottic secretion drainage, and oral chlorhexidine decontamination.",
                "Adherence to evidence-based VAP care bundles significantly decreases microaspiration of contaminated oropharyngeal secretions, reducing ventilator days, ICU length of stay, and mortality."
            ),
            "UHS MBBS": (
                "Anatomy of the anterolateral abdominal wall layers incised in midline vs paramedian laparotomy",
                "Midline laparotomy: Skin, subcutaneous fat (Camper and Scarpa fasciae), Linea alba, Fascia transversalis, Extrahepatic preperitoneal fat, and Parietal peritoneum.",
                "The Linea alba is an avascular fibrous raphe formed by the interweaving aponeuroses of the external oblique, internal oblique, and transversus abdominis; midline incision provides rapid bloodless access."
            )
        }
    }
]
