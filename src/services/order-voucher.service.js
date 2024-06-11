const OrderVoucherRepository = require("../repositories/order-voucher.repository");

class OrderVoucherService {
    static async getAllOrderVoucher() {
        try {
            return await OrderVoucherRepository.getAllOrderVoucher();
        } catch (error) {
            throw new Error(`Error fetching order vouchers: ${error.message}`);

        }
    }

    static async getVoucherByOrder(orderId) {
        try {
            return await OrderVoucherRepository.getVoucherByOrder(orderId);
        } catch (error) {
            throw new Error(`Error fetching order vouchers: ${error.message}`);

        }
    }

    static async createOrderVoucher(orderVoucherData) {
        try {
            return await OrderVoucherRepository.createOrderVoucher(orderVoucherData);
        } catch (error) {
            throw new Error(`Error creating order voucher: ${error.message}`);

        }
    }

    // static async updateOrderVoucher() {
    //     try {

    //     } catch (error) {
    //         throw new Error(`Error updating order voucher: ${error.message}`);

    //     }
    // }

    // static async deleteOrderVoucher() {
    //     try {

    //     } catch (error) {
    //         throw new Error(`Error deleting order voucher: ${error.message}`);

    //     }
    // }
}

module.exports = OrderVoucherService;