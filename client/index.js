import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routers';

const html = (
  <BrowserRouter>
  {renderRoutes(routes)}
</BrowserRouter>
)

ReactDOM.render(
  html,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}