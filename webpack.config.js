const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm
const webpack = require('webpack') //to access built-in plugins
const path = require('path')
const miniCss = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(s*)css$/,
                use: [miniCss.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|woff(2)?|ttf|eot|svg|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new miniCss({
            filename: 'style.css',
        }),
    ],
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: 'src/index.html',
        },
    },
}
