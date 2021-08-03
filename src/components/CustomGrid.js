import React from 'react'
import { Grid, GridItem, Box, } from "@chakra-ui/react"

export default function CustomGrid() {
  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
      </Grid>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="red" />
        <GridItem colSpan={2} bg="orange" />
        <GridItem colSpan={2} bg="yellow" />
        <GridItem colSpan={4} bg="teal" />
      </Grid>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2} h="10" bg="blackAlpha.400" />
        <GridItem colStart={4} colEnd={6} h="10" bg="purple.700" />
      </Grid>
    </div>
  )
}
