const AccountRepository = require('../repositories/account.repository');

class AccountService {
    static async getAllAccounts() {
        try {
            const accounts = await AccountRepository.getAllAccounts();
            return accounts;
        } catch (err) {
            throw new Error('Error fetching accounts: ' + err.message)
        }
    }

    static async getAccountById(id) {
        try {
            const account = await AccountRepository.getAccountById(id);
            return account;
        } catch (err) {
            throw new Error('Error fetching account: ' + err.message)
        }
    }


}

module.exports = AccountService;