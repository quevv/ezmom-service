const BrandRepository = require('../repositories/brand.repository');

class BrandService {
    static async getAllBrands(params) {
        try {
            const brands = await BrandRepository.getAllBrands(params);
            return brands;
        } catch (error) {
            throw new Error('Error fetching brands: ' + error.message);
        }
    }

    static async getBrandById(id) {
        try {
            const brand = await BrandRepository.getBrandById(id);
            return brand;
        } catch (error) {
            throw new Error('Error fetching brand: ' + error.message);
        }
    }

    static async updateBrand(id, updateData) {
        try {
            const brand = await BrandRepository.updateBrand(id, updateData);
            return brand;
        } catch (error) {
            throw new Error('Error updating brand: ' + error.message);
        }
    }

    static async createBrand(brand) {
        try {
            const result = await BrandRepository.createBrand(brand);
            return result;
        } catch (error) {
            throw new Error('Error fetching brand: ' + error.message);
        }
    }

    static async deleteBrand(id) {
        try {
            const result = await BrandRepository.deleteBrand(id);
            return result;
        } catch (error) {
            throw new Error('Error deleting brand: ' + error.message);
        }
    }
}

module.exports = BrandService;