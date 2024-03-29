module.exports = {
	stories: ['../src/components/**/stories.js'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-knobs',
		'@storybook/addon-essentials'
	],
	webpackFinal: (config) => {
		config.resolve.modules.push(`${process.cwd()}/src`)
		return config
	}
}
