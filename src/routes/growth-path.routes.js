const GrowthPathController = require('../controllers/growth-path.controller');
const router = require('express').Router()

router.get("/getAll", GrowthPathController.getAllGrowthPaths);
router.get("/getById/:id", GrowthPathController.getGrowthPathById);
router.get("/getPostsByGrowthPath/:growthPathId", GrowthPathController.getPostsByGrowthPath);
router.post("/create", GrowthPathController.createGrowthPath);
router.put("/update/:id", GrowthPathController.updateGrowthPath);
router.delete("/delete/:id", GrowthPathController.deleteGrowthPath);


module.exports = router;