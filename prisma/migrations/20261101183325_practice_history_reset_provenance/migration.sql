-- CreateEnum
CREATE TYPE "PracticeEventType" AS ENUM ('SESSION_START', 'ATTEMPT_SUBMISSION', 'PRACTICE_RESET', 'SESSION_SUSPEND', 'SESSION_RESUME');

-- CreateEnum
CREATE TYPE "ResetScope" AS ENUM ('ALL', 'INCORRECT_ONLY', 'MARKED_ONLY', 'CUSTOM');

-- CreateEnum
CREATE TYPE "ReviewDecision" AS ENUM ('APPROVED', 'REJECTED', 'REVOKED');

-- CreateEnum
CREATE TYPE "ReviewKind" AS ENUM ('EDITORIAL', 'CLINICAL', 'RIGHTS');

-- CreateTable
CREATE TABLE "user_practice_state" (
    "userId" TEXT NOT NULL,
    "lastEventSeq" BIGINT NOT NULL DEFAULT 0,
    "activeResetSeq" BIGINT NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_practice_state_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "practice_event" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventSeq" BIGINT NOT NULL,
    "eventType" "PracticeEventType" NOT NULL,
    "sessionId" TEXT,
    "payload" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "practice_event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practice_reset" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "resetEventSeq" BIGINT NOT NULL,
    "scope" "ResetScope" NOT NULL,
    "affectedQuestionIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "filterCriteria" JSONB NOT NULL DEFAULT '{}',
    "snapshotCounts" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "practice_reset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practice_attempt" (
    "id" TEXT NOT NULL,
    "idempotencyKey" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sessionId" TEXT,
    "sessionItemId" TEXT,
    "questionId" TEXT NOT NULL,
    "revisionId" TEXT,
    "sessionStartEventSeq" BIGINT NOT NULL,
    "attemptEventSeq" BIGINT NOT NULL,
    "selectedOptionId" TEXT,
    "selectedOptionIdentifier" TEXT NOT NULL,
    "selectedOptionTextSnapshot" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "secondsSpent" INTEGER NOT NULL DEFAULT 0,
    "clientSubmittedAt" TIMESTAMP(3) NOT NULL,
    "serverRecordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "practice_attempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question_revision" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "revisionNumber" INTEGER NOT NULL,
    "contentHash" TEXT NOT NULL,
    "schemaVersion" INTEGER NOT NULL DEFAULT 1,
    "contentSnapshot" JSONB NOT NULL,
    "changeSummary" TEXT,
    "authorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "question_revision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question_review" (
    "id" TEXT NOT NULL,
    "revisionId" TEXT NOT NULL,
    "reviewerId" TEXT NOT NULL,
    "reviewKind" "ReviewKind" NOT NULL,
    "decision" "ReviewDecision" NOT NULL,
    "reviewerCredentials" TEXT,
    "comments" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "question_review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "practice_event_userId_idx" ON "practice_event"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "practice_event_userId_eventSeq_key" ON "practice_event"("userId", "eventSeq");

-- CreateIndex
CREATE INDEX "practice_reset_userId_resetEventSeq_idx" ON "practice_reset"("userId", "resetEventSeq");

-- CreateIndex
CREATE UNIQUE INDEX "practice_reset_userId_resetEventSeq_key" ON "practice_reset"("userId", "resetEventSeq");

-- CreateIndex
CREATE INDEX "practice_attempt_userId_questionId_attemptEventSeq_idx" ON "practice_attempt"("userId", "questionId", "attemptEventSeq");

-- CreateIndex
CREATE INDEX "practice_attempt_sessionId_sessionItemId_idx" ON "practice_attempt"("sessionId", "sessionItemId");

-- CreateIndex
CREATE UNIQUE INDEX "practice_attempt_userId_idempotencyKey_key" ON "practice_attempt"("userId", "idempotencyKey");

-- CreateIndex
CREATE UNIQUE INDEX "practice_attempt_userId_attemptEventSeq_key" ON "practice_attempt"("userId", "attemptEventSeq");

-- CreateIndex
CREATE INDEX "question_revision_contentHash_idx" ON "question_revision"("contentHash");

-- CreateIndex
CREATE UNIQUE INDEX "question_revision_questionId_revisionNumber_key" ON "question_revision"("questionId", "revisionNumber");

-- CreateIndex
CREATE INDEX "question_review_revisionId_reviewKind_decision_idx" ON "question_review"("revisionId", "reviewKind", "decision");

-- AddForeignKey
ALTER TABLE "user_practice_state" ADD CONSTRAINT "user_practice_state_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_event" ADD CONSTRAINT "practice_event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_event" ADD CONSTRAINT "practice_event_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "test_session"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_reset" ADD CONSTRAINT "practice_reset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_attempt" ADD CONSTRAINT "practice_attempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_attempt" ADD CONSTRAINT "practice_attempt_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "test_session"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_attempt" ADD CONSTRAINT "practice_attempt_sessionItemId_fkey" FOREIGN KEY ("sessionItemId") REFERENCES "session_item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_attempt" ADD CONSTRAINT "practice_attempt_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_attempt" ADD CONSTRAINT "practice_attempt_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "question_revision"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_attempt" ADD CONSTRAINT "practice_attempt_selectedOptionId_fkey" FOREIGN KEY ("selectedOptionId") REFERENCES "option"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_revision" ADD CONSTRAINT "question_revision_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_revision" ADD CONSTRAINT "question_revision_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_review" ADD CONSTRAINT "question_review_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "question_revision"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_review" ADD CONSTRAINT "question_review_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
