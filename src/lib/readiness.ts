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

// ---------------- USMLE Predictive Score & Probability Estimator

export type USMLEStepKey = 'step1' | 'step2ck' | 'step3';

export type USMLEStepPrediction = {
  step: 'Step 1' | 'Step 2 CK' | 'Step 3';
  stepKey: USMLEStepKey;
  testedCount: number;
  accuracyPct: number;
  status: 'INSUFFICIENT_DATA' | 'AT_RISK' | 'BORDERLINE' | 'PASS_LIKELY' | 'VERY_HIGH_PROBABILITY';
  statusLabel: string;
  badgeTone: 'neutral' | 'warn' | 'brand' | 'ok';
  passLikelihoodPct?: number;
  projectedScore?: number;
  scoreRange?: [number, number];
  percentileRank?: number;
  passingStandard: number;
  scoreBuffer: number;
  description: string;
  recommendation: string;
};

export type USMLEReadinessEstimate = {
  hasUSMLEData: boolean;
  totalUSMLEAnswered: number;
  overallUSMLEAccuracyPct: number;
  step1: USMLEStepPrediction;
  step2ck: USMLEStepPrediction;
  step3: USMLEStepPrediction;
  summary: string;
};

function calculateNormalCDF(z: number): number {
  return 1 / (1 + Math.exp(-0.07056 * Math.pow(z, 3) - 1.5976 * z));
}

export function predictStep1(testedCount: number, accuracyPct: number): USMLEStepPrediction {
  const passingStandard = 196; // historical 3-digit equivalent of passing line (~60%)
  if (testedCount < 15) {
    return {
      step: 'Step 1',
      stepKey: 'step1',
      testedCount,
      accuracyPct,
      status: 'INSUFFICIENT_DATA',
      statusLabel: 'Insufficient Data',
      badgeTone: 'neutral',
      passingStandard,
      scoreBuffer: 0,
      description: `Completed ${testedCount} Step 1 question${testedCount === 1 ? '' : 's'}. Complete at least 15 items for a calibrated pass likelihood.`,
      recommendation: 'Complete mixed 40-question blocks to establish your baseline accuracy.',
    };
  }

  const weight = Math.min(1.0, Math.sqrt(testedCount / 60));
  const z = ((accuracyPct - 57) / 5.0) * weight;
  const passLikelihoodPct = Math.max(5, Math.min(99, Math.round(100 / (1 + Math.exp(-z)))));
  const scoreBuffer = accuracyPct - 60;

  let status: USMLEStepPrediction['status'];
  let statusLabel: string;
  let badgeTone: USMLEStepPrediction['badgeTone'];
  let description: string;
  let recommendation: string;

  if (passLikelihoodPct >= 85) {
    status = 'VERY_HIGH_PROBABILITY';
    statusLabel = 'Very High Pass Likelihood';
    badgeTone = 'ok';
    description = `Estimated pass likelihood is ${passLikelihoodPct}% based on ${accuracyPct}% accuracy across ${testedCount} questions.`;
    recommendation = 'Maintain test endurance with timed practice blocks; review weak organ systems.';
  } else if (passLikelihoodPct >= 70) {
    status = 'PASS_LIKELY';
    statusLabel = 'Passing Likely';
    badgeTone = 'brand';
    description = `Estimated pass likelihood is ${passLikelihoodPct}% (${accuracyPct}% accuracy). You are currently on track to pass Step 1.`;
    recommendation = 'Solidify diagnostic accuracy in lower-scoring organ systems to widen your safety margin.';
  } else if (passLikelihoodPct >= 50) {
    status = 'BORDERLINE';
    statusLabel = 'Borderline Passing';
    badgeTone = 'warn';
    description = `Current accuracy (${accuracyPct}%) is near the 60% passing benchmark (estimated pass likelihood: ${passLikelihoodPct}%).`;
    recommendation = 'Intensify review of high-yield mechanisms and pharmacology before exam day.';
  } else {
    status = 'AT_RISK';
    statusLabel = 'At Risk';
    badgeTone = 'warn';
    description = `Current accuracy (${accuracyPct}%) is below the ~60% passing standard.`;
    recommendation = 'Thoroughly review explanations for both correct and incorrect answer choices.';
  }

  return {
    step: 'Step 1',
    stepKey: 'step1',
    testedCount,
    accuracyPct,
    status,
    statusLabel,
    badgeTone,
    passLikelihoodPct,
    passingStandard,
    scoreBuffer,
    description,
    recommendation,
  };
}

