import { colors } from '@resir014/chungking-react'
import * as React from 'react'
import useStreamProgress from '~/utils/useStreamProgress'

const ClockFace: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => {
  const percentage = useStreamProgress()

  const radius = 300
  const circumference = radius * 2 * Math.PI

  return (
    <svg width={640} height={640} {...rest}>
      <circle
        stroke={colors.blue[500]}
        fill="transparent"
        strokeWidth={32}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={Math.ceil(circumference - percentage * circumference)}
        r={radius}
        cx={320}
        cy={320}
        style={{
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%'
        }}
      />
    </svg>
  )
}

export default ClockFace
