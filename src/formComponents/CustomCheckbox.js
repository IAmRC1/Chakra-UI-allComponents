import React from 'react'
import { Checkbox, CheckboxGroup, Stack, HStack } from "@chakra-ui/react"

export default function CustomCheckbox() {
  return (
    <div>
      <Checkbox defaultIsChecked>Checkbox</Checkbox>
      <Stack spacing={10} direction="row">
        <Checkbox isDisabled>Checkbox</Checkbox>
        <Checkbox isDisabled defaultIsChecked>
          Checkbox
        </Checkbox>
      </Stack>
      <Stack spacing={10} direction="row">
        <Checkbox size="sm" colorScheme="red" defaultIsChecked>
          Checkbox
        </Checkbox>
        <Checkbox size="md" colorScheme="yellow">
          Checkbox
        </Checkbox>
        <Checkbox size="lg" colorScheme="green" defaultIsChecked>
          Checkbox
        </Checkbox>
      </Stack>
      <Checkbox isInvalid>Invalid Checkbox</Checkbox>
      <Checkbox spacing="1rem">Spaced Label Checkbox</Checkbox>
      <Checkbox iconColor="blue.400" iconSize="1rem">
        Changing the icon color and size
      </Checkbox>
      <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
        <HStack>
          <Checkbox value="naruto">Naruto</Checkbox>
          <Checkbox value="sasuke">Sasuke</Checkbox>
          <Checkbox value="kakashi">Kakashi</Checkbox>
        </HStack>
      </CheckboxGroup>
    </div>
  )
}
