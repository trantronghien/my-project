'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product',({ strapi }) => ({
    async search(ctx) {
        const { q } = ctx.query
        const products = await strapi.service('api::product.product').search(q.toString().trim());
        ctx.body = { data: products}
    },
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
    },
    async sendMail() {
        // await strapi.plugin('email').service('email').send({
        //     to: 'someone@example.com',
        //     from: 'someone2@example.com',
        //     subject: 'Hello world',
        //     text: 'Hello world',
        //     html: `<h4>Hello world</h4>`,
        //   });
    }
}));