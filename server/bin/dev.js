/* eslint-disable */
require('babel-polyfill');
require('babel-register')({
  presets: ['env'],
  plugins: ['add-module-exports']
});

const webpack = require('webpack');
const webpackConfig = require('../../webpack/webpack.dev');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const convert = require('koa-convert');
const path = require('path');

const compiler = webpack(webpackConfig);

// const { app, server } = require('../app');

const Pie = require('../../lib/framework/server');
const app = new Pie({configPath: path.resolve(__dirname, '../../config')});

// add webpack-dev-server for development env
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  headers: { 'X-Custom-Header': 'yes' }
}));

// webpackHotMiddleware is for koa 1.x, so koa-convert is necessary,
// hope it will be upgraded.
// (Maybe a pull request for that npm module will make it effective more quickly)
app.use(convert(webpackHotMiddleware(compiler)));

// server.listen(3000);


app.startUp();
