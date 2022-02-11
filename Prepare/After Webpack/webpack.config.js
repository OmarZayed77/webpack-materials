const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const CSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: './App/main.ts',
        vendors: './App/vendor.js'
    },
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
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [CSSExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [CSSExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
            test: /\.(svg|png|jpg|jpeg|gif)$/,
            use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 20000,
                            esModule: false
                        }

                    },
                    "image-webpack-loader"
                ]
            },
            {
                test: /\.(otf|woff|woff2|eot|ttf)$/, 
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlPlugin({ template: './index.html', favicon: './favicon.ico' }),
        new CleanPlugin.CleanWebpackPlugin(),
        new CSSExtractPlugin({ filename: "[name].[contenthash].css" })
    ]
}