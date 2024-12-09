import { useQuery } from '@tanstack/react-query'
import api from '@/app/api/Jikan'

const useFetchManga = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['manga'],
    queryFn: async () => {
      const response = await api.get('/top/manga')
      return response.data
    },
  })

  return { data, isLoading, isError, error }
}

export default useFetchManga
