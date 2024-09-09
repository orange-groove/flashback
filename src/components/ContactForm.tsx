"use client"

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react"
import Link from "next/link"

import * as React from "react"

export default function ContactForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const toast = useToast()

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
      const response = await res.json()

      toast({
        title: response.message,
        status: "success",
      })
    } catch (error: any) {
      toast({
        title: error.message,
        status: "error",
      })
    }
  }

  return (
    <Box
      w={["90%", "50%"]}
      h="100%"
      maxW="500px"
      margin="0 auto"
      pt={["100px", "200px"]}
      backgroundColor="black"
    >
      <Heading
        as="h1"
        fontSize={[32, 50]}
        variant="script"
        textAlign="center"
        mb={6}
        color="white"
      >
        Contact Us
      </Heading>
      <Flex as="form" flexDirection="column" gap={5} h="450px" name="contact">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input name="name" size="lg" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input name="email" type="email" size="lg" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" rows={5} onChange={handleChange} />
        </FormControl>
        <Button variant="outline" colorScheme="teal" onClick={handleSubmit}>
          Send Message
        </Button>
      </Flex>

      <Box mb={6}>
        Looking to book a gig at Flashback? {/* TODO */}
        <Text
          as={Link}
          color="teal"
          href="/band-signup"
          textDecoration="underline"
        >
          Fill out the artist submission form
        </Text>
      </Box>
    </Box>
  )
}
