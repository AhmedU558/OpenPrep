import 'dotenv/config';
import { execSync } from 'node:child_process';
import { testDatabaseUrl } from '../scripts/test-database';

// Bring the separate test database up to the current schema before any test runs.
export default function setup() {
  const url = testDatabaseUrl(process.env.TEST_DATABASE_URL, process.env.DATABASE_URL);
  execSync('npx prisma migrate deploy', { stdio: 'pipe', env: { ...process.env, DATABASE_URL: url } });
}
