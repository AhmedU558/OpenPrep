import { z } from 'zod';

const id = z.string().min(1).max(64);

export const POOLS = ['all', 'unused', 'incorrect', 'omitted', 'correct', 'marked'] as const;
export type Pool = (typeof POOLS)[number];

export const filtersSchema = z.object({
  examIds: z.array(id).max(20).default([]),
  subjectIds: z.array(id).max(100).default([]),
  systemIds: z.array(id).max(100).default([]),
  topicIds: z.array(id).max(100).default([]),
  difficulty: z.array(z.number().int().min(1).max(5)).max(5).default([]),
  pool: z.enum(POOLS).default('all'),
  q: z.string().trim().max(200).default(''),
  collectionId: id.optional(),
});
export type Filters = z.infer<typeof filtersSchema>;

export const createSessionSchema = filtersSchema.extend({
  mode: z.enum(['TUTOR', 'TIMED']),
  count: z.number().int().min(1).max(40),
  blocks: z.number().int().min(1).max(8).default(1),
  secondsPerQuestion: z.number().int().min(30).max(300).default(90),
  negativeMark: z.number().min(0).max(1).default(0),
  name: z.string().trim().max(80).optional(),
  questionIds: z.array(id).max(320).optional(), // explicit list, e.g. "retry incorrect"
});
export type CreateSessionInput = z.input<typeof createSessionSchema>;

export const positionSchema = z.number().int().min(0).max(399);
export const selectionSchema = z.array(id).max(10);
