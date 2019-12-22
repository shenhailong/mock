'use strict';

/**
 * @param {Egg.Application} app - egg application
 * 油卡小程序mock，接口
 */

module.exports = app => {
  const { router, controller } = app;
  const newsRouter = router.namespace('/oilMini');
  // newsRouter.get('/oil', controller.oilMini.index.index);
  newsRouter.post('/auth/login', controller.oilMini.login.login);
  newsRouter.post('/auth/login/sms', controller.oilMini.login.getCode);

  // newsRouter.get('/api/weapp/login/miniProgramLogin', controller.oilMini.login.index);

};
