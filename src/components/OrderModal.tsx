"use client"

import React from "react"
import { useAtom } from "jotai"
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { isOrderModalOpenAtom } from "@/state/modal"

const OrderModal = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useAtom(isOrderModalOpenAtom)

  const handleClose = () => {
    setIsMenuModalOpen(false)
  }

  return (
    <Modal size="full" isOpen={isMenuModalOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Order Online</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            as="iframe"
            src="https://online.skytab.com/159be0622ebd2df1f853b75c08601a94"
            title="Order Online"
            sx={{
              position: "absolute",
              top: 50,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "calc(100% - 50px)",
              border: "none",
              margin: 0,
              padding: 0,
              overflow: "hidden",
              zIndex: 0,
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default OrderModal
