/* eslint-disable */

const cssnanoConfig = {
	safe: true,
	preset: ['default', { discardComments: { removeAll: true } }]
};

const inlineMediaConfig = {
	shorthand: 'min-width',
	shorthandValueAddition: +1,
};

const presetEnvConfig = {
	stage: 0,
	grid: true,
	browsers: '> 0.5%, last 4 versions, Firefox ESR, not dead'
};

const currentSelectorConfig = {
	symbol: '%@'
};

module.exports = {
	plugins: {
		'postcss-import': true,
		'postcss-import-ext-glob': true,
		'postcss-important-shorthand': true,
		'postcss-nested-ancestors': true,
		'postcss-current-selector': currentSelectorConfig,
		'postcss-nested': true,
		'postcss-short': true,
		'postcss-preset-env': presetEnvConfig,
		'postcss-media-fn': true,
		'postcss-if-media': true,
		'postcss-alias': true,
		'postcss-normalize': true,
		'postcss-assets': true,
		'postcss-utilities': true,
		'postcss-atroot': true,
		'postcss-define-property': true,
		'postcss-conditionals': true,
		'postcss-type-scale': true,
		'postcss-focus': true,
		'postcss-morphicon': true,
		'postcss-nested-ancestors': true,
		'postcss-for': true,
		'postcss-each': true,
		'postcss-mixins': true,
		'postcss-extend': true,
		'postcss-inline-media': inlineMediaConfig,
		'postcss-simple-vars': true,
		'postcss-nested-vars': true,
		'postcss-font-magician': true,
		'postcss-responsive-type': true,
		'postcss-apply-class': true,
		'postcss-aspect-ratio': true,
		'postcss-color-function': true,
		'postcss-color-scale': true,
		'postcss-google-color': true,
		'postcss-zindex': true,
		'postcss-discard-empty': true,
		'postcss-discard-duplicates': true,
		'postcss-discard-comments': true,
		'postcss-custom-media': true,
		'postcss-sort-media-queries': true,
		'postcss-combine-media-query': true,
		'postcss-fixes': true,
		'autoprefixer': true,
		'cssnano': cssnanoConfig,
	},
};