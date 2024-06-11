const { authorize } = require('../middlewares/authMiddleware');
const growthPathController = require('../controllers/growth-path.controller');
const AccountRoles = require('../enum/roles');
const router = require('express').Router()

router.get("/getAll", growthPathController.getAllGrowthPaths);
router.get("/getById/:id", growthPathController.getGrowthPathById);
router.get("/getPostsByGrowthPath/:growthPathId", growthPathController.getPostsByGrowthPath);
router.post("/create", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), growthPathController.createGrowthPath);
router.put("/update/:id", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), growthPathController.updateGrowthPath);
router.delete("/delete/:id", authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), growthPathController.deleteGrowthPath);


module.exports = router;