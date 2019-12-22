'use strict';
const Controller = require('egg').Controller;

class LoginController extends Controller {
  // 登陆
  async login() {
    const { ctx } = this;
    await ctx.service.oilMini.login.login();
  }

  // 获取验证码
  async getCode() {
    const { ctx } = this;
    await ctx.service.oilMini.login.getCode();
  }
}

module.exports = LoginController;

