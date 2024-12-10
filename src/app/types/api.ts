export interface ImageUrls {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface Trailer {
  youtube_id: string
  url?: string
  embed_url?: string
  images: {
    image_url?: string
    small_image_url?: string
    medium_image_url?: string
    large_image_url?: string
    maximum_image_url?: string
  }
}

export interface Title {
  type: string
  title: string
}

export interface PublishedDate {
  day: number | null
  month: number | null
  year: number | null
}

export interface Published {
  from: string | null
  to: string | null
  prop: {
    from: PublishedDate
    to: PublishedDate
  }
  string: string | null
}

export interface Genre {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Theme {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Demographic {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Author {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Serialization {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Broadcast {
  day: string
  time: string
  timezone: string
  string: string
}

export interface Pagination {
  last_visible_page: number
  has_next_page: boolean
  current_page: number
  items: {
    count: number
    total: number
    per_page: number
  }
}

export interface Producer {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface AnimeData {
  mal_id: number
  url: string
  images: {
    jpg: ImageUrls
    webp: ImageUrls
  }
  trailer: Trailer
  approved: boolean
  titles: Title[]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: {
    from: string
    to: string
    prop: {
      from: PublishedDate
      to: PublishedDate
    }
    string: string
  }
  duration: string
  rating: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string
  season: string
  year: number
  broadcast: Broadcast
  producers: Producer[]
  licensors: Producer[]
  studios: Producer[]
  genres: Genre[]
  explicit_genres: Genre[]
  themes: Theme[]
  demographics: Demographic[]
}

export interface MangaData {
  mal_id: number
  url: string
  images: {
    jpg: ImageUrls
    webp: ImageUrls
  }
  approved: boolean
  titles: Title[]
  title: string
  title_english: string | null
  title_japanese: string | null
  title_synonyms: string[]
  type: string | null
  chapters: number | null
  volumes: number | null
  status: string
  publishing: boolean
  published: Published
  score: number | null
  scored: number | null
  scored_by: number | null
  rank: number | null
  popularity: number | null
  members: number | null
  favorites: number | null
  synopsis: string | null
  background: string | null
  authors: Author[]
  serializations: Serialization[]
  genres: Genre[]
  explicit_genres: Genre[]
  themes: Theme[]
  demographics: Demographic[]
}

export interface ApiResponse {
  pagination: Pagination
  data: AnimeData[] | MangaData[]
}
