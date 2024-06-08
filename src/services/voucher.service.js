const VoucherRepository = require('../repositories/voucher.repository');

class VoucherService {
    static async getAllVouchers(params) {
        try {
            return VoucherRepository.getAllVouchers(params);
        } catch (error) {
            throw new Error(`Error fetching vouchers: ${error.message}`);
        }
    }

    static async getVoucherById(id) {
        try {
            return VoucherRepository.getVoucherById(id);
        } catch (error) {
            throw new Error(`Error fetching voucher: ${error.message}`);
        }
    }

    static async createVoucher(voucherData) {
        try {
            return VoucherRepository.createVoucher(voucherData);
        } catch (error) {
            throw new Error(`Error creating voucher: ${error.message}`);
        }
    }

    static async updateVoucher(id, updatedData) {
        try {
            return VoucherRepository.updateVoucher(id, updatedData);
        } catch (error) {
            throw new Error(`Error updating voucher: ${error.message}`);
        }
    }

    static async deleteVoucher(id) {
        try {
            return VoucherRepository.deleteVoucher(id);
        } catch (error) {
            throw new Error(`Error deleting voucher: ${error.message}`);
        }
    }
}

module.exports = VoucherService;