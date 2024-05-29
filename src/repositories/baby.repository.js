const Baby = require('../models/baby.model');
const { Op } = require('sequelize');

class BabyRepository {
    static async getAllBabies(params) {
        try {
            const { rows, count } = await Baby.findAndCountAll();
            return { babies: rows, total: count };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getAccountBabies(id, params) {
        try {
            const { search, filter, sort, page = 1, pageSize = 10 } = params;

            const whereClause = {};
            if (search) {
                whereClause[Op.or] = [
                    { baby_name: { [Op.iLike]: `%${search}%` } },
                ];
            }

            if (filter) {
                Object.assign(whereClause, filter);
            }

            const options = {
                where: [{ account_id: id }, whereClause],
                order: sort ? [sort] : [['dob', 'ASC']],
                offset: (page - 1) * pageSize,
                limit: pageSize,
            };

            const { count, rows } = await Baby.findAndCountAll(options);

            return { babies: rows, total: count };
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static async getBabyById(id) {
        try {
            const baby = await Baby.findByPk(id);
            if (baby) {
                return baby;
            }
            else {
                throw new Error("Product Not Found!");
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createBaby(baby) {
        try {
            const result = await Baby.create(baby);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateBaby(id, updatedData) {
        try {
            console.log(updatedData);
            const baby = await Baby.findByPk(id);
            if (!baby) {
                throw new Error('Baby not found');
            }
            else {
                Object.assign(baby, updatedData);
                await baby.save();
                return await Baby.findByPk(id);;
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteBaby(id) {
        try {
            const baby = await Baby.findByPk(id);
            if (baby) {
                const result = await Baby.destroy({
                    where: {
                        baby_id: id,
                    }
                });
                return result;
            }
            else throw new Error("Baby Not Found!");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = BabyRepository;