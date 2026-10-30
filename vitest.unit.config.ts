import { defineConfig } from 'vitest/config';

// Pure tests construct clients but make no queries; no .env loading or database migration.
export default defineConfig({ resolve: { tsconfigPaths: true }, test: {
  include: ['tests/unit/**/*.test.ts'], environment: 'node', fileParallelism: false,
  env: { NODE_ENV: 'test', DATABASE_URL: 'postgresql://unit:unit@127.0.0.1:1/openprep_unit_test', BETTER_AUTH_SECRET: 'unit-test-placeholder-not-a-live-secret', BETTER_AUTH_URL: 'http://localhost:3000' },
} });
