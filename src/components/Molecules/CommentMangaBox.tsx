import prisma from '@/lib/prisma'
import React from 'react'

interface commentProps {
  manga_mal_id: string
}

const CommentMangaBox = async ({ manga_mal_id }: commentProps) => {
  const comments = await prisma.commentManga.findMany({
    where: { manga_mal_id },
    orderBy: {
      id: 'desc',
    },
  })

  return (
    <div className="flex flex-col gap-2">
      {comments.map((comment, index) => {
        return (
          <div key={index} className="bg-background p-5 rounded-xl">
            <div className="flex flex-col">
              <p className="text-xs">{comment.username}</p>
              <h1 className="text-base">{comment.comment}</h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CommentMangaBox
