import { Heading, Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import { format } from "date-fns"
import ReactHtmlParser from "react-html-parser"

interface EventProps {
  event: FlashbackEvent
}

function Event({ event }: EventProps) {
  const date = new Date(event.start.dateTime)

  return (
    <Flex
      flexDirection={["column", null, null, "row"]}
      bgColor="black"
      color="white"
      gap={[2, null, null, 6]}
    >
      <Box width={["100%", null, null, "50%"]}>
        <Text
          fontSize={["2xl", "3xl"]}
          textTransform="uppercase"
          color="primary.200"
        >
          {event.summary}
        </Text>
      </Box>
      <Box width={["100%", null, null, "50%"]}>
        <Heading as="h3" fontSize="2xl" lineHeight={1.5} mb={2}>
          {format(date, "ccc, LLL do @ h:mm a")}
        </Heading>
        <Text fontSize="md">{ReactHtmlParser(event.description)}</Text>
      </Box>
    </Flex>
  )
}

export default Event
