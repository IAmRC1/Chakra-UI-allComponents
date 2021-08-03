import React from 'react'
import { Textarea } from "@chakra-ui/react"

export default function CustomTextArea() {
  return (
    <div>
      <Textarea placeholder="Here is a sample placeholder" />
      <Textarea resize="vertical" isInvalid placeholder="Here is a sample placeholder" />
      <Textarea resize="horizontal" placeholder="Here is a sample placeholder" />
    </div>
  )
}
