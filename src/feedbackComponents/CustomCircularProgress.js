import React from 'react'
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"

export default function CustomCircularProgress() {
  return (
    <div>
      <CircularProgress value={80} />
      <CircularProgress value={30} size="120px" />
      <CircularProgress value={59} size="100px" thickness="4px" />
      <CircularProgress value={30} color="orange.400" thickness="12px" />
      <CircularProgress value={40} color="green.400">
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>
      <CircularProgress isIndeterminate color="green.300" />
    </div>
  )
}