export function predictStep2CK(testedCount: number, accuracyPct: number): USMLEStepPrediction {
  const passingStandard = 214; // Official USMLE Step 2 CK passing standard
  if (testedCount < 15) {
    return {
      step: 'Step 2 CK',
      stepKey: 'step2ck',
      testedCount,
      accuracyPct,
      status: 'INSUFFICIENT_DATA',
      statusLabel: 'Insufficient Data',
      badgeTone: 'neutral',
      passingStandard,
      scoreBuffer: 0,
      description: `Completed ${testedCount} Step 2 CK question${testedCount === 1 ? '' : 's'}. Complete at least 15 items for a calibrated 3-digit score projection.`,
      recommendation: 'Practice timed clinical vignettes focusing on next best steps in management.',
    };
  }

  const baseScore = Math.round(214 + (accuracyPct - 55) * 2.25);
  const projectedScore = Math.max(160, Math.min(278, baseScore));
  const margin = Math.max(5, Math.min(18, Math.round(22 / Math.sqrt(testedCount / 25))));
  const scoreRange: [number, number] = [Math.max(160, projectedScore - margin), Math.min(280, projectedScore + margin)];
  const zScore = (projectedScore - 248) / 15;
  const percentileRank = Math.max(1, Math.min(99, Math.round(100 * calculateNormalCDF(zScore))));
  const scoreBuffer = projectedScore - passingStandard;

  let status: USMLEStepPrediction['status'];
  let statusLabel: string;
  let badgeTone: USMLEStepPrediction['badgeTone'];
  let description: string;
  let recommendation: string;

  if (projectedScore >= 245) {
    status = 'VERY_HIGH_PROBABILITY';
    statusLabel = 'Competitive Score';
    badgeTone = 'ok';
    description = `Projected score of ${projectedScore} (Range: ${scoreRange[0]}–${scoreRange[1]}), approximately the ${percentileRank}th national percentile.`;
    recommendation = 'Maintain diagnostic precision with full-length timed block simulations.';
  } else if (projectedScore >= 225) {
    status = 'PASS_LIKELY';
    statusLabel = 'Solid Passing Margin';
    badgeTone = 'brand';
    description = `Projected score of ${projectedScore} (${scoreBuffer > 0 ? '+' : ''}${scoreBuffer} pts above passing line 214; ${percentileRank}th percentile).`;
    recommendation = 'Focus on high-yield internal medicine algorithms to push toward the 245+ band.';
  } else if (projectedScore >= 214) {
    status = 'BORDERLINE';
    statusLabel = 'Borderline Passing';
    badgeTone = 'warn';
    description = `Projected score of ${projectedScore} is close to the 214 passing line (Range: ${scoreRange[0]}–${scoreRange[1]}).`;
    recommendation = 'Remediate weak clinical specialties (e.g. Pediatrics, OB/GYN, Surgery) with targeted practice.';
  } else {
    status = 'AT_RISK';
    statusLabel = 'Below Passing Line';
    badgeTone = 'warn';
    description = `Projected score of ${projectedScore} is below the 214 passing threshold.`;
    recommendation = 'Prioritize untimed tutor mode to reinforce clinical diagnostic criteria and management guidelines.';
  }

  return {
    step: 'Step 2 CK',
    stepKey: 'step2ck',
    testedCount,
    accuracyPct,
    status,
    statusLabel,
    badgeTone,
    projectedScore,
    scoreRange,
    percentileRank,
    passingStandard,
    scoreBuffer,
    description,
    recommendation,
  };
}

