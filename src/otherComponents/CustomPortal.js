import React from 'react'
import { Portal, Box,  } from "@chakra-ui/react"

export default function CustomPortal() {
  return (
    <div>
      <Example />
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  )
}

function Example() {
  return (
    <Box bg="red.400" color="white">
      I'm here,
      <Portal>This text is portaled at the end of document.body!</Portal>
    </Box>
  )
}

function Example1() {
  const ref = React.useRef()
  return (
    <Box bg="red.400" color="white">
      I'm here,
      <Portal containerRef={ref}>
        Portal: This text is portaled to the yellow box!
      </Portal>
      <Box ref={ref} bg="yellow.500">
        <div>Container: Hey,</div>
      </Box>
    </Box>
  )
}

function Example2() {
  const ref = React.useRef()
  return (
    <div>
      <Portal containerRef={ref}>
        <Box bg="teal.500" color="white">
          Parent: Hey welcome,
          <Portal>Child: I'm attached to my parent portal</Portal>
        </Box>
      </Portal>
      <Box bg="red.400" color="white" ref={ref} />
    </div>
  )
}

function Example3() {
  const ref = React.useRef()
  return (
    <div>
      <Portal containerRef={ref}>
        <Box bg="teal.500" color="white">
          Parent: Hey welcome,
          <Portal appendToParentPortal={false}>
            Child: I'm going to document.body
          </Portal>
        </Box>
      </Portal>
      <div style={{ background: "red" }} ref={ref} />
    </div>
  )
}