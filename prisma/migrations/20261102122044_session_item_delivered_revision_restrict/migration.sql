-- DropForeignKey
ALTER TABLE "session_item" DROP CONSTRAINT "session_item_deliveredRevisionId_fkey";

-- AddForeignKey
ALTER TABLE "session_item" ADD CONSTRAINT "session_item_deliveredRevisionId_fkey" FOREIGN KEY ("deliveredRevisionId") REFERENCES "question_revision"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
