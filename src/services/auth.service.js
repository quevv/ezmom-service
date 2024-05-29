const AuthRepository = require('../repositories/auth.repository');

class AuthService {
    static async register(accountData) {
        try {
            return await AuthRepository.register(accountData);
        } catch (error) {
            throw new Error(`Error register this account: ${error.message}`);
        }
    }

    static async login(email, password) {
        try {
            return await AuthRepository.login(email, password);
        } catch (error) {
            throw new Error(`Error login account: ${error.message}`);
        }
    }
}

module.exports = AuthService;