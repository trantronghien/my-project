const productPrefix = '/products';

module.exports = {
    // prefix: 'productv1',
    routes: [
        // api/sort_product_v1
        {
            method: 'GET',
            path: `${productPrefix}/sort_product_v1`,
            handler: 'product.sortProductV1',
            config: {
                // auth: false, // để tùy chọn trên admin
                middlewares: ["api::product.product-middlewares"],
                // policies: [
                //     // point to a registered policy
                // found at ./src/policies/policy-name.js.
                //     'policy-name',

                //     // point to a registered policy with some custom configuration
                //     { name: 'policy-name', config: {} },

                //     // pass a policy implementation directly
                //     (policyContext, config, { strapi }) => {
                //         return true;
                //     },
                // ]
            }
        }
    ]
}