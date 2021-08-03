import React from 'react'
import { Input, Stack, InputGroup, InputLeftAddon, InputRightAddon, InputLeftElement, InputRightElement, } from "@chakra-ui/react"
import { PhoneIcon, CheckIcon, } from "@chakra-ui/icons"

export default function CustomInput() {
  return (
    <div>
      <Input placeholder="Basic usage" />
      <Stack spacing={3}>
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
        <Input placeholder="large size" size="lg" />
      </Stack>
      <Stack spacing={3}>
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
        <Input variant="unstyled" placeholder="Unstyled" />
      </Stack>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon children="+234" />
          <Input type="tel" placeholder="phone number" />
        </InputGroup>

        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        <InputGroup size="sm">
          <InputLeftAddon children="https://" />
          <Input placeholder="mysite" />
          <InputRightAddon children=".com" />
        </InputGroup>
      </Stack>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="gray.300" />}
          />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="$"
          />
          <Input placeholder="Enter amount" />
          <InputRightElement children={<CheckIcon color="green.500" />} />
        </InputGroup>
      </Stack>
      <Stack spacing={3}>
        <Input focusBorderColor="lime" placeholder="Here is a sample placeholder" />
        <Input
          focusBorderColor="pink.400"
          placeholder="Here is a sample placeholder"
        />
        <Input
          isInvalid
          errorBorderColor="red.300"
          placeholder="Here is a sample placeholder"
        />
        <Input
          isInvalid
          errorBorderColor="crimson"
          placeholder="Here is a sample placeholder"
        />
      </Stack>
    </div>
  )
}