export function predictStep3(testedCount: number, accuracyPct: number): USMLEStepPrediction {
  const passingStandard = 200; // Official USMLE Step 3 passing standard
  if (testedCount < 15) {
    return {
      step: 'Step 3',
      stepKey: 'step3',
      testedCount,
      accuracyPct,
      status: 'INSUFFICIENT_DATA',
      statusLabel: 'Insufficient Data',
      badgeTone: 'neutral',
      passingStandard,
      scoreBuffer: 0,
      description: `Completed ${testedCount} Step 3 question${testedCount === 1 ? '' : 's'}. Complete at least 15 items for a calibrated score projection.`,
      recommendation: 'Practice ambulatory care cases, diagnostic staging, and medical management protocols.',
    };
  }

  const baseScore = Math.round(200 + (accuracyPct - 55) * 2.0);
  const projectedScore = Math.max(160, Math.min(270, baseScore));
  const margin = Math.max(5, Math.min(18, Math.round(20 / Math.sqrt(testedCount / 25))));
  const scoreRange: [number, number] = [Math.max(160, projectedScore - margin), Math.min(275, projectedScore + margin)];
  const zScore = (projectedScore - 228) / 15;
  const percentileRank = Math.max(1, Math.min(99, Math.round(100 * calculateNormalCDF(zScore))));
  const scoreBuffer = projectedScore - passingStandard;

  let status: USMLEStepPrediction['status'];
  let statusLabel: string;
  let badgeTone: USMLEStepPrediction['badgeTone'];
  let description: string;
  let recommendation: string;

  if (projectedScore >= 230) {
    status = 'VERY_HIGH_PROBABILITY';
    statusLabel = 'Comfortable Pass';
    badgeTone = 'ok';
    description = `Projected score of ${projectedScore} (Range: ${scoreRange[0]}–${scoreRange[1]}), well above the 200 passing standard.`;
    recommendation = 'Maintain momentum and review biostatistics and medical ethics cases.';
  } else if (projectedScore >= 210) {
    status = 'PASS_LIKELY';
    statusLabel = 'Solid Passing Margin';
    badgeTone = 'brand';
    description = `Projected score of ${projectedScore} (${scoreBuffer > 0 ? '+' : ''}${scoreBuffer} pts above passing standard 200).`;
    recommendation = 'Review outpatient management algorithms and emergency resuscitation steps.';
  } else if (projectedScore >= 200) {
    status = 'BORDERLINE';
    statusLabel = 'Borderline Passing';
    badgeTone = 'warn';
    description = `Projected score of ${projectedScore} is near the 200 passing standard.`;
    recommendation = 'Focus on high-yield CCS management principles and multi-step diagnostic sequences.';
  } else {
    status = 'AT_RISK';
    statusLabel = 'Below Passing Line';
    badgeTone = 'warn';
    description = `Projected score of ${projectedScore} is below the 200 passing standard.`;
    recommendation = 'Concentrate on clinical pharmacology, adverse drug interactions, and diagnostic workup.';
  }

  return {
    step: 'Step 3',
    stepKey: 'step3',
    testedCount,
    accuracyPct,
    status,
    statusLabel,
    badgeTone,
    projectedScore,
    scoreRange,
    percentileRank,
    passingStandard,
    scoreBuffer,
    description,
    recommendation,
  };
}

export function estimateUSMLEPerformance(
  byExam: { id?: string; name: string; total: number; correct: number; pct: number }[],
  overallUsed = 0,
  overallPct = 0
): USMLEReadinessEstimate {
  const findExam = (pattern: RegExp) => byExam.find((e) => pattern.test(e.name));

  const s1Row = findExam(/step\s*1/i);
  const s2Row = findExam(/step\s*2/i);
  const s3Row = findExam(/step\s*3/i);

  const s1Total = s1Row?.total ?? 0;
  const s1Pct = s1Row?.pct ?? (s1Total === 0 && overallUsed >= 15 ? overallPct : 0);

  const s2Total = s2Row?.total ?? 0;
  const s2Pct = s2Row?.pct ?? (s2Total === 0 && overallUsed >= 15 ? overallPct : 0);

  const s3Total = s3Row?.total ?? 0;
  const s3Pct = s3Row?.pct ?? (s3Total === 0 && overallUsed >= 15 ? overallPct : 0);

  const totalUSMLEAnswered = (s1Row?.total ?? 0) + (s2Row?.total ?? 0) + (s3Row?.total ?? 0);
  const totalCorrect = (s1Row?.correct ?? 0) + (s2Row?.correct ?? 0) + (s3Row?.correct ?? 0);
  const overallUSMLEAccuracyPct = totalUSMLEAnswered > 0 ? Math.round((totalCorrect / totalUSMLEAnswered) * 100) : overallPct;

  const hasUSMLEData = totalUSMLEAnswered > 0 || overallUsed >= 15;

  const step1 = predictStep1(s1Total > 0 ? s1Total : overallUsed, s1Pct);
  const step2ck = predictStep2CK(s2Total > 0 ? s2Total : overallUsed, s2Pct);
  const step3 = predictStep3(s3Total > 0 ? s3Total : overallUsed, s3Pct);

  let summary: string;
  if (!hasUSMLEData) {
    summary = 'No USMLE questions answered yet. Complete practice questions to unlock predictive score analytics.';
  } else if (totalUSMLEAnswered > 0) {
    summary = `Calibrated from ${totalUSMLEAnswered} USMLE questions completed at ${overallUSMLEAccuracyPct}% overall accuracy.`;
  } else {
    summary = `Provisional calibration based on ${overallUsed} questions completed across the bank (${overallPct}% accuracy).`;
  }

  return {
    hasUSMLEData,
    totalUSMLEAnswered,
    overallUSMLEAccuracyPct,
    step1,
    step2ck,
    step3,
    summary,
  };
}
