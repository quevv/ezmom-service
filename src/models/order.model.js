const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const { PaymentType, OrderStatus } = require('../enum/order.enum');
const Account = require('./account.model');
const OrderDetails = require('./order-details.model');

class Order extends Model { }

Order.init({
    orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'order_id'
    },
    accountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'account_id'
    },
    orderStatus: {
        type: DataTypes.ENUM(...Object.values(OrderStatus)),
        allowNull: false,
        field: 'order_status',
        defaultValue: OrderStatus.PENDING
    },
    paymentType: {
        type: DataTypes.ENUM(...Object.values(PaymentType)),
        allowNull: false,
        field: 'payment_type',
        defaultValue: PaymentType.CASH
    },
    shippingAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'shipping_address'
    },
    totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        field: 'total_price',
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
    modelName: 'Order',
    tableName: 'orders',
    // timestamps: false,
});


module.exports = Order;