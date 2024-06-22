"use client"

import React, { useState } from "react"
// @ts-ignore
import Menu from "react-burger-menu/lib/menus/push"
import { Button, Text } from "@chakra-ui/react"
import { useSetAtom } from "jotai"
import menuItems from "@/content/links.json"
import { isOrderModalOpenAtom } from "@/state/modal"
import theme from "@/theme"
import Link from "next/link"

function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const setIsMenuModalOpen = useSetAtom(isOrderModalOpenAtom)

  const handleOrderClick = () => {
    setIsMenuModalOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleStateChange = (state: any) => {
    setIsOpen(state.isOpen)
  }

  return (
    <Menu
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      onStateChange={handleStateChange}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      styles={{
        bmBurgerButton: {
          position: "fixed",
          width: "36px",
          height: "30px",
          left: "36px",
          top: "36px",
        },
        bmBurgerBars: {
          background: theme.colors.primary["200"],
        },
        bmBurgerBarsHover: {
          background: theme.colors.primary["200"],
        },
        bmCrossButton: {
          height: "36px",
          width: "36px",
          right: "24px",
        },
        bmCross: {
          background: theme.colors.gray["200"],
          position: "absolute",
          width: "6px",
          height: "40px",
          "&:firstChild": {
            transform: "rotate(45deg)",
          },
        },
        bmMenuWrap: {
          position: "fixed",
          height: "100%",
        },
        bmMenu: {
          background: "#000000",
          padding: "2.5em 1.5em 0",
          fontSize: "1.15em",
        },
        bmMorphShape: {
          fill: "#473737",
        },
        bmItemList: {
          display: "flex",
          flexDirection: "column",
          gap: 3,
          color: theme.colors.gray["200"],
          padding: "0.8em",
          fontFamily: "'Barlow Condensed', sans-serif",
        },
        // bmItem: {},
        bmOverlay: {
          background: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      {menuItems.map((item, index) => (
        <Text
          as={Link}
          variant=""
          fontSize={32}
          key={index}
          onClick={handleClose}
          href={item.path}
        >
          {item.text}
        </Text>
      ))}
      <Button
        variant="solid"
        colorScheme="teal"
        textTransform="uppercase"
        fontSize={24}
        mt={4}
        onClick={handleOrderClick}
      >
        Order Online ››
      </Button>
    </Menu>
  )
}

export default MobileNav
