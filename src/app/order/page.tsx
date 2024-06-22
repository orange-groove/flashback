import * as React from "react"
import { Box } from "@chakra-ui/react"

const OrderPage = () => (
  <Box
    as="iframe"
    src="https://online.skytab.com/159be0622ebd2df1f853b75c08601a94"
    title="Order Online"
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: "100%",
      height: "100%",
      border: "none",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      zIndex: 0,
    }}
  />
)

export default OrderPage
