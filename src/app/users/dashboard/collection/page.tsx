import OpenCloseNav from '@/app/components/ui/Navbar/OpenCloseNav'
import { authUserSession } from '@/lib/auth'
import prisma from '@/lib/prisma'
import AnimeCollection from './components/AnimeCollection'
import MangaCollection from './components/MangaCollection'
import Head from 'next/head'

const Collection = async () => {
  const user = await authUserSession()

  if (!user?.email) {
    return null
  }

  const collectionManga = await prisma.collectionManga.findMany({
    where: { user_email: user.email },
  })

  const collectionAnime = await prisma.collectionAnime.findMany({
    where: { user_email: user.email },
  })

  return (
    <>
      <Head>
        <title>{`${user?.email}'s Collection`}</title>
      </Head>
      <div className="w-full min-h-screen flex flex-col gap-2 p-3">
        <nav className="w-full flex justify-between">
          <h1 className="text-2xl">Collection</h1>
          <OpenCloseNav classname="bg-background" />
        </nav>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          <AnimeCollection collectionAnime={collectionAnime} />
          <MangaCollection collectionManga={collectionManga} />
        </div>
      </div>
    </>
  )
}

export default Collection
