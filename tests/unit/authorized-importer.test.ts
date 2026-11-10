import { describe, it, expect } from 'vitest';
import { validateAuthorizedBatch } from '@/lib/authorized-importer';

const validHumanQuestionFixture = {
  code: 'auth-med-0001',
  exam: 'Step 3',
  subject: 'Internal Medicine',
  system: 'Cardiovascular System',
  topic: 'Aortic Stenosis',
  type: 'SINGLE' as const,
  difficulty: 3,
  stem: 'A 72-year-old male presents with exertional syncope and dyspnea. Physical examination reveals a harsh crescendo-decrescendo systolic murmur at the right upper sternal border radiating to the carotids, with delayed carotid upstroke (pulsus parvus et tardus). Echocardiography confirms severe calcific aortic stenosis with a valve area of 0.7 cm². Which of the following is the most appropriate definitive management?',
  options: [
    { text: 'Aortic valve replacement (surgical or transcatheter)', correct: true, explanation: 'Symptomatic severe aortic stenosis has a dismal prognosis without intervention and requires prompt valve replacement.' },
    { text: 'High-dose loop diuretic monotherapy', correct: false, explanation: 'Overzealous diuresis reduces preload in fixed outflow obstruction and can precipitate severe hypotension and cardiogenic shock.' },
    { text: 'Beta-blocker dose escalation', correct: false, explanation: 'Beta-blockers can depress myocardial contractility and are contraindicated in critical symptomatic aortic stenosis.' },
    { text: 'Watchful waiting with follow-up echocardiogram in 6 months', correct: false, explanation: 'Once symptoms (angina, syncope, heart failure) appear, median survival without replacement is <2 years.' },
  ],
  explanation: 'Symptomatic severe aortic stenosis classically manifests with the triad of dyspnea, syncope, and angina. Once symptoms appear, definitive valve replacement (SAVR or TAVR depending on surgical risk and anatomical feasibility) is indicated to restore survival expectancy.',
  objective: 'Recognize the clinical indications for prompt valve replacement in symptomatic severe aortic stenosis.',
  keyPoints: [
    'Severe aortic stenosis is defined by aortic valve area <= 1.0 cm² or mean gradient >= 40 mmHg.',
    'The onset of symptoms heralds dramatic mortality risk without aortic valve replacement.',
  ],
  references: [
    { label: '2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease', url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000923' },
  ],
  source: 'Open Clinical Case Registry / Institutional Collaborative',
  license: 'CC-BY-4.0',
  attribution: 'Academic Division of Cardiology & Medical Education Collaborative',
};

describe('Authorized human-authored content importer', () => {
  it('validates a complete, licensed human-authored question fixture', () => {
    const res = validateAuthorizedBatch([validHumanQuestionFixture]);
    expect(res.valid).toBe(true);
    expect(res.errors).toHaveLength(0);
    expect(res.validQuestions).toHaveLength(1);
    expect(res.provenance).toHaveLength(1);
    expect(res.provenance[0]!.license).toBe('CC-BY-4.0');
    expect(res.provenance[0]!.source).toContain('Open Clinical Case Registry');
  });

  it('rejects questions with undocumented, proprietary, or missing licenses', () => {
    const proprietaryQ = {
      ...validHumanQuestionFixture,
      code: 'auth-med-0002',
      license: 'All rights reserved / Proprietary',
    };
    const res = validateAuthorizedBatch([proprietaryQ]);
    expect(res.valid).toBe(false);
    expect(res.errors.some((e) => e.field === 'license')).toBe(true);
  });

  it('rejects questions lacking source provenance or clinical attribution', () => {
    const noSourceQ = {
      ...validHumanQuestionFixture,
      code: 'auth-med-0003',
      source: '',
    };
    const res = validateAuthorizedBatch([noSourceQ]);
    expect(res.valid).toBe(false);
    expect(res.errors.some((e) => e.field === 'source')).toBe(true);
  });

  it('rejects duplicate question codes within the same import batch', () => {
    const res = validateAuthorizedBatch([validHumanQuestionFixture, validHumanQuestionFixture]);
    expect(res.valid).toBe(false);
    expect(res.errors.some((e) => e.field === 'code' && e.message.includes('Duplicate'))).toBe(true);
  });

  it('requires alt text whenever clinical exhibit images are included', () => {
    const exhibitQ = {
      ...validHumanQuestionFixture,
      code: 'auth-med-0004',
      image: 'https://images.example.edu/pathology/aortic-valve.jpg',
      imageAlt: '', // Missing alt
    };
    const res = validateAuthorizedBatch([exhibitQ]);
    expect(res.valid).toBe(false);
    expect(res.errors.some((e) => e.field === 'imageAlt')).toBe(true);
  });
});
