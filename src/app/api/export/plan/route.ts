import { appName } from '@/lib/env';
import { jsonError } from '@/lib/errors';
import { getPlan } from '@/lib/plan';
import { requireUser } from '@/lib/session';

// iCalendar export: one all-day event per study day, so any calendar app can remind you. No push service needed.
const esc = (s: string) => s.replace(/[\\;,]/g, (c) => `\\${c}`).replace(/\r?\n/g, '\\n');

export async function GET() {
  try {
    const u = await requireUser();
    const data = await getPlan(u.id);
    const byDay = new Map<string, string[]>();
    for (const t of data?.tasks ?? []) {
      const label = t.kind === 'QUESTIONS' ? `${t.target} questions: ${t.system?.name ?? 'mixed'}` : t.kind === 'FLASHCARDS' ? `${t.target} flashcards` : 'Review incorrect & marked';
      byDay.set(t.day, [...(byDay.get(t.day) ?? []), label]);
    }
    const stamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', `PRODID:-//${esc(appName())}//Study plan//EN`, 'CALSCALE:GREGORIAN'];
    for (const [day, items] of byDay) {
      const d = day.replace(/-/g, '');
      const next = new Date(Date.parse(`${day}T00:00:00Z`) + 864e5).toISOString().slice(0, 10).replace(/-/g, '');
      lines.push('BEGIN:VEVENT', `UID:${d}-${u.id}@openprep`, `DTSTAMP:${stamp}`, `DTSTART;VALUE=DATE:${d}`, `DTEND;VALUE=DATE:${next}`,
        `SUMMARY:${esc(`${appName()} study`)}`, `DESCRIPTION:${esc(items.join('\n'))}`,
        'BEGIN:VALARM', 'TRIGGER:PT9H', 'ACTION:DISPLAY', `DESCRIPTION:${esc('Time to study')}`, 'END:VALARM', 'END:VEVENT');
    }
    lines.push('END:VCALENDAR');
    return new Response(lines.join('\r\n'), {
      headers: { 'Content-Type': 'text/calendar; charset=utf-8', 'Content-Disposition': 'attachment; filename="study-plan.ics"', 'Cache-Control': 'no-store' },
    });
  } catch (e) {
    return jsonError(e);
  }
}
