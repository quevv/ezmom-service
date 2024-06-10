const UserVoucherRepository = require('../repositories/user-voucher.reposytory');

class UserVoucherService {
    static async getAllUserVouchers() {
        try {
            return await UserVoucherRepository.getAllUserVouchers();
        } catch (error) {
            throw new Error(`Error fetching user's voucher: ${error.message}`);
        }
    }

    static async getVouchersbyUserId(userId) {
        try {
            return await UserVoucherRepository.getVouchersbyUserId(userId);
        } catch (error) {
            throw new Error(`Error fetching user's voucher: ${error.message}`);
        }
    }

    static async createUserVoucher(userVoucherData) {
        try {
            return await UserVoucherRepository.createUserVoucher(userVoucherData);
        } catch (error) {
            throw new Error(`Error creating user voucher: ${error.message}`);
        }
    }

    static async updateUserVoucher(id, updatedData) {
        try {
            return await UserVoucherRepository.updateUserVoucher(id, updatedData);
        } catch (error) {
            throw new Error(`Error updating user voucher: ${error.message}`);
        }
    }

    static async deleteUserVoucher(id) {
        try {
            return await UserVoucherRepository.deleteUserVoucher(id);
        } catch (error) {
            throw new Error(`Error deleting user voucher: ${error.message}`);
        }
    }
}

module.exports = UserVoucherService;