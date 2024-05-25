const AccountService = require('../services/account.service')

const getAllAccounts = async (req, res) => {
    try {
        const accounts = await AccountService.getAllAccounts();
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAccountById = async (req, res) => {
    const { id } = req.params
    try {
        const accounts = await AccountService.getAccountById(id);
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllAccounts, getAccountById };