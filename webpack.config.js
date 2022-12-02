const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm
const webpack = require('webpack') //to access built-in plugins
const path = require('path')
const miniCss = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const pages = ['index', 'quote-information']

module.exports = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`
    return config
  }, {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
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
        // generator: {
        //   filename: 'dist/[hash][ext][query]',
        // },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          filename: `${page}.html`,
          template: `./src/${page}.html`,
          chunks: [page],
        })
    ),
    new miniCss({
      filename: '[name].css',
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map[query]',
    })
    // <- here goes array(s) of other plugins
  ),
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'src/index.html',
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
