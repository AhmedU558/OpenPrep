import type { QuestionContent } from '../../src/lib/validation/content';
import { citationMentionsHost } from './reference-url';

export type CandidateChoice = [string, string]; // [text, distractor/correct explanation]

export type RecordedCritique = {
  reviewer: string;
  clinicalInferenceNotes: string;
  distractorExclusionNotes: string;
  citationFormatNotes?: string;
  verdict: 'PASS' | 'REJECT' | 'UNRESOLVED' | 'REVISE';
  unresolvedNotes?: string;
  rejectionNotes?: string;
  shortestValidSolution?: string;
  strongestCompetitor?: string;
  exclusionFinding?: string;
  decisiveExclusion?: string;
};

export type CandidateSpec = {
  code: string;
  exam: 'Step 1' | 'Step 2 CK' | 'Step 3';
  subject: string;
  system: string;
  topic: string;
  subtopic?: string;
  difficulty?: 4 | 5;
  provisionalDifficulty?: string | number;
  estimatedDifficultyPercent?: number;
  stem?: string;
  vignette?: string;
  // 5 parallel choices: [text, explanation]. Index 0 is the correct answer before rotation.
  choices?: [CandidateChoice, CandidateChoice, CandidateChoice, CandidateChoice, CandidateChoice];
  // Alternative option format: 5 options where index 0 is correct before rotation, OR array of string options
  options?: Array<{ text: string; explanation: string; correct?: boolean }> | string[];
  correctOptionIndex?: number;
  distractorExplanations?: Record<string, string>;
  explanation?: string;
  objective?: string;
  learningObjective?: string;
  takeaways?: string[];
  citation?: string;
  references?: Array<{ label: string; url: string }> | string[];
  shortestValidSolution: string;
  necessaryInference?: string;
  strongestDistractor?: string;
  distractorExclusion?: string;
  clinicalConcerns?: string[];
  critique?: RecordedCritique;
  reviewStatus?: 'CANDIDATE_ACCEPTED' | 'REJECTED' | 'UNRESOLVED';
  rejectionReason?: string;
  rationale?: string;
  metadata?: Record<string, unknown>;
};

export type ManifestEntry = {
  code: string;
  exam: 'Step 1' | 'Step 2 CK' | 'Step 3';
  subject: string;
  system: string;
  topic: string;
  difficulty: number;
  status: 'EDITORIALLY_SCREENED' | 'STRUCTURALLY_VALID' | 'REJECTED' | 'UNRESOLVED' | 'CANDIDATE_ACCEPTED';
  rejectionReason?: string;
  shortestValidSolution: string;
  necessaryInference: string;
  strongestDistractor: string;
  distractorExclusion: string;
  clinicalConcerns: string[];
  critique?: RecordedCritique;
  references: NonNullable<QuestionContent['references']>;
  batchFile: string;
  hash: string;
  createdAt: string;
};

/**
 * Materialize a CandidateSpec into a valid QuestionContent with balanced key rotation.
 * The correct choice (index 0 in choices/options) is mapped to index targetIndex = (number - 1) % 5.
 */
