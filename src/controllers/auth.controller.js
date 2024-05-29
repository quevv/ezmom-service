const AuthService = require('../services/auth.service');

const register = async (req, res) => {
    try {
        const accountData = req.body;
        const result = await AuthService.register(accountData);
        res.status(200).json({ msg: "Register successfully!", result })
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { account, token } = await AuthService.login(email, password);
        res.status(200).json({ msg: 'Login successful', token, account });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

module.exports = { register, login };