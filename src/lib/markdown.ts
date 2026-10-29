import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

const TAGS = ['p', 'br', 'strong', 'b', 'em', 'i', 'u', 'sub', 'sup', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre',
  'table', 'thead', 'tbody', 'tr', 'th', 'td', 'h3', 'h4', 'a', 'img', 'hr'];
const ATTRS = ['href', 'title', 'alt', 'src'];

const purify = (html: string, extraTags: string[] = []) =>
  DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [...TAGS, ...extraTags],
    ALLOWED_ATTR: ATTRS,
    // only http(s) and same-origin paths; blocks javascript:, data: etc. in links and images
    ALLOWED_URI_REGEXP: /^(?:https?:\/\/|\/(?!\/))/i,
  });

/** Markdown → HTML that is safe to inject. All author-supplied text passes through here. */
export function renderMarkdown(md: string): string {
  return purify(marked.parse(md ?? '', { async: false, gfm: true }) as string);
}

/**
 * Highlights arrive from the browser as the stem HTML with <mark> tags added.
 * Accept them only if, once the marks are removed, they are exactly the stem we rendered.
 */
export function acceptHighlights(submitted: string, stemMd: string): string | null {
  const clean = purify(submitted, ['mark']);
  const base = renderMarkdown(stemMd);
  return clean.replace(/<\/?mark>/g, '') === base ? clean : null;
}
