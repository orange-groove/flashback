"use client"

import { Box, Flex, Image } from "@chakra-ui/react"
import React from "react"
import { Carousel } from "nuka-carousel"
import { Promotion } from "@/types"

interface PromoSectionProps {
  promos: Promotion[]
}

export default async function PromoSection({ promos }: PromoSectionProps) {
  return (
    <Flex
      as="section"
      flexDirection="column"
      justifyContent="center"
      backgroundColor="black"
      color="white"
    >
      <Box sx={{ width: "50%", m: "0 auto" }}>
        <Carousel autoplay={true} autoplayInterval={5000}>
          {promos?.map((promo, index) => (
            <Flex
              key={index}
              width="100%"
              height="100%"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              flexDirection="column"
            >
              <Image
                src={promo.image.url}
                alt={promo.image.title}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Flex>
          ))}
        </Carousel>
      </Box>
    </Flex>
  )
}
