'use strict';
const Controller = require('egg').Controller;

class LoginController extends Controller {
  // 登陆
  async index() {
    const { ctx } = this;
    await ctx.service.oilMini.login.index();
  }
}

module.exports = LoginController;

