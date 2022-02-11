const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        main: './App/main.ts',
        vendors: './App/vendor.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
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
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new CleanPlugin.CleanWebpackPlugin(),
    ],
}