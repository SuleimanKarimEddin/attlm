-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_planId_fkey";

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "planId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
