import Router from 'koa-router';


const router = new Router();
const testRouter = new Router({ prefix: '/test' });
testRouter.get('/producer', async (ctx, next) => {

  // const payloads = [{
  //   topic: 'tac-flying-phoenix-user-message-2176',
  //   messages: 'hello 123123'
  // }];
  // ctx.producer.send(payloads, function (err, data) {
  //   console.log(data);
  // });
  console.log('test');
  next();
}

);
router.use(testRouter.routes());

export default router;
