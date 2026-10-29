import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: { tsconfigPaths: true },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
    setupFiles: ['tests/setup.ts'],
    globalSetup: ['tests/global-setup.ts'],
    // integration tests share one test database, so run files one after another
    fileParallelism: false,
    testTimeout: 20000,
  },
});
