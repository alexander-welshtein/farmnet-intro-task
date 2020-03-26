const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const nodeExternals = require("webpack-node-externals")

const frontConfig = {
    target: "web",
    entry: "./public/src/index.ts",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "dist/public"),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./public/src/index.html"
    })],
    resolve: {
        extensions: [".ts", ".js"]
    },
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

const backConfig = {
    target: "node",
    entry: {
        app: ["./src/index.ts"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    externals: [nodeExternals()]
}

module.exports = [frontConfig, backConfig]