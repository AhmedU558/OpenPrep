import { describe, expect, it } from 'vitest';
import { citationMentionsHost, isPlaceholderReference, parseReferenceUrl } from '../../scripts/candidate-authoring/reference-url';

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

  it('recognizes NCBI root placeholders without matching unrelated hosts', () => {
    expect(isPlaceholderReference(new URL('https://pubmed.ncbi.nlm.nih.gov/?search=test'))).toBe(true);
    expect(isPlaceholderReference(new URL('https://www.ncbi.nlm.nih.gov/'))).toBe(true);
    expect(isPlaceholderReference(new URL('https://pubmed.ncbi.nlm.nih.gov/123/'))).toBe(false);
    expect(isPlaceholderReference(new URL('https://evilncbi.nlm.nih.gov/'))).toBe(false);
  });
});
