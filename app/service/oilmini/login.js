'use strict';
const Service = require('egg').Service;

class ArticleService extends Service {
  // 登陆
  async index() {
    const { ctx } = this;
    ctx.returnBody({
      header: {
        'user-openid-key': 'sad',
        'user-token-key': 'd',
      },
      data: {
        user: {
          storeAccountId: 349,
          accountNo: 'FS0006111111',
          authPhone: '',
          phone: '',
          hasStoreAccount: 'true',
          storeId: 221,
          storeName: '门店上架但服务下架简称的故事',
          openId: 'oPmTq0KrJXCznI18PylwOVPFyFDk',
          storeList: [
            {
              id: 221,
              name: '门店上架但服务下架简称的故事',
              inBusiness: false,
            },
          ],
        },
      },
    });
  }
}

module.exports = ArticleService;
