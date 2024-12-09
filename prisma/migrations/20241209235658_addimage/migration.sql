/*
  Warnings:

  - Added the required column `user_image` to the `CommentAnime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_image` to the `CommentManga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommentAnime" ADD COLUMN     "user_image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CommentManga" ADD COLUMN     "user_image" TEXT NOT NULL;
