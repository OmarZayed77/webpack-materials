const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge({
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(png|svg|gif|jpe?g)$/,
				use: 'image-webpack-loader',
				type: 'asset',
				generator: {
					filename: 'assets/[name].[hash][ext]'
				},
				parser: {
					dataUrlCondition: {
						maxSize: 12 * 1024 // 12 KB
					}
				}
			},
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
					MiniCssExtractPlugin.loader, // 3 extract css in a separate file and include its link in HTML
					"css-loader", // 2 turn css into commonJs
					"sass-loader", // 1 turn sass to css
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "static/css/styles.[contenthash].css",
		}),
	],
	optimization: {
		minimizer: [
			`...`,
			
		]
	}
}, commonConfig);
