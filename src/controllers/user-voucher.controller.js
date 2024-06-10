const { create } = require('../models/brand.model');
const UserVoucherService = require('../services/user-voucher.service');

const getAllUserVouchers = async (req, res) => {
    try {
        const { vouchers, total } = await UserVoucherService.getAllUserVouchers();
        res.status(200).json({
            msg: "Fetching user vouchers success!",
            vouchers,
            total
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getVouchersbyUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        const { vouchers, total } = await UserVoucherService.getVouchersbyUserId(userId);
        res.status(200).json({
            msg: "Fetching user vouchers success!",
            vouchers,
            total
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createUserVoucher = async (req, res) => {
    try {
        const { userId, voucherId, status } = req.body;
        const userVoucherData = { userId, voucherId, status, createdAt: new Date(), updatedAt: new Date() };

        const result = await UserVoucherService.createUserVoucher(userVoucherData);
        res.status(200).json({
            msg: "Creating user vouchers success!",
            result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateUserVoucher = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, voucherId, status } = req.body;
        const updatedAt = new Date();
        const updatedData = {
            userId,
            voucherId,
            status,
            updatedAt
        };

        const result = await UserVoucherService.updateUserVoucher(id, updatedData);
        res.status(200).json({
            msg: "Updating user vouchers success!",
            result
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteUserVoucher = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserVoucherService.deleteUserVoucher(id);
        if (result) {
            res.status(200).json({
                msg: "Deleting user vouchers success!"
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllUserVouchers,
    getVouchersbyUserId,
    createUserVoucher,
    updateUserVoucher,
    deleteUserVoucher,
}