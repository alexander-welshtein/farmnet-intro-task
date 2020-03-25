// noinspection JSUnresolvedFunction, NodeJsCodingAssistanceForCoreModules
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// noinspection JSUnresolvedVariable
module.exports = {
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        watchContentBase: true,
        progress: true,
        port: 3000,
        hot: true,
        open: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
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