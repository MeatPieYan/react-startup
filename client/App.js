import React from 'react';
import { renderRoutes } from 'react-router-config';

import TestComp from './test';

const App =  ({ route }) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
)

export default App;