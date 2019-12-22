'use strict';
const Service = require('egg').Service;

class LoginService extends Service {
  // 未绑定账号，需要首次登陆
  async login() {
    const { ctx } = this;
    // 未绑定账号，需要首次登陆
    // ctx.returnBody({
    //   code: '80001',
    //   data: {
    //     accessCode: '12212dsdf',
    //   },
    // });

    // 登陆
    ctx.returnBody({
      data: {
        accessToken: '12212dsdf',
      },
    });
  }

  // 获取验证码
  async getCode() {
    const { ctx } = this;
    // 正常情况
    // ctx.returnBody({});
    // 未绑定账号
    ctx.returnBody({ code: '80002', message: '未绑定账号' });
  }

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

module.exports = LoginService;
