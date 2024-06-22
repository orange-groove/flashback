"use client"

import { ChakraProvider } from "@chakra-ui/react"
import theme from "@/theme"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: { position: "top", duration: 5000, isClosable: true },
      }}
    >
      {children}
    </ChakraProvider>
  )
}
