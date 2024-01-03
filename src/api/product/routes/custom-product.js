module.exports = {
    routes: [
        // api/sort_product_v1
        {
            method: 'GET',
            path: '/sort_product_v1',
            handler: 'product.sortProductV1',
            config: {
                auth: false,
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