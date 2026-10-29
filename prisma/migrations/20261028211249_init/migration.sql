-- CreateEnum
CREATE TYPE "Role" AS ENUM ('LEARNER', 'EDITOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('SINGLE', 'MULTIPLE');

-- CreateEnum
CREATE TYPE "QuestionStatus" AS ENUM ('DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "SessionMode" AS ENUM ('TUTOR', 'TIMED');

-- CreateEnum
CREATE TYPE "SessionState" AS ENUM ('CREATED', 'IN_PROGRESS', 'PAUSED', 'SUBMITTED', 'ABANDONED');

-- CreateEnum
CREATE TYPE "ItemState" AS ENUM ('UNSEEN', 'ANSWERED', 'LOCKED');

-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('OPEN', 'RESOLVED', 'DISMISSED');

-- CreateEnum
CREATE TYPE "TaskKind" AS ENUM ('QUESTIONS', 'REVIEW', 'FLASHCARDS');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'LEARNER',
    "preferences" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exam" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "system" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "system_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "topic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,

    CONSTRAINT "topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type" "QuestionType" NOT NULL DEFAULT 'SINGLE',
    "status" "QuestionStatus" NOT NULL DEFAULT 'DRAFT',
    "difficulty" INTEGER NOT NULL DEFAULT 3,
    "examId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "systemId" TEXT NOT NULL,
    "topicId" TEXT,
    "stemMd" TEXT NOT NULL,
    "explanationMd" TEXT NOT NULL,
    "objective" TEXT,
    "keyPoints" TEXT[],
    "references" JSONB NOT NULL DEFAULT '[]',
    "imageUrl" TEXT,
    "imageAlt" TEXT,
    "source" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "attribution" TEXT,
    "isDemo" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publishedAt" TIMESTAMP(3),

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "option" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL DEFAULT false,
    "explanationMd" TEXT,

    CONSTRAINT "option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practice_exam" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "blocksTotal" INTEGER NOT NULL,
    "breakBudgetSec" INTEGER NOT NULL DEFAULT 2700,
    "breakUsedSec" INTEGER NOT NULL DEFAULT 0,
    "breakStartedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "practice_exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "mode" "SessionMode" NOT NULL,
    "state" "SessionState" NOT NULL DEFAULT 'CREATED',
    "timeLimitSec" INTEGER,
    "negativeMark" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "activeMs" INTEGER NOT NULL DEFAULT 0,
    "lastResumedAt" TIMESTAMP(3),
    "startedAt" TIMESTAMP(3),
    "submittedAt" TIMESTAMP(3),
    "currentPosition" INTEGER NOT NULL DEFAULT 0,
    "version" INTEGER NOT NULL DEFAULT 0,
    "total" INTEGER NOT NULL,
    "correctCount" INTEGER,
    "score" DOUBLE PRECISION,
    "practiceExamId" TEXT,
    "blockIndex" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "test_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session_item" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "questionId" TEXT NOT NULL,
    "state" "ItemState" NOT NULL DEFAULT 'UNSEEN',
    "selectedOptionIds" TEXT[],
    "struckOptionIds" TEXT[],
    "highlightsHtml" TEXT,
    "flagged" BOOLEAN NOT NULL DEFAULT false,
    "timeMs" INTEGER NOT NULL DEFAULT 0,
    "isCorrect" BOOLEAN,
    "points" DOUBLE PRECISION,
    "answeredAt" TIMESTAMP(3),
    "lockedAt" TIMESTAMP(3),

    CONSTRAINT "session_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "response" (
    "userId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "omitted" BOOLEAN NOT NULL,
    "timeMs" INTEGER NOT NULL,
    "answeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "response_pkey" PRIMARY KEY ("userId","questionId")
);

-- CreateTable
CREATE TABLE "bookmark" (
    "userId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bookmark_pkey" PRIMARY KEY ("userId","questionId")
);

-- CreateTable
CREATE TABLE "note" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question_tag" (
    "userId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "question_tag_pkey" PRIMARY KEY ("userId","questionId","tag")
);

-- CreateTable
CREATE TABLE "notebook_page" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "parentId" TEXT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL DEFAULT '',
    "tags" TEXT[],
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notebook_page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collection" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collection_item" (
    "collectionId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "collection_item_pkey" PRIMARY KEY ("collectionId","questionId")
);

