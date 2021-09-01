module.exports = {
	stories: ['../src/components/**/stories.tsx'],
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
