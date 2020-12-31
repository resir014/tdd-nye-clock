import { clamp, lerpInverse } from '@resir014/lerp'
import useClock from './useClock'

export default function useStreamProgress(): number {
  const currentTime = useClock()

  const streamStart = new Date('2020-12-31T21:00:00+07:00')
  const midnight = new Date('2021-01-01T00:00:00+07:00')

  const percentage = clamp(lerpInverse(+currentTime, +streamStart, +midnight), 0, 1)

  return percentage
}
