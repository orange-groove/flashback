import { extendTheme } from "@chakra-ui/react"
import "@fontsource/barlow-condensed"
import colors from "@/theme/colors"
import Heading from "@/theme/components/Heading"

const theme = extendTheme({
  colors,
  components: {
    Heading,
  },
  fonts: {
    heading: `'ThirstyRoughBold', sans-serif`,
    body: "'Roboto', 'Open Sans', sans-serif",
  },
  textStyles: {
    h1: {
      fontSize: ["48px", "72px"],
    },
    h2: {
      fontSize: ["36px", "48px"],
    },
    h3: {
      fontSize: ["28px", "30px"],
    },
    h4: {
      fontSize: ["18px", "20px"],
    },
    brand: {
      fontFamily: "'PlazaSHInline', sans-serif",
      "-webkit-text-stroke": "1px teal",
    },
  },
})

export default theme
