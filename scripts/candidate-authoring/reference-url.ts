export function parseReferenceUrl(value: string | undefined): URL | undefined {
  try {
    const url = new URL(value ?? '');
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return;
    return url;
  } catch {
    return;
  }
}

export function isPlaceholderReference(url: URL): boolean {
  return ['pubmed.ncbi.nlm.nih.gov', 'www.ncbi.nlm.nih.gov', 'ncbi.nlm.nih.gov'].includes(url.hostname)
    && url.pathname === '/';
}

export function citationMentionsHost(citation: string, hostname: string): boolean {
  const targetHost = hostname.toLowerCase().replace(/\.$/, '');
  return citation.split(/\s+/).some(token => {
    const cleaned = token.replace(/^[("']+|[)"',;:.]*$/g, '');
    const url = parseReferenceUrl(cleaned.includes('://') ? cleaned : `https://${cleaned}`);
    const host = url?.hostname.toLowerCase().replace(/\.$/, '');
    return host === targetHost || host === `www.${targetHost}`;
  });
}
