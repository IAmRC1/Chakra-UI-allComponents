import React from 'react'
import { Link, Text, } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Link as RouterLink } from "react-router-dom"

export default function CustomLink() {
  return (
    <div>
      <Link>Chakra UI</Link>
      <Link href="https://chakra-ui.com" isExternal>
        Chakra Design system <ExternalLinkIcon mx="2px" />
      </Link>
      <Text>
        Did you know that{" "}
        <Link color="teal.500" href="#">
          links can live inline with text
        </Link>
      </Text>
      <Link as={RouterLink} to="/home">
        Home
      </Link>
    </div>
  )
}
