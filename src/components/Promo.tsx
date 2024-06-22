import React from "react"
import { Flex } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface PromoProps {
  children: React.ReactNode
}

const Promo = ({ children }: PromoProps) => {
  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      {children}
    </Flex>
  )
}

Promo.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Promo
