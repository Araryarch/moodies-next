'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()

  const handleSearch = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    const keyword = searchRef.current?.value
    if (keyword?.trim()) {
      const decodedURI = decodeURI(keyword)
      router.push(`/search/anime/${decodedURI}`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  return (
    <div className="flex gap-2">
      <Input
        className="max-w-xs"
        placeholder="search here..."
        ref={searchRef}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearch}>
        <Search />
      </Button>
    </div>
  )
}

export default InputSearch
