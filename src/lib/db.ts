import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@/generated/prisma/client';
import { env } from './env';

// One client per process; reuse across warm serverless invocations and dev reloads so connections aren't exhausted.
const g = globalThis as unknown as { prisma?: PrismaClient };

export const db: PrismaClient =
  g.prisma ?? new PrismaClient({ adapter: new PrismaPg({ connectionString: env().DATABASE_URL }) });

g.prisma = db;

export type Tx = Parameters<Parameters<PrismaClient['$transaction']>[0]>[0];
