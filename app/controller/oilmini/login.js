'use strict';
const Controller = require('egg').Controller;

class LoginController extends Controller {
  // 登陆
  async index() {
    const { ctx } = this;
    await ctx.service.oilmini.login.index(ctx.request.body);
  }
}

module.exports = LoginController;

