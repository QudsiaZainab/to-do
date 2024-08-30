'use strict';

/**
 * to-do-task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::to-do-task.to-do-task');
