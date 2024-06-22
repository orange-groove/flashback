"use client"

import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import React from "react"
import { motion } from "framer-motion"
import HeroVideo from "@/components/HeroVideo"

interface HeroSectionProps {
  data: any
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <Box as="section">
      <Box position="relative" height="100vh">
        <HeroVideo videos={data?.homePage?.videosCollection?.items} />
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={10}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="100%"
          zIndex={2}
          textAlign="center"
        >
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 5 }}
          >
            <Image
              src={data?.asset?.url}
              alt="Flashback Logo"
              width={["75%", "33.3%"]}
              m="0 auto"
            />
          </motion.div>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="start"
            gap={5}
            color="white"
            width="100%"
            px={[4, 2]}
          >
            <Heading as="h1" variant="script" fontSize={[32, 60]} noOfLines={2}>
              The Coastal Empire's Premiere Rock Venue
            </Heading>
            <Heading as="h2" fontSize={[28, 40]} noOfLines={2}>
              Proudly Celebrating the 60's, 70's & 80's and more!
            </Heading>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
