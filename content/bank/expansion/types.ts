import type { Spec } from '../author';

export const difficultyRubric = {
  recognition: 1,
  application: 2,
  integration: 3,
  prioritization: 4,
  synthesis: 5,
} as const;

export type ExpansionSpec = {
  code: string;
  concept: string;
  reasoning: keyof typeof difficultyRubric;
  difficultyReason: string;
  evidenceNote: string;
  semanticReviewNote: string;
  concerns: string[];
  question: Spec;
};
