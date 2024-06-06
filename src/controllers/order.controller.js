const OrderService = require('../services/order.service');

const getAllOrders = async (req, res) => {
    try {
        const { filter, sort, page, pageSize } = req.query;
        const params = {
            filter: filter ? JSON.parse(filter) : undefined,
            sort: sort ? JSON.parse(sort) : undefined,
            page: page ? parseInt(page, 10) : 1,
            pageSize: pageSize ? parseInt(pageSize, 10) : 10,
        };
        const { orders, total } = await OrderService.getAllOrders(params);
        res.status(200).json({
            msg: "Fetching orders success!",
            orders,
            total
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await OrderService.getOrderById(id);
        res.status(200).json({
            msg: "Fetching order success!",
            order
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
}