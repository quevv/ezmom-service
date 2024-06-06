const router = require('express').Router();
const OrderController = require('../controllers/order.controller');

router.get('/getAll', OrderController.getAllOrders);
router.get('/getById/:id', OrderController.getOrderById);

module.exports = router;