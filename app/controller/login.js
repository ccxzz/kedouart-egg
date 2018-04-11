'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        const {ctx, service } = this;
        const serviceRes = await service.user.create({
            userName: 'seasonstar',
            userAccount: 'ddddddddddddddd',
            userPassword: 'tang98',
        });
        ctx.body = serviceRes;
    }
}

module.exports = LoginController;
