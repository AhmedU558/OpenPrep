import { db } from './db';
import { deliverableQuestion } from './content-rights';
import type { Facets } from './questions';

// High-performance in-memory cache with TTL for static taxonomy and published bank counts
type CacheEntry<T> = { data: T; expiresAt: number };

let publishedCountCache: CacheEntry<number> | null = null;
let defaultFacetsCache: CacheEntry<Facets> | null = null;
let taxonomyCache: CacheEntry<{
  exams: { id: string; name: string; position: number }[];
  subjects: { id: string; name: string }[];
  systems: { id: string; name: string }[];
  names: Map<string, string>;
}> | null = null;

const TTL_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Returns the cached count of deliverable published questions.
 * Avoids executing a 50k-row COUNT(*) on PostgreSQL on every page load.
 */
export async function getCachedPublishedCount(): Promise<number> {
  const now = Date.now();
  if (publishedCountCache && publishedCountCache.expiresAt > now) {
    return publishedCountCache.data;
  }
  const count = await db.question.count({ where: deliverableQuestion });
  publishedCountCache = { data: count, expiresAt: now + TTL_MS };
  return count;
}

/**
 * Returns cached exams, subjects, and systems.
 * Eliminates redundant database round-trips for static taxonomy tables.
 */
export async function getCachedTaxonomy() {
  const now = Date.now();
  if (taxonomyCache && taxonomyCache.expiresAt > now) {
    return taxonomyCache.data;
  }
  const [exams, subjects, systems] = await Promise.all([
    db.exam.findMany({ orderBy: { position: 'asc' } }),
    db.subject.findMany({ orderBy: { name: 'asc' } }),
    db.system.findMany({ orderBy: { name: 'asc' } }),
  ]);
  const names = new Map<string, string>([...exams, ...subjects, ...systems].map((x) => [x.id, x.name]));
  const data = { exams, subjects, systems, names };
  taxonomyCache = { data, expiresAt: now + TTL_MS };
  return data;
}

/**
 * Returns cached default facets for all published questions.
 * Eliminates 4 expensive groupBy queries scanning 50,000 rows on every browse/create request.
 */
export async function getCachedDefaultFacets(): Promise<Facets> {
  const now = Date.now();
  if (defaultFacetsCache && defaultFacetsCache.expiresAt > now) {
    return defaultFacetsCache.data;
  }

  const where = deliverableQuestion;
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

  const data: Facets = {
    exams: exams.map((e) => ({ id: e.id, name: e.name, count: ex.get(e.id) ?? 0 })),
    subjects: subjects.map((s) => ({ id: s.id, name: s.name, count: su.get(s.id) ?? 0 })),
    systems: systems.map((s) => ({ id: s.id, name: s.name, count: sy.get(s.id) ?? 0 })),
    topics: topics.map((t) => ({ id: t.id, name: `${t.subject.name} / ${t.name}`, count: to.get(t.id) ?? 0 })),
  };

  defaultFacetsCache = { data, expiresAt: now + TTL_MS };
  return data;
}

/** Invalidate cache on imports or rights updates */
export function invalidateTaxonomyCache() {
  publishedCountCache = null;
  defaultFacetsCache = null;
  taxonomyCache = null;
}
