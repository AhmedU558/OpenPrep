-- AlterTable
ALTER TABLE "session_item" ADD COLUMN     "deliveredRevisionId" TEXT;

-- CreateIndex
CREATE INDEX "session_item_deliveredRevisionId_idx" ON "session_item"("deliveredRevisionId");

-- AddForeignKey
ALTER TABLE "session_item" ADD CONSTRAINT "session_item_deliveredRevisionId_fkey" FOREIGN KEY ("deliveredRevisionId") REFERENCES "question_revision"("id") ON DELETE SET NULL ON UPDATE CASCADE;
