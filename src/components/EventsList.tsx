"use client"

import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import type { BoxProps } from "@chakra-ui/react"
import React from "react"
import Event from "@/components/Event"
import useEvents from "@/hooks/useEvents"

interface EventsListProps extends BoxProps {
  limit: number
}

function EventsList({ limit, ...props }: EventsListProps) {
  const { data: events, isLoading } = useEvents()

  return (
    <Box w={["90%", "75%"]} m="0 auto" {...props}>
      {!!events.length || isLoading ? (
        <Flex
          as={UnorderedList}
          flexDirection="column"
          fontWeight="bold"
          gap={3}
          listStyleType="none"
        >
          {events?.slice(0, limit).map((event) => (
            <ListItem
              key={event.id}
              p={3}
              borderTop="1px solid"
              borderColor="white"
            >
              <Event event={event} />
            </ListItem>
          ))}
        </Flex>
      ) : (
        <Box color="primary.200" textAlign="center" fontSize={24}>
          No upcoming events
        </Box>
      )}
    </Box>
  )
}

export default EventsList
