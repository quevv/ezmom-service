const OrderVoucherService = require("../services/order-voucher.service");

const getAllOrderVoucher = async (req, res) => {
    try {
        const { vouchers, total } = await OrderVoucherService.getAllOrderVoucher();
        res.status(200).json({
            msg: "Fetching order vouchers success!",
            vouchers,
            total
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getVoucherByOrder = async (req, res) => {
    try {
        const { orderId } = req.params;

        const { vouchers, total } = await OrderVoucherService.getVoucherByOrder(orderId);
        res.status(200).json({
            msg: "Fetching order vouchers success!",
            vouchers,
            total
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createOrderVoucher = async (req, res) => {
    try {
        const { orderId, voucherId } = req.body;
        const orderVoucherData = { orderId, voucherId };

        const result = await OrderVoucherService.createOrderVoucher(orderVoucherData);
        res.status(200).json({
            msg: "Creating order voucher success!",
            result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllOrderVoucher,
    getVoucherByOrder,
    createOrderVoucher,
}