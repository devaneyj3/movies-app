/*
  Warnings:

  - You are about to drop the column `paymentMethod` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "paymentMethod",
DROP COLUMN "role",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "zip" TEXT,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "address" SET DATA TYPE TEXT;

-- RenameIndex
ALTER INDEX "public"."user_email_idx" RENAME TO "User_email_key";
