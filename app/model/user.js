'use strict';
module.exports = app => {
    const {INTEGER, STRING} = app.Sequelize;
    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userName: {
            type: STRING(24),
            allowNull: false,
        },
        userAccount: {
            type: STRING(100),
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        userPassword: {
            type: STRING(100),
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        paranoid: true
    });
    return User;
};