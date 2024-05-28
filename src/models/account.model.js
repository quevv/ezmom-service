const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const AccountRoles = require('../enum/roles');

class Account extends Model { }

Account.init({
    accountId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'account_id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'phone_number'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM(...Object.values(AccountRoles)),
        allowNull: false,
        defaultValue: AccountRoles.CUSTOMER,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    }
}, {
    sequelize,
    modelName: 'Account',
    tableName: 'account',
});

module.exports = Account;
