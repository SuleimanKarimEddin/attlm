-- CreateTable
CREATE TABLE "FAQAnswer" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "questionVector" vector(384) NOT NULL,
    "customerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FAQAnswer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FAQAnswer" ADD CONSTRAINT "FAQAnswer_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
