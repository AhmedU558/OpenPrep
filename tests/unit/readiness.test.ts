import { describe, expect, it } from 'vitest';
import {
  assessExamReadiness,
  estimateUSMLEPerformance,
  predictStep1,
  predictStep2CK,
  predictStep3,
} from '@/lib/readiness';

describe('assessExamReadiness', () => {
  it('identifies beginning phase when fewer than 25 questions are used', () => {
    const res = assessExamReadiness({
      used: 10,
      published: 200,
      correct: 7,
      streak: 2,
    });
    expect(res.tier).toBe('BEGINNING');
    expect(res.badgeLabel).toBe('Starting Out');
    expect(res.badgeTone).toBe('neutral');
    expect(res.coveragePct).toBe(5);
    expect(res.accuracyPct).toBe(70);
    expect(res.recommendations.length).toBeGreaterThan(0);
  });

  it('identifies foundation phase when coverage is low and accuracy is under 60%', () => {
    const res = assessExamReadiness({
      used: 50,
      published: 200,
      correct: 25,
      streak: 3,
      weakSubjects: [{ id: 's1', name: 'Biochemistry', pct: 40, total: 10 }],
      weakSystems: [{ id: 'sys1', name: 'Cardiovascular', pct: 50, total: 12 }],
    });
    expect(res.tier).toBe('BUILDING');
    expect(res.badgeLabel).toBe('Foundation Phase');
    expect(res.badgeTone).toBe('warn');
    expect(res.coveragePct).toBe(25);
    expect(res.accuracyPct).toBe(50);
    expect(res.weakAreas[0]?.name).toBe('Biochemistry');
  });

  it('identifies on-track phase when accuracy is high (>60%) with early coverage', () => {
    const res = assessExamReadiness({
      used: 60,
      published: 200,
      correct: 45,
      streak: 5,
    });
    expect(res.tier).toBe('ON_TRACK');
    expect(res.badgeLabel).toBe('Progress Stable');
    expect(res.badgeTone).toBe('brand');
    expect(res.accuracyPct).toBe(75);
  });

  it('identifies remediation phase when coverage is >=40% but accuracy is <62%', () => {
    const res = assessExamReadiness({
      used: 100,
      published: 200,
      correct: 55,
      streak: 7,
    });
    expect(res.tier).toBe('REMEDIATING');
    expect(res.badgeLabel).toBe('Targeted Remediation');
    expect(res.badgeTone).toBe('warn');
    expect(res.coveragePct).toBe(50);
    expect(res.accuracyPct).toBe(55);
  });

  it('identifies advanced practice progress phase when coverage is >=40% and accuracy is >=62%', () => {
    const res = assessExamReadiness({
      used: 150,
      published: 200,
      correct: 110,
      streak: 14,
    });
    expect(res.tier).toBe('ADVANCED_PRACTICE');
    expect(res.badgeLabel).toBe('Advanced Bank Progress');
    expect(res.badgeTone).toBe('ok');
    expect(res.coveragePct).toBe(75);
    expect(res.accuracyPct).toBe(73);
  });

  it('handles zero published or zero used gracefully without division by zero', () => {
    const res = assessExamReadiness({
      used: 0,
      published: 0,
      correct: 0,
      streak: 0,
    });
    expect(res.tier).toBe('BEGINNING');
    expect(res.coveragePct).toBe(0);
    expect(res.accuracyPct).toBe(0);
    expect(res.remaining).toBe(0);
  });
});

