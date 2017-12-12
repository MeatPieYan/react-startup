import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { matchPath } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';

import routes from '../../client/routers';

const serverRender = () => async(ctx, next) => {

  const isNotRootRoute = ({ match }) => match.path !== '/';

  const renderHtmlString = async (inititalDataArr) => {
    let context = {};
    const html = renderToString(
      <StaticRouter
        location={ctx.request.url}
        context={context}
      >
        {renderRoutes(routes)}
      </StaticRouter>
    )

    /* ***************************** */
    /*          if NECESSARY         */
    /*    TODO: context handler      */
    /* TODO: inititalDataArr handler */
    /* ***************************** */

    await ctx.render('index', {
      root: html
    });
  }

  // get all matched Routes & filter the one which is not the root one('/')
  const matchedRouter = matchRoutes(routes, ctx.request.url).filter(isNotRootRoute);

  if (!Array.isArray(matchedRouter) || matchedRouter.length === 0) {
    return next();
  }

  const promises = matchedRouter.map(({ route, match }) => 
    route.component.loadInitialData instanceof Function ? 
      route.component.loadInitialData() 
      : 
      Promise.resolve(null)
  );

  await Promise.all(promises)
    .then(renderHtmlString)
    .catch((err) => {
      console.log(err)
    });
}

export default serverRender;