-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "manga_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_user_email_manga_mal_id_key" ON "Collection"("user_email", "manga_mal_id");
