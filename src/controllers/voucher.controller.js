const VoucherService = require('../services/voucher.service');

const getAllVouchers = async (req, res) => {
    try {
        const { search, filter, sort, page, pageSize } = req.query;
        const params = {
            search: search || undefined,
            filter: filter ? JSON.parse(filter) : undefined,
            sort: sort ? JSON.parse(sort) : undefined,
            page: page ? parseInt(page, 10) : 1,
            pageSize: pageSize ? parseInt(pageSize, 10) : 10,
        };

        const { vouchers, total } = await VoucherService.getAllVouchers(params);
        res.status(200).json({
            msg: "Fetching vouchers success!",
            vouchers,
            total,
            page: params.page,
            pageSize: params.pageSize
        });
    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
}

const getVoucherById = async (req, res) => {
    try {
        const { id } = req.params;
        const voucher = await VoucherService.getVoucherById(id);
        res.status(200).json({
            msg: "Fetching voucher success!",
            voucher,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
}

const createVoucher = async (req, res) => {
    try {
        const {
            name,
            description,
            discount,
            type,
            status,
            minBill,
            expireDate,
            maxDiscount
        } = req.body;

        if (!name || !discount || !expireDate) {
            return res.status(400).json({ error: 'Missing required fields!' });
        }

        const formattedDate = new Date(expireDate);
        const voucherData = {
            name,
            description,
            discount,
            type,
            status,
            minBill,
            expireDate: formattedDate,
            maxDiscount
        }

        const result = await VoucherService.createVoucher(voucherData);
        res.status(200).json({
            msg: "Creating voucher success!",
            result,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
}

const updateVoucher = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const result = await VoucherService.updateVoucher(id, updatedData);
        res.status(200).json({
            msg: "Updating voucher success!",
            result,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
}

const deteleVoucher = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await VoucherService.deleteVoucher(id);
        if (result === 1) {
            res.status(200).json({
                msg: "Deleting voucher success!",
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });;
    }
}

module.exports = {
    getAllVouchers,
    getVoucherById,
    createVoucher,
    updateVoucher,
    deteleVoucher,
}