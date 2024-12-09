import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card' // Adjust according to your file structure
import Image from 'next/image'
import Link from 'next/link'

interface AnimeCollectionProps {
  collectionAnime: {
    anime_mal_id: string
    anime_image: string
    anime_title: string
  }[]
}

const AnimeCollection = ({ collectionAnime }: AnimeCollectionProps) => {
  return (
    <>
      {collectionAnime.map((collect, idx) => (
        <Link key={idx} href={`/anime/${collect.anime_mal_id}`}>
          <Card className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
            <CardHeader>
              <div className="relative w-full h-48">
                <Image
                  src={collect.anime_image || ''}
                  alt={collect.anime_title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-center text-lg font-semibold">
                {collect.anime_title}
              </CardTitle>
              <p className="text-center text-xs uppercase">anime</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  )
}

export default AnimeCollection
