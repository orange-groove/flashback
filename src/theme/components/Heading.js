import { defineStyleConfig } from "@chakra-ui/react"

const Heading = defineStyleConfig({
  baseStyle: {
    fontSize: "lg",
  },
  sizes: {
    sm: {
      fontSize: "lg",
    },
    md: {
      fontSize: "xl",
    },
    lg: {
      fontSize: "2xl",
    },
  },
  variants: {
    regular: {
      fontFamily: "'Roboto Condensed', sans-serif",
    },
    script: {
      fontFamily: "ThirstyRoughRegularTwo",
      fontWeight: "400",
    },
  },
  defaultProps: {
    variant: "regular",
  },
})

export default Heading
