import React from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb, Box
} from "@chakra-ui/react"

export default function CustomSlider() {
  return (
    <div>
      <Slider 
        aria-label="slider-ex-1" 
        defaultValue={30}
        colorScheme="pink"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider
        aria-label="slider-ex-3"
        defaultValue={30}
        orientation="vertical"
        minH="32"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider defaultValue={60} min={0} max={300} step={30}>
        <SliderTrack bg="red.100">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Slider aria-label="slider-ex-5" onChangeEnd={(val) => console.log(val)}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </div>
  )
}
