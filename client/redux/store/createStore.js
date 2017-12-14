import { createStore, compose } from 'redux';
import reducer from '../reducer';

export default (state) => {
  // below code will add redux dev tool into our app
  const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    reducer,
    state,
    composeEnhancers()
  );

  // for hot module reload
  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const nextReducers = require('../reducer');
      const nextReducer = combineReducers(nextReducers);
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
