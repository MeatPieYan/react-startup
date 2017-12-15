import PieDom from 'za-piedom';
import routers from '../shared/router';

PieDom.render('root', routers);

if (module.hot) {
  module.hot.accept();
}
