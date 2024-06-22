import * as React from "react"
import ContactForm from "@/components/ContactForm"
import { Box } from "@chakra-ui/react"

const ContactPage = () => {
  return (
    <Box backgroundColor="black" color="white" pb={10} mt={-6}>
      <ContactForm />
    </Box>
  )
}

export default ContactPage
