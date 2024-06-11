const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class OrderVoucher extends Model { }

OrderVoucher.init({
    orderVoucherId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'order_voucher_id'
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'order',
            key: 'order_id'
        },
        field: 'order_id'
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
}, {
    sequelize,
    modelName: 'OrderVoucher',
    tableName: 'order_voucher',
    timestamps: false,
});

module.exports = OrderVoucher;