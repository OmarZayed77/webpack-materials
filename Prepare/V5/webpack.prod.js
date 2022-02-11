const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');

module.exports = merge({
	mode: "production",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader, // Extract css in a separete file and use the link in HTML
					"css-loader", //Convert CSS to commonJs
					"sass-loader" // Convert Sass to CSS
				],
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: "image-webpack-loader",
				type: "asset",
				generator: {
					filename: "static/imgs/[name].[hash][ext]",
				},
				parser: {
					dataUrlCondition: {
						maxSize: 12 * 1024, // 12kb
					},
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({ filename: "[name].[chunkhash].css" }),
	],
	optimization: {
		minimizer: [
			`...`,
			new CssMinimizerPlugin(),
		],
	},
}, commonConfig);
