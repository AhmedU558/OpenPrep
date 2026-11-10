// Pure, descriptive practice progress assessment based strictly on actual practice volume and accuracy statistics.
// Does NOT fabricate speculative 3-digit score predictions or claim official exam readiness.

export type ReadinessTier = 'BEGINNING' | 'BUILDING' | 'ON_TRACK' | 'REMEDIATING' | 'ADVANCED_PRACTICE';

export type ReadinessItem = {
  kind: 'Subject' | 'System';
  id: string;
  name: string;
  pct: number;
  total: number;
};

export type ReadinessAssessment = {
  tier: ReadinessTier;
  badgeLabel: string;
  badgeTone: 'neutral' | 'brand' | 'warn' | 'ok';
  title: string;
  summary: string;
  coveragePct: number;
  accuracyPct: number;
  used: number;
  published: number;
  remaining: number;
  streakDays: number;
  weakAreas: ReadinessItem[];
  recommendations: string[];
};

export function assessExamReadiness(input: {
  used: number;
  published: number;
  correct: number;
  streak: number;
  weakSubjects?: { id: string; name: string; pct: number; total: number }[];
  weakSystems?: { id: string; name: string; pct: number; total: number }[];
}): ReadinessAssessment {
  const { used, published, correct, streak } = input;
  const coveragePct = published > 0 ? Math.min(100, Math.round((used / published) * 100)) : 0;
  const accuracyPct = used > 0 ? Math.min(100, Math.round((correct / used) * 100)) : 0;
  const remaining = Math.max(0, published - used);

  const weakSubjects = (input.weakSubjects ?? []).map((s) => ({ ...s, kind: 'Subject' as const }));
  const weakSystems = (input.weakSystems ?? []).map((s) => ({ ...s, kind: 'System' as const }));
  const weakAreas: ReadinessItem[] = [...weakSubjects, ...weakSystems]
    .sort((a, b) => a.pct - b.pct || b.total - a.total)
    .slice(0, 3);

  let tier: ReadinessTier;
  let badgeLabel: string;
  let badgeTone: 'neutral' | 'brand' | 'warn' | 'ok';
  let title: string;
  let summary: string;
  const recommendations: string[] = [];

  if (used < 25) {
    tier = 'BEGINNING';
    badgeLabel = 'Starting Out';
    badgeTone = 'neutral';
    title = 'Building Question Base';
    summary = `You have completed ${used} question${used === 1 ? '' : 's'} so far (${coveragePct}% of the bank). Focus on establishing a consistent daily rhythm.`;
    recommendations.push('Complete at least 15–20 questions daily in Tutor mode to get comfortable with vignette patterns.');
    recommendations.push('Carefully read explanations for all choices, including why incorrect options are wrong.');
  } else if (coveragePct < 40 && accuracyPct < 60) {
    tier = 'BUILDING';
    badgeLabel = 'Foundation Phase';
    badgeTone = 'warn';
    title = 'Core Concept Consolidation Needed';
    summary = `Current accuracy is ${accuracyPct}% across ${used} questions. Targeted review of weak organ systems will build your confidence.`;
    if (weakAreas.length > 0) {
      recommendations.push(`Prioritize practice blocks in your lowest-scoring areas: ${weakAreas.map((w) => w.name).join(', ')}.`);
    }
    recommendations.push('Create digital flashcards for high-yield mechanisms and drug adverse effects you encounter.');
    recommendations.push('Take notes in your notebook on repeated diagnostic criteria.');
  } else if (coveragePct < 40 && accuracyPct >= 60) {
    tier = 'ON_TRACK';
    badgeLabel = 'Progress Stable';
    badgeTone = 'brand';
    title = 'Solid Diagnostic Accuracy';
    summary = `Solid accuracy at ${accuracyPct}% across ${coveragePct}% bank coverage. You are establishing consistent clinical reasoning.`;
    recommendations.push('Continue increasing daily practice volume to cover more untackled organ systems.');
    recommendations.push('Start mixing in Timed practice blocks to develop pacing stamina (aim for ~90 sec/question).');
  } else if (coveragePct >= 40 && accuracyPct < 62) {
    tier = 'REMEDIATING';
    badgeLabel = 'Targeted Remediation';
    badgeTone = 'warn';
    title = 'Targeted Revision Recommended';
    summary = `You have covered ${coveragePct}% of the bank with an accuracy of ${accuracyPct}%. Focus on converting incorrect concepts.`;
    recommendations.push('Create a dedicated practice test from your "Incorrect" question pool.');
    if (weakAreas.length > 0) {
      recommendations.push(`Review foundational guidelines in ${weakAreas[0]?.name ?? 'your weak systems'}.`);
    }
    recommendations.push('Review clipped notebook notes before starting new question blocks.');
  } else {
    tier = 'ADVANCED_PRACTICE';
    badgeLabel = 'Advanced Bank Progress';
    badgeTone = 'ok';
    title = 'Substantial Practice Progress';
    summary = `Milestone achieved: ${accuracyPct}% accuracy across ${coveragePct}% of the bank with a ${streak}-day study streak. Continue reinforcing weak areas.`;
    recommendations.push('Maintain consistency with full-length timed multi-block simulations.');
    recommendations.push('Do a second pass on marked/bookmarked items to reinforce edge-case differentials.');
  }

  return {
    tier,
    badgeLabel,
    badgeTone,
    title,
    summary,
    coveragePct,
    accuracyPct,
    used,
    published,
    remaining,
    streakDays: streak,
    weakAreas,
    recommendations,
  };
}
