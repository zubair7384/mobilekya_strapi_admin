'use strict';

/**
 * test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

// @ts-ignore
module.exports = createCoreService('api::mobile-phones.mobile-phones');
