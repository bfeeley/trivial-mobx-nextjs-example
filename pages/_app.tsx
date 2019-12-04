import { AppContext, AppInitialProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import StoreProvider from '../components/context'

const theme = {
    colors: {
        primary: '#0070f3'
    }
}

const App = ({ Component, pageProps }: AppContext & AppInitialProps) => {
    return (
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <Header />
                <Component {...pageProps} />
            </ThemeProvider>
        </StoreProvider>
    )
}

export default App
