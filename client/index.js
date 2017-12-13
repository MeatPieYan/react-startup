import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routers';

const html = (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
);

ReactDOM.render(
  html,
  /* eslint-disable */
  document.getElementById('root')
  /* eslint-enable */
);

if (module.hot) {
  module.hot.accept();
}
