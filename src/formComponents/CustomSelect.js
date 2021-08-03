import React from 'react'
import { Select, Stack, } from "@chakra-ui/react"
import { PhoneIcon } from '@chakra-ui/icons'

export default function CustomSelect() {
  return (
    <div>
      <Select placeholder="Select option" icon={<PhoneIcon />}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Stack spacing={3}>
        <Select placeholder="extra small size" size="xs" variant="filled" />
        <Select placeholder="small size" size="sm" variant="outlined" />
        <Select placeholder="medium size" size="md" variant="flushed" />
        <Select placeholder="large size" size="lg" variant="unstyled" />
      </Stack>
      <Select
        bg="tomato"
        borderColor="tomato"
        color="white"
        placeholder="Woohoo! A new background color!"
      >
        <option>Hello</option>
      </Select>
    </div>
  )
}
