import { useQuery } from '@tanstack/react-query'
import api from '@/app/api/Jikan'

const useFetchAnime = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['anime'],
    queryFn: async () => {
      const response = await api.get('/top/anime')
      return response.data
    },
  })

  return { data, isLoading, isError, error }
}

export default useFetchAnime
