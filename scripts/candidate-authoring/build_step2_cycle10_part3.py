import json
import os
import sys

sys.path.append(os.path.dirname(__file__))
from cycle10_authoring_common import format_spec

with open(os.path.join(os.path.dirname(__file__), 's2_b38_refs.json'), 'r', encoding='utf-8') as f:
    refs = json.load(f)

def get_batch38():
    items = []

    # 0926: ARDS Low Tidal Volume (A)
    items.append(format_spec(
        "op-c-s2-0926", "Step 2 CK", "Medicine", "Respiratory",
        "ARDS Low Tidal Volume Ventilation Driving Pressure Plateau Pressure Target", 5,
        "A 48-year-old man with severe acute necrotizing pancreatitis is intubated on hospital day 3 for worsening hypoxemic respiratory failure. Initial post-intubation chest radiograph shows diffuse bilateral alveolar infiltrates without cardiomegaly. Arterial blood gas on volume assist-control mode with tidal volume 700 mL (patient predicted body weight is 70 kg, actual weight 98 kg), respiratory rate 18/min, PEEP 10 cm H2O, and FiO2 0.80 demonstrates: pH 7.34, PaCO2 42 mm Hg, and PaO2 68 mm Hg (PaO2/FiO2 ratio = 85). Inspiratory breath-hold reveals an end-inspiratory plateau pressure (Pplat) of 36 cm H2O and peak airway pressure of 44 cm H2O. Which of the following ventilator adjustments is proven to reduce mortality in this patient?",
        [
            ["Decreasing tidal volume to 6 mL/kg of predicted body weight (420 mL) targeting plateau pressure <= 30 cm H2O", "This patient meets the Berlin definition for SEVERE ACUTE RESPIRATORY DISTRESS SYNDROME (ARDS): acute onset within 1 week of a known clinical insult (pancreatitis), bilateral pulmonary opacities not fully explained by heart failure, and severe hypoxemia with PaO2/FiO2 ratio <= 100 mm Hg (here 85 mm Hg) on PEEP >= 5 cm H2O. The landmark ARDS Network (ARMA) trial demonstrated that a LUNG-PROTECTIVE VENTILATION STRATEGY significantly reduces all-cause in-hospital mortality. Key components include: (1) LOW TIDAL VOLUME VENTILATION: initial tidal volume set at 6 mL/kg of PREDICTED BODY WEIGHT (PBW, calculated based on sex and height; NOT actual body weight, which severely overdoses tidal volumes in obese patients; here 6 mL/kg x 70 kg = 420 mL), which can be reduced further to 4 mL/kg PBW if needed; and (2) LIMITING INSPIRATORY PLATEAU PRESSURE (Pplat) TO <= 30 CM H2O (and driving pressure Pplat - PEEP <15 cm H2O). High tidal volumes and elevated plateau pressures cause alveolar overdistension, cyclic atelectrauma, and release of systemic inflammatory mediators (volutrauma and biotrauma). Permissive hypercapnia (allowing pH to drift down to 7.20-7.25) is well-tolerated."],
            ["Increasing tidal volume to 10 mL/kg of actual body weight (980 mL) to eliminate atelectasis", "High tidal volumes based on actual weight cause massive alveolar barotrauma/volutrauma, worsening lung injury and significantly increasing mortality."],
            ["Decreasing PEEP to 5 cm H2O to reduce intrathoracic pressure and enhance venous return", "In severe ARDS, higher PEEP (typically 12-18 cm H2O) is required to maintain alveolar recruitment and prevent repetitive end-expiratory alveolar collapse (atelectrauma)."],
            ["Switching to pressure support ventilation with zero backup rate to promote spontaneous effort", "In severe acute ARDS with a P/F ratio of 85, spontaneous unassisted breathing increases work of breathing, transpulmonary pressure swings (patient self-inflicted lung injury [P-SILI]), and oxygen consumption."],
            ["Immediate extubation to high-flow nasal cannula at 60 L/min to avoid ventilator complications", "Extubation in severe ARDS with refractory hypoxemia (P/F 85) leads to rapid asphyxiation and cardiac arrest."]
        ],
        "Severe ARDS (P/F 85, plateau pressure 36) = Low tidal volume (6 mL/kg PBW = 420 mL, target Pplat <= 30 cm H2O).",
        "Apply lung-protective ventilation in severe ARDS: tidal volume must be 6 mL/kg predicted body weight (not actual weight) targeting plateau pressure <= 30 cm H2O to reduce mortality.",
        "Increasing tidal volume to 10 mL/kg of actual body weight (980 mL) to eliminate atelectasis",
        "Ventilator dosing based on actual weight causes lethal volutrauma in ARDS; predicted body weight must be used, targeting 6 mL/kg.",
        refs['op-c-s2-0926']['citation']
    ))

    # 0927: Massive PE Thrombolysis (B)
    items.append(format_spec(
        "op-c-s2-0927", "Step 2 CK", "Medicine", "Respiratory",
        "Massive Pulmonary Embolism Hemodynamic Collapse Systemic Thrombolysis", 4,
        "A 52-year-old woman undergoes total left knee arthroplasty. On postoperative day 2, she suddenly collapses while attempting to ambulate to the bathroom. She is unresponsive for 10 seconds before regaining consciousness. She is in severe respiratory distress, cyanotic, and diaphoretic. Vital signs: blood pressure 72/46 mm Hg, heart rate 132/min, respiratory rate 32/min, and oxygen saturation 80% on high-flow mask. Physical examination reveals elevated JVP to the mandibular angle, an accentuated pulmonic component of S2, and clear lung fields bilaterally. 12-lead ECG shows sinus tachycardia, new right bundle branch block, and S1Q3T3 pattern. Bedside focused echocardiography demonstrates acute, massive right ventricular dilation with McConnell sign (hypokinesis of the RV free wall with sparing of the RV apex) and paradoxical septal flattening into the left ventricle during systole. She has no active bleeding or history of intracranial hemorrhage or surgery. Despite rapid infusion of 1 liter of normal saline, her systolic blood pressure remains 76 mm Hg. Which of the following is the most appropriate immediate therapy?",
        [
            ["Intravenous systemic thrombolysis with recombinant tissue plasminogen activator (alteplase)", "This patient presents with a MASSIVE (HIGH-RISK) PULMONARY EMBOLISM (PE), defined by PE causing HEMODYNAMIC INSTABILITY: sustained hypotension (systolic BP <90 mm Hg or drop in systolic BP >= 40 mm Hg for >15 minutes), pulselessness, or persistent profound shock, not explained by other causes. Bedside echocardiogram confirms acute RV strain with the McConnell sign (highly specific for acute PE) and paradoxical septal shift causing left ventricular underfilling and obstructive cardiogenic shock. In the absence of absolute contraindications (recent intracranial hemorrhage, active internal bleeding, recent intracranial surgery), SYSTEMIC THROMBOLYTIC THERAPY (e.g., intravenous alteplase 100 mg infused over 2 hours, or rapid infusion in arrest) is the primary life-saving intervention. Thrombolysis rapidly dissolves the obstructing pulmonary arterial thrombus, unloads the failing right ventricle, restores pulmonary capillary blood flow, and reverses obstructive cardiogenic shock. In contrast, submassive (intermediate-risk) PE (RV dysfunction/elevated troponin but normal BP) is initially managed with anticoagulation alone unless hemodynamic decompensation occurs."],
            ["Initiation of therapeutic anticoagulation with low-molecular-weight heparin alone without thrombolysis", "Anticoagulation alone prevents new clot formation but does not dissolve the existing massive occlusive clot causing shock; systemic thrombolysis is mandatory for massive PE with hypotension."],
            ["Emergent placement of an inferior vena cava (IVC) filter without medical therapy", "IVC filters prevent future lower extremity emboli, but do nothing to relieve acute pulmonary arterial obstruction causing imminent circulatory collapse."],
            ["Administration of intravenous furosemide 80 mg bolus to relieve right ventricular congestion", "Diuretics reduce RV preload, precipitating fatal cardiac arrest in acute right ventricular failure dependent on adequate filling pressure."],
            ["Immediate endotracheal intubation followed by high-level positive end-expiratory pressure", "Positive pressure ventilation increases RV afterload, reduces RV venous return, and can trigger immediate pulseless electrical activity arrest in massive PE."]
        ],
        "PE + persistent systolic BP <90 + RV dilation (McConnell sign) = Massive PE (systemic thrombolysis with IV alteplase).",
        "Distinguish massive (high-risk) pulmonary embolism with shock from submassive PE, selecting immediate systemic thrombolysis to restore pulmonary perfusion.",
        "Initiation of therapeutic anticoagulation with low-molecular-weight heparin alone without thrombolysis",
        "Anticoagulation monotherapy is insufficient for massive PE with shock; systemic thrombolysis is required to rapidly dissolve the mechanical obstruction.",
        refs['op-c-s2-0927']['citation']
    ))

    # 0928: Status Asthmaticus (C)
    items.append(format_spec(
        "op-c-s2-0928", "Step 2 CK", "Medicine", "Respiratory",
        "Severe Acute Asthma Status Asthmaticus IV Magnesium Sulfate Escalation", 4,
        "A 24-year-old woman with persistent asthma presents to the emergency department in severe respiratory distress. She has used her albuterol metered-dose inhaler every 20 minutes for the past 4 hours without relief. On examination, she is sitting forward in a tripod position, speaking in single-word phrases, and using sternocleidomastoid accessory muscles. Vital signs: blood pressure 138/88 mm Hg, heart rate 126/min, respiratory rate 30/min, and oxygen saturation 90% on room air. Chest auscultation reveals diffuse, high-pitched expiratory and inspiratory wheezing with diminished breath sounds at the bases. Peak expiratory flow (PEF) is 32% of predicted. Over the first hour, she receives three back-to-back nebulizations of albuterol (5 mg) combined with ipratropium bromide (0.5 mg) and intravenous methylprednisolone 60 mg, along with supplemental oxygen. Despite these treatments, she remains in marked distress with persistent wheezing, heart rate 130/min, and PEF at 36% of predicted. Which of the following is the most appropriate next pharmacotherapy to administer?",
        [
            ["Intravenous magnesium sulfate 2 grams infused over 20 minutes", "This patient has SEVERE ACUTE ASTHMA EXACERBATION (STATUS ASTHMATICUS) refractory to initial first-line therapy (repetitive inhaled short-acting beta-agonists [SABA], inhaled short-acting muscarinic antagonists [SAMA], and systemic corticosteroids). In patients with severe acute asthma whose peak expiratory flow remains <40-50% of predicted or who exhibit signs of life-threatening distress after 1 hour of aggressive therapy, the established guideline-directed adjunctive pharmacotherapy is INTRAVENOUS MAGNESIUM SULFATE (2 grams IV over 20 minutes). Magnesium acts as a potent bronchodilator by: (1) Inhibiting voltage-gated calcium channels on bronchial smooth muscle cells, blocking intracellular calcium influx; (2) Inhibiting acetylcholine release at motor nerve terminals; and (3) Stabilizing mast cell membranes. Randomized controlled trials have demonstrated that IV magnesium sulfate significantly improves pulmonary function, reduces hospital admission rates, and prevents respiratory failure in severe refractory asthma. If respiratory muscle exhaustion ensues (silent chest, normal or rising PaCO2 indicating impending arrest), rapid sequence intubation with a large endotracheal tube is required."],
            ["Immediate endotracheal intubation and mechanical ventilation without further medical trials", "Intubation in status asthmaticus is high-risk (severe air trapping, barotrauma, circulatory collapse) and is reserved for respiratory exhaustion (silent chest, hypercapnia), not before IV magnesium."],
            ["Subcutaneous injection of terbutaline 0.25 mg repeated every 15 minutes", "Parenteral beta-agonists (terbutaline) have no proven superiority over inhaled SABAs and produce severe systemic tachycardia and arrhythmias; IV magnesium is the guideline-preferred escalation."],
            ["Administration of oral montelukast 10 mg to block leukotriene receptors", "Oral leukotriene receptor antagonists have slow onset of action and no proven clinical efficacy in acute emergency status asthmaticus."],
            ["Intravenous infusion of aminophylline targeting serum theophylline 15 to 20 ug/mL", "Methylxanthines (aminophylline/theophylline) have narrow therapeutic windows, severe pro-arrhythmic toxicity, and provide no additional benefit over standard therapies."]
        ],
        "Severe asthma refractory to SABA/ipratropium/steroids (PEF <40%) = IV magnesium sulfate 2 g over 20 min.",
        "Recognize severe acute asthma refractory to initial bronchodilators and systemic steroids, choosing intravenous magnesium sulfate as the proven second-line bronchodilator.",
        "Immediate endotracheal intubation and mechanical ventilation without further medical trials",
        "Intubation in asthma carries high complication rates; trial of IV magnesium sulfate is indicated before mechanical ventilation unless the patient is in extremis.",
        refs['op-c-s2-0928']['citation']
    ))

    # 0929: Complicated Parapneumonic Effusion (D)
    items.append(format_spec(
        "op-c-s2-0929", "Step 2 CK", "Medicine", "Respiratory",
        "Complicated Parapneumonic Effusion Low pH High LDH Tube Thoracostomy", 4,
        "A 62-year-old man presents with persistent fever, right pleuritic chest pain, and productive cough for 6 days. Three days ago, his primary physician prescribed oral amoxicillin-clavulanate for community-acquired pneumonia, but his symptoms have steadily worsened. Vital signs: temperature 38.8 C (101.8 F), blood pressure 124/76 mm Hg, heart rate 104/min, respiratory rate 24/min, and oxygen saturation 93% on room air. Physical examination reveals dullness to percussion and absent breath sounds over the right lower hemithorax. Chest radiograph demonstrates a dense right lower lobe consolidation with a moderate loculated pleural effusion. Diagnostic thoracentesis yields 60 mL of turbid, yellow pleural fluid. Pleural fluid analysis reveals: pleural pH 7.12, glucose 34 mg/dL, LDH 1,450 U/L (serum LDH 210 U/L), total protein 4.8 g/dL (serum protein 6.8 g/dL), and nucleated cell count 48,000/uL with 92% neutrophils. Gram stain is currently negative. Which of the following is the most appropriate next step in management?",
        [
            ["Immediate placement of an intercostal chest tube (tube thoracostomy) for complete pleural drainage", "This patient has a COMPLICATED PARAPNEUMONIC EFFUSION (or impending empyema). Parapneumonic effusions are categorized into three stages: (1) Uncomplicated (exudate, pH >7.20, glucose >60 mg/dL, LDH <1,000, sterile); (2) Complicated (bacterial invasion into pleural space causing active leukocyte metabolism, resulting in PLEURAL pH <7.20, GLUCOSE <60 MG/DL, and LDH >1,000 U/L); and (3) Empyema (frank pus or positive pleural Gram stain/culture). While uncomplicated effusions resolve with systemic antibiotics alone, a COMPLICATED PARAPNEUMONIC EFFUSION (pH <7.20 or glucose <60 mg/dL) WILL NEVER RESOLVE WITH ANTIBIOTICS ALONE due to pleural space loculation, fibrin deposition, and impaired antibiotic penetration. TUBE THORACOSTOMY (CHEST TUBE DRAINAGE) IS MANDATORY AND URGENT to evacuate infected acidic fluid, prevent pleural peel formation (fibrothorax), and eliminate the nidus of sepsis. Broad-spectrum intravenous antibiotics (e.g., ceftriaxone plus metronidazole or ampicillin-sulbactam) should be continued concurrently."],
            ["Continuation of intravenous antibiotics alone with repeat thoracentesis in 48 hours if fevers persist", "Antibiotics alone fail in complicated effusions with pH <7.20 and glucose <60 mg/dL; delaying drainage leads to extensive pleural loculation and requires surgical decortication."],
            ["Immediate video-assisted thoracoscopic surgery (VATS) with total decortication without chest tube trial", "VATS decortication is indicated if tube thoracostomy drainage and intrapleural fibrinolytics fail; initial management is tube thoracostomy drainage."],
            ["Injection of intrapleural corticosteroids to suppress local neutrophilic inflammation", "Intrapleural steroids have no role in bacterial effusions and promote uncontrolled infection and empyema expansion."],
            ["Therapeutic thoracentesis to dryness without indwelling catheter or tube placement", "Simple needle thoracentesis is inadequate for complicated effusions because loculations and ongoing bacterial transudation cause rapid fluid reaccumulation."]
        ],
        "Pneumonia + pleural effusion with pH 7.12 + glucose 34 + LDH 1,450 = Complicated parapneumonic effusion (immediate tube thoracostomy drainage).",
        "Identify complicated parapneumonic effusion from pleural fluid markers (pH <7.20, glucose <60, LDH >1,000), recognizing that tube thoracostomy drainage is mandatory alongside antibiotics.",
        "Continuation of intravenous antibiotics alone with repeat thoracentesis in 48 hours if fevers persist",
        "A pleural pH <7.20 indicates bacterial invasion and metabolic acid production that will not clear with antibiotics alone; prompt chest tube drainage is required.",
        refs['op-c-s2-0929']['citation']
    ))

    # 0930: Septic Shock Vasopressors (E)
    items.append(format_spec(
        "op-c-s2-0930", "Step 2 CK", "Medicine", "General Principles",
        "Septic Shock Norepinephrine First-Line Vasopressor Target MAP", 5,
        "A 68-year-old woman is admitted to the intensive care unit with septic shock secondary to acute ascending pyelonephritis (Escherichia coli). She has received 30 mL/kg (total 2,400 mL) of intravenous balanced crystalloid solution over the past 2 hours. Despite fluid resuscitation, she remains profoundly hypotensive and confused. Vital signs: blood pressure 78/44 mm Hg (mean arterial pressure [MAP] 55 mm Hg), heart rate 118/min, central venous oxygen saturation (ScvO2) 62%, and arterial lactate 4.8 mmol/L. Bedside ultrasound of the inferior vena cava shows minimal respiratory variation and collapsed hyperdynamic left ventricular chambers. Broad-spectrum antibiotics have been initiated. Which of the following is the guideline-directed first-line vasopressor to initiate immediately to achieve and maintain a target MAP >= 65 mm Hg?",
        [
            ["Continuous intravenous norepinephrine infusion titrated to target mean arterial pressure >= 65 mm Hg", "This patient has REFRACTORY SEPTIC SHOCK, defined by persistent hypotension requiring vasopressors to maintain MAP >= 65 mm Hg and serum lactate >2 mmol/L despite adequate fluid resuscitation (>= 30 mL/kg). In accordance with the Surviving Sepsis Campaign international guidelines, NOREPINEPHRINE IS THE FIRST-LINE VASOPRESSOR OF CHOICE. Norepinephrine is a potent alpha-1 adrenergic agonist with modest beta-1 inotropic properties. It increases systemic vascular resistance (vasoconstriction) to restore organ perfusion pressure, while mildly increasing stroke volume with minimal excessive chronotropic arrhythmogenicity. The target is a MEAN ARTERIAL PRESSURE (MAP) >= 65 MM HG. If MAP remains inadequate despite moderate-to-high doses of norepinephrine (e.g., >0.25 ug/kg/min), VASOPRESSIN (fixed dose 0.03 units/min) should be added as a second-line adjunct to raise MAP and reduce norepinephrine dosage requirements, rather than escalating norepinephrine alone."],
            ["Continuous intravenous dopamine infusion titrated from 5 to 20 ug/kg/min", "Dopamine is associated with significantly higher rates of tachyarrhythmias and increased mortality compared to norepinephrine in septic shock; it is no longer recommended as first-line."],
            ["Continuous intravenous phenylephrine infusion to achieve pure peripheral alpha-1 vasoconstriction", "Phenylephrine causes pure vasoconstriction without inotropic support, which decreases stroke volume and cardiac output; it is reserved only for severe tachyarrhythmias."],
            ["Immediate high-dose intravenous epinephrine infusion as the sole initial vasopressor", "Epinephrine is a second-line agent added to norepinephrine; as initial monotherapy, it causes marked tachycardia, splanchnic vasoconstriction, and increases lactic acid via aerobic glycolysis."],
            ["Administration of intravenous hydrocortisone 200 mg bolus prior to starting any vasopressors", "Corticosteroids are indicated only as refractory septic shock therapy if blood pressure remains unresponsive despite fluids and high-dose vasopressors, not before vasopressors."]
        ],
        "Septic shock refractory to 30 mL/kg fluids (MAP 55, lactate 4.8) = First-line vasopressor is IV norepinephrine (target MAP >= 65 mm Hg).",
        "Select norepinephrine as the guideline-directed first-line vasopressor in septic shock to restore target MAP >= 65 mm Hg, avoiding dopamine due to excessive arrhythmic mortality.",
        "Continuous intravenous dopamine infusion titrated from 5 to 20 ug/kg/min",
        "Dopamine causes substantially more tachyarrhythmias and excess mortality in septic shock compared to norepinephrine, which is the proven first-line agent.",
        refs['op-c-s2-0930']['citation']
    ))

    return items

if __name__ == '__main__':
    items = get_batch38()
    print(f"Batch 38 part 1 ({len(items)} items) ready.")
