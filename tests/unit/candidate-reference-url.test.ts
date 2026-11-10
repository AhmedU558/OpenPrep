import { describe, expect, it } from 'vitest';
import { citationMentionsHost, isPlaceholderReference, parseReferenceUrl } from '../../scripts/candidate-authoring/reference-url';
import { materializeCandidate } from '../../scripts/candidate-authoring/types';
import { step1Batch41 } from '../../scripts/candidate-authoring/step1-batch41';

describe('candidate reference URL classification', () => {
  it('uses the parsed hostname rather than domain text in an arbitrary URL', () => {
    expect(citationMentionsHost('GOLD 2024 https://goldcopd.org/report/', 'goldcopd.org')).toBe(true);
    expect(citationMentionsHost('CDC.gov guidelines', 'cdc.gov')).toBe(true);
    for (const value of ['https://goldcopd.org.evil.test/report', 'https://evil.test/goldcopd.org', 'https://goldcopd.org@evil.test/', 'https://evilgoldcopd.org/']) {
      expect(citationMentionsHost(value, 'goldcopd.org')).toBe(false);
    }
  });

  it('rejects malformed, non-web, and credential-bearing references', () => {
    for (const value of [undefined, 'invalid', 'javascript:alert(1)', 'ftp://cdc.gov/file', 'https://user:pass@cdc.gov/file']) {
      expect(parseReferenceUrl(value)).toBeUndefined();
    }
  });

  it('handles citation punctuation, www and trailing hostname dots without trusting suffix hosts', () => {
    expect(citationMentionsHost('(https://www.CDC.gov./guidance/).', 'CDC.GOV.')).toBe(true);
    expect(citationMentionsHost('"cdc.gov",', 'cdc.gov')).toBe(true);
    expect(citationMentionsHost('(https://www.cdc.gov.evil.test/).', 'cdc.gov')).toBe(false);
  });

  it('preserves the PMID when shortening a long citation label', () => {
    const spec = { ...step1Batch41[0]!, references: undefined, citation: `${'Long bibliographic title '.repeat(20)} PMID: 3872065.` };
    const question = materializeCandidate(spec, 0);
    expect(question.references?.[0]?.label.length).toBeLessThanOrEqual(280);
    expect(question.references?.[0]?.label).toMatch(/PMID: 3872065\.$/);
    expect(question.references?.[0]?.url).toBe('https://pubmed.ncbi.nlm.nih.gov/3872065/');
  });

  it('recognizes NCBI root placeholders without matching unrelated hosts', () => {
    expect(isPlaceholderReference(new URL('https://pubmed.ncbi.nlm.nih.gov/?search=test'))).toBe(true);
    expect(isPlaceholderReference(new URL('https://www.ncbi.nlm.nih.gov/'))).toBe(true);
    expect(isPlaceholderReference(new URL('https://pubmed.ncbi.nlm.nih.gov/123/'))).toBe(false);
    expect(isPlaceholderReference(new URL('https://evilncbi.nlm.nih.gov/'))).toBe(false);
  });
});
