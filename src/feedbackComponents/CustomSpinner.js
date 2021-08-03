import React from 'react'
import { Spinner, Stack } from "@chakra-ui/react"

export default function CustomSpinner() {
  return (
    <div>
      <Spinner />
      <Spinner color="red.500" />
      <Stack direction="row" spacing={4}>
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </Stack>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  )
}
