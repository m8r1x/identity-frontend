/*eslint-env node*/
require('dotenv').config()

const webpack = require('webpack')
const Path = require('path')

const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const swConfig = require('./sw.config')

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  context: Path.join(__dirname, 'src'),
  devtool: debug ? 'eval-source-map' : debug,
  entry: {
    app: './js/client.js',
    vendor: [
      'babel-polyfill',
      'react',
      'react-redux',
      'redux',
      'react-router-dom'
    ]
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.test\.js$).*\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      }
    ]
  },
  output: {
    path: Path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: debug ? [] : [
    new ExtractTextWebpackPlugin('styles.css'),
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity,
      filename: '[name].bundle.js'
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      test: /\.js$/
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComment: { removeAll: true }}
    }),
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, 'src', 'template.html'),
      filename: Path.join(__dirname, 'index.html')
    }),
    new SWPrecachePlugin(swConfig)
  ]
}
