const GrowthPathService = require('../services/growth-path.service');

const getAllGrowthPaths = async (req, res) => {
    try {
        const { growthPaths, total } = await GrowthPathService.getAllGrowthPaths();
        res.status(200).json({ msg: "Fetching growth paths success!", growthPaths, total });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getGrowthPathById = async (req, res) => {
    try {
        const { id } = req.params;
        const growthPath = await GrowthPathService.getGrowthPathById(id);
        res.status(200).json({ msg: "Fetching growth path success!", growthPath });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getPostsByGrowthPath = async (req, res) => {
    try {
        const { growthPathId } = req.params;
        const params = req.query;
        const growthPaths = await GrowthPathService.getPostsByGrowthPath(growthPathId, params);
        res.status(200).json({ msg: "Fetching growth paths success!", growthPaths });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createGrowthPath = async (req, res) => {
    try {
        const growthPathData = req.body;
        const result = await GrowthPathService.createGrowthPath(growthPathData);
        res.status(200).json({ msg: "Creating growth paths success!", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateGrowthPath = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const result = await GrowthPathService.updateGrowthPath(id, updatedData);
        res.status(200).json({ msg: "Updating growth paths success!", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteGrowthPath = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await GrowthPathService.deleteGrowthPath(id);
        res.status(200).json({ msg: "Deleting growth paths success!", result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllGrowthPaths,
    getGrowthPathById,
    createGrowthPath,
    updateGrowthPath,
    deleteGrowthPath,
    getPostsByGrowthPath,
}