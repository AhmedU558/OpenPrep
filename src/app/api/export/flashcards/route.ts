import { jsonError } from '@/lib/errors';
import { requireUser } from '@/lib/session';
import { exportAnkiCards } from '@/lib/study';

export async function GET(request: Request) {
  try {
    const user = await requireUser();
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get('q') ?? '').slice(0, 100);
    const subjectId = searchParams.get('subjectId') ?? undefined;

    const tsv = await exportAnkiCards(user.id, { q: q || undefined, subjectId });
    const today = new Date().toISOString().slice(0, 10);

    return new Response(tsv, {
      headers: {
        'Content-Type': 'text/tab-separated-values; charset=utf-8',
        'Content-Disposition': `attachment; filename="openprep-flashcards-anki-${today}.txt"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (e) {
    return jsonError(e);
  }
}
