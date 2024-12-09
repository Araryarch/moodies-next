'use client'

import { useState, useEffect } from 'react'
import useFetchAnime from '../hooks/useGetAnime'
import { AnimeData, Genre } from '@/app/types/api'
import Link from 'next/link'

const AnimeList = () => {
  const { data, isLoading } = useFetchAnime()
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
  const animeData = data.data.slice(adjustedStartIndex, adjustedStartIndex + 2)

  return (
    <>
      {animeData.map((anime: AnimeData, idx: number) => {
        const genresToShow = anime.genres.slice(0, 2)
        const moreGenresCount =
          anime.genres.length > 2 ? anime.genres.length - 2 : 0
        const genresDisplay = [
          ...genresToShow.map((genre: Genre) => genre.name),
          moreGenresCount > 0 ? `${moreGenresCount}+` : '',
        ]

        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            key={idx}
            className="relative aspect-video w-full max-w-sm bg-cover bg-center rounded-lg overflow-hidden shadow-lg group"
            style={{
              backgroundImage: `url(${anime.images.jpg.large_image_url})`,
            }}
          >
            <div className="absolute group-hover:-mb-96 transition-all ease-in-out duration-300 group-hover:bg-transparent inset-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex flex-col justify-between">
              <h2 className="bg-background/80 text-sm px-3 py-1 rounded-md mb-2 w-fit">
                {anime.status}
              </h2>
              <div>
                <h1 className="font-semibold text-white text-xl">
                  {anime.title}
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
                  {anime.synopsis.length > 100
                    ? anime.synopsis.slice(0, 100) + '...'
                    : anime.synopsis}
                </p>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default AnimeList
