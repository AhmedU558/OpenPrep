import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { choices, createTest, register } from './helpers';

// Runs on both the desktop and mobile (Pixel 7) projects.
async function audit(page: Page, label: string) {
  const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  const serious = r.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
  expect(serious.map((v) => `${label}: ${v.id} (${v.nodes.length}) ${v.help}`)).toEqual([]);
  // no horizontal scrolling at this viewport
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow, `${label} should not scroll sideways`).toBeLessThanOrEqual(1);
}

test('public pages are accessible and fit the screen (T12)', async ({ page }) => {
  for (const path of ['/', '/login', '/register', '/forgot-password']) {
    await page.goto(path);
    await audit(page, path);
  }
});

test('signed-in pages are accessible and fit the screen (T12)', async ({ page }) => {
  await register(page);
  for (const path of ['/dashboard', '/create', '/questions', '/performance', '/flashcards', '/notebook', '/planner', '/settings', '/tests']) {
    await page.goto(path);
    await audit(page, path);
  }
  await createTest(page, { count: 2 });
  await audit(page, 'exam screen');
  await choices(page).first().click();
  await page.getByRole('button', { name: 'Submit answer' }).click();
  await expect(page.locator('#expl-h')).toBeVisible();
  await audit(page, 'explanation');
});

test('the exam is fully keyboard operable (T12)', async ({ page }) => {
  await register(page);
  await createTest(page, { count: 2 });
  await page.keyboard.press('b');
  await expect(choices(page).nth(1)).toHaveAttribute('aria-checked', 'true');
  await page.keyboard.press('Enter');
  await expect(page.locator('#expl-h')).toBeVisible();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByText('Item 2')).toBeVisible();
  await page.keyboard.press('m');
  await expect(page.getByLabel('Mark')).toBeChecked();
  // the skip link is the first thing Tab reaches on app pages
  await page.goto('/dashboard');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
});

test('redesigned workspace keeps navigation and practice actions usable', async ({ page }, testInfo) => {
  await register(page);
  const nav = page.getByRole('navigation', { name: 'Main', exact: true }).filter({ visible: true });
  await expect(nav.getByRole('link', { name: 'Home', exact: true })).toHaveAttribute('aria-current', 'page');
  await expect(page.getByRole('heading', { name: 'Your next chapter starts here.' })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('dashboard-light.png'), fullPage: true });
  await page.getByRole('button', { name: 'Theme: auto. Click to change.', exact: true }).click();
  await page.getByRole('button', { name: 'Theme: light. Click to change.', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await audit(page, 'dark dashboard');
  await page.screenshot({ path: testInfo.outputPath('dashboard-dark.png'), fullPage: true });
  await page.getByRole('link', { name: 'Start a practice test' }).click();
  await expect(page).toHaveURL(/\/create$/);
  await expect(page.getByLabel('Questions per block')).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Create test', exact: true })).toHaveAttribute('aria-current', 'page');
  await page.screenshot({ path: testInfo.outputPath('create-test.png'), fullPage: true });
});
