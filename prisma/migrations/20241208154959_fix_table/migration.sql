/*
  Warnings:

  - You are about to drop the column `anime_image` on the `CollectionManga` table. All the data in the column will be lost.
  - You are about to drop the column `anime_title` on the `CollectionManga` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CollectionManga" DROP COLUMN "anime_image",
DROP COLUMN "anime_title",
ADD COLUMN     "manga_image" TEXT,
ADD COLUMN     "manga_title" TEXT;
