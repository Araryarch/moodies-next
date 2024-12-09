import CollectionAnime from '@/components/Molecules/CollectionAnime'
import CommentAnime from '@/components/Molecules/CommentAnime'
import CommentAnimeBox from '@/components/Molecules/CommentAnimeBox'
import { authUserSession } from '@/lib/auth'
import { getFetchData } from '@/lib/getFetchData'
import prisma from '@/lib/prisma'
import VideoPlayer from '../components/VideoPlayer'
import { Genre } from '../../types/api'
import Image from 'next/image'

interface AnimeProps {
  params: Promise<{
    id: string
  }>
}

interface AnimeData {
  title: string
  images: {
    jpg: {
      large_image_url: string
    }
  }
  genres: Genre[]
  synopsis: string
  episodes: number
  duration: string
  status: string
  rank: number
  rating: string
  score: number
  trailer: {
    youtube_id: string
  }
}

const Anime = async ({ params }: AnimeProps) => {
  const { id } = await params
  const { data } = await getFetchData(`anime/${id}`)

  if (!data || Array.isArray(data)) return <div>Loading...</div>

  const animes = data as AnimeData
  const user = await authUserSession()

  const collection = user
    ? await prisma.collectionAnime.findFirst({
        where: {
          user_email: user.email ?? undefined,
          anime_mal_id: id,
        },
      })
    : null

  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Image
            src={animes.images.jpg.large_image_url}
            alt="alt"
            width={300}
            height={300}
          />
          <VideoPlayer YoutubeId={animes.trailer.youtube_id} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">{animes.title}</h1>
          <div className="flex gap-2 flex-wrap">
            {animes.genres.map((genre: Genre, index: number) => (
              <span
                key={index}
                className="px-3 py-1 rounded-sm shadow-md bg-background text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className="indent-8">{animes.synopsis}</p>
          {user && !collection && (
            <CollectionAnime
              anime_mal_id={id}
              user_email={user.email}
              anime_title={animes.title}
              anime_image={animes.images.jpg.large_image_url}
            />
          )}
        </div>
      </div>
      <div>
        <h1 className="text-2xl">Detail Information :</h1>
        <div className="flex gap-2 py-2">
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Episodes : {animes.episodes}
          </p>
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Duration : {animes.duration}
          </p>
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Status : {animes.status}
          </p>
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Rank : {animes.rank}
          </p>
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Rating : {animes.rating}
          </p>
          <p className="px-2 py-1 bg-background shadow-md rounded">
            Score : {animes.score}
          </p>
        </div>
        {!user && <div>Login untuk menambahkan koleksi atau komentar.</div>}
        <h1 className="text-xl pt-10">Comments:</h1>
        {user && (
          <CommentAnime
            anime_mal_id={id}
            user_email={user.email}
            username={user.name}
            anime_title={animes.title}
            user_image={user.image}
          />
        )}
        <CommentAnimeBox anime_mal_id={id} />
      </div>
    </div>
  )
}

export default Anime
