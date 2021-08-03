import React from 'react'
import { VStack, Text, Button, Flex, Input, Editable, EditableInput, EditablePreview, Box, Drawer, DrawerOverlay, DrawerHeader, DrawerContent, DrawerBody, Code, Image, ImageProps, } from "@chakra-ui/react"
import { useBoolean, useBreakpointValue, useClipboard, useControllableProp, useControllableState, useDisclosure, useMediaQuery,useMergeRefs, useOutsideClick, usePopper, keyframes, usePrefersReducedMotion, useTheme, useToken, } from "@chakra-ui/react"

export default function Hooks() {
  return (
    <div>
      <Example />
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 />
      <Example6 />
      <Example7 />
      <Example8 />
      <Example9 />
      <Example10 />
      <Example11 />
      <Example12 />
      <Example13 />
      <Example14 />
    </div>
  )
}

function Example() {
  const [flag, setFlag] = useBoolean()

  return (
    <>
      <p>Boolean state: {flag.toString()}</p>
      <button onClick={setFlag.toggle}>
        Click me to toggle the boolean value
      </button>
    </>
  )
}

function Example1() {
  const [flag, setFlag] = useBoolean()

  return (
    <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
      {flag ? 'The flag is ON!' : 'Hover me to turn ON'}
    </div>
  )
}

function Example2() {
  const variant = useBreakpointValue({ base: "outline", md: "solid" })

  return (
    <VStack align="flex-start">
      <Text>Resize your window to see the button variant change</Text>
      <Button colorScheme="teal" variant={variant}>
        Button
      </Button>
    </VStack>
  )
}

function Example3() {
  const [value, setValue] = React.useState("Hello world")
  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <>
      <Flex mb={2}>
        <Input value={value} isReadOnly placeholder="Welcome" />
        <Button onClick={onCopy} ml={2}>
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Flex>
      <Editable placeholder="Paste here">
        <EditablePreview width="100%" />
        <EditableInput />
      </Editable>
    </>
  )
}

function Example4() {
  // const [isControlled, value] = useControllableProp(propValue, stateValue)
  // const [value, setValue] = useControllableState(options)
  const [value, setValue] = useControllableState({ defaultValue: 40 })
  return (
    <div>
      <Text>Uncontrolled State</Text>
      <Button onClick={() => setValue(value + 1)}>+</Button>
      <Box as="span" w="200px" mx="24px">
        {value}
      </Box>
      <Button onClick={() => setValue(value - 1)}>-</Button>
    </div>
  )
}

function Example5() {
  // you need a state and updater to change the value
  const [value, setValue] = React.useState(40)

  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue,
  })

  return (
    <div>
      <Text>Controlled State</Text>
      <Button onClick={() => setInternalValue(value + 1)}>+</Button>
      <Box as="span" w="200px" mx="24px">
        {internalValue}
      </Box>
      <Button onClick={() => setInternalValue(value - 1)}>-</Button>
    </div>
  )
}

function Example6() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

function Example7() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")

  return (
    <Text>
      {isLargerThan1280 ? "larger than 1280px" : "smaller than 1280px"}
    </Text>
  )
}

function Example8() {
  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    "(min-width: 1920px)",
    "(display-mode: browser)",
  ])

  function determineText() {
    if (isLargerThanHD) {
      return `high resolution you got there ${
        isDisplayingInBrowser ? "in your browser" : "on your screen"
      }`
    }

    return isDisplayingInBrowser
      ? "rendering in a browser"
      : "rendering on something else, e.g. PWA"
  }

  return <Text>{determineText()}</Text>
}

function Example9({ref, ...props}) {
  const internalRef = React.useRef()
  const refs = useMergeRefs(internalRef, ref)

  return (
    <div {...props} ref={refs}>
      A div with multiple refs.
    </div>
  )
}

function Example10({ref, ...props}) {
  const outsideRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { popperRef, referenceRef } = usePopper()

  useOutsideClick({
    ref: outsideRef,
    handler: () => isOpen && onClose()
  })

  const buttonEl = useMergeRefs(outsideRef, referenceRef)

  return (
    <>
      <button ref={buttonEl} onClick={onOpen}>
        Click me to see the popover
      </button>
      {isOpen && (
        <Box ref={popperRef} bg="green">
          Click outside to close me
        </Box>
      )}
    </>
  )
}

function Example11() {
  const ref = React.useRef()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false)
  })

  return (
    <>
      {isModalOpen ? (
        <div ref={ref}>
          👋 Hey, I'm a modal. Click anywhere outside of me to close.
        </div>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      )}
    </>
  )
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
function Example12(props) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`
  return <Image animation={animation} src={'https://bit.ly/sage-adebayo'} boxSize={100} {...props} />
}

function Example13() {
  const theme = useTheme()

  return <div>Do something with the theme</div>
}

function Example14() {
  const [red100, blue200] = useToken(
    // the key within the theme, in this case `theme.colors`
    "colors",
    // the subkey(s), resolving to `theme.colors.red.100`
    ["red.100", "blue.200"],
    // a single fallback or fallback array matching the length of the previous arg
  )

  return (
    <Box p={4} boxShadow={`inset 0 4px 0 ${red100}, 0 0 8px ${blue200}`}>
      You can utilize <Code>useToken</Code> to create a <Code>boxShadow</Code> with colors from your theme.
    </Box>
  )
}