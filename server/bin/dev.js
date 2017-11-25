require("babel-polyfill");
require('babel-register')({
  presets: ['env'],
  plugins: ['add-module-exports']
});

const app = require('../app');


app.listen(3000);