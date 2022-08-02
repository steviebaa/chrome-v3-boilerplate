const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		serviceWorker: path.resolve(__dirname, 'src/background/serviceWorker.ts'),
		ui: path.resolve(__dirname, 'src/ui/app.tsx'),
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js',
		clean: true,
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/ui', 'index.html'),
			scriptLoading: 'module',
			chunks: ['ui'],
		}),
		new CopyPlugin({
			patterns: [{ from: '.', to: '.', context: 'public' }],
		}),
	],
};
