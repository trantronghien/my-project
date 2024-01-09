const productPrefix = '/product';

module.exports = {
    routes: [
        {
            method: 'GET',
            path: `${productPrefix}/sort_product_v2`,
            handler: 'product.sortProductV2',
            config: {
                // auth: false, // để tùy chọn trên admin
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