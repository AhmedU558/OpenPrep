import { describe, expect, it } from 'vitest';
import { assessExamReadiness } from '@/lib/readiness';

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
