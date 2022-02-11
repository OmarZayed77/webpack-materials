const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// entry: './src/app.js',
	// entry: [
	//     './src/app.js',
	//     './src/js/logger.js'
	// ],
	entry: {
		logger: "./src/js/logger.js",
		bundle: "./src/app.js",
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "static/js/[name].[contenthash].js",
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.ts$/,
				loader: "ts-loader",
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			inject: "body",
			favicon: "./src/images/favicon.ico",
			minify: {
				removeAttributeQuotes: true,
			}
		}),
	],
};
