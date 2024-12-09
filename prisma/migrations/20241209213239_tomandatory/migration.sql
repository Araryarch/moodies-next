/*
  Warnings:

  - Made the column `anime_image` on table `CollectionAnime` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anime_title` on table `CollectionAnime` required. This step will fail if there are existing NULL values in that column.
  - Made the column `manga_image` on table `CollectionManga` required. This step will fail if there are existing NULL values in that column.
  - Made the column `manga_title` on table `CollectionManga` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CollectionAnime" ALTER COLUMN "anime_image" SET NOT NULL,
ALTER COLUMN "anime_title" SET NOT NULL;

-- AlterTable
ALTER TABLE "CollectionManga" ALTER COLUMN "manga_image" SET NOT NULL,
ALTER COLUMN "manga_title" SET NOT NULL;
