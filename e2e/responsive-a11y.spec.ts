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
