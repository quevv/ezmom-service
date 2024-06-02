const Brand = require('../models/brand.model');
const Product = require('../models/product.model');
const { Op } = require('sequelize');

class ProductRepository {
    static async getAllProducts(params) {
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
                include: [{ model: Brand, as: 'brand' }],
                order: sort ? [sort] : [['createdAt', 'ASC']],
                offset: (page - 1) * pageSize,
                limit: pageSize,
            };

            const { count, rows } = await Product.findAndCountAll(options);

            return { products: rows, total: count };
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static async getProductsByBrand(id, params) {
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
                where: [{ brand_id: id }, whereClause],
                include: [{ model: Brand, as: 'brand' }],
                order: sort ? [sort] : [['createdAt', 'ASC']],
                offset: (page - 1) * pageSize,
                limit: pageSize,
            };

            const { count, rows } = await Product.findAndCountAll(options);

            return { products: rows, total: count };
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static async getProductById(id) {
        try {
            const product = await Product.findByPk(
                id,
                {
                    include: [
                        {
                            model: Brand,
                            as: 'brand',
                            required: false,
                            attributes: ['brandId', 'name', 'description'],
                        }
                    ],
                    attributes: { exclude: ['brand_id'] },
                }
            );
            if (product) {
                return product;
            }
            else {
                throw new Error("Product Not Found!");
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createProduct(product) {
        try {
            const brand = await Brand.findByPk(product.brandId);
            if (brand) {
                const result = await Product.create(product);
                return result;
            }
            else throw new Error('Brand Not Found!');

        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateProduct(id, updatedData) {
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                throw new Error('Product not found');
            }
            else {
                const brand = await Brand.findByPk(product.brandId);
                if (!brand) {
                    throw new Error('Brand Not Found!');
                }
                Object.assign(product, updatedData);
                await product.save();
                return product;
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteProduct(id) {
        try {
            const product = await Product.findByPk(id);
            if (product) {
                const result = await Product.destroy({
                    where: {
                        product_id: id,
                    }
                });
                return result;
            }
            else throw new Error("Product Not Found!");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

}

module.exports = ProductRepository;