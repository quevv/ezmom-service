const ProductRepository = require('../repositories/product.repository');

class ProductService {
    static async getAllProducts(params) {
        try {
            return await ProductRepository.getAllProducts(params);
        } catch (error) {
            throw new Error('Error fetching products: ' + error.message);

        }
    }

    static async getProductById(id) {
        try {
            const product = await ProductRepository.getProductById(id);
            return product;
        } catch (error) {
            throw new Error('Error fetching product: ' + error.message);
        }
    }

    static async createProduct(product) {
        try {
            return await ProductRepository.createProduct(product);
        } catch (error) {
            throw new Error('Error creating product: ' + error.message);
        }
    }

    static async updateProduct(id, updatedData) {
        try {
            return await ProductRepository.updateProduct(id, updatedData);
        } catch (error) {
            throw new Error('Error updating product: ' + error.message);
        }
    }

    static async deleteProduct(id) {
        try {
            return await ProductRepository.deleteProduct(id);
        } catch (error) {
            throw new Error('Error deleting product: ' + error.message);
        }
    }
}

module.exports = ProductService;