-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "questionId" TEXT,
    "front" TEXT NOT NULL,
    "back" TEXT NOT NULL,
    "ease" DOUBLE PRECISION NOT NULL DEFAULT 2.5,
    "interval" INTEGER NOT NULL DEFAULT 0,
    "reps" INTEGER NOT NULL DEFAULT 0,
    "lapses" INTEGER NOT NULL DEFAULT 0,
    "due" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "suspended" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card_review" (
    "id" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "durationMs" INTEGER NOT NULL DEFAULT 0,
    "reviewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "card_review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "study_plan" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "examId" TEXT,
    "startDate" DATE NOT NULL,
    "examDate" DATE NOT NULL,
    "hoursPerDay" DOUBLE PRECISION NOT NULL DEFAULT 3,
    "questionsPerHour" INTEGER NOT NULL DEFAULT 20,
    "restDays" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "study_plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plan_task" (
    "id" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "kind" "TaskKind" NOT NULL,
    "subjectId" TEXT,
    "systemId" TEXT,
    "target" INTEGER NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "plan_task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_report" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "ReportStatus" NOT NULL DEFAULT 'OPEN',
    "resolvedById" TEXT,
    "resolvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "content_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_log" (
    "id" TEXT NOT NULL,
    "actorId" TEXT,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "diff" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE INDEX "session_userId_idx" ON "session"("userId");

-- CreateIndex
CREATE INDEX "account_userId_idx" ON "account"("userId");

-- CreateIndex
CREATE INDEX "verification_identifier_idx" ON "verification"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "exam_slug_key" ON "exam"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "subject_name_key" ON "subject"("name");

-- CreateIndex
CREATE UNIQUE INDEX "system_name_key" ON "system"("name");

-- CreateIndex
CREATE UNIQUE INDEX "topic_subjectId_name_key" ON "topic"("subjectId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "question_code_key" ON "question"("code");

-- CreateIndex
CREATE INDEX "question_examId_status_idx" ON "question"("examId", "status");

-- CreateIndex
CREATE INDEX "question_subjectId_idx" ON "question"("subjectId");

-- CreateIndex
CREATE INDEX "question_systemId_idx" ON "question"("systemId");

-- CreateIndex
CREATE INDEX "question_status_updatedAt_idx" ON "question"("status", "updatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "option_questionId_position_key" ON "option"("questionId", "position");

-- CreateIndex
CREATE INDEX "practice_exam_userId_createdAt_idx" ON "practice_exam"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "test_session_userId_createdAt_idx" ON "test_session"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "test_session_userId_state_idx" ON "test_session"("userId", "state");

-- CreateIndex
CREATE UNIQUE INDEX "session_item_sessionId_position_key" ON "session_item"("sessionId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "session_item_sessionId_questionId_key" ON "session_item"("sessionId", "questionId");

-- CreateIndex
CREATE INDEX "response_userId_answeredAt_idx" ON "response"("userId", "answeredAt");

-- CreateIndex
CREATE UNIQUE INDEX "note_userId_questionId_key" ON "note"("userId", "questionId");

-- CreateIndex
CREATE INDEX "question_tag_userId_tag_idx" ON "question_tag"("userId", "tag");

-- CreateIndex
CREATE INDEX "notebook_page_userId_parentId_idx" ON "notebook_page"("userId", "parentId");

-- CreateIndex
CREATE UNIQUE INDEX "collection_userId_name_key" ON "collection"("userId", "name");

-- CreateIndex
CREATE INDEX "card_userId_due_idx" ON "card"("userId", "due");

-- CreateIndex
CREATE INDEX "card_review_userId_reviewedAt_idx" ON "card_review"("userId", "reviewedAt");

-- CreateIndex
CREATE UNIQUE INDEX "study_plan_userId_key" ON "study_plan"("userId");

-- CreateIndex
CREATE INDEX "plan_task_planId_date_idx" ON "plan_task"("planId", "date");

-- CreateIndex
CREATE INDEX "content_report_status_createdAt_idx" ON "content_report"("status", "createdAt");

-- CreateIndex
CREATE INDEX "audit_log_entityType_entityId_idx" ON "audit_log"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "audit_log_createdAt_idx" ON "audit_log"("createdAt");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "topic" ADD CONSTRAINT "topic_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_systemId_fkey" FOREIGN KEY ("systemId") REFERENCES "system"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "option" ADD CONSTRAINT "option_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_exam" ADD CONSTRAINT "practice_exam_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_session" ADD CONSTRAINT "test_session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_session" ADD CONSTRAINT "test_session_practiceExamId_fkey" FOREIGN KEY ("practiceExamId") REFERENCES "practice_exam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_item" ADD CONSTRAINT "session_item_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "test_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_item" ADD CONSTRAINT "session_item_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response" ADD CONSTRAINT "response_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response" ADD CONSTRAINT "response_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "note_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_tag" ADD CONSTRAINT "question_tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_tag" ADD CONSTRAINT "question_tag_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notebook_page" ADD CONSTRAINT "notebook_page_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notebook_page" ADD CONSTRAINT "notebook_page_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "notebook_page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection" ADD CONSTRAINT "collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection_item" ADD CONSTRAINT "collection_item_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection_item" ADD CONSTRAINT "collection_item_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card_review" ADD CONSTRAINT "card_review_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card_review" ADD CONSTRAINT "card_review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "study_plan" ADD CONSTRAINT "study_plan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "study_plan" ADD CONSTRAINT "study_plan_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plan_task" ADD CONSTRAINT "plan_task_planId_fkey" FOREIGN KEY ("planId") REFERENCES "study_plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plan_task" ADD CONSTRAINT "plan_task_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plan_task" ADD CONSTRAINT "plan_task_systemId_fkey" FOREIGN KEY ("systemId") REFERENCES "system"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_report" ADD CONSTRAINT "content_report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_report" ADD CONSTRAINT "content_report_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_log" ADD CONSTRAINT "audit_log_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
