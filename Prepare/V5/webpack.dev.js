const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');

module.exports = merge({
	mode: "development",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					"style-loader", // inject styles in HTML head
					"css-loader",   // Convert CSS to commonJs
					"sass-loader"   // Convert Sass to CSS
				],
			},
		],
	},
}, commonConfig);
