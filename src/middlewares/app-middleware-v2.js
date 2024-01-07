module.exports = (config, { strapi }) => {
    return async (context, next) => {
        // console.log(`config.name ${config.name}`);
        console.log(`run custom app-middleware v2: ${config.data}`);
        await next();
    };
};