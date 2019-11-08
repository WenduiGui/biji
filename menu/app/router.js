'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.header);
  router.get('/1', controller.home.header);
  router.get('/2', controller.home.manual);
  router.get('/3', controller.home.column);
  router.get('/4', controller.home.my);
  router.get('/details', controller.details.index);
  router.get('/catalog', controller.catalog.index);
  router.get('/jie', controller.jie.index);
};
