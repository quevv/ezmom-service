const AuthRepository = require('../repositories/auth.repository');
const { UnauthorizedError } = require('../error');

const authorize = (...roles) => {
    return async (req, res, next) => {
        try {
            if (!req.headers.authorization) {
                throw new UnauthorizedError('Token not found!');
            }

            const token = req.headers.authorization.split(' ')[1];
            const decoded = await AuthRepository.verifyToken(token);

            if (!roles.includes(decoded.role)) {
                throw new UnauthorizedError('Unauthorized');
            }

            req.account = decoded;
            next();
        } catch (error) {
            res.status(401).json({ error: error.message });
            next(error);
        }
    };
};

module.exports = { authorize };
