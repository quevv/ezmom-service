const { Order, Account, OrderDetails, Product } = require('../models');
const OrderVoucher = require('../models/order-voucher.model');
const Voucher = require('../models/voucher.model');

class OrderRepository {
    static async getAllOrders(params) {
        try {
            const { filter, sort, page = 1, pageSize = 10 } = params;
            console.log(Order.associations);
            const whereClause = {};
            if (filter) {
                Object.assign(whereClause, filter);
            }

            const options = {
                where: whereClause,
                include: [
                    {
                        model: OrderDetails,
                        include: [
                            {
                                model: Product,
                            },
                        ],
                        attributes: { exclude: ['order_id', 'product_id'] }
                    },
                    {
                        model: Voucher,
                    },
                ],
                attributes: { exclude: ['account_id', 'accountId'] },
                order: sort ? [sort] : [['createdAt', 'DESC']],
                offset: (page - 1) * pageSize,
                limit: pageSize,
            }

            const { rows, count } = await Order.findAndCountAll(options);
            return { orders: rows, total: count };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getOrderById(id) {
        try {
            const order = await Order.findByPk(id, {
                include: [
                    {
                        model: OrderDetails,
                        include: [
                            {
                                model: Product,
                            }
                        ],
                        attributes: { exclude: ['order_id', 'product_id'] }
                    },
                    {
                        model: OrderVoucher,
                        include: [
                            {
                                model: Voucher,
                            }
                        ],
                    },
                ],
                attributes: { exclude: ['account_id', 'accountId'] },
            });
            return order;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createOrder(orderData) {
        try {
            const account = await Account.findByPk(orderData.accountId);
            if (account) {
                const result = await Order.create(orderData);
                return result;
            }
            else throw new Error('Account not found!');
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateOrder(id, updatedData) {
        try {
            const order = await Order.findByPk(id);
            if (order) {
                const account = await Account.findByPk(orderData.accountId);
                if (account) {
                    Object.assign(order, updatedData);
                    await order.save();
                    return await Order.findByPk(id);
                }
                else throw new Error('Account not found!');
            }
            else throw new Error('Order not found!');

        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteOrder(id) {
        try {
            const order = await Order.findByPk(id);
            if (order) {
                const result = await Order.destroy({
                    where: {
                        orderId: id,
                    }
                });
                return order;
            }
            else throw new Error('Order not found!');

        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = OrderRepository;