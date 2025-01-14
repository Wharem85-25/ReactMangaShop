const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: "/",
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@img': path.resolve(__dirname, 'src/assets/img'),
			'@styles': path.resolve(__dirname, 'src/assets/styles'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@containers': path.resolve(__dirname, 'src/containers'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@routes': path.resolve(__dirname, 'src/routes'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@API': path.resolve(__dirname, 'src/API'),
			'@context': path.resolve(__dirname, 'src/context')
		}
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.html$/,
				use: [
					{ loader: 'html-loader' }
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				type: 'asset'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin()
		]
	}
}
