const { default: AsyncQueue } = require('sequelize/lib/dialects/mssql/async-queue');
const BabyService = require('../services/baby.service');

const getAllBabies = async (req, res) => {
    try {
        const params = req.query;
        const babies = await BabyService.getAllBabies(params);
        if (babies) res.status(200).json({ msg: "Fetching babies success!", babies });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAccountBabies = async (req, res) => {
    try {
        const { accountId } = req.params;
        const params = req.query;
        const babies = await BabyService.getAccountBabies(accountId, params);
        if (babies) res.status(200).json({ msg: "Fetching babies success!", babies });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getBabyById = async (req, res) => {
    try {
        const { id } = req.params;
        const baby = await BabyService.getBabyById(id);
        res.status(200).json({ msg: "Fetching babies success!", baby });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createBaby = async (req, res) => {
    try {
        const baby = req.body;
        const result = await BabyService.createBaby(baby);
        res.status(200).json({ msg: "Create baby success!", result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateBaby = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const babies = await BabyService.updateBaby(id, updatedData);
        if (babies) res.status(200).json({ msg: "Updating baby success!", babies });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteBaby = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await BabyService.deleteBaby(id);
        if (result === 1) res.status(200).json({ msg: "deleting baby success!" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllBabies,
    getAccountBabies,
    getBabyById,
    createBaby,
    updateBaby,
    deleteBaby
};