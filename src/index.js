'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  async register(/*{ strapi }*/) {
    console.log('The Strapi application is setup');
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {
    console.log('The Strapi back-end server starts');
  },
  
  async destroy() {
    console.log('The Strapi back-end server stop');
  }
};
