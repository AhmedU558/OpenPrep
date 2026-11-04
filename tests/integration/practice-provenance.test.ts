import { randomUUID } from 'node:crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { db } from '@/lib/db';
import { testDatabaseUrl } from '../../scripts/test-database';
import {
  isIdempotencyKeyConflict,
  recordAttemptSubmission,
  recordPracticeEvent,
  recordPracticeReset,
  resolveQuestionPracticeStatus,
} from '@/lib/practice-event-sequence';
import {
  createQuestionRevision,
  isRevisionFullyApproved,
  recordQuestionReview,
} from '@/lib/question-revision';
import {
  createSession,
  openSession,
  pauseSession,
  submitItem,
  submitSession,
  answer,
  getView,
} from '@/lib/exam/service';
import { createQuestion, updateQuestion, setStatus } from '@/lib/admin';
import { submitRightsEvidence, reviewContentRights } from '@/lib/content-rights';
import { getDeliverableQuestion } from '@/lib/question-revision';
import { resetPractice } from '@/lib/study';
import { questionWhere, listQuestions } from '@/lib/questions';
import { seed } from '../../prisma/seed';
import type { Filters } from '@/lib/validation/exam';

describe('PostgreSQL Integration: Practice History, Reset Provenance & Question Revisions', () => {
  // Unique execution run identifier to isolate all created test entities
  const runId = `test_prov_${Date.now()}_${randomUUID().replace(/-/g, '').slice(0, 8)}`;

  // Strict ownership tracking sets for root synthetic parents
  const trackedUserIds = new Set<string>();
  const trackedQuestionIds = new Set<string>();
  const trackedSessionIds = new Set<string>();

  let sharedExamId: string;
  let sharedSubjectId: string;
  let sharedSystemId: string;

  beforeAll(async () => {
    // Double sanity guard: ensure runtime DATABASE_URL is strictly the loopback *_test database
    testDatabaseUrl(process.env.DATABASE_URL, undefined);
    await seed(db);

    // Read-only taxonomy lookup of pre-existing metadata
    const exam = await db.exam.findFirstOrThrow();
    const subject = await db.subject.findFirstOrThrow();
    const system = await db.system.findFirstOrThrow();
    sharedExamId = exam.id;
    sharedSubjectId = subject.id;
    sharedSystemId = system.id;
  });

  afterAll(async () => {
    const userIds = Array.from(trackedUserIds);
    const questionIds = Array.from(trackedQuestionIds);
    const sessionIds = Array.from(trackedSessionIds);

    // Assert all tracked root IDs belong strictly to this test run before performing any cleanup
    for (const id of [...userIds, ...questionIds, ...sessionIds]) {
      if (!id.startsWith(runId)) {
        throw new Error(`Safety violation: tracked ID ${id} does not start with runId ${runId}`);
      }
    }

    if (userIds.length === 0 && questionIds.length === 0 && sessionIds.length === 0) {
      return;
    }

    // Atomic cleanup via Prisma transaction in strict reverse FK dependency order.
    // Uses synthetic parent IDs (userIds, questionIds, sessionIds) to discover and delete all child records,
    // ensuring complete cleanup even if assertions or transactions failed partially.
    await db.$transaction(async (tx) => {
      // 0. Bookmarks (FK: userId, questionId)
      if (userIds.length > 0 || questionIds.length > 0) {
        await tx.bookmark.deleteMany({
          where: {
            OR: [
              ...(userIds.length > 0 ? [{ userId: { in: userIds } }] : []),
              ...(questionIds.length > 0 ? [{ questionId: { in: questionIds } }] : []),
            ],
          },
        });
      }

      // 1. Question Reviews (FK: revisionId, reviewerId)
      if (userIds.length > 0 || questionIds.length > 0) {
        await tx.questionReview.deleteMany({
          where: {
            OR: [
              ...(userIds.length > 0 ? [{ reviewerId: { in: userIds } }] : []),
              ...(questionIds.length > 0 ? [{ revision: { questionId: { in: questionIds } } }] : []),
            ],
          },
        });
      }

      // 1b. Responses (FK: userId, questionId)
      if (userIds.length > 0 || questionIds.length > 0) {
        await tx.response.deleteMany({
          where: {
            OR: [
              ...(userIds.length > 0 ? [{ userId: { in: userIds } }] : []),
              ...(questionIds.length > 0 ? [{ questionId: { in: questionIds } }] : []),
            ],
          },
        });
      }

      // 2. Practice Attempts (FK: userId, questionId, sessionId, sessionItemId, revisionId, selectedOptionId)
      if (userIds.length > 0 || questionIds.length > 0) {
        await tx.practiceAttempt.deleteMany({
          where: {
            OR: [
              ...(userIds.length > 0 ? [{ userId: { in: userIds } }] : []),
              ...(questionIds.length > 0 ? [{ questionId: { in: questionIds } }] : []),
            ],
          },
        });
      }

      // 3. Practice Resets (FK: userId)
      if (userIds.length > 0) {
        await tx.practiceReset.deleteMany({
          where: { userId: { in: userIds } },
        });
      }

      // 4. Practice Events (FK: userId, sessionId)
      if (userIds.length > 0 || sessionIds.length > 0) {
        await tx.practiceEvent.deleteMany({
          where: {
            OR: [
              ...(userIds.length > 0 ? [{ userId: { in: userIds } }] : []),
              ...(sessionIds.length > 0 ? [{ sessionId: { in: sessionIds } }] : []),
            ],
          },
        });
      }

      // 5. User Practice State (FK: userId)
      if (userIds.length > 0) {
        await tx.userPracticeState.deleteMany({
          where: { userId: { in: userIds } },
        });
      }

      // 6. Session Items (FK: sessionId, questionId, deliveredRevisionId - must be deleted before QuestionRevision due to ON DELETE RESTRICT)
      if (sessionIds.length > 0 || questionIds.length > 0) {
        await tx.sessionItem.deleteMany({
          where: {
            OR: [
              ...(sessionIds.length > 0 ? [{ sessionId: { in: sessionIds } }] : []),
              ...(questionIds.length > 0 ? [{ questionId: { in: questionIds } }] : []),
            ],
          },
        });
      }

      // 7. Question Revisions (FK: questionId, authorId)
      if (questionIds.length > 0) {
        await tx.questionRevision.deleteMany({
          where: { questionId: { in: questionIds } },
        });
      }

      // 8. Test Sessions (FK: userId, practiceExamId)
      if (sessionIds.length > 0 || userIds.length > 0) {
        await tx.testSession.deleteMany({
          where: {
            OR: [
              ...(sessionIds.length > 0 ? [{ id: { in: sessionIds } }] : []),
              ...(userIds.length > 0 ? [{ userId: { in: userIds } }] : []),
            ],
          },
        });
      }

      // 9. Options (FK: questionId)
      if (questionIds.length > 0) {
        await tx.option.deleteMany({
          where: { questionId: { in: questionIds } },
        });
      }

      // 10. Questions (FK: examId, subjectId, systemId)
      if (questionIds.length > 0) {
        await tx.question.deleteMany({
          where: { id: { in: questionIds } },
        });
      }

      // 11. Users
      if (userIds.length > 0) {
        await tx.user.deleteMany({
          where: { id: { in: userIds } },
        });
      }
    });
  });

  // Isolated test record generators: pre-register synthetic IDs in tracking sets BEFORE executing creates
  async function createTestUser(role: 'LEARNER' | 'EDITOR' | 'ADMIN' = 'LEARNER') {
    const id = `${runId}_user_${randomUUID().replace(/-/g, '').slice(0, 8)}`;
    trackedUserIds.add(id);
    const user = await db.user.create({
      data: {
        id,
        name: `Test User ${id}`,
        email: `${id}@test.localhost`,
        role,
      },
    });
    return user;
  }

  async function createTestQuestion(
    codeSuffix: string,
    stem = 'Initial clinical stem',
    type: 'SINGLE' | 'MULTIPLE' = 'SINGLE',
    customOptions?: Array<{ position: number; text: string; isCorrect: boolean }>,
    overrides?: { subjectId?: string; systemId?: string },
  ) {
    const id = `${runId}_q_${codeSuffix}_${randomUUID().replace(/-/g, '').slice(0, 6)}`;
    const code = `q_${codeSuffix}_${randomUUID().replace(/-/g, '').slice(0, 12)}`;
    trackedQuestionIds.add(id);
    const defaultOptions = [
      { position: 0, text: 'Choice A', isCorrect: false },
      { position: 1, text: 'Choice B', isCorrect: true, explanationMd: 'Key choice explanation' },
    ];
    const q = await db.question.create({
      data: {
        id,
        code,
        type,
        examId: sharedExamId,
        subjectId: overrides?.subjectId ?? sharedSubjectId,
        systemId: overrides?.systemId ?? sharedSystemId,
        stemMd: stem,
        explanationMd: 'Clinical explanation text for integration verification.',
        source: 'OpenPrep Test Integration',
        license: 'CC-BY-4.0',
        status: 'PUBLISHED',
        rightsStatus: 'VERIFIED',
        rightsAllowDelivery: true,
        rightsHolder: 'OpenPrep Foundation',
        rightsEvidence: 'Verified clinical content license for integration tests.',
        rightsDecision: 'Approved for clinical delivery under verified license.',
        rightsReviewedBy: 'admin',
        rightsReviewedAt: new Date(),
        difficulty: 3,
        options: {
          create: customOptions ?? defaultOptions,
        },
      },
      include: { options: true },
    });
    return q;
  }

  async function createTestSession(userId: string, questionId: string, mode: 'TUTOR' | 'TIMED' = 'TUTOR') {
    const sessionId = `${runId}_sess_${randomUUID().replace(/-/g, '').slice(0, 8)}`;
    const itemId = `${runId}_item_${randomUUID().replace(/-/g, '').slice(0, 8)}`;
    trackedSessionIds.add(sessionId);
    const session = await db.testSession.create({
      data: {
        id: sessionId,
        userId,
        mode,
        total: 1,
        items: {
          create: [
            {
              id: itemId,
              position: 0,
              questionId,
            },
          ],
        },
      },
      include: { items: true },
    });
    return session;
  }

  // ---------------------------------------------------------------- Tests

  it('allocates strictly contiguous monotonic sequence numbers under concurrent PostgreSQL transactions', async () => {
    const user = await createTestUser();
    const CONCURRENCY = 10;

    // Launch 10 concurrent transactions calling recordPracticeEvent for the same user
    const results = await Promise.all(
      Array.from({ length: CONCURRENCY }, (_, i) =>
        db.$transaction(async (tx) => {
          return await recordPracticeEvent(tx, {
            userId: user.id,
            eventType: 'SESSION_START',
            payload: { workerIndex: i },
          });
        }),
      ),
    );

    const seqs = results.map((r) => r.eventSeq).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    expect(seqs).toHaveLength(CONCURRENCY);

    // Verify sequences are strictly 1n to 10n with zero gaps or duplicates
    for (let i = 0; i < CONCURRENCY; i++) {
      expect(seqs[i]).toBe(BigInt(i + 1));
    }

    // Verify user_practice_state in PostgreSQL reflects the final sequence count
    const state = await db.userPracticeState.findUniqueOrThrow({
      where: { userId: user.id },
    });
    expect(state.lastEventSeq).toBe(BigInt(CONCURRENCY));
    expect(state.activeResetSeq).toBe(0n);
  });

  it('safely handles concurrent duplicate attempt submissions with idempotency recovery', async () => {
    const user = await createTestUser();
    const question = await createTestQuestion('idemp');
    const opt0 = question.options[0]!;
    const idempotencyKey = `${runId}_key_race_${randomUUID()}`;

    // Establish a genuine session start event sequence
    const startEvent = await db.$transaction((tx) =>
      recordPracticeEvent(tx, {
        userId: user.id,
        eventType: 'SESSION_START',
      }),
    );

    const submissionParams = {
      userId: user.id,
      idempotencyKey,
      questionId: question.id,
      sessionStartEventSeq: startEvent.eventSeq,
      selectedOptionId: opt0.id,
      selectedOptionIdentifier: 'A',
      selectedOptionTextSnapshot: opt0.text,
      isCorrect: false,
      secondsSpent: 25,
      clientSubmittedAt: new Date(),
    };

    // Dispatch two identical submissions simultaneously on PostgreSQL
    const [res1, res2] = await Promise.all([
      recordAttemptSubmission(db, submissionParams),
      recordAttemptSubmission(db, submissionParams),
    ]);

    // One must have created, the other must have recovered the winner outside the failed transaction
    const createdCount = (res1.created ? 1 : 0) + (res2.created ? 1 : 0);
    expect(createdCount).toBe(1);

    // Both must return the identical winning attempt ID
    expect(res1.attempt.id).toBe(res2.attempt.id);

    // Verify database contains exactly 1 attempt and 1 attempt submission event
    const attempts = await db.practiceAttempt.findMany({
      where: { userId: user.id, idempotencyKey },
    });
    expect(attempts).toHaveLength(1);

    const events = await db.practiceEvent.findMany({
      where: { userId: user.id, eventType: 'ATTEMPT_SUBMISSION' },
    });
    expect(events).toHaveLength(1);

    // Verify conflicting payload reuse is rejected with CONFLICT
    await expect(
      recordAttemptSubmission(db, {
        ...submissionParams,
        isCorrect: true, // Mismatched correctness
      }),
    ).rejects.toThrow('Idempotency key reused with mismatched submission payload.');
  });

  it('does not treat unrelated Prisma P2002 errors as idempotency conflicts', async () => {
    // Generate a real PostgreSQL P2002 by violating the unique user.email constraint
    const existingUser = await createTestUser();
    let caughtEmailError: unknown;
    const dupUserId = `${runId}_user_dup_email`;
    trackedUserIds.add(dupUserId);
    try {
      await db.user.create({
        data: {
          id: dupUserId,
          name: 'Duplicate Email Test',
          email: existingUser.email, // Violates user.email unique constraint
          role: 'LEARNER',
        },
      });
    } catch (err) {
      caughtEmailError = err;
    }

    expect(caughtEmailError).toBeDefined();
    expect((caughtEmailError as { code?: string }).code).toBe('P2002');
    // Verify isIdempotencyKeyConflict returns false on real PostgreSQL P2002 for another table/column
    expect(isIdempotencyKeyConflict(caughtEmailError)).toBe(false);
  });

  it('sets sequential reset watermarks and preserves historical attempts across resets and session purge', async () => {
    const user = await createTestUser();
    const question = await createTestQuestion('reset');
    const session = await createTestSession(user.id, question.id);
    const sessionItem = session.items[0]!;
    const opt0 = question.options[0]!;

    // Record session start event for realistic sequence anchoring
    const startEvent = await db.$transaction((tx) =>
      recordPracticeEvent(tx, {
        userId: user.id,
        eventType: 'SESSION_START',
        sessionId: session.id,
      }),
    );

    // 1. Record Attempt 1 (before reset)
    await recordAttemptSubmission(db, {
      userId: user.id,
      idempotencyKey: `${runId}_key_pre_reset`,
      sessionId: session.id,
      sessionItemId: sessionItem.id,
      questionId: question.id,
      sessionStartEventSeq: startEvent.eventSeq,
      selectedOptionId: opt0.id,
      selectedOptionIdentifier: 'A',
      selectedOptionTextSnapshot: opt0.text,
      isCorrect: false,
      secondsSpent: 30,
      clientSubmittedAt: new Date(),
    });

    // Status before reset: pool is 'incorrect', active count = 1, lifetime count = 1
    const attemptsPre = await db.practiceAttempt.findMany({ where: { userId: user.id } });
    const statusPre = resolveQuestionPracticeStatus(question.id, attemptsPre, []);
    expect(statusPre.pool).toBe('incorrect');
    expect(statusPre.activeAttemptCount).toBe(1);
    expect(statusPre.lifetimeAttemptCount).toBe(1);

    // 2. Record Reset
    const resetRes = await db.$transaction((tx) =>
      recordPracticeReset(tx, {
        userId: user.id,
        scope: 'INCORRECT_ONLY',
        affectedQuestionIds: [question.id],
        snapshotCounts: { incorrect: 1, correct: 0 },
      }),
    );

    // Status after reset: pool is 'unused', active count = 0, lifetime count = 1
    const resets = await db.practiceReset.findMany({ where: { userId: user.id } });
    const statusPostReset = resolveQuestionPracticeStatus(question.id, attemptsPre, resets);
    expect(statusPostReset.pool).toBe('unused');
    expect(statusPostReset.activeAttemptCount).toBe(0);
    expect(statusPostReset.lifetimeAttemptCount).toBe(1);
    expect(statusPostReset.lastResetEventSeq).toBe(resetRes.resetEventSeq);

    // 3. Record Attempt 2 (post-reset)
    const opt1 = question.options[1]!;
    await recordAttemptSubmission(db, {
      userId: user.id,
      idempotencyKey: `${runId}_key_post_reset`,
      sessionId: session.id,
      sessionItemId: sessionItem.id,
      questionId: question.id,
      sessionStartEventSeq: startEvent.eventSeq,
      selectedOptionId: opt1.id,
      selectedOptionIdentifier: 'B',
      selectedOptionTextSnapshot: opt1.text,
      isCorrect: true,
      secondsSpent: 20,
      clientSubmittedAt: new Date(),
    });

    // Status post attempt 2: pool is 'correct', active count = 1, lifetime count = 2
    const attemptsAll = await db.practiceAttempt.findMany({ where: { userId: user.id } });
    const statusFinal = resolveQuestionPracticeStatus(question.id, attemptsAll, resets);
    expect(statusFinal.pool).toBe('correct');
    expect(statusFinal.activeAttemptCount).toBe(1);
    expect(statusFinal.lifetimeAttemptCount).toBe(2);

    // 4. Test Historical Retention: Delete TestSession (simulating session cleanup)
    // Note: session.id remains in trackedSessionIds so afterAll cleanup handles both success and failure.
    // Deletion of TestSession cascades to SessionItem, while PracticeAttempt.sessionId/sessionItemId set to NULL.
    await db.testSession.delete({ where: { id: session.id } });

    // Verify PracticeAttempt rows survive with sessionId = null and sessionItemId = null
    const survivingAttempts = await db.practiceAttempt.findMany({
      where: { userId: user.id },
      orderBy: { attemptEventSeq: 'asc' },
    });
    expect(survivingAttempts).toHaveLength(2);
    expect(survivingAttempts[0]!.sessionId).toBeNull();
    expect(survivingAttempts[0]!.sessionItemId).toBeNull();
    expect(survivingAttempts[0]!.selectedOptionIdentifier).toBe('A');
    expect(survivingAttempts[1]!.sessionId).toBeNull();
    expect(survivingAttempts[1]!.sessionItemId).toBeNull();
    expect(survivingAttempts[1]!.selectedOptionIdentifier).toBe('B');
  });

  it('manages question revisions with row-locking, duplicate suppression, and 3-pillar review gating', async () => {
    // Distinct actors for editorial, clinical, and rights pillars
    const author = await createTestUser('EDITOR');
    const reviewerEditorial = await createTestUser('EDITOR');
    const reviewerClinical = await createTestUser('ADMIN');
    const reviewerRights = await createTestUser('ADMIN');
    const question = await createTestQuestion('rev', 'Initial clinical stem for revision test');

    // 1. Create Revision 1
    const rev1Result = await db.$transaction((tx) =>
      createQuestionRevision(tx, {
        questionId: question.id,
        authorId: author.id,
        changeSummary: 'Initial baseline revision',
      }),
    );
    expect(rev1Result.created).toBe(true);
    expect(rev1Result.revision.revisionNumber).toBe(1);
    expect(rev1Result.revision.contentHash).toHaveLength(64);

    // 2. Duplicate suppression: unchanged question creates no new revision
    const revDupResult = await db.$transaction((tx) =>
      createQuestionRevision(tx, {
        questionId: question.id,
        authorId: author.id,
        changeSummary: 'Redundant attempt',
      }),
    );
    expect(revDupResult.created).toBe(false);
    expect(revDupResult.revision.id).toBe(rev1Result.revision.id);

    // Verify only 1 revision exists in PostgreSQL
    const revsCount1 = await db.questionRevision.count({ where: { questionId: question.id } });
    expect(revsCount1).toBe(1);

    // 3. Update question stem in database
    await db.question.update({
      where: { id: question.id },
      data: { stemMd: 'Updated clinical stem with acute symptoms' },
    });

    // 4. Create Revision 2: content changed, new revision created
    const rev2Result = await db.$transaction((tx) =>
      createQuestionRevision(tx, {
        questionId: question.id,
        authorId: author.id,
        changeSummary: 'Clinical update to stem',
      }),
    );
    expect(rev2Result.created).toBe(true);
    expect(rev2Result.revision.revisionNumber).toBe(2);
    expect(rev2Result.revision.contentHash).not.toBe(rev1Result.revision.contentHash);

    // 5. 3-Pillar Review Gating on Revision 2 (distinct reviewers for each pillar)
    await db.$transaction((tx) =>
      recordQuestionReview(tx, {
        revisionId: rev2Result.revision.id,
        reviewerId: reviewerEditorial.id,
        reviewKind: 'EDITORIAL',
        decision: 'APPROVED',
      }),
    );

    // Incomplete review evaluation: missing CLINICAL and RIGHTS
    const reviewsPartial = await db.questionReview.findMany({
      where: { revisionId: rev2Result.revision.id },
    });
    const evalPartial = isRevisionFullyApproved(reviewsPartial);
    expect(evalPartial.approved).toBe(false);
    expect(evalPartial.missingKinds).toEqual(['CLINICAL', 'RIGHTS']);

    // Add CLINICAL approval
    await db.$transaction((tx) =>
      recordQuestionReview(tx, {
        revisionId: rev2Result.revision.id,
        reviewerId: reviewerClinical.id,
        reviewKind: 'CLINICAL',
        decision: 'APPROVED',
      }),
    );

    // Add RIGHTS approval
    await db.$transaction((tx) =>
      recordQuestionReview(tx, {
        revisionId: rev2Result.revision.id,
        reviewerId: reviewerRights.id,
        reviewKind: 'RIGHTS',
        decision: 'APPROVED',
      }),
    );

    // Fully approved evaluation
    const reviewsComplete = await db.questionReview.findMany({
      where: { revisionId: rev2Result.revision.id },
    });
    const evalComplete = isRevisionFullyApproved(reviewsComplete);
    expect(evalComplete.approved).toBe(true);
    expect(evalComplete.missingKinds).toHaveLength(0);

    // 6. Terminal Revocation: record a REVOKED review
    await db.$transaction((tx) =>
      recordQuestionReview(tx, {
        revisionId: rev2Result.revision.id,
        reviewerId: reviewerClinical.id,
        reviewKind: 'CLINICAL',
        decision: 'REVOKED',
        comments: 'Critical diagnostic inaccuracy discovered',
      }),
    );

    const reviewsRevoked = await db.questionReview.findMany({
      where: { revisionId: rev2Result.revision.id },
    });
    const evalRevoked = isRevisionFullyApproved(reviewsRevoked);
    expect(evalRevoked.approved).toBe(false);
    expect(evalRevoked.missingKinds).toContain('CLINICAL');
  });

  it('records SESSION_START event and persists sequence on openSession, without duplicates on reopen', async () => {
    const user = await createTestUser();
    const question = await createTestQuestion('open_test');
    const session = await createTestSession(user.id, question.id);

    // Initial session has no sessionStartEventSeq
    expect(session.sessionStartEventSeq).toBeNull();
    expect(session.state).toBe('CREATED');

    // 1. First open: transitions to IN_PROGRESS and records SESSION_START event
    await openSession(user.id, session.id);

    const openedSession = await db.testSession.findUniqueOrThrow({ where: { id: session.id } });
    expect(openedSession.state).toBe('IN_PROGRESS');
    expect(openedSession.sessionStartEventSeq).not.toBeNull();
    const startSeq = openedSession.sessionStartEventSeq!;
    expect(typeof startSeq).toBe('bigint');

    // Exactly one SESSION_START event recorded in the user's event ledger
    const startEvents = await db.practiceEvent.findMany({
      where: { userId: user.id, sessionId: session.id, eventType: 'SESSION_START' },
    });
    expect(startEvents).toHaveLength(1);
    expect(startEvents[0]!.eventSeq).toBe(startSeq);
    expect(startEvents[0]!.payload).toMatchObject({ mode: 'TUTOR', total: 1 });

    // 2. Reopening an already-started session does not create duplicate events
    await openSession(user.id, session.id);

    const reopenedSession = await db.testSession.findUniqueOrThrow({ where: { id: session.id } });
    expect(reopenedSession.sessionStartEventSeq).toBe(startSeq);

    const startEventsAfterReopen = await db.practiceEvent.findMany({
      where: { userId: user.id, sessionId: session.id, eventType: 'SESSION_START' },
    });
    expect(startEventsAfterReopen).toHaveLength(1);
  });

  it('records SESSION_SUSPEND and SESSION_RESUME events during pause and resume lifecycle', async () => {
    const user = await createTestUser();
    const question = await createTestQuestion('pause_resume_test');
    const session = await createTestSession(user.id, question.id);

    // 1. Open session -> SESSION_START (eventSeq 1)
    await openSession(user.id, session.id);
    const startEvent = await db.practiceEvent.findFirstOrThrow({
      where: { userId: user.id, sessionId: session.id, eventType: 'SESSION_START' },
    });
    expect(startEvent.eventSeq).toBe(1n);

    // 2. Pause session -> SESSION_SUSPEND (eventSeq 2)
    await pauseSession(user.id, session.id);
    const pausedSession = await db.testSession.findUniqueOrThrow({ where: { id: session.id } });
    expect(pausedSession.state).toBe('PAUSED');

    const suspendEvent = await db.practiceEvent.findFirstOrThrow({
      where: { userId: user.id, sessionId: session.id, eventType: 'SESSION_SUSPEND' },
    });
    expect(suspendEvent.eventSeq).toBe(2n);
    expect(suspendEvent.payload).toBeDefined();

    // Redundant pause is idempotent and does not create an additional event
    await pauseSession(user.id, session.id);
    const suspendCount = await db.practiceEvent.count({
      where: { userId: user.id, sessionId: session.id, eventType: 'SESSION_SUSPEND' },
    });
    expect(suspendCount).toBe(1);

    // 3. Resume session via openSession -> SESSION_RESUME (eventSeq 3)
    await openSession(user.id, session.id);
    const resumedSession = await db.testSession.findUniqueOrThrow({ where: { id: session.id } });
    expect(resumedSession.state).toBe('IN_PROGRESS');

    const resumeEvent = await db.practiceEvent.findFirstOrThrow({
      where: { userId: user.id, sessionId: session.id, eventType: 'SESSION_RESUME' },
    });
    expect(resumeEvent.eventSeq).toBe(3n);
    expect(resumeEvent.payload).toBeDefined();

    // 4. Submit item -> ATTEMPT_SUBMISSION (eventSeq 4)
    const opt = question.options[0]!;
    await answer(user.id, session.id, 0, [opt.id]);
    await submitItem(user.id, session.id, 0);

    const attemptEvent = await db.practiceEvent.findFirstOrThrow({
      where: { userId: user.id, sessionId: session.id, eventType: 'ATTEMPT_SUBMISSION' },
    });
    expect(attemptEvent.eventSeq).toBe(4n);

    // All events are ordered and contiguous
    const allEvents = await db.practiceEvent.findMany({
      where: { userId: user.id, sessionId: session.id },
      orderBy: { eventSeq: 'asc' },
    });
    expect(allEvents.map((e) => e.eventType)).toEqual([
      'SESSION_START',
      'SESSION_SUSPEND',
      'SESSION_RESUME',
      'ATTEMPT_SUBMISSION',
    ]);
  });

  it('legacy in-progress session with missing sequence gets exactly one synthetic start event', async () => {
    const user = await createTestUser();
    const question = await createTestQuestion('legacy_backfill');
    const session = await createTestSession(user.id, question.id);

    // Simulate legacy in-progress session (started before deployment) with state IN_PROGRESS and null sessionStartEventSeq
    await db.testSession.update({
      where: { id: session.id },
      data: { state: 'IN_PROGRESS', sessionStartEventSeq: null },
    });

    const optB = question.options.find((o) => o.position === 1)!;
    await answer(user.id, session.id, 0, [optB.id]);

    // Submitting item triggers lockItem -> ensureSessionStartSeq -> synthetic backfill
    await submitItem(user.id, session.id, 0);

    const updatedSession = await db.testSession.findUniqueOrThrow({ where: { id: session.id } });
    expect(updatedSession.sessionStartEventSeq).not.toBeNull();

    // Verify the synthetic start event
    const events = await db.practiceEvent.findMany({
      where: { userId: user.id, sessionId: session.id, eventType: 'SESSION_START' },
    });
    expect(events).toHaveLength(1);
    expect(events[0]!.payload).toMatchObject({
      synthetic: true,
      reason: 'legacy_in_progress_backfill',
    });

    // Verify the attempt recorded references this exact start sequence
    const attempt = await db.practiceAttempt.findFirstOrThrow({
      where: { userId: user.id, sessionId: session.id },
    });
    expect(attempt.sessionStartEventSeq).toBe(updatedSession.sessionStartEventSeq);
  });

  it('faithfully records single-select, multi-select, and omitted answer snapshots inside lockItem', async () => {
    const user = await createTestUser();

    // 1. Single-select question
    const qSingle = await createTestQuestion('snap_single');
    const optB = qSingle.options.find((o) => o.position === 1)!;
    const sessSingle = await createTestSession(user.id, qSingle.id);
    await openSession(user.id, sessSingle.id);
    await answer(user.id, sessSingle.id, 0, [optB.id]);
    await submitItem(user.id, sessSingle.id, 0);

    const singleAttempt = await db.practiceAttempt.findFirstOrThrow({
      where: { userId: user.id, sessionId: sessSingle.id },
    });
    expect(singleAttempt.selectedOptionId).toBe(optB.id);
    expect(singleAttempt.selectedOptionIdentifier).toBe('B');
    expect(singleAttempt.selectedOptionTextSnapshot).toBe(optB.text);
    expect(singleAttempt.isCorrect).toBe(true);
    expect(singleAttempt.idempotencyKey).toBe(`session:${sessSingle.id}:item:${sessSingle.items[0]!.id}`);

    // Verify legacy Response row was created in the same transaction
    const respSingle = await db.response.findUnique({
      where: { userId_questionId: { userId: user.id, questionId: qSingle.id } },
    });
    expect(respSingle).not.toBeNull();
    expect(respSingle!.isCorrect).toBe(true);
    expect(respSingle!.omitted).toBe(false);

    // 2. Multi-select question
    const qMulti = await createTestQuestion(
      'snap_multi',
      'Multi-select stem',
      'MULTIPLE',
      [
        { position: 0, text: 'First Choice', isCorrect: true },
        { position: 1, text: 'Second Choice', isCorrect: false },
        { position: 2, text: 'Third Choice', isCorrect: true },
      ],
    );
    const opt0 = qMulti.options.find((o) => o.position === 0)!;
    const opt2 = qMulti.options.find((o) => o.position === 2)!;
    const sessMulti = await createTestSession(user.id, qMulti.id);
    await openSession(user.id, sessMulti.id);
    await answer(user.id, sessMulti.id, 0, [opt0.id, opt2.id]);
    await submitItem(user.id, sessMulti.id, 0);

    const multiAttempt = await db.practiceAttempt.findFirstOrThrow({
      where: { userId: user.id, sessionId: sessMulti.id },
    });
    expect(multiAttempt.selectedOptionId).toBeNull();
    expect(multiAttempt.selectedOptionIdentifier).toBe('A, C');
    expect(multiAttempt.selectedOptionTextSnapshot).toBe(
      JSON.stringify([
        { identifier: 'A', text: 'First Choice' },
        { identifier: 'C', text: 'Third Choice' },
      ]),
    );
    expect(multiAttempt.isCorrect).toBe(true);

    // 3. Omitted answer in timed session submission
    const qOmit = await createTestQuestion('snap_omit');
    const sessOmit = await createTestSession(user.id, qOmit.id, 'TIMED');
    await openSession(user.id, sessOmit.id);
    // Submit timed session without selecting any answer
    await submitSession(user.id, sessOmit.id);

    const omitAttempt = await db.practiceAttempt.findFirstOrThrow({
      where: { userId: user.id, sessionId: sessOmit.id },
    });
    expect(omitAttempt.selectedOptionId).toBeNull();
    expect(omitAttempt.selectedOptionIdentifier).toBe('OMITTED');
    expect(omitAttempt.selectedOptionTextSnapshot).toBe('(Omitted)');
    expect(omitAttempt.isCorrect).toBe(false);

    // Verify legacy Response row for omitted
    const respOmit = await db.response.findUnique({
      where: { userId_questionId: { userId: user.id, questionId: qOmit.id } },
    });
    expect(respOmit).not.toBeNull();
    expect(respOmit!.omitted).toBe(true);
    expect(respOmit!.isCorrect).toBe(false);
  });

  it('enforces deterministic idempotency across repeated submissions and rejects material conflicts', async () => {
    const user = await createTestUser();
    const question = await createTestQuestion('idempotent_test');
    const session = await createTestSession(user.id, question.id);
    await openSession(user.id, session.id);

    const optA = question.options.find((o) => o.position === 0)!;
    await answer(user.id, session.id, 0, [optA.id]);
    await submitItem(user.id, session.id, 0);

    const attemptsBefore = await db.practiceAttempt.findMany({
      where: { userId: user.id, sessionId: session.id },
    });
    expect(attemptsBefore).toHaveLength(1);
    const existing = attemptsBefore[0]!;

    // Repeated submitItem call is an idempotent no-op (item is already locked)
    await submitItem(user.id, session.id, 0);
    const attemptsAfter = await db.practiceAttempt.findMany({
      where: { userId: user.id, sessionId: session.id },
    });
    expect(attemptsAfter).toHaveLength(1);

    // Calling recordAttemptSubmission directly with the exact same material parameters recovers existing attempt
    const replay = await recordAttemptSubmission(db, {
      userId: user.id,
      idempotencyKey: existing.idempotencyKey,
      sessionId: session.id,
      sessionItemId: session.items[0]!.id,
      questionId: question.id,
      sessionStartEventSeq: existing.sessionStartEventSeq,
      selectedOptionId: existing.selectedOptionId,
      selectedOptionIdentifier: existing.selectedOptionIdentifier,
      selectedOptionTextSnapshot: existing.selectedOptionTextSnapshot,
      isCorrect: existing.isCorrect,
      secondsSpent: existing.secondsSpent,
      clientSubmittedAt: existing.clientSubmittedAt,
    });
    expect(replay.created).toBe(false);
    expect(replay.attempt.id).toBe(existing.id);

    // Calling recordAttemptSubmission with identical key but conflicting material field (e.g. isCorrect flipped) throws CONFLICT
    await expect(
      recordAttemptSubmission(db, {
        userId: user.id,
        idempotencyKey: existing.idempotencyKey,
        sessionId: session.id,
        sessionItemId: session.items[0]!.id,
        questionId: question.id,
        sessionStartEventSeq: existing.sessionStartEventSeq,
        selectedOptionId: existing.selectedOptionId,
        selectedOptionIdentifier: existing.selectedOptionIdentifier,
        selectedOptionTextSnapshot: existing.selectedOptionTextSnapshot,
        isCorrect: !existing.isCorrect,
        secondsSpent: existing.secondsSpent,
        clientSubmittedAt: existing.clientSubmittedAt,
      }),
    ).rejects.toThrow('Idempotency key reused with mismatched submission payload');
  });

  it('selects latest fully approved revision or preserves null when unversioned', async () => {
    const user = await createTestUser();
    const editor = await createTestUser('EDITOR');
    const reviewerEditorial = await createTestUser('ADMIN');
    const reviewerClinical = await createTestUser('ADMIN');
    const reviewerRights = await createTestUser('ADMIN');

    // 1. Question without revisions -> attempt records revisionId: null
    const qUnversioned = await createTestQuestion('rev_null');
    const sessUnversioned = await createTestSession(user.id, qUnversioned.id);
    await openSession(user.id, sessUnversioned.id);
    const opt0 = qUnversioned.options[0]!;
    await answer(user.id, sessUnversioned.id, 0, [opt0.id]);
    await submitItem(user.id, sessUnversioned.id, 0);

    const attemptUnversioned = await db.practiceAttempt.findFirstOrThrow({
      where: { userId: user.id, sessionId: sessUnversioned.id },
    });
    expect(attemptUnversioned.revisionId).toBeNull();

    // 2. Question with an approved revision -> attempt records that revisionId
    const qVersioned = await createTestQuestion('rev_approved');
    const rev = await db.$transaction((tx) =>
      createQuestionRevision(tx, {
        questionId: qVersioned.id,
        authorId: editor.id,
        changeSummary: 'Reviewed v1 content',
      }),
    );

    // Record all 3 approval pillars
    await db.$transaction((tx) =>
      recordQuestionReview(tx, { revisionId: rev.revision.id, reviewerId: reviewerEditorial.id, reviewKind: 'EDITORIAL', decision: 'APPROVED' }),
    );
    await db.$transaction((tx) =>
      recordQuestionReview(tx, { revisionId: rev.revision.id, reviewerId: reviewerClinical.id, reviewKind: 'CLINICAL', decision: 'APPROVED' }),
    );
    await db.$transaction((tx) =>
      recordQuestionReview(tx, { revisionId: rev.revision.id, reviewerId: reviewerRights.id, reviewKind: 'RIGHTS', decision: 'APPROVED' }),
    );

    const sessVersioned = await createTestSession(user.id, qVersioned.id);
    await openSession(user.id, sessVersioned.id);
    await answer(user.id, sessVersioned.id, 0, [qVersioned.options[0]!.id]);
    await submitItem(user.id, sessVersioned.id, 0);

    const attemptVersioned = await db.practiceAttempt.findFirstOrThrow({
      where: { userId: user.id, sessionId: sessVersioned.id },
    });
    expect(attemptVersioned.revisionId).toBe(rev.revision.id);
  });

  it('resetPractice with scope: ALL transitions all active pools to unused while leaving legacy Response rows intact', async () => {
    const user = await createTestUser();
    const q1 = await createTestQuestion('reset_all_1');
    const q2 = await createTestQuestion('reset_all_2');
    const q3 = await createTestQuestion('reset_all_3');

    // 1. Answer q1 correctly
    const sess1 = await createTestSession(user.id, q1.id);
    await openSession(user.id, sess1.id);
    const optB1 = q1.options.find((o) => o.position === 1)!;
    await answer(user.id, sess1.id, 0, [optB1.id]);
    await submitItem(user.id, sess1.id, 0);

    // 2. Answer q2 incorrectly
    const sess2 = await createTestSession(user.id, q2.id);
    await openSession(user.id, sess2.id);
    const optA2 = q2.options.find((o) => o.position === 0)!;
    await answer(user.id, sess2.id, 0, [optA2.id]);
    await submitItem(user.id, sess2.id, 0);

    // 3. Omit q3 in timed session
    const sess3 = await createTestSession(user.id, q3.id, 'TIMED');
    await openSession(user.id, sess3.id);
    await submitSession(user.id, sess3.id);

    // Pre-reset pool checks
    const baseFilter: Filters = { examIds: [], subjectIds: [], systemIds: [], topicIds: [], difficulty: [], pool: 'all', q: '' };

    const correctWhere = await questionWhere(user.id, { ...baseFilter, pool: 'correct' });
    const correctList = await db.question.findMany({ where: { AND: [correctWhere, { id: { in: [q1.id, q2.id, q3.id] } }] } });
    expect(correctList.map((q) => q.id)).toEqual([q1.id]);

    const incorrectWhere = await questionWhere(user.id, { ...baseFilter, pool: 'incorrect' });
    const incorrectList = await db.question.findMany({ where: { AND: [incorrectWhere, { id: { in: [q1.id, q2.id, q3.id] } }] } });
    expect(incorrectList.map((q) => q.id)).toEqual([q2.id]);

    const omittedWhere = await questionWhere(user.id, { ...baseFilter, pool: 'omitted' });
    const omittedList = await db.question.findMany({ where: { AND: [omittedWhere, { id: { in: [q1.id, q2.id, q3.id] } }] } });
    expect(omittedList.map((q) => q.id)).toEqual([q3.id]);

    const unusedWhereBefore = await questionWhere(user.id, { ...baseFilter, pool: 'unused' });
    const unusedListBefore = await db.question.findMany({ where: { AND: [unusedWhereBefore, { id: { in: [q1.id, q2.id, q3.id] } }] } });
    expect(unusedListBefore).toHaveLength(0);

    // Verify exactly 3 legacy responses exist before reset
    const responsesBefore = await db.response.findMany({ where: { userId: user.id } });
    expect(responsesBefore).toHaveLength(3);

    // Execute Practice Reset with scope: ALL
    const resetResult = await resetPractice(user.id, { scope: 'ALL' });
    expect(resetResult.reset.scope).toBe('ALL');
    expect(resetResult.resetEventSeq).toBeGreaterThan(0n);

    // Verify PracticeReset record created in PostgreSQL
    const resetRow = await db.practiceReset.findFirstOrThrow({ where: { userId: user.id } });
    expect(resetRow.scope).toBe('ALL');

    // CRITICAL: Verify Response rows are completely untouched (zero deletions or mutations)
    const responsesAfter = await db.response.findMany({ where: { userId: user.id } });
    expect(responsesAfter).toHaveLength(3);
    expect(responsesAfter.map((r) => r.questionId).sort()).toEqual([q1.id, q2.id, q3.id].sort());

    // Post-reset active pool checks: all 3 questions now match 'unused' pool
    const unusedWhereAfter = await questionWhere(user.id, { ...baseFilter, pool: 'unused' });
    const unusedListAfter = await db.question.findMany({ where: { AND: [unusedWhereAfter, { id: { in: [q1.id, q2.id, q3.id] } }] } });
    expect(unusedListAfter.map((q) => q.id).sort()).toEqual([q1.id, q2.id, q3.id].sort());

    const correctWhereAfter = await questionWhere(user.id, { ...baseFilter, pool: 'correct' });
    const correctListAfter = await db.question.findMany({ where: { AND: [correctWhereAfter, { id: { in: [q1.id, q2.id, q3.id] } }] } });
    expect(correctListAfter).toHaveLength(0);

    const incorrectWhereAfter = await questionWhere(user.id, { ...baseFilter, pool: 'incorrect' });
    const incorrectListAfter = await db.question.findMany({ where: { AND: [incorrectWhereAfter, { id: { in: [q1.id, q2.id, q3.id] } }] } });
    expect(incorrectListAfter).toHaveLength(0);

    // User practices q2 again in a new session post-reset and gets it correct
    const sessPost = await createTestSession(user.id, q2.id);
    await openSession(user.id, sessPost.id);
    const optB2 = q2.options.find((o) => o.position === 1)!;
    await answer(user.id, sessPost.id, 0, [optB2.id]);
    await submitItem(user.id, sessPost.id, 0);

    // Q2 now transitions to 'correct' pool while q1 and q3 remain 'unused'
    const correctWherePost = await questionWhere(user.id, { ...baseFilter, pool: 'correct' });
    const correctListPost = await db.question.findMany({ where: { AND: [correctWherePost, { id: { in: [q1.id, q2.id, q3.id] } }] } });
    expect(correctListPost.map((q) => q.id)).toEqual([q2.id]);

    const unusedWherePost = await questionWhere(user.id, { ...baseFilter, pool: 'unused' });
    const unusedListPost = await db.question.findMany({ where: { AND: [unusedWherePost, { id: { in: [q1.id, q2.id, q3.id] } }] } });
    expect(unusedListPost.map((q) => q.id).sort()).toEqual([q1.id, q3.id].sort());

    // Historical attempts are retained: q2 has 2 attempts
    const q2Attempts = await db.practiceAttempt.findMany({ where: { userId: user.id, questionId: q2.id } });
    expect(q2Attempts).toHaveLength(2);
  });

  it('resetPractice with scope: INCORRECT_ONLY watermarks incorrect and omitted questions, preserving correct pool and legacy Response', async () => {
    const user = await createTestUser();
    const qCorrect = await createTestQuestion('inc_reset_corr');
    const qIncorrect = await createTestQuestion('inc_reset_inc');
    const qOmitted = await createTestQuestion('inc_reset_omit');

    // 1. Correct attempt
    const sessCorr = await createTestSession(user.id, qCorrect.id);
    await openSession(user.id, sessCorr.id);
    const optB = qCorrect.options.find((o) => o.position === 1)!;
    await answer(user.id, sessCorr.id, 0, [optB.id]);
    await submitItem(user.id, sessCorr.id, 0);

    // 2. Incorrect attempt
    const sessInc = await createTestSession(user.id, qIncorrect.id);
    await openSession(user.id, sessInc.id);
    const optA = qIncorrect.options.find((o) => o.position === 0)!;
    await answer(user.id, sessInc.id, 0, [optA.id]);
    await submitItem(user.id, sessInc.id, 0);

    // 3. Omitted attempt
    const sessOmit = await createTestSession(user.id, qOmitted.id, 'TIMED');
    await openSession(user.id, sessOmit.id);
    await submitSession(user.id, sessOmit.id);

    // Execute INCORRECT_ONLY reset
    const resetResult = await resetPractice(user.id, { scope: 'INCORRECT_ONLY' });
    expect(resetResult.reset.scope).toBe('INCORRECT_ONLY');
    expect(resetResult.reset.affectedQuestionIds.sort()).toEqual([qIncorrect.id, qOmitted.id].sort());

    const baseFilter: Filters = { examIds: [], subjectIds: [], systemIds: [], topicIds: [], difficulty: [], pool: 'all', q: '' };

    // Active pool verification:
    // qCorrect stays in correct pool!
    const correctWhere = await questionWhere(user.id, { ...baseFilter, pool: 'correct' });
    const correctList = await db.question.findMany({ where: { AND: [correctWhere, { id: { in: [qCorrect.id, qIncorrect.id, qOmitted.id] } }] } });
    expect(correctList.map((q) => q.id)).toEqual([qCorrect.id]);

    // qIncorrect and qOmitted are now unused!
    const unusedWhere = await questionWhere(user.id, { ...baseFilter, pool: 'unused' });
    const unusedList = await db.question.findMany({ where: { AND: [unusedWhere, { id: { in: [qCorrect.id, qIncorrect.id, qOmitted.id] } }] } });
    expect(unusedList.map((q) => q.id).sort()).toEqual([qIncorrect.id, qOmitted.id].sort());

    // Legacy responses all still intact
    const responses = await db.response.findMany({ where: { userId: user.id } });
    expect(responses).toHaveLength(3);
  });

  it('resetPractice with scope: MARKED_ONLY resets only bookmarked questions, leaving bookmarks intact', async () => {
    const user = await createTestUser();
    const qMarked = await createTestQuestion('mark_reset_mk');
    const qUnmarked = await createTestQuestion('mark_reset_un');

    // Both answered incorrectly
    const sess1 = await createTestSession(user.id, qMarked.id);
    await openSession(user.id, sess1.id);
    await answer(user.id, sess1.id, 0, [qMarked.options[0]!.id]);
    await submitItem(user.id, sess1.id, 0);

    const sess2 = await createTestSession(user.id, qUnmarked.id);
    await openSession(user.id, sess2.id);
    await answer(user.id, sess2.id, 0, [qUnmarked.options[0]!.id]);
    await submitItem(user.id, sess2.id, 0);

    // Bookmark qMarked
    await db.bookmark.create({
      data: { userId: user.id, questionId: qMarked.id },
    });

    // Execute MARKED_ONLY reset
    const resetResult = await resetPractice(user.id, { scope: 'MARKED_ONLY' });
    expect(resetResult.reset.scope).toBe('MARKED_ONLY');
    expect(resetResult.reset.affectedQuestionIds).toEqual([qMarked.id]);

    const baseFilter: Filters = { examIds: [], subjectIds: [], systemIds: [], topicIds: [], difficulty: [], pool: 'all', q: '' };

    // qMarked is now unused for practice
    const unusedWhere = await questionWhere(user.id, { ...baseFilter, pool: 'unused' });
    const unusedList = await db.question.findMany({ where: { AND: [unusedWhere, { id: { in: [qMarked.id, qUnmarked.id] } }] } });
    expect(unusedList.map((q) => q.id)).toEqual([qMarked.id]);

    // qUnmarked remains in incorrect pool
    const incorrectWhere = await questionWhere(user.id, { ...baseFilter, pool: 'incorrect' });
    const incorrectList = await db.question.findMany({ where: { AND: [incorrectWhere, { id: { in: [qMarked.id, qUnmarked.id] } }] } });
    expect(incorrectList.map((q) => q.id)).toEqual([qUnmarked.id]);

    // CRITICAL: Bookmark for qMarked remains intact!
    const bookmark = await db.bookmark.findUnique({
      where: { userId_questionId: { userId: user.id, questionId: qMarked.id } },
    });
    expect(bookmark).not.toBeNull();
  });

  it('resetPractice with scope: CUSTOM respects taxonomy filters and preserves legacy Response', async () => {
    const user = await createTestUser();
    const subjects = await db.subject.findMany({ take: 2, orderBy: { name: 'asc' } });
    expect(subjects.length).toBeGreaterThanOrEqual(2);
    const subA = subjects[0]!;
    const subB = subjects[1]!;

    const qSubA = await createTestQuestion('custom_sub_a', 'Stem A', 'SINGLE', undefined, { subjectId: subA.id });
    const qSubB = await createTestQuestion('custom_sub_b', 'Stem B', 'SINGLE', undefined, { subjectId: subB.id });

    // Answer both incorrectly
    const sessA = await createTestSession(user.id, qSubA.id);
    await openSession(user.id, sessA.id);
    await answer(user.id, sessA.id, 0, [qSubA.options[0]!.id]);
    await submitItem(user.id, sessA.id, 0);

    const sessB = await createTestSession(user.id, qSubB.id);
    await openSession(user.id, sessB.id);
    await answer(user.id, sessB.id, 0, [qSubB.options[0]!.id]);
    await submitItem(user.id, sessB.id, 0);

    // Verify both are initially incorrect
    const baseFilter: Filters = { examIds: [], subjectIds: [], systemIds: [], topicIds: [], difficulty: [], pool: 'all', q: '' };
    const incWhere = await questionWhere(user.id, { ...baseFilter, pool: 'incorrect' });
    const incBefore = await db.question.findMany({ where: { AND: [incWhere, { id: { in: [qSubA.id, qSubB.id] } }] } });
    expect(incBefore.map((q) => q.id).sort()).toEqual([qSubA.id, qSubB.id].sort());

    // Execute CUSTOM reset targeting only Subject A
    const resetResult = await resetPractice(user.id, {
      scope: 'CUSTOM',
      subjectIds: [subA.id],
    });
    expect(resetResult.reset.scope).toBe('CUSTOM');
    expect(resetResult.reset.affectedQuestionIds).toEqual([qSubA.id]);

    // Pool check: qSubA is unused, qSubB remains in incorrect pool
    const unusedWhere = await questionWhere(user.id, { ...baseFilter, pool: 'unused' });
    const unusedList = await db.question.findMany({ where: { AND: [unusedWhere, { id: { in: [qSubA.id, qSubB.id] } }] } });
    expect(unusedList.map((q) => q.id)).toEqual([qSubA.id]);

    const incAfterWhere = await questionWhere(user.id, { ...baseFilter, pool: 'incorrect' });
    const incAfter = await db.question.findMany({ where: { AND: [incAfterWhere, { id: { in: [qSubA.id, qSubB.id] } }] } });
    expect(incAfter.map((q) => q.id)).toEqual([qSubB.id]);

    // Response records remain intact
    const responses = await db.response.findMany({ where: { userId: user.id } });
    expect(responses).toHaveLength(2);
  });

  it('resolves mixed legacy Response and PracticeAttempt histories per-question', async () => {
    const user = await createTestUser();
    const qLegCorr = await createTestQuestion('mix_leg_c');
    const qLegInc = await createTestQuestion('mix_leg_i');
    const qProvCorr = await createTestQuestion('mix_prv_c');
    const qProvInc = await createTestQuestion('mix_prv_i');

    // Create legacy Response rows directly without PracticeAttempt
    await db.response.createMany({
      data: [
        { userId: user.id, questionId: qLegCorr.id, isCorrect: true, omitted: false, timeMs: 30000, sessionId: `${runId}_leg_sess` },
        { userId: user.id, questionId: qLegInc.id, isCorrect: false, omitted: false, timeMs: 45000, sessionId: `${runId}_leg_sess` },
      ],
    });

    // Create provenance attempts via sessions
    const sessCorr = await createTestSession(user.id, qProvCorr.id);
    await openSession(user.id, sessCorr.id);
    await answer(user.id, sessCorr.id, 0, [qProvCorr.options.find((o) => o.position === 1)!.id]);
    await submitItem(user.id, sessCorr.id, 0);

    const sessInc = await createTestSession(user.id, qProvInc.id);
    await openSession(user.id, sessInc.id);
    await answer(user.id, sessInc.id, 0, [qProvInc.options.find((o) => o.position === 0)!.id]);
    await submitItem(user.id, sessInc.id, 0);

    const allIds = [qLegCorr.id, qLegInc.id, qProvCorr.id, qProvInc.id];
    const baseFilter: Filters = { examIds: [], subjectIds: [], systemIds: [], topicIds: [], difficulty: [], pool: 'all', q: '' };

    // 'correct' pool contains both legacy correct and provenance correct
    const correctWhere = await questionWhere(user.id, { ...baseFilter, pool: 'correct' });
    const correctList = await db.question.findMany({ where: { AND: [correctWhere, { id: { in: allIds } }] } });
    expect(correctList.map((q) => q.id).sort()).toEqual([qLegCorr.id, qProvCorr.id].sort());

    // 'incorrect' pool contains both legacy incorrect and provenance incorrect
    const incorrectWhere = await questionWhere(user.id, { ...baseFilter, pool: 'incorrect' });
    const incorrectList = await db.question.findMany({ where: { AND: [incorrectWhere, { id: { in: allIds } }] } });
    expect(incorrectList.map((q) => q.id).sort()).toEqual([qLegInc.id, qProvInc.id].sort());

    // 'unused' pool contains none of them
    const unusedWhere = await questionWhere(user.id, { ...baseFilter, pool: 'unused' });
    const unusedList = await db.question.findMany({ where: { AND: [unusedWhere, { id: { in: allIds } }] } });
    expect(unusedList).toHaveLength(0);
  });

  it('resetPractice with scope: ALL classifies legacy-only questions as unused while keeping Response rows intact', async () => {
    const user = await createTestUser();
    const q1 = await createTestQuestion('leg_all_1');
    const q2 = await createTestQuestion('leg_all_2');

    // Only legacy responses exist
    await db.response.createMany({
      data: [
        { userId: user.id, questionId: q1.id, isCorrect: true, omitted: false, timeMs: 20000, sessionId: `${runId}_leg_sess` },
        { userId: user.id, questionId: q2.id, isCorrect: false, omitted: false, timeMs: 25000, sessionId: `${runId}_leg_sess` },
      ],
    });

    const allIds = [q1.id, q2.id];
    const baseFilter: Filters = { examIds: [], subjectIds: [], systemIds: [], topicIds: [], difficulty: [], pool: 'all', q: '' };

    // Before reset
    const corrBefore = await questionWhere(user.id, { ...baseFilter, pool: 'correct' });
    expect((await db.question.findMany({ where: { AND: [corrBefore, { id: { in: allIds } }] } })).map((q) => q.id)).toEqual([q1.id]);

    // Execute ALL reset
    const resetResult = await resetPractice(user.id, { scope: 'ALL' });
    expect(resetResult.reset.scope).toBe('ALL');

    // After reset: both legacy questions are unused
    const unusedAfter = await questionWhere(user.id, { ...baseFilter, pool: 'unused' });
    const unusedList = await db.question.findMany({ where: { AND: [unusedAfter, { id: { in: allIds } }] } });
    expect(unusedList.map((q) => q.id).sort()).toEqual(allIds.sort());

    const corrAfter = await questionWhere(user.id, { ...baseFilter, pool: 'correct' });
    expect(await db.question.findMany({ where: { AND: [corrAfter, { id: { in: allIds } }] } })).toHaveLength(0);

    // Response records remain completely intact
    const responses = await db.response.findMany({ where: { userId: user.id } });
    expect(responses).toHaveLength(2);

    // Attempting q1 post-reset activates it in provenance
    const sessPost = await createTestSession(user.id, q1.id);
    await openSession(user.id, sessPost.id);
    await answer(user.id, sessPost.id, 0, [q1.options.find((o) => o.position === 1)!.id]);
    await submitItem(user.id, sessPost.id, 0);

    const corrPost = await questionWhere(user.id, { ...baseFilter, pool: 'correct' });
    expect((await db.question.findMany({ where: { AND: [corrPost, { id: { in: allIds } }] } })).map((q) => q.id)).toEqual([q1.id]);
  });

  it('partial reset watermarks explicitly selected legacy questions while leaving other legacy questions active', async () => {
    const user = await createTestUser();
    const qLegA = await createTestQuestion('part_leg_a');
    const qLegB = await createTestQuestion('part_leg_b');

    // Legacy responses for both
    await db.response.createMany({
      data: [
        { userId: user.id, questionId: qLegA.id, isCorrect: false, omitted: false, timeMs: 30000, sessionId: `${runId}_leg_sess` },
        { userId: user.id, questionId: qLegB.id, isCorrect: true, omitted: false, timeMs: 30000, sessionId: `${runId}_leg_sess` },
      ],
    });

    const allIds = [qLegA.id, qLegB.id];
    const baseFilter: Filters = { examIds: [], subjectIds: [], systemIds: [], topicIds: [], difficulty: [], pool: 'all', q: '' };

    // Reset INCORRECT_ONLY: qLegA is incorrect, qLegB is correct
    const resetResult = await resetPractice(user.id, { scope: 'INCORRECT_ONLY' });
    expect(resetResult.reset.affectedQuestionIds).toEqual([qLegA.id]);

    // qLegA becomes unused
    const unusedWhere = await questionWhere(user.id, { ...baseFilter, pool: 'unused' });
    const unusedList = await db.question.findMany({ where: { AND: [unusedWhere, { id: { in: allIds } }] } });
    expect(unusedList.map((q) => q.id)).toEqual([qLegA.id]);

    // qLegB retains its legacy correct classification!
    const corrWhere = await questionWhere(user.id, { ...baseFilter, pool: 'correct' });
    const corrList = await db.question.findMany({ where: { AND: [corrWhere, { id: { in: allIds } }] } });
    expect(corrList.map((q) => q.id)).toEqual([qLegB.id]);

    // Responses completely untouched
    const responses = await db.response.findMany({ where: { userId: user.id } });
    expect(responses).toHaveLength(2);
  });

  it('manages multiple sequential resets with distinct scopes without data loss', async () => {
    const user = await createTestUser();
    const q1 = await createTestQuestion('seq_rst_1');
    const q2 = await createTestQuestion('seq_rst_2');
    const q3 = await createTestQuestion('seq_rst_3');

    // Attempt all 3: q1 inc, q2 inc, q3 corr
    const s1 = await createTestSession(user.id, q1.id);
    await openSession(user.id, s1.id);
    await answer(user.id, s1.id, 0, [q1.options[0]!.id]);
    await submitItem(user.id, s1.id, 0);

    const s2 = await createTestSession(user.id, q2.id);
    await openSession(user.id, s2.id);
    await answer(user.id, s2.id, 0, [q2.options[0]!.id]);
    await submitItem(user.id, s2.id, 0);

    const s3 = await createTestSession(user.id, q3.id);
    await openSession(user.id, s3.id);
    await answer(user.id, s3.id, 0, [q3.options[1]!.id]);
    await submitItem(user.id, s3.id, 0);

    // Bookmark q1
    await db.bookmark.create({ data: { userId: user.id, questionId: q1.id } });

    const allIds = [q1.id, q2.id, q3.id];
    const baseFilter: Filters = { examIds: [], subjectIds: [], systemIds: [], topicIds: [], difficulty: [], pool: 'all', q: '' };

    // Reset 1: MARKED_ONLY -> q1 unused, q2 incorrect, q3 correct
    await resetPractice(user.id, { scope: 'MARKED_ONLY' });
    let un = await db.question.findMany({ where: { AND: [await questionWhere(user.id, { ...baseFilter, pool: 'unused' }), { id: { in: allIds } }] } });
    expect(un.map((q) => q.id)).toEqual([q1.id]);

    // Re-attempt q1 post-reset and get correct
    const s1b = await createTestSession(user.id, q1.id);
    await openSession(user.id, s1b.id);
    await answer(user.id, s1b.id, 0, [q1.options[1]!.id]);
    await submitItem(user.id, s1b.id, 0);

    let corr = await db.question.findMany({ where: { AND: [await questionWhere(user.id, { ...baseFilter, pool: 'correct' }), { id: { in: allIds } }] } });
    expect(corr.map((q) => q.id).sort()).toEqual([q1.id, q3.id].sort());

    // Reset 2: INCORRECT_ONLY -> q2 was incorrect, so q2 becomes unused; q1 and q3 stay correct
    await resetPractice(user.id, { scope: 'INCORRECT_ONLY' });
    un = await db.question.findMany({ where: { AND: [await questionWhere(user.id, { ...baseFilter, pool: 'unused' }), { id: { in: allIds } }] } });
    expect(un.map((q) => q.id)).toEqual([q2.id]);

    corr = await db.question.findMany({ where: { AND: [await questionWhere(user.id, { ...baseFilter, pool: 'correct' }), { id: { in: allIds } }] } });
    expect(corr.map((q) => q.id).sort()).toEqual([q1.id, q3.id].sort());

    // Reset 3: ALL -> all 3 unused
    await resetPractice(user.id, { scope: 'ALL' });
    un = await db.question.findMany({ where: { AND: [await questionWhere(user.id, { ...baseFilter, pool: 'unused' }), { id: { in: allIds } }] } });
    expect(un.map((q) => q.id).sort()).toEqual(allIds.sort());

    // Response records and Bookmark row remain completely intact
    const responses = await db.response.findMany({ where: { userId: user.id } });
    expect(responses).toHaveLength(3);
    const bm = await db.bookmark.findUnique({ where: { userId_questionId: { userId: user.id, questionId: q1.id } } });
    expect(bm).not.toBeNull();
  });

  it('safely serializes concurrent reset and attempt submission via row lock', async () => {
    const user = await createTestUser();
    const q1 = await createTestQuestion('conc_rst_att');

    // Seed an initial attempt
    const s1 = await createTestSession(user.id, q1.id);
    await openSession(user.id, s1.id);
    await answer(user.id, s1.id, 0, [q1.options[0]!.id]);
    await submitItem(user.id, s1.id, 0);

    const s2 = await createTestSession(user.id, q1.id);
    await openSession(user.id, s2.id);
    await answer(user.id, s2.id, 0, [q1.options[1]!.id]);

    // Launch reset and attempt concurrently
    const [resetRes, attemptRes] = await Promise.all([
      resetPractice(user.id, { scope: 'ALL' }),
      submitItem(user.id, s2.id, 0),
    ]);

    expect(resetRes.resetEventSeq).toBeGreaterThan(0n);

    // Verify both committed and sequence numbers are strictly ordered
    const state = await db.userPracticeState.findUniqueOrThrow({ where: { userId: user.id } });
    expect(state.lastEventSeq).toBeGreaterThanOrEqual(resetRes.resetEventSeq);

    // The attempt record exists and references valid sequences
    const postAttempts = await db.practiceAttempt.findMany({ where: { userId: user.id, questionId: q1.id } });
    expect(postAttempts.length).toBe(2);
  });

  it('supports session creation from newly reset unused pool', async () => {
    const user = await createTestUser();
    const q = await createTestQuestion('sess_create_rst');

    // 1. Answer question incorrectly
    const s1 = await createTestSession(user.id, q.id);
    await openSession(user.id, s1.id);
    await answer(user.id, s1.id, 0, [q.options[0]!.id]);
    await submitItem(user.id, s1.id, 0);

    // Verify q is initially in incorrect pool
    const baseFilter: Filters = { examIds: [], subjectIds: [], systemIds: [], topicIds: [], difficulty: [], pool: 'all', q: '' };
    const incWhere = await questionWhere(user.id, { ...baseFilter, pool: 'incorrect' });
    const incList = await db.question.findMany({ where: { AND: [incWhere, { id: q.id }] } });
    expect(incList).toHaveLength(1);

    // 2. Reset ALL
    const resetResult = await resetPractice(user.id, { scope: 'ALL' });
    expect(resetResult.reset.scope).toBe('ALL');

    // Verify q transitioned to unused pool
    const unusedWhere = await questionWhere(user.id, { ...baseFilter, pool: 'unused' });
    const unusedList = await db.question.findMany({ where: { AND: [unusedWhere, { id: q.id }] } });
    expect(unusedList).toHaveLength(1);

    // 3. Create session requesting 'unused' pool for this question
    const newSessionId = await createSession(user.id, {
      mode: 'TUTOR',
      count: 1,
      pool: 'unused',
      questionIds: [q.id],
      examIds: [],
      subjectIds: [],
      systemIds: [],
      topicIds: [],
      difficulty: [],
      q: '',
    });

    const newSession = await db.testSession.findUniqueOrThrow({
      where: { id: newSessionId },
      include: { items: true },
    });
    expect(newSession.items).toHaveLength(1);
    expect(newSession.items[0]!.questionId).toBe(q.id);
  });

  describe('Stage 4B.4 Question Revisions, 3-Pillar Review & Learner Delivery', () => {
    it('creates initial revision on createQuestion, increments on updateQuestion, and deduplicates identical saves', async () => {
      const editor = await createTestUser('EDITOR');
      const exam = await db.exam.findUniqueOrThrow({ where: { id: sharedExamId } });
      const subject = await db.subject.findUniqueOrThrow({ where: { id: sharedSubjectId } });
      const system = await db.system.findUniqueOrThrow({ where: { id: sharedSystemId } });

      const code = `qrev_${randomUUID().replace(/-/g, '').slice(0, 10)}`;
      const questionPayload = {
        code,
        exam: exam.name,
        subject: subject.name,
        system: system.name,
        type: 'SINGLE' as const,
        difficulty: 3,
        stem: 'Patient presents with severe episodic headache and palpitations.',
        options: [
          { text: 'Pheochromocytoma', correct: true, explanation: 'Classic triad presentation.' },
          { text: 'Essential hypertension', correct: false, explanation: 'Does not explain episodic paroxysms.' },
        ],
        explanation: 'Overall explanation for neuroendocrine hypertension.',
        objective: 'Diagnose pheochromocytoma.',
        keyPoints: ['Episodic headache', 'Catecholamine excess'],
        references: [],
        source: 'OpenPrep Editorial Integration',
        license: 'CC-BY-4.0',
      };

      // 1. Create question via admin service
      let qid = '';
      try {
        qid = await createQuestion({ id: editor.id, role: 'EDITOR' }, questionPayload);

      // Verify Revision 1 was minted automatically
      const rev1 = await db.questionRevision.findUnique({
        where: { questionId_revisionNumber: { questionId: qid, revisionNumber: 1 } },
        include: { reviews: true },
      });
      expect(rev1).not.toBeNull();
      expect(rev1!.revisionNumber).toBe(1);
      expect(rev1!.reviews).toHaveLength(0); // Starts unapproved

      // 2. Update with changed content -> Revision 2
      const updatedPayload = {
        ...questionPayload,
        stem: 'Patient presents with severe episodic headache, diaphoresis, and palpitations (classic triad).',
      };
      await updateQuestion({ id: editor.id, role: 'EDITOR' }, qid, updatedPayload);

      const rev2 = await db.questionRevision.findUnique({
        where: { questionId_revisionNumber: { questionId: qid, revisionNumber: 2 } },
      });
      expect(rev2).not.toBeNull();
      expect(rev2!.revisionNumber).toBe(2);
      expect(rev2!.contentHash).not.toBe(rev1!.contentHash);

      // 3. Save identical content -> duplicate suppressed, no Revision 3
      await updateQuestion({ id: editor.id, role: 'EDITOR' }, qid, updatedPayload);
      const revCount = await db.questionRevision.count({ where: { questionId: qid } });
      expect(revCount).toBe(2);
      } finally {
        if (qid) {
          await db.questionRevision.deleteMany({ where: { questionId: qid } });
          await db.option.deleteMany({ where: { questionId: qid } });
          await db.question.deleteMany({ where: { id: qid } });
        }
      }
    });

    it('enforces 3-pillar review workflow, terminal revocation, and publication gating', async () => {
      const editor = await createTestUser('EDITOR');
      const admin = await createTestUser('ADMIN');
      const q = await createTestQuestion('gating', 'Clinical stem for publication gate test');

      // 1. Mint initial revision
      const revRes = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          authorId: editor.id,
          changeSummary: 'Baseline for gating',
        }),
      );
      const revId = revRes.revision.id;

      // 2. Question is in REVIEW status, verify rights
      await db.question.update({
        where: { id: q.id },
        data: { status: 'REVIEW', rightsStatus: 'VERIFIED', rightsAllowDelivery: true },
      });

      // Attempt to publish without reviews -> FORBIDDEN
      await expect(
        setStatus({ id: admin.id, role: 'ADMIN' }, q.id, 'PUBLISHED'),
      ).rejects.toThrow(/missing or revoked: EDITORIAL, CLINICAL, RIGHTS/i);

      // 3. Record EDITORIAL approval
      await db.$transaction((tx) =>
        recordQuestionReview(tx, {
          revisionId: revId,
          reviewerId: editor.id,
          reviewKind: 'EDITORIAL',
          decision: 'APPROVED',
        }),
      );

      // Still missing CLINICAL and RIGHTS -> FORBIDDEN
      await expect(
        setStatus({ id: admin.id, role: 'ADMIN' }, q.id, 'PUBLISHED'),
      ).rejects.toThrow(/missing or revoked: CLINICAL, RIGHTS/i);

      // 4. Record CLINICAL approval
      await db.$transaction((tx) =>
        recordQuestionReview(tx, {
          revisionId: revId,
          reviewerId: admin.id,
          reviewKind: 'CLINICAL',
          decision: 'APPROVED',
          reviewerCredentials: 'MD Internal Medicine',
        }),
      );

      // Still missing RIGHTS -> FORBIDDEN
      await expect(
        setStatus({ id: admin.id, role: 'ADMIN' }, q.id, 'PUBLISHED'),
      ).rejects.toThrow(/missing or revoked: RIGHTS/i);

      // 5. Record RIGHTS approval -> All 3 approved!
      await db.$transaction((tx) =>
        recordQuestionReview(tx, {
          revisionId: revId,
          reviewerId: admin.id,
          reviewKind: 'RIGHTS',
          decision: 'APPROVED',
        }),
      );

      // Publication now succeeds!
      await setStatus({ id: admin.id, role: 'ADMIN' }, q.id, 'PUBLISHED');
      const publishedQ = await db.question.findUniqueOrThrow({ where: { id: q.id } });
      expect(publishedQ.status).toBe('PUBLISHED');

      // 6. Terminal revocation test: Rights reviewer discovers infringement and revokes
      await db.$transaction((tx) =>
        recordQuestionReview(tx, {
          revisionId: revId,
          reviewerId: admin.id,
          reviewKind: 'RIGHTS',
          decision: 'REVOKED',
          comments: 'Image license was found to be non-commercial only.',
        }),
      );

      // Attempting to record subsequent approval throws CONFLICT
      await expect(
        db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: revId,
            reviewerId: admin.id,
            reviewKind: 'RIGHTS',
            decision: 'APPROVED',
          }),
        ),
      ).rejects.toThrow(/Cannot approve this revision: a revocation is terminal/);

      // Delivery is now withheld!
      const delivery = await getDeliverableQuestion(db, q.id);
      expect(delivery.deliverable).toBe(false);
      expect(delivery.reason).toMatch(/withheld/i);

      // Verify question demoted to REVIEW and rightsAllowDelivery revoked
      const updatedQ = await db.question.findUniqueOrThrow({ where: { id: q.id } });
      expect(updatedQ.status).toBe('REVIEW');
      expect(updatedQ.rightsAllowDelivery).toBe(false);
    });

    it('delivers exact approved revision snapshot and scores with revision correctness', async () => {
      const learner = await createTestUser('LEARNER');
      const q = await createTestQuestion('snapshot_deliv', 'Stem before approval');

      // Revision 1 has Option 0 as false, Option 1 as true
      const revRes = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          changeSummary: 'Revision 1 for learner view test',
        }),
      );
      const revId = revRes.revision.id;

      // Approve all 3 pillars for Revision 1
      await db.$transaction(async (tx) => {
        await recordQuestionReview(tx, { revisionId: revId, reviewerId: learner.id, reviewKind: 'EDITORIAL', decision: 'APPROVED' });
        await recordQuestionReview(tx, { revisionId: revId, reviewerId: learner.id, reviewKind: 'CLINICAL', decision: 'APPROVED' });
        await recordQuestionReview(tx, { revisionId: revId, reviewerId: learner.id, reviewKind: 'RIGHTS', decision: 'APPROVED' });
      });

      // Verify delivery reports approved snapshot
      const delivery = await getDeliverableQuestion(db, q.id);
      expect(delivery.deliverable).toBe(true);
      expect(delivery.revisionId).toBe(revId);

      // Learner takes a session on this question
      const s = await createTestSession(learner.id, q.id);
      await openSession(learner.id, s.id);

      // getView renders the approved snapshot
      const view = await getView(learner.id, s.id);
      expect(view.question.id).toBe(q.id);

      // Learner submits Choice B (position 1, which is correct in Revision 1)
      const choiceB = q.options.find((o) => o.position === 1)!;
      await answer(learner.id, s.id, 0, [choiceB.id]);
      await submitItem(learner.id, s.id, 0);

      // Verify the recorded PracticeAttempt contains exact revisionId
      const attempt = await db.practiceAttempt.findFirstOrThrow({
        where: { userId: learner.id, questionId: q.id },
      });
      expect(attempt.revisionId).toBe(revId);
      expect(attempt.isCorrect).toBe(true);
      expect(attempt.selectedOptionIdentifier).toBe('B');
    });

    it('allows updates of versioned questions while preserving the delivered historical attempt', async () => {
      const editor = await createTestUser('ADMIN');
      const learner = await createTestUser('LEARNER');
      const q = await createTestQuestion('hist_dep', 'Question with historical attempts');
      q.code = q.code.slice(0, 40);
      await db.question.update({ where: { id: q.id }, data: { code: q.code } });
      const initial = await db.$transaction(tx => createQuestionRevision(tx, { questionId: q.id, authorId: editor.id }));
      for (const reviewKind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction(tx => recordQuestionReview(tx, { revisionId: initial.revision.id, reviewerId: editor.id, reviewKind, decision: 'APPROVED', comments: 'Synthetic disposable regression only.' }));
      }

      // 1. Record an attempt
      const s = await createTestSession(learner.id, q.id);
      await openSession(learner.id, s.id);
      await answer(learner.id, s.id, 0, [q.options[1]!.id]);
      await submitItem(learner.id, s.id, 0);

      const attemptBefore = await db.practiceAttempt.findFirstOrThrow({
        where: { userId: learner.id, questionId: q.id },
      });
      expect(attemptBefore).not.toBeNull();
      expect(attemptBefore.revisionId).toBe(initial.revision.id);

      // 2. Editor updates question content in-place
      const exam = await db.exam.findUniqueOrThrow({ where: { id: sharedExamId } });
      const subject = await db.subject.findUniqueOrThrow({ where: { id: sharedSubjectId } });
      const system = await db.system.findUniqueOrThrow({ where: { id: sharedSystemId } });

      await updateQuestion({ id: editor.id, role: 'ADMIN' }, q.id, {
        code: q.code.slice(0, 40),
        exam: exam.name,
        subject: subject.name,
        system: system.name,
        type: 'SINGLE',
        difficulty: 4,
        stem: 'Revised clinical stem reflecting updated pathology guidelines.',
        options: [
          { text: 'Choice A updated', correct: false },
          { text: 'Choice B updated', correct: true },
        ],
        explanation: 'Revised explanation text.',
        objective: 'Updated educational objective.',
        keyPoints: ['Updated key point'],
        references: [],
        source: 'OpenPrep Editorial',
        license: 'CC-BY-4.0',
      });

      // 3. Historical attempt is completely preserved!
      const attemptAfter = await db.practiceAttempt.findFirstOrThrow({
        where: { id: attemptBefore.id },
      });
      expect(attemptAfter.id).toBe(attemptBefore.id);
      expect(attemptAfter.attemptEventSeq).toBe(attemptBefore.attemptEventSeq);
      expect(attemptAfter.selectedOptionTextSnapshot).toBe(attemptBefore.selectedOptionTextSnapshot);
    });
    it('pins deliveredRevisionId to session item on first view and scores against pinned revision despite newer approved revisions', async () => {
      const editor = await createTestUser('ADMIN');
      const learner = await createTestUser('LEARNER');

      // 1. Create Question with Rev 1: Option 0 is correct, Option 1 is incorrect
      const q = await createTestQuestion('pin_race', 'Initial clinical stem version 1 for pinning race verification', 'SINGLE', [
        { position: 0, text: 'Option A (Correct in Rev 1)', isCorrect: true },
        { position: 1, text: 'Option B (Incorrect in Rev 1)', isCorrect: false },
      ]);

      // Mint Rev 1 and approve it
      const rev1 = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          authorId: editor.id,
          changeSummary: 'Initial verified revision',
        }),
      );

      for (const kind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: rev1.revision.id,
            reviewerId: editor.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }

      // 2. Learner creates test session and opens question (first view)
      const s = await createTestSession(learner.id, q.id);
      await openSession(learner.id, s.id);

      // Verify deliveredRevisionId is null before view
      const itemBeforeView = await db.sessionItem.findFirstOrThrow({
        where: { sessionId: s.id, questionId: q.id },
      });
      expect(itemBeforeView.deliveredRevisionId).toBeNull();

      // Learner views question
      const view = await getView(learner.id, s.id);
      expect(view.item.stemHtml).toContain('Initial clinical stem version 1');

      // Verify deliveredRevisionId is now pinned to rev1.id!
      const itemAfterView = await db.sessionItem.findFirstOrThrow({
        where: { sessionId: s.id, questionId: q.id },
      });
      expect(itemAfterView.deliveredRevisionId).toBe(rev1.revision.id);

      // 3. Race condition occurs: Editor updates question in-place to Rev 2!
      // In Rev 2, Option 0 becomes INCORRECT, Option 1 becomes CORRECT!
      const exam = await db.exam.findUniqueOrThrow({ where: { id: sharedExamId } });
      const subject = await db.subject.findUniqueOrThrow({ where: { id: sharedSubjectId } });
      const system = await db.system.findUniqueOrThrow({ where: { id: sharedSystemId } });

      await updateQuestion({ id: editor.id, role: 'ADMIN' }, q.id, {
        code: q.code.slice(0, 40),
        exam: exam.name,
        subject: subject.name,
        system: system.name,
        type: 'SINGLE',
        difficulty: 3,
        stem: 'Stem V2 (Revised Content)',
        options: [
          { text: 'Option A (Incorrect in Rev 2)', correct: false },
          { text: 'Option B (Correct in Rev 2)', correct: true },
        ],
        explanation: 'Revised explanation text.',
        objective: 'Objective V2',
        keyPoints: ['Key point V2'],
        references: [],
        source: 'OpenPrep',
        license: 'CC-BY-4.0',
      });

      // Find Rev 2 and approve it
      const rev2 = await db.questionRevision.findUniqueOrThrow({
        where: { questionId_revisionNumber: { questionId: q.id, revisionNumber: 2 } },
      });
      for (const kind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: rev2.id,
            reviewerId: editor.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }

      // Re-publish question so Rev 2 becomes the active deliverable revision
      await db.question.update({
        where: { id: q.id },
        data: {
          status: 'PUBLISHED',
          rightsStatus: 'VERIFIED',
          rightsAllowDelivery: true,
          rightsHolder: 'OpenPrep Foundation',
          rightsEvidence: 'Verified clinical content license for integration tests.',
          rightsDecision: 'Approved for clinical delivery under verified license.',
          rightsReviewedBy: 'admin',
          rightsReviewedAt: new Date(),
        },
      });

      // Verify latest deliverable question is now Rev 2
      const currentDeliv = await getDeliverableQuestion(db, q.id);
      expect(currentDeliv.revisionId).toBe(rev2.id);

      // 4. Meanwhile, the learner submits Option 0 (which was correct under Rev 1 they were delivered)
      const opt0 = q.options.find((o) => o.position === 0)!;
      await answer(learner.id, s.id, 0, [opt0.id]);
      await submitItem(learner.id, s.id, 0);

      // 5. Verify the submitted item was scored against Rev 1, NOT Rev 2!
      const finalItem = await db.sessionItem.findFirstOrThrow({
        where: { sessionId: s.id, questionId: q.id },
      });
      expect(finalItem.state).toBe('LOCKED');
      expect(finalItem.isCorrect).toBe(true); // Scored against Rev 1 where Opt 0 was correct!
      expect(finalItem.deliveredRevisionId).toBe(rev1.revision.id);

      // Verify PracticeAttempt was pinned to rev1
      const attempt = await db.practiceAttempt.findFirstOrThrow({
        where: { userId: learner.id, questionId: q.id },
      });
      expect(attempt.revisionId).toBe(rev1.revision.id);
      expect(attempt.isCorrect).toBe(true);
      expect(attempt.selectedOptionTextSnapshot).toBe('Option A (Correct in Rev 1)');
    });

    it('recordQuestionReview on REVOKED atomically demotes question and evicts it from practice pool', async () => {
      const editor = await createTestUser('ADMIN');
      const q = await createTestQuestion('rev_pool', 'Stem to be revoked');

      const rev = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          authorId: editor.id,
          changeSummary: 'Revision before revocation',
        }),
      );

      for (const kind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: rev.revision.id,
            reviewerId: editor.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }

      // Verify question is initially in deliverable pool
      const whereInitial = await questionWhere(null, {
        pool: 'all',
        examIds: [],
        subjectIds: [],
        systemIds: [],
        topicIds: [],
        difficulty: [],
        q: '',
      });
      const inPoolBefore = await db.question.findFirst({
        where: { id: q.id, ...whereInitial },
      });
      expect(inPoolBefore).not.toBeNull();

      // Rights reviewer revokes the revision
      await db.$transaction((tx) =>
        recordQuestionReview(tx, {
          revisionId: rev.revision.id,
          reviewerId: editor.id,
          reviewKind: 'RIGHTS',
          decision: 'REVOKED',
          comments: 'License revoked by copyright holder',
        }),
      );

      // Question is atomically demoted
      const qAfterRevoke = await db.question.findUniqueOrThrow({ where: { id: q.id } });
      expect(qAfterRevoke.status).toBe('REVIEW');
      expect(qAfterRevoke.rightsAllowDelivery).toBe(false);

      // Question is immediately evicted from practice pool
      const whereAfter = await questionWhere(null, {
        pool: 'all',
        examIds: [],
        subjectIds: [],
        systemIds: [],
        topicIds: [],
        difficulty: [],
        q: '',
      });
      const inPoolAfter = await db.question.findFirst({
        where: { id: q.id, ...whereAfter },
      });
      expect(inPoolAfter).toBeNull();
    });

    it('allows scoring of an already-delivered question even if revoked mid-exam without crashing', async () => {
      const editor = await createTestUser('ADMIN');
      const learner = await createTestUser('LEARNER');

      const q = await createTestQuestion('deliv_rev', 'Delivered stem');
      const rev = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          authorId: editor.id,
          changeSummary: 'Revision 1',
        }),
      );
      for (const kind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: rev.revision.id,
            reviewerId: editor.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }

      // Learner views question -> binds deliveredRevisionId
      const s = await createTestSession(learner.id, q.id);
      await openSession(learner.id, s.id);
      await getView(learner.id, s.id);

      const boundItem = await db.sessionItem.findFirstOrThrow({
        where: { sessionId: s.id, questionId: q.id },
      });
      expect(boundItem.deliveredRevisionId).toBe(rev.revision.id);

      // Mid-exam: Clinical reviewer discovers critical safety concern and revokes!
      await db.$transaction((tx) =>
        recordQuestionReview(tx, {
          revisionId: rev.revision.id,
          reviewerId: editor.id,
          reviewKind: 'CLINICAL',
          decision: 'REVOKED',
          comments: 'Contraindicated dosage',
        }),
      );

      // Unbound delivery now fails
      const delivCheck = await getDeliverableQuestion(db, q.id);
      expect(delivCheck.deliverable).toBe(false);

      // But learner submitting their already-open question succeeds!
      const optCorrect = q.options.find((o) => o.isCorrect)!;
      await answer(learner.id, s.id, 0, [optCorrect.id]);
      await expect(submitItem(learner.id, s.id, 0)).resolves.not.toThrow();

      const attempt = await db.practiceAttempt.findFirstOrThrow({
        where: { userId: learner.id, questionId: q.id },
      });
      expect(attempt.revisionId).toBe(rev.revision.id);
      expect(attempt.isCorrect).toBe(true);
    });

    it('listQuestions returns approved revision snapshot stemMd rather than unverified live edits', async () => {
      const editor = await createTestUser('ADMIN');

      const q = await createTestQuestion('browse_snap', 'Initial Live Stem');
      const rev1 = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          authorId: editor.id,
          changeSummary: 'Approved revision with distinct stem',
        }),
      );
      for (const kind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: rev1.revision.id,
            reviewerId: editor.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }

      // Editor makes an unapproved live edit directly to question.stemMd
      await db.question.update({
        where: { id: q.id },
        data: { stemMd: 'Unreviewed draft edits in question table' },
      });

      // listQuestions must render the approved revision snapshot stem
      const list = await listQuestions(null, {
        pool: 'all',
        examIds: [],
        subjectIds: [],
        systemIds: [],
        topicIds: [],
        difficulty: [],
        q: '',
      }, 1, 100);

      const found = list.rows.find(r => r.id === q.id);
      expect(found).toBeDefined();
      expect(found!.stemMd).toBe('Initial Live Stem'); // from Rev 1 snapshot, not unreviewed draft!
    });

    it('F-01: concurrent getView() calls serialize via row-level lock and converge on exact same revision without overwrite', async () => {
      const learner = await createTestUser('LEARNER');
      const editor = await createTestUser('ADMIN');

      const q = await createTestQuestion('f01_concurrent', 'Initial Stem for Concurrent Test');
      const rev1 = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          authorId: editor.id,
          changeSummary: 'Revision 1 for concurrent view test',
        }),
      );
      for (const kind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: rev1.revision.id,
            reviewerId: editor.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }

      // Create session with an unbound session_item
      const session = await createTestSession(learner.id, q.id, 'TUTOR');
      await openSession(learner.id, session.id);

      // Verify item starts with deliveredRevisionId null
      const itemBefore = await db.sessionItem.findUniqueOrThrow({
        where: { sessionId_questionId: { sessionId: session.id, questionId: q.id } },
      });
      expect(itemBefore.deliveredRevisionId).toBeNull();

      // Launch 5 concurrent getView() calls simultaneously
      const results = await Promise.all([
        getView(learner.id, session.id),
        getView(learner.id, session.id),
        getView(learner.id, session.id),
        getView(learner.id, session.id),
        getView(learner.id, session.id),
      ]);

      // All 5 calls returned the same valid snapshot
      for (const res of results) {
        expect(res.item.stemHtml).toContain('Initial Stem for Concurrent Test');
      }

      // Verify item has deliveredRevisionId bound to rev1.revision.id
      const itemAfter = await db.sessionItem.findUniqueOrThrow({
        where: { sessionId_questionId: { sessionId: session.id, questionId: q.id } },
      });
      expect(itemAfter.deliveredRevisionId).toBe(rev1.revision.id);
    });

    it('F-02: revoked question can be republished after replacement revision is approved across all 3 pillars', async () => {
      const editor = await createTestUser('EDITOR');
      const admin = await createTestUser('ADMIN');
      const q = await createTestQuestion('f02_republish', 'Revoked stem to be corrected');

      // 1. Initial revision 1
      const rev1 = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          authorId: editor.id,
          changeSummary: 'Revision 1 initial',
        }),
      );
      for (const kind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: rev1.revision.id,
            reviewerId: admin.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }

      // Set to REVIEW to verify initial transition to PUBLISHED
      await db.question.update({
        where: { id: q.id },
        data: { status: 'REVIEW' },
      });

      // Publish question initially
      await setStatus({ id: admin.id, role: 'ADMIN' }, q.id, 'PUBLISHED');
      let qState = await db.question.findUniqueOrThrow({ where: { id: q.id } });
      expect(qState.status).toBe('PUBLISHED');
      expect(qState.rightsAllowDelivery).toBe(true);

      // 2. Revoke Revision 1 (rights challenge)
      await db.$transaction((tx) =>
        recordQuestionReview(tx, {
          revisionId: rev1.revision.id,
          reviewerId: admin.id,
          reviewKind: 'RIGHTS',
          decision: 'REVOKED',
          comments: 'Rights dispute on Revision 1',
        }),
      );

      // Question is demoted to REVIEW and rightsAllowDelivery is false
      qState = await db.question.findUniqueOrThrow({ where: { id: q.id } });
      expect(qState.status).toBe('REVIEW');
      expect(qState.rightsAllowDelivery).toBe(false);

      // Attempting to republish without re-established rights must fail
      await expect(
        setStatus({ id: admin.id, role: 'ADMIN' }, q.id, 'PUBLISHED'),
      ).rejects.toThrow(/Verified rights and explicit delivery permission are required before publication/);

      // 3. Author updates content to resolve the revocation and creates Revision 2
      await db.question.update({
        where: { id: q.id },
        data: { stemMd: 'Revised Stem 2 with Corrected Content and Clear Rights' },
      });
      const rev2 = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          authorId: editor.id,
          changeSummary: 'Revision 2 correcting copyright evidence and text',
        }),
      );
      expect(rev2.created).toBe(true);
      expect(rev2.revision.revisionNumber).toBe(2);

      // 4. Reviewers approve Revision 2 on EDITORIAL and CLINICAL, but not yet RIGHTS
      for (const kind of ['EDITORIAL', 'CLINICAL'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: rev2.revision.id,
            reviewerId: admin.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }

      // Publication must still fail (blocked by underlying rights check and missing review)
      await expect(
        setStatus({ id: admin.id, role: 'ADMIN' }, q.id, 'PUBLISHED'),
      ).rejects.toThrow(/Verified rights and explicit delivery permission|missing or revoked: RIGHTS/i);

      // 5. Rights reviewer approves Revision 2
      await db.$transaction((tx) =>
        recordQuestionReview(tx, {
          revisionId: rev2.revision.id,
          reviewerId: admin.id,
          reviewKind: 'RIGHTS',
          decision: 'APPROVED',
          comments: 'Replacement diagram verified under open license',
        }),
      );

      // Explicit negative check (Case C): All 3 revision approvals alone CANNOT restore revoked rights permission
      await expect(
        setStatus({ id: admin.id, role: 'ADMIN' }, q.id, 'PUBLISHED'),
      ).rejects.toThrow(/Verified rights and explicit delivery permission are required before publication/);

      // Re-establish underlying rights through the authorized rights-validation workflow
      const pendingQ = await db.question.findUniqueOrThrow({ where: { id: q.id } });
      await submitRightsEvidence({ id: editor.id, role: 'EDITOR' }, q.id, {
        version: pendingQ.updatedAt.toISOString(),
        holder: 'OpenPrep Foundation',
        evidence: 'Replacement diagram verified and licensed under CC-BY-4.0.',
      });
      const verifiedQ = await db.question.findUniqueOrThrow({ where: { id: q.id } });
      await reviewContentRights({ id: admin.id, role: 'ADMIN' }, q.id, {
        version: verifiedQ.updatedAt.toISOString(),
        status: 'VERIFIED',
        reason: 'Authorized replacement artwork independently verified.',
        allowDelivery: true,
        allowExport: true,
      });

      // 6. Republication succeeds now that underlying rights are re-established!
      await setStatus({ id: admin.id, role: 'ADMIN' }, q.id, 'PUBLISHED');

      qState = await db.question.findUniqueOrThrow({ where: { id: q.id } });
      expect(qState.status).toBe('PUBLISHED');
      expect(qState.rightsAllowDelivery).toBe(true);

      // Deliverable question resolves to Revision 2 snapshot
      const delivery = await getDeliverableQuestion(db, q.id);
      expect(delivery.deliverable).toBe(true);
      expect(delivery.revisionId).toBe(rev2.revision.id);
      expect(delivery.revisionNumber).toBe(2);
    });

    it('Case D: EDITORIAL revocation demotes question but leaves underlying rights permission intact, allowing republication after replacement approval', async () => {
      const editor = await createTestUser('EDITOR');
      const admin = await createTestUser('ADMIN');
      const q = await createTestQuestion('case_d_ed_revoke', 'Stem for Case D test');

      const rev1 = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          authorId: editor.id,
          changeSummary: 'Revision 1 baseline',
        }),
      );
      for (const kind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: rev1.revision.id,
            reviewerId: admin.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }

      // Verify question starts PUBLISHED with rightsAllowDelivery true
      let qState = await db.question.findUniqueOrThrow({ where: { id: q.id } });
      expect(qState.status).toBe('PUBLISHED');
      expect(qState.rightsAllowDelivery).toBe(true);

      // Editorial reviewer revokes Revision 1 (e.g. typographical error)
      await db.$transaction((tx) =>
        recordQuestionReview(tx, {
          revisionId: rev1.revision.id,
          reviewerId: admin.id,
          reviewKind: 'EDITORIAL',
          decision: 'REVOKED',
          comments: 'Typographical error in stem',
        }),
      );

      // Question demoted to REVIEW, but rightsAllowDelivery REMAINS true!
      qState = await db.question.findUniqueOrThrow({ where: { id: q.id } });
      expect(qState.status).toBe('REVIEW');
      expect(qState.rightsAllowDelivery).toBe(true);

      // Author updates stem and creates Revision 2
      await db.question.update({
        where: { id: q.id },
        data: { stemMd: 'Corrected stem without typographical error' },
      });
      const rev2 = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          authorId: editor.id,
          changeSummary: 'Revision 2 fixing typographical error',
        }),
      );
      expect(rev2.created).toBe(true);
      expect(rev2.revision.revisionNumber).toBe(2);

      // Reviewers approve Revision 2 across all 3 pillars
      for (const kind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: rev2.revision.id,
            reviewerId: admin.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }

      // Republication succeeds directly without rights re-review!
      await setStatus({ id: admin.id, role: 'ADMIN' }, q.id, 'PUBLISHED');

      qState = await db.question.findUniqueOrThrow({ where: { id: q.id } });
      expect(qState.status).toBe('PUBLISHED');
      expect(qState.rightsAllowDelivery).toBe(true);

      // Delivery serves Revision 2
      const delivery = await getDeliverableQuestion(db, q.id);
      expect(delivery.deliverable).toBe(true);
      expect(delivery.revisionId).toBe(rev2.revision.id);
      expect(delivery.revisionNumber).toBe(2);
    });

    it('Case B & Case E: setStatus blocks publication when rightsStatus !== VERIFIED or rightsAllowDelivery is false for versioned and legacy questions', async () => {
      const editor = await createTestUser('EDITOR');
      const admin = await createTestUser('ADMIN');

      // Case B: Versioned question with all 3 approvals but unverified rights
      const qB = await createTestQuestion('case_b_unverified', 'Stem for Case B test');
      await db.question.update({
        where: { id: qB.id },
        data: { status: 'REVIEW', rightsStatus: 'UNVERIFIED', rightsAllowDelivery: false },
      });
      const revB = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: qB.id,
          authorId: editor.id,
          changeSummary: 'Revision with unverified rights',
        }),
      );
      for (const kind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: revB.revision.id,
            reviewerId: admin.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }
      // Rejects publication even with all 3 approvals
      await expect(
        setStatus({ id: admin.id, role: 'ADMIN' }, qB.id, 'PUBLISHED'),
      ).rejects.toThrow(/Verified rights and explicit delivery permission are required before publication/);

      // Case E: Legacy unversioned question
      const qE = await createTestQuestion('case_e_legacy', 'Stem for Case E test');
      await db.question.update({
        where: { id: qE.id },
        data: { status: 'REVIEW', rightsStatus: 'UNVERIFIED', rightsAllowDelivery: false },
      });
      // Rejects publication of legacy question without verified rights
      await expect(
        setStatus({ id: admin.id, role: 'ADMIN' }, qE.id, 'PUBLISHED'),
      ).rejects.toThrow(/Verified rights and explicit delivery permission are required before publication/);

      // When legacy question has verified rights, publication succeeds
      await db.question.update({
        where: { id: qE.id },
        data: { rightsStatus: 'VERIFIED', rightsAllowDelivery: true },
      });
      await setStatus({ id: admin.id, role: 'ADMIN' }, qE.id, 'PUBLISHED');
      const qEState = await db.question.findUniqueOrThrow({ where: { id: qE.id } });
      expect(qEState.status).toBe('PUBLISHED');
    });

    it('F-03: ON DELETE RESTRICT prevents deleting a revision bound to a session item', async () => {
      const learner = await createTestUser('LEARNER');
      const editor = await createTestUser('ADMIN');

      const q = await createTestQuestion('f03_fk_restrict', 'Stem for FK test');
      const rev = await db.$transaction((tx) =>
        createQuestionRevision(tx, {
          questionId: q.id,
          authorId: editor.id,
          changeSummary: 'Revision bound to session item',
        }),
      );
      for (const kind of ['EDITORIAL', 'CLINICAL', 'RIGHTS'] as const) {
        await db.$transaction((tx) =>
          recordQuestionReview(tx, {
            revisionId: rev.revision.id,
            reviewerId: editor.id,
            reviewKind: kind,
            decision: 'APPROVED',
          }),
        );
      }

      // Create session and view question so it binds deliveredRevisionId
      const session = await createTestSession(learner.id, q.id, 'TUTOR');
      await openSession(learner.id, session.id);
      await getView(learner.id, session.id);

      const boundItem = await db.sessionItem.findUniqueOrThrow({
        where: { sessionId_questionId: { sessionId: session.id, questionId: q.id } },
      });
      expect(boundItem.deliveredRevisionId).toBe(rev.revision.id);

      // Attempting to delete the revision directly in PostgreSQL must be blocked by FK ON DELETE RESTRICT
      await expect(
        db.questionRevision.delete({
          where: { id: rev.revision.id },
        }),
      ).rejects.toThrow(/foreign key constraint violated|session_item_deliveredRevisionId_fkey/i);

      // Verify the delivered revision binding remains intact and was NOT set to null
      const itemStillBound = await db.sessionItem.findUniqueOrThrow({
        where: { id: boundItem.id },
      });
      expect(itemStillBound.deliveredRevisionId).toBe(rev.revision.id);
    });

  });
});
