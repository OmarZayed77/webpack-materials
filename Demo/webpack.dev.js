const path = require("path");
const commonConfig = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge({
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
				    'style-loader',  // 3 inject styles in styles tag in HTML head
				    'css-loader',    // 2 turn css into commonJs
				 'sass-loader', // 1 turn sass to css
				]
			},
		],
	},
}, commonConfig);
