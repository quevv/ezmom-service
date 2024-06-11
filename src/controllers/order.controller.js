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

const createOrder = async (req, res) => {
    try {
        const {
            accountId,
            orderStatus,
            paymentType,
            shippingAddress,
            totalPrice,
            createdAt,
            updatedAt
        } = req.body;

        const orderData = {
            accountId,
            orderStatus,
            paymentType,
            shippingAddress,
            totalPrice,
            createdAt: createdAt ? createdAt : new Date(),
            updatedAt: updatedAt ? updatedAt : new Date(),
        };
        const result = await OrderService.createOrder(orderData);
        res.status(200).json({
            msg: "Creating order success!",
            result
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const result = await OrderService.updateOrder(id, updatedData);
        res.status(200).json({
            msg: "Fetching order success!",
            result
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await OrderService.deleteOrder(id);
        if (result) {
            res.status(200).json({
                msg: "Deleting order success!",
            });
        }

    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}