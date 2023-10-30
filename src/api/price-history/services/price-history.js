'use strict';

/**
 * test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

// @ts-ignore
module.exports = createCoreService('api::price-history.price-history');
