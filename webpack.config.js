const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        main: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
    },
    devServer: {
        static: "./dist"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "src/index.html"
    })]
}