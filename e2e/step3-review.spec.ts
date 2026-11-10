import {test,expect} from '@playwright/test';
import {register,testDb} from './helpers';
import {step3Fixture} from '../tests/fixtures/step3';
import {materialize} from '../content/step3/types';

test('Step3 candidate enters admin review but cannot be published or selected by learners',async({page})=>{
  const credentials=await register(page),db=testDb(),question=materialize(step3Fixture('op-s3-9996'));
  try{
    await db.user.update({where:{email:credentials.email},data:{role:'ADMIN'}});
    await page.goto('/admin/import');
    await page.getByLabel('Question file').setInputFiles({name:'step3-candidate.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify([question]))});
    await page.getByRole('button',{name:'Dry run step3-candidate.json',exact:true}).click();
    await expect(page.getByText('Dry run: nothing was saved.',{exact:true})).toBeVisible();
    expect(await db.question.findUnique({where:{code:question.code}})).toBeNull();
    await page.getByRole('button',{name:'Import for real',exact:true}).click();
    await expect(page.getByText('Import complete.',{exact:true})).toBeVisible();
    const row=await db.question.findUniqueOrThrow({where:{code:question.code}});
    expect(row).toMatchObject({status:'DRAFT',rightsStatus:'UNVERIFIED',rightsAllowDelivery:false,rightsAllowExport:false});
    await page.goto(`/admin/questions/${row.id}`);
    await expect(page.getByText(/AI-authored medical content\. Availability status does not certify medical review/)).toBeVisible();
    await page.getByRole('button',{name:'Submit for review',exact:true}).click();
    await expect.poll(async()=>(await db.question.findUniqueOrThrow({where:{id:row.id}})).status).toBe('REVIEW');
    await page.getByRole('button',{name:'Publish',exact:true}).click();
    await expect(page.getByText('Verified rights and explicit delivery permission are required before publication.',{exact:true})).toBeVisible();
    await page.goto(`/questions?exam=${row.examId}&topic=${row.topicId}`);
    await expect(page.getByText(/0 questions? match/)).toBeVisible();
  }finally{await db.$disconnect();}
});
