'use strict';

/**
 * data-entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-entry.data-entry');
