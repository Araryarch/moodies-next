'use client'

import Youtube from 'react-youtube'

interface VideoPlayerProps {
  YoutubeId: string
}

const VideoPlayer = ({ YoutubeId }: VideoPlayerProps) => {
  const option = {
    width: 850,
    height: 450,
  }

  return (
    <Youtube
      videoId={YoutubeId}
      onReady={(e) => e.target.pauseVideo()}
      opts={option}
    />
  )
}

export default VideoPlayer
