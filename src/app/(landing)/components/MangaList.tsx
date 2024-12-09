'use client'

import { useState, useEffect } from 'react'
import useFetchManga from '../hooks/useGetManga'
import { Genre, MangaData } from '@/app/types/api'
import Link from 'next/link'

const MangaList = () => {
  const { data, isLoading } = useFetchManga()
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (data && Array.isArray(data.data)) {
        setStartIndex((prevIndex) => {
          const maxIndex =
            data.data.length % 2 === 0 ? data.data.length : data.data.length - 1
          return (prevIndex + 2) % maxIndex
        })
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [data])

  if (isLoading) {
    return (
      <>
        <div className="aspect-video bg-background grow rounded animate-pulse"></div>
        <div className="aspect-video bg-background grow rounded animate-pulse"></div>
      </>
    )
  }

  if (!data || !Array.isArray(data.data)) {
    return <div>Error: Data is not available</div>
  }

  const validDataLength =
    data.data.length % 2 === 0 ? data.data.length : data.data.length - 1
  const adjustedStartIndex = startIndex >= validDataLength ? 0 : startIndex
  const mangaData = data.data.slice(adjustedStartIndex, adjustedStartIndex + 2)

  return (
    <>
      {mangaData.map((manga: MangaData, idx: number) => {
        const genresToShow = manga.genres.slice(0, 2)
        const moreGenresCount =
          manga.genres.length > 2 ? manga.genres.length - 2 : 0
        const genresDisplay = [
          ...genresToShow.map((genre: Genre) => genre.name),
          moreGenresCount > 0 ? `${moreGenresCount}+` : '',
        ]

        return (
          <Link
            href={`/manga/${manga.mal_id}`}
            key={idx}
            className="relative aspect-video w-full max-w-sm bg-cover bg-center rounded-lg overflow-hidden shadow-lg group"
            style={{
              backgroundImage: `url(${manga.images.jpg.large_image_url})`,
            }}
          >
            <div className="absolute inset-0 group-hover:-mb-96 transition-all ease-in-out duration-300 group-hover:bg-transparent bg-gradient-to-t from-black/80 to-transparent p-3 flex flex-col justify-between">
              <h2 className="bg-background/80 text-sm px-3 py-1 rounded-md mb-2 w-fit">
                {manga.status}
              </h2>
              <div>
                <h1 className="font-semibold text-white text-xl">
                  {manga.title}
                </h1>
                <div className="py-2">
                  {genresDisplay.map((genre, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-sm mr-2 bg-background/80"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="text-white text-xs line-clamp-2">
                  {manga.synopsis && manga.synopsis.length > 100
                    ? manga.synopsis.slice(0, 100) + '...'
                    : manga.synopsis}
                </p>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default MangaList
