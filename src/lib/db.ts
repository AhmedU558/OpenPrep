import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@/generated/prisma/client';
import { env } from './env';

// One client per process; reuse across hot reloads in dev so connections aren't exhausted.
const g = globalThis as unknown as { prisma?: PrismaClient };

export const db: PrismaClient =
  g.prisma ?? new PrismaClient({ adapter: new PrismaPg({ connectionString: env().DATABASE_URL }) });

if (process.env.NODE_ENV !== 'production') g.prisma = db;

export type Tx = Parameters<Parameters<PrismaClient['$transaction']>[0]>[0];
