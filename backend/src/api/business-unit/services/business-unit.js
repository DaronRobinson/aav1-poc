'use strict';

/**
 * business-unit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-unit.business-unit');
