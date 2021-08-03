import React from 'react'
import { Radio, RadioGroup, Stack, } from "@chakra-ui/react"

export default function CustomRadio() {
  const [value, setValue] = React.useState("1")
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1" colorScheme="red">First</Radio>
        <Radio value="2" isDisabled>Second</Radio>
        <Radio value="3" size="lg">Third</Radio>
      </Stack>
    </RadioGroup>
  )
}
