import { z } from 'zod';

const httpUrl = z.url({ protocol: /^https?$/ }).max(500);
const imagePath = z.union([httpUrl, z.string().regex(/^\/[\w\-./]+\.(png|jpe?g|webp|gif)$/i, 'Images must be an http(s) URL or a site path like /uploads/x.png')]);

export const optionSchema = z.object({
  text: z.string().trim().min(1).max(1000),
  correct: z.boolean(),
  explanation: z.string().max(5000).optional(),
});

/** The documented content format (see docs/content-format.md). Used by the editor, import and export. */
export const questionContentSchema = z.object({
  code: z.string().trim().regex(/^[a-z0-9][a-z0-9._-]{1,40}$/i, 'Code: 2–41 letters, numbers, dot, dash or underscore.'),
  exam: z.string().trim().min(1).max(60),
  subject: z.string().trim().min(1).max(80),
  system: z.string().trim().min(1).max(80),
  topic: z.string().trim().max(80).optional(),
  type: z.enum(['SINGLE', 'MULTIPLE']).default('SINGLE'),
  difficulty: z.number().int().min(1).max(5).default(3),
  stem: z.string().trim().min(10).max(20_000),
  options: z.array(optionSchema).min(2).max(10),
  explanation: z.string().trim().min(10).max(50_000),
  objective: z.string().trim().max(1000).optional(),
  keyPoints: z.array(z.string().trim().min(1).max(500)).max(10).default([]),
  references: z.array(z.object({ label: z.string().trim().min(1).max(300), url: httpUrl.optional() })).max(20).default([]),
  image: imagePath.optional(),
  imageAlt: z.string().max(300).optional(),
  source: z.string().trim().min(2).max(200),
  license: z.string().trim().min(2).max(60),
  attribution: z.string().trim().max(300).optional(),
}).superRefine((q, ctx) => {
  const correct = q.options.filter((o) => o.correct).length;
  if (correct === 0) ctx.addIssue({ code: 'custom', path: ['options'], message: 'Mark at least one correct option.' });
  if (q.type === 'SINGLE' && correct !== 1) ctx.addIssue({ code: 'custom', path: ['options'], message: 'Single-answer questions need exactly one correct option.' });
  if (q.type === 'MULTIPLE' && correct < 2) ctx.addIssue({ code: 'custom', path: ['type'], message: 'Use SINGLE when only one option is correct.' });
  if (q.image && !q.imageAlt) ctx.addIssue({ code: 'custom', path: ['imageAlt'], message: 'Images need alt text.' });
});
export type QuestionContent = z.output<typeof questionContentSchema>;
