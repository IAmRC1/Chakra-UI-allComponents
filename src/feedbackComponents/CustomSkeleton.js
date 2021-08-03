import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText, Stack, Box } from "@chakra-ui/react"

export default function CustomSkeleton() {
  return (
    <div>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton>
          <div>contents wrapped</div>
          <div>won't be visible</div>
        </Skeleton>
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Skeleton startColor="pink.500" endColor="orange.500" height="20px" />
      </Stack>
    </div>
  )
}
