const Account = require('../models/account.model');

class AccountRepository {
    static async getAllAccounts() {
        try {
            const accounts = await Account.findAll({
                attributes: { exclude: ['password'] }
            });
            return accounts;
        } catch (err) {
            throw new Error('Error fetching accounts: ' + err.message)
        }
    }

    static async getAccountById(id) {
        try {
            const account = await Account.findByPk(
                id,
                {
                    attributes: { exclude: ['password'] }
                }
            );
            return account;
        } catch (err) {
            throw new Error('Error fetching account: ' + err.message)
        }
    }
}

module.exports = AccountRepository;