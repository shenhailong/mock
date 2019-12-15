'use strict';
const Controller = require('egg').Controller;

class ArticleController extends Controller {
  // 列表
  async index() {
    const { ctx } = this;
    await ctx.service.oilmini.index.index(ctx.request.body);
  }

}

module.exports = ArticleController;

