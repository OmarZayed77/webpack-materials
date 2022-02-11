const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new HtmlPlugin({ template: './index.html', favicon: './favicon.ico' }),
    ]
});