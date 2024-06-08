const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const { VoucherTypes, VoucherStatus } = require('../enum/voucher.enum')
class Voucher extends Model { }

Voucher.init({
    voucherId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'voucher_id',
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    discount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            isDecimal: {
                msg: 'discount must be an decimal number!'
            },
            min: {
                args: [0.01],
                msg: 'discount must be a positive number!'
            }
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    type: {
        type: DataTypes.ENUM(...Object.values(VoucherTypes)),
        allowNull: false,
        defaultValue: VoucherTypes.PERCENTAGE,
    },
    status: {
        type: DataTypes.ENUM(...Object.values(VoucherStatus)),
        allowNull: false,
        defaultValue: VoucherStatus.INACTIVE,
    },
    minBill: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        validate: {
            isDecimal: {
                msg: 'minBill must be an decimal number!'
            },
            min: {
                args: [0.01],
                msg: 'minBill must be a positive number!'
            }
        },
        field: 'min_bill'
    },
    maxDiscount: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        validate: {
            isDecimal: {
                msg: 'maxDiscount must be an decimal number!'
            },
            min: {
                args: [0.01],
                msg: 'maxDiscount must be a positive number!'
            }
        },
        field: 'max_money_discount',
    },
    expireDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'expire_date',
        validate: {
            isFutureDate(value) {
                if (new Date(value) <= new Date()) {
                    throw new Error('expireDate must be a future date!');
                }
            }
        }
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
    modelName: 'Voucher',
    tableName: 'voucher',
});

module.exports = Voucher;