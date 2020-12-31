import * as React from 'react'
import { NextPage } from 'next'
import { Box } from '@resir014/chungking-react'
import CountdownClock from '~/modules/countdown/CountdownClock'

const IndexPage: NextPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      minHeight="100vh"
      pb={64}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        maxWidth="1600px"
        p="xxl"
      >
        <Box width={632} height={600} backgroundColor="grey.900" />
        <CountdownClock />
      </Box>
    </Box>
  )
}

export default IndexPage
