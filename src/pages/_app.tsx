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
					<title>Trees Map - React with Next.js</title>
					<link rel="shortcut icon" href="/img/icon-512.png" />
					<link rel="apple-touch-icon" href="/img/icon-512.png" />
					<link rel="manifest" href="/manifest.json" />
					<meta name="description" content="Trees Map - React with Next.js" />
				</Head>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default App
