import React from 'react';
import { renderRoutes } from 'react-router-config';
import App from './App';
import TestComp from './test';

const Home = ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
)
const Home2 = ({ route }) => (
  <div>
    <h2>12312dasfaaaaa</h2>
  </div>
)

const routes = [
  { component: App,
    routes: [
      { path: '/test',
      exact: true,
        component: TestComp
      },
      { path: '/abc',
      exact: true,
        component: Home2
      }
    ]
  }
];

export default routes;