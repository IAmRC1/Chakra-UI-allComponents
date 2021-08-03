import React from 'react'
import { Image, Box, Stack, } from "@chakra-ui/react"

export default function CustomImage() {
  return (
    <div>
      <Box boxSize="sm">
        <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
      </Box>
      <Stack direction="row">
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
        />
        <Image
          boxSize="150px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image boxSize="200px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Stack>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://bit.ly/sage-adebayo"
        alt="Segun Adebayo"
      />
      <Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />
    </div>
  )
}
