module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

  // custom middleware that does not require any configuration
  // ./src/middlewares/app-middleware.js
  'global::app-middleware', 
  
  // custom name to find a package or a path
  {
    name: 'global::app-middleware-v2',
    config: {
      data: 'data_by_middleware_confirg',
    },
  },
];
