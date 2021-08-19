import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import NextApp, { AppContext, AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

App.getInitialProps = (ctx: AppContext) => {
  const props = NextApp.getInitialProps(ctx)

  return { ...props }
}
export default App
