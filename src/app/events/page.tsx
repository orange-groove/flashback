import * as React from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"
import EventsList from "@/components/EventsList"

const EventsPage = () => (
  <>
    <Flex bgColor="black" flexDirection="column" margin="0 auto">
      <Box
        textAlign="center"
        p={4}
        position="fixed"
        top="0px"
        width="100%"
        backgroundColor="black"
        background="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 83%, rgba(0,0,0,0) 100%)"
        pt="100px"
        pb="40px"
        zIndex={1}
      >
        <Heading
          as="h2"
          textStyle="h2"
          size="3xl"
          variant="script"
          color="white"
          backgroundColor="black"
          mb={8}
        >
          Upcoming Events
        </Heading>
      </Box>
      <EventsList limit={40} mt="200px" padding={6} />
    </Flex>
  </>
)

export default EventsPage
