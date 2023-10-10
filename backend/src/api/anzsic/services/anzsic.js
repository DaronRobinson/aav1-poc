'use strict';

/**
 * anzsic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::anzsic.anzsic');
