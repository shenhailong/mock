'use strict';

const Service = require('egg').Service;
const Mock = require('mockjs');

class ArticleService extends Service {
  // 列表
  async index() {
    const { ctx } = this;
    // const list = await this.getList(data);
    const data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
      }],
    });
    ctx.returnBody({
      data,
    });
  }
}

module.exports = ArticleService;
