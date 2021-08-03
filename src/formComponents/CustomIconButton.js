import React from 'react'
import { IconButton } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

export default function CustomIconButton() {
  return (
    <div>
      <IconButton aria-label="Search database" icon={<SearchIcon />} />
      <IconButton
        colorScheme="whatsapp"
        aria-label="Search database"
        variant="outline"
        size="lg"
        icon={<SearchIcon />}
      />
    </div>
  )
}
