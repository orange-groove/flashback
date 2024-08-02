"use client"

import { Box, Flex, Heading, Image, useBreakpointValue } from "@chakra-ui/react"
import React from "react"
import Slider from "react-slick"
import { Promotion } from "@/types"
import Link from "next/link"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { slide } from "react-burger-menu"

interface PromoSectionProps {
  promos: Promotion[]
}

export default function PromoSection({ promos }: PromoSectionProps) {
  const slidesToShow =
    useBreakpointValue({
      base: 1,
      md: 3,
    }) || 1

  return (
    <Flex
      as="section"
      flexDirection="column"
      justifyContent="center"
      backgroundColor="black"
      color="white"
    >
      <Box
        sx={{
          w: "100%",
          m: "0 auto",
          textAlign: "center",
        }}
      >
        <Heading
          as="h2"
          textStyle="h2"
          size={{ base: "2xl", md: "3xl" }}
          variant="script"
          color="white"
          p={6}
          mb={10}
        >
          Featured Events
        </Heading>
        <Slider
          speed={500}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToShow}
          className="center"
          adaptiveHeight
          infinite
          pauseOnHover
          dots
        >
          {promos?.map((promo, key) => (
            <Link key={`promo-${key}`} href={promo.url || "#"} target="_blank">
              <Image src={promo.image.url} alt={promo.title} />
            </Link>
          ))}
        </Slider>
      </Box>
    </Flex>
  )
}
