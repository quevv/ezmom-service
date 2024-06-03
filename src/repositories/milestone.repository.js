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
}