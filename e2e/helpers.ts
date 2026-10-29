import { randomUUID } from 'node:crypto';
import { expect, type Page } from '@playwright/test';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

export const testDb = () => new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.TEST_DATABASE_URL! }) });

/** Unique throwaway credentials for a test user on the local test server. */
export const newCreds = () => ({ name: 'E2E Learner', email: `e2e-${randomUUID()}@test.localhost`, password: `pw-${randomUUID()}` });

export async function register(page: Page, creds = newCreds()) {
  await page.goto('/register');
  await page.getByLabel('Name').fill(creds.name);
  await page.getByLabel('Email').fill(creds.email);
  await page.getByLabel('Password').fill(creds.password);
  await page.getByRole('button', { name: 'Create account' }).click();
  await expect(page).toHaveURL(/\/dashboard/);
  return creds;
}

export async function login(page: Page, email: string, password: string) {
  await page.goto('/login');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
}

/** Create a test from the Create Test page and land on the exam screen. */
export async function createTest(page: Page, opts: { mode?: 'Tutor' | 'Timed'; count?: number } = {}) {
  await page.goto('/create');
  if (opts.mode === 'Timed') await page.getByText('Timed', { exact: true }).click();
  await page.getByLabel('Questions per block').fill(String(opts.count ?? 3));
  await page.getByRole('button', { name: 'Generate test' }).click();
  await expect(page).toHaveURL(/\/test\/[a-z0-9]+$/);
  await expect(choices(page).first()).toBeEnabled(); // session opened; keys and clicks now count
}

/** Answer options; radios for single-answer and checkboxes for select-all questions (the order is random). */
export const choices = (page: Page) => page.getByRole('group', { name: 'Answer choices' }).or(page.getByRole('radiogroup', { name: 'Answer choices' })).locator('[aria-checked]');
