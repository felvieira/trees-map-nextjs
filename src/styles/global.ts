import {
	createGlobalStyle,
	css,
	DefaultTheme,
	GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
	removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
	GlobalStylesProps,
	DefaultTheme
> = createGlobalStyle`
@font-face {
  font-family: 'Fredoka One';
  font-style: normal;
  font-weight: 400;
		font-display: swap;
  src: local(''),
       url('/fonts/fredoka-one-v8-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/fredoka-one-v8-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 100;
		font-display: swap;
  src: local(''),
       url('/fonts/montserrat-v18-latin-100.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v18-latin-100.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
		font-display: swap;
  src: local(''),
       url('/fonts/montserrat-v18-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v18-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
		font-display: swap;
  src: local(''),
       url('/fonts/montserrat-v18-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v18-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
		font-display: swap;
  src: local(''),
       url('/fonts/montserrat-v18-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v18-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
		font-display: swap;
  src: local(''),
       url('/fonts/montserrat-v18-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v18-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
	font-display: swap;
		font-display: swap;
  src: local(''),
       url('/fonts/montserrat-v18-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v18-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

@font-face {
  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
		font-display: swap;
  src: local(''),
       url('/fonts/varela-v11-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/varela-v11-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }


${({ theme, removeBg }) => css`
	html {
		font-size: 62.5%;
	}
	html,
	body,
	#__next {
		height: 100%;
	}
	body {
		font-family: ${theme.font.family};
		font-size: ${theme.font.sizes.medium};
		${!removeBg &&
		css`
			background-color: ${theme.colors.mainBg};
		`}
	}
	.mapboxgl-popup {
		top: -6%;
	}
`}


`

export default GlobalStyles
