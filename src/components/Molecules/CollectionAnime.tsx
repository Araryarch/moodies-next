'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

interface CollectionProps {
  anime_mal_id: string | null | undefined
  user_email: string | null | undefined
  anime_image?: string
  anime_title?: string
}

const CollectionAnime = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}: CollectionProps) => {
  const [isCreated, setIsCreated] = useState<boolean>(false)

  const handleCollection = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const data = { anime_mal_id, user_email, anime_image, anime_title }

    try {
      const response = await fetch(`/api/v1/collectionAnime`, {
        method: 'POST',
        body: JSON.stringify(data),
      })

      const collection = await response.json()

      if (collection.status === 200) {
        setIsCreated(collection.isCreated)
        toast.success('Added to collection successfully!')
      }
    } catch {
      toast.error('Failed to add to collection')
    }
  }

  return (
    <>
      {!isCreated && (
        <Button className="w-fit" onClick={handleCollection}>
          Add to Collection
        </Button>
      )}
    </>
  )
}

export default CollectionAnime
