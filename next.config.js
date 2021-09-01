/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
	webpack(config) {
		config.module.rules.push({
			test: /\.geojson$/,
			use: ['json-loader']
		})
		return config
	},
	pwa: {
		dest: 'public',
		disable: !isProd
	},
	reactStrictMode: true,
	env: {
		mapBoxSecret:
			'sk.eyJ1IjoiZmxwY2hhcG9sYSIsImEiOiJja3N1dWk3Zm8xam5qMm9wN2h1eG1qdzg5In0.UMKtu2_ytQbwsVXK1Q-UGA',
		mapBox:
			'pk.eyJ1IjoiZmxwY2hhcG9sYSIsImEiOiJja3N1dWI2aDMwMWgzMnVxa3RxbjVubzg3In0.Bt-IiP4NyIHPKY5FnbwmLQ'
	}
})
