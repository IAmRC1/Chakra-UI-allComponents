import React from 'react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, RadioGroup, HStack, Radio, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, } from "@chakra-ui/react"

export default function CustomFormControl() {
  return (
    <div>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">Favorite Naruto Character</FormLabel>
        <RadioGroup defaultValue="Itachi">
          <HStack spacing="24px">
            <Radio value="Sasuke">Sasuke</Radio>
            <Radio value="Nagato">Nagato</Radio>
            <Radio value="Itachi">Itachi</Radio>
            <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Select only if you're a fan.</FormHelperText>
      </FormControl>
      <FormControl id="first-name" isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
      </FormControl>
      <FormControl id="country">
        <FormLabel>Country</FormLabel>
        <Select placeholder="Select country">
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
      </FormControl>
      <FormControl id="amount">
        <FormLabel>Amount 10-50</FormLabel>
        <NumberInput max={50} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </div>
  )
}
