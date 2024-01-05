module.exports = (config, { strapi })=> {
    return async (context, next) => {
        console.log("run custom app-middleware");
        
        await next();
    };
  };