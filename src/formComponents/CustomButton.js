import React from 'react'
import { Button, ButtonGroup, Stack, IconButton } from "@chakra-ui/react"
import { EmailIcon, ArrowForwardIcon, AddIcon } from "@chakra-ui/icons"

export default function CustomButton() {
  return (
    <div>
      <Button colorScheme="whatsapp">Button</Button>
      <h1 className="text">Hello</h1>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="teal" variant="solid">
          Button
        </Button>
        <Button colorScheme="teal" variant="outline">
          Button
        </Button>
        <Button colorScheme="teal" variant="ghost">
          Button
        </Button>
        <Button colorScheme="teal" variant="link">
          Button
        </Button>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline">
          Call us
        </Button>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Button isLoading={true} colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          isLoading
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
      </Stack>
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="blue">Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button mr="-px">Save</Button>
        <IconButton aria-label="Add to friends" icon={<AddIcon />} />
      </ButtonGroup>
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.500"
      >
        Button
      </Button>
    </div>
  )
}
