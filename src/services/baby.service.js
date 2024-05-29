const BabyRepository = require('../repositories/baby.repository');

class BabyService {
    static async getAllBabies(params) {
        try {
            return await BabyRepository.getAllBabies(params);
        } catch (error) {
            throw new Error(`Error fetching babies: ${error.message}`);
        }
    }
    static async getAccountBabies(id, params) {
        try {
            return await BabyRepository.getAccountBabies(id, params);
        } catch (error) {
            throw new Error(`Error fetching babies: ${error.message}`);
        }
    }

    static async getBabyById(id) {
        try {
            return await BabyRepository.getBabyById(id);
        } catch (error) {
            throw new Error(`Error fetching baby: ${error.message}`);
        }
    }

    static async createBaby(baby) {
        try {
            return await BabyRepository.createBaby(baby);
        } catch (error) {
            throw new Error(`Error creating baby: ${error.message}`);
        }
    }

    static async updateBaby(id, updatedData) {
        try {
            return await BabyRepository.updateBaby(id, updatedData);
        }
        catch (error) {
            throw new Error(`Error updating baby: ${error.message}`);
        }
    }

    static async deleteBaby(id) {
        try {
            return await BabyRepository.deleteBaby(id);
        }
        catch (error) {
            throw new Error(`Error deleting baby: ${error.message}`);
        }
    }
}

module.exports = BabyService;
