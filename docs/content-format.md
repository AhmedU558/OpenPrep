# Question content format

Used by the admin editor, **Import & export** (a JSON array of these objects), and `GET /api/admin/export`. The schema is enforced by `src/lib/validation/content.ts`.

```json
{
  "code": "s1-0101",
  "exam": "Step 1",
  "subject": "Pharmacology",
  "system": "Renal",
  "topic": "Diuretics",
  "type": "SINGLE",
  "difficulty": 3,
  "stem": "A 67-year-old woman ...\n\nWhich of the following ...?",
  "options": [
    { "text": "Proximal convoluted tubule", "correct": false, "explanation": "Site of acetazolamide." },
    { "text": "Thick ascending limb", "correct": true }
  ],
  "explanation": "Loop diuretics inhibit **NKCC2** ...",
  "objective": "One-line takeaway",
  "keyPoints": ["Optional extra takeaways"],
  "references": [{ "label": "Name of a source you actually checked", "url": "https://example.org" }],
  "image": "https://example.org/figure.png",
  "imageAlt": "Required when image is set",
  "source": "Who wrote it",
  "license": "CC-BY-SA-4.0",
  "attribution": "Optional credit line"
}
```

| Field | Rules |
|---|---|
| `code` | Unique, 2–41 characters: letters, digits, `.`, `-`, `_`. Re-importing a code updates that question (drafts and in-review questions only, unless you are an admin). |
| `exam`, `subject`, `system` | Must already exist (an admin can create them under Taxonomy, or an admin's import creates missing subjects and systems). |
| `type` | `SINGLE` (exactly one correct option) or `MULTIPLE` (two or more correct). |
| `difficulty` | 1–5, default 3. |
| `stem`, `explanation`, option `explanation` | Markdown. HTML is sanitized: scripts, event handlers and `javascript:`/`data:` URLs are removed. |
| `options` | 2–10. |
| `references` | Only sources you have verified. URLs must be http(s). Leave empty rather than invent one. |
| `image` | http(s) URL or a site path like `/uploads/x.png`, and only images you may distribute. |
| `source`, `license` | Required. Use an SPDX-style identifier where one exists (e.g. `CC-BY-4.0`, `CC0-1.0`). |

Imports are **all or nothing**: if any row is invalid, nothing is saved and every problem is listed. New questions arrive as **drafts**; an admin publishes them.
