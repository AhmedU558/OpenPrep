import { progressCsv } from '@/lib/analytics';
import { jsonError } from '@/lib/errors';
import { requireUser } from '@/lib/session';

export async function GET() {
  try {
    const u = await requireUser();
    const csv = await progressCsv(u.id);
    return new Response(`﻿${csv}`, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="progress-${new Date().toISOString().slice(0, 10)}.csv"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (e) {
    return jsonError(e);
  }
}
