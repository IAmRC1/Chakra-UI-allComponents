import React from 'react'
import { Fade, ScaleFade, Slide, SlideFade, useDisclosure, Button, Box, Text } from "@chakra-ui/react"

export default function CustomTransitions() {
  return (
    <div>
      <FadeEx />
      <ScaleFadeEx />
      <SlideEx />
      <SlideFadeEx />
    </div>
  )
}

function FadeEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Fade
        </Box>
      </Fade>
    </>
  )
}

function ScaleFadeEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Fade
        </Box>
      </ScaleFade>
    </>
  )
}

function SlideEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Text>Lorem Ipsum</Text>
        </Box>
      </Slide>
    </>
  )
}

function SlideFadeEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <SlideFade in={isOpen} offsetY="20px">
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Text>Lorem Ipsum</Text>
        </Box>
      </SlideFade>
    </>
  )
}