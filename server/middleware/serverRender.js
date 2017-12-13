import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import store from '../../shared/store';

import routes from '../../client/routers'; // import the static client routers

/**
 * server side render middleware for koa
 *
 * this function will return a koa2 middleware which is used to
 * render the whole dom structure of the first screen from server
 * side
 *
 * @param    void
 * @returns  { function }  which is the koa middleware function, like async(ctx, next) => {}
 *
 * @date     2017-12-12
 * @author   yanzhenggang<robinyzg@hotmail.com>
 */
const serverRender = () => async (ctx, next) => {
  /**
   * ------------------------------------------------------------------
   * this is a filter used for Array.prototype.filter
   * it will filter the root router('/')
   * ------------------------------------------------------------------
   */
  const isNotRootRoute = ({ match }) => match.path !== '/';

  /**
   * ------------------------------------------------------------------
   * render a html string contains the matched route
   * ------------------------------------------------------------------
   */
  const renderHtmlString = async (inititalDataArr) => {
    const context = {};
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={ctx.request.url}
          context={context}
        >
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );

    /* ***************************** */
    /*          if NECESSARY         */
    /*    TODO: context handler      */
    /* TODO: inititalDataArr handler */
    /* ***************************** */
    console.log(inititalDataArr);

    // function render is added into ctx via PKG koa-views
    await ctx.render('index', {
      root: html,
      state: store.getState()
    });
  };

  // get all matched Routes & filter the one which is not the root one('/')
  const matchedRouter = matchRoutes(routes, ctx.request.url).filter(isNotRootRoute);

  // if there is no router matched,
  // then exit the current middleware,
  // and call the next koa middleware
  if (!Array.isArray(matchedRouter) || matchedRouter.length === 0) {
    return next();
  }

  // loop all the matched router,
  // and get the Function loadInitialData from the related component,
  // and excute them if existed,
  // and return the array of promise
  const promises = matchedRouter.map(({ route }) =>
    (route.component.loadInitialData instanceof Function ?
      route.component.loadInitialData()
      :
      Promise.resolve(null)));

  // render html string after all the promise resol ved.
  await Promise.all(promises)
    .then(renderHtmlString)
    .catch((err) => {
      /* ***************************** */
      /*      TODO: error handler      */
      /* ***************************** */
      console.log(err);
    });
};

export default serverRender;
