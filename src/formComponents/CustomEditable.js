import React from 'react'
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react"

export default function CustomEditable() {
  return (
    <div>
      <Editable defaultValue="Take some chakra">
        <EditablePreview />
        <EditableInput />
      </Editable>
    </div>
  )
}
