"use client"

import React from "react"
import {
  Box,
  Button,
  UnorderedList,
  ListItem,
  Flex,
  Text,
} from "@chakra-ui/react"
import Link from "next/link"
import { useSetAtom } from "jotai"
import menuItems from "@/content/links.json"
import { isOrderModalOpenAtom } from "@/state/modal"

function NavBar() {
  const setIsMenuModalOpen = useSetAtom(isOrderModalOpenAtom)

  const handleOrderClick = () => {
    setIsMenuModalOpen(true)
  }

  return (
    <Flex
      as="nav"
      position="fixed"
      zIndex="sticky"
      top={0}
      left={0}
      width="100%"
      maxWidth="100%"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="blackAlpha.800"
      px={4}
    >
      <Flex>
        <Text
          as={Link}
          href="/"
          textStyle="brand"
          fontSize="40px"
          color="white"
        >
          Flashback
        </Text>
      </Flex>
      <Flex
        as={UnorderedList}
        alignItems="center"
        justifyContent="right"
        pr={5}
      >
        {menuItems.map((item, index) => (
          <ListItem key={index} listStyleType="none">
            <Box
              as={Link}
              href={item.path}
              color="white"
              textTransform="uppercase"
              fontSize={18}
              fontFamily="'Barlow Condensed', sans-serif"
              mx={2}
              sx={{
                "&:hover": {
                  textDecoration: "none",
                  color: "primary.200",
                },
              }}
            >
              {item.text}
            </Box>
            <Box as="span" color="white">
              {index !== menuItems.length - 1 && "•"}
            </Box>
          </ListItem>
        ))}
        <ListItem listStyleType="none">
          <Button
            variant="solid"
            colorScheme="teal"
            textTransform="uppercase"
            fontSize={18}
            fontFamily="'Barlow Condensed', sans-serif"
            ml={2}
            onClick={handleOrderClick}
          >
            Order Online ››
          </Button>
        </ListItem>
      </Flex>
    </Flex>
  )
}

export default NavBar
