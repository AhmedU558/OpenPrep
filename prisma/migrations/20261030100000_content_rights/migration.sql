-- Additive only. Existing content, licenses, option IDs and attempts are preserved.
CREATE TYPE "ContentRightsStatus" AS ENUM ('UNVERIFIED', 'PENDING', 'VERIFIED', 'DISPUTED', 'REJECTED');
ALTER TABLE "question"
  ADD COLUMN "rightsStatus" "ContentRightsStatus" NOT NULL DEFAULT 'UNVERIFIED',
  ADD COLUMN "rightsHolder" TEXT,
  ADD COLUMN "rightsEvidence" TEXT,
  ADD COLUMN "rightsDecision" TEXT,
  ADD COLUMN "rightsReviewedBy" TEXT,
  ADD COLUMN "rightsReviewedAt" TIMESTAMP(3),
  ADD COLUMN "rightsAllowDelivery" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN "rightsAllowExport" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "question" ADD CONSTRAINT "question_rights_verified_evidence" CHECK (
  "rightsStatus" <> 'VERIFIED' OR (
    length(trim("rightsHolder")) > 1 AND "rightsHolder" IS NOT NULL AND
    length(trim("rightsEvidence")) >= 10 AND "rightsEvidence" IS NOT NULL AND
    length(trim("rightsDecision")) >= 10 AND "rightsDecision" IS NOT NULL AND
    "rightsReviewedBy" IS NOT NULL AND "rightsReviewedAt" IS NOT NULL
  )
);
CREATE INDEX "question_status_rightsStatus_rightsAllowDelivery_idx"
  ON "question"("status", "rightsStatus", "rightsAllowDelivery");
ALTER TABLE "notebook_page" ADD COLUMN "sourceQuestionIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
