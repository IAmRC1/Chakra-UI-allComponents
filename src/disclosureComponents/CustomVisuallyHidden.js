import React from 'react'
import { VisuallyHidden, Button } from "@chakra-ui/react"
import { CheckIcon } from '@chakra-ui/icons'

export default function CustomVisuallyHidden() {
  return (
    <div>
      <Example />
      <Example1 />
    </div>
  )
}

function Example() {
  return (
    <Button>
      <VisuallyHidden>Checkmark</VisuallyHidden>
      <CheckIcon />
    </Button>
  )
}

function Example1() {
  return (
    <Box>
      <Heading>Title and description</Heading>
      <VisuallyHidden>This will be hidden</VisuallyHidden>
    </Box>
  )
}
