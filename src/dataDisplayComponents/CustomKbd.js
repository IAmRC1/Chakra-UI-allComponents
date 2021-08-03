import React from 'react'
import { Kbd } from "@chakra-ui/react"

export default function CustomKbd() {
  return (
    <div>
      <span>
        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
      </span>
      <span>
        <Kbd>shift</Kbd> then <Kbd>H</Kbd>
      </span>
      <span>
        <Kbd>alt</Kbd> or <Kbd>option</Kbd>
      </span>
    </div>
  )
}
