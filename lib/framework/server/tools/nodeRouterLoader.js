import fs from 'fs';
import Router from 'koa-router';

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
