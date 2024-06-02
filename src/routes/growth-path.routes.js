const growthPathController = require('../controllers/growth-path.controller');
const router = require('express').Router()

router.get("/getAll", growthPathController.getAllGrowthPaths);
router.get("/getById/:id", growthPathController.getGrowthPathById);
router.get("/getPostsByGrowthPath/:growthPathId", growthPathController.getPostsByGrowthPath);
router.post("/create", growthPathController.createGrowthPath);
router.put("/update/:id", growthPathController.updateGrowthPath);
router.delete("/delete/:id", growthPathController.deleteGrowthPath);


module.exports = router;