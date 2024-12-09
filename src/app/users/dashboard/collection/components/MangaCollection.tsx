import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card' // Adjust according to your file structure
import Image from 'next/image'
import Link from 'next/link'

interface MangaCollectionProps {
  collectionManga: {
    manga_mal_id: string
    manga_image: string
    manga_title: string
  }[]
}

const MangaCollection = ({ collectionManga }: MangaCollectionProps) => {
  return (
    <>
      {collectionManga.map((collect, idx) => (
        <Link key={idx} href={`/manga/${collect.manga_mal_id}`}>
          <Card className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
            <CardHeader>
              <div className="relative w-full h-48">
                <Image
                  src={collect.manga_image}
                  alt={collect.manga_title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-center text-lg font-semibold">
                {collect.manga_title}
              </CardTitle>
              <p className="text-center text-xs uppercase">manga</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  )
}

export default MangaCollection
