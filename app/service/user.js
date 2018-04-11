'use strict';
const Service = require('egg').Service;

class UserService extends Service {
    constructor(ctx) {
        super(ctx);
        this.models = this.app.model;
    }
    async create(params) {
        const user = await this.models.User.create({
            userName: params.userName,
            userAccount: params.userAccount,
            userPassword: params.userPassword
        });
        return user;
    }
}

module.exports = UserService
