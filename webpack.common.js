const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: "./src/index.js",

    plugins: 
        [new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
        new FaviconsWebpackPlugin("./src/assets/favicon.ico"),
    ],

    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.ico$/i,
                type: 'asset/resource',
            }

        ],
    },
};