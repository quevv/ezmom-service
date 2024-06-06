const router = require('express').Router();
const milestoneController = require('../controllers/milestone.controller');

router.get('/getAll', milestoneController.getAllMilestones);
router.get('/getById/:id', milestoneController.getMilestoneById);
router.post('/create', milestoneController.createMilestone);
router.put('/update/:id', milestoneController.updateMilestone);
router.delete('/delete/:id', milestoneController.deleteMilestone);

module.exports = router;
