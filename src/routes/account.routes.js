const accountController = require('../controllers/account.controller');

const router = require('express').Router();

router.get("/getAllAccounts", accountController.getAllAccounts);
router.get("/getAccountByID/:id", accountController.getAccountById);

module.exports = router