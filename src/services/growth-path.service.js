const GrowthPathRepository = require('../repositories/growth-path.repository');

class GrowthPathService {
    static async getAllGrowthPaths(params) {
        try {
            return await GrowthPathRepository.getAllGrowthPaths(params);
        } catch (error) {
            throw new Error(`Error fetching growth paths: ${error.message}`);
        }
    }

    static async getGrowthPathById(id) {
        try {
            return await GrowthPathRepository.getGrowthPathById(id);
        } catch (error) {
            throw new Error(`Error fetching growth path: ${error.message}`);
        }
    }

    static async getPostsByGrowthPath(growthPathId, params) {
        try {
            return await GrowthPathRepository.getPostsByGrowthPath(growthPathId, params);
        } catch (error) {
            throw new Error(`Error fetching growth paths: ${error.message}`);
        }
    }

    static async createGrowthPath(growthPathData) {
        try {
            return await GrowthPathRepository.createGrowthPath(growthPathData);
        } catch (error) {
            throw new Error(`Error creating growth path: ${error.message}`)
        }
    }

    static async updateGrowthPath(id, updatedData) {
        try {
            return await GrowthPathRepository.updateGrowthPath(id, updatedData)
        }
        catch (error) {
            throw new Error(`Error updating growth path: ${error.message}`);
        }
    }

    static async deleteGrowthPath(id) {
        try {
            return await GrowthPathRepository.deleteGrowthPath(id);
        } catch (error) {
            throw new Error(`Error deleting growth path: ${error.message}`);
        }
    }
}

module.exports = GrowthPathService;