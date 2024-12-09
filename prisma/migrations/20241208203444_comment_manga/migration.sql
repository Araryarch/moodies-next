-- CreateTable
CREATE TABLE "CommentManga" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "manga_mal_id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "manga_title" TEXT NOT NULL,

    CONSTRAINT "CommentManga_pkey" PRIMARY KEY ("id")
);
