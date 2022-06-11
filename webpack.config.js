var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: "./index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    devServer: {
        open: true,
        host: "localhost",
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.js$/i,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new VueLoaderPlugin(),
    ],
};
