import prisma from '@/lib/prisma'
import Image from 'next/image'
import React from 'react'

interface commentProps {
  anime_mal_id: string
}

const CommentAnimeBox = async ({ anime_mal_id }: commentProps) => {
  const comments = await prisma.commentAnime.findMany({
    where: { anime_mal_id },
    orderBy: {
      id: 'desc',
    },
  })

  return (
    <div className="flex flex-col gap-2">
      {comments.map((comment, index) => {
        return (
          <div
            key={index}
            className="bg-background p-5 rounded-xl flex gap-2 items-start"
          >
            <Image
              src={comment.user_image}
              alt={comment.username}
              width={100}
              height={100}
              className="rounded-full"
            />
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

export default CommentAnimeBox
