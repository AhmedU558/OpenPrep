import 'dotenv/config';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve, basename } from 'node:path';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { validateAuthorizedBatch, persistAuthorizedBatch } from '../src/lib/authorized-importer';
import { testDatabaseUrl } from './test-database';

let importDb: PrismaClient | undefined;

async function main() {
  const args = process.argv.slice(2);
  const fileArgIdx = args.indexOf('--file');
  if (fileArgIdx === -1 || !args[fileArgIdx + 1]) {
    console.error('Usage: npx tsx scripts/import-authorized-bank.ts --file <path-to-questions.json> [--apply]');
    process.exit(1);
  }

  const fileArg = args[fileArgIdx + 1];
  if (!fileArg) {
    console.error('Usage: npx tsx scripts/import-authorized-bank.ts --file <path-to-questions.json> [--apply]');
    process.exit(1);
  }

  const filePath = resolve(fileArg);
  const isApply = args.includes('--apply');
  const dryRun = !isApply;

  console.log(`[Import] Reading input dataset from: ${filePath}`);
  const content = await readFile(filePath, 'utf8');
  let rawItems: unknown;
  try {
    rawItems = JSON.parse(content);
  } catch (err) {
    console.error('[Import Error] Invalid JSON payload in source file:', err);
    process.exit(1);
  }

  console.log('[Import] Checking structure and declared licensing/provenance fields (not rights verification)...');
  const validation = validateAuthorizedBatch(rawItems as unknown[]);

  if (!validation.valid) {
    console.error(`[Validation Failed] Encountered ${validation.errors.length} issue(s):`);
    validation.errors.forEach((e) => {
      console.error(`  - Row ${e.index} [Code: ${e.code ?? 'N/A'}] [${e.field ?? 'general'}]: ${e.message}`);
    });
    process.exit(1);
  }

  console.log(`[Validation Success] Parsed ${validation.validQuestions.length} structurally valid question(s).`);
  console.log('[Licensing & Provenance Audit Summary]:');
  validation.provenance.forEach((p) => {
    console.log(`  - Source: ${p.source} | License: ${p.license} | Author: ${p.attribution ?? 'Unattributed'} | Count: ${p.count}`);
  });

  if (dryRun) {
    console.log('\n[Dry-Run Notice] Operating in simulation mode (--dry-run). No changes will be written to any database.');
    console.log(`Summary: ${validation.validQuestions.length} structurally valid candidate(s); rights and clinical review remain pending.`);
    return;
  }

  // Safeguard: Check that target is isolated test database
  const primaryDb = process.env.DATABASE_URL;
  const targetDb = testDatabaseUrl(process.env.TEST_DATABASE_URL, primaryDb);
  const db = importDb = new PrismaClient({ adapter: new PrismaPg({ connectionString: targetDb }) });
  console.log(`\n[Database Safeguard] Verified isolated target: ${new URL(targetDb).pathname}`);

  const actor = await db.user.findFirst({
    where: { role: 'ADMIN' },
    select: { id: true, role: true },
  });

  if (!actor) {
    console.error('[Error] An existing ADMIN user record is required to record the import audit log and revision ownership.');
    process.exit(1);
  }

  console.log('[Database Persistence] Importing questions inside transaction with Stage 4B review gating...');
  const batchId = basename(filePath, '.json');

  const summary = await db.$transaction(async (tx) => {
    return persistAuthorizedBatch(tx, actor, validation.validQuestions, {
      dryRun: false,
      batchId,
    });
  });

  await mkdir('docs/imports/reports', { recursive: true });
  const reportPath = `docs/imports/reports/import-${batchId}-${Date.now()}.json`;
  await writeFile(reportPath, JSON.stringify({ summary, validation }, null, 2));

  console.log('[Import Completed Successfully]');
  console.log(`  Created: ${summary.created}`);
  console.log(`  Updated: ${summary.updated}`);
  console.log(`  Status: Marked as DRAFT (withheld from delivery pending EDITORIAL, CLINICAL, and RIGHTS approvals)`);
  console.log(`  Audit Report saved: ${reportPath}`);
}

main().catch((err) => {
  console.error('[Unhandled Exception]:', err);
  process.exitCode = 1;
}).finally(async () => { await importDb?.$disconnect(); });
