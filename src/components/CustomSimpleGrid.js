import React from 'react'
import { SimpleGrid, Box, } from "@chakra-ui/react"

export default function CustomSimpleGrid() {
  return (
    <div>
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="purple" height="80px"></Box>
        <Box bg="red" height="80px"></Box>
        <Box bg="yellow" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </div>
  )
}
