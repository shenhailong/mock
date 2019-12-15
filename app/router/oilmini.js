'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  const newsRouter = router.namespace('/oilmini');
  newsRouter.get('/oil', controller.oilmini.index.index);
};
