const brandController = require('../controllers/brand.controller');

const router = require('express').Router();

router.get("/getAllBrands", brandController.getAllBrands);
router.get("/getBrandById/:id", brandController.getBrandById);
router.post("/createBrand", brandController.createBrand);
router.delete("/deleteBrand/:id", brandController.deleteBrand);
router.put("/updateBrand", brandController.updateBrand);

module.exports = router;