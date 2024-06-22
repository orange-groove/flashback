import React from "react"
import { Flex, Heading } from "@chakra-ui/react"
import RichText from "@/components/RichText"
import { getSiteData } from "@/graphql/api"

export default async function AboutPage() {
  const { data } = await getSiteData()

  return (
    <>
      <Flex
        flexDirection="column"
        backgroundColor="black"
        py={[20, null, null, 60]}
        px={[10, null, null, 60]}
        width="100%"
        height="100vh"
        fontSize={20}
      >
        <Heading
          as="h1"
          fontSize={[32, 50]}
          variant="script"
          textAlign="center"
          m={20}
          color="yellow.400"
        >
          About Us
        </Heading>
        <RichText color="white">{data.aboutUs.content.json}</RichText>
      </Flex>
    </>
  )
}
