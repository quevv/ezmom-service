const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const AccountRoles = require('../enum/roles');
const bcrypt = require('bcrypt')

class Account extends Model {
    async comparePassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}

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
    hooks: {
        beforeCreate: async (account) => {
            if (account.password) {
                const salt = await bcrypt.genSalt(10);
                account.password = await bcrypt.hash(account.password, salt);
            }
        },
        beforeUpdate: async (account) => {
            if (account.password) {
                const salt = await bcrypt.genSalt(10);
                account.password = await bcrypt.hash(account.password, salt);
            }
        }
    }
});

module.exports = Account;
