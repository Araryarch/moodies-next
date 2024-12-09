/*
  Warnings:

  - Added the required column `anime_title` to the `CommentAnime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommentAnime" ADD COLUMN     "anime_title" TEXT NOT NULL;