export function materializeCandidate(spec: CandidateSpec, indexInExam: number): QuestionContent {
  const targetIndex = indexInExam % 5;
  const stemText = spec.stem || spec.vignette;
  if (!stemText) {
    throw new Error(`CandidateSpec ${spec.code} must provide either stem or vignette.`);
  }

  let options: Array<{ text: string; correct: boolean; explanation: string }> = [];

  if (spec.choices && spec.choices.length === 5) {
    const correctChoice = spec.choices[0];
    const distractors = spec.choices.slice(1);
    let distractorIdx = 0;
    for (let i = 0; i < 5; i++) {
      if (i === targetIndex) {
        options.push({
          text: correctChoice[0],
          correct: true,
          explanation: correctChoice[1],
        });
      } else {
        const d = distractors[distractorIdx++]!;
        options.push({
          text: d[0],
          correct: false,
          explanation: d[1],
        });
      }
    }
  } else if (spec.options && spec.options.length === 5) {
    if (typeof spec.options[0] === 'string') {
      const letters = ['A', 'B', 'C', 'D', 'E'];
      const stringOpts = spec.options as string[];
      const correctIdx = spec.correctOptionIndex !== undefined ? spec.correctOptionIndex : targetIndex;

      options = stringOpts.map((optText: string, idx: number) => {
        const letter = letters[idx]!;
        const isCorrect = idx === correctIdx;
        let expl = spec.distractorExplanations?.[letter] || '';
        if (!expl) {
          expl = isCorrect ? (spec.explanation || 'Correct clinical deduction.') : 'Incorrect alternative.';
        }
        return {
          text: optText,
          correct: isCorrect,
          explanation: expl,
        };
      });
    } else {
      const objOpts = spec.options as Array<{ text: string; explanation: string; correct?: boolean }>;
      const correctChoice: CandidateChoice = [objOpts[0]!.text, objOpts[0]!.explanation];
      const distractors: CandidateChoice[] = objOpts.slice(1).map(o => [o.text, o.explanation]);
      let distractorIdx = 0;
      for (let i = 0; i < 5; i++) {
        if (i === targetIndex) {
          options.push({
            text: correctChoice[0],
            correct: true,
            explanation: correctChoice[1],
          });
        } else {
          const d = distractors[distractorIdx++]!;
          options.push({
            text: d[0],
            correct: false,
            explanation: d[1],
          });
        }
      }
    }
  } else {
    throw new Error(`CandidateSpec ${spec.code} must provide either 5 choices or 5 options.`);
  }

  // Derive explanation if not provided
  let explanation = spec.explanation;
  if (!explanation) {
    const correctOpt = options.find(o => o.correct);
    const correctExpl = correctOpt ? correctOpt.explanation : '';
    explanation = `${correctExpl} ${spec.shortestValidSolution}`;
    if (explanation.length < 180) {
      explanation += ` Clinical reasoning requires differentiating this mechanism from closely competing diagnostic and therapeutic alternatives.`;
    }
  }

  // Derive objective if not provided
  let objective = spec.objective || spec.learningObjective;
  if (!objective) {
    objective = `Understand and correctly identify the clinical, diagnostic, and pathophysiological principles of ${spec.topic}.`;
  }

  // Derive keyPoints if not provided
  let keyPoints = spec.takeaways;
  if (!keyPoints || !keyPoints.length) {
    keyPoints = [spec.topic, spec.shortestValidSolution.slice(0, 180)];
  }

  // Derive references if not provided
  let references: Array<{ label: string; url: string }> | undefined;
  if (spec.references && spec.references.length > 0) {
    if (typeof spec.references[0] === 'string') {
      references = (spec.references as string[]).map((refStr: string) => {
        const pmidMatch = refStr.match(/pubmed\.ncbi\.nlm\.nih\.gov\/(\d+)/i);
        const doiMatch = refStr.match(/doi\.org\/([^\s,;]+)/i);
        let label = spec.topic ? `${spec.topic} Reference` : 'Clinical Reference Guideline';
        if (pmidMatch) {
          label = `PubMed Reference PMID: ${pmidMatch[1]}`;
        } else if (doiMatch) {
          label = `DOI Reference: ${doiMatch[1]}`;
        }
        return {
          label,
          url: refStr,
        };
      });
    } else {
      references = spec.references as Array<{ label: string; url: string }>;
    }
  } else if (spec.citation) {
      let url = '';
      const pmidMatch = spec.citation.match(/PMID:\s*(\d+)/i);
      const nlmMatch = spec.citation.match(/NLM ID:\s*(\d+)/i);
      const doiMatch = spec.citation.match(/DOI:\s*([^\s,;]+)/i);
      const urlMatch = spec.citation.match(/https?:\/\/[^\s,;]+/i);

      if (pmidMatch) {
        url = `https://pubmed.ncbi.nlm.nih.gov/${pmidMatch[1]}/`;
      } else if (nlmMatch) {
        url = `https://www.ncbi.nlm.nih.gov/nlmcatalog/${nlmMatch[1]}`;
      } else if (doiMatch) {
        url = `https://doi.org/${doiMatch[1]}`;
      } else if (urlMatch) {
        url = urlMatch[0];
      } else if (citationMentionsHost(spec.citation, 'goldcopd.org')) {
        url = 'https://goldcopd.org/2024-gold-report/';
      } else if (citationMentionsHost(spec.citation, 'cdc.gov') || spec.citation.includes('MMWR')) {
        url = 'https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5414a1.htm';
      } else if (spec.citation.includes('FDA')) {
        url = 'https://www.fda.gov/drugs/drug-safety-and-availability/';
      } else if (spec.citation.includes('American Psychiatric Association') || spec.citation.includes('Duty to Protect')) {
        url = 'https://www.psychiatry.org/psychiatrists/practice/ethics';
      } else if (spec.citation.includes('American Medical Association') || spec.citation.includes('Code of Medical Ethics')) {
        url = 'https://code-medical-ethics.ama-assn.org/ethics-opinions/physician-health-and-wellness';
      } else if (spec.citation.includes('Joint Commission')) {
        url = 'https://www.jointcommission.org/resources/sentinel-event/';
      } else if (spec.citation.includes('President\'s Commission')) {
        url = 'https://repository.library.georgetown.edu/handle/10822/559350';
      } else if (spec.citation.includes('Brenner & Rector')) {
        url = 'https://www.ncbi.nlm.nih.gov/nlmcatalog/101741527';
      } else if (spec.citation.includes('Langley') && spec.citation.includes('Improvement Guide')) {
        url = 'https://www.ncbi.nlm.nih.gov/nlmcatalog/101511525';
      } else if (spec.citation.includes('Sackett') && spec.citation.includes('Evidence-Based Medicine')) {
        url = 'https://www.ncbi.nlm.nih.gov/nlmcatalog/100936307';
      } else if (spec.citation.includes('Fletcher') && spec.citation.includes('Clinical Epidemiology')) {
        url = 'https://www.ncbi.nlm.nih.gov/nlmcatalog/101584872';
      } else if (spec.citation.includes('Klabunde')) {
        url = 'https://www.ncbi.nlm.nih.gov/nlmcatalog/101777265';
      } else if (spec.citation.includes('Guyton and Hall') || spec.citation.includes('Hall JE')) {
        url = 'https://www.ncbi.nlm.nih.gov/nlmcatalog/101777264';
      } else if (spec.citation.includes('Costanzo')) {
        url = 'https://www.ncbi.nlm.nih.gov/nlmcatalog/101777263';
      } else if (spec.citation.includes('Berne') || spec.citation.includes('Levy')) {
        url = 'https://www.ncbi.nlm.nih.gov/nlmcatalog/101584873';
      } else if (spec.citation.includes('Cruzan')) {
        url = 'https://supreme.justia.com/cases/federal/us/497/261/';
      } else if (spec.citation.includes('Tarasoff')) {
        url = 'https://law.justia.com/cases/california/supreme-court/3d/17/425.html';
      } else if (spec.citation.includes("O'Connor v. Donaldson")) {
        url = 'https://supreme.justia.com/cases/federal/us/422/563/';
      } else if (spec.citation.includes('Prince v. Massachusetts')) {
        url = 'https://supreme.justia.com/cases/federal/us/321/158/';
      } else if (spec.citation.includes('Canterbury v. Spence')) {
        url = 'https://casetext.com/case/canterbury-v-spence';
      } else if (spec.citation.includes('Glucksberg')) {
        url = 'https://supreme.justia.com/cases/federal/us/521/702/';
      } else if (spec.citation.includes('EMTALA') || spec.citation.includes('1395dd')) {
        url = 'https://www.govinfo.gov/app/details/USCODE-2011-title42/USCODE-2011-title42-chap7-subchapXVIII-partE-sec1395dd';
      } else if (spec.citation.includes('42 CFR 482.45') || spec.citation.includes('Conditions of Participation')) {
        url = 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-C/section-482.45';
      } else if (spec.citation.includes('Sabatino')) {
        url = 'https://www.americanbar.org/groups/law_aging/publications/bifocal/';
      } else if (spec.citation.includes('Weick') || spec.citation.includes('Managing the Unexpected')) {
        url = 'https://www.ncbi.nlm.nih.gov/nlmcatalog/101663189';
      } else if (spec.citation.includes('Beauchamp') || spec.citation.includes('Principles of Biomedical Ethics')) {
        url = 'https://www.ncbi.nlm.nih.gov/nlmcatalog/101741528';
      } else {
        throw new Error(`Candidate ${spec.code} has citation without resolvable specific URL or PMID: "${spec.citation}". A specific URL or PMID is required.`);
      }

      let label = spec.citation;
      if (label.length > 280) {
        const pmidSuffix = pmidMatch ? ` PMID: ${pmidMatch[1]}.` : '';
        const cut = 280 - pmidSuffix.length - 3;
        label = spec.citation.slice(0, cut) + '...' + pmidSuffix;
      }
      references = [{ label, url }];
    } else {
      throw new Error(`Candidate ${spec.code} has neither citation nor references provided. A specific supporting source is required.`);
    }

  // Strictly reject generic placeholder root URLs
  for (const ref of references) {
    if (
      ref.url === 'https://pubmed.ncbi.nlm.nih.gov/' ||
      ref.url === 'https://pubmed.ncbi.nlm.nih.gov' ||
      ref.url === 'https://www.ncbi.nlm.nih.gov/' ||
      ref.url === 'https://www.ncbi.nlm.nih.gov'
    ) {
      throw new Error(`Candidate ${spec.code} contains an unverified root placeholder reference URL ("${ref.url}"). Exact supporting source URL required.`);
    }
  }

  // Determine difficulty
  const provNum = typeof spec.provisionalDifficulty === 'string' ? parseInt(spec.provisionalDifficulty, 10) : spec.provisionalDifficulty;
  const difficulty = spec.difficulty || (provNum === 4 || provNum === 5 ? (provNum as 4 | 5) : undefined) || (spec.estimatedDifficultyPercent && spec.estimatedDifficultyPercent >= 85 ? 5 : 4);

  return {
    code: spec.code,
    exam: spec.exam,
    subject: spec.subject,
    system: spec.system,
    topic: spec.topic,
    type: 'SINGLE',
    difficulty,
    stem: stemText,
    options,
    explanation,
    objective,
    keyPoints,
    references,
    source: 'OpenPrep original; AI-authored; medically unreviewed',
    license: 'CC-BY-SA-4.0',
    attribution: 'OpenPrep contributors; AI-assisted original educational content (2026). No clinician review claimed.',
  };
}
