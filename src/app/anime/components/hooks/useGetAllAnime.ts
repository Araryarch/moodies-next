import { useQuery } from '@tanstack/react-query'
import api from '@/app/api/Jikan'
import { AnimeData } from '@/app/types/api'

const useGetAllAnime = (page: number = 1, genre: number | null = null) => {
  const { data, isLoading, isError, error } = useQuery<AnimeData[]>({
    queryKey: ['anime', page, genre],
    queryFn: async () => {
      const params: { page: number; genres?: number } = { page }
      if (genre) {
        params.genres = genre
      }
      const response = await api.get('/anime', { params })
      return response.data
    },
  })

  return { data, isLoading, isError, error }
}

export default useGetAllAnime
