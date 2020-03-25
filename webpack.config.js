const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./public/src/index.ts",
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./public/src/index.html"
    })],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                },
                exclude: /node_modules/
            },
            {
                test: /\.(svg|txt)$/,
                loader: "raw-loader",
                exclude: /node_modules/
            }
        ]
    }
}