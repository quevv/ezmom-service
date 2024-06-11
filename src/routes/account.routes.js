const accountController = require('../controllers/account.controller');
const AccountRoles = require('../enum/roles');
const { authorize } = require('../middlewares/authMiddleware');

const router = require('express').Router();

router.get(
    "/getAllAccounts",
    authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE),
    accountController.getAllAccounts
);

router.get(
    "/getAccountById/:id",
    authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE),
    accountController.getAccountById
);

module.exports = router