import React from "react"
import { Button, Flex, Heading } from "@chakra-ui/react"
import Special from "@/components/Special"
import Link from "next/link"
import { FoodSpecial } from "@/types"

interface SpecialsSectionProps {
  specials: FoodSpecial[]
}

export default async function SpecialsSection({
  specials,
}: SpecialsSectionProps) {
  return (
    <Flex
      flexDirection="column"
      as="section"
      backgroundColor="black"
      alignItems="center"
      justifyContent="center"
      gap={6}
      py={20}
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
        Food Specials
      </Heading>

      {specials?.map((special, index) => (
        <Special
          key={special.id}
          title={special.title}
          image={special.image.url}
          description={special.description.json}
          reverse={index % 2 !== 0}
        />
      ))}

      <Button
        as={Link}
        variant="outline"
        colorScheme="teal"
        href="/menu"
        mt={10}
      >
        View Menu ››
      </Button>
    </Flex>
  )
}
