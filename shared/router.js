import React from 'react';
import App from '../client/App';
import TestComp from './pages/test';


const Home2 = () => (
  <div>
    <h2>111</h2>
  </div>
);

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/test',
        exact: true,
        component: TestComp
      },
      {
        path: '/abc',
        exact: true,
        component: Home2
      }
    ]
  }
];

export default routes;
