"use client"

import React from "react"
import { Box } from "@chakra-ui/react"
import { FaVolumeUp as VolumeUp, FaVolumeMute as Mute } from "react-icons/fa"

interface HeroVideoProps {
  videos: any[]
}

export default function HeroVideo({ videos }: HeroVideoProps) {
  const videoPlayerRef = React.useRef<HTMLVideoElement>(null)
  const playRef = React.useRef<HTMLDivElement>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0)
  const [isMuted, setIsMuted] = React.useState(true)

  const loadAndPlayVideo = React.useCallback(async (index: number) => {
    if (videoPlayerRef.current && videos) {
      const video = videos?.[index]
      videoPlayerRef.current.src = video.url
      await videoPlayerRef.current.play()
    }
  }, [])

  React.useEffect(() => {
    const handleVideoEnded = () => {
      setCurrentVideoIndex((prevIndex) => {
        if (prevIndex + 1 < videos?.length) {
          return prevIndex + 1
        } else {
          // Loop back to the first video
          return 0
        }
      })
    }

    if (videoPlayerRef.current) {
      videoPlayerRef.current.addEventListener("ended", handleVideoEnded)
    }

    // Cleanup function
    return () => {
      if (videoPlayerRef.current) {
        videoPlayerRef.current.removeEventListener("ended", handleVideoEnded)
      }
    }
  }, [videos?.length])

  React.useEffect(() => {
    loadAndPlayVideo(currentVideoIndex)
  }, [currentVideoIndex, loadAndPlayVideo])

  return (
    <Box position="relative" height="100%" width="100%">
      <Box
        as="video"
        ref={videoPlayerRef}
        position="fixed"
        objectFit="cover"
        height="100vh"
        width="100%"
        zIndex={0}
        left={0}
        top={0}
        muted={isMuted}
        autoPlay
        loop
      />
      <Box
        width="100%"
        height="100%"
        background="linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%)"
        position="absolute"
        zIndex={1}
      />
      <Box
        ref={playRef}
        onClick={() => setIsMuted(!isMuted)}
        position="absolute"
        top={20}
        right={10}
        zIndex={1}
        color="white"
      >
        {isMuted ? <Mute size={30} /> : <VolumeUp size={30} />}
      </Box>
    </Box>
  )
  return null
}
