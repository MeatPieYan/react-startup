import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from './routers';
import storeCreator from './redux/store/createStore';

// create store with initial state for server rendering
const store = storeCreator(window.REDUX_STATE);

const html = (
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>
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
