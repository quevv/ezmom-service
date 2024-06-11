const router = require('express').Router();
const milestoneController = require('../controllers/milestone.controller');
const AccountRoles = require('../enum/roles');
const { authorize } = require('../middlewares/authMiddleware');

router.get('/getAll', milestoneController.getAllMilestones);
router.get('/getById/:id', milestoneController.getMilestoneById);
router.post('/create', authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), milestoneController.createMilestone);
router.put('/update/:id', authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), milestoneController.updateMilestone);
router.delete('/delete/:id', authorize(AccountRoles.ADMIN, AccountRoles.EMPLOYEE), milestoneController.deleteMilestone);

module.exports = router;
