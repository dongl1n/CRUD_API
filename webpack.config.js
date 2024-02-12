const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
      ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin(),
    new NodemonPlugin(),
  ],
  mode: 'development'
}