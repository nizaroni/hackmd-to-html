const path = require('path')
const webpack = require('webpack')

const windowPath = path.join(__dirname, 'src/window.js')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'commonjs2',
	},
	target: 'node',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['css-loader'],
			},
			{
				test: /\.svg$/,
				use: ['url-loader'],
			}
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			window: windowPath,
			navigator: [windowPath, 'navigator'],
			document: [windowPath, 'document'],
			Cookies: [windowPath, 'Cookies'],
			$: [windowPath, '$'],
			RegExp: [windowPath, 'RegExp'],
			serverurl: [windowPath, 'serverurl'],
		}),
	],
}
