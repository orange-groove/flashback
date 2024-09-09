import * as React from "react"
import {
  FaFacebookSquare as Facebook,
  FaYelp as Yelp,
  FaMapMarkerAlt as MapMarker,
  FaPhoneAlt as Phone,
} from "react-icons/fa"
import { Box, Divider, Flex, Heading, Link } from "@chakra-ui/react"
import Map from "@/components/Map"

const Footer = () => {
  return (
    <Flex
      as="footer"
      position="relative"
      flexDirection="column"
      flexShrink={0}
      backgroundColor="white"
      height={[800, 500]}
    >
      <Flex width="100%" height="100%" flexDirection={["column", "row"]}>
        <Box width="100%" height="100%">
          <Map />
        </Box>
        {/* Social icons and contact information */}
        <Flex flexDirection="column" color="black" gap={6} p={8} lineHeight={1}>
          <Box>
            <Heading as="h3" variant="script" size="xl">
              Location
            </Heading>
            <Flex alignItems="top" gap={2}>
              <MapMarker />
              <Box>10010 B Ford Ave, Richmond Hill GA 31324</Box>
            </Flex>
            <Flex alignItems="top" gap={2}>
              <Phone />
              <Box>
                <Link
                  href="tel:912.445.0119"
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  912.445.0119
                </Link>
              </Box>
            </Flex>
          </Box>
          <Flex
            as="ul"
            sx={{
              width: "100%",
              listStyle: "none",
              alignItems: "center",
              justifyContent: { base: "center", sm: "start" },
              gap: 2,
            }}
          >
            {/* Social icons go here */}
            <li>
              <Link
                href={`https://www.facebook.com/profile.php?id=100063738062225`}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <Facebook size={32} />
              </Link>
            </li>
            <li>
              <Link
                href={`https://www.yelp.com/biz/flashback-richmond-hill`}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <Yelp size={32} />
              </Link>
            </li>
          </Flex>

          <Box>
            <Heading as="h3" variant="script" size="xl" mb={2}>
              Hours
            </Heading>
            <Flex sx={{ flexDirection: "column", gap: 2 }}>
              <Box>MON-THURS: 2:00PM - 12:00AM</Box>
              <Box>KITCHEN CLOSES AT 10PM</Box>
              <Box sx={{ borderBottom: "1px solid black" }} />
              <Box>FRI-SAT: 11:30AM - 2:00AM</Box>
              <Box>KITCHEN CLOSES AT 12:00AM</Box>
              <Box sx={{ borderBottom: "1px solid black" }} />
              <Box>SUN: 12:30PM - 12:00AM</Box>
              <Box>KITCHEN CLOSES AT 10:PM</Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
