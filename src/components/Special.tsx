import React from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"
import PropTypes from "prop-types"
import RichText from "@/components/RichText"

interface SpecialProps {
  title: any
  description: any
  image: any
  reverse?: boolean
}

const Special = ({ title, description, image, reverse }: SpecialProps) => {
  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection={{ base: "column", md: reverse ? "row-reverse" : "row" }}
    >
      <Flex
        width={{ base: "100%", md: "50%" }}
        height="600px"
        position="relative"
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          background={`url(${image}) center center/cover no-repeat`}
        />
        <Box
          display={{ base: "none", md: "block" }}
          background={`linear-gradient(${
            reverse ? "to right" : "to left"
          }, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%)`}
          position="absolute"
          width="100%"
          height="100%"
          zIndex={1}
        />
      </Flex>
      <Flex
        flexDirection="column"
        ml={5}
        width={{ base: "100%", md: "50%" }}
        gap={3}
        p={[3, 6]}
      >
        <Heading
          as="h2"
          fontSize={{ base: 40, md: 60 }}
          textTransform="uppercase"
          color="primary.main"
        >
          {title}
        </Heading>
        <Box color="white" fontSize={{ base: 16, md: 18 }}>
          <RichText>{description}</RichText>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Special
