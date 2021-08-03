import React from 'react'
import { Box } from "@chakra-ui/react"
import AirbnbExample from '../containers/AirbnbExample'

const CustomBox = () => {
  return (
    <div>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <AirbnbExample />
    </div>
  )
}

export default CustomBox;