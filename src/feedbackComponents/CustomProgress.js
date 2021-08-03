import React from 'react'
import { Progress, Stack } from "@chakra-ui/react"

export default function CustomProgress() {
  return (
    <div>
      <Stack spacing={5}>
        <Progress value={80} />
        <Progress hasStripe value={64} />
        <Progress colorScheme="green" size="sm" value={20} />
        <Progress colorScheme="green" size="md" value={20} />
        <Progress colorScheme="green" size="lg" value={20} />
        <Progress colorScheme="green" height="32px" value={20} />
        <Progress value={20} size="xs" colorScheme="pink" />
        <Progress size="xs" isIndeterminate />
      </Stack>
    </div>
  )
}
