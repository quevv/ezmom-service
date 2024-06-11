const brandController = require('../controllers/brand.controller');
const AccountRoles = require('../enum/roles');
const { authorize } = require('../middlewares/authMiddleware');

const router = require('express').Router();

router.get("/getAllBrands", brandController.getAllBrands);
router.get("/getBrandById/:id", brandController.getBrandById);
router.post("/createBrand", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), brandController.createBrand);
router.delete("/deleteBrand/:id", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), brandController.deleteBrand);
router.put("/updateBrand", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), brandController.updateBrand);

module.exports = router;