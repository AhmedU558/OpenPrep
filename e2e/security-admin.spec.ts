import { expect, test } from '@playwright/test';
import { createTest, register, testDb } from './helpers';

test.describe('security boundaries (T2, T15)', () => {
  test("another user's test is invisible (404), not just hidden", async ({ browser }) => {
    const a = await browser.newContext(), b = await browser.newContext();
    const pa = await a.newPage(), pb = await b.newPage();
    await register(pa);
    await createTest(pa, { count: 1 });
    const url = pa.url();
    await register(pb);
    const res = await pb.goto(url);
    expect(res?.status()).toBe(404);
    const results = await pb.goto(`${url}/results`);
    expect(results?.status()).toBe(404);
    await a.close(); await b.close();
  });

  test('learners cannot reach admin pages or exports', async ({ page }) => {
    await register(page);
    await page.goto('/admin');
    await expect(page).toHaveURL(/\/dashboard/);
    expect((await page.request.get('/api/admin/export')).status()).toBe(403);
  });

  test('a learner cannot grant themselves a role through the sign-up or update APIs', async ({ page }) => {
    const c = await register(page);
    // try to smuggle a role through Better Auth's update-user endpoint
    await page.request.post('/api/auth/update-user', { data: { name: 'x', role: 'ADMIN' } });
    const db = testDb();
    const u = await db.user.findUniqueOrThrow({ where: { email: c.email } });
    await db.$disconnect();
    expect(u.role).toBe('LEARNER');
  });
});

test.describe('content administration (T11)', () => {
  test('admin creates a draft, publishes it, learners then see it; script in content never runs', async ({ page }) => {
    const c = await register(page);
    const db = testDb();
    await db.user.update({ where: { email: c.email }, data: { role: 'ADMIN' } });
    await db.$disconnect();

    let alerted = false;
    page.on('dialog', async (d) => { alerted = true; await d.dismiss(); });

    await page.goto('/admin/questions/new');
    const code = `e2e-${Date.now()}`;
    await page.getByLabel('Code').fill(code);
    await page.getByLabel('Exam').fill('Step 1');
    await page.getByLabel('Subject').fill('Pharmacology');
    await page.getByLabel('System').fill('Renal');
    await page.getByLabel('Question stem (Markdown)').fill('An E2E question <script>alert(1)</script><img src=x onerror="alert(2)"> about diuretics?');
    await page.getByLabel('Option A text').fill('Furosemide');
    await page.getByLabel('Option A is correct').check();
    await page.getByLabel('Option B text').fill('Spironolactone');
    await page.getByLabel('Explanation (Markdown)').fill('Loop diuretics act on the thick ascending limb.');
    await page.getByLabel('Source', { exact: true }).fill('E2E suite');
    await page.getByRole('button', { name: 'Create draft' }).click();
    await expect(page).toHaveURL(/\/admin\/questions\/[a-z0-9]+$/);
    await expect(page.getByText('draft', { exact: true })).toBeVisible();

    await page.getByRole('button', { name: 'Submit for review' }).click();
    await expect(page.getByText('Moved to review.')).toBeVisible();
    await page.getByRole('button', { name: 'Publish' }).click();
    await expect(page.getByText('Verified rights and explicit delivery permission are required before publication.')).toBeVisible();
    await page.getByLabel('Rights holder', { exact: true }).fill('Synthetic browser fixture');
    await page.getByLabel('Authorization evidence reference').fill('Disposable browser regression fixture only; no real content rights granted.');
    await page.getByRole('button', { name: 'Submit rights evidence' }).click();
    await expect(page.getByText('PENDING', { exact: true })).toBeVisible();
    await page.getByLabel('Rights decision reason').fill('Reviewed synthetic browser fixture for this isolated test.');
    await page.getByLabel('Evidence permits learner delivery on this instance').check();
    await page.getByLabel('Evidence permits content redistribution and exports').check();
    await page.getByRole('button', { name: 'Verify rights', exact: true }).click();
    await expect(page.getByText('VERIFIED', { exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Publish' }).click();
    await expect(page.getByText('Moved to published.')).toBeVisible();
    const editUrl = page.url();

    await page.goto('/admin/audit');
    await expect(page.getByText('question.create').first()).toBeVisible();

    await page.goto(`/questions?q=${encodeURIComponent('diuretics')}`);
    await expect(page.getByText(code)).toBeVisible();
    expect(alerted).toBe(false);
    await page.goto(editUrl);
    await page.getByLabel('Rights decision reason').fill('Synthetic fixture dispute to verify immediate withdrawal.');
    await page.getByRole('button', { name: 'Dispute rights', exact: true }).click();
    await expect(page.getByText('DISPUTED', { exact: true })).toBeVisible();
    const response = await page.request.get('/api/admin/export');
    expect(response.status()).toBe(200);
    expect((await response.json()).some((q: {code: string}) => q.code === code)).toBe(false);
    await page.goto('/questions?q=diuretics');
    await expect(page.getByText(code, { exact: true })).toHaveCount(0);
  });
});
