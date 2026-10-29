import { z } from 'zod';

// Validated once, on first use. A bad config fails loudly at startup instead of mid-request.
const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default('OpenPrep'),
  BETTER_AUTH_URL: z.url().default('http://localhost:3000'),
  BETTER_AUTH_SECRET: z.string().min(32, 'BETTER_AUTH_SECRET must be at least 32 characters'),
  DATABASE_URL: z.string().startsWith('postgres'),
  SMTP_HOST: z.string().default('localhost'),
  SMTP_PORT: z.coerce.number().int().default(1025),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  SMTP_FROM: z.string().default('OpenPrep <no-reply@localhost>'),
  AI_PROVIDER: z.enum(['', 'ollama', 'openai-compatible']).default(''),
  AI_BASE_URL: z.string().optional(),
  AI_MODEL: z.string().optional(),
  AI_API_KEY: z.string().optional(),
});

export type Env = z.infer<typeof schema>;

let cached: Env | undefined;
export function env(): Env {
  if (!cached) {
    const parsed = schema.safeParse(process.env);
    if (!parsed.success) {
      const issues = parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('\n  ');
      throw new Error(`Invalid environment configuration:\n  ${issues}\nSee .env.example.`);
    }
    cached = parsed.data;
  }
  return cached;
}

export const appName = () => process.env.NEXT_PUBLIC_APP_NAME || 'OpenPrep';
