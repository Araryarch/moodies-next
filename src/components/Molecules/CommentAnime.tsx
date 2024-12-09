'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

interface CommentAnimeProps {
  anime_mal_id: string | null | undefined
  user_email: string | null | undefined
  username: string | null | undefined
  anime_title: string | null | undefined
}

const CommentAnime = ({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}: CommentAnimeProps) => {
  const [comment, setComment] = useState('')

  const router = useRouter()

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handlePosting = async (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.type === 'keydown' && (e as React.KeyboardEvent).key !== 'Enter')
      return

    e.preventDefault()

    if (!comment.trim()) {
      toast.error('Please write a comment before posting.')
      return
    }

    const data = { anime_mal_id, user_email, comment, username, anime_title }

    try {
      const response = await fetch(`/api/v1/commentAnime`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const postComment = await response.json()
      if (postComment.status === 200) {
        toast.success('Comment Posted')
        setComment('')
        router.refresh()
      }
    } catch (error) {
      console.error('Error posting comment:', error)
      toast.error('Failed to post comment')
    }
  }

  return (
    <div className="flex gap-2 justify-center items-center py-5">
      <Textarea
        value={comment}
        onChange={handleInput}
        placeholder="Write your comment..."
        onKeyDown={(e) => e.key === 'Enter' && handlePosting(e)}
      />
      <Button onClick={handlePosting}>Comment</Button>
    </div>
  )
}

export default CommentAnime
