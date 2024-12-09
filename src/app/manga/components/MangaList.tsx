'use client'

import React, { useState, useEffect } from 'react'
import useGetAllManga from './hooks/useGetAllManga'
import Image from 'next/image'
import { MangaData } from '@/app/types/api'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import api from '@/app/api/Jikan'

interface MangaResponse {
  data: MangaData[]
}

interface Genre {
  mal_id: number
  name: string
}

const MangaList = () => {
  const [page, setPage] = useState(1)
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null)
  const [genres, setGenres] = useState<Genre[]>([])

  const { data, isLoading } = useGetAllManga(page, selectedGenre)
  const mangas = (data as unknown as MangaResponse)?.data

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await api.get('/genres/manga')
        setGenres(response.data.data)
      } catch (error) {
        console.error('Error fetching genres:', error)
      }
    }

    fetchGenres()
  }, [])

  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  const handleGenreChange = (genreId: string) => {
    setSelectedGenre(genreId === 'all' ? null : parseInt(genreId))
    setPage(1)
  }

  const handleMoodBasedGenre = () => {
    const keywords = JSON.parse(localStorage.getItem('keywords') || '[]')
    const lastKeyword = keywords[keywords.length - 1]?.toLowerCase()

    if (lastKeyword) {
      let matchedGenreId: number | null = null

      switch (lastKeyword) {
        case 'senang':
          matchedGenreId = 1 //! Misal genre 'Action'
          break
        case 'sedih':
          matchedGenreId = 2 //! Misal genre 'Drama'
          break
        case 'ceria':
          matchedGenreId = 3 //! Misal genre 'Comedy'
          break
        case 'seru':
          matchedGenreId = 4 //! Misal genre 'Adventure'
          break
        default:
          break
      }

      if (matchedGenreId) {
        setSelectedGenre(matchedGenreId)
        setPage(1)
      } else {
        alert('No matching genre found for the current mood.')
      }
    } else {
      alert('No mood detected or genres available.')
    }
  }

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="w-48">
            <Select value="all" onValueChange={handleGenreChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genres</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={handleMoodBasedGenre}
            className="ml-4"
            variant={'outline'}
          >
            ✨ AI Generate
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-background p-4 rounded-lg shadow-md animate-pulse"
              >
                <div className="w-full h-56 bg-gray-300 rounded-md mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            ))}
        </div>

        <div className="flex justify-center mt-6 items-center">
          <Button disabled>Prev</Button>
          <span className="mx-4 text-lg">...</span>
          <Button disabled>Next</Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="w-48">
          <Select
            value={selectedGenre?.toString() || 'all'}
            onValueChange={handleGenreChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              {genres.map((genre) => (
                <SelectItem key={genre.mal_id} value={genre.mal_id.toString()}>
                  {genre.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={handleMoodBasedGenre}
          className="ml-4"
          variant={'outline'}
        >
          ✨ AI Generate
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mangas?.map((manga: MangaData, index: number) => (
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
              {manga.synopsis}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6 items-center">
        <Button onClick={handlePrev} disabled={page === 1}>
          Prev
        </Button>
        <span className="mx-4 text-lg">{page}</span>
        <Button onClick={handleNext} disabled={mangas?.length === 0}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default MangaList
