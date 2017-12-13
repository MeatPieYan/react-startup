const validateConfig = (config) => {
  config.port = config.port || 3000;
  const {
    viewPath, routerPath, staticResourcePath, clientRoutePath
  } = config;

  if (!viewPath || viewPath === '') {
    throw new Error('please fullfill the {viewPath} in your application.config.js');
  }

  if (!routerPath || routerPath === '') {
    throw new Error('please fullfill the {routerPath} in your application.config.js');
  }

  if (!staticResourcePath || staticResourcePath === '') {
    throw new Error('please fullfill the {staticResourcePath} in your application.config.js');
  }

  if (!clientRoutePath || clientRoutePath === '') {
    throw new Error('please fullfill the {clientRoutePath} in your application.config.js');
  }
};

module.exports = validateConfig;
