import React from 'react'
import { useToast, Button, Stack, Box, Wrap, WrapItem } from "@chakra-ui/react"

export default function CustomToast() {
  return (
    <div>
      <Stack spacing={5}>
        <ToastExample />
        <CustomToastExample />
        <ToastStatusExample />
        <ToastVariantsExample />
        <PositionExample />
        <PreventDuplicateExample />
      </Stack>
    </div>
  )
}

function ToastExample() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}

function CustomToastExample() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="blue.500">
              Hello World
            </Box>
          ),
        })
      }
    >
      Show Toast
    </Button>
  )
}

function ToastStatusExample() {
  const toast = useToast()
  const statuses = ["success", "error", "warning", "info"]

  return (
    <Wrap>
      {statuses.map((status, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${status} toast`,
                status: status,
                isClosable: true,
              })
            }
          >
            Show {status} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  )
}

function ToastVariantsExample() {
  const toast = useToast()
  const variants = ["solid", "subtle", "left-accent", "top-accent"]

  return (
    <Wrap>
      {variants.map((variant, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${variant} toast`,
                variant: variant,
                isClosable: true,
              })
            }
          >
            Show {variant} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  )
}

function PositionExample() {
  const toast = useToast()
  const positions = [
    "top",
    "top-right",
    "top-left",
    "bottom",
    "bottom-right",
    "bottom-left",
  ]

  return (
    <Wrap>
      {positions.map((position, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${position} toast`,
                position: position,
                isClosable: true,
              })
            }
          >
            Show {position} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  )
}

function PreventDuplicateExample() {
  const toast = useToast()
  const id = "test-toast"
  return (
    <Button
      onClick={() => {
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Hey! You can create a duplicate toast",
          })
        }
      }}
    >
      Click me!
    </Button>
  )
}
