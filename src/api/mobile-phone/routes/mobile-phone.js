'use strict';

/**
 * test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// @ts-ignore
module.exports = createCoreController('api::mobile-phones.mobile-phones');
