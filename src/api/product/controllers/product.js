'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product',({ strapi }) => ({
    async sortProductV1(ctx) {
        try {
            ctx.body = { tilte: 'sort Product V1'}
            // return { tilte: 'sort Product V1'}
        } catch (error) {
            ctx.body = error;
        }
    },
    async sortProductV2(ctx) {
        try {
            // ctx.body = 'sort Product V2';
            const sanitizeInput = await this.sanitizeInput({ tilte: 'sort Product V2' }, ctx)
            return this.transformResponse(sanitizeInput);
        } catch (error) {
            ctx.body = error;
        }
    }
}));