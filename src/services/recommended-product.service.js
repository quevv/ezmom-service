const RecommendedProductRepo = require('../repositories/recommended-product.repository');

class RecommendedProductService {
    static async getAllRecommendedProducts() {
        try {
            return await RecommendedProductRepo.getAllRecommendedProducts();
        } catch (error) {
            throw new Error(`Error creating recommended product: ${error.message}`);
        }
    }

    static async getRecommendedProductById(id) {
        try {
            return await RecommendedProductRepo.getRecommendedProductById(id);
        } catch (error) {
            throw new Error(`Error creating recommended product: ${error.message}`);
        }
    }

    static async createRecommendedProduct(recommendedData) {
        try {
            return await RecommendedProductRepo.createRecommendedProduct(recommendedData);
        } catch (error) {
            throw new Error(`Error creating recommended product: ${error.message}`);
        }
    }
}

module.exports = RecommendedProductService;