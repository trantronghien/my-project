'use strict';

/**
 * product router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product.product', {
    // prefix: 'product',
    // // only: ['find', 'findOne'],
    // // except: [],
    // config: {
    //     find: {
    //         auth: false,
    //         policies: [],
    //         middlewares: [],
    //     },
    //     findOne: {},
    //     create: {},
    //     update: {},
    //     delete: {},
    // },
});
