const RecommendedProduct = require('../models/recommended-product.model');

class RecommendedProductRepository {
    static async getAllRecommendedProducts() {
        try {
            const { rows, count } = await RecommendedProduct.findAndCountAll();
            return { products: rows, total: count };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getRecommendedProductById(id) {
        try {
            const product = await RecommendedProduct.findByPk(id);
            return product;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createRecommendedProduct(recommendedData) {
        try {
            const isExisted = await RecommendedProduct.findOne({
                where: {
                    productId: recommendedData.productId,
                    milestoneId: recommendedData.milestoneId
                }
            });
            if (!isExisted) {
                const result = await RecommendedProduct.create(recommendedData);
                return result;
            }
            else throw new Error("Recommended product is already existed!");

        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = RecommendedProductRepository;