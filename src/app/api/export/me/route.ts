import { exportMyData } from '@/lib/account';
import { jsonError } from '@/lib/errors';
import { requireUser } from '@/lib/session';

export async function GET() {
  try {
    const u = await requireUser();
    return new Response(JSON.stringify(await exportMyData(u.id), null, 2), {
      headers: { 'Content-Type': 'application/json', 'Content-Disposition': 'attachment; filename="my-openprep-data.json"', 'Cache-Control': 'no-store' },
    });
  } catch (e) {
    return jsonError(e);
  }
}
