import { expect, test } from '@playwright/test';
import { choices, createTest, register } from './helpers';

test.describe('core learning loop (definition of done)', () => {
  test('tutor mode: answer, explanation, note, flashcard, notebook clip, report', async ({ page }) => {
    await register(page);
    await createTest(page, { count: 2 });
    // no answer leaks before submitting: no correct/incorrect markers, no explanation
    await expect(page.locator('#expl-h')).toHaveCount(0);
    await expect(page.getByLabel('Correct answer')).toHaveCount(0);

    await page.keyboard.press('a');
    await expect(choices(page).first()).toHaveAttribute('aria-checked', 'true');
    await page.getByRole('button', { name: 'Submit answer' }).click();
    await expect(page.locator('#expl-h')).toHaveText(/Correct|Incorrect/);
    await expect(page.getByText('Key takeaway')).toBeVisible();
    await expect(page.getByLabel('Correct answer').first()).toBeVisible(); // select-all items can reveal several keys

    await page.getByLabel('My notes').fill('Remember: G6PD → NADPH');
    await page.getByRole('button', { name: 'Save note' }).click();
    await expect(page.getByText('Note saved.')).toBeVisible();

    await page.getByRole('button', { name: '+ Flashcard', exact: true }).click();
    await expect(page.getByText('Added to your flashcards.')).toBeVisible();

    await page.locator('.prose-q').last().selectText();
    await page.getByRole('button', { name: '+ Notebook from selection' }).click();
    await expect(page.getByText(/Added to your notebook/)).toBeVisible();

    await page.getByRole('button', { name: 'Report an error' }).click();
    await page.getByLabel(/What.s wrong/).fill('E2E: checking the report flow works.');
    await page.getByRole('button', { name: 'Send report' }).click();
    await expect(page.getByText(/an editor will review it/)).toBeVisible();

    // the saved note survives a reload
    await page.reload();
    await expect(page.getByLabel('My notes')).toHaveValue('Remember: G6PD → NADPH');

    await page.goto('/notebook');
    await page.getByRole('link', { name: 'Inbox' }).click();
    await expect(page.locator('blockquote')).toBeVisible();
    await page.goto('/flashcards');
    await expect(page.getByText('Due now').locator('..')).toContainText('1');
  });

  test('timed mode: navigate, flag, refresh-recovery, end block, score, review, retry incorrect', async ({ page }) => {
    await register(page);
    await createTest(page, { mode: 'Timed', count: 3 });
    await expect(page.getByRole('timer')).toHaveText(/4:[23]\d/);
    await expect(page.getByRole('button', { name: 'Submit answer' })).toHaveCount(0);

    await choices(page).nth(1).click();
    await page.keyboard.press('ArrowRight');
    await expect(page.getByText('Item 2')).toBeVisible();
    await choices(page).first().click();
    await page.getByLabel('Mark').check();
    await expect(page.getByRole('button', { name: /Question 2, answered, marked/ })).toBeVisible();

    // recovery: answers and position come back after a reload
    await page.reload();
    await expect(page.getByText('Item 2')).toBeVisible();
    await expect(choices(page).first()).toHaveAttribute('aria-checked', 'true');

    await page.getByRole('button', { name: 'End block' }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'End block' }).click();
    await expect(page).toHaveURL(/\/results$/);
    await expect(page.getByText('Omitted', { exact: true }).locator('..')).toContainText('1');

    await page.getByRole('tab', { name: 'marked' }).click();
    await expect(page.locator('tbody tr')).toHaveCount(1);
    await page.getByRole('button', { name: 'Review' }).click();
    await expect(page).toHaveURL(/\/test\/[a-z0-9]+$/);
    await expect(page.locator('#expl-h')).toBeVisible(); // everything is revealed in review
    await page.getByRole('link', { name: 'Back to results' }).click();

    await page.getByRole('button', { name: /Retry \d missed/ }).click();
    await expect(page).toHaveURL(/\/test\/[a-z0-9]+$/);
    await expect(page.getByRole('button', { name: 'Submit answer' })).toBeVisible(); // retry runs in tutor mode
  });

  test('suspend and resume from previous tests', async ({ page }) => {
    await register(page);
    await createTest(page, { mode: 'Timed', count: 2 });
    await choices(page).first().click();
    await page.getByRole('button', { name: 'Suspend' }).click();
    await expect(page).toHaveURL(/\/tests/);
    await expect(page.getByText('Suspended')).toBeVisible();
    await page.getByRole('link', { name: 'Resume' }).click();
    await expect(choices(page).first()).toHaveAttribute('aria-checked', 'true');
  });

  test('question bank: filter, search, mark, study list, practice one question', async ({ page }) => {
    await register(page);
    await page.goto('/questions');
    await page.getByLabel('Search').fill('bradykinin');
    await page.getByRole('button', { name: 'Apply' }).click();
    await expect(page.getByText('1 question match')).toBeVisible();
    await expect(page.getByText('s1-0001')).toBeVisible();

    await page.getByRole('button', { name: 'Mark', exact: true }).click();
    await expect(page.getByRole('button', { name: '⚑ Marked' })).toBeVisible();

    await page.getByLabel('New list name').fill('Cardio review');
    await page.getByRole('button', { name: 'Add', exact: true }).click();
    await expect(page.getByRole('link', { name: 'Cardio review' })).toBeVisible();
    await page.getByLabel('Add to study list').selectOption({ label: 'Cardio review' });
    await expect(page.getByText('Added to list.')).toBeVisible();

    await page.goto('/questions?pool=marked');
    await expect(page.getByText('1 question match')).toBeVisible();

    await page.getByRole('button', { name: 'Practice' }).click();
    await expect(page.getByText('Item 1')).toBeVisible();
    await expect(page.getByText('of 1', { exact: true })).toBeVisible();
  });

  test('analytics, planner and exports reflect activity', async ({ page }) => {
    await register(page);
    await createTest(page, { count: 2 });
    await choices(page).first().click();
    await page.getByRole('button', { name: 'Submit answer' }).click();
    await expect(page.locator('#expl-h')).toBeVisible();

    await page.goto('/performance');
    await expect(page.getByText(/of 1 answered/)).toBeVisible();
    await page.getByRole('tab', { name: 'reports' }).click();
    await expect(page.getByRole('heading', { name: 'By subject' })).toBeVisible();
    const csv = await page.request.get('/api/export/progress');
    expect(csv.status()).toBe(200);
    expect(await csv.text()).toContain('"Overall","All questions","1"');

    await page.goto('/planner');
    await page.getByRole('button', { name: 'Create plan' }).click();
    await expect(page.getByText('Days until exam')).toBeVisible();
    const ics = await page.request.get('/api/export/plan');
    expect(await ics.text()).toContain('BEGIN:VCALENDAR');
  });
});
