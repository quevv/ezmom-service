const Milestone = require('../models/milestone.model');

class MilestoneRepository {
    static async getAllMilestones() {
        try {
            const { rows, count } = await Milestone.findAndCountAll();
            return { milestones: rows, total: count };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getMilestoneById(id) {
        try {
            const milestone = await Milestone.findByPk(id);
            if (milestone)
                return milestone;
            else throw new Error("Milestone not found!");
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async createMilestone(milestoneData) {
        try {
            const isExisted = await Milestone.findOne({
                where: {
                    minMonth: milestoneData.minMonth,
                    maxMonth: milestoneData.maxMonth
                }
            })
            if (!isExisted) {
                const result = await Milestone.create(milestoneData);
                return result;
            } else {
                throw new Error("Milestone are already existed!");
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateMilestone(id, updatedData) {
        try {
            const milestone = await Milestone.findByPk(id);
            if (milestone) {
                const isExisted = await Milestone.findOne({
                    where: {
                        minMonth: updatedData.minMonth,
                        maxMonth: updatedData.maxMonth
                    }
                })
                if (!isExisted) {
                    Object.assign(milestone, updatedData);
                    await milestone.save();
                    return await Milestone.findByPk(id);
                } else {
                    throw new Error("Milestone are already existed!");
                }
            }
            else throw new Error("Milestone not found!");
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async deleteMilestone(id) {
        const milestone = await Milestone.findByPk(id);
        if (milestone) {
            const result = await Milestone.destroy({
                where: {
                    milestoneId: id
                }
            })
            return result;
        }
        else throw new Error("Milestone not found!");
    }
}

module.exports = MilestoneRepository;