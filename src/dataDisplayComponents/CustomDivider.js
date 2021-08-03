import React from 'react'
import { Divider, Center, Stack, Text } from "@chakra-ui/react"

export default function CustomDivider() {
  return (
    <div>
      <Divider />
      <Divider orientation="horizontal" />
      <Center height="50px">
        <Divider orientation="vertical" />
      </Center>
      <Stack direction="row" h="100px" p={4}>
        <Divider orientation="vertical" />
        <Text>Chakra UI</Text>
      </Stack>
    </div>
  )
}
