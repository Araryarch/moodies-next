import OpenCloseNav from '@/app/components/ui/Navbar/OpenCloseNav'
import { authUserSession } from '@/lib/auth'
import prisma from '@/lib/prisma'
import Link from 'next/link'

const Comment = async () => {
  const user = await authUserSession()

  if (!user?.email) {
    return
  }

  const commentsAnime = await prisma.commentAnime.findMany({
    where: { user_email: user.email },
  })

  const commentsManga = await prisma.commentManga.findMany({
    where: { user_email: user.email },
  })

  return (
    <div className="space-y-4 p-2">
      <nav className="w-full items-center flex justify-between">
        <h1 className="text-xl font-medium">My Comments</h1>
        <OpenCloseNav classname="bg-background" />
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {commentsAnime.map((comment) => (
          <Link key={comment.id} href={`/anime/${comment.anime_mal_id}`}>
            <div className="p-4 bg-background m-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-xs font-semibold">{comment.anime_title}</h1>
              </div>
              <p className="mt-2 text-xl">{comment.comment}</p>
            </div>
          </Link>
        ))}
        {commentsManga.map((comment) => (
          <Link key={comment.id} href={`/anime/${comment.manga_mal_id}`}>
            <div className="p-4 bg-background m-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-xs font-semibold">{comment.manga_title}</h1>
              </div>
              <p className="mt-2 text-xl">{comment.comment}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Comment
