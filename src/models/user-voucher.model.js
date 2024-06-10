const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const { UserVoucherStatus } = require('../enum/voucher.enum');

class UserVoucher extends Model { }
UserVoucher.init({
    userVoucherId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'user_voucher_id'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'account',
            key: 'account_id'
        },
        field: 'user_id'
    },
    voucherId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'voucher',
            key: 'voucher_id'
        },
        field: 'voucher_id'
    },
    status: {
        type: DataTypes.ENUM(...Object.values(UserVoucherStatus)),
        allowNull: false,
        defaultValue: UserVoucherStatus.ACTIVE,
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
    modelName: "UserVoucher",
    tableName: "user_voucher",
    timestamps: false
});

module.exports = UserVoucher;