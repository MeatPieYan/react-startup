import fs from 'fs';
import Router from 'koa-router';

/**
 * load all nodeJs Router
 *
 * load all files under the path passed in.
 * each file expected to return a koa-router instance.
 * all the koa-router instance will be loaded into the root router
 *
 * @param    {path}         routerPath     the path pointed to the nodeJs router
 * @returns  {koa-router}                  the nodeJs Root router contains all the subrouter
 *
 * @date     2017-12-12
 * @author   yanzhenggang<robinyzg@hotmail.com>
 */
const routerGen = (routerPath) => {
  const router = new Router({ prefix: '/api' });
  let subRouter;

  fs.readdirSync(routerPath)
    .forEach((filename) => {
      /* eslint-disable */
      subRouter = require(`${routerPath}/${filename}`);
      /* eslint-enable */
      router.use(subRouter.routes(), subRouter.allowedMethods());
    });

  return router;
};

export default routerGen;
