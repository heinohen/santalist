const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const productionConfig = merge([
    {
        output: {
            publicPath: "/santalist/",
        }
    }
])

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [new CleanWebpackPlugin()],
});