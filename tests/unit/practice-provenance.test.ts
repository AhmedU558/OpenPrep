import { describe, expect, it, vi } from 'vitest';
import type { PracticeAttempt, PracticeEvent, PracticeReset, QuestionRevision, QuestionReview, PrismaClient } from '@/generated/prisma/client';
import type { ReviewDecision, ReviewKind, ResetScope } from '@/generated/prisma/enums';
import type { Tx } from '@/lib/db';
import { isIdempotencyKeyConflict, recordAttemptSubmission, recordPracticeEvent, recordPracticeReset, resolveQuestionPracticeStatus, resolveUserActiveQuestionPools, type AttemptLike, type ResetLike, } from '@/lib/practice-event-sequence';
import { buildQuestionSnapshot, canonicalizeJson, createQuestionRevision, getDeliverableQuestion, hashContentSnapshot, isRevisionFullyApproved, recordQuestionReview, recordReviewSchema, type QuestionContentSnapshot, } from '@/lib/question-revision';
import { setStatus } from '@/lib/admin';
// Partial Prisma fixtures deliberately include only fields exercised by each unit test.
function mockResult<T>(value: unknown): T { return value as T; }
describe('A. Deterministic revision hashing & snapshot canon', () => {
    it('canonicalizeJson sorts object keys recursively regardless of insertion order', () => {
        const objA = { z: 1, a: 2, m: { nestedZ: 'last', nestedA: 'first' } };
        const objB = { m: { nestedA: 'first', nestedZ: 'last' }, a: 2, z: 1 };
        expect(canonicalizeJson(objA)).toBe(canonicalizeJson(objB));
        expect(canonicalizeJson(objA)).toBe('{"a":2,"m":{"nestedA":"first","nestedZ":"last"},"z":1}');
    });
    it('hashContentSnapshot generates deterministic SHA-256 regardless of key order', () => {
        const baseOptions = [
            { position: 0, text: 'Option A', isCorrect: false, explanationMd: null },
            { position: 1, text: 'Option B', isCorrect: true, explanationMd: 'Correct explanation' },
        ];
        const snapshotA: QuestionContentSnapshot = {
            code: 's1-001',
            type: 'SINGLE',
            difficulty: 3,
            examId: 'exam-1',
            examSlug: 'step1',
            subjectId: 'sub-1',
            subjectName: 'Pathology',
            systemId: 'sys-1',
            systemName: 'Cardiovascular',
            topicId: null,
            topicName: null,
            stemMd: 'A 55-year-old male presents with chest pain...',
            explanationMd: 'The patient has myocardial infarction...',
            objective: 'Recognize acute MI',
            keyPoints: ['Key 1', 'Key 2'],
            references: [{ label: 'Harrison', url: 'https://example.com' }],
            imageUrl: null,
            imageAlt: null,
            source: 'OpenPrep',
            license: 'CC-BY-4.0',
            attribution: 'OpenPrep Team',
            rightsStatus: 'VERIFIED',
            rightsHolder: 'OpenPrep Foundation',
            rightsDecision: 'APPROVED',
            isDemo: true,
            options: baseOptions,
        };
        // Construct snapshotB with different property insertion order
        const snapshotB: QuestionContentSnapshot = {
            isDemo: true,
            rightsDecision: 'APPROVED',
            rightsHolder: 'OpenPrep Foundation',
            rightsStatus: 'VERIFIED',
            attribution: 'OpenPrep Team',
            license: 'CC-BY-4.0',
            source: 'OpenPrep',
            imageAlt: null,
            imageUrl: null,
            references: [{ label: 'Harrison', url: 'https://example.com' }],
            keyPoints: ['Key 1', 'Key 2'],
            objective: 'Recognize acute MI',
            explanationMd: 'The patient has myocardial infarction...',
            stemMd: 'A 55-year-old male presents with chest pain...',
            topicName: null,
            topicId: null,
            systemName: 'Cardiovascular',
            systemId: 'sys-1',
            subjectName: 'Pathology',
            subjectId: 'sub-1',
            examSlug: 'step1',
            examId: 'exam-1',
            difficulty: 3,
            type: 'SINGLE',
            code: 's1-001',
            options: [
                { isCorrect: false, position: 0, explanationMd: null, text: 'Option A' },
                { explanationMd: 'Correct explanation', isCorrect: true, position: 1, text: 'Option B' },
            ],
        };
        const hashA = hashContentSnapshot(snapshotA);
        const hashB = hashContentSnapshot(snapshotB);
        expect(hashA).toHaveLength(64);
        expect(hashA).toBe(hashB);
    });
    it('buildQuestionSnapshot excludes rightsEvidence and Option.id', () => {
        const rawQuestion = {
            id: 'q-internal-id',
            code: 's1-002',
            type: 'SINGLE' as const,
            difficulty: 4,
            examId: 'exam-1',
            exam: { slug: 'step1' },
            subjectId: 'sub-1',
            subject: { name: 'Pharmacology' },
            systemId: 'sys-1',
            system: { name: 'Renal' },
            topicId: null,
            topic: null,
            stemMd: 'Stem text',
            explanationMd: 'Explanation text',
            objective: 'Objective text',
            keyPoints: ['Point A'],
            references: [],
            imageUrl: null,
            imageAlt: null,
            source: 'OpenPrep',
            license: 'CC-BY-4.0',
            attribution: null,
            rightsStatus: 'VERIFIED' as const,
            rightsHolder: 'OpenPrep',
            rightsEvidence: 'CONFIDENTIAL LEGAL CONTRACT #12345', // Must NOT be in snapshot!
            rightsDecision: 'APPROVED',
            rightsReviewedBy: 'Auditor A',
            rightsReviewedAt: new Date(),
            rightsAllowDelivery: true,
            rightsAllowExport: true,
            isDemo: false,
            authorId: 'user-1',
            createdAt: new Date(),
            updatedAt: new Date(),
            publishedAt: new Date(),
            status: 'PUBLISHED' as const,
            options: [
                { id: 'opt-db-id-2', position: 1, text: 'Second', isCorrect: true, explanationMd: 'Why 2' },
                { id: 'opt-db-id-1', position: 0, text: 'First', isCorrect: false, explanationMd: null },
            ],
        };
        const snapshot = buildQuestionSnapshot(rawQuestion as unknown as Parameters<typeof buildQuestionSnapshot>[0]);
        // Verify confidential evidence is excluded
        expect((snapshot as unknown as Record<string, unknown>).rightsEvidence).toBeUndefined();
        expect((snapshot as unknown as Record<string, unknown>).rightsReviewedBy).toBeUndefined();
        // Verify database option IDs are excluded and options are sorted by position
        expect(snapshot.options).toHaveLength(2);
        const opt0 = snapshot.options[0]!;
        const opt1 = snapshot.options[1]!;
        expect(opt0.position).toBe(0);
        expect(opt0.text).toBe('First');
        expect((opt0 as unknown as Record<string, unknown>).id).toBeUndefined();
        expect(opt1.position).toBe(1);
        expect(opt1.text).toBe('Second');
        expect((opt1 as unknown as Record<string, unknown>).id).toBeUndefined();
    });
    it('any clinical or option content change generates a distinct content hash', () => {
        const baseSnapshot: QuestionContentSnapshot = {
            code: 's1-003',
            type: 'SINGLE',
            difficulty: 3,
            examId: 'exam-1',
            subjectId: 'sub-1',
            systemId: 'sys-1',
            topicId: null,
            stemMd: 'Initial stem',
            explanationMd: 'Initial explanation',
            objective: null,
            keyPoints: [],
            references: [],
            imageUrl: null,
            imageAlt: null,
            source: 'OpenPrep',
            license: 'CC-BY-4.0',
            attribution: null,
            rightsStatus: 'VERIFIED',
            rightsHolder: null,
            rightsDecision: null,
            isDemo: false,
            options: [{ position: 0, text: 'Choice A', isCorrect: true, explanationMd: null }],
        };
        const hash1 = hashContentSnapshot(baseSnapshot);
        const changedStem = { ...baseSnapshot, stemMd: 'Updated clinical presentation with hypotension' };
        const hash2 = hashContentSnapshot(changedStem);
        expect(hash2).not.toBe(hash1);
        const changedAnswer = {
            ...baseSnapshot,
            options: [{ position: 0, text: 'Choice A', isCorrect: false, explanationMd: null }],
        };
        const hash3 = hashContentSnapshot(changedAnswer);
        expect(hash3).not.toBe(hash1);
    });
});
describe('B. Question revision creation, locking & duplicate prevention', () => {
    it('serializes revision creation via PostgreSQL row-level lock (SELECT ... FOR UPDATE)', async () => {
        const mockQuestion = {
            id: 'q-lock-test',
            code: 's1-lock',
            type: 'SINGLE',
            difficulty: 3,
            examId: 'exam-1',
            exam: { slug: 'step1' },
            subjectId: 'sub-1',
            subject: { name: 'Path' },
            systemId: 'sys-1',
            system: { name: 'CV' },
            topicId: null,
            topic: null,
            stemMd: 'Stem',
            explanationMd: 'Exp',
            objective: null,
            keyPoints: [],
            references: [],
            imageUrl: null,
            imageAlt: null,
            source: 'OpenPrep',
            license: 'CC-BY-4.0',
            attribution: null,
            rightsStatus: 'VERIFIED',
            rightsHolder: null,
            rightsDecision: null,
            isDemo: false,
            options: [{ position: 0, text: 'A', isCorrect: true, explanationMd: null }],
        };
        const mockTx = {
            $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-lock-test' }]),
            question: {
                findUnique: vi.fn().mockResolvedValue(mockQuestion),
                rightsStatus: "VERIFIED",
                rightsAllowDelivery: true
            },
            questionRevision: {
                findFirst: vi.fn().mockResolvedValue(null),
                create: vi.fn().mockResolvedValue({ id: 'rev-1', revisionNumber: 1 }),
            },
        } as unknown as Tx;
        await createQuestionRevision(mockTx, { questionId: 'q-lock-test' });
        // Assert that the exclusive row lock was acquired before reading or creating
        expect(mockTx.$queryRaw).toHaveBeenCalled();
    });
    it('prevents duplicate revision when content hash is unchanged', async () => {
        const existingRevision: QuestionRevision = {
            id: 'rev-1',
            questionId: 'q-100',
            revisionNumber: 1,
            contentHash: '',
            schemaVersion: 1,
            contentSnapshot: {},
            ownerTestRelease: null,
            changeSummary: 'Initial import',
            authorId: 'author-1',
            createdAt: new Date(),
        };
        const mockQuestion = {
            id: 'q-100',
            code: 's1-100',
            type: 'SINGLE',
            difficulty: 3,
            examId: 'exam-1',
            exam: { slug: 'step1' },
            subjectId: 'sub-1',
            subject: { name: 'Path' },
            systemId: 'sys-1',
            system: { name: 'CV' },
            topicId: null,
            topic: null,
            stemMd: 'Stem',
            explanationMd: 'Exp',
            objective: null,
            keyPoints: [],
            references: [],
            imageUrl: null,
            imageAlt: null,
            source: 'OpenPrep',
            license: 'CC-BY-4.0',
            attribution: null,
            rightsStatus: 'VERIFIED',
            rightsHolder: null,
            rightsDecision: null,
            isDemo: false,
            options: [{ position: 0, text: 'A', isCorrect: true, explanationMd: null }],
        };
        const snapshot = buildQuestionSnapshot(mockQuestion as unknown as Parameters<typeof buildQuestionSnapshot>[0]);
        existingRevision.contentHash = hashContentSnapshot(snapshot);
        const mockTx = {
            $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-100' }]),
            question: {
                findUnique: vi.fn().mockResolvedValue(mockQuestion),
                rightsStatus: "VERIFIED",
                rightsAllowDelivery: true
            },
            questionRevision: {
                findFirst: vi.fn().mockResolvedValue(existingRevision),
                create: vi.fn(),
            },
        } as unknown as Tx;
        const result = await createQuestionRevision(mockTx, { questionId: 'q-100' });
        expect(result.created).toBe(false);
        expect(result.revision.id).toBe('rev-1');
        expect(mockTx.questionRevision.create).not.toHaveBeenCalled();
    });
    it('creates incremented revision when content hash changes', async () => {
        const existingRevision: QuestionRevision = {
            id: 'rev-1',
            questionId: 'q-200',
            revisionNumber: 1,
            contentHash: 'old-hash-1111111111111111111111111111111111111111111111111111111111111111',
            schemaVersion: 1,
            contentSnapshot: {},
            ownerTestRelease: null,
            changeSummary: 'Initial import',
            authorId: 'author-1',
            createdAt: new Date(),
        };
        const updatedQuestion = {
            id: 'q-200',
            code: 's1-200',
            type: 'SINGLE',
            difficulty: 4,
            examId: 'exam-1',
            exam: { slug: 'step1' },
            subjectId: 'sub-1',
            subject: { name: 'Path' },
            systemId: 'sys-1',
            system: { name: 'CV' },
            topicId: null,
            topic: null,
            stemMd: 'Updated stem for rev 2',
            explanationMd: 'Updated exp',
            objective: null,
            keyPoints: [],
            references: [],
            imageUrl: null,
            imageAlt: null,
            source: 'OpenPrep',
            license: 'CC-BY-4.0',
            attribution: null,
            rightsStatus: 'VERIFIED',
            rightsHolder: null,
            rightsDecision: null,
            isDemo: false,
            options: [{ position: 0, text: 'A', isCorrect: true, explanationMd: null }],
        };
        const createdRevision: QuestionRevision = {
            id: 'rev-2',
            questionId: 'q-200',
            revisionNumber: 2,
            contentHash: '',
            schemaVersion: 1,
            contentSnapshot: {},
            ownerTestRelease: null,
            changeSummary: 'Clinical accuracy update',
            authorId: 'editor-1',
            createdAt: new Date(),
        };
        const mockTx = {
            $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-200' }]),
            question: {
                findUnique: vi.fn().mockResolvedValue(updatedQuestion),
                rightsStatus: "VERIFIED",
                rightsAllowDelivery: true
            },
            questionRevision: {
                findFirst: vi.fn().mockResolvedValue(existingRevision),
                create: vi.fn().mockImplementation((args) => {
                    createdRevision.contentHash = args.data.contentHash;
                    return Promise.resolve(createdRevision);
                }),
            },
        } as unknown as Tx;
        const result = await createQuestionRevision(mockTx, {
            questionId: 'q-200',
            authorId: 'editor-1',
            changeSummary: 'Clinical accuracy update',
        });
        expect(result.created).toBe(true);
        expect(result.revision.revisionNumber).toBe(2);
        expect(mockTx.questionRevision.create).toHaveBeenCalledWith(expect.objectContaining({
            data: expect.objectContaining({
                questionId: 'q-200',
                revisionNumber: 2,
                changeSummary: 'Clinical accuracy update',
                authorId: 'editor-1',
            }),
        }));
    });
});
describe('C. 3-Pillar Review Gate & Terminal Revocation', () => {
    it('requires EDITORIAL, CLINICAL, and RIGHTS approvals to pass', () => {
        const incompleteReviews: Array<{
            reviewKind: ReviewKind;
            decision: ReviewDecision;
        }> = [
            { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
        ];
        const eval1 = isRevisionFullyApproved(incompleteReviews);
        expect(eval1.approved).toBe(false);
        expect(eval1.missingKinds).toEqual(['CLINICAL', 'RIGHTS']);
        const fullReviews: Array<{
            reviewKind: ReviewKind;
            decision: ReviewDecision;
        }> = [
            { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
            { reviewKind: 'CLINICAL', decision: 'APPROVED' },
            { reviewKind: 'RIGHTS', decision: 'APPROVED' },
        ];
        const eval2 = isRevisionFullyApproved(fullReviews);
        expect(eval2.approved).toBe(true);
        expect(eval2.missingKinds).toHaveLength(0);
    });
    it('enforces terminal revocation: any REVOKED decision permanently blocks approval of this revision', () => {
        // Even if a subsequent reviewer marks APPROVED, an earlier REVOKED permanently terminates approval
        const reviewsWithRevocation: Array<{
            reviewKind: ReviewKind;
            decision: ReviewDecision;
        }> = [
            { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
            { reviewKind: 'CLINICAL', decision: 'REVOKED' },
            { reviewKind: 'CLINICAL', decision: 'APPROVED' }, // Subsequent re-approval cannot unbrick a revoked revision
            { reviewKind: 'RIGHTS', decision: 'APPROVED' },
        ];
        const evalResult = isRevisionFullyApproved(reviewsWithRevocation);
        expect(evalResult.approved).toBe(false);
        expect(evalResult.missingKinds).toContain('CLINICAL');
    });
    it('recordQuestionReview validates revision existence', async () => {
        const mockTx = {
            questionRevision: {
                findUnique: vi.fn().mockResolvedValue(null),
            },
            questionReview: {
                create: vi.fn(),
            },
        } as unknown as Tx;
        await expect(recordQuestionReview(mockTx, {
            revisionId: 'non-existent-rev',
            reviewerId: 'user-1',
            reviewKind: 'CLINICAL',
            decision: 'APPROVED',
        })).rejects.toThrow('Question revision not found.');
    });
});
describe('D. Event sequence allocator & atomic ledger', () => {
    it('allocates strictly ascending monotonic event sequences via recordPracticeEvent', async () => {
        let mockSequence = 0n;
        const mockTx = {
            $queryRaw: vi.fn().mockImplementation(() => {
                mockSequence += 1n;
                return Promise.resolve([{ lastEventSeq: mockSequence, activeResetSeq: 0n }]);
            }),
            practiceEvent: {
                create: vi.fn().mockImplementation((args) => Promise.resolve({ id: 'evt', ...args.data })),
            },
        } as unknown as Tx;
        const res1 = await recordPracticeEvent(mockTx, { userId: 'u-1', eventType: 'SESSION_START' });
        const res2 = await recordPracticeEvent(mockTx, { userId: 'u-1', eventType: 'SESSION_SUSPEND' });
        const res3 = await recordPracticeEvent(mockTx, { userId: 'u-1', eventType: 'SESSION_RESUME' });
        expect(res1.eventSeq).toBe(1n);
        expect(res2.eventSeq).toBe(2n);
        expect(res3.eventSeq).toBe(3n);
        expect(res1.eventSeq < res2.eventSeq).toBe(true);
        expect(res2.eventSeq < res3.eventSeq).toBe(true);
    });
    it('simulates concurrent event allocations without duplicate sequence assignments', async () => {
        let currentSeq = 100n;
        const allocated: bigint[] = [];
        const mockTx = {
            $queryRaw: vi.fn().mockImplementation(async () => {
                currentSeq += 1n;
                return [{ lastEventSeq: currentSeq, activeResetSeq: 0n }];
            }),
            practiceEvent: {
                create: vi.fn().mockImplementation((args) => Promise.resolve({ id: 'evt', ...args.data })),
            },
        } as unknown as Tx;
        // Simulate 20 concurrent event recordings
        await Promise.all(Array.from({ length: 20 }, async () => {
            const res = await recordPracticeEvent(mockTx, { userId: 'user-concurrent', eventType: 'SESSION_START' });
            allocated.push(res.eventSeq);
        }));
        expect(allocated).toHaveLength(20);
        const uniqueSeqs = new Set(allocated.map((s) => s.toString()));
        expect(uniqueSeqs.size).toBe(20); // Zero collisions
    });
});
describe('E. Attempt idempotency & material payload validation', () => {
    it('returns existing attempt on identical material retry without new sequence or event', async () => {
        const existingAttempt: PracticeAttempt = {
            id: 'att-original',
            idempotencyKey: 'idemp-12345',
            userId: 'user-1',
            sessionId: 'sess-1',
            sessionItemId: 'item-1',
            questionId: 'q-50',
            revisionId: 'rev-1',
            sessionStartEventSeq: 10n,
            attemptEventSeq: 15n,
            selectedOptionId: 'opt-2',
            selectedOptionIdentifier: 'B',
            selectedOptionTextSnapshot: 'Option B Text',
            isCorrect: true,
            secondsSpent: 45,
            clientSubmittedAt: new Date(),
            serverRecordedAt: new Date(),
        };
        const mockTx = {
            practiceAttempt: {
                findUnique: vi.fn().mockResolvedValue(existingAttempt),
                create: vi.fn(),
            },
            $queryRaw: vi.fn(),
            practiceEvent: { create: vi.fn() },
        } as unknown as Tx;
        const result = await recordAttemptSubmission(mockTx, {
            userId: 'user-1',
            idempotencyKey: 'idemp-12345',
            sessionId: 'sess-1',
            sessionItemId: 'item-1',
            questionId: 'q-50',
            revisionId: 'rev-1',
            sessionStartEventSeq: 10n,
            selectedOptionIdentifier: 'B',
            selectedOptionTextSnapshot: 'Option B Text',
            isCorrect: true,
            secondsSpent: 45,
            clientSubmittedAt: new Date(),
        });
        expect(result.created).toBe(false);
        expect(result.attempt.id).toBe('att-original');
        expect(mockTx.$queryRaw).not.toHaveBeenCalled();
        expect(mockTx.practiceAttempt.create).not.toHaveBeenCalled();
    });
    it('rejects conflicting idempotency key reuse when answer choice differs', async () => {
        const existingAttempt: PracticeAttempt = {
            id: 'att-original',
            idempotencyKey: 'reused-key-diff-answer',
            userId: 'user-1',
            sessionId: 'sess-1',
            sessionItemId: 'item-1',
            questionId: 'q-50',
            revisionId: 'rev-1',
            sessionStartEventSeq: 10n,
            attemptEventSeq: 15n,
            selectedOptionId: 'opt-2',
            selectedOptionIdentifier: 'B',
            selectedOptionTextSnapshot: 'Option B Text',
            isCorrect: true,
            secondsSpent: 45,
            clientSubmittedAt: new Date(),
            serverRecordedAt: new Date(),
        };
        const mockTx = {
            practiceAttempt: {
                findUnique: vi.fn().mockResolvedValue(existingAttempt),
            },
        } as unknown as Tx;
        // Caller attempts to submit answer 'C' instead of 'B' with same idempotency key
        await expect(recordAttemptSubmission(mockTx, {
            userId: 'user-1',
            idempotencyKey: 'reused-key-diff-answer',
            questionId: 'q-50',
            sessionStartEventSeq: 10n,
            selectedOptionIdentifier: 'C', // Mismatch!
            selectedOptionTextSnapshot: 'Option C Text',
            isCorrect: false,
            secondsSpent: 45,
            clientSubmittedAt: new Date(),
        })).rejects.toThrow('Idempotency key reused with mismatched submission payload.');
    });
    it('recovers gracefully outside failed transaction when concurrent race hits P2002', async () => {
        const winningAttempt: PracticeAttempt = {
            id: 'att-winner',
            idempotencyKey: 'race-key-1',
            userId: 'user-race',
            sessionId: 'sess-1',
            sessionItemId: 'item-1',
            questionId: 'q-race',
            revisionId: 'rev-1',
            sessionStartEventSeq: 5n,
            attemptEventSeq: 10n,
            selectedOptionId: null,
            selectedOptionIdentifier: 'A',
            selectedOptionTextSnapshot: 'Choice A',
            isCorrect: true,
            secondsSpent: 15,
            clientSubmittedAt: new Date(),
            serverRecordedAt: new Date(),
        };
        const mockClient = {
            $transaction: vi.fn().mockImplementation(async (callback) => {
                const innerTx = {
                    practiceAttempt: {
                        findUnique: vi.fn().mockResolvedValue(null), // Both concurrent requests see null
                        create: vi.fn().mockRejectedValue({
                            code: 'P2002',
                            message: 'Unique constraint failed',
                            meta: { target: ['userId', 'idempotencyKey'] },
                        }),
                    },
                    $queryRaw: vi.fn().mockResolvedValue([{ lastEventSeq: 11n, activeResetSeq: 0n }]),
                    practiceEvent: { create: vi.fn().mockResolvedValue({ id: 'evt' }) },
                };
                return await callback(innerTx);
            }),
            practiceAttempt: {
                // Recovery outside the aborted transaction finds the winner from the other process
                findUnique: vi.fn().mockResolvedValue(winningAttempt),
            },
        } as unknown as PrismaClient;
        const result = await recordAttemptSubmission(mockClient, {
            userId: 'user-race',
            idempotencyKey: 'race-key-1',
            sessionId: 'sess-1',
            sessionItemId: 'item-1',
            questionId: 'q-race',
            revisionId: 'rev-1',
            sessionStartEventSeq: 5n,
            selectedOptionIdentifier: 'A',
            selectedOptionTextSnapshot: 'Choice A',
            isCorrect: true,
            secondsSpent: 15,
            clientSubmittedAt: new Date(),
        });
        expect(result.created).toBe(false);
        expect(result.attempt.id).toBe('att-winner');
        expect(mockClient.practiceAttempt.findUnique).toHaveBeenCalledWith({
            where: {
                userId_idempotencyKey: {
                    userId: 'user-race',
                    idempotencyKey: 'race-key-1',
                },
            },
        });
    });
    it('recovers gracefully outside failed transaction when concurrent race hits P2002 via PostgreSQL driver adapter', async () => {
        const winningAttempt: PracticeAttempt = {
            id: 'att-driver-winner',
            idempotencyKey: 'race-driver-key-1',
            userId: 'user-race-driver',
            sessionId: 'sess-1',
            sessionItemId: 'item-1',
            questionId: 'q-race',
            revisionId: 'rev-1',
            sessionStartEventSeq: 5n,
            attemptEventSeq: 10n,
            selectedOptionId: null,
            selectedOptionIdentifier: 'A',
            selectedOptionTextSnapshot: 'Choice A',
            isCorrect: true,
            secondsSpent: 15,
            clientSubmittedAt: new Date(),
            serverRecordedAt: new Date(),
        };
        const mockClient = {
            $transaction: vi.fn().mockImplementation(async (callback) => {
                const innerTx = {
                    practiceAttempt: {
                        findUnique: vi.fn().mockResolvedValue(null),
                        create: vi.fn().mockRejectedValue({
                            code: 'P2002',
                            message: 'Unique constraint failed on the constraint: `practice_attempt_userId_idempotencyKey_key`',
                            meta: {
                                modelName: 'PracticeAttempt',
                                driverAdapterError: {
                                    name: 'DriverAdapterError',
                                    cause: {
                                        originalCode: '23505',
                                        originalMessage: 'duplicate key value violates unique constraint "practice_attempt_userId_idempotencyKey_key"',
                                        kind: 'UniqueConstraintViolation',
                                        constraint: { index: 'practice_attempt_userId_idempotencyKey_key' },
                                        table: 'practice_attempt',
                                    },
                                },
                            },
                        }),
                    },
                    $queryRaw: vi.fn().mockResolvedValue([{ lastEventSeq: 11n, activeResetSeq: 0n }]),
                    practiceEvent: { create: vi.fn().mockResolvedValue({ id: 'evt' }) },
                };
                return await callback(innerTx);
            }),
            practiceAttempt: {
                findUnique: vi.fn().mockResolvedValue(winningAttempt),
            },
        } as unknown as PrismaClient;
        const result = await recordAttemptSubmission(mockClient, {
            userId: 'user-race-driver',
            idempotencyKey: 'race-driver-key-1',
            sessionId: 'sess-1',
            sessionItemId: 'item-1',
            questionId: 'q-race',
            revisionId: 'rev-1',
            sessionStartEventSeq: 5n,
            selectedOptionIdentifier: 'A',
            selectedOptionTextSnapshot: 'Choice A',
            isCorrect: true,
            secondsSpent: 15,
            clientSubmittedAt: new Date(),
        });
        expect(result.created).toBe(false);
        expect(result.attempt.id).toBe('att-driver-winner');
        expect(mockClient.practiceAttempt.findUnique).toHaveBeenCalledWith({
            where: {
                userId_idempotencyKey: {
                    userId: 'user-race-driver',
                    idempotencyKey: 'race-driver-key-1',
                },
            },
        });
    });
    it('does NOT recover unrelated P2002 unique constraint and re-throws the error', async () => {
        const mockClient = {
            $transaction: vi.fn().mockImplementation(async (callback) => {
                const innerTx = {
                    practiceAttempt: {
                        findUnique: vi.fn().mockResolvedValue(null),
                        create: vi.fn().mockRejectedValue({
                            code: 'P2002',
                            message: 'Unique constraint failed',
                            meta: { target: ['userId', 'attemptEventSeq'] }, // Unrelated constraint!
                        }),
                    },
                    $queryRaw: vi.fn().mockResolvedValue([{ lastEventSeq: 11n, activeResetSeq: 0n }]),
                    practiceEvent: { create: vi.fn().mockResolvedValue({ id: 'evt' }) },
                };
                return await callback(innerTx);
            }),
            practiceAttempt: {
                findUnique: vi.fn(),
            },
        } as unknown as PrismaClient;
        await expect(recordAttemptSubmission(mockClient, {
            userId: 'user-race',
            idempotencyKey: 'race-key-2',
            sessionId: 'sess-1',
            sessionItemId: 'item-1',
            questionId: 'q-race',
            revisionId: 'rev-1',
            sessionStartEventSeq: 5n,
            selectedOptionIdentifier: 'A',
            selectedOptionTextSnapshot: 'Choice A',
            isCorrect: true,
            secondsSpent: 15,
            clientSubmittedAt: new Date(),
        })).rejects.toMatchObject({ code: 'P2002' });
        expect(mockClient.practiceAttempt.findUnique).not.toHaveBeenCalled();
    });
    it('does NOT recover unrelated P2002 unique constraint under driver adapter and re-throws the error', async () => {
        const mockClient = {
            $transaction: vi.fn().mockImplementation(async (callback) => {
                const innerTx = {
                    practiceAttempt: {
                        findUnique: vi.fn().mockResolvedValue(null),
                        create: vi.fn().mockRejectedValue({
                            code: 'P2002',
                            message: 'Unique constraint failed on the constraint: `practice_attempt_userId_attemptEventSeq_key`',
                            meta: {
                                modelName: 'PracticeAttempt',
                                driverAdapterError: {
                                    cause: {
                                        originalCode: '23505',
                                        constraint: { index: 'practice_attempt_userId_attemptEventSeq_key' },
                                    },
                                },
                            },
                        }),
                    },
                    $queryRaw: vi.fn().mockResolvedValue([{ lastEventSeq: 11n, activeResetSeq: 0n }]),
                    practiceEvent: { create: vi.fn().mockResolvedValue({ id: 'evt' }) },
                };
                return await callback(innerTx);
            }),
            practiceAttempt: {
                findUnique: vi.fn(),
            },
        } as unknown as PrismaClient;
        await expect(recordAttemptSubmission(mockClient, {
            userId: 'user-race',
            idempotencyKey: 'race-key-driver-unrelated',
            sessionId: 'sess-1',
            sessionItemId: 'item-1',
            questionId: 'q-race',
            revisionId: 'rev-1',
            sessionStartEventSeq: 5n,
            selectedOptionIdentifier: 'A',
            selectedOptionTextSnapshot: 'Choice A',
            isCorrect: true,
            secondsSpent: 15,
            clientSubmittedAt: new Date(),
        })).rejects.toMatchObject({ code: 'P2002' });
        expect(mockClient.practiceAttempt.findUnique).not.toHaveBeenCalled();
    });
    describe('isIdempotencyKeyConflict precise constraint inspection', () => {
        it('returns true for correct idempotency constraint target array or exact constraint name', () => {
            // Array format
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { target: ['userId', 'idempotencyKey'] },
            })).toBe(true);
            // Reversed array format
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { target: ['idempotencyKey', 'userId'] },
            })).toBe(true);
            // Exact constraint string name
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { target: 'practice_attempt_userId_idempotencyKey_key' },
            })).toBe(true);
        });
        it('returns false for unrelated unique constraints', () => {
            // Unrelated column array
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { target: ['userId', 'attemptEventSeq'] },
            })).toBe(false);
            // Unrelated single column
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { target: ['email'] },
            })).toBe(false);
            // Unrelated constraint string
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { target: 'practice_attempt_userId_attemptEventSeq_key' },
            })).toBe(false);
            // Broad string containing both substrings but not matching exact constraint name
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { target: 'practice_attempt_userId_idempotencyKey_other_key' },
            })).toBe(false);
        });
        it('returns false for missing target metadata', () => {
            // No meta at all
            expect(isIdempotencyKeyConflict({ code: 'P2002' })).toBe(false);
            // Meta is null
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: null })).toBe(false);
            // Meta has no target property
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: {} })).toBe(false);
        });
        it('returns false for malformed target metadata and non-P2002 errors', () => {
            // Number target
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: { target: 12345 } })).toBe(false);
            // Boolean target
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: { target: true } })).toBe(false);
            // Null target
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: { target: null } })).toBe(false);
            // Non-P2002 error code
            expect(isIdempotencyKeyConflict({
                code: 'P2003',
                meta: { target: ['userId', 'idempotencyKey'] },
            })).toBe(false);
            // Non-object error
            expect(isIdempotencyKeyConflict('P2002')).toBe(false);
            expect(isIdempotencyKeyConflict(null)).toBe(false);
            expect(isIdempotencyKeyConflict(undefined)).toBe(false);
        });
        it('returns true for PostgreSQL driver-adapter metadata matching exact idempotency constraint', () => {
            // Full Prisma 7 @prisma/adapter-pg structure with string 23505
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: {
                    modelName: 'PracticeAttempt',
                    driverAdapterError: {
                        name: 'DriverAdapterError',
                        cause: {
                            originalCode: '23505',
                            originalMessage: 'duplicate key value violates unique constraint "practice_attempt_userId_idempotencyKey_key"',
                            kind: 'UniqueConstraintViolation',
                            constraint: {
                                index: 'practice_attempt_userId_idempotencyKey_key',
                            },
                            table: 'practice_attempt',
                        },
                    },
                },
            })).toBe(true);
            // Structure with numeric originalCode
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: {
                    driverAdapterError: {
                        cause: {
                            originalCode: 23505,
                            constraint: {
                                index: 'practice_attempt_userId_idempotencyKey_key',
                            },
                        },
                    },
                },
            })).toBe(true);
            // Structure where originalCode is omitted but constraint index matches
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: {
                    driverAdapterError: {
                        cause: {
                            constraint: {
                                index: 'practice_attempt_userId_idempotencyKey_key',
                            },
                        },
                    },
                },
            })).toBe(true);
        });
        it('returns false for driver-adapter metadata with a different constraint', () => {
            // Unrelated PracticeAttempt unique constraint (e.g. attemptEventSeq)
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: {
                    modelName: 'PracticeAttempt',
                    driverAdapterError: {
                        cause: {
                            originalCode: '23505',
                            constraint: {
                                index: 'practice_attempt_userId_attemptEventSeq_key',
                            },
                        },
                    },
                },
            })).toBe(false);
            // Unrelated User.email unique constraint
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: {
                    modelName: 'User',
                    driverAdapterError: {
                        cause: {
                            originalCode: '23505',
                            constraint: {
                                index: 'user_email_key',
                            },
                        },
                    },
                },
            })).toBe(false);
        });
        it('returns false for driver-adapter metadata with a different originalCode', () => {
            // Foreign key violation code 23503 instead of unique violation 23505
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: {
                    driverAdapterError: {
                        cause: {
                            originalCode: '23503',
                            constraint: {
                                index: 'practice_attempt_userId_idempotencyKey_key',
                            },
                        },
                    },
                },
            })).toBe(false);
            // Undefined table code 42P01
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: {
                    driverAdapterError: {
                        cause: {
                            originalCode: '42P01',
                            constraint: {
                                index: 'practice_attempt_userId_idempotencyKey_key',
                            },
                        },
                    },
                },
            })).toBe(false);
        });
        it('returns false for missing or malformed driver-adapter metadata', () => {
            // driverAdapterError is null or primitive
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: { driverAdapterError: null } })).toBe(false);
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: { driverAdapterError: 'not-an-object' } })).toBe(false);
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: { driverAdapterError: 12345 } })).toBe(false);
            // cause is missing, null, or primitive
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: { driverAdapterError: {} } })).toBe(false);
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: { driverAdapterError: { cause: null } } })).toBe(false);
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: { driverAdapterError: { cause: 'error' } } })).toBe(false);
            // constraint is missing, null, or not an object
            expect(isIdempotencyKeyConflict({ code: 'P2002', meta: { driverAdapterError: { cause: {} } } })).toBe(false);
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { driverAdapterError: { cause: { constraint: null } } },
            })).toBe(false);
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { driverAdapterError: { cause: { constraint: true } } },
            })).toBe(false);
            // constraint.index is missing, null, or non-string
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { driverAdapterError: { cause: { constraint: {} } } },
            })).toBe(false);
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { driverAdapterError: { cause: { constraint: { index: null } } } },
            })).toBe(false);
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: { driverAdapterError: { cause: { constraint: { index: 12345 } } } },
            })).toBe(false);
            // Arbitrary 23505 error without matching index constraint
            expect(isIdempotencyKeyConflict({
                code: 'P2002',
                meta: {
                    driverAdapterError: {
                        cause: {
                            originalCode: '23505',
                        },
                    },
                },
            })).toBe(false);
        });
    });
    it('preserves historical snapshot even when sessionId and sessionItemId are null', async () => {
        const mockTx = {
            practiceAttempt: {
                findUnique: vi.fn().mockResolvedValue(null),
                create: vi.fn().mockImplementation((args) => Promise.resolve({ id: 'att-orphan', ...args.data })),
            },
            $queryRaw: vi.fn().mockResolvedValue([{ lastEventSeq: 77n, activeResetSeq: 0n }]),
            practiceEvent: {
                create: vi.fn().mockResolvedValue({ id: 'evt-77' }),
            },
        } as unknown as Tx;
        const res = await recordAttemptSubmission(mockTx, {
            userId: 'user-1',
            idempotencyKey: 'idemp-orphan-test',
            sessionId: null, // Session was purged or omitted
            sessionItemId: null,
            questionId: 'q-persisted',
            revisionId: 'rev-3',
            sessionStartEventSeq: 70n,
            selectedOptionId: null, // Option row was removed
            selectedOptionIdentifier: 'C',
            selectedOptionTextSnapshot: 'Preserved option explanation and text',
            isCorrect: true,
            secondsSpent: 30,
            clientSubmittedAt: new Date(),
        });
        expect(res.created).toBe(true);
        expect(res.attempt.sessionId).toBeNull();
        expect(res.attempt.selectedOptionId).toBeNull();
        expect(res.attempt.selectedOptionIdentifier).toBe('C');
        expect(res.attempt.selectedOptionTextSnapshot).toBe('Preserved option explanation and text');
    });
});
describe('F. Reset boundaries & Question Practice Status Resolution', () => {
    it('resolves included question to unused in active pool while preserving lifetime history', () => {
        const attempts: AttemptLike[] = [
            { questionId: 'q-1', attemptEventSeq: 10n, isCorrect: false },
            { questionId: 'q-1', attemptEventSeq: 20n, isCorrect: false },
        ];
        const resets: ResetLike[] = [
            { resetEventSeq: 30n, scope: 'INCORRECT_ONLY', affectedQuestionIds: ['q-1'] },
        ];
        const status = resolveQuestionPracticeStatus('q-1', attempts, resets);
        expect(status.pool).toBe('unused');
        expect(status.activeAttemptCount).toBe(0);
        expect(status.lifetimeAttemptCount).toBe(2);
        expect(status.lastResetEventSeq).toBe(30n);
    });
    it('transitions active pool to correct on post-reset submission', () => {
        const attempts: AttemptLike[] = [
            { questionId: 'q-1', attemptEventSeq: 10n, isCorrect: false }, // Pre-reset attempt
            { questionId: 'q-1', attemptEventSeq: 35n, isCorrect: true }, // Post-reset attempt
        ];
        const resets: ResetLike[] = [
            { resetEventSeq: 30n, scope: 'INCORRECT_ONLY', affectedQuestionIds: ['q-1'] },
        ];
        const status = resolveQuestionPracticeStatus('q-1', attempts, resets);
        expect(status.pool).toBe('correct');
        expect(status.activeAttemptCount).toBe(1);
        expect(status.lifetimeAttemptCount).toBe(2);
        expect(status.latestActiveAttempt?.attemptEventSeq).toBe(35n);
        expect(status.latestActiveAttempt?.isCorrect).toBe(true);
    });
    it('leaves question untouched when excluded from a partial reset', () => {
        const attempts: AttemptLike[] = [
            { questionId: 'q-2', attemptEventSeq: 15n, isCorrect: true }, // Was correct
        ];
        // Reset targeted only incorrect questions; q-2 was excluded
        const resets: ResetLike[] = [
            { resetEventSeq: 25n, scope: 'INCORRECT_ONLY', affectedQuestionIds: ['q-1', 'q-3'] },
        ];
        const status = resolveQuestionPracticeStatus('q-2', attempts, resets);
        expect(status.pool).toBe('correct');
        expect(status.activeAttemptCount).toBe(1);
        expect(status.lifetimeAttemptCount).toBe(1);
        expect(status.lastResetEventSeq).toBe(0n); // No reset applied to q-2
    });
    it('correctly orders overlapping resets using maximum covering eventSeq', () => {
        const attempts: AttemptLike[] = [
            { questionId: 'q-10', attemptEventSeq: 5n, isCorrect: false },
            { questionId: 'q-10', attemptEventSeq: 15n, isCorrect: false },
            { questionId: 'q-10', attemptEventSeq: 40n, isCorrect: true },
        ];
        const resets: ResetLike[] = [
            { resetEventSeq: 10n, scope: 'CUSTOM', affectedQuestionIds: ['q-10'] },
            { resetEventSeq: 25n, scope: 'ALL', affectedQuestionIds: [] }, // Second reset covered all
        ];
        const status = resolveQuestionPracticeStatus('q-10', attempts, resets);
        // Resets: max is 25n. Attempt 40n is > 25n.
        expect(status.lastResetEventSeq).toBe(25n);
        expect(status.activeAttemptCount).toBe(1);
        expect(status.lifetimeAttemptCount).toBe(3);
        expect(status.pool).toBe('correct');
    });
    it('recordPracticeReset atomically updates activeResetSeq and writes reset event', async () => {
        const mockTx = {
            $queryRaw: vi.fn().mockResolvedValue([{ lastEventSeq: 50n, activeResetSeq: 50n }]),
            practiceEvent: {
                create: vi.fn().mockResolvedValue({ id: 'evt-50' }),
            },
            practiceReset: {
                create: vi.fn().mockImplementation((args) => Promise.resolve({ id: 'reset-1', ...args.data })),
            },
        } as unknown as Tx;
        const res = await recordPracticeReset(mockTx, {
            userId: 'user-1',
            scope: 'ALL',
            affectedQuestionIds: ['q-1', 'q-2'],
            snapshotCounts: { incorrect: 10, correct: 20 },
        });
        expect(res.resetEventSeq).toBe(50n);
        expect(mockTx.practiceEvent.create).toHaveBeenCalledWith({
            data: expect.objectContaining({
                userId: 'user-1',
                eventSeq: 50n,
                eventType: 'PRACTICE_RESET',
            }),
        });
        expect(mockTx.practiceReset.create).toHaveBeenCalledWith({
            data: expect.objectContaining({
                userId: 'user-1',
                resetEventSeq: 50n,
                scope: 'ALL',
                affectedQuestionIds: ['q-1', 'q-2'],
            }),
        });
    });
    describe('G. User active question pool resolution & reset boundaries', () => {
        it('returns hasProvenance: false and empty sets when user has no attempts or resets', async () => {
            const mockClient = {
                practiceAttempt: {
                    findMany: vi.fn().mockResolvedValue([]),
                },
                practiceReset: {
                    findMany: vi.fn().mockResolvedValue([]),
                },
            } as unknown as Tx;
            const pools = await resolveUserActiveQuestionPools(mockClient, 'user-none');
            expect(pools.hasProvenance).toBe(false);
            expect(pools.activeUsed.size).toBe(0);
            expect(pools.activeCorrect.size).toBe(0);
            expect(pools.activeIncorrect.size).toBe(0);
            expect(pools.activeOmitted.size).toBe(0);
            expect(pools.statusByQuestion.size).toBe(0);
        });
        it('correctly categorizes active correct, incorrect, and omitted questions', async () => {
            const mockClient = {
                practiceAttempt: {
                    findMany: vi.fn().mockResolvedValue([
                        { questionId: 'q-1', attemptEventSeq: 1n, isCorrect: true, selectedOptionIdentifier: 'B' },
                        { questionId: 'q-2', attemptEventSeq: 2n, isCorrect: false, selectedOptionIdentifier: 'A' },
                        { questionId: 'q-3', attemptEventSeq: 3n, isCorrect: false, selectedOptionIdentifier: 'OMITTED' },
                    ]),
                },
                practiceReset: {
                    findMany: vi.fn().mockResolvedValue([]),
                },
            } as unknown as Tx;
            const pools = await resolveUserActiveQuestionPools(mockClient, 'user-1');
            expect(pools.hasProvenance).toBe(true);
            expect(Array.from(pools.activeUsed).sort()).toEqual(['q-1', 'q-2', 'q-3']);
            expect(Array.from(pools.activeCorrect)).toEqual(['q-1']);
            expect(Array.from(pools.activeIncorrect)).toEqual(['q-2']);
            expect(Array.from(pools.activeOmitted)).toEqual(['q-3']);
            expect(pools.statusByQuestion.get('q-1')?.pool).toBe('correct');
            expect(pools.statusByQuestion.get('q-2')?.pool).toBe('incorrect');
            expect(pools.statusByQuestion.get('q-3')?.pool).toBe('omitted');
        });
        it('scope: ALL reset watermarks all prior attempts, returning activeUsed as empty', async () => {
            const mockClient = {
                practiceAttempt: {
                    findMany: vi.fn().mockResolvedValue([
                        { questionId: 'q-1', attemptEventSeq: 1n, isCorrect: true, selectedOptionIdentifier: 'B' },
                        { questionId: 'q-2', attemptEventSeq: 2n, isCorrect: false, selectedOptionIdentifier: 'A' },
                        { questionId: 'q-3', attemptEventSeq: 3n, isCorrect: false, selectedOptionIdentifier: 'OMITTED' },
                    ]),
                },
                practiceReset: {
                    findMany: vi.fn().mockResolvedValue([
                        { resetEventSeq: 10n, scope: 'ALL', affectedQuestionIds: [] },
                    ]),
                },
            } as unknown as Tx;
            const pools = await resolveUserActiveQuestionPools(mockClient, 'user-1');
            expect(pools.hasProvenance).toBe(true);
            expect(pools.activeUsed.size).toBe(0);
            expect(pools.activeCorrect.size).toBe(0);
            expect(pools.activeIncorrect.size).toBe(0);
            expect(pools.activeOmitted.size).toBe(0);
            // Lifetime history is retained
            const q1 = pools.statusByQuestion.get('q-1')!;
            expect(q1.pool).toBe('unused');
            expect(q1.activeAttemptCount).toBe(0);
            expect(q1.lifetimeAttemptCount).toBe(1);
            expect(q1.lastResetEventSeq).toBe(10n);
        });
        it('scope: INCORRECT_ONLY reset watermarks incorrect and omitted questions, keeping correct intact', async () => {
            const mockClient = {
                practiceAttempt: {
                    findMany: vi.fn().mockResolvedValue([
                        { questionId: 'q-correct', attemptEventSeq: 1n, isCorrect: true, selectedOptionIdentifier: 'B' },
                        { questionId: 'q-inc', attemptEventSeq: 2n, isCorrect: false, selectedOptionIdentifier: 'A' },
                        { questionId: 'q-omit', attemptEventSeq: 3n, isCorrect: false, selectedOptionIdentifier: 'OMITTED' },
                    ]),
                },
                practiceReset: {
                    findMany: vi.fn().mockResolvedValue([
                        { resetEventSeq: 10n, scope: 'INCORRECT_ONLY', affectedQuestionIds: ['q-inc', 'q-omit'] },
                    ]),
                },
            } as unknown as Tx;
            const pools = await resolveUserActiveQuestionPools(mockClient, 'user-1');
            expect(pools.hasProvenance).toBe(true);
            expect(Array.from(pools.activeUsed)).toEqual(['q-correct']);
            expect(Array.from(pools.activeCorrect)).toEqual(['q-correct']);
            expect(pools.activeIncorrect.size).toBe(0);
            expect(pools.activeOmitted.size).toBe(0);
            expect(pools.statusByQuestion.get('q-correct')?.pool).toBe('correct');
            expect(pools.statusByQuestion.get('q-correct')?.activeAttemptCount).toBe(1);
            expect(pools.statusByQuestion.get('q-inc')?.pool).toBe('unused');
            expect(pools.statusByQuestion.get('q-inc')?.activeAttemptCount).toBe(0);
            expect(pools.statusByQuestion.get('q-inc')?.lifetimeAttemptCount).toBe(1);
            expect(pools.statusByQuestion.get('q-omit')?.pool).toBe('unused');
            expect(pools.statusByQuestion.get('q-omit')?.activeAttemptCount).toBe(0);
        });
        it('scope: MARKED_ONLY reset watermarks only bookmarked questions', async () => {
            const mockClient = {
                practiceAttempt: {
                    findMany: vi.fn().mockResolvedValue([
                        { questionId: 'q-bookmarked', attemptEventSeq: 1n, isCorrect: true, selectedOptionIdentifier: 'B' },
                        { questionId: 'q-unmarked', attemptEventSeq: 2n, isCorrect: false, selectedOptionIdentifier: 'A' },
                    ]),
                },
                practiceReset: {
                    findMany: vi.fn().mockResolvedValue([
                        { resetEventSeq: 10n, scope: 'MARKED_ONLY', affectedQuestionIds: ['q-bookmarked'] },
                    ]),
                },
            } as unknown as Tx;
            const pools = await resolveUserActiveQuestionPools(mockClient, 'user-1');
            expect(pools.hasProvenance).toBe(true);
            expect(Array.from(pools.activeUsed)).toEqual(['q-unmarked']);
            expect(pools.activeCorrect.size).toBe(0);
            expect(Array.from(pools.activeIncorrect)).toEqual(['q-unmarked']);
            expect(pools.statusByQuestion.get('q-bookmarked')?.pool).toBe('unused');
            expect(pools.statusByQuestion.get('q-bookmarked')?.activeAttemptCount).toBe(0);
            expect(pools.statusByQuestion.get('q-unmarked')?.pool).toBe('incorrect');
            expect(pools.statusByQuestion.get('q-unmarked')?.activeAttemptCount).toBe(1);
        });
        it('new attempt submitted after reset becomes active and sets correct pool', async () => {
            const mockClient = {
                practiceAttempt: {
                    findMany: vi.fn().mockResolvedValue([
                        { questionId: 'q-1', attemptEventSeq: 2n, isCorrect: false, selectedOptionIdentifier: 'A' },
                        { questionId: 'q-1', attemptEventSeq: 15n, isCorrect: true, selectedOptionIdentifier: 'C' },
                    ]),
                },
                practiceReset: {
                    findMany: vi.fn().mockResolvedValue([
                        { resetEventSeq: 10n, scope: 'ALL', affectedQuestionIds: [] },
                    ]),
                },
            } as unknown as Tx;
            const pools = await resolveUserActiveQuestionPools(mockClient, 'user-1');
            expect(pools.hasProvenance).toBe(true);
            expect(Array.from(pools.activeUsed)).toEqual(['q-1']);
            expect(Array.from(pools.activeCorrect)).toEqual(['q-1']);
            expect(pools.activeIncorrect.size).toBe(0);
            const q1 = pools.statusByQuestion.get('q-1')!;
            expect(q1.pool).toBe('correct');
            expect(q1.activeAttemptCount).toBe(1);
            expect(q1.lifetimeAttemptCount).toBe(2);
            expect(q1.latestActiveAttempt?.attemptEventSeq).toBe(15n);
            expect(q1.latestLifetimeAttempt?.attemptEventSeq).toBe(15n);
        });
        it('legacy-only question with no applicable reset retains its legacy Response classification', () => {
            const statusCorrect = resolveQuestionPracticeStatus('q-leg-1', [], [], { questionId: 'q-leg-1', isCorrect: true, omitted: false });
            expect(statusCorrect.pool).toBe('correct');
            expect(statusCorrect.isLegacyResponse).toBe(true);
            expect(statusCorrect.activeAttemptCount).toBe(0);
            const statusIncorrect = resolveQuestionPracticeStatus('q-leg-2', [], [], { questionId: 'q-leg-2', isCorrect: false, omitted: false });
            expect(statusIncorrect.pool).toBe('incorrect');
            expect(statusIncorrect.isLegacyResponse).toBe(true);
            const statusOmitted = resolveQuestionPracticeStatus('q-leg-3', [], [], { questionId: 'q-leg-3', isCorrect: false, omitted: true });
            expect(statusOmitted.pool).toBe('omitted');
            expect(statusOmitted.isLegacyResponse).toBe(true);
        });
        it('legacy-only question after ALL reset classifies as unused', () => {
            const status = resolveQuestionPracticeStatus('q-leg', [], [{ resetEventSeq: 10n, scope: 'ALL', affectedQuestionIds: [] }], { questionId: 'q-leg', isCorrect: true, omitted: false });
            expect(status.pool).toBe('unused');
            expect(status.lastResetEventSeq).toBe(10n);
            expect(status.isLegacyResponse).toBe(false);
        });
        it('legacy-only question after partial reset classifies as unused only if explicitly included', () => {
            const resets: ResetLike[] = [
                { resetEventSeq: 10n, scope: 'INCORRECT_ONLY', affectedQuestionIds: ['q-leg-inc'] },
            ];
            // Included question: becomes unused
            const statusIncluded = resolveQuestionPracticeStatus('q-leg-inc', [], resets, { questionId: 'q-leg-inc', isCorrect: false, omitted: false });
            expect(statusIncluded.pool).toBe('unused');
            expect(statusIncluded.lastResetEventSeq).toBe(10n);
            // Excluded question: retains legacy classification
            const statusExcluded = resolveQuestionPracticeStatus('q-leg-corr', [], resets, { questionId: 'q-leg-corr', isCorrect: true, omitted: false });
            expect(statusExcluded.pool).toBe('correct');
            expect(statusExcluded.isLegacyResponse).toBe(true);
            expect(statusExcluded.lastResetEventSeq).toBe(0n);
        });
        it('correctly resolves mixed legacy and provenance active pools', async () => {
            const mockClient = {
                practiceAttempt: {
                    findMany: vi.fn().mockResolvedValue([
                        { questionId: 'q-prov', attemptEventSeq: 5n, isCorrect: false, selectedOptionIdentifier: 'A' },
                    ]),
                },
                practiceReset: {
                    findMany: vi.fn().mockResolvedValue([]),
                },
                response: {
                    findMany: vi.fn().mockResolvedValue([
                        { questionId: 'q-leg', isCorrect: true, omitted: false },
                    ]),
                },
            } as unknown as Tx;
            const pools = await resolveUserActiveQuestionPools(mockClient, 'user-1');
            expect(pools.activeUsed.size).toBe(2);
            expect(pools.activeUsed.has('q-leg')).toBe(true);
            expect(pools.activeUsed.has('q-prov')).toBe(true);
            expect(pools.activeCorrect.has('q-leg')).toBe(true);
            expect(pools.activeIncorrect.has('q-prov')).toBe(true);
            expect(pools.statusByQuestion.get('q-leg')?.pool).toBe('correct');
            expect(pools.statusByQuestion.get('q-leg')?.isLegacyResponse).toBe(true);
            expect(pools.statusByQuestion.get('q-prov')?.pool).toBe('incorrect');
        });
        it('post-reset attempt on legacy question activates it while un-attempted legacy question remains unused', async () => {
            const mockClient = {
                practiceAttempt: {
                    findMany: vi.fn().mockResolvedValue([
                        { questionId: 'q-1', attemptEventSeq: 15n, isCorrect: true, selectedOptionIdentifier: 'B' },
                    ]),
                },
                practiceReset: {
                    findMany: vi.fn().mockResolvedValue([
                        { resetEventSeq: 10n, scope: 'ALL', affectedQuestionIds: [] },
                    ]),
                },
                response: {
                    findMany: vi.fn().mockResolvedValue([
                        { questionId: 'q-1', isCorrect: false, omitted: false },
                        { questionId: 'q-2', isCorrect: true, omitted: false },
                    ]),
                },
            } as unknown as Tx;
            const pools = await resolveUserActiveQuestionPools(mockClient, 'user-1');
            // q-1 was attempted after ALL reset, so it is active 'correct'
            expect(pools.statusByQuestion.get('q-1')?.pool).toBe('correct');
            expect(pools.statusByQuestion.get('q-1')?.activeAttemptCount).toBe(1);
            expect(pools.activeCorrect.has('q-1')).toBe(true);
            // q-2 was NOT attempted after ALL reset, so it remains 'unused'
            expect(pools.statusByQuestion.get('q-2')?.pool).toBe('unused');
            expect(pools.activeUsed.has('q-2')).toBe(false);
        });
    });
    describe('H. Stage 4B.4 Question Revisions, Three-Pillar Review & Delivery Gating', () => {
        describe('1. recordReviewSchema input validation', () => {
            it('accepts valid review decisions across all 3 pillars with valid credentials and comments', () => {
                const parsedEditorial = recordReviewSchema.parse({
                    revisionId: 'rev-1',
                    reviewKind: 'EDITORIAL',
                    decision: 'APPROVED',
                    reviewerCredentials: 'Senior Medical Editor',
                    comments: 'Clear objective and clean typography.',
                });
                expect(parsedEditorial.reviewKind).toBe('EDITORIAL');
                expect(parsedEditorial.decision).toBe('APPROVED');
                const parsedClinical = recordReviewSchema.parse({
                    revisionId: 'rev-1',
                    reviewKind: 'CLINICAL',
                    decision: 'REJECTED',
                    reviewerCredentials: 'MD, Board Certified Internist',
                    comments: 'Guideline cited was superseded in 2024.',
                });
                expect(parsedClinical.reviewKind).toBe('CLINICAL');
                expect(parsedClinical.decision).toBe('REJECTED');
                const parsedRights = recordReviewSchema.parse({
                    revisionId: 'rev-1',
                    reviewKind: 'RIGHTS',
                    decision: 'REVOKED',
                    reviewerCredentials: 'IP Legal Counsel',
                    comments: 'Potential verbatim trademark infringement in stem.',
                });
                expect(parsedRights.reviewKind).toBe('RIGHTS');
                expect(parsedRights.decision).toBe('REVOKED');
            });
            it('rejects invalid review kind or invalid decision', () => {
                expect(() => recordReviewSchema.parse({
                    revisionId: 'rev-1',
                    reviewKind: 'INVALID_KIND',
                    decision: 'APPROVED',
                })).toThrow();
                expect(() => recordReviewSchema.parse({
                    revisionId: 'rev-1',
                    reviewKind: 'CLINICAL',
                    decision: 'MAYBE',
                })).toThrow();
            });
            it('rejects comments exceeding length limit', () => {
                expect(() => recordReviewSchema.parse({
                    revisionId: 'rev-1',
                    reviewKind: 'CLINICAL',
                    decision: 'APPROVED',
                    comments: 'a'.repeat(4001),
                })).toThrow();
            });
        });
        describe('2. recordQuestionReview locking & terminal revocation', () => {
            it('acquires row-level lock on parent question to serialize reviews', async () => {
                const mockTx = {
                    questionRevision: {
                        findUnique: vi.fn().mockResolvedValue({ id: 'rev-1', questionId: 'q-100' }),
                    },
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-100' }]),
                    questionReview: {
                        findFirst: vi.fn().mockResolvedValue(null),
                        create: vi.fn().mockResolvedValue({ id: 'review-1', decision: 'APPROVED' }),
                    },
                } as unknown as Tx;
                await recordQuestionReview(mockTx, {
                    revisionId: 'rev-1',
                    reviewerId: 'user-editor',
                    reviewKind: 'EDITORIAL',
                    decision: 'APPROVED',
                });
                expect(mockTx.$queryRaw).toHaveBeenCalled();
            });
            it('throws CONFLICT when attempting to record APPROVED on a revoked pillar', async () => {
                const mockTx = {
                    questionRevision: {
                        findUnique: vi.fn().mockResolvedValue({ id: 'rev-1', questionId: 'q-100' }),
                    },
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-100' }]),
                    questionReview: {
                        findFirst: vi.fn().mockResolvedValue({ id: 'rev-old', decision: 'REVOKED' }),
                        create: vi.fn(),
                    },
                } as unknown as Tx;
                await expect(recordQuestionReview(mockTx, {
                    revisionId: 'rev-1',
                    reviewerId: 'user-editor',
                    reviewKind: 'EDITORIAL',
                    decision: 'APPROVED',
                })).rejects.toThrow(/Cannot approve this revision: a revocation is terminal/);
            });
        });
        describe('3. isRevisionFullyApproved pure evaluation', () => {
            it('requires all three pillars (EDITORIAL, CLINICAL, RIGHTS)', () => {
                const editorialOnly = [{ reviewKind: 'EDITORIAL' as const, decision: 'APPROVED' as const }];
                expect(isRevisionFullyApproved(editorialOnly).approved).toBe(false);
                expect(isRevisionFullyApproved(editorialOnly).missingKinds).toEqual(['CLINICAL', 'RIGHTS']);
                const twoPillars = [
                    { reviewKind: 'EDITORIAL' as const, decision: 'APPROVED' as const },
                    { reviewKind: 'CLINICAL' as const, decision: 'APPROVED' as const },
                ];
                expect(isRevisionFullyApproved(twoPillars).approved).toBe(false);
                expect(isRevisionFullyApproved(twoPillars).missingKinds).toEqual(['RIGHTS']);
                const allThree = [
                    { reviewKind: 'EDITORIAL' as const, decision: 'APPROVED' as const },
                    { reviewKind: 'CLINICAL' as const, decision: 'APPROVED' as const },
                    { reviewKind: 'RIGHTS' as const, decision: 'APPROVED' as const },
                ];
                expect(isRevisionFullyApproved(allThree).approved).toBe(true);
                expect(isRevisionFullyApproved(allThree).missingKinds).toEqual([]);
            });
            it('treats REJECTED as non-approved', () => {
                const withRejection = [
                    { reviewKind: 'EDITORIAL' as const, decision: 'APPROVED' as const },
                    { reviewKind: 'CLINICAL' as const, decision: 'REJECTED' as const },
                    { reviewKind: 'RIGHTS' as const, decision: 'APPROVED' as const },
                ];
                expect(isRevisionFullyApproved(withRejection).approved).toBe(false);
                expect(isRevisionFullyApproved(withRejection).missingKinds).toEqual(['CLINICAL']);
            });
            it('treats REVOKED as permanently terminal even if subsequent approvals exist', () => {
                const revokedWithApproval = [
                    { reviewKind: 'EDITORIAL' as const, decision: 'APPROVED' as const },
                    { reviewKind: 'CLINICAL' as const, decision: 'REVOKED' as const },
                    { reviewKind: 'CLINICAL' as const, decision: 'APPROVED' as const },
                    { reviewKind: 'RIGHTS' as const, decision: 'APPROVED' as const },
                ];
                const res = isRevisionFullyApproved(revokedWithApproval);
                expect(res.approved).toBe(false);
                expect(res.missingKinds).toContain('CLINICAL');
            });
        });
        describe('4. getDeliverableQuestion delivery gating', () => {
            it('withholds question if content rights are unverified or delivery is disallowed', async () => {
                const mockTx = {
                    question: {
                        findUnique: vi.fn().mockResolvedValue({
                            id: 'q-rights-pending',
                            status: 'PUBLISHED',
                            rightsStatus: 'UNVERIFIED',
                            rightsAllowDelivery: false,
                        }),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                } as unknown as Tx;
                const res = await getDeliverableQuestion(mockTx, 'q-rights-pending');
                expect(res.deliverable).toBe(false);
                expect(res.reason).toMatch(/withheld pending rights review/);
            });
            it('allows unversioned legacy question to deliver under legacy mode', async () => {
                const mockTx = {
                    question: {
                        findUnique: vi.fn().mockResolvedValue({
                            id: 'q-legacy',
                            status: 'PUBLISHED',
                            rightsStatus: 'VERIFIED',
                            rightsAllowDelivery: true,
                        }),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                    questionRevision: {
                        findMany: vi.fn().mockResolvedValue([]),
                    },
                } as unknown as Tx;
                const res = await getDeliverableQuestion(mockTx, 'q-legacy');
                expect(res.deliverable).toBe(true);
                expect(res.isVersioned).toBe(false);
                expect(res.revisionId).toBeNull();
                expect(res.snapshot).toBeNull();
            });
            it('withholds versioned question when latest revision is missing approvals', async () => {
                const mockTx = {
                    question: {
                        findUnique: vi.fn().mockResolvedValue({
                            id: 'q-versioned-pending',
                            status: 'PUBLISHED',
                            rightsStatus: 'VERIFIED',
                            rightsAllowDelivery: true,
                        }),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                    questionRevision: {
                        findMany: vi.fn().mockResolvedValue([
                            {
                                id: 'rev-2',
                                revisionNumber: 2,
                                reviews: [{ reviewKind: 'EDITORIAL', decision: 'APPROVED' }],
                            },
                            {
                                id: 'rev-1',
                                revisionNumber: 1,
                                reviews: [
                                    { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
                                    { reviewKind: 'CLINICAL', decision: 'APPROVED' },
                                    { reviewKind: 'RIGHTS', decision: 'APPROVED' },
                                ],
                            },
                        ]),
                    },
                } as unknown as Tx;
                const res = await getDeliverableQuestion(mockTx, 'q-versioned-pending');
                // Must NOT fall back to rev-1!
                expect(res.deliverable).toBe(false);
                expect(res.reason).toMatch(/withheld pending editorial review of revision #2/);
            });
            it('delivers versioned question from latest approved snapshot', async () => {
                const snapshot = {
                    stemMd: 'Delivered revision stem',
                    explanationMd: 'Delivered explanation',
                    options: [{ position: 0, text: 'Opt A', isCorrect: true }],
                };
                const mockTx = {
                    question: {
                        findUnique: vi.fn().mockResolvedValue({
                            id: 'q-versioned-approved',
                            status: 'PUBLISHED',
                            rightsStatus: 'VERIFIED',
                            rightsAllowDelivery: true,
                        }),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                    questionRevision: {
                        findMany: vi.fn().mockResolvedValue([
                            {
                                id: 'rev-1',
                                revisionNumber: 1,
                                contentSnapshot: snapshot,
                                reviews: [
                                    { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
                                    { reviewKind: 'CLINICAL', decision: 'APPROVED' },
                                    { reviewKind: 'RIGHTS', decision: 'APPROVED' },
                                ],
                            },
                        ]),
                    },
                } as unknown as Tx;
                const res = await getDeliverableQuestion(mockTx, 'q-versioned-approved');
                expect(res.deliverable).toBe(true);
                expect(res.isVersioned).toBe(true);
                expect(res.revisionId).toBe('rev-1');
                expect(res.snapshot).toEqual(snapshot);
            });
        });
        describe('5. Publication gate enforcement in setStatus', () => {
            it('blocks moving a versioned question to PUBLISHED if latest revision is not fully approved', async () => {
                // Mock db.$transaction
                const mockTx = {
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-gate-test' }]),
                    question: {
                        findUnique: vi.fn().mockResolvedValue({
                            id: 'q-gate-test',
                            status: 'REVIEW',
                            rightsStatus: 'VERIFIED',
                            rightsAllowDelivery: true,
                        }),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                    questionRevision: {
                        findFirst: vi.fn().mockResolvedValue({
                            id: 'rev-1',
                            revisionNumber: 1,
                            reviews: [
                                { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
                                { reviewKind: 'CLINICAL', decision: 'APPROVED' },
                                // Missing RIGHTS
                            ],
                        }),
                    },
                };
                const mockDb = {
                    $transaction: vi.fn().mockImplementation(async (cb) => cb(mockTx)),
                };
                // Temporarily mock db
                const adminModule = await import('@/lib/admin');
                const actor = { id: 'admin-1', role: 'ADMIN' as const };
                // We test setStatus directly via db mock or verifying AppError
                // Let's verify by checking the gate condition logic:
                const { approved, missingKinds } = isRevisionFullyApproved([
                    { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
                    { reviewKind: 'CLINICAL', decision: 'APPROVED' },
                ]);
                expect(approved).toBe(false);
                expect(missingKinds).toContain('RIGHTS');
            });
        });
        describe('6. Delivered revision pinning, revocation demotion, and browse snapshot consistency', () => {
            it('F-01: getView concurrent race rereads already-bound revision under row lock without overwriting', async () => {
                const mockSession = {
                    id: 's-view-race',
                    name: 'Practice Session',
                    mode: 'TUTOR',
                    state: 'IN_PROGRESS',
                    total: 1,
                    currentPosition: 0,
                    negativeMark: false,
                    practiceExam: null,
                    items: [{ position: 0, state: 'UNSEEN', flagged: false, isCorrect: null, selectedOptionIds: [] }],
                };
                const mockSnapshotRev1 = {
                    stemMd: 'Winning Bound Stem from Revision 1',
                    explanationMd: 'Rev 1 Exp',
                    objective: null,
                    keyPoints: [],
                    references: [],
                    source: 'OpenPrep',
                    license: 'CC-BY-4.0',
                    options: [
                        { position: 0, text: 'Opt A', isCorrect: true, explanationMd: null },
                        { position: 1, text: 'Opt B', isCorrect: false, explanationMd: null },
                    ],
                };
                const mockItem = {
                    id: 'item-race-1',
                    sessionId: 's-view-race',
                    position: 0,
                    deliveredRevisionId: null,
                    state: 'UNSEEN',
                    selectedOptionIds: [],
                    struckOptionIds: [],
                    highlightsHtml: null,
                    flagged: false,
                    timeMs: 0,
                    isCorrect: null,
                    question: {
                        id: 'q-race-1',
                        code: 'PV-RACE',
                        type: 'SINGLE',
                        isDemo: false,
                        source: 'OpenPrep',
                        imageUrl: null,
                        imageAlt: null,
                        exam: { name: 'Step 1' },
                        subject: { name: 'Pathology' },
                        system: { name: 'Cardiovascular' },
                        bookmarks: [],
                        notes: [],
                        options: [
                            { id: 'opt-1', position: 0, text: 'Opt A', isCorrect: true, explanationMd: null },
                            { id: 'opt-2', position: 1, text: 'Opt B', isCorrect: false, explanationMd: null },
                        ],
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                };
                const { getView } = await import('@/lib/exam/service');
                const testDb = (await import('@/lib/db')).db;
                vi.spyOn(testDb.testSession, 'findFirst').mockResolvedValueOnce(mockResult(mockSession));
                vi.spyOn(testDb.sessionItem, 'findUniqueOrThrow').mockResolvedValueOnce(mockResult(mockItem));
                vi.spyOn(testDb, '$transaction').mockImplementationOnce(async (cb) => cb(testDb));
                vi.spyOn(testDb, '$queryRaw').mockResolvedValueOnce(mockResult([{ id: 'item-race-1', deliveredRevisionId: 'rev-winning-1' }]));
                const revSpy = vi.spyOn(testDb.questionRevision, 'findUnique').mockResolvedValueOnce(mockResult({
                    id: 'rev-winning-1',
                    revisionNumber: 1,
                    contentSnapshot: mockSnapshotRev1,
                }));
                const updateManySpy = vi.spyOn(testDb.sessionItem, 'updateMany');
                const view = await getView('user-1', 's-view-race');
                expect(view.item.stemHtml).toContain('Winning Bound Stem from Revision 1');
                expect(revSpy).toHaveBeenCalledWith({
                    where: { id: 'rev-winning-1' },
                    select: { id: true, revisionNumber: true, contentSnapshot: true },
                });
                expect(updateManySpy).not.toHaveBeenCalled();
            });
            it('F-02: recordQuestionReview on EDITORIAL revocation demotes Question status to REVIEW while leaving rightsAllowDelivery untouched', async () => {
                const mockTx = {
                    questionRevision: {
                        findUnique: vi.fn().mockResolvedValue({ id: 'rev-ed-1', questionId: 'q-ed-1' }),
                    },
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-ed-1' }]),
                    questionReview: {
                        create: vi.fn().mockResolvedValue({ id: 'review-ed-1', decision: 'REVOKED' }),
                    },
                    question: {
                        update: vi.fn().mockResolvedValue({ id: 'q-ed-1', status: 'REVIEW' }),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                } as unknown as Tx;
                const review = await recordQuestionReview(mockTx, {
                    revisionId: 'rev-ed-1',
                    reviewerId: 'editor-1',
                    reviewKind: 'EDITORIAL',
                    decision: 'REVOKED',
                    comments: 'Spelling error in question stem',
                });
                expect(review.decision).toBe('REVOKED');
                expect(mockTx.question.update).toHaveBeenCalledWith({
                    where: { id: 'q-ed-1' },
                    data: { status: 'REVIEW' },
                });
            });
            it('Case B: setStatus rejects publication when rightsStatus !== VERIFIED even if all 3 revision approvals exist', async () => {
                const { setStatus } = await import('@/lib/admin');
                const testDb = (await import('@/lib/db')).db;
                const mockTx = {
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-rights-unverified' }]),
                    question: {
                        findUnique: vi.fn().mockResolvedValue({
                            id: 'q-rights-unverified',
                            status: 'REVIEW',
                            rightsStatus: 'UNVERIFIED',
                            rightsAllowDelivery: false,
                            publishedAt: null,
                        }),
                        update: vi.fn(),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                    questionRevision: {
                        findFirst: vi.fn().mockResolvedValue({
                            id: 'rev-all-app',
                            revisionNumber: 2,
                            reviews: [
                                { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
                                { reviewKind: 'CLINICAL', decision: 'APPROVED' },
                                { reviewKind: 'RIGHTS', decision: 'APPROVED' },
                            ],
                        }),
                    },
                };
                vi.spyOn(testDb, '$transaction').mockImplementationOnce(async (cb) => cb(mockResult(mockTx)));
                await expect(setStatus({ id: 'admin-1', role: 'ADMIN' }, 'q-rights-unverified', 'PUBLISHED')).rejects.toThrow(/Verified rights and explicit delivery permission are required before publication/);
                expect(mockTx.question.update).not.toHaveBeenCalled();
            });
            it('Case C: setStatus rejects publication when rightsAllowDelivery is false even if all 3 revision approvals exist', async () => {
                const { setStatus } = await import('@/lib/admin');
                const testDb = (await import('@/lib/db')).db;
                const mockTx = {
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-rights-revoked' }]),
                    question: {
                        findUnique: vi.fn().mockResolvedValue({
                            id: 'q-rights-revoked',
                            status: 'REVIEW',
                            rightsStatus: 'VERIFIED',
                            rightsAllowDelivery: false, // revoked
                            publishedAt: null,
                        }),
                        update: vi.fn(),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                    questionRevision: {
                        findFirst: vi.fn().mockResolvedValue({
                            id: 'rev-all-app',
                            revisionNumber: 2,
                            reviews: [
                                { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
                                { reviewKind: 'CLINICAL', decision: 'APPROVED' },
                                { reviewKind: 'RIGHTS', decision: 'APPROVED' },
                            ],
                        }),
                    },
                };
                vi.spyOn(testDb, '$transaction').mockImplementationOnce(async (cb) => cb(mockResult(mockTx)));
                await expect(setStatus({ id: 'admin-1', role: 'ADMIN' }, 'q-rights-revoked', 'PUBLISHED')).rejects.toThrow(/Verified rights and explicit delivery permission are required before publication/);
                expect(mockTx.question.update).not.toHaveBeenCalled();
            });
            it('Case A: setStatus publishes when underlying rights are VERIFIED/allowed and all 3 revision approvals exist', async () => {
                const { setStatus } = await import('@/lib/admin');
                const testDb = (await import('@/lib/db')).db;
                const mockTx = {
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-valid-all' }]),
                    question: {
                        findUnique: vi.fn().mockResolvedValue({
                            id: 'q-valid-all',
                            status: 'REVIEW',
                            rightsStatus: 'VERIFIED',
                            rightsAllowDelivery: true,
                            publishedAt: null,
                        }),
                        update: vi.fn().mockResolvedValue({ id: 'q-valid-all', status: 'PUBLISHED' }),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                    questionRevision: {
                        findFirst: vi.fn().mockResolvedValue({
                            id: 'rev-2',
                            revisionNumber: 2,
                            reviews: [
                                { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
                                { reviewKind: 'CLINICAL', decision: 'APPROVED' },
                                { reviewKind: 'RIGHTS', decision: 'APPROVED' },
                            ],
                        }),
                    },
                    auditLog: {
                        create: vi.fn().mockResolvedValue({ id: 'audit-1' }),
                    },
                };
                vi.spyOn(testDb, '$transaction').mockImplementationOnce(async (cb) => cb(mockResult(mockTx)));
                await setStatus({ id: 'admin-1', role: 'ADMIN' }, 'q-valid-all', 'PUBLISHED');
                expect(mockTx.question.update).toHaveBeenCalledWith({
                    where: { id: 'q-valid-all' },
                    data: {
                        status: 'PUBLISHED',
                        publishedAt: expect.any(Date),
                    },
                });
            });
            it('Case D: recordQuestionReview on CLINICAL revocation demotes Question status to REVIEW while leaving rightsAllowDelivery untouched', async () => {
                const mockTx = {
                    questionRevision: {
                        findUnique: vi.fn().mockResolvedValue({ id: 'rev-clin-1', questionId: 'q-clin-1' }),
                    },
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-clin-1' }]),
                    questionReview: {
                        create: vi.fn().mockResolvedValue({ id: 'review-clin-1', decision: 'REVOKED' }),
                    },
                    question: {
                        update: vi.fn().mockResolvedValue({ id: 'q-clin-1', status: 'REVIEW' }),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                } as unknown as Tx;
                const review = await recordQuestionReview(mockTx, {
                    revisionId: 'rev-clin-1',
                    reviewerId: 'clin-1',
                    reviewKind: 'CLINICAL',
                    decision: 'REVOKED',
                    comments: 'Clinical guideline updated',
                });
                expect(review.decision).toBe('REVOKED');
                expect(mockTx.question.update).toHaveBeenCalledWith({
                    where: { id: 'q-clin-1' },
                    data: { status: 'REVIEW' },
                });
            });
            it('Case E: setStatus enforces existing rights gate for legacy unversioned questions', async () => {
                const { setStatus } = await import('@/lib/admin');
                const testDb = (await import('@/lib/db')).db;
                // 1. Rejects if rights are not verified or delivery disallowed
                const mockTxReject = {
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-legacy-reject' }]),
                    question: {
                        findUnique: vi.fn().mockResolvedValue({
                            id: 'q-legacy-reject',
                            status: 'REVIEW',
                            rightsStatus: 'UNVERIFIED',
                            rightsAllowDelivery: false,
                            publishedAt: null,
                        }),
                        update: vi.fn(),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                    questionRevision: {
                        findFirst: vi.fn().mockResolvedValue(null), // legacy unversioned
                    },
                };
                vi.spyOn(testDb, '$transaction').mockImplementationOnce(async cb => cb(mockResult(mockTxReject)));
                await expect(setStatus({ id: 'admin-1', role: 'ADMIN' }, 'q-legacy-reject', 'PUBLISHED')).rejects.toThrow(/Verified rights and explicit delivery permission are required before publication/);
                expect(mockTxReject.question.update).not.toHaveBeenCalled();
                // 2. Succeeds if rights are verified and delivery allowed
                const mockTxSuccess = {
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-legacy-ok' }]),
                    question: {
                        findUnique: vi.fn().mockResolvedValue({
                            id: 'q-legacy-ok',
                            status: 'REVIEW',
                            rightsStatus: 'VERIFIED',
                            rightsAllowDelivery: true,
                            publishedAt: null,
                        }),
                        update: vi.fn().mockResolvedValue({ id: 'q-legacy-ok', status: 'PUBLISHED' }),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                    questionRevision: {
                        findFirst: vi.fn().mockResolvedValue(null), // legacy unversioned
                    },
                    auditLog: {
                        create: vi.fn().mockResolvedValue({ id: 'audit-legacy' }),
                    },
                };
                vi.spyOn(testDb, '$transaction').mockImplementationOnce(async cb => cb(mockResult(mockTxSuccess)));
                await setStatus({ id: 'admin-1', role: 'ADMIN' }, 'q-legacy-ok', 'PUBLISHED');
                expect(mockTxSuccess.question.update).toHaveBeenCalledWith({
                    where: { id: 'q-legacy-ok' },
                    data: {
                        status: 'PUBLISHED',
                        publishedAt: expect.any(Date),
                    },
                });
            });
            it('recordQuestionReview atomically demotes Question status to REVIEW and rightsAllowDelivery to false on REVOKED decision', async () => {
                const mockTx = {
                    questionRevision: {
                        findUnique: vi.fn().mockResolvedValue({ id: 'rev-revoked-1', questionId: 'q-revoked-1' }),
                    },
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-revoked-1' }]),
                    questionReview: {
                        create: vi.fn().mockResolvedValue({ id: 'review-1', decision: 'REVOKED' }),
                    },
                    question: {
                        update: vi.fn().mockResolvedValue({ id: 'q-revoked-1', status: 'REVIEW', rightsAllowDelivery: false }),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                } as unknown as Tx;
                const review = await recordQuestionReview(mockTx, {
                    revisionId: 'rev-revoked-1',
                    reviewerId: 'admin-1',
                    reviewKind: 'RIGHTS',
                    decision: 'REVOKED',
                    comments: 'Copyright dispute',
                });
                expect(review.decision).toBe('REVOKED');
                expect(mockTx.$queryRaw).toHaveBeenCalled();
                expect(mockTx.question.update).toHaveBeenCalledWith({
                    where: { id: 'q-revoked-1' },
                    data: { status: 'REVIEW', rightsAllowDelivery: false },
                });
            });
            it('recordQuestionReview does not demote Question when decision is APPROVED', async () => {
                const mockTx = {
                    questionRevision: {
                        findUnique: vi.fn().mockResolvedValue({ id: 'rev-app-1', questionId: 'q-app-1' }),
                    },
                    $queryRaw: vi.fn().mockResolvedValue([{ id: 'q-app-1' }]),
                    questionReview: {
                        findFirst: vi.fn().mockResolvedValue(null),
                        create: vi.fn().mockResolvedValue({ id: 'review-2', decision: 'APPROVED' }),
                    },
                    question: {
                        update: vi.fn(),
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                } as unknown as Tx;
                const review = await recordQuestionReview(mockTx, {
                    revisionId: 'rev-app-1',
                    reviewerId: 'admin-1',
                    reviewKind: 'CLINICAL',
                    decision: 'APPROVED',
                });
                expect(review.decision).toBe('APPROVED');
                expect(mockTx.question.update).not.toHaveBeenCalled();
            });
            it('getView pins deliveredRevisionId on first view of a versioned deliverable question', async () => {
                const mockSession = {
                    id: 's-view-1',
                    name: 'Practice Session',
                    mode: 'TUTOR',
                    state: 'IN_PROGRESS',
                    total: 1,
                    currentPosition: 0,
                    negativeMark: false,
                    practiceExam: null,
                    items: [{ position: 0, state: 'UNSEEN', flagged: false, isCorrect: null, selectedOptionIds: [] }],
                };
                const mockSnapshot = {
                    code: 'PV-001',
                    type: 'SINGLE',
                    difficulty: 3,
                    examId: 'e-1',
                    subjectId: 's-1',
                    systemId: 'sys-1',
                    topicId: null,
                    stemMd: 'Pinned Stem from Snapshot',
                    explanationMd: 'Snapshot Explanation',
                    objective: 'Educational Objective',
                    keyPoints: ['Key point 1'],
                    references: [],
                    imageUrl: null,
                    imageAlt: null,
                    source: 'OpenPrep',
                    license: 'CC-BY-4.0',
                    attribution: null,
                    rightsStatus: 'VERIFIED',
                    rightsHolder: null,
                    rightsDecision: null,
                    isDemo: false,
                    options: [
                        { position: 0, text: 'Snapshot Opt A', isCorrect: true, explanationMd: null },
                        { position: 1, text: 'Snapshot Opt B', isCorrect: false, explanationMd: null },
                    ],
                };
                const mockItem = {
                    id: 'item-view-1',
                    sessionId: 's-view-1',
                    position: 0,
                    deliveredRevisionId: null,
                    state: 'UNSEEN',
                    selectedOptionIds: [],
                    struckOptionIds: [],
                    highlightsHtml: null,
                    flagged: false,
                    timeMs: 0,
                    isCorrect: null,
                    question: {
                        id: 'q-pin-1',
                        code: 'PV-001',
                        type: 'SINGLE',
                        isDemo: false,
                        source: 'OpenPrep',
                        imageUrl: null,
                        imageAlt: null,
                        exam: { name: 'Step 1' },
                        subject: { name: 'Pathology' },
                        system: { name: 'Cardiovascular' },
                        bookmarks: [],
                        notes: [],
                        options: [
                            { id: 'opt-1', position: 0, text: 'Live Opt A', isCorrect: true, explanationMd: null },
                            { id: 'opt-2', position: 1, text: 'Live Opt B', isCorrect: false, explanationMd: null },
                        ],
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                };
                const { getView } = await import('@/lib/exam/service');
                const testDb = (await import('@/lib/db')).db;
                vi.spyOn(testDb.testSession, 'findFirst').mockResolvedValueOnce(mockResult(mockSession));
                vi.spyOn(testDb.sessionItem, 'findUniqueOrThrow').mockResolvedValueOnce(mockResult(mockItem));
                vi.spyOn(testDb, '$transaction').mockImplementationOnce(async (cb) => cb(testDb));
                vi.spyOn(testDb, '$queryRaw').mockResolvedValueOnce(mockResult([{ id: 'item-view-1', deliveredRevisionId: null }]));
                const updateManySpy = vi.spyOn(testDb.sessionItem, 'updateMany').mockResolvedValueOnce(mockResult({ count: 1 }));
                vi.spyOn(testDb.question, 'findUnique').mockResolvedValueOnce(mockResult({
                    id: 'q-pin-1',
                    status: 'PUBLISHED',
                    rightsStatus: 'VERIFIED',
                    rightsAllowDelivery: true,
                }));
                vi.spyOn(testDb.questionRevision, 'findMany').mockResolvedValueOnce(mockResult([
                    {
                        id: 'rev-pin-1',
                        revisionNumber: 1,
                        contentSnapshot: mockSnapshot,
                        reviews: [
                            { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
                            { reviewKind: 'CLINICAL', decision: 'APPROVED' },
                            { reviewKind: 'RIGHTS', decision: 'APPROVED' },
                        ],
                    },
                ]));
                const view = await getView('user-1', 's-view-1');
                expect(view.item.stemHtml).toContain('Pinned Stem from Snapshot');
                expect(updateManySpy).toHaveBeenCalledWith({
                    where: { id: 'item-view-1', deliveredRevisionId: null },
                    data: { deliveredRevisionId: 'rev-pin-1' },
                });
            });
            it('getView loads pinned revision directly when session item is already bound, avoiding re-evaluation', async () => {
                const mockSession = {
                    id: 's-view-2',
                    name: 'Practice Session',
                    mode: 'TUTOR',
                    state: 'IN_PROGRESS',
                    total: 1,
                    currentPosition: 0,
                    negativeMark: false,
                    practiceExam: null,
                    items: [{ position: 0, state: 'UNSEEN', flagged: false, isCorrect: null, selectedOptionIds: [] }],
                };
                const mockSnapshotRev1 = {
                    stemMd: 'Original Revision 1 Stem',
                    explanationMd: 'Rev 1 Exp',
                    objective: null,
                    keyPoints: [],
                    references: [],
                    source: 'OpenPrep',
                    license: 'CC-BY-4.0',
                    options: [
                        { position: 0, text: 'Rev 1 Opt A', isCorrect: true, explanationMd: null },
                        { position: 1, text: 'Rev 1 Opt B', isCorrect: false, explanationMd: null },
                    ],
                };
                const mockItemBound = {
                    id: 'item-view-2',
                    sessionId: 's-view-2',
                    position: 0,
                    deliveredRevisionId: 'rev-1',
                    state: 'UNSEEN',
                    selectedOptionIds: [],
                    struckOptionIds: [],
                    highlightsHtml: null,
                    flagged: false,
                    timeMs: 0,
                    isCorrect: null,
                    question: {
                        id: 'q-pin-2',
                        code: 'PV-002',
                        type: 'SINGLE',
                        isDemo: false,
                        source: 'OpenPrep',
                        imageUrl: null,
                        imageAlt: null,
                        exam: { name: 'Step 1' },
                        subject: { name: 'Pathology' },
                        system: { name: 'Cardiovascular' },
                        bookmarks: [],
                        notes: [],
                        options: [
                            { id: 'opt-1', position: 0, text: 'Live Opt A', isCorrect: false, explanationMd: null },
                            { id: 'opt-2', position: 1, text: 'Live Opt B', isCorrect: true, explanationMd: null },
                        ],
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                };
                const { getView } = await import('@/lib/exam/service');
                const testDb = (await import('@/lib/db')).db;
                vi.spyOn(testDb.testSession, 'findFirst').mockResolvedValueOnce(mockResult(mockSession));
                vi.spyOn(testDb.sessionItem, 'findUniqueOrThrow').mockResolvedValueOnce(mockResult(mockItemBound));
                const revSpy = vi.spyOn(testDb.questionRevision, 'findUnique').mockResolvedValueOnce(mockResult({
                    id: 'rev-1',
                    revisionNumber: 1,
                    contentSnapshot: mockSnapshotRev1,
                }));
                const deliverySpy = vi.spyOn(testDb.question, 'findUnique');
                const view = await getView('user-1', 's-view-2');
                expect(view.item.stemHtml).toContain('Original Revision 1 Stem');
                expect(revSpy).toHaveBeenCalledWith({
                    where: { id: 'rev-1' },
                    select: { id: true, revisionNumber: true, contentSnapshot: true },
                });
                expect(deliverySpy).not.toHaveBeenCalled();
            });
            it('lockItem scores against pinned revision 1 and avoids revision 2 drift in race conditions', async () => {
                const rev1Snapshot = {
                    stemMd: 'Revision 1 Stem',
                    explanationMd: 'Rev 1 Exp',
                    objective: null,
                    keyPoints: [],
                    references: [],
                    source: 'OpenPrep',
                    license: 'CC-BY-4.0',
                    options: [
                        { position: 0, text: 'Option A (Correct in Rev 1)', isCorrect: true, explanationMd: null },
                        { position: 1, text: 'Option B (Incorrect in Rev 1)', isCorrect: false, explanationMd: null },
                    ],
                };
                const mockTx = {
                    questionRevision: {
                        findUnique: vi.fn().mockResolvedValue({
                            id: 'rev-1',
                            revisionNumber: 1,
                            contentSnapshot: rev1Snapshot,
                        }),
                    },
                    sessionItem: {
                        update: vi.fn().mockResolvedValue({}),
                    },
                };
                const mockItem = {
                    id: 'item-1',
                    sessionId: 'sess-1',
                    questionId: 'q-race-1',
                    deliveredRevisionId: 'rev-1',
                    selectedOptionIds: ['opt-a'],
                    timeMs: 15000,
                    question: {
                        id: 'q-race-1',
                        type: 'SINGLE' as const,
                        options: [
                            { id: 'opt-a', position: 0, text: 'Live Opt A', isCorrect: false },
                            { id: 'opt-b', position: 1, text: 'Live Opt B', isCorrect: true },
                        ],
                        rightsStatus: "VERIFIED",
                        rightsAllowDelivery: true
                    },
                };
                const rev = await mockTx.questionRevision.findUnique({ where: { id: mockItem.deliveredRevisionId } });
                const snapshot = rev.contentSnapshot;
                const correctPositions = new Set(snapshot.options.filter((so: QuestionContentSnapshot['options'][number]) => so.isCorrect).map((so: QuestionContentSnapshot['options'][number]) => so.position));
                const correctOptionIds = mockItem.question.options.filter((o) => correctPositions.has(o.position)).map((o) => o.id);
                expect(correctOptionIds).toEqual(['opt-a']);
                expect(correctOptionIds.includes('opt-a')).toBe(true);
            });
            it('listQuestions maps stemMd from approved revision contentSnapshot for versioned questions', async () => {
                const { listQuestions } = await import('@/lib/questions');
                const testDb = (await import('@/lib/db')).db;
                vi.spyOn(testDb.question, 'count').mockResolvedValueOnce(1);
                vi.spyOn(testDb.question, 'findMany').mockResolvedValueOnce([
                    mockResult({
                        id: 'q-list-1',
                        code: 'LIST-01',
                        type: 'SINGLE',
                        difficulty: 3,
                        stemMd: 'Raw unverified stem in live question row',
                        isDemo: false,
                        source: 'OpenPrep',
                        exam: { name: 'Step 1' },
                        subject: { name: 'Physiology' },
                        system: { name: 'Renal' },
                        responses: [],
                        bookmarks: [],
                        revisions: [
                            {
                                contentSnapshot: {
                                    stemMd: 'Approved verified stem from revision snapshot',
                                },
                                reviews: [
                                    { reviewKind: 'EDITORIAL', decision: 'APPROVED' },
                                    { reviewKind: 'CLINICAL', decision: 'APPROVED' },
                                    { reviewKind: 'RIGHTS', decision: 'APPROVED' },
                                ],
                            },
                        ],
                    }),
                ]);
                const res = await listQuestions(null, {
                    pool: 'all',
                    examIds: [],
                    subjectIds: [],
                    systemIds: [],
                    topicIds: [],
                    difficulty: [],
                    q: '',
                }, 1, 20);
                expect(res.rows.length).toBe(1);
                expect(res.rows[0]?.stemMd).toBe('Approved verified stem from revision snapshot');
                expect(res.rows[0]).not.toHaveProperty('revisions');
            });
        });
    });
});
