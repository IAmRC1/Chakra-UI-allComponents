import React from 'react'
import { Tooltip, VStack, HStack, Button, Wrap, WrapItem, } from "@chakra-ui/react"
import { PhoneIcon, SearchIcon,  } from "@chakra-ui/icons"

export default function CustomTooltip() {
  return (
    <div>
      <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
        Hover me
      </Tooltip>
      <Tooltip label="Phone number" fontSize="md">
        <PhoneIcon />
      </Tooltip>
      <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
        <SearchIcon />
      </Tooltip>
      <Tooltip isDisabled>
        Disabled Tooltip wont show
      </Tooltip>
      <VStack spacing={6}>
        <HStack spacing={6}>
          <Tooltip label="Auto start" placement="auto-start">
            <Button>Auto-Start</Button>
          </Tooltip>

          <Tooltip label="Auto" placement="auto">
            <Button>Auto</Button>
          </Tooltip>

          <Tooltip label="Auto end" placement="auto-end">
            <Button>Auto-End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Top start" placement="top-start">
            <Button>Top-Start</Button>
          </Tooltip>

          <Tooltip label="Top" placement="top">
            <Button>Top</Button>
          </Tooltip>

          <Tooltip label="Top end" placement="top-end">
            <Button>Top-End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Right start" placement="right-start">
            <Button>Right-Start</Button>
          </Tooltip>

          <Tooltip label="Right" placement="right">
            <Button>Right</Button>
          </Tooltip>

          <Tooltip label="Right end" placement="right-end">
            <Button>Right-End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Bottom start" placement="bottom-start">
            <Button>Bottom Start</Button>
          </Tooltip>

          <Tooltip label="Bottom" placement="bottom">
            <Button>Bottom</Button>
          </Tooltip>

          <Tooltip label="Bottom end" placement="bottom-end">
            <Button>Bottom End</Button>
          </Tooltip>
        </HStack>

        <HStack spacing={6}>
          <Tooltip label="Left start" placement="left-start">
            <Button>Left-Start</Button>
          </Tooltip>

          <Tooltip label="Left" placement="left">
            <Button>Left</Button>
          </Tooltip>

          <Tooltip label="Left end" placement="left-end">
            <Button>Left-End</Button>
          </Tooltip>
        </HStack>
      </VStack>
      <Wrap spacing={6}>
        <WrapItem>
          <Tooltip label="I close on click">
            <Button>Close on Click - true(default)</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I don't close on click" closeOnClick={false}>
            <Button>Close on Click - false</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I am always open" placement="top" isOpen>
            <Button>Always Open</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I am open by default" placement="left" defaultIsOpen>
            <Button>Open on startup</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="Opened after 500ms" openDelay={500}>
            <Button>Delay Open - 500ms</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="Closed after 500ms" closeDelay={500}>
            <Button>Delay Close - 500ms</Button>
          </Tooltip>
        </WrapItem>

        <WrapItem>
          <Tooltip label="I have 15px arrow" hasArrow arrowSize={15}>
            <Button>Arrow size - 15px</Button>
          </Tooltip>
        </WrapItem>
      </Wrap>
    </div>
  )
}
