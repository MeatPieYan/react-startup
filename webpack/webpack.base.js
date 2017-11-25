const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, '../view/index.html')
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/, 
      loader: "babel-loader"
    }]
  }
};