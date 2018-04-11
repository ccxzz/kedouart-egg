'use strict';
const sequelizeConfig = require('./config-sequelize');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523341646161_1323';

    config.sequelize = sequelizeConfig;

  // add your config here
  config.middleware = [];

  return config;
};
