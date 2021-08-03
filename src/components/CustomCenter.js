import React from 'react'
import { Center, Square, Circle, HStack, Box } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"

export default function CustomCenter() {
  return (
    <div>
      <Center bg="tomato" w="200px" h="30px" color="white" m="3">
        {/* Give it width or height */}
        This is the Center
      </Center>
      <HStack>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Center>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <Box as="span" fontWeight="bold" fontSize="xl">
            1
          </Box>
        </Center>
      </HStack>
      <HStack>
        <Circle size="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Circle>
        <Square size="40px" bg="purple.700" color="white">
          <PhoneIcon />
        </Square>
      </HStack>
    </div>
  )
}
