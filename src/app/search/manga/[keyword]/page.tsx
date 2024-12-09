import { getFetchData } from '@/lib/getFetchData'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimeData } from '@/app/types/api'
import { MangaData } from '@/app/types/api'

interface PageProps {
  params: {
    keyword: string
  }
}

const Page: React.FC<PageProps> = async ({ params: { keyword } }) => {
  const { data } = await getFetchData('manga', keyword)

  return (
    <div className="p-6">
      <p className="text-xl font-semibold text-foreground mb-4">
        Pencarian untuk: {decodeURI(keyword)}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((manga: AnimeData | MangaData, index: number) => (
          <Link
            href={`/manga/${manga.mal_id}`}
            key={index}
            className="bg-background p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform"
          >
            <Image
              src={manga.images.jpg.large_image_url}
              alt={manga.title}
              className="w-full h-56 object-cover rounded-md mb-4"
              width={300}
              height={300}
            />
            <h3 className="text-lg font-semibold text-foreground truncate">
              {manga.title}
            </h3>
            <p className="text-sm mt-2 text-foreground line-clamp-3">
              {manga.synopsis ? manga.synopsis : 'No synopsis available'}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page
