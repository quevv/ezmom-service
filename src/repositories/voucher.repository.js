const Voucher = require('../models/voucher.model');

class VoucherRepository {
    static async getAllVouchers(params) {
        try {
            const { search, filter, sort, page = 1, pageSize = 10 } = params;

            const whereClause = {};
            if (search) {
                whereClause[Op.or] = [
                    { name: { [Op.iLike]: `%${search}%` } },
                    { description: { [Op.iLike]: `%${search}%` } }
                ];
            }

            if (filter) {
                Object.assign(whereClause, filter);
            }

            const options = {
                where: whereClause,
                order: sort ? [sort] : [['createdAt', 'ASC']],
                offset: (page - 1) * pageSize,
                limit: pageSize,
            };

            const { count, rows } = await Voucher.findAndCountAll(options);
            return { vouchers: rows, total: count };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getVoucherById(id) {
        try {
            const voucher = await Voucher.findByPk(id);
            if (voucher) {
                return voucher;
            }
            throw new Error('Voucher not found!');
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createVoucher(voucherData) {
        try {
            const result = await Voucher.create(voucherData);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateVoucher(id, updatedData) {
        try {
            const voucher = await Voucher.findByPk(id);
            if (voucher) {
                Object.assign(voucher, updatedData);
                await voucher.save();
                return await Voucher.findByPk(id);
            }
            throw new Error('Voucher not found!');
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteVoucher(id) {
        try {
            const voucher = await Voucher.findByPk(id);
            if (voucher) {
                const result = await Voucher.destroy({
                    where: {
                        voucherId: id
                    }
                });
                return result;
            }
            throw new Error('Voucher not found!');
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = VoucherRepository;