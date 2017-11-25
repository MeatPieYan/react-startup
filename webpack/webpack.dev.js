const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: '../dist',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});