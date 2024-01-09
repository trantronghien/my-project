'use strict';

/**
 * product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product.product', ({ strapi }) => ({
    // Method 1: Creating an entirely new custom service
    // access an API service
    // strapi.service('api::apiName.serviceName').FunctionName();
    async search(title) {
        // https://knexjs.org/guide/query-builder.html#identifier-syntax
        const knex = await strapi.db.connection
        // return knex('products').where('title', 'like', `%${title}%`);
        return knex.table('products').where('title', 'like', `%${title}%`);
    },
    async demo() {
    //    // https://knexjs.org/guide/query-builder.html#identifier-syntax
    //     const knex = await strapi.db.connection
    //     knex('products').where('title', 'like', `%${title}%`);
    }
    // Method 2: Wrapping a core service (leaves core logic in place)
    // async find(...args) {
    //     // Calling the default core controller
    //     const { results, pagination } = await super.find(...args);

    //     // some custom logic
    //     results.forEach(result => {
    //         result.counter = 1;
    //     });

    //     return { results, pagination };
    // },

    // // Method 3: Replacing a core service
    // async findOne(entityId, params = {}) {
    //     return strapi.entityService.findOne('api::product.product', entityId, this.getFetchParams(params));
    // }
}));