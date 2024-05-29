const babyController = require('../controllers/baby.controller');

const router = require('express').Router();

router.get("/getAllBabies", babyController.getAllBabies);
router.get("/getBabyById/:id", babyController.getBabyById);
router.get("/getAccountBabies/:accountId", babyController.getAccountBabies);
router.post("/createBaby", babyController.createBaby);
router.delete("/deleteBaby/:id", babyController.deleteBaby);
router.put("/updateBaby/:id", babyController.updateBaby);

module.exports = router;