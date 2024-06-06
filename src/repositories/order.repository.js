const { Order, Account, OrderDetails, Product } = require('../models');

class OrderRepository {
    static async getAllOrders(params) {
        try {
            const { filter, sort, page = 1, pageSize = 10 } = params;

            const whereClause = {};
            if (filter) {
                Object.assign(whereClause, filter);
            }

            const options = {
                where: whereClause,
                include: [
                    {
                        model: Account,
                        attributes: { exclude: ['password'] }
                    },
                    {
                        model: OrderDetails,
                        include: [
                            {
                                model: Product,
                            }
                        ],
                        attributes: { exclude: ['order_id', 'product_id'] }
                    }
                ],
                attributes: { exclude: ['account_id', 'accountId'] },
                order: sort ? [sort] : [['createdAt', 'DESC']],
                offset: (page - 1) * pageSize,
                limit: pageSize,
            }

            const { rows, count } = await Order.findAndCountAll(options);
            console.log(count);
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
                        model: Account,
                        attributes: { exclude: ['password'] }
                    },
                    {
                        model: OrderDetails,
                        include: [
                            {
                                model: Product,
                            }
                        ],
                        attributes: { exclude: ['order_id', 'product_id'] }
                    }
                ],
                attributes: { exclude: ['account_id', 'accountId'] },
            });
            return order;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = OrderRepository;