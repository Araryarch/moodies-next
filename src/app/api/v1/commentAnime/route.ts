import { NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const {
    anime_mal_id,
    user_email,
    comment,
    username,
    anime_title,
    user_image,
  } = await request.json()
  const data = {
    anime_mal_id,
    user_email,
    comment,
    username,
    anime_title,
    user_image,
  }
  const createCommentAnime = await prisma.commentAnime.create({ data })
  if (!createCommentAnime)
    return Response.json({ status: 500, isCreated: false })
  else return Response.json({ status: 200, isCreated: true })
}
