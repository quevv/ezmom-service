const MilestoneService = require('../services/milestone.service');

const getAllMilestones = async (req, res) => {
    try {
        const { milestones, total } = await MilestoneService.getAllMilestones();
        res.status(200).json({ msg: "Fetching milestones success!", milestones, total });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getMilestoneById = async (req, res) => {
    try {
        const { id } = req.params;
        const milestone = await MilestoneService.getMilestoneById(id);
        res.status(200).json({ msg: "Fetching milestone success!", milestone });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createMilestone = async (req, res) => {
    try {
        const milestoneData = req.body;
        const result = await MilestoneService.createMilestone(milestoneData);
        res.status(200).json({ msg: "Creating milestone success!", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateMilestone = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const result = await MilestoneService.updateMilestone(id, updatedData);
        res.status(200).json({ msg: "Updating milestone success!", result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteMilestone = async (req, res) => {
    try {
        const { id } = req.params;
        await MilestoneService.deleteMilestone(id);
        res.status(200).json({ msg: "Deleting milestone success!" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllMilestones,
    getMilestoneById,
    createMilestone,
    updateMilestone,
    deleteMilestone
}