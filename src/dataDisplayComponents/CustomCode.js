import React from 'react'
import { Code, Stack, } from "@chakra-ui/react"

export default function CustomCode() {
  return (
    <div>
      <Code>Hello world</Code>
      <Stack direction="row">
        <Code children="console.log(welcome)" />
        <Code colorScheme="red" children="var chakra = 'awesome!'" />
        <Code colorScheme="yellow" children="npm install chakra" />
      </Stack>
    </div>
  )
}
