import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'
import axiosRateLimit from 'axios-rate-limit'

const api = axiosRateLimit(axios.create(), {
  maxRequests: 5,
  perMilliseconds: 10000,
  maxRPS: 5,
})

api.defaults.baseURL = 'https://api.jikan.moe/v4'
api.defaults.headers['Content-Type'] = 'application/json'

const retryRequest = async (
  error: AxiosError,
  retries = 3
): Promise<AxiosResponse> => {
  const { config, response } = error
  if (response?.status === 429 && retries > 0) {
    const retryAfter = response.headers['retry-after'] || 1
    console.log(`Rate limit exceeded. Retrying after ${retryAfter} seconds...`)

    await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000))

    return api(config as AxiosRequestConfig)
  }
  return Promise.reject(error)
}

api.interceptors.response.use(
  (response) => response,
  (error) => retryRequest(error)
)

export default api
