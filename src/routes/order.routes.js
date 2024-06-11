const router = require('express').Router();
const OrderController = require('../controllers/order.controller');

router.get('/getAll', OrderController.getAllOrders);
router.get('/getById/:id', OrderController.getOrderById);
router.post('/create', OrderController.createOrder);
router.put('/update/:id', OrderController.updateOrder);
router.delete('/delete/:id', OrderController.deleteOrder);

module.exports = router;