import { Box, Stack, Text } from '@resir014/chungking-react'
import format from 'date-fns/format'
import * as React from 'react'
import { ClockFace } from '~/components/clock'
import useClock from '~/utils/useClock'

const CountdownClock: React.FC = () => {
  const currentTime = useClock()

  return (
    <Box position="relative">
      <ClockFace />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
      >
        <Stack spacing={36}>
          <Box>
            <Text display="block" textAlign="center" fontWeight={700} fontSize="44px">
              {format(currentTime, 'EEEE')}
            </Text>
            <Text display="block" textAlign="center" fontSize="44px">
              {format(currentTime, 'dd MMM y')}
            </Text>
          </Box>
          <Box>
            <Text fontWeight={700} fontSize="144px" fontFamily="monospace">
              {format(currentTime, 'HHmm')}
            </Text>
            <Text fontWeight={700} fontSize="96px" fontFamily="monospace">
              {format(currentTime, 'ss')}
            </Text>
          </Box>
          <Box>
            <Text display="block" textAlign="center" fontSize="44px">
              Jakarta
            </Text>
            <Text display="block" textAlign="center" fontWeight={700} fontSize="44px">
              Indonesia
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default CountdownClock
