import { db } from '../../src/lib/db';
import type { Actor } from '../../src/lib/admin';
import { reviewContentRights, submitRightsEvidence } from '../../src/lib/content-rights';
import { testDatabaseUrl } from '../../scripts/test-database';

// Test-only attestation for synthetic fixture operations, never a rights grant for the real bank.
export async function approveFixtureRights(actor: Actor, id: string, allowDelivery = true, allowExport = true) {
  testDatabaseUrl(process.env.DATABASE_URL, undefined);
  let q = await db.question.findUniqueOrThrow({ where: { id } });
  await submitRightsEvidence(actor, id, { version: q.updatedAt.toISOString(), holder: 'Synthetic test fixture', evidence: 'Isolated regression fixture only; this is not evidence for any real content release.' });
  q = await db.question.findUniqueOrThrow({ where: { id } });
  await reviewContentRights(actor, id, { version: q.updatedAt.toISOString(), status: 'VERIFIED', reason: 'Synthetic fixture approval scoped to disposable automated testing only.', allowDelivery, allowExport });
}
