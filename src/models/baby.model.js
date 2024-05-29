const sequelize = require('../config/database');
const { DataTypes, Model, DATE } = require('sequelize');
const Gender = require('../enum/baby.enum');
const Account = require('./account.model');

class Baby extends Model { }
Baby.init({
    babyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'baby_id',
    },
    name: {
        type: DataTypes.STRING,
        field: 'baby_name',
        allowNull: false,
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM(...Object.values(Gender)),
        allowNull: true,
        defaultValue: Gender.UNSET,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: 'Must be an integer number!'
            }
        }
    },
    height: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        validate: {
            isDecimal: {
                msg: 'Must be an decimal number!'
            }
        }
    },
    accountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Account',
            key: 'accountId',
        },
        field: 'account_id'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: new DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at',
        defaultValue: new DATE,
    }
}, {
    sequelize,
    modelName: 'Baby',
    tableName: 'baby',
    timestamps: false,
});

Baby.belongsTo(Account, { foreignKey: 'accountId', as: 'account' });

module.exports = Baby;