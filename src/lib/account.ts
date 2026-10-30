import { z } from 'zod';
import { db } from './db';
import { exportableCard, exportRights, filterNotebookRights } from './content-rights';

export const prefsSchema = z.object({
  dailyGoal: z.number().int().min(0).max(500).default(40),
  defaultMode: z.enum(['TUTOR', 'TIMED']).default('TUTOR'),
});
export type Prefs = z.infer<typeof prefsSchema>;

export async function getPrefs(userId: string): Promise<Prefs> {
  const u = await db.user.findUniqueOrThrow({ where: { id: userId }, select: { preferences: true } });
  const p = prefsSchema.safeParse(u.preferences ?? {});
  return p.success ? p.data : prefsSchema.parse({});
}

export async function savePrefs(userId: string, raw: unknown) {
  const preferences = prefsSchema.parse(raw);
  await db.user.update({ where: { id: userId }, data: { preferences } });
}

/** Everything we store about the user, as JSON (data portability). Never includes password hashes or tokens. */
export async function exportMyData(userId: string) {
  const [user, sessions, responses, bookmarks, notes, tags, pages, collections, cards, plan, reports] = await Promise.all([
    db.user.findUniqueOrThrow({ where: { id: userId }, select: { id: true, name: true, email: true, role: true, preferences: true, createdAt: true } }),
    db.testSession.findMany({ where: { userId }, include: { items: { select: { position: true, selectedOptionIds: true, flagged: true, isCorrect: true, timeMs: true, question: { select: { code: true } } } } } }),
    db.response.findMany({ where: { userId }, include: { question: { select: { code: true } } } }),
    db.bookmark.findMany({ where: { userId }, include: { question: { select: { code: true } } } }),
    db.note.findMany({ where: { userId, question: exportRights }, include: { question: { select: { code: true } } } }),
    db.questionTag.findMany({ where: { userId } }),
    db.notebookPage.findMany({ where: { userId } }),
    db.collection.findMany({ where: { userId }, include: { items: { include: { question: { select: { code: true } } } } } }),
    db.card.findMany({ where: { userId, ...exportableCard }, include: { reviews: true } }),
    db.studyPlan.findUnique({ where: { userId }, include: { tasks: true } }),
    db.contentReport.findMany({ where: { userId, question: exportRights } }),
  ]);
  const notebook = await filterNotebookRights(pages, 'export');
  return { exportedAt: new Date().toISOString(), user, sessions, responses, bookmarks, notes, tags, notebook, collections, cards, plan, reports,
    rightsNotice: 'Question-linked notes, reports, cards and notebook clips with unresolved or non-exportable rights are withheld; stored records and study history are preserved.' };
}

export async function deleteAccount(userId: string) {
  // cascades remove sessions, answers, notes, cards, plans; authored questions keep content with author set to null
  await db.user.delete({ where: { id: userId } });
}
