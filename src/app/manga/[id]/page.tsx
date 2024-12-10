import CollectionManga from '@/components/Molecules/CollectionManga'
import CommentManga from '@/components/Molecules/CommentManga'
import CommentMangaBox from '@/components/Molecules/CommentMangaBox'
import { authUserSession } from '@/lib/auth'
import { getFetchData } from '@/lib/getFetchData'
import prisma from '@/lib/prisma'
import { Genre } from '../../types/api'
import Image from 'next/image'
import { MangaData } from '../../types/api'

interface MangaProps {
  params: Promise<{
    id: string
  }>
}

const Manga = async ({ params }: MangaProps) => {
  const { id } = await params
  const { data } = await getFetchData(`manga/${id}`)

  if (!data || Array.isArray(data)) return <div>Loading...</div>

  const mangas = data as MangaData
  const user = await authUserSession()

  const collection = user
    ? await prisma.collectionManga.findFirst({
        where: {
          user_email: user.email ?? undefined,
          manga_mal_id: id,
        },
      })
    : null

  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="flex gap-3">
        <Image
          src={`${mangas.images.jpg.large_image_url}`}
          alt="alt"
          width={300}
          height={300}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">{mangas.title}</h1>
          <div className="flex gap-2 flex-wrap">
            {mangas.genres.map((genre: Genre, index: number) => (
              <span
                key={index}
                className="px-3 py-1 rounded-sm shadow-md bg-background text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className="indent-8">{mangas.synopsis}</p>
          {user && !collection && (
            <CollectionManga
              manga_mal_id={id}
              user_email={user.email}
              manga_image={mangas.images.jpg.large_image_url}
              manga_title={mangas.title}
            />
          )}
        </div>
      </div>
      <div>
        <h1 className="text-2xl">Detail Information :</h1>
        <div className="flex gap-2 py-2">
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Episodes : {mangas.chapters}
          </p>
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Volumes : {mangas.volumes}
          </p>
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Status : {mangas.status}
          </p>
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Rank : {mangas.rank}
          </p>
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Popularity : {mangas.popularity}
          </p>
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Score : {mangas.score}
          </p>
        </div>
        {!user && <div>Login untuk menambahkan koleksi atau komentar.</div>}
        <h1 className="text-xl pt-10">Comments:</h1>
        {user && (
          <CommentManga
            user_image={user.image}
            manga_mal_id={id}
            user_email={user.email}
            username={user.name}
            manga_title={mangas.title}
          />
        )}
        <CommentMangaBox manga_mal_id={id} />
      </div>
    </div>
  )
}

export default Manga
