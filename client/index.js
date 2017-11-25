import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, 123!</h1>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}