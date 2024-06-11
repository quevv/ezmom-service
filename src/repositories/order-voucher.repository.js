const OrderVoucher = require("../models/order-voucher.model");
const Voucher = require("../models/voucher.model");

class OrderVoucherRepository {
    static async getAllOrderVoucher() {
        try {
            const options = {
                include: [
                    {
                        model: Voucher,
                        as: 'voucher',
                    }
                ],
            }
            const { rows, count } = await OrderVoucher.findAndCountAll(options);
            return { vouchers: rows, total: count };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getVoucherByOrder(orderId) {
        try {
            const options = {
                where: {
                    orderId: orderId
                },
                include: [
                    {
                        model: Voucher,
                        as: 'voucher',
                    }
                ],
            };
            const { rows, count } = await OrderVoucher.findAndCountAll(options);
            return { vouchers: rows, total: count };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createOrderVoucher(orderVoucherData) {
        try {
            const result = await OrderVoucher.create(orderVoucherData);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    // static async updateOrderVoucher() {
    //     try {

    //     } catch (error) {
    //         throw new Error(error.message);
    //     }
    // }

    // static async deleteOrderVoucher() {
    //     try {

    //     } catch (error) {
    //         throw new Error(error.message);
    //     }
    // }
}

module.exports = OrderVoucherRepository;