const { where } = require('sequelize');
const Brand = require('../models/brand.model');

class BrandRepository {
    static async getAllBrands(params) {
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
                order: sort ? [sort] : [['brandId', 'ASC']],
                offset: (page - 1) * pageSize,
                limit: pageSize,
            };

            const { count, rows } = await Brand.findAndCountAll(options);

            return { brands: rows, total: count };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getBrandbyId(id) {
        try {
            const brand = await Brand.findByPk(id);
            if (brand) {
                return brand;
            }
            else {
                throw new Error('Brand Not Found!');
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createBrand(brand) {
        try {
            const result = await Brand.create(brand);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateBrand(id, updateData) {
        try {
            const brand = await Brand.findByPk(id);
            if (brand) {
                const result = await brand.update(updateData)
                return result;
            }
            else {
                throw new Error('Brand Not Found!');
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteBrand(id) {
        try {
            const brand = await Brand.findByPk(id);
            if (brand) {
                const result = await Brand.destroy({
                    where: {
                        brand_id: id,
                    }
                })
                return result;
            }
            else {
                throw new Error('Brand Not Found!');
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = BrandRepository;