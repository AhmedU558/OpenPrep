import { expect, test } from '@playwright/test';
import { choices, login, newCreds, register } from './helpers';

test.describe('accounts (T1)', () => {
  test('register, sign out, wrong password, sign in', async ({ page }) => {
    const c = await register(page);
    await expect(page.getByRole('heading', { name: /Welcome back, E2E/ })).toBeVisible();

    await page.getByRole('button', { name: /E2E Learner/ }).click();
    await page.getByRole('menuitem', { name: 'Sign out' }).click();
    await expect(page).toHaveURL('/');

    await login(page, c.email, 'definitely-wrong-password');
    await expect(page.getByRole('alert')).toBeVisible();
    await expect(page).toHaveURL(/\/login/);

    await login(page, c.email, c.password);
    await expect(page).toHaveURL(/\/dashboard/);
  });

  test('credentials never end up in the URL, even if the form is submitted before JavaScript loads', async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto('/login');
    await page.getByLabel('Email').fill('nobody@test.localhost');
    await page.getByLabel('Password').fill('secret-value-123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForLoadState();
    expect(page.url()).not.toContain('secret-value-123');
    await ctx.close();
  });

  test('validation: short password and duplicate email', async ({ page }) => {
    const c = newCreds();
    await page.goto('/register');
    await page.getByLabel('Name').fill(c.name);
    await page.getByLabel('Email').fill(c.email);
    await page.getByLabel('Password').fill('short');
    await page.getByRole('button', { name: 'Create account' }).click();
    await expect(page).toHaveURL(/\/register/); // browser + app validation keep us here

    await register(page, c);
    await page.context().clearCookies();
    await page.goto('/register');
    await page.getByLabel('Name').fill(c.name);
    await page.getByLabel('Email').fill(c.email);
    await page.getByLabel('Password').fill(c.password);
    await page.getByRole('button', { name: 'Create account' }).click();
    await expect(page.getByRole('alert')).toBeVisible();
  });

  test('password reset by email (Mailpit)', async ({ page, request }) => {
    const c = await register(page);
    await page.context().clearCookies();
    await page.goto('/forgot-password');
    await page.getByLabel('Email').fill(c.email);
    await page.getByRole('button', { name: 'Send reset link' }).click();
    await expect(page.getByText(/reset link is on its way/)).toBeVisible();

    // read the email from the local Mailpit inbox
    let link = '';
    for (let i = 0; i < 20 && !link; i++) {
      const list = await (await request.get(`http://localhost:8025/api/v1/search?query=${encodeURIComponent(`to:"${c.email}"`)}`)).json();
      const id = list.messages?.[0]?.ID;
      if (id) link = /(http\S+reset-password\S*)/.exec((await (await request.get(`http://localhost:8025/api/v1/message/${id}`)).json()).Text)?.[1] ?? '';
      if (!link) await page.waitForTimeout(500);
    }
    expect(link, 'reset email should arrive').toBeTruthy();
    await page.goto(link);
    await expect(page).toHaveURL(/reset-password\?token=/);
    const fresh = `${c.password}-new`;
    await page.getByLabel('New password').fill(fresh);
    await page.getByRole('button', { name: 'Set new password' }).click();
    await expect(page).toHaveURL(/\/login\?reset=1/);

    await login(page, c.email, c.password); // old password no longer works
    await expect(page.getByRole('alert')).toBeVisible();
    await login(page, c.email, fresh);
    await expect(page).toHaveURL(/\/dashboard/);
  });

  test('signed-out users are sent to sign in; APIs answer 401', async ({ page, request }) => {
    for (const path of ['/dashboard', '/create', '/performance', '/admin']) {
      await page.goto(path);
      await expect(page).toHaveURL(/\/login/);
    }
    expect((await request.get('/api/export/progress')).status()).toBe(401);
    expect((await request.get('/api/export/me')).status()).toBe(401);
    expect((await request.get('/api/admin/export')).status()).toBe(401);
  });

  test('guest mode works and progress carries over to a new account', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Try it as a guest' }).click();
    await expect(page).toHaveURL(/\/dashboard/);
    await expect(page.getByText(/guest mode/)).toBeVisible();

    await page.goto('/create');
    await page.getByLabel('Questions per block').fill('1');
    await page.getByRole('button', { name: 'Generate test' }).click();
    await choices(page).first().click();
    await page.getByRole('button', { name: 'Submit answer' }).click();
    await expect(page.locator('#expl-h')).toBeVisible();

    await register(page); // links the guest account
    await page.goto('/tests');
    await expect(page.getByRole('cell', { name: 'Tutor' })).toBeVisible();
  });
});
