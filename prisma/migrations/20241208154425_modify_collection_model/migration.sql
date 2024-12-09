/*
  Warnings:

  - You are about to drop the column `manga_mal_id` on the `Collection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_email,data_mal_id]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Collection_user_email_manga_mal_id_key";

-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "manga_mal_id",
ADD COLUMN     "anime_image" TEXT,
ADD COLUMN     "anime_title" TEXT,
ADD COLUMN     "data_mal_id" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "manga_image" TEXT,
ADD COLUMN     "manga_title" TEXT,
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'default';

-- CreateIndex
CREATE UNIQUE INDEX "Collection_user_email_data_mal_id_key" ON "Collection"("user_email", "data_mal_id");
