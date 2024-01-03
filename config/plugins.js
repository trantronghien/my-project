module.exports = ({ env }) => ({
    // enable a plugin that doesn't require any configuration
    i18n: true,
  
    // enable a custom plugin
    // myplugin: {
    //   // my-plugin is going to be the internal name used for this plugin
    //   enabled: true,
    //   resolve: './src/plugins/my-local-plugin',
    //   config: {
    //     // user plugin config goes here
    //   },
    // },

    // jwt
    'users-permissions': {
        config: {
          jwt: {
            expiresIn: '7d',
          },
        },
      },
});