describe('USMLE Predictive Score Estimators', () => {
  describe('predictStep1', () => {
    it('returns INSUFFICIENT_DATA when tested items < 15', () => {
      const pred = predictStep1(10, 80);
      expect(pred.status).toBe('INSUFFICIENT_DATA');
      expect(pred.statusLabel).toBe('Insufficient Data');
      expect(pred.passLikelihoodPct).toBeUndefined();
    });

    it('predicts high pass probability for accuracy >= 75% with sufficient volume', () => {
      const pred = predictStep1(100, 75);
      expect(pred.status).toBe('VERY_HIGH_PROBABILITY');
      expect(pred.badgeTone).toBe('ok');
      expect(pred.passLikelihoodPct).toBeGreaterThanOrEqual(90);
      expect(pred.passingStandard).toBe(196);
    });

    it('identifies borderline pass when accuracy is near 60%', () => {
      const pred = predictStep1(80, 61);
      expect(pred.status).toBe('BORDERLINE');
      expect(pred.badgeTone).toBe('warn');
      expect(pred.passLikelihoodPct).toBeGreaterThanOrEqual(50);
      expect(pred.passLikelihoodPct).toBeLessThan(75);
    });

    it('identifies at risk when accuracy is well below 60%', () => {
      const pred = predictStep1(50, 42);
      expect(pred.status).toBe('AT_RISK');
      expect(pred.badgeTone).toBe('warn');
      expect(pred.passLikelihoodPct).toBeLessThan(55);
    });
  });

  describe('predictStep2CK', () => {
    it('returns INSUFFICIENT_DATA when tested items < 15', () => {
      const pred = predictStep2CK(12, 70);
      expect(pred.status).toBe('INSUFFICIENT_DATA');
      expect(pred.projectedScore).toBeUndefined();
    });

    it('predicts competitive 3-digit score for high accuracy', () => {
      const pred = predictStep2CK(120, 75);
      expect(pred.status).toBe('VERY_HIGH_PROBABILITY');
      expect(pred.projectedScore).toBeGreaterThanOrEqual(245);
      expect(pred.scoreBuffer).toBeGreaterThan(30);
      expect(pred.scoreRange).toBeDefined();
      expect(pred.scoreRange![0]).toBeLessThanOrEqual(pred.projectedScore!);
      expect(pred.scoreRange![1]).toBeGreaterThanOrEqual(pred.projectedScore!);
      expect(pred.percentileRank).toBeGreaterThanOrEqual(50);
    });

    it('predicts passing score near passing standard (214) for 55% accuracy', () => {
      const pred = predictStep2CK(60, 55);
      expect(pred.status).toBe('BORDERLINE');
      expect(pred.projectedScore).toBe(214);
      expect(pred.scoreBuffer).toBe(0);
    });
  });

  describe('predictStep3', () => {
    it('returns INSUFFICIENT_DATA when tested items < 15', () => {
      const pred = predictStep3(8, 65);
      expect(pred.status).toBe('INSUFFICIENT_DATA');
      expect(pred.projectedScore).toBeUndefined();
    });

    it('predicts passing score above 200 standard for 65% accuracy', () => {
      const pred = predictStep3(80, 65);
      expect(pred.status).toBe('PASS_LIKELY');
      expect(pred.projectedScore).toBeGreaterThanOrEqual(210);
      expect(pred.scoreBuffer).toBeGreaterThanOrEqual(10);
    });
  });

  describe('estimateUSMLEPerformance', () => {
    it('handles empty exam history with fallback or insufficient data', () => {
      const estimate = estimateUSMLEPerformance([], 0, 0);
      expect(estimate.hasUSMLEData).toBe(false);
      expect(estimate.step1.status).toBe('INSUFFICIENT_DATA');
      expect(estimate.step2ck.status).toBe('INSUFFICIENT_DATA');
      expect(estimate.step3.status).toBe('INSUFFICIENT_DATA');
    });

    it('computes exam-specific predictions when USMLE exams are present', () => {
      const byExam = [
        { name: 'Step 1', total: 100, correct: 75, pct: 75 },
        { name: 'Step 2 CK', total: 80, correct: 56, pct: 70 },
        { name: 'Step 3', total: 60, correct: 39, pct: 65 },
      ];
      const estimate = estimateUSMLEPerformance(byExam, 240, 71);
      expect(estimate.hasUSMLEData).toBe(true);
      expect(estimate.totalUSMLEAnswered).toBe(240);
      expect(estimate.step1.testedCount).toBe(100);
      expect(estimate.step1.passLikelihoodPct).toBeGreaterThanOrEqual(90);
      expect(estimate.step2ck.testedCount).toBe(80);
      expect(estimate.step2ck.projectedScore).toBeGreaterThanOrEqual(240);
      expect(estimate.step3.testedCount).toBe(60);
      expect(estimate.step3.projectedScore).toBeGreaterThanOrEqual(210);
    });
  });
});
