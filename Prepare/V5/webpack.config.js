const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// entry: './src/app/index.js', 
	// entry: [
	// 	"./src/app/index.js",
	// 	"./src/app/second.js",
	// ],
	entry: {
		bundle: "./src/app/index.js",
		hamada: "./src/app/second.js",
	},
	output: {
		filename: "[name].[chunkhash].js",
		path: path.resolve(__dirname, "build"),
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
			},
			{
				test: /\.html$/,
				use: "html-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			favicon: "./src/assets/favicon.ico",
			inject: "body",
		}),
	],
};
