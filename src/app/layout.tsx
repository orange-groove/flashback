import "./globals.css"
import { Inter } from "next/font/google"
import { Box, Flex, Show, Hide } from "@chakra-ui/react"
import NavBar from "@/components/NavBar"
import OrderModal from "@/components/OrderModal"
import MobileNav from "@/components/MobileNav"
import Providers from "@/components/Providers"
import Footer from "@/components/Footer"
import Head from "next/head"

// export const metadata = {
//   title: "Flashback",
//   description: `Welcome to Flashback!`,
// };

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <Head>
        <title>Flashback</title>
        <meta name="description" content="Welcome to Flashback!" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/PlazaSHInline/font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/thirstyroughlight-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/thirstyroughbold-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/thirstyroughregulartwo-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Providers>
          <Box
            // as={motion.div}
            height="100%"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.25 }}
          >
            <Box id="outer-container" height="100%" p={0}>
              <Show below="md">
                <MobileNav />
              </Show>
              <Hide below="md">
                <NavBar />
              </Hide>
              <Flex id="page-wrap" flexDirection="column" height="100%">
                <Box flexGrow={1} position="relative">
                  {children}
                </Box>
                <Footer />
              </Flex>
            </Box>
          </Box>
          <OrderModal />
        </Providers>
      </body>
    </html>
  )
}
