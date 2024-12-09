'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

interface CollectionProps {
  manga_mal_id: string | null | undefined
  user_email: string | null | undefined
  manga_image?: string
  manga_title?: string
}

const CollectionManga = ({
  manga_mal_id,
  user_email,
  manga_image,
  manga_title,
}: CollectionProps) => {
  const [isCreated, setIsCreated] = useState<boolean>(false)

  const handleCollection = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const data = { manga_mal_id, user_email, manga_image, manga_title }

    try {
      const response = await fetch(`/api/v1/collectionManga`, {
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

export default CollectionManga
