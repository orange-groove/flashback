"use client"

import React from "react"
import { Button, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"
import useEvents from "@/hooks/useEvents"
import EventsList from "@/components/EventsList"

function UpcomingEventsSection() {
  const { data: events } = useEvents()

  return (
    <Flex
      flexDirection="column"
      as="section"
      backgroundColor="black"
      alignItems="center"
      justifyContent="center"
      gap={3}
      p={[3, 20]}
    >
      <Heading
        as="h2"
        textStyle="h2"
        size={["2xl", "3xl"]}
        variant="script"
        color="white"
        mb={10}
      >
        Upcoming Events
      </Heading>
      <EventsList limit={10} />

      {!!events.length && (
        <Button
          as={Link}
          variant="outline"
          colorScheme="teal"
          href="/events"
          mt={5}
        >
          View All ››
        </Button>
      )}
    </Flex>
  )
}

export default UpcomingEventsSection
