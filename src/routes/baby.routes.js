const babyController = require('../controllers/baby.controller');
const AccountRoles = require('../enum/roles');
const { authorize } = require('../middlewares/authMiddleware');

const router = require('express').Router();

router.get("/getAllBabies", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), babyController.getAllBabies);
router.get("/getBabyById/:id", authorize(AccountRoles.CUSTOMER), babyController.getBabyById);
router.get("/getAccountBabies/:accountId", authorize(AccountRoles.CUSTOMER), babyController.getAccountBabies);
router.post("/createBaby", authorize(AccountRoles.CUSTOMER), babyController.createBaby);
router.delete("/deleteBaby/:id", authorize(AccountRoles.CUSTOMER), babyController.deleteBaby);
router.put("/updateBaby/:id", authorize(AccountRoles.CUSTOMER), babyController.updateBaby);

module.exports = router;