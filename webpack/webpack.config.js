const webpack = require("webpack");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const modoDev = process.env.NODE_ENV !== "production";
const teaserWebpackPlugin = require("terser-webpack-plugin");

module.exports = { 
    mode: modoDev ? "development":"production",
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public"
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    //"style-loader",
                    miniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif|)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    optimization: {
        minimize: modoDev ? false : true,
        minimizer: [new teaserWebpackPlugin()]
    },
    devServer: {
        contentBase: "./public",
        port: 9090,
    }    
}