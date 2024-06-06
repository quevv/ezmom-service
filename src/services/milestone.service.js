const MilestoneRepository = require('../repositories/milestone.repository');

class MilestoneService {
    static async getAllMilestones() {
        try {
            return await MilestoneRepository.getAllMilestones();
        } catch (error) {
            throw new Error(`Error fetching milestones: ${error.message}`);
        }
    }

    static async getMilestoneById(id) {
        try {
            return await MilestoneRepository.getMilestoneById(id)
        } catch (error) {
            throw new Error(`Error fetching milestone: ${error.message}`);
        }
    }

    static async createMilestone(milestoneData) {
        try {
            return await MilestoneRepository.createMilestone(milestoneData);
        } catch (error) {
            throw new Error(`Error creating milestone: ${error.message}`);
        }
    }

    static async updateMilestone(id, updatedData) {
        try {
            return await MilestoneRepository.updateMilestone(id, updatedData);
        } catch (error) {
            throw new Error(`Error updating milestone: ${error.message}`);
        }
    }

    static async deleteMilestone(id) {
        try {
            return await MilestoneRepository.deleteMilestone(id);
        } catch (error) {
            throw new Error(`Error deleting milestone: ${error.message}`);
        }
    }
}

module.exports = MilestoneService;