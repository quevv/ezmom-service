const OrderRepository = require('../repositories/order.repository');

class OrderService {
    static async getAllOrders(params) {
        try {
            return await OrderRepository.getAllOrders(params);
        } catch (error) {
            throw new Error(`Error fetching orders: ${error.message}`);
        }
    }

    static async getOrderById(id) {
        try {
            return await OrderRepository.getOrderById(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = OrderService;