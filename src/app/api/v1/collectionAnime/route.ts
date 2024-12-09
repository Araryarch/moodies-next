import { NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const { anime_mal_id, user_email, anime_image, anime_title } =
    await request.json()
  const data = { anime_mal_id, user_email, anime_image, anime_title }
  const createCollectionAnime = await prisma.collectionAnime.create({ data })
  if (!createCollectionAnime)
    return Response.json({ status: 500, isCreated: false })
  else return Response.json({ status: 200, isCreated: true })
}
