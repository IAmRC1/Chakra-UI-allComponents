import React from 'react'
import { Icon, } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

export default function CustomIcon() {
  return (
    <div>
      {/* The default icon size is 1em (16px) */}
      <PhoneIcon />
      {/* Use the `boxSize` prop to change the icon size */}
      <AddIcon w={6} h={6} />
      {/* Use the `color` prop to change the icon color */}
      <WarningIcon w={8} h={8} color="red.500" />
      <Icon />
    </div>
  )
}
