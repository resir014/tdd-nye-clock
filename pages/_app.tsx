import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChungkingProvider } from '@resir014/chungking-react'

import 'fontsource-inter/100.css'
import 'fontsource-inter/200.css'
import 'fontsource-inter/300.css'
import 'fontsource-inter/400.css'
import 'fontsource-inter/500.css'
import 'fontsource-inter/600.css'
import 'fontsource-inter/700.css'
import 'fontsource-inter/800.css'
import 'fontsource-inter/900.css'

import 'fontsource-jetbrains-mono/100.css'
import 'fontsource-jetbrains-mono/200.css'
import 'fontsource-jetbrains-mono/300.css'
import 'fontsource-jetbrains-mono/400.css'
import 'fontsource-jetbrains-mono/500.css'
import 'fontsource-jetbrains-mono/600.css'
import 'fontsource-jetbrains-mono/700.css'
import 'fontsource-jetbrains-mono/800.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChungkingProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>tdd-nye-clock</title>
      </Head>
      <Component {...pageProps} />
    </ChungkingProvider>
  )
}
