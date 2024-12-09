import axios from 'axios'
import { ApiResponse } from '@/app/types/api'

const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getFetchData = async (
  resource: string,
  query?: string
): Promise<ApiResponse> => {
  try {
    const response = await api.get(`/${resource}?q=${query}`)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export default api
