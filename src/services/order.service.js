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

    static async createOrder(orderData) {
        try {
            return await OrderRepository.createOrder(orderData);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateOrder(id, updatedData) {
        try {
            return await OrderRepository.updateOrder(id, updatedData)
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteOrder(id) {
        try {
            return await OrderRepository.deleteOrder(id)
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = OrderService;