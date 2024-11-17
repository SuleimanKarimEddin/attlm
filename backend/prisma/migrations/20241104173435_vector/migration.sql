/*
  Warnings:

  - You are about to drop the column `answer` on the `FAQ` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `FAQ` table. All the data in the column will be lost.
  - Added the required column `data` to the `FAQ` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vector` to the `FAQ` table without a default value. This is not possible if the table is not empty.

*/
CREATE EXTENSION IF NOT EXISTS vector;
-- AlterTable
ALTER TABLE "FAQ" DROP COLUMN "answer",
DROP COLUMN "question",
ADD COLUMN     "data" TEXT NOT NULL,
ADD COLUMN     "vector" vector(384) NOT NULL;

