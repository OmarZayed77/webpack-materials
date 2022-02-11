const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.css$/,
                use: [CSSExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [CSSExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new CSSExtractPlugin({ filename: "[name].[contenthash].css" }),
    ],
    optimization: {
        minimizer: [
          new OptimizeCssAssetsPlugin(),
          new HtmlPlugin({
            template: "./index.html",
            favicon: "./favicon.ico",
            minify: {
              removeAttributeQuotes: true,
              collapseWhitespace: true,
              removeComments: true
            }
        }),
          new TerserPlugin()
        ]
      },
});