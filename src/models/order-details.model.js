const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./order.model');
const Product = require('./product.model');

class OrderDetails extends Model { }

OrderDetails.init({
    orderDetailsId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'order_details_id'
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'product',
            key: 'product_id'
        },
        field: 'product_id'
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
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'quantity',
        validate: {
            isDecimal: {
                msg: 'Must be an decimal number!'
            },
            min: {
                args: [0.01],
                msg: 'Must be a positive number!'
            }
        }
    },
    unitPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        field: 'unit_price',
        validate: {
            isInt: {
                msg: 'Must be an integer number!'
            },
            min: {
                args: [1],
                msg: 'Must be a positive number!'
            }
        }
    }
}, {
    sequelize,
    modelName: 'OrderDetails',
    tableName: 'order_details',
    timestamps: false
});


module.exports = OrderDetails;