import { exportQuestions } from '@/lib/admin';
import { jsonError } from '@/lib/errors';
import { requireRole } from '@/lib/session';

export async function GET(req: Request) {
  try {
    const actor = await requireRole('EDITOR');
    const status = new URL(req.url).searchParams.get('status') || undefined;
    const rows = await exportQuestions(actor, status);
    return new Response(JSON.stringify(rows, null, 2), {
      headers: { 'Content-Type': 'application/json', 'Content-Disposition': `attachment; filename="questions-${status ?? 'all'}.json"`, 'Cache-Control': 'no-store' },
    });
  } catch (e) {
    return jsonError(e);
  }
}
