import { expect, test } from '@playwright/test';
import { register, testDb } from './helpers';
import batch from '../content/usmle-images/batch-01.json' with { type: 'json' };

test('USMLE image questions display, enlarge, score and retain image credits', async ({page}, testInfo) => {
  await register(page);
  const db = testDb();
  try {
  for (const question of batch) {
    const saved = await db.question.findUniqueOrThrow({where:{code:question.code},select:{topicId:true}});
    await page.goto(`/questions?topic=${saved.topicId}`);
    await expect(page.getByText('1 question match.',{exact:false})).toBeVisible();
    await page.getByRole('button',{name:'Practice',exact:true}).click();
    const exhibit = page.locator(`button img[src="${question.image}"]`);
    await expect(exhibit).toBeVisible();
    await expect.poll(()=>exhibit.evaluate((node:HTMLImageElement)=>node.naturalWidth)).toBe(1280);
    await expect(page.getByText(/AI-authored; medically unreviewed/)).toBeVisible();
    await page.getByRole('button',{name:'Lab values',exact:true}).click();
    const labs = page.getByRole('dialog',{name:'Lab values',exact:true});
    await expect(labs).toBeVisible();
    await labs.getByRole('button',{name:'Close',exact:true}).click();
    await page.screenshot({path:testInfo.outputPath(`${question.code}.png`),fullPage:true});
    await exhibit.click();
    const dialog = page.getByRole('dialog',{name:'Clinical Exhibit Inspection'});
    await expect(dialog).toBeVisible();
    await expect(dialog.locator('img')).toBeVisible();
    await dialog.getByRole('button',{name:'Close',exact:true}).click();
    await page.getByRole('radio').filter({hasText:question.options.find(o=>o.correct)!.text}).click();
    await page.getByRole('button',{name:'Submit answer',exact:true}).click();
    await expect(page.locator('#expl-h')).toHaveText('Correct');
    await expect(page.getByText('Image credit:',{exact:false})).toBeVisible();
    await expect(page.getByRole('link',{name:'Wikimedia Commons',exact:true})).toBeVisible();
  }
  } finally { await db.$disconnect(); }
});
