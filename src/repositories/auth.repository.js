const Account = require('../models/account.model');
const jwt = require('jsonwebtoken');

class AuthRepository {
    static async register(accountData) {
        try {
            const account = await Account.create(accountData);
            return account;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async login(email, password) {
        try {
            const account = await Account.findOne({ where: { email } });
            if (!account) {
                throw new Error('Account not found');
            }

            const isMatch = await account.comparePassword(password);
            if (!isMatch) {
                throw new Error('Invalid password');
            }

            const token = jwt.sign(
                { id: account.accountId, role: account.role },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN }
            );
            const accountInfo = {
                accountId: account.accountId,
                name: account.name,
                email: account.email,
                role: account.role,
                createdAt: account.createdAt,
                updatedAt: account.updatedAt
            };

            return { account: accountInfo, token };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}

module.exports = AuthRepository;