/*
  Warnings:

  - You are about to drop the `Collection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Collection";

-- CreateTable
CREATE TABLE "CollectionAnime" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_image" TEXT,
    "anime_title" TEXT,

    CONSTRAINT "CollectionAnime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectionManga" (
    "id" SERIAL NOT NULL,
    "manga_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_image" TEXT,
    "anime_title" TEXT,

    CONSTRAINT "CollectionManga_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CollectionAnime_user_email_anime_mal_id_key" ON "CollectionAnime"("user_email", "anime_mal_id");

-- CreateIndex
CREATE UNIQUE INDEX "CollectionManga_user_email_manga_mal_id_key" ON "CollectionManga"("user_email", "manga_mal_id");
