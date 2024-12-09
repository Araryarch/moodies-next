import { useQuery } from '@tanstack/react-query'
import api from '@/app/api/Jikan'
import { MangaData } from '@/app/types/api'

const useGetAllManga = (page: number = 1, genre: number | null = null) => {
  const { data, isLoading, isError, error } = useQuery<MangaData[]>({
    queryKey: ['manga', page, genre],
    queryFn: async () => {
      const params: { page: number; genres?: number } = { page }
      if (genre) {
        params.genres = genre
      }
      const response = await api.get('/manga', { params })
      return response.data
    },
  })

  return { data, isLoading, isError, error }
}

export default useGetAllManga
