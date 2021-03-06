import { AppContext, AppInitialProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import StoreProvider from '../components/context'

const theme = {
    colors: {
        primary: 'red'
    }
}

const App = ({ Component, pageProps }: AppContext & AppInitialProps): JSX.Element => {
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
