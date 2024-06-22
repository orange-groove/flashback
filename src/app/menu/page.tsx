import * as React from "react"
import menuJson from "@/content/menu.json"
import { Box, Flex, Heading } from "@chakra-ui/react"

const MenuPage = () => {
  return (
    <>
      <Flex flexDirection="column" mt="60px">
        <Flex
          backgroundColor="black"
          height="300px"
          justifyContent="center"
          alignItems="center"
          mt="-60px"
        >
          <Heading
            as="h1"
            fontSize={[32, 60]}
            color="white"
            variant="script"
            textAlign="center"
            mb={6}
          >
            Menu
          </Heading>
        </Flex>
        {Object.entries(menuJson).map(([categoryName, category]) => (
          <Flex
            key={categoryName}
            flexDirection="column"
            width="100%"
            position="relative"
            p={6}
          >
            <Flex justifyContent="center" alignItems="center" mb={6}>
              <Box height="1px" width="100%" border="1px solid black" />
              <Heading
                as="h2"
                fontSize={[28, 40]}
                variant="regular"
                flexShrink={0}
                px={6}
                color="#bf0000"
              >
                {categoryName}
              </Heading>
              <Box height="1px" width="100%" border="1px solid black" />
            </Flex>
            <Box
              as="ul"
              fontWeight="bold"
              gap={6}
              listStyleType="none"
              sx={{
                columnCount: [1, 2, 4],
              }}
            >
              {category.items.map((item) => (
                <Flex
                  key={item.name}
                  as="li"
                  p={3}
                  borderTop="1px solid"
                  borderColor="white"
                  gap={3}
                  justifyContent="space-between"
                >
                  <Flex>{item.name}</Flex>
                  <Flex>${item.price}</Flex>
                </Flex>
              ))}
            </Box>
          </Flex>
        ))}
      </Flex>
    </>
  )
}

export default MenuPage
