module.exports = (config, { strapi }) => {
    return async (context, next) => {
        const { url } = context.request;
        const prefixAdmin = /^\/api\//;
        if (prefixAdmin.test(url)) {
            // continue if != /admin
            await next();
            // console.log(context.response);
            let body = null;
            if (context.response.body) body = context.response.body;
            return context.send({
                message: context.message,
                status: context.status,
                data: body,
            })
        } else {
            return await next();
        }


    };
};