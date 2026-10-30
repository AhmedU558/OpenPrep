import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';
import { testDatabaseUrl } from './scripts/test-database';

// E2E runs the production build against the separate test database (never your study data).
// Browser: installed Microsoft Edge by default on Windows; set PW_CHANNEL=chromium after `npx playwright install chromium`.
const PORT = 3200;
const baseURL = `http://localhost:${PORT}`;
const channel = process.env.PW_CHANNEL ?? (process.platform === 'win32' ? 'msedge' : undefined);
const browser = channel === 'chromium' || !channel ? {} : { channel };

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 60_000,
  expect: { timeout: 10_000 },
  reporter: [['list'], ['html', { open: 'never' }]],
  globalSetup: './e2e/global-setup.ts',
  use: { baseURL, trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], ...browser } },
    { name: 'mobile', use: { ...devices['Pixel 7'], ...browser }, testMatch: /responsive|a11y/ },
  ],
  webServer: {
    command: `npx next start -p ${PORT}`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000,
    env: {
      DATABASE_URL: testDatabaseUrl(process.env.TEST_DATABASE_URL, process.env.DATABASE_URL),
      BETTER_AUTH_URL: baseURL,
      BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET ?? '',
      NODE_ENV: 'production',
      AI_PROVIDER: '',
      E2E_DISABLE_RATE_LIMIT: '1',
    },
  },
});
