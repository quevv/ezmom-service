const GrowthPath = require('../models/growth-path.model');
const TakeCarePost = require('../models/take-care-post.model');

class GrowthPathRepository {
    static async getAllGrowthPaths(params) {
        try {
            const { rows, count } = await GrowthPath.findAndCountAll();
            return { growthPaths: rows, total: count };
        } catch (error) {
            throw new Error(error.message);
        }
    }
    static async getGrowthPathById(id) {
        try {
            const growthPath = await GrowthPath.findByPk(id);
            if (growthPath)
                return growthPath;
            throw new Error('Growth Path Not Found!');
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getPostsByGrowthPath(growthPathId, params) {
        return GrowthPath.findByPk(growthPathId, {
            include: {
                model: TakeCarePost,
                through: {
                    attributes: []
                }
            }
        });
    }

    static async createGrowthPath(growthPathData) {
        try {
            const growthPath = await GrowthPath.findAll({
                where: {
                    min_month: growthPathData.minMonth,
                    max_month: growthPathData.maxMonth
                }
            });
            if (growthPath.length == 0) {
                return await GrowthPath.create(growthPathData);
            } else {
                throw new Error(`Growth Path with min month: ${growthPathData.minMonth}, and max month: ${growthPathData.maxMonth} already existed!`)
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateGrowthPath(id, updatedData) {
        try {
            const growthPath = await GrowthPath.findByPk(id);
            if (!growthPath) {
                throw new Error('Growth Path not found!');
            }
            else {
                Object.assign(growthPath, updatedData);
                await growthPath.save();
                return await GrowthPath.findByPk(id);
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteGrowthPath(id) {
        try {
            const growthPath = await GrowthPath.findByPk(id);
            if (growthPath) {
                return await GrowthPath.destroy({
                    where: {
                        growth_path_id: id,
                    }
                });
            }
            else {
                throw new Error('Growth Path not found!');
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

module.exports = GrowthPathRepository;
