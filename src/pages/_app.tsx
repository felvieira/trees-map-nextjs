import 'styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import { Provider } from 'jotai'

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider>
			<ThemeProvider theme={theme}>
				<Head>
					<title>React Next- Boilerplate</title>
					<link rel="shortcut icon" href="/img/icon-512.png" />
					<link rel="apple-touch-icon" href="/img/icon-512.png" />
					<link rel="manifest" href="/manifest.json" />
					<meta
						name="description"
						content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
					/>
				</Head>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default App
