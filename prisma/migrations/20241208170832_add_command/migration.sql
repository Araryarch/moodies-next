-- CreateTable
CREATE TABLE "CommentAnime" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "CommentAnime_pkey" PRIMARY KEY ("id")
);
