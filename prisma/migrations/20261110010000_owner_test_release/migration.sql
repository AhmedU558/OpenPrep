-- A version-bound owner test release is separate from qualified review decisions.
ALTER TABLE "question_revision" ADD COLUMN "ownerTestRelease" JSONB;
