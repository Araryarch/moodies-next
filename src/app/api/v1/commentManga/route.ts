import { NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const { manga_mal_id, user_email, comment, username, manga_title } =
    await request.json()
  const data = { manga_mal_id, user_email, comment, username, manga_title }
  const createCommentManga = await prisma.commentManga.create({ data })
  if (!createCommentManga)
    return Response.json({ status: 500, isCreated: false })
  else return Response.json({ status: 200, isCreated: true })
}
