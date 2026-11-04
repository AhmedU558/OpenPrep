import type { Prisma } from '@/generated/prisma/client';
import { db } from './db';
import type { Filters } from './validation/exam';
import { deliverableQuestion } from './content-rights';
import { resolveUserActiveQuestionPools, type UserActiveQuestionPools } from './practice-event-sequence';
import { isRevisionFullyApproved, type QuestionContentSnapshot } from './question-revision';

// ponytail: full-text search computes to_tsvector per query (no index); add a generated tsvector column + GIN index past ~50k questions
export async function searchIds(q: string): Promise<string[]> {
  const rows = await db.$queryRaw<{ id: string }[]>`
    SELECT id FROM question
    WHERE status = 'PUBLISHED'
      AND "rightsStatus" = 'VERIFIED' AND "rightsAllowDelivery" = true
      AND to_tsvector('english', "stemMd" || ' ' || "explanationMd" || ' ' || coalesce(objective, ''))
          @@ websearch_to_tsquery('english', ${q})
    LIMIT 5000`;
  return rows.map((r) => r.id);
}

/** Published questions matching the filters. `userId` scopes the personal pools (unused, incorrect, ...). */
export async function questionWhere(
  userId: string | null,
  f: Filters,
  preloadedPools?: UserActiveQuestionPools,
): Promise<Prisma.QuestionWhereInput> {
  const where: Prisma.QuestionWhereInput = { ...deliverableQuestion };
  if (f.examIds.length) where.examId = { in: f.examIds };
  if (f.subjectIds.length) where.subjectId = { in: f.subjectIds };
  if (f.systemIds.length) where.systemId = { in: f.systemIds };
  if (f.topicIds.length) where.topicId = { in: f.topicIds };
  if (f.difficulty.length) where.difficulty = { in: f.difficulty };
  if (userId) {
    const mine = { userId };
    if (f.pool === 'marked') {
      where.bookmarks = { some: mine };
    } else if (f.pool !== 'all') {
      const pools = preloadedPools ?? (await resolveUserActiveQuestionPools(db, userId));
      switch (f.pool) {
        case 'unused':
          if (pools.activeUsed.size > 0) {
            where.id = { notIn: Array.from(pools.activeUsed) };
          }
          break;
        case 'incorrect':
          where.id = { in: Array.from(pools.activeIncorrect) };
          break;
        case 'omitted':
          where.id = { in: Array.from(pools.activeOmitted) };
          break;
        case 'correct':
          where.id = { in: Array.from(pools.activeCorrect) };
          break;
      }
    }
    if (f.collectionId) where.collectionItems = { some: { collectionId: f.collectionId, collection: { userId } } };
  }
  if (f.q) {
    const qIds = await searchIds(f.q);
    if (where.id && typeof where.id === 'object') {
      where.AND = [
        ...(Array.isArray(where.AND) ? where.AND : where.AND ? [where.AND] : []),
        { id: { in: qIds } },
      ];
    } else {
      where.id = { in: qIds };
    }
  }
  return where;
}

export type Facets = { exams: Facet[]; subjects: Facet[]; systems: Facet[]; topics: Facet[] };
export type Facet = { id: string; name: string; count: number };

/** Taxonomy with counts of matching questions, for the filter sidebar. */
export async function facets(where: Prisma.QuestionWhereInput): Promise<Facets> {
  where = { AND: [where, deliverableQuestion] };
  const [exams, subjects, systems, topics, byExam, bySubject, bySystem, byTopic] = await Promise.all([
    db.exam.findMany({ orderBy: { position: 'asc' } }),
    db.subject.findMany({ orderBy: { name: 'asc' } }),
    db.system.findMany({ orderBy: { name: 'asc' } }),
    db.topic.findMany({ orderBy: { name: 'asc' }, include: { subject: { select: { name: true } } } }),
    db.question.groupBy({ by: ['examId'], where, _count: true }),
    db.question.groupBy({ by: ['subjectId'], where, _count: true }),
    db.question.groupBy({ by: ['systemId'], where, _count: true }),
    db.question.groupBy({ by: ['topicId'], where, _count: true }),
  ]);
  const ex = new Map(byExam.map((r) => [r.examId, r._count]));
  const su = new Map(bySubject.map((r) => [r.subjectId, r._count]));
  const sy = new Map(bySystem.map((r) => [r.systemId, r._count]));
  const to = new Map(byTopic.map((r) => [r.topicId, r._count]));
  return {
    exams: exams.map((e) => ({ id: e.id, name: e.name, count: ex.get(e.id) ?? 0 })),
    subjects: subjects.map((s) => ({ id: s.id, name: s.name, count: su.get(s.id) ?? 0 })),
    systems: systems.map((s) => ({ id: s.id, name: s.name, count: sy.get(s.id) ?? 0 })),
    topics: topics.map((t) => ({ id: t.id, name: `${t.subject.name} / ${t.name}`, count: to.get(t.id) ?? 0 })),
  };
}

export async function listQuestions(userId: string | null, f: Filters, page: number, pageSize = 20) {
  const where = await questionWhere(userId, f);
  const [total, rows] = await Promise.all([
    db.question.count({ where }),
    db.question.findMany({
      where,
      orderBy: { code: 'asc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
      select: {
        id: true, code: true, type: true, difficulty: true, stemMd: true, isDemo: true, source: true,
        exam: { select: { name: true } }, subject: { select: { name: true } }, system: { select: { name: true } },
        responses: userId ? { where: { userId }, select: { isCorrect: true, omitted: true } } : false,
        bookmarks: userId ? { where: { userId }, select: { questionId: true } } : false,
        revisions: {
          orderBy: { revisionNumber: 'desc' },
          take: 1,
          select: { contentSnapshot: true, reviews: true },
        },
      },
    }),
  ]);

  const sanitizedRows = rows.map((r) => {
    let stemMd = r.stemMd;
    if (r.revisions && r.revisions.length > 0) {
      const latestRev = r.revisions[0]!;
      const { approved } = isRevisionFullyApproved(latestRev.reviews);
      if (approved && latestRev.contentSnapshot) {
        const snap = latestRev.contentSnapshot as unknown as QuestionContentSnapshot;
        if (snap.stemMd) stemMd = snap.stemMd;
      }
    }
    const { revisions, ...rest } = r;
    return { ...rest, stemMd };
  });

  return { total, page, pageSize, rows: sanitizedRows, where };
}
