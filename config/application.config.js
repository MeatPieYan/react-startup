const path = require('path');

module.exports = {
  port: 3000,
  viewPath: path.resolve(__dirname, '../dist'),
  routerPath: path.resolve(__dirname, '../server/router'),
  staticResourcePath: path.resolve(__dirname, '../dist'),
  clientRoutePath: path.resolve(__dirname, '../client/routers')
};
