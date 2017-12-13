import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

export default App;
