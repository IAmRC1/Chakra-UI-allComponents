import React from 'react'
import { PinInput, PinInputField, HStack, Text } from "@chakra-ui/react"

export default function CustomPinInput() {
  return (
    <div>
      <HStack>
        <Text>Only Number with a default value</Text>
        <PinInput defaultValue="2342">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <HStack>
        <Text>Alphanumeric with a custom placeholder</Text>
        <PinInput type="alphanumeric" placeholder="🥳">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Text>OTP with size lg</Text>
      <PinInput otp size="lg">
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <HStack>
        <Text>Masking the pin input's value</Text>
        <PinInput type="alphanumeric" mask>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </div>
  )
}
