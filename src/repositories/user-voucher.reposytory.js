const { where } = require('sequelize');
const { Account } = require('../models');
const UserVoucher = require('../models/user-voucher.model');
const Voucher = require('../models/voucher.model');

class UserVoucherRepository {
    static async getAllUserVouchers() {
        try {
            const options = {
                include: [
                    {
                        model: Voucher,
                        as: 'voucher',
                    }
                ],
            }
            const { rows, count } = await UserVoucher.findAndCountAll(options);
            return { vouchers: rows, total: count };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getVouchersbyUserId(userId) {
        try {
            const options = {
                where: {
                    userId: userId
                },
                include: [
                    {
                        model: Voucher,
                        as: 'voucher',
                    }
                ],
            }
            const { rows, count } = await UserVoucher.findAndCountAll(options);
            return { vouchers: rows, total: count };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createUserVoucher(userVoucherData) {
        try {
            const account = await Account.findByPk(userVoucherData.userId);
            if (account) {
                const voucher = await UserVoucher.findOne({
                    where: {
                        voucherId: userVoucherData.voucherId
                    }
                });
                if (!voucher) {
                    const result = await UserVoucher.create(userVoucherData);
                    return result;
                }
                else throw new Error('Voucher already added to this account!');
            }
            else throw new Error('Account not found!');
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateUserVoucher(id, updatedData) {
        try {
            const userVoucher = await UserVoucher.findByPk(id);
            if (userVoucher) {
                const account = await Account.findByPk(userVoucher.userId);
                if (account) {
                    const voucher = await Voucher.findByPk(userVoucher.voucherId);
                    if (voucher) {
                        Object.assign(userVoucher, updatedData);
                        await userVoucher.save();
                        return await UserVoucher.findByPk(id);
                    }
                    else throw new Error('Voucher not found!');
                }
                else throw new Error('Account not found!');
            }
            else throw new Error('User voucher not found!');
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteUserVoucher(id) {
        try {
            const userVoucher = await UserVoucher.findByPk(id);
            if (userVoucher) {
                const result = await userVoucher.destroy({
                    where: {
                        userVoucherId: id,
                    }
                });
                return result;
            } else throw new Error('Use voucher not found!');
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = UserVoucherRepository;