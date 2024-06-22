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

import * as React from "react"

export default function BandSignupForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    band: "",
    instagram: "",
    facebook: "",
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
      const res = await fetch("/send-band-signup-email", {
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
    <Box w="100%" maxW="900px" margin="0 auto" mt={["100px", "200px"]}>
      <Heading
        as="h1"
        fontSize={[32, 50]}
        variant="script"
        textAlign="center"
        mb={12}
      >
        Band Submissions
      </Heading>
      <Flex w="100%" flexDirection={["column-reverse", "row"]} gap={5} p={5}>
        <Flex
          as="form"
          flexDirection="column"
          gap={5}
          width={["100%", "50%"]}
          name="band-signup"
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input name="name" size="lg" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              size="lg"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              name="phone"
              type="phone"
              size="lg"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Band Name</FormLabel>
            <Input name="band" size="lg" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Band Instagram Page</FormLabel>
            <Input name="instagram" size="lg" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Band Facebook Page</FormLabel>
            <Input name="facebook" size="lg" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" rows={5} onChange={handleChange} />
          </FormControl>
          <Button variant="outline" onClick={handleSubmit}>
            Send Message
          </Button>
        </Flex>
        <Flex width={["100%", "50%"]} flexDirection="column" gap={4}>
          <Text as="h4" textStyle="h4">
            Want to peform at Flashback? Fill out this form and we'll get back
            to you.
          </Text>
          <Text fontWeight={700} fontSize={20}>
            ONE submission per band.
          </Text>
          <Text fontWeight={700} fontSize={20}>
            Multiple submissions will be ignored.
          </Text>
          <Text as="h4" textStyle="h4">
            A member of our team will reach out to you after we have assessed
            your submission. We kindly request that you refrain from reaching
            out to the restaurant regarding updates on your submission.
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
